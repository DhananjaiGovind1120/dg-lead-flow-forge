
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Grace automations has completely transformed our lead generation process. We've seen a 40% increase in qualified leads and our sales team is closing deals faster than ever.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    company: "TechGrowth Inc.",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The AI-powered lead scoring has been a game-changer for us. We're now focusing our efforts on prospects with the highest conversion potential, and our ROI has soared.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Innovative Solutions",
    avatar: "/placeholder.svg"
  },
  {
    quote: "What impressed me most was how quickly the system adapted to our specific industry niche. Within weeks, we were getting highly relevant leads that understood our value proposition.",
    author: "Amanda Rodriguez",
    position: "CEO",
    company: "Nexus Enterprises",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The personalized outreach sequences have dramatically improved our response rates. It's like having an AI sales assistant that knows exactly what to say to each prospect.",
    author: "David Thompson",
    position: "Sales Operations Manager",
    company: "Global Connect Ltd.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from companies that have transformed their sales pipeline with our AI-powered lead generation solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute -top-4 left-10 text-brand-500">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8333 22.5H7.5C6.71449 22.5 5.9442 22.1839 5.38158 21.6213C4.81896 21.0587 4.50287 20.2884 4.50287 19.5029L4.50287 19.5C4.50287 17.9087 5.1361 16.3826 6.26381 15.2549C7.39151 14.1272 8.91766 13.4939 10.5089 13.4939H12.8333C13.2754 13.4939 13.6993 13.3201 14.0118 13.0076C14.3244 12.6951 14.4982 12.2712 14.4982 11.8291V7.16666C14.4982 6.72463 14.3244 6.30072 14.0118 5.98816C13.6993 5.6756 13.2754 5.50183 12.8333 5.50183H8.16667C7.7246 5.5018 7.30066 5.32801 6.98808 5.01544C6.67551 4.70286 6.5017 4.27892 6.5017 3.83683C6.5017 3.39476 6.67549 2.97082 6.98806 2.65825C7.30063 2.34567 7.72458 2.17188 8.16667 2.17188H12.8333C14.1594 2.17188 15.4312 2.69319 16.3689 3.63087C17.3066 4.56855 17.8279 5.84036 17.8279 7.16651V11.8332C17.8279 13.1593 17.3066 14.4311 16.3689 15.3688C15.4312 16.3065 14.1594 16.8278 12.8333 16.8278H10.5089C10.0667 16.8278 9.64292 17.0016 9.33035 17.3142C9.01779 17.6267 8.84399 18.0506 8.84399 18.4927V18.5C8.84399 18.9421 9.01776 19.366 9.33033 19.6786C9.64289 19.9911 10.0668 20.1649 10.5089 20.1649H12.8333C13.2754 20.1649 13.6993 20.3387 14.0119 20.6513C14.3245 20.9638 14.4982 21.3877 14.4982 21.8298C14.4982 22.2719 14.3245 22.6958 14.0119 23.0084C13.6993 23.3209 13.2754 23.4947 12.8333 23.4947V22.5ZM32.8333 22.5H27.5C26.7145 22.5 25.9442 22.1839 25.3816 21.6213C24.819 21.0587 24.5029 20.2884 24.5029 19.5029L24.5029 19.5C24.5029 17.9087 25.1361 16.3826 26.2638 15.2549C27.3915 14.1272 28.9177 13.4939 30.5089 13.4939H32.8333C33.2754 13.4939 33.6993 13.3201 34.0119 13.0076C34.3244 12.6951 34.4982 12.2712 34.4982 11.8291V7.16666C34.4982 6.72463 34.3244 6.30072 34.0119 5.98816C33.6993 5.6756 33.2754 5.50183 32.8333 5.50183H28.1667C27.7246 5.5018 27.3007 5.32801 26.9881 5.01544C26.6755 4.70286 26.5017 4.27892 26.5017 3.83683C26.5017 3.39476 26.6755 2.97082 26.9881 2.65825C27.3006 2.34567 27.7246 2.17188 28.1667 2.17188H32.8333C34.1594 2.17188 35.4312 2.69319 36.3689 3.63087C37.3066 4.56855 37.8279 5.84036 37.8279 7.16651V11.8332C37.8279 13.1593 37.3066 14.4311 36.3689 15.3688C35.4312 16.3065 34.1594 16.8278 32.8333 16.8278H30.5089C30.0668 16.8278 29.6429 17.0016 29.3303 17.3142C29.0178 17.6267 28.844 18.0506 28.844 18.4927V18.5C28.844 18.9421 29.0178 19.366 29.3303 19.6786C29.6429 19.9911 30.0668 20.1649 30.5089 20.1649H32.8333C33.2754 20.1649 33.6993 20.3387 34.0119 20.6513C34.3245 20.9638 34.4982 21.3877 34.4982 21.8298C34.4982 22.2719 34.3245 22.6958 34.0119 23.0084C33.6993 23.3209 33.2754 23.4947 32.8333 23.4947V22.5Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-xl md:text-2xl italic text-center mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
