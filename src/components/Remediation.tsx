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
    <Collapsible className="shadow-card-2 mx-1 my-1 mb-4 rounded-2xl bg-white p-4">
      <CollapsibleTrigger className="w-full text-left">
        <Heading className="text-sm text-[#030229]">{title}</Heading>
        <div className="flex w-full items-center justify-between">
          <div className="bg-gray-soft-25 flex w-full items-center justify-between gap-6 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#D7EAFF]">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-gray-soft-900 text-xs font-semibold">
                  {serverName}
                </p>
                <p className="text-gray-soft-500 text-[10px] font-medium">
                  {" "}
                  Server
                </p>
              </div>
            </div>

            <div className="border-gray-soft-500 border-l pl-3">
              <p className="text-gray-soft-400 text-sm leading-6">
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
