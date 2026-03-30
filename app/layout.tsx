"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-white/20 rounded-full text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:border-gray-500 dark:hover:border-white/40 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/40 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-display text-xl font-light tracking-widest uppercase text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors">
                Portfolio
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={pathname === l.href ? "nav-link-active" : "nav-link"}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ThemeToggle />
              </div>
              <div className="md:hidden flex items-center gap-3">
                <ThemeToggle />
                <button className="text-gray-900 dark:text-white" onClick={() => setOpen(!open)}>
                  {open ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </nav>
            {open && (
              <div className="md:hidden bg-white/90 dark:bg-black/60 backdrop-blur-md border-t border-gray-200 dark:border-white/10 px-6 py-6 transition-colors duration-300">
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

          <footer className="border-t border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md py-6 transition-colors duration-300">
            <p className="text-center font-mono text-xs tracking-widest text-gray-500 dark:text-white/40 uppercase">
              &copy;2026 Stelamae Sumalinog. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}