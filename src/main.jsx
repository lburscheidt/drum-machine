import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Drum from "./Drum.jsx";

createRoot(document.querySelector("body")).render(
	<StrictMode>
		<Drum />
	</StrictMode>,
);
