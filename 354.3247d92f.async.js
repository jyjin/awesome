(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [354],
  {
    61357: function (e, t, r) {
      'use strict';
      r.d(t, {
        W: function () {
          return Rt;
        },
      });
      var n = r(85893),
        o = r(67294),
        i = r(28195),
        a = 'dnd-core/INIT_COORDS',
        u = 'dnd-core/BEGIN_DRAG',
        s = 'dnd-core/PUBLISH_DRAG_SOURCE',
        c = 'dnd-core/HOVER',
        f = 'dnd-core/DROP',
        l = 'dnd-core/END_DRAG';
      function d(e, t) {
        return {
          type: a,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      function g(e) {
        return (
          (g =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          g(e)
        );
      }
      function v(e, t, r) {
        return t.split('.').reduce(function (e, t) {
          return e && e[t] ? e[t] : r || null;
        }, e);
      }
      function h(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function p(e) {
        return 'object' === g(e);
      }
      function y(e, t) {
        var r = new Map(),
          n = function (e) {
            r.set(e, r.has(e) ? r.get(e) + 1 : 1);
          };
        e.forEach(n), t.forEach(n);
        var o = [];
        return (
          r.forEach(function (e, t) {
            1 === e && o.push(t);
          }),
          o
        );
      }
      function b(e, t) {
        return e.filter(function (e) {
          return t.indexOf(e) > -1;
        });
      }
      var m = {
        type: a,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function O(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { publishSource: !0 },
            n = r.publishSource,
            o = void 0 === n || n,
            i = r.clientOffset,
            a = r.getSourceClientOffset,
            s = e.getMonitor(),
            c = e.getRegistry();
          e.dispatch(d(i)), D(t, s, c);
          var f = w(t, s);
          if (null !== f) {
            var l = null;
            if (i) {
              if (!a) throw new Error('getSourceClientOffset must be defined');
              S(a), (l = a(f));
            }
            e.dispatch(d(i, l));
            var g = c.getSource(f),
              v = g.beginDrag(s, f);
            if (null != v) {
              E(v), c.pinSource(f);
              var h = c.getSourceType(f);
              return {
                type: u,
                payload: {
                  itemType: h,
                  item: v,
                  sourceId: f,
                  clientOffset: i || null,
                  sourceClientOffset: l || null,
                  isSourcePublic: !!o,
                },
              };
            }
          } else e.dispatch(m);
        };
      }
      function D(e, t, r) {
        (0, i.k)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
          e.forEach(function (e) {
            (0, i.k)(r.getSource(e), 'Expected sourceIds to be registered.');
          });
      }
      function S(e) {
        (0, i.k)(
          'function' === typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.',
        );
      }
      function E(e) {
        (0, i.k)(p(e), 'Item must be an object.');
      }
      function w(e, t) {
        for (var r = null, n = e.length - 1; n >= 0; n--)
          if (t.canDragSource(e[n])) {
            r = e[n];
            break;
          }
        return r;
      }
      function T(e) {
        return function () {
          var t = e.getMonitor();
          if (t.isDragging()) return { type: s };
        };
      }
      function I(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }
      function k(e) {
        return function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.clientOffset;
          C(t);
          var o = t.slice(0),
            i = e.getMonitor(),
            a = e.getRegistry();
          P(o, i, a);
          var u = i.getItemType();
          return (
            N(o, a, u),
            j(o, i, a),
            { type: c, payload: { targetIds: o, clientOffset: n || null } }
          );
        };
      }
      function C(e) {
        (0, i.k)(Array.isArray(e), 'Expected targetIds to be an array.');
      }
      function P(e, t, r) {
        (0, i.k)(t.isDragging(), 'Cannot call hover while not dragging.'),
          (0, i.k)(!t.didDrop(), 'Cannot call hover after drop.');
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (0, i.k)(
            e.lastIndexOf(o) === n,
            'Expected targetIds to be unique in the passed array.',
          );
          var a = r.getTarget(o);
          (0, i.k)(a, 'Expected targetIds to be registered.');
        }
      }
      function N(e, t, r) {
        for (var n = e.length - 1; n >= 0; n--) {
          var o = e[n],
            i = t.getTargetType(o);
          I(i, r) || e.splice(n, 1);
        }
      }
      function j(e, t, r) {
        e.forEach(function (e) {
          var n = r.getTarget(e);
          n.hover(t, e);
        });
      }
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                _(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function _(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function A(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.getMonitor(),
            n = e.getRegistry();
          L(r);
          var o = H(r);
          o.forEach(function (o, i) {
            var a = M(o, i, n, r),
              u = { type: f, payload: { dropResult: R(R({}, t), a) } };
            e.dispatch(u);
          });
        };
      }
      function L(e) {
        (0, i.k)(e.isDragging(), 'Cannot call drop while not dragging.'),
          (0, i.k)(
            !e.didDrop(),
            'Cannot call drop twice during one drag operation.',
          );
      }
      function M(e, t, r, n) {
        var o = r.getTarget(e),
          i = o ? o.drop(n, e) : void 0;
        return (
          U(i),
          'undefined' === typeof i && (i = 0 === t ? {} : n.getDropResult()),
          i
        );
      }
      function U(e) {
        (0, i.k)(
          'undefined' === typeof e || p(e),
          'Drop result must either be an object or undefined.',
        );
      }
      function H(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }
      function B(e) {
        return function () {
          var t = e.getMonitor(),
            r = e.getRegistry();
          F(t);
          var n = t.getSourceId();
          if (null != n) {
            var o = r.getSource(n, !0);
            o.endDrag(t, n), r.unpinSource();
          }
          return { type: l };
        };
      }
      function F(e) {
        (0, i.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
      }
      function G(e) {
        return {
          beginDrag: O(e),
          publishDragSource: T(e),
          hover: k(e),
          drop: A(e),
          endDrag: B(e),
        };
      }
      function X(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function W(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function K(e, t, r) {
        return t && W(e.prototype, t), r && W(e, r), e;
      }
      var V = (function () {
        function e(t, r) {
          var n = this;
          X(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = n.store.getState().refCount > 0;
              n.backend &&
                (e && !n.isSetUp
                  ? (n.backend.setup(), (n.isSetUp = !0))
                  : !e &&
                    n.isSetUp &&
                    (n.backend.teardown(), (n.isSetUp = !1)));
            }),
            (this.store = t),
            (this.monitor = r),
            t.subscribe(this.handleRefCountChange);
        }
        return (
          K(e, [
            {
              key: 'receiveBackend',
              value: function (e) {
                this.backend = e;
              },
            },
            {
              key: 'getMonitor',
              value: function () {
                return this.monitor;
              },
            },
            {
              key: 'getBackend',
              value: function () {
                return this.backend;
              },
            },
            {
              key: 'getRegistry',
              value: function () {
                return this.monitor.registry;
              },
            },
            {
              key: 'getActions',
              value: function () {
                var e = this,
                  t = this.store.dispatch;
                function r(r) {
                  return function () {
                    for (
                      var n = arguments.length, o = new Array(n), i = 0;
                      i < n;
                      i++
                    )
                      o[i] = arguments[i];
                    var a = r.apply(e, o);
                    'undefined' !== typeof a && t(a);
                  };
                }
                var n = G(this);
                return Object.keys(n).reduce(function (e, t) {
                  var o = n[t];
                  return (e[t] = r(o)), e;
                }, {});
              },
            },
            {
              key: 'dispatch',
              value: function (e) {
                this.store.dispatch(e);
              },
            },
          ]),
          e
        );
      })();
      function Y(e) {
        return (
          'Minified Redux error #' +
          e +
          '; visit https://redux.js.org/Errors?code=' +
          e +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var z = (function () {
          return (
            ('function' === typeof Symbol && Symbol.observable) ||
            '@@observable'
          );
        })(),
        q = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        $ = {
          INIT: '@@redux/INIT' + q(),
          REPLACE: '@@redux/REPLACE' + q(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + q();
          },
        };
      function J(e) {
        if ('object' !== typeof e || null === e) return !1;
        var t = e;
        while (null !== Object.getPrototypeOf(t)) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function Q(e, t, r) {
        var n;
        if (
          ('function' === typeof t && 'function' === typeof r) ||
          ('function' === typeof r && 'function' === typeof arguments[3])
        )
          throw new Error(Y(0));
        if (
          ('function' === typeof t &&
            'undefined' === typeof r &&
            ((r = t), (t = void 0)),
          'undefined' !== typeof r)
        ) {
          if ('function' !== typeof r) throw new Error(Y(1));
          return r(Q)(e, t);
        }
        if ('function' !== typeof e) throw new Error(Y(2));
        var o = e,
          i = t,
          a = [],
          u = a,
          s = !1;
        function c() {
          u === a && (u = a.slice());
        }
        function f() {
          if (s) throw new Error(Y(3));
          return i;
        }
        function l(e) {
          if ('function' !== typeof e) throw new Error(Y(4));
          if (s) throw new Error(Y(5));
          var t = !0;
          return (
            c(),
            u.push(e),
            function () {
              if (t) {
                if (s) throw new Error(Y(6));
                (t = !1), c();
                var r = u.indexOf(e);
                u.splice(r, 1), (a = null);
              }
            }
          );
        }
        function d(e) {
          if (!J(e)) throw new Error(Y(7));
          if ('undefined' === typeof e.type) throw new Error(Y(8));
          if (s) throw new Error(Y(9));
          try {
            (s = !0), (i = o(i, e));
          } finally {
            s = !1;
          }
          for (var t = (a = u), r = 0; r < t.length; r++) {
            var n = t[r];
            n();
          }
          return e;
        }
        function g(e) {
          if ('function' !== typeof e) throw new Error(Y(10));
          (o = e), d({ type: $.REPLACE });
        }
        function v() {
          var e,
            t = l;
          return (
            (e = {
              subscribe: function (e) {
                if ('object' !== typeof e || null === e) throw new Error(Y(11));
                function r() {
                  e.next && e.next(f());
                }
                r();
                var n = t(r);
                return { unsubscribe: n };
              },
            }),
            (e[z] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: $.INIT }),
          (n = { dispatch: d, subscribe: l, getState: f, replaceReducer: g }),
          (n[z] = v),
          n
        );
      }
      var Z = function (e, t) {
        return e === t;
      };
      function ee(e, t) {
        return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
      }
      function te(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
        return !0;
      }
      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(r), !0).forEach(function (t) {
                oe(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : re(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function oe(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var ie = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };
      function ae() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = t.payload;
        switch (t.type) {
          case a:
          case u:
            return {
              initialSourceClientOffset: r.sourceClientOffset,
              initialClientOffset: r.clientOffset,
              clientOffset: r.clientOffset,
            };
          case c:
            return ee(e.clientOffset, r.clientOffset)
              ? e
              : ne(ne({}, e), {}, { clientOffset: r.clientOffset });
          case l:
          case f:
            return ie;
          default:
            return e;
        }
      }
      var ue = 'dnd-core/ADD_SOURCE',
        se = 'dnd-core/ADD_TARGET',
        ce = 'dnd-core/REMOVE_SOURCE',
        fe = 'dnd-core/REMOVE_TARGET';
      function le(e) {
        return { type: ue, payload: { sourceId: e } };
      }
      function de(e) {
        return { type: se, payload: { targetId: e } };
      }
      function ge(e) {
        return { type: ce, payload: { sourceId: e } };
      }
      function ve(e) {
        return { type: fe, payload: { targetId: e } };
      }
      function he(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                ye(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function ye(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var be = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
      function me() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = t.payload;
        switch (t.type) {
          case u:
            return pe(
              pe({}, e),
              {},
              {
                itemType: r.itemType,
                item: r.item,
                sourceId: r.sourceId,
                isSourcePublic: r.isSourcePublic,
                dropResult: null,
                didDrop: !1,
              },
            );
          case s:
            return pe(pe({}, e), {}, { isSourcePublic: !0 });
          case c:
            return pe(pe({}, e), {}, { targetIds: r.targetIds });
          case fe:
            return -1 === e.targetIds.indexOf(r.targetId)
              ? e
              : pe(pe({}, e), {}, { targetIds: h(e.targetIds, r.targetId) });
          case f:
            return pe(
              pe({}, e),
              {},
              { dropResult: r.dropResult, didDrop: !0, targetIds: [] },
            );
          case l:
            return pe(
              pe({}, e),
              {},
              {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: [],
              },
            );
          default:
            return e;
        }
      }
      function Oe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case ue:
          case se:
            return e + 1;
          case ce:
          case fe:
            return e - 1;
          default:
            return e;
        }
      }
      var De = [],
        Se = [];
      function Ee(e, t) {
        if (e === De) return !1;
        if (e === Se || 'undefined' === typeof t) return !0;
        var r = b(t, e);
        return r.length > 0;
      }
      function we() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case c:
            break;
          case ue:
          case se:
          case fe:
          case ce:
            return De;
          case u:
          case s:
          case l:
          case f:
          default:
            return Se;
        }
        var t = e.payload,
          r = t.targetIds,
          n = void 0 === r ? [] : r,
          o = t.prevTargetIds,
          i = void 0 === o ? [] : o,
          a = y(n, i),
          d = a.length > 0 || !te(n, i);
        if (!d) return De;
        var g = i[i.length - 1],
          v = n[n.length - 1];
        return g !== v && (g && a.push(g), v && a.push(v)), a;
      }
      function Te() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return e + 1;
      }
      function Ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(r), !0).forEach(function (t) {
                Ce(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function Ce(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Pe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: we(e.dirtyHandlerIds, {
            type: t.type,
            payload: ke(
              ke({}, t.payload),
              {},
              { prevTargetIds: v(e, 'dragOperation.targetIds', []) },
            ),
          }),
          dragOffset: ae(e.dragOffset, t),
          refCount: Oe(e.refCount, t),
          dragOperation: me(e.dragOperation, t),
          stateId: Te(e.stateId),
        };
      }
      function Ne(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function je(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function xe(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset,
          n = e.initialSourceClientOffset;
        return t && r && n ? je(Ne(t, n), r) : null;
      }
      function Re(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset;
        return t && r ? je(t, r) : null;
      }
      function _e(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Ae(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Le(e, t, r) {
        return t && Ae(e.prototype, t), r && Ae(e, r), e;
      }
      (De.__IS_NONE__ = !0), (Se.__IS_ALL__ = !0);
      var Me,
        Ue = (function () {
          function e(t, r) {
            _e(this, e), (this.store = t), (this.registry = r);
          }
          return (
            Le(e, [
              {
                key: 'subscribeToStateChange',
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { handlerIds: void 0 },
                    n = r.handlerIds;
                  (0, i.k)(
                    'function' === typeof e,
                    'listener must be a function.',
                  ),
                    (0, i.k)(
                      'undefined' === typeof n || Array.isArray(n),
                      'handlerIds, when specified, must be an array of strings.',
                    );
                  var o = this.store.getState().stateId,
                    a = function () {
                      var r = t.store.getState(),
                        i = r.stateId;
                      try {
                        var a =
                          i === o || (i === o + 1 && !Ee(r.dirtyHandlerIds, n));
                        a || e();
                      } finally {
                        o = i;
                      }
                    };
                  return this.store.subscribe(a);
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  var t = this;
                  (0, i.k)(
                    'function' === typeof e,
                    'listener must be a function.',
                  );
                  var r = this.store.getState().dragOffset,
                    n = function () {
                      var n = t.store.getState().dragOffset;
                      n !== r && ((r = n), e());
                    };
                  return this.store.subscribe(n);
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    (0, i.k)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  if (
                    ((0, i.k)(
                      t,
                      'Expected to find a valid target. targetId='.concat(e),
                    ),
                    !this.isDragging() || this.didDrop())
                  )
                    return !1;
                  var r = this.registry.getTargetType(e),
                    n = this.getItemType();
                  return I(r, n) && t.canDrop(this, e);
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  return Boolean(this.getItemType());
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  if (
                    ((0, i.k)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e),
                    ),
                    !this.isDragging() || !this.isSourcePublic())
                  )
                    return !1;
                  var r = this.registry.getSourceType(e),
                    n = this.getItemType();
                  return r === n && t.isDragging(this, e);
                },
              },
              {
                key: 'isOverTarget',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 };
                  if (!e) return !1;
                  var r = t.shallow;
                  if (!this.isDragging()) return !1;
                  var n = this.registry.getTargetType(e),
                    o = this.getItemType();
                  if (o && !I(n, o)) return !1;
                  var i = this.getTargetIds();
                  if (!i.length) return !1;
                  var a = i.indexOf(e);
                  return r ? a === i.length - 1 : a > -1;
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic,
                  );
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return xe(this.store.getState().dragOffset);
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return Re(this.store.getState().dragOffset);
                },
              },
            ]),
            e
          );
        })(),
        He = 0;
      function Be() {
        return He++;
      }
      function Fe(e) {
        return (
          (Fe =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Fe(e)
        );
      }
      function Ge(e) {
        (0, i.k)(
          'function' === typeof e.canDrag,
          'Expected canDrag to be a function.',
        ),
          (0, i.k)(
            'function' === typeof e.beginDrag,
            'Expected beginDrag to be a function.',
          ),
          (0, i.k)(
            'function' === typeof e.endDrag,
            'Expected endDrag to be a function.',
          );
      }
      function Xe(e) {
        (0, i.k)(
          'function' === typeof e.canDrop,
          'Expected canDrop to be a function.',
        ),
          (0, i.k)(
            'function' === typeof e.hover,
            'Expected hover to be a function.',
          ),
          (0, i.k)(
            'function' === typeof e.drop,
            'Expected beginDrag to be a function.',
          );
      }
      function We(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return We(e, !1);
            })
          : (0, i.k)(
              'string' === typeof e || 'symbol' === Fe(e),
              t
                ? 'Type can only be a string, a symbol, or an array of either.'
                : 'Type can only be a string or a symbol.',
            );
      }
      function Ke(e) {
        Ye.length || (Ve(), !0), (Ye[Ye.length] = e);
      }
      (function (e) {
        (e['SOURCE'] = 'SOURCE'), (e['TARGET'] = 'TARGET');
      })(Me || (Me = {}));
      var Ve,
        Ye = [],
        ze = 0,
        qe = 1024;
      function $e() {
        while (ze < Ye.length) {
          var e = ze;
          if (((ze += 1), Ye[e].call(), ze > qe)) {
            for (var t = 0, r = Ye.length - ze; t < r; t++) Ye[t] = Ye[t + ze];
            (Ye.length -= ze), (ze = 0);
          }
        }
        (Ye.length = 0), (ze = 0), !1;
      }
      var Je = 'undefined' !== typeof r.g ? r.g : self,
        Qe = Je.MutationObserver || Je.WebKitMutationObserver;
      function Ze(e) {
        var t = 1,
          r = new Qe(e),
          n = document.createTextNode('');
        return (
          r.observe(n, { characterData: !0 }),
          function () {
            (t = -t), (n.data = t);
          }
        );
      }
      function et(e) {
        return function () {
          var t = setTimeout(n, 0),
            r = setInterval(n, 50);
          function n() {
            clearTimeout(t), clearInterval(r), e();
          }
        };
      }
      (Ve = 'function' === typeof Qe ? Ze($e) : et($e)),
        (Ke.requestFlush = Ve),
        (Ke.makeRequestCallFromTimer = et);
      var tt = [],
        rt = [],
        nt = Ke.makeRequestCallFromTimer(ot);
      function ot() {
        if (rt.length) throw rt.shift();
      }
      function it(e) {
        var t;
        (t = tt.length ? tt.pop() : new at()), (t.task = e), Ke(t);
      }
      var at = (function () {
        function e() {}
        return (
          (e.prototype.call = function () {
            try {
              this.task.call();
            } catch (e) {
              it.onerror ? it.onerror(e) : (rt.push(e), nt());
            } finally {
              (this.task = null), (tt[tt.length] = this);
            }
          }),
          e
        );
      })();
      function ut(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function st(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ct(e, t, r) {
        return t && st(e.prototype, t), r && st(e, r), e;
      }
      function ft(e, t) {
        return ht(e) || vt(e, t) || dt(e, t) || lt();
      }
      function lt() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function dt(e, t) {
        if (e) {
          if ('string' === typeof e) return gt(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? gt(e, t)
              : void 0
          );
        }
      }
      function gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function vt(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), t && r.length === t)) break;
          } catch (s) {
            (o = !0), (i = s);
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
      function ht(e) {
        if (Array.isArray(e)) return e;
      }
      function pt(e) {
        var t = Be().toString();
        switch (e) {
          case Me.SOURCE:
            return 'S'.concat(t);
          case Me.TARGET:
            return 'T'.concat(t);
          default:
            throw new Error('Unknown Handler Role: '.concat(e));
        }
      }
      function yt(e) {
        switch (e[0]) {
          case 'S':
            return Me.SOURCE;
          case 'T':
            return Me.TARGET;
          default:
            (0, i.k)(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }
      function bt(e, t) {
        var r = e.entries(),
          n = !1;
        do {
          var o = r.next(),
            i = o.done,
            a = ft(o.value, 2),
            u = a[1];
          if (u === t) return !0;
          n = !!i;
        } while (!n);
        return !1;
      }
      var mt = (function () {
        function e(t) {
          ut(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        return (
          ct(e, [
            {
              key: 'addSource',
              value: function (e, t) {
                We(e), Ge(t);
                var r = this.addHandler(Me.SOURCE, e, t);
                return this.store.dispatch(le(r)), r;
              },
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                We(e, !0), Xe(t);
                var r = this.addHandler(Me.TARGET, e, t);
                return this.store.dispatch(de(r)), r;
              },
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return bt(this.dragSources, e) || bt(this.dropTargets, e);
              },
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.');
                var r = t && e === this.pinnedSourceId,
                  n = r ? this.pinnedSource : this.dragSources.get(e);
                return n;
              },
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'isSourceId',
              value: function (e) {
                var t = yt(e);
                return t === Me.SOURCE;
              },
            },
            {
              key: 'isTargetId',
              value: function (e) {
                var t = yt(e);
                return t === Me.TARGET;
              },
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t = this;
                (0, i.k)(this.getSource(e), 'Expected an existing source.'),
                  this.store.dispatch(ge(e)),
                  it(function () {
                    t.dragSources['delete'](e), t.types['delete'](e);
                  });
              },
            },
            {
              key: 'removeTarget',
              value: function (e) {
                (0, i.k)(this.getTarget(e), 'Expected an existing target.'),
                  this.store.dispatch(ve(e)),
                  this.dropTargets['delete'](e),
                  this.types['delete'](e);
              },
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                (0, i.k)(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: 'unpinSource',
              value: function () {
                (0, i.k)(this.pinnedSource, 'No source is pinned at the time.'),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: 'addHandler',
              value: function (e, t, r) {
                var n = pt(e);
                return (
                  this.types.set(n, t),
                  e === Me.SOURCE
                    ? this.dragSources.set(n, r)
                    : e === Me.TARGET && this.dropTargets.set(n, r),
                  n
                );
              },
            },
          ]),
          e
        );
      })();
      function Ot(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = Dt(n),
          i = new Ue(o, new mt(o)),
          a = new V(o, i),
          u = e(a, t, r);
        return a.receiveBackend(u), a;
      }
      function Dt(e) {
        var t =
          'undefined' !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return Q(Pe, e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' }));
      }
      var St = r(95518);
      function Et(e, t) {
        return Ct(e) || kt(e, t) || Tt(e, t) || wt();
      }
      function wt() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function Tt(e, t) {
        if (e) {
          if ('string' === typeof e) return It(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? It(e, t)
              : void 0
          );
        }
      }
      function It(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function kt(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = e[Symbol.iterator]();
              !(n = (a = u.next()).done);
              n = !0
            )
              if ((r.push(a.value), t && r.length === t)) break;
          } catch (s) {
            (o = !0), (i = s);
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
      function Ct(e) {
        if (Array.isArray(e)) return e;
      }
      function Pt(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = Nt(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function Nt(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var jt = 0,
        xt = Symbol['for']('__REACT_DND_CONTEXT_INSTANCE__'),
        Rt = (0, o.memo)(function (e) {
          var t = e.children,
            r = Pt(e, ['children']),
            i = _t(r),
            a = Et(i, 2),
            u = a[0],
            s = a[1];
          return (
            (0, o.useEffect)(function () {
              if (s) {
                var e = Lt();
                return (
                  ++jt,
                  function () {
                    0 === --jt && (e[xt] = null);
                  }
                );
              }
            }, []),
            (0, n.jsx)(
              St.L.Provider,
              Object.assign({ value: u }, { children: t }),
              void 0,
            )
          );
        });
      function _t(e) {
        if ('manager' in e) {
          var t = { dragDropManager: e.manager };
          return [t, !1];
        }
        var r = At(e.backend, e.context, e.options, e.debugMode),
          n = !e.context;
        return [r, n];
      }
      function At(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Lt(),
          r = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          o = t;
        return o[xt] || (o[xt] = { dragDropManager: Ot(e, t, r, n) }), o[xt];
      }
      function Lt() {
        return 'undefined' !== typeof r.g ? r.g : window;
      }
    },
    57865: function (e, t, r) {
      'use strict';
      r.d(t, {
        PD: function () {
          return z;
        },
      });
      var n = {};
      function o(e) {
        var t = null,
          r = function () {
            return null == t && (t = e()), t;
          };
        return r;
      }
      function i(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function a(e, t) {
        var r = new Set(),
          n = function (e) {
            return r.add(e);
          };
        e.forEach(n), t.forEach(n);
        var o = [];
        return (
          r.forEach(function (e) {
            return o.push(e);
          }),
          o
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t, r) {
        return t && s(e.prototype, t), r && s(e, r), e;
      }
      r.r(n),
        r.d(n, {
          FILE: function () {
            return w;
          },
          HTML: function () {
            return k;
          },
          TEXT: function () {
            return I;
          },
          URL: function () {
            return T;
          },
        });
      var f = (function () {
          function e(t) {
            u(this, e), (this.entered = []), (this.isNodeInDocument = t);
          }
          return (
            c(e, [
              {
                key: 'enter',
                value: function (e) {
                  var t = this,
                    r = this.entered.length,
                    n = function (r) {
                      return (
                        t.isNodeInDocument(r) && (!r.contains || r.contains(e))
                      );
                    };
                  return (
                    (this.entered = a(this.entered.filter(n), [e])),
                    0 === r && this.entered.length > 0
                  );
                },
              },
              {
                key: 'leave',
                value: function (e) {
                  var t = this.entered.length;
                  return (
                    (this.entered = i(
                      this.entered.filter(this.isNodeInDocument),
                      e,
                    )),
                    t > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.entered = [];
                },
              },
            ]),
            e
          );
        })(),
        l = o(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        d = o(function () {
          return Boolean(window.safari);
        });
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function h(e, t, r) {
        return t && v(e.prototype, t), r && v(e, r), e;
      }
      var p = (function () {
          function e(t, r) {
            g(this, e);
            for (var n = t.length, o = [], i = 0; i < n; i++) o.push(i);
            o.sort(function (e, r) {
              return t[e] < t[r] ? -1 : 1;
            });
            for (var a, u, s = [], c = [], f = [], l = 0; l < n - 1; l++)
              (a = t[l + 1] - t[l]),
                (u = r[l + 1] - r[l]),
                c.push(a),
                s.push(u),
                f.push(u / a);
            for (var d = [f[0]], v = 0; v < c.length - 1; v++) {
              var h = f[v],
                p = f[v + 1];
              if (h * p <= 0) d.push(0);
              else {
                a = c[v];
                var y = c[v + 1],
                  b = a + y;
                d.push((3 * b) / ((b + y) / h + (b + a) / p));
              }
            }
            d.push(f[f.length - 1]);
            for (var m, O = [], D = [], S = 0; S < d.length - 1; S++) {
              m = f[S];
              var E = d[S],
                w = 1 / c[S],
                T = E + d[S + 1] - m - m;
              O.push((m - E - T) * w), D.push(T * w * w);
            }
            (this.xs = t),
              (this.ys = r),
              (this.c1s = d),
              (this.c2s = O),
              (this.c3s = D);
          }
          return (
            h(e, [
              {
                key: 'interpolate',
                value: function (e) {
                  var t = this.xs,
                    r = this.ys,
                    n = this.c1s,
                    o = this.c2s,
                    i = this.c3s,
                    a = t.length - 1;
                  if (e === t[a]) return r[a];
                  var u,
                    s = 0,
                    c = i.length - 1;
                  while (s <= c) {
                    u = Math.floor(0.5 * (s + c));
                    var f = t[u];
                    if (f < e) s = u + 1;
                    else {
                      if (!(f > e)) return r[u];
                      c = u - 1;
                    }
                  }
                  a = Math.max(0, c);
                  var l = e - t[a],
                    d = l * l;
                  return r[a] + n[a] * l + o[a] * d + i[a] * l * d;
                },
              },
            ]),
            e
          );
        })(),
        y = 1;
      function b(e) {
        var t = e.nodeType === y ? e : e.parentElement;
        if (!t) return null;
        var r = t.getBoundingClientRect(),
          n = r.top,
          o = r.left;
        return { x: o, y: n };
      }
      function m(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function O(e) {
        var t;
        return (
          'IMG' === e.nodeName &&
          (l() ||
            !(
              null !== (t = document.documentElement) &&
              void 0 !== t &&
              t.contains(e)
            ))
        );
      }
      function D(e, t, r, n) {
        var o = e ? t.width : r,
          i = e ? t.height : n;
        return (
          d() &&
            e &&
            ((i /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
          { dragPreviewWidth: o, dragPreviewHeight: i }
        );
      }
      function S(e, t, r, n, o) {
        var i = O(t),
          a = i ? e : t,
          u = b(a),
          s = { x: r.x - u.x, y: r.y - u.y },
          c = e.offsetWidth,
          f = e.offsetHeight,
          l = n.anchorX,
          g = n.anchorY,
          v = D(i, t, c, f),
          h = v.dragPreviewWidth,
          y = v.dragPreviewHeight,
          m = function () {
            var e = new p([0, 0.5, 1], [s.y, (s.y / f) * y, s.y + y - f]),
              t = e.interpolate(g);
            return d() && i && (t += (window.devicePixelRatio - 1) * y), t;
          },
          S = function () {
            var e = new p([0, 0.5, 1], [s.x, (s.x / c) * h, s.x + h - c]);
            return e.interpolate(l);
          },
          E = o.offsetX,
          w = o.offsetY,
          T = 0 === E || E,
          I = 0 === w || w;
        return { x: T ? E : S(), y: I ? w : m() };
      }
      var E,
        w = '__NATIVE_FILE__',
        T = '__NATIVE_URL__',
        I = '__NATIVE_TEXT__',
        k = '__NATIVE_HTML__';
      function C(e, t, r) {
        var n = t.reduce(function (t, r) {
          return t || e.getData(r);
        }, '');
        return null != n ? n : r;
      }
      function P(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var N =
        ((E = {}),
        P(E, w, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ['Files'],
        }),
        P(E, k, {
          exposeProperties: {
            html: function (e, t) {
              return C(e, t, '');
            },
          },
          matchesTypes: ['Html', 'text/html'],
        }),
        P(E, T, {
          exposeProperties: {
            urls: function (e, t) {
              return C(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        P(E, I, {
          exposeProperties: {
            text: function (e, t) {
              return C(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        E);
      function j(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function x(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function R(e, t, r) {
        return t && x(e.prototype, t), r && x(e, r), e;
      }
      var _ = (function () {
        function e(t) {
          j(this, e),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        return (
          R(e, [
            {
              key: 'initializeExposedProperties',
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          'Browser doesn\'t allow reading "'.concat(
                            t,
                            '" until the drop event.',
                          ),
                        ),
                        null
                      );
                    },
                  });
                });
              },
            },
            {
              key: 'loadDataTransfer',
              value: function (e) {
                var t = this;
                if (e) {
                  var r = {};
                  Object.keys(this.config.exposeProperties).forEach(function (
                    n,
                  ) {
                    r[n] = {
                      value: t.config.exposeProperties[n](
                        e,
                        t.config.matchesTypes,
                      ),
                      configurable: !0,
                      enumerable: !0,
                    };
                  }),
                    Object.defineProperties(this.item, r);
                }
              },
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              },
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            { key: 'endDrag', value: function () {} },
          ]),
          e
        );
      })();
      function A(e, t) {
        var r = new _(N[e]);
        return r.loadDataTransfer(t), r;
      }
      function L(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(N).filter(function (e) {
            var r = N[e].matchesTypes;
            return r.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      function M(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function U(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function H(e, t, r) {
        return t && U(e.prototype, t), r && U(e, r), e;
      }
      var B = (function () {
        function e(t, r) {
          M(this, e),
            (this.ownerDocument = null),
            (this.globalContext = t),
            (this.optionsArgs = r);
        }
        return (
          H(e, [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' !== typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: 'document',
              get: function () {
                var e;
                return null !== (e = this.globalContext) &&
                  void 0 !== e &&
                  e.document
                  ? this.globalContext.document
                  : this.window
                  ? this.window.document
                  : void 0;
              },
            },
            {
              key: 'rootElement',
              get: function () {
                var e;
                return (
                  (null === (e = this.optionsArgs) || void 0 === e
                    ? void 0
                    : e.rootElement) || this.window
                );
              },
            },
          ]),
          e
        );
      })();
      function F(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                X(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function X(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function W(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function K(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function V(e, t, r) {
        return t && K(e.prototype, t), r && K(e, r), e;
      }
      var Y = (function () {
          function e(t, r, n) {
            var o = this;
            W(this, e),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (t && b(t)) || null;
              }),
              (this.endDragNativeItem = function () {
                o.isDraggingNativeItem() &&
                  (o.actions.endDrag(),
                  o.currentNativeHandle &&
                    o.registry.removeSource(o.currentNativeHandle),
                  (o.currentNativeHandle = null),
                  (o.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return Boolean(
                  e &&
                    o.document &&
                    o.document.body &&
                    document.body.contains(e),
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = o.currentDragSourceNode;
                null == e ||
                  o.isNodeInDocument(e) ||
                  (o.clearCurrentDragSourceNode() &&
                    o.monitor.isDragging() &&
                    o.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = o.dragStartSourceIds;
                  o.dragStartSourceIds = null;
                  var r = m(e);
                  o.monitor.isDragging() && o.actions.endDrag(),
                    o.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: o.getSourceClientOffset,
                      clientOffset: r,
                    });
                  var n = e.dataTransfer,
                    i = L(n);
                  if (o.monitor.isDragging()) {
                    if (n && 'function' === typeof n.setDragImage) {
                      var a = o.monitor.getSourceId(),
                        u = o.sourceNodes.get(a),
                        s = o.sourcePreviewNodes.get(a) || u;
                      if (s) {
                        var c = o.getCurrentSourcePreviewNodeOptions(),
                          f = c.anchorX,
                          l = c.anchorY,
                          d = c.offsetX,
                          g = c.offsetY,
                          v = { anchorX: f, anchorY: l },
                          h = { offsetX: d, offsetY: g },
                          p = S(u, s, r, v, h);
                        n.setDragImage(s, p.x, p.y);
                      }
                    }
                    try {
                      null === n ||
                        void 0 === n ||
                        n.setData('application/json', {});
                    } catch (O) {}
                    o.setCurrentDragSourceNode(e.target);
                    var y = o.getCurrentSourcePreviewNodeOptions(),
                      b = y.captureDraggingState;
                    b
                      ? o.actions.publishDragSource()
                      : setTimeout(function () {
                          return o.actions.publishDragSource();
                        }, 0);
                  } else if (i) o.beginDragNativeItem(i);
                  else {
                    if (
                      n &&
                      !n.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute('draggable'))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                o.clearCurrentDragSourceNode() &&
                  o.monitor.isDragging() &&
                  o.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                o.dragEnterTargetIds = [];
                var t = o.enterLeaveCounter.enter(e.target);
                if (t && !o.monitor.isDragging()) {
                  var r = e.dataTransfer,
                    n = L(r);
                  n && o.beginDragNativeItem(n, r);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = o.dragEnterTargetIds;
                if (((o.dragEnterTargetIds = []), o.monitor.isDragging())) {
                  (o.altKeyPressed = e.altKey),
                    t.length > 0 && o.actions.hover(t, { clientOffset: m(e) });
                  var r = t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  });
                  r &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect()));
                }
              }),
              (this.handleTopDragOverCapture = function () {
                o.dragOverTargetIds = [];
              }),
              (this.handleTopDragOver = function (e) {
                var t = o.dragOverTargetIds;
                if (((o.dragOverTargetIds = []), !o.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none')
                    )
                  );
                (o.altKeyPressed = e.altKey),
                  o.actions.hover(t || [], { clientOffset: m(e) });
                var r = (t || []).some(function (e) {
                  return o.monitor.canDropOnTarget(e);
                });
                r
                  ? (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect()))
                  : o.isDraggingNativeItem()
                  ? e.preventDefault()
                  : (e.preventDefault(),
                    e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                o.isDraggingNativeItem() && e.preventDefault();
                var t = o.enterLeaveCounter.leave(e.target);
                t &&
                  o.isDraggingNativeItem() &&
                  setTimeout(function () {
                    return o.endDragNativeItem();
                  }, 0);
              }),
              (this.handleTopDropCapture = function (e) {
                var t;
                ((o.dropTargetIds = []), o.isDraggingNativeItem()) &&
                  (e.preventDefault(),
                  null === (t = o.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
                o.enterLeaveCounter.reset();
              }),
              (this.handleTopDrop = function (e) {
                var t = o.dropTargetIds;
                (o.dropTargetIds = []),
                  o.actions.hover(t, { clientOffset: m(e) }),
                  o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
                  o.isDraggingNativeItem()
                    ? o.endDragNativeItem()
                    : o.monitor.isDragging() && o.actions.endDrag();
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                'function' === typeof t.dragDrop &&
                  ('INPUT' === t.tagName ||
                    'SELECT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new B(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.registry = t.getRegistry()),
              (this.enterLeaveCounter = new f(this.isNodeInDocument));
          }
          return (
            V(e, [
              {
                key: 'profile',
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions
                      .size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: 'rootElement',
                get: function () {
                  return this.options.rootElement;
                },
              },
              {
                key: 'setup',
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw new Error(
                        'Cannot have two HTML5 backends at the same time.',
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                },
              },
              {
                key: 'teardown',
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, r) {
                  var n = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, r),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      n.sourcePreviewNodes.delete(e),
                        n.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t, r) {
                  var n = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
                  var o = function (t) {
                      return n.handleDragStart(t, e);
                    },
                    i = function (e) {
                      return n.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute('draggable', 'true'),
                    t.addEventListener('dragstart', o),
                    t.addEventListener('selectstart', i),
                    function () {
                      n.sourceNodes.delete(e),
                        n.sourceNodeOptions.delete(e),
                        t.removeEventListener('dragstart', o),
                        t.removeEventListener('selectstart', i),
                        t.setAttribute('draggable', 'false');
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var r = this,
                    n = function (t) {
                      return r.handleDragEnter(t, e);
                    },
                    o = function (t) {
                      return r.handleDragOver(t, e);
                    },
                    i = function (t) {
                      return r.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener('dragenter', n),
                    t.addEventListener('dragover', o),
                    t.addEventListener('drop', i),
                    function () {
                      t.removeEventListener('dragenter', n),
                        t.removeEventListener('dragover', o),
                        t.removeEventListener('drop', i);
                    }
                  );
                },
              },
              {
                key: 'addEventListeners',
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener('dragstart', this.handleTopDragStart),
                    e.addEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.addEventListener('dragenter', this.handleTopDragEnter),
                    e.addEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.addEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.addEventListener('dragover', this.handleTopDragOver),
                    e.addEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.addEventListener('drop', this.handleTopDrop),
                    e.addEventListener('drop', this.handleTopDropCapture, !0));
                },
              },
              {
                key: 'removeEventListeners',
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStart,
                    ),
                    e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0,
                    ),
                    e.removeEventListener('dragenter', this.handleTopDragEnter),
                    e.removeEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0,
                    ),
                    e.removeEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0,
                    ),
                    e.removeEventListener('dragover', this.handleTopDragOver),
                    e.removeEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0,
                    ),
                    e.removeEventListener('drop', this.handleTopDrop),
                    e.removeEventListener(
                      'drop',
                      this.handleTopDropCapture,
                      !0,
                    ));
                },
              },
              {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return G(
                    { dropEffect: this.altKeyPressed ? 'copy' : 'move' },
                    t || {},
                  );
                },
              },
              {
                key: 'getCurrentDropEffect',
                value: function () {
                  return this.isDraggingNativeItem()
                    ? 'copy'
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourcePreviewNodeOptions.get(e);
                  return G(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    t || {},
                  );
                },
              },
              {
                key: 'isDraggingNativeItem',
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(n).some(function (t) {
                    return n[t] === e;
                  });
                },
              },
              {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = A(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource,
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e);
                  var r = 1e3;
                  this.mouseMoveTimeoutTimer = setTimeout(function () {
                    var e;
                    return null === (e = t.rootElement) || void 0 === e
                      ? void 0
                      : e.addEventListener(
                          'mousemove',
                          t.endDragIfSourceWasRemovedFromDOM,
                          !0,
                        );
                  }, r);
                },
              },
              {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                  if (this.currentDragSourceNode) {
                    var e;
                    if (((this.currentDragSourceNode = null), this.rootElement))
                      null === (e = this.window) ||
                        void 0 === e ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                        this.rootElement.removeEventListener(
                          'mousemove',
                          this.endDragIfSourceWasRemovedFromDOM,
                          !0,
                        );
                    return (this.mouseMoveTimeoutTimer = null), !0;
                  }
                  return !1;
                },
              },
              {
                key: 'handleDragStart',
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: 'handleDragEnter',
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDragOver',
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDrop',
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                },
              },
            ]),
            e
          );
        })(),
        z = function (e, t, r) {
          return new Y(e, t, r);
        };
    },
  },
]);
