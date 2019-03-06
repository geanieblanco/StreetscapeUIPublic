import React from "react";
import {Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet} from 'react-native';



export default class MapScreen extends React.Component {
state = {
  location: null,
  longitude: null,
  latitude: null,
  latitudeDelta: .1,
  longitudeDelta: .1
}

centerLocation = () => navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude});
  },
  error => Alert.alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  
);



render() {
return (
    <MapView
    provider={PROVIDER_GOOGLE}
    style={ styles.map }
    zoomEnabled= {true}
    showsUserLocation={true}
    followsUserLocation={true}
    loadingEnabled={true}
    loadingIndicatorColor="#FBD874"
    loadingBackgroundColor="#000000"
    initialRegion={{
      latitude:40.7095459,
      longitude:-74.0024769,
      latitudeDelta: .1,
      longitudeDelta: .1
    }}
    onPress= {this.centerLocation}
    />
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


// onPinDrop(){
//   switch() {
//     case 'harassment':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/harassment.png')}
//     />)
//     break;

//     case 'closed-sidewalk':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/closedSidewalk.png')}
//     />)
//     break;

//     case 'emergency':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/emergency.png')}
//     />)
//     break;

//     case 'snow':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/snow.png')}
//     />)
//     break;

//     case 'ice':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/ice.png')}
//     />)
//     break;

//     case 'flooding':
//     render(<Marker
//       coordinate={marker.latlng}
//       image={require('../../Assets/Icons/flooding.png')}
//     />)
//     break;
//   }
// }