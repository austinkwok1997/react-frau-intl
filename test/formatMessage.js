var chai = require('chai'),
	expect = chai.expect;

// Node <= 0.10 requires that we polyfill Intl in order to format
// using replacements and pluralization.
var intl = require('intl');

import formatMessage from '../src/formatMessage';

describe('formatMessage', () => {

	let messages = {
		"NoReplacement": "message with no replacements",
		"OneReplacement": "do you want to {action} it?",
		"MultipleValues": "do you want to {action} the {thing}?",
		"ItemsMessage": "{numItems, plural, =0 {no items.} =1 {one item.} other {# items.} }"
	};

	it('should get formatted message when no values are provided', () => {
		expect(formatMessage(messages.NoReplacement))
			.to.be.equal('message with no replacements');
	});

	it('should get formatted message with 1 replacement', () => {
		expect(formatMessage(messages.OneReplacement, {"action":"save"}))
			.to.be.equal('do you want to save it?');
	});

	it('should get formatted message with multiple replacements', () => {
		expect(formatMessage(messages.MultipleValues, {"action":"save", "thing":"photo"}))
			.to.be.equal('do you want to save the photo?');
	});

	it('should get formatted message when extra parameters are provided', () => {
		expect(formatMessage(messages.NoReplacement, {"action":"mystery"}))
			.to.be.equal('message with no replacements');
	});

	it('should get formatted message for 0 items', () => {
		expect(formatMessage(messages.ItemsMessage, {"numItems":0}))
			.to.be.equal('no items.');
	});

	it('should get formatted message for 1 item', () => {
		expect(formatMessage(messages.ItemsMessage, {"numItems":1}))
			.to.be.equal('one item.');
	});

	it('should get formatted message for more than one item', () => {
		expect(formatMessage(messages.ItemsMessage, {"numItems":5}))
			.to.be.equal('5 items.');
	});

	it('should throw an Error if a required parameter is not provided', () => {
		expect(() => {
			formatMessage(messages.OneReplacement);
		}).to.throw(Error);
	});

});
