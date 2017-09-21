module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        'clean':{
            files: ['.grunt','build']
        },
        'copy': {
            source: {
                'src': ['source/**/*'],
                'dest': 'build/',
            },
            config: {
                'src': [
                    'package.json',
                    'Gruntfile.js',
                    '_config.yml'
                ],
                'dest': 'build/config/'
            },
            theme: {
                'src': [
                    'themes/Wikitten/_config.yml'
                ],
                'dest': 'build/theme/',
                expand: true, 
                flatten: true
            },
            readme:{
                'src': [
                    'README.md'
                ],
                'dest': 'build/'
            }
        },
        'gh-pages': {
            options: {
                base: 'build',
                repo: 'git@github.com.wiki:wikineu/wikineu.github.io.git',
                branch: 'writing'
            },
            src: ['**']
        }
    });

    grunt.registerTask('pre', ['clean','copy']);
    grunt.registerTask('syn', 'gh-pages');
    grunt.registerTask('wiki_src', ['clean','copy','gh-pages']);
};
