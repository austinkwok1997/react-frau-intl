# react-frau-intl

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][dependencies-image]][dependencies-url]

A simple React mixin for getting localized text in components without dependency on Intl or requiring loading additional locale data.

## Installation

Install from NPM:
```shell
npm install react-frau-intl
```

## Usage

Given locale text data such as:
```javascript
let messages = {
	"SomeAppComponent": {
		"Message": "this message"
	}
}
```

Assign messages JSON to React component, for example:
Use the `i18n` factory to wrap your root application component in an Intl component that will provide context to root components. 

```javascript
const i18n = require('react-frau-intl').i18n;
let IntlApplication = i18n(Application);


React.render(<IntlApplication messages={messages} ...otherAppProps />, container);
```

Then, in any component that requires localized messages:

```javascript
class SomeAppComponent extends React.Component {
	render() {
		console.log(this.context.getIntlMessage('SomeAppComponent.Message'));
	}
}

SomeAppComponent.contextTypes = {
	getIntlMessage: React.PropTypes.func
};

export default AppClassListItem;
```

[npm-url]: https://www.npmjs.org/package/react-frau-intl
[npm-image]: https://img.shields.io/npm/v/react-frau-intl.svg
[ci-url]: https://travis-ci.org/Brightspace/react-frau-intl
[ci-image]: https://img.shields.io/travis-ci/Brightspace/react-frau-intl.svg
[coverage-url]: https://coveralls.io/r/Brightspace/react-frau-intl?branch=master
[coverage-image]: https://img.shields.io/coveralls/Brightspace/react-frau-intl.svg
[dependencies-url]: https://david-dm.org/brightspace/react-frau-intl
[dependencies-image]: https://img.shields.io/david/Brightspace/react-frau-intl.svg



