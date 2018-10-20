import React, { Component } from "react";
import "./style.less";

export default class MovieCardForeground extends Component {
	render() {
		return (
			<div className="MovieCardForeground">
				<button className="MovieCardForeground__Icon"></button>
				<div className="MovieCardForeground__Title">
					<h2>What We Do In the Shadows</h2>
					2018
				</div>
			</div>
		);
	}
}
