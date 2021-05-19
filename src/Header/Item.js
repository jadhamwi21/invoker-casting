import Classes from "./Header_Styles.module.css";
const Item = (props) => {
	return (
		<div className={props.Classpass} onClick={props.clicked}>
			<div>{props.children}</div>
		</div>
	);
};
export default Item;
