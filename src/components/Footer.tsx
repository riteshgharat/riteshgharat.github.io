import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // catch Ctrl/Cmd + P and open PDF consistently
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        window.open("/resume.pdf", "_blank");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <footer className="absolute bottom-0 w-full h-14 px-2 sm:px-10 flex items-center justify-end-safe">
      <span className="absolute left-0 text-[12px] font-mono ml-4 text-gray-500">
        Credit:{" "}
        <a
          href="https://www.sunniekapar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sunniekapar
        </a>
      </span>
      <div className="text-sm font-mono">
        <button
          className="inline-block px-2 py-1 bg-gray-300 border-t-2 border-l-2 border-t-gray-100 border-l-gray-100 border-r-4 border-b-4 border-r-gray-600 border-b-gray-600 rounded text-black font-bold hover:border-r-2 hover:border-b-2 hover:translate-y-0.5 hover:translate-x-0.5 transition-all select-none cursor-pointer dark:bg-gray-700 dark:border-t-gray-500 dark:border-l-gray-500 dark:border-r-gray-900 dark:border-b-gray-900 dark:text-white"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Ctrl + P
        </button>
      </div>
    </footer>
  );
}

export default Footer;
