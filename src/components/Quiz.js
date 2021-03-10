import React, { Component } from 'react';
import QuestionBox from '../components/QuestionBox';
import AnswerBox from '../components/AnswerBox';
import questionAPI from '../components/Questions/Question_API';

class Quiz extends Component {

    constructor(){
        super();
        this.state = {
            questionBank:[],
            score:0,
            responses:0
        };
    }

    getQuestions = () =>{
        questionAPI().then(question => {
            this.setState({
                questionBank:question
            });
        });
    }

    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })
    }

    computeAnswer = (answer,correctAns) =>{
        if(answer===correctAns){
            this.setState({
                score:this.state.score+1
            })
        }
        this.setState({
            responses:this.state.responses<5 ? this.state.responses+1 : 5
        });
    };

    conponentDidMount(){
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">QuizOn</div>
                {
                    this.state.questionBank.length>0 &&
                    this.state.responses<5 &&
                    this.state.questionBank.map(
                        ({question,answers,correct,questionId}) => <QuestionBox
                                                                    question={question}
                                                                    option={answers}
                                                                    key={questionId}
                                                                    selected={answer => this.computeAnswer(answer,correct)}
                                                                    />
                                                )
                }

                {
                    //  condition ? True : False 
                    this.state.responses ===5 ? (<AnswerBox score={this.state.score} playAgain={this.playAgain}/>) : null
                }
            </div>
        )
    }
}


export default Quiz;
