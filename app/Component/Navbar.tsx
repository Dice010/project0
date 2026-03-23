"use client";

import { useState } from "react";
import Link from "next/link";

export const nav = [
  { id:"Home", href: "/", label: "Trang chủ" },
  { id:"Team", href: "/Component/Memberspage", label: "Về chúng tôi" },
  { id:"Collect", href: "/Component/Bookspage", label: "Bộ sưu tập" },
  { id: "Project", href: "/Component/Aboutpage", label: "Về dự án"}
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-10 z-50 px-4 sticky top-0 w-full flex items-center justify-between bg-white shadow-md">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-[#101828]">
        <Link href="/">ComicVerse</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex h-full items-center">
        {nav.map((item) => (
          <li key={item.href} className="h-full">
            <Link
              href={item.href}
              className="relative flex items-center h-full px-4 text-[#4A5565] hover:text-[#101828] transition-colors duration-300 group"
            >
              <span className="absolute inset-0 bg-linear-to-t from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="lg:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-10 left-0 w-full bg-white shadow-md transition-all duration-300 lg:hidden ${
          open ? "max-h-60" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-3 text-[#4A5565] hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}