import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/"
import Featured from "Elements/Featured/"
import Banner from "Elements/Banner/"
import isMobile from "Assets/scripts/isMobile";

import { read } from "Services/crud"

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			banner_list: [],
			general_services: [],
			cosmetic_surgery: [],
			featured_one: {},
			loaded: false
		}
	}

	componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: "our_services"}}).then((result)=>{
			if (!_.isEmptyArray(result)){
				this.setState({
					banner_list: result[0].content.banner_list,
					general_services: result[0].content.general_services,
					cosmetic_surgery: result[0].content.cosmetic_surgery,
					featured_one: result[0].content.featured_one,
					loaded: true
				})
			}
		})
	}

	render() {
		return (<div className="page_services">
			<Banner 
				images={this.state.banner_list} 
				style={isMobile ? {height:"290px"} : {}}
				featuredStyle={isMobile ? {position: "absolute", bottom:"-20px"} : {}}
			/>
			
			<div className="section">
				<div className="content_container" style={isMobile ? {} : {flexDirection: "row"}}>
					<div className="service_column">
						<div className="service_title f_neuzeitheavy">
							<b>General Services</b>
						</div>

						<div className="service_list f_opensans">
							{this.state.general_services.map((item)=>{return <p>{item}</p>})}
						</div>
					</div>

					<div className="service_column">
						<div className="service_title f_neuzeitheavy">
							<b>Cosmetic Surgery Services</b>
						</div>

						<div className="service_list f_opensans">
							{this.state.cosmetic_surgery.map((item)=>{return <p>{item}</p>})}
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							Flagship Service
						</Button>
					</div>

					<img src={_.imgPath("/img/moh_illustration.png")} alt="" className="bg_section" />

					<div className="segment" style={{flexDirection:"row-reverse", justifyContent:"normal"}}>
						<Featured 
							style={isMobile ? {marginTop:"260px", marginBottom: "20px"} : {marginTop:"0px"}}
							title={this.state.featured_one.title}
							subtitle={this.state.featured_one.subtitle}
							text={this.state.featured_one.text}
							button={this.state.featured_one.button}
						/>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Home;