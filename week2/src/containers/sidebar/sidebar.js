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
                        <li><input type="checkbox" name="" id=""/> <label htmlFor="">All</label></li>
                        <li><input type="checkbox" name="" id=""/> <label htmlFor="">Enterainment</label></li>
                        <li><input type="checkbox" name="" id=""/> <label htmlFor="">Food</label></li>
                        <li><input type="checkbox" name="" id=""/> <label htmlFor="">Learning</label></li>
                        <li><input type="checkbox" name="" id=""/> <label htmlFor="">Outdoors</label></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;