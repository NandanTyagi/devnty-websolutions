"use client";

import { useState, useEffect } from "react";
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
  const [showMenu, setShowMenu] = useState(true);

  const menuItems = ["Solutions", "About", "Contact"];

  const handelShowMenu = () => {
    setShowMenu(false);
    setTimeout(() => {
      setShowMenu(true);
    }, 5000);
  };

  useEffect(() => {
    
    if (pathname === "/") {
    handelShowMenu();
    }
  }, [pathname, showMenu]);

  return (
    
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={` ${showMenu ? "flex": "hidden"} fixed z-50  w-full bg-white p-2 shadow-md md:p-6`}
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
          <Link href="/contact">Contact</Link>
        </NavbarItem>
        <NavbarItem className="">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-1 md:hidden"
            icon={(isMenuOpen) =>
              isMenuOpen ? (
                <Image
                  src="/hamburger-opend.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                  style={{ width: "26px", height: "auto" }}
                />
              ) : (
                <Image
                  src="/hamburger-closed.svg"
                  alt="Logo"
                  width={80}
                  height={80}
                  priority
                  style={{ width: "26px", height: "auto" }}
                />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex gap-6 text-center w-full h-svh p-6 pt-[80px] text-white">
      <div className="absolute top-[-20px] bottom-0 left-0 right-0 bg-black z-0 opacity-90"></div>
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
