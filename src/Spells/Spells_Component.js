import Spells from "./Spells_Infos.js";
import IndividualSpell from "./Individual_Spell.js";
import Slider from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const dragstop = (e) => {
	e.preventDefault();
};
const Spell_Component = () => {
	const ListSpells = () => {
		const spells_obj = Spells;
		const spells_names = Object.keys(spells_obj);
		return spells_names.map((name, index) => {
			const current_spell = Spells[name];
			return (
				<div onDragStart={dragstop} key={index}>
					<IndividualSpell
						orbs={current_spell.combination}
						source={current_spell.source}
						content={current_spell.content}
					/>
				</div>
			);
		});
	};
	return (
		<Slider mouseTracking disableButtonsControls autoHeight autoWidth>
			{ListSpells()}
		</Slider>
	);
};

export default Spell_Component;
