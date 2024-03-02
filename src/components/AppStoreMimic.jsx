import "../Css/appstoremimic.css";
import { Footer } from "./Footer";
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
              src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709349812/mmlogonewcolorapp_a4zd6s.png"
            />
            <div className="container.fluid">
              <div className="appdescriptiontext">
                <div className="row">
                  <h5 className="appstoretitle">
                    Modern Markets <button className="ratingbutton"> 4+ </button>
                  </h5>
                </div>
                <div className="row">
                  <p className="col-sm-0 appstorelink">Modern Markets Services, Inc.</p>
                </div>
                <div className="row">
                  <p className="ranking">#121 in Shopping</p>
                </div>
                <div className="row">
                  <div className="rating col-sm-12">
                    <div className="col-lg-12 inline-list__item">
                      <img
                        className="starrating"
                        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709134264/Screen_Shot_2024-02-28_at_10.30.56_AM_yzm8lu.png"
                      />
                    </div>
                    {/* <p className="col-sm-0 inline-list__item">4.8 • 3.3K Ratings</p> */}
                  </div>
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
