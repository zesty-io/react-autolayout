import cjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
// import { terser } from "rollup-plugin-terser";

import pkg from './package.json'

export default {
    input: 'lib/AutoLayout.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        babel({
            exclude: "node_modules/**", // only transpile our source code
            babelHelpers: 'runtime',
        }),
        cjs({
            // include: "node_modules/**",
        }),
        // terser()
    ],
    external: [
        "react",
        "react-dom",
        /@babel\/runtime/, // exclude all runtimes
        "classnames"
    ]
}