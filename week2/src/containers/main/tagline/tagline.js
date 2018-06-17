import React, { Component } from 'react';
import Tag from '../../../components/tag/tag'
import './tagline.css'

class TagLine extends Component{
    render(){
        return(
            <div className="Tag-Line">
              <Tag />
              <Tag />
            </div>
        )
    }
}

export default TagLine;