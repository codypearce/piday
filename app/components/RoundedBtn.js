import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
} from 'react-native';

export default class RoundedBtn extends React.Component {
    render() {
        return(
            <TouchableHighlight  style={styles.roundedBtn} onPress={ this.props.navigate } underlayColor="rgba(215, 147, 63,.3)">
                <Text style={styles.roundedBtnText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    roundedBtnText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 13,
        paddingTop: 8,
        paddingBottom: 8
    },
});
