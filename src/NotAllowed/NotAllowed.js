import React from "react";
import Styles from "./NotAllowed.module.css";
import InvokerPersona from "../assets/Invoker-persona.png";
const NotAllowed = () => {
	return (
		<div className={Styles.NotAllowedWrapper}>
			<div>
				<div>
					<img src={InvokerPersona} />
				</div>
				<div style={{ margin: "0px 40px" }}>
					Sorry..Invoker Practice Tool Isn't Supported For This Device
				</div>
			</div>
		</div>
	);
};

export default NotAllowed;
