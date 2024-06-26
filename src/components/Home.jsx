import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { HomePageDescription } from "./HomePageDescription";
import { Footer } from "./Footer";
import { EmailBuddy } from "./EmailBuddy";
import { ContactForm } from "./ContactForm";

export function Home() {
  return (
    <div className="bodyborder">
      <div className="description container.fluid" id="circlebackground">
        <div className="row">
          <div className="description col-sm-12 col-md-12 col-lg-6">
            <HomePageDescription></HomePageDescription>
          </div>
          <div className="receiptanim col-sm-12 col-md-12  col-lg-6" id="ecrebocpr">
            <RiveEvents></RiveEvents>
          </div>
        </div>
      </div>
      <div className="email container.fluid">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {/* <EmailForm></EmailForm> */}
            <ContactForm></ContactForm>
          </div>
          <div className="col-sm-12 col-md-4">
            <EmailBuddy></EmailBuddy>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
