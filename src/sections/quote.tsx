import { Quote as Qte } from "@/components";

interface Props {
  author: string;
  company?: string;
  quote: string;
}

export function Quote({ author, company, quote }: Props) {
  return (
    <section className="grid place-items-center py-16">
      <Qte author={author} company={company} quote={quote} />
    </section>
  );
}
