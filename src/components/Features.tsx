import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { automationCategories } from "@/data/automations";

const Features = () => {
  return (
    <section id="what-we-set-up" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What we <span className="gradient-text">take off your plate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We find the tasks your team repeats every week and automate them. Pick what you need. We set up the ones that save the most time, and add more as you go.
          </p>
        </div>

        <Tabs defaultValue={automationCategories[0].id} className="w-full">
          <TabsList className="mx-auto mb-10 flex h-auto flex-wrap justify-center gap-2 bg-transparent">
            {automationCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border px-4 py-2 data-[state=active]:bg-gradient data-[state=active]:text-white data-[state=active]:border-transparent"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {automationCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.automations.map((automation) => (
                  <div
                    key={automation.title}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-base font-semibold mb-3">{automation.title}</h3>
                    <p className="text-sm text-muted-foreground">{automation.example}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-gradient hover:opacity-90" asChild>
            <a href="#schedule-demo">Book a free 30-minute call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
