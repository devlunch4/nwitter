import React from "react";
//import ReactDOM from "react-dom/client"; // react18
import  ReactDOM from "react-dom"; // react17
import App from "components/App";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//react17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
/* How to downgrade React version 18 to 17?
How to downgrade React version 18 to 17?
To downgrade React version 18 to 17 First Of all, Open Your package.json file Search For react and react-dom under dependencies, and change both package versions to 17.0.2. Just Like given below: “react”: “^17.0.2”, “react-dom”: “^17.0.2”, Now, run npm install. And now Your React Version is changed to React 17. Thank You.

downgrade React version 18 to 17
To downgrade React version 18 to 17 If You Don’t want to use React 18 Then Just downgrade to react 17 Just run this command in your terminal: npm install –save react@17.0.2 react-dom@17.0.2 Now, your error must be gone and your problem is solved. Thank You. */