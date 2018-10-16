import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/";
import Featured from "Elements/Featured/";
import Banner from "Elements/Banner/";
import isMobile from "Assets/scripts/isMobile";

import { read } from "Services/crud"

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			banner_list: [],
			treatment_list: [],
			featured_one: {},
			featured_two: {},
			loaded: false
		}
	}

	componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: "home"}}).then((result)=>{
			if (!_.isEmptyArray(result)){
				this.setState({
					banner_list: result[0].content.banner_list,
					treatment_list: result[0].content.treatment_list,
					featured_one: result[0].content.featured_one,
					featured_two: result[0].content.featured_two,
					loaded: true
				})
			}
		})
	}

	render() {
		return (<div className="page_home">
			<Banner 
				images={this.state.banner_list} 
				featuredStyle={isMobile ? {position: "absolute", bottom:"60px"} : {}}
			/>
			
			<div className="section">
				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							About
						</Button>
					</div>

					<div className="segment">
						<div className="title f_neuzeitheavy">
							Treating everyone the right way
						</div>
					</div>

					<div className="segment column">
						{(()=>{
							return this.state.treatment_list.map((treatment_item, index)=>{
								return <div key={index+"treatr"} className="treatment">
									<div className="vector">
										<img src={_.imgPath(treatment_item.image)} alt="" className="bg_img" />
									</div>
		
									<div className="treatment_title f_neuzeit">
										{treatment_item.title}
									</div>
		
									<div className="treatment_text f_opensans">
										{treatment_item.text}
									</div>
								</div>
							})
						})()}
					</div>
				</div>
			</div>

			<div className="section">
				<img src={_.imgPath("/img/home_leading_in_mohs.png")} alt="" className="bg_section" style={!isMobile ? {left: "0px"} : {right: "0px"}}/>

				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							Flagship Service
						</Button>
					</div>

						
					<div className="segment" style={{flexDirection:"row-reverse", justifyContent:"normal"}}>
						<Featured 
							title={<div style={isMobile ? {width:"100%", textAlign: "left", } : {}}>{this.state.featured_one.title}</div>}
							subtitle={this.state.featured_one.subtitle}
							text={this.state.featured_one.text}
							style={isMobile ? {marginTop: "460px", marginBottom:"20px"} : {}}
							button={this.state.featured_one.button}
						/>
					</div>
				</div>
			</div>

			<div className="section">
				<img src={_.imgPath("/img/home_keep_in_touch.png")} alt="" className="bg_section" style={!isMobile ? {right: "0px"} : {left: "0px"}}/>

				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							Contact Us
						</Button>
					</div>

					<div className="segment" style={{flexDirection:"row", justifyContent:"normal"}}>
						<Featured 
							title={<div style={isMobile ? {width:"100%", textAlign: "left", } : {}}>{this.state.featured_two.title}</div>}
							subtitle={this.state.featured_two.subtitle}
							text={this.state.featured_two.text}
							style={isMobile ? {marginTop: "400px", marginBottom:"20px"} :  {textAlign:"right"}}
							button={this.state.featured_two.button}
						/>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Home;