$.fn.rotate_menu = function($settings) {

    //navAddClass['buttonClass','button_event_addClass'] // you can add class for nav button for [buttonClass,button_event_addClass]
    //navHtml //your settine your navbutton html
    //menuAddClass //addClass for your menu block


    //mack wrapper for my rotate-menu
    $('body').wrapInner('<div class ="rotate-body"></div>');
    $('.rotate-body').before('<div class ="rotate-menu"></div>');
    $('.rotate-menu').append($(this).clone(true).addClass($settings.menuAddClass));
    $('.rotate-menu').before('<div class ="rotate-menu-nav"><div class ="rotate-menu-nav_button">☰</div></div>');

    //add rotate effect style
    var clickTime = 1;
    $('.rotate-menu-nav').click(function() {
        $('.rotate-body').toggleClass('rotate_back');
        $('.rotate-menu').toggleClass('rotate_front');

        //對 ios 行動裝置閃爍進行防呆
        clickTime += 1;
        if (clickTime % 2 != 1) {
            setTimeout(function() {
                $('.rotate-body').hide();
                setTimeout(function() {
                    $('.rotate-body').show();
                }, 10);
            }, 250);
        }else{
          setTimeout(function() {
              $('.rotate-menu').hide();
              setTimeout(function() {
                  $('.rotate-menu').show();
              }, 10);
          }, 500);
        }

    })
    if ($settings.navHtml !== null) {
        $('.rotate-menu-nav').html($settings.navHtml);
    }

    //setting rotate-menu backgroun for body background & body backgrond for rotate-body backgroud
    if ($('body').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box') {
        $('body').css('background', '#ffffff');
        $('.rotate-body').css('background', $('body').css('background'));
        $('body').css('background', $('.rotate-menu').css('background'));
    } else {
        $('.rotate-body').css('background', $('body').css('background'));
        $('body').css('background', $('.rotate-menu').css('background'));
    }

};


(function($) {
    $(document).ready(function() {
        $('.menu_main-menu').rotate_menu({
            navAddClass: ['test,test2'],
            menuAddClass: 'responsive',
            //navHtml: '<div>123</div>',
        });
    })





})(jQuery);
