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
        'sortable-chosen': 'sortable-chosen___1w7oT',
        'sortable-drag': 'sortable-drag___QBhe4',
        'section-box': 'section-box___34En3',
        selected: 'selected___2xUfL',
        'add-btn': 'add-btn___xNtEV',
      };
    },
    43786: function (e, t, n) {
      'use strict';
      n.d(t, {
        JO: function () {
          return i;
        },
        he: function () {
          return f;
        },
        gb: function () {
          return l.Z;
        },
      });
      var s = n(45976),
        c = n(85893),
        r = (0, s.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        o = (e) => {
          var t = {};
          return (
            e.size && (t.fontSize = e.size),
            e.color && (t.color = e.color),
            (0, c.jsx)(r, { type: 'icon-'.concat(e.type), style: t })
          );
        },
        i = o,
        l = n(57136),
        a = n(94184),
        d = n.n(a),
        h = n(98085),
        g = n.n(h),
        u = (e) => {
          var t = e.json;
          if (!t)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = d()(g()['json-viewer'], 'jyjin');
          return (0, c.jsx)('pre', {
            className: n,
            children: JSON.stringify(t, null, 2),
          });
        },
        f = u,
        x = n(66934),
        p = n(45697),
        m = n.n(p),
        j = n(22677),
        _ = n.n(j),
        v = () => {},
        b = (e) => {
          e.name;
          var t = e.key,
            n = e.isDragging,
            s = e.connectDragSource,
            r = (e.element, n ? 0.4 : 1),
            o = d()(_().tag);
          return s(
            (0, c.jsx)(
              'div',
              { className: o, style: { opacity: r }, children: e.children },
              t,
            ),
          );
        },
        Z = (e) => {
          var t = 'box',
            n = {
              beginDrag: e.begin,
              endDrag: e.end || v,
              canDrag: e.canDrag || v,
              isDragging: e.isDragging || v,
            },
            s = (e, t) => ({
              connectDragSource: e.dragSource(),
              isDragging: t.isDragging(),
            });
          return (0, x.E)(t, n, s)(b);
        };
      Z.prototype = {
        begin: m().func.isRequired,
        end: m().func,
        canDrag: m().func,
        isDragging: m().func,
        element: m().element,
      };
      var y = n(71810),
        D = (e) => {
          e.canDrop;
          var t = e.isOver,
            n = (e.allowedDropEffect, e.connectDropTarget),
            s = e.element;
          console.log('isOVer == ', t);
          var r = d()({ [_()['drag-to']]: t });
          return n((0, c.jsx)('div', { className: r, children: s }));
        },
        S = (e) => {
          var t = 'box',
            n = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            s = (e, t) => ({
              connectDropTarget: e.dropTarget(),
              isOver: t.isOver(),
              canDrop: t.canDrop(),
            });
          return (0, y.G)(t, n, s)((0, c.jsx)(D, { element: e.element }));
        };
      S.prototype = {
        drop: m().func.isRequired,
        hover: m().func,
        canDrag: m().func,
      };
    },
    18221: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          en: function () {
            return c;
          },
          zh: function () {
            return s;
          },
        });
      var s = {
          author: '\u5b87\u5b99\u6700\u5e05\u91d1\u5efa\u4e1a',
          why: '\u4e3a\u4ec0\u4e48',
          'who.save.world':
            '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}',
        },
        c = {
          author: 'universe handsome jianye',
          why: 'why',
          'who.save.world': '{who}~ come to save the world \uff01{encourage}',
        };
    },
    68910: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return de;
          },
        });
      var s = n(88986),
        c = n(13887),
        r = (n(24793), n(97183)),
        o = n(29323),
        i = n(81966),
        l = n(29558),
        a = n(18221),
        d = n(67294),
        h = n(43786),
        g = (n(49111), n(19650)),
        u = (n(48736), n(27049)),
        f = (n(57663), n(60404)),
        x = (n(57338), n(49888)),
        p = n(61386),
        m = n(52631),
        j = n.n(m),
        _ = n(85893),
        v = r.Z.Header,
        b =
          (r.Z.Content,
          (0, o.f3)('lcStore')(
            (0, o.Pi)((e) =>
              (0, _.jsx)(x.Z, {
                title: '\u6570\u636eJSON',
                width: 720,
                visible: e.visible,
                bodyStyle: { paddingBottom: 80 },
                onClose: () => {
                  e.close();
                },
                children: (0, _.jsx)(h.he, { json: e.lcStore.sections }),
              }),
            ),
          )),
        Z = () => {
          function e() {
            var e = sessionStorage.getItem('prevPath') || '/';
            p.m8.push(e);
          }
          var t = (0, d.useState)(!1),
            n = (0, c.Z)(t, 2),
            s = n[0],
            o = n[1];
          return (0, _.jsxs)(r.Z, {
            children: [
              (0, _.jsxs)(v, {
                className: j()['lc-header'],
                children: [
                  (0, _.jsxs)(g.Z, {
                    className: j()['lc-header-left'],
                    children: [
                      (0, _.jsx)(f.Z, {
                        type: 'link',
                        icon: (0, _.jsx)(h.JO, {
                          type: 'fullscreen-exit',
                          color: 'black',
                        }),
                        onClick: e,
                      }),
                      (0, _.jsx)(u.Z, {
                        type: 'vertical',
                        style: { borderColor: '#ddd', height: 30 },
                      }),
                      (0, _.jsx)('h1', { children: '\u8bbe\u8ba1\u5668' }),
                    ],
                  }),
                  (0, _.jsx)(g.Z, {
                    className: j()['lc-header-center'],
                    children: (0, _.jsx)('div', {}),
                  }),
                  (0, _.jsxs)(g.Z, {
                    className: j()['lc-header-right'],
                    children: [
                      (0, _.jsx)(f.Z, {
                        type: 'ghost',
                        icon: (0, _.jsx)(h.JO, { type: 'upload', size: 16 }),
                        children: '\u9884\u89c8',
                      }),
                      (0, _.jsx)(f.Z, {
                        type: 'primary',
                        icon: (0, _.jsx)(h.JO, { type: 'upload', size: 16 }),
                        onClick: () => o(!0),
                        children: '\u5bfc\u51fa',
                      }),
                      (0, _.jsx)(f.Z, {
                        type: 'primary',
                        icon: (0, _.jsx)(h.JO, { type: 'file-text', size: 16 }),
                        children: '\u4fdd\u5b58',
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(b, { visible: s, close: () => o(!1) }),
            ],
          });
        },
        y = Z,
        D = (n(18106), n(16351)),
        S = n(9669),
        w = n.n(S),
        C = () => w().get('api/jy-components'),
        E = (n(78707), n(45503)),
        N = (n(71153), n(60331)),
        T = n(71810),
        O = (e) => {
          var t = {
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
          return (0, _.jsx)(N.Z, {
            className: j().compo,
            style: (0, s.Z)({}, t),
            children: e.field.name,
          });
        },
        I = n(68949),
        k = n(94184),
        L = n.n(k),
        R = n(16941),
        z = (0, o.f3)('lcStore')(
          (0, o.Pi)((e) => {
            function t(t) {
              t.stopPropagation(), e.lcStore.addSection();
            }
            function n() {
              e.lcStore.selectSection(e.section.id);
            }
            var c = (t) => {
                e.lcStore.sortField(e.section.id, t);
              },
              r = e.section.id === e.lcStore.current['section'],
              o = L()({ [j().section]: !0, [j().selected]: r }),
              i = {
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
            return (0, _.jsxs)(E.Z, {
              className: o,
              size: 'small',
              title: '\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae',
              title: e.name,
              onClick: n,
              children: [
                e.section.fields.length ? null : (0, _.jsx)(N.Z, { style: l }),
                (0, _.jsx)(R._O, {
                  group: 'field-group',
                  animation: 200,
                  list: e.section.fields,
                  setList: c,
                  ghostClass: j()['sortable-ghost'],
                  chosenClass: j()['sortable-chosen'],
                  dragClass: j()['sortable-drag'],
                  children: e.section.fields.map((t) =>
                    (0, _.jsx)(O, (0, s.Z)((0, s.Z)({}, e), {}, { field: t })),
                  ),
                }),
                r
                  ? (0, _.jsx)('div', {
                      style: i,
                      className: j()['add-btn'],
                      onClick: t,
                      children: (0, _.jsx)(h.JO, {
                        type: 'plus-circle-fill',
                        size: 20,
                        color: '#2196f3',
                      }),
                    })
                  : null,
              ],
            });
          }),
        ),
        A = (e) => {
          var t = e.isOver,
            n = e.connectDropTarget,
            c = L()(j()['section-box'], { [j()['drag-to']]: t });
          return n(
            (0, _.jsx)('div', {
              className: c,
              children: (0, _.jsx)(z, (0, s.Z)({}, e)),
            }),
          );
        },
        H = 'box',
        P = {
          drop: (e) => {
            var t = e.allowedDropEffect,
              n = e.section;
            return {
              name: ''.concat(t, ' Dustbin'),
              section: (0, I.ZN)(n),
              allowedDropEffect: t,
            };
          },
        },
        U = (e, t) => ({
          connectDropTarget: e.dropTarget(),
          isOver: t.isOver(),
          canDrop: t.canDrop(),
        }),
        F = (0, T.G)(H, P, U)(A),
        J = (0, o.f3)('lcStore')(
          (0, o.Pi)((e) => {
            var t = (t) => {
                var n = t.filter((e) => void 0 !== e);
                e.lcStore.sortSection(n);
              },
              n = () =>
                (0, _.jsx)('div', { style: { width: '100%', height: 24 } });
            return (0, _.jsxs)(r.Z, {
              className: j()['lc-content-center'],
              children: [
                (0, _.jsx)(E.Z, {
                  size: 'small',
                  title: '\u89c6\u56fe\u64cd\u4f5c\u6309\u94ae',
                  style: { borderColor: '#d8d8d8' },
                  children: (0, _.jsx)(N.Z, {
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
                (0, _.jsx)(n, {}),
                (0, _.jsx)(R._O, {
                  animation: 200,
                  list: e.lcStore.sections,
                  setList: t,
                  chosenClass: j()['sortable-chosen'],
                  dragClass: j()['sortable-drag'],
                  children: e.lcStore.sections.map((e) =>
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(F, {
                          allowedDropEffect: 'move',
                          name: e.name,
                          id: e.id,
                          section: e,
                        }),
                        (0, _.jsx)(n, {}, 'row' + e.id),
                      ],
                    }),
                  ),
                }),
              ],
            });
          }),
        ),
        M = J,
        B = n(66934),
        G = (e) => {
          var t = e.name,
            n = e.key,
            s = e.isDragging,
            c = e.connectDragSource,
            r = s ? 0.4 : 1,
            o = L()(j().tag);
          return c(
            (0, _.jsx)(
              'div',
              {
                className: o,
                style: { opacity: r },
                children: (0, _.jsx)(N.Z, {
                  style: { width: '100%', height: '100%', lineHeight: '30px' },
                  children: t,
                }),
              },
              n,
            ),
          );
        },
        Q = 'box',
        V = {
          beginDrag: (e) => (0, s.Z)({ name: e.name }, e),
          endDrag(e, t) {
            t.getItem();
            var n = t.getDropResult();
            if ((console.log('drag target == ', e.source), n)) {
              console.log('drag to == ', (0, I.ZN)(n.section));
              var c = 1;
              n.section.fields.length &&
                (c = n.section.fields[n.section.fields.length - 1].id + 1);
              var r = (0, s.Z)({ id: c }, e.source);
              e.lcStore.addField(n.section.id, r);
            }
          },
        },
        W = (e, t) => ({
          connectDragSource: e.dragSource(),
          isDragging: t.isDragging(),
        }),
        X = (0, B.E)(Q, V, W)(G),
        q = [
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
        K = D.Z.TabPane,
        Y = (0, o.f3)('lcStore')(
          (0, o.Pi)((e) =>
            (0, _.jsx)('div', {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '0 20px',
              },
              children: e.data.map((t) =>
                (0, _.jsx)(X, (0, s.Z)({ name: t.name, source: t }, e), t.code),
              ),
            }),
          ),
        ),
        $ = () => {
          var e = (0, p.QT)(C);
          function t(e) {
            console.log(e);
          }
          return (
            (e.data = q),
            (0, d.useEffect)(() => {}, [e.data]),
            e.data
              ? (0, _.jsx)(r.Z, {
                  className: j()['lc-content-left'],
                  children: (0, _.jsxs)(D.Z, {
                    tabBarStyle: { padding: '0 24px' },
                    defaultActiveKey: 'components',
                    onChange: t,
                    children: [
                      (0, _.jsx)(
                        K,
                        {
                          tab: '\u7ec4\u4ef6',
                          children: (0, _.jsx)(Y, { data: e.data }),
                        },
                        'components',
                      ),
                      (0, _.jsx)(
                        K,
                        {
                          tab: '\u81ea\u5b9a\u4e49',
                          children: (0, _.jsx)(Y, { data: e.data }),
                        },
                        'customer',
                      ),
                    ],
                  }),
                })
              : (0, _.jsx)(h.gb, {})
          );
        },
        ee = $,
        te =
          (r.Z.Header,
          r.Z.Content,
          () =>
            (0, _.jsx)(r.Z, {
              className: j()['lc-content-right'],
              children: 'right',
            })),
        ne = te,
        se = n(61357),
        ce = n(57865),
        re = n(36346),
        oe = r.Z.Content,
        ie = l.Z,
        le = { locale: 'zh', author: 'jyjin' },
        ae = (e) => {
          var t = (0, d.useState)('zh'),
            n = (0, c.Z)(t, 2),
            l = n[0];
          n[1];
          return (0, _.jsx)(o.zt, {
            className: 'provider',
            global: le,
            intls: i,
            lcStore: re.Z,
            children: (0, _.jsx)(ie, {
              messages: a[l],
              locale: l,
              defaultLocale: l,
              children: (0, _.jsxs)(r.Z, {
                className: j().lc,
                children: [
                  (0, _.jsx)(y, {}),
                  (0, _.jsx)(oe, {
                    className: j()['lc-content'],
                    children: (0, _.jsxs)(
                      se.W,
                      (0, s.Z)(
                        (0, s.Z)({ backend: ce.PD }, e),
                        {},
                        {
                          children: [
                            (0, _.jsx)(ee, (0, s.Z)({}, e)),
                            (0, _.jsx)(M, (0, s.Z)({}, e)),
                            (0, _.jsx)(ne, (0, s.Z)({}, e)),
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
        de = ae;
    },
    36346: function (e, t, n) {
      'use strict';
      var s = n(88986),
        c = n(68949),
        r = [{ id: 1, name: '\u9ed8\u8ba4\u533a\u57df', cols: 1, fields: [] }];
      function o(e, t) {
        return e.find((e) => e.id === t);
      }
      function i(e, t) {
        var n = e.findIndex((e) => e.id === t);
        return e.splice(n, 1), e;
      }
      var l = (0, c.LO)({
        current: {},
        sections: r,
        selectSection(e) {
          (this.current['field'] = null),
            (this.current['section'] = e),
            (this.current = (0, s.Z)({}, this.current));
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
          i(this.sections, e), (this.sections = [...this.sections]);
        },
        addField(e, t) {
          o(this.sections, e).fields.push(t),
            (o(this.sections, e).fields = [...o(this.sections, e).fields]),
            (this.sections = [...this.sections]),
            console.log((0, c.ZN)(this.sections));
        },
        removeField(e, t) {
          i(o(this.sections, e).fields, t),
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
      t['Z'] = l;
    },
  },
]);
