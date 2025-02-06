"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onShowMobileSidebar: () => void;
}

export function Header({ onShowMobileSidebar }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b bg-white px-4 lg:hidden">
      <div className="flex h-14 items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onShowMobileSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold">Graph Visualizer</h1>
      </div>
    </header>
  );
}
