import React, { Component, Fragment } from 'react';
import './style.scss';

// import Button from "Elements/Button/";
// import Featured from "Elements/Featured/";
// import Banner from "Elements/Banner/";
// import isMobile from "Assets/scripts/isMobile";

import Login from './login';


class Admin extends Component {
	constructor(props){
		super(props);

		this.state = {
			logged_in: localStorage.getItem("CCAZZ_SESSION"),
		}
	}

	successLogin = (user, password)=>{
		console.log(user, password)
	}

	render() {
		return (<Fragment>
			{this.state.logged_in != "true" ? <Login successLogin={this.successLogin} /> : <div className="page_admin">
				
			</div>}
		</Fragment>)
	}
}

export default Admin;