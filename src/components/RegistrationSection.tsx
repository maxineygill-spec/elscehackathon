import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const RegistrationSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Registration submitted! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="registration" className="py-24 px-6 bg-beige">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cream rounded-xl p-8 sm:p-10 border border-border shadow-sm">
          
          <h2 className="font-display font-bold text-3xl text-foreground mb-2 text-center">Register</h2>
          <p className="text-center text-muted-foreground text-sm mb-8 font-body">Registration is first-come, first-served. Act fast to secure your place.

          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="font-body">Full name *</Label>
              <Input id="name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="font-body">Email *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="school" className="font-body">School / program *</Label>
              <Input id="school" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="year" className="font-body">Year *</Label>
              <Select required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergrad">Undergraduate</SelectItem>
                  <SelectItem value="grad">Graduate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="track" className="font-body">Preferred track *</Label>
              <Select required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="civil-discourse">Civil Discourse</SelectItem>
                  <SelectItem value="ethics-in-context">Ethics in Context</SelectItem>
                  <SelectItem value="shifting-perspectives">Shifting Perspectives</SelectItem>
                  <SelectItem value="no-preference">No preference</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="team" className="font-body">Team members if already formed (optional)</Label>
              <Textarea id="team" className="mt-1" placeholder="List names, separated by commas" />
            </div>
            <div>
              <Label htmlFor="hear" className="font-body">How did you hear about this? (optional)</Label>
              <Input id="hear" className="mt-1" />
            </div>

            <Button type="submit" variant="cobalt" size="lg" className="w-full mt-4" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit registration"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>);

};

export default RegistrationSection;