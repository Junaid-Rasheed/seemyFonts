import React, { useState } from "react";
import Image from "next/image";
import "reactjs-popup/dist/index.css";
// import Popup from "reactjs-popup";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const truck = require("../../public/assest/truck.png");

function LastPart({ color, font }) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <div className="last-text grid sm:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-5 gap-y-2 px-12  mx-20">
        <span className="flex-row mt-5 ml-48 ">
          <Image src={truck} width={90} height={90} alt="newimage" />
        </span>
        <span className="text-left  ">
          <p className="font-bold tracking-widest text-2xl pt-4  ">
            PROCESSING TIME
          </p>
          <br />
          <p>
            <input type="radio" checked="checked" /> &nbsp; Processing times
            vary, please &nbsp;
            <a
              href="https://www.adorenstudio.com/pages/turnaround-times?_pos=1&_sid=445dd1c4a&_ss=r"
              style={{ color: "blue", cursor: "pointer" }}
            >
              click here
            </a>{" "}
            for our current turnaround times
          </p>
        </span>
      </div>
      <br />
      <div>
        <p className="font-bold tracking-widest text-2xl pt-4  ">
          4. SELECT YOUR SIZE
        </p>
        <p className="mx-20 text-xl">
          Select a size to complete checkout on Etsy.com. For size guidance
          please refer to font preview images above. Size varies based on your
          font and the length of your word or phrase. Please note, the prices
          below are pre-discount. Any discounts applied will appear when you
          have added the item to your Etsy cart.
        </p>
      </div>
      <br />

      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">12 Inches</h1>

        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($54.94)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>

      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">18 Inches</h1>
        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($59.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>
      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">24 Inches</h1>

        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($79.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>
      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">30 Inches</h1>
        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($109.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>
      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">36 Inches</h1>

        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($119.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>
      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">42 Inches</h1>

        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($128.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>
      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">48 Inches</h1>

        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($248.97)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
      </div>

      <div className="rate-text mx-20 flex justify-between px-6">
        <h1 className="font-bold">54 Inches</h1>
        <div>
          <button onClick={open} className=" btn btn-info">
            Select ($304.99)
          </button>
          <Dialog isOpen={showDialog} onDismiss={close}>
            <button className="close-button" onClick={close}>
              <span aria-hidden>×</span>
            </button>
            <div>
              <h2>ALMOST THERE..</h2>
              <p>
                Here are the details you&apos;ll need to purchase your name sign
                on Etsy:
              </p>
              <br />
              <h1>
                Step One:
                <a
                  style={{ color: "blue" }}
                  href="https://www.etsy.com/listing/755026573/nursery-wall-letters-farmhouse-nursery"
                >
                  {" "}
                  Go to Etsy Listing
                </a>
              </h1>
              <br />
              <p>
                Select width:<h1 className="text-xl"> 54 Inches</h1>
              </p>
              <br />
              <h3>
                Select Font : <h1 className="text-xl"> {font}</h1>
              </h3>
              <br />

              <p>
                Select Color:<h1 className="text-xl"> {color}</h1>
              </p>
            </div>
          </Dialog>
        </div>
        {/* <button className=" btn btn-info">Select ($34.99)</button> */}
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

export default LastPart;
