import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Drum from "./Drum.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Drum />
	</StrictMode>,
);
