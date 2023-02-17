import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiNote } from "react-icons/bi";
import { app } from "./firebase";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const firebase = useFirebase();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   await app.login({ email, password });
    // } catch (err) {
    //   setError(err.message);
    // }
  };
  return (
    <div className="max-w-[700px] mx-auto my-16 p-16">
      <div>
        <h1 className="text-3xl font-semibold">Log in to you account</h1>
        <div>
          <p className="py-2">
            Don't have an account? No worries,{" "}
            <Link className="underline" to="/signup">
              Sign Up
            </Link>
          </p>
          <p className="p-2">
            Go to your{" "}
            <Link className="underline" to="/account">
              Account{" "}
            </Link>
          </p>
        </div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="flex flex-col py-2">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            className="border p-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="password"></label>
          <input
            className="border p-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex flex-col ">
          <button className=" flex items-center justify-center gap-2 shadow-xl border border-sky-900 bg-sky-500 w-full p-4 my-3 hover:bg-sky-400 rounded-xl">
            <BiNote /> Log In
          </button>
          <button className=" flex items-center justify-center gap-2 shadow-xl border border-cyan-900 bg-cyan-500 w-full p-4 my-3 hover:bg-sky-400 rounded-xl ">
            <FcGoogle /> Google
          </button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LogIn;
