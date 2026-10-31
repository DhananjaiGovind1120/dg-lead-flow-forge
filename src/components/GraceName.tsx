const letters = [
  { letter: "G", word: "Growing", description: "Your business grows as the admin stops getting in the way." },
  { letter: "R", word: "Results", description: "Every automation is chosen to save your team real time." },
  { letter: "A", word: "Automation", description: "Repeated tasks run without anyone having to remember them." },
  { letter: "C", word: "Care", description: "We monitor, fix and update everything, and you call a real person." },
  { letter: "E", word: "Ease", description: "Less admin for your team, and less to think about for you." },
];

const GraceName = () => {
  return (
    <section id="about-the-name" className="py-20 bg-card/40">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What <span className="gradient-text">G.R.A.C.E.</span> stands for
          </h2>
          <p className="text-lg text-muted-foreground">
            Growing Results with Automation, Care and Ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
          {letters.map((item) => (
            <div key={item.letter} className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient text-3xl font-display font-bold text-white shadow-lg">
                {item.letter}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.word}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraceName;
