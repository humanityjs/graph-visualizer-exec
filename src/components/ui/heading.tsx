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
    <h2 className={cn("text-main-green mb-2 text-lg font-bold", className)}>
      {children}
    </h2>
  );
}

export default Heading;
