import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component{
    render(){
        return(
            <div className="Sidebar">
                <div className="SidebarBottomLine Localtion">
                    <div className="Title">Localtion</div>
                    <select name="" id="">
                        <option value="">Taiwan</option>
                    </select>
                </div>
                <div className="SidebarBottomLine Date">
                    <div className="Title">Date</div>
                    <div className="Datebox">from<div className="Datepicker">2018/5/24</div></div>
                    <div className="Datebox">to<div className="Datepicker">2018/6/1</div></div>
                </div>
                <div className="Categories">
                    <div className="Title">Categories</div>
                    <ul>
                        <li><input type="checkbox" name="" id="1"/> <label htmlFor="1">All</label></li>
                        <li><input type="checkbox" name="" id="2"/> <label htmlFor="2">Enterainment</label></li>
                        <li><input type="checkbox" name="" id="3"/> <label htmlFor="3">Food</label></li>
                        <li><input type="checkbox" name="" id="4"/> <label htmlFor="4">Learning</label></li>
                        <li><input type="checkbox" name="" id="5"/> <label htmlFor="5">Outdoors</label></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;