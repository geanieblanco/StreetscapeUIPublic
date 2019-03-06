import React from 'react';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';
import * as firebase from 'firebase';
import Button from '../../Components/Common/Button';
import TextInputBox from '../../Components/Common/TextInputBox';
import { StackNavigator } from 'react-navigation';
import Drawer from '../../Navigation/Drawer';
// import config from '../../../db/Firebase';

const config = {
  apiKey: "AIzaSyCOEESnVu5lR9oMJcunyPHkWHDVndMM55o",
  authDomain: "streetscape-1543095602512.firebaseapp.com",
  databaseURL: "https://streetscape-1543095602512.firebaseio.com",
  projectId: "streetscape-1543095602512",
  storageBucket: "streetscape-1543095602512.appspot.com",
  messagingSenderId: "789271057384"
};

firebase.initializeApp(config);

//NO AUTH STATE
class NoAuth extends React.Component {
  static navigationOptions = { header: null }
  
    render() {
      return (
        <View style={styles.container}>
          <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../../Assets/Images/Streetscape.png')}/>
          <Button
          style={styles.button}
          title="Sign In"
          onPress={()=> this.props.navigation.navigate('SignIn')}
          />
          <Button
          style={styles.button}
          title="Sign Up"
          onPress={()=> this.props.navigation.navigate('SignUp')}
          />
        </View>
      )
    }
}

class SignUp extends React.Component {
  constructor() {
    super();
  }

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    modalVisible: false
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  static navigationOptions = { header: null }
      render() {
          return (
              <View style={styles.container}>
              <Image
                  style={styles.image}
                  resizeMode={'contain'}
                  source={require('../../../Assets/Images/Streetscape.png')}/>
              <TextInputBox
                  placeholder="First Name"
                  onChangeText={firstName => this.setState({ firstName })}
                  value={this.state.firstName}/>
              <TextInputBox
                  placeholder="Last Name"
                  onChangeText={lastName => this.setState({ lastName })}
                  value={this.state.lastName}/>
              <TextInputBox
                  autoCorrect={false}
                  autoCapitalize={"none"}
                  placeholder="Email Address"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}/>
              <TextInputBox
                  autoCorrect={false}
                  autoCapitalize={"none"}
                  secureTextEntry={true}
                  placeholder="Password"/>
              <TextInputBox
                  placeholder="Confirm Password"
                  autoCorrect={false}
                  autoCapitalize={"none"}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}/>
              <TextInputBox
                  placeholder="Zipcode"
                  onChangeText={zipcode => this.setState({ zipcode })}
                  value={this.state.zipcode}/>
              <Button
                  title="Continue"
                  onPress={() => this.handleSignUp()}/>
              <Text
                  style={styles.text}
                  onPress={()=> this.props.navigation.navigate('SignIn')}>Already Have an Account? Sign In!</Text>
          </View>
          )
      }
  }
  
//SIGN IN
  class SignIn extends React.Component {
    static navigationOptions = { header: null }
    constructor() {
      super();
    }

    state = {
      email: "",
      password: "",
      errorMessage: "",
      loading: false
    }

    handleLogin = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={require('../../../Assets/Images/Streetscape.png')}/>
            <TextInputBox
              placeholder='Email Address'
              textContentType={'emailAddress'}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}/>
            <TextInputBox
              placeholder='Password'
              textContentType={'password'}
              autoCorrect={false}
              autoCapitalize={'none'}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}/>
            <Button
              title='Sign In'
              onPress={() => this.handleLogin()}/>
            <Text
              style={styles.text}
              onPress={()=> this.props.navigation.navigate('SignUp')}>Need an Account? Sign up!</Text>
        </View>
      )
    }
  }

  class Main extends React.Component {
    static navigationOptions = { header: null }

    render(){
      return(
        <Drawer/>
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
        width: '90%',
        alignSelf: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'gray',
      fontSize: 10
    },
    button: {
        flex: 1
    },
    text: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 10
    }
  })

const AuthFlow = StackNavigator({
  
  Unknown: {
    screen: NoAuth,
  },
  SignUp: {
    screen: SignUp,
  },
  SignIn: {
    screen: SignIn
  },
  Main: {
    screen: Main
  }
}, {
    initialRouteName: 'Unknown',
});

export default AuthFlow;