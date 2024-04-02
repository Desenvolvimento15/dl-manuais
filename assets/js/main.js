$("#filter").keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
        scrollToFirstVisible();
    }
});

$("li.li-cat").hide();

$("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".li-cat").hide().filter(function() {
        return $(this).text().toLowerCase().indexOf(value) > -1;
    }).show();
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
            scrollTop: firstVisible.offset().top - 200 // Ajuste de offset para uma rolagem mais suave
        }, 500);
    }
}
