"use client";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Box,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  FileText,
  LayoutGrid,
  LogOut,
  Pin,
  Settings,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const mainNavItems = [
  { href: "/", icon: LayoutGrid, label: "Dashboard" },
  { href: "/alerts", icon: AlertTriangle, label: "Alerts" },
  { href: "/resources", icon: Box, label: "Resources" },
  { href: "/integrations", icon: Sparkles, label: "Integrations" },
  { href: "/pinned", icon: Pin, label: "Pinned" },
  { href: "/documents", icon: FileText, label: "Documents" },
  { href: "/filters", icon: SlidersHorizontal, label: "Filters" },
];

interface SidebarContentProps {
  pathname: string;
  isMobile?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

const NavLink = ({
  isCollapsed,
  pathname,
  item,
}: {
  isCollapsed: boolean;
  pathname: string;
  item: { href: string; icon: React.ElementType; label: string };
}) => {
  const isActive = pathname === item.href;
  const Icon = item.icon;
  return (
    <Link
      key={item.href}
      href={item.href}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 transition-colors",
        isActive ? "bg-green-50 text-[#525D73]" : "hover:bg-gray-100",
      )}
    >
      <Icon size={20} className={isActive ? "text-black" : "text-gray-400"} />
      {!isCollapsed && <span>{item.label}</span>}
      {isCollapsed && (
        <div
          className={cn(
            "invisible absolute left-full top-1 ml-3 origin-left scale-95 rounded-md bg-black px-4 py-2 text-white opacity-0 transition-all",
            "group-hover:visible group-hover:scale-100 group-hover:opacity-100",
          )}
        >
          <span>{item.label}</span>
        </div>
      )}
    </Link>
  );
};

function SidebarContent({
  pathname,
  isMobile = false,
  setIsMobileOpen,
}: SidebarContentProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <aside
      className={cn(
        "relative h-screen flex-col border-r bg-white pt-5 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[84px]" : "w-64",
        isMobile ? "flex" : "hidden lg:flex",
      )}
    >
      <div className="absolute -right-5 top-5 hidden lg:block">
        <div className="relative">
          <Button
            variant="outline"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00732E] p-2 transition-all duration-300 ease-in-out hover:bg-[#00732E]/80"
            onClick={() => setIsCollapsed(!isCollapsed)}
            size="icon"
          >
            {isCollapsed ? (
              <ChevronRight className="text-white" />
            ) : (
              <ChevronLeft className="text-white" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-end px-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen?.(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="w-full flex-1 overflow-x-visible px-4">
        <nav className="space-y-1 py-4">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              isCollapsed={isCollapsed}
              pathname={pathname}
              item={item}
            />
          ))}
        </nav>
      </div>

      <div className="relative flex w-full flex-col justify-between space-y-6 overflow-visible p-4">
        <div className="w-full space-y-1">
          {[{ href: "/settings", icon: Settings, label: "Settings" }].map(
            (item) => (
              <NavLink
                key={item.href}
                isCollapsed={isCollapsed}
                pathname={pathname}
                item={item}
              />
            ),
          )}
        </div>
        <div className="w-full border-t">
          <div className="flex items-center justify-between px-1 py-3">
            <div className="flex-start flex items-center gap-2">
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>
                  <CircleUser
                    className="text-gray-400 transition-all duration-300 ease-in-out"
                    size={isCollapsed ? 20 : 48}
                  />
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <p className="text-sm text-gray-soft">John</p>
                  <p className="text-sm text-gray-soft">Doe</p>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <Button variant="ghost" size="icon">
                <LogOut className="text-black" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="w-64 p-0">
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
