import React, { Component } from 'react';
import './style.css';

import Categories from 'Constants/categories.js';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props){
        super(props);

        let route_path = this.props.route.location.pathname.split("/");
        
        this.state = {
            current_category: route_path[1],
            secondary_category: (route_path[2] || Categories[route_path[1]].list[0]).toLowerCase()
        };

        this.componentDidMount = ()=>{
            let route_path = this.props.route.location.pathname.split("/");
            this.setState({secondary_category: (route_path[2] || Categories[route_path[1]].list[0]).toLowerCase()})
        }

        this.updateSecondaryCategory = (item)=>{
            this.setState({secondary_category: item.replace(" ", "_").toLowerCase()})
        }
	}

	render() {
		return (<div className="page_categories">
			<div className="content">
                <div className="sidebar">
                    {Categories[this.state.current_category].list.map((item, index)=>{
                        return  <Link 
                            to={"/" + this.state.current_category + "/" + item.replace(" ", "_").toLowerCase()}
                            className="sidebar_item f_cutive"
                            onClick={()=>{this.updateSecondaryCategory(item)}}
                        >
                            <span style={{fontWeight: this.state.secondary_category.replace("_", " ") == item.toLowerCase() ? 600 : 400 }}>{item}</span>
                        </Link>
                    })}
                </div>

                <div className="grid_content">
                
                </div>
            </div>
		</div>)
	}
}

export default Home;