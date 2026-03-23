import { motion } from "framer-motion";
import { FileText, Calendar } from "lucide-react";

const UpdatesSection = () =>
<section className="py-24 px-6 bg-beige">
    <div className="max-w-3xl mx-auto">
      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-8 text-center">
      
        Updates & Materials
      </motion.h2>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-cream rounded-lg p-8 border border-border space-y-6">
      
        {/* ORGANIZERS: Edit the text below to post updates */}
        <p className="font-body text-foreground/70 text-center italic">
          Updates will be posted here as the event approaches.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <FileText className="w-5 h-5 text-cobalt" />
            {/* ORGANIZERS: Replace "coming soon" with a link to the participant packet */}
            <span className="font-body text-sm">Participant packet: <span className="italic">coming soon</span></span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5 text-cobalt" />
            {/* ORGANIZERS: Replace "coming soon" with a link to the day-of schedule */}
            <span className="font-body text-sm">Day-of schedule: <span className="italic">coming soon</span></span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default UpdatesSection;