import Spells_Generator from "./Spells_Generator.js";
import Invoke_Playground from "./Invoke_Playground.js";
import { useState, useEffect } from "react";
const Compare_Orbs = (orbset, spellset) => {
	const o_set = [...orbset];
	const s_set = [...spellset];
	o_set.sort();
	s_set.sort();
	for (let i = 0; i < o_set.length; i++) {
		if (o_set[i] !== s_set[i]) return false;
	}
	return true;
};
const callVoiceForMiscasting = () => {
	const available_voices = ["v1", "v2", "v3", "v4"];
	available_voices.forEach((voice) => {
		document.getElementsByClassName(voice)[0].pause();
		document.getElementsByClassName(voice)[0].currentTime = 0;
	});
	const random = Math.floor(Math.random() * 4);
	document.getElementsByClassName(available_voices[random])[0].play();
};
const Invoke_Component = (props) => {
	const [DisplayedSpellSet, SetDisplayedSpellSet] = useState(0);
	const [Orbset, SetOrbSet] = useState(["U", "U", "U"]);
	const [Update, SetUpdate] = useState(false);
	// The letter (U) for unset
	const AddOrb_Letter = (Orb) => {
		SetOrbSet((prevSet) => {
			prevSet.shift();
			return [...prevSet, Orb];
		});
	};
	const Addkeys = (thekey) => {
		if (thekey.key == "q") {
			AddOrb_Letter("Q");
		}
		if (thekey.key == "w") {
			AddOrb_Letter("W");
		}
		if (thekey.key == "e") {
			AddOrb_Letter("E");
		}
		if (thekey.key == "r") {
			const is_EQ = Compare_Orbs(Orbset, DisplayedSpellSet);
			if (is_EQ) {
				SetUpdate((prev) => !prev);
				props.invokedspells_setter(props.inc());
			} else {
				callVoiceForMiscasting();
			}
		}
	};
	useEffect(() => {
		SetOrbSet(Orbset);
	}, [Update]);
	useEffect(() => {
		document.addEventListener("keydown", Addkeys);
		return () => {
			document.removeEventListener("keydown", Addkeys);
		};
	}, [Orbset, DisplayedSpellSet]);
	return (
		<div>
			<Spells_Generator
				setspell={SetDisplayedSpellSet}
				updater={Update}
				reverse_back={SetUpdate}
			/>
			<Invoke_Playground orb_set={Orbset} />
		</div>
	);
};
export default Invoke_Component;
