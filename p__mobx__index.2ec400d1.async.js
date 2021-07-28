(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [803],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    7989: function (e) {
      e.exports = { flex: 'flex___BPOCQ' };
    },
    43096: function () {},
    43786: function (e, n, r) {
      'use strict';
      r.d(n, {
        JO: function () {
          return a;
        },
        he: function () {
          return g;
        },
        gb: function () {
          return l.Z;
        },
      });
      var t = r(45976),
        o = r(85893),
        i = (0, t.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        c = (e) => {
          var n = {};
          return (
            e.size && (n.fontSize = e.size),
            e.color && (n.color = e.color),
            (0, o.jsx)(i, { type: 'icon-'.concat(e.type), style: n })
          );
        },
        a = c,
        l = r(57136),
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
          return (0, o.jsx)('pre', {
            className: r,
            children: JSON.stringify(n, null, 2),
          });
        },
        g = f,
        m = r(66934),
        v = r(45697),
        x = r.n(v),
        y = r(22677),
        h = r.n(y),
        D = () => {},
        j = (e) => {
          e.name;
          var n = e.key,
            r = e.isDragging,
            t = e.connectDragSource,
            i = (e.element, r ? 0.4 : 1),
            c = u()(h().tag);
          return t(
            (0, o.jsx)(
              'div',
              { className: c, style: { opacity: i }, children: e.children },
              n,
            ),
          );
        },
        Z = (e) => {
          var n = 'box',
            r = {
              beginDrag: e.begin,
              endDrag: e.end || D,
              canDrag: e.canDrag || D,
              isDragging: e.isDragging || D,
            },
            t = (e, n) => ({
              connectDragSource: e.dragSource(),
              isDragging: n.isDragging(),
            });
          return (0, m.E)(n, r, t)(j);
        };
      Z.prototype = {
        begin: x().func.isRequired,
        end: x().func,
        canDrag: x().func,
        isDragging: x().func,
        element: x().element,
      };
      var w = r(71810),
        S = (e) => {
          e.canDrop;
          var n = e.isOver,
            r = (e.allowedDropEffect, e.connectDropTarget),
            t = e.element;
          console.log('isOVer == ', n);
          var i = u()({ [h()['drag-to']]: n });
          return r((0, o.jsx)('div', { className: i, children: t }));
        },
        b = (e) => {
          var n = 'box',
            r = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            t = (e, n) => ({
              connectDropTarget: e.dropTarget(),
              isOver: n.isOver(),
              canDrop: n.canDrop(),
            });
          return (0, w.G)(n, r, t)((0, o.jsx)(S, { element: e.element }));
        };
      b.prototype = {
        drop: x().func.isRequired,
        hover: x().func,
        canDrag: x().func,
      };
    },
    47266: function (e, n, r) {
      'use strict';
      r.r(n);
      r(49111);
      var t = r(19650),
        o = (r(57663), r(60404)),
        i = r(29323),
        c = r(68949),
        a = r(74806),
        l = r(43786),
        s = (r(7989), r(85893)),
        u = (0, i.Pi)((e) => {
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
              (0, c.ZN)(e.lcStore),
            ),
            console.log(
              '\u6d4b\u8bd5\u6ce8\u5165\u7684\u5176\u4ed6\u6570\u636eglobal,intls == ',
              (0, c.ZN)(e),
            ),
            (0, s.jsxs)(t.Z, {
              direction: 'vertical',
              style: { width: '100%' },
              children: [
                (0, s.jsx)('h1', {
                  children: 'React Hook\u6ce8\u89e3\u65b9\u5f0f',
                }),
                (0, s.jsxs)(t.Z, {
                  children: [
                    '\u70b9\u51fb\u540e\u4f1a\u968f\u7740mobx\u6570\u636e\u6539\u53d8\uff0c\u9875\u9762\u66f4\u65b0',
                    (0, s.jsx)(o.Z, {
                      type: 'primary',
                      onClick: n,
                      children: '\u6dfb\u52a0\u533a\u57df',
                    }),
                  ],
                }),
                (0, s.jsx)(l.he, { json: e.lcStore.sections }),
              ],
            })
          );
        });
      n['default'] = (0, i.f3)('global', 'intls', 'lcStore')((0, a.ZP)(u));
    },
    33732: function (e, n, r) {
      'use strict';
      r.d(n, {
        Z: function () {
          return s;
        },
      });
      var t,
        o = r(28481),
        i = r(67294),
        c = r(98924),
        a = function () {
          return (0, c.Z)() && window.document.documentElement;
        },
        l = function () {
          if (!a()) return !1;
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
          var e = i.useState(!1),
            n = (0, o.Z)(e, 2),
            r = n[0],
            t = n[1];
          return (
            i.useEffect(function () {
              t(l());
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
          return y;
        },
      });
      var t = r(22122),
        o = r(96156),
        i = r(28481),
        c = r(67294),
        a = r(94184),
        l = r.n(a),
        s = r(50344),
        u = r(86032);
      function d(e) {
        var n = e.className,
          r = e.direction,
          i = e.index,
          a = e.marginDirection,
          l = e.children,
          s = e.split,
          u = e.wrap,
          d = c.useContext(g),
          p = d.horizontalSize,
          f = d.verticalSize,
          m = d.latestIndex,
          v = d.supportFlexGap,
          x = {};
        return (
          v ||
            ('vertical' === r
              ? i < m && (x = { marginBottom: p / (s ? 2 : 1) })
              : (x = (0, t.Z)(
                  (0, t.Z)({}, i < m && (0, o.Z)({}, a, p / (s ? 2 : 1))),
                  u && { paddingBottom: f },
                ))),
          null === l || void 0 === l
            ? null
            : c.createElement(
                c.Fragment,
                null,
                c.createElement('div', { className: n, style: x }, l),
                i < m &&
                  s &&
                  c.createElement(
                    'span',
                    { className: ''.concat(n, '-split'), style: x },
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
            var o = 0;
            for (t = Object.getOwnPropertySymbols(e); o < t.length; o++)
              n.indexOf(t[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, t[o]) &&
                (r[t[o]] = e[t[o]]);
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
      var x = function (e) {
          var n,
            r = c.useContext(u.E_),
            a = r.getPrefixCls,
            m = r.space,
            x = r.direction,
            y = e.size,
            h =
              void 0 === y
                ? (null === m || void 0 === m ? void 0 : m.size) || 'small'
                : y,
            D = e.align,
            j = e.className,
            Z = e.children,
            w = e.direction,
            S = void 0 === w ? 'horizontal' : w,
            b = e.prefixCls,
            z = e.split,
            E = e.style,
            O = e.wrap,
            C = void 0 !== O && O,
            N = f(e, [
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
                return (Array.isArray(h) ? h : [h, h]).map(function (e) {
                  return v(e);
                });
              },
              [h],
            ),
            P = (0, i.Z)(k, 2),
            G = P[0],
            B = P[1],
            F = (0, s.Z)(Z, { keepEmpty: !0 }),
            I = void 0 === D && 'horizontal' === S ? 'center' : D,
            R = a('space', b),
            J = l()(
              R,
              ''.concat(R, '-').concat(S),
              ((n = {}),
              (0, o.Z)(n, ''.concat(R, '-rtl'), 'rtl' === x),
              (0, o.Z)(n, ''.concat(R, '-align-').concat(I), I),
              n),
              j,
            ),
            T = ''.concat(R, '-item'),
            q = 'rtl' === x ? 'marginLeft' : 'marginRight',
            A = 0,
            H = F.map(function (e, n) {
              return (
                null !== e && void 0 !== e && (A = n),
                c.createElement(
                  d,
                  {
                    className: T,
                    key: ''.concat(T, '-').concat(n),
                    direction: S,
                    index: n,
                    marginDirection: q,
                    split: z,
                    wrap: C,
                  },
                  e,
                )
              );
            }),
            M = c.useMemo(
              function () {
                return {
                  horizontalSize: G,
                  verticalSize: B,
                  latestIndex: A,
                  supportFlexGap: _,
                };
              },
              [G, B, A, _],
            );
          if (0 === F.length) return null;
          var U = {};
          return (
            C && ((U.flexWrap = 'wrap'), _ || (U.marginBottom = -B)),
            _ && ((U.columnGap = G), (U.rowGap = B)),
            c.createElement(
              'div',
              (0, t.Z)(
                { className: J, style: (0, t.Z)((0, t.Z)({}, U), E) },
                N,
              ),
              c.createElement(g.Provider, { value: M }, H),
            )
          );
        },
        y = x;
    },
    49111: function (e, n, r) {
      'use strict';
      r(61052), r(43096);
    },
  },
]);
