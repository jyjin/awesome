(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    '6yAU': function (e, t, n) {
      'use strict';
      n.r(t);
      n('+L6B');
      var r = n('2/Rp'),
        o = (n('DYRE'), n('zeV3')),
        c = (n('q1tI'), n('aoTL')),
        i = n('TyAF'),
        a = n('aFzQ'),
        l = n('2OET'),
        s = n('Kvkj'),
        u = (n('tx8U'), n('nKUr')),
        d = (e) => {
          function t() {
            var t = e.lcStore.sections[e.lcStore.sections.length - 1].id + 1;
            e.lcStore.addSection({
              id: t,
              name: '\u533a\u57df'.concat(t),
              cols: 1,
              fields: [],
            });
          }
          return (
            console.log(
              '\u6d4b\u8bd5\u6ce8\u5165\u7684store == ',
              Object(a['o'])(e.lcStore),
            ),
            console.log(
              '\u6d4b\u8bd5\u6ce8\u5165\u7684\u5176\u4ed6\u6570\u636eglobal,intls == ',
              Object(a['o'])(e),
            ),
            Object(u['jsxs'])('div', {
              children: [
                Object(u['jsx'])('h1', {
                  children:
                    'Observer\u6807\u7b7e\u5c40\u90e8\u76d1\u542c\u63a7\u5236',
                }),
                Object(u['jsxs'])(o['b'], {
                  children: [
                    Object(u['jsx'])('span', {
                      children: 'Store\u7684section\u6761\u6570\u4e3a\uff1a',
                    }),
                    e.lcStore.sections.length,
                  ],
                }),
                Object(u['jsxs'])(o['b'], {
                  style: { width: '100%' },
                  children: [
                    Object(u['jsx'])('span', {
                      children:
                        '\u70b9\u6211\u589e\u52a0section\uff0csection\u6570\u636e\u9875\u9762\u4f1a\u66f4\u65b0\uff0c\u4f46\u662f\u6761\u6570\u4e0d\u66f4\u65b0',
                    }),
                    Object(u['jsx'])(r['a'], {
                      type: 'primary',
                      onClick: t,
                      children: '\u6dfb\u52a0\u533a\u57df',
                    }),
                  ],
                }),
                Object(u['jsx'])(c['a'], {
                  children: () =>
                    Object(u['jsx'])(s['b'], { json: e.lcStore.sections }),
                }),
              ],
            })
          );
        };
      t['default'] = Object(i['b'])('global', 'intls', 'lcStore')(
        Object(l['c'])(d),
      );
    },
    A6bi: function (e, t, n) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    DYRE: function (e, t, n) {
      'use strict';
      n('cIOH'), n('OPEp');
    },
    Kvkj: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'c', function () {
          return l['a'];
        }),
        n.d(t, 'b', function () {
          return m;
        });
      var r = n('R+Pm'),
        o = n('nKUr'),
        c = Object(r['a'])({
          scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js',
        }),
        i = (e) => {
          var t = {};
          return (
            e.size && (t.fontSize = e.size),
            e.color && (t.color = e.color),
            Object(o['jsx'])(c, { type: 'icon-'.concat(e.type), style: t })
          );
        },
        a = i,
        l = n('Ir2J'),
        s = n('TSYQ'),
        u = n.n(s),
        d = n('A6bi'),
        p = n.n(d),
        f = (e) => {
          var t = e.json;
          if (!t)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = u()(p.a['json-viewer'], 'jyjin');
          return Object(o['jsx'])('pre', {
            className: n,
            children: JSON.stringify(t, null, 2),
          });
        },
        m = f;
    },
    OPEp: function (e, t, n) {},
    P80f: function (e, t, n) {
      'use strict';
      var r,
        o = n('ODXe'),
        c = n('q1tI'),
        i = n('MNnm'),
        a = function () {
          return Object(i['a'])() && window.document.documentElement;
        },
        l = function () {
          if (!a()) return !1;
          if (void 0 !== r) return r;
          var e = document.createElement('div');
          return (
            (e.style.display = 'flex'),
            (e.style.flexDirection = 'column'),
            (e.style.rowGap = '1px'),
            e.appendChild(document.createElement('div')),
            e.appendChild(document.createElement('div')),
            document.body.appendChild(e),
            (r = 1 === e.scrollHeight),
            document.body.removeChild(e),
            r
          );
        };
      t['a'] = function () {
        var e = c['useState'](!1),
          t = Object(o['a'])(e, 2),
          n = t[0],
          r = t[1];
        return (
          c['useEffect'](function () {
            r(l());
          }, []),
          n
        );
      };
    },
    'R+Pm': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('Ff2n'),
        o = n('q1tI'),
        c = n('VTBJ'),
        i = n('TSYQ'),
        a = n.n(i),
        l = n('Qi1f'),
        s = o['forwardRef'](function (e, t) {
          var n = e.className,
            i = e.component,
            s = e.viewBox,
            u = e.spin,
            d = e.rotate,
            p = e.tabIndex,
            f = e.onClick,
            m = e.children,
            v = Object(r['a'])(e, [
              'className',
              'component',
              'viewBox',
              'spin',
              'rotate',
              'tabIndex',
              'onClick',
              'children',
            ]);
          Object(l['g'])(
            Boolean(i || m),
            'Should have `component` prop or `children`.',
          ),
            Object(l['f'])();
          var b = a()('anticon', n),
            j = a()({ 'anticon-spin': !!u }),
            O = d
              ? {
                  msTransform: 'rotate('.concat(d, 'deg)'),
                  transform: 'rotate('.concat(d, 'deg)'),
                }
              : void 0,
            x = Object(c['a'])(
              Object(c['a'])({}, l['e']),
              {},
              { className: j, style: O, viewBox: s },
            );
          s || delete x.viewBox;
          var h = function () {
              return i
                ? o['createElement'](i, Object.assign({}, x), m)
                : m
                ? (Object(l['g'])(
                    Boolean(s) ||
                      (1 === o['Children'].count(m) &&
                        o['isValidElement'](m) &&
                        'use' === o['Children'].only(m).type),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  o['createElement'](
                    'svg',
                    Object.assign({}, x, { viewBox: s }),
                    m,
                  ))
                : null;
            },
            y = p;
          return (
            void 0 === y && f && (y = -1),
            o['createElement'](
              'span',
              Object.assign({ role: 'img' }, v, {
                ref: t,
                tabIndex: y,
                onClick: f,
                className: b,
              }),
              h(),
            )
          );
        });
      s.displayName = 'AntdIcon';
      var u = s,
        d = new Set();
      function p(e) {
        return Boolean('string' === typeof e && e.length && !d.has(e));
      }
      function f(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = e[t];
        if (p(n)) {
          var r = document.createElement('script');
          r.setAttribute('src', n),
            r.setAttribute('data-namespace', n),
            e.length > t + 1 &&
              ((r.onload = function () {
                f(e, t + 1);
              }),
              (r.onerror = function () {
                f(e, t + 1);
              })),
            d.add(n),
            document.body.appendChild(r);
        }
      }
      function m() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.scriptUrl,
          n = e.extraCommonProps,
          c = void 0 === n ? {} : n;
        t &&
          'undefined' !== typeof document &&
          'undefined' !== typeof window &&
          'function' === typeof document.createElement &&
          (Array.isArray(t) ? f(t.reverse()) : f([t]));
        var i = o['forwardRef'](function (e, t) {
          var n = e.type,
            i = e.children,
            a = Object(r['a'])(e, ['type', 'children']),
            l = null;
          return (
            e.type &&
              (l = o['createElement']('use', { xlinkHref: '#'.concat(n) })),
            i && (l = i),
            o['createElement'](u, Object.assign({}, c, a, { ref: t }), l)
          );
        });
        return (i.displayName = 'Iconfont'), i;
      }
    },
    tx8U: function (e, t, n) {
      e.exports = { flex: 'flex___3-hlV' };
    },
    zeV3: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return m;
      });
      var r = n('wx14'),
        o = n('rePB'),
        c = n('ODXe'),
        i = n('q1tI'),
        a = n('TSYQ'),
        l = n.n(a),
        s = n('Zm9Q'),
        u = n('H84U');
      function d(e) {
        var t = e.className,
          n = e.direction,
          c = e.index,
          a = e.marginDirection,
          l = e.children,
          s = e.split,
          u = e.wrap,
          d = i['useContext'](m),
          p = d.horizontalSize,
          f = d.verticalSize,
          v = d.latestIndex,
          b = d.supportFlexGap,
          j = {};
        return (
          b ||
            ('vertical' === n
              ? c < v && (j = { marginBottom: p / (s ? 2 : 1) })
              : (j = Object(r['a'])(
                  Object(r['a'])(
                    {},
                    c < v && Object(o['a'])({}, a, p / (s ? 2 : 1)),
                  ),
                  u && { paddingBottom: f },
                ))),
          null === l || void 0 === l
            ? null
            : i['createElement'](
                i['Fragment'],
                null,
                i['createElement']('div', { className: t, style: j }, l),
                c < v &&
                  s &&
                  i['createElement'](
                    'span',
                    { className: ''.concat(t, '-split'), style: j },
                    s,
                  ),
              )
        );
      }
      var p = n('P80f'),
        f = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        m = i['createContext']({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        v = { small: 8, middle: 16, large: 24 };
      function b(e) {
        return 'string' === typeof e ? v[e] : e || 0;
      }
      var j = function (e) {
        var t,
          n = i['useContext'](u['b']),
          a = n.getPrefixCls,
          v = n.space,
          j = n.direction,
          O = e.size,
          x =
            void 0 === O
              ? (null === v || void 0 === v ? void 0 : v.size) || 'small'
              : O,
          h = e.align,
          y = e.className,
          g = e.children,
          w = e.direction,
          E = void 0 === w ? 'horizontal' : w,
          S = e.prefixCls,
          z = e.split,
          C = e.style,
          N = e.wrap,
          B = void 0 !== N && N,
          I = f(e, [
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
          P = Object(p['a'])(),
          k = i['useMemo'](
            function () {
              return (Array.isArray(x) ? x : [x, x]).map(function (e) {
                return b(e);
              });
            },
            [x],
          ),
          A = Object(c['a'])(k, 2),
          _ = A[0],
          U = A[1],
          R = Object(s['a'])(g, { keepEmpty: !0 }),
          T = void 0 === h && 'horizontal' === E ? 'center' : h,
          D = a('space', S),
          F = l()(
            D,
            ''.concat(D, '-').concat(E),
            ((t = {}),
            Object(o['a'])(t, ''.concat(D, '-rtl'), 'rtl' === j),
            Object(o['a'])(t, ''.concat(D, '-align-').concat(T), T),
            t),
            y,
          ),
          G = ''.concat(D, '-item'),
          J = 'rtl' === j ? 'marginLeft' : 'marginRight',
          Q = 0,
          V = R.map(function (e, t) {
            return (
              null !== e && void 0 !== e && (Q = t),
              i['createElement'](
                d,
                {
                  className: G,
                  key: ''.concat(G, '-').concat(t),
                  direction: E,
                  index: t,
                  marginDirection: J,
                  split: z,
                  wrap: B,
                },
                e,
              )
            );
          }),
          Y = i['useMemo'](
            function () {
              return {
                horizontalSize: _,
                verticalSize: U,
                latestIndex: Q,
                supportFlexGap: P,
              };
            },
            [_, U, Q, P],
          );
        if (0 === R.length) return null;
        var q = {};
        return (
          B && ((q.flexWrap = 'wrap'), P || (q.marginBottom = -U)),
          P && ((q.columnGap = _), (q.rowGap = U)),
          i['createElement'](
            'div',
            Object(r['a'])(
              { className: F, style: Object(r['a'])(Object(r['a'])({}, q), C) },
              I,
            ),
            i['createElement'](m.Provider, { value: Y }, V),
          )
        );
      };
      t['b'] = j;
    },
  },
]);
