import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';


export default class Records extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memorize: 0,
            timedBest10: 0,
            timedBest20: 0,
            timedBest30: 0,
            timedBest60: 0,
            timedBest180: 0,
            timedBest300: 0
        }
    }
    _navigate(route){
      this.props.navigator.push({
        name: route, // Matches route.name
      })
    }
    componentWillMount() {
        this.getValue();
    }
    async getValue() {
        try {
            const memorize = await AsyncStorage.getItem('@MySuperStore:bestMemorize');
            const timedBest10 = await AsyncStorage.getItem('@MySuperStore:timedBest10');
            const timedBest20 = await AsyncStorage.getItem('@MySuperStore:timedBest20');
            const timedBest30 = await AsyncStorage.getItem('@MySuperStore:timedBest30');
            const timedBest60 = await AsyncStorage.getItem('@MySuperStore:timedBest60');
            const timedBest180 = await AsyncStorage.getItem('@MySuperStore:timedBest180');
            const timedBest300 = await AsyncStorage.getItem('@MySuperStore:timedBest300');
            if(memorize) {
                this.setState({
                    memorize: memorize,
                    timedBest10: timedBest10,
                    timedBest20: timedBest20,
                    timedBest30: timedBest30,
                    timedBest60: timedBest60,
                    timedBest180: timedBest180,
                    timedBest300: timedBest300,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <View style={styles.wrapper}>
                    <View  style={styles.backBtn}>
                        <TouchableHighlight onPress={ () => this._navigate('Home') }>
                            <Text style={styles.white}>Back</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.digits}>
                            <Text style={styles.largeWhite}>
                                 Your Records
                            </Text>
                        </View>
                        <View>
                        <Text>Memorize pi record: {this.state.memorize}</Text>
                        <Text>Timed 10 seconds record: {this.state.timedBest10}</Text>
                        <Text>Timed 20 seconds record: {this.state.timedBest20}</Text>
                        <Text>Timed 30 seconds record: {this.state.timedBest30}</Text>
                        <Text>Timed 60 seconds record: {this.state.timedBest60}</Text>
                        <Text>Timed 180 seconds record: {this.state.timedBest180}</Text>
                        <Text>Timed 300 seconds record: {this.state.timedBest300}</Text>
                        </View>

                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1976D2',
        flex: 1
    },
    backBtn: {
        top: 5,
        left: 5
    },
    white: {
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    digits: {
        marginTop: -100,
        marginBottom: 50
    },
    pi: {
        marginBottom: 50
    },
    largeWhite: {
        color: 'white',
        fontSize: 24
    },
    piDisplay: {
        color: 'white',
        fontSize: 24
    },
    endContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tryAgain: {
        color: "white",
        marginTop: 30,
        fontSize: 28
    }

});
