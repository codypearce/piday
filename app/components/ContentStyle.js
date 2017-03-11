import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
    message: {
        color: '#d7933f',
        fontSize: 14,
        marginBottom: 20,
        width: 300,
        lineHeight: 25
    },
    caption: {
        color: 'white',
        fontSize: 14,
        width: 300,
        marginBottom: 25
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: 300,
        height: 150,
        margin: 0
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: '#916127'
    },
});
