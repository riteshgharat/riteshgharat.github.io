function StudyAt({ university }: { university: string }) {
  return (
    <span className="relative inline-block font-semibold cursor-default group whitespace-nowrap">
      <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-900">{university}</span>
      
      {/* Highlighter scribble effect */}
      <span className="absolute left-[-2%] bottom-[10%] w-[104%] h-[40%] bg-amber-200/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-10 rounded-sm"></span>
      
      {/* Floating graduation cap */}
      <span className="absolute -top-3 left-11/12 rotate-12 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-[400ms] cubic-bezier(0.175, 0.885, 0.32, 1.275) text-2xl pointer-events-none drop-shadow-md">
        🎓
      </span>
    </span>
  );
}

export default StudyAt;
