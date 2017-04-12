/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { AdMobBanner } from 'react-native-admob';

export default class AdmobComponent extends React.Component {
    render() {
        return(
            <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-2794177008243568/9903145739"
                testDeviceID="EMULATOR"
                style={styles.ad}
                didFailToReceiveAdWithError={(err) => {
                    /*eslint-disable no-console */
                    console.log(err);
                }}
             />
        );
    }
}

const styles = StyleSheet.create({
    ad: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'stretch'
    },
});
