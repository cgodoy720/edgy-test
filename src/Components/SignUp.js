import React from "react";
import { Link } from "react-router-dom";
import { BiNote } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
export const SignUp = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-16">
      <div>
        <h1 className="text-3xl font-semibold">
          Sign Up for a <em>Free</em> account today{" "}
        </h1>
        <p>
          Already have have an account?{" "}
          <Link className="underline" to="/">
            Sign In
          </Link>
        </p>
      </div>

      <form onSubmit={""}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="email">
            Email
          </label>
          <input className="border p-3" type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="border p-3"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <button className="flex items-center justify-center gap-2 shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400 rounded-xl">
            <BiNote /> Sign Up with Note-It
          </button>
          <button className=" flex items-center justify-center gap-2 shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400 rounded-xl">
            <FcGoogle /> Sign Up with Google
          </button>
          {/* <button className="shadow-xl border border-red-900 bg-red-500 w-full p-4 my-3 hover:bg-red-400">
            Sign Up
          </button> */}
        </div>
      </form>
    </div>
  );
};
