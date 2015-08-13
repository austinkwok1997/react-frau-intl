import {default as React} from 'react';
import {default as getIntlMessage} from './getIntlMessage';

export default (Component) => {

	class Intl extends React.Component {

		getChildContext() {
			return {
				getIntlMessage: (path) => getIntlMessage(path, this.props.messages || this.context.messages)
			};
		}

		render() {
			/* jshint ignore:start */
			return <Component {...this.props} {...this.state} />;
			/* jshint ignore:end */
		}

	}

	Intl.childContextTypes = {
		getIntlMessage: React.PropTypes.func
	};

	return Intl;

};
