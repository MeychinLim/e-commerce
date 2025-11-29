import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <section className="w-full mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-black/5 to-transparent p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            {subtitle ? (
              <p className="text-sm font-medium text-primary/80">{subtitle}</p>
            ) : null}

            <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold">
              {title}
            </h1>

            {description ? (
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                {description}
              </p>
            ) : null}
          </div>

          {ctaLabel && ctaHref ? (
            <div className="flex-shrink-0">
              <Link href={ctaHref} className="inline-block">
                <Button size="sm">{ctaLabel}</Button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Banner;
