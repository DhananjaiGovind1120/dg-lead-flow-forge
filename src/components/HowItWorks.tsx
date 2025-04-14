
import {
  Search,
  Filter,
  UserCog,
  MessageSquareText,
  LineChart,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Data Collection",
    description: "Our AI scans multiple sources to identify potential leads matching your ideal customer profile."
  },
  {
    icon: <Filter className="h-8 w-8" />,
    title: "Lead Enrichment",
    description: "We enrich each lead with detailed information from various databases to create comprehensive profiles."
  },
  {
    icon: <UserCog className="h-8 w-8" />,
    title: "AI Scoring",
    description: "Our machine learning algorithms score each lead based on their likelihood to convert into a customer."
  },
  {
    icon: <MessageSquareText className="h-8 w-8" />,
    title: "Personalized Outreach",
    description: "Generate tailored messages that resonate with each prospect's specific needs and pain points."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Performance Analysis",
    description: "Track detailed metrics and get AI-powered recommendations to optimize your conversion rates."
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Continuous Improvement",
    description: "Our system learns from successful conversions to continuously improve lead quality and targeting."
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
            Our seamless process transforms the way you generate and convert leads, making your sales pipeline more efficient.
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
