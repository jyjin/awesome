(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [717],
  {
    58530: function () {},
    67754: function () {},
    49781: function () {},
    44674: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return To;
          },
        });
      var r = {};
      n.r(r),
        n.d(r, {
          FormattedDate: function () {
            return vt;
          },
          FormattedDateParts: function () {
            return Ct;
          },
          FormattedDateTimeRange: function () {
            return dt;
          },
          FormattedDisplayName: function () {
            return bt;
          },
          FormattedList: function () {
            return yt;
          },
          FormattedListParts: function () {
            return ne;
          },
          FormattedMessage: function () {
            return st;
          },
          FormattedNumber: function () {
            return gt;
          },
          FormattedNumberParts: function () {
            return te;
          },
          FormattedPlural: function () {
            return it;
          },
          FormattedRelativeTime: function () {
            return ot;
          },
          FormattedTime: function () {
            return ht;
          },
          FormattedTimeParts: function () {
            return Et;
          },
          IntlContext: function () {
            return J._y;
          },
          IntlProvider: function () {
            return $e;
          },
          InvalidConfigError: function () {
            return ie.OV;
          },
          MessageFormatError: function () {
            return ie.X9;
          },
          MissingDataError: function () {
            return ie.gb;
          },
          MissingTranslationError: function () {
            return ie.$6;
          },
          RawIntlProvider: function () {
            return J.zt;
          },
          ReactIntlError: function () {
            return ie.Rw;
          },
          ReactIntlErrorCode: function () {
            return ie.bc;
          },
          UnsupportedFormatterError: function () {
            return ie.wI;
          },
          createIntl: function () {
            return We;
          },
          createIntlCache: function () {
            return ae.Sn;
          },
          defineMessage: function () {
            return pt;
          },
          defineMessages: function () {
            return mt;
          },
          injectIntl: function () {
            return J.ZP;
          },
          useIntl: function () {
            return ee;
          },
        });
      var o = {};
      n.r(o),
        n.d(o, {
          en: function () {
            return Zt;
          },
          zh: function () {
            return wt;
          },
        });
      var a = n(13887),
        i = (n(61052), n(58530), n(85061)),
        l = n(96156),
        c = n(28481),
        u = n(22122),
        s = n(67294),
        f = n(94184),
        d = n.n(f),
        m = n(86032),
        p = function (e, t) {
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
        v = s.createContext({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function h(e) {
        var t = e.suffixCls,
          n = e.tagName,
          r = e.displayName;
        return function (e) {
          var o = function (r) {
            var o = s.useContext(m.E_),
              a = o.getPrefixCls,
              i = r.prefixCls,
              l = a(t, i);
            return s.createElement(
              e,
              (0, u.Z)({ prefixCls: l, tagName: n }, r),
            );
          };
          return (o.displayName = r), o;
        };
      }
      var g = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.children,
            o = e.tagName,
            a = p(e, ['prefixCls', 'className', 'children', 'tagName']),
            i = d()(t, n);
          return s.createElement(o, (0, u.Z)({ className: i }, a), r);
        },
        y = function (e) {
          var t,
            n = s.useContext(m.E_),
            r = n.direction,
            o = s.useState([]),
            a = (0, c.Z)(o, 2),
            f = a[0],
            h = a[1],
            g = e.prefixCls,
            y = e.className,
            b = e.children,
            C = e.hasSider,
            E = e.tagName,
            w = p(e, [
              'prefixCls',
              'className',
              'children',
              'hasSider',
              'tagName',
            ]),
            Z = d()(
              g,
              ((t = {}),
              (0, l.Z)(
                t,
                ''.concat(g, '-has-sider'),
                'boolean' === typeof C ? C : f.length > 0,
              ),
              (0, l.Z)(t, ''.concat(g, '-rtl'), 'rtl' === r),
              t),
              y,
            );
          return s.createElement(
            v.Provider,
            {
              value: {
                siderHook: {
                  addSider: function (e) {
                    h(function (t) {
                      return [].concat((0, i.Z)(t), [e]);
                    });
                  },
                  removeSider: function (e) {
                    h(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  },
                },
              },
            },
            s.createElement(E, (0, u.Z)({ className: Z }, w), b),
          );
        },
        b = h({
          suffixCls: 'layout',
          tagName: 'section',
          displayName: 'Layout',
        })(y),
        C = h({
          suffixCls: 'layout-header',
          tagName: 'header',
          displayName: 'Header',
        })(g),
        E = h({
          suffixCls: 'layout-footer',
          tagName: 'footer',
          displayName: 'Footer',
        })(g),
        w = h({
          suffixCls: 'layout-content',
          tagName: 'main',
          displayName: 'Content',
        })(g),
        Z = b,
        x = n(98423),
        N = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d:
                    'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        O = N,
        P = n(27029),
        T = function (e, t) {
          return s.createElement(
            P.Z,
            Object.assign({}, e, { ref: t, icon: O }),
          );
        };
      T.displayName = 'BarsOutlined';
      var R = s.forwardRef(T),
        S = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d:
                    'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                },
              },
            ],
          },
          name: 'right',
          theme: 'outlined',
        },
        I = S,
        M = function (e, t) {
          return s.createElement(
            P.Z,
            Object.assign({}, e, { ref: t, icon: I }),
          );
        };
      M.displayName = 'RightOutlined';
      var j = s.forwardRef(M),
        k = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d:
                    'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                },
              },
            ],
          },
          name: 'left',
          theme: 'outlined',
        },
        F = k,
        D = function (e, t) {
          return s.createElement(
            P.Z,
            Object.assign({}, e, { ref: t, icon: F }),
          );
        };
      D.displayName = 'LeftOutlined';
      var L = s.forwardRef(D),
        A = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        K = A,
        _ = function (e, t) {
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
        z = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        V = s.createContext({}),
        B = (function () {
          var e = 0;
          return function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '';
            return (e += 1), ''.concat(t).concat(e);
          };
        })(),
        H = s.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.className,
            o = e.trigger,
            a = e.children,
            i = e.defaultCollapsed,
            f = void 0 !== i && i,
            p = e.theme,
            h = void 0 === p ? 'dark' : p,
            g = e.style,
            y = void 0 === g ? {} : g,
            b = e.collapsible,
            C = void 0 !== b && b,
            E = e.reverseArrow,
            w = void 0 !== E && E,
            Z = e.width,
            N = void 0 === Z ? 200 : Z,
            O = e.collapsedWidth,
            P = void 0 === O ? 80 : O,
            T = e.zeroWidthTriggerStyle,
            S = e.breakpoint,
            I = e.onCollapse,
            M = e.onBreakpoint,
            k = _(e, [
              'prefixCls',
              'className',
              'trigger',
              'children',
              'defaultCollapsed',
              'theme',
              'style',
              'collapsible',
              'reverseArrow',
              'width',
              'collapsedWidth',
              'zeroWidthTriggerStyle',
              'breakpoint',
              'onCollapse',
              'onBreakpoint',
            ]),
            F = (0, s.useContext)(v),
            D = F.siderHook,
            A = (0, s.useState)('collapsed' in k ? k.collapsed : f),
            H = (0, c.Z)(A, 2),
            W = H[0],
            X = H[1],
            $ = (0, s.useState)(!1),
            G = (0, c.Z)($, 2),
            U = G[0],
            q = G[1];
          (0, s.useEffect)(
            function () {
              'collapsed' in k && X(k.collapsed);
            },
            [k.collapsed],
          );
          var Y = function (e, t) {
              'collapsed' in k || X(e), null === I || void 0 === I || I(e, t);
            },
            J = (0, s.useRef)();
          (J.current = function (e) {
            q(e.matches),
              null === M || void 0 === M || M(e.matches),
              W !== e.matches && Y(e.matches, 'responsive');
          }),
            (0, s.useEffect)(function () {
              function e(e) {
                return J.current(e);
              }
              var t;
              if ('undefined' !== typeof window) {
                var n = window,
                  r = n.matchMedia;
                if (r && S && S in z) {
                  t = r('(max-width: '.concat(z[S], ')'));
                  try {
                    t.addEventListener('change', e);
                  } catch (ie) {
                    t.addListener(e);
                  }
                  e(t);
                }
              }
              return function () {
                try {
                  null === t ||
                    void 0 === t ||
                    t.removeEventListener('change', e);
                } catch (ie) {
                  null === t || void 0 === t || t.removeListener(e);
                }
              };
            }, []),
            (0, s.useEffect)(function () {
              var e = B('ant-sider-');
              return (
                D.addSider(e),
                function () {
                  return D.removeSider(e);
                }
              );
            }, []);
          var Q = function () {
              Y(!W, 'clickTrigger');
            },
            ee = (0, s.useContext)(m.E_),
            te = ee.getPrefixCls,
            ne = function () {
              var e,
                i = te('layout-sider', n),
                c = (0, x.Z)(k, ['collapsed']),
                f = W ? P : N,
                m = K(f) ? ''.concat(f, 'px') : String(f),
                p =
                  0 === parseFloat(String(P || 0))
                    ? s.createElement(
                        'span',
                        {
                          onClick: Q,
                          className: d()(
                            ''.concat(i, '-zero-width-trigger'),
                            ''
                              .concat(i, '-zero-width-trigger-')
                              .concat(w ? 'right' : 'left'),
                          ),
                          style: T,
                        },
                        o || s.createElement(R, null),
                      )
                    : null,
                v = {
                  expanded: w
                    ? s.createElement(j, null)
                    : s.createElement(L, null),
                  collapsed: w
                    ? s.createElement(L, null)
                    : s.createElement(j, null),
                },
                g = W ? 'collapsed' : 'expanded',
                b = v[g],
                E =
                  null !== o
                    ? p ||
                      s.createElement(
                        'div',
                        {
                          className: ''.concat(i, '-trigger'),
                          onClick: Q,
                          style: { width: m },
                        },
                        o || b,
                      )
                    : null,
                Z = (0, u.Z)((0, u.Z)({}, y), {
                  flex: '0 0 '.concat(m),
                  maxWidth: m,
                  minWidth: m,
                  width: m,
                }),
                O = d()(
                  i,
                  ''.concat(i, '-').concat(h),
                  ((e = {}),
                  (0, l.Z)(e, ''.concat(i, '-collapsed'), !!W),
                  (0, l.Z)(
                    e,
                    ''.concat(i, '-has-trigger'),
                    C && null !== o && !p,
                  ),
                  (0, l.Z)(e, ''.concat(i, '-below'), !!U),
                  (0, l.Z)(e, ''.concat(i, '-zero-width'), 0 === parseFloat(m)),
                  e),
                  r,
                );
              return s.createElement(
                'aside',
                (0, u.Z)({ className: O }, c, { style: Z, ref: t }),
                s.createElement(
                  'div',
                  { className: ''.concat(i, '-children') },
                  a,
                ),
                C || (U && p) ? E : null,
              );
            };
          return s.createElement(
            V.Provider,
            { value: { siderCollapsed: W } },
            ne(),
          );
        });
      H.displayName = 'Sider';
      var W = H,
        X = Z;
      (X.Header = C), (X.Footer = E), (X.Content = w), (X.Sider = W);
      var $,
        G,
        U = X,
        q = n(29323),
        Y = n(70655),
        J = n(74806),
        Q = n(680);
      function ee() {
        var e = s.useContext(J._y);
        return (0, Q.lq)(e), e;
      }
      (function (e) {
        (e['formatDate'] = 'FormattedDate'),
          (e['formatTime'] = 'FormattedTime'),
          (e['formatNumber'] = 'FormattedNumber'),
          (e['formatList'] = 'FormattedList'),
          (e['formatDisplayName'] = 'FormattedDisplayName');
      })($ || ($ = {})),
        (function (e) {
          (e['formatDate'] = 'FormattedDateParts'),
            (e['formatTime'] = 'FormattedTimeParts'),
            (e['formatNumber'] = 'FormattedNumberParts'),
            (e['formatList'] = 'FormattedListParts');
        })(G || (G = {}));
      var te = function (e) {
        var t = ee(),
          n = e.value,
          r = e.children,
          o = (0, Y._T)(e, ['value', 'children']);
        return r(t.formatNumberToParts(n, o));
      };
      te.displayName = 'FormattedNumberParts';
      var ne = function (e) {
        var t = ee(),
          n = e.value,
          r = e.children,
          o = (0, Y._T)(e, ['value', 'children']);
        return r(t.formatListToParts(n, o));
      };
      function re(e) {
        var t = function (t) {
          var n = ee(),
            r = t.value,
            o = t.children,
            a = (0, Y._T)(t, ['value', 'children']),
            i = 'string' === typeof r ? new Date(r || 0) : r,
            l =
              'formatDate' === e
                ? n.formatDateToParts(i, a)
                : n.formatTimeToParts(i, a);
          return o(l);
        };
        return (t.displayName = G[e]), t;
      }
      function oe(e) {
        var t = function (t) {
          var n = ee(),
            r = t.value,
            o = t.children,
            a = (0, Y._T)(t, ['value', 'children']),
            i = n[e](r, a);
          if ('function' === typeof o) return o(i);
          var l = n.textComponent || s.Fragment;
          return s.createElement(l, null, i);
        };
        return (t.displayName = $[e]), t;
      }
      te.displayName = 'FormattedNumberParts';
      var ae = n(82644),
        ie = n(88222),
        le = n(25687),
        ce = n(16284),
        ue = n(83695);
      function se(e, t) {
        return Object.keys(e).reduce(function (n, r) {
          return (n[r] = (0, Y.pi)({ timeZone: t }, e[r])), n;
        }, {});
      }
      function fe(e, t) {
        var n = Object.keys((0, Y.pi)((0, Y.pi)({}, e), t));
        return n.reduce(function (n, r) {
          return (n[r] = (0, Y.pi)((0, Y.pi)({}, e[r] || {}), t[r] || {})), n;
        }, {});
      }
      function de(e, t) {
        if (!t) return e;
        var n = ce.C.formats;
        return (0, Y.pi)((0, Y.pi)((0, Y.pi)({}, n), e), {
          date: fe(se(n.date, t), se(e.date || {}, t)),
          time: fe(se(n.time, t), se(e.time || {}, t)),
        });
      }
      function me(e, t, n, r, o) {
        var a = e.locale,
          i = e.formats,
          l = e.messages,
          c = e.defaultLocale,
          u = e.defaultFormats,
          s = e.onError,
          f = e.timeZone,
          d = e.defaultRichTextElements;
        void 0 === n && (n = { id: '' });
        var m = n.id,
          p = n.defaultMessage;
        (0, le.kG)(
          !!m,
          '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
        );
        var v = String(m),
          h = l && Object.prototype.hasOwnProperty.call(l, v) && l[v];
        if (Array.isArray(h) && 1 === h.length && h[0].type === ue.wD.literal)
          return h[0].value;
        if (!r && h && 'string' === typeof h && !d)
          return h.replace(/'\{(.*?)\}'/gi, '{$1}');
        if (
          ((r = (0, Y.pi)((0, Y.pi)({}, d), r || {})),
          (i = de(i, f)),
          (u = de(u, f)),
          !h)
        ) {
          if (
            ((!p || (a && a.toLowerCase() !== c.toLowerCase())) &&
              s(new ie.$6(n, a)),
            p)
          )
            try {
              var g = t.getMessageFormat(p, c, u, o);
              return g.format(r);
            } catch (y) {
              return (
                s(
                  new ie.X9(
                    'Error formatting default message for: "' +
                      v +
                      '", rendering default message verbatim',
                    a,
                    n,
                    y,
                  ),
                ),
                'string' === typeof p ? p : v
              );
            }
          return v;
        }
        try {
          g = t.getMessageFormat(
            h,
            a,
            i,
            (0, Y.pi)({ formatters: t }, o || {}),
          );
          return g.format(r);
        } catch (y) {
          s(
            new ie.X9(
              'Error formatting message: "' +
                v +
                '", using ' +
                (p ? 'default message' : 'id') +
                ' as fallback.',
              a,
              n,
              y,
            ),
          );
        }
        if (p)
          try {
            g = t.getMessageFormat(p, c, u, o);
            return g.format(r);
          } catch (y) {
            s(
              new ie.X9(
                'Error formatting the default message for: "' +
                  v +
                  '", rendering message verbatim',
                a,
                n,
                y,
              ),
            );
          }
        return 'string' === typeof h ? h : 'string' === typeof p ? p : v;
      }
      var pe = [
        'localeMatcher',
        'style',
        'currency',
        'currencyDisplay',
        'unit',
        'unitDisplay',
        'useGrouping',
        'minimumIntegerDigits',
        'minimumFractionDigits',
        'maximumFractionDigits',
        'minimumSignificantDigits',
        'maximumSignificantDigits',
        'compactDisplay',
        'currencyDisplay',
        'currencySign',
        'notation',
        'signDisplay',
        'unit',
        'unitDisplay',
        'numberingSystem',
      ];
      function ve(e, t, n) {
        var r = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var i = n.format,
          l = (i && (0, ae.TB)(o, 'number', i, a)) || {},
          c = (0, ae.L6)(n, pe, l);
        return t(r, c);
      }
      function he(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return ve(e, t, r).format(n);
        } catch (o) {
          e.onError(
            new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting number.', o),
          );
        }
        return String(n);
      }
      function ge(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return ve(e, t, r).formatToParts(n);
        } catch (o) {
          e.onError(
            new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting number.', o),
          );
        }
        return [];
      }
      var ye = n(11050),
        be = ['numeric', 'style'];
      function Ce(e, t, n) {
        var r = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var i = n.format,
          l = (!!i && (0, ae.TB)(o, 'relative', i, a)) || {},
          c = (0, ae.L6)(n, be, l);
        return t(r, c);
      }
      function Ee(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = 'second');
        var a = Intl.RelativeTimeFormat;
        a ||
          e.onError(
            new ye.u_(
              'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
              ye.jK.MISSING_INTL_API,
            ),
          );
        try {
          return Ce(e, t, o).format(n, r);
        } catch (i) {
          e.onError(new ie.X9('Error formatting relative time.', i));
        }
        return String(n);
      }
      var we = [
        'localeMatcher',
        'formatMatcher',
        'timeZone',
        'hour12',
        'weekday',
        'era',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'timeZoneName',
        'hourCycle',
        'dateStyle',
        'timeStyle',
        'calendar',
        'numberingSystem',
      ];
      function Ze(e, t, n, r) {
        var o = e.locale,
          a = e.formats,
          i = e.onError,
          l = e.timeZone;
        void 0 === r && (r = {});
        var c = r.format,
          u = (0, Y.pi)(
            (0, Y.pi)({}, l && { timeZone: l }),
            c && (0, ae.TB)(a, t, c, i),
          ),
          s = (0, ae.L6)(r, we, u);
        return (
          'time' !== t ||
            s.hour ||
            s.minute ||
            s.second ||
            s.timeStyle ||
            s.dateStyle ||
            (s = (0, Y.pi)((0, Y.pi)({}, s), {
              hour: 'numeric',
              minute: 'numeric',
            })),
          n(o, s)
        );
      }
      function xe(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          l = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return Ze(e, 'date', t, i).format(l);
        } catch (c) {
          e.onError(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting date.', c));
        }
        return String(l);
      }
      function Ne(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          l = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return Ze(e, 'time', t, i).format(l);
        } catch (c) {
          e.onError(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting time.', c));
        }
        return String(l);
      }
      function Oe(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = n[2],
          l = void 0 === i ? {} : i,
          c = e.timeZone,
          u = e.locale,
          s = e.onError,
          f = (0, ae.L6)(l, we, c ? { timeZone: c } : {});
        try {
          return t(u, f).formatRange(o, a);
        } catch (d) {
          s(
            new ie.Rw(
              ie.bc.FORMAT_ERROR,
              'Error formatting date time range.',
              d,
            ),
          );
        }
        return String(o);
      }
      function Pe(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          l = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return Ze(e, 'date', t, i).formatToParts(l);
        } catch (c) {
          e.onError(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting date.', c));
        }
        return [];
      }
      function Te(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          l = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return Ze(e, 'time', t, i).formatToParts(l);
        } catch (c) {
          e.onError(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting time.', c));
        }
        return [];
      }
      var Re = ['localeMatcher', 'type'];
      function Se(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        void 0 === r && (r = {}),
          Intl.PluralRules ||
            a(
              new ye.u_(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                ye.jK.MISSING_INTL_API,
              ),
            );
        var i = (0, ae.L6)(r, Re);
        try {
          return t(o, i).select(n);
        } catch (l) {
          a(new ie.X9('Error formatting plural.', l));
        }
        return 'other';
      }
      var Ie = ['localeMatcher', 'type', 'style'],
        Me = Date.now();
      function je(e) {
        return Me + '_' + e + '_' + Me;
      }
      function ke(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Fe(e, t, n, r).reduce(function (e, t) {
          var n = t.value;
          return (
            'string' !== typeof n
              ? e.push(n)
              : 'string' === typeof e[e.length - 1]
              ? (e[e.length - 1] += n)
              : e.push(n),
            e
          );
        }, []);
        return 1 === o.length ? o[0] : o;
      }
      function Fe(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        void 0 === r && (r = {});
        var i = Intl.ListFormat;
        i ||
          a(
            new ye.u_(
              'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
              ye.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, ae.L6)(r, Ie);
        try {
          var c = {},
            u = n.map(function (e, t) {
              if ('object' === typeof e) {
                var n = je(t);
                return (c[n] = e), n;
              }
              return String(e);
            });
          return t(o, l)
            .formatToParts(u)
            .map(function (e) {
              return 'literal' === e.type
                ? e
                : (0, Y.pi)((0, Y.pi)({}, e), { value: c[e.value] || e.value });
            });
        } catch (s) {
          a(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting list.', s));
        }
        return n;
      }
      var De = ['localeMatcher', 'style', 'type', 'fallback'];
      function Le(e, t, n, r) {
        var o = e.locale,
          a = e.onError,
          i = Intl.DisplayNames;
        i ||
          a(
            new ye.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              ye.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, ae.L6)(r, De);
        try {
          return t(o, l).of(n);
        } catch (c) {
          a(new ie.Rw(ie.bc.FORMAT_ERROR, 'Error formatting display name.', c));
        }
      }
      function Ae(e) {
        var t = e ? e[Object.keys(e)[0]] : void 0;
        return 'string' === typeof t;
      }
      function Ke(e) {
        e.defaultRichTextElements &&
          Ae(e.messages || {}) &&
          console.warn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
          );
      }
      function _e(e, t) {
        var n = (0, ae.ax)(t),
          r = (0, Y.pi)((0, Y.pi)({}, ae.Z0), e),
          o = r.locale,
          a = r.defaultLocale,
          i = r.onError;
        return (
          o
            ? !Intl.NumberFormat.supportedLocalesOf(o).length && i
              ? i(
                  new ie.gb(
                    'Missing locale data for locale: "' +
                      o +
                      '" in Intl.NumberFormat. Using default locale: "' +
                      a +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                  ),
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(o).length &&
                i &&
                i(
                  new ie.gb(
                    'Missing locale data for locale: "' +
                      o +
                      '" in Intl.DateTimeFormat. Using default locale: "' +
                      a +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                  ),
                )
            : (i &&
                i(
                  new ie.OV(
                    '"locale" was not configured, using "' +
                      a +
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                  ),
                ),
              (r.locale = r.defaultLocale || 'en')),
          Ke(r),
          (0, Y.pi)((0, Y.pi)({}, r), {
            formatters: n,
            formatNumber: he.bind(null, r, n.getNumberFormat),
            formatNumberToParts: ge.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Ee.bind(null, r, n.getRelativeTimeFormat),
            formatDate: xe.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Pe.bind(null, r, n.getDateTimeFormat),
            formatTime: Ne.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Oe.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Te.bind(null, r, n.getDateTimeFormat),
            formatPlural: Se.bind(null, r, n.getPluralRules),
            formatMessage: me.bind(null, r, n),
            formatList: ke.bind(null, r, n.getListFormat),
            formatListToParts: Fe.bind(null, r, n.getListFormat),
            formatDisplayName: Le.bind(null, r, n.getDisplayNames),
          })
        );
      }
      var ze = n(61092);
      function Ve(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements,
        };
      }
      function Be(e) {
        return e
          ? Object.keys(e).reduce(function (t, n) {
              var r = e[n];
              return (t[n] = (0, ze.Gt)(r) ? (0, Q.dt)(r) : r), t;
            }, {})
          : e;
      }
      var He = function (e, t, n, r) {
          for (var o = [], a = 4; a < arguments.length; a++)
            o[a - 4] = arguments[a];
          var i = Be(r),
            l = me.apply(void 0, (0, Y.ev)([e, t, n, i], o));
          return Array.isArray(l) ? s.Children.toArray(l) : l;
        },
        We = function (e, t) {
          var n = e.defaultRichTextElements,
            r = (0, Y._T)(e, ['defaultRichTextElements']),
            o = Be(n),
            a = _e(
              (0, Y.pi)((0, Y.pi)((0, Y.pi)({}, Q.Z0), r), {
                defaultRichTextElements: o,
              }),
              t,
            );
          return (0, Y.pi)((0, Y.pi)({}, a), {
            formatMessage: He.bind(
              null,
              {
                locale: a.locale,
                timeZone: a.timeZone,
                formats: a.formats,
                defaultLocale: a.defaultLocale,
                defaultFormats: a.defaultFormats,
                messages: a.messages,
                onError: a.onError,
                defaultRichTextElements: o,
              },
              a.formatters,
            ),
          });
        },
        Xe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.cache = (0, ae.Sn)()),
              (t.state = {
                cache: t.cache,
                intl: We(Ve(t.props), t.cache),
                prevConfig: Ve(t.props),
              }),
              t
            );
          }
          return (
            (0, Y.ZT)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = t.prevConfig,
                r = t.cache,
                o = Ve(e);
              return (0, Q.wU)(n, o) ? null : { intl: We(o, r), prevConfig: o };
            }),
            (t.prototype.render = function () {
              return (
                (0, Q.lq)(this.state.intl),
                s.createElement(
                  J.zt,
                  { value: this.state.intl },
                  this.props.children,
                )
              );
            }),
            (t.displayName = 'IntlProvider'),
            (t.defaultProps = Q.Z0),
            t
          );
        })(s.PureComponent),
        $e = Xe,
        Ge = 60,
        Ue = 3600,
        qe = 86400;
      function Ye(e) {
        var t = Math.abs(e);
        return t < Ge ? 'second' : t < Ue ? 'minute' : t < qe ? 'hour' : 'day';
      }
      function Je(e) {
        switch (e) {
          case 'second':
            return 1;
          case 'minute':
            return Ge;
          case 'hour':
            return Ue;
          default:
            return qe;
        }
      }
      function Qe(e, t) {
        if (!e) return 0;
        switch (t) {
          case 'second':
            return e;
          case 'minute':
            return e * Ge;
          default:
            return e * Ue;
        }
      }
      var et = ['second', 'minute', 'hour'];
      function tt(e) {
        return void 0 === e && (e = 'second'), et.includes(e);
      }
      var nt = function (e) {
          var t = ee(),
            n = t.formatRelativeTime,
            r = t.textComponent,
            o = e.children,
            a = e.value,
            i = e.unit,
            l = (0, Y._T)(e, ['children', 'value', 'unit']),
            c = n(a || 0, i, l);
          return 'function' === typeof o
            ? o(c)
            : r
            ? s.createElement(r, null, c)
            : s.createElement(s.Fragment, null, c);
        },
        rt = function (e) {
          var t = e.value,
            n = e.unit,
            r = e.updateIntervalInSeconds,
            o = (0, Y._T)(e, ['value', 'unit', 'updateIntervalInSeconds']);
          (0, le.kG)(
            !r || !(!r || !tt(n)),
            'Cannot schedule update with unit longer than hour',
          );
          var a,
            i = s.useState(),
            l = i[0],
            c = i[1],
            u = s.useState(0),
            f = u[0],
            d = u[1],
            m = s.useState(0),
            p = m[0],
            v = m[1];
          (n === l && t === f) || (d(t || 0), c(n), v(tt(n) ? Qe(t, n) : 0)),
            s.useEffect(
              function () {
                function e() {
                  clearTimeout(a);
                }
                if ((e(), !r || !tt(n))) return e;
                var t = p - r,
                  o = Ye(t);
                if ('day' === o) return e;
                var i = Je(o),
                  l = t % i,
                  c = t - l,
                  u = c >= p ? c - i : c,
                  s = Math.abs(u - p);
                return (
                  p !== u &&
                    (a = setTimeout(function () {
                      return v(u);
                    }, 1e3 * s)),
                  e
                );
              },
              [p, r, n],
            );
          var h = t || 0,
            g = n;
          if (tt(n) && 'number' === typeof p && r) {
            g = Ye(p);
            var y = Je(g);
            h = Math.round(p / y);
          }
          return s.createElement(nt, (0, Y.pi)({ value: h, unit: g }, o));
        };
      (rt.displayName = 'FormattedRelativeTime'),
        (rt.defaultProps = { value: 0, unit: 'second' });
      var ot = rt,
        at = function (e) {
          var t = ee(),
            n = t.formatPlural,
            r = t.textComponent,
            o = e.value,
            a = e.other,
            i = e.children,
            l = n(o, e),
            c = e[l] || a;
          return 'function' === typeof i
            ? i(c)
            : r
            ? s.createElement(r, null, c)
            : c;
        };
      (at.defaultProps = { type: 'cardinal' }),
        (at.displayName = 'FormattedPlural');
      var it = at;
      function lt(e, t) {
        var n = e.values,
          r = (0, Y._T)(e, ['values']),
          o = t.values,
          a = (0, Y._T)(t, ['values']);
        return (0, Q.wU)(o, n) && (0, Q.wU)(r, a);
      }
      function ct(e) {
        var t = ee(),
          n = t.formatMessage,
          r = t.textComponent,
          o = void 0 === r ? s.Fragment : r,
          a = e.id,
          i = e.description,
          l = e.defaultMessage,
          c = e.values,
          u = e.children,
          f = e.tagName,
          d = void 0 === f ? o : f,
          m = e.ignoreTag,
          p = { id: a, description: i, defaultMessage: l },
          v = n(p, c, { ignoreTag: m });
        return (
          Array.isArray(v) || (v = [v]),
          'function' === typeof u
            ? u(v)
            : d
            ? s.createElement(d, null, s.Children.toArray(v))
            : s.createElement(s.Fragment, null, v)
        );
      }
      ct.displayName = 'FormattedMessage';
      var ut = s.memo(ct, lt);
      ut.displayName = 'MemoizedFormattedMessage';
      var st = ut,
        ft = function (e) {
          var t = ee(),
            n = e.from,
            r = e.to,
            o = e.children,
            a = (0, Y._T)(e, ['from', 'to', 'children']),
            i = t.formatDateTimeRange(n, r, a);
          if ('function' === typeof o) return o(i);
          var l = t.textComponent || s.Fragment;
          return s.createElement(l, null, i);
        };
      ft.displayName = 'FormattedDateTimeRange';
      var dt = ft;
      function mt(e) {
        return e;
      }
      function pt(e) {
        return e;
      }
      var vt = oe('formatDate'),
        ht = oe('formatTime'),
        gt = oe('formatNumber'),
        yt = oe('formatList'),
        bt = oe('formatDisplayName'),
        Ct = re('formatDate'),
        Et = re('formatTime'),
        wt = {
          author: '\u5b87\u5b99\u6700\u5e05\u91d1\u5efa\u4e1a',
          why: '\u4e3a\u4ec0\u4e48',
          'who.save.world':
            '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}',
        },
        Zt = {
          author: 'universe handsome jianye',
          why: 'why',
          'who.save.world': '{who}~ come to save the world \uff01{encourage}',
        },
        xt = (n(67754), n(49781), n(6610)),
        Nt = n(5991),
        Ot = n(10379),
        Pt = n(54070),
        Tt = n(28991),
        Rt = n(81253),
        St = n(96774),
        It = n.n(St),
        Mt = n(21770),
        jt = n(80334),
        kt = n(23532),
        Ft = n(15105),
        Dt = n(56982),
        Lt = s.createContext(null);
      function At(e, t) {
        var n = (0, Tt.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function Kt(e) {
        var t = e.children,
          n = e.locked,
          r = (0, Rt.Z)(e, ['children', 'locked']),
          o = s.useContext(Lt),
          a = (0, Dt.Z)(
            function () {
              return At(o, r);
            },
            [o, r],
            function (e, t) {
              return !n && (e[0] !== t[0] || !It()(e[1], t[1]));
            },
          );
        return s.createElement(Lt.Provider, { value: a }, t);
      }
      function _t(e, t, n, r) {
        var o = s.useContext(Lt),
          a = o.activeKey,
          i = o.onActive,
          l = o.onInactive,
          c = { active: a === e };
        return (
          t ||
            ((c.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), i(e);
            }),
            (c.onMouseLeave = function (t) {
              null === r || void 0 === r || r({ key: e, domEvent: t }), l(e);
            })),
          c
        );
      }
      function zt(e) {
        var t = e.item,
          n = (0, Rt.Z)(e, ['item']);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, jt.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function Vt(e) {
        var t,
          n = e.icon,
          r = e.props,
          o = e.children;
        return (
          (t =
            'function' === typeof n ? s.createElement(n, (0, Tt.Z)({}, r)) : n),
          t || o || null
        );
      }
      function Bt(e) {
        var t = s.useContext(Lt),
          n = t.mode,
          r = t.rtl,
          o = t.inlineIndent;
        if ('inline' !== n) return null;
        var a = e;
        return r ? { paddingRight: a * o } : { paddingLeft: a * o };
      }
      var Ht = [],
        Wt = s.createContext(null);
      function Xt() {
        return s.useContext(Wt);
      }
      var $t = s.createContext(Ht);
      function Gt(e) {
        var t = s.useContext($t);
        return s.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, i.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var Ut = s.createContext(null),
        qt = s.createContext(null);
      function Yt(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function Jt(e) {
        var t = s.useContext(qt);
        return Yt(t, e);
      }
      var Qt = (function (e) {
          (0, Ot.Z)(n, e);
          var t = (0, Pt.Z)(n);
          function n() {
            return (0, xt.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, Nt.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    r = e.elementRef,
                    o = (0, Rt.Z)(e, ['title', 'attribute', 'elementRef']),
                    a = (0, x.Z)(o, ['eventKey']);
                  return (
                    (0, jt.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    s.createElement(
                      kt.Z.Item,
                      (0, u.Z)(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        a,
                        { ref: r },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        en = function (e) {
          var t,
            n = e.style,
            r = e.className,
            o = e.eventKey,
            a = (e.warnKey, e.disabled),
            c = e.itemIcon,
            f = e.children,
            m = e.role,
            p = e.onMouseEnter,
            v = e.onMouseLeave,
            h = e.onClick,
            g = e.onKeyDown,
            y = e.onFocus,
            b = (0, Rt.Z)(e, [
              'style',
              'className',
              'eventKey',
              'warnKey',
              'disabled',
              'itemIcon',
              'children',
              'role',
              'onMouseEnter',
              'onMouseLeave',
              'onClick',
              'onKeyDown',
              'onFocus',
            ]),
            C = Jt(o),
            E = s.useContext(Lt),
            w = E.prefixCls,
            Z = E.onItemClick,
            x = E.disabled,
            N = E.overflowDisabled,
            O = E.itemIcon,
            P = E.selectedKeys,
            T = E.onActive,
            R = ''.concat(w, '-item'),
            S = s.useRef(),
            I = s.useRef(),
            M = x || a,
            j = Gt(o);
          var k = function (e) {
              return {
                key: o,
                keyPath: (0, i.Z)(j).reverse(),
                item: S.current,
                domEvent: e,
              };
            },
            F = c || O,
            D = _t(o, M, p, v),
            L = D.active,
            A = (0, Rt.Z)(D, ['active']),
            K = P.includes(o),
            _ = Bt(j.length),
            z = function (e) {
              if (!M) {
                var t = k(e);
                null === h || void 0 === h || h(zt(t)), Z(t);
              }
            },
            V = function (e) {
              if (
                (null === g || void 0 === g || g(e), e.which === Ft.Z.ENTER)
              ) {
                var t = k(e);
                null === h || void 0 === h || h(zt(t)), Z(t);
              }
            },
            B = function (e) {
              T(o), null === y || void 0 === y || y(e);
            },
            H = {};
          return (
            'option' === e.role && (H['aria-selected'] = K),
            s.createElement(
              Qt,
              (0, u.Z)(
                {
                  ref: S,
                  elementRef: I,
                  role: null === m ? 'none' : m || 'menuitem',
                  tabIndex: a ? null : -1,
                  'data-menu-id': N && C ? null : C,
                },
                b,
                A,
                H,
                {
                  component: 'li',
                  'aria-disabled': a,
                  style: (0, Tt.Z)((0, Tt.Z)({}, _), n),
                  className: d()(
                    R,
                    ((t = {}),
                    (0, l.Z)(t, ''.concat(R, '-active'), L),
                    (0, l.Z)(t, ''.concat(R, '-selected'), K),
                    (0, l.Z)(t, ''.concat(R, '-disabled'), M),
                    t),
                    r,
                  ),
                  onClick: z,
                  onKeyDown: V,
                  onFocus: B,
                },
              ),
              f,
              s.createElement(Vt, {
                props: (0, Tt.Z)((0, Tt.Z)({}, e), {}, { isSelected: K }),
                icon: F,
              }),
            )
          );
        };
      function tn(e) {
        var t = e.eventKey,
          n = Xt(),
          r = Gt(t);
        return (
          s.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, r),
                  function () {
                    n.unregisterPath(t, r);
                  }
                );
            },
            [r],
          ),
          n ? null : s.createElement(en, e)
        );
      }
      var nn = tn,
        rn = n(50344);
      function on(e, t) {
        return (0, rn.Z)(e).map(function (e, n) {
          if (s.isValidElement(e)) {
            var r,
              o,
              a = e.key,
              l =
                null !==
                  (r =
                    null === (o = e.props) || void 0 === o
                      ? void 0
                      : o.eventKey) && void 0 !== r
                  ? r
                  : a,
              c = null === l || void 0 === l;
            c && (l = 'tmp_key-'.concat([].concat((0, i.Z)(t), [n]).join('-')));
            var u = { key: l, eventKey: l };
            return s.cloneElement(e, u);
          }
          return e;
        });
      }
      function an(e) {
        var t = s.useRef(e);
        t.current = e;
        var n = s.useCallback(function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var ln = function (e, t) {
          var n = e.className,
            r = e.children,
            o = (0, Rt.Z)(e, ['className', 'children']),
            a = s.useContext(Lt),
            i = a.prefixCls,
            l = a.mode;
          return s.createElement(
            'ul',
            (0, u.Z)(
              {
                className: d()(
                  i,
                  ''.concat(i, '-sub'),
                  ''
                    .concat(i, '-')
                    .concat('inline' === l ? 'inline' : 'vertical'),
                  n,
                ),
              },
              o,
              { 'data-menu-list': !0, ref: t },
            ),
            r,
          );
        },
        cn = s.forwardRef(ln);
      cn.displayName = 'SubMenuList';
      var un = cn,
        sn = n(52052),
        fn = n(75164),
        dn = { adjustX: 1, adjustY: 1 },
        mn = {
          topLeft: { points: ['bl', 'tl'], overflow: dn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: dn, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: dn, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: dn, offset: [4, 0] },
        },
        pn = {
          topLeft: { points: ['bl', 'tl'], overflow: dn, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: dn, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: dn, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: dn, offset: [4, 0] },
        };
      function vn(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var hn = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function gn(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          o = e.popup,
          a = e.popupClassName,
          i = e.popupOffset,
          u = e.disabled,
          f = e.mode,
          m = e.onVisibleChange,
          p = s.useContext(Lt),
          v = p.getPopupContainer,
          h = p.rtl,
          g = p.subMenuOpenDelay,
          y = p.subMenuCloseDelay,
          b = p.builtinPlacements,
          C = p.triggerSubMenuAction,
          E = p.forceSubMenuRender,
          w = p.motion,
          Z = p.defaultMotions,
          x = s.useState(!1),
          N = (0, c.Z)(x, 2),
          O = N[0],
          P = N[1],
          T = h
            ? (0, Tt.Z)((0, Tt.Z)({}, pn), b)
            : (0, Tt.Z)((0, Tt.Z)({}, mn), b),
          R = hn[f],
          S = vn(f, w, Z),
          I = (0, Tt.Z)(
            (0, Tt.Z)({}, S),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          M = s.useRef();
        return (
          s.useEffect(
            function () {
              return (
                (M.current = (0, fn.Z)(function () {
                  P(n);
                })),
                function () {
                  fn.Z.cancel(M.current);
                }
              );
            },
            [n],
          ),
          s.createElement(
            sn.Z,
            {
              prefixCls: t,
              popupClassName: d()(
                ''.concat(t, '-popup'),
                (0, l.Z)({}, ''.concat(t, '-rtl'), h),
                a,
              ),
              stretch: 'horizontal' === f ? 'minWidth' : null,
              getPopupContainer: v,
              builtinPlacements: T,
              popupPlacement: R,
              popupVisible: O,
              popup: o,
              popupAlign: i && { offset: i },
              action: u ? [] : [C],
              mouseEnterDelay: g,
              mouseLeaveDelay: y,
              onPopupVisibleChange: m,
              forceRender: E,
              popupMotion: I,
            },
            r,
          )
        );
      }
      var yn = n(60444);
      function bn(e) {
        var t = e.id,
          n = e.open,
          r = e.keyPath,
          o = e.children,
          a = 'inline',
          i = s.useContext(Lt),
          l = i.prefixCls,
          f = i.forceSubMenuRender,
          d = i.motion,
          m = i.defaultMotions,
          p = i.mode,
          v = s.useRef(!1);
        v.current = p === a;
        var h = s.useState(!v.current),
          g = (0, c.Z)(h, 2),
          y = g[0],
          b = g[1],
          C = !!v.current && n;
        s.useEffect(
          function () {
            v.current && b(!1);
          },
          [p],
        );
        var E = (0, Tt.Z)({}, vn(a, d, m));
        r.length > 1 && (E.motionAppear = !1);
        var w = E.onVisibleChanged;
        return (
          (E.onVisibleChanged = function (e) {
            return (
              v.current || e || b(!0),
              null === w || void 0 === w ? void 0 : w(e)
            );
          }),
          y
            ? null
            : s.createElement(
                Kt,
                { mode: a, locked: !v.current },
                s.createElement(
                  yn.Z,
                  (0, u.Z)({ visible: C }, E, {
                    forceRender: f,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(l, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return s.createElement(
                      un,
                      { id: t, className: n, style: r },
                      o,
                    );
                  },
                ),
              )
        );
      }
      var Cn = function (e) {
        var t,
          n = e.style,
          r = e.className,
          o = e.title,
          a = e.eventKey,
          i = (e.warnKey, e.disabled),
          f = e.internalPopupClose,
          m = e.children,
          p = e.itemIcon,
          v = e.expandIcon,
          h = e.popupClassName,
          g = e.popupOffset,
          y = e.onClick,
          b = e.onMouseEnter,
          C = e.onMouseLeave,
          E = e.onTitleClick,
          w = e.onTitleMouseEnter,
          Z = e.onTitleMouseLeave,
          x = (0, Rt.Z)(e, [
            'style',
            'className',
            'title',
            'eventKey',
            'warnKey',
            'disabled',
            'internalPopupClose',
            'children',
            'itemIcon',
            'expandIcon',
            'popupClassName',
            'popupOffset',
            'onClick',
            'onMouseEnter',
            'onMouseLeave',
            'onTitleClick',
            'onTitleMouseEnter',
            'onTitleMouseLeave',
          ]),
          N = Jt(a),
          O = s.useContext(Lt),
          P = O.prefixCls,
          T = O.mode,
          R = O.openKeys,
          S = O.disabled,
          I = O.overflowDisabled,
          M = O.activeKey,
          j = O.selectedKeys,
          k = O.itemIcon,
          F = O.expandIcon,
          D = O.onItemClick,
          L = O.onOpenChange,
          A = O.onActive,
          K = s.useContext(Ut),
          _ = K.isSubPathKey,
          z = Gt(),
          V = ''.concat(P, '-submenu'),
          B = S || i,
          H = s.useRef(),
          W = s.useRef();
        var X = p || k,
          $ = v || F,
          G = R.includes(a),
          U = !I && G,
          q = _(j, a),
          Y = _t(a, B, w, Z),
          J = Y.active,
          Q = (0, Rt.Z)(Y, ['active']),
          ee = s.useState(!1),
          te = (0, c.Z)(ee, 2),
          ne = te[0],
          re = te[1],
          oe = function (e) {
            B || re(e);
          },
          ae = function (e) {
            oe(!0), null === b || void 0 === b || b({ key: a, domEvent: e });
          },
          ie = function (e) {
            oe(!1), null === C || void 0 === C || C({ key: a, domEvent: e });
          },
          le = s.useMemo(
            function () {
              return J || ('inline' !== T && (ne || _([M], a)));
            },
            [T, J, M, ne, a, _],
          ),
          ce = Bt(z.length),
          ue = function (e) {
            B ||
              (null === E || void 0 === E || E({ key: a, domEvent: e }),
              'inline' === T && L(a, !G));
          },
          se = an(function (e) {
            null === y || void 0 === y || y(zt(e)), D(e);
          }),
          fe = function (e) {
            'inline' !== T && L(a, e);
          },
          de = function () {
            A(a);
          },
          me = N && ''.concat(N, '-popup'),
          pe = s.createElement(
            'div',
            (0, u.Z)(
              {
                role: 'menuitem',
                style: ce,
                className: ''.concat(V, '-title'),
                tabIndex: B ? null : -1,
                ref: H,
                title: 'string' === typeof o ? o : null,
                'data-menu-id': I && N ? null : N,
                'aria-expanded': U,
                'aria-haspopup': !0,
                'aria-controls': me,
                'aria-disabled': B,
                onClick: ue,
                onFocus: de,
              },
              Q,
            ),
            o,
            s.createElement(
              Vt,
              {
                icon: 'horizontal' !== T ? $ : null,
                props: (0, Tt.Z)(
                  (0, Tt.Z)({}, e),
                  {},
                  { isOpen: U, isSubMenu: !0 },
                ),
              },
              s.createElement('i', { className: ''.concat(V, '-arrow') }),
            ),
          ),
          ve = s.useRef(T);
        if (
          ('inline' !== T && (ve.current = z.length > 1 ? 'vertical' : T), !I)
        ) {
          var he = ve.current;
          pe = s.createElement(
            gn,
            {
              mode: he,
              prefixCls: V,
              visible: !f && U && 'inline' !== T,
              popupClassName: h,
              popupOffset: g,
              popup: s.createElement(
                Kt,
                { mode: 'horizontal' === he ? 'vertical' : he },
                s.createElement(un, { id: me, ref: W }, m),
              ),
              disabled: B,
              onVisibleChange: fe,
            },
            pe,
          );
        }
        return s.createElement(
          Kt,
          {
            onItemClick: se,
            mode: 'horizontal' === T ? 'vertical' : T,
            itemIcon: X,
            expandIcon: $,
          },
          s.createElement(
            kt.Z.Item,
            (0, u.Z)({ role: 'none' }, x, {
              component: 'li',
              style: n,
              className: d()(
                V,
                ''.concat(V, '-').concat(T),
                r,
                ((t = {}),
                (0, l.Z)(t, ''.concat(V, '-open'), U),
                (0, l.Z)(t, ''.concat(V, '-active'), le),
                (0, l.Z)(t, ''.concat(V, '-selected'), q),
                (0, l.Z)(t, ''.concat(V, '-disabled'), B),
                t),
              ),
              onMouseEnter: ae,
              onMouseLeave: ie,
            }),
            pe,
            !I && s.createElement(bn, { id: me, open: U, keyPath: z }, m),
          ),
        );
      };
      function En(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          o = Gt(n),
          a = on(r, o),
          i = Xt();
        return (
          s.useEffect(
            function () {
              if (i)
                return (
                  i.registerPath(n, o),
                  function () {
                    i.unregisterPath(n, o);
                  }
                );
            },
            [o],
          ),
          (t = i ? a : s.createElement(Cn, e, a)),
          s.createElement($t.Provider, { value: o }, t)
        );
      }
      var wn = n(5110);
      function Zn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, wn.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            o = e.getAttribute('tabindex'),
            a = Number(o),
            i = null;
          return (
            o && !Number.isNaN(a) ? (i = a) : r && null === i && (i = 0),
            r && e.disabled && (i = null),
            null !== i && (i >= 0 || (t && i < 0))
          );
        }
        return !1;
      }
      function xn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, i.Z)(e.querySelectorAll('*')).filter(function (e) {
            return Zn(e, t);
          });
        return Zn(e, t) && n.unshift(e), n;
      }
      var Nn = Ft.Z.LEFT,
        On = Ft.Z.RIGHT,
        Pn = Ft.Z.UP,
        Tn = Ft.Z.DOWN,
        Rn = Ft.Z.ENTER,
        Sn = Ft.Z.ESC,
        In = [Pn, Tn, Nn, On];
      function Mn(e, t, n, r) {
        var o,
          a,
          i,
          c,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === Rn) return { inlineTrigger: !0 };
        var m = ((o = {}), (0, l.Z)(o, Pn, u), (0, l.Z)(o, Tn, s), o),
          p =
            ((a = {}),
            (0, l.Z)(a, Nn, n ? s : u),
            (0, l.Z)(a, On, n ? u : s),
            (0, l.Z)(a, Tn, f),
            (0, l.Z)(a, Rn, f),
            a),
          v =
            ((i = {}),
            (0, l.Z)(i, Pn, u),
            (0, l.Z)(i, Tn, s),
            (0, l.Z)(i, Rn, f),
            (0, l.Z)(i, Sn, d),
            (0, l.Z)(i, Nn, n ? f : d),
            (0, l.Z)(i, On, n ? d : f),
            i),
          h = {
            inline: m,
            horizontal: p,
            vertical: v,
            inlineSub: m,
            horizontalSub: v,
            verticalSub: v,
          },
          g =
            null === (c = h[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === c
              ? void 0
              : c[r];
        switch (g) {
          case u:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function jn(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function kn(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Fn(e, t) {
        var n = xn(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function Dn(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = Fn(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1),
          (i = (i + a) % a),
          o[i]
        );
      }
      function Ln(e, t, n, r, o, a, i, l, c, u) {
        var f = s.useRef(),
          d = s.useRef();
        d.current = t;
        var m = function () {
          fn.Z.cancel(f.current);
        };
        return (
          s.useEffect(function () {
            return function () {
              m();
            };
          }, []),
          function (s) {
            var p = s.which;
            if ([].concat(In, [Rn, Sn]).includes(p)) {
              var v,
                h,
                g,
                y = function () {
                  (v = new Set()), (h = new Map()), (g = new Map());
                  var e = a();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(Yt(r, e), "']"),
                      );
                      t && (v.add(t), g.set(t, e), h.set(e, t));
                    }),
                    v
                  );
                };
              y();
              var b = h.get(t),
                C = kn(b, v),
                E = g.get(C),
                w = Mn(e, 1 === i(E, !0).length, n, p);
              if (!w) return;
              In.includes(p) && s.preventDefault();
              var Z = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var r = g.get(e);
                  l(r),
                    m(),
                    (f.current = (0, fn.Z)(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if (w.sibling || !C) {
                var x;
                x = C && 'inline' !== e ? jn(C) : o.current;
                var N = Dn(x, v, C, w.offset);
                Z(N);
              } else if (w.inlineTrigger) c(E);
              else if (w.offset > 0)
                c(E, !0),
                  m(),
                  (f.current = (0, fn.Z)(function () {
                    y();
                    var e = C.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = Dn(t, v);
                    Z(n);
                  }, 5));
              else if (w.offset < 0) {
                var O = i(E, !0),
                  P = O[O.length - 2],
                  T = h.get(P);
                c(P, !1), Z(T);
              }
            }
            null === u || void 0 === u || u(s);
          }
        );
      }
      var An = Math.random().toFixed(5).toString().slice(2),
        Kn = 0;
      function _n(e) {
        var t = (0, Mt.Z)(e, { value: e }),
          n = (0, c.Z)(t, 2),
          r = n[0],
          o = n[1];
        return (
          s.useEffect(function () {
            Kn += 1;
            var e = ''.concat(An, '-').concat(Kn);
            o('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function zn(e) {
        Promise.resolve().then(e);
      }
      var Vn = '__RC_UTIL_PATH_SPLIT__',
        Bn = function (e) {
          return e.join(Vn);
        },
        Hn = function (e) {
          return e.split(Vn);
        },
        Wn = 'rc-menu-more';
      function Xn() {
        var e = s.useState({}),
          t = (0, c.Z)(e, 2),
          n = t[1],
          r = (0, s.useRef)(new Map()),
          o = (0, s.useRef)(new Map()),
          a = s.useState([]),
          l = (0, c.Z)(a, 2),
          u = l[0],
          f = l[1],
          d = (0, s.useRef)(0),
          m = (0, s.useRef)(!1),
          p = function () {
            m.current || n({});
          },
          v = (0, s.useCallback)(function (e, t) {
            var n = Bn(t);
            o.current.set(n, e), r.current.set(e, n), (d.current += 1);
            var a = d.current;
            zn(function () {
              a === d.current && p();
            });
          }, []),
          h = (0, s.useCallback)(function (e, t) {
            var n = Bn(t);
            o.current.delete(n), r.current.delete(e);
          }, []),
          g = (0, s.useCallback)(function (e) {
            f(e);
          }, []),
          y = (0, s.useCallback)(
            function (e, t) {
              var n = r.current.get(e) || '',
                o = Hn(n);
              return t && u.includes(o[0]) && o.unshift(Wn), o;
            },
            [u],
          ),
          b = (0, s.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = y(e, !0);
                return n.includes(t);
              });
            },
            [y],
          ),
          C = function () {
            var e = (0, i.Z)(r.current.keys());
            return u.length && e.push(Wn), e;
          },
          E = (0, s.useCallback)(function (e) {
            var t = ''.concat(r.current.get(e)).concat(Vn),
              n = new Set();
            return (
              (0, i.Z)(o.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(o.current.get(e));
              }),
              n
            );
          }, []);
        return (
          s.useEffect(function () {
            return function () {
              m.current = !0;
            };
          }, []),
          {
            registerPath: v,
            unregisterPath: h,
            refreshOverflowKeys: g,
            isSubPathKey: b,
            getKeyPath: y,
            getKeys: C,
            getSubPathKeys: E,
          }
        );
      }
      var $n = [],
        Gn = function (e) {
          var t,
            n,
            r = e.prefixCls,
            o = void 0 === r ? 'rc-menu' : r,
            a = e.style,
            f = e.className,
            m = e.tabIndex,
            p = void 0 === m ? 0 : m,
            v = e.children,
            h = e.direction,
            g = e.id,
            y = e.mode,
            b = void 0 === y ? 'vertical' : y,
            C = e.inlineCollapsed,
            E = e.disabled,
            w = e.disabledOverflow,
            Z = e.subMenuOpenDelay,
            x = void 0 === Z ? 0.1 : Z,
            N = e.subMenuCloseDelay,
            O = void 0 === N ? 0.1 : N,
            P = e.forceSubMenuRender,
            T = e.defaultOpenKeys,
            R = e.openKeys,
            S = e.activeKey,
            I = e.defaultActiveFirst,
            M = e.selectable,
            j = void 0 === M || M,
            k = e.multiple,
            F = void 0 !== k && k,
            D = e.defaultSelectedKeys,
            L = e.selectedKeys,
            A = e.onSelect,
            K = e.onDeselect,
            _ = e.inlineIndent,
            z = void 0 === _ ? 24 : _,
            V = e.motion,
            B = e.defaultMotions,
            H = e.triggerSubMenuAction,
            W = void 0 === H ? 'hover' : H,
            X = e.builtinPlacements,
            $ = e.itemIcon,
            G = e.expandIcon,
            U = e.overflowedIndicator,
            q = void 0 === U ? '...' : U,
            Y = e.overflowedIndicatorPopupClassName,
            J = e.getPopupContainer,
            Q = e.onClick,
            ee = e.onOpenChange,
            te = e.onKeyDown,
            ne =
              (e.openAnimation,
              e.openTransitionName,
              (0, Rt.Z)(e, [
                'prefixCls',
                'style',
                'className',
                'tabIndex',
                'children',
                'direction',
                'id',
                'mode',
                'inlineCollapsed',
                'disabled',
                'disabledOverflow',
                'subMenuOpenDelay',
                'subMenuCloseDelay',
                'forceSubMenuRender',
                'defaultOpenKeys',
                'openKeys',
                'activeKey',
                'defaultActiveFirst',
                'selectable',
                'multiple',
                'defaultSelectedKeys',
                'selectedKeys',
                'onSelect',
                'onDeselect',
                'inlineIndent',
                'motion',
                'defaultMotions',
                'triggerSubMenuAction',
                'builtinPlacements',
                'itemIcon',
                'expandIcon',
                'overflowedIndicator',
                'overflowedIndicatorPopupClassName',
                'getPopupContainer',
                'onClick',
                'onOpenChange',
                'onKeyDown',
                'openAnimation',
                'openTransitionName',
              ])),
            re = on(v, $n),
            oe = s.useState(!1),
            ae = (0, c.Z)(oe, 2),
            ie = ae[0],
            le = ae[1],
            ce = s.useRef(),
            ue = _n(g),
            se = 'rtl' === h;
          var fe = s.useMemo(
              function () {
                return ('inline' !== b && 'vertical' !== b) || !C
                  ? [b, !1]
                  : ['vertical', C];
              },
              [b, C],
            ),
            de = (0, c.Z)(fe, 2),
            me = de[0],
            pe = de[1],
            ve = s.useState(0),
            he = (0, c.Z)(ve, 2),
            ge = he[0],
            ye = he[1],
            be = ge >= re.length - 1 || 'horizontal' !== me || w,
            Ce = (0, Mt.Z)(T, {
              value: R,
              postState: function (e) {
                return e || $n;
              },
            }),
            Ee = (0, c.Z)(Ce, 2),
            we = Ee[0],
            Ze = Ee[1],
            xe = function (e) {
              Ze(e), null === ee || void 0 === ee || ee(e);
            },
            Ne = s.useState(we),
            Oe = (0, c.Z)(Ne, 2),
            Pe = Oe[0],
            Te = Oe[1],
            Re = 'inline' === me,
            Se = s.useRef(!1);
          s.useEffect(
            function () {
              Re && Te(we);
            },
            [we],
          ),
            s.useEffect(
              function () {
                Se.current ? (Re ? Ze(Pe) : xe($n)) : (Se.current = !0);
              },
              [Re],
            );
          var Ie = Xn(),
            Me = Ie.registerPath,
            je = Ie.unregisterPath,
            ke = Ie.refreshOverflowKeys,
            Fe = Ie.isSubPathKey,
            De = Ie.getKeyPath,
            Le = Ie.getKeys,
            Ae = Ie.getSubPathKeys,
            Ke = s.useMemo(
              function () {
                return { registerPath: Me, unregisterPath: je };
              },
              [Me, je],
            ),
            _e = s.useMemo(
              function () {
                return { isSubPathKey: Fe };
              },
              [Fe],
            );
          s.useEffect(
            function () {
              ke(
                be
                  ? $n
                  : re.slice(ge + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [ge, be],
          );
          var ze = (0, Mt.Z)(
              S ||
                (I && (null === (t = re[0]) || void 0 === t ? void 0 : t.key)),
              { value: S },
            ),
            Ve = (0, c.Z)(ze, 2),
            Be = Ve[0],
            He = Ve[1],
            We = an(function (e) {
              He(e);
            }),
            Xe = an(function () {
              He(void 0);
            }),
            $e = (0, Mt.Z)(D || [], {
              value: L,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? $n
                  : [e];
              },
            }),
            Ge = (0, c.Z)($e, 2),
            Ue = Ge[0],
            qe = Ge[1],
            Ye = function (e) {
              if (j) {
                var t,
                  n = e.key,
                  r = Ue.includes(n);
                (t = F
                  ? r
                    ? Ue.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, i.Z)(Ue), [n])
                  : [n]),
                  qe(t);
                var o = (0, Tt.Z)((0, Tt.Z)({}, e), {}, { selectedKeys: t });
                r
                  ? null === K || void 0 === K || K(o)
                  : null === A || void 0 === A || A(o);
              }
              !F && we.length && 'inline' !== me && xe($n);
            },
            Je = an(function (e) {
              null === Q || void 0 === Q || Q(zt(e)), Ye(e);
            }),
            Qe = an(function (e, t) {
              var n = we.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== me) {
                var r = Ae(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              It()(we, n) || xe(n);
            }),
            et = an(J),
            tt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !we.includes(e);
              Qe(e, n);
            },
            nt = Ln(me, Be, se, ue, ce, Le, De, He, tt, te);
          s.useEffect(function () {
            le(!0);
          }, []);
          var rt =
              'horizontal' !== me || w
                ? re
                : re.map(function (e, t) {
                    return s.createElement(
                      Kt,
                      { key: e.key, overflowDisabled: t > ge },
                      e,
                    );
                  }),
            ot = s.createElement(
              kt.Z,
              (0, u.Z)(
                {
                  id: g,
                  ref: ce,
                  prefixCls: ''.concat(o, '-overflow'),
                  component: 'ul',
                  itemComponent: nn,
                  className: d()(
                    o,
                    ''.concat(o, '-root'),
                    ''.concat(o, '-').concat(me),
                    f,
                    ((n = {}),
                    (0, l.Z)(n, ''.concat(o, '-inline-collapsed'), pe),
                    (0, l.Z)(n, ''.concat(o, '-rtl'), se),
                    n),
                  ),
                  dir: h,
                  style: a,
                  role: 'menu',
                  tabIndex: p,
                  data: rt,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? re.slice(-t) : null;
                    return s.createElement(
                      En,
                      {
                        eventKey: Wn,
                        title: q,
                        disabled: be,
                        internalPopupClose: 0 === t,
                        popupClassName: Y,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== me || w
                      ? kt.Z.INVALIDATE
                      : kt.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    ye(e);
                  },
                  onKeyDown: nt,
                },
                ne,
              ),
            );
          return s.createElement(
            qt.Provider,
            { value: ue },
            s.createElement(
              Kt,
              {
                prefixCls: o,
                mode: me,
                openKeys: we,
                rtl: se,
                disabled: E,
                motion: ie ? V : null,
                defaultMotions: ie ? B : null,
                activeKey: Be,
                onActive: We,
                onInactive: Xe,
                selectedKeys: Ue,
                inlineIndent: z,
                subMenuOpenDelay: x,
                subMenuCloseDelay: O,
                forceSubMenuRender: P,
                builtinPlacements: X,
                triggerSubMenuAction: W,
                getPopupContainer: et,
                itemIcon: $,
                expandIcon: G,
                onItemClick: Je,
                onOpenChange: Qe,
              },
              s.createElement(Ut.Provider, { value: _e }, ot),
              s.createElement(
                'div',
                { style: { display: 'none' }, 'aria-hidden': !0 },
                s.createElement(Wt.Provider, { value: Ke }, re),
              ),
            ),
          );
        },
        Un = Gn,
        qn = function (e) {
          var t = e.className,
            n = e.title,
            r = (e.eventKey, e.children),
            o = (0, Rt.Z)(e, ['className', 'title', 'eventKey', 'children']),
            a = s.useContext(Lt),
            i = a.prefixCls,
            l = ''.concat(i, '-item-group');
          return s.createElement(
            'li',
            (0, u.Z)({}, o, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: d()(l, t),
            }),
            s.createElement(
              'div',
              {
                className: ''.concat(l, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            s.createElement('ul', { className: ''.concat(l, '-list') }, r),
          );
        };
      function Yn(e) {
        var t = e.children,
          n = (0, Rt.Z)(e, ['children']),
          r = Gt(n.eventKey),
          o = on(t, r),
          a = Xt();
        return a ? o : s.createElement(qn, (0, x.Z)(n, ['warnKey']), o);
      }
      function Jn(e) {
        var t = e.className,
          n = e.style,
          r = s.useContext(Lt),
          o = r.prefixCls,
          a = Xt();
        return a
          ? null
          : s.createElement('li', {
              className: d()(''.concat(o, '-item-divider'), t),
              style: n,
            });
      }
      var Qn = Gt,
        er = Un;
      (er.Item = nn), (er.SubMenu = En), (er.ItemGroup = Yn), (er.Divider = Jn);
      var tr = er,
        nr = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d:
                    'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        rr = nr,
        or = function (e, t) {
          return s.createElement(
            P.Z,
            Object.assign({}, e, { ref: t, icon: rr }),
          );
        };
      or.displayName = 'EllipsisOutlined';
      var ar = s.forwardRef(or),
        ir = (0, s.createContext)({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        lr = ir,
        cr = n(96159);
      function ur(e) {
        var t,
          n,
          r = e.popupClassName,
          o = e.icon,
          a = e.title,
          i = s.useContext(lr),
          l = i.prefixCls,
          c = i.inlineCollapsed,
          f = i.antdMenuTheme,
          m = Qn();
        if (o) {
          var p = (0, cr.l$)(a) && 'span' === a.type;
          n = s.createElement(
            s.Fragment,
            null,
            (0, cr.Tm)(o, {
              className: d()(
                (0, cr.l$)(o)
                  ? null === (t = o.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                ''.concat(l, '-item-icon'),
              ),
            }),
            p
              ? a
              : s.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  a,
                ),
          );
        } else
          n =
            c && !m.length && a && 'string' === typeof a
              ? s.createElement(
                  'div',
                  { className: ''.concat(l, '-inline-collapsed-noicon') },
                  a.charAt(0),
                )
              : s.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  a,
                );
        return s.createElement(
          lr.Provider,
          { value: (0, u.Z)((0, u.Z)({}, i), { firstLevel: !1 }) },
          s.createElement(
            En,
            (0, u.Z)({}, (0, x.Z)(e, ['icon']), {
              title: n,
              popupClassName: d()(l, ''.concat(l, '-').concat(f), r),
            }),
          ),
        );
      }
      var sr = ur,
        fr = n(90484),
        dr = { adjustX: 1, adjustY: 1 },
        mr = [0, 0],
        pr = {
          left: {
            points: ['cr', 'cl'],
            overflow: dr,
            offset: [-4, 0],
            targetOffset: mr,
          },
          right: {
            points: ['cl', 'cr'],
            overflow: dr,
            offset: [4, 0],
            targetOffset: mr,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: dr,
            offset: [0, -4],
            targetOffset: mr,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: dr,
            offset: [0, 4],
            targetOffset: mr,
          },
          topLeft: {
            points: ['bl', 'tl'],
            overflow: dr,
            offset: [0, -4],
            targetOffset: mr,
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: dr,
            offset: [-4, 0],
            targetOffset: mr,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: dr,
            offset: [0, -4],
            targetOffset: mr,
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: dr,
            offset: [4, 0],
            targetOffset: mr,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: dr,
            offset: [0, 4],
            targetOffset: mr,
          },
          rightBottom: {
            points: ['bl', 'br'],
            overflow: dr,
            offset: [4, 0],
            targetOffset: mr,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: dr,
            offset: [0, 4],
            targetOffset: mr,
          },
          leftBottom: {
            points: ['br', 'bl'],
            overflow: dr,
            offset: [-4, 0],
            targetOffset: mr,
          },
        },
        vr = function (e) {
          var t = e.overlay,
            n = e.prefixCls,
            r = e.id,
            o = e.overlayInnerStyle;
          return s.createElement(
            'div',
            {
              className: ''.concat(n, '-inner'),
              id: r,
              role: 'tooltip',
              style: o,
            },
            'function' === typeof t ? t() : t,
          );
        },
        hr = vr,
        gr = function (e, t) {
          var n = e.overlayClassName,
            r = e.trigger,
            o = void 0 === r ? ['hover'] : r,
            a = e.mouseEnterDelay,
            i = void 0 === a ? 0 : a,
            l = e.mouseLeaveDelay,
            c = void 0 === l ? 0.1 : l,
            f = e.overlayStyle,
            d = e.prefixCls,
            m = void 0 === d ? 'rc-tooltip' : d,
            p = e.children,
            v = e.onVisibleChange,
            h = e.afterVisibleChange,
            g = e.transitionName,
            y = e.animation,
            b = e.motion,
            C = e.placement,
            E = void 0 === C ? 'right' : C,
            w = e.align,
            Z = void 0 === w ? {} : w,
            x = e.destroyTooltipOnHide,
            N = void 0 !== x && x,
            O = e.defaultVisible,
            P = e.getTooltipContainer,
            T = e.overlayInnerStyle,
            R = (0, Rt.Z)(e, [
              'overlayClassName',
              'trigger',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayStyle',
              'prefixCls',
              'children',
              'onVisibleChange',
              'afterVisibleChange',
              'transitionName',
              'animation',
              'motion',
              'placement',
              'align',
              'destroyTooltipOnHide',
              'defaultVisible',
              'getTooltipContainer',
              'overlayInnerStyle',
            ]),
            S = (0, s.useRef)(null);
          (0, s.useImperativeHandle)(t, function () {
            return S.current;
          });
          var I = (0, Tt.Z)({}, R);
          'visible' in e && (I.popupVisible = e.visible);
          var M = function () {
              var t = e.arrowContent,
                n = void 0 === t ? null : t,
                r = e.overlay,
                o = e.id;
              return [
                s.createElement(
                  'div',
                  { className: ''.concat(m, '-arrow'), key: 'arrow' },
                  n,
                ),
                s.createElement(hr, {
                  key: 'content',
                  prefixCls: m,
                  id: o,
                  overlay: r,
                  overlayInnerStyle: T,
                }),
              ];
            },
            j = !1,
            k = !1;
          if ('boolean' === typeof N) j = N;
          else if (N && 'object' === (0, fr.Z)(N)) {
            var F = N.keepParent;
            (j = !0 === F), (k = !1 === F);
          }
          return s.createElement(
            sn.Z,
            (0, u.Z)(
              {
                popupClassName: n,
                prefixCls: m,
                popup: M,
                action: o,
                builtinPlacements: pr,
                popupPlacement: E,
                ref: S,
                popupAlign: Z,
                getPopupContainer: P,
                onPopupVisibleChange: v,
                afterPopupVisibleChange: h,
                popupTransitionName: g,
                popupAnimation: y,
                popupMotion: b,
                defaultPopupVisible: O,
                destroyPopupOnHide: j,
                autoDestroy: k,
                mouseLeaveDelay: c,
                popupStyle: f,
                mouseEnterDelay: i,
              },
              I,
            ),
            p,
          );
        },
        yr = (0, s.forwardRef)(gr),
        br = yr,
        Cr = { adjustX: 1, adjustY: 1 },
        Er = { adjustX: 0, adjustY: 0 },
        wr = [0, 0];
      function Zr(e) {
        return 'boolean' === typeof e
          ? e
            ? Cr
            : Er
          : (0, u.Z)((0, u.Z)({}, Er), e);
      }
      function xr(e) {
        var t = e.arrowWidth,
          n = void 0 === t ? 4 : t,
          r = e.horizontalArrowShift,
          o = void 0 === r ? 16 : r,
          a = e.verticalArrowShift,
          i = void 0 === a ? 8 : a,
          l = e.autoAdjustOverflow,
          c = {
            left: { points: ['cr', 'cl'], offset: [-4, 0] },
            right: { points: ['cl', 'cr'], offset: [4, 0] },
            top: { points: ['bc', 'tc'], offset: [0, -4] },
            bottom: { points: ['tc', 'bc'], offset: [0, 4] },
            topLeft: { points: ['bl', 'tc'], offset: [-(o + n), -4] },
            leftTop: { points: ['tr', 'cl'], offset: [-4, -(i + n)] },
            topRight: { points: ['br', 'tc'], offset: [o + n, -4] },
            rightTop: { points: ['tl', 'cr'], offset: [4, -(i + n)] },
            bottomRight: { points: ['tr', 'bc'], offset: [o + n, 4] },
            rightBottom: { points: ['bl', 'cr'], offset: [4, i + n] },
            bottomLeft: { points: ['tl', 'bc'], offset: [-(o + n), 4] },
            leftBottom: { points: ['br', 'cl'], offset: [-4, i + n] },
          };
        return (
          Object.keys(c).forEach(function (t) {
            (c[t] = e.arrowPointAtCenter
              ? (0, u.Z)((0, u.Z)({}, c[t]), {
                  overflow: Zr(l),
                  targetOffset: wr,
                })
              : (0, u.Z)((0, u.Z)({}, pr[t]), { overflow: Zr(l) })),
              (c[t].ignoreShake = !0);
          }),
          c
        );
      }
      var Nr = n(93355),
        Or =
          ((0, Nr.b)('success', 'processing', 'error', 'default', 'warning'),
          (0, Nr.b)(
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime',
          )),
        Pr = n(33603),
        Tr = function (e, t) {
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
        Rr = function (e, t) {
          var n = {},
            r = (0, u.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((n[t] = e[t]), delete r[t]);
            }),
            { picked: n, omitted: r }
          );
        },
        Sr = new RegExp('^('.concat(Or.join('|'), ')(-inverse)?$'));
      function Ir(e, t) {
        var n = e.type;
        if (
          (!0 === n.__ANT_BUTTON ||
            !0 === n.__ANT_SWITCH ||
            !0 === n.__ANT_CHECKBOX ||
            'button' === e.type) &&
          e.props.disabled
        ) {
          var r = Rr(e.props.style, [
              'position',
              'left',
              'right',
              'top',
              'bottom',
              'float',
              'display',
              'zIndex',
            ]),
            o = r.picked,
            a = r.omitted,
            i = (0, u.Z)((0, u.Z)({ display: 'inline-block' }, o), {
              cursor: 'not-allowed',
              width: e.props.block ? '100%' : null,
            }),
            l = (0, u.Z)((0, u.Z)({}, a), { pointerEvents: 'none' }),
            c = (0, cr.Tm)(e, { style: l, className: null });
          return s.createElement(
            'span',
            {
              style: i,
              className: d()(
                e.props.className,
                ''.concat(t, '-disabled-compatible-wrapper'),
              ),
            },
            c,
          );
        }
        return e;
      }
      var Mr = s.forwardRef(function (e, t) {
        var n,
          r = s.useContext(m.E_),
          o = r.getPopupContainer,
          a = r.getPrefixCls,
          i = r.direction,
          f = (0, Mt.Z)(!1, {
            value: e.visible,
            defaultValue: e.defaultVisible,
          }),
          p = (0, c.Z)(f, 2),
          v = p[0],
          h = p[1],
          g = function () {
            var t = e.title,
              n = e.overlay;
            return !t && !n && 0 !== t;
          },
          y = function (t) {
            var n;
            h(!g() && t),
              g() ||
                null === (n = e.onVisibleChange) ||
                void 0 === n ||
                n.call(e, t);
          },
          b = function () {
            var t = e.builtinPlacements,
              n = e.arrowPointAtCenter,
              r = e.autoAdjustOverflow;
            return t || xr({ arrowPointAtCenter: n, autoAdjustOverflow: r });
          },
          C = function (e, t) {
            var n = b(),
              r = Object.keys(n).filter(function (e) {
                return (
                  n[e].points[0] === t.points[0] &&
                  n[e].points[1] === t.points[1]
                );
              })[0];
            if (r) {
              var o = e.getBoundingClientRect(),
                a = { top: '50%', left: '50%' };
              r.indexOf('top') >= 0 || r.indexOf('Bottom') >= 0
                ? (a.top = ''.concat(o.height - t.offset[1], 'px'))
                : (r.indexOf('Top') >= 0 || r.indexOf('bottom') >= 0) &&
                  (a.top = ''.concat(-t.offset[1], 'px')),
                r.indexOf('left') >= 0 || r.indexOf('Right') >= 0
                  ? (a.left = ''.concat(o.width - t.offset[0], 'px'))
                  : (r.indexOf('right') >= 0 || r.indexOf('Left') >= 0) &&
                    (a.left = ''.concat(-t.offset[0], 'px')),
                (e.style.transformOrigin = ''
                  .concat(a.left, ' ')
                  .concat(a.top));
            }
          },
          E = function () {
            var t = e.title,
              n = e.overlay;
            return 0 === t ? t : n || t || '';
          },
          w = e.getPopupContainer,
          Z = Tr(e, ['getPopupContainer']),
          x = e.prefixCls,
          N = e.openClassName,
          O = e.getTooltipContainer,
          P = e.overlayClassName,
          T = e.color,
          R = e.overlayInnerStyle,
          S = e.children,
          I = a('tooltip', x),
          M = a(),
          j = v;
        !('visible' in e) && g() && (j = !1);
        var k,
          F = Ir((0, cr.l$)(S) ? S : s.createElement('span', null, S), I),
          D = F.props,
          L = d()(D.className, (0, l.Z)({}, N || ''.concat(I, '-open'), !0)),
          A = d()(
            P,
            ((n = {}),
            (0, l.Z)(n, ''.concat(I, '-rtl'), 'rtl' === i),
            (0, l.Z)(n, ''.concat(I, '-').concat(T), T && Sr.test(T)),
            n),
          ),
          K = R;
        return (
          T &&
            !Sr.test(T) &&
            ((K = (0, u.Z)((0, u.Z)({}, R), { background: T })),
            (k = { background: T })),
          s.createElement(
            br,
            (0, u.Z)({}, Z, {
              prefixCls: I,
              overlayClassName: A,
              getTooltipContainer: w || O || o,
              ref: t,
              builtinPlacements: b(),
              overlay: E(),
              visible: j,
              onVisibleChange: y,
              onPopupAlign: C,
              overlayInnerStyle: K,
              arrowContent: s.createElement('span', {
                className: ''.concat(I, '-arrow-content'),
                style: k,
              }),
              motion: {
                motionName: (0, Pr.m)(M, 'zoom-big-fast', e.transitionName),
                motionDeadline: 1e3,
              },
            }),
            j ? (0, cr.Tm)(F, { className: L }) : F,
          )
        );
      });
      (Mr.displayName = 'Tooltip'),
        (Mr.defaultProps = {
          placement: 'top',
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          arrowPointAtCenter: !1,
          autoAdjustOverflow: !0,
        });
      var jr = Mr,
        kr = function (e, t) {
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
        Fr = (function (e) {
          (0, Ot.Z)(n, e);
          var t = (0, Pt.Z)(n);
          function n() {
            var e;
            return (
              (0, xt.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  r,
                  o = t.siderCollapsed,
                  a = e.context,
                  i = a.prefixCls,
                  c = a.firstLevel,
                  f = a.inlineCollapsed,
                  m = a.direction,
                  p = e.props,
                  v = p.className,
                  h = p.children,
                  g = e.props,
                  y = g.title,
                  b = g.icon,
                  C = g.danger,
                  E = kr(g, ['title', 'icon', 'danger']),
                  w = y;
                'undefined' === typeof y
                  ? (w = c ? h : '')
                  : !1 === y && (w = '');
                var Z = { title: w };
                o || f || ((Z.title = null), (Z.visible = !1));
                var x = (0, rn.Z)(h).length;
                return s.createElement(
                  jr,
                  (0, u.Z)({}, Z, {
                    placement: 'rtl' === m ? 'left' : 'right',
                    overlayClassName: ''.concat(i, '-inline-collapsed-tooltip'),
                  }),
                  s.createElement(
                    nn,
                    (0, u.Z)({}, E, {
                      className: d()(
                        ((n = {}),
                        (0, l.Z)(n, ''.concat(i, '-item-danger'), C),
                        (0, l.Z)(
                          n,
                          ''.concat(i, '-item-only-child'),
                          1 === (b ? x + 1 : x),
                        ),
                        n),
                        v,
                      ),
                      title: 'string' === typeof y ? y : void 0,
                    }),
                    (0, cr.Tm)(b, {
                      className: d()(
                        (0, cr.l$)(b)
                          ? null === (r = b.props) || void 0 === r
                            ? void 0
                            : r.className
                          : '',
                        ''.concat(i, '-item-icon'),
                      ),
                    }),
                    e.renderItemChildren(f),
                  ),
                );
              }),
              e
            );
          }
          return (
            (0, Nt.Z)(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    r = t.firstLevel,
                    o = this.props,
                    a = o.icon,
                    i = o.children,
                    l = s.createElement(
                      'span',
                      { className: ''.concat(n, '-title-content') },
                      i,
                    );
                  return (!a || ((0, cr.l$)(i) && 'span' === i.type)) &&
                    i &&
                    e &&
                    r &&
                    'string' === typeof i
                    ? s.createElement(
                        'div',
                        { className: ''.concat(n, '-inline-collapsed-noicon') },
                        i.charAt(0),
                      )
                    : l;
                },
              },
              {
                key: 'render',
                value: function () {
                  return s.createElement(V.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(s.Component);
      Fr.contextType = lr;
      var Dr = n(21687),
        Lr = function (e, t) {
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
        Ar = (function (e) {
          (0, Ot.Z)(n, e);
          var t = (0, Pt.Z)(n);
          function n(e) {
            var r;
            return (
              (0, xt.Z)(this, n),
              (r = t.call(this, e)),
              (r.renderMenu = function (e) {
                var t = e.getPopupContainer,
                  n = e.getPrefixCls,
                  o = e.direction,
                  a = n(),
                  i = r.props,
                  l = i.prefixCls,
                  c = i.className,
                  f = i.theme,
                  m = i.expandIcon,
                  p = Lr(i, ['prefixCls', 'className', 'theme', 'expandIcon']),
                  v = (0, x.Z)(p, ['siderCollapsed', 'collapsedWidth']),
                  h = r.getInlineCollapsed(),
                  g = {
                    horizontal: { motionName: ''.concat(a, '-slide-up') },
                    inline: Pr.Z,
                    other: { motionName: ''.concat(a, '-zoom-big') },
                  },
                  y = n('menu', l),
                  b = d()(''.concat(y, '-').concat(f), c);
                return s.createElement(
                  lr.Provider,
                  {
                    value: {
                      prefixCls: y,
                      inlineCollapsed: h || !1,
                      antdMenuTheme: f,
                      direction: o,
                      firstLevel: !0,
                    },
                  },
                  s.createElement(
                    tr,
                    (0, u.Z)(
                      {
                        getPopupContainer: t,
                        overflowedIndicator: s.createElement(ar, null),
                        overflowedIndicatorPopupClassName: ''
                          .concat(y, '-')
                          .concat(f),
                      },
                      v,
                      {
                        inlineCollapsed: h,
                        className: b,
                        prefixCls: y,
                        direction: o,
                        defaultMotions: g,
                        expandIcon: (0, cr.Tm)(m, {
                          className: ''.concat(y, '-submenu-expand-icon'),
                        }),
                      },
                    ),
                  ),
                );
              }),
              (0, Dr.Z)(
                !('inlineCollapsed' in e && 'inline' !== e.mode),
                'Menu',
                '`inlineCollapsed` should only be used when `mode` is inline.',
              ),
              (0, Dr.Z)(
                !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
                'Menu',
                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
              ),
              r
            );
          }
          return (
            (0, Nt.Z)(n, [
              {
                key: 'getInlineCollapsed',
                value: function () {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed;
                  return void 0 !== n ? n : t;
                },
              },
              {
                key: 'render',
                value: function () {
                  return s.createElement(m.C, null, this.renderMenu);
                },
              },
            ]),
            n
          );
        })(s.Component);
      Ar.defaultProps = { theme: 'light' };
      var Kr = (function (e) {
        (0, Ot.Z)(n, e);
        var t = (0, Pt.Z)(n);
        function n() {
          return (0, xt.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, Nt.Z)(n, [
            {
              key: 'render',
              value: function () {
                var e = this;
                return s.createElement(V.Consumer, null, function (t) {
                  return s.createElement(Ar, (0, u.Z)({}, e.props, t));
                });
              },
            },
          ]),
          n
        );
      })(s.Component);
      (Kr.Divider = Jn), (Kr.Item = Fr), (Kr.SubMenu = sr), (Kr.ItemGroup = Yn);
      var _r = Kr,
        zr = n(5977),
        Vr = n(41788),
        Br = n(97175),
        Hr = (n(45697), n(19756)),
        Wr = n(2177);
      s.Component;
      s.Component;
      var Xr = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        $r = function (e, t) {
          return 'string' === typeof e ? (0, Br.ob)(e, null, null, t) : e;
        },
        Gr = function (e) {
          return e;
        },
        Ur = s.forwardRef;
      function qr(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof Ur && (Ur = Gr);
      var Yr = Ur(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          o = e.onClick,
          a = (0, Hr.Z)(e, ['innerRef', 'navigate', 'onClick']),
          i = a.target,
          l = (0, u.Z)({}, a, {
            onClick: function (e) {
              try {
                o && o(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (i && '_self' !== i) ||
                qr(e) ||
                (e.preventDefault(), r());
            },
          });
        return (l.ref = (Gr !== Ur && t) || n), s.createElement('a', l);
      });
      var Jr = Ur(function (e, t) {
          var n = e.component,
            r = void 0 === n ? Yr : n,
            o = e.replace,
            a = e.to,
            i = e.innerRef,
            l = (0, Hr.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return s.createElement(zr.s6.Consumer, null, function (e) {
            e || (0, Wr.Z)(!1);
            var n = e.history,
              c = $r(Xr(a, e.location), e.location),
              f = c ? n.createHref(c) : '',
              d = (0, u.Z)({}, l, {
                href: f,
                navigate: function () {
                  var t = Xr(a, e.location),
                    r = o ? n.replace : n.push;
                  r(t);
                },
              });
            return (
              Gr !== Ur ? (d.ref = t || i) : (d.innerRef = i),
              s.createElement(r, d)
            );
          });
        }),
        Qr = function (e) {
          return e;
        },
        eo = s.forwardRef;
      function to() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof eo && (eo = Qr);
      eo(function (e, t) {
        var n = e['aria-current'],
          r = void 0 === n ? 'page' : n,
          o = e.activeClassName,
          a = void 0 === o ? 'active' : o,
          i = e.activeStyle,
          l = e.className,
          c = e.exact,
          f = e.isActive,
          d = e.location,
          m = e.sensitive,
          p = e.strict,
          v = e.style,
          h = e.to,
          g = e.innerRef,
          y = (0, Hr.Z)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return s.createElement(zr.s6.Consumer, null, function (e) {
          e || (0, Wr.Z)(!1);
          var n = d || e.location,
            o = $r(Xr(h, n), n),
            b = o.pathname,
            C = b && b.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            E = C
              ? (0, zr.LX)(n.pathname, {
                  path: C,
                  exact: c,
                  sensitive: m,
                  strict: p,
                })
              : null,
            w = !!(f ? f(E, n) : E),
            Z = w ? to(l, a) : l,
            x = w ? (0, u.Z)({}, v, {}, i) : v,
            N = (0, u.Z)(
              {
                'aria-current': (w && r) || null,
                className: Z,
                style: x,
                to: o,
              },
              y,
            );
          return (
            Qr !== eo ? (N.ref = t || g) : (N.innerRef = g),
            s.createElement(Jr, N)
          );
        });
      });
      var no = [
          {
            id: 1,
            path: '/',
            name: '\u6280\u672f\u6d4b\u8bd5',
            icon: 'trophy',
            children: [
              {
                id: 11,
                path: '/me',
                name: 'react-intl JS\u7528\u6cd5',
                icon: 'trophy',
              },
              {
                id: 12,
                path: '/home',
                name: 'react-intl \u6807\u7b7e\u7528\u6cd5',
                icon: 'trophy',
              },
              {
                id: 13,
                path: '/content-download',
                name: '\u6d4b\u8bd5content download',
                icon: 'trophy',
              },
              {
                id: 14,
                path: '/ggeditor',
                name: '\u6d4b\u8bd5ggeditor',
                icon: 'trophy',
              },
              { id: 15, path: '/inject', name: 'hook inject', icon: 'trophy' },
            ],
          },
        ],
        ro = n(2e4),
        oo = s.forwardRef(function (e, t) {
          var n = e.className,
            r = e.component,
            o = e.viewBox,
            a = e.spin,
            i = e.rotate,
            l = e.tabIndex,
            c = e.onClick,
            u = e.children,
            f = (0, Rt.Z)(e, [
              'className',
              'component',
              'viewBox',
              'spin',
              'rotate',
              'tabIndex',
              'onClick',
              'children',
            ]);
          (0, ro.Kp)(
            Boolean(r || u),
            'Should have `component` prop or `children`.',
          ),
            (0, ro.C3)();
          var m = d()('anticon', n),
            p = d()({ 'anticon-spin': !!a }),
            v = i
              ? {
                  msTransform: 'rotate('.concat(i, 'deg)'),
                  transform: 'rotate('.concat(i, 'deg)'),
                }
              : void 0,
            h = (0, Tt.Z)(
              (0, Tt.Z)({}, ro.vD),
              {},
              { className: p, style: v, viewBox: o },
            );
          o || delete h.viewBox;
          var g = function () {
              return r
                ? s.createElement(r, Object.assign({}, h), u)
                : u
                ? ((0, ro.Kp)(
                    Boolean(o) ||
                      (1 === s.Children.count(u) &&
                        s.isValidElement(u) &&
                        'use' === s.Children.only(u).type),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  s.createElement(
                    'svg',
                    Object.assign({}, h, { viewBox: o }),
                    u,
                  ))
                : null;
            },
            y = l;
          return (
            void 0 === y && c && (y = -1),
            s.createElement(
              'span',
              Object.assign({ role: 'img' }, f, {
                ref: t,
                tabIndex: y,
                onClick: c,
                className: m,
              }),
              g(),
            )
          );
        });
      oo.displayName = 'AntdIcon';
      var ao = oo,
        io = new Set();
      function lo(e) {
        return Boolean('string' === typeof e && e.length && !io.has(e));
      }
      function co(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = e[t];
        if (lo(n)) {
          var r = document.createElement('script');
          r.setAttribute('src', n),
            r.setAttribute('data-namespace', n),
            e.length > t + 1 &&
              ((r.onload = function () {
                co(e, t + 1);
              }),
              (r.onerror = function () {
                co(e, t + 1);
              })),
            io.add(n),
            document.body.appendChild(r);
        }
      }
      function uo() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.scriptUrl,
          n = e.extraCommonProps,
          r = void 0 === n ? {} : n;
        t &&
          'undefined' !== typeof document &&
          'undefined' !== typeof window &&
          'function' === typeof document.createElement &&
          (Array.isArray(t) ? co(t.reverse()) : co([t]));
        var o = s.forwardRef(function (e, t) {
          var n = e.type,
            o = e.children,
            a = (0, Rt.Z)(e, ['type', 'children']),
            i = null;
          return (
            e.type &&
              (i = s.createElement('use', { xlinkHref: '#'.concat(n) })),
            o && (i = o),
            s.createElement(ao, Object.assign({}, r, a, { ref: t }), i)
          );
        });
        return (o.displayName = 'Iconfont'), o;
      }
      var so = n(85893),
        fo = uo({ scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js' }),
        mo = (e) => (0, so.jsx)(fo, { type: 'icon-'.concat(e.type) }),
        po = mo,
        vo = U.Sider,
        ho = _r.SubMenu,
        go = () => {
          var e = (0, s.useState)(!0),
            t = (0, a.Z)(e, 2),
            n = t[0],
            r = t[1];
          return (0, so.jsx)(vo, {
            style: { minHeight: 'calc(100vh - 60px)' },
            collapsedWidth: 40,
            collapsible: !0,
            collapsed: n,
            onCollapse: r,
            children: (0, so.jsx)(_r, {
              mode: 'inline',
              defaultSelectedKeys: ['4'],
              children: no.map((e) =>
                (0, so.jsx)(
                  ho,
                  {
                    title: e.name,
                    icon: (0, so.jsx)(po, { type: ''.concat(e.icon) }),
                    children: e.children.map((t) =>
                      (0, so.jsx)(
                        _r.Item,
                        {
                          icon: (0, so.jsx)(po, { type: ''.concat(e.icon) }),
                          children: (0, so.jsxs)(Jr, {
                            to: t.path,
                            children: [' ', t.name],
                          }),
                        },
                        ''.concat(e.id, '_').concat(t.id),
                      ),
                    ),
                  },
                  e.id,
                ),
              ),
            }),
          });
        },
        yo = go,
        bo = (n(3317), n(49451)),
        Co = U.Header,
        Eo = (e) => {
          var t = (0, s.useState)('zh'),
            n = (0, a.Z)(t, 2),
            r = n[0],
            o = n[1],
            i = (t) => {
              o(t), e.changeLocale(t);
            };
          return (0, so.jsxs)(Co, {
            className: 'header',
            children: [
              (0, so.jsx)('div', { className: 'logo', children: ' JYJIN' }),
              (0, so.jsxs)(bo.Z, {
                className: 'local',
                width: 250,
                showSearch: !0,
                value: r,
                onChange: i,
                children: [
                  (0, so.jsx)(Option, {
                    value: 'zh',
                    children: '\u4e2d\u6587',
                  }),
                  (0, so.jsx)(Option, { value: 'en', children: 'English' }),
                ],
              }),
            ],
          });
        },
        wo = Eo,
        Zo = U.Content,
        xo = U.Footer,
        No = $e,
        Oo = { locale: 'zh', author: 'jyjin' },
        Po = (e) => {
          var t = (0, s.useState)('zh'),
            n = (0, a.Z)(t, 2),
            i = n[0],
            l = n[1],
            c = (e) => {
              (Oo.locale = e), l(e);
            };
          return (0, so.jsx)(q.zt, {
            className: 'provider',
            global: Oo,
            intls: r,
            children: (0, so.jsxs)(No, {
              messages: o[i],
              locale: i,
              defaultLocale: i,
              children: [
                (0, so.jsx)(wo, { changeLocale: c }),
                (0, so.jsxs)(U, {
                  children: [
                    (0, so.jsx)(yo, {}),
                    (0, so.jsx)(Zo, {
                      style: { margin: '24px 16px 0' },
                      children: (0, so.jsxs)('div', {
                        className: 'site-layout-background',
                        style: { padding: 24, minHeight: 360 },
                        children: [
                          e.children,
                          (0, so.jsx)(xo, {
                            style: { textAlign: 'center' },
                            children:
                              'Developing \xa92021 Created by Ant Jyjin',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        To = Po;
    },
    96159: function (e, t, n) {
      'use strict';
      n.d(t, {
        l$: function () {
          return o;
        },
        Tm: function () {
          return i;
        },
      });
      var r = n(67294),
        o = r.isValidElement;
      function a(e, t, n) {
        return o(e)
          ? r.cloneElement(e, 'function' === typeof n ? n(e.props || {}) : n)
          : t;
      }
      function i(e, t) {
        return a(e, e, t);
      }
    },
    93355: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return r;
        },
      });
      var r = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t;
      };
    },
    98423: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(28991);
      function o(e, t) {
        var n = (0, r.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
    96774: function (e) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < a.length;
          c++
        ) {
          var u = a[c];
          if (!l(u)) return !1;
          var s = e[u],
            f = t[u];
          if (
            ((o = n ? n.call(r, s, f, u) : void 0),
            !1 === o || (void 0 === o && s !== f))
          )
            return !1;
        }
        return !0;
      };
    },
  },
]);
