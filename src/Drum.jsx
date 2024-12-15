import { useState } from "react";
import "./Drum.css";
function Drum() {
	return (
		<div id="drum-machine">
			<div id="drum-pads">
				<button class="drum-pad">Q</button>
				<button class="drum-pad">W</button>
				<button class="drum-pad">E</button>
				<button class="drum-pad">A</button>
				<button class="drum-pad">S</button>
				<button class="drum-pad">D</button>
				<button class="drum-pad">Z</button>
				<button class="drum-pad">X</button>
				<button class="drum-pad">C</button>
			</div>
			<div id="display">Sound effect name</div>
		</div>
	);
}

export default Drum;
