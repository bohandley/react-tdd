import React from 'react';
import ReactDom from 'react-dom';
import PollContainer from '../containers/PollContainer';

ReactDom.render(<PollContainer name="World" />, document.getElementById('app'));
