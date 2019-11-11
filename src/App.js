import React from "react";
import "./App.css";
import SearchBar from "./components/search";
import Results from "./components/results";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: "",
			results: []
		};
	}

	/*	searchChangeHandler = async text => {
		this.setState({ search: text, results: null });
		const result = await searchAPIDebounced(text);
		console.log(result);
		this.setState({ result });
	};*/

	/*	<input
			onChange={e => {
				searchChangeHandler(e.target.value);
			}}
			value={value}
			placeholder="Enter location"
		/>*/

	apiCall = () => {
		fetch(
			`http://35.180.182.8/Search?keywords=${
				this.state.search
			}&language=en&limit=20`
		)
			.then(res => res.json())
			.then(data => this.setState({ results: data }));
	};

	searchChangeHandler = text => {
		this.setState({ search: text });
		this.apiCall();
	};

	render() {
		return (
			<div>
				<h1>What place are you looking for?</h1>
				<SearchBar
					value={this.state.search}
					searchChangeHandler={this.searchChangeHandler}
				/>
				<Results />
			</div>
		);
	}
}

export default App;
