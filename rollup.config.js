// rollup.config.js
import "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default {
	output: {
		format: "esm",
		intro: "const global = self | window | {};",
	},
	plugins: [
		resolve({
			browser: true,
			extensions: [".js", ".mjs"], // Default: ['.js']
			preferBuiltins: false,
		}),
		globals(),
		builtins(),
		commonjs(),
	],
};
