import React, { useState } from "react";
import LoginAs from "./LoginAs";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  // redux related
  const { signedInAs } = useSelector((state) => state.login);

  // react-router-dom related
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the validations and communicate with the backend
    // if the user is authenticated then navigate to the dashboard
    navigate(`/${signedInAs}`);

    // if the user is not authenticated then show the error message
  };

  return (
    <div className="admin-login h-[100vh] w-full grid place-items-center">
      <div className="container flex w-fit justify-between">
        <LoginAs />
        <div className="admin-login__container border w-fit p-4 ml-5">
          <h1 className=" text-md text-center font-semibold tracking-wide mb-3 capitalize">
            {`${signedInAs} login`}
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className=" mb-3 rounded-md"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                className=" rounded-md"
                id="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            <div className="mt-3 mx-auto w-fit">
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md uppercase hover:bg-blue-500">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
