// pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";
import { useBackgroundMusic } from "../hooks/useSound";

function MyApp({ Component, pageProps }) {
  useBackgroundMusic(); // Dummy call, will not play sound

  useEffect(() => {
    console.log("App mounted 🚀");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
