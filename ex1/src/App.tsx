import { useState } from "react";

interface LoginPageProps {
  submit: (username: string, password: string) => void;
  hasError: boolean;
}

function MainPage() {
  return <h1>Yey, you are logged in.</h1>;
}

function LoginPage({ submit, hasError }: LoginPageProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <h1>Please log in.</h1>
      {hasError && <h2>Wrong password.</h2>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => submit(username, password)}>Log In</button>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const submit = (username: string, password: string): void => {
    if (username === "admin" && password === "qwerty123") {
      setIsLoggedIn(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <LoginPage submit={submit} hasError={hasError} />
      )}
    </div>
  );
}