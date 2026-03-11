import { Metadata } from 'next';
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact Us`,
  description: `Get in touch with the ${siteConfig.name} team. We'd love to hear your feedback and suggestions!`,
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
