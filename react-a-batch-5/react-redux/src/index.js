import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
