import React, { Component } from 'react';
import QuestionBox from '../components/QuestionBox';
import AnswerBox from '../components/AnswerBox';
import Question_API from '../components/Questions/Question_API';
import '../css/style.css';

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
        Question_API().then(question => {
            this.setState({
                questionBank:question
            });
            console.log(question)
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

    componentDidMount(){
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
                {
                    this.state.questionBank.length>0 &&
                    this.state.responses<5 &&
                    this.state.questionBank.map(
                        ({question,answers,correct,questionId}) => <QuestionBox
                                                                    question={question}
                                                                    options={answers}
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
