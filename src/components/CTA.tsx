
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thanks for your interest!",
        description: "A member of our team will be in touch soon.",
        variant: "default",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient rounded-3xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Ready to Transform Your Sales Pipeline?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Get started with our AI-powered lead generation solutions today and see the difference in your conversion rates.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/95 border-0 h-12 text-black placeholder:text-slate-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-12 px-6 bg-white text-brand-600 hover:bg-white/90"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Submitted
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="text-center mt-8 text-white/80 text-sm">
              <p>No credit card required. Start generating better leads today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
