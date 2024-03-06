import "../Css/rx.css";
import { Footer } from "./Footer";
export function GoToRx() {
  return (
    <div className="rxborder">
      <div id="externalpagebackground">
        <p className="externalpagedescription">
          Simulates sending a known pharmacy customer to a page in the retailer’s app explaining a new app feature that
          saves time and money at the pharmacy.
        </p>
        <br></br>
        <a className="externalpagedescriptionlink" href="/">
          Click here to go back to home page.
        </a>
        <br></br>
        <br></br>
      </div>

      <div className="rxcontainer">
        <div className="mmnavbar">
          <hr></hr>
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
        <nav className="navbar navbar-rx navbar-expand-lg navbar-light">
          <div className="navbarimage"></div>
          &nbsp; &nbsp;
          {/* <li className="navbar-item">FAQ</li>
          <li className="navbar-item">|</li>
          <li className="navbar-item">Call us!</li> */}
        </nav>
        <div className="rxcontainer">
          {/* <div className="pharmacist">
            <p className="pharmacytext">
              <h1>We hear you. Ordering prescriptions can be a real hassle. </h1>{" "}
              <p className="refillingthem">
                And, re-filling them in-store, or over the phone, is hard too. Our new MMRewards RxLink feature makes
                everything pharmacy fast and easy.
              </p>
              <p className="refillingthem">Now you can use the MMRewards app to: </p>
              <ul className="allrxitems">
                <li>Place orders for prescriptions (for pickup or delivery)</li>
                <li>Receive notifications when prescriptions are filled</li>
                <li>Keep track of all your prescriptions and re-fills</li>
                <li>Upload and update insurance info </li>
                <li>Safely and securely see all your prescription info in one place:</li>
                <li>Medication guides</li>
                <li>Interaction warnings</li>
                <li>Even set reminders to take pills</li>
              </ul>
              <h3>And, enjoy 2X MMRewards on all prescriptions! Activate your secure MMRewards RxLink now!</h3>
            </p>
          </div> */}
        </div>
        {/* <div className="bodyimage"></div> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
