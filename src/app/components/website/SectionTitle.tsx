import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-32 mb-10 w-full text-center">
      <div className="flex items-center gap-4">
        {/* {badge ? (
          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-1 rounded-md">
            {badge}
          </span>
        ) : null} */}

        <div className="text-center w-full rounded-tr-4xl rounded-bl-4xl border border-dashed border-white bg-black/10 py-4 px-8">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center w-full">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-muted-foreground max-w-xl">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      {/* {ctaLabel && ctaHref ? (
        <div className="flex-shrink-0">
          <Link href={ctaHref}>
            <Button variant="ghost" className="text-sm">
              {ctaLabel}
            </Button>
          </Link>
        </div>
      ) : null} */}
    </div>
  );
};

export default SectionTitle;
