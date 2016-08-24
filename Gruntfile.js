module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		html_test: {
			test: {
				src: ['src/index.html']
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'src/app/main.js',
				'src/app/configs.js',
				'src/app/services/mail.js',
				'src/app/services/api.js',
				'src/app/controllers/front.js'
			]	
		}
	});

	grunt.loadNpmTasks('grunt-html-test');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['html_test', 'jshint']);
};
