import { Metadata } from 'next';
import { wikiContent } from '@/content/pages/wiki';

export const metadata: Metadata = {
  title: wikiContent.seo.title,
  description: wikiContent.seo.description,
  keywords: [...wikiContent.seo.keywords],
  alternates: {
    canonical: '/wiki',
  },
};

export default function WikiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{wikiContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{wikiContent.description}</p>

      {/* Intro */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <p className="text-muted-foreground">{wikiContent.intro.text}</p>
      </div>

      {/* Wiki Sections */}
      <div className="grid gap-8">
        {wikiContent.sections.map((section) => (
          <section key={section.id} className="bg-card p-6 rounded-lg border">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <div className="space-y-6">
              {section.content.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Tips Section */}
      <section className="mt-12 bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">{wikiContent.tips.title}</h2>
        <ul className="space-y-2">
          {wikiContent.tips.items.map((tip, index) => (
            <li key={index} className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
