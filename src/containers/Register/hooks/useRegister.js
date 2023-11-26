import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerFailure,
  registerSuccess,
  registerStart,
} from "../../../redux/register/slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.register);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
    name: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(registerStart());
      const response = await axios.post(
        "https://staging-vas-app.indofungames.com/1.0/register/users/registermain",
        formValue
      );
      dispatch(registerSuccess(response.data.data));
      navigate("/login");
    } catch (error) {
      dispatch(registerFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
  };
}

export default useRegister;
