(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [833],
  {
    2491: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return Mt;
          },
        });
      r(57663);
      var n = r(60404),
        o = r(88986),
        i = r(13887),
        a = r(67294),
        u = r(55141),
        c = r(28195),
        f = r(95518);
      function s() {
        var t = (0, a.useContext)(f.L),
          e = t.dragDropManager;
        return (0, c.k)(null != e, 'Expected drag drop context'), e;
      }
      var l = 'undefined' !== typeof window ? a.useLayoutEffect : a.useEffect;
      function p(t) {
        var e = t.accept;
        return (0, a.useMemo)(
          function () {
            return (
              (0, c.k)(null != t.accept, 'accept must be defined'),
              Array.isArray(e) ? e : [e]
            );
          },
          [e],
        );
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function h(t, e, r) {
        return e && y(t.prototype, e), r && y(t, r), t;
      }
      var v = (function () {
        function t(e, r) {
          d(this, t), (this.spec = e), (this.monitor = r);
        }
        return (
          h(t, [
            {
              key: 'canDrop',
              value: function () {
                var t = this.spec,
                  e = this.monitor;
                return !t.canDrop || t.canDrop(e.getItem(), e);
              },
            },
            {
              key: 'hover',
              value: function () {
                var t = this.spec,
                  e = this.monitor;
                t.hover && t.hover(e.getItem(), e);
              },
            },
            {
              key: 'drop',
              value: function () {
                var t = this.spec,
                  e = this.monitor;
                if (t.drop) return t.drop(e.getItem(), e);
              },
            },
          ]),
          t
        );
      })();
      function g(t, e) {
        var r = (0, a.useMemo)(
          function () {
            return new v(t, e);
          },
          [e],
        );
        return (
          (0, a.useEffect)(
            function () {
              r.spec = t;
            },
            [t],
          ),
          r
        );
      }
      function m(t, e) {
        return A(t) || x(t, e) || j(t, e) || b();
      }
      function b() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function j(t, e) {
        if (t) {
          if ('string' === typeof t) return w(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? w(t, e)
              : void 0
          );
        }
      }
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function x(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), e && r.length === e)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              n || null == u['return'] || u['return']();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        }
      }
      function A(t) {
        if (Array.isArray(t)) return t;
      }
      function S(t, e, r) {
        var n = s(),
          o = g(t, e),
          i = p(t);
        l(
          function () {
            var t = (0, u.n)(i, o, n),
              a = m(t, 2),
              c = a[0],
              f = a[1];
            return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
          },
          [
            n,
            e,
            o,
            r,
            i
              .map(function (t) {
                return t.toString();
              })
              .join('|'),
          ],
        );
      }
      function O(t) {
        return I(t) || $(t) || E(t) || k();
      }
      function k() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function E(t, e) {
        if (t) {
          if ('string' === typeof t) return M(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? M(t, e)
              : void 0
          );
        }
      }
      function $(t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      }
      function I(t) {
        if (Array.isArray(t)) return M(t);
      }
      function M(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function C(t, e) {
        var r = O(e || []);
        return (
          null == e && 'function' !== typeof t && r.push(t),
          (0, a.useMemo)(function () {
            return 'function' === typeof t ? t() : t;
          }, r)
        );
      }
      var D = r(60211);
      function T() {
        var t = s();
        return (0, a.useMemo)(
          function () {
            return new D.H(t);
          },
          [t],
        );
      }
      var P = r(79314);
      function R(t) {
        var e = s(),
          r = (0, a.useMemo)(
            function () {
              return new P.Y(e.getBackend());
            },
            [e],
          );
        return (
          l(
            function () {
              (r.dropTargetOptions = t || null), r.reconnect();
            },
            [t],
          ),
          r
        );
      }
      var Z = r(64063),
        q = r.n(Z);
      function H(t, e) {
        return F(t) || Y(t, e) || B(t, e) || U();
      }
      function U() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function B(t, e) {
        if (t) {
          if ('string' === typeof t) return W(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? W(t, e)
              : void 0
          );
        }
      }
      function W(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Y(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), e && r.length === e)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              n || null == u['return'] || u['return']();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        }
      }
      function F(t) {
        if (Array.isArray(t)) return t;
      }
      function L(t, e, r) {
        var n = (0, a.useState)(function () {
            return e(t);
          }),
          o = H(n, 2),
          i = o[0],
          u = o[1],
          c = (0, a.useCallback)(
            function () {
              var n = e(t);
              q()(i, n) || (u(n), r && r());
            },
            [i, t, r],
          );
        return l(c), [i, c];
      }
      function _(t, e) {
        return K(t) || G(t, e) || N(t, e) || J();
      }
      function J() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function N(t, e) {
        if (t) {
          if ('string' === typeof t) return z(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? z(t, e)
              : void 0
          );
        }
      }
      function z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function G(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), e && r.length === e)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              n || null == u['return'] || u['return']();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        }
      }
      function K(t) {
        if (Array.isArray(t)) return t;
      }
      function Q(t, e, r) {
        var n = L(t, e, r),
          o = _(n, 2),
          i = o[0],
          a = o[1];
        return (
          l(
            function () {
              var e = t.getHandlerId();
              if (null != e)
                return t.subscribeToStateChange(a, { handlerIds: [e] });
            },
            [t, a],
          ),
          i
        );
      }
      function V(t, e, r) {
        return Q(
          e,
          t ||
            function () {
              return {};
            },
          function () {
            return r.reconnect();
          },
        );
      }
      function X(t) {
        return (0, a.useMemo)(
          function () {
            return t.hooks.dropTarget();
          },
          [t],
        );
      }
      function tt(t, e) {
        var r = C(t, e),
          n = T(),
          o = R(r.options);
        return S(r, n, o), [V(r.collect, n, o), X(o)];
      }
      function et(t) {
        return (
          (et =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          et(t)
        );
      }
      function rt(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function nt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function ot(t, e, r) {
        return e && nt(t.prototype, e), r && nt(t, r), t;
      }
      var it = (function () {
        function t(e, r, n) {
          rt(this, t),
            (this.spec = e),
            (this.monitor = r),
            (this.connector = n);
        }
        return (
          ot(t, [
            {
              key: 'beginDrag',
              value: function () {
                var t,
                  e = this.spec,
                  r = this.monitor,
                  n = null;
                return (
                  (n =
                    'object' === et(e.item)
                      ? e.item
                      : 'function' === typeof e.item
                      ? e.item(r)
                      : {}),
                  null !== (t = n) && void 0 !== t ? t : null
                );
              },
            },
            {
              key: 'canDrag',
              value: function () {
                var t = this.spec,
                  e = this.monitor;
                return 'boolean' === typeof t.canDrag
                  ? t.canDrag
                  : 'function' !== typeof t.canDrag || t.canDrag(e);
              },
            },
            {
              key: 'isDragging',
              value: function (t, e) {
                var r = this.spec,
                  n = this.monitor,
                  o = r.isDragging;
                return o ? o(n) : e === t.getSourceId();
              },
            },
            {
              key: 'endDrag',
              value: function () {
                var t = this.spec,
                  e = this.monitor,
                  r = this.connector,
                  n = t.end;
                n && n(e.getItem(), e), r.reconnect();
              },
            },
          ]),
          t
        );
      })();
      function at(t, e, r) {
        var n = (0, a.useMemo)(
          function () {
            return new it(t, e, r);
          },
          [e, r],
        );
        return (
          (0, a.useEffect)(
            function () {
              n.spec = t;
            },
            [t],
          ),
          n
        );
      }
      function ut(t) {
        return (0, a.useMemo)(
          function () {
            var e = t.type;
            return (0, c.k)(null != e, 'spec.type must be defined'), e;
          },
          [t],
        );
      }
      function ct(t, e) {
        return dt(t) || pt(t, e) || st(t, e) || ft();
      }
      function ft() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function st(t, e) {
        if (t) {
          if ('string' === typeof t) return lt(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? lt(t, e)
              : void 0
          );
        }
      }
      function lt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function pt(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), e && r.length === e)) break;
          } catch (c) {
            (o = !0), (i = c);
          } finally {
            try {
              n || null == u['return'] || u['return']();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        }
      }
      function dt(t) {
        if (Array.isArray(t)) return t;
      }
      function yt(t, e, r) {
        var n = s(),
          o = at(t, e, r),
          i = ut(t);
        l(
          function () {
            if (null != i) {
              var t = (0, u.w)(i, o, n),
                a = ct(t, 2),
                c = a[0],
                f = a[1];
              return e.receiveHandlerId(c), r.receiveHandlerId(c), f;
            }
          },
          [n, e, r, o, i],
        );
      }
      var ht = r(55701);
      function vt() {
        var t = s();
        return (0, a.useMemo)(
          function () {
            return new ht.p(t);
          },
          [t],
        );
      }
      var gt = r(57503);
      function mt(t, e) {
        var r = s(),
          n = (0, a.useMemo)(
            function () {
              return new gt.x(r.getBackend());
            },
            [r],
          );
        return (
          l(
            function () {
              (n.dragSourceOptions = t || null), n.reconnect();
            },
            [n, t],
          ),
          l(
            function () {
              (n.dragPreviewOptions = e || null), n.reconnect();
            },
            [n, e],
          ),
          n
        );
      }
      function bt(t) {
        return (0, a.useMemo)(
          function () {
            return t.hooks.dragSource();
          },
          [t],
        );
      }
      function jt(t) {
        return (0, a.useMemo)(
          function () {
            return t.hooks.dragPreview();
          },
          [t],
        );
      }
      function wt(t, e) {
        var r = C(t, e);
        (0, c.k)(
          !r.begin,
          'useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)',
        );
        var n = vt(),
          o = mt(r.options, r.previewOptions);
        return yt(r, n, o), [V(r.collect, n, o), bt(o), jt(o)];
      }
      var xt = r(85893),
        At = {
          border: '1px dashed gray',
          padding: '10px 24px',
          marginBottom: '24px',
          backgroundColor: 'white',
          width: '400px',
          marginRight: 24,
          cursor: 'move',
        },
        St = (t) => {
          var e = t.id,
            r = t.text,
            n = t.index,
            u = t.moveCard,
            c = (0, a.useRef)(null),
            f = tt({
              accept: 'ItemTypes.CARD',
              collect(t) {
                return { handlerId: t.getHandlerId() };
              },
              hover(t, e) {
                var r;
                if (c.current) {
                  var o = t.index,
                    i = n;
                  if (o !== i) {
                    var a =
                        null === (r = c.current) || void 0 === r
                          ? void 0
                          : r.getBoundingClientRect(),
                      f = (a.bottom - a.top) / 2,
                      s = e.getClientOffset(),
                      l = s.y - a.top;
                    (o < i && l < f) ||
                      (o > i && l > f) ||
                      (u(o, i), (t.index = i));
                  }
                }
              },
            }),
            s = (0, i.Z)(f, 2),
            l = s[0].handlerId,
            p = s[1],
            d = wt({
              type: 'ItemTypes.CARD',
              item: () => ({ id: e, index: n }),
              collect: (t) => ({ isDragging: t.isDragging() }),
            }),
            y = (0, i.Z)(d, 2),
            h = y[0].isDragging,
            v = y[1],
            g = h ? 0 : 1;
          return (
            v(p(c)),
            (0, xt.jsx)('div', {
              ref: c,
              style: (0, o.Z)((0, o.Z)({}, At), {}, { opacity: g }),
              'data-handler-id': l,
              children: r,
            })
          );
        },
        Ot = (r(7145), r(61357)),
        kt = r(57865),
        Et = [
          { id: 1, text: 'Write a cool JS library' },
          { id: 2, text: 'Make it generic enough' },
          { id: 3, text: 'Write README' },
          { id: 4, text: 'Create some examples' },
          {
            id: 5,
            text:
              '\u8fd9\u91cc\u7684\u5c0f\u5757\u5757\uff0c\u968f\u4fbf\u62d6\u62fd',
          },
          { id: 6, text: '???' },
          { id: 7, text: 'PROFIT' },
        ],
        $t = () => {
          var t = { width: '100%' },
            e = { display: 'flex', flexWrap: 'wrap' },
            r = (0, a.useState)('list'),
            u = (0, i.Z)(r, 2),
            c = u[0],
            f = u[1],
            s = (0, a.useState)(Et),
            l = (0, i.Z)(s, 2),
            p = l[0],
            d = l[1],
            y = () => {
              f('list' === c ? 'row' : 'list');
            },
            h = (0, a.useCallback)(
              (t, e) => {
                var r = p[t];
                p.splice(t, 1), p.splice(e, 0, r), d([...p]);
              },
              [p],
            ),
            v = (t, e) =>
              (0, xt.jsx)(
                St,
                { index: e, id: t.id, text: t.text, moveCard: h },
                t.id,
              ),
            g = 'row' === c ? (0, o.Z)((0, o.Z)({}, t), e) : t;
          return (0, xt.jsxs)(xt.Fragment, {
            children: [
              (0, xt.jsx)(n.Z, {
                type: 'primary',
                onClick: y,
                children:
                  '\u6d4b\u8bd5\u5e03\u5c40\u5bf9\u62d6\u62fd\u7684\u5f71\u54cd',
              }),
              (0, xt.jsx)('div', {
                style: g,
                children: p.map((t, e) => v(t, e)),
              }),
            ],
          });
        },
        It = () =>
          (0, xt.jsx)('div', {
            className: 'App',
            children: (0, xt.jsxs)(Ot.W, {
              backend: kt.PD,
              children: [
                (0, xt.jsx)('h1', {
                  children: 'React-Dnd\u62d6\u62fd\u6392\u5e8f\u6f14\u793a',
                }),
                (0, xt.jsx)($t, {}),
              ],
            }),
          }),
        Mt = It;
    },
    64063: function (t) {
      'use strict';
      t.exports = function t(e, r) {
        if (e === r) return !0;
        if (e && r && 'object' == typeof e && 'object' == typeof r) {
          if (e.constructor !== r.constructor) return !1;
          var n, o, i;
          if (Array.isArray(e)) {
            if (((n = e.length), n != r.length)) return !1;
            for (o = n; 0 !== o--; ) if (!t(e[o], r[o])) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === r.source && e.flags === r.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === r.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === r.toString();
          if (
            ((i = Object.keys(e)), (n = i.length), n !== Object.keys(r).length)
          )
            return !1;
          for (o = n; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
          for (o = n; 0 !== o--; ) {
            var a = i[o];
            if (!t(e[a], r[a])) return !1;
          }
          return !0;
        }
        return e !== e && r !== r;
      };
    },
    7145: function (t, e, r) {
      'use strict';
      var n = r(34155);
      function o(t) {
        return 'object' !== typeof t || 'toString' in t
          ? t
          : Object.prototype.toString.call(t).slice(8, -1);
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = 'object' === typeof n && !0;
      function a(t, e) {
        if (!t) {
          if (i) throw new Error('Invariant failed');
          throw new Error(e());
        }
      }
      e.invariant = a;
      var u = Object.prototype.hasOwnProperty,
        c = Array.prototype.splice,
        f = Object.prototype.toString;
      function s(t) {
        return f.call(t).slice(8, -1);
      }
      var l =
          Object.assign ||
          function (t, e) {
            return (
              p(e).forEach(function (r) {
                u.call(e, r) && (t[r] = e[r]);
              }),
              t
            );
          },
        p =
          'function' === typeof Object.getOwnPropertySymbols
            ? function (t) {
                return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
              }
            : function (t) {
                return Object.keys(t);
              };
      function d(t) {
        return Array.isArray(t)
          ? l(t.constructor(t.length), t)
          : 'Map' === s(t)
          ? new Map(t)
          : 'Set' === s(t)
          ? new Set(t)
          : t && 'object' === typeof t
          ? l(Object.create(Object.getPrototypeOf(t)), t)
          : t;
      }
      var y = (function () {
        function t() {
          (this.commands = l({}, h)),
            (this.update = this.update.bind(this)),
            (this.update.extend = this.extend = this.extend.bind(this)),
            (this.update.isEquals = function (t, e) {
              return t === e;
            }),
            (this.update.newContext = function () {
              return new t().update;
            });
        }
        return (
          Object.defineProperty(t.prototype, 'isEquals', {
            get: function () {
              return this.update.isEquals;
            },
            set: function (t) {
              this.update.isEquals = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.extend = function (t, e) {
            this.commands[t] = e;
          }),
          (t.prototype.update = function (t, e) {
            var r = this,
              n = 'function' === typeof e ? { $apply: e } : e;
            (Array.isArray(t) && Array.isArray(n)) ||
              a(!Array.isArray(n), function () {
                return 'update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.';
              }),
              a('object' === typeof n && null !== n, function () {
                return (
                  'update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: ' +
                  Object.keys(r.commands).join(', ') +
                  '.'
                );
              });
            var o = t;
            return (
              p(n).forEach(function (e) {
                if (u.call(r.commands, e)) {
                  var i = t === o;
                  (o = r.commands[e](n[e], o, n, t)),
                    i && r.isEquals(o, t) && (o = t);
                } else {
                  var a =
                      'Map' === s(t)
                        ? r.update(t.get(e), n[e])
                        : r.update(t[e], n[e]),
                    c = 'Map' === s(o) ? o.get(e) : o[e];
                  (r.isEquals(a, c) &&
                    ('undefined' !== typeof a || u.call(t, e))) ||
                    (o === t && (o = d(t)),
                    'Map' === s(o) ? o.set(e, a) : (o[e] = a));
                }
              }),
              o
            );
          }),
          t
        );
      })();
      e.Context = y;
      var h = {
          $push: function (t, e, r) {
            return g(e, r, '$push'), t.length ? e.concat(t) : e;
          },
          $unshift: function (t, e, r) {
            return g(e, r, '$unshift'), t.length ? t.concat(e) : e;
          },
          $splice: function (t, e, r, n) {
            return (
              b(e, r),
              t.forEach(function (t) {
                j(t), e === n && t.length && (e = d(n)), c.apply(e, t);
              }),
              e
            );
          },
          $set: function (t, e, r) {
            return x(r), t;
          },
          $toggle: function (t, e) {
            m(t, '$toggle');
            var r = t.length ? d(e) : e;
            return (
              t.forEach(function (t) {
                r[t] = !e[t];
              }),
              r
            );
          },
          $unset: function (t, e, r, n) {
            return (
              m(t, '$unset'),
              t.forEach(function (t) {
                Object.hasOwnProperty.call(e, t) &&
                  (e === n && (e = d(n)), delete e[t]);
              }),
              e
            );
          },
          $add: function (t, e, r, n) {
            return (
              S(e, '$add'),
              m(t, '$add'),
              'Map' === s(e)
                ? t.forEach(function (t) {
                    var r = t[0],
                      o = t[1];
                    e === n && e.get(r) !== o && (e = d(n)), e.set(r, o);
                  })
                : t.forEach(function (t) {
                    e !== n || e.has(t) || (e = d(n)), e.add(t);
                  }),
              e
            );
          },
          $remove: function (t, e, r, n) {
            return (
              S(e, '$remove'),
              m(t, '$remove'),
              t.forEach(function (t) {
                e === n && e.has(t) && (e = d(n)), e.delete(t);
              }),
              e
            );
          },
          $merge: function (t, e, r, n) {
            return (
              A(e, t),
              p(t).forEach(function (r) {
                t[r] !== e[r] && (e === n && (e = d(n)), (e[r] = t[r]));
              }),
              e
            );
          },
          $apply: function (t, e) {
            return w(t), t(e);
          },
        },
        v = new y();
      function g(t, e, r) {
        a(Array.isArray(t), function () {
          return (
            'update(): expected target of ' +
            o(r) +
            ' to be an array; got ' +
            o(t) +
            '.'
          );
        }),
          m(e[r], r);
      }
      function m(t, e) {
        a(Array.isArray(t), function () {
          return (
            'update(): expected spec of ' +
            o(e) +
            ' to be an array; got ' +
            o(t) +
            '. Did you forget to wrap your parameter in an array?'
          );
        });
      }
      function b(t, e) {
        a(Array.isArray(t), function () {
          return 'Expected $splice target to be an array; got ' + o(t);
        }),
          j(e.$splice);
      }
      function j(t) {
        a(Array.isArray(t), function () {
          return (
            'update(): expected spec of $splice to be an array of arrays; got ' +
            o(t) +
            '. Did you forget to wrap your parameters in an array?'
          );
        });
      }
      function w(t) {
        a('function' === typeof t, function () {
          return (
            'update(): expected spec of $apply to be a function; got ' +
            o(t) +
            '.'
          );
        });
      }
      function x(t) {
        a(1 === Object.keys(t).length, function () {
          return 'Cannot have more than one key in an object with $set';
        });
      }
      function A(t, e) {
        a(e && 'object' === typeof e, function () {
          return (
            "update(): $merge expects a spec of type 'object'; got " + o(e)
          );
        }),
          a(t && 'object' === typeof t, function () {
            return (
              "update(): $merge expects a target of type 'object'; got " + o(t)
            );
          });
      }
      function S(t, e) {
        var r = s(t);
        a('Map' === r || 'Set' === r, function () {
          return (
            'update(): ' +
            o(e) +
            ' expects a target of type Set or Map; got ' +
            o(r)
          );
        });
      }
      (e.isEquals = v.update.isEquals),
        (e.extend = v.extend),
        (e.default = v.update),
        (e.default.default = t.exports = l(e.default, e));
    },
  },
]);
