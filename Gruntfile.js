
module.exports = function (grunt) {
    // require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
    var build_dir = 'public_html/build/';
    grunt.initConfig({
        clean: {
            build_dir: [build_dir]
        },
        watch: {
            livereload: {
                options: {livereload: true},
                files: ['src/*js', 'public_html/*.*']
            },
            babel: {
                files: ['src/*js', 'public_html/*.*'],
                tasks: ['babel']
            }
        },
        "babel": {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.js'],
                        dest: build_dir
                    }
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open:'http://localhost:8888/collections.html',
                    livereload: true,
                    
                    base: 'public_html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("build", ['clean', "babel"]);
    grunt.registerTask("dev", ['clean', "babel",'connect','watch']);
};
