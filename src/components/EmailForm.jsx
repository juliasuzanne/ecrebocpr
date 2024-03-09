import axios from "axios";
import { useState } from "react";

export function EmailForm() {
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://ecrebocpremail.fly.dev/contact_form", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        setSuccessMessage(["E-mail sent successfully!"]);
        setSuccessMessageShow(false);
        setErrorShow(true);
        setErrors([]);
      })
      .catch((errors) => {
        console.log(errors.response);
        setSuccessMessage([]);
        setErrorShow(false);
        setSuccessMessageShow(true);
        setErrors(["Please fill out all fields"]);
      });
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="email-outsides">
              <h3>Get In Touch</h3>
            </div>
            <ul hidden={successMessageShow} className="success">
              {successMessage.map((successMessage) => (
                <li key={successMessage}>{successMessage}</li>
              ))}
            </ul>
            <ul hidden={errorShow} className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
          <div className="row">
            <h5>
              Learn more about how Ecrebo’s Clickable Paper Receipt solution supercharges your digital media. Let’s put
              your receipts to work!
            </h5>
          </div>
          <div className="row">
            <div>
              E-mail:
              <input name="email" className="form-control" type="email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              First Name:
              <input name="name" className="form-control" type="string" />
            </div>
            <div className="col-sm-6">
              Last Name:
              <input name="last_name" className="form-control" type="string" />
            </div>
          </div>
          <div className="row">
            <div>
              Message:
              <p>
                <textarea name="message" type="text" className="textarea"></textarea>
              </p>
              {/* <input name="message" className="textarea form-control" type="text" /> */}
            </div>
          </div>
          <div className="row">
            <button className="submitbutton btn btn-secondary mt-3 submit ">Submit</button>
          </div>
          <div className="row">
            <p className="disclaimer">
              Ecrebo will use the information in this form to contact you about a follow-up meeting to learn more about
              Ecrebo’s Clickable Paper Receipt solution.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
