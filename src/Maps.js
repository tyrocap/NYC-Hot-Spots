import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCO81s5Y-5mT2keHrigJ5XotMZc8otwYG4&v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    mapTypeId={"satellite"}
    defaultCenter={{ lat: 40.743963, lng: -73.981199 }}
  >
    {/*<Marker*/}
    {/*  position={{ lat: 40.754963, lng: -73.971199 }}*/}
    {/*  onClick={props.onToggleOpen}*/}
    {/*>*/}
    {/*  <InfoWindow onCloseClick={props.onToggleOpen}>*/}
    {/*    <div>*/}
    {/*      Controlled zoom: {props.zoom}*/}
    {/*    </div>*/}
    {/*  </InfoWindow>*/}
    {/*</Marker>*/}
    <HeatmapLayer
      data={[
        {location: new window.google.maps.LatLng(40.730610, -73.981199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.731610, -73.989199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.735610, -73.981199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.736610, -73.988199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.738610, -73.984199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.740610, -73.982199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.745610, -73.984199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.743610, -73.986199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.740610, -73.981199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.741610, -73.989199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.742610, -73.981199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.743610, -73.988199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.744610, -73.984199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.745610, -73.982199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.746610, -73.984199), weight: 0.5},
        {location: new window.google.maps.LatLng(40.748610, -73.986199), weight: 0.5},
      ]}
      options={{radius: 10, opacity: 0.7}}
    />
    {props.isMarkerShown && <Marker position={{ lat: 40.730610, lng: -73.981199 }} />}
  </GoogleMap>
);
export default MyMapComponent;