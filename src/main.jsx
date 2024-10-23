import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { ServerProvider } from "./context/serverContext.jsx";
import "./index.css";
import MyThemeProvider from "./context/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ServerProvider>
    <UserProvider>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </UserProvider>
  </ServerProvider>
);
