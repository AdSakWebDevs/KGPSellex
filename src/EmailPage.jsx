import React from "react";
import Navbar from "./components/Navbar";

function EmailPage() {
  //username: adsak0405@gmail.com
  //pwd: 9673CA84457DAD107CDCF7E9177C0E971B86

  //port:2525
  //server: smtp.elasticemail.com

  const sendEmail = () => {
    const mailTo = "adityamukherjee.dgp@gmail.com";
    const mailFrom = "adsak0405@gmail.com";
    const message = document.getElementById("message").value;
    const senderName = document.getElementById("nameOfSender").value;
    const phone = document.getElementById("phone").value;

    const config = {
      SecureToken: "f2d7bb8a-94cf-40b2-b1b1-27054eb21bd9",
      To: mailTo,
      From: mailFrom,
      Subject: `${senderName} tried to contact you.`,
      Body: message + `<br> Contact no: ${phone}`,
    };

    if (window.Email) {
      window.Email.send(config)
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Email could not be sent! Please retry later.");
        });
    }
  };
  return (
    <>
      <Navbar />
      <div className="my-3">
        <h1 className="text-center">We'll contact the seller on behalf of you!</h1>
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
    </>
  );
}

export default EmailPage;
