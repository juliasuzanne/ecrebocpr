import axios from "axios";
import { useState } from "react";

export function EmailForm() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://ecrebocpremail.fly.dev/contact_form", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <div>
        <div>
          <h3>Get In Touch</h3>
        </div>
      </div>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="container">
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
        </div>
        <div>
          <button className="submitbutton btn btn-secondary mt-3 submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
