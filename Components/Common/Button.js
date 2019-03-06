
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}>
        <Text
        style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin:10,
    backgroundColor: '#FBD874',
    padding: 5,
    borderRadius: 20,
    fontSize:15,
  },
  text: {
    textAlign: 'center'
  }
});
