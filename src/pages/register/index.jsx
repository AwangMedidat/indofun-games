import React from "react";
import Register from "./RegisterIndex";
import NoAuth from "../../components/NoAuth";

function index() {
  return (
    <div>
      <NoAuth>
        <Register />
      </NoAuth>
    </div>
  );
}

export default index;
