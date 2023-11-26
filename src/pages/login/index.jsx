import React from "react";
import LoginIndex from "./LoginIndex";
import NoAuth from "../../components/NoAuth";

function index() {
  return (
    <div>
      <NoAuth>
        <LoginIndex />
      </NoAuth>
    </div>
  );
}

export default index;
