import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Learn extends React.Component {
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
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.digits}>
                        <TouchableHighlight onPress={ () => this._navigate('Whatispi') }>
                            <Text style={styles.centerNav}>What is pi?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>Irrational Numbers</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>pi Algorithms?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>What is piDay?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>pi History</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>piin the real world</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.centerNav}>Other constants</Text>
                        </TouchableHighlight>
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
    centerNav: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center'
    }
});
