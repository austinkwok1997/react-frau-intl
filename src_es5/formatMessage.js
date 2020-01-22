'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _intlMessageformat = require('intl-messageformat');

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

var _intlFormatCache = require('intl-format-cache');

var _intlFormatCache2 = _interopRequireDefault(_intlFormatCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMessageFormat = (0, _intlFormatCache2.default)(_intlMessageformat2.default);

exports.default = function (message, values, locales, formats) {

	message = getMessageFormat(message, locales, formats);

	return message.format(values);
};