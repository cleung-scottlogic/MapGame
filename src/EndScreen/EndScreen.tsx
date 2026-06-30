import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import './EndScreen.css';
import { type MapContainerProps } from 'react-leaflet';
import { DataService } from '../DataService';

import MapView from '../Map/MapView';

function EndScreen({ open }: { open: boolean }) {
  const osmOrigin = {
    lat: 54.970924,
    lng: -2.457155,
  };

  const osmMapContainerProps: MapContainerProps = {
    center: osmOrigin,
    zoomControl: true,
    zoom: 7,
  };

  return (
    <>
      <Dialog className="end-screen" open={open}>
        <DialogTitle className="title">Game Over</DialogTitle>
        <div className="end-screen-content">
          <MapView
            mapContainerProps={osmMapContainerProps}
            tileLayer={DataService.osmTileLayer}
            attribution={DataService.osmAttribution}
          />
        </div>
      </Dialog>
    </>
  );
}

export default EndScreen;
