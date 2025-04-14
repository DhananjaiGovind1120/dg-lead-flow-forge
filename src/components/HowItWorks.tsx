
import {
  ClipboardCheck,
  Search,
  Code,
  Bot,
  Workflow,
  LineChart
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Process Analysis",
    description: "We analyze your current workflows to identify bottlenecks, inefficiencies, and tasks that can be automated with AI."
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Solution Design",
    description: "Our experts design custom AI solutions tailored to your specific business needs and integration requirements."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Implementation",
    description: "We seamlessly integrate our AI tools with your existing systems while ensuring minimal disruption to operations."
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Training",
    description: "Your AI systems are trained using your business data to ensure they deliver relevant and accurate results."
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Deployment & Adoption",
    description: "We help your team transition to the new automated workflows with comprehensive training and support."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Continuous Improvement",
    description: "Our AI systems constantly learn and improve based on feedback and changing business requirements."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How Our <span className="gradient-text">AI Technology</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven methodology ensures successful implementation of AI automation across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-brand-50 dark:bg-brand-900/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-brand-600 relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient rounded-full flex items-center justify-center text-white font-medium">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-8 left-20 w-full h-0.5 bg-gradient-to-r from-brand-200 to-transparent"></div>
              )}
              
              {index < steps.length - 3 && (
                <div className="hidden lg:block absolute left-8 top-20 h-16 w-0.5 bg-gradient-to-b from-brand-200 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
