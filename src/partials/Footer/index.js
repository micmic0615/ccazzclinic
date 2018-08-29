import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div className="footer f_cutive">
			<div className="content_container">
				<div className="caption">
					Grey Matter Cap - A social network for parents
				</div>

				<div className="links">
					<ul>
						<li>Mission</li>
						<li>Stories</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>

			<div className="footnote">
				A Grey Matter Capital Company. 2018 | Terms of use | Privacy Policy
			</div>
		</div>)
	}
}

export default Footer;