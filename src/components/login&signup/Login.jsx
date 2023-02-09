import React, { useState } from "react";
import LoginAs from "./LoginAs";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the validations and communicate with the backend
  };

  return (
    <div className="admin-login h-[100vh] w-full grid place-items-center">
      <div className="container flex w-fit justify-between">
        <LoginAs />
        <div className="admin-login__container border w-fit p-4 ml-5">
          <h1 className=" text-md text-center font-semibold tracking-wide mb-3">
            Admin login
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
