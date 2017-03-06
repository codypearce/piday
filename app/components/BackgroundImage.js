import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

import AdmobComponent from './Admobcomponent';

export default class BackgroundImage extends React.Component {
    render() {
        return(
            <Image
            style={styles.backgroundImg}
            source={require('../images/bg.png')}>
                {this.props.children}
                <AdmobComponent />
            </Image>
        )
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
