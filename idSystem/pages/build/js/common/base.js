define(["jquery"], function (e) {
    return e.extend({
        trim: function (e) {
            return (e || "").replace(/(^\s*)|(\s*$)/g, "")
        }, email: function (e) {
            var t = /^([a-z0-9A-Z]+[_\-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
            return t.test(e)
        }, log: function (e) {
            window.console && console.log(e)
        }, error: function (e) {
            window.console && console.error(e)
        }, debug: function (e) {
            window.console && console.debug(e)
        }, info: function (e) {
            window.console && console.info(e)
        }, browerV: function () {
            var e, t = {}, n = navigator.userAgent.toLowerCase();
            return (e = n.match(/msie ([\d.]+)/)) ? t.ie = e[1] : (e = n.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = n.match(/webkit\/([\d.]+)/)) ? t.webkit = e[1] : (e = n.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = n.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : 0, t
        }, isIE: function (e) {
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
        }, isPlaceholderSupport: function () {
            return "placeholder"in document.createElement("input")
        }, debounce: function (e, t, n) {
            if ("function" == typeof e) {
                t = t || 150, n = n || null;
                var r, i = function () {
                    e.apply(n)
                };
                return function () {
                    window.clearTimeout(r), r = window.setTimeout(i, t)
                }
            }
        }
    }), e.extend({
        fnObjectKeys: function (e) {
            var t = [];
            if (Object.keys)t = Object.keys(e); else for (t[t.length]in e);
            return t
        }, mockAjax: function (t) {
            t && (t.mock ? t.success(t.mock) : e.ajax(t))
        }
    }), e.extend({
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, getUrlParam: function (e, t) {
            if (t || (t = location.search), "string" == typeof t) {
                var n = t.indexOf("?");
                n >= 0 && (t = t.substring(n + 1));
                for (var r = unescape(t).split("&"), i = 0, a = r.length; i < a; i++)if (r[i].indexOf("=") > 0 && r[i].split("=")[0].toLowerCase() == e.toString().toLowerCase())return r[i].split("=")[1]
            }
            return null
        }, createCookie: function (e, t, n) {
            var r = "";
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r = ";expires=" + i.toGMTString()
            }
            try {
                document.cookie = e + "=" + t + r + "; path=/"
            } catch (a) {
            }
        }, readCookie: function (e) {
            try {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var i = n[r]; " " == i.charAt(0);)i = i.substring(1, i.length);
                    if (0 == i.indexOf(t))return i.substring(t.length, i.length)
                }
            } catch (a) {
                return null
            }
            return null
        }, eraseCookie: function (t) {
            e.createCookie(t, "", -1)
        }, clone: function (t) {
            var n;
            return e.support.html5Clone || t.cloneNode ? n = t.cloneNode(!0) : (fragmentDiv.innerHTML = t.outerHTML, fragmentDiv.removeChild(n = fragmentDiv.firstChild)), n
        }, setLocalStorage: function (e, t, n) {
            try {
                if (localStorage)localStorage.setItem(e, t); else {
                    var r = t.length;
                    if (r < 2e3)this.createCookie(e, t, n); else {
                        var i = r / 2e3, a = parseInt(i, 10);
                        i > a && (a += 1);
                        for (var o = 0; o < a; o++)val = t.substring(2e3 * o, 2e3 * o + 2e3), this.createCookie(e + "_" + o, val, n)
                    }
                }
            } catch (s) {
                return -1
            }
        }, getLocalStorage: function (t) {
            try {
                if (localStorage)return localStorage.getItem(t);
                for (var n = 0, r = ""; ;) {
                    var i = e.readCookie(t + "_" + n);
                    if (!i)break;
                    r += i, n++
                }
                return r
            } catch (a) {
            }
        }, clearLocalStore: function (t) {
            try {
                if (localStorage)localStorage.setItem(t, ""); else for (var n = 0; ;) {
                    if (!e.readCookie(t + "_" + n))break;
                    e.eraseCookie(t + "_" + n), n++
                }
            } catch (r) {
            }
        }
    }), e.extend({
        addEventHandler: function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, function () {
                n.call(e)
            }) : e["on" + t] = n
        }, removeEventHandler: function (e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
        }, _formatEvent: function (t) {
            var n = e.browerV();
            return n.ie && (t.charCode = "keypress" == t.type ? t.keyCode : 0, t.eventPhase = 2, t.isChar = t.charCode > 0, t.pageX = t.clientX + document.body.scrollLeft, t.pageY = t.clientY + document.body.scrollTop, t.preventDefault = function () {
                this.returnValue = !1
            }, "mouseout" == t.type ? t.relatedTarget = t.toElement : "mouseover" == t.type && (t.relatedTarget = t.fromElement), t.stopPropagation = function () {
                this.cancelBubble = !0
            }, t.target = t.srcElement, t.time = (new Date).getTime()), t
        }, getEvent: function () {
            return window.event ? e._formatEvent(window.event) : e.getEvent.caller.arguments[0]
        }
    }), e.extend({
        Map: function () {
            return new this._map
        }, StringBuffer: function () {
            return new this._stringBuffer
        }, _map: function () {
            this.length = 0, this.prefix = "hashMap_www_qunar_2014", this.put = function (e, t) {
                this[this.prefix + e] = t, this.length++
            }, this.get = function (e) {
                return "undefined" == typeof this[this.prefix + e] ? null : this[this.prefix + e]
            }, this.keySet = function () {
                var e = [];
                for (var t in this)t.substring(0, this.prefix.length) == this.prefix && e.push(t.substring(this.prefix.length));
                return this.length = e.length, 0 == e.length ? [] : e
            }, this.values = function () {
                var e = [];
                for (var t in this)t.substring(0, this.prefix.length) == this.prefix && e.push(this[t]);
                return this.length = e.length, 0 == e.length ? [] : e
            }, this.size = function () {
                return this.length
            }, this.remove = function (e) {
                delete this[this.prefix + e], this.length--
            }, this.clear = function () {
                for (var e in this)e.substring(0, this.prefix.length) == this.prefix && delete this[e]
            }, this.isEmpty = function () {
                return 0 == this.length
            }, this.containKey = function (e) {
                for (var t in this)if (t == this.prefix + e)return !0;
                return !1
            }, this.toString = function () {
                var e = "";
                for (var t in this)t.substring(0, this.prefix.length) == this.prefix && (e += t.substring(this.prefix.length) + ":" + this[t] + "\r\n");
                return e
            }
        }, _stringBuffer: function () {
            this._strings_ = new Array, this.append = function (e) {
                this._strings_.push(e)
            }, this.toString = function () {
                return this._strings_.join("")
            }
        }
    }), e.extend({
        fnTip: function (t, n, r) {
            function i(r) {
                var a = e.getEvent(r), c = a.target;
                ("false" === s || n[0] !== t[0] && !n[0].contains(c)) && (n[0] === t[0] || t[0].contains(c) || (o && o(), n.addClass("hide"), e(document).unbind("mousemove", i)))
            }

            var r = r || {}, a = r.showCall || void 0, o = r.hideCall || void 0, s = t.attr("overTipShow") || r.isoutshow || void 0;
            n.removeClass("hide"), a && a(), e(document).bind("mousemove", i)
        }
    }), e.extend({
        fnDateToString: function (e, t) {
            var n = new Date(e), r = n.getFullYear(), i = n.getMonth() + 1;
            1 == (i + "").length && (i = "0" + i);
            var a = n.getDate();
            1 == (a + "").length && (a = "0" + a);
            var o = n.getHours();
            1 == (o + "").length && (o = "0" + o);
            var s = n.getMinutes();
            1 == (s + "").length && (s = "0" + s);
            var c = n.getSeconds();
            return 1 == (c + "").length && (c = "0" + c), t = t.replace(/yyyy/, r), t = t.replace(/MM/, i), t = t.replace(/dd/, a), t = t.replace(/HH/, o), t = t.replace(/mm/, s), t = t.replace(/ss/, c)
        }, fnStringToDate: function (e, t) {
            function n(e, t) {
                if (r(e, t)) {
                    var n, a = new Date, o = _.exec(e), s = i(t), c = s[0] >= 0 ? o[s[0] + 1] : a.getFullYear(), l = s[1] >= 0 ? o[s[1] + 1] - 1 : a.getMonth(), u = s[2] >= 0 ? o[s[2] + 1] : a.getDate(), h = s[3] >= 0 ? o[s[3] + 1] : "", f = s[4] >= 0 ? o[s[4] + 1] : "", g = s[5] >= 0 ? o[s[5] + 1] : "";
                    if (n = "" == h ? new Date(c, l, u) : new Date(c, l, u, h, f, g), n.getDate() == u)return n
                }
                alert("wrong date")
            }

            function r(e, t) {
                var n = e;
                if ("" != n) {
                    var r = t;
                    return r = r.replace(/yyyy/, a), r = r.replace(/yy/, o), r = r.replace(/MM/, c), r = r.replace(/M/, l), r = r.replace(/dd/, h), r = r.replace(/d/, f), r = r.replace(/HH/, d), r = r.replace(/H/, v), r = r.replace(/mm/, m), r = r.replace(/m/, y), r = r.replace(/ss/, x), r = r.replace(/s/, b), r = new RegExp("^" + r + "$"), _ = r, r.test(n)
                }
            }

            function i(e) {
                var t = new Array, n = 0;
                s = e.search(/yyyy/), s < 0 && (s = e.search(/yy/)), s >= 0 && (t[n] = s, n++), u = e.search(/MM/), u < 0 && (u = e.search(/M/)), u >= 0 && (t[n] = u, n++), g = e.search(/dd/), g < 0 && (g = e.search(/d/)), g >= 0 && (t[n] = g, n++), p = e.search(/HH/), p < 0 && (p = e.search(/H/)), p >= 0 && (t[n] = p, n++), w = e.search(/mm/), w < 0 && (w = e.search(/m/)), w >= 0 && (t[n] = w, n++), E = e.search(/ss/), E < 0 && (E = e.search(/s/)), E >= 0 && (t[n] = E, n++);
                var r = new Array(s, u, g, p, w, E);
                for (n = 0; n < t.length - 1; n++)for (var i = 0; i < t.length - 1 - n; i++)t[i] > t[i + 1] && (temp = t[i], t[i] = t[i + 1], t[i + 1] = temp);
                for (n = 0; n < t.length; n++)for (var i = 0; i < r.length; i++)t[n] == r[i] && (r[i] = n);
                return r
            }

            var a = "([0-9]{4})", o = "([0-9]{2})", s = -1, c = "(0[1-9]|1[0-2])", l = "([1-9]|1[0-2])", u = -1, h = "(0[1-9]|[1-2][0-9]|30|31)", f = "([1-9]|[1-2][0-9]|30|31)", g = -1, d = "([0-1][0-9]|20|21|22|23)", v = "([0-9]|1[0-9]|20|21|22|23)", p = -1, m = "([0-5][0-9])", y = "([0-9]|[1-5][0-9])", w = -1, x = "([0-5][0-9])", b = "([0-9]|[1-5][0-9])", E = -1, _ = "";
            return n(e, t)
        }
    }), e.fn.extend({
        serializeObject: function () {
            var t = {}, n = this.serializeArray();
            return e.each(n, function () {
                t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), /_time|_date|birthday/g.test(this.name) && (this.value = new Date(this.value).getTime() / 1e3), t[this.name].push(this.value || "")) : (/_time|_date|birthday/g.test(this.name) && (this.value = new Date(this.value).getTime() / 1e3), t[this.name] = this.value || "")
            }), t
        }
    }), e
});