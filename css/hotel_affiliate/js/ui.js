;(function($){
	$('#zzz_mobile').on('keyup',function(){
		var val=$(this).val();
		if(val){
			var num=/^\d+$/.test(val);
			if(num){
				$(this).parent().removeClass('status_warning');
				$(this).siblings('.btn_basis02').show();
			}else{
				$(this).parent().addClass('status_warning');
				$('.cui-toast').css({'display':'block','position':'absolute','z-index':100,'top':'50%','left':'50%','margin-left':'-110px','margin-top':'-22px'});
				setTimeout(function(){
					$('.cui-toast').hide();
				},1000);
			}
		}else{
			$(this).parent().removeClass('status_warning');
		}
	});
    $('#zzz_active_pwd').on('keyup',function(){
        $(this).siblings('.btn_basis02').show();
    })
	$('#zzz_email,#zzz_hotelname,#zzz_h_addr,#zzz_h_tel,#zzz_h_contact,#zzz_h_phone,#zzz_h_email,#zzz_room_type,#zzz_room_price').on('keyup',function(){
		var val=$(this).val();
		if(val){
			$(this).parent().removeClass('status_warning');
			$(this).siblings('.btn_basis02').show();
		}
	});
	$('.btn_basis02').on('click',function(){
		$(this).hide().siblings('input').get(0).value='';
		$(this).parent().removeClass('status_warning');
	});
	// room info
	$('.aff_tab span').on('click',function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	$('.pop_select_day_items a').on('click',function(){
		$(this).toggleClass('choosed');
	});
	$('#zzz_select,#zzz_select2').on('click',function(){
		$('.pop_select_day').addClass('pop_select_day_active');
	});
})(Zepto);