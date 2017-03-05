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

export default class LearnPage extends React.Component {
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
                <BackBtn navigate={() => this._navigate('Learn') } />

                <View style={styles.top}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        {this.props.content}
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
        fontSize: 48,
        fontWeight: "700",
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    message: {
        color: '#d7933f',
        fontSize: 16,
        marginBottom: 30,
        width: 300,
        lineHeight: 20
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },


});
