import { motion } from "framer-motion";
import { FileText, ClipboardList, Pencil, Dice5, Coffee } from "lucide-react";

const items = [
  { icon: FileText, label: "Printed participant packet (game design principles, examples, product ideas)" },
  { icon: ClipboardList, label: "Activity spec sheet template" },
  { icon: Pencil, label: "Supplies: index cards, sticky notes, markers, large paper, whiteboards" },
  { icon: Dice5, label: "Optional: dice, timers, name tags for prototyping" },
  { icon: Coffee, label: "Breakfast and lunch provided" },
];

const WhatsProvidedSection = () => (
  <section className="py-24 px-6 bg-beige-warm">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12 text-center"
      >
        What's provided
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 bg-cream rounded-lg p-5 border border-border"
          >
            <div className="bg-purple-accent/10 rounded-lg p-2.5 shrink-0">
              <item.icon className="w-5 h-5 text-purple-accent" />
            </div>
            <p className="font-body text-sm text-foreground/80">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsProvidedSection;
