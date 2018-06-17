import React, { Component } from 'react';
import './tag.css';

class Tag extends Component{
    render(){
        return(
            <div className="Tag">
                <div className="Tag-Content">tag content
                <i class="far fa-times-circle"></i></div>
            </div>
        )
    }
}

export default Tag;