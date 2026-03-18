import { Metadata } from 'next';
import { codesContent } from '@/content/pages/codes';
import { getActiveCodes, getExpiredCodes } from '@/data/codes';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '@/app/schema';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';

export const metadata: Metadata = {
  title: codesContent.seo.title,
  description: codesContent.seo.description,
  keywords: [...codesContent.seo.keywords],
  alternates: {
    canonical: '/codes',
  },
};

export default function CodesPage() {
  const activeCodes = getActiveCodes();
  const expiredCodes = getExpiredCodes();

  const breadcrumbItems = [
    { name: 'Home', url: '' },
    { name: 'Codes', url: '/codes' }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={[{ name: 'Codes', href: '/codes' }]} />
      <h1 className="text-4xl font-bold mb-4">{codesContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{codesContent.description}</p>

      {/* How to Redeem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{codesContent.howToRedeem.title}</h2>
        <ol className="list-decimal list-inside space-y-2">
          {codesContent.howToRedeem.steps.map((step, index) => (
            <li key={index} className="text-muted-foreground">{step}</li>
          ))}
        </ol>
      </section>

      {/* Active Codes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{codesContent.activeCodes.title}</h2>
        <p className="text-muted-foreground mb-4">{codesContent.activeCodes.description}</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeCodes.map((code) => (
            <div key={code.code} className="bg-card p-6 rounded-lg border">
              <div className="font-mono text-lg font-bold mb-2 text-primary">{code.code}</div>
              <p className="text-sm text-muted-foreground">{code.reward}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          {codesContent.tips.map((tip, index) => (
            <li key={index} className="text-muted-foreground">{tip}</li>
          ))}
        </ul>
      </section>

      {/* Expired Codes */}
      {expiredCodes.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">{codesContent.expiredCodes.title}</h2>
          <p className="text-muted-foreground mb-4">{codesContent.expiredCodes.description}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 opacity-60">
            {expiredCodes.map((code) => (
              <div key={code.code} className="bg-card p-6 rounded-lg border">
                <div className="font-mono text-lg font-bold mb-2 line-through">{code.code}</div>
                <p className="text-sm text-muted-foreground">{code.reward}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
    </>
  );
}
