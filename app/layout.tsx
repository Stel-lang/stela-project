"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-display text-xl font-light tracking-widest uppercase text-white hover:text-sky-300 transition-colors">
              Portfolio
            </Link>
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={pathname === l.href ? "nav-link-active" : "nav-link"}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
          {open && (
            <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-6">
              <ul className="flex flex-col gap-5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={pathname === l.href ? "nav-link-active" : "nav-link"}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-6">
          <p className="text-center font-mono text-xs tracking-widest text-white/40 uppercase">
            &copy;2026 Stelamae Sumalinog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}