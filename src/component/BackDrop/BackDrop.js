import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = (props) => {
	const backdrop = props.open ? (
		<div
			className={classes.backDrop}
			onClick={() => {
				props.clicked();
				props.change(1);
			}}
		></div>
	) : null;

	return backdrop;
};

export default BackDrop;
