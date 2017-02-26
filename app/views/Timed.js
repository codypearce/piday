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
import piVal from '../components/PI';

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
            pi: piVal.piString,,
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
            <View style={styles.wrapper}>
                <View  style={styles.backBtn}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.time}>
                        <Text style={styles.title}>
                            {this.formatTime(this.state.time)}
                        </Text>

                    </View >
                    <View style={{marginBottom: 40}} >
                        <Text style={styles.digits}>
                            {this.state.digits} Digits
                        </Text>
                        <Text style={styles.title}>
                            {this.state.numWrong} Wrong
                        </Text>
                        </View>
                    <View style={{marginBottom: 50}} >

                        <Text style={styles.title}>
                            PI: {this.state.display}
                        </Text>
                    </View>
                    <Keypad enterDigit={this.enterDigit} />

                </View>

                <View style={{marginTop: 20}}>
                    <TouchableHighlight style={styles.startBtn} onPress={ () => this.startTime() }>
                        <Text style={styles.black}>Start</Text>
                    </TouchableHighlight>
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
    black: {
        color: 'black'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        marginTop: -50,
        marginBottom: 30
    },
    digits: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20
    },
    title: {
        color:'white',
        fontSize: 24
    },
    startBtn: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
