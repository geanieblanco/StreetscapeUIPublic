import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SearchBar extends React.Component {

    render() {
        return (
            <GooglePlacesAutocomplete placeholder = 'Search'
                minLength = {2}
                autoFocus = {false}
                returnKeyType = {'search'} 
                listViewDisplayed = 'auto'
                fetchDetails = {true}
                renderDescription = {row => row.description}
                onPress = {(data, details = null) => {this.props.handleSearch(details.geometry.location);}}
                query = {{
                    key: 'AIzaSyC5pNowZZ89ajtHmjV0pGfydmrWv48ZyFY',
                    language: 'en',
                    }}
                styles = {{
                    row: {
                        backgroundColor: 'rgba(255, 255, 255,.8)',
                        marginLeft: 20,
                        marginRight: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    poweredContainer: {
                        backgroundColor: 'rgba(255, 255, 255,.8)',
                        marginLeft: 20,
                        marginRight: 25,
                    },
                    textInputContainer: {
                        width: '90%',
                        backgroundColor: 'rgba(0,0,0,0)',
                        marginTop: 40,
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                        },
                    textInput: {
                        backgroundColor: 'rgba(255, 255, 255,.8)',
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: 'black',
                        shadowOffset:{  width: 3,  height: 3,  },
                        shadowColor: 'black',
                        shadowOpacity: .2,
                        height: 40
                    },
                    description: {
                        fontWeight: 'bold'
                        },
                    predefinedPlacesDescription: {
                        color: 'rgba(0,0,0,0)'
                        }
                }}
                filterReverseGeocodingByTypes = {['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                debounce = {200}/>
            )
        }
    }