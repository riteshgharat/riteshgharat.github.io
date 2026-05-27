import { useState, useMemo, useRef, useEffect } from "react";

interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface GithubProps {
  username: string;
}

const GITHUB_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

// Seeded random number generator so useMemo returns consistent results
const mulberry32 = (a: number) => {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

function Github({ username }: GithubProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [positionClass, setPositionClass] = useState(
    "left-1/2 -translate-x-1/2",
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!userData && !loading) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (isHovered && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const popupWidth = 320; // Approximately the width of our popup

      // If it would overflow left, align to the left side of the word
      if (rect.left + rect.width / 2 - popupWidth / 2 < 10) {
        setPositionClass("left-0");
      }
      // If it would overflow right, align to the right side of the word
      else if (
        rect.left + rect.width / 2 + popupWidth / 2 >
        viewportWidth - 10
      ) {
        setPositionClass("right-0");
      }
      // Otherwise, perfectly center it
      else {
        setPositionClass("left-1/2 -translate-x-1/2");
      }
    }
  }, [isHovered]);

  // Generate a realistic looking static random grid once per component
  const contributionGrid = useMemo(() => {
    const grid = [];
    const randGen = mulberry32(12345); // deterministic seed
    for (let c = 0; c < 24; c++) {
      for (let r = 0; r < 7; r++) {
        const rand = randGen();
        let level = 0;
        if (rand > 0.45) level = 1;
        if (rand > 0.65) level = 2;
        if (rand > 0.8) level = 3;
        if (rand > 0.92) level = 4;
        grid.push(
          <div
            key={`${c}-${r}`}
            className="w-[12px] h-[12px] rounded-[3px]"
            style={{ backgroundColor: GITHUB_COLORS[level] }}
          />,
        );
      }
    }
    return grid;
  }, []);

  return (
    <div
      className="relative inline-block"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-transparent hover:decoration-black dark:hover:decoration-white transition-colors duration-300"
      >
        GitHub
      </a>

      {isHovered && (
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`absolute z-50 w-[320px] pb-2 bottom-full font-normal text-left cursor-crosshair transition-all duration-200 ${positionClass}`}
          >
            <div className="bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-[160px]">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
              ) : !userData || !userData.login ? (
                <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
                  User not found
                </div>
              ) : (
                <div className="flex flex-col">
                  <div
                    className="w-full pt-6 pb-2 px-2 flex justify-center"
                    style={{
                      maskImage:
                        "radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse at 50% 50%, black 50%, transparent 90%)",
                    }}
                  >
                    <div className="grid grid-rows-7 grid-flow-col gap-[4px] auto-cols-max">
                      {contributionGrid}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-start gap-4">
                    <img
                      src={userData.avatar_url}
                      alt={userData.login}
                      className="w-12 h-12 rounded-full border border-gray-100 dark:border-neutral-700 shadow-sm"
                    />
                    <div className="flex flex-col overflow-hidden leading-tight">
                      <span className="text-[16px] font-bold text-gray-900 dark:text-white mt-1">
                        @{userData.login}
                      </span>
                      {userData.bio && (
                        <span className="text-[14px] text-gray-500 dark:text-gray-400 truncate mt-1.5">
                          {userData.bio}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </a>
      )}
    </div>
  );
}

export default Github;
