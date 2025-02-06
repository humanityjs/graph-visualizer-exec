import { type NodeData } from "@/app/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Handle, type NodeProps, Position } from "@xyflow/react";
import NodeContent from "./NodeContent";
import {
  MiddleToolTipContent,
  SourceToolTipContent,
  TargetToolTipContent,
} from "./ToolTipContent";

const CustomNode = ({ data, id: nodeId }: NodeProps<NodeData>) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center gap-2">
            <Handle
              type="target"
              position={Position.Left}
              style={{ background: "transparent" }}
              id="target"
            />
            <NodeContent type={data.type} />
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700">
                {data.label}
              </div>
              {data.subLabel && (
                <div className="text-xs text-gray-500">{data.subLabel}</div>
              )}
            </div>
            <Handle
              type="source"
              position={Position.Right}
              style={{ background: "transparent" }}
              id="source"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side={nodeId === "target1" ? "left" : "bottom"}
          align={
            ["target1", "target2"].includes(nodeId)
              ? "end"
              : nodeId === "source"
                ? "start"
                : "center"
          }
          className="border-none bg-white p-0 shadow-lg"
          sideOffset={5}
        >
          <div className="rounded-2xl">
            {data.type === "source" && <SourceToolTipContent />}
            {data.type === "middle" && <MiddleToolTipContent />}
            {data.type === "target" && <TargetToolTipContent />}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomNode;
