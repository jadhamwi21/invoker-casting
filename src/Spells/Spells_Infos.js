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
} from "../spells_index.js";
const Spells = {
	// - Cold Snap -
	Coldsnap: {
		source: coldsnap,
		combination: ["Q", "Q", "Q"],
		content:
			"Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of Quas. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of Quas.",
	},
	// - Ghost Walk -
	Ghostwalk: {
		source: ghostwalk,
		combination: ["Q", "Q", "W"],
		content:
			"Invoker manipulates the ice and electrical energies around him, rendering his body invisible. The elemental imbalance created as a consequence slows nearby enemies based on the level of Quas, and slows Invoker as well based on the level of Wex.",
	},
	// - Ice Wall -
	Icewall: {
		source: icewall,
		combination: ["Q", "Q", "E"],
		content:
			"Generates a wall of solid ice directly in front of Invoker for a duration based on the level of Quas. The bitter cold emanating from it greatly slows nearby enemies based on the level of Quas and deals damage each second based on the level of Exort.",
	},
	// - EMP -
	Emp: {
		source: emp,
		combination: ["W", "W", "W"],
		content:
			"Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after 2.9 seconds. The detonation covers an area, draining mana based on the level of Wex. Deals damage for each point of mana drained. If EMP drains mana from an enemy hero, Invoker gains 50% of the mana drained.",
	},
	// - Tornado -
	Tornado: {
		source: tornado,
		combination: ["W", "W", "Q"],
		content:
			"Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of Wex. Holds enemies in the air for a duration based on the level of Quas. Deals base damage plus added damage based on levels in Wex.",
	},
	// - Alacrity -
	Alacrity: {
		source: alacrity,
		combination: ["W", "W", "E"],
		content:
			"Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of Wex and their damage based on the level of Exort.",
	},
	// - Forge Spirit -
	Forgespirit: {
		source: forgespirit,
		combination: ["Q", "E", "E"],
		content:
			"Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage, mana, and armor are based on the level of Exort while attack range, health, and duration are based on the level of Quas. The elemental's scorching attack is capable of melting the armor of enemy heroes.",
	},
	// - Chaos Meteor -
	Chaosmeteor: {
		source: chaosmeteor,
		combination: ["E", "E", "W"],
		content:
			"Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of Exort, and rolling further based on the level of Wex. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of Exort.",
	},
	// - Sun Strike -
	Sunstrike: {
		source: sunstrike,
		combination: ["E", "E", "E"],
		content:
			"Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of Exort, however this damage is spread evenly over all enemies hit.",
	},
	// - Deafening Blast -
	Deafeningblast: {
		source: deafeningblast,
		combination: ["E", "Q", "W"],
		content:
			"Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of Exort. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of Quas, then disarm their attacks for a duration based on the level of Wex.",
	},
};
export default Spells;
