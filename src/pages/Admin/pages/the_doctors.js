import React, { Component, Fragment } from 'react';

import Uploader from "Elements/Uploader/"

import Button from "Elements/Button/";
import Constructor from "./constructor";

class ContentHome extends Component {
    constructor(props){
        super(props);

        this.page_id = "the_doctors"
        
        Constructor.bind(this)({
			banner_list: [],
			the_doctors: [],
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

                <div className="section_title">THE DOCTORS</div>
                <table className="banner_table">
                    <tbody>
                        {this.state.the_doctors.map((banner_item, index)=>{
                            return <tr key={index + " banner"}>
                                <td>
                                    <img src={banner_item.image} alt="" className="thumbnail" onClick={()=>{
                                        this.setState({image_key: "the_doctors", image_index: index}, ()=>{
                                            document.getElementById("upload").childNodes[0].click()
                                        })
                                    }}/>
                                </td>
                                <td><input type="text" value={banner_item.title} onChange={(e)=>{this.handleChangeArray(e, "the_doctors", "title", index)}}/></td>
                                <td><input type="text" value={banner_item.subtitle} onChange={(e)=>{this.handleChangeArray(e, "the_doctors", "subtitle", index)}}/></td>
                                <td><textarea type="text" value={banner_item.text} onChange={(e)=>{this.handleChangeArray(e, "the_doctors", "text", index)}}/></td>
                                <td><input type="text" value={banner_item.link} onChange={(e)=>{this.handleChangeArray(e, "the_doctors", "link", index)}}/></td>
                            </tr>
                        })}
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