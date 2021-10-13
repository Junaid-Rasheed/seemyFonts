import React, { useState } from "react";
import Image from "next/image";

import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@material-ui/core";
import MoreImages from "./MoreImages";

const Box = require("../../Assets/crousal/boxwoodweddingwall.jpg");

const Crib = require("../../Assets/crousal/backgroundcrib.jpg");
const Table = require("../../Assets/crousal/diningtable.jpg");
const Bench = require("../../Assets/crousal/benchentry.jpg");
const Bed = require("../../Assets/crousal/bedfullsize.jpg");
const Sofa = require("../../Assets/crousal/sofa.jpg");

function Crousal({ firstName, color, colorCode, size }) {
  const [name, setName] = useState(" ");
  const [image, setImage] = useState(Table);

  const handleClick = (img, title) => {
    setName(title);
    setImage(img);
  };

  return (
    <div className="px-12">
      <Carousel className="cursor-pointer">
        <Image
          alt="image"
          src={Box}
          onClick={() => handleClick(Box, "'64' Painted Blush")}
          width={800}
          height={300}
        />
        <Image
          src={Table}
          alt="image"
          onClick={() => handleClick(Table, "64' DINNING TABLE")}
          width={800}
          height={300}
        />
        <Image
          src={Crib}
          alt="image"
          onClick={() => handleClick(Crib, " 53' CRIB ")}
          width={800}
          height={300}
        />
        <Image
          src={Bench}
          onClick={() => handleClick(Bench, " 68' ENTERWAY BENCH ")}
          width={800}
          alt="image"
          height={300}
        />
        <Image
          src={Sofa}
          alt="image"
          onClick={() => handleClick(Sofa, " 8' SOFA")}
          width={800}
          height={300}
        />
        {/* <Image src={Bed} width={900} height={450} /> */}
      </Carousel>
      <h1 className="tracking-widest p-2">{name}</h1>
      <br />

      <MoreImages
        image={image}
        firstName={firstName}
        setName={setName}
        color={color}
        colorCode={colorCode}
        size={size}
      />
    </div>
  );
}

export default Crousal;
