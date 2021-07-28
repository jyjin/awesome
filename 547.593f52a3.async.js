(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [547],
  {
    18930: function () {},
    7283: function () {},
    91203: function () {},
    61418: function () {},
    43096: function () {},
    34509: function () {},
    34109: function () {},
    33732: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o,
        r = n(28481),
        a = n(67294),
        i = n(98924),
        c = function () {
          return (0, i.Z)() && window.document.documentElement;
        },
        l = function () {
          if (!c()) return !1;
          if (void 0 !== o) return o;
          var e = document.createElement('div');
          return (
            (e.style.display = 'flex'),
            (e.style.flexDirection = 'column'),
            (e.style.rowGap = '1px'),
            e.appendChild(document.createElement('div')),
            e.appendChild(document.createElement('div')),
            document.body.appendChild(e),
            (o = 1 === e.scrollHeight),
            document.body.removeChild(e),
            o
          );
        },
        s = function () {
          var e = a.useState(!1),
            t = (0, r.Z)(e, 2),
            n = t[0],
            o = t[1];
          return (
            a.useEffect(function () {
              o(l());
            }, []),
            n
          );
        };
    },
    45503: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return V;
        },
      });
      var o = n(96156),
        r = n(22122),
        a = n(67294),
        i = n(94184),
        c = n.n(i),
        l = n(98423),
        s = n(86032),
        u = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        d = function (e) {
          var t = e.prefixCls,
            n = e.className,
            i = e.hoverable,
            l = void 0 === i || i,
            d = u(e, ['prefixCls', 'className', 'hoverable']);
          return a.createElement(s.C, null, function (e) {
            var i = e.getPrefixCls,
              s = i('card', t),
              u = c()(
                ''.concat(s, '-grid'),
                n,
                (0, o.Z)({}, ''.concat(s, '-grid-hoverable'), l),
              );
            return a.createElement('div', (0, r.Z)({}, d, { className: u }));
          });
        },
        f = d,
        p = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        v = function (e) {
          return a.createElement(s.C, null, function (t) {
            var n = t.getPrefixCls,
              o = e.prefixCls,
              i = e.className,
              l = e.avatar,
              s = e.title,
              u = e.description,
              d = p(e, [
                'prefixCls',
                'className',
                'avatar',
                'title',
                'description',
              ]),
              f = n('card', o),
              v = c()(''.concat(f, '-meta'), i),
              m = l
                ? a.createElement(
                    'div',
                    { className: ''.concat(f, '-meta-avatar') },
                    l,
                  )
                : null,
              h = s
                ? a.createElement(
                    'div',
                    { className: ''.concat(f, '-meta-title') },
                    s,
                  )
                : null,
              y = u
                ? a.createElement(
                    'div',
                    { className: ''.concat(f, '-meta-description') },
                    u,
                  )
                : null,
              b =
                h || y
                  ? a.createElement(
                      'div',
                      { className: ''.concat(f, '-meta-detail') },
                      h,
                      y,
                    )
                  : null;
            return a.createElement(
              'div',
              (0, r.Z)({}, d, { className: v }),
              m,
              b,
            );
          });
        },
        m = v,
        h = n(16351),
        y = n(90484),
        b = n(28481),
        g = (0, a.createContext)({}),
        C = g,
        w = n(93355),
        E = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        Z = {
          xs: '(max-width: 575px)',
          sm: '(min-width: 576px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 992px)',
          xl: '(min-width: 1200px)',
          xxl: '(min-width: 1600px)',
        },
        x = new Map(),
        k = -1,
        N = {},
        O = {
          matchHandlers: {},
          dispatch: function (e) {
            return (
              (N = e),
              x.forEach(function (e) {
                return e(N);
              }),
              x.size >= 1
            );
          },
          subscribe: function (e) {
            return x.size || this.register(), (k += 1), x.set(k, e), e(N), k;
          },
          unsubscribe: function (e) {
            x['delete'](e), x.size || this.unregister();
          },
          unregister: function () {
            var e = this;
            Object.keys(Z).forEach(function (t) {
              var n = Z[t],
                o = e.matchHandlers[n];
              null === o ||
                void 0 === o ||
                o.mql.removeListener(
                  null === o || void 0 === o ? void 0 : o.listener,
                );
            }),
              x.clear();
          },
          register: function () {
            var e = this;
            Object.keys(Z).forEach(function (t) {
              var n = Z[t],
                a = function (n) {
                  var a = n.matches;
                  e.dispatch((0, r.Z)((0, r.Z)({}, N), (0, o.Z)({}, t, a)));
                },
                i = window.matchMedia(n);
              i.addListener(a),
                (e.matchHandlers[n] = { mql: i, listener: a }),
                a(i);
            });
          },
        },
        S = O,
        P = n(33732),
        T = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        M =
          ((0, w.b)('top', 'middle', 'bottom', 'stretch'),
          (0, w.b)('start', 'end', 'center', 'space-around', 'space-between'),
          a.forwardRef(function (e, t) {
            var n,
              i = e.prefixCls,
              l = e.justify,
              u = e.align,
              d = e.className,
              f = e.style,
              p = e.children,
              v = e.gutter,
              m = void 0 === v ? 0 : v,
              h = e.wrap,
              g = T(e, [
                'prefixCls',
                'justify',
                'align',
                'className',
                'style',
                'children',
                'gutter',
                'wrap',
              ]),
              w = a.useContext(s.E_),
              Z = w.getPrefixCls,
              x = w.direction,
              k = a.useState({
                xs: !0,
                sm: !0,
                md: !0,
                lg: !0,
                xl: !0,
                xxl: !0,
              }),
              N = (0, b.Z)(k, 2),
              O = N[0],
              M = N[1],
              R = (0, P.Z)(),
              j = a.useRef(m);
            a.useEffect(function () {
              var e = S.subscribe(function (e) {
                var t = j.current || 0;
                ((!Array.isArray(t) && 'object' === (0, y.Z)(t)) ||
                  (Array.isArray(t) &&
                    ('object' === (0, y.Z)(t[0]) ||
                      'object' === (0, y.Z)(t[1])))) &&
                  M(e);
              });
              return function () {
                return S.unsubscribe(e);
              };
            }, []);
            var I = function () {
                var e = [0, 0],
                  t = Array.isArray(m) ? m : [m, 0];
                return (
                  t.forEach(function (t, n) {
                    if ('object' === (0, y.Z)(t))
                      for (var o = 0; o < E.length; o++) {
                        var r = E[o];
                        if (O[r] && void 0 !== t[r]) {
                          e[n] = t[r];
                          break;
                        }
                      }
                    else e[n] = t || 0;
                  }),
                  e
                );
              },
              L = Z('row', i),
              D = I(),
              A = c()(
                L,
                ((n = {}),
                (0, o.Z)(n, ''.concat(L, '-no-wrap'), !1 === h),
                (0, o.Z)(n, ''.concat(L, '-').concat(l), l),
                (0, o.Z)(n, ''.concat(L, '-').concat(u), u),
                (0, o.Z)(n, ''.concat(L, '-rtl'), 'rtl' === x),
                n),
                d,
              ),
              z = {},
              H = D[0] > 0 ? D[0] / -2 : void 0,
              W = D[1] > 0 ? D[1] / -2 : void 0;
            if ((H && ((z.marginLeft = H), (z.marginRight = H)), R)) {
              var B = (0, b.Z)(D, 2);
              z.rowGap = B[1];
            } else W && ((z.marginTop = W), (z.marginBottom = W));
            var K = a.useMemo(
              function () {
                return { gutter: D, wrap: h, supportFlexGap: R };
              },
              [D, h, R],
            );
            return a.createElement(
              C.Provider,
              { value: K },
              a.createElement(
                'div',
                (0, r.Z)({}, g, {
                  className: A,
                  style: (0, r.Z)((0, r.Z)({}, z), f),
                  ref: t,
                }),
                p,
              ),
            );
          }));
      M.displayName = 'Row';
      var R = M,
        j = R,
        I = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      function L(e) {
        return 'number' === typeof e
          ? ''.concat(e, ' ').concat(e, ' auto')
          : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
          ? '0 0 '.concat(e)
          : e;
      }
      var D = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        A = a.forwardRef(function (e, t) {
          var n,
            i = a.useContext(s.E_),
            l = i.getPrefixCls,
            u = i.direction,
            d = a.useContext(C),
            f = d.gutter,
            p = d.wrap,
            v = d.supportFlexGap,
            m = e.prefixCls,
            h = e.span,
            b = e.order,
            g = e.offset,
            w = e.push,
            E = e.pull,
            Z = e.className,
            x = e.children,
            k = e.flex,
            N = e.style,
            O = I(e, [
              'prefixCls',
              'span',
              'order',
              'offset',
              'push',
              'pull',
              'className',
              'children',
              'flex',
              'style',
            ]),
            S = l('col', m),
            P = {};
          D.forEach(function (t) {
            var n,
              a = {},
              i = e[t];
            'number' === typeof i
              ? (a.span = i)
              : 'object' === (0, y.Z)(i) && (a = i || {}),
              delete O[t],
              (P = (0, r.Z)(
                (0, r.Z)({}, P),
                ((n = {}),
                (0, o.Z)(
                  n,
                  ''.concat(S, '-').concat(t, '-').concat(a.span),
                  void 0 !== a.span,
                ),
                (0, o.Z)(
                  n,
                  ''.concat(S, '-').concat(t, '-order-').concat(a.order),
                  a.order || 0 === a.order,
                ),
                (0, o.Z)(
                  n,
                  ''.concat(S, '-').concat(t, '-offset-').concat(a.offset),
                  a.offset || 0 === a.offset,
                ),
                (0, o.Z)(
                  n,
                  ''.concat(S, '-').concat(t, '-push-').concat(a.push),
                  a.push || 0 === a.push,
                ),
                (0, o.Z)(
                  n,
                  ''.concat(S, '-').concat(t, '-pull-').concat(a.pull),
                  a.pull || 0 === a.pull,
                ),
                (0, o.Z)(n, ''.concat(S, '-rtl'), 'rtl' === u),
                n),
              ));
          });
          var T = c()(
              S,
              ((n = {}),
              (0, o.Z)(n, ''.concat(S, '-').concat(h), void 0 !== h),
              (0, o.Z)(n, ''.concat(S, '-order-').concat(b), b),
              (0, o.Z)(n, ''.concat(S, '-offset-').concat(g), g),
              (0, o.Z)(n, ''.concat(S, '-push-').concat(w), w),
              (0, o.Z)(n, ''.concat(S, '-pull-').concat(E), E),
              n),
              Z,
              P,
            ),
            M = {};
          if (f && f[0] > 0) {
            var R = f[0] / 2;
            (M.paddingLeft = R), (M.paddingRight = R);
          }
          if (f && f[1] > 0 && !v) {
            var j = f[1] / 2;
            (M.paddingTop = j), (M.paddingBottom = j);
          }
          return (
            k &&
              ((M.flex = L(k)),
              'auto' !== k || !1 !== p || M.minWidth || (M.minWidth = 0)),
            a.createElement(
              'div',
              (0, r.Z)({}, O, {
                style: (0, r.Z)((0, r.Z)({}, M), N),
                className: T,
                ref: t,
              }),
              x,
            )
          );
        });
      A.displayName = 'Col';
      var z = A,
        H = z,
        W = n(97647),
        B = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      function K(e) {
        var t = e.map(function (t, n) {
          return a.createElement(
            'li',
            {
              style: { width: ''.concat(100 / e.length, '%') },
              key: 'action-'.concat(n),
            },
            a.createElement('span', null, t),
          );
        });
        return t;
      }
      var F = function (e) {
        var t,
          n,
          i,
          u = a.useContext(s.E_),
          d = u.getPrefixCls,
          p = u.direction,
          v = a.useContext(W.Z),
          m = function (t) {
            var n;
            null === (n = e.onTabChange) || void 0 === n || n.call(e, t);
          },
          y = function () {
            var t;
            return (
              a.Children.forEach(e.children, function (e) {
                e && e.type && e.type === f && (t = !0);
              }),
              t
            );
          },
          b = e.prefixCls,
          g = e.className,
          C = e.extra,
          w = e.headStyle,
          E = void 0 === w ? {} : w,
          Z = e.bodyStyle,
          x = void 0 === Z ? {} : Z,
          k = e.title,
          N = e.loading,
          O = e.bordered,
          S = void 0 === O || O,
          P = e.size,
          T = e.type,
          M = e.cover,
          R = e.actions,
          I = e.tabList,
          L = e.children,
          D = e.activeTabKey,
          A = e.defaultActiveTabKey,
          z = e.tabBarExtraContent,
          F = e.hoverable,
          V = e.tabProps,
          G = void 0 === V ? {} : V,
          X = B(e, [
            'prefixCls',
            'className',
            'extra',
            'headStyle',
            'bodyStyle',
            'title',
            'loading',
            'bordered',
            'size',
            'type',
            'cover',
            'actions',
            'tabList',
            'children',
            'activeTabKey',
            'defaultActiveTabKey',
            'tabBarExtraContent',
            'hoverable',
            'tabProps',
          ]),
          Y = d('card', b),
          _ = 0 === x.padding || '0px' === x.padding ? { padding: 24 } : void 0,
          q = a.createElement('div', {
            className: ''.concat(Y, '-loading-block'),
          }),
          U = a.createElement(
            'div',
            { className: ''.concat(Y, '-loading-content'), style: _ },
            a.createElement(
              j,
              { gutter: 8 },
              a.createElement(H, { span: 22 }, q),
            ),
            a.createElement(
              j,
              { gutter: 8 },
              a.createElement(H, { span: 8 }, q),
              a.createElement(H, { span: 15 }, q),
            ),
            a.createElement(
              j,
              { gutter: 8 },
              a.createElement(H, { span: 6 }, q),
              a.createElement(H, { span: 18 }, q),
            ),
            a.createElement(
              j,
              { gutter: 8 },
              a.createElement(H, { span: 13 }, q),
              a.createElement(H, { span: 9 }, q),
            ),
            a.createElement(
              j,
              { gutter: 8 },
              a.createElement(H, { span: 4 }, q),
              a.createElement(H, { span: 3 }, q),
              a.createElement(H, { span: 16 }, q),
            ),
          ),
          $ = void 0 !== D,
          Q = (0, r.Z)(
            (0, r.Z)({}, G),
            ((t = {}),
            (0, o.Z)(t, $ ? 'activeKey' : 'defaultActiveKey', $ ? D : A),
            (0, o.Z)(t, 'tabBarExtraContent', z),
            t),
          ),
          J =
            I && I.length
              ? a.createElement(
                  h.Z,
                  (0, r.Z)({ size: 'large' }, Q, {
                    className: ''.concat(Y, '-head-tabs'),
                    onChange: m,
                  }),
                  I.map(function (e) {
                    return a.createElement(h.Z.TabPane, {
                      tab: e.tab,
                      disabled: e.disabled,
                      key: e.key,
                    });
                  }),
                )
              : null;
        (k || C || J) &&
          (i = a.createElement(
            'div',
            { className: ''.concat(Y, '-head'), style: E },
            a.createElement(
              'div',
              { className: ''.concat(Y, '-head-wrapper') },
              k &&
                a.createElement(
                  'div',
                  { className: ''.concat(Y, '-head-title') },
                  k,
                ),
              C &&
                a.createElement(
                  'div',
                  { className: ''.concat(Y, '-extra') },
                  C,
                ),
            ),
            J,
          ));
        var ee = M
            ? a.createElement('div', { className: ''.concat(Y, '-cover') }, M)
            : null,
          te = a.createElement(
            'div',
            { className: ''.concat(Y, '-body'), style: x },
            N ? U : L,
          ),
          ne =
            R && R.length
              ? a.createElement(
                  'ul',
                  { className: ''.concat(Y, '-actions') },
                  K(R),
                )
              : null,
          oe = (0, l.Z)(X, ['onTabChange']),
          re = P || v,
          ae = c()(
            Y,
            ((n = {}),
            (0, o.Z)(n, ''.concat(Y, '-loading'), N),
            (0, o.Z)(n, ''.concat(Y, '-bordered'), S),
            (0, o.Z)(n, ''.concat(Y, '-hoverable'), F),
            (0, o.Z)(n, ''.concat(Y, '-contain-grid'), y()),
            (0, o.Z)(n, ''.concat(Y, '-contain-tabs'), I && I.length),
            (0, o.Z)(n, ''.concat(Y, '-').concat(re), re),
            (0, o.Z)(n, ''.concat(Y, '-type-').concat(T), !!T),
            (0, o.Z)(n, ''.concat(Y, '-rtl'), 'rtl' === p),
            n),
            g,
          );
        return a.createElement(
          'div',
          (0, r.Z)({}, oe, { className: ae }),
          i,
          ee,
          te,
          ne,
        );
      };
      (F.Grid = f), (F.Meta = m);
      var V = F;
    },
    78707: function (e, t, n) {
      'use strict';
      n(61052), n(18930), n(18106), n(61418);
    },
    27049: function (e, t, n) {
      'use strict';
      var o = n(22122),
        r = n(96156),
        a = n(67294),
        i = n(94184),
        c = n.n(i),
        l = n(86032),
        s = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        u = function (e) {
          return a.createElement(l.C, null, function (t) {
            var n,
              i = t.getPrefixCls,
              l = t.direction,
              u = e.prefixCls,
              d = e.type,
              f = void 0 === d ? 'horizontal' : d,
              p = e.orientation,
              v = void 0 === p ? 'center' : p,
              m = e.className,
              h = e.children,
              y = e.dashed,
              b = e.plain,
              g = s(e, [
                'prefixCls',
                'type',
                'orientation',
                'className',
                'children',
                'dashed',
                'plain',
              ]),
              C = i('divider', u),
              w = v.length > 0 ? '-'.concat(v) : v,
              E = !!h,
              Z = c()(
                C,
                ''.concat(C, '-').concat(f),
                ((n = {}),
                (0, r.Z)(n, ''.concat(C, '-with-text'), E),
                (0, r.Z)(n, ''.concat(C, '-with-text').concat(w), E),
                (0, r.Z)(n, ''.concat(C, '-dashed'), !!y),
                (0, r.Z)(n, ''.concat(C, '-plain'), !!b),
                (0, r.Z)(n, ''.concat(C, '-rtl'), 'rtl' === l),
                n),
                m,
              );
            return a.createElement(
              'div',
              (0, o.Z)({ className: Z }, g, { role: 'separator' }),
              h &&
                a.createElement(
                  'span',
                  { className: ''.concat(C, '-inner-text') },
                  h,
                ),
            );
          });
        };
      t['Z'] = u;
    },
    48736: function (e, t, n) {
      'use strict';
      n(61052), n(7283);
    },
    49888: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return pe;
        },
      });
      var o,
        r = n(96156),
        a = n(22122),
        i = n(28481),
        c = n(67294),
        l = n(81253),
        s = n(6610),
        u = n(5991),
        d = n(10379),
        f = n(54070),
        p = n(90484),
        v = n(75164),
        m = n(59015),
        h = n(98924);
      function y(e) {
        if ('undefined' === typeof document) return 0;
        if (e || void 0 === o) {
          var t = document.createElement('div');
          (t.style.width = '100%'), (t.style.height = '200px');
          var n = document.createElement('div'),
            r = n.style;
          (r.position = 'absolute'),
            (r.top = '0'),
            (r.left = '0'),
            (r.pointerEvents = 'none'),
            (r.visibility = 'hidden'),
            (r.width = '200px'),
            (r.height = '150px'),
            (r.overflow = 'hidden'),
            n.appendChild(t),
            document.body.appendChild(n);
          var a = t.offsetWidth;
          n.style.overflow = 'scroll';
          var i = t.offsetWidth;
          a === i && (i = n.clientWidth),
            document.body.removeChild(n),
            (o = a - i);
        }
        return o;
      }
      function b(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return {};
        var n = t.element,
          o = void 0 === n ? document.body : n,
          r = {},
          a = Object.keys(e);
        return (
          a.forEach(function (e) {
            r[e] = o.style[e];
          }),
          a.forEach(function (t) {
            o.style[t] = e[t];
          }),
          r
        );
      }
      var g = b;
      function C() {
        return (
          document.body.scrollHeight >
            (window.innerHeight || document.documentElement.clientHeight) &&
          window.innerWidth > document.body.offsetWidth
        );
      }
      var w = {},
        E = function (e) {
          if (C() || e) {
            var t = 'ant-scrolling-effect',
              n = new RegExp(''.concat(t), 'g'),
              o = document.body.className;
            if (e) {
              if (!n.test(o)) return;
              return (
                g(w),
                (w = {}),
                void (document.body.className = o.replace(n, '').trim())
              );
            }
            var r = y();
            if (
              r &&
              ((w = g({
                position: 'relative',
                width: 'calc(100% - '.concat(r, 'px)'),
              })),
              !n.test(o))
            ) {
              var a = ''.concat(o, ' ').concat(t);
              document.body.className = a.trim();
            }
          }
        },
        Z = n(85061),
        x = [],
        k = 'ant-scrolling-effect',
        N = new RegExp(''.concat(k), 'g'),
        O = 0,
        S = new Map(),
        P = function e(t) {
          var n = this;
          (0, s.Z)(this, e),
            (this.lockTarget = void 0),
            (this.options = void 0),
            (this.getContainer = function () {
              var e;
              return null === (e = n.options) || void 0 === e
                ? void 0
                : e.container;
            }),
            (this.reLock = function (e) {
              var t = x.find(function (e) {
                var t = e.target;
                return t === n.lockTarget;
              });
              t && n.unLock(),
                (n.options = e),
                t && ((t.options = e), n.lock());
            }),
            (this.lock = function () {
              var e;
              if (
                !x.some(function (e) {
                  var t = e.target;
                  return t === n.lockTarget;
                })
              )
                if (
                  x.some(function (e) {
                    var t,
                      o = e.options;
                    return (
                      (null === o || void 0 === o ? void 0 : o.container) ===
                      (null === (t = n.options) || void 0 === t
                        ? void 0
                        : t.container)
                    );
                  })
                )
                  x = [].concat((0, Z.Z)(x), [
                    { target: n.lockTarget, options: n.options },
                  ]);
                else {
                  var t = 0,
                    o =
                      (null === (e = n.options) || void 0 === e
                        ? void 0
                        : e.container) || document.body;
                  ((o === document.body &&
                    window.innerWidth - document.documentElement.clientWidth >
                      0) ||
                    o.scrollHeight > o.clientHeight) &&
                    (t = y());
                  var r = o.className;
                  if (
                    (0 ===
                      x.filter(function (e) {
                        var t,
                          o = e.options;
                        return (
                          (null === o || void 0 === o
                            ? void 0
                            : o.container) ===
                          (null === (t = n.options) || void 0 === t
                            ? void 0
                            : t.container)
                        );
                      }).length &&
                      S.set(
                        o,
                        g(
                          {
                            width:
                              0 !== t
                                ? 'calc(100% - '.concat(t, 'px)')
                                : void 0,
                            overflow: 'hidden',
                            overflowX: 'hidden',
                            overflowY: 'hidden',
                          },
                          { element: o },
                        ),
                      ),
                    !N.test(r))
                  ) {
                    var a = ''.concat(r, ' ').concat(k);
                    o.className = a.trim();
                  }
                  x = [].concat((0, Z.Z)(x), [
                    { target: n.lockTarget, options: n.options },
                  ]);
                }
            }),
            (this.unLock = function () {
              var e,
                t = x.find(function (e) {
                  var t = e.target;
                  return t === n.lockTarget;
                });
              if (
                ((x = x.filter(function (e) {
                  var t = e.target;
                  return t !== n.lockTarget;
                })),
                t &&
                  !x.some(function (e) {
                    var n,
                      o = e.options;
                    return (
                      (null === o || void 0 === o ? void 0 : o.container) ===
                      (null === (n = t.options) || void 0 === n
                        ? void 0
                        : n.container)
                    );
                  }))
              ) {
                var o =
                    (null === (e = n.options) || void 0 === e
                      ? void 0
                      : e.container) || document.body,
                  r = o.className;
                N.test(r) &&
                  (g(S.get(o), { element: o }),
                  S.delete(o),
                  (o.className = o.className.replace(N, '').trim()));
              }
            }),
            (this.lockTarget = O++),
            (this.options = t);
        },
        T = 0,
        M = (0, h.Z)();
      var R = {},
        j = function (e) {
          if (!M) return null;
          if (e) {
            if ('string' === typeof e) return document.querySelectorAll(e)[0];
            if ('function' === typeof e) return e();
            if ('object' === (0, p.Z)(e) && e instanceof window.HTMLElement)
              return e;
          }
          return document.body;
        },
        I = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, f.Z)(n);
          function n(e) {
            var o;
            return (
              (0, s.Z)(this, n),
              (o = t.call(this, e)),
              (o.container = void 0),
              (o.componentRef = c.createRef()),
              (o.rafId = void 0),
              (o.scrollLocker = void 0),
              (o.renderComponent = void 0),
              (o.updateScrollLocker = function (e) {
                var t = e || {},
                  n = t.visible,
                  r = o.props,
                  a = r.getContainer,
                  i = r.visible;
                i &&
                  i !== n &&
                  M &&
                  j(a) !== o.scrollLocker.getContainer() &&
                  o.scrollLocker.reLock({ container: j(a) });
              }),
              (o.updateOpenCount = function (e) {
                var t = e || {},
                  n = t.visible,
                  r = t.getContainer,
                  a = o.props,
                  i = a.visible,
                  c = a.getContainer;
                i !== n &&
                  M &&
                  j(c) === document.body &&
                  (i && !n ? (T += 1) : e && (T -= 1));
                var l = 'function' === typeof c && 'function' === typeof r;
                (l ? c.toString() !== r.toString() : c !== r) &&
                  o.removeCurrentContainer();
              }),
              (o.attachToParent = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if (e || (o.container && !o.container.parentNode)) {
                  var t = j(o.props.getContainer);
                  return !!t && (t.appendChild(o.container), !0);
                }
                return !0;
              }),
              (o.getContainer = function () {
                return M
                  ? (o.container ||
                      ((o.container = document.createElement('div')),
                      o.attachToParent(!0)),
                    o.setWrapperClassName(),
                    o.container)
                  : null;
              }),
              (o.setWrapperClassName = function () {
                var e = o.props.wrapperClassName;
                o.container &&
                  e &&
                  e !== o.container.className &&
                  (o.container.className = e);
              }),
              (o.removeCurrentContainer = function () {
                var e, t;
                null === (e = o.container) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(o.container);
              }),
              (o.switchScrollingEffect = function () {
                1 !== T || Object.keys(R).length
                  ? T || (g(R), (R = {}), E(!0))
                  : (E(),
                    (R = g({
                      overflow: 'hidden',
                      overflowX: 'hidden',
                      overflowY: 'hidden',
                    })));
              }),
              (o.scrollLocker = new P({ container: j(e.getContainer) })),
              o
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  this.updateOpenCount(),
                    this.attachToParent() ||
                      (this.rafId = (0, v.Z)(function () {
                        e.forceUpdate();
                      }));
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.updateOpenCount(e),
                    this.updateScrollLocker(e),
                    this.setWrapperClassName(),
                    this.attachToParent();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.visible,
                    n = e.getContainer;
                  M && j(n) === document.body && (T = t && T ? T - 1 : T),
                    this.removeCurrentContainer(),
                    v.Z.cancel(this.rafId);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.forceRender,
                    o = e.visible,
                    r = null,
                    a = {
                      getOpenCount: function () {
                        return T;
                      },
                      getContainer: this.getContainer,
                      switchScrollingEffect: this.switchScrollingEffect,
                      scrollLocker: this.scrollLocker,
                    };
                  return (
                    (n || o || this.componentRef.current) &&
                      (r = c.createElement(
                        m.Z,
                        {
                          getContainer: this.getContainer,
                          ref: this.componentRef,
                        },
                        t(a),
                      )),
                    r
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        L = I,
        D = n(28991),
        A = n(63349),
        z = n(94184),
        H = n.n(z),
        W = n(15105),
        B = n(98423);
      function K(e) {
        return Array.isArray(e) ? e : [e];
      }
      var F = {
          transition: 'transitionend',
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
        },
        V = Object.keys(F).filter(function (e) {
          if ('undefined' === typeof document) return !1;
          var t = document.getElementsByTagName('html')[0];
          return e in (t ? t.style : {});
        })[0],
        G = F[V];
      function X(e, t, n, o) {
        e.addEventListener
          ? e.addEventListener(t, n, o)
          : e.attachEvent && e.attachEvent('on'.concat(t), n);
      }
      function Y(e, t, n, o) {
        e.removeEventListener
          ? e.removeEventListener(t, n, o)
          : e.attachEvent && e.detachEvent('on'.concat(t), n);
      }
      function _(e, t) {
        var n = 'function' === typeof e ? e(t) : e;
        return Array.isArray(n) ? (2 === n.length ? n : [n[0], n[1]]) : [n];
      }
      var q = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        U = !(
          'undefined' !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        $ = function e(t, n, o, r) {
          if (!n || n === document || n instanceof Document) return !1;
          if (n === t.parentNode) return !0;
          var a = Math.max(Math.abs(o), Math.abs(r)) === Math.abs(r),
            i = Math.max(Math.abs(o), Math.abs(r)) === Math.abs(o),
            c = n.scrollHeight - n.clientHeight,
            l = n.scrollWidth - n.clientWidth,
            s = document.defaultView.getComputedStyle(n),
            u = 'auto' === s.overflowY || 'scroll' === s.overflowY,
            d = 'auto' === s.overflowX || 'scroll' === s.overflowX,
            f = c && u,
            p = l && d;
          return (
            !!(
              (a &&
                (!f ||
                  (f &&
                    ((n.scrollTop >= c && r < 0) ||
                      (n.scrollTop <= 0 && r > 0))))) ||
              (i &&
                (!p ||
                  (p &&
                    ((n.scrollLeft >= l && o < 0) ||
                      (n.scrollLeft <= 0 && o > 0)))))
            ) && e(t, n.parentNode, o, r)
          );
        },
        Q = {},
        J = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, f.Z)(n);
          function n(e) {
            var o;
            return (
              (0, s.Z)(this, n),
              (o = t.call(this, e)),
              (o.domFocus = function () {
                o.dom && o.dom.focus();
              }),
              (o.removeStartHandler = function (e) {
                e.touches.length > 1 ||
                  (o.startPos = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                  });
              }),
              (o.removeMoveHandler = function (e) {
                if (!(e.changedTouches.length > 1)) {
                  var t = e.currentTarget,
                    n = e.changedTouches[0].clientX - o.startPos.x,
                    r = e.changedTouches[0].clientY - o.startPos.y;
                  (t === o.maskDom ||
                    t === o.handlerDom ||
                    (t === o.contentDom && $(t, e.target, n, r))) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }),
              (o.transitionEnd = function (e) {
                var t = e.target;
                Y(t, G, o.transitionEnd), (t.style.transition = '');
              }),
              (o.onKeyDown = function (e) {
                if (e.keyCode === W.Z.ESC) {
                  var t = o.props.onClose;
                  e.stopPropagation(), t && t(e);
                }
              }),
              (o.onWrapperTransitionEnd = function (e) {
                var t = o.props,
                  n = t.open,
                  r = t.afterVisibleChange;
                e.target === o.contentWrapper &&
                  e.propertyName.match(/transform$/) &&
                  ((o.dom.style.transition = ''),
                  !n &&
                    o.getCurrentDrawerSome() &&
                    ((document.body.style.overflowX = ''),
                    o.maskDom &&
                      ((o.maskDom.style.left = ''),
                      (o.maskDom.style.width = ''))),
                  r && r(!!n));
              }),
              (o.openLevelTransition = function () {
                var e = o.props,
                  t = e.open,
                  n = e.width,
                  r = e.height,
                  a = o.getHorizontalBoolAndPlacementName(),
                  i = a.isHorizontal,
                  c = a.placementName,
                  l = o.contentDom
                    ? o.contentDom.getBoundingClientRect()[
                        i ? 'width' : 'height'
                      ]
                    : 0,
                  s = (i ? n : r) || l;
                o.setLevelAndScrolling(t, c, s);
              }),
              (o.setLevelTransform = function (e, t, n, r) {
                var a = o.props,
                  i = a.placement,
                  c = a.levelMove,
                  l = a.duration,
                  s = a.ease,
                  u = a.showMask;
                o.levelDom.forEach(function (a) {
                  (a.style.transition = 'transform '.concat(l, ' ').concat(s)),
                    X(a, G, o.transitionEnd);
                  var d = e ? n : 0;
                  if (c) {
                    var f = _(c, { target: a, open: e });
                    d = e ? f[0] : f[1] || 0;
                  }
                  var p = 'number' === typeof d ? ''.concat(d, 'px') : d,
                    v = 'left' === i || 'top' === i ? p : '-'.concat(p);
                  (v =
                    u && 'right' === i && r
                      ? 'calc('.concat(v, ' + ').concat(r, 'px)')
                      : v),
                    (a.style.transform = d
                      ? ''.concat(t, '(').concat(v, ')')
                      : '');
                });
              }),
              (o.setLevelAndScrolling = function (e, t, n) {
                var r = o.props.onChange;
                if (!U) {
                  var a =
                    document.body.scrollHeight >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    window.innerWidth > document.body.offsetWidth
                      ? y(!0)
                      : 0;
                  o.setLevelTransform(e, t, n, a),
                    o.toggleScrollingToDrawerAndBody(a);
                }
                r && r(e);
              }),
              (o.toggleScrollingToDrawerAndBody = function (e) {
                var t = o.props,
                  n = t.getContainer,
                  r = t.showMask,
                  a = t.open,
                  i = n && n();
                if (i && i.parentNode === document.body && r) {
                  var c = ['touchstart'],
                    l = [document.body, o.maskDom, o.handlerDom, o.contentDom];
                  a && 'hidden' !== document.body.style.overflow
                    ? (e && o.addScrollingEffect(e),
                      (document.body.style.touchAction = 'none'),
                      l.forEach(function (e, t) {
                        e &&
                          X(
                            e,
                            c[t] || 'touchmove',
                            t ? o.removeMoveHandler : o.removeStartHandler,
                            o.passive,
                          );
                      }))
                    : o.getCurrentDrawerSome() &&
                      ((document.body.style.touchAction = ''),
                      e && o.remScrollingEffect(e),
                      l.forEach(function (e, t) {
                        e &&
                          Y(
                            e,
                            c[t] || 'touchmove',
                            t ? o.removeMoveHandler : o.removeStartHandler,
                            o.passive,
                          );
                      }));
                }
              }),
              (o.addScrollingEffect = function (e) {
                var t = o.props,
                  n = t.placement,
                  r = t.duration,
                  a = t.ease,
                  i = 'width '.concat(r, ' ').concat(a),
                  c = 'transform '.concat(r, ' ').concat(a);
                switch (((o.dom.style.transition = 'none'), n)) {
                  case 'right':
                    o.dom.style.transform = 'translateX(-'.concat(e, 'px)');
                    break;
                  case 'top':
                  case 'bottom':
                    (o.dom.style.width = 'calc(100% - '.concat(e, 'px)')),
                      (o.dom.style.transform = 'translateZ(0)');
                    break;
                  default:
                    break;
                }
                clearTimeout(o.timeout),
                  (o.timeout = setTimeout(function () {
                    o.dom &&
                      ((o.dom.style.transition = ''.concat(c, ',').concat(i)),
                      (o.dom.style.width = ''),
                      (o.dom.style.transform = ''));
                  }));
              }),
              (o.remScrollingEffect = function (e) {
                var t,
                  n = o.props,
                  r = n.placement,
                  a = n.duration,
                  i = n.ease;
                V && (document.body.style.overflowX = 'hidden'),
                  (o.dom.style.transition = 'none');
                var c = 'width '.concat(a, ' ').concat(i),
                  l = 'transform '.concat(a, ' ').concat(i);
                switch (r) {
                  case 'left':
                    (o.dom.style.width = '100%'),
                      (c = 'width 0s '.concat(i, ' ').concat(a));
                    break;
                  case 'right':
                    (o.dom.style.transform = 'translateX('.concat(e, 'px)')),
                      (o.dom.style.width = '100%'),
                      (c = 'width 0s '.concat(i, ' ').concat(a)),
                      o.maskDom &&
                        ((o.maskDom.style.left = '-'.concat(e, 'px')),
                        (o.maskDom.style.width = 'calc(100% + '.concat(
                          e,
                          'px)',
                        )));
                    break;
                  case 'top':
                  case 'bottom':
                    (o.dom.style.width = 'calc(100% + '.concat(e, 'px)')),
                      (o.dom.style.height = '100%'),
                      (o.dom.style.transform = 'translateZ(0)'),
                      (t = 'height 0s '.concat(i, ' ').concat(a));
                    break;
                  default:
                    break;
                }
                clearTimeout(o.timeout),
                  (o.timeout = setTimeout(function () {
                    o.dom &&
                      ((o.dom.style.transition = ''
                        .concat(l, ',')
                        .concat(t ? ''.concat(t, ',') : '')
                        .concat(c)),
                      (o.dom.style.transform = ''),
                      (o.dom.style.width = ''),
                      (o.dom.style.height = ''));
                  }));
              }),
              (o.getCurrentDrawerSome = function () {
                return !Object.keys(Q).some(function (e) {
                  return Q[e];
                });
              }),
              (o.getLevelDom = function (e) {
                var t = e.level,
                  n = e.getContainer;
                if (!U) {
                  var r = n && n(),
                    a = r ? r.parentNode : null;
                  if (((o.levelDom = []), 'all' === t)) {
                    var i = a ? Array.prototype.slice.call(a.children) : [];
                    i.forEach(function (e) {
                      'SCRIPT' !== e.nodeName &&
                        'STYLE' !== e.nodeName &&
                        'LINK' !== e.nodeName &&
                        e !== r &&
                        o.levelDom.push(e);
                    });
                  } else
                    t &&
                      K(t).forEach(function (e) {
                        document.querySelectorAll(e).forEach(function (e) {
                          o.levelDom.push(e);
                        });
                      });
                }
              }),
              (o.getHorizontalBoolAndPlacementName = function () {
                var e = o.props.placement,
                  t = 'left' === e || 'right' === e,
                  n = 'translate'.concat(t ? 'X' : 'Y');
                return { isHorizontal: t, placementName: n };
              }),
              (o.state = { _self: (0, A.Z)(o) }),
              o
            );
          }
          return (
            (0, u.Z)(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this;
                    if (!U) {
                      var t = !1;
                      try {
                        window.addEventListener(
                          'test',
                          null,
                          Object.defineProperty({}, 'passive', {
                            get: function () {
                              return (t = !0), null;
                            },
                          }),
                        );
                      } catch (l) {}
                      this.passive = !!t && { passive: !1 };
                    }
                    var n,
                      o = this.props,
                      r = o.open,
                      a = o.getContainer,
                      i = o.showMask,
                      c = a && a();
                    ((this.drawerId = 'drawer_id_'.concat(
                      Number(
                        (Date.now() + Math.random())
                          .toString()
                          .replace(
                            '.',
                            Math.round(9 * Math.random()).toString(),
                          ),
                      ).toString(16),
                    )),
                    this.getLevelDom(this.props),
                    r) &&
                      (c &&
                        c.parentNode === document.body &&
                        (Q[this.drawerId] = r),
                      this.openLevelTransition(),
                      this.forceUpdate(function () {
                        e.domFocus();
                      }),
                      i &&
                        (null === (n = this.props.scrollLocker) ||
                          void 0 === n ||
                          n.lock()));
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.open,
                      o = t.getContainer,
                      r = t.scrollLocker,
                      a = t.showMask,
                      i = o && o();
                    n !== e.open &&
                      (i &&
                        i.parentNode === document.body &&
                        (Q[this.drawerId] = !!n),
                      this.openLevelTransition(),
                      n
                        ? (this.domFocus(),
                          a && (null === r || void 0 === r || r.lock()))
                        : null === r || void 0 === r || r.unLock());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = this.props,
                      t = e.open,
                      n = e.scrollLocker;
                    delete Q[this.drawerId],
                      t &&
                        (this.setLevelTransform(!1),
                        (document.body.style.touchAction = '')),
                      null === n || void 0 === n || n.unLock();
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      o = n.className,
                      i = n.children,
                      s = n.style,
                      u = n.width,
                      d = n.height,
                      f = (n.defaultOpen, n.open),
                      p = n.prefixCls,
                      v = n.placement,
                      m =
                        (n.level,
                        n.levelMove,
                        n.ease,
                        n.duration,
                        n.getContainer,
                        n.handler),
                      h = (n.onChange, n.afterVisibleChange, n.showMask),
                      y = n.maskClosable,
                      b = n.maskStyle,
                      g = n.onClose,
                      C = n.onHandleClick,
                      w = n.keyboard,
                      E =
                        (n.getOpenCount, n.scrollLocker, n.contentWrapperStyle),
                      Z = (0, l.Z)(n, [
                        'className',
                        'children',
                        'style',
                        'width',
                        'height',
                        'defaultOpen',
                        'open',
                        'prefixCls',
                        'placement',
                        'level',
                        'levelMove',
                        'ease',
                        'duration',
                        'getContainer',
                        'handler',
                        'onChange',
                        'afterVisibleChange',
                        'showMask',
                        'maskClosable',
                        'maskStyle',
                        'onClose',
                        'onHandleClick',
                        'keyboard',
                        'getOpenCount',
                        'scrollLocker',
                        'contentWrapperStyle',
                      ]),
                      x = !!this.dom && f,
                      k = H()(
                        p,
                        ((e = {}),
                        (0, r.Z)(e, ''.concat(p, '-').concat(v), !0),
                        (0, r.Z)(e, ''.concat(p, '-open'), x),
                        (0, r.Z)(e, o || '', !!o),
                        (0, r.Z)(e, 'no-mask', !h),
                        e),
                      ),
                      N = this.getHorizontalBoolAndPlacementName(),
                      O = N.placementName,
                      S = 'left' === v || 'top' === v ? '-100%' : '100%',
                      P = x ? '' : ''.concat(O, '(').concat(S, ')'),
                      T =
                        m &&
                        c.cloneElement(m, {
                          onClick: function (e) {
                            m.props.onClick && m.props.onClick(), C && C(e);
                          },
                          ref: function (e) {
                            t.handlerDom = e;
                          },
                        });
                    return c.createElement(
                      'div',
                      (0, a.Z)({}, (0, B.Z)(Z, ['switchScrollingEffect']), {
                        tabIndex: -1,
                        className: k,
                        style: s,
                        ref: function (e) {
                          t.dom = e;
                        },
                        onKeyDown: x && w ? this.onKeyDown : void 0,
                        onTransitionEnd: this.onWrapperTransitionEnd,
                      }),
                      h &&
                        c.createElement('div', {
                          className: ''.concat(p, '-mask'),
                          onClick: y ? g : void 0,
                          style: b,
                          ref: function (e) {
                            t.maskDom = e;
                          },
                        }),
                      c.createElement(
                        'div',
                        {
                          className: ''.concat(p, '-content-wrapper'),
                          style: (0, D.Z)(
                            {
                              transform: P,
                              msTransform: P,
                              width: q(u) ? ''.concat(u, 'px') : u,
                              height: q(d) ? ''.concat(d, 'px') : d,
                            },
                            E,
                          ),
                          ref: function (e) {
                            t.contentWrapper = e;
                          },
                        },
                        c.createElement(
                          'div',
                          {
                            className: ''.concat(p, '-content'),
                            ref: function (e) {
                              t.contentDom = e;
                            },
                            onTouchStart:
                              x && h ? this.removeStartHandler : void 0,
                            onTouchMove:
                              x && h ? this.removeMoveHandler : void 0,
                          },
                          i,
                        ),
                        T,
                      ),
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = t.prevProps,
                      o = t._self,
                      r = { prevProps: e };
                    if (void 0 !== n) {
                      var a = e.placement,
                        i = e.level;
                      a !== n.placement && (o.contentDom = null),
                        i !== n.level && o.getLevelDom(e);
                    }
                    return r;
                  },
                },
              ],
            ),
            n
          );
        })(c.Component),
        ee = J,
        te = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, f.Z)(n);
          function n(e) {
            var o;
            (0, s.Z)(this, n),
              (o = t.call(this, e)),
              (o.onHandleClick = function (e) {
                var t = o.props,
                  n = t.onHandleClick,
                  r = t.open;
                if ((n && n(e), 'undefined' === typeof r)) {
                  var a = o.state.open;
                  o.setState({ open: !a });
                }
              }),
              (o.onClose = function (e) {
                var t = o.props,
                  n = t.onClose,
                  r = t.open;
                n && n(e), 'undefined' === typeof r && o.setState({ open: !1 });
              });
            var r = 'undefined' !== typeof e.open ? e.open : !!e.defaultOpen;
            return (
              (o.state = { open: r }),
              'onMaskClick' in e &&
                console.warn(
                  '`onMaskClick` are removed, please use `onClose` instead.',
                ),
              o
            );
          }
          return (
            (0, u.Z)(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = (t.defaultOpen, t.getContainer),
                      o = t.wrapperClassName,
                      r = t.forceRender,
                      i = t.handler,
                      s = (0, l.Z)(t, [
                        'defaultOpen',
                        'getContainer',
                        'wrapperClassName',
                        'forceRender',
                        'handler',
                      ]),
                      u = this.state.open;
                    if (!n)
                      return c.createElement(
                        'div',
                        {
                          className: o,
                          ref: function (t) {
                            e.dom = t;
                          },
                        },
                        c.createElement(
                          ee,
                          (0, a.Z)({}, s, {
                            open: u,
                            handler: i,
                            getContainer: function () {
                              return e.dom;
                            },
                            onClose: this.onClose,
                            onHandleClick: this.onHandleClick,
                          }),
                        ),
                      );
                    var d = !!i || r;
                    return c.createElement(
                      L,
                      {
                        visible: u,
                        forceRender: d,
                        getContainer: n,
                        wrapperClassName: o,
                      },
                      function (t) {
                        var n = t.visible,
                          o = t.afterClose,
                          r = (0, l.Z)(t, ['visible', 'afterClose']);
                        return c.createElement(
                          ee,
                          (0, a.Z)({}, s, r, {
                            open: void 0 !== n ? n : u,
                            afterVisibleChange:
                              void 0 !== o ? o : s.afterVisibleChange,
                            handler: i,
                            onClose: e.onClose,
                            onHandleClick: e.onHandleClick,
                          }),
                        );
                      },
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = t.prevProps,
                      o = { prevProps: e };
                    return (
                      'undefined' !== typeof n &&
                        e.open !== n.open &&
                        (o.open = e.open),
                      o
                    );
                  },
                },
              ],
            ),
            n
          );
        })(c.Component);
      te.defaultProps = {
        prefixCls: 'drawer',
        placement: 'left',
        getContainer: 'body',
        defaultOpen: !1,
        level: 'all',
        duration: '.3s',
        ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        onChange: function () {},
        afterVisibleChange: function () {},
        handler: c.createElement(
          'div',
          { className: 'drawer-handle' },
          c.createElement('i', { className: 'drawer-handle-icon' }),
        ),
        showMask: !0,
        maskClosable: !0,
        maskStyle: {},
        wrapperClassName: '',
        className: '',
        keyboard: !0,
        forceRender: !1,
      };
      var ne = te,
        oe = ne,
        re = n(54549),
        ae = n(86032),
        ie = n(93355);
      function ce() {
        var e = c.useReducer(function (e) {
            return e + 1;
          }, 0),
          t = (0, i.Z)(e, 2),
          n = t[1];
        return n;
      }
      var le = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        se = c.createContext(null),
        ue = ((0, ie.b)('top', 'right', 'bottom', 'left'), { distance: 180 }),
        de = c.forwardRef(function (e, t) {
          var n = e.width,
            o = void 0 === n ? 256 : n,
            l = e.height,
            s = void 0 === l ? 256 : l,
            u = e.closable,
            d = void 0 === u || u,
            f = e.placement,
            p = void 0 === f ? 'right' : f,
            v = e.maskClosable,
            m = void 0 === v || v,
            h = e.mask,
            b = void 0 === h || h,
            g = e.level,
            C = void 0 === g ? null : g,
            w = e.keyboard,
            E = void 0 === w || w,
            Z = e.push,
            x = void 0 === Z ? ue : Z,
            k = e.closeIcon,
            N = void 0 === k ? c.createElement(re.Z, null) : k,
            O = e.bodyStyle,
            S = e.drawerStyle,
            P = e.prefixCls,
            T = e.className,
            M = e.direction,
            R = e.visible,
            j = e.children,
            I = e.zIndex,
            L = e.destroyOnClose,
            D = e.style,
            A = e.title,
            z = e.headerStyle,
            W = e.onClose,
            B = e.footer,
            K = e.footerStyle,
            F = le(e, [
              'width',
              'height',
              'closable',
              'placement',
              'maskClosable',
              'mask',
              'level',
              'keyboard',
              'push',
              'closeIcon',
              'bodyStyle',
              'drawerStyle',
              'prefixCls',
              'className',
              'direction',
              'visible',
              'children',
              'zIndex',
              'destroyOnClose',
              'style',
              'title',
              'headerStyle',
              'onClose',
              'footer',
              'footerStyle',
            ]),
            V = ce(),
            G = c.useState(!1),
            X = (0, i.Z)(G, 2),
            Y = X[0],
            _ = X[1],
            q = c.useContext(se),
            U = c.useRef(!1);
          c.useEffect(function () {
            return (
              R && q && q.push(),
              function () {
                q && q.pull();
              }
            );
          }, []),
            c.useEffect(
              function () {
                q && (R ? q.push() : q.pull());
              },
              [R],
            );
          var $ = c.useMemo(
            function () {
              return {
                push: function () {
                  x && _(!0);
                },
                pull: function () {
                  x && _(!1);
                },
              };
            },
            [x],
          );
          c.useImperativeHandle(
            t,
            function () {
              return $;
            },
            [$],
          );
          var Q = L && !R,
            J = function () {
              Q && (R || ((U.current = !0), V()));
            },
            ee = function () {
              if (!R && !b) return {};
              var e = {};
              return (
                'left' === p || 'right' === p ? (e.width = o) : (e.height = s),
                e
              );
            },
            te = function () {
              var e = function (e) {
                  var t;
                  return (
                    (t =
                      'boolean' === typeof x
                        ? x
                          ? ue.distance
                          : 0
                        : x.distance),
                    (t = parseFloat(String(t || 0))),
                    'left' === e || 'right' === e
                      ? 'translateX('.concat('left' === e ? t : -t, 'px)')
                      : 'top' === e || 'bottom' === e
                      ? 'translateY('.concat('top' === e ? t : -t, 'px)')
                      : void 0
                  );
                },
                t = b ? {} : ee();
              return (0, a.Z)(
                (0, a.Z)({ zIndex: I, transform: Y ? e(p) : void 0 }, t),
                D,
              );
            };
          function ne() {
            return (
              d &&
              c.createElement(
                'button',
                {
                  type: 'button',
                  onClick: W,
                  'aria-label': 'Close',
                  className: ''.concat(P, '-close'),
                  style: { '--scroll-bar': ''.concat(y(), 'px') },
                },
                N,
              )
            );
          }
          function ae() {
            if (!A && !d) return null;
            var e = ''.concat(P, A ? '-header' : '-header-no-title');
            return c.createElement(
              'div',
              { className: e, style: z },
              A &&
                c.createElement(
                  'div',
                  { className: ''.concat(P, '-title') },
                  A,
                ),
              d && ne(),
            );
          }
          function ie() {
            if (!B) return null;
            var e = ''.concat(P, '-footer');
            return c.createElement('div', { className: e, style: K }, B);
          }
          var de = function () {
              if (U.current && !R) return null;
              U.current = !1;
              var e = {};
              return (
                Q && ((e.opacity = 0), (e.transition = 'opacity .3s')),
                c.createElement(
                  'div',
                  {
                    className: ''.concat(P, '-wrapper-body'),
                    style: (0, a.Z)((0, a.Z)({}, e), S),
                    onTransitionEnd: J,
                  },
                  ae(),
                  c.createElement(
                    'div',
                    { className: ''.concat(P, '-body'), style: O },
                    j,
                  ),
                  ie(),
                )
              );
            },
            fe = H()(
              (0, r.Z)({ 'no-mask': !b }, ''.concat(P, '-rtl'), 'rtl' === M),
              T,
            ),
            pe = b ? ee() : {};
          return c.createElement(
            se.Provider,
            { value: $ },
            c.createElement(
              oe,
              (0, a.Z)(
                { handler: !1 },
                (0, a.Z)(
                  {
                    placement: p,
                    prefixCls: P,
                    maskClosable: m,
                    level: C,
                    keyboard: E,
                    children: j,
                    onClose: W,
                  },
                  F,
                ),
                pe,
                { open: R, showMask: b, style: te(), className: fe },
              ),
              de(),
            ),
          );
        });
      de.displayName = 'Drawer';
      var fe = c.forwardRef(function (e, t) {
        var n = e.prefixCls,
          o = e.getContainer,
          r = c.useContext(ae.E_),
          i = r.getPopupContainer,
          l = r.getPrefixCls,
          s = r.direction,
          u = l('drawer', n),
          d =
            void 0 === o && i
              ? function () {
                  return i(document.body);
                }
              : o;
        return c.createElement(
          de,
          (0, a.Z)({}, e, {
            ref: t,
            prefixCls: u,
            getContainer: d,
            direction: s,
          }),
        );
      });
      fe.displayName = 'DrawerWrapper';
      var pe = fe;
    },
    57338: function (e, t, n) {
      'use strict';
      n(61052), n(91203);
    },
    19650: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return v;
        },
        Z: function () {
          return b;
        },
      });
      var o = n(22122),
        r = n(96156),
        a = n(28481),
        i = n(67294),
        c = n(94184),
        l = n.n(c),
        s = n(50344),
        u = n(86032);
      function d(e) {
        var t = e.className,
          n = e.direction,
          a = e.index,
          c = e.marginDirection,
          l = e.children,
          s = e.split,
          u = e.wrap,
          d = i.useContext(v),
          f = d.horizontalSize,
          p = d.verticalSize,
          m = d.latestIndex,
          h = d.supportFlexGap,
          y = {};
        return (
          h ||
            ('vertical' === n
              ? a < m && (y = { marginBottom: f / (s ? 2 : 1) })
              : (y = (0, o.Z)(
                  (0, o.Z)({}, a < m && (0, r.Z)({}, c, f / (s ? 2 : 1))),
                  u && { paddingBottom: p },
                ))),
          null === l || void 0 === l
            ? null
            : i.createElement(
                i.Fragment,
                null,
                i.createElement('div', { className: t, style: y }, l),
                a < m &&
                  s &&
                  i.createElement(
                    'span',
                    { className: ''.concat(t, '-split'), style: y },
                    s,
                  ),
              )
        );
      }
      var f = n(33732),
        p = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        v = i.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        m = { small: 8, middle: 16, large: 24 };
      function h(e) {
        return 'string' === typeof e ? m[e] : e || 0;
      }
      var y = function (e) {
          var t,
            n = i.useContext(u.E_),
            c = n.getPrefixCls,
            m = n.space,
            y = n.direction,
            b = e.size,
            g =
              void 0 === b
                ? (null === m || void 0 === m ? void 0 : m.size) || 'small'
                : b,
            C = e.align,
            w = e.className,
            E = e.children,
            Z = e.direction,
            x = void 0 === Z ? 'horizontal' : Z,
            k = e.prefixCls,
            N = e.split,
            O = e.style,
            S = e.wrap,
            P = void 0 !== S && S,
            T = p(e, [
              'size',
              'align',
              'className',
              'children',
              'direction',
              'prefixCls',
              'split',
              'style',
              'wrap',
            ]),
            M = (0, f.Z)(),
            R = i.useMemo(
              function () {
                return (Array.isArray(g) ? g : [g, g]).map(function (e) {
                  return h(e);
                });
              },
              [g],
            ),
            j = (0, a.Z)(R, 2),
            I = j[0],
            L = j[1],
            D = (0, s.Z)(E, { keepEmpty: !0 }),
            A = void 0 === C && 'horizontal' === x ? 'center' : C,
            z = c('space', k),
            H = l()(
              z,
              ''.concat(z, '-').concat(x),
              ((t = {}),
              (0, r.Z)(t, ''.concat(z, '-rtl'), 'rtl' === y),
              (0, r.Z)(t, ''.concat(z, '-align-').concat(A), A),
              t),
              w,
            ),
            W = ''.concat(z, '-item'),
            B = 'rtl' === y ? 'marginLeft' : 'marginRight',
            K = 0,
            F = D.map(function (e, t) {
              return (
                null !== e && void 0 !== e && (K = t),
                i.createElement(
                  d,
                  {
                    className: W,
                    key: ''.concat(W, '-').concat(t),
                    direction: x,
                    index: t,
                    marginDirection: B,
                    split: N,
                    wrap: P,
                  },
                  e,
                )
              );
            }),
            V = i.useMemo(
              function () {
                return {
                  horizontalSize: I,
                  verticalSize: L,
                  latestIndex: K,
                  supportFlexGap: M,
                };
              },
              [I, L, K, M],
            );
          if (0 === D.length) return null;
          var G = {};
          return (
            P && ((G.flexWrap = 'wrap'), M || (G.marginBottom = -L)),
            M && ((G.columnGap = I), (G.rowGap = L)),
            i.createElement(
              'div',
              (0, o.Z)(
                { className: H, style: (0, o.Z)((0, o.Z)({}, G), O) },
                T,
              ),
              i.createElement(v.Provider, { value: V }, F),
            )
          );
        },
        b = y;
    },
    49111: function (e, t, n) {
      'use strict';
      n(61052), n(43096);
    },
    16351: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return Oe;
        },
      });
      var o = n(22122),
        r = n(96156),
        a = n(67294),
        i = n(28481),
        c = n(90484),
        l = n(81253),
        s = n(28991),
        u = n(94184),
        d = n.n(u),
        f = n(50344),
        p = n(31131),
        v = n(21770),
        m = n(85061),
        h = n(75164),
        y = n(6610),
        b = n(5991),
        g = n(10379),
        C = n(54070),
        w = n(34203),
        E = n(80334),
        Z = n(42550),
        x = n(91033),
        k = 'rc-observer-key',
        N = (function (e) {
          (0, g.Z)(n, e);
          var t = (0, C.Z)(n);
          function n() {
            var e;
            return (
              (0, y.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.childNode = null),
              (e.currentElement = null),
              (e.state = {
                width: 0,
                height: 0,
                offsetHeight: 0,
                offsetWidth: 0,
              }),
              (e.onResize = function (t) {
                var n = e.props.onResize,
                  o = t[0].target,
                  r = o.getBoundingClientRect(),
                  a = r.width,
                  i = r.height,
                  c = o.offsetWidth,
                  l = o.offsetHeight,
                  u = Math.floor(a),
                  d = Math.floor(i);
                if (
                  e.state.width !== u ||
                  e.state.height !== d ||
                  e.state.offsetWidth !== c ||
                  e.state.offsetHeight !== l
                ) {
                  var f = {
                    width: u,
                    height: d,
                    offsetWidth: c,
                    offsetHeight: l,
                  };
                  e.setState(f),
                    n &&
                      Promise.resolve().then(function () {
                        n(
                          (0, s.Z)(
                            (0, s.Z)({}, f),
                            {},
                            { offsetWidth: c, offsetHeight: l },
                          ),
                          o,
                        );
                      });
                }
              }),
              (e.setChildNode = function (t) {
                e.childNode = t;
              }),
              e
            );
          }
          return (
            (0, b.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.destroyObserver();
                },
              },
              {
                key: 'onComponentUpdated',
                value: function () {
                  var e = this.props.disabled;
                  if (e) this.destroyObserver();
                  else {
                    var t = (0, w.Z)(this.childNode || this),
                      n = t !== this.currentElement;
                    n && (this.destroyObserver(), (this.currentElement = t)),
                      !this.resizeObserver &&
                        t &&
                        ((this.resizeObserver = new x.Z(this.onResize)),
                        this.resizeObserver.observe(t));
                  }
                },
              },
              {
                key: 'destroyObserver',
                value: function () {
                  this.resizeObserver &&
                    (this.resizeObserver.disconnect(),
                    (this.resizeObserver = null));
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.children,
                    t = (0, f.Z)(e);
                  if (t.length > 1)
                    (0, E.ZP)(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (0 === t.length)
                    return (
                      (0, E.ZP)(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var n = t[0];
                  if (a.isValidElement(n) && (0, Z.Yr)(n)) {
                    var o = n.ref;
                    t[0] = a.cloneElement(n, {
                      ref: (0, Z.sQ)(o, this.setChildNode),
                    });
                  }
                  return 1 === t.length
                    ? t[0]
                    : t.map(function (e, t) {
                        return !a.isValidElement(e) ||
                          ('key' in e && null !== e.key)
                          ? e
                          : a.cloneElement(e, {
                              key: ''.concat(k, '-').concat(t),
                            });
                      });
                },
              },
            ]),
            n
          );
        })(a.Component);
      N.displayName = 'ResizeObserver';
      var O = N;
      function S(e) {
        var t = (0, a.useRef)(),
          n = (0, a.useRef)(!1);
        function o() {
          for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++)
            r[a] = arguments[a];
          n.current ||
            (h.Z.cancel(t.current),
            (t.current = (0, h.Z)(function () {
              e.apply(void 0, r);
            })));
        }
        return (
          (0, a.useEffect)(function () {
            return function () {
              (n.current = !0), h.Z.cancel(t.current);
            };
          }, []),
          o
        );
      }
      function P(e) {
        var t = (0, a.useRef)([]),
          n = (0, a.useState)({}),
          o = (0, i.Z)(n, 2),
          r = o[1],
          c = (0, a.useRef)('function' === typeof e ? e() : e),
          l = S(function () {
            var e = c.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (c.current = e),
              r({});
          });
        function s(e) {
          t.current.push(e), l();
        }
        return [c.current, s];
      }
      var T = n(15105);
      function M(e, t) {
        var n,
          o = e.prefixCls,
          i = e.id,
          c = e.active,
          l = e.rtl,
          s = e.tab,
          u = s.key,
          f = s.tab,
          p = s.disabled,
          v = s.closeIcon,
          m = e.tabBarGutter,
          h = e.tabPosition,
          y = e.closable,
          b = e.renderWrapper,
          g = e.removeAriaLabel,
          C = e.editable,
          w = e.onClick,
          E = e.onRemove,
          Z = e.onFocus,
          x = ''.concat(o, '-tab');
        a.useEffect(function () {
          return E;
        }, []);
        var k = {};
        'top' === h || 'bottom' === h
          ? (k[l ? 'marginRight' : 'marginLeft'] = m)
          : (k.marginTop = m);
        var N = C && !1 !== y && !p;
        function O(e) {
          p || w(e);
        }
        function S(e) {
          e.preventDefault(),
            e.stopPropagation(),
            C.onEdit('remove', { key: u, event: e });
        }
        var P = a.createElement(
          'div',
          {
            key: u,
            ref: t,
            className: d()(
              x,
              ((n = {}),
              (0, r.Z)(n, ''.concat(x, '-with-remove'), N),
              (0, r.Z)(n, ''.concat(x, '-active'), c),
              (0, r.Z)(n, ''.concat(x, '-disabled'), p),
              n),
            ),
            style: k,
            onClick: O,
          },
          a.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': c,
              id: i && ''.concat(i, '-tab-').concat(u),
              className: ''.concat(x, '-btn'),
              'aria-controls': i && ''.concat(i, '-panel-').concat(u),
              'aria-disabled': p,
              tabIndex: p ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), O(e);
              },
              onKeyDown: function (e) {
                [T.Z.SPACE, T.Z.ENTER].includes(e.which) &&
                  (e.preventDefault(), O(e));
              },
              onFocus: Z,
            },
            f,
          ),
          N &&
            a.createElement(
              'button',
              {
                type: 'button',
                'aria-label': g || 'remove',
                tabIndex: 0,
                className: ''.concat(x, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), S(e);
                },
              },
              v || C.removeIcon || '\xd7',
            ),
        );
        return b && (P = b(P)), P;
      }
      var R = a.forwardRef(M),
        j = { width: 0, height: 0, left: 0, top: 0 };
      function I(e, t, n) {
        return (0, a.useMemo)(
          function () {
            for (
              var n,
                o = new Map(),
                r =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  j,
                a = r.left + r.width,
                i = 0;
              i < e.length;
              i += 1
            ) {
              var c,
                l = e[i].key,
                u = t.get(l);
              if (!u)
                u =
                  t.get(
                    null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key,
                  ) || j;
              var d = o.get(l) || (0, s.Z)({}, u);
              (d.right = a - d.left - d.width), o.set(l, d);
            }
            return o;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var L = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function D(e, t, n, o, r) {
        var i,
          c,
          l,
          s = r.tabs,
          u = r.tabPosition,
          d = r.rtl;
        ['top', 'bottom'].includes(u)
          ? ((i = 'width'), (c = d ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((i = 'height'), (c = 'top'), (l = -t.top));
        var f = t[i],
          p = n[i],
          v = o[i],
          m = f;
        return (
          p + v > f && (m = f - v),
          (0, a.useMemo)(
            function () {
              if (!s.length) return [0, 0];
              for (var t = s.length, n = t, o = 0; o < t; o += 1) {
                var r = e.get(s[o].key) || L;
                if (r[c] + r[i] > l + m) {
                  n = o - 1;
                  break;
                }
              }
              for (var a = 0, u = t - 1; u >= 0; u -= 1) {
                var d = e.get(s[u].key) || L;
                if (d[c] < l) {
                  a = u + 1;
                  break;
                }
              }
              return [a, n];
            },
            [
              e,
              l,
              m,
              u,
              s
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              d,
            ],
          )
        );
      }
      var A = n(10985),
        z = n(50106),
        H = { adjustX: 1, adjustY: 1 },
        W = [0, 0],
        B = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: H,
            offset: [0, -4],
            targetOffset: W,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: H,
            offset: [0, -4],
            targetOffset: W,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: H,
            offset: [0, -4],
            targetOffset: W,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: H,
            offset: [0, 4],
            targetOffset: W,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: H,
            offset: [0, 4],
            targetOffset: W,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: H,
            offset: [0, 4],
            targetOffset: W,
          },
        },
        K = B;
      function F(e, t) {
        var n = e.arrow,
          o = void 0 !== n && n,
          c = e.prefixCls,
          s = void 0 === c ? 'rc-dropdown' : c,
          u = e.transitionName,
          f = e.animation,
          p = e.align,
          v = e.placement,
          m = void 0 === v ? 'bottomLeft' : v,
          h = e.placements,
          y = void 0 === h ? K : h,
          b = e.getPopupContainer,
          g = e.showAction,
          C = e.hideAction,
          w = e.overlayClassName,
          E = e.overlayStyle,
          Z = e.visible,
          x = e.trigger,
          k = void 0 === x ? ['hover'] : x,
          N = (0, l.Z)(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          O = a.useState(),
          S = (0, i.Z)(O, 2),
          P = S[0],
          T = S[1],
          M = 'visible' in e ? Z : P,
          R = a.useRef(null);
        a.useImperativeHandle(t, function () {
          return R.current;
        });
        var j = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          I = function (t) {
            var n = e.onOverlayClick,
              o = j().props;
            T(!1), n && n(t), o.onClick && o.onClick(t);
          },
          L = function (t) {
            var n = e.onVisibleChange;
            T(t), 'function' === typeof n && n(t);
          },
          D = function () {
            var e = j(),
              t = { prefixCls: ''.concat(s, '-menu'), onClick: I };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              a.createElement(
                a.Fragment,
                null,
                o &&
                  a.createElement('div', { className: ''.concat(s, '-arrow') }),
                a.cloneElement(e, t),
              )
            );
          },
          A = function () {
            var t = e.overlay;
            return 'function' === typeof t ? D : D();
          },
          H = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          W = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(s, '-open');
          },
          B = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              o = d()(n.className, W());
            return P && t ? a.cloneElement(t, { className: o }) : t;
          },
          F = C;
        return (
          F || -1 === k.indexOf('contextMenu') || (F = ['click']),
          a.createElement(
            z.Z,
            Object.assign({}, N, {
              prefixCls: s,
              ref: R,
              popupClassName: d()(
                w,
                (0, r.Z)({}, ''.concat(s, '-show-arrow'), o),
              ),
              popupStyle: E,
              builtinPlacements: y,
              action: k,
              showAction: g,
              hideAction: F || [],
              popupPlacement: m,
              popupAlign: p,
              popupTransitionName: u,
              popupAnimation: f,
              popupVisible: M,
              stretch: H() ? 'minWidth' : '',
              popup: A(),
              onPopupVisibleChange: L,
              getPopupContainer: b,
            }),
            B(),
          )
        );
      }
      var V = a.forwardRef(F),
        G = V;
      function X(e, t) {
        var n = e.prefixCls,
          o = e.editable,
          r = e.locale,
          i = e.style;
        return o && !1 !== o.showAdd
          ? a.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: i,
                'aria-label':
                  (null === r || void 0 === r ? void 0 : r.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  o.onEdit('add', { event: e });
                },
              },
              o.addIcon || '+',
            )
          : null;
      }
      var Y = a.forwardRef(X);
      function _(e, t) {
        var n = e.prefixCls,
          o = e.id,
          c = e.tabs,
          l = e.locale,
          s = e.mobile,
          u = e.moreIcon,
          f = void 0 === u ? 'More' : u,
          p = e.moreTransitionName,
          v = e.style,
          m = e.className,
          h = e.editable,
          y = e.tabBarGutter,
          b = e.rtl,
          g = e.onTabClick,
          C = (0, a.useState)(!1),
          w = (0, i.Z)(C, 2),
          E = w[0],
          Z = w[1],
          x = (0, a.useState)(null),
          k = (0, i.Z)(x, 2),
          N = k[0],
          O = k[1],
          S = ''.concat(o, '-more-popup'),
          P = ''.concat(n, '-dropdown'),
          M = null !== N ? ''.concat(S, '-').concat(N) : null,
          R = null === l || void 0 === l ? void 0 : l.dropdownAriaLabel,
          j = a.createElement(
            A.ZP,
            {
              onClick: function (e) {
                var t = e.key,
                  n = e.domEvent;
                g(t, n), Z(!1);
              },
              id: S,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': M,
              selectedKeys: [N],
              'aria-label': void 0 !== R ? R : 'expanded dropdown',
            },
            c.map(function (e) {
              return a.createElement(
                A.sN,
                {
                  key: e.key,
                  id: ''.concat(S, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': o && ''.concat(o, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              );
            }),
          );
        function I(e) {
          for (
            var t = c.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === N;
                }) || 0,
              o = t.length,
              r = 0;
            r < o;
            r += 1
          ) {
            n = (n + e + o) % o;
            var a = t[n];
            if (!a.disabled) return void O(a.key);
          }
        }
        function L(e) {
          var t = e.which;
          if (E)
            switch (t) {
              case T.Z.UP:
                I(-1), e.preventDefault();
                break;
              case T.Z.DOWN:
                I(1), e.preventDefault();
                break;
              case T.Z.ESC:
                Z(!1);
                break;
              case T.Z.SPACE:
              case T.Z.ENTER:
                null !== N && g(N, e);
                break;
            }
          else
            [T.Z.DOWN, T.Z.SPACE, T.Z.ENTER].includes(t) &&
              (Z(!0), e.preventDefault());
        }
        (0, a.useEffect)(
          function () {
            var e = document.getElementById(M);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [N],
        ),
          (0, a.useEffect)(
            function () {
              E || O(null);
            },
            [E],
          );
        var D = (0, r.Z)({}, b ? 'marginRight' : 'marginLeft', y);
        c.length || ((D.visibility = 'hidden'), (D.order = 1));
        var z = d()((0, r.Z)({}, ''.concat(P, '-rtl'), b)),
          H = s
            ? null
            : a.createElement(
                G,
                {
                  prefixCls: P,
                  overlay: j,
                  trigger: ['hover'],
                  visible: E,
                  transitionName: p,
                  onVisibleChange: Z,
                  overlayClassName: z,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                a.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: D,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': S,
                    id: ''.concat(o, '-more'),
                    'aria-expanded': E,
                    onKeyDown: L,
                  },
                  f,
                ),
              );
        return a.createElement(
          'div',
          {
            className: d()(''.concat(n, '-nav-operations'), m),
            style: v,
            ref: t,
          },
          H,
          a.createElement(Y, { prefixCls: n, locale: l, editable: h }),
        );
      }
      var q = a.forwardRef(_),
        U = (0, a.createContext)(null),
        $ = 0.1,
        Q = 0.01,
        J = 20,
        ee = Math.pow(0.995, J);
      function te(e, t) {
        var n = (0, a.useState)(),
          o = (0, i.Z)(n, 2),
          r = o[0],
          c = o[1],
          l = (0, a.useState)(0),
          s = (0, i.Z)(l, 2),
          u = s[0],
          d = s[1],
          f = (0, a.useState)(0),
          p = (0, i.Z)(f, 2),
          v = p[0],
          m = p[1],
          h = (0, a.useState)(),
          y = (0, i.Z)(h, 2),
          b = y[0],
          g = y[1],
          C = (0, a.useRef)();
        function w(e) {
          var t = e.touches[0],
            n = t.screenX,
            o = t.screenY;
          c({ x: n, y: o }), window.clearInterval(C.current);
        }
        function E(e) {
          if (r) {
            e.preventDefault();
            var n = e.touches[0],
              o = n.screenX,
              a = n.screenY;
            c({ x: o, y: a });
            var i = o - r.x,
              l = a - r.y;
            t(i, l);
            var s = Date.now();
            d(s), m(s - u), g({ x: i, y: l });
          }
        }
        function Z() {
          if (r && (c(null), g(null), b)) {
            var e = b.x / v,
              n = b.y / v,
              o = Math.abs(e),
              a = Math.abs(n);
            if (Math.max(o, a) < $) return;
            var i = e,
              l = n;
            C.current = window.setInterval(function () {
              Math.abs(i) < Q && Math.abs(l) < Q
                ? window.clearInterval(C.current)
                : ((i *= ee), (l *= ee), t(i * J, l * J));
            }, J);
          }
        }
        var x = (0, a.useRef)();
        function k(e) {
          var n = e.deltaX,
            o = e.deltaY,
            r = 0,
            a = Math.abs(n),
            i = Math.abs(o);
          a === i
            ? (r = 'x' === x.current ? n : o)
            : a > i
            ? ((r = n), (x.current = 'x'))
            : ((r = o), (x.current = 'y')),
            t(-r, -r) && e.preventDefault();
        }
        var N = (0, a.useRef)(null);
        (N.current = {
          onTouchStart: w,
          onTouchMove: E,
          onTouchEnd: Z,
          onWheel: k,
        }),
          a.useEffect(function () {
            function t(e) {
              N.current.onTouchStart(e);
            }
            function n(e) {
              N.current.onTouchMove(e);
            }
            function o(e) {
              N.current.onTouchEnd(e);
            }
            function r(e) {
              N.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', o, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', r),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', o);
              }
            );
          }, []);
      }
      function ne() {
        var e = (0, a.useRef)(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, a.createRef()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current.delete(t);
        }
        return [t, n];
      }
      function oe(e, t) {
        var n = a.useRef(e),
          o = a.useState({}),
          r = (0, i.Z)(o, 2),
          c = r[1];
        function l(e) {
          var o = 'function' === typeof e ? e(n.current) : e;
          o !== n.current && t(o, n.current), (n.current = o), c({});
        }
        return [n.current, l];
      }
      var re = function (e) {
        var t,
          n = e.position,
          o = e.prefixCls,
          r = e.extra;
        if (!r) return null;
        var i = r;
        return (
          'right' === n && (t = i.right || (!i.left && i) || null),
          'left' === n && (t = i.left || null),
          t
            ? a.createElement(
                'div',
                { className: ''.concat(o, '-extra-content') },
                t,
              )
            : null
        );
      };
      function ae(e, t) {
        var n,
          c = a.useContext(U),
          l = c.prefixCls,
          u = c.tabs,
          f = e.className,
          p = e.style,
          v = e.id,
          y = e.animated,
          b = e.activeKey,
          g = e.rtl,
          C = e.extra,
          w = e.editable,
          E = e.locale,
          Z = e.tabPosition,
          x = e.tabBarGutter,
          k = e.children,
          N = e.onTabClick,
          T = e.onTabScroll,
          M = (0, a.useRef)(),
          j = (0, a.useRef)(),
          L = (0, a.useRef)(),
          A = (0, a.useRef)(),
          z = ne(),
          H = (0, i.Z)(z, 2),
          W = H[0],
          B = H[1],
          K = 'top' === Z || 'bottom' === Z,
          F = oe(0, function (e, t) {
            K && T && T({ direction: e > t ? 'left' : 'right' });
          }),
          V = (0, i.Z)(F, 2),
          G = V[0],
          X = V[1],
          _ = oe(0, function (e, t) {
            !K && T && T({ direction: e > t ? 'top' : 'bottom' });
          }),
          $ = (0, i.Z)(_, 2),
          Q = $[0],
          J = $[1],
          ee = (0, a.useState)(0),
          ae = (0, i.Z)(ee, 2),
          ie = ae[0],
          ce = ae[1],
          le = (0, a.useState)(0),
          se = (0, i.Z)(le, 2),
          ue = se[0],
          de = se[1],
          fe = (0, a.useState)(0),
          pe = (0, i.Z)(fe, 2),
          ve = pe[0],
          me = pe[1],
          he = (0, a.useState)(0),
          ye = (0, i.Z)(he, 2),
          be = ye[0],
          ge = ye[1],
          Ce = (0, a.useState)(null),
          we = (0, i.Z)(Ce, 2),
          Ee = we[0],
          Ze = we[1],
          xe = (0, a.useState)(null),
          ke = (0, i.Z)(xe, 2),
          Ne = ke[0],
          Oe = ke[1],
          Se = (0, a.useState)(0),
          Pe = (0, i.Z)(Se, 2),
          Te = Pe[0],
          Me = Pe[1],
          Re = (0, a.useState)(0),
          je = (0, i.Z)(Re, 2),
          Ie = je[0],
          Le = je[1],
          De = P(new Map()),
          Ae = (0, i.Z)(De, 2),
          ze = Ae[0],
          He = Ae[1],
          We = I(u, ze, ie),
          Be = ''.concat(l, '-nav-operations-hidden'),
          Ke = 0,
          Fe = 0;
        function Ve(e) {
          return e < Ke ? Ke : e > Fe ? Fe : e;
        }
        K
          ? g
            ? ((Ke = 0), (Fe = Math.max(0, ie - Ee)))
            : ((Ke = Math.min(0, Ee - ie)), (Fe = 0))
          : ((Ke = Math.min(0, Ne - ue)), (Fe = 0));
        var Ge = (0, a.useRef)(),
          Xe = (0, a.useState)(),
          Ye = (0, i.Z)(Xe, 2),
          _e = Ye[0],
          qe = Ye[1];
        function Ue() {
          qe(Date.now());
        }
        function $e() {
          window.clearTimeout(Ge.current);
        }
        function Qe() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = We.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (K) {
            var n = G;
            g
              ? t.right < G
                ? (n = t.right)
                : t.right + t.width > G + Ee && (n = t.right + t.width - Ee)
              : t.left < -G
              ? (n = -t.left)
              : t.left + t.width > -G + Ee && (n = -(t.left + t.width - Ee)),
              J(0),
              X(Ve(n));
          } else {
            var o = Q;
            t.top < -Q
              ? (o = -t.top)
              : t.top + t.height > -Q + Ne && (o = -(t.top + t.height - Ne)),
              X(0),
              J(Ve(o));
          }
        }
        te(M, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = Ve(e + t);
              return n;
            });
          }
          if (K) {
            if (Ee >= ie) return !1;
            n(X, e);
          } else {
            if (Ne >= ue) return !1;
            n(J, t);
          }
          return $e(), Ue(), !0;
        }),
          (0, a.useEffect)(
            function () {
              return (
                $e(),
                _e &&
                  (Ge.current = window.setTimeout(function () {
                    qe(0);
                  }, 100)),
                $e
              );
            },
            [_e],
          );
        var Je = D(
            We,
            { width: Ee, height: Ne, left: G, top: Q },
            { width: ve, height: be },
            { width: Te, height: Ie },
            (0, s.Z)((0, s.Z)({}, e), {}, { tabs: u }),
          ),
          et = (0, i.Z)(Je, 2),
          tt = et[0],
          nt = et[1],
          ot = u.map(function (e) {
            var t = e.key;
            return a.createElement(R, {
              id: v,
              prefixCls: l,
              key: t,
              rtl: g,
              tab: e,
              closable: e.closable,
              editable: w,
              active: t === b,
              tabPosition: Z,
              tabBarGutter: x,
              renderWrapper: k,
              removeAriaLabel:
                null === E || void 0 === E ? void 0 : E.removeAriaLabel,
              ref: W(t),
              onClick: function (e) {
                N(t, e);
              },
              onRemove: function () {
                B(t);
              },
              onFocus: function () {
                Qe(t),
                  Ue(),
                  g || (M.current.scrollLeft = 0),
                  (M.current.scrollTop = 0);
              },
            });
          }),
          rt = S(function () {
            var e,
              t,
              n,
              o,
              r,
              a,
              i,
              c,
              l,
              s =
                (null === (e = M.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              d =
                (null === (t = M.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              f =
                (null === (n = A.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              p =
                (null === (o = A.current) || void 0 === o
                  ? void 0
                  : o.offsetHeight) || 0,
              v =
                (null === (r = L.current) || void 0 === r
                  ? void 0
                  : r.offsetWidth) || 0,
              m =
                (null === (a = L.current) || void 0 === a
                  ? void 0
                  : a.offsetHeight) || 0;
            Ze(s), Oe(d), Me(f), Le(p);
            var h =
                ((null === (i = j.current) || void 0 === i
                  ? void 0
                  : i.offsetWidth) || 0) - f,
              y =
                ((null === (c = j.current) || void 0 === c
                  ? void 0
                  : c.offsetHeight) || 0) - p;
            ce(h), de(y);
            var b =
              null === (l = L.current) || void 0 === l
                ? void 0
                : l.className.includes(Be);
            me(h - (b ? 0 : v)),
              ge(y - (b ? 0 : m)),
              He(function () {
                var e = new Map();
                return (
                  u.forEach(function (t) {
                    var n = t.key,
                      o = W(n).current;
                    o &&
                      e.set(n, {
                        width: o.offsetWidth,
                        height: o.offsetHeight,
                        left: o.offsetLeft,
                        top: o.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          at = u.slice(0, tt),
          it = u.slice(nt + 1),
          ct = [].concat((0, m.Z)(at), (0, m.Z)(it)),
          lt = (0, a.useState)(),
          st = (0, i.Z)(lt, 2),
          ut = st[0],
          dt = st[1],
          ft = We.get(b),
          pt = (0, a.useRef)();
        function vt() {
          h.Z.cancel(pt.current);
        }
        (0, a.useEffect)(
          function () {
            var e = {};
            return (
              ft &&
                (K
                  ? (g ? (e.right = ft.right) : (e.left = ft.left),
                    (e.width = ft.width))
                  : ((e.top = ft.top), (e.height = ft.height))),
              vt(),
              (pt.current = (0, h.Z)(function () {
                dt(e);
              })),
              vt
            );
          },
          [ft, K, g],
        ),
          (0, a.useEffect)(
            function () {
              Qe();
            },
            [b, ft, We, K],
          ),
          (0, a.useEffect)(
            function () {
              rt();
            },
            [
              g,
              x,
              b,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var mt,
          ht,
          yt,
          bt,
          gt = !!ct.length,
          Ct = ''.concat(l, '-nav-wrap');
        return (
          K
            ? g
              ? ((ht = G > 0), (mt = G + Ee < ie))
              : ((mt = G < 0), (ht = -G + Ee < ie))
            : ((yt = Q < 0), (bt = -Q + Ne < ue)),
          a.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(l, '-nav'), f),
              style: p,
              onKeyDown: function () {
                Ue();
              },
            },
            a.createElement(re, { position: 'left', extra: C, prefixCls: l }),
            a.createElement(
              O,
              { onResize: rt },
              a.createElement(
                'div',
                {
                  className: d()(
                    Ct,
                    ((n = {}),
                    (0, r.Z)(n, ''.concat(Ct, '-ping-left'), mt),
                    (0, r.Z)(n, ''.concat(Ct, '-ping-right'), ht),
                    (0, r.Z)(n, ''.concat(Ct, '-ping-top'), yt),
                    (0, r.Z)(n, ''.concat(Ct, '-ping-bottom'), bt),
                    n),
                  ),
                  ref: M,
                },
                a.createElement(
                  O,
                  { onResize: rt },
                  a.createElement(
                    'div',
                    {
                      ref: j,
                      className: ''.concat(l, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(G, 'px, ')
                          .concat(Q, 'px)'),
                        transition: _e ? 'none' : void 0,
                      },
                    },
                    ot,
                    a.createElement(Y, {
                      ref: A,
                      prefixCls: l,
                      locale: E,
                      editable: w,
                      style: { visibility: gt ? 'hidden' : null },
                    }),
                    a.createElement('div', {
                      className: d()(
                        ''.concat(l, '-ink-bar'),
                        (0, r.Z)(
                          {},
                          ''.concat(l, '-ink-bar-animated'),
                          y.inkBar,
                        ),
                      ),
                      style: ut,
                    }),
                  ),
                ),
              ),
            ),
            a.createElement(
              q,
              (0, o.Z)({}, e, {
                ref: L,
                prefixCls: l,
                tabs: ct,
                className: !gt && Be,
              }),
            ),
            a.createElement(re, { position: 'right', extra: C, prefixCls: l }),
          )
        );
      }
      var ie = a.forwardRef(ae);
      function ce(e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          i = e.tabPosition,
          c = e.rtl,
          l = e.destroyInactiveTabPane,
          s = a.useContext(U),
          u = s.prefixCls,
          f = s.tabs,
          p = o.tabPane,
          v = f.findIndex(function (e) {
            return e.key === n;
          });
        return a.createElement(
          'div',
          { className: d()(''.concat(u, '-content-holder')) },
          a.createElement(
            'div',
            {
              className: d()(
                ''.concat(u, '-content'),
                ''.concat(u, '-content-').concat(i),
                (0, r.Z)({}, ''.concat(u, '-content-animated'), p),
              ),
              style:
                v && p
                  ? (0, r.Z)(
                      {},
                      c ? 'marginRight' : 'marginLeft',
                      '-'.concat(v, '00%'),
                    )
                  : null,
            },
            f.map(function (e) {
              return a.cloneElement(e.node, {
                key: e.key,
                prefixCls: u,
                tabKey: e.key,
                id: t,
                animated: p,
                active: e.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function le(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          o = e.className,
          r = e.style,
          c = e.id,
          l = e.active,
          u = e.animated,
          f = e.destroyInactiveTabPane,
          p = e.tabKey,
          v = e.children,
          m = a.useState(n),
          h = (0, i.Z)(m, 2),
          y = h[0],
          b = h[1];
        a.useEffect(
          function () {
            l ? b(!0) : f && b(!1);
          },
          [l, f],
        );
        var g = {};
        return (
          l ||
            (u
              ? ((g.visibility = 'hidden'),
                (g.height = 0),
                (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          a.createElement(
            'div',
            {
              id: c && ''.concat(c, '-panel-').concat(p),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': c && ''.concat(c, '-tab-').concat(p),
              'aria-hidden': !l,
              style: (0, s.Z)((0, s.Z)({}, g), r),
              className: d()(
                ''.concat(t, '-tabpane'),
                l && ''.concat(t, '-tabpane-active'),
                o,
              ),
            },
            (l || y || n) && v,
          )
        );
      }
      var se = 0;
      function ue(e) {
        return (0, f.Z)(e)
          .map(function (e) {
            if (a.isValidElement(e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return (0, s.Z)((0, s.Z)({ key: t }, e.props), {}, { node: e });
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function de(e, t) {
        var n,
          u,
          f = e.id,
          m = e.prefixCls,
          h = void 0 === m ? 'rc-tabs' : m,
          y = e.className,
          b = e.children,
          g = e.direction,
          C = e.activeKey,
          w = e.defaultActiveKey,
          E = e.editable,
          Z = e.animated,
          x = void 0 === Z ? { inkBar: !0, tabPane: !1 } : Z,
          k = e.tabPosition,
          N = void 0 === k ? 'top' : k,
          O = e.tabBarGutter,
          S = e.tabBarStyle,
          P = e.tabBarExtraContent,
          T = e.locale,
          M = e.moreIcon,
          R = e.moreTransitionName,
          j = e.destroyInactiveTabPane,
          I = e.renderTabBar,
          L = e.onChange,
          D = e.onTabClick,
          A = e.onTabScroll,
          z = (0, l.Z)(e, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          H = ue(b),
          W = 'rtl' === g;
        u =
          !1 === x
            ? { inkBar: !1, tabPane: !1 }
            : !0 === x
            ? { inkBar: !0, tabPane: !0 }
            : (0, s.Z)(
                { inkBar: !0, tabPane: !1 },
                'object' === (0, c.Z)(x) ? x : {},
              );
        var B = (0, a.useState)(!1),
          K = (0, i.Z)(B, 2),
          F = K[0],
          V = K[1];
        (0, a.useEffect)(function () {
          V((0, p.Z)());
        }, []);
        var G = (0, v.Z)(
            function () {
              var e;
              return null === (e = H[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: C, defaultValue: w },
          ),
          X = (0, i.Z)(G, 2),
          Y = X[0],
          _ = X[1],
          q = (0, a.useState)(function () {
            return H.findIndex(function (e) {
              return e.key === Y;
            });
          }),
          $ = (0, i.Z)(q, 2),
          Q = $[0],
          J = $[1];
        (0, a.useEffect)(
          function () {
            var e,
              t = H.findIndex(function (e) {
                return e.key === Y;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(Q, H.length - 1))),
              _(null === (e = H[t]) || void 0 === e ? void 0 : e.key));
            J(t);
          },
          [
            H.map(function (e) {
              return e.key;
            }).join('_'),
            Y,
            Q,
          ],
        );
        var ee = (0, v.Z)(null, { value: f }),
          te = (0, i.Z)(ee, 2),
          ne = te[0],
          oe = te[1],
          re = N;
        function ae(e, t) {
          null === D || void 0 === D || D(e, t),
            _(e),
            null === L || void 0 === L || L(e);
        }
        F && !['left', 'right'].includes(N) && (re = 'top'),
          (0, a.useEffect)(function () {
            f || (oe('rc-tabs-'.concat(se)), (se += 1));
          }, []);
        var le,
          de = {
            id: ne,
            activeKey: Y,
            animated: u,
            tabPosition: re,
            rtl: W,
            mobile: F,
          },
          fe = (0, s.Z)(
            (0, s.Z)({}, de),
            {},
            {
              editable: E,
              locale: T,
              moreIcon: M,
              moreTransitionName: R,
              tabBarGutter: O,
              onTabClick: ae,
              onTabScroll: A,
              extra: P,
              style: S,
              panes: b,
            },
          );
        return (
          (le = I ? I(fe, ie) : a.createElement(ie, fe)),
          a.createElement(
            U.Provider,
            { value: { tabs: H, prefixCls: h } },
            a.createElement(
              'div',
              (0, o.Z)(
                {
                  ref: t,
                  id: f,
                  className: d()(
                    h,
                    ''.concat(h, '-').concat(re),
                    ((n = {}),
                    (0, r.Z)(n, ''.concat(h, '-mobile'), F),
                    (0, r.Z)(n, ''.concat(h, '-editable'), E),
                    (0, r.Z)(n, ''.concat(h, '-rtl'), W),
                    n),
                    y,
                  ),
                },
                z,
              ),
              le,
              a.createElement(
                ce,
                (0, o.Z)({ destroyInactiveTabPane: j }, de, { animated: u }),
              ),
            ),
          )
        );
      }
      var fe = a.forwardRef(de);
      fe.TabPane = le;
      var pe = fe,
        ve = pe,
        me = n(44545),
        he = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d:
                    'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d:
                    'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
                },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        ye = he,
        be = n(27029),
        ge = function (e, t) {
          return a.createElement(
            be.Z,
            Object.assign({}, e, { ref: t, icon: ye }),
          );
        };
      ge.displayName = 'PlusOutlined';
      var Ce = a.forwardRef(ge),
        we = n(54549),
        Ee = n(21687),
        Ze = n(86032),
        xe = n(97647),
        ke = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      function Ne(e) {
        var t,
          n = e.type,
          i = e.className,
          c = e.size,
          l = e.onEdit,
          s = e.hideAdd,
          u = e.centered,
          f = e.addIcon,
          p = ke(e, [
            'type',
            'className',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
          ]),
          v = p.prefixCls,
          m = p.moreIcon,
          h = void 0 === m ? a.createElement(me.Z, null) : m,
          y = a.useContext(Ze.E_),
          b = y.getPrefixCls,
          g = y.direction,
          C = b('tabs', v);
        'editable-card' === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                o = t.event;
              null === l || void 0 === l || l('add' === e ? o : n, e);
            },
            removeIcon: a.createElement(we.Z, null),
            addIcon: f || a.createElement(Ce, null),
            showAdd: !0 !== s,
          });
        var w = b();
        return (
          (0, Ee.Z)(
            !('onPrevClick' in p) && !('onNextClick' in p),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          a.createElement(xe.Z.Consumer, null, function (e) {
            var l,
              s = void 0 !== c ? c : e;
            return a.createElement(
              ve,
              (0, o.Z)(
                { direction: g, moreTransitionName: ''.concat(w, '-slide-up') },
                p,
                {
                  className: d()(
                    ((l = {}),
                    (0, r.Z)(l, ''.concat(C, '-').concat(s), s),
                    (0, r.Z)(
                      l,
                      ''.concat(C, '-card'),
                      ['card', 'editable-card'].includes(n),
                    ),
                    (0, r.Z)(
                      l,
                      ''.concat(C, '-editable-card'),
                      'editable-card' === n,
                    ),
                    (0, r.Z)(l, ''.concat(C, '-centered'), u),
                    l),
                    i,
                  ),
                  editable: t,
                  moreIcon: h,
                  prefixCls: C,
                },
              ),
            );
          })
        );
      }
      Ne.TabPane = le;
      var Oe = Ne;
    },
    18106: function (e, t, n) {
      'use strict';
      n(61052), n(34509);
    },
    60331: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var o = n(96156),
        r = n(22122),
        a = n(28481),
        i = n(67294),
        c = n(94184),
        l = n.n(c),
        s = n(98423),
        u = n(54549),
        d = n(86032),
        f = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        p = function (e) {
          var t,
            n = e.prefixCls,
            a = e.className,
            c = e.checked,
            s = e.onChange,
            u = e.onClick,
            p = f(e, [
              'prefixCls',
              'className',
              'checked',
              'onChange',
              'onClick',
            ]),
            v = i.useContext(d.E_),
            m = v.getPrefixCls,
            h = function (e) {
              null === s || void 0 === s || s(!c),
                null === u || void 0 === u || u(e);
            },
            y = m('tag', n),
            b = l()(
              y,
              ((t = {}),
              (0, o.Z)(t, ''.concat(y, '-checkable'), !0),
              (0, o.Z)(t, ''.concat(y, '-checkable-checked'), c),
              t),
              a,
            );
          return i.createElement(
            'span',
            (0, r.Z)({}, p, { className: b, onClick: h }),
          );
        },
        v = p,
        m = n(98787),
        h = n(21790),
        y = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        b = new RegExp('^('.concat(m.Y.join('|'), ')(-inverse)?$')),
        g = new RegExp('^('.concat(m.E.join('|'), ')$')),
        C = function (e, t) {
          var n,
            c = e.prefixCls,
            f = e.className,
            p = e.style,
            v = e.children,
            m = e.icon,
            C = e.color,
            w = e.onClose,
            E = e.closeIcon,
            Z = e.closable,
            x = void 0 !== Z && Z,
            k = y(e, [
              'prefixCls',
              'className',
              'style',
              'children',
              'icon',
              'color',
              'onClose',
              'closeIcon',
              'closable',
            ]),
            N = i.useContext(d.E_),
            O = N.getPrefixCls,
            S = N.direction,
            P = i.useState(!0),
            T = (0, a.Z)(P, 2),
            M = T[0],
            R = T[1];
          i.useEffect(
            function () {
              'visible' in k && R(k.visible);
            },
            [k.visible],
          );
          var j = function () {
              return !!C && (b.test(C) || g.test(C));
            },
            I = (0, r.Z)({ backgroundColor: C && !j() ? C : void 0 }, p),
            L = j(),
            D = O('tag', c),
            A = l()(
              D,
              ((n = {}),
              (0, o.Z)(n, ''.concat(D, '-').concat(C), L),
              (0, o.Z)(n, ''.concat(D, '-has-color'), C && !L),
              (0, o.Z)(n, ''.concat(D, '-hidden'), !M),
              (0, o.Z)(n, ''.concat(D, '-rtl'), 'rtl' === S),
              n),
              f,
            ),
            z = function (e) {
              e.stopPropagation(),
                null === w || void 0 === w || w(e),
                e.defaultPrevented || 'visible' in k || R(!1);
            },
            H = function () {
              return x
                ? E
                  ? i.createElement(
                      'span',
                      { className: ''.concat(D, '-close-icon'), onClick: z },
                      E,
                    )
                  : i.createElement(u.Z, {
                      className: ''.concat(D, '-close-icon'),
                      onClick: z,
                    })
                : null;
            },
            W = 'onClick' in k || (v && 'a' === v.type),
            B = (0, s.Z)(k, ['visible']),
            K = m || null,
            F = K
              ? i.createElement(
                  i.Fragment,
                  null,
                  K,
                  i.createElement('span', null, v),
                )
              : v,
            V = i.createElement(
              'span',
              (0, r.Z)({}, B, { ref: t, className: A, style: I }),
              F,
              H(),
            );
          return W ? i.createElement(h.Z, null, V) : V;
        },
        w = i.forwardRef(C);
      (w.displayName = 'Tag'), (w.CheckableTag = v);
      var E = w;
    },
    71153: function (e, t, n) {
      'use strict';
      n(61052), n(34109);
    },
  },
]);
