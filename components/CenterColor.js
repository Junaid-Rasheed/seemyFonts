import React, { useState } from "react";

function CenterColor({ setColor, setColorCode, setPrice }) {
  // const [colorCode, setColorCode] = useState("#fac6ae");

  const handleColors = (clr, cod, pr) => {
    setColor(clr);
    setColorCode(cod);
    setPrice(pr);
  };

  // TODO
  // const handleColor = (setColor) => {};
  // const handleClick = (img, title) => {
  //   setName(title);
  //   setImage(img);
  // };
  return (
    <>
      <h4 className="tracking-widest">Classic Colors Collection</h4>
      <div className="space-x-4 pt-7 px-3 ">
        <button
          className="centerColor"
          style={{
            backgroundColor: "#fac6ae",
          }}
          onClick={() => handleColors("Painted Peach", "#fac6ae", "$29.99")}
        ></button>
        <button
          className="tracking-widest"
          style={{
            backgroundColor: "#f8dad8",
          }}
          onClick={() => handleColors("Painted Blush", "#f8dad8", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#fac7cc",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Pink", "#fac7cc", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#eca9d4",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Bright Pink", "#eca9d4", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#ea7d9d",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Coral", "#ea7d9d", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "red",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Red", "#FF0000", "$ 29.99")}
          // onClick={() => setColor("Painted Red")}
        ></button>
        <button
          style={{
            backgroundColor: "#f9ad59",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Orange", "#f9ad59", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#f4de66",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Yellow", "#f4de66", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#69b55a",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Yellow Green", "#69b55a", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#278b4d",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Green", "#278b4d", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#c1e1d6",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Mint", "#c1e1d6", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#50c3b2",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Turquoise", "#50c3b2", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#00927b",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Teal", "#00927b", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#cbe9f4",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Light Blue", "#cbe9f4", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#154b87",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Blue", "#154b87", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#2c3764",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Navy", "#2c3764", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#c481b6",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Lilac", "#c481b6", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#ccb8d1",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Violet", "#ccb8d1", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#957ab1",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Purple", "#957ab1", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#bbc2c8",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Light Gray", "#bbc2c8", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#64686b",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Dark Gray", "#64686b", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#f2f3ee",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted White", "#f2f3ee", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#343436",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Black", "#343436", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#f9f2df",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Ivory", "#f9f2df", "$ 29.99")}
        ></button>

        <h4 className="tracking-widest">Boho Colors Collection</h4>
        <button
          style={{
            backgroundColor: "#784534",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Cognac", "#784534", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#b16c59",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Terra Cotta", "#b16c59", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#af664b",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Rust", "#f8dad8", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#e5b195",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Clay", "#e5b195", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#ba7f4b",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Mustard", "#ba7f4b", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#f7d394",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Marigold", "#f7d394", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#a88952",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Olive", "#a88952", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#323e37",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Hunter Green", "#323e37", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#8b8879",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Moss", "#8b8879", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#dee3db",
            width: "23px",
            height: "23px",
          }}
          onClick={() =>
            handleColors("Painted Silver Sage", "#dee3db", "$ 29.99")
          }
        ></button>
        <button
          style={{
            backgroundColor: "#e8dcc6",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Sand", "#e8dcc6", "$ 29.99")}
        ></button>
        <button
          style={{
            backgroundColor: "#fceadb",
            width: "23px",
            height: "23px",
          }}
          onClick={() => handleColors("Painted Apricot", "#fceadb", "$ 29.99")}
        ></button>
      </div>
    </>
  );
}

export default CenterColor;
