import { siteConfig } from "@/content/site";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="container mx-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-10">Contact Us</h1>

        <div className="space-y-8 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Need Assistance? We're Here to Help!</h2>
              <p className="leading-relaxed">
                If you have any inquiries, suggestions, or feedback about our Bizarre Lineage guides and resources, please don't hesitate to contact us.
                You can drop us a line at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline font-medium">{siteConfig.email}</a>, and we'll make every effort to reply promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">About {siteConfig.name}</h2>
              <p className="leading-relaxed">
                {siteConfig.name} is dedicated to providing comprehensive guides, tier lists, codes, and resources for the Bizarre Lineage community. Our goal is to help players master the JoJo-inspired Roblox RPG through accurate information and detailed strategies. We are passionate about building a helpful resource hub and continuously updating our content based on the latest game changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Feedback and Suggestions</h2>
              <p className="leading-relaxed">
                We highly value your feedback! If you have suggestions for improving our guides, found outdated information, discovered new strategies, or have ideas for new content, please let us know. Your input helps us make {siteConfig.name} better for the entire Bizarre Lineage community.
              </p>
            </section>

            <section className="mt-6 bg-muted/50 p-6 rounded-lg border border-border">
              <p className="italic text-foreground/80 leading-relaxed">
                Thank you for visiting {siteConfig.name}. We hope our guides help you dominate in Bizarre Lineage!
              </p>
            </section>

            <section className="mt-8 border-t border-border pt-8">
              <p className="leading-relaxed">
                For more information about our site, please visit our <Link href="/about" className="text-primary hover:underline font-medium">About Us</Link> page. 
                You can also review our <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-primary hover:underline font-medium">Terms of Service</Link>.
              </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
