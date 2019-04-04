/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Forcast from "./components/Forecast"


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      zip: "",
      main: "Clouds",
      description: "few Clouds",
      temp: 45.7

    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      zip: event.nativeEvent.text, S
    })
    fetch("api endpoint").then(res => res.json()).then(result => {
      this.setState({
        main: result.weather[0].main,
        description: result.weather[0].description,
        temp: result.main.temp
      })
    });

  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>Your input Here {this.state.zip}</Text>
        <Forcast main={this.state.main} description={this.state.description} temp={this.state.temp} >
        </Forcast>
        <TextInput style={styles.input} onSubmitEditing={this.handleTextChange}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});
