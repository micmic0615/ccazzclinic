import React, { Component, Fragment } from 'react';
import './style.scss';

// import Button from "Elements/Button/";
// import Featured from "Elements/Featured/";
// import Banner from "Elements/Banner/";
// import isMobile from "Assets/scripts/isMobile";

import Login from './login';
import { validateToken, login } from "Services/auth.js"


class Admin extends Component {
	constructor(props){
		super(props);

		this.state = {
			logged_in: null,
		}
	}

	componentDidMount = ()=>{
		validateToken((err, user)=>{
			if (_.isNil(err)){
				this.setState({logged_in: true})
			} else {
				this.setState({logged_in: false})
			}
		})
	}

	successLogin = (username, password)=>{
		login(username, password)
	}

	render() {
		return (<Fragment>
			{!_.isNil(this.state.logged_in) ? (this.state.logged_in != true ? <Login successLogin={this.successLogin} /> : <div className="page_admin">
				
			</div>) : null}
		</Fragment>)
	}
}

export default Admin;