import { siteConfig } from "@/content/site";

const AboutPage = () => {
  return (
    <main className="container mx-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-8">About {siteConfig.name}</h1>

        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p>
              At {siteConfig.name}, our mission is to provide comprehensive guides, resources, and community support for Bizarre Lineage players. We believe in helping players master the game through accurate information, detailed guides, and up-to-date content. We are passionate about creating a hub where players can find everything they need to succeed in Bizarre Lineage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
            <p>
              We are a dedicated team of Bizarre Lineage enthusiasts and content creators who love the JoJo-inspired Roblox RPG. Our journey started with a passion for the game and a desire to help the community grow. {siteConfig.name} is the result of countless hours researching game mechanics, testing builds, and compiling the most accurate information available.
            </p>
            <p className="mt-4">
              From Stand tier lists to raid boss strategies, we cover every aspect of Bizarre Lineage to help both new and veteran players improve their gameplay and enjoy the game to its fullest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
            <p>
              We are committed to providing accurate, up-to-date information for the Bizarre Lineage community. All our guides are regularly updated to reflect the current game meta, new Stand releases, and balance changes. We value community feedback and encourage players to join our Discord to share tips, strategies, and suggestions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              Have questions, feedback, or want to contribute to our guides? We'd love to hear from you!
            </p>
            <p className="mt-2">
              You can reach us by email at: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
