import { Metadata } from 'next';
import { skinsContent } from '@/content/pages/skins';

export const metadata: Metadata = {
  title: skinsContent.seo.title,
  description: skinsContent.seo.description,
  keywords: [...skinsContent.seo.keywords],
  alternates: {
    canonical: '/skins',
  },
};

export default function SkinsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{skinsContent.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{skinsContent.description}</p>

      {/* Intro */}
      <div className="bg-card p-6 rounded-lg border mb-8">
        <p className="text-muted-foreground">{skinsContent.intro.text}</p>
      </div>

      {/* Skin Categories */}
      <div className="grid gap-8">
        {skinsContent.categories.map((category) => (
          <section key={category.id} className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <p className="text-muted-foreground mb-4">{category.description}</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.skins.map((skin, index) => (
                <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-1">{skin.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{skin.stand}</p>
                  <p className="text-xs text-muted-foreground">{skin.obtainMethod}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* How to Get Skins */}
      <section className="mt-12 bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">{skinsContent.howToGet.title}</h2>
        <ul className="space-y-2">
          {skinsContent.howToGet.methods.map((method, index) => (
            <li key={index} className="text-muted-foreground flex items-start">
              <span className="mr-2">•</span>
              <span>{method}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips */}
      <section className="mt-8 bg-card p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">Skin Tips</h2>
        <ul className="space-y-2">
          {skinsContent.tips.map((tip, index) => (
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
