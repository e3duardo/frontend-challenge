import React, { Component } from "react";
import "./style.less";
import MovieCardForeground from "./MovieCardForeground";

export default class MovieCard extends Component {
	render() {
		return (
			<div className={`MovieCard`}>
				<MovieCardForeground />
				<img src={require('./assets/poster.jpg')} className="MovieCard__Background" />
			</div>
		);
	}
}
