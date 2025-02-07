import { cn } from "@/lib/utils";

function RiskCount({
  level,
  count,
}: {
  count: number;
  level: "critical" | "high" | "medium" | "low";
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "h-2 w-2 rounded-full",
          level === "critical" && "bg-red-500",
          level === "high" && "bg-orange-500",
          level === "medium" && "bg-amber-500",
          level === "low" && "bg-green-500",
        )}
      ></div>
      <span className="text-[15px] font-bold text-[#383874]">{count}</span>
      <span className="text-[15px] text-[#383874]">
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    </div>
  );
}

export default RiskCount;
