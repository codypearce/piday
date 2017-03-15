import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
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
            rowFour = [0, '.'];

        return(
            <View style={styles.keypad}>
                <View style={styles.keyRow}>{this.mapKeys(rowOne)}</View>
                <View style={styles.keyRow}>{this.mapKeys(rowTwo)}</View>
                <View style={styles.keyRow}>{this.mapKeys(rowThree)}</View>
                <View style={styles.keyRow}>{this.mapKeys(rowFour)}</View>
            </View>
        );
    }
}

class Key extends React.Component {
    render() {
        const value = this.props.value;
        return(
            <TouchableHighlight className="key" onPress={this.props.enterDigit.bind(this, value)} underlayColor="rgba(215, 147, 63,.3)">
                <Text style={styles.key}>{value.toString()}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    keyRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    key: {
        color: '#d7933f',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 34
    }
});
