import React, { useState } from "react";
import Crousal from "./Crousal";

function AfterColor({ setSize }) {
  // const [size, setSize] = useState("");
  const [diagram, setDiagram] = useState("");
  return (
    <div className="  text-center  mt-20 pb-12 ">
      {/* <p className="disclamer-text"> */}
      <p className="px-20 italic  xl:pt-1 lg:pt-1 md:pt-6 sm:pt-12">
        Disclaimer: Please note the design of your name may vary from the
        preview shown depending on the font chosen. The lines may be thickened
        or letters attached to each other differently than what is shown in the
        preview in order to increase the stability of the design
      </p>
      <p className="font-bold tracking-widest text-2xl pt-8">
        3. SELECT YOUR FONT
      </p>
      <p className="p-2">Use the slider to preview the size of your name.</p>
      <input
        className="slider"
        type="range"
        id="vol"
        name="vol"
        min="24"
        max="40"
        onChange={(e) => setSize(e.target.value)}
      />
      <div>
        <p className=" tracking-widest text-xl">Background Image Options:</p>
      </div>
      <span>{/* <Crousal /> */}</span>
    </div>
  );
}

export default AfterColor;
