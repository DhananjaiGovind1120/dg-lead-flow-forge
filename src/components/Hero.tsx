import { ChevronRight, Clock, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkflowAnimation from "./WorkflowAnimation";

const repeatedTaskSteps = [
  { title: "Quote goes unanswered", detail: "No one remembers to chase it" },
  { title: "Gentle reminder sent after 3 days", detail: "Sent automatically, with the quote attached" },
  { title: "Customer replies, owner is alerted", detail: "Replies are passed on to you" },
  { title: "Quote marked accepted and invoice sent", detail: "The invoice goes out the same day" },
];

const stats = [
  { icon: Clock, label: "Live in about 3 weeks" },
  { icon: Users, label: "Built around how your team actually works" },
  { icon: User, label: "A named person, not a ticket queue" },
];

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-grid overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              The tedious work your team repeats every week,
              <span className="gradient-text"> automated and maintained for you.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Follow-ups, reminders, data entry, invoices and updates. We set them up, run them, and keep them working as your business changes. When something needs fixing, you call a real person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient hover:opacity-90" asChild>
                <a href="#schedule-demo">
                  Book a free 30-minute call
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#what-we-set-up">See what we take off your plate</a>
              </Button>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {stats.map((stat) => (
                <li key={stat.label} className="flex items-center">
                  <stat.icon size={18} className="mr-2 shrink-0 text-dgblue-400" />
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-dgblue-400/20 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <WorkflowAnimation steps={repeatedTaskSteps} caption="How one repetitive task gets handled" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
