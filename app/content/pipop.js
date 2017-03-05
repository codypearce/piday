import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import OpenLink from '../components/OpenLink';

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
const title = 'Pi in Popular Culture';

const content = <View style={styles.container}>
                    <Text style={styles.message}>Pi is perhaps the best known mathematical constant among non-mathematicians, and the public’s fascination with the number shows through the countless references to and celebrations of pi in popular culture. It is referenced in numerous books and movies, including Mission Impossible and The Net. It plays a pivotal role in the Darren Aronofsky thriller Pi, and provides the main character in Life of Pi with his nickname. The writing team behind the animated sitcom The Simpsons, who are known for their mathematical backgrounds, take every opportunity to include references to pi in their work. The digits of pi have inspired a song by Kate Bush, as well as the version numbers of the typesetting computer program TeX. Its creator, Donald Knuth, plans to approach pi with each successive version number (i.e. 3, 3.1, 3.14), with the current version being 3.14159265.
                    </Text>
                    <Text style={styles.message}>For those who want to honor pi in a more challenging way, there exists the world of competitive piphilology, or the memorization and recitation of the digits of pi. Serious competitors use various mnemonic devices to help them recite thousands of digits of pi over the course of several hours. The world record is currently held by Rajveer Meena, who memorized 70,000 digits in 2015 and recited them over the course of nearly 10 hours. The most effective method for memorizing a long string of digits seems to be the Method of Loci, in which the participant associates groups of digits with objects or locations along a familiar or imagined route. For example, the route may be through a house with various objects inside, or down a street with various landmarks on it. To recall the string of digits, the participant mentally retraces the route, observing the digits along with their associated objects or locations along the way.
                    </Text>
                    <Text  style={styles.message}>Another form of mnemonic device for recalling digits of pi is the creation of songs, poems, and stories in a constrained writing style called Pilish, in which each successive word contains a certain number of letters corresponding to each successive digit of pi. For example, in the sentence “How I wish I could recollect pi”, the number of letters in each word spell out pi as 3.141592. While not a particularly effective tool for digit recall, Pilish writing provides a challenging creative outlet for the mathematically minded. Such works span nearly every form of writing and modern language, with perhaps the most prolific being Not A Wake by Mike Keith, which spans an impressive 10,000 digits of pi using 10 different writing styles.</Text>
                    <Text  style={styles.message}>Pi has attracted both mainstream popularity and hardcore enthusiasts, but the beloved constant has also met its fair share of opposition. For example, in 1897, a physician by the name of E.J. Goodwin proposed a bill to the Indiana state legislature declaring a new value, 3.2, for pi. This was not an attempt to simplify the actual value of pi, but rather based on a roundabout argument containing several subtle geometric errors. Representatives in the House were not well versed in the mathematics involved, and, convinced by Goodwin’s previous work on the subject, passed the bill unanimously. After outcry and ridicule from journalists and mathematicians, the Senate rejected the bill, explaining that the matter was not within the realm of the law, but refraining from declaring Goodwin’s theory incorrect. A mathematically rigorous opposition to pi also exists, with growing support for a constant called tau (τ). Tau is defined as the ratio of a circle’s circumference to its radius, as opposed to its diameter, and as such tau is exactly two times larger than pi. The argument that tau is a more fundamental constant than pi revolves around the need to simplify geometric and trigonometric equations, in which pi is often multiplied by two.
                    </Text>
                    <View>
                        <Text style={styles.message}>References and Further Reading:</Text>
                        <OpenLink url={"http://www.pbs.org/newshour/rundown/for-the-love-of-pi-and-the-tao-of-tau/"} title={"Pi in Pop Culture: PBS Newshour"} />
                        <OpenLink url={"http://aperiodical.com/2015/03/%CF%80-and-the-simpsons/"} title={"Pi in The Simpsons"} />
                        <OpenLink url={"http://www.ntg.nl/maps/05/34.pdf"} title={"Pi in TeX"} />
                        <OpenLink url={"http://www.cadaeic.net/notawake.htm"} title={"Not A Wake"} />
                        <OpenLink url={"http://www.guinnessworldrecords.com/world-records/most-pi-places-memorised"} title={"World Record for Most Digits of Pi Memorized"} />
                        <OpenLink url={"http://www.tandfonline.com/doi/abs/10.1080/13554790902776896"} title={"Method of Loci in a Pi Memorizer"} />
                        <OpenLink url={"http://jnsilva.ludicum.org/HMR13_14/Indiana.pdf"} title={"Indiana Legislature Redefining Pi"} />
                    </View>
                </View>

module.exports = {
    title: title,
    content: content
}
