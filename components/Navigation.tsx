"use client";

import { useMedia } from "react-use";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import NavButton from "./NavButton";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route, index) => (
          <NavButton
            href={route.href}
            key={`${route.href}-${index}`}
            label={route.label}
            isActive={pathname === route.href}
          />
        ))}
      </nav>
      <span className="block lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition-none"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Bar Hidden
          </SheetDescription>
          <SheetContent side="left" className="px-2">
            <nav className="flex flex-col gap-y-2 pt-6">
              {routes.map((route, index) => (
                <Button
                  variant={route.href === pathname ? "secondary" : "ghost"}
                  key={route.href}
                  onClick={() => onClick(route.href)}
                  className="w-full justify-start"
                >
                  {route.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </span>
    </>
  );
};

export default Navigation;
