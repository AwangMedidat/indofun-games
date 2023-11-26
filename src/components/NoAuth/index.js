import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NoAuth(props) {
  const { children } = props;
  const router = useNavigate();
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();

  useEffect(() => {
    if (user) {
      router("/home");
    }
    setMounted(true);
  }, [router, user]);

  return mounted ? children : <span />;
}

export default NoAuth;
