import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosHome } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="lg:w-2/12 side-bar h-[90vh] lg:m-7 rounded-lg ">
      <div className=" flex justify-center flex-col items-center gap-2 my-7">
        <Image
          width={40}
          height={40}
          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.postimg.cc/J47H5gDM/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
          alt="Bordered avatar"
        />
        <h3 className="font-bold ">Najrin lipi</h3>

        <ul className="w-full">
          <li className="sideBar-menu lg:w-full py-2 ">
            <Link href="/" className="flex items-center justify-center gap-3">
              <div className="font-bold text-xl">
                <IoIosHome />
              </div>
              <span className="text-base">All Tasks</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
