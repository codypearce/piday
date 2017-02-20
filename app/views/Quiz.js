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
        this.state = {
            isStarted: false,
            questionIdx: 0,
            questionsArr: [],
            score: 0
        }
    }
    _navigate(route){
        this.props.navigator.push({
            name: route,
        })
    }
    setUpQuestions() {
        let questionsArr = [];
        for(let i = 0; i <= 2; i++) {
            let rand = Math.round(Math.random() * 3);
            while(questionsArr.indexOf(rand) > -1) {
                rand = Math.round(Math.random() * 3);
            }
            questionsArr.push(rand);
        }
        this.setState({
            questionsArr: questionsArr
        })
    }
    startQuiz() {
        this.setUpQuestions();
        this.setState({
            isStarted: true
        })
    }
    answerQuestion(choice, answer) {
        if(choice == answer) {
            this.setState({
                score: this.state.score + 1,
                questionIdx: this.state.questionIdx + 1
            })
        }

    }
    render() {
        let content = null;
        if(this.state.isStarted == false) {
            content = <Button onPress={this.startQuiz} title="Start Quiz" />
        } else if(this.state.isStarted == true) {
            content = <Question questionIdx={this.state.questionIdx} questionsArr={this.state.questionsArr} answerQuestion={this.answerQuestion} />
        }
        return (
            <View style={{
                backgroundColor: '#1976D2',
                flex: 1,
            }}>
                <View  style={{top: 5, left: 5}}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={{color: 'white'}}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

                >
                    <View
                        style={{
                            marginTop: -100,
                            marginBottom: 50
                        }}>
                        {content}
                        <Text>{this.state.score}</Text>
                    </View>

                </View>
            </View>
        )
    }
}
const questions1 = [
    ["What day is Pi day", ["3/14", "14/3", "22/7", "Everyday is pi day"], "3/14"],
    ["When did Pi day start", ["1978", "1565", "1988", "2007"], "1988"],
    ["When did congress pass a law recognizing Pi Day as a national day?", ["2007", "2009", "1988", "1989"], "2009"],
    ["What day is Pi Approximation day?", ["3/14", "4/14", "22/7", "15/1"], "22/7"],
    ["How is Pi defined mathematically", ["Circumference / diamter", "2 r^2", "1 / r^2", "I'ts not"], "Circumference / diamter"]
]
const questions = [
    {
        question: "What day is Pi day",
        choices:  ["3/14", "14/3", "22/7", "Everyday is pi day"],
        answer: '3/14'
    },
    {
        question: "When did Pi day start",
        choices:  ["1978", "1565", "1988", "2007"],
        answer: '1988'
    },
    {
        question: "When did congress pass a law recognizing Pi Day as a national day?",
        choices:  ["2007", "2009", "1988", "1989"],
        answer: '2009'
    },

]
class Question extends React.Component {
    constructor(props) {
        super(props);
        let index = this.props.questionsArr[this.props.questionIdx];
        let actualQuestion = questions[index];
        this.state = {
            question: actualQuestion.question,
            choice1: actualQuestion.choices[0],
            choice2: actualQuestion.choices[1],
            choice3: actualQuestion.choices[2],
            choice4: actualQuestion.choices[3],
            answer: actualQuestion.answer
        }
    }
    render() {

        return(
            <View>
                <Text> {this.state.question}</Text>
                <View>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.state.choice1, this.state.answer) }>
                        <Text style={{color: 'white'}}>{this.state.choice1}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.state.choice2, this.state.answer)}>
                        <Text style={{color: 'white'}}>{this.state.choice2}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.state.choice3, this.state.answer) }>
                        <Text style={{color: 'white'}}>{this.state.choice3}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.answerQuestion.bind(this, this.state.choice4, this.state.answer) }>
                        <Text style={{color: 'white'}}>{this.state.choice4}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
