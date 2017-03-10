import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableHighlight
} from 'react-native';

import OpenLink from '../components/OpenLink';


export default class Historyofpi extends React.Component {
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
                <Text style={styles.message}>Because pi comes up so readily in geometric calculations, there is evidence of many early civilizations independently studying and using the number. The approximation of pi as 3 was very common in antiquity, appearing in ancient Chinese, Indian, and Babylonian texts, as well as the Old Testament of the Bible. A Babylonian tablet dating between 1900 and 1600 BCE uses a better approximation of 3 ⅛ for pi in a calculation, while the Egyptian Rhind Papyrus, dating around 1650 BCE, states that a square that is 8/9 the width of a circle will have the same area as the circle, implying that pi is about 3.1605.
                </Text>
                <Text style={styles.message}>The first known record of a rigorous attempt to pin down a value of pi comes from the Greek mathematician Bryson of Heraclea in the 5th century BCE. He calculated the areas of <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>polygons inscribed</Text> inside and <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>circumscribed</Text> outside a circle to find lower and upper <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>bounds</Text> for the value of pi, noting that a polygon with more sides better approximated a circle. However, area calculations proved difficult, so it wasn’t until Archimedes of Syracuse used the same technique, calculating <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>perimeters</Text> instead, that progress was made. Archimedes calculated the perimeters of polygons with 96 sides, giving bounds of 3 10/71 &lt; π &lt; 3 1/7. Chinese mathematicians independently discovered this method of inscribing and circumscribing polygons, and by the late 5th century CE, mathematician Zu Chongzhi had calculated bounds of 3.1415926 &lt; π &lt; 3.1415927 using polygons with 24,576 sides.
                </Text>

                <Image style={styles.image} source={require('../images/archimedes.png')}/>
                <Text style={styles.caption}>“The perimeter of an inscribed polygon will be smaller than the circumference of a circle, while the perimeter of a circumscribed polygon will be larger”</Text>

                <Text  style={styles.message}>The next big breakthrough in the study of pi was to represent the number using arithmetic expressions instead of geometric calculations. However, because pi is <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>transcendental</Text>, it must be represented using infinitely long sums, products, or fractions. Better approximations for pi can be calculated by using more pieces of the infinitely long sum, product, or fraction. This breakthrough came in 1593, when French mathematician Francois Viete, inspired by the method of inscribing and circumscribing polygons, devised an infinite product with <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>nested square roots</Text> to represent and calculate digits of pi. Over the next few hundred years, a large number of expressions for pi were discovered, many based on the relationship between pi and the trigonometric functions, as well as the emerging study of calculus.
                </Text>

                <Image style={styles.image} source={require('../images/viete.png')}/>
                <Text style={styles.caption}>“Viete’s formula, involving an infinite product and nested square roots”</Text>


                <Text  style={styles.message}>Mathematicians continued to calculate more digits of pi, but by the mid-1700s their attention had turned to studying the number itself. It was around this time that Leonhard Euler (pronounced OY-LER) popularized the use of the Greek letter for the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>ratio</Text> of the <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>circumference</Text> of a circle to its diameter, a convention first used by Welsh mathematician William Jones in 1706. In 1761, Swiss mathematician Johann Heinrich Lambert proved that pi is <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>irrational</Text>, but it wasn’t until 1882 that German mathematician Ferdinand von Lindemann proved that pi is also transcendental
                </Text>
                <Text  style={styles.message}>By the mid-1900s, emerging computer technology provided another leap forward for the calculation of digits of pi. In 1949, a team of mathematicians used the recently developed Electronic Numerical Integrator and Calculator (ENIAC) to calculate 2,037 digits of pi in just 70 hours, forever outpacing human mathematicians. Progress soon exploded, and, as of 2016, the record for known digits of pi is held by Peter Trueb, whose computer system calculated about 22 trillion digits in 105 days. Since the advent of the modern computer, mathematicians have focused their attention on proofs concerning the nature of pi, for example, whether it is a <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>normal</Text> number, as well as developing newer and faster methods for calculating digits of pi using a computer.
                </Text>
                <View>
                    <Text style={styles.message}>References and Further Reading:</Text>
                    <OpenLink url={"https://www.exploratorium.edu/pi/history_of_pi/"} title={"History of Pi: Exploratorium"} />
                    <OpenLink url={"http://www.ualr.edu/lasmoller/pi.html"} title={"History of Pi: University of Arkansas"} />
                    <OpenLink url={"https://www.math.rutgers.edu/~cherlin/History/Papers2000/wilson.html"} title={"History of Pi: Rutgers"} />
                    <OpenLink url={"http://link.springer.com/referenceworkentry/10.1007%2F978-1-4020-4425-0_9282"} title={"Pi in Indian Mathematics"} />
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
    link: {
        color: '#916127'
    },
});
