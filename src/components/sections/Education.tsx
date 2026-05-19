import { GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education } from "@/data/portfolio";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>Education</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GlassCard className="p-10 text-center">
            <div className="flex justify-center mb-7">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-600/15 border border-white/10">
                <GraduationCap size={30} className="text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2 leading-snug">
              {education.degree}
            </h3>
            <p className="text-white/55 text-base mb-1">{education.college}</p>
            <p className="text-white/35 text-sm mb-5">{education.year}</p>
            {education.cgpa && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10">
                <span className="text-white/45 text-sm">CGPA</span>
                <GradientText className="font-bold text-sm">{education.cgpa}</GradientText>
              </div>
            )}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};
