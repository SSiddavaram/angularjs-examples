'use strict';
var srcFiles = '<%= yeoman.app %>/{,*/}*.js';
/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({

		// Project settings
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'js',
			dist: 'dist'
		},
		copy: {
			main: {
				files: [{
					expand: true,
					src: [
						'bower_components/angular/angular.min.js',
						'bower_components/angular-bootstrap/ui-bootstrap.min.js',
						'bower_components/angular-route/angular-route.min.js',
						'bower_components/requirejs/require.js'
					],
					dest: './lib',
					flatten: true
				}]
			}
		},

		stylus: {
			compile: {
				options: {

				},
				files: {
					// main
					'styles/main.css': 'styles/main.styl'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				srcFiles
			],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		watch: {
			js: {
				files: srcFiles,
				tasks: ['newer:jshint:all'],
				options: {
					livereload: true
				}
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			css: {
				files: '**/*.styl',
				tasks: ['stylus']
			}
		},

		'bowerInstall': {
		      target: {
		      	html: 'common/todo.html',
		      	ignorePath: '<%= yeoman.app %>/',
		        src: ['common/todo.html']
		      }
  		 },

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: './images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: './images'
				}]
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-bower-install');

	// Default task.
	grunt.registerTask('default', ['stylus']);

	grunt.registerTask('local', [
		'clean:server',
		'bowerInstall',
		'stylus',
		'copy',
		'watch'
	]);
};