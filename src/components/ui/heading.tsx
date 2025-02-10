import { cn } from "@/lib/utils";
import React from "react";

function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-3 text-xl font-bold text-main-green", className)}>
      {children}
    </h2>
  );
}

export default Heading;
