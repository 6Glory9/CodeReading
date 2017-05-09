/**
 * Created by admin on 2017/5/9.
 */
!function (t) {
    function e(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([

    function (t, e, n) {
        t.exports = n(1)
    },
    function (t, e, n) {
        window.xmstMd5 = n(2), n(3), n(4),
            function () {
                var t = [],
                    e = xmstPerformance(t),
                    n = function () {
                        for (i = 0; i < e.p.length; i++) e.push(e.p[i])
                    };
                "undefined" != typeof window._msq && n(), window._msq = e, (100 === t.domain_id || 101 === t.domain_id) && xmstTools.creatScript("//c1.mifile.cn/f/i/15/stat/js/unjcV2.js")
            }()
    },
    function (t, e, n) {
        var o;
        !function (r) {
            "use strict";

            function i(t, e) {
                var n = (65535 & t) + (65535 & e),
                    o = (t >> 16) + (e >> 16) + (n >> 16);
                return o << 16 | 65535 & n
            }

            function a(t, e) {
                return t << e | t >>> 32 - e
            }

            function s(t, e, n, o, r, s) {
                return i(a(i(i(e, t), i(o, s)), r), n)
            }

            function c(t, e, n, o, r, i, a) {
                return s(e & n | ~e & o, t, e, r, i, a)
            }

            function u(t, e, n, o, r, i, a) {
                return s(e & o | n & ~o, t, e, r, i, a)
            }

            function m(t, e, n, o, r, i, a) {
                return s(e ^ n ^ o, t, e, r, i, a)
            }

            function d(t, e, n, o, r, i, a) {
                return s(n ^ (e | ~o), t, e, r, i, a)
            }

            function f(t, e) {
                t[e >> 5] |= 128 << e % 32, t[(e + 64 >>> 9 << 4) + 14] = e;
                var n, o, r, a, s, f = 1732584193,
                    l = -271733879,
                    p = -1732584194,
                    g = 271733878;
                for (n = 0; n < t.length; n += 16) o = f, r = l, a = p, s = g, f = c(f, l, p, g, t[n], 7, -680876936),
                    g = c(g, f, l, p, t[n + 1], 12, -389564586),
                    p = c(p, g, f, l, t[n + 2], 17, 606105819), l = c(l, p, g, f, t[n + 3], 22, -1044525330), f = c(f, l, p, g, t[n + 4], 7, -176418897), g = c(g, f, l, p, t[n + 5], 12, 1200080426), p = c(p, g, f, l, t[n + 6], 17, -1473231341), l = c(l, p, g, f, t[n + 7], 22, -45705983), f = c(f, l, p, g, t[n + 8], 7, 1770035416), g = c(g, f, l, p, t[n + 9], 12, -1958414417), p = c(p, g, f, l, t[n + 10], 17, -42063),
                    l = c(l, p, g, f, t[n + 11], 22, -1990404162), f = c(f, l, p, g, t[n + 12], 7, 1804603682),
                    g = c(g, f, l, p, t[n + 13], 12, -40341101), p = c(p, g, f, l, t[n + 14], 17, -1502002290), l = c(l, p, g, f, t[n + 15], 22, 1236535329), f = u(f, l, p, g, t[n + 1], 5, -165796510), g = u(g, f, l, p, t[n + 6], 9, -1069501632), p = u(p, g, f, l, t[n + 11], 14, 643717713), l = u(l, p, g, f, t[n], 20, -373897302), f = u(f, l, p, g, t[n + 5], 5, -701558691), g = u(g, f, l, p, t[n + 10], 9, 38016083), p = u(p, g, f, l, t[n + 15], 14, -660478335), l = u(l, p, g, f, t[n + 4], 20, -405537848), f = u(f, l, p, g, t[n + 9], 5, 568446438), g = u(g, f, l, p, t[n + 14], 9, -1019803690),
                    p = u(p, g, f, l, t[n + 3], 14, -187363961), l = u(l, p, g, f, t[n + 8], 20, 1163531501), f = u(f, l, p, g, t[n + 13], 5, -1444681467), g = u(g, f, l, p, t[n + 2], 9, -51403784), p = u(p, g, f, l, t[n + 7], 14, 1735328473), l = u(l, p, g, f, t[n + 12], 20, -1926607734), f = m(f, l, p, g, t[n + 5], 4, -378558), g = m(g, f, l, p, t[n + 8], 11, -2022574463), p = m(p, g, f, l, t[n + 11], 16, 1839030562),
                    l = m(l, p, g, f, t[n + 14], 23, -35309556), f = m(f, l, p, g, t[n + 1], 4, -1530992060), g = m(g, f, l, p, t[n + 4], 11, 1272893353), p = m(p, g, f, l, t[n + 7], 16, -155497632), l = m(l, p, g, f, t[n + 10], 23, -1094730640), f = m(f, l, p, g, t[n + 13], 4, 681279174), g = m(g, f, l, p, t[n], 11, -358537222), p = m(p, g, f, l, t[n + 3], 16, -722521979),
                    l = m(l, p, g, f, t[n + 6], 23, 76029189), f = m(f, l, p, g, t[n + 9], 4, -640364487), g = m(g, f, l, p, t[n + 12], 11, -421815835), p = m(p, g, f, l, t[n + 15], 16, 530742520), l = m(l, p, g, f, t[n + 2], 23, -995338651), f = d(f, l, p, g, t[n], 6, -198630844), g = d(g, f, l, p, t[n + 7], 10, 1126891415),
                    p = d(p, g, f, l, t[n + 14], 15, -1416354905),
                    l = d(l, p, g, f, t[n + 5], 21, -57434055), f = d(f, l, p, g, t[n + 12], 6, 1700485571), g = d(g, f, l, p, t[n + 3], 10, -1894986606), p = d(p, g, f, l, t[n + 10], 15, -1051523), l = d(l, p, g, f, t[n + 1], 21, -2054922799), f = d(f, l, p, g, t[n + 8], 6, 1873313359), g = d(g, f, l, p, t[n + 15], 10, -30611744), p = d(p, g, f, l, t[n + 6], 15, -1560198380), l = d(l, p, g, f, t[n + 13], 21, 1309151649),
                    f = d(f, l, p, g, t[n + 4], 6, -145523070), g = d(g, f, l, p, t[n + 11], 10, -1120210379), p = d(p, g, f, l, t[n + 2], 15, 718787259), l = d(l, p, g, f, t[n + 9], 21, -343485551), f = i(f, o), l = i(l, r),
                    p = i(p, a), g = i(g, s);
                return [l, p]
            }

            function l(t) {
                var e, n = "";
                for (e = 0; e < 32 * t.length; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return n
            }

            function p(t) {
                var e, n = [];
                for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
                for (e = 0; e < 8 * t.length; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return n
            }

            function g(t) {
                return l(f(p(t), 8 * t.length))
            }

            function v(t, e) {
                var n, o, r = p(t),
                    i = [],
                    a = [];
                for (i[15] = a[15] = void 0, r.length > 16 && (r = f(r, 8 * t.length)), n = 0; 16 > n; n += 1) i[n] = 909522486 ^ r[n], a[n] = 1549556828 ^ r[n];
                return o = f(i.concat(p(e)), 512 + 8 * e.length), l(f(a.concat(o), 640))
            }

            function h(t) {
                var e, n, o = "0123456789abcdef",
                    r = "";
                for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), r += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);
                return r
            }

            function x(t) {
                return unescape(encodeURIComponent(t))
            }

            function w(t) {
                return g(x(t))
            }

            function T(t) {
                return h(w(t))
            }

            function y(t, e) {
                return v(x(t), x(e))
            }

            function _(t, e) {
                return h(y(t, e))
            }

            function S(t, e, n) {
                return e ? n ? y(e, t) : _(e, t) : n ? w(t) : T(t)
            }

            o = function () {
                return S
            }.call(e, n, e, t), !(void 0 !== o && (t.exports = o))
        }(this)
    },
    function (t, e) {
        xmstTools = function () {
            function t() {
                var t = navigator.userAgent.toLowerCase();
                return "undefined" != typeof WE && -1 !== t.indexOf("xiaomi/miuibrowser/4.3/shop") && -1 === t.indexOf("iphone") ? !0 : !1
            }

            function e(t) {
                var e = window.WE || {};
                return e.triggerString && e.triggerString(t, "") || ""
            }

            function n() {
                var t = window.location.hostname,
                    e = t.split(".");
                size = e.length;
                var n = "." + e[size - 2] + "." + e[size - 1];
                return n
            }

            function o() {
                return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
            }

            function r() {
                return navigator.vendor
            }

            function i() {
                return navigator.platform
            }

            function a() {
                return screen.width + "*" + screen.height
            }

            function s(t, e, n, o) {
                var r = arguments.length,
                    i = new Date;
                i.setTime(i.getTime() + 31104e6), document.cookie = 3 === r ? t + "=" + e + ";path=/;domain=" + n : t + "=" + e + ";path=/;domain=" + n + ";expires=" + o
            }

            function c(t) {
                for (var e = document.cookie, n = u(e), o = n.split(";"), r = 0; r < o.length; r++) {
                    var i = o[r].split("=");
                    if (i.length > 1 && i[0] === t) return i[1]
                }
                return ""
            }

            function u(t) {
                for (var e = "", n = 0; n < t.length; n++) {
                    var o = t.charAt(n);
                    " " !== o && (e += o)
                }
                return e
            }

            function m(t) {
                try {
                    return t.replace(/\s/g, "")
                }
                catch (e) {
                    return t
                }
            }

            function d() {
                return Math.round(2147483647 * Math.random())
            }

            function f(t) {
                var e = document.createElement("a");
                return e.href = t, e.hostname
            }

            function l() {
                var t = new Date,
                    e = t.getTime() + "_" + Math.round(1e4 * Math.random());
                return e
            }

            function p(t) {
                var e = "";
                if (t === []) return "";
                for (var n in t) e += "&" + n + "=" + encodeURIComponent(t[n]);
                return e
            }

            function g(t) {
                w(t)
            }

            function v(t) {
                return "function" == typeof t
            }

            function h(t, e) {
                var n, o = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
                n = document.createElement("script"), n.async = "async", n.src = t, n.onload = n.onreadystatechange = function () {
                    (!n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, o && n.parentNode && o.removeChild(n), n = void 0, e())
                }, o.insertBefore(n, o.firstChild)
            }

            function x(t, e) {
                for (var n in e)
                    if (e[n] == t) return !0;
                return !1
            }

            function w(t) {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = t;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            }

            function T(t) {
                var e = c("xm_vistor"),
                    o = !0,
                    r = "",
                    i = 0,
                    a = (new Date).getTime();
                if ("" !== e) {
                    var u = e.split("-");
                    2 == u.length && (r = u[0], i = u[1], 18e5 >= a - i && (o = !1))
                }
                return o && (r = t + "_" + a), i = a, s("xm_vistor", r + "-" + i, n()),
                    r
            }

            function y(t, e) {
                var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    r = [];
                if (e = e || o.length, t)
                    for (n = 0; t > n; n++) r[n] = o[0 | Math.random() * e];
                else {
                    var i;
                    for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", n = 0; 36 > n; n++) r[n] || (i = 0 | 16 * Math.random(), r[n] = o[19 == n ? 3 & i | 8 : i])
                }
                return r.join("")
            }

            function _() {
                var t, e, n;
                return n = function (t) {
                    return "[object Object]" === Object.prototype.toString.call(t)
                }, e = function o(t, e) {
                    var r;
                    for (r in t)
                        if (t.hasOwnProperty(r)) {
                            if (n(t[r]) && n(e[r]) && o(t[r], e[r]), e.hasOwnProperty(r)) continue;
                            e[r] = t[r]
                        }
                }, t = function () {
                    var t, o = arguments,
                        r = {};
                    if (!o.length) return {};
                    for (t = o.length - 1; t >= 0; t--) n(o[t]) && e(o[t], r);
                    return o[0] = r, r
                }
            }

            function S(u) {
                var m = document.location.href.replace(/&/g, "|"),
                    p = document.referrer.replace(/&/g, "|");
                if (p = p.toLowerCase()) {
                    var g = f(p),
                        v = c("lastsource");
                    v && s("lastsource", v, n()), (g.indexOf(".mi.com") < 0 || g.indexOf("s1.mi.com") > -1 || g.indexOf("p.www.xiaomi.com") > -1 || g.indexOf("a.union.mi.com") > -1) && s("lastsource", g, n())
                }
                var h = c("xm_www_sid"),
                    x = c("mstuid"),
                    w = c("muuid"),
                    _ = c("mucid"),
                    S = c("mutid"),
                    C = c("mstz") || "";
                if ("" === C || C.split("|").length < 3) {
                    var A = [];
                    A[0] = "", A[1] = "", A[2] = d().toString() + ".0";
                    var D = "mstz",
                        j = A.join("|");
                    s(D, j, n())
                }
                C = c("mstz");
                var I = C.split("|") || [],
                    b = (4 == I.length ? 0 : 1, I[0] || ""),
                    O = I[1] || "",
                    k = [];
                k = I[2].split(".");
                var E = k[0],
                    R = parseInt(k[1]) + 1;
                I[2] = k[0] + "." + R.toString();
                var M = I[3] || "",
                    P = I[4] || "",
                    U = I[5] || "",
                    L = 0,
                    N = encodeURIComponent(p);
                "" == N && (P = "", U = ""), N != P && m != p ? (U = P, P = N) : "" != N && (L = 1), I[3] = M, I[4] = P, I[5] = U, s("mstz", I.join("|"), n());
                var B = c("lastsource"),
                    z = 0,
                    V = new Date;
                V.setTime(V.getTime() + 62208e6), "" === x && (z = 1, x = l()), s("mstuid", x, n(), V.toGMTString());
                var H = "",
                    q = new Date;
                u.curl = void 0 === u.curl || "" == u.curl ? location.href : u.curl, u.xmv = T(x), u.v = version, void 0 === u.vuuid && (u.vuuid = y(16, 32));
                var G = c("userId"),
                    F = "";
                return t && (G || (G = e("get_encrypt_uid")), F = e("get_shop_deviceid")),
                    H = "mid=" + (c("euid") || G) + "&device_id=" + F + "&phpsessid=" + h + "&mstuid=" + x + "&muuid=" + w + "&mucid=" + _ + "&sessionId=" + E + "&step=" + R + "&new_visitor=" + z + "&mstprevpid=" + encodeURIComponent(b) + "&mstprev_pid_loc=" + M + "&prevtarget=" + O + "&lastsource=" + B + "&timestamp=" + q.getTime() + "&ref=" + N + "&domain=" + n() + "&screen=" + a() + "&language=" + o() + "&vendor=" + r() + "&platform=" + i() + "&gu=" + U + "&pu=" + P + "&rf=" + L + "&mutid=" + S + "&muwd=" + encodeURIComponent(c("muwd"))
            }

            function C() {
                var t = /\/(index.php|index.html|index.htm|index)$/,
                    e = location.protocol + "//",
                    n = location.host,
                    o = location.pathname.replace(t, "/"),
                    r = e + n + o;
                return xmstMd5("undefined" != typeof _STAT_HASHNAME && "" != _STAT_HASHNAME ? _STAT_HASHNAME : r)
            }

            function A() {
                return "file.stat.be.xiaomi.com" == location.host ? !0 : !1
            }

            function D(t, e) {
                var n = "",
                    o = !1,
                    r = "hash" == e ? location.hash : location.search,
                    i = "hash" == e ? "#" : "?";
                if (0 === r.length) return n;
                if (0 == r.indexOf(i) && r.indexOf("=") > 1)
                    for (var a = r.substring(1, r.length).split("&"),
                             s = 0; s < a.length && !o;) a[s].indexOf("=") > 0 && a[s].split("=")[0].toLowerCase() == t.toLowerCase() && (n = a[s].split("=")[1], o = !0), s++;
                return n
            }

            function j(t) {
                var e, n = 0;
                for (e in t) t.hasOwnProperty(e) && n++;
                return n
            }

            function I(t, e) {
                var n = function () {
                    switch (t.constructor) {
                        case Object:
                            return "Object";
                        case Array:
                            return "Array";
                        case NodeList:
                            return "NodeList";
                        default:
                            return "null"
                    }
                }();
                if ("Array" === n || "NodeList" === n) [].every.call(t, function (t, n) {
                    return e.call(t, n, t) === !1 ? !1 : !0
                });
                else if ("Object" === n)
                    for (var o in t)
                        if (e.call(t[o], o, t[o]) === !1) break
            }

            function b(t) {
                for (var e = new RegExp("[`~!$^*()|{};\\[\\]<>?~锛侊骏鈥︹€�*锛堬級鈥斺€攟{}銆愩€戔€橈紱鈥濃€溿€傦紝銆侊紵]"), n = "",
                         o = 0; o < t.length; o++) n += t.substr(o, 1).replace(e, "");
                return n
            }

            ({
                locationObj: {
                    protocol: location.protocol + "//",
                    host: location.host,
                    pathname: location.pathname
                }
            });
            return {
                isFun: v,
                getDomain: n,
                loadScript: h,
                in_array: x,
                creatScript: w,
                isApp: t,
                triggerString: e,
                getVars: p,
                sendData: g,
                _setCookie: s,
                removeBlanks: u,
                getLanguage: o,
                getVendor: r,
                getPlatform: i,
                getScreen: a,
                getRandomNum: d,
                getRefDomain: f,
                getCookie: c,
                getMstuid: l,
                uuid: y,
                getBaseParam: S,
                getPcid: C,
                isSnapshotModal: A,
                getLocationName: D,
                extend: _,
                getPropertyCount: j,
                each: I,
                trim: m,
                stripscript: b
            }
        }()
    },
    function (t, e) {
        xmstPerformance = function (t) {
            function e() {
                var t = window.performance || window.webkitPerformance,
                    t = t && t.timing;
                if (!t) return "";
                var e = t.navigationStart,
                    n = [];
                n.ldns = t.domainLookupEnd - t.domainLookupStart, n.con = t.connectEnd - t.connectStart, n.res = t.responseStart - t.requestStart, n.down = t.responseEnd - t.responseStart, n.redi = t.fetchStart - e;
                var o = "";
                for (var r in n) o += "&" + r + "=" + n[r];
                return o
            }

            function n() {
                var e = "",
                    n = new Array("http://service.order.mi.com/cservice", "http://me.mi.com", "https://service.order.mi.com/cservice", "https://me.mi.com"),
                    o = new Array(100, 101, 127, 128, 129, 130, 131, 132);
                if (xmstTools.in_array(t.domain_id, o)) {
                    for (var r = window.location.href, i = !0,
                             a = 0; a < n.length && i; a++) -1 != r.indexOf(n[a]) && (i = !1);
                    if (i) {
                        e = xmstTools.getPcid();
                        var s = new Date,
                            c = function () {
                                xmstTools.creatScript("//c1.mifile.cn/f/i/15/stat/js/jquery.statData.min.js?d=" + s.getFullYear() + (s.getMonth() + 1) + s.getDate())
                            };
                        c()
                    }
                }
                return t.pageid = e, t.pageid
            }

            var o = function () {
                    this.p = []
                },
                r = new o;
            r.p = window._msq, version = "1.4.09";
            var i = "//a.stat.xiaomi.com/js/mstr.js?";
            return o.prototype.push = function (t) {
                return xmstTools.isFun(t[0]) ? void t[0](t.slice(1)) : void(void 0 !== o.prototype[t[0]] && o.prototype[t[0]](t.slice(1)))
            }, o.prototype.setDomainId = function (e) {
                t.domain_id = e[0]
            }, o.prototype.setUid = function (e) {
                t.uid = e[0]
            }, o.prototype.setVars = function (e) {
                t[e[0]] = e[1]
            }, o.prototype.getDomainId = function () {
                return t.domain_id
            }, o.prototype.getVars = function (e) {
                return t[e]
            }, o.prototype.trackEvent = function (e) {
                var n = "",
                    o = "",
                    r = "",
                    a = "",
                    s = (new Date, xmstTools.getCookie("mstz").split("|") || []),
                    c = "",
                    u = "",
                    m = "",
                    d = "",
                    f = 0;
                s.length >= 3 && (c = s[0], u = s[1], m = s[2].split(".")[0] || xmstTools.getRandomNum().toString() + ".0"), n = e[0], o = encodeURIComponent(e[1]), r = e[2], s[0] = n, d = s[3] || "", d != r && (s[3] = r, f = 1);
                var l = [];
                l = s[2].split("."), m = l[0], e[3] && (a = encodeURIComponent(e[3]));
                new Date, xmstTools.getCookie("xm_www_sid");
                u != o && (s[1] = o, f = 1), f && xmstTools._setCookie("mstz", s.join("|"), xmstTools.getDomain());
                var p = xmstTools.getCookie("userId"),
                    g = "";
                xmstTools.isApp && (p || (p = xmstTools.triggerString("get_encrypt_uid")), g = xmstTools.triggerString("get_shop_deviceid"));
                var v = xmstTools.getBaseParam(t),
                    h = "",
                    x = new Date;
                x.setTime(x.getTime() + 18e5), xmstTools._setCookie("log_code", encodeURIComponent(n) + "|" + encodeURIComponent(location.href), xmstTools.getDomain(), x.toGMTString()), h = "mstpid=" + encodeURIComponent(n) + "&" + v + "&target=" + o + "&prevtarget=" + u + "&pid_loc=" + r + "&mstprev_pid_loc=" + d + "&log_code=" + a;
                var w = xmstTools.getVars(t);
                xmstTools.sendData(i + h + w)
            }, o.prototype.trackPageView = function () {
                n();
                var o = xmstTools.getBaseParam(t);
                varParam = xmstTools.getVars(t);
                var r = e();
                xmstTools.sendData(i + o + r + varParam);
                var a = new Date,
                    s = encodeURIComponent(window.location.href);
                a.setTime(a.getTime() + 18e4), xmstTools._setCookie("msttime", s, xmstTools.getDomain(), a.toGMTString()),
                    a.setTime(a.getTime() - 12e4),
                    xmstTools._setCookie("msttime1", s, xmstTools.getDomain(), a.toGMTString())
            }, o.prototype.trackPanelShow = function (e) {
                if (!(e.length < 2)) {
                    var n = e[0],
                        o = encodeURIComponent(e[1]),
                        r = new Object,
                        a = document.getElementById(n),
                        s = "(http|https)://item.mi.com/([0-9]+).html.*";
                    if (s = new RegExp(s), "undefined" != typeof a && null != a) try {
                        for (var c = a.getElementsByTagName("a"), u = "",
                                 m = xmstTools.getBaseParam(t) + xmstTools.getVars(t), d = 0,
                                 f = 0; f < c.length; f++) {
                            var l = c[f].getAttribute("data-stat-pid"),
                                p = c[f].getAttribute("data-stat-aid");
                            if (null != l && null != p) {
                                var g = c[f].getAttribute("href"),
                                    v = p + "+" + l;
                                if ("undefined" == typeof r[v]) {
                                    if (s.test(g)) {
                                        var h = s.exec(g);
                                        "object" == typeof h && h.length >= 3 && (g = h[2])
                                    }
                                    u += p + "+" + l + "+" + g + ";", d++, r[v] = 1, d % 20 == 0 && "" != u && (xmstTools.sendData(i + m + "&type=sp&spt=" + o + "&log=" + encodeURIComponent(u)), u = "")
                                }
                            }
                        }
                        "" != u && xmstTools.sendData(i + m + "&type=sp&spt=" + o + "&log=" + encodeURIComponent(u))
                    }
                    catch (x) {
                    }
                }
            }, r
        }
    }
]);

