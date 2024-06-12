import React, { useState } from "react";
import { API } from "../libs/api";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function LoginHooks() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await API.post("/login", {
      email,
      password,
    }).then((res) => {
      return res.data;
    });

    console.log(response);
    try {
      const token = response.data;

      if (token) {
        localStorage.setItem("token", token);
      }

      if (localStorage.getItem("token")) {
        navigate("/", { replace: true });
        toast.success(`${response.messages}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error(`${response.messages}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    handleSubmit,
    setEmail,
    email,
    setPassword,
    password,
  };
}

export default LoginHooks;
