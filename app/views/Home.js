import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

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
            <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Image
                        style={styles.settings}
                        source={require('../images/settings.png')}
                    />
                    <Text style={styles.title}>PI DAY</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight  onPress={ () => this._navigate('Game') }>
                        <Text style={styles.centerNav}>
                            Play
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => this._navigate('Timed') }>
                        <Text style={styles.centerNav}>
                            Timed
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => this._navigate('Quiz') }>
                        <Text style={styles.centerNav}>
                            Quiz
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => this._navigate('Learn') }>
                        <Text style={styles.centerNav}>
                            Learn
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => this._navigate('Settings') }>
                        <Text style={styles.centerNav}>
                            Settings
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={ () => this._navigate('Records') }>
                        <Text style={styles.centerNav}>
                            Records
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1976D2',
        flex: 1,
    },
    container: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    centerNav: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5
    },
    top: {
        backgroundColor: '#d7933f',
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    settings: {
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0.5,
        transform: [{scale: .7}]
    }
});
