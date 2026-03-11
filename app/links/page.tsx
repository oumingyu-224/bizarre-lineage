import { Metadata } from 'next';
import { linksContent } from '@/content/pages/links';
import Link from 'next/link';

export const metadata: Metadata = {
  title: linksContent.seo.title,
  description: linksContent.seo.description,
  keywords: [...linksContent.seo.keywords],
  alternates: {
    canonical: '/links',
  },
};

export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{linksContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{linksContent.description}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {linksContent.officialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{link.title}</h2>
            <p className="text-muted-foreground">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
