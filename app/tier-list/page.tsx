import { Metadata } from 'next';
import { tierListContent } from '@/content/pages/tier-list';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/app/schema';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

export const metadata: Metadata = {
  title: tierListContent.seo.title,
  description: tierListContent.seo.description,
  keywords: [...tierListContent.seo.keywords],
  alternates: {
    canonical: '/tier-list',
  },
};

export default function TierListPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '' },
    { name: 'Tier List', url: '/tier-list' }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Tier List', href: '/tier-list' }]} />
      <h1 className="text-4xl font-bold mb-4">{tierListContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{tierListContent.description}</p>

      {/* Intro */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <p className="text-muted-foreground">{tierListContent.intro.text}</p>
      </div>

      {/* Tier List */}
      <div className="grid gap-6 mb-12">
        {tierListContent.tiers.map((tier) => (
          <section key={tier.tier} className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: tier.color }}>
              {tier.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
            <div className="flex flex-wrap gap-2">
              {tier.stands.map((stand, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-md text-sm font-medium"
                >
                  {stand}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Build Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{tierListContent.buildTips.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tierListContent.buildTips.tips.map((tip, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">{tip.type}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Stands:</strong> {tip.stands}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Stats:</strong> {tip.stats}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meta Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <section className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">{tierListContent.pvpMeta.title}</h2>
          <p className="text-muted-foreground">{tierListContent.pvpMeta.description}</p>
        </section>
        <section className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">{tierListContent.pveMeta.title}</h2>
          <p className="text-muted-foreground">{tierListContent.pveMeta.description}</p>
        </section>
      </div>
    </div>
    </>
  );
}
