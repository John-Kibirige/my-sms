import React from "react";

const AdminLogin = () => {
  return (
    <div className="admin-login h-[100vh] w-full grid place-items-center">
      <div className="admin-login__container border w-fit p-4">
        <h1 className=" text-md text-center font-semibold tracking-wide mb-3">
          Admin login
        </h1>

        <form>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className=" mb-3"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
