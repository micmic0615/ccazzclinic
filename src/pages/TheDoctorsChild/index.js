import React, { Component } from 'react';
import './style.scss';

import Banner from "Elements/Banner/"
import Featured from "Elements/Featured/"
import isMobile from "Assets/scripts/isMobile";
import { read } from "Services/crud"

class TheDoctors extends Component {
	constructor(props){
		super(props);

		if (this.props.route.location.pathname.includes("cynthia-p-ciriaco-tan")){
			this.page_id = "dr_cynthia_tan"
		} else {
			this.page_id = "dr_zuriel_tan"
		}

		

		this.state = {
			banner_list: [],
			featured: {},
			current_positions: [],
			former_positions: [],
			icon_positions: [],
			member_of: [],
			affiliation: [],
			logos: []
		}
		
		
		this.logos_max = isMobile ? 2 : 5;
	}

	componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: this.page_id}}).then((result)=>{
			if (!_.isEmptyArray(result)){
				this.setState({
					banner_list: result[0].content.banner_list,
					featured: result[0].content.featured,
					current_positions: result[0].content.current_positions,
					former_positions: result[0].content.former_positions,
					icon_positions: result[0].content.icon_positions,
					member_of: result[0].content.member_of,
					affiliation: result[0].content.affiliation,

					current_tab: "current_positions",
					loaded: true
				}, ()=>{
					let logo_state = {
						
						"logos": [
							{
								title: "Member Of",
								list: [...this.state.member_of]
							},

							{
								title: "Hospital Affiliations",
								list: [...this.state.affiliation]
							},
							
						],
						"logo_Member Of": 0,
						"logo_Hospital Affiliations": 0,
					};

					this.setState(logo_state)
				})
			}
		})
	}

	render() {
		return (<div className="page_the_doctos_child">
			<Banner 
				images={this.state.banner_list}
				style={isMobile ? {height:"290px"} : {}}
				featuredStyle={isMobile ? {position: "absolute", bottom:"-20px"} : {}}
			/>
			
			<div className="section" style={isMobile ? {marginBottom: "0px"} : {}}>
				<div className="content_container">
					<div className="bio_text">
						<Featured 
							title={this.state.featured.title}
							subtitle={this.state.featured.subtitle}
							text={this.state.featured.text}
							style={isMobile ? {marginTop: "0px", marginBottom: "0px", paddingBottom:"0px"} :  {marginBottom: "0px"}}
						/>
					</div>

					<div className="bio_image">
						<img src={_.imgPath(this.state.featured.image)} alt=""  />
					</div>
				</div>
			</div>

			<div className="section">
				<div className="content_container">
					<div className="position_tabs">
						<div className="position_header_container">
							{/* {this.state.tab_positions.map((position)=>{
								return 
							})} */}

							<div className={"position_header f_neuzeit " + ( this.state.current_tab == "current_positions" ? "active" : "")} onClick={()=>{this.setState({current_tab:  "current_positions"})}}>
								{"Current Position"}
							</div>

							<div className={"position_header f_neuzeit " + ( this.state.current_tab == "former_positions" ? "active" : "")} onClick={()=>{this.setState({current_tab:  "former_positions"})}}>
								{"Former Position"}
							</div>
						</div>

						<div className="position_content">
							{(this.state.current_tab == "current_positions" ? this.state.current_positions : this.state.former_positions ).map((position_item)=>{
								return <p className="position_text">
									<b>{position_item[0]}</b> <br/>
									<span>{position_item[1]}</span>
								</p>
							})}
						</div>
					</div>

					<div className="position_icon_list">
						{this.state.icon_positions.map((position_item, index)=>{
							let looper = 1;
							let loop_list = [];
							while(looper < position_item.length){
								loop_list.push(<span>{position_item[looper]} <br/></span>);
								looper++;
							}
							return <div className="position_column">
								<img src={_.imgPath("/img/icons/ztan_"+(index+1)+".png")} alt=""  />

								<p>
									<b>{position_item[0]} <br/> </b>
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
						{this.state.logos.map((logo_list)=>{

							let logoSwitch = (value)=>{
								let state_obj = {};
								let key = "logo_"+logo_list.title
								state_obj[key] = this.state["logo_"+logo_list.title] + value;
								if (state_obj[key] <= 0 && state_obj[key] >= (logo_list.list.length - this.logos_max)*-140){
									this.setState(state_obj)
								}
							}

							return <div className="logo_batch">
								<div className="logo_title">{logo_list.title}</div>
								<div 
									className="logo_list"
									style={{
										maxWidth: isMobile ? "280px" : "700px",
										justifyContent: logo_list.list.length < this.logos_max ? "center" : "normal"
									}}
								>
									<div className="logo_canvas" style={{left: (this.state["logo_"+logo_list.title]) + "px"}}>
										{logo_list.list.map((logo_item)=>{
											return <div className="logo_item">
												<img src={_.imgPath(logo_item[0])} alt=""  />
												<p>{logo_item[1]}</p>
											</div>
										})}
									</div>
								</div>

								<div className="logo_arrows" style={{display: logo_list.list.length <= this.logos_max  ? "none" : "block"}}>
									<div className="logo_arrow left" onClick={()=>{logoSwitch(140)}}>
										<img src={_.imgPath("/img/icons/arrow.png")} alt=""/>
									</div>

									<div className="logo_arrow right" onClick={()=>{logoSwitch(-140)}}>
										<img src={_.imgPath("/img/icons/arrow.png")} alt=""/>
									</div>
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