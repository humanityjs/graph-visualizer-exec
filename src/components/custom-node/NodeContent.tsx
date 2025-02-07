import { Server, ShieldX, User } from "lucide-react";
function NodeContent({ type }: { type: "source" | "middle" | "target" }) {
  if (type === "source") {
    return (
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
          <User className="h-4 w-4 text-white" />
        </div>
        <ShieldX className="h-10 w-10 text-red-500" />
      </div>
    );
  }

  if (type === "middle") {
    return (
      <div className="mx-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Server className="h-10 w-10 text-blue-500" />
      </div>
    );
  }

  if (type === "target") {
    return (
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
          <ShieldX className="h-4 w-4 text-white" />
        </div>
        <Server className="h-10 w-10 text-blue-500" />
      </div>
    );
  }

  return null;
}

export default NodeContent;
