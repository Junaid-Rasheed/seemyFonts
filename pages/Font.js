import React, { useState } from "react";
import CenterColor from "../components/Block/CenterColor";
import Image from "next/image";
import AfterColor from "../components/Block/AfterColor";
import Crousal from "../components/Block/Crousal";
import LastColor from "../components/Block/LastColor";
const WoodPattern = require("../public/Assets/woodpattern.jpg");

export default function Font() {
  const [firstName, setFirstName] = useState("Sample");
  const [color, setColor] = useState("Navy Blue");
  const [colorCode, setColorCode] = useState("#000080");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("$29.99");

  const handleColors = (clr, pr) => {
    setColor(clr);
    setPrice(pr);
  };
  return (
    <div>
      {/* rfcs s {pageNo} */}

      <div className="text-center font-serif ">
        <text className="font-bold tracking-widest text-2xl">
          1. ENTER YOUR TEXT
        </text>
        <br />
        <input
          className="shadow appearance-none border rounded w-96  py-2 mt-4 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Sample"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <p className="font-bold tracking-widest text-2xl">
          2. UNPAINTED OR PAINTED?
        </p>
        <br />
        <p>
          <button className="tracking-widest  text-center">{color}</button>{" "}
          &nbsp;
          <span className="badge"> {price}</span>
        </p>

        {/* Three columns */}
        <div className="grid xl:grid-cols-3 md:grid-cols-1  sm:grid-cols-1 px-12 h-24 mt-16 pb-16 gap-px my-48 py-12">
          <p className="border-solid border border-light-blue-200">
            <p className="text-xl">Unpainted - Baltic Birch Wood Grain</p>
            <br />
            <Image
              className="cursor-pointer"
              src={WoodPattern}
              onClick={() =>
                handleColors("Unpainted - Baltic Birch Wood Grain", "No-Extra")
              }
              alt="universe"
              width={23}
              height={23}
            />
          </p>
          <p className="border-solid border border-light-blue-500  ">
            <CenterColor
              setColor={setColor}
              setColorCode={setColorCode}
              setPrice={setPrice}
            />
          </p>
          <p className="border-solid border border-light-blue-200 sm:border-light-blue-200">
            <p className="text-xl">Metallic & Glitter Collection</p>

            <LastColor
              setColor={setColor}
              setColorCode={setColorCode}
              setPrice={setPrice}
            />
            {/* <button
              style={{
                backgroundColor: "#ea7d9d",
                width: "23px",
                height: "23px",
              }}
              onClick={() => handleColors("Painted Coral", "#ea7d9d")}
            ></button> */}
          </p>{" "}
        </div>
        <br />

        <AfterColor setSize={setSize} />
        <span>
          <Crousal
            firstName={firstName}
            color={color}
            colorCode={colorCode}
            size={size}
          />
        </span>
        {/* {console.log("size at id", size)} */}
      </div>
    </div>
  );
}
