"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";
import { navigationConfig } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";

export function Header() {
  if (!layout.header.isVisible) return null;

  const headerClassName = cn(
    layout.header.isVisible ? "" : "hidden",
    theme.header.layout.position,
    theme.header.layout.zIndex,
    theme.header.colors.border,
    theme.header.colors.background,
    theme.header.layout.blur,
  );

  const containerClassName = cn(
    theme.header.spacing.container,
    "flex",
    theme.header.layout.height,
    "items-center justify-between",
    layout.header.container.padding
  );

  return (
    <header className={headerClassName}>
      <div className={containerClassName}>
        {/* Logo and Title */}
        <div className={theme.header.layout.logo.wrapper}>
          <Link href="/">
            <Image
              src={layout.header.logo.src}
              alt={`${siteConfig.name} Logo`}
              width={40}
              height={40}
              priority
              className={cn(
                layout.header.logo.size,
                theme.header.layout.logo.image,
                "cursor-pointer hover:opacity-90 transition-opacity"
              )}
            />
          </Link>
          <Link href="/" className="no-underline">
            <span className={cn(
              layout.header.logoSize,
              "font-bold",
              theme.header.colors.text,
              theme.header.colors.hover
            )}>
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={theme.header.layout.nav.wrapper}>
          <div className={theme.header.layout.nav.list}>
            {navigationConfig.mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  theme.header.colors.text,
                  "hover:text-primary"
                )}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
