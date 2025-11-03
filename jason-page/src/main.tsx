import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";

window.onhashchange = () => {
  console.log(location.hash);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
