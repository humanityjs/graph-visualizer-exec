"use client";

import Heading from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ReactFlow } from "@xyflow/react";

import LabelValue from "@/components/LabelValue";
import Remediation from "@/components/Remediation";

import CustomNode from "@/components/custom-node/CustomNode";
import "@xyflow/react/dist/style.css";
import { Check } from "lucide-react";
import { useMemo } from "react";
import { initialEdges, initialNodes } from "./data";

export default function HomePage() {
  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
    }),
    [],
  );

  return (
    <div className="grid h-full w-full grid-cols-3 gap-8 overflow-visible">
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
      <div className="col-span-2 h-full w-full overflow-visible">
        <div className="relative w-full overflow-visible rounded-2xl bg-white p-8 shadow-card">
          <Heading className="mb-4">Lorem Lorem Lorem</Heading>
          <div className="bg-gray-soft-25 relative w-full overflow-visible rounded-xl">
            <div className="relative h-[300px] overflow-visible">
              <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
                className="overflow-visible"
                defaultEdgeOptions={{
                  type: "smoothstep",
                  animated: false,
                  style: { stroke: "#b1b1b7", strokeWidth: 2 },
                }}
                panOnDrag={false}
                zoomOnScroll={false}
                style={{ overflow: "visible" }}
                proOptions={{ hideAttribution: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
