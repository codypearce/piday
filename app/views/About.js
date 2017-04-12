import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import style from '../styles/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class About extends React.Component {
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
                <BackBtn navigate={() => this._navigate('Settings') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>About</Text>
                    </View>
                    <View style={style.contentSpaceBetween}>
                        <Text style={style.messageLeft}>
                            Piday is an app about the mathematical constant pi and about the day celebrating the beloved number. You can try to memorize as many digits as you can, or try a timed challenge, or take the quiz, or learn more about pi and its history.
                        </Text>
                        <Text style={style.messageLeft}>
                            Bug reports and questions can be sent to algorithmology@gmail.com.
                        </Text>
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}
