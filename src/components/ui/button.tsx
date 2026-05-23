"use client";

import * as React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md font-body whitespace-nowrap outline-none transition-colors select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-[image:var(--color-brand-gradient)] font-bold text-fg-on-brand shadow-[var(--glow-brand)] hover:brightness-110",
        secondary:
          "border border-outline-brand bg-transparent font-semibold text-brand-from hover:bg-bg-elevated",
        tertiary:
          "border border-outline-default bg-transparent font-semibold text-fg-body hover:bg-bg-elevated hover:text-fg-headline",
      },
      size: {
        sm: "min-h-9 gap-1.5 px-4 py-2 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        md: "min-h-11 gap-2 px-8 py-3 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "min-h-[3.25rem] gap-2 px-10 py-4 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 min-h-10 min-w-10 gap-0 border-outline-default bg-transparent p-0 font-normal text-fg-headline hover:bg-bg-elevated [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function externalHref(href: string) {
  return /^(mailto:|tel:|https?:\/\/)/i.test(href);
}

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof ButtonPrimitive>,
  "className"
> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    href?: LinkProps["href"];
  };

function Button({
  className,
  variant,
  size,
  href,
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants({
      variant: variant ?? undefined,
      size: size ?? undefined,
    }),
    className,
  );

  if (href !== undefined && href !== null && href !== "") {
    const hrefString = typeof href === "string" ? href : "";
    if (hrefString && externalHref(hrefString)) {
      return (
        <a
          href={hrefString}
          className={classes}
          onClick={
            onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={
          onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <ButtonPrimitive
      type={type ?? "button"}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
