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
        return(
            <div className='container'>
                <div className='col-sm-4 col-sm-offset-4'>
                    <PollHeader text={this.state.header} />
                    <form>
                        <PollQuestion text={this.state.question} />
                        <PollAnswer text={this.state.answer1} />
                        <PollAnswer text={this.state.answer2} />
                        <PollAnswer text={this.state.answer3} />
                        <PollSubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;