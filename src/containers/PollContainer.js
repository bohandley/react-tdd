import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollAnswer from '../components/PollAnswer';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    constructor(){
      super();
      this.state = {
        header: 'Welcome to the Poll!',
        question: 'What is the meaning of life?',
        answer1: 'Who knows?',
        answer2: 'More life.',
        answer3: 'It is complex',
        correctAnswer: 'Who knows?'
      };
    };
    render(){
        var rowStyle={
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row {rowStyle}" >
                    <div className='col-sm-4 col-sm-offset-4'>
                        <form>
                            <PollQuestion text={this.state.question} />
                            <PollAnswer text={this.state.answer1} />    
                            <PollAnswer text={this.state.answer2} />
                            <PollAnswer text={this.state.answer3} />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;