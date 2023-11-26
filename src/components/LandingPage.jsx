import React from "react";
import D1 from "../images/D1.png";
import Logo from "../images/Logo.png"

function LandingPage() {
  return (
    <div>
      <div className="position-relative">
        <img src={D1} className="img-fluid object-fit-cover" alt="" />
        <div class="position-absolute top-0 start-0 mt-lg-3 ms-lg-5 mt-md-2 ms-md-5">
            <img src={Logo} className="img-fluid max-width-image"/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
