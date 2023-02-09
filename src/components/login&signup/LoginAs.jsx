import React from "react";

const LoginAs = () => {
  return (
    <form>
      <fieldset className="bg-white p-6 rounded-md border w-56">
        <legend className=" font-bold text-xl">Login as</legend>
        <div className="mb-2 cursor-pointer">
          <input
            type="radio"
            className="cursor-pointer"
            name="loginAs"
            id="admin"
          />
          <label className=" ml-2 cursor-pointer" htmlFor="admin">
            Admin
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input
            type="radio"
            className="cursor-pointer"
            name="loginAs"
            id="teacher"
          />
          <label className=" ml-2 cursor-pointer" htmlFor="teacher">
            Teacher
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input
            type="radio"
            className="cursor-pointer"
            name="loginAs"
            id="student"
          />
          <label className=" ml-2 cursor-pointer" htmlFor="student">
            Student
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input
            type="radio"
            className="cursor-pointer"
            name="loginAs"
            id="parent"
          />
          <label className=" ml-2 cursor-pointer" htmlFor="parent">
            Parent
          </label>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginAs;
