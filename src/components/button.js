import React from "react";
import "./button.css";

const SearchButton = ({ textArea }) => {
	return (
		<div>
			<a href={`https://www.google.com/search?&q=${textArea}`}>
				<button className="search-button">Click to search</button>
			</a>
		</div>
	);
};

export default SearchButton;
