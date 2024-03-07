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
          <h1>Introducing MMRewards RxLink</h1>
          <p>
            We hear you. Ordering prescriptions can be a real hassle. And, re-filling them in-store, or over the phone,
            is hard too. Our new MMRewards RxLink feature makes everything pharmacy fast and easy. Now you can use the
            MMRewards app to:
          </p>

          <ul>
            <li>Place orders for prescriptions (for pickup or delivery)</li>
            <li> Receive notifications when prescriptions are filled</li>
            <li>Keep track of all your prescriptions and refills</li>
            <li> Upload and update insurance info</li>
            <li>Safely and securely see all your prescription info in one place:</li>
            <ul>
              <li>Dosages</li>
              <li>Medication guidelines</li>
              <li> Interaction warnings</li>
            </ul>
            <li> Even set reminders to take pills</li>
            <li> And, enjoy 2X MMRewards RxLink now!</li>
          </ul>
          <button>Activate Now</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
