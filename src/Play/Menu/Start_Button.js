import Classes from "./Menu_Styles.module.css";

const Start_Button = (props) => {
	return (
		<div className={Classes.Start_Button_Container}>
			<button
				className={Classes.Start_Button}
				onClick={() => props.clickEventHandler(props.p_data)}
			>
				Start
			</button>
		</div>
	);
};
export default Start_Button;
