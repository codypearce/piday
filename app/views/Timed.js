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

import Keypad from '../components/Keypad';

export default class Timed extends React.Component {
    constructor(props) {
        super(props);
        this.enterDigit = this.enterDigit.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.tick = this.tick.bind(this);
        this.startTime = this.startTime.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: Math.PI.toString(),
            time: 10,
            gameOver: false,
            started: false,
            numWrong: 0
        }
    }
    _navigate(route){
      this.props.navigator.push({
        name: route,
      })
    }
    enterDigit(value) {
        if(this.state.started == false) {
            return;
        } else if(this.state.numWrong >= 3) {
            clearInterval(this.interval);
            this.setState({
                started: false,
                gameOver: true
            });
        } else if(this.state.pi[this.state.digits] == value) {
           this.setState({
               display: this.state.display + value.toString(),
               digits: this.state.digits + 1
           });
       } else {
           this.setState({
               numWrong: this.state.numWrong + 1
           })
       }
   }
   startTime() {
       this.interval = setInterval(this.tick, 1000);
       this.setState({
           started: true,
           gameOver: false
       })
   }
   tick() {
       this.setState({time: this.state.time - 1});
       if (this.state.time <= 0) {
           clearInterval(this.interval);
           this.setState({
               started: false,
               gameOver: true
           });
       }
   }
   formatTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time;
        if(seconds > 59) {
            seconds = '0'
        }
        if(minutes <= 0){
            minutes = '0';
        }
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#1976D2',
            }}

            >
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
                }}>
                    <View style={{
                        marginTop: -50,
                        marginBottom: 30
                    }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            {this.formatTime(this.state.time)}
                        </Text>

                    </View >
                    <View style={{marginBottom: 40}} >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24,
                                marginBottom: 20
                            }}>
                            {this.state.digits} Digits
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24,
                            }}>
                            {this.state.numWrong} Wrong
                        </Text>
                        </View>
                    <View style={{marginBottom: 50}} >

                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            PI: {this.state.display}
                        </Text>
                    </View>
                    <Keypad enterDigit={this.enterDigit} />

                </View>

                <View style={{
                    marginTop: 20,

                }} >
                    <TouchableHighlight style={{height: 40, backgroundColor: 'white', flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center'}} onPress={ () => this.startTime() }>
                        <Text style={{color: 'black'



                        }}>Start</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
