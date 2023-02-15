import { useState } from 'react';
// import { useFirebase } from 'firebase/app';
import { auth } from "../firebase"
const LogIn= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div>
      <h1>LOGIN MODAL</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LogIn;
