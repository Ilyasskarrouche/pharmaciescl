import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: require("../../src/marker.png"),
    iconSize: [90, 90],
  });
  useEffect(() => {
    
    map.on("click", function (e) {
      L.Routing.control({
        waypoints: [
          L.latLng(36.8065, 10.1815),
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
  }, []);
  return null;
};

export default LeafletRoutingMachine;