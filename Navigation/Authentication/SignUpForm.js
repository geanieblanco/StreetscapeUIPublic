import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import Button from '../../Components/Common/Button';
import TextInputBox from '../../Components/Common/TextInputBox';

//Push all information to database
//Button: navigate to MapScreen

const win = Dimensions.get('window');

export default class SignUpForm extends React.Component {
constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
    }

    state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    zipCode: "",
    }

    onSignUpError(error) {
    const { alert } = Alert;
    alert('Error', 'An error has occurred.');
    let errorMessage;
    switch (error.code) {
        case 'auth/network-request-failed':
        errorMessage = 'Couldn\'t connect to the authentication server,' +
        ' please check if your device is connected to the Internet.';
        break;
        case 'auth/operation-not-allowed':
        errorMessage = 'The authentication server administrator has not enabled this feature.';
        break;
        case 'auth/too-many-requests':
        errorMessage = 'You have tried too many times, please wait before trying again.';
        break;
        case 'auth/user-disabled':
        errorMessage = 'This user has been disabled from the system.' +
            ' Please contact an administrator.';
        break;
        default:
        errorMessage = 'Authentication failed.';
    }

this.setState({ errorMessage, loading: false });
}

handlePress({ email, password}) {
const { alert } = Alert;
this.setState({ loading: true });
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(addNewUser())
    .then(user => alert('Thank you for signing up.'))
    .catch(this.onSignUpError.bind(this));
}

    render() {
        return (
            <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../../../Assets/Images/Streetscape.png')}/>
            <TextInputBox
                placeholder="First Name"/>
            <TextInputBox
                placeholder="Last Name"/>
            <TextInputBox
                placeholder="Email Address"/>
            <TextInputBox
                placeholder="Password"/>
            <TextInputBox
                placeholder="Confirm Password"/>
            <TextInputBox
                placeholder="Zipcode"/>
            <Button
                title="Continue"/>
            <Text
                style={styles.text}>Already Have an Account? Sign In!</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: win.width,
    },
    text: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 10
    }
})