import { useEffect, useRef, useState } from "react";
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

const StepItem = ({ step, index }: { step: (typeof steps)[number]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Fade the step in once it scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 motion-reduce:opacity-100 motion-reduce:translate-y-0"
      }`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient motion-safe:animate-pulse-ring" />
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient text-white shadow-lg">
          {step.icon}
        </span>
        <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs font-bold text-brand-600 shadow ring-1 ring-brand-200">
          {index + 1}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
      <p className="max-w-sm text-muted-foreground">{step.description}</p>
    </div>
  );
};

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 justify-items-center">
          {steps.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
