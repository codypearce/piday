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
import LearnBtn from '../components/LearnBtn';

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
                            <LearnBtn text={'What is Pi?'} navigate={() => this._navigate('Whatispi') } />
                            <LearnBtn text={'The Properties of Pi'} navigate={() => this._navigate('Propertiesofpi') } />
                            <LearnBtn text={'The History of Pi'} navigate={() => this._navigate('Historyofpi') } />
                            <LearnBtn text={'Computing Digits of Pi'} navigate={() => this._navigate('Computingdigits') } />
                            <LearnBtn text={'Pi in Math & Science'} navigate={() => this._navigate('Pimathsci') } />
                            <LearnBtn text={'Pi in Popular Culture'} navigate={() => this._navigate('Pipop') } />
                            <LearnBtn text={'Glossary'} navigate={() => this._navigate('Glossary') } />
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
