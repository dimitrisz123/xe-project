import React from "react";
import "./App.css";
import SearchBar from "./components/search";
import Results from "./components/results";
import SearchButton from "./components/button";
import logo from "./image/image1.png";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: "",
			results: null
		};
	}

	apiCall = () => {
		fetch(
			`http://35.180.182.8/Search?keywords=${
				this.state.search
			}&language=${navigator.userLanguage ||
				navigator.language.split("-")[0]}&limit=20`
		)
			.then(res => res.json())
			.then(data => this.setState({ results: data }));
	};

	setTextArea = text => {
		this.setState({ search: text });
	};

	searchChangeHandler = text => {
		this.setState({ search: text });
		this.apiCall();
	};

	render() {
		const { search, results } = this.state;
		return (
			<div className="app">
				<img src={logo} alt={logo} width="auto" height="150px" />
				<div className="app-inner">
					<h2>What place are you looking for?</h2>
					<SearchBar
						value={search}
						searchChangeHandler={this.searchChangeHandler}
					/>

					{results && (
						<Results
							results={results}
							setTextArea={this.setTextArea}
						/>
					)}
					<SearchButton textArea={this.state.search} />
				</div>
			</div>
		);
	}
}

export default App;
