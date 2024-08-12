interface Props {
  author: string;
  company?: string;
  quote: string;
}

export function Quote({ author, company, quote }: Props) {
  return (
    <blockquote className="relative flex items-center flex-col max-w-[471.5px] px-5 sm:px-0 text-center text-xl sm:text-2xl sm:tracking-[-0.04rem] leading-[150%] sm:leading-[140%] font-bold text-accent before:w-[37.27px] before:h-[24px] before:left-0 before:self-start before:bg-[url('/assets/quote.svg')]">
      {quote}
      <cite className="flex gap-x-4 mt-6 sm:mt-8 leading-[150%] text-sm sm:text-base font-normal not-italic">
        <span>{author}</span>
        {company && <span className="text-gray-dark">{company}</span>}
      </cite>
    </blockquote>
  );
}
