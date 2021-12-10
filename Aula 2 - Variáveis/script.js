// Tipos primitivos

// boolean
var vOUF = false;
console.log(vOUF);

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'diana';
console.log(typeof(nome));

// function
var funcao = function () {}
console.log(typeof(funcao));

// como declarar
var variavel;
console.log(variavel);

/* var escopoglobal = 'global';
console.log(escopoglobal); */

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();