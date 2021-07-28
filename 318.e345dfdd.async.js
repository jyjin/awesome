(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [318],
  {
    44545: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(67294),
        o = {
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
        a = o,
        i = n(27029),
        u = function (e, t) {
          return r.createElement(
            i.Z,
            Object.assign({}, e, { ref: t, icon: a }),
          );
        };
      u.displayName = 'EllipsisOutlined';
      var l = r.forwardRef(u);
    },
    98787: function (e, t, n) {
      'use strict';
      n.d(t, {
        E: function () {
          return o;
        },
        Y: function () {
          return a;
        },
      });
      var r = n(93355),
        o = (0, r.b)('success', 'processing', 'error', 'default', 'warning'),
        a = (0, r.b)(
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
        );
    },
    10985: function (e, t, n) {
      'use strict';
      n.d(t, {
        iz: function () {
          return Ae;
        },
        ck: function () {
          return G;
        },
        BW: function () {
          return Le;
        },
        sN: function () {
          return G;
        },
        Wd: function () {
          return ue;
        },
        ZP: function () {
          return ze;
        },
        Xl: function () {
          return _e;
        },
      });
      var r = n(22122),
        o = n(96156),
        a = n(28991),
        i = n(85061),
        u = n(28481),
        l = n(81253),
        c = n(67294),
        s = n(94184),
        f = n.n(s),
        m = n(96774),
        d = n.n(m),
        v = n(21770),
        p = n(80334),
        g = n(23532),
        y = n(6610),
        h = n(5991),
        b = n(10379),
        E = n(54070),
        Z = n(15105),
        C = n(98423),
        w = n(56982),
        R = c.createContext(null);
      function T(e, t) {
        var n = (0, a.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function P(e) {
        var t = e.children,
          n = e.locked,
          r = (0, l.Z)(e, ['children', 'locked']),
          o = c.useContext(R),
          a = (0, w.Z)(
            function () {
              return T(o, r);
            },
            [o, r],
            function (e, t) {
              return !n && (e[0] !== t[0] || !d()(e[1], t[1]));
            },
          );
        return c.createElement(R.Provider, { value: a }, t);
      }
      function I(e, t, n, r) {
        var o = c.useContext(R),
          a = o.activeKey,
          i = o.onActive,
          u = o.onInactive,
          l = { active: a === e };
        return (
          t ||
            ((l.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), i(e);
            }),
            (l.onMouseLeave = function (t) {
              null === r || void 0 === r || r({ key: e, domEvent: t }), u(e);
            })),
          l
        );
      }
      function M(e) {
        var t = e.item,
          n = (0, l.Z)(e, ['item']);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, p.ZP)(
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
      function N(e) {
        var t,
          n = e.icon,
          r = e.props,
          o = e.children;
        return (
          (t =
            'function' === typeof n ? c.createElement(n, (0, a.Z)({}, r)) : n),
          t || o || null
        );
      }
      function F(e) {
        var t = c.useContext(R),
          n = t.mode,
          r = t.rtl,
          o = t.inlineIndent;
        if ('inline' !== n) return null;
        var a = e;
        return r ? { paddingRight: a * o } : { paddingLeft: a * o };
      }
      var S = [],
        x = c.createContext(null);
      function D() {
        return c.useContext(x);
      }
      var k = c.createContext(S);
      function O(e) {
        var t = c.useContext(k);
        return c.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, i.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var K = c.createContext(null),
        L = c.createContext(null);
      function A(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function _(e) {
        var t = c.useContext(L);
        return A(t, e);
      }
      var j = (function (e) {
          (0, b.Z)(n, e);
          var t = (0, E.Z)(n);
          function n() {
            return (0, y.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    o = e.elementRef,
                    a = (0, l.Z)(e, ['title', 'attribute', 'elementRef']),
                    i = (0, C.Z)(a, ['eventKey']);
                  return (
                    (0, p.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    c.createElement(
                      g.Z.Item,
                      (0, r.Z)(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        i,
                        { ref: o },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        z = function (e) {
          var t,
            n = e.style,
            u = e.className,
            s = e.eventKey,
            m = (e.warnKey, e.disabled),
            d = e.itemIcon,
            v = e.children,
            p = e.role,
            g = e.onMouseEnter,
            y = e.onMouseLeave,
            h = e.onClick,
            b = e.onKeyDown,
            E = e.onFocus,
            C = (0, l.Z)(e, [
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
            w = _(s),
            T = c.useContext(R),
            P = T.prefixCls,
            S = T.onItemClick,
            x = T.disabled,
            D = T.overflowDisabled,
            k = T.itemIcon,
            K = T.selectedKeys,
            L = T.onActive,
            A = ''.concat(P, '-item'),
            z = c.useRef(),
            V = c.useRef(),
            G = x || m,
            U = O(s);
          var X = function (e) {
              return {
                key: s,
                keyPath: (0, i.Z)(U).reverse(),
                item: z.current,
                domEvent: e,
              };
            },
            q = d || k,
            B = I(s, G, g, y),
            W = B.active,
            Y = (0, l.Z)(B, ['active']),
            $ = K.includes(s),
            H = F(U.length),
            J = function (e) {
              if (!G) {
                var t = X(e);
                null === h || void 0 === h || h(M(t)), S(t);
              }
            },
            Q = function (e) {
              if ((null === b || void 0 === b || b(e), e.which === Z.Z.ENTER)) {
                var t = X(e);
                null === h || void 0 === h || h(M(t)), S(t);
              }
            },
            ee = function (e) {
              L(s), null === E || void 0 === E || E(e);
            },
            te = {};
          return (
            'option' === e.role && (te['aria-selected'] = $),
            c.createElement(
              j,
              (0, r.Z)(
                {
                  ref: z,
                  elementRef: V,
                  role: null === p ? 'none' : p || 'menuitem',
                  tabIndex: m ? null : -1,
                  'data-menu-id': D && w ? null : w,
                },
                C,
                Y,
                te,
                {
                  component: 'li',
                  'aria-disabled': m,
                  style: (0, a.Z)((0, a.Z)({}, H), n),
                  className: f()(
                    A,
                    ((t = {}),
                    (0, o.Z)(t, ''.concat(A, '-active'), W),
                    (0, o.Z)(t, ''.concat(A, '-selected'), $),
                    (0, o.Z)(t, ''.concat(A, '-disabled'), G),
                    t),
                    u,
                  ),
                  onClick: J,
                  onKeyDown: Q,
                  onFocus: ee,
                },
              ),
              v,
              c.createElement(N, {
                props: (0, a.Z)((0, a.Z)({}, e), {}, { isSelected: $ }),
                icon: q,
              }),
            )
          );
        };
      function V(e) {
        var t = e.eventKey,
          n = D(),
          r = O(t);
        return (
          c.useEffect(
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
          n ? null : c.createElement(z, e)
        );
      }
      var G = V,
        U = n(50344);
      function X(e, t) {
        return (0, U.Z)(e).map(function (e, n) {
          if (c.isValidElement(e)) {
            var r,
              o,
              a = e.key,
              u =
                null !==
                  (r =
                    null === (o = e.props) || void 0 === o
                      ? void 0
                      : o.eventKey) && void 0 !== r
                  ? r
                  : a,
              l = null === u || void 0 === u;
            l && (u = 'tmp_key-'.concat([].concat((0, i.Z)(t), [n]).join('-')));
            var s = { key: u, eventKey: u };
            return c.cloneElement(e, s);
          }
          return e;
        });
      }
      function q(e) {
        var t = c.useRef(e);
        t.current = e;
        var n = c.useCallback(function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var B = function (e, t) {
          var n = e.className,
            o = e.children,
            a = (0, l.Z)(e, ['className', 'children']),
            i = c.useContext(R),
            u = i.prefixCls,
            s = i.mode;
          return c.createElement(
            'ul',
            (0, r.Z)(
              {
                className: f()(
                  u,
                  ''.concat(u, '-sub'),
                  ''
                    .concat(u, '-')
                    .concat('inline' === s ? 'inline' : 'vertical'),
                  n,
                ),
              },
              a,
              { 'data-menu-list': !0, ref: t },
            ),
            o,
          );
        },
        W = c.forwardRef(B);
      W.displayName = 'SubMenuList';
      var Y = W,
        $ = n(50106),
        H = n(75164),
        J = { adjustX: 1, adjustY: 1 },
        Q = {
          topLeft: { points: ['bl', 'tl'], overflow: J, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: J, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: J, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: J, offset: [4, 0] },
        },
        ee = {
          topLeft: { points: ['bl', 'tl'], overflow: J, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: J, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: J, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: J, offset: [4, 0] },
        };
      function te(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var ne = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function re(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          i = e.popup,
          l = e.popupClassName,
          s = e.popupOffset,
          m = e.disabled,
          d = e.mode,
          v = e.onVisibleChange,
          p = c.useContext(R),
          g = p.getPopupContainer,
          y = p.rtl,
          h = p.subMenuOpenDelay,
          b = p.subMenuCloseDelay,
          E = p.builtinPlacements,
          Z = p.triggerSubMenuAction,
          C = p.forceSubMenuRender,
          w = p.motion,
          T = p.defaultMotions,
          P = c.useState(!1),
          I = (0, u.Z)(P, 2),
          M = I[0],
          N = I[1],
          F = y ? (0, a.Z)((0, a.Z)({}, ee), E) : (0, a.Z)((0, a.Z)({}, Q), E),
          S = ne[d],
          x = te(d, w, T),
          D = (0, a.Z)(
            (0, a.Z)({}, x),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          k = c.useRef();
        return (
          c.useEffect(
            function () {
              return (
                (k.current = (0, H.Z)(function () {
                  N(n);
                })),
                function () {
                  H.Z.cancel(k.current);
                }
              );
            },
            [n],
          ),
          c.createElement(
            $.Z,
            {
              prefixCls: t,
              popupClassName: f()(
                ''.concat(t, '-popup'),
                (0, o.Z)({}, ''.concat(t, '-rtl'), y),
                l,
              ),
              stretch: 'horizontal' === d ? 'minWidth' : null,
              getPopupContainer: g,
              builtinPlacements: F,
              popupPlacement: S,
              popupVisible: M,
              popup: i,
              popupAlign: s && { offset: s },
              action: m ? [] : [Z],
              mouseEnterDelay: h,
              mouseLeaveDelay: b,
              onPopupVisibleChange: v,
              forceRender: C,
              popupMotion: D,
            },
            r,
          )
        );
      }
      var oe = n(60444);
      function ae(e) {
        var t = e.id,
          n = e.open,
          o = e.keyPath,
          i = e.children,
          l = 'inline',
          s = c.useContext(R),
          f = s.prefixCls,
          m = s.forceSubMenuRender,
          d = s.motion,
          v = s.defaultMotions,
          p = s.mode,
          g = c.useRef(!1);
        g.current = p === l;
        var y = c.useState(!g.current),
          h = (0, u.Z)(y, 2),
          b = h[0],
          E = h[1],
          Z = !!g.current && n;
        c.useEffect(
          function () {
            g.current && E(!1);
          },
          [p],
        );
        var C = (0, a.Z)({}, te(l, d, v));
        o.length > 1 && (C.motionAppear = !1);
        var w = C.onVisibleChanged;
        return (
          (C.onVisibleChanged = function (e) {
            return (
              g.current || e || E(!0),
              null === w || void 0 === w ? void 0 : w(e)
            );
          }),
          b
            ? null
            : c.createElement(
                P,
                { mode: l, locked: !g.current },
                c.createElement(
                  oe.Z,
                  (0, r.Z)({ visible: Z }, C, {
                    forceRender: m,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(f, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return c.createElement(
                      Y,
                      { id: t, className: n, style: r },
                      i,
                    );
                  },
                ),
              )
        );
      }
      var ie = function (e) {
        var t,
          n = e.style,
          i = e.className,
          s = e.title,
          m = e.eventKey,
          d = (e.warnKey, e.disabled),
          v = e.internalPopupClose,
          p = e.children,
          y = e.itemIcon,
          h = e.expandIcon,
          b = e.popupClassName,
          E = e.popupOffset,
          Z = e.onClick,
          C = e.onMouseEnter,
          w = e.onMouseLeave,
          T = e.onTitleClick,
          S = e.onTitleMouseEnter,
          x = e.onTitleMouseLeave,
          D = (0, l.Z)(e, [
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
          k = _(m),
          L = c.useContext(R),
          A = L.prefixCls,
          j = L.mode,
          z = L.openKeys,
          V = L.disabled,
          G = L.overflowDisabled,
          U = L.activeKey,
          X = L.selectedKeys,
          B = L.itemIcon,
          W = L.expandIcon,
          $ = L.onItemClick,
          H = L.onOpenChange,
          J = L.onActive,
          Q = c.useContext(K),
          ee = Q.isSubPathKey,
          te = O(),
          ne = ''.concat(A, '-submenu'),
          oe = V || d,
          ie = c.useRef(),
          ue = c.useRef();
        var le = y || B,
          ce = h || W,
          se = z.includes(m),
          fe = !G && se,
          me = ee(X, m),
          de = I(m, oe, S, x),
          ve = de.active,
          pe = (0, l.Z)(de, ['active']),
          ge = c.useState(!1),
          ye = (0, u.Z)(ge, 2),
          he = ye[0],
          be = ye[1],
          Ee = function (e) {
            oe || be(e);
          },
          Ze = function (e) {
            Ee(!0), null === C || void 0 === C || C({ key: m, domEvent: e });
          },
          Ce = function (e) {
            Ee(!1), null === w || void 0 === w || w({ key: m, domEvent: e });
          },
          we = c.useMemo(
            function () {
              return ve || ('inline' !== j && (he || ee([U], m)));
            },
            [j, ve, U, he, m, ee],
          ),
          Re = F(te.length),
          Te = function (e) {
            oe ||
              (null === T || void 0 === T || T({ key: m, domEvent: e }),
              'inline' === j && H(m, !se));
          },
          Pe = q(function (e) {
            null === Z || void 0 === Z || Z(M(e)), $(e);
          }),
          Ie = function (e) {
            'inline' !== j && H(m, e);
          },
          Me = function () {
            J(m);
          },
          Ne = k && ''.concat(k, '-popup'),
          Fe = c.createElement(
            'div',
            (0, r.Z)(
              {
                role: 'menuitem',
                style: Re,
                className: ''.concat(ne, '-title'),
                tabIndex: oe ? null : -1,
                ref: ie,
                title: 'string' === typeof s ? s : null,
                'data-menu-id': G && k ? null : k,
                'aria-expanded': fe,
                'aria-haspopup': !0,
                'aria-controls': Ne,
                'aria-disabled': oe,
                onClick: Te,
                onFocus: Me,
              },
              pe,
            ),
            s,
            c.createElement(
              N,
              {
                icon: 'horizontal' !== j ? ce : null,
                props: (0, a.Z)(
                  (0, a.Z)({}, e),
                  {},
                  { isOpen: fe, isSubMenu: !0 },
                ),
              },
              c.createElement('i', { className: ''.concat(ne, '-arrow') }),
            ),
          ),
          Se = c.useRef(j);
        if (
          ('inline' !== j && (Se.current = te.length > 1 ? 'vertical' : j), !G)
        ) {
          var xe = Se.current;
          Fe = c.createElement(
            re,
            {
              mode: xe,
              prefixCls: ne,
              visible: !v && fe && 'inline' !== j,
              popupClassName: b,
              popupOffset: E,
              popup: c.createElement(
                P,
                { mode: 'horizontal' === xe ? 'vertical' : xe },
                c.createElement(Y, { id: Ne, ref: ue }, p),
              ),
              disabled: oe,
              onVisibleChange: Ie,
            },
            Fe,
          );
        }
        return c.createElement(
          P,
          {
            onItemClick: Pe,
            mode: 'horizontal' === j ? 'vertical' : j,
            itemIcon: le,
            expandIcon: ce,
          },
          c.createElement(
            g.Z.Item,
            (0, r.Z)({ role: 'none' }, D, {
              component: 'li',
              style: n,
              className: f()(
                ne,
                ''.concat(ne, '-').concat(j),
                i,
                ((t = {}),
                (0, o.Z)(t, ''.concat(ne, '-open'), fe),
                (0, o.Z)(t, ''.concat(ne, '-active'), we),
                (0, o.Z)(t, ''.concat(ne, '-selected'), me),
                (0, o.Z)(t, ''.concat(ne, '-disabled'), oe),
                t),
              ),
              onMouseEnter: Ze,
              onMouseLeave: Ce,
            }),
            Fe,
            !G && c.createElement(ae, { id: Ne, open: fe, keyPath: te }, p),
          ),
        );
      };
      function ue(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          o = O(n),
          a = X(r, o),
          i = D();
        return (
          c.useEffect(
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
          (t = i ? a : c.createElement(ie, e, a)),
          c.createElement(k.Provider, { value: o }, t)
        );
      }
      var le = n(5110);
      function ce(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, le.Z)(e)) {
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
      function se(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, i.Z)(e.querySelectorAll('*')).filter(function (e) {
            return ce(e, t);
          });
        return ce(e, t) && n.unshift(e), n;
      }
      var fe = Z.Z.LEFT,
        me = Z.Z.RIGHT,
        de = Z.Z.UP,
        ve = Z.Z.DOWN,
        pe = Z.Z.ENTER,
        ge = Z.Z.ESC,
        ye = [de, ve, fe, me];
      function he(e, t, n, r) {
        var a,
          i,
          u,
          l,
          c = 'prev',
          s = 'next',
          f = 'children',
          m = 'parent';
        if ('inline' === e && r === pe) return { inlineTrigger: !0 };
        var d = ((a = {}), (0, o.Z)(a, de, c), (0, o.Z)(a, ve, s), a),
          v =
            ((i = {}),
            (0, o.Z)(i, fe, n ? s : c),
            (0, o.Z)(i, me, n ? c : s),
            (0, o.Z)(i, ve, f),
            (0, o.Z)(i, pe, f),
            i),
          p =
            ((u = {}),
            (0, o.Z)(u, de, c),
            (0, o.Z)(u, ve, s),
            (0, o.Z)(u, pe, f),
            (0, o.Z)(u, ge, m),
            (0, o.Z)(u, fe, n ? f : m),
            (0, o.Z)(u, me, n ? m : f),
            u),
          g = {
            inline: d,
            horizontal: v,
            vertical: p,
            inlineSub: d,
            horizontalSub: p,
            verticalSub: p,
          },
          y =
            null === (l = g[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === l
              ? void 0
              : l[r];
        switch (y) {
          case c:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case m:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function be(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Ee(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Ze(e, t) {
        var n = se(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function Ce(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = Ze(e, t),
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
      function we(e, t, n, r, o, a, i, u, l, s) {
        var f = c.useRef(),
          m = c.useRef();
        m.current = t;
        var d = function () {
          H.Z.cancel(f.current);
        };
        return (
          c.useEffect(function () {
            return function () {
              d();
            };
          }, []),
          function (c) {
            var v = c.which;
            if ([].concat(ye, [pe, ge]).includes(v)) {
              var p,
                g,
                y,
                h = function () {
                  (p = new Set()), (g = new Map()), (y = new Map());
                  var e = a();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(A(r, e), "']"),
                      );
                      t && (p.add(t), y.set(t, e), g.set(e, t));
                    }),
                    p
                  );
                };
              h();
              var b = g.get(t),
                E = Ee(b, p),
                Z = y.get(E),
                C = he(e, 1 === i(Z, !0).length, n, v);
              if (!C) return;
              ye.includes(v) && c.preventDefault();
              var w = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var r = y.get(e);
                  u(r),
                    d(),
                    (f.current = (0, H.Z)(function () {
                      m.current === r && t.focus();
                    }));
                }
              };
              if (C.sibling || !E) {
                var R;
                R = E && 'inline' !== e ? be(E) : o.current;
                var T = Ce(R, p, E, C.offset);
                w(T);
              } else if (C.inlineTrigger) l(Z);
              else if (C.offset > 0)
                l(Z, !0),
                  d(),
                  (f.current = (0, H.Z)(function () {
                    h();
                    var e = E.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = Ce(t, p);
                    w(n);
                  }, 5));
              else if (C.offset < 0) {
                var P = i(Z, !0),
                  I = P[P.length - 2],
                  M = g.get(I);
                l(I, !1), w(M);
              }
            }
            null === s || void 0 === s || s(c);
          }
        );
      }
      var Re = Math.random().toFixed(5).toString().slice(2),
        Te = 0;
      function Pe(e) {
        var t = (0, v.Z)(e, { value: e }),
          n = (0, u.Z)(t, 2),
          r = n[0],
          o = n[1];
        return (
          c.useEffect(function () {
            Te += 1;
            var e = ''.concat(Re, '-').concat(Te);
            o('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function Ie(e) {
        Promise.resolve().then(e);
      }
      var Me = '__RC_UTIL_PATH_SPLIT__',
        Ne = function (e) {
          return e.join(Me);
        },
        Fe = function (e) {
          return e.split(Me);
        },
        Se = 'rc-menu-more';
      function xe() {
        var e = c.useState({}),
          t = (0, u.Z)(e, 2),
          n = t[1],
          r = (0, c.useRef)(new Map()),
          o = (0, c.useRef)(new Map()),
          a = c.useState([]),
          l = (0, u.Z)(a, 2),
          s = l[0],
          f = l[1],
          m = (0, c.useRef)(0),
          d = (0, c.useRef)(!1),
          v = function () {
            d.current || n({});
          },
          p = (0, c.useCallback)(function (e, t) {
            var n = Ne(t);
            o.current.set(n, e), r.current.set(e, n), (m.current += 1);
            var a = m.current;
            Ie(function () {
              a === m.current && v();
            });
          }, []),
          g = (0, c.useCallback)(function (e, t) {
            var n = Ne(t);
            o.current.delete(n), r.current.delete(e);
          }, []),
          y = (0, c.useCallback)(function (e) {
            f(e);
          }, []),
          h = (0, c.useCallback)(
            function (e, t) {
              var n = r.current.get(e) || '',
                o = Fe(n);
              return t && s.includes(o[0]) && o.unshift(Se), o;
            },
            [s],
          ),
          b = (0, c.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = h(e, !0);
                return n.includes(t);
              });
            },
            [h],
          ),
          E = function () {
            var e = (0, i.Z)(r.current.keys());
            return s.length && e.push(Se), e;
          },
          Z = (0, c.useCallback)(function (e) {
            var t = ''.concat(r.current.get(e)).concat(Me),
              n = new Set();
            return (
              (0, i.Z)(o.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(o.current.get(e));
              }),
              n
            );
          }, []);
        return (
          c.useEffect(function () {
            return function () {
              d.current = !0;
            };
          }, []),
          {
            registerPath: p,
            unregisterPath: g,
            refreshOverflowKeys: y,
            isSubPathKey: b,
            getKeyPath: h,
            getKeys: E,
            getSubPathKeys: Z,
          }
        );
      }
      var De = [],
        ke = function (e) {
          var t,
            n,
            s = e.prefixCls,
            m = void 0 === s ? 'rc-menu' : s,
            p = e.style,
            y = e.className,
            h = e.tabIndex,
            b = void 0 === h ? 0 : h,
            E = e.children,
            Z = e.direction,
            C = e.id,
            w = e.mode,
            R = void 0 === w ? 'vertical' : w,
            T = e.inlineCollapsed,
            I = e.disabled,
            N = e.disabledOverflow,
            F = e.subMenuOpenDelay,
            S = void 0 === F ? 0.1 : F,
            D = e.subMenuCloseDelay,
            k = void 0 === D ? 0.1 : D,
            O = e.forceSubMenuRender,
            A = e.defaultOpenKeys,
            _ = e.openKeys,
            j = e.activeKey,
            z = e.defaultActiveFirst,
            V = e.selectable,
            U = void 0 === V || V,
            B = e.multiple,
            W = void 0 !== B && B,
            Y = e.defaultSelectedKeys,
            $ = e.selectedKeys,
            H = e.onSelect,
            J = e.onDeselect,
            Q = e.inlineIndent,
            ee = void 0 === Q ? 24 : Q,
            te = e.motion,
            ne = e.defaultMotions,
            re = e.triggerSubMenuAction,
            oe = void 0 === re ? 'hover' : re,
            ae = e.builtinPlacements,
            ie = e.itemIcon,
            le = e.expandIcon,
            ce = e.overflowedIndicator,
            se = void 0 === ce ? '...' : ce,
            fe = e.overflowedIndicatorPopupClassName,
            me = e.getPopupContainer,
            de = e.onClick,
            ve = e.onOpenChange,
            pe = e.onKeyDown,
            ge =
              (e.openAnimation,
              e.openTransitionName,
              (0, l.Z)(e, [
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
            ye = X(E, De),
            he = c.useState(!1),
            be = (0, u.Z)(he, 2),
            Ee = be[0],
            Ze = be[1],
            Ce = c.useRef(),
            Re = Pe(C),
            Te = 'rtl' === Z;
          var Ie = c.useMemo(
              function () {
                return ('inline' !== R && 'vertical' !== R) || !T
                  ? [R, !1]
                  : ['vertical', T];
              },
              [R, T],
            ),
            Me = (0, u.Z)(Ie, 2),
            Ne = Me[0],
            Fe = Me[1],
            ke = c.useState(0),
            Oe = (0, u.Z)(ke, 2),
            Ke = Oe[0],
            Le = Oe[1],
            Ae = Ke >= ye.length - 1 || 'horizontal' !== Ne || N,
            _e = (0, v.Z)(A, {
              value: _,
              postState: function (e) {
                return e || De;
              },
            }),
            je = (0, u.Z)(_e, 2),
            ze = je[0],
            Ve = je[1],
            Ge = function (e) {
              Ve(e), null === ve || void 0 === ve || ve(e);
            },
            Ue = c.useState(ze),
            Xe = (0, u.Z)(Ue, 2),
            qe = Xe[0],
            Be = Xe[1],
            We = 'inline' === Ne,
            Ye = c.useRef(!1);
          c.useEffect(
            function () {
              We && Be(ze);
            },
            [ze],
          ),
            c.useEffect(
              function () {
                Ye.current ? (We ? Ve(qe) : Ge(De)) : (Ye.current = !0);
              },
              [We],
            );
          var $e = xe(),
            He = $e.registerPath,
            Je = $e.unregisterPath,
            Qe = $e.refreshOverflowKeys,
            et = $e.isSubPathKey,
            tt = $e.getKeyPath,
            nt = $e.getKeys,
            rt = $e.getSubPathKeys,
            ot = c.useMemo(
              function () {
                return { registerPath: He, unregisterPath: Je };
              },
              [He, Je],
            ),
            at = c.useMemo(
              function () {
                return { isSubPathKey: et };
              },
              [et],
            );
          c.useEffect(
            function () {
              Qe(
                Ae
                  ? De
                  : ye.slice(Ke + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [Ke, Ae],
          );
          var it = (0, v.Z)(
              j ||
                (z && (null === (t = ye[0]) || void 0 === t ? void 0 : t.key)),
              { value: j },
            ),
            ut = (0, u.Z)(it, 2),
            lt = ut[0],
            ct = ut[1],
            st = q(function (e) {
              ct(e);
            }),
            ft = q(function () {
              ct(void 0);
            }),
            mt = (0, v.Z)(Y || [], {
              value: $,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? De
                  : [e];
              },
            }),
            dt = (0, u.Z)(mt, 2),
            vt = dt[0],
            pt = dt[1],
            gt = function (e) {
              if (U) {
                var t,
                  n = e.key,
                  r = vt.includes(n);
                (t = W
                  ? r
                    ? vt.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, i.Z)(vt), [n])
                  : [n]),
                  pt(t);
                var o = (0, a.Z)((0, a.Z)({}, e), {}, { selectedKeys: t });
                r
                  ? null === J || void 0 === J || J(o)
                  : null === H || void 0 === H || H(o);
              }
              !W && ze.length && 'inline' !== Ne && Ge(De);
            },
            yt = q(function (e) {
              null === de || void 0 === de || de(M(e)), gt(e);
            }),
            ht = q(function (e, t) {
              var n = ze.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Ne) {
                var r = rt(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              d()(ze, n) || Ge(n);
            }),
            bt = q(me),
            Et = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !ze.includes(e);
              ht(e, n);
            },
            Zt = we(Ne, lt, Te, Re, Ce, nt, tt, ct, Et, pe);
          c.useEffect(function () {
            Ze(!0);
          }, []);
          var Ct =
              'horizontal' !== Ne || N
                ? ye
                : ye.map(function (e, t) {
                    return c.createElement(
                      P,
                      { key: e.key, overflowDisabled: t > Ke },
                      e,
                    );
                  }),
            wt = c.createElement(
              g.Z,
              (0, r.Z)(
                {
                  id: C,
                  ref: Ce,
                  prefixCls: ''.concat(m, '-overflow'),
                  component: 'ul',
                  itemComponent: G,
                  className: f()(
                    m,
                    ''.concat(m, '-root'),
                    ''.concat(m, '-').concat(Ne),
                    y,
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(m, '-inline-collapsed'), Fe),
                    (0, o.Z)(n, ''.concat(m, '-rtl'), Te),
                    n),
                  ),
                  dir: Z,
                  style: p,
                  role: 'menu',
                  tabIndex: b,
                  data: Ct,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? ye.slice(-t) : null;
                    return c.createElement(
                      ue,
                      {
                        eventKey: Se,
                        title: se,
                        disabled: Ae,
                        internalPopupClose: 0 === t,
                        popupClassName: fe,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== Ne || N ? g.Z.INVALIDATE : g.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    Le(e);
                  },
                  onKeyDown: Zt,
                },
                ge,
              ),
            );
          return c.createElement(
            L.Provider,
            { value: Re },
            c.createElement(
              P,
              {
                prefixCls: m,
                mode: Ne,
                openKeys: ze,
                rtl: Te,
                disabled: I,
                motion: Ee ? te : null,
                defaultMotions: Ee ? ne : null,
                activeKey: lt,
                onActive: st,
                onInactive: ft,
                selectedKeys: vt,
                inlineIndent: ee,
                subMenuOpenDelay: S,
                subMenuCloseDelay: k,
                forceSubMenuRender: O,
                builtinPlacements: ae,
                triggerSubMenuAction: oe,
                getPopupContainer: bt,
                itemIcon: ie,
                expandIcon: le,
                onItemClick: yt,
                onOpenChange: ht,
              },
              c.createElement(K.Provider, { value: at }, wt),
              c.createElement(
                'div',
                { style: { display: 'none' }, 'aria-hidden': !0 },
                c.createElement(x.Provider, { value: ot }, ye),
              ),
            ),
          );
        },
        Oe = ke,
        Ke = function (e) {
          var t = e.className,
            n = e.title,
            o = (e.eventKey, e.children),
            a = (0, l.Z)(e, ['className', 'title', 'eventKey', 'children']),
            i = c.useContext(R),
            u = i.prefixCls,
            s = ''.concat(u, '-item-group');
          return c.createElement(
            'li',
            (0, r.Z)({}, a, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: f()(s, t),
            }),
            c.createElement(
              'div',
              {
                className: ''.concat(s, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            c.createElement('ul', { className: ''.concat(s, '-list') }, o),
          );
        };
      function Le(e) {
        var t = e.children,
          n = (0, l.Z)(e, ['children']),
          r = O(n.eventKey),
          o = X(t, r),
          a = D();
        return a ? o : c.createElement(Ke, (0, C.Z)(n, ['warnKey']), o);
      }
      function Ae(e) {
        var t = e.className,
          n = e.style,
          r = c.useContext(R),
          o = r.prefixCls,
          a = D();
        return a
          ? null
          : c.createElement('li', {
              className: f()(''.concat(o, '-item-divider'), t),
              style: n,
            });
      }
      var _e = O,
        je = Oe;
      (je.Item = G), (je.SubMenu = ue), (je.ItemGroup = Le), (je.Divider = Ae);
      var ze = je;
    },
    81966: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          FormattedDate: function () {
            return _;
          },
          FormattedDateParts: function () {
            return U;
          },
          FormattedDateTimeRange: function () {
            return K;
          },
          FormattedDisplayName: function () {
            return G;
          },
          FormattedList: function () {
            return V;
          },
          FormattedListParts: function () {
            return f;
          },
          FormattedMessage: function () {
            return k;
          },
          FormattedNumber: function () {
            return z;
          },
          FormattedNumberParts: function () {
            return s;
          },
          FormattedPlural: function () {
            return F;
          },
          FormattedRelativeTime: function () {
            return M;
          },
          FormattedTime: function () {
            return j;
          },
          FormattedTimeParts: function () {
            return X;
          },
          IntlContext: function () {
            return u._y;
          },
          IntlProvider: function () {
            return g.Z;
          },
          InvalidConfigError: function () {
            return p.OV;
          },
          MessageFormatError: function () {
            return p.X9;
          },
          MissingDataError: function () {
            return p.gb;
          },
          MissingTranslationError: function () {
            return p.$6;
          },
          RawIntlProvider: function () {
            return u.zt;
          },
          ReactIntlError: function () {
            return p.Rw;
          },
          ReactIntlErrorCode: function () {
            return p.bc;
          },
          UnsupportedFormatterError: function () {
            return p.wI;
          },
          createIntl: function () {
            return g.d;
          },
          createIntlCache: function () {
            return v.Sn;
          },
          defineMessage: function () {
            return A;
          },
          defineMessages: function () {
            return L;
          },
          injectIntl: function () {
            return u.ZP;
          },
          useIntl: function () {
            return c;
          },
        });
      var r,
        o,
        a = n(70655),
        i = n(67294),
        u = n(74806),
        l = n(680);
      function c() {
        var e = i.useContext(u._y);
        return (0, l.lq)(e), e;
      }
      (function (e) {
        (e['formatDate'] = 'FormattedDate'),
          (e['formatTime'] = 'FormattedTime'),
          (e['formatNumber'] = 'FormattedNumber'),
          (e['formatList'] = 'FormattedList'),
          (e['formatDisplayName'] = 'FormattedDisplayName');
      })(r || (r = {})),
        (function (e) {
          (e['formatDate'] = 'FormattedDateParts'),
            (e['formatTime'] = 'FormattedTimeParts'),
            (e['formatNumber'] = 'FormattedNumberParts'),
            (e['formatList'] = 'FormattedListParts');
        })(o || (o = {}));
      var s = function (e) {
        var t = c(),
          n = e.value,
          r = e.children,
          o = (0, a._T)(e, ['value', 'children']);
        return r(t.formatNumberToParts(n, o));
      };
      s.displayName = 'FormattedNumberParts';
      var f = function (e) {
        var t = c(),
          n = e.value,
          r = e.children,
          o = (0, a._T)(e, ['value', 'children']);
        return r(t.formatListToParts(n, o));
      };
      function m(e) {
        var t = function (t) {
          var n = c(),
            r = t.value,
            o = t.children,
            i = (0, a._T)(t, ['value', 'children']),
            u = 'string' === typeof r ? new Date(r || 0) : r,
            l =
              'formatDate' === e
                ? n.formatDateToParts(u, i)
                : n.formatTimeToParts(u, i);
          return o(l);
        };
        return (t.displayName = o[e]), t;
      }
      function d(e) {
        var t = function (t) {
          var n = c(),
            r = t.value,
            o = t.children,
            u = (0, a._T)(t, ['value', 'children']),
            l = n[e](r, u);
          if ('function' === typeof o) return o(l);
          var s = n.textComponent || i.Fragment;
          return i.createElement(s, null, l);
        };
        return (t.displayName = r[e]), t;
      }
      s.displayName = 'FormattedNumberParts';
      var v = n(82644),
        p = n(88222),
        g = n(29558),
        y = n(25687),
        h = 60,
        b = 3600,
        E = 86400;
      function Z(e) {
        var t = Math.abs(e);
        return t < h ? 'second' : t < b ? 'minute' : t < E ? 'hour' : 'day';
      }
      function C(e) {
        switch (e) {
          case 'second':
            return 1;
          case 'minute':
            return h;
          case 'hour':
            return b;
          default:
            return E;
        }
      }
      function w(e, t) {
        if (!e) return 0;
        switch (t) {
          case 'second':
            return e;
          case 'minute':
            return e * h;
          default:
            return e * b;
        }
      }
      var R = ['second', 'minute', 'hour'];
      function T(e) {
        return void 0 === e && (e = 'second'), R.includes(e);
      }
      var P = function (e) {
          var t = c(),
            n = t.formatRelativeTime,
            r = t.textComponent,
            o = e.children,
            u = e.value,
            l = e.unit,
            s = (0, a._T)(e, ['children', 'value', 'unit']),
            f = n(u || 0, l, s);
          return 'function' === typeof o
            ? o(f)
            : r
            ? i.createElement(r, null, f)
            : i.createElement(i.Fragment, null, f);
        },
        I = function (e) {
          var t = e.value,
            n = e.unit,
            r = e.updateIntervalInSeconds,
            o = (0, a._T)(e, ['value', 'unit', 'updateIntervalInSeconds']);
          (0, y.kG)(
            !r || !(!r || !T(n)),
            'Cannot schedule update with unit longer than hour',
          );
          var u,
            l = i.useState(),
            c = l[0],
            s = l[1],
            f = i.useState(0),
            m = f[0],
            d = f[1],
            v = i.useState(0),
            p = v[0],
            g = v[1];
          (n === c && t === m) || (d(t || 0), s(n), g(T(n) ? w(t, n) : 0)),
            i.useEffect(
              function () {
                function e() {
                  clearTimeout(u);
                }
                if ((e(), !r || !T(n))) return e;
                var t = p - r,
                  o = Z(t);
                if ('day' === o) return e;
                var a = C(o),
                  i = t % a,
                  l = t - i,
                  c = l >= p ? l - a : l,
                  s = Math.abs(c - p);
                return (
                  p !== c &&
                    (u = setTimeout(function () {
                      return g(c);
                    }, 1e3 * s)),
                  e
                );
              },
              [p, r, n],
            );
          var h = t || 0,
            b = n;
          if (T(n) && 'number' === typeof p && r) {
            b = Z(p);
            var E = C(b);
            h = Math.round(p / E);
          }
          return i.createElement(P, (0, a.pi)({ value: h, unit: b }, o));
        };
      (I.displayName = 'FormattedRelativeTime'),
        (I.defaultProps = { value: 0, unit: 'second' });
      var M = I,
        N = function (e) {
          var t = c(),
            n = t.formatPlural,
            r = t.textComponent,
            o = e.value,
            a = e.other,
            u = e.children,
            l = n(o, e),
            s = e[l] || a;
          return 'function' === typeof u
            ? u(s)
            : r
            ? i.createElement(r, null, s)
            : s;
        };
      (N.defaultProps = { type: 'cardinal' }),
        (N.displayName = 'FormattedPlural');
      var F = N;
      function S(e, t) {
        var n = e.values,
          r = (0, a._T)(e, ['values']),
          o = t.values,
          i = (0, a._T)(t, ['values']);
        return (0, l.wU)(o, n) && (0, l.wU)(r, i);
      }
      function x(e) {
        var t = c(),
          n = t.formatMessage,
          r = t.textComponent,
          o = void 0 === r ? i.Fragment : r,
          a = e.id,
          u = e.description,
          l = e.defaultMessage,
          s = e.values,
          f = e.children,
          m = e.tagName,
          d = void 0 === m ? o : m,
          v = e.ignoreTag,
          p = { id: a, description: u, defaultMessage: l },
          g = n(p, s, { ignoreTag: v });
        return (
          Array.isArray(g) || (g = [g]),
          'function' === typeof f
            ? f(g)
            : d
            ? i.createElement(d, null, i.Children.toArray(g))
            : i.createElement(i.Fragment, null, g)
        );
      }
      x.displayName = 'FormattedMessage';
      var D = i.memo(x, S);
      D.displayName = 'MemoizedFormattedMessage';
      var k = D,
        O = function (e) {
          var t = c(),
            n = e.from,
            r = e.to,
            o = e.children,
            u = (0, a._T)(e, ['from', 'to', 'children']),
            l = t.formatDateTimeRange(n, r, u);
          if ('function' === typeof o) return o(l);
          var s = t.textComponent || i.Fragment;
          return i.createElement(s, null, l);
        };
      O.displayName = 'FormattedDateTimeRange';
      var K = O;
      function L(e) {
        return e;
      }
      function A(e) {
        return e;
      }
      var _ = d('formatDate'),
        j = d('formatTime'),
        z = d('formatNumber'),
        V = d('formatList'),
        G = d('formatDisplayName'),
        U = m('formatDate'),
        X = m('formatTime');
    },
    29558: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return B;
        },
        Z: function () {
          return Y;
        },
      });
      var r = n(70655),
        o = n(67294),
        a = n(74806),
        i = n(680),
        u = n(25687),
        l = n(16284),
        c = n(88222),
        s = n(83695);
      function f(e, t) {
        return Object.keys(e).reduce(function (n, o) {
          return (n[o] = (0, r.pi)({ timeZone: t }, e[o])), n;
        }, {});
      }
      function m(e, t) {
        var n = Object.keys((0, r.pi)((0, r.pi)({}, e), t));
        return n.reduce(function (n, o) {
          return (n[o] = (0, r.pi)((0, r.pi)({}, e[o] || {}), t[o] || {})), n;
        }, {});
      }
      function d(e, t) {
        if (!t) return e;
        var n = l.C.formats;
        return (0, r.pi)((0, r.pi)((0, r.pi)({}, n), e), {
          date: m(f(n.date, t), f(e.date || {}, t)),
          time: m(f(n.time, t), f(e.time || {}, t)),
        });
      }
      function v(e, t, n, o, a) {
        var i = e.locale,
          l = e.formats,
          f = e.messages,
          m = e.defaultLocale,
          v = e.defaultFormats,
          p = e.onError,
          g = e.timeZone,
          y = e.defaultRichTextElements;
        void 0 === n && (n = { id: '' });
        var h = n.id,
          b = n.defaultMessage;
        (0, u.kG)(
          !!h,
          '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue',
        );
        var E = String(h),
          Z = f && Object.prototype.hasOwnProperty.call(f, E) && f[E];
        if (Array.isArray(Z) && 1 === Z.length && Z[0].type === s.wD.literal)
          return Z[0].value;
        if (!o && Z && 'string' === typeof Z && !y)
          return Z.replace(/'\{(.*?)\}'/gi, '{$1}');
        if (
          ((o = (0, r.pi)((0, r.pi)({}, y), o || {})),
          (l = d(l, g)),
          (v = d(v, g)),
          !Z)
        ) {
          if (
            ((!b || (i && i.toLowerCase() !== m.toLowerCase())) &&
              p(new c.$6(n, i)),
            b)
          )
            try {
              var C = t.getMessageFormat(b, m, v, a);
              return C.format(o);
            } catch (w) {
              return (
                p(
                  new c.X9(
                    'Error formatting default message for: "' +
                      E +
                      '", rendering default message verbatim',
                    i,
                    n,
                    w,
                  ),
                ),
                'string' === typeof b ? b : E
              );
            }
          return E;
        }
        try {
          C = t.getMessageFormat(
            Z,
            i,
            l,
            (0, r.pi)({ formatters: t }, a || {}),
          );
          return C.format(o);
        } catch (w) {
          p(
            new c.X9(
              'Error formatting message: "' +
                E +
                '", using ' +
                (b ? 'default message' : 'id') +
                ' as fallback.',
              i,
              n,
              w,
            ),
          );
        }
        if (b)
          try {
            C = t.getMessageFormat(b, m, v, a);
            return C.format(o);
          } catch (w) {
            p(
              new c.X9(
                'Error formatting the default message for: "' +
                  E +
                  '", rendering message verbatim',
                i,
                n,
                w,
              ),
            );
          }
        return 'string' === typeof Z ? Z : 'string' === typeof b ? b : E;
      }
      var p = n(82644),
        g = [
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
      function y(e, t, n) {
        var r = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var i = n.format,
          u = (i && (0, p.TB)(o, 'number', i, a)) || {},
          l = (0, p.L6)(n, g, u);
        return t(r, l);
      }
      function h(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return y(e, t, r).format(n);
        } catch (o) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting number.', o));
        }
        return String(n);
      }
      function b(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return y(e, t, r).formatToParts(n);
        } catch (o) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting number.', o));
        }
        return [];
      }
      var E = n(11050),
        Z = ['numeric', 'style'];
      function C(e, t, n) {
        var r = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === n && (n = {});
        var i = n.format,
          u = (!!i && (0, p.TB)(o, 'relative', i, a)) || {},
          l = (0, p.L6)(n, Z, u);
        return t(r, l);
      }
      function w(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = 'second');
        var a = Intl.RelativeTimeFormat;
        a ||
          e.onError(
            new E.u_(
              'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
              E.jK.MISSING_INTL_API,
            ),
          );
        try {
          return C(e, t, o).format(n, r);
        } catch (i) {
          e.onError(new c.X9('Error formatting relative time.', i));
        }
        return String(n);
      }
      var R = [
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
      function T(e, t, n, o) {
        var a = e.locale,
          i = e.formats,
          u = e.onError,
          l = e.timeZone;
        void 0 === o && (o = {});
        var c = o.format,
          s = (0, r.pi)(
            (0, r.pi)({}, l && { timeZone: l }),
            c && (0, p.TB)(i, t, c, u),
          ),
          f = (0, p.L6)(o, R, s);
        return (
          'time' !== t ||
            f.hour ||
            f.minute ||
            f.second ||
            f.timeStyle ||
            f.dateStyle ||
            (f = (0, r.pi)((0, r.pi)({}, f), {
              hour: 'numeric',
              minute: 'numeric',
            })),
          n(a, f)
        );
      }
      function P(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          u = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return T(e, 'date', t, i).format(u);
        } catch (l) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting date.', l));
        }
        return String(u);
      }
      function I(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          u = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return T(e, 'time', t, i).format(u);
        } catch (l) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting time.', l));
        }
        return String(u);
      }
      function M(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = n[2],
          u = void 0 === i ? {} : i,
          l = e.timeZone,
          s = e.locale,
          f = e.onError,
          m = (0, p.L6)(u, R, l ? { timeZone: l } : {});
        try {
          return t(s, m).formatRange(o, a);
        } catch (d) {
          f(
            new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting date time range.', d),
          );
        }
        return String(o);
      }
      function N(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          u = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return T(e, 'date', t, i).formatToParts(u);
        } catch (l) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting date.', l));
        }
        return [];
      }
      function F(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var o = n[0],
          a = n[1],
          i = void 0 === a ? {} : a,
          u = 'string' === typeof o ? new Date(o || 0) : o;
        try {
          return T(e, 'time', t, i).formatToParts(u);
        } catch (l) {
          e.onError(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting time.', l));
        }
        return [];
      }
      var S = ['localeMatcher', 'type'];
      function x(e, t, n, r) {
        var o = e.locale,
          a = e.onError;
        void 0 === r && (r = {}),
          Intl.PluralRules ||
            a(
              new E.u_(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                E.jK.MISSING_INTL_API,
              ),
            );
        var i = (0, p.L6)(r, S);
        try {
          return t(o, i).select(n);
        } catch (u) {
          a(new c.X9('Error formatting plural.', u));
        }
        return 'other';
      }
      var D = ['localeMatcher', 'type', 'style'],
        k = Date.now();
      function O(e) {
        return k + '_' + e + '_' + k;
      }
      function K(e, t, n, r) {
        void 0 === r && (r = {});
        var o = L(e, t, n, r).reduce(function (e, t) {
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
      function L(e, t, n, o) {
        var a = e.locale,
          i = e.onError;
        void 0 === o && (o = {});
        var u = Intl.ListFormat;
        u ||
          i(
            new E.u_(
              'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
              E.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, p.L6)(o, D);
        try {
          var s = {},
            f = n.map(function (e, t) {
              if ('object' === typeof e) {
                var n = O(t);
                return (s[n] = e), n;
              }
              return String(e);
            });
          return t(a, l)
            .formatToParts(f)
            .map(function (e) {
              return 'literal' === e.type
                ? e
                : (0, r.pi)((0, r.pi)({}, e), { value: s[e.value] || e.value });
            });
        } catch (m) {
          i(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting list.', m));
        }
        return n;
      }
      var A = ['localeMatcher', 'style', 'type', 'fallback'];
      function _(e, t, n, r) {
        var o = e.locale,
          a = e.onError,
          i = Intl.DisplayNames;
        i ||
          a(
            new E.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              E.jK.MISSING_INTL_API,
            ),
          );
        var u = (0, p.L6)(r, A);
        try {
          return t(o, u).of(n);
        } catch (l) {
          a(new c.Rw(c.bc.FORMAT_ERROR, 'Error formatting display name.', l));
        }
      }
      function j(e) {
        var t = e ? e[Object.keys(e)[0]] : void 0;
        return 'string' === typeof t;
      }
      function z(e) {
        e.defaultRichTextElements &&
          j(e.messages || {}) &&
          console.warn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
          );
      }
      function V(e, t) {
        var n = (0, p.ax)(t),
          o = (0, r.pi)((0, r.pi)({}, p.Z0), e),
          a = o.locale,
          i = o.defaultLocale,
          u = o.onError;
        return (
          a
            ? !Intl.NumberFormat.supportedLocalesOf(a).length && u
              ? u(
                  new c.gb(
                    'Missing locale data for locale: "' +
                      a +
                      '" in Intl.NumberFormat. Using default locale: "' +
                      i +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                  ),
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(a).length &&
                u &&
                u(
                  new c.gb(
                    'Missing locale data for locale: "' +
                      a +
                      '" in Intl.DateTimeFormat. Using default locale: "' +
                      i +
                      '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                  ),
                )
            : (u &&
                u(
                  new c.OV(
                    '"locale" was not configured, using "' +
                      i +
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                  ),
                ),
              (o.locale = o.defaultLocale || 'en')),
          z(o),
          (0, r.pi)((0, r.pi)({}, o), {
            formatters: n,
            formatNumber: h.bind(null, o, n.getNumberFormat),
            formatNumberToParts: b.bind(null, o, n.getNumberFormat),
            formatRelativeTime: w.bind(null, o, n.getRelativeTimeFormat),
            formatDate: P.bind(null, o, n.getDateTimeFormat),
            formatDateToParts: N.bind(null, o, n.getDateTimeFormat),
            formatTime: I.bind(null, o, n.getDateTimeFormat),
            formatDateTimeRange: M.bind(null, o, n.getDateTimeFormat),
            formatTimeToParts: F.bind(null, o, n.getDateTimeFormat),
            formatPlural: x.bind(null, o, n.getPluralRules),
            formatMessage: v.bind(null, o, n),
            formatList: K.bind(null, o, n.getListFormat),
            formatListToParts: L.bind(null, o, n.getListFormat),
            formatDisplayName: _.bind(null, o, n.getDisplayNames),
          })
        );
      }
      var G = n(61092);
      function U(e) {
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
      function X(e) {
        return e
          ? Object.keys(e).reduce(function (t, n) {
              var r = e[n];
              return (t[n] = (0, G.Gt)(r) ? (0, i.dt)(r) : r), t;
            }, {})
          : e;
      }
      var q = function (e, t, n, a) {
          for (var i = [], u = 4; u < arguments.length; u++)
            i[u - 4] = arguments[u];
          var l = X(a),
            c = v.apply(void 0, (0, r.ev)([e, t, n, l], i));
          return Array.isArray(c) ? o.Children.toArray(c) : c;
        },
        B = function (e, t) {
          var n = e.defaultRichTextElements,
            o = (0, r._T)(e, ['defaultRichTextElements']),
            a = X(n),
            u = V(
              (0, r.pi)((0, r.pi)((0, r.pi)({}, i.Z0), o), {
                defaultRichTextElements: a,
              }),
              t,
            );
          return (0, r.pi)((0, r.pi)({}, u), {
            formatMessage: q.bind(
              null,
              {
                locale: u.locale,
                timeZone: u.timeZone,
                formats: u.formats,
                defaultLocale: u.defaultLocale,
                defaultFormats: u.defaultFormats,
                messages: u.messages,
                onError: u.onError,
                defaultRichTextElements: a,
              },
              u.formatters,
            ),
          });
        },
        W = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.cache = (0, p.Sn)()),
              (t.state = {
                cache: t.cache,
                intl: B(U(t.props), t.cache),
                prevConfig: U(t.props),
              }),
              t
            );
          }
          return (
            (0, r.ZT)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = t.prevConfig,
                r = t.cache,
                o = U(e);
              return (0, i.wU)(n, o) ? null : { intl: B(o, r), prevConfig: o };
            }),
            (t.prototype.render = function () {
              return (
                (0, i.lq)(this.state.intl),
                o.createElement(
                  a.zt,
                  { value: this.state.intl },
                  this.props.children,
                )
              );
            }),
            (t.displayName = 'IntlProvider'),
            (t.defaultProps = i.Z0),
            t
          );
        })(o.PureComponent),
        Y = W;
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
          var u = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < a.length;
          l++
        ) {
          var c = a[l];
          if (!u(c)) return !1;
          var s = e[c],
            f = t[c];
          if (
            ((o = n ? n.call(r, s, f, c) : void 0),
            !1 === o || (void 0 === o && s !== f))
          )
            return !1;
        }
        return !0;
      };
    },
  },
]);
