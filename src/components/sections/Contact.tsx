"use client";

import { useState, type FormEvent } from "react";
import { Code2, Link2, Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personal } from "@/data/portfolio";

// TODO: add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//       NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <GradientText>Let&apos;s Connect</GradientText>
          </h2>
          <p className="text-white/40 mt-3 text-sm">Got a project in mind? Let&apos;s talk.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: copy + socials */}
          <AnimatedSection>
            <div className="space-y-7">
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Let&apos;s build something together
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Whether it&apos;s a full-stack web app, a cloud deployment, or an AI feature —
                  I&apos;m open to interesting projects and collaborations. Reach out and let&apos;s
                  create something great.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    <Mail size={17} className="text-blue-400" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm">{personal.email}</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    <Code2 size={17} className="text-blue-400" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm">github.com/ShyamSundar2705</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    <Link2 size={17} className="text-blue-400" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm">linkedin.com/in/arshyamsundar</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.15}>
            <GlassCard className="p-7 relative overflow-hidden">
              {success && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-2xl z-10">
                  <div className="text-center space-y-3">
                    <CheckCircle size={44} className="text-green-400 mx-auto" strokeWidth={1.5} />
                    <p className="text-white font-semibold">Message sent!</p>
                    <p className="text-white/50 text-sm">I&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs">
          Built by{" "}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            Shyam Sundar
          </a>{" "}
          · {personal.location}
        </p>
      </div>
    </section>
  );
};
