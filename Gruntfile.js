module.exports = function(grunt) {

	function getObjectConcat() {
		return {
			src : [
				'<%= package.jsroot %>/libs/*.js',
				'<%= package.jsroot %>/support/*.js',
				'<%= package.jsroot %>/templates/*.js',
				'<%= package.jsroot %>/vendor/*.js',
				'<%= package.jsroot %>/app/*.js',
				'<%= package.jsroot %>/boot.js'
			],
			dest : '<%= package.jsroot %>/built.js',
		};
	}

	var config = {
		package : grunt.file.readJSON( 'package.json' ),

		concat : {
		    options : {
				separator : ';'
		    },
		    built : getObjectConcat()
  		},

		sass: {
			site: {
				options: {
					style: 'compressed',
					'sourcemap=none': '',
				},
				files: {
					'style.css': '<%= package.cssroot %>/style.scss'
				}
			},
		},

  		jshint: {
			options: {
				jshintrc : true
			},
    		beforeconcat : '<%= concat.built.src %>'
  		},

  		uglify : {
			site : {
				files : {
					'<%= concat.built.dest %>' : '<%= concat.built.dest %>'
				}
			}
    	},

		watch: {
		    site : {
		    	files : '<%= concat.built.src %>',
		    	tasks : ['jshint', 'concat', 'uglify']
		    },
			css : {
				files : ['<%= package.cssroot %>/**/*.scss'],
				tasks : ['sass:site']
			},
  		}
	};

	grunt.initConfig( config );

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	grunt.registerTask( 'deploy', ['jshint', 'concat', 'uglify'] );
};