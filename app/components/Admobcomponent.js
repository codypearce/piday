import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  AdMobBanner
} from 'react-native-admob'


export default class AdmobComponent extends React.Component {
    render() {
        return(
            <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDeviceID="EMULATOR"
                style={styles.ad}
                didFailToReceiveAdWithError={(err) => {
                    console.log(err);
                }}
             />
        )
    }
}


const styles = StyleSheet.create({
    ad: {
        position: 'absolute',
        bottom: 1,
        alignSelf: 'stretch'
    },
});
