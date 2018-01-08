import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('PollAnswer', function(){
    it('renders without problems', function(){
        const pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollanswer).toEqual(jasmine.anything());
    });
});