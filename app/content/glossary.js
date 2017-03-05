import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    message: {
        color: '#d7933f',
        fontSize: 14,
        marginBottom: 20,
        width: 300,
        lineHeight: 25
    },
    bold: {
        fontWeight: '500'
    },


    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const title = 'Glossary';

const content = <View style={styles.container}>
                    <Text style={styles.message}><Text style={styles.bold}>Absolutely normal</Text>: A number that is normal in every base.</Text>
                </View>

module.exports = {
    title: title,
    content: content
}
