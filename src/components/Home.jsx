import { EmailForm } from "./EmailForm";
import { RiveEvents } from "./RiveEvents";
import { HomePageDescription } from "./HomePageDescription";
import { EmailBuddy } from "./EmailBuddy";
export function Home() {
  return (
    <div>
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
          <div className="col-sm-12 col-md-8">
            <EmailForm></EmailForm>
          </div>
          <div className="col-sm-12 col-md-4">
            <EmailBuddy></EmailBuddy>
          </div>
        </div>
      </div>
    </div>
  );
}
