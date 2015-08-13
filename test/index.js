var chai = require('chai'),
	expect = chai.expect;

import {i18n} from '../src/index';

describe('index', () => {

	it('should define i18n factory', () => {
		expect(i18n).to.be.a('Function');
	});

});
