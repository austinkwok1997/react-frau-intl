var chai = require('chai'),
	expect = chai.expect;

import {default as React} from 'react';
import {default as i18n} from '../src/i18n';

let Application = React.createElement('div');

let props = {
	messages : {
		"Shared":{
			"Save": "Save it!"
		}
	}
};

describe('internationalize', () => {

	let IntlApplication;

	beforeEach(() => {
		IntlApplication = i18n(Application);
	});

	it('provides Intl class with contextTypes', () => {

		expect(IntlApplication.childContextTypes).to.be.defined;
		expect(IntlApplication.childContextTypes.getIntlMessage).to.be.defined;

	});

	it('creates Intl component', () => {

		let appInstance = new IntlApplication(props);

		expect(appInstance).to.be.defined;
		expect(appInstance).to.be.an('object');

	});

	describe('Intl', () => {

		let appInstance, childContext;

		beforeEach(() => {
			appInstance = new IntlApplication(props);
			childContext = appInstance.getChildContext();			
		});

		it('has context', () => {
			expect(childContext).to.be.defined;
		});

		it('has getIntlMessage function', () => {
			expect(childContext.getIntlMessage).to.be.defined;
		});

		it('getIntlMessage returns message for specified path', () => {
			expect(childContext.getIntlMessage('Shared.Save')).to.equal('Save it!');
		});

	});

});
