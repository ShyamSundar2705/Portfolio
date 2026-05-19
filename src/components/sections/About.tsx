import { CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personal, stats } from "@/data/portfolio";

const whatIDo = [
  "Build full-stack web apps with Next.js, React, and Node.js",
  "Design and deploy cloud-native systems on AWS",
  "Develop AI-powered tools using LangGraph and Groq",
  "Create performant REST APIs with FastAPI and Python",
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>About Me</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="space-y-7">
              <p className="text-white/65 text-base leading-relaxed">{personal.bio}</p>

              <div className="space-y-3">
                <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                  What I Do
                </h3>
                <ul className="space-y-2.5">
                  {whatIDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <CheckCircle
                        size={15}
                        className="text-blue-400 mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <GlassCard className="p-7 h-full flex flex-col justify-center">
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-8">
                Quick Stats
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold mb-1">
                      <GradientText>{stat.value}</GradientText>
                    </div>
                    <div className="text-white/45 text-xs leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
