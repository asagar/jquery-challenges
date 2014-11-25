//## 1 moble app
$('btn-menu').click(function(){
   $('.nav-main').slideToggle();
});
//## 2. Create accordion panels

$('.panel-content').hide();

$('.panel-title').click(function(){

//$('.panel-content').slideToggle();
$(this).next().slideToggle();
});