import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import L from "leaflet"
import LeafletRoutingMachine from "./LeafletRoutingMachine";



function MapFiltre(props) {

    const pharmacies = props.pharmacies;
    const [center, setCenter] = useState([]);
    const [lat, setLat] = useState(0);
    const [log, setLog] = useState(0);


    const [b, setb] = useState({
        bb: 0
    })

    const { id } = useParams();


    function GetIcon(_iconSize) {
        return L.icon({
            iconUrl: require("../../src/marker.png"),
            iconSize: [_iconSize]
        })
    }

    const [villes, setVilles] = useState([]);
    const [zones, setZones] = useState([]);


    if ("geolocation" in navigator) {
        console.log("Geolocation is available");
    } else {
        console.log("Geolocation is not available");
    }

    navigator.geolocation.getCurrentPosition(
        function success(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            setLat(position.coords.latitude)
            setLog(position.coords.longitude)
            console.log("Latitude : " + lat)
            console.log("Longitude : " + log)
        },
        function error(error) {
            console.error(error);
        }
    );




    return (

        <LeafletMap className="map"

            center={[lat, log]}
            zoom={4}
            style={{ height: 750, with: 100 }}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />



            <Marker position={[lat, log]} icon={GetIcon(40)}>
                <Popup>
                    Ma position.
                </Popup>
            </Marker>



            {
                pharmacies.map((item, index) =>
                    // console.log(p.lat +"   ha l3arrrr"+p.log);
                    <Marker position={[item.lat, item.log]} icon={GetIcon(40)} key={item.id}>
                        <Popup>
                            {item.nom}
                        </Popup>
                    </Marker>
                )
            }


         <LeafletRoutingMachine/>
        </LeafletMap>

    )
}

export default MapFiltre;