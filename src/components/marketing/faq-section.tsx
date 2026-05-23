import { HelpCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export type FaqSectionProps = {
  badge?: string;
  title: string;
  items: FaqItem[];
  className?: string;
};

export function FaqSection({
  badge = "FAQ",
  title,
  items,
  className,
}: FaqSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 lg:py-32 z-10 border-t border-outline-subtle bg-bg-surface/30",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-elevated border border-outline-subtle mb-6">
            <HelpCircle className="w-4 h-4 text-brand-from" />
            <span className="text-label font-bold tracking-label uppercase text-brand-from">
              {badge}
            </span>
          </div>
          <h2 className="font-display text-h1 md:text-4xl font-bold text-fg-headline max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-to to-brand-from mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const isCyan = index % 2 === 0;
            return (
              <div
                key={item.question}
                className={cn(
                  "bg-bg-elevated/40 border border-outline-default p-8 rounded-2xl hover:bg-bg-elevated/60 transition-all shadow-sm group",
                  isCyan
                    ? "hover:border-brand-from/40"
                    : "hover:border-brand-to/40"
                )}
              >
                <h3
                  className={cn(
                    "font-heading text-lg font-bold text-fg-headline mb-3 transition-colors",
                    isCyan ? "group-hover:text-brand-from" : "group-hover:text-brand-to"
                  )}
                >
                  {item.question}
                </h3>
                <div className="text-fg-muted leading-body font-body">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
