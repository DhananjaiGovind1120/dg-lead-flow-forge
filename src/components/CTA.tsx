import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient rounded-3xl shadow-lg px-6 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Tell us what your team does by hand this week.
          </h2>
          <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
            Tell us the tasks you wish you didn't have to do. We'll tell you which ones we can automate and what it would cost.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#schedule-demo">Book a free 30-minute call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
