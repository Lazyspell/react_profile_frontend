import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const styles = require("./GoogleMapsStyles.json");

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 33.69847,
    lng: -117.97279,
};

const GoogleMapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        map.setZoom(12);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ styles: styles }}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
            <Marker key="marker_1" position={{ lat: 33.709, lng: -117.9544 }} />
        </GoogleMap>
    ) : (
        <></>
    );
};

export default GoogleMapComponent;
