import React, { Component } from 'react';
import Textblock from './textblock/textblock'
import './contentblock.css'
import Img from '../../asset/img1.jpg'

class Contentblock extends Component{
    render(){
        return(
            <div className="Block">
                <img className="Img-Block" src={Img} alt="img"/>
                <Textblock />
            </div>
        )
    }

}

export default Contentblock;