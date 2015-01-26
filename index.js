'use strict';

module.exports = {

	componentWillMount: function(){
		console.log( "mixin:componentWillMount" );
	},

	componentWillUnmount: function(){
		console.log( "mixin:componentWillUnmount" );
	}

};
