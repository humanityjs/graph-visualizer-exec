import { cn } from "@/lib/utils";
import { ShieldX } from "lucide-react";

function GraphLabel({ variant }: { variant: "warning" | "error" | "success" }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full",
          variant === "warning" && "bg-amber-500",
          variant === "error" && "bg-red-500",
          variant === "success" && "bg-green-500",
        )}
      >
        <ShieldX className="h-5 w-5 text-white" />
      </div>
      <span
        className={cn(
          "font-bold",
          variant === "warning" && "text-amber-500",
          variant === "error" && "text-red-500",
          variant === "success" && "text-green-500",
        )}
      >
        Lorem
      </span>
    </div>
  );
}

export default GraphLabel;
