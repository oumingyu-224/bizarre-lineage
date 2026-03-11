"use client";

import Link from "next/link";
import { theme } from "@/config/theme";
import { navigationConfig } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    theme.footer.colors.border,
    theme.footer.colors.background
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  const gridClassName = cn(theme.footer.layout.grid);

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {/* About Section */}
          <div>
            <h3 className={cn("font-semibold", theme.footer.spacing.sectionTitle)}>
              About {siteConfig.name}
            </h3>
            <p className={theme.footer.colors.mutedText}>
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
              Quick Links
            </h3>
            <ul className={theme.footer.spacing.linkList}>
              {navigationConfig.footerNav.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm",
                      theme.footer.colors.mutedText,
                      theme.footer.colors.hover
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
              Legal
            </h3>
            <ul className={theme.footer.spacing.linkList}>
              {navigationConfig.footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm",
                      theme.footer.colors.mutedText,
                      theme.footer.colors.hover
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
              Community
            </h3>
            <ul className={theme.footer.spacing.linkList}>
              <li>
                <a
                  href={siteConfig.robloxGameUrl}
                  className={cn(
                    "text-sm",
                    theme.footer.colors.mutedText,
                    theme.footer.colors.hover
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on Roblox
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.discordUrl}
                  className={cn(
                    "text-sm",
                    theme.footer.colors.mutedText,
                    theme.footer.colors.hover
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8">
          <div className="text-center">
            <p className={cn("text-sm", theme.footer.colors.mutedText)}>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className={cn("text-sm", theme.footer.colors.mutedText)}>
              Wiki, guides, and resources for the Roblox game.
            </p>
          </div>
        </div>
      </div>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6760379174262614"
     crossOrigin="anonymous"></script>
    </footer>
  );
}
