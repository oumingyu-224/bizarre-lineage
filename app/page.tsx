import { Metadata } from 'next';
import { homeContent } from '@/content/pages/home';
import { FAQ } from '@/components/home/FAQ';
import { Comments } from '@/components/home/Comments';
import Link from 'next/link';
import Script from 'next/script';
import { websiteSchema, generateRatingSchema, faqSchema, organizationSchema } from '@/app/schema';

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  keywords: [...homeContent.seo.keywords],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org structured data */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateRatingSchema(4.8, 1250)) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeContent.faq.items)) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{homeContent.hero.title}</h1>
        
        <p className="text-xl text-muted-foreground mb-2">{homeContent.hero.subtitle}</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          {homeContent.hero.description}
        </p>

        {/* YouTube Video - lazy loaded for performance */}
        <div className="mb-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aU_TonQzrXQ?si=uxOFBiZGcNGEeVqx&start=1&rel=0"
            title="Bizarre Lineage Gameplay Trailer - JoJo Roblox RPG"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg max-w-full"
            style={{ aspectRatio: '16/9', width: '100%', maxWidth: '560px' }}
          />
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href={homeContent.hero.cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {homeContent.hero.cta.primary.text}
          </Link>
          <Link
            href={homeContent.hero.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {homeContent.hero.cta.secondary.text}
          </Link>
        </div>

      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-card p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ title={homeContent.faq.title} items={[...homeContent.faq.items]} />

      {/* Comments Section */}
      {homeContent.comments.enabled && (
        <Comments
          title={homeContent.comments.title}
          description={homeContent.comments.description}
        />
      )}
    </div>
    </>
  );
}
