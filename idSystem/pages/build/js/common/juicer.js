!function () {
    var e = function () {
        var t = [].slice.call(arguments);
        return t.push(e.options), t[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && t[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function (e, n) {
            var i = document, o = i && i.getElementById(n);
            t[0] = o ? o.value || o.innerHTML : e
        }), 1 == arguments.length ? e.compile.apply(e, t) : arguments.length >= 2 ? e.to_html.apply(e, t) : void 0
    }, t = {
        escapehash: {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2f;"}, escapereplace: function (e) {
            return t.escapehash[e]
        }, escaping: function (e) {
            return "string" != typeof e ? e : e.replace(/[&<>"]/gim, this.escapereplace)
        }, detection: function (e) {
            return "undefined" == typeof e ? "" : e
        }
    }, n = function (e) {
        if ("undefined" != typeof console) {
            if (console.warn)return void console.warn(e);
            if (console.log)return void console.log(e)
        }
        throw e
    }, i = function (e, t) {
        if (e = e !== Object(e) ? {} : e, e.__proto__)return e.__proto__ = t, e;
        var n = function () {
        }, i = Object.create ? Object.create(t) : new (n.prototype = t, n);
        for (var o in e)e.hasOwnProperty(o) && (i[o] = e[o]);
        return i
    };
    e.__cache = {}, e.version = "0.6.5-stable", e.settings = {}, e.tags = {operationOpen: "{@", operationClose: "}", interpolateOpen: "\\${", interpolateClose: "}", noneencodeOpen: "\\$\\${", noneencodeClose: "}", commentOpen: "\\{#", commentClose: "\\}"}, e.options = {cache: !0, strip: !0, errorhandling: !0, detection: !0, _method: i({__escapehtml: t, __throw: n, __juicer: e}, {})}, e.tagInit = function () {
        var t = e.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + e.tags.operationClose, n = e.tags.operationOpen + "\\/each" + e.tags.operationClose, i = e.tags.operationOpen + "if\\s*([^}]*?)" + e.tags.operationClose, o = e.tags.operationOpen + "\\/if" + e.tags.operationClose, r = e.tags.operationOpen + "else" + e.tags.operationClose, s = e.tags.operationOpen + "else if\\s*([^}]*?)" + e.tags.operationClose, a = e.tags.interpolateOpen + "([\\s\\S]+?)" + e.tags.interpolateClose, c = e.tags.noneencodeOpen + "([\\s\\S]+?)" + e.tags.noneencodeClose, p = e.tags.commentOpen + "[^}]*?" + e.tags.commentClose, l = e.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + e.tags.operationClose, u = e.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + e.tags.operationClose;
        e.settings.forstart = new RegExp(t, "igm"), e.settings.forend = new RegExp(n, "igm"), e.settings.ifstart = new RegExp(i, "igm"), e.settings.ifend = new RegExp(o, "igm"), e.settings.elsestart = new RegExp(r, "igm"), e.settings.elseifstart = new RegExp(s, "igm"), e.settings.interpolate = new RegExp(a, "igm"), e.settings.noneencode = new RegExp(c, "igm"), e.settings.inlinecomment = new RegExp(p, "igm"), e.settings.rangestart = new RegExp(l, "igm"), e.settings.include = new RegExp(u, "igm")
    }, e.tagInit(), e.set = function (e, t) {
        var n = this, i = function (e) {
            return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function (e) {
                return "\\" + e
            })
        }, o = function (e, t) {
            var o = e.match(/^tag::(.*)$/i);
            return o ? (n.tags[o[1]] = i(t), void n.tagInit()) : void(n.options[e] = t)
        };
        if (2 === arguments.length)return void o(e, t);
        if (e === Object(e))for (var r in e)e.hasOwnProperty(r) && o(r, e[r])
    }, e.register = function (e, t) {
        var n = this.options._method;
        return !n.hasOwnProperty(e) && (n[e] = t)
    }, e.unregister = function (e) {
        var t = this.options._method;
        if (t.hasOwnProperty(e))return delete t[e]
    }, e.template = function (t) {
        var n = this;
        this.options = t, this.__interpolate = function (e, t, n) {
            var i, o = e.split("|"), r = o[0] || "";
            return o.length > 1 && (e = o.shift(), i = o.shift().split(","), r = "_method." + i.shift() + ".call({}, " + [e].concat(i) + ")"), "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (n && n.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + r + ")) %>"
        }, this.__removeShell = function (t, i) {
            var o = 0;
            return t = t.replace(e.settings.forstart, function (e, t, n, i) {
                var n = n || "value", i = i && i.substr(1), r = "i" + o++;
                return "<% ~function() {for(var " + r + " in " + t + ") {if(" + t + ".hasOwnProperty(" + r + ")) {var " + n + "=" + t + "[" + r + "];" + (i ? "var " + i + "=" + r + ";" : "") + " %>"
            }).replace(e.settings.forend, "<% }}}(); %>").replace(e.settings.ifstart, function (e, t) {
                return "<% if(" + t + ") { %>"
            }).replace(e.settings.ifend, "<% } %>").replace(e.settings.elsestart, function (e) {
                return "<% } else { %>"
            }).replace(e.settings.elseifstart, function (e, t) {
                return "<% } else if(" + t + ") { %>"
            }).replace(e.settings.noneencode, function (e, t) {
                return n.__interpolate(t, !1, i)
            }).replace(e.settings.interpolate, function (e, t) {
                return n.__interpolate(t, !0, i)
            }).replace(e.settings.inlinecomment, "").replace(e.settings.rangestart, function (e, t, n, i) {
                var r = "j" + o++;
                return "<% ~function() {for(var " + r + "=" + n + ";" + r + "<" + i + ";" + r + "++) {{var " + t + "=" + r + "; %>"
            }).replace(e.settings.include, function (e, t, n) {
                return t.match(/^file\:\/\//gim) ? e : "<%= _method.__juicer(" + t + ", " + n + "); %>"
            }), i && i.errorhandling === !1 || (t = "<% try { %>" + t, t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), t
        }, this.__toNative = function (e, t) {
            return this.__convert(e, !t || t.strip)
        }, this.__lexicalAnalyze = function (t) {
            var n = [], i = [], o = "", r = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"], s = function (e, t) {
                if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf)return e.indexOf(t);
                for (var n = 0; n < e.length; n++)if (e[n] === t)return n;
                return -1
            }, a = function (t, o) {
                if (o = o.match(/\w+/gim)[0], s(n, o) === -1 && s(r, o) === -1 && s(i, o) === -1) {
                    if ("undefined" != typeof window && "function" == typeof window[o] && window[o].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;
                    if ("undefined" != typeof global && "function" == typeof global[o] && global[o].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;
                    if ("function" == typeof e.options._method[o] || e.options._method.hasOwnProperty(o))return i.push(o), t;
                    n.push(o)
                }
                return t
            };
            t.replace(e.settings.forstart, a).replace(e.settings.interpolate, a).replace(e.settings.ifstart, a).replace(e.settings.elseifstart, a).replace(e.settings.include, a).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, a);
            for (var c = 0; c < n.length; c++)o += "var " + n[c] + "=_." + n[c] + ";";
            for (var c = 0; c < i.length; c++)o += "var " + i[c] + "=_method." + i[c] + ";";
            return "<% " + o + " %>"
        }, this.__convert = function (e, t) {
            var n = [].join("");
            return n += "'use strict';", n += "var _=_||{};", n += "var _out='';_out+='", n += t !== !1 ? e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
        }, this.parse = function (e, t) {
            var o = this;
            return t && t.loose === !1 || (e = this.__lexicalAnalyze(e) + e), e = this.__removeShell(e, t), e = this.__toNative(e, t), this._render = new Function("_, _method", e), this.render = function (e, t) {
                return t && t === n.options._method || (t = i(t, n.options._method)), o._render.call(this, e, t)
            }, this
        }
    }, e.compile = function (e, t) {
        t && t === this.options || (t = i(t, this.options));
        try {
            var o = this.__cache[e] ? this.__cache[e] : new this.template(this.options).parse(e, t);
            return t && t.cache === !1 || (this.__cache[e] = o), o
        } catch (r) {
            return n("Juicer Compile Exception: " + r.message), {
                render: function () {
                }
            }
        }
    }, e.to_html = function (e, t, n) {
        return n && n === this.options || (n = i(n, this.options)), this.compile(e, n).render(t, n._method)
    }, "undefined" != typeof module && module.exports ? module.exports = e : this.juicer = e
}();