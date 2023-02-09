import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signedAsReducer } from "../../redux/login";

const LoginAs = () => {
  const [option, setOption] = useState("admin");

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  // dispatching the action ot the store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signedAsReducer(option));
  }, [option]);

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
            value="admin"
            checked={option === "admin"}
            onChange={handleOptionChange}
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
            value={"teacher"}
            checked={option === "teacher"}
            onChange={handleOptionChange}
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
            value={"student"}
            checked={option === "student"}
            onChange={handleOptionChange}
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
            value={"parent"}
            checked={option === "parent"}
            onChange={handleOptionChange}
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
