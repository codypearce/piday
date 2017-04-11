import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
} from 'react-native';

import style from './Style';

export default class RoundedBtn extends React.Component {
    render() {
        return(
            <TouchableHighlight  style={style.roundedBtn} onPress={ this.props.navigate } underlayColor="rgba(215, 147, 63,.3)">
                <Text style={style.roundedBtnText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
