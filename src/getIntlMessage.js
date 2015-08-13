
export default (path, messages) => {

	let pathParts = path.split('.');

	let message;

	try {
		message = pathParts.reduce((obj, pathPart) => {
			return obj[pathPart];
		}, messages);
	} finally {
		if (message === undefined) {
			throw new ReferenceError(`Could not find Intl message: ${path}`);
		}
	}

	return message;
};
