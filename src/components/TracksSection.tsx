import { motion } from "framer-motion";

const tracks = [
  {
    name: "Track A: Civil Discourse",
    color: "bg-cobalt",
    description:
      "Design an activity that helps students discuss a contested political or social topic without the conversation collapsing.",
    constraint:
      "All participants must have a reason to listen, not just speak.",
  },
  {
    name: "Track B: Ethics in Context",
    color: "bg-purple-accent",
    description:
      "Design an activity that helps students reason through a real ethical dilemma in a specific domain: medicine, AI, law, or business.",
    constraint:
      'The activity must make the "wrong" answer feel genuinely tempting, not a straw man.',
  },
  {
    name: "Track C: Shifting Perspectives",
    color: "bg-cobalt-deep",
    description:
      "Design a simulation, role play, or structured exercise that gives participants a felt sense of a perspective they don't hold.",
    constraint:
      "Must be classroom-safe and avoid trauma or tokenism.",
  },
];

const TracksSection = () => (
  <section className="py-24 px-6 bg-beige">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12 text-center"
      >
        Tracks
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-cream rounded-lg overflow-hidden border border-border"
          >
            <div className={`${track.color} h-2`} />
            <div className="p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{track.name}</h3>
              <p className="font-body text-foreground/80 text-sm mb-4">{track.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TracksSection;
