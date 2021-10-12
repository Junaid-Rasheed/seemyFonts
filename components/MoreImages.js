import React, { useState } from "react";
import Image from "next/image";
import DemoText from "./DemoText";
import LastPart from "./LastPart";
function MoreImages({ image, firstName, setName, color, colorCode, size }) {
  const [font, setFontName] = useState("betterPhoenix");

  // console.log("color", color);
  console.log("size", size);
  return (
    <div className="">
      {/* <div class="flex  max-h-full">
            {image &&
              [...Array(10)].map((it, idx) => (
                <Image key={idx} src={image} width={300} height={220} />
              ))}
          </div> */}
      {/* <div class="flex flex-col max-w-6xl"> */}

      <div className=" grid sm:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-4 px-20  ">
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              src={image}
              alt="imagewe"
              width={350}
              height={220}
              onClick={() => setFontName("CANDLE SCRIPT")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "candleScript",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>CANDLE SCRIPT</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("BETTER PHOENIX")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "betterPhoenix",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>BETTER PHOENIX</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              src={image}
              alt="imagewe"
              width={350}
              height={220}
              onClick={() => setFontName("EMBASSY")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "embassy",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>EMBASSY</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("HELLO")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "Hello",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>HELLO</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("HUGS")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "Hugs",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>HUGS</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("SWEET HIPSTER")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "sweetHipster",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>SWEET HIPSTER</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("TALE OF HAWK")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "taleOfHawk",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>TALE OF HAWK</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              src={image}
              alt="imagewe"
              width={350}
              height={220}
              onClick={() => setFontName("WATERMELON")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "waterMelon",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>WATERMELON</h3>
        </span>{" "}
        <span className="example2 MIcontainer">
          {" "}
          {image && (
            <Image
              alt="imagewe"
              src={image}
              width={350}
              height={220}
              onClick={() => setFontName("DEMO")}
            />
          )}
          <div
            className="centered text-5xl"
            style={{
              color: colorCode,
              fontSize: size + "px",
              fontFamily: "Demo",
            }}
          >
            {firstName}
          </div>
          <br />
          <h3>DEMO</h3>
        </span>{" "}
      </div>
      <DemoText
        color={color}
        firstName={firstName}
        colorCode={colorCode}
        font={font}
      />
      <br />
      <LastPart color={color} font={font} />
    </div>
  );
}

export default MoreImages;
