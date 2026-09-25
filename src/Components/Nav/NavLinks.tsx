'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();

  const navRoutes = [
    { name: 'Workouts', path: '/' },
    { name: 'My Plan', path: '/my-plan' },
  ];

  const getLinkClasses = (path: string) => {
    return pathname === path
      ? "bg-[#C2F800]/20 text-[#C2F800] px-4 py-2 rounded-full shadow-lg"
      : "bg-black text-white hover:bg-base-200 px-4 py-2 rounded-full transition-all";
  };

  return (
    <>
      {navRoutes.map(route => (
        <li key={route.path}>
          <Link href={route.path} className={getLinkClasses(route.path)}>
            {route.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;