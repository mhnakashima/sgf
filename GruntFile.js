// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'app/css/styles.css': 'app/scss/styles.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html',
						'app/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },
		
		cssmin: {
		  options: {
			mergeIntoShorthands: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'app/css/styles.min.css': ['app/css/styles.css']
			}
		  }
		},
		
		concat_css:{
			options:{
				baseDir: 'app/css/'
			},
			files:{
				'styles.css' : ['styles.css']
			}
		},
		
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files:{
					'app/js/main.min.js' : ['app/js/jquery.min.js', 'app/js/bootstrap.js', 'app/js/main.js']
				}
			}
		},
		bowercopy: {
		  options: {
			srcPrefix: 'app/bower_components'
		  },
		  scripts: {
			options: {
			  destPrefix: 'app/scripts/vendor'
			},
			files: {
			  'jquery/jquery.min.js': 'jquery/jquery.min.js'
			}
		  }
		}
    });	
	
    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bowercopy');
	
    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('minify',  ['cssmin', 'uglify']);
	grunt.registerTask('bower',   ['bowercopy']);
};


