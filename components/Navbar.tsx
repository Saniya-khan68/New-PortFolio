"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <nav
      className="w-full bg-black text-white sticky top-0 z-50"
      style={{ fontFamily: "Great Vibes, cursive", fontSize: "1.15rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <span className="text-3xl text-teal-400 select-none">
                Saniya Khan
              </span>
            </Link>
          </div>


          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "text-xl px-3 py-2 rounded-full transition " +
                    (active
                      ? "bg-teal-700 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800")
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative z-60 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-6 bg-current transform transition duration-300 ${menuOpen ? "rotate-45 -translate-y-1" : "-translate-y-2"
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-6 bg-current transform transition duration-300 ${menuOpen ? "opacity-0" : "translate-y-0"
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-6 bg-current transform transition duration-300 ${menuOpen ? "-rotate-45 translate-y-1" : "translate-y-2"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>


      <div className="w-full h-[1px] bg-gray-900" />


      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out origin-top ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-black/95">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  "block text-xl px-4 py-2 rounded-md transition " +
                  (active
                    ? "bg-teal-700 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800")
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
