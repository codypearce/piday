import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    render() {
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Settings') } />
                <View style={styles.top}>
                    <Text style={styles.title}>About</Text>
                </View>


                <View style={styles.content}>

                        <Text style={styles.message}>
                            Piday is an app about the mathematical constant pi and about the day celebrating the beloved number. You can try to memorize as many digits as you can, or try a timed challenge, or take the quiz, or learn more about pi and its history.
                        </Text>
                        <Text style={styles.message}>
                            Bug reports and questions can be sent to pidayapp@gmail.com.
                        </Text>

                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        bottom: 100,
    },
    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    message: {
        color: '#d7933f',
        fontSize: 16,
        marginBottom: 30,
        width: 300,
        lineHeight: 20
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
