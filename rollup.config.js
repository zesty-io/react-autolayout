import cjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
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
            runtimeHelpers: true
            // plugins: ["transform-runtime"]
        }),
        cjs({
            include: "node_modules/**",
            namedExports: {
                "node_modules/react/index.js": [
                    "Component",
                    "PureComponent",
                    "Fragment",
                    "Children",
                    "createElement"
                ]
            }
        }),
        // terser()
    ],
    external: [
        "react",
        "react-dom",
        "@babel/runtime/helpers/extends",
        "@babel/runtime/helpers/classCallCheck",
        "@babel/runtime/helpers/createClass",
        "@babel/runtime/helpers/possibleConstructorReturn",
        "@babel/runtime/helpers/inherits",
        "@babel/runtime/helpers/toConsumableArray",
        "@babel/runtime/helpers/getPrototypeOf",
        "@babel/runtime/helpers/assertThisInitialized",
        "@babel/runtime/helpers/assertThisInitialized",
        "@babel/runtime/helpers/slicedToArray",
        "@babel/runtime/helpers/defineProperty",
        "babel-runtime/core-js/object/keys",
        "classnames"
    ]
}