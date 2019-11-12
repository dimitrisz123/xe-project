import React from "react";
import "./button.css";

const SearchButton = ({ textArea, searchButtonDisabled }) => {
	return (
		<div className="button-wrapper">
			<a href={`https://www.google.com/search?&q=${textArea}`}>
				<button
					disabled={searchButtonDisabled}
					className="search-button"
				>
					Click to search
				</button>
			</a>
		</div>
	);
};

export default SearchButton;
