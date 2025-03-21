import * as React from "react";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CustomTextareaProps = React.ComponentPropsWithoutRef<typeof ShadcnTextarea> & {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  ariaLabel?: string;
};

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ className, onChange, value = "", ariaLabel, ...props }, ref) => {
    return (
      <ShadcnTextarea
        ref={ref}
        className={cn(
          "flex h-20 rounded-md border border-input bg-transparent px-3 py-1 text-base border-gray-200 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

CustomTextarea.displayName = "CustomTextarea";

export { CustomTextarea };
