/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

import AdmobComponent from './Admobcomponent';

export default class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAd: null
        };
    }
    componentDidMount() {
        const InAppBilling = require('react-native-billing');
        InAppBilling.open()
        .then(() => {
            InAppBilling.isPurchased('turnoffads').then((value) => {
                if(value == true) {
                    this.setState({
                        showAd: false
                    });
                } else {
                    this.setState({
                        showAd: true
                    });
                }
            });
        })
        .then((details) => {
            return InAppBilling.close();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        let ad = null;
        if(this.state.showAd) {
            ad = <AdmobComponent />;
        }
        return(
            <Image
            style={styles.backgroundImg}
            source={require('../images/bg.png')}>
                {this.props.children}
                {ad}
            </Image>
        );
    }
}


const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
