"use client";

import { NavLinks } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center ml-5 lg:ml-20 mt-4 mr-5 lg:mr-20 p-5">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={74} height={29} />
      </Link>

      <button
        className="block lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Image src="menu.svg" alt="menu" width={30} height={30} />
      </button>

      {isOpen && (
        <div className="cursor-pointer transition-all hover:font-bold hover:text-violet-500 rounded-2xl w-8/12 h-64 fixed inset-0 bg-violet-300 white shadow-lg mt-32 flex flex-col justify-center items-center mx-auto">
          <ul>
            {NavLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="p-3 block text-base text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden lg:flex lg:h-full lg:gap-12">
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base text-black justify-items-center cursor-pointer transition-all hover:font-bold hover:text-violet-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
