const Voice_Component = (props) => {
	return (
		<audio className={props.identifier}>
			<source src={props.source} />
		</audio>
	);
};

export default Voice_Component;
