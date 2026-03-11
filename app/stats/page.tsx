import { Metadata } from 'next';
import { statsContent } from '@/content/pages/stats';

export const metadata: Metadata = {
  title: statsContent.seo.title,
  description: statsContent.seo.description,
  keywords: [...statsContent.seo.keywords],
  alternates: {
    canonical: '/stats',
  },
};

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{statsContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{statsContent.description}</p>

      {/* Intro */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <p className="text-muted-foreground">{statsContent.intro.text}</p>
      </div>

      {/* Stats Overview */}
      {statsContent.sections.map((section) => (
        <section key={section.id} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {section.content.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">{item.subtitle}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Recommended Builds */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{statsContent.recommendedBuilds.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {statsContent.recommendedBuilds.builds.map((build, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">{build.stand}</h3>
              <p className="text-sm text-muted-foreground mb-4">{build.description}</p>
              <div className="space-y-1 text-sm">
                {build.stats.map((stat, i) => (
                  <p key={i} className="text-muted-foreground">{stat}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Stat Allocation Tips</h2>
        <ul className="space-y-2">
          {statsContent.tips.map((tip, index) => (
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
