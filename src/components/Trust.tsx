import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/site";

const Trust = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container px-4 mx-auto">
        <p className="text-center text-lg text-muted-foreground mb-16">
          Shops, clinics, salons, coaching centres, service firms and distributors with 1 to 50 people.
        </p>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          <img
            src="/founder.jpg"
            alt="Dhananjai Govind, founder of Grace automations"
            className="h-32 w-32 shrink-0 rounded-full object-cover object-top shadow-md"
          />
          <div>
            <h2 className="text-2xl font-display font-bold mb-1">Dhananjai Govind</h2>
            <p className="text-muted-foreground mb-4">Founder, Grace automations</p>
            <p className="text-muted-foreground">
              WhatsApp:{" "}
              {whatsappLink ? (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-brand-400">
                  {WHATSAPP_DISPLAY}
                </a>
              ) : (
                <span className="font-medium text-foreground">{WHATSAPP_DISPLAY}</span>
              )}
            </p>
            <p className="mt-4 text-muted-foreground">Based in London, working with businesses across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
