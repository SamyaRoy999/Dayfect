import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="lg:w-1/6 side-bar h-[90vh] lg:m-7 rounded-lg ">
      <div className=" flex justify-center flex-col items-center gap-2 my-7">
        {/* <div className="text-center"> */}
        <Image
          width={40}
          height={40}
          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.postimg.cc/J47H5gDM/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
          alt="Bordered avatar"
        />
        <h3>Najrin lipi</h3>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
