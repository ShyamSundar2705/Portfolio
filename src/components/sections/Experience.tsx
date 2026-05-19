import { Briefcase } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>Experience</GradientText>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[18px] top-5 bottom-5 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent hidden sm:block" />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="flex gap-5">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center pt-1.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 ring-4 ring-[#0a0a0f]">
                      <Briefcase size={15} className="text-white" strokeWidth={1.8} />
                    </div>
                  </div>

                  <GlassCard className="flex-1 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-white font-semibold text-sm">{exp.role}</h3>
                        <p className="text-white/45 text-xs mt-0.5">{exp.org}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-white/35 text-xs font-medium">{exp.duration}</span>
                        <span className="px-2.5 py-0.5 text-[10px] rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{exp.description}</p>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
