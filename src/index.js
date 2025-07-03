import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <p></p>
    </div>
  );
}

const Header = () => {
  return <h1>This is the header part.</h1>;
};

const Main = () => {
  return (
    <div>
      <h2>This is the main part of the application.</h2>
      <Tour />
    </div>
  );
};
const Footer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <footer>{currentTime} This is the Footer part.</footer>;
};
const Tour = () => {
  return (
    <div>
      <p>Explore the features of this application.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
