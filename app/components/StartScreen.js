import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator
} from 'react-native';

export default class StartScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}

            >
                <Text>
                    {this.props.title}
                </Text>
                <Button
                title="Start"
                color="blue"
                onPress={this.onButtonPress}
                />
            </View>
        )
    }
}
