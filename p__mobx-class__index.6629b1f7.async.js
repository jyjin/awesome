(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
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
    JChl: function (e, t, n) {
      'use strict';
      n.r(t);
      n('DYRE');
      var r,
        o,
        c,
        i,
        a,
        l,
        s = n('zeV3'),
        d = (n('+L6B'), n('2/Rp')),
        u = n('q1tI'),
        p = n.n(u),
        f = n('TyAF'),
        m = n('2OET'),
        v = n('Kvkj'),
        b = (n('hUCN'), n('nKUr')),
        j =
          ((r = Object(f['b'])('global')),
          (o = Object(f['b'])('intls')),
          (c = Object(f['b'])('lcStore')),
          (i = Reflect.metadata('design:type', Function)),
          (a = Reflect.metadata('design:paramtypes', [void 0])),
          r(
            (l =
              o(
                (l =
                  c(
                    (l =
                      Object(m['c'])(
                        (l =
                          Object(f['c'])(
                            (l =
                              i(
                                (l =
                                  a(
                                    (l = class extends p.a.Component {
                                      constructor(e) {
                                        super(e);
                                      }
                                      handleAdd() {
                                        var e =
                                          this.props.lcStore.sections[
                                            this.props.lcStore.sections.length -
                                              1
                                          ].id + 1;
                                        this.props.lcStore.addSection({
                                          id: e,
                                          name: '\u533a\u57df'.concat(e),
                                          cols: 1,
                                          fields: [],
                                        });
                                      }
                                      render() {
                                        return (
                                          console.log(
                                            '\u6d4b\u8bd5store\u5237\u65b0 == ',
                                            this.props,
                                          ),
                                          Object(b['jsxs'])(s['b'], {
                                            direction: 'vertical',
                                            style: { width: '100%' },
                                            children: [
                                              Object(b['jsx'])('h1', {
                                                children:
                                                  'React Class\u6ce8\u89e3\u65b9\u5f0f',
                                              }),
                                              Object(b['jsxs'])(s['b'], {
                                                children: [
                                                  '\u70b9\u51fb\u540e\u4f1a\u968f\u7740mobx\u6570\u636e\u6539\u53d8\uff0c\u9875\u9762\u66f4\u65b0',
                                                  Object(b['jsx'])(d['a'], {
                                                    type: 'primary',
                                                    onClick: this.handleAdd.bind(
                                                      this,
                                                    ),
                                                    children:
                                                      '\u6dfb\u52a0\u533a\u57df',
                                                  }),
                                                ],
                                              }),
                                              Object(b['jsx'])(v['b'], {
                                                json: this.props.lcStore
                                                  .sections,
                                              }),
                                            ],
                                          })
                                        );
                                      }
                                    }),
                                  ) || l),
                              ) || l),
                          ) || l),
                      ) || l),
                  ) || l),
              ) || l),
          ) || l);
      t['default'] = j;
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
        d = n.n(s),
        u = n('A6bi'),
        p = n.n(u),
        f = (e) => {
          var t = e.json;
          if (!t)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = d()(p.a['json-viewer'], 'jyjin');
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
            d = e.spin,
            u = e.rotate,
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
            j = a()({ 'anticon-spin': !!d }),
            h = u
              ? {
                  msTransform: 'rotate('.concat(u, 'deg)'),
                  transform: 'rotate('.concat(u, 'deg)'),
                }
              : void 0,
            O = Object(c['a'])(
              Object(c['a'])({}, l['e']),
              {},
              { className: j, style: h, viewBox: s },
            );
          s || delete O.viewBox;
          var y = function () {
              return i
                ? o['createElement'](i, Object.assign({}, O), m)
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
                    Object.assign({}, O, { viewBox: s }),
                    m,
                  ))
                : null;
            },
            x = p;
          return (
            void 0 === x && f && (x = -1),
            o['createElement'](
              'span',
              Object.assign({ role: 'img' }, v, {
                ref: t,
                tabIndex: x,
                onClick: f,
                className: b,
              }),
              y(),
            )
          );
        });
      s.displayName = 'AntdIcon';
      var d = s,
        u = new Set();
      function p(e) {
        return Boolean('string' === typeof e && e.length && !u.has(e));
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
            u.add(n),
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
            o['createElement'](d, Object.assign({}, c, a, { ref: t }), l)
          );
        });
        return (i.displayName = 'Iconfont'), i;
      }
    },
    hUCN: function (e, t, n) {
      e.exports = { flex: 'flex___2HiM_' };
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
        d = n('H84U');
      function u(e) {
        var t = e.className,
          n = e.direction,
          c = e.index,
          a = e.marginDirection,
          l = e.children,
          s = e.split,
          d = e.wrap,
          u = i['useContext'](m),
          p = u.horizontalSize,
          f = u.verticalSize,
          v = u.latestIndex,
          b = u.supportFlexGap,
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
                  d && { paddingBottom: f },
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
          n = i['useContext'](d['b']),
          a = n.getPrefixCls,
          v = n.space,
          j = n.direction,
          h = e.size,
          O =
            void 0 === h
              ? (null === v || void 0 === v ? void 0 : v.size) || 'small'
              : h,
          y = e.align,
          x = e.className,
          g = e.children,
          w = e.direction,
          E = void 0 === w ? 'horizontal' : w,
          C = e.prefixCls,
          S = e.split,
          z = e.style,
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
              return (Array.isArray(O) ? O : [O, O]).map(function (e) {
                return b(e);
              });
            },
            [O],
          ),
          A = Object(c['a'])(k, 2),
          _ = A[0],
          R = A[1],
          U = Object(s['a'])(g, { keepEmpty: !0 }),
          D = void 0 === y && 'horizontal' === E ? 'center' : y,
          F = a('space', C),
          J = l()(
            F,
            ''.concat(F, '-').concat(E),
            ((t = {}),
            Object(o['a'])(t, ''.concat(F, '-rtl'), 'rtl' === j),
            Object(o['a'])(t, ''.concat(F, '-align-').concat(D), D),
            t),
            x,
          ),
          T = ''.concat(F, '-item'),
          G = 'rtl' === j ? 'marginLeft' : 'marginRight',
          H = 0,
          M = U.map(function (e, t) {
            return (
              null !== e && void 0 !== e && (H = t),
              i['createElement'](
                u,
                {
                  className: T,
                  key: ''.concat(T, '-').concat(t),
                  direction: E,
                  index: t,
                  marginDirection: G,
                  split: S,
                  wrap: B,
                },
                e,
              )
            );
          }),
          Q = i['useMemo'](
            function () {
              return {
                horizontalSize: _,
                verticalSize: R,
                latestIndex: H,
                supportFlexGap: P,
              };
            },
            [_, R, H, P],
          );
        if (0 === U.length) return null;
        var V = {};
        return (
          B && ((V.flexWrap = 'wrap'), P || (V.marginBottom = -R)),
          P && ((V.columnGap = _), (V.rowGap = R)),
          i['createElement'](
            'div',
            Object(r['a'])(
              { className: J, style: Object(r['a'])(Object(r['a'])({}, V), z) },
              I,
            ),
            i['createElement'](m.Provider, { value: Q }, M),
          )
        );
      };
      t['b'] = j;
    },
  },
]);
