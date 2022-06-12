import React from "react";
import  ReactDOM from "react-dom/client"; // react18
//import  ReactDOM from "react-dom"; // react17
import App from "components/App";

// react17
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
