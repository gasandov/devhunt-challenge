import { useState } from "react";

const LoginForm = ({ setAuthToken }) => {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnInputChange = (evt) => {
    setForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleOnLogin = async () => {
    try {
      const response = await fetch("http://localhost:80/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      });

      const { token } = await response.json();

      setAuthToken(token);
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log("e: ", error);
      // setError(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleOnInputChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleOnInputChange}
        placeholder="password"
      />
      <button onClick={handleOnLogin}>Login</button>
      {error && error}
    </div>
  );
};

export default LoginForm;
