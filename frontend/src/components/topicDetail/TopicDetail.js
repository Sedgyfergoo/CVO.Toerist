import React, { Component } from 'react'

class TopicDetail extends Component {
    render() {
        const { DetailImage, DetailName, DetailText } = this.props;
        return (
            <div>
                <h1>{DetailName}</h1>
                <img src={DetailImage} alt={DetailName} />
                <h4>{"Beschrijving"}</h4>
                <p>{DetailText}</p>



            </div>
        )
    }
}

export default TopicDetail;
