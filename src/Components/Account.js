import React from "react";
import { Link } from "react-router-dom";
export const Account = () => {
  return (
    <div className="">
      <h1 className="text-4xl ">Account</h1>
      <p>First Name:</p>
      <p>Last Name:</p>
      <h3>Username:</h3>
      <Link to="/">
        {" "}
        <button className="border border-cyan-800 bg-cyan-800  m-20 p-4 my-3 hover:bg-cyan-700">
          Sing Out
        </button>
      </Link>
    </div>
  );
};
