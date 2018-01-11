import React from 'react';

class PollAnswer extends React.Component {
    render(){
        return(
            <div className="radio">
                <input 
                    type="radio" 
                    name="Answers"
                    value="I don't know."
                />
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default PollAnswer;