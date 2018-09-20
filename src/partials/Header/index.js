import React, { Component, Fragment } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Navigation from 'Constants/navigation.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import isMobile from "Assets/scripts/isMobile";


class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
			open_burger: false
		}
	}

	desktopNav = ()=>{
		return <div className="nav_1">
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
	}

	mobileNav = ()=>{
		return <div className="nav_m">
			<div className="burger" onClick={()=>{this.setState({open_burger: !this.state.open_burger})}}>
				<FontAwesomeIcon icon={this.state.open_burger ? faTimes : faBars}/> 
			</div>
		</div>
	}

	mobileMenu = ()=>{
		return <Fragment>
			<div className="mobile_menu" style={{display: this.state.open_burger ? "flex": "none"}} >
				{Navigation.map((nav_item, index)=>{
					return <Fragment>
						<div className="item_1 ">
							<Link className="index_1 f_neuzeit" to={nav_item.link} onClick={()=>{this.setState({open_burger:false})}}>{nav_item.name} </Link>

							{(()=>{
								if (!_.isEmptyArray(nav_item.children)){
									return <div className="nav_2">
										{nav_item.children.map((nav_child)=>{
											return <div className="item_2">
												<Link className="index_2 f_opensans" to={nav_item.link + nav_child.link} onClick={()=>{this.setState({open_burger:false})}}>{nav_child.name}</Link>
											</div>
										})}
									</div>
								}
							})()}
						</div>

						{index != Navigation.length - 1 ? <div className="fading_border"></div> : null}
					</Fragment>
				})}
			</div>

			<div className="mobile_menu_bg" style={{display: this.state.open_burger ? "flex": "none"}}></div>
		</Fragment>
	}

	render() {
		return (<div className="header">
			<div className="curve">
				<img src={_.imgPath("/img/header_curve.png")} alt="" className="bg_img" />

				<div className="content_container">
					<div className="logo">
						<img src={_.imgPath("/img/logo_main.png")} alt=""/>
					</div>

					{isMobile ? this.mobileNav() : this.desktopNav()}
				</div>
			</div>

			<div className="band">
				<div className="content_container">
					<FontAwesomeIcon icon={faPhone}/> <span>(+632) 917 832 7181</span>
				</div>
			</div>

			{isMobile ? this.mobileMenu() : null}
		</div>)
	}
}

export default Header;