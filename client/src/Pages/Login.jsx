import { useState } from "react";
import axios from "axios";
import CustomInput from "../Components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { addUser } from "../redux/userSlice";

const initialData = {
  username: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const { LoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (LoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username === "santosh" && formData.password === "admin") {
      setFormData(initialData);
      dispatch(login());
    } else {
      alert("wrong username or password");
    }
    // try {
    //   // const response = await axios.post(
    //   //   "http://localhost:5000/api/auth/login",
    //   //   formData
    //   // );
    //   // alert(response.data);
    //   // console.log(response.data);
    //   setFormData(initialData);
    //   dispatch(login());
    //   // dispatch(addUser(response.data));
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     alert(`Unauthorized `);
    //     console.error("Unauthorized:", error.response.data);
    //   } else {
    //     console.error("Error submitting form:", error);
    //   }
    // }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 border-2 border-blue-600 rounded-md bg-white p-7 flex flex-col gap-3 justify-center items-center"
      >
        <h1 className="font-bold text-2xl text-blue-600">Login</h1>

        <div className="w-[100%]">
          <CustomInput
            label={"Username"}
            type={"text"}
            name={"username"}
            value={formData.username}
            onChange={handleChange}
          />

          <CustomInput
            label={"Password"}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 font-bold text-white rounded-md hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
