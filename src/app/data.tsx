import { MarkerType, type Node } from "@xyflow/react";
import {
  AlertTriangle,
  Box,
  Check,
  FileText,
  LayoutGrid,
  Pin,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

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

const servers: {
  name: string;
  ip: string;
  status: "critical" | "warning" | "success";
}[] = [
  {
    name: "Loremipsumdolorsit",
    ip: "192.168.1.1",
    status: "critical",
  },
  {
    name: "Loremipsumdolorsit002",
    ip: "192.168.1.2",
    status: "warning",
  },
  {
    name: "Loremipsumdolorsit003",
    ip: "192.168.1.3",
    status: "success",
  },
];

const remediations = [
  {
    title: "Lorem P",
    description:
      "Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.",
  },
  {
    title: "Lorem S",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.",
  },
  {
    title: "Lorem T",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.",
  },
];

const properties = [
  {
    label: "Lorem ipsum dolor",
    value: "10/19/2017",
  },
  {
    label: "Lorem ipsum dolor",
    value: "Ut",
  },
  {
    label: "Lorem ipsum dolor",
    value: "Eros",
  },
  {
    label: "Lorem ipsum dolor",
    value: (
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-main-green" />
        <span>Yes</span>
      </div>
    ),
  },
  {
    label: "Lorem ipsum dolor",
    value: "Sit",
  },
  {
    label: "Lorem ipsum dolor",
    value: "Lorem ipsum dolor",
  },
  {
    label: "Lorem ipsum dolor",
    value: "Lorem ipsum dolor",
  },
];

const mainNavItems = [
  { href: "/", icon: LayoutGrid, label: "Dashboard" },
  { href: "/alerts", icon: AlertTriangle, label: "Alerts" },
  { href: "/resources", icon: Box, label: "Resources" },
  { href: "/integrations", icon: Sparkles, label: "Integrations" },
  { href: "/pinned", icon: Pin, label: "Pinned" },
  { href: "/documents", icon: FileText, label: "Documents" },
  { href: "/filters", icon: SlidersHorizontal, label: "Filters" },
];

export {
  initialEdges,
  initialNodes,
  mainNavItems,
  properties,
  remediations,
  servers,
};
