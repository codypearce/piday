import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
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
            <View style={styles.container}>
                <Text style={styles.title}>
                    Pi day
                </Text>
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

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1976D2',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginTop: -100,
        marginBottom: 100
    },
    centerNav: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5
    }
});
