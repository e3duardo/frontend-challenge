import React, {Component} from "react";
import {inject, observer} from 'mobx-react';
import "./style.less";
import MovieCardForeground from "./MovieCardForeground";

@inject('rootStore') @observer
export default class MovieCard extends Component {
	handleWithFavourite = () => {
		const movieStore = this.props.rootStore.movieStore;
		const movie = this.props.movie;
		movieStore.favorThis(movie);
	}

	render() {
		const {movie} = this.props;

		return (
			<div className={`MovieCard`}>
				<button className={`MovieCard__Favourite ${movie.favourite?'MovieCard__Favourite--favourite':''}`}
						onClick={this.handleWithFavourite}></button>
				<MovieCardForeground movie={movie}/>
				<img src={movie.poster} className="MovieCard__Background" />
			</div>
		);
	}
}
