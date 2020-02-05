function moveParaFeito() {
    let $elemento_card = $('#card');
    let $elemento_direito = $('#direito');

    $elemento_direito.append($elemento_card);
}

$('.btn-feito').click(moveParaFeito);

////////////////////////////////////////////////

let n1 = 10;

n2 = 99;
function scopoInterno() {
    let n2 = 0;
    console.log("DENTRO DA FUNÇÃO", n1, n2);

}
scopoInterno();

// N2 NÃO EXISTE, ESTÁ DENTRO DA FUNÇÃO
console.log("FORA DA FUNÇÃO", n1, n2);

///////////////////////////////////////////////////////////////////

function consultaApiFacebook(usuario, senha) {
    //code
    logado = { "nome": "Victor", "usuario": "vituhugo" }; // RETORNO DA API
    
    return;
}








