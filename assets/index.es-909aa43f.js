import {
    cU as ud,
    d as Ir,
    r as Y_,
    d8 as yr,
    d9 as cr,
    da as Wc,
    db as J_,
    e as Q_,
    dc as Tl,
    m as X_
} from "./index-f2e6e0cc.js";
import {
    e as Dr,
    $ as hu
} from "./events-443dd52f.js";
import {
    c as Z_
} from "./_commonjs-dynamic-modules-302442b1.js";
import {
    t as em
} from "./tslib.es6-c2094241.js";
var Go = {};
const Mr = ud(em);
var Es = {};
Object.defineProperty(Es, "__esModule", {
    value: !0
});

function tm(n) {
    if (typeof n != "string") throw new Error(`Cannot safe json parse value of type ${typeof n}`);
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
Es.safeJsonParse = tm;

function rm(n) {
    return typeof n == "string" ? n : JSON.stringify(n, (t, r) => typeof r > "u" ? null : r)
}
Es.safeJsonStringify = rm;
var is = {
        exports: {}
    },
    Cl;

function im() {
    return Cl || (Cl = 1, function() {
        let n;

        function t() {}
        n = t, n.prototype.getItem = function(r) {
            return this.hasOwnProperty(r) ? String(this[r]) : null
        }, n.prototype.setItem = function(r, s) {
            this[r] = String(s)
        }, n.prototype.removeItem = function(r) {
            delete this[r]
        }, n.prototype.clear = function() {
            const r = this;
            Object.keys(r).forEach(function(s) {
                r[s] = void 0, delete r[s]
            })
        }, n.prototype.key = function(r) {
            return r = r || 0, Object.keys(this)[r]
        }, n.prototype.__defineGetter__("length", function() {
            return Object.keys(this).length
        }), typeof Ir < "u" && Ir.localStorage ? is.exports = Ir.localStorage : typeof window < "u" && window.localStorage ? is.exports = window.localStorage : is.exports = new t
    }()), is.exports
}
var Ac = {},
    ns = {},
    Ll;

function nm() {
    if (Ll) return ns;
    Ll = 1, Object.defineProperty(ns, "__esModule", {
        value: !0
    }), ns.IKeyValueStorage = void 0;
    class n {}
    return ns.IKeyValueStorage = n, ns
}
var ss = {},
    Ul;

function sm() {
    if (Ul) return ss;
    Ul = 1, Object.defineProperty(ss, "__esModule", {
        value: !0
    }), ss.parseEntry = void 0;
    const n = Es;

    function t(r) {
        var s;
        return [r[0], n.safeJsonParse((s = r[1]) !== null && s !== void 0 ? s : "")]
    }
    return ss.parseEntry = t, ss
}
var Fl;

function om() {
    return Fl || (Fl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const t = Mr;
        t.__exportStar(nm(), n), t.__exportStar(sm(), n)
    }(Ac)), Ac
}
Object.defineProperty(Go, "__esModule", {
    value: !0
});
Go.KeyValueStorage = void 0;
const An = Mr,
    $l = Es,
    am = An.__importDefault(im()),
    cm = om();
class hd {
    constructor() {
        this.localStorage = am.default
    }
    getKeys() {
        return An.__awaiter(this, void 0, void 0, function*() {
            return Object.keys(this.localStorage)
        })
    }
    getEntries() {
        return An.__awaiter(this, void 0, void 0, function*() {
            return Object.entries(this.localStorage).map(cm.parseEntry)
        })
    }
    getItem(t) {
        return An.__awaiter(this, void 0, void 0, function*() {
            const r = this.localStorage.getItem(t);
            if (r !== null) return $l.safeJsonParse(r)
        })
    }
    setItem(t, r) {
        return An.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.setItem(t, $l.safeJsonStringify(r))
        })
    }
    removeItem(t) {
        return An.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.removeItem(t)
        })
    }
}
Go.KeyValueStorage = hd;
var um = Go.default = hd,
    Ln = {},
    os = {},
    ye = {},
    Nc = {},
    as = {},
    Dl;

function hm() {
    if (Dl) return as;
    Dl = 1, Object.defineProperty(as, "__esModule", {
        value: !0
    }), as.delay = void 0;

    function n(t) {
        return new Promise(r => {
            setTimeout(() => {
                r(!0)
            }, t)
        })
    }
    return as.delay = n, as
}
var Ji = {},
    Rc = {},
    Qi = {},
    Ml;

function lm() {
    return Ml || (Ml = 1, Object.defineProperty(Qi, "__esModule", {
        value: !0
    }), Qi.ONE_THOUSAND = Qi.ONE_HUNDRED = void 0, Qi.ONE_HUNDRED = 100, Qi.ONE_THOUSAND = 1e3), Qi
}
var Tc = {},
    jl;

function fm() {
    return jl || (jl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ONE_YEAR = n.FOUR_WEEKS = n.THREE_WEEKS = n.TWO_WEEKS = n.ONE_WEEK = n.THIRTY_DAYS = n.SEVEN_DAYS = n.FIVE_DAYS = n.THREE_DAYS = n.ONE_DAY = n.TWENTY_FOUR_HOURS = n.TWELVE_HOURS = n.SIX_HOURS = n.THREE_HOURS = n.ONE_HOUR = n.SIXTY_MINUTES = n.THIRTY_MINUTES = n.TEN_MINUTES = n.FIVE_MINUTES = n.ONE_MINUTE = n.SIXTY_SECONDS = n.THIRTY_SECONDS = n.TEN_SECONDS = n.FIVE_SECONDS = n.ONE_SECOND = void 0, n.ONE_SECOND = 1, n.FIVE_SECONDS = 5, n.TEN_SECONDS = 10, n.THIRTY_SECONDS = 30, n.SIXTY_SECONDS = 60, n.ONE_MINUTE = n.SIXTY_SECONDS, n.FIVE_MINUTES = n.ONE_MINUTE * 5, n.TEN_MINUTES = n.ONE_MINUTE * 10, n.THIRTY_MINUTES = n.ONE_MINUTE * 30, n.SIXTY_MINUTES = n.ONE_MINUTE * 60, n.ONE_HOUR = n.SIXTY_MINUTES, n.THREE_HOURS = n.ONE_HOUR * 3, n.SIX_HOURS = n.ONE_HOUR * 6, n.TWELVE_HOURS = n.ONE_HOUR * 12, n.TWENTY_FOUR_HOURS = n.ONE_HOUR * 24, n.ONE_DAY = n.TWENTY_FOUR_HOURS, n.THREE_DAYS = n.ONE_DAY * 3, n.FIVE_DAYS = n.ONE_DAY * 5, n.SEVEN_DAYS = n.ONE_DAY * 7, n.THIRTY_DAYS = n.ONE_DAY * 30, n.ONE_WEEK = n.SEVEN_DAYS, n.TWO_WEEKS = n.ONE_WEEK * 2, n.THREE_WEEKS = n.ONE_WEEK * 3, n.FOUR_WEEKS = n.ONE_WEEK * 4, n.ONE_YEAR = n.ONE_DAY * 365
    }(Tc)), Tc
}
var ql;

function ld() {
    return ql || (ql = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const t = Mr;
        t.__exportStar(lm(), n), t.__exportStar(fm(), n)
    }(Rc)), Rc
}
var Hl;

function dm() {
    if (Hl) return Ji;
    Hl = 1, Object.defineProperty(Ji, "__esModule", {
        value: !0
    }), Ji.fromMiliseconds = Ji.toMiliseconds = void 0;
    const n = ld();

    function t(s) {
        return s * n.ONE_THOUSAND
    }
    Ji.toMiliseconds = t;

    function r(s) {
        return Math.floor(s / n.ONE_THOUSAND)
    }
    return Ji.fromMiliseconds = r, Ji
}
var zl;

function pm() {
    return zl || (zl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const t = Mr;
        t.__exportStar(hm(), n), t.__exportStar(dm(), n)
    }(Nc)), Nc
}
var Pn = {},
    Kl;

function gm() {
    if (Kl) return Pn;
    Kl = 1, Object.defineProperty(Pn, "__esModule", {
        value: !0
    }), Pn.Watch = void 0;
    class n {
        constructor() {
            this.timestamps = new Map
        }
        start(r) {
            if (this.timestamps.has(r)) throw new Error(`Watch already started for label: ${r}`);
            this.timestamps.set(r, {
                started: Date.now()
            })
        }
        stop(r) {
            const s = this.get(r);
            if (typeof s.elapsed < "u") throw new Error(`Watch already stopped for label: ${r}`);
            const a = Date.now() - s.started;
            this.timestamps.set(r, {
                started: s.started,
                elapsed: a
            })
        }
        get(r) {
            const s = this.timestamps.get(r);
            if (typeof s > "u") throw new Error(`No timestamp found for label: ${r}`);
            return s
        }
        elapsed(r) {
            const s = this.get(r);
            return s.elapsed || Date.now() - s.started
        }
    }
    return Pn.Watch = n, Pn.default = n, Pn
}
var Cc = {},
    cs = {},
    Bl;

function vm() {
    if (Bl) return cs;
    Bl = 1, Object.defineProperty(cs, "__esModule", {
        value: !0
    }), cs.IWatch = void 0;
    class n {}
    return cs.IWatch = n, cs
}
var kl;

function ym() {
    return kl || (kl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Mr.__exportStar(vm(), n)
    }(Cc)), Cc
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    const t = Mr;
    t.__exportStar(pm(), n), t.__exportStar(gm(), n), t.__exportStar(ym(), n), t.__exportStar(ld(), n)
})(ye);
var Lc = {},
    us = {};
let tn = class {};
const _m = Object.freeze(Object.defineProperty({
        __proto__: null,
        IEvents: tn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mm = ud(_m);
var Vl;

function wm() {
    if (Vl) return us;
    Vl = 1, Object.defineProperty(us, "__esModule", {
        value: !0
    }), us.IHeartBeat = void 0;
    const n = mm;
    class t extends n.IEvents {
        constructor(s) {
            super()
        }
    }
    return us.IHeartBeat = t, us
}
var Gl;

function fd() {
    return Gl || (Gl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Mr.__exportStar(wm(), n)
    }(Lc)), Lc
}
var Uc = {},
    Xi = {},
    Wl;

function bm() {
    if (Wl) return Xi;
    Wl = 1, Object.defineProperty(Xi, "__esModule", {
        value: !0
    }), Xi.HEARTBEAT_EVENTS = Xi.HEARTBEAT_INTERVAL = void 0;
    const n = ye;
    return Xi.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, Xi.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    }, Xi
}
var Yl;

function dd() {
    return Yl || (Yl = 1, function(n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Mr.__exportStar(bm(), n)
    }(Uc)), Uc
}
var Jl;

function Em() {
    if (Jl) return os;
    Jl = 1, Object.defineProperty(os, "__esModule", {
        value: !0
    }), os.HeartBeat = void 0;
    const n = Mr,
        t = Dr,
        r = ye,
        s = fd(),
        a = dd();
    class l extends s.IHeartBeat {
        constructor(d) {
            super(d), this.events = new t.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (d == null ? void 0 : d.interval) || a.HEARTBEAT_INTERVAL
        }
        static init(d) {
            return n.__awaiter(this, void 0, void 0, function*() {
                const v = new l(d);
                return yield v.init(), v
            })
        }
        init() {
            return n.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(d, v) {
            this.events.on(d, v)
        }
        once(d, v) {
            this.events.once(d, v)
        }
        off(d, v) {
            this.events.off(d, v)
        }
        removeListener(d, v) {
            this.events.removeListener(d, v)
        }
        initialize() {
            return n.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(a.HEARTBEAT_EVENTS.pulse)
        }
    }
    return os.HeartBeat = l, os
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    const t = Mr;
    t.__exportStar(Em(), n), t.__exportStar(fd(), n), t.__exportStar(dd(), n)
})(Ln);
var Ze = {},
    Fc, Ql;

function Sm() {
    if (Ql) return Fc;
    Ql = 1;

    function n(r) {
        try {
            return JSON.stringify(r)
        } catch {
            return '"[Circular]"'
        }
    }
    Fc = t;

    function t(r, s, a) {
        var l = a && a.stringify || n,
            p = 1;
        if (typeof r == "object" && r !== null) {
            var d = s.length + p;
            if (d === 1) return r;
            var v = new Array(d);
            v[0] = l(r);
            for (var b = 1; b < d; b++) v[b] = l(s[b]);
            return v.join(" ")
        }
        if (typeof r != "string") return r;
        var S = s.length;
        if (S === 0) return r;
        for (var A = "", $ = 1 - p, R = -1, H = r && r.length || 0, K = 0; K < H;) {
            if (r.charCodeAt(K) === 37 && K + 1 < H) {
                switch (R = R > -1 ? R : 0, r.charCodeAt(K + 1)) {
                    case 100:
                    case 102:
                        if ($ >= S || s[$] == null) break;
                        R < K && (A += r.slice(R, K)), A += Number(s[$]), R = K + 2, K++;
                        break;
                    case 105:
                        if ($ >= S || s[$] == null) break;
                        R < K && (A += r.slice(R, K)), A += Math.floor(Number(s[$])), R = K + 2, K++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if ($ >= S || s[$] === void 0) break;
                        R < K && (A += r.slice(R, K));
                        var B = typeof s[$];
                        if (B === "string") {
                            A += "'" + s[$] + "'", R = K + 2, K++;
                            break
                        }
                        if (B === "function") {
                            A += s[$].name || "<anonymous>", R = K + 2, K++;
                            break
                        }
                        A += l(s[$]), R = K + 2, K++;
                        break;
                    case 115:
                        if ($ >= S) break;
                        R < K && (A += r.slice(R, K)), A += String(s[$]), R = K + 2, K++;
                        break;
                    case 37:
                        R < K && (A += r.slice(R, K)), A += "%", R = K + 2, K++, $--;
                        break
                }++$
            }++K
        }
        return R === -1 ? r : (R < H && (A += r.slice(R)), A)
    }
    return Fc
}
var $c, Xl;

function Im() {
    if (Xl) return $c;
    Xl = 1;
    const n = Sm();
    $c = a;
    const t = P().console || {},
        r = {
            mapHttpRequest: H,
            mapHttpResponse: H,
            wrapRequestSerializer: K,
            wrapResponseSerializer: K,
            wrapErrorSerializer: K,
            req: H,
            res: H,
            err: $
        };

    function s(m, u) {
        return Array.isArray(m) ? m.filter(function(G) {
            return G !== "!stdSerializers.err"
        }) : m === !0 ? Object.keys(u) : !1
    }

    function a(m) {
        m = m || {}, m.browser = m.browser || {};
        const u = m.browser.transmit;
        if (u && typeof u.send != "function") throw Error("pino: transmit option must have a send function");
        const _ = m.browser.write || t;
        m.browser.write && (m.browser.asObject = !0);
        const G = m.serializers || {},
            V = s(m.browser.serialize, G);
        let se = m.browser.serialize;
        Array.isArray(m.browser.serialize) && m.browser.serialize.indexOf("!stdSerializers.err") > -1 && (se = !1);
        const ce = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof _ == "function" && (_.error = _.fatal = _.warn = _.info = _.debug = _.trace = _), m.enabled === !1 && (m.level = "silent");
        const ge = m.level || "info",
            C = Object.create(_);
        C.log || (C.log = B), Object.defineProperty(C, "levelVal", {
            get: le
        }), Object.defineProperty(C, "level", {
            get: te,
            set: W
        });
        const q = {
            transmit: u,
            serialize: V,
            asObject: m.browser.asObject,
            levels: ce,
            timestamp: R(m)
        };
        C.levels = a.levels, C.level = ge, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = B, C.serializers = G, C._serialize = V, C._stdErrSerialize = se, C.child = ee, u && (C._logEvent = A());

        function le() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }

        function te() {
            return this._level
        }

        function W(Y) {
            if (Y !== "silent" && !this.levels.values[Y]) throw Error("unknown level " + Y);
            this._level = Y, l(q, C, "error", "log"), l(q, C, "fatal", "error"), l(q, C, "warn", "error"), l(q, C, "info", "log"), l(q, C, "debug", "log"), l(q, C, "trace", "log")
        }

        function ee(Y, re) {
            if (!Y) throw new Error("missing bindings for child Pino");
            re = re || {}, V && Y.serializers && (re.serializers = Y.serializers);
            const Oe = re.serializers;
            if (V && Oe) {
                var ie = Object.assign({}, G, Oe),
                    we = m.browser.serialize === !0 ? Object.keys(ie) : V;
                delete Y.serializers, v([Y], we, ie, this._stdErrSerialize)
            }

            function he(_e) {
                this._childLevel = (_e._childLevel | 0) + 1, this.error = b(_e, Y, "error"), this.fatal = b(_e, Y, "fatal"), this.warn = b(_e, Y, "warn"), this.info = b(_e, Y, "info"), this.debug = b(_e, Y, "debug"), this.trace = b(_e, Y, "trace"), ie && (this.serializers = ie, this._serialize = we), u && (this._logEvent = A([].concat(_e._logEvent.bindings, Y)))
            }
            return he.prototype = this, new he(this)
        }
        return C
    }
    a.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    }, a.stdSerializers = r, a.stdTimeFunctions = Object.assign({}, {
        nullTime: oe,
        epochTime: T,
        unixTime: D,
        isoTime: I
    });

    function l(m, u, _, G) {
        const V = Object.getPrototypeOf(u);
        u[_] = u.levelVal > u.levels.values[_] ? B : V[_] ? V[_] : t[_] || t[G] || B, p(m, u, _)
    }

    function p(m, u, _) {
        !m.transmit && u[_] === B || (u[_] = function(G) {
            return function() {
                const se = m.timestamp(),
                    ce = new Array(arguments.length),
                    ge = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
                for (var C = 0; C < ce.length; C++) ce[C] = arguments[C];
                if (m.serialize && !m.asObject && v(ce, this._serialize, this.serializers, this._stdErrSerialize), m.asObject ? G.call(ge, d(this, _, ce, se)) : G.apply(ge, ce), m.transmit) {
                    const q = m.transmit.level || u.level,
                        le = a.levels.values[q],
                        te = a.levels.values[_];
                    if (te < le) return;
                    S(this, {
                        ts: se,
                        methodLevel: _,
                        methodValue: te,
                        transmitLevel: q,
                        transmitValue: a.levels.values[m.transmit.level || u.level],
                        send: m.transmit.send,
                        val: u.levelVal
                    }, ce)
                }
            }
        }(u[_]))
    }

    function d(m, u, _, G) {
        m._serialize && v(_, m._serialize, m.serializers, m._stdErrSerialize);
        const V = _.slice();
        let se = V[0];
        const ce = {};
        G && (ce.time = G), ce.level = a.levels.values[u];
        let ge = (m._childLevel | 0) + 1;
        if (ge < 1 && (ge = 1), se !== null && typeof se == "object") {
            for (; ge-- && typeof V[0] == "object";) Object.assign(ce, V.shift());
            se = V.length ? n(V.shift(), V) : void 0
        } else typeof se == "string" && (se = n(V.shift(), V));
        return se !== void 0 && (ce.msg = se), ce
    }

    function v(m, u, _, G) {
        for (const V in m)
            if (G && m[V] instanceof Error) m[V] = a.stdSerializers.err(m[V]);
            else if (typeof m[V] == "object" && !Array.isArray(m[V]))
            for (const se in m[V]) u && u.indexOf(se) > -1 && se in _ && (m[V][se] = _[se](m[V][se]))
    }

    function b(m, u, _) {
        return function() {
            const G = new Array(1 + arguments.length);
            G[0] = u;
            for (var V = 1; V < G.length; V++) G[V] = arguments[V - 1];
            return m[_].apply(this, G)
        }
    }

    function S(m, u, _) {
        const G = u.send,
            V = u.ts,
            se = u.methodLevel,
            ce = u.methodValue,
            ge = u.val,
            C = m._logEvent.bindings;
        v(_, m._serialize || Object.keys(m.serializers), m.serializers, m._stdErrSerialize === void 0 ? !0 : m._stdErrSerialize), m._logEvent.ts = V, m._logEvent.messages = _.filter(function(q) {
            return C.indexOf(q) === -1
        }), m._logEvent.level.label = se, m._logEvent.level.value = ce, G(se, m._logEvent, ge), m._logEvent = A(C)
    }

    function A(m) {
        return {
            ts: 0,
            messages: [],
            bindings: m || [],
            level: {
                label: "",
                value: 0
            }
        }
    }

    function $(m) {
        const u = {
            type: m.constructor.name,
            msg: m.message,
            stack: m.stack
        };
        for (const _ in m) u[_] === void 0 && (u[_] = m[_]);
        return u
    }

    function R(m) {
        return typeof m.timestamp == "function" ? m.timestamp : m.timestamp === !1 ? oe : T
    }

    function H() {
        return {}
    }

    function K(m) {
        return m
    }

    function B() {}

    function oe() {
        return !1
    }

    function T() {
        return Date.now()
    }

    function D() {
        return Math.round(Date.now() / 1e3)
    }

    function I() {
        return new Date(Date.now()).toISOString()
    }

    function P() {
        function m(u) {
            return typeof u < "u" && u
        }
        try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis, this.globalThis = this
                },
                configurable: !0
            }), globalThis
        } catch {
            return m(self) || m(window) || m(this) || {}
        }
    }
    return $c
}
var Zi = {},
    Zl;

function pd() {
    return Zl || (Zl = 1, Object.defineProperty(Zi, "__esModule", {
        value: !0
    }), Zi.PINO_CUSTOM_CONTEXT_KEY = Zi.PINO_LOGGER_DEFAULTS = void 0, Zi.PINO_LOGGER_DEFAULTS = {
        level: "info"
    }, Zi.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Zi
}
var sr = {},
    ef;

function xm() {
    if (ef) return sr;
    ef = 1, Object.defineProperty(sr, "__esModule", {
        value: !0
    }), sr.generateChildLogger = sr.formatChildLoggerContext = sr.getLoggerContext = sr.setBrowserLoggerContext = sr.getBrowserLoggerContext = sr.getDefaultLoggerOptions = void 0;
    const n = pd();

    function t(d) {
        return Object.assign(Object.assign({}, d), {
            level: (d == null ? void 0 : d.level) || n.PINO_LOGGER_DEFAULTS.level
        })
    }
    sr.getDefaultLoggerOptions = t;

    function r(d, v = n.PINO_CUSTOM_CONTEXT_KEY) {
        return d[v] || ""
    }
    sr.getBrowserLoggerContext = r;

    function s(d, v, b = n.PINO_CUSTOM_CONTEXT_KEY) {
        return d[b] = v, d
    }
    sr.setBrowserLoggerContext = s;

    function a(d, v = n.PINO_CUSTOM_CONTEXT_KEY) {
        let b = "";
        return typeof d.bindings > "u" ? b = r(d, v) : b = d.bindings().context || "", b
    }
    sr.getLoggerContext = a;

    function l(d, v, b = n.PINO_CUSTOM_CONTEXT_KEY) {
        const S = a(d, b);
        return S.trim() ? `${S}/${v}` : v
    }
    sr.formatChildLoggerContext = l;

    function p(d, v, b = n.PINO_CUSTOM_CONTEXT_KEY) {
        const S = l(d, v, b),
            A = d.child({
                context: S
            });
        return s(A, S, b)
    }
    return sr.generateChildLogger = p, sr
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.pino = void 0;
    const t = Mr,
        r = t.__importDefault(Im());
    Object.defineProperty(n, "pino", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), t.__exportStar(pd(), n), t.__exportStar(xm(), n)
})(Ze);
class Om extends tn {
    constructor(t) {
        super(), this.opts = t, this.protocol = "wc", this.version = 2
    }
}
let Pm = class extends tn {
    constructor(t, r) {
        super(), this.core = t, this.logger = r, this.records = new Map
    }
};
class Am {
    constructor(t, r) {
        this.logger = t, this.core = r
    }
}
let Nm = class extends tn {
        constructor(t, r) {
            super(), this.relayer = t, this.logger = r
        }
    },
    Rm = class extends tn {
        constructor(t) {
            super()
        }
    },
    Tm = class {
        constructor(t, r, s, a) {
            this.core = t, this.logger = r, this.name = s
        }
    };
class Cm extends tn {
    constructor(t, r) {
        super(), this.relayer = t, this.logger = r
    }
}
let Lm = class extends tn {
        constructor(t, r) {
            super(), this.core = t, this.logger = r
        }
    },
    Um = class {
        constructor(t, r) {
            this.projectId = t, this.logger = r
        }
    },
    Fm = class {
        constructor(t) {
            this.opts = t, this.protocol = "wc", this.version = 2
        }
    },
    $m = class {
        constructor(t) {
            this.client = t
        }
    };
const Dm = n => JSON.stringify(n, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r),
    Mm = n => {
        const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            r = n.replace(t, '$1"$2n"$3');
        return JSON.parse(r, (s, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a)
    };

function lu(n) {
    if (typeof n != "string") throw new Error(`Cannot safe json parse value of type ${typeof n}`);
    try {
        return Mm(n)
    } catch {
        return n
    }
}

function ms(n) {
    return typeof n == "string" ? n : Dm(n) || ""
}
var fu = {},
    Un = {},
    Wo = {},
    Yo = {};
Object.defineProperty(Yo, "__esModule", {
    value: !0
});
Yo.BrowserRandomSource = void 0;
const tf = 65536;
class jm {
    constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
        t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const r = new Uint8Array(t);
        for (let s = 0; s < r.length; s += tf) this._crypto.getRandomValues(r.subarray(s, s + Math.min(r.length - s, tf)));
        return r
    }
}
Yo.BrowserRandomSource = jm;
var Jo = {},
    Or = {};
Object.defineProperty(Or, "__esModule", {
    value: !0
});

function qm(n) {
    for (var t = 0; t < n.length; t++) n[t] = 0;
    return n
}
Or.wipe = qm;
Object.defineProperty(Jo, "__esModule", {
    value: !0
});
Jo.NodeRandomSource = void 0;
const Hm = Or;
class zm {
    constructor() {
        if (this.isAvailable = !1, this.isInstantiated = !1, typeof Z_ < "u") {
            const t = Y_;
            t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
        }
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let r = this._crypto.randomBytes(t);
        if (r.length !== t) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const s = new Uint8Array(t);
        for (let a = 0; a < s.length; a++) s[a] = r[a];
        return (0, Hm.wipe)(r), s
    }
}
Jo.NodeRandomSource = zm;
Object.defineProperty(Wo, "__esModule", {
    value: !0
});
Wo.SystemRandomSource = void 0;
const Km = Yo,
    Bm = Jo;
class km {
    constructor() {
        if (this.isAvailable = !1, this.name = "", this._source = new Km.BrowserRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Browser";
            return
        }
        if (this._source = new Bm.NodeRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Node";
            return
        }
    }
    randomBytes(t) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(t)
    }
}
Wo.SystemRandomSource = km;
var $e = {},
    gd = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });

    function t(d, v) {
        var b = d >>> 16 & 65535,
            S = d & 65535,
            A = v >>> 16 & 65535,
            $ = v & 65535;
        return S * $ + (b * $ + S * A << 16 >>> 0) | 0
    }
    n.mul = Math.imul || t;

    function r(d, v) {
        return d + v | 0
    }
    n.add = r;

    function s(d, v) {
        return d - v | 0
    }
    n.sub = s;

    function a(d, v) {
        return d << v | d >>> 32 - v
    }
    n.rotl = a;

    function l(d, v) {
        return d << 32 - v | d >>> v
    }
    n.rotr = l;

    function p(d) {
        return typeof d == "number" && isFinite(d) && Math.floor(d) === d
    }
    n.isInteger = Number.isInteger || p, n.MAX_SAFE_INTEGER = 9007199254740991, n.isSafeInteger = function(d) {
        return n.isInteger(d) && d >= -n.MAX_SAFE_INTEGER && d <= n.MAX_SAFE_INTEGER
    }
})(gd);
Object.defineProperty($e, "__esModule", {
    value: !0
});
var vd = gd;

function Vm(n, t) {
    return t === void 0 && (t = 0), (n[t + 0] << 8 | n[t + 1]) << 16 >> 16
}
$e.readInt16BE = Vm;

function Gm(n, t) {
    return t === void 0 && (t = 0), (n[t + 0] << 8 | n[t + 1]) >>> 0
}
$e.readUint16BE = Gm;

function Wm(n, t) {
    return t === void 0 && (t = 0), (n[t + 1] << 8 | n[t]) << 16 >> 16
}
$e.readInt16LE = Wm;

function Ym(n, t) {
    return t === void 0 && (t = 0), (n[t + 1] << 8 | n[t]) >>> 0
}
$e.readUint16LE = Ym;

function yd(n, t, r) {
    return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = n >>> 8, t[r + 1] = n >>> 0, t
}
$e.writeUint16BE = yd;
$e.writeInt16BE = yd;

function _d(n, t, r) {
    return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = n >>> 0, t[r + 1] = n >>> 8, t
}
$e.writeUint16LE = _d;
$e.writeInt16LE = _d;

function Yc(n, t) {
    return t === void 0 && (t = 0), n[t] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3]
}
$e.readInt32BE = Yc;

function Jc(n, t) {
    return t === void 0 && (t = 0), (n[t] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3]) >>> 0
}
$e.readUint32BE = Jc;

function Qc(n, t) {
    return t === void 0 && (t = 0), n[t + 3] << 24 | n[t + 2] << 16 | n[t + 1] << 8 | n[t]
}
$e.readInt32LE = Qc;

function Xc(n, t) {
    return t === void 0 && (t = 0), (n[t + 3] << 24 | n[t + 2] << 16 | n[t + 1] << 8 | n[t]) >>> 0
}
$e.readUint32LE = Xc;

function qo(n, t, r) {
    return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = n >>> 24, t[r + 1] = n >>> 16, t[r + 2] = n >>> 8, t[r + 3] = n >>> 0, t
}
$e.writeUint32BE = qo;
$e.writeInt32BE = qo;

function Ho(n, t, r) {
    return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = n >>> 0, t[r + 1] = n >>> 8, t[r + 2] = n >>> 16, t[r + 3] = n >>> 24, t
}
$e.writeUint32LE = Ho;
$e.writeInt32LE = Ho;

function Jm(n, t) {
    t === void 0 && (t = 0);
    var r = Yc(n, t),
        s = Yc(n, t + 4);
    return r * 4294967296 + s - (s >> 31) * 4294967296
}
$e.readInt64BE = Jm;

function Qm(n, t) {
    t === void 0 && (t = 0);
    var r = Jc(n, t),
        s = Jc(n, t + 4);
    return r * 4294967296 + s
}
$e.readUint64BE = Qm;

function Xm(n, t) {
    t === void 0 && (t = 0);
    var r = Qc(n, t),
        s = Qc(n, t + 4);
    return s * 4294967296 + r - (r >> 31) * 4294967296
}
$e.readInt64LE = Xm;

function Zm(n, t) {
    t === void 0 && (t = 0);
    var r = Xc(n, t),
        s = Xc(n, t + 4);
    return s * 4294967296 + r
}
$e.readUint64LE = Zm;

function md(n, t, r) {
    return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), qo(n / 4294967296 >>> 0, t, r), qo(n >>> 0, t, r + 4), t
}
$e.writeUint64BE = md;
$e.writeInt64BE = md;

function wd(n, t, r) {
    return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Ho(n >>> 0, t, r), Ho(n / 4294967296 >>> 0, t, r + 4), t
}
$e.writeUint64LE = wd;
$e.writeInt64LE = wd;

function ew(n, t, r) {
    if (r === void 0 && (r = 0), n % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (n / 8 > t.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
    for (var s = 0, a = 1, l = n / 8 + r - 1; l >= r; l--) s += t[l] * a, a *= 256;
    return s
}
$e.readUintBE = ew;

function tw(n, t, r) {
    if (r === void 0 && (r = 0), n % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (n / 8 > t.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
    for (var s = 0, a = 1, l = r; l < r + n / 8; l++) s += t[l] * a, a *= 256;
    return s
}
$e.readUintLE = tw;

function rw(n, t, r, s) {
    if (r === void 0 && (r = new Uint8Array(n / 8)), s === void 0 && (s = 0), n % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!vd.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
    for (var a = 1, l = n / 8 + s - 1; l >= s; l--) r[l] = t / a & 255, a *= 256;
    return r
}
$e.writeUintBE = rw;

function iw(n, t, r, s) {
    if (r === void 0 && (r = new Uint8Array(n / 8)), s === void 0 && (s = 0), n % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!vd.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
    for (var a = 1, l = s; l < s + n / 8; l++) r[l] = t / a & 255, a *= 256;
    return r
}
$e.writeUintLE = iw;

function nw(n, t) {
    t === void 0 && (t = 0);
    var r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.getFloat32(t)
}
$e.readFloat32BE = nw;

function sw(n, t) {
    t === void 0 && (t = 0);
    var r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.getFloat32(t, !0)
}
$e.readFloat32LE = sw;

function ow(n, t) {
    t === void 0 && (t = 0);
    var r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.getFloat64(t)
}
$e.readFloat64BE = ow;

function aw(n, t) {
    t === void 0 && (t = 0);
    var r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.getFloat64(t, !0)
}
$e.readFloat64LE = aw;

function cw(n, t, r) {
    t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
    var s = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return s.setFloat32(r, n), t
}
$e.writeFloat32BE = cw;

function uw(n, t, r) {
    t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
    var s = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return s.setFloat32(r, n, !0), t
}
$e.writeFloat32LE = uw;

function hw(n, t, r) {
    t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
    var s = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return s.setFloat64(r, n), t
}
$e.writeFloat64BE = hw;

function lw(n, t, r) {
    t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
    var s = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return s.setFloat64(r, n, !0), t
}
$e.writeFloat64LE = lw;
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.randomStringForEntropy = n.randomString = n.randomUint32 = n.randomBytes = n.defaultRandomSource = void 0;
    const t = Wo,
        r = $e,
        s = Or;
    n.defaultRandomSource = new t.SystemRandomSource;

    function a(b, S = n.defaultRandomSource) {
        return S.randomBytes(b)
    }
    n.randomBytes = a;

    function l(b = n.defaultRandomSource) {
        const S = a(4, b),
            A = (0, r.readUint32LE)(S);
        return (0, s.wipe)(S), A
    }
    n.randomUint32 = l;
    const p = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function d(b, S = p, A = n.defaultRandomSource) {
        if (S.length < 2) throw new Error("randomString charset is too short");
        if (S.length > 256) throw new Error("randomString charset is too long");
        let $ = "";
        const R = S.length,
            H = 256 - 256 % R;
        for (; b > 0;) {
            const K = a(Math.ceil(b * 256 / H), A);
            for (let B = 0; B < K.length && b > 0; B++) {
                const oe = K[B];
                oe < H && ($ += S.charAt(oe % R), b--)
            }(0, s.wipe)(K)
        }
        return $
    }
    n.randomString = d;

    function v(b, S = p, A = n.defaultRandomSource) {
        const $ = Math.ceil(b / (Math.log(S.length) / Math.LN2));
        return d($, S, A)
    }
    n.randomStringForEntropy = v
})(Un);
var bd = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = $e,
        r = Or;
    n.DIGEST_LENGTH = 64, n.BLOCK_SIZE = 128;
    var s = function() {
        function d() {
            this.digestLength = n.DIGEST_LENGTH, this.blockSize = n.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return d.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, d.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, d.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset()
        }, d.prototype.update = function(v, b) {
            if (b === void 0 && (b = v.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var S = 0;
            if (this._bytesHashed += b, this._bufferLength > 0) {
                for (; this._bufferLength < n.BLOCK_SIZE && b > 0;) this._buffer[this._bufferLength++] = v[S++], b--;
                this._bufferLength === this.blockSize && (l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (b >= this.blockSize && (S = l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, v, S, b), b %= this.blockSize); b > 0;) this._buffer[this._bufferLength++] = v[S++], b--;
            return this
        }, d.prototype.finish = function(v) {
            if (!this._finished) {
                var b = this._bytesHashed,
                    S = this._bufferLength,
                    A = b / 536870912 | 0,
                    $ = b << 3,
                    R = b % 128 < 112 ? 128 : 256;
                this._buffer[S] = 128;
                for (var H = S + 1; H < R - 8; H++) this._buffer[H] = 0;
                t.writeUint32BE(A, this._buffer, R - 8), t.writeUint32BE($, this._buffer, R - 4), l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, R), this._finished = !0
            }
            for (var H = 0; H < this.digestLength / 8; H++) t.writeUint32BE(this._stateHi[H], v, H * 8), t.writeUint32BE(this._stateLo[H], v, H * 8 + 4);
            return this
        }, d.prototype.digest = function() {
            var v = new Uint8Array(this.digestLength);
            return this.finish(v), v
        }, d.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, d.prototype.restoreState = function(v) {
            return this._stateHi.set(v.stateHi), this._stateLo.set(v.stateLo), this._bufferLength = v.bufferLength, v.buffer && this._buffer.set(v.buffer), this._bytesHashed = v.bytesHashed, this._finished = !1, this
        }, d.prototype.cleanSavedState = function(v) {
            r.wipe(v.stateHi), r.wipe(v.stateLo), v.buffer && r.wipe(v.buffer), v.bufferLength = 0, v.bytesHashed = 0
        }, d
    }();
    n.SHA512 = s;
    var a = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function l(d, v, b, S, A, $, R) {
        for (var H = b[0], K = b[1], B = b[2], oe = b[3], T = b[4], D = b[5], I = b[6], P = b[7], m = S[0], u = S[1], _ = S[2], G = S[3], V = S[4], se = S[5], ce = S[6], ge = S[7], C, q, le, te, W, ee, Y, re; R >= 128;) {
            for (var Oe = 0; Oe < 16; Oe++) {
                var ie = 8 * Oe + $;
                d[Oe] = t.readUint32BE(A, ie), v[Oe] = t.readUint32BE(A, ie + 4)
            }
            for (var Oe = 0; Oe < 80; Oe++) {
                var we = H,
                    he = K,
                    _e = B,
                    j = oe,
                    M = T,
                    N = D,
                    h = I,
                    x = P,
                    ne = m,
                    fe = u,
                    Ie = _,
                    ze = G,
                    ke = V,
                    De = se,
                    pt = ce,
                    gt = ge;
                if (C = P, q = ge, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = (T >>> 14 | V << 32 - 14) ^ (T >>> 18 | V << 32 - 18) ^ (V >>> 41 - 32 | T << 32 - (41 - 32)), q = (V >>> 14 | T << 32 - 14) ^ (V >>> 18 | T << 32 - 18) ^ (T >>> 41 - 32 | V << 32 - (41 - 32)), W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, C = T & D ^ ~T & I, q = V & se ^ ~V & ce, W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, C = a[Oe * 2], q = a[Oe * 2 + 1], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, C = d[Oe % 16], q = v[Oe % 16], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, le = Y & 65535 | re << 16, te = W & 65535 | ee << 16, C = le, q = te, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = (H >>> 28 | m << 32 - 28) ^ (m >>> 34 - 32 | H << 32 - (34 - 32)) ^ (m >>> 39 - 32 | H << 32 - (39 - 32)), q = (m >>> 28 | H << 32 - 28) ^ (H >>> 34 - 32 | m << 32 - (34 - 32)) ^ (H >>> 39 - 32 | m << 32 - (39 - 32)), W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, C = H & K ^ H & B ^ K & B, q = m & u ^ m & _ ^ u & _, W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, x = Y & 65535 | re << 16, gt = W & 65535 | ee << 16, C = j, q = ze, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = le, q = te, W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, j = Y & 65535 | re << 16, ze = W & 65535 | ee << 16, K = we, B = he, oe = _e, T = j, D = M, I = N, P = h, H = x, u = ne, _ = fe, G = Ie, V = ze, se = ke, ce = De, ge = pt, m = gt, Oe % 16 === 15)
                    for (var ie = 0; ie < 16; ie++) C = d[ie], q = v[ie], W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = d[(ie + 9) % 16], q = v[(ie + 9) % 16], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, le = d[(ie + 1) % 16], te = v[(ie + 1) % 16], C = (le >>> 1 | te << 32 - 1) ^ (le >>> 8 | te << 32 - 8) ^ le >>> 7, q = (te >>> 1 | le << 32 - 1) ^ (te >>> 8 | le << 32 - 8) ^ (te >>> 7 | le << 32 - 7), W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, le = d[(ie + 14) % 16], te = v[(ie + 14) % 16], C = (le >>> 19 | te << 32 - 19) ^ (te >>> 61 - 32 | le << 32 - (61 - 32)) ^ le >>> 6, q = (te >>> 19 | le << 32 - 19) ^ (le >>> 61 - 32 | te << 32 - (61 - 32)) ^ (te >>> 6 | le << 32 - 6), W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, d[ie] = Y & 65535 | re << 16, v[ie] = W & 65535 | ee << 16
            }
            C = H, q = m, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[0], q = S[0], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[0] = H = Y & 65535 | re << 16, S[0] = m = W & 65535 | ee << 16, C = K, q = u, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[1], q = S[1], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[1] = K = Y & 65535 | re << 16, S[1] = u = W & 65535 | ee << 16, C = B, q = _, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[2], q = S[2], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[2] = B = Y & 65535 | re << 16, S[2] = _ = W & 65535 | ee << 16, C = oe, q = G, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[3], q = S[3], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[3] = oe = Y & 65535 | re << 16, S[3] = G = W & 65535 | ee << 16, C = T, q = V, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[4], q = S[4], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[4] = T = Y & 65535 | re << 16, S[4] = V = W & 65535 | ee << 16, C = D, q = se, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[5], q = S[5], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[5] = D = Y & 65535 | re << 16, S[5] = se = W & 65535 | ee << 16, C = I, q = ce, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[6], q = S[6], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[6] = I = Y & 65535 | re << 16, S[6] = ce = W & 65535 | ee << 16, C = P, q = ge, W = q & 65535, ee = q >>> 16, Y = C & 65535, re = C >>> 16, C = b[7], q = S[7], W += q & 65535, ee += q >>> 16, Y += C & 65535, re += C >>> 16, ee += W >>> 16, Y += ee >>> 16, re += Y >>> 16, b[7] = P = Y & 65535 | re << 16, S[7] = ge = W & 65535 | ee << 16, $ += 128, R -= 128
        }
        return $
    }

    function p(d) {
        var v = new s;
        v.update(d);
        var b = v.digest();
        return v.clean(), b
    }
    n.hash = p
})(bd);
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.convertSecretKeyToX25519 = n.convertPublicKeyToX25519 = n.verify = n.sign = n.extractPublicKeyFromSecretKey = n.generateKeyPair = n.generateKeyPairFromSeed = n.SEED_LENGTH = n.SECRET_KEY_LENGTH = n.PUBLIC_KEY_LENGTH = n.SIGNATURE_LENGTH = void 0;
    const t = Un,
        r = bd,
        s = Or;
    n.SIGNATURE_LENGTH = 64, n.PUBLIC_KEY_LENGTH = 32, n.SECRET_KEY_LENGTH = 64, n.SEED_LENGTH = 32;

    function a(j) {
        const M = new Float64Array(16);
        if (j)
            for (let N = 0; N < j.length; N++) M[N] = j[N];
        return M
    }
    const l = new Uint8Array(32);
    l[0] = 9;
    const p = a(),
        d = a([1]),
        v = a([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        b = a([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        S = a([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        A = a([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        $ = a([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function R(j, M) {
        for (let N = 0; N < 16; N++) j[N] = M[N] | 0
    }

    function H(j) {
        let M = 1;
        for (let N = 0; N < 16; N++) {
            let h = j[N] + M + 65535;
            M = Math.floor(h / 65536), j[N] = h - M * 65536
        }
        j[0] += M - 1 + 37 * (M - 1)
    }

    function K(j, M, N) {
        const h = ~(N - 1);
        for (let x = 0; x < 16; x++) {
            const ne = h & (j[x] ^ M[x]);
            j[x] ^= ne, M[x] ^= ne
        }
    }

    function B(j, M) {
        const N = a(),
            h = a();
        for (let x = 0; x < 16; x++) h[x] = M[x];
        H(h), H(h), H(h);
        for (let x = 0; x < 2; x++) {
            N[0] = h[0] - 65517;
            for (let fe = 1; fe < 15; fe++) N[fe] = h[fe] - 65535 - (N[fe - 1] >> 16 & 1), N[fe - 1] &= 65535;
            N[15] = h[15] - 32767 - (N[14] >> 16 & 1);
            const ne = N[15] >> 16 & 1;
            N[14] &= 65535, K(h, N, 1 - ne)
        }
        for (let x = 0; x < 16; x++) j[2 * x] = h[x] & 255, j[2 * x + 1] = h[x] >> 8
    }

    function oe(j, M) {
        let N = 0;
        for (let h = 0; h < 32; h++) N |= j[h] ^ M[h];
        return (1 & N - 1 >>> 8) - 1
    }

    function T(j, M) {
        const N = new Uint8Array(32),
            h = new Uint8Array(32);
        return B(N, j), B(h, M), oe(N, h)
    }

    function D(j) {
        const M = new Uint8Array(32);
        return B(M, j), M[0] & 1
    }

    function I(j, M) {
        for (let N = 0; N < 16; N++) j[N] = M[2 * N] + (M[2 * N + 1] << 8);
        j[15] &= 32767
    }

    function P(j, M, N) {
        for (let h = 0; h < 16; h++) j[h] = M[h] + N[h]
    }

    function m(j, M, N) {
        for (let h = 0; h < 16; h++) j[h] = M[h] - N[h]
    }

    function u(j, M, N) {
        let h, x, ne = 0,
            fe = 0,
            Ie = 0,
            ze = 0,
            ke = 0,
            De = 0,
            pt = 0,
            gt = 0,
            je = 0,
            xe = 0,
            Le = 0,
            Ue = 0,
            qe = 0,
            Ae = 0,
            Fe = 0,
            Se = 0,
            Ne = 0,
            Ke = 0,
            Pe = 0,
            Ve = 0,
            We = 0,
            et = 0,
            tt = 0,
            Je = 0,
            Zt = 0,
            ur = 0,
            Gr = 0,
            er = 0,
            ii = 0,
            wi = 0,
            $i = 0,
            bt = N[0],
            vt = N[1],
            Et = N[2],
            St = N[3],
            mt = N[4],
            yt = N[5],
            Ut = N[6],
            Ft = N[7],
            It = N[8],
            $t = N[9],
            xt = N[10],
            At = N[11],
            Ot = N[12],
            ht = N[13],
            Dt = N[14],
            Mt = N[15];
        h = M[0], ne += h * bt, fe += h * vt, Ie += h * Et, ze += h * St, ke += h * mt, De += h * yt, pt += h * Ut, gt += h * Ft, je += h * It, xe += h * $t, Le += h * xt, Ue += h * At, qe += h * Ot, Ae += h * ht, Fe += h * Dt, Se += h * Mt, h = M[1], fe += h * bt, Ie += h * vt, ze += h * Et, ke += h * St, De += h * mt, pt += h * yt, gt += h * Ut, je += h * Ft, xe += h * It, Le += h * $t, Ue += h * xt, qe += h * At, Ae += h * Ot, Fe += h * ht, Se += h * Dt, Ne += h * Mt, h = M[2], Ie += h * bt, ze += h * vt, ke += h * Et, De += h * St, pt += h * mt, gt += h * yt, je += h * Ut, xe += h * Ft, Le += h * It, Ue += h * $t, qe += h * xt, Ae += h * At, Fe += h * Ot, Se += h * ht, Ne += h * Dt, Ke += h * Mt, h = M[3], ze += h * bt, ke += h * vt, De += h * Et, pt += h * St, gt += h * mt, je += h * yt, xe += h * Ut, Le += h * Ft, Ue += h * It, qe += h * $t, Ae += h * xt, Fe += h * At, Se += h * Ot, Ne += h * ht, Ke += h * Dt, Pe += h * Mt, h = M[4], ke += h * bt, De += h * vt, pt += h * Et, gt += h * St, je += h * mt, xe += h * yt, Le += h * Ut, Ue += h * Ft, qe += h * It, Ae += h * $t, Fe += h * xt, Se += h * At, Ne += h * Ot, Ke += h * ht, Pe += h * Dt, Ve += h * Mt, h = M[5], De += h * bt, pt += h * vt, gt += h * Et, je += h * St, xe += h * mt, Le += h * yt, Ue += h * Ut, qe += h * Ft, Ae += h * It, Fe += h * $t, Se += h * xt, Ne += h * At, Ke += h * Ot, Pe += h * ht, Ve += h * Dt, We += h * Mt, h = M[6], pt += h * bt, gt += h * vt, je += h * Et, xe += h * St, Le += h * mt, Ue += h * yt, qe += h * Ut, Ae += h * Ft, Fe += h * It, Se += h * $t, Ne += h * xt, Ke += h * At, Pe += h * Ot, Ve += h * ht, We += h * Dt, et += h * Mt, h = M[7], gt += h * bt, je += h * vt, xe += h * Et, Le += h * St, Ue += h * mt, qe += h * yt, Ae += h * Ut, Fe += h * Ft, Se += h * It, Ne += h * $t, Ke += h * xt, Pe += h * At, Ve += h * Ot, We += h * ht, et += h * Dt, tt += h * Mt, h = M[8], je += h * bt, xe += h * vt, Le += h * Et, Ue += h * St, qe += h * mt, Ae += h * yt, Fe += h * Ut, Se += h * Ft, Ne += h * It, Ke += h * $t, Pe += h * xt, Ve += h * At, We += h * Ot, et += h * ht, tt += h * Dt, Je += h * Mt, h = M[9], xe += h * bt, Le += h * vt, Ue += h * Et, qe += h * St, Ae += h * mt, Fe += h * yt, Se += h * Ut, Ne += h * Ft, Ke += h * It, Pe += h * $t, Ve += h * xt, We += h * At, et += h * Ot, tt += h * ht, Je += h * Dt, Zt += h * Mt, h = M[10], Le += h * bt, Ue += h * vt, qe += h * Et, Ae += h * St, Fe += h * mt, Se += h * yt, Ne += h * Ut, Ke += h * Ft, Pe += h * It, Ve += h * $t, We += h * xt, et += h * At, tt += h * Ot, Je += h * ht, Zt += h * Dt, ur += h * Mt, h = M[11], Ue += h * bt, qe += h * vt, Ae += h * Et, Fe += h * St, Se += h * mt, Ne += h * yt, Ke += h * Ut, Pe += h * Ft, Ve += h * It, We += h * $t, et += h * xt, tt += h * At, Je += h * Ot, Zt += h * ht, ur += h * Dt, Gr += h * Mt, h = M[12], qe += h * bt, Ae += h * vt, Fe += h * Et, Se += h * St, Ne += h * mt, Ke += h * yt, Pe += h * Ut, Ve += h * Ft, We += h * It, et += h * $t, tt += h * xt, Je += h * At, Zt += h * Ot, ur += h * ht, Gr += h * Dt, er += h * Mt, h = M[13], Ae += h * bt, Fe += h * vt, Se += h * Et, Ne += h * St, Ke += h * mt, Pe += h * yt, Ve += h * Ut, We += h * Ft, et += h * It, tt += h * $t, Je += h * xt, Zt += h * At, ur += h * Ot, Gr += h * ht, er += h * Dt, ii += h * Mt, h = M[14], Fe += h * bt, Se += h * vt, Ne += h * Et, Ke += h * St, Pe += h * mt, Ve += h * yt, We += h * Ut, et += h * Ft, tt += h * It, Je += h * $t, Zt += h * xt, ur += h * At, Gr += h * Ot, er += h * ht, ii += h * Dt, wi += h * Mt, h = M[15], Se += h * bt, Ne += h * vt, Ke += h * Et, Pe += h * St, Ve += h * mt, We += h * yt, et += h * Ut, tt += h * Ft, Je += h * It, Zt += h * $t, ur += h * xt, Gr += h * At, er += h * Ot, ii += h * ht, wi += h * Dt, $i += h * Mt, ne += 38 * Ne, fe += 38 * Ke, Ie += 38 * Pe, ze += 38 * Ve, ke += 38 * We, De += 38 * et, pt += 38 * tt, gt += 38 * Je, je += 38 * Zt, xe += 38 * ur, Le += 38 * Gr, Ue += 38 * er, qe += 38 * ii, Ae += 38 * wi, Fe += 38 * $i, x = 1, h = ne + x + 65535, x = Math.floor(h / 65536), ne = h - x * 65536, h = fe + x + 65535, x = Math.floor(h / 65536), fe = h - x * 65536, h = Ie + x + 65535, x = Math.floor(h / 65536), Ie = h - x * 65536, h = ze + x + 65535, x = Math.floor(h / 65536), ze = h - x * 65536, h = ke + x + 65535, x = Math.floor(h / 65536), ke = h - x * 65536, h = De + x + 65535, x = Math.floor(h / 65536), De = h - x * 65536, h = pt + x + 65535, x = Math.floor(h / 65536), pt = h - x * 65536, h = gt + x + 65535, x = Math.floor(h / 65536), gt = h - x * 65536, h = je + x + 65535, x = Math.floor(h / 65536), je = h - x * 65536, h = xe + x + 65535, x = Math.floor(h / 65536), xe = h - x * 65536, h = Le + x + 65535, x = Math.floor(h / 65536), Le = h - x * 65536, h = Ue + x + 65535, x = Math.floor(h / 65536), Ue = h - x * 65536, h = qe + x + 65535, x = Math.floor(h / 65536), qe = h - x * 65536, h = Ae + x + 65535, x = Math.floor(h / 65536), Ae = h - x * 65536, h = Fe + x + 65535, x = Math.floor(h / 65536), Fe = h - x * 65536, h = Se + x + 65535, x = Math.floor(h / 65536), Se = h - x * 65536, ne += x - 1 + 37 * (x - 1), x = 1, h = ne + x + 65535, x = Math.floor(h / 65536), ne = h - x * 65536, h = fe + x + 65535, x = Math.floor(h / 65536), fe = h - x * 65536, h = Ie + x + 65535, x = Math.floor(h / 65536), Ie = h - x * 65536, h = ze + x + 65535, x = Math.floor(h / 65536), ze = h - x * 65536, h = ke + x + 65535, x = Math.floor(h / 65536), ke = h - x * 65536, h = De + x + 65535, x = Math.floor(h / 65536), De = h - x * 65536, h = pt + x + 65535, x = Math.floor(h / 65536), pt = h - x * 65536, h = gt + x + 65535, x = Math.floor(h / 65536), gt = h - x * 65536, h = je + x + 65535, x = Math.floor(h / 65536), je = h - x * 65536, h = xe + x + 65535, x = Math.floor(h / 65536), xe = h - x * 65536, h = Le + x + 65535, x = Math.floor(h / 65536), Le = h - x * 65536, h = Ue + x + 65535, x = Math.floor(h / 65536), Ue = h - x * 65536, h = qe + x + 65535, x = Math.floor(h / 65536), qe = h - x * 65536, h = Ae + x + 65535, x = Math.floor(h / 65536), Ae = h - x * 65536, h = Fe + x + 65535, x = Math.floor(h / 65536), Fe = h - x * 65536, h = Se + x + 65535, x = Math.floor(h / 65536), Se = h - x * 65536, ne += x - 1 + 37 * (x - 1), j[0] = ne, j[1] = fe, j[2] = Ie, j[3] = ze, j[4] = ke, j[5] = De, j[6] = pt, j[7] = gt, j[8] = je, j[9] = xe, j[10] = Le, j[11] = Ue, j[12] = qe, j[13] = Ae, j[14] = Fe, j[15] = Se
    }

    function _(j, M) {
        u(j, M, M)
    }

    function G(j, M) {
        const N = a();
        let h;
        for (h = 0; h < 16; h++) N[h] = M[h];
        for (h = 253; h >= 0; h--) _(N, N), h !== 2 && h !== 4 && u(N, N, M);
        for (h = 0; h < 16; h++) j[h] = N[h]
    }

    function V(j, M) {
        const N = a();
        let h;
        for (h = 0; h < 16; h++) N[h] = M[h];
        for (h = 250; h >= 0; h--) _(N, N), h !== 1 && u(N, N, M);
        for (h = 0; h < 16; h++) j[h] = N[h]
    }

    function se(j, M) {
        const N = a(),
            h = a(),
            x = a(),
            ne = a(),
            fe = a(),
            Ie = a(),
            ze = a(),
            ke = a(),
            De = a();
        m(N, j[1], j[0]), m(De, M[1], M[0]), u(N, N, De), P(h, j[0], j[1]), P(De, M[0], M[1]), u(h, h, De), u(x, j[3], M[3]), u(x, x, b), u(ne, j[2], M[2]), P(ne, ne, ne), m(fe, h, N), m(Ie, ne, x), P(ze, ne, x), P(ke, h, N), u(j[0], fe, Ie), u(j[1], ke, ze), u(j[2], ze, Ie), u(j[3], fe, ke)
    }

    function ce(j, M, N) {
        for (let h = 0; h < 4; h++) K(j[h], M[h], N)
    }

    function ge(j, M) {
        const N = a(),
            h = a(),
            x = a();
        G(x, M[2]), u(N, M[0], x), u(h, M[1], x), B(j, h), j[31] ^= D(N) << 7
    }

    function C(j, M, N) {
        R(j[0], p), R(j[1], d), R(j[2], d), R(j[3], p);
        for (let h = 255; h >= 0; --h) {
            const x = N[h / 8 | 0] >> (h & 7) & 1;
            ce(j, M, x), se(M, j), se(j, j), ce(j, M, x)
        }
    }

    function q(j, M) {
        const N = [a(), a(), a(), a()];
        R(N[0], S), R(N[1], A), R(N[2], d), u(N[3], S, A), C(j, N, M)
    }

    function le(j) {
        if (j.length !== n.SEED_LENGTH) throw new Error(`ed25519: seed must be ${n.SEED_LENGTH} bytes`);
        const M = (0, r.hash)(j);
        M[0] &= 248, M[31] &= 127, M[31] |= 64;
        const N = new Uint8Array(32),
            h = [a(), a(), a(), a()];
        q(h, M), ge(N, h);
        const x = new Uint8Array(64);
        return x.set(j), x.set(N, 32), {
            publicKey: N,
            secretKey: x
        }
    }
    n.generateKeyPairFromSeed = le;

    function te(j) {
        const M = (0, t.randomBytes)(32, j),
            N = le(M);
        return (0, s.wipe)(M), N
    }
    n.generateKeyPair = te;

    function W(j) {
        if (j.length !== n.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${n.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(j.subarray(32))
    }
    n.extractPublicKeyFromSecretKey = W;
    const ee = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function Y(j, M) {
        let N, h, x, ne;
        for (h = 63; h >= 32; --h) {
            for (N = 0, x = h - 32, ne = h - 12; x < ne; ++x) M[x] += N - 16 * M[h] * ee[x - (h - 32)], N = Math.floor((M[x] + 128) / 256), M[x] -= N * 256;
            M[x] += N, M[h] = 0
        }
        for (N = 0, x = 0; x < 32; x++) M[x] += N - (M[31] >> 4) * ee[x], N = M[x] >> 8, M[x] &= 255;
        for (x = 0; x < 32; x++) M[x] -= N * ee[x];
        for (h = 0; h < 32; h++) M[h + 1] += M[h] >> 8, j[h] = M[h] & 255
    }

    function re(j) {
        const M = new Float64Array(64);
        for (let N = 0; N < 64; N++) M[N] = j[N];
        for (let N = 0; N < 64; N++) j[N] = 0;
        Y(j, M)
    }

    function Oe(j, M) {
        const N = new Float64Array(64),
            h = [a(), a(), a(), a()],
            x = (0, r.hash)(j.subarray(0, 32));
        x[0] &= 248, x[31] &= 127, x[31] |= 64;
        const ne = new Uint8Array(64);
        ne.set(x.subarray(32), 32);
        const fe = new r.SHA512;
        fe.update(ne.subarray(32)), fe.update(M);
        const Ie = fe.digest();
        fe.clean(), re(Ie), q(h, Ie), ge(ne, h), fe.reset(), fe.update(ne.subarray(0, 32)), fe.update(j.subarray(32)), fe.update(M);
        const ze = fe.digest();
        re(ze);
        for (let ke = 0; ke < 32; ke++) N[ke] = Ie[ke];
        for (let ke = 0; ke < 32; ke++)
            for (let De = 0; De < 32; De++) N[ke + De] += ze[ke] * x[De];
        return Y(ne.subarray(32), N), ne
    }
    n.sign = Oe;

    function ie(j, M) {
        const N = a(),
            h = a(),
            x = a(),
            ne = a(),
            fe = a(),
            Ie = a(),
            ze = a();
        return R(j[2], d), I(j[1], M), _(x, j[1]), u(ne, x, v), m(x, x, j[2]), P(ne, j[2], ne), _(fe, ne), _(Ie, fe), u(ze, Ie, fe), u(N, ze, x), u(N, N, ne), V(N, N), u(N, N, x), u(N, N, ne), u(N, N, ne), u(j[0], N, ne), _(h, j[0]), u(h, h, ne), T(h, x) && u(j[0], j[0], $), _(h, j[0]), u(h, h, ne), T(h, x) ? -1 : (D(j[0]) === M[31] >> 7 && m(j[0], p, j[0]), u(j[3], j[0], j[1]), 0)
    }

    function we(j, M, N) {
        const h = new Uint8Array(32),
            x = [a(), a(), a(), a()],
            ne = [a(), a(), a(), a()];
        if (N.length !== n.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${n.SIGNATURE_LENGTH} bytes`);
        if (ie(ne, j)) return !1;
        const fe = new r.SHA512;
        fe.update(N.subarray(0, 32)), fe.update(j), fe.update(M);
        const Ie = fe.digest();
        return re(Ie), C(x, ne, Ie), q(ne, N.subarray(32)), se(x, ne), ge(h, x), !oe(N, h)
    }
    n.verify = we;

    function he(j) {
        let M = [a(), a(), a(), a()];
        if (ie(M, j)) throw new Error("Ed25519: invalid public key");
        let N = a(),
            h = a(),
            x = M[1];
        P(N, d, x), m(h, d, x), G(h, h), u(N, N, h);
        let ne = new Uint8Array(32);
        return B(ne, N), ne
    }
    n.convertPublicKeyToX25519 = he;

    function _e(j) {
        const M = (0, r.hash)(j.subarray(0, 32));
        M[0] &= 248, M[31] &= 127, M[31] |= 64;
        const N = new Uint8Array(M.subarray(0, 32));
        return (0, s.wipe)(M), N
    }
    n.convertSecretKeyToX25519 = _e
})(fu);
const fw = "EdDSA",
    dw = "JWT",
    Ed = ".",
    Sd = "base64url",
    pw = "utf8",
    gw = "utf8",
    vw = ":",
    yw = "did",
    _w = "key",
    rf = "base58btc",
    mw = "z",
    ww = "K36",
    bw = 32;

function zo(n) {
    return cr(yr(ms(n), pw), Sd)
}

function Id(n) {
    const t = yr(ww, rf),
        r = mw + cr(Wc([t, n]), rf);
    return [yw, _w, r].join(vw)
}

function Ew(n) {
    return cr(n, Sd)
}

function Sw(n) {
    return yr([zo(n.header), zo(n.payload)].join(Ed), gw)
}

function Iw(n) {
    return [zo(n.header), zo(n.payload), Ew(n.signature)].join(Ed)
}

function nf(n = Un.randomBytes(bw)) {
    return fu.generateKeyPairFromSeed(n)
}
async function xw(n, t, r, s, a = ye.fromMiliseconds(Date.now())) {
    const l = {
            alg: fw,
            typ: dw
        },
        p = Id(s.publicKey),
        d = a + r,
        v = {
            iss: p,
            sub: n,
            aud: t,
            iat: a,
            exp: d
        },
        b = Sw({
            header: l,
            payload: v
        }),
        S = fu.sign(s.secretKey, b);
    return Iw({
        header: l,
        payload: v,
        signature: S
    })
}
var du = {},
    Qo = {};
Object.defineProperty(Qo, "__esModule", {
    value: !0
});
var Qt = $e,
    Zc = Or,
    Ow = 20;

function Pw(n, t, r) {
    for (var s = 1634760805, a = 857760878, l = 2036477234, p = 1797285236, d = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], v = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], b = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], S = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], A = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], $ = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], R = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], H = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], K = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], B = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], oe = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], T = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], D = s, I = a, P = l, m = p, u = d, _ = v, G = b, V = S, se = A, ce = $, ge = R, C = H, q = K, le = B, te = oe, W = T, ee = 0; ee < Ow; ee += 2) D = D + u | 0, q ^= D, q = q >>> 32 - 16 | q << 16, se = se + q | 0, u ^= se, u = u >>> 32 - 12 | u << 12, I = I + _ | 0, le ^= I, le = le >>> 32 - 16 | le << 16, ce = ce + le | 0, _ ^= ce, _ = _ >>> 32 - 12 | _ << 12, P = P + G | 0, te ^= P, te = te >>> 32 - 16 | te << 16, ge = ge + te | 0, G ^= ge, G = G >>> 32 - 12 | G << 12, m = m + V | 0, W ^= m, W = W >>> 32 - 16 | W << 16, C = C + W | 0, V ^= C, V = V >>> 32 - 12 | V << 12, P = P + G | 0, te ^= P, te = te >>> 32 - 8 | te << 8, ge = ge + te | 0, G ^= ge, G = G >>> 32 - 7 | G << 7, m = m + V | 0, W ^= m, W = W >>> 32 - 8 | W << 8, C = C + W | 0, V ^= C, V = V >>> 32 - 7 | V << 7, I = I + _ | 0, le ^= I, le = le >>> 32 - 8 | le << 8, ce = ce + le | 0, _ ^= ce, _ = _ >>> 32 - 7 | _ << 7, D = D + u | 0, q ^= D, q = q >>> 32 - 8 | q << 8, se = se + q | 0, u ^= se, u = u >>> 32 - 7 | u << 7, D = D + _ | 0, W ^= D, W = W >>> 32 - 16 | W << 16, ge = ge + W | 0, _ ^= ge, _ = _ >>> 32 - 12 | _ << 12, I = I + G | 0, q ^= I, q = q >>> 32 - 16 | q << 16, C = C + q | 0, G ^= C, G = G >>> 32 - 12 | G << 12, P = P + V | 0, le ^= P, le = le >>> 32 - 16 | le << 16, se = se + le | 0, V ^= se, V = V >>> 32 - 12 | V << 12, m = m + u | 0, te ^= m, te = te >>> 32 - 16 | te << 16, ce = ce + te | 0, u ^= ce, u = u >>> 32 - 12 | u << 12, P = P + V | 0, le ^= P, le = le >>> 32 - 8 | le << 8, se = se + le | 0, V ^= se, V = V >>> 32 - 7 | V << 7, m = m + u | 0, te ^= m, te = te >>> 32 - 8 | te << 8, ce = ce + te | 0, u ^= ce, u = u >>> 32 - 7 | u << 7, I = I + G | 0, q ^= I, q = q >>> 32 - 8 | q << 8, C = C + q | 0, G ^= C, G = G >>> 32 - 7 | G << 7, D = D + _ | 0, W ^= D, W = W >>> 32 - 8 | W << 8, ge = ge + W | 0, _ ^= ge, _ = _ >>> 32 - 7 | _ << 7;
    Qt.writeUint32LE(D + s | 0, n, 0), Qt.writeUint32LE(I + a | 0, n, 4), Qt.writeUint32LE(P + l | 0, n, 8), Qt.writeUint32LE(m + p | 0, n, 12), Qt.writeUint32LE(u + d | 0, n, 16), Qt.writeUint32LE(_ + v | 0, n, 20), Qt.writeUint32LE(G + b | 0, n, 24), Qt.writeUint32LE(V + S | 0, n, 28), Qt.writeUint32LE(se + A | 0, n, 32), Qt.writeUint32LE(ce + $ | 0, n, 36), Qt.writeUint32LE(ge + R | 0, n, 40), Qt.writeUint32LE(C + H | 0, n, 44), Qt.writeUint32LE(q + K | 0, n, 48), Qt.writeUint32LE(le + B | 0, n, 52), Qt.writeUint32LE(te + oe | 0, n, 56), Qt.writeUint32LE(W + T | 0, n, 60)
}

function xd(n, t, r, s, a) {
    if (a === void 0 && (a = 0), n.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (s.length < r.length) throw new Error("ChaCha: destination is shorter than source");
    var l, p;
    if (a === 0) {
        if (t.length !== 8 && t.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        l = new Uint8Array(16), p = l.length - t.length, l.set(t, p)
    } else {
        if (t.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        l = t, p = a
    }
    for (var d = new Uint8Array(64), v = 0; v < r.length; v += 64) {
        Pw(d, l, n);
        for (var b = v; b < v + 64 && b < r.length; b++) s[b] = r[b] ^ d[b - v];
        Nw(l, 0, p)
    }
    return Zc.wipe(d), a === 0 && Zc.wipe(l), s
}
Qo.streamXOR = xd;

function Aw(n, t, r, s) {
    return s === void 0 && (s = 0), Zc.wipe(r), xd(n, t, r, r, s)
}
Qo.stream = Aw;

function Nw(n, t, r) {
    for (var s = 1; r--;) s = s + (n[t] & 255) | 0, n[t] = s & 255, s >>>= 8, t++;
    if (s > 0) throw new Error("ChaCha: counter overflow")
}
var Od = {},
    Li = {};
Object.defineProperty(Li, "__esModule", {
    value: !0
});

function Rw(n, t, r) {
    return ~(n - 1) & t | n - 1 & r
}
Li.select = Rw;

function Tw(n, t) {
    return (n | 0) - (t | 0) - 1 >>> 31 & 1
}
Li.lessOrEqual = Tw;

function Pd(n, t) {
    if (n.length !== t.length) return 0;
    for (var r = 0, s = 0; s < n.length; s++) r |= n[s] ^ t[s];
    return 1 & r - 1 >>> 8
}
Li.compare = Pd;

function Cw(n, t) {
    return n.length === 0 || t.length === 0 ? !1 : Pd(n, t) !== 0
}
Li.equal = Cw;
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = Li,
        r = Or;
    n.DIGEST_LENGTH = 16;
    var s = function() {
        function p(d) {
            this.digestLength = n.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
            var v = d[0] | d[1] << 8;
            this._r[0] = v & 8191;
            var b = d[2] | d[3] << 8;
            this._r[1] = (v >>> 13 | b << 3) & 8191;
            var S = d[4] | d[5] << 8;
            this._r[2] = (b >>> 10 | S << 6) & 7939;
            var A = d[6] | d[7] << 8;
            this._r[3] = (S >>> 7 | A << 9) & 8191;
            var $ = d[8] | d[9] << 8;
            this._r[4] = (A >>> 4 | $ << 12) & 255, this._r[5] = $ >>> 1 & 8190;
            var R = d[10] | d[11] << 8;
            this._r[6] = ($ >>> 14 | R << 2) & 8191;
            var H = d[12] | d[13] << 8;
            this._r[7] = (R >>> 11 | H << 5) & 8065;
            var K = d[14] | d[15] << 8;
            this._r[8] = (H >>> 8 | K << 8) & 8191, this._r[9] = K >>> 5 & 127, this._pad[0] = d[16] | d[17] << 8, this._pad[1] = d[18] | d[19] << 8, this._pad[2] = d[20] | d[21] << 8, this._pad[3] = d[22] | d[23] << 8, this._pad[4] = d[24] | d[25] << 8, this._pad[5] = d[26] | d[27] << 8, this._pad[6] = d[28] | d[29] << 8, this._pad[7] = d[30] | d[31] << 8
        }
        return p.prototype._blocks = function(d, v, b) {
            for (var S = this._fin ? 0 : 2048, A = this._h[0], $ = this._h[1], R = this._h[2], H = this._h[3], K = this._h[4], B = this._h[5], oe = this._h[6], T = this._h[7], D = this._h[8], I = this._h[9], P = this._r[0], m = this._r[1], u = this._r[2], _ = this._r[3], G = this._r[4], V = this._r[5], se = this._r[6], ce = this._r[7], ge = this._r[8], C = this._r[9]; b >= 16;) {
                var q = d[v + 0] | d[v + 1] << 8;
                A += q & 8191;
                var le = d[v + 2] | d[v + 3] << 8;
                $ += (q >>> 13 | le << 3) & 8191;
                var te = d[v + 4] | d[v + 5] << 8;
                R += (le >>> 10 | te << 6) & 8191;
                var W = d[v + 6] | d[v + 7] << 8;
                H += (te >>> 7 | W << 9) & 8191;
                var ee = d[v + 8] | d[v + 9] << 8;
                K += (W >>> 4 | ee << 12) & 8191, B += ee >>> 1 & 8191;
                var Y = d[v + 10] | d[v + 11] << 8;
                oe += (ee >>> 14 | Y << 2) & 8191;
                var re = d[v + 12] | d[v + 13] << 8;
                T += (Y >>> 11 | re << 5) & 8191;
                var Oe = d[v + 14] | d[v + 15] << 8;
                D += (re >>> 8 | Oe << 8) & 8191, I += Oe >>> 5 | S;
                var ie = 0,
                    we = ie;
                we += A * P, we += $ * (5 * C), we += R * (5 * ge), we += H * (5 * ce), we += K * (5 * se), ie = we >>> 13, we &= 8191, we += B * (5 * V), we += oe * (5 * G), we += T * (5 * _), we += D * (5 * u), we += I * (5 * m), ie += we >>> 13, we &= 8191;
                var he = ie;
                he += A * m, he += $ * P, he += R * (5 * C), he += H * (5 * ge), he += K * (5 * ce), ie = he >>> 13, he &= 8191, he += B * (5 * se), he += oe * (5 * V), he += T * (5 * G), he += D * (5 * _), he += I * (5 * u), ie += he >>> 13, he &= 8191;
                var _e = ie;
                _e += A * u, _e += $ * m, _e += R * P, _e += H * (5 * C), _e += K * (5 * ge), ie = _e >>> 13, _e &= 8191, _e += B * (5 * ce), _e += oe * (5 * se), _e += T * (5 * V), _e += D * (5 * G), _e += I * (5 * _), ie += _e >>> 13, _e &= 8191;
                var j = ie;
                j += A * _, j += $ * u, j += R * m, j += H * P, j += K * (5 * C), ie = j >>> 13, j &= 8191, j += B * (5 * ge), j += oe * (5 * ce), j += T * (5 * se), j += D * (5 * V), j += I * (5 * G), ie += j >>> 13, j &= 8191;
                var M = ie;
                M += A * G, M += $ * _, M += R * u, M += H * m, M += K * P, ie = M >>> 13, M &= 8191, M += B * (5 * C), M += oe * (5 * ge), M += T * (5 * ce), M += D * (5 * se), M += I * (5 * V), ie += M >>> 13, M &= 8191;
                var N = ie;
                N += A * V, N += $ * G, N += R * _, N += H * u, N += K * m, ie = N >>> 13, N &= 8191, N += B * P, N += oe * (5 * C), N += T * (5 * ge), N += D * (5 * ce), N += I * (5 * se), ie += N >>> 13, N &= 8191;
                var h = ie;
                h += A * se, h += $ * V, h += R * G, h += H * _, h += K * u, ie = h >>> 13, h &= 8191, h += B * m, h += oe * P, h += T * (5 * C), h += D * (5 * ge), h += I * (5 * ce), ie += h >>> 13, h &= 8191;
                var x = ie;
                x += A * ce, x += $ * se, x += R * V, x += H * G, x += K * _, ie = x >>> 13, x &= 8191, x += B * u, x += oe * m, x += T * P, x += D * (5 * C), x += I * (5 * ge), ie += x >>> 13, x &= 8191;
                var ne = ie;
                ne += A * ge, ne += $ * ce, ne += R * se, ne += H * V, ne += K * G, ie = ne >>> 13, ne &= 8191, ne += B * _, ne += oe * u, ne += T * m, ne += D * P, ne += I * (5 * C), ie += ne >>> 13, ne &= 8191;
                var fe = ie;
                fe += A * C, fe += $ * ge, fe += R * ce, fe += H * se, fe += K * V, ie = fe >>> 13, fe &= 8191, fe += B * G, fe += oe * _, fe += T * u, fe += D * m, fe += I * P, ie += fe >>> 13, fe &= 8191, ie = (ie << 2) + ie | 0, ie = ie + we | 0, we = ie & 8191, ie = ie >>> 13, he += ie, A = we, $ = he, R = _e, H = j, K = M, B = N, oe = h, T = x, D = ne, I = fe, v += 16, b -= 16
            }
            this._h[0] = A, this._h[1] = $, this._h[2] = R, this._h[3] = H, this._h[4] = K, this._h[5] = B, this._h[6] = oe, this._h[7] = T, this._h[8] = D, this._h[9] = I
        }, p.prototype.finish = function(d, v) {
            v === void 0 && (v = 0);
            var b = new Uint16Array(10),
                S, A, $, R;
            if (this._leftover) {
                for (R = this._leftover, this._buffer[R++] = 1; R < 16; R++) this._buffer[R] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16)
            }
            for (S = this._h[1] >>> 13, this._h[1] &= 8191, R = 2; R < 10; R++) this._h[R] += S, S = this._h[R] >>> 13, this._h[R] &= 8191;
            for (this._h[0] += S * 5, S = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += S, S = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += S, b[0] = this._h[0] + 5, S = b[0] >>> 13, b[0] &= 8191, R = 1; R < 10; R++) b[R] = this._h[R] + S, S = b[R] >>> 13, b[R] &= 8191;
            for (b[9] -= 8192, A = (S ^ 1) - 1, R = 0; R < 10; R++) b[R] &= A;
            for (A = ~A, R = 0; R < 10; R++) this._h[R] = this._h[R] & A | b[R];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, $ = this._h[0] + this._pad[0], this._h[0] = $ & 65535, R = 1; R < 8; R++) $ = (this._h[R] + this._pad[R] | 0) + ($ >>> 16) | 0, this._h[R] = $ & 65535;
            return d[v + 0] = this._h[0] >>> 0, d[v + 1] = this._h[0] >>> 8, d[v + 2] = this._h[1] >>> 0, d[v + 3] = this._h[1] >>> 8, d[v + 4] = this._h[2] >>> 0, d[v + 5] = this._h[2] >>> 8, d[v + 6] = this._h[3] >>> 0, d[v + 7] = this._h[3] >>> 8, d[v + 8] = this._h[4] >>> 0, d[v + 9] = this._h[4] >>> 8, d[v + 10] = this._h[5] >>> 0, d[v + 11] = this._h[5] >>> 8, d[v + 12] = this._h[6] >>> 0, d[v + 13] = this._h[6] >>> 8, d[v + 14] = this._h[7] >>> 0, d[v + 15] = this._h[7] >>> 8, this._finished = !0, this
        }, p.prototype.update = function(d) {
            var v = 0,
                b = d.length,
                S;
            if (this._leftover) {
                S = 16 - this._leftover, S > b && (S = b);
                for (var A = 0; A < S; A++) this._buffer[this._leftover + A] = d[v + A];
                if (b -= S, v += S, this._leftover += S, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0
            }
            if (b >= 16 && (S = b - b % 16, this._blocks(d, v, S), v += S, b -= S), b) {
                for (var A = 0; A < b; A++) this._buffer[this._leftover + A] = d[v + A];
                this._leftover += b
            }
            return this
        }, p.prototype.digest = function() {
            if (this._finished) throw new Error("Poly1305 was finished");
            var d = new Uint8Array(16);
            return this.finish(d), d
        }, p.prototype.clean = function() {
            return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
        }, p
    }();
    n.Poly1305 = s;

    function a(p, d) {
        var v = new s(p);
        v.update(d);
        var b = v.digest();
        return v.clean(), b
    }
    n.oneTimeAuth = a;

    function l(p, d) {
        return p.length !== n.DIGEST_LENGTH || d.length !== n.DIGEST_LENGTH ? !1 : t.equal(p, d)
    }
    n.equal = l
})(Od);
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = Qo,
        r = Od,
        s = Or,
        a = $e,
        l = Li;
    n.KEY_LENGTH = 32, n.NONCE_LENGTH = 12, n.TAG_LENGTH = 16;
    var p = new Uint8Array(16),
        d = function() {
            function v(b) {
                if (this.nonceLength = n.NONCE_LENGTH, this.tagLength = n.TAG_LENGTH, b.length !== n.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(b)
            }
            return v.prototype.seal = function(b, S, A, $) {
                if (b.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var R = new Uint8Array(16);
                R.set(b, R.length - b.length);
                var H = new Uint8Array(32);
                t.stream(this._key, R, H, 4);
                var K = S.length + this.tagLength,
                    B;
                if ($) {
                    if ($.length !== K) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    B = $
                } else B = new Uint8Array(K);
                return t.streamXOR(this._key, R, S, B, 4), this._authenticate(B.subarray(B.length - this.tagLength, B.length), H, B.subarray(0, B.length - this.tagLength), A), s.wipe(R), B
            }, v.prototype.open = function(b, S, A, $) {
                if (b.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (S.length < this.tagLength) return null;
                var R = new Uint8Array(16);
                R.set(b, R.length - b.length);
                var H = new Uint8Array(32);
                t.stream(this._key, R, H, 4);
                var K = new Uint8Array(this.tagLength);
                if (this._authenticate(K, H, S.subarray(0, S.length - this.tagLength), A), !l.equal(K, S.subarray(S.length - this.tagLength, S.length))) return null;
                var B = S.length - this.tagLength,
                    oe;
                if ($) {
                    if ($.length !== B) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    oe = $
                } else oe = new Uint8Array(B);
                return t.streamXOR(this._key, R, S.subarray(0, S.length - this.tagLength), oe, 4), s.wipe(R), oe
            }, v.prototype.clean = function() {
                return s.wipe(this._key), this
            }, v.prototype._authenticate = function(b, S, A, $) {
                var R = new r.Poly1305(S);
                $ && (R.update($), $.length % 16 > 0 && R.update(p.subarray($.length % 16))), R.update(A), A.length % 16 > 0 && R.update(p.subarray(A.length % 16));
                var H = new Uint8Array(8);
                $ && a.writeUint64LE($.length, H), R.update(H), a.writeUint64LE(A.length, H), R.update(H);
                for (var K = R.digest(), B = 0; B < K.length; B++) b[B] = K[B];
                R.clean(), s.wipe(K), s.wipe(H)
            }, v
        }();
    n.ChaCha20Poly1305 = d
})(du);
var Ad = {},
    Ss = {},
    pu = {};
Object.defineProperty(pu, "__esModule", {
    value: !0
});

function Lw(n) {
    return typeof n.saveState < "u" && typeof n.restoreState < "u" && typeof n.cleanSavedState < "u"
}
pu.isSerializableHash = Lw;
Object.defineProperty(Ss, "__esModule", {
    value: !0
});
var Zr = pu,
    Uw = Li,
    Fw = Or,
    Nd = function() {
        function n(t, r) {
            this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var s = new Uint8Array(this.blockSize);
            r.length > this.blockSize ? this._inner.update(r).finish(s).clean() : s.set(r);
            for (var a = 0; a < s.length; a++) s[a] ^= 54;
            this._inner.update(s);
            for (var a = 0; a < s.length; a++) s[a] ^= 106;
            this._outer.update(s), Zr.isSerializableHash(this._inner) && Zr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Fw.wipe(s)
        }
        return n.prototype.reset = function() {
            if (!Zr.isSerializableHash(this._inner) || !Zr.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, n.prototype.clean = function() {
            Zr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Zr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
        }, n.prototype.update = function(t) {
            return this._inner.update(t), this
        }, n.prototype.finish = function(t) {
            return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this)
        }, n.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, n.prototype.saveState = function() {
            if (!Zr.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState()
        }, n.prototype.restoreState = function(t) {
            if (!Zr.isSerializableHash(this._inner) || !Zr.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, n.prototype.cleanSavedState = function(t) {
            if (!Zr.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(t)
        }, n
    }();
Ss.HMAC = Nd;

function $w(n, t, r) {
    var s = new Nd(n, t);
    s.update(r);
    var a = s.digest();
    return s.clean(), a
}
Ss.hmac = $w;
Ss.equal = Uw.equal;
Object.defineProperty(Ad, "__esModule", {
    value: !0
});
var sf = Ss,
    of = Or,
    Dw = function() {
        function n(t, r, s, a) {
            s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = a;
            var l = sf.hmac(this._hash, s, r);
            this._hmac = new sf.HMAC(t, l), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return n.prototype._fillBuffer = function() {
            this._counter[0]++;
            var t = this._counter[0];
            if (t === 0) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, n.prototype.expand = function(t) {
            for (var r = new Uint8Array(t), s = 0; s < r.length; s++) this._bufpos === this._buffer.length && this._fillBuffer(), r[s] = this._buffer[this._bufpos++];
            return r
        }, n.prototype.clean = function() {
            this._hmac.clean(), of .wipe(this._buffer), of .wipe(this._counter), this._bufpos = 0
        }, n
    }(),
    Mw = Ad.HKDF = Dw,
    Xo = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = $e,
        r = Or;
    n.DIGEST_LENGTH = 32, n.BLOCK_SIZE = 64;
    var s = function() {
        function d() {
            this.digestLength = n.DIGEST_LENGTH, this.blockSize = n.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return d.prototype._initState = function() {
            this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
        }, d.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, d.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._temp), this.reset()
        }, d.prototype.update = function(v, b) {
            if (b === void 0 && (b = v.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
            var S = 0;
            if (this._bytesHashed += b, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && b > 0;) this._buffer[this._bufferLength++] = v[S++], b--;
                this._bufferLength === this.blockSize && (l(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (b >= this.blockSize && (S = l(this._temp, this._state, v, S, b), b %= this.blockSize); b > 0;) this._buffer[this._bufferLength++] = v[S++], b--;
            return this
        }, d.prototype.finish = function(v) {
            if (!this._finished) {
                var b = this._bytesHashed,
                    S = this._bufferLength,
                    A = b / 536870912 | 0,
                    $ = b << 3,
                    R = b % 64 < 56 ? 64 : 128;
                this._buffer[S] = 128;
                for (var H = S + 1; H < R - 8; H++) this._buffer[H] = 0;
                t.writeUint32BE(A, this._buffer, R - 8), t.writeUint32BE($, this._buffer, R - 4), l(this._temp, this._state, this._buffer, 0, R), this._finished = !0
            }
            for (var H = 0; H < this.digestLength / 4; H++) t.writeUint32BE(this._state[H], v, H * 4);
            return this
        }, d.prototype.digest = function() {
            var v = new Uint8Array(this.digestLength);
            return this.finish(v), v
        }, d.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, d.prototype.restoreState = function(v) {
            return this._state.set(v.state), this._bufferLength = v.bufferLength, v.buffer && this._buffer.set(v.buffer), this._bytesHashed = v.bytesHashed, this._finished = !1, this
        }, d.prototype.cleanSavedState = function(v) {
            r.wipe(v.state), v.buffer && r.wipe(v.buffer), v.bufferLength = 0, v.bytesHashed = 0
        }, d
    }();
    n.SHA256 = s;
    var a = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

    function l(d, v, b, S, A) {
        for (; A >= 64;) {
            for (var $ = v[0], R = v[1], H = v[2], K = v[3], B = v[4], oe = v[5], T = v[6], D = v[7], I = 0; I < 16; I++) {
                var P = S + I * 4;
                d[I] = t.readUint32BE(b, P)
            }
            for (var I = 16; I < 64; I++) {
                var m = d[I - 2],
                    u = (m >>> 17 | m << 32 - 17) ^ (m >>> 19 | m << 32 - 19) ^ m >>> 10;
                m = d[I - 15];
                var _ = (m >>> 7 | m << 32 - 7) ^ (m >>> 18 | m << 32 - 18) ^ m >>> 3;
                d[I] = (u + d[I - 7] | 0) + (_ + d[I - 16] | 0)
            }
            for (var I = 0; I < 64; I++) {
                var u = (((B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (B & oe ^ ~B & T) | 0) + (D + (a[I] + d[I] | 0) | 0) | 0,
                    _ = (($ >>> 2 | $ << 32 - 2) ^ ($ >>> 13 | $ << 32 - 13) ^ ($ >>> 22 | $ << 32 - 22)) + ($ & R ^ $ & H ^ R & H) | 0;
                D = T, T = oe, oe = B, B = K + u | 0, K = H, H = R, R = $, $ = u + _ | 0
            }
            v[0] += $, v[1] += R, v[2] += H, v[3] += K, v[4] += B, v[5] += oe, v[6] += T, v[7] += D, S += 64, A -= 64
        }
        return S
    }

    function p(d) {
        var v = new s;
        v.update(d);
        var b = v.digest();
        return v.clean(), b
    }
    n.hash = p
})(Xo);
var gu = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.sharedKey = n.generateKeyPair = n.generateKeyPairFromSeed = n.scalarMultBase = n.scalarMult = n.SHARED_KEY_LENGTH = n.SECRET_KEY_LENGTH = n.PUBLIC_KEY_LENGTH = void 0;
    const t = Un,
        r = Or;
    n.PUBLIC_KEY_LENGTH = 32, n.SECRET_KEY_LENGTH = 32, n.SHARED_KEY_LENGTH = 32;

    function s(I) {
        const P = new Float64Array(16);
        if (I)
            for (let m = 0; m < I.length; m++) P[m] = I[m];
        return P
    }
    const a = new Uint8Array(32);
    a[0] = 9;
    const l = s([56129, 1]);

    function p(I) {
        let P = 1;
        for (let m = 0; m < 16; m++) {
            let u = I[m] + P + 65535;
            P = Math.floor(u / 65536), I[m] = u - P * 65536
        }
        I[0] += P - 1 + 37 * (P - 1)
    }

    function d(I, P, m) {
        const u = ~(m - 1);
        for (let _ = 0; _ < 16; _++) {
            const G = u & (I[_] ^ P[_]);
            I[_] ^= G, P[_] ^= G
        }
    }

    function v(I, P) {
        const m = s(),
            u = s();
        for (let _ = 0; _ < 16; _++) u[_] = P[_];
        p(u), p(u), p(u);
        for (let _ = 0; _ < 2; _++) {
            m[0] = u[0] - 65517;
            for (let V = 1; V < 15; V++) m[V] = u[V] - 65535 - (m[V - 1] >> 16 & 1), m[V - 1] &= 65535;
            m[15] = u[15] - 32767 - (m[14] >> 16 & 1);
            const G = m[15] >> 16 & 1;
            m[14] &= 65535, d(u, m, 1 - G)
        }
        for (let _ = 0; _ < 16; _++) I[2 * _] = u[_] & 255, I[2 * _ + 1] = u[_] >> 8
    }

    function b(I, P) {
        for (let m = 0; m < 16; m++) I[m] = P[2 * m] + (P[2 * m + 1] << 8);
        I[15] &= 32767
    }

    function S(I, P, m) {
        for (let u = 0; u < 16; u++) I[u] = P[u] + m[u]
    }

    function A(I, P, m) {
        for (let u = 0; u < 16; u++) I[u] = P[u] - m[u]
    }

    function $(I, P, m) {
        let u, _, G = 0,
            V = 0,
            se = 0,
            ce = 0,
            ge = 0,
            C = 0,
            q = 0,
            le = 0,
            te = 0,
            W = 0,
            ee = 0,
            Y = 0,
            re = 0,
            Oe = 0,
            ie = 0,
            we = 0,
            he = 0,
            _e = 0,
            j = 0,
            M = 0,
            N = 0,
            h = 0,
            x = 0,
            ne = 0,
            fe = 0,
            Ie = 0,
            ze = 0,
            ke = 0,
            De = 0,
            pt = 0,
            gt = 0,
            je = m[0],
            xe = m[1],
            Le = m[2],
            Ue = m[3],
            qe = m[4],
            Ae = m[5],
            Fe = m[6],
            Se = m[7],
            Ne = m[8],
            Ke = m[9],
            Pe = m[10],
            Ve = m[11],
            We = m[12],
            et = m[13],
            tt = m[14],
            Je = m[15];
        u = P[0], G += u * je, V += u * xe, se += u * Le, ce += u * Ue, ge += u * qe, C += u * Ae, q += u * Fe, le += u * Se, te += u * Ne, W += u * Ke, ee += u * Pe, Y += u * Ve, re += u * We, Oe += u * et, ie += u * tt, we += u * Je, u = P[1], V += u * je, se += u * xe, ce += u * Le, ge += u * Ue, C += u * qe, q += u * Ae, le += u * Fe, te += u * Se, W += u * Ne, ee += u * Ke, Y += u * Pe, re += u * Ve, Oe += u * We, ie += u * et, we += u * tt, he += u * Je, u = P[2], se += u * je, ce += u * xe, ge += u * Le, C += u * Ue, q += u * qe, le += u * Ae, te += u * Fe, W += u * Se, ee += u * Ne, Y += u * Ke, re += u * Pe, Oe += u * Ve, ie += u * We, we += u * et, he += u * tt, _e += u * Je, u = P[3], ce += u * je, ge += u * xe, C += u * Le, q += u * Ue, le += u * qe, te += u * Ae, W += u * Fe, ee += u * Se, Y += u * Ne, re += u * Ke, Oe += u * Pe, ie += u * Ve, we += u * We, he += u * et, _e += u * tt, j += u * Je, u = P[4], ge += u * je, C += u * xe, q += u * Le, le += u * Ue, te += u * qe, W += u * Ae, ee += u * Fe, Y += u * Se, re += u * Ne, Oe += u * Ke, ie += u * Pe, we += u * Ve, he += u * We, _e += u * et, j += u * tt, M += u * Je, u = P[5], C += u * je, q += u * xe, le += u * Le, te += u * Ue, W += u * qe, ee += u * Ae, Y += u * Fe, re += u * Se, Oe += u * Ne, ie += u * Ke, we += u * Pe, he += u * Ve, _e += u * We, j += u * et, M += u * tt, N += u * Je, u = P[6], q += u * je, le += u * xe, te += u * Le, W += u * Ue, ee += u * qe, Y += u * Ae, re += u * Fe, Oe += u * Se, ie += u * Ne, we += u * Ke, he += u * Pe, _e += u * Ve, j += u * We, M += u * et, N += u * tt, h += u * Je, u = P[7], le += u * je, te += u * xe, W += u * Le, ee += u * Ue, Y += u * qe, re += u * Ae, Oe += u * Fe, ie += u * Se, we += u * Ne, he += u * Ke, _e += u * Pe, j += u * Ve, M += u * We, N += u * et, h += u * tt, x += u * Je, u = P[8], te += u * je, W += u * xe, ee += u * Le, Y += u * Ue, re += u * qe, Oe += u * Ae, ie += u * Fe, we += u * Se, he += u * Ne, _e += u * Ke, j += u * Pe, M += u * Ve, N += u * We, h += u * et, x += u * tt, ne += u * Je, u = P[9], W += u * je, ee += u * xe, Y += u * Le, re += u * Ue, Oe += u * qe, ie += u * Ae, we += u * Fe, he += u * Se, _e += u * Ne, j += u * Ke, M += u * Pe, N += u * Ve, h += u * We, x += u * et, ne += u * tt, fe += u * Je, u = P[10], ee += u * je, Y += u * xe, re += u * Le, Oe += u * Ue, ie += u * qe, we += u * Ae, he += u * Fe, _e += u * Se, j += u * Ne, M += u * Ke, N += u * Pe, h += u * Ve, x += u * We, ne += u * et, fe += u * tt, Ie += u * Je, u = P[11], Y += u * je, re += u * xe, Oe += u * Le, ie += u * Ue, we += u * qe, he += u * Ae, _e += u * Fe, j += u * Se, M += u * Ne, N += u * Ke, h += u * Pe, x += u * Ve, ne += u * We, fe += u * et, Ie += u * tt, ze += u * Je, u = P[12], re += u * je, Oe += u * xe, ie += u * Le, we += u * Ue, he += u * qe, _e += u * Ae, j += u * Fe, M += u * Se, N += u * Ne, h += u * Ke, x += u * Pe, ne += u * Ve, fe += u * We, Ie += u * et, ze += u * tt, ke += u * Je, u = P[13], Oe += u * je, ie += u * xe, we += u * Le, he += u * Ue, _e += u * qe, j += u * Ae, M += u * Fe, N += u * Se, h += u * Ne, x += u * Ke, ne += u * Pe, fe += u * Ve, Ie += u * We, ze += u * et, ke += u * tt, De += u * Je, u = P[14], ie += u * je, we += u * xe, he += u * Le, _e += u * Ue, j += u * qe, M += u * Ae, N += u * Fe, h += u * Se, x += u * Ne, ne += u * Ke, fe += u * Pe, Ie += u * Ve, ze += u * We, ke += u * et, De += u * tt, pt += u * Je, u = P[15], we += u * je, he += u * xe, _e += u * Le, j += u * Ue, M += u * qe, N += u * Ae, h += u * Fe, x += u * Se, ne += u * Ne, fe += u * Ke, Ie += u * Pe, ze += u * Ve, ke += u * We, De += u * et, pt += u * tt, gt += u * Je, G += 38 * he, V += 38 * _e, se += 38 * j, ce += 38 * M, ge += 38 * N, C += 38 * h, q += 38 * x, le += 38 * ne, te += 38 * fe, W += 38 * Ie, ee += 38 * ze, Y += 38 * ke, re += 38 * De, Oe += 38 * pt, ie += 38 * gt, _ = 1, u = G + _ + 65535, _ = Math.floor(u / 65536), G = u - _ * 65536, u = V + _ + 65535, _ = Math.floor(u / 65536), V = u - _ * 65536, u = se + _ + 65535, _ = Math.floor(u / 65536), se = u - _ * 65536, u = ce + _ + 65535, _ = Math.floor(u / 65536), ce = u - _ * 65536, u = ge + _ + 65535, _ = Math.floor(u / 65536), ge = u - _ * 65536, u = C + _ + 65535, _ = Math.floor(u / 65536), C = u - _ * 65536, u = q + _ + 65535, _ = Math.floor(u / 65536), q = u - _ * 65536, u = le + _ + 65535, _ = Math.floor(u / 65536), le = u - _ * 65536, u = te + _ + 65535, _ = Math.floor(u / 65536), te = u - _ * 65536, u = W + _ + 65535, _ = Math.floor(u / 65536), W = u - _ * 65536, u = ee + _ + 65535, _ = Math.floor(u / 65536), ee = u - _ * 65536, u = Y + _ + 65535, _ = Math.floor(u / 65536), Y = u - _ * 65536, u = re + _ + 65535, _ = Math.floor(u / 65536), re = u - _ * 65536, u = Oe + _ + 65535, _ = Math.floor(u / 65536), Oe = u - _ * 65536, u = ie + _ + 65535, _ = Math.floor(u / 65536), ie = u - _ * 65536, u = we + _ + 65535, _ = Math.floor(u / 65536), we = u - _ * 65536, G += _ - 1 + 37 * (_ - 1), _ = 1, u = G + _ + 65535, _ = Math.floor(u / 65536), G = u - _ * 65536, u = V + _ + 65535, _ = Math.floor(u / 65536), V = u - _ * 65536, u = se + _ + 65535, _ = Math.floor(u / 65536), se = u - _ * 65536, u = ce + _ + 65535, _ = Math.floor(u / 65536), ce = u - _ * 65536, u = ge + _ + 65535, _ = Math.floor(u / 65536), ge = u - _ * 65536, u = C + _ + 65535, _ = Math.floor(u / 65536), C = u - _ * 65536, u = q + _ + 65535, _ = Math.floor(u / 65536), q = u - _ * 65536, u = le + _ + 65535, _ = Math.floor(u / 65536), le = u - _ * 65536, u = te + _ + 65535, _ = Math.floor(u / 65536), te = u - _ * 65536, u = W + _ + 65535, _ = Math.floor(u / 65536), W = u - _ * 65536, u = ee + _ + 65535, _ = Math.floor(u / 65536), ee = u - _ * 65536, u = Y + _ + 65535, _ = Math.floor(u / 65536), Y = u - _ * 65536, u = re + _ + 65535, _ = Math.floor(u / 65536), re = u - _ * 65536, u = Oe + _ + 65535, _ = Math.floor(u / 65536), Oe = u - _ * 65536, u = ie + _ + 65535, _ = Math.floor(u / 65536), ie = u - _ * 65536, u = we + _ + 65535, _ = Math.floor(u / 65536), we = u - _ * 65536, G += _ - 1 + 37 * (_ - 1), I[0] = G, I[1] = V, I[2] = se, I[3] = ce, I[4] = ge, I[5] = C, I[6] = q, I[7] = le, I[8] = te, I[9] = W, I[10] = ee, I[11] = Y, I[12] = re, I[13] = Oe, I[14] = ie, I[15] = we
    }

    function R(I, P) {
        $(I, P, P)
    }

    function H(I, P) {
        const m = s();
        for (let u = 0; u < 16; u++) m[u] = P[u];
        for (let u = 253; u >= 0; u--) R(m, m), u !== 2 && u !== 4 && $(m, m, P);
        for (let u = 0; u < 16; u++) I[u] = m[u]
    }

    function K(I, P) {
        const m = new Uint8Array(32),
            u = new Float64Array(80),
            _ = s(),
            G = s(),
            V = s(),
            se = s(),
            ce = s(),
            ge = s();
        for (let te = 0; te < 31; te++) m[te] = I[te];
        m[31] = I[31] & 127 | 64, m[0] &= 248, b(u, P);
        for (let te = 0; te < 16; te++) G[te] = u[te];
        _[0] = se[0] = 1;
        for (let te = 254; te >= 0; --te) {
            const W = m[te >>> 3] >>> (te & 7) & 1;
            d(_, G, W), d(V, se, W), S(ce, _, V), A(_, _, V), S(V, G, se), A(G, G, se), R(se, ce), R(ge, _), $(_, V, _), $(V, G, ce), S(ce, _, V), A(_, _, V), R(G, _), A(V, se, ge), $(_, V, l), S(_, _, se), $(V, V, _), $(_, se, ge), $(se, G, u), R(G, ce), d(_, G, W), d(V, se, W)
        }
        for (let te = 0; te < 16; te++) u[te + 16] = _[te], u[te + 32] = V[te], u[te + 48] = G[te], u[te + 64] = se[te];
        const C = u.subarray(32),
            q = u.subarray(16);
        H(C, C), $(q, q, C);
        const le = new Uint8Array(32);
        return v(le, q), le
    }
    n.scalarMult = K;

    function B(I) {
        return K(I, a)
    }
    n.scalarMultBase = B;

    function oe(I) {
        if (I.length !== n.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${n.SECRET_KEY_LENGTH} bytes`);
        const P = new Uint8Array(I);
        return {
            publicKey: B(P),
            secretKey: P
        }
    }
    n.generateKeyPairFromSeed = oe;

    function T(I) {
        const P = (0, t.randomBytes)(32, I),
            m = oe(P);
        return (0, r.wipe)(P), m
    }
    n.generateKeyPair = T;

    function D(I, P, m = !1) {
        if (I.length !== n.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
        if (P.length !== n.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
        const u = K(I, P);
        if (m) {
            let _ = 0;
            for (let G = 0; G < u.length; G++) _ |= u[G];
            if (_ === 0) throw new Error("X25519: invalid shared key")
        }
        return u
    }
    n.sharedKey = D
})(gu);
var lt = {};
Object.defineProperty(lt, "__esModule", {
    value: !0
});
lt.getLocalStorage = lt.getLocalStorageOrThrow = lt.getCrypto = lt.getCryptoOrThrow = Td = lt.getLocation = lt.getLocationOrThrow = vu = lt.getNavigator = lt.getNavigatorOrThrow = Rd = lt.getDocument = lt.getDocumentOrThrow = lt.getFromWindowOrThrow = lt.getFromWindow = void 0;

function rn(n) {
    let t;
    return typeof window < "u" && typeof window[n] < "u" && (t = window[n]), t
}
lt.getFromWindow = rn;

function Fn(n) {
    const t = rn(n);
    if (!t) throw new Error(`${n} is not defined in Window`);
    return t
}
lt.getFromWindowOrThrow = Fn;

function jw() {
    return Fn("document")
}
lt.getDocumentOrThrow = jw;

function qw() {
    return rn("document")
}
var Rd = lt.getDocument = qw;

function Hw() {
    return Fn("navigator")
}
lt.getNavigatorOrThrow = Hw;

function zw() {
    return rn("navigator")
}
var vu = lt.getNavigator = zw;

function Kw() {
    return Fn("location")
}
lt.getLocationOrThrow = Kw;

function Bw() {
    return rn("location")
}
var Td = lt.getLocation = Bw;

function kw() {
    return Fn("crypto")
}
lt.getCryptoOrThrow = kw;

function Vw() {
    return rn("crypto")
}
lt.getCrypto = Vw;

function Gw() {
    return Fn("localStorage")
}
lt.getLocalStorageOrThrow = Gw;

function Ww() {
    return rn("localStorage")
}
lt.getLocalStorage = Ww;
var yu = {};
Object.defineProperty(yu, "__esModule", {
    value: !0
});
var Cd = yu.getWindowMetadata = void 0;
const af = lt;

function Yw() {
    let n, t;
    try {
        n = af.getDocumentOrThrow(), t = af.getLocationOrThrow()
    } catch {
        return null
    }

    function r() {
        const A = n.getElementsByTagName("link"),
            $ = [];
        for (let R = 0; R < A.length; R++) {
            const H = A[R],
                K = H.getAttribute("rel");
            if (K && K.toLowerCase().indexOf("icon") > -1) {
                const B = H.getAttribute("href");
                if (B)
                    if (B.toLowerCase().indexOf("https:") === -1 && B.toLowerCase().indexOf("http:") === -1 && B.indexOf("//") !== 0) {
                        let oe = t.protocol + "//" + t.host;
                        if (B.indexOf("/") === 0) oe += B;
                        else {
                            const T = t.pathname.split("/");
                            T.pop();
                            const D = T.join("/");
                            oe += D + "/" + B
                        }
                        $.push(oe)
                    } else if (B.indexOf("//") === 0) {
                    const oe = t.protocol + B;
                    $.push(oe)
                } else $.push(B)
            }
        }
        return $
    }

    function s(...A) {
        const $ = n.getElementsByTagName("meta");
        for (let R = 0; R < $.length; R++) {
            const H = $[R],
                K = ["itemprop", "property", "name"].map(B => H.getAttribute(B)).filter(B => B ? A.includes(B) : !1);
            if (K.length && K) {
                const B = H.getAttribute("content");
                if (B) return B
            }
        }
        return ""
    }

    function a() {
        let A = s("name", "og:site_name", "og:title", "twitter:title");
        return A || (A = n.title), A
    }

    function l() {
        return s("description", "og:description", "twitter:description", "keywords")
    }
    const p = a(),
        d = l(),
        v = t.origin,
        b = r();
    return {
        description: d,
        url: v,
        icons: b,
        name: p
    }
}
Cd = yu.getWindowMetadata = Yw;
var ws = {},
    Jw = n => encodeURIComponent(n).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`),
    Ld = "%[a-f0-9]{2}",
    cf = new RegExp("(" + Ld + ")|([^%]+?)", "gi"),
    uf = new RegExp("(" + Ld + ")+", "gi");

function eu(n, t) {
    try {
        return [decodeURIComponent(n.join(""))]
    } catch {}
    if (n.length === 1) return n;
    t = t || 1;
    var r = n.slice(0, t),
        s = n.slice(t);
    return Array.prototype.concat.call([], eu(r), eu(s))
}

function Qw(n) {
    try {
        return decodeURIComponent(n)
    } catch {
        for (var t = n.match(cf) || [], r = 1; r < t.length; r++) n = eu(t, r).join(""), t = n.match(cf) || [];
        return n
    }
}

function Xw(n) {
    for (var t = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, r = uf.exec(n); r;) {
        try {
            t[r[0]] = decodeURIComponent(r[0])
        } catch {
            var s = Qw(r[0]);
            s !== r[0] && (t[r[0]] = s)
        }
        r = uf.exec(n)
    }
    t["%C2"] = "�";
    for (var a = Object.keys(t), l = 0; l < a.length; l++) {
        var p = a[l];
        n = n.replace(new RegExp(p, "g"), t[p])
    }
    return n
}
var Zw = function(n) {
        if (typeof n != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof n + "`");
        try {
            return n = n.replace(/\+/g, " "), decodeURIComponent(n)
        } catch {
            return Xw(n)
        }
    },
    eb = (n, t) => {
        if (!(typeof n == "string" && typeof t == "string")) throw new TypeError("Expected the arguments to be of type `string`");
        if (t === "") return [n];
        const r = n.indexOf(t);
        return r === -1 ? [n] : [n.slice(0, r), n.slice(r + t.length)]
    },
    tb = function(n, t) {
        for (var r = {}, s = Object.keys(n), a = Array.isArray(t), l = 0; l < s.length; l++) {
            var p = s[l],
                d = n[p];
            (a ? t.indexOf(p) !== -1 : t(p, d, n)) && (r[p] = d)
        }
        return r
    };
(function(n) {
    const t = Jw,
        r = Zw,
        s = eb,
        a = tb,
        l = T => T == null,
        p = Symbol("encodeFragmentIdentifier");

    function d(T) {
        switch (T.arrayFormat) {
            case "index":
                return D => (I, P) => {
                    const m = I.length;
                    return P === void 0 || T.skipNull && P === null || T.skipEmptyString && P === "" ? I : P === null ? [...I, [S(D, T), "[", m, "]"].join("")] : [...I, [S(D, T), "[", S(m, T), "]=", S(P, T)].join("")]
                };
            case "bracket":
                return D => (I, P) => P === void 0 || T.skipNull && P === null || T.skipEmptyString && P === "" ? I : P === null ? [...I, [S(D, T), "[]"].join("")] : [...I, [S(D, T), "[]=", S(P, T)].join("")];
            case "colon-list-separator":
                return D => (I, P) => P === void 0 || T.skipNull && P === null || T.skipEmptyString && P === "" ? I : P === null ? [...I, [S(D, T), ":list="].join("")] : [...I, [S(D, T), ":list=", S(P, T)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
                {
                    const D = T.arrayFormat === "bracket-separator" ? "[]=" : "=";
                    return I => (P, m) => m === void 0 || T.skipNull && m === null || T.skipEmptyString && m === "" ? P : (m = m === null ? "" : m, P.length === 0 ? [
                        [S(I, T), D, S(m, T)].join("")
                    ] : [
                        [P, S(m, T)].join(T.arrayFormatSeparator)
                    ])
                }
            default:
                return D => (I, P) => P === void 0 || T.skipNull && P === null || T.skipEmptyString && P === "" ? I : P === null ? [...I, S(D, T)] : [...I, [S(D, T), "=", S(P, T)].join("")]
        }
    }

    function v(T) {
        let D;
        switch (T.arrayFormat) {
            case "index":
                return (I, P, m) => {
                    if (D = /\[(\d*)\]$/.exec(I), I = I.replace(/\[\d*\]$/, ""), !D) {
                        m[I] = P;
                        return
                    }
                    m[I] === void 0 && (m[I] = {}), m[I][D[1]] = P
                };
            case "bracket":
                return (I, P, m) => {
                    if (D = /(\[\])$/.exec(I), I = I.replace(/\[\]$/, ""), !D) {
                        m[I] = P;
                        return
                    }
                    if (m[I] === void 0) {
                        m[I] = [P];
                        return
                    }
                    m[I] = [].concat(m[I], P)
                };
            case "colon-list-separator":
                return (I, P, m) => {
                    if (D = /(:list)$/.exec(I), I = I.replace(/:list$/, ""), !D) {
                        m[I] = P;
                        return
                    }
                    if (m[I] === void 0) {
                        m[I] = [P];
                        return
                    }
                    m[I] = [].concat(m[I], P)
                };
            case "comma":
            case "separator":
                return (I, P, m) => {
                    const u = typeof P == "string" && P.includes(T.arrayFormatSeparator),
                        _ = typeof P == "string" && !u && A(P, T).includes(T.arrayFormatSeparator);
                    P = _ ? A(P, T) : P;
                    const G = u || _ ? P.split(T.arrayFormatSeparator).map(V => A(V, T)) : P === null ? P : A(P, T);
                    m[I] = G
                };
            case "bracket-separator":
                return (I, P, m) => {
                    const u = /(\[\])$/.test(I);
                    if (I = I.replace(/\[\]$/, ""), !u) {
                        m[I] = P && A(P, T);
                        return
                    }
                    const _ = P === null ? [] : P.split(T.arrayFormatSeparator).map(G => A(G, T));
                    if (m[I] === void 0) {
                        m[I] = _;
                        return
                    }
                    m[I] = [].concat(m[I], _)
                };
            default:
                return (I, P, m) => {
                    if (m[I] === void 0) {
                        m[I] = P;
                        return
                    }
                    m[I] = [].concat(m[I], P)
                }
        }
    }

    function b(T) {
        if (typeof T != "string" || T.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function S(T, D) {
        return D.encode ? D.strict ? t(T) : encodeURIComponent(T) : T
    }

    function A(T, D) {
        return D.decode ? r(T) : T
    }

    function $(T) {
        return Array.isArray(T) ? T.sort() : typeof T == "object" ? $(Object.keys(T)).sort((D, I) => Number(D) - Number(I)).map(D => T[D]) : T
    }

    function R(T) {
        const D = T.indexOf("#");
        return D !== -1 && (T = T.slice(0, D)), T
    }

    function H(T) {
        let D = "";
        const I = T.indexOf("#");
        return I !== -1 && (D = T.slice(I)), D
    }

    function K(T) {
        T = R(T);
        const D = T.indexOf("?");
        return D === -1 ? "" : T.slice(D + 1)
    }

    function B(T, D) {
        return D.parseNumbers && !Number.isNaN(Number(T)) && typeof T == "string" && T.trim() !== "" ? T = Number(T) : D.parseBooleans && T !== null && (T.toLowerCase() === "true" || T.toLowerCase() === "false") && (T = T.toLowerCase() === "true"), T
    }

    function oe(T, D) {
        D = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, D), b(D.arrayFormatSeparator);
        const I = v(D),
            P = Object.create(null);
        if (typeof T != "string" || (T = T.trim().replace(/^[?#&]/, ""), !T)) return P;
        for (const m of T.split("&")) {
            if (m === "") continue;
            let [u, _] = s(D.decode ? m.replace(/\+/g, " ") : m, "=");
            _ = _ === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? _ : A(_, D), I(A(u, D), _, P)
        }
        for (const m of Object.keys(P)) {
            const u = P[m];
            if (typeof u == "object" && u !== null)
                for (const _ of Object.keys(u)) u[_] = B(u[_], D);
            else P[m] = B(u, D)
        }
        return D.sort === !1 ? P : (D.sort === !0 ? Object.keys(P).sort() : Object.keys(P).sort(D.sort)).reduce((m, u) => {
            const _ = P[u];
            return _ && typeof _ == "object" && !Array.isArray(_) ? m[u] = $(_) : m[u] = _, m
        }, Object.create(null))
    }
    n.extract = K, n.parse = oe, n.stringify = (T, D) => {
        if (!T) return "";
        D = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, D), b(D.arrayFormatSeparator);
        const I = _ => D.skipNull && l(T[_]) || D.skipEmptyString && T[_] === "",
            P = d(D),
            m = {};
        for (const _ of Object.keys(T)) I(_) || (m[_] = T[_]);
        const u = Object.keys(m);
        return D.sort !== !1 && u.sort(D.sort), u.map(_ => {
            const G = T[_];
            return G === void 0 ? "" : G === null ? S(_, D) : Array.isArray(G) ? G.length === 0 && D.arrayFormat === "bracket-separator" ? S(_, D) + "[]" : G.reduce(P(_), []).join("&") : S(_, D) + "=" + S(G, D)
        }).filter(_ => _.length > 0).join("&")
    }, n.parseUrl = (T, D) => {
        D = Object.assign({
            decode: !0
        }, D);
        const [I, P] = s(T, "#");
        return Object.assign({
            url: I.split("?")[0] || "",
            query: oe(K(T), D)
        }, D && D.parseFragmentIdentifier && P ? {
            fragmentIdentifier: A(P, D)
        } : {})
    }, n.stringifyUrl = (T, D) => {
        D = Object.assign({
            encode: !0,
            strict: !0,
            [p]: !0
        }, D);
        const I = R(T.url).split("?")[0] || "",
            P = n.extract(T.url),
            m = n.parse(P, {
                sort: !1
            }),
            u = Object.assign(m, T.query);
        let _ = n.stringify(u, D);
        _ && (_ = `?${_}`);
        let G = H(T.url);
        return T.fragmentIdentifier && (G = `#${D[p]?S(T.fragmentIdentifier,D):T.fragmentIdentifier}`), `${I}${_}${G}`
    }, n.pick = (T, D, I) => {
        I = Object.assign({
            parseFragmentIdentifier: !0,
            [p]: !1
        }, I);
        const {
            url: P,
            query: m,
            fragmentIdentifier: u
        } = n.parseUrl(T, I);
        return n.stringifyUrl({
            url: P,
            query: a(m, D),
            fragmentIdentifier: u
        }, I)
    }, n.exclude = (T, D, I) => {
        const P = Array.isArray(D) ? m => !D.includes(m) : (m, u) => !D(m, u);
        return n.pick(T, P, I)
    }
})(ws);
const rb = {
        waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe"
        },
        irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe"
        },
        iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe"
        }
    },
    ib = ":";

function nb(n) {
    const [t, r] = n.split(ib);
    return {
        namespace: t,
        reference: r
    }
}

function sb(n, t = []) {
    const r = [];
    return Object.keys(n).forEach(s => {
        if (t.length && !t.includes(s)) return;
        const a = n[s];
        r.push(...a.accounts)
    }), r
}

function Ud(n, t) {
    return n.includes(":") ? [n] : t.chains || []
}
const Fd = "base10",
    ar = "base16",
    tu = "base64pad",
    _u = "utf8",
    $d = 0,
    nn = 1,
    ob = 0,
    hf = 1,
    ru = 12,
    mu = 32;

function ab() {
    const n = gu.generateKeyPair();
    return {
        privateKey: cr(n.secretKey, ar),
        publicKey: cr(n.publicKey, ar)
    }
}

function iu() {
    const n = Un.randomBytes(mu);
    return cr(n, ar)
}

function cb(n, t) {
    const r = gu.sharedKey(yr(n, ar), yr(t, ar), !0),
        s = new Mw(Xo.SHA256, r).expand(mu);
    return cr(s, ar)
}

function ub(n) {
    const t = Xo.hash(yr(n, ar));
    return cr(t, ar)
}

function Rn(n) {
    const t = Xo.hash(yr(n, _u));
    return cr(t, ar)
}

function hb(n) {
    return yr(`${n}`, Fd)
}

function Is(n) {
    return Number(cr(n, Fd))
}

function lb(n) {
    const t = hb(typeof n.type < "u" ? n.type : $d);
    if (Is(t) === nn && typeof n.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof n.senderPublicKey < "u" ? yr(n.senderPublicKey, ar) : void 0,
        s = typeof n.iv < "u" ? yr(n.iv, ar) : Un.randomBytes(ru),
        a = new du.ChaCha20Poly1305(yr(n.symKey, ar)).seal(s, yr(n.message, _u));
    return db({
        type: t,
        sealed: a,
        iv: s,
        senderPublicKey: r
    })
}

function fb(n) {
    const t = new du.ChaCha20Poly1305(yr(n.symKey, ar)),
        {
            sealed: r,
            iv: s
        } = Ko(n.encoded),
        a = t.open(s, r);
    if (a === null) throw new Error("Failed to decrypt");
    return cr(a, _u)
}

function db(n) {
    if (Is(n.type) === nn) {
        if (typeof n.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return cr(Wc([n.type, n.senderPublicKey, n.iv, n.sealed]), tu)
    }
    return cr(Wc([n.type, n.iv, n.sealed]), tu)
}

function Ko(n) {
    const t = yr(n, tu),
        r = t.slice(ob, hf),
        s = hf;
    if (Is(r) === nn) {
        const d = s + mu,
            v = d + ru,
            b = t.slice(s, d),
            S = t.slice(d, v),
            A = t.slice(v);
        return {
            type: r,
            sealed: A,
            iv: S,
            senderPublicKey: b
        }
    }
    const a = s + ru,
        l = t.slice(s, a),
        p = t.slice(a);
    return {
        type: r,
        sealed: p,
        iv: l
    }
}

function pb(n, t) {
    const r = Ko(n);
    return Dd({
        type: Is(r.type),
        senderPublicKey: typeof r.senderPublicKey < "u" ? cr(r.senderPublicKey, ar) : void 0,
        receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    })
}

function Dd(n) {
    const t = (n == null ? void 0 : n.type) || $d;
    if (t === nn) {
        if (typeof(n == null ? void 0 : n.senderPublicKey) > "u") throw new Error("missing sender public key");
        if (typeof(n == null ? void 0 : n.receiverPublicKey) > "u") throw new Error("missing receiver public key")
    }
    return {
        type: t,
        senderPublicKey: n == null ? void 0 : n.senderPublicKey,
        receiverPublicKey: n == null ? void 0 : n.receiverPublicKey
    }
}

function lf(n) {
    return n.type === nn && typeof n.senderPublicKey == "string" && typeof n.receiverPublicKey == "string"
}
var gb = Object.defineProperty,
    ff = Object.getOwnPropertySymbols,
    vb = Object.prototype.hasOwnProperty,
    yb = Object.prototype.propertyIsEnumerable,
    df = (n, t, r) => t in n ? gb(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    pf = (n, t) => {
        for (var r in t || (t = {})) vb.call(t, r) && df(n, r, t[r]);
        if (ff)
            for (var r of ff(t)) yb.call(t, r) && df(n, r, t[r]);
        return n
    };
const _b = "ReactNative",
    xr = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown"
    },
    mb = "js";

function wu() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function Zo() {
    return !Rd() && !!vu() && navigator.product === _b
}

function xs() {
    return !wu() && !!vu()
}

function Os() {
    return Zo() ? xr.reactNative : wu() ? xr.node : xs() ? xr.browser : xr.unknown
}

function wb(n, t) {
    let r = ws.parse(n);
    return r = pf(pf({}, r), t), n = ws.stringify(r), n
}

function bb() {
    return Cd() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}

function Eb() {
    if (Os() === xr.reactNative && typeof global < "u" && typeof(global == null ? void 0 : global.Platform) < "u") {
        const {
            OS: r,
            Version: s
        } = global.Platform;
        return [r, s].join("-")
    }
    const n = J_();
    if (n === null) return "unknown";
    const t = n.os ? n.os.replace(" ", "").toLowerCase() : "unknown";
    return n.type === "browser" ? [t, n.name, n.version].join("-") : [t, n.version].join("-")
}

function Sb() {
    var n;
    const t = Os();
    return t === xr.browser ? [t, ((n = Td()) == null ? void 0 : n.host) || "unknown"].join(":") : t
}

function Ib(n, t, r) {
    const s = Eb(),
        a = Sb();
    return [
        [n, t].join("-"), [mb, r].join("-"), s, a
    ].join("/")
}

function xb({
    protocol: n,
    version: t,
    relayUrl: r,
    sdkVersion: s,
    auth: a,
    projectId: l,
    useOnCloseEvent: p
}) {
    const d = r.split("?"),
        v = Ib(n, t, s),
        b = {
            auth: a,
            ua: v,
            projectId: l,
            useOnCloseEvent: p || void 0
        },
        S = wb(d[1] || "", b);
    return d[0] + "?" + S
}

function en(n, t) {
    return n.filter(r => t.includes(r)).length === n.length
}

function Md(n) {
    return Object.fromEntries(n.entries())
}

function jd(n) {
    return new Map(Object.entries(n))
}

function Nn(n = ye.FIVE_MINUTES, t) {
    const r = ye.toMiliseconds(n || ye.FIVE_MINUTES);
    let s, a, l;
    return {
        resolve: p => {
            l && s && (clearTimeout(l), s(p))
        },
        reject: p => {
            l && a && (clearTimeout(l), a(p))
        },
        done: () => new Promise((p, d) => {
            l = setTimeout(() => {
                d(new Error(t))
            }, r), s = p, a = d
        })
    }
}

function bs(n, t, r) {
    return new Promise(async (s, a) => {
        const l = setTimeout(() => a(new Error(r)), t);
        try {
            const p = await n;
            s(p)
        } catch (p) {
            a(p)
        }
        clearTimeout(l)
    })
}

function qd(n, t) {
    if (typeof t == "string" && t.startsWith(`${n}:`)) return t;
    if (n.toLowerCase() === "topic") {
        if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`
    } else if (n.toLowerCase() === "id") {
        if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`
    }
    throw new Error(`Unknown expirer target type: ${n}`)
}

function Ob(n) {
    return qd("topic", n)
}

function Pb(n) {
    return qd("id", n)
}

function Hd(n) {
    const [t, r] = n.split(":"), s = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof r == "string") s.topic = r;
    else if (t === "id" && Number.isInteger(Number(r))) s.id = Number(r);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
    return s
}

function kr(n, t) {
    return ye.fromMiliseconds((t || Date.now()) + ye.toMiliseconds(n))
}

function Ti(n) {
    return Date.now() >= ye.toMiliseconds(n)
}

function Ht(n, t) {
    return `${n}${t?`:${t}`:""}`
}

function Dc(n = [], t = []) {
    return [...new Set([...n, ...t])]
}
async function Ab({
    id: n,
    topic: t,
    wcDeepLink: r
}) {
    try {
        if (!r) return;
        const s = typeof r == "string" ? JSON.parse(r) : r;
        let a = s == null ? void 0 : s.href;
        if (typeof a != "string") return;
        a.endsWith("/") && (a = a.slice(0, -1));
        const l = `${a}/wc?requestId=${n}&sessionTopic=${t}`,
            p = Os();
        p === xr.browser ? l.startsWith("https://") ? window.open(l, "_blank", "noreferrer noopener") : window.open(l, "_self", "noreferrer noopener") : p === xr.reactNative && typeof(global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(l)
    } catch (s) {
        console.error(s)
    }
}
const Nb = "irn";

function nu(n) {
    return (n == null ? void 0 : n.relay) || {
        protocol: Nb
    }
}

function Do(n) {
    const t = rb[n];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${n}`);
    return t
}
var Rb = Object.defineProperty,
    gf = Object.getOwnPropertySymbols,
    Tb = Object.prototype.hasOwnProperty,
    Cb = Object.prototype.propertyIsEnumerable,
    vf = (n, t, r) => t in n ? Rb(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    Lb = (n, t) => {
        for (var r in t || (t = {})) Tb.call(t, r) && vf(n, r, t[r]);
        if (gf)
            for (var r of gf(t)) Cb.call(t, r) && vf(n, r, t[r]);
        return n
    };

function Ub(n, t = "-") {
    const r = {},
        s = "relay" + t;
    return Object.keys(n).forEach(a => {
        if (a.startsWith(s)) {
            const l = a.replace(s, ""),
                p = n[a];
            r[l] = p
        }
    }), r
}

function Fb(n) {
    const t = n.indexOf(":"),
        r = n.indexOf("?") !== -1 ? n.indexOf("?") : void 0,
        s = n.substring(0, t),
        a = n.substring(t + 1, r).split("@"),
        l = typeof r < "u" ? n.substring(r) : "",
        p = ws.parse(l);
    return {
        protocol: s,
        topic: $b(a[0]),
        version: parseInt(a[1], 10),
        symKey: p.symKey,
        relay: Ub(p)
    }
}

function $b(n) {
    return n.startsWith("//") ? n.substring(2) : n
}

function Db(n, t = "-") {
    const r = "relay",
        s = {};
    return Object.keys(n).forEach(a => {
        const l = r + t + a;
        n[a] && (s[l] = n[a])
    }), s
}

function Mb(n) {
    return `${n.protocol}:${n.topic}@${n.version}?` + ws.stringify(Lb({
        symKey: n.symKey
    }, Db(n.relay)))
}

function $n(n) {
    const t = [];
    return n.forEach(r => {
        const [s, a] = r.split(":");
        t.push(`${s}:${a}`)
    }), t
}

function jb(n) {
    const t = [];
    return Object.values(n).forEach(r => {
        t.push(...$n(r.accounts))
    }), t
}

function qb(n, t) {
    const r = [];
    return Object.values(n).forEach(s => {
        $n(s.accounts).includes(t) && r.push(...s.methods)
    }), r
}

function Hb(n, t) {
    const r = [];
    return Object.values(n).forEach(s => {
        $n(s.accounts).includes(t) && r.push(...s.events)
    }), r
}

function zb(n, t) {
    const r = Mo(n, t);
    if (r) throw new Error(r.message);
    const s = {};
    for (const [a, l] of Object.entries(n)) s[a] = {
        methods: l.methods,
        events: l.events,
        chains: l.accounts.map(p => `${p.split(":")[0]}:${p.split(":")[1]}`)
    };
    return s
}

function bu(n) {
    return n.includes(":")
}

function gs(n) {
    return bu(n) ? n.split(":")[0] : n
}
const Kb = {
        INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
        },
        INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
        },
        INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
        },
        INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
        },
        INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
        },
        UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
        },
        UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
        },
        UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
        },
        USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
        },
        USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
        },
        USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
        },
        USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
        },
        UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
        },
        UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
        },
        UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
        },
        UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
        },
        UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
        },
        USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
        },
        SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
        },
        WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
        }
    },
    Bb = {
        NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
        },
        NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
        },
        RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
        },
        RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
        },
        MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
        },
        EXPIRED: {
            message: "Expired.",
            code: 6
        },
        UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
        },
        MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
        },
        NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
        }
    };

function ue(n, t) {
    const {
        message: r,
        code: s
    } = Bb[n];
    return {
        message: t ? `${r} ${t}` : r,
        code: s
    }
}

function Ct(n, t) {
    const {
        message: r,
        code: s
    } = Kb[n];
    return {
        message: t ? `${r} ${t}` : r,
        code: s
    }
}

function ri(n, t) {
    return Array.isArray(n) ? typeof t < "u" && n.length ? n.every(t) : !0 : !1
}

function Tn(n) {
    return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length
}

function or(n) {
    return typeof n > "u"
}

function Vt(n, t) {
    return t && or(n) ? !0 : typeof n == "string" && !!n.trim().length
}

function Eu(n, t) {
    return t && or(n) ? !0 : typeof n == "number" && !isNaN(n)
}

function kb(n, t) {
    const {
        requiredNamespaces: r
    } = t, s = Object.keys(n.namespaces), a = Object.keys(r);
    let l = !0;
    return en(a, s) ? (s.forEach(p => {
        const {
            accounts: d,
            methods: v,
            events: b
        } = n.namespaces[p], S = $n(d), A = r[p];
        (!en(Ud(p, A), S) || !en(A.methods, v) || !en(A.events, b)) && (l = !1)
    }), l) : !1
}

function Bo(n) {
    return Vt(n, !1) && n.includes(":") ? n.split(":").length === 2 : !1
}

function Vb(n) {
    if (Vt(n, !1) && n.includes(":")) {
        const t = n.split(":");
        if (t.length === 3) {
            const r = t[0] + ":" + t[1];
            return !!t[2] && Bo(r)
        }
    }
    return !1
}

function Gb(n) {
    if (Vt(n, !1)) try {
        return typeof new URL(n) < "u"
    } catch {
        return !1
    }
    return !1
}

function Wb(n) {
    var t;
    return (t = n == null ? void 0 : n.proposer) == null ? void 0 : t.publicKey
}

function Yb(n) {
    return n == null ? void 0 : n.topic
}

function Jb(n, t) {
    let r = null;
    return Vt(n == null ? void 0 : n.publicKey, !1) || (r = ue("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r
}

function yf(n) {
    let t = !0;
    return ri(n) ? n.length && (t = n.every(r => Vt(r, !1))) : t = !1, t
}

function Qb(n, t, r) {
    let s = null;
    return ri(t) && t.length ? t.forEach(a => {
        s || Bo(a) || (s = Ct("UNSUPPORTED_CHAINS", `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`))
    }) : Bo(n) || (s = Ct("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s
}

function Xb(n, t, r) {
    let s = null;
    return Object.entries(n).forEach(([a, l]) => {
        if (s) return;
        const p = Qb(a, Ud(a, l), `${t} ${r}`);
        p && (s = p)
    }), s
}

function Zb(n, t) {
    let r = null;
    return ri(n) ? n.forEach(s => {
        r || Vb(s) || (r = Ct("UNSUPPORTED_ACCOUNTS", `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`))
    }) : r = Ct("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r
}

function eE(n, t) {
    let r = null;
    return Object.values(n).forEach(s => {
        if (r) return;
        const a = Zb(s == null ? void 0 : s.accounts, `${t} namespace`);
        a && (r = a)
    }), r
}

function tE(n, t) {
    let r = null;
    return yf(n == null ? void 0 : n.methods) ? yf(n == null ? void 0 : n.events) || (r = Ct("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Ct("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r
}

function zd(n, t) {
    let r = null;
    return Object.values(n).forEach(s => {
        if (r) return;
        const a = tE(s, `${t}, namespace`);
        a && (r = a)
    }), r
}

function rE(n, t, r) {
    let s = null;
    if (n && Tn(n)) {
        const a = zd(n, t);
        a && (s = a);
        const l = Xb(n, t, r);
        l && (s = l)
    } else s = ue("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
    return s
}

function Mo(n, t) {
    let r = null;
    if (n && Tn(n)) {
        const s = zd(n, t);
        s && (r = s);
        const a = eE(n, t);
        a && (r = a)
    } else r = ue("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return r
}

function Kd(n) {
    return Vt(n.protocol, !0)
}

function iE(n, t) {
    let r = !1;
    return t && !n ? r = !0 : n && ri(n) && n.length && n.forEach(s => {
        r = Kd(s)
    }), r
}

function nE(n) {
    return typeof n == "number"
}

function vr(n) {
    return typeof n < "u" && typeof n !== null
}

function sE(n) {
    return !(!n || typeof n != "object" || !n.code || !Eu(n.code, !1) || !n.message || !Vt(n.message, !1))
}

function oE(n) {
    return !(or(n) || !Vt(n.method, !1))
}

function aE(n) {
    return !(or(n) || or(n.result) && or(n.error) || !Eu(n.id, !1) || !Vt(n.jsonrpc, !1))
}

function cE(n) {
    return !(or(n) || !Vt(n.name, !1))
}

function _f(n, t) {
    return !(!Bo(t) || !jb(n).includes(t))
}

function uE(n, t, r) {
    return Vt(r, !1) ? qb(n, t).includes(r) : !1
}

function hE(n, t, r) {
    return Vt(r, !1) ? Hb(n, t).includes(r) : !1
}

function mf(n, t, r) {
    let s = null;
    const a = lE(n),
        l = fE(t),
        p = Object.keys(a),
        d = Object.keys(l),
        v = wf(Object.keys(n)),
        b = wf(Object.keys(t)),
        S = v.filter(A => !b.includes(A));
    return S.length && (s = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${S.toString()}
      Received: ${Object.keys(t).toString()}`)), en(p, d) || (s = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${p.toString()}
      Approved: ${d.toString()}`)), Object.keys(t).forEach(A => {
        if (!A.includes(":") || s) return;
        const $ = $n(t[A].accounts);
        $.includes(A) || (s = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${A}
        Required: ${A}
        Approved: ${$.toString()}`))
    }), p.forEach(A => {
        s || (en(a[A].methods, l[A].methods) ? en(a[A].events, l[A].events) || (s = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${A}`)) : s = ue("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${A}`))
    }), s
}

function lE(n) {
    const t = {};
    return Object.keys(n).forEach(r => {
        var s;
        r.includes(":") ? t[r] = n[r] : (s = n[r].chains) == null || s.forEach(a => {
            t[a] = {
                methods: n[r].methods,
                events: n[r].events
            }
        })
    }), t
}

function wf(n) {
    return [...new Set(n.map(t => t.includes(":") ? t.split(":")[0] : t))]
}

function fE(n) {
    const t = {};
    return Object.keys(n).forEach(r => {
        if (r.includes(":")) t[r] = n[r];
        else {
            const s = $n(n[r].accounts);
            s == null || s.forEach(a => {
                t[a] = {
                    accounts: n[r].accounts.filter(l => l.includes(`${a}:`)),
                    methods: n[r].methods,
                    events: n[r].events
                }
            })
        }
    }), t
}

function dE(n, t) {
    return Eu(n, !1) && n <= t.max && n >= t.min
}

function bf() {
    const n = Os();
    return new Promise(t => {
        switch (n) {
            case xr.browser:
                t(pE());
                break;
            case xr.reactNative:
                t(gE());
                break;
            case xr.node:
                t(vE());
                break;
            default:
                t(!0)
        }
    })
}

function pE() {
    return xs() && (navigator == null ? void 0 : navigator.onLine)
}
async function gE() {
    if (Zo() && typeof global < "u" && global != null && global.NetInfo) {
        const n = await (global == null ? void 0 : global.NetInfo.fetch());
        return n == null ? void 0 : n.isConnected
    }
    return !0
}

function vE() {
    return !0
}

function yE(n) {
    switch (Os()) {
        case xr.browser:
            _E(n);
            break;
        case xr.reactNative:
            mE(n);
            break
    }
}

function _E(n) {
    xs() && (window.addEventListener("online", () => n(!0)), window.addEventListener("offline", () => n(!1)))
}

function mE(n) {
    Zo() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(t => n(t == null ? void 0 : t.isConnected)))
}
const Mc = {};
let Lo = class {
    static get(t) {
        return Mc[t]
    }
    static set(t, r) {
        Mc[t] = r
    }
    static delete(t) {
        delete Mc[t]
    }
};
const wE = "PARSE_ERROR",
    bE = "INVALID_REQUEST",
    EE = "METHOD_NOT_FOUND",
    SE = "INVALID_PARAMS",
    Bd = "INTERNAL_ERROR",
    Su = "SERVER_ERROR",
    IE = [-32700, -32600, -32601, -32602, -32603],
    _s = {
        [wE]: {
            code: -32700,
            message: "Parse error"
        },
        [bE]: {
            code: -32600,
            message: "Invalid Request"
        },
        [EE]: {
            code: -32601,
            message: "Method not found"
        },
        [SE]: {
            code: -32602,
            message: "Invalid params"
        },
        [Bd]: {
            code: -32603,
            message: "Internal error"
        },
        [Su]: {
            code: -32e3,
            message: "Server error"
        }
    },
    kd = Su;

function xE(n) {
    return IE.includes(n)
}

function Ef(n) {
    return Object.keys(_s).includes(n) ? _s[n] : _s[kd]
}

function OE(n) {
    const t = Object.values(_s).find(r => r.code === n);
    return t || _s[kd]
}

function Vd(n, t, r) {
    return n.message.includes("getaddrinfo ENOTFOUND") || n.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : n
}
var Gd = {},
    gi = {},
    Sf;

function PE() {
    if (Sf) return gi;
    Sf = 1, Object.defineProperty(gi, "__esModule", {
        value: !0
    }), gi.isBrowserCryptoAvailable = gi.getSubtleCrypto = gi.getBrowerCrypto = void 0;

    function n() {
        return (Ir === null || Ir === void 0 ? void 0 : Ir.crypto) || (Ir === null || Ir === void 0 ? void 0 : Ir.msCrypto) || {}
    }
    gi.getBrowerCrypto = n;

    function t() {
        const s = n();
        return s.subtle || s.webkitSubtle
    }
    gi.getSubtleCrypto = t;

    function r() {
        return !!n() && !!t()
    }
    return gi.isBrowserCryptoAvailable = r, gi
}
var vi = {},
    If;

function AE() {
    if (If) return vi;
    If = 1, Object.defineProperty(vi, "__esModule", {
        value: !0
    }), vi.isBrowser = vi.isNode = vi.isReactNative = void 0;

    function n() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    vi.isReactNative = n;

    function t() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    vi.isNode = t;

    function r() {
        return !n() && !t()
    }
    return vi.isBrowser = r, vi
}(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    const t = Mr;
    t.__exportStar(PE(), n), t.__exportStar(AE(), n)
})(Gd);

function Iu(n = 3) {
    const t = Date.now() * Math.pow(10, n),
        r = Math.floor(Math.random() * Math.pow(10, n));
    return t + r
}

function Wd(n = 6) {
    return BigInt(Iu(n))
}

function Cn(n, t, r) {
    return {
        id: r || Iu(),
        jsonrpc: "2.0",
        method: n,
        params: t
    }
}

function xu(n, t) {
    return {
        id: n,
        jsonrpc: "2.0",
        result: t
    }
}

function ea(n, t, r) {
    return {
        id: n,
        jsonrpc: "2.0",
        error: NE(t, r)
    }
}

function NE(n, t) {
    return typeof n > "u" ? Ef(Bd) : (typeof n == "string" && (n = Object.assign(Object.assign({}, Ef(Su)), {
        message: n
    })), typeof t < "u" && (n.data = t), xE(n.code) && (n = OE(n.code)), n)
}
class RE {}
class TE extends RE {
    constructor() {
        super()
    }
}
class CE extends TE {
    constructor(t) {
        super()
    }
}
const LE = "^https?:",
    UE = "^wss?:";

function FE(n) {
    const t = n.match(new RegExp(/^\w+:/, "gi"));
    if (!(!t || !t.length)) return t[0]
}

function Yd(n, t) {
    const r = FE(n);
    return typeof r > "u" ? !1 : new RegExp(t).test(r)
}

function xf(n) {
    return Yd(n, LE)
}

function Of(n) {
    return Yd(n, UE)
}

function $E(n) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(n)
}

function Jd(n) {
    return typeof n == "object" && "id" in n && "jsonrpc" in n && n.jsonrpc === "2.0"
}

function Ou(n) {
    return Jd(n) && "method" in n
}

function ta(n) {
    return Jd(n) && (mi(n) || Vr(n))
}

function mi(n) {
    return "result" in n
}

function Vr(n) {
    return "error" in n
}
class Ui extends CE {
    constructor(t) {
        super(t), this.events = new Dr.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
    }
    async connect(t = this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async request(t, r) {
        return this.requestStrict(Cn(t.method, t.params || [], t.id || Wd().toString()), r)
    }
    async requestStrict(t, r) {
        return new Promise(async (s, a) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (l) {
                a(l)
            }
            this.events.on(`${t.id}`, l => {
                Vr(l) ? a(l.error) : s(l.result)
            });
            try {
                await this.connection.send(t, r)
            } catch (l) {
                a(l)
            }
        })
    }
    setConnection(t = this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t), ta(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
    }
}
const DE = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"),
    ME = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u",
    Pf = n => n.split("?")[0],
    Af = 10,
    jE = DE();
class qE {
    constructor(t) {
        if (this.url = t, this.events = new Dr.EventEmitter, this.registering = !1, !Of(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise((t, r) => {
            if (typeof this.socket > "u") {
                r(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = s => {
                this.onClose(s), t()
            }, this.socket.close()
        })
    }
    async send(t, r) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(ms(t))
        } catch (s) {
            this.onError(t.id, s)
        }
    }
    register(t = this.url) {
        if (!Of(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
                this.events.once("register_error", l => {
                    this.resetMaxListeners(), a(l)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return a(new Error("WebSocket connection is missing or invalid"));
                    s(this.socket)
                })
            })
        }
        return this.url = t, this.registering = !0, new Promise((r, s) => {
            const a = Gd.isReactNative() ? void 0 : {
                    rejectUnauthorized: !$E(t)
                },
                l = new jE(t, [], a);
            ME() ? l.onerror = p => {
                const d = p;
                s(this.emitError(d.error))
            } : l.on("error", p => {
                s(this.emitError(p))
            }), l.onopen = () => {
                this.onOpen(l), r(l)
            }
        })
    }
    onOpen(t) {
        t.onmessage = r => this.onPayload(r), t.onclose = r => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const r = typeof t.data == "string" ? lu(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const s = this.parseError(r),
            a = s.message || s.toString(),
            l = ea(t, a);
        this.events.emit("payload", l)
    }
    parseError(t, r = this.url) {
        return Vd(t, Pf(r), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Af && this.events.setMaxListeners(Af)
    }
    emitError(t) {
        const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Pf(this.url)}`));
        return this.events.emit("register_error", r), r
    }
}
var ko = {
    exports: {}
};
ko.exports;
(function(n, t) {
    var r = 200,
        s = "__lodash_hash_undefined__",
        a = 1,
        l = 2,
        p = 9007199254740991,
        d = "[object Arguments]",
        v = "[object Array]",
        b = "[object AsyncFunction]",
        S = "[object Boolean]",
        A = "[object Date]",
        $ = "[object Error]",
        R = "[object Function]",
        H = "[object GeneratorFunction]",
        K = "[object Map]",
        B = "[object Number]",
        oe = "[object Null]",
        T = "[object Object]",
        D = "[object Promise]",
        I = "[object Proxy]",
        P = "[object RegExp]",
        m = "[object Set]",
        u = "[object String]",
        _ = "[object Symbol]",
        G = "[object Undefined]",
        V = "[object WeakMap]",
        se = "[object ArrayBuffer]",
        ce = "[object DataView]",
        ge = "[object Float32Array]",
        C = "[object Float64Array]",
        q = "[object Int8Array]",
        le = "[object Int16Array]",
        te = "[object Int32Array]",
        W = "[object Uint8Array]",
        ee = "[object Uint8ClampedArray]",
        Y = "[object Uint16Array]",
        re = "[object Uint32Array]",
        Oe = /[\\^$.*+?()[\]{}|]/g,
        ie = /^\[object .+?Constructor\]$/,
        we = /^(?:0|[1-9]\d*)$/,
        he = {};
    he[ge] = he[C] = he[q] = he[le] = he[te] = he[W] = he[ee] = he[Y] = he[re] = !0, he[d] = he[v] = he[se] = he[S] = he[ce] = he[A] = he[$] = he[R] = he[K] = he[B] = he[T] = he[P] = he[m] = he[u] = he[V] = !1;
    var _e = typeof Ir == "object" && Ir && Ir.Object === Object && Ir,
        j = typeof self == "object" && self && self.Object === Object && self,
        M = _e || j || Function("return this")(),
        N = t && !t.nodeType && t,
        h = N && !0 && n && !n.nodeType && n,
        x = h && h.exports === N,
        ne = x && _e.process,
        fe = function() {
            try {
                return ne && ne.binding && ne.binding("util")
            } catch {}
        }(),
        Ie = fe && fe.isTypedArray;

    function ze(w, L) {
        for (var X = -1, de = w == null ? 0 : w.length, at = 0, Te = []; ++X < de;) {
            var ft = w[X];
            L(ft, X, w) && (Te[at++] = ft)
        }
        return Te
    }

    function ke(w, L) {
        for (var X = -1, de = L.length, at = w.length; ++X < de;) w[at + X] = L[X];
        return w
    }

    function De(w, L) {
        for (var X = -1, de = w == null ? 0 : w.length; ++X < de;)
            if (L(w[X], X, w)) return !0;
        return !1
    }

    function pt(w, L) {
        for (var X = -1, de = Array(w); ++X < w;) de[X] = L(X);
        return de
    }

    function gt(w) {
        return function(L) {
            return w(L)
        }
    }

    function je(w, L) {
        return w.has(L)
    }

    function xe(w, L) {
        return w == null ? void 0 : w[L]
    }

    function Le(w) {
        var L = -1,
            X = Array(w.size);
        return w.forEach(function(de, at) {
            X[++L] = [at, de]
        }), X
    }

    function Ue(w, L) {
        return function(X) {
            return w(L(X))
        }
    }

    function qe(w) {
        var L = -1,
            X = Array(w.size);
        return w.forEach(function(de) {
            X[++L] = de
        }), X
    }
    var Ae = Array.prototype,
        Fe = Function.prototype,
        Se = Object.prototype,
        Ne = M["__core-js_shared__"],
        Ke = Fe.toString,
        Pe = Se.hasOwnProperty,
        Ve = function() {
            var w = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
            return w ? "Symbol(src)_1." + w : ""
        }(),
        We = Se.toString,
        et = RegExp("^" + Ke.call(Pe).replace(Oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        tt = x ? M.Buffer : void 0,
        Je = M.Symbol,
        Zt = M.Uint8Array,
        ur = Se.propertyIsEnumerable,
        Gr = Ae.splice,
        er = Je ? Je.toStringTag : void 0,
        ii = Object.getOwnPropertySymbols,
        wi = tt ? tt.isBuffer : void 0,
        $i = Ue(Object.keys, Object),
        bt = _r(M, "DataView"),
        vt = _r(M, "Map"),
        Et = _r(M, "Promise"),
        St = _r(M, "Set"),
        mt = _r(M, "WeakMap"),
        yt = _r(Object, "create"),
        Ut = si(bt),
        Ft = si(vt),
        It = si(Et),
        $t = si(St),
        xt = si(mt),
        At = Je ? Je.prototype : void 0,
        Ot = At ? At.valueOf : void 0;

    function ht(w) {
        var L = -1,
            X = w == null ? 0 : w.length;
        for (this.clear(); ++L < X;) {
            var de = w[L];
            this.set(de[0], de[1])
        }
    }

    function Dt() {
        this.__data__ = yt ? yt(null) : {}, this.size = 0
    }

    function Mt(w) {
        var L = this.has(w) && delete this.__data__[w];
        return this.size -= L ? 1 : 0, L
    }

    function na(w) {
        var L = this.__data__;
        if (yt) {
            var X = L[w];
            return X === s ? void 0 : X
        }
        return Pe.call(L, w) ? L[w] : void 0
    }

    function sa(w) {
        var L = this.__data__;
        return yt ? L[w] !== void 0 : Pe.call(L, w)
    }

    function oa(w, L) {
        var X = this.__data__;
        return this.size += this.has(w) ? 0 : 1, X[w] = yt && L === void 0 ? s : L, this
    }
    ht.prototype.clear = Dt, ht.prototype.delete = Mt, ht.prototype.get = na, ht.prototype.has = sa, ht.prototype.set = oa;

    function Pr(w) {
        var L = -1,
            X = w == null ? 0 : w.length;
        for (this.clear(); ++L < X;) {
            var de = w[L];
            this.set(de[0], de[1])
        }
    }

    function aa() {
        this.__data__ = [], this.size = 0
    }

    function ca(w) {
        var L = this.__data__,
            X = Di(L, w);
        if (X < 0) return !1;
        var de = L.length - 1;
        return X == de ? L.pop() : Gr.call(L, X, 1), --this.size, !0
    }

    function ua(w) {
        var L = this.__data__,
            X = Di(L, w);
        return X < 0 ? void 0 : L[X][1]
    }

    function ha(w) {
        return Di(this.__data__, w) > -1
    }

    function la(w, L) {
        var X = this.__data__,
            de = Di(X, w);
        return de < 0 ? (++this.size, X.push([w, L])) : X[de][1] = L, this
    }
    Pr.prototype.clear = aa, Pr.prototype.delete = ca, Pr.prototype.get = ua, Pr.prototype.has = ha, Pr.prototype.set = la;

    function ni(w) {
        var L = -1,
            X = w == null ? 0 : w.length;
        for (this.clear(); ++L < X;) {
            var de = w[L];
            this.set(de[0], de[1])
        }
    }

    function an() {
        this.size = 0, this.__data__ = {
            hash: new ht,
            map: new(vt || Pr),
            string: new ht
        }
    }

    function fa(w) {
        var L = bi(this, w).delete(w);
        return this.size -= L ? 1 : 0, L
    }

    function cn(w) {
        return bi(this, w).get(w)
    }

    function da(w) {
        return bi(this, w).has(w)
    }

    function pa(w, L) {
        var X = bi(this, w),
            de = X.size;
        return X.set(w, L), this.size += X.size == de ? 0 : 1, this
    }
    ni.prototype.clear = an, ni.prototype.delete = fa, ni.prototype.get = cn, ni.prototype.has = da, ni.prototype.set = pa;

    function un(w) {
        var L = -1,
            X = w == null ? 0 : w.length;
        for (this.__data__ = new ni; ++L < X;) this.add(w[L])
    }

    function As(w) {
        return this.__data__.set(w, s), this
    }

    function Ns(w) {
        return this.__data__.has(w)
    }
    un.prototype.add = un.prototype.push = As, un.prototype.has = Ns;

    function jr(w) {
        var L = this.__data__ = new Pr(w);
        this.size = L.size
    }

    function ga() {
        this.__data__ = new Pr, this.size = 0
    }

    function va(w) {
        var L = this.__data__,
            X = L.delete(w);
        return this.size = L.size, X
    }

    function ya(w) {
        return this.__data__.get(w)
    }

    function _a(w) {
        return this.__data__.has(w)
    }

    function Rs(w, L) {
        var X = this.__data__;
        if (X instanceof Pr) {
            var de = X.__data__;
            if (!vt || de.length < r - 1) return de.push([w, L]), this.size = ++X.size, this;
            X = this.__data__ = new ni(de)
        }
        return X.set(w, L), this.size = X.size, this
    }
    jr.prototype.clear = ga, jr.prototype.delete = va, jr.prototype.get = ya, jr.prototype.has = _a, jr.prototype.set = Rs;

    function Ts(w, L) {
        var X = fn(w),
            de = !X && Ks(w),
            at = !X && !de && qn(w),
            Te = !X && !de && !at && Vs(w),
            ft = X || de || at || Te,
            jt = ft ? pt(w.length, String) : [],
            Qe = jt.length;
        for (var ct in w)(L || Pe.call(w, ct)) && !(ft && (ct == "length" || at && (ct == "offset" || ct == "parent") || Te && (ct == "buffer" || ct == "byteLength" || ct == "byteOffset") || Ms(ct, Qe))) && jt.push(ct);
        return jt
    }

    function Di(w, L) {
        for (var X = w.length; X--;)
            if (zs(w[X][0], L)) return X;
        return -1
    }

    function Mn(w, L, X) {
        var de = L(w);
        return fn(w) ? de : ke(de, X(w))
    }

    function Mi(w) {
        return w == null ? w === void 0 ? G : oe : er && er in Object(w) ? $s(w) : ba(w)
    }

    function jn(w) {
        return qi(w) && Mi(w) == d
    }

    function ji(w, L, X, de, at) {
        return w === L ? !0 : w == null || L == null || !qi(w) && !qi(L) ? w !== w && L !== L : Cs(w, L, X, de, ji, at)
    }

    function Cs(w, L, X, de, at, Te) {
        var ft = fn(w),
            jt = fn(L),
            Qe = ft ? v : Wr(w),
            ct = jt ? v : Wr(L);
        Qe = Qe == d ? T : Qe, ct = ct == d ? T : ct;
        var Nt = Qe == T,
            hr = ct == T,
            qt = Qe == ct;
        if (qt && qn(w)) {
            if (!qn(L)) return !1;
            ft = !0, Nt = !1
        }
        if (qt && !Nt) return Te || (Te = new jr), ft || Vs(w) ? hn(w, L, X, de, at, Te) : wa(w, L, Qe, X, de, at, Te);
        if (!(X & a)) {
            var dt = Nt && Pe.call(w, "__wrapped__"),
                tr = hr && Pe.call(L, "__wrapped__");
            if (dt || tr) {
                var qr = dt ? w.value() : w,
                    Ar = tr ? L.value() : L;
                return Te || (Te = new jr), at(qr, Ar, X, de, Te)
            }
        }
        return qt ? (Te || (Te = new jr), Fs(w, L, X, de, at, Te)) : !1
    }

    function ma(w) {
        if (!ks(w) || qs(w)) return !1;
        var L = dn(w) ? et : ie;
        return L.test(si(w))
    }

    function Ls(w) {
        return qi(w) && Bs(w.length) && !!he[Mi(w)]
    }

    function Us(w) {
        if (!Hs(w)) return $i(w);
        var L = [];
        for (var X in Object(w)) Pe.call(w, X) && X != "constructor" && L.push(X);
        return L
    }

    function hn(w, L, X, de, at, Te) {
        var ft = X & a,
            jt = w.length,
            Qe = L.length;
        if (jt != Qe && !(ft && Qe > jt)) return !1;
        var ct = Te.get(w);
        if (ct && Te.get(L)) return ct == L;
        var Nt = -1,
            hr = !0,
            qt = X & l ? new un : void 0;
        for (Te.set(w, L), Te.set(L, w); ++Nt < jt;) {
            var dt = w[Nt],
                tr = L[Nt];
            if (de) var qr = ft ? de(tr, dt, Nt, L, w, Te) : de(dt, tr, Nt, w, L, Te);
            if (qr !== void 0) {
                if (qr) continue;
                hr = !1;
                break
            }
            if (qt) {
                if (!De(L, function(Ar, Yr) {
                        if (!je(qt, Yr) && (dt === Ar || at(dt, Ar, X, de, Te))) return qt.push(Yr)
                    })) {
                    hr = !1;
                    break
                }
            } else if (!(dt === tr || at(dt, tr, X, de, Te))) {
                hr = !1;
                break
            }
        }
        return Te.delete(w), Te.delete(L), hr
    }

    function wa(w, L, X, de, at, Te, ft) {
        switch (X) {
            case ce:
                if (w.byteLength != L.byteLength || w.byteOffset != L.byteOffset) return !1;
                w = w.buffer, L = L.buffer;
            case se:
                return !(w.byteLength != L.byteLength || !Te(new Zt(w), new Zt(L)));
            case S:
            case A:
            case B:
                return zs(+w, +L);
            case $:
                return w.name == L.name && w.message == L.message;
            case P:
            case u:
                return w == L + "";
            case K:
                var jt = Le;
            case m:
                var Qe = de & a;
                if (jt || (jt = qe), w.size != L.size && !Qe) return !1;
                var ct = ft.get(w);
                if (ct) return ct == L;
                de |= l, ft.set(w, L);
                var Nt = hn(jt(w), jt(L), de, at, Te, ft);
                return ft.delete(w), Nt;
            case _:
                if (Ot) return Ot.call(w) == Ot.call(L)
        }
        return !1
    }

    function Fs(w, L, X, de, at, Te) {
        var ft = X & a,
            jt = ln(w),
            Qe = jt.length,
            ct = ln(L),
            Nt = ct.length;
        if (Qe != Nt && !ft) return !1;
        for (var hr = Qe; hr--;) {
            var qt = jt[hr];
            if (!(ft ? qt in L : Pe.call(L, qt))) return !1
        }
        var dt = Te.get(w);
        if (dt && Te.get(L)) return dt == L;
        var tr = !0;
        Te.set(w, L), Te.set(L, w);
        for (var qr = ft; ++hr < Qe;) {
            qt = jt[hr];
            var Ar = w[qt],
                Yr = L[qt];
            if (de) var Hn = ft ? de(Yr, Ar, qt, L, w, Te) : de(Ar, Yr, qt, w, L, Te);
            if (!(Hn === void 0 ? Ar === Yr || at(Ar, Yr, X, de, Te) : Hn)) {
                tr = !1;
                break
            }
            qr || (qr = qt == "constructor")
        }
        if (tr && !qr) {
            var Hi = w.constructor,
                Bt = L.constructor;
            Hi != Bt && "constructor" in w && "constructor" in L && !(typeof Hi == "function" && Hi instanceof Hi && typeof Bt == "function" && Bt instanceof Bt) && (tr = !1)
        }
        return Te.delete(w), Te.delete(L), tr
    }

    function ln(w) {
        return Mn(w, Ia, Ds)
    }

    function bi(w, L) {
        var X = w.__data__;
        return js(L) ? X[typeof L == "string" ? "string" : "hash"] : X.map
    }

    function _r(w, L) {
        var X = xe(w, L);
        return ma(X) ? X : void 0
    }

    function $s(w) {
        var L = Pe.call(w, er),
            X = w[er];
        try {
            w[er] = void 0;
            var de = !0
        } catch {}
        var at = We.call(w);
        return de && (L ? w[er] = X : delete w[er]), at
    }
    var Ds = ii ? function(w) {
            return w == null ? [] : (w = Object(w), ze(ii(w), function(L) {
                return ur.call(w, L)
            }))
        } : ot,
        Wr = Mi;
    (bt && Wr(new bt(new ArrayBuffer(1))) != ce || vt && Wr(new vt) != K || Et && Wr(Et.resolve()) != D || St && Wr(new St) != m || mt && Wr(new mt) != V) && (Wr = function(w) {
        var L = Mi(w),
            X = L == T ? w.constructor : void 0,
            de = X ? si(X) : "";
        if (de) switch (de) {
            case Ut:
                return ce;
            case Ft:
                return K;
            case It:
                return D;
            case $t:
                return m;
            case xt:
                return V
        }
        return L
    });

    function Ms(w, L) {
        return L = L ? ? p, !!L && (typeof w == "number" || we.test(w)) && w > -1 && w % 1 == 0 && w < L
    }

    function js(w) {
        var L = typeof w;
        return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? w !== "__proto__" : w === null
    }

    function qs(w) {
        return !!Ve && Ve in w
    }

    function Hs(w) {
        var L = w && w.constructor,
            X = typeof L == "function" && L.prototype || Se;
        return w === X
    }

    function ba(w) {
        return We.call(w)
    }

    function si(w) {
        if (w != null) {
            try {
                return Ke.call(w)
            } catch {}
            try {
                return w + ""
            } catch {}
        }
        return ""
    }

    function zs(w, L) {
        return w === L || w !== w && L !== L
    }
    var Ks = jn(function() {
            return arguments
        }()) ? jn : function(w) {
            return qi(w) && Pe.call(w, "callee") && !ur.call(w, "callee")
        },
        fn = Array.isArray;

    function Ea(w) {
        return w != null && Bs(w.length) && !dn(w)
    }
    var qn = wi || st;

    function Sa(w, L) {
        return ji(w, L)
    }

    function dn(w) {
        if (!ks(w)) return !1;
        var L = Mi(w);
        return L == R || L == H || L == b || L == I
    }

    function Bs(w) {
        return typeof w == "number" && w > -1 && w % 1 == 0 && w <= p
    }

    function ks(w) {
        var L = typeof w;
        return w != null && (L == "object" || L == "function")
    }

    function qi(w) {
        return w != null && typeof w == "object"
    }
    var Vs = Ie ? gt(Ie) : Ls;

    function Ia(w) {
        return Ea(w) ? Ts(w) : Us(w)
    }

    function ot() {
        return []
    }

    function st() {
        return !1
    }
    n.exports = Sa
})(ko, ko.exports);
var HE = ko.exports;
const zE = Q_(HE);

function KE(n, t) {
    if (n.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), s = 0; s < r.length; s++) r[s] = 255;
    for (var a = 0; a < n.length; a++) {
        var l = n.charAt(a),
            p = l.charCodeAt(0);
        if (r[p] !== 255) throw new TypeError(l + " is ambiguous");
        r[p] = a
    }
    var d = n.length,
        v = n.charAt(0),
        b = Math.log(d) / Math.log(256),
        S = Math.log(256) / Math.log(d);

    function A(H) {
        if (H instanceof Uint8Array || (ArrayBuffer.isView(H) ? H = new Uint8Array(H.buffer, H.byteOffset, H.byteLength) : Array.isArray(H) && (H = Uint8Array.from(H))), !(H instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (H.length === 0) return "";
        for (var K = 0, B = 0, oe = 0, T = H.length; oe !== T && H[oe] === 0;) oe++, K++;
        for (var D = (T - oe) * S + 1 >>> 0, I = new Uint8Array(D); oe !== T;) {
            for (var P = H[oe], m = 0, u = D - 1;
                (P !== 0 || m < B) && u !== -1; u--, m++) P += 256 * I[u] >>> 0, I[u] = P % d >>> 0, P = P / d >>> 0;
            if (P !== 0) throw new Error("Non-zero carry");
            B = m, oe++
        }
        for (var _ = D - B; _ !== D && I[_] === 0;) _++;
        for (var G = v.repeat(K); _ < D; ++_) G += n.charAt(I[_]);
        return G
    }

    function $(H) {
        if (typeof H != "string") throw new TypeError("Expected String");
        if (H.length === 0) return new Uint8Array;
        var K = 0;
        if (H[K] !== " ") {
            for (var B = 0, oe = 0; H[K] === v;) B++, K++;
            for (var T = (H.length - K) * b + 1 >>> 0, D = new Uint8Array(T); H[K];) {
                var I = r[H.charCodeAt(K)];
                if (I === 255) return;
                for (var P = 0, m = T - 1;
                    (I !== 0 || P < oe) && m !== -1; m--, P++) I += d * D[m] >>> 0, D[m] = I % 256 >>> 0, I = I / 256 >>> 0;
                if (I !== 0) throw new Error("Non-zero carry");
                oe = P, K++
            }
            if (H[K] !== " ") {
                for (var u = T - oe; u !== T && D[u] === 0;) u++;
                for (var _ = new Uint8Array(B + (T - u)), G = B; u !== T;) _[G++] = D[u++];
                return _
            }
        }
    }

    function R(H) {
        var K = $(H);
        if (K) return K;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: A,
        decodeUnsafe: $,
        decode: R
    }
}
var BE = KE,
    kE = BE;
const Qd = n => {
        if (n instanceof Uint8Array && n.constructor.name === "Uint8Array") return n;
        if (n instanceof ArrayBuffer) return new Uint8Array(n);
        if (ArrayBuffer.isView(n)) return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    VE = n => new TextEncoder().encode(n),
    GE = n => new TextDecoder().decode(n);
class WE {
    constructor(t, r, s) {
        this.name = t, this.prefix = r, this.baseEncode = s
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class YE {
    constructor(t, r, s) {
        if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(t) {
        return Xd(this, t)
    }
}
class JE {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return Xd(this, t)
    }
    decode(t) {
        const r = t[0],
            s = this.decoders[r];
        if (s) return s.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Xd = (n, t) => new JE({ ...n.decoders || {
        [n.prefix]: n
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class QE {
    constructor(t, r, s, a) {
        this.name = t, this.prefix = r, this.baseEncode = s, this.baseDecode = a, this.encoder = new WE(t, r, s), this.decoder = new YE(t, r, a)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const ra = ({
        name: n,
        prefix: t,
        encode: r,
        decode: s
    }) => new QE(n, t, r, s),
    Ps = ({
        prefix: n,
        name: t,
        alphabet: r
    }) => {
        const {
            encode: s,
            decode: a
        } = kE(r, t);
        return ra({
            prefix: n,
            name: t,
            encode: s,
            decode: l => Qd(a(l))
        })
    },
    XE = (n, t, r, s) => {
        const a = {};
        for (let S = 0; S < t.length; ++S) a[t[S]] = S;
        let l = n.length;
        for (; n[l - 1] === "=";) --l;
        const p = new Uint8Array(l * r / 8 | 0);
        let d = 0,
            v = 0,
            b = 0;
        for (let S = 0; S < l; ++S) {
            const A = a[n[S]];
            if (A === void 0) throw new SyntaxError(`Non-${s} character`);
            v = v << r | A, d += r, d >= 8 && (d -= 8, p[b++] = 255 & v >> d)
        }
        if (d >= r || 255 & v << 8 - d) throw new SyntaxError("Unexpected end of data");
        return p
    },
    ZE = (n, t, r) => {
        const s = t[t.length - 1] === "=",
            a = (1 << r) - 1;
        let l = "",
            p = 0,
            d = 0;
        for (let v = 0; v < n.length; ++v)
            for (d = d << 8 | n[v], p += 8; p > r;) p -= r, l += t[a & d >> p];
        if (p && (l += t[a & d << r - p]), s)
            for (; l.length * r & 7;) l += "=";
        return l
    },
    Wt = ({
        name: n,
        prefix: t,
        bitsPerChar: r,
        alphabet: s
    }) => ra({
        prefix: t,
        name: n,
        encode(a) {
            return ZE(a, s, r)
        },
        decode(a) {
            return XE(a, s, r, n)
        }
    }),
    e6 = ra({
        prefix: "\0",
        name: "identity",
        encode: n => GE(n),
        decode: n => VE(n)
    });
var t6 = Object.freeze({
    __proto__: null,
    identity: e6
});
const r6 = Wt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var i6 = Object.freeze({
    __proto__: null,
    base2: r6
});
const n6 = Wt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var s6 = Object.freeze({
    __proto__: null,
    base8: n6
});
const o6 = Ps({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var a6 = Object.freeze({
    __proto__: null,
    base10: o6
});
const c6 = Wt({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    u6 = Wt({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var h6 = Object.freeze({
    __proto__: null,
    base16: c6,
    base16upper: u6
});
const l6 = Wt({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    f6 = Wt({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    d6 = Wt({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    p6 = Wt({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    g6 = Wt({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    v6 = Wt({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    y6 = Wt({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    _6 = Wt({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    m6 = Wt({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var w6 = Object.freeze({
    __proto__: null,
    base32: l6,
    base32upper: f6,
    base32pad: d6,
    base32padupper: p6,
    base32hex: g6,
    base32hexupper: v6,
    base32hexpad: y6,
    base32hexpadupper: _6,
    base32z: m6
});
const b6 = Ps({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    E6 = Ps({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var S6 = Object.freeze({
    __proto__: null,
    base36: b6,
    base36upper: E6
});
const I6 = Ps({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    x6 = Ps({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var O6 = Object.freeze({
    __proto__: null,
    base58btc: I6,
    base58flickr: x6
});
const P6 = Wt({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    A6 = Wt({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    N6 = Wt({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    R6 = Wt({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var T6 = Object.freeze({
    __proto__: null,
    base64: P6,
    base64pad: A6,
    base64url: N6,
    base64urlpad: R6
});
const Zd = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    C6 = Zd.reduce((n, t, r) => (n[r] = t, n), []),
    L6 = Zd.reduce((n, t, r) => (n[t.codePointAt(0)] = r, n), []);

function U6(n) {
    return n.reduce((t, r) => (t += C6[r], t), "")
}

function F6(n) {
    const t = [];
    for (const r of n) {
        const s = L6[r.codePointAt(0)];
        if (s === void 0) throw new Error(`Non-base256emoji character: ${r}`);
        t.push(s)
    }
    return new Uint8Array(t)
}
const $6 = ra({
    prefix: "🚀",
    name: "base256emoji",
    encode: U6,
    decode: F6
});
var D6 = Object.freeze({
        __proto__: null,
        base256emoji: $6
    }),
    M6 = ep,
    Nf = 128,
    j6 = 127,
    q6 = ~j6,
    H6 = Math.pow(2, 31);

function ep(n, t, r) {
    t = t || [], r = r || 0;
    for (var s = r; n >= H6;) t[r++] = n & 255 | Nf, n /= 128;
    for (; n & q6;) t[r++] = n & 255 | Nf, n >>>= 7;
    return t[r] = n | 0, ep.bytes = r - s + 1, t
}
var z6 = su,
    K6 = 128,
    Rf = 127;

function su(n, s) {
    var r = 0,
        s = s || 0,
        a = 0,
        l = s,
        p, d = n.length;
    do {
        if (l >= d) throw su.bytes = 0, new RangeError("Could not decode varint");
        p = n[l++], r += a < 28 ? (p & Rf) << a : (p & Rf) * Math.pow(2, a), a += 7
    } while (p >= K6);
    return su.bytes = l - s, r
}
var B6 = Math.pow(2, 7),
    k6 = Math.pow(2, 14),
    V6 = Math.pow(2, 21),
    G6 = Math.pow(2, 28),
    W6 = Math.pow(2, 35),
    Y6 = Math.pow(2, 42),
    J6 = Math.pow(2, 49),
    Q6 = Math.pow(2, 56),
    X6 = Math.pow(2, 63),
    Z6 = function(n) {
        return n < B6 ? 1 : n < k6 ? 2 : n < V6 ? 3 : n < G6 ? 4 : n < W6 ? 5 : n < Y6 ? 6 : n < J6 ? 7 : n < Q6 ? 8 : n < X6 ? 9 : 10
    },
    e2 = {
        encode: M6,
        decode: z6,
        encodingLength: Z6
    },
    tp = e2;
const Tf = (n, t, r = 0) => (tp.encode(n, t, r), t),
    Cf = n => tp.encodingLength(n),
    ou = (n, t) => {
        const r = t.byteLength,
            s = Cf(n),
            a = s + Cf(r),
            l = new Uint8Array(a + r);
        return Tf(n, l, 0), Tf(r, l, s), l.set(t, a), new t2(n, r, t, l)
    };
class t2 {
    constructor(t, r, s, a) {
        this.code = t, this.size = r, this.digest = s, this.bytes = a
    }
}
const rp = ({
    name: n,
    code: t,
    encode: r
}) => new r2(n, t, r);
class r2 {
    constructor(t, r, s) {
        this.name = t, this.code = r, this.encode = s
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const r = this.encode(t);
            return r instanceof Uint8Array ? ou(this.code, r) : r.then(s => ou(this.code, s))
        } else throw Error("Unknown type, must be binary type")
    }
}
const ip = n => async t => new Uint8Array(await crypto.subtle.digest(n, t)),
    i2 = rp({
        name: "sha2-256",
        code: 18,
        encode: ip("SHA-256")
    }),
    n2 = rp({
        name: "sha2-512",
        code: 19,
        encode: ip("SHA-512")
    });
var s2 = Object.freeze({
    __proto__: null,
    sha256: i2,
    sha512: n2
});
const np = 0,
    o2 = "identity",
    sp = Qd,
    a2 = n => ou(np, sp(n)),
    c2 = {
        code: np,
        name: o2,
        encode: sp,
        digest: a2
    };
var u2 = Object.freeze({
    __proto__: null,
    identity: c2
});
new TextEncoder, new TextDecoder;
const Lf = { ...t6,
    ...i6,
    ...s6,
    ...a6,
    ...h6,
    ...w6,
    ...S6,
    ...O6,
    ...T6,
    ...D6
};
({ ...s2,
    ...u2
});

function op(n) {
    return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n
}

function h2(n = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? op(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n)
}

function ap(n, t, r, s) {
    return {
        name: n,
        prefix: t,
        encoder: {
            name: n,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: s
        }
    }
}
const Uf = ap("utf8", "u", n => "u" + new TextDecoder("utf8").decode(n), n => new TextEncoder().encode(n.substring(1))),
    jc = ap("ascii", "a", n => {
        let t = "a";
        for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
        return t
    }, n => {
        n = n.substring(1);
        const t = h2(n.length);
        for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
        return t
    }),
    l2 = {
        utf8: Uf,
        "utf-8": Uf,
        hex: Lf.base16,
        latin1: jc,
        ascii: jc,
        binary: jc,
        ...Lf
    };

function f2(n, t = "utf8") {
    const r = l2[t];
    if (!r) throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? op(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`)
}
const cp = "wc",
    d2 = 2,
    Pu = "core",
    Ci = `${cp}@2:${Pu}:`,
    p2 = {
        name: Pu,
        logger: "error"
    },
    g2 = {
        database: ":memory:"
    },
    v2 = "crypto",
    Ff = "client_ed25519_seed",
    y2 = ye.ONE_DAY,
    _2 = "keychain",
    m2 = "0.3",
    w2 = "messages",
    b2 = "0.3",
    E2 = ye.SIX_HOURS,
    S2 = "publisher",
    up = "irn",
    I2 = "error",
    hp = "wss://relay.walletconnect.com",
    $f = "wss://relay.walletconnect.org",
    x2 = "relayer",
    Xt = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
    },
    O2 = "_subscription",
    yi = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
    },
    P2 = ye.ONE_SECOND,
    A2 = "2.10.1",
    N2 = 1e4,
    R2 = "0.3",
    T2 = "WALLETCONNECT_CLIENT_ID",
    ti = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
    },
    C2 = "subscription",
    L2 = "0.3",
    U2 = ye.FIVE_SECONDS * 1e3,
    F2 = "pairing",
    $2 = "0.3",
    hs = {
        wc_pairingDelete: {
            req: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: ye.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: ye.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    vs = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
    },
    ei = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
    },
    D2 = "history",
    M2 = "0.3",
    j2 = "expirer",
    $r = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
    },
    q2 = "0.3",
    qc = "verify-api",
    jo = "https://verify.walletconnect.com",
    Df = "https://verify.walletconnect.org";
class H2 {
    constructor(t, r) {
        this.core = t, this.logger = r, this.keychain = new Map, this.name = _2, this.version = m2, this.initialized = !1, this.storagePrefix = Ci, this.init = async () => {
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s), this.initialized = !0
            }
        }, this.has = s => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, a) => {
            this.isInitialized(), this.keychain.set(s, a), await this.persist()
        }, this.get = s => {
            this.isInitialized();
            const a = this.keychain.get(s);
            if (typeof a > "u") {
                const {
                    message: l
                } = ue("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(l)
            }
            return a
        }, this.del = async s => {
            this.isInitialized(), this.keychain.delete(s), await this.persist()
        }, this.core = t, this.logger = Ze.generateChildLogger(r, this.name)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, Md(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? jd(t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class z2 {
    constructor(t, r, s) {
        this.core = t, this.logger = r, this.name = v2, this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = a => (this.isInitialized(), this.keychain.has(a)), this.getClientId = async () => {
            this.isInitialized();
            const a = await this.getClientSeed(),
                l = nf(a);
            return Id(l.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const a = ab();
            return this.setPrivateKey(a.publicKey, a.privateKey)
        }, this.signJWT = async a => {
            this.isInitialized();
            const l = await this.getClientSeed(),
                p = nf(l),
                d = iu();
            return await xw(d, a, y2, p)
        }, this.generateSharedKey = (a, l, p) => {
            this.isInitialized();
            const d = this.getPrivateKey(a),
                v = cb(d, l);
            return this.setSymKey(v, p)
        }, this.setSymKey = async (a, l) => {
            this.isInitialized();
            const p = l || ub(a);
            return await this.keychain.set(p, a), p
        }, this.deleteKeyPair = async a => {
            this.isInitialized(), await this.keychain.del(a)
        }, this.deleteSymKey = async a => {
            this.isInitialized(), await this.keychain.del(a)
        }, this.encode = async (a, l, p) => {
            this.isInitialized();
            const d = Dd(p),
                v = ms(l);
            if (lf(d)) {
                const $ = d.senderPublicKey,
                    R = d.receiverPublicKey;
                a = await this.generateSharedKey($, R)
            }
            const b = this.getSymKey(a),
                {
                    type: S,
                    senderPublicKey: A
                } = d;
            return lb({
                type: S,
                symKey: b,
                message: v,
                senderPublicKey: A
            })
        }, this.decode = async (a, l, p) => {
            this.isInitialized();
            const d = pb(l, p);
            if (lf(d)) {
                const v = d.receiverPublicKey,
                    b = d.senderPublicKey;
                a = await this.generateSharedKey(v, b)
            }
            try {
                const v = this.getSymKey(a),
                    b = fb({
                        symKey: v,
                        encoded: l
                    });
                return lu(b)
            } catch (v) {
                this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`), this.logger.error(v)
            }
        }, this.getPayloadType = a => {
            const l = Ko(a);
            return Is(l.type)
        }, this.getPayloadSenderPublicKey = a => {
            const l = Ko(a);
            return l.senderPublicKey ? cr(l.senderPublicKey, ar) : void 0
        }, this.core = t, this.logger = Ze.generateChildLogger(r, this.name), this.keychain = s || new H2(this.core, this.logger)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    async setPrivateKey(t, r) {
        return await this.keychain.set(t, r), t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Ff)
        } catch {
            t = iu(), await this.keychain.set(Ff, t)
        }
        return f2(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class K2 extends Am {
    constructor(t, r) {
        super(t, r), this.logger = t, this.core = r, this.messages = new Map, this.name = w2, this.version = b2, this.initialized = !1, this.storagePrefix = Ci, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (s, a) => {
            this.isInitialized();
            const l = Rn(a);
            let p = this.messages.get(s);
            return typeof p > "u" && (p = {}), typeof p[l] < "u" || (p[l] = a, this.messages.set(s, p), await this.persist()), l
        }, this.get = s => {
            this.isInitialized();
            let a = this.messages.get(s);
            return typeof a > "u" && (a = {}), a
        }, this.has = (s, a) => {
            this.isInitialized();
            const l = this.get(s),
                p = Rn(a);
            return typeof l[p] < "u"
        }, this.del = async s => {
            this.isInitialized(), this.messages.delete(s), await this.persist()
        }, this.logger = Ze.generateChildLogger(t, this.name), this.core = r
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, Md(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? jd(t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class B2 extends Nm {
    constructor(t, r) {
        super(t, r), this.relayer = t, this.logger = r, this.events = new Dr.EventEmitter, this.name = S2, this.queue = new Map, this.publishTimeout = ye.toMiliseconds(ye.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (s, a, l) => {
            var p;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: a,
                    opts: l
                }
            });
            try {
                const d = (l == null ? void 0 : l.ttl) || E2,
                    v = nu(l),
                    b = (l == null ? void 0 : l.prompt) || !1,
                    S = (l == null ? void 0 : l.tag) || 0,
                    A = (l == null ? void 0 : l.id) || Wd().toString(),
                    $ = {
                        topic: s,
                        message: a,
                        opts: {
                            ttl: d,
                            relay: v,
                            prompt: b,
                            tag: S,
                            id: A
                        }
                    },
                    R = setTimeout(() => this.queue.set(A, $), this.publishTimeout);
                try {
                    await await bs(this.rpcPublish(s, a, d, v, b, S, A), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(A), this.relayer.events.emit(Xt.publish, $)
                } catch (H) {
                    if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (p = l == null ? void 0 : l.internal) != null && p.throwOnFailedPublish) throw this.removeRequestFromQueue(A), H;
                    return
                } finally {
                    clearTimeout(R)
                }
                this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: s,
                        message: a,
                        opts: l
                    }
                })
            } catch (d) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(d), d
            }
        }, this.on = (s, a) => {
            this.events.on(s, a)
        }, this.once = (s, a) => {
            this.events.once(s, a)
        }, this.off = (s, a) => {
            this.events.off(s, a)
        }, this.removeListener = (s, a) => {
            this.events.removeListener(s, a)
        }, this.relayer = t, this.logger = Ze.generateChildLogger(r, this.name), this.registerEventListeners()
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    rpcPublish(t, r, s, a, l, p, d) {
        var v, b, S, A;
        const $ = {
            method: Do(a.protocol).publish,
            params: {
                topic: t,
                message: r,
                ttl: s,
                prompt: l,
                tag: p
            },
            id: d
        };
        return or((v = $.params) == null ? void 0 : v.prompt) && ((b = $.params) == null || delete b.prompt), or((S = $.params) == null ? void 0 : S.tag) && ((A = $.params) == null || delete A.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: $
        }), this.relayer.request($)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach(async t => {
            const {
                topic: r,
                message: s,
                opts: a
            } = t;
            await this.publish(r, s, a)
        })
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(Xt.connection_stalled);
                return
            }
            this.checkQueue()
        }), this.relayer.on(Xt.message_ack, t => {
            this.removeRequestFromQueue(t.id.toString())
        })
    }
}
class k2 {
    constructor() {
        this.map = new Map, this.set = (t, r) => {
            const s = this.get(t);
            this.exists(t, r) || this.map.set(t, [...s, r])
        }, this.get = t => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
            if (typeof r > "u") {
                this.map.delete(t);
                return
            }
            if (!this.map.has(t)) return;
            const s = this.get(t);
            if (!this.exists(t, r)) return;
            const a = s.filter(l => l !== r);
            if (!a.length) {
                this.map.delete(t);
                return
            }
            this.map.set(t, a)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var V2 = Object.defineProperty,
    G2 = Object.defineProperties,
    W2 = Object.getOwnPropertyDescriptors,
    Mf = Object.getOwnPropertySymbols,
    Y2 = Object.prototype.hasOwnProperty,
    J2 = Object.prototype.propertyIsEnumerable,
    jf = (n, t, r) => t in n ? V2(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    ls = (n, t) => {
        for (var r in t || (t = {})) Y2.call(t, r) && jf(n, r, t[r]);
        if (Mf)
            for (var r of Mf(t)) J2.call(t, r) && jf(n, r, t[r]);
        return n
    },
    Hc = (n, t) => G2(n, W2(t));
class Q2 extends Cm {
    constructor(t, r) {
        super(t, r), this.relayer = t, this.logger = r, this.subscriptions = new Map, this.topicMap = new k2, this.events = new Dr.EventEmitter, this.name = C2, this.version = L2, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ci, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (s, a) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: a
                }
            });
            try {
                const l = nu(a),
                    p = {
                        topic: s,
                        relay: l
                    };
                this.pending.set(s, p);
                const d = await this.rpcSubscribe(s, l);
                return this.onSubscribe(d, p), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: a
                    }
                }), d
            } catch (l) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(l), l
            }
        }, this.unsubscribe = async (s, a) => {
            await this.restartToComplete(), this.isInitialized(), typeof(a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(s, a.id, a) : await this.unsubscribeByTopic(s, a)
        }, this.isSubscribed = async s => this.topics.includes(s) ? !0 : await new Promise((a, l) => {
            const p = new ye.Watch;
            p.start(this.pendingSubscriptionWatchLabel);
            const d = setInterval(() => {
                !this.pending.has(s) && this.topics.includes(s) && (clearInterval(d), p.stop(this.pendingSubscriptionWatchLabel), a(!0)), p.elapsed(this.pendingSubscriptionWatchLabel) >= U2 && (clearInterval(d), p.stop(this.pendingSubscriptionWatchLabel), l(new Error("Subscription resolution timeout")))
            }, this.pollingInterval)
        }).catch(() => !1), this.on = (s, a) => {
            this.events.on(s, a)
        }, this.once = (s, a) => {
            this.events.once(s, a)
        }, this.off = (s, a) => {
            this.events.off(s, a)
        }, this.removeListener = (s, a) => {
            this.events.removeListener(s, a)
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = t, this.logger = Ze.generateChildLogger(r, this.name), this.clientId = ""
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, r) {
        let s = !1;
        try {
            s = this.getSubscription(t).topic === r
        } catch {}
        return s
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(t, r) {
        const s = this.topicMap.get(t);
        await Promise.all(s.map(async a => await this.unsubscribeById(t, a, r)))
    }
    async unsubscribeById(t, r, s) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: r,
                opts: s
            }
        });
        try {
            const a = nu(s);
            await this.rpcUnsubscribe(t, r, a);
            const l = Ct("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, r, l), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: r,
                    opts: s
                }
            })
        } catch (a) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(a), a
        }
    }
    async rpcSubscribe(t, r) {
        const s = {
            method: Do(r.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await bs(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xt.connection_stalled)
        }
        return Rn(t + this.clientId)
    }
    async rpcBatchSubscribe(t) {
        if (!t.length) return;
        const r = t[0].relay,
            s = {
                method: Do(r.protocol).batchSubscribe,
                params: {
                    topics: t.map(a => a.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            return await await bs(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xt.connection_stalled)
        }
    }
    rpcUnsubscribe(t, r, s) {
        const a = {
            method: Do(s.protocol).unsubscribe,
            params: {
                topic: t,
                id: r
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: a
        }), this.relayer.request(a)
    }
    onSubscribe(t, r) {
        this.setSubscription(t, Hc(ls({}, r), {
            id: t
        })), this.pending.delete(r.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach(r => {
            this.setSubscription(r.id, ls({}, r)), this.pending.delete(r.topic)
        })
    }
    async onUnsubscribe(t, r, s) {
        this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, s), await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, r) {
        this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: r
        }), this.addSubscription(t, r))
    }
    addSubscription(t, r) {
        this.subscriptions.set(t, ls({}, r)), this.topicMap.set(r.topic, t), this.events.emit(ti.created, r)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const r = this.subscriptions.get(t);
        if (!r) {
            const {
                message: s
            } = ue("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(s)
        }
        return r
    }
    deleteSubscription(t, r) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: r
        });
        const s = this.getSubscription(t);
        this.subscriptions.delete(t), this.topicMap.delete(s.topic, t), this.events.emit(ti.deleted, Hc(ls({}, s), {
            reason: r
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(ti.sync)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
                const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(s)
            }
        }
        this.events.emit(ti.resubscribed)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
                const {
                    message: r
                } = ue("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
        }
    }
    async batchSubscribe(t) {
        if (!t.length) return;
        const r = await this.rpcBatchSubscribe(t);
        ri(r) && this.onBatchSubscribe(r.map((s, a) => Hc(ls({}, t[a]), {
            id: s
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
        const t = [];
        this.pending.forEach(r => {
            t.push(r)
        }), await this.batchSubscribe(t)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending()
        }), this.relayer.on(Xt.connect, async () => {
            await this.onConnect()
        }), this.relayer.on(Xt.disconnect, () => {
            this.onDisconnect()
        }), this.events.on(ti.created, async t => {
            const r = ti.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), await this.persist()
        }), this.events.on(ti.deleted, async t => {
            const r = ti.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), await this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(t => {
            const r = setInterval(() => {
                this.restartInProgress || (clearInterval(r), t())
            }, this.pollingInterval)
        })
    }
}
var X2 = Object.defineProperty,
    qf = Object.getOwnPropertySymbols,
    Z2 = Object.prototype.hasOwnProperty,
    e5 = Object.prototype.propertyIsEnumerable,
    Hf = (n, t, r) => t in n ? X2(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    t5 = (n, t) => {
        for (var r in t || (t = {})) Z2.call(t, r) && Hf(n, r, t[r]);
        if (qf)
            for (var r of qf(t)) e5.call(t, r) && Hf(n, r, t[r]);
        return n
    };
class r5 extends Rm {
    constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.events = new Dr.EventEmitter, this.name = x2, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async r => {
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(), await this.provider.request(r)
            } catch (s) {
                throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s
            }
        }, this.onPayloadHandler = r => {
            this.onProviderPayload(r)
        }, this.onConnectHandler = () => {
            this.events.emit(Xt.connect)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = r => {
            this.logger.error(r), this.events.emit(Xt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(yi.payload, this.onPayloadHandler), this.provider.on(yi.connect, this.onConnectHandler), this.provider.on(yi.disconnect, this.onDisconnectHandler), this.provider.on(yi.error, this.onProviderErrorHandler)
        }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Ze.generateChildLogger(t.logger, this.name) : Ze.pino(Ze.getDefaultLoggerOptions({
            level: t.logger || I2
        })), this.messages = new K2(this.logger, t.core), this.subscriber = new Q2(this, this.logger), this.publisher = new B2(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || hp, this.projectId = t.projectId, this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${$f}...`), await this.restartTransport($f)
        }
        this.initialized = !0, setTimeout(async () => {
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }, N2)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(t, r, s) {
        this.isInitialized(), await this.publisher.publish(t, r, s), await this.recordMessageEvent({
            topic: t,
            message: r,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, r) {
        var s;
        this.isInitialized();
        let a = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
        return a || (await Promise.all([new Promise(l => {
            this.subscriber.once(ti.created, p => {
                p.topic === t && l()
            })
        }), new Promise(async l => {
            a = await this.subscriber.subscribe(t, r), l()
        })]), a)
    }
    async unsubscribe(t, r) {
        this.isInitialized(), await this.subscriber.unsubscribe(t, r)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await bs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(t) {
        if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
            t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(r => {
                    if (!this.initialized) return r();
                    this.subscriber.once(ti.resubscribed, () => {
                        r()
                    })
                }), new Promise(async (r, s) => {
                    try {
                        await bs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (a) {
                        s(a);
                        return
                    }
                    r()
                })])
            } catch (r) {
                this.logger.error(r);
                const s = r;
                if (!this.isConnectionStalled(s.message)) throw r;
                this.provider.events.emit(yi.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(t) {
        await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await bf()) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some(r => t.includes(r))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Ui(new qE(xb({
            sdkVersion: A2,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {
            topic: r,
            message: s
        } = t;
        await this.messages.set(r, s)
    }
    async shouldIgnoreMessageEvent(t) {
        const {
            topic: r,
            message: s
        } = t;
        if (!s || s.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
        if (!await this.subscriber.isSubscribed(r)) return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
        const a = this.messages.has(r, s);
        return a && this.logger.debug(`Ignoring duplicate message: ${s}`), a
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: t
            }), Ou(t)) {
            if (!t.method.endsWith(O2)) return;
            const r = t.params,
                {
                    topic: s,
                    message: a,
                    publishedAt: l
                } = r.data,
                p = {
                    topic: s,
                    message: a,
                    publishedAt: l
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(t5({
                type: "event",
                event: r.id
            }, p)), this.events.emit(r.id, p), await this.acknowledgePayload(t), await this.onMessageEvent(p)
        } else ta(t) && this.events.emit(Xt.message_ack, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Xt.message, t), await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const r = xu(t.id, !0);
        await this.provider.connection.send(r)
    }
    unregisterProviderListeners() {
        this.provider.off(yi.payload, this.onPayloadHandler), this.provider.off(yi.connect, this.onConnectHandler), this.provider.off(yi.disconnect, this.onDisconnectHandler), this.provider.off(yi.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Xt.connection_stalled, () => {
            this.restartTransport().catch(r => this.logger.error(r))
        });
        let t = await bf();
        yE(async r => {
            this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch(s => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(s => this.logger.error(s))))
        })
    }
    onProviderDisconnect() {
        this.events.emit(Xt.disconnect), this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
            await this.restartTransport().catch(t => this.logger.error(t))
        }, ye.toMiliseconds(P2)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(), !this.connected) {
            if (this.connectionAttemptInProgress) return await new Promise(t => {
                const r = setInterval(() => {
                    this.connected && (clearInterval(r), t())
                }, this.connectionStatusPollingInterval)
            });
            await this.restartTransport()
        }
    }
}
var i5 = Object.defineProperty,
    zf = Object.getOwnPropertySymbols,
    n5 = Object.prototype.hasOwnProperty,
    s5 = Object.prototype.propertyIsEnumerable,
    Kf = (n, t, r) => t in n ? i5(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    Bf = (n, t) => {
        for (var r in t || (t = {})) n5.call(t, r) && Kf(n, r, t[r]);
        if (zf)
            for (var r of zf(t)) s5.call(t, r) && Kf(n, r, t[r]);
        return n
    };
class ia extends Tm {
    constructor(t, r, s, a = Ci, l = void 0) {
        super(t, r, s, a), this.core = t, this.logger = r, this.name = s, this.map = new Map, this.version = R2, this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(p => {
                this.getKey && p !== null && !or(p) ? this.map.set(this.getKey(p), p) : Wb(p) ? this.map.set(p.id, p) : Yb(p) && this.map.set(p.topic, p)
            }), this.cached = [], this.initialized = !0)
        }, this.set = async (p, d) => {
            this.isInitialized(), this.map.has(p) ? await this.update(p, d) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: p,
                value: d
            }), this.map.set(p, d), await this.persist())
        }, this.get = p => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: p
        }), this.getData(p)), this.getAll = p => (this.isInitialized(), p ? this.values.filter(d => Object.keys(p).every(v => zE(d[v], p[v]))) : this.values), this.update = async (p, d) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: p,
                update: d
            });
            const v = Bf(Bf({}, this.getData(p)), d);
            this.map.set(p, v), await this.persist()
        }, this.delete = async (p, d) => {
            this.isInitialized(), this.map.has(p) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: p,
                reason: d
            }), this.map.delete(p), await this.persist())
        }, this.logger = Ze.generateChildLogger(r, this.name), this.storagePrefix = a, this.getKey = l
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const r = this.map.get(t);
        if (!r) {
            const {
                message: s
            } = ue("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(s), new Error(s)
        }
        return r
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
                const {
                    message: r
                } = ue("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class o5 {
    constructor(t, r) {
        this.core = t, this.logger = r, this.name = F2, this.version = $2, this.events = new hu, this.initialized = !1, this.storagePrefix = Ci, this.ignoredPayloadTypes = [nn], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: s
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]
        }, this.create = async () => {
            this.isInitialized();
            const s = iu(),
                a = await this.core.crypto.setSymKey(s),
                l = kr(ye.FIVE_MINUTES),
                p = {
                    protocol: up
                },
                d = {
                    topic: a,
                    expiry: l,
                    relay: p,
                    active: !1
                },
                v = Mb({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: a,
                    symKey: s,
                    relay: p
                });
            return await this.pairings.set(a, d), await this.core.relayer.subscribe(a), this.core.expirer.set(a, l), {
                topic: a,
                uri: v
            }
        }, this.pair = async s => {
            this.isInitialized(), this.isValidPair(s);
            const {
                topic: a,
                symKey: l,
                relay: p
            } = Fb(s.uri);
            let d;
            if (this.pairings.keys.includes(a) && (d = this.pairings.get(a), d.active)) throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
            this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(l, a), await this.core.relayer.subscribe(a, {
                relay: p
            }));
            const v = kr(ye.FIVE_MINUTES),
                b = {
                    topic: a,
                    relay: p,
                    expiry: v,
                    active: !1
                };
            return await this.pairings.set(a, b), this.core.expirer.set(a, v), s.activatePairing && await this.activate({
                topic: a
            }), this.events.emit(vs.create, b), b
        }, this.activate = async ({
            topic: s
        }) => {
            this.isInitialized();
            const a = kr(ye.THIRTY_DAYS);
            await this.pairings.update(s, {
                active: !0,
                expiry: a
            }), this.core.expirer.set(s, a)
        }, this.ping = async s => {
            this.isInitialized(), await this.isValidPing(s);
            const {
                topic: a
            } = s;
            if (this.pairings.keys.includes(a)) {
                const l = await this.sendRequest(a, "wc_pairingPing", {}),
                    {
                        done: p,
                        resolve: d,
                        reject: v
                    } = Nn();
                this.events.once(Ht("pairing_ping", l), ({
                    error: b
                }) => {
                    b ? v(b) : d()
                }), await p()
            }
        }, this.updateExpiry = async ({
            topic: s,
            expiry: a
        }) => {
            this.isInitialized(), await this.pairings.update(s, {
                expiry: a
            })
        }, this.updateMetadata = async ({
            topic: s,
            metadata: a
        }) => {
            this.isInitialized(), await this.pairings.update(s, {
                peerMetadata: a
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async s => {
            this.isInitialized(), await this.isValidDisconnect(s);
            const {
                topic: a
            } = s;
            this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", Ct("USER_DISCONNECTED")), await this.deletePairing(a))
        }, this.sendRequest = async (s, a, l) => {
            const p = Cn(a, l),
                d = await this.core.crypto.encode(s, p),
                v = hs[a].req;
            return this.core.history.set(s, p), this.core.relayer.publish(s, d, v), p.id
        }, this.sendResult = async (s, a, l) => {
            const p = xu(s, l),
                d = await this.core.crypto.encode(a, p),
                v = await this.core.history.get(a, s),
                b = hs[v.request.method].res;
            await this.core.relayer.publish(a, d, b), await this.core.history.resolve(p)
        }, this.sendError = async (s, a, l) => {
            const p = ea(s, l),
                d = await this.core.crypto.encode(a, p),
                v = await this.core.history.get(a, s),
                b = hs[v.request.method] ? hs[v.request.method].res : hs.unregistered_method.res;
            await this.core.relayer.publish(a, d, b), await this.core.history.resolve(p)
        }, this.deletePairing = async (s, a) => {
            await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, Ct("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), a ? Promise.resolve() : this.core.expirer.del(s)])
        }, this.cleanup = async () => {
            const s = this.pairings.getAll().filter(a => Ti(a.expiry));
            await Promise.all(s.map(a => this.deletePairing(a.topic)))
        }, this.onRelayEventRequest = s => {
            const {
                topic: a,
                payload: l
            } = s;
            switch (l.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(a, l);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(a, l);
                default:
                    return this.onUnknownRpcMethodRequest(a, l)
            }
        }, this.onRelayEventResponse = async s => {
            const {
                topic: a,
                payload: l
            } = s, p = (await this.core.history.get(a, l.id)).request.method;
            switch (p) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(a, l);
                default:
                    return this.onUnknownRpcMethodResponse(p)
            }
        }, this.onPairingPingRequest = async (s, a) => {
            const {
                id: l
            } = a;
            try {
                this.isValidPing({
                    topic: s
                }), await this.sendResult(l, s, !0), this.events.emit(vs.ping, {
                    id: l,
                    topic: s
                })
            } catch (p) {
                await this.sendError(l, s, p), this.logger.error(p)
            }
        }, this.onPairingPingResponse = (s, a) => {
            const {
                id: l
            } = a;
            setTimeout(() => {
                mi(a) ? this.events.emit(Ht("pairing_ping", l), {}) : Vr(a) && this.events.emit(Ht("pairing_ping", l), {
                    error: a.error
                })
            }, 500)
        }, this.onPairingDeleteRequest = async (s, a) => {
            const {
                id: l
            } = a;
            try {
                this.isValidDisconnect({
                    topic: s
                }), await this.deletePairing(s), this.events.emit(vs.delete, {
                    id: l,
                    topic: s
                })
            } catch (p) {
                await this.sendError(l, s, p), this.logger.error(p)
            }
        }, this.onUnknownRpcMethodRequest = async (s, a) => {
            const {
                id: l,
                method: p
            } = a;
            try {
                if (this.registeredMethods.includes(p)) return;
                const d = Ct("WC_METHOD_UNSUPPORTED", p);
                await this.sendError(l, s, d), this.logger.error(d)
            } catch (d) {
                await this.sendError(l, s, d), this.logger.error(d)
            }
        }, this.onUnknownRpcMethodResponse = s => {
            this.registeredMethods.includes(s) || this.logger.error(Ct("WC_METHOD_UNSUPPORTED", s))
        }, this.isValidPair = s => {
            if (!vr(s)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw new Error(a)
            }
            if (!Gb(s.uri)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw new Error(a)
            }
        }, this.isValidPing = async s => {
            if (!vr(s)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(l)
            }
            const {
                topic: a
            } = s;
            await this.isValidPairingTopic(a)
        }, this.isValidDisconnect = async s => {
            if (!vr(s)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(l)
            }
            const {
                topic: a
            } = s;
            await this.isValidPairingTopic(a)
        }, this.isValidPairingTopic = async s => {
            if (!Vt(s, !1)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(a)
            }
            if (!this.pairings.keys.includes(s)) {
                const {
                    message: a
                } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(a)
            }
            if (Ti(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const {
                    message: a
                } = ue("EXPIRED", `pairing topic: ${s}`);
                throw new Error(a)
            }
        }, this.core = t, this.logger = Ze.generateChildLogger(r, this.name), this.pairings = new ia(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Xt.message, async t => {
            const {
                topic: r,
                message: s
            } = t;
            if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) return;
            const a = await this.core.crypto.decode(r, s);
            try {
                Ou(a) ? (this.core.history.set(r, a), this.onRelayEventRequest({
                    topic: r,
                    payload: a
                })) : ta(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({
                    topic: r,
                    payload: a
                }), this.core.history.delete(r, a.id))
            } catch (l) {
                this.logger.error(l)
            }
        })
    }
    registerExpirerEvents() {
        this.core.expirer.on($r.expired, async t => {
            const {
                topic: r
            } = Hd(t.target);
            r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(vs.expire, {
                topic: r
            }))
        })
    }
}
class a5 extends Pm {
    constructor(t, r) {
        super(t, r), this.core = t, this.logger = r, this.records = new Map, this.events = new Dr.EventEmitter, this.name = D2, this.version = M2, this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(s => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (s, a, l) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: s,
                    request: a,
                    chainId: l
                }), this.records.has(a.id)) return;
            const p = {
                id: a.id,
                topic: s,
                request: {
                    method: a.method,
                    params: a.params || null
                },
                chainId: l,
                expiry: kr(ye.THIRTY_DAYS)
            };
            this.records.set(p.id, p), this.events.emit(ei.created, p)
        }, this.resolve = async s => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: s
                }), !this.records.has(s.id)) return;
            const a = await this.getRecord(s.id);
            typeof a.response > "u" && (a.response = Vr(s) ? {
                error: s.error
            } : {
                result: s.result
            }, this.records.set(a.id, a), this.events.emit(ei.updated, a))
        }, this.get = async (s, a) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: s,
            id: a
        }), await this.getRecord(a)), this.delete = (s, a) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: a
            }), this.values.forEach(l => {
                if (l.topic === s) {
                    if (typeof a < "u" && l.id !== a) return;
                    this.records.delete(l.id), this.events.emit(ei.deleted, l)
                }
            })
        }, this.exists = async (s, a) => (this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === s : !1), this.on = (s, a) => {
            this.events.on(s, a)
        }, this.once = (s, a) => {
            this.events.once(s, a)
        }, this.off = (s, a) => {
            this.events.off(s, a)
        }, this.removeListener = (s, a) => {
            this.events.removeListener(s, a)
        }, this.logger = Ze.generateChildLogger(r, this.name)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach(r => {
            if (typeof r.response < "u") return;
            const s = {
                topic: r.topic,
                request: Cn(r.request.method, r.request.params, r.id),
                chainId: r.chainId
            };
            return t.push(s)
        }), t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const r = this.records.get(t);
        if (!r) {
            const {
                message: s
            } = ue("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(s)
        }
        return r
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(ei.sync)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
                const {
                    message: r
                } = ue("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
        }
    }
    registerEventListeners() {
        this.events.on(ei.created, t => {
            const r = ei.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.events.on(ei.updated, t => {
            const r = ei.updated;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.events.on(ei.deleted, t => {
            const r = ei.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
        })
    }
    cleanup() {
        try {
            this.records.forEach(t => {
                ye.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
            })
        } catch (t) {
            this.logger.warn(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class c5 extends Lm {
    constructor(t, r) {
        super(t, r), this.core = t, this.logger = r, this.expirations = new Map, this.events = new Dr.EventEmitter, this.name = j2, this.version = q2, this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(s => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = s => {
            try {
                const a = this.formatTarget(s);
                return typeof this.getExpiration(a) < "u"
            } catch {
                return !1
            }
        }, this.set = (s, a) => {
            this.isInitialized();
            const l = this.formatTarget(s),
                p = {
                    target: l,
                    expiry: a
                };
            this.expirations.set(l, p), this.checkExpiry(l, p), this.events.emit($r.created, {
                target: l,
                expiration: p
            })
        }, this.get = s => {
            this.isInitialized();
            const a = this.formatTarget(s);
            return this.getExpiration(a)
        }, this.del = s => {
            if (this.isInitialized(), this.has(s)) {
                const a = this.formatTarget(s),
                    l = this.getExpiration(a);
                this.expirations.delete(a), this.events.emit($r.deleted, {
                    target: a,
                    expiration: l
                })
            }
        }, this.on = (s, a) => {
            this.events.on(s, a)
        }, this.once = (s, a) => {
            this.events.once(s, a)
        }, this.off = (s, a) => {
            this.events.off(s, a)
        }, this.removeListener = (s, a) => {
            this.events.removeListener(s, a)
        }, this.logger = Ze.generateChildLogger(r, this.name)
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if (typeof t == "string") return Ob(t);
        if (typeof t == "number") return Pb(t);
        const {
            message: r
        } = ue("UNKNOWN_TYPE", `Target type: ${typeof t}`);
        throw new Error(r)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit($r.sync)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
                const {
                    message: r
                } = ue("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
        }
    }
    getExpiration(t) {
        const r = this.expirations.get(t);
        if (!r) {
            const {
                message: s
            } = ue("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(s), new Error(s)
        }
        return r
    }
    checkExpiry(t, r) {
        const {
            expiry: s
        } = r;
        ye.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r)
    }
    expire(t, r) {
        this.expirations.delete(t), this.events.emit($r.expired, {
            target: t,
            expiration: r
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Ln.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on($r.created, t => {
            const r = $r.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        }), this.events.on($r.expired, t => {
            const r = $r.expired;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        }), this.events.on($r.deleted, t => {
            const r = $r.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class u5 extends Um {
    constructor(t, r) {
        super(t, r), this.projectId = t, this.logger = r, this.name = qc, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async s => {
            if (this.verifyDisabled || Zo() || !xs()) return;
            const a = (s == null ? void 0 : s.verifyUrl) || jo;
            this.verifyUrl !== a && this.removeIframe(), this.verifyUrl = a;
            try {
                await this.createIframe()
            } catch (l) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(l)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = Df;
                try {
                    await this.createIframe()
                } catch (l) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(l), this.verifyDisabled = !0
                }
            }
        }, this.register = async s => {
            this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init())
        }, this.resolve = async s => {
            if (this.isDevEnv) return "";
            const a = (s == null ? void 0 : s.verifyUrl) || jo;
            let l;
            try {
                l = await this.fetchAttestation(s.attestationId, a)
            } catch (p) {
                this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`), this.logger.info(p), l = await this.fetchAttestation(s.attestationId, Df)
            }
            return l
        }, this.fetchAttestation = async (s, a) => {
            this.logger.info(`resolving attestation: ${s} from url: ${a}`);
            const l = this.startAbortTimer(ye.ONE_SECOND * 2),
                p = await fetch(`${a}/attestation/${s}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(l), p.status === 200 ? await p.json() : void 0
        }, this.addToQueue = s => {
            this.queue.push(s)
        }, this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(s => this.sendPost(s)), this.queue = [])
        }, this.sendPost = s => {
            var a;
            try {
                if (!this.iframe) return;
                (a = this.iframe.contentWindow) == null || a.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`)
            } catch {}
        }, this.createIframe = async () => {
            let s;
            const a = l => {
                l.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", a), s())
            };
            await Promise.race([new Promise(l => {
                if (document.getElementById(qc)) return l();
                window.addEventListener("message", a);
                const p = document.createElement("iframe");
                p.id = qc, p.src = `${this.verifyUrl}/${this.projectId}`, p.style.display = "none", document.body.append(p), this.iframe = p, s = l
            }), new Promise((l, p) => setTimeout(() => {
                window.removeEventListener("message", a), p("verify iframe load timeout")
            }, ye.toMiliseconds(ye.FIVE_SECONDS)))])
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.logger = Ze.generateChildLogger(r, this.name), this.verifyUrl = jo, this.abortController = new AbortController, this.isDevEnv = wu() && {}.IS_VITEST
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), ye.toMiliseconds(t))
    }
}
var h5 = Object.defineProperty,
    kf = Object.getOwnPropertySymbols,
    l5 = Object.prototype.hasOwnProperty,
    f5 = Object.prototype.propertyIsEnumerable,
    Vf = (n, t, r) => t in n ? h5(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    Gf = (n, t) => {
        for (var r in t || (t = {})) l5.call(t, r) && Vf(n, r, t[r]);
        if (kf)
            for (var r of kf(t)) f5.call(t, r) && Vf(n, r, t[r]);
        return n
    };
class Au extends Om {
    constructor(t) {
        super(t), this.protocol = cp, this.version = d2, this.name = Pu, this.events = new Dr.EventEmitter, this.initialized = !1, this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || hp;
        const r = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : Ze.pino(Ze.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || p2.logger
        }));
        this.logger = Ze.generateChildLogger(r, this.name), this.heartbeat = new Ln.HeartBeat, this.crypto = new z2(this, this.logger, t == null ? void 0 : t.keychain), this.history = new a5(this, this.logger), this.expirer = new c5(this, this.logger), this.storage = t != null && t.storage ? t.storage : new um(Gf(Gf({}, g2), t == null ? void 0 : t.storageOptions)), this.relayer = new r5({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new o5(this, this.logger), this.verify = new u5(this.projectId || "", this.logger)
    }
    static async init(t) {
        const r = new Au(t);
        await r.initialize();
        const s = await r.crypto.getClientId();
        return await r.storage.setItem(T2, s), r
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (t) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
        }
    }
}
const d5 = Au,
    lp = "wc",
    fp = 2,
    dp = "client",
    Nu = `${lp}@${fp}:${dp}:`,
    zc = {
        name: dp,
        logger: "error",
        controller: !1,
        relayUrl: "wss://relay.walletconnect.com"
    },
    Wf = "WALLETCONNECT_DEEPLINK_CHOICE",
    p5 = "proposal",
    pp = "Proposal expired",
    g5 = "session",
    Uo = ye.SEVEN_DAYS,
    v5 = "engine",
    fs = {
        wc_sessionPropose: {
            req: {
                ttl: ye.FIVE_MINUTES,
                prompt: !0,
                tag: 1100
            },
            res: {
                ttl: ye.FIVE_MINUTES,
                prompt: !1,
                tag: 1101
            }
        },
        wc_sessionSettle: {
            req: {
                ttl: ye.FIVE_MINUTES,
                prompt: !1,
                tag: 1102
            },
            res: {
                ttl: ye.FIVE_MINUTES,
                prompt: !1,
                tag: 1103
            }
        },
        wc_sessionUpdate: {
            req: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1104
            },
            res: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1105
            }
        },
        wc_sessionExtend: {
            req: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1106
            },
            res: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1107
            }
        },
        wc_sessionRequest: {
            req: {
                ttl: ye.FIVE_MINUTES,
                prompt: !0,
                tag: 1108
            },
            res: {
                ttl: ye.FIVE_MINUTES,
                prompt: !1,
                tag: 1109
            }
        },
        wc_sessionEvent: {
            req: {
                ttl: ye.FIVE_MINUTES,
                prompt: !0,
                tag: 1110
            },
            res: {
                ttl: ye.FIVE_MINUTES,
                prompt: !1,
                tag: 1111
            }
        },
        wc_sessionDelete: {
            req: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1112
            },
            res: {
                ttl: ye.ONE_DAY,
                prompt: !1,
                tag: 1113
            }
        },
        wc_sessionPing: {
            req: {
                ttl: ye.THIRTY_SECONDS,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: ye.THIRTY_SECONDS,
                prompt: !1,
                tag: 1115
            }
        }
    },
    Kc = {
        min: ye.FIVE_MINUTES,
        max: ye.SEVEN_DAYS
    },
    _i = {
        idle: "IDLE",
        active: "ACTIVE"
    },
    y5 = "request",
    _5 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var m5 = Object.defineProperty,
    w5 = Object.defineProperties,
    b5 = Object.getOwnPropertyDescriptors,
    Yf = Object.getOwnPropertySymbols,
    E5 = Object.prototype.hasOwnProperty,
    S5 = Object.prototype.propertyIsEnumerable,
    Jf = (n, t, r) => t in n ? m5(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    gr = (n, t) => {
        for (var r in t || (t = {})) E5.call(t, r) && Jf(n, r, t[r]);
        if (Yf)
            for (var r of Yf(t)) S5.call(t, r) && Jf(n, r, t[r]);
        return n
    },
    ds = (n, t) => w5(n, b5(t));
class I5 extends $m {
    constructor(t) {
        super(t), this.name = v5, this.events = new hu, this.initialized = !1, this.ignoredPayloadTypes = [nn], this.requestQueue = {
            state: _i.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: _i.idle,
            queue: []
        }, this.requestQueueDelay = ye.ONE_SECOND, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(fs)
            }), this.initialized = !0, setTimeout(() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
            }, ye.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async r => {
            await this.isInitialized();
            const s = ds(gr({}, r), {
                requiredNamespaces: r.requiredNamespaces || {},
                optionalNamespaces: r.optionalNamespaces || {}
            });
            await this.isValidConnect(s);
            const {
                pairingTopic: a,
                requiredNamespaces: l,
                optionalNamespaces: p,
                sessionProperties: d,
                relays: v
            } = s;
            let b = a,
                S, A = !1;
            if (b && (A = this.client.core.pairing.pairings.get(b).active), !b || !A) {
                const {
                    topic: D,
                    uri: I
                } = await this.client.core.pairing.create();
                b = D, S = I
            }
            const $ = await this.client.core.crypto.generateKeyPair(),
                R = gr({
                    requiredNamespaces: l,
                    optionalNamespaces: p,
                    relays: v ? ? [{
                        protocol: up
                    }],
                    proposer: {
                        publicKey: $,
                        metadata: this.client.metadata
                    }
                }, d && {
                    sessionProperties: d
                }),
                {
                    reject: H,
                    resolve: K,
                    done: B
                } = Nn(ye.FIVE_MINUTES, pp);
            if (this.events.once(Ht("session_connect"), async ({
                    error: D,
                    session: I
                }) => {
                    if (D) H(D);
                    else if (I) {
                        I.self.publicKey = $;
                        const P = ds(gr({}, I), {
                            requiredNamespaces: I.requiredNamespaces,
                            optionalNamespaces: I.optionalNamespaces
                        });
                        await this.client.session.set(I.topic, P), await this.setExpiry(I.topic, I.expiry), b && await this.client.core.pairing.updateMetadata({
                            topic: b,
                            metadata: I.peer.metadata
                        }), K(P)
                    }
                }), !b) {
                const {
                    message: D
                } = ue("NO_MATCHING_KEY", `connect() pairing topic: ${b}`);
                throw new Error(D)
            }
            const oe = await this.sendRequest({
                    topic: b,
                    method: "wc_sessionPropose",
                    params: R
                }),
                T = kr(ye.FIVE_MINUTES);
            return await this.setProposal(oe, gr({
                id: oe,
                expiry: T
            }, R)), {
                uri: S,
                approval: B
            }
        }, this.pair = async r => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async r => {
            await this.isInitialized(), await this.isValidApprove(r);
            const {
                id: s,
                relayProtocol: a,
                namespaces: l,
                sessionProperties: p
            } = r, d = this.client.proposal.get(s);
            let {
                pairingTopic: v,
                proposer: b,
                requiredNamespaces: S,
                optionalNamespaces: A
            } = d;
            v = v || "", Tn(S) || (S = zb(l, "approve()"));
            const $ = await this.client.core.crypto.generateKeyPair(),
                R = b.publicKey,
                H = await this.client.core.crypto.generateSharedKey($, R);
            v && s && (await this.client.core.pairing.updateMetadata({
                topic: v,
                metadata: b.metadata
            }), await this.sendResult({
                id: s,
                topic: v,
                result: {
                    relay: {
                        protocol: a ? ? "irn"
                    },
                    responderPublicKey: $
                }
            }), await this.client.proposal.delete(s, Ct("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: v
            }));
            const K = gr({
                relay: {
                    protocol: a ? ? "irn"
                },
                namespaces: l,
                requiredNamespaces: S,
                optionalNamespaces: A,
                pairingTopic: v,
                controller: {
                    publicKey: $,
                    metadata: this.client.metadata
                },
                expiry: kr(Uo)
            }, p && {
                sessionProperties: p
            });
            await this.client.core.relayer.subscribe(H), await this.sendRequest({
                topic: H,
                method: "wc_sessionSettle",
                params: K,
                throwOnFailedPublish: !0
            });
            const B = ds(gr({}, K), {
                topic: H,
                pairingTopic: v,
                acknowledged: !1,
                self: K.controller,
                peer: {
                    publicKey: b.publicKey,
                    metadata: b.metadata
                },
                controller: $
            });
            return await this.client.session.set(H, B), await this.setExpiry(H, kr(Uo)), {
                topic: H,
                acknowledged: () => new Promise(oe => setTimeout(() => oe(this.client.session.get(H)), 500))
            }
        }, this.reject = async r => {
            await this.isInitialized(), await this.isValidReject(r);
            const {
                id: s,
                reason: a
            } = r, {
                pairingTopic: l
            } = this.client.proposal.get(s);
            l && (await this.sendError(s, l, a), await this.client.proposal.delete(s, Ct("USER_DISCONNECTED")))
        }, this.update = async r => {
            await this.isInitialized(), await this.isValidUpdate(r);
            const {
                topic: s,
                namespaces: a
            } = r, l = await this.sendRequest({
                topic: s,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: a
                }
            }), {
                done: p,
                resolve: d,
                reject: v
            } = Nn();
            return this.events.once(Ht("session_update", l), ({
                error: b
            }) => {
                b ? v(b) : d()
            }), await this.client.session.update(s, {
                namespaces: a
            }), {
                acknowledged: p
            }
        }, this.extend = async r => {
            await this.isInitialized(), await this.isValidExtend(r);
            const {
                topic: s
            } = r, a = await this.sendRequest({
                topic: s,
                method: "wc_sessionExtend",
                params: {}
            }), {
                done: l,
                resolve: p,
                reject: d
            } = Nn();
            return this.events.once(Ht("session_extend", a), ({
                error: v
            }) => {
                v ? d(v) : p()
            }), await this.setExpiry(s, kr(Uo)), {
                acknowledged: l
            }
        }, this.request = async r => {
            await this.isInitialized(), await this.isValidRequest(r);
            const {
                chainId: s,
                request: a,
                topic: l,
                expiry: p
            } = r, d = Iu(), {
                done: v,
                resolve: b,
                reject: S
            } = Nn(p);
            return this.events.once(Ht("session_request", d), ({
                error: A,
                result: $
            }) => {
                A ? S(A) : b($)
            }), await Promise.all([new Promise(async A => {
                await this.sendRequest({
                    clientRpcId: d,
                    topic: l,
                    method: "wc_sessionRequest",
                    params: {
                        request: a,
                        chainId: s
                    },
                    expiry: p,
                    throwOnFailedPublish: !0
                }).catch($ => S($)), this.client.events.emit("session_request_sent", {
                    topic: l,
                    request: a,
                    chainId: s,
                    id: d
                }), A()
            }), new Promise(async A => {
                const $ = await this.client.core.storage.getItem(Wf);
                Ab({
                    id: d,
                    topic: l,
                    wcDeepLink: $
                }), A()
            }), v()]).then(A => A[2])
        }, this.respond = async r => {
            await this.isInitialized(), await this.isValidRespond(r);
            const {
                topic: s,
                response: a
            } = r, {
                id: l
            } = a;
            mi(a) ? await this.sendResult({
                id: l,
                topic: s,
                result: a.result,
                throwOnFailedPublish: !0
            }) : Vr(a) && await this.sendError(l, s, a.error), this.cleanupAfterResponse(r)
        }, this.ping = async r => {
            await this.isInitialized(), await this.isValidPing(r);
            const {
                topic: s
            } = r;
            if (this.client.session.keys.includes(s)) {
                const a = await this.sendRequest({
                        topic: s,
                        method: "wc_sessionPing",
                        params: {}
                    }),
                    {
                        done: l,
                        resolve: p,
                        reject: d
                    } = Nn();
                this.events.once(Ht("session_ping", a), ({
                    error: v
                }) => {
                    v ? d(v) : p()
                }), await l()
            } else this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({
                topic: s
            })
        }, this.emit = async r => {
            await this.isInitialized(), await this.isValidEmit(r);
            const {
                topic: s,
                event: a,
                chainId: l
            } = r;
            await this.sendRequest({
                topic: s,
                method: "wc_sessionEvent",
                params: {
                    event: a,
                    chainId: l
                }
            })
        }, this.disconnect = async r => {
            await this.isInitialized(), await this.isValidDisconnect(r);
            const {
                topic: s
            } = r;
            this.client.session.keys.includes(s) ? (await this.sendRequest({
                topic: s,
                method: "wc_sessionDelete",
                params: Ct("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({
                topic: s
            })
        }, this.find = r => (this.isInitialized(), this.client.session.getAll().filter(s => kb(s, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async r => {
            if (r.pairingTopic) try {
                const s = this.client.core.pairing.pairings.get(r.pairingTopic),
                    a = this.client.core.pairing.pairings.getAll().filter(l => {
                        var p, d;
                        return ((p = l.peerMetadata) == null ? void 0 : p.url) && ((d = l.peerMetadata) == null ? void 0 : d.url) === r.peer.metadata.url && l.topic && l.topic !== s.topic
                    });
                if (a.length === 0) return;
                this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), await Promise.all(a.map(l => this.client.core.pairing.disconnect({
                    topic: l.topic
                }))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (s) {
                this.client.logger.error(s)
            }
        }, this.deleteSession = async (r, s) => {
            const {
                self: a
            } = this.client.session.get(r);
            await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Ct("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), s || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Wf).catch(l => this.client.logger.warn(l))
        }, this.deleteProposal = async (r, s) => {
            await Promise.all([this.client.proposal.delete(r, Ct("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)])
        }, this.deletePendingSessionRequest = async (r, s, a = !1) => {
            await Promise.all([this.client.pendingRequest.delete(r, s), a ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(l => l.id !== r), a && (this.sessionRequestQueue.state = _i.idle)
        }, this.setExpiry = async (r, s) => {
            this.client.session.keys.includes(r) && await this.client.session.update(r, {
                expiry: s
            }), this.client.core.expirer.set(r, s)
        }, this.setProposal = async (r, s) => {
            await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry)
        }, this.setPendingSessionRequest = async r => {
            const s = fs.wc_sessionRequest.req.ttl,
                {
                    id: a,
                    topic: l,
                    params: p,
                    verifyContext: d
                } = r;
            await this.client.pendingRequest.set(a, {
                id: a,
                topic: l,
                params: p,
                verifyContext: d
            }), s && this.client.core.expirer.set(a, kr(s))
        }, this.sendRequest = async r => {
            const {
                topic: s,
                method: a,
                params: l,
                expiry: p,
                relayRpcId: d,
                clientRpcId: v,
                throwOnFailedPublish: b
            } = r, S = Cn(a, l, v);
            if (xs() && _5.includes(a)) {
                const R = Rn(JSON.stringify(S));
                this.client.core.verify.register({
                    attestationId: R
                })
            }
            const A = await this.client.core.crypto.encode(s, S),
                $ = fs[a].req;
            return p && ($.ttl = p), d && ($.id = d), this.client.core.history.set(s, S), b ? ($.internal = ds(gr({}, $.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(s, A, $)) : this.client.core.relayer.publish(s, A, $).catch(R => this.client.logger.error(R)), S.id
        }, this.sendResult = async r => {
            const {
                id: s,
                topic: a,
                result: l,
                throwOnFailedPublish: p
            } = r, d = xu(s, l), v = await this.client.core.crypto.encode(a, d), b = await this.client.core.history.get(a, s), S = fs[b.request.method].res;
            p ? (S.internal = ds(gr({}, S.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(a, v, S)) : this.client.core.relayer.publish(a, v, S).catch(A => this.client.logger.error(A)), await this.client.core.history.resolve(d)
        }, this.sendError = async (r, s, a) => {
            const l = ea(r, a),
                p = await this.client.core.crypto.encode(s, l),
                d = await this.client.core.history.get(s, r),
                v = fs[d.request.method].res;
            this.client.core.relayer.publish(s, p, v), await this.client.core.history.resolve(l)
        }, this.cleanup = async () => {
            const r = [],
                s = [];
            this.client.session.getAll().forEach(a => {
                Ti(a.expiry) && r.push(a.topic)
            }), this.client.proposal.getAll().forEach(a => {
                Ti(a.expiry) && s.push(a.id)
            }), await Promise.all([...r.map(a => this.deleteSession(a)), ...s.map(a => this.deleteProposal(a))])
        }, this.onRelayEventRequest = async r => {
            this.requestQueue.queue.push(r), await this.processRequestsQueue()
        }, this.processRequestsQueue = async () => {
            if (this.requestQueue.state === _i.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                this.requestQueue.state = _i.active;
                const r = this.requestQueue.queue.shift();
                if (r) try {
                    this.processRequest(r), await new Promise(s => setTimeout(s, 300))
                } catch (s) {
                    this.client.logger.warn(s)
                }
            }
            this.requestQueue.state = _i.idle
        }, this.processRequest = r => {
            const {
                topic: s,
                payload: a
            } = r, l = a.method;
            switch (l) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(s, a);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(s, a);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(s, a);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(s, a);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(s, a);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(s, a);
                case "wc_sessionRequest":
                    return this.onSessionRequest(s, a);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(s, a);
                default:
                    return this.client.logger.info(`Unsupported request method ${l}`)
            }
        }, this.onRelayEventResponse = async r => {
            const {
                topic: s,
                payload: a
            } = r, l = (await this.client.core.history.get(s, a.id)).request.method;
            switch (l) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(s, a);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(s, a);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(s, a);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(s, a);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(s, a);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(s, a);
                default:
                    return this.client.logger.info(`Unsupported response method ${l}`)
            }
        }, this.onRelayEventUnknownPayload = r => {
            const {
                topic: s
            } = r, {
                message: a
            } = ue("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(a)
        }, this.onSessionProposeRequest = async (r, s) => {
            const {
                params: a,
                id: l
            } = s;
            try {
                this.isValidConnect(gr({}, s.params));
                const p = kr(ye.FIVE_MINUTES),
                    d = gr({
                        id: l,
                        pairingTopic: r,
                        expiry: p
                    }, a);
                await this.setProposal(l, d);
                const v = Rn(JSON.stringify(s)),
                    b = await this.getVerifyContext(v, d.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: l,
                    params: d,
                    verifyContext: b
                })
            } catch (p) {
                await this.sendError(l, r, p), this.client.logger.error(p)
            }
        }, this.onSessionProposeResponse = async (r, s) => {
            const {
                id: a
            } = s;
            if (mi(s)) {
                const {
                    result: l
                } = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: l
                });
                const p = this.client.proposal.get(a);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: p
                });
                const d = p.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: d
                });
                const v = l.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: v
                });
                const b = await this.client.core.crypto.generateSharedKey(d, v);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: b
                });
                const S = await this.client.core.relayer.subscribe(b);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: S
                }), await this.client.core.pairing.activate({
                    topic: r
                })
            } else Vr(s) && (await this.client.proposal.delete(a, Ct("USER_DISCONNECTED")), this.events.emit(Ht("session_connect"), {
                error: s.error
            }))
        }, this.onSessionSettleRequest = async (r, s) => {
            const {
                id: a,
                params: l
            } = s;
            try {
                this.isValidSessionSettleRequest(l);
                const {
                    relay: p,
                    controller: d,
                    expiry: v,
                    namespaces: b,
                    requiredNamespaces: S,
                    optionalNamespaces: A,
                    sessionProperties: $,
                    pairingTopic: R
                } = s.params, H = gr({
                    topic: r,
                    relay: p,
                    expiry: v,
                    namespaces: b,
                    acknowledged: !0,
                    pairingTopic: R,
                    requiredNamespaces: S,
                    optionalNamespaces: A,
                    controller: d.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: d.publicKey,
                        metadata: d.metadata
                    }
                }, $ && {
                    sessionProperties: $
                });
                await this.sendResult({
                    id: s.id,
                    topic: r,
                    result: !0
                }), this.events.emit(Ht("session_connect"), {
                    session: H
                }), this.cleanupDuplicatePairings(H)
            } catch (p) {
                await this.sendError(a, r, p), this.client.logger.error(p)
            }
        }, this.onSessionSettleResponse = async (r, s) => {
            const {
                id: a
            } = s;
            mi(s) ? (await this.client.session.update(r, {
                acknowledged: !0
            }), this.events.emit(Ht("session_approve", a), {})) : Vr(s) && (await this.client.session.delete(r, Ct("USER_DISCONNECTED")), this.events.emit(Ht("session_approve", a), {
                error: s.error
            }))
        }, this.onSessionUpdateRequest = async (r, s) => {
            const {
                params: a,
                id: l
            } = s;
            try {
                const p = `${r}_session_update`,
                    d = Lo.get(p);
                if (d && this.isRequestOutOfSync(d, l)) {
                    this.client.logger.info(`Discarding out of sync request - ${l}`);
                    return
                }
                this.isValidUpdate(gr({
                    topic: r
                }, a)), await this.client.session.update(r, {
                    namespaces: a.namespaces
                }), await this.sendResult({
                    id: l,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_update", {
                    id: l,
                    topic: r,
                    params: a
                }), Lo.set(p, l)
            } catch (p) {
                await this.sendError(l, r, p), this.client.logger.error(p)
            }
        }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
            const {
                id: a
            } = s;
            mi(s) ? this.events.emit(Ht("session_update", a), {}) : Vr(s) && this.events.emit(Ht("session_update", a), {
                error: s.error
            })
        }, this.onSessionExtendRequest = async (r, s) => {
            const {
                id: a
            } = s;
            try {
                this.isValidExtend({
                    topic: r
                }), await this.setExpiry(r, kr(Uo)), await this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_extend", {
                    id: a,
                    topic: r
                })
            } catch (l) {
                await this.sendError(a, r, l), this.client.logger.error(l)
            }
        }, this.onSessionExtendResponse = (r, s) => {
            const {
                id: a
            } = s;
            mi(s) ? this.events.emit(Ht("session_extend", a), {}) : Vr(s) && this.events.emit(Ht("session_extend", a), {
                error: s.error
            })
        }, this.onSessionPingRequest = async (r, s) => {
            const {
                id: a
            } = s;
            try {
                this.isValidPing({
                    topic: r
                }), await this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_ping", {
                    id: a,
                    topic: r
                })
            } catch (l) {
                await this.sendError(a, r, l), this.client.logger.error(l)
            }
        }, this.onSessionPingResponse = (r, s) => {
            const {
                id: a
            } = s;
            setTimeout(() => {
                mi(s) ? this.events.emit(Ht("session_ping", a), {}) : Vr(s) && this.events.emit(Ht("session_ping", a), {
                    error: s.error
                })
            }, 500)
        }, this.onSessionDeleteRequest = async (r, s) => {
            const {
                id: a
            } = s;
            try {
                this.isValidDisconnect({
                    topic: r,
                    reason: s.params
                }), await Promise.all([new Promise(l => {
                    this.client.core.relayer.once(Xt.publish, async () => {
                        l(await this.deleteSession(r))
                    })
                }), this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                })]), this.client.events.emit("session_delete", {
                    id: a,
                    topic: r
                })
            } catch (l) {
                this.client.logger.error(l)
            }
        }, this.onSessionRequest = async (r, s) => {
            const {
                id: a,
                params: l
            } = s;
            try {
                this.isValidRequest(gr({
                    topic: r
                }, l));
                const p = Rn(JSON.stringify(Cn("wc_sessionRequest", l, a))),
                    d = this.client.session.get(r),
                    v = await this.getVerifyContext(p, d.peer.metadata),
                    b = {
                        id: a,
                        topic: r,
                        params: l,
                        verifyContext: v
                    };
                await this.setPendingSessionRequest(b), this.addSessionRequestToSessionRequestQueue(b), this.processSessionRequestQueue()
            } catch (p) {
                await this.sendError(a, r, p), this.client.logger.error(p)
            }
        }, this.onSessionRequestResponse = (r, s) => {
            const {
                id: a
            } = s;
            mi(s) ? this.events.emit(Ht("session_request", a), {
                result: s.result
            }) : Vr(s) && this.events.emit(Ht("session_request", a), {
                error: s.error
            })
        }, this.onSessionEventRequest = async (r, s) => {
            const {
                id: a,
                params: l
            } = s;
            try {
                const p = `${r}_session_event_${l.event.name}`,
                    d = Lo.get(p);
                if (d && this.isRequestOutOfSync(d, a)) {
                    this.client.logger.info(`Discarding out of sync request - ${a}`);
                    return
                }
                this.isValidEmit(gr({
                    topic: r
                }, l)), this.client.events.emit("session_event", {
                    id: a,
                    topic: r,
                    params: l
                }), Lo.set(p, a)
            } catch (p) {
                await this.sendError(a, r, p), this.client.logger.error(p)
            }
        }, this.addSessionRequestToSessionRequestQueue = r => {
            this.sessionRequestQueue.queue.push(r)
        }, this.cleanupAfterResponse = r => {
            this.deletePendingSessionRequest(r.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(() => {
                this.sessionRequestQueue.state = _i.idle, this.processSessionRequestQueue()
            }, ye.toMiliseconds(this.requestQueueDelay))
        }, this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === _i.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const r = this.sessionRequestQueue.queue[0];
            if (!r) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = _i.active, this.client.events.emit("session_request", r)
            } catch (s) {
                this.client.logger.error(s)
            }
        }, this.onPairingCreated = r => {
            if (r.active) return;
            const s = this.client.proposal.getAll().find(a => a.pairingTopic === r.topic);
            s && this.onSessionProposeRequest(r.topic, Cn("wc_sessionPropose", {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer
            }, s.id))
        }, this.isValidConnect = async r => {
            if (!vr(r)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
                throw new Error(v)
            }
            const {
                pairingTopic: s,
                requiredNamespaces: a,
                optionalNamespaces: l,
                sessionProperties: p,
                relays: d
            } = r;
            if (or(s) || await this.isValidPairingTopic(s), !iE(d, !0)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `connect() relays: ${d}`);
                throw new Error(v)
            }!or(a) && Tn(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"), !or(l) && Tn(l) !== 0 && this.validateNamespaces(l, "optionalNamespaces"), or(p) || this.validateSessionProps(p, "sessionProperties")
        }, this.validateNamespaces = (r, s) => {
            const a = rE(r, "connect()", s);
            if (a) throw new Error(a.message)
        }, this.isValidApprove = async r => {
            if (!vr(r)) throw new Error(ue("MISSING_OR_INVALID", `approve() params: ${r}`).message);
            const {
                id: s,
                namespaces: a,
                relayProtocol: l,
                sessionProperties: p
            } = r;
            await this.isValidProposalId(s);
            const d = this.client.proposal.get(s),
                v = Mo(a, "approve()");
            if (v) throw new Error(v.message);
            const b = mf(d.requiredNamespaces, a, "approve()");
            if (b) throw new Error(b.message);
            if (!Vt(l, !0)) {
                const {
                    message: S
                } = ue("MISSING_OR_INVALID", `approve() relayProtocol: ${l}`);
                throw new Error(S)
            }
            or(p) || this.validateSessionProps(p, "sessionProperties")
        }, this.isValidReject = async r => {
            if (!vr(r)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `reject() params: ${r}`);
                throw new Error(l)
            }
            const {
                id: s,
                reason: a
            } = r;
            if (await this.isValidProposalId(s), !sE(a)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
                throw new Error(l)
            }
        }, this.isValidSessionSettleRequest = r => {
            if (!vr(r)) {
                const {
                    message: b
                } = ue("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
                throw new Error(b)
            }
            const {
                relay: s,
                controller: a,
                namespaces: l,
                expiry: p
            } = r;
            if (!Kd(s)) {
                const {
                    message: b
                } = ue("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(b)
            }
            const d = Jb(a, "onSessionSettleRequest()");
            if (d) throw new Error(d.message);
            const v = Mo(l, "onSessionSettleRequest()");
            if (v) throw new Error(v.message);
            if (Ti(p)) {
                const {
                    message: b
                } = ue("EXPIRED", "onSessionSettleRequest()");
                throw new Error(b)
            }
        }, this.isValidUpdate = async r => {
            if (!vr(r)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `update() params: ${r}`);
                throw new Error(v)
            }
            const {
                topic: s,
                namespaces: a
            } = r;
            await this.isValidSessionTopic(s);
            const l = this.client.session.get(s),
                p = Mo(a, "update()");
            if (p) throw new Error(p.message);
            const d = mf(l.requiredNamespaces, a, "update()");
            if (d) throw new Error(d.message)
        }, this.isValidExtend = async r => {
            if (!vr(r)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `extend() params: ${r}`);
                throw new Error(a)
            }
            const {
                topic: s
            } = r;
            await this.isValidSessionTopic(s)
        }, this.isValidRequest = async r => {
            if (!vr(r)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `request() params: ${r}`);
                throw new Error(v)
            }
            const {
                topic: s,
                request: a,
                chainId: l,
                expiry: p
            } = r;
            await this.isValidSessionTopic(s);
            const {
                namespaces: d
            } = this.client.session.get(s);
            if (!_f(d, l)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `request() chainId: ${l}`);
                throw new Error(v)
            }
            if (!oE(a)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
                throw new Error(v)
            }
            if (!uE(d, l, a.method)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `request() method: ${a.method}`);
                throw new Error(v)
            }
            if (p && !dE(p, Kc)) {
                const {
                    message: v
                } = ue("MISSING_OR_INVALID", `request() expiry: ${p}. Expiry must be a number (in seconds) between ${Kc.min} and ${Kc.max}`);
                throw new Error(v)
            }
        }, this.isValidRespond = async r => {
            if (!vr(r)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `respond() params: ${r}`);
                throw new Error(l)
            }
            const {
                topic: s,
                response: a
            } = r;
            if (await this.isValidSessionTopic(s), !aE(a)) {
                const {
                    message: l
                } = ue("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
                throw new Error(l)
            }
        }, this.isValidPing = async r => {
            if (!vr(r)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `ping() params: ${r}`);
                throw new Error(a)
            }
            const {
                topic: s
            } = r;
            await this.isValidSessionOrPairingTopic(s)
        }, this.isValidEmit = async r => {
            if (!vr(r)) {
                const {
                    message: d
                } = ue("MISSING_OR_INVALID", `emit() params: ${r}`);
                throw new Error(d)
            }
            const {
                topic: s,
                event: a,
                chainId: l
            } = r;
            await this.isValidSessionTopic(s);
            const {
                namespaces: p
            } = this.client.session.get(s);
            if (!_f(p, l)) {
                const {
                    message: d
                } = ue("MISSING_OR_INVALID", `emit() chainId: ${l}`);
                throw new Error(d)
            }
            if (!cE(a)) {
                const {
                    message: d
                } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                throw new Error(d)
            }
            if (!hE(p, l, a.name)) {
                const {
                    message: d
                } = ue("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                throw new Error(d)
            }
        }, this.isValidDisconnect = async r => {
            if (!vr(r)) {
                const {
                    message: a
                } = ue("MISSING_OR_INVALID", `disconnect() params: ${r}`);
                throw new Error(a)
            }
            const {
                topic: s
            } = r;
            await this.isValidSessionOrPairingTopic(s)
        }, this.getVerifyContext = async (r, s) => {
            const a = {
                verified: {
                    verifyUrl: s.verifyUrl || jo,
                    validation: "UNKNOWN",
                    origin: s.url || ""
                }
            };
            try {
                const l = await this.client.core.verify.resolve({
                    attestationId: r,
                    verifyUrl: s.verifyUrl
                });
                l && (a.verified.origin = l.origin, a.verified.isScam = l.isScam, a.verified.validation = l.origin === new URL(s.url).origin ? "VALID" : "INVALID")
            } catch (l) {
                this.client.logger.info(l)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a
        }, this.validateSessionProps = (r, s) => {
            Object.values(r).forEach(a => {
                if (!Vt(a, !1)) {
                    const {
                        message: l
                    } = ue("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
                    throw new Error(l)
                }
            })
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ue("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Xt.message, async t => {
            const {
                topic: r,
                message: s
            } = t;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
            const a = await this.client.core.crypto.decode(r, s);
            try {
                Ou(a) ? (this.client.core.history.set(r, a), this.onRelayEventRequest({
                    topic: r,
                    payload: a
                })) : ta(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({
                    topic: r,
                    payload: a
                }), this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({
                    topic: r,
                    payload: a
                })
            } catch (l) {
                this.client.logger.error(l)
            }
        })
    }
    registerExpirerEvents() {
        this.client.core.expirer.on($r.expired, async t => {
            const {
                topic: r,
                id: s
            } = Hd(t.target);
            if (s && this.client.pendingRequest.keys.includes(s)) return await this.deletePendingSessionRequest(s, ue("EXPIRED"), !0);
            r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", {
                topic: r
            })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", {
                id: s
            }))
        })
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(vs.create, t => this.onPairingCreated(t))
    }
    isValidPairingTopic(t) {
        if (!Vt(t, !1)) {
            const {
                message: r
            } = ue("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {
                message: r
            } = ue("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Ti(this.client.core.pairing.pairings.get(t).expiry)) {
            const {
                message: r
            } = ue("EXPIRED", `pairing topic: ${t}`);
            throw new Error(r)
        }
    }
    async isValidSessionTopic(t) {
        if (!Vt(t, !1)) {
            const {
                message: r
            } = ue("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.session.keys.includes(t)) {
            const {
                message: r
            } = ue("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Ti(this.client.session.get(t).expiry)) {
            await this.deleteSession(t);
            const {
                message: r
            } = ue("EXPIRED", `session topic: ${t}`);
            throw new Error(r)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
        else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
        else if (Vt(t, !1)) {
            const {
                message: r
            } = ue("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        } else {
            const {
                message: r
            } = ue("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
    }
    async isValidProposalId(t) {
        if (!nE(t)) {
            const {
                message: r
            } = ue("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(r)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {
                message: r
            } = ue("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Ti(this.client.proposal.get(t).expiry)) {
            await this.deleteProposal(t);
            const {
                message: r
            } = ue("EXPIRED", `proposal id: ${t}`);
            throw new Error(r)
        }
    }
}
class x5 extends ia {
    constructor(t, r) {
        super(t, r, p5, Nu), this.core = t, this.logger = r
    }
}
class O5 extends ia {
    constructor(t, r) {
        super(t, r, g5, Nu), this.core = t, this.logger = r
    }
}
class P5 extends ia {
    constructor(t, r) {
        super(t, r, y5, Nu, s => s.id), this.core = t, this.logger = r
    }
}
let A5 = class gp extends Fm {
    constructor(t) {
        super(t), this.protocol = lp, this.version = fp, this.name = zc.name, this.events = new Dr.EventEmitter, this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.removeAllListeners = s => this.events.removeAllListeners(s), this.connect = async s => {
            try {
                return await this.engine.connect(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.pair = async s => {
            try {
                return await this.engine.pair(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.approve = async s => {
            try {
                return await this.engine.approve(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.reject = async s => {
            try {
                return await this.engine.reject(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.update = async s => {
            try {
                return await this.engine.update(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.extend = async s => {
            try {
                return await this.engine.extend(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.request = async s => {
            try {
                return await this.engine.request(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.respond = async s => {
            try {
                return await this.engine.respond(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.ping = async s => {
            try {
                return await this.engine.ping(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.emit = async s => {
            try {
                return await this.engine.emit(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.disconnect = async s => {
            try {
                return await this.engine.disconnect(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.find = s => {
            try {
                return this.engine.find(s)
            } catch (a) {
                throw this.logger.error(a.message), a
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.name = (t == null ? void 0 : t.name) || zc.name, this.metadata = (t == null ? void 0 : t.metadata) || bb();
        const r = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : Ze.pino(Ze.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || zc.logger
        }));
        this.core = (t == null ? void 0 : t.core) || new d5(t), this.logger = Ze.generateChildLogger(r, this.name), this.session = new O5(this.core, this.logger), this.proposal = new x5(this.core, this.logger), this.pendingRequest = new P5(this.core, this.logger), this.engine = new I5(this)
    }
    static async init(t) {
        const r = new gp(t);
        return await r.initialize(), r
    }
    get context() {
        return Ze.getLoggerContext(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
        }
    }
};
const N5 = {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    R5 = "POST",
    Qf = {
        headers: N5,
        method: R5
    },
    Xf = 10;
class sn {
    constructor(t, r = !1) {
        if (this.url = t, this.disableProviderPing = r, this.events = new Dr.EventEmitter, this.isAvailable = !1, this.registering = !1, !xf(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t, this.disableProviderPing = r
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t, r) {
        this.isAvailable || await this.register();
        try {
            const s = ms(t),
                l = await (await Tl(this.url, Object.assign(Object.assign({}, Qf), {
                    body: s
                }))).json();
            this.onPayload({
                data: l
            })
        } catch (s) {
            this.onError(t.id, s)
        }
    }
    async register(t = this.url) {
        if (!xf(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
                this.events.once("register_error", l => {
                    this.resetMaxListeners(), a(l)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u") return a(new Error("HTTP connection is missing or invalid"));
                    s()
                })
            })
        }
        this.url = t, this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const r = ms({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Tl(t, Object.assign(Object.assign({}, Qf), {
                    body: r
                }))
            }
            this.onOpen()
        } catch (r) {
            const s = this.parseError(r);
            throw this.events.emit("register_error", s), this.onClose(), s
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const r = typeof t.data == "string" ? lu(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const s = this.parseError(r),
            a = s.message || s.toString(),
            l = ea(t, a);
        this.events.emit("payload", l)
    }
    parseError(t, r = this.url) {
        return Vd(t, r, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Xf && this.events.setMaxListeners(Xf)
    }
}
const Zf = "error",
    T5 = "wss://relay.walletconnect.com",
    C5 = "wc",
    L5 = "universal_provider",
    ed = `${C5}@2:${L5}:`,
    U5 = "https://rpc.walletconnect.com/v1/",
    Fi = {
        DEFAULT_CHAIN_CHANGED: "default_chain_changed"
    };
var ps = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    au = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(n, t) {
    (function() {
        var r, s = "4.17.21",
            a = 200,
            l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            p = "Expected a function",
            d = "Invalid `variable` option passed into `_.template`",
            v = "__lodash_hash_undefined__",
            b = 500,
            S = "__lodash_placeholder__",
            A = 1,
            $ = 2,
            R = 4,
            H = 1,
            K = 2,
            B = 1,
            oe = 2,
            T = 4,
            D = 8,
            I = 16,
            P = 32,
            m = 64,
            u = 128,
            _ = 256,
            G = 512,
            V = 30,
            se = "...",
            ce = 800,
            ge = 16,
            C = 1,
            q = 2,
            le = 3,
            te = 1 / 0,
            W = 9007199254740991,
            ee = 17976931348623157e292,
            Y = 0 / 0,
            re = 4294967295,
            Oe = re - 1,
            ie = re >>> 1,
            we = [
                ["ary", u],
                ["bind", B],
                ["bindKey", oe],
                ["curry", D],
                ["curryRight", I],
                ["flip", G],
                ["partial", P],
                ["partialRight", m],
                ["rearg", _]
            ],
            he = "[object Arguments]",
            _e = "[object Array]",
            j = "[object AsyncFunction]",
            M = "[object Boolean]",
            N = "[object Date]",
            h = "[object DOMException]",
            x = "[object Error]",
            ne = "[object Function]",
            fe = "[object GeneratorFunction]",
            Ie = "[object Map]",
            ze = "[object Number]",
            ke = "[object Null]",
            De = "[object Object]",
            pt = "[object Promise]",
            gt = "[object Proxy]",
            je = "[object RegExp]",
            xe = "[object Set]",
            Le = "[object String]",
            Ue = "[object Symbol]",
            qe = "[object Undefined]",
            Ae = "[object WeakMap]",
            Fe = "[object WeakSet]",
            Se = "[object ArrayBuffer]",
            Ne = "[object DataView]",
            Ke = "[object Float32Array]",
            Pe = "[object Float64Array]",
            Ve = "[object Int8Array]",
            We = "[object Int16Array]",
            et = "[object Int32Array]",
            tt = "[object Uint8Array]",
            Je = "[object Uint8ClampedArray]",
            Zt = "[object Uint16Array]",
            ur = "[object Uint32Array]",
            Gr = /\b__p \+= '';/g,
            er = /\b(__p \+=) '' \+/g,
            ii = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            wi = /&(?:amp|lt|gt|quot|#39);/g,
            $i = /[&<>"']/g,
            bt = RegExp(wi.source),
            vt = RegExp($i.source),
            Et = /<%-([\s\S]+?)%>/g,
            St = /<%([\s\S]+?)%>/g,
            mt = /<%=([\s\S]+?)%>/g,
            yt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Ut = /^\w*$/,
            Ft = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            It = /[\\^$.*+?()[\]{}|]/g,
            $t = RegExp(It.source),
            xt = /^\s+/,
            At = /\s/,
            Ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ht = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Dt = /,? & /,
            Mt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            na = /[()=,{}\[\]\/\s]/,
            sa = /\\(\\)?/g,
            oa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Pr = /\w*$/,
            aa = /^[-+]0x[0-9a-f]+$/i,
            ca = /^0b[01]+$/i,
            ua = /^\[object .+?Constructor\]$/,
            ha = /^0o[0-7]+$/i,
            la = /^(?:0|[1-9]\d*)$/,
            ni = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            an = /($^)/,
            fa = /['\n\r\u2028\u2029\\]/g,
            cn = "\\ud800-\\udfff",
            da = "\\u0300-\\u036f",
            pa = "\\ufe20-\\ufe2f",
            un = "\\u20d0-\\u20ff",
            As = da + pa + un,
            Ns = "\\u2700-\\u27bf",
            jr = "a-z\\xdf-\\xf6\\xf8-\\xff",
            ga = "\\xac\\xb1\\xd7\\xf7",
            va = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            ya = "\\u2000-\\u206f",
            _a = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Rs = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Ts = "\\ufe0e\\ufe0f",
            Di = ga + va + ya + _a,
            Mn = "['’]",
            Mi = "[" + cn + "]",
            jn = "[" + Di + "]",
            ji = "[" + As + "]",
            Cs = "\\d+",
            ma = "[" + Ns + "]",
            Ls = "[" + jr + "]",
            Us = "[^" + cn + Di + Cs + Ns + jr + Rs + "]",
            hn = "\\ud83c[\\udffb-\\udfff]",
            wa = "(?:" + ji + "|" + hn + ")",
            Fs = "[^" + cn + "]",
            ln = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            bi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            _r = "[" + Rs + "]",
            $s = "\\u200d",
            Ds = "(?:" + Ls + "|" + Us + ")",
            Wr = "(?:" + _r + "|" + Us + ")",
            Ms = "(?:" + Mn + "(?:d|ll|m|re|s|t|ve))?",
            js = "(?:" + Mn + "(?:D|LL|M|RE|S|T|VE))?",
            qs = wa + "?",
            Hs = "[" + Ts + "]?",
            ba = "(?:" + $s + "(?:" + [Fs, ln, bi].join("|") + ")" + Hs + qs + ")*",
            si = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            zs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Ks = Hs + qs + ba,
            fn = "(?:" + [ma, ln, bi].join("|") + ")" + Ks,
            Ea = "(?:" + [Fs + ji + "?", ji, ln, bi, Mi].join("|") + ")",
            qn = RegExp(Mn, "g"),
            Sa = RegExp(ji, "g"),
            dn = RegExp(hn + "(?=" + hn + ")|" + Ea + Ks, "g"),
            Bs = RegExp([_r + "?" + Ls + "+" + Ms + "(?=" + [jn, _r, "$"].join("|") + ")", Wr + "+" + js + "(?=" + [jn, _r + Ds, "$"].join("|") + ")", _r + "?" + Ds + "+" + Ms, _r + "+" + js, zs, si, Cs, fn].join("|"), "g"),
            ks = RegExp("[" + $s + cn + As + Ts + "]"),
            qi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Vs = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            Ia = -1,
            ot = {};
        ot[Ke] = ot[Pe] = ot[Ve] = ot[We] = ot[et] = ot[tt] = ot[Je] = ot[Zt] = ot[ur] = !0, ot[he] = ot[_e] = ot[Se] = ot[M] = ot[Ne] = ot[N] = ot[x] = ot[ne] = ot[Ie] = ot[ze] = ot[De] = ot[je] = ot[xe] = ot[Le] = ot[Ae] = !1;
        var st = {};
        st[he] = st[_e] = st[Se] = st[Ne] = st[M] = st[N] = st[Ke] = st[Pe] = st[Ve] = st[We] = st[et] = st[Ie] = st[ze] = st[De] = st[je] = st[xe] = st[Le] = st[Ue] = st[tt] = st[Je] = st[Zt] = st[ur] = !0, st[x] = st[ne] = st[Ae] = !1;
        var w = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            L = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            X = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            de = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            at = parseFloat,
            Te = parseInt,
            ft = typeof ps == "object" && ps && ps.Object === Object && ps,
            jt = typeof self == "object" && self && self.Object === Object && self,
            Qe = ft || jt || Function("return this")(),
            ct = t && !t.nodeType && t,
            Nt = ct && !0 && n && !n.nodeType && n,
            hr = Nt && Nt.exports === ct,
            qt = hr && ft.process,
            dt = function() {
                try {
                    var U = Nt && Nt.require && Nt.require("util").types;
                    return U || qt && qt.binding && qt.binding("util")
                } catch {}
            }(),
            tr = dt && dt.isArrayBuffer,
            qr = dt && dt.isDate,
            Ar = dt && dt.isMap,
            Yr = dt && dt.isRegExp,
            Hn = dt && dt.isSet,
            Hi = dt && dt.isTypedArray;

        function Bt(U, k, z) {
            switch (z.length) {
                case 0:
                    return U.call(k);
                case 1:
                    return U.call(k, z[0]);
                case 2:
                    return U.call(k, z[0], z[1]);
                case 3:
                    return U.call(k, z[0], z[1], z[2])
            }
            return U.apply(k, z)
        }

        function _p(U, k, z, pe) {
            for (var Re = -1, rt = U == null ? 0 : U.length; ++Re < rt;) {
                var zt = U[Re];
                k(pe, zt, z(zt), U)
            }
            return pe
        }

        function Nr(U, k) {
            for (var z = -1, pe = U == null ? 0 : U.length; ++z < pe && k(U[z], z, U) !== !1;);
            return U
        }

        function mp(U, k) {
            for (var z = U == null ? 0 : U.length; z-- && k(U[z], z, U) !== !1;);
            return U
        }

        function Cu(U, k) {
            for (var z = -1, pe = U == null ? 0 : U.length; ++z < pe;)
                if (!k(U[z], z, U)) return !1;
            return !0
        }

        function Ei(U, k) {
            for (var z = -1, pe = U == null ? 0 : U.length, Re = 0, rt = []; ++z < pe;) {
                var zt = U[z];
                k(zt, z, U) && (rt[Re++] = zt)
            }
            return rt
        }

        function Gs(U, k) {
            var z = U == null ? 0 : U.length;
            return !!z && pn(U, k, 0) > -1
        }

        function xa(U, k, z) {
            for (var pe = -1, Re = U == null ? 0 : U.length; ++pe < Re;)
                if (z(k, U[pe])) return !0;
            return !1
        }

        function _t(U, k) {
            for (var z = -1, pe = U == null ? 0 : U.length, Re = Array(pe); ++z < pe;) Re[z] = k(U[z], z, U);
            return Re
        }

        function Si(U, k) {
            for (var z = -1, pe = k.length, Re = U.length; ++z < pe;) U[Re + z] = k[z];
            return U
        }

        function Oa(U, k, z, pe) {
            var Re = -1,
                rt = U == null ? 0 : U.length;
            for (pe && rt && (z = U[++Re]); ++Re < rt;) z = k(z, U[Re], Re, U);
            return z
        }

        function wp(U, k, z, pe) {
            var Re = U == null ? 0 : U.length;
            for (pe && Re && (z = U[--Re]); Re--;) z = k(z, U[Re], Re, U);
            return z
        }

        function Pa(U, k) {
            for (var z = -1, pe = U == null ? 0 : U.length; ++z < pe;)
                if (k(U[z], z, U)) return !0;
            return !1
        }
        var bp = Aa("length");

        function Ep(U) {
            return U.split("")
        }

        function Sp(U) {
            return U.match(Mt) || []
        }

        function Lu(U, k, z) {
            var pe;
            return z(U, function(Re, rt, zt) {
                if (k(Re, rt, zt)) return pe = rt, !1
            }), pe
        }

        function Ws(U, k, z, pe) {
            for (var Re = U.length, rt = z + (pe ? 1 : -1); pe ? rt-- : ++rt < Re;)
                if (k(U[rt], rt, U)) return rt;
            return -1
        }

        function pn(U, k, z) {
            return k === k ? Fp(U, k, z) : Ws(U, Uu, z)
        }

        function Ip(U, k, z, pe) {
            for (var Re = z - 1, rt = U.length; ++Re < rt;)
                if (pe(U[Re], k)) return Re;
            return -1
        }

        function Uu(U) {
            return U !== U
        }

        function Fu(U, k) {
            var z = U == null ? 0 : U.length;
            return z ? Ra(U, k) / z : Y
        }

        function Aa(U) {
            return function(k) {
                return k == null ? r : k[U]
            }
        }

        function Na(U) {
            return function(k) {
                return U == null ? r : U[k]
            }
        }

        function $u(U, k, z, pe, Re) {
            return Re(U, function(rt, zt, ut) {
                z = pe ? (pe = !1, rt) : k(z, rt, zt, ut)
            }), z
        }

        function xp(U, k) {
            var z = U.length;
            for (U.sort(k); z--;) U[z] = U[z].value;
            return U
        }

        function Ra(U, k) {
            for (var z, pe = -1, Re = U.length; ++pe < Re;) {
                var rt = k(U[pe]);
                rt !== r && (z = z === r ? rt : z + rt)
            }
            return z
        }

        function Ta(U, k) {
            for (var z = -1, pe = Array(U); ++z < U;) pe[z] = k(z);
            return pe
        }

        function Op(U, k) {
            return _t(k, function(z) {
                return [z, U[z]]
            })
        }

        function Du(U) {
            return U && U.slice(0, Hu(U) + 1).replace(xt, "")
        }

        function mr(U) {
            return function(k) {
                return U(k)
            }
        }

        function Ca(U, k) {
            return _t(k, function(z) {
                return U[z]
            })
        }

        function zn(U, k) {
            return U.has(k)
        }

        function Mu(U, k) {
            for (var z = -1, pe = U.length; ++z < pe && pn(k, U[z], 0) > -1;);
            return z
        }

        function ju(U, k) {
            for (var z = U.length; z-- && pn(k, U[z], 0) > -1;);
            return z
        }

        function Pp(U, k) {
            for (var z = U.length, pe = 0; z--;) U[z] === k && ++pe;
            return pe
        }
        var Ap = Na(w),
            Np = Na(L);

        function Rp(U) {
            return "\\" + de[U]
        }

        function Tp(U, k) {
            return U == null ? r : U[k]
        }

        function gn(U) {
            return ks.test(U)
        }

        function Cp(U) {
            return qi.test(U)
        }

        function Lp(U) {
            for (var k, z = []; !(k = U.next()).done;) z.push(k.value);
            return z
        }

        function La(U) {
            var k = -1,
                z = Array(U.size);
            return U.forEach(function(pe, Re) {
                z[++k] = [Re, pe]
            }), z
        }

        function qu(U, k) {
            return function(z) {
                return U(k(z))
            }
        }

        function Ii(U, k) {
            for (var z = -1, pe = U.length, Re = 0, rt = []; ++z < pe;) {
                var zt = U[z];
                (zt === k || zt === S) && (U[z] = S, rt[Re++] = z)
            }
            return rt
        }

        function Ys(U) {
            var k = -1,
                z = Array(U.size);
            return U.forEach(function(pe) {
                z[++k] = pe
            }), z
        }

        function Up(U) {
            var k = -1,
                z = Array(U.size);
            return U.forEach(function(pe) {
                z[++k] = [pe, pe]
            }), z
        }

        function Fp(U, k, z) {
            for (var pe = z - 1, Re = U.length; ++pe < Re;)
                if (U[pe] === k) return pe;
            return -1
        }

        function $p(U, k, z) {
            for (var pe = z + 1; pe--;)
                if (U[pe] === k) return pe;
            return pe
        }

        function vn(U) {
            return gn(U) ? Mp(U) : bp(U)
        }

        function Hr(U) {
            return gn(U) ? jp(U) : Ep(U)
        }

        function Hu(U) {
            for (var k = U.length; k-- && At.test(U.charAt(k)););
            return k
        }
        var Dp = Na(X);

        function Mp(U) {
            for (var k = dn.lastIndex = 0; dn.test(U);) ++k;
            return k
        }

        function jp(U) {
            return U.match(dn) || []
        }

        function qp(U) {
            return U.match(Bs) || []
        }
        var Hp = function U(k) {
                k = k == null ? Qe : yn.defaults(Qe.Object(), k, yn.pick(Qe, Vs));
                var z = k.Array,
                    pe = k.Date,
                    Re = k.Error,
                    rt = k.Function,
                    zt = k.Math,
                    ut = k.Object,
                    Ua = k.RegExp,
                    zp = k.String,
                    Rr = k.TypeError,
                    Js = z.prototype,
                    Kp = rt.prototype,
                    _n = ut.prototype,
                    Qs = k["__core-js_shared__"],
                    Xs = Kp.toString,
                    nt = _n.hasOwnProperty,
                    Bp = 0,
                    zu = function() {
                        var e = /[^.]+$/.exec(Qs && Qs.keys && Qs.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(),
                    Zs = _n.toString,
                    kp = Xs.call(ut),
                    Vp = Qe._,
                    Gp = Ua("^" + Xs.call(nt).replace(It, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    eo = hr ? k.Buffer : r,
                    xi = k.Symbol,
                    to = k.Uint8Array,
                    Ku = eo ? eo.allocUnsafe : r,
                    ro = qu(ut.getPrototypeOf, ut),
                    Bu = ut.create,
                    ku = _n.propertyIsEnumerable,
                    io = Js.splice,
                    Vu = xi ? xi.isConcatSpreadable : r,
                    Kn = xi ? xi.iterator : r,
                    zi = xi ? xi.toStringTag : r,
                    no = function() {
                        try {
                            var e = Gi(ut, "defineProperty");
                            return e({}, "", {}), e
                        } catch {}
                    }(),
                    Wp = k.clearTimeout !== Qe.clearTimeout && k.clearTimeout,
                    Yp = pe && pe.now !== Qe.Date.now && pe.now,
                    Jp = k.setTimeout !== Qe.setTimeout && k.setTimeout,
                    so = zt.ceil,
                    oo = zt.floor,
                    Fa = ut.getOwnPropertySymbols,
                    Qp = eo ? eo.isBuffer : r,
                    Gu = k.isFinite,
                    Xp = Js.join,
                    Zp = qu(ut.keys, ut),
                    Kt = zt.max,
                    Yt = zt.min,
                    eg = pe.now,
                    tg = k.parseInt,
                    Wu = zt.random,
                    rg = Js.reverse,
                    $a = Gi(k, "DataView"),
                    Bn = Gi(k, "Map"),
                    Da = Gi(k, "Promise"),
                    mn = Gi(k, "Set"),
                    kn = Gi(k, "WeakMap"),
                    Vn = Gi(ut, "create"),
                    ao = kn && new kn,
                    wn = {},
                    ig = Wi($a),
                    ng = Wi(Bn),
                    sg = Wi(Da),
                    og = Wi(mn),
                    ag = Wi(kn),
                    co = xi ? xi.prototype : r,
                    Gn = co ? co.valueOf : r,
                    Yu = co ? co.toString : r;

                function g(e) {
                    if (Pt(e) && !Ce(e) && !(e instanceof Ye)) {
                        if (e instanceof Tr) return e;
                        if (nt.call(e, "__wrapped__")) return Jh(e)
                    }
                    return new Tr(e)
                }
                var bn = function() {
                    function e() {}
                    return function(i) {
                        if (!wt(i)) return {};
                        if (Bu) return Bu(i);
                        e.prototype = i;
                        var o = new e;
                        return e.prototype = r, o
                    }
                }();

                function uo() {}

                function Tr(e, i) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r
                }
                g.templateSettings = {
                    escape: Et,
                    evaluate: St,
                    interpolate: mt,
                    variable: "",
                    imports: {
                        _: g
                    }
                }, g.prototype = uo.prototype, g.prototype.constructor = g, Tr.prototype = bn(uo.prototype), Tr.prototype.constructor = Tr;

                function Ye(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = re, this.__views__ = []
                }

                function cg() {
                    var e = new Ye(this.__wrapped__);
                    return e.__actions__ = lr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = lr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = lr(this.__views__), e
                }

                function ug() {
                    if (this.__filtered__) {
                        var e = new Ye(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else e = this.clone(), e.__dir__ *= -1;
                    return e
                }

                function hg() {
                    var e = this.__wrapped__.value(),
                        i = this.__dir__,
                        o = Ce(e),
                        c = i < 0,
                        f = o ? e.length : 0,
                        y = E0(0, f, this.__views__),
                        E = y.start,
                        O = y.end,
                        F = O - E,
                        J = c ? O : E - 1,
                        Q = this.__iteratees__,
                        Z = Q.length,
                        ae = 0,
                        ve = Yt(F, this.__takeCount__);
                    if (!o || !c && f == F && ve == F) return mh(e, this.__actions__);
                    var be = [];
                    e: for (; F-- && ae < ve;) {
                        J += i;
                        for (var He = -1, Ee = e[J]; ++He < Z;) {
                            var Ge = Q[He],
                                Xe = Ge.iteratee,
                                Er = Ge.type,
                                nr = Xe(Ee);
                            if (Er == q) Ee = nr;
                            else if (!nr) {
                                if (Er == C) continue e;
                                break e
                            }
                        }
                        be[ae++] = Ee
                    }
                    return be
                }
                Ye.prototype = bn(uo.prototype), Ye.prototype.constructor = Ye;

                function Ki(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var c = e[i];
                        this.set(c[0], c[1])
                    }
                }

                function lg() {
                    this.__data__ = Vn ? Vn(null) : {}, this.size = 0
                }

                function fg(e) {
                    var i = this.has(e) && delete this.__data__[e];
                    return this.size -= i ? 1 : 0, i
                }

                function dg(e) {
                    var i = this.__data__;
                    if (Vn) {
                        var o = i[e];
                        return o === v ? r : o
                    }
                    return nt.call(i, e) ? i[e] : r
                }

                function pg(e) {
                    var i = this.__data__;
                    return Vn ? i[e] !== r : nt.call(i, e)
                }

                function gg(e, i) {
                    var o = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, o[e] = Vn && i === r ? v : i, this
                }
                Ki.prototype.clear = lg, Ki.prototype.delete = fg, Ki.prototype.get = dg, Ki.prototype.has = pg, Ki.prototype.set = gg;

                function oi(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var c = e[i];
                        this.set(c[0], c[1])
                    }
                }

                function vg() {
                    this.__data__ = [], this.size = 0
                }

                function yg(e) {
                    var i = this.__data__,
                        o = ho(i, e);
                    if (o < 0) return !1;
                    var c = i.length - 1;
                    return o == c ? i.pop() : io.call(i, o, 1), --this.size, !0
                }

                function _g(e) {
                    var i = this.__data__,
                        o = ho(i, e);
                    return o < 0 ? r : i[o][1]
                }

                function mg(e) {
                    return ho(this.__data__, e) > -1
                }

                function wg(e, i) {
                    var o = this.__data__,
                        c = ho(o, e);
                    return c < 0 ? (++this.size, o.push([e, i])) : o[c][1] = i, this
                }
                oi.prototype.clear = vg, oi.prototype.delete = yg, oi.prototype.get = _g, oi.prototype.has = mg, oi.prototype.set = wg;

                function ai(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var c = e[i];
                        this.set(c[0], c[1])
                    }
                }

                function bg() {
                    this.size = 0, this.__data__ = {
                        hash: new Ki,
                        map: new(Bn || oi),
                        string: new Ki
                    }
                }

                function Eg(e) {
                    var i = So(this, e).delete(e);
                    return this.size -= i ? 1 : 0, i
                }

                function Sg(e) {
                    return So(this, e).get(e)
                }

                function Ig(e) {
                    return So(this, e).has(e)
                }

                function xg(e, i) {
                    var o = So(this, e),
                        c = o.size;
                    return o.set(e, i), this.size += o.size == c ? 0 : 1, this
                }
                ai.prototype.clear = bg, ai.prototype.delete = Eg, ai.prototype.get = Sg, ai.prototype.has = Ig, ai.prototype.set = xg;

                function Bi(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.__data__ = new ai; ++i < o;) this.add(e[i])
                }

                function Og(e) {
                    return this.__data__.set(e, v), this
                }

                function Pg(e) {
                    return this.__data__.has(e)
                }
                Bi.prototype.add = Bi.prototype.push = Og, Bi.prototype.has = Pg;

                function zr(e) {
                    var i = this.__data__ = new oi(e);
                    this.size = i.size
                }

                function Ag() {
                    this.__data__ = new oi, this.size = 0
                }

                function Ng(e) {
                    var i = this.__data__,
                        o = i.delete(e);
                    return this.size = i.size, o
                }

                function Rg(e) {
                    return this.__data__.get(e)
                }

                function Tg(e) {
                    return this.__data__.has(e)
                }

                function Cg(e, i) {
                    var o = this.__data__;
                    if (o instanceof oi) {
                        var c = o.__data__;
                        if (!Bn || c.length < a - 1) return c.push([e, i]), this.size = ++o.size, this;
                        o = this.__data__ = new ai(c)
                    }
                    return o.set(e, i), this.size = o.size, this
                }
                zr.prototype.clear = Ag, zr.prototype.delete = Ng, zr.prototype.get = Rg, zr.prototype.has = Tg, zr.prototype.set = Cg;

                function Ju(e, i) {
                    var o = Ce(e),
                        c = !o && Yi(e),
                        f = !o && !c && Ri(e),
                        y = !o && !c && !f && xn(e),
                        E = o || c || f || y,
                        O = E ? Ta(e.length, zp) : [],
                        F = O.length;
                    for (var J in e)(i || nt.call(e, J)) && !(E && (J == "length" || f && (J == "offset" || J == "parent") || y && (J == "buffer" || J == "byteLength" || J == "byteOffset") || li(J, F))) && O.push(J);
                    return O
                }

                function Qu(e) {
                    var i = e.length;
                    return i ? e[Wa(0, i - 1)] : r
                }

                function Lg(e, i) {
                    return Io(lr(e), ki(i, 0, e.length))
                }

                function Ug(e) {
                    return Io(lr(e))
                }

                function Ma(e, i, o) {
                    (o !== r && !Kr(e[i], o) || o === r && !(i in e)) && ci(e, i, o)
                }

                function Wn(e, i, o) {
                    var c = e[i];
                    (!(nt.call(e, i) && Kr(c, o)) || o === r && !(i in e)) && ci(e, i, o)
                }

                function ho(e, i) {
                    for (var o = e.length; o--;)
                        if (Kr(e[o][0], i)) return o;
                    return -1
                }

                function Fg(e, i, o, c) {
                    return Oi(e, function(f, y, E) {
                        i(c, f, o(f), E)
                    }), c
                }

                function Xu(e, i) {
                    return e && Qr(i, kt(i), e)
                }

                function $g(e, i) {
                    return e && Qr(i, dr(i), e)
                }

                function ci(e, i, o) {
                    i == "__proto__" && no ? no(e, i, {
                        configurable: !0,
                        enumerable: !0,
                        value: o,
                        writable: !0
                    }) : e[i] = o
                }

                function ja(e, i) {
                    for (var o = -1, c = i.length, f = z(c), y = e == null; ++o < c;) f[o] = y ? r : mc(e, i[o]);
                    return f
                }

                function ki(e, i, o) {
                    return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e
                }

                function Cr(e, i, o, c, f, y) {
                    var E, O = i & A,
                        F = i & $,
                        J = i & R;
                    if (o && (E = f ? o(e, c, f, y) : o(e)), E !== r) return E;
                    if (!wt(e)) return e;
                    var Q = Ce(e);
                    if (Q) {
                        if (E = I0(e), !O) return lr(e, E)
                    } else {
                        var Z = Jt(e),
                            ae = Z == ne || Z == fe;
                        if (Ri(e)) return Eh(e, O);
                        if (Z == De || Z == he || ae && !f) {
                            if (E = F || ae ? {} : Hh(e), !O) return F ? d0(e, $g(E, e)) : f0(e, Xu(E, e))
                        } else {
                            if (!st[Z]) return f ? e : {};
                            E = x0(e, Z, O)
                        }
                    }
                    y || (y = new zr);
                    var ve = y.get(e);
                    if (ve) return ve;
                    y.set(e, E), vl(e) ? e.forEach(function(Ee) {
                        E.add(Cr(Ee, i, o, Ee, e, y))
                    }) : pl(e) && e.forEach(function(Ee, Ge) {
                        E.set(Ge, Cr(Ee, i, o, Ge, e, y))
                    });
                    var be = J ? F ? sc : nc : F ? dr : kt,
                        He = Q ? r : be(e);
                    return Nr(He || e, function(Ee, Ge) {
                        He && (Ge = Ee, Ee = e[Ge]), Wn(E, Ge, Cr(Ee, i, o, Ge, e, y))
                    }), E
                }

                function Dg(e) {
                    var i = kt(e);
                    return function(o) {
                        return Zu(o, e, i)
                    }
                }

                function Zu(e, i, o) {
                    var c = o.length;
                    if (e == null) return !c;
                    for (e = ut(e); c--;) {
                        var f = o[c],
                            y = i[f],
                            E = e[f];
                        if (E === r && !(f in e) || !y(E)) return !1
                    }
                    return !0
                }

                function eh(e, i, o) {
                    if (typeof e != "function") throw new Rr(p);
                    return ts(function() {
                        e.apply(r, o)
                    }, i)
                }

                function Yn(e, i, o, c) {
                    var f = -1,
                        y = Gs,
                        E = !0,
                        O = e.length,
                        F = [],
                        J = i.length;
                    if (!O) return F;
                    o && (i = _t(i, mr(o))), c ? (y = xa, E = !1) : i.length >= a && (y = zn, E = !1, i = new Bi(i));
                    e: for (; ++f < O;) {
                        var Q = e[f],
                            Z = o == null ? Q : o(Q);
                        if (Q = c || Q !== 0 ? Q : 0, E && Z === Z) {
                            for (var ae = J; ae--;)
                                if (i[ae] === Z) continue e;
                            F.push(Q)
                        } else y(i, Z, c) || F.push(Q)
                    }
                    return F
                }
                var Oi = Ph(Jr),
                    th = Ph(Ha, !0);

                function Mg(e, i) {
                    var o = !0;
                    return Oi(e, function(c, f, y) {
                        return o = !!i(c, f, y), o
                    }), o
                }

                function lo(e, i, o) {
                    for (var c = -1, f = e.length; ++c < f;) {
                        var y = e[c],
                            E = i(y);
                        if (E != null && (O === r ? E === E && !br(E) : o(E, O))) var O = E,
                            F = y
                    }
                    return F
                }

                function jg(e, i, o, c) {
                    var f = e.length;
                    for (o = Me(o), o < 0 && (o = -o > f ? 0 : f + o), c = c === r || c > f ? f : Me(c), c < 0 && (c += f), c = o > c ? 0 : _l(c); o < c;) e[o++] = i;
                    return e
                }

                function rh(e, i) {
                    var o = [];
                    return Oi(e, function(c, f, y) {
                        i(c, f, y) && o.push(c)
                    }), o
                }

                function Gt(e, i, o, c, f) {
                    var y = -1,
                        E = e.length;
                    for (o || (o = P0), f || (f = []); ++y < E;) {
                        var O = e[y];
                        i > 0 && o(O) ? i > 1 ? Gt(O, i - 1, o, c, f) : Si(f, O) : c || (f[f.length] = O)
                    }
                    return f
                }
                var qa = Ah(),
                    ih = Ah(!0);

                function Jr(e, i) {
                    return e && qa(e, i, kt)
                }

                function Ha(e, i) {
                    return e && ih(e, i, kt)
                }

                function fo(e, i) {
                    return Ei(i, function(o) {
                        return fi(e[o])
                    })
                }

                function Vi(e, i) {
                    i = Ai(i, e);
                    for (var o = 0, c = i.length; e != null && o < c;) e = e[Xr(i[o++])];
                    return o && o == c ? e : r
                }

                function nh(e, i, o) {
                    var c = i(e);
                    return Ce(e) ? c : Si(c, o(e))
                }

                function rr(e) {
                    return e == null ? e === r ? qe : ke : zi && zi in ut(e) ? b0(e) : U0(e)
                }

                function za(e, i) {
                    return e > i
                }

                function qg(e, i) {
                    return e != null && nt.call(e, i)
                }

                function Hg(e, i) {
                    return e != null && i in ut(e)
                }

                function zg(e, i, o) {
                    return e >= Yt(i, o) && e < Kt(i, o)
                }

                function Ka(e, i, o) {
                    for (var c = o ? xa : Gs, f = e[0].length, y = e.length, E = y, O = z(y), F = 1 / 0, J = []; E--;) {
                        var Q = e[E];
                        E && i && (Q = _t(Q, mr(i))), F = Yt(Q.length, F), O[E] = !o && (i || f >= 120 && Q.length >= 120) ? new Bi(E && Q) : r
                    }
                    Q = e[0];
                    var Z = -1,
                        ae = O[0];
                    e: for (; ++Z < f && J.length < F;) {
                        var ve = Q[Z],
                            be = i ? i(ve) : ve;
                        if (ve = o || ve !== 0 ? ve : 0, !(ae ? zn(ae, be) : c(J, be, o))) {
                            for (E = y; --E;) {
                                var He = O[E];
                                if (!(He ? zn(He, be) : c(e[E], be, o))) continue e
                            }
                            ae && ae.push(be), J.push(ve)
                        }
                    }
                    return J
                }

                function Kg(e, i, o, c) {
                    return Jr(e, function(f, y, E) {
                        i(c, o(f), y, E)
                    }), c
                }

                function Jn(e, i, o) {
                    i = Ai(i, e), e = kh(e, i);
                    var c = e == null ? e : e[Xr(Ur(i))];
                    return c == null ? r : Bt(c, e, o)
                }

                function sh(e) {
                    return Pt(e) && rr(e) == he
                }

                function Bg(e) {
                    return Pt(e) && rr(e) == Se
                }

                function kg(e) {
                    return Pt(e) && rr(e) == N
                }

                function Qn(e, i, o, c, f) {
                    return e === i ? !0 : e == null || i == null || !Pt(e) && !Pt(i) ? e !== e && i !== i : Vg(e, i, o, c, Qn, f)
                }

                function Vg(e, i, o, c, f, y) {
                    var E = Ce(e),
                        O = Ce(i),
                        F = E ? _e : Jt(e),
                        J = O ? _e : Jt(i);
                    F = F == he ? De : F, J = J == he ? De : J;
                    var Q = F == De,
                        Z = J == De,
                        ae = F == J;
                    if (ae && Ri(e)) {
                        if (!Ri(i)) return !1;
                        E = !0, Q = !1
                    }
                    if (ae && !Q) return y || (y = new zr), E || xn(e) ? Mh(e, i, o, c, f, y) : m0(e, i, F, o, c, f, y);
                    if (!(o & H)) {
                        var ve = Q && nt.call(e, "__wrapped__"),
                            be = Z && nt.call(i, "__wrapped__");
                        if (ve || be) {
                            var He = ve ? e.value() : e,
                                Ee = be ? i.value() : i;
                            return y || (y = new zr), f(He, Ee, o, c, y)
                        }
                    }
                    return ae ? (y || (y = new zr), w0(e, i, o, c, f, y)) : !1
                }

                function Gg(e) {
                    return Pt(e) && Jt(e) == Ie
                }

                function Ba(e, i, o, c) {
                    var f = o.length,
                        y = f,
                        E = !c;
                    if (e == null) return !y;
                    for (e = ut(e); f--;) {
                        var O = o[f];
                        if (E && O[2] ? O[1] !== e[O[0]] : !(O[0] in e)) return !1
                    }
                    for (; ++f < y;) {
                        O = o[f];
                        var F = O[0],
                            J = e[F],
                            Q = O[1];
                        if (E && O[2]) {
                            if (J === r && !(F in e)) return !1
                        } else {
                            var Z = new zr;
                            if (c) var ae = c(J, Q, F, e, i, Z);
                            if (!(ae === r ? Qn(Q, J, H | K, c, Z) : ae)) return !1
                        }
                    }
                    return !0
                }

                function oh(e) {
                    if (!wt(e) || N0(e)) return !1;
                    var i = fi(e) ? Gp : ua;
                    return i.test(Wi(e))
                }

                function Wg(e) {
                    return Pt(e) && rr(e) == je
                }

                function Yg(e) {
                    return Pt(e) && Jt(e) == xe
                }

                function Jg(e) {
                    return Pt(e) && Ro(e.length) && !!ot[rr(e)]
                }

                function ah(e) {
                    return typeof e == "function" ? e : e == null ? pr : typeof e == "object" ? Ce(e) ? hh(e[0], e[1]) : uh(e) : Nl(e)
                }

                function ka(e) {
                    if (!es(e)) return Zp(e);
                    var i = [];
                    for (var o in ut(e)) nt.call(e, o) && o != "constructor" && i.push(o);
                    return i
                }

                function Qg(e) {
                    if (!wt(e)) return L0(e);
                    var i = es(e),
                        o = [];
                    for (var c in e) c == "constructor" && (i || !nt.call(e, c)) || o.push(c);
                    return o
                }

                function Va(e, i) {
                    return e < i
                }

                function ch(e, i) {
                    var o = -1,
                        c = fr(e) ? z(e.length) : [];
                    return Oi(e, function(f, y, E) {
                        c[++o] = i(f, y, E)
                    }), c
                }

                function uh(e) {
                    var i = ac(e);
                    return i.length == 1 && i[0][2] ? Kh(i[0][0], i[0][1]) : function(o) {
                        return o === e || Ba(o, e, i)
                    }
                }

                function hh(e, i) {
                    return uc(e) && zh(i) ? Kh(Xr(e), i) : function(o) {
                        var c = mc(o, e);
                        return c === r && c === i ? wc(o, e) : Qn(i, c, H | K)
                    }
                }

                function po(e, i, o, c, f) {
                    e !== i && qa(i, function(y, E) {
                        if (f || (f = new zr), wt(y)) Xg(e, i, E, o, po, c, f);
                        else {
                            var O = c ? c(lc(e, E), y, E + "", e, i, f) : r;
                            O === r && (O = y), Ma(e, E, O)
                        }
                    }, dr)
                }

                function Xg(e, i, o, c, f, y, E) {
                    var O = lc(e, o),
                        F = lc(i, o),
                        J = E.get(F);
                    if (J) {
                        Ma(e, o, J);
                        return
                    }
                    var Q = y ? y(O, F, o + "", e, i, E) : r,
                        Z = Q === r;
                    if (Z) {
                        var ae = Ce(F),
                            ve = !ae && Ri(F),
                            be = !ae && !ve && xn(F);
                        Q = F, ae || ve || be ? Ce(O) ? Q = O : Rt(O) ? Q = lr(O) : ve ? (Z = !1, Q = Eh(F, !0)) : be ? (Z = !1, Q = Sh(F, !0)) : Q = [] : rs(F) || Yi(F) ? (Q = O, Yi(O) ? Q = ml(O) : (!wt(O) || fi(O)) && (Q = Hh(F))) : Z = !1
                    }
                    Z && (E.set(F, Q), f(Q, F, c, y, E), E.delete(F)), Ma(e, o, Q)
                }

                function lh(e, i) {
                    var o = e.length;
                    if (o) return i += i < 0 ? o : 0, li(i, o) ? e[i] : r
                }

                function fh(e, i, o) {
                    i.length ? i = _t(i, function(y) {
                        return Ce(y) ? function(E) {
                            return Vi(E, y.length === 1 ? y[0] : y)
                        } : y
                    }) : i = [pr];
                    var c = -1;
                    i = _t(i, mr(me()));
                    var f = ch(e, function(y, E, O) {
                        var F = _t(i, function(J) {
                            return J(y)
                        });
                        return {
                            criteria: F,
                            index: ++c,
                            value: y
                        }
                    });
                    return xp(f, function(y, E) {
                        return l0(y, E, o)
                    })
                }

                function Zg(e, i) {
                    return dh(e, i, function(o, c) {
                        return wc(e, c)
                    })
                }

                function dh(e, i, o) {
                    for (var c = -1, f = i.length, y = {}; ++c < f;) {
                        var E = i[c],
                            O = Vi(e, E);
                        o(O, E) && Xn(y, Ai(E, e), O)
                    }
                    return y
                }

                function e0(e) {
                    return function(i) {
                        return Vi(i, e)
                    }
                }

                function Ga(e, i, o, c) {
                    var f = c ? Ip : pn,
                        y = -1,
                        E = i.length,
                        O = e;
                    for (e === i && (i = lr(i)), o && (O = _t(e, mr(o))); ++y < E;)
                        for (var F = 0, J = i[y], Q = o ? o(J) : J;
                            (F = f(O, Q, F, c)) > -1;) O !== e && io.call(O, F, 1), io.call(e, F, 1);
                    return e
                }

                function ph(e, i) {
                    for (var o = e ? i.length : 0, c = o - 1; o--;) {
                        var f = i[o];
                        if (o == c || f !== y) {
                            var y = f;
                            li(f) ? io.call(e, f, 1) : Qa(e, f)
                        }
                    }
                    return e
                }

                function Wa(e, i) {
                    return e + oo(Wu() * (i - e + 1))
                }

                function t0(e, i, o, c) {
                    for (var f = -1, y = Kt(so((i - e) / (o || 1)), 0), E = z(y); y--;) E[c ? y : ++f] = e, e += o;
                    return E
                }

                function Ya(e, i) {
                    var o = "";
                    if (!e || i < 1 || i > W) return o;
                    do i % 2 && (o += e), i = oo(i / 2), i && (e += e); while (i);
                    return o
                }

                function Be(e, i) {
                    return fc(Bh(e, i, pr), e + "")
                }

                function r0(e) {
                    return Qu(On(e))
                }

                function i0(e, i) {
                    var o = On(e);
                    return Io(o, ki(i, 0, o.length))
                }

                function Xn(e, i, o, c) {
                    if (!wt(e)) return e;
                    i = Ai(i, e);
                    for (var f = -1, y = i.length, E = y - 1, O = e; O != null && ++f < y;) {
                        var F = Xr(i[f]),
                            J = o;
                        if (F === "__proto__" || F === "constructor" || F === "prototype") return e;
                        if (f != E) {
                            var Q = O[F];
                            J = c ? c(Q, F, O) : r, J === r && (J = wt(Q) ? Q : li(i[f + 1]) ? [] : {})
                        }
                        Wn(O, F, J), O = O[F]
                    }
                    return e
                }
                var gh = ao ? function(e, i) {
                        return ao.set(e, i), e
                    } : pr,
                    n0 = no ? function(e, i) {
                        return no(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Ec(i),
                            writable: !0
                        })
                    } : pr;

                function s0(e) {
                    return Io(On(e))
                }

                function Lr(e, i, o) {
                    var c = -1,
                        f = e.length;
                    i < 0 && (i = -i > f ? 0 : f + i), o = o > f ? f : o, o < 0 && (o += f), f = i > o ? 0 : o - i >>> 0, i >>>= 0;
                    for (var y = z(f); ++c < f;) y[c] = e[c + i];
                    return y
                }

                function o0(e, i) {
                    var o;
                    return Oi(e, function(c, f, y) {
                        return o = i(c, f, y), !o
                    }), !!o
                }

                function go(e, i, o) {
                    var c = 0,
                        f = e == null ? c : e.length;
                    if (typeof i == "number" && i === i && f <= ie) {
                        for (; c < f;) {
                            var y = c + f >>> 1,
                                E = e[y];
                            E !== null && !br(E) && (o ? E <= i : E < i) ? c = y + 1 : f = y
                        }
                        return f
                    }
                    return Ja(e, i, pr, o)
                }

                function Ja(e, i, o, c) {
                    var f = 0,
                        y = e == null ? 0 : e.length;
                    if (y === 0) return 0;
                    i = o(i);
                    for (var E = i !== i, O = i === null, F = br(i), J = i === r; f < y;) {
                        var Q = oo((f + y) / 2),
                            Z = o(e[Q]),
                            ae = Z !== r,
                            ve = Z === null,
                            be = Z === Z,
                            He = br(Z);
                        if (E) var Ee = c || be;
                        else J ? Ee = be && (c || ae) : O ? Ee = be && ae && (c || !ve) : F ? Ee = be && ae && !ve && (c || !He) : ve || He ? Ee = !1 : Ee = c ? Z <= i : Z < i;
                        Ee ? f = Q + 1 : y = Q
                    }
                    return Yt(y, Oe)
                }

                function vh(e, i) {
                    for (var o = -1, c = e.length, f = 0, y = []; ++o < c;) {
                        var E = e[o],
                            O = i ? i(E) : E;
                        if (!o || !Kr(O, F)) {
                            var F = O;
                            y[f++] = E === 0 ? 0 : E
                        }
                    }
                    return y
                }

                function yh(e) {
                    return typeof e == "number" ? e : br(e) ? Y : +e
                }

                function wr(e) {
                    if (typeof e == "string") return e;
                    if (Ce(e)) return _t(e, wr) + "";
                    if (br(e)) return Yu ? Yu.call(e) : "";
                    var i = e + "";
                    return i == "0" && 1 / e == -te ? "-0" : i
                }

                function Pi(e, i, o) {
                    var c = -1,
                        f = Gs,
                        y = e.length,
                        E = !0,
                        O = [],
                        F = O;
                    if (o) E = !1, f = xa;
                    else if (y >= a) {
                        var J = i ? null : y0(e);
                        if (J) return Ys(J);
                        E = !1, f = zn, F = new Bi
                    } else F = i ? [] : O;
                    e: for (; ++c < y;) {
                        var Q = e[c],
                            Z = i ? i(Q) : Q;
                        if (Q = o || Q !== 0 ? Q : 0, E && Z === Z) {
                            for (var ae = F.length; ae--;)
                                if (F[ae] === Z) continue e;
                            i && F.push(Z), O.push(Q)
                        } else f(F, Z, o) || (F !== O && F.push(Z), O.push(Q))
                    }
                    return O
                }

                function Qa(e, i) {
                    return i = Ai(i, e), e = kh(e, i), e == null || delete e[Xr(Ur(i))]
                }

                function _h(e, i, o, c) {
                    return Xn(e, i, o(Vi(e, i)), c)
                }

                function vo(e, i, o, c) {
                    for (var f = e.length, y = c ? f : -1;
                        (c ? y-- : ++y < f) && i(e[y], y, e););
                    return o ? Lr(e, c ? 0 : y, c ? y + 1 : f) : Lr(e, c ? y + 1 : 0, c ? f : y)
                }

                function mh(e, i) {
                    var o = e;
                    return o instanceof Ye && (o = o.value()), Oa(i, function(c, f) {
                        return f.func.apply(f.thisArg, Si([c], f.args))
                    }, o)
                }

                function Xa(e, i, o) {
                    var c = e.length;
                    if (c < 2) return c ? Pi(e[0]) : [];
                    for (var f = -1, y = z(c); ++f < c;)
                        for (var E = e[f], O = -1; ++O < c;) O != f && (y[f] = Yn(y[f] || E, e[O], i, o));
                    return Pi(Gt(y, 1), i, o)
                }

                function wh(e, i, o) {
                    for (var c = -1, f = e.length, y = i.length, E = {}; ++c < f;) {
                        var O = c < y ? i[c] : r;
                        o(E, e[c], O)
                    }
                    return E
                }

                function Za(e) {
                    return Rt(e) ? e : []
                }

                function ec(e) {
                    return typeof e == "function" ? e : pr
                }

                function Ai(e, i) {
                    return Ce(e) ? e : uc(e, i) ? [e] : Yh(it(e))
                }
                var a0 = Be;

                function Ni(e, i, o) {
                    var c = e.length;
                    return o = o === r ? c : o, !i && o >= c ? e : Lr(e, i, o)
                }
                var bh = Wp || function(e) {
                    return Qe.clearTimeout(e)
                };

                function Eh(e, i) {
                    if (i) return e.slice();
                    var o = e.length,
                        c = Ku ? Ku(o) : new e.constructor(o);
                    return e.copy(c), c
                }

                function tc(e) {
                    var i = new e.constructor(e.byteLength);
                    return new to(i).set(new to(e)), i
                }

                function c0(e, i) {
                    var o = i ? tc(e.buffer) : e.buffer;
                    return new e.constructor(o, e.byteOffset, e.byteLength)
                }

                function u0(e) {
                    var i = new e.constructor(e.source, Pr.exec(e));
                    return i.lastIndex = e.lastIndex, i
                }

                function h0(e) {
                    return Gn ? ut(Gn.call(e)) : {}
                }

                function Sh(e, i) {
                    var o = i ? tc(e.buffer) : e.buffer;
                    return new e.constructor(o, e.byteOffset, e.length)
                }

                function Ih(e, i) {
                    if (e !== i) {
                        var o = e !== r,
                            c = e === null,
                            f = e === e,
                            y = br(e),
                            E = i !== r,
                            O = i === null,
                            F = i === i,
                            J = br(i);
                        if (!O && !J && !y && e > i || y && E && F && !O && !J || c && E && F || !o && F || !f) return 1;
                        if (!c && !y && !J && e < i || J && o && f && !c && !y || O && o && f || !E && f || !F) return -1
                    }
                    return 0
                }

                function l0(e, i, o) {
                    for (var c = -1, f = e.criteria, y = i.criteria, E = f.length, O = o.length; ++c < E;) {
                        var F = Ih(f[c], y[c]);
                        if (F) {
                            if (c >= O) return F;
                            var J = o[c];
                            return F * (J == "desc" ? -1 : 1)
                        }
                    }
                    return e.index - i.index
                }

                function xh(e, i, o, c) {
                    for (var f = -1, y = e.length, E = o.length, O = -1, F = i.length, J = Kt(y - E, 0), Q = z(F + J), Z = !c; ++O < F;) Q[O] = i[O];
                    for (; ++f < E;)(Z || f < y) && (Q[o[f]] = e[f]);
                    for (; J--;) Q[O++] = e[f++];
                    return Q
                }

                function Oh(e, i, o, c) {
                    for (var f = -1, y = e.length, E = -1, O = o.length, F = -1, J = i.length, Q = Kt(y - O, 0), Z = z(Q + J), ae = !c; ++f < Q;) Z[f] = e[f];
                    for (var ve = f; ++F < J;) Z[ve + F] = i[F];
                    for (; ++E < O;)(ae || f < y) && (Z[ve + o[E]] = e[f++]);
                    return Z
                }

                function lr(e, i) {
                    var o = -1,
                        c = e.length;
                    for (i || (i = z(c)); ++o < c;) i[o] = e[o];
                    return i
                }

                function Qr(e, i, o, c) {
                    var f = !o;
                    o || (o = {});
                    for (var y = -1, E = i.length; ++y < E;) {
                        var O = i[y],
                            F = c ? c(o[O], e[O], O, o, e) : r;
                        F === r && (F = e[O]), f ? ci(o, O, F) : Wn(o, O, F)
                    }
                    return o
                }

                function f0(e, i) {
                    return Qr(e, cc(e), i)
                }

                function d0(e, i) {
                    return Qr(e, jh(e), i)
                }

                function yo(e, i) {
                    return function(o, c) {
                        var f = Ce(o) ? _p : Fg,
                            y = i ? i() : {};
                        return f(o, e, me(c, 2), y)
                    }
                }

                function En(e) {
                    return Be(function(i, o) {
                        var c = -1,
                            f = o.length,
                            y = f > 1 ? o[f - 1] : r,
                            E = f > 2 ? o[2] : r;
                        for (y = e.length > 3 && typeof y == "function" ? (f--, y) : r, E && ir(o[0], o[1], E) && (y = f < 3 ? r : y, f = 1), i = ut(i); ++c < f;) {
                            var O = o[c];
                            O && e(i, O, c, y)
                        }
                        return i
                    })
                }

                function Ph(e, i) {
                    return function(o, c) {
                        if (o == null) return o;
                        if (!fr(o)) return e(o, c);
                        for (var f = o.length, y = i ? f : -1, E = ut(o);
                            (i ? y-- : ++y < f) && c(E[y], y, E) !== !1;);
                        return o
                    }
                }

                function Ah(e) {
                    return function(i, o, c) {
                        for (var f = -1, y = ut(i), E = c(i), O = E.length; O--;) {
                            var F = E[e ? O : ++f];
                            if (o(y[F], F, y) === !1) break
                        }
                        return i
                    }
                }

                function p0(e, i, o) {
                    var c = i & B,
                        f = Zn(e);

                    function y() {
                        var E = this && this !== Qe && this instanceof y ? f : e;
                        return E.apply(c ? o : this, arguments)
                    }
                    return y
                }

                function Nh(e) {
                    return function(i) {
                        i = it(i);
                        var o = gn(i) ? Hr(i) : r,
                            c = o ? o[0] : i.charAt(0),
                            f = o ? Ni(o, 1).join("") : i.slice(1);
                        return c[e]() + f
                    }
                }

                function Sn(e) {
                    return function(i) {
                        return Oa(Pl(Ol(i).replace(qn, "")), e, "")
                    }
                }

                function Zn(e) {
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(i[0]);
                            case 2:
                                return new e(i[0], i[1]);
                            case 3:
                                return new e(i[0], i[1], i[2]);
                            case 4:
                                return new e(i[0], i[1], i[2], i[3]);
                            case 5:
                                return new e(i[0], i[1], i[2], i[3], i[4]);
                            case 6:
                                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
                            case 7:
                                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
                        }
                        var o = bn(e.prototype),
                            c = e.apply(o, i);
                        return wt(c) ? c : o
                    }
                }

                function g0(e, i, o) {
                    var c = Zn(e);

                    function f() {
                        for (var y = arguments.length, E = z(y), O = y, F = In(f); O--;) E[O] = arguments[O];
                        var J = y < 3 && E[0] !== F && E[y - 1] !== F ? [] : Ii(E, F);
                        if (y -= J.length, y < o) return Uh(e, i, _o, f.placeholder, r, E, J, r, r, o - y);
                        var Q = this && this !== Qe && this instanceof f ? c : e;
                        return Bt(Q, this, E)
                    }
                    return f
                }

                function Rh(e) {
                    return function(i, o, c) {
                        var f = ut(i);
                        if (!fr(i)) {
                            var y = me(o, 3);
                            i = kt(i), o = function(O) {
                                return y(f[O], O, f)
                            }
                        }
                        var E = e(i, o, c);
                        return E > -1 ? f[y ? i[E] : E] : r
                    }
                }

                function Th(e) {
                    return hi(function(i) {
                        var o = i.length,
                            c = o,
                            f = Tr.prototype.thru;
                        for (e && i.reverse(); c--;) {
                            var y = i[c];
                            if (typeof y != "function") throw new Rr(p);
                            if (f && !E && Eo(y) == "wrapper") var E = new Tr([], !0)
                        }
                        for (c = E ? c : o; ++c < o;) {
                            y = i[c];
                            var O = Eo(y),
                                F = O == "wrapper" ? oc(y) : r;
                            F && hc(F[0]) && F[1] == (u | D | P | _) && !F[4].length && F[9] == 1 ? E = E[Eo(F[0])].apply(E, F[3]) : E = y.length == 1 && hc(y) ? E[O]() : E.thru(y)
                        }
                        return function() {
                            var J = arguments,
                                Q = J[0];
                            if (E && J.length == 1 && Ce(Q)) return E.plant(Q).value();
                            for (var Z = 0, ae = o ? i[Z].apply(this, J) : Q; ++Z < o;) ae = i[Z].call(this, ae);
                            return ae
                        }
                    })
                }

                function _o(e, i, o, c, f, y, E, O, F, J) {
                    var Q = i & u,
                        Z = i & B,
                        ae = i & oe,
                        ve = i & (D | I),
                        be = i & G,
                        He = ae ? r : Zn(e);

                    function Ee() {
                        for (var Ge = arguments.length, Xe = z(Ge), Er = Ge; Er--;) Xe[Er] = arguments[Er];
                        if (ve) var nr = In(Ee),
                            Sr = Pp(Xe, nr);
                        if (c && (Xe = xh(Xe, c, f, ve)), y && (Xe = Oh(Xe, y, E, ve)), Ge -= Sr, ve && Ge < J) {
                            var Tt = Ii(Xe, nr);
                            return Uh(e, i, _o, Ee.placeholder, o, Xe, Tt, O, F, J - Ge)
                        }
                        var Br = Z ? o : this,
                            pi = ae ? Br[e] : e;
                        return Ge = Xe.length, O ? Xe = F0(Xe, O) : be && Ge > 1 && Xe.reverse(), Q && F < Ge && (Xe.length = F), this && this !== Qe && this instanceof Ee && (pi = He || Zn(pi)), pi.apply(Br, Xe)
                    }
                    return Ee
                }

                function Ch(e, i) {
                    return function(o, c) {
                        return Kg(o, e, i(c), {})
                    }
                }

                function mo(e, i) {
                    return function(o, c) {
                        var f;
                        if (o === r && c === r) return i;
                        if (o !== r && (f = o), c !== r) {
                            if (f === r) return c;
                            typeof o == "string" || typeof c == "string" ? (o = wr(o), c = wr(c)) : (o = yh(o), c = yh(c)), f = e(o, c)
                        }
                        return f
                    }
                }

                function rc(e) {
                    return hi(function(i) {
                        return i = _t(i, mr(me())), Be(function(o) {
                            var c = this;
                            return e(i, function(f) {
                                return Bt(f, c, o)
                            })
                        })
                    })
                }

                function wo(e, i) {
                    i = i === r ? " " : wr(i);
                    var o = i.length;
                    if (o < 2) return o ? Ya(i, e) : i;
                    var c = Ya(i, so(e / vn(i)));
                    return gn(i) ? Ni(Hr(c), 0, e).join("") : c.slice(0, e)
                }

                function v0(e, i, o, c) {
                    var f = i & B,
                        y = Zn(e);

                    function E() {
                        for (var O = -1, F = arguments.length, J = -1, Q = c.length, Z = z(Q + F), ae = this && this !== Qe && this instanceof E ? y : e; ++J < Q;) Z[J] = c[J];
                        for (; F--;) Z[J++] = arguments[++O];
                        return Bt(ae, f ? o : this, Z)
                    }
                    return E
                }

                function Lh(e) {
                    return function(i, o, c) {
                        return c && typeof c != "number" && ir(i, o, c) && (o = c = r), i = di(i), o === r ? (o = i, i = 0) : o = di(o), c = c === r ? i < o ? 1 : -1 : di(c), t0(i, o, c, e)
                    }
                }

                function bo(e) {
                    return function(i, o) {
                        return typeof i == "string" && typeof o == "string" || (i = Fr(i), o = Fr(o)), e(i, o)
                    }
                }

                function Uh(e, i, o, c, f, y, E, O, F, J) {
                    var Q = i & D,
                        Z = Q ? E : r,
                        ae = Q ? r : E,
                        ve = Q ? y : r,
                        be = Q ? r : y;
                    i |= Q ? P : m, i &= ~(Q ? m : P), i & T || (i &= ~(B | oe));
                    var He = [e, i, f, ve, Z, be, ae, O, F, J],
                        Ee = o.apply(r, He);
                    return hc(e) && Vh(Ee, He), Ee.placeholder = c, Gh(Ee, e, i)
                }

                function ic(e) {
                    var i = zt[e];
                    return function(o, c) {
                        if (o = Fr(o), c = c == null ? 0 : Yt(Me(c), 292), c && Gu(o)) {
                            var f = (it(o) + "e").split("e"),
                                y = i(f[0] + "e" + (+f[1] + c));
                            return f = (it(y) + "e").split("e"), +(f[0] + "e" + (+f[1] - c))
                        }
                        return i(o)
                    }
                }
                var y0 = mn && 1 / Ys(new mn([, -0]))[1] == te ? function(e) {
                    return new mn(e)
                } : xc;

                function Fh(e) {
                    return function(i) {
                        var o = Jt(i);
                        return o == Ie ? La(i) : o == xe ? Up(i) : Op(i, e(i))
                    }
                }

                function ui(e, i, o, c, f, y, E, O) {
                    var F = i & oe;
                    if (!F && typeof e != "function") throw new Rr(p);
                    var J = c ? c.length : 0;
                    if (J || (i &= ~(P | m), c = f = r), E = E === r ? E : Kt(Me(E), 0), O = O === r ? O : Me(O), J -= f ? f.length : 0, i & m) {
                        var Q = c,
                            Z = f;
                        c = f = r
                    }
                    var ae = F ? r : oc(e),
                        ve = [e, i, o, c, f, Q, Z, y, E, O];
                    if (ae && C0(ve, ae), e = ve[0], i = ve[1], o = ve[2], c = ve[3], f = ve[4], O = ve[9] = ve[9] === r ? F ? 0 : e.length : Kt(ve[9] - J, 0), !O && i & (D | I) && (i &= ~(D | I)), !i || i == B) var be = p0(e, i, o);
                    else i == D || i == I ? be = g0(e, i, O) : (i == P || i == (B | P)) && !f.length ? be = v0(e, i, o, c) : be = _o.apply(r, ve);
                    var He = ae ? gh : Vh;
                    return Gh(He(be, ve), e, i)
                }

                function $h(e, i, o, c) {
                    return e === r || Kr(e, _n[o]) && !nt.call(c, o) ? i : e
                }

                function Dh(e, i, o, c, f, y) {
                    return wt(e) && wt(i) && (y.set(i, e), po(e, i, r, Dh, y), y.delete(i)), e
                }

                function _0(e) {
                    return rs(e) ? r : e
                }

                function Mh(e, i, o, c, f, y) {
                    var E = o & H,
                        O = e.length,
                        F = i.length;
                    if (O != F && !(E && F > O)) return !1;
                    var J = y.get(e),
                        Q = y.get(i);
                    if (J && Q) return J == i && Q == e;
                    var Z = -1,
                        ae = !0,
                        ve = o & K ? new Bi : r;
                    for (y.set(e, i), y.set(i, e); ++Z < O;) {
                        var be = e[Z],
                            He = i[Z];
                        if (c) var Ee = E ? c(He, be, Z, i, e, y) : c(be, He, Z, e, i, y);
                        if (Ee !== r) {
                            if (Ee) continue;
                            ae = !1;
                            break
                        }
                        if (ve) {
                            if (!Pa(i, function(Ge, Xe) {
                                    if (!zn(ve, Xe) && (be === Ge || f(be, Ge, o, c, y))) return ve.push(Xe)
                                })) {
                                ae = !1;
                                break
                            }
                        } else if (!(be === He || f(be, He, o, c, y))) {
                            ae = !1;
                            break
                        }
                    }
                    return y.delete(e), y.delete(i), ae
                }

                function m0(e, i, o, c, f, y, E) {
                    switch (o) {
                        case Ne:
                            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return !1;
                            e = e.buffer, i = i.buffer;
                        case Se:
                            return !(e.byteLength != i.byteLength || !y(new to(e), new to(i)));
                        case M:
                        case N:
                        case ze:
                            return Kr(+e, +i);
                        case x:
                            return e.name == i.name && e.message == i.message;
                        case je:
                        case Le:
                            return e == i + "";
                        case Ie:
                            var O = La;
                        case xe:
                            var F = c & H;
                            if (O || (O = Ys), e.size != i.size && !F) return !1;
                            var J = E.get(e);
                            if (J) return J == i;
                            c |= K, E.set(e, i);
                            var Q = Mh(O(e), O(i), c, f, y, E);
                            return E.delete(e), Q;
                        case Ue:
                            if (Gn) return Gn.call(e) == Gn.call(i)
                    }
                    return !1
                }

                function w0(e, i, o, c, f, y) {
                    var E = o & H,
                        O = nc(e),
                        F = O.length,
                        J = nc(i),
                        Q = J.length;
                    if (F != Q && !E) return !1;
                    for (var Z = F; Z--;) {
                        var ae = O[Z];
                        if (!(E ? ae in i : nt.call(i, ae))) return !1
                    }
                    var ve = y.get(e),
                        be = y.get(i);
                    if (ve && be) return ve == i && be == e;
                    var He = !0;
                    y.set(e, i), y.set(i, e);
                    for (var Ee = E; ++Z < F;) {
                        ae = O[Z];
                        var Ge = e[ae],
                            Xe = i[ae];
                        if (c) var Er = E ? c(Xe, Ge, ae, i, e, y) : c(Ge, Xe, ae, e, i, y);
                        if (!(Er === r ? Ge === Xe || f(Ge, Xe, o, c, y) : Er)) {
                            He = !1;
                            break
                        }
                        Ee || (Ee = ae == "constructor")
                    }
                    if (He && !Ee) {
                        var nr = e.constructor,
                            Sr = i.constructor;
                        nr != Sr && "constructor" in e && "constructor" in i && !(typeof nr == "function" && nr instanceof nr && typeof Sr == "function" && Sr instanceof Sr) && (He = !1)
                    }
                    return y.delete(e), y.delete(i), He
                }

                function hi(e) {
                    return fc(Bh(e, r, Zh), e + "")
                }

                function nc(e) {
                    return nh(e, kt, cc)
                }

                function sc(e) {
                    return nh(e, dr, jh)
                }
                var oc = ao ? function(e) {
                    return ao.get(e)
                } : xc;

                function Eo(e) {
                    for (var i = e.name + "", o = wn[i], c = nt.call(wn, i) ? o.length : 0; c--;) {
                        var f = o[c],
                            y = f.func;
                        if (y == null || y == e) return f.name
                    }
                    return i
                }

                function In(e) {
                    var i = nt.call(g, "placeholder") ? g : e;
                    return i.placeholder
                }

                function me() {
                    var e = g.iteratee || Sc;
                    return e = e === Sc ? ah : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function So(e, i) {
                    var o = e.__data__;
                    return A0(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map
                }

                function ac(e) {
                    for (var i = kt(e), o = i.length; o--;) {
                        var c = i[o],
                            f = e[c];
                        i[o] = [c, f, zh(f)]
                    }
                    return i
                }

                function Gi(e, i) {
                    var o = Tp(e, i);
                    return oh(o) ? o : r
                }

                function b0(e) {
                    var i = nt.call(e, zi),
                        o = e[zi];
                    try {
                        e[zi] = r;
                        var c = !0
                    } catch {}
                    var f = Zs.call(e);
                    return c && (i ? e[zi] = o : delete e[zi]), f
                }
                var cc = Fa ? function(e) {
                        return e == null ? [] : (e = ut(e), Ei(Fa(e), function(i) {
                            return ku.call(e, i)
                        }))
                    } : Oc,
                    jh = Fa ? function(e) {
                        for (var i = []; e;) Si(i, cc(e)), e = ro(e);
                        return i
                    } : Oc,
                    Jt = rr;
                ($a && Jt(new $a(new ArrayBuffer(1))) != Ne || Bn && Jt(new Bn) != Ie || Da && Jt(Da.resolve()) != pt || mn && Jt(new mn) != xe || kn && Jt(new kn) != Ae) && (Jt = function(e) {
                    var i = rr(e),
                        o = i == De ? e.constructor : r,
                        c = o ? Wi(o) : "";
                    if (c) switch (c) {
                        case ig:
                            return Ne;
                        case ng:
                            return Ie;
                        case sg:
                            return pt;
                        case og:
                            return xe;
                        case ag:
                            return Ae
                    }
                    return i
                });

                function E0(e, i, o) {
                    for (var c = -1, f = o.length; ++c < f;) {
                        var y = o[c],
                            E = y.size;
                        switch (y.type) {
                            case "drop":
                                e += E;
                                break;
                            case "dropRight":
                                i -= E;
                                break;
                            case "take":
                                i = Yt(i, e + E);
                                break;
                            case "takeRight":
                                e = Kt(e, i - E);
                                break
                        }
                    }
                    return {
                        start: e,
                        end: i
                    }
                }

                function S0(e) {
                    var i = e.match(ht);
                    return i ? i[1].split(Dt) : []
                }

                function qh(e, i, o) {
                    i = Ai(i, e);
                    for (var c = -1, f = i.length, y = !1; ++c < f;) {
                        var E = Xr(i[c]);
                        if (!(y = e != null && o(e, E))) break;
                        e = e[E]
                    }
                    return y || ++c != f ? y : (f = e == null ? 0 : e.length, !!f && Ro(f) && li(E, f) && (Ce(e) || Yi(e)))
                }

                function I0(e) {
                    var i = e.length,
                        o = new e.constructor(i);
                    return i && typeof e[0] == "string" && nt.call(e, "index") && (o.index = e.index, o.input = e.input), o
                }

                function Hh(e) {
                    return typeof e.constructor == "function" && !es(e) ? bn(ro(e)) : {}
                }

                function x0(e, i, o) {
                    var c = e.constructor;
                    switch (i) {
                        case Se:
                            return tc(e);
                        case M:
                        case N:
                            return new c(+e);
                        case Ne:
                            return c0(e, o);
                        case Ke:
                        case Pe:
                        case Ve:
                        case We:
                        case et:
                        case tt:
                        case Je:
                        case Zt:
                        case ur:
                            return Sh(e, o);
                        case Ie:
                            return new c;
                        case ze:
                        case Le:
                            return new c(e);
                        case je:
                            return u0(e);
                        case xe:
                            return new c;
                        case Ue:
                            return h0(e)
                    }
                }

                function O0(e, i) {
                    var o = i.length;
                    if (!o) return e;
                    var c = o - 1;
                    return i[c] = (o > 1 ? "& " : "") + i[c], i = i.join(o > 2 ? ", " : " "), e.replace(Ot, `{
/* [wrapped with ` + i + `] */
`)
                }

                function P0(e) {
                    return Ce(e) || Yi(e) || !!(Vu && e && e[Vu])
                }

                function li(e, i) {
                    var o = typeof e;
                    return i = i ? ? W, !!i && (o == "number" || o != "symbol" && la.test(e)) && e > -1 && e % 1 == 0 && e < i
                }

                function ir(e, i, o) {
                    if (!wt(o)) return !1;
                    var c = typeof i;
                    return (c == "number" ? fr(o) && li(i, o.length) : c == "string" && i in o) ? Kr(o[i], e) : !1
                }

                function uc(e, i) {
                    if (Ce(e)) return !1;
                    var o = typeof e;
                    return o == "number" || o == "symbol" || o == "boolean" || e == null || br(e) ? !0 : Ut.test(e) || !yt.test(e) || i != null && e in ut(i)
                }

                function A0(e) {
                    var i = typeof e;
                    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null
                }

                function hc(e) {
                    var i = Eo(e),
                        o = g[i];
                    if (typeof o != "function" || !(i in Ye.prototype)) return !1;
                    if (e === o) return !0;
                    var c = oc(o);
                    return !!c && e === c[0]
                }

                function N0(e) {
                    return !!zu && zu in e
                }
                var R0 = Qs ? fi : Pc;

                function es(e) {
                    var i = e && e.constructor,
                        o = typeof i == "function" && i.prototype || _n;
                    return e === o
                }

                function zh(e) {
                    return e === e && !wt(e)
                }

                function Kh(e, i) {
                    return function(o) {
                        return o == null ? !1 : o[e] === i && (i !== r || e in ut(o))
                    }
                }

                function T0(e) {
                    var i = Ao(e, function(c) {
                            return o.size === b && o.clear(), c
                        }),
                        o = i.cache;
                    return i
                }

                function C0(e, i) {
                    var o = e[1],
                        c = i[1],
                        f = o | c,
                        y = f < (B | oe | u),
                        E = c == u && o == D || c == u && o == _ && e[7].length <= i[8] || c == (u | _) && i[7].length <= i[8] && o == D;
                    if (!(y || E)) return e;
                    c & B && (e[2] = i[2], f |= o & B ? 0 : T);
                    var O = i[3];
                    if (O) {
                        var F = e[3];
                        e[3] = F ? xh(F, O, i[4]) : O, e[4] = F ? Ii(e[3], S) : i[4]
                    }
                    return O = i[5], O && (F = e[5], e[5] = F ? Oh(F, O, i[6]) : O, e[6] = F ? Ii(e[5], S) : i[6]), O = i[7], O && (e[7] = O), c & u && (e[8] = e[8] == null ? i[8] : Yt(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = f, e
                }

                function L0(e) {
                    var i = [];
                    if (e != null)
                        for (var o in ut(e)) i.push(o);
                    return i
                }

                function U0(e) {
                    return Zs.call(e)
                }

                function Bh(e, i, o) {
                    return i = Kt(i === r ? e.length - 1 : i, 0),
                        function() {
                            for (var c = arguments, f = -1, y = Kt(c.length - i, 0), E = z(y); ++f < y;) E[f] = c[i + f];
                            f = -1;
                            for (var O = z(i + 1); ++f < i;) O[f] = c[f];
                            return O[i] = o(E), Bt(e, this, O)
                        }
                }

                function kh(e, i) {
                    return i.length < 2 ? e : Vi(e, Lr(i, 0, -1))
                }

                function F0(e, i) {
                    for (var o = e.length, c = Yt(i.length, o), f = lr(e); c--;) {
                        var y = i[c];
                        e[c] = li(y, o) ? f[y] : r
                    }
                    return e
                }

                function lc(e, i) {
                    if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__") return e[i]
                }
                var Vh = Wh(gh),
                    ts = Jp || function(e, i) {
                        return Qe.setTimeout(e, i)
                    },
                    fc = Wh(n0);

                function Gh(e, i, o) {
                    var c = i + "";
                    return fc(e, O0(c, $0(S0(c), o)))
                }

                function Wh(e) {
                    var i = 0,
                        o = 0;
                    return function() {
                        var c = eg(),
                            f = ge - (c - o);
                        if (o = c, f > 0) {
                            if (++i >= ce) return arguments[0]
                        } else i = 0;
                        return e.apply(r, arguments)
                    }
                }

                function Io(e, i) {
                    var o = -1,
                        c = e.length,
                        f = c - 1;
                    for (i = i === r ? c : i; ++o < i;) {
                        var y = Wa(o, f),
                            E = e[y];
                        e[y] = e[o], e[o] = E
                    }
                    return e.length = i, e
                }
                var Yh = T0(function(e) {
                    var i = [];
                    return e.charCodeAt(0) === 46 && i.push(""), e.replace(Ft, function(o, c, f, y) {
                        i.push(f ? y.replace(sa, "$1") : c || o)
                    }), i
                });

                function Xr(e) {
                    if (typeof e == "string" || br(e)) return e;
                    var i = e + "";
                    return i == "0" && 1 / e == -te ? "-0" : i
                }

                function Wi(e) {
                    if (e != null) {
                        try {
                            return Xs.call(e)
                        } catch {}
                        try {
                            return e + ""
                        } catch {}
                    }
                    return ""
                }

                function $0(e, i) {
                    return Nr(we, function(o) {
                        var c = "_." + o[0];
                        i & o[1] && !Gs(e, c) && e.push(c)
                    }), e.sort()
                }

                function Jh(e) {
                    if (e instanceof Ye) return e.clone();
                    var i = new Tr(e.__wrapped__, e.__chain__);
                    return i.__actions__ = lr(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i
                }

                function D0(e, i, o) {
                    (o ? ir(e, i, o) : i === r) ? i = 1: i = Kt(Me(i), 0);
                    var c = e == null ? 0 : e.length;
                    if (!c || i < 1) return [];
                    for (var f = 0, y = 0, E = z(so(c / i)); f < c;) E[y++] = Lr(e, f, f += i);
                    return E
                }

                function M0(e) {
                    for (var i = -1, o = e == null ? 0 : e.length, c = 0, f = []; ++i < o;) {
                        var y = e[i];
                        y && (f[c++] = y)
                    }
                    return f
                }

                function j0() {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var i = z(e - 1), o = arguments[0], c = e; c--;) i[c - 1] = arguments[c];
                    return Si(Ce(o) ? lr(o) : [o], Gt(i, 1))
                }
                var q0 = Be(function(e, i) {
                        return Rt(e) ? Yn(e, Gt(i, 1, Rt, !0)) : []
                    }),
                    H0 = Be(function(e, i) {
                        var o = Ur(i);
                        return Rt(o) && (o = r), Rt(e) ? Yn(e, Gt(i, 1, Rt, !0), me(o, 2)) : []
                    }),
                    z0 = Be(function(e, i) {
                        var o = Ur(i);
                        return Rt(o) && (o = r), Rt(e) ? Yn(e, Gt(i, 1, Rt, !0), r, o) : []
                    });

                function K0(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    return c ? (i = o || i === r ? 1 : Me(i), Lr(e, i < 0 ? 0 : i, c)) : []
                }

                function B0(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    return c ? (i = o || i === r ? 1 : Me(i), i = c - i, Lr(e, 0, i < 0 ? 0 : i)) : []
                }

                function k0(e, i) {
                    return e && e.length ? vo(e, me(i, 3), !0, !0) : []
                }

                function V0(e, i) {
                    return e && e.length ? vo(e, me(i, 3), !0) : []
                }

                function G0(e, i, o, c) {
                    var f = e == null ? 0 : e.length;
                    return f ? (o && typeof o != "number" && ir(e, i, o) && (o = 0, c = f), jg(e, i, o, c)) : []
                }

                function Qh(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    if (!c) return -1;
                    var f = o == null ? 0 : Me(o);
                    return f < 0 && (f = Kt(c + f, 0)), Ws(e, me(i, 3), f)
                }

                function Xh(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    if (!c) return -1;
                    var f = c - 1;
                    return o !== r && (f = Me(o), f = o < 0 ? Kt(c + f, 0) : Yt(f, c - 1)), Ws(e, me(i, 3), f, !0)
                }

                function Zh(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Gt(e, 1) : []
                }

                function W0(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Gt(e, te) : []
                }

                function Y0(e, i) {
                    var o = e == null ? 0 : e.length;
                    return o ? (i = i === r ? 1 : Me(i), Gt(e, i)) : []
                }

                function J0(e) {
                    for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o;) {
                        var f = e[i];
                        c[f[0]] = f[1]
                    }
                    return c
                }

                function el(e) {
                    return e && e.length ? e[0] : r
                }

                function Q0(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    if (!c) return -1;
                    var f = o == null ? 0 : Me(o);
                    return f < 0 && (f = Kt(c + f, 0)), pn(e, i, f)
                }

                function X0(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Lr(e, 0, -1) : []
                }
                var Z0 = Be(function(e) {
                        var i = _t(e, Za);
                        return i.length && i[0] === e[0] ? Ka(i) : []
                    }),
                    e1 = Be(function(e) {
                        var i = Ur(e),
                            o = _t(e, Za);
                        return i === Ur(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? Ka(o, me(i, 2)) : []
                    }),
                    t1 = Be(function(e) {
                        var i = Ur(e),
                            o = _t(e, Za);
                        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? Ka(o, r, i) : []
                    });

                function r1(e, i) {
                    return e == null ? "" : Xp.call(e, i)
                }

                function Ur(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? e[i - 1] : r
                }

                function i1(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    if (!c) return -1;
                    var f = c;
                    return o !== r && (f = Me(o), f = f < 0 ? Kt(c + f, 0) : Yt(f, c - 1)), i === i ? $p(e, i, f) : Ws(e, Uu, f, !0)
                }

                function n1(e, i) {
                    return e && e.length ? lh(e, Me(i)) : r
                }
                var s1 = Be(tl);

                function tl(e, i) {
                    return e && e.length && i && i.length ? Ga(e, i) : e
                }

                function o1(e, i, o) {
                    return e && e.length && i && i.length ? Ga(e, i, me(o, 2)) : e
                }

                function a1(e, i, o) {
                    return e && e.length && i && i.length ? Ga(e, i, r, o) : e
                }
                var c1 = hi(function(e, i) {
                    var o = e == null ? 0 : e.length,
                        c = ja(e, i);
                    return ph(e, _t(i, function(f) {
                        return li(f, o) ? +f : f
                    }).sort(Ih)), c
                });

                function u1(e, i) {
                    var o = [];
                    if (!(e && e.length)) return o;
                    var c = -1,
                        f = [],
                        y = e.length;
                    for (i = me(i, 3); ++c < y;) {
                        var E = e[c];
                        i(E, c, e) && (o.push(E), f.push(c))
                    }
                    return ph(e, f), o
                }

                function dc(e) {
                    return e == null ? e : rg.call(e)
                }

                function h1(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    return c ? (o && typeof o != "number" && ir(e, i, o) ? (i = 0, o = c) : (i = i == null ? 0 : Me(i), o = o === r ? c : Me(o)), Lr(e, i, o)) : []
                }

                function l1(e, i) {
                    return go(e, i)
                }

                function f1(e, i, o) {
                    return Ja(e, i, me(o, 2))
                }

                function d1(e, i) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var c = go(e, i);
                        if (c < o && Kr(e[c], i)) return c
                    }
                    return -1
                }

                function p1(e, i) {
                    return go(e, i, !0)
                }

                function g1(e, i, o) {
                    return Ja(e, i, me(o, 2), !0)
                }

                function v1(e, i) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var c = go(e, i, !0) - 1;
                        if (Kr(e[c], i)) return c
                    }
                    return -1
                }

                function y1(e) {
                    return e && e.length ? vh(e) : []
                }

                function _1(e, i) {
                    return e && e.length ? vh(e, me(i, 2)) : []
                }

                function m1(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Lr(e, 1, i) : []
                }

                function w1(e, i, o) {
                    return e && e.length ? (i = o || i === r ? 1 : Me(i), Lr(e, 0, i < 0 ? 0 : i)) : []
                }

                function b1(e, i, o) {
                    var c = e == null ? 0 : e.length;
                    return c ? (i = o || i === r ? 1 : Me(i), i = c - i, Lr(e, i < 0 ? 0 : i, c)) : []
                }

                function E1(e, i) {
                    return e && e.length ? vo(e, me(i, 3), !1, !0) : []
                }

                function S1(e, i) {
                    return e && e.length ? vo(e, me(i, 3)) : []
                }
                var I1 = Be(function(e) {
                        return Pi(Gt(e, 1, Rt, !0))
                    }),
                    x1 = Be(function(e) {
                        var i = Ur(e);
                        return Rt(i) && (i = r), Pi(Gt(e, 1, Rt, !0), me(i, 2))
                    }),
                    O1 = Be(function(e) {
                        var i = Ur(e);
                        return i = typeof i == "function" ? i : r, Pi(Gt(e, 1, Rt, !0), r, i)
                    });

                function P1(e) {
                    return e && e.length ? Pi(e) : []
                }

                function A1(e, i) {
                    return e && e.length ? Pi(e, me(i, 2)) : []
                }

                function N1(e, i) {
                    return i = typeof i == "function" ? i : r, e && e.length ? Pi(e, r, i) : []
                }

                function pc(e) {
                    if (!(e && e.length)) return [];
                    var i = 0;
                    return e = Ei(e, function(o) {
                        if (Rt(o)) return i = Kt(o.length, i), !0
                    }), Ta(i, function(o) {
                        return _t(e, Aa(o))
                    })
                }

                function rl(e, i) {
                    if (!(e && e.length)) return [];
                    var o = pc(e);
                    return i == null ? o : _t(o, function(c) {
                        return Bt(i, r, c)
                    })
                }
                var R1 = Be(function(e, i) {
                        return Rt(e) ? Yn(e, i) : []
                    }),
                    T1 = Be(function(e) {
                        return Xa(Ei(e, Rt))
                    }),
                    C1 = Be(function(e) {
                        var i = Ur(e);
                        return Rt(i) && (i = r), Xa(Ei(e, Rt), me(i, 2))
                    }),
                    L1 = Be(function(e) {
                        var i = Ur(e);
                        return i = typeof i == "function" ? i : r, Xa(Ei(e, Rt), r, i)
                    }),
                    U1 = Be(pc);

                function F1(e, i) {
                    return wh(e || [], i || [], Wn)
                }

                function $1(e, i) {
                    return wh(e || [], i || [], Xn)
                }
                var D1 = Be(function(e) {
                    var i = e.length,
                        o = i > 1 ? e[i - 1] : r;
                    return o = typeof o == "function" ? (e.pop(), o) : r, rl(e, o)
                });

                function il(e) {
                    var i = g(e);
                    return i.__chain__ = !0, i
                }

                function M1(e, i) {
                    return i(e), e
                }

                function xo(e, i) {
                    return i(e)
                }
                var j1 = hi(function(e) {
                    var i = e.length,
                        o = i ? e[0] : 0,
                        c = this.__wrapped__,
                        f = function(y) {
                            return ja(y, e)
                        };
                    return i > 1 || this.__actions__.length || !(c instanceof Ye) || !li(o) ? this.thru(f) : (c = c.slice(o, +o + (i ? 1 : 0)), c.__actions__.push({
                        func: xo,
                        args: [f],
                        thisArg: r
                    }), new Tr(c, this.__chain__).thru(function(y) {
                        return i && !y.length && y.push(r), y
                    }))
                });

                function q1() {
                    return il(this)
                }

                function H1() {
                    return new Tr(this.value(), this.__chain__)
                }

                function z1() {
                    this.__values__ === r && (this.__values__ = yl(this.value()));
                    var e = this.__index__ >= this.__values__.length,
                        i = e ? r : this.__values__[this.__index__++];
                    return {
                        done: e,
                        value: i
                    }
                }

                function K1() {
                    return this
                }

                function B1(e) {
                    for (var i, o = this; o instanceof uo;) {
                        var c = Jh(o);
                        c.__index__ = 0, c.__values__ = r, i ? f.__wrapped__ = c : i = c;
                        var f = c;
                        o = o.__wrapped__
                    }
                    return f.__wrapped__ = e, i
                }

                function k1() {
                    var e = this.__wrapped__;
                    if (e instanceof Ye) {
                        var i = e;
                        return this.__actions__.length && (i = new Ye(this)), i = i.reverse(), i.__actions__.push({
                            func: xo,
                            args: [dc],
                            thisArg: r
                        }), new Tr(i, this.__chain__)
                    }
                    return this.thru(dc)
                }

                function V1() {
                    return mh(this.__wrapped__, this.__actions__)
                }
                var G1 = yo(function(e, i, o) {
                    nt.call(e, o) ? ++e[o] : ci(e, o, 1)
                });

                function W1(e, i, o) {
                    var c = Ce(e) ? Cu : Mg;
                    return o && ir(e, i, o) && (i = r), c(e, me(i, 3))
                }

                function Y1(e, i) {
                    var o = Ce(e) ? Ei : rh;
                    return o(e, me(i, 3))
                }
                var J1 = Rh(Qh),
                    Q1 = Rh(Xh);

                function X1(e, i) {
                    return Gt(Oo(e, i), 1)
                }

                function Z1(e, i) {
                    return Gt(Oo(e, i), te)
                }

                function ev(e, i, o) {
                    return o = o === r ? 1 : Me(o), Gt(Oo(e, i), o)
                }

                function nl(e, i) {
                    var o = Ce(e) ? Nr : Oi;
                    return o(e, me(i, 3))
                }

                function sl(e, i) {
                    var o = Ce(e) ? mp : th;
                    return o(e, me(i, 3))
                }
                var tv = yo(function(e, i, o) {
                    nt.call(e, o) ? e[o].push(i) : ci(e, o, [i])
                });

                function rv(e, i, o, c) {
                    e = fr(e) ? e : On(e), o = o && !c ? Me(o) : 0;
                    var f = e.length;
                    return o < 0 && (o = Kt(f + o, 0)), To(e) ? o <= f && e.indexOf(i, o) > -1 : !!f && pn(e, i, o) > -1
                }
                var iv = Be(function(e, i, o) {
                        var c = -1,
                            f = typeof i == "function",
                            y = fr(e) ? z(e.length) : [];
                        return Oi(e, function(E) {
                            y[++c] = f ? Bt(i, E, o) : Jn(E, i, o)
                        }), y
                    }),
                    nv = yo(function(e, i, o) {
                        ci(e, o, i)
                    });

                function Oo(e, i) {
                    var o = Ce(e) ? _t : ch;
                    return o(e, me(i, 3))
                }

                function sv(e, i, o, c) {
                    return e == null ? [] : (Ce(i) || (i = i == null ? [] : [i]), o = c ? r : o, Ce(o) || (o = o == null ? [] : [o]), fh(e, i, o))
                }
                var ov = yo(function(e, i, o) {
                    e[o ? 0 : 1].push(i)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function av(e, i, o) {
                    var c = Ce(e) ? Oa : $u,
                        f = arguments.length < 3;
                    return c(e, me(i, 4), o, f, Oi)
                }

                function cv(e, i, o) {
                    var c = Ce(e) ? wp : $u,
                        f = arguments.length < 3;
                    return c(e, me(i, 4), o, f, th)
                }

                function uv(e, i) {
                    var o = Ce(e) ? Ei : rh;
                    return o(e, No(me(i, 3)))
                }

                function hv(e) {
                    var i = Ce(e) ? Qu : r0;
                    return i(e)
                }

                function lv(e, i, o) {
                    (o ? ir(e, i, o) : i === r) ? i = 1: i = Me(i);
                    var c = Ce(e) ? Lg : i0;
                    return c(e, i)
                }

                function fv(e) {
                    var i = Ce(e) ? Ug : s0;
                    return i(e)
                }

                function dv(e) {
                    if (e == null) return 0;
                    if (fr(e)) return To(e) ? vn(e) : e.length;
                    var i = Jt(e);
                    return i == Ie || i == xe ? e.size : ka(e).length
                }

                function pv(e, i, o) {
                    var c = Ce(e) ? Pa : o0;
                    return o && ir(e, i, o) && (i = r), c(e, me(i, 3))
                }
                var gv = Be(function(e, i) {
                        if (e == null) return [];
                        var o = i.length;
                        return o > 1 && ir(e, i[0], i[1]) ? i = [] : o > 2 && ir(i[0], i[1], i[2]) && (i = [i[0]]), fh(e, Gt(i, 1), [])
                    }),
                    Po = Yp || function() {
                        return Qe.Date.now()
                    };

                function vv(e, i) {
                    if (typeof i != "function") throw new Rr(p);
                    return e = Me(e),
                        function() {
                            if (--e < 1) return i.apply(this, arguments)
                        }
                }

                function ol(e, i, o) {
                    return i = o ? r : i, i = e && i == null ? e.length : i, ui(e, u, r, r, r, r, i)
                }

                function al(e, i) {
                    var o;
                    if (typeof i != "function") throw new Rr(p);
                    return e = Me(e),
                        function() {
                            return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o
                        }
                }
                var gc = Be(function(e, i, o) {
                        var c = B;
                        if (o.length) {
                            var f = Ii(o, In(gc));
                            c |= P
                        }
                        return ui(e, c, i, o, f)
                    }),
                    cl = Be(function(e, i, o) {
                        var c = B | oe;
                        if (o.length) {
                            var f = Ii(o, In(cl));
                            c |= P
                        }
                        return ui(i, c, e, o, f)
                    });

                function ul(e, i, o) {
                    i = o ? r : i;
                    var c = ui(e, D, r, r, r, r, r, i);
                    return c.placeholder = ul.placeholder, c
                }

                function hl(e, i, o) {
                    i = o ? r : i;
                    var c = ui(e, I, r, r, r, r, r, i);
                    return c.placeholder = hl.placeholder, c
                }

                function ll(e, i, o) {
                    var c, f, y, E, O, F, J = 0,
                        Q = !1,
                        Z = !1,
                        ae = !0;
                    if (typeof e != "function") throw new Rr(p);
                    i = Fr(i) || 0, wt(o) && (Q = !!o.leading, Z = "maxWait" in o, y = Z ? Kt(Fr(o.maxWait) || 0, i) : y, ae = "trailing" in o ? !!o.trailing : ae);

                    function ve(Tt) {
                        var Br = c,
                            pi = f;
                        return c = f = r, J = Tt, E = e.apply(pi, Br), E
                    }

                    function be(Tt) {
                        return J = Tt, O = ts(Ge, i), Q ? ve(Tt) : E
                    }

                    function He(Tt) {
                        var Br = Tt - F,
                            pi = Tt - J,
                            Rl = i - Br;
                        return Z ? Yt(Rl, y - pi) : Rl
                    }

                    function Ee(Tt) {
                        var Br = Tt - F,
                            pi = Tt - J;
                        return F === r || Br >= i || Br < 0 || Z && pi >= y
                    }

                    function Ge() {
                        var Tt = Po();
                        if (Ee(Tt)) return Xe(Tt);
                        O = ts(Ge, He(Tt))
                    }

                    function Xe(Tt) {
                        return O = r, ae && c ? ve(Tt) : (c = f = r, E)
                    }

                    function Er() {
                        O !== r && bh(O), J = 0, c = F = f = O = r
                    }

                    function nr() {
                        return O === r ? E : Xe(Po())
                    }

                    function Sr() {
                        var Tt = Po(),
                            Br = Ee(Tt);
                        if (c = arguments, f = this, F = Tt, Br) {
                            if (O === r) return be(F);
                            if (Z) return bh(O), O = ts(Ge, i), ve(F)
                        }
                        return O === r && (O = ts(Ge, i)), E
                    }
                    return Sr.cancel = Er, Sr.flush = nr, Sr
                }
                var yv = Be(function(e, i) {
                        return eh(e, 1, i)
                    }),
                    _v = Be(function(e, i, o) {
                        return eh(e, Fr(i) || 0, o)
                    });

                function mv(e) {
                    return ui(e, G)
                }

                function Ao(e, i) {
                    if (typeof e != "function" || i != null && typeof i != "function") throw new Rr(p);
                    var o = function() {
                        var c = arguments,
                            f = i ? i.apply(this, c) : c[0],
                            y = o.cache;
                        if (y.has(f)) return y.get(f);
                        var E = e.apply(this, c);
                        return o.cache = y.set(f, E) || y, E
                    };
                    return o.cache = new(Ao.Cache || ai), o
                }
                Ao.Cache = ai;

                function No(e) {
                    if (typeof e != "function") throw new Rr(p);
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, i[0]);
                            case 2:
                                return !e.call(this, i[0], i[1]);
                            case 3:
                                return !e.call(this, i[0], i[1], i[2])
                        }
                        return !e.apply(this, i)
                    }
                }

                function wv(e) {
                    return al(2, e)
                }
                var bv = a0(function(e, i) {
                        i = i.length == 1 && Ce(i[0]) ? _t(i[0], mr(me())) : _t(Gt(i, 1), mr(me()));
                        var o = i.length;
                        return Be(function(c) {
                            for (var f = -1, y = Yt(c.length, o); ++f < y;) c[f] = i[f].call(this, c[f]);
                            return Bt(e, this, c)
                        })
                    }),
                    vc = Be(function(e, i) {
                        var o = Ii(i, In(vc));
                        return ui(e, P, r, i, o)
                    }),
                    fl = Be(function(e, i) {
                        var o = Ii(i, In(fl));
                        return ui(e, m, r, i, o)
                    }),
                    Ev = hi(function(e, i) {
                        return ui(e, _, r, r, r, i)
                    });

                function Sv(e, i) {
                    if (typeof e != "function") throw new Rr(p);
                    return i = i === r ? i : Me(i), Be(e, i)
                }

                function Iv(e, i) {
                    if (typeof e != "function") throw new Rr(p);
                    return i = i == null ? 0 : Kt(Me(i), 0), Be(function(o) {
                        var c = o[i],
                            f = Ni(o, 0, i);
                        return c && Si(f, c), Bt(e, this, f)
                    })
                }

                function xv(e, i, o) {
                    var c = !0,
                        f = !0;
                    if (typeof e != "function") throw new Rr(p);
                    return wt(o) && (c = "leading" in o ? !!o.leading : c, f = "trailing" in o ? !!o.trailing : f), ll(e, i, {
                        leading: c,
                        maxWait: i,
                        trailing: f
                    })
                }

                function Ov(e) {
                    return ol(e, 1)
                }

                function Pv(e, i) {
                    return vc(ec(i), e)
                }

                function Av() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return Ce(e) ? e : [e]
                }

                function Nv(e) {
                    return Cr(e, R)
                }

                function Rv(e, i) {
                    return i = typeof i == "function" ? i : r, Cr(e, R, i)
                }

                function Tv(e) {
                    return Cr(e, A | R)
                }

                function Cv(e, i) {
                    return i = typeof i == "function" ? i : r, Cr(e, A | R, i)
                }

                function Lv(e, i) {
                    return i == null || Zu(e, i, kt(i))
                }

                function Kr(e, i) {
                    return e === i || e !== e && i !== i
                }
                var Uv = bo(za),
                    Fv = bo(function(e, i) {
                        return e >= i
                    }),
                    Yi = sh(function() {
                        return arguments
                    }()) ? sh : function(e) {
                        return Pt(e) && nt.call(e, "callee") && !ku.call(e, "callee")
                    },
                    Ce = z.isArray,
                    $v = tr ? mr(tr) : Bg;

                function fr(e) {
                    return e != null && Ro(e.length) && !fi(e)
                }

                function Rt(e) {
                    return Pt(e) && fr(e)
                }

                function Dv(e) {
                    return e === !0 || e === !1 || Pt(e) && rr(e) == M
                }
                var Ri = Qp || Pc,
                    Mv = qr ? mr(qr) : kg;

                function jv(e) {
                    return Pt(e) && e.nodeType === 1 && !rs(e)
                }

                function qv(e) {
                    if (e == null) return !0;
                    if (fr(e) && (Ce(e) || typeof e == "string" || typeof e.splice == "function" || Ri(e) || xn(e) || Yi(e))) return !e.length;
                    var i = Jt(e);
                    if (i == Ie || i == xe) return !e.size;
                    if (es(e)) return !ka(e).length;
                    for (var o in e)
                        if (nt.call(e, o)) return !1;
                    return !0
                }

                function Hv(e, i) {
                    return Qn(e, i)
                }

                function zv(e, i, o) {
                    o = typeof o == "function" ? o : r;
                    var c = o ? o(e, i) : r;
                    return c === r ? Qn(e, i, r, o) : !!c
                }

                function yc(e) {
                    if (!Pt(e)) return !1;
                    var i = rr(e);
                    return i == x || i == h || typeof e.message == "string" && typeof e.name == "string" && !rs(e)
                }

                function Kv(e) {
                    return typeof e == "number" && Gu(e)
                }

                function fi(e) {
                    if (!wt(e)) return !1;
                    var i = rr(e);
                    return i == ne || i == fe || i == j || i == gt
                }

                function dl(e) {
                    return typeof e == "number" && e == Me(e)
                }

                function Ro(e) {
                    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= W
                }

                function wt(e) {
                    var i = typeof e;
                    return e != null && (i == "object" || i == "function")
                }

                function Pt(e) {
                    return e != null && typeof e == "object"
                }
                var pl = Ar ? mr(Ar) : Gg;

                function Bv(e, i) {
                    return e === i || Ba(e, i, ac(i))
                }

                function kv(e, i, o) {
                    return o = typeof o == "function" ? o : r, Ba(e, i, ac(i), o)
                }

                function Vv(e) {
                    return gl(e) && e != +e
                }

                function Gv(e) {
                    if (R0(e)) throw new Re(l);
                    return oh(e)
                }

                function Wv(e) {
                    return e === null
                }

                function Yv(e) {
                    return e == null
                }

                function gl(e) {
                    return typeof e == "number" || Pt(e) && rr(e) == ze
                }

                function rs(e) {
                    if (!Pt(e) || rr(e) != De) return !1;
                    var i = ro(e);
                    if (i === null) return !0;
                    var o = nt.call(i, "constructor") && i.constructor;
                    return typeof o == "function" && o instanceof o && Xs.call(o) == kp
                }
                var _c = Yr ? mr(Yr) : Wg;

                function Jv(e) {
                    return dl(e) && e >= -W && e <= W
                }
                var vl = Hn ? mr(Hn) : Yg;

                function To(e) {
                    return typeof e == "string" || !Ce(e) && Pt(e) && rr(e) == Le
                }

                function br(e) {
                    return typeof e == "symbol" || Pt(e) && rr(e) == Ue
                }
                var xn = Hi ? mr(Hi) : Jg;

                function Qv(e) {
                    return e === r
                }

                function Xv(e) {
                    return Pt(e) && Jt(e) == Ae
                }

                function Zv(e) {
                    return Pt(e) && rr(e) == Fe
                }
                var ey = bo(Va),
                    ty = bo(function(e, i) {
                        return e <= i
                    });

                function yl(e) {
                    if (!e) return [];
                    if (fr(e)) return To(e) ? Hr(e) : lr(e);
                    if (Kn && e[Kn]) return Lp(e[Kn]());
                    var i = Jt(e),
                        o = i == Ie ? La : i == xe ? Ys : On;
                    return o(e)
                }

                function di(e) {
                    if (!e) return e === 0 ? e : 0;
                    if (e = Fr(e), e === te || e === -te) {
                        var i = e < 0 ? -1 : 1;
                        return i * ee
                    }
                    return e === e ? e : 0
                }

                function Me(e) {
                    var i = di(e),
                        o = i % 1;
                    return i === i ? o ? i - o : i : 0
                }

                function _l(e) {
                    return e ? ki(Me(e), 0, re) : 0
                }

                function Fr(e) {
                    if (typeof e == "number") return e;
                    if (br(e)) return Y;
                    if (wt(e)) {
                        var i = typeof e.valueOf == "function" ? e.valueOf() : e;
                        e = wt(i) ? i + "" : i
                    }
                    if (typeof e != "string") return e === 0 ? e : +e;
                    e = Du(e);
                    var o = ca.test(e);
                    return o || ha.test(e) ? Te(e.slice(2), o ? 2 : 8) : aa.test(e) ? Y : +e
                }

                function ml(e) {
                    return Qr(e, dr(e))
                }

                function ry(e) {
                    return e ? ki(Me(e), -W, W) : e === 0 ? e : 0
                }

                function it(e) {
                    return e == null ? "" : wr(e)
                }
                var iy = En(function(e, i) {
                        if (es(i) || fr(i)) {
                            Qr(i, kt(i), e);
                            return
                        }
                        for (var o in i) nt.call(i, o) && Wn(e, o, i[o])
                    }),
                    wl = En(function(e, i) {
                        Qr(i, dr(i), e)
                    }),
                    Co = En(function(e, i, o, c) {
                        Qr(i, dr(i), e, c)
                    }),
                    ny = En(function(e, i, o, c) {
                        Qr(i, kt(i), e, c)
                    }),
                    sy = hi(ja);

                function oy(e, i) {
                    var o = bn(e);
                    return i == null ? o : Xu(o, i)
                }
                var ay = Be(function(e, i) {
                        e = ut(e);
                        var o = -1,
                            c = i.length,
                            f = c > 2 ? i[2] : r;
                        for (f && ir(i[0], i[1], f) && (c = 1); ++o < c;)
                            for (var y = i[o], E = dr(y), O = -1, F = E.length; ++O < F;) {
                                var J = E[O],
                                    Q = e[J];
                                (Q === r || Kr(Q, _n[J]) && !nt.call(e, J)) && (e[J] = y[J])
                            }
                        return e
                    }),
                    cy = Be(function(e) {
                        return e.push(r, Dh), Bt(bl, r, e)
                    });

                function uy(e, i) {
                    return Lu(e, me(i, 3), Jr)
                }

                function hy(e, i) {
                    return Lu(e, me(i, 3), Ha)
                }

                function ly(e, i) {
                    return e == null ? e : qa(e, me(i, 3), dr)
                }

                function fy(e, i) {
                    return e == null ? e : ih(e, me(i, 3), dr)
                }

                function dy(e, i) {
                    return e && Jr(e, me(i, 3))
                }

                function py(e, i) {
                    return e && Ha(e, me(i, 3))
                }

                function gy(e) {
                    return e == null ? [] : fo(e, kt(e))
                }

                function vy(e) {
                    return e == null ? [] : fo(e, dr(e))
                }

                function mc(e, i, o) {
                    var c = e == null ? r : Vi(e, i);
                    return c === r ? o : c
                }

                function yy(e, i) {
                    return e != null && qh(e, i, qg)
                }

                function wc(e, i) {
                    return e != null && qh(e, i, Hg)
                }
                var _y = Ch(function(e, i, o) {
                        i != null && typeof i.toString != "function" && (i = Zs.call(i)), e[i] = o
                    }, Ec(pr)),
                    my = Ch(function(e, i, o) {
                        i != null && typeof i.toString != "function" && (i = Zs.call(i)), nt.call(e, i) ? e[i].push(o) : e[i] = [o]
                    }, me),
                    wy = Be(Jn);

                function kt(e) {
                    return fr(e) ? Ju(e) : ka(e)
                }

                function dr(e) {
                    return fr(e) ? Ju(e, !0) : Qg(e)
                }

                function by(e, i) {
                    var o = {};
                    return i = me(i, 3), Jr(e, function(c, f, y) {
                        ci(o, i(c, f, y), c)
                    }), o
                }

                function Ey(e, i) {
                    var o = {};
                    return i = me(i, 3), Jr(e, function(c, f, y) {
                        ci(o, f, i(c, f, y))
                    }), o
                }
                var Sy = En(function(e, i, o) {
                        po(e, i, o)
                    }),
                    bl = En(function(e, i, o, c) {
                        po(e, i, o, c)
                    }),
                    Iy = hi(function(e, i) {
                        var o = {};
                        if (e == null) return o;
                        var c = !1;
                        i = _t(i, function(y) {
                            return y = Ai(y, e), c || (c = y.length > 1), y
                        }), Qr(e, sc(e), o), c && (o = Cr(o, A | $ | R, _0));
                        for (var f = i.length; f--;) Qa(o, i[f]);
                        return o
                    });

                function xy(e, i) {
                    return El(e, No(me(i)))
                }
                var Oy = hi(function(e, i) {
                    return e == null ? {} : Zg(e, i)
                });

                function El(e, i) {
                    if (e == null) return {};
                    var o = _t(sc(e), function(c) {
                        return [c]
                    });
                    return i = me(i), dh(e, o, function(c, f) {
                        return i(c, f[0])
                    })
                }

                function Py(e, i, o) {
                    i = Ai(i, e);
                    var c = -1,
                        f = i.length;
                    for (f || (f = 1, e = r); ++c < f;) {
                        var y = e == null ? r : e[Xr(i[c])];
                        y === r && (c = f, y = o), e = fi(y) ? y.call(e) : y
                    }
                    return e
                }

                function Ay(e, i, o) {
                    return e == null ? e : Xn(e, i, o)
                }

                function Ny(e, i, o, c) {
                    return c = typeof c == "function" ? c : r, e == null ? e : Xn(e, i, o, c)
                }
                var Sl = Fh(kt),
                    Il = Fh(dr);

                function Ry(e, i, o) {
                    var c = Ce(e),
                        f = c || Ri(e) || xn(e);
                    if (i = me(i, 4), o == null) {
                        var y = e && e.constructor;
                        f ? o = c ? new y : [] : wt(e) ? o = fi(y) ? bn(ro(e)) : {} : o = {}
                    }
                    return (f ? Nr : Jr)(e, function(E, O, F) {
                        return i(o, E, O, F)
                    }), o
                }

                function Ty(e, i) {
                    return e == null ? !0 : Qa(e, i)
                }

                function Cy(e, i, o) {
                    return e == null ? e : _h(e, i, ec(o))
                }

                function Ly(e, i, o, c) {
                    return c = typeof c == "function" ? c : r, e == null ? e : _h(e, i, ec(o), c)
                }

                function On(e) {
                    return e == null ? [] : Ca(e, kt(e))
                }

                function Uy(e) {
                    return e == null ? [] : Ca(e, dr(e))
                }

                function Fy(e, i, o) {
                    return o === r && (o = i, i = r), o !== r && (o = Fr(o), o = o === o ? o : 0), i !== r && (i = Fr(i), i = i === i ? i : 0), ki(Fr(e), i, o)
                }

                function $y(e, i, o) {
                    return i = di(i), o === r ? (o = i, i = 0) : o = di(o), e = Fr(e), zg(e, i, o)
                }

                function Dy(e, i, o) {
                    if (o && typeof o != "boolean" && ir(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = di(e), i === r ? (i = e, e = 0) : i = di(i)), e > i) {
                        var c = e;
                        e = i, i = c
                    }
                    if (o || e % 1 || i % 1) {
                        var f = Wu();
                        return Yt(e + f * (i - e + at("1e-" + ((f + "").length - 1))), i)
                    }
                    return Wa(e, i)
                }
                var My = Sn(function(e, i, o) {
                    return i = i.toLowerCase(), e + (o ? xl(i) : i)
                });

                function xl(e) {
                    return bc(it(e).toLowerCase())
                }

                function Ol(e) {
                    return e = it(e), e && e.replace(ni, Ap).replace(Sa, "")
                }

                function jy(e, i, o) {
                    e = it(e), i = wr(i);
                    var c = e.length;
                    o = o === r ? c : ki(Me(o), 0, c);
                    var f = o;
                    return o -= i.length, o >= 0 && e.slice(o, f) == i
                }

                function qy(e) {
                    return e = it(e), e && vt.test(e) ? e.replace($i, Np) : e
                }

                function Hy(e) {
                    return e = it(e), e && $t.test(e) ? e.replace(It, "\\$&") : e
                }
                var zy = Sn(function(e, i, o) {
                        return e + (o ? "-" : "") + i.toLowerCase()
                    }),
                    Ky = Sn(function(e, i, o) {
                        return e + (o ? " " : "") + i.toLowerCase()
                    }),
                    By = Nh("toLowerCase");

                function ky(e, i, o) {
                    e = it(e), i = Me(i);
                    var c = i ? vn(e) : 0;
                    if (!i || c >= i) return e;
                    var f = (i - c) / 2;
                    return wo(oo(f), o) + e + wo(so(f), o)
                }

                function Vy(e, i, o) {
                    e = it(e), i = Me(i);
                    var c = i ? vn(e) : 0;
                    return i && c < i ? e + wo(i - c, o) : e
                }

                function Gy(e, i, o) {
                    e = it(e), i = Me(i);
                    var c = i ? vn(e) : 0;
                    return i && c < i ? wo(i - c, o) + e : e
                }

                function Wy(e, i, o) {
                    return o || i == null ? i = 0 : i && (i = +i), tg(it(e).replace(xt, ""), i || 0)
                }

                function Yy(e, i, o) {
                    return (o ? ir(e, i, o) : i === r) ? i = 1 : i = Me(i), Ya(it(e), i)
                }

                function Jy() {
                    var e = arguments,
                        i = it(e[0]);
                    return e.length < 3 ? i : i.replace(e[1], e[2])
                }
                var Qy = Sn(function(e, i, o) {
                    return e + (o ? "_" : "") + i.toLowerCase()
                });

                function Xy(e, i, o) {
                    return o && typeof o != "number" && ir(e, i, o) && (i = o = r), o = o === r ? re : o >>> 0, o ? (e = it(e), e && (typeof i == "string" || i != null && !_c(i)) && (i = wr(i), !i && gn(e)) ? Ni(Hr(e), 0, o) : e.split(i, o)) : []
                }
                var Zy = Sn(function(e, i, o) {
                    return e + (o ? " " : "") + bc(i)
                });

                function e_(e, i, o) {
                    return e = it(e), o = o == null ? 0 : ki(Me(o), 0, e.length), i = wr(i), e.slice(o, o + i.length) == i
                }

                function t_(e, i, o) {
                    var c = g.templateSettings;
                    o && ir(e, i, o) && (i = r), e = it(e), i = Co({}, i, c, $h);
                    var f = Co({}, i.imports, c.imports, $h),
                        y = kt(f),
                        E = Ca(f, y),
                        O, F, J = 0,
                        Q = i.interpolate || an,
                        Z = "__p += '",
                        ae = Ua((i.escape || an).source + "|" + Q.source + "|" + (Q === mt ? oa : an).source + "|" + (i.evaluate || an).source + "|$", "g"),
                        ve = "//# sourceURL=" + (nt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ia + "]") + `
`;
                    e.replace(ae, function(Ee, Ge, Xe, Er, nr, Sr) {
                        return Xe || (Xe = Er), Z += e.slice(J, Sr).replace(fa, Rp), Ge && (O = !0, Z += `' +
__e(` + Ge + `) +
'`), nr && (F = !0, Z += `';
` + nr + `;
__p += '`), Xe && (Z += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), J = Sr + Ee.length, Ee
                    }), Z += `';
`;
                    var be = nt.call(i, "variable") && i.variable;
                    if (!be) Z = `with (obj) {
` + Z + `
}
`;
                    else if (na.test(be)) throw new Re(d);
                    Z = (F ? Z.replace(Gr, "") : Z).replace(er, "$1").replace(ii, "$1;"), Z = "function(" + (be || "obj") + `) {
` + (be ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Z + `return __p
}`;
                    var He = Al(function() {
                        return rt(y, ve + "return " + Z).apply(r, E)
                    });
                    if (He.source = Z, yc(He)) throw He;
                    return He
                }

                function r_(e) {
                    return it(e).toLowerCase()
                }

                function i_(e) {
                    return it(e).toUpperCase()
                }

                function n_(e, i, o) {
                    if (e = it(e), e && (o || i === r)) return Du(e);
                    if (!e || !(i = wr(i))) return e;
                    var c = Hr(e),
                        f = Hr(i),
                        y = Mu(c, f),
                        E = ju(c, f) + 1;
                    return Ni(c, y, E).join("")
                }

                function s_(e, i, o) {
                    if (e = it(e), e && (o || i === r)) return e.slice(0, Hu(e) + 1);
                    if (!e || !(i = wr(i))) return e;
                    var c = Hr(e),
                        f = ju(c, Hr(i)) + 1;
                    return Ni(c, 0, f).join("")
                }

                function o_(e, i, o) {
                    if (e = it(e), e && (o || i === r)) return e.replace(xt, "");
                    if (!e || !(i = wr(i))) return e;
                    var c = Hr(e),
                        f = Mu(c, Hr(i));
                    return Ni(c, f).join("")
                }

                function a_(e, i) {
                    var o = V,
                        c = se;
                    if (wt(i)) {
                        var f = "separator" in i ? i.separator : f;
                        o = "length" in i ? Me(i.length) : o, c = "omission" in i ? wr(i.omission) : c
                    }
                    e = it(e);
                    var y = e.length;
                    if (gn(e)) {
                        var E = Hr(e);
                        y = E.length
                    }
                    if (o >= y) return e;
                    var O = o - vn(c);
                    if (O < 1) return c;
                    var F = E ? Ni(E, 0, O).join("") : e.slice(0, O);
                    if (f === r) return F + c;
                    if (E && (O += F.length - O), _c(f)) {
                        if (e.slice(O).search(f)) {
                            var J, Q = F;
                            for (f.global || (f = Ua(f.source, it(Pr.exec(f)) + "g")), f.lastIndex = 0; J = f.exec(Q);) var Z = J.index;
                            F = F.slice(0, Z === r ? O : Z)
                        }
                    } else if (e.indexOf(wr(f), O) != O) {
                        var ae = F.lastIndexOf(f);
                        ae > -1 && (F = F.slice(0, ae))
                    }
                    return F + c
                }

                function c_(e) {
                    return e = it(e), e && bt.test(e) ? e.replace(wi, Dp) : e
                }
                var u_ = Sn(function(e, i, o) {
                        return e + (o ? " " : "") + i.toUpperCase()
                    }),
                    bc = Nh("toUpperCase");

                function Pl(e, i, o) {
                    return e = it(e), i = o ? r : i, i === r ? Cp(e) ? qp(e) : Sp(e) : e.match(i) || []
                }
                var Al = Be(function(e, i) {
                        try {
                            return Bt(e, r, i)
                        } catch (o) {
                            return yc(o) ? o : new Re(o)
                        }
                    }),
                    h_ = hi(function(e, i) {
                        return Nr(i, function(o) {
                            o = Xr(o), ci(e, o, gc(e[o], e))
                        }), e
                    });

                function l_(e) {
                    var i = e == null ? 0 : e.length,
                        o = me();
                    return e = i ? _t(e, function(c) {
                        if (typeof c[1] != "function") throw new Rr(p);
                        return [o(c[0]), c[1]]
                    }) : [], Be(function(c) {
                        for (var f = -1; ++f < i;) {
                            var y = e[f];
                            if (Bt(y[0], this, c)) return Bt(y[1], this, c)
                        }
                    })
                }

                function f_(e) {
                    return Dg(Cr(e, A))
                }

                function Ec(e) {
                    return function() {
                        return e
                    }
                }

                function d_(e, i) {
                    return e == null || e !== e ? i : e
                }
                var p_ = Th(),
                    g_ = Th(!0);

                function pr(e) {
                    return e
                }

                function Sc(e) {
                    return ah(typeof e == "function" ? e : Cr(e, A))
                }

                function v_(e) {
                    return uh(Cr(e, A))
                }

                function y_(e, i) {
                    return hh(e, Cr(i, A))
                }
                var __ = Be(function(e, i) {
                        return function(o) {
                            return Jn(o, e, i)
                        }
                    }),
                    m_ = Be(function(e, i) {
                        return function(o) {
                            return Jn(e, o, i)
                        }
                    });

                function Ic(e, i, o) {
                    var c = kt(i),
                        f = fo(i, c);
                    o == null && !(wt(i) && (f.length || !c.length)) && (o = i, i = e, e = this, f = fo(i, kt(i)));
                    var y = !(wt(o) && "chain" in o) || !!o.chain,
                        E = fi(e);
                    return Nr(f, function(O) {
                        var F = i[O];
                        e[O] = F, E && (e.prototype[O] = function() {
                            var J = this.__chain__;
                            if (y || J) {
                                var Q = e(this.__wrapped__),
                                    Z = Q.__actions__ = lr(this.__actions__);
                                return Z.push({
                                    func: F,
                                    args: arguments,
                                    thisArg: e
                                }), Q.__chain__ = J, Q
                            }
                            return F.apply(e, Si([this.value()], arguments))
                        })
                    }), e
                }

                function w_() {
                    return Qe._ === this && (Qe._ = Vp), this
                }

                function xc() {}

                function b_(e) {
                    return e = Me(e), Be(function(i) {
                        return lh(i, e)
                    })
                }
                var E_ = rc(_t),
                    S_ = rc(Cu),
                    I_ = rc(Pa);

                function Nl(e) {
                    return uc(e) ? Aa(Xr(e)) : e0(e)
                }

                function x_(e) {
                    return function(i) {
                        return e == null ? r : Vi(e, i)
                    }
                }
                var O_ = Lh(),
                    P_ = Lh(!0);

                function Oc() {
                    return []
                }

                function Pc() {
                    return !1
                }

                function A_() {
                    return {}
                }

                function N_() {
                    return ""
                }

                function R_() {
                    return !0
                }

                function T_(e, i) {
                    if (e = Me(e), e < 1 || e > W) return [];
                    var o = re,
                        c = Yt(e, re);
                    i = me(i), e -= re;
                    for (var f = Ta(c, i); ++o < e;) i(o);
                    return f
                }

                function C_(e) {
                    return Ce(e) ? _t(e, Xr) : br(e) ? [e] : lr(Yh(it(e)))
                }

                function L_(e) {
                    var i = ++Bp;
                    return it(e) + i
                }
                var U_ = mo(function(e, i) {
                        return e + i
                    }, 0),
                    F_ = ic("ceil"),
                    $_ = mo(function(e, i) {
                        return e / i
                    }, 1),
                    D_ = ic("floor");

                function M_(e) {
                    return e && e.length ? lo(e, pr, za) : r
                }

                function j_(e, i) {
                    return e && e.length ? lo(e, me(i, 2), za) : r
                }

                function q_(e) {
                    return Fu(e, pr)
                }

                function H_(e, i) {
                    return Fu(e, me(i, 2))
                }

                function z_(e) {
                    return e && e.length ? lo(e, pr, Va) : r
                }

                function K_(e, i) {
                    return e && e.length ? lo(e, me(i, 2), Va) : r
                }
                var B_ = mo(function(e, i) {
                        return e * i
                    }, 1),
                    k_ = ic("round"),
                    V_ = mo(function(e, i) {
                        return e - i
                    }, 0);

                function G_(e) {
                    return e && e.length ? Ra(e, pr) : 0
                }

                function W_(e, i) {
                    return e && e.length ? Ra(e, me(i, 2)) : 0
                }
                return g.after = vv, g.ary = ol, g.assign = iy, g.assignIn = wl, g.assignInWith = Co, g.assignWith = ny, g.at = sy, g.before = al, g.bind = gc, g.bindAll = h_, g.bindKey = cl, g.castArray = Av, g.chain = il, g.chunk = D0, g.compact = M0, g.concat = j0, g.cond = l_, g.conforms = f_, g.constant = Ec, g.countBy = G1, g.create = oy, g.curry = ul, g.curryRight = hl, g.debounce = ll, g.defaults = ay, g.defaultsDeep = cy, g.defer = yv, g.delay = _v, g.difference = q0, g.differenceBy = H0, g.differenceWith = z0, g.drop = K0, g.dropRight = B0, g.dropRightWhile = k0, g.dropWhile = V0, g.fill = G0, g.filter = Y1, g.flatMap = X1, g.flatMapDeep = Z1, g.flatMapDepth = ev, g.flatten = Zh, g.flattenDeep = W0, g.flattenDepth = Y0, g.flip = mv, g.flow = p_, g.flowRight = g_, g.fromPairs = J0, g.functions = gy, g.functionsIn = vy, g.groupBy = tv, g.initial = X0, g.intersection = Z0, g.intersectionBy = e1, g.intersectionWith = t1, g.invert = _y, g.invertBy = my, g.invokeMap = iv, g.iteratee = Sc, g.keyBy = nv, g.keys = kt, g.keysIn = dr, g.map = Oo, g.mapKeys = by, g.mapValues = Ey, g.matches = v_, g.matchesProperty = y_, g.memoize = Ao, g.merge = Sy, g.mergeWith = bl, g.method = __, g.methodOf = m_, g.mixin = Ic, g.negate = No, g.nthArg = b_, g.omit = Iy, g.omitBy = xy, g.once = wv, g.orderBy = sv, g.over = E_, g.overArgs = bv, g.overEvery = S_, g.overSome = I_, g.partial = vc, g.partialRight = fl, g.partition = ov, g.pick = Oy, g.pickBy = El, g.property = Nl, g.propertyOf = x_, g.pull = s1, g.pullAll = tl, g.pullAllBy = o1, g.pullAllWith = a1, g.pullAt = c1, g.range = O_, g.rangeRight = P_, g.rearg = Ev, g.reject = uv, g.remove = u1, g.rest = Sv, g.reverse = dc, g.sampleSize = lv, g.set = Ay, g.setWith = Ny, g.shuffle = fv, g.slice = h1, g.sortBy = gv, g.sortedUniq = y1, g.sortedUniqBy = _1, g.split = Xy, g.spread = Iv, g.tail = m1, g.take = w1, g.takeRight = b1, g.takeRightWhile = E1, g.takeWhile = S1, g.tap = M1, g.throttle = xv, g.thru = xo, g.toArray = yl, g.toPairs = Sl, g.toPairsIn = Il, g.toPath = C_, g.toPlainObject = ml, g.transform = Ry, g.unary = Ov, g.union = I1, g.unionBy = x1, g.unionWith = O1, g.uniq = P1, g.uniqBy = A1, g.uniqWith = N1, g.unset = Ty, g.unzip = pc, g.unzipWith = rl, g.update = Cy, g.updateWith = Ly, g.values = On, g.valuesIn = Uy, g.without = R1, g.words = Pl, g.wrap = Pv, g.xor = T1, g.xorBy = C1, g.xorWith = L1, g.zip = U1, g.zipObject = F1, g.zipObjectDeep = $1, g.zipWith = D1, g.entries = Sl, g.entriesIn = Il, g.extend = wl, g.extendWith = Co, Ic(g, g), g.add = U_, g.attempt = Al, g.camelCase = My, g.capitalize = xl, g.ceil = F_, g.clamp = Fy, g.clone = Nv, g.cloneDeep = Tv, g.cloneDeepWith = Cv, g.cloneWith = Rv, g.conformsTo = Lv, g.deburr = Ol, g.defaultTo = d_, g.divide = $_, g.endsWith = jy, g.eq = Kr, g.escape = qy, g.escapeRegExp = Hy, g.every = W1, g.find = J1, g.findIndex = Qh, g.findKey = uy, g.findLast = Q1, g.findLastIndex = Xh, g.findLastKey = hy, g.floor = D_, g.forEach = nl, g.forEachRight = sl, g.forIn = ly, g.forInRight = fy, g.forOwn = dy, g.forOwnRight = py, g.get = mc, g.gt = Uv, g.gte = Fv, g.has = yy, g.hasIn = wc, g.head = el, g.identity = pr, g.includes = rv, g.indexOf = Q0, g.inRange = $y, g.invoke = wy, g.isArguments = Yi, g.isArray = Ce, g.isArrayBuffer = $v, g.isArrayLike = fr, g.isArrayLikeObject = Rt, g.isBoolean = Dv, g.isBuffer = Ri, g.isDate = Mv, g.isElement = jv, g.isEmpty = qv, g.isEqual = Hv, g.isEqualWith = zv, g.isError = yc, g.isFinite = Kv, g.isFunction = fi, g.isInteger = dl, g.isLength = Ro, g.isMap = pl, g.isMatch = Bv, g.isMatchWith = kv, g.isNaN = Vv, g.isNative = Gv, g.isNil = Yv, g.isNull = Wv, g.isNumber = gl, g.isObject = wt, g.isObjectLike = Pt, g.isPlainObject = rs, g.isRegExp = _c, g.isSafeInteger = Jv, g.isSet = vl, g.isString = To, g.isSymbol = br, g.isTypedArray = xn, g.isUndefined = Qv, g.isWeakMap = Xv, g.isWeakSet = Zv, g.join = r1, g.kebabCase = zy, g.last = Ur, g.lastIndexOf = i1, g.lowerCase = Ky, g.lowerFirst = By, g.lt = ey, g.lte = ty, g.max = M_, g.maxBy = j_, g.mean = q_, g.meanBy = H_, g.min = z_, g.minBy = K_, g.stubArray = Oc, g.stubFalse = Pc, g.stubObject = A_, g.stubString = N_, g.stubTrue = R_, g.multiply = B_, g.nth = n1, g.noConflict = w_, g.noop = xc, g.now = Po, g.pad = ky, g.padEnd = Vy, g.padStart = Gy, g.parseInt = Wy, g.random = Dy, g.reduce = av, g.reduceRight = cv, g.repeat = Yy, g.replace = Jy, g.result = Py, g.round = k_, g.runInContext = U, g.sample = hv, g.size = dv, g.snakeCase = Qy, g.some = pv, g.sortedIndex = l1, g.sortedIndexBy = f1, g.sortedIndexOf = d1, g.sortedLastIndex = p1, g.sortedLastIndexBy = g1, g.sortedLastIndexOf = v1, g.startCase = Zy, g.startsWith = e_, g.subtract = V_, g.sum = G_, g.sumBy = W_, g.template = t_, g.times = T_, g.toFinite = di, g.toInteger = Me, g.toLength = _l, g.toLower = r_, g.toNumber = Fr, g.toSafeInteger = ry, g.toString = it, g.toUpper = i_, g.trim = n_, g.trimEnd = s_, g.trimStart = o_, g.truncate = a_, g.unescape = c_, g.uniqueId = L_, g.upperCase = u_, g.upperFirst = bc, g.each = nl, g.eachRight = sl, g.first = el, Ic(g, function() {
                    var e = {};
                    return Jr(g, function(i, o) {
                        nt.call(g.prototype, o) || (e[o] = i)
                    }), e
                }(), {
                    chain: !1
                }), g.VERSION = s, Nr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                    g[e].placeholder = g
                }), Nr(["drop", "take"], function(e, i) {
                    Ye.prototype[e] = function(o) {
                        o = o === r ? 1 : Kt(Me(o), 0);
                        var c = this.__filtered__ && !i ? new Ye(this) : this.clone();
                        return c.__filtered__ ? c.__takeCount__ = Yt(o, c.__takeCount__) : c.__views__.push({
                            size: Yt(o, re),
                            type: e + (c.__dir__ < 0 ? "Right" : "")
                        }), c
                    }, Ye.prototype[e + "Right"] = function(o) {
                        return this.reverse()[e](o).reverse()
                    }
                }), Nr(["filter", "map", "takeWhile"], function(e, i) {
                    var o = i + 1,
                        c = o == C || o == le;
                    Ye.prototype[e] = function(f) {
                        var y = this.clone();
                        return y.__iteratees__.push({
                            iteratee: me(f, 3),
                            type: o
                        }), y.__filtered__ = y.__filtered__ || c, y
                    }
                }), Nr(["head", "last"], function(e, i) {
                    var o = "take" + (i ? "Right" : "");
                    Ye.prototype[e] = function() {
                        return this[o](1).value()[0]
                    }
                }), Nr(["initial", "tail"], function(e, i) {
                    var o = "drop" + (i ? "" : "Right");
                    Ye.prototype[e] = function() {
                        return this.__filtered__ ? new Ye(this) : this[o](1)
                    }
                }), Ye.prototype.compact = function() {
                    return this.filter(pr)
                }, Ye.prototype.find = function(e) {
                    return this.filter(e).head()
                }, Ye.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }, Ye.prototype.invokeMap = Be(function(e, i) {
                    return typeof e == "function" ? new Ye(this) : this.map(function(o) {
                        return Jn(o, e, i)
                    })
                }), Ye.prototype.reject = function(e) {
                    return this.filter(No(me(e)))
                }, Ye.prototype.slice = function(e, i) {
                    e = Me(e);
                    var o = this;
                    return o.__filtered__ && (e > 0 || i < 0) ? new Ye(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = Me(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o)
                }, Ye.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }, Ye.prototype.toArray = function() {
                    return this.take(re)
                }, Jr(Ye.prototype, function(e, i) {
                    var o = /^(?:filter|find|map|reject)|While$/.test(i),
                        c = /^(?:head|last)$/.test(i),
                        f = g[c ? "take" + (i == "last" ? "Right" : "") : i],
                        y = c || /^find/.test(i);
                    f && (g.prototype[i] = function() {
                        var E = this.__wrapped__,
                            O = c ? [1] : arguments,
                            F = E instanceof Ye,
                            J = O[0],
                            Q = F || Ce(E),
                            Z = function(Ge) {
                                var Xe = f.apply(g, Si([Ge], O));
                                return c && ae ? Xe[0] : Xe
                            };
                        Q && o && typeof J == "function" && J.length != 1 && (F = Q = !1);
                        var ae = this.__chain__,
                            ve = !!this.__actions__.length,
                            be = y && !ae,
                            He = F && !ve;
                        if (!y && Q) {
                            E = He ? E : new Ye(this);
                            var Ee = e.apply(E, O);
                            return Ee.__actions__.push({
                                func: xo,
                                args: [Z],
                                thisArg: r
                            }), new Tr(Ee, ae)
                        }
                        return be && He ? e.apply(this, O) : (Ee = this.thru(Z), be ? c ? Ee.value()[0] : Ee.value() : Ee)
                    })
                }), Nr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                    var i = Js[e],
                        o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        c = /^(?:pop|shift)$/.test(e);
                    g.prototype[e] = function() {
                        var f = arguments;
                        if (c && !this.__chain__) {
                            var y = this.value();
                            return i.apply(Ce(y) ? y : [], f)
                        }
                        return this[o](function(E) {
                            return i.apply(Ce(E) ? E : [], f)
                        })
                    }
                }), Jr(Ye.prototype, function(e, i) {
                    var o = g[i];
                    if (o) {
                        var c = o.name + "";
                        nt.call(wn, c) || (wn[c] = []), wn[c].push({
                            name: i,
                            func: o
                        })
                    }
                }), wn[_o(r, oe).name] = [{
                    name: "wrapper",
                    func: r
                }], Ye.prototype.clone = cg, Ye.prototype.reverse = ug, Ye.prototype.value = hg, g.prototype.at = j1, g.prototype.chain = q1, g.prototype.commit = H1, g.prototype.next = z1, g.prototype.plant = B1, g.prototype.reverse = k1, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = V1, g.prototype.first = g.prototype.head, Kn && (g.prototype[Kn] = K1), g
            },
            yn = Hp();
        Nt ? ((Nt.exports = yn)._ = yn, ct._ = yn) : Qe._ = yn
    }).call(ps)
})(au, au.exports);
var F5 = Object.defineProperty,
    $5 = Object.defineProperties,
    D5 = Object.getOwnPropertyDescriptors,
    td = Object.getOwnPropertySymbols,
    M5 = Object.prototype.hasOwnProperty,
    j5 = Object.prototype.propertyIsEnumerable,
    rd = (n, t, r) => t in n ? F5(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    Fo = (n, t) => {
        for (var r in t || (t = {})) M5.call(t, r) && rd(n, r, t[r]);
        if (td)
            for (var r of td(t)) j5.call(t, r) && rd(n, r, t[r]);
        return n
    },
    q5 = (n, t) => $5(n, D5(t));

function Dn(n, t, r) {
    var s;
    const a = nb(n);
    return ((s = t.rpcMap) == null ? void 0 : s[a.reference]) || `${U5}?chainId=${a.namespace}:${a.reference}&projectId=${r}`
}

function on(n) {
    return n.includes(":") ? n.split(":")[1] : n
}

function vp(n) {
    return n.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
}

function H5(n, t) {
    const r = Object.keys(t.namespaces).filter(a => a.includes(n));
    if (!r.length) return [];
    const s = [];
    return r.forEach(a => {
        const l = t.namespaces[a].accounts;
        s.push(...l)
    }), s
}

function z5(n = {}, t = {}) {
    const r = id(n),
        s = id(t);
    return au.exports.merge(r, s)
}

function id(n) {
    var t, r, s, a;
    const l = {};
    if (!Tn(n)) return l;
    for (const [p, d] of Object.entries(n)) {
        const v = bu(p) ? [p] : d.chains,
            b = d.methods || [],
            S = d.events || [],
            A = d.rpcMap || {},
            $ = gs(p);
        l[$] = q5(Fo(Fo({}, l[$]), d), {
            chains: Dc(v, (t = l[$]) == null ? void 0 : t.chains),
            methods: Dc(b, (r = l[$]) == null ? void 0 : r.methods),
            events: Dc(S, (s = l[$]) == null ? void 0 : s.events),
            rpcMap: Fo(Fo({}, A), (a = l[$]) == null ? void 0 : a.rpcMap)
        })
    }
    return l
}

function K5(n) {
    return n.includes(":") ? n.split(":")[2] : n
}

function B5(n) {
    const t = {};
    for (const [r, s] of Object.entries(n)) {
        const a = s.methods || [],
            l = s.events || [],
            p = s.accounts || [],
            d = bu(r) ? [r] : s.chains ? s.chains : vp(s.accounts);
        t[r] = {
            chains: d,
            methods: a,
            events: l,
            accounts: p
        }
    }
    return t
}

function Bc(n) {
    return typeof n == "number" ? n : n.includes("0x") ? parseInt(n, 16) : n.includes(":") ? Number(n.split(":")[1]) : Number(n)
}
const yp = {},
    Lt = n => yp[n],
    kc = (n, t) => {
        yp[n] = t
    };
class k5 {
    constructor(t) {
        this.name = "polkadot", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = on(r);
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || Dn(t, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
class V5 {
    constructor(t) {
        this.name = "eip155", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(t);
            case "eth_chainId":
                return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, r) {
        const s = r || Dn(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = parseInt(on(r));
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    getHttpProvider() {
        const t = this.chainId,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    async handleSwitchChain(t) {
        var r, s;
        let a = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
        a = a.startsWith("0x") ? a : `0x${a}`;
        const l = parseInt(a, 16);
        if (this.isChainApproved(l)) this.setDefaultChain(`${l}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: t.topic,
            request: {
                method: t.request.method,
                params: [{
                    chainId: a
                }]
            },
            chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
        }), this.setDefaultChain(`${l}`);
        else throw new Error(`Failed to switch to chain 'eip155:${l}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
}
class G5 {
    constructor(t) {
        this.name = "solana", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = on(r);
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || Dn(t, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
class W5 {
    constructor(t) {
        this.name = "cosmos", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = on(r);
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || Dn(t, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
class Y5 {
    constructor(t) {
        this.name = "cip34", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            const s = this.getCardanoRPCUrl(r),
                a = on(r);
            t[a] = this.createHttpProvider(a, s)
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    getCardanoRPCUrl(t) {
        const r = this.namespace.rpcMap;
        if (r) return r[t]
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || this.getCardanoRPCUrl(t);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
class J5 {
    constructor(t) {
        this.name = "elrond", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = on(r);
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || Dn(t, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
class Q5 {
    constructor(t) {
        this.name = "multiversx", this.namespace = t.namespace, this.events = Lt("events"), this.client = Lt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(Fi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var s;
            const a = on(r);
            t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const s = this.createHttpProvider(t, r);
        s && (this.httpProviders[t] = s)
    }
    createHttpProvider(t, r) {
        const s = r || Dn(t, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new Ui(new sn(s, Lt("disableProviderPing")))
    }
}
var X5 = Object.defineProperty,
    Z5 = Object.defineProperties,
    e3 = Object.getOwnPropertyDescriptors,
    nd = Object.getOwnPropertySymbols,
    t3 = Object.prototype.hasOwnProperty,
    r3 = Object.prototype.propertyIsEnumerable,
    sd = (n, t, r) => t in n ? X5(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    $o = (n, t) => {
        for (var r in t || (t = {})) t3.call(t, r) && sd(n, r, t[r]);
        if (nd)
            for (var r of nd(t)) r3.call(t, r) && sd(n, r, t[r]);
        return n
    },
    Vc = (n, t) => Z5(n, e3(t));
class Ru {
    constructor(t) {
        this.events = new hu, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : Ze.pino(Ze.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || Zf
        })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1
    }
    static async init(t) {
        const r = new Ru(t);
        return await r.initialize(), r
    }
    async request(t, r) {
        const [s, a] = this.validateChain(r);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(s).request({
            request: $o({}, t),
            chainId: `${s}:${a}`,
            topic: this.session.topic
        })
    }
    sendAsync(t, r, s) {
        this.request(t, s).then(a => r(null, a)).catch(a => r(a, void 0))
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: Ct("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let r = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (r >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: s,
                approval: a
            } = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            s && (this.uri = s, this.events.emit("display_uri", s)), await a().then(l => {
                this.session = l, this.namespaces || (this.namespaces = B5(l.namespaces), this.persist("namespaces", this.namespaces))
            }).catch(l => {
                if (l.message !== pp) throw l;
                r++
            })
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(t, r) {
        try {
            if (!this.session) return;
            const [s, a] = this.validateChain(t);
            this.getProvider(s).setDefaultChain(a, r)
        } catch (s) {
            if (!/Please call connect/.test(s.message)) throw s
        }
    }
    async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const r = this.client.pairing.getAll();
        if (ri(r)) {
            for (const s of r) t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${r.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await A5.init({
            logger: this.providerOpts.logger || Zf,
            relayUrl: this.providerOpts.relayUrl || T5,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map(r => gs(r)))];
        kc("client", this.client), kc("events", this.events), kc("disableProviderPing", this.disableProviderPing), t.forEach(r => {
            if (!this.session) return;
            const s = H5(r, this.session),
                a = vp(s),
                l = z5(this.namespaces, this.optionalNamespaces),
                p = Vc($o({}, l[r]), {
                    accounts: s,
                    chains: a
                });
            switch (r) {
                case "eip155":
                    this.rpcProviders[r] = new V5({
                        namespace: p
                    });
                    break;
                case "solana":
                    this.rpcProviders[r] = new G5({
                        namespace: p
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[r] = new W5({
                        namespace: p
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[r] = new k5({
                        namespace: p
                    });
                    break;
                case "cip34":
                    this.rpcProviders[r] = new Y5({
                        namespace: p
                    });
                    break;
                case "elrond":
                    this.rpcProviders[r] = new J5({
                        namespace: p
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[r] = new Q5({
                        namespace: p
                    });
                    break
            }
        })
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", t => {
            this.events.emit("session_ping", t)
        }), this.client.on("session_event", t => {
            const {
                params: r
            } = t, {
                event: s
            } = r;
            if (s.name === "accountsChanged") {
                const a = s.data;
                a && ri(a) && this.events.emit("accountsChanged", a.map(K5))
            } else if (s.name === "chainChanged") {
                const a = r.chainId,
                    l = r.event.data,
                    p = gs(a),
                    d = Bc(a) !== Bc(l) ? `${p}:${Bc(l)}` : a;
                this.onChainChanged(d)
            } else this.events.emit(s.name, s.data);
            this.events.emit("session_event", t)
        }), this.client.on("session_update", ({
            topic: t,
            params: r
        }) => {
            var s;
            const {
                namespaces: a
            } = r, l = (s = this.client) == null ? void 0 : s.session.get(t);
            this.session = Vc($o({}, l), {
                namespaces: a
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: t,
                params: r
            })
        }), this.client.on("session_delete", async t => {
            await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Vc($o({}, Ct("USER_DISCONNECTED")), {
                data: t.topic
            }))
        }), this.on(Fi.DEFAULT_CHAIN_CHANGED, t => {
            this.onChainChanged(t, !0)
        })
    }
    getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(t => {
            var r;
            this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t])
        })
    }
    setNamespaces(t) {
        const {
            namespaces: r,
            optionalNamespaces: s,
            sessionProperties: a
        } = t;
        r && Object.keys(r).length && (this.namespaces = r), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = a, this.persist("namespaces", r), this.persist("optionalNamespaces", s)
    }
    validateChain(t) {
        const [r, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, s];
        if (r && !Object.keys(this.namespaces || {}).map(p => gs(p)).includes(r)) throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
        if (r && s) return [r, s];
        const a = gs(Object.keys(this.namespaces)[0]),
            l = this.rpcProviders[a].getDefaultChain();
        return [a, l]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, r = !1) {
        var s;
        if (!this.namespaces) return;
        const [a, l] = this.validateChain(t);
        r || this.getProvider(a).setDefaultChain(l), ((s = this.namespaces[a]) != null ? s : this.namespaces[`${a}:${l}`]).defaultChain = l, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", l)
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, r) {
        this.client.core.storage.setItem(`${ed}/${t}`, r)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${ed}/${t}`)
    }
}
const i3 = Ru,
    n3 = "wc",
    s3 = "ethereum_provider",
    o3 = `${n3}@2:${s3}:`,
    a3 = "https://rpc.walletconnect.com/v1/",
    cu = ["eth_sendTransaction", "personal_sign"],
    c3 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
    uu = ["chainChanged", "accountsChanged"],
    u3 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var h3 = Object.defineProperty,
    l3 = Object.defineProperties,
    f3 = Object.getOwnPropertyDescriptors,
    od = Object.getOwnPropertySymbols,
    d3 = Object.prototype.hasOwnProperty,
    p3 = Object.prototype.propertyIsEnumerable,
    ad = (n, t, r) => t in n ? h3(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[t] = r,
    ys = (n, t) => {
        for (var r in t || (t = {})) d3.call(t, r) && ad(n, r, t[r]);
        if (od)
            for (var r of od(t)) p3.call(t, r) && ad(n, r, t[r]);
        return n
    },
    cd = (n, t) => l3(n, f3(t));

function Vo(n) {
    return Number(n[0].split(":")[1])
}

function Gc(n) {
    return `0x${n.toString(16)}`
}

function g3(n) {
    const {
        chains: t,
        optionalChains: r,
        methods: s,
        optionalMethods: a,
        events: l,
        optionalEvents: p,
        rpcMap: d
    } = n;
    if (!ri(t)) throw new Error("Invalid chains");
    const v = {
            chains: t,
            methods: s || cu,
            events: l || uu,
            rpcMap: ys({}, t.length ? {
                [Vo(t)]: d[Vo(t)]
            } : {})
        },
        b = l == null ? void 0 : l.filter(R => !uu.includes(R)),
        S = s == null ? void 0 : s.filter(R => !cu.includes(R));
    if (!r && !p && !a && !(b != null && b.length) && !(S != null && S.length)) return {
        required: t.length ? v : void 0
    };
    const A = (b == null ? void 0 : b.length) && (S == null ? void 0 : S.length) || !r,
        $ = {
            chains: [...new Set(A ? v.chains.concat(r || []) : r)],
            methods: [...new Set(v.methods.concat(a != null && a.length ? a : c3))],
            events: [...new Set(v.events.concat(p != null && p.length ? p : u3))],
            rpcMap: d
        };
    return {
        required: t.length ? v : void 0,
        optional: r.length ? $ : void 0
    }
}
class Tu {
    constructor() {
        this.events = new Dr.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = o3, this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
    }
    static async init(t) {
        const r = new Tu;
        return await r.initialize(t), r
    }
    async request(t) {
        return await this.signer.request(t, this.formatChainId(this.chainId))
    }
    sendAsync(t, r) {
        this.signer.sendAsync(t, r, this.formatChainId(this.chainId))
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {
            required: r,
            optional: s
        } = g3(this.rpc);
        try {
            const a = await new Promise(async (p, d) => {
                var v;
                this.rpc.showQrModal && ((v = this.modal) == null || v.subscribeModal(b => {
                    !b.open && !this.signer.session && (this.signer.abortPairingAttempt(), d(new Error("Connection request reset. Please try again.")))
                })), await this.signer.connect(cd(ys({
                    namespaces: ys({}, r && {
                        [this.namespace]: r
                    })
                }, s && {
                    optionalNamespaces: {
                        [this.namespace]: s
                    }
                }), {
                    pairingTopic: t == null ? void 0 : t.pairingTopic
                })).then(b => {
                    p(b)
                }).catch(b => {
                    d(new Error(b.message))
                })
            });
            if (!a) return;
            const l = sb(a.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : l), this.setAccounts(l), this.events.emit("connect", {
                chainId: Gc(this.chainId)
            })
        } catch (a) {
            throw this.signer.logger.error(a), a
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", t => {
            const {
                params: r
            } = t, {
                event: s
            } = r;
            s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t)
        }), this.signer.on("chainChanged", t => {
            const r = parseInt(t);
            this.chainId = r, this.events.emit("chainChanged", Gc(this.chainId)), this.persist()
        }), this.signer.on("session_update", t => {
            this.events.emit("session_update", t)
        }), this.signer.on("session_delete", t => {
            this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", cd(ys({}, Ct("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        }), this.signer.on("display_uri", t => {
            var r, s;
            this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (s = this.modal) == null || s.openModal({
                uri: t
            })), this.events.emit("display_uri", t)
        })
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const r = t.filter(s => this.isCompatibleChainId(s)).map(s => this.parseChainId(s));
        r.length && (this.chainId = r[0], this.events.emit("chainChanged", Gc(this.chainId)), this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const r = this.parseChainId(t);
            this.chainId = r, this.switchEthereumChain(r)
        }
    }
    parseAccountId(t) {
        const [r, s, a] = t.split(":");
        return {
            chainId: `${r}:${s}`,
            address: a
        }
    }
    setAccounts(t) {
        this.accounts = t.filter(r => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map(r => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var r, s;
        const a = (r = t == null ? void 0 : t.chains) != null ? r : [],
            l = (s = t == null ? void 0 : t.optionalChains) != null ? s : [],
            p = a.concat(l);
        if (!p.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const d = a.length ? (t == null ? void 0 : t.methods) || cu : [],
            v = a.length ? (t == null ? void 0 : t.events) || uu : [],
            b = (t == null ? void 0 : t.optionalMethods) || [],
            S = (t == null ? void 0 : t.optionalEvents) || [],
            A = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(p, t.projectId),
            $ = (t == null ? void 0 : t.qrModalOptions) || void 0;
        return {
            chains: a == null ? void 0 : a.map(R => this.formatChainId(R)),
            optionalChains: l.map(R => this.formatChainId(R)),
            methods: d,
            events: v,
            optionalMethods: b,
            optionalEvents: S,
            rpcMap: A,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: $,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, r) {
        const s = {};
        return t.forEach(a => {
            s[a] = this.getRpcUrl(a, r)
        }), s
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Vo(this.rpc.chains) : Vo(this.rpc.optionalChains), this.signer = await i3.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: t.disableProviderPing,
                relayUrl: t.relayUrl,
                storageOptions: t.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let r;
            try {
                const {
                    WalletConnectModal: s
                } = await X_(() =>
                    import ("./index-4c55678b.js").then(a => a.i), ["assets/index-4c55678b.js", "assets/index-f2e6e0cc.js", "assets/index-0a8fefd9.css"]);
                r = s
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (r) try {
                this.modal = new r(ys({
                    walletConnectVersion: 2,
                    projectId: this.rpc.projectId,
                    standaloneChains: this.rpc.chains
                }, this.rpc.qrModalOptions))
            } catch (s) {
                throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(t) {
        if (!t) return;
        const {
            chains: r,
            optionalChains: s,
            rpcMap: a
        } = t;
        r && ri(r) && (this.rpc.chains = r.map(l => this.formatChainId(l)), r.forEach(l => {
            this.rpc.rpcMap[l] = (a == null ? void 0 : a[l]) || this.getRpcUrl(l)
        })), s && ri(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map(l => this.formatChainId(l)), s.forEach(l => {
            this.rpc.rpcMap[l] = (a == null ? void 0 : a[l]) || this.getRpcUrl(l)
        }))
    }
    getRpcUrl(t, r) {
        var s;
        return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${a3}?chainId=eip155:${t}&projectId=${r||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session) return;
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
            r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts)
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map(r => this.parseAccount(r))
    }
}
const R3 = Tu;
export {
    R3 as EthereumProvider, u3 as OPTIONAL_EVENTS, c3 as OPTIONAL_METHODS, uu as REQUIRED_EVENTS, cu as REQUIRED_METHODS, Tu as
    default
};