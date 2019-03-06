import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class TextInputBox extends Component {
  render() {
    return (
      <TextInput
      style={styles.input}
      placeholder={this.props.placeholder}
      onChangeText={this.props.onChangeText}
      autoCapitalize={this.props.autoCapitalize}
      autoCorrect={this.props.autoCorrect}
      secureTextEntry={this.props.secureTextEntry}
      keyboardType={this.props.keyboardType}
      textContentType={this.props.textContentType}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    margin: 5,
    backgroundColor: 'white'
  }
})