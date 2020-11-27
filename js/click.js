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
$('.ensure').on('touchstart',function(){
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


$('.special').on('touchstart',function(){
    $('.nolimit').find('.qy-box').hide();
    $('.special a').addClass('organge metro');
    $('.special').prev('.nolimit').find('a').removeClass('organge metro');
    $(this).find('.qy-box').show();
   
});
$('.nolimit').on('touchstart',function(){
    $('.nolimit').next('.special').find('a').removeClass('organge metro');
    $('.nolimit a').addClass('organge metro');
});

//价格
$('.thousand').find('li a').on('touchstart',function(){
    $('li a').removeClass('bcolor');
    $(this).addClass('bcolor');
});

// 区域
$('.area').find('span').on('touchstart',function(){
    $('.area span').removeClass('bcolor');
    $(this).addClass('bcolor');
});
// 面积
$('.acreage').find('span').on('touchstart',function(){
    $('.acreage span').removeClass('bcolor');
    $(this).toggleClass('bcolor');
});
// 标签
$('.tag').find('span').on('touchstart',function(){
    $('.tag span').removeClass('bcolor');
    $(this).toggleClass('bcolor');
});
// 楼龄
$('.level').find('span').on('touchstart',function(){
    $('.level span').removeClass('bcolor');
    $(this).toggleClass('bcolor');
});
// 楼层
$('.floor').find('span').on('touchstart',function(){
    $('.floor span').removeClass('bcolor');
    $(this).toggleClass('bcolor');
});
// 清空条件
$('.resets').on('touchstart',function(){
    $(this).removeClass('bcolor');
    $('span').removeClass('bcolor');
});