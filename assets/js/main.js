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
        // Calcula o offset de rolagem ajustado para um deslocamento mais suave
        var scrollOffset = firstVisible.offset().top - 100; // Ajuste o valor conforme necessário

        // Animação suave de rolagem para o elemento visível
        $("html, body").animate({scrollTop: scrollOffset}, 500); // Ajuste a duração da animação conforme necessário (em milissegundos)
    }
}

function mudarCor() {
    var botao = document.querySelector('.buttons-white');
    botao.classList.toggle('clicked');
}

$(".buttons-white-2").click(function(){
    $(".buttons-white-2").css("background-color","#FFF");
    $(this).css("background-color","#A5CE38");
    })