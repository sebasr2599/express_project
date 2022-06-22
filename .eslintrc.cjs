module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:node/recommended'
		// 'prettier'
	],
	env: {
		node: true,
		es6: true
	},
	rules: {
		'node/no-unsupported-features/es-syntax': [
			'error',
			{ ignores: ['modules'] }
		]
	}
};
