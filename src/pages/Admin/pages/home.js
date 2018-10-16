import React, { Component, Fragment } from 'react';

import Uploader from "Elements/Uploader/"

import Button from "Elements/Button/";
import Constructor from "./constructor";

class ContentHome extends Component {
    constructor(props){
        super(props);

        this.page_id = "home"
        
        Constructor.bind(this)({
			banner_list: [],
			treatment_list: [],
			featured_one: {},
            featured_two: {}
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
                                <td><input type="text" value={banner_item.button.text} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "button.text", index)}}/></td>
                                <td><input type="text" value={banner_item.button.link} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "button.link", index)}}/></td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <div className="section_title">TREATMENT</div>
                <table className="banner_table">
                    <tbody>
                        {this.state.treatment_list.map((banner_item, index)=>{
                            return <tr key={index + " banner"}>
                                <td>
                                    <img src={banner_item.image} alt="" className="thumbnail" onClick={()=>{
                                        this.setState({image_key: "treatment_list", image_index: index}, ()=>{
                                            document.getElementById("upload").childNodes[0].click()
                                        })
                                    }}/>
                                </td>
                                <td><input type="text" value={banner_item.title} onChange={(e)=>{this.handleChangeArray(e, "treatment_list", "title", index)}}/></td>
                                <td><textarea type="text" value={banner_item.text} onChange={(e)=>{this.handleChangeArray(e, "treatment_list", "text", index)}}/></td>
                            </tr>
                        })}
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

                <div className="section_title">FEATURED TWO</div>
                <table className="banner_table">
                    <tbody>
                        <tr >
                            <td><input type="text" value={this.state.featured_two.title} onChange={(e)=>{this.handleChangeObject(e, "featured_two", "title")}}/></td>
                            <td><textarea type="text" value={this.state.featured_two.subtitle} onChange={(e)=>{this.handleChangeObject(e, "featured_two", "subtitle")}}/></td>
                            <td><textarea type="text" value={this.state.featured_two.text} onChange={(e)=>{this.handleChangeObject(e, "featured_two", "text")}}/></td>
                            <td><input type="text" value={this.state.featured_two.button.text} onChange={(e)=>{this.handleChangeObject(e, "featured_two", "button.text")}}/></td>
                            <td><input type="text" value={this.state.featured_two.button.link} onChange={(e)=>{this.handleChangeObject(e, "featured_two", "button.link")}}/></td>
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