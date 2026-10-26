import { useState } from "react";
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
import WorkflowAnimation from "./WorkflowAnimation";

const Hero = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [demoWorkflow, setDemoWorkflow] = useState<string | null>(null);

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
                  onClick={() => {
                    setDemoWorkflow(null);
                    setShowDemoDialog(true);
                  }}
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
              <WorkflowAnimation
                onBookDemo={(workflowTitle) => {
                  setDemoWorkflow(workflowTitle);
                  setShowDemoDialog(true);
                }}
              />
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
          <DemoScheduler workflow={demoWorkflow ?? undefined} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
