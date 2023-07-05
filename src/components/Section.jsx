import React from "react";
import { NavLink } from "react-router-dom";

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

                <h2 className="my-3"></h2>

                <div className="mt-3">
                  <NavLink to="/buy" className="btn-get-started m-2">
                    BUY
                  </NavLink>
                  <NavLink to="/sell" className="btn-get-started m-2">
                    SELL
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                {/* <img src={p} className="img-fluid animated" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
