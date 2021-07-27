(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [285],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    52631: function (e) {
      e.exports = {
        flex: 'flex___3Cc90',
        lc: 'lc___yNB-z',
        'lc-header': 'lc-header___1luCQ',
        'lc-header-left': 'lc-header-left___1qd1f',
        'lc-header-center': 'lc-header-center___3FX6Z',
        'lc-header-right': 'lc-header-right___O4Qj_',
        'lc-content': 'lc-content___2pl_v',
        'lc-content-left': 'lc-content-left___2oicI',
        'lc-content-right': 'lc-content-right___3HIVe',
        tag: 'tag___2-vu6',
        'lc-content-center': 'lc-content-center___1Q4Zv',
        'drag-to': 'drag-to___1FI6_',
        selected: 'selected___2xUfL',
        'add-btn': 'add-btn___xNtEV',
        compo: 'compo___107p0',
      };
    },
    43786: function (e, n, t) {
      'use strict';
      t.d(n, {
        JO: function () {
          return o;
        },
        he: function () {
          return f;
        },
        gb: function () {
          return l.Z;
        },
      });
      var c = t(45976),
        i = t(85893),
        s = (0, c.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js',
        }),
        r = (e) => {
          var n = {};
          return (
            e.size && (n.fontSize = e.size),
            e.color && (n.color = e.color),
            (0, i.jsx)(s, { type: 'icon-'.concat(e.type), style: n })
          );
        },
        o = r,
        l = t(57136),
        a = t(94184),
        d = t.n(a),
        h = t(98085),
        g = t.n(h),
        u = (e) => {
          var n = e.json;
          if (!n)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var t = d()(g()['json-viewer'], 'jyjin');
          return (0, i.jsx)('pre', {
            className: t,
            children: JSON.stringify(n, null, 2),
          });
        },
        f = u,
        p = t(66934),
        x = t(45697),
        m = t.n(x),
        v = t(22677),
        j = t.n(v),
        _ = () => {},
        Z = (e) => {
          e.name;
          var n = e.key,
            t = e.isDragging,
            c = e.connectDragSource,
            s = (e.element, t ? 0.4 : 1),
            r = d()(j().tag);
          return c(
            (0, i.jsx)(
              'div',
              { className: r, style: { opacity: s }, children: e.children },
              n,
            ),
          );
        },
        y = (e) => {
          var n = 'box',
            t = {
              beginDrag: e.begin,
              endDrag: e.end || _,
              canDrag: e.canDrag || _,
              isDragging: e.isDragging || _,
            },
            c = (e, n) => ({
              connectDragSource: e.dragSource(),
              isDragging: n.isDragging(),
            });
          return (0, p.E)(n, t, c)(Z);
        };
      y.prototype = {
        begin: m().func.isRequired,
        end: m().func,
        canDrag: m().func,
        isDragging: m().func,
        element: m().element,
      };
      var D = t(71810),
        S = (e) => {
          e.canDrop;
          var n = e.isOver,
            t = (e.allowedDropEffect, e.connectDropTarget),
            c = e.element;
          console.log('isOVer == ', n);
          var s = d()({ [j()['drag-to']]: n });
          return t((0, i.jsx)('div', { className: s, children: c }));
        },
        b = (e) => {
          var n = 'box',
            t = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            c = (e, n) => ({
              connectDropTarget: e.dropTarget(),
              isOver: n.isOver(),
              canDrop: n.canDrop(),
            });
          return (0, D.G)(n, t, c)((0, i.jsx)(S, { element: e.element }));
        };
      b.prototype = {
        drop: m().func.isRequired,
        hover: m().func,
        canDrag: m().func,
      };
    },
    18221: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          en: function () {
            return i;
          },
          zh: function () {
            return c;
          },
        });
      var c = {
          author: '\u5b87\u5b99\u6700\u5e05\u91d1\u5efa\u4e1a',
          why: '\u4e3a\u4ec0\u4e48',
          'who.save.world':
            '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}',
        },
        i = {
          author: 'universe handsome jianye',
          why: 'why',
          'who.save.world': '{who}~ come to save the world \uff01{encourage}',
        };
    },
    68910: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return he;
          },
        });
      var c = t(88986),
        i = t(13887),
        s = (t(24793), t(97183)),
        r = t(29323),
        o = t(81966),
        l = t(29558),
        a = t(18221),
        d = t(67294),
        h = t(43786),
        g = (t(49111), t(19650)),
        u = (t(48736), t(27049)),
        f = (t(57663), t(60404)),
        p = (t(57338), t(49888)),
        x = t(61386),
        m = t(52631),
        v = t.n(m),
        j = t(85893),
        _ = s.Z.Header,
        Z =
          (s.Z.Content,
          (0, r.f3)('lcStore')(
            (0, r.Pi)((e) =>
              (0, j.jsx)(p.Z, {
                title: '\u6570\u636eJSON',
                width: 720,
                visible: e.visible,
                bodyStyle: { paddingBottom: 80 },
                onClose: () => {
                  e.close();
                },
                children: (0, j.jsx)(h.he, { json: e.lcStore.sections }),
              }),
            ),
          )),
        y = () => {
          function e() {
            var e = sessionStorage.getItem('prevPath') || '/';
            x.m8.push(e);
          }
          var n = (0, d.useState)(!1),
            t = (0, i.Z)(n, 2),
            c = t[0],
            r = t[1];
          return (0, j.jsxs)(s.Z, {
            children: [
              (0, j.jsxs)(_, {
                className: v()['lc-header'],
                children: [
                  (0, j.jsxs)(g.Z, {
                    className: v()['lc-header-left'],
                    children: [
                      (0, j.jsx)(f.Z, {
                        type: 'link',
                        icon: (0, j.jsx)(h.JO, {
                          type: 'fullscreen-exit',
                          color: 'black',
                        }),
                        onClick: e,
                      }),
                      (0, j.jsx)(u.Z, {
                        type: 'vertical',
                        style: { borderColor: '#ddd', height: 30 },
                      }),
                      (0, j.jsx)('h1', { children: '\u8bbe\u8ba1\u5668' }),
                    ],
                  }),
                  (0, j.jsx)(g.Z, {
                    className: v()['lc-header-center'],
                    children: (0, j.jsx)('div', {}),
                  }),
                  (0, j.jsxs)(g.Z, {
                    className: v()['lc-header-right'],
                    children: [
                      (0, j.jsx)(f.Z, {
                        type: 'ghost',
                        icon: (0, j.jsx)(h.JO, { type: 'upload', size: 16 }),
                        children: '\u9884\u89c8',
                      }),
                      (0, j.jsx)(f.Z, {
                        type: 'primary',
                        icon: (0, j.jsx)(h.JO, { type: 'upload', size: 16 }),
                        onClick: () => r(!0),
                        children: '\u5bfc\u51fa',
                      }),
                      (0, j.jsx)(f.Z, {
                        type: 'primary',
                        icon: (0, j.jsx)(h.JO, { type: 'file-text', size: 16 }),
                        children: '\u4fdd\u5b58',
                      }),
                    ],
                  }),
                ],
              }),
              (0, j.jsx)(Z, { visible: c, close: () => r(!1) }),
            ],
          });
        },
        D = y,
        S = (t(18106), t(16351)),
        b = t(9669),
        N = t.n(b),
        E = () => N().get('api/jy-components'),
        w = (t(78707), t(45503)),
        C = (t(71153), t(60331)),
        T = t(71810),
        O = t(13135),
        I = t(86371),
        k = (e) => {
          var n = e.field,
            t = e.index,
            s = e.moveCard,
            r = n.id,
            o = (n.name, (0, d.useRef)(null)),
            l = (0, O.L)({
              accept: 'tag',
              collect(e) {
                return { handlerId: e.getHandlerId() };
              },
              hover(e, n) {
                var c;
                if (o.current) {
                  var i = e.index,
                    r = t;
                  if (i !== r) {
                    var l =
                        null === (c = o.current) || void 0 === c
                          ? void 0
                          : c.getBoundingClientRect(),
                      a = (l.bottom - l.top) / 2,
                      d = n.getClientOffset(),
                      h = d.y - l.top;
                    (i < r && h < a) ||
                      (i > r && h > a) ||
                      (s(i, r), (e.index = r));
                  }
                }
              },
            }),
            a = (0, i.Z)(l, 2),
            h = a[0].handlerId,
            g = a[1],
            u = (0, I.c)({
              type: 'tag',
              item: () => ({ id: r, index: t }),
              collect: (e) => ({ isDragging: e.isDragging() }),
            }),
            f = (0, i.Z)(u, 2),
            p = (f[0].isDragging, f[1]),
            x = {
              height: 30,
              lineHeight: '30px',
              display: 'inline-block',
              width: '100%',
              background: '#f0f0f0',
              color: '#8c8c8c',
              textAlign: 'center',
              cursor: 'move',
              marginBottom: '14px',
            };
          return (
            p(g(o)),
            (0, j.jsx)(C.Z, {
              className: v().compo,
              ref: o,
              style: (0, c.Z)({}, x),
              'data-handler-id': h,
              children: e.field.name,
            })
          );
        },
        R = t(68949),
        A = t(94184),
        L = t.n(A),
        z = (0, r.f3)('lcStore')(
          (0, r.Pi)((e) => {
            function n(n) {
              n.stopPropagation(), e.lcStore.addSection();
            }
            function t() {
              e.lcStore.selectSection(e.section.id);
            }
            console.log('section props == ', e),
              console.log('section section == ', (0, R.ZN)(e.section)),
              console.log(
                'section lc current == ',
                (0, R.ZN)(e.lcStore.current),
              );
            var i = (n, t) => {
                e.lcStore.sortField(e.section.id, n, t);
              },
              s = e.section.id === e.lcStore.current['section'],
              r = L()({ [v().section]: !0, [v().selected]: s }),
              o = {
                position: 'absolute',
                height: '20px',
                left: '50%',
                bottom: 0,
                marginLeft: -10,
                marginBottom: -10,
                cursor: 'pointer',
                zIndex: 9,
              },
              l = {
                height: 30,
                lineHeight: '30px',
                display: 'inline-block',
                width: '100%',
                border: '1px dashed #2979ff',
                background: '#f2f7ff',
                color: '#8c8c8c',
                textAlign: 'center',
              };
            return (0, j.jsxs)(w.Z, {
              className: r,
              size: 'small',
              title: '\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae',
              title: e.name,
              onClick: t,
              children: [
                e.section.fields.length ? null : (0, j.jsx)(C.Z, { style: l }),
                (0, j.jsx)(g.Z, {
                  direction: 'vertical',
                  style: { width: '100%' },
                  children: e.section.fields.map((n, t) =>
                    (0, j.jsx)(
                      k,
                      (0, c.Z)(
                        (0, c.Z)({}, e),
                        {},
                        { index: t, field: n, moveCard: i },
                      ),
                    ),
                  ),
                }),
                s
                  ? (0, j.jsxs)('div', {
                      style: o,
                      className: v()['add-btn'],
                      onClick: n,
                      children: [
                        ' ',
                        (0, j.jsx)(h.JO, {
                          type: 'plus-circle-fill',
                          size: 20,
                          color: '#2196f3',
                        }),
                        ' ',
                      ],
                    })
                  : null,
              ],
            });
          }),
        ),
        H = (e) => {
          e.canDrop;
          var n = e.isOver,
            t = (e.allowedDropEffect, e.connectDropTarget);
          console.log('isOVer == ', n);
          var i = L()({ [v()['drag-to']]: n });
          return t(
            (0, j.jsx)('div', {
              className: i,
              children: (0, j.jsx)(z, (0, c.Z)({}, e)),
            }),
          );
        },
        P = 'box',
        U = {
          drop: (e) => {
            var n = e.allowedDropEffect,
              t = e.section;
            return {
              name: ''.concat(n, ' Dustbin'),
              section: (0, R.ZN)(t),
              allowedDropEffect: n,
            };
          },
        },
        F = (e, n) => ({
          connectDropTarget: e.dropTarget(),
          isOver: n.isOver(),
          canDrop: n.canDrop(),
        }),
        J = (0, T.G)(P, U, F)(H),
        M = (0, r.f3)('lcStore')(
          (0, r.Pi)(
            (e) => (
              console.log('center update == ', (0, R.ZN)(e.lcStore.sections)),
              (0, j.jsxs)(s.Z, {
                className: v()['lc-content-center'],
                children: [
                  (0, j.jsx)(w.Z, {
                    size: 'small',
                    title: '\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae',
                    style: { margin: '20px 20px 0', borderColor: '#d8d8d8' },
                    children: (0, j.jsx)(C.Z, {
                      style: {
                        height: 30,
                        lineHeight: '30px',
                        display: 'inline-block',
                        width: '100%',
                        border: '1px dashed #2979ff',
                        background: '#f2f7ff',
                        color: '#8c8c8c',
                        textAlign: 'center',
                      },
                      children:
                        '\u4f60\u53ef\u4ee5\u62d6\u52a8\u5de6\u4fa7\u7ec4\u4ef6\u5b8c\u6210\u8bbe\u7f6e',
                    }),
                  }),
                  e.lcStore.sections.map((e) =>
                    (0, j.jsx)(J, {
                      allowedDropEffect: 'move',
                      name: e.name,
                      id: e.id,
                      section: e,
                    }),
                  ),
                ],
              })
            ),
          ),
        ),
        B = M,
        G = t(66934),
        V = (e) => {
          var n = e.name,
            t = e.key,
            c = e.isDragging,
            i = e.connectDragSource,
            s = c ? 0.4 : 1,
            r = L()(v().tag);
          return i(
            (0, j.jsx)(
              'div',
              {
                className: r,
                style: { opacity: s },
                children: (0, j.jsx)(C.Z, {
                  style: { width: '100%', height: '100%', lineHeight: '30px' },
                  children: n,
                }),
              },
              t,
            ),
          );
        },
        Q = 'box',
        W = {
          beginDrag: (e) => (0, c.Z)({ name: e.name }, e),
          endDrag(e, n) {
            n.getItem();
            var t = n.getDropResult();
            if ((console.log('drag target == ', e.source), t)) {
              console.log('drag to == ', (0, R.ZN)(t.section));
              var i = 1;
              t.section.fields.length &&
                (i = t.section.fields[t.section.fields.length - 1].id + 1);
              var s = (0, c.Z)({ id: i }, e.source);
              e.lcStore.addField(t.section.id, s);
            }
          },
        },
        X = (e, n) => ({
          connectDragSource: e.dragSource(),
          isDragging: n.isDragging(),
        }),
        q = (0, G.E)(Q, W, X)(V),
        K = [
          { code: 'TEXT_SINGLE', name: '\u5355\u884c\u6587\u672c' },
          { code: 'NUMBER', name: '\u6574\u5f62\u6570\u5b57' },
          { code: 'FLOAT', name: '\u6d6e\u70b9\u6570\u5b57' },
          { code: 'CURRENCY', name: '\u8d27\u5e01' },
          { code: 'URL', name: 'URL' },
          { code: 'PASSWORD', name: '\u5bc6\u7801\u6846' },
          { code: 'EMAIL', name: '\u90ae\u7bb1' },
          { code: 'TEXT_MULTI', name: '\u591a\u884c\u6587\u672c' },
          { code: 'TEXT_RICH', name: '\u5bcc\u6587\u672c' },
          { code: 'RADIO', name: '\u5355\u9009\u6846' },
          { code: 'CHECK', name: '\u590d\u9009\u6846' },
          { code: 'RADIO_GROUP', name: '\u5706\u5f62\u591a\u9009\u6846' },
          { code: 'CHECK_GROUP', name: '\u65b9\u578b\u591a\u9009\u6846' },
          { code: 'SWITCH', name: '\u5f00\u5173' },
          { code: 'SELECTOR_SINGLE', name: '\u4e0b\u62c9\u5355\u9009' },
          { code: 'SELECTOR_MULTI', name: '\u4e0b\u62c9\u591a\u9009' },
          { code: 'DATE_TIME', name: '\u65e5\u671f\u65f6\u95f4' },
          { code: 'DATE', name: '\u65e5\u671f' },
          { code: 'TIME', name: '\u65f6\u95f4' },
          { code: 'ATTACHMENT', name: '\u9644\u4ef6' },
          { code: 'IMAGE', name: '\u56fe\u7247' },
          { code: 'MATSER_DETAIL', name: '\u591a\u5bf9\u4e00\u5173\u8054' },
        ],
        Y = S.Z.TabPane,
        $ = (0, r.f3)('lcStore')(
          (0, r.Pi)((e) =>
            (0, j.jsx)('div', {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '0 20px',
              },
              children: e.data.map((n) =>
                (0, j.jsx)(q, (0, c.Z)({ name: n.name, source: n }, e), n.code),
              ),
            }),
          ),
        ),
        ee = () => {
          var e = (0, x.QT)(E);
          function n(e) {
            console.log(e);
          }
          return (
            (e.data = K),
            (0, d.useEffect)(() => {}, [e.data]),
            e.data
              ? (0, j.jsx)(s.Z, {
                  className: v()['lc-content-left'],
                  children: (0, j.jsxs)(S.Z, {
                    tabBarStyle: { padding: '0 24px' },
                    defaultActiveKey: 'components',
                    onChange: n,
                    children: [
                      (0, j.jsx)(
                        Y,
                        {
                          tab: '\u7ec4\u4ef6',
                          children: (0, j.jsx)($, { data: e.data }),
                        },
                        'components',
                      ),
                      (0, j.jsx)(
                        Y,
                        {
                          tab: '\u81ea\u5b9a\u4e49',
                          children: (0, j.jsx)($, { data: e.data }),
                        },
                        'customer',
                      ),
                    ],
                  }),
                })
              : (0, j.jsx)(h.gb, {})
          );
        },
        ne = ee,
        te =
          (s.Z.Header,
          s.Z.Content,
          () =>
            (0, j.jsx)(s.Z, {
              className: v()['lc-content-right'],
              children: 'right',
            })),
        ce = te,
        ie = t(61357),
        se = t(57865),
        re = t(36346),
        oe = s.Z.Content,
        le = l.Z,
        ae = { locale: 'zh', author: 'jyjin' },
        de = (e) => {
          var n = (0, d.useState)('zh'),
            t = (0, i.Z)(n, 2),
            l = t[0];
          t[1];
          return (0, j.jsx)(r.zt, {
            className: 'provider',
            global: ae,
            intls: o,
            lcStore: re.Z,
            children: (0, j.jsx)(le, {
              messages: a[l],
              locale: l,
              defaultLocale: l,
              children: (0, j.jsxs)(s.Z, {
                className: v().lc,
                children: [
                  (0, j.jsx)(D, {}),
                  (0, j.jsx)(oe, {
                    className: v()['lc-content'],
                    children: (0, j.jsxs)(
                      ie.W,
                      (0, c.Z)(
                        (0, c.Z)({ backend: se.PD }, e),
                        {},
                        {
                          children: [
                            (0, j.jsx)(ne, (0, c.Z)({}, e)),
                            (0, j.jsx)(B, (0, c.Z)({}, e)),
                            (0, j.jsx)(ce, (0, c.Z)({}, e)),
                          ],
                        },
                      ),
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        he = de;
    },
    36346: function (e, n, t) {
      'use strict';
      var c = t(88986),
        i = t(68949),
        s = [{ id: 1, name: '\u9ed8\u8ba4\u533a\u57df', cols: 1, fields: [] }];
      function r(e, n) {
        return e.find((e) => e.id === n);
      }
      function o(e, n) {
        var t = e.findIndex((e) => e.id === n);
        return e.splice(t, 1), e;
      }
      var l = (0, i.LO)({
        current: {},
        sections: s,
        selectSection(e) {
          (this.current['field'] = null),
            (this.current['section'] = e),
            (this.current = (0, c.Z)({}, this.current));
        },
        selectField(e) {
          this.current['field'] = e;
        },
        addSection() {
          var e = this.sections[this.sections.length - 1].id + 1,
            n = { id: e, name: '\u533a\u57df'.concat(e), cols: 1, fields: [] };
          this.sections.push(n),
            (this.sections = [...this.sections]),
            this.selectSection(e);
        },
        removeSection(e) {
          o(this.sections, e), (this.sections = [...this.sections]);
        },
        addField(e, n) {
          r(this.sections, e).fields.push(n),
            (r(this.sections, e).fields = [...r(this.sections, e).fields]),
            (this.sections = [...this.sections]),
            console.log((0, i.ZN)(this.sections));
        },
        removeField(e, n) {
          o(r(this.sections, e).fields, n),
            (this.sections = [...this.sections]);
        },
        sortField(e, n, t) {
          var c = r(this.sections, e).fields;
          c = (0, i.ZN)(c);
          var s = c[n];
          c.splice(n, 1), c.splice(t, 0, s);
          var o = this.sections.findIndex((n) => n.id === e);
          (this.sections[o].fields = [...c]),
            (this.sections = [...this.sections]);
        },
      });
      n['Z'] = l;
    },
  },
]);
