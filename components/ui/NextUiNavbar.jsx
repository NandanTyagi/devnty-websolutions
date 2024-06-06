"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../Logo";
import Image from "next/image";

export default function NextUiNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Enter",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`${pathname !== "/" ? "flex" : "hidden"} p-2 md:p-6`}
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="logo flex items-center justify-between text-sm">
            <Link
              href="/"
              className="text-md flex items-center justify-center gap-4 font-semibold text-black md:text-2xl"
            >
              <Image
                src="/devnty-logo-new.svg"
                alt="Logo"
                width={80}
                height={80}
                priority
                style={{ width: "40px", height: "auto" }}
              />
              DEVNTY Websolutions
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href="/solutions">Solutions</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="about">About</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="/partners">Partners</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="/contact">Contact</Link>
        </NavbarItem>
        <NavbarItem className="">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            icon={(isMenuOpen) => (
              isMenuOpen?<Image
                src="/devnty-logo-new.svg"
                alt="Logo"
                width={80}
                height={80}
                priority
                style={{ width: "40px", height: "auto" }}
                
              />:
              <Image
                src="/devnty-logo.svg"
                alt="Logo"
                width={80}
                height={80}
                priority
                style={{ width: "40px", height: "auto" }}
                
              />
            )}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex gap-6 text-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                pathname === `/${item.toLowerCase()}` ? "primary" : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
