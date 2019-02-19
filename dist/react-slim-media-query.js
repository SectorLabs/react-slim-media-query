!function (e, t) {
    for (var n in t) e[n] = t[n]
}(exports, function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
}([function (e, t) {
    e.exports = require("react")
}, function (e, t) {
    e.exports = require("react-autobind")
}, function (e, t, n) {
    var r = n(3), o = function (e) {
        var t = "", n = Object.keys(e);
        return n.forEach(function (o, i) {
            var u = e[o];
            (function (e) {
                return /[height|width]$/.test(e)
            })(o = r(o)) && "number" == typeof u && (u += "px"), t += !0 === u ? o : !1 === u ? "not " + o : "(" + o + ": " + u + ")", i < n.length - 1 && (t += " and ")
        }), t
    };
    e.exports = function (e) {
        var t = "";
        return "string" == typeof e ? e : e instanceof Array ? (e.forEach(function (n, r) {
            t += o(n), r < e.length - 1 && (t += ", ")
        }), t) : o(e)
    }
}, function (e, t) {
    e.exports = require("string-convert/camel2hyphen")
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0), o = n(1), i = n.n(o), u = n(2), c = n.n(u);

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        for (var n, r = 0; r < t.length; r++) (n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var y = function (e) {
        function t(e) {
            var n;
            (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, t), n = function (e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? s(e) : t
            }(this, l(t).call(this, e)), function (e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(s(n), "mediaQueryList", void 0), i()(s(n));
            var r = e.query, o = (e.initialState, e.children, function (e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(0 <= t.indexOf(n)) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(e, ["query", "initialState", "children"]));
            return n.mediaQueryList = window.matchMedia(r || c()(o)), n.state = {visible: n.mediaQueryList.matches}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(t, r.Component), function (e, t, n) {
            t && a(e.prototype, t)
        }(t, [{
            key: "componentDidMount", value: function () {
                this.mediaQueryList.addListener(this.onChange)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                this.mediaQueryList.removeListener(this.onChange)
            }
        }, {
            key: "onChange", value: function (e) {
                this.setState({visible: e.matches})
            }
        }, {
            key: "render", value: function () {
                var e = this.state.visible, t = this.props.children;
                return e && r.createElement(r.Fragment, null, t)
            }
        }]), t
    }();
    t.default = y
}]));