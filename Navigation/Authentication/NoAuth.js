import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Button from '../../Components/Common/Button';

const win = Dimensions.get('window');

//TODO: Button onPress should navigate to respective screen
//This screen renders when no Auth is found on launch

class NoAuth extends React.Component {
    render() {
        return (
            <View
            style={styles.container}>
                <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../../../Assets/Images/Streetscape.png')}/>
                <Button
                style={styles.button}
                title="Sign In"
                onPress={()=> this.props.navigation.navigate('Sign In')}
                />
                <Button
                style={styles.button}
                title="Sign Up"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: win.width,
    },
    button: {
        flex: 1
    }
})

export default NoAuth;