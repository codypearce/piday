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

export default class Donate extends React.Component {
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
                    <Text style={styles.title}>Donate</Text>
                </View>


                <View style={styles.container}>
                    <Text style={styles.message}>
                        If you&#39;re feeling generous, please consider donating. Your support allows us to continue to make quality content. Thanks!
                    </Text>
                    <TouchableHighlight  style={styles.roundedBtn} onPress={ () => this._navigate('Home') }>
                        <Text style={styles.centerNav}>
                            Bitcoin
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.roundedBtn} onPress={ () => this._navigate('Home') }>
                        <Text style={styles.centerNav}>
                            Paypal
                        </Text>
                    </TouchableHighlight>

                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    top: {
        bottom: 100
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
        lineHeight: 20,
        textAlign:'center'
    },
    container: {
        backgroundColor: '#810000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerNav: {
        fontSize: 22,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },

    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 15

    }
});
