import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('PollAnswer', function(){
    var component;
    beforeEach(function(){
      component = TestUtils.renderIntoDocument(<PollAnswer text="Who knows?" />)
    });

    it('renders without problems', function(){
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', function(){
      var actual = TestUtils
        .findRenderedDOMComponentWithTag(component, 'span')
        .textContent;
        var expected = "Who knows?";
        expect(actual).toEqual(expected);
    });
});