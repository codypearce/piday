import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';
import RoundedBtn from '../components/RoundedBtn';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        });
    }
    pay() {
        const InAppBilling = require('react-native-billing');
        InAppBilling.open()
        .then(() => {
            InAppBilling.isPurchased('turnoffads').then((value) => {
                if(value == true) {
                    Alert.alert(`You alreay purchased this. Thanks!`);
                    return InAppBilling.close()
                }
            });
        })
        .then((details) => {
            InAppBilling.purchase('turnoffads').then((details) => {
                Alert.alert(`Thanks for turning off ads!`);
                return InAppBilling.close();
            });

        })
        .catch((err) => {
            console.log(err);
        });
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
                        <TouchableHighlight  style={style.roundedBtn} onPress={this.pay} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={style.roundedBtnText}>
                                Turn off ads
                            </Text>
                        </TouchableHighlight>

                        <RoundedBtn text={'Donate'} navigate={() => this._navigate('Donate') } />
                        <RoundedBtn text={'Records'} navigate={() => this._navigate('Records') } />
                        <RoundedBtn text={'About'} navigate={() => this._navigate('About') } />

                    </View>
                </View>
            </BackgroundImage>
        );
    }
}
