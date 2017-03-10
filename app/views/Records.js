import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class Records extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memorize: 0,
            timedBest10: 0,
            timedBest20: 0,
            timedBest30: 0,
            timedBest60: 0,
            timedBest180: 0,
            timedBest300: 0
        }
    }
    _navigate(route){
      this.props.navigator.push({
        name: route, // Matches route.name
      })
    }
    componentWillMount() {
        this.getValue();
    }
    async getValue() {
        try {
            const memorize = await AsyncStorage.getItem('@MySuperStore:bestMemorize');
            const timedBest10 = await AsyncStorage.getItem('@MySuperStore:timedBest10');
            const timedBest20 = await AsyncStorage.getItem('@MySuperStore:timedBest20');
            const timedBest30 = await AsyncStorage.getItem('@MySuperStore:timedBest30');
            const timedBest60 = await AsyncStorage.getItem('@MySuperStore:timedBest60');
            const timedBest180 = await AsyncStorage.getItem('@MySuperStore:timedBest180');
            const timedBest300 = await AsyncStorage.getItem('@MySuperStore:timedBest300');
            if(memorize) {
                this.setState({
                    memorize: memorize || 0,
                    timedBest10: timedBest10 || 0,
                    timedBest20: timedBest20 || 0,
                    timedBest30: timedBest30 || 0,
                    timedBest60: timedBest60 || 0,
                    timedBest180: timedBest180 || 0,
                    timedBest300: timedBest300 || 0,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Settings') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>Records</Text>
                    </View>

                    <View style={style.content}>
                        <Text style={style.messageLeft}>Memorize pi record: {this.state.memorize}</Text>
                        <Text style={style.messageLeft}>Timed 10 seconds record: {this.state.timedBest10}</Text>
                        <Text style={style.messageLeft}>Timed 20 seconds record: {this.state.timedBest20}</Text>
                        <Text style={style.messageLeft}>Timed 30 seconds record: {this.state.timedBest30}</Text>
                        <Text style={style.messageLeft}>Timed 60 seconds record: {this.state.timedBest60}</Text>
                        <Text style={style.messageLeft}>Timed 180 seconds record: {this.state.timedBest180}</Text>
                        <Text style={style.messageLeft}>Timed 300 seconds record: {this.state.timedBest300}</Text>
                    </View>
                </View>
            </BackgroundImage>
        )
    }
}
