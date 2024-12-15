import { useState } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Drum.css";
class Drum extends React.Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleClick = (event) => {
		const display = document.querySelector("#display");
		const id = event.target.innerText;
		const effectName = event.target.id;
		document.getElementById(id).play();
		display.innerText = effectName;
	};
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}

	handleKeyPress(e) {
		const id = e.code.slice(-1);
		document.getElementById(id).play();
	}

	render() {
		return (
			<div id="drum-machine">
				<div
					id="drum-pads"
					onClick={this.handleClick}
					onKeyDown={this.handleKeyPress}
				>
					<button className="drum-pad" type="button" id="Heater 1">
						<audio
							currenttime="0"
							className="clip"
							id="Q"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						Q
					</button>

					<button className="drum-pad" type="button" id="Heater 2">
						<audio
							currenttime="0"
							className="clip"
							id="W"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						W
					</button>

					<button className="drum-pad" type="button" id="Heater 3">
						<audio
							currenttime="0"
							className="clip"
							id="E"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						E
					</button>

					<button className="drum-pad" type="button" id="Heater 4">
						<audio
							currenttime="0"
							className="clip"
							id="A"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						A
					</button>

					<button className="drum-pad" type="button" id="Clap">
						<audio
							currenttime="0"
							className="clip"
							id="S"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						S
					</button>

					<button className="drum-pad" type="button" id="Open-HH">
						<audio
							currenttime="0"
							className="clip"
							id="D"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						D
					</button>

					<button className="drum-pad" type="button" id="Kick'n'Hat">
						<audio
							currenttime="0"
							className="clip"
							id="Z"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						Z
					</button>

					<button className="drum-pad" type="button" id="Kick">
						<audio
							currenttime="0"
							className="clip"
							id="X"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						X
					</button>

					<button className="drum-pad" type="button" id="Closed-HH">
						<audio
							currenttime="0"
							className="clip"
							id="C"
							src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
						>
							<track kind="captions" src="" />
						</audio>
						C
					</button>
				</div>
				<div id="display">Sound effect name</div>
			</div>
		);
	}
}
export default Drum;
