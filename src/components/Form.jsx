import React from "react";
// import '/Form.css';
import float from './img/float.png'

function Form() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <div className="mb-3 pt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Samarth Singh"
                />
              </div>
              <div className="mb-3 pt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Roll Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="22XX10011"
                />
              </div>
              <div className="mb-3 pt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Hall Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="LBS"
                />
              </div>
              <div className="mb-3 pt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3 pt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="8978126512"
                />
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open the product menu</option>
                <option value="1">ED-KIT</option>
                <option value="2">CYCLE</option>
                <option value="3">BOOKS</option>
              </select>

              <div className="mb-3 pt-5">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Product Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Price Range</option>
                <option value="1">100-150</option>
                <option value="2">150-200</option>
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
              <div className="mb-3 pt-5">
                <label for="formFile" className="form-label">
                  Picture of the Product
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  SUBMIT FORM
                </button>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={float} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
