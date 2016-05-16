import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SummaryList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			summaryList: [
				"Graduate of Bachelor of Science in Information " +
				"Technology from AMA Computer College and having overall " +
				"5 years of extensive experience in developing software.",
				"Software developer having great experience with all the stages " +
				"of System Development Life Cycle including designing, developing, " +
				"testing and rolling complex software.",
				"Result oriented, self-driven, highly motivated, smart and hungry " + 
				"to learn new technologies, methodologies, strategies and processes."
			]
		};
	}

	render() {
		const summary = this.state.summaryList.map((text, i) => {
			return (
		        <Summary text={ text } key={i} />
			);
		});
		return (
			<div>
		      <div className="row">
		        <div className="col s12 m12">
		          <div className="card">
		            <div className="card-content">
		              <span className="card-title">Summary</span>
		              <ul className="collection">
		              	{ summary }
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
			</div>
		);
	}
}

class Summary extends Component {
	render() {
		return (
		    <li className="collection-item">{ this.props.text }</li>
		);
	}
}