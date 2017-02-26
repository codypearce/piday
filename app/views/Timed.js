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
        this.reset = this.reset.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: piVal.piString,
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
        } else if(this.state.numWrong == 2 && this.state.pi[this.state.digits] !== value) {
            clearInterval(this.interval);
            this.setState({
                numWrong: this.state.numWrong + 1,
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
    formatDisplay(digits) {
        if(digits.length > 15) {
            let arr = digits.split('');
            let slice = arr.slice(digits.length - 15, digits.length);
            return slice.join('');
        }
        return digits;
    }
    reset() {
        clearInterval(this.interval);
        this.setState({
            display: '',
            digits: 0,
            time: 10,
            gameOver: false,
            started: false,
            numWrong: 0
        });
    }
    render() {
        if(this.state.started == false) {
            content = <StartButton startTime={this.startTime} />
        } else if(this.state.started == true && this.state.gameOver == false ) {
            content = <TimedGame formatTime={this.formatTime} formatDisplay={this.formatDisplay} time={this.state.time}  digits={this.state.digits} numWrong={this.state.numWrong} enterDigit={this.enterDigit} display={this.state.display} />
        } else if(this.state.gameOver == true && this.state.numWrong > 2) {
            content = <ThreeWrong  digits={this.state.digits} numWrong={this.state.numWrong} reset={this.reset} />
        } else if(this.state.gameOver == true) {
            content = <Endgame  digits={this.state.digits} numWrong={this.state.numWrong} reset={this.reset} />
        }
        return (
            <View style={styles.wrapper}>
                <View  style={styles.backBtn}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    {content}

                </View>

            </View>
        )
    }
}
class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{marginTop: 20}}>
                <TouchableHighlight style={styles.startBtn} onPress={ () => this.props.startTime() }>
                    <Text style={styles.black}>Start</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
class TimedGame extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        let showThree = null;
        if(this.props.digits < 15) {
            showThree = '3.';
        } else {
            showThree = '';
        }
        return(
            <View style={styles.container}>
                <View style={styles.time}>
                    <Text style={styles.title}>
                        {this.props.formatTime(this.props.time)}
                    </Text>

                </View >
                <View style={{marginBottom: 40}} >
                    <Text style={styles.digits}>
                        {this.props.digits} Digits
                    </Text>
                    <Text style={styles.title}>
                        {this.props.numWrong} Wrong
                    </Text>
                    </View>
                    <View style={styles.pi}>
                        <Text style={styles.title}>
                            {showThree}{this.props.formatDisplay(this.props.display)}
                        </Text>
                    </View>
                <Keypad enterDigit={this.props.enterDigit} />
            </View>

        )
    }
}
class Endgame extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return(
            <View style={styles.container}>
                <Text style={styles.digits}>
                    You got {this.props.digits} digits in 10 seconds
                </Text>
                <Text style={styles.title}>
                    with {this.props.numWrong} mistakes
                </Text>
                <TouchableHighlight onPress={this.props.reset} ><Text style={styles.tryAgain}>Try again</Text></TouchableHighlight>
            </View>
        )
    }
}
class ThreeWrong extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Oh no! You got three wrong!
                </Text>
                <Text style={styles.digits}>
                    Better luck next time!
                </Text>
                <TouchableHighlight onPress={this.props.reset} ><Text style={styles.tryAgain}>Try again</Text></TouchableHighlight>
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
    pi: {
        marginBottom: 50
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
        alignItems: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    tryAgain: {
        color: "white",
        marginTop: 30,
        fontSize: 28
    }
});
