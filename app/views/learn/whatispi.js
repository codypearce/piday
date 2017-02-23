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

export default class Whatispi extends React.Component {
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
                <View  style={styles.backBtn}>
                    <TouchableHighlight onPress={ () => this._navigate('Back') }>
                        <Text style={styles.backBtn}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.digits}>
                            <Text style={styles.centerText}>What is PI?</Text>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1976D2',
        flex: 1
    },
    backBtn: {
      top: 5,
      left: 5
    },
    white: {
      color: 'white'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    digits: {
      marginTop: -100,
      marginBottom: 50
    },
    centerText: {
        color: 'white',
        textAlign: 'center'
    }
});
