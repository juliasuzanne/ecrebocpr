import "../Css/appstoremimic.css";
import { NavbarPulse } from "./NavbarPulse";
export function AppStoreMimic() {
  return (
    <div className="appstoreborder">
      <div id="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Existing loyalty club members who have yet to download the retailer’s loyalty app are sent directly to the
            retailer’s App Store page where they can quickly install the retailer’s loyalty app.{" "}
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
          <div className="contentcontainer">
            <img
              className="appstorebutton"
              src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709347602/mmlogoforappstore_wce85p.png"
            />

            <div className="appdescriptiontext">
              <h5 className="appstoretitle">
                Modern Markets <button className="ratingbutton"> 4+ </button>
              </h5>

              <p className="appstorelink">Modern Markets Services, Inc.</p>
              <p className="ranking">
                #121 in Shopping
                <div className="rating">
                  <div className="inline-list__item">
                    <img
                      className="starrating"
                      src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709134264/Screen_Shot_2024-02-28_at_10.30.56_AM_yzm8lu.png"
                    />
                  </div>
                  <p className="inline-list__item">4.8 • 3.3K Ratings</p>
                </div>
              </p>

              <p className="free"> Free</p>
            </div>
          </div>
          <br></br>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
