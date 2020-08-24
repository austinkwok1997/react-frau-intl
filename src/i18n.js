import {default as React} from 'react';
import {default as formatMessage} from './formatMessage';
import {default as getIntlMessage} from './getIntlMessage';
import PropTypes from 'prop-types';
export default (Component) => {
    class Intl extends React.Component {
        getChildContext() {
            return {
                formatMessage: (message, values) => formatMessage(message, values, this.props.locales),
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
        formatMessage: PropTypes.func,
        getIntlMessage: PropTypes.func
    };
    return Intl;
};
