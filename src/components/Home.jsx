import { Title } from "./Title";
import { RiveTest } from "./RiveTest";
import { LeafTest } from "./LeafTest";
import { LeafAnimation } from "./LeafAnimation";
import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { HomePageDescription } from "./HomePageDescription";
import { EmailBuddy } from "./EmailBuddy";
export function Home() {
  return (
    <div>
      {/* <br></br>
      <br></br>
      <br></br>

      <h2>True Transaction Based Marketing. Drive The Right Offer, In The Right Channel, At The Right Time.</h2>
      <span>True Transaction Based Marketing. Drive The Right Offer, In The Right Channel, At The Right Time.</span>
      <br></br>
      <p>Ecrebo empowers retail marketers to deliver truly personalised one to one marketing campaigns with ease.</p>
      <p>
        Turn your real-time PoS data into highly targeted and immediate offers or messages with our light-touch,
        SaaS-based solution.
      </p> */}
      <div className="description container.fluid">
        <div className="row">
          <div className="description col-sm-12 col-md-6">
            <HomePageDescription></HomePageDescription>
          </div>
          <div className="receiptanim col-sm-12 col-md-6">
            <RiveEvents></RiveEvents>
          </div>
        </div>
      </div>
      <div className="email container.fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <EmailBuddy></EmailBuddy>
          </div>
          <div className="col-sm-12 col-md-8">
            <EmailForm></EmailForm>
          </div>
        </div>
      </div>

      {/* <LeafTest></LeafTest>
      <br></br>
      <br></br>
      <LeafAnimation></LeafAnimation> */}
    </div>
  );
}
