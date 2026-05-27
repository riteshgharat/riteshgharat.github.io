function Twitter({ username }: { username?: string }) {
  return (
    <a
      href={`https://x.com/${username || ""}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block font-semibold group ml-1 mr-2"
    >
      <span className="relative inline-block">
        Twitter
        {/* The Red Squiggle / Strike-through */}
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5em] pointer-events-none stroke-[#e11d48]"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path
            d="M -5,25 Q 10,5 20,35 Q 35,-5 45,35 Q 60,-5 70,35 Q 85,5 105,25"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="[stroke-dasharray:200] [stroke-dashoffset:200] group-hover:[stroke-dashoffset:0] transition-all duration-[400ms] ease-out"
          />
        </svg>
      </span>
      {/* The X Logo */}
      <span className="absolute -top-3 -right-3 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 text-black dark:text-white z-10 w-auto h-auto">
        𝕏
      </span>
    </a>
  );
}

export default Twitter;
