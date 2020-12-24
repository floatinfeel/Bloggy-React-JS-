import React,{useState} from 'react'
import './MapComponent.css'
import {useSelector} from 'react-redux'
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet.js';
import L from 'leaflet';

const MapComponent = () => {
    const locations = useSelector(state => state.locations)
    const [center, setCenter] = useState({lat:-6.1700205351005915, lng: 106.82616128512592})

    return (
        
        <div id="mapid">
            <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    locations.map((loc, id)=>(
                        <Marker position={[loc.lat, loc.lng]} key={loc.id}>
                        <Popup>
                            <h5> {loc.label} </h5> `{loc.kota}, {loc.provinsi}`<br/>
                             `{loc.lat}, {loc.lng}`
                        </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default MapComponent
