import React from "react";
import classes from "./Tab.module.css";

const Tab = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.btnContainer}>
				<button
					className={[
						props.id === 1 ? classes.btnActive : "",
						classes.btn
					].join(" ")}
					onClick={props.change.bind(this, 1)}
				>
					Tab1
				</button>
				<button
					className={[
						props.id === 2 ? classes.btnActive : "",
						classes.btn
					].join(" ")}
					onClick={props.change.bind(this, 2)}
				>
					Tab2
				</button>
			</div>

			<div className={classes.contentContainer}>
				<div
					className={[
						props.id === 1 ? classes.content : classes.hidden
					]}
				>
					<h1>Header - 1</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Laborum quasi beatae animi, molestiae dicta, omnis
						tenetur quos libero non ex dolorum aut. Praesentium in
						quibusdam repudiandae eveniet repellat quo maiores
						nihil! Alias, ex quibusdam voluptas repellendus, at et
						nihil ullam maiores non deserunt perferendis. Eveniet
						porro mollitia obcaecati laboriosam. Saepe.
					</p>
				</div>

				<div
					className={[
						props.id === 2 ? classes.content : classes.hidden
					]}
				>
					<h1>Header - 2</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. In, nesciunt? Expedita magni ipsa repudiandae
						atque ut. Vel nesciunt voluptatum non doloribus debitis
						quia a ad, optio numquam illo. Vel dignissimos minima
						nesciunt saepe magni quasi repellat eligendi illo sit
						quo ipsum ad aspernatur consequatur expedita, alias
						error inventore omnis voluptatum distinctio, a magnam
						eum sequi. Recusandae similique ipsa non, ullam
						obcaecati dolor qui.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tab;
