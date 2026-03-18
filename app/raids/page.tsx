import { Metadata } from 'next';
import { raidsContent } from '@/content/pages/raids';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/app/schema';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

export const metadata: Metadata = {
  title: raidsContent.seo.title,
  description: raidsContent.seo.description,
  keywords: [...raidsContent.seo.keywords],
  alternates: {
    canonical: '/raids',
  },
};

export default function RaidsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '' },
    { name: 'Raids', url: '/raids' }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Raids', href: '/raids' }]} />
      <h1 className="text-4xl font-bold mb-4">{raidsContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{raidsContent.description}</p>

      {/* Intro */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <p className="text-muted-foreground">{raidsContent.intro.text}</p>
      </div>

      {/* Raid Bosses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Raid Bosses</h2>
        <div className="grid gap-6">
          {raidsContent.raidBosses.map((boss, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{boss.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {boss.location} • Level {boss.level} • Stand: {boss.stand}
                  </p>
                </div>
                <span className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">
                  Respawn: {boss.respawnTime}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{boss.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Drops:</h4>
                  <ul className="space-y-1">
                    {boss.drops.map((drop, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {drop}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Strategy:</h4>
                  <p className="text-sm text-muted-foreground">{boss.strategy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Bosses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Mini Bosses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {raidsContent.miniBosses.map((boss, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">{boss.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                {boss.location} • Level {boss.level}
              </p>
              <p className="text-muted-foreground mb-4">{boss.description}</p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Drops:</h4>
                  <ul className="space-y-1">
                    {boss.drops.map((drop, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {drop}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Strategy:</h4>
                  <p className="text-sm text-muted-foreground">{boss.strategy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Raid Mechanics */}
      <section className="mb-12 bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">{raidsContent.raidMechanics.title}</h2>
        <ul className="space-y-2">
          {raidsContent.raidMechanics.points.map((point, index) => (
            <li key={index} className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips */}
      <section className="bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
        <ul className="space-y-2">
          {raidsContent.tips.map((tip, index) => (
            <li key={index} className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
}
