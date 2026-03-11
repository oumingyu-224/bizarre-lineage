"use client";

interface CommentsProps {
  title: string;
  description: string;
}

export function Comments({ title, description }: CommentsProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center text-muted-foreground mb-8">{description}</p>

      <div className="max-w-4xl mx-auto">
        {/* Placeholder for comment system integration */}
        <div className="bg-card border rounded-lg p-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-4">Comments section coming soon!</p>
            <p className="text-sm">
              Join our Discord community to share your thoughts and connect with other players.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
