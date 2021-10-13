import React from "react";
import Image from "next/image";
import Link from "next/link";
// import {nextId} from "react-id-generator";
import { setPrefix } from "react-id-generator";

const banner = require("../../Assets/banner.png");
const block = require("../../Assets/coverblock.jpg");
const mono = require("../../Assets/covermonogram.jpg");
const round = require("../../Assets/coverround.jpg");
const script = require("../../Assets/coverscript.jpg");
const shiplap = require("../../Assets/covershiplap.jpg");

setPrefix("test-");

function MainRemain() {
  const post = ["script", "block", "mono", "round", "shiplap"];

  // const post = [
  //   {
  //     title: 'mono',
  //     id: 1
  //   },
  //   {
  //     title: 'block',
  //     id: 2
  //   },
  //   {
  //     title: 'round',
  //     id: 3
  //   },
  //   {
  //     title: 'script',
  //     id: 4
  //   },
  //   {
  //     title: 'shiplap',
  //     id: 5
  //   }
  // ]
  // const posts = [
  //   {
  //     id: 1,
  //     title: "script",
  //     text: " SCRIPT FONT WOODEN NAME SIGNS FROM $ 29.74",
  //     pic: { script },
  //   },
  //   {
  //     id: 2,
  //     title: "block",
  //     text: "   BLOCK FONT WOODEN NAME SIGNS FROM $ 29.74",
  //     pic: { block },
  //   },
  //   {
  //     id: 3,
  //     title: "wooden",
  //     text: "   WOODEN MONOGRAMS  FROM $ 29.74",
  //     pic: { mono },
  //   },
  //   {
  //     id: 4,
  //     title: "classic",
  //     text: "CLASSIC ROUND NAME SIGNS FROM $ 67.30",
  //     pic: { round },
  //   },
  //   {
  //     id: 5,
  //     title: "shiplap",
  //     text: "  SHIPLAP ROUND NAME SIGNS FROM $ 67.30",
  //     pic: { shiplap },
  //   },
  // ];
  // htmlId = nextId('wooden-');
  return (
    <div className="group">
      <div className="text-center pb-12">
        <Image
          src={banner}
          layout="intrinsic"
          alt="universe"
          width={1000}
          height={500}
        />
      </div>

      <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-3 gap-y-2 px-20  ">
        <a href={"/Font"} className="box-border">
          <Image src={script} alt="universe" width={450} height={350} />
          <p className=" text-center tracking-widest">
            SCRIPT FONT <br />
            WOODEN NAME SIGNS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>

        <a href={"/Font"} className="box-border">
          <Image src={block} alt="universe" width={450} height={350} />
          <p className=" text-center tracking-widest">
            BLOCK FONT <br />
            WOODEN NAME SIGNS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>
        <a href={`/simple/${post[2]}`} className="box-border">
          <Image src={mono} alt="universe" width={450} height={350} />
          <p className=" text-center tracking-widest">
            WOODEN <br />
            MONOGRAMS <br />
            FROM <span className="text-xl">$ 29.74</span>
          </p>
        </a>
        <a href={`/wood/${post[3]}`} className="box-border">
          <Image src={round} alt="universe" width={450} height={350} />
          <p className=" text-center tracking-widest">
            CLASSIC <br />
            ROUND NAME SIGNS <br />
            FROM <span className="text-xl">$ 67.30</span>
          </p>
        </a>
        <a href={`/wood/${post[4]}`} className="box-border">
          <Image src={shiplap} alt="universe" width={450} height={350} />
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
