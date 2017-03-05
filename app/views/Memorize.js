import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';
import piVal from '../components/PI';

export default class Memorize extends React.Component {
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
                <BackBtn navigate={() => this._navigate('Home') } />

                <View style={styles.top}>
                    <Text style={styles.title}>
                        10k Digits of Pi
                    </Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <Text style={styles.message}>{piVal.piSpaced}</Text>
                    </ScrollView>
                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        top: 50
    },
    top: {
        bottom: 50,
    },
    title: {
        color:'#810000',
        fontSize: 42,
        fontWeight: "700",
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    message: {
        color: '#d7933f',
        fontSize: 18,
        marginBottom: 30,
        width: 300,
        lineHeight: 20,
        textAlign: 'center'
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },


});
