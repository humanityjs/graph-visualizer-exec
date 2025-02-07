"use client";

import { Header } from "@/components/Header";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarContent from "./SideBarContent";

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent
          side="left"
          className="w-64 p-0"
          aria-label="Navigation menu"
          aria-describedby="navigation-description"
        >
          <div className="sr-only" id="navigation-description">
            Navigation sidebar containing main menu items and user profile
          </div>
          <SidebarContent
            pathname={pathname}
            isMobile={true}
            setIsMobileOpen={setIsMobileOpen}
          />
        </SheetContent>
      </Sheet>

      {/* Mobile Header */}
      <Header onShowMobileSidebar={() => setIsMobileOpen(true)} />

      {/* Desktop Sidebar */}
      <SidebarContent pathname={pathname} />
    </>
  );
}
