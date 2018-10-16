import React, { Component } from 'react';
import './style.scss';

import Button from "Elements/Button/"


function Featured (props) {
    let propCopy = {...props};
    delete propCopy.title;
    delete propCopy.subtitle;
    delete propCopy.text;
    delete propCopy.button;

    return (<div className="featured" {...propCopy}>
        {_.isNil(props.title) ? null : <div className="title f_neuzeitheavy">
            {props.title}
        </div>}

        {_.isNil(props.subtitle) ? null : <div className="featured_subtitle f_neuzeit">
            {props.subtitle}
        </div>}

        {_.isNil(props.text) ? null : <div className="featured_text f_opensans">
            {props.text}
        </div>}

        {_.isNil(props.button) ? null :  <Button className="sz_large cl_dark" onClick={()=>{
            if (props.button.link){
                window.location.href = props.button.link
            } else if (props.button.onClick){
                props.button.onClick()
            }
        }}>
            {props.button.text}
        </Button>}
    </div>)
}

export default Featured