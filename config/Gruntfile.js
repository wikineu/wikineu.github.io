module.exports = function(grunt) {
    
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-gitpull');

    grunt.initConfig({
        'clean':{
            files: ['.grunt','build']
        },
        'copy': {
            source: {
                'src': ['source/**/*'],
                'dest': 'build/'
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
                branch: 'writing',
                user: {
                    name: 'wikineu',
                    email: 'wikineu@163.com'
                }
            },
            src: ['**']
        },
        'gitPull': {
            wikisource: {
                repos: [
                    {
                        path: ['.', 'build-new'], // relative/path/
                        repo: 'git@github.com.wiki:wikineu/wikineu.github.io.git'
                    }
                ]
            }
        }
        // , 'copy': {
        //     source: {
        //         cwd: 'build-new/wikineu.github.io/source/',
        //         'src': ['**'],
        //         'dest': 'source/',
        //         expand: true,
        //         flatten: false
        //     }
        // }
        
    });
    grunt.registerTask('update',['gitPull','copy']);
    grunt.registerTask('pre', ['clean','copy']);
    grunt.registerTask('syn', 'gh-pages');
    grunt.registerTask('wiki_src', ['clean','copy','gh-pages']);
};
