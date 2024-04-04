$("#filter").keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
        scrollToFirstVisible();
    }
});

$("li.li-cat").hide();

$("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    
    // Exibir mensagem "Carregando..."
    $(".loading").show();
    $(".no-results").hide();

    // Simular um pequeno atraso para demonstrar o estado "Carregando..."
    setTimeout(function() {
        var filteredItems = $(".li-cat").hide().filter(function() {
            return $(this).text().toLowerCase().indexOf(value) > -1;
        });

        if (filteredItems.length === 0) {
            $(".no-results").show();
        } else {
            $(".no-results").hide();
            filteredItems.show();
        }

        // Ocultar mensagem "Carregando..."
        $(".loading").hide();
    }, 1000); // Altere este valor conforme necessário
});

$(".btn-categoria").click(function() {
    var id_cat = $(this).attr("id");
    $("li.li-cat").hide();
    $("li." + id_cat).show();
    scrollToFirstVisible();
});

function scrollToFirstVisible() {
    var firstVisible = $(".li-cat:visible:first");
    if (firstVisible.length) {
        $("html, body").animate({
            scrollTop: firstVisible.offset().top - 1000 // Ajuste de offset para uma rolagem mais suave
        }, 500);
    }
}