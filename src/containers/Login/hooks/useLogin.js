import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../redux/login/slice";
import axios from "axios";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      const response = await axios.post(
        "https://staging-vas-app.indofungames.com/1.0/login/users",
        formValue
      );
      dispatch(loginSuccess(response.data.data));
      navigate("/home");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
  };
}

export default useLogin;
