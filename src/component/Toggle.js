import React, { useState } from "react";

const Toggle = ({ children }) => {
	const [toggle, setToggle] = useState(true);
	return (
		<div className="checking" onClick={() => setToggle(!toggle)}>
			{toggle ? children : ""}
		</div>
	);
};

export default Toggle;
