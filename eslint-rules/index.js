"use client";

const requireUseClientRule = require("./require-use-client");
const plugin = { rules: { "require-use-client": requireUseClientRule } };
module.exports = plugin;