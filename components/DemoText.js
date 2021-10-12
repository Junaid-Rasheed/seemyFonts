import React from "react";

function DemoText({ color, firstName, colorCode, font }) {
  // console.log("colorcode", colorCode);

  return (
    <div className="demo-text mx-20 text-left py-6">
      <div className="text-xl px-6 py-4">
        <h1 style={{ color: colorCode }}>{firstName}</h1>
        <h3>Fonts: {font}</h3>
        <h3>Color: {color}</h3>
      </div>
      <p className="px-4">
        Ordering Tips: All names are cut with the capitalization you type in the
        text field, please be sure to type the name with the exact
        capitalization (or lowercase) that you desire. Letters such as
        &quot;j&quot; and &quot;i&quot; contain dots that are not naturally
        connected to the letters when previewed in our font previewer. However
        for ease of hanging we will connect the dot to the base of the letter
        unless you specifically tell us otherwise. You may leave us any order
        notes after you add the item to your shopping cart. If you would like to
        see a formal proof please also leave us a note requesting that.
      </p>
    </div>
  );
}

export default DemoText;
