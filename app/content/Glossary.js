import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableHighlight
} from 'react-native';


export default class Glossary extends React.Component {
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
                <Text style={styles.message}><Text style={styles.bold}>Absolutely normal</Text>: A number that is normal in every base.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Algorithm</Text>: The list of basic actions a computer must take to perform a task.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Arc</Text>: A piece of the circumference of a circle. An arc has a length equal to the radius of the circle multiplied by the angle (measured in radians) that the radius must sweep out to form the arc.</Text>

                <Image style={styles.image} source={require('../images/radians.png')}/>

                <Text style={styles.message}><Text style={styles.bold}>Base</Text>: The number of different digits used in a numbering system. Common bases include binary or base-2 (using 2 digits, 0 and 1), decimal or base-10 (using 10 digits, 0 through 9), and hexadecimal or base-16 (using 16 digits, 0 through 9 and A through F).</Text>
                <Text style={styles.message}><Text style={styles.bold}>Bound</Text>: A number that limits the possible values that an unknown number can take. The unknown number must always be greater than a lower bound and less than an upper bound.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Circumference</Text>: The linear distance measured around the edge of a circle.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Circumscribed polygon</Text>: A polygon drawn surrounding a circle, such that the circle just touches the innermost points of the polygon.</Text>

                <Image style={styles.image} source={require('../images/circumscribe.png')}/>

                <Text style={styles.message}><Text style={styles.bold}>Coefficient</Text>: A number multiplying a term in a polynomial equation. In the polynomial equation x^4+2x^3+6=14x, the coefficients are 1, 2, 6, and 14. </Text>
                <Text style={styles.message}><Text style={styles.bold}>Denominator</Text>: The bottom number or divisor in a fraction.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Diameter</Text>: The distance across the widest part of a circle.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Euler’s number (e)</Text>: An irrational number approximately equal to 2.718. It is the base of the natural logarithm function (ln), so that if ln x = y, then x = e^y. The natural logarithm of any number a is defined as the area under the curve of 1/x between the values of x=1 and x=a.</Text>

                <Image style={styles.image} source={require('../images/euler.png')}/>

                <Text style={styles.message}><Text style={styles.bold}>Golden ratio (f)</Text>: An irrational number approximately equal to 1.618. It is the ratio of the long side of a golden rectangle to its short side. A golden rectangle is a rectangle to which a square can be attached on the long side to form another golden rectangle with the same ratio of long side to short side.</Text>

                <Image style={styles.image} source={require('../images/golden.png')}/>

                <Text style={styles.message}><Text style={styles.bold}>Inscribed polygon</Text>: A polygon drawn just within a circle, such that the circle touches the outermost vertices of the polygon.</Text>

                <Image style={styles.image} source={require('../images/inscribe.png')}/>

                <Text style={styles.message}><Text style={styles.bold}>Iteration</Text>: A repetition of some number of steps in a computer algorithm, often with minor changes to the steps.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Irrational number</Text>: A number that cannot be expressed as a fraction with whole numbers in the numerator and denominator. An irrational number has an infinite string of digits after the decimal point, with no pattern to the digits. Examples include the square root of 5, pi, Euler’s number, and the golden ratio.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Nested square root</Text>: A square root appearing under another square root. The innermost square root must be computed first in the order of operations.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Normal number</Text>: A number with an infinite string of digits, in which no digit appears more frequently than any other, and no string of digits appears more frequently than any other string of the same length.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Numerator</Text>: The top number or dividend in a fraction.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Perimeter</Text>: The linear distance measured around the outside of a polygon.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Polygon</Text>: A flat geometric figure composed of some number of straight lines.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Polynomial equation</Text>: An equation that involves variables raised to exponents. For example, x^4+2x^3+6=14x is a polynomial equation. The solutions of the equation are the values of x which cause the left side of the equation to equal the right side of the equation.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Radius</Text>: The distance from the center of a circle to its edge.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Ratio</Text>: The ratio of A to B is the number that results when A is divided by B. It is a representation of how much larger A is than B.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Rational number</Text>: A number that can be expressed as a fraction with a whole number in the numerator and denominator. If it is divided out, the resulting number has a finite number of digits after the decimal point (such as 3/1 = 3 or 3/4 = 0.75) or has an infinite number of digits with a repeating pattern (such as 19/3 = 6.333… or 17/7 = 2.428571428571…).</Text>
                <Text style={styles.message}><Text style={styles.bold}>Regular polygon</Text>: A polygon in which all sides are equal and all angles are equal. Regular polygons may be convex polygons, such as a pentagon, or star polygons, such as a pentagram. Convex regular polygons approach a circle as more sides are added.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Transcendental number</Text>: An irrational number that cannot be expressed as the solution to a polynomial equation with whole number coefficients. Examples include Euler’s number and pi.</Text>
                <Text style={styles.message}><Text style={styles.bold}>Version number</Text>: A number attached to a software release indicating that changes have been made to a previous version of the software.</Text>
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
    bold: {
        fontWeight: 'bold'
    },
});
