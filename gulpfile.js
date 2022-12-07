const {src, dest, watch, parallel } = require ("gulp"); 


//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');



function css (done){

    src("src/scss/**/*.scss") //encuentra el archivo y lo deja en memoria
        .pipe(plumber()) //al tener un error no detiene la ejecucion y nos brinda detalles del error mas detallados
        .pipe(sass())  // compila el archivo a css
        .pipe(dest("build/css")) // guarda el archivo css en la ruta correspondiente

    done(); // callback que avisa a gulp que llegamos al final
}

function javaScript (donde) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'))


    donde();
}

function dev ( done ){

    watch("src/scss/**/*.scss", css) // cuando se detecte un cambio en la ruta de los parametros, ejecutar la funcion css()
    watch("src/js/**/*.js", javaScript)

    done();
}

exports.dev = parallel (javaScript, dev);
exports.css = css;  
