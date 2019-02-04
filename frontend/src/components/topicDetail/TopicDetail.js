import React, { Component } from 'react'
import './topicDetail.css'

class TopicDetail extends Component {
    state = {
        comments: []
    }
    render() {
        const { DetailImage, DetailName, DetailText } = this.props;
        return (
            <div>
                <h1>{DetailName}</h1>
                <img className="topicDetailImage" src={DetailImage} alt={DetailName} />
                <div className="detailText">
                    <h4>{"Beschrijving"}</h4>
                    <p>{DetailText}</p>
                </div>

            </div>
        )
    }
}

export default TopicDetail;
