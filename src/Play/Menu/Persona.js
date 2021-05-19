import Persona_Image from "../../assets/Invoker-persona.png";
import Classes from "./Menu_Styles.module.css";
const Persona = () => {
	return (
		<div className={Classes.Persona_Container}>
			<img src={Persona_Image} className={Classes.Persona_Image} />
		</div>
	);
};
export default Persona;
