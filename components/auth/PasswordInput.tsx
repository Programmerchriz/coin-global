
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function PasswordInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative group">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn(
          "pr-11 bg-[#0F1623] border border-white/10 text-white placeholder:text-white/40 rounded-xl transition-all duration-200",
          "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/40",
          "hover:border-white/20",
          "[&::-ms-reveal]:hidden",
          className
        )}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        title={showPassword ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-indigo-400 transition-colors duration-200"
      >
        {showPassword ? (
          <EyeOffIcon className="w-5 h-5" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </button>

      {/* Subtle glow on focus */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 group-focus-within:ring-2 group-focus-within:ring-indigo-600/20 transition-all duration-200" />
    </div>
  );
};
