import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import questionsSrc from '../components/Questions';

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
            let rand = Math.round(Math.random() * 18); // should be 1 less number of questions in questionsSrc
            while(questionsArr.indexOf(rand) > -1) {
                rand = Math.round(Math.random() * 18);
            }
            questionsArr.push(rand);
        }
        this.setState({
            questionsArr: questionsArr
        })
    }
    updateQuestion(newIdx) {
        // why pass in value? because react isn't waiting until this.state.questionIdx is updated before calling update question even though it's in the callback
        // What this means is that the first question has to be answered twice before it updates the question to the new question so passing in the value fixes this
        let src = questionsSrc[this.state.questionsArr[newIdx]];
        this.setState({
            currentQuestion: src.question,
            currentChoices: [src.choices[0], src.choices[1], src.choices[2], src.choices[3]],
            currentAnswer: src.answer
        })
    }
    startQuiz() {
        this.updateQuestion(0); // should start at index 0, have to pass in value so yea
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
        }

    }
    nextQuestion() {
        let newIdx = this.state.questionIdx + 1;
        this.setState({
            questionIdx: newIdx
        },
            this.updateQuestion(newIdx) // see comment on updateQuestion question
        );
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
        let message = null;
        if(this.props.score == 10) {
            message = `You got ${this.props.score} out 10! Amazing! You're a pi expert!`;
        } else if(this.props.score > 8) {
            message = `You got ${this.props.score} out 10! Amazing! You really know pi!`;
        } else if(this.props.score > 5) {
            message = `You got ${this.props.score} out 10! Good job!`;
        } else if(this.props.score > 1) {
            message = `You got ${this.props.score} out 10! Better luck next time!`;
        } else {
            message = `You got ${this.props.score} out 10! Check out the learn section!`;
        }
        return(
            <View>
                <Text style={styles.message}>{message}</Text>
                <View>
                    <TouchableHighlight style={styles.startBtn} onPress={ () => this.props.reset() }>
                        <Text style={styles.black}>Try again</Text>
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
