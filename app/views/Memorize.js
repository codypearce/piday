import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';

import style from '../styles/Style';

import BackgroundImage from '../containers/BackgroundImage';
import BackBtn from '../components/BackBtn';
import piVal from '../components/PI';

export default class Memorize extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        });
    }
    render() {
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.titleSmall}>
                            10k Digits of Pi
                        </Text>
                    </View>
                    <View style={style.content}>
                        <ScrollView>
                            <Text style={style.message}>{piVal.piSpaced}</Text>
                        </ScrollView>
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}
