/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var p = function(t, n) {
    return p = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, o) {
        e.__proto__ = o
    } || function(e, o) {
        for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i])
    }, p(t, n)
};

function g(t, n) {
    p(t, n);

    function e() {
        this.constructor = t
    }
    t.prototype = n === null ? Object.create(n) : (e.prototype = n.prototype, new e)
}
var w = function() {
    return w = Object.assign || function(n) {
        for (var e, o = 1, i = arguments.length; o < i; o++) {
            e = arguments[o];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
        }
        return n
    }, w.apply(this, arguments)
};

function O(t, n) {
    var e = {};
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, o = Object.getOwnPropertySymbols(t); i < o.length; i++) n.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (e[o[i]] = t[o[i]]);
    return e
}

function S(t, n, e, o) {
    var i = arguments.length,
        r = i < 3 ? n : o === null ? o = Object.getOwnPropertyDescriptor(n, e) : o,
        a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(t, n, e, o);
    else
        for (var f = t.length - 1; f >= 0; f--)(a = t[f]) && (r = (i < 3 ? a(r) : i > 3 ? a(n, e, r) : a(n, e)) || r);
    return i > 3 && r && Object.defineProperty(n, e, r), r
}

function j(t, n) {
    return function(e, o) {
        n(e, o, t)
    }
}

function P(t, n) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, n)
}

function x(t, n, e, o) {
    function i(r) {
        return r instanceof e ? r : new e(function(a) {
            a(r)
        })
    }
    return new(e || (e = Promise))(function(r, a) {
        function f(l) {
            try {
                u(o.next(l))
            } catch (y) {
                a(y)
            }
        }

        function s(l) {
            try {
                u(o.throw(l))
            } catch (y) {
                a(y)
            }
        }

        function u(l) {
            l.done ? r(l.value) : i(l.value).then(f, s)
        }
        u((o = o.apply(t, n || [])).next())
    })
}

function I(t, n) {
    var e = {
            label: 0,
            sent: function() {
                if (r[0] & 1) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        o, i, r, a;
    return a = {
        next: f(0),
        throw: f(1),
        return: f(2)
    }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function f(u) {
        return function(l) {
            return s([u, l])
        }
    }

    function s(u) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; e;) try {
            if (o = 1, i && (r = u[0] & 2 ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
            switch (i = 0, r && (u = [u[0] & 2, r.value]), u[0]) {
                case 0:
                case 1:
                    r = u;
                    break;
                case 4:
                    return e.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    e.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = e.ops.pop(), e.trys.pop();
                    continue;
                default:
                    if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        e = 0;
                        continue
                    }
                    if (u[0] === 3 && (!r || u[1] > r[0] && u[1] < r[3])) {
                        e.label = u[1];
                        break
                    }
                    if (u[0] === 6 && e.label < r[1]) {
                        e.label = r[1], r = u;
                        break
                    }
                    if (r && e.label < r[2]) {
                        e.label = r[2], e.ops.push(u);
                        break
                    }
                    r[2] && e.ops.pop(), e.trys.pop();
                    continue
            }
            u = n.call(t, e)
        } catch (l) {
            u = [6, l], i = 0
        } finally {
            o = r = 0
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function T(t, n, e, o) {
    o === void 0 && (o = e), t[o] = n[e]
}

function E(t, n) {
    for (var e in t) e !== "default" && !n.hasOwnProperty(e) && (n[e] = t[e])
}

function v(t) {
    var n = typeof Symbol == "function" && Symbol.iterator,
        e = n && t[n],
        o = 0;
    if (e) return e.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && o >= t.length && (t = void 0), {
                value: t && t[o++],
                done: !t
            }
        }
    };
    throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function d(t, n) {
    var e = typeof Symbol == "function" && t[Symbol.iterator];
    if (!e) return t;
    var o = e.call(t),
        i, r = [],
        a;
    try {
        for (;
            (n === void 0 || n-- > 0) && !(i = o.next()).done;) r.push(i.value)
    } catch (f) {
        a = {
            error: f
        }
    } finally {
        try {
            i && !i.done && (e = o.return) && e.call(o)
        } finally {
            if (a) throw a.error
        }
    }
    return r
}

function R() {
    for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(d(arguments[n]));
    return t
}

function A() {
    for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
    for (var o = Array(t), i = 0, n = 0; n < e; n++)
        for (var r = arguments[n], a = 0, f = r.length; a < f; a++, i++) o[i] = r[a];
    return o
}

function h(t) {
    return this instanceof h ? (this.v = t, this) : new h(t)
}

function D(t, n, e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = e.apply(t, n || []),
        i, r = [];
    return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
        return this
    }, i;

    function a(c) {
        o[c] && (i[c] = function(_) {
            return new Promise(function(b, m) {
                r.push([c, _, b, m]) > 1 || f(c, _)
            })
        })
    }

    function f(c, _) {
        try {
            s(o[c](_))
        } catch (b) {
            y(r[0][3], b)
        }
    }

    function s(c) {
        c.value instanceof h ? Promise.resolve(c.value.v).then(u, l) : y(r[0][2], c)
    }

    function u(c) {
        f("next", c)
    }

    function l(c) {
        f("throw", c)
    }

    function y(c, _) {
        c(_), r.shift(), r.length && f(r[0][0], r[0][1])
    }
}

function G(t) {
    var n, e;
    return n = {}, o("next"), o("throw", function(i) {
        throw i
    }), o("return"), n[Symbol.iterator] = function() {
        return this
    }, n;

    function o(i, r) {
        n[i] = t[i] ? function(a) {
            return (e = !e) ? {
                value: h(t[i](a)),
                done: i === "return"
            } : r ? r(a) : a
        } : r
    }
}

function F(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t[Symbol.asyncIterator],
        e;
    return n ? n.call(t) : (t = typeof v == "function" ? v(t) : t[Symbol.iterator](), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
        return this
    }, e);

    function o(r) {
        e[r] = t[r] && function(a) {
            return new Promise(function(f, s) {
                a = t[r](a), i(f, s, a.done, a.value)
            })
        }
    }

    function i(r, a, f, s) {
        Promise.resolve(s).then(function(u) {
            r({
                value: u,
                done: f
            })
        }, a)
    }
}

function q(t, n) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: n
    }) : t.raw = n, t
}

function z(t) {
    if (t && t.__esModule) return t;
    var n = {};
    if (t != null)
        for (var e in t) Object.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    return n.default = t, n
}

function B(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function M(t, n) {
    if (!n.has(t)) throw new TypeError("attempted to get private field on non-instance");
    return n.get(t)
}

function V(t, n, e) {
    if (!n.has(t)) throw new TypeError("attempted to set private field on non-instance");
    return n.set(t, e), e
}
const C = Object.freeze(Object.defineProperty({
    __proto__: null,
    get __assign() {
        return w
    },
    __asyncDelegator: G,
    __asyncGenerator: D,
    __asyncValues: F,
    __await: h,
    __awaiter: x,
    __classPrivateFieldGet: M,
    __classPrivateFieldSet: V,
    __createBinding: T,
    __decorate: S,
    __exportStar: E,
    __extends: g,
    __generator: I,
    __importDefault: B,
    __importStar: z,
    __makeTemplateObject: q,
    __metadata: P,
    __param: j,
    __read: d,
    __rest: O,
    __spread: R,
    __spreadArrays: A,
    __values: v
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    g as _, C as t
};