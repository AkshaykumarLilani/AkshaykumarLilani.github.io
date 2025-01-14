"use client";

module.exports = {
    extends: 'next/core-web-vitals',
    plugins: [
        "custom-rules",
    ],
    rules: {
        'custom-rules/require-use-client': 'warn',
    },
    overrides: [
        {
            files: ["app/**/*.js", "app/**/*.jsx"],
            rules: {
                'custom-rules/require-use-client': 'warn',
            },
        },
    ],
};
