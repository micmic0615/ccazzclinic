import React, { Component } from 'react';
import './style.scss';

import Banner from "Elements/Banner/"
import Featured from "Elements/Featured/"
import ZurielTan from "./doctors/zuriel_tan.js";
import CynthiaCiriaco from "./doctors/cynthia_ciriaco.js";

class TheDoctors extends Component {
	constructor(props){
		super(props);

		this.banner_list = [
			{
				image: "/img/the_doctors_banner_1.jpg",
				title: "The Doctors",
				text: "The goal of our doctors is to provide the best service for our patients, we adhere to the principle that every patient is to be regarded as a unique individual in his own right and deserves no less than special and personalized attention.",
			},
		];

		console.log()
		if (this.props.route.location.pathname.includes("cynthia-p-ciriaco-tan")){
			CynthiaCiriaco.bind(this)();
		} else {
			ZurielTan.bind(this)();
		}
		
	}

	render() {
		return (<div className="page_the_doctos_child">
			<Banner images={this.banner_list} />
			
			<div className="section">
				<div className="content_container">
					<div className="bio_text">
						<Featured 
							title={this.featured.title}
							subtitle={this.featured.subtitle}
							text={this.featured.text}
							style={{marginBottom: "0px"}}
						/>
					</div>

					<div className="bio_image">
						<img src={_.imgPath(this.featured.image)} alt=""  />
					</div>
				</div>
			</div>

			<div className="section">
				<div className="content_container">
					<div className="position_tabs">
						<div className="position_header_container">
							{this.tab_positions.map((position)=>{
								return <div className={"position_header f_neuzeit " + ( this.state.current_tab == position.title ? "active" : "")} onClick={()=>{this.setState({current_tab:  position.title})}}>
									{position.title}
								</div>
							})}
						</div>

						<div className="position_content">
							{this.tab_positions.find(p => (p.title == this.state.current_tab)).list.map((position_item)=>{
								return <p className="position_text">
									<b>{position_item[0]}</b> <br/>
									<span>{position_item[1]}</span>
								</p>
							})}
						</div>
					</div>

					<div className="position_icon_list">
						{this.icon_positions.map((position_item)=>{
							let looper = 2;
							let loop_list = [];
							while(looper < position_item.length){
								loop_list.push(<span>{position_item[looper]} <br/></span>);
								looper++;
							}
							return <div className="position_column">
								<img src={_.imgPath(position_item[0])} alt=""  />

								<p>
									<b>{position_item[1]} <br/> </b>
									{loop_list}
								</p>
							</div>
						})}
					</div>
				</div>
			</div>
			
			<div className="section">
				<div className="content_container">
					<div className="logos_container">
						{this.logos.map((logo_list)=>{
							return <div className="logo_batch">
								<div className="logo_title">{logo_list.title}</div>
								<div className="logo_list">
									{logo_list.list.map((logo_item)=>{
										return <div className="logo_item">
											<img src={_.imgPath(logo_item[0])} alt=""  />
											<p>{logo_item[1]}</p>
										</div>
									})}
								</div>
							</div>
						})}
					</div>
				</div>
			</div>
		</div>)
	}
}

export default TheDoctors;