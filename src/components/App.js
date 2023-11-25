import React from 'react';
import './App.css';
import Home from './Home';
import { useAuth0 } from "../react-auth0-spa";
import LoginButton from "./LoggedIn";

const App = () => {
  const { isAuthenticated } = useAuth0();

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="App">
        {!isAuthenticated && (
            <Home />
        )}

        {isAuthenticated && <LoginButton />}
      </div>
  );
};

export default App;