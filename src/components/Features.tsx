
import { 
  BrainCircuit,
  Calendar,
  FileText,
  Users,
  BarChart3,
  Mail,
  MessageSquare,
  FileSearch,
  Database,
  Search,
  ShoppingCart,
  Briefcase
} from "lucide-react";

const featureItems = [
  {
    icon: <Mail className="h-10 w-10 text-white" />,
    title: "Marketing Automation",
    description: "Automate email campaigns, social media posting, content creation, and audience targeting with AI-powered precision."
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-white" />,
    title: "Sales Process Automation",
    description: "Identify high-value leads, automate follow-ups, and create personalized sales messages that convert prospects into customers."
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "HR & Recruitment",
    description: "Streamline candidate screening, automate interview scheduling, and use AI to match the best talent to your open positions."
  },
  {
    icon: <FileText className="h-10 w-10 text-white" />,
    title: "Document Processing",
    description: "Extract data from invoices, contracts, and forms automatically, reducing manual data entry and processing errors."
  },
  {
    icon: <Calendar className="h-10 w-10 text-white" />,
    title: "Administrative Tasks",
    description: "Automate scheduling, meeting notes, task management, and other day-to-day operations that consume valuable time."
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with automated analysis, reporting, and visualization tools."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-white" />,
    title: "Customer Support",
    description: "Deploy AI chatbots and automated ticketing systems to handle customer queries efficiently while maintaining quality."
  },
  {
    icon: <FileSearch className="h-10 w-10 text-white" />,
    title: "Compliance & Reporting",
    description: "Ensure regulatory compliance with automated monitoring, documentation, and reporting systems tailored to your industry."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-white" />,
    title: "Financial Operations",
    description: "Streamline invoicing, payments, expense tracking, and financial forecasting with intelligent automation."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI-Powered <span className="gradient-text">Solutions</span> For Every Department
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of automation tools helps streamline operations across your entire organization.
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
