import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./style.less";

export default class MovieCardForeground extends Component {
	render() {
		const {movie} = this.props;
		return (
			<div className="MovieCardForeground">
				<NavLink className="MovieCardForeground__Title" to={`/movies/${movie.imdb}`}>
					<h2>{movie.title}</h2>
					{movie.year}
				</NavLink>
			</div>
		);
	}
}
