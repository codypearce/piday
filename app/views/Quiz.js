import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.startQuiz = this.startQuiz.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            isStarted: false,
            endQuiz: false,
            questionIdx: 0,
            questionsArr: [0, 1, 2],
            score: 0,
            currentQuestion: 0,
            currentChoices: 0,
            currentAnswer: 0
        }
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    componentWillMount() {
        this.setUpQuestions();
    }
    setUpQuestions() {
        let questionsArr = [];
        for(let i = 0; i < 10 ; i++) {
            let rand = Math.round(Math.random() * 10);
            while(questionsArr.indexOf(rand) > -1) {
                rand = Math.round(Math.random() * 10);
            }
            questionsArr.push(rand);
        }
        this.setState({
            questionsArr: questionsArr
        })
        this.updateQuestion();
    }
    updateQuestion() {
        let src = questionsSrc[this.state.questionsArr[this.state.questionIdx]];
        this.setState({
            currentQuestion: src.question,
            currentChoices: [src.choices[0], src.choices[1], src.choices[2], src.choices[3]],
            currentAnswer: src.answer
        })
    }
    startQuiz() {
        this.setState({
            isStarted: true
        })
    }
    answerQuestion(choice) {
        if(choice == this.state.currentAnswer) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if(this.state.questionIdx >= 9) {
            this.endQuiz();
        } else {
            this.nextQuestion();
            this.updateQuestion();
        }

    }
    nextQuestion() {
        this.setState({
            questionIdx: this.state.questionIdx + 1
        })
    }
    endQuiz() {
        this.setState({
            endQuiz: true
        })
    }
    reset() {
        this.setState({
            isStarted: false,
            endQuiz: false,
            questionIdx: 0,
            questionsArr: [0, 1, 2],
            score: 0,
            currentQuestion: 0,
            currentChoices: 0,
            currentAnswer: 0
        })
        this.setUpQuestions();
    }
    render() {
        let content = null;
        if(this.state.isStarted == false) {
            content = <StartButton startQuiz={this.startQuiz} />
        } else if(this.state.isStarted == true && this.state.endQuiz == false) {
            content = <Question question={this.state.currentQuestion} choices={this.state.currentChoices} answerQuestion={this.answerQuestion} />
        } else {
            content = <Endquiz score={this.state.score} reset={this.reset}/>
        }
        return (
            <View style={styles.wrapper}>
                <View  style={styles.backBtn}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View style={styles.digits}>
                        <Text>{this.state.questionIdx}</Text>
                        <Text>{this.state.questionsArr}</Text>
                        {content}
                    </View>

                </View>
            </View>
        )
    }
}
class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{marginBottom: 50}}>
                <Text style={styles.message}>Multiple Choice ten question quiz, see how many you can get!</Text>
                <TouchableHighlight style={styles.startBtn} onPress={ () => this.props.startQuiz() }>
                    <Text style={styles.black}>Start</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <View>
                <Text> {this.props.question}</Text>
                <View>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[0]) }>
                        <Text style={styles.white}>{this.props.choices[0]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[1])}>
                        <Text style={styles.white}>{this.props.choices[1]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[2]) }>
                        <Text style={styles.white}>{this.props.choices[2]}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.props.choices[3]) }>
                        <Text style={styles.white}>{this.props.choices[3]}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
class Endquiz extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <View>
                <Text> You got {this.props.score} out of 10 correct! Good job!</Text>
                <View>
                    <TouchableHighlight onPress={this.props.reset}>
                        <Text style={styles.white}>Try again</Text>
                    </TouchableHighlight>
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
    black: {
        color: 'black'
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
  startBtn: {
      height: 40,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20
  },
  message: {
      color:'white',
      fontSize: 16,
      marginBottom: 30,
      textAlign: 'center',
      width: 250
  }
});
const questionsSrc = [
   {
       question: "When is Pi Day celebrated?",
       choices:  ["March 14", "June 28", "October 14", "December 25"],
       answer: 'March 14'
   },
   {
       question: "In what year did the U.S. House of Representatives first officially recognize Pi Day?",
       choices:  ["1988", "1995", "2009", "2013"],
       answer: '2009'
   },
   {
       question: "The birthday of which famous scientist falls on Pi Day?",
       choices:  ["Leonhard Euler", "Albert Einstein", "Isaac Newton", "Archimedes"],
       answer: 'Albert Einstein '
   },
   {
       question: "Where were the first known Pi Day celebrations held?",
       choices:  ["The San Francisco Exploratorium", "Caltech", "The Liberty Science Center", "M.I.T."],
       answer: 'The San Francisco Exploratorium'
   },
   {
       question: "Who organized the first known Pi Day celebrations?",
       choices:  ["Larry Shaw", "Larry Page", "Larry Wilmore", "Larry Johnson"],
       answer: 'Larry Shaw'
   },
   {
       question: "When is Pi Approximation Day celebrated?",
       choices:  ["July 22", "March 14", "July 14", "March 22"],
       answer: 'July 22'
   },
   {
       question: "What is the circumference of a circle?",
       choices:  ["The distance across the widest part of the circle", "The linear distance around the circle", "The distance from the center of the circle to its edge", "The area of a square inscribed in the circle"],
       answer: 'The linear distance around the circle'
   },
   {
       question: "What is the diameter of a circle?",
       choices:  ["The distance across the widest part of the circle", "The linear distance around the circle", "The distance from the center of the circle to its edge", "The area of a square inscribed in the circle"],
       answer: 'The distance across the widest part of the circle'
   },
   {
       question: "Which of the following has not yet been proven?",
       choices:  ["Pi is an irrational number", "Pi is a mathematical constant", "Pi is a normal number", "Pi is a transcendental number"],
       answer: 'Pi is a normal number'
   },
   {
       question: "In what year was pi proven to be transcendental?",
       choices:  ["1751", "1882", "1917", "1949"],
       answer: '1882'
   },
   {
       question: "Which of the following is a rational number?",
       choices:  ["The ratio of an octagon's perimeter to its width", "The ratio of a square's perimeter to its width", "The ratio of a circle's circumference to its diameter", "The golden ratio"],
       answer: 'The ratio of a square\'s perimeter to its width'
   },
   {
       question: "Which of the following would give the best approximation for pi?",
       choices:  ["The ratio of a square's perimeter to its width", "The ratio of a pentagon's perimeter to its width", "The ratio of a hexagon's perimeter to its width", "The ratio of an octagon's perimeter to its width"],
       answer: 'The ratio of an octagon\'s perimeter to its width'
   },
   {
       question: "Pi is believed to be a normal number. Which of the following is true of normal numbers?",
       choices:  ["The digits of a normal number have a set pattern", "A normal number can be expressed in terms of a geometric figure", "No digit in a normal number occurs more frequently than any other digit", "A number that is absolutely normal might be normal in binary but not in base 10"],
       answer: 'No digit in a normal number occurs more frequently than any other digit'
   },
   {
       question: "Which approximation for pi is closest to that found in the Rhind Papyrus?",
       choices:  ["Pi = 3", "Pi = 3 1/7", "Pi = 3.1605", "Pi = 3.14"],
       answer: 'Pi = 3.1605'
   },
   {
       question: "Which approximation for pi is found in the Old Testament of the Bible?",
       choices:  ["Pi = 3", "Pi = 3 1/7", "Pi = 3.1605", "Pi = 3.14"],
       answer: 'Pi = 3'
   },
   {
       question: "Which mathematician used polygons with 24,576 sides to approximate pi?",
       choices:  ["Archimedes of Syracuse", "Zu Chongzhi", "François Viète", "Bryson of Heraclea "],
       answer: 'Zu Chongzhi'
   },
   {
       question: "Who is credited with popularizing the use of the greek letter pi to represent the ratio of the circumference of a circle to its diameter?",
       choices:  ["Leonhard Euler", "Ferdinand von Lindemann", "Johann Heinrich Lambert", "François Viète"],
       answer: 'Leonhard Euler'
   },
   {
       question: "As of 2016, what is the approximate record for digits of pi calculated?",
       choices:  ["About 130 million", "About 58 billion", "About 22 trillion", "About 382 trillion"],
       answer: 'About 22 trillion'
   },
   {
       question: "Which computer calculated 2,037 digits of pi in 1949?",
       choices:  ["Atanasoff–Berry Computer (ABC)", "Electronic Numerical Integrator and Calculator (ENIAC)", "Deep Blue", "Babbage Difference Engine"],
       answer: 'Electronic Numerical Integrator and Calculator (ENIAC)'
   },

]
