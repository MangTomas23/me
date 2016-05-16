import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import SummaryList from './SummaryList';
import EducationDetail from './EducationDetail';

class App extends Component {
	render() {
		return(
			<div>
				<NavBar />
				<div className="container">
					<SummaryList />
					<EducationDetail />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));