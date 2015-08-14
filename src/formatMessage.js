import IntlMessageFormat from 'intl-messageformat';
import createFormatCache from 'intl-format-cache';

let getMessageFormat = createFormatCache(IntlMessageFormat);

export default (message, values, locales, formats) => {

	message = getMessageFormat(message, locales, formats);

	return message.format(values);

};
