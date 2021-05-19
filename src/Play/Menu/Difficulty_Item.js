import Arrow from "../../assets/Arrow.jpg";
import Classes from "./Menu_Styles.module.css";
const Difficulty_Item = (props) => {
	return (
		<div className={props.class} onClick={() => props.select(props.difficulty)}>
			<div>
				<img src={Arrow} alt="arrow" className={Classes.Arrow} />
				<span className={Classes.Difficulty_Literal}>{props.difficulty}</span>
			</div>
		</div>
	);
};

export default Difficulty_Item;
