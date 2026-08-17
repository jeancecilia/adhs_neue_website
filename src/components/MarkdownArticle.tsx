import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-12 text-[28px] leading-tight text-[#173838] first:mt-0 sm:text-[36px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-9 text-[22px] font-bold leading-tight text-[#173838] sm:text-[26px]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-7 text-[18px] font-bold leading-tight text-[#173838]">
      {children}
    </h4>
  ),
  p: ({ children }) => <p className="mt-4 leading-[1.8]">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#7a5600]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-bold marker:text-[#7a5600]">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-1 leading-[1.75]">{children}</li>,
  strong: ({ children }) => <strong className="font-bold text-[#173838]">{children}</strong>,
  em: ({ children }) => <em className="text-slate-600">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-7 rounded-r-2xl border-l-4 border-[#7a5600] bg-[#faf9f8] px-6 py-4 text-slate-700">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="font-semibold text-[#7a5600] underline underline-offset-4 hover:text-[#173838]"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[680px] border-collapse text-left text-[14px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#173838] text-white">{children}</thead>,
  th: ({ children }) => <th className="border-b border-slate-200 px-4 py-3 font-bold">{children}</th>,
  td: ({ children }) => <td className="border-b border-slate-200 px-4 py-3 align-top last:border-b-0">{children}</td>,
};

export default function MarkdownArticle({ source }: { source: string }) {
  return (
    <article className="article-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </article>
  );
}
