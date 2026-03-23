import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cobalt">
      {/* Doodle elements */}
      <div className="absolute top-[15%] left-[8%] float-bob opacity-60">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M10 40C10 20 25 10 40 10C55 10 70 20 70 35C70 50 60 55 50 55H45L35 70L33 55C20 53 10 48 10 40Z" stroke="hsl(var(--purple-accent))" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute top-[20%] right-[10%] float-bob-alt opacity-50">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="12" stroke="hsl(var(--purple-accent))" strokeWidth="3" fill="none"/>
          <circle cx="30" cy="30" r="4" fill="hsl(var(--purple-accent))" opacity="0.5"/>
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[15%] float-bob-slow opacity-40">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 5L30 20L45 25L30 30L25 45L20 30L5 25L20 20Z" stroke="hsl(var(--purple-accent))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute bottom-[25%] right-[12%] float-bob opacity-50">
        <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
          <rect x="5" y="5" width="30" height="30" rx="4" stroke="hsl(var(--purple-accent))" strokeWidth="2.5" fill="none" transform="rotate(-8 20 20)"/>
          <circle cx="52" cy="25" r="3" fill="hsl(var(--purple-accent))" opacity="0.6"/>
          <circle cx="52" cy="15" r="3" fill="hsl(var(--purple-accent))" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight mb-8"
        >
          Can a game help people talk about{" "}
          <span className="pencil-underline">hard things</span>?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-body text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto min-h-[3.5rem]"
        >
          <TypewriterText
            text="A full-day learning design hackathon — May 2nd, 2026 · Edmond and Lily Safra Center for Ethics, Harvard University"
            delay={1200}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
        >
          <Button variant="hero" size="lg" onClick={scrollToRegistration} className="px-10 py-6 text-lg">
            Register now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
