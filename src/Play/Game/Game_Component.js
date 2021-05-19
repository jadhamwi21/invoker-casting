import React from "react";
import Header from "./Header/Header.js";
import Invoker_Voice from "../Game/Voices/Invoker_Voice.js";
import Invoke from "./Invoke/Invoke.js";
import Voice1 from "../../assets/Did i misscast.mp3";
import Voice2 from "../../assets/Did i mix my magic.mp3";
import Voice3 from "../../assets/No Matter.mp3";
import Voice4 from "../../assets/This Magic Disappoints.mp3";
import Template from "../Game/Voices/Character_Voice_Template_Component.js";
import { useState, useEffect } from "react";
import Styles from "./Game_Styles.module.css";
const Invoked_Spells_Incrementer = (function () {
	let counter = 0;
	return function (reset_flag) {
		if (reset_flag !== undefined) {
			counter = 0;
			return;
		}
		counter++;
		return counter;
	};
})();
const Game_Component = (props) => {
	const [GameStatus, setGameStatus] = useState(true);
	const [Results, setResults] = useState(0);
	// Invoker Voice On Opening
	useEffect(() => {
		document.getElementsByClassName("Opening")[0].play();
	}, []);
	useEffect(() => {
		if (Results == 0) return;
		const result_message = `Player name : ${props.data.Name}\nDifficulty : ${props.data.Difficulty}\nNumber Of Invoked Spells : ${Results}`;
		alert(result_message);
		props.switch_component({
			visible_Component: "Menu",
		});
		Invoked_Spells_Incrementer("reset");
	}, [GameStatus]);
	const Render_this = GameStatus ? (
		<div className={Styles.GameWrapper}>
			<Invoker_Voice />
			<Template identifier="v1" source={Voice1} />
			<Template identifier="v2" source={Voice2} />
			<Template identifier="v3" source={Voice3} />
			<Template identifier="v4" source={Voice4} />
			<Header
				difficulty={props.data.Difficulty}
				gameStatushandler={setGameStatus}
			/>
			<Invoke
				inc={Invoked_Spells_Incrementer}
				invokedspells_setter={setResults}
			/>
		</div>
	) : null;
	return Render_this;
};
export default Game_Component;
