import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/"
import Featured from "Elements/Featured/"
import Banner from "Elements/Banner/"
import isMobile from "Assets/scripts/isMobile";

class Home extends Component {
	constructor(props){
		super(props);

		this.banner_list = [
			{
				image: "/img/our_services_banner_1.jpg",
				title: "Our Services",
				text: "We aim to provide the best but affordable service, giving each patient special and personalized attention, and adhering to the principle of privileged communication.",
			},
		];

		this.general_services = [
			"Mohs Micrographic Surgery (Skin Cancer Surgery)",
			"Sclerotherapy (Leg Vein Removal)",
			"Botulinum Toxin (Botox) and Filler Injection",
			"Laser Treatment for melasma, birthmarks, tattoo, & hair removal",
			"Radiofrequency",
			"Acne Treatment",
			"Scars / Keloid Treatment",
			"Skin & Nail Biopsy",
			"Removal of warts, syringoma, etc.",
			"Chemical Peeling",
			"Bleaching",
			"Contact Dermatitis Treatment",
			"Diagnosis & Treatment of all Dermatologic Diseases(skin, hair, & nails)"
		]

		this.cosmetic_surgery = [
			"Noselift / Nose Reduction",
			"Deep-set / Slit Eyes / Eyebag Removal",
			"Facelift / Temple Lift / Neck Tuck",
			"Liposuction / Lipectomy (Tummy Tuck) / Lipotransplant",
			"Breast Augmentation / Breast Reduction",
			"Cleft Chin & Augmentation",
			"Cleft Lip & Palate Repair",
			"Lip Reduction & Augmentation",
			"Ear Repair / Ear Tuck",
			"Dermabrasion",
			"Scar Revision",
			"Mole Removal",
			"Hair Transplant / Scalp Reduction",
			"Artificial Dimple",
			"Lipocurettage for Axillary Hyperhidrosis"
		]
	}

	render() {
		return (<div className="page_services">
			<Banner 
				images={this.banner_list} 
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
							{this.general_services.map((item)=>{return <p>{item}</p>})}
						</div>
					</div>

					<div className="service_column">
						<div className="service_title f_neuzeitheavy">
							<b>Cosmetic Surgery Services</b>
						</div>

						<div className="service_list f_opensans">
							{this.cosmetic_surgery.map((item)=>{return <p>{item}</p>})}
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
							title={"MOHS Micrographic Surgery (MMS)"}
							subtitle={"The best treatment for skin cancer"}
							text={"The modern MOHS surgeon performs the roles ordinarily performed by several different specialists in treating a patient with skin cancer. However, in dealing with unusually complicated tumors, the mohs surgeon may work in conjunction with another specialist, such as an otolaryngologist, oculoplastic surgeon, or plastic surgeon."}
							button={{
								text: "Learn More",
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