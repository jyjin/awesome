(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [833],
  {
    6061: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          default: function () {
            return x;
          },
        });
      n(57663);
      var r = n(60404),
        a = n(88986),
        o = n(13887),
        i = n(67294),
        c = n(13135),
        u = n(86371),
        s = n(85893),
        p = {
          border: '1px dashed gray',
          padding: '10px 24px',
          marginBottom: '24px',
          backgroundColor: 'white',
          width: '400px',
          marginRight: 24,
          cursor: 'move',
        },
        d = (t) => {
          var e = t.id,
            n = t.text,
            r = t.index,
            d = t.moveCard,
            f = (0, i.useRef)(null),
            l = (0, c.L)({
              accept: 'ItemTypes.CARD',
              collect(t) {
                return { handlerId: t.getHandlerId() };
              },
              hover(t, e) {
                var n;
                if (f.current) {
                  var a = t.index,
                    o = r;
                  if (a !== o) {
                    var i =
                        null === (n = f.current) || void 0 === n
                          ? void 0
                          : n.getBoundingClientRect(),
                      c = (i.bottom - i.top) / 2,
                      u = e.getClientOffset(),
                      s = u.y - i.top;
                    (a < o && s < c) ||
                      (a > o && s > c) ||
                      (d(a, o), (t.index = o));
                  }
                }
              },
            }),
            y = (0, o.Z)(l, 2),
            h = y[0].handlerId,
            g = y[1],
            x = (0, u.c)({
              type: 'ItemTypes.CARD',
              item: () => ({ id: e, index: r }),
              collect: (t) => ({ isDragging: t.isDragging() }),
            }),
            b = (0, o.Z)(x, 2),
            m = b[0].isDragging,
            v = b[1],
            j = m ? 0 : 1;
          return (
            v(g(f)),
            (0, s.jsx)('div', {
              ref: f,
              style: (0, a.Z)((0, a.Z)({}, p), {}, { opacity: j }),
              'data-handler-id': h,
              children: n,
            })
          );
        },
        f = (n(7145), n(61357)),
        l = n(57865),
        y = [
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
        h = () => {
          var t = { width: '100%' },
            e = { display: 'flex', flexWrap: 'wrap' },
            n = (0, i.useState)('list'),
            c = (0, o.Z)(n, 2),
            u = c[0],
            p = c[1],
            f = (0, i.useState)(y),
            l = (0, o.Z)(f, 2),
            h = l[0],
            g = l[1],
            x = () => {
              p('list' === u ? 'row' : 'list');
            },
            b = (0, i.useCallback)(
              (t, e) => {
                var n = h[t];
                h.splice(t, 1), h.splice(e, 0, n), g([...h]);
              },
              [h],
            ),
            m = (t, e) =>
              (0, s.jsx)(
                d,
                { index: e, id: t.id, text: t.text, moveCard: b },
                t.id,
              ),
            v = 'row' === u ? (0, a.Z)((0, a.Z)({}, t), e) : t;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.Z, {
                type: 'primary',
                onClick: x,
                children:
                  '\u6d4b\u8bd5\u5e03\u5c40\u5bf9\u62d6\u62fd\u7684\u5f71\u54cd',
              }),
              (0, s.jsx)('div', {
                style: v,
                children: h.map((t, e) => m(t, e)),
              }),
            ],
          });
        },
        g = () =>
          (0, s.jsx)('div', {
            className: 'App',
            children: (0, s.jsx)(f.W, {
              backend: l.PD,
              children: (0, s.jsx)(h, {}),
            }),
          }),
        x = g;
    },
    7145: function (t, e, n) {
      'use strict';
      var r = n(34155);
      function a(t) {
        return 'object' !== typeof t || 'toString' in t
          ? t
          : Object.prototype.toString.call(t).slice(8, -1);
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = 'object' === typeof r && !0;
      function i(t, e) {
        if (!t) {
          if (o) throw new Error('Invariant failed');
          throw new Error(e());
        }
      }
      e.invariant = i;
      var c = Object.prototype.hasOwnProperty,
        u = Array.prototype.splice,
        s = Object.prototype.toString;
      function p(t) {
        return s.call(t).slice(8, -1);
      }
      var d =
          Object.assign ||
          function (t, e) {
            return (
              f(e).forEach(function (n) {
                c.call(e, n) && (t[n] = e[n]);
              }),
              t
            );
          },
        f =
          'function' === typeof Object.getOwnPropertySymbols
            ? function (t) {
                return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
              }
            : function (t) {
                return Object.keys(t);
              };
      function l(t) {
        return Array.isArray(t)
          ? d(t.constructor(t.length), t)
          : 'Map' === p(t)
          ? new Map(t)
          : 'Set' === p(t)
          ? new Set(t)
          : t && 'object' === typeof t
          ? d(Object.create(Object.getPrototypeOf(t)), t)
          : t;
      }
      var y = (function () {
        function t() {
          (this.commands = d({}, h)),
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
            var n = this,
              r = 'function' === typeof e ? { $apply: e } : e;
            (Array.isArray(t) && Array.isArray(r)) ||
              i(!Array.isArray(r), function () {
                return 'update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.';
              }),
              i('object' === typeof r && null !== r, function () {
                return (
                  'update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: ' +
                  Object.keys(n.commands).join(', ') +
                  '.'
                );
              });
            var a = t;
            return (
              f(r).forEach(function (e) {
                if (c.call(n.commands, e)) {
                  var o = t === a;
                  (a = n.commands[e](r[e], a, r, t)),
                    o && n.isEquals(a, t) && (a = t);
                } else {
                  var i =
                      'Map' === p(t)
                        ? n.update(t.get(e), r[e])
                        : n.update(t[e], r[e]),
                    u = 'Map' === p(a) ? a.get(e) : a[e];
                  (n.isEquals(i, u) &&
                    ('undefined' !== typeof i || c.call(t, e))) ||
                    (a === t && (a = l(t)),
                    'Map' === p(a) ? a.set(e, i) : (a[e] = i));
                }
              }),
              a
            );
          }),
          t
        );
      })();
      e.Context = y;
      var h = {
          $push: function (t, e, n) {
            return x(e, n, '$push'), t.length ? e.concat(t) : e;
          },
          $unshift: function (t, e, n) {
            return x(e, n, '$unshift'), t.length ? t.concat(e) : e;
          },
          $splice: function (t, e, n, r) {
            return (
              m(e, n),
              t.forEach(function (t) {
                v(t), e === r && t.length && (e = l(r)), u.apply(e, t);
              }),
              e
            );
          },
          $set: function (t, e, n) {
            return $(n), t;
          },
          $toggle: function (t, e) {
            b(t, '$toggle');
            var n = t.length ? l(e) : e;
            return (
              t.forEach(function (t) {
                n[t] = !e[t];
              }),
              n
            );
          },
          $unset: function (t, e, n, r) {
            return (
              b(t, '$unset'),
              t.forEach(function (t) {
                Object.hasOwnProperty.call(e, t) &&
                  (e === r && (e = l(r)), delete e[t]);
              }),
              e
            );
          },
          $add: function (t, e, n, r) {
            return (
              E(e, '$add'),
              b(t, '$add'),
              'Map' === p(e)
                ? t.forEach(function (t) {
                    var n = t[0],
                      a = t[1];
                    e === r && e.get(n) !== a && (e = l(r)), e.set(n, a);
                  })
                : t.forEach(function (t) {
                    e !== r || e.has(t) || (e = l(r)), e.add(t);
                  }),
              e
            );
          },
          $remove: function (t, e, n, r) {
            return (
              E(e, '$remove'),
              b(t, '$remove'),
              t.forEach(function (t) {
                e === r && e.has(t) && (e = l(r)), e.delete(t);
              }),
              e
            );
          },
          $merge: function (t, e, n, r) {
            return (
              w(e, t),
              f(t).forEach(function (n) {
                t[n] !== e[n] && (e === r && (e = l(r)), (e[n] = t[n]));
              }),
              e
            );
          },
          $apply: function (t, e) {
            return j(t), t(e);
          },
        },
        g = new y();
      function x(t, e, n) {
        i(Array.isArray(t), function () {
          return (
            'update(): expected target of ' +
            a(n) +
            ' to be an array; got ' +
            a(t) +
            '.'
          );
        }),
          b(e[n], n);
      }
      function b(t, e) {
        i(Array.isArray(t), function () {
          return (
            'update(): expected spec of ' +
            a(e) +
            ' to be an array; got ' +
            a(t) +
            '. Did you forget to wrap your parameter in an array?'
          );
        });
      }
      function m(t, e) {
        i(Array.isArray(t), function () {
          return 'Expected $splice target to be an array; got ' + a(t);
        }),
          v(e.$splice);
      }
      function v(t) {
        i(Array.isArray(t), function () {
          return (
            'update(): expected spec of $splice to be an array of arrays; got ' +
            a(t) +
            '. Did you forget to wrap your parameters in an array?'
          );
        });
      }
      function j(t) {
        i('function' === typeof t, function () {
          return (
            'update(): expected spec of $apply to be a function; got ' +
            a(t) +
            '.'
          );
        });
      }
      function $(t) {
        i(1 === Object.keys(t).length, function () {
          return 'Cannot have more than one key in an object with $set';
        });
      }
      function w(t, e) {
        i(e && 'object' === typeof e, function () {
          return (
            "update(): $merge expects a spec of type 'object'; got " + a(e)
          );
        }),
          i(t && 'object' === typeof t, function () {
            return (
              "update(): $merge expects a target of type 'object'; got " + a(t)
            );
          });
      }
      function E(t, e) {
        var n = p(t);
        i('Map' === n || 'Set' === n, function () {
          return (
            'update(): ' +
            a(e) +
            ' expects a target of type Set or Map; got ' +
            a(n)
          );
        });
      }
      (e.isEquals = g.update.isEquals),
        (e.extend = g.extend),
        (e.default = g.update),
        (e.default.default = t.exports = d(e.default, e));
    },
  },
]);
