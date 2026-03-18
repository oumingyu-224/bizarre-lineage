import { Metadata } from 'next';
import { standsContent } from '@/content/pages/stands';
import { getStandsByRarityCategory } from '@/data/stands';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/app/schema';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

export const metadata: Metadata = {
  title: standsContent.seo.title,
  description: standsContent.seo.description,
  keywords: [...standsContent.seo.keywords],
  alternates: {
    canonical: '/stands',
  },
};

export default function StandsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '' },
    { name: 'Stands', url: '/stands' }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Stands', href: '/stands' }]} />
      <h1 className="text-4xl font-bold mb-4">{standsContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{standsContent.intro.text}</p>

      {/* Stand Categories */}
      <div className="grid gap-8">
        {standsContent.categories.map((category) => {
          const stands = getStandsByRarityCategory(category.rarity);
          return (
            <section key={category.id}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: category.color }}>
                {category.name}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stands.length > 0 ? (
                  stands.map((stand) => (
                    <div key={stand.id} className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold mb-2">{stand.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{stand.description}</p>
                      <div className="text-sm space-y-1">
                        <p><strong>Rarity:</strong> {stand.rarity}</p>
                        <p><strong>Tier:</strong> {stand.tier}</p>
                        {stand.evolution && <p><strong>Evolution:</strong> {stand.evolution}</p>}
                        <p><strong>Obtain:</strong> {stand.obtainMethod}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-card p-6 rounded-lg border col-span-full">
                    <p className="text-center text-muted-foreground">
                      {category.rarity} tier stands coming soon
                    </p>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
    </>
  );
}
