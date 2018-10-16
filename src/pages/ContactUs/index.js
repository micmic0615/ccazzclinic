import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/"


class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			banner_list: [
				{
					image: "/img/contact-us-banner.jpg",
					title: "Contact Us",
					text: "Book an appointment today. Meet us soon so we can discuss your skin needs..",
				}
			],
			banner_active: 0
		};

		this.treatment_list = [
			{
				image: "/img/home_about_1.png",
				title: "The Best but Affordable Service",
				text: "We aim to provide world-class but affordable services to our patients, nothing less, giving the best of our abilities, skills, talents, and time."
			},
			{
				image: "/img/home_about_2.png",
				title: "Special and Personalized Attention",
				text: "We  adhere to the principle that every patient is to be regarded as a unique individual in his own right and deserves no less than special and personalized treatment."
			},
			{
				image: "/img/home_about_3.png",
				title: "Privileged Communication",
				text: "We value the sanctity of a contract between a patient and CCAZZ, and the principle of privileged communication. "
			}
		]
	
	}

	componentDidMount = ()=>{
		
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
				WORK IN PROGRESS
			</div>

			{/* <div className="section">
				<img src={_.imgPath("/img/home_leading_in_mohs.png")} alt="" className="bg_section" style={{left: "0px"}}/>

				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							Flagship Service
						</Button>
					</div>

					<div className="segment" style={{flexDirection:"row-reverse", justifyContent:"normal"}}>
						<div className="featured">
							<div className="title f_neuzeitheavy">
								Leading in MOHS Micrographic Surgery (MMS)
							</div>

							<div className="featured_subtitle f_neuzeit">
								The best treatment for skin cancer
							</div>

							<div className="featured_text f_opensans">
								Mohs Micrographic Surgery (MMS) offers the highest cure rate for most cases of skin cancer. It is the microscopically-controlled excision of skin cancer. 
							</div>

							<Button className="sz_large cl_dark">
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<img src={_.imgPath("/img/home_keep_in_touch.png")} alt="" className="bg_section" style={{right: "0px"}}/>

				<div className="content_container">
					<div className="segment">
						<Button className="sz_small cl_light">
							Contact Us
						</Button>
					</div>

					<div className="segment" style={{flexDirection:"row", justifyContent:"normal"}}>
						<div className="featured" style={{textAlign:"right"}}>
							<div className="title f_neuzeitheavy">
								Keep in touch
							</div>

							<div className="featured_subtitle f_neuzeit">
								Book an appointment today
							</div>

							<div className="featured_text f_opensans">
								Meet us soon so we can discuss your skin needs. See our schedules and clinic locations to book an appointment today.
							</div>

							<Button className="sz_large cl_dark" style={{float: "right"}}>
								Send Us A Message
							</Button>
						</div>
					</div>
				</div>
			</div> */}
		</div>)
	}
}

export default Home;