import { useEffect, useRef, useState } from "react";
import { Code, Rocket, Search } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    week: "Week 1",
    title: "Map your workflow",
    description: "We learn how enquiries, bookings and invoices flow through your business today.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    week: "Week 2",
    title: "Build and test",
    description: "We set up the messages, bookings and invoices, then test every step with you.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    week: "Week 3",
    title: "Go live and train your team",
    description: "We switch everything on, train your team, and stay on call while you settle in.",
  },
];

type Step = (typeof steps)[number];

const StepItem = ({ step, index }: { step: Step; index: number }) => {
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
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient motion-safe:animate-pulse-ring" />
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient text-white shadow-lg">
          {step.icon}
        </span>
      </div>
      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-brand-600">{step.week}</p>
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
            Up and running in <span className="gradient-text">three weeks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {steps.map((step, index) => (
            <StepItem key={step.title} step={step} index={index} />
          ))}
        </div>

        <p className="mt-16 text-center text-lg text-muted-foreground">
          Every month we review what's working and adjust it.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
