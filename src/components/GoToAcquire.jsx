import "../Css/appstoremimic.css";
import "../Css/acquire.css";

import { Footer } from "./Footer";

export function GoToAcquire() {
  return (
    <div className="appstoreborder">
      <div id="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending a potentially new loyalty club member to the retailer’s App Store page where they can
            install the app and join the loyalty program.
          </p>
          <br></br>
          <a className="externalpagedescriptionlink" href="/">
            Click here to go back to home page.
          </a>
          <br></br>
          <br></br>
          <hr></hr>
        </div>

        <div className="previewcontainer">
          {" "}
          <h5 className="appstoretitle">App Store </h5> &nbsp;
          <h5 className="appstorepreview"> Preview</h5>
        </div>
        <hr></hr>

        <div className="appstoreheadercontainer">
          <div className="bannercontainer">
            <p className="banner">This app is available on the App Store for iPhone and iPad.</p>
          </div>
          <div className="row">
            <div className="contentcontainer">
              <img
                className="appstorebutton"
                src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709701300/mmlogobuttonwhite_pt1vad.png"
              />
              <div className="appdescriptiontext">
                <h5 className="appstoretitle">
                  Modern Markets <button className="ratingbutton"> 4+ </button>
                </h5>
                <p className="col-sm-0 appstorelink">Modern Markets Services, Inc.</p>
                <p className="ranking">#121 in Shopping</p>
                <div className="rating col-sm-12">
                  <div className=" inline-list__item">
                    <img
                      className="starrating"
                      src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709688241/Screen_Shot_2024-03-05_at_8.23.16_PM_ocyssm.png"
                    />
                  </div>
                  {/* <p className=" inline-list__item">4.8 • 3.3K Ratings</p> */}
                </div>
                <p className="free"> Free</p>
              </div>
            </div>
          </div>
          <br></br>
          <hr></hr>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
