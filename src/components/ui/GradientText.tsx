import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: HeadingTag;
}

export const GradientText = ({ children, className, as: Tag = "span" }: GradientTextProps) => {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
};
