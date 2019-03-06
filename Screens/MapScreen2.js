import React from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet} from 'react-native';

export default class MapScreen extends React.Component {

render() {
return (
    <MapView
    provider={PROVIDER_GOOGLE}
    style={ styles.map }
    showsUserLocation={true}
    followsUserLocation={true}
    loadingEnabled={true}
    loadingIndicatorColor="#FBD874"
    loadingBackgroundColor="#000000"
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }}/>
);
}
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})