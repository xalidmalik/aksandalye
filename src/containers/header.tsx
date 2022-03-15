import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-100 text-white shadow-xl border-b-4 border-red-600">
      <div className="container flex justify-between items-center h-20">
        <Link href="/">
          <img src="/image/logo.png" className="h-12 cursor-pointer" />
        </Link>
        <div className="flex flex-col gap-0">
          <p className="text-gray-900 font-semibold text-xl">Hemen Ara</p>
          <a href="tel:05352303076" className="text-blue-500">
            Tel: (535) 230 30 76
          </a>
        </div>
      </div>
    </header>
  );
};
