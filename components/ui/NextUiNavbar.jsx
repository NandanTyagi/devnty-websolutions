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
} from "@nextui-org/react";
import Image from "next/image";

export default function NextUiNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Solutions", "About", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 z-50 flex w-full bg-white p-1 shadow-md md:p-5`}
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="logo flex items-center justify-between text-sm">
            <Link
              href="/"
              className="text-md flex items-center justify-center gap-4 p-1 font-semibold text-black md:text-2xl"
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
          <Link
            className={`p-1 ${pathname === "/solutions" && "underline"}`}
            href="/solutions"
          >
            Solutions
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            className={`p-1 ${pathname === "/about" && "underline"}`}
            href="about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            className={`p-1 ${pathname === "/contact" && "underline"}`}
            href="/contact"
          >
            Contact
          </Link>
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
      <NavbarMenu className="z-40 flex w-full gap-6 p-6 pt-[100px] text-center text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-black opacity-90"></div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                pathname === `/${item.toLowerCase()}` ? "primary" : "foreground"
              }
              className={`w-full text-2xl ${pathname === `/${item.toLowerCase()}` ? "underline" : ""}`}
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
