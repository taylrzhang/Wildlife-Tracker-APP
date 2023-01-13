import { useState, useMemo, useCallback, useRef } from "react";
import React from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
// type LatLngLiteral = google.maps.LatLngLiteral;
// type DirectionsResult = google.maps.DirectionsResult;
// type MapOptions = google.maps.MapOptions;

const Map = (props) => {
  console.log(props.data);

  const center = useMemo(() => ({ lat: -25.3, lng: 131 }), []);

  //   const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const markers = props.data;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      id="map"
      options={{ disableDefaultUI: true }}
      onChange={() => {}}
      onClick={(e) => {
        // console.log(e);
        // setMarkers((curr) => [
        //   ...curr,
        //   {
        //     lat: e.latLng.lat(),
        //     lng: e.latLng.lng(),
        //     time: new Date(),
        //   },
        // ]);
      }}
    >
      {/* <Marker position={center} /> */}
      {markers.map((marker, i) => (
        <Marker
          key={i}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={(e) => {
            // console.log(e);
            setSelected(marker);
          }}
        />
      ))}

      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <p>{selected.name} was spotted</p>
            <p>{selected.date_create}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
