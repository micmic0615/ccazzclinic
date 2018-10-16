import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/";
import Banner from "Elements/Banner/";
import isMobile from "Assets/scripts/isMobile";
import { read } from "Services/crud"

class TheDoctors extends Component {
	constructor(props){
		super(props);

		this.state = {
			banner_list: [],
			the_doctors: []
		}
	}

	componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: "the_doctors"}}).then((result)=>{
			if (!_.isEmptyArray(result)){
				this.setState({
					banner_list: result[0].content.banner_list,
					the_doctors: result[0].content.the_doctors,
					loaded: true
				})
			}
		})
	}

	render() {
		return (<div className="page_the_doctos">
			<Banner 
				images={this.state.banner_list} 
				style={isMobile ? {height:"290px"} : {}}
				featuredStyle={isMobile ? {position: "absolute", bottom:"-20px"} : {}}
			/>
			
			<div className="section">
				<div className="content_container">
					<div className="segment">
						<div className="title f_neuzeitheavy">
							The Skin Expert Powerhouse
						</div>
					</div>

					<div className="segment column">
						{(()=>{
							return this.state.the_doctors.map((treatment_item)=>{
								return <div className="treatment">
									<div className="vector">
										<img src={_.imgPath(treatment_item.image)} alt=""  />
									</div>
		
									<div className="treatment_title f_neuzeitheavy">
										<pre>{treatment_item.title}</pre>
									</div>

									<div className="treatment_subtitle f_neuzeitheavy">
										{treatment_item.subtitle}
									</div>
		
									<div className="treatment_text f_opensans">
										{treatment_item.text}
									</div>

									<Button className="sz_large cl_dark" onClick={()=>{
										window.location.href = treatment_item.link
									}}>View Profile</Button>
								</div>
							})
						})()}
					</div>
				</div>
			</div>

		</div>)
	}
}

export default TheDoctors;