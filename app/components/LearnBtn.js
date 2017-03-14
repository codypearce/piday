import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';

import style from './Style';

export default class LearnBtn extends React.Component {

    render() {
        return(
            <TouchableHighlight onPress={this.props.navigate} style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                <Text style={learn.learnBtnText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}
const learn = StyleSheet.create({
    learnBtnText: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },
    learnBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#810000',
    },
});
