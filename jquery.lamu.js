/**
 * Created by chuanlong on 2014/5/16.
 */
;
(function ($) {
    $.lamu = function (options) {
        return $.fn.lamu(options)
    }
    $.fn.lamu = function (options) {
        var defaults = {
                closeTime: 5000,
                speed: 'fast',
                urlLink: null,
                imgUrl: null,
                height: '300px',
                width:'960px',
                using:true
            },
            $my = $(this),
            options = $.extend(defaults, options);
        if(options.using){
            if ($('#lamu').length === 0) {
                $('body').prepend('<div id="lamu"></div>');
            }
            $('#lamu').css({ width: options.width, height: options.height,margin:'0 auto'}).html('<a href="'+options.urlLink+'" target="_blank"><img src="'+options.imgUrl+'" width="'+options.width+'" height="'+options.height+'"/></a>')

            $('#lamu').ready(function () {
                $('#lamu').delay(options.closeTime).slideUp(options.speed);
            });
        }



    }
})(jQuery)