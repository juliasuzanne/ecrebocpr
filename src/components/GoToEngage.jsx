import "../Css/engage.css";
import { Footer } from "./Footer";
import React, { useState } from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() + 10;
  return `${month}/${date}/${year}`;
}

export function GoToEngage() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <div className="engageborder">
        <div id="engagecontainer">
          <div id="externalpagebackground">
            <p className="externalpagedescription">
              Simulates sending a declining/lapsed loyalty app user to a page in the retailer’s app loaded with
              personalized offers to drive home the app’s money-saving benefits.
            </p>
            <br></br>
            <a className="externalpagedescriptionlink" href="/">
              Click here to go back to home page.
            </a>
            <br></br>
            <br></br>
            <div className="mmnavbar">
              <hr></hr>
            </div>
          </div>
          <div className="mmnavbar">
            <img
              className="engagelogo"
              src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709701300/mmlogowhite_ik707g.png"
            ></img>
            <div className="inputsearch">
              <input className="fakesearch"></input>
            </div>
          </div>
          <div className="itemcontainer">
            <h1>Hi Suzy! Thank you for being an MMRewards Member.</h1>
            <p className="engagedescription">
              Below we’ve handpicked some amazing offers to help you save! Buy these items on an upcoming trip to (or
              online order from) Modern Markets and enjoy 2X MMRewards. Your personalized offers expire on {currentDate}
              .
            </p>
            <hr></hr>

            <div className="item">
              <div className="engageitemcontainer">
                <img
                  className="itemimage"
                  src="https://storage.googleapis.com/images-fol-prd-83dd8b8.fol.prd.v8.commerce.mi9cloud.com/product-images/zoom/4800126570.jpg"
                ></img>
                <p className="itemtitle">Best Foods Real Mayonnaise</p>
                <p className="itemtitle">48 Fl Oz</p>
                <p className="itemtitle"> MMRewards Price $9.29 </p>
                <p className="itemtitle" id="strikethrough">
                  {" "}
                  $10.99{" "}
                </p>
                <input className="checkbox" type="checkbox" />
              </div>
              <hr></hr>
            </div>

            <div className="item">
              <div className="engageitemcontainer">
                <img
                  className="itemimage"
                  src="https://images.albertsons-media.com/is/image/ABS/960021862-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available"
                ></img>
                <p className="itemtitle">Mandarins Clementine Prepacked Bag - 3 Lb</p>
                <p className="itemtitle"> MMRewards Price $4.99 </p>
                <p className="itemtitle" id="strikethrough">
                  {" "}
                  $5.99{" "}
                </p>
                <input className="checkbox" type="checkbox" />
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
