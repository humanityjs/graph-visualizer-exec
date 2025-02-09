"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { ReactFlowProvider } from "@xyflow/react";

import LabelValue from "@/components/LabelValue";
import Remediation from "@/components/Remediation";

import Asset from "@/components/Asset";
import GraphLabel from "@/components/GraphLabel";
import ReactFlow from "@/components/ReactFlow";
import RiskCount from "@/components/RiskCount";
import "@xyflow/react/dist/style.css";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { properties, remediations, servers } from "./data";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-scroll xl:grid xl:grid-cols-3 xl:gap-8 xl:overflow-hidden">
      <div className="w-full xl:col-span-1 xl:h-full xl:overflow-hidden">
        <div className="h-full w-full rounded-2xl bg-white shadow-card">
          <div className="h-full p-3 xl:overflow-scroll xl:px-[30px] xl:py-[20px]">
            <Heading>Description</Heading>
            <p className="mb-[46px] text-xs leading-5 text-gray-soft">
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

            <Separator className="my-3" />

            {properties.map((property, index) => (
              <LabelValue
                key={`${property.label}-${index}`}
                label={property.label}
                value={property.value}
              />
            ))}

            <Separator className="my-3" />

            <Heading className="text-sm text-gray-soft">
              Lorem ipsum dolor
            </Heading>

            {remediations.map((remediation) => (
              <Remediation key={remediation.title} title={remediation.title}>
                <p>{remediation.description}</p>
              </Remediation>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full xl:col-span-2 xl:h-full xl:overflow-scroll">
        <div className="relative w-full rounded-2xl bg-white p-3 shadow-card xl:px-[30px] xl:py-[20px]">
          <Heading className="mb-4">Lorem Lorem Lorem</Heading>
          <div className="relative w-full rounded-xl bg-gray-soft-25">
            <div className="relative h-[300px] overflow-visible">
              <ReactFlowProvider>
                <ReactFlow />
              </ReactFlowProvider>
            </div>
            <div className="w-full p-4">
              <Separator className="my-4" />
              <div className="flex items-center gap-6">
                <GraphLabel variant="error" />
                <GraphLabel variant="warning" />
                <GraphLabel variant="success" />
              </div>
            </div>
          </div>
          <Heading className="my-5 mb-4">Lorem ipsum dolor sit</Heading>
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
                <span className="text-[13px] text-gray-soft-400">Asset</span>
                <span className="text-[13px] text-gray-soft-400">
                  Contextual Risk
                </span>
              </div>

              <div className="divide-y divide-gray-200">
                {servers.map((server) => (
                  <Asset
                    key={server.name}
                    name={server.name}
                    ip={server.ip}
                    status={server.status}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 border-t border-gray-200 px-6 py-3 text-[13px] text-gray-soft-500">
                <button className="disabled:text-gray-300" disabled>
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <span>
                  Showing 1-{servers.length} of {servers.length}
                </span>
                <button className="disabled:text-gray-300" disabled>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="mb-6 text-lg font-medium text-gray-soft-500">
                Contextual Risk
              </h2>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <RiskCount level="critical" count={2} />
                  <RiskCount level="high" count={0} />
                  <RiskCount level="medium" count={0} />
                  <RiskCount level="low" count={0} />
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative h-32 w-32">
                    <div className="border-main-red absolute inset-0 rounded-full border-8"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-semibold text-gray-700">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
