var buscando_resultados = false;
$(document).ready(function(){
	$("#filter").keyup(function(){
		$('.lista_manuais p.txt_aguarde').show();
		$('.lista_manuais div.cat').hide();
		$('.lista_manuais p.nenhum_resultado').hide();
		
		if( buscando_resultados == false ){
			buscando_resultados = true;
			setTimeout(function(){
				var filter_el = $('#filter');
				var filter = $('#filter').val();
				var contador = 0;
				var contador_por_categoria = 0;
				
				$(".lista_manuais .cat").each(function(){
					contador_por_categoria = 0;
					$(this).find("li").each(function(){
						if( $(this).html().search(new RegExp(filter, "i")) >= 0 ){
							$(this).show();
							$(this).siblings('h4.titulo_secao').show();
							contador++;
							contador_por_categoria++;
						}
						else{
							$(this).hide();
							if( $(this).is(':last-child') && contador_por_categoria == 0 ) $(this).siblings('h4.titulo_secao').hide();
						}
					});
				});
				
				$('.lista_manuais p.txt_aguarde').hide();
				
				if( contador == 0 ){
					$('.lista_manuais div.cat').hide();
					$('.lista_manuais p.nenhum_resultado').show();
				}
				else {
					$('.lista_manuais p.nenhum_resultado').hide();
					$('.lista_manuais div.cat').show();
				}
				
				buscando_resultados = false;
			}, 1000);
		}
    });
	
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
});





