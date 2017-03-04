import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import SettingsGear from '../components/SettingsGear';

export default class Home extends React.Component {
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
                <SettingsGear navigate={() => this._navigate('Settings') } />

                <View style={styles.top}>
                    <Text style={styles.title}>PI DAY</Text>
                </View>


                <View style={styles.container}>
                    <TouchableHighlight  style={styles.roundedBtn} onPress={ () => this._navigate('Game') }>
                        <Text style={styles.centerNav}>
                            Play
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this._navigate('Timed') }>
                        <Text style={styles.centerNav}>
                            Timed
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this._navigate('Quiz') }>
                        <Text style={styles.centerNav}>
                            Quiz
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.roundedBtn} onPress={ () => this._navigate('Learn') }>
                        <Text style={styles.centerNav}>
                            Learn
                        </Text>
                    </TouchableHighlight>

                </View>
            </BackgroundImage>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#810000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
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
    top: {
        bottom: 75
    },

    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 15

    }
});
