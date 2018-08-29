import React, { Component } from 'react';
import './style.css';

import Categories from 'Constants/categories.js';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (<div className="page_home">
			<div className="content">
				<div className="content_container">
					{Object.keys(Categories).map((category, index)=>{
						return <div  key={index + "_two"} className="category_row" id={category+"_row"}>
							<div className="title">
								<img className="title_image" src="https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png"></img>
								<Link to={"/" + category} className="title_text">{Categories[category].text}</Link>
							</div>

							<div className="list">
								{(()=>{
									let reordered_categories = [];
									let rows = 0;
									let rows_max = Math.ceil(Categories[category].list.length/3)
									while(rows < rows_max){
										reordered_categories.push(Categories[category].list[rows])

										let row_one = Categories[category].list[rows + rows_max - 1];
										if (!_.isNil(row_one)){reordered_categories.push(row_one)};

										let row_two = Categories[category].list[rows + (rows_max*2) - 1];
										if (!_.isNil(row_two)){reordered_categories.push(row_two)};

										rows++
									}

									return reordered_categories.map((item)=>{
										return <div className="category_item">
											{item}
										</div>
									})
								})()}
							</div>
						</div>
					})}
				</div>
				
			</div>
			
		</div>)
	}
}

export default Home;