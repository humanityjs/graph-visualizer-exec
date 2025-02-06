"use client";

import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Heading from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import "@xyflow/react/dist/style.css";
import { Check, Server } from "lucide-react";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const LabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactElement;
}) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-2">
      <p className="text-sm font-bold text-gray-soft">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

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

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-full w-full grid-cols-3 gap-8">
      {/* <h1 className="p-4 text-2xl font-bold">Your Code should be here</h1>
      <div className="flex flex-col items-center justify-center">
        <p>count is: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
      <div style={{ width: "50vw", height: "50vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.051);

box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.102);

      </div> */}
      <div className="col-span-1 h-full w-full overflow-hidden">
        <div className="h-full w-full rounded-2xl bg-white shadow-card">
          <ScrollArea className="h-full overflow-scroll p-8">
            <Heading>Description</Heading>
            <p className="mb-8 text-xs leading-5 text-gray-soft">
              Lorem ipsum dolor sit amet consectetur. Aenean sodales
              pellentesque gravida nibh et magna faucibus. Dui commodo ut metus
              amet egestas habitant viverra. Quisque fusce senectus facilisis
              non diam leo nulla sem pellentesque. Sit in vel sed cursus metus
              sit fringilla vestibulum.
            </p>
            <Heading>Extra</Heading>
            <p className="pb-6 text-xs leading-5 text-gray-soft">
              Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
              fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
              lectus id ornare. Rhoncus in egestas in amet porttitor
              pellentesque sit. Amet gravida integer velit felis. Eu consectetur
              interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a
              aliquam eu quisque commodo lectus. Lectus ipsum velit purus
              viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris
              urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum
              habitant congue massa in etiam sit. Commodo nibh viverra lobortis
              augue lorem quam lorem suspendisse.
            </p>

            <Separator className="my-4" />

            <LabelValue label="Lorem ipsum dolor" value="10/19/2017" />
            <LabelValue label="Lorem ipsum dolor" value="Ut" />
            <LabelValue label="Lorem ipsum dolor" value="Eros" />
            <LabelValue
              label="Lorem ipsum dolor"
              value={
                <div className="flex items-center gap-2">
                  <Check className="text-main-green h-4 w-4" />
                  <span>Yes</span>
                </div>
              }
            />
            <LabelValue label="Lorem ipsum dolor" value="Sit" />
            <LabelValue label="Lorem ipsum dolor" value="Lorem ipsum dolor" />
            <LabelValue label="Lorem ipsum dolor" value="Lorem ipsum dolor" />

            <Separator className="my-6" />

            <Heading className="text-sm text-gray-soft">
              Lorem ipsum dolor
            </Heading>

            <Remediation title="Lorem P">
              <p>
                Lorem ipsum dolor sit amet consectetur. In laoreet elementum
                luctus odio. Id enim urna.
              </p>
            </Remediation>
            <Remediation title="Lorem S">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis viverra etiam
                pellentesque lectus semper in massa purus. Auctor aenean aenean
                senectus massa dignissim vehicula mi erat purus. Praesent
                scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis
                sed urna quam.
              </p>
            </Remediation>
            <Remediation title="Lorem T">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor
                convallis vitae arcu. Magna.
              </p>
            </Remediation>
          </ScrollArea>
        </div>
      </div>
      <div className="col-span-2 h-full w-full bg-blue-500"></div>
    </div>
  );
}
