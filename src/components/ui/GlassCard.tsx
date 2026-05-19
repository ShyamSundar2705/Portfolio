import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl",
        hover && "hover:bg-white/10 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
