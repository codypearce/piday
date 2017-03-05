import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import OpenLink from '../components/OpenLink';


export default class Pimathsci extends React.Component {
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
                <Text style={styles.message}>Although the original use of the number pi was simply to relate a circle’s <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>circumference</Text> to its <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>diameter</Text>, it has since proven ubiquitous in math and science. The appearance of pi in many mathematical formulas can be traced to its role in defining the standard unit of angular measure, the radian. The common unit of angular measure, the degree, is defined arbitrarily. An angle that completes one full revolution (<Text style={styles.italic}>i.e.</Text> a circle) is defined as having 360 degrees, but the number 360 was chosen simply because the Babylonian numbering system was based around the number 60. The radian is the result of thinking about a circle as a <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>radius</Text> sweeping out an arc, or small section of the circumference. If a circle has a radius of r, it will have a circumference of 2π<Text style={styles.italic}>r</Text>. If the number of radians in a circle is defined to be 2π, then the length of an <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>arc</Text> will be simply <Text style={styles.italic}>r</Text>θ, where θ is the angle, in radians, that the radius must sweep through to form the arc. Consequently, if the angle swept is 1 radian, then the arc length is exactly equal to the radius.
                </Text>
                <Text style={styles.message}>Because of this definition of a radian, it is common to express angles as fractions of pi. Therefore, pi is involved in calculations of angles, lengths, and areas of all other geometric figures. This is especially important in the case of a triangle, because the lengths of the sides of a triangle define the basic trigonometric functions sine, cosine, and tangent. Trigonometry is a well-studied and pervasive field of mathematics, and thus these functions cause pi to appear in many equations in which circles are not directly involved. One example of such an equation is the solution to Buffon’s needle problem, first stated in 1777 by Georges-Louis Leclerc, Comte de Buffon. Buffon asked “If a needle of length <Text style={styles.italic}>L</Text> is dropped onto a surface with many parallel lines each a distance <Text style={styles.italic}>D</Text> apart, what is the probability that the needle will cross one of the lines?” The probability for a needle shorter than the distance between lines is surprisingly simple: (2<Text style={styles.italic}>L</Text>)/(π<Text style={styles.italic}>D</Text>). Therefore, if <Text style={styles.italic}>L</Text> and <Text style={styles.italic}>D</Text> are known quantities, and the approximate probability of a needle crossing a line is found experimentally by dropping many needles onto the surface and counting the number of needles that do indeed cross a line, then a value for pi can be calculated. In fact, this is an example of a Monte Carlo method, in which a probability, found experimentally or via computer simulation, is used to find a numerical value for some quantity, in this case pi.
                </Text>
                <Text  style={styles.message}>Geometric and trigonometric functions also make pi integral to the field of complex numbers. Complex numbers are combinations of real numbers (such as 4, -3.27, and pi) and imaginary numbers, which are the result of taking the square root of a negative number. The most basic imaginary number is 𝑖, which is defined as the square root of -1. Complex numbers are thought of as points on a plane, with the two axes of the plane being the real number line (on the horizontal axis) and the imaginary number line (on the vertical axis). Because these points lie on a plane, geometry and trigonometry, and therefore pi, play a large role in the analysis of complex numbers. For example, one of the most fundamental mathematical equations, Euler’s identity, relates Euler’s constant, pi, and 𝑖 together using the geometry of the complex number plane.
                </Text>
                <Text  style={styles.message}>In addition to being fundamental to geometry, trigonometry, and complex analysis, pi appears sporadically in fields such as number theory, calculus, and probability. Because of its pervasiveness in mathematics, pi tends to appear in many scientific formulas as well. Sometimes, as in the case of the meandering <Text style={styles.link}  onPress={ () => this._navigate('Glossary') }>ratio</Text> of rivers, the appearance of pi is a result of the direct involvement of circles. The meandering ratio of a river is defined as the ratio of the total length of a river to the straight line distance between the two ends of the river. When conditions are ideal for erosion, the meandering ratio of a river is often close to pi. This is because erosion exacerbates small bends in the river, enlarging the bend until it is nearly a full circle. Thus, the river makes diversions to travel around the circumference of many circles, while the straight line distance only takes into account the diameter of the circle.
                </Text>
                <Text  style={styles.message}>Pi also appears in formulas that involve more complicated 3D geometry, such as the formula for the electric field produced by a point charge. A point charge is simply a very small particle with some electric charge, and because it is charged, it produces electric field lines pointing radially outward in all directions. The derivation of the electric field involves summing up all the field lines that pierce an imaginary sphere surrounding the particle, and the formula for the surface area of that sphere involves pi.
                </Text>
                <Text  style={styles.message}>Even when no geometry is readily apparent, pi can be involved in scientific formulas if they describe periodic phenomena, that is, phenomena that occur repeatedly. Examples include the swinging of a pendulum, the electromagnetic waves that describe how light travels, and the underlying equations in quantum mechanics. All periodic functions can be described in terms of sines and cosines, which are themselves periodic if plotted on a graph. Therefore, periodic phenomena are related to trigonometry, and thus to pi, although the relationship is not immediately obvious.
                </Text>
                <View>
                    <Text style={styles.message}>References and Further Reading:</Text>
                    <OpenLink url={"http://mathworld.wolfram.com/Degree.htm"} title={"Angular Degree"} />
                    <OpenLink url={"http://www.livescience.com/34132-what-makes-pi-special.html"} title={"Overview of Pi in Math and Science"} />
                    <OpenLink url={"http://mragheb.com/NPRE%20498MC%20Monte%20Carlo%20Simulations%20in%20Engineering/The%20Buffon's%20Needle%20Problem.pdf"} title={"Buffon’s Needle"} />
                    <OpenLink url={"http://science.sciencemag.org/content/271/5256/1710"} title={"River Meandering"} />
                    <OpenLink url={"http://www.livescience.com/51399-eulers-identity.html"} title={"Euler’s Identity"} />
                    <OpenLink url={"http://physics.stackexchange.com/questions/74254/why-is-there-a-factor-of-4-pi-in-certain-force-equations"} title={"Pi in Electromagnetism"} />
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
