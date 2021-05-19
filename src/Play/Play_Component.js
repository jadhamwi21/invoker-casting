import React from "react";
import Menu from "./Menu/Menu_Component.js";
import Game from "./Game/Game_Component.js";
export default class Play_Component extends React.Component {
	state = {
		visible_Component: "Menu",
	};
	startButtonHandler = (data) => {
		if (data.Difficulty === "unset") {
			alert("choose a difficulty please");
			return;
		}
		if (data.Name === "") {
			alert("please enter your name to start");
			return;
		}

		this.setState({ visible_Component: "Game", PlayerData: data });
	};
	render() {
		const Render_This =
			this.state.visible_Component === "Menu" ? (
				<Menu buttonClickEvent={this.startButtonHandler} />
			) : (
				<Game
					data={this.state.PlayerData}
					switch_component={(value) => this.setState(value)}
				/>
			);
		return Render_This;
	}
}
