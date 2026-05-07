import type { PortfolioData } from "./types";

type TimelineProps = {
  items: PortfolioData["cv_content"]["experience"];
};

export function PortfolioTimeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`} className="glass-panel rounded-lg p-5">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <p className="font-semibold text-cyanwire">{item.company}</p>
            </div>
            <p className="rounded-md border border-volt/25 bg-volt/10 px-3 py-1 text-sm text-volt">{item.period}</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="border-l border-cyanwire/40 pl-3">
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
