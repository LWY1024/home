$('.region').on('touchstart',function(){
    //yin
    $('.region').css('color','#666');
    $('.region').next('img').attr('src','./image/SecondHandList/jt-down.png');
    $('.region').siblings('.li-box').css('display','none');
    $('.region').siblings('ul').css('display','none');

        //xian
        $(this).css('color','#FF8A00');
        $(this).next('img').attr('src','./image/SecondHandList/jt-h.png')
        $(this).siblings('.li-box').css('display','block');
        $(this).siblings('ul').css('display','block');
        $('.mengcheng').show();
});


//确定
$('.kuai').on('touchstart',function(){
    $('.region').siblings('ul').css('display','none');
    $('.region').css('color','#666');
    $('.region').next('img').attr('src','./image/SecondHandList/jt-down.png');
    $('.mengcheng').hide();
});
//蒙层
$('.mengcheng').on('touchstart',function(){
    $('.region').css('color','#666');
    $('.region').next('img').attr('src','./image/SecondHandList/jt-down.png');
    $('.region').siblings('.li-box').css('display','none');
    $('.region').siblings('ul').css('display','none');
    $(this).hide();
});