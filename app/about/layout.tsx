import { Metadata } from 'next';
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `About Us`,
  description: `Learn more about ${siteConfig.name}, our mission to provide comprehensive guides, resources, and community support for Bizarre Lineage players.`,
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
