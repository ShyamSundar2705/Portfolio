import { Monitor, Server, Cloud, Brain, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  "Cloud & DevOps": Cloud,
  "AI & ML": Brain,
  "Tools & Others": Wrench,
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>Skills</GradientText>
          </h2>
          <p className="text-white/40 mt-3 text-sm">Technologies I work with</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const Icon: LucideIcon = categoryIcons[skill.category] ?? Wrench;
            return (
              <AnimatedSection key={skill.category} delay={i * 0.08}>
                <GlassCard className="p-5 h-full" hover>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-600/15 border border-white/10">
                      <Icon size={17} className="text-blue-400" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
