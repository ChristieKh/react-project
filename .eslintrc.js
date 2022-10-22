module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
	},

	"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:import/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint", "import", "unused-imports", "i18next"],
	"rules": {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"object-curly-spacing": ["error", "always"],
		"@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": ["warn", {
			"vars": "all",
			"varsIgnorePattern": "^_",
			"args": "after-used",
			"argsIgnorePattern": "^_"
		}],
		"sort-imports": ["error", {
			"ignoreDeclarationSort": true
		}],
		"import/order": ["error", {
			groups: ["builtin", "external", ["internal", "unknown"], "parent", "sibling", "index"]
		}],
		"import/no-unresolved": "off",
		"import/named": "off",
		"key-spacing": ["error", {
			"afterColon": true,
			"mode": "strict"
		}],
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"react/display-name": "off",
		"rest-spread-spacing": ["error", "never"],
		"i18next/no-literal-string": ["error", {
			markupOnly: true,
			ignoreAttribute: ["data-testid"]
		}],
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"overrides": [{
		files: ["**/src/**/*.test.{ts, tsx}"],
		rules: {
			"i18next/no-literal-string": "off"
		}
	}]
};
