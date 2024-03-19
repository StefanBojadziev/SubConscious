var del = require('del');
var gulp = require('gulp');
var path = require('path');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var exorcist = require('exorcist');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');

var PHASER_PATH = './node_modules/phaser-ce/build/';
var BUILD_PATH = './build';
var SCRIPTS_PATH = BUILD_PATH + '/scripts';
var SOURCE_PATH = './src';
var STATIC_PATH = './static';
var ENTRY_FILE = SOURCE_PATH + '/index.js';
var OUTPUT_FILE = 'game.js';

var keepFiles = false;

function isProduction() {
    return argv.production;
}

function logBuildMode() {
    
    if (isProduction()) {
        gutil.log(gutil.colors.green('Running production build...'));
    } else {
        gutil.log(gutil.colors.yellow('Running development build...'));
    }

}

function cleanBuild() {
    if (!keepFiles) {
        del(['build/**/*.*']);
    } else {
        keepFiles = false;
    }
}

function copyStatic() {
    return gulp.src(STATIC_PATH + '/**/*')
        .pipe(gulp.dest(BUILD_PATH));
}

function copyPhaser() {

    var srcList = ['phaser.min.js'];
    
    if (!isProduction()) {
        srcList.push('phaser.map', 'phaser.js');
    }
    
    srcList = srcList.map(function(file) {
        return PHASER_PATH + file;
    });
        
    return gulp.src(srcList)
        .pipe(gulp.dest(SCRIPTS_PATH));

}

function build() {

    var sourcemapPath = SCRIPTS_PATH + '/' + OUTPUT_FILE + '.map';
    logBuildMode();

    return browserify({
            paths: [path.join(__dirname, 'src')],
            entries: ENTRY_FILE,
            debug: true,
            transform: [
                [
                    babelify, {
                        presets: ["es2015"]
                    }
                ]
            ]
        })
        .transform(babelify)
        .bundle().on('error', function(error) {
            gutil.log(gutil.colors.red('[Build Error]', error.message));
            this.emit('end');
        })
        .pipe(gulpif(!isProduction(), exorcist(sourcemapPath)))
        .pipe(source(OUTPUT_FILE))
        .pipe(buffer())
        .pipe(gulpif(isProduction(), uglify()))
        .pipe(gulp.dest(SCRIPTS_PATH));

}

function serve() {
    
    var options = {
        server: {
            baseDir: BUILD_PATH
        },
        open: false
    };
    
    browserSync(options);
    
    gulp.watch(SOURCE_PATH + '/**/*.js', ['watch-js']);
    
    gulp.watch(STATIC_PATH + '/**/*', ['watch-static']).on('change', function() {
        keepFiles = true;
    });

}


gulp.task('cleanBuild', cleanBuild);
gulp.task('copyStatic', ['cleanBuild'], copyStatic);
gulp.task('copyPhaser', ['copyStatic'], copyPhaser);
gulp.task('build', ['copyPhaser'], build);
gulp.task('fastBuild', build);
gulp.task('serve', ['build'], serve);
gulp.task('watch-js', ['fastBuild'], browserSync.reload);
gulp.task('watch-static', ['copyPhaser'], browserSync.reload);

gulp.task('default', ['serve']);
