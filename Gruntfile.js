module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			files: [
				'styl/*.styl',
				'*.html'
			],
			tasks: ['stylus'],
		    options: {
		    	livereload: true,
		    }
		},

		connect: {
		    serve: {
		      options: {
		        port: 8000,
		        base: '.',
		        hostname: '0.0.0.0',
		        protocol: 'http',
		        livereload: true,
		        open: true,
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
					import:[
						'stylus/lib/functions/index.styl',
						'jeet/stylus/jeet/index.styl',
						'rupture/rupture/index.styl'
					]
				},
				files: {
					'css/style.css': 'styl/*.styl'
				}
			}
		},

		postcss: {
		    options: {

		      processors: [
		        require('pixrem')(), // add fallbacks for rem units
		        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
		        require('cssnano')() // minify the result
		      ]
		    },
		    dist: {
		      src: 'css/*.css'
		    }
  		}
	});

	// Load grunt plugins.
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('serve', ['connect','watch']);
};