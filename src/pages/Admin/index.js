import React, { Component, Fragment } from 'react';
import './style.scss';

import Button from "Elements/Button/";
// import Featured from "Elements/Featured/";
// import Banner from "Elements/Banner/";
// import isMobile from "Assets/scripts/isMobile";

import Login from './login';
import { validateToken, login, logout } from "Services/auth.js";
import ContentHome from "./pages/home";
import ContentOurServices from "./pages/our_services";
import ContentOurMohs from "./pages/mohs_surgery"
import ContentTheDoctors from "./pages/the_doctors"
import ContentDocCynthia from "./pages/doc_cynthia"
import ContentDocZuriel from "./pages/doc_zuriel"


class Admin extends Component {
	constructor(props){
		super(props);

		this.pages = [
			{name: "home", component: ContentHome},
			{name: "our_services", component: ContentOurServices},
			{name: "mohs_surgery", component: ContentOurMohs},
			{name: "the_doctors", component: ContentTheDoctors},
			{name: "dr_cynthia_tan", component: ContentDocCynthia},
			{name: "dr_zuriel_tan", component: ContentDocZuriel},
			{name: "contact_us", component: ContentHome},
		]

		this.state = {
			logged_in: null,
			selected_page: localStorage.getItem("CCAZZ_ADMIN_CURRENT_PAGE") || this.pages[0].name
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
		let ComponentContent = this.pages.find(p => (p.name == this.state.selected_page)).component 
		return (<Fragment>
			{!_.isNil(this.state.logged_in) ? (this.state.logged_in != true ? <Login successLogin={this.successLogin} /> : <div className="page_admin">
				<div className="admin_header">
					{this.pages.map((item, index)=>{
						return <Button 
							key={index+"page_button"} 
							className={item.name == this.state.selected_page ?  "sz_small cl_pink br_square" : "sz_small cl_dark br_square"}
							onClick={()=>{
								localStorage.setItem("CCAZZ_ADMIN_CURRENT_PAGE", item.name)
								this.setState({selected_page: item.name})
							}}
						> {item.name.replace("_", " ").toUpperCase()} </Button>
					})}

					<Button 
						className={"sz_small cl_dark br_square"}
						style={{position: "absolute", top: "0px", right:"0px"}}
						onClick={()=>{
							logout()
						}}
					> Logout </Button>
				</div>

				<div className="admin_content">
					<ComponentContent />
				</div>
				

			</div>) : null}
		</Fragment>)
	}
}

export default Admin;