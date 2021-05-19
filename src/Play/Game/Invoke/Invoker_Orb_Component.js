import Classes from "../Game_Styles.module.css";
const Orb_Component = (props) => {
	const render_this =
		props.orb === undefined ? (
			<div className={Classes.orb_container} />
		) : (
			<div className={Classes.orb_container}>
				<img src={props.orb} className={Classes.orb} alt="" />
			</div>
		);
	return render_this;
};
export default Orb_Component;
