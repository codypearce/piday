import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';


import OpenLink from '../components/OpenLink';


export default class Computingdigits extends React.Component {
    constructor(props) {
        super(props);
    }
    _navigate(route){
      this.props.navigator.push({
        name: route,
      })
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.message}>Even the most precise scientific calculations, those used in the navigation of satellites and the determination of physical constants, require only 32 digits of pi to achieve more than the desired precision. These digits had been found by the early 1600s, yet the race is still on to calculate more digits of pi, with the world record being around 22 trillion digits as of 2016. This race does have some use outside of bringing fame to record-holders, since programs that calculate pi are used to test computers for bugs that might affect precision or data storage. Furthermore, the string of known digits of pi provides evidence, though not proof, that pi is a normal number, since each digit seems to appear with uniform frequency. The search for more digits of pi has not only pushed mathematics forward in many cases, but may someday hold the key to distinguishing pi from other irrational numbers.
                </Text>
                <Text style={styles.message}>Computers take instructions in the form of algorithms, or lists of basic steps or actions. In the case of algorithms to calculate pi, the basic steps are generally arithmetic computations, with the goal of calculating one piece of an infinitely long sum or product. To find more digits of pi, the computer is simply instructed to perform the computation again, with minor changes, to calculate the next piece of the sum or product. After many iterations of this computation, the computer adds together the pieces of the sum or multiplies together the pieces of the product, resulting in a value for pi that is correct to a certain number of digits.
                </Text>
                <Text  style={styles.message}>The first formula that could be turned into an algorithm to calculate pi was the work of Francois Viete, who expressed the number 2/π as an infinitely long product in 1593. This formula holds the distinction of being the first to represent a number as an infinite product, and this breakthrough paved the way for entirely new branches of mathematics. Unfortunately, the nested square roots and the need to multiply pieces of the product together made this a very slow calculation, even for a computer to perform. To calculate the first 60 digits of pi would require a computer to find approximately 100 pieces of the product, the last of which would involve a nested square root calculation that is 100 layers deep.
                </Text>
                <Text  style={styles.message}>'More efficient algorithms, such as those based on Machin-like formulas, involve sums instead of products. Machin-like formulas are variations of an expression for pi involving the trigonometric function arctangent (or inverse tangent) found by John Machin in 1706. While the expression itself doesn’t appear to contain an infinite sum, the arctangent function cannot be computed exactly, and must itself be represented as a particular infinite sum called a Taylor series. Machin-like formulas make relatively efficient algorithms, and were used to calculate pi well into the era of electronic computers.'
                </Text>
                <Text  style={styles.message}>Today, the most popular algorithm for the calculation of pi is the Chudnovsky algorithm, published by brothers David and Gregory Chudnovsky in 1989. It is based on a variation of a formula discovered by Indian mathematician Srinivasa Ramanujan in the early 1900s. This algorithm is extremely efficient, and was used for all world record calculations of pi since 2010. Each record holder used a computer program called y-cruncher, developed by Alexander Yee in 2009. This program uses the Chudnovsky algorithm to compute pi, and Ramanujan’s formula to verify that the calculated digits are correct, breaking up the computation over several different computers to increase efficiency. Although the current world record stands at 22 trillion digits, it is actually possible to compute any particular digit of pi without calculating the others, using a digit extraction formula. The BBP formula, published by David H. Bailey, Peter Borwein, and Simon Plouffe in 1995, was the first such formula for pi. It can use hexadecimal (base-16) calculations to determine any digit of pi, although the further the digit is from the decimal point, the more calculation time is required.
                </Text>
                <View>
                    <Text style={styles.message}>References and Further Reading:</Text>
                    <OpenLink url={"http://crd-legacy.lbl.gov/~dhbailey/dhbpapers/pi-quest.pdf"} title={"Overview of Pi Computation"} />
                    <OpenLink url={"http://pi2e.ch/"} title={"World Record Computation of Pi"} />
                    <OpenLink url={"http://www.numberworld.org/y-cruncher"} title={"y-cruncher Software"} />
                </View>
            </View>
        )
    }
}
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
    link: {
        color: '#a87230'
    },
});
