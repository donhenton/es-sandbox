
module.exports = function (grunt) {
   // require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
   var build_dir = 'public_html/build/';
    grunt.initConfig({
        
         clean: {
            build_dir: [build_dir]
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
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("build", ['clean',"babel"]);
};
