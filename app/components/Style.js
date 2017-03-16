import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        paddingBottom: 50,
        paddingRight: 5,
        paddingLeft: 5
    },
    top: {
        alignItems: 'center',
        flex: 1
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 2
    },
    contentSpaceBetween: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
    },
    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    titleSmall: {
        color:'#810000',
        fontSize: 38,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    titleSmallest: {
        color:'#810000',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    roundedBtnText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 13,
        paddingTop: 8,
        paddingBottom: 8
    },
    message: {
        color: '#d7933f',
        fontSize: 18,
        lineHeight: 20,
        maxWidth: 400,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center'
    },
    messageLeft: {
        color: '#d7933f',
        fontSize: 18,
        lineHeight: 20,
        textAlign: 'left'
    },
    numDigits: {
        color: '#d7933f',
        fontSize: 24,
        textAlign: 'center'
    },

});
