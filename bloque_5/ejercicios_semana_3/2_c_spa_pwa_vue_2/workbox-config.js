module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,css,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};