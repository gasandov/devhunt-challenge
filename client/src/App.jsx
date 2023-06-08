import { useState } from "react";

import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <>
      {!authToken ? (
        <>
          <RegisterForm />
          <LoginForm setAuthToken={setAuthToken} />
        </>
      ) : (
        <Profile token={authToken} />
      )}
    </>
  );
}

export default App;
