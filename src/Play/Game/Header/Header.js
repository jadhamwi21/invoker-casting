import Title from "./Title.js";
import Classes from "../Game_Styles.module.css";
import Timer from "./Timer.js";
const Header = (props) => {
	const decide_Time_AccordingTo_Difficulty = (difficulty) => {
		let time;
		if (difficulty === "Hard") time = 0.25; // 15 seconds
		if (difficulty === "Medium") time = 0.41666667; // 25 seconds
		if (difficulty === "Easy") time = 1; // 1 whole minute
		return time;
	};
	return (
		<div className={Classes.Header}>
			<Title />
			<Timer
				time={decide_Time_AccordingTo_Difficulty(props.difficulty)}
				setGameStatus={props.gameStatushandler}
			/>
		</div>
	);
};
export default Header;
