import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Setup once, then we <span className="gradient-text">keep it running</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
            <h3 className="text-lg font-semibold mb-2">Setup</h3>
            <p className="text-3xl font-display font-bold mb-3">from ₹15,000</p>
            <p className="text-muted-foreground">Depending on how many tasks we automate.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
            <h3 className="text-lg font-semibold mb-2">Monthly care</h3>
            <p className="text-3xl font-display font-bold mb-3">from ₹25,000/month</p>
            <p className="text-muted-foreground">Covers monitoring, fixes, updates and a monthly review call.</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices shown are starting points. We confirm the exact quote on your free call.
        </p>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="bg-gradient hover:opacity-90" asChild>
            <a href="#schedule-demo">Book a free 30-minute call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
