import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
const AppAllower = ({ setAllowance, shouldStart }) => {
	const isSmallScreen = useMediaQuery({
		query: "(max-device-width:768px)",
	});
	useEffect(() => {
		if (shouldStart) {
			const getAllowance = async () => {
				await new Promise((resolve) => setTimeout(resolve, 3000));
				if (isSmallScreen) {
					setAllowance(false);
				} else {
					setAllowance(true);
				}
			};

			getAllowance();
		}
	}, [shouldStart]);
	return null;
};

export default AppAllower;
