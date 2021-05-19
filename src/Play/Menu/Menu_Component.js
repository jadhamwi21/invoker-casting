import Title from "./Title.js";
import Difficulty_Component from "./Difficulty_Component.js";
import Person_Name_Component from "./Person_Name_Component.js";
import Persona from "./Persona.js";
import Button from "./Start_Button.js";
import { useState } from "react";
import Styles from "./Menu_Styles.module.css";
const Menu_Component = (props) => {
	const [PlayerData, SetData] = useState({
		Name: "",
		Difficulty: "unset",
	});
	const selectDifficultyHandler = (diff) => {
		if (diff === PlayerData.Difficulty) {
			// (For repetitive clicking on the same difficulty)
			return;
		}
		SetData({
			Name: PlayerData.Name,
			Difficulty: diff,
		});
	};
	const changeNameHandler = (name) => {
		if (name === PlayerData.Name) {
			return;
		}
		SetData({
			Name: name,
			Difficulty: PlayerData.Difficulty,
		});
	};

	return (
		<div className={Styles.MenuContainer}>
			<Title />
			<div className={Styles.MenuSelectionDiv}>
				<div>
					<Persona />
					<Difficulty_Component
						selectDifficulty={selectDifficultyHandler}
						selected={PlayerData.Difficulty}
					/>
					<Person_Name_Component changeName={changeNameHandler} />
					<Button
						clickEventHandler={props.buttonClickEvent}
						p_data={PlayerData}
					/>
				</div>
			</div>
		</div>
	);
};
export default Menu_Component;
