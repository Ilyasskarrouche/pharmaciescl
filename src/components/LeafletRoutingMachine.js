import React, { useEffect,useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = (props) => {
  const map = useMap();
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  navigator.geolocation.getCurrentPosition(
    function success(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        setLat(position.coords.latitude)
        setLog(position.coords.longitude)
        console.log("Latitude 1 : " + lat)
        console.log("Longitude 1 : " + log)
    },
    function error(error) {
        console.error(error);
    }
);
  let DefaultIcon = L.icon({
    iconUrl: require("../../src/marker.png"),
    iconSize: [50, 50],
  });

   
   map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng], {icon: DefaultIcon}).addTo(map)
      L.Routing.control({
        waypoints: [
          L.latLng(lat, log),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        }
      })
        .addTo(map);
    });
  
  return null;
};

export default LeafletRoutingMachine;