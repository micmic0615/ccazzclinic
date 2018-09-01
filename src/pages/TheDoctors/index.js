import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/"
import Banner from "Elements/Banner/"


class TheDoctors extends Component {
	constructor(props){
		super(props);

		this.banner_list = [
			{
				image: "/img/the_doctors_banner_1.jpg",
				title: "The Doctors",
				text: "We at CCAZZ strive to give the best of our abilities, skills, talents, and time in providing our services to our patients in order to achieve near perfection. We aim to achieve an enhanced but natural look for our patients, without sacrificing his distinct personality and unique features. ",
			},
		];

		this.treatment_list = [
			{
				image: "/img/doctor_1.png",
				title: `Dr. Cynthia P. Ciriaco-Tan \n M.D., F.P.D.S.`,
				subtitle: "Dermatology and Mohs Micrographic (Skin Cancer) and Dermatologic Surgery",
				text: "Dr. Cynthia P. Ciriaco-Tan is currently the Head of the Department of Dermatology of St. Luke’s Medical Center in Quezon City, and the Head of the Mohs Unit of the Dermatology Center of St. Luke’s Medical Center in Quezon City and Global City.",
				link: "/doc"
			},
			{
				image: "/img/doctor_2.png",
				title: `Dr. Zuriel K. Tan \n M.D., F.P.S.C.S.`,
				subtitle: "Plastic, Cosmetic, and General Surgery",
				text: "Dr. Zuriel K. Tan is a cosmetic surgeon with more than 30 years of experience in the field. He is currently a consultant at Mary Johnston Hospital.",
				link: "/doc"
			},
			
		]
	}

	render() {
		return (<div className="page_the_doctos">
			<Banner images={this.banner_list} />
			
			<div className="section">
				<div className="content_container">
					

					<div className="segment">
						<div className="title f_neuzeitheavy">
							The Skin Expert Powerhouse
						</div>
					</div>

					<div className="segment column">
						{(()=>{
							return this.treatment_list.map((treatment_item)=>{
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

									<Button className="sz_large cl_dark">View Profile</Button>
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