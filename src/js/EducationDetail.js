import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class EducationDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			educationData: [{
				school: "AMA Computer College",
				address: "Magsaysay Ave. Naga City",
				year: 2015
			},{
				school: "Camarines Sur National High School",
				address: "Peñafrancia Ave. Naga City",
				year: 2011
			},{
				school: "Concepcion Grande Elementary School",
				address: "Magsaysay Ave. Naga City",
				year: 2007
			}]
		}
	}

	render() {
		const educationList = this.state.educationData.map((data, i) => {
			const {school, address, year } = data;
			return (
				<Education school={school} address={address} year={year} key={i} />
			);
		});

		return (
			<div>
		      <div className="row">
		        <div className="col s12 m12">
		          <div className="card blue lighten-5">
		            <div className="card-content">
		              <span className="card-title">Education Detail</span>
		              <ul className="collection">
		              	{ educationList }
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
			</div>
		);
	}
}

class Education extends Component {
	render() {
		return(
			<li className="collection-item">
				<span className="title">{ this.props.school }</span>
				<span className="secondary-content">{ this.props.year }</span>
				<p>{ this.props.address }</p>
			</li>
		);
	}
}
