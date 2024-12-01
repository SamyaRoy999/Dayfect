"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import menu from "@/app/utils/menu.js";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(menu, pathname);

  return (
    <div className="lg:w-2/12 side-bar h-[90vh] lg:m-7 rounded-lg ">
      <div className=" flex flex-col items-center gap-2 my-7">
        <Image
          width={40}
          height={40}
          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.postimg.cc/J47H5gDM/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
          alt="Bordered avatar"
        />
        <h3 className="font-bold ">Najrin lipi</h3>

        <ul className="w-full lg:mt-12 ">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`lg:w-full ${
                pathname === item.link
                  ? "sideBar-menu  py-2 border-r-4 border-teal-800"
                  : ""
              }`}
            >
              <Link
                href={item.link}
                className="flex items-center ml-5 py-2  gap-3"
              >
                <div className="font-bold text-xl">
                  <item.icon />
                </div>
                <span className="text-sm">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
