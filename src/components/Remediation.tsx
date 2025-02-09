import { Server } from "lucide-react";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Heading from "./ui/heading";

const Remediation = ({
  children,
  title,
  icon = Server,
  serverName = "Server",
  serverInfo = "Lorem ipsum dolor sit amet consectetur.",
}: {
  children: React.ReactNode;
  title: string;
  icon?: React.ElementType;
  serverName?: string;
  serverInfo?: string;
}) => {
  const Icon = icon;
  return (
    <Collapsible className="mx-1 my-1 mb-5 rounded-2xl bg-white p-4 shadow-card-2">
      <CollapsibleTrigger className="w-full text-left">
        <Heading className="text-sm text-[#030229]">{title}</Heading>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between gap-6 rounded-lg bg-gray-soft-25 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#D7EAFF]">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-soft-900">
                  {serverName}
                </p>
                <p className="text-[10px] font-medium text-gray-soft-500">
                  {" "}
                  Server
                </p>
              </div>
            </div>

            <div className="border-l border-gray-soft-500 pl-3">
              <p className="text-sm leading-6 text-gray-soft-400">
                {serverInfo}
              </p>
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent mt-3 text-[15px] leading-6 text-gray-soft">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Remediation;
