import { initialEdges, initialNodes } from "@/app/data";
import { ReactFlow as MainReactFlow, useReactFlow } from "@xyflow/react";
import { useEffect, useMemo } from "react";
import CustomNode from "./custom-node/CustomNode";

function ReactFlow() {
  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
    }),
    [],
  );

  const { fitView } = useReactFlow();

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        void fitView();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fitView]);

  return (
    <MainReactFlow
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
      panOnDrag={true}
      zoomOnScroll
      style={{ overflow: "visible" }}
      proOptions={{ hideAttribution: true }}
      zoomOnPinch
    />
  );
}

export default ReactFlow;
