
import { 
  BrainCircuit, 
  UserCheck, 
  FilterX, 
  BarChart, 
  Sparkles, 
  Workflow 
} from "lucide-react";

const featureItems = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-white" />,
    title: "AI Lead Scoring",
    description: "Automatically score and prioritize leads based on their likelihood to convert using advanced machine learning algorithms."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-white" />,
    title: "Ideal Customer Profiling",
    description: "Create detailed buyer personas and let our AI find prospects that match your most successful customers."
  },
  {
    icon: <FilterX className="h-10 w-10 text-white" />,
    title: "Smart Lead Filtering",
    description: "Filter out low-quality leads before they enter your pipeline, ensuring your sales team focuses on high-potential prospects."
  },
  {
    icon: <BarChart className="h-10 w-10 text-white" />,
    title: "Conversion Analytics",
    description: "Get detailed analytics on your lead generation performance with actionable insights to optimize your conversion rates."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-white" />,
    title: "Content Personalization",
    description: "Generate personalized outreach content that resonates with each prospect, increasing engagement and response rates."
  },
  {
    icon: <Workflow className="h-10 w-10 text-white" />,
    title: "Automated Workflows",
    description: "Set up intelligent workflows that nurture leads through your pipeline with minimal manual intervention."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI-Powered <span className="gradient-text">Solutions</span> For Every Step
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of AI tools helps you generate, qualify, and convert leads more effectively than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-3 bg-gradient"></div>
              <div className="p-6">
                <div className="mb-4 bg-gradient p-4 rounded-lg w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
