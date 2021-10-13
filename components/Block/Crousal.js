import React, { useState } from "react";
import Image from "next/image";

import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@material-ui/core";
import MoreImages from "./MoreImages";

// const Box = require("/boxwoodweddingwall.jpg");

// const Crib = require("/backgroundcrib.jpg");
// const Table = require("/diningtable.jpg");
// const Bench = require("/benchentry.jpg");
// const Bed = require("/bedfullsize.jpg");
// const Sofa = require("/sofa.jpg");

function Crousal({ firstName, color, colorCode, size }) {
  const [name, setName] = useState(" ");
  const [image, setImage] = useState("/diningtable.jpg");

  const handleClick = (img, title) => {
    setName(title);
    setImage(img);
  };

  return (
    <div className="px-12">
      <Carousel className="cursor-pointer">
        <Image
          alt="image"
          src={"/boxwoodweddingwall.jpg"}
          onClick={() => handleClick(Box, "'64' Painted Blush")}
          width={800}
          height={300}
        />
        <Image
          src={"/diningtable.jpg"}
          alt="image"
          onClick={() => handleClick(Table, "64' DINNING TABLE")}
          width={800}
          height={300}
        />
        <Image
          src={"/backgroundcrib.jpg"}
          alt="image"
          onClick={() => handleClick(Crib, " 53' CRIB ")}
          width={800}
          height={300}
        />
        <Image
          src={"/benchentry.jpg"}
          onClick={() => handleClick(Bench, " 68' ENTERWAY BENCH ")}
          width={800}
          alt="image"
          height={300}
        />
        <Image
          src={"/sofa.jpg"}
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
