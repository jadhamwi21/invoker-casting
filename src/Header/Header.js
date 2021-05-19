import Item from "./Item.js";
import Classes from "./Header_Styles.module.css";
const Header = (props) => {
	const classSwitchingHandler = () => {
		const Activated_Component = props.State.rendered_Component;
		let Play_class;
		let Spells_class;
		const selected = [Classes.Item, Classes.Selected].join(" ");
		const unselected = Classes.Item;
		if (Activated_Component === "Play") {
			Play_class = selected;
			Spells_class = unselected;
		} else {
			Spells_class = selected;
			Play_class = unselected;
		}
		return [Play_class, Spells_class];
	};
	const [Play_Comp, Spells_Comp] = classSwitchingHandler();
	return (
		<div className={Classes.Header}>
			<Item clicked={() => props.ItemsClick("Play")} Classpass={Play_Comp}>
				Play
			</Item>
			<Item clicked={() => props.ItemsClick("Spells")} Classpass={Spells_Comp}>
				Spells
			</Item>
		</div>
	);
};

export default Header;
