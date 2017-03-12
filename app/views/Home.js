import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Image
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import SettingsGear from '../components/SettingsGear';
import RoundedBtn from '../components/RoundedBtn';

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
            <BackgroundImage>
                <SettingsGear navigate={() => this._navigate('Settings') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>PI DAY</Text>
                    </View>
                    <View style={style.content}>
                        <RoundedBtn text={'Memorize'} navigate={() => this._navigate('Memorize') } />
                        <RoundedBtn text={'Play'} navigate={() => this._navigate('Game') } />
                        <RoundedBtn text={'Timed'} navigate={() => this._navigate('Timed') } />
                        <RoundedBtn text={'Quiz'} navigate={() => this._navigate('Quiz') } />
                        <RoundedBtn text={'Learn'} navigate={() => this._navigate('Learn') } />
                    </View>
                </View>
            </BackgroundImage>
        )
    }
}
