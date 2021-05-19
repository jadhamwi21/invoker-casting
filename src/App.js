import React from "react";
import Header from "./Header/Header.js";
import NotAllowed from "./NotAllowed/NotAllowed.js";
import Play_Component from "./Play/Play_Component.js";
import Spell_Component from "./Spells/Spells_Component.js";
import AppAllower from "./AppAllower.js";
import KeyboardLogo from "./assets/KeyboardLogo.png";
import { AnimatePresence, motion } from "framer-motion";
export const CalculatingAllowanceENUM = {
	INITIAL: 1,
	START: 2,
	FINISH: 3,
};
export default class App extends React.Component {
	state = {
		rendered_Component: "Play",
		Allowance: false,
		CalculatingAllowance: CalculatingAllowanceENUM.INITIAL,
	};
	headerItemsClickHandler = (value) => {
		if (value === this.state.rendered_Component) return;
		this.setState({
			rendered_Component: value,
		});
	};
	render() {
		return (
			<AnimatePresence exitBeforeEnter>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={this.state.CalculatingAllowance}
				>
					<>
						{this.state.CalculatingAllowance ===
							CalculatingAllowanceENUM.FINISH && (
							<>
								{this.state.Allowance ? (
									<>
										<Header
											ItemsClick={this.headerItemsClickHandler}
											State={this.state}
										/>
										{this.state.rendered_Component === "Play" ? (
											<Play_Component />
										) : (
											<Spell_Component />
										)}
									</>
								) : (
									<NotAllowed />
								)}
							</>
						)}
					</>
					{this.state.CalculatingAllowance !==
						CalculatingAllowanceENUM.FINISH && (
						<div
							style={{
								backgroundColor: "black",
								display: "grid",
								placeItems: "center",
								height: "100vh",
								width: "100%",
								color: "white",
								fontSize: "40px",
								textAlign: "center",
							}}
						>
							{this.state.CalculatingAllowance ===
							CalculatingAllowanceENUM.INITIAL ? (
								<div>
									<div
										style={{
											margin: "0 auto",
											height: "fit-content",
											width: "fit-content",
										}}
									>
										<img
											src={KeyboardLogo}
											onClick={() => {
												this.setState({
													CalculatingAllowance: CalculatingAllowanceENUM.START,
												});
											}}
											onTouchStart={() => {
												this.setState({
													CalculatingAllowance: CalculatingAllowanceENUM.START,
												});
											}}
										/>
									</div>
									<div style={{ margin: "0px 20px" }}>
										Click On The Keyboard Logo To Check If Your Device Is
										Supported
									</div>
								</div>
							) : (
								<div>Checking Allowance..Please Wait {":)"}</div>
							)}
						</div>
					)}
					<AppAllower
						setAllowance={(result) =>
							this.setState({
								Allowance: result,
								CalculatingAllowance: CalculatingAllowanceENUM.FINISH,
							})
						}
						shouldStart={
							this.state.CalculatingAllowance === CalculatingAllowanceENUM.START
						}
					/>
				</motion.div>
			</AnimatePresence>
		);
	}
}
