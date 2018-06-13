import React, { Component } from 'react';
import './header.css';
import logo from '../../asset/logo.png'

class Header extends Component {
    render(){
        return(
            <div className="Header">
                <img className="Logo" src={logo} alt="logo"/>
                <div className="SearchLine" >
                    <i className="fas fa-search"></i>
                    <input className="HeaderSearch" type="text" placeholder="Explore your own activities"/>
                </div>
                
            </div>
        )
    }
}

export default Header;