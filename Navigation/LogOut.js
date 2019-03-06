import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import  NoAuth from './Authentication/NoAuth';

class LogOut extends Component {
    componentWillMount() {
        AsyncStorage.clear();
    }
    render() {
    return (<NoAuth/>)
    }
}
export default LogOut;
