import React from 'react'
import {useSelector} from 'react-redux'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const Map = () => {
    const locations = useSelector((state) => state.locations)

    const MyMapComponent = compose(
        withProps({
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )((props) =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{lat: -34.397, lng: 150.644}}
        >
          {
              props.isMarkerShown && locations.map((location, id)=>( <Marker position={{ lat: location.lat, lng: location.lng }} key={location.id} clickable={true}/>
            ))
          }
        </GoogleMap>
      )
    return (
        <div>
            <MyMapComponent isMarkerShown />
        </div>
    )
}

export default Map
