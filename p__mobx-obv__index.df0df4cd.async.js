(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [988],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    17382: function (e) {
      e.exports = { flex: 'flex___3-hlV' };
    },
    43096: function () {},
    43786: function (e, n, r) {
      'use strict';
      r.d(n, {
        JO: function () {
          return l;
        },
        he: function () {
          return g;
        },
        gb: function () {
          return a.Z;
        },
      });
      var t = r(45976),
        i = r(85893),
        o = (0, t.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        c = (e) => {
          var n = {};
          return (
            e.size && (n.fontSize = e.size),
            e.color && (n.color = e.color),
            (0, i.jsx)(o, { type: 'icon-'.concat(e.type), style: n })
          );
        },
        l = c,
        a = r(57136),
        s = r(94184),
        u = r.n(s),
        d = r(98085),
        p = r.n(d),
        f = (e) => {
          var n = e.json;
          if (!n)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var r = u()(p()['json-viewer'], 'jyjin');
          return (0, i.jsx)('pre', {
            className: r,
            children: JSON.stringify(n, null, 2),
          });
        },
        g = f,
        m = r(66934),
        v = r(45697),
        h = r.n(v),
        x = r(22677),
        y = r.n(x),
        j = () => {},
        D = (e) => {
          e.name;
          var n = e.key,
            r = e.isDragging,
            t = e.connectDragSource,
            o = (e.element, r ? 0.4 : 1),
            c = u()(y().tag);
          return t(
            (0, i.jsx)(
              'div',
              { className: c, style: { opacity: o }, children: e.children },
              n,
            ),
          );
        },
        S = (e) => {
          var n = 'box',
            r = {
              beginDrag: e.begin,
              endDrag: e.end || j,
              canDrag: e.canDrag || j,
              isDragging: e.isDragging || j,
            },
            t = (e, n) => ({
              connectDragSource: e.dragSource(),
              isDragging: n.isDragging(),
            });
          return (0, m.E)(n, r, t)(D);
        };
      S.prototype = {
        begin: h().func.isRequired,
        end: h().func,
        canDrag: h().func,
        isDragging: h().func,
        element: h().element,
      };
      var Z = r(71810),
        w = (e) => {
          e.canDrop;
          var n = e.isOver,
            r = (e.allowedDropEffect, e.connectDropTarget),
            t = e.element;
          console.log('isOVer == ', n);
          var o = u()({ [y()['drag-to']]: n });
          return r((0, i.jsx)('div', { className: o, children: t }));
        },
        b = (e) => {
          var n = 'box',
            r = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            t = (e, n) => ({
              connectDropTarget: e.dropTarget(),
              isOver: n.isOver(),
              canDrop: n.canDrop(),
            });
          return (0, Z.G)(n, r, t)((0, i.jsx)(w, { element: e.element }));
        };
      b.prototype = {
        drop: h().func.isRequired,
        hover: h().func,
        canDrag: h().func,
      };
    },
    87031: function (e, n, r) {
      'use strict';
      r.r(n);
      r(57663);
      var t = r(60404),
        i = (r(49111), r(19650)),
        o = (r(67294), r(12938)),
        c = r(29323),
        l = r(68949),
        a = r(74806),
        s = r(43786),
        u = (r(17382), r(85893)),
        d = (e) => {
          function n() {
            var n = e.lcStore.sections[e.lcStore.sections.length - 1].id + 1;
            e.lcStore.addSection({
              id: n,
              name: '\u533a\u57df'.concat(n),
              cols: 1,
              fields: [],
            });
          }
          return (
            console.log(
              '\u6d4b\u8bd5\u6ce8\u5165\u7684store == ',
              (0, l.ZN)(e.lcStore),
            ),
            console.log(
              '\u6d4b\u8bd5\u6ce8\u5165\u7684\u5176\u4ed6\u6570\u636eglobal,intls == ',
              (0, l.ZN)(e),
            ),
            (0, u.jsxs)('div', {
              children: [
                (0, u.jsx)('h1', {
                  children:
                    'Observer\u6807\u7b7e\u5c40\u90e8\u76d1\u542c\u63a7\u5236',
                }),
                (0, u.jsxs)(i.Z, {
                  children: [
                    (0, u.jsx)('span', {
                      children: 'Store\u7684section\u6761\u6570\u4e3a\uff1a',
                    }),
                    e.lcStore.sections.length,
                  ],
                }),
                (0, u.jsxs)(i.Z, {
                  style: { width: '100%' },
                  children: [
                    (0, u.jsx)('span', {
                      children:
                        '\u70b9\u6211\u589e\u52a0section\uff0csection\u6570\u636e\u9875\u9762\u4f1a\u66f4\u65b0\uff0c\u4f46\u662f\u6761\u6570\u4e0d\u66f4\u65b0',
                    }),
                    (0, u.jsx)(t.Z, {
                      type: 'primary',
                      onClick: n,
                      children: '\u6dfb\u52a0\u533a\u57df',
                    }),
                  ],
                }),
                (0, u.jsx)(o.Qj, {
                  children: () =>
                    (0, u.jsx)(s.he, { json: e.lcStore.sections }),
                }),
              ],
            })
          );
        };
      n['default'] = (0, c.f3)('global', 'intls', 'lcStore')((0, a.ZP)(d));
    },
    33732: function (e, n, r) {
      'use strict';
      r.d(n, {
        Z: function () {
          return s;
        },
      });
      var t,
        i = r(28481),
        o = r(67294),
        c = r(98924),
        l = function () {
          return (0, c.Z)() && window.document.documentElement;
        },
        a = function () {
          if (!l()) return !1;
          if (void 0 !== t) return t;
          var e = document.createElement('div');
          return (
            (e.style.display = 'flex'),
            (e.style.flexDirection = 'column'),
            (e.style.rowGap = '1px'),
            e.appendChild(document.createElement('div')),
            e.appendChild(document.createElement('div')),
            document.body.appendChild(e),
            (t = 1 === e.scrollHeight),
            document.body.removeChild(e),
            t
          );
        },
        s = function () {
          var e = o.useState(!1),
            n = (0, i.Z)(e, 2),
            r = n[0],
            t = n[1];
          return (
            o.useEffect(function () {
              t(a());
            }, []),
            r
          );
        };
    },
    19650: function (e, n, r) {
      'use strict';
      r.d(n, {
        u: function () {
          return g;
        },
        Z: function () {
          return x;
        },
      });
      var t = r(22122),
        i = r(96156),
        o = r(28481),
        c = r(67294),
        l = r(94184),
        a = r.n(l),
        s = r(50344),
        u = r(86032);
      function d(e) {
        var n = e.className,
          r = e.direction,
          o = e.index,
          l = e.marginDirection,
          a = e.children,
          s = e.split,
          u = e.wrap,
          d = c.useContext(g),
          p = d.horizontalSize,
          f = d.verticalSize,
          m = d.latestIndex,
          v = d.supportFlexGap,
          h = {};
        return (
          v ||
            ('vertical' === r
              ? o < m && (h = { marginBottom: p / (s ? 2 : 1) })
              : (h = (0, t.Z)(
                  (0, t.Z)({}, o < m && (0, i.Z)({}, l, p / (s ? 2 : 1))),
                  u && { paddingBottom: f },
                ))),
          null === a || void 0 === a
            ? null
            : c.createElement(
                c.Fragment,
                null,
                c.createElement('div', { className: n, style: h }, a),
                o < m &&
                  s &&
                  c.createElement(
                    'span',
                    { className: ''.concat(n, '-split'), style: h },
                    s,
                  ),
              )
        );
      }
      var p = r(33732),
        f = function (e, n) {
          var r = {};
          for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) &&
              n.indexOf(t) < 0 &&
              (r[t] = e[t]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (t = Object.getOwnPropertySymbols(e); i < t.length; i++)
              n.indexOf(t[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, t[i]) &&
                (r[t[i]] = e[t[i]]);
          }
          return r;
        },
        g = c.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        m = { small: 8, middle: 16, large: 24 };
      function v(e) {
        return 'string' === typeof e ? m[e] : e || 0;
      }
      var h = function (e) {
          var n,
            r = c.useContext(u.E_),
            l = r.getPrefixCls,
            m = r.space,
            h = r.direction,
            x = e.size,
            y =
              void 0 === x
                ? (null === m || void 0 === m ? void 0 : m.size) || 'small'
                : x,
            j = e.align,
            D = e.className,
            S = e.children,
            Z = e.direction,
            w = void 0 === Z ? 'horizontal' : Z,
            b = e.prefixCls,
            z = e.split,
            E = e.style,
            O = e.wrap,
            N = void 0 !== O && O,
            C = f(e, [
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
            _ = (0, p.Z)(),
            k = c.useMemo(
              function () {
                return (Array.isArray(y) ? y : [y, y]).map(function (e) {
                  return v(e);
                });
              },
              [y],
            ),
            G = (0, o.Z)(k, 2),
            P = G[0],
            B = G[1],
            F = (0, s.Z)(S, { keepEmpty: !0 }),
            I = void 0 === j && 'horizontal' === w ? 'center' : j,
            J = l('space', b),
            R = a()(
              J,
              ''.concat(J, '-').concat(w),
              ((n = {}),
              (0, i.Z)(n, ''.concat(J, '-rtl'), 'rtl' === h),
              (0, i.Z)(n, ''.concat(J, '-align-').concat(I), I),
              n),
              D,
            ),
            T = ''.concat(J, '-item'),
            V = 'rtl' === h ? 'marginLeft' : 'marginRight',
            q = 0,
            A = F.map(function (e, n) {
              return (
                null !== e && void 0 !== e && (q = n),
                c.createElement(
                  d,
                  {
                    className: T,
                    key: ''.concat(T, '-').concat(n),
                    direction: w,
                    index: n,
                    marginDirection: V,
                    split: z,
                    wrap: N,
                  },
                  e,
                )
              );
            }),
            M = c.useMemo(
              function () {
                return {
                  horizontalSize: P,
                  verticalSize: B,
                  latestIndex: q,
                  supportFlexGap: _,
                };
              },
              [P, B, q, _],
            );
          if (0 === F.length) return null;
          var U = {};
          return (
            N && ((U.flexWrap = 'wrap'), _ || (U.marginBottom = -B)),
            _ && ((U.columnGap = P), (U.rowGap = B)),
            c.createElement(
              'div',
              (0, t.Z)(
                { className: R, style: (0, t.Z)((0, t.Z)({}, U), E) },
                C,
              ),
              c.createElement(g.Provider, { value: M }, A),
            )
          );
        },
        x = h;
    },
    49111: function (e, n, r) {
      'use strict';
      r(61052), r(43096);
    },
  },
]);
