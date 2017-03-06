import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

export default class BackBtn extends React.Component {
    render() {
        return(
            <View  style={styles.backBtn}>
                <TouchableHighlight onPress={ this.props.navigate } underlayColor="rgba(215, 147, 63,.3)">
                    <Image source={require('../images/arrow.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    backBtn: {
      top: 5,
      left: 5,
      position: 'absolute',
      opacity: 0.5,
      transform: [{scale: .7}]
    },
});
