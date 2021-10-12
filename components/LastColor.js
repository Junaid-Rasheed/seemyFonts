import React from "react";

function LastColor({ setColor, setColorCode, setPrice }) {
  const handleColors = (clr, cod, pr) => {
    setColor(clr);
    setColorCode(cod);
    setPrice(pr);
  };

  return (
    <div className="space-x-4 pt-7 px-1 ">
      <button
        style={{
          backgroundColor: "#dee2e3",
          width: "23px",
          height: "23px",
        }}
        onClick={() => handleColors("Painted Silver", "#dee2e3", "$ 29.99")}
      ></button>
      <button
        style={{
          backgroundColor: "#c2a973",
          width: "23px",
          height: "23px",
        }}
        onClick={() => handleColors("Painted Gold", "#c2a973", "$ 29.99")}
      ></button>
      <button
        style={{
          backgroundColor: "#c08f80",
          width: "23px",
          height: "23px",
        }}
        onClick={() => handleColors("Painted Rose Gold", "#c08f80", "$ 29.99")}
      ></button>
      <button
        style={{
          backgroundColor: "#b0b2b2",
          width: "23px",
          height: "23px",
        }}
        onClick={() =>
          handleColors("Painted Silver Glitter", "#b0b2b2", " $ 34.99")
        }
      ></button>
      <button
        style={{
          backgroundColor: "#a2977e",
          width: "23px",
          height: "23px",
        }}
        onClick={() =>
          handleColors("Painted Gold Glitter", "#a2977e", " $ 34.99")
        }
      ></button>
      <button
        style={{
          backgroundColor: "#9a827b",
          width: "23px",
          height: "23px",
        }}
        onClick={() =>
          handleColors("Painted Rose Gold Glitter", "#9a827b", " $ 34.99")
        }
      ></button>
    </div>
  );
}

export default LastColor;
