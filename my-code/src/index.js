import React, { Component } from "react";
import "./style.less";

import MovieCard from "./Components/MovieCard"

export default class App extends Component {
	render() {
		return (
			<div>
				Hello!
				<MovieCard />
			</div>
		);
	}
}
