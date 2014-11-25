//## 1 moble app
$('btn-menu').click(function(){
   $('.nav-main').slideDown;
});


/*

## 2. Create accordion panels
1. On browser load, the content for each panel is hidden.
2. When you click a panel title, *that* content appears.
3. When you click another panel title, *that* content appears, but the content of any other opened panel disappears.
4. Bonus: when you click an already open panel's title, it closes.
*/

$('.panel-content').hide();
