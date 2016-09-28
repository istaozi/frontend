define(["jquery"], function ($) {
    return function ($) {
        var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function (e) {
            if (null === e)return "null";
            var r = typeof e;
            if ("undefined" !== r) {
                if ("number" === r || "boolean" === r)return "" + e;
                if ("string" === r)return $.quoteString(e);
                if ("object" === r) {
                    if ("function" == typeof e.toJSON)return $.toJSON(e.toJSON());
                    if (e.constructor === Date) {
                        var t = e.getUTCMonth() + 1, n = e.getUTCDate(), o = e.getUTCFullYear(), i = e.getUTCHours(), u = e.getUTCMinutes(), f = e.getUTCSeconds(), a = e.getUTCMilliseconds();
                        return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), u < 10 && (u = "0" + u), f < 10 && (f = "0" + f), a < 100 && (a = "0" + a), a < 10 && (a = "0" + a), '"' + o + "-" + t + "-" + n + "T" + i + ":" + u + ":" + f + "." + a + 'Z"'
                    }
                    if (e.constructor === Array) {
                        for (var c = [], s = 0; s < e.length; s++)c.push($.toJSON(e[s]) || "null");
                        return "[" + c.join(",") + "]"
                    }
                    var l, S, g = [];
                    for (var p in e) {
                        if (r = typeof p, "number" === r)l = '"' + p + '"'; else {
                            if ("string" !== r)continue;
                            l = $.quoteString(p)
                        }
                        r = typeof e[p], "function" !== r && "undefined" !== r && (S = $.toJSON(e[p]), g.push(l + ":" + S))
                    }
                    return "{" + g.join(",") + "}"
                }
            }
        }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (src) {
            return eval("(" + src + ")")
        }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (src) {
            var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered))return eval("(" + src + ")");
            throw new SyntaxError("Error parsing JSON, source is not valid.")
        }, $.quoteString = function (e) {
            return e.match(escapeable) ? '"' + e.replace(escapeable, function (e) {
                var r = meta[e];
                return "string" == typeof r ? r : (r = e.charCodeAt(), "\\u00" + Math.floor(r / 16).toString(16) + (r % 16).toString(16))
            }) + '"' : '"' + e + '"'
        }
    }(jQuery), $
});