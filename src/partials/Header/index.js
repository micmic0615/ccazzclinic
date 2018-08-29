import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Navigation from 'Constants/navigation.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons'



class Header extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div className="header">
			<div className="curve">
				<img src={_.imgPath("/img/header_curve.png")} alt="" className="bg_img" />

				<div className="content_container">
					<div className="logo">
						<img src={_.imgPath("/img/logo_main.png")} alt=""/>
					</div>

					<div className="nav_1">
						<div className="item_1"></div>
						<div className="item_1"></div>
						{Navigation.map((nav_item)=>{
							return <div className="item_1 f_neuzeit">
								<Link className="index_1" to={nav_item.link}>{nav_item.name} {!_.isEmptyArray(nav_item.children) ? <FontAwesomeIcon icon={faChevronDown}/> : ""} </Link>

								{(()=>{
									if (!_.isEmptyArray(nav_item.children)){
										return <div className="nav_2 grd_purple_75">
											{nav_item.children.map((nav_child)=>{
												return <div className="item_2">
													<Link className="index_2" to={nav_item.link + nav_child.link}>{nav_child.name}</Link>
												</div>
											})}
										</div>
									}
								})()}
							</div>
						})}

						
					</div>
				</div>
			</div>

			<div className="band">
				<div className="content_container">
					<FontAwesomeIcon icon={faPhone}/> (+632) 917 832 7181
				</div>
			</div>
		</div>)
	}
}

export default Header;