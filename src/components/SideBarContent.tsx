import { mainNavItems } from "@/app/data";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  CircleUser,
  LogOut,
  Settings,
  StickyNote,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface SidebarContentProps {
  pathname: string;
  isMobile?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

function SidebarContent({
  pathname,
  isMobile = false,
  setIsMobileOpen,
}: SidebarContentProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const BREAKPOINT_XL = "1280px";
    const BREAKPOINT_2XL = "1536px";

    const handleResize = () => {
      const isXLOrSmaller = window.matchMedia(
        `(max-width: ${BREAKPOINT_XL})`,
      ).matches;
      const is2XLOrSmaller = window.matchMedia(
        `(max-width: ${BREAKPOINT_2XL})`,
      ).matches;

      if (isXLOrSmaller) {
        setIsCollapsed(false);
      } else if (is2XLOrSmaller) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={cn(
        "relative h-screen flex-col border-r bg-white pt-5 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[84px]" : "w-64",
        isMobile ? "flex" : "hidden xl:flex",
      )}
    >
      <div className="absolute -right-5 top-5 hidden xl:block">
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

      <div className="flex items-center justify-end px-4 xl:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen?.(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="w-full flex-1 overflow-x-visible px-4">
        <nav className="space-y-2 py-4">
          {isCollapsed && (
            <div className="flex items-center justify-center pb-2">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
          )}
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
        <div className="w-full space-y-2">
          {[
            { href: "/settings", icon: Settings, label: "Lorem" },
            { href: "/lorem", icon: StickyNote, label: "Lorem" },
          ].map((item) => (
            <NavLink
              key={item.href}
              isCollapsed={isCollapsed}
              pathname={pathname}
              item={item}
            />
          ))}
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

export default SidebarContent;
