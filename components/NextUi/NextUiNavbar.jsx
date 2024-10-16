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
import Image from "next/image";

export function NextUiNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = ["About", "Projects", "Contact", "Join"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="md:hidden">
      <NavbarContent>
        <NavbarBrand>
          <div className="logo flex justify-center items-center gap-6">
            <Link href="/" className="flex justify-center items-center gap-4 text-2xl text-black font-semibold">
              <Image
                src="/mns-logo.svg"
                alt="Logo"
                width={200}
                height={200}
                priority
                style={{ width: "60px", height: "auto" }}
              />
              mnsmzn.org
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <div className="w-[40px] h-[40px]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />

        </div>
      </NavbarContent>
      <NavbarMenu className="gap-6 flex text-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              color={
                pathname === `/${item.toLowerCase()}` ? "primary" : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}.html`}
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

export default NextUiNavbar;
