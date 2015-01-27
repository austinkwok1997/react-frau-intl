'use strict';

var React = require( 'react' );

var intlTypesSpec = {
	locales: React.PropTypes.oneOfType( [
		React.PropTypes.string,
		React.PropTypes.array
	] ),
	messages: React.PropTypes.object
};

module.exports = {

	propsTypes: intlTypesSpec,
	contextTypes: intlTypesSpec,
	childContextTypes: intlTypesSpec,

	getChildContext: function () {
		var context = this.context;
		var props = this.props;

		return {
			locales: props.locales || context.locales,
			messages: props.messages || context.messages
		};
	},

	getIntlMessage: function ( requestedPath ) {

		var messages  = this.props.messages || this.context.messages;
		var parts = requestedPath.split( '.' );

		var message, lastValidIndex;

		try {
			message = parts.reduce( function ( obj, part, index ) {
				if ( obj[part] === undefined && lastValidIndex === undefined ) {
					lastValidIndex = index;
				}
				return obj[part];
			}, messages );
		} finally {
			if ( message === undefined ) {
				throw new ReferenceError(
					'Intl message not found for "' + requestedPath + '". The "' +
						parts.slice( 0, lastValidIndex + 1 ).join( '.' ) + '" key is not defined.'
				);
			}
		}

		return message;

	}

};
