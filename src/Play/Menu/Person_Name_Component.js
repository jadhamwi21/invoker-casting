import Classes from "./Menu_Styles.module.css";
const Person_Name_Component = (props) => {
	return (
		<div className={Classes.Person_Name_Container}>
			<div>
				<p>Player's Name:</p>
				<input
					type="text"
					onBlur={(event) => props.changeName(event.target.value)}
				/>
			</div>
		</div>
	);
};
export default Person_Name_Component;
