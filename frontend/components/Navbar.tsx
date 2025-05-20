"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Developer Student Club Darmstadt
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-black">
              Events
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-black">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/events" className="block text-gray-700 hover:text-black">
            Events
          </Link>
          <Link href="/projects" className="block text-gray-700 hover:text-black">
            Projects
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-black">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
