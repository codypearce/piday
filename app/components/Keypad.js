import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Keypad extends React.Component {
    constructor(props) {
        super(props);
    }
    mapKeys(arr) {
        return arr.map(a => <Key key={a.toString()} value={a} enterDigit={this.props.enterDigit} />);
    }
    render() {
        let rowOne = [1, 2, 3],
            rowTwo = [4, 5, 6],
            rowThree = [7, 8, 9],
            rowFour = [0, "."];

        return(
            <View className="keypad" >
                <View className="keyRow" style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>{this.mapKeys(rowOne)}</View>
                <View className="keyRow" style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>{this.mapKeys(rowTwo)}</View>
                <View className="keyRow" style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>{this.mapKeys(rowThree)}</View>
                <View className="keyRow" style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>{this.mapKeys(rowFour)}</View>

            </View>
        )
    }
}

class Key extends React.Component {
    render() {
        const value = this.props.value;
        return(
            <TouchableHighlight className="key"

            onPress={this.props.enterDigit.bind(this, value)}
            underlayColor="#2084e8"
             >
             <Text style={{
                 color: 'white',
                 paddingTop: 10,
                 paddingBottom: 10,
                 paddingLeft: 20,
                 paddingRight: 20,
                 fontSize: 28
             }}>{value.toString()}</Text>
             </TouchableHighlight>
        )
    }
}
