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
                <TouchableHighlight onPress={ this.props.navigate }>
                    <Text style={styles.white}>Back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    backBtn: {
      top: 5,
      left: 5,
      position: 'absolute'
    },
});
