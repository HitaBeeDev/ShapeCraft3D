import { NavLinks } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ml-5 lg:ml-20 mt-10 mr-5 lg:mr-20 p-5">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={74} height={29} />
      </Link>

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
