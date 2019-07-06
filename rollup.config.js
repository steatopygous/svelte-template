import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { scss } from '@kazzkiq/svelte-preprocess-scss';
import json from 'rollup-plugin-json';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			},
            // Allow SASS to be used in the <style> section
            // of Svelte components.
            preprocess: {
              style: scss()
            }
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true }),
		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

        // Allow loading of JSON files using "import blah from '.../blah.json'"
        json({
            // All JSON files will be parsed by default,
            // but you can also specifically include/exclude files, using
            //
            // include: 'node_modules/**',
            // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],

            // For tree-shaking, properties will be declared as variables,
            // using either `var` or `const`
            preferConst: true, // Default: false

            // Specify indentation for the generated default export —
            // defaults to '\t', but we'll use two spaces (if you
            // uncomment the next line).
            //
            //indent: '  ',

            // Ignores indent and generates the smallest code
            compact: true, // Default: false

            // Generate a named export for every property of the JSON object
            namedExports: true // Default: true
        })
	],
	watch: {
		clearScreen: false
	}
};
