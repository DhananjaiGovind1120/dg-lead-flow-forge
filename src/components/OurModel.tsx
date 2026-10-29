const promises = [
  {
    title: "Enquiries, bookings and invoices",
    description: "Every enquiry, booking and invoice handled in one place, without the paperwork.",
  },
  {
    title: "WhatsApp follow-up",
    description: "Customers get a reply on the channel they already use.",
  },
  {
    title: "Set up in about three weeks",
    description: "We build the back-office for you and get it running.",
  },
  {
    title: "A real person to call",
    description: "When something needs changing, you speak to a person.",
  },
];

const OurModel = () => {
  return (
    <section id="our-model" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your <span className="gradient-text">back-office</span>, run for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {promises.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurModel;
