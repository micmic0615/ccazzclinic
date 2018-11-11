import React, { Component, Fragment } from 'react';
import './style.scss';

import Button from "Elements/Button/";
import isMobile from "Assets/scripts/isMobile";

import { read, email } from "Services/crud"

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			banner_list: [],
			contact_mobile: "",
			contact_email: "",
			clinic_schedule: [],


			form_name: "",
			form_email: "",
			form_contact: "",
			form_message: "",
			form_submitted: false,
			form_submitting: false,
			form_submit_message: "",

			form_success: false,
			loaded: false
		};

	
	}

	componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: "contact_us"}}).then((result)=>{
			if (!_.isEmptyArray(result)){
				this.setState({
					banner_list: result[0].content.banner_list,
					contact_mobile: result[0].content.contact_mobile,
					contact_email: result[0].content.contact_email,
					clinic_schedule: result[0].content.clinic_schedule,
					loaded: true
				})
			}
		})
	}

	submitEmail = ()=>{

		if (
			!this.state.form_submitting &&
			!_.isEmptyString(this.state.form_name) &&
			!_.isEmptyString(this.state.form_email) &&
			!_.isEmptyString(this.state.form_contact) &&
			!_.isEmptyString(this.state.form_message) 
		){
			let is_number = _.isFinite(parseInt(this.state.form_contact));
			let is_email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.form_email);

			let errors = [];

			if (!is_number){errors.push("Contact number is invalid.")};
			if (!is_email){errors.push("Email address is invalid.")};
			
			

			if (_.isEmptyArray(errors)){
				this.setState({form_submitting: true}, ()=>{
					email({
						name: this.state.form_name,
						email: this.state.form_email,
						contact: this.state.form_contact,
						message: this.state.form_message,
					}).then((result)=>{
						this.setState({form_submitted: true, form_submitting: false, form_success: true, form_submit_message: <Fragment> Message <br/>Succesfully Sent </Fragment>})
					}).catch((err)=>{
						this.setState({form_submitted: true, form_submitting: false, form_submit_message: <Fragment>Something went wrong <br/> {"Code: " + err.code + ", "+ err.responseCode}</Fragment>})
					})
				})
			} else {
				this.setState({
					form_submitted: true,
					form_submitting: false,
					form_submit_message: <Fragment>
						{errors.map((err, index)=>{
							return <div key={index + "err"}>{err}</div>
						})}
					</Fragment>
				})
			}
		}
	}

	render() {
		return (<div className="page_contact_us">
			<div className="banner" >
				<div className="mask">
					<div className="canvas" style={{width: (this.state.banner_list.length*100) + "%", left: (this.state.banner_active*-100) + "%"}}>
						{(()=>{
							return this.state.banner_list.map((banner_item)=>{
								return <div className="slide" style={{backgroundImage: "url("+_.imgPath(banner_item.image)+")"}}>
									<div className="content_container">
										<div className="featured">
											<div className="title f_neuzeitheavy">{banner_item.title}</div>
											<div className="featured_text f_opensans">{banner_item.text}</div>
										</div>
									</div>
								</div>
							});							
						})()}
					</div>
				</div>
			</div>
			
			<div className="section">
				<div className="content_container">
					<div className="segment">
						<div className="contact_box">
							<div className="berring" style={{left: "20px"}}><img src={_.imgPath("/img/contact-us-pearl.png")} alt=""  /></div>
							<div className="berring" style={{right: "20px"}}><img src={_.imgPath("/img/contact-us-pearl.png")} alt=""  /></div>
							<Button className="sz_small cl_light">
								Official Contact Info
							</Button>

							<div className="details f_neuzeitheavy" style={{marginTop:"20px"}}>
								<img src={_.imgPath("/img/icons/ztan_mobile.png")} alt=""  />
								<div>{this.state.contact_mobile}</div>
							</div>

							<div className="details f_neuzeitheavy" style={{marginTop:"0px"}}>
								<img src={_.imgPath("/img/icons/ztan_email.png")} alt=""  />
								<div>{this.state.contact_email}</div>
							</div>
						</div>
						<div className="form_box">
							<input type="text" placeholder="* Your Name" value={this.state.form_name} onChange={(e)=>{this.setState({form_name:e.target.value})}}/>

							<input type="text" placeholder="* E-mail Address" value={this.state.form_email} onChange={(e)=>{this.setState({form_email:e.target.value})}}/>

							<input type="text" placeholder="* Contact No." value={this.state.form_contact} onChange={(e)=>{this.setState({form_contact:e.target.value})}}/>

							<textarea type="text" placeholder="* Message" value={this.state.form_message} onChange={(e)=>{this.setState({form_message:e.target.value})}}/>

							<div className="required"><i>*required fields</i></div>

							<Button className="sz_large cl_dark" onClick={this.submitEmail}>
								SEND MESSAGE
							</Button>

							<div className="clip">
								<img src={_.imgPath("/img/contact-us-clip.png")} alt=""  />
							
							</div>

							<div className="form_success" style={{display: this.state.form_submitted ? "flex" : "none"}} onClick={()=>{
								if (this.state.form_success){
									this.setState({
										form_name: "",
										form_email: "",
										form_contact: "",
										form_message: "",
										form_submitted: false,
									})
								} else {
									this.setState({
										form_submitted: false,
									})
								}
							}}>
								<div className="success_box">
									<img src={_.imgPath("/img/check.png")} alt="" className="success_check" style={{display: this.state.form_success ? "inline": "none"}}/>
									<div className="success_notif f_neuzeitheavy">{this.state.form_submit_message}</div>
								</div>
							</div>

							<div className="form_success" style={{display: this.state.form_submitting ? "flex" : "none"}}>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<img src={_.imgPath("/img/contact_side.png")} alt="" className="bg_section" style={!isMobile ? {left: "0px"} : {right: "0px"}}/>

				<div className="content_container">
					<div className="segment" style={{justifyContent: "flex-end"}}>
						<div className="clinic_schedule">
							<div className="title f_neuzeitheavy">Clinic Schedule</div>

							{this.state.clinic_schedule.map((item, index)=>{
								return <div className="schedule f_neuzeitheavy" key={index + "clinic_schedule"}>
									<div className="clinic_name">{item[0]}</div>

									<div className="clinic_details">
										<img src={_.imgPath("/img/icons/ztan_location.png")} alt=""  />
										<div>{item[1]}</div>
									</div>

									<div className="clinic_details">
										<img src={_.imgPath("/img/icons/ztan_door.png")} alt=""  />
										<div>{item[2]}</div>
									</div>

									<div className="clinic_details" style={{marginTop:"5px"}}>
										<img src={_.imgPath("/img/icons/ztan_landline.png")} alt=""  style={{position: "relative", top:" -8px"}} />
										<div style={{alignItems:"flex-start"}}><span>Tel:</span> <pre style={{margin: "0px", marginLeft:"5px"}}>{item[3].split(",").join("\n")}</pre></div>
									</div>

									<div className="clinic_details">
										<img src={_.imgPath("/img/icons/ztan_calendar.png")} alt=""  />
										<div>{item[4]}</div>
									</div>
								</div>
							})}
						</div>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Home;