module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            stylus: {
                files: [
					'static/styl/*.styl'
				],
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
					'app/**/*.js',
					'static/js/**/*.js'

				],
                options: {
                    livereload: true
                }
            }
        },

        stylus: {
            compile: {
                options: {
                    compress: false,
                    paths: [
						'node_modules'
					],
                    import: [
						'stylus/lib/functions/index.styl',
						'jeet/stylus/jeet/index.styl',
						'rupture/rupture/index.styl'
					]
                },
                files: {
                    'static/css/style.css': 'static/stylus/*.styl'
                }
            }
        },

        jsbeautifier: {
            files: [
				"Gruntfile.js",
				"app/*.js",
				"app/model/*.js",
				"app/controller/*.js",
				"static/js/**/*.js",
				"app/view/helpers/*.js",
				"app/view/**/*.html",
				"static/css/style.css"
			],
            options: {
                html: {
                    braceStyle: "collapse",
                    indentChar: " ",
                    indentSize: 4,
                    maxPreserveNewlines: 3,
                    preserveNewlines: true
                },
                css: {
                    indentChar: " ",
                    indentSize: 4
                },
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: true,
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    keepArrayIndentation: true,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 3,
                    preserveNewlines: true,
                    spaceBeforeConditional: true
                }
            }
        },


        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: ['static/js/*.js'],
                dest: 'static/js/build.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'static/js/build.min.js': ['static/js/build.js']
                }
            }
        },

        postcss: {
            options: {
                processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }), // add vendor prefixes
					require('cssnano')() // minify the result
				]
            },
            dist: {
                src: 'static/css/*.css'
            }
        }
    });

    grunt.registerTask('build', [
		'concat',
		'uglify',
		'postcss'
	]);

    require('load-grunt-tasks')(grunt);
};
