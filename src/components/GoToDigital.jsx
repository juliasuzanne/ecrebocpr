import "../Css/appstoremimic.css";
import "../Css/acquire.css";
import "../Css/appstoremimic.css";
import { AppStoreMimic } from "./AppStoreMimic";

export function GoToDigital() {
  return (
    <div className="appstoreborder">
      <div id="appstorecontainer">
        <div id="externalpagebackground">
          <p className="externalpagedescription">
            Simulates sending existing loyalty club members who have not downloaded the app to the retailer’s App Store
            page to install the app.
          </p>
          <br></br>
          <a className="externalpagedescriptionlink" href="/">
            Return to home page
          </a>
          <br></br>
          <br></br>
          <AppStoreMimic></AppStoreMimic>
        </div>
      </div>
    </div>
  );
}
