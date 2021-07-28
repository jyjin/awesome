(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [717],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    44194: function (e) {
      e.exports = { flex: 'flex___3vD1S', content: 'content___2QN8t' };
    },
    67754: function () {},
    49781: function () {},
    43095: function (e, t) {
      'use strict';
      t['Z'] = [
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
              icon: 'font-colors',
            },
            {
              id: 12,
              path: '/home',
              name: 'react-intl \u6807\u7b7e\u7528\u6cd5',
              icon: 'font-colors',
            },
            {
              id: 13,
              path: '/content-download',
              name: '\u6d4b\u8bd5content download',
              icon: 'download',
            },
            {
              id: 14,
              path: '/ggeditor',
              name: '\u6d4b\u8bd5ggeditor',
              icon: 'cluster',
            },
            { id: 15, path: '/inject', name: 'hook inject', icon: 'trophy' },
          ],
        },
        {
          id: 2,
          path: '/lowcode',
          name: 'Low Code',
          icon: 'code',
          children: [
            { id: 21, path: '/lowcode', name: 'Low Code', icon: 'code' },
          ],
        },
        {
          id: 3,
          path: '/mobx',
          name: 'mobx-react',
          icon: 'appstore',
          children: [
            {
              id: 31,
              path: '/mobx',
              name: 'Mobx\u793a\u4f8bHook',
              icon: 'smile',
            },
            {
              id: 32,
              path: '/mobx-class',
              name: 'Mobx\u793a\u4f8b\u6ce8\u89e3',
              icon: 'meh',
            },
            {
              id: 33,
              path: '/mobx-obv',
              name: 'Mobx\u793a\u4f8bObserver',
              icon: 'filesync',
            },
          ],
        },
        {
          id: 4,
          path: '/dnd-sort',
          name: 'React Dnd',
          icon: 'drag',
          children: [
            {
              id: 41,
              path: '/dnd-sort',
              name: '\u62d6\u62fd\u6392\u5e8f react-dnd',
              icon: 'database',
            },
            {
              id: 43,
              path: '/react-sortable',
              name: '\u62d6\u62fd\u6392\u5e8f react-sortable',
              icon: 'database',
            },
            {
              id: 44,
              path: '/react-sortjs',
              name: '\u62d6\u62fd\u6392\u5e8f react-sortablejs',
              icon: 'database',
            },
          ],
        },
        {
          id: 5,
          path: '/hook',
          name: 'React Hook',
          icon: 'trademark',
          children: [
            {
              id: 51,
              path: '/context',
              name: 'React hook context\u4f7f\u7528',
              icon: 'trademark',
            },
          ],
        },
      ];
    },
    43786: function (e, t, n) {
      'use strict';
      n.d(t, {
        JO: function () {
          return l;
        },
        he: function () {
          return m;
        },
        gb: function () {
          return s.Z;
        },
      });
      var o = n(45976),
        r = n(85893),
        i = (0, o.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        a = (e) => {
          var t = {};
          return (
            e.size && (t.fontSize = e.size),
            e.color && (t.color = e.color),
            (0, r.jsx)(i, { type: 'icon-'.concat(e.type), style: t })
          );
        },
        l = a,
        s = n(57136),
        c = n(94184),
        f = n.n(c),
        p = n(98085),
        u = n.n(p),
        d = (e) => {
          var t = e.json;
          if (!t)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = f()(u()['json-viewer'], 'jyjin');
          return (0, r.jsx)('pre', {
            className: n,
            children: JSON.stringify(t, null, 2),
          });
        },
        m = d,
        v = n(66934),
        h = n(45697),
        g = n.n(h),
        y = n(22677),
        b = n.n(y),
        C = () => {},
        x = (e) => {
          e.name;
          var t = e.key,
            n = e.isDragging,
            o = e.connectDragSource,
            i = (e.element, n ? 0.4 : 1),
            a = f()(b().tag);
          return o(
            (0, r.jsx)(
              'div',
              { className: a, style: { opacity: i }, children: e.children },
              t,
            ),
          );
        },
        w = (e) => {
          var t = 'box',
            n = {
              beginDrag: e.begin,
              endDrag: e.end || C,
              canDrag: e.canDrag || C,
              isDragging: e.isDragging || C,
            },
            o = (e, t) => ({
              connectDragSource: e.dragSource(),
              isDragging: t.isDragging(),
            });
          return (0, v.E)(t, n, o)(x);
        };
      w.prototype = {
        begin: g().func.isRequired,
        end: g().func,
        canDrag: g().func,
        isDragging: g().func,
        element: g().element,
      };
      var Z = n(71810),
        O = (e) => {
          e.canDrop;
          var t = e.isOver,
            n = (e.allowedDropEffect, e.connectDropTarget),
            o = e.element;
          console.log('isOVer == ', t);
          var i = f()({ [b()['drag-to']]: t });
          return n((0, r.jsx)('div', { className: i, children: o }));
        },
        j = (e) => {
          var t = 'box',
            n = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            o = (e, t) => ({
              connectDropTarget: e.dropTarget(),
              isOver: t.isOver(),
              canDrop: t.canDrop(),
            });
          return (0, Z.G)(t, n, o)((0, r.jsx)(O, { element: e.element }));
        };
      j.prototype = {
        drop: g().func.isRequired,
        hover: g().func,
        canDrag: g().func,
      };
    },
    59957: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return Xe;
          },
        });
      var o = n(13887),
        r = (n(24793), n(97183)),
        i = n(29323),
        a = n(81966),
        l = n(29558),
        s = n(18221),
        c = (n(20228), n(11382)),
        f = (n(61052), n(67754), n(49781), n(22122)),
        p = n(6610),
        u = n(5991),
        d = n(10379),
        m = n(54070),
        v = n(67294),
        h = n(10985),
        g = n(94184),
        y = n.n(g),
        b = n(98423),
        C = n(44545),
        x = (0, v.createContext)({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        w = x,
        Z = n(96159);
      function O(e) {
        var t,
          n,
          o = e.popupClassName,
          r = e.icon,
          i = e.title,
          a = v.useContext(w),
          l = a.prefixCls,
          s = a.inlineCollapsed,
          c = a.antdMenuTheme,
          p = (0, h.Xl)();
        if (r) {
          var u = (0, Z.l$)(i) && 'span' === i.type;
          n = v.createElement(
            v.Fragment,
            null,
            (0, Z.Tm)(r, {
              className: y()(
                (0, Z.l$)(r)
                  ? null === (t = r.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                ''.concat(l, '-item-icon'),
              ),
            }),
            u
              ? i
              : v.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  i,
                ),
          );
        } else
          n =
            s && !p.length && i && 'string' === typeof i
              ? v.createElement(
                  'div',
                  { className: ''.concat(l, '-inline-collapsed-noicon') },
                  i.charAt(0),
                )
              : v.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  i,
                );
        return v.createElement(
          w.Provider,
          { value: (0, f.Z)((0, f.Z)({}, a), { firstLevel: !1 }) },
          v.createElement(
            h.Wd,
            (0, f.Z)({}, (0, b.Z)(e, ['icon']), {
              title: n,
              popupClassName: y()(l, ''.concat(l, '-').concat(c), o),
            }),
          ),
        );
      }
      var j = O,
        N = n(96156),
        E = n(50344),
        S = n(28481),
        D = n(90484),
        P = n(28991),
        k = n(81253),
        T = n(50106),
        I = { adjustX: 1, adjustY: 1 },
        _ = [0, 0],
        R = {
          left: {
            points: ['cr', 'cl'],
            overflow: I,
            offset: [-4, 0],
            targetOffset: _,
          },
          right: {
            points: ['cl', 'cr'],
            overflow: I,
            offset: [4, 0],
            targetOffset: _,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: I,
            offset: [0, -4],
            targetOffset: _,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: I,
            offset: [0, 4],
            targetOffset: _,
          },
          topLeft: {
            points: ['bl', 'tl'],
            overflow: I,
            offset: [0, -4],
            targetOffset: _,
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: I,
            offset: [-4, 0],
            targetOffset: _,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: I,
            offset: [0, -4],
            targetOffset: _,
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: I,
            offset: [4, 0],
            targetOffset: _,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: I,
            offset: [0, 4],
            targetOffset: _,
          },
          rightBottom: {
            points: ['bl', 'br'],
            overflow: I,
            offset: [4, 0],
            targetOffset: _,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: I,
            offset: [0, 4],
            targetOffset: _,
          },
          leftBottom: {
            points: ['br', 'bl'],
            overflow: I,
            offset: [-4, 0],
            targetOffset: _,
          },
        },
        A = function (e) {
          var t = e.overlay,
            n = e.prefixCls,
            o = e.id,
            r = e.overlayInnerStyle;
          return v.createElement(
            'div',
            {
              className: ''.concat(n, '-inner'),
              id: o,
              role: 'tooltip',
              style: r,
            },
            'function' === typeof t ? t() : t,
          );
        },
        L = A,
        z = function (e, t) {
          var n = e.overlayClassName,
            o = e.trigger,
            r = void 0 === o ? ['hover'] : o,
            i = e.mouseEnterDelay,
            a = void 0 === i ? 0 : i,
            l = e.mouseLeaveDelay,
            s = void 0 === l ? 0.1 : l,
            c = e.overlayStyle,
            p = e.prefixCls,
            u = void 0 === p ? 'rc-tooltip' : p,
            d = e.children,
            m = e.onVisibleChange,
            h = e.afterVisibleChange,
            g = e.transitionName,
            y = e.animation,
            b = e.motion,
            C = e.placement,
            x = void 0 === C ? 'right' : C,
            w = e.align,
            Z = void 0 === w ? {} : w,
            O = e.destroyTooltipOnHide,
            j = void 0 !== O && O,
            N = e.defaultVisible,
            E = e.getTooltipContainer,
            S = e.overlayInnerStyle,
            I = (0, k.Z)(e, [
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
            _ = (0, v.useRef)(null);
          (0, v.useImperativeHandle)(t, function () {
            return _.current;
          });
          var A = (0, P.Z)({}, I);
          'visible' in e && (A.popupVisible = e.visible);
          var z = function () {
              var t = e.arrowContent,
                n = void 0 === t ? null : t,
                o = e.overlay,
                r = e.id;
              return [
                v.createElement(
                  'div',
                  { className: ''.concat(u, '-arrow'), key: 'arrow' },
                  n,
                ),
                v.createElement(L, {
                  key: 'content',
                  prefixCls: u,
                  id: r,
                  overlay: o,
                  overlayInnerStyle: S,
                }),
              ];
            },
            V = !1,
            M = !1;
          if ('boolean' === typeof j) V = j;
          else if (j && 'object' === (0, D.Z)(j)) {
            var H = j.keepParent;
            (V = !0 === H), (M = !1 === H);
          }
          return v.createElement(
            T.Z,
            (0, f.Z)(
              {
                popupClassName: n,
                prefixCls: u,
                popup: z,
                action: r,
                builtinPlacements: R,
                popupPlacement: x,
                ref: _,
                popupAlign: Z,
                getPopupContainer: E,
                onPopupVisibleChange: m,
                afterPopupVisibleChange: h,
                popupTransitionName: g,
                popupAnimation: y,
                popupMotion: b,
                defaultPopupVisible: N,
                destroyPopupOnHide: V,
                autoDestroy: M,
                mouseLeaveDelay: s,
                popupStyle: c,
                mouseEnterDelay: a,
              },
              A,
            ),
            d,
          );
        },
        V = (0, v.forwardRef)(z),
        M = V,
        H = n(21770),
        B = { adjustX: 1, adjustY: 1 },
        J = { adjustX: 0, adjustY: 0 },
        $ = [0, 0];
      function F(e) {
        return 'boolean' === typeof e
          ? e
            ? B
            : J
          : (0, f.Z)((0, f.Z)({}, J), e);
      }
      function K(e) {
        var t = e.arrowWidth,
          n = void 0 === t ? 4 : t,
          o = e.horizontalArrowShift,
          r = void 0 === o ? 16 : o,
          i = e.verticalArrowShift,
          a = void 0 === i ? 8 : i,
          l = e.autoAdjustOverflow,
          s = {
            left: { points: ['cr', 'cl'], offset: [-4, 0] },
            right: { points: ['cl', 'cr'], offset: [4, 0] },
            top: { points: ['bc', 'tc'], offset: [0, -4] },
            bottom: { points: ['tc', 'bc'], offset: [0, 4] },
            topLeft: { points: ['bl', 'tc'], offset: [-(r + n), -4] },
            leftTop: { points: ['tr', 'cl'], offset: [-4, -(a + n)] },
            topRight: { points: ['br', 'tc'], offset: [r + n, -4] },
            rightTop: { points: ['tl', 'cr'], offset: [4, -(a + n)] },
            bottomRight: { points: ['tr', 'bc'], offset: [r + n, 4] },
            rightBottom: { points: ['bl', 'cr'], offset: [4, a + n] },
            bottomLeft: { points: ['tl', 'bc'], offset: [-(r + n), 4] },
            leftBottom: { points: ['br', 'cl'], offset: [-4, a + n] },
          };
        return (
          Object.keys(s).forEach(function (t) {
            (s[t] = e.arrowPointAtCenter
              ? (0, f.Z)((0, f.Z)({}, s[t]), {
                  overflow: F(l),
                  targetOffset: $,
                })
              : (0, f.Z)((0, f.Z)({}, R[t]), { overflow: F(l) })),
              (s[t].ignoreShake = !0);
          }),
          s
        );
      }
      var W = n(86032),
        X = n(98787),
        Y = n(33603),
        U = function (e, t) {
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
        q = function (e, t) {
          var n = {},
            o = (0, f.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((n[t] = e[t]), delete o[t]);
            }),
            { picked: n, omitted: o }
          );
        },
        G = new RegExp('^('.concat(X.Y.join('|'), ')(-inverse)?$'));
      function Q(e, t) {
        var n = e.type;
        if (
          (!0 === n.__ANT_BUTTON ||
            !0 === n.__ANT_SWITCH ||
            !0 === n.__ANT_CHECKBOX ||
            'button' === e.type) &&
          e.props.disabled
        ) {
          var o = q(e.props.style, [
              'position',
              'left',
              'right',
              'top',
              'bottom',
              'float',
              'display',
              'zIndex',
            ]),
            r = o.picked,
            i = o.omitted,
            a = (0, f.Z)((0, f.Z)({ display: 'inline-block' }, r), {
              cursor: 'not-allowed',
              width: e.props.block ? '100%' : null,
            }),
            l = (0, f.Z)((0, f.Z)({}, i), { pointerEvents: 'none' }),
            s = (0, Z.Tm)(e, { style: l, className: null });
          return v.createElement(
            'span',
            {
              style: a,
              className: y()(
                e.props.className,
                ''.concat(t, '-disabled-compatible-wrapper'),
              ),
            },
            s,
          );
        }
        return e;
      }
      var ee = v.forwardRef(function (e, t) {
        var n,
          o = v.useContext(W.E_),
          r = o.getPopupContainer,
          i = o.getPrefixCls,
          a = o.direction,
          l = (0, H.Z)(!1, {
            value: e.visible,
            defaultValue: e.defaultVisible,
          }),
          s = (0, S.Z)(l, 2),
          c = s[0],
          p = s[1],
          u = function () {
            var t = e.title,
              n = e.overlay;
            return !t && !n && 0 !== t;
          },
          d = function (t) {
            var n;
            p(!u() && t),
              u() ||
                null === (n = e.onVisibleChange) ||
                void 0 === n ||
                n.call(e, t);
          },
          m = function () {
            var t = e.builtinPlacements,
              n = e.arrowPointAtCenter,
              o = e.autoAdjustOverflow;
            return t || K({ arrowPointAtCenter: n, autoAdjustOverflow: o });
          },
          h = function (e, t) {
            var n = m(),
              o = Object.keys(n).filter(function (e) {
                return (
                  n[e].points[0] === t.points[0] &&
                  n[e].points[1] === t.points[1]
                );
              })[0];
            if (o) {
              var r = e.getBoundingClientRect(),
                i = { top: '50%', left: '50%' };
              o.indexOf('top') >= 0 || o.indexOf('Bottom') >= 0
                ? (i.top = ''.concat(r.height - t.offset[1], 'px'))
                : (o.indexOf('Top') >= 0 || o.indexOf('bottom') >= 0) &&
                  (i.top = ''.concat(-t.offset[1], 'px')),
                o.indexOf('left') >= 0 || o.indexOf('Right') >= 0
                  ? (i.left = ''.concat(r.width - t.offset[0], 'px'))
                  : (o.indexOf('right') >= 0 || o.indexOf('Left') >= 0) &&
                    (i.left = ''.concat(-t.offset[0], 'px')),
                (e.style.transformOrigin = ''
                  .concat(i.left, ' ')
                  .concat(i.top));
            }
          },
          g = function () {
            var t = e.title,
              n = e.overlay;
            return 0 === t ? t : n || t || '';
          },
          b = e.getPopupContainer,
          C = U(e, ['getPopupContainer']),
          x = e.prefixCls,
          w = e.openClassName,
          O = e.getTooltipContainer,
          j = e.overlayClassName,
          E = e.color,
          D = e.overlayInnerStyle,
          P = e.children,
          k = i('tooltip', x),
          T = i(),
          I = c;
        !('visible' in e) && u() && (I = !1);
        var _,
          R = Q((0, Z.l$)(P) ? P : v.createElement('span', null, P), k),
          A = R.props,
          L = y()(A.className, (0, N.Z)({}, w || ''.concat(k, '-open'), !0)),
          z = y()(
            j,
            ((n = {}),
            (0, N.Z)(n, ''.concat(k, '-rtl'), 'rtl' === a),
            (0, N.Z)(n, ''.concat(k, '-').concat(E), E && G.test(E)),
            n),
          ),
          V = D;
        return (
          E &&
            !G.test(E) &&
            ((V = (0, f.Z)((0, f.Z)({}, D), { background: E })),
            (_ = { background: E })),
          v.createElement(
            M,
            (0, f.Z)({}, C, {
              prefixCls: k,
              overlayClassName: z,
              getTooltipContainer: b || O || r,
              ref: t,
              builtinPlacements: m(),
              overlay: g(),
              visible: I,
              onVisibleChange: d,
              onPopupAlign: h,
              overlayInnerStyle: V,
              arrowContent: v.createElement('span', {
                className: ''.concat(k, '-arrow-content'),
                style: _,
              }),
              motion: {
                motionName: (0, Y.m)(T, 'zoom-big-fast', e.transitionName),
                motionDeadline: 1e3,
              },
            }),
            I ? (0, Z.Tm)(R, { className: L }) : R,
          )
        );
      });
      (ee.displayName = 'Tooltip'),
        (ee.defaultProps = {
          placement: 'top',
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          arrowPointAtCenter: !1,
          autoAdjustOverflow: !0,
        });
      var te = ee,
        ne = n(57159),
        oe = function (e, t) {
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
        re = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, m.Z)(n);
          function n() {
            var e;
            return (
              (0, p.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  o,
                  r = t.siderCollapsed,
                  i = e.context,
                  a = i.prefixCls,
                  l = i.firstLevel,
                  s = i.inlineCollapsed,
                  c = i.direction,
                  p = e.props,
                  u = p.className,
                  d = p.children,
                  m = e.props,
                  g = m.title,
                  b = m.icon,
                  C = m.danger,
                  x = oe(m, ['title', 'icon', 'danger']),
                  w = g;
                'undefined' === typeof g
                  ? (w = l ? d : '')
                  : !1 === g && (w = '');
                var O = { title: w };
                r || s || ((O.title = null), (O.visible = !1));
                var j = (0, E.Z)(d).length;
                return v.createElement(
                  te,
                  (0, f.Z)({}, O, {
                    placement: 'rtl' === c ? 'left' : 'right',
                    overlayClassName: ''.concat(a, '-inline-collapsed-tooltip'),
                  }),
                  v.createElement(
                    h.ck,
                    (0, f.Z)({}, x, {
                      className: y()(
                        ((n = {}),
                        (0, N.Z)(n, ''.concat(a, '-item-danger'), C),
                        (0, N.Z)(
                          n,
                          ''.concat(a, '-item-only-child'),
                          1 === (b ? j + 1 : j),
                        ),
                        n),
                        u,
                      ),
                      title: 'string' === typeof g ? g : void 0,
                    }),
                    (0, Z.Tm)(b, {
                      className: y()(
                        (0, Z.l$)(b)
                          ? null === (o = b.props) || void 0 === o
                            ? void 0
                            : o.className
                          : '',
                        ''.concat(a, '-item-icon'),
                      ),
                    }),
                    e.renderItemChildren(s),
                  ),
                );
              }),
              e
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    o = t.firstLevel,
                    r = this.props,
                    i = r.icon,
                    a = r.children,
                    l = v.createElement(
                      'span',
                      { className: ''.concat(n, '-title-content') },
                      a,
                    );
                  return (!i || ((0, Z.l$)(a) && 'span' === a.type)) &&
                    a &&
                    e &&
                    o &&
                    'string' === typeof a
                    ? v.createElement(
                        'div',
                        { className: ''.concat(n, '-inline-collapsed-noicon') },
                        a.charAt(0),
                      )
                    : l;
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.createElement(ne.D.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(v.Component);
      re.contextType = w;
      var ie = n(21687),
        ae = function (e, t) {
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
        le = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, m.Z)(n);
          function n(e) {
            var o;
            return (
              (0, p.Z)(this, n),
              (o = t.call(this, e)),
              (o.renderMenu = function (e) {
                var t = e.getPopupContainer,
                  n = e.getPrefixCls,
                  r = e.direction,
                  i = n(),
                  a = o.props,
                  l = a.prefixCls,
                  s = a.className,
                  c = a.theme,
                  p = a.expandIcon,
                  u = ae(a, ['prefixCls', 'className', 'theme', 'expandIcon']),
                  d = (0, b.Z)(u, ['siderCollapsed', 'collapsedWidth']),
                  m = o.getInlineCollapsed(),
                  g = {
                    horizontal: { motionName: ''.concat(i, '-slide-up') },
                    inline: Y.Z,
                    other: { motionName: ''.concat(i, '-zoom-big') },
                  },
                  x = n('menu', l),
                  O = y()(''.concat(x, '-').concat(c), s);
                return v.createElement(
                  w.Provider,
                  {
                    value: {
                      prefixCls: x,
                      inlineCollapsed: m || !1,
                      antdMenuTheme: c,
                      direction: r,
                      firstLevel: !0,
                    },
                  },
                  v.createElement(
                    h.ZP,
                    (0, f.Z)(
                      {
                        getPopupContainer: t,
                        overflowedIndicator: v.createElement(C.Z, null),
                        overflowedIndicatorPopupClassName: ''
                          .concat(x, '-')
                          .concat(c),
                      },
                      d,
                      {
                        inlineCollapsed: m,
                        className: O,
                        prefixCls: x,
                        direction: r,
                        defaultMotions: g,
                        expandIcon: (0, Z.Tm)(p, {
                          className: ''.concat(x, '-submenu-expand-icon'),
                        }),
                      },
                    ),
                  ),
                );
              }),
              (0, ie.Z)(
                !('inlineCollapsed' in e && 'inline' !== e.mode),
                'Menu',
                '`inlineCollapsed` should only be used when `mode` is inline.',
              ),
              (0, ie.Z)(
                !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
                'Menu',
                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
              ),
              o
            );
          }
          return (
            (0, u.Z)(n, [
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
                  return v.createElement(W.C, null, this.renderMenu);
                },
              },
            ]),
            n
          );
        })(v.Component);
      le.defaultProps = { theme: 'light' };
      var se = (function (e) {
        (0, d.Z)(n, e);
        var t = (0, m.Z)(n);
        function n() {
          return (0, p.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, u.Z)(n, [
            {
              key: 'render',
              value: function () {
                var e = this;
                return v.createElement(ne.D.Consumer, null, function (t) {
                  return v.createElement(le, (0, f.Z)({}, e.props, t));
                });
              },
            },
          ]),
          n
        );
      })(v.Component);
      (se.Divider = h.iz),
        (se.Item = re),
        (se.SubMenu = j),
        (se.ItemGroup = h.BW);
      var ce = se,
        fe = n(61386),
        pe = n(5977),
        ue = n(41788),
        de = n(97175),
        me = (n(45697), n(19756)),
        ve = n(2177);
      v.Component;
      v.Component;
      var he = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        ge = function (e, t) {
          return 'string' === typeof e ? (0, de.ob)(e, null, null, t) : e;
        },
        ye = function (e) {
          return e;
        },
        be = v.forwardRef;
      function Ce(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof be && (be = ye);
      var xe = be(function (e, t) {
        var n = e.innerRef,
          o = e.navigate,
          r = e.onClick,
          i = (0, me.Z)(e, ['innerRef', 'navigate', 'onClick']),
          a = i.target,
          l = (0, f.Z)({}, i, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (a && '_self' !== a) ||
                Ce(e) ||
                (e.preventDefault(), o());
            },
          });
        return (l.ref = (ye !== be && t) || n), v.createElement('a', l);
      });
      var we = be(function (e, t) {
          var n = e.component,
            o = void 0 === n ? xe : n,
            r = e.replace,
            i = e.to,
            a = e.innerRef,
            l = (0, me.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return v.createElement(pe.s6.Consumer, null, function (e) {
            e || (0, ve.default)(!1);
            var n = e.history,
              s = ge(he(i, e.location), e.location),
              c = s ? n.createHref(s) : '',
              p = (0, f.Z)({}, l, {
                href: c,
                navigate: function () {
                  var t = he(i, e.location),
                    o = r ? n.replace : n.push;
                  o(t);
                },
              });
            return (
              ye !== be ? (p.ref = t || a) : (p.innerRef = a),
              v.createElement(o, p)
            );
          });
        }),
        Ze = function (e) {
          return e;
        },
        Oe = v.forwardRef;
      function je() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof Oe && (Oe = Ze);
      Oe(function (e, t) {
        var n = e['aria-current'],
          o = void 0 === n ? 'page' : n,
          r = e.activeClassName,
          i = void 0 === r ? 'active' : r,
          a = e.activeStyle,
          l = e.className,
          s = e.exact,
          c = e.isActive,
          p = e.location,
          u = e.sensitive,
          d = e.strict,
          m = e.style,
          h = e.to,
          g = e.innerRef,
          y = (0, me.Z)(e, [
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
        return v.createElement(pe.s6.Consumer, null, function (e) {
          e || (0, ve.default)(!1);
          var n = p || e.location,
            r = ge(he(h, n), n),
            b = r.pathname,
            C = b && b.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            x = C
              ? (0, pe.LX)(n.pathname, {
                  path: C,
                  exact: s,
                  sensitive: u,
                  strict: d,
                })
              : null,
            w = !!(c ? c(x, n) : x),
            Z = w ? je(l, i) : l,
            O = w ? (0, f.Z)({}, m, {}, a) : m,
            j = (0, f.Z)(
              {
                'aria-current': (w && o) || null,
                className: Z,
                style: O,
                to: r,
              },
              y,
            );
          return (
            Ze !== Oe ? (j.ref = t || g) : (j.innerRef = g),
            v.createElement(we, j)
          );
        });
      });
      var Ne = n(43786),
        Ee = n(43095),
        Se = n(9669),
        De = n.n(Se),
        Pe = n(85893),
        ke = r.Z.Sider,
        Te = ce.SubMenu,
        Ie = () => {
          var e = (0, v.useState)(!0),
            t = (0, o.Z)(e, 2),
            n = t[0],
            r = t[1],
            i = (0, v.useState)([]),
            a = (0, o.Z)(i, 2),
            l = a[0],
            s = a[1],
            f = () => De().get('/api/menus'),
            p = (0, fe.QT)(() => f(), { manual: !0, refreshDeps: [] });
          if (
            ((0, v.useEffect)(
              () => (
                (p.data = Ee.Z),
                () => {
                  console.log('[ Side Menu ] unmount !');
                }
              ),
              [],
            ),
            (0, v.useEffect)(() => {
              s(p.data);
            }, [p.data]),
            !l || !l.length)
          )
            return (0, Pe.jsx)(c.Z, {});
          function u(e) {
            e.path.indexOf('lowcode') > -1 &&
              sessionStorage.setItem(
                'prevPath',
                location.hash.replace('#', ''),
              );
          }
          return (0, Pe.jsx)(ke, {
            style: { minHeight: 'calc(100vh - 60px)' },
            collapsedWidth: 40,
            collapsible: !0,
            collapsed: n,
            onCollapse: r,
            children: (0, Pe.jsx)(ce, {
              mode: 'inline',
              defaultSelectedKeys: ['4'],
              children: l.map((e) => {
                var t;
                return (0, Pe.jsx)(
                  Te,
                  {
                    title: e.name,
                    icon: (0, Pe.jsx)(Ne.JO, { type: ''.concat(e.icon) }),
                    children:
                      null === e ||
                      void 0 === e ||
                      null === (t = e.children) ||
                      void 0 === t
                        ? void 0
                        : t.map((t) =>
                            (0, Pe.jsx)(
                              ce.Item,
                              {
                                icon: (0, Pe.jsx)(Ne.JO, {
                                  type: ''.concat(t.icon),
                                }),
                                children: (0, Pe.jsxs)(we, {
                                  to: t.path,
                                  onClick: () => u(t),
                                  children: [' ', t.name],
                                }),
                              },
                              ''.concat(e.id, '_').concat(t.id),
                            ),
                          ),
                  },
                  e.id,
                );
              }),
            }),
          });
        },
        _e = Ie,
        Re = (n(3317), n(73727)),
        Ae = r.Z.Header,
        Le = Re.Z.Option,
        ze = (e) => {
          var t = (0, v.useState)('zh'),
            n = (0, o.Z)(t, 2),
            r = n[0],
            i = n[1],
            a = (t) => {
              i(t), e.changeLocale(t);
            };
          return (0, Pe.jsxs)(Ae, {
            className: 'header',
            children: [
              (0, Pe.jsxs)(we, {
                className: 'logo',
                to: '/',
                children: [' ', 'JYJIN'],
              }),
              (0, Pe.jsxs)(Re.Z, {
                className: 'local',
                width: 250,
                showSearch: !0,
                value: r,
                onChange: a,
                children: [
                  (0, Pe.jsx)(
                    Le,
                    { value: 'zh', children: '\u4e2d\u6587' },
                    'zh',
                  ),
                  (0, Pe.jsx)(Le, { value: 'en', children: 'English' }, 'en'),
                ],
              }),
            ],
          });
        },
        Ve = ze,
        Me = n(44194),
        He = n.n(Me),
        Be = n(36346),
        Je = r.Z.Content,
        $e = r.Z.Footer,
        Fe = l.Z,
        Ke = { locale: 'zh', author: 'jyjin' },
        We = (e) => {
          var t = (0, v.useState)('zh'),
            n = (0, o.Z)(t, 2),
            l = n[0],
            c = n[1],
            f = (e) => {
              (Ke.locale = e), c(e);
            },
            p = y()(He().content);
          return (0, Pe.jsx)(i.zt, {
            className: 'provider',
            global: Ke,
            intls: a,
            lcStore: Be.Z,
            children: (0, Pe.jsxs)(Fe, {
              messages: s[l],
              locale: l,
              defaultLocale: l,
              children: [
                (0, Pe.jsx)(Ve, { changeLocale: f }),
                (0, Pe.jsxs)(r.Z, {
                  children: [
                    (0, Pe.jsx)(_e, {}),
                    (0, Pe.jsxs)(Je, {
                      children: [
                        (0, Pe.jsxs)(Je, {
                          className: p,
                          children: [' ', e.children, ' '],
                        }),
                        (0, Pe.jsxs)($e, {
                          style: { textAlign: 'center' },
                          children: [
                            ' ',
                            'Copyright \xa92021 \u53e4\u91d1. All rights reserved. Created by Awesome JyJin',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Xe = We;
    },
    18221: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          en: function () {
            return r;
          },
          zh: function () {
            return o;
          },
        });
      var o = {
          author: '\u5b87\u5b99\u6700\u5e05\u91d1\u5efa\u4e1a',
          why: '\u4e3a\u4ec0\u4e48',
          'who.save.world':
            '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}',
        },
        r = {
          author: 'universe handsome jianye',
          why: 'why',
          'who.save.world': '{who}~ come to save the world \uff01{encourage}',
        };
    },
    36346: function (e, t, n) {
      'use strict';
      var o = n(88986),
        r = n(68949),
        i = [{ id: 1, name: '\u9ed8\u8ba4\u533a\u57df', cols: 1, fields: [] }];
      function a(e, t) {
        return e.find((e) => e.id === t);
      }
      function l(e, t) {
        var n = e.findIndex((e) => e.id === t);
        return e.splice(n, 1), e;
      }
      var s = (0, r.LO)({
        current: {},
        sections: i,
        selectSection(e) {
          (this.current['field'] = null),
            (this.current['section'] = e),
            (this.current = (0, o.Z)({}, this.current));
        },
        selectField(e) {
          this.current['field'] = e;
        },
        addSection() {
          var e = this.sections[this.sections.length - 1].id + 1,
            t = { id: e, name: '\u533a\u57df'.concat(e), cols: 1, fields: [] };
          this.sections.push(t),
            (this.sections = [...this.sections]),
            this.selectSection(e);
        },
        removeSection(e) {
          l(this.sections, e), (this.sections = [...this.sections]);
        },
        addField(e, t) {
          a(this.sections, e).fields.push(t),
            (a(this.sections, e).fields = [...a(this.sections, e).fields]),
            (this.sections = [...this.sections]),
            console.log((0, r.ZN)(this.sections));
        },
        removeField(e, t) {
          l(a(this.sections, e).fields, t),
            (this.sections = [...this.sections]);
        },
        sortSection(e) {
          this.sections = [...e];
        },
        sortField(e, t) {
          var n = this.sections.findIndex((t) => t.id === e);
          (this.sections[n].fields = [...t]),
            (this.sections = [...this.sections]);
        },
      });
      t['Z'] = s;
    },
  },
]);
