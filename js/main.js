// let btnFeito = document.querySelector('.btn-feito');

// btnFeito.addEventListener('click', function (event) {
//     let card = this.parentNode.parentNode;
//     let pronto = document.getElementById('pronto');

//     pronto.appendChild(card)
// })

//JQUERY
let $btnFeito = $('.btn-feito');

$btnFeito.click(function (event) {
    let $card = $(this).parent().parent();
    let $pronto = $('#pronto');

    $pronto.append($card);
})


///////////////////////////////////////////////////////////////

let $btnLixeira = $('.btn-lixeira')

$btnLixeira.click(function (event) {
    let card = $(this).parent().parent()
    card.remove()
})

///////////////////////////////////////////////////////////////

let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let script_card = document.getElementById('placeholder-card')
    let conteudo_html = script_card.innerHTML

    let titulo = document.getElementById('input-titulo').value;
    let descricao = document.getElementById('input-descricao').value;

    conteudo_html = conteudo_html.replace("@titulo", titulo);
    conteudo_html = conteudo_html.replace("@descricao", descricao)

    console.log(conteudo_html);
    
    $container = $('#card-container');
    $card = $(conteudo_html)

    $container.append($card);


});