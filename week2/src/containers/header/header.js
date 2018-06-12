import React, { Component } from 'react';
import './header.css';
import logo from '../../asset/logo@2x.png'

class Header extends Component {
    render(){
        return(
            <div className="Header">
                <img src={logo} alt="logo"/>
                <div>
                    <i className="fas fa-search"></i>
                    <input className="HeaderSearch" type="text" placeholder="Explore your own activities"/>
                </div>
                
            </div>
        )
    }
}

export default Header;