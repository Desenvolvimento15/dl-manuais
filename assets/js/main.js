$("#filter").keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
        // Faz scroll na metade da tela quando a busca estiver completa
        $('html, body').animate({
            scrollTop: ($(window).height() / 2) + $('li.li-cat').first().position().top
        }, 500);
    }
});

$("li.li-cat").hide();

$(".btn-categoria").click(function() {
    var id_cat = $(this).attr("id");
    // Esconde todos os itens da lista com a classe "li-cat"
    $("li.li-cat").hide();
    // Mostra itens da lista com a classe que coincide com o id do botão clicado
    $("li." + id_cat).show();
    // Faz scroll na metade da tela quando uma categoria for clicada
    $('html, body').animate({
        scrollTop: ($(window).height() / 2) + $('li.li-cat').first().position().top
    }, 500);
});



