import { useState, useMemo, useCallback, useRef } from "react";
import React from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import { Button, Modal, Navbar } from "react-bootstrap";

const Map = (props) => {
  console.log(props.data);

  const center = useMemo(() => ({ lat: -25.3, lng: 131 }), []);

  const [show, setShow] = useState(false);
  const [pin, setPins] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const handleShow = () => {
    setShow(true);
  };

  const markers = props.data;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      id="map"
      options={{ disableDefaultUI: true }}
      onChange={() => {}}
      onClick={(e) => {
        console.log(e);
        setPins({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        });
        handleShow();
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

      <Marker position={{ lat: pin.lat, lng: pin.lng }}></Marker>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>add animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input type="text" />
          <label>Type</label>
          <input type="text" />
          <label>Description</label>
          <input type="text" />

          <Button>save</Button>
        </Modal.Body>
      </Modal>
    </GoogleMap>
  );
};

export default Map;
