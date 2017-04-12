import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Picker,
    AsyncStorage
} from 'react-native';

import style from '../styles/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';
import Keypad from '../components/Keypad';
import piVal from '../components/PI';

export default class Timed extends React.Component {
    constructor(props) {
        super(props);
        this.enterDigit = this.enterDigit.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.tick = this.tick.bind(this);
        this.startTime = this.startTime.bind(this);
        this.chooseTime = this.chooseTime.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: piVal.piString,
            time: 10,
            initialTime: 10, // For endgame
            gameOver: false,
            started: false,
            numWrong: 0
        };
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        });
    }
    componentWillUnmount() {
        this.reset();
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
           });
       }
   }
   startTime() {
       this.interval = setInterval(this.tick, 1000);
       this.setState({
           started: true,
           gameOver: false
       });
   }
   chooseTime(value) {
       this.setState({
           time: value,
           initialTime: value
       });
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
        let seconds = time % 60;
        if(seconds > 59) {
            seconds = '0';
        }
        if(minutes <= 0){
            minutes = '0';
        }
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
    formatDisplay(digits) {
        if(digits.length > 10) {
            let arr = digits.split('');
            let slice = arr.slice(digits.length - 10, digits.length);
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
            initialTime: 10,
            gameOver: false,
            started: false,
            numWrong: 0
        });
    }
    render() {
        if(this.state.started == false) {
            content = <StartScreen startTime={this.startTime} chooseTime={this.chooseTime} time={this.state.time} />
        } else if(this.state.started == true && this.state.gameOver == false ) {
            content = <TimedGame formatTime={this.formatTime} formatDisplay={this.formatDisplay} time={this.state.time}  digits={this.state.digits} numWrong={this.state.numWrong} enterDigit={this.enterDigit} display={this.state.display} />
        } else if(this.state.gameOver == true && this.state.numWrong > 2) {
            content = <ThreeWrong  digits={this.state.digits} numWrong={this.state.numWrong} reset={this.reset} />
        } else if(this.state.gameOver == true) {
            content = <Endgame  correctDigits={this.state.digits} numWrong={this.state.numWrong} reset={this.reset} time={this.state.initialTime} />
        }

        var showThree = null;
        let top = null;
        let subTop = null;

        if(this.state.digits < 10) {
            showThree = '3.';
        } else {
            showThree = '';
        }
        if(this.state.started == false) {
            top = <Text style={style.title}>Timed</Text>;

        } else if(this.state.started == true) {
            top = <Text style={style.titleSmall}>{showThree}{this.formatDisplay(this.state.display)}</Text>;
            subTop= <Text style={timed.subTitle}>{this.formatTime(this.state.time)}</Text>;
        }
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={style.wrapper}>

                    <View style={style.top}>
                        {subTop}
                        {top}
                    </View>
                    <View style={style.content}>
                        {content}
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}
class StartScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={style.contentSpaceBetween}>
                <Text style={style.message}>See how many digits you can get in {this.props.time} seconds. Make 3 mistakes and you lose!</Text>

                <TouchableHighlight style={style.roundedBtn} onPress={ () => this.props.startTime() } underlayColor="rgba(215, 147, 63,.3)">
                    <Text style={style.roundedBtnText}>Start</Text>
                </TouchableHighlight>
                <View tyle={style.content}>
                    <Text style={style.message}> Select Time </Text>
                    <Picker
                        style={timed.picker}
                        selectedValue={this.props.time}
                        onValueChange={(value) => this.props.chooseTime(value)}>
                        <Picker.Item label="10 Seconds" value="10" />
                        <Picker.Item label="20 Seconds" value="20" />
                        <Picker.Item label="30 Seconds" value="30" />
                        <Picker.Item label="1 Minute" value="60" />
                        <Picker.Item label="3 Minutes" value="180" />
                        <Picker.Item label="5 Minutes" value="300" />
                    </Picker>
                </View>
            </View>
        );
    }
}

class TimedGame extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {

        return(
            <View style={style.content}>
            <Text style={style.message}>
                {this.props.digits} Digits
            </Text>
            <Text style={style.message}>
                {this.props.numWrong} Wrong
            </Text>
                <Keypad enterDigit={this.props.enterDigit} />
            </View>

        );
    }
}
class Endgame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            record: 0
        };

    }
    componentWillMount() {
        this.getValue();
    }
    async getValue() {
        try {
            const value = await AsyncStorage.getItem(`@MySuperStore:timedBest${this.props.time}`);
            if(value) {
                this.setState({
                    record: value
                });
            }
        } catch (error) {
            this.setState({
                record: 0
            });
        }
        this.setValue();

    }
    async setValue() {
        try {
            if(this.props.correctDigits > this.state.record) {
                this.setState({
                    message: `You beat your record! Congrats! Your new record is ${this.props.correctDigits}`
                })
                await AsyncStorage.setItem(`@MySuperStore:timedBest${this.props.time}`, String(this.props.correctDigits));

            } else if(this.props.correctDigits == this.state.record) {
                this.setState({
                    message: `You tied your record! Congrats! Your record is ${this.state.record}`
                })
            } else {
                this.setState({
                    message: `Your record is ${this.state.record}`
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return(
            <View style={style.contentSpaceBetween}>
                <Text style={style.message}>
                    You got {this.props.correctDigits} digits in {this.props.time} seconds
                </Text>
                <Text style={style.message}>
                    with {this.props.numWrong} mistakes
                </Text>
                <Text style={style.numDigits}>{this.state.message}</Text>

                <TouchableHighlight onPress={this.props.reset} style={style.roundedBtn} underlayColor="rgba(215, 147, 63,.3)"><Text style={style.roundedBtnText}>Try again</Text></TouchableHighlight>
            </View>
        );
    }
}
class ThreeWrong extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return(
            <View style={style.contentSpaceBetween}>
                <Text style={style.numDigits}>
                    Oh no! You got three wrong!
                </Text>
                <Text style={style.numDigits}>
                    Better luck next time!
                </Text>
                <TouchableHighlight onPress={this.props.reset} style={style.roundedBtn} underlayColor="rgba(215, 147, 63,.3)"><Text style={style.roundedBtnText}>Try again</Text></TouchableHighlight>
            </View>
        );
    }
}



const timed = StyleSheet.create({
    subTitle: {
        color:'#810000',
        fontSize: 32,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
    picker: {
        width: 200,
        backgroundColor: '#d7933f',
        height: 30,
        alignSelf: 'center',
        color: '#810000',
    },
});
