// eslint-plugin-custom-rules/rules/require-use-client.js

"use client";

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: 'Enforce "use client" directive at the top of files',
            category: "Best Practices",
            recommended: true,
        },
        fixable: "code", // Indicates that the rule is auto-fixable
        schema: [],
        messages: {
            missingDirective: 'File must start with "use client"; directive.',
        },
    },
    create(context) {
        return {
            Program(node) {
                const sourceCode = context.getSourceCode();
                const firstToken = sourceCode.getFirstToken(node);
                const filename = context.getFilename();
                // console.log({filename})

                // Checking if the first token is the correct "use client" directive
                const isUseClientDirective = firstToken &&
                    firstToken.type === "String" &&
                    (firstToken.value.trim() === '"use client"' || firstToken.value.trim() === "'use client'");

                if (!isUseClientDirective && !filename.includes("app/layout.js")) {
                    context.report({
                        node,
                        messageId: "missingDirective",
                        fix(fixer) {
                            return fixer.insertTextBefore(node, '"use client";\n\n');
                        },
                    });
                }
            },
        };
    },
};
