import React from "react";

import './style.css'

export const PageLayout = ({children}) => {
	return(
		<div>
			<div className="container">{children}</div>
		</div>
	)
}