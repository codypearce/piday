import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import style from '../components/Style';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

export default class Learn extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    render() {
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Home') } />
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Text style={style.title}>
                            Learn
                        </Text>
                    </View>
                    <View style={style.content}>
                        <ScrollView>
                            <TouchableHighlight onPress={ () => this._navigate('Whatispi') } style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>What is Pi?</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Whatispiday') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>What is Pi Day?</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Propertiesofpi') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>The Properties of Pi</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Historyofpi') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>The History of Pi</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Computingdigits') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>Computing Digits of Pi</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Pimathsci') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>Pi in Math & Science</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Pipop') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>Pi in Popular Culture</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={ () => this._navigate('Glossary') }  style={learn.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                                <Text style={learn.learnBtnText}>Glossary</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </View>
            </BackgroundImage>


        )
    }
}
const learn = StyleSheet.create({
    learnBtnText: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },
    learnBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#810000',
    },
});
