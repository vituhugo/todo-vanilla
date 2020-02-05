let $elemento_card = $('#card');
let $elemento_direito = $('#direito');
let $elemento_btn_feito = $('.btn-feito');

$elemento_btn_feito.click(function () {
    $elemento_direito.append($elemento_card);
});
