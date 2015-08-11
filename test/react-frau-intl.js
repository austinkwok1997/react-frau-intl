'use strict';

/*
var assign = require('object-assign'),
	reactFrauIntl = require('../');

describe('react-frau-intl', function() {

	var component;

	beforeEach(function() {

		var someMessages = {
			"Shared": {
				"Cancel": "the cancel message",
				"Save": "the save message"
			},
			"Stuff": "the stuff message"
		};

		component = assign( reactFrauIntl, {
			context: {
				messages: someMessages
			},
			props: {}
		} );

	});

	describe('getIntlMessage', function() {

		it('should get localized message from context for root level message', function() {
			expect(component.getIntlMessage('Stuff')).toBe('the stuff message');
		});

		it('should get localized message from context', function() {
			expect(component.getIntlMessage('Shared.Save')).toBe('the save message');
		});

		it('should get localized message from props if provided', function() {
			component.props.messages = { "Shared": { "Cancel": "the props cancel message" } };
			expect(component.getIntlMessage('Shared.Cancel')).toBe('the props cancel message');
		});

		it('should throw a ReferenceError if the root key is not defined in the messages', function() {
			expect(function() {
				component.getIntlMessage('DoesNotExist.Save');
			}).toThrow(new ReferenceError('Intl message not found for "DoesNotExist.Save". The "DoesNotExist" key is not defined.'));
		});

		it('should throw a ReferenceError if the child key is not defined in the messages', function() {
			expect(function() {
				component.getIntlMessage('Shared.DoesNotExist');
			}).toThrow(new ReferenceError('Intl message not found for "Shared.DoesNotExist". The "Shared.DoesNotExist" key is not defined.'));
		});

	});

	describe('getChildContext', function() {

		it('should get context messages if no props messages are defined', function() {
			expect(component.getChildContext().messages).toBe(component.context.messages);
		});

		it('should get props messages if defined', function() {
			var propsMessages = { "Shared": { "Cancel": "the props cancel message" } };
			component.props.messages = propsMessages;
			expect(component.getChildContext().messages).toBe(propsMessages);
		});

	});

});
*/