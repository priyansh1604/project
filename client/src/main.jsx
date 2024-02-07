import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    //  domain="dev-03ifqltxbr6nn0hn.us.auth0.com"
    domain="dev-nkalqzpn1wszbh8b.us.auth0.com"
    //  clientId="RXlGXkr49Ev5MHpvAC6vKkZ4bVn11iwl"
    clientId="qF4KdIOWmebSpHB7E5UL902EpMKWvTzr"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:9000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
