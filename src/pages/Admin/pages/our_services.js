import React, { Component, Fragment } from 'react';
import { read, update } from "Services/crud";
import Uploader from "Elements/Uploader/"

import Button from "Elements/Button/";
import Constructor from "./constructor";

class ContentHome extends Component {
    constructor(props){
        super(props);

        this.page_id = "our_services"

        
        Constructor.bind(this)({
			banner_list: [],
			general_services: [],
			cosmetic_surgery: [],
            featured_one: {},
        })
    }

    render() {
        return <div>
            <Uploader canUpload={this.state.canUpload} onValidImage={this.onValidImage}/>

            <div className="menu_buttons">
                <Button style={{opacity: this.state.changed ? 1 : 0.5}} className="sz_large cl_dark" onClick={this.saveChanges}>
                    save changes
                </Button>
            </div>

            {!this.state.loaded ? null : <Fragment>
                <div className="section_title">BANNER</div>
                <table className="banner_table">
                    <tbody>
                        {this.state.banner_list.map((banner_item, index)=>{
                            return <tr key={index + " banner"}>
                                <td>
                                    <img src={banner_item.image} alt="" className="thumbnail" onClick={()=>{
                                        this.setState({image_key: "banner_list", image_index: index}, ()=>{
                                            document.getElementById("upload").childNodes[0].click()
                                        })
                                    }}/>
                                </td>
                                <td><input type="text" value={banner_item.title} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "title", index)}}/></td>
                                <td><textarea type="text" value={banner_item.text} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "text", index)}}/></td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <div className="section_title">LISTS</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>General Services</b>
                                <ul>
                                    {this.state.general_services.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("general_services", index)}}>X</Button> <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "general_services", index)}}/>
                                        </li>
                                    })}
                                    
                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("general_services")}}>Add</Button>
                                </ul>
                            </td>

                            <td>
                                <b>Cosmetic Surgery</b>
                                <ul>
                                    {this.state.cosmetic_surgery.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("cosmetic_surgery", index)}}>X</Button> <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "cosmetic_surgery", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("cosmetic_surgery")}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="section_title">FEATURED ONE</div>
                <table className="banner_table">
                    <tbody>
                        <tr >
                            <td><input type="text" value={this.state.featured_one.title} onChange={(e)=>{this.handleChangeObject(e, "featured_one", "title")}}/></td>
                            <td><textarea type="text" value={this.state.featured_one.subtitle} onChange={(e)=>{this.handleChangeObject(e, "featured_one", "subtitle")}}/></td>
                            <td><textarea type="text" value={this.state.featured_one.text} onChange={(e)=>{this.handleChangeObject(e, "featured_one", "text")}}/></td>
                            <td><input type="text" value={this.state.featured_one.button.text} onChange={(e)=>{this.handleChangeObject(e, "featured_one", "button.text")}}/></td>
                            <td><input type="text" value={this.state.featured_one.button.link} onChange={(e)=>{this.handleChangeObject(e, "featured_one", "button.link")}}/></td>
                        </tr>
                    </tbody>
                </table>

            </Fragment>}

            <div className="menu_buttons">
                <Button style={{opacity: this.state.changed ? 1 : 0.5}} className="sz_large cl_dark" onClick={this.saveChanges}>
                    save changes
                </Button>
            </div>
        </div>
    }
}
    
export default ContentHome;