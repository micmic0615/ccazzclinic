import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/";
import Featured from "Elements/Featured/";
import Banner from "Elements/Banner/";
import isMobile from "Assets/scripts/isMobile";


class Home extends Component {
	constructor(props){
		super(props);

		this.banner_list = [
			{
				image: "/img/banner_1.jpg",
				title: "The doctors for your skin needs.",
				text: "CCAZZ CLINIC is your professional dermatologic, mohs micrographic, and cosmetic surgery center in the Philippines.",
				button: {
					text: "MEET THE DOCTORS",
					onClick: ()=>{}
				}
			},
			{
				image: "/img/banner_2.jpg",
				title: "Keep in touch, book an appointment today. ",
				text: "Meet us soon so we can discuss your skin needs. See our schedules and clinic locations to book an appointment today.",
				button: {
					text: "SEND US A MESSAGE",
					onClick: ()=>{}
				}
			},
			{
				image: "/img/banner_3.jpg",
				title: "Know about the best treatment for skin cancer.",
				text: "Mohs Micrographic Surgery (MMS) offers the highest cure rate for most cases of skin cancer. It is the microscopically-controlled excision of skin cancer. ",
				button: {
					text: "LEARN MORE",
					onClick: ()=>{}
				}
			},
		];

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

	render() {
		return (<div className="page_home">
			<Banner 
				images={this.banner_list} 
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
							return this.treatment_list.map((treatment_item)=>{
								return <div className="treatment">
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
							title={<div style={isMobile ? {width:"100%", textAlign: "left", } : {}}>{"Leading in MOHS Micrographic Surgery (MMS)"}</div>}
							subtitle={"The best treatment for skin cancer"}
							text={"Mohs Micrographic Surgery (MMS) offers the highest cure rate for most cases of skin cancer. It is the microscopically-controlled excision of skin cancer."}
							style={isMobile ? {marginTop: "460px", marginBottom:"20px"} : {}}
							button={{
								text: "Learn More",
								onClick: ()=>{
									
								}
							}}
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
							title={<div style={isMobile ? {width:"100%", textAlign: "left", } : {}}>{"Keep in touch"}</div>}
							subtitle={"Book an appointment today"}
							text={"Meet us soon so we can discuss your skin needs. See our schedules and clinic locations to book an appointment today."}
							style={isMobile ? {marginTop: "400px", marginBottom:"20px"} :  {textAlign:"right"}}
							button={{
								text: "Send Us A Message",
								onClick: ()=>{
									
								}
							}}
						/>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Home;