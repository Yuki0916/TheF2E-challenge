import React, { Component } from 'react';
import './pagination.css'

class Pagination extends Component{
    render(){
        return(
            <nav className="Pagination">
                <ul>
                    <li>«</li>
                    <li className="Page-On">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>»</li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;