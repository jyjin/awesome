(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [783],
  {
    61357: function (e, t, r) {
      'use strict';
      r.d(t, {
        W: function () {
          return At;
        },
      });
      var n = r(85893),
        o = r(67294),
        i = r(28195),
        a = 'dnd-core/INIT_COORDS',
        u = 'dnd-core/BEGIN_DRAG',
        c = 'dnd-core/PUBLISH_DRAG_SOURCE',
        s = 'dnd-core/HOVER',
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
      function p(e, t, r) {
        return t.split('.').reduce(function (e, t) {
          return e && e[t] ? e[t] : r || null;
        }, e);
      }
      function v(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function h(e) {
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
            c = e.getMonitor(),
            s = e.getRegistry();
          e.dispatch(d(i)), S(t, c, s);
          var f = E(t, c);
          if (null !== f) {
            var l = null;
            if (i) {
              if (!a) throw new Error('getSourceClientOffset must be defined');
              w(a), (l = a(f));
            }
            e.dispatch(d(i, l));
            var g = s.getSource(f),
              p = g.beginDrag(c, f);
            if (null != p) {
              D(p), s.pinSource(f);
              var v = s.getSourceType(f);
              return {
                type: u,
                payload: {
                  itemType: v,
                  item: p,
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
      function S(e, t, r) {
        (0, i.k)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
          e.forEach(function (e) {
            (0, i.k)(r.getSource(e), 'Expected sourceIds to be registered.');
          });
      }
      function w(e) {
        (0, i.k)(
          'function' === typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.',
        );
      }
      function D(e) {
        (0, i.k)(h(e), 'Item must be an object.');
      }
      function E(e, t) {
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
          if (t.isDragging()) return { type: c };
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
          j(t);
          var o = t.slice(0),
            i = e.getMonitor(),
            a = e.getRegistry();
          C(o, i, a);
          var u = i.getItemType();
          return (
            P(o, a, u),
            N(o, i, a),
            { type: s, payload: { targetIds: o, clientOffset: n || null } }
          );
        };
      }
      function j(e) {
        (0, i.k)(Array.isArray(e), 'Expected targetIds to be an array.');
      }
      function C(e, t, r) {
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
      function P(e, t, r) {
        for (var n = e.length - 1; n >= 0; n--) {
          var o = e[n],
            i = t.getTargetType(o);
          I(i, r) || e.splice(n, 1);
        }
      }
      function N(e, t, r) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                L(e, t, r[t]);
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
      function L(e, t, r) {
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
      function R(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.getMonitor(),
            n = e.getRegistry();
          _(r);
          var o = H(r);
          o.forEach(function (o, i) {
            var a = M(o, i, n, r),
              u = { type: f, payload: { dropResult: A(A({}, t), a) } };
            e.dispatch(u);
          });
        };
      }
      function _(e) {
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
          'undefined' === typeof e || h(e),
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
          drop: R(e),
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
      var Y = (function () {
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
      function V(e) {
        return (
          'Minified Redux error #' +
          e +
          '; visit https://redux.js.org/Errors?code=' +
          e +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var $ = (function () {
          return (
            ('function' === typeof Symbol && Symbol.observable) ||
            '@@observable'
          );
        })(),
        z = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        q = {
          INIT: '@@redux/INIT' + z(),
          REPLACE: '@@redux/REPLACE' + z(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + z();
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
          throw new Error(V(0));
        if (
          ('function' === typeof t &&
            'undefined' === typeof r &&
            ((r = t), (t = void 0)),
          'undefined' !== typeof r)
        ) {
          if ('function' !== typeof r) throw new Error(V(1));
          return r(Q)(e, t);
        }
        if ('function' !== typeof e) throw new Error(V(2));
        var o = e,
          i = t,
          a = [],
          u = a,
          c = !1;
        function s() {
          u === a && (u = a.slice());
        }
        function f() {
          if (c) throw new Error(V(3));
          return i;
        }
        function l(e) {
          if ('function' !== typeof e) throw new Error(V(4));
          if (c) throw new Error(V(5));
          var t = !0;
          return (
            s(),
            u.push(e),
            function () {
              if (t) {
                if (c) throw new Error(V(6));
                (t = !1), s();
                var r = u.indexOf(e);
                u.splice(r, 1), (a = null);
              }
            }
          );
        }
        function d(e) {
          if (!J(e)) throw new Error(V(7));
          if ('undefined' === typeof e.type) throw new Error(V(8));
          if (c) throw new Error(V(9));
          try {
            (c = !0), (i = o(i, e));
          } finally {
            c = !1;
          }
          for (var t = (a = u), r = 0; r < t.length; r++) {
            var n = t[r];
            n();
          }
          return e;
        }
        function g(e) {
          if ('function' !== typeof e) throw new Error(V(10));
          (o = e), d({ type: q.REPLACE });
        }
        function p() {
          var e,
            t = l;
          return (
            (e = {
              subscribe: function (e) {
                if ('object' !== typeof e || null === e) throw new Error(V(11));
                function r() {
                  e.next && e.next(f());
                }
                r();
                var n = t(r);
                return { unsubscribe: n };
              },
            }),
            (e[$] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: q.INIT }),
          (n = { dispatch: d, subscribe: l, getState: f, replaceReducer: g }),
          (n[$] = p),
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
          case s:
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
        ce = 'dnd-core/ADD_TARGET',
        se = 'dnd-core/REMOVE_SOURCE',
        fe = 'dnd-core/REMOVE_TARGET';
      function le(e) {
        return { type: ue, payload: { sourceId: e } };
      }
      function de(e) {
        return { type: ce, payload: { targetId: e } };
      }
      function ge(e) {
        return { type: se, payload: { sourceId: e } };
      }
      function pe(e) {
        return { type: fe, payload: { targetId: e } };
      }
      function ve(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                ye(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (t) {
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
            return he(
              he({}, e),
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
          case c:
            return he(he({}, e), {}, { isSourcePublic: !0 });
          case s:
            return he(he({}, e), {}, { targetIds: r.targetIds });
          case fe:
            return -1 === e.targetIds.indexOf(r.targetId)
              ? e
              : he(he({}, e), {}, { targetIds: v(e.targetIds, r.targetId) });
          case f:
            return he(
              he({}, e),
              {},
              { dropResult: r.dropResult, didDrop: !0, targetIds: [] },
            );
          case l:
            return he(
              he({}, e),
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
          case ce:
            return e + 1;
          case se:
          case fe:
            return e - 1;
          default:
            return e;
        }
      }
      var Se = [],
        we = [];
      function De(e, t) {
        if (e === Se) return !1;
        if (e === we || 'undefined' === typeof t) return !0;
        var r = b(t, e);
        return r.length > 0;
      }
      function Ee() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case s:
            break;
          case ue:
          case ce:
          case fe:
          case se:
            return Se;
          case u:
          case c:
          case l:
          case f:
          default:
            return we;
        }
        var t = e.payload,
          r = t.targetIds,
          n = void 0 === r ? [] : r,
          o = t.prevTargetIds,
          i = void 0 === o ? [] : o,
          a = y(n, i),
          d = a.length > 0 || !te(n, i);
        if (!d) return Se;
        var g = i[i.length - 1],
          p = n[n.length - 1];
        return g !== p && (g && a.push(g), p && a.push(p)), a;
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
                je(e, t, r[t]);
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
      function je(e, t, r) {
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
      function Ce() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: Ee(e.dirtyHandlerIds, {
            type: t.type,
            payload: ke(
              ke({}, t.payload),
              {},
              { prevTargetIds: p(e, 'dragOperation.targetIds', []) },
            ),
          }),
          dragOffset: ae(e.dragOffset, t),
          refCount: Oe(e.refCount, t),
          dragOperation: me(e.dragOperation, t),
          stateId: Te(e.stateId),
        };
      }
      function Pe(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function Ne(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function xe(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset,
          n = e.initialSourceClientOffset;
        return t && r && n ? Ne(Pe(t, n), r) : null;
      }
      function Ae(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset;
        return t && r ? Ne(t, r) : null;
      }
      function Le(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function Re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _e(e, t, r) {
        return t && Re(e.prototype, t), r && Re(e, r), e;
      }
      (Se.__IS_NONE__ = !0), (we.__IS_ALL__ = !0);
      var Me,
        Ue = (function () {
          function e(t, r) {
            Le(this, e), (this.store = t), (this.registry = r);
          }
          return (
            _e(e, [
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
                          i === o || (i === o + 1 && !De(r.dirtyHandlerIds, n));
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
                  return Ae(this.store.getState().dragOffset);
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
        Ve.length || (Ye(), !0), (Ve[Ve.length] = e);
      }
      (function (e) {
        (e['SOURCE'] = 'SOURCE'), (e['TARGET'] = 'TARGET');
      })(Me || (Me = {}));
      var Ye,
        Ve = [],
        $e = 0,
        ze = 1024;
      function qe() {
        while ($e < Ve.length) {
          var e = $e;
          if ((($e += 1), Ve[e].call(), $e > ze)) {
            for (var t = 0, r = Ve.length - $e; t < r; t++) Ve[t] = Ve[t + $e];
            (Ve.length -= $e), ($e = 0);
          }
        }
        (Ve.length = 0), ($e = 0), !1;
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
      (Ye = 'function' === typeof Qe ? Ze(qe) : et(qe)),
        (Ke.requestFlush = Ye),
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
      function ct(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function st(e, t, r) {
        return t && ct(e.prototype, t), r && ct(e, r), e;
      }
      function ft(e, t) {
        return vt(e) || pt(e, t) || dt(e, t) || lt();
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
      function pt(e, t) {
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
      function vt(e) {
        if (Array.isArray(e)) return e;
      }
      function ht(e) {
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
          st(e, [
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
                  this.store.dispatch(pe(e)),
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
                var n = ht(e);
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
          o = St(n),
          i = new Ue(o, new mt(o)),
          a = new Y(o, i),
          u = e(a, t, r);
        return a.receiveBackend(u), a;
      }
      function St(e) {
        var t =
          'undefined' !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return Q(Ce, e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' }));
      }
      var wt = r(95518);
      function Dt(e, t) {
        return jt(e) || kt(e, t) || Tt(e, t) || Et();
      }
      function Et() {
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
      function jt(e) {
        if (Array.isArray(e)) return e;
      }
      function Ct(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = Pt(e, t);
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
      function Pt(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var Nt = 0,
        xt = Symbol['for']('__REACT_DND_CONTEXT_INSTANCE__'),
        At = (0, o.memo)(function (e) {
          var t = e.children,
            r = Ct(e, ['children']),
            i = Lt(r),
            a = Dt(i, 2),
            u = a[0],
            c = a[1];
          return (
            (0, o.useEffect)(function () {
              if (c) {
                var e = _t();
                return (
                  ++Nt,
                  function () {
                    0 === --Nt && (e[xt] = null);
                  }
                );
              }
            }, []),
            (0, n.jsx)(
              wt.L.Provider,
              Object.assign({ value: u }, { children: t }),
              void 0,
            )
          );
        });
      function Lt(e) {
        if ('manager' in e) {
          var t = { dragDropManager: e.manager };
          return [t, !1];
        }
        var r = Rt(e.backend, e.context, e.options, e.debugMode),
          n = !e.context;
        return [r, n];
      }
      function Rt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _t(),
          r = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0,
          o = t;
        return o[xt] || (o[xt] = { dragDropManager: Ot(e, t, r, n) }), o[xt];
      }
      function _t() {
        return 'undefined' !== typeof r.g ? r.g : window;
      }
    },
    33287: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return S;
        },
      });
      var n = r(83872),
        o = r(64063),
        i = r.n(o),
        a = r(67294);
      function u(e, t) {
        return d(e) || l(e, t) || s(e, t) || c();
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function s(e, t) {
        if (e) {
          if ('string' === typeof e) return f(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function l(e, t) {
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
      function d(e) {
        if (Array.isArray(e)) return e;
      }
      function g(e, t, r) {
        var o = (0, a.useState)(function () {
            return t(e);
          }),
          c = u(o, 2),
          s = c[0],
          f = c[1],
          l = (0, a.useCallback)(
            function () {
              var n = t(e);
              i()(s, n) || (f(n), r && r());
            },
            [s, e, r],
          );
        return (0, n.L)(l), [s, l];
      }
      function p(e, t) {
        return m(e) || b(e, t) || h(e, t) || v();
      }
      function v() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function h(e, t) {
        if (e) {
          if ('string' === typeof e) return y(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? y(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function b(e, t) {
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
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      function O(e, t, r) {
        var o = g(e, t, r),
          i = p(o, 2),
          a = i[0],
          u = i[1];
        return (
          (0, n.L)(
            function () {
              var t = e.getHandlerId();
              if (null != t)
                return e.subscribeToStateChange(u, { handlerIds: [t] });
            },
            [e, u],
          ),
          a
        );
      }
      function S(e, t, r) {
        return O(
          t,
          e ||
            function () {
              return {};
            },
          function () {
            return r.reconnect();
          },
        );
      }
    },
    86371: function (e, t, r) {
      'use strict';
      r.d(t, {
        c: function () {
          return P;
        },
      });
      var n = r(55141),
        o = r(83872),
        i = r(67294);
      function a(e) {
        return (
          (a =
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
          a(e)
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t, r) {
        return t && c(e.prototype, t), r && c(e, r), e;
      }
      var f = (function () {
        function e(t, r, n) {
          u(this, e), (this.spec = t), (this.monitor = r), (this.connector = n);
        }
        return (
          s(e, [
            {
              key: 'beginDrag',
              value: function () {
                var e,
                  t = this.spec,
                  r = this.monitor,
                  n = null;
                return (
                  (n =
                    'object' === a(t.item)
                      ? t.item
                      : 'function' === typeof t.item
                      ? t.item(r)
                      : {}),
                  null !== (e = n) && void 0 !== e ? e : null
                );
              },
            },
            {
              key: 'canDrag',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return 'boolean' === typeof e.canDrag
                  ? e.canDrag
                  : 'function' !== typeof e.canDrag || e.canDrag(t);
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                var r = this.spec,
                  n = this.monitor,
                  o = r.isDragging;
                return o ? o(n) : t === e.getSourceId();
              },
            },
            {
              key: 'endDrag',
              value: function () {
                var e = this.spec,
                  t = this.monitor,
                  r = this.connector,
                  n = e.end;
                n && n(t.getItem(), t), r.reconnect();
              },
            },
          ]),
          e
        );
      })();
      function l(e, t, r) {
        var n = (0, i.useMemo)(
          function () {
            return new f(e, t, r);
          },
          [t, r],
        );
        return (
          (0, i.useEffect)(
            function () {
              n.spec = e;
            },
            [e],
          ),
          n
        );
      }
      var d = r(80961),
        g = r(28195);
      function p(e) {
        return (0, i.useMemo)(
          function () {
            var t = e.type;
            return (0, g.k)(null != t, 'spec.type must be defined'), t;
          },
          [e],
        );
      }
      function v(e, t) {
        return O(e) || m(e, t) || y(e, t) || h();
      }
      function h() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function y(e, t) {
        if (e) {
          if ('string' === typeof e) return b(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? b(e, t)
              : void 0
          );
        }
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function m(e, t) {
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
      function O(e) {
        if (Array.isArray(e)) return e;
      }
      function S(e, t, r) {
        var i = (0, d.N)(),
          a = l(e, t, r),
          u = p(e);
        (0, o.L)(
          function () {
            if (null != u) {
              var e = (0, n.w)(u, a, i),
                o = v(e, 2),
                c = o[0],
                s = o[1];
              return t.receiveHandlerId(c), r.receiveHandlerId(c), s;
            }
          },
          [i, t, r, a, u],
        );
      }
      var w = r(29686),
        D = r(55701);
      function E() {
        var e = (0, d.N)();
        return (0, i.useMemo)(
          function () {
            return new D.p(e);
          },
          [e],
        );
      }
      var T = r(57503);
      function I(e, t) {
        var r = (0, d.N)(),
          n = (0, i.useMemo)(
            function () {
              return new T.x(r.getBackend());
            },
            [r],
          );
        return (
          (0, o.L)(
            function () {
              (n.dragSourceOptions = e || null), n.reconnect();
            },
            [n, e],
          ),
          (0, o.L)(
            function () {
              (n.dragPreviewOptions = t || null), n.reconnect();
            },
            [n, t],
          ),
          n
        );
      }
      var k = r(33287);
      function j(e) {
        return (0, i.useMemo)(
          function () {
            return e.hooks.dragSource();
          },
          [e],
        );
      }
      function C(e) {
        return (0, i.useMemo)(
          function () {
            return e.hooks.dragPreview();
          },
          [e],
        );
      }
      function P(e, t) {
        var r = (0, w.w)(e, t);
        (0, g.k)(
          !r.begin,
          'useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)',
        );
        var n = E(),
          o = I(r.options, r.previewOptions);
        return S(r, n, o), [(0, k.J)(r.collect, n, o), j(o), C(o)];
      }
    },
    80961: function (e, t, r) {
      'use strict';
      r.d(t, {
        N: function () {
          return a;
        },
      });
      var n = r(67294),
        o = r(28195),
        i = r(95518);
      function a() {
        var e = (0, n.useContext)(i.L),
          t = e.dragDropManager;
        return (0, o.k)(null != t, 'Expected drag drop context'), t;
      }
    },
    13135: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return j;
        },
      });
      var n = r(55141),
        o = r(80961),
        i = r(83872),
        a = r(28195),
        u = r(67294);
      function c(e) {
        var t = e.accept;
        return (0, u.useMemo)(
          function () {
            return (
              (0, a.k)(null != e.accept, 'accept must be defined'),
              Array.isArray(t) ? t : [t]
            );
          },
          [t],
        );
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function l(e, t, r) {
        return t && f(e.prototype, t), r && f(e, r), e;
      }
      var d = (function () {
        function e(t, r) {
          s(this, e), (this.spec = t), (this.monitor = r);
        }
        return (
          l(e, [
            {
              key: 'canDrop',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              },
            },
            {
              key: 'hover',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              },
            },
            {
              key: 'drop',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              },
            },
          ]),
          e
        );
      })();
      function g(e, t) {
        var r = (0, u.useMemo)(
          function () {
            return new d(e, t);
          },
          [t],
        );
        return (
          (0, u.useEffect)(
            function () {
              r.spec = e;
            },
            [e],
          ),
          r
        );
      }
      function p(e, t) {
        return m(e) || b(e, t) || h(e, t) || v();
      }
      function v() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function h(e, t) {
        if (e) {
          if ('string' === typeof e) return y(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? y(e, t)
              : void 0
          );
        }
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function b(e, t) {
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
      function m(e) {
        if (Array.isArray(e)) return e;
      }
      function O(e, t, r) {
        var a = (0, o.N)(),
          u = g(e, t),
          s = c(e);
        (0, i.L)(
          function () {
            var e = (0, n.n)(s, u, a),
              o = p(e, 2),
              i = o[0],
              c = o[1];
            return t.receiveHandlerId(i), r.receiveHandlerId(i), c;
          },
          [
            a,
            t,
            u,
            r,
            s
              .map(function (e) {
                return e.toString();
              })
              .join('|'),
          ],
        );
      }
      var S = r(29686),
        w = r(60211);
      function D() {
        var e = (0, o.N)();
        return (0, u.useMemo)(
          function () {
            return new w.H(e);
          },
          [e],
        );
      }
      var E = r(79314);
      function T(e) {
        var t = (0, o.N)(),
          r = (0, u.useMemo)(
            function () {
              return new E.Y(t.getBackend());
            },
            [t],
          );
        return (
          (0, i.L)(
            function () {
              (r.dropTargetOptions = e || null), r.reconnect();
            },
            [e],
          ),
          r
        );
      }
      var I = r(33287);
      function k(e) {
        return (0, u.useMemo)(
          function () {
            return e.hooks.dropTarget();
          },
          [e],
        );
      }
      function j(e, t) {
        var r = (0, S.w)(e, t),
          n = D(),
          o = T(r.options);
        return O(r, n, o), [(0, I.J)(r.collect, n, o), k(o)];
      }
    },
    83872: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return o;
        },
      });
      var n = r(67294),
        o = 'undefined' !== typeof window ? n.useLayoutEffect : n.useEffect;
    },
    29686: function (e, t, r) {
      'use strict';
      r.d(t, {
        w: function () {
          return f;
        },
      });
      var n = r(67294);
      function o(e) {
        return c(e) || u(e) || a(e) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? s(e, t)
              : void 0
          );
        }
      }
      function u(e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      function c(e) {
        if (Array.isArray(e)) return s(e);
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        var r = o(t || []);
        return (
          null == t && 'function' !== typeof e && r.push(e),
          (0, n.useMemo)(function () {
            return 'function' === typeof e ? e() : e;
          }, r)
        );
      }
    },
    64063: function (e) {
      'use strict';
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && 'object' == typeof t && 'object' == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          var n, o, i;
          if (Array.isArray(t)) {
            if (((n = t.length), n != r.length)) return !1;
            for (o = n; 0 !== o--; ) if (!e(t[o], r[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if (
            ((i = Object.keys(t)), (n = i.length), n !== Object.keys(r).length)
          )
            return !1;
          for (o = n; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
          for (o = n; 0 !== o--; ) {
            var a = i[o];
            if (!e(t[a], r[a])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      };
    },
    57865: function (e, t, r) {
      'use strict';
      r.d(t, {
        PD: function () {
          return $;
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
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t, r) {
        return t && c(e.prototype, t), r && c(e, r), e;
      }
      r.r(n),
        r.d(n, {
          FILE: function () {
            return E;
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
            s(e, [
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
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function v(e, t, r) {
        return t && p(e.prototype, t), r && p(e, r), e;
      }
      var h = (function () {
          function e(t, r) {
            g(this, e);
            for (var n = t.length, o = [], i = 0; i < n; i++) o.push(i);
            o.sort(function (e, r) {
              return t[e] < t[r] ? -1 : 1;
            });
            for (var a, u, c = [], s = [], f = [], l = 0; l < n - 1; l++)
              (a = t[l + 1] - t[l]),
                (u = r[l + 1] - r[l]),
                s.push(a),
                c.push(u),
                f.push(u / a);
            for (var d = [f[0]], p = 0; p < s.length - 1; p++) {
              var v = f[p],
                h = f[p + 1];
              if (v * h <= 0) d.push(0);
              else {
                a = s[p];
                var y = s[p + 1],
                  b = a + y;
                d.push((3 * b) / ((b + y) / v + (b + a) / h));
              }
            }
            d.push(f[f.length - 1]);
            for (var m, O = [], S = [], w = 0; w < d.length - 1; w++) {
              m = f[w];
              var D = d[w],
                E = 1 / s[w],
                T = D + d[w + 1] - m - m;
              O.push((m - D - T) * E), S.push(T * E * E);
            }
            (this.xs = t),
              (this.ys = r),
              (this.c1s = d),
              (this.c2s = O),
              (this.c3s = S);
          }
          return (
            v(e, [
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
                    c = 0,
                    s = i.length - 1;
                  while (c <= s) {
                    u = Math.floor(0.5 * (c + s));
                    var f = t[u];
                    if (f < e) c = u + 1;
                    else {
                      if (!(f > e)) return r[u];
                      s = u - 1;
                    }
                  }
                  a = Math.max(0, s);
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
      function S(e, t, r, n) {
        var o = e ? t.width : r,
          i = e ? t.height : n;
        return (
          d() &&
            e &&
            ((i /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
          { dragPreviewWidth: o, dragPreviewHeight: i }
        );
      }
      function w(e, t, r, n, o) {
        var i = O(t),
          a = i ? e : t,
          u = b(a),
          c = { x: r.x - u.x, y: r.y - u.y },
          s = e.offsetWidth,
          f = e.offsetHeight,
          l = n.anchorX,
          g = n.anchorY,
          p = S(i, t, s, f),
          v = p.dragPreviewWidth,
          y = p.dragPreviewHeight,
          m = function () {
            var e = new h([0, 0.5, 1], [c.y, (c.y / f) * y, c.y + y - f]),
              t = e.interpolate(g);
            return d() && i && (t += (window.devicePixelRatio - 1) * y), t;
          },
          w = function () {
            var e = new h([0, 0.5, 1], [c.x, (c.x / s) * v, c.x + v - s]);
            return e.interpolate(l);
          },
          D = o.offsetX,
          E = o.offsetY,
          T = 0 === D || D,
          I = 0 === E || E;
        return { x: T ? D : w(), y: I ? E : m() };
      }
      var D,
        E = '__NATIVE_FILE__',
        T = '__NATIVE_URL__',
        I = '__NATIVE_TEXT__',
        k = '__NATIVE_HTML__';
      function j(e, t, r) {
        var n = t.reduce(function (t, r) {
          return t || e.getData(r);
        }, '');
        return null != n ? n : r;
      }
      function C(e, t, r) {
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
      var P =
        ((D = {}),
        C(D, E, {
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
        C(D, k, {
          exposeProperties: {
            html: function (e, t) {
              return j(e, t, '');
            },
          },
          matchesTypes: ['Html', 'text/html'],
        }),
        C(D, T, {
          exposeProperties: {
            urls: function (e, t) {
              return j(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        C(D, I, {
          exposeProperties: {
            text: function (e, t) {
              return j(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        D);
      function N(e, t) {
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
      function A(e, t, r) {
        return t && x(e.prototype, t), r && x(e, r), e;
      }
      var L = (function () {
        function e(t) {
          N(this, e),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        return (
          A(e, [
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
      function R(e, t) {
        var r = new L(P[e]);
        return r.loadDataTransfer(t), r;
      }
      function _(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(P).filter(function (e) {
            var r = P[e].matchesTypes;
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
      function Y(e, t, r) {
        return t && K(e.prototype, t), r && K(e, r), e;
      }
      var V = (function () {
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
                    i = _(n);
                  if (o.monitor.isDragging()) {
                    if (n && 'function' === typeof n.setDragImage) {
                      var a = o.monitor.getSourceId(),
                        u = o.sourceNodes.get(a),
                        c = o.sourcePreviewNodes.get(a) || u;
                      if (c) {
                        var s = o.getCurrentSourcePreviewNodeOptions(),
                          f = s.anchorX,
                          l = s.anchorY,
                          d = s.offsetX,
                          g = s.offsetY,
                          p = { anchorX: f, anchorY: l },
                          v = { offsetX: d, offsetY: g },
                          h = w(u, c, r, p, v);
                        n.setDragImage(c, h.x, h.y);
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
                    n = _(r);
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
            Y(e, [
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
                    (this.currentNativeSource = R(e, t)),
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
        $ = function (e, t, r) {
          return new V(e, t, r);
        };
    },
  },
]);
