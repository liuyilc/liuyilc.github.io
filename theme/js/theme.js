MathJax.Hub.Config({
    tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$', '$'], ["\\(", "\\)"]],
        processEscapes: true
    },
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    "HTML-CSS": {
        availableFonts: ["TeX"],
        scale: 85,
        imageFont: null
    }

});

$(document).ready(function () {
    var fancybox_settings = {
        padding: 0,
        smallBtn: true,
        toolbar: true,
        closeBtn: true,
        fitToView: true,
        autoSize: true,
        openEffect	: 'none',
        closeEffect	: 'none',
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers: {
            thumbs: {
                width	: 30,
                height	: 30
            }
        },
    }
    $('.post').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('data-fancybox')) return;
            var alt = this.alt;
            $(this).wrap('<a href="' + this.src + '"  data-fancybox rel="fancybox-thumb" class="fancybox-thumb" title="' + alt + '"></a>');
        });
    });

    $('.fancybox-thumb').fancybox(fancybox_settings);

    // for prism
    $('code').each(function () {
            var cla = $(this).attr('class');
            if(cla == null) cla='language-python';
            if(!cla.startsWith('language-')) {
                cla='language-'+cla;
            }
            if($(this).parent().is('pre')) $(this).addClass(cla);
    });
});
/*
异步分页
https://infiniteajaxscroll.com/docs/getting-started.html
*/
var ias = jQuery.ias({
    container: '.article-list,#post-list',
    item: '.excerpt',
    pagination: '.pagination',
    next: '.next'
});

ias.extension(new IASSpinnerExtension(

));

ias.extension(new IASTriggerExtension({
    offset: 30,
    text: '<a class="load-more" href="javascript:;" id="info_flows_next_link">点击加载更多</a>',
}));

ias.extension(new IASNoneLeftExtension({text: ""}));

ias.on('rendered', function () {
    //lazyload();
});

$(document).ready(function () {
    $('body').css('padding-top', $('.navbar').height() + 'px');

});
