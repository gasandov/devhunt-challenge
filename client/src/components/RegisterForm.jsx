import { useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnInputChange = (evt) => {
    setForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleOnRegister = async () => {
    try {
      await fetch("http://localhost:80/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form }),
      });

      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleOnInputChange}
        placeholder="name"
      />
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
      <button onClick={handleOnRegister}>Register</button>
      {error && error}
    </div>
  );
};

export default RegisterForm;
