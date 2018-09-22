import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/";
import Banner from "Elements/Banner/";
import isMobile from "Assets/scripts/isMobile";


class Home extends Component {
	constructor(props){
		super(props);

		this.banner_list = [
			{
				image: "/img/mohs_banner_1.jpg",
			},
		];

		this.recurrent_tumors = [
			"Tumors with indistinct clinical margins",
			"Tumors in locations noted for frequent recurrence (around the eyes, nose, ears, temple, and scalp)",
			"Tumors in young women",
			"Tumors for which conservation of tissue is important"
		]

		this.eyelid_tumors = [
			"Tumors on fingers/toes",
			"Tumors on penis",
			"Tumors that may require complex surgical repairs or that are likely to have poor cosmetic result after traditional treatments (particularly on the nose and ear area)",
		]

		this.specific_tumors_1 = [
			"Basal Cell Carcinoma",
			"Atypical Fibroxanthoma",
			"Squamous Cell Carcinoma",
			"Keratoacanthoma",
			"Dermatofibrosarcoma Protruberas",
			"Granular Cell Tumor",
			"Merkel Cell Carcinoma",
			"Bowen’s Diseases",
			"Verrucous Carcinoma",
			"Erythroplasia of Queyrat",
			"Malignant Fibroshistiocytoma",
			"Microcystic Adnexal Carcinoma"
		]

		this.specific_tumors_2 = [
			"Cylindromas",
			"Adenocystic Carcinoma",
			"Nevus Sebaceous",
			"Extrammammary Paget’s Disease",
			"Eccrine Poroma",
			"Leiomyosarcoma",
			"Sebaceous Carcinoma",
			"Hemangiosarcoma",
			"Lentigo Maligna",
			"Amelanotic Melanoma",
			"Melanoma"
		]

		this.other_diseases = [
			"Basal Cell Nevus Syndrome",
			"Xeroderma Pigmentosum",
			"Bloom’s Syndrome",
			"Previous trauma (burn/vaccination)",
			"Gangrene",
		]
	}

	render() {
		return (<div className="page_child_services">
			<Banner images={this.banner_list} style={isMobile ? {height:"290px"} : {}} />
			
			<div className="section">
				<div className="content_container" >
					<div className="preface">
						<div className="title f_neuzeit">MOHS Micrographic Surgery (MMS)</div>

						<div className="subtitle f_neuzeitheavy">The best treatment for skin cancer</div>

						<div className="text f_opensans">
							<p>	<b>SKIN CANCER</b> is one of the most prevalent cancers among Caucasians. However, with the thinning ozone layer, changing lifestyles, fondness of recreational activities under the sun, and changes in the manner of dressing, skin cancer is becoming more and more common even among Asian counterparts. Yet, most people perceive the disease to be less serious until it poses a threat to life or destroys vital structures of the body.</p>

							<p><b>Mohs Micrographic Surgery (MMS)</b> offers the highest cure rate for most cases of skin cancer. It is the microscopically-controlled excision of skin cancer. The procedure involves the excision of abnormal tissue in successive layers and microscopically scanning the entire undersurface of each layer through the systematic use of horizontally-cut frozen sections.</p>
						</div>

						<div className="image">
							<img src={_.imgPath("/img/moh_illustration.png")} alt=""/>
						</div>

						<div className="text f_opensans">
							<p>The method of MMS includes color-coding of excised specimens with tissue dyes, accurate orientation of excised tissue through construction of tissue maps, and microscopic examination of horizontal frozen sections. In doing so, all tumor extensions are pursued until the field is negative for malignancy. The main advantage of MMS is a higher cure rate for skin cancer than any other method due to the precise and complete removal of the tumor, maximum conservation of normal tissue, and preservation of important anatomic structures.</p>

							<p>The indications for MMS should be clear to both doctors and patients. It is indicated for recurrent tumors, tumors with a high likelihood of recurrence, tumors with indistinct visual margins, and tumors that may require disfiguring surgery.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="section" style={{backgroundImage: "url("+_.imgPath("/img/moh_indication_bg.png")+")", backgroundSize: isMobile ? "200% 100%" : "100% 100%", backgroundPosition:  isMobile ? "center" : "", padding: "40px 0px"}}>
				<div className="content_container" >
					<div className="indication">
						<div className="title f_neuzeit">INDICATIONS FOR MOHS SURGERY</div>

						<div className="subtitle f_neuzeitheavy">Tumors with high recurrence rates following traditional treatment:</div>

						<div className="indication_rows">
							<div className="service_column">
								<div className="service_title f_neuzeitheavy">
									<b>Recurrent Tumors:</b>
								</div>

								<ul className="service_list f_opensans">
									{this.recurrent_tumors.map((item)=>{return <li>{item}</li>})}
								</ul>
							</div>

							<div className="service_column">
								<div className="service_title f_neuzeitheavy">
									<b>Eyelid Tumors:</b>
								</div>

								<ul className="service_list f_opensans">
									{this.eyelid_tumors.map((item)=>{return <li>{item}</li>})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="content_container" >
					<div className="others">
						<div className="title f_neuzeitheavy">SPECIFIC TUMORS AMENABLE TO MMS</div>

						<div className="other_rows">
							<div className="service_column">
								<div className="service_list f_opensans">
									{this.specific_tumors_1.map((item)=>{return <p>{item}</p>})}
								</div>
							</div>

							<div className="service_column">
								<div className="service_list f_opensans">
									{this.specific_tumors_2.map((item)=>{return <p>{item}</p>})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="content_container" >
					<div className="others">
						<div className="title f_neuzeitheavy">OTHER DISEASES AMENABLE TO MMS</div>

						<div className="single_column_list">
							{this.other_diseases.map((item)=>{return <p>{item}</p>})}
						</div>

						<div className="paragraph">
							<p>	The Mohs surgeon performs the roles ordinarily performed by several different specialists in treating a patient with skin cancer. However, in dealing with unusually complicated tumors, the Mohs surgeon may work in conjunction with another specialist, such as an otolaryngologist, oculoplastic surgeon, or plastic surgeon.</p>
						</div>

						<Button  className="sz_extralarge cl_pink">
							Have a question for our doctors? <b style={{marginLeft:"10px"}}>SEND US A MESSAGE</b>
						</Button>
					</div>
				</div>
			</div>
			
		</div>)
	}
}

export default Home;