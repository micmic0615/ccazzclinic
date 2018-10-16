import React, { Component, Fragment } from 'react';
import { read, update } from "Services/crud";
import Uploader from "Elements/Uploader/"

import Button from "Elements/Button/";
import Constructor from "./constructor";

class ContentHome extends Component {
    constructor(props){
        super(props);

        this.page_id = "mohs_surgery"

        
        Constructor.bind(this)({
			banner_list: [],
			recurrent_tumors: [],
			eyelid_tumors: [],
			specific_tumors_1: [],
			specific_tumors_2: [],
			other_diseases: [],
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
                                {/* <td><input type="text" value={banner_item.title} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "title", index)}}/></td>
                                <td><textarea type="text" value={banner_item.text} onChange={(e)=>{this.handleChangeArray(e, "banner_list", "text", index)}}/></td> */}
                            </tr>
                        })}
                    </tbody>
                </table>

                <div className="section_title">LISTS</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>Recurrent Tumors</b>
                                <ul>
                                    {this.state.recurrent_tumors.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("recurrent_tumors", index)}}>X</Button>  <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "recurrent_tumors", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("recurrent_tumors")}}>Add</Button>
                                </ul>
                            </td>

                            <td>
                                <b>Eyelid Tumors</b>
                                <ul>
                                    {this.state.eyelid_tumors.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("eyelid_tumors", index)}}>X</Button>  <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "eyelid_tumors", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("eyelid_tumors")}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>Specific Tumors Left</b>
                                <ul>
                                    {this.state.specific_tumors_1.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("specific_tumors_1", index)}}>X</Button> <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "specific_tumors_1", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("specific_tumors_1")}}>Add</Button>
                                </ul>
                            </td>

                            <td>
                                <b>Specific Tumors Right</b>
                                <ul>
                                    {this.state.specific_tumors_2.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("specific_tumors_2", index)}}>X</Button> <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "specific_tumors_2", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("specific_tumors_2")}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>Other Diseases</b>
                                <ul>
                                    {this.state.other_diseases.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("other_diseases", index)}}>X</Button> <input type="text" value={gen} onChange={(e)=>{this.handleChangeList(e, "other_diseases", index)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("other_diseases")}}>Add</Button>
                                </ul>
                            </td>

                          
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