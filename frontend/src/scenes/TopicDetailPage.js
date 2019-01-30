import React, { Component } from "react";
import TopicDetail from "../components/topicDetail/TopicDetail";
import dataDetail from "../data/data.json";
import { NavLink } from "react-router-dom";
import Map from "../components/map/Map";

export default class TopicDetailPage extends Component {
    render() {
        const TopicDetailId = this.props.match.params.id;
        const TopicDetailAllData = dataDetail.region[0].pois;
        //Ik heb strings van de id's gemaakt in het data bestand omdat hij strings vergeleek met integers.
        const TopicDetailData = TopicDetailAllData.find(value => {
            return value.id === TopicDetailId;
        });

        return (
            <div>
                <NavLink to={"/region/0/topics"}>
                    <button>Back</button>
                </NavLink>
                <TopicDetail
                    DetailName={TopicDetailData.name}
                    DetailImage={TopicDetailData.image}
                    DetailText={TopicDetailData.description}
                />
                <Map Center={[TopicDetailData.latitude, TopicDetailData.latitude]} />
            </div>
        );
    }
}
