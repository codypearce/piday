import React, { Component } from 'react';

import {
    Text,
    View,
} from 'react-native';

import OpenLink from '../components/OpenLink';
import styles from '../styles/ContentStyle.js';

export default class Whatispiday extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.message}>Pi Day is an unofficial holiday celebrated on March 14th each year. In the United States, it is common to express dates in numerical form with the month preceding the date, so March 14th is 3/14, meant to represent the first three digits of pi. Pi Approximation Day, celebrated on July 22nd, utilizes the date format convention more common to the rest of the world, in which the date precedes the month. Therefore July 22nd is 22/7, where 22÷7 is about 3.142857, which was an early approximation for pi.</Text>
                <Text style={styles.message}>The first Pi Day festivities were held in 1988 at the Exploratorium, an interactive science museum in San Francisco, California. Physicist Larry Shaw organized the event as a way to teach young visitors about the significance of pi, while at the same time celebrating the achievements of mathematics with fun activities. The idea of Pi Day soon spread to schools and colleges throughout the country, and in 2009, the U.S. House of Representatives officially recognized March 14th as Pi Day and encouraged educators around the world to engage in activities to teach students about pi and mathematics.</Text>
                <Text  style={styles.message}>Pi Day celebrations take many forms, but might involve pi- or circle-themed activities, pi reciting contests, discussion of pi and its significance in mathematics, and the making, eating, or throwing of pies. The San Francisco Exploratorium holds a pi parade, in which visitors each hold a sign signifying a digit of pi and march in the appropriate order to the pi shrine, then watch as 314 digits of pi are written out in the sky. March 14th is also the birthday of famed physicist Albert Einstein, so his role in the development of science and mathematics is often celebrated alongside the Pi Day festivities. This is especially true in Princeton, NJ, where Einstein conducted much of his work, and where a four-day long Pi Day festival is held annually.</Text>
                <View >
                    <Text style={styles.message}>References and Further Reading:</Text>
                    <OpenLink url={'http://www.piday.org/'} title={'Pi Day'} />
                    <OpenLink url="http://adrianapollo.com/pi_day.pdf" title={'A History of Pi Day'} />
                    <OpenLink url="http://www.exploratorium.edu/pi/index.html" title={'San Francisco Exploratorium'} />
                    <OpenLink url="https://blogs.scientificamerican.com/observations/how-much-pi-do-you-need/" title={'Pi Approximation Day'} />
                </View>
            </View>
        );
    }
}
