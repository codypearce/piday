import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView
} from 'react-native';

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
                <View style={styles.top}>
                    <Text style={styles.title}>
                        Learn
                    </Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <TouchableHighlight onPress={ () => this._navigate('whatispi') } style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>What is Pi?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('whatispiday') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>What is Pi Day?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('propertiesofpi') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>The Properties of Pi</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('historyofpi') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>The History of Pi</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('computingdigits') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>Computing Digits of Pi</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('pimathsci') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>Pi in Math & Science</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('pipop') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>Pi in Popular Culture</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this._navigate('glossary') }  style={styles.learnBtn} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.learnBtnText}>Glossary</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>

            </BackgroundImage>


        )
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        top: 50
    },
    top: {
        bottom: 50,
    },
    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: "700",
        fontFamily: 'Roboto'
    },
    message: {
        color: '#d7933f',
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        width: 250,
        lineHeight: 20
    },
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

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },


});
