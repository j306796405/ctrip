$(function(){
	$(".icon_unfav").on("click",function(){
    	$(this).hasClass('icon_fav')?$(this).removeClass('icon_fav').addClass('icon_unfav'):$(this).removeClass('icon_unfav').addClass('icon_fav');
	});
});