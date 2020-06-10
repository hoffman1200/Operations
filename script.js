// Sumas Unidades
var result;

function sumaUnidades(left, right) {
    left = Math.floor(Math.random() * 9 + 1);
    right = Math.floor(Math.random() * 9 + 1);
    result = left + right;
    console.log(left + " + " + right + " = " + result);
    var line = $("<div>").attr("class", "flexbox-item").html(`&ensp; ${left} <br> + ${right} <br><hr>`);
    var resultado = $("<p>").attr("class", "showAnsw").html(`&ensp; ${result}`);
    $("#sumas").append(line);
    line.append(resultado);

};

function sumaDecenas(left, right) {
    left = Math.floor(Math.random() * 99 + 1);
    right = Math.floor(Math.random() * 99 + 1);
    result = left + right;
    console.log(left + " + " + right + " = " + result);
    var line = $("<div>").attr("class", "flexbox-item").html(`&ensp; ${left} <br> + ${right} <br><hr>`);
    var resultado = $("<p>").attr("class", "showAnsw").html(`&ensp; ${result}`);
    $("#decenas").append(line);
    line.append(resultado);

};

function sumaCentenas(left, right) {
    left = Math.floor(Math.random() * 999 + 1);
    right = Math.floor(Math.random() * 999 + 1);
    result = left + right;
    console.log(left + " + " + right + " = " + result);
    var line = $("<div>").attr("class", "flexbox-item").html(`&ensp; ${left} <br> + ${right} <br><hr>`);
    var resultado = $("<p>").attr("class", "showAnsw").html(`&ensp; ${result}`);
    $("#centenas").append(line);
    line.append(resultado);

};

function sumaMillares(left, right) {
    left = Math.floor(Math.random() * 9999 + 1);
    right = Math.floor(Math.random() * 9999 + 1);
    result = left + right;
    console.log(left + " + " + right + " = " + result);
    var line = $("<div>").attr("class", "flexbox-item").html(`&ensp; ${left} <br> + ${right} <br><hr>`);
    var resultado = $("<p>").attr("class", "showAnsw").html(`&ensp; ${result}`);
    $("#millares").append(line);
    line.append(resultado);

};

function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

$("#unidadesBtn").on("click", function(event){
    event.preventDefault();
    $("#sumas").empty();

    for (var i = 0; i < 10; i++) {
        sumaUnidades();
    };
});

$("#decenasBtn").on("click", function(event){
    event.preventDefault();
    $("#decenas").empty();
    for (var i = 0; i < 10; i++) {
        sumaDecenas();
    };

});

$("#centenasBtn").on("click", function(event){
    event.preventDefault();
    $("#centenas").empty();
    for (var i = 0; i < 10; i++) {
        sumaCentenas();
    };

});

$("#millaresBtn").on("click", function(event){
    event.preventDefault();
    $("#millares").empty();
    for (var i = 0; i < 10; i++) {
        sumaMillares();
    };

});

$("#result").on("click", function(event) {
    event.preventDefault();
    console.log(result);
    $(".showAnsw").attr("style", "display: block");
})


// crear sumas al azar
// determinar si las sumas son de unidades (1 digito), decenas (2 digitos), centenas (3 digitos) o millares (4 digitos).
// crear numeros random para cada lado de la operación.
// append las sumas sin resultados a un html.
// 
