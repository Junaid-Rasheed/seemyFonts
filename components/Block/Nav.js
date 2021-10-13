import React from "react";
import Image from "next/image";
import MainName from "./MainName";
// import GreeneryBanner from '../assest'
import { HeartIcon } from "@heroicons/react/solid";

const GreenBanner = require("../../Assets/greenbanner.png");
function Nav() {
  return (
    <div>
      <nav className="tracking-widest h-13 bg-bilu opacity-75 font-medium">
        <ul className="flex justify-center p-2 ">
          <HeartIcon className="h-7 justify-center pb-1" />
          <li className="mr-10 hover:underline text-white">
            <a href="#">FAQ</a>
          </li>
          <li className="mr-6 hover:underline">
            <a className=" " href="#">
              CONTACT US
            </a>
          </li>
        </ul>
        <Image
          src={GreenBanner}
          layout="responsive"
          alt="universe"
          width={1500}
          height={100}
        />
      </nav>
      <MainName />
    </div>
  );
}

export default Nav;
