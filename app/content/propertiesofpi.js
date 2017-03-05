import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import OpenLink from '../components/OpenLink';

export default class Propertiesofpi extends React.Component {
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
                <Text style={styles.message}>Recall that pi is defined as the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>ratio</Text> of the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>circumference</Text> of a circle to its <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>diameter</Text> diameter. To understand the mathematical properties of pi, it is helpful to examine a similar quantity in simple <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>polygons</Text>, that is, the ratio of the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>perimeter</Text> of the polygon to its width. In the case of the square, the perimeter is always exactly four times larger than the width. This ratio is a mathematical constant, that is, it is always the same value regardless of the size of the square. The opposite of a constant is a variable, like the height of the square, which could take on different values for different squares. Pi is another mathematical constant, as is any ratio of the perimeter of a <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>regular polygon</Text> to its width. Other mathematical constants include Euler’s number (<Text style={styles.italic}>e</Text>), which is approximately equal to 2.718, and the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>golden ratio</Text> (φ), which is approximately equal to 1.618. There are also physical constants, such as the speed of light in a vacuum (<Text style={styles.italic}>c</Text>), which is roughly 3*10^8 m/s.
                </Text>
                <Text style={styles.message}>The ratio of a square’s perimeter to its width is a whole number, but the ratio for more complicated polygons is often not a whole number. In fact, it is generally an <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>irrational</Text> number, that is, a number that cannot be expressed as a fraction with whole numbers in the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>numerator</Text> and <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>denominator</Text>. The ratio for a regular octagon is one such example, as it must be expressed as a fraction involving the square root function. Calculating this ratio out gives a number with infinite digits after the decimal point, and the digits never fall into a repeating pattern. Pi is also an irrational number, as are Euler’s number and the golden ratio.
                </Text>

                <Text  style={styles.message}>In addition to being irrational, pi is also a <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>transcendental</Text> number, that is, it is not the solution to any <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>polynomial</Text> equation with whole number <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>coefficients</Text>. The ratio of an octagon’s perimeter to its width is not transcendental, however, because it is the solution to the polynomial equation x^2 + 16x-64=0. Likewise, the golden ratio is the solution to the equation x^2 - x - 1 = 0. Generally, numbers that can be expressed as a fraction involving the square roots of <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>rational</Text> numbers will not be transcendental. There is no such expression for Euler’s number, as proven by Charles Hermite in 1873, or pi, as proven by Ferdinand von Lindemann in 1882.
                </Text>
                <Text  style={styles.message}>There is still much to be learned about the mathematical properties of pi. For example, it is still not known whether various combinations of transcendental numbers, such as π+ e, π* e, or e^(π^2), are themselves transcendental. Another area of research is in determining whether pi is a <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>normal</Text> number, that is, whether the digits are uniformly distributed. A normal number must have no string of digits, such as the string “2953” or the string “9999”, occur more frequently than any other string of the same length. If a number is <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>absolutely normal</Text>, then this property must hold whether the number is expressed in decimal (base-10), as is the convention in everyday mathematics, in binary (base-2), as is the convention in computer programming, or in any other <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>base</Text>. After examining the digits of pi that are currently known, mathematicians believe that pi is normal, but it has not been proven.
                </Text>
                <View>
                <Text style={styles.message}>References and Further Reading:</Text>
                    <OpenLink url={"http://mathworld.wolfram.com/IrrationalNumber.html"} title={"Irrational Number"} />
                    <OpenLink url={"http://mathworld.wolfram.com/TranscendentalNumber.html"} title={"Transcendental Number"} />
                    <OpenLink url={"http://mathworld.wolfram.com/NormalNumber.html"} title={"Normal Number"} />
                    <OpenLink url={"https://www.nde-ed.org/EducationResources/Math/Math-e.htm"} title={"Euler’s Number"} />
                    <OpenLink url={"http://www.cut-the-knot.org/do_you_know/GoldenRatio.shtml"} title={"The Golden Ratio"} />
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
        color: '#916127'
    },
});
