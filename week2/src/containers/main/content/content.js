import React, { Component } from 'react';
import Contentblock from '../../../components/contentblock/contentblock'
import './content.css'

class Content extends Component{
    render(){
        return(
            <div className="Content-Block">
                <Contentblock />
                <Contentblock />
                <Contentblock />
            </div>
        )
    }

}

export default Content;