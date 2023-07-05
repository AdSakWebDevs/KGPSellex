import React from "react";
import { NavLink } from "react-router-dom";
import float from './img/float.png'

function Section() {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  A perfect place{" "}
                  <div><strong className="brand-name">KGP-SELLEX</strong></div>
                  
                </h1>


                <div className="mt-3">
                  <NavLink to="/buy" className="btn-get-started mx-2 mb-5">
                    BUY
                  </NavLink>
                  <NavLink to="/sell" className="btn-get-started mx-2 mb-5">
                    SELL
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                <img src={float} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
