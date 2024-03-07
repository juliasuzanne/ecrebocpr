import "../Css/appstoremimic.css";
import { Footer } from "./Footer";
import { MMNavbar } from "./MMNavbar";

export function AppStoreMimic() {
  return (
    <div id="appstorecontainer">
      <br></br>
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

        <div className="container contentcontainer">
          <div className="row">
            <div className="col">
              <img
                className="appstorebutton"
                src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709701300/mmlogobuttonwhite_pt1vad.png"
              />
            </div>
            <div className="col">
              <div className="appdescriptiontext">
                <h5 className="appstoretitle" id="mmtitle">
                  Modern Markets <button className="ratingbutton"> 4+ </button>
                </h5>

                <p className="appstorelink">Modern Markets Services, Inc.</p>
                <p className="ranking">#121 in Shopping</p>
                {/* <div className="rating"> */}
                {/* <div className="inline-list__item"> */}
                <img
                  className="starrating"
                  src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709688241/Screen_Shot_2024-03-05_at_8.23.16_PM_ocyssm.png"
                />
                {/* </div> */}

                <p className="free">Free</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="appstoredescription">
          Modern Markets all-in-one MMRewards app makes shopping easier and more rewarding! Save with weekly deals and
          coupons. Earn and redeem valuable MMRewards points. Plan meals. Create shopping lists. Schedule delivery or
          in-store pickup. Refill prescriptions. Join today to earn 1,000 bonus MMRewards Points. That’s $10 in savings!
        </div>

        <hr></hr>
        <div>
          <h5 className="appstoretitle" id="mmtitle">
            Screenshots
          </h5>
          <div className="screenshotcontainer">
            <img
              className="screenshots"
              src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709694388/phone_ovetmu.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
