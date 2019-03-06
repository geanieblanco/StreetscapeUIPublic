// Overview:
// Screen loads when no authorization state is known
//TO DO:
//

import React from 'react';
import * as firebase from 'firebase';
import {View, Image, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

const win = Dimensions.get('window');


export default class Loading extends React.Component {
componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
}
    render(){
        return(
            <View
            style={styles.container}>
                <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../../Assets/Images/Streetscape.png')}
                />
                <ActivityIndicator
                size="large"
                color="black"/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBD874',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    image: {
        width: win.width,
    },
})