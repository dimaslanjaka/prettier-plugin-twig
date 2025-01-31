import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import jsonc from "jsonc-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import * as glob from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {typeof import('./package.json')}
 */
const pkg = jsonc.parse(
    fs.readFileSync(path.join(__dirname, "package.json"), "utf-8")
);

export const external = Object.keys(pkg.dependencies)
    .concat(...Object.keys(pkg.devDependencies), "lodash", "underscore")
    .concat(
        "prettier",
        "lodash",
        "@babel/types",
        "@babel/template",
        "tty",
        "acorn",
        "angular",
        "babel",
        "postcss",
        // Explicitly add lodash modules that are unresolved
        "lodash/isBoolean.js",
        "lodash/trimEnd.js",
        "lodash/trimStart.js",
        "lodash/isFunction.js",
        "lodash/filter.js",
        "lodash/repeat.js",
        "lodash/padStart.js"
    )
    // include these packages
    .filter(
        pkgName => !["markdown-it", "p-limit", "deepmerge-ts"].includes(pkgName)
    )
    // Remove duplicates
    .filter((value, index, array) => array.indexOf(value) === index);

const outDir = path.join(__dirname, "dist");
// Clean the dist directory if it exists
if (fs.existsSync(outDir)) fs.rmSync(outDir, { force: true, recursive: true });

// Get all JS files in the src directory (including subdirectories)
const inputFiles = glob.sync("src/**/*.js");

export default {
    input: inputFiles, // Use glob to collect all source files
    output: {
        dir: outDir, // Output directory for the compiled files
        format: "cjs", // CommonJS output format
        sourcemap: false, // Optionally, include a source map
        preserveModules: true, // This will preserve the folder structure
        entryFileNames: chunk => {
            return path.relative("src", chunk.facadeModuleId).replace(/\.js$/, ".cjs"); // Change .js to .cjs
        }
    },
    plugins: [
        // resolve({ preferBuiltins: true }), // Uncomment if you want to resolve node_modules packages
        json(), // Support for JSON files
        commonjs() // Convert CommonJS modules to ES6
    ],
    external // External dependencies (from package.json)
};
