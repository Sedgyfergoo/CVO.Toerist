import React, { Component, Fragment } from "react";
import Region from "../components/region/Region";

// Dit is eigenlijk wat er uiteindelijk in de database zit en van backend komt
const images = [
  //array gemaakt zodat er in het component geen belachelijk lange url's komen te staan
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/1920px-Flag_of_Washington.svg.png",
  "https://www.rome2rio.com/wp-content/uploads/2017/06/New_York_NYC-2.jpg"
];
const regions = [
  //mochten we meer regions willen maken, momenteel enkel washington.
  {
    id: 0,
    name: "Washington"
  },
  {
    id: 1,
    name: "New York"
  }
];

class RegionPage extends Component {
  // We zetten initieel de active region id op 0 omdat we niet willen dat onze applicatie crasht
  state = {
    activeRegionId: 0
  };

  componentDidMount() {
    // Kijken met 'match' (dat via bovenliggende router (App.js) bij de props gestoken)
    // Gaan kijken of er een id meegegeven is, al dan niet
    const regionId = this.props.match.params.id;


    if (regionId !== undefined) {
      this.setState({ activeRegionId: regionId });
    }
  }

  render() {
    // We halen active id uit onze staat, dit hebben we nodig om uit onze data de specifiek regio te nemen
    const { activeRegionId } = this.state;

    return (
      //fragement is hetzelfde als div maar maakt niets in de DOM.
      <Fragment>
        <Region
          navText={regions[activeRegionId].name + " attractions"}
          name={regions[activeRegionId].name}
          id={regions[activeRegionId].id}
          image={images[activeRegionId]}

        />
      </Fragment>
    );
  }
}

export default RegionPage;
