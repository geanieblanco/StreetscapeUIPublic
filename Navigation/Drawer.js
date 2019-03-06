import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ReportModal from '../Components/Modals/ReportModal';
import SearchBar from '../Components/SearchBar';
import MapScreen from '../Screens/MapScreen';
import NoAuth from './Authentication/NoAuth';
import AccountScreen from '../Screens/AccountScreen';
import LogIn from './Authentication/LogIn';
import Icon from 'react-native-vector-icons/Ionicons';
import LogOut from './LogOut';

const navIcon = (<Icon name="navigate"/>)


class Map extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            <MapScreen/>
            <SearchBar style={styles.searchbar}/>
            <View style={styles.inner}>
                <ReportModal
                style={styles.button}
                />
                <TouchableOpacity
                onPress={()=>alert('Hello!')}>
                <Image
                style={styles.button}
                source={require('../../Assets/Icons/centerButton.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        
    );
    }
}

class Account extends React.Component {render() {return (<AccountScreen/>)}}
class Unmount extends React.Component {render(){return(<LogOut/>)}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inner: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
        padding: 20,
        marginLeft: '75%'
    },
    button: {
        height:50,
        width:50,
        margin: 10,
    }
    }
)

export default createDrawerNavigator({
    Map: {
        screen: Map,
        },
    Account: {
        screen: Account,
    },
    Logout: {
        screen: Unmount
    }

});


