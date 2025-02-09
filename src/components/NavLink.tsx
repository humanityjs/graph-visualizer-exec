import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

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
        "group relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-soft transition-colors",
        isActive ? "bg-[#E9FAF0] text-gray-soft" : "hover:bg-gray-100",
      )}
    >
      <Icon
        size={20}
        className={cn(
          "group-hover:text-[#00481D]",
          isActive ? "text-[#00481D]" : "text-gray-soft-300",
        )}
      />
      {!isCollapsed && <span>{item.label}</span>}
      {isCollapsed && (
        <div
          className={cn(
            "invisible absolute left-full top-1 z-50 ml-3 origin-left scale-95 rounded-md bg-[#E9FAF0] px-4 py-2 text-gray-soft opacity-0 transition-all",
            "group-hover:visible group-hover:scale-100 group-hover:opacity-100",
          )}
        >
          <span>{item.label}</span>
        </div>
      )}
    </Link>
  );
};

export default NavLink;
