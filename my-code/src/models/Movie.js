import {observable, computed, action} from "mobx";

export default class Movie {

	@observable favourite = false;

    constructor(json) {
		this.title = json.Title;
		this.year = json.Year;
		this.imdb = json.imdbID;
		this.type = json.Type;
		this.poster = json.Poster;
    }

	get hasPoster(){
		return this.poster != 'N/A';
	}

	@action setFavourite(fav){
		console.log('setando favorito');
		return this.favourite = fav;
	}
}
