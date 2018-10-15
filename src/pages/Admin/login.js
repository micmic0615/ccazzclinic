import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/";

class Admin extends Component {
	constructor(props){
        super(props);
        
        this.state = {
            user: "",
            password: "" 
        }
    }
    
    onKeyDownEnter = (e)=>{
        if (e.keyCode == 13){
            this.props.successLogin(this.state.user, this.state.password)
        }
    } 

	render() {
		return (<div className="page_admin login">
            <b>LOGIN TO SITE EDITOR</b>
            <input type="text" placeholder="user" 
                onChange={(e)=>{this.setState({user: e.target.value})}}
                onKeyDown={this.onKeyDownEnter}
            />
            <input type="password" placeholder="password" 
                onChange={(e)=>{this.setState({password: e.target.value})}}
                onKeyDown={this.onKeyDownEnter}
            />
            <Button className={"sz_large cl_dark br_square"} onClick={()=>{this.props.successLogin(this.state.user, this.state.password)}}>SUBMIT</Button>
		</div>)
	}
}

export default Admin;