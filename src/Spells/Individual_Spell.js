import Classes from "./Spells_styles.module.css";
import Quas from "../assets/Spells/Quas_icon.png";
import Wex from "../assets/Spells/Wex_icon.png";
import Exort from "../assets/Spells/Exort_icon.png";
const Individual_Spell = (props) => {
	const Generate_Orbs = () => {
		const orbs = props.orbs;
		return orbs.map((orb, index) => {
			switch (orb) {
				case "Q":
					return (
						<div key={index}>
							<img src={Quas} className={Classes.Individual_Orb} />
							<p>Quas</p>
						</div>
					);
				case "W":
					return (
						<div key={index}>
							<img src={Wex} className={Classes.Individual_Orb} />
							<p>Wex</p>
						</div>
					);
				case "E":
					return (
						<div key={index}>
							<img src={Exort} className={Classes.Individual_Orb} />
							<p>Exort</p>
						</div>
					);
			}
		});
	};
	return (
		<div className={Classes.Spells_Container}>
			<img src={props.source} className={Classes.Spell_Image} />
			<div className={Classes.Description_Container}>
				<p className={Classes.Description_Title}>Description</p>
				<p className={Classes.Content}>{props.content}</p>
			</div>
			<div className={Classes.Combination_Container}>
				<p className={Classes.Combination_Title}>Combination</p>
				<div className={Classes.Orbs_Container}>
					<div>{Generate_Orbs()}</div>
				</div>
			</div>
		</div>
	);
};
export default Individual_Spell;
