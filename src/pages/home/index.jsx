import React from "react";
import HomeIndex from "./HomeIndex";
import Auth from "../../components/Auth";

function index() {
  return (
    <div>
      <Auth>
        <HomeIndex />
      </Auth>
    </div>
  )
}

export default index;
