import React, { Component, Fragment } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Navigation from 'Constants/navigation.js';
import isMobile from "Assets/scripts/isMobile";

class Footer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div className="footer">
			<div className="footer_content">
				<img src={_.imgPath("/img/footer_curve.png")} alt="" className="bg_img" />
				<div className="content_container">
					<div className="link_list">
						<div className="logo">
							<img src={_.imgPath("/img/logo_main.png")} alt=""/>
						</div>
						<div className="nav_1">
							{isMobile ? null : <Fragment>
								<div className="item_1"></div>
								<div className="item_1"></div>
							</Fragment>}
							{Navigation.map((nav_item)=>{
								return <div className="item_1 f_neuzeit">
									<div className="index_1">
										<Link to={nav_item.link}>{nav_item.name}</Link>
										{(()=>{
											if (!_.isEmptyArray(nav_item.children)){
												return <div className="nav_2">
													{nav_item.children.map((nav_child)=>{
														return <div className="item_2">
															<Link className="index_2" to={nav_item.link + nav_child.link}>{nav_child.name}</Link>
														</div>
													})}
												</div>
											}
										})()}
									</div>
									
								</div>
							})}
						</div>
					</div>
					
					<div className="streak">
						<div className="grd_gold_streak"></div>
					</div>
					<div className="reserved_rights">
						© All Rights Reserved 2018. Drs. Cynthia & Zuriel Tan and Associates
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Footer;