import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import PWAPrompt from "react-ios-pwa-prompt";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <p>This is header</p>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/location">Location</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Do it properly!!</p>
      </footer>
      <PWAPrompt />
    </>
  );
}

export default App;
