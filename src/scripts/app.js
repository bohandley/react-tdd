import React from 'react';
import ReactDom from 'react-dom';
import SayHello from './SayHello';

ReactDom.render(<SayHello name="World" />, document.getElementById('app'));
