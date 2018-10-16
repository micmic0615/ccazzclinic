import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';


class Uploader extends Component {
    constructor(props){
        super(props);
       
    }

    
    getFiles(file){
        if (this.props.canUpload){
            if (file.type.includes("png") || file.type.includes("jpg") || file.type.includes("jpeg")){
                if (parseInt(file.size) <= 1000){
                    this.props.onValidImage(file.base64)

                    // this.setState({canUpload: false}, ()=>{
                    //     update({
                    //         db: "pages",
                    //         filter: {_id: this.state.edit},
                    //         data: { thumbnail: file.base64 }
                    //     }).then(()=>{
                    //         window.location.reload()
                    //     }).catch((err)=>{
                    //         alert(err)
                    //     })
                    // })
                } else {
                    alert("Images need to be less than 1000kb")
                }
            } else {
                alert("Only .jpg and .png images can be uploaded")
            }
        }
    }

    render() {
        return <div id={"upload"} style={{display:"none"}}>
            <FileBase64
                onDone={ this.getFiles.bind(this) } 
            />
        </div>
    }
}
    
export default Uploader;