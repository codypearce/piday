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

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const title = 'What is Pi?';

const content = <View style={styles.container}>
                    <Text style={styles.message}>Pi is the name given to the ratio of the circumference of a circle, or the linear distance around the circle, to its diameter, or width. No matter how large or small the circle is, this ratio will always be a constant number, approximately equal to 3.14159. Because pi also happens to be an irrational number, the digits after the decimal point trail on forever with no repeating pattern. You can find a list of the first 10,000 digits in the Digits of Pi section.</Text>
                    <Text style={styles.message}>Pi takes its name from the lowercase Greek letter π that modern mathematicians use to symbolize this infinitely long number. Yet the study of pi is not a recent development, as historical texts show that civilizations across the globe have been investigating this deceptively simple ratio for thousands of years. As modern mathematics and science were being developed, it became clear that pi was one of the most fundamental and pervasive constant numbers. It shows up in formulas describing various mathematical and physical phenomena, sometimes by design, but often unexpectedly, each time sparking years of fruitful investigation. The advent of modern computing provided a huge leap forward for the study of pi, and it remains at the forefront of mathematics today, as much is yet unknown about its properties.</Text>
                    <Text  style={styles.message}>Perhaps due to a combination of its rich cultural history, interesting mathematical properties, and conceptual simplicity, pi now enjoys a place of honor in popular culture. It has been the inspiration for art, music, films, novels, puns, and poetry, as well as contests to memorize as much of its endless string of digits as possible. A holiday, called Pi Day, is set aside specifically for learning about and celebrating this fascinating and pervasive number.</Text>
                </View>

module.exports = {
    title: title,
    content: content
}
