import React, { Component } from 'react';
import { Button, Alert, StyleSheet, View, Text } from 'react-native';
const showAlert = (...props) => () => Alert.alert(...props);

export default class index extends Component {

    render() {
        return (

            <Button title="Learning" onPress={showAlert(
                'Hey There',
                'This is an example of how should we work with default button alert!'
            )
            } style={{
                width: 280,
                flex: 1,
                height: 290,
                backgroundColor: 'red'
            }} />
        );
    }
}

const styles = StyleSheet.flatten({

});