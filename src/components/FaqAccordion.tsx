"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white card-shadow transition-colors"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
              onClick={() => toggleIndex(idx)}
            >
              <span className="text-[17px] font-bold text-[#173838] sm:text-[19px]">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(47,79,79,0.15)] text-[16px] text-[#173838] transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#173838] text-white" : "bg-slate-50"
                }`}
              >
                ↓
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-[rgba(47,79,79,0.06)] px-6 pb-6 pt-4 text-[15px] leading-[1.7] text-slate-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
