"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [["Solutions", "/solutions"], ["About", "/about"], ["Contact", "/contact"]];
export default function NextUiNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => setOpen(false), [pathname]);
  function escape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }
  return (
    <header className="site-header" onKeyDown={escape}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="DEVNTY home" onClick={() => setOpen(false)}>
          <Image src="/devnty-logo-new.svg" alt="" width={40} height={40} priority />
          <span>DEVNTY<span className="brand-detail">Websolutions</span></span>
        </Link>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav id="primary-navigation" className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={href === "/contact" ? "nav-contact" : ""} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
