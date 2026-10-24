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
                      Grace automations AI Process Automation Dashboard
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium mb-1">Automation Rate</h3>
                        <div className="text-2xl font-bold text-dgblue-600">78%</div>
                        <div className="mt-2 text-xs text-green-600 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                          </svg>
                          Up 15% this month
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium mb-1">Time Saved</h3>
                        <div className="text-2xl font-bold text-brand-600">240h</div>
                        <div className="mt-2 text-xs text-green-600 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                          </svg>
                          Up 32% this month
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-sm font-medium">Department Efficiency</h3>
                        <div className="text-xs text-slate-500">Last 30 days</div>
                      </div>
                      <div className="flex gap-1 h-8">
                        <div className="w-1/4 bg-dgblue-600 rounded-l"></div>
                        <div className="w-1/4 bg-dgblue-500"></div>
                        <div className="w-1/5 bg-dgblue-400"></div>
                        <div className="w-1/6 bg-dgblue-300 rounded-r"></div>
                      </div>
                      <div className="flex justify-between text-xs mt-2">
                        <span>Marketing</span>
                        <span>Sales</span>
                        <span>HR</span>
                        <span>Ops</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <Button variant="default" size="sm" className="bg-gradient flex-1 hover:opacity-90">
                        Process Analysis
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Share Report
                      </Button>
                    </div>
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
