import { Code2, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>Projects</GradientText>
          </h2>
          <p className="text-white/40 mt-3 text-sm">Things I&apos;ve built</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <GlassCard className="p-6 h-full flex flex-col" hover>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-semibold text-base">{project.title}</h3>
                  {project.badge && (
                    <span className="shrink-0 px-2.5 py-0.5 text-[11px] rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/25 text-blue-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-full bg-white/5 border border-white/10 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <Code2 size={14} />
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-white/25 cursor-default select-none">
                      <ExternalLink size={14} />
                      {project.liveLabel ?? "Live Demo"}
                    </span>
                  )}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
