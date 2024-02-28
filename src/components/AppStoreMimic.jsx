import "../Css/appstoremimic.css";
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
        <div className="contentcontainer">
          <button className="appstorebutton"></button>
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
  );
}
