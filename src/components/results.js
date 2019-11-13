import React from "react";
import "./results.css";

const Results = ({ results, setTextArea, resultsWindowHandler }) => {
	console.log(results);
	return (
		<div className="autocomplete-items">
			{results.entries.map((result, i) => {
				return (
					<p
						className="results-inner"
						onClick={() => {
							setTextArea(result.name);
							resultsWindowHandler(false);
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
