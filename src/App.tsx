import { useState } from "react";
import "./App.css";
import MapView from "./Map/MapView";
import type { MapContainerProps } from "react-leaflet";
import L from "leaflet";
import { DataService, fromGridRef, getStartinglocation } from "./DataService";
import { zoomLevels } from "./Map/ZoomLevel";

import OsGridRef from "https://cdn.jsdelivr.net/npm/geodesy@2/osgridref.js?url";

function App() {
  const [guesses, setGuesses] = useState(0);

  const startingLocale = getStartinglocation();

  const gridRef = OsGridRef.parse(
    startingLocale.gridSquare +
      startingLocale.easting +
      startingLocale.northing,
  );
  const wgs84 = gridRef.toLatLon();
  const lat = wgs84._lat;
  const lng = wgs84._lon;

  const maxZoom = zoomLevels.one.zoom;
  let minZoom = zoomLevels.two.zoom;
  const origin = {
    lat: lat,
    lng: lng,
  };
  const boundFactor = zoomLevels.two.boundsFactor;

  const historicalMapContainerProps: MapContainerProps = {
    center: origin,
    minZoom,
    maxZoom,
    zoom: maxZoom,
    dragging: true,
    doubleClickZoom: false,
    zoomControl: true,
    maxBounds: [
      [origin.lat + boundFactor, origin.lng + boundFactor],
      [origin.lat - boundFactor, origin.lng - boundFactor],
    ],
  };

  const osmMapContainerProps: MapContainerProps = {
    center: origin,
    zoomControl: true,
    zoom: 13,
  };

  return (
    <>
      <section id="center">
        <MapView
          mapContainerProps={historicalMapContainerProps}
          tileLayer={`${DataService.historicalTileLayer}${DataService.historicalTileLayerKey}`}
          attribution={DataService.historicalAttribution}
          isMarkerEnabled={true}
          fixedMarker={new L.LatLng(origin.lat, origin.lng)}
        ></MapView>
        <MapView
          mapContainerProps={osmMapContainerProps}
          tileLayer={DataService.osmTileLayer}
          attribution={DataService.osmAttribution}
          isMarkerEnabled={true}
        ></MapView>
      </section>
    </>
  );
}

export default App;
