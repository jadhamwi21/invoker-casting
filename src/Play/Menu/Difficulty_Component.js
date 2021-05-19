import Classes from "./Menu_Styles.module.css";
import Dif_Item from "./Difficulty_Item.js";
const Difficutly_Component = (props) => {
	const Difficulties = ["Easy", "Medium", "Hard"];
	const getClasses = () => {
		let arr = [];
		Difficulties.forEach((diff) => {
			const select_classes = [Classes.Difficulty_Item_Container];
			if (diff === props.selected) {
				if (diff === "Easy") {
					select_classes.push(Classes.easy);
				}
				if (diff === "Medium") {
					select_classes.push(Classes.medium);
				}
				if (diff === "Hard") {
					select_classes.push(Classes.hard);
				}
				arr.push(select_classes.join(" "));
			} else {
				arr.push(select_classes.join(" "));
			}
		});
		return arr;
	};
	const Generate_List = () => {
		const classes = getClasses();
		return Difficulties.map((difficulty, index) => {
			return (
				<Dif_Item
					difficulty={difficulty}
					key={index}
					select={props.selectDifficulty}
					class={classes[index]}
				/>
			);
		});
	};
	return (
		<div className={Classes.Difficulties_Container}>
			<div>{Generate_List()}</div>
		</div>
	);
};
export default Difficutly_Component;
