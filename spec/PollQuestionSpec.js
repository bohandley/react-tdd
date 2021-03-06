import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('Poll Question', function(){
    var component;
    beforeEach(function(){
      component = TestUtils.renderIntoDocument(
        <PollQuestion text="What is the meaning of life?" />
      );
    });

    it('renders without problems', function(){
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', function(){
      var actual = TestUtils
        .findRenderedDOMComponentWithTag(component, 'h2')
        .textContent;
      var expected = "What is the meaning of life?";
      expect(actual).toEqual(expected);
    });
});