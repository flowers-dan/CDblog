/**************************************************************
 ALIMAMA.COM! JavaScriptComponent Base
 Written by:limu(lenel@yahoo.cn)
 Important:to use this script don't remove these comments
 Version 1.0
 Created Date: 2007-5-1
 Copyright:1997-2007 Alimama.Com All rights reserved.
 **************************************************************/

var $w = window;
var $d = document;
var $l = location;

function $i(s) {
    return $d.getElementById(s);
}

function $t(s) {
    return $d.getElementsByTagName(s);
}

function $n(s) {
    return $d.getElementsByName(s);
}

var _jsc = {};
if (!_jschome) var _jschome = 'http://www.htmldivcss.com/lanren/jscode/';

_jsc.loaded = false;

_jsc.client = (function () {
    var t = {};
    var b = navigator.userAgent.toLowerCase();
    t.isOpera = (b.indexOf('opera') > -1);
    t.isIE = (!t.isOpera && b.indexOf('msie') > -1);
    t.isFF = (!t.isOpera && !t.isIE && b.indexOf('firefox') > -1);
    return t;
})();

_jsc.util = (function () {
    var t = {};
    t.addEvent = function (o, c, h) {
        if (_jsc.client.isIE) {
            o.attachEvent('on' + c, h);
        } else {
            o.addEventListener(c, h, false);
        }
        return true;
    };


    return t;
})();


_jsc.evt = (function () {
    var t = {};
    t.gTar = function (oe) {
        if (_jsc.client.isIE) {
            return oe.srcElement;
        } else {
            return oe.target;
        }
    };

    return t;
})();


// tab�л�
function tabswitch(c, config) {
    this.config = config ? config : {start_delay: 3000, delay: 1500};
    this.container = $i(c);
    this.pause = false;
    this.nexttb = 1;
    this.tabs = this.container.getElementsByTagName('dt');
    var _this = this;
    if (this.tabs.length < 1) this.tabs = this.container.getElementsByTagName('li');
    for (var i = 0; i < this.tabs.length; i++) {
        var _ec = this.tabs[i].getElementsByTagName('span');
        if (_ec.length < 1) _ec = this.tabs[i].getElementsByTagName('a');
        if (_ec.length < 1) {
            _ec = this.tabs[i]
        } else {
            _ec = _ec[0];
        }
        _ec.onmouseover = function (e) {
            _this.pause = true;
            var ev = !e ? window.event : e;
            _this.start(ev, false, null);
        };

        _ec.onmouseout = function () {
            _this.pause = false;
        };

        try {
            $i(this.tabs[i].id + '_body_1').onmouseover = function () {
                _this.pause = true;
            };

            $i(this.tabs[i].id + '_body_1').onmouseout = function () {
                _this.pause = false;
            };
        } catch (e) {
        }
    }

    if ($i(c + '_sts')) {
        var _sts = $i(c + '_sts');
        var _step = _sts.getElementsByTagName('li');
        if (_step.length < 1) _step = _sts.getElementsByTagName('div');
        _step[0].onclick = function () {
            if (_this.tabs[_this.tabs.length - 1].className.indexOf('current') > -1) {
                _this.nexttb = _this.tabs.length + 1;
            }
            ;
            _this.nexttb = _this.nexttb - 2 < 1 ? _this.tabs.length : _this.nexttb - 2;
            //alert(_this.nexttb);
            _this.start(null, null, _this.nexttb);
        };

        _step[1].onclick = function () {
            _this.nexttb = _this.nexttb < 1 ? 1 : _this.nexttb;
            _this.start(null, null, _this.nexttb);
        };
    }
    ;

    this.start = function (e, r, n) {
        if (_this.pause && !e) return;
        if (r) {
            curr_tab = $i(_this.container.id + '_' + rand(4));
        } else {
            if (n) {
                //alert(_this.container.id + '_' + _this.nexttb);
                curr_tab = $i(_this.container.id + '_' + _this.nexttb);
            } else {
                curr_tab = _jsc.evt.gTar(e);
                if (curr_tab.id == "") curr_tab = curr_tab.parentNode;
            }
        }

        var tb = curr_tab.id.split("_");
        for (var i = 0; i < _this.tabs.length; i++) {
            if (_this.tabs[i] == curr_tab) {
                _this.tabs[i].className = "hot Selected current";
                try {
                    //alert(_this.tabs[i].id);
                    $i(_this.tabs[i].id + '_body_1').style.display = "block";
                } catch (e) {
                }
            } else {
                _this.tabs[i].className = "";
                try {
                    $i(_this.tabs[i].id + '_body_1').style.display = "none";
                } catch (e) {
                }
            }
        }
        _this.nexttb = parseInt(tb[tb.length - 1]) >= _this.tabs.length ? 1 : parseInt(tb[tb.length - 1]) + 1;
    };
}


var banners, new_trans, super_rec, crazy_buy, star, bargain_scroll, buy_ok_div;
var select_pr, select_pc, select_cpk;
_jsc.util.addEvent(window, 'load', function () {
    if ($i('banners')) {
        banners = new tabswitch('banners', {});
        setInterval("banners.start(null, null, 1);", 6000);
    }


});
