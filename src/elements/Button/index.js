import React, { Component } from 'react';
import './style.scss';


function Button (props) {
    let propCopy = {...props};
    delete propCopy.children;

    return (<button {...propCopy} className={"f_neuzeit ccazz_btn " + props.className}>
        {props.children}
    </button>)
}

export default Button