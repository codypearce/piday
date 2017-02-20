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
            <View style={{
                backgroundColor: '#1976D2',
                flex: 1,
            }}>
                <View  style={{top: 5, left: 5}}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={{color: 'white'}}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

                >
                    <View
                        style={{
                            marginTop: -100,
                            marginBottom: 50,

                        }}>
                        <TouchableHighlight onPress={ () => this._navigate('Whatispi') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>What is PI?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>Irrational Numbers</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>PI Algorithms?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>What is PI Day?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>PI History</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>PI in the real world</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={{color: 'white', textAlign: 'center'}}>Other constants</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        )
    }
}
