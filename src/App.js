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
			results: null,
			showResultsWindow: false,
			searchButtonDisabled: true,
			limitResults: "20"
		};
	}

	componentDidMount() {
		if (window.screen.width <= 425) {
			this.setState({ limitResults: "10" });
		}
	}

	apiCall = () => {
		fetch(
			`http://35.180.182.8/Search?keywords=${
				this.state.search
			}&language=${navigator.userLanguage ||
				navigator.language.split("-")[0]}&limit=${
				this.state.limitResults
			}`
		)
			.then(res => res.json())
			.then(data =>
				this.setState({
					results: data,
					showResultsWindow: true
				})
			);
	};

	setTextArea = text => {
		this.setState({ search: text });
	};

	searchChangeHandler = text => {
		this.setState({ search: text });
		this.apiCall();
	};

	resultsWindowHandler = windowState => {
		this.setState({ showResultsWindow: windowState });
	};

	render() {
		const { search, results, showResultsWindow } = this.state;

		return (
			<div
				onClick={() => this.resultsWindowHandler(false)}
				className="app"
			>
				<img src={logo} alt={logo} width="150px" height="150px" />
				<div className="app-inner">
					<h2>What place are you looking for?</h2>
					<SearchBar
						value={search}
						searchChangeHandler={this.searchChangeHandler}
					/>

					{showResultsWindow && (
						<Results
							results={results}
							setTextArea={this.setTextArea}
							resultsWindowHandler={this.resultsWindowHandler}
						/>
					)}
					<SearchButton
						searchButtonDisabled={
							!this.state.results ||
							!this.state.results.entries[0]
								? true
								: false
						}
						textArea={search}
					/>
				</div>
			</div>
		);
	}
}

export default App;
