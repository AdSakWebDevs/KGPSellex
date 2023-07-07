import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getStorage, ref as stgRef, getDownloadURL } from "firebase/storage";
import "./SellCards.css";

function SellCards(props) {
  const storage = getStorage();
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const fetchImage = (rollno) => {
    getDownloadURL(stgRef(storage, `images/${props.rollno}`)).then((url) => {
      setImageURL(url);
    }).catch(()=>{
        alert("No products available currently.")
    });
  };

  fetchImage();

  return (
    <>
      <div className="custom-card-margin">
        <div className="container box-shadow-card mb-4 ">
          <div className="row custom-flex">
            <div className="col-md-6 custom-flex ">
              <div className="d-flex justify-content-center m-2">
                {imageURL === "" ? (
                  <div className="full-width">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                  </div>
                ) : (
                  <img src={imageURL} className=" product-img my-4" alt="..." />
                )}
              </div>

              <div className="m-2">
                <h6>Seller</h6>
                <p key={props.seller}>{props.seller}</p>
                <h6>Roll Number</h6>
                <p key={props.rollno}>{props.rollno}</p>
                <h6>Hall</h6>
                <p key={props.hall}>{props.hall}</p>
                <h6>Email Address</h6>
                <p key={props.email}>{props.email}</p>
                <h6>Phone Number</h6>
                <p key={props.phno}>{props.phno}</p>
                <h6>Product Type</h6>
                <p key={props.pdtype}>{props.pdtype}</p>
                <h6>Product Description</h6>
                <p className="card-text" key={props.descp}>
                  {props.descp}
                </p>
                <h6>Selling Price(INR)</h6>
                <p key={props.price}>{props.price}</p>

                <div className="d-flex flex-row">
                  {props.status === "close" ? (
                    <NavLink to="" className="btn-get-started-danger mx-2 my-3">
                      <s>CLOSED</s>
                    </NavLink>
                  ) : (
                    <NavLink
                      to=""
                      className="btn-get-started-success mx-2 my-3"
                    >
                      OPEN
                    </NavLink>
                  )}
                  <button onClick={() => {navigate("/email", {state: {name: props.seller, email: props.email}})}} className="btn-get-started mx-2 my-3">CONTACT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCards;
