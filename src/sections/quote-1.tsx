import { Quote } from "@/components";

interface Props {
  author: string;
  company?: string;
  quote: string;
}

export function Quote1({ author, company, quote }: Props) {
  return (
    <section className="grid place-items-center py-16">
      <Quote author={author} company={company} quote={quote} />
    </section>
  );
}
