import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
// import App_ExpenseTracker from "./App_ExpenseTracker";
import App_UseEffect from "./App_UseEffect";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <App_ExpenseTracker /> */}
		{<App_UseEffect />}
	</React.StrictMode>
);
