import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import './content.css';

class Content extends Component{
    render(){
        return(
            <div className="Content">
              <Sidebar />
              Content
            </div>
        )
    }
}

export default Content;