import React from "react";
import { DebounceInput } from "react-debounce-input";

const SearchBar = ({ searchChangeHandler, value }) => {
	return (
		<div>
			<DebounceInput
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
