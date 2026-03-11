import { Metadata } from 'next';
import { changelogContent } from '@/content/pages/changelog';

export const metadata: Metadata = {
  title: changelogContent.seo.title,
  description: changelogContent.seo.description,
  keywords: [...changelogContent.seo.keywords],
  alternates: {
    canonical: '/changelog',
  },
};

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{changelogContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{changelogContent.intro.text}</p>

      <div className="space-y-8">
        {/* Changelog entries will be dynamically loaded */}
        <div className="bg-card p-6 rounded-lg border">
          <p className="text-center text-muted-foreground">Changelog entries will be displayed here</p>
        </div>
      </div>
    </div>
  );
}
