function LinkedIn({ username }: { username?: string }) {
  return (
    <a
      href={`https://www.linkedin.com/in/${username || ""}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex overflow-hidden font-semibold align-bottom group h-[1.5em]"
    >
      <span className="inline-block transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        LinkedIn
      </span>
      <span className="absolute left-0 top-0 inline-block w-full transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 text-[#0A66C2] dark:text-[#70B5F9]">
        Connect
      </span>
    </a>
  );
}

export default LinkedIn;
