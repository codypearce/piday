import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';

export default class OpenLink extends React.Component {

    handleClick = ()  => {
        var url = this.props.url;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    }
    render() {
        return(
            <TouchableOpacity style={styles.settings} onPress={ this.handleClick } >
                <Text style={styles.link}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    link: {
        color: '#a87230'
    },
});
