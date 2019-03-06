import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EmailModal from '../Components/Modals/EmailModal';
import PasswordModal from '../Components/Modals/PasswordModal';
import ZipModal from '../Components/Modals/ZipModal';
import PhoneModal from '../Components/Modals/PhoneModal';


export default class AccountScreen extends Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Image
        style={styles.userimg}
        source={require('../../Assets/Images/userImg.png')}
        resizeMode="contain"/>
        <Text
        style={styles.text}>Welcome, Nicole!</Text>
        <EmailModal/>
        <PasswordModal/>
        <ZipModal/>
        <PhoneModal/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  userimg: {
    borderRadius: 100,
    height: 200,
    width: 200,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: 100,
    marginBottom: 15,
    alignSelf: 'center',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: .2,
  },
  row: {
    backgroundColor: '#F0C64C',
    padding: 5,
    margin: 3
  },
  text: {
    textAlign: 'center',
    fontSize: 40
  }
});

// <Image
//   source={require('../../assets/logo1.png')}
//   />
