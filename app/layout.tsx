import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import React from "react";
import Home from "./page";

export const metadata: Metadata = {
  title: "ShapeCraft3D",
  description:
    "ShapeCraft3D is a versatile design tool that empowers users to create and manipulate three-dimensional shapes with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-purple-200">{children}</body>
    </html>
  );
}
