import Orb from "./Invoker_Orb_Component.js";
import Invoke_icon from "../../../assets/Spells/Invoke_icon.png";
import Classes from "../Game_Styles.module.css";
import Quas from "../../../assets/Spells/Quas_icon.png";
import Wex from "../../../assets/Spells/Wex_icon.png";
import Exort from "../../../assets/Spells/Exort_icon.png";
const Invoke_Playground = (props) => {
	const next_Orbs = props.orb_set;
	const Incrementer = (function () {
		let key_for_elements = 0;
		return function () {
			key_for_elements++;
			return key_for_elements;
		};
	})();

	const Generate_Orb_Component_By_Letter = (Letter) => {
		if (Letter === "U") return <Orb key={Incrementer()} />;
		if (Letter === "Q") return <Orb orb={Quas} key={Incrementer()} />;
		if (Letter === "W") return <Orb orb={Wex} key={Incrementer()} />;
		if (Letter === "E") return <Orb orb={Exort} key={Incrementer()} />;
	};
	const Make_List = () => {
		return next_Orbs.map((orb_letter) => {
			return Generate_Orb_Component_By_Letter(orb_letter);
		});
	};
	return (
		<div className={Classes.Invoke_Playground}>
			{Make_List()}
			<Orb orb={Invoke_icon} />
		</div>
	);
};
export default Invoke_Playground;
