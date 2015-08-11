
export default (path, messages) => {

	var pathParts = path.split('.');

	var message;

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
