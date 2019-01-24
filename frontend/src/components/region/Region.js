import React, {Component} from 'react';
import './region.css';

class Region extends Component{
    render(){
        return(
            <div>
            <h1>{this.props.name}</h1>
            <img className="region-img" alt="region" src={this.props.image}/>
            </div>

        );
    }
}

export default Region;