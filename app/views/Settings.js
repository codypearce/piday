import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class Settings extends React.Component {
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
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>More</Text>
                    </View>
                    <View style={style.content}>
                        <TouchableHighlight  style={style.roundedBtn} onPress={ () => this._navigate('Home') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}>
                                Turn off ads
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={style.roundedBtn} onPress={ () => this._navigate('Donate') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}>
                                Donate
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={style.roundedBtn} onPress={ () => this._navigate('Records') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}>
                                Records
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={style.roundedBtn} onPress={ () => this._navigate('About') } underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}>
                                About
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </BackgroundImage>
        )
    }
}
