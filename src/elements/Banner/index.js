import React, { Component } from 'react';
import './style.scss';

import Featured from "Elements/Featured/";
import isMobile from "Assets/scripts/isMobile";


class Banner extends Component {
	constructor(props){
        super(props);

        this.state = {
			banner_active: 0
		}
    }

    autoRotateBanner = (images)=>{
        if (!_.isNil(this.autoRotateTimer)){clearTimeout(this.autoRotateTimer)};
        if (images.length > 1){
            this.autoRotateTimer = setTimeout(()=>{
                let auto_value = this.state.banner_active + 1;
                if (auto_value > images.length - 1){auto_value = 0}
                this.setState({banner_active: auto_value}, ()=>{this.autoRotateBanner(images)})
            }, 5000);
        }
    }

    componentDidMount = ()=>{
		this.autoRotateBanner(this.props.images)
    }
    
    componentWillReceiveProps = (props)=>{
        if (!_.isEqual(props.images, this.props.images)){
            this.autoRotateBanner(props.images)
        }
	}

    render() {
        return (<div className="banner" style={this.props.style || {}}>
            <div className="mask">
                <div className="canvas" style={{width: (Math.max(100, this.props.images.length*100)) + "%", left: (this.state.banner_active*-100) + "%"}}>
                    {(()=>{
                        return this.props.images.map((banner_item, index)=>{
                            return <div key={index+ "ban"} className="slide" style={{backgroundImage: "url("+_.imgPath(banner_item.image)+")"}}>
                                <div className="content_container">
                                    <Featured 
                                        title={banner_item.title}
                                        text={banner_item.text}
                                        button={banner_item.button}
                                        style={this.props.featuredStyle || {}}
                                    />
                                </div>
                            </div>
                        });							
                    })()}
                </div>

                <div className="slide_btn_container" style={{display: this.props.images.length > 1 ? "flex" : "none"}}>
                    {(()=>{
                        return this.props.images.map((banner_item, index)=>{
                            return 	<div key={index + "banit"} className={"slide_btn " + (index == this.state.banner_active ? "active" : "")} onClick={()=>{this.setState({banner_active: index})}}></div>
                        });							
                    })()}
                </div>
            </div>
        </div>)
    }
}

export default Banner