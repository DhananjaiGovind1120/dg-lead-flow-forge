import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Bot, 
  Workflow,
  BarChart2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DemoScheduler from "./DemoScheduler";

const workflowSteps = [
  { title: "New lead captured", detail: "Trigger · Website form", tone: "bg-dgblue-600" },
  { title: "AI qualifies lead", detail: "Score and classify automatically", tone: "bg-brand-600" },
  { title: "Send follow-up email", detail: "Personalised reply in minutes", tone: "bg-dgblue-500" },
  { title: "Update CRM and book demo", detail: "Synced across your tools", tone: "bg-brand-500" },
];

const Hero = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 bg-grid overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-brand-100 text-brand-700">
                <Bot size={16} className="mr-2" />
                AI-Powered Business Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Transform Your 
                <span className="gradient-text"> Business Processes </span> 
                With AI
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Streamline operations, enhance productivity, and reduce costs with our comprehensive suite of AI automation solutions for your entire business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient hover:opacity-90"
                  onClick={() => setShowDemoDialog(true)}
                >
                  Schedule Demo
                  <ChevronRight size={18} className="ml-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Workflow size={18} className="mr-1.5 text-dgblue-600" />
                  <span>500+ Business Processes Automated</span>
                </div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-muted-foreground/30"></div>
                <div className="flex items-center">
                  <BarChart2 size={18} className="mr-1.5 text-dgblue-600" />
                  <span>35% Average Efficiency Increase</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-400/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-dgblue-400/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
                  <div className="flex items-center">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0 truncate pl-3 text-center text-xs text-slate-500 dark:text-slate-400">
                      Grace automations Workflow Builder
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col">
                    {workflowSteps.map((step, index) => (
                      <Fragment key={step.title}>
                        <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${step.tone}`}>
                            {index + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium">{step.title}</div>
                            <div className="truncate text-xs text-muted-foreground">{step.detail}</div>
                          </div>
                        </div>
                        {index < workflowSteps.length - 1 && (
                          <div className="flex justify-center py-1">
                            <div className="h-5 w-px bg-slate-300 dark:bg-slate-600"></div>
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-xs text-muted-foreground">
                    <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                    Workflow running
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="default" size="sm" className="bg-gradient flex-1 hover:opacity-90">
                      Edit Workflow
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Runs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Scheduling Dialog */}
      <Dialog open={showDemoDialog} onOpenChange={setShowDemoDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Schedule a Demo</DialogTitle>
          </DialogHeader>
          <DemoScheduler />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
