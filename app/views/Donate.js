import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import style from '../styles/Style';

import BackgroundImage from '../containers/BackgroundImage';
import BackBtn from '../components/BackBtn';
import OpenLink from '../components/OpenLink';

export default class Donate extends React.Component {
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
                        <Text style={style.title}>Donate</Text>
                    </View>
                    <View style={style.contentSpaceBetween}>
                        <Text style={style.message}>
                            If you&#39;re feeling generous, please consider donating. Your support allows us to continue to make quality content. Thanks!
                        </Text>
                        <View >
                            <Text style={style.messageLeft}>You can donate by visiting our website at </Text>
                            <OpenLink style={style.message} url={"http://pidayapp.com"} title={"http://pidayapp.com"} />
                        </View>
                    </View>
                </View>
            </BackgroundImage>
        );
    }
}
