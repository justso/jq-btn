/*global $, console */
/*jslint es5:true, forin:true, white:false */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var tmp;
(function ($) {

    function Btn(cfg) {
        var _ = this;
        _._ = cfg;
        _.ele = $('<button>') //                    manifest
        .addClass(cfg.sel) //                       classify
        .text(cfg.txt) //                           identify
        .bind('click.Btn', function () { //         activate
            window.open(cfg.url, '_self');
        });
    }

    function configure(txt, cfg) {
        return $.extend({
            sel: '',
            txt: txt || 'button',
            url: '#',
        }, cfg);
    }

    function construct(str, obj) {
        var btn = new Btn(configure(str, obj));
        btn.ele.data('jqBtn', btn);
        clog('construct', btn);
        return btn.ele;
    }

    $.newButton = construct;
})(jQuery);


$(function test() {
    tmp = $.newButton().appendTo('body');
    tmp = $.newButton('red button', {
        sel: 'redBtn',
        url: '#red',
    }).appendTo('body');
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*
Button
x   DATA:
x       text
x   INIT:
x       element <button>
x       embody object as pointer in data
x   STYLE:
x       border: 1px solid gray;
x       font-size: 13px;
x       height: 26px;
x       padding: 4px 12px;

tileButton
    TAKE:
        Button
    DATA:
        link
    INIT:
        bind click to link
    STYLE:
x       background-color: red;
x       color: white;
x       hover:
x           border-color: white

*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
