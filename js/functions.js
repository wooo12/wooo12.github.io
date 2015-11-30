$(window).ready(function(){
	setInterval(cerrarOjo, 3000);
	setTimeout(aparecerHeader, 500);
	setTimeout(aparecerFace, 1000);
	setTimeout(aparecerContacto, 1500);
	setTimeout(desaparecerLoading, 500);
	calcHeight();
});

$(window).resize(function(){
	calcHeight();
});

var calcHeight = function() {
	altura = $(window).height();
	altura2 = altura * 0.3;
	altura3 = altura * 0.65;
	$('header').css('height',altura2);
	$('.wrap-content').css('height',altura3);
}

var cerrarOjo = function() {
	cerrarOjodenuevo = function() {
		$('.ojo').removeClass('ojo-cerrado');
	}
	$('.ojo').addClass('ojo-cerrado');
	setTimeout(cerrarOjodenuevo, 150);
}

var aparecerHeader = function() {
	$('#headerId').addClass('animated bounceInDown');
}
var aparecerFace = function() {
	$('.face').addClass('animated bounceInUp');
}
var aparecerContacto = function() {
	$('.contacto').css('opacity','1');
}
var desaparecerLoading = function() {
	$('.loading').css('opacity','0');
}

$('nav a').mouseover(function(){
	$('.ojo').css('transform','translateY(-12px)');
});
$('nav').mouseout(function(){
	$('.ojo').css('transform','');
});

$('.inicio').click(function(){
	if($('.face').hasClass('mostrandose') ) {

	} else {
		$('.boca').css('opacity',1);
		$('.face').removeClass('bounceOutLeft');
		$('.face').addClass('bounceInLeft');
		$('.face').addClass('mostrandose');
		$('.contacto').css('opacity','1');

		var desaparecerBoca = function() {
			$('.boca').css('opacity',0);
		}
		setTimeout(desaparecerBoca, 500);
		$('.wrap-content').css('margin-left','');
	}
});

$('.proyectos').click(function(){
	var proyectos = function() { $('.wrap-content').css('margin-left','-100%'); } 
	setTimeout(proyectos,500);
});

$('.contactame').click(function(){
	var contacto = function() { $('.wrap-content').css('margin-left','-200%'); } 
	setTimeout(contacto,500);
});

$('.noInicio').click(function(){
	$('.boca').css('opacity',1);
	$('.face').removeClass('bounceInLeft');
	$('.face').removeClass('bounceInUp');
	$('.face').removeClass('mostrandose');
	$('.face').addClass('bounceOutLeft');
	$('.contacto').css('opacity','0');
});

var quitarClass = function() {
	$(".icono").removeClass("animated bounceIn");
}

$('.icono').click(function(){
	$('.seleccionado').removeClass('seleccionado');
	$(this).addClass("seleccionado");
});
$('.email').click(function(){
	$('.icono').css('background','');
	$(this).css('background','#e80f0f');
	$(".contacto-cont").html('<a class="animated bounceIn" href="mailto:k3n_ramirez@hotmail.com">k3n_ramirez@hotmail.com');
	$(this).addClass("animated bounceIn");
	setTimeout(quitarClass,750);
});

$('.telefono').click(function(){
	$('.icono').css('background','');
	$(this).css('background','#2ab200');
	$(".contacto-cont").html('<a class="animated bounceIn" href="tel:+953920455">953 920 455</a>');
	$(this).addClass("animated bounceIn");
	setTimeout(quitarClass,750);
});

$('.facebook').click(function(){
	$('.icono').css('background','');
	$(this).css('background','#3a589b');
	$(".contacto-cont").html('<a class="animated bounceIn" href="https://www.facebook.com/ken.ramirez.94">ken.ramirez.94</a>');
	$(this).addClass("animated bounceIn");
	setTimeout(quitarClass,750);
});

$('.instagram').click(function(){
	$('.icono').css('background','');
	$(this).css('background','#6a453b');
	$(".contacto-cont").html('<a class="animated bounceIn" href="https://www.instagram.com/ken.ramirez.94/">ken.ramirez.94</a>');
	$(this).addClass("animated bounceIn");
	setTimeout(quitarClass,750);
});
