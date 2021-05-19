import Classes from "../Game_Styles.module.css";
import { useState, useEffect } from "react";
const Timer = (props) => {
	const [Time, setTime] = useState(props.time * 60000);
	const Time_Format = () => {
		let minutes = Math.floor(Time / 60);
		let seconds = (Time % 60).toLocaleString("en-us", {
			minimumIntegerDigits: 2,
		});
		return [minutes, seconds];
	};
	useEffect(() => {
		setTimeout(() => {
			if (Math.floor(Time) === 0) {
				props.setGameStatus(false);
				return;
			}
			setTime((Prevtime) => Prevtime - 1);
		}, 1000);
	}, [Time]);
	const [minutes, seconds] = Time_Format();
	return (
		<div className={Classes.Timer}>
			<div>
				<p>
					Time - {minutes} : {seconds}
				</p>
			</div>
		</div>
	);
};
export default Timer;
