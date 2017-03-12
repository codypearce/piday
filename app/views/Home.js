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

                        <TouchableHighlight  style={style.roundedBtn} onPress={ () => this._navigate('Game') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}> Play </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={style.roundedBtn} onPress={ () => this._navigate('Timed') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}> Timed </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={style.roundedBtn} onPress={ () => this._navigate('Quiz') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}> Quiz </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={style.roundedBtn} onPress={ () => this._navigate('Learn') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}> Learn </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </BackgroundImage>
        )
    }
}
