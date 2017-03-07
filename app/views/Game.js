import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  Image
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';
import Keypad from '../components/Keypad';
import piVal from '../components/PI';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.enterDigit = this.enterDigit.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: piVal.piString,
            gameOver: false,
            showThree: true
        }
    }
    _navigate(route){
      this.props.navigator.push({
        name: route, // Matches route.name
      })
    }
    enterDigit(value) {
        if(this.state.pi[this.state.digits] == value) {
            this.setState({
                display: this.state.display + value.toString(),
                digits: this.state.digits + 1
            });
        } else {
            this.setState({
                gameOver: true
            });
        }

   }
   resetGame() {
       this.setState({
           display: '',
           digits: 0,
           gameOver: false
       })
   }
   formatDisplay(digits) {
       if(digits.length > 9) {
           let arr = digits.split('');
           let slice = arr.slice(digits.length - 9, digits.length);
           return slice.join('');
       }
       return digits;
   }
    render() {
        let content = null;
        let showThree = null;
        if(this.state.gameOver) {
            content = <GameOver resetGame={this.resetGame} correctDigits={this.state.digits} />
        } else {
            content = <Keypad enterDigit={this.enterDigit} />
        }
        if(this.state.digits < 9) {
            showThree = '3.';
        } else {
            showThree = '';
        }
        var display = this.state.display;
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>
                            {showThree}{this.formatDisplay(this.state.display)}
                        </Text>
                    </View>


                    <View style={style.content}>
                        <Text style={style.numDigits}>
                            {this.state.digits} Digits
                        </Text>
                        {content}
                    </View>
                </View>
            </BackgroundImage>
        )
    }
}
class GameOver extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null,
            record: 0
        }

    }
    componentWillMount() {
        this.getValue();
    }
    async getValue() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:bestMemorize');
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
                await AsyncStorage.setItem('@MySuperStore:bestMemorize', String(this.props.correctDigits));

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
                <Text style={style.numDigits}>{this.state.message}</Text>

                <TouchableHighlight onPress={this.props.resetGame}  style={style.roundedBtn} underlayColor="rgba(215, 147, 63,.3)" ><Text style={style.roundedBtnText}>Try again</Text></TouchableHighlight>
            </View>
        )
    }
}
