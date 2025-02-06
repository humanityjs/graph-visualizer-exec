import { MarkerType, type Node } from "@xyflow/react";

export type NodeData = Node<
  {
    label: string;
    type: "source" | "middle" | "target";
    subLabel?: string;
    hasError?: boolean;
  },
  "customNode"
>;

const initialNodes: NodeData[] = [
  {
    id: "source",
    position: { x: 0, y: 150 },
    data: {
      label: "Loremipsumm",
      type: "source",
    },
    type: "customNode",
  },
  {
    id: "middle1",
    position: { x: 200, y: 150 },
    data: {
      label: "Loremipsu",
      type: "middle",
    },
    type: "customNode",
  },
  {
    id: "middle2",
    position: { x: 400, y: 150 },
    data: {
      label: "Loremipsu",
      type: "middle",
    },
    type: "customNode",
  },
  {
    id: "target1",
    position: { x: 800, y: 50 },
    data: {
      label: "Loremipsumdolorsit",
      subLabel: "192.168.1.1",
      type: "target",
      hasError: true,
    },
    type: "customNode",
  },
  {
    id: "target2",
    position: { x: 800, y: 250 },
    data: {
      label: "Loremipsumdolorsit002",
      subLabel: "192.168.1.2",
      type: "target",
      hasError: true,
    },
    type: "customNode",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "source",
    target: "middle1",
    type: "smoothstep",
    animated: false,
    sourceHandle: "source",
    targetHandle: "target",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#b1b1b7",
    },
    style: { stroke: "#b1b1b7", strokeWidth: 2 },
    pathOptions: {
      offset: 0,
      borderRadius: 10,
    },
  },
  {
    id: "e2-3",
    source: "middle1",
    target: "middle2",
    type: "smoothstep",
    animated: false,
    sourceHandle: "source",
    targetHandle: "target",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#b1b1b7",
    },
    style: { stroke: "#b1b1b7", strokeWidth: 2 },
    pathOptions: {
      offset: 25,
      borderRadius: 10,
    },
  },
  {
    id: "e3-4",
    source: "middle2",
    target: "target1",
    type: "smoothstep",
    animated: false,
    sourceHandle: "source",
    targetHandle: "target",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#b1b1b7",
    },
    style: { stroke: "#b1b1b7", strokeWidth: 2 },
    pathOptions: {
      offset: 0,
      borderRadius: 200,
    },
  },
  {
    id: "e3-5",
    source: "middle2",
    target: "target2",
    type: "smoothstep",
    animated: false,
    sourceHandle: "source",
    targetHandle: "target",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#b1b1b7",
    },
    style: { stroke: "#b1b1b7", strokeWidth: 2 },
    pathOptions: {
      offset: 0,
      borderRadius: 200,
    },
  },
];

export { initialEdges, initialNodes };
