import React from 'react';
import * as firebase from 'firebase';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Button from '../../Components/Common/Button';
import TextInputBox from '../../Components/Common/TextInputBox';

//NAVIGATION: Button onPress should navigate to respective screen
//Load user settings based on userID

const win = Dimensions.get('window');

class LogIn extends React.Component {
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  state = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false
  }

  onLoginSuccess(user) {
  this.setState({
    email: '',
    password: '',
    errorMessage: '',
    loading: false
  });
  alert('Welcome Back')
}


handlePress({ email, password }) {
  const { alert } = Alert;
  this.setState({ loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {alert('User does not exist!')
      });
}

  render() {
    return (
      <View
      style={styles.container}>
        <Image
        style={styles.image}
        resizeMode={'contain'}
        
        source={require('../../../Assets/Images/Streetscape.png')}/>
        <TextInputBox
        placeholder='Email Address'
        autoCorrect={false}
        autoCapitalize={false}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}/>
        <TextInputBox
        placeholder='Password'
        autoCorrect={false}
        autoCapitalize={false}
        secureTextEntry={true}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}/>
        <Button
        title='Sign In'/>
        <Text
        style={styles.text}>Need an Account? Sign up!</Text>
      </View>
    )
  }
}


export default LogIn;

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
  text: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 10
  }
})