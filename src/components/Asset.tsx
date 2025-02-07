import { cn } from "@/lib/utils";
import { ServerIcon } from "lucide-react";

function Asset({
  name,
  ip,
  status,
}: {
  name: string;
  ip: string;
  status: "critical" | "warning" | "success";
}) {
  return (
    <div className="flex flex-wrap items-center justify-between p-[10px]">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
          <ServerIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold text-gray-soft">
            {name}
          </span>
          <span className="text-[10px] text-gray-soft-500">{ip}</span>
        </div>
      </div>
      <div
        className={cn(
          "my-1 rounded-full px-4 py-1",
          status === "critical" && "bg-red-50",
          status === "warning" && "bg-amber-50",
          status === "success" && "bg-green-50",
        )}
      >
        <span
          className={cn(
            "text-sm font-bold",
            status === "critical" && "text-red-600",
            status === "warning" && "text-amber-600",
            status === "success" && "text-green-600",
          )}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
}

export default Asset;
