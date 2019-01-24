import React, {Component, Fragment} from 'react';
import Region from '../components/region/Region';

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Capitol_Building_Full_View.jpg/1920px-Capitol_Building_Full_View.jpg",
    "https://lekkerweglekkerthuis.ah.nl/media/images/products/2018/09/New_York.jpg"
]

class RegionPage extends Component{
    render(){
        return(
            <Fragment>
                <Region name="Washington" image={images[0]} />

            </Fragment>
        );
    }
}

export default RegionPage;