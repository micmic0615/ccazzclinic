import React, { Component } from 'react';
import '../style.css';
import Categories from 'Constants/categories.js';

import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props){
		super(props);

		this.scroll_limit = 0;
		this.scroll_target = 0;
		this.scroll_current = 0;

		this.state = {
			active_category: "school",
			sticky_scroller: false
		}

		this.scrollInit = ()=>{
			let header_banner = document.getElementById('header_banner')
			if (window.scrollY >= header_banner.offsetHeight + header_banner.offsetTop){
				if (!this.state.sticky_scroller){this.setState({sticky_scroller: true})}
			} else {
				if (this.state.sticky_scroller){this.setState({sticky_scroller: false})}
			}
		}
		
		this.scrollFunction = ()=>{
			let fps = 1000/60;
			let step_height = (this.scroll_target - this.scroll_current) * 0.1;
			if (Math.abs(window.scrollY - this.scroll_target) > Math.abs(step_height * 2) && this.scroll_limit > 0){
				this.scroll_limit--;
				window.scrollTo(0, window.scrollY + step_height);
				setTimeout(()=>{
					this.scrollFunction()
				}, fps)
			} else {
				window.scrollTo(0, this.scroll_target);
			}
		}

		this.activate = (category)=>{
			this.setState({active_category: category}, ()=>{
				let category_div = document.getElementById(category+"_row");
				this.scroll_limit = 10;
				this.scroll_current = window.scrollY;
				this.scroll_target = category_div.offsetTop - 56;
				this.scrollFunction()
			})
		}

		this.componentDidMount = ()=>{
			window.addEventListener("scroll", this.scrollInit)
		}

		this.componentWillUnmount = ()=>{
			window.removeEventListener("scroll", this.scrollInit)
		}
	}
	render() {
		return (<div className="header">
			<div className="band">
				<Link to={"/"} className="f_cutive">GREY MATTER CAP</Link>
			</div>
			<div className="banner" id="header_banner">
				<div className="banner_content">
					<div className="banner_caption f_cutive">TAKE CONTROL OF YOUR CHILD'S EDUCATION</div>
					<div className="main_button f_oswald">Parents, start here</div>
					<div className="main_button f_oswald">Students, start here</div>
				</div>
			</div>
			<div className="scrollPadding" style={{display: this.state.sticky_scroller ? "block" : "none"}}></div>
			<div className="scroller" style={{position: this.state.sticky_scroller ? "fixed" : "relative"}}>
				<div className="content_container">
					{Object.keys(Categories).map((category, index)=>{
						return <div key={index + "_one"} className={"category f_cutive " + ((category == this.state.active_category) ? "active" : "")} onClick={()=>{this.activate(category)}}>
							{_.startCase(category)}
						</div>
					})}
				</div>
			</div>
			
		</div>)
	}
}

export default Header;