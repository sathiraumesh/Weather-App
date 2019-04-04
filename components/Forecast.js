import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Forcast extends Component {

    constructor(props) {
        super(props);
       
    }


    render() {
        return (
            <View>
                <Text style={styles.bigText}>{this.props.main}</Text>
                <Text style={styles.mainText}>{this.props.description}</Text>
                <Text style={styles.bigText}>{this.props.temp}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    bigText: {
      
        fontSize: 20,
        textAlign: 'center',
        margin: 10, 
        color: 'white'
    },
    mainText: 
    {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    }
});


Forcast.defaultProps = {
    main: "Clouds",
    description: "few Clouds",
    temp: 45.7
}