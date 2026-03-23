import { motion } from "framer-motion";

const schedule = [
  { time: "9:00am", label: "Kickoff and framing" },
  { time: "10:00am", label: "Design sprint begins" },
  { time: "12:30pm", label: "Lunch break (provided)" },
  { time: "1:00pm", label: "Final polish" },
  { time: "3:00pm", label: "Pitches and judging" },
  { time: "5:00pm", label: "Break while judges deliberate" },
  { time: "5:30pm", label: "Awards and social" },
  { time: "6:00pm", label: "Event ends" },
];

const HowItWorksSection = () => (
  <section className="py-24 px-6 bg-beige-warm">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12 text-center"
      >
        How it works
      </motion.h2>

      {/* Timeline */}
      <div className="relative ml-4 sm:ml-8 border-l-2 border-cobalt/30 pl-8 space-y-8 mb-16">
        {schedule.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-cobalt border-2 border-beige-warm" />
            <p className="font-display font-bold text-cobalt text-sm">{item.time}</p>
            <p className="font-body text-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* What you'll make */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-cream rounded-lg p-8 border border-border"
      >
        <h3 className="font-display font-bold text-xl text-foreground mb-4">What you'll make</h3>
        <p className="font-body text-foreground/80 leading-relaxed">
          Teams of 3–5 design a game-like classroom activity that takes 15–30 minutes to run,
          requires no special technology, and comes with a one-page facilitator guide. Teams submit
          a one-page activity spec sheet as their deliverable.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
