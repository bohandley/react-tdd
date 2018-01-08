import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Poll Submit Button', function(){
    it('renders without problems', function(){
        const pollsubmitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(pollsubmitbutton).toEqual(jasmine.anything());
    });
});