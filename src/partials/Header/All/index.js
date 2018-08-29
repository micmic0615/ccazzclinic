import React, { Component } from 'react';
import '../style.css';
import Categories from 'Constants/categories.js'

import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props);
		let route_path = this.props.route.location.pathname.split("/");
		this.current_category = route_path[1];
		this.state = {}
	}
	render() {
		return (<div className="header">
			<div className="band">
				<Link to={"/"} className="f_cutive">GREY MATTER CAP</Link>
			</div>
		
			<div className="scroller" style={{position: "relative"}}>
				<div className="content_container">
					{Object.keys(Categories).map((category, index)=>{
						return <Link to={"/"+category} key={index + "_one"} className={"category f_cutive " + ((category == this.current_category) ? "active" : "")} >
							{_.startCase(category)}
						</Link>
					})}
				</div>
			</div>
		</div>)
	}
}

export default Header;