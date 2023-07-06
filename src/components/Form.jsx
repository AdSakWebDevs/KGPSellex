import React, { useState } from "react";
// import '/Form.css';
// import "..firebase/"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { getStorage, ref as stgRef, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMM56fnkSA1P5p4b6plQso_3001MpEEYI",
  authDomain: "kgpsellex.firebaseapp.com",
  projectId: "kgpsellex",
  storageBucket: "kgpsellex.appspot.com",
  messagingSenderId: "750261842834",
  appId: "1:750261842834:web:309fb0919f637e0932074b",
  measurementId: "G-ZTC4HQ2M0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Form() {
  const uploadImage = (array, rollno) => {
    if (array == null) return;
    const storage = getStorage();
    const storageRef = stgRef(storage, "images/" + rollno);

    uploadBytes(storageRef, array[0]).then(() => {
      console.log("Image pushed"); //render the other component then
    });
    // console.log(array, rollno);
  };

  const writeUserData = (
    name,
    rollno,
    hall,
    email,
    phno,
    descp,
    amt,
    product
  ) => {
    const db = getDatabase();
    // console.log(db);
    set(databaseRef(db, "unpurchased/" + rollno), {
      username: name,
      email: email,
      rollno: rollno,
      hall: hall,
      phno: phno,
      descp: descp,
      amt: amt,
      product: product,
      resolved: false,
    });
    
    // console.log(rollNoState);
    uploadImage(arr, rollNoState);
  };

  const [arr, setArr] = useState([]);
  const [rollNoState, setRollNoState] = useState("");

  const imageUploaded = (array) => {
    setArr(array);
  };

  const push = () => {
    const answer = window.confirm("Are you sure you want to proceed?");
    if (answer) {
      const name = document.getElementById("name").value;
      const rollno = document.getElementById("rollno").value;
      const hall = document.getElementById("hall").value;
      const email = document.getElementById("email").value;
      const phno = document.getElementById("phno").value;
      const descp = document.getElementById("descp").value;
      const amt = document.querySelector("#amt").value;
      const product = document.querySelector("#product").value;

      writeUserData(name, rollno, hall, email, phno, descp, amt, product);
      // console.log(name, rollno, hall, email, phno, descp, amt, product);
      // console.log(document.getElementById("rollno"))
    }
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Enter the details below</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto d-flex justify-content-center flex-column">
            <div className="my-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Samarth Singh"
              />
            </div>
            <div className="my-4">
              <label htmlFor="rollno" className="form-label">
                Roll Number
              </label>
              <input
                type="text"
                className="form-control"
                id="rollno"
                placeholder="22XX10011"
                onChange={()=>{
                  // console.log(document.getElementById("rollno").value)
                  setRollNoState(document.getElementById("rollno").value);
                }}
              />
            </div>
            <div className="my-4">
              <label htmlFor="hall" className="form-label">
                Hall Name
              </label>
              <input
                type="text"
                className="form-control"
                id="hall"
                placeholder="LBS"
              />
            </div>
            <div className="my-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="my-4">
              <label htmlFor="phno" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phno"
                placeholder="8978126512"
              />
            </div>

            <div className="my-4">
              <label htmlFor="product" className="form-label">
                Product
              </label>
              <select
                className="form-select"
                id="product"
                aria-label="Default select example"
              >
                {/* <option selected>Menu</option> */}
                <option value="ED-Kit">ED-Kit</option>
                <option value="Cycle">Cycle</option>
                <option value="Books">Books</option>
                <option value="Other">Others</option>
              </select>
            </div>

            <div className="my-4">
              <label htmlFor="descp" className="form-label">
                Product Description
              </label>
              <textarea className="form-control" id="descp" rows="3"></textarea>
            </div>
            <div className="my-4">
              <label htmlFor="amt" className="form-label">
                Selling Price(INR)
              </label>
              <select
                className="form-select"
                id="amt"
                aria-label="Default select example"
              >
                {/* <option selected>Price Range</option> */}
                <option value="1">100-200</option>
                <option value="2">200-300</option>
                <option value="3">200-250</option>
                <option value="4">250-300</option>
                <option value="5">300-350</option>
                <option value="6">350-400</option>
                <option value="7">400-450</option>
                <option value="8">450-500</option>
                <option value="9">500-550</option>
                <option value="10">550-600</option>
                <option value="11">600-650</option>
                <option value="12">650-700</option>
                <option value="13">700-750</option>
                <option value="14">750-800</option>
                <option value="15">800-850</option>
                <option value="16">850-900</option>
                <option value="17">900-950</option>
                <option value="18">950-1000</option>
                <option value="19">1000-1050</option>
                <option value="20">1050-1100</option>
                <option value="21">1100-1150</option>
              </select>
            </div>

            <div className="my-4">
              <label htmlFor="image" className="form-label">
                Picture of the Product
              </label>
              <input
                className="form-control"
                type="file"
                id="image"
                onChange={(e) => {
                  imageUploaded(e.target.files);
                }}
              />
            </div>
            <div className="col-12 my-4">
              <button
                className="btn-get-started"
                type="submit"
                onClick={() => {
                  push();
                }}
              >
                SUBMIT FORM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
