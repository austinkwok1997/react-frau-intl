var chai = require('chai'),
	expect = chai.expect;

import getIntlMessage from '../src/getIntlMessage';

describe('getIntlMessage', () => {

	let messages = {
		"Shared": {
			"Cancel": "the cancel message",
			"Save": "the save message"
		},
		"Stuff": "the stuff message"
	};

	it('should get localized message for root level message', () => {
		expect(getIntlMessage('Stuff', messages)).to.equal('the stuff message');
	});

	it('should get localized message', () =>{
		expect(getIntlMessage('Shared.Save', messages)).to.equal('the save message');
	});

	it('should throw a Error if the root key is not defined in the messages', function() {
		expect(() => {
			getIntlMessage('DoesNotExist.Save', messages);
		}).to.throw(Error, 'Could not find Intl message: DoesNotExist.Save');
	});

	it('should throw a Error if the child key is not defined in the messages', function() {
		expect(() => {
			getIntlMessage('Shared.DoesNotExist', messages);
		}).to.throw(Error, 'Could not find Intl message: Shared.DoesNotExist');
	});

});
