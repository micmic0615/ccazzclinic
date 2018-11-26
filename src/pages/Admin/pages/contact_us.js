import React, { Component, Fragment } from 'react';
import { read, update } from "Services/crud";
import Uploader from "Elements/Uploader/"

import Button from "Elements/Button/";
import Constructor from "./constructor";

class ContentHome extends Component {
    constructor(props){
        super(props);

        this.page_id = "contact_us"

        
        Constructor.bind(this)({
            banner_list: [],
            contact_mobile: "",
            contact_email: "",
            form_sender_email: "",
            form_sender_passwords: "",
            form_sender_subject: "",
            clinic_schedule: []
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

                <div className="section_title">CONTACT INFO</div>
                <table className="banner_table">
                    <tbody>
                        <tr >
                            <td>
                                <div>Mobile</div>
                                <input type="text" value={this.state.contact_mobile} onChange={(e)=>{this.handleChangeString(e, "contact_mobile")}}/>
                            </td>
                            <td>
                                <div>Email</div>
                                <input type="text" value={this.state.contact_email} onChange={(e)=>{this.handleChangeString(e, "contact_email")}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="section_title">FORM RECIPIENT </div>
                <table className="banner_table">
                    <tbody>
                        <tr >
                            <td>
                                <div>Email Receiver</div>
                                <input type="text" value={this.state.form_sender_email} onChange={(e)=>{this.handleChangeString(e, "form_sender_email")}}/>
                            </td>
                            <td>
                                <div>Receiver Password</div>
                                <input type="password" value={this.state.form_sender_passwords} onChange={(e)=>{this.handleChangeString(e, "form_sender_passwords")}}/>
                            </td>
                            <td>
                                <div>Email Subject</div>
                                <input type="text" value={this.state.form_sender_subject} onChange={(e)=>{this.handleChangeString(e, "form_sender_subject")}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                 <div className="section_title">CLINIC SCHEDULES</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    {this.state.clinic_schedule.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("clinic_schedule", index)}}>X</Button> 
                                            <input type="text" value={gen[0]} onChange={(e)=>{this.handleChangeListArray(e, "clinic_schedule", index, 0)}}/>
                                            <input style={{marginTop:"-5px"}} type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "clinic_schedule", index, 1)}}/>
                                            <input style={{marginTop:"-5px"}} type="text" value={gen[2]} onChange={(e)=>{this.handleChangeListArray(e, "clinic_schedule", index, 2)}}/>
                                            <input style={{marginTop:"-5px"}} type="text" value={gen[3]} onChange={(e)=>{this.handleChangeListArray(e, "clinic_schedule", index, 3)}}/>
                                            <input style={{marginTop:"-5px", marginBottom:"15px"}} type="text" value={gen[4]} onChange={(e)=>{this.handleChangeListArray(e, "clinic_schedule", index, 4)}}/>
                                        </li>
                                    })}
                                    
                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("clinic_schedule", ["", ""])}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* <div className="section_title">FEATURED </div>
                <table className="banner_table">
                    <tbody>
                        <tr >
                            <td>
                                <img src={this.state.featured.image} alt="" className="thumbnail" onClick={()=>{
                                    this.setState({image_key: "featured", image_index: 0}, ()=>{
                                        document.getElementById("upload").childNodes[0].click()
                                    })
                                }}/>
                            </td>
                            <td><input type="text" value={this.state.featured.title} onChange={(e)=>{this.handleChangeObject(e, "featured", "title")}}/></td>
                            <td><textarea type="text" value={this.state.featured.subtitle} onChange={(e)=>{this.handleChangeObject(e, "featured", "subtitle")}}/></td>
                            <td><textarea type="text" value={this.state.featured.text} onChange={(e)=>{this.handleChangeObject(e, "featured", "text")}}/></td>
                        </tr>
                    </tbody>
                </table>

                <div className="section_title">POSITIONS</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>Current Positions</b>
                                <ul>
                                    {this.state.current_positions.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("current_positions", index)}}>X</Button> 
                                            <input type="text" value={gen[0]} onChange={(e)=>{this.handleChangeListArray(e, "current_positions", index, 0)}}/>
                                            <input style={{marginTop:"-5px", marginBottom:"15px"}} type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "current_positions", index, 1)}}/>
                                        </li>
                                    })}
                                    
                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("current_positions", ["", ""])}}>Add</Button>
                                </ul>
                            </td>

                            <td>
                                <b>Former Positions</b>
                                <ul>
                                    {this.state.former_positions.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("former_positions", index)}}>X</Button> 
                                            <input type="text" value={gen[0]} onChange={(e)=>{this.handleChangeListArray(e, "former_positions", index, 0)}}/>
                                            <input style={{marginTop:"-5px", marginBottom:"15px"}} type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "former_positions", index, 1)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("former_positions", ["", ""])}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="section_title">ACHIEVEMENTS</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    {this.state.icon_positions.map((gen, index)=>{
                                        return <li>
                                            <img className="icon" src={_.imgPath("/img/icons/ztan_"+(index+1)+".png")} alt=""  />

                                            <input type="text" value={gen[0]} onChange={(e)=>{this.handleChangeListArray(e, "icon_positions", index, 0)}}/>
                                            <input style={{marginTop:"-5px", marginBottom:"15px"}} type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "icon_positions", index, 1)}}/>
                                        </li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="section_title">LOGOS</div>
                <table className="banner_table">
                    <tbody>
                        <tr>
                            <td>
                                <b>Member of</b>
                                <ul>
                                    {this.state.member_of.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("member_of", index)}}>X</Button> 
                                            

                                            <img src={gen[0]} alt="" className="thumbnail img_logo" onClick={()=>{
                                                this.setState({image_key: "member_of", image_index: index}, ()=>{
                                                    document.getElementById("upload").childNodes[0].click()
                                                })
                                            }}/>
                                            <input className="img_partner" type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "member_of", index, 1)}}/>
                                        </li>
                                    })}
                                    
                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("member_of", ["", ""])}}>Add</Button>
                                </ul>
                            </td>

                            <td>
                                <b>Hospital Affiliations</b>
                                <ul>
                                    {this.state.affiliation.map((gen, index)=>{
                                        return <li>
                                            <Button className="sl_small cl_dark" onClick={()=>{this.handleRemoveList("affiliation", index)}}>X</Button> 
                                            <img src={gen[0]} alt="" className="thumbnail img_logo" onClick={()=>{
                                                this.setState({image_key: "affiliation", image_index: index}, ()=>{
                                                    document.getElementById("upload").childNodes[0].click()
                                                })
                                            }}/>
                                            <input className="img_partner" type="text" value={gen[1]} onChange={(e)=>{this.handleChangeListArray(e, "affiliation", index, 1)}}/>
                                        </li>
                                    })}

                                    <Button className="sz_large cl_dark br_square" onClick={()=>{this.handleAddList("affiliation", ["", ""])}}>Add</Button>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table> */}

                {/* <div className="section_title">LISTS</div>
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

                 */}

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