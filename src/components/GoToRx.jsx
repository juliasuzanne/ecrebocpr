import "../Css/rx.css";
import { MMNavbar } from "./MMNavbar";
import { Footer } from "./Footer";
export function GoToRx() {
  return (
    <div className="rxborder">
      <div id="externalpagebackground">
        <p className="externalpagedescription">
          Simulates sending a known pharmacy customer to a page in the retailer’s app explaining a new time and
          money-saving pharmacy feature.
        </p>
        <br></br>
        <a className="externalpagedescriptionlink" href="/">
          Return to home page
        </a>
        <br></br>
        <br></br>
      </div>

      <div className="rxcontainer">
        <MMNavbar></MMNavbar>
        <div className="rxcontentcontainer">
          <div className="rxheaderbackground">
            <br></br>
            <div className="rxheader">
              <h1 className="rxtitle">
                Introducing <br></br>
                <img
                  className="titlemmlogo"
                  src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710073797/mmlogorewards-03_q5v2lm.png"
                />{" "}
                <img
                  className="titlemmlogo"
                  src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710073797/mmlogorewards-02_xxmxql.png"
                />
              </h1>
              <p className="rxsubtitle">
                We hear you. Ordering prescriptions can be a real hassle. And, re-filling them in-store, or over the
                phone, is hard too. Our new{" "}
                <img
                  className="subtitlemmlogo"
                  src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709865627/mmfontdarkgreen_nnrqnd.png"
                />{" "}
                RxLink feature makes everything pharmacy fast and easy. Now you can use the{" "}
                <img
                  className="subtitlemmlogo"
                  src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709865627/mmfontdarkgreen_nnrqnd.png"
                />{" "}
                app to:
              </p>
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="container.fluid rxlist">
            <div className="row rxrow">
              <div className="col-sm-12 col-md-5 rxbackground"></div>
              <ul className="col-sm-12 col-md-7 rxmainlist">
                <div className="listbackground">
                  <div className="listtextonly">
                    <li>Place orders for prescriptions (for pickup or delivery)</li>
                    <li> Receive notifications when prescriptions are filled</li>
                    <li>Keep track of all your prescriptions and refills</li>
                    <li> Upload and update insurance info</li>
                    <li>Safely and securely see all your prescription info in one place:</li>
                    <ul className="rxsublist">
                      <li>Dosages</li>
                      <li>Medication guidelines</li>
                      <li> Interaction warnings</li>
                    </ul>
                    <li> Even set reminders to take pills</li>
                    <li>
                      {" "}
                      And, enjoy 2X{" "}
                      <img
                        className="listmmlogo"
                        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1709865627/mmfontblack_omkbkg.png"
                      />{" "}
                      RxLink now!
                    </li>
                    <li className="activatebutton">
                      <button className="rxactivate">Activate Now</button>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
