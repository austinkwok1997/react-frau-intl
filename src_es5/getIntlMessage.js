'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

/*
This code is copied from react-intl mixin with slight modification
to accept messages as a parameter so that it does not rely
directly on React component properties or context.  It has 
also been revised for ES6.
See: https://github.com/yahoo/react-intl
*/
exports.default = function (path, messages) {

	var pathParts = path.split('.');

	var message = void 0;

	try {
		message = pathParts.reduce(function (obj, pathPart) {
			return obj[pathPart];
		}, messages);
	} finally {
		if (message === undefined) {
			throw new ReferenceError('Could not find Intl message: ' + path);
		}
	}

	return message;
};