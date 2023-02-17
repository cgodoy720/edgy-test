import { useState } from "react";
// import { useFirebase } from 'firebase/app';
import { auth } from "../firebase";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const firebase = useFirebase();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login({ email, password });
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block ext-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            className="block shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="******************"
          />
        </div>
      </form>
    </div>
  );
};
// return (
//   <div>
//     <h1>LOGIN MODAL</h1>
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//     {error && <div>{error}</div>}
//   </div>
// );

export default LogIn;
