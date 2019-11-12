import React from "react";
import { DebounceInput } from "react-debounce-input";
import "./search.css";

const SearchBar = ({ searchChangeHandler, value }) => {
	return (
		<div>
			<DebounceInput
				className="input"
				value={value}
				minLength={1}
				debounceTimeout={500}
				onChange={e => {
					searchChangeHandler(e.target.value);
				}}
			/>
		</div>
	);
};

export default SearchBar;
