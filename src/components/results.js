import React from "react";
import "./results.css";

const Results = ({ results, setTextArea }) => {
	console.log(results);
	return (
		<div className="autocomplete-items">
			{results.entries.map((result, i) => {
				return (
					<p
						onClick={() => {
							setTextArea(result.name);
						}}
						key={i}
					>
						{result.name}
					</p>
				);
			})}
		</div>
	);
};

export default Results;
