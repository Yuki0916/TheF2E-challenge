import React, { Component } from 'react';
import './textblock.css'

class Textblock extends Component{
    render(){
        return(
            <div className="Text-Block">
                <div className="Text-Title">Kogi Cosby sweater.</div>
                <div className="Text-Main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et corporis incidunt fugit veniam esse?</div>
                <div className="Text-Line">
                    <span className="Text-User">Ethan Foster</span>
                    <span className="Text-Tag">Entertainment</span>
                </div>
                <div className="Text-Line">
                    <span className="Info"><i className="fas fa-map-marker-alt"/>Kaohsiung City</span>
                    <span className="Info"><i class="far fa-calendar-alt"></i>2018/5/24 - 2018/5/31</span>
                </div>
            </div>
        )
    }
}

export default Textblock;