import { ChevronRight, Clock, MessageCircle, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkflowAnimation from "./WorkflowAnimation";
import { whatsappLink } from "@/lib/site";

const workflowSteps = [
  { title: "Enquiry comes in", detail: "From your website, Instagram or calls" },
  { title: "Instant WhatsApp reply", detail: "The customer hears back straight away" },
  { title: "Booking confirmed and reminded", detail: "Reminders go out before the appointment" },
  { title: "Invoice sent and paid", detail: "Payment link sent the same day" },
];

const stats = [
  { icon: Clock, label: "Live in about 3 weeks" },
  { icon: Users, label: "Built for businesses of 1 to 50 people" },
  { icon: User, label: "A named person, not a ticket queue" },
];

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-grid overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-brand-100 text-brand-700">
              <MessageCircle size={16} className="mr-2" />
              Done-for-you back-office for small businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Your back-office,
              <span className="gradient-text"> run on WhatsApp.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We set up enquiries, bookings, invoices and follow-ups for your small business in about three weeks, then keep them running. When something needs changing, you call a real person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient hover:opacity-90" asChild>
                <a href="#schedule-demo">
                  Book a free 30-minute call
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </Button>
              {whatsappLink && (
                <Button size="lg" variant="outline" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </Button>
              )}
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {stats.map((stat) => (
                <li key={stat.label} className="flex items-center">
                  <stat.icon size={18} className="mr-2 shrink-0 text-dgblue-600" />
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-dgblue-400/20 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <WorkflowAnimation steps={workflowSteps} caption="How a customer enquiry flows through" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
