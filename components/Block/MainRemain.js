import React from "react";
import Image from "next/image";
import Link from "next/link";
// import {nextId} from "react-id-generator";
import { setPrefix } from "react-id-generator";

// const banner = require("/banner.png");
// const block = require("/coverblock.jpg");
// const mono = require("/covermonogram.jpg");
// const round = require("/coverround.jpg");
// const script = require("/coverscript.jpg");
// const shiplap = require("/covershiplap.jpg");

setPrefix("test-");

function MainRemain() {
  const post = ["script", "block", "mono", "round", "shiplap"];

  return (
    <div className="group">
      <div className="text-center pb-12">
        <Image
          src={"/banner.png"}
          layout="intrinsic"
          alt="universe"
          width={1000}
          height={500}
        />
      </div>

      <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-3 gap-y-2 px-20  ">
        <a href={"/Font"} className="box-border">
          <Image
            src={"/coverscript.jpg"}
            alt="universe"
            width={450}
            height={350}
          />
          <p className=" text-center tracking-widest">
            SCRIPT FONT <br />
            WOODEN NAME SIGNS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>

        <a href={"/Font"} className="box-border">
          <Image
            src={"/coverblock.jpg"}
            alt="universe"
            width={450}
            height={350}
          />
          <p className=" text-center tracking-widest">
            BLOCK FONT <br />
            WOODEN NAME SIGNS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>
        <a href={`/simple/${post[2]}`} className="box-border">
          <Image
            src={"/coverblock.jpg"}
            alt="universe"
            width={450}
            height={350}
          />
          <p className=" text-center tracking-widest">
            WOODEN <br />
            MONOGRAMS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>
        <a href={`/wood/${post[3]}`} className="box-border">
          <Image
            src={"/coverround.jpg"}
            alt="universe"
            width={450}
            height={350}
          />
          <p className=" text-center tracking-widest">
            CLASSIC <br />
            ROUND NAME SIGNS <br />
            FROM <span className="text-xl">$ 67.30</span>
          </p>
        </a>
        <a href={`/wood/${post[4]}`} className="box-border">
          <Image
            src={"/covershiplap.jpg"}
            alt="universe"
            width={450}
            height={350}
          />
          <p className=" text-center tracking-widest">
            SHIPLAP <br />
            ROUND NAME SIGNS <br />
            FROM <span className="text-xl">$ 67.30</span>
          </p>
        </a>
      </div>
      <div className="pb-16 text-center pt-16 p-10">
        <p>
          The term &apos;Etsy&apos; is a trademark of Etsy, Inc. This
          application uses the Etsy API but is not endorsed or certified by
          Etsy, Inc.
        </p>
      </div>
    </div>
  );
}

export default MainRemain;
