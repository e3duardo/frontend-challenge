import React, { Component } from "react";
import "./style.less";

export default class SearchBar extends Component {
	render() {
		const {search, autofocus, disabled} = this.props;

		return (
			<div className={`SearchBar ${disabled?'SearchBar--Disabled':''}`}>
				<input className="SearchBar__Input" type="search" value={search} disabled={disabled} autofocus={autofocus} placeholder="Search movies..."/>
			</div>
		);
	}
}
