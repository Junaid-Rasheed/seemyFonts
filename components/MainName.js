import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = require("../assest/logo@2x.png");
function MainName() {
  return (
    <div className="text-center pt-12 pb-7">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src={Logo}
          layout="intrinsic"
          alt="universe"
          width={250}
          height={110}
        />
      </Link>
    </div>
  );
}

export default MainName;
