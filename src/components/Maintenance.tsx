const points = [
  "We monitor every automation, so you know it's running.",
  "We fix it when a tool or service changes.",
  "We update it when your prices, staff or services change.",
  "We review everything with you each month and adjust what isn't saving time.",
];

const Maintenance = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            We keep it <span className="gradient-text">running</span>
          </h2>
          <p className="text-lg text-muted-foreground">Set up once. Maintained every month.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-4">
              <div className="mt-1 h-1 w-10 shrink-0 rounded-full bg-gradient" />
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
