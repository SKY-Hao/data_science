!
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.G6 = e() : t.G6 = e()
    } (window,
        function() {
            return function(t) {
                var e = {};
                function n(r) {
                    if (e[r]) return e[r].exports;
                    var i = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, n),
                        i.l = !0,
                        i.exports
                }
                return n.m = t,
                    n.c = e,
                    n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    },
                    n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                    },
                    n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i,
                            function(e) {
                                return t[e]
                            }.bind(null, i));
                        return r
                    },
                    n.n = function(t) {
                        var e = t && t.__esModule ?
                            function() {
                                return t.
                                    default
                            }:
                            function() {
                                return t
                            };
                        return n.d(e, "a", e),
                            e
                    },
                    n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    },
                    n.p = "",
                    n(n.s = 594)
            } ([,
                function(t, e, n) {
                    "use strict";
                    var r = function(t, e, n) {
                        t.prototype = e.prototype = n,
                            n.constructor = t
                    };
                    function i(t, e) {
                        var n = Object.create(t.prototype);
                        for (var r in e) n[r] = e[r];
                        return n
                    }
                    function a() {}
                    var o = "\\s*([+-]?\\d+)\\s*",
                        s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                        u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                        c = /^#([0-9a-f]{3})$/,
                        h = /^#([0-9a-f]{6})$/,
                        f = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
                        l = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
                        p = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
                        d = new RegExp("^rgba\\(" + [u, u, u, s] + "\\)$"),
                        g = new RegExp("^hsl\\(" + [s, u, u] + "\\)$"),
                        v = new RegExp("^hsla\\(" + [s, u, u, s] + "\\)$"),
                        m = {
                            aliceblue: 15792383,
                            antiquewhite: 16444375,
                            aqua: 65535,
                            aquamarine: 8388564,
                            azure: 15794175,
                            beige: 16119260,
                            bisque: 16770244,
                            black: 0,
                            blanchedalmond: 16772045,
                            blue: 255,
                            blueviolet: 9055202,
                            brown: 10824234,
                            burlywood: 14596231,
                            cadetblue: 6266528,
                            chartreuse: 8388352,
                            chocolate: 13789470,
                            coral: 16744272,
                            cornflowerblue: 6591981,
                            cornsilk: 16775388,
                            crimson: 14423100,
                            cyan: 65535,
                            darkblue: 139,
                            darkcyan: 35723,
                            darkgoldenrod: 12092939,
                            darkgray: 11119017,
                            darkgreen: 25600,
                            darkgrey: 11119017,
                            darkkhaki: 12433259,
                            darkmagenta: 9109643,
                            darkolivegreen: 5597999,
                            darkorange: 16747520,
                            darkorchid: 10040012,
                            darkred: 9109504,
                            darksalmon: 15308410,
                            darkseagreen: 9419919,
                            darkslateblue: 4734347,
                            darkslategray: 3100495,
                            darkslategrey: 3100495,
                            darkturquoise: 52945,
                            darkviolet: 9699539,
                            deeppink: 16716947,
                            deepskyblue: 49151,
                            dimgray: 6908265,
                            dimgrey: 6908265,
                            dodgerblue: 2003199,
                            firebrick: 11674146,
                            floralwhite: 16775920,
                            forestgreen: 2263842,
                            fuchsia: 16711935,
                            gainsboro: 14474460,
                            ghostwhite: 16316671,
                            gold: 16766720,
                            goldenrod: 14329120,
                            gray: 8421504,
                            green: 32768,
                            greenyellow: 11403055,
                            grey: 8421504,
                            honeydew: 15794160,
                            hotpink: 16738740,
                            indianred: 13458524,
                            indigo: 4915330,
                            ivory: 16777200,
                            khaki: 15787660,
                            lavender: 15132410,
                            lavenderblush: 16773365,
                            lawngreen: 8190976,
                            lemonchiffon: 16775885,
                            lightblue: 11393254,
                            lightcoral: 15761536,
                            lightcyan: 14745599,
                            lightgoldenrodyellow: 16448210,
                            lightgray: 13882323,
                            lightgreen: 9498256,
                            lightgrey: 13882323,
                            lightpink: 16758465,
                            lightsalmon: 16752762,
                            lightseagreen: 2142890,
                            lightskyblue: 8900346,
                            lightslategray: 7833753,
                            lightslategrey: 7833753,
                            lightsteelblue: 11584734,
                            lightyellow: 16777184,
                            lime: 65280,
                            limegreen: 3329330,
                            linen: 16445670,
                            magenta: 16711935,
                            maroon: 8388608,
                            mediumaquamarine: 6737322,
                            mediumblue: 205,
                            mediumorchid: 12211667,
                            mediumpurple: 9662683,
                            mediumseagreen: 3978097,
                            mediumslateblue: 8087790,
                            mediumspringgreen: 64154,
                            mediumturquoise: 4772300,
                            mediumvioletred: 13047173,
                            midnightblue: 1644912,
                            mintcream: 16121850,
                            mistyrose: 16770273,
                            moccasin: 16770229,
                            navajowhite: 16768685,
                            navy: 128,
                            oldlace: 16643558,
                            olive: 8421376,
                            olivedrab: 7048739,
                            orange: 16753920,
                            orangered: 16729344,
                            orchid: 14315734,
                            palegoldenrod: 15657130,
                            palegreen: 10025880,
                            paleturquoise: 11529966,
                            palevioletred: 14381203,
                            papayawhip: 16773077,
                            peachpuff: 16767673,
                            peru: 13468991,
                            pink: 16761035,
                            plum: 14524637,
                            powderblue: 11591910,
                            purple: 8388736,
                            rebeccapurple: 6697881,
                            red: 16711680,
                            rosybrown: 12357519,
                            royalblue: 4286945,
                            saddlebrown: 9127187,
                            salmon: 16416882,
                            sandybrown: 16032864,
                            seagreen: 3050327,
                            seashell: 16774638,
                            sienna: 10506797,
                            silver: 12632256,
                            skyblue: 8900331,
                            slateblue: 6970061,
                            slategray: 7372944,
                            slategrey: 7372944,
                            snow: 16775930,
                            springgreen: 65407,
                            steelblue: 4620980,
                            tan: 13808780,
                            teal: 32896,
                            thistle: 14204888,
                            tomato: 16737095,
                            turquoise: 4251856,
                            violet: 15631086,
                            wheat: 16113331,
                            white: 16777215,
                            whitesmoke: 16119285,
                            yellow: 16776960,
                            yellowgreen: 10145074
                        };
                    function x(t) {
                        var e;
                        return t = (t + "").trim().toLowerCase(),
                            (e = c.exec(t)) ? new _((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = h.exec(t)) ? y(parseInt(e[1], 16)) : (e = f.exec(t)) ? new _(e[1], e[2], e[3], 1) : (e = l.exec(t)) ? new _(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = p.exec(t)) ? b(e[1], e[2], e[3], e[4]) : (e = d.exec(t)) ? b(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = g.exec(t)) ? A(e[1], e[2] / 100, e[3] / 100, 1) : (e = v.exec(t)) ? A(e[1], e[2] / 100, e[3] / 100, e[4]) : m.hasOwnProperty(t) ? y(m[t]) : "transparent" === t ? new _(NaN, NaN, NaN, 0) : null
                    }
                    function y(t) {
                        return new _(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
                    }
                    function b(t, e, n, r) {
                        return r <= 0 && (t = e = n = NaN),
                            new _(t, e, n, r)
                    }
                    function M(t) {
                        return t instanceof a || (t = x(t)),
                            t ? new _((t = t.rgb()).r, t.g, t.b, t.opacity) : new _
                    }
                    function w(t, e, n, r) {
                        return 1 === arguments.length ? M(t) : new _(t, e, n, null == r ? 1 : r)
                    }
                    function _(t, e, n, r) {
                        this.r = +t,
                            this.g = +e,
                            this.b = +n,
                            this.opacity = +r
                    }
                    function E(t) {
                        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0": "") + t.toString(16)
                    }
                    function A(t, e, n, r) {
                        return r <= 0 ? t = e = n = NaN: n <= 0 || n >= 1 ? t = e = NaN: e <= 0 && (t = NaN),
                            new P(t, e, n, r)
                    }
                    function S(t, e, n, r) {
                        return 1 === arguments.length ?
                            function(t) {
                                if (t instanceof P) return new P(t.h, t.s, t.l, t.opacity);
                                if (t instanceof a || (t = x(t)), !t) return new P;
                                if (t instanceof P) return t;
                                var e = (t = t.rgb()).r / 255,
                                    n = t.g / 255,
                                    r = t.b / 255,
                                    i = Math.min(e, n, r),
                                    o = Math.max(e, n, r),
                                    s = NaN,
                                    u = o - i,
                                    c = (o + i) / 2;
                                return u ? (s = e === o ? (n - r) / u + 6 * (n < r) : n === o ? (r - e) / u + 2 : (e - n) / u + 4, u /= c < .5 ? o + i: 2 - o - i, s *= 60) : u = c > 0 && c < 1 ? 0 : s,
                                    new P(s, u, c, t.opacity)
                            } (t) : new P(t, e, n, null == r ? 1 : r)
                    }
                    function P(t, e, n, r) {
                        this.h = +t,
                            this.s = +e,
                            this.l = +n,
                            this.opacity = +r
                    }
                    function O(t, e, n) {
                        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n: t < 240 ? e + (n - e) * (240 - t) / 60 : e)
                    }
                    r(a, x, {
                        displayable: function() {
                            return this.rgb().displayable()
                        },
                        hex: function() {
                            return this.rgb().hex()
                        },
                        toString: function() {
                            return this.rgb() + ""
                        }
                    }),
                        r(_, w, i(a, {
                            brighter: function(t) {
                                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                                    new _(this.r * t, this.g * t, this.b * t, this.opacity)
                            },
                            darker: function(t) {
                                return t = null == t ? .7 : Math.pow(.7, t),
                                    new _(this.r * t, this.g * t, this.b * t, this.opacity)
                            },
                            rgb: function() {
                                return this
                            },
                            displayable: function() {
                                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                            },
                            hex: function() {
                                return "#" + E(this.r) + E(this.g) + E(this.b)
                            },
                            toString: function() {
                                var t = this.opacity;
                                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(": "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")": ", " + t + ")")
                            }
                        })),
                        r(P, S, i(a, {
                            brighter: function(t) {
                                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                                    new P(this.h, this.s, this.l * t, this.opacity)
                            },
                            darker: function(t) {
                                return t = null == t ? .7 : Math.pow(.7, t),
                                    new P(this.h, this.s, this.l * t, this.opacity)
                            },
                            rgb: function() {
                                var t = this.h % 360 + 360 * (this.h < 0),
                                    e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                                    n = this.l,
                                    r = n + (n < .5 ? n: 1 - n) * e,
                                    i = 2 * n - r;
                                return new _(O(t >= 240 ? t - 240 : t + 120, i, r), O(t, i, r), O(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                            },
                            displayable: function() {
                                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                            }
                        }));
                    var C = Math.PI / 180,
                        I = 180 / Math.PI,
                        T = .96422,
                        k = 1,
                        N = .82521,
                        L = 4 / 29,
                        B = 6 / 29,
                        j = 3 * B * B,
                        D = B * B * B;
                    function R(t) {
                        if (t instanceof X) return new X(t.l, t.a, t.b, t.opacity);
                        if (t instanceof Z) {
                            if (isNaN(t.h)) return new X(t.l, 0, 0, t.opacity);
                            var e = t.h * C;
                            return new X(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
                        }
                        t instanceof _ || (t = M(t));
                        var n, r, i = H(t.r),
                            a = H(t.g),
                            o = H(t.b),
                            s = G((.2225045 * i + .7168786 * a + .0606169 * o) / k);
                        return i === a && a === o ? n = r = s: (n = G((.4360747 * i + .3850649 * a + .1430804 * o) / T), r = G((.0139322 * i + .0971045 * a + .7141733 * o) / N)),
                            new X(116 * s - 16, 500 * (n - s), 200 * (s - r), t.opacity)
                    }
                    function F(t, e) {
                        return new X(t, 0, 0, null == e ? 1 : e)
                    }
                    function Y(t, e, n, r) {
                        return 1 === arguments.length ? R(t) : new X(t, e, n, null == r ? 1 : r)
                    }
                    function X(t, e, n, r) {
                        this.l = +t,
                            this.a = +e,
                            this.b = +n,
                            this.opacity = +r
                    }
                    function G(t) {
                        return t > D ? Math.pow(t, 1 / 3) : t / j + L
                    }
                    function q(t) {
                        return t > B ? t * t * t: j * (t - L)
                    }
                    function U(t) {
                        return 255 * (t <= .0031308 ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055)
                    }
                    function H(t) {
                        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                    }
                    function V(t) {
                        if (t instanceof Z) return new Z(t.h, t.c, t.l, t.opacity);
                        if (t instanceof X || (t = R(t)), 0 === t.a && 0 === t.b) return new Z(NaN, 0, t.l, t.opacity);
                        var e = Math.atan2(t.b, t.a) * I;
                        return new Z(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
                    }
                    function z(t, e, n, r) {
                        return 1 === arguments.length ? V(t) : new Z(n, e, t, null == r ? 1 : r)
                    }
                    function W(t, e, n, r) {
                        return 1 === arguments.length ? V(t) : new Z(t, e, n, null == r ? 1 : r)
                    }
                    function Z(t, e, n, r) {
                        this.h = +t,
                            this.c = +e,
                            this.l = +n,
                            this.opacity = +r
                    }
                    r(X, Y, i(a, {
                        brighter: function(t) {
                            return new X(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                        },
                        darker: function(t) {
                            return new X(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                        },
                        rgb: function() {
                            var t = (this.l + 16) / 116,
                                e = isNaN(this.a) ? t: t + this.a / 500,
                                n = isNaN(this.b) ? t: t - this.b / 200;
                            return new _(U(3.1338561 * (e = T * q(e)) - 1.6168667 * (t = k * q(t)) - .4906146 * (n = N * q(n))), U( - .9787684 * e + 1.9161415 * t + .033454 * n), U(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
                        }
                    })),
                        r(Z, W, i(a, {
                            brighter: function(t) {
                                return new Z(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                            },
                            darker: function(t) {
                                return new Z(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                            },
                            rgb: function() {
                                return R(this).rgb()
                            }
                        }));
                    var Q = -.14861,
                        K = 1.78277,
                        $ = -.29227,
                        J = -.90649,
                        tt = 1.97294,
                        et = tt * J,
                        nt = tt * K,
                        rt = K * $ - J * Q;
                    function it(t, e, n, r) {
                        return 1 === arguments.length ?
                            function(t) {
                                if (t instanceof at) return new at(t.h, t.s, t.l, t.opacity);
                                t instanceof _ || (t = M(t));
                                var e = t.r / 255,
                                    n = t.g / 255,
                                    r = t.b / 255,
                                    i = (rt * r + et * e - nt * n) / (rt + et - nt),
                                    a = r - i,
                                    o = (tt * (n - i) - $ * a) / J,
                                    s = Math.sqrt(o * o + a * a) / (tt * i * (1 - i)),
                                    u = s ? Math.atan2(o, a) * I - 120 : NaN;
                                return new at(u < 0 ? u + 360 : u, s, i, t.opacity)
                            } (t) : new at(t, e, n, null == r ? 1 : r)
                    }
                    function at(t, e, n, r) {
                        this.h = +t,
                            this.s = +e,
                            this.l = +n,
                            this.opacity = +r
                    }
                    r(at, it, i(a, {
                        brighter: function(t) {
                            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                                new at(this.h, this.s, this.l * t, this.opacity)
                        },
                        darker: function(t) {
                            return t = null == t ? .7 : Math.pow(.7, t),
                                new at(this.h, this.s, this.l * t, this.opacity)
                        },
                        rgb: function() {
                            var t = isNaN(this.h) ? 0 : (this.h + 120) * C,
                                e = +this.l,
                                n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                                r = Math.cos(t),
                                i = Math.sin(t);
                            return new _(255 * (e + n * (Q * r + K * i)), 255 * (e + n * ($ * r + J * i)), 255 * (e + n * (tt * r)), this.opacity)
                        }
                    })),
                        n.d(e, "a",
                            function() {
                                return x
                            }),
                        n.d(e, "h",
                            function() {
                                return w
                            }),
                        n.d(e, "e",
                            function() {
                                return S
                            }),
                        n.d(e, "f",
                            function() {
                                return Y
                            }),
                        n.d(e, "d",
                            function() {
                                return W
                            }),
                        n.d(e, "g",
                            function() {
                                return z
                            }),
                        n.d(e, "c",
                            function() {
                                return F
                            }),
                        n.d(e, "b",
                            function() {
                                return it
                            })
                },
                , , , , , , , , , , , , ,
                function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var r, i, a = 0,
                        o = 0,
                        s = 0,
                        u = 1e3,
                        c = 0,
                        h = 0,
                        f = 0,
                        l = "object" == typeof performance && performance.now ? performance: Date,
                        p = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                            setTimeout(t, 17)
                        };
                    function d() {
                        return h || (p(g), h = l.now() + f)
                    }
                    function g() {
                        h = 0
                    }
                    function v() {
                        this._call = this._time = this._next = null
                    }
                    function m(t, e, n) {
                        var r = new v;
                        return r.restart(t, e, n),
                            r
                    }
                    function x() {
                        d(),
                            ++a;
                        for (var t, e = r; e;)(t = h - e._time) >= 0 && e._call.call(null, t),
                            e = e._next; --a
                    }
                    function y() {
                        h = (c = l.now()) + f,
                            a = o = 0;
                        try {
                            x()
                        } finally {
                            a = 0,
                                function() {
                                    var t, e, n = r,
                                        a = 1 / 0;
                                    for (; n;) n._call ? (a > n._time && (a = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e: r = e);
                                    i = t,
                                        M(a)
                                } (),
                                h = 0
                        }
                    }
                    function b() {
                        var t = l.now(),
                            e = t - c;
                        e > u && (f -= e, c = t)
                    }
                    function M(t) {
                        a || (o && (o = clearTimeout(o)), t - h > 24 ? (t < 1 / 0 && (o = setTimeout(y, t - l.now() - f)), s && (s = clearInterval(s))) : (s || (c = l.now(), s = setInterval(b, u)), a = 1, p(y)))
                    }
                    v.prototype = m.prototype = {
                        constructor: v,
                        restart: function(t, e, n) {
                            if ("function" != typeof t) throw new TypeError("callback is not a function");
                            n = (null == n ? d() : +n) + (null == e ? 0 : +e),
                            this._next || i === this || (i ? i._next = this: r = this, i = this),
                                this._call = t,
                                this._time = n,
                                M()
                        },
                        stop: function() {
                            this._call && (this._call = null, this._time = 1 / 0, M())
                        }
                    };
                    var w = function(t, e, n) {
                            var r = new v;
                            return e = null == e ? 0 : +e,
                                r.restart(function(n) {
                                        r.stop(),
                                            t(n + e)
                                    },
                                    e, n),
                                r
                        },
                        _ = function(t, e, n) {
                            var r = new v,
                                i = e;
                            return null == e ? (r.restart(t, e, n), r) : (e = +e, n = null == n ? d() : +n, r.restart(function a(o) {
                                    o += i,
                                        r.restart(a, i += e, n),
                                        t(o)
                                },
                                e, n), r)
                        };
                    n.d(e, "now",
                        function() {
                            return d
                        }),
                        n.d(e, "timer",
                            function() {
                                return m
                            }),
                        n.d(e, "timerFlush",
                            function() {
                                return x
                            }),
                        n.d(e, "timeout",
                            function() {
                                return w
                            }),
                        n.d(e, "interval",
                            function() {
                                return _
                            })
                },
                ,
                function(t, e, n) {
                    var r = n(408),
                        i = {};
                    r.merge(i, r, {
                        mixin: function(t, e) {
                            var n = t.CFG ? "CFG": "ATTRS";
                            if (t && e) {
                                t._mixins = e,
                                    t[n] = t[n] || {};
                                var r = {};
                                i.each(e,
                                    function(e) {
                                        i.augment(t, e);
                                        var a = e[n];
                                        a && i.merge(r, a)
                                    }),
                                    t[n] = i.merge(r, t[n])
                            }
                        }
                    }),
                        t.exports = i
                },
                , , , ,
                function(t, e, n) {
                    var r = {},
                        i = n(448),
                        a = n(514),
                        o = n(152),
                        s = n(493),
                        u = n(492),
                        c = n(491);
                    o.mix(r, o, u, c, s, a, i),
                        t.exports = r
                },
                , , , , ,
                function(t, e, n) {
                    "use strict";
                    function r(t) {
                        return + t
                    }
                    function i(t) {
                        return t * t
                    }
                    function a(t) {
                        return t * (2 - t)
                    }
                    function o(t) {
                        return ((t *= 2) <= 1 ? t * t: --t * (2 - t) + 1) / 2
                    }
                    function s(t) {
                        return t * t * t
                    }
                    function u(t) {
                        return--t * t * t + 1
                    }
                    function c(t) {
                        return ((t *= 2) <= 1 ? t * t * t: (t -= 2) * t * t + 2) / 2
                    }
                    n.r(e);
                    var h = function t(e) {
                            function n(t) {
                                return Math.pow(t, e)
                            }
                            return e = +e,
                                n.exponent = t,
                                n
                        } (3),
                        f = function t(e) {
                            function n(t) {
                                return 1 - Math.pow(1 - t, e)
                            }
                            return e = +e,
                                n.exponent = t,
                                n
                        } (3),
                        l = function t(e) {
                            function n(t) {
                                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
                            }
                            return e = +e,
                                n.exponent = t,
                                n
                        } (3),
                        p = Math.PI,
                        d = p / 2;
                    function g(t) {
                        return 1 - Math.cos(t * d)
                    }
                    function v(t) {
                        return Math.sin(t * d)
                    }
                    function m(t) {
                        return (1 - Math.cos(p * t)) / 2
                    }
                    function x(t) {
                        return Math.pow(2, 10 * t - 10)
                    }
                    function y(t) {
                        return 1 - Math.pow(2, -10 * t)
                    }
                    function b(t) {
                        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
                    }
                    function M(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }
                    function w(t) {
                        return Math.sqrt(1 - --t * t)
                    }
                    function _(t) {
                        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
                    }
                    var E = 4 / 11,
                        A = 6 / 11,
                        S = 8 / 11,
                        P = .75,
                        O = 9 / 11,
                        C = 10 / 11,
                        I = .9375,
                        T = 21 / 22,
                        k = 63 / 64,
                        N = 1 / E / E;
                    function L(t) {
                        return 1 - B(1 - t)
                    }
                    function B(t) {
                        return (t = +t) < E ? N * t * t: t < S ? N * (t -= A) * t + P: t < C ? N * (t -= O) * t + I: N * (t -= T) * t + k
                    }
                    function j(t) {
                        return ((t *= 2) <= 1 ? 1 - B(1 - t) : B(t - 1) + 1) / 2
                    }
                    var D = function t(e) {
                            function n(t) {
                                return t * t * ((e + 1) * t - e)
                            }
                            return e = +e,
                                n.overshoot = t,
                                n
                        } (1.70158),
                        R = function t(e) {
                            function n(t) {
                                return--t * t * ((e + 1) * t + e) + 1
                            }
                            return e = +e,
                                n.overshoot = t,
                                n
                        } (1.70158),
                        F = function t(e) {
                            function n(t) {
                                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
                            }
                            return e = +e,
                                n.overshoot = t,
                                n
                        } (1.70158),
                        Y = 2 * Math.PI,
                        X = function t(e, n) {
                            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
                            function i(t) {
                                return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n)
                            }
                            return i.amplitude = function(e) {
                                return t(e, n * Y)
                            },
                                i.period = function(n) {
                                    return t(e, n)
                                },
                                i
                        } (1, .3),
                        G = function t(e, n) {
                            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
                            function i(t) {
                                return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n)
                            }
                            return i.amplitude = function(e) {
                                return t(e, n * Y)
                            },
                                i.period = function(n) {
                                    return t(e, n)
                                },
                                i
                        } (1, .3),
                        q = function t(e, n) {
                            var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
                            function i(t) {
                                return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
                            }
                            return i.amplitude = function(e) {
                                return t(e, n * Y)
                            },
                                i.period = function(n) {
                                    return t(e, n)
                                },
                                i
                        } (1, .3);
                    n.d(e, "easeLinear",
                        function() {
                            return r
                        }),
                        n.d(e, "easeQuad",
                            function() {
                                return o
                            }),
                        n.d(e, "easeQuadIn",
                            function() {
                                return i
                            }),
                        n.d(e, "easeQuadOut",
                            function() {
                                return a
                            }),
                        n.d(e, "easeQuadInOut",
                            function() {
                                return o
                            }),
                        n.d(e, "easeCubic",
                            function() {
                                return c
                            }),
                        n.d(e, "easeCubicIn",
                            function() {
                                return s
                            }),
                        n.d(e, "easeCubicOut",
                            function() {
                                return u
                            }),
                        n.d(e, "easeCubicInOut",
                            function() {
                                return c
                            }),
                        n.d(e, "easePoly",
                            function() {
                                return l
                            }),
                        n.d(e, "easePolyIn",
                            function() {
                                return h
                            }),
                        n.d(e, "easePolyOut",
                            function() {
                                return f
                            }),
                        n.d(e, "easePolyInOut",
                            function() {
                                return l
                            }),
                        n.d(e, "easeSin",
                            function() {
                                return m
                            }),
                        n.d(e, "easeSinIn",
                            function() {
                                return g
                            }),
                        n.d(e, "easeSinOut",
                            function() {
                                return v
                            }),
                        n.d(e, "easeSinInOut",
                            function() {
                                return m
                            }),
                        n.d(e, "easeExp",
                            function() {
                                return b
                            }),
                        n.d(e, "easeExpIn",
                            function() {
                                return x
                            }),
                        n.d(e, "easeExpOut",
                            function() {
                                return y
                            }),
                        n.d(e, "easeExpInOut",
                            function() {
                                return b
                            }),
                        n.d(e, "easeCircle",
                            function() {
                                return _
                            }),
                        n.d(e, "easeCircleIn",
                            function() {
                                return M
                            }),
                        n.d(e, "easeCircleOut",
                            function() {
                                return w
                            }),
                        n.d(e, "easeCircleInOut",
                            function() {
                                return _
                            }),
                        n.d(e, "easeBounce",
                            function() {
                                return B
                            }),
                        n.d(e, "easeBounceIn",
                            function() {
                                return L
                            }),
                        n.d(e, "easeBounceOut",
                            function() {
                                return B
                            }),
                        n.d(e, "easeBounceInOut",
                            function() {
                                return j
                            }),
                        n.d(e, "easeBack",
                            function() {
                                return F
                            }),
                        n.d(e, "easeBackIn",
                            function() {
                                return D
                            }),
                        n.d(e, "easeBackOut",
                            function() {
                                return R
                            }),
                        n.d(e, "easeBackInOut",
                            function() {
                                return F
                            }),
                        n.d(e, "easeElastic",
                            function() {
                                return G
                            }),
                        n.d(e, "easeElasticIn",
                            function() {
                                return X
                            }),
                        n.d(e, "easeElasticOut",
                            function() {
                                return G
                            }),
                        n.d(e, "easeElasticInOut",
                            function() {
                                return q
                            })
                },
                function(t, e, n) {
                    var r = n(60),
                        i = Array.isArray ? Array.isArray: function(t) {
                            return r(t, "Array")
                        };
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(385),
                        i = n(29);
                    t.exports = function(t, e) {
                        if (t) if (i(t)) for (var n = 0,
                                                  a = t.length; n < a && !1 !== e(t[n], n); n++);
                        else if (r(t)) for (var o in t) if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
                    }
                },
                , , , , , ,
                function(t, e, n) {
                    var r = n(17),
                        i = n(508),
                        a = n(405),
                        o = n(376),
                        s = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    s.ATTRS = {},
                        r.extend(s, a);
                    var u = {
                        matrix: "matrix",
                        path: "path",
                        points: "points",
                        lineDash: "lineDash"
                    };
                    r.augment(s, i, {
                        isShape: !0,
                        drawInner: function(t) {
                            var e = this._attrs;
                            this.createPath(t);
                            var n = t.globalAlpha;
                            if (this.hasFill()) {
                                var i = e.fillOpacity;
                                r.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i, t.fill(), t.globalAlpha = n)
                            }
                            if (this.hasStroke() && this._attrs.lineWidth > 0) {
                                var a = e.strokeOpacity;
                                r.isNil(a) || 1 === a || (t.globalAlpha = a),
                                    t.stroke()
                            }
                            this.afterPath(t)
                        },
                        afterPath: function() {},
                        isHitBox: function() {
                            return ! 0
                        },
                        isHit: function(t, e) {
                            var n = [t, e, 1];
                            if (this.invert(n), this.isHitBox()) {
                                var r = this.getBBox();
                                if (r && !o.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1])) return ! 1
                            }
                            var i = this._attrs.clip;
                            return i ? (i.invert(n, this.get("canvas")), !!i.isPointInPath(n[0], n[1]) && this.isPointInPath(n[0], n[1])) : this.isPointInPath(n[0], n[1])
                        },
                        calculateBox: function() {
                            return null
                        },
                        getHitLineWidth: function() {
                            var t = this._attrs,
                                e = t.lineAppendWidth || 0;
                            return (t.lineWidth || 0) + e
                        },
                        clearTotalMatrix: function() {
                            this._cfg.totalMatrix = null,
                                this._cfg.region = null
                        },
                        clearBBox: function() {
                            this._cfg.box = null,
                                this._cfg.region = null
                        },
                        getBBox: function() {
                            var t = this._cfg.box;
                            return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._cfg.box = t),
                                t
                        },
                        clone: function() {
                            var t = null,
                                e = this._attrs,
                                n = {};
                            return r.each(e,
                                function(t, i) {
                                    u[i] && r.isArray(e[i]) ? n[i] = function(t) {
                                        for (var e = [], n = 0; n < t.length; n++) r.isArray(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
                                        return e
                                    } (e[i]) : n[i] = e[i]
                                }),
                                t = new this.constructor({
                                    attrs: n
                                }),
                                t._cfg.zIndex = this._cfg.zIndex,
                                t
                        }
                    }),
                        t.exports = s
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.setMatrixArrayType = function(t) {
                            e.ARRAY_TYPE = t
                        },
                        e.toRadian = function(t) {
                            return t * i
                        },
                        e.equals = function(t, e) {
                            return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
                        };
                    var r = e.EPSILON = 1e-6;
                    e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array: Array,
                        e.RANDOM = Math.random;
                    var i = Math.PI / 180
                },
                , , , , , , , ,
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Function")
                    }
                },
                , , , , , , , , , , , ,
                function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t, e) {
                        return n.call(t) === "[object " + e + "]"
                    }
                },
                function(t, e, n) {
                    var r;
                    /*!
                     * EventEmitter v5.1.0 - git.io/ee
                     * Unlicense - http://unlicense.org/
                     * Oliver Caldwell - http://oli.me.uk/
                     * @preserve
                     */
                    !
                        function(e) {
                            "use strict";
                            function i() {}
                            var a = i.prototype,
                                o = e.EventEmitter;
                            function s(t, e) {
                                for (var n = t.length; n--;) if (t[n].listener === e) return n;
                                return - 1
                            }
                            function u(t) {
                                return function() {
                                    return this[t].apply(this, arguments)
                                }
                            }
                            a.getListeners = function(t) {
                                var e, n, r = this._getEvents();
                                if (t instanceof RegExp) for (n in e = {},
                                    r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                                else e = r[t] || (r[t] = []);
                                return e
                            },
                                a.flattenListeners = function(t) {
                                    var e, n = [];
                                    for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                                    return n
                                },
                                a.getListenersAsObject = function(t) {
                                    var e, n = this.getListeners(t);
                                    return n instanceof Array && ((e = {})[t] = n),
                                    e || n
                                },
                                a.addListener = function(t, e) {
                                    if (!
                                            function t(e) {
                                                return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                                            } (e)) throw new TypeError("listener must be a function");
                                    var n, r = this.getListenersAsObject(t),
                                        i = "object" == typeof e;
                                    for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(i ? e: {
                                        listener: e,
                                        once: !1
                                    });
                                    return this
                                },
                                a.on = u("addListener"),
                                a.addOnceListener = function(t, e) {
                                    return this.addListener(t, {
                                        listener: e,
                                        once: !0
                                    })
                                },
                                a.once = u("addOnceListener"),
                                a.defineEvent = function(t) {
                                    return this.getListeners(t),
                                        this
                                },
                                a.defineEvents = function(t) {
                                    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                                    return this
                                },
                                a.removeListener = function(t, e) {
                                    var n, r, i = this.getListenersAsObject(t);
                                    for (r in i) i.hasOwnProperty(r) && -1 !== (n = s(i[r], e)) && i[r].splice(n, 1);
                                    return this
                                },
                                a.off = u("removeListener"),
                                a.addListeners = function(t, e) {
                                    return this.manipulateListeners(!1, t, e)
                                },
                                a.removeListeners = function(t, e) {
                                    return this.manipulateListeners(!0, t, e)
                                },
                                a.manipulateListeners = function(t, e, n) {
                                    var r, i, a = t ? this.removeListener: this.addListener,
                                        o = t ? this.removeListeners: this.addListeners;
                                    if ("object" != typeof e || e instanceof RegExp) for (r = n.length; r--;) a.call(this, e, n[r]);
                                    else for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? a.call(this, r, i) : o.call(this, r, i));
                                    return this
                                },
                                a.removeEvent = function(t) {
                                    var e, n = typeof t,
                                        r = this._getEvents();
                                    if ("string" === n) delete r[t];
                                    else if (t instanceof RegExp) for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                                    else delete this._events;
                                    return this
                                },
                                a.removeAllListeners = u("removeEvent"),
                                a.emitEvent = function(t, e) {
                                    var n, r, i, a, o = this.getListenersAsObject(t);
                                    for (a in o) if (o.hasOwnProperty(a)) for (n = o[a].slice(0), i = 0; i < n.length; i++) ! 0 === (r = n[i]).once && this.removeListener(t, r.listener),
                                    r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                                    return this
                                },
                                a.trigger = u("emitEvent"),
                                a.emit = function(t) {
                                    var e = Array.prototype.slice.call(arguments, 1);
                                    return this.emitEvent(t, e)
                                },
                                a.setOnceReturnValue = function(t) {
                                    return this._onceReturnValue = t,
                                        this
                                },
                                a._getOnceReturnValue = function() {
                                    return ! this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                                },
                                a._getEvents = function() {
                                    return this._events || (this._events = {})
                                },
                                i.noConflict = function() {
                                    return e.EventEmitter = o,
                                        i
                                },
                            void 0 === (r = function() {
                                return i
                            }.call(e, n, e, t)) || (t.exports = r)
                        } (this || {})
                },
                function(t, e) {
                    t.exports = function(t) {
                        return null !== t && "function" != typeof t && isFinite(t.length)
                    }
                },
                , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Number")
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        return null === t || void 0 === t
                    }
                },
                function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var r = n(1);
                    function i(t, e, n, r, i) {
                        var a = t * t,
                            o = a * t;
                        return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
                    }
                    var a = function(t) {
                            var e = t.length - 1;
                            return function(n) {
                                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                                    a = t[r],
                                    o = t[r + 1],
                                    s = r > 0 ? t[r - 1] : 2 * a - o,
                                    u = r < e - 1 ? t[r + 2] : 2 * o - a;
                                return i((n - r / e) * e, s, a, o, u)
                            }
                        },
                        o = function(t) {
                            var e = t.length;
                            return function(n) {
                                var r = Math.floor(((n %= 1) < 0 ? ++n: n) * e),
                                    a = t[(r + e - 1) % e],
                                    o = t[r % e],
                                    s = t[(r + 1) % e],
                                    u = t[(r + 2) % e];
                                return i((n - r / e) * e, a, o, s, u)
                            }
                        },
                        s = function(t) {
                            return function() {
                                return t
                            }
                        };
                    function u(t, e) {
                        return function(n) {
                            return t + n * e
                        }
                    }
                    function c(t, e) {
                        var n = e - t;
                        return n ? u(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : s(isNaN(t) ? e: t)
                    }
                    function h(t) {
                        return 1 == (t = +t) ? f: function(e, n) {
                            return n - e ?
                                function(t, e, n) {
                                    return t = Math.pow(t, n),
                                        e = Math.pow(e, n) - t,
                                        n = 1 / n,
                                        function(r) {
                                            return Math.pow(t + r * e, n)
                                        }
                                } (e, n, t) : s(isNaN(e) ? n: e)
                        }
                    }
                    function f(t, e) {
                        var n = e - t;
                        return n ? u(t, n) : s(isNaN(t) ? e: t)
                    }
                    var l = function t(e) {
                        var n = h(e);
                        function i(t, e) {
                            var i = n((t = Object(r.h)(t)).r, (e = Object(r.h)(e)).r),
                                a = n(t.g, e.g),
                                o = n(t.b, e.b),
                                s = f(t.opacity, e.opacity);
                            return function(e) {
                                return t.r = i(e),
                                    t.g = a(e),
                                    t.b = o(e),
                                    t.opacity = s(e),
                                t + ""
                            }
                        }
                        return i.gamma = t,
                            i
                    } (1);
                    function p(t) {
                        return function(e) {
                            var n, i, a = e.length,
                                o = new Array(a),
                                s = new Array(a),
                                u = new Array(a);
                            for (n = 0; n < a; ++n) i = Object(r.h)(e[n]),
                                o[n] = i.r || 0,
                                s[n] = i.g || 0,
                                u[n] = i.b || 0;
                            return o = t(o),
                                s = t(s),
                                u = t(u),
                                i.opacity = 1,
                                function(t) {
                                    return i.r = o(t),
                                        i.g = s(t),
                                        i.b = u(t),
                                    i + ""
                                }
                        }
                    }
                    var d = p(a),
                        g = p(o),
                        v = function(t, e) {
                            var n, r = e ? e.length: 0,
                                i = t ? Math.min(r, t.length) : 0,
                                a = new Array(i),
                                o = new Array(r);
                            for (n = 0; n < i; ++n) a[n] = P(t[n], e[n]);
                            for (; n < r; ++n) o[n] = e[n];
                            return function(t) {
                                for (n = 0; n < i; ++n) o[n] = a[n](t);
                                return o
                            }
                        },
                        m = function(t, e) {
                            var n = new Date;
                            return e -= t = +t,
                                function(r) {
                                    return n.setTime(t + e * r),
                                        n
                                }
                        },
                        x = function(t, e) {
                            return e -= t = +t,
                                function(n) {
                                    return t + e * n
                                }
                        },
                        y = function(t, e) {
                            var n, r = {},
                                i = {};
                            for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = P(t[n], e[n]) : i[n] = e[n];
                            return function(t) {
                                for (n in r) i[n] = r[n](t);
                                return i
                            }
                        },
                        b = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                        M = new RegExp(b.source, "g");
                    var w, _, E, A, S = function(t, e) {
                            var n, r, i, a = b.lastIndex = M.lastIndex = 0,
                                o = -1,
                                s = [],
                                u = [];
                            for (t += "", e += ""; (n = b.exec(t)) && (r = M.exec(e));)(i = r.index) > a && (i = e.slice(a, i), s[o] ? s[o] += i: s[++o] = i),
                                (n = n[0]) === (r = r[0]) ? s[o] ? s[o] += r: s[++o] = r: (s[++o] = null, u.push({
                                    i: o,
                                    x: x(n, r)
                                })),
                                a = M.lastIndex;
                            return a < e.length && (i = e.slice(a), s[o] ? s[o] += i: s[++o] = i),
                                s.length < 2 ? u[0] ?
                                    function(t) {
                                        return function(e) {
                                            return t(e) + ""
                                        }
                                    } (u[0].x) : function(t) {
                                        return function() {
                                            return t
                                        }
                                    } (e) : (e = u.length,
                                    function(t) {
                                        for (var n, r = 0; r < e; ++r) s[(n = u[r]).i] = n.x(t);
                                        return s.join("")
                                    })
                        },
                        P = function(t, e) {
                            var n, i = typeof e;
                            return null == e || "boolean" === i ? s(e) : ("number" === i ? x: "string" === i ? (n = Object(r.a)(e)) ? (e = n, l) : S: e instanceof r.a ? l: e instanceof Date ? m: Array.isArray(e) ? v: "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? y: x)(t, e)
                        },
                        O = function(t, e) {
                            return e -= t = +t,
                                function(n) {
                                    return Math.round(t + e * n)
                                }
                        },
                        C = 180 / Math.PI,
                        I = {
                            translateX: 0,
                            translateY: 0,
                            rotate: 0,
                            skewX: 0,
                            scaleX: 1,
                            scaleY: 1
                        },
                        T = function(t, e, n, r, i, a) {
                            var o, s, u;
                            return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o),
                            (u = t * n + e * r) && (n -= t * u, r -= e * u),
                            (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s),
                            t * r < e * n && (t = -t, e = -e, u = -u, o = -o),
                                {
                                    translateX: i,
                                    translateY: a,
                                    rotate: Math.atan2(e, t) * C,
                                    skewX: Math.atan(u) * C,
                                    scaleX: o,
                                    scaleY: s
                                }
                        };
                    function k(t, e, n, r) {
                        function i(t) {
                            return t.length ? t.pop() + " ": ""
                        }
                        return function(a, o) {
                            var s = [],
                                u = [];
                            return a = t(a),
                                o = t(o),
                                function(t, r, i, a, o, s) {
                                    if (t !== i || r !== a) {
                                        var u = o.push("translate(", null, e, null, n);
                                        s.push({
                                                i: u - 4,
                                                x: x(t, i)
                                            },
                                            {
                                                i: u - 2,
                                                x: x(r, a)
                                            })
                                    } else(i || a) && o.push("translate(" + i + e + a + n)
                                } (a.translateX, a.translateY, o.translateX, o.translateY, s, u),
                                function(t, e, n, a) {
                                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({
                                        i: n.push(i(n) + "rotate(", null, r) - 2,
                                        x: x(t, e)
                                    })) : e && n.push(i(n) + "rotate(" + e + r)
                                } (a.rotate, o.rotate, s, u),
                                function(t, e, n, a) {
                                    t !== e ? a.push({
                                        i: n.push(i(n) + "skewX(", null, r) - 2,
                                        x: x(t, e)
                                    }) : e && n.push(i(n) + "skewX(" + e + r)
                                } (a.skewX, o.skewX, s, u),
                                function(t, e, n, r, a, o) {
                                    if (t !== n || e !== r) {
                                        var s = a.push(i(a) + "scale(", null, ",", null, ")");
                                        o.push({
                                                i: s - 4,
                                                x: x(t, n)
                                            },
                                            {
                                                i: s - 2,
                                                x: x(e, r)
                                            })
                                    } else 1 === n && 1 === r || a.push(i(a) + "scale(" + n + "," + r + ")")
                                } (a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, u),
                                a = o = null,
                                function(t) {
                                    for (var e, n = -1,
                                             r = u.length; ++n < r;) s[(e = u[n]).i] = e.x(t);
                                    return s.join("")
                                }
                        }
                    }
                    var N = k(function(t) {
                            return "none" === t ? I: (w || (w = document.createElement("DIV"), _ = document.documentElement, E = document.defaultView), w.style.transform = t, t = E.getComputedStyle(_.appendChild(w), null).getPropertyValue("transform"), _.removeChild(w), t = t.slice(7, -1).split(","), T( + t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                        },
                        "px, ", "px)", "deg)"),
                        L = k(function(t) {
                                return null == t ? I: (A || (A = document.createElementNS("http://www.w3.org/2000/svg", "g")), A.setAttribute("transform", t), (t = A.transform.baseVal.consolidate()) ? (t = t.matrix, T(t.a, t.b, t.c, t.d, t.e, t.f)) : I)
                            },
                            ", ", ")", ")"),
                        B = Math.SQRT2;
                    function j(t) {
                        return ((t = Math.exp(t)) + 1 / t) / 2
                    }
                    var D = function(t, e) {
                        var n, r, i = t[0],
                            a = t[1],
                            o = t[2],
                            s = e[0],
                            u = e[1],
                            c = e[2],
                            h = s - i,
                            f = u - a,
                            l = h * h + f * f;
                        if (l < 1e-12) r = Math.log(c / o) / B,
                            n = function(t) {
                                return [i + t * h, a + t * f, o * Math.exp(B * t * r)]
                            };
                        else {
                            var p = Math.sqrt(l),
                                d = (c * c - o * o + 4 * l) / (2 * o * 2 * p),
                                g = (c * c - o * o - 4 * l) / (2 * c * 2 * p),
                                v = Math.log(Math.sqrt(d * d + 1) - d),
                                m = Math.log(Math.sqrt(g * g + 1) - g);
                            r = (m - v) / B,
                                n = function(t) {
                                    var e = t * r,
                                        n = j(v),
                                        s = o / (2 * p) * (n *
                                            function(t) {
                                                return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                                            } (B * e + v) -
                                            function(t) {
                                                return ((t = Math.exp(t)) - 1 / t) / 2
                                            } (v));
                                    return [i + s * h, a + s * f, o * n / j(B * e + v)]
                                }
                        }
                        return n.duration = 1e3 * r,
                            n
                    };
                    function R(t) {
                        return function(e, n) {
                            var i = t((e = Object(r.e)(e)).h, (n = Object(r.e)(n)).h),
                                a = f(e.s, n.s),
                                o = f(e.l, n.l),
                                s = f(e.opacity, n.opacity);
                            return function(t) {
                                return e.h = i(t),
                                    e.s = a(t),
                                    e.l = o(t),
                                    e.opacity = s(t),
                                e + ""
                            }
                        }
                    }
                    var F = R(c),
                        Y = R(f);
                    function X(t, e) {
                        var n = f((t = Object(r.f)(t)).l, (e = Object(r.f)(e)).l),
                            i = f(t.a, e.a),
                            a = f(t.b, e.b),
                            o = f(t.opacity, e.opacity);
                        return function(e) {
                            return t.l = n(e),
                                t.a = i(e),
                                t.b = a(e),
                                t.opacity = o(e),
                            t + ""
                        }
                    }
                    function G(t) {
                        return function(e, n) {
                            var i = t((e = Object(r.d)(e)).h, (n = Object(r.d)(n)).h),
                                a = f(e.c, n.c),
                                o = f(e.l, n.l),
                                s = f(e.opacity, n.opacity);
                            return function(t) {
                                return e.h = i(t),
                                    e.c = a(t),
                                    e.l = o(t),
                                    e.opacity = s(t),
                                e + ""
                            }
                        }
                    }
                    var q = G(c),
                        U = G(f);
                    function H(t) {
                        return function e(n) {
                            function i(e, i) {
                                var a = t((e = Object(r.b)(e)).h, (i = Object(r.b)(i)).h),
                                    o = f(e.s, i.s),
                                    s = f(e.l, i.l),
                                    u = f(e.opacity, i.opacity);
                                return function(t) {
                                    return e.h = a(t),
                                        e.s = o(t),
                                        e.l = s(Math.pow(t, n)),
                                        e.opacity = u(t),
                                    e + ""
                                }
                            }
                            return n = +n,
                                i.gamma = e,
                                i
                        } (1)
                    }
                    var V = H(c),
                        z = H(f),
                        W = function(t, e) {
                            for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t(r / (e - 1));
                            return n
                        };
                    n.d(e, "interpolate",
                        function() {
                            return P
                        }),
                        n.d(e, "interpolateArray",
                            function() {
                                return v
                            }),
                        n.d(e, "interpolateBasis",
                            function() {
                                return a
                            }),
                        n.d(e, "interpolateBasisClosed",
                            function() {
                                return o
                            }),
                        n.d(e, "interpolateDate",
                            function() {
                                return m
                            }),
                        n.d(e, "interpolateNumber",
                            function() {
                                return x
                            }),
                        n.d(e, "interpolateObject",
                            function() {
                                return y
                            }),
                        n.d(e, "interpolateRound",
                            function() {
                                return O
                            }),
                        n.d(e, "interpolateString",
                            function() {
                                return S
                            }),
                        n.d(e, "interpolateTransformCss",
                            function() {
                                return N
                            }),
                        n.d(e, "interpolateTransformSvg",
                            function() {
                                return L
                            }),
                        n.d(e, "interpolateZoom",
                            function() {
                                return D
                            }),
                        n.d(e, "interpolateRgb",
                            function() {
                                return l
                            }),
                        n.d(e, "interpolateRgbBasis",
                            function() {
                                return d
                            }),
                        n.d(e, "interpolateRgbBasisClosed",
                            function() {
                                return g
                            }),
                        n.d(e, "interpolateHsl",
                            function() {
                                return F
                            }),
                        n.d(e, "interpolateHslLong",
                            function() {
                                return Y
                            }),
                        n.d(e, "interpolateLab",
                            function() {
                                return X
                            }),
                        n.d(e, "interpolateHcl",
                            function() {
                                return q
                            }),
                        n.d(e, "interpolateHclLong",
                            function() {
                                return U
                            }),
                        n.d(e, "interpolateCubehelix",
                            function() {
                                return V
                            }),
                        n.d(e, "interpolateCubehelixLong",
                            function() {
                                return z
                            }),
                        n.d(e, "quantize",
                            function() {
                                return W
                            })
                },
                , , , , , , , ,
                function(t, e, n) {
                    var r = n(372);
                    t.exports = {
                        track: !0,
                        defaultNodeSize: 40,
                        labelStyle: {
                            fill: "#595959",
                            textAlign: "center",
                            textBaseline: "middle"
                        },
                        groupStyle: {
                            stroke: "#CED4D9",
                            fill: "#F2F4F5",
                            radius: 2
                        },
                        groupBackgroundPadding: [40, 10, 10, 10],
                        updateDuration: 450,
                        enterDuration: 450,
                        leaveDuration: 450,
                        updateEasing: "easeQuadOut",
                        enterEasing: "easeQuadOut",
                        leaveEasing: "easeQuadOut",
                        version: r
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        Canvas: n(513),
                        Group: n(406),
                        Shape: n(37),
                        Arc: n(402),
                        Circle: n(401),
                        Dom: n(400),
                        Ellipse: n(399),
                        Fan: n(398),
                        Image: n(397),
                        Line: n(396),
                        Marker: n(374),
                        Path: n(395),
                        Polygon: n(394),
                        Polyline: n(393),
                        Rect: n(392),
                        Text: n(391),
                        PathSegment: n(363),
                        PathUtil: n(373),
                        Event: n(407),
                        version: "3.3.5"
                    }
                },
                function(t, e) {
                    var n;
                    n = function() {
                        return this
                    } ();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch(t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0,
                        e.create = i,
                        e.clone = function(t) {
                            var e = new r.ARRAY_TYPE(3);
                            return e[0] = t[0],
                                e[1] = t[1],
                                e[2] = t[2],
                                e
                        },
                        e.length = a,
                        e.fromValues = o,
                        e.copy = function(t, e) {
                            return t[0] = e[0],
                                t[1] = e[1],
                                t[2] = e[2],
                                t
                        },
                        e.set = function(t, e, n, r) {
                            return t[0] = e,
                                t[1] = n,
                                t[2] = r,
                                t
                        },
                        e.add = function(t, e, n) {
                            return t[0] = e[0] + n[0],
                                t[1] = e[1] + n[1],
                                t[2] = e[2] + n[2],
                                t
                        },
                        e.subtract = s,
                        e.multiply = u,
                        e.divide = c,
                        e.ceil = function(t, e) {
                            return t[0] = Math.ceil(e[0]),
                                t[1] = Math.ceil(e[1]),
                                t[2] = Math.ceil(e[2]),
                                t
                        },
                        e.floor = function(t, e) {
                            return t[0] = Math.floor(e[0]),
                                t[1] = Math.floor(e[1]),
                                t[2] = Math.floor(e[2]),
                                t
                        },
                        e.min = function(t, e, n) {
                            return t[0] = Math.min(e[0], n[0]),
                                t[1] = Math.min(e[1], n[1]),
                                t[2] = Math.min(e[2], n[2]),
                                t
                        },
                        e.max = function(t, e, n) {
                            return t[0] = Math.max(e[0], n[0]),
                                t[1] = Math.max(e[1], n[1]),
                                t[2] = Math.max(e[2], n[2]),
                                t
                        },
                        e.round = function(t, e) {
                            return t[0] = Math.round(e[0]),
                                t[1] = Math.round(e[1]),
                                t[2] = Math.round(e[2]),
                                t
                        },
                        e.scale = function(t, e, n) {
                            return t[0] = e[0] * n,
                                t[1] = e[1] * n,
                                t[2] = e[2] * n,
                                t
                        },
                        e.scaleAndAdd = function(t, e, n, r) {
                            return t[0] = e[0] + n[0] * r,
                                t[1] = e[1] + n[1] * r,
                                t[2] = e[2] + n[2] * r,
                                t
                        },
                        e.distance = h,
                        e.squaredDistance = f,
                        e.squaredLength = l,
                        e.negate = function(t, e) {
                            return t[0] = -e[0],
                                t[1] = -e[1],
                                t[2] = -e[2],
                                t
                        },
                        e.inverse = function(t, e) {
                            return t[0] = 1 / e[0],
                                t[1] = 1 / e[1],
                                t[2] = 1 / e[2],
                                t
                        },
                        e.normalize = p,
                        e.dot = d,
                        e.cross = function(t, e, n) {
                            var r = e[0],
                                i = e[1],
                                a = e[2],
                                o = n[0],
                                s = n[1],
                                u = n[2];
                            return t[0] = i * u - a * s,
                                t[1] = a * o - r * u,
                                t[2] = r * s - i * o,
                                t
                        },
                        e.lerp = function(t, e, n, r) {
                            var i = e[0],
                                a = e[1],
                                o = e[2];
                            return t[0] = i + r * (n[0] - i),
                                t[1] = a + r * (n[1] - a),
                                t[2] = o + r * (n[2] - o),
                                t
                        },
                        e.hermite = function(t, e, n, r, i, a) {
                            var o = a * a,
                                s = o * (2 * a - 3) + 1,
                                u = o * (a - 2) + a,
                                c = o * (a - 1),
                                h = o * (3 - 2 * a);
                            return t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * h,
                                t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * h,
                                t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * h,
                                t
                        },
                        e.bezier = function(t, e, n, r, i, a) {
                            var o = 1 - a,
                                s = o * o,
                                u = a * a,
                                c = s * o,
                                h = 3 * a * s,
                                f = 3 * u * o,
                                l = u * a;
                            return t[0] = e[0] * c + n[0] * h + r[0] * f + i[0] * l,
                                t[1] = e[1] * c + n[1] * h + r[1] * f + i[1] * l,
                                t[2] = e[2] * c + n[2] * h + r[2] * f + i[2] * l,
                                t
                        },
                        e.random = function(t, e) {
                            e = e || 1;
                            var n = 2 * r.RANDOM() * Math.PI,
                                i = 2 * r.RANDOM() - 1,
                                a = Math.sqrt(1 - i * i) * e;
                            return t[0] = Math.cos(n) * a,
                                t[1] = Math.sin(n) * a,
                                t[2] = i * e,
                                t
                        },
                        e.transformMat4 = function(t, e, n) {
                            var r = e[0],
                                i = e[1],
                                a = e[2],
                                o = n[3] * r + n[7] * i + n[11] * a + n[15];
                            return o = o || 1,
                                t[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o,
                                t[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o,
                                t[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o,
                                t
                        },
                        e.transformMat3 = function(t, e, n) {
                            var r = e[0],
                                i = e[1],
                                a = e[2];
                            return t[0] = r * n[0] + i * n[3] + a * n[6],
                                t[1] = r * n[1] + i * n[4] + a * n[7],
                                t[2] = r * n[2] + i * n[5] + a * n[8],
                                t
                        },
                        e.transformQuat = function(t, e, n) {
                            var r = n[0],
                                i = n[1],
                                a = n[2],
                                o = n[3],
                                s = e[0],
                                u = e[1],
                                c = e[2],
                                h = i * c - a * u,
                                f = a * s - r * c,
                                l = r * u - i * s,
                                p = i * l - a * f,
                                d = a * h - r * l,
                                g = r * f - i * h,
                                v = 2 * o;
                            return h *= v,
                                f *= v,
                                l *= v,
                                p *= 2,
                                d *= 2,
                                g *= 2,
                                t[0] = s + h + p,
                                t[1] = u + f + d,
                                t[2] = c + l + g,
                                t
                        },
                        e.rotateX = function(t, e, n, r) {
                            var i = [],
                                a = [];
                            return i[0] = e[0] - n[0],
                                i[1] = e[1] - n[1],
                                i[2] = e[2] - n[2],
                                a[0] = i[0],
                                a[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r),
                                a[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r),
                                t[0] = a[0] + n[0],
                                t[1] = a[1] + n[1],
                                t[2] = a[2] + n[2],
                                t
                        },
                        e.rotateY = function(t, e, n, r) {
                            var i = [],
                                a = [];
                            return i[0] = e[0] - n[0],
                                i[1] = e[1] - n[1],
                                i[2] = e[2] - n[2],
                                a[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r),
                                a[1] = i[1],
                                a[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r),
                                t[0] = a[0] + n[0],
                                t[1] = a[1] + n[1],
                                t[2] = a[2] + n[2],
                                t
                        },
                        e.rotateZ = function(t, e, n, r) {
                            var i = [],
                                a = [];
                            return i[0] = e[0] - n[0],
                                i[1] = e[1] - n[1],
                                i[2] = e[2] - n[2],
                                a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r),
                                a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r),
                                a[2] = i[2],
                                t[0] = a[0] + n[0],
                                t[1] = a[1] + n[1],
                                t[2] = a[2] + n[2],
                                t
                        },
                        e.angle = function(t, e) {
                            var n = o(t[0], t[1], t[2]),
                                r = o(e[0], e[1], e[2]);
                            p(n, n),
                                p(r, r);
                            var i = d(n, r);
                            return i > 1 ? 0 : i < -1 ? Math.PI: Math.acos(i)
                        },
                        e.str = function(t) {
                            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                        },
                        e.exactEquals = function(t, e) {
                            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
                        },
                        e.equals = function(t, e) {
                            var n = t[0],
                                i = t[1],
                                a = t[2],
                                o = e[0],
                                s = e[1],
                                u = e[2];
                            return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(a - u) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(u))
                        };
                    var r = function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e.
                            default = t,
                            e
                    } (n(38));
                    function i() {
                        var t = new r.ARRAY_TYPE(3);
                        return r.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0),
                            t
                    }
                    function a(t) {
                        var e = t[0],
                            n = t[1],
                            r = t[2];
                        return Math.sqrt(e * e + n * n + r * r)
                    }
                    function o(t, e, n) {
                        var i = new r.ARRAY_TYPE(3);
                        return i[0] = t,
                            i[1] = e,
                            i[2] = n,
                            i
                    }
                    function s(t, e, n) {
                        return t[0] = e[0] - n[0],
                            t[1] = e[1] - n[1],
                            t[2] = e[2] - n[2],
                            t
                    }
                    function u(t, e, n) {
                        return t[0] = e[0] * n[0],
                            t[1] = e[1] * n[1],
                            t[2] = e[2] * n[2],
                            t
                    }
                    function c(t, e, n) {
                        return t[0] = e[0] / n[0],
                            t[1] = e[1] / n[1],
                            t[2] = e[2] / n[2],
                            t
                    }
                    function h(t, e) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1],
                            i = e[2] - t[2];
                        return Math.sqrt(n * n + r * r + i * i)
                    }
                    function f(t, e) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1],
                            i = e[2] - t[2];
                        return n * n + r * r + i * i
                    }
                    function l(t) {
                        var e = t[0],
                            n = t[1],
                            r = t[2];
                        return e * e + n * n + r * r
                    }
                    function p(t, e) {
                        var n = e[0],
                            r = e[1],
                            i = e[2],
                            a = n * n + r * r + i * i;
                        return a > 0 && (a = 1 / Math.sqrt(a), t[0] = e[0] * a, t[1] = e[1] * a, t[2] = e[2] * a),
                            t
                    }
                    function d(t, e) {
                        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
                    }
                    e.sub = s,
                        e.mul = u,
                        e.div = c,
                        e.dist = h,
                        e.sqrDist = f,
                        e.len = a,
                        e.sqrLen = l,
                        e.forEach = function() {
                            var t = i();
                            return function(e, n, r, i, a, o) {
                                var s = void 0,
                                    u = void 0;
                                for (n || (n = 3), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; s < u; s += n) t[0] = e[s],
                                    t[1] = e[s + 1],
                                    t[2] = e[s + 2],
                                    a(t, t, o),
                                    e[s] = t[0],
                                    e[s + 1] = t[1],
                                    e[s + 2] = t[2];
                                return e
                            }
                        } ()
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0,
                        e.create = i,
                        e.clone = function(t) {
                            var e = new r.ARRAY_TYPE(2);
                            return e[0] = t[0],
                                e[1] = t[1],
                                e
                        },
                        e.fromValues = function(t, e) {
                            var n = new r.ARRAY_TYPE(2);
                            return n[0] = t,
                                n[1] = e,
                                n
                        },
                        e.copy = function(t, e) {
                            return t[0] = e[0],
                                t[1] = e[1],
                                t
                        },
                        e.set = function(t, e, n) {
                            return t[0] = e,
                                t[1] = n,
                                t
                        },
                        e.add = function(t, e, n) {
                            return t[0] = e[0] + n[0],
                                t[1] = e[1] + n[1],
                                t
                        },
                        e.subtract = a,
                        e.multiply = o,
                        e.divide = s,
                        e.ceil = function(t, e) {
                            return t[0] = Math.ceil(e[0]),
                                t[1] = Math.ceil(e[1]),
                                t
                        },
                        e.floor = function(t, e) {
                            return t[0] = Math.floor(e[0]),
                                t[1] = Math.floor(e[1]),
                                t
                        },
                        e.min = function(t, e, n) {
                            return t[0] = Math.min(e[0], n[0]),
                                t[1] = Math.min(e[1], n[1]),
                                t
                        },
                        e.max = function(t, e, n) {
                            return t[0] = Math.max(e[0], n[0]),
                                t[1] = Math.max(e[1], n[1]),
                                t
                        },
                        e.round = function(t, e) {
                            return t[0] = Math.round(e[0]),
                                t[1] = Math.round(e[1]),
                                t
                        },
                        e.scale = function(t, e, n) {
                            return t[0] = e[0] * n,
                                t[1] = e[1] * n,
                                t
                        },
                        e.scaleAndAdd = function(t, e, n, r) {
                            return t[0] = e[0] + n[0] * r,
                                t[1] = e[1] + n[1] * r,
                                t
                        },
                        e.distance = u,
                        e.squaredDistance = c,
                        e.length = h,
                        e.squaredLength = f,
                        e.negate = function(t, e) {
                            return t[0] = -e[0],
                                t[1] = -e[1],
                                t
                        },
                        e.inverse = function(t, e) {
                            return t[0] = 1 / e[0],
                                t[1] = 1 / e[1],
                                t
                        },
                        e.normalize = function(t, e) {
                            var n = e[0],
                                r = e[1],
                                i = n * n + r * r;
                            i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i);
                            return t
                        },
                        e.dot = function(t, e) {
                            return t[0] * e[0] + t[1] * e[1]
                        },
                        e.cross = function(t, e, n) {
                            var r = e[0] * n[1] - e[1] * n[0];
                            return t[0] = t[1] = 0,
                                t[2] = r,
                                t
                        },
                        e.lerp = function(t, e, n, r) {
                            var i = e[0],
                                a = e[1];
                            return t[0] = i + r * (n[0] - i),
                                t[1] = a + r * (n[1] - a),
                                t
                        },
                        e.random = function(t, e) {
                            e = e || 1;
                            var n = 2 * r.RANDOM() * Math.PI;
                            return t[0] = Math.cos(n) * e,
                                t[1] = Math.sin(n) * e,
                                t
                        },
                        e.transformMat2 = function(t, e, n) {
                            var r = e[0],
                                i = e[1];
                            return t[0] = n[0] * r + n[2] * i,
                                t[1] = n[1] * r + n[3] * i,
                                t
                        },
                        e.transformMat2d = function(t, e, n) {
                            var r = e[0],
                                i = e[1];
                            return t[0] = n[0] * r + n[2] * i + n[4],
                                t[1] = n[1] * r + n[3] * i + n[5],
                                t
                        },
                        e.transformMat3 = function(t, e, n) {
                            var r = e[0],
                                i = e[1];
                            return t[0] = n[0] * r + n[3] * i + n[6],
                                t[1] = n[1] * r + n[4] * i + n[7],
                                t
                        },
                        e.transformMat4 = function(t, e, n) {
                            var r = e[0],
                                i = e[1];
                            return t[0] = n[0] * r + n[4] * i + n[12],
                                t[1] = n[1] * r + n[5] * i + n[13],
                                t
                        },
                        e.rotate = function(t, e, n, r) {
                            var i = e[0] - n[0],
                                a = e[1] - n[1],
                                o = Math.sin(r),
                                s = Math.cos(r);
                            return t[0] = i * s - a * o + n[0],
                                t[1] = i * o + a * s + n[1],
                                t
                        },
                        e.angle = function(t, e) {
                            var n = t[0],
                                r = t[1],
                                i = e[0],
                                a = e[1],
                                o = n * n + r * r;
                            o > 0 && (o = 1 / Math.sqrt(o));
                            var s = i * i + a * a;
                            s > 0 && (s = 1 / Math.sqrt(s));
                            var u = (n * i + r * a) * o * s;
                            return u > 1 ? 0 : u < -1 ? Math.PI: Math.acos(u)
                        },
                        e.str = function(t) {
                            return "vec2(" + t[0] + ", " + t[1] + ")"
                        },
                        e.exactEquals = function(t, e) {
                            return t[0] === e[0] && t[1] === e[1]
                        },
                        e.equals = function(t, e) {
                            var n = t[0],
                                i = t[1],
                                a = e[0],
                                o = e[1];
                            return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - o) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(o))
                        };
                    var r = function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e.
                            default = t,
                            e
                    } (n(38));
                    function i() {
                        var t = new r.ARRAY_TYPE(2);
                        return r.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0),
                            t
                    }
                    function a(t, e, n) {
                        return t[0] = e[0] - n[0],
                            t[1] = e[1] - n[1],
                            t
                    }
                    function o(t, e, n) {
                        return t[0] = e[0] * n[0],
                            t[1] = e[1] * n[1],
                            t
                    }
                    function s(t, e, n) {
                        return t[0] = e[0] / n[0],
                            t[1] = e[1] / n[1],
                            t
                    }
                    function u(t, e) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1];
                        return Math.sqrt(n * n + r * r)
                    }
                    function c(t, e) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1];
                        return n * n + r * r
                    }
                    function h(t) {
                        var e = t[0],
                            n = t[1];
                        return Math.sqrt(e * e + n * n)
                    }
                    function f(t) {
                        var e = t[0],
                            n = t[1];
                        return e * e + n * n
                    }
                    e.len = h,
                        e.sub = a,
                        e.mul = o,
                        e.div = s,
                        e.dist = u,
                        e.sqrDist = c,
                        e.sqrLen = f,
                        e.forEach = function() {
                            var t = i();
                            return function(e, n, r, i, a, o) {
                                var s = void 0,
                                    u = void 0;
                                for (n || (n = 2), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; s < u; s += n) t[0] = e[s],
                                    t[1] = e[s + 1],
                                    a(t, t, o),
                                    e[s] = t[0],
                                    e[s + 1] = t[1];
                                return e
                            }
                        } ()
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                        e.sub = e.mul = void 0,
                        e.create = function() {
                            var t = new r.ARRAY_TYPE(9);
                            r.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0);
                            return t[0] = 1,
                                t[4] = 1,
                                t[8] = 1,
                                t
                        },
                        e.fromMat4 = function(t, e) {
                            return t[0] = e[0],
                                t[1] = e[1],
                                t[2] = e[2],
                                t[3] = e[4],
                                t[4] = e[5],
                                t[5] = e[6],
                                t[6] = e[8],
                                t[7] = e[9],
                                t[8] = e[10],
                                t
                        },
                        e.clone = function(t) {
                            var e = new r.ARRAY_TYPE(9);
                            return e[0] = t[0],
                                e[1] = t[1],
                                e[2] = t[2],
                                e[3] = t[3],
                                e[4] = t[4],
                                e[5] = t[5],
                                e[6] = t[6],
                                e[7] = t[7],
                                e[8] = t[8],
                                e
                        },
                        e.copy = function(t, e) {
                            return t[0] = e[0],
                                t[1] = e[1],
                                t[2] = e[2],
                                t[3] = e[3],
                                t[4] = e[4],
                                t[5] = e[5],
                                t[6] = e[6],
                                t[7] = e[7],
                                t[8] = e[8],
                                t
                        },
                        e.fromValues = function(t, e, n, i, a, o, s, u, c) {
                            var h = new r.ARRAY_TYPE(9);
                            return h[0] = t,
                                h[1] = e,
                                h[2] = n,
                                h[3] = i,
                                h[4] = a,
                                h[5] = o,
                                h[6] = s,
                                h[7] = u,
                                h[8] = c,
                                h
                        },
                        e.set = function(t, e, n, r, i, a, o, s, u, c) {
                            return t[0] = e,
                                t[1] = n,
                                t[2] = r,
                                t[3] = i,
                                t[4] = a,
                                t[5] = o,
                                t[6] = s,
                                t[7] = u,
                                t[8] = c,
                                t
                        },
                        e.identity = function(t) {
                            return t[0] = 1,
                                t[1] = 0,
                                t[2] = 0,
                                t[3] = 0,
                                t[4] = 1,
                                t[5] = 0,
                                t[6] = 0,
                                t[7] = 0,
                                t[8] = 1,
                                t
                        },
                        e.transpose = function(t, e) {
                            if (t === e) {
                                var n = e[1],
                                    r = e[2],
                                    i = e[5];
                                t[1] = e[3],
                                    t[2] = e[6],
                                    t[3] = n,
                                    t[5] = e[7],
                                    t[6] = r,
                                    t[7] = i
                            } else t[0] = e[0],
                                t[1] = e[3],
                                t[2] = e[6],
                                t[3] = e[1],
                                t[4] = e[4],
                                t[5] = e[7],
                                t[6] = e[2],
                                t[7] = e[5],
                                t[8] = e[8];
                            return t
                        },
                        e.invert = function(t, e) {
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                a = e[3],
                                o = e[4],
                                s = e[5],
                                u = e[6],
                                c = e[7],
                                h = e[8],
                                f = h * o - s * c,
                                l = -h * a + s * u,
                                p = c * a - o * u,
                                d = n * f + r * l + i * p;
                            if (!d) return null;
                            return d = 1 / d,
                                t[0] = f * d,
                                t[1] = ( - h * r + i * c) * d,
                                t[2] = (s * r - i * o) * d,
                                t[3] = l * d,
                                t[4] = (h * n - i * u) * d,
                                t[5] = ( - s * n + i * a) * d,
                                t[6] = p * d,
                                t[7] = ( - c * n + r * u) * d,
                                t[8] = (o * n - r * a) * d,
                                t
                        },
                        e.adjoint = function(t, e) {
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                a = e[3],
                                o = e[4],
                                s = e[5],
                                u = e[6],
                                c = e[7],
                                h = e[8];
                            return t[0] = o * h - s * c,
                                t[1] = i * c - r * h,
                                t[2] = r * s - i * o,
                                t[3] = s * u - a * h,
                                t[4] = n * h - i * u,
                                t[5] = i * a - n * s,
                                t[6] = a * c - o * u,
                                t[7] = r * u - n * c,
                                t[8] = n * o - r * a,
                                t
                        },
                        e.determinant = function(t) {
                            var e = t[0],
                                n = t[1],
                                r = t[2],
                                i = t[3],
                                a = t[4],
                                o = t[5],
                                s = t[6],
                                u = t[7],
                                c = t[8];
                            return e * (c * a - o * u) + n * ( - c * i + o * s) + r * (u * i - a * s)
                        },
                        e.multiply = i,
                        e.translate = function(t, e, n) {
                            var r = e[0],
                                i = e[1],
                                a = e[2],
                                o = e[3],
                                s = e[4],
                                u = e[5],
                                c = e[6],
                                h = e[7],
                                f = e[8],
                                l = n[0],
                                p = n[1];
                            return t[0] = r,
                                t[1] = i,
                                t[2] = a,
                                t[3] = o,
                                t[4] = s,
                                t[5] = u,
                                t[6] = l * r + p * o + c,
                                t[7] = l * i + p * s + h,
                                t[8] = l * a + p * u + f,
                                t
                        },
                        e.rotate = function(t, e, n) {
                            var r = e[0],
                                i = e[1],
                                a = e[2],
                                o = e[3],
                                s = e[4],
                                u = e[5],
                                c = e[6],
                                h = e[7],
                                f = e[8],
                                l = Math.sin(n),
                                p = Math.cos(n);
                            return t[0] = p * r + l * o,
                                t[1] = p * i + l * s,
                                t[2] = p * a + l * u,
                                t[3] = p * o - l * r,
                                t[4] = p * s - l * i,
                                t[5] = p * u - l * a,
                                t[6] = c,
                                t[7] = h,
                                t[8] = f,
                                t
                        },
                        e.scale = function(t, e, n) {
                            var r = n[0],
                                i = n[1];
                            return t[0] = r * e[0],
                                t[1] = r * e[1],
                                t[2] = r * e[2],
                                t[3] = i * e[3],
                                t[4] = i * e[4],
                                t[5] = i * e[5],
                                t[6] = e[6],
                                t[7] = e[7],
                                t[8] = e[8],
                                t
                        },
                        e.fromTranslation = function(t, e) {
                            return t[0] = 1,
                                t[1] = 0,
                                t[2] = 0,
                                t[3] = 0,
                                t[4] = 1,
                                t[5] = 0,
                                t[6] = e[0],
                                t[7] = e[1],
                                t[8] = 1,
                                t
                        },
                        e.fromRotation = function(t, e) {
                            var n = Math.sin(e),
                                r = Math.cos(e);
                            return t[0] = r,
                                t[1] = n,
                                t[2] = 0,
                                t[3] = -n,
                                t[4] = r,
                                t[5] = 0,
                                t[6] = 0,
                                t[7] = 0,
                                t[8] = 1,
                                t
                        },
                        e.fromScaling = function(t, e) {
                            return t[0] = e[0],
                                t[1] = 0,
                                t[2] = 0,
                                t[3] = 0,
                                t[4] = e[1],
                                t[5] = 0,
                                t[6] = 0,
                                t[7] = 0,
                                t[8] = 1,
                                t
                        },
                        e.fromMat2d = function(t, e) {
                            return t[0] = e[0],
                                t[1] = e[1],
                                t[2] = 0,
                                t[3] = e[2],
                                t[4] = e[3],
                                t[5] = 0,
                                t[6] = e[4],
                                t[7] = e[5],
                                t[8] = 1,
                                t
                        },
                        e.fromQuat = function(t, e) {
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                a = e[3],
                                o = n + n,
                                s = r + r,
                                u = i + i,
                                c = n * o,
                                h = r * o,
                                f = r * s,
                                l = i * o,
                                p = i * s,
                                d = i * u,
                                g = a * o,
                                v = a * s,
                                m = a * u;
                            return t[0] = 1 - f - d,
                                t[3] = h - m,
                                t[6] = l + v,
                                t[1] = h + m,
                                t[4] = 1 - c - d,
                                t[7] = p - g,
                                t[2] = l - v,
                                t[5] = p + g,
                                t[8] = 1 - c - f,
                                t
                        },
                        e.normalFromMat4 = function(t, e) {
                            var n = e[0],
                                r = e[1],
                                i = e[2],
                                a = e[3],
                                o = e[4],
                                s = e[5],
                                u = e[6],
                                c = e[7],
                                h = e[8],
                                f = e[9],
                                l = e[10],
                                p = e[11],
                                d = e[12],
                                g = e[13],
                                v = e[14],
                                m = e[15],
                                x = n * s - r * o,
                                y = n * u - i * o,
                                b = n * c - a * o,
                                M = r * u - i * s,
                                w = r * c - a * s,
                                _ = i * c - a * u,
                                E = h * g - f * d,
                                A = h * v - l * d,
                                S = h * m - p * d,
                                P = f * v - l * g,
                                O = f * m - p * g,
                                C = l * m - p * v,
                                I = x * C - y * O + b * P + M * S - w * A + _ * E;
                            if (!I) return null;
                            return I = 1 / I,
                                t[0] = (s * C - u * O + c * P) * I,
                                t[1] = (u * S - o * C - c * A) * I,
                                t[2] = (o * O - s * S + c * E) * I,
                                t[3] = (i * O - r * C - a * P) * I,
                                t[4] = (n * C - i * S + a * A) * I,
                                t[5] = (r * S - n * O - a * E) * I,
                                t[6] = (g * _ - v * w + m * M) * I,
                                t[7] = (v * b - d * _ - m * y) * I,
                                t[8] = (d * w - g * b + m * x) * I,
                                t
                        },
                        e.projection = function(t, e, n) {
                            return t[0] = 2 / e,
                                t[1] = 0,
                                t[2] = 0,
                                t[3] = 0,
                                t[4] = -2 / n,
                                t[5] = 0,
                                t[6] = -1,
                                t[7] = 1,
                                t[8] = 1,
                                t
                        },
                        e.str = function(t) {
                            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
                        },
                        e.frob = function(t) {
                            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
                        },
                        e.add = function(t, e, n) {
                            return t[0] = e[0] + n[0],
                                t[1] = e[1] + n[1],
                                t[2] = e[2] + n[2],
                                t[3] = e[3] + n[3],
                                t[4] = e[4] + n[4],
                                t[5] = e[5] + n[5],
                                t[6] = e[6] + n[6],
                                t[7] = e[7] + n[7],
                                t[8] = e[8] + n[8],
                                t
                        },
                        e.subtract = a,
                        e.multiplyScalar = function(t, e, n) {
                            return t[0] = e[0] * n,
                                t[1] = e[1] * n,
                                t[2] = e[2] * n,
                                t[3] = e[3] * n,
                                t[4] = e[4] * n,
                                t[5] = e[5] * n,
                                t[6] = e[6] * n,
                                t[7] = e[7] * n,
                                t[8] = e[8] * n,
                                t
                        },
                        e.multiplyScalarAndAdd = function(t, e, n, r) {
                            return t[0] = e[0] + n[0] * r,
                                t[1] = e[1] + n[1] * r,
                                t[2] = e[2] + n[2] * r,
                                t[3] = e[3] + n[3] * r,
                                t[4] = e[4] + n[4] * r,
                                t[5] = e[5] + n[5] * r,
                                t[6] = e[6] + n[6] * r,
                                t[7] = e[7] + n[7] * r,
                                t[8] = e[8] + n[8] * r,
                                t
                        },
                        e.exactEquals = function(t, e) {
                            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
                        },
                        e.equals = function(t, e) {
                            var n = t[0],
                                i = t[1],
                                a = t[2],
                                o = t[3],
                                s = t[4],
                                u = t[5],
                                c = t[6],
                                h = t[7],
                                f = t[8],
                                l = e[0],
                                p = e[1],
                                d = e[2],
                                g = e[3],
                                v = e[4],
                                m = e[5],
                                x = e[6],
                                y = e[7],
                                b = e[8];
                            return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - p) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(a - d) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(o - g) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(s - v) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(u - m) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(m)) && Math.abs(c - x) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(h - y) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(y)) && Math.abs(f - b) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(b))
                        };
                    var r = function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e.
                            default = t,
                            e
                    } (n(38));
                    function i(t, e, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[3],
                            s = e[4],
                            u = e[5],
                            c = e[6],
                            h = e[7],
                            f = e[8],
                            l = n[0],
                            p = n[1],
                            d = n[2],
                            g = n[3],
                            v = n[4],
                            m = n[5],
                            x = n[6],
                            y = n[7],
                            b = n[8];
                        return t[0] = l * r + p * o + d * c,
                            t[1] = l * i + p * s + d * h,
                            t[2] = l * a + p * u + d * f,
                            t[3] = g * r + v * o + m * c,
                            t[4] = g * i + v * s + m * h,
                            t[5] = g * a + v * u + m * f,
                            t[6] = x * r + y * o + b * c,
                            t[7] = x * i + y * s + b * h,
                            t[8] = x * a + y * u + b * f,
                            t
                    }
                    function a(t, e, n) {
                        return t[0] = e[0] - n[0],
                            t[1] = e[1] - n[1],
                            t[2] = e[2] - n[2],
                            t[3] = e[3] - n[3],
                            t[4] = e[4] - n[4],
                            t[5] = e[5] - n[5],
                            t[6] = e[6] - n[6],
                            t[7] = e[7] - n[7],
                            t[8] = e[8] - n[8],
                            t
                    }
                    e.mul = i,
                        e.sub = a
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = 5,
                        a = n(593);
                    Math.sign = function(t) {
                        return 0 === (t = +t) || isNaN(t) ? t: t > 0 ? 1 : -1
                    };
                    var o = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))),
                                i.forEach(function(e) {
                                    r(t, e, n[e])
                                })
                        }
                        return t
                    } ({},
                        a, {
                            throttle: n(523),
                            debounce: n(411),
                            omit: function(t, e) {
                                var n = {};
                                return a.each(t,
                                    function(t, r) { - 1 === e.indexOf(r) && (n[r] = t)
                                    }),
                                    n
                            },
                            traverseTree: function(t, e, n, r) {
                                void 0 === r && (r = !1);
                                var i = n(t);
                                r && e(t, null, null),
                                i && o.each(i,
                                    function(r, i) {
                                        e(r, t, i),
                                            o.traverseTree(r, e, n)
                                    })
                            },
                            toAllPadding: function(t) {
                                var e = 0,
                                    n = 0,
                                    r = 0,
                                    i = 0;
                                return o.isNumber(t) || o.isString(t) ? e = n = r = i = t: o.isArray(t) && (e = t[0], r = o.isNil(t[1]) ? t[0] : t[1], i = o.isNil(t[2]) ? t[0] : t[2], n = o.isNil(t[3]) ? r: t[3]),
                                    [e, r, i, n]
                            },
                            guid: function() {
                                return "xxxxxxxx".replace(/[xy]/g,
                                    function(t) {
                                        var e = 16 * Math.random() | 0;
                                        return ("x" === t ? e: 3 & e | 8).toString(16)
                                    })
                            },
                            mix: function() {
                                var t, e, n = o.toArray(arguments),
                                    r = n[0];
                                if (!0 === r) for (r = n[1], e = 2; e < n.length; e++) s(r, t = n[e]);
                                else for (e = 1; e < n.length; e++) for (var i in t = n[e]) t.hasOwnProperty(i) && "constructor" !== i && (r[i] = t[i]);
                                return r
                            },
                            mixin: function(t, e) {
                                if (t && e) {
                                    t._mixins = e,
                                        t.ATTRS = t.ATTRS || {};
                                    o.each(e,
                                        function(e) {
                                            o.augment(t, e)
                                        }),
                                        t.ATTRS = o.mix({},
                                            t.ATTRS)
                                }
                            }
                        });
                    function s(t, e, n) {
                        for (var r in n = n || 0,
                            e) if (e.hasOwnProperty(r)) {
                            var a = e[r];
                            null !== a && o.isPlainObject(a) ? (o.isPlainObject(t[r]) || (t[r] = {}), n < i ? s(t[r], e[r], n + 1) : t[r] = e[r]) : o.isArray(a) ? (t[r] = [], t[r] = t[r].concat(a)) : void 0 !== a && (t[r] = e[r])
                        }
                    }
                    o.Array = {
                        remove: function(t, e) {
                            var n = o.indexOf(t, e); - 1 !== n && t.splice(n, 1)
                        }
                    },
                        t.exports = o
                },
                function(t, e, n) {
                    var r = n(22),
                        i = {},
                        a = {
                            draw: function() {}
                        },
                        o = {
                            defaultShapeType: null,
                            getShape: function(t, e) {
                                return this[t] || this[e] || this[this.defaultShapeType] || a
                            },
                            getExtendShape: function(t, e) {
                                var n = this;
                                if (r.isArray(t)) {
                                    var i = {};
                                    return t.forEach(function(t) {
                                        n[t] && (i = r.mix({},
                                            i, n.getShape(t, e)))
                                    }),
                                        i
                                }
                                return this.getShape(t, e)
                            }
                        };
                    i.registerShapeManager = function(t, e) {
                        var n = r.mix({},
                            o, e),
                            a = r.upperFirst(t);
                        return i[a] = n,
                            i["register" + a] = function(t, e, i, a) {
                                r.isNil(i) && r.isNil(a) && (i = t);
                                var o = n.getExtendShape(i, a),
                                    s = r.mix(!0, {},
                                        o, e);
                                return s.type = t,
                                    n[t] = s,
                                    s
                            },
                            n
                    },
                        t.exports = i
                },
                , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
                function(t, e, n) {
                    var r = n(17),
                        i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
                        a = /[^\s\,]+/gi;
                    t.exports = {
                        parseRadius: function(t) {
                            var e = 0,
                                n = 0,
                                i = 0,
                                a = 0;
                            return r.isArray(t) ? 1 === t.length ? e = n = i = a = t[0] : 2 === t.length ? (e = i = t[0], n = a = t[1]) : 3 === t.length ? (e = t[0], n = a = t[1], i = t[2]) : (e = t[0], n = t[1], i = t[2], a = t[3]) : e = n = i = a = t,
                                {
                                    r1: e,
                                    r2: n,
                                    r3: i,
                                    r4: a
                                }
                        },
                        parsePath: function(t) {
                            return t = t || [],
                                r.isArray(t) ? t: r.isString(t) ? (t = t.match(i), r.each(t,
                                    function(e, n) {
                                        if ((e = e.match(a))[0].length > 1) {
                                            var i = e[0].charAt(0);
                                            e.splice(1, 0, e[0].substr(1)),
                                                e[0] = i
                                        }
                                        r.each(e,
                                            function(t, n) {
                                                isNaN(t) || (e[n] = +t)
                                            }),
                                            t[n] = e
                                    }), t) : void 0
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(136);
                    t.exports = function(t) {
                        return r(t) ? "": t.toString()
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "String")
                    }
                },
                function(t, e, n) {
                    var r = n(383),
                        i = n(60);
                    t.exports = function(t) {
                        if (!r(t) || !i(t, "Object")) return ! 1;
                        if (null === Object.getPrototypeOf(t)) return ! 0;
                        for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                        return Object.getPrototypeOf(t) === e
                    }
                },
                function(t, e, n) {
                    var r = function(t) {
                        function e(e) {
                            var n;
                            return (n = t.call(this) || this).options = e,
                                n
                        }
                        return function(t, e) {
                            t.prototype = Object.create(e.prototype),
                                t.prototype.constructor = t,
                                t.__proto__ = e
                        } (e, t),
                            e.prototype.execute = function() {
                                var t = this,
                                    e = this.options;
                                this.roots.forEach(function(n) {
                                    t.layout(n, e).eachNode(function(t) {
                                        t.data.x = t.x + t.data.width / 2 + t.hgap,
                                            t.data.y = t.y + t.data.height / 2 + t.vgap
                                    })
                                })
                            },
                            e
                    } (n(386));
                    t.exports = r
                },
                function(t, e, n) { !
                    function(e, n) {
                        t.exports = n()
                    } ("undefined" != typeof self && self,
                        function() {
                            return function(t) {
                                var e = {};
                                function n(r) {
                                    if (e[r]) return e[r].exports;
                                    var i = e[r] = {
                                        i: r,
                                        l: !1,
                                        exports: {}
                                    };
                                    return t[r].call(i.exports, i, i.exports, n),
                                        i.l = !0,
                                        i.exports
                                }
                                return n.m = t,
                                    n.c = e,
                                    n.d = function(t, e, r) {
                                        n.o(t, e) || Object.defineProperty(t, e, {
                                            configurable: !1,
                                            enumerable: !0,
                                            get: r
                                        })
                                    },
                                    n.n = function(t) {
                                        var e = t && t.__esModule ?
                                            function() {
                                                return t.
                                                    default
                                            }:
                                            function() {
                                                return t
                                            };
                                        return n.d(e, "a", e),
                                            e
                                    },
                                    n.o = function(t, e) {
                                        return Object.prototype.hasOwnProperty.call(t, e)
                                    },
                                    n.p = "",
                                    n(n.s = 5)
                            } ([function(t, e, n) {
                                var r = n(7);
                                t.exports = {
                                    assign: r
                                }
                            },
                                function(t, e, n) {
                                    var r = n(3),
                                        i = function() {
                                            function t(t, e) {
                                                void 0 === e && (e = {});
                                                this.options = e,
                                                    this.rootNode = r(t, e)
                                            }
                                            return t.prototype.execute = function() {
                                                throw new Error("please override this method")
                                            },
                                                t
                                        } ();
                                    t.exports = i
                                },
                                function(t, e, n) {
                                    var r = n(4),
                                        i = ["LR", "RL", "TB", "BT", "H", "V"],
                                        a = ["LR", "RL", "H"],
                                        o = i[0];
                                    t.exports = function(t, e, n) {
                                        var s = e.direction || o;
                                        if (e.isHorizontal = function(t) {
                                                return a.indexOf(t) > -1
                                            } (s), s && -1 === i.indexOf(s)) throw new TypeError("Invalid direction: " + s);
                                        if (s === i[0]) n(t, e);
                                        else if (s === i[1]) n(t, e),
                                            t.right2left();
                                        else if (s === i[2]) n(t, e);
                                        else if (s === i[3]) n(t, e),
                                            t.bottom2top();
                                        else if (s === i[4] || s === i[5]) {
                                            var u = r(t, e),
                                                c = u.left,
                                                h = u.right;
                                            n(c, e),
                                                n(h, e),
                                                e.isHorizontal ? c.right2left() : c.bottom2top(),
                                                h.translate(c.x - h.x, c.y - h.y),
                                                t.x = c.x,
                                                t.y = h.y;
                                            var f = t.getBoundingBox();
                                            e.isHorizontal ? f.top < 0 && t.translate(0, -f.top) : f.left < 0 && t.translate( - f.left, 0)
                                        }
                                        return t.translate( - (t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)),
                                            t
                                    }
                                },
                                function(t, e, n) {
                                    var r = n(0),
                                        i = {
                                            getId: function(t) {
                                                return t.id || t.name
                                            },
                                            getHGap: function(t) {
                                                return t.hgap || 18
                                            },
                                            getVGap: function(t) {
                                                return t.vgap || 18
                                            },
                                            getChildren: function(t) {
                                                return t.children
                                            },
                                            getHeight: function(t) {
                                                return t.height || 36
                                            },
                                            getWidth: function(t) {
                                                var e = t.name || " ";
                                                return t.width || 18 * e.split("").length
                                            }
                                        };
                                    function a(t, e) {
                                        var n = this;
                                        if (n.vgap = n.hgap = 0, t instanceof a) return t;
                                        n.data = t;
                                        var r = e.getHGap(t),
                                            i = e.getVGap(t);
                                        return n.width = e.getWidth(t),
                                            n.height = e.getHeight(t),
                                            n.id = e.getId(t),
                                            n.x = n.y = 0,
                                            n.depth = 0,
                                        n.children || (n.children = []),
                                            n.addGap(r, i),
                                            n
                                    }
                                    r.assign(a.prototype, {
                                        isRoot: function() {
                                            return 0 === this.depth
                                        },
                                        isLeaf: function() {
                                            return 0 === this.children.length
                                        },
                                        addGap: function(t, e) {
                                            this.hgap += t,
                                                this.vgap += e,
                                                this.width += 2 * t,
                                                this.height += 2 * e
                                        },
                                        eachNode: function(t) {
                                            for (var e, n = [this]; e = n.pop();) t(e),
                                                n = n.concat(e.children)
                                        },
                                        DFTraverse: function(t) {
                                            this.eachNode(t)
                                        },
                                        BFTraverse: function(t) {
                                            for (var e, n = [this]; e = n.shift();) t(e),
                                                n = n.concat(e.children)
                                        },
                                        getBoundingBox: function() {
                                            var t = {
                                                left: Number.MAX_VALUE,
                                                top: Number.MAX_VALUE,
                                                width: 0,
                                                height: 0
                                            };
                                            return this.eachNode(function(e) {
                                                t.left = Math.min(t.left, e.x),
                                                    t.top = Math.min(t.top, e.y),
                                                    t.width = Math.max(t.width, e.x + e.width),
                                                    t.height = Math.max(t.height, e.y + e.height)
                                            }),
                                                t
                                        },
                                        translate: function(t, e) {
                                            void 0 === t && (t = 0),
                                            void 0 === e && (e = 0),
                                                this.eachNode(function(n) {
                                                    n.x += t,
                                                        n.y += e
                                                })
                                        },
                                        right2left: function() {
                                            var t = this.getBoundingBox();
                                            this.eachNode(function(e) {
                                                e.x = e.x - 2 * (e.x - t.left) - e.width
                                            }),
                                                this.translate(t.width, 0)
                                        },
                                        bottom2top: function() {
                                            var t = this.getBoundingBox();
                                            this.eachNode(function(e) {
                                                e.y = e.y - 2 * (e.y - t.top) - e.height
                                            }),
                                                this.translate(0, t.height)
                                        }
                                    }),
                                        t.exports = function(t, e, n) {
                                            void 0 === e && (e = {});
                                            var o, s = new a(t, e = r.assign({},
                                                i, e)),
                                                u = [s];
                                            if (!n && !t.collapsed) for (; o = u.pop();) if (!o.data.collapsed) {
                                                var c = e.getChildren(o.data),
                                                    h = c ? c.length: 0;
                                                if (o.children = new Array(h), c && h) for (var f = 0; f < h; f++) {
                                                    var l = new a(c[f], e);
                                                    o.children[f] = l,
                                                        u.push(l),
                                                        l.parent = o,
                                                        l.depth = o.depth + 1
                                                }
                                            }
                                            return s
                                        }
                                },
                                function(t, e, n) {
                                    var r = n(3);
                                    t.exports = function(t, e) {
                                        for (var n = r(t.data, e, !0), i = r(t.data, e, !0), a = t.children.length, o = Math.round(a / 2), s = e.getSide ||
                                                function(t, e) {
                                                    return e < o ? "right": "left"
                                                },
                                                 u = 0; u < a; u++) {
                                            var c = t.children[u];
                                            "right" === s(c, u) ? i.children.push(c) : n.children.push(c)
                                        }
                                        return n.eachNode(function(t) {
                                            t.isRoot() || (t.side = "left")
                                        }),
                                            i.eachNode(function(t) {
                                                t.isRoot() || (t.side = "right")
                                            }),
                                            {
                                                left: n,
                                                right: i
                                            }
                                    }
                                },
                                function(t, e, n) {
                                    var r = {
                                        compactBox: n(6),
                                        dendrogram: n(9),
                                        indented: n(11),
                                        mindmap: n(13)
                                    };
                                    t.exports = r
                                },
                                function(t, e, n) {
                                    var r = n(1),
                                        i = n(8),
                                        a = n(2),
                                        o = n(0),
                                        s = function(t) {
                                            function e() {
                                                return t.apply(this, arguments) || this
                                            }
                                            return function(t, e) {
                                                t.prototype = Object.create(e.prototype),
                                                    t.prototype.constructor = t,
                                                    t.__proto__ = e
                                            } (e, t),
                                                e.prototype.execute = function() {
                                                    return a(this.rootNode, this.options, i)
                                                },
                                                e
                                        } (r),
                                        u = {};
                                    t.exports = function(t, e) {
                                        return e = o.assign({},
                                            u, e),
                                            new s(t, e).execute()
                                    }
                                },
                                function(t, e) {
                                    function n(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
                                    }
                                    t.exports = function(t, e, r, i) {
                                        return e && n(t, e),
                                        r && n(t, r),
                                        i && n(t, i),
                                            t
                                    }
                                },
                                function(t, e) {
                                    function n(t, e, n, r) {
                                        void 0 === r && (r = []);
                                        var i = this;
                                        i.w = t || 0,
                                            i.h = e || 0,
                                            i.y = n || 0,
                                            i.x = 0,
                                            i.c = r || [],
                                            i.cs = r.length,
                                            i.prelim = 0,
                                            i.mod = 0,
                                            i.shift = 0,
                                            i.change = 0,
                                            i.tl = null,
                                            i.tr = null,
                                            i.el = null,
                                            i.er = null,
                                            i.msel = 0,
                                            i.mser = 0
                                    }
                                    function r(t, e) { !
                                        function t(e, n, r) {
                                            r ? e.y += n: e.x += n,
                                                e.children.forEach(function(e) {
                                                    t(e, n, r)
                                                })
                                        } (t, -
                                            function t(e, n) {
                                                var r = n ? e.y: e.x;
                                                return e.children.forEach(function(e) {
                                                    r = Math.min(t(e, n), r)
                                                }),
                                                    r
                                            } (t, e), e)
                                    }
                                    n.fromNode = function(t, e) {
                                        if (!t) return null;
                                        var r = [];
                                        return t.children.forEach(function(t) {
                                            r.push(n.fromNode(t, e))
                                        }),
                                            e ? new n(t.height, t.width, t.x, r) : new n(t.width, t.height, t.y, r)
                                    },
                                        t.exports = function(t, e) {
                                            void 0 === e && (e = {});
                                            var i = e.isHorizontal;
                                            function a(t) {
                                                0 === t.cs ? (t.el = t, t.er = t, t.msel = t.mser = 0) : (t.el = t.c[0].el, t.msel = t.c[0].msel, t.er = t.c[t.cs - 1].er, t.mser = t.c[t.cs - 1].mser)
                                            }
                                            function o(t, e, n) {
                                                for (var r = t.c[e - 1], i = r.mod, a = t.c[e], o = a.mod; null !== r && null !== a;) {
                                                    h(r) > n.low && (n = n.nxt);
                                                    var f = i + r.prelim + r.w - (o + a.prelim);
                                                    f > 0 && (o += f, s(t, e, n.index, f));
                                                    var l = h(r),
                                                        p = h(a);
                                                    l <= p && null !== (r = c(r)) && (i += r.mod),
                                                    l >= p && null !== (a = u(a)) && (o += a.mod)
                                                } ! r && a ?
                                                    function(t, e, n, r) {
                                                        var i = t.c[0].el;
                                                        i.tl = n;
                                                        var a = r - n.mod - t.c[0].msel;
                                                        i.mod += a,
                                                            i.prelim -= a,
                                                            t.c[0].el = t.c[e].el,
                                                            t.c[0].msel = t.c[e].msel
                                                    } (t, e, a, o) : r && !a &&
                                                    function(t, e, n, r) {
                                                        var i = t.c[e].er;
                                                        i.tr = n;
                                                        var a = r - n.mod - t.c[e].mser;
                                                        i.mod += a,
                                                            i.prelim -= a,
                                                            t.c[e].er = t.c[e - 1].er,
                                                            t.c[e].mser = t.c[e - 1].mser
                                                    } (t, e, r, i)
                                            }
                                            function s(t, e, n, r) {
                                                t.c[e].mod += r,
                                                    t.c[e].msel += r,
                                                    t.c[e].mser += r,
                                                    function(t, e, n, r) {
                                                        if (n !== e - 1) {
                                                            var i = e - n;
                                                            t.c[n + 1].shift += r / i,
                                                                t.c[e].shift -= r / i,
                                                                t.c[e].change -= r - r / i
                                                        }
                                                    } (t, e, n, r)
                                            }
                                            function u(t) {
                                                return 0 === t.cs ? t.tl: t.c[0]
                                            }
                                            function c(t) {
                                                return 0 === t.cs ? t.tr: t.c[t.cs - 1]
                                            }
                                            function h(t) {
                                                return t.y + t.h
                                            }
                                            function f(t, e, n) {
                                                for (; null !== n && t >= n.low;) n = n.nxt;
                                                return {
                                                    low: t,
                                                    index: e,
                                                    nxt: n
                                                }
                                            } !
                                                function t(e, n, r) {
                                                    void 0 === r && (r = 0),
                                                        n ? (e.x = r, r += e.width) : (e.y = r, r += e.height),
                                                        e.children.forEach(function(e) {
                                                            t(e, n, r)
                                                        })
                                                } (t, i);
                                            var l = n.fromNode(t, i);
                                            return function t(e) {
                                                if (0 !== e.cs) {
                                                    t(e.c[0]);
                                                    for (var n = f(h(e.c[0].el), 0, null), r = 1; r < e.cs; ++r) {
                                                        t(e.c[r]);
                                                        var i = h(e.c[r].er);
                                                        o(e, r, n),
                                                            n = f(i, r, n)
                                                    } !
                                                        function(t) {
                                                            t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2
                                                        } (e),
                                                        a(e)
                                                } else a(e)
                                            } (l),
                                                function t(e, n) {
                                                    n += e.mod,
                                                        e.x = e.prelim + n,
                                                        function(t) {
                                                            for (var e = 0,
                                                                     n = 0,
                                                                     r = 0; r < t.cs; r++) e += t.c[r].shift,
                                                                n += e + t.c[r].change,
                                                                t.c[r].mod += n
                                                        } (e);
                                                    for (var r = 0; r < e.cs; r++) t(e.c[r], n)
                                                } (l, 0),
                                                function t(e, n, r) {
                                                    r ? n.y = e.x: n.x = e.x,
                                                        e.c.forEach(function(e, i) {
                                                            t(e, n.children[i], r)
                                                        })
                                                } (l, t, i),
                                                r(t, i),
                                                t
                                        }
                                },
                                function(t, e, n) {
                                    var r = n(1),
                                        i = n(10),
                                        a = n(2),
                                        o = n(0),
                                        s = function(t) {
                                            function e() {
                                                return t.apply(this, arguments) || this
                                            }
                                            return function(t, e) {
                                                t.prototype = Object.create(e.prototype),
                                                    t.prototype.constructor = t,
                                                    t.__proto__ = e
                                            } (e, t),
                                                e.prototype.execute = function() {
                                                    return this.rootNode.width = 0,
                                                        a(this.rootNode, this.options, i)
                                                },
                                                e
                                        } (r),
                                        u = {};
                                    t.exports = function(t, e) {
                                        return e = o.assign({},
                                            u, e),
                                            new s(t, e).execute()
                                    }
                                },
                                function(t, e, n) {
                                    var r = n(0);
                                    var i = {
                                        isHorizontal: !0,
                                        nodeSep: 20,
                                        nodeSize: 20,
                                        rankSep: 200,
                                        subTreeSep: 10
                                    };
                                    t.exports = function(t, e) {
                                        void 0 === e && (e = {}),
                                            e = r.assign({},
                                                i, e);
                                        var n, a = 0;
                                        var o = function t(e) {
                                            if (!e) return null;
                                            e.width = 0,
                                            e.depth && e.depth > a && (a = e.depth);
                                            var n = e.children,
                                                r = n.length,
                                                i = new
                                                function(t, e) {
                                                    void 0 === t && (t = 0),
                                                    void 0 === e && (e = []);
                                                    var n = this;
                                                    n.x = n.y = 0,
                                                        n.leftChild = n.rightChild = null,
                                                        n.height = 0,
                                                        n.children = e
                                                } (e.height, []);
                                            return n.forEach(function(e, n) {
                                                var a = t(e);
                                                i.children.push(a),
                                                0 === n && (i.leftChild = a),
                                                n === r - 1 && (i.rightChild = a)
                                            }),
                                                i.originNode = e,
                                                i.isLeaf = e.isLeaf(),
                                                i
                                        } (t);
                                        return function t(e) {
                                            if (e.isLeaf || 0 === e.children.length) e.drawingDepth = a;
                                            else {
                                                var n = e.children.map(function(e) {
                                                        return t(e)
                                                    }),
                                                    r = Math.min.apply(null, n);
                                                e.drawingDepth = r - 1
                                            }
                                            return e.drawingDepth
                                        } (o),
                                            function t(r) {
                                                r.x = r.drawingDepth * e.rankSep,
                                                    r.isLeaf ? (r.y = 0, n && (r.y = n.y + n.height + e.nodeSep, r.originNode.parent !== n.originNode.parent && (r.y += e.subTreeSep)), n = r) : (r.children.forEach(function(e) {
                                                        t(e)
                                                    }), r.y = (r.leftChild.y + r.rightChild.y) / 2)
                                            } (o),
                                            function t(e, n, r) {
                                                r ? (n.x = e.x, n.y = e.y) : (n.x = e.y, n.y = e.x),
                                                    e.children.forEach(function(e, i) {
                                                        t(e, n.children[i], r)
                                                    })
                                            } (o, t, e.isHorizontal),
                                            t
                                    }
                                },
                                function(t, e, n) {
                                    var r = n(1),
                                        i = n(12),
                                        a = n(4),
                                        o = n(0),
                                        s = ["LR", "RL", "H"],
                                        u = s[0],
                                        c = function(t) {
                                            function e() {
                                                return t.apply(this, arguments) || this
                                            }
                                            return function(t, e) {
                                                t.prototype = Object.create(e.prototype),
                                                    t.prototype.constructor = t,
                                                    t.__proto__ = e
                                            } (e, t),
                                                e.prototype.execute = function() {
                                                    var t = this.options,
                                                        e = this.rootNode;
                                                    t.isHorizontal = !0;
                                                    var n = t.indent,
                                                        r = t.direction || u;
                                                    if (r && -1 === s.indexOf(r)) throw new TypeError("Invalid direction: " + r);
                                                    if (r === s[0]) i(e, n);
                                                    else if (r === s[1]) i(e, n),
                                                        e.right2left();
                                                    else if (r === s[2]) {
                                                        var o = a(e, t),
                                                            c = o.left,
                                                            h = o.right;
                                                        i(c, n),
                                                            c.right2left(),
                                                            i(h, n);
                                                        var f = c.getBoundingBox();
                                                        h.translate(f.width, 0),
                                                            e.x = h.x - e.width / 2
                                                    }
                                                    return e
                                                },
                                                e
                                        } (r),
                                        h = {};
                                    t.exports = function(t, e) {
                                        return e = o.assign({},
                                            h, e),
                                            new c(t, e).execute()
                                    }
                                },
                                function(t, e) {
                                    t.exports = function(t, e) {
                                        void 0 === e && (e = 20);
                                        var n = null;
                                        t.eachNode(function(t) { !
                                            function(t, e, n) {
                                                t.x += n * t.depth,
                                                    t.y = e ? e.y + e.height: 0
                                            } (t, n, e),
                                            n = t
                                        })
                                    }
                                },
                                function(t, e, n) {
                                    var r = n(1),
                                        i = n(14),
                                        a = n(2),
                                        o = n(0),
                                        s = function(t) {
                                            function e() {
                                                return t.apply(this, arguments) || this
                                            }
                                            return function(t, e) {
                                                t.prototype = Object.create(e.prototype),
                                                    t.prototype.constructor = t,
                                                    t.__proto__ = e
                                            } (e, t),
                                                e.prototype.execute = function() {
                                                    return a(this.rootNode, this.options, i)
                                                },
                                                e
                                        } (r),
                                        u = {};
                                    t.exports = function(t, e) {
                                        return e = o.assign({},
                                            u, e),
                                            new s(t, e).execute()
                                    }
                                },
                                function(t, e, n) {
                                    var r = n(0);
                                    var i = {
                                        getSubTreeSep: function() {
                                            return 0
                                        }
                                    };
                                    t.exports = function(t, e) {
                                        void 0 === e && (e = {}),
                                            e = r.assign({},
                                                i, e),
                                            t.parent = {
                                                x: 0,
                                                width: 0,
                                                height: 0,
                                                y: 0
                                            },
                                            t.BFTraverse(function(t) {
                                                t.x = t.parent.x + t.parent.width
                                            }),
                                            t.parent = null,
                                            function t(e, n) {
                                                var r = 0;
                                                return e.children.length ? e.children.forEach(function(e) {
                                                    r += t(e, n)
                                                }) : r = e.height,
                                                    e._subTreeSep = n.getSubTreeSep(e.data),
                                                    e.totalHeight = Math.max(e.height, r) + 2 * e._subTreeSep,
                                                    e.totalHeight
                                            } (t, e),
                                            t.startY = 0,
                                            t.y = t.totalHeight / 2 - t.height / 2,
                                            t.eachNode(function(t) {
                                                var e = t.children,
                                                    n = e.length;
                                                if (n) {
                                                    var r = e[0];
                                                    if (r.startY = t.startY + t._subTreeSep, 1 === n) r.y = t.y + t.height / 2 - r.height / 2;
                                                    else {
                                                        r.y = r.startY + r.totalHeight / 2 - r.height / 2;
                                                        for (var i = 1; i < n; i++) {
                                                            var a = e[i];
                                                            a.startY = e[i - 1].startY + e[i - 1].totalHeight,
                                                                a.y = a.startY + a.totalHeight / 2 - a.height / 2
                                                        }
                                                    }
                                                }
                                            }),
                                            function t(e) {
                                                var n = e.children,
                                                    r = n.length;
                                                if (r) {
                                                    n.forEach(function(e) {
                                                        t(e)
                                                    });
                                                    var i = n[0],
                                                        a = n[r - 1],
                                                        o = a.y - i.y + a.height,
                                                        s = 0;
                                                    if (n.forEach(function(t) {
                                                            s += t.totalHeight
                                                        }), o > e.height) e.y = i.y + o / 2 - e.height / 2;
                                                    else if (1 !== n.length || e.height > s) {
                                                        var u = e.y + (e.height - o) / 2 - i.y;
                                                        n.forEach(function(t) {
                                                            t.translate(0, u)
                                                        })
                                                    } else e.y = (i.y + i.height / 2 + a.y + a.height / 2) / 2 - e.height / 2
                                                }
                                            } (t)
                                    }
                                }])
                        })
                },
                function(t, e, n) {
                    var r = n(22),
                        i = function() {
                            var t = e.prototype;
                            function e(t) {
                                var e = this.getDefaultCfg();
                                r.mix(this, e, t),
                                    this._init()
                            }
                            return t.getDefaultCfg = function() {
                                return {}
                            },
                                t._init = function() {},
                                t.destroy = function() {},
                                e
                        } ();
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(376),
                        a = n(375),
                        o = n(404),
                        s = n(403),
                        u = r.vec3,
                        c = r.mat3,
                        h = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"];
                    function f(t, e, n) {
                        return {
                            x: n.x + t,
                            y: n.y + e
                        }
                    }
                    function l(t, e) {
                        return {
                            x: e.x + (e.x - t.x),
                            y: e.y + (e.y - t.y)
                        }
                    }
                    function p(t) {
                        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                    }
                    function d(t, e) {
                        return (t[0] * e[0] + t[1] * e[1]) / (p(t) * p(e))
                    }
                    function g(t, e) {
                        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(d(t, e))
                    }
                    var v = function(t, e, n) {
                        this.preSegment = e,
                            this.isLast = n,
                            this.init(t, e)
                    };
                    r.augment(v, {
                        init: function(t, e) {
                            var n = t[0];
                            e = e || {
                                    endPoint: {
                                        x: 0,
                                        y: 0
                                    }
                                };
                            var i, a, o, s, u = h.indexOf(n) >= 0,
                                c = u ? n.toUpperCase() : n,
                                p = t,
                                v = e.endPoint,
                                m = p[1],
                                x = p[2];
                            switch (c) {
                                default:
                                    break;
                                case "M":
                                    s = u ? f(m, x, v) : {
                                        x: m,
                                        y: x
                                    },
                                        this.command = "M",
                                        this.params = [v, s],
                                        this.subStart = s,
                                        this.endPoint = s;
                                    break;
                                case "L":
                                    s = u ? f(m, x, v) : {
                                        x: m,
                                        y: x
                                    },
                                        this.command = "L",
                                        this.params = [v, s],
                                        this.subStart = e.subStart,
                                        this.endPoint = s,
                                        this.endTangent = function() {
                                            return [s.x - v.x, s.y - v.y]
                                        },
                                        this.startTangent = function() {
                                            return [v.x - s.x, v.y - s.y]
                                        };
                                    break;
                                case "H":
                                    s = u ? f(m, 0, v) : {
                                        x: m,
                                        y: v.y
                                    },
                                        this.command = "L",
                                        this.params = [v, s],
                                        this.subStart = e.subStart,
                                        this.endPoint = s,
                                        this.endTangent = function() {
                                            return [s.x - v.x, s.y - v.y]
                                        },
                                        this.startTangent = function() {
                                            return [v.x - s.x, v.y - s.y]
                                        };
                                    break;
                                case "V":
                                    s = u ? f(0, m, v) : {
                                        x: v.x,
                                        y: m
                                    },
                                        this.command = "L",
                                        this.params = [v, s],
                                        this.subStart = e.subStart,
                                        this.endPoint = s,
                                        this.endTangent = function() {
                                            return [s.x - v.x, s.y - v.y]
                                        },
                                        this.startTangent = function() {
                                            return [v.x - s.x, v.y - s.y]
                                        };
                                    break;
                                case "Q":
                                    u ? (i = f(m, x, v), a = f(p[3], p[4], v)) : (i = {
                                        x: m,
                                        y: x
                                    },
                                        a = {
                                            x: p[3],
                                            y: p[4]
                                        }),
                                        this.command = "Q",
                                        this.params = [v, i, a],
                                        this.subStart = e.subStart,
                                        this.endPoint = a,
                                        this.endTangent = function() {
                                            return [a.x - i.x, a.y - i.y]
                                        },
                                        this.startTangent = function() {
                                            return [v.x - i.x, v.y - i.y]
                                        };
                                    break;
                                case "T":
                                    a = u ? f(m, x, v) : {
                                        x: m,
                                        y: x
                                    },
                                        "Q" === e.command ? (i = l(e.params[1], v), this.command = "Q", this.params = [v, i, a], this.subStart = e.subStart, this.endPoint = a, this.endTangent = function() {
                                            return [a.x - i.x, a.y - i.y]
                                        },
                                            this.startTangent = function() {
                                                return [v.x - i.x, v.y - i.y]
                                            }) : (this.command = "TL", this.params = [v, a], this.subStart = e.subStart, this.endPoint = a, this.endTangent = function() {
                                            return [a.x - v.x, a.y - v.y]
                                        },
                                            this.startTangent = function() {
                                                return [v.x - a.x, v.y - a.y]
                                            });
                                    break;
                                case "C":
                                    u ? (i = f(m, x, v), a = f(p[3], p[4], v), o = f(p[5], p[6], v)) : (i = {
                                        x: m,
                                        y: x
                                    },
                                        a = {
                                            x: p[3],
                                            y: p[4]
                                        },
                                        o = {
                                            x: p[5],
                                            y: p[6]
                                        }),
                                        this.command = "C",
                                        this.params = [v, i, a, o],
                                        this.subStart = e.subStart,
                                        this.endPoint = o,
                                        this.endTangent = function() {
                                            return [o.x - a.x, o.y - a.y]
                                        },
                                        this.startTangent = function() {
                                            return [v.x - i.x, v.y - i.y]
                                        };
                                    break;
                                case "S":
                                    u ? (a = f(m, x, v), o = f(p[3], p[4], v)) : (a = {
                                        x: m,
                                        y: x
                                    },
                                        o = {
                                            x: p[3],
                                            y: p[4]
                                        }),
                                        "C" === e.command ? (i = l(e.params[2], v), this.command = "C", this.params = [v, i, a, o], this.subStart = e.subStart, this.endPoint = o, this.endTangent = function() {
                                            return [o.x - a.x, o.y - a.y]
                                        },
                                            this.startTangent = function() {
                                                return [v.x - i.x, v.y - i.y]
                                            }) : (this.command = "SQ", this.params = [v, a, o], this.subStart = e.subStart, this.endPoint = o, this.endTangent = function() {
                                            return [o.x - a.x, o.y - a.y]
                                        },
                                            this.startTangent = function() {
                                                return [v.x - a.x, v.y - a.y]
                                            });
                                    break;
                                case "A":
                                    var y = m,
                                        b = x,
                                        M = p[3],
                                        w = p[4],
                                        _ = p[5];
                                    s = u ? f(p[6], p[7], v) : {
                                        x: p[6],
                                        y: p[7]
                                    },
                                        this.command = "A";
                                    var E = function(t, e, n, i, a, o, s) {
                                        var u = r.mod(r.toRadian(s), 2 * Math.PI),
                                            c = t.x,
                                            h = t.y,
                                            f = e.x,
                                            l = e.y,
                                            p = Math.cos(u) * (c - f) / 2 + Math.sin(u) * (h - l) / 2,
                                            v = -1 * Math.sin(u) * (c - f) / 2 + Math.cos(u) * (h - l) / 2,
                                            m = p * p / (a * a) + v * v / (o * o);
                                        m > 1 && (a *= Math.sqrt(m), o *= Math.sqrt(m));
                                        var x = a * a * (v * v) + o * o * (p * p),
                                            y = Math.sqrt((a * a * (o * o) - x) / x);
                                        n === i && (y *= -1),
                                        isNaN(y) && (y = 0);
                                        var b = y * a * v / o,
                                            M = y * -o * p / a,
                                            w = (c + f) / 2 + Math.cos(u) * b - Math.sin(u) * M,
                                            _ = (h + l) / 2 + Math.sin(u) * b + Math.cos(u) * M,
                                            E = g([1, 0], [(p - b) / a, (v - M) / o]),
                                            A = [(p - b) / a, (v - M) / o],
                                            S = [( - 1 * p - b) / a, ( - 1 * v - M) / o],
                                            P = g(A, S);
                                        return d(A, S) <= -1 && (P = Math.PI),
                                        d(A, S) >= 1 && (P = 0),
                                        0 === i && P > 0 && (P -= 2 * Math.PI),
                                        1 === i && P < 0 && (P += 2 * Math.PI),
                                            [t, w, _, a, o, E, P, u, i]
                                    } (v, s, w, _, y, b, M);
                                    this.params = E;
                                    var A = e.subStart;
                                    this.subStart = A,
                                        this.endPoint = s;
                                    var S = E[5] % (2 * Math.PI);
                                    r.isNumberEqual(S, 2 * Math.PI) && (S = 0);
                                    var P = E[6] % (2 * Math.PI);
                                    r.isNumberEqual(P, 2 * Math.PI) && (P = 0);
                                    var O = .001;
                                    this.startTangent = function() {
                                        0 === _ && (O *= -1);
                                        var t = E[3] * Math.cos(S - O) + E[1],
                                            e = E[4] * Math.sin(S - O) + E[2];
                                        return [t - A.x, e - A.y]
                                    },
                                        this.endTangent = function() {
                                            var t = E[6];
                                            t - 2 * Math.PI < 1e-4 && (t = 0);
                                            var e = E[3] * Math.cos(S + t + O) + E[1],
                                                n = E[4] * Math.sin(S + t - O) + E[2];
                                            return [v.x - e, v.y - n]
                                        };
                                    break;
                                case "Z":
                                    this.command = "Z",
                                        this.params = [v, e.subStart],
                                        this.subStart = e.subStart,
                                        this.endPoint = e.subStart
                            }
                        },
                        isInside: function(t, e, n) {
                            var r = this.command,
                                a = this.params,
                                o = this.box;
                            if (o && !i.box(o.minX, o.maxX, o.minY, o.maxY, t, e)) return ! 1;
                            switch (r) {
                                default:
                                    break;
                                case "M":
                                    return ! 1;
                                case "TL":
                                case "L":
                                case "Z":
                                    return i.line(a[0].x, a[0].y, a[1].x, a[1].y, n, t, e);
                                case "SQ":
                                case "Q":
                                    return i.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, n, t, e);
                                case "C":
                                    return i.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, n, t, e);
                                case "A":
                                    var s = a,
                                        h = s[1],
                                        f = s[2],
                                        l = s[3],
                                        p = s[4],
                                        d = s[5],
                                        g = s[6],
                                        v = s[7],
                                        m = s[8],
                                        x = l > p ? l: p,
                                        y = l > p ? 1 : l / p,
                                        b = l > p ? p / l: 1;
                                    s = [t, e, 1];
                                    var M = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                                    return c.translate(M, M, [ - h, -f]),
                                        c.rotate(M, M, -v),
                                        c.scale(M, M, [1 / y, 1 / b]),
                                        u.transformMat3(s, s, M),
                                        i.arcline(0, 0, x, d, d + g, 1 - m, n, s[0], s[1])
                            }
                            return ! 1
                        },
                        draw: function(t) {
                            var e, n, r, i = this.command,
                                a = this.params;
                            switch (i) {
                                default:
                                    break;
                                case "M":
                                    t.moveTo(a[1].x, a[1].y);
                                    break;
                                case "TL":
                                case "L":
                                    t.lineTo(a[1].x, a[1].y);
                                    break;
                                case "SQ":
                                case "Q":
                                    e = a[1],
                                        n = a[2],
                                        t.quadraticCurveTo(e.x, e.y, n.x, n.y);
                                    break;
                                case "C":
                                    e = a[1],
                                        n = a[2],
                                        r = a[3],
                                        t.bezierCurveTo(e.x, e.y, n.x, n.y, r.x, r.y);
                                    break;
                                case "A":
                                    var o = a,
                                        s = o[1],
                                        u = o[2],
                                        c = o[3],
                                        h = o[4],
                                        f = o[5],
                                        l = o[6],
                                        p = o[7],
                                        d = o[8],
                                        g = c > h ? c: h,
                                        v = c > h ? 1 : c / h,
                                        m = c > h ? h / c: 1;
                                    t.translate(s, u),
                                        t.rotate(p),
                                        t.scale(v, m),
                                        t.arc(0, 0, g, f, f + l, 1 - d),
                                        t.scale(1 / v, 1 / m),
                                        t.rotate( - p),
                                        t.translate( - s, -u);
                                    break;
                                case "Z":
                                    t.closePath()
                            }
                        },
                        getBBox: function(t) {
                            var e, n, r, i, u = t / 2,
                                c = this.params;
                            switch (this.command) {
                                default:
                                case "M":
                                case "Z":
                                    break;
                                case "TL":
                                case "L":
                                    this.box = {
                                        minX: Math.min(c[0].x, c[1].x) - u,
                                        maxX: Math.max(c[0].x, c[1].x) + u,
                                        minY: Math.min(c[0].y, c[1].y) - u,
                                        maxY: Math.max(c[0].y, c[1].y) + u
                                    };
                                    break;
                                case "SQ":
                                case "Q":
                                    for (r = 0, i = (n = o.extrema(c[0].x, c[1].x, c[2].x)).length; r < i; r++) n[r] = o.at(c[0].x, c[1].x, c[2].x, n[r]);
                                    for (n.push(c[0].x, c[2].x), r = 0, i = (e = o.extrema(c[0].y, c[1].y, c[2].y)).length; r < i; r++) e[r] = o.at(c[0].y, c[1].y, c[2].y, e);
                                    e.push(c[0].y, c[2].y),
                                        this.box = {
                                            minX: Math.min.apply(Math, n) - u,
                                            maxX: Math.max.apply(Math, n) + u,
                                            minY: Math.min.apply(Math, e) - u,
                                            maxY: Math.max.apply(Math, e) + u
                                        };
                                    break;
                                case "C":
                                    for (r = 0, i = (n = a.extrema(c[0].x, c[1].x, c[2].x, c[3].x)).length; r < i; r++) n[r] = a.at(c[0].x, c[1].x, c[2].x, c[3].x, n[r]);
                                    for (r = 0, i = (e = a.extrema(c[0].y, c[1].y, c[2].y, c[3].y)).length; r < i; r++) e[r] = a.at(c[0].y, c[1].y, c[2].y, c[3].y, e[r]);
                                    n.push(c[0].x, c[3].x),
                                        e.push(c[0].y, c[3].y),
                                        this.box = {
                                            minX: Math.min.apply(Math, n) - u,
                                            maxX: Math.max.apply(Math, n) + u,
                                            minY: Math.min.apply(Math, e) - u,
                                            maxY: Math.max.apply(Math, e) + u
                                        };
                                    break;
                                case "A":
                                    var h = c,
                                        f = h[1],
                                        l = h[2],
                                        p = h[3],
                                        d = h[4],
                                        g = h[5],
                                        v = h[6],
                                        m = h[7],
                                        x = h[8],
                                        y = g,
                                        b = g + v,
                                        M = s.xExtrema(m, p, d),
                                        w = 1 / 0,
                                        _ = -1 / 0,
                                        E = [y, b];
                                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                                        var A = M + r;
                                        1 === x ? y < A && A < b && E.push(A) : b < A && A < y && E.push(A)
                                    }
                                    for (r = 0, i = E.length; r < i; r++) {
                                        var S = s.xAt(m, p, d, f, E[r]);
                                        S < w && (w = S),
                                        S > _ && (_ = S)
                                    }
                                    var P = s.yExtrema(m, p, d),
                                        O = 1 / 0,
                                        C = -1 / 0,
                                        I = [y, b];
                                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                                        var T = P + r;
                                        1 === x ? y < T && T < b && I.push(T) : b < T && T < y && I.push(T)
                                    }
                                    for (r = 0, i = I.length; r < i; r++) {
                                        var k = s.yAt(m, p, d, l, I[r]);
                                        k < O && (O = k),
                                        k > C && (C = k)
                                    }
                                    this.box = {
                                        minX: w - u,
                                        maxX: _ + u,
                                        minY: O - u,
                                        maxY: C + u
                                    }
                            }
                        }
                    }),
                        t.exports = v
                },
                function(t, e, n) {
                    var r = n(356),
                        i = n(363),
                        a = Math.PI,
                        o = Math.sin,
                        s = Math.cos,
                        u = Math.atan2,
                        c = 10,
                        h = a / 3;
                    function f(t, e, n, r, i, f, l) {
                        var p, d, g, v, m, x, y;
                        if (!e.fill) {
                            var b = e.arrowLength || c,
                                M = e.arrowAngle ? e.arrowAngle * a / 180 : h;
                            y = u(r - f, n - i),
                                m = Math.abs(e.lineWidth * s(y)) / 2,
                                x = Math.abs(e.lineWidth * o(y)) / 2,
                            l && (m = -m, x = -x),
                                p = i + b * s(y + M / 2),
                                d = f + b * o(y + M / 2),
                                g = i + b * s(y - M / 2),
                                v = f + b * o(y - M / 2),
                                t.beginPath(),
                                t.moveTo(p - m, d - x),
                                t.lineTo(i - m, f - x),
                                t.lineTo(g - m, v - x),
                                t.moveTo(i - m, f - x),
                                t.lineTo(i + m, f + x),
                                t.moveTo(i, f),
                                t.stroke()
                        }
                    }
                    function l(t, e, n, a, o, s, u) {
                        var c = u ? e.startArrow: e.endArrow,
                            h = c.d,
                            f = 0,
                            l = o - n,
                            p = s - a,
                            d = Math.atan(l / p);
                        0 === p && l < 0 ? f = Math.PI: l > 0 && p > 0 ? f = Math.PI / 2 - d: l < 0 && p < 0 ? f = -Math.PI / 2 - d: l >= 0 && p < 0 ? f = -d - Math.PI / 2 : l <= 0 && p > 0 && (f = Math.PI / 2 - d);
                        var g = function(t) {
                            var e, n = [],
                                a = r.parsePath(t.path);
                            if (!Array.isArray(a) || 0 === a.length || "M" !== a[0][0] && "m" !== a[0][0]) return ! 1;
                            for (var o = a.length,
                                     s = 0; s < a.length; s++) {
                                var u = a[s];
                                e = new i(u, e, s === o - 1),
                                    n.push(e)
                            }
                            return n
                        } (c);
                        if (g) {
                            h && (u ? (o += Math.sin(Math.abs(d)) * h, s = s + Math.cos(Math.abs(d)) * h - .5 * t.lineWidth) : (o -= Math.sin(Math.abs(d)) * h, s = s - Math.cos(Math.abs(d)) * h + .5 * t.lineWidth)),
                                t.save(),
                                t.beginPath(),
                                t.translate(o, s),
                                t.rotate(f);
                            for (var v = 0; v < g.length; v++) g[v].draw(t);
                            t.setTransform(1, 0, 0, 1, 0, 0),
                                t.fillStyle = t.strokeStyle,
                                t.fill(),
                                t.restore()
                        }
                    }
                    t.exports = {
                        addStartArrow: function(t, e, n, r, i, a) {
                            "object" == typeof e.startArrow ? l(t, e, n, r, i, a, !0) : e.startArrow && f(t, e, n, r, i, a, !0)
                        },
                        addEndArrow: function(t, e, n, r, i, a) {
                            "object" == typeof e.endArrow ? l(t, e, n, r, i, a, !1) : e.endArrow && f(t, e, n, r, i, a, !1)
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17);
                    function i(t, e, n, r) {
                        return {
                            x: Math.cos(r) * n + t,
                            y: Math.sin(r) * n + e
                        }
                    }
                    function a(t, e, n, r) {
                        var i, a;
                        return r ? t < e ? (i = e - t, a = 2 * Math.PI - n + t) : t > n && (i = 2 * Math.PI - t + e, a = t - n) : (i = t - e, a = n - t),
                            i > a ? n: e
                    }
                    function o(t, e, n, i) {
                        var o = 0;
                        return n - e >= 2 * Math.PI && (o = 2 * Math.PI),
                            e = r.mod(e, 2 * Math.PI),
                            n = r.mod(n, 2 * Math.PI) + o,
                            t = r.mod(t, 2 * Math.PI),
                            i ? e >= n ? t > n && t < e ? t: a(t, n, e, !0) : t < e || t > n ? t: a(t, e, n) : e <= n ? e < t && t < n ? t: a(t, e, n, !0) : t > e || t < n ? t: a(t, n, e)
                    }
                    function s(t, e, n, i, a, s, u, c, h) {
                        var f = [u, c],
                            l = [t, e],
                            p = r.vec2.subtract([], f, l),
                            d = r.vec2.angleTo([1, 0], p);
                        d = o(d, i, a, s);
                        var g = [n * Math.cos(d) + t, n * Math.sin(d) + e];
                        return h && (h.x = g[0], h.y = g[1]),
                            r.vec2.distance(g, f)
                    }
                    t.exports = {
                        nearAngle: o,
                        projectPoint: function(t, e, n, r, i, a, o, u) {
                            var c = {};
                            return s(t, e, n, r, i, a, o, u, c),
                                c
                        },
                        pointDistance: s,
                        box: function(t, e, n, a, s, u) {
                            var c = Math.PI / 2,
                                h = Math.PI,
                                f = 3 * Math.PI / 2,
                                l = [],
                                p = o(0, a, s, u);
                            0 === p && l.push(i(t, e, n, 0)),
                            (p = o(c, a, s, u)) === c && l.push(i(t, e, n, c)),
                            (p = o(h, a, s, u)) === h && l.push(i(t, e, n, h)),
                            (p = o(f, a, s, u)) === f && l.push(i(t, e, n, f)),
                                l.push(i(t, e, n, a)),
                                l.push(i(t, e, n, s));
                            var d = 1 / 0,
                                g = -1 / 0,
                                v = 1 / 0,
                                m = -1 / 0;
                            return r.each(l,
                                function(t) {
                                    d > t.x && (d = t.x),
                                    g < t.x && (g = t.x),
                                    v > t.y && (v = t.y),
                                    m < t.y && (m = t.y)
                                }),
                                {
                                    minX: d,
                                    minY: v,
                                    maxX: g,
                                    maxY: m
                                }
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17).vec2;
                    t.exports = {
                        at: function(t, e, n) {
                            return (e - t) * n + t
                        },
                        pointDistance: function(t, e, n, i, a, o) {
                            var s = [n - t, i - e];
                            if (r.exactEquals(s, [0, 0])) return NaN;
                            var u = [ - s[1], s[0]];
                            r.normalize(u, u);
                            var c = [a - t, o - e];
                            return Math.abs(r.dot(c, u))
                        },
                        box: function(t, e, n, r, i) {
                            var a = i / 2,
                                o = Math.min(t, n),
                                s = Math.max(t, n);
                            return {
                                minX: o - a,
                                minY: Math.min(e, r) - a,
                                maxX: s + a,
                                maxY: Math.max(e, r) + a
                            }
                        },
                        len: function(t, e, n, r) {
                            return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e))
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(62);
                    t.exports = function(t) {
                        return r(t) ? Array.prototype.slice.call(t) : []
                    }
                },
                function(t, e, n) {
                    var r = n(62),
                        i = Array.prototype.indexOf;
                    t.exports = function(t, e) {
                        return !! r(t) && i.call(t, e) > -1
                    }
                },
                function(t, e) {
                    function n(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
                    }
                    t.exports = function(t, e, r, i) {
                        return e && n(t, e),
                        r && n(t, r),
                        i && n(t, i),
                            t
                    }
                },
                ,
                function(t, e, n) {
                    var r = n(22);
                    var i = function() {
                        function t(t) {
                            r.mix(this, {
                                    id: "",
                                    type: null,
                                    model: {},
                                    group: null,
                                    animate: !1,
                                    modelCache: {},
                                    isItem: !0,
                                    visible: !0
                                },
                                t),
                                this._init()
                        }
                        var e = t.prototype;
                        return e._init = function() {
                            this._initGroup(),
                                this.draw()
                        },
                            e._mapping = function() {
                                var t = this.mapper,
                                    e = this.model;
                                t.mapping(e)
                            },
                            e._initGroup = function() {
                                var t = this.group,
                                    e = this.model,
                                    n = this.type;
                                t.isItemContainer = !0,
                                    t.id = e.id,
                                    t.itemType = n,
                                    t.model = e,
                                    t.item = this
                            },
                            e._calculateBBox = function() {
                                var t = this.keyShape,
                                    e = this.group,
                                    n = r.getBBox(t, e);
                                return n.width = n.maxX - n.minX,
                                    n.height = n.maxY - n.minY,
                                    n.centerX = (n.minX + n.maxX) / 2,
                                    n.centerY = (n.minY + n.maxY) / 2,
                                    n
                            },
                            e.getLabel = function() {
                                return this.group.findByClass("label")[0]
                            },
                            e.getGraph = function() {
                                return this.graph
                            },
                            e._setShapeObj = function() {
                                var t = this.graph,
                                    e = this.type,
                                    n = this.getModel();
                                this.shapeObj = t.getShapeObj(e, n)
                            },
                            e._afterDraw = function() {
                                var t = this.graph;
                                this._setGId(),
                                    this._cacheModel(),
                                    t.emit("afteritemdraw", {
                                        item: this
                                    })
                            },
                            e._cacheModel = function() {
                                this.modelCache = r.mix({},
                                    this.model)
                            },
                            e._setGId = function() {
                                var t = this.group,
                                    e = this.id,
                                    n = this.type;
                                t.gid = e,
                                    t.deepEach(function(t, r, i) {
                                        var a = r.gid;
                                        if (t.id = e, t.eventPreFix = n, t.gid = a + "-" + i, t.isShape) {
                                            var o = t.get("type");
                                            t.gid += "-" + o
                                        }
                                    })
                            },
                            e._beforeDraw = function() {
                                var t = this.graph,
                                    e = this.group;
                                t.emit("beforeitemdraw", {
                                    item: this
                                }),
                                    e.resetMatrix(),
                                    this.updateCollapsedParent()
                            },
                            e._shouldDraw = function() {
                                return ! 0
                            },
                            e._getDiff = function() {
                                var t = [],
                                    e = this.model,
                                    n = this.modelCache;
                                return r.each(e,
                                    function(e, i) {
                                        r.isEqual(e, n[i]) || t.push(i)
                                    }),
                                0 !== t.length && t
                            },
                            e._drawInner = function() {
                                var t = this.animate;
                                this.group.clear(!t),
                                    this._mapping(),
                                    this._setShapeObj();
                                var e = this.shapeObj,
                                    n = e.draw(this);
                                n && (n.isKeyShape = !0, this.keyShape = n),
                                e.afterDraw && e.afterDraw(this)
                            },
                            e.deepEach = function(t, e) {
                                r.traverseTree(this, t, e ||
                                    function(t) {
                                        return t.getChildren()
                                    })
                            },
                            e.getShapeObj = function() {
                                return this.shapeObj
                            },
                            e.updateCollapsedParent = function() {
                                var t = this.dataMap;
                                this.collapsedParent = function t(e, n) {
                                    var r = n[e.parent];
                                    if (!r) return ! 1;
                                    if (r) {
                                        var i = t(r, n);
                                        if (i) return i
                                    }
                                    return r.collapsed ? r: void 0
                                } (this.model, t)
                            },
                            e.isVisible = function() {
                                return this.visible
                            },
                            e.hide = function() {
                                var t = this.group,
                                    e = this.graph;
                                e.emit("beforeitemhide", {
                                    item: this
                                }),
                                    t.hide(),
                                    this.visible = !1,
                                    e.emit("afteritemhide", {
                                        item: this
                                    })
                            },
                            e.show = function() {
                                var t = this.group,
                                    e = this.graph;
                                e.emit("beforeitemshow", {
                                    item: this
                                }),
                                    t.show(),
                                    this.visible = !0,
                                    e.emit("afteritemshow", {
                                        item: this
                                    })
                            },
                            e.draw = function() {
                                this._beforeDraw(),
                                this._shouldDraw() && this._drawInner(),
                                    this._afterDraw()
                            },
                            e.forceUpdate = function() {
                                this._beforeDraw(),
                                    this._drawInner(),
                                    this._afterDraw()
                            },
                            e.getCenter = function() {
                                var t = this.getBBox();
                                return {
                                    x: t.centerX,
                                    y: t.centerY
                                }
                            },
                            e.getBBox = function() {
                                return this.bbox || this._calculateBBox()
                            },
                            e.layoutUpdate = function() {
                                this.isVisible() && this.draw()
                            },
                            e.update = function() {
                                this.draw()
                            },
                            e.getModel = function() {
                                return this.model
                            },
                            e.getKeyShape = function() {
                                return this.keyShape
                            },
                            e.getGraphicGroup = function() {
                                return this.group
                            },
                            e.getHierarchy = function() {
                                return this.graph.getHierarchy(this)
                            },
                            e.getParent = function() {
                                var t = this.model;
                                return this.itemMap[t.parent]
                            },
                            e.getAllParents = function() {
                                for (var t = this.model,
                                         e = this.itemMap,
                                         n = [], r = t.parent; r && e[r];) {
                                    var i = e[r],
                                        a = i.getModel();
                                    n.push(i),
                                        r = a.parent
                                }
                                return n
                            },
                            e.getAllChildren = function() {
                                var t = [];
                                return this.deepEach(function(e) {
                                    t.push(e)
                                }),
                                    t
                            },
                            e.getChildren = function() {
                                var t = this.id;
                                return this.graph.getItems().filter(function(e) {
                                    return e.model.parent === t
                                })
                            },
                            e.toFront = function() {
                                this.group.toFront()
                            },
                            e.toBack = function() {
                                this.group.toBack()
                            },
                            e.destroy = function() {
                                if (!this.destroyed) {
                                    var t = this.animate,
                                        e = this.graph;
                                    e.emit("beforeitemdestroy", {
                                        item: this
                                    }),
                                        this.group.remove(!t),
                                        this.destroyed = !0,
                                        e.emit("afteritemdestroy", {
                                            item: this
                                        })
                                }
                            },
                            t
                    } ();
                    t.exports = i
                },
                function(t, e) {
                    t.exports = "2.2.0"
                },
                function(t, e, n) {
                    var r = n(408),
                        i = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029",
                        a = new RegExp("([a-z])[" + i + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + i + "]*,?[" + i + "]*)+)", "ig"),
                        o = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + i + "]*,?[" + i + "]*", "ig"),
                        s = function(t) {
                            if (!t) return null;
                            if (typeof t == typeof[]) return t;
                            var e = {
                                    a: 7,
                                    c: 6,
                                    o: 2,
                                    h: 1,
                                    l: 2,
                                    m: 2,
                                    r: 4,
                                    q: 4,
                                    s: 4,
                                    t: 2,
                                    v: 1,
                                    u: 3,
                                    z: 0
                                },
                                n = [];
                            return String(t).replace(a,
                                function(t, r, i) {
                                    var a = [],
                                        s = r.toLowerCase();
                                    if (i.replace(o,
                                            function(t, e) {
                                                e && a.push( + e)
                                            }), "m" === s && a.length > 2 && (n.push([r].concat(a.splice(0, 2))), s = "l", r = "m" === r ? "l": "L"), "o" === s && 1 === a.length && n.push([r, a[0]]), "r" === s) n.push([r].concat(a));
                                    else for (; a.length >= e[s] && (n.push([r].concat(a.splice(0, e[s]))), e[s]););
                                }),
                                n
                        },
                        u = function(t, e) {
                            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                                var a = [{
                                    x: +t[r - 2],
                                    y: +t[r - 1]
                                },
                                    {
                                        x: +t[r],
                                        y: +t[r + 1]
                                    },
                                    {
                                        x: +t[r + 2],
                                        y: +t[r + 3]
                                    },
                                    {
                                        x: +t[r + 4],
                                        y: +t[r + 5]
                                    }];
                                e ? r ? i - 4 === r ? a[3] = {
                                    x: +t[0],
                                    y: +t[1]
                                }: i - 2 === r && (a[2] = {
                                        x: +t[0],
                                        y: +t[1]
                                    },
                                        a[3] = {
                                            x: +t[2],
                                            y: +t[3]
                                        }) : a[0] = {
                                    x: +t[i - 2],
                                    y: +t[i - 1]
                                }: i - 4 === r ? a[3] = a[2] : r || (a[0] = {
                                        x: +t[r],
                                        y: +t[r + 1]
                                    }),
                                    n.push(["C", ( - a[0].x + 6 * a[1].x + a[2].x) / 6, ( - a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                            }
                            return n
                        },
                        c = function(t, e, n, r, i) {
                            var a = [];
                            if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) {
                                var o = Math.PI / 180,
                                    s = t + n * Math.cos( - r * o),
                                    u = t + n * Math.cos( - i * o);
                                a = [["M", s, e + n * Math.sin( - r * o)], ["A", n, n, 0, +(i - r > 180), 0, u, e + n * Math.sin( - i * o)]]
                            } else a = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
                            return a
                        },
                        h = function(t) {
                            if (! (t = s(t)) || !t.length) return [["M", 0, 0]];
                            var e, n, r = [],
                                i = 0,
                                a = 0,
                                o = 0,
                                h = 0,
                                f = 0;
                            "M" === t[0][0] && (o = i = +t[0][1], h = a = +t[0][2], f++, r[0] = ["M", i, a]);
                            for (var l, p, d = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = f, v = t.length; g < v; g++) {
                                if (r.push(l = []), (e = (p = t[g])[0]) !== e.toUpperCase()) switch (l[0] = e.toUpperCase(), l[0]) {
                                    case "A":
                                        l[1] = p[1],
                                            l[2] = p[2],
                                            l[3] = p[3],
                                            l[4] = p[4],
                                            l[5] = p[5],
                                            l[6] = +p[6] + i,
                                            l[7] = +p[7] + a;
                                        break;
                                    case "V":
                                        l[1] = +p[1] + a;
                                        break;
                                    case "H":
                                        l[1] = +p[1] + i;
                                        break;
                                    case "R":
                                        for (var m = 2,
                                                 x = (n = [i, a].concat(p.slice(1))).length; m < x; m++) n[m] = +n[m] + i,
                                            n[++m] = +n[m] + a;
                                        r.pop(),
                                            r = r.concat(u(n, d));
                                        break;
                                    case "O":
                                        r.pop(),
                                            (n = c(i, a, p[1], p[2])).push(n[0]),
                                            r = r.concat(n);
                                        break;
                                    case "U":
                                        r.pop(),
                                            r = r.concat(c(i, a, p[1], p[2], p[3])),
                                            l = ["U"].concat(r[r.length - 1].slice( - 2));
                                        break;
                                    case "M":
                                        o = +p[1] + i,
                                            h = +p[2] + a;
                                        break;
                                    default:
                                        for (var y = 1,
                                                 b = p.length; y < b; y++) l[y] = +p[y] + (y % 2 ? i: a)
                                } else if ("R" === e) n = [i, a].concat(p.slice(1)),
                                    r.pop(),
                                    r = r.concat(u(n, d)),
                                    l = ["R"].concat(p.slice( - 2));
                                else if ("O" === e) r.pop(),
                                    (n = c(i, a, p[1], p[2])).push(n[0]),
                                    r = r.concat(n);
                                else if ("U" === e) r.pop(),
                                    r = r.concat(c(i, a, p[1], p[2], p[3])),
                                    l = ["U"].concat(r[r.length - 1].slice( - 2));
                                else for (var M = 0,
                                              w = p.length; M < w; M++) l[M] = p[M];
                                if ("O" !== (e = e.toUpperCase())) switch (l[0]) {
                                    case "Z":
                                        i = +o,
                                            a = +h;
                                        break;
                                    case "H":
                                        i = l[1];
                                        break;
                                    case "V":
                                        a = l[1];
                                        break;
                                    case "M":
                                        o = l[l.length - 2],
                                            h = l[l.length - 1];
                                        break;
                                    default:
                                        i = l[l.length - 2],
                                            a = l[l.length - 1]
                                }
                            }
                            return r
                        },
                        f = function(t, e, n, r) {
                            return [t, e, n, r, n, r]
                        },
                        l = function(t, e, n, r, i, a) {
                            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * a + 2 / 3 * r, i, a]
                        },
                        p = function(t, e) {
                            var n, r = h(t),
                                i = e && h(e),
                                a = {
                                    x: 0,
                                    y: 0,
                                    bx: 0,
                                    by: 0,
                                    X: 0,
                                    Y: 0,
                                    qx: null,
                                    qy: null
                                },
                                o = {
                                    x: 0,
                                    y: 0,
                                    bx: 0,
                                    by: 0,
                                    X: 0,
                                    Y: 0,
                                    qx: null,
                                    qy: null
                                },
                                s = [],
                                u = [],
                                c = "",
                                p = "",
                                d = function(t, e, n) {
                                    var r, i;
                                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                                    switch (! (t[0] in {
                                        T: 1,
                                        Q: 1
                                    }) && (e.qx = e.qy = null), t[0]) {
                                        case "M":
                                            e.X = t[1],
                                                e.Y = t[2];
                                            break;
                                        case "A":
                                            t = ["C"].concat(function t(e, n, r, i, a, o, s, u, c, h) {
                                                r === i && (r += 1);
                                                var f, l, p, d, g, v = 120 * Math.PI / 180,
                                                    m = Math.PI / 180 * ( + a || 0),
                                                    x = [],
                                                    y = function(t, e, n) {
                                                        return {
                                                            x: t * Math.cos(n) - e * Math.sin(n),
                                                            y: t * Math.sin(n) + e * Math.cos(n)
                                                        }
                                                    };
                                                if (h) l = h[0],
                                                    p = h[1],
                                                    d = h[2],
                                                    g = h[3];
                                                else {
                                                    e = (f = y(e, n, -m)).x,
                                                        n = f.y,
                                                        u = (f = y(u, c, -m)).x,
                                                        c = f.y,
                                                    e === u && n === c && (u += 1, c += 1);
                                                    var b = (e - u) / 2,
                                                        M = (n - c) / 2,
                                                        w = b * b / (r * r) + M * M / (i * i);
                                                    w > 1 && (r *= w = Math.sqrt(w), i *= w);
                                                    var _ = r * r,
                                                        E = i * i,
                                                        A = (o === s ? -1 : 1) * Math.sqrt(Math.abs((_ * E - _ * M * M - E * b * b) / (_ * M * M + E * b * b)));
                                                    d = A * r * M / i + (e + u) / 2,
                                                        g = A * -i * b / r + (n + c) / 2,
                                                        l = Math.asin(((n - g) / i).toFixed(9)),
                                                        p = Math.asin(((c - g) / i).toFixed(9)),
                                                        l = e < d ? Math.PI - l: l,
                                                        p = u < d ? Math.PI - p: p,
                                                    l < 0 && (l = 2 * Math.PI + l),
                                                    p < 0 && (p = 2 * Math.PI + p),
                                                    s && l > p && (l -= 2 * Math.PI),
                                                    !s && p > l && (p -= 2 * Math.PI)
                                                }
                                                var S = p - l;
                                                if (Math.abs(S) > v) {
                                                    var P = p,
                                                        O = u,
                                                        C = c;
                                                    p = l + v * (s && p > l ? 1 : -1),
                                                        x = t(u = d + r * Math.cos(p), c = g + i * Math.sin(p), r, i, a, 0, s, O, C, [p, P, d, g])
                                                }
                                                S = p - l;
                                                var I = Math.cos(l),
                                                    T = Math.sin(l),
                                                    k = Math.cos(p),
                                                    N = Math.sin(p),
                                                    L = Math.tan(S / 4),
                                                    B = 4 / 3 * r * L,
                                                    j = 4 / 3 * i * L,
                                                    D = [e, n],
                                                    R = [e + B * T, n - j * I],
                                                    F = [u + B * N, c - j * k],
                                                    Y = [u, c];
                                                if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], h) return [R, F, Y].concat(x);
                                                for (var X = [], G = 0, q = (x = [R, F, Y].concat(x).join().split(",")).length; G < q; G++) X[G] = G % 2 ? y(x[G - 1], x[G], m).y: y(x[G], x[G + 1], m).x;
                                                return X
                                            }.apply(0, [e.x, e.y].concat(t.slice(1))));
                                            break;
                                        case "S":
                                            "C" === n || "S" === n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y),
                                                t = ["C", r, i].concat(t.slice(1));
                                            break;
                                        case "T":
                                            "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y),
                                                t = ["C"].concat(l(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                            break;
                                        case "Q":
                                            e.qx = t[1],
                                                e.qy = t[2],
                                                t = ["C"].concat(l(e.x, e.y, t[1], t[2], t[3], t[4]));
                                            break;
                                        case "L":
                                            t = ["C"].concat(f(e.x, e.y, t[1], t[2]));
                                            break;
                                        case "H":
                                            t = ["C"].concat(f(e.x, e.y, t[1], e.y));
                                            break;
                                        case "V":
                                            t = ["C"].concat(f(e.x, e.y, e.x, t[1]));
                                            break;
                                        case "Z":
                                            t = ["C"].concat(f(e.x, e.y, e.X, e.Y))
                                    }
                                    return t
                                },
                                g = function(t, e) {
                                    if (t[e].length > 7) {
                                        t[e].shift();
                                        for (var a = t[e]; a.length;) s[e] = "A",
                                        i && (u[e] = "A"),
                                            t.splice(e++, 0, ["C"].concat(a.splice(0, 6)));
                                        t.splice(e, 1),
                                            n = Math.max(r.length, i && i.length || 0)
                                    }
                                },
                                v = function(t, e, a, o, s) {
                                    t && e && "M" === t[s][0] && "M" !== e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]), a.bx = 0, a.by = 0, a.x = t[s][1], a.y = t[s][2], n = Math.max(r.length, i && i.length || 0))
                                };
                            n = Math.max(r.length, i && i.length || 0);
                            for (var m = 0; m < n; m++) {
                                r[m] && (c = r[m][0]),
                                "C" !== c && (s[m] = c, m && (p = s[m - 1])),
                                    r[m] = d(r[m], a, p),
                                "A" !== s[m] && "C" === c && (s[m] = "C"),
                                    g(r, m),
                                i && (i[m] && (c = i[m][0]), "C" !== c && (u[m] = c, m && (p = u[m - 1])), i[m] = d(i[m], o, p), "A" !== u[m] && "C" === c && (u[m] = "C"), g(i, m)),
                                    v(r, i, a, o, m),
                                    v(i, r, o, a, m);
                                var x = r[m],
                                    y = i && i[m],
                                    b = x.length,
                                    M = i && y.length;
                                a.x = x[b - 2],
                                    a.y = x[b - 1],
                                    a.bx = parseFloat(x[b - 4]) || a.x,
                                    a.by = parseFloat(x[b - 3]) || a.y,
                                    o.bx = i && (parseFloat(y[M - 4]) || o.x),
                                    o.by = i && (parseFloat(y[M - 3]) || o.y),
                                    o.x = i && y[M - 2],
                                    o.y = i && y[M - 1]
                            }
                            return i ? [r, i] : r
                        },
                        d = /,?([a-z]),?/gi,
                        g = function(t) {
                            return t.join(",").replace(d, "$1")
                        },
                        v = function(t, e, n, r, i) {
                            return t * (t * ( - 3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                        },
                        m = function(t, e, n, r, i, a, o, s, u) {
                            null === u && (u = 1);
                            for (var c = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2, h = [ - .1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], l = 0, p = 0; p < 12; p++) {
                                var d = c * h[p] + c,
                                    g = v(d, t, n, i, o),
                                    m = v(d, e, r, a, s),
                                    x = g * g + m * m;
                                l += f[p] * Math.sqrt(x)
                            }
                            return c * l
                        },
                        x = function(t, e, n, r, i, a, o, s) {
                            if (! (Math.max(t, n) < Math.min(i, o) || Math.min(t, n) > Math.max(i, o) || Math.max(e, r) < Math.min(a, s) || Math.min(e, r) > Math.max(a, s))) {
                                var u = (t - n) * (a - s) - (e - r) * (i - o);
                                if (u) {
                                    var c = ((t * r - e * n) * (i - o) - (t - n) * (i * s - a * o)) / u,
                                        h = ((t * r - e * n) * (a - s) - (e - r) * (i * s - a * o)) / u,
                                        f = +c.toFixed(2),
                                        l = +h.toFixed(2);
                                    if (! (f < +Math.min(t, n).toFixed(2) || f > +Math.max(t, n).toFixed(2) || f < +Math.min(i, o).toFixed(2) || f > +Math.max(i, o).toFixed(2) || l < +Math.min(e, r).toFixed(2) || l > +Math.max(e, r).toFixed(2) || l < +Math.min(a, s).toFixed(2) || l > +Math.max(a, s).toFixed(2))) return {
                                        x: c,
                                        y: h
                                    }
                                }
                            }
                        },
                        y = function(t, e, n) {
                            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
                        },
                        b = function(t, e, n, r, i) {
                            if (i) return [["M", +t + +i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]];
                            var a = [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
                            return a.parsePathArray = g,
                                a
                        },
                        M = function(t, e, n, r) {
                            return null === t && (t = e = n = r = 0),
                            null === e && (e = t.y, n = t.width, r = t.height, t = t.x),
                                {
                                    x: t,
                                    y: e,
                                    width: n,
                                    w: n,
                                    height: r,
                                    h: r,
                                    x2: t + n,
                                    y2: e + r,
                                    cx: t + n / 2,
                                    cy: e + r / 2,
                                    r1: Math.min(n, r) / 2,
                                    r2: Math.max(n, r) / 2,
                                    r0: Math.sqrt(n * n + r * r) / 2,
                                    path: b(t, e, n, r),
                                    vb: [t, e, n, r].join(" ")
                                }
                        },
                        w = function(t, e, n, i, a, o, s, u) {
                            r.isArray(t) || (t = [t, e, n, i, a, o, s, u]);
                            var c = function(t, e, n, r, i, a, o, s) {
                                for (var u, c, h, f, l = [], p = [[], []], d = 0; d < 2; ++d) if (0 === d ? (c = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * o, h = 3 * n - 3 * t) : (c = 6 * e - 12 * r + 6 * a, u = -3 * e + 9 * r - 9 * a + 3 * s, h = 3 * r - 3 * e), Math.abs(u) < 1e-12) {
                                    if (Math.abs(c) < 1e-12) continue; (f = -h / c) > 0 && f < 1 && l.push(f)
                                } else {
                                    var g = c * c - 4 * h * u,
                                        v = Math.sqrt(g);
                                    if (! (g < 0)) {
                                        var m = ( - c + v) / (2 * u);
                                        m > 0 && m < 1 && l.push(m);
                                        var x = ( - c - v) / (2 * u);
                                        x > 0 && x < 1 && l.push(x)
                                    }
                                }
                                for (var y, b = l.length,
                                         M = b; b--;) y = 1 - (f = l[b]),
                                    p[0][b] = y * y * y * t + 3 * y * y * f * n + 3 * y * f * f * i + f * f * f * o,
                                    p[1][b] = y * y * y * e + 3 * y * y * f * r + 3 * y * f * f * a + f * f * f * s;
                                return p[0][M] = t,
                                    p[1][M] = e,
                                    p[0][M + 1] = o,
                                    p[1][M + 1] = s,
                                    p[0].length = p[1].length = M + 2,
                                    {
                                        min: {
                                            x: Math.min.apply(0, p[0]),
                                            y: Math.min.apply(0, p[1])
                                        },
                                        max: {
                                            x: Math.max.apply(0, p[0]),
                                            y: Math.max.apply(0, p[1])
                                        }
                                    }
                            }.apply(null, t);
                            return M(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
                        },
                        _ = function(t, e, n, r, i, a, o, s, u) {
                            var c = 1 - u,
                                h = Math.pow(c, 3),
                                f = Math.pow(c, 2),
                                l = u * u,
                                p = l * u,
                                d = t + 2 * u * (n - t) + l * (i - 2 * n + t),
                                g = e + 2 * u * (r - e) + l * (a - 2 * r + e),
                                v = n + 2 * u * (i - n) + l * (o - 2 * i + n),
                                m = r + 2 * u * (a - r) + l * (s - 2 * a + r);
                            return {
                                x: h * t + 3 * f * u * n + 3 * c * u * u * i + p * o,
                                y: h * e + 3 * f * u * r + 3 * c * u * u * a + p * s,
                                m: {
                                    x: d,
                                    y: g
                                },
                                n: {
                                    x: v,
                                    y: m
                                },
                                start: {
                                    x: c * t + u * n,
                                    y: c * e + u * r
                                },
                                end: {
                                    x: c * i + u * o,
                                    y: c * a + u * s
                                },
                                alpha: 90 - 180 * Math.atan2(d - v, g - m) / Math.PI
                            }
                        },
                        E = function(t, e, n) {
                            if (!
                                    function(t, e) {
                                        return t = M(t),
                                            e = M(e),
                                        y(e, t.x, t.y) || y(e, t.x2, t.y) || y(e, t.x, t.y2) || y(e, t.x2, t.y2) || y(t, e.x, e.y) || y(t, e.x2, e.y) || y(t, e.x, e.y2) || y(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
                                    } (w(t), w(e))) return n ? 0 : [];
                            for (var r = ~~ (m.apply(0, t) / 8), i = ~~ (m.apply(0, e) / 8), a = [], o = [], s = {},
                                     u = n ? 0 : [], c = 0; c < r + 1; c++) {
                                var h = _.apply(0, t.concat(c / r));
                                a.push({
                                    x: h.x,
                                    y: h.y,
                                    t: c / r
                                })
                            }
                            for (var f = 0; f < i + 1; f++) {
                                var l = _.apply(0, e.concat(f / i));
                                o.push({
                                    x: l.x,
                                    y: l.y,
                                    t: f / i
                                })
                            }
                            for (var p = 0; p < r; p++) for (var d = 0; d < i; d++) {
                                var g = a[p],
                                    v = a[p + 1],
                                    b = o[d],
                                    E = o[d + 1],
                                    A = Math.abs(v.x - g.x) < .001 ? "y": "x",
                                    S = Math.abs(E.x - b.x) < .001 ? "y": "x",
                                    P = x(g.x, g.y, v.x, v.y, b.x, b.y, E.x, E.y);
                                if (P) {
                                    if (s[P.x.toFixed(4)] === P.y.toFixed(4)) continue;
                                    s[P.x.toFixed(4)] = P.y.toFixed(4);
                                    var O = g.t + Math.abs((P[A] - g[A]) / (v[A] - g[A])) * (v.t - g.t),
                                        C = b.t + Math.abs((P[S] - b[S]) / (E[S] - b[S])) * (E.t - b.t);
                                    O >= 0 && O <= 1 && C >= 0 && C <= 1 && (n ? u++:u.push({
                                        x: P.x,
                                        y: P.y,
                                        t1: O,
                                        t2: C
                                    }))
                                }
                            }
                            return u
                        };
                    function A(t, e) {
                        var n = [],
                            r = [];
                        return t.length &&
                        function t(e, i) {
                            if (1 === e.length) n.push(e[0]),
                                r.push(e[0]);
                            else {
                                for (var a = [], o = 0; o < e.length - 1; o++) 0 === o && n.push(e[0]),
                                o === e.length - 2 && r.push(e[o + 1]),
                                    a[o] = [(1 - i) * e[o][0] + i * e[o + 1][0], (1 - i) * e[o][1] + i * e[o + 1][1]];
                                t(a, i)
                            }
                        } (t, e),
                            {
                                left: n,
                                right: r.reverse()
                            }
                    }
                    var S = function(t, e, n) {
                            if (1 === n) return [[].concat(t)];
                            var r = [];
                            if ("L" === e[0] || "C" === e[0] || "Q" === e[0]) r = r.concat(function(t, e, n) {
                                var r = [[t[1], t[2]]];
                                n = n || 2;
                                var i = [];
                                "A" === e[0] ? (r.push(e[6]), r.push(e[7])) : "C" === e[0] ? (r.push([e[1], e[2]]), r.push([e[3], e[4]]), r.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (r.push([e[1], e[2]]), r.push([e[3], e[4]])) : r.push([e[1], e[2]]);
                                for (var a = r,
                                         o = 1 / n,
                                         s = 0; s < n - 1; s++) {
                                    var u = A(a, o / (1 - o * s));
                                    i.push(u.left),
                                        a = u.right
                                }
                                return i.push(a),
                                    i.map(function(t) {
                                        var e = [];
                                        return 4 === t.length && (e.push("C"), e = e.concat(t[2])),
                                        t.length >= 3 && (3 === t.length && e.push("Q"), e = e.concat(t[1])),
                                        2 === t.length && e.push("L"),
                                            e = e.concat(t[t.length - 1])
                                    })
                            } (t, e, n));
                            else {
                                var i = [].concat(t);
                                "M" === i[0] && (i[0] = "L");
                                for (var a = 0; a <= n - 1; a++) r.push(i)
                            }
                            return r
                        },
                        P = function(t, e) {
                            if (t.length !== e.length) return ! 1;
                            var n = !0;
                            return r.each(t,
                                function(t, r) {
                                    if (t !== e[r]) return n = !1,
                                        !1
                                }),
                                n
                        };
                    function O(t, e, n) {
                        var r = null,
                            i = n;
                        return e < i && (i = e, r = "add"),
                        t < i && (i = t, r = "del"),
                            {
                                type: r,
                                min: i
                            }
                    }
                    function C(t, e, n) {
                        for (var r, i = [].concat(t), a = 1 / (n + 1), o = I(e)[0], s = 1; s <= n; s++) a *= s,
                            0 === (r = Math.floor(t.length * a)) ? i.unshift([o[0] * a + t[r][0] * (1 - a), o[1] * a + t[r][1] * (1 - a)]) : i.splice(r, 0, [o[0] * a + t[r][0] * (1 - a), o[1] * a + t[r][1] * (1 - a)]);
                        return i
                    }
                    function I(t) {
                        var e = [];
                        switch (t[0]) {
                            case "M":
                            case "L":
                                e.push([t[1], t[2]]);
                                break;
                            case "A":
                                e.push([t[6], t[7]]);
                                break;
                            case "Q":
                                e.push([t[3], t[4]]),
                                    e.push([t[1], t[2]]);
                                break;
                            case "T":
                                e.push([t[1], t[2]]);
                                break;
                            case "C":
                                e.push([t[5], t[6]]),
                                    e.push([t[1], t[2]]),
                                    e.push([t[3], t[4]]);
                                break;
                            case "S":
                                e.push([t[3], t[4]]),
                                    e.push([t[1], t[2]]);
                                break;
                            case "H":
                            case "V":
                                e.push([t[1], t[1]])
                        }
                        return e
                    }
                    t.exports = {
                        parsePathString: s,
                        parsePathArray: g,
                        pathTocurve: p,
                        pathToAbsolute: h,
                        catmullRomToBezier: u,
                        rectPath: b,
                        fillPath: function(t, e) {
                            if (1 === t.length) return t;
                            var n = t.length - 1,
                                r = e.length - 1,
                                i = n / r,
                                a = [];
                            if (1 === t.length && "M" === t[0][0]) {
                                for (var o = 0; o < r - n; o++) t.push(t[0]);
                                return t
                            }
                            for (var s = 0; s < r; s++) {
                                var u = Math.floor(i * s);
                                a[u] = (a[u] || 0) + 1
                            }
                            var c = a.reduce(function(e, r, i) {
                                    return i === n ? e.concat(t[n]) : e.concat(S(t[i], t[i + 1], r))
                                },
                                []);
                            return c.unshift(t[0]),
                            "Z" !== e[r] && "z" !== e[r] || c.push("Z"),
                                c
                        },
                        fillPathByDiff: function(t, e) {
                            var n = function(t, e) {
                                    var n, r, i = t.length,
                                        a = e.length,
                                        o = 0;
                                    if (0 === i || 0 === a) return null;
                                    for (var s = [], u = 0; u <= i; u++) s[u] = [],
                                        s[u][0] = {
                                            min: u
                                        };
                                    for (var c = 0; c <= a; c++) s[0][c] = {
                                        min: c
                                    };
                                    for (var h = 1; h <= i; h++) {
                                        n = t[h - 1];
                                        for (var f = 1; f <= a; f++) {
                                            r = e[f - 1],
                                                o = P(n, r) ? 0 : 1;
                                            var l = s[h - 1][f].min + 1,
                                                p = s[h][f - 1].min + 1,
                                                d = s[h - 1][f - 1].min + o;
                                            s[h][f] = O(l, p, d)
                                        }
                                    }
                                    return s
                                } (t, e),
                                r = t.length,
                                i = e.length,
                                a = [],
                                o = 1,
                                s = 1;
                            if (n[r][i] !== r) {
                                for (var u = 1; u <= r; u++) {
                                    var c = n[u][u].min;
                                    s = u;
                                    for (var h = o; h <= i; h++) n[u][h].min < c && (c = n[u][h].min, s = h);
                                    o = s,
                                    n[u][o].type && a.push({
                                        index: u - 1,
                                        type: n[u][o].type
                                    })
                                }
                                for (var f = a.length - 1; f >= 0; f--) o = a[f].index,
                                    "add" === a[f].type ? t.splice(o, 0, [].concat(t[o])) : t.splice(o, 1)
                            }
                            var l = i - (r = t.length);
                            if (r < i) for (var p = 0; p < l; p++)"z" === t[r - 1][0] || "Z" === t[r - 1][0] ? t.splice(r - 2, 0, t[r - 2]) : t.push(t[r - 1]),
                                r += 1;
                            return t
                        },
                        formatPath: function(t, e) {
                            if (t.length <= 1) return t;
                            for (var n, r = 0; r < e.length; r++) if (t[r][0] !== e[r][0]) switch (n = I(t[r]), e[r][0]) {
                                case "M":
                                    t[r] = ["M"].concat(n[0]);
                                    break;
                                case "L":
                                    t[r] = ["L"].concat(n[0]);
                                    break;
                                case "A":
                                    t[r] = [].concat(e[r]),
                                        t[r][6] = n[0][0],
                                        t[r][7] = n[0][1];
                                    break;
                                case "Q":
                                    if (n.length < 2) {
                                        if (! (r > 0)) {
                                            t[r] = e[r];
                                            break
                                        }
                                        n = C(n, t[r - 1], 1)
                                    }
                                    t[r] = ["Q"].concat(n.reduce(function(t, e) {
                                            return t.concat(e)
                                        },
                                        []));
                                    break;
                                case "T":
                                    t[r] = ["T"].concat(n[0]);
                                    break;
                                case "C":
                                    if (n.length < 3) {
                                        if (! (r > 0)) {
                                            t[r] = e[r];
                                            break
                                        }
                                        n = C(n, t[r - 1], 2)
                                    }
                                    t[r] = ["C"].concat(n.reduce(function(t, e) {
                                            return t.concat(e)
                                        },
                                        []));
                                    break;
                                case "S":
                                    if (n.length < 2) {
                                        if (! (r > 0)) {
                                            t[r] = e[r];
                                            break
                                        }
                                        n = C(n, t[r - 1], 1)
                                    }
                                    t[r] = ["S"].concat(n.reduce(function(t, e) {
                                            return t.concat(e)
                                        },
                                        []));
                                    break;
                                default:
                                    t[r] = e[r]
                            }
                            return t
                        },
                        intersection: function(t, e) {
                            return function(t, e, n) {
                                var r, i, a, o, s, u, c, h, f, l;
                                t = p(t),
                                    e = p(e);
                                for (var d = n ? 0 : [], g = 0, v = t.length; g < v; g++) {
                                    var m = t[g];
                                    if ("M" === m[0]) r = s = m[1],
                                        i = u = m[2];
                                    else {
                                        "C" === m[0] ? (r = (f = [r, i].concat(m.slice(1)))[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                                        for (var x = 0,
                                                 y = e.length; x < y; x++) {
                                            var b = e[x];
                                            if ("M" === b[0]) a = c = b[1],
                                                o = h = b[2];
                                            else {
                                                "C" === b[0] ? (a = (l = [a, o].concat(b.slice(1)))[6], o = l[7]) : (l = [a, o, a, o, c, h, c, h], a = c, o = h);
                                                var M = E(f, l, n);
                                                if (n) d += M;
                                                else {
                                                    for (var w = 0,
                                                             _ = M.length; w < _; w++) M[w].segment1 = g,
                                                        M[w].segment2 = x,
                                                        M[w].bez1 = f,
                                                        M[w].bez2 = l;
                                                    d = d.concat(M)
                                                }
                                            }
                                        }
                                    }
                                }
                                return d
                            } (t, e)
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(356),
                        o = n(363),
                        s = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    s.Symbols = {
                        circle: function(t, e, n) {
                            return [["M", t, e], ["m", -n, 0], ["a", n, n, 0, 1, 0, 2 * n, 0], ["a", n, n, 0, 1, 0, 2 * -n, 0]]
                        },
                        square: function(t, e, n) {
                            return [["M", t - n, e - n], ["L", t + n, e - n], ["L", t + n, e + n], ["L", t - n, e + n], ["Z"]]
                        },
                        diamond: function(t, e, n) {
                            return [["M", t - n, e], ["L", t, e - n], ["L", t + n, e], ["L", t, e + n], ["Z"]]
                        },
                        triangle: function(t, e, n) {
                            var r = n * Math.sin(1 / 3 * Math.PI);
                            return [["M", t - n, e + r], ["L", t, e - r], ["L", t + n, e + r], ["z"]]
                        },
                        "triangle-down": function(t, e, n) {
                            var r = n * Math.sin(1 / 3 * Math.PI);
                            return [["M", t - n, e - r], ["L", t + n, e - r], ["L", t, e + r], ["Z"]]
                        }
                    },
                        s.ATTRS = {
                            path: null,
                            lineWidth: 1
                        },
                        r.extend(s, i),
                        r.augment(s, {
                            type: "marker",
                            canFill: !0,
                            canStroke: !0,
                            getDefaultAttrs: function() {
                                return {
                                    x: 0,
                                    y: 0,
                                    lineWidth: 1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.radius,
                                    i = this.getHitLineWidth() / 2 + r;
                                return {
                                    minX: e - i,
                                    minY: n - i,
                                    maxX: e + i,
                                    maxY: n + i
                                }
                            },
                            _getPath: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    i = t.radius || t.r,
                                    a = t.symbol || "circle";
                                return (r.isFunction(a) ? a: s.Symbols[a])(e, n, i)
                            },
                            createPath: function(t) {
                                var e = this._cfg.segments;
                                if (!e || this._cfg.hasUpdate) {
                                    var n, r = a.parsePath(this._getPath());
                                    t.beginPath(),
                                        e = [];
                                    for (var i = 0; i < r.length; i++) {
                                        var s = r[i];
                                        n = new o(s, n, i === r.length - 1),
                                            e.push(n),
                                            n.draw(t)
                                    }
                                    this._cfg.segments = e,
                                        this._cfg.hasUpdate = !1
                                } else {
                                    t.beginPath();
                                    for (var u = 0; u < e.length; u++) e[u].draw(t)
                                }
                            }
                        }),
                        t.exports = s
                },
                function(t, e, n) {
                    var r = n(17),
                        i = r.vec2;
                    function a(t, e, n, r, i) {
                        var a = 1 - i;
                        return a * a * (a * r + 3 * i * n) + i * i * (i * t + 3 * a * e)
                    }
                    function o(t, e, n, r, o, s, u, c, h, f, l) {
                        var p, d, g, v, m, x, y, b, M = .005,
                            w = 1 / 0,
                            _ = [h, f];
                        for (d = 0; d < 1; d += .05) g = [a(t, n, o, u, d), a(e, r, s, c, d)],
                        (v = i.squaredDistance(_, g)) < w && (p = d, w = v);
                        w = 1 / 0;
                        for (var E = 0; E < 32 && !(M < 1e-4); E++) b = p + M,
                            g = [a(t, n, o, u, y = p - M), a(e, r, s, c, y)],
                            v = i.squaredDistance(_, g),
                            y >= 0 && v < w ? (p = y, w = v) : (x = [a(t, n, o, u, b), a(e, r, s, c, b)], m = i.squaredDistance(_, x), b <= 1 && m < w ? (p = b, w = m) : M *= .5);
                        return l && (l.x = a(t, n, o, u, p), l.y = a(e, r, s, c, p)),
                            Math.sqrt(w)
                    }
                    function s(t, e, n, r, i) {
                        return t * (t * ( - 3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                    }
                    t.exports = {
                        at: a,
                        derivativeAt: function(t, e, n, r, i) {
                            var a = 1 - i;
                            return 3 * (((e - t) * a + 2 * (n - e) * i) * a + (r - n) * i * i)
                        },
                        projectPoint: function(t, e, n, r, i, a, s, u, c, h) {
                            var f = {};
                            return o(t, e, n, r, i, a, s, u, c, h, f),
                                f
                        },
                        pointDistance: o,
                        extrema: function(t, e, n, i) {
                            var a, o, s, u = 3 * t - 9 * e + 9 * n - 3 * i,
                                c = 6 * e - 12 * n + 6 * i,
                                h = 3 * n - 3 * i,
                                f = [];
                            if (r.isNumberEqual(u, 0)) r.isNumberEqual(c, 0) || (a = -h / c) >= 0 && a <= 1 && f.push(a);
                            else {
                                var l = c * c - 4 * u * h;
                                r.isNumberEqual(l, 0) ? f.push( - c / (2 * u)) : l > 0 && (o = ( - c - (s = Math.sqrt(l))) / (2 * u), (a = ( - c + s) / (2 * u)) >= 0 && a <= 1 && f.push(a), o >= 0 && o <= 1 && f.push(o))
                            }
                            return f
                        },
                        len: function(t, e, n, i, a, o, u, c, h) {
                            r.isNil(h) && (h = 1);
                            for (var f = (h = h > 1 ? 1 : h < 0 ? 0 : h) / 2, l = [ - .1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; g < 12; g++) {
                                var v = f * l[g] + f,
                                    m = s(v, t, n, a, u),
                                    x = s(v, e, i, o, c),
                                    y = m * m + x * x;
                                d += p[g] * Math.sqrt(y)
                            }
                            return f * d
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(366),
                        i = n(404),
                        a = n(375),
                        o = n(365);
                    t.exports = {
                        line: function(t, e, n, i, a, o, s) {
                            var u = r.box(t, e, n, i, a);
                            if (!this.box(u.minX, u.maxX, u.minY, u.maxY, o, s)) return ! 1;
                            var c = r.pointDistance(t, e, n, i, o, s);
                            return ! isNaN(c) && c <= a / 2
                        },
                        polyline: function(t, e, n, r) {
                            var i = t.length - 1;
                            if (i < 1) return ! 1;
                            for (var a = 0; a < i; a++) {
                                var o = t[a][0],
                                    s = t[a][1],
                                    u = t[a + 1][0],
                                    c = t[a + 1][1];
                                if (this.line(o, s, u, c, e, n, r)) return ! 0
                            }
                            return ! 1
                        },
                        cubicline: function(t, e, n, r, i, o, s, u, c, h, f) {
                            return a.pointDistance(t, e, n, r, i, o, s, u, h, f) <= c / 2
                        },
                        quadraticline: function(t, e, n, r, a, o, s, u, c) {
                            return i.pointDistance(t, e, n, r, a, o, u, c) <= s / 2
                        },
                        arcline: function(t, e, n, r, i, a, s, u, c) {
                            return o.pointDistance(t, e, n, r, i, a, u, c) <= s / 2
                        },
                        rect: function(t, e, n, r, i, a) {
                            return t <= i && i <= t + n && e <= a && a <= e + r
                        },
                        circle: function(t, e, n, r, i) {
                            return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2)
                        },
                        box: function(t, e, n, r, i, a) {
                            return t <= i && i <= e && n <= a && a <= r
                        }
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                },
                function(t, e, n) {
                    var r = n(383),
                        i = n(62),
                        a = n(358);
                    t.exports = function t(e, n) {
                        if (e === n) return ! 0;
                        if (!e || !n) return ! 1;
                        if (a(e) || a(n)) return ! 1;
                        if (i(e) || i(n)) {
                            if (e.length !== n.length) return ! 1;
                            for (var o = !0,
                                     s = 0; s < e.length && (o = t(e[s], n[s])); s++);
                            return o
                        }
                        if (r(e) || r(n)) {
                            var u = Object.keys(e),
                                c = Object.keys(n);
                            if (u.length !== c.length) return ! 1;
                            for (var h = !0,
                                     f = 0; f < u.length && (h = t(e[u[f]], n[u[f]])); f++);
                            return h
                        }
                        return ! 1
                    }
                },
                function(t, e, n) {
                    var r = n(359),
                        i = n(29),
                        a = 5;
                    function o(t, e, n, s) {
                        for (var u in n = n || 0,
                            s = s || a,
                            e) if (e.hasOwnProperty(u)) {
                            var c = e[u];
                            null !== c && r(c) ? (r(t[u]) || (t[u] = {}), n < s ? o(t[u], c, n + 1, s) : t[u] = e[u]) : i(c) ? (t[u] = [], t[u] = t[u].concat(c)) : void 0 !== c && (t[u] = c)
                        }
                    }
                    t.exports = function() {
                        for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
                        for (var r = t[0], i = 1; i < e; i++) o(r, t[i]);
                        return r
                    }
                },
                function(t, e, n) {
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                            function(t) {
                                return typeof t
                            }: function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                            },
                        i = n(29);
                    t.exports = function t(e) {
                        if ("object" !== (void 0 === e ? "undefined": r(e)) || null === e) return e;
                        var n = void 0;
                        if (i(e)) {
                            n = [];
                            for (var a = 0,
                                     o = e.length; a < o; a++)"object" === r(e[a]) && null != e[a] ? n[a] = t(e[a]) : n[a] = e[a]
                        } else for (var s in n = {},
                            e)"object" === r(e[s]) && null != e[s] ? n[s] = t(e[s]) : n[s] = e[s];
                        return n
                    }
                },
                function(t, e, n) {
                    var r = n(151);
                    r.translate = function(t, e, n) {
                        var i = new Array(9);
                        return r.fromTranslation(i, n),
                            r.multiply(t, i, e)
                    },
                        r.rotate = function(t, e, n) {
                            var i = new Array(9);
                            return r.fromRotation(i, n),
                                r.multiply(t, i, e)
                        },
                        r.scale = function(t, e, n) {
                            var i = new Array(9);
                            return r.fromScaling(i, n),
                                r.multiply(t, i, e)
                        },
                        t.exports = r
                },
                function(t, e) {
                    t.exports = function(t, e, n) {
                        return t < e ? e: t > n ? n: t
                    }
                },
                function(t, e) {
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(t) {
                            return typeof t
                        }: function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                        };
                    t.exports = function(t) {
                        return "object" === (void 0 === t ? "undefined": n(t)) && null !== t
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(62);
                    t.exports = function(t, e) {
                        if (!i(t)) return t;
                        var n = [];
                        return r(t,
                            function(t, r) {
                                e(t, r) && n.push(t)
                            }),
                            n
                    }
                },
                function(t, e) {
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(t) {
                            return typeof t
                        }: function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                        };
                    t.exports = function(t) {
                        var e = void 0 === t ? "undefined": n(t);
                        return null !== t && "object" === e || "function" === e
                    }
                },
                function(t, e) {
                    var n = function() {
                        function t() {}
                        return t.prototype.execute = function() {
                            throw new Error("please override this method")
                        },
                            t
                    } ();
                    t.exports = n
                },
                function(t, e, n) {
                    t.exports = {
                        CompactBoxTree: n(454),
                        Dendrogram: n(453),
                        IndentedTree: n(452),
                        Mindmap: n(451),
                        Base: n(386)
                    }
                },
                function(t, e, n) {
                    var r = n(22),
                        i = function(t) {
                            function e(e) {
                                var n = {
                                    type: "node",
                                    isNode: !0,
                                    zIndex: 3,
                                    edges: [],
                                    linkable: !0
                                };
                                return r.mix(n, e),
                                t.call(this, n) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n.updatePosition = function() {
                                var t = this.group,
                                    e = this.model;
                                t.setMatrix([1, 0, 0, 0, 1, 0, e.x ? e.x: 0, e.y ? e.y: 0, 1]),
                                    this.bbox = this._calculateBBox()
                            },
                                n._shouldDraw = function() {
                                    var e = this._getDiff(),
                                        n = t.prototype._shouldDraw.call(this);
                                    return e && !(2 === e.length && -1 !== e.indexOf("x") && -1 !== e.indexOf("y")) && !(1 === e.length && ("x" === e[0] || "y" === e[0])) && n
                                },
                                n._afterDraw = function() {
                                    this.updatePosition(),
                                        t.prototype._afterDraw.call(this)
                                },
                                n.layoutUpdate = function() {
                                    this._beforeDraw(),
                                        this._afterDraw()
                                },
                                n.getEdges = function() {
                                    var t = this;
                                    return this.graph.getEdges().filter(function(e) {
                                        var n = e.getModel();
                                        return n.source === t.id || n.target === t.id
                                    })
                                },
                                n.getInEdges = function() {
                                    var t = this;
                                    return this.getEdges().filter(function(e) {
                                        return e.target === t
                                    })
                                },
                                n.getOutEdges = function() {
                                    var t = this;
                                    return this.getEdges().filter(function(e) {
                                        return e.source === t
                                    })
                                },
                                n.getLinkPoints = function(t) {
                                    var e = this.getAnchorPoints();
                                    if (r.isNumber(t) && e[t]) return [e[t]];
                                    var n = t.x,
                                        i = t.y,
                                        a = this.getBBox(),
                                        o = a.centerX,
                                        s = a.centerY,
                                        u = n - o,
                                        c = i - s,
                                        h = this.shapeObj,
                                        f = h.anchor || {},
                                        l = this.defaultIntersectBox,
                                        p = [];
                                    if (r.isEmpty(e)) {
                                        switch (h.intersectBox || f.intersectBox || f.type || l) {
                                            case "rect":
                                                p = [r.getIntersectPointRect(a, t)];
                                                break;
                                            case "path":
                                                if (this.keyShape && "path" === this.keyShape.get("type")) {
                                                    var d = r.parsePathArray(["M", n, i, "L", o, s]);
                                                    p = [r.intersection(d, this.keyShape.get("path"))]
                                                }
                                                break;
                                            default:
                                                p = [r.getIntersectPointCircle(n, i, a.centerX, a.centerY, Math.max(a.width, a.height) / 2)]
                                        }
                                        r.isEmpty(p[0]) && (p = [{
                                            x: o,
                                            y: s
                                        }])
                                    } else p = e.map(function(t) {
                                        var e = t.x - o,
                                            n = t.y - s,
                                            i = r.getArcOfVectors({
                                                    x: u,
                                                    y: c
                                                },
                                                {
                                                    x: e,
                                                    y: n
                                                });
                                        return r.mix({},
                                            t, {
                                                arc: i
                                            })
                                    }).sort(function(t, e) {
                                        return t.arc - e.arc
                                    });
                                    return p
                                },
                                n.getAnchorPoints = function(t) {
                                    var e, n = this.shapeObj,
                                        i = this.getBBox(),
                                        a = [],
                                        o = n.anchor || {};
                                    return e = r.isArray(o) ? o: r.isFunction(o) ? o(this) : r.isFunction(o.points) ? o.points(this) : o.points,
                                        r.each(e,
                                            function(t, e) {
                                                var n = r.mix({
                                                        x: i.minX + t[0] * i.width,
                                                        y: i.minY + t[1] * i.height
                                                    },
                                                    t[2], {
                                                        index: e
                                                    });
                                                a.push(n)
                                            }),
                                        this._anchorPoints = a,
                                        r.isNumber(t) ? this._anchorPoints[t] : this._anchorPoints
                                },
                                e
                        } (n(371));
                    t.exports = i
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    n(481),
                        n(480),
                        n(479);
                    var i = n(478),
                        a = n(476),
                        o = n(449),
                        s = n(22),
                        u = n(472),
                        c = n(147),
                        h = n(470),
                        f = n(468),
                        l = n(466),
                        p = n(465),
                        d = n(463),
                        g = n(462),
                        v = n(461),
                        m = n(458),
                        x = n(457),
                        y = [g, f, l, h, v, m, n(456), x, p, d],
                        b = function(t) { !
                            function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (n, t);
                            var e = n.prototype;
                            function n(e) {
                                var n, r = {};
                                return y.forEach(function(t) {
                                    s.mix(r, s.clone(t.CFG), e)
                                }),
                                    (n = t.call(this, r) || this)._pluginInit(),
                                    n.emit("beforeinit"),
                                    n._init(),
                                    n.emit("afterinit"),
                                    n
                            }
                            return e.getDefaultCfg = function() {
                                return {
                                    container: void 0,
                                    width: void 0,
                                    height: void 0,
                                    plugins: [],
                                    fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "å¾®è½¯é›…é»‘", SimSun, "sans-serif"',
                                    nodeDefaultShape: void 0,
                                    edgeDefaultShape: void 0,
                                    groupDefaultShape: void 0,
                                    defaultIntersectBox: "circle",
                                    renderer: "canvas",
                                    _type: "graph",
                                    _controllers: {},
                                    _timers: {},
                                    _dataMap: {},
                                    _itemMap: {},
                                    _freezMap: {},
                                    _data: {},
                                    _delayRunObj: {}
                                }
                            },
                                e._init = function() {
                                    var t = this;
                                    this._initData(),
                                        this._initContainer(),
                                        this._initCanvas(),
                                        y.forEach(function(e) {
                                            e.INIT && t[e.INIT]()
                                        }),
                                        this.initEvent()
                                },
                                e.initEvent = function() {},
                                e._executeLayout = function(t, e, n, r) {
                                    s.isFunction(t) ? t(e, n, this) : s.isObject(t) && (t.nodes = e, t.edges = n, t.groups = r, t.graph = this, t.execute())
                                },
                                e._pluginInit = function() {
                                    var t = this;
                                    this.get("plugins").forEach(function(e) {
                                        t._initPlugin(e)
                                    })
                                },
                                e._initPlugin = function(t) {
                                    t.graph = this,
                                    t.init && t.init()
                                },
                                e._getTimer = function(t) {
                                    return this.get("_timers")[t]
                                },
                                e._setTimer = function(t, e) {
                                    this.get("_timers")[t] = e
                                },
                                e._getController = function(t) {
                                    return this.get("_controllers")[t]
                                },
                                e._initContainer = function() {
                                    var t = this.get("container");
                                    t || (t = this.get("id")),
                                        t = s.initDOMContainer(t, "graph");
                                    var e = s.createDOM('<div class="graph-container"></div>', {
                                        position: "relative"
                                    });
                                    t.appendChild(e),
                                        this.set("_containerDOM", t),
                                        this.set("_graphContainer", e)
                                },
                                e._initCanvas = function() {
                                    var t = this.get("_graphContainer"),
                                        e = this.get("width"),
                                        n = this.get("height"),
                                        r = this.get("fontFamily"),
                                        i = this.get("renderer"),
                                        a = {
                                            width: e,
                                            height: n,
                                            fontFamily: r,
                                            renderer: i,
                                            eventEnable: !1,
                                            containerDOM: t
                                        };
                                    "svg" === i && (a.pixelRatio = 1);
                                    var o = new(0, c.Canvas)(a),
                                        s = o.get("el");
                                    s.style.top = 0,
                                        s.style.left = 0,
                                        s.style.overflow = "hidden",
                                        this.set("_canvas", o);
                                    var u = this.getMouseEventWrapper();
                                    u.style.outline = "none",
                                        u.style["user-select"] = "none",
                                        u.setAttribute("tabindex", 20);
                                    var h = o.addGroup(),
                                        f = h.addGroup();
                                    this.set("_itemGroup", f),
                                        this.set("_rootGroup", h)
                                },
                                e._initData = function() {
                                    this.set("_dataMap", {}),
                                        this.set("_itemMap", {
                                            _nodes: [],
                                            _edges: [],
                                            _groups: [],
                                            _guides: []
                                        }),
                                        this.set("_data", {})
                                },
                                e._refresh = function() {},
                                e.getKeyboardEventWrapper = function() {
                                    var t = this.get("keyboardEventWrapper");
                                    return t || this.getMouseEventWrapper()
                                },
                                e.getMouseEventWrapper = function() {
                                    return this.get("_canvas").get("el")
                                },
                                e.addPlugin = function(t) {
                                    var e = this.get("plugins");
                                    this._initPlugin(t),
                                        e.push(t)
                                },
                                e.getGraphContainer = function() {
                                    return this.get("_graphContainer")
                                },
                                e._sortGroup = function(t) {
                                    var e = this.get("_dataMap"),
                                        n = {};
                                    t.forEach(function(t) {
                                        var r = t.id,
                                            i = t.parent;
                                        for (n[r] = 1; i && e[i];) n[r]++,
                                            i = e[i].parent
                                    }),
                                        t.sort(function(t, e) {
                                            return n[e.id] - n[t.id]
                                        })
                                },
                                e._addItems = function(t, e) {
                                    var n = this;
                                    this._addDatas(t, e),
                                    "group" === t && this._sortGroup(e);
                                    var r = s.upperFirst(t),
                                        i = a[r],
                                        o = this.get("_itemMap"),
                                        u = this.get("_itemGroup"),
                                        c = this.get("_dataMap"),
                                        h = this.get("animate"),
                                        f = this.get("defaultIntersectBox");
                                    if (!i) throw new Error("please set valid item type!");
                                    e.forEach(function(e) {
                                        var r = new i({
                                            id: e.id,
                                            type: t,
                                            model: e,
                                            group: u.addGroup(),
                                            graph: n,
                                            mapper: n._getController(t + "Mapper"),
                                            itemMap: o,
                                            animate: h,
                                            dataMap: c,
                                            defaultIntersectBox: f
                                        });
                                        o[e.id] = r,
                                            o["_" + t + "s"].push(r)
                                    })
                                },
                                e._removeItems = function(t) {
                                    var e = this.get("_dataMap"),
                                        n = this.get("_itemMap");
                                    t.forEach(function(t) {
                                        delete e[t.id],
                                            delete n[t.id],
                                            s.Array.remove(n["_" + t.type + "s"], t),
                                            t.destroy()
                                    })
                                },
                                e._updateItems = function(t, e) {
                                    t.forEach(function(t, n) {
                                        var r = e[n];
                                        r && s.mix(t.getModel(), r),
                                            t.update()
                                    })
                                },
                                e._getShowEdge = function(t) {
                                    var e = t.getSource(),
                                        n = t.getTarget();
                                    return (e.linkable && e.isVisible() || !e.linkable) && (n.linkable && n.isVisible() || !n.linkable) && t
                                },
                                e._addDatas = function(t, e) {
                                    var n = this.get("_dataMap");
                                    e.forEach(function(t) {
                                        if (s.isNil(t.id) && (t.id = s.guid()), n[t.id]) throw new Error("id:" + t.id + " has already been set, please set new one");
                                        n[t.id] = t
                                    })
                                },
                                e._drawInner = function() {
                                    var t = this.get("_data"),
                                        e = this.get("_itemGroup"),
                                        n = this.get("_dataMap"),
                                        r = this.get("_itemMap");
                                    t.nodes && this._addItems("node", t.nodes),
                                    t.groups && this._addItems("group", t.groups),
                                    t.edges && this._addItems("edge", t.edges),
                                    t.guides && this._addItems("guide", t.guides),
                                        e.sortBy(function(t) {
                                            var e = t.id,
                                                i = r[e],
                                                a = n[e];
                                            return a && !s.isNil(a.index) ? a.index: !i || i.destroyed || s.isNil(i.zIndex) ? void 0 : i.zIndex
                                        })
                                },
                                e._clearInner = function() {
                                    this.getItems().forEach(function(t) {
                                        t && t.destroy()
                                    })
                                },
                                e.preventAnimate = function(t) {
                                    return this.set("_forcePreventAnimate", !0),
                                        t(),
                                        this.set("_forcePreventAnimate", !1),
                                        this
                                },
                                e.getShapeObj = function(t, e) {
                                    if (!s.isObject(t)) {
                                        var n = s.upperFirst(t),
                                            r = o[n],
                                            i = this.get(t + "DefaultShape");
                                        return r.getShape(e.shape, i)
                                    }
                                    return t.getShapeObj()
                                },
                                e.getSource = function() {
                                    return this.get("_sourceData")
                                },
                                e.parseSource = function(t) {
                                    return t
                                },
                                e.getCanvas = function() {
                                    return this.get("_canvas")
                                },
                                e.getRootGroup = function() {
                                    return this.get("_rootGroup")
                                },
                                e.getItemGroup = function() {
                                    return this.get("_itemGroup")
                                },
                                e.source = function(t) {
                                    return this.emit("beforesource"),
                                        this.set("_data", t),
                                        this.set("_sourceData", t),
                                        this.emit("aftersource"),
                                        this
                                },
                                e.render = function() {
                                    return this.emit("beforerender"),
                                        this.emit("beforedrawinner"),
                                        this._drawInner(),
                                        this.emit("afterdrawinner"),
                                        this.emit("afterrender"),
                                        this
                                },
                                e.reRender = function() {
                                    var t = this.get("_sourceData");
                                    return this.read(t),
                                        this
                                },
                                e.setCapture = function(t) {
                                    this.get("_rootGroup").set("capture", t)
                                },
                                e.destroy = function() {
                                    this.emit("beforedestroy");
                                    var e = this.get("_canvas"),
                                        n = this.get("_graphContainer"),
                                        r = this.get("_controllers"),
                                        i = this.get("_timers"),
                                        a = this.get("_windowForceResizeEvent"),
                                        o = this.get("plugins");
                                    return s.each(i,
                                        function(t) {
                                            clearTimeout(t)
                                        }),
                                        s.each(r,
                                            function(t) {
                                                t.destroy()
                                            }),
                                        o.forEach(function(t) {
                                            t.destroy && t.destroy()
                                        }),
                                    e && e.destroy(),
                                        n.destroy(),
                                        window.removeEventListener("resize", a),
                                        this.emit("afterdestroy"),
                                        t.prototype.destroy.call(this),
                                        this
                                },
                                e.save = function() {
                                    var t = {
                                        nodes: [],
                                        edges: [],
                                        groups: [],
                                        guides: []
                                    };
                                    return this.get("_itemGroup").get("children").forEach(function(e, n) {
                                        var r = e.model;
                                        if (r) {
                                            var i = e.itemType,
                                                a = s.clone(r);
                                            a.index = n,
                                                t[i + "s"].push(a)
                                        }
                                    }),
                                    0 === t.nodes.length && delete t.nodes,
                                    0 === t.edges.length && delete t.edges,
                                    0 === t.groups.length && delete t.groups,
                                    0 === t.guides.length && delete t.guides,
                                        t
                                },
                                e.add = function(t, e) {
                                    var n = [],
                                        r = {
                                            action: "add",
                                            model: e,
                                            affectedItemIds: n
                                        };
                                    this.emit("beforechange", r);
                                    var i = this.get("_itemMap");
                                    this._addItems(t, [e]);
                                    var a = i[e.id];
                                    return a.getAllParents().forEach(function(t) {
                                        t.update()
                                    }),
                                        r.item = a,
                                        n.push(e.id),
                                        this.emit("afterchange", r),
                                        a
                                },
                                e.remove = function(t) {
                                    if ((t = this.getItem(t)) && !t.destroyed) {
                                        var e = [],
                                            n = [],
                                            r = {
                                                action: "remove",
                                                item: t,
                                                affectedItemIds: n
                                            };
                                        if (t.isNode) {
                                            var i = t.getEdges();
                                            e = e.concat(i)
                                        }
                                        if (t.isGroup) {
                                            var a = t.getEdges(),
                                                o = t.getAllChildren(),
                                                u = t.getCrossEdges(),
                                                c = t.getInnerEdges();
                                            e = e.concat(a, o, u, c),
                                                e = s.uniq(e)
                                        }
                                        e.push(t);
                                        var h = t.getAllParents();
                                        return h.forEach(function(t) {
                                            n.push(t.id)
                                        }),
                                            e.forEach(function(t) {
                                                n.push(t.id)
                                            }),
                                            this.emit("beforechange", r),
                                            this._removeItems(e),
                                            h.forEach(function(t) {
                                                t.update()
                                            }),
                                            this.emit("afterchange", r),
                                            this
                                    }
                                },
                                e.simpleUpdate = function(t, e) {
                                    return this._updateItems([t], [e]),
                                        this.draw(),
                                        this
                                },
                                e.update = function(t, e) {
                                    var n = this.get("_itemMap");
                                    if ((t = this.getItem(t)) && !t.destroyed && e) {
                                        var r = this.get("animate"),
                                            i = [],
                                            a = [],
                                            o = [],
                                            u = t.getModel(),
                                            c = s.mix({},
                                                u),
                                            h = {
                                                action: "update",
                                                item: t,
                                                originModel: c,
                                                updateModel: e,
                                                affectedItemIds: o
                                            },
                                            f = n[c.parent];
                                        if (i.push(t), a.push(e), o.push(t.id), f && f !== parent && s.isGroup(f) && t.getAllParents().forEach(function(t) {
                                                i.push(t),
                                                    a.push(null),
                                                    o.push(t.id)
                                            }), e.parent) {
                                            var l = n[e.parent];
                                            if (!l) throw new Error("there is no " + e.parent + " exist, please add a new one!");
                                            i.push(l),
                                                a.push(null),
                                                o.push(l.id),
                                                l.getAllParents().forEach(function(t) {
                                                    i.push(t),
                                                        a.push(null),
                                                        o.push(t.id)
                                                })
                                        }
                                        if (t.isNode || t.isGroup) t.getEdges().forEach(function(t) {
                                            i.push(t),
                                                a.push(null),
                                                o.push(t.id)
                                        });
                                        return t.isGroup && !s.isNil(e.collapsed) && (r && t.deepEach(function(t) {
                                            o.push(t.id)
                                        }), t.getCrossEdges().forEach(function(t) {
                                            i.push(t),
                                                a.push(null),
                                                o.push(t.id)
                                        })),
                                            this.emit("beforechange", h),
                                            this._updateItems(i, a),
                                            this.emit("afterchange", h),
                                            this
                                    }
                                },
                                e.read = function(t) {
                                    var e = this;
                                    if (!t) throw new Error("please read valid data!");
                                    var n = {
                                        action: "changeData",
                                        data: t
                                    };
                                    return this.emit("beforechange", n),
                                        this.preventAnimate(function() {
                                            e.clear(),
                                                e.source(t),
                                                e.render()
                                        }),
                                        this.emit("afterchange", n),
                                        this
                                },
                                e.clear = function() {
                                    return this.emit("beforeclear"),
                                        this._clearInner(),
                                        this._initData(),
                                        this.emit("afterclear"),
                                        this
                                },
                                e.hide = function(t) {
                                    var e = [],
                                        n = [],
                                        r = {
                                            item: t = this.getItem(t),
                                            affectedItemIds: n
                                        };
                                    return e.push(t),
                                    t.isNode && t.getEdges().forEach(function(t) {
                                        e.push(t)
                                    }),
                                    t.isGroup && (t.getEdges().forEach(function(t) {
                                        e.push(t)
                                    }), t.deepEach(function(t) {
                                        e.push(t)
                                    })),
                                        (e = s.uniq(e)).forEach(function(t) {
                                            n.push(t.id)
                                        }),
                                        this.emit("beforehide", r),
                                        e.forEach(function(t) {
                                            t.hide()
                                        }),
                                        this.emit("afterhide", r),
                                        this
                                },
                                e.show = function(t) {
                                    var e = this,
                                        n = [],
                                        r = [],
                                        i = {
                                            item: t = this.getItem(t),
                                            affectedItemIds: r
                                        };
                                    if (t.visible = !0, t.isEdge) {
                                        var a = this._getShowEdge(t);
                                        a && n.push(a)
                                    } else n.push(t);
                                    return t.isNode && t.getEdges().forEach(function(t) { (t = e._getShowEdge(t)) && n.push(t)
                                    }),
                                    t.isGroup && (t.getEdges().forEach(function(t) { (t = e._getShowEdge(t)) && n.push(t)
                                    }), t.deepEach(function(t) {
                                        n.push(t)
                                    })),
                                        (n = s.uniq(n)).forEach(function(t) {
                                            r.push(t.id)
                                        }),
                                        this.emit("beforeshow", i),
                                        n.forEach(function(t) {
                                            t.show()
                                        }),
                                        this.emit("aftershow", i),
                                        this
                                },
                                e.getWidth = function() {
                                    return this.get("width")
                                },
                                e.getHeight = function() {
                                    return this.get("height")
                                },
                                e.changeSize = function(t, e) {
                                    if (! (Math.abs(t) >= 1 / 0 || Math.abs(e) >= 1 / 0)) {
                                        var n = this.get("_canvas");
                                        return t === this.get("width") && e === this.get("height") || (this.emit("beforechangesize"), n.changeSize(t, e), this.set("width", t), this.set("height", e), this.emit("afterchangesize"), this.draw()),
                                            this
                                    }
                                    console.warn("size parameter more than the maximum")
                                },
                                e.toFront = function(t) {
                                    t = this.getItem(t);
                                    var e = this.get("_itemGroup"),
                                        n = t.getGraphicGroup();
                                    s.toFront(n, e),
                                        this.draw()
                                },
                                e.toBack = function(t) {
                                    t = this.getItem(t);
                                    var e = this.get("_itemGroup"),
                                        n = t.getGraphicGroup();
                                    s.toBack(n, e),
                                        this.draw()
                                },
                                e.css = function(t) {
                                    var e = this.getGraphContainer();
                                    s.modifyCSS(e, t)
                                },
                                e.saveImage = function(t) {
                                    var e = this.getBBox(),
                                        n = this.getFitViewPadding();
                                    return new u(function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {},
                                                i = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                                            }))),
                                                i.forEach(function(e) {
                                                    r(t, e, n[e])
                                                })
                                        }
                                        return t
                                    } ({
                                            graph: this,
                                            width: e.width + n[1] + n[3],
                                            height: e.height + n[0] + n[2]
                                        },
                                        t)).toCanvas()
                                },
                                n
                        } (i);
                    y.forEach(function(t) {
                        s.mix(b.prototype, t.AUGMENT)
                    }),
                        t.exports = b
                },
                function(t, e) {
                    var n = {
                        registerBehaviour: function(t, e, r) {
                            e.dependences = r,
                                n[t] = e
                        },
                        resetMode: function(t, e) {
                            var r, i = [];
                            e._off();
                            for (var a = 0; a < t.length; a++)(r = n[t[a]]) && (r.dependences && r.dependences.forEach(function(t) {
                                t && -1 === i.indexOf(t) && (n[t](e), i.push(t))
                            }), r && -1 === i.indexOf(r) && r(e))
                        }
                    };
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    a.ATTRS = {
                        x: 0,
                        y: 0,
                        text: null,
                        fontSize: 12,
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontVariant: "normal",
                        textAlign: "start",
                        textBaseline: "bottom",
                        lineHeight: null,
                        textArr: null
                    },
                        r.extend(a, i),
                        r.augment(a, {
                            canFill: !0,
                            canStroke: !0,
                            type: "text",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1,
                                    lineCount: 1,
                                    fontSize: 12,
                                    fontFamily: "sans-serif",
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    fontVariant: "normal",
                                    textAlign: "start",
                                    textBaseline: "bottom"
                                }
                            },
                            initTransform: function() {
                                var t = this._attrs.fontSize;
                                t && +t < 12 && this.transform([["t", -1 * this._attrs.x, -1 * this._attrs.y], ["s", +t / 12, +t / 12], ["t", this._attrs.x, this._attrs.y]])
                            },
                            _assembleFont: function() {
                                var t = this._attrs,
                                    e = t.fontSize,
                                    n = t.fontFamily,
                                    r = t.fontWeight,
                                    i = t.fontStyle,
                                    a = t.fontVariant;
                                t.font = [i, a, r, e + "px", n].join(" ")
                            },
                            _setAttrText: function() {
                                var t = this._attrs,
                                    e = t.text,
                                    n = null;
                                if (r.isString(e) && -1 !== e.indexOf("\n")) {
                                    var i = (n = e.split("\n")).length;
                                    t.lineCount = i
                                }
                                t.textArr = n
                            },
                            _getTextHeight: function() {
                                var t = this._attrs,
                                    e = t.lineCount,
                                    n = 1 * t.fontSize;
                                return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
                            },
                            isHitBox: function() {
                                return ! 1
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = this._cfg;
                                e.attrs && !e.hasUpdate || (this._assembleFont(), this._setAttrText()),
                                t.textArr || this._setAttrText();
                                var n = t.x,
                                    r = t.y,
                                    i = this.measureText();
                                if (!i) return {
                                    minX: n,
                                    minY: r,
                                    maxX: n,
                                    maxY: r
                                };
                                var a = this._getTextHeight(),
                                    o = t.textAlign,
                                    s = t.textBaseline,
                                    u = this.getHitLineWidth(),
                                    c = {
                                        x: n,
                                        y: r - a
                                    };
                                o && ("end" === o || "right" === o ? c.x -= i: "center" === o && (c.x -= i / 2)),
                                s && ("top" === s ? c.y += a: "middle" === s && (c.y += a / 2)),
                                    this.set("startPoint", c);
                                var h = u / 2;
                                return {
                                    minX: c.x - h,
                                    minY: c.y - h,
                                    maxX: c.x + i + h,
                                    maxY: c.y + a + h
                                }
                            },
                            _getSpaceingY: function() {
                                var t = this._attrs,
                                    e = t.lineHeight,
                                    n = 1 * t.fontSize;
                                return e ? e - n: .14 * n
                            },
                            drawInner: function(t) {
                                var e = this._attrs,
                                    n = this._cfg;
                                n.attrs && !n.hasUpdate || (this._assembleFont(), this._setAttrText()),
                                    t.font = e.font;
                                var i = e.text;
                                if (i) {
                                    var a = e.textArr,
                                        o = e.x,
                                        s = e.y;
                                    if (t.beginPath(), this.hasStroke()) {
                                        var u = e.strokeOpacity;
                                        r.isNil(u) || 1 === u || (t.globalAlpha = u),
                                            a ? this._drawTextArr(t, !1) : t.strokeText(i, o, s),
                                            t.globalAlpha = 1
                                    }
                                    if (this.hasFill()) {
                                        var c = e.fillOpacity;
                                        r.isNil(c) || 1 === c || (t.globalAlpha = c),
                                            a ? this._drawTextArr(t, !0) : t.fillText(i, o, s)
                                    }
                                    n.hasUpdate = !1
                                }
                            },
                            _drawTextArr: function(t, e) {
                                var n, i = this._attrs.textArr,
                                    a = this._attrs.textBaseline,
                                    o = 1 * this._attrs.fontSize,
                                    s = this._getSpaceingY(),
                                    u = this._attrs.x,
                                    c = this._attrs.y,
                                    h = this.getBBox(),
                                    f = h.maxY - h.minY;
                                r.each(i,
                                    function(r, i) {
                                        n = c + i * (s + o) - f + o,
                                        "middle" === a && (n += f - o - (f - o) / 2),
                                        "top" === a && (n += f - o),
                                            e ? t.fillText(r, u, n) : t.strokeText(r, u, n)
                                    })
                            },
                            measureText: function() {
                                var t, e = this._attrs,
                                    n = e.text,
                                    i = e.font,
                                    a = e.textArr,
                                    o = 0;
                                if (!r.isNil(n)) {
                                    var s = document.createElement("canvas").getContext("2d");
                                    return s.save(),
                                        s.font = i,
                                        a ? r.each(a,
                                            function(e) {
                                                t = s.measureText(e).width,
                                                o < t && (o = t),
                                                    s.restore()
                                            }) : (o = s.measureText(n).width, s.restore()),
                                        o
                                }
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(356).parseRadius,
                        a = n(37),
                        o = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    o.ATTRS = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        radius: 0,
                        lineWidth: 1
                    },
                        r.extend(o, a),
                        r.augment(o, {
                            canFill: !0,
                            canStroke: !0,
                            type: "rect",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1,
                                    radius: 0
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.width,
                                    i = t.height,
                                    a = this.getHitLineWidth() / 2;
                                return {
                                    minX: e - a,
                                    minY: n - a,
                                    maxX: e + r + a,
                                    maxY: n + i + a
                                }
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    r = e.y,
                                    a = e.width,
                                    o = e.height,
                                    s = e.radius;
                                if ((t = t || this.get("context")).beginPath(), 0 === s) t.rect(n, r, a, o);
                                else {
                                    var u = i(s);
                                    t.moveTo(n + u.r1, r),
                                        t.lineTo(n + a - u.r2, r),
                                    0 !== u.r2 && t.arc(n + a - u.r2, r + u.r2, u.r2, -Math.PI / 2, 0),
                                        t.lineTo(n + a, r + o - u.r3),
                                    0 !== u.r3 && t.arc(n + a - u.r3, r + o - u.r3, u.r3, 0, Math.PI / 2),
                                        t.lineTo(n + u.r4, r + o),
                                    0 !== u.r4 && t.arc(n + u.r4, r + o - u.r4, u.r4, Math.PI / 2, Math.PI),
                                        t.lineTo(n, r + u.r1),
                                    0 !== u.r1 && t.arc(n + u.r1, r + u.r1, u.r1, Math.PI, 1.5 * Math.PI),
                                        t.closePath()
                                }
                            }
                        }),
                        t.exports = o
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(364),
                        o = n(366),
                        s = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    s.ATTRS = {
                        points: null,
                        lineWidth: 1,
                        startArrow: !1,
                        endArrow: !1,
                        tCache: null
                    },
                        r.extend(s, i),
                        r.augment(s, {
                            canStroke: !0,
                            type: "polyline",
                            tCache: null,
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1,
                                    startArrow: !1,
                                    endArrow: !1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = this.getHitLineWidth(),
                                    n = t.points;
                                if (!n || 0 === n.length) return null;
                                var i = 1 / 0,
                                    a = 1 / 0,
                                    o = -1 / 0,
                                    s = -1 / 0;
                                r.each(n,
                                    function(t) {
                                        var e = t[0],
                                            n = t[1];
                                        e < i && (i = e),
                                        e > o && (o = e),
                                        n < a && (a = n),
                                        n > s && (s = n)
                                    });
                                var u = e / 2;
                                return {
                                    minX: i - u,
                                    minY: a - u,
                                    maxX: o + u,
                                    maxY: s + u
                                }
                            },
                            _setTcache: function() {
                                var t, e, n = this._attrs.points,
                                    i = 0,
                                    a = 0,
                                    s = [];
                                n && 0 !== n.length && (r.each(n,
                                    function(t, e) {
                                        n[e + 1] && (i += o.len(t[0], t[1], n[e + 1][0], n[e + 1][1]))
                                    }), i <= 0 || (r.each(n,
                                    function(r, u) {
                                        n[u + 1] && ((t = [])[0] = a / i, e = o.len(r[0], r[1], n[u + 1][0], n[u + 1][1]), a += e, t[1] = a / i, s.push(t))
                                    }), this.tCache = s))
                            },
                            createPath: function(t) {
                                var e, n, r = this._attrs.points;
                                if (! (r.length < 2)) {
                                    for ((t = t || this.get("context")).beginPath(), t.moveTo(r[0][0], r[0][1]), n = 1, e = r.length - 1; n < e; n++) t.lineTo(r[n][0], r[n][1]);
                                    t.lineTo(r[e][0], r[e][1])
                                }
                            },
                            getStartTangent: function() {
                                var t = this.__attrs.points,
                                    e = [];
                                return e.push([t[1][0], t[1][1]]),
                                    e.push([t[0][0], t[0][1]]),
                                    e
                            },
                            getEndTangent: function() {
                                var t = this.__attrs.points,
                                    e = t.length - 1,
                                    n = [];
                                return n.push([t[e - 1][0], t[e - 1][1]]),
                                    n.push([t[e][0], t[e][1]]),
                                    n
                            },
                            afterPath: function(t) {
                                var e = this._attrs,
                                    n = e.points,
                                    r = n.length - 1;
                                t = t || this.get("context"),
                                e.startArrow && a.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]),
                                e.endArrow && a.addEndArrow(t, e, n[r - 1][0], n[r - 1][1], n[r][0], n[r][1])
                            },
                            getPoint: function(t) {
                                var e, n, i = this._attrs.points,
                                    a = this.tCache;
                                return a || (this._setTcache(), a = this.tCache),
                                    r.each(a,
                                        function(r, i) {
                                            t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]), n = i)
                                        }),
                                    {
                                        x: o.at(i[n][0], i[n + 1][0], e),
                                        y: o.at(i[n][1], i[n + 1][1], e)
                                    }
                            }
                        }),
                        t.exports = s
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    a.ATTRS = {
                        points: null,
                        lineWidth: 1
                    },
                        r.extend(a, i),
                        r.augment(a, {
                            canFill: !0,
                            canStroke: !0,
                            type: "polygon",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs.points,
                                    e = this.getHitLineWidth();
                                if (!t || 0 === t.length) return null;
                                var n = 1 / 0,
                                    i = 1 / 0,
                                    a = -1 / 0,
                                    o = -1 / 0;
                                r.each(t,
                                    function(t) {
                                        var e = t[0],
                                            r = t[1];
                                        e < n && (n = e),
                                        e > a && (a = e),
                                        r < i && (i = r),
                                        r > o && (o = r)
                                    });
                                var s = e / 2;
                                return {
                                    minX: n - s,
                                    minY: i - s,
                                    maxX: a + s,
                                    maxY: o + s
                                }
                            },
                            createPath: function(t) {
                                var e = this._attrs.points;
                                e.length < 2 || ((t = t || this.get("context")).beginPath(), r.each(e,
                                    function(e, n) {
                                        0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1])
                                    }), t.closePath())
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(363),
                        o = n(356),
                        s = n(364),
                        u = n(373),
                        c = n(375),
                        h = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    h.ATTRS = {
                        path: null,
                        lineWidth: 1,
                        startArrow: !1,
                        endArrow: !1
                    },
                        r.extend(h, i),
                        r.augment(h, {
                            canFill: !0,
                            canStroke: !0,
                            type: "path",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1,
                                    startArrow: !1,
                                    endArrow: !1
                                }
                            },
                            _afterSetAttrPath: function(t) {
                                if (r.isNil(t)) return this.setSilent("segments", null),
                                    void this.setSilent("box", void 0);
                                var e, n = o.parsePath(t),
                                    i = [];
                                if (r.isArray(n) && 0 !== n.length && ("M" === n[0][0] || "m" === n[0][0])) {
                                    for (var s = n.length,
                                             u = 0; u < n.length; u++) {
                                        var c = n[u];
                                        e = new a(c, e, u === s - 1),
                                            i.push(e)
                                    }
                                    this.setSilent("segments", i),
                                        this.setSilent("tCache", null),
                                        this.setSilent("box", null)
                                }
                            },
                            calculateBox: function() {
                                var t = this.get("segments");
                                if (!t) return null;
                                var e = this.getHitLineWidth(),
                                    n = 1 / 0,
                                    i = -1 / 0,
                                    a = 1 / 0,
                                    o = -1 / 0;
                                return r.each(t,
                                    function(t) {
                                        t.getBBox(e);
                                        var r = t.box;
                                        r && (r.minX < n && (n = r.minX), r.maxX > i && (i = r.maxX), r.minY < a && (a = r.minY), r.maxY > o && (o = r.maxY))
                                    }),
                                    n === 1 / 0 || a === 1 / 0 ? {
                                        minX: 0,
                                        minY: 0,
                                        maxX: 0,
                                        maxY: 0
                                    }: {
                                        minX: n,
                                        minY: a,
                                        maxX: i,
                                        maxY: o
                                    }
                            },
                            _setTcache: function() {
                                var t, e, n, i, a = 0,
                                    o = 0,
                                    s = [],
                                    u = this._cfg.curve;
                                u && (r.each(u,
                                    function(t, e) {
                                        n = u[e + 1],
                                            i = t.length,
                                        n && (a += c.len(t[i - 2], t[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]))
                                    }), r.each(u,
                                    function(r, h) {
                                        n = u[h + 1],
                                            i = r.length,
                                        n && ((t = [])[0] = o / a, e = c.len(r[i - 2], r[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]), o += e, t[1] = o / a, s.push(t))
                                    }), this._cfg.tCache = s)
                            },
                            _calculateCurve: function() {
                                var t = this._attrs.path;
                                this._cfg.curve = u.pathTocurve(t)
                            },
                            getStartTangent: function() {
                                var t, e, n, i, a = this.get("segments");
                                if (a.length > 1) if (t = a[0].endPoint, e = a[1].endPoint, n = a[1].startTangent, i = [], r.isFunction(n)) {
                                    var o = n();
                                    i.push([t.x - o[0], t.y - o[1]]),
                                        i.push([t.x, t.y])
                                } else i.push([e.x, e.y]),
                                    i.push([t.x, t.y]);
                                return i
                            },
                            getEndTangent: function() {
                                var t, e, n, i, a = this.get("segments"),
                                    o = a.length;
                                if (o > 1) if (t = a[o - 2].endPoint, e = a[o - 1].endPoint, n = a[o - 1].endTangent, i = [], r.isFunction(n)) {
                                    var s = n();
                                    i.push([e.x - s[0], e.y - s[1]]),
                                        i.push([e.x, e.y])
                                } else i.push([t.x, t.y]),
                                    i.push([e.x, e.y]);
                                return i
                            },
                            getPoint: function(t) {
                                var e, n, i = this._cfg.tCache;
                                i || (this._calculateCurve(), this._setTcache(), i = this._cfg.tCache);
                                var a = this._cfg.curve;
                                if (!i) return a ? {
                                    x: a[0][1],
                                    y: a[0][2]
                                }: null;
                                r.each(i,
                                    function(r, i) {
                                        t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]), n = i)
                                    });
                                var o = a[n];
                                if (r.isNil(o) || r.isNil(n)) return null;
                                var s = o.length,
                                    u = a[n + 1];
                                return {
                                    x: c.at(o[s - 2], u[1], u[3], u[5], 1 - e),
                                    y: c.at(o[s - 1], u[2], u[4], u[6], 1 - e)
                                }
                            },
                            createPath: function(t) {
                                var e = this.get("segments");
                                if (r.isArray(e)) { (t = t || this.get("context")).beginPath();
                                    for (var n = e.length,
                                             i = 0; i < n; i++) e[i].draw(t)
                                }
                            },
                            afterPath: function(t) {
                                var e = this._attrs,
                                    n = this.get("segments"),
                                    i = e.path;
                                if (t = t || this.get("context"), r.isArray(n) && 1 !== n.length && (e.startArrow || e.endArrow) && "z" !== i[i.length - 1] && "Z" !== i[i.length - 1] && !e.fill) {
                                    var a = this.getStartTangent();
                                    s.addStartArrow(t, e, a[0][0], a[0][1], a[1][0], a[1][1]);
                                    var o = this.getEndTangent();
                                    s.addEndArrow(t, e, o[0][0], o[0][1], o[1][0], o[1][1])
                                }
                            }
                        }),
                        t.exports = h
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(364),
                        o = n(366),
                        s = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    s.ATTRS = {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0,
                        lineWidth: 1,
                        startArrow: !1,
                        endArrow: !1
                    },
                        r.extend(s, i),
                        r.augment(s, {
                            canStroke: !0,
                            type: "line",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1,
                                    startArrow: !1,
                                    endArrow: !1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x1,
                                    n = t.y1,
                                    r = t.x2,
                                    i = t.y2,
                                    a = this.getHitLineWidth();
                                return o.box(e, n, r, i, a)
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x1,
                                    r = e.y1,
                                    i = e.x2,
                                    a = e.y2; (t = t || self.get("context")).beginPath(),
                                    t.moveTo(n, r),
                                    t.lineTo(i, a)
                            },
                            afterPath: function(t) {
                                var e = this._attrs,
                                    n = e.x1,
                                    r = e.y1,
                                    i = e.x2,
                                    o = e.y2;
                                t = t || this.get("context"),
                                e.startArrow && a.addStartArrow(t, e, i, o, n, r),
                                e.endArrow && a.addEndArrow(t, e, n, r, i, o)
                            },
                            getPoint: function(t) {
                                var e = this._attrs;
                                return {
                                    x: o.at(e.x1, e.x2, t),
                                    y: o.at(e.y1, e.y2, t)
                                }
                            }
                        }),
                        t.exports = s
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    a.ATTRS = {
                        x: 0,
                        y: 0,
                        img: void 0,
                        width: 0,
                        height: 0,
                        sx: null,
                        sy: null,
                        swidth: null,
                        sheight: null
                    },
                        r.extend(a, i),
                        r.augment(a, {
                            type: "image",
                            isHitBox: function() {
                                return ! 1
                            },
                            calculateBox: function() {
                                var t = this._attrs;
                                this._cfg.attrs && this._cfg.attrs.img === t.img || this._setAttrImg();
                                var e = t.x,
                                    n = t.y;
                                return {
                                    minX: e,
                                    minY: n,
                                    maxX: e + t.width,
                                    maxY: n + t.height
                                }
                            },
                            _beforeSetLoading: function(t) {
                                var e = this.get("canvas");
                                return ! 1 === t && !0 === this.get("toDraw") && (this._cfg.loading = !1, e.draw()),
                                    t
                            },
                            _setAttrImg: function() {
                                var t = this,
                                    e = t._attrs,
                                    n = e.img;
                                if (!r.isString(n)) return n instanceof Image ? (e.width || t.attr("width", n.width), e.height || t.attr("height", n.height), n) : n instanceof HTMLElement && r.isString(n.nodeName) && "CANVAS" === n.nodeName.toUpperCase() ? (e.width || t.attr("width", Number(n.getAttribute("width"))), e.height || t.attr("height", Number(n.getAttribute("height"))), n) : n instanceof ImageData ? (e.width || t.attr("width", n.width), e.height || t.attr("height", n.height), n) : null;
                                var i = new Image;
                                i.onload = function() {
                                    if (t.get("destroyed")) return ! 1;
                                    t.attr("imgSrc", n),
                                        t.attr("img", i);
                                    var e = t.get("callback");
                                    e && e.call(t),
                                        t.set("loading", !1)
                                },
                                    i.src = n,
                                    i.crossOrigin = "Anonymous",
                                    t.set("loading", !0)
                            },
                            drawInner: function(t) {
                                this._cfg.hasUpdate && this._setAttrImg(),
                                    this.get("loading") ? this.set("toDraw", !0) : (this._drawImage(t), this._cfg.hasUpdate = !1)
                            },
                            _drawImage: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    i = e.y,
                                    a = e.img,
                                    o = e.width,
                                    s = e.height,
                                    u = e.sx,
                                    c = e.sy,
                                    h = e.swidth,
                                    f = e.sheight;
                                this.set("toDraw", !1);
                                var l = a;
                                if (l instanceof ImageData && ((l = new Image).src = a), l instanceof Image || l instanceof HTMLElement && r.isString(l.nodeName) && "CANVAS" === l.nodeName.toUpperCase()) {
                                    if (r.isNil(u) || r.isNil(c) || r.isNil(h) || r.isNil(f)) return void t.drawImage(l, n, i, o, s);
                                    if (! (r.isNil(u) || r.isNil(c) || r.isNil(h) || r.isNil(f))) return void t.drawImage(l, u, c, h, f, n, i, o, s)
                                }
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(365),
                        o = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    o.ATTRS = {
                        x: 0,
                        y: 0,
                        rs: 0,
                        re: 0,
                        startAngle: 0,
                        endAngle: 0,
                        clockwise: !1,
                        lineWidth: 1
                    },
                        r.extend(o, i),
                        r.augment(o, {
                            canFill: !0,
                            canStroke: !0,
                            type: "fan",
                            getDefaultAttrs: function() {
                                return {
                                    clockwise: !1,
                                    lineWidth: 1,
                                    rs: 0,
                                    re: 0
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.rs,
                                    i = t.re,
                                    o = t.startAngle,
                                    s = t.endAngle,
                                    u = t.clockwise,
                                    c = this.getHitLineWidth(),
                                    h = a.box(e, n, r, o, s, u),
                                    f = a.box(e, n, i, o, s, u),
                                    l = c / 2;
                                return {
                                    minX: Math.min(h.minX, f.minX) - l,
                                    minY: Math.min(h.minY, f.minY) - l,
                                    maxX: Math.max(h.maxX, f.maxX) + l,
                                    maxY: Math.max(h.maxY, f.maxY) + l
                                }
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    r = e.y,
                                    i = e.rs,
                                    a = e.re,
                                    o = e.startAngle,
                                    s = e.endAngle,
                                    u = e.clockwise,
                                    c = {
                                        x: Math.cos(o) * i + n,
                                        y: Math.sin(o) * i + r
                                    },
                                    h = {
                                        x: Math.cos(o) * a + n,
                                        y: Math.sin(o) * a + r
                                    },
                                    f = {
                                        x: Math.cos(s) * i + n,
                                        y: Math.sin(s) * i + r
                                    }; (t = t || self.get("context")).beginPath(),
                                    t.moveTo(c.x, c.y),
                                    t.lineTo(h.x, h.y),
                                    t.arc(n, r, a, o, s, u),
                                    t.lineTo(f.x, f.y),
                                    t.arc(n, r, i, s, o, !u),
                                    t.closePath()
                            }
                        }),
                        t.exports = o
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    a.ATTRS = {
                        x: 0,
                        y: 0,
                        rx: 1,
                        ry: 1,
                        lineWidth: 1
                    },
                        r.extend(a, i),
                        r.augment(a, {
                            canFill: !0,
                            canStroke: !0,
                            type: "ellipse",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.rx,
                                    i = t.ry,
                                    a = this.getHitLineWidth(),
                                    o = r + a / 2,
                                    s = i + a / 2;
                                return {
                                    minX: e - o,
                                    minY: n - s,
                                    maxX: e + o,
                                    maxY: n + s
                                }
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    i = e.y,
                                    a = e.rx,
                                    o = e.ry;
                                t = t || self.get("context");
                                var s = a > o ? a: o,
                                    u = a > o ? 1 : a / o,
                                    c = a > o ? o / a: 1,
                                    h = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                                r.mat3.scale(h, h, [u, c]),
                                    r.mat3.translate(h, h, [n, i]),
                                    t.beginPath(),
                                    t.save(),
                                    t.transform(h[0], h[1], h[3], h[4], h[6], h[7]),
                                    t.arc(0, 0, s, 0, 2 * Math.PI),
                                    t.restore(),
                                    t.closePath()
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    r.extend(a, i),
                        r.augment(a, {
                            canFill: !0,
                            canStroke: !0,
                            type: "dom",
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.width,
                                    i = t.height,
                                    a = this.getHitLineWidth() / 2;
                                return {
                                    minX: e - a,
                                    minY: n - a,
                                    maxX: e + r + a,
                                    maxY: n + i + a
                                }
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    a.ATTRS = {
                        x: 0,
                        y: 0,
                        r: 0,
                        lineWidth: 1
                    },
                        r.extend(a, i),
                        r.augment(a, {
                            canFill: !0,
                            canStroke: !0,
                            type: "circle",
                            getDefaultAttrs: function() {
                                return {
                                    lineWidth: 1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.r,
                                    i = this.getHitLineWidth() / 2 + r;
                                return {
                                    minX: e - i,
                                    minY: n - i,
                                    maxX: e + i,
                                    maxY: n + i
                                }
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    r = e.y,
                                    i = e.r;
                                t.beginPath(),
                                    t.arc(n, r, i, 0, 2 * Math.PI, !1),
                                    t.closePath()
                            }
                        }),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(37),
                        a = n(365),
                        o = n(364);
                    function s(t, e, n) {
                        return t + e * Math.cos(n)
                    }
                    function u(t, e, n) {
                        return t + e * Math.sin(n)
                    }
                    var c = function t(e) {
                        t.superclass.constructor.call(this, e)
                    };
                    c.ATTRS = {
                        x: 0,
                        y: 0,
                        r: 0,
                        startAngle: 0,
                        endAngle: 0,
                        clockwise: !1,
                        lineWidth: 1,
                        startArrow: !1,
                        endArrow: !1
                    },
                        r.extend(c, i),
                        r.augment(c, {
                            canStroke: !0,
                            type: "arc",
                            getDefaultAttrs: function() {
                                return {
                                    x: 0,
                                    y: 0,
                                    r: 0,
                                    startAngle: 0,
                                    endAngle: 0,
                                    clockwise: !1,
                                    lineWidth: 1,
                                    startArrow: !1,
                                    endArrow: !1
                                }
                            },
                            calculateBox: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.r,
                                    i = t.startAngle,
                                    o = t.endAngle,
                                    s = t.clockwise,
                                    u = this.getHitLineWidth() / 2,
                                    c = a.box(e, n, r, i, o, s);
                                return c.minX -= u,
                                    c.minY -= u,
                                    c.maxX += u,
                                    c.maxY += u,
                                    c
                            },
                            getStartTangent: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.startAngle,
                                    i = t.r,
                                    a = t.clockwise,
                                    o = Math.PI / 180;
                                a && (o *= -1);
                                var c = [],
                                    h = s(e, i, r + o),
                                    f = u(n, i, r + o),
                                    l = s(e, i, r),
                                    p = u(n, i, r);
                                return c.push([h, f]),
                                    c.push([l, p]),
                                    c
                            },
                            getEndTangent: function() {
                                var t = this._attrs,
                                    e = t.x,
                                    n = t.y,
                                    r = t.endAngle,
                                    i = t.r,
                                    a = t.clockwise,
                                    o = Math.PI / 180,
                                    c = [];
                                a && (o *= -1);
                                var h = s(e, i, r + o),
                                    f = u(n, i, r + o),
                                    l = s(e, i, r),
                                    p = u(n, i, r);
                                return c.push([l, p]),
                                    c.push([h, f]),
                                    c
                            },
                            createPath: function(t) {
                                var e = this._attrs,
                                    n = e.x,
                                    r = e.y,
                                    i = e.r,
                                    a = e.startAngle,
                                    o = e.endAngle,
                                    s = e.clockwise; (t = t || self.get("context")).beginPath(),
                                    t.arc(n, r, i, a, o, s)
                            },
                            afterPath: function(t) {
                                var e = this._attrs;
                                if (t = t || this.get("context"), e.startArrow) {
                                    var n = this.getStartTangent();
                                    o.addStartArrow(t, e, n[0][0], n[0][1], n[1][0], n[1][1])
                                }
                                if (e.endArrow) {
                                    var r = this.getEndTangent();
                                    o.addEndArrow(t, e, r[0][0], r[0][1], r[1][0], r[1][1])
                                }
                            }
                        }),
                        t.exports = c
                },
                function(t, e) {
                    t.exports = {
                        xAt: function(t, e, n, r, i) {
                            return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r
                        },
                        yAt: function(t, e, n, r, i) {
                            return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r
                        },
                        xExtrema: function(t, e, n) {
                            return Math.atan( - n / e * Math.tan(t))
                        },
                        yExtrema: function(t, e, n) {
                            return Math.atan(n / (e * Math.tan(t)))
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = r.vec2;
                    function a(t, e, n, r) {
                        var i = 1 - r;
                        return i * (i * t + 2 * r * e) + r * r * n
                    }
                    function o(t, e, n, r, o, s, u, c, h) {
                        var f, l, p, d, g, v, m, x = .005,
                            y = 1 / 0,
                            b = [u, c];
                        for (g = 0; g < 1; g += .05) p = [a(t, n, o, g), a(e, r, s, g)],
                        (l = i.squaredDistance(b, p)) < y && (f = g, y = l);
                        for (y = 1 / 0, m = 0; m < 32 && !(x < 1e-4); m++) {
                            var M = f - x,
                                w = f + x;
                            p = [a(t, n, o, M), a(e, r, s, M)],
                                l = i.squaredDistance(b, p),
                                M >= 0 && l < y ? (f = M, y = l) : (d = [a(t, n, o, w), a(e, r, s, w)], v = i.squaredDistance(b, d), w <= 1 && v < y ? (f = w, y = v) : x *= .5)
                        }
                        return h && (h.x = a(t, n, o, f), h.y = a(e, r, s, f)),
                            Math.sqrt(y)
                    }
                    t.exports = {
                        at: a,
                        projectPoint: function(t, e, n, r, i, a, s, u) {
                            var c = {};
                            return o(t, e, n, r, i, a, s, u, c),
                                c
                        },
                        pointDistance: o,
                        extrema: function(t, e, n) {
                            var i = t + n - 2 * e;
                            if (r.isNumberEqual(i, 0)) return [.5];
                            var a = (t - e) / i;
                            return a <= 1 && a >= 0 ? [a] : []
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(512),
                        a = n(511),
                        o = n(510),
                        s = n(61),
                        u = function(t) {
                            this._cfg = {
                                zIndex: 0,
                                capture: !0,
                                visible: !0,
                                destroyed: !1
                            },
                                r.assign(this._cfg, this.getDefaultCfg(), t),
                                this.initAttrs(this._cfg.attrs),
                                this._cfg.attrs = {},
                                this.initTransform(),
                                this.init()
                        };
                    u.CFG = {
                        id: null,
                        zIndex: 0,
                        canvas: null,
                        parent: null,
                        capture: !0,
                        context: null,
                        visible: !0,
                        destroyed: !1
                    },
                        r.augment(u, i, a, s, o, {
                            init: function() {
                                this.setSilent("animable", !0),
                                    this.setSilent("animating", !1)
                            },
                            getParent: function() {
                                return this._cfg.parent
                            },
                            getDefaultCfg: function() {
                                return {}
                            },
                            set: function(t, e) {
                                return "zIndex" === t && this._beforeSetZIndex && this._beforeSetZIndex(e),
                                "loading" === t && this._beforeSetLoading && this._beforeSetLoading(e),
                                    this._cfg[t] = e,
                                    this
                            },
                            setSilent: function(t, e) {
                                this._cfg[t] = e
                            },
                            get: function(t) {
                                return this._cfg[t]
                            },
                            show: function() {
                                return this._cfg.visible = !0,
                                    this
                            },
                            hide: function() {
                                return this._cfg.visible = !1,
                                    this
                            },
                            remove: function(t, e) {
                                var n = this._cfg,
                                    i = n.parent,
                                    a = n.el;
                                return i && r.remove(i.get("children"), this),
                                a && (e ? i && i._cfg.tobeRemoved.push(a) : a.parentNode.removeChild(a)),
                                (t || void 0 === t) && this.destroy(),
                                    this
                            },
                            destroy: function() {
                                this.get("destroyed") || (this._attrs = null, this.removeEvent(), this._cfg = {
                                    destroyed: !0
                                })
                            },
                            toFront: function() {
                                var t = this._cfg,
                                    e = t.parent;
                                if (e) {
                                    var n = e._cfg.children,
                                        r = t.el,
                                        i = n.indexOf(this);
                                    n.splice(i, 1),
                                        n.push(this),
                                    r && (r.parentNode.removeChild(r), t.el = null)
                                }
                            },
                            toBack: function() {
                                var t = this._cfg,
                                    e = t.parent;
                                if (e) {
                                    var n = e._cfg.children,
                                        r = t.el,
                                        i = n.indexOf(this);
                                    if (n.splice(i, 1), n.unshift(this), r) {
                                        var a = r.parentNode;
                                        a.removeChild(r),
                                            a.insertBefore(r, a.firstChild)
                                    }
                                }
                            },
                            _beforeSetZIndex: function(t) {
                                var e = this._cfg.parent;
                                this._cfg.zIndex = t,
                                r.isNil(e) || e.sort();
                                var n = this._cfg.el;
                                if (n) {
                                    var i = e._cfg.children,
                                        a = i.indexOf(this),
                                        o = n.parentNode;
                                    o.removeChild(n),
                                        a === i.length - 1 ? o.appendChild(n) : o.insertBefore(n, o.childNodes[a])
                                }
                                return t
                            },
                            _setAttrs: function(t) {
                                return this.attr(t),
                                    t
                            },
                            setZIndex: function(t) {
                                return this._cfg.zIndex = t,
                                    this._beforeSetZIndex(t)
                            },
                            clone: function() {
                                return r.clone(this)
                            },
                            getBBox: function() {}
                        }),
                        t.exports = u
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(405),
                        a = n(509),
                        o = {},
                        s = "_INDEX";
                    function u(t, e, n) {
                        for (var r, i = t.length - 1; i >= 0; i--) {
                            var a = t[i];
                            if (a._cfg.visible && a._cfg.capture && (a.isGroup ? r = a.getShape(e, n) : a.isHit(e, n) && (r = a)), r) break
                        }
                        return r
                    }
                    var c = function t(e) {
                        t.superclass.constructor.call(this, e),
                            this.set("children", []),
                            this.set("tobeRemoved", []),
                            this._beforeRenderUI(),
                            this._renderUI(),
                            this._bindUI()
                    };
                    r.extend(c, i),
                        r.augment(c, {
                            isGroup: !0,
                            type: "group",
                            canFill: !0,
                            canStroke: !0,
                            getDefaultCfg: function() {
                                return function t(e) {
                                    if (!e._cfg && e !== c) {
                                        var n = e.superclass.constructor;
                                        n && !n._cfg && t(n),
                                            e._cfg = {},
                                            r.merge(e._cfg, n._cfg),
                                            r.merge(e._cfg, e.CFG)
                                    }
                                } (this.constructor),
                                    r.merge({},
                                        this.constructor._cfg)
                            },
                            _beforeRenderUI: function() {},
                            _renderUI: function() {},
                            _bindUI: function() {},
                            addShape: function(t, e) {
                                var n = this.get("canvas");
                                e = e || {};
                                var i = o[t];
                                if (i || (i = r.upperFirst(t), o[t] = i), e.attrs && n) {
                                    var s = e.attrs;
                                    if ("text" === t) {
                                        var u = n.get("fontFamily");
                                        u && (s.fontFamily = s.fontFamily ? s.fontFamily: u)
                                    }
                                }
                                e.canvas = n,
                                    e.type = t;
                                var c = new a[i](e);
                                return this.add(c),
                                    c
                            },
                            addGroup: function(t, e) {
                                var n, i = this.get("canvas");
                                if (e = r.merge({},
                                        e), r.isFunction(t)) e ? (e.canvas = i, e.parent = this, n = new t(e)) : n = new t({
                                    canvas: i,
                                    parent: this
                                }),
                                    this.add(n);
                                else if (r.isObject(t)) t.canvas = i,
                                    n = new c(t),
                                    this.add(n);
                                else {
                                    if (void 0 !== t) return ! 1;
                                    n = new c,
                                        this.add(n)
                                }
                                return n
                            },
                            renderBack: function(t, e) {
                                var n = this.get("backShape"),
                                    i = this.getBBox();
                                return r.merge(e, {
                                    x: i.minX - t[3],
                                    y: i.minY - t[0],
                                    width: i.width + t[1] + t[3],
                                    height: i.height + t[0] + t[2]
                                }),
                                    n ? n.attr(e) : n = this.addShape("rect", {
                                        zIndex: -1,
                                        attrs: e
                                    }),
                                    this.set("backShape", n),
                                    this.sort(),
                                    n
                            },
                            removeChild: function(t, e) {
                                if (arguments.length >= 2) this.contain(t) && t.remove(e);
                                else {
                                    if (1 === arguments.length) {
                                        if (!r.isBoolean(t)) return this.contain(t) && t.remove(!0),
                                            this;
                                        e = t
                                    }
                                    0 === arguments.length && (e = !0),
                                        c.superclass.remove.call(this, e)
                                }
                                return this
                            },
                            add: function(t) {
                                var e = this,
                                    n = e.get("children");
                                if (r.isArray(t)) r.each(t,
                                    function(t) {
                                        var n = t.get("parent");
                                        n && n.removeChild(t, !1),
                                            e._setCfgProperty(t)
                                    }),
                                    e._cfg.children = n.concat(t);
                                else {
                                    var i = t,
                                        a = i.get("parent");
                                    a && a.removeChild(i, !1),
                                        e._setCfgProperty(i),
                                        n.push(i)
                                }
                                return e
                            },
                            _setCfgProperty: function(t) {
                                var e = this._cfg;
                                t.set("parent", this),
                                    t.set("canvas", e.canvas),
                                e.timeline && t.set("timeline", e.timeline)
                            },
                            contain: function(t) {
                                return this.get("children").indexOf(t) > -1
                            },
                            getChildByIndex: function(t) {
                                return this.get("children")[t]
                            },
                            getFirst: function() {
                                return this.getChildByIndex(0)
                            },
                            getLast: function() {
                                var t = this.get("children").length - 1;
                                return this.getChildByIndex(t)
                            },
                            getBBox: function() {
                                var t = 1 / 0,
                                    e = -1 / 0,
                                    n = 1 / 0,
                                    i = -1 / 0,
                                    a = this.get("children");
                                a.length > 0 ? r.each(a,
                                    function(r) {
                                        if (r.get("visible")) {
                                            if (r.isGroup && 0 === r.get("children").length) return;
                                            var a = r.getBBox();
                                            if (!a) return ! 0;
                                            var o = [a.minX, a.minY, 1],
                                                s = [a.minX, a.maxY, 1],
                                                u = [a.maxX, a.minY, 1],
                                                c = [a.maxX, a.maxY, 1];
                                            r.apply(o),
                                                r.apply(s),
                                                r.apply(u),
                                                r.apply(c);
                                            var h = Math.min(o[0], s[0], u[0], c[0]),
                                                f = Math.max(o[0], s[0], u[0], c[0]),
                                                l = Math.min(o[1], s[1], u[1], c[1]),
                                                p = Math.max(o[1], s[1], u[1], c[1]);
                                            h < t && (t = h),
                                            f > e && (e = f),
                                            l < n && (n = l),
                                            p > i && (i = p)
                                        }
                                    }) : (t = 0, e = 0, n = 0, i = 0);
                                var o = {
                                    minX: t,
                                    minY: n,
                                    maxX: e,
                                    maxY: i
                                };
                                return o.x = o.minX,
                                    o.y = o.minY,
                                    o.width = o.maxX - o.minX,
                                    o.height = o.maxY - o.minY,
                                    o
                            },
                            getCount: function() {
                                return this.get("children").length
                            },
                            sort: function() {
                                var t = this.get("children");
                                return r.each(t,
                                    function(t, e) {
                                        return t[s] = e,
                                            t
                                    }),
                                    t.sort(function(t) {
                                        return function(e, n) {
                                            var r = t(e, n);
                                            return 0 === r ? e[s] - n[s] : r
                                        }
                                    } (function(t, e) {
                                        return t.get("zIndex") - e.get("zIndex")
                                    })),
                                    this
                            },
                            findById: function(t) {
                                return this.find(function(e) {
                                    return e.get("id") === t
                                })
                            },
                            find: function(t) {
                                if (r.isString(t)) return this.findById(t);
                                var e = this.get("children"),
                                    n = null;
                                return r.each(e,
                                    function(e) {
                                        if (t(e) ? n = e: e.find && (n = e.find(t)), n) return ! 1
                                    }),
                                    n
                            },
                            findAll: function(t) {
                                var e = this.get("children"),
                                    n = [],
                                    i = [];
                                return r.each(e,
                                    function(e) {
                                        t(e) && n.push(e),
                                        e.findAllBy && (i = e.findAllBy(t), n = n.concat(i))
                                    }),
                                    n
                            },
                            findBy: function(t) {
                                var e = this.get("children"),
                                    n = null;
                                return r.each(e,
                                    function(e) {
                                        if (t(e) ? n = e: e.findBy && (n = e.findBy(t)), n) return ! 1
                                    }),
                                    n
                            },
                            findAllBy: function(t) {
                                var e = this.get("children"),
                                    n = [],
                                    i = [];
                                return r.each(e,
                                    function(e) {
                                        t(e) && n.push(e),
                                        e.findAllBy && (i = e.findAllBy(t), n = n.concat(i))
                                    }),
                                    n
                            },
                            getShape: function(t, e) {
                                var n, r = this._attrs.clip,
                                    i = this._cfg.children;
                                if (r) {
                                    var a = [t, e, 1];
                                    r.invert(a, this.get("canvas")),
                                    r.isPointInPath(a[0], a[1]) && (n = u(i, t, e))
                                } else n = u(i, t, e);
                                return n
                            },
                            clearTotalMatrix: function() {
                                if (this.get("totalMatrix")) {
                                    this.setSilent("totalMatrix", null);
                                    for (var t = this._cfg.children,
                                             e = 0; e < t.length; e++) {
                                        t[e].clearTotalMatrix()
                                    }
                                }
                            },
                            clear: function(t) {
                                for (var e = this._cfg.children,
                                         n = e.length - 1; n >= 0; n--) e[n].remove(!0, t);
                                return this._cfg.children = [],
                                    this
                            },
                            destroy: function() {
                                this.get("destroyed") || (this.clear(), c.superclass.destroy.call(this))
                            },
                            clone: function() {
                                var t = this._cfg.children,
                                    e = new c;
                                return r.each(t,
                                    function(t) {
                                        e.add(t.clone())
                                    }),
                                    e
                            }
                        }),
                        t.exports = c
                },
                function(t, e, n) {
                    var r = n(17),
                        i = function(t, e, n, r) {
                            this.type = t,
                                this.target = null,
                                this.currentTarget = null,
                                this.bubbles = n,
                                this.cancelable = r,
                                this.timeStamp = (new Date).getTime(),
                                this.defaultPrevented = !1,
                                this.propagationStopped = !1,
                                this.removed = !1,
                                this.event = e
                        };
                    r.augment(i, {
                        preventDefault: function() {
                            this.defaultPrevented = this.cancelable && !0
                        },
                        stopPropagation: function() {
                            this.propagationStopped = !0
                        },
                        remove: function() {
                            this.remove = !0
                        },
                        clone: function() {
                            return r.clone(this)
                        },
                        toString: function() {
                            return "[Event (type=" + this.type + ")]"
                        }
                    }),
                        t.exports = i
                },
                function(t, e, n) {
                    t.exports = {
                        isFunction: n(47),
                        isObject: n(385),
                        isBoolean: n(419),
                        isNil: n(136),
                        isString: n(358),
                        isArray: n(29),
                        isNumber: n(135),
                        isEmpty: n(413),
                        uniqueId: n(412),
                        clone: n(380),
                        deepMix: n(379),
                        assign: n(369),
                        merge: n(379),
                        upperFirst: n(421),
                        each: n(30),
                        isEqual: n(378),
                        toArray: n(367),
                        extend: n(416),
                        augment: n(417),
                        remove: n(442),
                        isNumberEqual: n(439),
                        toRadian: n(435),
                        toDegree: n(437),
                        mod: n(438),
                        clamp: n(382),
                        createDom: n(447),
                        modifyCSS: n(446),
                        requestAnimationFrame: n(445),
                        getRatio: function() {
                            return window.devicePixelRatio ? window.devicePixelRatio: 2
                        },
                        mat3: n(381),
                        vec2: n(434),
                        vec3: n(433),
                        transform: n(432)
                    }
                },
                function(t, e, n) {
                    var r = n(410).Symbol;
                    t.exports = r
                },
                function(t, e, n) {
                    var r = n(521),
                        i = "object" == typeof self && self && self.Object === Object && self,
                        a = r || i || Function("return this")();
                    t.exports = a
                },
                function(t, e, n) {
                    var r = n(377),
                        i = n(522),
                        a = n(520),
                        o = "Expected a function",
                        s = Math.max,
                        u = Math.min;
                    t.exports = function(t, e, n) {
                        var c, h, f, l, p, d, g = 0,
                            v = !1,
                            m = !1,
                            x = !0;
                        if ("function" != typeof t) throw new TypeError(o);
                        function y(e) {
                            var n = c,
                                r = h;
                            return c = h = void 0,
                                g = e,
                                l = t.apply(r, n)
                        }
                        function b(t) {
                            var n = t - d;
                            return void 0 === d || n >= e || n < 0 || m && t - g >= f
                        }
                        function M() {
                            var t = i();
                            if (b(t)) return w(t);
                            p = setTimeout(M,
                                function(t) {
                                    var n = e - (t - d);
                                    return m ? u(n, f - (t - g)) : n
                                } (t))
                        }
                        function w(t) {
                            return p = void 0,
                                x && c ? y(t) : (c = h = void 0, l)
                        }
                        function _() {
                            var t = i(),
                                n = b(t);
                            if (c = arguments, h = this, d = t, n) {
                                if (void 0 === p) return function(t) {
                                    return g = t,
                                        p = setTimeout(M, e),
                                        v ? y(t) : l
                                } (d);
                                if (m) return p = setTimeout(M, e),
                                    y(d)
                            }
                            return void 0 === p && (p = setTimeout(M, e)),
                                l
                        }
                        return e = a(e) || 0,
                        r(n) && (v = !!n.leading, f = (m = "maxWait" in n) ? s(a(n.maxWait) || 0, e) : f, x = "trailing" in n ? !!n.trailing: x),
                            _.cancel = function() {
                                void 0 !== p && clearTimeout(p),
                                    g = 0,
                                    c = d = h = p = void 0
                            },
                            _.flush = function() {
                                return void 0 === p ? l: w(i())
                            },
                            _
                    }
                },
                function(t, e) {
                    var n = function() {
                        var t = {};
                        return function(e) {
                            return t[e = e || "g"] ? t[e] += 1 : t[e] = 1,
                            e + t[e]
                        }
                    } ();
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(136),
                        i = n(62),
                        a = n(420),
                        o = n(418),
                        s = Object.prototype.hasOwnProperty;
                    t.exports = function(t) {
                        if (r(t)) return ! 0;
                        if (i(t)) return ! t.length;
                        var e = a(t);
                        if ("Map" === e || "Set" === e) return ! t.size;
                        if (o(t)) return ! Object.keys(t).length;
                        for (var n in t) if (s.call(t, n)) return ! 1;
                        return ! 0
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(29),
                        a = Object.prototype.hasOwnProperty;
                    t.exports = function(t, e) {
                        if (!e || !i(t)) return t;
                        var n = {},
                            o = null;
                        return r(t,
                            function(t) {
                                o = e(t),
                                    a.call(n, o) ? n[o].push(t) : n[o] = [t]
                            }),
                            n
                    }
                },
                function(t, e, n) {
                    var r = n(47),
                        i = n(29),
                        a = n(414);
                    t.exports = function(t, e) {
                        if (!e) return {
                            0 : t
                        };
                        if (!r(e)) {
                            var n = i(e) ? e: e.replace(/\s+/g, "").split("*");
                            e = function(t) {
                                for (var e = "_",
                                         r = 0,
                                         i = n.length; r < i; r++) e += t[n[r]] && t[n[r]].toString();
                                return e
                            }
                        }
                        return a(t, e)
                    }
                },
                function(t, e, n) {
                    var r = n(47),
                        i = n(369);
                    t.exports = function(t, e, n, a) {
                        r(e) || (n = e, e = t, t = function() {});
                        var o = Object.create ?
                                function(t, e) {
                                    return Object.create(t, {
                                        constructor: {
                                            value: e
                                        }
                                    })
                                }: function(t, e) {
                                    function n() {}
                                    n.prototype = t;
                                    var r = new n;
                                    return r.constructor = e,
                                        r
                                },
                            s = o(e.prototype, t);
                        return t.prototype = i(s, t.prototype),
                            t.superclass = o(e.prototype, e),
                            i(s, n),
                            i(t, a),
                            t
                    }
                },
                function(t, e, n) {
                    var r = n(47),
                        i = n(367),
                        a = n(369);
                    t.exports = function(t) {
                        for (var e = i(arguments), n = 1; n < e.length; n++) {
                            var o = e[n];
                            r(o) && (o = o.prototype),
                                a(t.prototype, o)
                        }
                    }
                },
                function(t, e) {
                    var n = Object.prototype;
                    t.exports = function(t) {
                        var e = t && t.constructor;
                        return t === ("function" == typeof e && e.prototype || n)
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Boolean")
                    }
                },
                function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t) {
                        return n.call(t).replace(/^\[object /, "").replace(/\]$/, "")
                    }
                },
                function(t, e, n) {
                    var r = n(357);
                    t.exports = function(t) {
                        var e = r(t);
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                },
                function(t, e, n) {
                    var r = n(357);
                    t.exports = function(t) {
                        return r(t).toUpperCase()
                    }
                },
                function(t, e, n) {
                    var r = n(357);
                    t.exports = function(t) {
                        return r(t).toLowerCase()
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                            var a = [{
                                x: +t[r - 2],
                                y: +t[r - 1]
                            },
                                {
                                    x: +t[r],
                                    y: +t[r + 1]
                                },
                                {
                                    x: +t[r + 2],
                                    y: +t[r + 3]
                                },
                                {
                                    x: +t[r + 4],
                                    y: +t[r + 5]
                                }];
                            e ? r ? i - 4 === r ? a[3] = {
                                x: +t[0],
                                y: +t[1]
                            }: i - 2 === r && (a[2] = {
                                    x: +t[0],
                                    y: +t[1]
                                },
                                    a[3] = {
                                        x: +t[2],
                                        y: +t[3]
                                    }) : a[0] = {
                                x: +t[i - 2],
                                y: +t[i - 1]
                            }: i - 4 === r ? a[3] = a[2] : r || (a[0] = {
                                    x: +t[r],
                                    y: +t[r + 1]
                                }),
                                n.push(["C", ( - a[0].x + 6 * a[1].x + a[2].x) / 6, ( - a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                        }
                        return n
                    }
                },
                function(t, e) {
                    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                            function(t) {
                                return typeof t
                            }: function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                            },
                        r = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029",
                        i = new RegExp("([a-z])[" + r + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + r + "]*,?[" + r + "]*)+)", "ig"),
                        a = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + r + "]*,?[" + r + "]*", "ig");
                    t.exports = function(t) {
                        if (!t) return null;
                        if ((void 0 === t ? "undefined": n(t)) === n([])) return t;
                        var e = {
                                a: 7,
                                c: 6,
                                o: 2,
                                h: 1,
                                l: 2,
                                m: 2,
                                r: 4,
                                q: 4,
                                s: 4,
                                t: 2,
                                v: 1,
                                u: 3,
                                z: 0
                            },
                            r = [];
                        return String(t).replace(i,
                            function(t, n, i) {
                                var o = [],
                                    s = n.toLowerCase();
                                if (i.replace(a,
                                        function(t, e) {
                                            e && o.push( + e)
                                        }), "m" === s && o.length > 2 && (r.push([n].concat(o.splice(0, 2))), s = "l", n = "m" === n ? "l": "L"), "o" === s && 1 === o.length && r.push([n, o[0]]), "r" === s) r.push([n].concat(o));
                                else for (; o.length >= e[s] && (r.push([n].concat(o.splice(0, e[s]))), e[s]););
                            }),
                            r
                    }
                },
                function(t, e, n) {
                    var r = n(425),
                        i = n(424);
                    function a(t, e, n, r, i) {
                        var a = [];
                        if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) {
                            var o = Math.PI / 180,
                                s = t + n * Math.cos( - r * o),
                                u = t + n * Math.cos( - i * o);
                            a = [["M", s, e + n * Math.sin( - r * o)], ["A", n, n, 0, +(i - r > 180), 0, u, e + n * Math.sin( - i * o)]]
                        } else a = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
                        return a
                    }
                    t.exports = function(t) {
                        if (! (t = r(t)) || !t.length) return [["M", 0, 0]];
                        var e = [],
                            n = 0,
                            o = 0,
                            s = 0,
                            u = 0,
                            c = 0,
                            h = void 0,
                            f = void 0;
                        "M" === t[0][0] && (s = n = +t[0][1], u = o = +t[0][2], c++, e[0] = ["M", n, o]);
                        for (var l, p, d = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = c, v = t.length; g < v; g++) {
                            if (e.push(l = []), (h = (p = t[g])[0]) !== h.toUpperCase()) switch (l[0] = h.toUpperCase(), l[0]) {
                                case "A":
                                    l[1] = p[1],
                                        l[2] = p[2],
                                        l[3] = p[3],
                                        l[4] = p[4],
                                        l[5] = p[5],
                                        l[6] = +p[6] + n,
                                        l[7] = +p[7] + o;
                                    break;
                                case "V":
                                    l[1] = +p[1] + o;
                                    break;
                                case "H":
                                    l[1] = +p[1] + n;
                                    break;
                                case "R":
                                    for (var m = 2,
                                             x = (f = [n, o].concat(p.slice(1))).length; m < x; m++) f[m] = +f[m] + n,
                                        f[++m] = +f[m] + o;
                                    e.pop(),
                                        e = e.concat(i(f, d));
                                    break;
                                case "O":
                                    e.pop(),
                                        (f = a(n, o, p[1], p[2])).push(f[0]),
                                        e = e.concat(f);
                                    break;
                                case "U":
                                    e.pop(),
                                        e = e.concat(a(n, o, p[1], p[2], p[3])),
                                        l = ["U"].concat(e[e.length - 1].slice( - 2));
                                    break;
                                case "M":
                                    s = +p[1] + n,
                                        u = +p[2] + o;
                                    break;
                                default:
                                    for (var y = 1,
                                             b = p.length; y < b; y++) l[y] = +p[y] + (y % 2 ? n: o)
                            } else if ("R" === h) f = [n, o].concat(p.slice(1)),
                                e.pop(),
                                e = e.concat(i(f, d)),
                                l = ["R"].concat(p.slice( - 2));
                            else if ("O" === h) e.pop(),
                                (f = a(n, o, p[1], p[2])).push(f[0]),
                                e = e.concat(f);
                            else if ("U" === h) e.pop(),
                                e = e.concat(a(n, o, p[1], p[2], p[3])),
                                l = ["U"].concat(e[e.length - 1].slice( - 2));
                            else for (var M = 0,
                                          w = p.length; M < w; M++) l[M] = p[M];
                            if ("O" !== (h = h.toUpperCase())) switch (l[0]) {
                                case "Z":
                                    n = +s,
                                        o = +u;
                                    break;
                                case "H":
                                    n = l[1];
                                    break;
                                case "V":
                                    o = l[1];
                                    break;
                                case "M":
                                    s = l[l.length - 2],
                                        u = l[l.length - 1];
                                    break;
                                default:
                                    n = l[l.length - 2],
                                        o = l[l.length - 1]
                            }
                        }
                        return e
                    }
                },
                function(t, e, n) {
                    var r = n(426),
                        i = function(t, e, n, r) {
                            return [t, e, n, r, n, r]
                        },
                        a = function(t, e, n, r, i, a) {
                            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * a + 2 / 3 * r, i, a]
                        };
                    t.exports = function(t, e) {
                        var n = r(t),
                            o = e && r(e),
                            s = {
                                x: 0,
                                y: 0,
                                bx: 0,
                                by: 0,
                                X: 0,
                                Y: 0,
                                qx: null,
                                qy: null
                            },
                            u = {
                                x: 0,
                                y: 0,
                                bx: 0,
                                by: 0,
                                X: 0,
                                Y: 0,
                                qx: null,
                                qy: null
                            },
                            c = [],
                            h = [],
                            f = "",
                            l = "",
                            p = void 0,
                            d = function(t, e, n) {
                                var r = void 0,
                                    o = void 0;
                                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                                switch (! (t[0] in {
                                    T: 1,
                                    Q: 1
                                }) && (e.qx = e.qy = null), t[0]) {
                                    case "M":
                                        e.X = t[1],
                                            e.Y = t[2];
                                        break;
                                    case "A":
                                        t = ["C"].concat(function t(e, n, r, i, a, o, s, u, c, h) {
                                            r === i && (r += 1);
                                            var f = 120 * Math.PI / 180,
                                                l = Math.PI / 180 * ( + a || 0),
                                                p = [],
                                                d = void 0,
                                                g = void 0,
                                                v = void 0,
                                                m = void 0,
                                                x = void 0,
                                                y = function(t, e, n) {
                                                    return {
                                                        x: t * Math.cos(n) - e * Math.sin(n),
                                                        y: t * Math.sin(n) + e * Math.cos(n)
                                                    }
                                                };
                                            if (h) g = h[0],
                                                v = h[1],
                                                m = h[2],
                                                x = h[3];
                                            else {
                                                e = (d = y(e, n, -l)).x,
                                                    n = d.y,
                                                    u = (d = y(u, c, -l)).x,
                                                    c = d.y,
                                                e === u && n === c && (u += 1, c += 1);
                                                var b = (e - u) / 2,
                                                    M = (n - c) / 2,
                                                    w = b * b / (r * r) + M * M / (i * i);
                                                w > 1 && (r *= w = Math.sqrt(w), i *= w);
                                                var _ = r * r,
                                                    E = i * i,
                                                    A = (o === s ? -1 : 1) * Math.sqrt(Math.abs((_ * E - _ * M * M - E * b * b) / (_ * M * M + E * b * b)));
                                                m = A * r * M / i + (e + u) / 2,
                                                    x = A * -i * b / r + (n + c) / 2,
                                                    g = Math.asin(((n - x) / i).toFixed(9)),
                                                    v = Math.asin(((c - x) / i).toFixed(9)),
                                                    g = e < m ? Math.PI - g: g,
                                                    v = u < m ? Math.PI - v: v,
                                                g < 0 && (g = 2 * Math.PI + g),
                                                v < 0 && (v = 2 * Math.PI + v),
                                                s && g > v && (g -= 2 * Math.PI),
                                                !s && v > g && (v -= 2 * Math.PI)
                                            }
                                            var S = v - g;
                                            if (Math.abs(S) > f) {
                                                var P = v,
                                                    O = u,
                                                    C = c;
                                                v = g + f * (s && v > g ? 1 : -1),
                                                    p = t(u = m + r * Math.cos(v), c = x + i * Math.sin(v), r, i, a, 0, s, O, C, [v, P, m, x])
                                            }
                                            S = v - g;
                                            var I = Math.cos(g),
                                                T = Math.sin(g),
                                                k = Math.cos(v),
                                                N = Math.sin(v),
                                                L = Math.tan(S / 4),
                                                B = 4 / 3 * r * L,
                                                j = 4 / 3 * i * L,
                                                D = [e, n],
                                                R = [e + B * T, n - j * I],
                                                F = [u + B * N, c - j * k],
                                                Y = [u, c];
                                            if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], h) return [R, F, Y].concat(p);
                                            for (var X = [], G = 0, q = (p = [R, F, Y].concat(p).join().split(",")).length; G < q; G++) X[G] = G % 2 ? y(p[G - 1], p[G], l).y: y(p[G], p[G + 1], l).x;
                                            return X
                                        }.apply(0, [e.x, e.y].concat(t.slice(1))));
                                        break;
                                    case "S":
                                        "C" === n || "S" === n ? (r = 2 * e.x - e.bx, o = 2 * e.y - e.by) : (r = e.x, o = e.y),
                                            t = ["C", r, o].concat(t.slice(1));
                                        break;
                                    case "T":
                                        "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y),
                                            t = ["C"].concat(a(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                        break;
                                    case "Q":
                                        e.qx = t[1],
                                            e.qy = t[2],
                                            t = ["C"].concat(a(e.x, e.y, t[1], t[2], t[3], t[4]));
                                        break;
                                    case "L":
                                        t = ["C"].concat(i(e.x, e.y, t[1], t[2]));
                                        break;
                                    case "H":
                                        t = ["C"].concat(i(e.x, e.y, t[1], e.y));
                                        break;
                                    case "V":
                                        t = ["C"].concat(i(e.x, e.y, e.x, t[1]));
                                        break;
                                    case "Z":
                                        t = ["C"].concat(i(e.x, e.y, e.X, e.Y))
                                }
                                return t
                            },
                            g = function(t, e) {
                                if (t[e].length > 7) {
                                    t[e].shift();
                                    for (var r = t[e]; r.length;) c[e] = "A",
                                    o && (h[e] = "A"),
                                        t.splice(e++, 0, ["C"].concat(r.splice(0, 6)));
                                    t.splice(e, 1),
                                        p = Math.max(n.length, o && o.length || 0)
                                }
                            },
                            v = function(t, e, r, i, a) {
                                t && e && "M" === t[a][0] && "M" !== e[a][0] && (e.splice(a, 0, ["M", i.x, i.y]), r.bx = 0, r.by = 0, r.x = t[a][1], r.y = t[a][2], p = Math.max(n.length, o && o.length || 0))
                            };
                        p = Math.max(n.length, o && o.length || 0);
                        for (var m = 0; m < p; m++) {
                            n[m] && (f = n[m][0]),
                            "C" !== f && (c[m] = f, m && (l = c[m - 1])),
                                n[m] = d(n[m], s, l),
                            "A" !== c[m] && "C" === f && (c[m] = "C"),
                                g(n, m),
                            o && (o[m] && (f = o[m][0]), "C" !== f && (h[m] = f, m && (l = h[m - 1])), o[m] = d(o[m], u, l), "A" !== h[m] && "C" === f && (h[m] = "C"), g(o, m)),
                                v(n, o, s, u, m),
                                v(o, n, u, s, m);
                            var x = n[m],
                                y = o && o[m],
                                b = x.length,
                                M = o && y.length;
                            s.x = x[b - 2],
                                s.y = x[b - 1],
                                s.bx = parseFloat(x[b - 4]) || s.x,
                                s.by = parseFloat(x[b - 3]) || s.y,
                                u.bx = o && (parseFloat(y[M - 4]) || u.x),
                                u.by = o && (parseFloat(y[M - 3]) || u.y),
                                u.x = o && y[M - 2],
                                u.y = o && y[M - 1]
                        }
                        return o ? [n, o] : n
                    }
                },
                function(t, e) {
                    var n = /,?([a-z]),?/gi;
                    t.exports = function(t) {
                        return t.join(",").replace(n, "$1")
                    }
                },
                function(t, e, n) {
                    var r = n(428);
                    t.exports = function(t, e, n, i, a) {
                        if (a) return [["M", +t + +a, e], ["l", n - 2 * a, 0], ["a", a, a, 0, 0, 1, a, a], ["l", 0, i - 2 * a], ["a", a, a, 0, 0, 1, -a, a], ["l", 2 * a - n, 0], ["a", a, a, 0, 0, 1, -a, -a], ["l", 0, 2 * a - i], ["a", a, a, 0, 0, 1, a, -a], ["z"]];
                        var o = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
                        return o.parsePathArray = r,
                            o
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(47),
                        a = Object.values ?
                            function(t) {
                                return Object.values(t)
                            }: function(t) {
                                var e = [];
                                return r(t,
                                    function(n, r) {
                                        i(t) && "prototype" === r || e.push(n)
                                    }),
                                    e
                            };
                    t.exports = a
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return t.hasOwnProperty(e)
                    }
                },
                function(t, e, n) {
                    var r = n(380),
                        i = n(30),
                        a = n(381);
                    t.exports = function(t, e) {
                        return t = r(t),
                            i(e,
                                function(e) {
                                    switch (e[0]) {
                                        case "t":
                                            a.translate(t, t, [e[1], e[2]]);
                                            break;
                                        case "s":
                                            a.scale(t, t, [e[1], e[2]]);
                                            break;
                                        case "r":
                                            a.rotate(t, t, e[1]);
                                            break;
                                        case "m":
                                            a.multiply(t, t, e[1]);
                                            break;
                                        default:
                                            return ! 1
                                    }
                                }),
                            t
                    }
                },
                function(t, e, n) {
                    var r = n(149);
                    t.exports = r
                },
                function(t, e, n) {
                    var r = n(150),
                        i = n(382);
                    r.angle = function(t, e) {
                        var n = r.dot(t, e) / (r.length(t) * r.length(e));
                        return Math.acos(i(n, -1, 1))
                    },
                        r.direction = function(t, e) {
                            return t[0] * e[1] - e[0] * t[1]
                        },
                        r.angleTo = function(t, e, n) {
                            var i = r.angle(t, e),
                                a = r.direction(t, e) >= 0;
                            return n ? a ? 2 * Math.PI - i: i: a ? i: 2 * Math.PI - i
                        },
                        r.vertical = function(t, e, n) {
                            return n ? (t[0] = e[1], t[1] = -1 * e[0]) : (t[0] = -1 * e[1], t[1] = e[0]),
                                t
                        },
                        t.exports = r
                },
                function(t, e) {
                    var n = Math.PI / 180;
                    t.exports = function(t) {
                        return n * t
                    }
                },
                function(t, e) {
                    t.exports = parseInt
                },
                function(t, e) {
                    var n = 180 / Math.PI;
                    t.exports = function(t) {
                        return n * t
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return (t % e + e) % e
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-5;
                        return Math.abs(t - e) < n
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(368);
                    t.exports = function(t) {
                        var e = [];
                        return r(t,
                            function(t) {
                                i(e, t) || e.push(t)
                            }),
                            e
                    }
                },
                function(t, e, n) {
                    var r = n(62),
                        i = Array.prototype.splice;
                    t.exports = function(t, e) {
                        if (!r(t)) return [];
                        for (var n = t ? e.length: 0, a = n - 1; n--;) {
                            var o = void 0,
                                s = e[n];
                            n !== a && s === o || (o = s, i.call(t, s, 1))
                        }
                        return t
                    }
                },
                function(t, e) {
                    var n = Array.prototype,
                        r = n.splice,
                        i = n.indexOf,
                        a = n.slice;
                    t.exports = function(t) {
                        for (var e = a.call(arguments, 1), n = 0; n < e.length; n++) for (var o = e[n], s = -1; (s = i.call(t, o)) > -1;) r.call(t, s, 1);
                        return t
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(47),
                        a = Object.keys ?
                            function(t) {
                                return Object.keys(t)
                            }: function(t) {
                                var e = [];
                                return r(t,
                                    function(n, r) {
                                        i(t) && "prototype" === r || e.push(r)
                                    }),
                                    e
                            };
                    t.exports = a
                },
                function(t, e, n) {
                    var r = n(443),
                        i = n(136);
                    t.exports = function(t, e) {
                        var n = r(e),
                            a = n.length;
                        if (i(t)) return ! a;
                        for (var o = 0; o < a; o += 1) {
                            var s = n[o];
                            if (e[s] !== t[s] || !(s in t)) return ! 1
                        }
                        return ! 0
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                        function(t) {
                            return setTimeout(t, 16)
                        })(t)
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        if (t) for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
                        return t
                    }
                },
                function(t, e) {
                    var n = document.createElement("table"),
                        r = document.createElement("tr"),
                        i = /^\s*<(\w+|!)[^>]*>/,
                        a = {
                            tr: document.createElement("tbody"),
                            tbody: n,
                            thead: n,
                            tfoot: n,
                            td: r,
                            th: r,
                            "*": document.createElement("div")
                        };
                    t.exports = function(t) {
                        var e = i.test(t) && RegExp.$1;
                        e in a || (e = "*");
                        var n = a[e];
                        t = t.replace(/(^\s*)|(\s*$)/g, ""),
                            n.innerHTML = "" + t;
                        var r = n.childNodes[0];
                        return n.removeChild(r),
                            r
                    }
                },
                function(t, e, n) {
                    var r = n(152),
                        i = {
                            isBetween: function(t, e, n) {
                                return t >= e && t <= n
                            },
                            getLineIntersect: function(t, e, n, r) {
                                var a = n.x - t.x,
                                    o = n.y - t.y,
                                    s = e.x - t.x,
                                    u = e.y - t.y,
                                    c = r.x - n.x,
                                    h = r.y - n.y,
                                    f = s * h - u * c,
                                    l = null;
                                if (f * f > .001 * (s * s + u * u) * (c * c + h * h)) {
                                    var p = (a * h - o * c) / f,
                                        d = (a * u - o * s) / f;
                                    i.isBetween(p, 0, 1) && i.isBetween(d, 0, 1) && (l = {
                                        x: t.x + p * s,
                                        y: t.y + p * u
                                    })
                                }
                                return l
                            },
                            getIntersectPointRect: function(t, e) {
                                var n = t.minX,
                                    r = t.minY,
                                    a = t.maxX - t.minX,
                                    o = t.maxY - t.minY,
                                    s = [],
                                    u = {
                                        x: n + a / 2,
                                        y: r + o / 2
                                    };
                                s.push({
                                    x: n,
                                    y: r
                                }),
                                    s.push({
                                        x: n + a,
                                        y: r
                                    }),
                                    s.push({
                                        x: n + a,
                                        y: r + o
                                    }),
                                    s.push({
                                        x: n,
                                        y: r + o
                                    }),
                                    s.push({
                                        x: n,
                                        y: r
                                    });
                                for (var c = null,
                                         h = 1; h < s.length && !(c = i.getLineIntersect(s[h - 1], s[h], u, e)); h++);
                                return c
                            },
                            getIntersectPointCircle: function(t, e, n, r, i) {
                                if (Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2)) < i) return null;
                                var a = t - n,
                                    o = e - r,
                                    s = Math.sign(a),
                                    u = Math.sign(o),
                                    c = Math.atan(o / a);
                                return {
                                    x: n + Math.abs(i * Math.cos(c)) * s,
                                    y: r + Math.abs(i * Math.sin(c)) * u
                                }
                            },
                            applyMatrix: function(t, e, n) {
                                void 0 === n && (n = 1);
                                var i = [t.x, t.y, n];
                                return r.vec3.transformMat3(i, i, e),
                                    {
                                        x: i[0],
                                        y: i[1]
                                    }
                            },
                            invertMatrix: function(t, e, n) {
                                void 0 === n && (n = 1);
                                var i = r.mat3.invert([], e),
                                    a = [t.x, t.y, n];
                                return r.vec3.transformMat3(a, a, i),
                                    {
                                        x: a[0],
                                        y: a[1]
                                    }
                            },
                            radixSort: function(t, e) {
                                var n, r, i, a, o, s, u, c = 10,
                                    h = 1,
                                    f = [],
                                    l = 1;
                                for (i = 0; i < t.length; i++) n = e(t[i]),
                                    r = (n = parseInt(n, 10)).toString().length,
                                n.toString().length > l && (l = r);
                                for (i = 0; i < l; i++, h *= 10, c *= 10) {
                                    for (a = 0; a < t.length; a++) o = e(t[a]),
                                    void 0 === f[o = parseInt(o % c / h, 10)] && (f[o] = []),
                                        f[o].push(t[a]);
                                    for (s = 0, a = 0; a < f.length; a++) if (u = void 0, void 0 !== f[a]) for (u = f[a].shift(); void 0 !== u;) t[s++] = u,
                                        u = f[a].shift()
                                }
                                return t
                            },
                            getArcOfVectors: function(t, e) {
                                var n = t.x,
                                    r = t.y,
                                    i = e.x,
                                    a = e.y,
                                    o = Math.sqrt(n * n + r * r),
                                    s = Math.sqrt(i * i + a * a);
                                return Math.acos((n * i + r * a) / (o * s))
                            }
                        };
                    t.exports = r.mix({},
                        r, i)
                },
                function(t, e, n) {
                    var r = n(153);
                    r.registerShapeManager("node", {
                        defaultShapeType: "common"
                    }),
                        r.registerShapeManager("edge", {
                            defaultShapeType: "common"
                        }),
                        r.registerShapeManager("group", {
                            defaultShapeType: "common"
                        }),
                        r.registerShapeManager("guide", {
                            defaultShapeType: "common"
                        }),
                        n(490),
                        n(487),
                        n(485),
                        n(483),
                        t.exports = r
                },
                function(t, e, n) {
                    var r = n(146),
                        i = n(372),
                        a = n(22);
                    setTimeout(function() {
                            var t = r.track;
                            if (r.track) {
                                var e = new Image,
                                    n = {
                                        pg: document.URL,
                                        r: (new Date).getTime(),
                                        g6: !0,
                                        version: i,
                                        page_type: "syslog"
                                    };
                                a.isObject(t) && a.mix(n, t);
                                var o = encodeURIComponent(JSON.stringify([n]));
                                e.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + o
                            }
                        },
                        2e3)
                },
                function(t, e, n) {
                    var r = n(361),
                        i = function(t) {
                            function e(e) {
                                var n;
                                return (n = t.call(this, e) || this).layout = r.mindmap,
                                    n
                            }
                            return function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t),
                                e
                        } (n(360));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(361),
                        i = function(t) {
                            function e(e) {
                                var n;
                                return (n = t.call(this, e) || this).layout = r.indented,
                                    n
                            }
                            return function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t),
                                e
                        } (n(360));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(361),
                        i = function(t) {
                            function e(e) {
                                var n;
                                return (n = t.call(this, e) || this).layout = r.dendrogram,
                                    n
                            }
                            return function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t),
                                e
                        } (n(360));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(361),
                        i = function(t) {
                            function e(e) {
                                var n;
                                return (n = t.call(this, e) || this).layout = r.compactBox,
                                    n
                            }
                            return function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t),
                                e
                        } (n(360));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(22),
                        i = n(389),
                        a = n(387),
                        o = function(t) {
                            function e(e) {
                                var n = r.mix({
                                        layout: new a.CompactBoxTree({
                                            getHGap: function() {
                                                return 10
                                            },
                                            getVGap: function() {
                                                return 10
                                            }
                                        }),
                                        _type: "tree"
                                    },
                                    e);
                                return t.call(this, n) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n.initEvent = function() {
                                var t = this;
                                this.on("afterdrawinner",
                                    function() {
                                        t.get("_sourceData").roots.forEach(function(e) {
                                            var n = t.find(e.id);
                                            t._setVisibleByCollapsed(n)
                                        })
                                    })
                            },
                                n._executeLayout = function(t) {
                                    var e = this.get("_sourceData");
                                    r.isFunction(t) ? t(e.roots, this) : r.isObject(t) && (t.roots = e.roots, t.graph = this, t.execute())
                                },
                                n.getHierarchy = function(t) {
                                    t = this.getItem(t);
                                    for (var e = this.get("_dataMap"), n = t.getModel().parent, r = 1; n;) n = e[n].parent,
                                        r++;
                                    return r
                                },
                                n.parseSource = function(t) {
                                    var e = t.roots,
                                        n = this.get("_dataMap"),
                                        i = [],
                                        a = [];
                                    if (!e) throw new Error("please set data.roots!");
                                    return e.forEach(function(t) {
                                        r.traverseTree(t,
                                            function(t, e) {
                                                t.id || (t.id = r.guid()),
                                                e || (e = n[t.parent]),
                                                e && (t.parent = e.id, e.id || (e.id = r.guid()), a.push({
                                                    source: e.id,
                                                    target: t.id,
                                                    id: e.id + "-" + t.id
                                                })),
                                                    i.push(t)
                                            },
                                            function(t) {
                                                return t.children
                                            },
                                            !0)
                                    }),
                                        {
                                            nodes: i,
                                            edges: a
                                        }
                                },
                                n._setVisibleByCollapsed = function(t) {
                                    var e = t.getModel();
                                    t.collapsedParent ? (t.hide(), t.getEdges().forEach(function(t) {
                                        t.hide()
                                    }), t.deepEach(function(t) {
                                        t.hide(),
                                            t.getEdges().forEach(function(t) {
                                                t.hide()
                                            })
                                    })) : e.collapsed ? t.deepEach(function(t) {
                                        t.hide(),
                                            t.getEdges().forEach(function(t) {
                                                t.hide()
                                            })
                                    }) : t.deepEach(function(t) {
                                        t.collapsedParent && (t.hide(), t.getEdges().forEach(function(t) {
                                            t.hide()
                                        }))
                                    })
                                },
                                n.source = function(t) {
                                    var e = this.parseSource(t);
                                    this.emit("beforesource"),
                                        this.set("_sourceData", t),
                                        this.set("_data", e),
                                        this.emit("aftersource")
                                },
                                n._setNodeNth = function(t, e) {
                                    var n = (t = this.getItem(t)).getModel(),
                                        i = t.getParent().getModel().children;
                                    r.Array.remove(i, n),
                                        i.splice(e, 0, n)
                                },
                                n.getNth = function(t) {
                                    var e = (t = this.getItem(t)).getModel();
                                    return t.getParent().getModel().children.indexOf(e)
                                },
                                n.add = function(t, e) {
                                    var n, i = this.get("_dataMap")[e.parent],
                                        a = {
                                            action: "add",
                                            model: e
                                        };
                                    if ("node" === t || "guide" === t) {
                                        if (this.emit("beforechange", a), "node" === t) {
                                            if (!i) throw new Error("please set available parent Id !");
                                            r.isArray(i.children) ? i.children.push(e) : i.children = [e];
                                            var o = this.parseSource({
                                                roots: [e]
                                            });
                                            this._addItems("node", o.nodes),
                                                this._addItems("edge", o.edges),
                                                n = this.find(e.id),
                                                this._setVisibleByCollapsed(n),
                                            r.isNil(e.nth) || this._setNodeNth(n, e.nth),
                                                this.find(i.id).forceUpdate()
                                        } else this._addItems(t, [e]),
                                            n = this.find(e.id);
                                        return a.item = n,
                                            this.emit("afterchange", a),
                                            n
                                    }
                                    console.warn("Tree do not support add type " + t + "!")
                                },
                                n.update = function(t, e) {
                                    var n = this;
                                    if (e) {
                                        var i = (t = this.getItem(t)).getModel(),
                                            a = r.mix({},
                                                i),
                                            o = {
                                                action: "update",
                                                item: t,
                                                originModel: a,
                                                updateModel: e
                                            };
                                        if (this.emit("beforechange", o), this._updateItems([t], [e]), t.isNode) {
                                            if ("collapsed" in e && (e.collapsed ? t.deepEach(function(t) {
                                                    t.hide(),
                                                        t.getEdges().forEach(function(t) {
                                                            t.hide()
                                                        })
                                                }) : t.deepEach(function(t) {
                                                        t.show(),
                                                            t.getInEdges().forEach(function(t) {
                                                                t.show()
                                                            })
                                                    },
                                                    function(t) {
                                                        return t.model.collapsed ? null: t.getChildren()
                                                    })), e.parent && e.parent !== a.parent) {
                                                var s = this.find(a.parent).getModel(),
                                                    u = this.find(e.parent).getModel(),
                                                    c = this.find(s.id + "-" + a.id),
                                                    h = {
                                                        id: u.id + "-" + a.id,
                                                        source: u.id,
                                                        target: a.id
                                                    };
                                                r.Array.remove(s.children, i),
                                                    u.children ? u.children.push(i) : u.children = [i],
                                                    this._removeItems([c]),
                                                    this._addItems("edge", [h]),
                                                    this.find(u.id).forceUpdate()
                                            }
                                            r.isArray(e.children) && (a.children && r.each(a.children,
                                                function(t) {
                                                    var e = n.find(t.id),
                                                        r = [e];
                                                    e.getEdges().forEach(function(t) {
                                                        r.push(t)
                                                    }),
                                                        n._removeItems(r)
                                                }), r.each(e.children,
                                                function(t) {
                                                    var e = n.parseSource({
                                                            roots: [t]
                                                        }),
                                                        i = r.isNil(t.id) ? r.guid() : t.id;
                                                    n._addItems("node", e.nodes),
                                                        n._addItems("edge", e.edges),
                                                    !t.parent && n._addItems("edge", [{
                                                        id: a.id + "-" + i,
                                                        source: a.id,
                                                        target: i
                                                    }])
                                                })),
                                            r.isNil(e.nth) || this._setNodeNth(t, e.nth);
                                            var f = this.find(i.parent);
                                            f && f.forceUpdate()
                                        }
                                        return this.emit("afterchange", o),
                                            this
                                    }
                                },
                                n.remove = function(t) {
                                    var e = this.get("_dataMap"),
                                        n = [];
                                    if ((t = this.getItem(t)) && !t.destroyed) {
                                        var i = {
                                            action: "remove",
                                            item: t
                                        };
                                        if (this.emit("beforechange", i), n.push(t), t.getEdges().forEach(function(t) {
                                                n.push(t)
                                            }), "node" === t.type) {
                                            var a = t.getModel(),
                                                o = e[a.parent];
                                            t.deepEach(function(t) {
                                                n.push(t),
                                                    t.getEdges().forEach(function(t) {
                                                        n.push(t)
                                                    })
                                            }),
                                                r.Array.remove(o.children, a),
                                                this.find(o.id).forceUpdate()
                                        }
                                        return this._removeItems(r.uniq(n)),
                                            this.emit("afterchange", i),
                                            this
                                    }
                                },
                                n.getRoots = function() {
                                    var t = this;
                                    return this.getSource().roots.map(function(e) {
                                        return t.find(e.id)
                                    })
                                },
                                n.save = function() {
                                    var t = {
                                        roots: r.clone(this.getSource().roots),
                                        guides: this.getGuides().map(function(t) {
                                            return t.getModel()
                                        })
                                    };
                                    return 0 === t.roots.length && delete t.roots,
                                    0 === t.guides.length && delete t.guides,
                                        t
                                },
                                e
                        } (i);
                    t.exports = o
                },
                function(t, e, n) {
                    var r = n(22),
                        i = {
                            INIT: "_initForceFit"
                        };
                    i.AUGMENT = {
                        _initForceFit: function() {
                            var t = this.get("width"),
                                e = this.get("height");
                            return t || e ? t ? e ? void 0 : (this.forceFit("height"), void this._bindForceEvent("height")) : (this.forceFit("width"), void this._bindForceEvent("width")) : (this.forceFit(), void this._bindForceEvent())
                        },
                        _bindForceEvent: function(t) {
                            var e = this,
                                n = this._getTimer("forceFit"),
                                r = function() {
                                    var r = setTimeout(function() {
                                            e.forceFit(t)
                                        },
                                        200);
                                    n && clearTimeout(n),
                                        e._setTimer("forceFit", r)
                                };
                            window.addEventListener("resize", r),
                                this.set("_windowForceResizeEvent", r)
                        },
                        forceFit: function(t) {
                            var e = this.get("_containerDOM"),
                                n = this.get("width"),
                                i = this.get("height"),
                                a = r.getHeight(e),
                                o = r.getWidth(e);
                            return "width" === t ? (this.changeSize(o, i), this) : "height" === t ? (this.changeSize(n, a), this) : (this.changeSize(o, a), this)
                        }
                    },
                        t.exports = i
                },
                function(t, e, n) {
                    var r = n(22),
                        i = {
                            CFG: {
                                fitView: void 0,
                                fitViewPadding: 10,
                                minZoom: .2,
                                maxZoom: 10
                            }
                        };
                    i.AUGMENT = {
                        getBBox: function() {
                            var t = this.get("_itemGroup"),
                                e = this.get("_itemMap"),
                                n = t.get("children");
                            return n.length > 0 ? (n = n.filter(function(t) {
                                var n = e[t.id];
                                return !! n && !1 !== n.getShapeObj().bboxCalculation
                            }), r.getChildrenBBox(n)) : {
                                minX: 0,
                                minY: 0,
                                maxX: this.get("width"),
                                maxY: this.get("height")
                            }
                        },
                        getFitViewPadding: function() {
                            return r.toAllPadding(this.get("fitViewPadding"))
                        },
                        setFitView: function(t) {
                            if (!t) return this;
                            if ("autoZoom" === t) return this.autoZoom(),
                                this;
                            var e = this.getFitViewPadding(),
                                n = this.get("width"),
                                i = this.get("height"),
                                a = this.getBBox(),
                                o = a.maxX - a.minX,
                                s = a.maxY - a.minY,
                                u = {
                                    x: 0,
                                    y: 0,
                                    width: n,
                                    height: i
                                },
                                c = r.getNineBoxPosition(t, u, o, s, e),
                                h = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                            r.mat3.translate(h, h, [ - a.minX + c.x, -a.minY + c.y]),
                                this.updateMatrix(h)
                        },
                        _getZoomRatio: function(t) {
                            var e = this.get("maxZoom"),
                                n = this.get("minZoom");
                            return t < n && (t = n),
                            t > e && (t = e),
                                t
                        },
                        autoZoom: function(t) {
                            var e = this;
                            t || (t = this.getFitViewPadding());
                            var n = this.get("width"),
                                i = this.get("height"),
                                a = this.getBBox(),
                                o = r.getAutoZoomMatrix({
                                        minX: 0,
                                        minY: 0,
                                        maxX: n,
                                        maxY: i
                                    },
                                    a, t,
                                    function(t) {
                                        return e._getZoomRatio(t)
                                    });
                            this.updateMatrix(o)
                        },
                        getZoom: function() {
                            return this.getMatrix()[0]
                        },
                        updateMatrix: function(t) {
                            var e = this.getMatrix(),
                                n = {
                                    updateMatrix: t,
                                    originMatrix: e
                                },
                                r = e[0] !== t[0];
                            return this.emit("beforeviewportchange", n),
                            r && this.emit("beforezoom", n),
                                this.setMatrix(t),
                            r && this.emit("afterzoom", n),
                                this.emit("afterviewportchange", n),
                                this.draw(),
                                this
                        },
                        zoom: function(t, e) {
                            if (!r.isNumber(t)) {
                                e = this._getZoomRatio(e);
                                var n = this.get("_rootGroup"),
                                    i = r.clone(n.getMatrix()),
                                    a = i[6] + i[0] * t.x - e * t.x,
                                    o = i[7] + i[0] * t.y - e * t.y;
                                return i[6] = 0,
                                    i[7] = 0,
                                    i[0] = e,
                                    i[4] = e,
                                    r.mat3.translate(i, i, [a, o]),
                                    this.updateMatrix(i),
                                    this
                            }
                            var s = this.get("width"),
                                u = this.get("height");
                            this.zoomByDom({
                                    x: s / 2,
                                    y: u / 2
                                },
                                t)
                        },
                        zoomByDom: function(t, e) {
                            var n = this.getPoint(t);
                            return this.zoom(n, e),
                                this
                        },
                        translate: function(t, e) {
                            var n = this.get("_rootGroup").getMatrix();
                            return r.mat3.translate(n, n, [t, e]),
                                this.updateMatrix(n),
                                this
                        },
                        translateByDom: function(t, e) {
                            var n = this.get("_rootGroup").getMatrix()[0];
                            return this.translate(t / n, e / n),
                                this
                        },
                        getMatrix: function() {
                            return this.get("_rootGroup").getMatrix()
                        },
                        setMatrix: function(t) {
                            this.get("_rootGroup").setMatrix(t)
                        },
                        getPoint: function(t) {
                            return this.getPointByDom(t)
                        },
                        getPointByDom: function(t) {
                            var e = this.get("_rootGroup").getMatrix();
                            return r.invertMatrix(t, e)
                        },
                        getPointByCanvas: function(t) {
                            var e = this.get("_canvas").get("pixelRatio");
                            return this.getPoint({
                                x: t.x / e,
                                y: t.y / e
                            })
                        },
                        getPointByClient: function(t) {
                            var e = this.get("_canvas").getPointByClient(t.x, t.y);
                            return this.getPointByCanvas(e)
                        },
                        getDomPoint: function(t) {
                            var e = this.get("_rootGroup").getMatrix();
                            return r.applyMatrix(t, e)
                        },
                        getCanvasPoint: function(t) {
                            var e = this.get("_canvas").get("pixelRatio"),
                                n = this.getDomPoint(t);
                            return {
                                x: n.x * e,
                                y: n.y * e
                            }
                        },
                        getClientPoint: function(t) {
                            var e = this.getCanvasPoint(t),
                                n = this.get("_canvas").getClientByPoint(e.x, e.y);
                            return {
                                x: n.clientX,
                                y: n.clientY
                            }
                        },
                        focus: function(t) {
                            if (r.isString(t) && (t = this.find(t)), t) {
                                var e = t.getCenter();
                                this.focusPoint(e)
                            }
                            return this
                        },
                        focusPoint: function(t) {
                            var e = this.get("_rootGroup").getMatrix(),
                                n = this.get("width"),
                                r = this.get("height"),
                                i = -e[6] + n / 2 - e[0] * t.x,
                                a = -e[7] + r / 2 - e[0] * t.y;
                            return this.translate(i, a),
                                this
                        },
                        focusPointByDom: function(t) {
                            var e = this.getPoint(t);
                            return this.focusPoint(e),
                                this
                        }
                    },
                        t.exports = i
                },
                function(t, e) {
                    var n = {
                        INIT: "_initDraw",
                        AUGMENT: {
                            _initDraw: function() {
                                var t = this,
                                    e = this.get("_controllers").animate; ["clear", "show", "hide", "change", "updatenodeposition"].forEach(function(n) {
                                    e && t.on("before" + n,
                                        function(n) {
                                            var r = t.get("_forcePreventAnimate"),
                                                i = n ? n.affectedItemIds: void 0; ! 0 !== r && e && e.cacheGraph("startCache", i)
                                        }),
                                        t.on("after" + n,
                                            function(n) {
                                                var r = n ? n.affectedItemIds: void 0,
                                                    i = t.get("_forcePreventAnimate");
                                                if (n && "changeData" === n.action) {
                                                    var a = t.get("fitView");
                                                    a && t.setFitView(a)
                                                } ! 0 !== i && e ? (e.cacheGraph("endCache", r), e.run()) : t.draw()
                                            })
                                })
                            },
                            draw: function() {
                                this.get("_canvas").draw()
                            },
                            animateDraw: function() {
                                this.get("_controllers").animate.run()
                            }
                        }
                    };
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(146);
                    function i(t, e) {
                        var n = t.getGraphicGroup(),
                            i = t.getBBox(),
                            a = (i.minX + i.maxX) / 2,
                            o = (i.minY + i.maxY) / 2,
                            s = n.getMatrix()[0];
                        n.transform([["t", -a, -o], ["s", .01 / s, .01 / s], ["t", a, o]]),
                            n.animate({
                                    transform: [["t", -a, -o], ["s", 100 * s, 100 * s], ["t", a, o]]
                                },
                                r.enterDuration, r.enterEasing, e)
                    }
                    function a(t, e) {
                        var n = t.getGraphicGroup(),
                            i = t.getBBox(),
                            a = (i.minX + i.maxX) / 2,
                            o = (i.minY + i.maxY) / 2,
                            s = n.getMatrix()[0];
                        n.animate({
                                transform: [["t", -a, -o], ["s", .01 / s, .01 / s], ["t", a, o]]
                            },
                            r.leaveDuration, r.leaveEasing, e)
                    }
                    function o(t, e) {
                        if (t.isShape) {
                            var n = t.attr("fillOpacity"),
                                i = t.attr("strokeOpacity");
                            t.attr({
                                fillOpacity: 0,
                                strokeOpacity: 0
                            }),
                                t.animate({
                                        fillOpacity: n,
                                        strokeOpacity: i
                                    },
                                    r.enterDuration, r.enterEasing, e)
                        }
                    }
                    function s(t, e) {
                        t.isShape && t.animate({
                                fillOpacity: 0,
                                strokeOpacity: 0
                            },
                            r.leaveDuration, r.leaveEasing, e)
                    }
                    t.exports = {
                        enterScaleIn: function(t) {
                            var e = t.item;
                            t.element.isItemContainer && e.getKeyShape() && i(e)
                        },
                        showScaleIn: function(t) {
                            var e = t.item;
                            t.element.isItemContainer && e.getKeyShape() && i(e)
                        },
                        leaveScaleOut: function(t) {
                            var e = t.item,
                                n = t.element,
                                r = t.done;
                            n.isItemContainer && a(e,
                                function() {
                                    r()
                                })
                        },
                        hideScaleOut: function(t) {
                            var e = t.item,
                                n = t.element,
                                r = t.done;
                            n.isItemContainer && a(e,
                                function() {
                                    r()
                                })
                        },
                        enterFadeIn: function(t) {
                            o(t.element)
                        },
                        showFadeIn: function(t) {
                            o(t.element)
                        },
                        leaveFadeOut: function(t) {
                            s(t.element, t.done)
                        },
                        hideFaseOut: function(t) {
                            s(t.element, t.done)
                        }
                    }
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = n(362),
                        a = n(459),
                        o = n(22),
                        s = n(146),
                        u = ["matrix", "fillStyle", "strokeStyle", "endArrow", "startArrow"],
                        c = function(t) {
                            function e() {
                                return t.apply(this, arguments) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n.getDefaultCfg = function() {
                                return {
                                    show: "scaleIn",
                                    hide: "scaleOut",
                                    enter: "scaleIn",
                                    leave: "scaleOut",
                                    update: function(t) {
                                        var e = t.element,
                                            n = t.endKeyFrame.props;
                                        e.animate(function(t) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var n = null != arguments[e] ? arguments[e] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                                                }))),
                                                    i.forEach(function(e) {
                                                        r(t, e, n[e])
                                                    })
                                            }
                                            return t
                                        } ({
                                                matrix: n.matrix
                                            },
                                            n.attrs), s.updateDuration, s.updateEasing)
                                    },
                                    graph: null,
                                    startCache: {},
                                    endCache: {},
                                    keykeyCache: {}
                                }
                            },
                                n._init = function() {
                                    var t = this,
                                        e = this.graph,
                                        n = this.keykeyCache;
                                    e.on("afteritemdraw",
                                        function(e) {
                                            e.item.getGraphicGroup().deepEach(function(e) {
                                                    n[e.gid] = t._getCache(e)
                                                },
                                                !0)
                                        })
                                },
                                n.cacheGraph = function(t, e) {
                                    var n, r = this,
                                        i = this.graph;
                                    n = e ? e.map(function(t) {
                                        return i.find(t)
                                    }) : i.getItems(),
                                        this[t] = {},
                                        n.forEach(function(e) {
                                            e && r.cache(e, r[t], t)
                                        })
                                },
                                n._getCache = function(t) {
                                    var e = this.keykeyCache;
                                    if (!o.isObject(t)) return e[t];
                                    var n = {
                                        props: {
                                            matrix: o.clone(t.getMatrix()),
                                            attrs: {}
                                        }
                                    };
                                    if (t.isShape) {
                                        var r = t.attr();
                                        r = o.omit(r, u),
                                            n.props.attrs = o.clone(r)
                                    }
                                    return n
                                },
                                n._getAnimation = function(t, e) {
                                    var n = this.graph,
                                        r = t.shapeObj,
                                        i = this[e],
                                        s = r[e + "Animation"] || r[e + "Animate"],
                                        u = n.get("_" + e + "Animation"),
                                        c = s || u || i;
                                    return o.isString(c) ? a[e + o.upperFirst(c)] : c
                                },
                                n.cache = function(t, e, n) {
                                    var r = this;
                                    t.getGraphicGroup().deepEach(function(i) {
                                            var a = i.gid,
                                                o = "startCache" === n ? r._getCache(i) : r._getCache(i.gid);
                                            o.enterAnimate = r._getAnimation(t, "enter"),
                                                o.leaveAnimate = r._getAnimation(t, "leave"),
                                                o.showAnimate = r._getAnimation(t, "show"),
                                                o.hideAnimate = r._getAnimation(t, "hide"),
                                                o.updateAnimate = r._getAnimation(t, "update"),
                                                o.item = t,
                                                o.element = i,
                                                o.visible = i.get("visible"),
                                                e[a] = o
                                        },
                                        !0)
                                },
                                n._compare = function() {
                                    var t = this.startCache,
                                        e = this.endCache,
                                        n = [],
                                        r = [],
                                        i = [],
                                        a = [],
                                        s = [];
                                    o.each(e,
                                        function(e, r) {
                                            var o = t[r];
                                            o ? o.element.get("type") === e.element.get("type") && (o.visible && e.visible ? i.push(r) : o.visible && !e.visible ? a.push(r) : !o.visible && e.visible && s.push(r)) : n.push(r)
                                        }),
                                        o.each(t,
                                            function(t, n) {
                                                e[n] || r.push(n)
                                            }),
                                        this.enterElements = n,
                                        this.leaveElements = r,
                                        this.updateElements = i,
                                        this.hideElements = a,
                                        this.showElements = s
                                },
                                n._addTween = function() {
                                    var t = this.enterElements,
                                        e = this.leaveElements,
                                        n = this.updateElements,
                                        r = this.hideElements,
                                        i = this.showElements,
                                        a = this.startCache,
                                        s = this.endCache;
                                    t.forEach(function(t) {
                                        var e = s[t],
                                            n = e.enterAnimate;
                                        n && n({
                                            element: e.element,
                                            item: e.item,
                                            endKeyFrame: e,
                                            startKeyFrame: null,
                                            startCache: a,
                                            endCache: s,
                                            done: function() {}
                                        })
                                    }),
                                        e.forEach(function(t) {
                                            var e = a[t],
                                                n = e.leaveAnimate;
                                            if (n) {
                                                var r = a[t].element;
                                                r.isItemContainer && r.getParent().add(r),
                                                    n({
                                                        element: r,
                                                        item: e.item,
                                                        endKeyFrame: null,
                                                        startKeyFrame: e,
                                                        startCache: a,
                                                        endCache: s,
                                                        done: function() {
                                                            r.isItemContainer && r.remove()
                                                        }
                                                    })
                                            }
                                        }),
                                        n.forEach(function(t) {
                                            var e = s[t],
                                                n = a[t],
                                                r = e.element,
                                                i = n.element,
                                                u = n.props,
                                                c = e.props,
                                                h = e.updateAnimate;
                                            u.attrs && r.attr(u.attrs),
                                            o.isEqual(u.matrix, c.matrix) || r.setMatrix(u.matrix),
                                                h({
                                                    element: r,
                                                    item: e,
                                                    endKeyFrame: e,
                                                    startKeyFrame: n,
                                                    startCache: a,
                                                    endCache: s,
                                                    done: function() {}
                                                }),
                                            i !== r && i.remove()
                                        }),
                                        r.forEach(function(t) {
                                            var e = s[t],
                                                n = a[t],
                                                r = e.hideAnimate;
                                            r && (e.element.show(), r({
                                                element: e.element,
                                                item: e.item,
                                                endKeyFrame: e,
                                                startKeyFrame: n,
                                                startCache: a,
                                                endCache: s,
                                                done: function() {
                                                    var t = e.item,
                                                        n = t.getGraphicGroup(); ! t.visible && n.hide()
                                                }
                                            }))
                                        }),
                                        i.forEach(function(t) {
                                            var e = s[t],
                                                n = a[t],
                                                r = e.showAnimate;
                                            r && r({
                                                element: e.element,
                                                item: e.item,
                                                endKeyFrame: e,
                                                startKeyFrame: n,
                                                startCache: a,
                                                endCache: s,
                                                done: function() {}
                                            })
                                        })
                                },
                                n.run = function() {
                                    this.graph.destroyed || (this._compare(), this._addTween())
                                },
                                e
                        } (i);
                    t.exports = c
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = n(22),
                        a = n(460),
                        o = {
                            INIT: "_initAnimate",
                            CFG: {
                                animate: !1
                            }
                        };
                    o.AUGMENT = {
                        _initAnimate: function() {
                            var t = this.get("animate");
                            if (t) {
                                var e = this.get("_controllers"),
                                    n = {
                                        graph: this
                                    };
                                i.isPlainObject(t) && (n = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                                        }))),
                                            i.forEach(function(e) {
                                                r(t, e, n[e])
                                            })
                                    }
                                    return t
                                } ({},
                                    n, t)),
                                    e.animate = new a(n)
                            }
                        }
                    },
                        t.exports = o
                },
                function(t, e, n) {
                    var r = n(22),
                        i = {
                            INIT: "_initFilter",
                            CFG: {
                                filters: []
                            }
                        };
                    i.AUGMENT = {
                        _initFilter: function() {
                            var t = this,
                                e = this.get("filters");
                            r.isFunction(e) && this.set("filters", [e]),
                                this.on("afterchange",
                                    function(n) {
                                        var r = n.action;
                                        e.length > 0 && "changeData" === r && !t.destroyed && t.filter()
                                    })
                        },
                        addFilter: function(t) {
                            return this.get("filters").push(t),
                                t
                        },
                        removeFilter: function(t) {
                            var e = this.get("filters");
                            this.set("filters", r.filter(e, t))
                        },
                        filter: function() {
                            this.emit("beforefilter");
                            var t = this.get("filters"),
                                e = this.getItems(),
                                n = this._getFilterItems();
                            t.forEach(function(t) {
                                n = n.filter(t)
                            }),
                                e.forEach(function(t) { - 1 === n.indexOf(t) ? t.hide() : t.show()
                                }),
                                this.draw(),
                                this.emit("afterfilter")
                        },
                        _getFilterItems: function() {
                            return this.getItems().filter(function(t) {
                                return ! 1 !== t.getShapeObj().filter
                            })
                        }
                    },
                        t.exports = i
                },
                function(t, e, n) {
                    var r = n(22),
                        i = n(390),
                        a = {
                            CFG: {
                                modes: {
                                    default:
                                        []
                                },
                                mode: "default",
                                _eventCache: {}
                            },
                            INIT: "_initModes"
                        };
                    a.AUGMENT = {
                        _initModes: function() {
                            var t = this.get("mode");
                            this.changeMode(t)
                        },
                        changeMode: function(t) {
                            var e = this.get("modes");
                            r.isEmpty(e) || r.isEmpty(e[t]) || (i.resetMode(e[t], this), this.set("mode", t))
                        },
                        addBehaviour: function(t, e) {
                            var n = this.get("modes");
                            e = e || this.get("mode"),
                            r.isEmpty(n[e]) && (n[e] = []);
                            var a = n[e],
                                o = [].concat(t);
                            return r.each(o,
                                function(t) { - 1 === a.indexOf(t) && a.push(t)
                                }),
                                i.resetMode(n[e], this),
                                this
                        },
                        removeBehaviour: function(t) {
                            var e = this.get("modes"),
                                n = this.get("mode"),
                                a = e[n];
                            if (!r.isEmpty(a)) {
                                var o = [].concat(t);
                                return a = a.filter(function(t) {
                                    return - 1 === o.indexOf(t)
                                }),
                                    e[n] = a,
                                    i.resetMode(a, this),
                                    this
                            }
                        },
                        behaviourOn: function(t, e) {
                            var n = this._eventCache;
                            n[t] || (n[t] = []),
                                n[t].push(e),
                                this.on(t, e)
                        },
                        _off: function() {
                            var t = this,
                                e = this._eventCache;
                            r.each(e,
                                function(e, n) {
                                    r.each(e,
                                        function(e) {
                                            t.off(n, e)
                                        })
                                }),
                                this._eventCache = {}
                        }
                    },
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(362),
                        i = n(22),
                        a = {
                            MOUSEMOVE: "mousemove",
                            MOUSEDOWN: "mousedown",
                            MOUSEUP: "mouseup",
                            MOUSEENTER: "mouseenter",
                            MOUSELEAVE: "mouseleave",
                            CLICK: "click",
                            DBLCLICK: "dblclick",
                            DRAGSTART: "dragstart",
                            DRAG: "drag",
                            DRAGENTER: "dragenter",
                            DRAGLEAVE: "dragleave",
                            DRAGEND: "dragend",
                            DROP: "drop",
                            CONTEXTMENU: "contextmenu",
                            MOUSEWHEEL: "mousewheel",
                            WHEEL: "wheel",
                            KEYDOWN: "keydown",
                            KEYUP: "keyup",
                            KEYPRESS: "keypress"
                        },
                        o = [a.DBLCLICK, a.MOUSEDOWN, a.MOUSEUP, a.MOUSEENTER, a.MOUSELEAVE, a.MOUSEMOVE, a.CONTEXTMENU, a.MOUSEWHEEL, a.WHEEL],
                        s = [a.KEYDOWN, a.KEYUP, a.KEYPRESS];
                    var u = function(t) {
                        function e(e) {
                            var n;
                            return (n = t.call(this, e) || this)._domEvents = [],
                                n._initEventStates(),
                                n._registerEvents(),
                                n
                        } !
                            function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t);
                        var n = e.prototype;
                        return n._initEventStates = function() {
                            this._pressing = !1,
                                this._dragging = !1,
                                this._currentEventObj = {},
                                this._dragEventObj = {}
                        },
                            n._registerEvents = function() {
                                this._registerMouseEvents(),
                                    this._registerKeyboardEvents()
                            },
                            n._registerKeyboardEvents = function() {
                                var t = this.graph,
                                    e = t.getKeyboardEventWrapper(),
                                    n = this._domEvents,
                                    r = t.get("keyboardEnable");
                                i.each(s,
                                    function(a) {
                                        n.push(i.addEventListener(e, a,
                                            function(e) {
                                                var n = !0;
                                                i.isFunction(r) && (n = r()),
                                                n && t.emit(a, {
                                                    domEvent: e
                                                })
                                            }))
                                    })
                            },
                            n._registerMouseEvents = function() {
                                var t = this,
                                    e = this,
                                    n = this.graph.getMouseEventWrapper(),
                                    r = this._domEvents;
                                i.each(o,
                                    function(o) {
                                        r.push(i.addEventListener(n, o,
                                            function(n) {
                                                if (n.type !== a.MOUSEENTER || !n.fromElement || n.fromElement.parentNode && !
                                                        function(t, e) {
                                                            for (var n = t.parentNode; n;) {
                                                                if (n.tagName === e) return ! 0;
                                                                n = n.parentNode
                                                            }
                                                            return ! 1
                                                        } (n.fromElement, "foreignObject")) {
                                                    var r = t._currentEventObj;
                                                    t._oldEventObj = r,
                                                        t._processEventObj(n);
                                                    var o = t._currentEventObj;
                                                    e._simulateEvents(n, r, o),
                                                    -1 !== [a.MOUSELEAVE, a.MOUSEENTER].indexOf(n.type) && e._triggerEvent("canvas:" + n.type),
                                                        e._triggerEvent(n.type),
                                                    n.type === a.MOUSELEAVE && (t._dragging && e._triggerEvent(a.DRAGLEAVE, i.mix({},
                                                        o, {
                                                            item: null,
                                                            shape: null,
                                                            currentItem: t._dragEventObj.item,
                                                            currentShape: t._dragEventObj.shape
                                                        })), e._initEventStates())
                                                }
                                            }))
                                    })
                            },
                            n.destroy = function() {
                                var t = this._domEvents;
                                i.each(t,
                                    function(t) {
                                        t && t.remove()
                                    }),
                                    this._domEvents = null
                            },
                            n._triggerEvent = function(t, e) {
                                if (e || (e = "mouseleave" === t ? this._oldEventObj: this._currentEventObj), "mousedown" === t && (e.button = this._button), e._type = t, this.emitGraphEvent(t, e), -1 === ["canvas:" + a.MOUSELEAVE, "canvas:" + a.MOUSEENTER].indexOf(t)) {
                                    var n = e.shape && e.shape.eventPreFix;
                                    if ( - 1 !== [a.DRAGSTART, a.DRAG, a.DRAGEND].indexOf(t) && (n = e.currentShape && e.currentShape.eventPreFix), n) {
                                        var r = n + ":" + t;
                                        e._type = r,
                                            i.isBoolean(e._isItemChange) ? e._isItemChange && this.emitGraphEvent(r, e) : this.emitGraphEvent(r, e)
                                    }
                                }
                            },
                            n.emitGraphEvent = function(t, e) {
                                this.graph.emit(t, e)
                            },
                            n._getDistanceToPress = function(t) {
                                return Math.pow(t.clientX - this._pressX, 2) + Math.pow(t.clientY - this._pressY, 2)
                            },
                            n._simulateEvents = function(t, e, n) {
                                void 0 === e && (e = {}),
                                void 0 === n && (n = {});
                                var r = this._dragEventObj.item,
                                    o = this._dragEventObj.shape;
                                switch (t.type) {
                                    case a.MOUSEDOWN:
                                        this._pressing = !0,
                                            this._button = t.button,
                                            this._pressX = t.clientX,
                                            this._pressY = t.clientY;
                                        break;
                                    case a.MOUSEMOVE:
                                        if (this._dragging) {
                                            if (this._triggerEvent(a.DRAG, i.mix({},
                                                    n, {
                                                        button: this._button,
                                                        currentItem: r,
                                                        currentShape: o
                                                    })), e.shape !== n.shape) {
                                                var s = this._isItemChange(e, n);
                                                e.shape && this._triggerEvent(a.DRAGLEAVE, i.mix({},
                                                    n, {
                                                        button: this._button,
                                                        item: e.item,
                                                        shape: e.shape,
                                                        toItem: n.item,
                                                        toShape: n.shape,
                                                        currentItem: r,
                                                        currentShape: o,
                                                        _isItemChange: s
                                                    })),
                                                n.shape && this._triggerEvent(a.DRAGENTER, i.mix({},
                                                    n, {
                                                        button: this._button,
                                                        currentItem: r,
                                                        currentShape: o,
                                                        fromItem: e.item,
                                                        fromShape: e.shape,
                                                        _isItemChange: s
                                                    }))
                                            }
                                        } else this._pressing && this._getDistanceToPress(t) > 9 && (this._dragging = !0, this._dragEventObj = e, r = this._dragEventObj.item, o = this._dragEventObj.shape, this._triggerEvent(a.DRAGSTART, i.mix({},
                                            e, {
                                                button: this._button,
                                                currentItem: r,
                                                currentShape: o
                                            })));
                                        if (e.shape !== n.shape) {
                                            var u = this._isItemChange(e, n);
                                            e.shape && this._triggerEvent(a.MOUSELEAVE, i.mix({},
                                                n, {
                                                    item: e.item,
                                                    shape: e.shape,
                                                    toItem: n.item,
                                                    toShape: n.shape,
                                                    _isItemChange: u
                                                })),
                                            n.shape && this._triggerEvent(a.MOUSEENTER, i.mix({},
                                                n, {
                                                    fromtItem: e.item,
                                                    fromShape: e.shape,
                                                    _isItemChange: u
                                                }))
                                        }
                                        break;
                                    case a.MOUSEUP:
                                        !this._dragging && this._pressing ? this._triggerEvent(a.CLICK, i.mix({},
                                            n, {
                                                button: this._button
                                            })) : (this._triggerEvent(a.DROP, i.mix({},
                                            n, {
                                                button: this._button,
                                                currentItem: r,
                                                currentShape: o
                                            })), this._triggerEvent(a.DRAGEND, i.mix({},
                                            n, {
                                                button: this._button,
                                                currentItem: r,
                                                currentShape: o
                                            }))),
                                            this._pressing = !1,
                                            this._dragging = !1,
                                            this._dragEventObj = {};
                                        break;
                                    default:
                                        return
                                }
                            },
                            n._isItemChange = function(t, e) {
                                var n = t.shape,
                                    r = e.shape,
                                    a = n && r && (n.get("isItemChange") || r.get("isItemChange"));
                                return a ? a(r, n) : i.isObject(t.item) && i.isObject(e.item) ? t.item.id !== e.item.id: t.item !== e.item
                            },
                            n._processEventObj = function(t) {
                                var e = this.graph.get("_canvas"),
                                    n = this._getEventObj(t, e);
                                this._currentEventObj = n
                            },
                            n._parsePoint = function(t, e) {
                                return this.graph.getPointByCanvas({
                                    x: t,
                                    y: e
                                })
                            },
                            n._getEventObj = function(t, e) {
                                var n = this.graph,
                                    r = t.clientX,
                                    i = t.clientY,
                                    a = e.getPointByClient(r, i),
                                    o = this._parsePoint(a.x, a.y),
                                    s = e.getShape(a.x, a.y, t),
                                    u = n.getItemByShape(s),
                                    c = e.get("pixelRatio");
                                return {
                                    item: u,
                                    shape: s,
                                    x: o.x,
                                    y: o.y,
                                    domX: a.x / c,
                                    domY: a.y / c,
                                    domEvent: t
                                }
                            },
                            e
                    } (r);
                    t.exports = u
                },
                function(t, e, n) {
                    var r = {},
                        i = n(464);
                    r.INIT = "_initEvents",
                        r.CFG = {
                            keyboardEnable: !0
                        },
                        r.AUGMENT = {
                            _initEvents: function() {
                                this.get("_controllers").events = new i({
                                    graph: this
                                })
                            }
                        },
                        t.exports = r
                },
                function(t, e, n) {
                    var r = n(22),
                        i = {};
                    i.AUGMENT = {
                        find: function(t) {
                            return this.get("_itemMap")[t]
                        },
                        getNodes: function() {
                            return this.get("_itemMap")._nodes
                        },
                        getEdges: function() {
                            return this.get("_itemMap")._edges
                        },
                        getGroups: function() {
                            return this.get("_itemMap")._groups
                        },
                        getGuides: function() {
                            return this.get("_itemMap")._guides
                        },
                        getItems: function() {
                            var t = this.get("_itemMap"),
                                e = [];
                            return r.each(t,
                                function(t) {
                                    t.type && e.push(t)
                                }),
                                e
                        },
                        getItemByShape: function(t) {
                            return t ? this.getItem(t.id) : null
                        },
                        getItem: function(t) {
                            var e = this.get("_itemMap");
                            return r.isObject(t) ? t.destroyed && (t = e[t.id]) : t = e[t],
                                t
                        }
                    },
                        t.exports = i
                },
                function(t, e, n) {
                    var r = n(362),
                        i = n(22),
                        a = ["color", "shape", "size", "label", "style"],
                        o = function(t) {
                            function e() {
                                return t.apply(this, arguments) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n._init = function() {
                                var t = this,
                                    e = {};
                                i.each(a,
                                    function(n) {
                                        e[n] = {},
                                            t[n] = function(r) {
                                                return e[n].input = r,
                                                    t
                                            }
                                    }),
                                    this.channels = e
                            },
                                n.addChannels = function(t) {
                                    var e = this.channels;
                                    i.each(t,
                                        function(t, n) {
                                            e[n] = {
                                                input: t
                                            }
                                        })
                                },
                                n.mapping = function(t) {
                                    var e = this.channels;
                                    i.each(e,
                                        function(e, n) {
                                            i.isFunction(e.input) ? t[n] = e.input(t) : e.input && (t[n] = e.input)
                                        })
                                },
                                e
                        } (r);
                    t.exports = o
                },
                function(t, e, n) {
                    var r = n(467),
                        i = {
                            INIT: "_initMapper"
                        };
                    i.AUGMENT = {
                        _initMapper: function() {
                            var t = this.get("_controllers");
                            t.nodeMapper = new r({
                                graph: this
                            }),
                                t.edgeMapper = new r({
                                    graph: this
                                }),
                                t.groupMapper = new r({
                                    graph: this
                                }),
                                t.guideMapper = new r({
                                    graph: this
                                })
                        },
                        node: function(t) {
                            var e = this._getController("nodeMapper");
                            return t && e.addChannels(t),
                                e
                        },
                        edge: function(t) {
                            var e = this._getController("edgeMapper");
                            return t && e.addChannels(t),
                                e
                        },
                        group: function(t) {
                            var e = this._getController("groupMapper");
                            return t && e.addChannels(t),
                                this._getController("groupMapper")
                        },
                        guide: function(t) {
                            var e = this._getController("guideMapper");
                            return t && e.addChannels(t),
                                this._getController("guideMapper")
                        }
                    },
                        t.exports = i
                },
                function(t, e, n) {
                    var r = function(t) {
                        function e() {
                            return t.apply(this, arguments) || this
                        } !
                            function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t);
                        var n = e.prototype;
                        return n.getDefaultCfg = function() {
                            return {
                                graph: null,
                                auto: !0,
                                processor: null
                            }
                        },
                            n._init = function() {
                                var t = this,
                                    e = this.graph;
                                e.on("afteritemdraw",
                                    function(t) {
                                        var e = t.item,
                                            n = e.getKeyShape(),
                                            r = e.getModel();
                                        if (e.isEdge) r.lineWidth = n.attr("lineWidth");
                                        else if (e.isNode || e.isGroup) {
                                            var i = e.getBBox();
                                            r.width = i.width,
                                                r.height = i.height
                                        }
                                    }),
                                    e.on("afterchange",
                                        function(n) {
                                            var r = n.action;
                                            "once" === t.auto ? "changeData" === r && (e.destroyed || e.preventAnimate(function() {
                                                    t.layout()
                                                })) : t.auto && !e.destroyed && e.preventAnimate(function() {
                                                    t.layout()
                                                })
                                        })
                            },
                            n.changeLayout = function(t) {
                                this.processor = t,
                                    this.layout()
                            },
                            n.layout = function() {
                                var t = this.graph,
                                    e = this.getLayoutProcessor();
                                t.emit("beforelayout");
                                var n = t.getNodes().filter(function(t) {
                                        return t.isVisible()
                                    }).map(function(t) {
                                        return t.getModel()
                                    }),
                                    r = t.getEdges().filter(function(t) {
                                        return t.isVisible()
                                    }).map(function(t) {
                                        return t.getModel()
                                    }),
                                    i = t.getGroups().filter(function(t) {
                                        return t.isVisible()
                                    }).map(function(t) {
                                        return t.getModel()
                                    });
                                t._executeLayout(e, n, r, i),
                                    t.updateNodePosition(),
                                    t.emit("afterlayout")
                            },
                            n.getLayoutProcessor = function() {
                                return this.processor ? this.processor: this.processer
                            },
                            e
                    } (n(362));
                    t.exports = r
                },
                function(t, e, n) {
                    var r = n(22),
                        i = n(469),
                        a = {
                            CFG: {
                                layout: void 0
                            },
                            INIT: "_initLayout"
                        };
                    a.AUGMENT = {
                        _initLayout: function() {
                            var t = this.get("_controllers"),
                                e = this._getLayoutCfg();
                            e && (t.layout = new i(r.mix({
                                    graph: this
                                },
                                e)))
                        },
                        _getLayoutCfg: function() {
                            var t = this.get("layout");
                            return r.isPlainObject(t) ? t: r.isFunction(t) || r.isObject(t) ? {
                                processor: t
                            }: null
                        },
                        layout: function() {
                            return this._getController("layout").layout(),
                                this
                        },
                        updateNodePosition: function(t) {
                            var e = this.getGuides(),
                                n = [],
                                i = [];
                            return this.emit("beforeupdatenodeposition"),
                                t ? (t.forEach(function(t) {
                                    t.getEdges().forEach(function(t) {
                                        i.push(t)
                                    });
                                    var e = t.getParent();
                                    e && n.push(e)
                                }), i = r.uniq(i), n = r.uniq(n)) : (t = this.getNodes(), n = this.getGroups(), i = this.getEdges()),
                                t.forEach(function(t) {
                                    t.layoutUpdate()
                                }),
                                n.forEach(function(t) {
                                    t.layoutUpdate()
                                }),
                                i.forEach(function(t) {
                                    t.layoutUpdate()
                                }),
                                e.forEach(function(t) {
                                    t.layoutUpdate()
                                }),
                                this.emit("afterupdatenodeposition"),
                                this
                        },
                        changeLayout: function(t) {
                            return this._getController("layout").changeLayout(t),
                                this
                        },
                        getLayout: function() {
                            return this._getController("layout").getLayoutProcessor()
                        }
                    },
                        t.exports = a
                },
                function(t, e, n) { !
                    function(e) {
                        "use strict";
                        var n = function() {
                                return {
                                    escape: function(t) {
                                        return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                                    },
                                    parseExtension: t,
                                    mimeType: function(e) {
                                        var n = t(e).toLowerCase();
                                        return function() {
                                                var t = "application/font-woff";
                                                return {
                                                    woff: t,
                                                    woff2: t,
                                                    ttf: "application/font-truetype",
                                                    eot: "application/vnd.ms-fontobject",
                                                    png: "image/png",
                                                    jpg: "image/jpeg",
                                                    jpeg: "image/jpeg",
                                                    gif: "image/gif",
                                                    tiff: "image/tiff",
                                                    svg: "image/svg+xml"
                                                }
                                            } ()[n] || ""
                                    },
                                    dataAsUrl: function(t, e) {
                                        return "data:" + e + ";base64," + t
                                    },
                                    isDataUrl: function(t) {
                                        return - 1 !== t.search(/^(data:)/)
                                    },
                                    canvasToBlob: function(t) {
                                        return t.toBlob ? new Promise(function(e) {
                                            t.toBlob(e)
                                        }) : function(t) {
                                            return new Promise(function(e) {
                                                for (var n = window.atob(t.toDataURL().split(",")[1]), r = n.length, i = new Uint8Array(r), a = 0; a < r; a++) i[a] = n.charCodeAt(a);
                                                e(new Blob([i], {
                                                    type: "image/png"
                                                }))
                                            })
                                        } (t)
                                    },
                                    resolveUrl: function(t, e) {
                                        var n = document.implementation.createHTMLDocument(),
                                            r = n.createElement("base");
                                        n.head.appendChild(r);
                                        var i = n.createElement("a");
                                        return n.body.appendChild(i),
                                            r.href = e,
                                            i.href = t,
                                            i.href
                                    },
                                    getAndEncode: function(t) {
                                        var e = 3e4;
                                        s.impl.options.cacheBust && (t += (/\?/.test(t) ? "&": "?") + (new Date).getTime());
                                        return new Promise(function(n) {
                                            var r, i = new XMLHttpRequest;
                                            if (i.onreadystatechange = function() {
                                                    if (4 !== i.readyState) return;
                                                    if (200 !== i.status) return void(r ? n(r) : o("cannot fetch resource: " + t + ", status: " + i.status));
                                                    var e = new FileReader;
                                                    e.onloadend = function() {
                                                        var t = e.result.split(/,/)[1];
                                                        n(t)
                                                    },
                                                        e.readAsDataURL(i.response)
                                                },
                                                    i.ontimeout = function() {
                                                        r ? n(r) : o("timeout of " + e + "ms occured while fetching resource: " + t)
                                                    },
                                                    i.responseType = "blob", i.timeout = e, i.open("GET", t, !0), i.send(), s.impl.options.imagePlaceholder) {
                                                var a = s.impl.options.imagePlaceholder.split(/,/);
                                                a && a[1] && (r = a[1])
                                            }
                                            function o(t) {
                                                console.error(t),
                                                    n("")
                                            }
                                        })
                                    },
                                    uid: function() {
                                        var t = 0;
                                        return function() {
                                            return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice( - 4) + t++
                                        }
                                    } (),
                                    delay: function(t) {
                                        return function(e) {
                                            return new Promise(function(n) {
                                                setTimeout(function() {
                                                        n(e)
                                                    },
                                                    t)
                                            })
                                        }
                                    },
                                    asArray: function(t) {
                                        for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                                        return e
                                    },
                                    escapeXhtml: function(t) {
                                        return t.replace(/#/g, "%23").replace(/\n/g, "%0A")
                                    },
                                    makeImage: function(t) {
                                        return new Promise(function(e, n) {
                                            var r = new Image;
                                            r.onload = function() {
                                                e(r)
                                            },
                                                r.onerror = n,
                                                r.src = t
                                        })
                                    },
                                    width: function(t) {
                                        var n = e(t, "border-left-width"),
                                            r = e(t, "border-right-width");
                                        return t.scrollWidth + n + r
                                    },
                                    height: function(t) {
                                        var n = e(t, "border-top-width"),
                                            r = e(t, "border-bottom-width");
                                        return t.scrollHeight + n + r
                                    }
                                };
                                function t(t) {
                                    var e = /\.([^\.\/]*?)$/g.exec(t);
                                    return e ? e[1] : ""
                                }
                                function e(t, e) {
                                    var n = window.getComputedStyle(t).getPropertyValue(e);
                                    return parseFloat(n.replace("px", ""))
                                }
                            } (),
                            r = function() {
                                var t = /url\(['"]?([^'"]+?)['"]?\)/g;
                                return {
                                    inlineAll: function(t, n, a) {
                                        return e(t) ? Promise.resolve(t).then(r).then(function(e) {
                                            var r = Promise.resolve(t);
                                            return e.forEach(function(t) {
                                                r = r.then(function(e) {
                                                    return i(e, t, n, a)
                                                })
                                            }),
                                                r
                                        }) : Promise.resolve(t)
                                    },
                                    shouldProcess: e,
                                    impl: {
                                        readUrls: r,
                                        inline: i
                                    }
                                };
                                function e(e) {
                                    return - 1 !== e.search(t)
                                }
                                function r(e) {
                                    for (var r, i = []; null !== (r = t.exec(e));) i.push(r[1]);
                                    return i.filter(function(t) {
                                        return ! n.isDataUrl(t)
                                    })
                                }
                                function i(t, e, r, i) {
                                    return Promise.resolve(e).then(function(t) {
                                        return r ? n.resolveUrl(t, r) : t
                                    }).then(i || n.getAndEncode).then(function(t) {
                                        return n.dataAsUrl(t, n.mimeType(e))
                                    }).then(function(r) {
                                        return t.replace(function(t) {
                                            return new RegExp("(url\\(['\"]?)(" + n.escape(t) + ")(['\"]?\\))", "g")
                                        } (e), "$1" + r + "$3")
                                    })
                                }
                            } (),
                            i = function() {
                                return {
                                    resolveAll: function() {
                                        return t(document).then(function(t) {
                                            return Promise.all(t.map(function(t) {
                                                return t.resolve()
                                            }))
                                        }).then(function(t) {
                                            return t.join("\n")
                                        })
                                    },
                                    impl: {
                                        readAll: t
                                    }
                                };
                                function t() {
                                    return Promise.resolve(n.asArray(document.styleSheets)).then(function(t) {
                                        var e = [];
                                        return t.forEach(function(t) {
                                            try {
                                                n.asArray(t.cssRules || []).forEach(e.push.bind(e))
                                            } catch(e) {
                                                console.log("Error while reading CSS rules from " + t.href, e.toString())
                                            }
                                        }),
                                            e
                                    }).then(function(t) {
                                        return t.filter(function(t) {
                                            return t.type === CSSRule.FONT_FACE_RULE
                                        }).filter(function(t) {
                                            return r.shouldProcess(t.style.getPropertyValue("src"))
                                        })
                                    }).then(function(e) {
                                        return e.map(t)
                                    });
                                    function t(t) {
                                        return {
                                            resolve: function() {
                                                var e = (t.parentStyleSheet || {}).href;
                                                return r.inlineAll(t.cssText, e)
                                            },
                                            src: function() {
                                                return t.style.getPropertyValue("src")
                                            }
                                        }
                                    }
                                }
                            } (),
                            a = function() {
                                return {
                                    inlineAll: function e(i) {
                                        if (! (i instanceof Element)) return Promise.resolve(i);
                                        return function(t) {
                                            var e = t.style.getPropertyValue("background");
                                            return e ? r.inlineAll(e).then(function(e) {
                                                t.style.setProperty("background", e, t.style.getPropertyPriority("background"))
                                            }).then(function() {
                                                return t
                                            }) : Promise.resolve(t)
                                        } (i).then(function() {
                                            return i instanceof HTMLImageElement ? t(i).inline() : Promise.all(n.asArray(i.childNodes).map(function(t) {
                                                return e(t)
                                            }))
                                        })
                                    },
                                    impl: {
                                        newImage: t
                                    }
                                };
                                function t(t) {
                                    return {
                                        inline: function(e) {
                                            return n.isDataUrl(t.src) ? Promise.resolve() : Promise.resolve(t.src).then(e || n.getAndEncode).then(function(e) {
                                                return n.dataAsUrl(e, n.mimeType(t.src))
                                            }).then(function(e) {
                                                return new Promise(function(n, r) {
                                                    t.onload = n,
                                                        t.onerror = r,
                                                        t.src = e
                                                })
                                            })
                                        }
                                    }
                                }
                            } (),
                            o = {
                                imagePlaceholder: void 0,
                                cacheBust: !1
                            },
                            s = {
                                toSvg: u,
                                toPng: function(t, e) {
                                    return c(t, e || {}).then(function(t) {
                                        return t.toDataURL()
                                    })
                                },
                                toJpeg: function(t, e) {
                                    return c(t, e = e || {}).then(function(t) {
                                        return t.toDataURL("image/jpeg", e.quality || 1)
                                    })
                                },
                                toBlob: function(t, e) {
                                    return c(t, e || {}).then(n.canvasToBlob)
                                },
                                toPixelData: function(t, e) {
                                    return c(t, e || {}).then(function(e) {
                                        return e.getContext("2d").getImageData(0, 0, n.width(t), n.height(t)).data
                                    })
                                },
                                impl: {
                                    fontFaces: i,
                                    images: a,
                                    util: n,
                                    inliner: r,
                                    options: {}
                                }
                            };
                        function u(t, e) {
                            return function(t) {
                                void 0 === t.imagePlaceholder ? s.impl.options.imagePlaceholder = o.imagePlaceholder: s.impl.options.imagePlaceholder = t.imagePlaceholder;
                                void 0 === t.cacheBust ? s.impl.options.cacheBust = o.cacheBust: s.impl.options.cacheBust = t.cacheBust
                            } (e = e || {}),
                                Promise.resolve(t).then(function(t) {
                                    return function(t, e, r) {
                                        if (!r && e && !e(t)) return Promise.resolve();
                                        return Promise.resolve(t).then(function(t) {
                                            return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
                                        }).then(function(r) {
                                            return function(t, e, r) {
                                                var i = t.childNodes;
                                                return 0 === i.length ? Promise.resolve(e) : function(t, e, n) {
                                                    var r = Promise.resolve();
                                                    return e.forEach(function(e) {
                                                        r = r.then(function() {
                                                            return h(e, n)
                                                        }).then(function(e) {
                                                            e && t.appendChild(e)
                                                        })
                                                    }),
                                                        r
                                                } (e, n.asArray(i), r).then(function() {
                                                    return e
                                                })
                                            } (t, r, e)
                                        }).then(function(e) {
                                            return function(t, e) {
                                                return e instanceof Element ? Promise.resolve().then(function() { !
                                                    function(t, e) {
                                                        t.cssText ? e.cssText = t.cssText: function(t, e) {
                                                            n.asArray(t).forEach(function(n) {
                                                                e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                                                            })
                                                        } (t, e)
                                                    } (window.getComputedStyle(t), e.style)
                                                }).then(function() { [":before", ":after"].forEach(function(r) { !
                                                    function(r) {
                                                        var i = window.getComputedStyle(t, r),
                                                            a = i.getPropertyValue("content");
                                                        if ("" !== a && "none" !== a) {
                                                            var o = n.uid();
                                                            e.className = e.className + " " + o;
                                                            var s = document.createElement("style");
                                                            s.appendChild(function(t, e, r) {
                                                                var i = "." + t + ":" + e,
                                                                    a = r.cssText ?
                                                                        function(t) {
                                                                            var e = t.getPropertyValue("content");
                                                                            return t.cssText + " content: " + e + ";"
                                                                        } (r) : function(t) {
                                                                            return n.asArray(t).map(function(e) {
                                                                                    return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important": "")
                                                                                }).join("; ") + ";"
                                                                        } (r);
                                                                return document.createTextNode(i + "{" + a + "}")
                                                            } (o, r, i)),
                                                                e.appendChild(s)
                                                        }
                                                    } (r)
                                                })
                                                }).then(function() {
                                                    t instanceof HTMLTextAreaElement && (e.innerHTML = t.value),
                                                    t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                                                }).then(function() {
                                                    e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach(function(t) {
                                                        var n = e.getAttribute(t);
                                                        n && e.style.setProperty(t, n)
                                                    }))
                                                }).then(function() {
                                                    return e
                                                }) : e
                                            } (t, e)
                                        })
                                    } (t, e.filter, !0)
                                }).then(f).then(l).then(function(t) {
                                    e.bgcolor && (t.style.backgroundColor = e.bgcolor);
                                    e.width && (t.style.width = e.width + "px");
                                    e.height && (t.style.height = e.height + "px");
                                    e.style && Object.keys(e.style).forEach(function(n) {
                                        t.style[n] = e.style[n]
                                    });
                                    return t
                                }).then(function(r) {
                                    return function(t, e, r) {
                                        return Promise.resolve(t).then(function(t) {
                                            return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
                                                (new XMLSerializer).serializeToString(t)
                                        }).then(n.escapeXhtml).then(function(t) {
                                            return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>"
                                        }).then(function(t) {
                                            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + r + '">' + t + "</svg>"
                                        }).then(function(t) {
                                            return "data:image/svg+xml;charset=utf-8," + t
                                        })
                                    } (r, e.width || n.width(t), e.height || n.height(t))
                                })
                        }
                        function c(t, e) {
                            return u(t, e).then(n.makeImage).then(n.delay(100)).then(function(r) {
                                var i = function(t) {
                                    var r = document.createElement("canvas");
                                    if (r.width = e.width || n.width(t), r.height = e.height || n.height(t), e.bgcolor) {
                                        var i = r.getContext("2d");
                                        i.fillStyle = e.bgcolor,
                                            i.fillRect(0, 0, r.width, r.height)
                                    }
                                    return r
                                } (t);
                                return i.getContext("2d").drawImage(r, 0, 0),
                                    i
                            })
                        }
                        function h(t, e, r) {
                            if (!r && e && !e(t)) return Promise.resolve();
                            return Promise.resolve(t).then(i).then(function(n) {
                                return a(t, n, e)
                            }).then(function(e) {
                                return o(t, e)
                            });
                            function i(t) {
                                return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
                            }
                            function a(t, e, r) {
                                var i = t.childNodes;
                                return 0 === i.length ? Promise.resolve(e) : function(t, e, n) {
                                    var r = Promise.resolve();
                                    return e.forEach(function(e) {
                                        r = r.then(function() {
                                            return h(e, n)
                                        }).then(function(e) {
                                            e && t.appendChild(e)
                                        })
                                    }),
                                        r
                                } (e, n.asArray(i), r).then(function() {
                                    return e
                                });
                                function a(t, e, n) {
                                    var r = Promise.resolve();
                                    return e.forEach(function(e) {
                                        r = r.then(function() {
                                            return h(e, n)
                                        }).then(function(e) {
                                            e && t.appendChild(e)
                                        })
                                    }),
                                        r
                                }
                            }
                            function o(t, e) {
                                return e instanceof Element ? Promise.resolve().then(function() { !
                                    function(t, e) {
                                        t.cssText ? e.cssText = t.cssText: function(t, e) {
                                            n.asArray(t).forEach(function(n) {
                                                e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                                            })
                                        } (t, e)
                                    } (window.getComputedStyle(t), e.style)
                                }).then(function() { [":before", ":after"].forEach(function(r) { !
                                    function(r) {
                                        var i = window.getComputedStyle(t, r),
                                            a = i.getPropertyValue("content");
                                        if ("" === a || "none" === a) return;
                                        var o = n.uid();
                                        e.className = e.className + " " + o;
                                        var s = document.createElement("style");
                                        s.appendChild(function(t, e, r) {
                                            var i = "." + t + ":" + e,
                                                a = r.cssText ?
                                                    function(t) {
                                                        var e = t.getPropertyValue("content");
                                                        return t.cssText + " content: " + e + ";"
                                                    } (r) : function(t) {
                                                        return n.asArray(t).map(function(e) {
                                                                return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important": "")
                                                            }).join("; ") + ";"
                                                    } (r);
                                            return document.createTextNode(i + "{" + a + "}")
                                        } (o, r, i)),
                                            e.appendChild(s)
                                    } (r)
                                })
                                }).then(function() {
                                    t instanceof HTMLTextAreaElement && (e.innerHTML = t.value);
                                    t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                                }).then(function() {
                                    if (! (e instanceof SVGElement)) return;
                                    if (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), !(e instanceof SVGRectElement)) return; ["width", "height"].forEach(function(t) {
                                        var n = e.getAttribute(t);
                                        n && e.style.setProperty(t, n)
                                    })
                                }).then(function() {
                                    return e
                                }) : e;
                                function r() {
                                    function r(t, e) {
                                        if (t.cssText) e.cssText = t.cssText;
                                        else r(t, e);
                                        function r(t, e) {
                                            n.asArray(t).forEach(function(n) {
                                                e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                                            })
                                        }
                                    }
                                    r(window.getComputedStyle(t), e.style)
                                }
                                function i() {
                                    function r(r) {
                                        var i = window.getComputedStyle(t, r),
                                            a = i.getPropertyValue("content");
                                        if (a === "" || a === "none") return;
                                        var o = n.uid();
                                        e.className = e.className + " " + o;
                                        var s = document.createElement("style");
                                        function u(t, e, r) {
                                            var i = "." + t + ":" + e,
                                                a = r.cssText ? o(r) : s(r);
                                            return document.createTextNode(i + "{" + a + "}");
                                            function o(t) {
                                                var e = t.getPropertyValue("content");
                                                return t.cssText + " content: " + e + ";"
                                            }
                                            function s(t) {
                                                return n.asArray(t).map(e).join("; ") + ";";
                                                function e(e) {
                                                    return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important": "")
                                                }
                                            }
                                        }
                                        s.appendChild(u(o, r, i)),
                                            e.appendChild(s)
                                    } [":before", ":after"].forEach(function(t) {
                                        r(t)
                                    })
                                }
                                function a() {
                                    if (t instanceof HTMLTextAreaElement) e.innerHTML = t.value;
                                    if (t instanceof HTMLInputElement) e.setAttribute("value", t.value)
                                }
                                function o() {
                                    if (! (e instanceof SVGElement)) return;
                                    if (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), !(e instanceof SVGRectElement)) return; ["width", "height"].forEach(function(t) {
                                        var n = e.getAttribute(t);
                                        if (!n) return;
                                        e.style.setProperty(t, n)
                                    })
                                }
                            }
                        }
                        function f(t) {
                            return i.resolveAll().then(function(e) {
                                var n = document.createElement("style");
                                return t.appendChild(n),
                                    n.appendChild(document.createTextNode(e)),
                                    t
                            })
                        }
                        function l(t) {
                            return a.inlineAll(t).then(function() {
                                return t
                            })
                        }
                        t.exports = s
                    } ()
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = n(22),
                        a = n(147),
                        o = n(471),
                        s = function() {
                            function t(t) {
                                this.options = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                                        }))),
                                            i.forEach(function(e) {
                                                r(t, e, n[e])
                                            })
                                    }
                                    return t
                                } ({
                                        graph: null,
                                        width: null,
                                        height: null,
                                        canvas: null,
                                        beforeTransform: function() {},
                                        afterTransform: function() {},
                                        drawCount: 0
                                    },
                                    t)
                            }
                            var e = t.prototype;
                            return e.getCanvas = function() {
                                var t = this.options,
                                    e = t.width,
                                    n = t.height,
                                    r = t.canvas;
                                if (!r) {
                                    var o = i.createDOM("<canvas></canvas>");
                                    r = new a.Canvas({
                                        containerDOM: o,
                                        width: e,
                                        height: n
                                    })
                                }
                                return r.drawCount || (r.drawCount = 0),
                                    r
                            },
                                e.drawInner = function(t, e) {
                                    var n = this.options.graph,
                                        r = n.getCanvas(),
                                        i = n.get("renderer"),
                                        a = t.drawCount;
                                    if ("svg" === i) {
                                        var s = [];
                                        r.deepEach(function(t) {
                                            "dom" === t.get("type") && s.push(t)
                                        }),
                                            s.length > 0 ? s.forEach(function(n) {
                                                n.domImageOnload = !1;
                                                var r = n.get("el"),
                                                    i = n.attr("width"),
                                                    u = n.attr("height");
                                                o.toPng(r, {
                                                    width: i,
                                                    height: u
                                                }).then(function(r) {
                                                    var i = new Image;
                                                    i.src = r,
                                                        i.onload = function() {
                                                            if (a === t.drawCount - 1) {
                                                                n.domImage = i,
                                                                    n.domImageOnload = !0;
                                                                for (var r = 0; r < s.length; r++) {
                                                                    var o = s[r];
                                                                    if (!o.domImageOnload || o.get("destroyed")) break;
                                                                    o.domImageOnload && r === s.length - 1 && e()
                                                                }
                                                            }
                                                        }
                                                })
                                            }) : e()
                                    } else e();
                                    t.drawCount += 1
                                },
                                e.toCanvas = function() {
                                    var t = this.options,
                                        e = t.graph,
                                        n = t.width,
                                        r = t.height,
                                        a = t.beforeTransform,
                                        o = t.afterTransform,
                                        s = this.getCanvas(),
                                        u = e.getBBox(),
                                        c = i.clone(e.getMatrix()),
                                        h = e.getFitViewPadding(),
                                        f = e.getCanvas(),
                                        l = i.getAutoZoomMatrix({
                                                minX: 0,
                                                minY: 0,
                                                maxX: n,
                                                maxY: r
                                            },
                                            u, h);
                                    return this.drawInner(s,
                                        function() {
                                            var t = f.get("children");
                                            s.set("children", t),
                                                a(l, c),
                                                e.setMatrix(l),
                                                s.draw(),
                                                e.setMatrix(c),
                                                o(l, c)
                                        }),
                                        s.matrix = l,
                                        s.get("el")
                                },
                                t
                        } ();
                    t.exports = s
                },
                function(t, e, n) {
                    var r = n(22),
                        i = function(t) {
                            function e(e) {
                                var n = {
                                    type: "guide",
                                    isGuide: !0,
                                    zIndex: 4
                                };
                                return r.mix(n, e),
                                t.call(this, n) || this
                            }
                            return function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (e, t),
                                e
                        } (n(371));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(22),
                        i = function(t) {
                            function e(e) {
                                var n = {
                                    type: "group",
                                    isNode: !1,
                                    isGroup: !0,
                                    zIndex: 1
                                };
                                return r.mix(n, e),
                                t.call(this, n) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n._beforeDraw = function() {
                                this.deepEach(function(t, e) {
                                    e && (t.zIndex = e.zIndex + 1),
                                        t.updateCollapsedParent(),
                                        t.collapsedParent ? t.hide() : t.show()
                                }),
                                    this.getInnerEdges().forEach(function(t) {
                                        t.linkedItemVisible() ? t.show() : t.hide()
                                    }),
                                    t.prototype._beforeDraw.call(this)
                            },
                                n.updatePosition = function() {},
                                n._shouldDraw = function() {
                                    return ! 0
                                },
                                n.getCrossEdges = function() {
                                    var t = [],
                                        e = this.getInnerEdges();
                                    this.deepEach(function(e) {
                                        t.push(e.id)
                                    });
                                    var n = e.filter(function(e) {
                                        var n = e.getModel();
                                        return - 1 === t.indexOf(n.source) || -1 === t.indexOf(n.target)
                                    });
                                    return r.uniq(n)
                                },
                                n.getInnerEdges = function() {
                                    var t = [];
                                    return this.deepEach(function(e) {
                                        e.getEdges().forEach(function(e) {
                                            t.push(e)
                                        })
                                    }),
                                        r.uniq(t)
                                },
                                n.getChildrenBBox = function() {
                                    var t = this.getChildren().map(function(t) {
                                        return t.getGraphicGroup()
                                    });
                                    return r.getChildrenBBox(t)
                                },
                                e
                        } (n(388));
                    t.exports = i
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = n(22),
                        a = function(t) {
                            function e(e) {
                                var n = {
                                    type: "edge",
                                    isEdge: !0,
                                    zIndex: 2
                                };
                                return i.mix(n, e),
                                t.call(this, n) || this
                            } !
                                function(t, e) {
                                    t.prototype = Object.create(e.prototype),
                                        t.prototype.constructor = t,
                                        t.__proto__ = e
                                } (e, t);
                            var n = e.prototype;
                            return n._init = function() {
                                t.prototype._init.call(this)
                            },
                                n._beforeDraw = function() {
                                    var e = this.model,
                                        n = this.itemMap;
                                    i.isObject(e.source) ? this.source = e.source: this.source = n[e.source],
                                        i.isObject(e.target) ? this.target = e.target: this.target = n[e.target],
                                        t.prototype._beforeDraw.call(this)
                                },
                                n._afterDraw = function() {
                                    this.linkedItemVisible() || this.hide(),
                                        this._addArrow(),
                                        t.prototype._afterDraw.call(this)
                                },
                                n._addArrow = function() {
                                    var t = this.model,
                                        e = this.keyShape;
                                    if ("path" === e.get("type")) {
                                        var n = this.shapeObj,
                                            r = e.attr("endArrow"),
                                            i = e.attr("startArrow"),
                                            a = t.endArrow || r,
                                            o = t.startArrow || i;
                                        i && e.attr("startArrow", !1),
                                        r && e.attr("endArrow", !1),
                                        a && this._drawArrow(n.endArrow, "end"),
                                        o && this._drawArrow(n.startArrow, "start")
                                    }
                                },
                                n._drawArrow = function(t, e) {
                                    var n = t.path,
                                        a = t.shorten,
                                        o = t.tangent,
                                        s = t.ratio,
                                        u = t.style;
                                    o = o(this),
                                        a = a(this),
                                        n = n(this),
                                        u = u(this),
                                        s = s();
                                    var c = this.group,
                                        h = this.keyShape,
                                        f = i.parsePathString(h.attr("path")),
                                        l = f[f.length - 1],
                                        p = f[0],
                                        d = h.getPoint(s);
                                    if (d && !isNaN(d.x)) {
                                        var g = c.addShape("path", {
                                                attrs: function(t) {
                                                    for (var e = 1; e < arguments.length; e++) {
                                                        var n = null != arguments[e] ? arguments[e] : {},
                                                            i = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                                                        }))),
                                                            i.forEach(function(e) {
                                                                r(t, e, n[e])
                                                            })
                                                    }
                                                    return t
                                                } ({
                                                        path: n
                                                    },
                                                    u)
                                            }),
                                            v = o[1][0] - o[0][0],
                                            m = o[1][1] - o[0][1],
                                            x = a / Math.sqrt(v * v + m * m),
                                            y = [ - v * x, -m * x],
                                            b = 0,
                                            M = Math.atan(v / m);
                                        0 === m && v < 0 ? b = Math.PI: v > 0 && m > 0 ? b = Math.PI / 2 - M: v < 0 && m < 0 ? b = -Math.PI / 2 - M: v >= 0 && m < 0 ? b = -M - Math.PI / 2 : v <= 0 && m > 0 && (b = Math.PI / 2 - M),
                                            g.rotate(b),
                                            g.translate(d.x, d.y),
                                            "end" === e ? (l[l.length - 1] = y[1] + d.y, l[l.length - 2] = y[0] + d.x) : (p[p.length - 1] = y[1] + d.y, p[p.length - 2] = y[0] + d.x),
                                            h.attr("path", f),
                                            this[e + "Arrow"] = g
                                    }
                                },
                                n._getControlPoints = function() {
                                    var t = this.model.controlPoints;
                                    return i.isArray(t) ? t: []
                                },
                                n._shouldDraw = function() {
                                    return t.prototype._shouldDraw.call(this) && this.linkedItemVisible()
                                },
                                n._getPoint = function(t) {
                                    if (t.isItem) {
                                        var e = t.getBBox();
                                        return {
                                            x: e.centerX,
                                            y: e.centerY
                                        }
                                    }
                                    return {
                                        x: t.x,
                                        y: t.y
                                    }
                                },
                                n.linkedItemVisible = function() {
                                    var t = this.source,
                                        e = this.target;
                                    return i.isPlainObject(t) || i.isPlainObject(e) || t.isVisible() || e.isVisible() || t.collapsedParent !== e.collapsedParent
                                },
                                n.getSource = function() {
                                    var t = this.source,
                                        e = t.collapsedParent,
                                        n = this.itemMap;
                                    return e ? n[e.id] : t
                                },
                                n.getTarget = function() {
                                    var t = this.target,
                                        e = t.collapsedParent,
                                        n = this.itemMap;
                                    return e ? n[e.id] : t
                                },
                                n.getPoints = function() {
                                    var t = this.getSource(),
                                        e = this.getTarget(),
                                        n = this.model,
                                        r = this._getControlPoints(),
                                        a = this._getPoint(t),
                                        o = this._getPoint(e),
                                        s = [a].concat(r).concat([o]),
                                        u = s.length;
                                    if (t.isItem) {
                                        var c = i.isNumber(this.model.sourceAnchor) && t.id === n.source ? this.model.sourceAnchor: s[1],
                                            h = t.getLinkPoints(c);
                                        s[0] = h[0]
                                    }
                                    if (e.isItem) {
                                        var f = i.isNumber(this.model.targetAnchor) && e.id === n.target ? this.model.targetAnchor: s[u - 2],
                                            l = e.getLinkPoints(f);
                                        s[u - 1] = l[0]
                                    }
                                    return s
                                },
                                n.destroy = function() {
                                    var e = this.itemMap,
                                        n = this.model,
                                        r = e[n.source],
                                        a = e[n.target];
                                    r && r.isItem && i.Array.remove(r.edges, this),
                                    a && a.isItem && i.Array.remove(a.edges, this),
                                        t.prototype.destroy.call(this)
                                },
                                e
                        } (n(371));
                    t.exports = a
                },
                function(t, e, n) {
                    t.exports = {
                        Node: n(388),
                        Edge: n(475),
                        Group: n(474),
                        Guide: n(473)
                    }
                },
                function(t, e, n) {
                    var r;
                    /*!
                     * EventEmitter v5.2.5 - git.io/ee
                     * Unlicense - http://unlicense.org/
                     * Oliver Caldwell - http://oli.me.uk/
                     * @preserve
                     */
                    !
                        function(e) {
                            "use strict";
                            function i() {}
                            var a = i.prototype,
                                o = e.EventEmitter;
                            function s(t, e) {
                                for (var n = t.length; n--;) if (t[n].listener === e) return n;
                                return - 1
                            }
                            function u(t) {
                                return function() {
                                    return this[t].apply(this, arguments)
                                }
                            }
                            a.getListeners = function(t) {
                                var e, n, r = this._getEvents();
                                if (t instanceof RegExp) for (n in e = {},
                                    r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                                else e = r[t] || (r[t] = []);
                                return e
                            },
                                a.flattenListeners = function(t) {
                                    var e, n = [];
                                    for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                                    return n
                                },
                                a.getListenersAsObject = function(t) {
                                    var e, n = this.getListeners(t);
                                    return n instanceof Array && ((e = {})[t] = n),
                                    e || n
                                },
                                a.addListener = function(t, e) {
                                    if (!
                                            function t(e) {
                                                return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                                            } (e)) throw new TypeError("listener must be a function");
                                    var n, r = this.getListenersAsObject(t),
                                        i = "object" == typeof e;
                                    for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(i ? e: {
                                        listener: e,
                                        once: !1
                                    });
                                    return this
                                },
                                a.on = u("addListener"),
                                a.addOnceListener = function(t, e) {
                                    return this.addListener(t, {
                                        listener: e,
                                        once: !0
                                    })
                                },
                                a.once = u("addOnceListener"),
                                a.defineEvent = function(t) {
                                    return this.getListeners(t),
                                        this
                                },
                                a.defineEvents = function(t) {
                                    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                                    return this
                                },
                                a.removeListener = function(t, e) {
                                    var n, r, i = this.getListenersAsObject(t);
                                    for (r in i) i.hasOwnProperty(r) && -1 !== (n = s(i[r], e)) && i[r].splice(n, 1);
                                    return this
                                },
                                a.off = u("removeListener"),
                                a.addListeners = function(t, e) {
                                    return this.manipulateListeners(!1, t, e)
                                },
                                a.removeListeners = function(t, e) {
                                    return this.manipulateListeners(!0, t, e)
                                },
                                a.manipulateListeners = function(t, e, n) {
                                    var r, i, a = t ? this.removeListener: this.addListener,
                                        o = t ? this.removeListeners: this.addListeners;
                                    if ("object" != typeof e || e instanceof RegExp) for (r = n.length; r--;) a.call(this, e, n[r]);
                                    else for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? a.call(this, r, i) : o.call(this, r, i));
                                    return this
                                },
                                a.removeEvent = function(t) {
                                    var e, n = typeof t,
                                        r = this._getEvents();
                                    if ("string" === n) delete r[t];
                                    else if (t instanceof RegExp) for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                                    else delete this._events;
                                    return this
                                },
                                a.removeAllListeners = u("removeEvent"),
                                a.emitEvent = function(t, e) {
                                    var n, r, i, a, o = this.getListenersAsObject(t);
                                    for (a in o) if (o.hasOwnProperty(a)) for (n = o[a].slice(0), i = 0; i < n.length; i++) ! 0 === (r = n[i]).once && this.removeListener(t, r.listener),
                                    r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                                    return this
                                },
                                a.trigger = u("emitEvent"),
                                a.emit = function(t) {
                                    var e = Array.prototype.slice.call(arguments, 1);
                                    return this.emitEvent(t, e)
                                },
                                a.setOnceReturnValue = function(t) {
                                    return this._onceReturnValue = t,
                                        this
                                },
                                a._getOnceReturnValue = function() {
                                    return ! this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                                },
                                a._getEvents = function() {
                                    return this._events || (this._events = {})
                                },
                                i.noConflict = function() {
                                    return e.EventEmitter = o,
                                        i
                                },
                            void 0 === (r = function() {
                                return i
                            }.call(e, n, e, t)) || (t.exports = r)
                        } ("undefined" != typeof window ? window: this || {})
                },
                function(t, e, n) {
                    var r = n(22),
                        i = function(t) { !
                            function(t, e) {
                                t.prototype = Object.create(e.prototype),
                                    t.prototype.constructor = t,
                                    t.__proto__ = e
                            } (n, t);
                            var e = n.prototype;
                            function n(e) {
                                var n, i = (n = t.call(this) || this).getDefaultCfg();
                                return n._cfg = r.mix({},
                                    i, e),
                                    n
                            }
                            return e.getDefaultCfg = function() {
                                return {}
                            },
                                e.get = function(t) {
                                    return this._cfg[t]
                                },
                                e.set = function(t, e) {
                                    this._cfg[t] = e
                                },
                                e.destroy = function() {
                                    this._cfg = {},
                                        this.removeAllListeners(),
                                        this.destroyed = !0
                                },
                                n
                        } (n(477));
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(22),
                        i = n(147),
                        a = function() {};
                    r.augment(a, {
                        drawInner: function(t) {
                            var e = r.clone(this.getTotalMatrix()),
                                n = this._attrs,
                                i = n.x,
                                a = n.y,
                                o = n.width,
                                s = n.height;
                            t.setTransform(e[0], e[1], e[3], e[4], e[6], e[7]),
                                t.drawImage(this.domImage, i, a, o, s)
                        }
                    }),
                        r.mixin(i.Dom, [a]),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(22),
                        i = n(147),
                        a = function() {};
                    r.augment(a, {
                        hasClass: function(t) {
                            var e = this.get("class");
                            return ! (!e || -1 === e.indexOf(t))
                        }
                    }),
                        r.mixin(i.Shape, [a]),
                        t.exports = a
                },
                function(t, e, n) {
                    var r = n(147),
                        i = n(22),
                        a = function() {};
                    i.augment(a, {
                        findByClass: function(t) {
                            var e = [];
                            return this.deepEach(function(n) {
                                n.hasClass(t) && e.push(n)
                            }),
                                e
                        },
                        hasClass: function(t) {
                            var e = this.get("class");
                            return ! (!e || -1 === e.indexOf(t))
                        },
                        deepEach: function(t, e) {
                            i.traverseTree(this, t,
                                function(t) {
                                    return t.get("children")
                                },
                                e)
                        },
                        sort: function() {
                            var t = this.get("children");
                            this.set("children", i.radixSort(t,
                                function(t) {
                                    return t.get("zIndex")
                                }))
                        },
                        sortBy: function(t) {
                            var e = this.get("children");
                            this.set("children", i.radixSort(e, t))
                        },
                        clear: function(t) {
                            for (var e = this._cfg.children,
                                     n = e.length - 1; n >= 0; n--) e[n].remove(t);
                            return this._cfg.children = [],
                                this
                        }
                    }),
                        i.mixin(r.Group, [a]),
                        t.exports = a
                },
                function(t, e, n) {
                    n(153).registerGuide("common", {
                        draw: function() {
                            console.warn("do not have this guide, please register one")
                        }
                    })
                },
                function(t, e, n) {
                    t.exports = {
                        common: n(482)
                    }
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var i = n(153),
                        a = n(22),
                        o = n(146);
                    i.registerGroup("common", {
                        draw: function(t) {
                            return t.getModel().collapsed ? this.drawCollapsed(t) : this.drawExpanded(t)
                        },
                        defaultWidth: 184,
                        defaultHeight: 40,
                        getLabel: function(t) {
                            return t.getModel().label
                        },
                        drawLabel: function(t, e, n) {
                            var r = this.getLabel(t);
                            if (r) {
                                var i = t.getGraphicGroup(),
                                    s = [8, 8];
                                e += s[0],
                                    n += s[1];
                                var u = t.getModel(),
                                    c = u.labelOffsetX,
                                    h = u.labelOffsetY,
                                    f = u.labelRotate;
                                e = c ? c + e: e,
                                    n = h ? h + n: n;
                                var l = a.mix(!0, {},
                                    o.labelStyle, {
                                        x: e,
                                        y: n,
                                        textAlign: "left",
                                        textBaseline: "top"
                                    });
                                a.isObject(r) ? a.mix(l, r) : l.text = r;
                                var p = i.addShape("text", {
                                    class: "label",
                                    attrs: l
                                });
                                if (f) {
                                    var d = p.getBBox(),
                                        g = (d.maxX + d.minX) / 2,
                                        v = (d.maxY + d.minY) / 2;
                                    p.transform([["t", -g, -v], ["r", f, f], ["t", g, v]])
                                }
                            }
                        },
                        drawKeyShape: function(t, e) {
                            var n = e.x,
                                r = e.y,
                                i = e.width,
                                s = e.height,
                                u = t.getModel(),
                                c = t.getGraphicGroup(),
                                h = a.mix({},
                                    o.groupStyle, u.style),
                                f = a.getRectPath(n, r, i, s, h.radius);
                            return t.lastChildrenBox = e,
                                c.addShape("path", {
                                    attrs: a.mix({},
                                        h, {
                                            path: f
                                        })
                                })
                        },
                        getChildrenBBox: function(t) {
                            var e = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                                        }))),
                                            i.forEach(function(e) {
                                                r(t, e, n[e])
                                            })
                                    }
                                    return t
                                } ({},
                                t.lastChildrenBox),
                                n = t.getModel();
                            if (t.getChildren().length > 0) {
                                var i = t.getChildrenBBox();
                                e.x = i.minX - o.groupBackgroundPadding[3],
                                    e.y = i.minY - o.groupBackgroundPadding[0],
                                    e.width = i.maxX - i.minX + o.groupBackgroundPadding[3] + o.groupBackgroundPadding[1],
                                    e.height = i.maxY - i.minY + o.groupBackgroundPadding[0] + o.groupBackgroundPadding[2]
                            } else e.width = this.defaultWidth,
                                e.height = this.defaultHeight;
                            return a.isNil(e.x) && !a.isNil(n.x) && (e.x = n.x),
                            a.isNil(e.y) && !a.isNil(n.y) && (e.y = n.y),
                                e
                        },
                        drawExpanded: function(t) {
                            var e = this.getChildrenBBox(t),
                                n = this.drawKeyShape(t, e);
                            return this.drawLabel(t, e.x, e.y),
                                n
                        },
                        drawCollapsed: function(t) {
                            var e = this.getChildrenBBox(t);
                            e.width = this.defaultWidth,
                                e.height = this.defaultHeight;
                            var n = this.drawKeyShape(t, e);
                            return this.drawLabel(t, e.x, e.y),
                                n
                        },
                        anchor: {
                            intersectBox: "rect"
                        }
                    })
                },
                function(t, e, n) {
                    t.exports = {
                        common: n(484)
                    }
                },
                function(t, e, n) {
                    function r(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))),
                                r.forEach(function(e) {
                                    i(t, e, n[e])
                                })
                        }
                        return t
                    }
                    function i(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                            t
                    }
                    var a = n(153),
                        o = n(22),
                        s = n(146),
                        u = {
                            path: function(t) {
                                var e = t.getKeyShape().attr("lineWidth"),
                                    n = 10 * (e = e > 3 ? e: 3) / 3,
                                    r = 4 * e / 3,
                                    i = 4 * e;
                                return [["M", -n, r], ["L", 0, 0], ["L", -n, -r], ["A", i, i, 0, 0, 1, -n, r], ["Z"]]
                            },
                            shorten: function(t) {
                                var e = t.getKeyShape().attr("lineWidth");
                                return 3.1 * (e > 3 ? e: 3)
                            },
                            style: function(t) {
                                var e = t.getKeyShape().attr();
                                return {
                                    fillOpacity: e.strokeOpacity,
                                    fill: e.stroke
                                }
                            }
                        };
                    a.registerEdge("common", {
                        draw: function(t) {
                            var e = this.drawKeyShape(t);
                            return this.drawLabel(t, e),
                                e
                        },
                        drawKeyShape: function(t) {
                            var e = t.getGraphicGroup(),
                                n = this.getStyle(t),
                                r = this.getPath(t);
                            return e.addShape("path", {
                                attrs: o.mix({},
                                    n, {
                                        path: r
                                    })
                            })
                        },
                        getStyle: function(t) {
                            var e = t.getModel();
                            return o.mix(!0, {},
                                {
                                    stroke: e.color || "#A3B1BF",
                                    strokeOpacity: .92,
                                    lineAppendWidth: 4,
                                    lineWidth: e.size || 1
                                },
                                e.style)
                        },
                        getPath: function(t) {
                            var e = t.getPoints();
                            return o.pointsToPolygon(e)
                        },
                        getLabel: function(t) {
                            return t.getModel().label
                        },
                        getDefaultLabelRectStyle: function() {
                            return {
                                fill: "white"
                            }
                        },
                        getDefaultLabelRectPadding: function() {
                            return o.toAllPadding([4, 8])
                        },
                        drawLabel: function(t, e) {
                            var n = this.getLabel(t),
                                r = t.getGraphicGroup(),
                                i = t.getModel(),
                                a = i.labelOffsetX,
                                u = i.labelOffsetY,
                                c = i.labelRotate;
                            if (n) {
                                var h = e.getPoint(.5);
                                if (!h) return;
                                h.x = a ? h.x + a: h.x,
                                    h.y = u ? h.y + u: h.y;
                                var f = o.mix(!0, {},
                                    s.labelStyle, h);
                                o.isObject(n) ? o.mix(f, n) : f.text = n,
                                    n = r.addShape("text", {
                                        class: "label",
                                        attrs: f
                                    });
                                var l = this.getDefaultLabelRectPadding(t),
                                    p = this.getDefaultLabelRectStyle(t),
                                    d = n.getBBox(),
                                    g = i.labelRectStyle ? o.mix({},
                                        p, i.labelRectStyle) : p,
                                    v = r.addShape("rect", {
                                        attrs: o.mix({},
                                            g, {
                                                x: d.minX - l[3],
                                                y: d.minY - l[0],
                                                width: d.maxX - d.minX + l[1] + l[3],
                                                height: d.maxY - d.minY + l[0] + l[2]
                                            })
                                    });
                                if (c) {
                                    var m = (d.maxX + d.minX) / 2,
                                        x = (d.maxY + d.minY) / 2;
                                    n.transform([["t", -m, -x], ["r", c, c], ["t", m, x]]),
                                        v.transform([["t", -m, -x], ["r", c, c], ["t", m, x]])
                                }
                                o.toFront(n)
                            }
                        },
                        startArrow: r({},
                            u, {
                                tangent: function(t) {
                                    return t.getKeyShape().getStartTangent()
                                },
                                ratio: function() {
                                    return 0
                                }
                            }),
                        endArrow: r({},
                            u, {
                                tangent: function(t) {
                                    return t.getKeyShape().getEndTangent()
                                },
                                ratio: function() {
                                    return 1
                                }
                            })
                    })
                },
                function(t, e, n) {
                    t.exports = {
                        common: n(486)
                    }
                },
                function(t, e, n) {
                    var r = n(153),
                        i = n(22);
                    r.registerNode("html", {
                        getHtml: function(t) {
                            return t.getModel().html
                        },
                        cssSize: !0,
                        draw: function(t) {
                            var e = i.createDOM('<div class="g6-html-node-container"></div>'),
                                n = t.getGraphicGroup(),
                                r = t.getGraph();
                            if ("svg" !== r.get("renderer")) throw new Error("please use svg renderer draw html element !");
                            var a = r.getGraphContainer(),
                                o = this.getSize(t),
                                s = this.getStyle(t),
                                u = this.cssSize,
                                c = this.getHtml(t);
                            c = i.createDOM(c),
                                e.css({
                                    position: "absolute",
                                    padding: "0px",
                                    margin: "0px"
                                }),
                                e.appendChild(c),
                                a.appendChild(e),
                            u && (o[0] = e.width(), o[1] = e.height());
                            var h = -o[0] / 2,
                                f = -o[1] / 2,
                                l = o[0],
                                p = o[1],
                                d = n.addShape("rect", {
                                    attrs: i.mix({},
                                        s, {
                                            x: h,
                                            y: f,
                                            width: l,
                                            height: p
                                        })
                                });
                            return n.addShape("dom", {
                                attrs: i.mix({
                                    x: h,
                                    y: f,
                                    width: l,
                                    height: p,
                                    html: e
                                })
                            }),
                                d
                        }
                    })
                },
                function(t, e, n) {
                    var r = n(153),
                        i = n(22),
                        a = n(146);
                    r.registerNode("common", {
                        draw: function(t) {
                            var e = t.getGraphicGroup(),
                                n = this.drawLabel(t),
                                r = this.drawKeyShape(t);
                            return n && i.toFront(n, e),
                                r
                        },
                        getSize: function(t) {
                            var e = t.getModel().size;
                            return i.isArray(e) ? e: i.isNumber(e) ? [e, e] : [a.defaultNodeSize, a.defaultNodeSize]
                        },
                        getStyle: function(t) {
                            var e = t.getModel();
                            return i.mix(!0, {
                                    lineWidth: 1,
                                    fill: e.color || "#40a9ff",
                                    stroke: e.color || "#096dd9",
                                    fillOpacity: .92
                                },
                                e.style)
                        },
                        getLabel: function(t) {
                            return t.getModel().label
                        },
                        drawKeyShape: function(t) {
                            var e = t.getGraphicGroup(),
                                n = this.getStyle(t),
                                r = this.getPath(t);
                            return e.addShape("path", {
                                attrs: i.mix({},
                                    n, {
                                        path: r
                                    })
                            })
                        },
                        drawLabel: function(t) {
                            var e = t.getGraphicGroup(),
                                n = this.getLabel(t),
                                r = t.getModel(),
                                o = r.labelOffsetX,
                                s = r.labelOffsetY,
                                u = r.labelRotate;
                            if (!i.isNil(n)) {
                                var c = i.mix(!0, {},
                                    a.labelStyle, {
                                        x: o || 0,
                                        y: s || 0
                                    });
                                i.isObject(n) ? i.mix(c, n) : c.text = n;
                                var h = e.addShape("text", {
                                    class: "label",
                                    attrs: c
                                });
                                return u && h.rotate(u),
                                    h
                            }
                        },
                        getPath: function(t) {
                            var e = this.getSize(t);
                            return i.getEllipsePath(0, 0, e[0] / 2, e[1] / 2)
                        }
                    })
                },
                function(t, e, n) {
                    t.exports = {
                        common: n(489),
                        html: n(488)
                    }
                },
                function(t, e, n) {
                    var r = n(448),
                        i = n(152),
                        a = {
                            getAutoZoomMatrix: function(t, e, n, i) {
                                var a = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                                    o = t.maxX - t.minX,
                                    s = t.maxY - t.minY,
                                    u = (e.maxX + e.minX) / 2,
                                    c = (e.maxY + e.minY) / 2,
                                    h = o - n[1] - n[3],
                                    f = s - n[0] - n[2],
                                    l = e.maxX - e.minX,
                                    p = e.maxY - e.minY,
                                    d = Math.min(f / p, h / l);
                                return i && (d = i(d)),
                                    r.mat3.translate(a, a, [ - u, -c]),
                                    r.mat3.scale(a, a, [d, d]),
                                    r.mat3.translate(a, a, [o / 2, s / 2]),
                                    a
                            },
                            getNineBoxPosition: function(t, e, n, r, i) {
                                var a = {};
                                switch (t) {
                                    case "tl":
                                        a.y = e.x + i[0],
                                            a.x = e.y + i[3];
                                        break;
                                    case "lc":
                                        a.y = (e.height - r) / 2,
                                            a.x = i[3];
                                        break;
                                    case "bl":
                                        a.y = e.height - r - i[2],
                                            a.x = i[3];
                                        break;
                                    case "cc":
                                        a.y = (e.height - r) / 2,
                                            a.x = (e.width - n) / 2;
                                        break;
                                    case "tc":
                                        a.y = i[0],
                                            a.x = (e.width - n) / 2;
                                        break;
                                    case "tr":
                                        a.y = i[0],
                                            a.x = e.width - n - i[1];
                                        break;
                                    case "rc":
                                        a.y = (e.height - r) / 2,
                                            a.x = e.width - n - i[1];
                                        break;
                                    case "br":
                                        a.y = e.height - r - i[2],
                                            a.x = e.width - n - i[1];
                                        break;
                                    case "bc":
                                        a.y = e.height - r - i[2],
                                            a.x = (e.width - n) / 2;
                                        break;
                                    default:
                                        a.y = e.x + i[0],
                                            a.x = e.y + i[3]
                                }
                                return a.x += e.x,
                                    a.y += e.y,
                                    a
                            },
                            getTotalBBox: function(t) {
                                var e = 1 / 0,
                                    n = -1 / 0,
                                    r = 1 / 0,
                                    i = -1 / 0;
                                return t.forEach(function(t) {
                                    t.minX < e && (e = t.minX),
                                    t.maxX > n && (n = t.maxX),
                                    t.minY < r && (r = t.minY),
                                    t.maxY > i && (i = t.maxY)
                                }),
                                    {
                                        minX: e,
                                        minY: r,
                                        maxX: n,
                                        maxY: i,
                                        width: n - e,
                                        height: i - r
                                    }
                            },
                            getChildrenBBox: function(t) {
                                var e = 1 / 0,
                                    n = -1 / 0,
                                    r = 1 / 0,
                                    o = -1 / 0;
                                i.each(t,
                                    function(t) {
                                        var i = t.isGroup ? a.getChildrenBBox(t.get("children")) : t.getBBox();
                                        if (!i) return ! 0;
                                        var s = [i.minX, i.minY, 1],
                                            u = [i.minX, i.maxY, 1],
                                            c = [i.maxX, i.minY, 1],
                                            h = [i.maxX, i.maxY, 1];
                                        t.apply(s),
                                            t.apply(u),
                                            t.apply(c),
                                            t.apply(h);
                                        var f = Math.min(s[0], u[0], c[0], h[0]),
                                            l = Math.max(s[0], u[0], c[0], h[0]),
                                            p = Math.min(s[1], u[1], c[1], h[1]),
                                            d = Math.max(s[1], u[1], c[1], h[1]);
                                        f < e && (e = f),
                                        l > n && (n = l),
                                        p < r && (r = p),
                                        d > o && (o = d)
                                    });
                                var s = {
                                    minX: e,
                                    minY: r,
                                    maxX: n,
                                    maxY: o
                                };
                                return s.x = s.minX,
                                    s.y = s.minY,
                                    s.width = s.maxX - s.minX,
                                    s.height = s.maxY - s.minY,
                                    s.centerX = (s.minX + s.maxX) / 2,
                                    s.centerY = (s.minY + s.maxY) / 2,
                                    s
                            },
                            getBBox: function(t, e) {
                                var n, i = t.getBBox(),
                                    a = {
                                        x: i.minX,
                                        y: i.minY
                                    },
                                    o = {
                                        x: i.maxX,
                                        y: i.maxY
                                    };
                                if (e.isGroup) {
                                    for (n = t; n !== e;) {
                                        var s = n.getMatrix();
                                        a = r.applyMatrix(a, s),
                                            o = r.applyMatrix(o, s),
                                            n = n.getParent()
                                    }
                                    var u = n.getMatrix();
                                    a = r.applyMatrix(a, u),
                                        o = r.applyMatrix(o, u)
                                } else a = r.applyMatrix(a, e),
                                    o = r.applyMatrix(o, e);
                                return {
                                    minX: a.x,
                                    minY: a.y,
                                    maxX: o.x,
                                    maxY: o.y
                                }
                            },
                            toBack: function(t) {
                                t.toBack()
                            },
                            toFront: function(t) {
                                t.toFront()
                            }
                        };
                    t.exports = a
                },
                function(t, e, n) {
                    var r = n(152);
                    t.exports = {
                        isNode: function(t) {
                            return t && r.isObject(t) && "node" === t.type
                        },
                        isEdge: function(t) {
                            return t && r.isObject(t) && "edge" === t.type
                        },
                        isGroup: function(t) {
                            return t && r.isObject(t) && "group" === t.type
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(152),
                        i = {};
                    r.mix(i, {
                        addEventListener: function(t, e, n) {
                            return t.attachEvent ? (t.attachEvent("on" + e, n), {
                                remove: function() {
                                    t.detachEvent("on" + e, n)
                                }
                            }) : t.addEventListener ? (t.addEventListener(e, n, !1), {
                                remove: function() {
                                    t.removeEventListener(e, n, !1)
                                }
                            }) : void 0
                        },
                        createDOM: function(t, e) {
                            var n;
                            return (n = r.isString(t) ? r.createDom(t) : t).bbox = n.getBoundingClientRect(),
                                n.hide = function() {
                                    return n.style.visibility = "hidden",
                                        n
                                },
                                n.show = function() {
                                    return n.style.visibility = "visible",
                                        n
                                },
                                n.css = function(t) {
                                    return r.modifyCSS(n, t),
                                        n
                                },
                                n.width = function() {
                                    return r.getWidth(n)
                                },
                                n.height = function() {
                                    return r.getHeight(n)
                                },
                                n.destroy = function() {
                                    n.parentNode && n.parentNode.removeChild(n)
                                },
                                n.on = function(t, e) {
                                    n.addEventListener(t, e)
                                },
                                n.off = function(t, e) {
                                    n.removeEventListener(t, e)
                                },
                                n.css(e),
                                n
                        },
                        initDOMContainer: function(t, e) {
                            if (!t) throw new Error("please set the container for the " + e + " !");
                            return r.isString(t) && (t = document.getElementById(t)),
                                t
                        }
                    }),
                        t.exports = i
                },
                function(t, e) {
                    var n = {
                        svg: "svg",
                        circle: "circle",
                        rect: "rect",
                        text: "text",
                        path: "path",
                        foreignObject: "foreignObject",
                        polygon: "polygon",
                        ellipse: "ellipse",
                        image: "image"
                    };
                    t.exports = function(t, e, r) {
                        var i = r.target || r.srcElement;
                        if (!n[i.tagName]) {
                            for (var a = i.parentNode; a && !n[a.tagName];) a = a.parentNode;
                            i = a
                        }
                        return this._cfg.el === i ? this: this.find(function(t) {
                            return t._cfg && t._cfg.el === i
                        })
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
                        a = function() {
                            function t(t) {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
                                e.setAttribute("patternUnits", "userSpaceOnUse");
                                var n = document.createElementNS("http://www.w3.org/2000/svg", "image");
                                e.appendChild(n);
                                var a = r.uniqueId("pattern_");
                                e.id = a,
                                    this.el = e,
                                    this.id = a,
                                    this.cfg = t;
                                var o = i.exec(t)[2];
                                n.setAttribute("href", o);
                                var s = new Image;
                                function u() {
                                    console.log(s.width, s.height),
                                        e.setAttribute("width", s.width),
                                        e.setAttribute("height", s.height)
                                }
                                return o.match(/^data:/i) || (s.crossOrigin = "Anonymous"),
                                    s.src = o,
                                    s.complete ? u() : (s.onload = u, s.src = s.src),
                                    this
                            }
                            return t.prototype.match = function(t, e) {
                                return this.cfg === e
                            },
                                t
                        } ();
                    t.exports = a
                },
                function(t, e, n) {
                    var r = n(17),
                        i = function() {
                            function t(t) {
                                this.type = "clip";
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                                this.el = e,
                                    this.id = r.uniqueId("clip_"),
                                    e.id = this.id;
                                var n = t._cfg.el;
                                return e.appendChild(n.cloneNode(!0)),
                                    this.cfg = t,
                                    this
                            }
                            var e = t.prototype;
                            return e.match = function() {
                                return ! 1
                            },
                                e.remove = function() {
                                    var t = this.el;
                                    t.parentNode.removeChild(t)
                                },
                                t
                        } ();
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(17),
                        i = function() {
                            function t(t, e) {
                                var n = document.createElementNS("http://www.w3.org/2000/svg", "marker"),
                                    i = r.uniqueId("marker_");
                                n.setAttribute("id", i);
                                var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                return a.setAttribute("stroke", "none"),
                                    a.setAttribute("fill", t.stroke || "#000"),
                                    n.appendChild(a),
                                    n.setAttribute("overflow", "visible"),
                                    n.setAttribute("orient", "auto-start-reverse"),
                                    this.el = n,
                                    this.child = a,
                                    this.id = i,
                                    this.cfg = t["marker-start" === e ? "startArrow": "endArrow"],
                                    this.stroke = t.stroke || "#000",
                                    !0 === this.cfg ? this._setDefaultPath(e, a) : this._setMarker(t.lineWidth, a),
                                    this
                            }
                            var e = t.prototype;
                            return e.match = function() {
                                return ! 1
                            },
                                e._setDefaultPath = function(t, e) {
                                    var n = this.el;
                                    e.setAttribute("d", "M0,0 L6,3 L0,6 L3,3Z"),
                                        n.setAttribute("refX", 3),
                                        n.setAttribute("refY", 3)
                                },
                                e._setMarker = function(t, e) {
                                    var n = this.el,
                                        i = this.cfg.path,
                                        a = this.cfg.d;
                                    r.isArray(i) && (i = i.map(function(t) {
                                        return t.join(" ")
                                    }).join("")),
                                        e.setAttribute("d", i),
                                        n.appendChild(e),
                                    a && n.setAttribute("refX", a / t)
                                },
                                e.update = function(t) {
                                    var e = this.child;
                                    e.attr ? e.attr("fill", t) : e.setAttribute("fill", t)
                                },
                                t
                        } ();
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(17),
                        i = {
                            shadowColor: "color",
                            shadowOpacity: "opacity",
                            shadowBlur: "blur",
                            shadowOffsetX: "dx",
                            shadowOffsetY: "dy"
                        },
                        a = {
                            x: "-40%",
                            y: "-40%",
                            width: "200%",
                            height: "200%"
                        },
                        o = function() {
                            function t(t) {
                                this.type = "filter";
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
                                return r.each(a,
                                    function(t, n) {
                                        e.setAttribute(n, t)
                                    }),
                                    this.el = e,
                                    this.id = r.uniqueId("filter_"),
                                    this.el.id = this.id,
                                    this.cfg = t,
                                    this._parseShadow(t, e),
                                    this
                            }
                            var e = t.prototype;
                            return e.match = function(t, e) {
                                if (this.type !== t) return ! 1;
                                var n = !0,
                                    i = this.cfg;
                                return r.each(Object.keys(i),
                                    function(t) {
                                        if (i[t] !== e[t]) return n = !1,
                                            !1
                                    }),
                                    n
                            },
                                e.update = function(t, e) {
                                    var n = this.cfg;
                                    return n[i[t]] = e,
                                        this._parseShadow(n, this.el),
                                        this
                                },
                                e._parseShadow = function(t, e) {
                                    var n = '<feDropShadow \n      dx="' + (t.dx || 0) + '" \n      dy="' + (t.dy || 0) + '" \n      stdDeviation="' + (t.blur ? t.blur / 10 : 0) + '"\n      flood-color="' + (t.color ? t.color: "#000") + '"\n      flood-opacity="' + (t.opacity ? t.opacity: 1) + '"\n      />';
                                    e.innerHTML = n
                                },
                                t
                        } ();
                    t.exports = o
                },
                function(t, e, n) {
                    var r = n(17),
                        i = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
                        a = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
                        o = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
                    function s(t) {
                        var e = t.match(o);
                        if (!e) return "";
                        var n = "";
                        return e.sort(function(t, e) {
                            return t = t.split(":"),
                                e = e.split(":"),
                            Number(t[0]) - Number(e[0])
                        }),
                            r.each(e,
                                function(t) {
                                    t = t.split(":"),
                                        n += '<stop offset="' + t[0] + '" stop-color="' + t[1] + '"></stop>'
                                }),
                            n
                    }
                    var u = function() {
                        function t(t) {
                            var e = null,
                                n = r.uniqueId("gradient_");
                            return "l" === t.toLowerCase()[0] ?
                                function(t, e) {
                                    var n, a, o = i.exec(t),
                                        u = r.mod(r.toRadian(parseFloat(o[1])), 2 * Math.PI),
                                        c = o[2];
                                    u >= 0 && u < .5 * Math.PI ? (n = {
                                        x: 0,
                                        y: 0
                                    },
                                        a = {
                                            x: 1,
                                            y: 1
                                        }) : .5 * Math.PI <= u && u < Math.PI ? (n = {
                                        x: 1,
                                        y: 0
                                    },
                                        a = {
                                            x: 0,
                                            y: 1
                                        }) : Math.PI <= u && u < 1.5 * Math.PI ? (n = {
                                        x: 1,
                                        y: 1
                                    },
                                        a = {
                                            x: 0,
                                            y: 0
                                        }) : (n = {
                                        x: 0,
                                        y: 1
                                    },
                                        a = {
                                            x: 1,
                                            y: 0
                                        });
                                    var h = Math.tan(u),
                                        f = h * h,
                                        l = (a.x - n.x + h * (a.y - n.y)) / (f + 1) + n.x,
                                        p = h * (a.x - n.x + h * (a.y - n.y)) / (f + 1) + n.y;
                                    e.setAttribute("x1", n.x),
                                        e.setAttribute("y1", n.y),
                                        e.setAttribute("x2", l),
                                        e.setAttribute("y2", p),
                                        e.innerHTML = s(c)
                                } (t, e = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")) : function(t, e) {
                                    var n = a.exec(t),
                                        r = parseFloat(n[1]),
                                        i = parseFloat(n[2]),
                                        o = parseFloat(n[3]),
                                        u = n[4];
                                    e.setAttribute("cx", r),
                                        e.setAttribute("cy", i),
                                        e.setAttribute("r", o),
                                        e.innerHTML = s(u)
                                } (t, e = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")),
                                e.setAttribute("id", n),
                                this.el = e,
                                this.id = n,
                                this.cfg = t,
                                this
                        }
                        return t.prototype.match = function(t, e) {
                            return this.cfg === e
                        },
                            t
                    } ();
                    t.exports = u
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(499),
                        a = n(498),
                        o = n(497),
                        s = n(496),
                        u = n(495),
                        c = function() {
                            function t(t) {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "defs"),
                                    n = r.uniqueId("defs_");
                                e.id = n,
                                    t.appendChild(e),
                                    this.children = [],
                                    this.defaultArrow = {},
                                    this.el = e,
                                    this.canvas = t
                            }
                            var e = t.prototype;
                            return e.find = function(t, e) {
                                for (var n = this.children,
                                         r = null,
                                         i = 0; i < n.length; i++) if (n[i].match(t, e)) {
                                    r = n[i].id;
                                    break
                                }
                                return r
                            },
                                e.findById = function(t) {
                                    for (var e = this.children,
                                             n = null,
                                             r = 0; r < e.length; r++) if (e[r].id === t) {
                                        n = e[r];
                                        break
                                    }
                                    return n
                                },
                                e.add = function(t) {
                                    this.children.push(t),
                                        t.canvas = this.canvas,
                                        t.parent = this
                                },
                                e.getDefaultArrow = function(t, e) {
                                    var n = t.stroke || t.strokeStyle;
                                    if (this.defaultArrow[n]) return this.defaultArrow[n].id;
                                    var r = new o(t, e);
                                    return this.defaultArrow[n] = r,
                                        this.el.appendChild(r.el),
                                        r.id
                                },
                                e.addGradient = function(t) {
                                    var e = new i(t);
                                    return this.el.appendChild(e.el),
                                        this.add(e),
                                        e.id
                                },
                                e.addArrow = function(t, e) {
                                    var n = new o(t, e);
                                    return this.el.appendChild(n.el),
                                        n.id
                                },
                                e.addShadow = function(t) {
                                    var e = new a(t);
                                    return this.el.appendChild(e.el),
                                        this.add(e),
                                        e.id
                                },
                                e.addPattern = function(t) {
                                    var e = new u(t);
                                    return this.el.appendChild(e.el),
                                        this.add(e),
                                        e.id
                                },
                                e.addClip = function(t) {
                                    var e = new s(t);
                                    return this.el.appendChild(e.el),
                                        this.add(e),
                                        e.id
                                },
                                t
                        } ();
                    t.exports = c
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(356).parseRadius,
                        a = n(374),
                        o = n(500),
                        s = {
                            rect: "path",
                            circle: "circle",
                            line: "line",
                            path: "path",
                            marker: "path",
                            text: "text",
                            polygon: "polygon",
                            image: "image",
                            ellipse: "ellipse",
                            dom: "foreignObject",
                            fan: "path",
                            group: "g"
                        },
                        u = {
                            opacity: "opacity",
                            fillStyle: "fill",
                            strokeOpacity: "stroke-opacity",
                            fillOpacity: "fill-opacity",
                            strokeStyle: "stroke",
                            x: "x",
                            y: "y",
                            r: "r",
                            width: "width",
                            height: "height",
                            x1: "x1",
                            x2: "x2",
                            y1: "y1",
                            y2: "y2",
                            lineCap: "stroke-linecap",
                            lineJoin: "stroke-linejoin",
                            lineWidth: "stroke-width",
                            lineDash: "stroke-dasharray",
                            lineDashOffset: "stroke-dashoffset",
                            miterLimit: "stroke-miterlimit",
                            font: "font",
                            fontSize: "font-size",
                            fontStyle: "font-style",
                            fontVariant: "font-variant",
                            fontWeight: "font-weight",
                            fontFamily: "font-family",
                            startArrow: "marker-start",
                            endArrow: "marker-end",
                            path: "d",
                            class: "class",
                            id: "id",
                            style: "style",
                            preserveAspectRatio: "preserveAspectRatio"
                        },
                        c = {
                            top: "before-edge",
                            middle: "central",
                            bottom: "after-edge",
                            alphabetic: "baseline",
                            hanging: "hanging"
                        },
                        h = {
                            left: "left",
                            start: "left",
                            center: "middle",
                            right: "end",
                            end: "end"
                        },
                        f = function() {
                            function t(t) {
                                if (!t) return null;
                                var e = r.uniqueId("canvas_"),
                                    n = r.createDom('<svg id="' + e + '"></svg>');
                                return t.appendChild(n),
                                    this.type = "svg",
                                    this.canvas = n,
                                    this.context = new o(n),
                                    this.toDraw = !1,
                                    this
                            }
                            var e = t.prototype;
                            return e.draw = function(t) {
                                var e = this;
                                e.animateHandler ? e.toDraw = !0 : function n() {
                                    e.animateHandler = r.requestAnimationFrame(function() {
                                        e.animateHandler = void 0,
                                        e.toDraw && n()
                                    });
                                    try {
                                        e._drawChildren(t)
                                    } catch(t) {
                                        console.warn("error in draw canvas, detail as:"),
                                            console.warn(t),
                                            e.toDraw = !1
                                    }
                                    e.toDraw = !1
                                } ()
                            },
                                e.drawSync = function(t) {
                                    this._drawChildren(t)
                                },
                                e._drawGroup = function(t, e) {
                                    var n = t._cfg;
                                    n.removed || n.destroyed || (n.tobeRemoved && (r.each(n.tobeRemoved,
                                        function(t) {
                                            t.parentNode && t.parentNode.removeChild(t)
                                        }), n.tobeRemoved = []), this._drawShape(t, e), n.children && n.children.length > 0 && this._drawChildren(t))
                                },
                                e._drawChildren = function(t) {
                                    var e, n = t._cfg.children;
                                    if (n) for (var r = 0; r < n.length; r++)(e = n[r]).isGroup ? this._drawGroup(e, r) : this._drawShape(e, r)
                                },
                                e._drawShape = function(t, e) {
                                    var n = t._attrs,
                                        r = t._cfg,
                                        i = r.el;
                                    r.removed || r.destroyed ? i && i.parentNode.removeChild(r.el) : (!i && r.parent && (this._createDom(t, e), this._updateShape(t)), i = r.el, !1 !== r.visible ? (r.visible && i.hasAttribute("visibility") && i.removeAttribute("visibility"), r.hasUpdate && this._updateShape(t), n.clip && n.clip._cfg.hasUpdate && this._updateShape(n.clip)) : i.setAttribute("visibility", "hidden"))
                                },
                                e._updateShape = function(t) {
                                    var e = t._attrs,
                                        n = t._cfg.attrs;
                                    if (n) if (t._cfg.el || this._createDom(t), "clip" in e && this._setClip(t, e.clip), ("shadowOffsetX" in e || "shadowOffsetY" in e || "shadowBlur" in e || "shadowColor" in e) && this._setShadow(t), "text" !== t.type) {
                                        for (var i in "fan" === t.type && this._updateFan(t), "marker" === t.type && t._cfg.el.setAttribute("d", this._assembleMarker(e)), "rect" === t.type && t._cfg.el.setAttribute("d", this._assembleRect(e)), e) e[i] !== n[i] && this._setAttribute(t, i, e[i]);
                                        t._cfg.attrs = r.deepMix({},
                                            t._attrs),
                                            t._cfg.hasUpdate = !1
                                    } else this._updateText(t)
                                },
                                e._setAttribute = function(t, e, n) {
                                    var i = t.type,
                                        a = t._attrs,
                                        o = t._cfg.el,
                                        s = this.context;
                                    if ("marker" !== i && "rect" !== i || !~ ["x", "y", "radius", "r"].indexOf(e)) if (~ ["circle", "ellipse"].indexOf(i) && ~ ["x", "y"].indexOf(e)) o.setAttribute("c" + e, parseInt(n, 10));
                                    else {
                                        if ("polygon" === i && "points" === e) return n && 0 !== n.length || (n = ""),
                                        r.isArray(n) && (n = (n = n.map(function(t) {
                                            return t[0] + "," + t[1]
                                        })).join(" ")),
                                            void o.setAttribute("points", n);
                                        if ("path" === e && r.isArray(n)) o.setAttribute("d", this._formatPath(n));
                                        else if ("img" !== e) {
                                            if ("transform" === e) return n ? void this._setTransform(t) : void o.removeAttribute("transform");
                                            if ("rotate" === e) return n ? void this._setTransform(t) : void o.removeAttribute("transform");
                                            if ("matrix" !== e) if ("fillStyle" !== e && "strokeStyle" !== e) {
                                                if ("clip" !== e) if (~e.indexOf("Arrow")) if (e = u[e], n) {
                                                    var c = null;
                                                    c = "boolean" == typeof n ? s.getDefaultArrow(a, e) : s.addArrow(a, e),
                                                        o.setAttribute(e, "url(#" + c + ")"),
                                                        t._cfg[e] = c
                                                } else t._cfg[e] = null,
                                                    o.removeAttribute(e);
                                                else "html" === e && ("string" == typeof n ? o.innerHTML = n: (o.innerHTML = "", o.appendChild(n))),
                                                    u[e] && o.setAttribute(u[e], n)
                                            } else this._setColor(t, e, n);
                                            else this._setTransform(t)
                                        } else this._setImage(t, n)
                                    }
                                },
                                e._createDom = function(t, e) {
                                    var n = s[t.type],
                                        r = t._attrs,
                                        i = t._cfg.parent,
                                        a = i._cfg.el;
                                    if (!n) throw new Error("the type" + t.type + "is not supported by svg");
                                    var o = document.createElementNS("http://www.w3.org/2000/svg", n);
                                    if (t._cfg.el = o, i) if (void 0 === e) a.appendChild(o);
                                    else {
                                        var u = i._cfg.el.childNodes;
                                        "svg" === a.tagName && (e += 1),
                                            u.length <= e ? a.appendChild(o) : a.insertBefore(o, u[e])
                                    }
                                    return t._cfg.attrs = {},
                                        "text" === t.type ? (o.setAttribute("paint-order", "stroke"), o.setAttribute("style", "stroke-linecap:butt; stroke-linejoin:miter;")) : (r.stroke || r.strokeStyle || o.setAttribute("stroke", "none"), r.fill || r.fillStyle || o.setAttribute("fill", "none")),
                                        o
                                },
                                e._assembleMarker = function(t) {
                                    var e = t.r;
                                    if (void 0 === t.r && (e = t.radius), isNaN(Number(t.x)) || isNaN(Number(t.y)) || isNaN(Number(e))) return "";
                                    var n = "";
                                    return n = "function" == typeof t.symbol ? t.symbol(t.x, t.y, e) : a.Symbols[t.symbol || "circle"](t.x, t.y, e),
                                    r.isArray(n) && (n = n.map(function(t) {
                                        return t.join(" ")
                                    }).join("")),
                                        n
                                },
                                e._assembleRect = function(t) {
                                    var e = t.x,
                                        n = t.y,
                                        a = t.width,
                                        o = t.height,
                                        s = t.radius;
                                    if (!s) return "M " + e + "," + n + " l " + a + ",0 l 0," + o + " l" + -a + " 0 z";
                                    var u = i(s);
                                    return r.isArray(s) ? 1 === s.length ? u.r1 = u.r2 = u.r3 = u.r4 = s[0] : 2 === s.length ? (u.r1 = u.r3 = s[0], u.r2 = u.r4 = s[1]) : 3 === s.length ? (u.r1 = s[0], u.r2 = u.r4 = s[1], u.r3 = s[2]) : (u.r1 = s[0], u.r2 = s[1], u.r3 = s[2], u.r4 = s[3]) : u.r1 = u.r2 = u.r3 = u.r4 = s,
                                        [["M " + (e + u.r1) + "," + n], ["l " + (a - u.r1 - u.r2) + ",0"], ["a " + u.r2 + "," + u.r2 + ",0,0,1," + u.r2 + "," + u.r2], ["l 0," + (o - u.r2 - u.r3)], ["a " + u.r3 + "," + u.r3 + ",0,0,1," + -u.r3 + "," + u.r3], ["l " + (u.r3 + u.r4 - a) + ",0"], ["a " + u.r4 + "," + u.r4 + ",0,0,1," + -u.r4 + "," + -u.r4], ["l 0," + (u.r4 + u.r1 - o)], ["a " + u.r1 + "," + u.r1 + ",0,0,1," + u.r1 + "," + -u.r1], ["z"]].join(" ")
                                },
                                e._formatPath = function(t) {
                                    return~ (t = t.map(function(t) {
                                        return t.join(" ")
                                    }).join("")).indexOf("NaN") ? "": t
                                },
                                e._setTransform = function(t) {
                                    for (var e = t._attrs.matrix,
                                             n = t._cfg.el,
                                             r = [], i = 0; i < 9; i += 3) r.push(e[i] + "," + e[i + 1]); - 1 === (r = r.join(",")).indexOf("NaN") ? n.setAttribute("transform", "matrix(" + r + ")") : console.warn("invalid matrix:", e)
                                },
                                e._setImage = function(t, e) {
                                    var n = t._attrs,
                                        i = t._cfg.el;
                                    if (r.isString(e)) i.setAttribute("href", e);
                                    else if (e instanceof Image) n.width || (i.setAttribute("width", e.width), t._attrs.width = e.width),
                                    n.height || (i.setAttribute("height", e.height), t._attrs.height = e.height),
                                        i.setAttribute("href", e.src);
                                    else if (e instanceof HTMLElement && r.isString(e.nodeName) && "CANVAS" === e.nodeName.toUpperCase()) i.setAttribute("href", e.toDataURL());
                                    else if (e instanceof ImageData) {
                                        var a = document.createElement("canvas");
                                        a.setAttribute("width", e.width),
                                            a.setAttribute("height", e.height),
                                            a.getContext("2d").putImageData(e, 0, 0),
                                        n.width || (i.setAttribute("width", e.width), t._attrs.width = e.width),
                                        n.height || (i.setAttribute("height", e.height), t._attrs.height = e.height),
                                            i.setAttribute("href", a.toDataURL())
                                    }
                                },
                                e._updateFan = function(t) {
                                    function e(t, e, n) {
                                        return {
                                            x: e * Math.cos(t) + n.x,
                                            y: e * Math.sin(t) + n.y
                                        }
                                    }
                                    var n = t._attrs,
                                        i = t._cfg,
                                        a = {
                                            x: n.x,
                                            y: n.y
                                        },
                                        o = [],
                                        s = n.startAngle,
                                        u = n.endAngle;
                                    r.isNumberEqual(u - s, 2 * Math.PI) && (u -= 1e-5);
                                    var c = e(s, n.re, a),
                                        h = e(u, n.re, a),
                                        f = u > s ? 1 : 0,
                                        l = Math.abs(u - s) > Math.PI ? 1 : 0,
                                        p = n.rs,
                                        d = n.re,
                                        g = e(s, n.rs, a),
                                        v = e(u, n.rs, a);
                                    n.rs > 0 ? (o.push("M " + h.x + "," + h.y), o.push("L " + v.x + "," + v.y), o.push("A " + p + "," + p + ",0," + l + "," + (1 === f ? 0 : 1) + "," + g.x + "," + g.y), o.push("L " + c.x + " " + c.y)) : (o.push("M " + a.x + "," + a.y), o.push("L " + c.x + "," + c.y)),
                                        o.push("A " + d + "," + d + ",0," + l + "," + f + "," + h.x + "," + h.y),
                                        n.rs > 0 ? o.push("L " + v.x + "," + v.y) : o.push("Z"),
                                        i.el.setAttribute("d", o.join(" "))
                                },
                                e._updateText = function(t) {
                                    var e = t._attrs,
                                        n = t._cfg.attrs,
                                        r = t._cfg.el;
                                    for (var i in this._setFont(t), e) if (e[i] !== n[i]) {
                                        if ("text" === i) {
                                            this._setText(t, "" + e[i]);
                                            continue
                                        }
                                        if ("fillStyle" === i || "strokeStyle" === i) {
                                            this._setColor(t, i, e[i]);
                                            continue
                                        }
                                        if ("matrix" === i) {
                                            this._setTransform(t);
                                            continue
                                        }
                                        u[i] && r.setAttribute(u[i], e[i])
                                    }
                                    t._cfg.attrs = Object.assign({},
                                        t._attrs),
                                        t._cfg.hasUpdate = !1
                                },
                                e._setFont = function(t) {
                                    var e = t.get("el"),
                                        n = t._attrs,
                                        r = n.fontSize;
                                    e.setAttribute("alignment-baseline", c[n.textBaseline] || "baseline"),
                                        e.setAttribute("text-anchor", h[n.textAlign] || "left"),
                                    r && +r < 12 && (n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1], t.transform([["t", -n.x, -n.y], ["s", +r / 12, +r / 12], ["t", n.x, n.y]]))
                                },
                                e._setText = function(t, e) {
                                    var n = t._cfg.el,
                                        i = t._attrs.textBaseline || "bottom";
                                    if (e) if (~e.indexOf("\n")) {
                                        var a = t._attrs.x,
                                            o = e.split("\n"),
                                            s = o.length - 1,
                                            u = "";
                                        r.each(o,
                                            function(t, e) {
                                                0 === e ? "alphabetic" === i ? u += '<tspan x="' + a + '" dy="' + -s + 'em">' + t + "</tspan>": "top" === i ? u += '<tspan x="' + a + '" dy="0.9em">' + t + "</tspan>": "middle" === i ? u += '<tspan x="' + a + '" dy="' + -(s - 1) / 2 + 'em">' + t + "</tspan>": "bottom" === i ? u += '<tspan x="' + a + '" dy="-' + (s + .3) + 'em">' + t + "</tspan>": "hanging" === i && (u += '<tspan x="' + a + '" dy="' + ( - (s - 1) - .3) + 'em">' + t + "</tspan>") : u += '<tspan x="' + a + '" dy="1em">' + t + "</tspan>"
                                            }),
                                            n.innerHTML = u
                                    } else n.innerHTML = e;
                                    else n.innerHTML = ""
                                },
                                e._setClip = function(t, e) {
                                    var n = t._cfg.el;
                                    if (e) if (n.hasAttribute("clip-path")) e._cfg.hasUpdate && this._updateShape(e);
                                    else {
                                        this._createDom(e),
                                            this._updateShape(e);
                                        var r = this.context.addClip(e);
                                        n.setAttribute("clip-path", "url(#" + r + ")")
                                    } else n.removeAttribute("clip-path")
                                },
                                e._setColor = function(t, e, n) {
                                    var r = t._cfg.el,
                                        i = this.context;
                                    if (n) if (n = n.trim(), /^[r,R,L,l]{1}[\s]*\(/.test(n)) {
                                        var a = i.find("gradient", n);
                                        a || (a = i.addGradient(n)),
                                            r.setAttribute(u[e], "url(#" + a + ")")
                                    } else if (/^[p,P]{1}[\s]*\(/.test(n)) {
                                        var o = i.find("pattern", n);
                                        o || (o = i.addPattern(n)),
                                            r.setAttribute(u[e], "url(#" + o + ")")
                                    } else r.setAttribute(u[e], n);
                                    else r.setAttribute(u[e], "none")
                                },
                                e._setShadow = function(t) {
                                    var e = t._cfg.el,
                                        n = t._attrs,
                                        r = {
                                            dx: n.shadowOffsetX,
                                            dy: n.shadowOffsetY,
                                            blur: n.shadowBlur,
                                            color: n.shadowColor
                                        };
                                    if (r.dx || r.dy || r.blur || r.color) {
                                        var i = this.context.find("filter", r);
                                        i || (i = this.context.addShadow(r, this)),
                                            e.setAttribute("filter", "url(#" + i + ")")
                                    } else e.removeAttribute("filter")
                                },
                                t
                        } ();
                    t.exports = f
                },
                function(t, e, n) {
                    t.exports = {
                        painter: n(501),
                        getShape: n(494)
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
                        a = /[^\s\,]+/gi,
                        o = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
                        s = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
                        u = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
                        c = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
                    function h(t, e) {
                        var n = t.match(c);
                        r.each(n,
                            function(t) {
                                t = t.split(":"),
                                    e.addColorStop(t[0], t[1])
                            })
                    }
                    t.exports = {
                        parsePath: function(t) {
                            return t = t || [],
                                r.isArray(t) ? t: r.isString(t) ? (t = t.match(i), r.each(t,
                                    function(e, n) {
                                        if ((e = e.match(a))[0].length > 1) {
                                            var i = e[0].charAt(0);
                                            e.splice(1, 0, e[0].substr(1)),
                                                e[0] = i
                                        }
                                        r.each(e,
                                            function(t, n) {
                                                isNaN(t) || (e[n] = +t)
                                            }),
                                            t[n] = e
                                    }), t) : void 0
                        },
                        parseStyle: function(t, e, n) {
                            if (r.isString(t)) {
                                if ("(" === t[1] || "(" === t[2]) {
                                    if ("l" === t[0]) return function(t, e, n) {
                                        var i, a, s = o.exec(t),
                                            u = r.mod(r.toRadian(parseFloat(s[1])), 2 * Math.PI),
                                            c = s[2],
                                            f = e.getBBox();
                                        u >= 0 && u < .5 * Math.PI ? (i = {
                                            x: f.minX,
                                            y: f.minY
                                        },
                                            a = {
                                                x: f.maxX,
                                                y: f.maxY
                                            }) : .5 * Math.PI <= u && u < Math.PI ? (i = {
                                            x: f.maxX,
                                            y: f.minY
                                        },
                                            a = {
                                                x: f.minX,
                                                y: f.maxY
                                            }) : Math.PI <= u && u < 1.5 * Math.PI ? (i = {
                                            x: f.maxX,
                                            y: f.maxY
                                        },
                                            a = {
                                                x: f.minX,
                                                y: f.minY
                                            }) : (i = {
                                            x: f.minX,
                                            y: f.maxY
                                        },
                                            a = {
                                                x: f.maxX,
                                                y: f.minY
                                            });
                                        var l = Math.tan(u),
                                            p = l * l,
                                            d = (a.x - i.x + l * (a.y - i.y)) / (p + 1) + i.x,
                                            g = l * (a.x - i.x + l * (a.y - i.y)) / (p + 1) + i.y,
                                            v = n.createLinearGradient(i.x, i.y, d, g);
                                        return h(c, v),
                                            v
                                    } (t, e, n);
                                    if ("r" === t[0]) return function(t, e, n) {
                                        var r = s.exec(t),
                                            i = parseFloat(r[1]),
                                            a = parseFloat(r[2]),
                                            o = parseFloat(r[3]),
                                            u = r[4];
                                        if (0 === o) {
                                            var f = u.match(c);
                                            return f[f.length - 1].split(":")[1]
                                        }
                                        var l = e.getBBox(),
                                            p = l.maxX - l.minX,
                                            d = l.maxY - l.minY,
                                            g = Math.sqrt(p * p + d * d) / 2,
                                            v = n.createRadialGradient(l.minX + p * i, l.minY + d * a, o * g, l.minX + p / 2, l.minY + d / 2, g);
                                        return h(u, v),
                                            v
                                    } (t, e, n);
                                    if ("p" === t[0]) return function(t, e, n) {
                                        if (e.get("patternSource") && e.get("patternSource") === t) return e.get("pattern");
                                        var r, i, a = u.exec(t),
                                            o = a[1],
                                            s = a[2];
                                        function c() {
                                            r = n.createPattern(i, o),
                                                e.setSilent("pattern", r),
                                                e.setSilent("patternSource", t)
                                        }
                                        switch (o) {
                                            case "a":
                                                o = "repeat";
                                                break;
                                            case "x":
                                                o = "repeat-x";
                                                break;
                                            case "y":
                                                o = "repeat-y";
                                                break;
                                            case "n":
                                                o = "no-repeat";
                                                break;
                                            default:
                                                o = "no-repeat"
                                        }
                                        return i = new Image,
                                        s.match(/^data:/i) || (i.crossOrigin = "Anonymous"),
                                            i.src = s,
                                            i.complete ? c() : (i.onload = c, i.src = i.src),
                                            r
                                    } (t, e, n)
                                }
                                return t
                            }
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(503),
                        a = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "lineDashOffset"],
                        o = function() {
                            function t(t) {
                                if (!t) return null;
                                var e = r.uniqueId("canvas_"),
                                    n = r.createDom('<canvas id="' + e + '"></canvas>');
                                return t.appendChild(n),
                                    this.type = "canvas",
                                    this.canvas = n,
                                    this.context = n.getContext("2d"),
                                    this.toDraw = !1,
                                    this
                            }
                            var e = t.prototype;
                            return e.beforeDraw = function() {
                                var t = this.canvas;
                                this.context && this.context.clearRect(0, 0, t.width, t.height)
                            },
                                e.draw = function(t) {
                                    var e = this;
                                    e.animateHandler ? e.toDraw = !0 : function n() {
                                        e.animateHandler = r.requestAnimationFrame(function() {
                                            e.animateHandler = void 0,
                                            e.toDraw && n()
                                        }),
                                            e.beforeDraw();
                                        try {
                                            e._drawGroup(t)
                                        } catch(t) {
                                            console.warn("error in draw canvas, detail as:"),
                                                console.warn(t),
                                                e.toDraw = !1
                                        }
                                        e.toDraw = !1
                                    } ()
                                },
                                e.drawSync = function(t) {
                                    this.beforeDraw(),
                                        this._drawGroup(t)
                                },
                                e._drawGroup = function(t) {
                                    if (!t._cfg.removed && !t._cfg.destroyed && t._cfg.visible) {
                                        var e = t._cfg.children,
                                            n = null;
                                        this.setContext(t);
                                        for (var r = 0; r < e.length; r++) n = e[r],
                                            e[r].isGroup ? this._drawGroup(n) : this._drawShape(n);
                                        this.restoreContext(t)
                                    }
                                },
                                e._drawShape = function(t) {
                                    t._cfg.removed || t._cfg.destroyed || !t._cfg.visible || (this.setContext(t), t.drawInner(this.context), this.restoreContext(t), t._cfg.attrs = t._attrs, t._cfg.hasUpdate = !1)
                                },
                                e.setContext = function(t) {
                                    var e = this.context,
                                        n = t._attrs.clip;
                                    e.save(),
                                    n && (n.resetTransform(e), n.createPath(e), e.clip()),
                                        this.resetContext(t),
                                        t.resetTransform(e)
                                },
                                e.restoreContext = function() {
                                    this.context.restore()
                                },
                                e.resetContext = function(t) {
                                    var e = this.context,
                                        n = t._attrs;
                                    if (!t.isGroup) for (var o in n) if (a.indexOf(o) > -1) {
                                        var s = n[o];
                                        "fillStyle" === o && (s = i.parseStyle(s, t, e)),
                                        "strokeStyle" === o && (s = i.parseStyle(s, t, e)),
                                            "lineDash" === o && e.setLineDash ? r.isArray(s) ? e.setLineDash(s) : r.isString(s) && e.setLineDash(s.split(" ")) : e[o] = s
                                    }
                                },
                                t
                        } ();
                    t.exports = o
                },
                function(t, e, n) {
                    t.exports = {
                        painter: n(504)
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        canvas: n(505),
                        svg: n(502)
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(373),
                        a = n(15),
                        o = n(28),
                        s = n(137),
                        u = s.interpolate,
                        c = s.interpolateArray,
                        h = function(t) {
                            this._animators = [],
                                this._current = 0,
                                this._timer = null,
                                this.canvas = t
                        };
                    function f(t, e, n) {
                        var a, s = e.startTime;
                        if (n < s + e.delay || e.isPaused) return ! 1;
                        var h = e.duration,
                            f = e.easing;
                        if (n = n - s - e.delay, e.toAttrs.repeat) a = n % h / h,
                            a = o[f](a);
                        else {
                            if (! ((a = n / h) < 1)) return t.attr(e.toAttrs),
                            e.toMatrix && t.setMatrix(e.toMatrix),
                                !0;
                            a = o[f](a)
                        }
                        return function(t, e, n) {
                            var a = {},
                                o = e.toAttrs,
                                s = e.fromAttrs,
                                h = e.toMatrix;
                            if (!t.get("destroyed")) {
                                var f;
                                for (var l in o) if (!r.isEqual(s[l], o[l])) if ("path" === l) {
                                    var p = o[l],
                                        d = s[l];
                                    p.length > d.length ? (p = i.parsePathString(o[l]), d = i.parsePathString(s[l]), d = i.fillPathByDiff(d, p), d = i.formatPath(d, p), e.fromAttrs.path = d, e.toAttrs.path = p) : e.pathFormatted || (p = i.parsePathString(o[l]), d = i.parsePathString(s[l]), d = i.formatPath(d, p), e.fromAttrs.path = d, e.toAttrs.path = p, e.pathFormatted = !0),
                                        a[l] = [];
                                    for (var g = 0; g < p.length; g++) {
                                        for (var v = p[g], m = d[g], x = [], y = 0; y < v.length; y++) r.isNumber(v[y]) && m && r.isNumber(m[y]) ? (f = u(m[y], v[y]), x.push(f(n))) : x.push(v[y]);
                                        a[l].push(x)
                                    }
                                } else f = u(s[l], o[l]),
                                    a[l] = f(n);
                                if (h) {
                                    var b = c(e.fromMatrix, h)(n);
                                    t.setMatrix(b)
                                }
                                t.attr(a)
                            }
                        } (t, e, a),
                            !1
                    }
                    r.augment(h, {
                        initTimer: function() {
                            var t, e, n, r = this,
                                i = this;
                            i._timer = a.timer(function(a) {
                                if (i._current = a, r._animators.length > 0) {
                                    for (var o = r._animators.length - 1; o >= 0; o--) if ((t = r._animators[o]).get("destroyed")) i.removeAnimator(o);
                                    else {
                                        if (!t.get("pause").isPaused) for (var s = (e = t.get("animators")).length - 1; s >= 0; s--) n = e[s],
                                        f(t, n, a) && (e.splice(s, 1), !1, n.callback && n.callback());
                                        0 === e.length && i.removeAnimator(o)
                                    }
                                    r.canvas.draw()
                                }
                            })
                        },
                        addAnimator: function(t) {
                            this._animators.push(t)
                        },
                        removeAnimator: function(t) {
                            this._animators.splice(t, 1)
                        },
                        isAnimating: function() {
                            return !! this._animators.length
                        },
                        stop: function() {
                            this._timer && this._timer.stop()
                        },
                        stopAllAnimations: function() {
                            this._animators.forEach(function(t) {
                                t.stopAnimate()
                            }),
                                this._animators = [],
                                this.canvas.draw()
                        },
                        getTime: function() {
                            return this._current
                        }
                    }),
                        t.exports = h
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(376),
                        a = {
                            arc: n(365),
                            ellipse: n(403),
                            line: n(366)
                        },
                        o = r.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");
                    function s(t, e, n) {
                        return n.createPath(o),
                            o.isPointInPath(t, e)
                    }
                    var u = {
                        arc: function(t, e) {
                            var n = this._attrs,
                                r = n.x,
                                a = n.y,
                                o = n.r,
                                s = n.startAngle,
                                u = n.endAngle,
                                c = n.clockwise,
                                h = this.getHitLineWidth();
                            return !! this.hasStroke() && i.arcline(r, a, o, s, u, c, h, t, e)
                        },
                        circle: function(t, e) {
                            var n = this._attrs,
                                r = n.x,
                                a = n.y,
                                o = n.r,
                                s = this.getHitLineWidth(),
                                u = this.hasFill(),
                                c = this.hasStroke();
                            return u && c ? i.circle(r, a, o, t, e) || i.arcline(r, a, o, 0, 2 * Math.PI, !1, s, t, e) : u ? i.circle(r, a, o, t, e) : !!c && i.arcline(r, a, o, 0, 2 * Math.PI, !1, s, t, e)
                        },
                        dom: function(t, e) {
                            if (!this._cfg.el) return ! 1;
                            var n = this._cfg.el.getBBox();
                            return i.box(n.x, n.x + n.width, n.y, n.y + n.height, t, e)
                        },
                        ellipse: function(t, e) {
                            var n = this._attrs,
                                a = this.hasFill(),
                                o = this.hasStroke(),
                                s = n.x,
                                u = n.y,
                                c = n.rx,
                                h = n.ry,
                                f = this.getHitLineWidth(),
                                l = c > h ? c: h,
                                p = c > h ? 1 : c / h,
                                d = c > h ? h / c: 1,
                                g = [t, e, 1],
                                v = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                            r.mat3.scale(v, v, [p, d]),
                                r.mat3.translate(v, v, [s, u]);
                            var m = r.mat3.invert([], v);
                            return r.vec3.transformMat3(g, g, m),
                                a && o ? i.circle(0, 0, l, g[0], g[1]) || i.arcline(0, 0, l, 0, 2 * Math.PI, !1, f, g[0], g[1]) : a ? i.circle(0, 0, l, g[0], g[1]) : !!o && i.arcline(0, 0, l, 0, 2 * Math.PI, !1, f, g[0], g[1])
                        },
                        fan: function(t, e) {
                            var n = this,
                                o = n.hasFill(),
                                s = n.hasStroke(),
                                u = n._attrs,
                                c = u.x,
                                h = u.y,
                                f = u.rs,
                                l = u.re,
                                p = u.startAngle,
                                d = u.endAngle,
                                g = u.clockwise,
                                v = [t - c, e - h],
                                m = r.vec2.angleTo([1, 0], v);
                            function x() {
                                var t = a.arc.nearAngle(m, p, d, g);
                                if (r.isNumberEqual(m, t)) {
                                    var e = r.vec2.squaredLength(v);
                                    if (f * f <= e && e <= l * l) return ! 0
                                }
                                return ! 1
                            }
                            function y() {
                                var r = n.getHitLineWidth(),
                                    a = {
                                        x: Math.cos(p) * f + c,
                                        y: Math.sin(p) * f + h
                                    },
                                    o = {
                                        x: Math.cos(p) * l + c,
                                        y: Math.sin(p) * l + h
                                    },
                                    s = {
                                        x: Math.cos(d) * f + c,
                                        y: Math.sin(d) * f + h
                                    },
                                    u = {
                                        x: Math.cos(d) * l + c,
                                        y: Math.sin(d) * l + h
                                    };
                                return !! (i.line(a.x, a.y, o.x, o.y, r, t, e) || i.line(s.x, s.y, u.x, u.y, r, t, e) || i.arcline(c, h, f, p, d, g, r, t, e) || i.arcline(c, h, l, p, d, g, r, t, e))
                            }
                            return o && s ? x() || y() : o ? x() : !!s && y()
                        },
                        image: function(t, e) {
                            var n = this._attrs;
                            if (this.get("toDraw") || !n.img) return ! 1;
                            this._cfg.attrs && this._cfg.attrs.img === n.img || this._setAttrImg();
                            var r = n.x,
                                a = n.y,
                                o = n.width,
                                s = n.height;
                            return i.rect(r, a, o, s, t, e)
                        },
                        line: function(t, e) {
                            var n = this._attrs,
                                r = n.x1,
                                a = n.y1,
                                o = n.x2,
                                s = n.y2,
                                u = this.getHitLineWidth();
                            return !! this.hasStroke() && i.line(r, a, o, s, u, t, e)
                        },
                        path: function(t, e) {
                            var n = this,
                                i = n.get("segments"),
                                a = n.hasFill(),
                                o = n.hasStroke();
                            function u() {
                                if (!r.isEmpty(i)) {
                                    for (var a = n.getHitLineWidth(), o = 0, s = i.length; o < s; o++) if (i[o].isInside(t, e, a)) return ! 0;
                                    return ! 1
                                }
                            }
                            return a && o ? s(t, e, n) || u() : a ? s(t, e, n) : !!o && u()
                        },
                        marker: function(t, e) {
                            var n = this._attrs,
                                r = n.x,
                                a = n.y,
                                o = n.radius || n.r,
                                s = this.getHitLineWidth();
                            return i.circle(r, a, o + s / 2, t, e)
                        },
                        polygon: function(t, e) {
                            var n = this,
                                r = n.hasFill(),
                                a = n.hasStroke();
                            function o() {
                                var r = n._attrs.points;
                                if (r.length < 2) return ! 1;
                                var a = n.getHitLineWidth(),
                                    o = r.slice(0);
                                return r.length >= 3 && o.push(r[0]),
                                    i.polyline(o, a, t, e)
                            }
                            return r && a ? s(t, e, n) || o() : r ? s(t, e, n) : !!a && o()
                        },
                        polyline: function(t, e) {
                            var n = this._attrs;
                            if (this.hasStroke()) {
                                var r = n.points;
                                if (r.length < 2) return ! 1;
                                var a = n.lineWidth;
                                return i.polyline(r, a, t, e)
                            }
                            return ! 1
                        },
                        rect: function(t, e) {
                            var n = this,
                                r = n.hasFill(),
                                a = n.hasStroke();
                            function o() {
                                var r = n._attrs,
                                    a = r.x,
                                    o = r.y,
                                    s = r.width,
                                    u = r.height,
                                    c = r.radius,
                                    h = n.getHitLineWidth();
                                if (0 === c) {
                                    var f = h / 2;
                                    return i.line(a - f, o, a + s + f, o, h, t, e) || i.line(a + s, o - f, a + s, o + u + f, h, t, e) || i.line(a + s + f, o + u, a - f, o + u, h, t, e) || i.line(a, o + u + f, a, o - f, h, t, e)
                                }
                                return i.line(a + c, o, a + s - c, o, h, t, e) || i.line(a + s, o + c, a + s, o + u - c, h, t, e) || i.line(a + s - c, o + u, a + c, o + u, h, t, e) || i.line(a, o + u - c, a, o + c, h, t, e) || i.arcline(a + s - c, o + c, c, 1.5 * Math.PI, 2 * Math.PI, !1, h, t, e) || i.arcline(a + s - c, o + u - c, c, 0, .5 * Math.PI, !1, h, t, e) || i.arcline(a + c, o + u - c, c, .5 * Math.PI, Math.PI, !1, h, t, e) || i.arcline(a + c, o + c, c, Math.PI, 1.5 * Math.PI, !1, h, t, e)
                            }
                            return r && a ? s(t, e, n) || o() : r ? s(t, e, n) : !!a && o()
                        },
                        text: function(t, e) {
                            var n = this.getBBox();
                            if (this.hasFill() || this.hasStroke()) return i.box(n.minX, n.maxX, n.minY, n.maxY, t, e)
                        }
                    };
                    t.exports = {
                        isPointInPath: function(t, e) {
                            var n = u[this.type];
                            return !! n && n.call(this, t, e)
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(37);
                    r.Arc = n(402),
                        r.Circle = n(401),
                        r.Dom = n(400),
                        r.Ellipse = n(399),
                        r.Fan = n(398),
                        r.Image = n(397),
                        r.Line = n(396),
                        r.Marker = n(374),
                        r.Path = n(395),
                        r.Polygon = n(394),
                        r.Polyline = n(393),
                        r.Rect = n(392),
                        r.Text = n(391),
                        t.exports = r
                },
                function(t, e, n) {
                    var r = n(17),
                        i = {
                            delay: "delay",
                            rotate: "rotate"
                        },
                        a = {
                            fill: "fill",
                            stroke: "stroke",
                            fillStyle: "fillStyle",
                            strokeStyle: "strokeStyle"
                        };
                    t.exports = {
                        animate: function(t, e, n, o, s) {
                            void 0 === s && (s = 0);
                            this.set("animating", !0);
                            var u = this.get("timeline");
                            u || (u = this.get("canvas").get("timeline"), this.setSilent("timeline", u));
                            var c = this.get("animators") || [];
                            u._timer || u.initTimer(),
                            r.isNumber(o) && (s = o, o = null),
                                r.isFunction(n) ? (o = n, n = "easeLinear") : n = n || "easeLinear";
                            var h = function(t, e) {
                                    var n = {
                                            matrix: null,
                                            attrs: {}
                                        },
                                        o = e._attrs;
                                    for (var s in t) if ("transform" === s) n.matrix = r.transform(e.getMatrix(), t[s]);
                                    else if ("rotate" === s) n.matrix = r.transform(e.getMatrix(), [["r", t[s]]]);
                                    else if ("matrix" === s) n.matrix = t[s];
                                    else {
                                        if (a[s] && /^[r,R,L,l]{1}[\s]*\(/.test(t[s])) continue;
                                        i[s] || o[s] === t[s] || (n.attrs[s] = t[s])
                                    }
                                    return n
                                } (t, this),
                                f = {
                                    fromAttrs: function(t, e) {
                                        var n = {},
                                            r = e._attrs;
                                        for (var i in t.attrs) n[i] = r[i];
                                        return n
                                    } (h, this),
                                    toAttrs: h.attrs,
                                    fromMatrix: r.clone(this.getMatrix()),
                                    toMatrix: h.matrix,
                                    duration: e,
                                    easing: n,
                                    callback: o,
                                    delay: s,
                                    startTime: u.getTime(),
                                    id: r.uniqueId()
                                };
                            c.length > 0 ? c = function(t, e) {
                                var n = e.delay,
                                    i = Object.prototype.hasOwnProperty;
                                return r.each(e.toAttrs,
                                    function(e, a) {
                                        r.each(t,
                                            function(t) {
                                                n < t.startTime + t.duration && i.call(t.toAttrs, a) && (delete t.toAttrs[a], delete t.fromAttrs[a])
                                            })
                                    }),
                                e.toMatrix && r.each(t,
                                    function(t) {
                                        n < t.startTime + t.duration && t.toMatrix && delete t.toMatrix
                                    }),
                                    t
                            } (c, f) : u.addAnimator(this),
                                c.push(f),
                                this.setSilent("animators", c),
                                this.setSilent("pause", {
                                    isPaused: !1
                                })
                        },
                        stopAnimate: function() {
                            var t = this,
                                e = this.get("animators");
                            r.each(e,
                                function(e) {
                                    t.attr(e.toAttrs),
                                    e.toMatrix && t.attr("matrix", e.toMatrix),
                                    e.callback && e.callback()
                                }),
                                this.setSilent("animating", !1),
                                this.setSilent("animators", [])
                        },
                        pauseAnimate: function() {
                            var t = this.get("timeline");
                            return this.setSilent("pause", {
                                isPaused: !0,
                                pauseTime: t.getTime()
                            }),
                                this
                        },
                        resumeAnimate: function() {
                            var t = this.get("timeline").getTime(),
                                e = this.get("animators"),
                                n = this.get("pause").pauseTime;
                            return r.each(e,
                                function(e) {
                                    e.startTime = e.startTime + (t - n),
                                        e._paused = !1,
                                        e._pauseTime = null
                                }),
                                this.setSilent("pause", {
                                    isPaused: !1
                                }),
                                this.setSilent("animators", e),
                                this
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17);
                    function i(t) {
                        return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7]
                    }
                    function a(t) {
                        return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7]
                    }
                    function o(t, e) {
                        i(e) || (a(e) ? (t[0] *= e[0], t[4] *= e[4]) : r.mat3.multiply(t, t, e))
                    }
                    t.exports = {
                        initTransform: function() {},
                        resetMatrix: function() {
                            this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1])
                        },
                        translate: function(t, e) {
                            var n = this._attrs.matrix;
                            return r.mat3.translate(n, n, [t, e]),
                                this.clearTotalMatrix(),
                                this.attr("matrix", n),
                                this
                        },
                        rotate: function(t) {
                            var e = this._attrs.matrix;
                            return r.mat3.rotate(e, e, t),
                                this.clearTotalMatrix(),
                                this.attr("matrix", e),
                                this
                        },
                        scale: function(t, e) {
                            var n = this._attrs.matrix;
                            return r.mat3.scale(n, n, [t, e]),
                                this.clearTotalMatrix(),
                                this.attr("matrix", n),
                                this
                        },
                        rotateAtStart: function(t) {
                            var e = this._attrs.x || this._cfg.attrs.x,
                                n = this._attrs.y || this._cfg.attrs.y;
                            return Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI),
                                this.transform([["t", -e, -n], ["r", t], ["t", e, n]])
                        },
                        move: function(t, e) {
                            var n = this.get("x") || 0,
                                r = this.get("y") || 0;
                            return this.translate(t - n, e - r),
                                this.set("x", t),
                                this.set("y", e),
                                this
                        },
                        transform: function(t) {
                            var e = this,
                                n = this._attrs.matrix;
                            return r.each(t,
                                function(t) {
                                    switch (t[0]) {
                                        case "t":
                                            e.translate(t[1], t[2]);
                                            break;
                                        case "s":
                                            e.scale(t[1], t[2]);
                                            break;
                                        case "r":
                                            e.rotate(t[1]);
                                            break;
                                        case "m":
                                            e.attr("matrix", r.mat3.multiply([], n, t[1])),
                                                e.clearTotalMatrix()
                                    }
                                }),
                                e
                        },
                        setTransform: function(t) {
                            return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                                this.transform(t)
                        },
                        getMatrix: function() {
                            return this.attr("matrix")
                        },
                        setMatrix: function(t) {
                            return this.attr("matrix", t),
                                this.clearTotalMatrix(),
                                this
                        },
                        apply: function(t, e) {
                            var n;
                            return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"),
                                r.vec3.transformMat3(t, t, n),
                                this
                        },
                        _getMatrixByRoot: function(t) {
                            t = t || this;
                            for (var e = this,
                                     n = []; e !== t;) n.unshift(e),
                                e = e.get("parent");
                            n.unshift(e);
                            var i = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                            return r.each(n,
                                function(t) {
                                    r.mat3.multiply(i, t.attr("matrix"), i)
                                }),
                                i
                        },
                        getTotalMatrix: function() {
                            var t = this._cfg.totalMatrix;
                            if (!t) {
                                t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                                var e = this._cfg.parent;
                                if (e) o(t, e.getTotalMatrix());
                                o(t, this.attr("matrix")),
                                    this._cfg.totalMatrix = t
                            }
                            return t
                        },
                        clearTotalMatrix: function() {},
                        invert: function(t) {
                            var e = this.getTotalMatrix();
                            if (a(e)) t[0] /= e[0],
                                t[1] /= e[4];
                            else {
                                var n = r.mat3.invert([], e);
                                n && r.vec3.transformMat3(t, t, n)
                            }
                            return this
                        },
                        resetTransform: function(t) {
                            var e = this.attr("matrix");
                            i(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17);
                    t.exports = {
                        canFill: !1,
                        canStroke: !1,
                        initAttrs: function(t) {
                            return this._attrs = {
                                opacity: 1,
                                fillOpacity: 1,
                                strokeOpacity: 1,
                                matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
                            },
                                this.attr(r.assign(this.getDefaultAttrs(), t)),
                                this
                        },
                        getDefaultAttrs: function() {
                            return {}
                        },
                        attr: function(t, e) {
                            if (0 === arguments.length) return this._attrs;
                            if (r.isObject(t)) {
                                for (var n in t) this._setAttr(n, t[n]);
                                return this.clearBBox(),
                                    this._cfg.hasUpdate = !0,
                                    this
                            }
                            return 2 === arguments.length ? (this._setAttr(t, e), this.clearBBox(), this._cfg.hasUpdate = !0, this) : this._attrs[t]
                        },
                        _setAttr: function(t, e) {
                            var n = this._attrs;
                            n[t] = e,
                                "fill" !== t && "stroke" !== t ? "opacity" !== t ? "clip" === t && e ? this._setClip(e) : "path" === t && this._afterSetAttrPath ? this._afterSetAttrPath(e) : "transform" !== t ? "rotate" === t && this.rotateAtStart(e) : this.transform(e) : n.globalAlpha = e: n[t + "Style"] = e
                        },
                        clearBBox: function() {
                            this.setSilent("box", null)
                        },
                        hasFill: function() {
                            return this.canFill && this._attrs.fillStyle
                        },
                        hasStroke: function() {
                            return this.canStroke && this._attrs.strokeStyle
                        },
                        _setClip: function(t) {
                            t._cfg.renderer = this._cfg.renderer,
                                t._cfg.canvas = this._cfg.canvas,
                                t._cfg.parent = this._cfg.parent,
                                t.hasFill = function() {
                                    return ! 0
                                }
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(17),
                        i = n(407),
                        a = n(406),
                        o = n(507),
                        s = n(506),
                        u = function t(e) {
                            t.superclass.constructor.call(this, e)
                        };
                    u.CFG = {
                        eventEnable: !0,
                        width: null,
                        height: null,
                        widthCanvas: null,
                        heightCanvas: null,
                        widthStyle: null,
                        heightStyle: null,
                        containerDOM: null,
                        canvasDOM: null,
                        pixelRatio: null,
                        renderer: "canvas"
                    },
                        r.extend(u, a),
                        r.augment(u, {
                            init: function() {
                                u.superclass.init.call(this),
                                    this._setGlobalParam(),
                                    this._setContainer(),
                                    this._initPainter(),
                                    this._scale(),
                                this.get("eventEnable") && this._registEvents()
                            },
                            getEmitter: function(t, e) {
                                if (t) {
                                    if (!r.isEmpty(t._getEvents())) return t;
                                    var n = t.get("parent");
                                    if (n && !e.propagationStopped) return this.getEmitter(n, e)
                                }
                            },
                            _getEventObj: function(t, e, n, r) {
                                var a = new i(t, e, !0, !0);
                                return a.x = n.x,
                                    a.y = n.y,
                                    a.clientX = e.clientX,
                                    a.clientY = e.clientY,
                                    a.currentTarget = r,
                                    a.target = r,
                                    a
                            },
                            _triggerEvent: function(t, e) {
                                var n, r = this.getPointByClient(e.clientX, e.clientY),
                                    i = this.getShape(r.x, r.y, e),
                                    a = this.get("el");
                                if ("mousemove" === t) {
                                    var o = this.get("preShape");
                                    if (o && o !== i) {
                                        var s = this._getEventObj("mouseleave", e, r, o); (n = this.getEmitter(o, e)) && n.emit("mouseleave", s),
                                            a.style.cursor = "default"
                                    }
                                    if (i) {
                                        var u = this._getEventObj("mousemove", e, r, i);
                                        if ((n = this.getEmitter(i, e)) && n.emit("mousemove", u), o !== i) {
                                            var c = this._getEventObj("mouseenter", e, r, i);
                                            n && n.emit("mouseenter", c, e)
                                        }
                                    } else {
                                        var h = this._getEventObj("mousemove", e, r, this);
                                        this.emit("mousemove", h)
                                    }
                                    this.set("preShape", i)
                                } else {
                                    var f = this._getEventObj(t, e, r, i || this); (n = this.getEmitter(i, e)) && n !== this && n.emit(t, f),
                                        this.emit(t, f)
                                }
                                i && !i.get("destroyed") && (a.style.cursor = i.attr("cursor") || "default")
                            },
                            _registEvents: function() {
                                var t = this,
                                    e = t.get("el");
                                r.each(["mouseout", "mouseover", "mousemove", "mousedown", "mouseleave", "mouseup", "click", "dblclick"],
                                    function(n) {
                                        e.addEventListener(n,
                                            function(e) {
                                                t._triggerEvent(n, e)
                                            },
                                            !1)
                                    }),
                                    e.addEventListener("touchstart",
                                        function(e) {
                                            r.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0])
                                        },
                                        !1),
                                    e.addEventListener("touchmove",
                                        function(e) {
                                            r.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0])
                                        },
                                        !1),
                                    e.addEventListener("touchend",
                                        function(e) {
                                            r.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0])
                                        },
                                        !1)
                            },
                            _scale: function() {
                                if ("svg" !== this._cfg.renderType) {
                                    var t = this.get("pixelRatio");
                                    this.scale(t, t)
                                }
                            },
                            _setGlobalParam: function() {
                                var t = this.get("renderer") || "canvas";
                                "svg" === t ? this.set("pixelRatio", 1) : this.get("pixelRatio") || this.set("pixelRatio", r.getRatio()),
                                    this._cfg.renderType = t;
                                var e = s[t];
                                this._cfg.renderer = e,
                                    this._cfg.canvas = this;
                                var n = new o(this);
                                this._cfg.timeline = n
                            },
                            _setContainer: function() {
                                var t = this.get("containerId"),
                                    e = this.get("containerDOM");
                                e || (e = document.getElementById(t), this.set("containerDOM", e)),
                                    r.modifyCSS(e, {
                                        position: "relative"
                                    })
                            },
                            _initPainter: function() {
                                var t = this.get("containerDOM"),
                                    e = new this._cfg.renderer.painter(t);
                                this._cfg.painter = e,
                                    this._cfg.canvasDOM = this._cfg.el = e.canvas,
                                    this.changeSize(this.get("width"), this.get("height"))
                            },
                            _resize: function() {
                                var t = this.get("canvasDOM"),
                                    e = this.get("widthCanvas"),
                                    n = this.get("heightCanvas"),
                                    r = this.get("widthStyle"),
                                    i = this.get("heightStyle");
                                t.style.width = r,
                                    t.style.height = i,
                                    t.setAttribute("width", e),
                                    t.setAttribute("height", n)
                            },
                            getWidth: function() {
                                var t = this.get("pixelRatio");
                                return this.get("width") * t
                            },
                            getHeight: function() {
                                var t = this.get("pixelRatio");
                                return this.get("height") * t
                            },
                            changeSize: function(t, e) {
                                var n = this.get("pixelRatio"),
                                    r = t * n,
                                    i = e * n;
                                this.set("widthCanvas", r),
                                    this.set("heightCanvas", i),
                                    this.set("widthStyle", t + "px"),
                                    this.set("heightStyle", e + "px"),
                                    this.set("width", t),
                                    this.set("height", e),
                                    this._resize()
                            },
                            getPointByClient: function(t, e) {
                                var n = this.get("el"),
                                    r = this.get("pixelRatio") || 1,
                                    i = n.getBoundingClientRect();
                                return {
                                    x: (t - i.left) * r,
                                    y: (e - i.top) * r
                                }
                            },
                            getClientByPoint: function(t, e) {
                                var n = this.get("el").getBoundingClientRect(),
                                    r = this.get("pixelRatio") || 1;
                                return {
                                    clientX: t / r + n.left,
                                    clientY: e / r + n.top
                                }
                            },
                            draw: function() {
                                this._cfg.painter.draw(this)
                            },
                            getShape: function(t, e, n) {
                                return 3 === arguments.length && this._cfg.renderer.getShape ? this._cfg.renderer.getShape.call(this, t, e, n) : u.superclass.getShape.call(this, t, e)
                            },
                            getRenderer: function() {
                                return this._cfg.renderType
                            },
                            _drawSync: function() {
                                this._cfg.painter.drawSync(this)
                            },
                            destroy: function() {
                                var t = this._cfg,
                                    e = t.containerDOM,
                                    n = t.canvasDOM;
                                n && e && e.removeChild(n),
                                    t.timeline.stop(),
                                    u.superclass.destroy.call(this)
                            }
                        }),
                        t.exports = u
                },
                function(t, e, n) {
                    var r = n(147),
                        i = {};
                    n(152).mix(i, r.PathUtil, {
                        getRectPath: r.PathUtil.rectPath,
                        pointsToPolygon: function(t) {
                            for (var e = [["M", t[0].x, t[0].y]], n = 1; n < t.length; n++) {
                                var r = t[n];
                                e.push(["L", r.x, r.y])
                            }
                            return e
                        },
                        getEllipsePath: function(t, e, n, r) {
                            return [["M", t, e - r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]]
                        }
                    }),
                        t.exports = i
                },
                function(t, e) {
                    t.exports = function(t) {
                        return null != t && "object" == typeof t
                    }
                },
                function(t, e) {
                    var n = Object.prototype.toString;
                    t.exports = function(t) {
                        return n.call(t)
                    }
                },
                function(t, e, n) {
                    var r = n(409),
                        i = Object.prototype,
                        a = i.hasOwnProperty,
                        o = i.toString,
                        s = r ? r.toStringTag: void 0;
                    t.exports = function(t) {
                        var e = a.call(t, s),
                            n = t[s];
                        try {
                            t[s] = void 0;
                            var r = !0
                        } catch(t) {}
                        var i = o.call(t);
                        return r && (e ? t[s] = n: delete t[s]),
                            i
                    }
                },
                function(t, e, n) {
                    var r = n(409),
                        i = n(517),
                        a = n(516),
                        o = "[object Null]",
                        s = "[object Undefined]",
                        u = r ? r.toStringTag: void 0;
                    t.exports = function(t) {
                        return null == t ? void 0 === t ? s: o: u && u in Object(t) ? i(t) : a(t)
                    }
                },
                function(t, e, n) {
                    var r = n(518),
                        i = n(515),
                        a = "[object Symbol]";
                    t.exports = function(t) {
                        return "symbol" == typeof t || i(t) && r(t) == a
                    }
                },
                function(t, e, n) {
                    var r = n(377),
                        i = n(519),
                        a = NaN,
                        o = /^\s+|\s+$/g,
                        s = /^[-+]0x[0-9a-f]+$/i,
                        u = /^0b[01]+$/i,
                        c = /^0o[0-7]+$/i,
                        h = parseInt;
                    t.exports = function(t) {
                        if ("number" == typeof t) return t;
                        if (i(t)) return a;
                        if (r(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = r(e) ? e + "": e
                        }
                        if ("string" != typeof t) return 0 === t ? t: +t;
                        t = t.replace(o, "");
                        var n = u.test(t);
                        return n || c.test(t) ? h(t.slice(2), n ? 2 : 8) : s.test(t) ? a: +t
                    }
                },
                function(t, e, n) { (function(e) {
                    var n = "object" == typeof e && e && e.Object === Object && e;
                    t.exports = n
                }).call(this, n(148))
                },
                function(t, e, n) {
                    var r = n(410);
                    t.exports = function() {
                        return r.Date.now()
                    }
                },
                function(t, e, n) {
                    var r = n(411),
                        i = n(377),
                        a = "Expected a function";
                    t.exports = function(t, e, n) {
                        var o = !0,
                            s = !0;
                        if ("function" != typeof t) throw new TypeError(a);
                        return i(n) && (o = "leading" in n ? !!n.leading: o, s = "trailing" in n ? !!n.trailing: s),
                            r(t, e, {
                                leading: o,
                                maxWait: e,
                                trailing: s
                            })
                    }
                },
                function(t, e) {
                    t.exports = function(t, e, n) {
                        var r = void 0,
                            i = void 0,
                            a = void 0,
                            o = void 0,
                            s = 0;
                        n || (n = {});
                        var u = function() {
                                s = !1 === n.leading ? 0 : Date.now(),
                                    r = null,
                                    o = t.apply(i, a),
                                r || (i = a = null)
                            },
                            c = function() {
                                var c = Date.now();
                                s || !1 !== n.leading || (s = c);
                                var h = e - (c - s);
                                return i = this,
                                    a = arguments,
                                    h <= 0 || h > e ? (r && (clearTimeout(r), r = null), s = c, o = t.apply(i, a), r || (i = a = null)) : r || !1 === n.trailing || (r = setTimeout(u, h)),
                                    o
                            };
                        return c.cancel = function() {
                            clearTimeout(r),
                                s = 0,
                                r = i = a = null
                        },
                            c
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(359),
                        a = Object.prototype.hasOwnProperty;
                    t.exports = function(t, e) {
                        if (null === t || !i(t)) return {};
                        var n = {};
                        return r(e,
                            function(e) {
                                a.call(t, e) && (n[e] = t[e])
                            }),
                            n
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(62);
                    t.exports = function(t, e) {
                        if (!i(t)) return t;
                        var n = [];
                        return r(t,
                            function(t, r) {
                                n.push(e(t, r))
                            }),
                            n
                    }
                },
                function(t, e, n) {
                    var r = n(47),
                        i = n(378);
                    t.exports = function(t, e, n) {
                        return r(n) ? !!n(t, e) : i(t, e)
                    }
                },
                function(t, e, n) {
                    var r = n(62);
                    t.exports = function(t, e) {
                        if (!r(t)) return - 1;
                        var n = Array.prototype.indexOf;
                        if (n) return n.call(t, e);
                        for (var i = -1,
                                 a = 0; a < t.length; a++) if (t[a] === e) {
                            i = a;
                            break
                        }
                        return i
                    }
                },
                function(t, e, n) {
                    var r = n(415);
                    t.exports = function(t, e) {
                        if (!e) return [t];
                        var n = r(t, e),
                            i = [];
                        for (var a in n) i.push(n[a]);
                        return i
                    }
                },
                function(t, e) {
                    t.exports = function(t, e, n) {
                        var r = void 0;
                        return function() {
                            var i = this,
                                a = arguments,
                                o = n && !r;
                            clearTimeout(r),
                                r = setTimeout(function() {
                                        r = null,
                                        n || t.apply(i, a)
                                    },
                                    e),
                            o && t.apply(i, a)
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Error")
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Arguments")
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "Date")
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = function(t) {
                        return r(t, "RegExp")
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        return void 0 === t
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        return null === t
                    }
                },
                function(t, e, n) {
                    var r = n(60),
                        i = {
                            getType: n(420),
                            isArray: n(29),
                            isArrayLike: n(62),
                            isBoolean: n(419),
                            isFunction: n(47),
                            isNil: n(136),
                            isNull: n(536),
                            isNumber: n(135),
                            isObject: n(385),
                            isObjectLike: n(383),
                            isPlainObject: n(359),
                            isPrototype: n(418),
                            isType: r,
                            isUndefined: n(535),
                            isString: n(358),
                            isRegExp: n(534),
                            isDate: n(533),
                            isArguments: n(532),
                            isError: n(531)
                        };
                    t.exports = i
                },
                function(t, e, n) {
                    t.exports = n(422)
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return t && e ? t.replace(/\\?\{([^{}]+)\}/g,
                            function(t, n) {
                                return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "": e[n]
                            }) : t
                    }
                },
                function(t, e, n) {
                    var r = n(357);
                    t.exports = function(t) {
                        var e = r(t);
                        return e.charAt(0).toLowerCase() + e.substring(1)
                    }
                },
                function(t, e, n) {
                    t.exports = n(423)
                },
                function(t, e, n) {
                    var r = {
                        lc: n(541),
                        lowerCase: n(423),
                        lowerFirst: n(540),
                        substitute: n(539),
                        uc: n(538),
                        upperCase: n(422),
                        upperFirst: n(421)
                    };
                    t.exports = r
                },
                function(t, e) {
                    function n(t) {
                        var e = [];
                        switch (t[0]) {
                            case "M":
                            case "L":
                                e.push([t[1], t[2]]);
                                break;
                            case "A":
                                e.push([t[6], t[7]]);
                                break;
                            case "Q":
                                e.push([t[3], t[4]]),
                                    e.push([t[1], t[2]]);
                                break;
                            case "T":
                                e.push([t[1], t[2]]);
                                break;
                            case "C":
                                e.push([t[5], t[6]]),
                                    e.push([t[1], t[2]]),
                                    e.push([t[3], t[4]]);
                                break;
                            case "S":
                                e.push([t[3], t[4]]),
                                    e.push([t[1], t[2]]);
                                break;
                            case "H":
                            case "V":
                                e.push([t[1], t[1]])
                        }
                        return e
                    }
                    function r(t, e, r) {
                        for (var i = [].concat(t), a = void 0, o = 1 / (r + 1), s = n(e)[0], u = 1; u <= r; u++) o *= u,
                            0 === (a = Math.floor(t.length * o)) ? i.unshift([s[0] * o + t[a][0] * (1 - o), s[1] * o + t[a][1] * (1 - o)]) : i.splice(a, 0, [s[0] * o + t[a][0] * (1 - o), s[1] * o + t[a][1] * (1 - o)]);
                        return i
                    }
                    t.exports = function(t, e) {
                        if (t.length <= 1) return t;
                        for (var i = void 0,
                                 a = 0; a < e.length; a++) if (t[a][0] !== e[a][0]) switch (i = n(t[a]), e[a][0]) {
                            case "M":
                                t[a] = ["M"].concat(i[0]);
                                break;
                            case "L":
                                t[a] = ["L"].concat(i[0]);
                                break;
                            case "A":
                                t[a] = [].concat(e[a]),
                                    t[a][6] = i[0][0],
                                    t[a][7] = i[0][1];
                                break;
                            case "Q":
                                if (i.length < 2) {
                                    if (! (a > 0)) {
                                        t[a] = e[a];
                                        break
                                    }
                                    i = r(i, t[a - 1], 1)
                                }
                                t[a] = ["Q"].concat(i.reduce(function(t, e) {
                                        return t.concat(e)
                                    },
                                    []));
                                break;
                            case "T":
                                t[a] = ["T"].concat(i[0]);
                                break;
                            case "C":
                                if (i.length < 3) {
                                    if (! (a > 0)) {
                                        t[a] = e[a];
                                        break
                                    }
                                    i = r(i, t[a - 1], 2)
                                }
                                t[a] = ["C"].concat(i.reduce(function(t, e) {
                                        return t.concat(e)
                                    },
                                    []));
                                break;
                            case "S":
                                if (i.length < 2) {
                                    if (! (a > 0)) {
                                        t[a] = e[a];
                                        break
                                    }
                                    i = r(i, t[a - 1], 1)
                                }
                                t[a] = ["S"].concat(i.reduce(function(t, e) {
                                        return t.concat(e)
                                    },
                                    []));
                                break;
                            default:
                                t[a] = e[a]
                        }
                        return t
                    }
                },
                function(t, e, n) {
                    var r = n(30);
                    t.exports = function(t, e) {
                        if (t.length !== e.length) return ! 1;
                        var n = !0;
                        return r(t,
                            function(t, r) {
                                if (t !== e[r]) return n = !1,
                                    !1
                            }),
                            n
                    }
                },
                function(t, e, n) {
                    var r = n(544);
                    function i(t, e, n) {
                        var r = null,
                            i = n;
                        return e < i && (i = e, r = "add"),
                        t < i && (i = t, r = "del"),
                            {
                                type: r,
                                min: i
                            }
                    }
                    t.exports = function(t, e) {
                        var n = function(t, e) {
                                var n = t.length,
                                    a = e.length,
                                    o = void 0,
                                    s = void 0,
                                    u = 0;
                                if (0 === n || 0 === a) return null;
                                for (var c = [], h = 0; h <= n; h++) c[h] = [],
                                    c[h][0] = {
                                        min: h
                                    };
                                for (var f = 0; f <= a; f++) c[0][f] = {
                                    min: f
                                };
                                for (var l = 1; l <= n; l++) {
                                    o = t[l - 1];
                                    for (var p = 1; p <= a; p++) {
                                        s = e[p - 1],
                                            u = r(o, s) ? 0 : 1;
                                        var d = c[l - 1][p].min + 1,
                                            g = c[l][p - 1].min + 1,
                                            v = c[l - 1][p - 1].min + u;
                                        c[l][p] = i(d, g, v)
                                    }
                                }
                                return c
                            } (t, e),
                            a = t.length,
                            o = e.length,
                            s = [],
                            u = 1,
                            c = 1;
                        if (n[a][o] !== a) {
                            for (var h = 1; h <= a; h++) {
                                var f = n[h][h].min;
                                c = h;
                                for (var l = u; l <= o; l++) n[h][l].min < f && (f = n[h][l].min, c = l);
                                u = c,
                                n[h][u].type && s.push({
                                    index: h - 1,
                                    type: n[h][u].type
                                })
                            }
                            for (var p = s.length - 1; p >= 0; p--) u = s[p].index,
                                "add" === s[p].type ? t.splice(u, 0, [].concat(t[u])) : t.splice(u, 1)
                        }
                        if ((a = t.length) < o) for (var d = 0; d < o - a; d++)"z" === t[a - 1][0] || "Z" === t[a - 1][0] ? t.splice(a - 2, 0, t[a - 2]) : t.push(t[a - 1]);
                        return t
                    }
                },
                function(t, e) {
                    function n(t, e) {
                        var n = [],
                            r = [];
                        return t.length &&
                        function t(e, i) {
                            if (1 === e.length) n.push(e[0]),
                                r.push(e[0]);
                            else {
                                for (var a = [], o = 0; o < e.length - 1; o++) 0 === o && n.push(e[0]),
                                o === e.length - 2 && r.push(e[o + 1]),
                                    a[o] = [(1 - i) * e[o][0] + i * e[o + 1][0], (1 - i) * e[o][1] + i * e[o + 1][1]];
                                t(a, i)
                            }
                        } (t, e),
                            {
                                left: n,
                                right: r.reverse()
                            }
                    }
                    function r(t, e, r) {
                        if (1 === r) return [[].concat(t)];
                        var i = [];
                        if ("L" === e[0] || "C" === e[0] || "Q" === e[0]) i = i.concat(function(t, e, r) {
                            var i = [[t[1], t[2]]];
                            r = r || 2;
                            var a = [];
                            "A" === e[0] ? (i.push(e[6]), i.push(e[7])) : "C" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]]), i.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]])) : i.push([e[1], e[2]]);
                            for (var o = i,
                                     s = 1 / r,
                                     u = 0; u < r - 1; u++) {
                                var c = n(o, s / (1 - s * u));
                                a.push(c.left),
                                    o = c.right
                            }
                            return a.push(o),
                                a.map(function(t) {
                                    var e = [];
                                    return 4 === t.length && (e.push("C"), e = e.concat(t[2])),
                                    t.length >= 3 && (3 === t.length && e.push("Q"), e = e.concat(t[1])),
                                    2 === t.length && e.push("L"),
                                        e = e.concat(t[t.length - 1])
                                })
                        } (t, e, r));
                        else {
                            var a = [].concat(t);
                            "M" === a[0] && (a[0] = "L");
                            for (var o = 0; o <= r - 1; o++) i.push(a)
                        }
                        return i
                    }
                    t.exports = function(t, e) {
                        if (1 === t.length) return t;
                        var n = t.length - 1,
                            i = e.length - 1,
                            a = n / i,
                            o = [];
                        if (1 === t.length && "M" === t[0][0]) {
                            for (var s = 0; s < i - n; s++) t.push(t[0]);
                            return t
                        }
                        for (var u = 0; u < i; u++) {
                            var c = Math.floor(a * u);
                            o[c] = (o[c] || 0) + 1
                        }
                        var h = o.reduce(function(e, i, a) {
                                return a === n ? e.concat(t[n]) : e.concat(r(t[a], t[a + 1], i))
                            },
                            []);
                        return h.unshift(t[0]),
                        "Z" !== e[i] && "z" !== e[i] || h.push("Z"),
                            h
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(429),
                        a = n(427),
                        o = function(t, e, n, r, i) {
                            return t * (t * ( - 3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                        },
                        s = function(t, e, n, r, i, a, s, u, c) {
                            null === c && (c = 1);
                            for (var h = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, f = [ - .1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], l = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, d = 0; d < 12; d++) {
                                var g = h * f[d] + h,
                                    v = o(g, t, n, i, s),
                                    m = o(g, e, r, a, u),
                                    x = v * v + m * m;
                                p += l[d] * Math.sqrt(x)
                            }
                            return h * p
                        },
                        u = function(t, e, n, r, i, a, o, s) {
                            if (! (Math.max(t, n) < Math.min(i, o) || Math.min(t, n) > Math.max(i, o) || Math.max(e, r) < Math.min(a, s) || Math.min(e, r) > Math.max(a, s))) {
                                var u = (t - n) * (a - s) - (e - r) * (i - o);
                                if (u) {
                                    var c = ((t * r - e * n) * (i - o) - (t - n) * (i * s - a * o)) / u,
                                        h = ((t * r - e * n) * (a - s) - (e - r) * (i * s - a * o)) / u,
                                        f = +c.toFixed(2),
                                        l = +h.toFixed(2);
                                    if (! (f < +Math.min(t, n).toFixed(2) || f > +Math.max(t, n).toFixed(2) || f < +Math.min(i, o).toFixed(2) || f > +Math.max(i, o).toFixed(2) || l < +Math.min(e, r).toFixed(2) || l > +Math.max(e, r).toFixed(2) || l < +Math.min(a, s).toFixed(2) || l > +Math.max(a, s).toFixed(2))) return {
                                        x: c,
                                        y: h
                                    }
                                }
                            }
                        },
                        c = function(t, e, n) {
                            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
                        },
                        h = function(t, e, n, r) {
                            return null === t && (t = e = n = r = 0),
                            null === e && (e = t.y, n = t.width, r = t.height, t = t.x),
                                {
                                    x: t,
                                    y: e,
                                    width: n,
                                    w: n,
                                    height: r,
                                    h: r,
                                    x2: t + n,
                                    y2: e + r,
                                    cx: t + n / 2,
                                    cy: e + r / 2,
                                    r1: Math.min(n, r) / 2,
                                    r2: Math.max(n, r) / 2,
                                    r0: Math.sqrt(n * n + r * r) / 2,
                                    path: i(t, e, n, r),
                                    vb: [t, e, n, r].join(" ")
                                }
                        },
                        f = function(t, e, n, i, a, o, s, u) {
                            r(t) || (t = [t, e, n, i, a, o, s, u]);
                            var c = function(t, e, n, r, i, a, o, s) {
                                for (var u = [], c = [[], []], h = void 0, f = void 0, l = void 0, p = void 0, d = 0; d < 2; ++d) if (0 === d ? (f = 6 * t - 12 * n + 6 * i, h = -3 * t + 9 * n - 9 * i + 3 * o, l = 3 * n - 3 * t) : (f = 6 * e - 12 * r + 6 * a, h = -3 * e + 9 * r - 9 * a + 3 * s, l = 3 * r - 3 * e), Math.abs(h) < 1e-12) {
                                    if (Math.abs(f) < 1e-12) continue; (p = -l / f) > 0 && p < 1 && u.push(p)
                                } else {
                                    var g = f * f - 4 * l * h,
                                        v = Math.sqrt(g);
                                    if (! (g < 0)) {
                                        var m = ( - f + v) / (2 * h);
                                        m > 0 && m < 1 && u.push(m);
                                        var x = ( - f - v) / (2 * h);
                                        x > 0 && x < 1 && u.push(x)
                                    }
                                }
                                for (var y = u.length,
                                         b = y,
                                         M = void 0; y--;) M = 1 - (p = u[y]),
                                    c[0][y] = M * M * M * t + 3 * M * M * p * n + 3 * M * p * p * i + p * p * p * o,
                                    c[1][y] = M * M * M * e + 3 * M * M * p * r + 3 * M * p * p * a + p * p * p * s;
                                return c[0][b] = t,
                                    c[1][b] = e,
                                    c[0][b + 1] = o,
                                    c[1][b + 1] = s,
                                    c[0].length = c[1].length = b + 2,
                                    {
                                        min: {
                                            x: Math.min.apply(0, c[0]),
                                            y: Math.min.apply(0, c[1])
                                        },
                                        max: {
                                            x: Math.max.apply(0, c[0]),
                                            y: Math.max.apply(0, c[1])
                                        }
                                    }
                            }.apply(null, t);
                            return h(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
                        },
                        l = function(t, e, n, r, i, a, o, s, u) {
                            var c = 1 - u,
                                h = Math.pow(c, 3),
                                f = Math.pow(c, 2),
                                l = u * u,
                                p = l * u,
                                d = t + 2 * u * (n - t) + l * (i - 2 * n + t),
                                g = e + 2 * u * (r - e) + l * (a - 2 * r + e),
                                v = n + 2 * u * (i - n) + l * (o - 2 * i + n),
                                m = r + 2 * u * (a - r) + l * (s - 2 * a + r);
                            return {
                                x: h * t + 3 * f * u * n + 3 * c * u * u * i + p * o,
                                y: h * e + 3 * f * u * r + 3 * c * u * u * a + p * s,
                                m: {
                                    x: d,
                                    y: g
                                },
                                n: {
                                    x: v,
                                    y: m
                                },
                                start: {
                                    x: c * t + u * n,
                                    y: c * e + u * r
                                },
                                end: {
                                    x: c * i + u * o,
                                    y: c * a + u * s
                                },
                                alpha: 90 - 180 * Math.atan2(d - v, g - m) / Math.PI
                            }
                        },
                        p = function(t, e, n) {
                            if (!
                                    function(t, e) {
                                        return t = h(t),
                                            e = h(e),
                                        c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
                                    } (f(t), f(e))) return n ? 0 : [];
                            for (var r = ~~ (s.apply(0, t) / 8), i = ~~ (s.apply(0, e) / 8), a = [], o = [], p = {},
                                     d = n ? 0 : [], g = 0; g < r + 1; g++) {
                                var v = l.apply(0, t.concat(g / r));
                                a.push({
                                    x: v.x,
                                    y: v.y,
                                    t: g / r
                                })
                            }
                            for (var m = 0; m < i + 1; m++) {
                                var x = l.apply(0, e.concat(m / i));
                                o.push({
                                    x: x.x,
                                    y: x.y,
                                    t: m / i
                                })
                            }
                            for (var y = 0; y < r; y++) for (var b = 0; b < i; b++) {
                                var M = a[y],
                                    w = a[y + 1],
                                    _ = o[b],
                                    E = o[b + 1],
                                    A = Math.abs(w.x - M.x) < .001 ? "y": "x",
                                    S = Math.abs(E.x - _.x) < .001 ? "y": "x",
                                    P = u(M.x, M.y, w.x, w.y, _.x, _.y, E.x, E.y);
                                if (P) {
                                    if (p[P.x.toFixed(4)] === P.y.toFixed(4)) continue;
                                    p[P.x.toFixed(4)] = P.y.toFixed(4);
                                    var O = M.t + Math.abs((P[A] - M[A]) / (w[A] - M[A])) * (w.t - M.t),
                                        C = _.t + Math.abs((P[S] - _[S]) / (E[S] - _[S])) * (E.t - _.t);
                                    O >= 0 && O <= 1 && C >= 0 && C <= 1 && (n ? d++:d.push({
                                        x: P.x,
                                        y: P.y,
                                        t1: O,
                                        t2: C
                                    }))
                                }
                            }
                            return d
                        };
                    t.exports = function(t, e) {
                        return function(t, e, n) {
                            t = a(t),
                                e = a(e);
                            for (var r = void 0,
                                     i = void 0,
                                     o = void 0,
                                     s = void 0,
                                     u = void 0,
                                     c = void 0,
                                     h = void 0,
                                     f = void 0,
                                     l = void 0,
                                     d = void 0,
                                     g = n ? 0 : [], v = 0, m = t.length; v < m; v++) {
                                var x = t[v];
                                if ("M" === x[0]) r = u = x[1],
                                    i = c = x[2];
                                else {
                                    "C" === x[0] ? (r = (l = [r, i].concat(x.slice(1)))[6], i = l[7]) : (l = [r, i, r, i, u, c, u, c], r = u, i = c);
                                    for (var y = 0,
                                             b = e.length; y < b; y++) {
                                        var M = e[y];
                                        if ("M" === M[0]) o = h = M[1],
                                            s = f = M[2];
                                        else {
                                            "C" === M[0] ? (o = (d = [o, s].concat(M.slice(1)))[6], s = d[7]) : (d = [o, s, o, s, h, f, h, f], o = h, s = f);
                                            var w = p(l, d, n);
                                            if (n) g += w;
                                            else {
                                                for (var _ = 0,
                                                         E = w.length; _ < E; _++) w[_].segment1 = v,
                                                    w[_].segment2 = y,
                                                    w[_].bez1 = l,
                                                    w[_].bez2 = d;
                                                g = g.concat(w)
                                            }
                                        }
                                    }
                                }
                            }
                            return g
                        } (t, e)
                    }
                },
                function(t, e, n) {
                    var r = n(547),
                        i = n(426),
                        a = n(427),
                        o = n(424);
                    t.exports = {
                        catmullRom2Bezier: o,
                        catmullRomToBezier: o,
                        fillPath: n(546),
                        fillPathByDiff: n(545),
                        formatPath: n(543),
                        intersection: r,
                        pathIntersection: r,
                        parsePathArray: n(428),
                        parsePathString: n(425),
                        pathToAbsolute: i,
                        path2absolute: i,
                        pathTocurve: a,
                        path2curve: a,
                        rectPath: n(429)
                    }
                },
                function(t, e, n) {
                    var r = n(368),
                        i = n(430);
                    t.exports = function(t, e) {
                        return r(i(t), e)
                    }
                },
                function(t, e, n) {
                    t.exports = n(431)
                },
                function(t, e, n) {
                    t.exports = n(30)
                },
                function(t, e, n) {
                    t.exports = {
                        forIn: n(551),
                        has: n(431),
                        hasKey: n(550),
                        hasValue: n(549),
                        keys: n(443),
                        isMatch: n(444),
                        values: n(430)
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        mat3: n(381),
                        vec2: n(434),
                        vec3: n(433),
                        transform: n(432)
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(47),
                        a = n(30);
                    t.exports = function(t, e) {
                        if (r(t)) {
                            var n = t[0],
                                o = void 0;
                            o = i(e) ? e(t[0]) : t[0][e];
                            var s = void 0;
                            return a(t,
                                function(t) { (s = i(e) ? e(t) : t[e]) < o && (n = t, o = s)
                                }),
                                n
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(47),
                        a = n(30);
                    t.exports = function(t, e) {
                        if (r(t)) {
                            var n = t[0],
                                o = void 0;
                            o = i(e) ? e(t[0]) : t[0][e];
                            var s = void 0;
                            return a(t,
                                function(t) { (s = i(e) ? e(t) : t[e]) > o && (n = t, o = s)
                                }),
                                n
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(135);
                    t.exports = function(t) {
                        return r(t) && t > 0
                    }
                },
                function(t, e, n) {
                    var r = n(135);
                    t.exports = function(t) {
                        return r(t) && t % 2 != 0
                    }
                },
                function(t, e, n) {
                    var r = n(135);
                    t.exports = function(t) {
                        return r(t) && t < 0
                    }
                },
                function(t, e, n) {
                    var r = n(135),
                        i = Number.isInteger ? Number.isInteger: function(t) {
                            return r(t) && t % 1 == 0
                        };
                    t.exports = i
                },
                function(t, e, n) {
                    var r = n(135);
                    t.exports = function(t) {
                        return r(t) && t % 2 == 0
                    }
                },
                function(t, e, n) {
                    var r = n(135);
                    t.exports = function(t) {
                        return r(t) && t % 1 != 0
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = e.toString(),
                            r = n.indexOf(".");
                        if ( - 1 === r) return Math.round(t);
                        var i = n.substr(r + 1).length;
                        return i > 20 && (i = 20),
                            parseFloat(t.toFixed(i))
                    }
                },
                function(t, e, n) {
                    var r = n(439);
                    t.exports = {
                        clamp: n(382),
                        fixedBase: n(562),
                        isDecimal: n(561),
                        isEven: n(560),
                        isInteger: n(559),
                        isNegative: n(558),
                        isNumberEqual: r,
                        isOdd: n(557),
                        isPositive: n(556),
                        maxBy: n(555),
                        minBy: n(554),
                        mod: n(438),
                        snapEqual: r,
                        toDegree: n(437),
                        toInt: n(436),
                        toInteger: n(436),
                        toRadian: n(435)
                    }
                },
                function(t, e, n) {
                    var r = n(29);
                    t.exports = function(t) {
                        var e = 0,
                            n = 0,
                            i = 0,
                            a = 0;
                        return r(t) ? 1 === t.length ? e = n = i = a = t[0] : 2 === t.length ? (e = i = t[0], n = a = t[1]) : 3 === t.length ? (e = t[0], n = a = t[1], i = t[2]) : (e = t[0], n = t[1], i = t[2], a = t[3]) : e = n = i = a = t,
                            {
                                r1: e,
                                r2: n,
                                r3: i,
                                r4: a
                            }
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(358),
                        a = n(30),
                        o = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
                        s = /[^\s\,]+/gi;
                    t.exports = function(t) {
                        return r(t = t || []) ? t: i(t) ? (t = t.match(o), a(t,
                            function(e, n) {
                                if ((e = e.match(s))[0].length > 1) {
                                    var r = e[0].charAt(0);
                                    e.splice(1, 0, e[0].substr(1)),
                                        e[0] = r
                                }
                                a(e,
                                    function(t, n) {
                                        isNaN(t) || (e[n] = +t)
                                    }),
                                    t[n] = e
                            }), t) : void 0
                    }
                },
                function(t, e) {
                    var n = {};
                    t.exports = function(t) {
                        var e = n[t];
                        if (!e) {
                            for (var r = t.toString(16), i = r.length; i < 6; i++) r = "0" + r;
                            e = "#" + r,
                                n[t] = e
                        }
                        return e
                    }
                },
                function(t, e, n) {
                    var r = n(566);
                    t.exports = {
                        number2color: r,
                        numberToColor: r,
                        parsePath: n(565),
                        parseRadius: n(564)
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        if (t["_wrap_" + e]) return t["_wrap_" + e];
                        var n = function(n) {
                            t[e](n)
                        };
                        return t["_wrap_" + e] = n,
                            n
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return t["_wrap_" + e]
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        getWrapBehavior: n(569),
                        wrapBehavior: n(568)
                    }
                },
                function(t, e, n) {
                    var r = n(136),
                        i = n(29),
                        a = n(30);
                    t.exports = function(t, e) {
                        for (var n = [], o = {},
                                 s = 0; s < t.length; s++) {
                            var u = t[s][e];
                            r(u) || (i(u) || (u = [u]), a(u,
                                function(t) {
                                    o[t] || (n.push(t), o[t] = !0)
                                }))
                        }
                        return n
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(367),
                        a = n(440);
                    t.exports = function() {
                        var t = [],
                            e = i(arguments);
                        return r(e,
                            function(e) {
                                t = t.concat(e)
                            }),
                            a(t)
                    }
                },
                function(t, e, n) {
                    var r = n(358),
                        i = n(47),
                        a = n(29);
                    t.exports = function(t, e) {
                        var n = void 0;
                        if (i(e)) n = function(t, n) {
                            return e(t) - e(n)
                        };
                        else {
                            var o = [];
                            r(e) ? o.push(e) : a(e) && (o = e),
                                n = function(t, e) {
                                    for (var n = 0; n < o.length; n += 1) {
                                        var r = o[n];
                                        if (t[r] > e[r]) return 1;
                                        if (t[r] < e[r]) return - 1
                                    }
                                    return 0
                                }
                        }
                        return t.sort(n),
                            t
                    }
                },
                function(t, e, n) {
                    var r = n(62),
                        i = n(441);
                    t.exports = function(t, e) {
                        var n = [];
                        if (!r(t)) return n;
                        for (var a = -1,
                                 o = [], s = t.length; ++a < s;) {
                            var u = t[a];
                            e(u, a, t) && (n.push(u), o.push(a))
                        }
                        return i(t, o),
                            n
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(359),
                        a = n(30);
                    t.exports = function(t, e, n) {
                        if (!r(t) && !i(t)) return t;
                        var o = n;
                        return a(t,
                            function(t, n) {
                                o = e(o, t, n)
                            }),
                            o
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
                        return e
                    }
                },
                function(t, e, n) {
                    var r = n(384),
                        i = n(29);
                    t.exports = function(t) {
                        if (! (t = r(t,
                                function(t) {
                                    return ! isNaN(t)
                                })).length) return {
                            min: 0,
                            max: 0
                        };
                        if (i(t[0])) {
                            for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
                            t = e
                        }
                        var a = Math.max.apply(null, t);
                        return {
                            min: Math.min.apply(null, t),
                            max: a
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(29);
                    t.exports = function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        if (r(e)) for (var i = 0; i < e.length; i += 1) t(e[i], n);
                        else n.push(e);
                        return n
                    }
                },
                function(t, e, n) {
                    var r = n(29),
                        i = n(30);
                    t.exports = function(t) {
                        if (!r(t)) return t;
                        var e = [];
                        return i(t,
                            function(t) {
                                r(t) ? i(t,
                                    function(t) {
                                        e.push(t)
                                    }) : e.push(t)
                            }),
                            e
                    }
                },
                function(t, e, n) {
                    var r = n(136),
                        i = n(29);
                    t.exports = function(t, e) {
                        for (var n = null,
                                 a = 0; a < t.length; a++) {
                            var o = t[a][e];
                            if (!r(o)) {
                                n = i(o) ? o[0] : o;
                                break
                            }
                        }
                        return n
                    }
                },
                function(t, e, n) {
                    var r = n(47),
                        i = n(359),
                        a = n(444);
                    t.exports = function(t, e) {
                        var n = void 0;
                        if (r(e) && (n = e), i(e) && (n = function(t) {
                                return a(t, e)
                            }), n) for (var o = 0; o < t.length; o += 1) if (n(t[o])) return t[o];
                        return null
                    }
                },
                function(t, e, n) {
                    var r = n(384),
                        i = n(368);
                    t.exports = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        return r(t,
                            function(t) {
                                return ! i(e, t)
                            })
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        contains: n(368),
                        difference: n(582),
                        find: n(581),
                        firstValue: n(580),
                        flatten: n(579),
                        flattenDeep: n(578),
                        getRange: n(577),
                        merge: n(576),
                        pull: n(442),
                        pullAt: n(441),
                        reduce: n(575),
                        remove: n(574),
                        sortBy: n(573),
                        union: n(572),
                        uniq: n(440),
                        valuesOfKey: n(571)
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = this.getStyle(t, "width", e);
                        return "auto" === n && (n = t.offsetWidth),
                            parseFloat(n)
                    }
                },
                function(t, e, n) {
                    var r = n(136);
                    t.exports = function(t, e, n) {
                        try {
                            return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
                        } catch(t) {
                            return r(n) ? null: n
                        }
                    }
                },
                function(t, e) {
                    t.exports = function() {
                        return window.devicePixelRatio ? window.devicePixelRatio: 2
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = this.getWidth(t, e),
                            r = parseFloat(this.getStyle(t, "borderLeftWidth")) || 0,
                            i = parseFloat(this.getStyle(t, "paddingLeft")) || 0,
                            a = parseFloat(this.getStyle(t, "paddingRight")) || 0;
                        return n + r + (parseFloat(this.getStyle(t, "borderRightWidth")) || 0) + i + a
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = this.getHeight(t, e),
                            r = parseFloat(this.getStyle(t, "borderTopWidth")) || 0,
                            i = parseFloat(this.getStyle(t, "paddingTop")) || 0,
                            a = parseFloat(this.getStyle(t, "paddingBottom")) || 0;
                        return n + r + (parseFloat(this.getStyle(t, "borderBottomWidth")) || 0) + i + a
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        var n = this.getStyle(t, "height", e);
                        return "auto" === n && (n = t.offsetHeight),
                            parseFloat(n)
                    }
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        if (t && t.getBoundingClientRect) {
                            var n = t.getBoundingClientRect(),
                                r = document.documentElement.clientTop,
                                i = document.documentElement.clientLeft;
                            return {
                                top: n.top - r,
                                bottom: n.bottom - r,
                                left: n.left - i,
                                right: n.right - i
                            }
                        }
                        return e || null
                    }
                },
                function(t, e) {
                    t.exports = function(t, e, n) {
                        if (t) {
                            if (t.addEventListener) return t.addEventListener(e, n, !1),
                                {
                                    remove: function() {
                                        t.removeEventListener(e, n, !1)
                                    }
                                };
                            if (t.attachEvent) return t.attachEvent("on" + e, n),
                                {
                                    remove: function() {
                                        t.detachEvent("on" + e, n)
                                    }
                                }
                        }
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        addEventListener: n(591),
                        createDom: n(447),
                        getBoundingClientRect: n(590),
                        getHeight: n(589),
                        getOuterHeight: n(588),
                        getOuterWidth: n(587),
                        getRatio: n(586),
                        getStyle: n(585),
                        getWidth: n(584),
                        modifyCSS: n(446),
                        requestAnimationFrame: n(445)
                    }
                },
                function(t, e, n) {
                    var r = n(30),
                        i = n(369),
                        a = n(592),
                        o = n(583),
                        s = n(570),
                        u = n(567),
                        c = n(563),
                        h = n(553),
                        f = n(552),
                        l = n(548),
                        p = n(542),
                        d = n(537),
                        g = {
                            DOMUtil: a,
                            DomUtil: a,
                            MatrixUtil: h,
                            PathUtil: l,
                            arrayUtil: o,
                            domUtil: a,
                            eventUtil: s,
                            formatUtil: u,
                            mathUtil: c,
                            matrixUtil: h,
                            objectUtil: f,
                            stringUtil: p,
                            pathUtil: l,
                            typeUtil: d,
                            augment: n(417),
                            clone: n(380),
                            debounce: n(530),
                            deepMix: n(379),
                            each: r,
                            extend: n(416),
                            filter: n(384),
                            group: n(529),
                            groupBy: n(414),
                            groupToMap: n(415),
                            indexOf: n(528),
                            isEmpty: n(413),
                            isEqual: n(378),
                            isEqualWith: n(527),
                            map: n(526),
                            mix: i,
                            pick: n(525),
                            throttle: n(524),
                            toArray: n(367),
                            toString: n(357),
                            uniqueId: n(412)
                        };
                    r([a, o, s, u, c, h, f, l, p, d],
                        function(t) {
                            i(g, t)
                        }),
                        t.exports = g
                },
                function(t, e, n) {
                    var r = n(449),
                        i = n(390),
                        a = n(146),
                        o = n(372),
                        s = n(147),
                        u = {
                            Graph: n(389),
                            Tree: n(455),
                            Util: n(22),
                            Layouts: n(387),
                            G: s,
                            Plugins: {},
                            Components: {},
                            Global: a,
                            Shape: r,
                            registerNode: r.registerNode,
                            registerEdge: r.registerEdge,
                            registerGroup: r.registerGroup,
                            registerGuide: r.registerGuide,
                            registerBehaviour: i.registerBehaviour,
                            version: o,
                            track: function(t) {
                                a.track = t
                            }
                        };
                    n(450),
                        t.exports = u
                }])
        });
//# sourceMappingURL=g6.js.map
