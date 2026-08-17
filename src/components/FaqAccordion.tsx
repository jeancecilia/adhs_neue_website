interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0} className="group overflow-hidden rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white card-shadow">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-[17px] font-bold text-[#173838] sm:text-[19px]">
              {item.question}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(47,79,79,0.15)] bg-slate-50 text-[16px] text-[#173838] transition-transform duration-200 group-open:rotate-180 group-open:bg-[#173838] group-open:text-white" aria-hidden="true">
              ↓
            </span>
          </summary>
          <div className="border-t border-[rgba(47,79,79,0.06)] px-6 pb-6 pt-4 text-[15px] leading-[1.7] text-slate-700">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
