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




/*
 * cookie-notice.js
 */

void (function (root, factory) {
	if (typeof define === 'function' && define.amd) define(factory)
	else if (typeof exports === 'object') module.exports = factory()
	else root.CookieNotice = factory()
  }(this, function () {
	function CookieNotice () {
	  ready(run)
	}
	
	CookieNotice.options = {
	  message: '<p>Este site usa cookies para nos ajudar a oferecer a melhor experiência durante sua visita. Ao utilizar este site você concorda com o uso desses cookies.</p>',
	  dismiss: 'Aceita'
	}
	
	function run () {
	  if (window.localStorage.cookieNoticeDismissed) return
	  show()
	}
  
	function dismiss () {
	  var notice = document.getElementById('cookie-notice')
	  if (notice) notice.parentNode.removeChild(notice)
	  window.localStorage.cookieNoticeDismissed = true
	}
	
	function undismiss () {
	  delete window.localStorage.cookieNoticeDismissed
	}
  
	function show () {
	  var $div = document.createElement('div')
	  $div.className = 'cookie-notice'
	  $div.id = 'cookie-notice'
	  
	  var $message = document.createElement('div')
	  $message.className = 'cookie-notice-message'
	  $message.innerHTML = CookieNotice.options.message
	  $div.appendChild($message)
	  
	  var $dismiss = document.createElement('button')
	  $dismiss.innerHTML = CookieNotice.options.dismiss
	  $dismiss.onclick = dismiss
	  $div.appendChild($dismiss)
  
	  document.body.appendChild($div)
	}
  
	function ready (fn) {
	  if (document.readyState === 'complete') {
		return fn()
	  } else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn)
	  } else {
		document.attachEvent('onreadystatechange', function () {
		  if (document.readyState === 'interactive') fn()
		})
	  }
	}
	
	CookieNotice.run = run
	CookieNotice.dismiss = dismiss
	CookieNotice.undismiss = undismiss
	
	return CookieNotice
  }));
  
  /*
   * Run it
   */
  
  CookieNotice.undismiss() // just so it always shows up in this demo
  CookieNotice()