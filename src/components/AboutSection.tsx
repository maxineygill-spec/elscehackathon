import { motion } from "framer-motion";
import { MessageSquare, Brain, GraduationCap, Users } from "lucide-react";

const highlights = [
{ icon: MessageSquare, title: "Create a classroom-ready teaching activity" },
{ icon: Brain, title: "Apply learning science and design thinking" },
{ icon: GraduationCap, title: "Judged by Harvard faculty and staff" },
{ icon: Users, title: "All majors and programs welcome" }];


const AboutSection = () =>
<section className="py-24 px-6 bg-beige">
    <div className="max-w-4xl mx-auto">
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-16 text-center max-w-3xl mx-auto font-body">
      The best ideas don't avoid hard conversations — they redesign them. Join us for a full-day hackathon on ethics, civil discourse, and the art of teaching difficult things. No game design, learning design, or teaching experience required.



    </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((item, i) =>
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-cream rounded-lg p-6 flex items-start gap-4 border border-border">
        
            <div className="bg-cobalt/10 rounded-lg p-3 shrink-0">
              <item.icon className="w-6 h-6 text-cobalt" />
            </div>
            <p className="font-display font-semibold text-foreground">{item.title}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default AboutSection;