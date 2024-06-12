import React, { useState } from "react";
import { API } from "../libs/api";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function RegisterHooks() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await API.post("/register", {
      email,
      password,
      username,
      name,
    }).then((res) => {
      return res.data;
    });

    console.log(response);
    try {
      navigate("/login", { replace: true });
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
    username,
    setUsername,
    name,
    setName,
  };
}

export default RegisterHooks;
