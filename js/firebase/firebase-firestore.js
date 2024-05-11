! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase)
}(this, function (wm) {
    "use strict";
    try {
        ! function () {
            function t(t) {
                return t && "object" == typeof t && "default" in t ? t : {
                    default: t
                }
            }
            var e = t(wm),
                r = function (t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        })(t, e)
                };

            function n(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var a = function () {
                return (a = Object.assign || function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function y(t, s, a, u) {
                return new(a = a || Promise)(function (n, e) {
                    function r(t) {
                        try {
                            o(u.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(t) {
                        try {
                            o(u.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? n(t.value) : ((e = t.value) instanceof a ? e : new a(function (t) {
                            t(e)
                        })).then(r, i)
                    }
                    o((u = u.apply(t, s || [])).next())
                })
            }

            function g(n, r) {
                var i, o, s, a = {
                        label: 0,
                        sent: function () {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    },
                    t = {
                        next: e(0),
                        throw: e(1),
                        return: e(2)
                    };
                return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
                    return this
                }), t;

                function e(e) {
                    return function (t) {
                        return function (e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, (e = s ? [2 & e[0], s.value] : e)[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                e = r.call(n, a)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }

            function s(t, e) {
                for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
                return t
            }

            function i(t) {
                for (var e = [], n = 0, r = 0; r < t.length; r++) {
                    var i = t.charCodeAt(r);
                    i < 128 ? e[n++] = i : (i < 2048 ? e[n++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128) : e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128), e[n++] = 63 & i | 128)
                }
                return e
            }

            function u(t) {
                return function (t) {
                    t = i(t);
                    return o.encodeByteArray(t, !0)
                }(t).replace(/\./g, "")
            }
            var o = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray: function (t, e) {
                    if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
                        var o = t[i],
                            s = i + 1 < t.length,
                            a = s ? t[i + 1] : 0,
                            u = i + 2 < t.length,
                            c = u ? t[i + 2] : 0,
                            h = (15 & a) << 2 | c >> 6,
                            c = 63 & c;
                        u || (c = 64, s || (h = 64)), r.push(n[o >> 2], n[(3 & o) << 4 | a >> 4], n[h], n[c])
                    }
                    return r.join("")
                },
                encodeString: function (t, e) {
                    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(i(t), e)
                },
                decodeString: function (t, e) {
                    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function (t) {
                        for (var e = [], n = 0, r = 0; n < t.length;) {
                            var i, o, s, a = t[n++];
                            a < 128 ? e[r++] = String.fromCharCode(a) : 191 < a && a < 224 ? (o = t[n++], e[r++] = String.fromCharCode((31 & a) << 6 | 63 & o)) : 239 < a && a < 365 ? (i = ((7 & a) << 18 | (63 & (o = t[n++])) << 12 | (63 & (s = t[n++])) << 6 | 63 & t[n++]) - 65536, e[r++] = String.fromCharCode(55296 + (i >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & i))) : (o = t[n++], s = t[n++], e[r++] = String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & s))
                        }
                        return e.join("")
                    }(this.decodeStringToByteArray(t, e))
                },
                decodeStringToByteArray: function (t, e) {
                    this.init_();
                    for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) {
                        var o = n[t.charAt(i++)],
                            s = i < t.length ? n[t.charAt(i)] : 0,
                            a = ++i < t.length ? n[t.charAt(i)] : 64,
                            u = ++i < t.length ? n[t.charAt(i)] : 64;
                        if (++i, null == o || null == s || null == a || null == u) throw Error();
                        r.push(o << 2 | s >> 4), 64 !== a && (r.push(s << 4 & 240 | a >> 2), 64 !== u && r.push(a << 6 & 192 | u))
                    }
                    return r
                },
                init_: function () {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                        for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
                    }
                }
            };

            function h() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }

            function c() {
                return ! function () {
                    try {
                        return "[object process]" === Object.prototype.toString.call(global.process)
                    } catch (t) {
                        return
                    }
                }() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
            }
            var l, f = "FirebaseError",
                d = (n(p, l = Error), p);

            function p(t, e, n) {
                e = l.call(this, e) || this;
                return e.code = t, e.customData = n, e.name = f, Object.setPrototypeOf(e, p.prototype), Error.captureStackTrace && Error.captureStackTrace(e, m.prototype.create), e
            }
            var m = (v.prototype.create = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r, i = e[0] || {},
                    o = this.service + "/" + t,
                    t = this.errors[t],
                    t = t ? (r = i, t.replace(b, function (t, e) {
                        var n = r[e];
                        return null != n ? String(n) : "<" + e + "?>"
                    })) : "Error",
                    t = this.serviceName + ": " + t + " (" + o + ").";
                return new d(o, t, i)
            }, v);

            function v(t, e, n) {
                this.service = t, this.serviceName = e, this.errors = n
            }
            var w, b = /\{\$([^}]+)}/g;

            function E(t) {
                return t && t._delegate ? t._delegate : t
            }(k = w = w || {})[k.DEBUG = 0] = "DEBUG", k[k.VERBOSE = 1] = "VERBOSE", k[k.INFO = 2] = "INFO", k[k.WARN = 3] = "WARN", k[k.ERROR = 4] = "ERROR", k[k.SILENT = 5] = "SILENT";

            function T(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString(),
                        o = S[e];
                    if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                    console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n))
                }
            }
            var I = {
                    debug: w.DEBUG,
                    verbose: w.VERBOSE,
                    info: w.INFO,
                    warn: w.WARN,
                    error: w.ERROR,
                    silent: w.SILENT
                },
                _ = w.INFO,
                S = ((Ie = {})[w.DEBUG] = "log", Ie[w.VERBOSE] = "log", Ie[w.INFO] = "info", Ie[w.WARN] = "warn", Ie[w.ERROR] = "error", Ie),
                A = (Object.defineProperty(D.prototype, "logLevel", {
                    get: function () {
                        return this._logLevel
                    },
                    set: function (t) {
                        if (!(t in w)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
                        this._logLevel = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), D.prototype.setLogLevel = function (t) {
                    this._logLevel = "string" == typeof t ? I[t] : t
                }, Object.defineProperty(D.prototype, "logHandler", {
                    get: function () {
                        return this._logHandler
                    },
                    set: function (t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(D.prototype, "userLogHandler", {
                    get: function () {
                        return this._userLogHandler
                    },
                    set: function (t) {
                        this._userLogHandler = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), D.prototype.debug = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, w.DEBUG], t)), this._logHandler.apply(this, s([this, w.DEBUG], t))
                }, D.prototype.log = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, w.VERBOSE], t)), this._logHandler.apply(this, s([this, w.VERBOSE], t))
                }, D.prototype.info = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, w.INFO], t)), this._logHandler.apply(this, s([this, w.INFO], t))
                }, D.prototype.warn = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, w.WARN], t)), this._logHandler.apply(this, s([this, w.WARN], t))
                }, D.prototype.error = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, w.ERROR], t)), this._logHandler.apply(this, s([this, w.ERROR], t))
                }, D);

            function D(t) {
                this.name = t, this._logLevel = _, this._logHandler = T, this._userLogHandler = null
            }
            var N = function (t, e) {
                return (N = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            };

            function C(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function () {
                        return {
                            value: (t = t && r >= t.length ? void 0 : t) && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            var k, R = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                x = {},
                O = R || self;

            function L() {}

            function P(t) {
                var e = typeof t;
                return "array" == (e = "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null") || "object" == e && "number" == typeof t.length
            }

            function M(t) {
                var e = typeof t;
                return "object" == e && null != t || "function" == e
            }
            var F = "closure_uid_" + (1e9 * Math.random() >>> 0),
                V = 0;

            function U(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function q(e, n, t) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var t = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(t, r), e.apply(n, t)
                    }
                }
                return function () {
                    return e.apply(n, arguments)
                }
            }

            function B(t, e, n) {
                return (B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? U : q).apply(null, arguments)
            }

            function j(e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }

            function K(t, o) {
                function e() {}
                e.prototype = o.prototype, t.Z = o.prototype, t.prototype = new e, (t.prototype.constructor = t).Vb = function (t, e, n) {
                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    return o.prototype[e].apply(t, r)
                }
            }

            function G() {
                this.s = this.s, this.o = this.o
            }
            var Q = {};
            G.prototype.s = !1, G.prototype.na = function () {
                var t;
                !this.s && (this.s = !0, this.M(), 0) && (t = this, t = Object.prototype.hasOwnProperty.call(t, F) && t[F] || (t[F] = ++V), delete Q[t])
            }, G.prototype.M = function () {
                if (this.o)
                    for (; this.o.length;) this.o.shift()()
            };
            var H = Array.prototype.indexOf ? function (t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                } : function (t, e) {
                    if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                z = Array.prototype.forEach ? function (t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                } : function (t, e, n) {
                    for (var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                };

            function W() {
                return Array.prototype.concat.apply([], arguments)
            }

            function Y(t) {
                var e = t.length;
                if (0 < e) {
                    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                    return n
                }
                return []
            }

            function X(t) {
                return /^[\s\xa0]*$/.test(t)
            }
            var $, J = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            };

            function Z(t, e) {
                return -1 != t.indexOf(e)
            }

            function tt(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }
            t: {
                var et = O.navigator;
                if (et) {
                    et = et.userAgent;
                    if (et) {
                        $ = et;
                        break t
                    }
                }
                $ = ""
            }

            function nt(t, e, n) {
                for (var r in t) e.call(n, t[r], r, t)
            }

            function rt(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            }
            var it = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function ot(t) {
                for (var e, n, r = 1; r < arguments.length; r++) {
                    for (e in n = arguments[r]) t[e] = n[e];
                    for (var i = 0; i < it.length; i++) e = it[i], Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e])
                }
            }

            function st(t) {
                return st[" "](t), t
            }
            st[" "] = L;
            var at, ut = Z($, "Opera"),
                ct = Z($, "Trident") || Z($, "MSIE"),
                ht = Z($, "Edge"),
                lt = ht || ct,
                ft = Z($, "Gecko") && !(Z($.toLowerCase(), "webkit") && !Z($, "Edge")) && !(Z($, "Trident") || Z($, "MSIE")) && !Z($, "Edge"),
                dt = Z($.toLowerCase(), "webkit") && !Z($, "Edge");

            function pt() {
                var t = O.document;
                return t ? t.documentMode : void 0
            }
            t: {
                var yt = "",
                    gt = (gt = $, ft ? /rv:([^\);]+)(\)|;)/.exec(gt) : ht ? /Edge\/([\d\.]+)/.exec(gt) : ct ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(gt) : dt ? /WebKit\/(\S+)/.exec(gt) : ut ? /(?:Version)[ \/]?(\S+)/.exec(gt) : void 0);
                if (gt && (yt = gt ? gt[1] : ""), ct) {
                    gt = pt();
                    if (null != gt && gt > parseFloat(yt)) {
                        at = String(gt);
                        break t
                    }
                }
                at = yt
            }
            var mt = {};

            function vt() {
                return t = function () {
                    for (var t = 0, e = J(String(at)).split("."), n = J("9").split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++)
                        for (var o = e[i] || "", s = n[i] || ""; o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], (0 != o[0].length || 0 != s[0].length) && (t = tt(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || tt(0 == o[2].length, 0 == s[2].length) || tt(o[2], s[2]), o = o[3], s = s[3], 0 == t););
                    return 0 <= t
                }, e = mt, Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : e[9] = t(9);
                var t, e
            }
            var wt = O.document && ct && (pt() || parseInt(at, 10)) || void 0,
                bt = function () {
                    if (!O.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                    try {
                        O.addEventListener("test", L, e), O.removeEventListener("test", L, e)
                    } catch (t) {}
                    return t
                }();

            function Et(t, e) {
                this.type = t, this.g = this.target = e, this.defaultPrevented = !1
            }

            function Tt(t, e) {
                if (Et.call(this, t ? t.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, t) {
                    var n = this.type = t.type,
                        r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                    if (this.target = t.target || t.srcElement, this.g = e, e = t.relatedTarget) {
                        if (ft) {
                            t: {
                                try {
                                    st(e.nodeName);
                                    var i = !0;
                                    break t
                                } catch (t) {}
                                i = !1
                            }
                            i || (e = null)
                        }
                    } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                    this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : It[t.pointerType] || "", this.state = t.state, (this.i = t).defaultPrevented && Tt.Z.h.call(this)
                }
            }
            Et.prototype.h = function () {
                this.defaultPrevented = !0
            }, K(Tt, Et);
            var It = {
                2: "touch",
                3: "pen",
                4: "mouse"
            };
            Tt.prototype.h = function () {
                Tt.Z.h.call(this);
                var t = this.i;
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            };
            var _t = "closure_listenable_" + (1e6 * Math.random() | 0),
                St = 0;

            function At(t, e, n, r, i) {
                this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ia = i, this.key = ++St, this.ca = this.fa = !1
            }

            function Dt(t) {
                t.ca = !0, t.listener = null, t.proxy = null, t.src = null, t.ia = null
            }

            function Nt(t) {
                this.src = t, this.g = {}, this.h = 0
            }

            function Ct(t, e) {
                var n, r, i, o = e.type;
                o in t.g && (n = t.g[o], (i = 0 <= (r = H(n, e))) && Array.prototype.splice.call(n, r, 1), i && (Dt(e), 0 == t.g[o].length && (delete t.g[o], t.h--)))
            }

            function kt(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!o.ca && o.listener == e && o.capture == !!n && o.ia == r) return i
                }
                return -1
            }
            Nt.prototype.add = function (t, e, n, r, i) {
                var o = t.toString();
                (t = this.g[o]) || (t = this.g[o] = [], this.h++);
                var s = kt(t, e, r, i);
                return -1 < s ? (e = t[s], n || (e.fa = !1)) : ((e = new At(e, this.src, o, !!r, i)).fa = n, t.push(e)), e
            };
            var Rt = "closure_lm_" + (1e6 * Math.random() | 0),
                xt = {};

            function Ot(t, e, n, r, i) {
                if (r && r.once) return function t(e, n, r, i, o) {
                    if (Array.isArray(n)) {
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                        return null
                    }
                    r = qt(r);
                    return e && e[_t] ? e.O(n, r, M(i) ? !!i.capture : !!i, o) : Lt(e, n, r, !0, i, o)
                }(t, e, n, r, i);
                if (Array.isArray(e)) {
                    for (var o = 0; o < e.length; o++) Ot(t, e[o], n, r, i);
                    return null
                }
                return n = qt(n), t && t[_t] ? t.N(e, n, M(r) ? !!r.capture : !!r, i) : Lt(t, e, n, !1, r, i)
            }

            function Lt(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var s, a = M(i) ? !!i.capture : !!i,
                    u = Vt(t);
                if (u || (t[Rt] = u = new Nt(t)), (n = u.add(e, n, r, a, o)).proxy) return n;
                if (s = Ft, (n.proxy = r = function t(e) {
                        return s.call(t.src, t.listener, e)
                    }).src = t, r.listener = n, t.addEventListener) void 0 === (i = !bt ? a : i) && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(Mt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function Pt(t) {
                var e, n, r;
                "number" != typeof t && t && !t.ca && ((e = t.src) && e[_t] ? Ct(e.i, t) : (n = t.type, r = t.proxy, e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Mt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Vt(e)) ? (Ct(n, t), 0 == n.h && (n.src = null, e[Rt] = null)) : Dt(t)))
            }

            function Mt(t) {
                return t in xt ? xt[t] : xt[t] = "on" + t
            }

            function Ft(t, e) {
                var n, r;
                return t = !!t.ca || (e = new Tt(e, this), n = t.listener, r = t.ia || t.src, t.fa && Pt(t), n.call(r, e))
            }

            function Vt(t) {
                return (t = t[Rt]) instanceof Nt ? t : null
            }
            var Ut = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function qt(e) {
                return "function" == typeof e ? e : (e[Ut] || (e[Ut] = function (t) {
                    return e.handleEvent(t)
                }), e[Ut])
            }

            function Bt() {
                G.call(this), this.i = new Nt(this), (this.P = this).I = null
            }

            function jt(t, e) {
                var n, r = t.I;
                if (r)
                    for (n = []; r; r = r.I) n.push(r);
                if (t = t.P, r = e.type || e, "string" == typeof e ? e = new Et(e, t) : e instanceof Et ? e.target = e.target || t : (s = e, ot(e = new Et(r, t), s)), s = !0, n)
                    for (var i = n.length - 1; 0 <= i; i--) var o = e.g = n[i],
                        s = Kt(o, r, !0, e) && s;
                if (s = Kt(o = e.g = t, r, !0, e) && s, s = Kt(o, r, !1, e) && s, n)
                    for (i = 0; i < n.length; i++) s = Kt(o = e.g = n[i], r, !1, e) && s
            }

            function Kt(t, e, n, r) {
                if (!(e = t.i.g[String(e)])) return !0;
                e = e.concat();
                for (var i = !0, o = 0; o < e.length; ++o) {
                    var s, a, u = e[o];
                    u && !u.ca && u.capture == n && (s = u.listener, a = u.ia || u.src, u.fa && Ct(t.i, u), i = !1 !== s.call(a, r) && i)
                }
                return i && !r.defaultPrevented
            }
            K(Bt, G), Bt.prototype[_t] = !0, Bt.prototype.removeEventListener = function (t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (Array.isArray(n))
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                    else i = M(i) ? !!i.capture : !!i, r = qt(r), e && e[_t] ? (e = e.i, (n = String(n).toString()) in e.g && -1 < (r = kt(s = e.g[n], r, i, o)) && (Dt(s[r]), Array.prototype.splice.call(s, r, 1), 0 == s.length && (delete e.g[n], e.h--))) : (e = e && Vt(e)) && (n = e.g[n.toString()], (r = (e = -1) < (e = n ? kt(n, r, i, o) : e) ? n[e] : null) && Pt(r))
                }(this, t, e, n, r)
            }, Bt.prototype.M = function () {
                if (Bt.Z.M.call(this), this.i) {
                    var t, e = this.i;
                    for (t in e.g) {
                        for (var n = e.g[t], r = 0; r < n.length; r++) Dt(n[r]);
                        delete e.g[t], e.h--
                    }
                }
                this.I = null
            }, Bt.prototype.N = function (t, e, n, r) {
                return this.i.add(String(t), e, !1, n, r)
            }, Bt.prototype.O = function (t, e, n, r) {
                return this.i.add(String(t), e, !0, n, r)
            };
            var Gt = O.JSON.stringify;
            var Qt = (Ht.prototype.add = function (t, e) {
                var n = zt.get();
                n.set(t, e), this.h ? this.h.next = n : this.g = n, this.h = n
            }, Ht);

            function Ht() {
                this.h = this.g = null
            }
            var zt = (Wt.prototype.get = function () {
                var t;
                return 0 < this.h ? (this.h--, t = this.g, this.g = t.next, t.next = null) : t = this.i(), t
            }, new Wt(function () {
                return new Xt
            }, function (t) {
                return t.reset()
            }));

            function Wt(t, e) {
                this.i = t, this.j = e, this.h = 0, this.g = null
            }
            var Yt, Xt = ($t.prototype.set = function (t, e) {
                this.h = t, this.g = e, this.next = null
            }, $t.prototype.reset = function () {
                this.next = this.g = this.h = null
            }, $t);

            function $t() {
                this.next = this.g = this.h = null
            }

            function Jt(t, e) {
                var n;
                Yt || (n = O.Promise.resolve(void 0), Yt = function () {
                    n.then(ee)
                }), Zt || (Yt(), Zt = !0), te.add(t, e)
            }
            var Zt = !1,
                te = new Qt;

            function ee() {
                for (var t; e = t = void 0, e = null, (t = te).g && (e = t.g, t.g = t.g.next, t.g || (t.h = null), e.next = null), t = e;) {
                    try {
                        t.h.call(t.g)
                    } catch (t) {
                        ! function (t) {
                            O.setTimeout(function () {
                                throw t
                            }, 0)
                        }(t)
                    }
                    var e = zt;
                    e.j(t), e.h < 100 && (e.h++, t.next = e.g, e.g = t)
                }
                Zt = !1
            }

            function ne(t, e) {
                Bt.call(this), this.h = t || 1, this.g = e || O, this.j = B(this.kb, this), this.l = Date.now()
            }

            function re(t) {
                t.da = !1, t.S && (t.g.clearTimeout(t.S), t.S = null)
            }

            function ie(t, e, n) {
                if ("function" == typeof t) n && (t = B(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = B(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : O.setTimeout(t, e || 0)
            }
            K(ne, Bt), (k = ne.prototype).da = !1, k.S = null, k.kb = function () {
                var t;
                this.da && (0 < (t = Date.now() - this.l) && t < .8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - t) : (this.S && (this.g.clearTimeout(this.S), this.S = null), jt(this, "tick"), this.da && (re(this), this.start())))
            }, k.start = function () {
                this.da = !0, this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now())
            }, k.M = function () {
                ne.Z.M.call(this), re(this), delete this.g
            };
            var oe, se = (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                N(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }(ae, oe = G), ae.prototype.l = function (t) {
                this.h = arguments, this.g ? this.i = !0 : function t(e) {
                    e.g = ie(function () {
                        e.g = null, e.i && (e.i = !1, t(e))
                    }, e.j);
                    var n = e.h;
                    e.h = null, e.m.apply(null, n)
                }(this)
            }, ae.prototype.M = function () {
                oe.prototype.M.call(this), this.g && (O.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null)
            }, ae);

            function ae(t, e) {
                var n = oe.call(this) || this;
                return n.m = t, n.j = e, n.h = null, n.i = !1, n.g = null, n
            }

            function ue(t) {
                G.call(this), this.h = t, this.g = {}
            }
            K(ue, G);
            var ce = [];

            function he(t, e, n, r) {
                Array.isArray(n) || (n && (ce[0] = n.toString()), n = ce);
                for (var i = 0; i < n.length; i++) {
                    var o = Ot(e, n[i], r || t.handleEvent, !1, t.h || t);
                    if (!o) break;
                    t.g[o.key] = o
                }
            }

            function le(t) {
                nt(t.g, function (t, e) {
                    this.g.hasOwnProperty(e) && Pt(t)
                }, t), t.g = {}
            }

            function fe() {
                this.g = !0
            }

            function de(t, e, n, r) {
                t.info(function () {
                    return "XMLHTTP TEXT (" + e + "): " + function (t, e) {
                        if (!t.g) return e;
                        if (!e) return null;
                        try {
                            var n = JSON.parse(e);
                            if (n)
                                for (t = 0; t < n.length; t++)
                                    if (Array.isArray(n[t])) {
                                        var r = n[t];
                                        if (!(r.length < 2)) {
                                            var i = r[1];
                                            if (Array.isArray(i) && !(i.length < 1)) {
                                                var o = i[0];
                                                if ("noop" != o && "stop" != o && "close" != o)
                                                    for (var s = 1; s < i.length; s++) i[s] = ""
                                            }
                                        }
                                    } return Gt(n)
                        } catch (t) {
                            return e
                        }
                    }(t, n) + (r ? " " + r : "")
                })
            }
            ue.prototype.M = function () {
                ue.Z.M.call(this), le(this)
            }, ue.prototype.handleEvent = function () {
                throw Error("EventHandler.handleEvent not implemented")
            }, fe.prototype.Aa = function () {
                this.g = !1
            }, fe.prototype.info = function () {};
            var pe = {},
                ye = null;

            function ge() {
                return ye = ye || new Bt
            }

            function me(t) {
                Et.call(this, pe.Ma, t)
            }

            function ve() {
                var t = ge();
                jt(t, new me(t))
            }

            function we(t, e) {
                Et.call(this, pe.STAT_EVENT, t), this.stat = e
            }

            function be(t) {
                var e = ge();
                jt(e, new we(e, t))
            }

            function Ee(t, e) {
                Et.call(this, pe.Na, t), this.size = e
            }

            function Te(t, e) {
                if ("function" != typeof t) throw Error("Fn must not be null and must be a function");
                return O.setTimeout(function () {
                    t()
                }, e)
            }
            pe.Ma = "serverreachability", K(me, Et), pe.STAT_EVENT = "statevent", K(we, Et), pe.Na = "timingevent", K(Ee, Et);
            var Ie = {
                    NO_ERROR: 0,
                    lb: 1,
                    yb: 2,
                    xb: 3,
                    sb: 4,
                    wb: 5,
                    zb: 6,
                    Ja: 7,
                    TIMEOUT: 8,
                    Cb: 9
                },
                R = {
                    qb: "complete",
                    Mb: "success",
                    Ka: "error",
                    Ja: "abort",
                    Eb: "ready",
                    Fb: "readystatechange",
                    TIMEOUT: "timeout",
                    Ab: "incrementaldata",
                    Db: "progress",
                    tb: "downloadprogress",
                    Ub: "uploadprogress"
                };

            function _e() {}

            function Se(t) {
                return t.h || (t.h = t.i())
            }

            function Ae() {}
            _e.prototype.h = null;
            Qt = {
                OPEN: "a",
                pb: "b",
                Ka: "c",
                Bb: "d"
            };

            function De() {
                Et.call(this, "d")
            }

            function Ne() {
                Et.call(this, "c")
            }

            function Ce() {}

            function ke(t, e, n, r) {
                this.l = t, this.j = e, this.m = n, this.X = r || 1, this.V = new ue(this), this.P = Oe, this.W = new ne(t = lt ? 125 : void 0), this.H = null, this.i = !1, this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null, this.D = [], this.g = null, this.C = 0, this.o = this.u = null, this.N = -1, this.I = !1, this.O = 0, this.L = null, this.aa = this.J = this.$ = this.U = !1, this.h = new Re
            }

            function Re() {
                this.i = null, this.g = "", this.h = !1
            }
            K(De, Et), K(Ne, Et), K(Ce, _e), Ce.prototype.g = function () {
                return new XMLHttpRequest
            }, Ce.prototype.i = function () {
                return {}
            };
            var xe = new Ce,
                Oe = 45e3,
                Le = {},
                Pe = {};

            function Me(t, e, n) {
                t.K = 1, t.v = on(Je(e)), t.s = n, t.U = !0, Fe(t, null)
            }

            function Fe(t, e) {
                t.F = Date.now(), qe(t), t.A = Je(t.v);
                var s, a, u, c, h, l, n = t.A,
                    r = t.X;
                Array.isArray(r) || (r = [String(r)]), vn(n.h, "t", r), t.C = 0, n = t.l.H, t.h = new Re, t.g = wr(t.l, n ? e : null, !t.s), 0 < t.O && (t.L = new se(B(t.Ia, t, t.g), t.O)), he(t.V, t.g, "readystatechange", t.gb), e = t.H ? rt(t.H) : {}, t.s ? (t.u || (t.u = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.g.ea(t.A, t.u, t.s, e)) : (t.u = "GET", t.g.ea(t.A, t.u, null, e)), ve(), s = t.j, a = t.u, u = t.A, c = t.m, h = t.X, l = t.s, s.info(function () {
                    if (s.g)
                        if (l)
                            for (var t = "", e = l.split("&"), n = 0; n < e.length; n++) {
                                var r, i, o = e[n].split("=");
                                1 < o.length && (r = o[0], o = o[1], t = 2 <= (i = r.split("_")).length && "type" == i[1] ? t + (r + "=") + o + "&" : t + (r + "=redacted&"))
                            } else t = null;
                        else t = l;
                    return "XMLHTTP REQ (" + c + ") [attempt " + h + "]: " + a + "\n" + u + "\n" + t
                })
            }

            function Ve(t) {
                return t.g && ("GET" == t.u && 2 != t.K && t.l.Ba)
            }

            function Ue(t, e, n) {
                for (var r, i, o, s, a, u = !0; !t.I && t.C < n.length;) {
                    if (o = n, a = s = void 0, s = (i = t).C, (r = -1 == (a = o.indexOf("\n", s)) ? Pe : (s = Number(o.substring(s, a)), isNaN(s) ? Le : (a += 1) + s > o.length ? Pe : (o = o.substr(a, s), i.C = a + s, o))) == Pe) {
                        4 == e && (t.o = 4, be(14), u = !1), de(t.j, t.m, null, "[Incomplete Response]");
                        break
                    }
                    if (r == Le) {
                        t.o = 4, be(15), de(t.j, t.m, n, "[Invalid Chunk]"), u = !1;
                        break
                    }
                    de(t.j, t.m, r, null), Qe(t, r)
                }
                Ve(t) && r != Pe && r != Le && (t.h.g = "", t.C = 0), 4 != e || 0 != n.length || t.h.h || (t.o = 1, be(16), u = !1), t.i = t.i && u, u ? 0 < n.length && !t.aa && (t.aa = !0, (e = t.l).g == t && e.$ && !e.L && (e.h.info("Great, no buffering proxy detected. Bytes received: " + n.length), lr(e), e.L = !0, be(11))) : (de(t.j, t.m, n, "[Invalid Chunked Response]"), Ge(t), Ke(t))
            }

            function qe(t) {
                t.Y = Date.now() + t.P, Be(t, t.P)
            }

            function Be(t, e) {
                if (null != t.B) throw Error("WatchDog timer not null");
                t.B = Te(B(t.eb, t), e)
            }

            function je(t) {
                t.B && (O.clearTimeout(t.B), t.B = null)
            }

            function Ke(t) {
                0 == t.l.G || t.I || pr(t.l, t)
            }

            function Ge(t) {
                je(t);
                var e = t.L;
                e && "function" == typeof e.na && e.na(), t.L = null, re(t.W), le(t.V), t.g && (e = t.g, t.g = null, e.abort(), e.na())
            }

            function Qe(t, e) {
                try {
                    var n = t.l;
                    if (0 != n.G && (n.g == t || An(n.i, t)))
                        if (n.I = t.N, !t.J && An(n.i, t) && 3 == n.G) {
                            try {
                                var r = n.Ca.g.parse(e)
                            } catch (y) {
                                r = null
                            }
                            if (Array.isArray(r) && 3 == r.length) {
                                var i = r;
                                if (0 == i[0]) {
                                    t: if (!n.u) {
                                        if (n.g) {
                                            if (!(n.g.F + 3e3 < t.F)) break t;
                                            dr(n), nr(n)
                                        }
                                        hr(n), be(18)
                                    }
                                }
                                else n.ta = i[1], 0 < n.ta - n.U && i[2] < 37500 && n.N && 0 == n.A && !n.v && (n.v = Te(B(n.ab, n), 6e3));
                                if (Sn(n.i) <= 1 && n.ka) {
                                    try {
                                        n.ka()
                                    } catch (y) {}
                                    n.ka = void 0
                                }
                            } else gr(n, 11)
                        } else if (!t.J && n.g != t || dr(n), !X(e))
                        for (i = n.Ca.g.parse(e), e = 0; e < i.length; e++) {
                            var o, s, a, u, c, h, l, f, d, p, y = i[e];
                            n.U = y[0], y = y[1], 2 == n.G ? "c" == y[0] ? (n.J = y[1], n.la = y[2], null != (o = y[3]) && (n.ma = o, n.h.info("VER=" + n.ma)), null != (s = y[4]) && (n.za = s, n.h.info("SVER=" + n.za)), null != (a = y[5]) && "number" == typeof a && 0 < a && (r = 1.5 * a, n.K = r, n.h.info("backChannelRequestTimeoutMs_=" + r)), r = n, (u = t.g) && (!(c = u.g ? u.g.getResponseHeader("X-Client-Wire-Protocol") : null) || !(h = r.i).g && (Z(c, "spdy") || Z(c, "quic") || Z(c, "h2")) && (h.j = h.l, h.g = new Set, h.h && (Dn(h, h.h), h.h = null)), !r.D || (l = u.g ? u.g.getResponseHeader("X-HTTP-Session-Id") : null) && (r.sa = l, rn(r.F, r.D, l))), n.G = 3, n.j && n.j.xa(), n.$ && (n.O = Date.now() - t.F, n.h.info("Handshake RTT: " + n.O + "ms")), f = t, (r = n).oa = vr(r, r.H ? r.la : null, r.W), f.J ? (Nn(r.i, f), d = f, (p = r.K) && d.setTimeout(p), d.B && (je(d), qe(d)), r.g = f) : cr(r), 0 < n.l.length && or(n)) : "stop" != y[0] && "close" != y[0] || gr(n, 7) : 3 == n.G && ("stop" == y[0] || "close" == y[0] ? "stop" == y[0] ? gr(n, 7) : er(n) : "noop" != y[0] && n.j && n.j.wa(y), n.A = 0)
                        }
                    ve()
                } catch (y) {}
            }

            function He(t, e) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (P(t) || "string" == typeof t) z(t, e, void 0);
                else {
                    if (t.T && "function" == typeof t.T) var n = t.T();
                    else if (t.R && "function" == typeof t.R) n = void 0;
                    else if (P(t) || "string" == typeof t)
                        for (var n = [], r = t.length, i = 0; i < r; i++) n.push(i);
                    else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    for (var i = (r = function (t) {
                            if (t.R && "function" == typeof t.R) return t.R();
                            if ("string" == typeof t) return t.split("");
                            if (P(t)) {
                                for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                                return e
                            }
                            for (r in e = [], n = 0, t) e[n++] = t[r];
                            return e
                        }(t)).length, o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                }
            }

            function ze(t, e) {
                this.h = {}, this.g = [], this.i = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else if (t)
                    if (t instanceof ze)
                        for (n = t.T(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                    else
                        for (r in t) this.set(r, t[r])
            }

            function We(t) {
                if (t.i != t.g.length) {
                    for (var e = 0, n = 0; e < t.g.length;) {
                        var r = t.g[e];
                        Ye(t.h, r) && (t.g[n++] = r), e++
                    }
                    t.g.length = n
                }
                if (t.i != t.g.length) {
                    for (var i = {}, n = e = 0; e < t.g.length;) Ye(i, r = t.g[e]) || (i[t.g[n++] = r] = 1), e++;
                    t.g.length = n
                }
            }

            function Ye(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(k = ke.prototype).setTimeout = function (t) {
                this.P = t
            }, k.gb = function (t) {
                t = t.target;
                var e = this.L;
                e && 3 == Xn(t) ? e.l() : this.Ia(t)
            }, k.Ia = function (t) {
                try {
                    if (t == this.g) t: {
                        var e = Xn(this.g),
                            n = this.g.Da();this.g.ba();
                        if (!(e < 3) && (3 != e || lt || this.g && (this.h.h || this.g.ga() || $n(this.g)))) {
                            this.I || 4 != e || 7 == n || ve(), je(this);
                            var r = this.g.ba();
                            this.N = r;
                            e: if (Ve(this)) {
                                var i = $n(this.g);
                                t = "";
                                var o = i.length,
                                    s = 4 == Xn(this.g);
                                if (!this.h.i) {
                                    if ("undefined" == typeof TextDecoder) {
                                        Ge(this), Ke(this);
                                        var a = "";
                                        break e
                                    }
                                    this.h.i = new O.TextDecoder
                                }
                                for (n = 0; n < o; n++) this.h.h = !0, t += this.h.i.decode(i[n], {
                                    stream: s && n == o - 1
                                });
                                i.splice(0, o), this.h.g += t, this.C = 0, a = this.h.g
                            } else a = this.g.ga();
                            if (this.i = 200 == r, l = this.j, f = this.u, d = this.A, p = this.m, y = this.X, g = e, m = r, l.info(function () {
                                    return "XMLHTTP RESP (" + p + ") [ attempt " + y + "]: " + f + "\n" + d + "\n" + g + " " + m
                                }), this.i) {
                                if (this.$ && !this.J) {
                                    e: {
                                        if (this.g) {
                                            var u, c = this.g;
                                            if ((u = c.g ? c.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !X(u)) {
                                                var h = u;
                                                break e
                                            }
                                        }
                                        h = null
                                    }
                                    if (!(r = h)) {
                                        this.i = !1, this.o = 3, be(12), Ge(this), Ke(this);
                                        break t
                                    }
                                    de(this.j, this.m, r, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.J = !0,
                                    Qe(this, r)
                                }
                                this.U ? (Ue(this, e, a), lt && this.i && 3 == e && (he(this.V, this.W, "tick", this.fb), this.W.start())) : (de(this.j, this.m, a, null), Qe(this, a)), 4 == e && Ge(this), this.i && !this.I && (4 == e ? pr(this.l, this) : (this.i = !1, qe(this)))
                            } else 400 == r && 0 < a.indexOf("Unknown SID") ? (this.o = 3, be(12)) : (this.o = 0, be(13)), Ge(this), Ke(this)
                        }
                    }
                } catch (e) {}
                var l, f, d, p, y, g, m
            }, k.fb = function () {
                var t, e;
                this.g && (t = Xn(this.g), e = this.g.ga(), this.C < e.length && (je(this), Ue(this, t, e), this.i && 4 != t && qe(this)))
            }, k.cancel = function () {
                this.I = !0, Ge(this)
            }, k.eb = function () {
                this.B = null;
                var t, e, n = Date.now();
                0 <= n - this.Y ? (t = this.j, e = this.A, t.info(function () {
                    return "TIMEOUT: " + e
                }), 2 != this.K && (ve(), be(17)), Ge(this), this.o = 2, Ke(this)) : Be(this, this.Y - n)
            }, (k = ze.prototype).R = function () {
                We(this);
                for (var t = [], e = 0; e < this.g.length; e++) t.push(this.h[this.g[e]]);
                return t
            }, k.T = function () {
                return We(this), this.g.concat()
            }, k.get = function (t, e) {
                return Ye(this.h, t) ? this.h[t] : e
            }, k.set = function (t, e) {
                Ye(this.h, t) || (this.i++, this.g.push(t)), this.h[t] = e
            }, k.forEach = function (t, e) {
                for (var n = this.T(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            };
            var Xe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function $e(t, e) {
                var n;
                this.i = this.s = this.j = "", this.m = null, this.o = this.l = "", this.g = !1, t instanceof $e ? (this.g = void 0 !== e ? e : t.g, Ze(this, t.j), this.s = t.s, tn(this, t.i), en(this, t.m), this.l = t.l, e = t.h, (n = new pn).i = e.i, e.g && (n.g = new ze(e.g), n.h = e.h), nn(this, n), this.o = t.o) : t && (n = String(t).match(Xe)) ? (this.g = !!e, Ze(this, n[1] || "", !0), this.s = sn(n[2] || ""), tn(this, n[3] || "", !0), en(this, n[4]), this.l = sn(n[5] || "", !0), nn(this, n[6] || "", !0), this.o = sn(n[7] || "")) : (this.g = !!e, this.h = new pn(null, this.g))
            }

            function Je(t) {
                return new $e(t)
            }

            function Ze(t, e, n) {
                t.j = n ? sn(e, !0) : e, t.j && (t.j = t.j.replace(/:$/, ""))
            }

            function tn(t, e, n) {
                t.i = n ? sn(e, !0) : e
            }

            function en(t, e) {
                if (e) {
                    if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                    t.m = e
                } else t.m = null
            }

            function nn(t, e, n) {
                var r, i;
                e instanceof pn ? (t.h = e, r = t.h, (i = t.g) && !r.j && (yn(r), r.i = null, r.g.forEach(function (t, e) {
                    var n = e.toLowerCase();
                    e != n && (gn(this, e), vn(this, n, t))
                }, r)), r.j = i) : (n || (e = an(e, fn)), t.h = new pn(e, t.g))
            }

            function rn(t, e, n) {
                t.h.set(e, n)
            }

            function on(t) {
                return rn(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), t
            }

            function sn(t, e) {
                return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
            }

            function an(t, e, n) {
                return "string" == typeof t ? (t = encodeURI(t).replace(e, un), t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t) : null
            }

            function un(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }
            $e.prototype.toString = function () {
                var t = [],
                    e = this.j;
                e && t.push(an(e, cn, !0), ":");
                var n = this.i;
                return !n && "file" != e || (t.push("//"), (e = this.s) && t.push(an(e, cn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.m) && t.push(":", String(n))), (n = this.l) && (this.i && "/" != n.charAt(0) && t.push("/"), t.push(an(n, "/" == n.charAt(0) ? ln : hn, !0))), (n = this.h.toString()) && t.push("?", n), (n = this.o) && t.push("#", an(n, dn)), t.join("")
            };
            var cn = /[#\/\?@]/g,
                hn = /[#\?:]/g,
                ln = /[#\?]/g,
                fn = /[#\?@]/g,
                dn = /#/g;

            function pn(t, e) {
                this.h = this.g = null, this.i = t || null, this.j = !!e
            }

            function yn(n) {
                n.g || (n.g = new ze, n.h = 0, n.i && function (t, e) {
                    if (t) {
                        t = t.split("&");
                        for (var n = 0; n < t.length; n++) {
                            var r, i = t[n].indexOf("="),
                                o = null;
                            0 <= i ? (r = t[n].substring(0, i), o = t[n].substring(i + 1)) : r = t[n], e(r, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "")
                        }
                    }
                }(n.i, function (t, e) {
                    n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                }))
            }

            function gn(t, e) {
                yn(t), e = wn(t, e), Ye(t.g.h, e) && (t.i = null, t.h -= t.g.get(e).length, Ye((t = t.g).h, e) && (delete t.h[e], t.i--, t.g.length > 2 * t.i && We(t)))
            }

            function mn(t, e) {
                return yn(t), e = wn(t, e), Ye(t.g.h, e)
            }

            function vn(t, e, n) {
                gn(t, e), 0 < n.length && (t.i = null, t.g.set(wn(t, e), Y(n)), t.h += n.length)
            }

            function wn(t, e) {
                return e = String(e), e = t.j ? e.toLowerCase() : e
            }(k = pn.prototype).add = function (t, e) {
                yn(this), this.i = null, t = wn(this, t);
                var n = this.g.get(t);
                return n || this.g.set(t, n = []), n.push(e), this.h += 1, this
            }, k.forEach = function (n, r) {
                yn(this), this.g.forEach(function (t, e) {
                    z(t, function (t) {
                        n.call(r, t, e, this)
                    }, this)
                }, this)
            }, k.T = function () {
                yn(this);
                for (var t = this.g.R(), e = this.g.T(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, k.R = function (t) {
                yn(this);
                var e = [];
                if ("string" == typeof t) mn(this, t) && (e = W(e, this.g.get(wn(this, t))));
                else {
                    t = this.g.R();
                    for (var n = 0; n < t.length; n++) e = W(e, t[n])
                }
                return e
            }, k.set = function (t, e) {
                return yn(this), this.i = null, mn(this, t = wn(this, t)) && (this.h -= this.g.get(t).length), this.g.set(t, [e]), this.h += 1, this
            }, k.get = function (t, e) {
                return t && 0 < (t = this.R(t)).length ? String(t[0]) : e
            }, k.toString = function () {
                if (this.i) return this.i;
                if (!this.g) return "";
                for (var t = [], e = this.g.T(), n = 0; n < e.length; n++)
                    for (var r = e[n], i = encodeURIComponent(String(r)), r = this.R(r), o = 0; o < r.length; o++) {
                        var s = i;
                        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s)
                    }
                return this.i = t.join("&")
            };
            var bn = function (t, e) {
                this.h = t, this.g = e
            };

            function En(t) {
                this.l = t || In, t = O.PerformanceNavigationTiming ? 0 < (t = O.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(O.g && O.g.Ea && O.g.Ea() && O.g.Ea().Zb), this.j = t ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []
            }
            var Tn, In = 10;

            function _n(t) {
                return t.h || t.g && t.g.size >= t.j
            }

            function Sn(t) {
                return t.h ? 1 : t.g ? t.g.size : 0
            }

            function An(t, e) {
                return t.h ? t.h == e : t.g && t.g.has(e)
            }

            function Dn(t, e) {
                t.g ? t.g.add(e) : t.h = e
            }

            function Nn(t, e) {
                t.h && t.h == e ? t.h = null : t.g && t.g.has(e) && t.g.delete(e)
            }

            function Cn(t) {
                var e, n;
                if (null != t.h) return t.i.concat(t.h.D);
                if (null == t.g || 0 === t.g.size) return Y(t.i);
                var r = t.i;
                try {
                    for (var i = C(t.g.values()), o = i.next(); !o.done; o = i.next()) var s = o.value,
                        r = r.concat(s.D)
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }

            function kn() {}

            function Rn() {
                this.g = new kn
            }

            function xn(t, e, n, r, i) {
                try {
                    e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                } catch (t) {}
            }

            function On(t) {
                this.l = t.$b || null, this.j = t.ib || !1
            }

            function Ln(t, e) {
                Bt.call(this), this.D = t, this.u = e, this.m = void 0, this.readyState = Pn, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers, this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null
            }
            En.prototype.cancel = function () {
                var e, t;
                if (this.i = Cn(this), this.h) this.h.cancel(), this.h = null;
                else if (this.g && 0 !== this.g.size) {
                    try {
                        for (var n = C(this.g.values()), r = n.next(); !r.done; r = n.next()) r.value.cancel()
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = n.return) && t.call(n)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    this.g.clear()
                }
            }, kn.prototype.stringify = function (t) {
                return O.JSON.stringify(t, void 0)
            }, kn.prototype.parse = function (t) {
                return O.JSON.parse(t, void 0)
            }, K(On, _e), On.prototype.g = function () {
                return new Ln(this.l, this.j)
            }, On.prototype.i = (Tn = {}, function () {
                return Tn
            }), K(Ln, Bt);
            var Pn = 0;

            function Mn(t) {
                t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))
            }

            function Fn(t) {
                t.readyState = 4, t.l = null, t.j = null, t.A = null, Vn(t)
            }

            function Vn(t) {
                t.onreadystatechange && t.onreadystatechange.call(t)
            }(k = Ln.prototype).open = function (t, e) {
                if (this.readyState != Pn) throw this.abort(), Error("Error reopening a connection");
                this.C = t, this.B = e, this.readyState = 1, Vn(this)
            }, k.send = function (t) {
                if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                this.g = !0;
                var e = {
                    headers: this.v,
                    method: this.C,
                    credentials: this.m,
                    cache: void 0
                };
                t && (e.body = t), (this.D || O).fetch(new Request(this.B, e)).then(this.Va.bind(this), this.ha.bind(this))
            }, k.abort = function () {
                this.response = this.responseText = "", this.v = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted."), 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, Fn(this)), this.readyState = Pn
            }, k.Va = function (t) {
                if (this.g && (this.l = t, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = t.headers, this.readyState = 2, Vn(this)), this.g && (this.readyState = 3, Vn(this), this.g)))
                    if ("arraybuffer" === this.responseType) t.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
                    else if (void 0 !== O.ReadableStream && "body" in t) {
                    if (this.j = t.body.getReader(), this.u) {
                        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else this.response = this.responseText = "", this.A = new TextDecoder;
                    Mn(this)
                } else t.text().then(this.Ua.bind(this), this.ha.bind(this))
            }, k.Sa = function (t) {
                var e;
                this.g && (this.u && t.value ? this.response.push(t.value) : this.u || (e = t.value || new Uint8Array(0), (e = this.A.decode(e, {
                    stream: !t.done
                })) && (this.response = this.responseText += e)), (t.done ? Fn : Vn)(this), 3 == this.readyState && Mn(this))
            }, k.Ua = function (t) {
                this.g && (this.response = this.responseText = t, Fn(this))
            }, k.Ta = function (t) {
                this.g && (this.response = t, Fn(this))
            }, k.ha = function () {
                this.g && Fn(this)
            }, k.setRequestHeader = function (t, e) {
                this.v.append(t, e)
            }, k.getResponseHeader = function (t) {
                return this.h && this.h.get(t.toLowerCase()) || ""
            }, k.getAllResponseHeaders = function () {
                if (!this.h) return "";
                for (var t = [], e = this.h.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
                return t.join("\r\n")
            }, Object.defineProperty(Ln.prototype, "withCredentials", {
                get: function () {
                    return "include" === this.m
                },
                set: function (t) {
                    this.m = t ? "include" : "same-origin"
                }
            });
            var Un = O.JSON.parse;

            function qn(t) {
                Bt.call(this), this.headers = new ze, this.u = t || null, this.h = !1, this.C = this.g = null, this.H = "", this.m = 0, this.j = "", this.l = this.F = this.v = this.D = !1, this.B = 0, this.A = null, this.J = Bn, this.K = this.L = !1
            }
            K(qn, Bt);
            var Bn = "",
                jn = /^https?$/i,
                Kn = ["POST", "PUT"];

            function Gn(t) {
                return "content-type" == t.toLowerCase()
            }

            function Qn(t, e) {
                t.h = !1, t.g && (t.l = !0, t.g.abort(), t.l = !1), t.j = e, t.m = 5, Hn(t), Wn(t)
            }

            function Hn(t) {
                t.D || (t.D = !0, jt(t, "complete"), jt(t, "error"))
            }

            function zn(t) {
                if (t.h && void 0 !== x && (!t.C[1] || 4 != Xn(t) || 2 != t.ba()))
                    if (t.v && 4 == Xn(t)) ie(t.Fa, 0, t);
                    else if (jt(t, "readystatechange"), 4 == Xn(t)) {
                    t.h = !1;
                    try {
                        var e, n, r, i, o = t.ba();
                        t: switch (o) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var s = !0;
                                break t;
                            default:
                                s = !1
                        }
                        if ((e = s) || ((n = 0 === o) && (!(i = String(t.H).match(Xe)[1] || null) && O.self && O.self.location && (i = (r = O.self.location.protocol).substr(0, r.length - 1)), n = !jn.test(i ? i.toLowerCase() : "")), e = n), e) jt(t, "complete"), jt(t, "success");
                        else {
                            t.m = 6;
                            try {
                                var a = 2 < Xn(t) ? t.g.statusText : ""
                            } catch (t) {
                                a = ""
                            }
                            t.j = a + " [" + t.ba() + "]", Hn(t)
                        }
                    } finally {
                        Wn(t)
                    }
                }
            }

            function Wn(t, e) {
                if (t.g) {
                    Yn(t);
                    var n = t.g,
                        r = t.C[0] ? L : null;
                    t.g = null, t.C = null, e || jt(t, "ready");
                    try {
                        n.onreadystatechange = r
                    } catch (t) {}
                }
            }

            function Yn(t) {
                t.g && t.K && (t.g.ontimeout = null), t.A && (O.clearTimeout(t.A), t.A = null)
            }

            function Xn(t) {
                return t.g ? t.g.readyState : 0
            }

            function $n(t) {
                try {
                    if (!t.g) return null;
                    if ("response" in t.g) return t.g.response;
                    switch (t.J) {
                        case Bn:
                        case "text":
                            return t.g.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer
                    }
                    return null
                } catch (t) {
                    return null
                }
            }

            function Jn(t, e, n) {
                t: {
                    for (r in n) {
                        var r = !1;
                        break t
                    }
                    r = !0
                }
                var i;r || (i = "", nt(n, function (t, e) {
                    i += e, i += ":", i += t, i += "\r\n"
                }), n = i, "string" == typeof t ? null != n && encodeURIComponent(String(n)) : rn(t, e, n))
            }

            function Zn(t, e, n) {
                return n && n.internalChannelParams && n.internalChannelParams[t] || e
            }

            function tr(t) {
                this.za = 0, this.l = [], this.h = new fe, this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null, this.Za = this.V = 0, this.Xa = Zn("failFast", !1, t), this.N = this.v = this.u = this.m = this.j = null, this.X = !0, this.I = this.ta = this.U = -1, this.Y = this.A = this.C = 0, this.Pa = Zn("baseRetryDelayMs", 5e3, t), this.$a = Zn("retryDelaySeedMs", 1e4, t), this.Ya = Zn("forwardChannelMaxRetries", 2, t), this.ra = Zn("forwardChannelRequestTimeoutMs", 2e4, t), this.qa = t && t.xmlHttpFactory || void 0, this.Ba = t && t.Yb || !1, this.K = void 0, this.H = t && t.supportsCrossDomainXhr || !1, this.J = "", this.i = new En(t && t.concurrentRequestLimit), this.Ca = new Rn, this.ja = t && t.fastHandshake || !1, this.Ra = t && t.Wb || !1, t && t.Aa && this.h.Aa(), t && t.forceLongPolling && (this.X = !1), this.$ = !this.ja && this.X && t && t.detectBufferingProxy || !1, this.ka = void 0, this.O = 0, this.L = !1, this.B = null, this.Wa = !t || !1 !== t.Xb
            }

            function er(t) {
                var e, n;
                rr(t), 3 == t.G && (e = t.V++, rn(n = Je(t.F), "SID", t.J), rn(n, "RID", e), rn(n, "TYPE", "terminate"), ar(t, n), (e = new ke(t, t.h, e, void 0)).K = 2, e.v = on(Je(n)), n = !1, !(n = O.navigator && O.navigator.sendBeacon ? O.navigator.sendBeacon(e.v.toString(), "") : n) && O.Image && ((new Image).src = e.v, n = !0), n || (e.g = wr(e.l, null), e.g.ea(e.v)), e.F = Date.now(), qe(e)), mr(t)
            }

            function nr(t) {
                t.g && (lr(t), t.g.cancel(), t.g = null)
            }

            function rr(t) {
                nr(t), t.u && (O.clearTimeout(t.u), t.u = null), dr(t), t.i.cancel(), t.m && ("number" == typeof t.m && O.clearTimeout(t.m), t.m = null)
            }

            function ir(t, e) {
                t.l.push(new bn(t.Za++, e)), 3 == t.G && or(t)
            }

            function or(t) {
                _n(t.i) || t.m || (t.m = !0, Jt(t.Ha, t), t.C = 0)
            }

            function sr(t, e) {
                var n = e ? e.m : t.V++,
                    r = Je(t.F);
                rn(r, "SID", t.J), rn(r, "RID", n), rn(r, "AID", t.U), ar(t, r), t.o && t.s && Jn(r, t.o, t.s), n = new ke(t, t.h, n, t.C + 1), null === t.o && (n.H = t.s), e && (t.l = e.D.concat(t.l)), e = ur(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ra) + Math.round(.5 * t.ra * Math.random())), Dn(t.i, n), Me(n, r, e)
            }

            function ar(t, n) {
                t.j && He({}, function (t, e) {
                    rn(n, e, t)
                })
            }

            function ur(t, e, n) {
                n = Math.min(t.l.length, n);
                var r = t.j ? B(t.j.Oa, t.j, t) : null;
                t: for (var i = t.l, o = -1;;) {
                    var s = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].h, s.push("ofs=" + o)) : o = 0 : s.push("ofs=" + o);
                    for (var a = !0, u = 0; u < n; u++) {
                        var c = i[u].h,
                            h = i[u].g;
                        if ((c -= o) < 0) o = Math.max(0, i[u].h - 100), a = !1;
                        else try {
                            ! function (t, r, e) {
                                var i = e || "";
                                try {
                                    He(t, function (t, e) {
                                        var n = t;
                                        M(t) && (n = Gt(t)), r.push(i + e + "=" + encodeURIComponent(n))
                                    })
                                } catch (t) {
                                    throw r.push(i + "type=" + encodeURIComponent("_badmap")), t
                                }
                            }(h, s, "req" + c + "_")
                        } catch (t) {
                            r && r(h)
                        }
                    }
                    if (a) {
                        r = s.join("&");
                        break t
                    }
                }
                return t = t.l.splice(0, n), e.D = t, r
            }

            function cr(t) {
                t.g || t.u || (t.Y = 1, Jt(t.Ga, t), t.A = 0)
            }

            function hr(t) {
                return !(t.g || t.u || 3 <= t.A) && (t.Y++, t.u = Te(B(t.Ga, t), yr(t, t.A)), t.A++, 1)
            }

            function lr(t) {
                null != t.B && (O.clearTimeout(t.B), t.B = null)
            }

            function fr(t) {
                t.g = new ke(t, t.h, "rpc", t.Y), null === t.o && (t.g.H = t.s), t.g.O = 0;
                var e = Je(t.oa);
                rn(e, "RID", "rpc"), rn(e, "SID", t.J), rn(e, "CI", t.N ? "0" : "1"), rn(e, "AID", t.U), ar(t, e), rn(e, "TYPE", "xmlhttp"), t.o && t.s && Jn(e, t.o, t.s), t.K && t.g.setTimeout(t.K);
                var n = t.g;
                t = t.la, n.K = 1, n.v = on(Je(e)), n.s = null, n.U = !0, Fe(n, t)
            }

            function dr(t) {
                null != t.v && (O.clearTimeout(t.v), t.v = null)
            }

            function pr(t, e) {
                var n, r, i, o = null;
                if (t.g == e) {
                    dr(t), lr(t), t.g = null;
                    var s = 2
                } else {
                    if (!An(t.i, e)) return;
                    o = e.D, Nn(t.i, e), s = 1
                }
                if (t.I = e.N, 0 != t.G)
                    if (e.i) 1 == s ? (o = e.s ? e.s.length : 0, e = Date.now() - e.F, n = t.C, jt(s = ge(), new Ee(s, o)), or(t)) : cr(t);
                    else if (3 == (n = e.o) || 0 == n && 0 < t.I || (1 != s || (i = e, Sn((r = t).i) >= r.i.j - (r.m ? 1 : 0) || (r.m ? (r.l = i.D.concat(r.l), 0) : 1 == r.G || 2 == r.G || r.C >= (r.Xa ? 0 : r.Ya) || (r.m = Te(B(r.Ha, r, i), yr(r, r.C)), r.C++, 0)))) && (2 != s || !hr(t))) switch (o && 0 < o.length && (e = t.i, e.i = e.i.concat(o)), n) {
                    case 1:
                        gr(t, 5);
                        break;
                    case 4:
                        gr(t, 10);
                        break;
                    case 3:
                        gr(t, 6);
                        break;
                    default:
                        gr(t, 2)
                }
            }

            function yr(t, e) {
                var n = t.Pa + Math.floor(Math.random() * t.$a);
                return t.j || (n *= 2), n * e
            }

            function gr(t, e) {
                var n, r, i, o;
                t.h.info("Error code " + e), 2 == e ? (r = null, t.j && (r = null), o = B(t.jb, t), r || (r = new $e("//www.google.com/images/cleardot.gif"), O.location && "http" == O.location.protocol || Ze(r, "https"), on(r)), n = r.toString(), r = o, o = new fe, O.Image ? ((i = new Image).onload = j(xn, o, i, "TestLoadImage: loaded", !0, r), i.onerror = j(xn, o, i, "TestLoadImage: error", !1, r), i.onabort = j(xn, o, i, "TestLoadImage: abort", !1, r), i.ontimeout = j(xn, o, i, "TestLoadImage: timeout", !1, r), O.setTimeout(function () {
                    i.ontimeout && i.ontimeout()
                }, 1e4), i.src = n) : r(!1)) : be(2), t.G = 0, t.j && t.j.va(e), mr(t), rr(t)
            }

            function mr(t) {
                t.G = 0, t.I = -1, t.j && (0 == Cn(t.i).length && 0 == t.l.length || (t.i.i.length = 0, Y(t.l), t.l.length = 0), t.j.ua())
            }

            function vr(t, e, n) {
                var r, i, o, s, a, u = (s = n) instanceof $e ? Je(s) : new $e(s, void 0);
                return "" != u.i ? (e && tn(u, e + "." + u.i), en(u, u.m)) : (a = O.location, r = a.protocol, i = e ? e + "." + a.hostname : a.hostname, o = +a.port, s = n, a = new $e(null, void 0), r && Ze(a, r), i && tn(a, i), o && en(a, o), s && (a.l = s), u = a), t.aa && nt(t.aa, function (t, e) {
                    rn(u, e, t)
                }), e = t.D, n = t.sa, e && n && rn(u, e, n), rn(u, "VER", t.ma), ar(t, u), u
            }

            function wr(t, e, n) {
                if (e && !t.H) throw Error("Can't create secondary domain capable XhrIo object.");
                return (e = n && t.Ba && !t.qa ? new qn(new On({
                    ib: !0
                })) : new qn(t.qa)).L = t.H, e
            }

            function br() {}

            function Er() {
                if (ct && !(10 <= Number(wt))) throw Error("Environmental error: no available transport.")
            }

            function Tr(t, e) {
                Bt.call(this), this.g = new tr(e), this.l = t, this.h = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                    "X-Client-Protocol": "webchannel"
                }), this.g.s = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                    "X-WebChannel-Content-Type": e.messageContentType
                }), e && e.ya && (t ? t["X-WebChannel-Client-Profile"] = e.ya : t = {
                    "X-WebChannel-Client-Profile": e.ya
                }), this.g.P = t, (t = e && e.httpHeadersOverwriteParam) && !X(t) && (this.g.o = t), this.A = e && e.supportsCrossDomainXhr || !1, this.v = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !X(e) && (this.g.D = e, null !== (t = this.h) && e in t && (e in (t = this.h) && delete t[e])), this.j = new Sr(this)
            }

            function Ir(t) {
                De.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) {
                            t = n;
                            break t
                        }
                        t = void 0
                    }(this.i = t) && (t = this.i, e = null !== e && t in e ? e[t] : void 0),
                    this.data = e
                }
                else this.data = t
            }

            function _r() {
                Ne.call(this), this.status = 1
            }

            function Sr(t) {
                this.g = t
            }(k = qn.prototype).ea = function (t, e, n, r) {
                if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.H = t, this.j = "", this.m = 0, this.D = !1, this.h = !0, this.g = (this.u || xe).g(), this.C = this.u ? Se(this.u) : Se(xe), this.g.onreadystatechange = B(this.Fa, this);
                try {
                    this.F = !0, this.g.open(e, String(t), !0), this.F = !1
                } catch (t) {
                    return void Qn(this, t)
                }
                t = n || "";
                var i, o = new ze(this.headers);
                r && He(r, function (t, e) {
                    o.set(e, t)
                }), r = function (t) {
                    t: {
                        for (var e = Gn, n = t.length, r = "string" == typeof t ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) {
                                e = i;
                                break t
                            } e = -1
                    }
                    return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e]
                }(o.T()), n = O.FormData && t instanceof O.FormData, 0 <= H(Kn, e) && !r && !n && o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function (t, e) {
                    this.g.setRequestHeader(e, t)
                }, this), this.J && (this.g.responseType = this.J), "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
                try {
                    Yn(this), 0 < this.B && ((this.K = (i = this.g, ct && vt() && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? (this.g.timeout = this.B, this.g.ontimeout = B(this.pa, this)) : this.A = ie(this.pa, this.B, this)), this.v = !0, this.g.send(t), this.v = !1
                } catch (t) {
                    Qn(this, t)
                }
            }, k.pa = function () {
                void 0 !== x && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, jt(this, "timeout"), this.abort(8))
            }, k.abort = function (t) {
                this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = t || 7, jt(this, "complete"), jt(this, "abort"), Wn(this))
            }, k.M = function () {
                this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Wn(this, !0)), qn.Z.M.call(this)
            }, k.Fa = function () {
                this.s || (this.F || this.v || this.l ? zn(this) : this.cb())
            }, k.cb = function () {
                zn(this)
            }, k.ba = function () {
                try {
                    return 2 < Xn(this) ? this.g.status : -1
                } catch (t) {
                    return -1
                }
            }, k.ga = function () {
                try {
                    return this.g ? this.g.responseText : ""
                } catch (t) {
                    return ""
                }
            }, k.Qa = function (t) {
                if (this.g) {
                    var e = this.g.responseText;
                    return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Un(e)
                }
            }, k.Da = function () {
                return this.m
            }, k.La = function () {
                return "string" == typeof this.j ? this.j : String(this.j)
            }, (k = tr.prototype).ma = 8, k.G = 1, k.hb = function (t) {
                try {
                    this.h.info("Origin Trials invoked: " + t)
                } catch (t) {}
            }, k.Ha = function (t) {
                if (this.m)
                    if (this.m = null, 1 == this.G) {
                        if (!t) {
                            this.V = Math.floor(1e5 * Math.random()), t = this.V++;
                            var e = new ke(this, this.h, t, void 0),
                                n = this.s;
                            if (this.P && (n ? ot(n = rt(n), this.P) : n = this.P), null === this.o && (e.H = n), this.ja) t: {
                                for (var r = 0, i = 0; i < this.l.length; i++) {
                                    var o = this.l[i];
                                    if ("__data__" in o.g && "string" == typeof (o = o.g.__data__) ? o = o.length : o = void 0, void 0 === o) break;
                                    if (4096 < (r += o)) {
                                        r = i;
                                        break t
                                    }
                                    if (4096 === r || i === this.l.length - 1) {
                                        r = i + 1;
                                        break t
                                    }
                                }
                                r = 1e3
                            }
                            else r = 1e3;
                            r = ur(this, e, r), rn(i = Je(this.F), "RID", t), rn(i, "CVER", 22), this.D && rn(i, "X-HTTP-Session-Id", this.D), ar(this, i), this.o && n && Jn(i, this.o, n), Dn(this.i, e), this.Ra && rn(i, "TYPE", "init"), this.ja ? (rn(i, "$req", r), rn(i, "SID", "null"), e.$ = !0, Me(e, i, null)) : Me(e, i, r), this.G = 2
                        }
                    } else 3 == this.G && (t ? sr(this, t) : 0 == this.l.length || _n(this.i) || sr(this))
            }, k.Ga = function () {
                var t;
                this.u = null, fr(this), this.$ && !(this.L || null == this.g || this.O <= 0) && (t = 2 * this.O, this.h.info("BP detection timer enabled: " + t), this.B = Te(B(this.bb, this), t))
            }, k.bb = function () {
                this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = !1, this.L = !0, be(10), nr(this), fr(this))
            }, k.ab = function () {
                null != this.v && (this.v = null, nr(this), hr(this), be(19))
            }, k.jb = function (t) {
                t ? (this.h.info("Successfully pinged google.com"), be(2)) : (this.h.info("Failed to ping google.com"), be(1))
            }, (k = br.prototype).xa = function () {}, k.wa = function () {}, k.va = function () {}, k.ua = function () {}, k.Oa = function () {}, Er.prototype.g = function (t, e) {
                return new Tr(t, e)
            }, K(Tr, Bt), Tr.prototype.m = function () {
                this.g.j = this.j, this.A && (this.g.H = !0);
                var t = this.g,
                    e = this.l,
                    n = this.h || void 0;
                t.Wa && (t.h.info("Origin Trials enabled."), Jt(B(t.hb, t, e))), be(0), t.W = e, t.aa = n || {}, t.N = t.X, t.F = vr(t, null, t.W), or(t)
            }, Tr.prototype.close = function () {
                er(this.g)
            }, Tr.prototype.u = function (t) {
                var e;
                "string" == typeof t ? ((e = {}).__data__ = t, ir(this.g, e)) : this.v ? ((e = {}).__data__ = Gt(t), ir(this.g, e)) : ir(this.g, t)
            }, Tr.prototype.M = function () {
                this.g.j = null, delete this.j, er(this.g), delete this.g, Tr.Z.M.call(this)
            }, K(Ir, De), K(_r, Ne), K(Sr, br), Sr.prototype.xa = function () {
                jt(this.g, "a")
            }, Sr.prototype.wa = function (t) {
                jt(this.g, new Ir(t))
            }, Sr.prototype.va = function (t) {
                jt(this.g, new _r)
            }, Sr.prototype.ua = function () {
                jt(this.g, "b")
            }, Er.prototype.createWebChannel = Er.prototype.g, Tr.prototype.send = Tr.prototype.u, Tr.prototype.open = Tr.prototype.m, Ie.NO_ERROR = 0, Ie.TIMEOUT = 8, Ie.HTTP_ERROR = 6, R.COMPLETE = "complete", (Ae.EventType = Qt).OPEN = "a", Qt.CLOSE = "b", Qt.ERROR = "c", Qt.MESSAGE = "d", Bt.prototype.listen = Bt.prototype.N, qn.prototype.listenOnce = qn.prototype.O, qn.prototype.getLastError = qn.prototype.La, qn.prototype.getLastErrorCode = qn.prototype.Da, qn.prototype.getStatus = qn.prototype.ba, qn.prototype.getResponseJson = qn.prototype.Qa, qn.prototype.getResponseText = qn.prototype.ga, qn.prototype.send = qn.prototype.ea;
            var Ar = ge,
                Dr = Ie,
                Nr = R,
                Cr = pe,
                kr = 10,
                Rr = 11,
                xr = On,
                Or = Ae,
                Lr = qn,
                Pr = (Mr.prototype.t = function (t) {
                    return this.previousValue = Math.max(t, this.previousValue), this.previousValue
                }, Mr.prototype.next = function () {
                    var t = ++this.previousValue;
                    return this.i && this.i(t), t
                }, Mr);

            function Mr(t, e) {
                var n = this;
                this.previousValue = t, e && (e.sequenceNumberHandler = function (t) {
                    return n.t(t)
                }, this.i = function (t) {
                    return e.writeSequenceNumber(t)
                })
            }
            Pr.o = -1;
            var Fr, Vr = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                Ur = (n(Br, Fr = Error), Br),
                qr = new A("@firebase/firestore");

            function Br(t, e) {
                var n = this;
                return (n = Fr.call(this, e) || this).code = t, n.message = e, n.name = "FirebaseError", n.toString = function () {
                    return n.name + ": [code=" + n.code + "]: " + n.message
                }, n
            }

            function jr() {
                return qr.logLevel
            }

            function Kr(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                qr.logLevel <= w.DEBUG && (e = n.map(Hr), qr.debug.apply(qr, s(["Firestore (8.10.0): " + t], e)))
            }

            function Gr(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                qr.logLevel <= w.ERROR && (e = n.map(Hr), qr.error.apply(qr, s(["Firestore (8.10.0): " + t], e)))
            }

            function Qr(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                qr.logLevel <= w.WARN && (e = n.map(Hr), qr.warn.apply(qr, s(["Firestore (8.10.0): " + t], e)))
            }

            function Hr(e) {
                if ("string" == typeof e) return e;
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return e
                }
            }

            function zr(t) {
                t = "FIRESTORE (8.10.0) INTERNAL ASSERTION FAILED: " + (t = void 0 === t ? "Unexpected state" : t);
                throw Gr(t), new Error(t)
            }

            function Wr(t) {
                t || zr()
            }
            var Yr = (Xr.u = function () {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;)
                    for (var r = function (t) {
                            var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
                                n = new Uint8Array(t);
                            if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
                            else
                                for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
                            return n
                        }(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
                return n
            }, Xr);

            function Xr() {}

            function $r(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }

            function Jr(t, n, r) {
                return t.length === n.length && t.every(function (t, e) {
                    return r(t, n[e])
                })
            }

            function Zr(t) {
                return t + "\0"
            }
            var ti = (ri.now = function () {
                    return ri.fromMillis(Date.now())
                }, ri.fromDate = function (t) {
                    return ri.fromMillis(t.getTime())
                }, ri.fromMillis = function (t) {
                    var e = Math.floor(t / 1e3);
                    return new ri(e, Math.floor(1e6 * (t - 1e3 * e)))
                }, ri.prototype.toDate = function () {
                    return new Date(this.toMillis())
                }, ri.prototype.toMillis = function () {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }, ri.prototype._compareTo = function (t) {
                    return this.seconds === t.seconds ? $r(this.nanoseconds, t.nanoseconds) : $r(this.seconds, t.seconds)
                }, ri.prototype.isEqual = function (t) {
                    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                }, ri.prototype.toString = function () {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }, ri.prototype.toJSON = function () {
                    return {
                        seconds: this.seconds,
                        nanoseconds: this.nanoseconds
                    }
                }, ri.prototype.valueOf = function () {
                    var t = this.seconds - -62135596800;
                    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                }, ri),
                ei = (ni.fromTimestamp = function (t) {
                    return new ni(t)
                }, ni.min = function () {
                    return new ni(new ti(0, 0))
                }, ni.prototype.compareTo = function (t) {
                    return this.timestamp._compareTo(t.timestamp)
                }, ni.prototype.isEqual = function (t) {
                    return this.timestamp.isEqual(t.timestamp)
                }, ni.prototype.toMicroseconds = function () {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }, ni.prototype.toString = function () {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }, ni.prototype.toTimestamp = function () {
                    return this.timestamp
                }, ni);

            function ni(t) {
                this.timestamp = t
            }

            function ri(t, e) {
                if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Ur(Vr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (1e9 <= e) throw new Ur(Vr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (t < -62135596800) throw new Ur(Vr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                if (253402300800 <= t) throw new Ur(Vr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
            }

            function ii(t) {
                var e, n = 0;
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
                return n
            }

            function oi(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function si(t) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }
            var ai, ui, R = (Object.defineProperty(vi.prototype, "length", {
                    get: function () {
                        return this.len
                    },
                    enumerable: !1,
                    configurable: !0
                }), vi.prototype.isEqual = function (t) {
                    return 0 === vi.comparator(this, t)
                }, vi.prototype.child = function (t) {
                    var e = this.segments.slice(this.offset, this.limit());
                    return t instanceof vi ? t.forEach(function (t) {
                        e.push(t)
                    }) : e.push(t), this.construct(e)
                }, vi.prototype.limit = function () {
                    return this.offset + this.length
                }, vi.prototype.popFirst = function (t) {
                    return this.construct(this.segments, this.offset + (t = void 0 === t ? 1 : t), this.length - t)
                }, vi.prototype.popLast = function () {
                    return this.construct(this.segments, this.offset, this.length - 1)
                }, vi.prototype.firstSegment = function () {
                    return this.segments[this.offset]
                }, vi.prototype.lastSegment = function () {
                    return this.get(this.length - 1)
                }, vi.prototype.get = function (t) {
                    return this.segments[this.offset + t]
                }, vi.prototype.isEmpty = function () {
                    return 0 === this.length
                }, vi.prototype.isPrefixOf = function (t) {
                    if (t.length < this.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, vi.prototype.isImmediateParentOf = function (t) {
                    if (this.length + 1 !== t.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, vi.prototype.forEach = function (t) {
                    for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                }, vi.prototype.toArray = function () {
                    return this.segments.slice(this.offset, this.limit())
                }, vi.comparator = function (t, e) {
                    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                        var i = t.get(r),
                            o = e.get(r);
                        if (i < o) return -1;
                        if (o < i) return 1
                    }
                    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                }, vi),
                ci = (n(mi, ui = R), mi.prototype.construct = function (t, e, n) {
                    return new mi(t, e, n)
                }, mi.prototype.canonicalString = function () {
                    return this.toArray().join("/")
                }, mi.prototype.toString = function () {
                    return this.canonicalString()
                }, mi.fromString = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = [], r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        if (0 <= o.indexOf("//")) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid segment (" + o + "). Paths must not contain // in them.");
                        n.push.apply(n, o.split("/").filter(function (t) {
                            return 0 < t.length
                        }))
                    }
                    return new mi(n)
                }, mi.emptyPath = function () {
                    return new mi([])
                }, mi),
                hi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                li = (n(gi, ai = R), gi.prototype.construct = function (t, e, n) {
                    return new gi(t, e, n)
                }, gi.isValidIdentifier = function (t) {
                    return hi.test(t)
                }, gi.prototype.canonicalString = function () {
                    return this.toArray().map(function (t) {
                        return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), t = !gi.isValidIdentifier(t) ? "`" + t + "`" : t
                    }).join(".")
                }, gi.prototype.toString = function () {
                    return this.canonicalString()
                }, gi.prototype.isKeyField = function () {
                    return 1 === this.length && "__name__" === this.get(0)
                }, gi.keyField = function () {
                    return new gi(["__name__"])
                }, gi.fromServerFormat = function (t) {
                    for (var e = [], n = "", r = 0, i = function () {
                            if (0 === n.length) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                            e.push(n), n = ""
                        }, o = !1; r < t.length;) {
                        var s = t[r];
                        if ("\\" === s) {
                            if (r + 1 === t.length) throw new Ur(Vr.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                            var a = t[r + 1];
                            if ("\\" !== a && "." !== a && "`" !== a) throw new Ur(Vr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                            n += a, r += 2
                        } else "`" === s ? o = !o : "." !== s || o ? n += s : i(), r++
                    }
                    if (i(), o) throw new Ur(Vr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                    return new gi(e)
                }, gi.emptyPath = function () {
                    return new gi([])
                }, gi),
                fi = (yi.prototype.covers = function (t) {
                    for (var e = 0, n = this.fields; e < n.length; e++)
                        if (n[e].isPrefixOf(t)) return !0;
                    return !1
                }, yi.prototype.isEqual = function (t) {
                    return Jr(this.fields, t.fields, function (t, e) {
                        return t.isEqual(e)
                    })
                }, yi),
                di = (pi.fromBase64String = function (t) {
                    return new pi(atob(t))
                }, pi.fromUint8Array = function (t) {
                    return new pi(function (t) {
                        for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
                        return e
                    }(t))
                }, pi.prototype.toBase64 = function () {
                    return t = this.binaryString, btoa(t);
                    var t
                }, pi.prototype.toUint8Array = function () {
                    return function (t) {
                        for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                        return e
                    }(this.binaryString)
                }, pi.prototype.approximateByteSize = function () {
                    return 2 * this.binaryString.length
                }, pi.prototype.compareTo = function (t) {
                    return $r(this.binaryString, t.binaryString)
                }, pi.prototype.isEqual = function (t) {
                    return this.binaryString === t.binaryString
                }, pi);

            function pi(t) {
                this.binaryString = t
            }

            function yi(t) {
                (this.fields = t).sort(li.comparator)
            }

            function gi() {
                return null !== ai && ai.apply(this, arguments) || this
            }

            function mi() {
                return null !== ui && ui.apply(this, arguments) || this
            }

            function vi(t, e, n) {
                void 0 === e ? e = 0 : e > t.length && zr(), void 0 === n ? n = t.length - e : n > t.length - e && zr(), this.segments = t, this.offset = e, this.len = n
            }
            di.EMPTY_BYTE_STRING = new di("");
            var wi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function bi(t) {
                if (Wr(!!t), "string" != typeof t) return {
                    seconds: Ei(t.seconds),
                    nanos: Ei(t.nanos)
                };
                var e = 0,
                    n = wi.exec(t);
                Wr(!!n), n[1] && (n = ((n = n[1]) + "000000000").substr(0, 9), e = Number(n));
                t = new Date(t);
                return {
                    seconds: Math.floor(t.getTime() / 1e3),
                    nanos: e
                }
            }

            function Ei(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
            }

            function Ti(t) {
                return "string" == typeof t ? di.fromBase64String(t) : di.fromUint8Array(t)
            }

            function Ii(t) {
                return "server_timestamp" === (null === (t = ((null === (t = null == t ? void 0 : t.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === t ? void 0 : t.stringValue)
            }

            function _i(t) {
                t = bi(t.mapValue.fields.__local_write_time__.timestampValue);
                return new ti(t.seconds, t.nanos)
            }

            function Si(t) {
                return null == t
            }

            function Ai(t) {
                return 0 === t && 1 / t == -1 / 0
            }

            function Di(t) {
                return "number" == typeof t && Number.isInteger(t) && !Ai(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
            }
            var Ni = (Ci.fromPath = function (t) {
                return new Ci(ci.fromString(t))
            }, Ci.fromName = function (t) {
                return new Ci(ci.fromString(t).popFirst(5))
            }, Ci.prototype.hasCollectionId = function (t) {
                return 2 <= this.path.length && this.path.get(this.path.length - 2) === t
            }, Ci.prototype.isEqual = function (t) {
                return null !== t && 0 === ci.comparator(this.path, t.path)
            }, Ci.prototype.toString = function () {
                return this.path.toString()
            }, Ci.comparator = function (t, e) {
                return ci.comparator(t.path, e.path)
            }, Ci.isDocumentKey = function (t) {
                return t.length % 2 == 0
            }, Ci.fromSegments = function (t) {
                return new Ci(new ci(t.slice()))
            }, Ci);

            function Ci(t) {
                this.path = t
            }

            function ki(t) {
                return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Ii(t) ? 4 : 10 : zr()
            }

            function Ri(r, i) {
                var t, e, n = ki(r);
                if (n !== ki(i)) return !1;
                switch (n) {
                    case 0:
                        return !0;
                    case 1:
                        return r.booleanValue === i.booleanValue;
                    case 4:
                        return _i(r).isEqual(_i(i));
                    case 3:
                        return function (t) {
                            if ("string" == typeof r.timestampValue && "string" == typeof t.timestampValue && r.timestampValue.length === t.timestampValue.length) return r.timestampValue === t.timestampValue;
                            var e = bi(r.timestampValue),
                                t = bi(t.timestampValue);
                            return e.seconds === t.seconds && e.nanos === t.nanos
                        }(i);
                    case 5:
                        return r.stringValue === i.stringValue;
                    case 6:
                        return e = i, Ti(r.bytesValue).isEqual(Ti(e.bytesValue));
                    case 7:
                        return r.referenceValue === i.referenceValue;
                    case 8:
                        return t = i, Ei((e = r).geoPointValue.latitude) === Ei(t.geoPointValue.latitude) && Ei(e.geoPointValue.longitude) === Ei(t.geoPointValue.longitude);
                    case 2:
                        return function (t, e) {
                            if ("integerValue" in t && "integerValue" in e) return Ei(t.integerValue) === Ei(e.integerValue);
                            if ("doubleValue" in t && "doubleValue" in e) {
                                t = Ei(t.doubleValue), e = Ei(e.doubleValue);
                                return t === e ? Ai(t) === Ai(e) : isNaN(t) && isNaN(e)
                            }
                            return !1
                        }(r, i);
                    case 9:
                        return Jr(r.arrayValue.values || [], i.arrayValue.values || [], Ri);
                    case 10:
                        return function () {
                            var t, e = r.mapValue.fields || {},
                                n = i.mapValue.fields || {};
                            if (ii(e) !== ii(n)) return !1;
                            for (t in e)
                                if (e.hasOwnProperty(t) && (void 0 === n[t] || !Ri(e[t], n[t]))) return !1;
                            return !0
                        }();
                    default:
                        return zr()
                }
            }

            function xi(t, e) {
                return void 0 !== (t.values || []).find(function (t) {
                    return Ri(t, e)
                })
            }

            function Oi(t, e) {
                var n, r, i, o = ki(t),
                    s = ki(e);
                if (o !== s) return $r(o, s);
                switch (o) {
                    case 0:
                        return 0;
                    case 1:
                        return $r(t.booleanValue, e.booleanValue);
                    case 2:
                        return r = e, i = Ei(t.integerValue || t.doubleValue), r = Ei(r.integerValue || r.doubleValue), i < r ? -1 : r < i ? 1 : i === r ? 0 : isNaN(i) ? isNaN(r) ? 0 : -1 : 1;
                    case 3:
                        return Li(t.timestampValue, e.timestampValue);
                    case 4:
                        return Li(_i(t), _i(e));
                    case 5:
                        return $r(t.stringValue, e.stringValue);
                    case 6:
                        return function (t, e) {
                            t = Ti(t), e = Ti(e);
                            return t.compareTo(e)
                        }(t.bytesValue, e.bytesValue);
                    case 7:
                        return function (t, e) {
                            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                                var o = $r(n[i], r[i]);
                                if (0 !== o) return o
                            }
                            return $r(n.length, r.length)
                        }(t.referenceValue, e.referenceValue);
                    case 8:
                        return n = t.geoPointValue, i = e.geoPointValue, 0 !== (r = $r(Ei(n.latitude), Ei(i.latitude))) ? r : $r(Ei(n.longitude), Ei(i.longitude));
                    case 9:
                        return function (t, e) {
                            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                                var o = Oi(n[i], r[i]);
                                if (o) return o
                            }
                            return $r(n.length, r.length)
                        }(t.arrayValue, e.arrayValue);
                    case 10:
                        return function (t, e) {
                            var n = t.fields || {},
                                r = Object.keys(n),
                                i = e.fields || {},
                                o = Object.keys(i);
                            r.sort(), o.sort();
                            for (var s = 0; s < r.length && s < o.length; ++s) {
                                var a = $r(r[s], o[s]);
                                if (0 !== a) return a;
                                a = Oi(n[r[s]], i[o[s]]);
                                if (0 !== a) return a
                            }
                            return $r(r.length, o.length)
                        }(t.mapValue, e.mapValue);
                    default:
                        throw zr()
                }
            }

            function Li(t, e) {
                if ("string" == typeof t && "string" == typeof e && t.length === e.length) return $r(t, e);
                var n = bi(t),
                    t = bi(e),
                    e = $r(n.seconds, t.seconds);
                return 0 !== e ? e : $r(n.nanos, t.nanos)
            }

            function Pi(t) {
                return function s(t) {
                    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function (t) {
                        t = bi(t);
                        return "time(" + t.seconds + "," + t.nanos + ")"
                    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? Ti(t.bytesValue).toBase64() : "referenceValue" in t ? (e = t.referenceValue, Ni.fromName(e).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function (t) {
                        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) n ? n = !1 : e += ",", e += s(i[r]);
                        return e + "]"
                    }(t.arrayValue) : "mapValue" in t ? function (t) {
                        for (var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
                            var o = i[r];
                            n ? n = !1 : e += ",", e += o + ":" + s(t.fields[o])
                        }
                        return e + "}"
                    }(t.mapValue) : zr();
                    var e
                }(t)
            }

            function Mi(t, e) {
                return {
                    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString()
                }
            }

            function Fi(t) {
                return t && "integerValue" in t
            }

            function Vi(t) {
                return !!t && "arrayValue" in t
            }

            function Ui(t) {
                return t && "nullValue" in t
            }

            function qi(t) {
                return t && "doubleValue" in t && isNaN(Number(t.doubleValue))
            }

            function Bi(t) {
                return t && "mapValue" in t
            }

            function ji(t) {
                if (t.geoPointValue) return {
                    geoPointValue: Object.assign({}, t.geoPointValue)
                };
                if (t.timestampValue && "object" == typeof t.timestampValue) return {
                    timestampValue: Object.assign({}, t.timestampValue)
                };
                if (t.mapValue) {
                    var n = {
                        mapValue: {
                            fields: {}
                        }
                    };
                    return oi(t.mapValue.fields, function (t, e) {
                        return n.mapValue.fields[t] = ji(e)
                    }), n
                }
                if (t.arrayValue) {
                    for (var e = {
                            arrayValue: {
                                values: []
                            }
                        }, r = 0; r < (t.arrayValue.values || []).length; ++r) e.arrayValue.values[r] = ji(t.arrayValue.values[r]);
                    return e
                }
                return Object.assign({}, t)
            }
            var Ki = (Gi.empty = function () {
                return new Gi({
                    mapValue: {}
                })
            }, Gi.prototype.field = function (t) {
                if (t.isEmpty()) return this.value;
                for (var e = this.value, n = 0; n < t.length - 1; ++n)
                    if (!Bi(e = (e.mapValue.fields || {})[t.get(n)])) return null;
                return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null
            }, Gi.prototype.set = function (t, e) {
                this.getFieldsMap(t.popLast())[t.lastSegment()] = ji(e)
            }, Gi.prototype.setAll = function (t) {
                var r = this,
                    i = li.emptyPath(),
                    o = {},
                    s = [];
                t.forEach(function (t, e) {
                    var n;
                    i.isImmediateParentOf(e) || (n = r.getFieldsMap(i), r.applyChanges(n, o, s), o = {}, s = [], i = e.popLast()), t ? o[e.lastSegment()] = ji(t) : s.push(e.lastSegment())
                });
                t = this.getFieldsMap(i);
                this.applyChanges(t, o, s)
            }, Gi.prototype.delete = function (t) {
                var e = this.field(t.popLast());
                Bi(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()]
            }, Gi.prototype.isEqual = function (t) {
                return Ri(this.value, t.value)
            }, Gi.prototype.getFieldsMap = function (t) {
                var e = this.value;
                e.mapValue.fields || (e.mapValue = {
                    fields: {}
                });
                for (var n = 0; n < t.length; ++n) {
                    var r = e.mapValue.fields[t.get(n)];
                    Bi(r) && r.mapValue.fields || (r = {
                        mapValue: {
                            fields: {}
                        }
                    }, e.mapValue.fields[t.get(n)] = r), e = r
                }
                return e.mapValue.fields
            }, Gi.prototype.applyChanges = function (n, t, e) {
                oi(t, function (t, e) {
                    return n[t] = e
                });
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    delete n[o]
                }
            }, Gi.prototype.clone = function () {
                return new Gi(ji(this.value))
            }, Gi);

            function Gi(t) {
                this.value = t
            }
            var Qi = (zi.newInvalidDocument = function (t) {
                    return new zi(t, 0, ei.min(), Ki.empty(), 0)
                }, zi.newFoundDocument = function (t, e, n) {
                    return new zi(t, 1, e, n, 0)
                }, zi.newNoDocument = function (t, e) {
                    return new zi(t, 2, e, Ki.empty(), 0)
                }, zi.newUnknownDocument = function (t, e) {
                    return new zi(t, 3, e, Ki.empty(), 2)
                }, zi.prototype.convertToFoundDocument = function (t, e) {
                    return this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this
                }, zi.prototype.convertToNoDocument = function (t) {
                    return this.version = t, this.documentType = 2, this.data = Ki.empty(), this.documentState = 0, this
                }, zi.prototype.convertToUnknownDocument = function (t) {
                    return this.version = t, this.documentType = 3, this.data = Ki.empty(), this.documentState = 2, this
                }, zi.prototype.setHasCommittedMutations = function () {
                    return this.documentState = 2, this
                }, zi.prototype.setHasLocalMutations = function () {
                    return this.documentState = 1, this
                }, Object.defineProperty(zi.prototype, "hasLocalMutations", {
                    get: function () {
                        return 1 === this.documentState
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(zi.prototype, "hasCommittedMutations", {
                    get: function () {
                        return 2 === this.documentState
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(zi.prototype, "hasPendingWrites", {
                    get: function () {
                        return this.hasLocalMutations || this.hasCommittedMutations
                    },
                    enumerable: !1,
                    configurable: !0
                }), zi.prototype.isValidDocument = function () {
                    return 0 !== this.documentType
                }, zi.prototype.isFoundDocument = function () {
                    return 1 === this.documentType
                }, zi.prototype.isNoDocument = function () {
                    return 2 === this.documentType
                }, zi.prototype.isUnknownDocument = function () {
                    return 3 === this.documentType
                }, zi.prototype.isEqual = function (t) {
                    return t instanceof zi && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data)
                }, zi.prototype.clone = function () {
                    return new zi(this.key, this.documentType, this.version, this.data.clone(), this.documentState)
                }, zi.prototype.toString = function () {
                    return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.value) + ", {documentType: " + this.documentType + "}), {documentState: " + this.documentState + "})"
                }, zi),
                Hi = function (t, e, n, r, i, o, s) {
                    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.h = null
                };

            function zi(t, e, n, r, i) {
                this.key = t, this.documentType = e, this.version = n, this.data = r, this.documentState = i
            }

            function Wi(t, e, n, r, i, o, s) {
                return new Hi(t, e = void 0 === e ? null : e, n = void 0 === n ? [] : n, r = void 0 === r ? [] : r, i = void 0 === i ? null : i, o = void 0 === o ? null : o, s = void 0 === s ? null : s)
            }

            function Yi(t) {
                var e = t;
                return null === e.h && (t = e.path.canonicalString(), null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map(function (t) {
                    return (t = t).field.canonicalString() + t.op.toString() + Pi(t.value)
                }).join(","), t += "|ob:", t += e.orderBy.map(function (t) {
                    return (t = t).field.canonicalString() + t.dir
                }).join(","), Si(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", t += So(e.startAt)), e.endAt && (t += "|ub:", t += So(e.endAt)), e.h = t), e.h
            }

            function Xi(t, e) {
                if (t.limit !== e.limit) return !1;
                if (t.orderBy.length !== e.orderBy.length) return !1;
                for (var n, r, i = 0; i < t.orderBy.length; i++)
                    if (n = t.orderBy[i], r = e.orderBy[i], n.dir !== r.dir || !n.field.isEqual(r.field)) return !1;
                if (t.filters.length !== e.filters.length) return !1;
                for (var o, s, a = 0; a < t.filters.length; a++)
                    if (o = t.filters[a], s = e.filters[a], o.op !== s.op || !o.field.isEqual(s.field) || !Ri(o.value, s.value)) return !1;
                return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!No(t.startAt, e.startAt) && No(t.endAt, e.endAt)
            }

            function $i(t) {
                return Ni.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length
            }
            var Ji, Zi = (n(to, Ji = function () {}), to.create = function (t, e, n) {
                return t.isKeyField() ? "in" === e || "not-in" === e ? this.l(t, e, n) : new io(t, e, n) : "array-contains" === e ? new go(t, n) : "in" === e ? new mo(t, n) : "not-in" === e ? new vo(t, n) : "array-contains-any" === e ? new wo(t, n) : new to(t, e, n)
            }, to.l = function (t, e, n) {
                return new("in" === e ? oo : so)(t, n)
            }, to.prototype.matches = function (t) {
                t = t.data.field(this.field);
                return "!=" === this.op ? null !== t && this.m(Oi(t, this.value)) : null !== t && ki(this.value) === ki(t) && this.m(Oi(t, this.value))
            }, to.prototype.m = function (t) {
                switch (this.op) {
                    case "<":
                        return t < 0;
                    case "<=":
                        return t <= 0;
                    case "==":
                        return 0 === t;
                    case "!=":
                        return 0 !== t;
                    case ">":
                        return 0 < t;
                    case ">=":
                        return 0 <= t;
                    default:
                        return zr()
                }
            }, to.prototype.g = function () {
                return 0 <= ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op)
            }, to);

            function to(t, e, n) {
                var r = this;
                return (r = Ji.call(this) || this).field = t, r.op = e, r.value = n, r
            }
            var eo, no, ro, io = (n(co, ro = Zi), co.prototype.matches = function (t) {
                    t = Ni.comparator(t.key, this.key);
                    return this.m(t)
                }, co),
                oo = (n(uo, no = Zi), uo.prototype.matches = function (e) {
                    return this.keys.some(function (t) {
                        return t.isEqual(e.key)
                    })
                }, uo),
                so = (n(ao, eo = Zi), ao.prototype.matches = function (e) {
                    return !this.keys.some(function (t) {
                        return t.isEqual(e.key)
                    })
                }, ao);

            function ao(t, e) {
                var n = this;
                return (n = eo.call(this, t, "not-in", e) || this).keys = ho(0, e), n
            }

            function uo(t, e) {
                var n = this;
                return (n = no.call(this, t, "in", e) || this).keys = ho(0, e), n
            }

            function co(t, e, n) {
                var r = this;
                return (r = ro.call(this, t, e, n) || this).key = Ni.fromName(n.referenceValue), r
            }

            function ho(t, e) {
                return ((null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) || []).map(function (t) {
                    return Ni.fromName(t.referenceValue)
                })
            }
            var lo, fo, po, yo, go = (n(_o, yo = Zi), _o.prototype.matches = function (t) {
                    t = t.data.field(this.field);
                    return Vi(t) && xi(t.arrayValue, this.value)
                }, _o),
                mo = (n(Io, po = Zi), Io.prototype.matches = function (t) {
                    t = t.data.field(this.field);
                    return null !== t && xi(this.value.arrayValue, t)
                }, Io),
                vo = (n(To, fo = Zi), To.prototype.matches = function (t) {
                    if (xi(this.value.arrayValue, {
                            nullValue: "NULL_VALUE"
                        })) return !1;
                    t = t.data.field(this.field);
                    return null !== t && !xi(this.value.arrayValue, t)
                }, To),
                wo = (n(Eo, lo = Zi), Eo.prototype.matches = function (t) {
                    var e = this,
                        t = t.data.field(this.field);
                    return !(!Vi(t) || !t.arrayValue.values) && t.arrayValue.values.some(function (t) {
                        return xi(e.value.arrayValue, t)
                    })
                }, Eo),
                bo = function (t, e) {
                    this.position = t, this.before = e
                };

            function Eo(t, e) {
                return lo.call(this, t, "array-contains-any", e) || this
            }

            function To(t, e) {
                return fo.call(this, t, "not-in", e) || this
            }

            function Io(t, e) {
                return po.call(this, t, "in", e) || this
            }

            function _o(t, e) {
                return yo.call(this, t, "array-contains", e) || this
            }

            function So(t) {
                return (t.before ? "b" : "a") + ":" + t.position.map(Pi).join(",")
            }
            var Ao = function (t, e) {
                void 0 === e && (e = "asc"), this.field = t, this.dir = e
            };

            function Do(t, e, n) {
                for (var r = 0, i = 0; i < t.position.length; i++) {
                    var o = e[i],
                        s = t.position[i],
                        r = o.field.isKeyField() ? Ni.comparator(Ni.fromName(s.referenceValue), n.key) : Oi(s, n.data.field(o.field));
                    if ("desc" === o.dir && (r *= -1), 0 !== r) break
                }
                return t.before ? r <= 0 : r < 0
            }

            function No(t, e) {
                if (null === t) return null === e;
                if (null === e) return !1;
                if (t.before !== e.before || t.position.length !== e.position.length) return !1;
                for (var n = 0; n < t.position.length; n++)
                    if (!Ri(t.position[n], e.position[n])) return !1;
                return !0
            }
            var Co = function (t, e, n, r, i, o, s, a) {
                void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = a, this.p = null, this.T = null, this.startAt, this.endAt
            };

            function ko(t, e, n, r, i, o, s, a) {
                return new Co(t, e, n, r, i, o, s, a)
            }

            function Ro(t) {
                return new Co(t)
            }

            function xo(t) {
                return !Si(t.limit) && "F" === t.limitType
            }

            function Oo(t) {
                return !Si(t.limit) && "L" === t.limitType
            }

            function Lo(t) {
                return 0 < t.explicitOrderBy.length ? t.explicitOrderBy[0].field : null
            }

            function Po(t) {
                for (var e = 0, n = t.filters; e < n.length; e++) {
                    var r = n[e];
                    if (r.g()) return r.field
                }
                return null
            }

            function Mo(t) {
                return null !== t.collectionGroup
            }

            function Fo(t) {
                var e = t;
                if (null === e.p) {
                    e.p = [];
                    var n = Po(e),
                        t = Lo(e);
                    if (null !== n && null === t) n.isKeyField() || e.p.push(new Ao(n)), e.p.push(new Ao(li.keyField(), "asc"));
                    else {
                        for (var r = !1, i = 0, o = e.explicitOrderBy; i < o.length; i++) {
                            var s = o[i];
                            e.p.push(s), s.field.isKeyField() && (r = !0)
                        }
                        r || (n = 0 < e.explicitOrderBy.length ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc", e.p.push(new Ao(li.keyField(), n)))
                    }
                }
                return e.p
            }

            function Vo(t) {
                var e = t;
                if (!e.T)
                    if ("F" === e.limitType) e.T = Wi(e.path, e.collectionGroup, Fo(e), e.filters, e.limit, e.startAt, e.endAt);
                    else {
                        for (var n = [], r = 0, i = Fo(e); r < i.length; r++) {
                            var o = i[r],
                                s = "desc" === o.dir ? "asc" : "desc";
                            n.push(new Ao(o.field, s))
                        }
                        var a = e.endAt ? new bo(e.endAt.position, !e.endAt.before) : null,
                            t = e.startAt ? new bo(e.startAt.position, !e.startAt.before) : null;
                        e.T = Wi(e.path, e.collectionGroup, n, e.filters, e.limit, a, t)
                    } return e.T
            }

            function Uo(t, e, n) {
                return new Co(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
            }

            function qo(t, e) {
                return Xi(Vo(t), Vo(e)) && t.limitType === e.limitType
            }

            function Bo(t) {
                return Yi(Vo(t)) + "|lt:" + t.limitType
            }

            function jo(t) {
                return "Query(target=" + (e = Vo(t), n = e.path.canonicalString(), null !== e.collectionGroup && (n += " collectionGroup=" + e.collectionGroup), 0 < e.filters.length && (n += ", filters: [" + e.filters.map(function (t) {
                    return (t = t).field.canonicalString() + " " + t.op + " " + Pi(t.value)
                }).join(", ") + "]"), Si(e.limit) || (n += ", limit: " + e.limit), 0 < e.orderBy.length && (n += ", orderBy: [" + e.orderBy.map(function (t) {
                    return (t = t).field.canonicalString() + " (" + t.dir + ")"
                }).join(", ") + "]"), e.startAt && (n += ", startAt: " + So(e.startAt)), e.endAt && (n += ", endAt: " + So(e.endAt)), "Target(" + n + ")") + "; limitType=" + t.limitType + ")";
                var e, n
            }

            function Ko(i, t) {
                return t.isFoundDocument() && (e = i, n = t.key.path, null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : Ni.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)) && function (t) {
                    for (var e = 0, n = i.explicitOrderBy; e < n.length; e++) {
                        var r = n[e];
                        if (!r.field.isKeyField() && null === t.data.field(r.field)) return
                    }
                    return 1
                }(t) && function (t) {
                    for (var e = 0, n = i.filters; e < n.length; e++)
                        if (!n[e].matches(t)) return;
                    return 1
                }(t) && (n = t, (!(t = i).startAt || Do(t.startAt, Fo(t), n)) && (!t.endAt || !Do(t.endAt, Fo(t), n)));
                var e, n
            }

            function Go(a) {
                return function (t, e) {
                    for (var n = !1, r = 0, i = Fo(a); r < i.length; r++) {
                        var o = i[r],
                            s = function (t, r, e) {
                                var n = t.field.isKeyField() ? Ni.comparator(r.key, e.key) : function (t, e) {
                                    var n = r.data.field(t),
                                        t = e.data.field(t);
                                    return null !== n && null !== t ? Oi(n, t) : zr()
                                }(t.field, e);
                                switch (t.dir) {
                                    case "asc":
                                        return n;
                                    case "desc":
                                        return -1 * n;
                                    default:
                                        return zr()
                                }
                            }(o, t, e);
                        if (0 !== s) return s;
                        n = n || o.field.isKeyField()
                    }
                    return 0
                }
            }

            function Qo(t, e) {
                if (t.I) {
                    if (isNaN(e)) return {
                        doubleValue: "NaN"
                    };
                    if (e === 1 / 0) return {
                        doubleValue: "Infinity"
                    };
                    if (e === -1 / 0) return {
                        doubleValue: "-Infinity"
                    }
                }
                return {
                    doubleValue: Ai(e) ? "-0" : e
                }
            }

            function Ho(t) {
                return {
                    integerValue: "" + t
                }
            }

            function zo(t, e) {
                return Di(e) ? Ho(e) : Qo(t, e)
            }
            A = function () {
                this._ = void 0
            };

            function Wo(t, e) {
                return t instanceof as ? Fi(t = e) || t && "doubleValue" in t ? e : {
                    integerValue: 0
                } : null
            }
            var Yo, Xo, $o = (n(ts, Xo = A), ts),
                Jo = (n(Zo, Yo = A), Zo);

            function Zo(t) {
                var e = this;
                return (e = Yo.call(this) || this).elements = t, e
            }

            function ts() {
                return null !== Xo && Xo.apply(this, arguments) || this
            }

            function es(t, e) {
                for (var n = hs(e), r = 0, i = t.elements; r < i.length; r++) ! function (e) {
                    n.some(function (t) {
                        return Ri(t, e)
                    }) || n.push(e)
                }(i[r]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var ns, rs = (n(is, ns = A), is);

            function is(t) {
                var e = this;
                return (e = ns.call(this) || this).elements = t, e
            }

            function os(t, e) {
                for (var n = hs(e), r = 0, i = t.elements; r < i.length; r++) ! function (e) {
                    n = n.filter(function (t) {
                        return !Ri(t, e)
                    })
                }(i[r]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var ss, as = (n(us, ss = A), us);

            function us(t, e) {
                var n = this;
                return (n = ss.call(this) || this).R = t, n.A = e, n
            }

            function cs(t) {
                return Ei(t.integerValue || t.doubleValue)
            }

            function hs(t) {
                return Vi(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
            }

            function ls(t, e) {
                this.version = t, this.transformResults = e
            }
            var fs = function (t, e) {
                    this.field = t, this.transform = e
                },
                ds = (ps.none = function () {
                    return new ps
                }, ps.exists = function (t) {
                    return new ps(void 0, t)
                }, ps.updateTime = function (t) {
                    return new ps(t)
                }, Object.defineProperty(ps.prototype, "isNone", {
                    get: function () {
                        return void 0 === this.updateTime && void 0 === this.exists
                    },
                    enumerable: !1,
                    configurable: !0
                }), ps.prototype.isEqual = function (t) {
                    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
                }, ps);

            function ps(t, e) {
                this.updateTime = t, this.exists = e
            }

            function ys(t, e) {
                return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument()
            }
            R = function () {};

            function gs(t, e, n) {
                var r, i, o, s;
                t instanceof Es ? (i = e, o = n, ys((r = t).precondition, i) && (s = r.value.clone(), o = Ds(r.fieldTransforms, o, i), s.setAll(o), i.convertToFoundDocument(vs(i), s).setHasLocalMutations())) : t instanceof Ts ? (o = e, i = n, ys((s = t).precondition, o) && (n = Ds(s.fieldTransforms, i, o), (i = o.data).setAll(Ss(s)), i.setAll(n), o.convertToFoundDocument(vs(o), i).setHasLocalMutations())) : (e = e, ys(t.precondition, e) && e.convertToNoDocument(ei.min()))
            }

            function ms(t, e) {
                return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && (n = t.fieldTransforms, r = e.fieldTransforms, !!(void 0 === n && void 0 === r || n && r && Jr(n, r, function (t, e) {
                    return e = e, (t = t).field.isEqual(e.field) && (t = t.transform, e = e.transform, t instanceof Jo && e instanceof Jo || t instanceof rs && e instanceof rs ? Jr(t.elements, e.elements, Ri) : t instanceof as && e instanceof as ? Ri(t.A, e.A) : t instanceof $o && e instanceof $o)
                }))) && (0 === t.type ? t.value.isEqual(e.value) : 1 !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
                var n, r
            }

            function vs(t) {
                return t.isFoundDocument() ? t.version : ei.min()
            }
            var ws, bs, Es = (n(_s, bs = R), _s),
                Ts = (n(Is, ws = R), Is);

            function Is(t, e, n, r, i) {
                void 0 === i && (i = []);
                var o = this;
                return (o = ws.call(this) || this).key = t, o.data = e, o.fieldMask = n, o.precondition = r, o.fieldTransforms = i, o.type = 1, o
            }

            function _s(t, e, n, r) {
                void 0 === r && (r = []);
                var i = this;
                return (i = bs.call(this) || this).key = t, i.value = e, i.precondition = n, i.fieldTransforms = r, i.type = 0, i
            }

            function Ss(n) {
                var r = new Map;
                return n.fieldMask.fields.forEach(function (t) {
                    var e;
                    t.isEmpty() || (e = n.data.field(t), r.set(t, e))
                }), r
            }

            function As(t, e, n) {
                var r = new Map;
                Wr(t.length === n.length);
                for (var i = 0; i < n.length; i++) {
                    var o = t[i],
                        s = o.transform,
                        a = e.data.field(o.field);
                    r.set(o.field, (o = s, s = a, a = n[i], o instanceof Jo ? es(o, s) : o instanceof rs ? os(o, s) : a))
                }
                return r
            }

            function Ds(t, e, n) {
                for (var r, i = new Map, o = 0, s = t; o < s.length; o++) {
                    var a = s[o],
                        u = a.transform,
                        c = n.data.field(a.field);
                    i.set(a.field, (r = c, a = e, c = void 0, (u = u) instanceof $o ? (c = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: a.seconds,
                                    nanos: a.nanoseconds
                                }
                            }
                        }
                    }, r && (c.fields.__previous_value__ = r), {
                        mapValue: c
                    }) : u instanceof Jo ? es(u, r) : u instanceof rs ? os(u, r) : (u = Wo(c = u, r), r = cs(u) + cs(c.A), Fi(u) && Fi(c.A) ? Ho(r) : Qo(c.R, r))))
                }
                return i
            }

            function Ns(t) {
                this.count = t
            }
            var Cs, ks, Rs, xs = (n(Ps, Rs = R), Ps),
                Os = (n(Ls, ks = R), Ls);

            function Ls(t, e) {
                var n = this;
                return (n = ks.call(this) || this).key = t, n.precondition = e, n.type = 3, n.fieldTransforms = [], n
            }

            function Ps(t, e) {
                var n = this;
                return (n = Rs.call(this) || this).key = t, n.precondition = e, n.type = 2, n.fieldTransforms = [], n
            }

            function Ms(t) {
                switch (t) {
                    case Vr.OK:
                        return zr(), 0;
                    case Vr.CANCELLED:
                    case Vr.UNKNOWN:
                    case Vr.DEADLINE_EXCEEDED:
                    case Vr.RESOURCE_EXHAUSTED:
                    case Vr.INTERNAL:
                    case Vr.UNAVAILABLE:
                    case Vr.UNAUTHENTICATED:
                        return;
                    case Vr.INVALID_ARGUMENT:
                    case Vr.NOT_FOUND:
                    case Vr.ALREADY_EXISTS:
                    case Vr.PERMISSION_DENIED:
                    case Vr.FAILED_PRECONDITION:
                    case Vr.ABORTED:
                    case Vr.OUT_OF_RANGE:
                    case Vr.UNIMPLEMENTED:
                    case Vr.DATA_LOSS:
                        return 1;
                    default:
                        return zr(), 0
                }
            }

            function Fs(t) {
                if (void 0 === t) return Gr("GRPC error has no .code"), Vr.UNKNOWN;
                switch (t) {
                    case Cs.OK:
                        return Vr.OK;
                    case Cs.CANCELLED:
                        return Vr.CANCELLED;
                    case Cs.UNKNOWN:
                        return Vr.UNKNOWN;
                    case Cs.DEADLINE_EXCEEDED:
                        return Vr.DEADLINE_EXCEEDED;
                    case Cs.RESOURCE_EXHAUSTED:
                        return Vr.RESOURCE_EXHAUSTED;
                    case Cs.INTERNAL:
                        return Vr.INTERNAL;
                    case Cs.UNAVAILABLE:
                        return Vr.UNAVAILABLE;
                    case Cs.UNAUTHENTICATED:
                        return Vr.UNAUTHENTICATED;
                    case Cs.INVALID_ARGUMENT:
                        return Vr.INVALID_ARGUMENT;
                    case Cs.NOT_FOUND:
                        return Vr.NOT_FOUND;
                    case Cs.ALREADY_EXISTS:
                        return Vr.ALREADY_EXISTS;
                    case Cs.PERMISSION_DENIED:
                        return Vr.PERMISSION_DENIED;
                    case Cs.FAILED_PRECONDITION:
                        return Vr.FAILED_PRECONDITION;
                    case Cs.ABORTED:
                        return Vr.ABORTED;
                    case Cs.OUT_OF_RANGE:
                        return Vr.OUT_OF_RANGE;
                    case Cs.UNIMPLEMENTED:
                        return Vr.UNIMPLEMENTED;
                    case Cs.DATA_LOSS:
                        return Vr.DATA_LOSS;
                    default:
                        return zr()
                }
            }(A = Cs = Cs || {})[A.OK = 0] = "OK", A[A.CANCELLED = 1] = "CANCELLED", A[A.UNKNOWN = 2] = "UNKNOWN", A[A.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", A[A.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", A[A.NOT_FOUND = 5] = "NOT_FOUND", A[A.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", A[A.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", A[A.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", A[A.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", A[A.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", A[A.ABORTED = 10] = "ABORTED", A[A.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", A[A.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", A[A.INTERNAL = 13] = "INTERNAL", A[A.UNAVAILABLE = 14] = "UNAVAILABLE", A[A.DATA_LOSS = 15] = "DATA_LOSS";
            var Vs = (Ks.prototype.insert = function (t, e) {
                    return new Ks(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, qs.BLACK, null, null))
                }, Ks.prototype.remove = function (t) {
                    return new Ks(this.comparator, this.root.remove(t, this.comparator).copy(null, null, qs.BLACK, null, null))
                }, Ks.prototype.get = function (t) {
                    for (var e = this.root; !e.isEmpty();) {
                        var n = this.comparator(t, e.key);
                        if (0 === n) return e.value;
                        n < 0 ? e = e.left : 0 < n && (e = e.right)
                    }
                    return null
                }, Ks.prototype.indexOf = function (t) {
                    for (var e = 0, n = this.root; !n.isEmpty();) {
                        var r = this.comparator(t, n.key);
                        if (0 === r) return e + n.left.size;
                        n = r < 0 ? n.left : (e += n.left.size + 1, n.right)
                    }
                    return -1
                }, Ks.prototype.isEmpty = function () {
                    return this.root.isEmpty()
                }, Object.defineProperty(Ks.prototype, "size", {
                    get: function () {
                        return this.root.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ks.prototype.minKey = function () {
                    return this.root.minKey()
                }, Ks.prototype.maxKey = function () {
                    return this.root.maxKey()
                }, Ks.prototype.inorderTraversal = function (t) {
                    return this.root.inorderTraversal(t)
                }, Ks.prototype.forEach = function (n) {
                    this.inorderTraversal(function (t, e) {
                        return n(t, e), !1
                    })
                }, Ks.prototype.toString = function () {
                    var n = [];
                    return this.inorderTraversal(function (t, e) {
                        return n.push(t + ":" + e), !1
                    }), "{" + n.join(", ") + "}"
                }, Ks.prototype.reverseTraversal = function (t) {
                    return this.root.reverseTraversal(t)
                }, Ks.prototype.getIterator = function () {
                    return new Us(this.root, null, this.comparator, !1)
                }, Ks.prototype.getIteratorFrom = function (t) {
                    return new Us(this.root, t, this.comparator, !1)
                }, Ks.prototype.getReverseIterator = function () {
                    return new Us(this.root, null, this.comparator, !0)
                }, Ks.prototype.getReverseIteratorFrom = function (t) {
                    return new Us(this.root, t, this.comparator, !0)
                }, Ks),
                Us = (js.prototype.getNext = function () {
                    var t = this.nodeStack.pop(),
                        e = {
                            key: t.key,
                            value: t.value
                        };
                    if (this.isReverse)
                        for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                    else
                        for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left;
                    return e
                }, js.prototype.hasNext = function () {
                    return 0 < this.nodeStack.length
                }, js.prototype.peek = function () {
                    if (0 === this.nodeStack.length) return null;
                    var t = this.nodeStack[this.nodeStack.length - 1];
                    return {
                        key: t.key,
                        value: t.value
                    }
                }, js),
                qs = (Bs.prototype.copy = function (t, e, n, r, i) {
                    return new Bs(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
                }, Bs.prototype.isEmpty = function () {
                    return !1
                }, Bs.prototype.inorderTraversal = function (t) {
                    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                }, Bs.prototype.reverseTraversal = function (t) {
                    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                }, Bs.prototype.min = function () {
                    return this.left.isEmpty() ? this : this.left.min()
                }, Bs.prototype.minKey = function () {
                    return this.min().key
                }, Bs.prototype.maxKey = function () {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }, Bs.prototype.insert = function (t, e, n) {
                    var r = this,
                        i = n(t, r.key);
                    return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp()
                }, Bs.prototype.removeMin = function () {
                    if (this.left.isEmpty()) return Bs.EMPTY;
                    var t = this;
                    return (t = (t = !t.left.isRed() && !t.left.left.isRed() ? t.moveRedLeft() : t).copy(null, null, null, t.left.removeMin(), null)).fixUp()
                }, Bs.prototype.remove = function (t, e) {
                    var n, r = this;
                    if (e(t, r.key) < 0) r = (r = !(r.left.isEmpty() || r.left.isRed() || r.left.left.isRed()) ? r.moveRedLeft() : r).copy(null, null, null, r.left.remove(t, e), null);
                    else {
                        if (0 === e(t, (r = !((r = r.left.isRed() ? r.rotateRight() : r).right.isEmpty() || r.right.isRed() || r.right.left.isRed()) ? r.moveRedRight() : r).key)) {
                            if (r.right.isEmpty()) return Bs.EMPTY;
                            n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                        }
                        r = r.copy(null, null, null, null, r.right.remove(t, e))
                    }
                    return r.fixUp()
                }, Bs.prototype.isRed = function () {
                    return this.color
                }, Bs.prototype.fixUp = function () {
                    var t = this;
                    return t = (t = (t = t.right.isRed() && !t.left.isRed() ? t.rotateLeft() : t).left.isRed() && t.left.left.isRed() ? t.rotateRight() : t).left.isRed() && t.right.isRed() ? t.colorFlip() : t
                }, Bs.prototype.moveRedLeft = function () {
                    var t = this.colorFlip();
                    return t = t.right.left.isRed() ? (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip() : t
                }, Bs.prototype.moveRedRight = function () {
                    var t = this.colorFlip();
                    return t = t.left.left.isRed() ? (t = t.rotateRight()).colorFlip() : t
                }, Bs.prototype.rotateLeft = function () {
                    var t = this.copy(null, null, Bs.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, t, null)
                }, Bs.prototype.rotateRight = function () {
                    var t = this.copy(null, null, Bs.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, t)
                }, Bs.prototype.colorFlip = function () {
                    var t = this.left.copy(null, null, !this.left.color, null, null),
                        e = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, t, e)
                }, Bs.prototype.checkMaxDepth = function () {
                    var t = this.check();
                    return Math.pow(2, t) <= this.size + 1
                }, Bs.prototype.check = function () {
                    if (this.isRed() && this.left.isRed()) throw zr();
                    if (this.right.isRed()) throw zr();
                    var t = this.left.check();
                    if (t !== this.right.check()) throw zr();
                    return t + (this.isRed() ? 0 : 1)
                }, Bs);

            function Bs(t, e, n, r, i) {
                this.key = t, this.value = e, this.color = null != n ? n : Bs.RED, this.left = null != r ? r : Bs.EMPTY, this.right = null != i ? i : Bs.EMPTY, this.size = this.left.size + 1 + this.right.size
            }

            function js(t, e, n, r) {
                this.isReverse = r, this.nodeStack = [];
                for (var i = 1; !t.isEmpty();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                    else {
                        if (0 === i) {
                            this.nodeStack.push(t);
                            break
                        }
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                    }
            }

            function Ks(t, e) {
                this.comparator = t, this.root = e || qs.EMPTY
            }

            function Gs() {
                this.size = 0
            }
            qs.EMPTY = null, qs.RED = !0, qs.BLACK = !1, qs.EMPTY = (Object.defineProperty(Gs.prototype, "key", {
                get: function () {
                    throw zr()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Gs.prototype, "value", {
                get: function () {
                    throw zr()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Gs.prototype, "color", {
                get: function () {
                    throw zr()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Gs.prototype, "left", {
                get: function () {
                    throw zr()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Gs.prototype, "right", {
                get: function () {
                    throw zr()
                },
                enumerable: !1,
                configurable: !0
            }), Gs.prototype.copy = function (t, e, n, r, i) {
                return this
            }, Gs.prototype.insert = function (t, e, n) {
                return new qs(t, e)
            }, Gs.prototype.remove = function (t, e) {
                return this
            }, Gs.prototype.isEmpty = function () {
                return !0
            }, Gs.prototype.inorderTraversal = function (t) {
                return !1
            }, Gs.prototype.reverseTraversal = function (t) {
                return !1
            }, Gs.prototype.minKey = function () {
                return null
            }, Gs.prototype.maxKey = function () {
                return null
            }, Gs.prototype.isRed = function () {
                return !1
            }, Gs.prototype.checkMaxDepth = function () {
                return !0
            }, Gs.prototype.check = function () {
                return 0
            }, new Gs);
            var Qs = (Ys.prototype.has = function (t) {
                    return null !== this.data.get(t)
                }, Ys.prototype.first = function () {
                    return this.data.minKey()
                }, Ys.prototype.last = function () {
                    return this.data.maxKey()
                }, Object.defineProperty(Ys.prototype, "size", {
                    get: function () {
                        return this.data.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ys.prototype.indexOf = function (t) {
                    return this.data.indexOf(t)
                }, Ys.prototype.forEach = function (n) {
                    this.data.inorderTraversal(function (t, e) {
                        return n(t), !1
                    })
                }, Ys.prototype.forEachInRange = function (t, e) {
                    for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                        var r = n.getNext();
                        if (0 <= this.comparator(r.key, t[1])) return;
                        e(r.key)
                    }
                }, Ys.prototype.forEachWhile = function (t, e) {
                    for (var n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
                        if (!t(n.getNext().key)) return
                }, Ys.prototype.firstAfterOrEqual = function (t) {
                    t = this.data.getIteratorFrom(t);
                    return t.hasNext() ? t.getNext().key : null
                }, Ys.prototype.getIterator = function () {
                    return new Hs(this.data.getIterator())
                }, Ys.prototype.getIteratorFrom = function (t) {
                    return new Hs(this.data.getIteratorFrom(t))
                }, Ys.prototype.add = function (t) {
                    return this.copy(this.data.remove(t).insert(t, !0))
                }, Ys.prototype.delete = function (t) {
                    return this.has(t) ? this.copy(this.data.remove(t)) : this
                }, Ys.prototype.isEmpty = function () {
                    return this.data.isEmpty()
                }, Ys.prototype.unionWith = function (t) {
                    var e = this;
                    return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
                        e = e.add(t)
                    }), e
                }, Ys.prototype.isEqual = function (t) {
                    if (!(t instanceof Ys)) return !1;
                    if (this.size !== t.size) return !1;
                    for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) {
                        var r = e.getNext().key,
                            i = n.getNext().key;
                        if (0 !== this.comparator(r, i)) return !1
                    }
                    return !0
                }, Ys.prototype.toArray = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        e.push(t)
                    }), e
                }, Ys.prototype.toString = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        return e.push(t)
                    }), "SortedSet(" + e.toString() + ")"
                }, Ys.prototype.copy = function (t) {
                    var e = new Ys(this.comparator);
                    return e.data = t, e
                }, Ys),
                Hs = (Ws.prototype.getNext = function () {
                    return this.iter.getNext().key
                }, Ws.prototype.hasNext = function () {
                    return this.iter.hasNext()
                }, Ws),
                zs = new Vs(Ni.comparator);

            function Ws(t) {
                this.iter = t
            }

            function Ys(t) {
                this.comparator = t, this.data = new Vs(this.comparator)
            }
            var Xs = new Vs(Ni.comparator);
            var $s = new Vs(Ni.comparator);
            var Js = new Qs(Ni.comparator);

            function Zs() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = Js, r = 0, i = t; r < i.length; r++) var o = i[r],
                    n = n.add(o);
                return n
            }
            var ta = new Qs($r);
            var ea = (la.createSynthesizedRemoteEventForCurrentChange = function (t, e) {
                    var n = new Map;
                    return n.set(t, na.createSynthesizedTargetChangeForCurrentChange(t, e)), new la(ei.min(), n, ta, zs, Zs())
                }, la),
                na = (ha.createSynthesizedTargetChangeForCurrentChange = function (t, e) {
                    return new ha(di.EMPTY_BYTE_STRING, e, Zs(), Zs(), Zs())
                }, ha),
                ra = function (t, e, n, r) {
                    this.v = t, this.removedTargetIds = e, this.key = n, this.P = r
                },
                ia = function (t, e) {
                    this.targetId = t, this.V = e
                },
                oa = function (t, e, n, r) {
                    void 0 === n && (n = di.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                },
                sa = (Object.defineProperty(ca.prototype, "current", {
                    get: function () {
                        return this.N
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(ca.prototype, "resumeToken", {
                    get: function () {
                        return this.C
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(ca.prototype, "F", {
                    get: function () {
                        return 0 !== this.S
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(ca.prototype, "$", {
                    get: function () {
                        return this.k
                    },
                    enumerable: !1,
                    configurable: !0
                }), ca.prototype.O = function (t) {
                    0 < t.approximateByteSize() && (this.k = !0, this.C = t)
                }, ca.prototype.M = function () {
                    var n = Zs(),
                        r = Zs(),
                        i = Zs();
                    return this.D.forEach(function (t, e) {
                        switch (e) {
                            case 0:
                                n = n.add(t);
                                break;
                            case 2:
                                r = r.add(t);
                                break;
                            case 1:
                                i = i.add(t);
                                break;
                            default:
                                zr()
                        }
                    }), new na(this.C, this.N, n, r, i)
                }, ca.prototype.L = function () {
                    this.k = !1, this.D = da()
                }, ca.prototype.B = function (t, e) {
                    this.k = !0, this.D = this.D.insert(t, e)
                }, ca.prototype.q = function (t) {
                    this.k = !0, this.D = this.D.remove(t)
                }, ca.prototype.U = function () {
                    this.S += 1
                }, ca.prototype.K = function () {
                    --this.S
                }, ca.prototype.j = function () {
                    this.k = !0, this.N = !0
                }, ca),
                aa = (ua.prototype.X = function (t) {
                    for (var e = 0, n = t.v; e < n.length; e++) {
                        var r = n[e];
                        t.P && t.P.isFoundDocument() ? this.Z(r, t.P) : this.tt(r, t.key, t.P)
                    }
                    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.tt(r, t.key, t.P)
                }, ua.prototype.et = function (n) {
                    var r = this;
                    this.forEachTarget(n, function (t) {
                        var e = r.nt(t);
                        switch (n.state) {
                            case 0:
                                r.st(t) && e.O(n.resumeToken);
                                break;
                            case 1:
                                e.K(), e.F || e.L(), e.O(n.resumeToken);
                                break;
                            case 2:
                                e.K(), e.F || r.removeTarget(t);
                                break;
                            case 3:
                                r.st(t) && (e.j(), e.O(n.resumeToken));
                                break;
                            case 4:
                                r.st(t) && (r.it(t), e.O(n.resumeToken));
                                break;
                            default:
                                zr()
                        }
                    })
                }, ua.prototype.forEachTarget = function (t, n) {
                    var r = this;
                    0 < t.targetIds.length ? t.targetIds.forEach(n) : this.G.forEach(function (t, e) {
                        r.st(e) && n(e)
                    })
                }, ua.prototype.rt = function (t) {
                    var e = t.targetId,
                        n = t.V.count,
                        t = this.ot(e);
                    t && ($i(t = t.target) ? 0 === n ? (t = new Ni(t.path), this.tt(e, t, Qi.newNoDocument(t, ei.min()))) : Wr(1 === n) : this.ct(e) !== n && (this.it(e), this.Y = this.Y.add(e)))
                }, ua.prototype.ut = function (r) {
                    var i = this,
                        o = new Map;
                    this.G.forEach(function (t, e) {
                        var n = i.ot(e);
                        n && (t.current && $i(n.target) && (n = new Ni(n.target.path), null !== i.H.get(n) || i.at(e, n) || i.tt(e, n, Qi.newNoDocument(n, r))), t.$ && (o.set(e, t.M()), t.L()))
                    });
                    var s = Zs();
                    this.J.forEach(function (t, e) {
                        var n = !0;
                        e.forEachWhile(function (t) {
                            t = i.ot(t);
                            return !t || 2 === t.purpose || (n = !1)
                        }), n && (s = s.add(t))
                    });
                    var t = new ea(r, o, this.Y, this.H, s);
                    return this.H = zs, this.J = fa(), this.Y = new Qs($r), t
                }, ua.prototype.Z = function (t, e) {
                    var n;
                    this.st(t) && (n = this.at(t, e.key) ? 2 : 0, this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t)))
                }, ua.prototype.tt = function (t, e, n) {
                    var r;
                    this.st(t) && (r = this.nt(t), this.at(t, e) ? r.B(e, 1) : r.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n)))
                }, ua.prototype.removeTarget = function (t) {
                    this.G.delete(t)
                }, ua.prototype.ct = function (t) {
                    var e = this.nt(t).M();
                    return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size
                }, ua.prototype.U = function (t) {
                    this.nt(t).U()
                }, ua.prototype.nt = function (t) {
                    var e = this.G.get(t);
                    return e || (e = new sa, this.G.set(t, e)), e
                }, ua.prototype.ht = function (t) {
                    var e = this.J.get(t);
                    return e || (e = new Qs($r), this.J = this.J.insert(t, e)), e
                }, ua.prototype.st = function (t) {
                    var e = null !== this.ot(t);
                    return e || Kr("WatchChangeAggregator", "Detected inactive target", t), e
                }, ua.prototype.ot = function (t) {
                    var e = this.G.get(t);
                    return e && e.F ? null : this.W.lt(t)
                }, ua.prototype.it = function (e) {
                    var n = this;
                    this.G.set(e, new sa), this.W.getRemoteKeysForTarget(e).forEach(function (t) {
                        n.tt(e, t, null)
                    })
                }, ua.prototype.at = function (t, e) {
                    return this.W.getRemoteKeysForTarget(t).has(e)
                }, ua);

            function ua(t) {
                this.W = t, this.G = new Map, this.H = zs, this.J = fa(), this.Y = new Qs($r)
            }

            function ca() {
                this.S = 0, this.D = da(), this.C = di.EMPTY_BYTE_STRING, this.N = !1, this.k = !0
            }

            function ha(t, e, n, r, i) {
                this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
            }

            function la(t, e, n, r, i) {
                this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i
            }

            function fa() {
                return new Vs(Ni.comparator)
            }

            function da() {
                return new Vs(Ni.comparator)
            }
            var pa = {
                    asc: "ASCENDING",
                    desc: "DESCENDING"
                },
                ya = {
                    "<": "LESS_THAN",
                    "<=": "LESS_THAN_OR_EQUAL",
                    ">": "GREATER_THAN",
                    ">=": "GREATER_THAN_OR_EQUAL",
                    "==": "EQUAL",
                    "!=": "NOT_EQUAL",
                    "array-contains": "ARRAY_CONTAINS",
                    in: "IN",
                    "not-in": "NOT_IN",
                    "array-contains-any": "ARRAY_CONTAINS_ANY"
                },
                ga = function (t, e) {
                    this.databaseId = t, this.I = e
                };

            function ma(t, e) {
                return t.I ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
                    seconds: "" + e.seconds,
                    nanos: e.nanoseconds
                }
            }

            function va(t, e) {
                return t.I ? e.toBase64() : e.toUint8Array()
            }

            function wa(t) {
                return Wr(!!t), ei.fromTimestamp((t = bi(t), new ti(t.seconds, t.nanos)))
            }

            function ba(t, e) {
                return new ci(["projects", t.projectId, "databases", t.database]).child("documents").child(e).canonicalString()
            }

            function Ea(t) {
                t = ci.fromString(t);
                return Wr(Ba(t)), t
            }

            function Ta(t, e) {
                return ba(t.databaseId, e.path)
            }

            function Ia(t, e) {
                e = Ea(e);
                if (e.get(1) !== t.databaseId.projectId) throw new Ur(Vr.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + e.get(1) + " vs " + t.databaseId.projectId);
                if (e.get(3) !== t.databaseId.database) throw new Ur(Vr.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + e.get(3) + " vs " + t.databaseId.database);
                return new Ni(Da(e))
            }

            function _a(t, e) {
                return ba(t.databaseId, e)
            }

            function Sa(t) {
                t = Ea(t);
                return 4 === t.length ? ci.emptyPath() : Da(t)
            }

            function Aa(t) {
                return new ci(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString()
            }

            function Da(t) {
                return Wr(4 < t.length && "documents" === t.get(4)), t.popFirst(5)
            }

            function Na(t, e, n) {
                return {
                    name: Ta(t, e),
                    fields: n.value.mapValue.fields
                }
            }

            function Ca(t, e, n) {
                var r = Ia(t, e.name),
                    t = wa(e.updateTime),
                    e = new Ki({
                        mapValue: {
                            fields: e.fields
                        }
                    }),
                    e = Qi.newFoundDocument(r, t, e);
                return n && e.setHasCommittedMutations(), n ? e.setHasCommittedMutations() : e
            }

            function ka(t, e) {
                var n, r, i;
                if (e instanceof Es) n = {
                    update: Na(t, e.key, e.value)
                };
                else if (e instanceof xs) n = {
                    delete: Ta(t, e.key)
                };
                else if (e instanceof Ts) n = {
                    update: Na(t, e.key, e.data),
                    updateMask: (r = e.fieldMask, i = [], r.fields.forEach(function (t) {
                        return i.push(t.canonicalString())
                    }), {
                        fieldPaths: i
                    })
                };
                else {
                    if (!(e instanceof Os)) return zr();
                    n = {
                        verify: Ta(t, e.key)
                    }
                }
                return 0 < e.fieldTransforms.length && (n.updateTransforms = e.fieldTransforms.map(function (t) {
                    var e = t.transform;
                    if (e instanceof $o) return {
                        fieldPath: t.field.canonicalString(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (e instanceof Jo) return {
                        fieldPath: t.field.canonicalString(),
                        appendMissingElements: {
                            values: e.elements
                        }
                    };
                    if (e instanceof rs) return {
                        fieldPath: t.field.canonicalString(),
                        removeAllFromArray: {
                            values: e.elements
                        }
                    };
                    if (e instanceof as) return {
                        fieldPath: t.field.canonicalString(),
                        increment: e.A
                    };
                    throw zr()
                })), e.precondition.isNone || (n.currentDocument = void 0 !== (e = e.precondition).updateTime ? {
                    updateTime: ma(t, e.updateTime.toTimestamp())
                } : void 0 !== e.exists ? {
                    exists: e.exists
                } : zr()), n
            }

            function Ra(e, t) {
                var n = t.currentDocument ? void 0 !== (s = t.currentDocument).updateTime ? ds.updateTime(wa(s.updateTime)) : void 0 !== s.exists ? ds.exists(s.exists) : ds.none() : ds.none(),
                    r = t.updateTransforms ? t.updateTransforms.map(function (t) {
                        return function (t, e) {
                            var n, r = null;
                            "setToServerValue" in e ? (Wr("REQUEST_TIME" === e.setToServerValue), r = new $o) : "appendMissingElements" in e ? (n = e.appendMissingElements.values || [], r = new Jo(n)) : "removeAllFromArray" in e ? (n = e.removeAllFromArray.values || [], r = new rs(n)) : "increment" in e ? r = new as(t, e.increment) : zr();
                            e = li.fromServerFormat(e.fieldPath);
                            return new fs(e, r)
                        }(e, t)
                    }) : [];
                if (t.update) {
                    t.update.name;
                    var i = Ia(e, t.update.name),
                        o = new Ki({
                            mapValue: {
                                fields: t.update.fields
                            }
                        });
                    if (t.updateMask) {
                        var s = (s = t.updateMask.fieldPaths || [], new fi(s.map(function (t) {
                            return li.fromServerFormat(t)
                        })));
                        return new Ts(i, o, s, n, r)
                    }
                    return new Es(i, o, n, r)
                }
                if (t.delete) {
                    r = Ia(e, t.delete);
                    return new xs(r, n)
                }
                if (t.verify) {
                    t = Ia(e, t.verify);
                    return new Os(t, n)
                }
                return zr()
            }

            function xa(t, e) {
                return {
                    documents: [_a(t, e.path)]
                }
            }

            function Oa(t, e) {
                var n = {
                        structuredQuery: {}
                    },
                    r = e.path;
                null !== e.collectionGroup ? (n.parent = _a(t, r), n.structuredQuery.from = [{
                    collectionId: e.collectionGroup,
                    allDescendants: !0
                }]) : (n.parent = _a(t, r.popLast()), n.structuredQuery.from = [{
                    collectionId: r.lastSegment()
                }]);
                r = function (t) {
                    if (0 !== t.length) {
                        t = t.map(function (t) {
                            if ("==" === t.op) {
                                if (qi(t.value)) return {
                                    unaryFilter: {
                                        field: Fa(t.field),
                                        op: "IS_NAN"
                                    }
                                };
                                if (Ui(t.value)) return {
                                    unaryFilter: {
                                        field: Fa(t.field),
                                        op: "IS_NULL"
                                    }
                                }
                            } else if ("!=" === t.op) {
                                if (qi(t.value)) return {
                                    unaryFilter: {
                                        field: Fa(t.field),
                                        op: "IS_NOT_NAN"
                                    }
                                };
                                if (Ui(t.value)) return {
                                    unaryFilter: {
                                        field: Fa(t.field),
                                        op: "IS_NOT_NULL"
                                    }
                                }
                            }
                            return {
                                fieldFilter: {
                                    field: Fa(t.field),
                                    op: (e = t.op, ya[e]),
                                    value: t.value
                                }
                            };
                            var e
                        });
                        return 1 === t.length ? t[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: t
                            }
                        }
                    }
                }(e.filters);
                r && (n.structuredQuery.where = r);
                r = function (t) {
                    if (0 !== t.length) return t.map(function (t) {
                        return {
                            field: Fa((t = t).field),
                            direction: (t = t.dir, pa[t])
                        }
                    })
                }(e.orderBy);
                r && (n.structuredQuery.orderBy = r);
                r = e.limit, r = t.I || Si(r) ? r : {
                    value: r
                };
                return null !== r && (n.structuredQuery.limit = r), e.startAt && (n.structuredQuery.startAt = Pa(e.startAt)), e.endAt && (n.structuredQuery.endAt = Pa(e.endAt)), n
            }

            function La(t) {
                var e = Sa(t.parent),
                    n = t.structuredQuery,
                    r = n.from ? n.from.length : 0,
                    i = null;
                0 < r && (Wr(1 === r), (a = n.from[0]).allDescendants ? i = a.collectionId : e = e.child(a.collectionId));
                var o = [];
                n.where && (o = function e(t) {
                    return t ? void 0 !== t.unaryFilter ? [qa(t)] : void 0 !== t.fieldFilter ? [Ua(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
                        return e(t)
                    }).reduce(function (t, e) {
                        return t.concat(e)
                    }) : zr() : []
                }(n.where));
                var s = [],
                    t = null,
                    r = null,
                    a = null;
                return ko(e, i, s = n.orderBy ? n.orderBy.map(function (t) {
                    return new Ao(Va((e = t).field), function () {
                        switch (e.direction) {
                            case "ASCENDING":
                                return "asc";
                            case "DESCENDING":
                                return "desc";
                            default:
                                return
                        }
                    }());
                    var e
                }) : s, o, t = n.limit ? Si(o = "object" == typeof (o = n.limit) ? o.value : o) ? null : o : t, "F", r = n.startAt ? Ma(n.startAt) : r, a = n.endAt ? Ma(n.endAt) : a)
            }

            function Pa(t) {
                return {
                    before: t.before,
                    values: t.position
                }
            }

            function Ma(t) {
                var e = !!t.before,
                    t = t.values || [];
                return new bo(t, e)
            }

            function Fa(t) {
                return {
                    fieldPath: t.canonicalString()
                }
            }

            function Va(t) {
                return li.fromServerFormat(t.fieldPath)
            }

            function Ua(t) {
                return Zi.create(Va(t.fieldFilter.field), function () {
                    switch (t.fieldFilter.op) {
                        case "EQUAL":
                            return "==";
                        case "NOT_EQUAL":
                            return "!=";
                        case "GREATER_THAN":
                            return ">";
                        case "GREATER_THAN_OR_EQUAL":
                            return ">=";
                        case "LESS_THAN":
                            return "<";
                        case "LESS_THAN_OR_EQUAL":
                            return "<=";
                        case "ARRAY_CONTAINS":
                            return "array-contains";
                        case "IN":
                            return "in";
                        case "NOT_IN":
                            return "not-in";
                        case "ARRAY_CONTAINS_ANY":
                            return "array-contains-any";
                        case "OPERATOR_UNSPECIFIED":
                        default:
                            return zr()
                    }
                }(), t.fieldFilter.value)
            }

            function qa(t) {
                switch (t.unaryFilter.op) {
                    case "IS_NAN":
                        var e = Va(t.unaryFilter.field);
                        return Zi.create(e, "==", {
                            doubleValue: NaN
                        });
                    case "IS_NULL":
                        e = Va(t.unaryFilter.field);
                        return Zi.create(e, "==", {
                            nullValue: "NULL_VALUE"
                        });
                    case "IS_NOT_NAN":
                        var n = Va(t.unaryFilter.field);
                        return Zi.create(n, "!=", {
                            doubleValue: NaN
                        });
                    case "IS_NOT_NULL":
                        n = Va(t.unaryFilter.field);
                        return Zi.create(n, "!=", {
                            nullValue: "NULL_VALUE"
                        });
                    case "OPERATOR_UNSPECIFIED":
                    default:
                        return zr()
                }
            }

            function Ba(t) {
                return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
            }

            function ja(t) {
                for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Ka(e)), e = function (t, e) {
                    for (var n = e, r = t.length, i = 0; i < r; i++) {
                        var o = t.charAt(i);
                        switch (o) {
                            case "\0":
                                n += "\x01\x10";
                                break;
                            case "\x01":
                                n += "\x01\x11";
                                break;
                            default:
                                n += o
                        }
                    }
                    return n
                }(t.get(n), e);
                return Ka(e)
            }

            function Ka(t) {
                return t + "\x01\x01"
            }

            function Ga(t) {
                var e = t.length;
                if (Wr(2 <= e), 2 === e) return Wr("\x01" === t.charAt(0) && "\x01" === t.charAt(1)), ci.emptyPath();
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var s = t.indexOf("\x01", o);
                    switch ((s < 0 || n < s) && zr(), t.charAt(s + 1)) {
                        case "\x01":
                            var a = t.substring(o, s),
                                u = void 0;
                            0 === i.length ? u = a : (u = i += a, i = ""), r.push(u);
                            break;
                        case "\x10":
                            i += t.substring(o, s), i += "\0";
                            break;
                        case "\x11":
                            i += t.substring(o, s + 1);
                            break;
                        default:
                            zr()
                    }
                    o = s + 2
                }
                return new ci(r)
            }

            function Qa(t, e, n) {
                this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
            }
            var Ha = function (t, e) {
                this.seconds = t, this.nanoseconds = e
            };
            Qa.store = "owner", Qa.key = "owner";

            function za(t, e, n) {
                this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
            }
            za.store = "mutationQueues", za.keyPath = "userId";

            function Wa(t, e, n, r, i) {
                this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
            }
            Wa.store = "mutations", Wa.keyPath = "batchId", Wa.userMutationsIndex = "userMutationsIndex", Wa.userMutationsKeyPath = ["userId", "batchId"];
            var Ya = (Xa.prefixForUser = function (t) {
                return [t]
            }, Xa.prefixForPath = function (t, e) {
                return [t, ja(e)]
            }, Xa.key = function (t, e, n) {
                return [t, ja(e), n]
            }, Xa);

            function Xa() {}
            Ya.store = "documentMutations", Ya.PLACEHOLDER = new Ya;

            function $a(t, e) {
                this.path = t, this.readTime = e
            }

            function Ja(t, e) {
                this.path = t, this.version = e
            }
            var Za = function (t, e, n, r, i, o) {
                this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
            };
            Za.store = "remoteDocuments", Za.readTimeIndex = "readTimeIndex", Za.readTimeIndexPath = "readTime", Za.collectionReadTimeIndex = "collectionReadTimeIndex", Za.collectionReadTimeIndexPath = ["parentPath", "readTime"];

            function tu(t) {
                this.byteSize = t
            }
            tu.store = "remoteDocumentGlobal", tu.key = "remoteDocumentGlobalKey";

            function eu(t, e, n, r, i, o, s) {
                this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s
            }
            eu.store = "targets", eu.keyPath = "targetId", eu.queryTargetsIndexName = "queryTargetsIndex", eu.queryTargetsKeyPath = ["canonicalId", "targetId"];
            var nu = function (t, e, n) {
                this.targetId = t, this.path = e, this.sequenceNumber = n
            };
            nu.store = "targetDocuments", nu.keyPath = ["targetId", "path"], nu.documentTargetsIndex = "documentTargetsIndex", nu.documentTargetsKeyPath = ["path", "targetId"];

            function ru(t, e, n, r) {
                this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
            }
            ru.key = "targetGlobalKey", ru.store = "targetGlobal";

            function iu(t, e) {
                this.collectionId = t, this.parent = e
            }
            iu.store = "collectionParents", iu.keyPath = ["collectionId", "parent"];

            function ou(t, e, n, r) {
                this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
            }
            ou.store = "clientMetadata", ou.keyPath = "clientId";

            function su(t, e, n) {
                this.bundleId = t, this.createTime = e, this.version = n
            }
            su.store = "bundles", su.keyPath = "bundleId";

            function au(t, e, n) {
                this.name = t, this.readTime = e, this.bundledQuery = n
            }
            au.store = "namedQueries", au.keyPath = "name";
            var uu, cu = s(s([], s(s([], s(s([], s(s([], [za.store, Wa.store, Ya.store, Za.store, eu.store, Qa.store, ru.store, nu.store]), [ou.store])), [tu.store])), [iu.store])), [su.store, au.store]),
                hu = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                R = (Tu.prototype.addOnCommittedListener = function (t) {
                    this.onCommittedListeners.push(t)
                }, Tu.prototype.raiseOnCommittedEvent = function () {
                    this.onCommittedListeners.forEach(function (t) {
                        return t()
                    })
                }, Tu),
                lu = function () {
                    var n = this;
                    this.promise = new Promise(function (t, e) {
                        n.resolve = t, n.reject = e
                    })
                },
                fu = (Eu.prototype.catch = function (t) {
                    return this.next(void 0, t)
                }, Eu.prototype.next = function (r, i) {
                    var o = this;
                    return this.callbackAttached && zr(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new Eu(function (e, n) {
                        o.nextCallback = function (t) {
                            o.wrapSuccess(r, t).next(e, n)
                        }, o.catchCallback = function (t) {
                            o.wrapFailure(i, t).next(e, n)
                        }
                    })
                }, Eu.prototype.toPromise = function () {
                    var n = this;
                    return new Promise(function (t, e) {
                        n.next(t, e)
                    })
                }, Eu.prototype.wrapUserFunction = function (t) {
                    try {
                        var e = t();
                        return e instanceof Eu ? e : Eu.resolve(e)
                    } catch (t) {
                        return Eu.reject(t)
                    }
                }, Eu.prototype.wrapSuccess = function (t, e) {
                    return t ? this.wrapUserFunction(function () {
                        return t(e)
                    }) : Eu.resolve(e)
                }, Eu.prototype.wrapFailure = function (t, e) {
                    return t ? this.wrapUserFunction(function () {
                        return t(e)
                    }) : Eu.reject(e)
                }, Eu.resolve = function (n) {
                    return new Eu(function (t, e) {
                        t(n)
                    })
                }, Eu.reject = function (n) {
                    return new Eu(function (t, e) {
                        e(n)
                    })
                }, Eu.waitFor = function (t) {
                    return new Eu(function (e, n) {
                        var r = 0,
                            i = 0,
                            o = !1;
                        t.forEach(function (t) {
                            ++r, t.next(function () {
                                ++i, o && i === r && e()
                            }, function (t) {
                                return n(t)
                            })
                        }), o = !0, i === r && e()
                    })
                }, Eu.or = function (t) {
                    for (var n = Eu.resolve(!1), e = 0, r = t; e < r.length; e++) ! function (e) {
                        n = n.next(function (t) {
                            return t ? Eu.resolve(t) : e()
                        })
                    }(r[e]);
                    return n
                }, Eu.forEach = function (t, n) {
                    var r = this,
                        i = [];
                    return t.forEach(function (t, e) {
                        i.push(n.call(r, t, e))
                    }), this.waitFor(i)
                }, Eu),
                du = (bu.open = function (t, e, n, r) {
                    try {
                        return new bu(e, t.transaction(r, n))
                    } catch (t) {
                        throw new gu(e, t)
                    }
                }, Object.defineProperty(bu.prototype, "dt", {
                    get: function () {
                        return this.ft.promise
                    },
                    enumerable: !1,
                    configurable: !0
                }), bu.prototype.abort = function (t) {
                    t && this.ft.reject(t), this.aborted || (Kr("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                }, bu.prototype.store = function (t) {
                    t = this.transaction.objectStore(t);
                    return new _u(t)
                }, bu),
                pu = (wu.delete = function (t) {
                    return Kr("SimpleDb", "Removing database:", t), Au(window.indexedDB.deleteDatabase(t)).toPromise()
                }, wu.yt = function () {
                    if ("undefined" == typeof indexedDB) return !1;
                    if (wu.gt()) return !0;
                    var t = h(),
                        e = wu._t(t),
                        n = 0 < e && e < 10,
                        e = wu.Et(t),
                        e = 0 < e && e < 4.5;
                    return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || e)
                }, wu.gt = function () {
                    var t;
                    return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Tt)
                }, wu.It = function (t, e) {
                    return t.store(e)
                }, wu._t = function (t) {
                    t = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), t = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(t)
                }, wu.Et = function (t) {
                    t = t.match(/Android ([\d.]+)/i), t = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(t)
                }, wu.prototype.At = function (o) {
                    return y(this, void 0, void 0, function () {
                        var e, i = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.db ? [3, 2] : (Kr("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise(function (e, n) {
                                        var r = indexedDB.open(i.name, i.version);
                                        r.onsuccess = function (t) {
                                            t = t.target.result;
                                            e(t)
                                        }, r.onblocked = function () {
                                            n(new gu(o, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                                        }, r.onerror = function (t) {
                                            t = t.target.error;
                                            "VersionError" === t.name ? n(new Ur(Vr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new gu(o, t))
                                        }, r.onupgradeneeded = function (t) {
                                            Kr("SimpleDb", 'Database "' + i.name + '" requires upgrade from version:', t.oldVersion);
                                            var e = t.target.result;
                                            i.wt.Rt(e, r.transaction, t.oldVersion, i.version).next(function () {
                                                Kr("SimpleDb", "Database upgrade to version " + i.version + " complete")
                                            })
                                        }
                                    })]);
                                case 1:
                                    e.db = t.sent(), t.label = 2;
                                case 2:
                                    return [2, (this.bt && (this.db.onversionchange = function (t) {
                                        return i.bt(t)
                                    }), this.db)]
                            }
                        })
                    })
                }, wu.prototype.vt = function (e) {
                    this.bt = e, this.db && (this.db.onversionchange = function (t) {
                        return e(t)
                    })
                }, wu.prototype.runTransaction = function (a, n, u, c) {
                    return y(this, void 0, void 0, function () {
                        var i, o, s, e;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    i = "readonly" === n, o = 0, e = function () {
                                        var e, n, r;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    ++o, t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 4, , 5]), [4, s.At(a)];
                                                case 2:
                                                    return s.db = t.sent(), e = du.open(s.db, a, i ? "readonly" : "readwrite", u), n = c(e).catch(function (t) {
                                                        return e.abort(t), fu.reject(t)
                                                    }).toPromise(), r = {}, n.catch(function () {}), [4, e.dt];
                                                case 3:
                                                    return [2, (r.value = (t.sent(), n), r)];
                                                case 4:
                                                    return n = t.sent(), r = "FirebaseError" !== n.name && o < 3, Kr("SimpleDb", "Transaction failed with error:", n.message, "Retrying:", r), s.close(), r ? [3, 5] : [2, {
                                                        value: Promise.reject(n)
                                                    }];
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    }, s = this, t.label = 1;
                                case 1:
                                    return [5, e()];
                                case 2:
                                    if ("object" == typeof (e = t.sent())) return [2, e.value];
                                    t.label = 3;
                                case 3:
                                    return [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, wu.prototype.close = function () {
                    this.db && this.db.close(), this.db = void 0
                }, wu),
                yu = (Object.defineProperty(vu.prototype, "isDone", {
                    get: function () {
                        return this.Vt
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(vu.prototype, "Dt", {
                    get: function () {
                        return this.St
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(vu.prototype, "cursor", {
                    set: function (t) {
                        this.Pt = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), vu.prototype.done = function () {
                    this.Vt = !0
                }, vu.prototype.Ct = function (t) {
                    this.St = t
                }, vu.prototype.delete = function () {
                    return Au(this.Pt.delete())
                }, vu),
                gu = (n(mu, uu = Ur), mu);

            function mu(t, e) {
                var n = this;
                return (n = uu.call(this, Vr.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + e) || this).name = "IndexedDbTransactionError", n
            }

            function vu(t) {
                this.Pt = t, this.Vt = !1, this.St = null
            }

            function wu(t, e, n) {
                this.name = t, this.version = e, this.wt = n, 12.2 === wu._t(h()) && Gr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
            }

            function bu(e, t) {
                var n = this;
                this.action = e, this.transaction = t, this.aborted = !1, this.ft = new lu, this.transaction.oncomplete = function () {
                    n.ft.resolve()
                }, this.transaction.onabort = function () {
                    t.error ? n.ft.reject(new gu(e, t.error)) : n.ft.resolve()
                }, this.transaction.onerror = function (t) {
                    t = Nu(t.target.error);
                    n.ft.reject(new gu(e, t))
                }
            }

            function Eu(t) {
                var e = this;
                this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function (t) {
                    e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t)
                }, function (t) {
                    e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t)
                })
            }

            function Tu() {
                this.onCommittedListeners = []
            }

            function Iu(t) {
                return "IndexedDbTransactionError" === t.name
            }
            var _u = (Su.prototype.put = function (t, e) {
                t = void 0 !== e ? (Kr("SimpleDb", "PUT", this.store.name, t, e), this.store.put(e, t)) : (Kr("SimpleDb", "PUT", this.store.name, "<auto-key>", t), this.store.put(t));
                return Au(t)
            }, Su.prototype.add = function (t) {
                return Kr("SimpleDb", "ADD", this.store.name, t, t), Au(this.store.add(t))
            }, Su.prototype.get = function (e) {
                var n = this;
                return Au(this.store.get(e)).next(function (t) {
                    return Kr("SimpleDb", "GET", n.store.name, e, t = void 0 === t ? null : t), t
                })
            }, Su.prototype.delete = function (t) {
                return Kr("SimpleDb", "DELETE", this.store.name, t), Au(this.store.delete(t))
            }, Su.prototype.count = function () {
                return Kr("SimpleDb", "COUNT", this.store.name), Au(this.store.count())
            }, Su.prototype.Nt = function (t, e) {
                var e = this.cursor(this.options(t, e)),
                    n = [];
                return this.xt(e, function (t, e) {
                    n.push(e)
                }).next(function () {
                    return n
                })
            }, Su.prototype.kt = function (t, e) {
                Kr("SimpleDb", "DELETE ALL", this.store.name);
                e = this.options(t, e);
                e.Ft = !1;
                e = this.cursor(e);
                return this.xt(e, function (t, e, n) {
                    return n.delete()
                })
            }, Su.prototype.$t = function (t, e) {
                e ? n = t : (n = {}, e = t);
                var n = this.cursor(n);
                return this.xt(n, e)
            }, Su.prototype.Ot = function (r) {
                var t = this.cursor({});
                return new fu(function (n, e) {
                    t.onerror = function (t) {
                        t = Nu(t.target.error);
                        e(t)
                    }, t.onsuccess = function (t) {
                        var e = t.target.result;
                        e ? r(e.primaryKey, e.value).next(function (t) {
                            t ? e.continue() : n()
                        }) : n()
                    }
                })
            }, Su.prototype.xt = function (t, i) {
                var o = [];
                return new fu(function (r, e) {
                    t.onerror = function (t) {
                        e(t.target.error)
                    }, t.onsuccess = function (t) {
                        var e, n = t.target.result;
                        n ? (e = new yu(n), (t = i(n.primaryKey, n.value, e)) instanceof fu && (t = t.catch(function (t) {
                            return e.done(), fu.reject(t)
                        }), o.push(t)), e.isDone ? r() : null === e.Dt ? n.continue() : n.continue(e.Dt)) : r()
                    }
                }).next(function () {
                    return fu.waitFor(o)
                })
            }, Su.prototype.options = function (t, e) {
                var n;
                return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
                    index: n,
                    range: e
                }
            }, Su.prototype.cursor = function (t) {
                var e = "next";
                if (t.reverse && (e = "prev"), t.index) {
                    var n = this.store.index(t.index);
                    return t.Ft ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                }
                return this.store.openCursor(t.range, e)
            }, Su);

            function Su(t) {
                this.store = t
            }

            function Au(t) {
                return new fu(function (e, n) {
                    t.onsuccess = function (t) {
                        t = t.target.result;
                        e(t)
                    }, t.onerror = function (t) {
                        t = Nu(t.target.error);
                        n(t)
                    }
                })
            }
            var Du = !1;

            function Nu(t) {
                var e = pu._t(h());
                if (12.2 <= e && e < 13) {
                    e = "An internal error was encountered in the Indexed Database server";
                    if (0 <= t.message.indexOf(e)) {
                        var n = new Ur("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + e + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                        return Du || (Du = !0, setTimeout(function () {
                            throw n
                        }, 0)), n
                    }
                }
                return t
            }
            var Cu, ku = (n(Ru, Cu = R), Ru);

            function Ru(t, e) {
                var n = this;
                return (n = Cu.call(this) || this).Mt = t, n.currentSequenceNumber = e, n
            }

            function xu(t, e) {
                return pu.It(t.Mt, e)
            }
            var Ou = (Uu.prototype.applyToRemoteDocument = function (t, e) {
                    for (var n, r, i, o, s, a, u = e.mutationResults, c = 0; c < this.mutations.length; c++) {
                        var h = this.mutations[c];
                        h.key.isEqual(t.key) && (n = h, r = t, i = u[c], h = a = s = o = void 0, n instanceof Es ? (s = r, a = i, h = (o = n).value.clone(), o = As(o.fieldTransforms, s, a.transformResults), h.setAll(o), s.convertToFoundDocument(a.version, h).setHasCommittedMutations()) : n instanceof Ts ? (o = r, s = i, ys((a = n).precondition, o) ? (h = As(a.fieldTransforms, o, s.transformResults), (n = o.data).setAll(Ss(a)), n.setAll(h), o.convertToFoundDocument(s.version, n).setHasCommittedMutations()) : o.convertToUnknownDocument(s.version)) : r.convertToNoDocument(i.version).setHasCommittedMutations())
                    }
                }, Uu.prototype.applyToLocalView = function (t) {
                    for (var e = 0, n = this.baseMutations; e < n.length; e++)(r = n[e]).key.isEqual(t.key) && gs(r, t, this.localWriteTime);
                    for (var r, i = 0, o = this.mutations; i < o.length; i++)(r = o[i]).key.isEqual(t.key) && gs(r, t, this.localWriteTime)
                }, Uu.prototype.applyToLocalDocumentSet = function (n) {
                    var r = this;
                    this.mutations.forEach(function (t) {
                        var e = n.get(t.key),
                            t = e;
                        r.applyToLocalView(t), e.isValidDocument() || t.convertToNoDocument(ei.min())
                    })
                }, Uu.prototype.keys = function () {
                    return this.mutations.reduce(function (t, e) {
                        return t.add(e.key)
                    }, Zs())
                }, Uu.prototype.isEqual = function (t) {
                    return this.batchId === t.batchId && Jr(this.mutations, t.mutations, ms) && Jr(this.baseMutations, t.baseMutations, ms)
                }, Uu),
                Lu = (Vu.from = function (t, e, n) {
                    Wr(t.mutations.length === n.length);
                    for (var r = $s, i = t.mutations, o = 0; o < i.length; o++) r = r.insert(i[o].key, n[o].version);
                    return new Vu(t, e, n, r)
                }, Vu),
                Pu = (Fu.prototype.withSequenceNumber = function (t) {
                    return new Fu(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken)
                }, Fu.prototype.withResumeToken = function (t, e) {
                    return new Fu(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t)
                }, Fu.prototype.withLastLimboFreeSnapshotVersion = function (t) {
                    return new Fu(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken)
                }, Fu),
                Mu = function (t) {
                    this.Lt = t
                };

            function Fu(t, e, n, r, i, o, s) {
                void 0 === i && (i = ei.min()), void 0 === o && (o = ei.min()), void 0 === s && (s = di.EMPTY_BYTE_STRING), this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s
            }

            function Vu(t, e, n, r) {
                this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r
            }

            function Uu(t, e, n, r) {
                this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r
            }

            function qu(t, e) {
                if (e.document) return Ca(t.Lt, e.document, !!e.hasCommittedMutations);
                if (e.noDocument) {
                    var n = Ni.fromSegments(e.noDocument.path),
                        r = Qu(e.noDocument.readTime),
                        n = Qi.newNoDocument(n, r);
                    return e.hasCommittedMutations ? n.setHasCommittedMutations() : n
                }
                if (e.unknownDocument) {
                    n = Ni.fromSegments(e.unknownDocument.path), r = Qu(e.unknownDocument.version);
                    return Qi.newUnknownDocument(n, r)
                }
                return zr()
            }

            function Bu(t, e, n) {
                var r = ju(n),
                    n = e.key.path.popLast().toArray();
                if (e.isFoundDocument()) {
                    var i = {
                            name: Ta(o = t.Lt, (s = e).key),
                            fields: s.data.value.mapValue.fields,
                            updateTime: ma(o, s.version.toTimestamp())
                        },
                        o = e.hasCommittedMutations;
                    return new Za(null, null, i, o, r, n)
                }
                if (e.isNoDocument()) {
                    var s = e.key.path.toArray(),
                        i = Gu(e.version),
                        o = e.hasCommittedMutations;
                    return new Za(null, new $a(s, i), null, o, r, n)
                }
                if (e.isUnknownDocument()) {
                    o = e.key.path.toArray(), e = Gu(e.version);
                    return new Za(new Ja(o, e), null, null, !0, r, n)
                }
                return zr()
            }

            function ju(t) {
                t = t.toTimestamp();
                return [t.seconds, t.nanoseconds]
            }

            function Ku(t) {
                t = new ti(t[0], t[1]);
                return ei.fromTimestamp(t)
            }

            function Gu(t) {
                t = t.toTimestamp();
                return new Ha(t.seconds, t.nanoseconds)
            }

            function Qu(t) {
                t = new ti(t.seconds, t.nanoseconds);
                return ei.fromTimestamp(t)
            }

            function Hu(e, t) {
                for (var n = (t.baseMutations || []).map(function (t) {
                        return Ra(e.Lt, t)
                    }), r = 0; r < t.mutations.length - 1; ++r) {
                    var i, o = t.mutations[r];
                    r + 1 < t.mutations.length && void 0 !== t.mutations[r + 1].transform && (i = t.mutations[r + 1], o.updateTransforms = i.transform.fieldTransforms, t.mutations.splice(r + 1, 1), ++r)
                }
                var s = t.mutations.map(function (t) {
                        return Ra(e.Lt, t)
                    }),
                    a = ti.fromMillis(t.localWriteTimeMs);
                return new Ou(t.batchId, a, n, s)
            }

            function zu(t) {
                var e = Qu(t.readTime),
                    n = void 0 !== t.lastLimboFreeSnapshotVersion ? Qu(t.lastLimboFreeSnapshotVersion) : ei.min(),
                    r = void 0 !== t.query.documents ? (Wr(1 === (r = t.query).documents.length), Vo(Ro(Sa(r.documents[0])))) : Vo(La(t.query));
                return new Pu(r, t.targetId, 0, t.lastListenSequenceNumber, e, n, di.fromBase64String(t.resumeToken))
            }

            function Wu(t, e) {
                var n = Gu(e.snapshotVersion),
                    r = Gu(e.lastLimboFreeSnapshotVersion),
                    i = ($i(e.target) ? xa : Oa)(t.Lt, e.target),
                    t = e.resumeToken.toBase64();
                return new eu(e.targetId, Yi(e.target), n, t, e.sequenceNumber, r, i)
            }

            function Yu(t) {
                var e = La({
                    parent: t.parent,
                    structuredQuery: t.structuredQuery
                });
                return "LAST" === t.limitType ? Uo(e, e.limit, "L") : e
            }
            var Xu = ($u.prototype.getBundleMetadata = function (t, e) {
                return Ju(t).get(e).next(function (t) {
                    if (t) return {
                        id: (t = t).bundleId,
                        createTime: Qu(t.createTime),
                        version: t.version
                    }
                })
            }, $u.prototype.saveBundleMetadata = function (t, e) {
                return Ju(t).put({
                    bundleId: (e = e).id,
                    createTime: Gu(wa(e.createTime)),
                    version: e.version
                })
            }, $u.prototype.getNamedQuery = function (t, e) {
                return Zu(t).get(e).next(function (t) {
                    if (t) return {
                        name: (t = t).name,
                        query: Yu(t.bundledQuery),
                        readTime: Qu(t.readTime)
                    }
                })
            }, $u.prototype.saveNamedQuery = function (t, e) {
                return Zu(t).put({
                    name: (e = e).name,
                    readTime: Gu(wa(e.readTime)),
                    bundledQuery: e.bundledQuery
                })
            }, $u);

            function $u() {}

            function Ju(t) {
                return xu(t, su.store)
            }

            function Zu(t) {
                return xu(t, au.store)
            }
            var tc = (oc.prototype.addToCollectionParentIndex = function (t, e) {
                    return this.Bt.add(e), fu.resolve()
                }, oc.prototype.getCollectionParents = function (t, e) {
                    return fu.resolve(this.Bt.getEntries(e))
                }, oc),
                ec = (ic.prototype.add = function (t) {
                    var e = t.lastSegment(),
                        n = t.popLast(),
                        r = this.index[e] || new Qs(ci.comparator),
                        t = !r.has(n);
                    return this.index[e] = r.add(n), t
                }, ic.prototype.has = function (t) {
                    var e = t.lastSegment(),
                        t = t.popLast(),
                        e = this.index[e];
                    return e && e.has(t)
                }, ic.prototype.getEntries = function (t) {
                    return (this.index[t] || new Qs(ci.comparator)).toArray()
                }, ic),
                nc = (rc.prototype.addToCollectionParentIndex = function (t, e) {
                    var n = this;
                    if (this.qt.has(e)) return fu.resolve();
                    var r = e.lastSegment(),
                        i = e.popLast();
                    t.addOnCommittedListener(function () {
                        n.qt.add(e)
                    });
                    i = {
                        collectionId: r,
                        parent: ja(i)
                    };
                    return sc(t).put(i)
                }, rc.prototype.getCollectionParents = function (t, i) {
                    var o = [],
                        e = IDBKeyRange.bound([i, ""], [Zr(i), ""], !1, !0);
                    return sc(t).Nt(e).next(function (t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e];
                            if (r.collectionId !== i) break;
                            o.push(Ga(r.parent))
                        }
                        return o
                    })
                }, rc);

            function rc() {
                this.qt = new ec
            }

            function ic() {
                this.index = {}
            }

            function oc() {
                this.Bt = new ec
            }

            function sc(t) {
                return xu(t, iu.store)
            }
            var ac = {
                    didRun: !1,
                    sequenceNumbersCollected: 0,
                    targetsRemoved: 0,
                    documentsRemoved: 0
                },
                uc = (cc.withCacheSize = function (t) {
                    return new cc(t, cc.DEFAULT_COLLECTION_PERCENTILE, cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                }, cc);

            function cc(t, e, n) {
                this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n
            }

            function hc(t, e, n) {
                var r = t.store(Wa.store),
                    i = t.store(Ya.store),
                    o = [],
                    t = IDBKeyRange.only(n.batchId),
                    s = 0,
                    t = r.$t({
                        range: t
                    }, function (t, e, n) {
                        return s++, n.delete()
                    });
                o.push(t.next(function () {
                    Wr(1 === s)
                }));
                for (var a = [], u = 0, c = n.mutations; u < c.length; u++) {
                    var h = c[u],
                        l = Ya.key(e, h.key.path, n.batchId);
                    o.push(i.delete(l)), a.push(h.key)
                }
                return fu.waitFor(o).next(function () {
                    return a
                })
            }

            function lc(t) {
                if (!t) return 0;
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw zr();
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            uc.DEFAULT_COLLECTION_PERCENTILE = 10, uc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, uc.DEFAULT = new uc(41943040, uc.DEFAULT_COLLECTION_PERCENTILE, uc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), uc.DISABLED = new uc(-1, 0, 0);
            var fc = (dc.Qt = function (t, e, n, r) {
                return Wr("" !== t.uid), new dc(t.isAuthenticated() ? t.uid : "", e, n, r)
            }, dc.prototype.checkEmpty = function (t) {
                var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                return yc(t).$t({
                    index: Wa.userMutationsIndex,
                    range: e
                }, function (t, e, n) {
                    r = !1, n.done()
                }).next(function () {
                    return r
                })
            }, dc.prototype.addMutationBatch = function (p, y, g, m) {
                var v = this,
                    w = gc(p),
                    b = yc(p);
                return b.add({}).next(function (t) {
                    Wr("number" == typeof t);
                    for (var e, n, r, i, o, s = new Ou(t, y, g, m), a = (e = v.R, n = v.userId, i = (r = s).baseMutations.map(function (t) {
                            return ka(e.Lt, t)
                        }), o = r.mutations.map(function (t) {
                            return ka(e.Lt, t)
                        }), new Wa(n, r.batchId, r.localWriteTime.toMillis(), i, o)), u = [], c = new Qs(function (t, e) {
                            return $r(t.canonicalString(), e.canonicalString())
                        }), h = 0, l = m; h < l.length; h++) {
                        var f = l[h],
                            d = Ya.key(v.userId, f.key.path, t),
                            c = c.add(f.key.path.popLast());
                        u.push(b.put(a)), u.push(w.put(d, Ya.PLACEHOLDER))
                    }
                    return c.forEach(function (t) {
                        u.push(v.Ut.addToCollectionParentIndex(p, t))
                    }), p.addOnCommittedListener(function () {
                        v.Kt[t] = s.keys()
                    }), fu.waitFor(u).next(function () {
                        return s
                    })
                })
            }, dc.prototype.lookupMutationBatch = function (t, e) {
                var n = this;
                return yc(t).get(e).next(function (t) {
                    return t ? (Wr(t.userId === n.userId), Hu(n.R, t)) : null
                })
            }, dc.prototype.jt = function (t, e) {
                var n = this;
                return this.Kt[e] ? fu.resolve(this.Kt[e]) : this.lookupMutationBatch(t, e).next(function (t) {
                    if (t) {
                        t = t.keys();
                        return n.Kt[e] = t
                    }
                    return null
                })
            }, dc.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
                var r = this,
                    i = e + 1,
                    e = IDBKeyRange.lowerBound([this.userId, i]),
                    o = null;
                return yc(t).$t({
                    index: Wa.userMutationsIndex,
                    range: e
                }, function (t, e, n) {
                    e.userId === r.userId && (Wr(e.batchId >= i), o = Hu(r.R, e)), n.done()
                }).next(function () {
                    return o
                })
            }, dc.prototype.getHighestUnacknowledgedBatchId = function (t) {
                var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                    r = -1;
                return yc(t).$t({
                    index: Wa.userMutationsIndex,
                    range: e,
                    reverse: !0
                }, function (t, e, n) {
                    r = e.batchId, n.done()
                }).next(function () {
                    return r
                })
            }, dc.prototype.getAllMutationBatches = function (t) {
                var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                return yc(t).Nt(Wa.userMutationsIndex, n).next(function (t) {
                    return t.map(function (t) {
                        return Hu(e.R, t)
                    })
                })
            }, dc.prototype.getAllMutationBatchesAffectingDocumentKey = function (o, s) {
                var a = this,
                    t = Ya.prefixForPath(this.userId, s.path),
                    t = IDBKeyRange.lowerBound(t),
                    u = [];
                return gc(o).$t({
                    range: t
                }, function (t, e, n) {
                    var r = t[0],
                        i = t[1],
                        t = t[2],
                        i = Ga(i);
                    if (r === a.userId && s.path.isEqual(i)) return yc(o).get(t).next(function (t) {
                        if (!t) throw zr();
                        Wr(t.userId === a.userId), u.push(Hu(a.R, t))
                    });
                    n.done()
                }).next(function () {
                    return u
                })
            }, dc.prototype.getAllMutationBatchesAffectingDocumentKeys = function (e, t) {
                var s = this,
                    a = new Qs($r),
                    n = [];
                return t.forEach(function (o) {
                    var t = Ya.prefixForPath(s.userId, o.path),
                        t = IDBKeyRange.lowerBound(t),
                        t = gc(e).$t({
                            range: t
                        }, function (t, e, n) {
                            var r = t[0],
                                i = t[1],
                                t = t[2],
                                i = Ga(i);
                            r === s.userId && o.path.isEqual(i) ? a = a.add(t) : n.done()
                        });
                    n.push(t)
                }), fu.waitFor(n).next(function () {
                    return s.Wt(e, a)
                })
            }, dc.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
                var o = this,
                    s = e.path,
                    a = s.length + 1,
                    e = Ya.prefixForPath(this.userId, s),
                    e = IDBKeyRange.lowerBound(e),
                    u = new Qs($r);
                return gc(t).$t({
                    range: e
                }, function (t, e, n) {
                    var r = t[0],
                        i = t[1],
                        t = t[2],
                        i = Ga(i);
                    r === o.userId && s.isPrefixOf(i) ? i.length === a && (u = u.add(t)) : n.done()
                }).next(function () {
                    return o.Wt(t, u)
                })
            }, dc.prototype.Wt = function (e, t) {
                var n = this,
                    r = [],
                    i = [];
                return t.forEach(function (t) {
                    i.push(yc(e).get(t).next(function (t) {
                        if (null === t) throw zr();
                        Wr(t.userId === n.userId), r.push(Hu(n.R, t))
                    }))
                }), fu.waitFor(i).next(function () {
                    return r
                })
            }, dc.prototype.removeMutationBatch = function (e, n) {
                var r = this;
                return hc(e.Mt, this.userId, n).next(function (t) {
                    return e.addOnCommittedListener(function () {
                        r.Gt(n.batchId)
                    }), fu.forEach(t, function (t) {
                        return r.referenceDelegate.markPotentiallyOrphaned(e, t)
                    })
                })
            }, dc.prototype.Gt = function (t) {
                delete this.Kt[t]
            }, dc.prototype.performConsistencyCheck = function (e) {
                var i = this;
                return this.checkEmpty(e).next(function (t) {
                    if (!t) return fu.resolve();
                    var t = IDBKeyRange.lowerBound(Ya.prefixForUser(i.userId)),
                        r = [];
                    return gc(e).$t({
                        range: t
                    }, function (t, e, n) {
                        t[0] === i.userId ? (t = Ga(t[1]), r.push(t)) : n.done()
                    }).next(function () {
                        Wr(0 === r.length)
                    })
                })
            }, dc.prototype.containsKey = function (t, e) {
                return pc(t, this.userId, e)
            }, dc.prototype.zt = function (t) {
                var e = this;
                return mc(t).get(this.userId).next(function (t) {
                    return t || new za(e.userId, -1, "")
                })
            }, dc);

            function dc(t, e, n, r) {
                this.userId = t, this.R = e, this.Ut = n, this.referenceDelegate = r, this.Kt = {}
            }

            function pc(t, o, e) {
                var e = Ya.prefixForPath(o, e.path),
                    s = e[1],
                    e = IDBKeyRange.lowerBound(e),
                    a = !1;
                return gc(t).$t({
                    range: e,
                    Ft: !0
                }, function (t, e, n) {
                    var r = t[0],
                        i = t[1];
                    t[2], r === o && i === s && (a = !0), n.done()
                }).next(function () {
                    return a
                })
            }

            function yc(t) {
                return xu(t, Wa.store)
            }

            function gc(t) {
                return xu(t, Ya.store)
            }

            function mc(t) {
                return xu(t, za.store)
            }
            var vc = (Ec.prototype.next = function () {
                    return this.Ht += 2, this.Ht
                }, Ec.Jt = function () {
                    return new Ec(0)
                }, Ec.Yt = function () {
                    return new Ec(-1)
                }, Ec),
                wc = (bc.prototype.allocateTargetId = function (n) {
                    var r = this;
                    return this.Xt(n).next(function (t) {
                        var e = new vc(t.highestTargetId);
                        return t.highestTargetId = e.next(), r.Zt(n, t).next(function () {
                            return t.highestTargetId
                        })
                    })
                }, bc.prototype.getLastRemoteSnapshotVersion = function (t) {
                    return this.Xt(t).next(function (t) {
                        return ei.fromTimestamp(new ti(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                    })
                }, bc.prototype.getHighestSequenceNumber = function (t) {
                    return this.Xt(t).next(function (t) {
                        return t.highestListenSequenceNumber
                    })
                }, bc.prototype.setTargetsMetadata = function (e, n, r) {
                    var i = this;
                    return this.Xt(e).next(function (t) {
                        return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.Zt(e, t)
                    })
                }, bc.prototype.addTargetData = function (e, n) {
                    var r = this;
                    return this.te(e, n).next(function () {
                        return r.Xt(e).next(function (t) {
                            return t.targetCount += 1, r.ee(n, t), r.Zt(e, t)
                        })
                    })
                }, bc.prototype.updateTargetData = function (t, e) {
                    return this.te(t, e)
                }, bc.prototype.removeTargetData = function (e, t) {
                    var n = this;
                    return this.removeMatchingKeysForTargetId(e, t.targetId).next(function () {
                        return Tc(e).delete(t.targetId)
                    }).next(function () {
                        return n.Xt(e)
                    }).next(function (t) {
                        return Wr(0 < t.targetCount), --t.targetCount, n.Zt(e, t)
                    })
                }, bc.prototype.removeTargets = function (n, r, i) {
                    var o = this,
                        s = 0,
                        a = [];
                    return Tc(n).$t(function (t, e) {
                        e = zu(e);
                        e.sequenceNumber <= r && null === i.get(e.targetId) && (s++, a.push(o.removeTargetData(n, e)))
                    }).next(function () {
                        return fu.waitFor(a)
                    }).next(function () {
                        return s
                    })
                }, bc.prototype.forEachTarget = function (t, n) {
                    return Tc(t).$t(function (t, e) {
                        e = zu(e);
                        n(e)
                    })
                }, bc.prototype.Xt = function (t) {
                    return Ic(t).get(ru.key).next(function (t) {
                        return Wr(null !== t), t
                    })
                }, bc.prototype.Zt = function (t, e) {
                    return Ic(t).put(ru.key, e)
                }, bc.prototype.te = function (t, e) {
                    return Tc(t).put(Wu(this.R, e))
                }, bc.prototype.ee = function (t, e) {
                    var n = !1;
                    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
                }, bc.prototype.getTargetCount = function (t) {
                    return this.Xt(t).next(function (t) {
                        return t.targetCount
                    })
                }, bc.prototype.getTargetData = function (t, r) {
                    var e = Yi(r),
                        e = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                        i = null;
                    return Tc(t).$t({
                        range: e,
                        index: eu.queryTargetsIndexName
                    }, function (t, e, n) {
                        e = zu(e);
                        Xi(r, e.target) && (i = e, n.done())
                    }).next(function () {
                        return i
                    })
                }, bc.prototype.addMatchingKeys = function (n, t, r) {
                    var i = this,
                        o = [],
                        s = _c(n);
                    return t.forEach(function (t) {
                        var e = ja(t.path);
                        o.push(s.put(new nu(r, e))), o.push(i.referenceDelegate.addReference(n, r, t))
                    }), fu.waitFor(o)
                }, bc.prototype.removeMatchingKeys = function (n, t, r) {
                    var i = this,
                        o = _c(n);
                    return fu.forEach(t, function (t) {
                        var e = ja(t.path);
                        return fu.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, r, t)])
                    })
                }, bc.prototype.removeMatchingKeysForTargetId = function (t, e) {
                    t = _c(t), e = IDBKeyRange.bound([e], [e + 1], !1, !0);
                    return t.delete(e)
                }, bc.prototype.getMatchingKeysForTargetId = function (t, e) {
                    var e = IDBKeyRange.bound([e], [e + 1], !1, !0),
                        t = _c(t),
                        r = Zs();
                    return t.$t({
                        range: e,
                        Ft: !0
                    }, function (t, e, n) {
                        t = Ga(t[1]), t = new Ni(t);
                        r = r.add(t)
                    }).next(function () {
                        return r
                    })
                }, bc.prototype.containsKey = function (t, e) {
                    var e = ja(e.path),
                        e = IDBKeyRange.bound([e], [Zr(e)], !1, !0),
                        i = 0;
                    return _c(t).$t({
                        index: nu.documentTargetsIndex,
                        Ft: !0,
                        range: e
                    }, function (t, e, n) {
                        var r = t[0];
                        t[1], 0 !== r && (i++, n.done())
                    }).next(function () {
                        return 0 < i
                    })
                }, bc.prototype.lt = function (t, e) {
                    return Tc(t).get(e).next(function (t) {
                        return t ? zu(t) : null
                    })
                }, bc);

            function bc(t, e) {
                this.referenceDelegate = t, this.R = e
            }

            function Ec(t) {
                this.Ht = t
            }

            function Tc(t) {
                return xu(t, eu.store)
            }

            function Ic(t) {
                return xu(t, ru.store)
            }

            function _c(t) {
                return xu(t, nu.store)
            }

            function Sc(e) {
                return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                        if (e.code !== Vr.FAILED_PRECONDITION || e.message !== hu) throw e;
                        return Kr("LocalStore", "Unexpectedly lost primary lease"), [2]
                    })
                })
            }

            function Ac(t, e) {
                var n = t[0],
                    r = t[1],
                    t = e[0],
                    e = e[1],
                    t = $r(n, t);
                return 0 === t ? $r(r, e) : t
            }
            var Dc = (Lc.prototype.ie = function () {
                    return ++this.se
                }, Lc.prototype.re = function (t) {
                    var e = [t, this.ie()];
                    this.buffer.size < this.ne ? this.buffer = this.buffer.add(e) : Ac(e, t = this.buffer.last()) < 0 && (this.buffer = this.buffer.delete(t).add(e))
                }, Object.defineProperty(Lc.prototype, "maxValue", {
                    get: function () {
                        return this.buffer.last()[0]
                    },
                    enumerable: !1,
                    configurable: !0
                }), Lc),
                Nc = (Oc.prototype.start = function (t) {
                    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ue(t)
                }, Oc.prototype.stop = function () {
                    this.ce && (this.ce.cancel(), this.ce = null)
                }, Object.defineProperty(Oc.prototype, "started", {
                    get: function () {
                        return null !== this.ce
                    },
                    enumerable: !1,
                    configurable: !0
                }), Oc.prototype.ue = function (n) {
                    var t = this,
                        e = this.oe ? 3e5 : 6e4;
                    Kr("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, function () {
                        return y(t, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        this.ce = null, this.oe = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 7]), [4, n.collectGarbage(this.garbageCollector)];
                                    case 2:
                                        return t.sent(), [3, 7];
                                    case 3:
                                        return Iu(e = t.sent()) ? (Kr("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
                                    case 4:
                                        return [4, Sc(e)];
                                    case 5:
                                        t.sent(), t.label = 6;
                                    case 6:
                                        return [3, 7];
                                    case 7:
                                        return [4, this.ue(n)];
                                    case 8:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })
                }, Oc),
                Cc = (xc.prototype.calculateTargetCount = function (t, e) {
                    return this.ae.he(t).next(function (t) {
                        return Math.floor(e / 100 * t)
                    })
                }, xc.prototype.nthSequenceNumber = function (t, e) {
                    var n = this;
                    if (0 === e) return fu.resolve(Pr.o);
                    var r = new Dc(e);
                    return this.ae.forEachTarget(t, function (t) {
                        return r.re(t.sequenceNumber)
                    }).next(function () {
                        return n.ae.le(t, function (t) {
                            return r.re(t)
                        })
                    }).next(function () {
                        return r.maxValue
                    })
                }, xc.prototype.removeTargets = function (t, e, n) {
                    return this.ae.removeTargets(t, e, n)
                }, xc.prototype.removeOrphanedDocuments = function (t, e) {
                    return this.ae.removeOrphanedDocuments(t, e)
                }, xc.prototype.collect = function (e, n) {
                    var r = this;
                    return -1 === this.params.cacheSizeCollectionThreshold ? (Kr("LruGarbageCollector", "Garbage collection skipped; disabled"), fu.resolve(ac)) : this.getCacheSize(e).next(function (t) {
                        return t < r.params.cacheSizeCollectionThreshold ? (Kr("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), ac) : r.fe(e, n)
                    })
                }, xc.prototype.getCacheSize = function (t) {
                    return this.ae.getCacheSize(t)
                }, xc.prototype.fe = function (e, n) {
                    var r, i, o, s, a, u, c, h = this,
                        l = Date.now();
                    return this.calculateTargetCount(e, this.params.percentileToCollect).next(function (t) {
                        return i = t > h.params.maximumSequenceNumbersToCollect ? (Kr("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + t), h.params.maximumSequenceNumbersToCollect) : t, s = Date.now(), h.nthSequenceNumber(e, i)
                    }).next(function (t) {
                        return r = t, a = Date.now(), h.removeTargets(e, r, n)
                    }).next(function (t) {
                        return o = t, u = Date.now(), h.removeOrphanedDocuments(e, r)
                    }).next(function (t) {
                        return c = Date.now(), jr() <= w.DEBUG && Kr("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - l) + "ms\n\tDetermined least recently used " + i + " in " + (a - s) + "ms\n\tRemoved " + o + " targets in " + (u - a) + "ms\n\tRemoved " + t + " documents in " + (c - u) + "ms\nTotal Duration: " + (c - l) + "ms"), fu.resolve({
                            didRun: !0,
                            sequenceNumbersCollected: i,
                            targetsRemoved: o,
                            documentsRemoved: t
                        })
                    })
                }, xc),
                kc = (Rc.prototype.he = function (t) {
                    var n = this.de(t);
                    return this.db.getTargetCache().getTargetCount(t).next(function (e) {
                        return n.next(function (t) {
                            return e + t
                        })
                    })
                }, Rc.prototype.de = function (t) {
                    var e = 0;
                    return this.le(t, function (t) {
                        e++
                    }).next(function () {
                        return e
                    })
                }, Rc.prototype.forEachTarget = function (t, e) {
                    return this.db.getTargetCache().forEachTarget(t, e)
                }, Rc.prototype.le = function (t, n) {
                    return this.we(t, function (t, e) {
                        return n(e)
                    })
                }, Rc.prototype.addReference = function (t, e, n) {
                    return Pc(t, n)
                }, Rc.prototype.removeReference = function (t, e, n) {
                    return Pc(t, n)
                }, Rc.prototype.removeTargets = function (t, e, n) {
                    return this.db.getTargetCache().removeTargets(t, e, n)
                }, Rc.prototype.markPotentiallyOrphaned = Pc, Rc.prototype._e = function (t, e) {
                    return r = e, i = !1, mc(n = t).Ot(function (t) {
                        return pc(n, t, r).next(function (t) {
                            return t && (i = !0), fu.resolve(!t)
                        })
                    }).next(function () {
                        return i
                    });
                    var n, r, i
                }, Rc.prototype.removeOrphanedDocuments = function (n, r) {
                    var i = this,
                        o = this.db.getRemoteDocumentCache().newChangeBuffer(),
                        s = [],
                        a = 0;
                    return this.we(n, function (e, t) {
                        t <= r && (t = i._e(n, e).next(function (t) {
                            if (!t) return a++, o.getEntry(n, e).next(function () {
                                return o.removeEntry(e), _c(n).delete([0, ja(e.path)])
                            })
                        }), s.push(t))
                    }).next(function () {
                        return fu.waitFor(s)
                    }).next(function () {
                        return o.apply(n)
                    }).next(function () {
                        return a
                    })
                }, Rc.prototype.removeTarget = function (t, e) {
                    e = e.withSequenceNumber(t.currentSequenceNumber);
                    return this.db.getTargetCache().updateTargetData(t, e)
                }, Rc.prototype.updateLimboDocument = Pc, Rc.prototype.we = function (t, r) {
                    var i, t = _c(t),
                        o = Pr.o;
                    return t.$t({
                        index: nu.documentTargetsIndex
                    }, function (t, e) {
                        var n = t[0];
                        t[1];
                        t = e.path, e = e.sequenceNumber;
                        0 === n ? (o !== Pr.o && r(new Ni(Ga(i)), o), o = e, i = t) : o = Pr.o
                    }).next(function () {
                        o !== Pr.o && r(new Ni(Ga(i)), o)
                    })
                }, Rc.prototype.getCacheSize = function (t) {
                    return this.db.getRemoteDocumentCache().getSize(t)
                }, Rc);

            function Rc(t, e) {
                this.db = t, this.garbageCollector = new Cc(this, e)
            }

            function xc(t, e) {
                this.ae = t, this.params = e
            }

            function Oc(t, e) {
                this.garbageCollector = t, this.asyncQueue = e, this.oe = !1, this.ce = null
            }

            function Lc(t) {
                this.ne = t, this.buffer = new Qs(Ac), this.se = 0
            }

            function Pc(t, e) {
                return _c(t).put((t = t.currentSequenceNumber, new nu(0, ja(e.path), t)))
            }
            var Mc, Fc = (Kc.prototype.get = function (t) {
                    var e = this.mapKeyFn(t),
                        e = this.inner[e];
                    if (void 0 !== e)
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n],
                                o = i[0],
                                i = i[1];
                            if (this.equalsFn(o, t)) return i
                        }
                }, Kc.prototype.has = function (t) {
                    return void 0 !== this.get(t)
                }, Kc.prototype.set = function (t, e) {
                    var n = this.mapKeyFn(t),
                        r = this.inner[n];
                    if (void 0 !== r) {
                        for (var i = 0; i < r.length; i++)
                            if (this.equalsFn(r[i][0], t)) return void(r[i] = [t, e]);
                        r.push([t, e])
                    } else this.inner[n] = [
                        [t, e]
                    ]
                }, Kc.prototype.delete = function (t) {
                    var e = this.mapKeyFn(t),
                        n = this.inner[e];
                    if (void 0 === n) return !1;
                    for (var r = 0; r < n.length; r++)
                        if (this.equalsFn(n[r][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                    return !1
                }, Kc.prototype.forEach = function (s) {
                    oi(this.inner, function (t, e) {
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n],
                                o = i[0],
                                i = i[1];
                            s(o, i)
                        }
                    })
                }, Kc.prototype.isEmpty = function () {
                    return si(this.inner)
                }, Kc),
                A = (jc.prototype.getReadTime = function (t) {
                    t = this.changes.get(t);
                    return t ? t.readTime : ei.min()
                }, jc.prototype.addEntry = function (t, e) {
                    this.assertNotApplied(), this.changes.set(t.key, {
                        document: t,
                        readTime: e
                    })
                }, jc.prototype.removeEntry = function (t, e) {
                    void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, {
                        document: Qi.newInvalidDocument(t),
                        readTime: e
                    })
                }, jc.prototype.getEntry = function (t, e) {
                    this.assertNotApplied();
                    var n = this.changes.get(e);
                    return void 0 !== n ? fu.resolve(n.document) : this.getFromCache(t, e)
                }, jc.prototype.getEntries = function (t, e) {
                    return this.getAllFromCache(t, e)
                }, jc.prototype.apply = function (t) {
                    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t)
                }, jc.prototype.assertNotApplied = function () {}, jc),
                Vc = (Bc.prototype.addEntry = function (t, e, n) {
                    return Qc(t).put(Hc(e), n)
                }, Bc.prototype.removeEntry = function (t, e) {
                    t = Qc(t), e = Hc(e);
                    return t.delete(e)
                }, Bc.prototype.updateMetadata = function (e, n) {
                    var r = this;
                    return this.getMetadata(e).next(function (t) {
                        return t.byteSize += n, r.me(e, t)
                    })
                }, Bc.prototype.getEntry = function (t, e) {
                    var n = this;
                    return Qc(t).get(Hc(e)).next(function (t) {
                        return n.ye(e, t)
                    })
                }, Bc.prototype.ge = function (t, e) {
                    var n = this;
                    return Qc(t).get(Hc(e)).next(function (t) {
                        return {
                            document: n.ye(e, t),
                            size: lc(t)
                        }
                    })
                }, Bc.prototype.getEntries = function (t, e) {
                    var n = this,
                        r = zs;
                    return this.pe(t, e, function (t, e) {
                        e = n.ye(t, e);
                        r = r.insert(t, e)
                    }).next(function () {
                        return r
                    })
                }, Bc.prototype.Ee = function (t, e) {
                    var r = this,
                        i = zs,
                        o = new Vs(Ni.comparator);
                    return this.pe(t, e, function (t, e) {
                        var n = r.ye(t, e);
                        i = i.insert(t, n), o = o.insert(t, lc(e))
                    }).next(function () {
                        return {
                            documents: i,
                            Te: o
                        }
                    })
                }, Bc.prototype.pe = function (t, e, i) {
                    if (e.isEmpty()) return fu.resolve();
                    var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                        o = e.getIterator(),
                        s = o.getNext();
                    return Qc(t).$t({
                        range: n
                    }, function (t, e, n) {
                        for (var r = Ni.fromSegments(t); s && Ni.comparator(s, r) < 0;) i(s, null), s = o.getNext();
                        s && s.isEqual(r) && (i(s, e), s = o.hasNext() ? o.getNext() : null), s ? n.Ct(s.path.toArray()) : n.done()
                    }).next(function () {
                        for (; s;) i(s, null), s = o.hasNext() ? o.getNext() : null
                    })
                }, Bc.prototype.getDocumentsMatchingQuery = function (t, r, e) {
                    var n, i = this,
                        o = zs,
                        s = r.path.length + 1,
                        a = {};
                    return e.isEqual(ei.min()) ? (n = r.path.toArray(), a.range = IDBKeyRange.lowerBound(n)) : (n = r.path.toArray(), e = ju(e), a.range = IDBKeyRange.lowerBound([n, e], !0), a.index = Za.collectionReadTimeIndex), Qc(t).$t(a, function (t, e, n) {
                        t.length === s && (e = qu(i.R, e), r.path.isPrefixOf(e.key.path) ? Ko(r, e) && (o = o.insert(e.key, e)) : n.done())
                    }).next(function () {
                        return o
                    })
                }, Bc.prototype.newChangeBuffer = function (t) {
                    return new Uc(this, !!t && t.trackRemovals)
                }, Bc.prototype.getSize = function (t) {
                    return this.getMetadata(t).next(function (t) {
                        return t.byteSize
                    })
                }, Bc.prototype.getMetadata = function (t) {
                    return Gc(t).get(tu.key).next(function (t) {
                        return Wr(!!t), t
                    })
                }, Bc.prototype.me = function (t, e) {
                    return Gc(t).put(tu.key, e)
                }, Bc.prototype.ye = function (t, e) {
                    if (e) {
                        e = qu(this.R, e);
                        if (!e.isNoDocument() || !e.version.isEqual(ei.min())) return e
                    }
                    return Qi.newInvalidDocument(t)
                }, Bc),
                Uc = (n(qc, Mc = A), qc.prototype.applyChanges = function (i) {
                    var o = this,
                        s = [],
                        a = 0,
                        u = new Qs(function (t, e) {
                            return $r(t.canonicalString(), e.canonicalString())
                        });
                    return this.changes.forEach(function (t, e) {
                        var n, r = o.Ae.get(t);
                        e.document.isValidDocument() ? (n = Bu(o.Ie.R, e.document, o.getReadTime(t)), u = u.add(t.path.popLast()), e = lc(n), a += e - r, s.push(o.Ie.addEntry(i, t, n))) : (a -= r, o.trackRemovals ? (r = Bu(o.Ie.R, Qi.newNoDocument(t, ei.min()), o.getReadTime(t)), s.push(o.Ie.addEntry(i, t, r))) : s.push(o.Ie.removeEntry(i, t)))
                    }), u.forEach(function (t) {
                        s.push(o.Ie.Ut.addToCollectionParentIndex(i, t))
                    }), s.push(this.Ie.updateMetadata(i, a)), fu.waitFor(s)
                }, qc.prototype.getFromCache = function (t, e) {
                    var n = this;
                    return this.Ie.ge(t, e).next(function (t) {
                        return n.Ae.set(e, t.size), t.document
                    })
                }, qc.prototype.getAllFromCache = function (t, e) {
                    var n = this;
                    return this.Ie.Ee(t, e).next(function (t) {
                        var e = t.documents;
                        return t.Te.forEach(function (t, e) {
                            n.Ae.set(t, e)
                        }), e
                    })
                }, qc);

            function qc(t, e) {
                var n = this;
                return (n = Mc.call(this) || this).Ie = t, n.trackRemovals = e, n.Ae = new Fc(function (t) {
                    return t.toString()
                }, function (t, e) {
                    return t.isEqual(e)
                }), n
            }

            function Bc(t, e) {
                this.R = t, this.Ut = e
            }

            function jc() {
                this.changes = new Fc(function (t) {
                    return t.toString()
                }, function (t, e) {
                    return t.isEqual(e)
                }), this.changesApplied = !1
            }

            function Kc(t, e) {
                this.mapKeyFn = t, this.equalsFn = e, this.inner = {}
            }

            function Gc(t) {
                return xu(t, tu.store)
            }

            function Qc(t) {
                return xu(t, Za.store)
            }

            function Hc(t) {
                return t.path.toArray()
            }
            var zc = (Wc.prototype.Rt = function (e, n, t, r) {
                var i = this;
                Wr(t < r && 0 <= t && r <= 11);
                var o = new du("createOrUpgrade", n);
                t < 1 && 1 <= r && (e.createObjectStore(Qa.store), (s = e).createObjectStore(za.store, {
                    keyPath: za.keyPath
                }), s.createObjectStore(Wa.store, {
                    keyPath: Wa.keyPath,
                    autoIncrement: !0
                }).createIndex(Wa.userMutationsIndex, Wa.userMutationsKeyPath, {
                    unique: !0
                }), s.createObjectStore(Ya.store), Yc(e), e.createObjectStore(Za.store));
                var s, a = fu.resolve();
                return t < 3 && 3 <= r && (0 !== t && ((s = e).deleteObjectStore(nu.store), s.deleteObjectStore(eu.store), s.deleteObjectStore(ru.store), Yc(e)), a = a.next(function () {
                    return t = o.store(ru.store), e = new ru(0, 0, ei.min().toTimestamp(), 0), t.put(ru.key, e);
                    var t, e
                })), t < 4 && 4 <= r && (a = (a = 0 !== t ? a.next(function () {
                    return n = e, (r = o).store(Wa.store).Nt().next(function (t) {
                        n.deleteObjectStore(Wa.store), n.createObjectStore(Wa.store, {
                            keyPath: Wa.keyPath,
                            autoIncrement: !0
                        }).createIndex(Wa.userMutationsIndex, Wa.userMutationsKeyPath, {
                            unique: !0
                        });
                        var e = r.store(Wa.store),
                            t = t.map(function (t) {
                                return e.put(t)
                            });
                        return fu.waitFor(t)
                    });
                    var n, r
                }) : a).next(function () {
                    e.createObjectStore(ou.store, {
                        keyPath: ou.keyPath
                    })
                })), t < 5 && 5 <= r && (a = a.next(function () {
                    return i.Re(o)
                })), t < 6 && 6 <= r && (a = a.next(function () {
                    return e.createObjectStore(tu.store), i.be(o)
                })), t < 7 && 7 <= r && (a = a.next(function () {
                    return i.ve(o)
                })), t < 8 && 8 <= r && (a = a.next(function () {
                    return i.Pe(e, o)
                })), t < 9 && 9 <= r && (a = a.next(function () {
                    var t;
                    (t = e).objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges"), (t = n.objectStore(Za.store)).createIndex(Za.readTimeIndex, Za.readTimeIndexPath, {
                        unique: !1
                    }), t.createIndex(Za.collectionReadTimeIndex, Za.collectionReadTimeIndexPath, {
                        unique: !1
                    })
                })), t < 10 && 10 <= r && (a = a.next(function () {
                    return i.Ve(o)
                })), a = t < 11 && 11 <= r ? a.next(function () {
                    e.createObjectStore(su.store, {
                        keyPath: su.keyPath
                    }), e.createObjectStore(au.store, {
                        keyPath: au.keyPath
                    })
                }) : a
            }, Wc.prototype.be = function (e) {
                var n = 0;
                return e.store(Za.store).$t(function (t, e) {
                    n += lc(e)
                }).next(function () {
                    var t = new tu(n);
                    return e.store(tu.store).put(tu.key, t)
                })
            }, Wc.prototype.Re = function (n) {
                var r = this,
                    t = n.store(za.store),
                    i = n.store(Wa.store);
                return t.Nt().next(function (t) {
                    return fu.forEach(t, function (e) {
                        var t = IDBKeyRange.bound([e.userId, -1], [e.userId, e.lastAcknowledgedBatchId]);
                        return i.Nt(Wa.userMutationsIndex, t).next(function (t) {
                            return fu.forEach(t, function (t) {
                                Wr(t.userId === e.userId);
                                t = Hu(r.R, t);
                                return hc(n, e.userId, t).next(function () {})
                            })
                        })
                    })
                })
            }, Wc.prototype.ve = function (t) {
                var o = t.store(nu.store),
                    e = t.store(Za.store);
                return t.store(ru.store).get(ru.key).next(function (r) {
                    var i = [];
                    return e.$t(function (t, e) {
                        var n = new ci(t),
                            t = [0, ja(n)];
                        i.push(o.get(t).next(function (t) {
                            return t ? fu.resolve() : o.put(new nu(0, ja(n), r.highestListenSequenceNumber))
                        }))
                    }).next(function () {
                        return fu.waitFor(i)
                    })
                })
            }, Wc.prototype.Pe = function (t, e) {
                t.createObjectStore(iu.store, {
                    keyPath: iu.keyPath
                });

                function r(t) {
                    if (i.add(t)) {
                        var e = t.lastSegment(),
                            t = t.popLast();
                        return n.put({
                            collectionId: e,
                            parent: ja(t)
                        })
                    }
                }
                var n = e.store(iu.store),
                    i = new ec;
                return e.store(Za.store).$t({
                    Ft: !0
                }, function (t, e) {
                    t = new ci(t);
                    return r(t.popLast())
                }).next(function () {
                    return e.store(Ya.store).$t({
                        Ft: !0
                    }, function (t, e) {
                        t[0];
                        var n = t[1];
                        t[2];
                        n = Ga(n);
                        return r(n.popLast())
                    })
                })
            }, Wc.prototype.Ve = function (t) {
                var n = this,
                    r = t.store(eu.store);
                return r.$t(function (t, e) {
                    e = zu(e), e = Wu(n.R, e);
                    return r.put(e)
                })
            }, Wc);

            function Wc(t) {
                this.R = t
            }

            function Yc(t) {
                t.createObjectStore(nu.store, {
                    keyPath: nu.keyPath
                }).createIndex(nu.documentTargetsIndex, nu.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(eu.store, {
                    keyPath: eu.keyPath
                }).createIndex(eu.queryTargetsIndexName, eu.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(ru.store)
            }
            var Xc = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
                $c = (Jc.prototype.start = function () {
                    var e = this;
                    return this.je().then(function () {
                        if (!e.isPrimary && !e.allowTabSynchronization) throw new Ur(Vr.FAILED_PRECONDITION, Xc);
                        return e.We(), e.Ge(), e.ze(), e.runTransaction("getHighestListenSequenceNumber", "readonly", function (t) {
                            return e.qe.getHighestSequenceNumber(t)
                        })
                    }).then(function (t) {
                        e.Ne = new Pr(t, e.De)
                    }).then(function () {
                        e.xe = !0
                    }).catch(function (t) {
                        return e.Be && e.Be.close(), Promise.reject(t)
                    })
                }, Jc.prototype.He = function (n) {
                    var t = this;
                    return this.Me = function (e) {
                        return y(t, void 0, void 0, function () {
                            return g(this, function (t) {
                                return this.started ? [2, n(e)] : [2]
                            })
                        })
                    }, n(this.isPrimary)
                }, Jc.prototype.setDatabaseDeletedListener = function (n) {
                    var t = this;
                    this.Be.vt(function (e) {
                        return y(t, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return null === e.newVersion ? [4, n()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }, Jc.prototype.setNetworkEnabled = function (t) {
                    var e = this;
                    this.networkEnabled !== t && (this.networkEnabled = t, this.Se.enqueueAndForget(function () {
                        return y(e, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return this.started ? [4, this.je()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }))
                }, Jc.prototype.je = function () {
                    var n = this;
                    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
                        return th(e).put(new ou(n.clientId, Date.now(), n.networkEnabled, n.inForeground)).next(function () {
                            if (n.isPrimary) return n.Je(e).next(function (t) {
                                t || (n.isPrimary = !1, n.Se.enqueueRetryable(function () {
                                    return n.Me(!1)
                                }))
                            })
                        }).next(function () {
                            return n.Ye(e)
                        }).next(function (t) {
                            return n.isPrimary && !t ? n.Xe(e).next(function () {
                                return !1
                            }) : !!t && n.Ze(e).next(function () {
                                return !0
                            })
                        })
                    }).catch(function (t) {
                        if (Iu(t)) return Kr("IndexedDbPersistence", "Failed to extend owner lease: ", t), n.isPrimary;
                        if (!n.allowTabSynchronization) throw t;
                        return Kr("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1
                    }).then(function (t) {
                        n.isPrimary !== t && n.Se.enqueueRetryable(function () {
                            return n.Me(t)
                        }), n.isPrimary = t
                    })
                }, Jc.prototype.Je = function (t) {
                    var e = this;
                    return Zc(t).get(Qa.key).next(function (t) {
                        return fu.resolve(e.tn(t))
                    })
                }, Jc.prototype.en = function (t) {
                    return th(t).delete(this.clientId)
                }, Jc.prototype.nn = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n, r, i, o = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return !this.isPrimary || this.sn(this.Oe, 18e5) ? [3, 2] : (this.Oe = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (t) {
                                        var r = xu(t, ou.store);
                                        return r.Nt().next(function (t) {
                                            var e = o.rn(t, 18e5),
                                                n = t.filter(function (t) {
                                                    return -1 === e.indexOf(t)
                                                });
                                            return fu.forEach(n, function (t) {
                                                return r.delete(t.clientId)
                                            }).next(function () {
                                                return n
                                            })
                                        })
                                    }).catch(function () {
                                        return []
                                    })]);
                                case 1:
                                    if (e = t.sent(), this.Qe)
                                        for (n = 0, r = e; n < r.length; n++) i = r[n], this.Qe.removeItem(this.on(i.clientId));
                                    t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, Jc.prototype.ze = function () {
                    var t = this;
                    this.$e = this.Se.enqueueAfterDelay("client_metadata_refresh", 4e3, function () {
                        return t.je().then(function () {
                            return t.nn()
                        }).then(function () {
                            return t.ze()
                        })
                    })
                }, Jc.prototype.tn = function (t) {
                    return !!t && t.ownerId === this.clientId
                }, Jc.prototype.Ye = function (e) {
                    var r = this;
                    return this.Ce ? fu.resolve(!0) : Zc(e).get(Qa.key).next(function (t) {
                        if (null !== t && r.sn(t.leaseTimestampMs, 5e3) && !r.cn(t.ownerId)) {
                            if (r.tn(t) && r.networkEnabled) return !0;
                            if (!r.tn(t)) {
                                if (!t.allowTabSynchronization) throw new Ur(Vr.FAILED_PRECONDITION, Xc);
                                return !1
                            }
                        }
                        return !(!r.networkEnabled || !r.inForeground) || th(e).Nt().next(function (t) {
                            return void 0 === r.rn(t, 5e3).find(function (t) {
                                if (r.clientId !== t.clientId) {
                                    var e = !r.networkEnabled && t.networkEnabled,
                                        n = !r.inForeground && t.inForeground,
                                        t = r.networkEnabled === t.networkEnabled;
                                    if (e || n && t) return !0
                                }
                                return !1
                            })
                        })
                    }).next(function (t) {
                        return r.isPrimary !== t && Kr("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                    })
                }, Jc.prototype.shutdown = function () {
                    return y(this, void 0, void 0, function () {
                        var n = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.xe = !1, this.un(), this.$e && (this.$e.cancel(), this.$e = null), this.an(), this.hn(), [4, this.Be.runTransaction("shutdown", "readwrite", [Qa.store, ou.store], function (t) {
                                        var e = new ku(t, Pr.o);
                                        return n.Xe(e).next(function () {
                                            return n.en(e)
                                        })
                                    })];
                                case 1:
                                    return t.sent(), this.Be.close(), this.ln(), [2]
                            }
                        })
                    })
                }, Jc.prototype.rn = function (t, e) {
                    var n = this;
                    return t.filter(function (t) {
                        return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId)
                    })
                }, Jc.prototype.fn = function () {
                    var e = this;
                    return this.runTransaction("getActiveClients", "readonly", function (t) {
                        return th(t).Nt().next(function (t) {
                            return e.rn(t, 18e5).map(function (t) {
                                return t.clientId
                            })
                        })
                    })
                }, Object.defineProperty(Jc.prototype, "started", {
                    get: function () {
                        return this.xe
                    },
                    enumerable: !1,
                    configurable: !0
                }), Jc.prototype.getMutationQueue = function (t) {
                    return fc.Qt(t, this.R, this.Ut, this.referenceDelegate)
                }, Jc.prototype.getTargetCache = function () {
                    return this.qe
                }, Jc.prototype.getRemoteDocumentCache = function () {
                    return this.Ue
                }, Jc.prototype.getIndexManager = function () {
                    return this.Ut
                }, Jc.prototype.getBundleCache = function () {
                    return this.Ke
                }, Jc.prototype.runTransaction = function (e, n, r) {
                    var i, o = this;
                    return Kr("IndexedDbPersistence", "Starting transaction:", e), this.Be.runTransaction(e, "readonly" === n ? "readonly" : "readwrite", cu, function (t) {
                        return i = new ku(t, o.Ne ? o.Ne.next() : Pr.o), "readwrite-primary" === n ? o.Je(i).next(function (t) {
                            return !!t || o.Ye(i)
                        }).next(function (t) {
                            if (!t) throw Gr("Failed to obtain primary lease for action '" + e + "'."), o.isPrimary = !1, o.Se.enqueueRetryable(function () {
                                return o.Me(!1)
                            }), new Ur(Vr.FAILED_PRECONDITION, hu);
                            return r(i)
                        }).next(function (t) {
                            return o.Ze(i).next(function () {
                                return t
                            })
                        }) : o.dn(i).next(function () {
                            return r(i)
                        })
                    }).then(function (t) {
                        return i.raiseOnCommittedEvent(), t
                    })
                }, Jc.prototype.dn = function (t) {
                    var e = this;
                    return Zc(t).get(Qa.key).next(function (t) {
                        if (null !== t && e.sn(t.leaseTimestampMs, 5e3) && !e.cn(t.ownerId) && !e.tn(t) && !(e.Ce || e.allowTabSynchronization && t.allowTabSynchronization)) throw new Ur(Vr.FAILED_PRECONDITION, Xc)
                    })
                }, Jc.prototype.Ze = function (t) {
                    var e = new Qa(this.clientId, this.allowTabSynchronization, Date.now());
                    return Zc(t).put(Qa.key, e)
                }, Jc.yt = function () {
                    return pu.yt()
                }, Jc.prototype.Xe = function (t) {
                    var e = this,
                        n = Zc(t);
                    return n.get(Qa.key).next(function (t) {
                        return e.tn(t) ? (Kr("IndexedDbPersistence", "Releasing primary lease."), n.delete(Qa.key)) : fu.resolve()
                    })
                }, Jc.prototype.sn = function (t, e) {
                    var n = Date.now();
                    return !(t < n - e || n < t && (Gr("Detected an update time that is in the future: " + t + " > " + n), 1))
                }, Jc.prototype.We = function () {
                    var t = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.Fe = function () {
                        t.Se.enqueueAndForget(function () {
                            return t.inForeground = "visible" === t.document.visibilityState, t.je()
                        })
                    }, this.document.addEventListener("visibilitychange", this.Fe), this.inForeground = "visible" === this.document.visibilityState)
                }, Jc.prototype.an = function () {
                    this.Fe && (this.document.removeEventListener("visibilitychange", this.Fe), this.Fe = null)
                }, Jc.prototype.Ge = function () {
                    var t, e = this;
                    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.ke = function () {
                        e.un(), c() && navigator.appVersion.match("Version/14") && e.Se.enterRestrictedMode(!0), e.Se.enqueueAndForget(function () {
                            return e.shutdown()
                        })
                    }, this.window.addEventListener("pagehide", this.ke))
                }, Jc.prototype.hn = function () {
                    this.ke && (this.window.removeEventListener("pagehide", this.ke), this.ke = null)
                }, Jc.prototype.cn = function (t) {
                    var e;
                    try {
                        var n = null !== (null === (e = this.Qe) || void 0 === e ? void 0 : e.getItem(this.on(t)));
                        return Kr("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n
                    } catch (t) {
                        return Gr("IndexedDbPersistence", "Failed to get zombied client id.", t), !1
                    }
                }, Jc.prototype.un = function () {
                    if (this.Qe) try {
                        this.Qe.setItem(this.on(this.clientId), String(Date.now()))
                    } catch (t) {
                        Gr("Failed to set zombie client id.", t)
                    }
                }, Jc.prototype.ln = function () {
                    if (this.Qe) try {
                        this.Qe.removeItem(this.on(this.clientId))
                    } catch (t) {}
                }, Jc.prototype.on = function (t) {
                    return "firestore_zombie_" + this.persistenceKey + "_" + t
                }, Jc);

            function Jc(t, e, n, r, i, o, s, a, u, c) {
                if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.Se = i, this.window = o, this.document = s, this.De = u, this.Ce = c, this.Ne = null, this.xe = !1, this.isPrimary = !1, this.networkEnabled = !0, this.ke = null, this.inForeground = !1, this.Fe = null, this.$e = null, this.Oe = Number.NEGATIVE_INFINITY, this.Me = function (t) {
                        return Promise.resolve()
                    }, !Jc.yt()) throw new Ur(Vr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                this.referenceDelegate = new kc(this, r), this.Le = e + "main", this.R = new Mu(a), this.Be = new pu(this.Le, 11, new zc(this.R)), this.qe = new wc(this.referenceDelegate, this.R), this.Ut = new nc, this.Ue = (e = this.R, a = this.Ut, new Vc(e, a)), this.Ke = new Xu, this.window && this.window.localStorage ? this.Qe = this.window.localStorage : (this.Qe = null, !1 === c && Gr("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
            }

            function Zc(t) {
                return xu(t, Qa.store)
            }

            function th(t) {
                return xu(t, ou.store)
            }

            function eh(t, e) {
                var n = t.projectId;
                return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
            }

            function nh(t, e) {
                this.progress = t, this.wn = e
            }
            var rh = (hh.prototype.mn = function (e, n) {
                    var r = this;
                    return this._n.getAllMutationBatchesAffectingDocumentKey(e, n).next(function (t) {
                        return r.yn(e, n, t)
                    })
                }, hh.prototype.yn = function (t, e, r) {
                    return this.Ue.getEntry(t, e).next(function (t) {
                        for (var e = 0, n = r; e < n.length; e++) n[e].applyToLocalView(t);
                        return t
                    })
                }, hh.prototype.gn = function (t, i) {
                    t.forEach(function (t, e) {
                        for (var n = 0, r = i; n < r.length; n++) r[n].applyToLocalView(e)
                    })
                }, hh.prototype.pn = function (e, t) {
                    var n = this;
                    return this.Ue.getEntries(e, t).next(function (t) {
                        return n.En(e, t).next(function () {
                            return t
                        })
                    })
                }, hh.prototype.En = function (t, e) {
                    var n = this;
                    return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next(function (t) {
                        return n.gn(e, t)
                    })
                }, hh.prototype.getDocumentsMatchingQuery = function (t, e, n) {
                    return r = e, Ni.isDocumentKey(r.path) && null === r.collectionGroup && 0 === r.filters.length ? this.Tn(t, e.path) : Mo(e) ? this.In(t, e, n) : this.An(t, e, n);
                    var r
                }, hh.prototype.Tn = function (t, e) {
                    return this.mn(t, new Ni(e)).next(function (t) {
                        var e = Xs;
                        return e = t.isFoundDocument() ? e.insert(t.key, t) : e
                    })
                }, hh.prototype.In = function (n, r, i) {
                    var o = this,
                        s = r.collectionGroup,
                        a = Xs;
                    return this.Ut.getCollectionParents(n, s).next(function (t) {
                        return fu.forEach(t, function (t) {
                            var e, e = (e = r, t = t.child(s), new Co(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt));
                            return o.An(n, e, i).next(function (t) {
                                t.forEach(function (t, e) {
                                    a = a.insert(t, e)
                                })
                            })
                        }).next(function () {
                            return a
                        })
                    })
                }, hh.prototype.An = function (e, n, t) {
                    var c, h, r = this;
                    return this.Ue.getDocumentsMatchingQuery(e, n, t).next(function (t) {
                        return c = t, r._n.getAllMutationBatchesAffectingQuery(e, n)
                    }).next(function (t) {
                        return h = t, r.Rn(e, h, c).next(function (t) {
                            c = t;
                            for (var e = 0, n = h; e < n.length; e++)
                                for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                    var s = o[i],
                                        a = s.key,
                                        u = c.get(a);
                                    null == u && (u = Qi.newInvalidDocument(a), c = c.insert(a, u)), gs(s, u, r.localWriteTime), u.isFoundDocument() || (c = c.remove(a))
                                }
                        })
                    }).next(function () {
                        return c.forEach(function (t, e) {
                            Ko(n, e) || (c = c.remove(t))
                        }), c
                    })
                }, hh.prototype.Rn = function (t, e, n) {
                    for (var r = Zs(), i = 0, o = e; i < o.length; i++)
                        for (var s = 0, a = o[i].mutations; s < a.length; s++) {
                            var u = a[s];
                            u instanceof Ts && null === n.get(u.key) && (r = r.add(u.key))
                        }
                    var c = n;
                    return this.Ue.getEntries(t, r).next(function (t) {
                        return t.forEach(function (t, e) {
                            e.isFoundDocument() && (c = c.insert(t, e))
                        }), c
                    })
                }, hh),
                ih = (ch.Pn = function (t, e) {
                    for (var n = Zs(), r = Zs(), i = 0, o = e.docChanges; i < o.length; i++) {
                        var s = o[i];
                        switch (s.type) {
                            case 0:
                                n = n.add(s.doc.key);
                                break;
                            case 1:
                                r = r.add(s.doc.key)
                        }
                    }
                    return new ch(t, e.fromCache, n, r)
                }, ch),
                oh = (uh.prototype.Vn = function (t) {
                    this.Sn = t
                }, uh.prototype.getDocumentsMatchingQuery = function (e, r, i, o) {
                    var s = this;
                    return 0 === r.filters.length && null === r.limit && null == r.startAt && null == r.endAt && (0 === r.explicitOrderBy.length || 1 === r.explicitOrderBy.length && r.explicitOrderBy[0].field.isKeyField()) || i.isEqual(ei.min()) ? this.Dn(e, r) : this.Sn.pn(e, o).next(function (t) {
                        var n = s.Cn(r, t);
                        return (xo(r) || Oo(r)) && s.Nn(r.limitType, n, o, i) ? s.Dn(e, r) : (jr() <= w.DEBUG && Kr("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), jo(r)), s.Sn.getDocumentsMatchingQuery(e, r, i).next(function (e) {
                            return n.forEach(function (t) {
                                e = e.insert(t.key, t)
                            }), e
                        }))
                    })
                }, uh.prototype.Cn = function (n, t) {
                    var r = new Qs(Go(n));
                    return t.forEach(function (t, e) {
                        Ko(n, e) && (r = r.add(e))
                    }), r
                }, uh.prototype.Nn = function (t, e, n, r) {
                    if (n.size !== e.size) return !0;
                    e = "F" === t ? e.last() : e.first();
                    return !!e && (e.hasPendingWrites || 0 < e.version.compareTo(r))
                }, uh.prototype.Dn = function (t, e) {
                    return jr() <= w.DEBUG && Kr("QueryEngine", "Using full collection scan to execute query:", jo(e)), this.Sn.getDocumentsMatchingQuery(t, e, ei.min())
                }, uh),
                sh = (ah.prototype.collectGarbage = function (e) {
                    var n = this;
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (t) {
                        return e.collect(t, n.kn)
                    })
                }, ah);

            function ah(t, e, n, r) {
                this.persistence = t, this.xn = e, this.R = r, this.kn = new Vs($r), this.Fn = new Fc(Yi, Xi), this.$n = ei.min(), this._n = t.getMutationQueue(n), this.On = t.getRemoteDocumentCache(), this.qe = t.getTargetCache(), this.Mn = new rh(this.On, this._n, this.persistence.getIndexManager()), this.Ke = t.getBundleCache(), this.xn.Vn(this.Mn)
            }

            function uh() {}

            function ch(t, e, n, r) {
                this.targetId = t, this.fromCache = e, this.bn = n, this.vn = r
            }

            function hh(t, e, n) {
                this.Ue = t, this._n = e, this.Ut = n
            }

            function lh(t, e, n, r) {
                return new sh(t, e, n, r)
            }

            function fh(i, o) {
                return y(this, void 0, void 0, function () {
                    var e, n, v, r;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return n = (e = i)._n, v = e.Mn, [4, e.persistence.runTransaction("Handle user change", "readonly", function (g) {
                                    var m;
                                    return e._n.getAllMutationBatches(g).next(function (t) {
                                        return m = t, n = e.persistence.getMutationQueue(o), v = new rh(e.On, n, e.persistence.getIndexManager()), n.getAllMutationBatches(g)
                                    }).next(function (t) {
                                        for (var e = [], n = [], r = Zs(), i = 0, o = m; i < o.length; i++) {
                                            var s = o[i];
                                            e.push(s.batchId);
                                            for (var a = 0, u = s.mutations; a < u.length; a++) var c = u[a],
                                                r = r.add(c.key)
                                        }
                                        for (var h = 0, l = t; h < l.length; h++) {
                                            var f = l[h];
                                            n.push(f.batchId);
                                            for (var d = 0, p = f.mutations; d < p.length; d++) {
                                                var y = p[d];
                                                r = r.add(y.key)
                                            }
                                        }
                                        return v.pn(g, r).next(function (t) {
                                            return {
                                                Ln: t,
                                                removedBatchIds: e,
                                                addedBatchIds: n
                                            }
                                        })
                                    })
                                })];
                            case 1:
                                return r = t.sent(), [2, (e._n = n, e.Mn = v, e.xn.Vn(e.Mn), r)]
                        }
                    })
                })
            }

            function dh(t, h) {
                var l = t;
                return l.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
                    var e, r, i, o, s, n, a, u = h.batch.keys(),
                        c = l.On.newChangeBuffer({
                            trackRemovals: !0
                        });
                    return e = l, r = t, o = c, s = (i = h).batch, n = s.keys(), a = fu.resolve(), n.forEach(function (n) {
                        a = a.next(function () {
                            return o.getEntry(r, n)
                        }).next(function (t) {
                            var e = i.docVersions.get(n);
                            Wr(null !== e), t.version.compareTo(e) < 0 && (s.applyToRemoteDocument(t, i), t.isValidDocument() && o.addEntry(t, i.commitVersion))
                        })
                    }), a.next(function () {
                        return e._n.removeMutationBatch(r, s)
                    }).next(function () {
                        return c.apply(t)
                    }).next(function () {
                        return l._n.performConsistencyCheck(t)
                    }).next(function () {
                        return l.Mn.pn(t, u)
                    })
                })
            }

            function ph(t) {
                var e = t;
                return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
                    return e.qe.getLastRemoteSnapshotVersion(t)
                })
            }

            function yh(t, r) {
                var u = t,
                    c = r.snapshotVersion,
                    h = u.kn;
                return u.persistence.runTransaction("Apply remote event", "readwrite-primary", function (s) {
                    var t = u.On.newChangeBuffer({
                        trackRemovals: !0
                    });
                    h = u.kn;
                    var a = [];
                    r.targetChanges.forEach(function (t, e) {
                        var n, r, i, o = h.get(e);
                        o && (a.push(u.qe.removeMatchingKeys(s, t.removedDocuments, e).next(function () {
                            return u.qe.addMatchingKeys(s, t.addedDocuments, e)
                        })), 0 < (i = t.resumeToken).approximateByteSize() && (n = o.withResumeToken(i, c).withSequenceNumber(s.currentSequenceNumber), h = h.insert(e, n), r = o, i = t, Wr(0 < (o = n).resumeToken.approximateByteSize()), (0 === r.resumeToken.approximateByteSize() || 3e8 <= o.snapshotVersion.toMicroseconds() - r.snapshotVersion.toMicroseconds() || 0 < i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size) && a.push(u.qe.updateTargetData(s, n))))
                    });
                    var e, n = zs;
                    return r.documentUpdates.forEach(function (t, e) {
                        r.resolvedLimboDocuments.has(t) && a.push(u.persistence.referenceDelegate.updateLimboDocument(s, t))
                    }), a.push(gh(s, t, r.documentUpdates, c, void 0).next(function (t) {
                        n = t
                    })), c.isEqual(ei.min()) || (e = u.qe.getLastRemoteSnapshotVersion(s).next(function (t) {
                        return u.qe.setTargetsMetadata(s, s.currentSequenceNumber, c)
                    }), a.push(e)), fu.waitFor(a).next(function () {
                        return t.apply(s)
                    }).next(function () {
                        return u.Mn.En(s, n)
                    }).next(function () {
                        return n
                    })
                }).then(function (t) {
                    return u.kn = h, t
                })
            }

            function gh(t, s, e, a, u) {
                var n = Zs();
                return e.forEach(function (t) {
                    return n = n.add(t)
                }), s.getEntries(t, n).next(function (i) {
                    var o = zs;
                    return e.forEach(function (t, e) {
                        var n = i.get(t),
                            r = (null == u ? void 0 : u.get(t)) || a;
                        e.isNoDocument() && e.version.isEqual(ei.min()) ? (s.removeEntry(t, r), o = o.insert(t, e)) : !n.isValidDocument() || 0 < e.version.compareTo(n.version) || 0 === e.version.compareTo(n.version) && n.hasPendingWrites ? (s.addEntry(e, r), o = o.insert(t, e)) : Kr("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version)
                    }), o
                })
            }

            function mh(t, r) {
                var i = t;
                return i.persistence.runTransaction("Allocate target", "readwrite", function (e) {
                    var n;
                    return i.qe.getTargetData(e, r).next(function (t) {
                        return t ? (n = t, fu.resolve(n)) : i.qe.allocateTargetId(e).next(function (t) {
                            return n = new Pu(r, t, 0, e.currentSequenceNumber), i.qe.addTargetData(e, n).next(function () {
                                return n
                            })
                        })
                    })
                }).then(function (t) {
                    var e = i.kn.get(t.targetId);
                    return (null === e || 0 < t.snapshotVersion.compareTo(e.snapshotVersion)) && (i.kn = i.kn.insert(t.targetId, t), i.Fn.set(r, t.targetId)), t
                })
            }

            function vh(i, o, s) {
                return y(this, void 0, void 0, function () {
                    var e, n, r;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                n = (e = i).kn.get(o), r = s ? "readwrite" : "readwrite-primary", t.label = 1;
                            case 1:
                                return t.trys.push([1, 4, , 5]), s ? [3, 3] : [4, e.persistence.runTransaction("Release target", r, function (t) {
                                    return e.persistence.referenceDelegate.removeTarget(t, n)
                                })];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [3, 5];
                            case 4:
                                if (!Iu(r = t.sent())) throw r;
                                return Kr("LocalStore", "Failed to update sequence numbers for target " + o + ": " + r), [3, 5];
                            case 5:
                                return e.kn = e.kn.remove(o), e.Fn.delete(n.target), [2]
                        }
                    })
                })
            }

            function wh(t, o, s) {
                var a = t,
                    u = ei.min(),
                    c = Zs();
                return a.persistence.runTransaction("Execute query", "readonly", function (e) {
                    return t = a, n = e, r = Vo(o), (void 0 !== (t = (i = t).Fn.get(r)) ? fu.resolve(i.kn.get(t)) : i.qe.getTargetData(n, r)).next(function (t) {
                        if (t) return u = t.lastLimboFreeSnapshotVersion, a.qe.getMatchingKeysForTargetId(e, t.targetId).next(function (t) {
                            c = t
                        })
                    }).next(function () {
                        return a.xn.getDocumentsMatchingQuery(e, o, s ? u : ei.min(), s ? c : Zs())
                    }).next(function (t) {
                        return {
                            documents: t,
                            Bn: c
                        }
                    });
                    var t, n, r, i
                })
            }

            function bh(t, e) {
                var n = t,
                    r = n.qe,
                    t = n.kn.get(e);
                return t ? Promise.resolve(t.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
                    return r.lt(t, e).next(function (t) {
                        return t ? t.target : null
                    })
                })
            }

            function Eh(t) {
                var s = t;
                return s.persistence.runTransaction("Get new document changes", "readonly", function (t) {
                    return e = s.On, n = t, t = s.$n, r = e, i = zs, o = ju(t), t = Qc(n), n = IDBKeyRange.lowerBound(o, !0), t.$t({
                        index: Za.readTimeIndex,
                        range: n
                    }, function (t, e) {
                        var n = qu(r.R, e);
                        i = i.insert(n.key, n), o = e.readTime
                    }).next(function () {
                        return {
                            wn: i,
                            readTime: Ku(o)
                        }
                    });
                    var e, n, r, i, o
                }).then(function (t) {
                    var e = t.wn,
                        t = t.readTime;
                    return s.$n = t, e
                })
            }

            function Th(n) {
                return y(this, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                        return [2, (e = n).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
                            return t = Qc(t), r = ei.min(), t.$t({
                                index: Za.readTimeIndex,
                                reverse: !0
                            }, function (t, e, n) {
                                e.readTime && (r = Ku(e.readTime)), n.done()
                            }).next(function () {
                                return r
                            });
                            var r
                        }).then(function (t) {
                            e.$n = t
                        })]
                    })
                })
            }
            var Ih, _h, Sh = (Hh.prototype.getBundleMetadata = function (t, e) {
                    return fu.resolve(this.Qn.get(e))
                }, Hh.prototype.saveBundleMetadata = function (t, e) {
                    return this.Qn.set(e.id, {
                        id: e.id,
                        version: e.version,
                        createTime: wa(e.createTime)
                    }), fu.resolve()
                }, Hh.prototype.getNamedQuery = function (t, e) {
                    return fu.resolve(this.jn.get(e))
                }, Hh.prototype.saveNamedQuery = function (t, e) {
                    return this.jn.set(e.name, {
                        name: (e = e).name,
                        query: Yu(e.bundledQuery),
                        readTime: wa(e.readTime)
                    }), fu.resolve()
                }, Hh),
                Ah = (Qh.prototype.isEmpty = function () {
                    return this.Wn.isEmpty()
                }, Qh.prototype.addReference = function (t, e) {
                    e = new Dh(t, e);
                    this.Wn = this.Wn.add(e), this.zn = this.zn.add(e)
                }, Qh.prototype.Jn = function (t, e) {
                    var n = this;
                    t.forEach(function (t) {
                        return n.addReference(t, e)
                    })
                }, Qh.prototype.removeReference = function (t, e) {
                    this.Yn(new Dh(t, e))
                }, Qh.prototype.Xn = function (t, e) {
                    var n = this;
                    t.forEach(function (t) {
                        return n.removeReference(t, e)
                    })
                }, Qh.prototype.Zn = function (t) {
                    var e = this,
                        n = new Ni(new ci([])),
                        r = new Dh(n, t),
                        t = new Dh(n, t + 1),
                        i = [];
                    return this.zn.forEachInRange([r, t], function (t) {
                        e.Yn(t), i.push(t.key)
                    }), i
                }, Qh.prototype.ts = function () {
                    var e = this;
                    this.Wn.forEach(function (t) {
                        return e.Yn(t)
                    })
                }, Qh.prototype.Yn = function (t) {
                    this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t)
                }, Qh.prototype.es = function (t) {
                    var e = new Ni(new ci([])),
                        n = new Dh(e, t),
                        t = new Dh(e, t + 1),
                        r = Zs();
                    return this.zn.forEachInRange([n, t], function (t) {
                        r = r.add(t.key)
                    }), r
                }, Qh.prototype.containsKey = function (t) {
                    var e = new Dh(t, 0),
                        e = this.Wn.firstAfterOrEqual(e);
                    return null !== e && t.isEqual(e.key)
                }, Qh),
                Dh = (Gh.Gn = function (t, e) {
                    return Ni.comparator(t.key, e.key) || $r(t.ns, e.ns)
                }, Gh.Hn = function (t, e) {
                    return $r(t.ns, e.ns) || Ni.comparator(t.key, e.key)
                }, Gh),
                Nh = (Kh.prototype.checkEmpty = function (t) {
                    return fu.resolve(0 === this._n.length)
                }, Kh.prototype.addMutationBatch = function (t, e, n, r) {
                    var i = this.ss;
                    this.ss++, 0 < this._n.length && this._n[this._n.length - 1];
                    n = new Ou(i, e, n, r);
                    this._n.push(n);
                    for (var o = 0, s = r; o < s.length; o++) {
                        var a = s[o];
                        this.rs = this.rs.add(new Dh(a.key, i)), this.Ut.addToCollectionParentIndex(t, a.key.path.popLast())
                    }
                    return fu.resolve(n)
                }, Kh.prototype.lookupMutationBatch = function (t, e) {
                    return fu.resolve(this.os(e))
                }, Kh.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
                    e = this.cs(e + 1), e = e < 0 ? 0 : e;
                    return fu.resolve(this._n.length > e ? this._n[e] : null)
                }, Kh.prototype.getHighestUnacknowledgedBatchId = function () {
                    return fu.resolve(0 === this._n.length ? -1 : this.ss - 1)
                }, Kh.prototype.getAllMutationBatches = function (t) {
                    return fu.resolve(this._n.slice())
                }, Kh.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
                    var n = this,
                        r = new Dh(e, 0),
                        e = new Dh(e, Number.POSITIVE_INFINITY),
                        i = [];
                    return this.rs.forEachInRange([r, e], function (t) {
                        t = n.os(t.ns);
                        i.push(t)
                    }), fu.resolve(i)
                }, Kh.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) {
                    var n = this,
                        r = new Qs($r);
                    return e.forEach(function (t) {
                        var e = new Dh(t, 0),
                            t = new Dh(t, Number.POSITIVE_INFINITY);
                        n.rs.forEachInRange([e, t], function (t) {
                            r = r.add(t.ns)
                        })
                    }), fu.resolve(this.us(r))
                }, Kh.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
                    var n = e.path,
                        r = n.length + 1,
                        e = n;
                    Ni.isDocumentKey(e) || (e = e.child(""));
                    var e = new Dh(new Ni(e), 0),
                        i = new Qs($r);
                    return this.rs.forEachWhile(function (t) {
                        var e = t.key.path;
                        return !!n.isPrefixOf(e) && (e.length === r && (i = i.add(t.ns)), !0)
                    }, e), fu.resolve(this.us(i))
                }, Kh.prototype.us = function (t) {
                    var e = this,
                        n = [];
                    return t.forEach(function (t) {
                        t = e.os(t);
                        null !== t && n.push(t)
                    }), n
                }, Kh.prototype.removeMutationBatch = function (n, r) {
                    var i = this;
                    Wr(0 === this.hs(r.batchId, "removed")), this._n.shift();
                    var o = this.rs;
                    return fu.forEach(r.mutations, function (t) {
                        var e = new Dh(t.key, r.batchId);
                        return o = o.delete(e), i.referenceDelegate.markPotentiallyOrphaned(n, t.key)
                    }).next(function () {
                        i.rs = o
                    })
                }, Kh.prototype.Gt = function (t) {}, Kh.prototype.containsKey = function (t, e) {
                    var n = new Dh(e, 0),
                        n = this.rs.firstAfterOrEqual(n);
                    return fu.resolve(e.isEqual(n && n.key))
                }, Kh.prototype.performConsistencyCheck = function (t) {
                    return this._n.length, fu.resolve()
                }, Kh.prototype.hs = function (t, e) {
                    return this.cs(t)
                }, Kh.prototype.cs = function (t) {
                    return 0 === this._n.length ? 0 : t - this._n[0].batchId
                }, Kh.prototype.os = function (t) {
                    t = this.cs(t);
                    return t < 0 || t >= this._n.length ? null : this._n[t]
                }, Kh),
                Ch = (jh.prototype.addEntry = function (t, e, n) {
                    var r = e.key,
                        i = this.docs.get(r),
                        o = i ? i.size : 0,
                        i = this.ls(e);
                    return this.docs = this.docs.insert(r, {
                        document: e.clone(),
                        size: i,
                        readTime: n
                    }), this.size += i - o, this.Ut.addToCollectionParentIndex(t, r.path.popLast())
                }, jh.prototype.removeEntry = function (t) {
                    var e = this.docs.get(t);
                    e && (this.docs = this.docs.remove(t), this.size -= e.size)
                }, jh.prototype.getEntry = function (t, e) {
                    var n = this.docs.get(e);
                    return fu.resolve(n ? n.document.clone() : Qi.newInvalidDocument(e))
                }, jh.prototype.getEntries = function (t, e) {
                    var n = this,
                        r = zs;
                    return e.forEach(function (t) {
                        var e = n.docs.get(t);
                        r = r.insert(t, e ? e.document.clone() : Qi.newInvalidDocument(t))
                    }), fu.resolve(r)
                }, jh.prototype.getDocumentsMatchingQuery = function (t, e, n) {
                    for (var r = zs, i = new Ni(e.path.child("")), o = this.docs.getIteratorFrom(i); o.hasNext();) {
                        var s = o.getNext(),
                            a = s.key,
                            u = s.value,
                            s = u.document,
                            u = u.readTime;
                        if (!e.path.isPrefixOf(a.path)) break;
                        u.compareTo(n) <= 0 || Ko(e, s) && (r = r.insert(s.key, s.clone()))
                    }
                    return fu.resolve(r)
                }, jh.prototype.fs = function (t, e) {
                    return fu.forEach(this.docs, function (t) {
                        return e(t)
                    })
                }, jh.prototype.newChangeBuffer = function (t) {
                    return new kh(this)
                }, jh.prototype.getSize = function (t) {
                    return fu.resolve(this.size)
                }, jh),
                kh = (n(Bh, _h = A), Bh.prototype.applyChanges = function (n) {
                    var r = this,
                        i = [];
                    return this.changes.forEach(function (t, e) {
                        e.document.isValidDocument() ? i.push(r.Ie.addEntry(n, e.document, r.getReadTime(t))) : r.Ie.removeEntry(t)
                    }), fu.waitFor(i)
                }, Bh.prototype.getFromCache = function (t, e) {
                    return this.Ie.getEntry(t, e)
                }, Bh.prototype.getAllFromCache = function (t, e) {
                    return this.Ie.getEntries(t, e)
                }, Bh),
                Rh = (qh.prototype.forEachTarget = function (t, n) {
                    return this.ds.forEach(function (t, e) {
                        return n(e)
                    }), fu.resolve()
                }, qh.prototype.getLastRemoteSnapshotVersion = function (t) {
                    return fu.resolve(this.lastRemoteSnapshotVersion)
                }, qh.prototype.getHighestSequenceNumber = function (t) {
                    return fu.resolve(this.ws)
                }, qh.prototype.allocateTargetId = function (t) {
                    return this.highestTargetId = this.ys.next(), fu.resolve(this.highestTargetId)
                }, qh.prototype.setTargetsMetadata = function (t, e, n) {
                    return n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), fu.resolve()
                }, qh.prototype.te = function (t) {
                    this.ds.set(t.target, t);
                    var e = t.targetId;
                    e > this.highestTargetId && (this.ys = new vc(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber)
                }, qh.prototype.addTargetData = function (t, e) {
                    return this.te(e), this.targetCount += 1, fu.resolve()
                }, qh.prototype.updateTargetData = function (t, e) {
                    return this.te(e), fu.resolve()
                }, qh.prototype.removeTargetData = function (t, e) {
                    return this.ds.delete(e.target), this._s.Zn(e.targetId), --this.targetCount, fu.resolve()
                }, qh.prototype.removeTargets = function (n, r, i) {
                    var o = this,
                        s = 0,
                        a = [];
                    return this.ds.forEach(function (t, e) {
                        e.sequenceNumber <= r && null === i.get(e.targetId) && (o.ds.delete(t), a.push(o.removeMatchingKeysForTargetId(n, e.targetId)), s++)
                    }), fu.waitFor(a).next(function () {
                        return s
                    })
                }, qh.prototype.getTargetCount = function (t) {
                    return fu.resolve(this.targetCount)
                }, qh.prototype.getTargetData = function (t, e) {
                    e = this.ds.get(e) || null;
                    return fu.resolve(e)
                }, qh.prototype.addMatchingKeys = function (t, e, n) {
                    return this._s.Jn(e, n), fu.resolve()
                }, qh.prototype.removeMatchingKeys = function (e, t, n) {
                    this._s.Xn(t, n);
                    var r = this.persistence.referenceDelegate,
                        i = [];
                    return r && t.forEach(function (t) {
                        i.push(r.markPotentiallyOrphaned(e, t))
                    }), fu.waitFor(i)
                }, qh.prototype.removeMatchingKeysForTargetId = function (t, e) {
                    return this._s.Zn(e), fu.resolve()
                }, qh.prototype.getMatchingKeysForTargetId = function (t, e) {
                    e = this._s.es(e);
                    return fu.resolve(e)
                }, qh.prototype.containsKey = function (t, e) {
                    return fu.resolve(this._s.containsKey(e))
                }, qh),
                xh = (Uh.prototype.start = function () {
                    return Promise.resolve()
                }, Uh.prototype.shutdown = function () {
                    return this.xe = !1, Promise.resolve()
                }, Object.defineProperty(Uh.prototype, "started", {
                    get: function () {
                        return this.xe
                    },
                    enumerable: !1,
                    configurable: !0
                }), Uh.prototype.setDatabaseDeletedListener = function () {}, Uh.prototype.setNetworkEnabled = function () {}, Uh.prototype.getIndexManager = function () {
                    return this.Ut
                }, Uh.prototype.getMutationQueue = function (t) {
                    var e = this.gs[t.toKey()];
                    return e || (e = new Nh(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), e
                }, Uh.prototype.getTargetCache = function () {
                    return this.qe
                }, Uh.prototype.getRemoteDocumentCache = function () {
                    return this.Ue
                }, Uh.prototype.getBundleCache = function () {
                    return this.Ke
                }, Uh.prototype.runTransaction = function (t, e, n) {
                    var r = this;
                    Kr("MemoryPersistence", "Starting transaction:", t);
                    var i = new Oh(this.Ne.next());
                    return this.referenceDelegate.Es(), n(i).next(function (t) {
                        return r.referenceDelegate.Ts(i).next(function () {
                            return t
                        })
                    }).toPromise().then(function (t) {
                        return i.raiseOnCommittedEvent(), t
                    })
                }, Uh.prototype.Is = function (e, n) {
                    return fu.or(Object.values(this.gs).map(function (t) {
                        return function () {
                            return t.containsKey(e, n)
                        }
                    }))
                }, Uh),
                Oh = (n(Vh, Ih = R), Vh),
                Lh = (Fh.bs = function (t) {
                    return new Fh(t)
                }, Object.defineProperty(Fh.prototype, "vs", {
                    get: function () {
                        if (this.Rs) return this.Rs;
                        throw zr()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Fh.prototype.addReference = function (t, e, n) {
                    return this.As.addReference(n, e), this.vs.delete(n.toString()), fu.resolve()
                }, Fh.prototype.removeReference = function (t, e, n) {
                    return this.As.removeReference(n, e), this.vs.add(n.toString()), fu.resolve()
                }, Fh.prototype.markPotentiallyOrphaned = function (t, e) {
                    return this.vs.add(e.toString()), fu.resolve()
                }, Fh.prototype.removeTarget = function (t, e) {
                    var n = this;
                    this.As.Zn(e.targetId).forEach(function (t) {
                        return n.vs.add(t.toString())
                    });
                    var r = this.persistence.getTargetCache();
                    return r.getMatchingKeysForTargetId(t, e.targetId).next(function (t) {
                        t.forEach(function (t) {
                            return n.vs.add(t.toString())
                        })
                    }).next(function () {
                        return r.removeTargetData(t, e)
                    })
                }, Fh.prototype.Es = function () {
                    this.Rs = new Set
                }, Fh.prototype.Ts = function (n) {
                    var r = this,
                        i = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                    return fu.forEach(this.vs, function (t) {
                        var e = Ni.fromPath(t);
                        return r.Ps(n, e).next(function (t) {
                            t || i.removeEntry(e)
                        })
                    }).next(function () {
                        return r.Rs = null, i.apply(n)
                    })
                }, Fh.prototype.updateLimboDocument = function (t, e) {
                    var n = this;
                    return this.Ps(t, e).next(function (t) {
                        t ? n.vs.delete(e.toString()) : n.vs.add(e.toString())
                    })
                }, Fh.prototype.ps = function (t) {
                    return 0
                }, Fh.prototype.Ps = function (t, e) {
                    var n = this;
                    return fu.or([function () {
                        return fu.resolve(n.As.containsKey(e))
                    }, function () {
                        return n.persistence.getTargetCache().containsKey(t, e)
                    }, function () {
                        return n.persistence.Is(t, e)
                    }])
                }, Fh),
                Ph = (Mh.prototype.isAuthenticated = function () {
                    return null != this.uid
                }, Mh.prototype.toKey = function () {
                    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                }, Mh.prototype.isEqual = function (t) {
                    return t.uid === this.uid
                }, Mh);

            function Mh(t) {
                this.uid = t
            }

            function Fh(t) {
                this.persistence = t, this.As = new Ah, this.Rs = null
            }

            function Vh(t) {
                var e = this;
                return (e = Ih.call(this) || this).currentSequenceNumber = t, e
            }

            function Uh(t, e) {
                var n = this;
                this.gs = {}, this.Ne = new Pr(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), this.qe = new Rh(this), this.Ut = new tc, this.Ue = (t = this.Ut, new Ch(t, function (t) {
                    return n.referenceDelegate.ps(t)
                })), this.R = new Mu(e), this.Ke = new Sh(this.R)
            }

            function qh(t) {
                this.persistence = t, this.ds = new Fc(Yi, Xi), this.lastRemoteSnapshotVersion = ei.min(), this.highestTargetId = 0, this.ws = 0, this._s = new Ah, this.targetCount = 0, this.ys = vc.Jt()
            }

            function Bh(t) {
                var e = this;
                return (e = _h.call(this) || this).Ie = t, e
            }

            function jh(t, e) {
                this.Ut = t, this.ls = e, this.docs = new Vs(Ni.comparator), this.size = 0
            }

            function Kh(t, e) {
                this.Ut = t, this.referenceDelegate = e, this._n = [], this.ss = 1, this.rs = new Qs(Dh.Gn)
            }

            function Gh(t, e) {
                this.key = t, this.ns = e
            }

            function Qh() {
                this.Wn = new Qs(Dh.Gn), this.zn = new Qs(Dh.Hn)
            }

            function Hh(t) {
                this.R = t, this.Qn = new Map, this.jn = new Map
            }

            function zh(t, e) {
                return "firestore_clients_" + t + "_" + e
            }

            function Wh(t, e, n) {
                n = "firestore_mutations_" + t + "_" + n;
                return e.isAuthenticated() && (n += "_" + e.uid), n
            }

            function Yh(t, e) {
                return "firestore_targets_" + t + "_" + e
            }
            Ph.UNAUTHENTICATED = new Ph(null), Ph.GOOGLE_CREDENTIALS = new Ph("google-credentials-uid"), Ph.FIRST_PARTY = new Ph("first-party-uid"), Ph.MOCK_USER = new Ph("mock-user");
            var Xh, $h = (bl.Vs = function (t, e, n) {
                    var r, i = JSON.parse(n),
                        o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
                    return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new Ur(i.error.code, i.error.message)), o ? new bl(t, e, i.state, r) : (Gr("SharedClientState", "Failed to parse mutation state for ID '" + e + "': " + n), null)
                }, bl.prototype.Ss = function () {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(t)
                }, bl),
                Jh = (wl.Vs = function (t, e) {
                    var n, r = JSON.parse(e),
                        i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error);
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (n = new Ur(r.error.code, r.error.message)), i ? new wl(t, r.state, n) : (Gr("SharedClientState", "Failed to parse target state for ID '" + t + "': " + e), null)
                }, wl.prototype.Ss = function () {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(t)
                }, wl),
                Zh = (vl.Vs = function (t, e) {
                    for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = ta, o = 0; r && o < n.activeTargetIds.length; ++o) r = Di(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]);
                    return r ? new vl(t, i) : (Gr("SharedClientState", "Failed to parse client data for instance '" + t + "': " + e), null)
                }, vl),
                tl = (ml.Vs = function (t) {
                    var e = JSON.parse(t);
                    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new ml(e.clientId, e.onlineState) : (Gr("SharedClientState", "Failed to parse online state: " + t), null)
                }, ml),
                el = (gl.prototype.Ds = function (t) {
                    this.activeTargetIds = this.activeTargetIds.add(t)
                }, gl.prototype.Cs = function (t) {
                    this.activeTargetIds = this.activeTargetIds.delete(t)
                }, gl.prototype.Ss = function () {
                    var t = {
                        activeTargetIds: this.activeTargetIds.toArray(),
                        updateTimeMs: Date.now()
                    };
                    return JSON.stringify(t)
                }, gl),
                nl = (yl.yt = function (t) {
                    return !(!t || !t.localStorage)
                }, yl.prototype.start = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n, r, i, o, s, a, u, c, h, l = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.syncEngine.fn()];
                                case 1:
                                    for (s = t.sent(), e = 0, n = s; e < n.length; e++)(r = n[e]) !== this.Ns && (i = this.getItem(zh(this.persistenceKey, r))) && (o = Zh.Vs(r, i)) && (this.Fs = this.Fs.insert(o.clientId, o));
                                    for (this.Qs(), (s = this.storage.getItem(this.Us)) && (a = this.js(s)) && this.Ws(a), u = 0, c = this.$s; u < c.length; u++) h = c[u], this.ks(h);
                                    return this.$s = [], this.window.addEventListener("pagehide", function () {
                                        return l.shutdown()
                                    }), this.started = !0, [2]
                            }
                        })
                    })
                }, yl.prototype.writeSequenceNumber = function (t) {
                    this.setItem(this.Ms, JSON.stringify(t))
                }, yl.prototype.getAllActiveQueryTargets = function () {
                    return this.Gs(this.Fs)
                }, yl.prototype.isActiveQueryTarget = function (n) {
                    var r = !1;
                    return this.Fs.forEach(function (t, e) {
                        e.activeTargetIds.has(n) && (r = !0)
                    }), r
                }, yl.prototype.addPendingMutation = function (t) {
                    this.zs(t, "pending")
                }, yl.prototype.updateMutationState = function (t, e, n) {
                    this.zs(t, e, n), this.Hs(t)
                }, yl.prototype.addLocalQueryTarget = function (t) {
                    var e, n = "not-current";
                    return this.isActiveQueryTarget(t) && (!(e = this.storage.getItem(Yh(this.persistenceKey, t))) || (e = Jh.Vs(t, e)) && (n = e.state)), this.Js.Ds(t), this.Qs(), n
                }, yl.prototype.removeLocalQueryTarget = function (t) {
                    this.Js.Cs(t), this.Qs()
                }, yl.prototype.isLocalQueryTarget = function (t) {
                    return this.Js.activeTargetIds.has(t)
                }, yl.prototype.clearQueryState = function (t) {
                    this.removeItem(Yh(this.persistenceKey, t))
                }, yl.prototype.updateQueryState = function (t, e, n) {
                    this.Ys(t, e, n)
                }, yl.prototype.handleUserChange = function (t, e, n) {
                    var r = this;
                    e.forEach(function (t) {
                        r.Hs(t)
                    }), this.currentUser = t, n.forEach(function (t) {
                        r.addPendingMutation(t)
                    })
                }, yl.prototype.setOnlineState = function (t) {
                    this.Xs(t)
                }, yl.prototype.notifyBundleLoaded = function () {
                    this.Zs()
                }, yl.prototype.shutdown = function () {
                    this.started && (this.window.removeEventListener("storage", this.xs), this.removeItem(this.Os), this.started = !1)
                }, yl.prototype.getItem = function (t) {
                    var e = this.storage.getItem(t);
                    return Kr("SharedClientState", "READ", t, e), e
                }, yl.prototype.setItem = function (t, e) {
                    Kr("SharedClientState", "SET", t, e), this.storage.setItem(t, e)
                }, yl.prototype.removeItem = function (t) {
                    Kr("SharedClientState", "REMOVE", t), this.storage.removeItem(t)
                }, yl.prototype.ks = function (t) {
                    var e = this,
                        o = t;
                    o.storageArea === this.storage && (Kr("SharedClientState", "EVENT", o.key, o.newValue), o.key !== this.Os ? this.Se.enqueueRetryable(function () {
                        return y(e, void 0, void 0, function () {
                            var e, n, r, i;
                            return g(this, function (t) {
                                if (this.started) {
                                    if (null !== o.key)
                                        if (this.Ls.test(o.key)) {
                                            if (null == o.newValue) return e = this.ti(o.key), [2, this.ei(e, null)];
                                            if (e = this.ni(o.key, o.newValue)) return [2, this.ei(e.clientId, e)]
                                        } else if (this.Bs.test(o.key)) {
                                        if (null !== o.newValue && (n = this.si(o.key, o.newValue))) return [2, this.ii(n)]
                                    } else if (this.qs.test(o.key)) {
                                        if (null !== o.newValue && (r = this.ri(o.key, o.newValue))) return [2, this.oi(r)]
                                    } else if (o.key === this.Us) {
                                        if (null !== o.newValue && (i = this.js(o.newValue))) return [2, this.Ws(i)]
                                    } else if (o.key === this.Ms)(i = function (t) {
                                        var e = Pr.o;
                                        if (null != t) try {
                                            var n = JSON.parse(t);
                                            Wr("number" == typeof n), e = n
                                        } catch (t) {
                                            Gr("SharedClientState", "Failed to read sequence number from WebStorage", t)
                                        }
                                        return e
                                    }(o.newValue)) !== Pr.o && this.sequenceNumberHandler(i);
                                    else if (o.key === this.Ks) return [2, this.syncEngine.ci()]
                                } else this.$s.push(o);
                                return [2]
                            })
                        })
                    }) : Gr("Received WebStorage notification for local change. Another client might have garbage-collected our state"))
                }, Object.defineProperty(yl.prototype, "Js", {
                    get: function () {
                        return this.Fs.get(this.Ns)
                    },
                    enumerable: !1,
                    configurable: !0
                }), yl.prototype.Qs = function () {
                    this.setItem(this.Os, this.Js.Ss())
                }, yl.prototype.zs = function (t, e, n) {
                    n = new $h(this.currentUser, t, e, n), t = Wh(this.persistenceKey, this.currentUser, t);
                    this.setItem(t, n.Ss())
                }, yl.prototype.Hs = function (t) {
                    t = Wh(this.persistenceKey, this.currentUser, t);
                    this.removeItem(t)
                }, yl.prototype.Xs = function (t) {
                    t = {
                        clientId: this.Ns,
                        onlineState: t
                    };
                    this.storage.setItem(this.Us, JSON.stringify(t))
                }, yl.prototype.Ys = function (t, e, n) {
                    var r = Yh(this.persistenceKey, t),
                        n = new Jh(t, e, n);
                    this.setItem(r, n.Ss())
                }, yl.prototype.Zs = function () {
                    this.setItem(this.Ks, "value-not-used")
                }, yl.prototype.ti = function (t) {
                    t = this.Ls.exec(t);
                    return t ? t[1] : null
                }, yl.prototype.ni = function (t, e) {
                    t = this.ti(t);
                    return Zh.Vs(t, e)
                }, yl.prototype.si = function (t, e) {
                    var n = this.Bs.exec(t),
                        t = Number(n[1]),
                        n = void 0 !== n[2] ? n[2] : null;
                    return $h.Vs(new Ph(n), t, e)
                }, yl.prototype.ri = function (t, e) {
                    t = this.qs.exec(t), t = Number(t[1]);
                    return Jh.Vs(t, e)
                }, yl.prototype.js = function (t) {
                    return tl.Vs(t)
                }, yl.prototype.ii = function (e) {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            return e.user.uid === this.currentUser.uid ? [2, this.syncEngine.ui(e.batchId, e.state, e.error)] : (Kr("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2])
                        })
                    })
                }, yl.prototype.oi = function (t) {
                    return this.syncEngine.ai(t.targetId, t.state, t.error)
                }, yl.prototype.ei = function (t, e) {
                    var n = this,
                        r = e ? this.Fs.insert(t, e) : this.Fs.remove(t),
                        i = this.Gs(this.Fs),
                        o = this.Gs(r),
                        s = [],
                        a = [];
                    return o.forEach(function (t) {
                        i.has(t) || s.push(t)
                    }), i.forEach(function (t) {
                        o.has(t) || a.push(t)
                    }), this.syncEngine.hi(s, a).then(function () {
                        n.Fs = r
                    })
                }, yl.prototype.Ws = function (t) {
                    this.Fs.get(t.clientId) && this.onlineStateHandler(t.onlineState)
                }, yl.prototype.Gs = function (t) {
                    var n = ta;
                    return t.forEach(function (t, e) {
                        n = n.unionWith(e.activeTargetIds)
                    }), n
                }, yl),
                rl = (pl.prototype.addPendingMutation = function (t) {}, pl.prototype.updateMutationState = function (t, e, n) {}, pl.prototype.addLocalQueryTarget = function (t) {
                    return this.li.Ds(t), this.fi[t] || "not-current"
                }, pl.prototype.updateQueryState = function (t, e, n) {
                    this.fi[t] = e
                }, pl.prototype.removeLocalQueryTarget = function (t) {
                    this.li.Cs(t)
                }, pl.prototype.isLocalQueryTarget = function (t) {
                    return this.li.activeTargetIds.has(t)
                }, pl.prototype.clearQueryState = function (t) {
                    delete this.fi[t]
                }, pl.prototype.getAllActiveQueryTargets = function () {
                    return this.li.activeTargetIds
                }, pl.prototype.isActiveQueryTarget = function (t) {
                    return this.li.activeTargetIds.has(t)
                }, pl.prototype.start = function () {
                    return this.li = new el, Promise.resolve()
                }, pl.prototype.handleUserChange = function (t, e, n) {}, pl.prototype.setOnlineState = function (t) {}, pl.prototype.shutdown = function () {}, pl.prototype.writeSequenceNumber = function (t) {}, pl.prototype.notifyBundleLoaded = function () {}, pl),
                il = (dl.prototype.di = function (t) {}, dl.prototype.shutdown = function () {}, dl),
                ol = (fl.prototype.di = function (t) {
                    this.gi.push(t)
                }, fl.prototype.shutdown = function () {
                    window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi)
                }, fl.prototype.pi = function () {
                    window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi)
                }, fl.prototype._i = function () {
                    Kr("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                    for (var t = 0, e = this.gi; t < e.length; t++)(0, e[t])(0)
                }, fl.prototype.yi = function () {
                    Kr("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                    for (var t = 0, e = this.gi; t < e.length; t++)(0, e[t])(1)
                }, fl.yt = function () {
                    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                }, fl),
                sl = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit",
                    RunQuery: "runQuery"
                },
                al = (ll.prototype.Ii = function (t) {
                    this.Ai = t
                }, ll.prototype.Ri = function (t) {
                    this.bi = t
                }, ll.prototype.onMessage = function (t) {
                    this.vi = t
                }, ll.prototype.close = function () {
                    this.Ti()
                }, ll.prototype.send = function (t) {
                    this.Ei(t)
                }, ll.prototype.Pi = function () {
                    this.Ai()
                }, ll.prototype.Vi = function (t) {
                    this.bi(t)
                }, ll.prototype.Si = function (t) {
                    this.vi(t)
                }, ll),
                ul = (hl.prototype.Ni = function (e, t, n, r) {
                    var i = this.xi(e, t);
                    Kr("RestConnection", "Sending: ", i, n);
                    t = {};
                    return this.ki(t, r), this.Fi(e, i, t, n).then(function (t) {
                        return Kr("RestConnection", "Received: ", t), t
                    }, function (t) {
                        throw Qr("RestConnection", e + " failed with error: ", t, "url: ", i, "request:", n), t
                    })
                }, hl.prototype.$i = function (t, e, n, r) {
                    return this.Ni(t, e, n, r)
                }, hl.prototype.ki = function (t, e) {
                    if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.10.0", t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e)
                        for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n])
                }, hl.prototype.xi = function (t, e) {
                    return this.Di + "/v1/" + e + ":" + sl[t]
                }, n(cl, Xh = hl), cl.prototype.Fi = function (u, e, n, r) {
                    return new Promise(function (o, s) {
                        var a = new Lr;
                        a.listenOnce(Nr.COMPLETE, function () {
                            try {
                                switch (a.getLastErrorCode()) {
                                    case Dr.NO_ERROR:
                                        var t = a.getResponseJson();
                                        Kr("Connection", "XHR received:", JSON.stringify(t)), o(t);
                                        break;
                                    case Dr.TIMEOUT:
                                        Kr("Connection", 'RPC "' + u + '" timed out'), s(new Ur(Vr.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case Dr.HTTP_ERROR:
                                        var e, n, r = a.getStatus();
                                        Kr("Connection", 'RPC "' + u + '" failed with status:', r, "response text:", a.getResponseText()), 0 < r ? (e = a.getResponseJson().error) && e.status && e.message ? (i = e.status.toLowerCase().replace(/_/g, "-"), n = 0 <= Object.values(Vr).indexOf(i) ? i : Vr.UNKNOWN, s(new Ur(n, e.message))) : s(new Ur(Vr.UNKNOWN, "Server responded with status " + a.getStatus())) : s(new Ur(Vr.UNAVAILABLE, "Connection failed."));
                                        break;
                                    default:
                                        zr()
                                }
                            } finally {
                                Kr("Connection", 'RPC "' + u + '" completed.')
                            }
                            var i
                        });
                        var t = JSON.stringify(r);
                        a.send(e, "POST", t, n, 15)
                    })
                }, cl.prototype.Oi = function (t, e) {
                    var n, r = [this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                        i = new Er,
                        o = Ar(),
                        t = {
                            httpSessionIdParam: "gsessionid",
                            initMessageHeaders: {},
                            messageUrlParams: {
                                database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                            },
                            sendRawJson: !0,
                            supportsCrossDomainXhr: !0,
                            internalChannelParams: {
                                forwardChannelRequestTimeoutMs: 6e5
                            },
                            forceLongPolling: this.forceLongPolling,
                            detectBufferingProxy: this.autoDetectLongPolling
                        };
                    this.useFetchStreams && (t.xmlHttpFactory = new xr({})), this.ki(t.initMessageHeaders, e), "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h()) || "object" == typeof navigator && "ReactNative" === navigator.product || 0 <= h().indexOf("Electron/") || (0 <= (n = h()).indexOf("MSIE ") || 0 <= n.indexOf("Trident/")) || 0 <= h().indexOf("MSAppHost/") || "object" == typeof (n = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0) && void 0 !== n.id || (t.httpHeadersOverwriteParam = "$httpHeaders");
                    r = r.join("");
                    Kr("Connection", "Creating WebChannel: " + r, t);
                    var s = i.createWebChannel(r, t),
                        a = !1,
                        u = !1,
                        c = new al({
                            Ei: function (t) {
                                u ? Kr("Connection", "Not sending because WebChannel is closed:", t) : (a || (Kr("Connection", "Opening WebChannel transport."), s.open(), a = !0), Kr("Connection", "WebChannel sending:", t), s.send(t))
                            },
                            Ti: function () {
                                return s.close()
                            }
                        }),
                        t = function (t, e, n) {
                            t.listen(e, function (t) {
                                try {
                                    n(t)
                                } catch (t) {
                                    setTimeout(function () {
                                        throw t
                                    }, 0)
                                }
                            })
                        };
                    return t(s, Or.EventType.OPEN, function () {
                        u || Kr("Connection", "WebChannel transport opened.")
                    }), t(s, Or.EventType.CLOSE, function () {
                        u || (u = !0, Kr("Connection", "WebChannel transport closed"), c.Vi())
                    }), t(s, Or.EventType.ERROR, function (t) {
                        u || (u = !0, Qr("Connection", "WebChannel transport errored:", t), c.Vi(new Ur(Vr.UNAVAILABLE, "The operation could not be completed")))
                    }), t(s, Or.EventType.MESSAGE, function (t) {
                        var e, n, r, i;
                        u || (Wr(!!(e = t.data[0])), (n = e.error || (null === (i = e[0]) || void 0 === i ? void 0 : i.error)) ? (Kr("Connection", "WebChannel received error:", n), r = n.status, t = function () {
                            var t = Cs[r];
                            if (void 0 !== t) return Fs(t)
                        }(), i = n.message, void 0 === t && (t = Vr.INTERNAL, i = "Unknown error status: " + r + " with message " + n.message), u = !0, c.Vi(new Ur(t, i)), s.close()) : (Kr("Connection", "WebChannel received:", e), c.Si(e)))
                    }), t(o, Cr.STAT_EVENT, function (t) {
                        t.stat === kr ? Kr("Connection", "Detected buffering proxy") : t.stat === Rr && Kr("Connection", "Detected no buffering proxy")
                    }), setTimeout(function () {
                        c.Pi()
                    }, 0), c
                }, cl);

            function cl(t) {
                var e = this;
                return (e = Xh.call(this, t) || this).forceLongPolling = t.forceLongPolling, e.autoDetectLongPolling = t.autoDetectLongPolling, e.useFetchStreams = t.useFetchStreams, e
            }

            function hl(t) {
                this.databaseInfo = t, this.databaseId = t.databaseId;
                var e = t.ssl ? "https" : "http";
                this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
            }

            function ll(t) {
                this.Ei = t.Ei, this.Ti = t.Ti
            }

            function fl() {
                var t = this;
                this.wi = function () {
                    return t._i()
                }, this.mi = function () {
                    return t.yi()
                }, this.gi = [], this.pi()
            }

            function dl() {}

            function pl() {
                this.li = new el, this.fi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
            }

            function yl(t, e, n, r, i) {
                this.window = t, this.Se = e, this.persistenceKey = n, this.Ns = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.xs = this.ks.bind(this), this.Fs = new Vs($r), this.started = !1, this.$s = [];
                n = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.window.localStorage, this.currentUser = i, this.Os = zh(this.persistenceKey, this.Ns), this.Ms = "firestore_sequence_number_" + this.persistenceKey, this.Fs = this.Fs.insert(this.Ns, new el), this.Ls = new RegExp("^firestore_clients_" + n + "_([^_]*)$"), this.Bs = new RegExp("^firestore_mutations_" + n + "_(\\d+)(?:_(.*))?$"), this.qs = new RegExp("^firestore_targets_" + n + "_(\\d+)$"), this.Us = "firestore_online_state_" + this.persistenceKey, this.Ks = "firestore_bundle_loaded_" + this.persistenceKey, this.window.addEventListener("storage", this.xs)
            }

            function gl() {
                this.activeTargetIds = ta
            }

            function ml(t, e) {
                this.clientId = t, this.onlineState = e
            }

            function vl(t, e) {
                this.clientId = t, this.activeTargetIds = e
            }

            function wl(t, e, n) {
                this.targetId = t, this.state = e, this.error = n
            }

            function bl(t, e, n, r) {
                this.user = t, this.batchId = e, this.state = n, this.error = r
            }

            function El() {
                return "undefined" != typeof window ? window : null
            }

            function Tl() {
                return "undefined" != typeof document ? document : null
            }

            function Il(t) {
                return new ga(t, !0)
            }

            function _l(t, e, n, r, i) {
                var o = this;
                this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.Fr = [], this.$r = new Map, this.Or = new Set, this.Mr = [], this.Lr = i, this.Lr.di(function (t) {
                    n.enqueueAndForget(function () {
                        return y(o, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return zl(this) ? (Kr("RemoteStore", "Restarting streams for network reachability change."), [4, function (n) {
                                            return y(this, void 0, void 0, function () {
                                                var e;
                                                return g(this, function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return (e = n).Or.add(4), [4, ql(e)];
                                                        case 1:
                                                            return t.sent(), e.Br.set("Unknown"), e.Or.delete(4), [4, Ul(e)];
                                                        case 2:
                                                            return t.sent(), [2]
                                                    }
                                                })
                                            })
                                        }(this)]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }), this.Br = new xl(n, r)
            }
            var Sl, Al, Dl, Nl = (Vl.prototype.reset = function () {
                    this.qi = 0
                }, Vl.prototype.Qi = function () {
                    this.qi = this.Bi
                }, Vl.prototype.ji = function (t) {
                    var e = this;
                    this.cancel();
                    var n = Math.floor(this.qi + this.Wi()),
                        r = Math.max(0, Date.now() - this.Ki),
                        i = Math.max(0, n - r);
                    0 < i && Kr("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.qi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, function () {
                        return e.Ki = Date.now(), t()
                    }), this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi)
                }, Vl.prototype.Gi = function () {
                    null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null)
                }, Vl.prototype.cancel = function () {
                    null !== this.Ui && (this.Ui.cancel(), this.Ui = null)
                }, Vl.prototype.Wi = function () {
                    return (Math.random() - .5) * this.qi
                }, Vl),
                A = (Fl.prototype.tr = function () {
                    return 1 === this.state || 2 === this.state || 4 === this.state
                }, Fl.prototype.er = function () {
                    return 2 === this.state
                }, Fl.prototype.start = function () {
                    3 !== this.state ? this.auth() : this.nr()
                }, Fl.prototype.stop = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.tr() ? [4, this.close(0)] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, Fl.prototype.sr = function () {
                    this.state = 0, this.Zi.reset()
                }, Fl.prototype.ir = function () {
                    var t = this;
                    this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function () {
                        return t.rr()
                    }))
                }, Fl.prototype.cr = function (t) {
                    this.ur(), this.stream.send(t)
                }, Fl.prototype.rr = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            return this.er() ? [2, this.close(0)] : [2]
                        })
                    })
                }, Fl.prototype.ur = function () {
                    this.Xi && (this.Xi.cancel(), this.Xi = null)
                }, Fl.prototype.close = function (e, n) {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.ur(), this.Zi.cancel(), this.Yi++, 3 !== e ? this.Zi.reset() : n && n.code === Vr.RESOURCE_EXHAUSTED ? (Gr(n.toString()), Gr("Using maximum backoff delay to prevent overloading the backend."), this.Zi.Qi()) : n && n.code === Vr.UNAUTHENTICATED && this.Ji.invalidateToken(), null !== this.stream && (this.ar(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.Ri(n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Fl.prototype.ar = function () {}, Fl.prototype.auth = function () {
                    var n = this;
                    this.state = 1;
                    var t = this.hr(this.Yi),
                        e = this.Yi;
                    this.Ji.getToken().then(function (t) {
                        n.Yi === e && n.lr(t)
                    }, function (e) {
                        t(function () {
                            var t = new Ur(Vr.UNKNOWN, "Fetching auth token failed: " + e.message);
                            return n.dr(t)
                        })
                    })
                }, Fl.prototype.lr = function (t) {
                    var e = this,
                        n = this.hr(this.Yi);
                    this.stream = this.wr(t), this.stream.Ii(function () {
                        n(function () {
                            return e.state = 2, e.listener.Ii()
                        })
                    }), this.stream.Ri(function (t) {
                        n(function () {
                            return e.dr(t)
                        })
                    }), this.stream.onMessage(function (t) {
                        n(function () {
                            return e.onMessage(t)
                        })
                    })
                }, Fl.prototype.nr = function () {
                    var t = this;
                    this.state = 4, this.Zi.ji(function () {
                        return y(t, void 0, void 0, function () {
                            return g(this, function (t) {
                                return this.state = 0, this.start(), [2]
                            })
                        })
                    })
                }, Fl.prototype.dr = function (t) {
                    return Kr("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t)
                }, Fl.prototype.hr = function (e) {
                    var n = this;
                    return function (t) {
                        n.Se.enqueueAndForget(function () {
                            return n.Yi === e ? t() : (Kr("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                        })
                    }
                }, Fl),
                Cl = (n(Ml, Dl = A), Ml.prototype.wr = function (t) {
                    return this.Hi.Oi("Listen", t)
                }, Ml.prototype.onMessage = function (t) {
                    this.Zi.reset();
                    var e = function (t, e) {
                            if ("targetChange" in e) {
                                e.targetChange;
                                var n = "NO_CHANGE" === (o = e.targetChange.targetChangeType || "NO_CHANGE") ? 0 : "ADD" === o ? 1 : "REMOVE" === o ? 2 : "CURRENT" === o ? 3 : "RESET" === o ? 4 : zr(),
                                    r = e.targetChange.targetIds || [],
                                    i = (s = e.targetChange.resumeToken, t.I ? (Wr(void 0 === s || "string" == typeof s), di.fromBase64String(s || "")) : (Wr(void 0 === s || s instanceof Uint8Array), di.fromUint8Array(s || new Uint8Array))),
                                    o = (a = e.targetChange.cause) && (u = void 0 === (c = a).code ? Vr.UNKNOWN : Fs(c.code), new Ur(u, c.message || "")),
                                    s = new oa(n, r, i, o || null)
                            } else if ("documentChange" in e) {
                                e.documentChange, (n = e.documentChange).document, n.document.name, n.document.updateTime;
                                var r = Ia(t, n.document.name),
                                    i = wa(n.document.updateTime),
                                    a = new Ki({
                                        mapValue: {
                                            fields: n.document.fields
                                        }
                                    }),
                                    u = (o = Qi.newFoundDocument(r, i, a), n.targetIds || []),
                                    c = n.removedTargetIds || [];
                                s = new ra(u, c, o.key, o)
                            } else if ("documentDelete" in e) e.documentDelete, (n = e.documentDelete).document, r = Ia(t, n.document), i = n.readTime ? wa(n.readTime) : ei.min(), a = Qi.newNoDocument(r, i), o = n.removedTargetIds || [], s = new ra([], o, a.key, a);
                            else if ("documentRemove" in e) e.documentRemove, (n = e.documentRemove).document, r = Ia(t, n.document), i = n.removedTargetIds || [], s = new ra([], i, r, null);
                            else {
                                if (!("filter" in e)) return zr();
                                e.filter;
                                e = e.filter;
                                e.targetId, n = e.count || 0, r = new Ns(n), i = e.targetId, s = new ia(i, r)
                            }
                            return s
                        }(this.R, t),
                        t = function (t) {
                            if (!("targetChange" in t)) return ei.min();
                            t = t.targetChange;
                            return (!t.targetIds || !t.targetIds.length) && t.readTime ? wa(t.readTime) : ei.min()
                        }(t);
                    return this.listener._r(e, t)
                }, Ml.prototype.mr = function (t) {
                    var e, n, r, i = {};
                    i.database = Aa(this.R), i.addTarget = (e = this.R, (r = $i(r = (n = t).target) ? {
                        documents: xa(e, r)
                    } : {
                        query: Oa(e, r)
                    }).targetId = n.targetId, 0 < n.resumeToken.approximateByteSize() ? r.resumeToken = va(e, n.resumeToken) : 0 < n.snapshotVersion.compareTo(ei.min()) && (r.readTime = ma(e, n.snapshotVersion.toTimestamp())), r);
                    var o, t = (this.R, o = t, null == (t = function () {
                        switch (o.purpose) {
                            case 0:
                                return null;
                            case 1:
                                return "existence-filter-mismatch";
                            case 2:
                                return "limbo-document";
                            default:
                                return zr()
                        }
                    }()) ? null : {
                        "goog-listen-tags": t
                    });
                    t && (i.labels = t), this.cr(i)
                }, Ml.prototype.yr = function (t) {
                    var e = {};
                    e.database = Aa(this.R), e.removeTarget = t, this.cr(e)
                }, Ml),
                kl = (n(Pl, Al = A), Object.defineProperty(Pl.prototype, "pr", {
                    get: function () {
                        return this.gr
                    },
                    enumerable: !1,
                    configurable: !0
                }), Pl.prototype.start = function () {
                    this.gr = !1, this.lastStreamToken = void 0, Al.prototype.start.call(this)
                }, Pl.prototype.ar = function () {
                    this.gr && this.Er([])
                }, Pl.prototype.wr = function (t) {
                    return this.Hi.Oi("Write", t)
                }, Pl.prototype.onMessage = function (t) {
                    if (Wr(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr) {
                        this.Zi.reset();
                        var e = (n = t.writeResults, r = t.commitTime, n && 0 < n.length ? (Wr(void 0 !== r), n.map(function (t) {
                                return n = r, (t = (e = t).updateTime ? wa(e.updateTime) : wa(n)).isEqual(ei.min()) && (t = wa(n)), new ls(t, e.transformResults || []);
                                var e, n
                            })) : []),
                            n = wa(t.commitTime);
                        return this.listener.Tr(n, e)
                    }
                    var n, r;
                    return Wr(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, this.listener.Ir()
                }, Pl.prototype.Ar = function () {
                    var t = {};
                    t.database = Aa(this.R), this.cr(t)
                }, Pl.prototype.Er = function (t) {
                    var e = this,
                        t = {
                            streamToken: this.lastStreamToken,
                            writes: t.map(function (t) {
                                return ka(e.R, t)
                            })
                        };
                    this.cr(t)
                }, Pl),
                Rl = (n(Ll, Sl = function () {}), Ll.prototype.br = function () {
                    if (this.Rr) throw new Ur(Vr.FAILED_PRECONDITION, "The client has already been terminated.")
                }, Ll.prototype.Ni = function (e, n, r) {
                    var i = this;
                    return this.br(), this.credentials.getToken().then(function (t) {
                        return i.Hi.Ni(e, n, r, t)
                    }).catch(function (t) {
                        throw "FirebaseError" === t.name ? (t.code === Vr.UNAUTHENTICATED && i.credentials.invalidateToken(), t) : new Ur(Vr.UNKNOWN, t.toString())
                    })
                }, Ll.prototype.$i = function (e, n, r) {
                    var i = this;
                    return this.br(), this.credentials.getToken().then(function (t) {
                        return i.Hi.$i(e, n, r, t)
                    }).catch(function (t) {
                        throw "FirebaseError" === t.name ? (t.code === Vr.UNAUTHENTICATED && i.credentials.invalidateToken(), t) : new Ur(Vr.UNKNOWN, t.toString())
                    })
                }, Ll.prototype.terminate = function () {
                    this.Rr = !0
                }, Ll),
                xl = (Ol.prototype.Sr = function () {
                    var t = this;
                    0 === this.vr && (this.Dr("Unknown"), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, function () {
                        return t.Pr = null, t.Cr("Backend didn't respond within 10 seconds."), t.Dr("Offline"), Promise.resolve()
                    }))
                }, Ol.prototype.Nr = function (t) {
                    "Online" === this.state ? this.Dr("Unknown") : (this.vr++, 1 <= this.vr && (this.kr(), this.Cr("Connection failed 1 times. Most recent error: " + t.toString()), this.Dr("Offline")))
                }, Ol.prototype.set = function (t) {
                    this.kr(), this.vr = 0, "Online" === t && (this.Vr = !1), this.Dr(t)
                }, Ol.prototype.Dr = function (t) {
                    t !== this.state && (this.state = t, this.onlineStateHandler(t))
                }, Ol.prototype.Cr = function (t) {
                    t = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                    this.Vr ? (Gr(t), this.Vr = !1) : Kr("OnlineStateTracker", t)
                }, Ol.prototype.kr = function () {
                    null !== this.Pr && (this.Pr.cancel(), this.Pr = null)
                }, Ol);

            function Ol(t, e) {
                this.asyncQueue = t, this.onlineStateHandler = e, this.state = "Unknown", this.vr = 0, this.Pr = null, this.Vr = !0
            }

            function Ll(t, e, n) {
                var r = this;
                return (r = Sl.call(this) || this).credentials = t, r.Hi = e, r.R = n, r.Rr = !1, r
            }

            function Pl(t, e, n, r, i) {
                var o = this;
                return (o = Al.call(this, t, "write_stream_connection_backoff", "write_stream_idle", e, n, i) || this).R = r, o.gr = !1, o
            }

            function Ml(t, e, n, r, i) {
                var o = this;
                return (o = Dl.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", e, n, i) || this).R = r, o
            }

            function Fl(t, e, n, r, i, o) {
                this.Se = t, this.zi = n, this.Hi = r, this.Ji = i, this.listener = o, this.state = 0, this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new Nl(t, e)
            }

            function Vl(t, e, n, r, i) {
                void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Se = t, this.timerId = e, this.Mi = n, this.Li = r, this.Bi = i, this.qi = 0, this.Ui = null, this.Ki = Date.now(), this.reset()
            }

            function Ul(r) {
                return y(this, void 0, void 0, function () {
                    var e, n;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!zl(r)) return [3, 4];
                                e = 0, n = r.Mr, t.label = 1;
                            case 1:
                                return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return e++, [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function ql(r) {
                return y(this, void 0, void 0, function () {
                    var e, n;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                e = 0, n = r.Mr, t.label = 1;
                            case 1:
                                return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return e++, [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function Bl(t, e) {
                t.$r.has(e.targetId) || (t.$r.set(e.targetId, e), Hl(t) ? Ql(t) : nf(t).er() && Kl(t, e))
            }

            function jl(t, e) {
                var n = t,
                    t = nf(n);
                n.$r.delete(e), t.er() && Gl(n, e), 0 === n.$r.size && (t.er() ? t.ir() : zl(n) && n.Br.set("Unknown"))
            }

            function Kl(t, e) {
                t.qr.U(e.targetId), nf(t).mr(e)
            }

            function Gl(t, e) {
                t.qr.U(e), nf(t).yr(e)
            }

            function Ql(e) {
                e.qr = new aa({
                    getRemoteKeysForTarget: function (t) {
                        return e.remoteSyncer.getRemoteKeysForTarget(t)
                    },
                    lt: function (t) {
                        return e.$r.get(t) || null
                    }
                }), nf(e).start(), e.Br.Sr()
            }

            function Hl(t) {
                return zl(t) && !nf(t).tr() && 0 < t.$r.size
            }

            function zl(t) {
                return 0 === t.Or.size
            }

            function Wl(t) {
                t.qr = void 0
            }

            function Yl(s, a, u) {
                return y(this, void 0, void 0, function () {
                    var n, o;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (s.Br.set("Online"), !(a instanceof oa && 2 === a.state && a.cause)) return [3, 6];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 5]), [4, function (o, s) {
                                    return y(this, void 0, void 0, function () {
                                        var e, n, r, i;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    e = s.cause, n = 0, r = s.targetIds, t.label = 1;
                                                case 1:
                                                    return n < r.length ? (i = r[n], o.$r.has(i) ? [4, o.remoteSyncer.rejectListen(i, e)] : [3, 3]) : [3, 5];
                                                case 2:
                                                    t.sent(), o.$r.delete(i), o.qr.removeTarget(i), t.label = 3;
                                                case 3:
                                                    t.label = 4;
                                                case 4:
                                                    return n++, [3, 1];
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(s, a)];
                            case 2:
                                return t.sent(), [3, 5];
                            case 3:
                                return n = t.sent(), Kr("RemoteStore", "Failed to remove targets %s: %s ", a.targetIds.join(","), n), [4, Xl(s, n)];
                            case 4:
                                return t.sent(), [3, 5];
                            case 5:
                                return [3, 13];
                            case 6:
                                if (a instanceof ra ? s.qr.X(a) : a instanceof ia ? s.qr.rt(a) : s.qr.et(a), u.isEqual(ei.min())) return [3, 13];
                                t.label = 7;
                            case 7:
                                return t.trys.push([7, 11, , 13]), [4, ph(s.localStore)];
                            case 8:
                                return o = t.sent(), 0 <= u.compareTo(o) ? [4, (i = u, (e = (r = s).qr.ut(i)).targetChanges.forEach(function (t, e) {
                                    var n;
                                    0 < t.resumeToken.approximateByteSize() && ((n = r.$r.get(e)) && r.$r.set(e, n.withResumeToken(t.resumeToken, i)))
                                }), e.targetMismatches.forEach(function (t) {
                                    var e = r.$r.get(t);
                                    e && (r.$r.set(t, e.withResumeToken(di.EMPTY_BYTE_STRING, e.snapshotVersion)), Gl(r, t), e = new Pu(e.target, t, 1, e.sequenceNumber), Kl(r, e))
                                }), r.remoteSyncer.applyRemoteEvent(e))] : [3, 10];
                            case 9:
                                t.sent(), t.label = 10;
                            case 10:
                                return [3, 13];
                            case 11:
                                return Kr("RemoteStore", "Failed to raise snapshot:", o = t.sent()), [4, Xl(s, o)];
                            case 12:
                                return t.sent(), [3, 13];
                            case 13:
                                return [2]
                        }
                        var r, i, e
                    })
                })
            }

            function Xl(n, r, i) {
                return y(this, void 0, void 0, function () {
                    var e = this;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!Iu(r)) throw r;
                                return n.Or.add(1), [4, ql(n)];
                            case 1:
                                return t.sent(), n.Br.set("Offline"), i = i || function () {
                                    return ph(n.localStore)
                                }, n.asyncQueue.enqueueRetryable(function () {
                                    return y(e, void 0, void 0, function () {
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return Kr("RemoteStore", "Retrying IndexedDB access"), [4, i()];
                                                case 1:
                                                    return t.sent(), n.Or.delete(1), [4, Ul(n)];
                                                case 2:
                                                    return t.sent(), [2]
                                            }
                                        })
                                    })
                                }), [2]
                        }
                    })
                })
            }

            function $l(e, n) {
                return n().catch(function (t) {
                    return Xl(e, t, n)
                })
            }

            function Jl(u) {
                return y(this, void 0, void 0, function () {
                    var i, o, s, a;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                o = rf(i = u), s = 0 < i.Fr.length ? i.Fr[i.Fr.length - 1].batchId : -1, t.label = 1;
                            case 1:
                                if (!(zl(i) && i.Fr.length < 10)) return [3, 7];
                                t.label = 2;
                            case 2:
                                return t.trys.push([2, 4, , 6]), [4, (e = i.localStore, n = s, (r = e).persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
                                    return void 0 === n && (n = -1), r._n.getNextMutationBatchAfterBatchId(t, n)
                                }))];
                            case 3:
                                return null === (a = t.sent()) ? (0 === i.Fr.length && o.ir(), [3, 7]) : (s = a.batchId, function (t, e) {
                                    t.Fr.push(e);
                                    t = rf(t);
                                    t.er() && t.pr && t.Er(e.mutations)
                                }(i, a), [3, 6]);
                            case 4:
                                return a = t.sent(), [4, Xl(i, a)];
                            case 5:
                                return t.sent(), [3, 6];
                            case 6:
                                return [3, 1];
                            case 7:
                                return Zl(i) && tf(i), [2]
                        }
                        var e, n, r
                    })
                })
            }

            function Zl(t) {
                return zl(t) && !rf(t).tr() && 0 < t.Fr.length
            }

            function tf(t) {
                rf(t).start()
            }

            function ef(n, r) {
                return y(this, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = n, r ? (e.Or.delete(2), [4, Ul(e)]) : [3, 2];
                            case 1:
                                return t.sent(), [3, 5];
                            case 2:
                                return r ? [3, 4] : (e.Or.add(2), [4, ql(e)]);
                            case 3:
                                t.sent(), e.Br.set("Unknown"), t.label = 4;
                            case 4:
                                t.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                })
            }

            function nf(n) {
                var t, e, r, i = this;
                return n.Ur || (n.Ur = (t = n.datastore, e = n.asyncQueue, r = {
                    Ii: function (n) {
                        return y(this, void 0, void 0, function () {
                            return g(this, function (t) {
                                return n.$r.forEach(function (t, e) {
                                    Kl(n, t)
                                }), [2]
                            })
                        })
                    }.bind(null, n),
                    Ri: function (e, n) {
                        return y(this, void 0, void 0, function () {
                            return g(this, function (t) {
                                return Wl(e), Hl(e) ? (e.Br.Nr(n), Ql(e)) : e.Br.set("Unknown"), [2]
                            })
                        })
                    }.bind(null, n),
                    _r: Yl.bind(null, n)
                }, t.br(), new Cl(e, t.Hi, t.credentials, t.R, r)), n.Mr.push(function (e) {
                    return y(i, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e ? (n.Ur.sr(), Hl(n) ? Ql(n) : n.Br.set("Unknown"), [3, 3]) : [3, 1];
                                case 1:
                                    return [4, n.Ur.stop()];
                                case 2:
                                    t.sent(), Wl(n), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })), n.Ur
            }

            function rf(n) {
                var t, e, r, i = this;
                return n.Kr || (n.Kr = (t = n.datastore, e = n.asyncQueue, r = {
                    Ii: function (e) {
                        return y(this, void 0, void 0, function () {
                            return g(this, function (t) {
                                return rf(e).Ar(), [2]
                            })
                        })
                    }.bind(null, n),
                    Ri: function (e, n) {
                        return y(this, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return n && rf(e).pr ? [4, function (r, i) {
                                            return y(this, void 0, void 0, function () {
                                                var e, n;
                                                return g(this, function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return Ms(n = i.code) && n !== Vr.ABORTED ? (e = r.Fr.shift(), rf(r).sr(), [4, $l(r, function () {
                                                                return r.remoteSyncer.rejectFailedWrite(e.batchId, i)
                                                            })]) : [3, 3];
                                                        case 1:
                                                            return t.sent(), [4, Jl(r)];
                                                        case 2:
                                                            t.sent(), t.label = 3;
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(e, n)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return Zl(e) && tf(e), [2]
                                }
                            })
                        })
                    }.bind(null, n),
                    Ir: function (o) {
                        return y(this, void 0, void 0, function () {
                            var e, n, r, i;
                            return g(this, function (t) {
                                for (e = rf(o), n = 0, r = o.Fr; n < r.length; n++) i = r[n], e.Er(i.mutations);
                                return [2]
                            })
                        })
                    }.bind(null, n),
                    Tr: function (r, i, o) {
                        return y(this, void 0, void 0, function () {
                            var e, n;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = r.Fr.shift(), n = Lu.from(e, i, o), [4, $l(r, function () {
                                            return r.remoteSyncer.applySuccessfulWrite(n)
                                        })];
                                    case 1:
                                        return t.sent(), [4, Jl(r)];
                                    case 2:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }.bind(null, n)
                }, t.br(), new kl(e, t.Hi, t.credentials, t.R, r)), n.Mr.push(function (e) {
                    return y(i, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e ? (n.Kr.sr(), [4, Jl(n)]) : [3, 2];
                                case 1:
                                    return t.sent(), [3, 4];
                                case 2:
                                    return [4, n.Kr.stop()];
                                case 3:
                                    t.sent(), 0 < n.Fr.length && (Kr("RemoteStore", "Stopping write stream with " + n.Fr.length + " pending writes"), n.Fr = []), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })), n.Kr
            }
            var of = (sf.createAndSchedule = function (t, e, n, r, i) {
                i = new sf(t, e, Date.now() + n, r, i);
                return i.start(n), i
            }, sf.prototype.start = function (t) {
                var e = this;
                this.timerHandle = setTimeout(function () {
                    return e.handleDelayElapsed()
                }, t)
            }, sf.prototype.skipDelay = function () {
                return this.handleDelayElapsed()
            }, sf.prototype.cancel = function (t) {
                null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Ur(Vr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
            }, sf.prototype.handleDelayElapsed = function () {
                var e = this;
                this.asyncQueue.enqueueAndForget(function () {
                    return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function (t) {
                        return e.deferred.resolve(t)
                    })) : Promise.resolve()
                })
            }, sf.prototype.clearTimeout = function () {
                null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
            }, sf);

            function sf(t, e, n, r, i) {
                this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new lu, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(function (t) {})
            }

            function af(t, e) {
                if (Gr("AsyncQueue", e + ": " + t), Iu(t)) return new Ur(Vr.UNAVAILABLE, e + ": " + t);
                throw t
            }

            function uf() {
                this.queries = new Fc(Bo, qo), this.onlineState = "Unknown", this.Gr = new Set
            }
            var cf = (yf.emptySet = function (t) {
                    return new yf(t.comparator)
                }, yf.prototype.has = function (t) {
                    return null != this.keyedMap.get(t)
                }, yf.prototype.get = function (t) {
                    return this.keyedMap.get(t)
                }, yf.prototype.first = function () {
                    return this.sortedSet.minKey()
                }, yf.prototype.last = function () {
                    return this.sortedSet.maxKey()
                }, yf.prototype.isEmpty = function () {
                    return this.sortedSet.isEmpty()
                }, yf.prototype.indexOf = function (t) {
                    t = this.keyedMap.get(t);
                    return t ? this.sortedSet.indexOf(t) : -1
                }, Object.defineProperty(yf.prototype, "size", {
                    get: function () {
                        return this.sortedSet.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), yf.prototype.forEach = function (n) {
                    this.sortedSet.inorderTraversal(function (t, e) {
                        return n(t), !1
                    })
                }, yf.prototype.add = function (t) {
                    var e = this.delete(t.key);
                    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
                }, yf.prototype.delete = function (t) {
                    var e = this.get(t);
                    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
                }, yf.prototype.isEqual = function (t) {
                    if (!(t instanceof yf)) return !1;
                    if (this.size !== t.size) return !1;
                    for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) {
                        var r = e.getNext().key,
                            i = n.getNext().key;
                        if (!r.isEqual(i)) return !1
                    }
                    return !0
                }, yf.prototype.toString = function () {
                    var e = [];
                    return this.forEach(function (t) {
                        e.push(t.toString())
                    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                }, yf.prototype.copy = function (t, e) {
                    var n = new yf;
                    return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n
                }, yf),
                hf = (pf.prototype.track = function (t) {
                    var e = t.doc.key,
                        n = this.Qr.get(e);
                    !n || 0 !== t.type && 3 === n.type ? this.Qr = this.Qr.insert(e, t) : 3 === t.type && 1 !== n.type ? this.Qr = this.Qr.insert(e, {
                        type: n.type,
                        doc: t.doc
                    }) : 2 === t.type && 2 === n.type ? this.Qr = this.Qr.insert(e, {
                        type: 2,
                        doc: t.doc
                    }) : 2 === t.type && 0 === n.type ? this.Qr = this.Qr.insert(e, {
                        type: 0,
                        doc: t.doc
                    }) : 1 === t.type && 0 === n.type ? this.Qr = this.Qr.remove(e) : 1 === t.type && 2 === n.type ? this.Qr = this.Qr.insert(e, {
                        type: 1,
                        doc: n.doc
                    }) : 0 === t.type && 1 === n.type ? this.Qr = this.Qr.insert(e, {
                        type: 2,
                        doc: t.doc
                    }) : zr()
                }, pf.prototype.jr = function () {
                    var n = [];
                    return this.Qr.inorderTraversal(function (t, e) {
                        n.push(e)
                    }), n
                }, pf),
                lf = (df.fromInitialDocuments = function (t, e, n, r) {
                    var i = [];
                    return e.forEach(function (t) {
                        i.push({
                            type: 0,
                            doc: t
                        })
                    }), new df(t, e, cf.emptySet(e), i, n, r, !0, !1)
                }, Object.defineProperty(df.prototype, "hasPendingWrites", {
                    get: function () {
                        return !this.mutatedKeys.isEmpty()
                    },
                    enumerable: !1,
                    configurable: !0
                }), df.prototype.isEqual = function (t) {
                    if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && qo(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
                    var e = this.docChanges,
                        n = t.docChanges;
                    if (e.length !== n.length) return !1;
                    for (var r = 0; r < e.length; r++)
                        if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                    return !0
                }, df),
                ff = function () {
                    this.Wr = void 0, this.listeners = []
                };

            function df(t, e, n, r, i, o, s, a) {
                this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = a
            }

            function pf() {
                this.Qr = new Vs(Ni.comparator)
            }

            function yf(n) {
                this.comparator = n ? function (t, e) {
                    return n(t, e) || Ni.comparator(t.key, e.key)
                } : function (t, e) {
                    return Ni.comparator(t.key, e.key)
                }, this.keyedMap = Xs, this.sortedSet = new Vs(this.comparator)
            }

            function gf(s, a) {
                return y(this, void 0, void 0, function () {
                    var e, n, r, i, o;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (e = s, n = a.query, r = !1, (i = e.queries.get(n)) || (r = !0, i = new ff), !r) return [3, 4];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), o = i, [4, e.onListen(n)];
                            case 2:
                                return o.Wr = t.sent(), [3, 4];
                            case 3:
                                return o = t.sent(), o = af(o, "Initialization of query '" + jo(a.query) + "' failed"), [2, void a.onError(o)];
                            case 4:
                                return e.queries.set(n, i), i.listeners.push(a), a.zr(e.onlineState), i.Wr && a.Hr(i.Wr) && vf(e), [2]
                        }
                    })
                })
            }

            function mf(s, a) {
                return y(this, void 0, void 0, function () {
                    var e, n, r, i, o;
                    return g(this, function (t) {
                        return e = s, n = a.query, r = !1, (i = e.queries.get(n)) && 0 <= (o = i.listeners.indexOf(a)) && (i.listeners.splice(o, 1), r = 0 === i.listeners.length), r ? [2, (e.queries.delete(n), e.onUnlisten(n))] : [2]
                    })
                })
            }

            function vf(t) {
                t.Gr.forEach(function (t) {
                    t.next()
                })
            }
            var wf = (Af.prototype.Hr = function (t) {
                    if (!this.options.includeMetadataChanges) {
                        for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                            var i = r[n];
                            3 !== i.type && e.push(i)
                        }
                        t = new lf(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0)
                    }
                    var o = !1;
                    return this.Yr ? this.Zr(t) && (this.Jr.next(t), o = !0) : this.eo(t, this.onlineState) && (this.no(t), o = !0), this.Xr = t, o
                }, Af.prototype.onError = function (t) {
                    this.Jr.error(t)
                }, Af.prototype.zr = function (t) {
                    this.onlineState = t;
                    var e = !1;
                    return this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), e
                }, Af.prototype.eo = function (t, e) {
                    return !t.fromCache || !(this.options.so && "Offline" !== e || t.docs.isEmpty() && "Offline" !== e)
                }, Af.prototype.Zr = function (t) {
                    if (0 < t.docChanges.length) return !0;
                    var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
                    return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges
                }, Af.prototype.no = function (t) {
                    t = lf.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, this.Jr.next(t)
                }, Af),
                bf = (Sf.prototype.io = function () {
                    return "metadata" in this.payload
                }, Sf),
                Ef = (_f.prototype.qn = function (t) {
                    return Ia(this.R, t)
                }, _f.prototype.Un = function (t) {
                    return t.metadata.exists ? Ca(this.R, t.document, !1) : Qi.newNoDocument(this.qn(t.metadata.name), this.Kn(t.metadata.readTime))
                }, _f.prototype.Kn = wa, _f),
                Tf = (If.prototype.oo = function (t) {
                    this.progress.bytesLoaded += t.byteLength;
                    var e = this.progress.documentsLoaded;
                    return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
                        metadata: t.payload.documentMetadata
                    }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null
                }, If.prototype.co = function (t) {
                    for (var e = new Map, n = new Ef(this.R), r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        if (o.metadata.queries)
                            for (var s = n.qn(o.metadata.name), a = 0, u = o.metadata.queries; a < u.length; a++) {
                                var c = u[a],
                                    h = (e.get(c) || Zs()).add(s);
                                e.set(c, h)
                            }
                    }
                    return e
                }, If.prototype.complete = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n, r, i;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, function (l, f, d, p) {
                                        return y(this, void 0, void 0, function () {
                                            var n, r, i, o, e, s, a, u, c, h;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        for (n = l, r = Zs(), i = zs, o = $s, e = 0, s = d; e < s.length; e++) a = s[e], u = f.qn(a.metadata.name), a.document && (r = r.add(u)), i = i.insert(u, f.Un(a)), o = o.insert(u, f.Kn(a.metadata.readTime));
                                                        return c = n.On.newChangeBuffer({
                                                            trackRemovals: !0
                                                        }), [4, mh(n, Vo(Ro(ci.fromString("__bundle__/docs/" + p))))];
                                                    case 1:
                                                        return h = t.sent(), [2, n.persistence.runTransaction("Apply bundle documents", "readwrite", function (e) {
                                                            return gh(e, c, i, ei.min(), o).next(function (t) {
                                                                return c.apply(e), t
                                                            }).next(function (t) {
                                                                return n.qe.removeMatchingKeysForTargetId(e, h.targetId).next(function () {
                                                                    return n.qe.addMatchingKeys(e, r, h.targetId)
                                                                }).next(function () {
                                                                    return n.Mn.En(e, t)
                                                                }).next(function () {
                                                                    return t
                                                                })
                                                            })
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.localStore, new Ef(this.R), this.documents, this.ro.id)];
                                case 1:
                                    e = t.sent(), n = this.co(this.documents), r = 0, i = this.queries, t.label = 2;
                                case 2:
                                    return r < i.length ? (i = i[r], [4, function (e, i, o) {
                                        return void 0 === o && (o = Zs()), y(this, void 0, void 0, function () {
                                            var n, r;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, mh(e, Vo(Yu(i.bundledQuery)))];
                                                    case 1:
                                                        return n = t.sent(), [2, (r = e).persistence.runTransaction("Save named query", "readwrite", function (t) {
                                                            var e = wa(i.readTime);
                                                            if (0 <= n.snapshotVersion.compareTo(e)) return r.Ke.saveNamedQuery(t, i);
                                                            e = n.withResumeToken(di.EMPTY_BYTE_STRING, e);
                                                            return r.kn = r.kn.insert(e.targetId, e), r.qe.updateTargetData(t, e).next(function () {
                                                                return r.qe.removeMatchingKeysForTargetId(t, n.targetId)
                                                            }).next(function () {
                                                                return r.qe.addMatchingKeys(t, o, n.targetId)
                                                            }).next(function () {
                                                                return r.Ke.saveNamedQuery(t, i)
                                                            })
                                                        })]
                                                }
                                            })
                                        })
                                    }(this.localStore, i, n.get(i.name))]) : [3, 5];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return r++, [3, 2];
                                case 5:
                                    return [2, (this.progress.taskState = "Success", new nh(Object.assign({}, this.progress), e))]
                            }
                        })
                    })
                }, If);

            function If(t, e, n) {
                this.ro = t, this.localStore = e, this.R = n, this.queries = [], this.documents = [], this.progress = Df(t)
            }

            function _f(t) {
                this.R = t
            }

            function Sf(t, e) {
                this.payload = t, this.byteLength = e
            }

            function Af(t, e, n) {
                this.query = t, this.Jr = e, this.Yr = !1, this.Xr = null, this.onlineState = "Unknown", this.options = n || {}
            }

            function Df(t) {
                return {
                    taskState: "Running",
                    documentsLoaded: 0,
                    bytesLoaded: 0,
                    totalDocuments: t.totalDocuments,
                    totalBytes: t.totalBytes
                }
            }
            var Nf = function (t) {
                    this.key = t
                },
                Cf = function (t) {
                    this.key = t
                },
                kf = (Object.defineProperty(Pf.prototype, "wo", {
                    get: function () {
                        return this.uo
                    },
                    enumerable: !1,
                    configurable: !0
                }), Pf.prototype._o = function (t, e) {
                    var s = this,
                        a = e ? e.mo : new hf,
                        u = (e || this).fo,
                        c = (e || this).mutatedKeys,
                        h = u,
                        l = !1,
                        f = xo(this.query) && u.size === this.query.limit ? u.last() : null,
                        d = Oo(this.query) && u.size === this.query.limit ? u.first() : null;
                    if (t.inorderTraversal(function (t, e) {
                            var n = u.get(t),
                                r = Ko(s.query, e) ? e : null,
                                i = !!n && s.mutatedKeys.has(n.key),
                                o = !!r && (r.hasLocalMutations || s.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                                e = !1;
                            n && r ? n.data.isEqual(r.data) ? i !== o && (a.track({
                                type: 3,
                                doc: r
                            }), e = !0) : s.yo(n, r) || (a.track({
                                type: 2,
                                doc: r
                            }), e = !0, (f && 0 < s.lo(r, f) || d && s.lo(r, d) < 0) && (l = !0)) : !n && r ? (a.track({
                                type: 0,
                                doc: r
                            }), e = !0) : n && !r && (a.track({
                                type: 1,
                                doc: n
                            }), e = !0, (f || d) && (l = !0)), e && (c = r ? (h = h.add(r), o ? c.add(t) : c.delete(t)) : (h = h.delete(t), c.delete(t)))
                        }), xo(this.query) || Oo(this.query))
                        for (; h.size > this.query.limit;) {
                            var n = xo(this.query) ? h.last() : h.first(),
                                h = h.delete(n.key),
                                c = c.delete(n.key);
                            a.track({
                                type: 1,
                                doc: n
                            })
                        }
                    return {
                        fo: h,
                        mo: a,
                        Nn: l,
                        mutatedKeys: c
                    }
                }, Pf.prototype.yo = function (t, e) {
                    return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
                }, Pf.prototype.applyChanges = function (t, e, n) {
                    var o = this,
                        r = this.fo;
                    this.fo = t.fo, this.mutatedKeys = t.mutatedKeys;
                    var i = t.mo.jr();
                    i.sort(function (t, e) {
                        return r = t.type, i = e.type, n(r) - n(i) || o.lo(t.doc, e.doc);

                        function n(t) {
                            switch (t) {
                                case 0:
                                    return 1;
                                case 2:
                                case 3:
                                    return 2;
                                case 1:
                                    return 0;
                                default:
                                    return zr()
                            }
                        }
                        var r, i
                    }), this.po(n);
                    var s = e ? this.Eo() : [],
                        n = 0 === this.ho.size && this.current ? 1 : 0,
                        e = n !== this.ao;
                    return this.ao = n, 0 !== i.length || e ? {
                        snapshot: new lf(this.query, t.fo, r, i, t.mutatedKeys, 0 == n, e, !1),
                        To: s
                    } : {
                        To: s
                    }
                }, Pf.prototype.zr = function (t) {
                    return this.current && "Offline" === t ? (this.current = !1, this.applyChanges({
                        fo: this.fo,
                        mo: new hf,
                        mutatedKeys: this.mutatedKeys,
                        Nn: !1
                    }, !1)) : {
                        To: []
                    }
                }, Pf.prototype.Io = function (t) {
                    return !this.uo.has(t) && !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations
                }, Pf.prototype.po = function (t) {
                    var e = this;
                    t && (t.addedDocuments.forEach(function (t) {
                        return e.uo = e.uo.add(t)
                    }), t.modifiedDocuments.forEach(function (t) {}), t.removedDocuments.forEach(function (t) {
                        return e.uo = e.uo.delete(t)
                    }), this.current = t.current)
                }, Pf.prototype.Eo = function () {
                    var e = this;
                    if (!this.current) return [];
                    var n = this.ho;
                    this.ho = Zs(), this.fo.forEach(function (t) {
                        e.Io(t.key) && (e.ho = e.ho.add(t.key))
                    });
                    var r = [];
                    return n.forEach(function (t) {
                        e.ho.has(t) || r.push(new Cf(t))
                    }), this.ho.forEach(function (t) {
                        n.has(t) || r.push(new Nf(t))
                    }), r
                }, Pf.prototype.Ao = function (t) {
                    this.uo = t.Bn, this.ho = Zs();
                    t = this._o(t.documents);
                    return this.applyChanges(t, !0)
                }, Pf.prototype.Ro = function () {
                    return lf.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 === this.ao)
                }, Pf),
                Rf = function (t, e, n) {
                    this.query = t, this.targetId = e, this.view = n
                },
                xf = function (t) {
                    this.key = t, this.bo = !1
                },
                Of = (Object.defineProperty(Lf.prototype, "isPrimaryClient", {
                    get: function () {
                        return !0 === this.$o
                    },
                    enumerable: !1,
                    configurable: !0
                }), Lf);

            function Lf(t, e, n, r, i, o) {
                this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.vo = {}, this.Po = new Fc(Bo, qo), this.Vo = new Map, this.So = new Set, this.Do = new Vs(Ni.comparator), this.Co = new Map, this.No = new Ah, this.xo = {}, this.ko = new Map, this.Fo = vc.Yt(), this.onlineState = "Unknown", this.$o = void 0
            }

            function Pf(t, e) {
                this.query = t, this.uo = e, this.ao = null, this.current = !1, this.ho = Zs(), this.mutatedKeys = Zs(), this.lo = Go(t), this.fo = new cf(this.lo)
            }

            function Mf(i, o, s, a) {
                return y(this, void 0, void 0, function () {
                    var e, n, r;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return i.Oo = function (t, e, n) {
                                    return function (r, i, o, s) {
                                        return y(this, void 0, void 0, function () {
                                            var e, n;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return (e = i.view._o(o)).Nn ? [4, wh(r.localStore, i.query, !1).then(function (t) {
                                                            t = t.documents;
                                                            return i.view._o(t, e)
                                                        })] : [3, 2];
                                                    case 1:
                                                        e = t.sent(), t.label = 2;
                                                    case 2:
                                                        return n = s && s.targetChanges.get(i.targetId), n = i.view.applyChanges(e, r.isPrimaryClient, n), [2, (Hf(r, i.targetId, n.To), n.snapshot)]
                                                }
                                            })
                                        })
                                    }(i, t, e, n)
                                }, [4, wh(i.localStore, o, !0)];
                            case 1:
                                return n = t.sent(), r = new kf(o, n.Bn), e = r._o(n.documents), n = na.createSynthesizedTargetChangeForCurrentChange(s, a && "Offline" !== i.onlineState), n = r.applyChanges(e, i.isPrimaryClient, n), Hf(i, s, n.To), r = new Rf(o, s, r), [2, (i.Po.set(o, r), i.Vo.has(s) ? i.Vo.get(s).push(o) : i.Vo.set(s, [o]), n.snapshot)]
                        }
                    })
                })
            }

            function Ff(f, d, p) {
                return y(this, void 0, void 0, function () {
                    var s, l;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                l = ed(f), t.label = 1;
                            case 1:
                                return t.trys.push([1, 5, , 6]), [4, (i = l.localStore, a = d, c = i, h = ti.now(), o = a.reduce(function (t, e) {
                                    return t.add(e.key)
                                }, Zs()), c.persistence.runTransaction("Locally write mutations", "readwrite", function (s) {
                                    return c.Mn.pn(s, o).next(function (t) {
                                        u = t;
                                        for (var e = [], n = 0, r = a; n < r.length; n++) {
                                            var i = r[n],
                                                o = function (t, e) {
                                                    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
                                                        var o = i[r],
                                                            s = e.data.field(o.field),
                                                            s = Wo(o.transform, s || null);
                                                        null != s && (n = null == n ? Ki.empty() : n).set(o.field, s)
                                                    }
                                                    return n || null
                                                }(i, u.get(i.key));
                                            null != o && e.push(new Ts(i.key, o, function s(t) {
                                                var a = [];
                                                return oi(t.fields, function (t, e) {
                                                    var n = new li([t]);
                                                    if (Bi(e))
                                                        if (0 === (e = s(e.mapValue).fields).length) a.push(n);
                                                        else
                                                            for (var r = 0, i = e; r < i.length; r++) {
                                                                var o = i[r];
                                                                a.push(n.child(o))
                                                            } else a.push(n)
                                                }), new fi(a)
                                            }(o.value.mapValue), ds.exists(!0)))
                                        }
                                        return c._n.addMutationBatch(s, h, e, a)
                                    })
                                }).then(function (t) {
                                    return t.applyToLocalDocumentSet(u), {
                                        batchId: t.batchId,
                                        changes: u
                                    }
                                }))];
                            case 2:
                                return s = t.sent(), l.sharedClientState.addPendingMutation(s.batchId), e = l, n = s.batchId, r = p, i = (i = (i = e.xo[e.currentUser.toKey()]) || new Vs($r)).insert(n, r), e.xo[e.currentUser.toKey()] = i, [4, Wf(l, s.changes)];
                            case 3:
                                return t.sent(), [4, Jl(l.remoteStore)];
                            case 4:
                                return t.sent(), [3, 6];
                            case 5:
                                return l = t.sent(), l = af(l, "Failed to persist write"), p.reject(l), [3, 6];
                            case 6:
                                return [2]
                        }
                        var e, n, r, i, a, u, c, h, o
                    })
                })
            }

            function Vf(r, i) {
                return y(this, void 0, void 0, function () {
                    var n, e;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                n = r, t.label = 1;
                            case 1:
                                return t.trys.push([1, 4, , 6]), [4, yh(n.localStore, i)];
                            case 2:
                                return e = t.sent(), i.targetChanges.forEach(function (t, e) {
                                    e = n.Co.get(e);
                                    e && (Wr(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 0 < t.addedDocuments.size ? e.bo = !0 : 0 < t.modifiedDocuments.size ? Wr(e.bo) : 0 < t.removedDocuments.size && (Wr(e.bo), e.bo = !1))
                                }), [4, Wf(n, e, i)];
                            case 3:
                                return t.sent(), [3, 6];
                            case 4:
                                return [4, Sc(t.sent())];
                            case 5:
                                return t.sent(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            }

            function Uf(t, n, e) {
                var r, t = t;
                (t.isPrimaryClient && 0 === e || !t.isPrimaryClient && 1 === e) && (r = [], t.Po.forEach(function (t, e) {
                    e = e.view.zr(n);
                    e.snapshot && r.push(e.snapshot)
                }), function (t, i) {
                    t.onlineState = i;
                    var o = !1;
                    t.queries.forEach(function (t, e) {
                        for (var n = 0, r = e.listeners; n < r.length; n++) r[n].zr(i) && (o = !0)
                    }), o && vf(t)
                }(t.eventManager, n), r.length && t.vo._r(r), t.onlineState = n, t.isPrimaryClient && t.sharedClientState.setOnlineState(n))
            }

            function qf(s, a, u) {
                return y(this, void 0, void 0, function () {
                    var n, o;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                n = s, t.label = 1;
                            case 1:
                                return t.trys.push([1, 4, , 6]), [4, (e = n.localStore, r = a, (i = e).persistence.runTransaction("Reject batch", "readwrite-primary", function (e) {
                                    var n;
                                    return i._n.lookupMutationBatch(e, r).next(function (t) {
                                        return Wr(null !== t), n = t.keys(), i._n.removeMutationBatch(e, t)
                                    }).next(function () {
                                        return i._n.performConsistencyCheck(e)
                                    }).next(function () {
                                        return i.Mn.pn(e, n)
                                    })
                                }))];
                            case 2:
                                return o = t.sent(), Kf(n, a, u), jf(n, a), n.sharedClientState.updateMutationState(a, "rejected", u), [4, Wf(n, o)];
                            case 3:
                                return t.sent(), [3, 6];
                            case 4:
                                return [4, Sc(t.sent())];
                            case 5:
                                return t.sent(), [3, 6];
                            case 6:
                                return [2]
                        }
                        var e, r, i
                    })
                })
            }

            function Bf(o, s) {
                return y(this, void 0, void 0, function () {
                    var n, r, i;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                zl((n = o).remoteStore) || Kr("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, (e = n.localStore).persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                                    return e._n.getHighestUnacknowledgedBatchId(t)
                                })];
                            case 2:
                                return -1 === (r = t.sent()) ? [2, void s.resolve()] : ((i = n.ko.get(r) || []).push(s), n.ko.set(r, i), [3, 4]);
                            case 3:
                                return i = t.sent(), i = af(i, "Initialization of waitForPendingWrites() operation failed"), s.reject(i), [3, 4];
                            case 4:
                                return [2]
                        }
                        var e
                    })
                })
            }

            function jf(t, e) {
                (t.ko.get(e) || []).forEach(function (t) {
                    t.resolve()
                }), t.ko.delete(e)
            }

            function Kf(t, e, n) {
                var r = t,
                    i = r.xo[r.currentUser.toKey()];
                i && ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), r.xo[r.currentUser.toKey()] = i)
            }

            function Gf(e, t, n) {
                void 0 === n && (n = null), e.sharedClientState.removeLocalQueryTarget(t);
                for (var r = 0, i = e.Vo.get(t); r < i.length; r++) {
                    var o = i[r];
                    e.Po.delete(o), n && e.vo.Mo(o, n)
                }
                e.Vo.delete(t), e.isPrimaryClient && e.No.Zn(t).forEach(function (t) {
                    e.No.containsKey(t) || Qf(e, t)
                })
            }

            function Qf(t, e) {
                t.So.delete(e.path.canonicalString());
                var n = t.Do.get(e);
                null !== n && (jl(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), zf(t))
            }

            function Hf(t, e, n) {
                for (var r, i, o, s = 0, a = n; s < a.length; s++) {
                    var u = a[s];
                    u instanceof Nf ? (t.No.addReference(u.key, e), r = t, o = void 0, i = (o = (i = u).key).path.canonicalString(), r.Do.get(o) || r.So.has(i) || (Kr("SyncEngine", "New document in limbo: " + o), r.So.add(i), zf(r))) : u instanceof Cf ? (Kr("SyncEngine", "Document no longer in limbo: " + u.key), t.No.removeReference(u.key, e), t.No.containsKey(u.key) || Qf(t, u.key)) : zr()
                }
            }

            function zf(t) {
                for (; 0 < t.So.size && t.Do.size < t.maxConcurrentLimboResolutions;) {
                    var e = t.So.values().next().value;
                    t.So.delete(e);
                    var n = new Ni(ci.fromString(e)),
                        e = t.Fo.next();
                    t.Co.set(e, new xf(n)), t.Do = t.Do.insert(n, e), Bl(t.remoteStore, new Pu(Vo(Ro(n.path)), e, 2, Pr.o))
                }
            }

            function Wf(e, s, a) {
                return y(this, void 0, void 0, function () {
                    var n, r, i, o;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return r = [], i = [], o = [], (n = e).Po.isEmpty() ? [3, 3] : (n.Po.forEach(function (t, e) {
                                    o.push(n.Oo(e, s, a).then(function (t) {
                                        t && (n.isPrimaryClient && n.sharedClientState.updateQueryState(e.targetId, t.fromCache ? "not-current" : "current"), r.push(t), t = ih.Pn(e.targetId, t), i.push(t))
                                    }))
                                }), [4, Promise.all(o)]);
                            case 1:
                                return t.sent(), n.vo._r(r), [4, function (u, c) {
                                    return y(this, void 0, void 0, function () {
                                        var r, e, n, i, o, s, a;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    r = u, t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]), [4, r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (n) {
                                                        return fu.forEach(c, function (e) {
                                                            return fu.forEach(e.bn, function (t) {
                                                                return r.persistence.referenceDelegate.addReference(n, e.targetId, t)
                                                            }).next(function () {
                                                                return fu.forEach(e.vn, function (t) {
                                                                    return r.persistence.referenceDelegate.removeReference(n, e.targetId, t)
                                                                })
                                                            })
                                                        })
                                                    })];
                                                case 2:
                                                    return t.sent(), [3, 4];
                                                case 3:
                                                    if (!Iu(e = t.sent())) throw e;
                                                    return Kr("LocalStore", "Failed to update sequence numbers: " + e), [3, 4];
                                                case 4:
                                                    for (n = 0, i = c; n < i.length; n++) a = i[n], o = a.targetId, a.fromCache || (s = r.kn.get(o), a = s.snapshotVersion, a = s.withLastLimboFreeSnapshotVersion(a), r.kn = r.kn.insert(o, a));
                                                    return [2]
                                            }
                                        })
                                    })
                                }(n.localStore, i)];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function Yf(i, o) {
                return y(this, void 0, void 0, function () {
                    var n, r;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return (n = i).currentUser.isEqual(o) ? [3, 3] : (Kr("SyncEngine", "User change. New user:", o.toKey()), [4, fh(n.localStore, o)]);
                            case 1:
                                return r = t.sent(), n.currentUser = o, (e = n).ko.forEach(function (t) {
                                    t.forEach(function (t) {
                                        t.reject(new Ur(Vr.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
                                    })
                                }), e.ko.clear(), n.sharedClientState.handleUserChange(o, r.removedBatchIds, r.addedBatchIds), [4, Wf(n, r.Ln)];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2]
                        }
                        var e
                    })
                })
            }

            function Xf(a, u, c, h) {
                return y(this, void 0, void 0, function () {
                    var o, s;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, (e = (o = a).localStore, n = u, i = (r = e)._n, r.persistence.runTransaction("Lookup mutation documents", "readonly", function (e) {
                                    return i.jt(e, n).next(function (t) {
                                        return t ? r.Mn.pn(e, t) : fu.resolve(null)
                                    })
                                }))];
                            case 1:
                                return null === (s = t.sent()) ? [3, 6] : "pending" !== c ? [3, 3] : [4, Jl(o.remoteStore)];
                            case 2:
                                return t.sent(), [3, 4];
                            case 3:
                                "acknowledged" === c || "rejected" === c ? (Kf(o, u, h || null), jf(o, u), o.localStore._n.Gt(u)) : zr(), t.label = 4;
                            case 4:
                                return [4, Wf(o, s)];
                            case 5:
                                return t.sent(), [3, 7];
                            case 6:
                                Kr("SyncEngine", "Cannot apply mutation batch with id: " + u), t.label = 7;
                            case 7:
                                return [2]
                        }
                        var e, n, r, i
                    })
                })
            }

            function $f(h, l) {
                return y(this, void 0, void 0, function () {
                    var r, e, i, o, s, a, u, c;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return td(r = h), ed(r), !0 !== l || !0 === r.$o ? [3, 3] : (e = r.sharedClientState.getAllActiveQueryTargets(), [4, Jf(r, e.toArray())]);
                            case 1:
                                return i = t.sent(), r.$o = !0, [4, ef(r.remoteStore, !0)];
                            case 2:
                                for (t.sent(), o = 0, s = i; o < s.length; o++) a = s[o], Bl(r.remoteStore, a);
                                return [3, 7];
                            case 3:
                                return !1 !== l || !1 === r.$o ? [3, 7] : (u = [], c = Promise.resolve(), r.Vo.forEach(function (t, e) {
                                    r.sharedClientState.isLocalQueryTarget(e) ? u.push(e) : c = c.then(function () {
                                        return Gf(r, e), vh(r.localStore, e, !0)
                                    }), jl(r.remoteStore, e)
                                }), [4, c]);
                            case 4:
                                return t.sent(), [4, Jf(r, u)];
                            case 5:
                                return t.sent(), (n = r).Co.forEach(function (t, e) {
                                    jl(n.remoteStore, e)
                                }), n.No.ts(), n.Co = new Map, n.Do = new Vs(Ni.comparator), r.$o = !1, [4, ef(r.remoteStore, !1)];
                            case 6:
                                t.sent(), t.label = 7;
                            case 7:
                                return [2]
                        }
                        var n
                    })
                })
            }

            function Jf(d, p) {
                return y(this, void 0, void 0, function () {
                    var e, n, r, i, o, s, a, u, c, h, l, f;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                e = d, n = [], r = [], i = 0, o = p, t.label = 1;
                            case 1:
                                return i < o.length ? (s = o[i], a = void 0, (u = e.Vo.get(s)) && 0 !== u.length ? [4, mh(e.localStore, Vo(u[0]))] : [3, 7]) : [3, 13];
                            case 2:
                                a = t.sent(), c = 0, h = u, t.label = 3;
                            case 3:
                                return c < h.length ? (l = h[c], l = e.Po.get(l), [4, function (r, i) {
                                    return y(this, void 0, void 0, function () {
                                        var e, n;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, wh((e = r).localStore, i.query, !0)];
                                                case 1:
                                                    return n = t.sent(), n = i.view.Ao(n), [2, (e.isPrimaryClient && Hf(e, i.targetId, n.To), n)]
                                            }
                                        })
                                    })
                                }(e, l)]) : [3, 6];
                            case 4:
                                (l = t.sent()).snapshot && r.push(l.snapshot), t.label = 5;
                            case 5:
                                return c++, [3, 3];
                            case 6:
                                return [3, 11];
                            case 7:
                                return [4, bh(e.localStore, s)];
                            case 8:
                                return f = t.sent(), [4, mh(e.localStore, f)];
                            case 9:
                                return a = t.sent(), [4, Mf(e, Zf(f), s, !1)];
                            case 10:
                                t.sent(), t.label = 11;
                            case 11:
                                n.push(a), t.label = 12;
                            case 12:
                                return i++, [3, 1];
                            case 13:
                                return [2, (e.vo._r(r), n)]
                        }
                    })
                })
            }

            function Zf(t) {
                return ko(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
            }

            function td(t) {
                return t.remoteStore.remoteSyncer.applyRemoteEvent = Vf.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = function (t, e) {
                    var n = t;
                    if ((t = n.Co.get(e)) && t.bo) return Zs().add(t.key);
                    var r = Zs();
                    if (!(e = n.Vo.get(e))) return r;
                    for (var i = 0, o = e; i < o.length; i++) var s = o[i],
                        s = n.Po.get(s),
                        r = r.unionWith(s.view.wo);
                    return r
                }.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = function (o, s, a) {
                    return y(this, void 0, void 0, function () {
                        var e, n, r, i;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return (e = o).sharedClientState.updateQueryState(s, "rejected", a), i = e.Co.get(s), (n = i && i.key) ? (r = (r = new Vs(Ni.comparator)).insert(n, Qi.newNoDocument(n, ei.min())), i = Zs().add(n), i = new ea(ei.min(), new Map, new Qs($r), r, i), [4, Vf(e, i)]) : [3, 2];
                                case 1:
                                    return t.sent(), e.Do = e.Do.remove(n), e.Co.delete(s), zf(e), [3, 4];
                                case 2:
                                    return [4, vh(e.localStore, s, !1).then(function () {
                                        return Gf(e, s, a)
                                    }).catch(Sc)];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }.bind(null, t), t.vo._r = function (t, e) {
                    for (var n = t, r = !1, i = 0, o = e; i < o.length; i++) {
                        var s = o[i],
                            a = s.query,
                            a = n.queries.get(a);
                        if (a) {
                            for (var u = 0, c = a.listeners; u < c.length; u++) c[u].Hr(s) && (r = !0);
                            a.Wr = s
                        }
                    }
                    r && vf(n)
                }.bind(null, t.eventManager), t.vo.Mo = function (t, e, n) {
                    var r = t;
                    if (t = r.queries.get(e))
                        for (var i = 0, o = t.listeners; i < o.length; i++) o[i].onError(n);
                    r.queries.delete(e)
                }.bind(null, t.eventManager), t
            }

            function ed(t) {
                return t.remoteStore.remoteSyncer.applySuccessfulWrite = function (i, o) {
                    return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    e = i, n = o.batch.batchId, t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, dh(e.localStore, o)];
                                case 2:
                                    return r = t.sent(), Kf(e, n, null), jf(e, n), e.sharedClientState.updateMutationState(n, "acknowledged"), [4, Wf(e, r)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, Sc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = qf.bind(null, t), t
            }

            function nd(t, e, n) {
                var r = t;
                ! function (f, d, p) {
                    return y(this, void 0, void 0, function () {
                        var a, u, c, h, l;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 14, , 15]), [4, d.getMetadata()];
                                case 1:
                                    return a = t.sent(), [4, (r = f.localStore, o = r, s = wa((i = a).createTime), o.persistence.runTransaction("hasNewerBundle", "readonly", function (t) {
                                        return o.Ke.getBundleMetadata(t, i.id)
                                    }).then(function (t) {
                                        return !!t && 0 <= t.createTime.compareTo(s)
                                    }))];
                                case 2:
                                    return t.sent() ? [4, d.close()] : [3, 4];
                                case 3:
                                    return [2, (t.sent(), void p._completeWith({
                                        taskState: "Success",
                                        documentsLoaded: a.totalDocuments,
                                        bytesLoaded: a.totalBytes,
                                        totalDocuments: a.totalDocuments,
                                        totalBytes: a.totalBytes
                                    }))];
                                case 4:
                                    return p._updateProgress(Df(a)), u = new Tf(a, f.localStore, d.R), [4, d.Lo()];
                                case 5:
                                    c = t.sent(), t.label = 6;
                                case 6:
                                    return c ? [4, u.oo(c)] : [3, 10];
                                case 7:
                                    return (h = t.sent()) && p._updateProgress(h), [4, d.Lo()];
                                case 8:
                                    c = t.sent(), t.label = 9;
                                case 9:
                                    return [3, 6];
                                case 10:
                                    return [4, u.complete()];
                                case 11:
                                    return l = t.sent(), [4, Wf(f, l.wn, void 0)];
                                case 12:
                                    return t.sent(), [4, (r = f.localStore, e = a, (n = r).persistence.runTransaction("Save bundle", "readwrite", function (t) {
                                        return n.Ke.saveBundleMetadata(t, e)
                                    }))];
                                case 13:
                                    return t.sent(), p._completeWith(l.progress), [3, 15];
                                case 14:
                                    return Qr("SyncEngine", "Loading bundle failed with " + (l = t.sent())), p._failWith(l), [3, 15];
                                case 15:
                                    return [2]
                            }
                            var e, n, r, i, o, s
                        })
                    })
                }(r, e, n).then(function () {
                    r.sharedClientState.notifyBundleLoaded()
                })
            }
            var rd, id, od = (fd.prototype.initialize = function (e) {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.R = Il(e.databaseInfo.databaseId), this.sharedClientState = this.Bo(e), this.persistence = this.qo(e), [4, this.persistence.start()];
                                case 1:
                                    return t.sent(), this.gcScheduler = this.Uo(e), this.localStore = this.Ko(e), [2]
                            }
                        })
                    })
                }, fd.prototype.Uo = function (t) {
                    return null
                }, fd.prototype.Ko = function (t) {
                    return lh(this.persistence, new oh, t.initialUser, this.R)
                }, fd.prototype.qo = function (t) {
                    return new xh(Lh.bs, this.R)
                }, fd.prototype.Bo = function (t) {
                    return new rl
                }, fd.prototype.terminate = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.gcScheduler && this.gcScheduler.stop(), [4, this.sharedClientState.shutdown()];
                                case 1:
                                    return t.sent(), [4, this.persistence.shutdown()];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, fd),
                sd = (n(ld, id = od), ld.prototype.initialize = function (n) {
                    return y(this, void 0, void 0, function () {
                        var e = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, id.prototype.initialize.call(this, n)];
                                case 1:
                                    return t.sent(), [4, Th(this.localStore)];
                                case 2:
                                    return t.sent(), [4, this.Qo.initialize(this, n)];
                                case 3:
                                    return t.sent(), [4, ed(this.Qo.syncEngine)];
                                case 4:
                                    return t.sent(), [4, Jl(this.Qo.remoteStore)];
                                case 5:
                                    return t.sent(), [4, this.persistence.He(function () {
                                        return e.gcScheduler && !e.gcScheduler.started && e.gcScheduler.start(e.localStore), Promise.resolve()
                                    })];
                                case 6:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, ld.prototype.Ko = function (t) {
                    return lh(this.persistence, new oh, t.initialUser, this.R)
                }, ld.prototype.Uo = function (t) {
                    var e = this.persistence.referenceDelegate.garbageCollector;
                    return new Nc(e, t.asyncQueue)
                }, ld.prototype.qo = function (t) {
                    var e = eh(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey),
                        n = void 0 !== this.cacheSizeBytes ? uc.withCacheSize(this.cacheSizeBytes) : uc.DEFAULT;
                    return new $c(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, El(), Tl(), this.R, this.sharedClientState, !!this.forceOwnership)
                }, ld.prototype.Bo = function (t) {
                    return new rl
                }, ld),
                ad = (n(hd, rd = sd), hd.prototype.initialize = function (r) {
                    return y(this, void 0, void 0, function () {
                        var e, n = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, rd.prototype.initialize.call(this, r)];
                                case 1:
                                    return t.sent(), e = this.Qo.syncEngine, this.sharedClientState instanceof nl ? (this.sharedClientState.syncEngine = {
                                        ui: Xf.bind(null, e),
                                        ai: function (i, o, s, a) {
                                            return y(this, void 0, void 0, function () {
                                                var e, n, r;
                                                return g(this, function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return (e = i).$o ? (Kr("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
                                                        case 1:
                                                            if (!e.Vo.has(o)) return [3, 8];
                                                            switch (s) {
                                                                case "current":
                                                                case "not-current":
                                                                    return [3, 2];
                                                                case "rejected":
                                                                    return [3, 5]
                                                            }
                                                            return [3, 7];
                                                        case 2:
                                                            return [4, Eh(e.localStore)];
                                                        case 3:
                                                            return n = t.sent(), r = ea.createSynthesizedRemoteEventForCurrentChange(o, "current" === s), [4, Wf(e, n, r)];
                                                        case 4:
                                                            return t.sent(), [3, 8];
                                                        case 5:
                                                            return [4, vh(e.localStore, o, !0)];
                                                        case 6:
                                                            return t.sent(), Gf(e, o, a), [3, 8];
                                                        case 7:
                                                            zr(), t.label = 8;
                                                        case 8:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }.bind(null, e),
                                        hi: function (c, h, l) {
                                            return y(this, void 0, void 0, function () {
                                                var n, e, r, i, o, s, a, u;
                                                return g(this, function (t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            if (!(n = td(c)).$o) return [3, 10];
                                                            e = 0, r = h, t.label = 1;
                                                        case 1:
                                                            return e < r.length ? (r = r[e], n.Vo.has(r) ? (Kr("SyncEngine", "Adding an already active target " + r), [3, 5]) : [4, bh(n.localStore, r)]) : [3, 6];
                                                        case 2:
                                                            return i = t.sent(), [4, mh(n.localStore, i)];
                                                        case 3:
                                                            return o = t.sent(), [4, Mf(n, Zf(i), o.targetId, !1)];
                                                        case 4:
                                                            t.sent(), Bl(n.remoteStore, o), t.label = 5;
                                                        case 5:
                                                            return e++, [3, 1];
                                                        case 6:
                                                            s = function (e) {
                                                                return g(this, function (t) {
                                                                    switch (t.label) {
                                                                        case 0:
                                                                            return n.Vo.has(e) ? [4, vh(n.localStore, e, !1).then(function () {
                                                                                jl(n.remoteStore, e), Gf(n, e)
                                                                            }).catch(Sc)] : [3, 2];
                                                                        case 1:
                                                                            t.sent(), t.label = 2;
                                                                        case 2:
                                                                            return [2]
                                                                    }
                                                                })
                                                            }, a = 0, u = l, t.label = 7;
                                                        case 7:
                                                            return a < u.length ? (u = u[a], [5, s(u)]) : [3, 10];
                                                        case 8:
                                                            t.sent(), t.label = 9;
                                                        case 9:
                                                            return a++, [3, 7];
                                                        case 10:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }.bind(null, e),
                                        fn: function (t) {
                                            return t.localStore.persistence.fn()
                                        }.bind(null, e),
                                        ci: function (n) {
                                            return y(this, void 0, void 0, function () {
                                                var e;
                                                return g(this, function (t) {
                                                    return [2, Eh((e = n).localStore).then(function (t) {
                                                        return Wf(e, t)
                                                    })]
                                                })
                                            })
                                        }.bind(null, e)
                                    }, [4, this.sharedClientState.start()]) : [3, 3];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [4, this.persistence.He(function (e) {
                                        return y(n, void 0, void 0, function () {
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, $f(this.Qo.syncEngine, e)];
                                                    case 1:
                                                        return t.sent(), this.gcScheduler && (e && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : e || this.gcScheduler.stop()), [2]
                                                }
                                            })
                                        })
                                    })];
                                case 4:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, hd.prototype.Bo = function (t) {
                    var e = El();
                    if (!nl.yt(e)) throw new Ur(Vr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                    var n = eh(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
                    return new nl(e, t.asyncQueue, n, t.clientId, t.initialUser)
                }, hd),
                ud = (cd.prototype.initialize = function (n, r) {
                    return y(this, void 0, void 0, function () {
                        var e = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.localStore ? [3, 2] : (this.localStore = n.localStore, this.sharedClientState = n.sharedClientState, this.datastore = this.createDatastore(r), this.remoteStore = this.createRemoteStore(r), this.eventManager = this.createEventManager(r), this.syncEngine = this.createSyncEngine(r, !n.synchronizeTabs), this.sharedClientState.onlineStateHandler = function (t) {
                                        return Uf(e.syncEngine, t, 1)
                                    }, this.remoteStore.remoteSyncer.handleCredentialChange = Yf.bind(null, this.syncEngine), [4, ef(this.remoteStore, this.syncEngine.isPrimaryClient)]);
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, cd.prototype.createEventManager = function (t) {
                    return new uf
                }, cd.prototype.createDatastore = function (t) {
                    var e = Il(t.databaseInfo.databaseId),
                        n = (n = t.databaseInfo, new ul(n));
                    return t = t.credentials, new Rl(t, n, e)
                }, cd.prototype.createRemoteStore = function (t) {
                    var e = this,
                        n = this.localStore,
                        r = this.datastore,
                        i = t.asyncQueue,
                        o = function (t) {
                            return Uf(e.syncEngine, t, 0)
                        },
                        t = new(ol.yt() ? ol : il);
                    return new _l(n, r, i, o, t)
                }, cd.prototype.createSyncEngine = function (t, e) {
                    return function (t, e, n, r, i, o, s) {
                        o = new Of(t, e, n, r, i, o);
                        return s && (o.$o = !0), o
                    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e)
                }, cd.prototype.terminate = function () {
                    return function (n) {
                        return y(this, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = n, Kr("RemoteStore", "RemoteStore shutting down."), e.Or.add(5), [4, ql(e)];
                                    case 1:
                                        return t.sent(), e.Lr.shutdown(), e.Br.set("Unknown"), [2]
                                }
                            })
                        })
                    }(this.remoteStore)
                }, cd);

            function cd() {}

            function hd(t, e) {
                var n = this;
                return (n = rd.call(this, t, e, !1) || this).Qo = t, n.cacheSizeBytes = e, n.synchronizeTabs = !0, n
            }

            function ld(t, e, n) {
                var r = this;
                return (r = id.call(this) || this).Qo = t, r.cacheSizeBytes = e, r.forceOwnership = n, r.synchronizeTabs = !1, r
            }

            function fd() {
                this.synchronizeTabs = !1
            }

            function dd(n, r) {
                void 0 === r && (r = 10240);
                var i = 0;
                return {
                    read: function () {
                        return y(this, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                return i < n.byteLength ? (e = {
                                    value: n.slice(i, i + r),
                                    done: !1
                                }, [2, (i += r, e)]) : [2, {
                                    done: !0
                                }]
                            })
                        })
                    },
                    cancel: function () {
                        return y(this, void 0, void 0, function () {
                            return g(this, function (t) {
                                return [2]
                            })
                        })
                    },
                    releaseLock: function () {},
                    closed: Promise.reject("unimplemented")
                }
            }
            var pd = (Id.prototype.next = function (t) {
                    this.observer.next && this.jo(this.observer.next, t)
                }, Id.prototype.error = function (t) {
                    this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t)
                }, Id.prototype.Wo = function () {
                    this.muted = !0
                }, Id.prototype.jo = function (t, e) {
                    var n = this;
                    this.muted || setTimeout(function () {
                        n.muted || t(e)
                    }, 0)
                }, Id),
                yd = (Td.prototype.close = function () {
                    return this.Go.cancel()
                }, Td.prototype.getMetadata = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            return [2, this.metadata.promise]
                        })
                    })
                }, Td.prototype.Lo = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getMetadata()];
                                case 1:
                                    return [2, (t.sent(), this.Ho())]
                            }
                        })
                    })
                }, Td.prototype.Ho = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.Jo()];
                                case 1:
                                    return null === (e = t.sent()) ? [2, null] : (r = this.zo.decode(e), n = Number(r), isNaN(n) && this.Yo("length string (" + r + ") is not valid number"), [4, this.Xo(n)]);
                                case 2:
                                    return r = t.sent(), [2, new bf(JSON.parse(r), e.length + n)]
                            }
                        })
                    })
                }, Td.prototype.Zo = function () {
                    return this.buffer.findIndex(function (t) {
                        return t === "{".charCodeAt(0)
                    })
                }, Td.prototype.Jo = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.Zo() < 0 ? [4, this.tc()] : [3, 3];
                                case 1:
                                    if (t.sent()) return [3, 3];
                                    t.label = 2;
                                case 2:
                                    return [3, 0];
                                case 3:
                                    return 0 === this.buffer.length ? [2, null] : ((e = this.Zo()) < 0 && this.Yo("Reached the end of bundle when a length string is expected."), n = this.buffer.slice(0, e), [2, (this.buffer = this.buffer.slice(e), n)])
                            }
                        })
                    })
                }, Td.prototype.Xo = function (n) {
                    return y(this, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return this.buffer.length < n ? [4, this.tc()] : [3, 3];
                                case 1:
                                    t.sent() && this.Yo("Reached the end of bundle when more is expected."), t.label = 2;
                                case 2:
                                    return [3, 0];
                                case 3:
                                    return e = this.zo.decode(this.buffer.slice(0, n)), [2, (this.buffer = this.buffer.slice(n), e)]
                            }
                        })
                    })
                }, Td.prototype.Yo = function (t) {
                    throw this.Go.cancel(), new Error("Invalid bundle format: " + t)
                }, Td.prototype.tc = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.Go.read()];
                                case 1:
                                    return (e = t.sent()).done || ((n = new Uint8Array(this.buffer.length + e.value.length)).set(this.buffer), n.set(e.value, this.buffer.length), this.buffer = n), [2, e.done]
                            }
                        })
                    })
                }, Td),
                gd = (Ed.prototype.lookup = function (r) {
                    return y(this, void 0, void 0, function () {
                        var e, n = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    if (this.ensureCommitNotCalled(), 0 < this.mutations.length) throw new Ur(Vr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                    return [4, function (s, a) {
                                        return y(this, void 0, void 0, function () {
                                            var n, e, r, i, o;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return e = Aa((n = s).R) + "/documents", r = {
                                                            documents: a.map(function (t) {
                                                                return Ta(n.R, t)
                                                            })
                                                        }, [4, n.$i("BatchGetDocuments", e, r)];
                                                    case 1:
                                                        return r = t.sent(), i = new Map, r.forEach(function (t) {
                                                            var e, t = (e = n.R, "found" in (t = t) ? function (t, e) {
                                                                Wr(!!e.found), e.found.name, e.found.updateTime;
                                                                var n = Ia(t, e.found.name),
                                                                    t = wa(e.found.updateTime),
                                                                    e = new Ki({
                                                                        mapValue: {
                                                                            fields: e.found.fields
                                                                        }
                                                                    });
                                                                return Qi.newFoundDocument(n, t, e)
                                                            }(e, t) : "missing" in t ? function (t, e) {
                                                                Wr(!!e.missing), Wr(!!e.readTime);
                                                                t = Ia(t, e.missing), e = wa(e.readTime);
                                                                return Qi.newNoDocument(t, e)
                                                            }(e, t) : zr());
                                                            i.set(t.key.toString(), t)
                                                        }), o = [], [2, (a.forEach(function (t) {
                                                            t = i.get(t.toString());
                                                            Wr(!!t), o.push(t)
                                                        }), o)]
                                                }
                                            })
                                        })
                                    }(this.datastore, r)];
                                case 1:
                                    return [2, ((e = t.sent()).forEach(function (t) {
                                        return n.recordVersion(t)
                                    }), e)]
                            }
                        })
                    })
                }, Ed.prototype.set = function (t, e) {
                    this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString())
                }, Ed.prototype.update = function (t, e) {
                    try {
                        this.write(e.toMutation(t, this.preconditionForUpdate(t)))
                    } catch (t) {
                        this.lastWriteError = t
                    }
                    this.writtenDocs.add(t.toString())
                }, Ed.prototype.delete = function (t) {
                    this.write(new xs(t, this.precondition(t))), this.writtenDocs.add(t.toString())
                }, Ed.prototype.commit = function () {
                    return y(this, void 0, void 0, function () {
                        var e, n = this;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                                    return e = this.readVersions, this.mutations.forEach(function (t) {
                                        e.delete(t.key.toString())
                                    }), e.forEach(function (t, e) {
                                        e = Ni.fromPath(e);
                                        n.mutations.push(new Os(e, n.precondition(e)))
                                    }), [4, function (i, o) {
                                        return y(this, void 0, void 0, function () {
                                            var e, n, r;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return n = Aa((e = i).R) + "/documents", r = {
                                                            writes: o.map(function (t) {
                                                                return ka(e.R, t)
                                                            })
                                                        }, [4, e.Ni("Commit", n, r)];
                                                    case 1:
                                                        return t.sent(), [2]
                                                }
                                            })
                                        })
                                    }(this.datastore, this.mutations)];
                                case 1:
                                    return t.sent(), this.committed = !0, [2]
                            }
                        })
                    })
                }, Ed.prototype.recordVersion = function (t) {
                    var e;
                    if (t.isFoundDocument()) e = t.version;
                    else {
                        if (!t.isNoDocument()) throw zr();
                        e = ei.min()
                    }
                    var n = this.readVersions.get(t.key.toString());
                    if (n) {
                        if (!e.isEqual(n)) throw new Ur(Vr.ABORTED, "Document version changed between two reads.")
                    } else this.readVersions.set(t.key.toString(), e)
                }, Ed.prototype.precondition = function (t) {
                    var e = this.readVersions.get(t.toString());
                    return !this.writtenDocs.has(t.toString()) && e ? ds.updateTime(e) : ds.none()
                }, Ed.prototype.preconditionForUpdate = function (t) {
                    var e = this.readVersions.get(t.toString());
                    if (this.writtenDocs.has(t.toString()) || !e) return ds.exists(!0);
                    if (e.isEqual(ei.min())) throw new Ur(Vr.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                    return ds.updateTime(e)
                }, Ed.prototype.write = function (t) {
                    this.ensureCommitNotCalled(), this.mutations.push(t)
                }, Ed.prototype.ensureCommitNotCalled = function () {}, Ed),
                md = (bd.prototype.run = function () {
                    --this.ec, this.nc()
                }, bd.prototype.nc = function () {
                    var t = this;
                    this.Zi.ji(function () {
                        return y(t, void 0, void 0, function () {
                            var e, n, r = this;
                            return g(this, function (t) {
                                return e = new gd(this.datastore), (n = this.sc(e)) && n.then(function (t) {
                                    r.asyncQueue.enqueueAndForget(function () {
                                        return e.commit().then(function () {
                                            r.deferred.resolve(t)
                                        }).catch(function (t) {
                                            r.ic(t)
                                        })
                                    })
                                }).catch(function (t) {
                                    r.ic(t)
                                }), [2]
                            })
                        })
                    })
                }, bd.prototype.sc = function (t) {
                    try {
                        var e = this.updateFunction(t);
                        return !Si(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null)
                    } catch (t) {
                        return this.deferred.reject(t), null
                    }
                }, bd.prototype.ic = function (t) {
                    var e = this;
                    0 < this.ec && this.rc(t) ? (--this.ec, this.asyncQueue.enqueueAndForget(function () {
                        return e.nc(), Promise.resolve()
                    })) : this.deferred.reject(t)
                }, bd.prototype.rc = function (t) {
                    if ("FirebaseError" !== t.name) return !1;
                    t = t.code;
                    return "aborted" === t || "failed-precondition" === t || !Ms(t)
                }, bd),
                vd = (wd.prototype.getConfiguration = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            return [2, {
                                asyncQueue: this.asyncQueue,
                                databaseInfo: this.databaseInfo,
                                clientId: this.clientId,
                                credentials: this.credentials,
                                initialUser: this.user,
                                maxConcurrentLimboResolutions: 100
                            }]
                        })
                    })
                }, wd.prototype.setCredentialChangeListener = function (t) {
                    this.credentialListener = t
                }, wd.prototype.verifyNotTerminated = function () {
                    if (this.asyncQueue.isShuttingDown) throw new Ur(Vr.FAILED_PRECONDITION, "The client has already been terminated.")
                }, wd.prototype.terminate = function () {
                    var t = this;
                    this.asyncQueue.enterRestrictedMode();
                    var n = new lu;
                    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () {
                        return y(t, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 5, , 6]), this.onlineComponents ? [4, this.onlineComponents.terminate()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return this.offlineComponents ? [4, this.offlineComponents.terminate()] : [3, 4];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return this.credentials.removeChangeListener(), n.resolve(), [3, 6];
                                    case 5:
                                        return e = t.sent(), e = af(e, "Failed to shutdown persistence"), n.reject(e), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }), n.promise
                }, wd);

            function wd(t, e, n) {
                var r = this;
                this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = Ph.UNAUTHENTICATED, this.clientId = Yr.u(), this.credentialListener = function () {
                    return Promise.resolve()
                }, this.credentials.setChangeListener(e, function (e) {
                    return y(r, void 0, void 0, function () {
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return Kr("FirestoreClient", "Received user=", e.uid), [4, this.credentialListener(e)];
                                case 1:
                                    return t.sent(), this.user = e, [2]
                            }
                        })
                    })
                })
            }

            function bd(t, e, n, r) {
                this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, this.ec = 5, this.Zi = new Nl(this.asyncQueue, "transaction_retry")
            }

            function Ed(t) {
                this.datastore = t, this.readVersions = new Map, this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set
            }

            function Td(t, e) {
                var n = this;
                this.Go = t, this.R = e, this.metadata = new lu, this.buffer = new Uint8Array, this.zo = new TextDecoder("utf-8"), this.Ho().then(function (t) {
                    t && t.io() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)))
                }, function (t) {
                    return n.metadata.reject(t)
                })
            }

            function Id(t) {
                this.observer = t, this.muted = !1
            }

            function _d(i, o) {
                return y(this, void 0, void 0, function () {
                    var e, n, r = this;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return i.asyncQueue.verifyOperationInProgress(), Kr("FirestoreClient", "Initializing OfflineComponentProvider"), [4, i.getConfiguration()];
                            case 1:
                                return e = t.sent(), [4, o.initialize(e)];
                            case 2:
                                return t.sent(), n = e.initialUser, i.setCredentialChangeListener(function (e) {
                                    return y(r, void 0, void 0, function () {
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return n.isEqual(e) ? [3, 2] : [4, fh(o.localStore, e)];
                                                case 1:
                                                    t.sent(), n = e, t.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        })
                                    })
                                }), o.persistence.setDatabaseDeletedListener(function () {
                                    return i.terminate()
                                }), i.offlineComponents = o, [2]
                        }
                    })
                })
            }

            function Sd(r, i) {
                return y(this, void 0, void 0, function () {
                    var e, n;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return r.asyncQueue.verifyOperationInProgress(), [4, Ad(r)];
                            case 1:
                                return e = t.sent(), Kr("FirestoreClient", "Initializing OnlineComponentProvider"), [4, r.getConfiguration()];
                            case 2:
                                return n = t.sent(), [4, i.initialize(e, n)];
                            case 3:
                                return t.sent(), r.setCredentialChangeListener(function (t) {
                                    return function (r, i) {
                                        return y(this, void 0, void 0, function () {
                                            var e, n;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return (e = r).asyncQueue.verifyOperationInProgress(), Kr("RemoteStore", "RemoteStore received new credentials"), n = zl(e), e.Or.add(3), [4, ql(e)];
                                                    case 1:
                                                        return t.sent(), n && e.Br.set("Unknown"), [4, e.remoteSyncer.handleCredentialChange(i)];
                                                    case 2:
                                                        return t.sent(), e.Or.delete(3), [4, Ul(e)];
                                                    case 3:
                                                        return t.sent(), [2]
                                                }
                                            })
                                        })
                                    }(i.remoteStore, t)
                                }), r.onlineComponents = i, [2]
                        }
                    })
                })
            }

            function Ad(e) {
                return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e.offlineComponents ? [3, 2] : (Kr("FirestoreClient", "Using default OfflineComponentProvider"), [4, _d(e, new od)]);
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2, e.offlineComponents]
                        }
                    })
                })
            }

            function Dd(e) {
                return y(this, void 0, void 0, function () {
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e.onlineComponents ? [3, 2] : (Kr("FirestoreClient", "Using default OnlineComponentProvider"), [4, Sd(e, new ud)]);
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2, e.onlineComponents]
                        }
                    })
                })
            }

            function Nd(t) {
                return Ad(t).then(function (t) {
                    return t.persistence
                })
            }

            function Cd(t) {
                return Ad(t).then(function (t) {
                    return t.localStore
                })
            }

            function kd(t) {
                return Dd(t).then(function (t) {
                    return t.remoteStore
                })
            }

            function Rd(t) {
                return Dd(t).then(function (t) {
                    return t.syncEngine
                })
            }

            function xd(r) {
                return y(this, void 0, void 0, function () {
                    var e, n;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, Dd(r)];
                            case 1:
                                return e = t.sent(), [2, ((n = e.eventManager).onListen = function (s, a) {
                                    return y(this, void 0, void 0, function () {
                                        var e, n, r, i, o;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e = td(s), (o = e.Po.get(a)) ? (n = o.targetId, e.sharedClientState.addLocalQueryTarget(n), r = o.view.Ro(), [3, 4]) : [3, 1];
                                                case 1:
                                                    return [4, mh(e.localStore, Vo(a))];
                                                case 2:
                                                    return i = t.sent(), o = e.sharedClientState.addLocalQueryTarget(i.targetId), n = i.targetId, [4, Mf(e, a, n, "current" === o)];
                                                case 3:
                                                    r = t.sent(), e.isPrimaryClient && Bl(e.remoteStore, i), t.label = 4;
                                                case 4:
                                                    return [2, r]
                                            }
                                        })
                                    })
                                }.bind(null, e.syncEngine), n.onUnlisten = function (i, o) {
                                    return y(this, void 0, void 0, function () {
                                        var e, n, r;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return n = (e = i).Po.get(o), 1 < (r = e.Vo.get(n.targetId)).length ? [2, (e.Vo.set(n.targetId, r.filter(function (t) {
                                                        return !qo(t, o)
                                                    })), void e.Po.delete(o))] : e.isPrimaryClient ? (e.sharedClientState.removeLocalQueryTarget(n.targetId), e.sharedClientState.isActiveQueryTarget(n.targetId) ? [3, 2] : [4, vh(e.localStore, n.targetId, !1).then(function () {
                                                        e.sharedClientState.clearQueryState(n.targetId), jl(e.remoteStore, n.targetId), Gf(e, n.targetId)
                                                    }).catch(Sc)]) : [3, 3];
                                                case 1:
                                                    t.sent(), t.label = 2;
                                                case 2:
                                                    return [3, 5];
                                                case 3:
                                                    return Gf(e, n.targetId), [4, vh(e.localStore, n.targetId, !0)];
                                                case 4:
                                                    t.sent(), t.label = 5;
                                                case 5:
                                                    return [2]
                                            }
                                        })
                                    })
                                }.bind(null, e.syncEngine), n)]
                        }
                    })
                })
            }

            function Od(n, r, i) {
                var t = this;
                void 0 === i && (i = {});
                var o = new lu;
                return n.asyncQueue.enqueueAndForget(function () {
                    return y(t, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e = function (n, r, i, o, s) {
                                        var t = new pd({
                                                next: function (t) {
                                                    r.enqueueAndForget(function () {
                                                        return mf(n, a)
                                                    });
                                                    var e = t.docs.has(i);
                                                    !e && t.fromCache ? s.reject(new Ur(Vr.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && o && "server" === o.source ? s.reject(new Ur(Vr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : s.resolve(t)
                                                },
                                                error: function (t) {
                                                    return s.reject(t)
                                                }
                                            }),
                                            a = new wf(Ro(i.path), t, {
                                                includeMetadataChanges: !0,
                                                so: !0
                                            });
                                        return gf(n, a)
                                    }, [4, xd(n)];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o])]
                            }
                        })
                    })
                }), o.promise
            }

            function Ld(n, r, i) {
                var t = this;
                void 0 === i && (i = {});
                var o = new lu;
                return n.asyncQueue.enqueueAndForget(function () {
                    return y(t, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return e = function (e, n, t, r, i) {
                                        var o = new pd({
                                                next: function (t) {
                                                    n.enqueueAndForget(function () {
                                                        return mf(e, s)
                                                    }), t.fromCache && "server" === r.source ? i.reject(new Ur(Vr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t)
                                                },
                                                error: function (t) {
                                                    return i.reject(t)
                                                }
                                            }),
                                            s = new wf(t, o, {
                                                includeMetadataChanges: !0,
                                                so: !0
                                            });
                                        return gf(e, s)
                                    }, [4, xd(n)];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o])]
                            }
                        })
                    })
                }), o.promise
            }

            function Pd(t, e) {
                this.user = e, this.type = "OAuth", this.authHeaders = {}, this.authHeaders.Authorization = "Bearer " + t
            }
            var Md = function (t, e, n, r, i, o, s, a) {
                    this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = o, this.autoDetectLongPolling = s, this.useFetchStreams = a
                },
                Fd = (Object.defineProperty(Yd.prototype, "isDefaultDatabase", {
                    get: function () {
                        return "(default)" === this.database
                    },
                    enumerable: !1,
                    configurable: !0
                }), Yd.prototype.isEqual = function (t) {
                    return t instanceof Yd && t.projectId === this.projectId && t.database === this.database
                }, Yd),
                Vd = new Map,
                Ud = (Wd.prototype.getToken = function () {
                    return Promise.resolve(null)
                }, Wd.prototype.invalidateToken = function () {}, Wd.prototype.setChangeListener = function (t, e) {
                    this.changeListener = e, t.enqueueRetryable(function () {
                        return e(Ph.UNAUTHENTICATED)
                    })
                }, Wd.prototype.removeChangeListener = function () {
                    this.changeListener = null
                }, Wd),
                qd = (zd.prototype.getToken = function () {
                    return Promise.resolve(this.token)
                }, zd.prototype.invalidateToken = function () {}, zd.prototype.setChangeListener = function (t, e) {
                    var n = this;
                    this.changeListener = e, t.enqueueRetryable(function () {
                        return e(n.token.user)
                    })
                }, zd.prototype.removeChangeListener = function () {
                    this.changeListener = null
                }, zd),
                Bd = (Hd.prototype.getToken = function () {
                    var e = this,
                        n = this.cc,
                        t = this.forceRefresh;
                    return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(function (t) {
                        return e.cc !== n ? (Kr("FirebaseCredentialsProvider", "getToken aborted due to token change."), e.getToken()) : t ? (Wr("string" == typeof t.accessToken), new Pd(t.accessToken, e.currentUser)) : null
                    }) : Promise.resolve(null)
                }, Hd.prototype.invalidateToken = function () {
                    this.forceRefresh = !0
                }, Hd.prototype.setChangeListener = function (t, e) {
                    var n = this;
                    this.asyncQueue = t, this.asyncQueue.enqueueRetryable(function () {
                        return y(n, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.oc.promise];
                                    case 1:
                                        return t.sent(), [4, e(this.currentUser)];
                                    case 2:
                                        return t.sent(), this.changeListener = e, [2]
                                }
                            })
                        })
                    })
                }, Hd.prototype.removeChangeListener = function () {
                    this.auth && this.auth.removeAuthTokenListener(this.uc), this.changeListener = function () {
                        return Promise.resolve()
                    }
                }, Hd.prototype.ac = function () {
                    var t = this.auth && this.auth.getUid();
                    return Wr(null === t || "string" == typeof t), new Ph(t)
                }, Hd),
                jd = (Object.defineProperty(Qd.prototype, "authHeaders", {
                    get: function () {
                        var t = {
                                "X-Goog-AuthUser": this.lc
                            },
                            e = this.hc.auth.getAuthHeaderValueForFirstParty([]);
                        return e && (t.Authorization = e), this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc), t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Qd),
                Kd = (Gd.prototype.getToken = function () {
                    return Promise.resolve(new jd(this.hc, this.lc, this.fc))
                }, Gd.prototype.setChangeListener = function (t, e) {
                    t.enqueueRetryable(function () {
                        return e(Ph.FIRST_PARTY)
                    })
                }, Gd.prototype.removeChangeListener = function () {}, Gd.prototype.invalidateToken = function () {}, Gd);

            function Gd(t, e, n) {
                this.hc = t, this.lc = e, this.fc = n
            }

            function Qd(t, e, n) {
                this.hc = t, this.lc = e, this.fc = n, this.type = "FirstParty", this.user = Ph.FIRST_PARTY
            }

            function Hd(e) {
                var n = this;
                this.currentUser = Ph.UNAUTHENTICATED, this.oc = new lu, this.cc = 0, this.forceRefresh = !1, this.auth = null, this.asyncQueue = null, this.uc = function () {
                    n.cc++, n.currentUser = n.ac(), n.oc.resolve(), n.changeListener && n.asyncQueue.enqueueRetryable(function () {
                        return n.changeListener(n.currentUser)
                    })
                };

                function r(t) {
                    Kr("FirebaseCredentialsProvider", "Auth detected"), n.auth = t, n.auth.addAuthTokenListener(n.uc)
                }
                e.onInit(r), setTimeout(function () {
                    var t;
                    n.auth || ((t = e.getImmediate({
                        optional: !0
                    })) ? r(t) : (Kr("FirebaseCredentialsProvider", "Auth not yet detected"), n.oc.resolve()))
                }, 0)
            }

            function zd(t) {
                this.token = t, this.changeListener = null
            }

            function Wd() {
                this.changeListener = null
            }

            function Yd(t, e) {
                this.projectId = t, this.database = e || "(default)"
            }

            function Xd(t, e, n) {
                if (!n) throw new Ur(Vr.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".")
            }

            function $d(t, e) {
                if (void 0 === e) return {
                    merge: !1
                };
                if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                return e
            }

            function Jd(t, e, n, r) {
                if (!0 === e && !0 === r) throw new Ur(Vr.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.")
            }

            function Zd(t) {
                if (!Ni.isDocumentKey(t)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".")
            }

            function tp(t) {
                if (Ni.isDocumentKey(t)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".")
            }

            function ep(e) {
                if (void 0 === e) return "undefined";
                if (null === e) return "null";
                if ("string" == typeof e) return 20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e);
                if ("number" == typeof e || "boolean" == typeof e) return "" + e;
                if ("object" != typeof e) return "function" == typeof e ? "a function" : zr();
                if (e instanceof Array) return "an array";
                var t = function () {
                    if (e.constructor) {
                        var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
                        if (t && 1 < t.length) return t[1]
                    }
                    return null
                }();
                return t ? "a custom " + t + " object" : "an object"
            }

            function np(t, e) {
                if ((t = "_delegate" in t ? t._delegate : t) instanceof e) return t;
                if (e.name === t.constructor.name) throw new Ur(Vr.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                t = ep(t);
                throw new Ur(Vr.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + t)
            }

            function rp(t, e) {
                if (e <= 0) throw new Ur(Vr.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".")
            }
            var ip, op = (pp.prototype.isEqual = function (t) {
                    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams
                }, pp),
                sp = (Object.defineProperty(dp.prototype, "app", {
                    get: function () {
                        if (!this._app) throw new Ur(Vr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                        return this._app
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(dp.prototype, "_initialized", {
                    get: function () {
                        return this._settingsFrozen
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(dp.prototype, "_terminated", {
                    get: function () {
                        return void 0 !== this._terminateTask
                    },
                    enumerable: !1,
                    configurable: !0
                }), dp.prototype._setSettings = function (t) {
                    if (this._settingsFrozen) throw new Ur(Vr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                    this._settings = new op(t), void 0 !== t.credentials && (this._credentials = function (t) {
                        if (!t) return new Ud;
                        switch (t.type) {
                            case "gapi":
                                var e = t.client;
                                return Wr(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Kd(e, t.sessionIndex || "0", t.iamToken || null);
                            case "provider":
                                return t.client;
                            default:
                                throw new Ur(Vr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                        }
                    }(t.credentials))
                }, dp.prototype._getSettings = function () {
                    return this._settings
                }, dp.prototype._freezeSettings = function () {
                    return this._settingsFrozen = !0, this._settings
                }, dp.prototype._delete = function () {
                    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
                }, dp.prototype.toJSON = function () {
                    return {
                        app: this._app,
                        databaseId: this._databaseId,
                        settings: this._settings
                    }
                }, dp.prototype._terminate = function () {
                    return (t = Vd.get(this)) && (Kr("ComponentProvider", "Removing Datastore"), Vd.delete(this), t.terminate()), Promise.resolve();
                    var t
                }, dp),
                ap = (Object.defineProperty(fp.prototype, "_path", {
                    get: function () {
                        return this._key.path
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(fp.prototype, "id", {
                    get: function () {
                        return this._key.path.lastSegment()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(fp.prototype, "path", {
                    get: function () {
                        return this._key.path.canonicalString()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(fp.prototype, "parent", {
                    get: function () {
                        return new cp(this.firestore, this.converter, this._key.path.popLast())
                    },
                    enumerable: !1,
                    configurable: !0
                }), fp.prototype.withConverter = function (t) {
                    return new fp(this.firestore, t, this._key)
                }, fp),
                up = (lp.prototype.withConverter = function (t) {
                    return new lp(this.firestore, t, this._query)
                }, lp),
                cp = (n(hp, ip = up), Object.defineProperty(hp.prototype, "id", {
                    get: function () {
                        return this._query.path.lastSegment()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(hp.prototype, "path", {
                    get: function () {
                        return this._query.path.canonicalString()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(hp.prototype, "parent", {
                    get: function () {
                        var t = this._path.popLast();
                        return t.isEmpty() ? null : new ap(this.firestore, null, new Ni(t))
                    },
                    enumerable: !1,
                    configurable: !0
                }), hp.prototype.withConverter = function (t) {
                    return new hp(this.firestore, t, this._path)
                }, hp);

            function hp(t, e, n) {
                var r = this;
                return (r = ip.call(this, t, e, Ro(n)) || this)._path = n, r.type = "collection", r
            }

            function lp(t, e, n) {
                this.converter = e, this._query = n, this.type = "query", this.firestore = t
            }

            function fp(t, e, n) {
                this.converter = e, this._key = n, this.type = "document", this.firestore = t
            }

            function dp(t, e) {
                this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new op({}), this._settingsFrozen = !1, t instanceof Fd ? (this._databaseId = t, this._credentials = new Ud) : (this._app = t, this._databaseId = function (t) {
                    if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new Ur(Vr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                    return new Fd(t.options.projectId)
                }(t), this._credentials = new Bd(e))
            }

            function pp(t) {
                var e;
                if (void 0 === t.host) {
                    if (void 0 !== t.ssl) throw new Ur(Vr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0
                } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
                if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
                else {
                    if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new Ur(Vr.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                    this.cacheSizeBytes = t.cacheSizeBytes
                }
                this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t.useFetchStreams, Jd("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling)
            }

            function yp(t, e) {
                for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                if (t = E(t), Xd("collection", "path", e), t instanceof sp) return tp(n = ci.fromString.apply(ci, s([e], r))), new cp(t, null, n);
                if (!(t instanceof ap || t instanceof cp)) throw new Ur(Vr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                return tp(n = ci.fromString.apply(ci, s([t.path], r)).child(ci.fromString(e))), new cp(t.firestore, null, n)
            }

            function gp(t, e) {
                for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                if (t = E(t), Xd("doc", "path", e = 1 === arguments.length ? Yr.u() : e), t instanceof sp) return Zd(n = ci.fromString.apply(ci, s([e], r))), new ap(t, null, new Ni(n));
                if (!(t instanceof ap || t instanceof cp)) throw new Ur(Vr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                return Zd(n = t._path.child(ci.fromString.apply(ci, s([e], r)))), new ap(t.firestore, t instanceof cp ? t.converter : null, new Ni(n))
            }

            function mp(t, e) {
                return t = E(t), e = E(e), (t instanceof ap || t instanceof cp) && (e instanceof ap || e instanceof cp) && t.firestore === e.firestore && t.path === e.path && t.converter === e.converter
            }

            function vp(t, e) {
                return t = E(t), e = E(e), t instanceof up && e instanceof up && t.firestore === e.firestore && qo(t._query, e._query) && t.converter === e.converter
            }
            var wp = (Object.defineProperty(bp.prototype, "isShuttingDown", {
                get: function () {
                    return this._c
                },
                enumerable: !1,
                configurable: !0
            }), bp.prototype.enqueueAndForget = function (t) {
                this.enqueue(t)
            }, bp.prototype.enqueueAndForgetEvenWhileRestricted = function (t) {
                this.Ac(), this.Rc(t)
            }, bp.prototype.enterRestrictedMode = function (t) {
                this._c || (this._c = !0, this.Ec = t || !1, (t = Tl()) && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ic))
            }, bp.prototype.enqueue = function (t) {
                var e = this;
                if (this.Ac(), this._c) return new Promise(function () {});
                var n = new lu;
                return this.Rc(function () {
                    return e._c && e.Ec ? Promise.resolve() : (t().then(n.resolve, n.reject), n.promise)
                }).then(function () {
                    return n.promise
                })
            }, bp.prototype.enqueueRetryable = function (t) {
                var e = this;
                this.enqueueAndForget(function () {
                    return e.wc.push(t), e.bc()
                })
            }, bp.prototype.bc = function () {
                return y(this, void 0, void 0, function () {
                    var e, n = this;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (0 === this.wc.length) return [3, 5];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.wc[0]()];
                            case 2:
                                return t.sent(), this.wc.shift(), this.Zi.reset(), [3, 4];
                            case 3:
                                if (!Iu(e = t.sent())) throw e;
                                return Kr("AsyncQueue", "Operation failed with retryable error: " + e), [3, 4];
                            case 4:
                                0 < this.wc.length && this.Zi.ji(function () {
                                    return n.bc()
                                }), t.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                })
            }, bp.prototype.Rc = function (t) {
                var r = this,
                    e = this.dc.then(function () {
                        return r.gc = !0, t().catch(function (t) {
                            throw r.yc = t, r.gc = !1, Gr("INTERNAL UNHANDLED ERROR: ", (n = (e = t).message || "", n = e.stack ? e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack : n)), t;
                            var e, n
                        }).then(function (t) {
                            return r.gc = !1, t
                        })
                    });
                return this.dc = e
            }, bp.prototype.enqueueAfterDelay = function (t, e, n) {
                var r = this;
                this.Ac(), -1 < this.Tc.indexOf(t) && (e = 0);
                n = of .createAndSchedule(this, t, e, n, function (t) {
                    return r.vc(t)
                });
                return this.mc.push(n), n
            }, bp.prototype.Ac = function () {
                this.yc && zr()
            }, bp.prototype.verifyOperationInProgress = function () {}, bp.prototype.Pc = function () {
                return y(this, void 0, void 0, function () {
                    var e;
                    return g(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, e = this.dc];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                if (e !== this.dc) return [3, 0];
                                t.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, bp.prototype.Vc = function (t) {
                for (var e = 0, n = this.mc; e < n.length; e++)
                    if (n[e].timerId === t) return !0;
                return !1
            }, bp.prototype.Sc = function (r) {
                var i = this;
                return this.Pc().then(function () {
                    i.mc.sort(function (t, e) {
                        return t.targetTimeMs - e.targetTimeMs
                    });
                    for (var t = 0, e = i.mc; t < e.length; t++) {
                        var n = e[t];
                        if (n.skipDelay(), "all" !== r && n.timerId === r) break
                    }
                    return i.Pc()
                })
            }, bp.prototype.Dc = function (t) {
                this.Tc.push(t)
            }, bp.prototype.vc = function (t) {
                t = this.mc.indexOf(t);
                this.mc.splice(t, 1)
            }, bp);

            function bp() {
                var e = this;
                this.dc = Promise.resolve(), this.wc = [], this._c = !1, this.mc = [], this.yc = null, this.gc = !1, this.Ec = !1, this.Tc = [], this.Zi = new Nl(this, "async_queue_retry"), this.Ic = function () {
                    var t = Tl();
                    t && Kr("AsyncQueue", "Visibility state changed to " + t.visibilityState), e.Zi.Gi()
                };
                var t = Tl();
                t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ic)
            }

            function Ep(i) {
                return function () {
                    if ("object" == typeof i && null !== i)
                        for (var t = i, e = 0, n = ["next", "error", "complete"]; e < n.length; e++) {
                            var r = n[e];
                            if (r in t && "function" == typeof t[r]) return 1
                        }
                }()
            }
            var Tp, Ip = (Ap.prototype.onProgress = function (t, e, n) {
                    this._progressObserver = {
                        next: t,
                        error: e,
                        complete: n
                    }
                }, Ap.prototype.catch = function (t) {
                    return this._taskCompletionResolver.promise.catch(t)
                }, Ap.prototype.then = function (t, e) {
                    return this._taskCompletionResolver.promise.then(t, e)
                }, Ap.prototype._completeWith = function (t) {
                    this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t)
                }, Ap.prototype._failWith = function (t) {
                    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t)
                }, Ap.prototype._updateProgress = function (t) {
                    this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t)
                }, Ap),
                _p = (n(Sp, Tp = sp), Sp.prototype._terminate = function () {
                    return this._firestoreClient || Np(this), this._firestoreClient.terminate()
                }, Sp);

            function Sp(t, e) {
                var n = this;
                return (n = Tp.call(this, t, e) || this).type = "firestore", n._queue = new wp, n._persistenceKey = "name" in t ? t.name : "[DEFAULT]", n
            }

            function Ap() {
                this._progressObserver = {}, this._taskCompletionResolver = new lu, this._lastProgress = {
                    taskState: "Running",
                    totalBytes: 0,
                    totalDocuments: 0,
                    bytesLoaded: 0,
                    documentsLoaded: 0
                }
            }

            function Dp(t) {
                return t._firestoreClient || Np(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient
            }

            function Np(t) {
                var e, n, r, i = t._freezeSettings(),
                    i = (e = t._databaseId, n = (null === (r = t._app) || void 0 === r ? void 0 : r.options.appId) || "", r = t._persistenceKey, new Md(e, n, r, i.host, i.ssl, i.experimentalForceLongPolling, i.experimentalAutoDetectLongPolling, i.useFetchStreams));
                t._firestoreClient = new vd(t._credentials, t._queue, i)
            }

            function Cp(n, r, i) {
                var t = this,
                    o = new lu;
                return n.asyncQueue.enqueue(function () {
                    return y(t, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, _d(n, i)];
                                case 1:
                                    return t.sent(), [4, Sd(n, r)];
                                case 2:
                                    return t.sent(), o.resolve(), [3, 4];
                                case 3:
                                    if (!("FirebaseError" === (e = t.sent()).name ? e.code === Vr.FAILED_PRECONDITION || e.code === Vr.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code)) throw e;
                                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + e), o.reject(e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }).then(function () {
                    return o.promise
                })
            }

            function kp(t) {
                if (t._initialized || t._terminated) throw new Ur(Vr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")
            }
            var Rp = (jp.prototype.isEqual = function (t) {
                    return this._internalPath.isEqual(t._internalPath)
                }, jp),
                xp = (Bp.fromBase64String = function (t) {
                    try {
                        return new Bp(di.fromBase64String(t))
                    } catch (t) {
                        throw new Ur(Vr.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t)
                    }
                }, Bp.fromUint8Array = function (t) {
                    return new Bp(di.fromUint8Array(t))
                }, Bp.prototype.toBase64 = function () {
                    return this._byteString.toBase64()
                }, Bp.prototype.toUint8Array = function () {
                    return this._byteString.toUint8Array()
                }, Bp.prototype.toString = function () {
                    return "Bytes(base64: " + this.toBase64() + ")"
                }, Bp.prototype.isEqual = function (t) {
                    return this._byteString.isEqual(t._byteString)
                }, Bp),
                Op = function (t) {
                    this._methodName = t
                },
                Lp = (Object.defineProperty(qp.prototype, "latitude", {
                    get: function () {
                        return this._lat
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(qp.prototype, "longitude", {
                    get: function () {
                        return this._long
                    },
                    enumerable: !1,
                    configurable: !0
                }), qp.prototype.isEqual = function (t) {
                    return this._lat === t._lat && this._long === t._long
                }, qp.prototype.toJSON = function () {
                    return {
                        latitude: this._lat,
                        longitude: this._long
                    }
                }, qp.prototype._compareTo = function (t) {
                    return $r(this._lat, t._lat) || $r(this._long, t._long)
                }, qp),
                Pp = /^__.*__$/,
                Mp = (Up.prototype.toMutation = function (t, e) {
                    return null !== this.fieldMask ? new Ts(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Es(t, this.data, e, this.fieldTransforms)
                }, Up),
                Fp = (Vp.prototype.toMutation = function (t, e) {
                    return new Ts(t, this.data, this.fieldMask, e, this.fieldTransforms)
                }, Vp);

            function Vp(t, e, n) {
                this.data = t, this.fieldMask = e, this.fieldTransforms = n
            }

            function Up(t, e, n) {
                this.data = t, this.fieldMask = e, this.fieldTransforms = n
            }

            function qp(t, e) {
                if (!isFinite(t) || t < -90 || 90 < t) throw new Ur(Vr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                if (!isFinite(e) || e < -180 || 180 < e) throw new Ur(Vr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this._lat = t, this._long = e
            }

            function Bp(t) {
                this._byteString = t
            }

            function jp() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 0; n < t.length; ++n)
                    if (0 === t[n].length) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this._internalPath = new li(t)
            }

            function Kp(t) {
                switch (t) {
                    case 0:
                    case 2:
                    case 1:
                        return 1;
                    case 3:
                    case 4:
                        return;
                    default:
                        throw zr()
                }
            }
            var Gp = (Object.defineProperty(zp.prototype, "path", {
                    get: function () {
                        return this.settings.path
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(zp.prototype, "Nc", {
                    get: function () {
                        return this.settings.Nc
                    },
                    enumerable: !1,
                    configurable: !0
                }), zp.prototype.xc = function (t) {
                    return new zp(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
                }, zp.prototype.kc = function (t) {
                    var e = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                        e = this.xc({
                            path: e,
                            Fc: !1
                        });
                    return e.$c(t), e
                }, zp.prototype.Oc = function (t) {
                    var e, t = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                        t = this.xc({
                            path: t,
                            Fc: !1
                        });
                    return t.Cc(), t
                }, zp.prototype.Mc = function (t) {
                    return this.xc({
                        path: void 0,
                        Fc: !0
                    })
                }, zp.prototype.Lc = function (t) {
                    return Ty(t, this.settings.methodName, this.settings.Bc || !1, this.path, this.settings.qc)
                }, zp.prototype.contains = function (e) {
                    return void 0 !== this.fieldMask.find(function (t) {
                        return e.isPrefixOf(t)
                    }) || void 0 !== this.fieldTransforms.find(function (t) {
                        return e.isPrefixOf(t.field)
                    })
                }, zp.prototype.Cc = function () {
                    if (this.path)
                        for (var t = 0; t < this.path.length; t++) this.$c(this.path.get(t))
                }, zp.prototype.$c = function (t) {
                    if (0 === t.length) throw this.Lc("Document fields must not be empty");
                    if (Kp(this.Nc) && Pp.test(t)) throw this.Lc('Document fields cannot begin and end with "__"')
                }, zp),
                Qp = (Hp.prototype.Uc = function (t, e, n, r) {
                    return void 0 === r && (r = !1), new Gp({
                        Nc: t,
                        methodName: e,
                        qc: n,
                        path: li.emptyPath(),
                        Fc: !1,
                        Bc: r
                    }, this.databaseId, this.R, this.ignoreUndefinedProperties)
                }, Hp);

            function Hp(t, e, n) {
                this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || Il(t)
            }

            function zp(t, e, n, r, i, o) {
                this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = r, void 0 === i && this.Cc(), this.fieldTransforms = i || [], this.fieldMask = o || []
            }

            function Wp(t) {
                var e = t._freezeSettings(),
                    n = Il(t._databaseId);
                return new Qp(t._databaseId, !!e.ignoreUndefinedProperties, n)
            }

            function Yp(t, e, n, r, i, o) {
                var s = t.Uc((o = void 0 === o ? {} : o).merge || o.mergeFields ? 2 : 0, e, n, i);
                vy("Data must be an object, but it was:", s, r);
                var a, u, r = gy(r, s);
                if (o.merge) a = new fi(s.fieldMask), u = s.fieldTransforms;
                else if (o.mergeFields) {
                    for (var c = [], h = 0, l = o.mergeFields; h < l.length; h++) {
                        var f = wy(e, l[h], n);
                        if (!s.contains(f)) throw new Ur(Vr.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                        Iy(c, f) || c.push(f)
                    }
                    a = new fi(c), u = s.fieldTransforms.filter(function (t) {
                        return a.covers(t.field)
                    })
                } else a = null, u = s.fieldTransforms;
                return new Mp(new Ki(r), a, u)
            }
            var Xp, $p = (n(Jp, Xp = Op), Jp.prototype._toFieldTransform = function (t) {
                if (2 !== t.Nc) throw 1 === t.Nc ? t.Lc(this._methodName + "() can only appear at the top level of your update data") : t.Lc(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
                return t.fieldMask.push(t.path), null
            }, Jp.prototype.isEqual = function (t) {
                return t instanceof Jp
            }, Jp);

            function Jp() {
                return null !== Xp && Xp.apply(this, arguments) || this
            }

            function Zp(t, e, n) {
                return new Gp({
                    Nc: 3,
                    qc: e.settings.qc,
                    methodName: t._methodName,
                    Fc: n
                }, e.databaseId, e.R, e.ignoreUndefinedProperties)
            }
            var ty, ey, ny, ry, iy = (n(ly, ry = Op), ly.prototype._toFieldTransform = function (t) {
                    return new fs(t.path, new $o)
                }, ly.prototype.isEqual = function (t) {
                    return t instanceof ly
                }, ly),
                oy = (n(hy, ny = Op), hy.prototype._toFieldTransform = function (t) {
                    var e = Zp(this, t, !0),
                        n = this.Kc.map(function (t) {
                            return yy(t, e)
                        }),
                        n = new Jo(n);
                    return new fs(t.path, n)
                }, hy.prototype.isEqual = function (t) {
                    return this === t
                }, hy),
                sy = (n(cy, ey = Op), cy.prototype._toFieldTransform = function (t) {
                    var e = Zp(this, t, !0),
                        n = this.Kc.map(function (t) {
                            return yy(t, e)
                        }),
                        n = new rs(n);
                    return new fs(t.path, n)
                }, cy.prototype.isEqual = function (t) {
                    return this === t
                }, cy),
                ay = (n(uy, ty = Op), uy.prototype._toFieldTransform = function (t) {
                    var e = new as(t.R, zo(t.R, this.Qc));
                    return new fs(t.path, e)
                }, uy.prototype.isEqual = function (t) {
                    return this === t
                }, uy);

            function uy(t, e) {
                var n = this;
                return (n = ty.call(this, t) || this).Qc = e, n
            }

            function cy(t, e) {
                var n = this;
                return (n = ey.call(this, t) || this).Kc = e, n
            }

            function hy(t, e) {
                var n = this;
                return (n = ny.call(this, t) || this).Kc = e, n
            }

            function ly() {
                return null !== ry && ry.apply(this, arguments) || this
            }

            function fy(t, r, i, e) {
                var o = t.Uc(1, r, i);
                vy("Data must be an object, but it was:", o, e);
                var s = [],
                    a = Ki.empty();
                oi(e, function (t, e) {
                    var n = Ey(r, t, i);
                    e = E(e);
                    t = o.Oc(n);
                    e instanceof $p ? s.push(n) : null != (t = yy(e, t)) && (s.push(n), a.set(n, t))
                });
                e = new fi(s);
                return new Fp(a, e, o.fieldTransforms)
            }

            function dy(t, e, n, r, i, o) {
                var s = t.Uc(1, e, n),
                    a = [wy(e, r, n)],
                    u = [i];
                if (o.length % 2 != 0) throw new Ur(Vr.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
                for (var c = 0; c < o.length; c += 2) a.push(wy(e, o[c])), u.push(o[c + 1]);
                for (var h, l, f, d = [], p = Ki.empty(), y = a.length - 1; 0 <= y; --y) Iy(d, a[y]) || (h = a[y], l = E(l = u[y]), f = s.Oc(h), l instanceof $p ? d.push(h) : null != (f = yy(l, f)) && (d.push(h), p.set(h, f)));
                i = new fi(d);
                return new Fp(p, i, s.fieldTransforms)
            }

            function py(t, e, n, r) {
                return yy(n, t.Uc((r = void 0 === r ? !1 : r) ? 4 : 3, e))
            }

            function yy(s, t) {
                if (my(s = E(s))) return vy("Unsupported field value:", t, s), gy(s, t);
                if (s instanceof Op) return function (t, e) {
                    if (!Kp(e.Nc)) throw e.Lc(t._methodName + "() can only be used with update() and set()");
                    if (!e.path) throw e.Lc(t._methodName + "() is not currently supported inside arrays");
                    t = t._toFieldTransform(e);
                    t && e.fieldTransforms.push(t)
                }(s, t), null;
                if (void 0 === s && t.ignoreUndefinedProperties) return null;
                if (t.path && t.fieldMask.push(t.path), s instanceof Array) {
                    if (t.settings.Fc && 4 !== t.Nc) throw t.Lc("Nested arrays are not supported");
                    return function (t) {
                        for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
                            var o = yy(i[r], t.Mc(n));
                            null == o && (o = {
                                nullValue: "NULL_VALUE"
                            }), e.push(o), n++
                        }
                        return {
                            arrayValue: {
                                values: e
                            }
                        }
                    }(t)
                }
                return function (t, e) {
                    if (null === (t = E(s))) return {
                        nullValue: "NULL_VALUE"
                    };
                    if ("number" == typeof t) return zo(e.R, t);
                    if ("boolean" == typeof t) return {
                        booleanValue: t
                    };
                    if ("string" == typeof t) return {
                        stringValue: t
                    };
                    if (t instanceof Date) {
                        var n = ti.fromDate(t);
                        return {
                            timestampValue: ma(e.R, n)
                        }
                    }
                    if (t instanceof ti) return n = new ti(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)), {
                        timestampValue: ma(e.R, n)
                    };
                    if (t instanceof Lp) return {
                        geoPointValue: {
                            latitude: t.latitude,
                            longitude: t.longitude
                        }
                    };
                    if (t instanceof xp) return {
                        bytesValue: va(e.R, t._byteString)
                    };
                    if (t instanceof ap) {
                        var n = e.databaseId,
                            r = t.firestore._databaseId;
                        if (!r.isEqual(n)) throw e.Lc("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                        return {
                            referenceValue: ba(t.firestore._databaseId || e.databaseId, t._key.path)
                        }
                    }
                    throw e.Lc("Unsupported field value: " + ep(t))
                }(0, t)
            }

            function gy(t, n) {
                var r = {};
                return si(t) ? n.path && 0 < n.path.length && n.fieldMask.push(n.path) : oi(t, function (t, e) {
                    e = yy(e, n.kc(t));
                    null != e && (r[t] = e)
                }), {
                    mapValue: {
                        fields: r
                    }
                }
            }

            function my(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ti || t instanceof Lp || t instanceof xp || t instanceof ap || t instanceof Op)
            }

            function vy(t, e, n) {
                if (!my(n) || ("object" != typeof (r = n) || null === r || Object.getPrototypeOf(r) !== Object.prototype && null !== Object.getPrototypeOf(r))) {
                    n = ep(n);
                    throw "an object" === n ? e.Lc(t + " a custom object") : e.Lc(t + " " + n)
                }
                var r
            }

            function wy(t, e, n) {
                if ((e = E(e)) instanceof Rp) return e._internalPath;
                if ("string" == typeof e) return Ey(t, e);
                throw Ty("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n)
            }
            var by = new RegExp("[~\\*/\\[\\]]");

            function Ey(e, n, r) {
                if (0 <= n.search(by)) throw Ty("Invalid field path (" + n + "). Paths must not contain '~', '*', '/', '[', or ']'", e, !1, void 0, r);
                try {
                    return (new(Rp.bind.apply(Rp, s([void 0], n.split(".")))))._internalPath
                } catch (t) {
                    throw Ty("Invalid field path (" + n + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", e, !1, void 0, r)
                }
            }

            function Ty(t, e, n, r, i) {
                var o = r && !r.isEmpty(),
                    s = void 0 !== i,
                    e = "Function " + e + "() called with invalid data";
                n && (e += " (via `toFirestore()`)");
                n = "";
                return (o || s) && (n += " (found", o && (n += " in field " + r), s && (n += " in document " + i), n += ")"), new Ur(Vr.INVALID_ARGUMENT, (e += ". ") + t + n)
            }

            function Iy(t, e) {
                return t.some(function (t) {
                    return t.isEqual(e)
                })
            }
            var _y, Sy = (Object.defineProperty(Ny.prototype, "id", {
                    get: function () {
                        return this._key.path.lastSegment()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Ny.prototype, "ref", {
                    get: function () {
                        return new ap(this._firestore, this._converter, this._key)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ny.prototype.exists = function () {
                    return null !== this._document
                }, Ny.prototype.data = function () {
                    if (this._document) {
                        if (this._converter) {
                            var t = new Ay(this._firestore, this._userDataWriter, this._key, this._document, null);
                            return this._converter.fromFirestore(t)
                        }
                        return this._userDataWriter.convertValue(this._document.data.value)
                    }
                }, Ny.prototype.get = function (t) {
                    if (this._document) {
                        t = this._document.data.field(Cy("DocumentSnapshot.get", t));
                        if (null !== t) return this._userDataWriter.convertValue(t)
                    }
                }, Ny),
                Ay = (n(Dy, _y = Sy), Dy.prototype.data = function () {
                    return _y.prototype.data.call(this)
                }, Dy);

            function Dy() {
                return null !== _y && _y.apply(this, arguments) || this
            }

            function Ny(t, e, n, r, i) {
                this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, this._converter = i
            }

            function Cy(t, e) {
                return "string" == typeof e ? Ey(t, e) : (e instanceof Rp ? e : e._delegate)._internalPath
            }
            var ky, Ry, xy = (Uy.prototype.isEqual = function (t) {
                    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                }, Uy),
                Oy = (n(Vy, Ry = Sy), Vy.prototype.exists = function () {
                    return Ry.prototype.exists.call(this)
                }, Vy.prototype.data = function (t) {
                    if (void 0 === t && (t = {}), this._document) {
                        if (this._converter) {
                            var e = new Ly(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                            return this._converter.fromFirestore(e, t)
                        }
                        return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps)
                    }
                }, Vy.prototype.get = function (t, e) {
                    if (void 0 === e && (e = {}), this._document) {
                        t = this._document.data.field(Cy("DocumentSnapshot.get", t));
                        if (null !== t) return this._userDataWriter.convertValue(t, e.serverTimestamps)
                    }
                }, Vy),
                Ly = (n(Fy, ky = Oy), Fy.prototype.data = function (t) {
                    return ky.prototype.data.call(this, t = void 0 === t ? {} : t)
                }, Fy),
                Py = (Object.defineProperty(My.prototype, "docs", {
                    get: function () {
                        var e = [];
                        return this.forEach(function (t) {
                            return e.push(t)
                        }), e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(My.prototype, "size", {
                    get: function () {
                        return this._snapshot.docs.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(My.prototype, "empty", {
                    get: function () {
                        return 0 === this.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), My.prototype.forEach = function (e, n) {
                    var r = this;
                    this._snapshot.docs.forEach(function (t) {
                        e.call(n, new Ly(r._firestore, r._userDataWriter, t.key, t, new xy(r._snapshot.mutatedKeys.has(t.key), r._snapshot.fromCache), r.query.converter))
                    })
                }, My.prototype.docChanges = function (t) {
                    t = !!(t = void 0 === t ? {} : t).includeMetadataChanges;
                    if (t && this._snapshot.excludesMetadataChanges) throw new Ur(Vr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function (i, e) {
                        if (i._snapshot.oldDocs.isEmpty()) {
                            var n = 0;
                            return i._snapshot.docChanges.map(function (t) {
                                return {
                                    type: "added",
                                    doc: new Ly(i._firestore, i._userDataWriter, t.doc.key, t.doc, new xy(i._snapshot.mutatedKeys.has(t.doc.key), i._snapshot.fromCache), i.query.converter),
                                    oldIndex: -1,
                                    newIndex: n++
                                }
                            })
                        }
                        var o = i._snapshot.oldDocs;
                        return i._snapshot.docChanges.filter(function (t) {
                            return e || 3 !== t.type
                        }).map(function (t) {
                            var e = new Ly(i._firestore, i._userDataWriter, t.doc.key, t.doc, new xy(i._snapshot.mutatedKeys.has(t.doc.key), i._snapshot.fromCache), i.query.converter),
                                n = -1,
                                r = -1;
                            return 0 !== t.type && (n = o.indexOf(t.doc.key), o = o.delete(t.doc.key)), 1 !== t.type && (r = (o = o.add(t.doc)).indexOf(t.doc.key)), {
                                type: function (t) {
                                    switch (t) {
                                        case 0:
                                            return "added";
                                        case 2:
                                        case 3:
                                            return "modified";
                                        case 1:
                                            return "removed";
                                        default:
                                            return zr()
                                    }
                                }(t.type),
                                doc: e,
                                oldIndex: n,
                                newIndex: r
                            }
                        })
                    }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges
                }, My);

            function My(t, e, n, r) {
                this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new xy(r.hasPendingWrites, r.fromCache), this.query = n
            }

            function Fy() {
                return null !== ky && ky.apply(this, arguments) || this
            }

            function Vy(t, e, n, r, i, o) {
                var s = this;
                return (s = Ry.call(this, t, e, n, r, o) || this)._firestore = t, s._firestoreImpl = t, s.metadata = i, s
            }

            function Uy(t, e) {
                this.hasPendingWrites = t, this.fromCache = e
            }

            function qy(t, e) {
                return t instanceof Oy && e instanceof Oy ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Py && e instanceof Py && t._firestore === e._firestore && vp(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot)
            }

            function By(t) {
                if (Oo(t) && 0 === t.explicitOrderBy.length) throw new Ur(Vr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
            }
            R = function () {};

            function jy(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) t = i[r]._apply(t);
                return t
            }
            var Ky, Gy, Qy, Hy, zy, Wy = (n(rg, zy = R), rg.prototype._apply = function (t) {
                    var e = Wp(t.firestore),
                        e = function (t, e, n, r, i, o) {
                            if (r.isKeyField()) {
                                if ("array-contains" === i || "array-contains-any" === i) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + i + "' queries on FieldPath.documentId().");
                                if ("in" === i || "not-in" === i) {
                                    sg(o, i);
                                    for (var s = [], a = 0, u = o; a < u.length; a++) {
                                        var c = u[a];
                                        s.push(og(n, t, c))
                                    }
                                    h = {
                                        arrayValue: {
                                            values: s
                                        }
                                    }
                                } else h = og(n, t, o)
                            } else "in" !== i && "not-in" !== i && "array-contains-any" !== i || sg(o, i), h = py(e, "where", o, "in" === i || "not-in" === i);
                            var h = Zi.create(r, i, h);
                            return function (t, e) {
                                if (e.g()) {
                                    var n = Po(t);
                                    if (null !== n && !n.isEqual(e.field)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                                    n = Lo(t);
                                    null !== n && ag(0, e.field, n)
                                }
                                t = function (t, e) {
                                    for (var n = 0, r = t.filters; n < r.length; n++) {
                                        var i = r[n];
                                        if (0 <= e.indexOf(i.op)) return i.op
                                    }
                                    return null
                                }(t, function () {
                                    switch (e.op) {
                                        case "!=":
                                            return ["!=", "not-in"];
                                        case "array-contains":
                                            return ["array-contains", "array-contains-any", "not-in"];
                                        case "in":
                                            return ["array-contains-any", "in", "not-in"];
                                        case "array-contains-any":
                                            return ["array-contains", "array-contains-any", "in", "not-in"];
                                        case "not-in":
                                            return ["array-contains", "array-contains-any", "in", "not-in", "!="];
                                        default:
                                            return []
                                    }
                                }());
                                if (null !== t) throw t === e.op ? new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + t.toString() + "' filters.")
                            }(t, h), h
                        }(t._query, e, t.firestore._databaseId, this.jc, this.Wc, this.Gc);
                    return new up(t.firestore, t.converter, (t = t._query, e = t.filters.concat([e]), new Co(t.path, t.collectionGroup, t.explicitOrderBy.slice(), e, t.limit, t.limitType, t.startAt, t.endAt)))
                }, rg),
                Yy = (n(ng, Hy = R), ng.prototype._apply = function (t) {
                    var e = function (t, e, n) {
                        if (null !== t.startAt) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
                        if (null !== t.endAt) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
                        var r = new Ao(e, n);
                        return e = r, null !== Lo(n = t) || null !== (t = Po(n)) && ag(0, t, e.field), r
                    }(t._query, this.jc, this.zc);
                    return new up(t.firestore, t.converter, (t = t._query, e = t.explicitOrderBy.concat([e]), new Co(t.path, t.collectionGroup, e, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt)))
                }, ng),
                Xy = (n(eg, Qy = R), eg.prototype._apply = function (t) {
                    return new up(t.firestore, t.converter, Uo(t._query, this.Hc, this.Jc))
                }, eg),
                $y = (n(tg, Gy = R), tg.prototype._apply = function (t) {
                    var e = ig(t, this.type, this.Yc, this.Xc);
                    return new up(t.firestore, t.converter, (t = t._query, e = e, new Co(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt)))
                }, tg),
                Jy = (n(Zy, Ky = R), Zy.prototype._apply = function (t) {
                    var e = ig(t, this.type, this.Yc, this.Xc);
                    return new up(t.firestore, t.converter, (t = t._query, e = e, new Co(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e)))
                }, Zy);

            function Zy(t, e, n) {
                var r = this;
                return (r = Ky.call(this) || this).type = t, r.Yc = e, r.Xc = n, r
            }

            function tg(t, e, n) {
                var r = this;
                return (r = Gy.call(this) || this).type = t, r.Yc = e, r.Xc = n, r
            }

            function eg(t, e, n) {
                var r = this;
                return (r = Qy.call(this) || this).type = t, r.Hc = e, r.Jc = n, r
            }

            function ng(t, e) {
                var n = this;
                return (n = Hy.call(this) || this).jc = t, n.zc = e, n.type = "orderBy", n
            }

            function rg(t, e, n) {
                var r = this;
                return (r = zy.call(this) || this).jc = t, r.Wc = e, r.Gc = n, r.type = "where", r
            }

            function ig(t, c, e, n) {
                if (e[0] = E(e[0]), e[0] instanceof Sy) return function (t, e, n, r) {
                    if (!n) throw new Ur(Vr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + c + "().");
                    for (var i = [], o = 0, s = Fo(t); o < s.length; o++) {
                        var a = s[o];
                        if (a.field.isKeyField()) i.push(Mi(e, n.key));
                        else {
                            var u = n.data.field(a.field);
                            if (Ii(u)) throw new Ur(Vr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                            if (null === u) {
                                a = a.field.canonicalString();
                                throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + a + "' (used as the orderBy) does not exist.")
                            }
                            i.push(u)
                        }
                    }
                    return new bo(i, r)
                }(t._query, t.firestore._databaseId, e[0]._document, n);
                var r = Wp(t.firestore);
                return function (t, e, n, r, i, o) {
                    var s = t.explicitOrderBy;
                    if (i.length > s.length) throw new Ur(Vr.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
                    for (var a = [], u = 0; u < i.length; u++) {
                        var c = i[u];
                        if (s[u].field.isKeyField()) {
                            if ("string" != typeof c) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                            if (!Mo(t) && -1 !== c.indexOf("/")) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                            var h = t.path.child(ci.fromString(c));
                            if (!Ni.isDocumentKey(h)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                            h = new Ni(h);
                            a.push(Mi(e, h))
                        } else {
                            c = py(n, r, c);
                            a.push(c)
                        }
                    }
                    return new bo(a, o)
                }(t._query, t.firestore._databaseId, r, c, e, n)
            }

            function og(t, e, n) {
                if ("string" == typeof (n = E(n))) {
                    if ("" === n) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                    if (!Mo(e) && -1 !== n.indexOf("/")) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
                    e = e.path.child(ci.fromString(n));
                    if (!Ni.isDocumentKey(e)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
                    return Mi(t, new Ni(e))
                }
                if (n instanceof ap) return Mi(t, n._key);
                throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + ep(n) + ".")
            }

            function sg(t, e) {
                if (!Array.isArray(t) || 0 === t.length) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                if (10 < t.length) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.")
            }

            function ag(t, e, n) {
                if (!n.isEqual(e)) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.")
            }
            ug.prototype.convertValue = function (t, e) {
                switch (void 0 === e && (e = "none"), ki(t)) {
                    case 0:
                        return null;
                    case 1:
                        return t.booleanValue;
                    case 2:
                        return Ei(t.integerValue || t.doubleValue);
                    case 3:
                        return this.convertTimestamp(t.timestampValue);
                    case 4:
                        return this.convertServerTimestamp(t, e);
                    case 5:
                        return t.stringValue;
                    case 6:
                        return this.convertBytes(Ti(t.bytesValue));
                    case 7:
                        return this.convertReference(t.referenceValue);
                    case 8:
                        return this.convertGeoPoint(t.geoPointValue);
                    case 9:
                        return this.convertArray(t.arrayValue, e);
                    case 10:
                        return this.convertObject(t.mapValue, e);
                    default:
                        throw zr()
                }
            }, ug.prototype.convertObject = function (t, n) {
                var r = this,
                    i = {};
                return oi(t.fields, function (t, e) {
                    i[t] = r.convertValue(e, n)
                }), i
            }, ug.prototype.convertGeoPoint = function (t) {
                return new Lp(Ei(t.latitude), Ei(t.longitude))
            }, ug.prototype.convertArray = function (t, e) {
                var n = this;
                return (t.values || []).map(function (t) {
                    return n.convertValue(t, e)
                })
            }, ug.prototype.convertServerTimestamp = function (t, e) {
                switch (e) {
                    case "previous":
                        var n = function t(e) {
                            e = e.mapValue.fields.__previous_value__;
                            return Ii(e) ? t(e) : e
                        }(t);
                        return null == n ? null : this.convertValue(n, e);
                    case "estimate":
                        return this.convertTimestamp(_i(t));
                    default:
                        return null
                }
            }, ug.prototype.convertTimestamp = function (t) {
                t = bi(t);
                return new ti(t.seconds, t.nanos)
            }, ug.prototype.convertDocumentKey = function (t, e) {
                var n = ci.fromString(t);
                Wr(Ba(n));
                t = new Fd(n.get(1), n.get(3)), n = new Ni(n.popFirst(5));
                return t.isEqual(e) || Gr("Document " + n + " contains a document reference within a different database (" + t.projectId + "/" + t.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), n
            }, A = ug;

            function ug() {}

            function cg(t, e, n) {
                return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e
            }
            var hg, lg = (n(pg, hg = A), pg.prototype.convertBytes = function (t) {
                    return new xp(t)
                }, pg.prototype.convertReference = function (t) {
                    t = this.convertDocumentKey(t, this.firestore._databaseId);
                    return new ap(this.firestore, null, t)
                }, pg),
                fg = (dg.prototype.set = function (t, e, n) {
                    this._verifyNotCommitted();
                    t = yg(t, this._firestore), e = cg(t.converter, e, n), n = Yp(this._dataReader, "WriteBatch.set", t._key, e, null !== t.converter, n);
                    return this._mutations.push(n.toMutation(t._key, ds.none())), this
                }, dg.prototype.update = function (t, e, n) {
                    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                    this._verifyNotCommitted();
                    t = yg(t, this._firestore), e = "string" == typeof (e = E(e)) || e instanceof Rp ? dy(this._dataReader, "WriteBatch.update", t._key, e, n, r) : fy(this._dataReader, "WriteBatch.update", t._key, e);
                    return this._mutations.push(e.toMutation(t._key, ds.exists(!0))), this
                }, dg.prototype.delete = function (t) {
                    this._verifyNotCommitted();
                    t = yg(t, this._firestore);
                    return this._mutations = this._mutations.concat(new xs(t._key, ds.none())), this
                }, dg.prototype.commit = function () {
                    return this._verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? this._commitHandler(this._mutations) : Promise.resolve()
                }, dg.prototype._verifyNotCommitted = function () {
                    if (this._committed) throw new Ur(Vr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                }, dg);

            function dg(t, e) {
                this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, this._dataReader = Wp(t)
            }

            function pg(t) {
                var e = this;
                return (e = hg.call(this) || this).firestore = t, e
            }

            function yg(t, e) {
                if ((t = E(t)).firestore !== e) throw new Ur(Vr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                return t
            }
            var gg, mg = (n(vg, gg = A), vg.prototype.convertBytes = function (t) {
                return new xp(t)
            }, vg.prototype.convertReference = function (t) {
                t = this.convertDocumentKey(t, this.firestore._databaseId);
                return new ap(this.firestore, null, t)
            }, vg);

            function vg(t) {
                var e = this;
                return (e = gg.call(this) || this).firestore = t, e
            }

            function wg(t, e, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                t = np(t, ap);
                var o = np(t.firestore, _p),
                    s = Wp(o);
                return Eg(o, [("string" == typeof (e = E(e)) || e instanceof Rp ? dy(s, "updateDoc", t._key, e, n, r) : fy(s, "updateDoc", t._key, e)).toMutation(t._key, ds.exists(!0))])
            }

            function bg(e) {
                for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                e = E(e);
                var r = {
                        includeMetadataChanges: !1
                    },
                    i = 0;
                "object" != typeof n[i] || Ep(n[i]) || (r = n[i], i++);
                var o, s, a, u, c, h, l = {
                    includeMetadataChanges: r.includeMetadataChanges
                };
                return Ep(n[i]) && (o = n[i], n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o), n[i + 1] = null === (r = o.error) || void 0 === r ? void 0 : r.bind(o), n[i + 2] = null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o)), e instanceof ap ? (a = np(e.firestore, _p), u = Ro(e._key.path), h = {
                        next: function (t) {
                            n[i] && n[i](Tg(a, e, t))
                        },
                        error: n[i + 1],
                        complete: n[i + 2]
                    }) : (s = np(e, up), a = np(s.firestore, _p), u = s._query, c = new mg(a), h = {
                        next: function (t) {
                            n[i] && n[i](new Py(a, c, s, t))
                        },
                        error: n[i + 1],
                        complete: n[i + 2]
                    }, By(e._query)),
                    function (n, t, e) {
                        var r = this,
                            i = new pd(h),
                            o = new wf(t, i, e);
                        return n.asyncQueue.enqueueAndForget(function () {
                                return y(r, void 0, void 0, function () {
                                    var e;
                                    return g(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return e = gf, [4, xd(n)];
                                            case 1:
                                                return [2, e.apply(void 0, [t.sent(), o])]
                                        }
                                    })
                                })
                            }),
                            function () {
                                i.Wo(), n.asyncQueue.enqueueAndForget(function () {
                                    return y(r, void 0, void 0, function () {
                                        var e;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e = mf, [4, xd(n)];
                                                case 1:
                                                    return [2, e.apply(void 0, [t.sent(), o])]
                                            }
                                        })
                                    })
                                })
                            }
                    }(Dp(a), u, l)
            }

            function Eg(t, e) {
                return function (n, r) {
                    var t = this,
                        i = new lu;
                    return n.asyncQueue.enqueueAndForget(function () {
                        return y(t, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = Ff, [4, Rd(n)];
                                    case 1:
                                        return [2, e.apply(void 0, [t.sent(), r, i])]
                                }
                            })
                        })
                    }), i.promise
                }(Dp(t), e)
            }

            function Tg(t, e, n) {
                var r = n.docs.get(e._key),
                    i = new mg(t);
                return new Oy(t, i, e._key, r, new xy(n.hasPendingWrites, n.fromCache), e.converter)
            }
            var Ig, _g = (Ag.prototype.get = function (t) {
                var e = this,
                    n = yg(t, this._firestore),
                    r = new lg(this._firestore);
                return this._transaction.lookup([n._key]).then(function (t) {
                    if (!t || 1 !== t.length) return zr();
                    t = t[0];
                    if (t.isFoundDocument()) return new Sy(e._firestore, r, t.key, t, n.converter);
                    if (t.isNoDocument()) return new Sy(e._firestore, r, n._key, null, n.converter);
                    throw zr()
                })
            }, Ag.prototype.set = function (t, e, n) {
                t = yg(t, this._firestore), e = cg(t.converter, e, n), n = Yp(this._dataReader, "Transaction.set", t._key, e, null !== t.converter, n);
                return this._transaction.set(t._key, n), this
            }, Ag.prototype.update = function (t, e, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                t = yg(t, this._firestore), e = "string" == typeof (e = E(e)) || e instanceof Rp ? dy(this._dataReader, "Transaction.update", t._key, e, n, r) : fy(this._dataReader, "Transaction.update", t._key, e);
                return this._transaction.update(t._key, e), this
            }, Ag.prototype.delete = function (t) {
                t = yg(t, this._firestore);
                return this._transaction.delete(t._key), this
            }, n(Sg, Ig = Ag), Sg.prototype.get = function (t) {
                var e = this,
                    n = yg(t, this._firestore),
                    r = new mg(this._firestore);
                return Ig.prototype.get.call(this, t).then(function (t) {
                    return new Oy(e._firestore, r, n._key, t._document, new xy(!1, !1), n.converter)
                })
            }, Sg);

            function Sg(t, e) {
                var n = this;
                return (n = Ig.call(this, t, e) || this)._firestore = t, n
            }

            function Ag(t, e) {
                this._firestore = t, this._transaction = e, this._dataReader = Wp(t)
            }

            function Dg() {
                if ("undefined" == typeof Uint8Array) throw new Ur(Vr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function Ng() {
                if ("undefined" == typeof atob) throw new Ur(Vr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Cg, kg = (Fg.fromBase64String = function (t) {
                    return Ng(), new Fg(xp.fromBase64String(t))
                }, Fg.fromUint8Array = function (t) {
                    return Dg(), new Fg(xp.fromUint8Array(t))
                }, Fg.prototype.toBase64 = function () {
                    return Ng(), this._delegate.toBase64()
                }, Fg.prototype.toUint8Array = function () {
                    return Dg(), this._delegate.toUint8Array()
                }, Fg.prototype.isEqual = function (t) {
                    return this._delegate.isEqual(t._delegate)
                }, Fg.prototype.toString = function () {
                    return "Blob(base64: " + this.toBase64() + ")"
                }, Fg),
                Rg = (Mg.prototype.enableIndexedDbPersistence = function (t, e) {
                    return function (t, e) {
                        kp(t = np(t, _p));
                        var n = Dp(t),
                            r = t._freezeSettings(),
                            t = new ud;
                        return Cp(n, t, new sd(t, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership))
                    }(t._delegate, {
                        forceOwnership: e
                    })
                }, Mg.prototype.enableMultiTabIndexedDbPersistence = function (t) {
                    return function (t) {
                        kp(t = np(t, _p));
                        var e = Dp(t),
                            n = t._freezeSettings(),
                            t = new ud;
                        return Cp(e, t, new ad(t, n.cacheSizeBytes))
                    }(t._delegate)
                }, Mg.prototype.clearIndexedDbPersistence = function (t) {
                    return function (n) {
                        var t = this;
                        if (n._initialized && !n._terminated) throw new Ur(Vr.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                        var r = new lu;
                        return n._queue.enqueueAndForgetEvenWhileRestricted(function () {
                            return y(t, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, function (n) {
                                                return y(this, void 0, void 0, function () {
                                                    var e;
                                                    return g(this, function (t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return pu.yt() ? (e = n + "main", [4, pu.delete(e)]) : [2, Promise.resolve()];
                                                            case 1:
                                                                return t.sent(), [2]
                                                        }
                                                    })
                                                })
                                            }(eh(n._databaseId, n._persistenceKey))];
                                        case 1:
                                            return t.sent(), r.resolve(), [3, 3];
                                        case 2:
                                            return e = t.sent(), r.reject(e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }), r.promise
                    }(t._delegate)
                }, Mg),
                xg = (Object.defineProperty(Pg.prototype, "_databaseId", {
                    get: function () {
                        return this._delegate._databaseId
                    },
                    enumerable: !1,
                    configurable: !0
                }), Pg.prototype.settings = function (t) {
                    var e = this._delegate._getSettings();
                    t.merge || e.host === t.host || Qr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."), t.merge && delete(t = Object.assign(Object.assign({}, e), t)).merge, this._delegate._setSettings(t)
                }, Pg.prototype.useEmulator = function (t, e, n) {
                    (function (t, e, n, r) {
                        void 0 === r && (r = {});
                        var i, o = (t = np(t, sp))._getSettings();
                        if ("firestore.googleapis.com" !== o.host && o.host !== e && Qr("Host has been set in both settings() and useEmulator(), emulator host will be used"), t._setSettings(Object.assign(Object.assign({}, o), {
                                host: e + ":" + n,
                                ssl: !1
                            })), r.mockUserToken) {
                            if ("string" == typeof r.mockUserToken) s = r.mockUserToken, i = Ph.MOCK_USER;
                            else {
                                var s = function (t, e) {
                                        if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                                        var n = e || "demo-project",
                                            r = t.iat || 0;
                                        if (!(e = t.sub || t.user_id)) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                                        return t = a({
                                            iss: "https://securetoken.google.com/" + n,
                                            aud: n,
                                            iat: r,
                                            exp: r + 3600,
                                            auth_time: r,
                                            sub: e,
                                            user_id: e,
                                            firebase: {
                                                sign_in_provider: "custom",
                                                identities: {}
                                            }
                                        }, t), [u(JSON.stringify({
                                            alg: "none",
                                            type: "JWT"
                                        })), u(JSON.stringify(t)), ""].join(".")
                                    }(r.mockUserToken, null === (n = t._app) || void 0 === n ? void 0 : n.options.projectId),
                                    r = r.mockUserToken.sub || r.mockUserToken.user_id;
                                if (!r) throw new Ur(Vr.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                                i = new Ph(r)
                            }
                            t._credentials = new qd(new Pd(s, i))
                        }
                    })(this._delegate, t, e, n = void 0 === n ? {} : n)
                }, Pg.prototype.enableNetwork = function () {
                    return function (i) {
                        var t = this;
                        return i.asyncQueue.enqueue(function () {
                            return y(t, void 0, void 0, function () {
                                var n, r;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Nd(i)];
                                        case 1:
                                            return n = t.sent(), [4, kd(i)];
                                        case 2:
                                            return r = t.sent(), [2, (n.setNetworkEnabled(!0), (e = r).Or.delete(0), Ul(e))]
                                    }
                                    var e
                                })
                            })
                        })
                    }(Dp(np(this._delegate, _p)))
                }, Pg.prototype.disableNetwork = function () {
                    return function (r) {
                        var t = this;
                        return r.asyncQueue.enqueue(function () {
                            return y(t, void 0, void 0, function () {
                                var e, n;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Nd(r)];
                                        case 1:
                                            return e = t.sent(), [4, kd(r)];
                                        case 2:
                                            return n = t.sent(), [2, (e.setNetworkEnabled(!1), function (n) {
                                                return y(this, void 0, void 0, function () {
                                                    var e;
                                                    return g(this, function (t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return (e = n).Or.add(0), [4, ql(e)];
                                                            case 1:
                                                                return t.sent(), e.Br.set("Offline"), [2]
                                                        }
                                                    })
                                                })
                                            }(n))]
                                    }
                                })
                            })
                        })
                    }(Dp(np(this._delegate, _p)))
                }, Pg.prototype.enablePersistence = function (t) {
                    var e = !1,
                        n = !1;
                    return t && Jd("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.Zc.enableMultiTabIndexedDbPersistence(this) : this.Zc.enableIndexedDbPersistence(this, n)
                }, Pg.prototype.clearPersistence = function () {
                    return this.Zc.clearIndexedDbPersistence(this)
                }, Pg.prototype.terminate = function () {
                    return this.tu && (this.tu._removeServiceInstance("firestore"), this.tu._removeServiceInstance("firestore-exp")), this._delegate._delete()
                }, Pg.prototype.waitForPendingWrites = function () {
                    return function (n) {
                        var t = this,
                            r = new lu;
                        return n.asyncQueue.enqueueAndForget(function () {
                            return y(t, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = Bf, [4, Rd(n)];
                                        case 1:
                                            return [2, e.apply(void 0, [t.sent(), r])]
                                    }
                                })
                            })
                        }), r.promise
                    }(Dp(np(this._delegate, _p)))
                }, Pg.prototype.onSnapshotsInSync = function (t) {
                    return e = this._delegate, t = t,
                        function (n, t) {
                            var e = this,
                                r = new pd(t);
                            return n.asyncQueue.enqueueAndForget(function () {
                                    return y(e, void 0, void 0, function () {
                                        var e;
                                        return g(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e = function (t, e) {
                                                        t.Gr.add(e), e.next()
                                                    }, [4, xd(n)];
                                                case 1:
                                                    return [2, e.apply(void 0, [t.sent(), r])]
                                            }
                                        })
                                    })
                                }),
                                function () {
                                    r.Wo(), n.asyncQueue.enqueueAndForget(function () {
                                        return y(e, void 0, void 0, function () {
                                            var e;
                                            return g(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return e = function (t, e) {
                                                            t.Gr.delete(e)
                                                        }, [4, xd(n)];
                                                    case 1:
                                                        return [2, e.apply(void 0, [t.sent(), r])]
                                                }
                                            })
                                        })
                                    })
                                }
                        }(Dp(np(e, _p)), Ep(t) ? t : {
                            next: t
                        });
                    var e
                }, Object.defineProperty(Pg.prototype, "app", {
                    get: function () {
                        if (!this.tu) throw new Ur(Vr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                        return this.tu
                    },
                    enumerable: !1,
                    configurable: !0
                }), Pg.prototype.collection = function (t) {
                    try {
                        return new nm(this, yp(this._delegate, t))
                    } catch (t) {
                        throw Hg(t, "collection()", "Firestore.collection()")
                    }
                }, Pg.prototype.doc = function (t) {
                    try {
                        return new Gg(this, gp(this._delegate, t))
                    } catch (t) {
                        throw Hg(t, "doc()", "Firestore.doc()")
                    }
                }, Pg.prototype.collectionGroup = function (t) {
                    try {
                        return new Zg(this, function (t, e) {
                            if (t = np(t, sp), Xd("collectionGroup", "collection id", e), 0 <= e.indexOf("/")) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                            return new up(t, null, (e = e, new Co(ci.emptyPath(), e)))
                        }(this._delegate, t))
                    } catch (t) {
                        throw Hg(t, "collectionGroup()", "Firestore.collectionGroup()")
                    }
                }, Pg.prototype.runTransaction = function (e) {
                    var n, r = this;
                    return function (n, r) {
                        var t = this,
                            i = new lu;
                        return n.asyncQueue.enqueueAndForget(function () {
                            return y(t, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Dd(n).then(function (t) {
                                                return t.datastore
                                            })];
                                        case 1:
                                            return e = t.sent(), new md(n.asyncQueue, e, r, i).run(), [2]
                                    }
                                })
                            })
                        }), i.promise
                    }(Dp(n = this._delegate), function (t) {
                        return t = new _g(n, t), e(new Vg(r, t))
                    })
                }, Pg.prototype.batch = function () {
                    var e = this;
                    return Dp(this._delegate), new Ug(new fg(this._delegate, function (t) {
                        return Eg(e._delegate, t)
                    }))
                }, Pg.prototype.loadBundle = function (t) {
                    throw new Ur(Vr.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')
                }, Pg.prototype.namedQuery = function (t) {
                    throw new Ur(Vr.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?')
                }, Pg),
                Og = (n(Lg, Cg = A), Lg.prototype.convertBytes = function (t) {
                    return new kg(new xp(t))
                }, Lg.prototype.convertReference = function (t) {
                    t = this.convertDocumentKey(t, this.firestore._databaseId);
                    return Gg.eu(t, this.firestore, null)
                }, Lg);

            function Lg(t) {
                var e = this;
                return (e = Cg.call(this) || this).firestore = t, e
            }

            function Pg(t, e, n) {
                var r = this;
                this._delegate = e, this.Zc = n, this.INTERNAL = {
                    delete: function () {
                        return r.terminate()
                    }
                }, t instanceof Fd || (this.tu = t)
            }

            function Mg() {}

            function Fg(t) {
                this._delegate = t
            }
            var Vg = (Kg.prototype.get = function (t) {
                    var e = this,
                        n = cm(t);
                    return this._delegate.get(n).then(function (t) {
                        return new $g(e._firestore, new Oy(e._firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, n.converter))
                    })
                }, Kg.prototype.set = function (t, e, n) {
                    t = cm(t);
                    return n ? ($d("Transaction.set", n), this._delegate.set(t, e, n)) : this._delegate.set(t, e), this
                }, Kg.prototype.update = function (t, e, n) {
                    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                    var o = cm(t);
                    return 2 === arguments.length ? this._delegate.update(o, e) : (t = this._delegate).update.apply(t, s([o, e, n], r)), this
                }, Kg.prototype.delete = function (t) {
                    t = cm(t);
                    return this._delegate.delete(t), this
                }, Kg),
                Ug = (jg.prototype.set = function (t, e, n) {
                    t = cm(t);
                    return n ? ($d("WriteBatch.set", n), this._delegate.set(t, e, n)) : this._delegate.set(t, e), this
                }, jg.prototype.update = function (t, e, n) {
                    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                    var o = cm(t);
                    return 2 === arguments.length ? this._delegate.update(o, e) : (t = this._delegate).update.apply(t, s([o, e, n], r)), this
                }, jg.prototype.delete = function (t) {
                    t = cm(t);
                    return this._delegate.delete(t), this
                }, jg.prototype.commit = function () {
                    return this._delegate.commit()
                }, jg),
                qg = (Bg.prototype.fromFirestore = function (t, e) {
                    t = new Ly(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, null);
                    return this._delegate.fromFirestore(new Jg(this._firestore, t), null != e ? e : {})
                }, Bg.prototype.toFirestore = function (t, e) {
                    return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t)
                }, Bg.nu = function (t, e) {
                    var n = Bg.su,
                        r = n.get(t);
                    r || (r = new WeakMap, n.set(t, r));
                    n = r.get(e);
                    return n || (n = new Bg(t, new Og(t), e), r.set(e, n)), n
                }, Bg);

            function Bg(t, e, n) {
                this._firestore = t, this._userDataWriter = e, this._delegate = n
            }

            function jg(t) {
                this._delegate = t
            }

            function Kg(t, e) {
                this._firestore = t, this._delegate = e, this._userDataWriter = new Og(t)
            }
            qg.su = new WeakMap;
            var Gg = (Qg.iu = function (t, e, n) {
                if (t.length % 2 != 0) throw new Ur(Vr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length);
                return new Qg(e, new ap(e._delegate, n, new Ni(t)))
            }, Qg.eu = function (t, e, n) {
                return new Qg(e, new ap(e._delegate, n, t))
            }, Object.defineProperty(Qg.prototype, "id", {
                get: function () {
                    return this._delegate.id
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Qg.prototype, "parent", {
                get: function () {
                    return new nm(this.firestore, this._delegate.parent)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Qg.prototype, "path", {
                get: function () {
                    return this._delegate.path
                },
                enumerable: !1,
                configurable: !0
            }), Qg.prototype.collection = function (t) {
                try {
                    return new nm(this.firestore, yp(this._delegate, t))
                } catch (t) {
                    throw Hg(t, "collection()", "DocumentReference.collection()")
                }
            }, Qg.prototype.isEqual = function (t) {
                return (t = E(t)) instanceof ap && mp(this._delegate, t)
            }, Qg.prototype.set = function (t, e) {
                e = $d("DocumentReference.set", e);
                try {
                    return function (t, e, n) {
                        t = np(t, ap);
                        var r = np(t.firestore, _p),
                            e = cg(t.converter, e, n);
                        return Eg(r, [Yp(Wp(r), "setDoc", t._key, e, null !== t.converter, n).toMutation(t._key, ds.none())])
                    }(this._delegate, t, e)
                } catch (t) {
                    throw Hg(t, "setDoc()", "DocumentReference.set()")
                }
            }, Qg.prototype.update = function (t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                try {
                    return 1 === arguments.length ? wg(this._delegate, t) : wg.apply(void 0, s([this._delegate, t, e], n))
                } catch (t) {
                    throw Hg(t, "updateDoc()", "DocumentReference.update()")
                }
            }, Qg.prototype.delete = function () {
                return Eg(np((t = this._delegate).firestore, _p), [new xs(t._key, ds.none())]);
                var t
            }, Qg.prototype.onSnapshot = function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = zg(t),
                    i = Wg(t, function (t) {
                        return new $g(e.firestore, new Oy(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate.converter))
                    });
                return bg(this._delegate, r, i)
            }, Qg.prototype.get = function (t) {
                var e = this;
                return ("cache" === (null == t ? void 0 : t.source) ? function (e) {
                    e = np(e, ap);
                    var n = np(e.firestore, _p),
                        t = Dp(n),
                        r = new mg(n);
                    return function (n, r) {
                        var t = this,
                            i = new lu;
                        return n.asyncQueue.enqueueAndForget(function () {
                            return y(t, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = function (o, s, a) {
                                                return y(this, void 0, void 0, function () {
                                                    var r, i;
                                                    return g(this, function (t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return t.trys.push([0, 2, , 3]), [4, (e = s, (n = o).persistence.runTransaction("read document", "readonly", function (t) {
                                                                    return n.Mn.mn(t, e)
                                                                }))];
                                                            case 1:
                                                                return (i = t.sent()).isFoundDocument() ? a.resolve(i) : i.isNoDocument() ? a.resolve(null) : a.reject(new Ur(Vr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                                                            case 2:
                                                                return r = t.sent(), i = af(r, "Failed to get document '" + s + " from cache"), a.reject(i), [3, 3];
                                                            case 3:
                                                                return [2]
                                                        }
                                                        var e, n
                                                    })
                                                })
                                            }, [4, Cd(n)];
                                        case 1:
                                            return [2, e.apply(void 0, [t.sent(), r, i])]
                                    }
                                })
                            })
                        }), i.promise
                    }(t, e._key).then(function (t) {
                        return new Oy(n, r, e._key, t, new xy(null !== t && t.hasLocalMutations, !0), e.converter)
                    })
                } : "server" === (null == t ? void 0 : t.source) ? function (e) {
                    e = np(e, ap);
                    var n = np(e.firestore, _p);
                    return Od(Dp(n), e._key, {
                        source: "server"
                    }).then(function (t) {
                        return Tg(n, e, t)
                    })
                } : function (e) {
                    e = np(e, ap);
                    var n = np(e.firestore, _p);
                    return Od(Dp(n), e._key).then(function (t) {
                        return Tg(n, e, t)
                    })
                })(this._delegate).then(function (t) {
                    return new $g(e.firestore, new Oy(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate.converter))
                })
            }, Qg.prototype.withConverter = function (t) {
                return new Qg(this.firestore, t ? this._delegate.withConverter(qg.nu(this.firestore, t)) : this._delegate.withConverter(null))
            }, Qg);

            function Qg(t, e) {
                this.firestore = t, this._delegate = e, this._userDataWriter = new Og(t)
            }

            function Hg(t, e, n) {
                return t.message = t.message.replace(e, n), t
            }

            function zg(t) {
                for (var e = 0, n = t; e < n.length; e++) {
                    var r = n[e];
                    if ("object" == typeof r && !Ep(r)) return r
                }
                return {}
            }

            function Wg(t, e) {
                var n;
                return {
                    next: function (t) {
                        n.next && n.next(e(t))
                    },
                    error: null === (t = (n = Ep(t[0]) ? t[0] : Ep(t[1]) ? t[1] : "function" == typeof t[0] ? {
                        next: t[0],
                        error: t[1],
                        complete: t[2]
                    } : {
                        next: t[1],
                        error: t[2],
                        complete: t[3]
                    }).error) || void 0 === t ? void 0 : t.bind(n),
                    complete: null === (t = n.complete) || void 0 === t ? void 0 : t.bind(n)
                }
            }
            var Yg, Xg, $g = (Object.defineProperty(um.prototype, "ref", {
                    get: function () {
                        return new Gg(this._firestore, this._delegate.ref)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(um.prototype, "id", {
                    get: function () {
                        return this._delegate.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(um.prototype, "metadata", {
                    get: function () {
                        return this._delegate.metadata
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(um.prototype, "exists", {
                    get: function () {
                        return this._delegate.exists()
                    },
                    enumerable: !1,
                    configurable: !0
                }), um.prototype.data = function (t) {
                    return this._delegate.data(t)
                }, um.prototype.get = function (t, e) {
                    return this._delegate.get(t, e)
                }, um.prototype.isEqual = function (t) {
                    return qy(this._delegate, t._delegate)
                }, um),
                Jg = (n(am, Xg = $g), am.prototype.data = function (t) {
                    return this._delegate.data(t)
                }, am),
                Zg = (sm.prototype.where = function (t, e, n) {
                    try {
                        return new sm(this.firestore, jy(this._delegate, (r = n, i = e, o = Cy("where", t), new Wy(o, i, r))))
                    } catch (t) {
                        throw Hg(t, /(orderBy|where)\(\)/, "Query.$1()")
                    }
                    var r, i, o
                }, sm.prototype.orderBy = function (t, e) {
                    try {
                        return new sm(this.firestore, jy(this._delegate, (n = void 0 === e ? "asc" : e, r = Cy("orderBy", t), new Yy(r, n))))
                    } catch (t) {
                        throw Hg(t, /(orderBy|where)\(\)/, "Query.$1()")
                    }
                    var n, r
                }, sm.prototype.limit = function (t) {
                    try {
                        return new sm(this.firestore, jy(this._delegate, (rp("limit", e = t), new Xy("limit", e, "F"))))
                    } catch (t) {
                        throw Hg(t, "limit()", "Query.limit()")
                    }
                    var e
                }, sm.prototype.limitToLast = function (t) {
                    try {
                        return new sm(this.firestore, jy(this._delegate, (rp("limitToLast", e = t), new Xy("limitToLast", e, "L"))))
                    } catch (t) {
                        throw Hg(t, "limitToLast()", "Query.limitToLast()")
                    }
                    var e
                }, sm.prototype.startAt = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    try {
                        return new sm(this.firestore, jy(this._delegate, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return new $y("startAt", t, !0)
                        }.apply(void 0, t)))
                    } catch (t) {
                        throw Hg(t, "startAt()", "Query.startAt()")
                    }
                }, sm.prototype.startAfter = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    try {
                        return new sm(this.firestore, jy(this._delegate, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return new $y("startAfter", t, !1)
                        }.apply(void 0, t)))
                    } catch (t) {
                        throw Hg(t, "startAfter()", "Query.startAfter()")
                    }
                }, sm.prototype.endBefore = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    try {
                        return new sm(this.firestore, jy(this._delegate, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return new Jy("endBefore", t, !0)
                        }.apply(void 0, t)))
                    } catch (t) {
                        throw Hg(t, "endBefore()", "Query.endBefore()")
                    }
                }, sm.prototype.endAt = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    try {
                        return new sm(this.firestore, jy(this._delegate, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return new Jy("endAt", t, !1)
                        }.apply(void 0, t)))
                    } catch (t) {
                        throw Hg(t, "endAt()", "Query.endAt()")
                    }
                }, sm.prototype.isEqual = function (t) {
                    return vp(this._delegate, t._delegate)
                }, sm.prototype.get = function (t) {
                    var e = this;
                    return ("cache" === (null == t ? void 0 : t.source) ? function (e) {
                        e = np(e, up);
                        var n = np(e.firestore, _p),
                            t = Dp(n),
                            r = new mg(n);
                        return function (n, r) {
                            var t = this,
                                i = new lu;
                            return n.asyncQueue.enqueueAndForget(function () {
                                return y(t, void 0, void 0, function () {
                                    var e;
                                    return g(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return e = function (i, o, s) {
                                                    return y(this, void 0, void 0, function () {
                                                        var e, n, r;
                                                        return g(this, function (t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    return t.trys.push([0, 2, , 3]), [4, wh(i, o, !0)];
                                                                case 1:
                                                                    return r = t.sent(), e = new kf(o, r.Bn), n = e._o(r.documents), n = e.applyChanges(n, !1), s.resolve(n.snapshot), [3, 3];
                                                                case 2:
                                                                    return n = t.sent(), r = af(n, "Failed to execute query '" + o + " against cache"), s.reject(r), [3, 3];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    })
                                                }, [4, Cd(n)];
                                            case 1:
                                                return [2, e.apply(void 0, [t.sent(), r, i])]
                                        }
                                    })
                                })
                            }), i.promise
                        }(t, e._query).then(function (t) {
                            return new Py(n, r, e, t)
                        })
                    } : "server" === (null == t ? void 0 : t.source) ? function (e) {
                        e = np(e, up);
                        var n = np(e.firestore, _p),
                            t = Dp(n),
                            r = new mg(n);
                        return Ld(t, e._query, {
                            source: "server"
                        }).then(function (t) {
                            return new Py(n, r, e, t)
                        })
                    } : function (e) {
                        e = np(e, up);
                        var n = np(e.firestore, _p),
                            t = Dp(n),
                            r = new mg(n);
                        return By(e._query), Ld(t, e._query).then(function (t) {
                            return new Py(n, r, e, t)
                        })
                    })(this._delegate).then(function (t) {
                        return new em(e.firestore, new Py(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot))
                    })
                }, sm.prototype.onSnapshot = function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = zg(t),
                        i = Wg(t, function (t) {
                            return new em(e.firestore, new Py(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot))
                        });
                    return bg(this._delegate, r, i)
                }, sm.prototype.withConverter = function (t) {
                    return new sm(this.firestore, t ? this._delegate.withConverter(qg.nu(this.firestore, t)) : this._delegate.withConverter(null))
                }, sm),
                tm = (Object.defineProperty(om.prototype, "type", {
                    get: function () {
                        return this._delegate.type
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(om.prototype, "doc", {
                    get: function () {
                        return new Jg(this._firestore, this._delegate.doc)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(om.prototype, "oldIndex", {
                    get: function () {
                        return this._delegate.oldIndex
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(om.prototype, "newIndex", {
                    get: function () {
                        return this._delegate.newIndex
                    },
                    enumerable: !1,
                    configurable: !0
                }), om),
                em = (Object.defineProperty(im.prototype, "query", {
                    get: function () {
                        return new Zg(this._firestore, this._delegate.query)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(im.prototype, "metadata", {
                    get: function () {
                        return this._delegate.metadata
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(im.prototype, "size", {
                    get: function () {
                        return this._delegate.size
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(im.prototype, "empty", {
                    get: function () {
                        return this._delegate.empty
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(im.prototype, "docs", {
                    get: function () {
                        var e = this;
                        return this._delegate.docs.map(function (t) {
                            return new Jg(e._firestore, t)
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }), im.prototype.docChanges = function (t) {
                    var e = this;
                    return this._delegate.docChanges(t).map(function (t) {
                        return new tm(e._firestore, t)
                    })
                }, im.prototype.forEach = function (e, n) {
                    var r = this;
                    this._delegate.forEach(function (t) {
                        e.call(n, new Jg(r._firestore, t))
                    })
                }, im.prototype.isEqual = function (t) {
                    return qy(this._delegate, t._delegate)
                }, im),
                nm = (n(rm, Yg = Zg), Object.defineProperty(rm.prototype, "id", {
                    get: function () {
                        return this._delegate.id
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(rm.prototype, "path", {
                    get: function () {
                        return this._delegate.path
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(rm.prototype, "parent", {
                    get: function () {
                        var t = this._delegate.parent;
                        return t ? new Gg(this.firestore, t) : null
                    },
                    enumerable: !1,
                    configurable: !0
                }), rm.prototype.doc = function (t) {
                    try {
                        return new Gg(this.firestore, void 0 === t ? gp(this._delegate) : gp(this._delegate, t))
                    } catch (t) {
                        throw Hg(t, "doc()", "CollectionReference.doc()")
                    }
                }, rm.prototype.add = function (t) {
                    var e, n, r, i = this;
                    return e = this._delegate, n = t, t = np(e.firestore, _p), r = gp(e), n = cg(e.converter, n), Eg(t, [Yp(Wp(e.firestore), "addDoc", r._key, n, null !== e.converter, {}).toMutation(r._key, ds.exists(!1))]).then(function () {
                        return r
                    }).then(function (t) {
                        return new Gg(i.firestore, t)
                    })
                }, rm.prototype.isEqual = function (t) {
                    return mp(this._delegate, t._delegate)
                }, rm.prototype.withConverter = function (t) {
                    return new rm(this.firestore, t ? this._delegate.withConverter(qg.nu(this.firestore, t)) : this._delegate.withConverter(null))
                }, rm);

            function rm(t, e) {
                var n = this;
                return (n = Yg.call(this, t, e) || this).firestore = t, n._delegate = e, n
            }

            function im(t, e) {
                this._firestore = t, this._delegate = e
            }

            function om(t, e) {
                this._firestore = t, this._delegate = e
            }

            function sm(t, e) {
                this.firestore = t, this._delegate = e, this._userDataWriter = new Og(t)
            }

            function am() {
                return null !== Xg && Xg.apply(this, arguments) || this
            }

            function um(t, e) {
                this._firestore = t, this._delegate = e
            }

            function cm(t) {
                return np(t, ap)
            }
            lm.documentId = function () {
                return new lm(li.keyField().canonicalString())
            }, lm.prototype.isEqual = function (t) {
                return (t = E(t)) instanceof Rp && this._delegate._internalPath.isEqual(t._internalPath)
            }, R = lm, hm.serverTimestamp = function () {
                var t = new iy("serverTimestamp");
                return t._methodName = "FieldValue.serverTimestamp", new hm(t)
            }, hm.delete = function () {
                var t = new $p("deleteField");
                return t._methodName = "FieldValue.delete", new hm(t)
            }, hm.arrayUnion = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return new oy("arrayUnion", t)
                }.apply(void 0, t);
                return n._methodName = "FieldValue.arrayUnion", new hm(n)
            }, hm.arrayRemove = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return new sy("arrayRemove", t)
                }.apply(void 0, t);
                return n._methodName = "FieldValue.arrayRemove", new hm(n)
            }, hm.increment = function (t) {
                t = new ay("increment", t);
                return t._methodName = "FieldValue.increment", new hm(t)
            }, hm.prototype.isEqual = function (t) {
                return this._delegate.isEqual(t._delegate)
            }, A = hm;

            function hm(t) {
                this._delegate = t
            }

            function lm() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._delegate = new(Rp.bind.apply(Rp, s([void 0], t)))
            }

            function fm(t) {
                return e = this._delegate, s = t, n = Dp(e = np(e, _p)), t = new Ip,
                    function (n, t, r) {
                        var e, i = this,
                            o = (e = s, t = Il(t), e = function (t) {
                                if (t instanceof Uint8Array) return dd(t, void 0);
                                if (t instanceof ArrayBuffer) return dd(new Uint8Array(t), void 0);
                                if (t instanceof ReadableStream) return t.getReader();
                                throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")
                            }("string" == typeof e ? (new TextEncoder).encode(e) : e), new yd(e, t));
                        n.asyncQueue.enqueueAndForget(function () {
                            return y(i, void 0, void 0, function () {
                                var e;
                                return g(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = nd, [4, Rd(n)];
                                        case 1:
                                            return e.apply(void 0, [t.sent(), o, r]), [2]
                                    }
                                })
                            })
                        })
                    }(n, e._databaseId, t), t;
                var e, s, n
            }

            function dm(t) {
                var e = this,
                    n = this._delegate,
                    t = t;
                return function (n, r) {
                    var t = this;
                    return n.asyncQueue.enqueue(function () {
                        return y(t, void 0, void 0, function () {
                            var e;
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return e = function (t, e) {
                                            var n = t;
                                            return n.persistence.runTransaction("Get named query", "readonly", function (t) {
                                                return n.Ke.getNamedQuery(t, e)
                                            })
                                        }, [4, Cd(n)];
                                    case 1:
                                        return [2, e.apply(void 0, [t.sent(), r])]
                                }
                            })
                        })
                    })
                }(Dp(n = np(n, _p)), t).then(function (t) {
                    return t ? new up(n, null, t.query) : null
                }).then(function (t) {
                    return t ? new Zg(e, t) : null
                })
            }
            var pm = (ym.prototype.setInstantiationMode = function (t) {
                return this.instantiationMode = t, this
            }, ym.prototype.setMultipleInstances = function (t) {
                return this.multipleInstances = t, this
            }, ym.prototype.setServiceProps = function (t) {
                return this.serviceProps = t, this
            }, ym.prototype.setInstanceCreatedCallback = function (t) {
                return this.onInstanceCreated = t, this
            }, ym);

            function ym(t, e, n) {
                this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
            }
            var gm, mm, vm = {
                Firestore: xg,
                GeoPoint: Lp,
                Timestamp: ti,
                Blob: kg,
                Transaction: Vg,
                WriteBatch: Ug,
                DocumentReference: Gg,
                DocumentSnapshot: $g,
                Query: Zg,
                QueryDocumentSnapshot: Jg,
                QuerySnapshot: em,
                CollectionReference: nm,
                FieldPath: R,
                FieldValue: A,
                setLogLevel: function (t) {
                    qr.setLogLevel(t)
                },
                CACHE_SIZE_UNLIMITED: -1
            };
            (gm = e.default).INTERNAL.registerComponent(new pm("firestore", function (t) {
                var e = t.getProvider("app").getImmediate();
                return e = e, t = t.getProvider("auth-internal"), new xg(e, new _p(e, t), new Rg)
            }, "PUBLIC").setServiceProps(Object.assign({}, vm))), gm.registerVersion("@firebase/firestore", "2.4.0"), (mm = xg).prototype.loadBundle = fm, mm.prototype.namedQuery = dm
        }.apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-firestore.js.map