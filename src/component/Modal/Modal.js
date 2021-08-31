import React, { useEffect, useRef } from "react";
import Tab from "../Tab/Tab";
import classes from "./Modal.module.css";

const Modal = (props) => {
	let hidden = useRef(classes.hidden);
	useEffect(() => {
		hidden.current = ``;
	}, []);

	return (
		<div
			className={[
				classes.modal,
				props.open ? classes.modalOpen : classes.modalClose,
				hidden.current
			].join(` `)}
		>
			<span
				onClick={() => {
					props.clicked();
					props.change(1);
				}}
			>
				&times;
			</span>
			<div className={classes.container}>
				<div className={[classes.map, classes.item].join(" ")}>
					<h1>{props.info}</h1>

					<div>
						<img
							src={
								props.info
									? require(`../../asset/image/${props.info}.svg`)
											?.default
									: null
							}
							alt={props.info}
						/>
					</div>
				</div>

				<Tab
					className={[classes.item, classes.tab].join(" ")}
					id={props.id}
					change={props.change}
				/>
			</div>
		</div>
	);
};

export default Modal;
