import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import { ServerProvider } from "./context/serverContext.jsx";
import "./index.css";
import MyThemeProvider from "./context/themeContext.jsx";
import AppRoutes from "./Routes/index.jsx";
import NavBar from "./components/NavBar.jsx";

createRoot(document.getElementById("root")).render(
  <ServerProvider>
    <UserProvider>
      <MyThemeProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
          {/* <App /> */}
        </BrowserRouter>
      </MyThemeProvider>
    </UserProvider>
  </ServerProvider>
);
