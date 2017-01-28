import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator
} from 'react-native';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    render() {
        return (
            <View>
                <Text>
                    {this.props.title}
                </Text>
                <Button
                title="Start"
                color="red"
                onPress={this.onButtonPress}
                />
            </View>
        )
    }
}
