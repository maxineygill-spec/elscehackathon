import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const JudgesSection = () => {
  const { data: judges, isLoading } = useQuery({
    queryKey: ["judges"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("judges")
        .select("*")
        .order("created_at");
      if (error) throw error;
      return data;
    },
  });

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="py-24 px-6 bg-beige">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12 text-center"
        >
          Meet the Judges
        </motion.h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center animate-pulse">
                <div className="w-24 h-24 rounded-full bg-muted mb-4" />
                <div className="h-4 w-32 bg-muted rounded mb-2" />
                <div className="h-3 w-48 bg-muted rounded mb-2" />
                <div className="h-3 w-56 bg-muted rounded" />
              </div>
            ))}
          </div>
        ) : !judges || judges.length === 0 ? (
          <p className="text-center font-body text-foreground/60 text-lg italic">
            Judges will be announced soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge, i) => (
              <motion.div
                key={judge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Avatar className="w-24 h-24 mb-4">
                  {judge.headshot_url ? (
                    <AvatarImage src={judge.headshot_url} alt={judge.name} />
                  ) : null}
                  <AvatarFallback className="text-lg font-display bg-cobalt text-white">
                    {getInitials(judge.name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {judge.name}
                </h3>
                <p className="font-body text-foreground/70 text-sm">
                  {judge.title}, {judge.affiliation}
                </p>
                <p className="font-body text-foreground/80 text-sm mt-2 italic max-w-xs">
                  "{judge.bio_sentence}"
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JudgesSection;
