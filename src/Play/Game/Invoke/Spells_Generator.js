import { useState, useEffect } from "react";
import {
	coldsnap,
	ghostwalk,
	icewall,
	emp,
	tornado,
	alacrity,
	forgespirit,
	chaosmeteor,
	sunstrike,
	deafeningblast,
} from "../../../spells_index";
import Classes from "../Game_Styles.module.css";
const Spells = {
	Coldsnap: [coldsnap, ["Q", "Q", "Q"]],
	Ghostwalk: [ghostwalk, ["Q", "Q", "W"]],
	Icewall: [icewall, ["Q", "Q", "E"]],
	Emp: [emp, ["W", "W", "W"]],
	Tornado: [tornado, ["W", "W", "Q"]],
	Alacrity: [alacrity, ["W", "W", "E"]],
	Forgespirit: [forgespirit, ["Q", "E", "E"]],
	Chaosmeteor: [chaosmeteor, ["E", "E", "W"]],
	Sunstrike: [sunstrike, ["E", "E", "E"]],
	Deafeningblast: [deafeningblast, ["E", "Q", "W"]],
};
const Spells_Names = Object.keys(Spells);
const Spells_Generator = (props) => {
	const Spells_Random = () => {
		return Spells[
			Spells_Names[Math.floor(Math.random() * Spells_Names.length)]
		];
	};
	const [CurrentSpell, SetCurrentSpell] = useState(Spells_Random());
	useEffect(() => {
		if (props.updater === true) {
			SetCurrentSpell((prev) => {
				let newspell = Spells_Random();
				while (newspell === prev) {
					newspell = Spells_Random();
				}
				return newspell;
			});
			props.reverse_back((prev) => !prev);
		}
	}, [props.updater]);
	useEffect(() => {
		props.setspell(CurrentSpell[1]);
	}, [CurrentSpell]);
	return (
		<div className={Classes.Invoke_This_Spell_Container}>
			<img src={CurrentSpell[0]} className={Classes.Invoke_This_Spell} alt="" />
		</div>
	);
};
export default Spells_Generator;
