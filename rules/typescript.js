module.exports = {
    rules: {},
    overrides: [
        {
            files: ["**/*.ts"],
            parser: "@typescript-eslint/parser",
            extends: [
                "plugin:@typescript-eslint/recommended",
                "prettier/@typescript-eslint",
                "plugin:prettier/recommended",
            ],
            rules: {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-inferrable-types": [
                    "warn",
                    {
                        ignoreParameters: true,
                    },
                ],
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/prefer-namespace-keyword": "off",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/ban-ts-ignore": "off",
                "@typescript-eslint/no-this-alias": "off",
                // Use the typescript version so that we can ignore enums
                "@typescript-eslint/no-magic-numbers": [
                    2,
                    {
                        ignoreEnums: true,
                        ignore: [
                            // used for checking indexOf
                            -1,
                            // used for getting first item
                            0,
                            // used for testing non-empty arrays
                            1,
                        ],
                    },
                ],
            },
        },
    ],
};
