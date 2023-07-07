import React from "react";
import Navbar from "./components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EmailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const seller = location.state.name;

  const sendEmail = () => {
    const mailTo = location.state.email;
    const mailFrom = "adsak0405@gmail.com";
    const message = document.getElementById("message").value;
    const senderName = document.getElementById("nameOfSender").value;
    const phone = document.getElementById("phone").value;

    if (message === "" || senderName === "" || phone === "") {
      alert("All fields are mandatory!");
    } else {
      const config = {
        SecureToken: "f2d7bb8a-94cf-40b2-b1b1-27054eb21bd9",
        To: mailTo,
        From: mailFrom,
        Subject: `${senderName}(Contact no: ${phone}) tried to contact you.`,
        Body: message,
      };

      if (window.Email) {
        window.Email.send(config)
          .then((response) => {
            if (response === "OK") {
              alert("Email has been sent successfully!");
            } else {
              alert(
                "Failure occured! Please try contacting the person by phone"
              );
            }
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            alert("Email could not be sent! Please retry later.");
          });
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="custom-card-margin">
        <div className="my-3">
          <h1 className="text-center">
            We'll contact {seller} on behalf of you!
          </h1>
        </div>
        <div className="container box-shadow-card">
          <div className="col-md-6 col-10 mx-auto d-flex justify-content-center flex-column">
            <div className="my-4">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="nameOfSender"
                placeholder="Your full name"
              />
            </div>
            <div className="my-4">
              <label htmlFor="" className="form-label">
                Phone number
              </label>
              <input
                className="form-control"
                type="text"
                id="phone"
                placeholder="Your contact number(10 digits)"
              />
            </div>
            <div className="my-4">
              <label htmlFor="descp" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Body of mail."
              ></textarea>
            </div>

            <button
              className="btn-get-started mb-4"
              onClick={() => {
                sendEmail();
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailPage;
