import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Content from './content/content';
import Tagline from './tagline/tagline'
import Pagination from '../../components/pagination/pagination'
import './main.css';

class Main extends Component{
    render(){
        const ResultNumber = <span className="Result-Number">{15}</span>
        return(
            <div className="Content">
              <Sidebar />
              <div className="Content-Container">
                <div className="Result-Line">Showing {ResultNumber} Result by... </div>
                <Tagline />
                <Content />
                <Pagination />
              </div>
            </div>
        )
    }
}

export default Main;