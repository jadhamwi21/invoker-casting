import Template from "./Character_Voice_Template_Component.js";
import Invoker_Opening_Voice from "../../../assets/Invoker_Voice.mp3";
const Voice = (props) => {
	return <Template identifier={"Opening"} source={Invoker_Opening_Voice} />;
};
export default Voice;
