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
