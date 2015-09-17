module.exports = function (grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    require('time-grunt')(grunt);

    // Load Grunt modules
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile css/*.scss Sass files
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['**/*.scss'],
                    dest: 'css/dist',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                map: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css/dist',
                    src: ['*.css'],
                    dest: 'css/dist',
                    ext: '.css'
                }]
            }
        },

        grunticon: {
            icons: {
                files: [{
                    expand: true, 
                    cwd: 'img/src/svgs',
                    src: ['*.svg', '*.png'],
                    dest: 'img'
                }],
                options: {
                    compressPNG: true,
                    loadersnippet: 'grunticon.loader.js',
                    defaultWidth: '128px',
                    defaultHeight: '128px'
                }
            }
        },

        watch: {
            sass: {
                files: ['css/*.scss'],
                tasks: ['newer:sass', 'newer:autoprefixer']
            },
            css: {
                files: ['css/dist/*.css']
            },
            html: {
                files: ['*.html', '**/*.html']
            },
            js: {
                files: ['js/*.js']
            }
        },

        browserSync: {
            files: {
                src : ['css/dist/**', '**/*.html', 'js/*.js']
            }, 
            options: {
              watchTask: true,
              server: {
                baseDir: "./"
            }
          }
        }

    });

    // Set Grunt tasks
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('server', ['browserSync', 'watch']);
}
