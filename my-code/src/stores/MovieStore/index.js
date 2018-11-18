import { observable, action, computed, runInAction } from 'mobx'
import Movie from '../../models/Movie'

const API_URL = 'http://www.omdbapi.com/?apikey=1f42f06a';

class MovieStore {

	@observable favourites = [];
	@observable movies = [];

	@action initiateStorage(){
		const savedFavourites = localStorage.getItem('favourites');
		if(savedFavourites){
			this.favourites = JSON.parse(savedFavourites);
		}
	}

	@computed get moviesIn() {
	  return this.movies;
	}

	@computed get hasMovies() {
	  return this.movies.length > 0;
	}

	@action searchMovies(search){
		try {
			this.movies.clear();
			fetch(`${API_URL}&s=${search}`)
			.then(result=>result.json())
			.then(result=>result.Search.map(movieJson=>{
				const movie = new Movie(movieJson);
				if(this.favourites.includes(movie.imdb)){
					movie.setFavourite(true);
				}
				return movie;
			}))
			.then(
	            action("fetchSuccess", result => this.movies.replace(result)),
	            action("fetchError", error => {
					console.log(error);
	            })
	        )
		} catch (e) {
			console.error(e);
		}
	}

	@action async searchMovie(imdbID){
		let result = {};
		try {
			result = await fetch(`${API_URL}&i=${imdbID}`);
			result = await result.json();
		} catch (e) {
			console.error(e);
		}
		return result;
	}


	@action favorThis(movie){
		const index = this.favourites.indexOf(movie.imdb);

		if(index < 0){
			movie.setFavourite(true);
			this.favourites.push(movie.imdb);
		}else{
			movie.setFavourite(false);
			this.favourites.splice(index, 1 );
		}

		localStorage.setItem('favourites', JSON.stringify(this.favourites));
	}
}

export default MovieStore
