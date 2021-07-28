(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [203],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    41093: function (e) {
      e.exports = {
        flex: 'flex___2dm7d',
        'content-download': 'content-download___syE_n',
        api: 'api___2k62r',
      };
    },
    43786: function (e, n, t) {
      'use strict';
      t.d(n, {
        JO: function () {
          return s;
        },
        he: function () {
          return h;
        },
        gb: function () {
          return c.Z;
        },
      });
      var r = t(45976),
        a = t(85893),
        o = (0, r.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        i = (e) => {
          var n = {};
          return (
            e.size && (n.fontSize = e.size),
            e.color && (n.color = e.color),
            (0, a.jsx)(o, { type: 'icon-'.concat(e.type), style: n })
          );
        },
        s = i,
        c = t(57136),
        l = t(94184),
        d = t.n(l),
        g = t(98085),
        u = t.n(g),
        p = (e) => {
          var n = e.json;
          if (!n)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var t = d()(u()['json-viewer'], 'jyjin');
          return (0, a.jsx)('pre', {
            className: t,
            children: JSON.stringify(n, null, 2),
          });
        },
        h = p,
        D = t(66934),
        f = t(45697),
        v = t.n(f),
        j = t(22677),
        x = t.n(j),
        m = () => {},
        y = (e) => {
          e.name;
          var n = e.key,
            t = e.isDragging,
            r = e.connectDragSource,
            o = (e.element, t ? 0.4 : 1),
            i = d()(x().tag);
          return r(
            (0, a.jsx)(
              'div',
              { className: i, style: { opacity: o }, children: e.children },
              n,
            ),
          );
        },
        _ = (e) => {
          var n = 'box',
            t = {
              beginDrag: e.begin,
              endDrag: e.end || m,
              canDrag: e.canDrag || m,
              isDragging: e.isDragging || m,
            },
            r = (e, n) => ({
              connectDragSource: e.dragSource(),
              isDragging: n.isDragging(),
            });
          return (0, D.E)(n, t, r)(y);
        };
      _.prototype = {
        begin: v().func.isRequired,
        end: v().func,
        canDrag: v().func,
        isDragging: v().func,
        element: v().element,
      };
      var b = t(71810),
        w = (e) => {
          e.canDrop;
          var n = e.isOver,
            t = (e.allowedDropEffect, e.connectDropTarget),
            r = e.element;
          console.log('isOVer == ', n);
          var o = d()({ [x()['drag-to']]: n });
          return t((0, a.jsx)('div', { className: o, children: r }));
        },
        k = (e) => {
          var n = 'box',
            t = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            r = (e, n) => ({
              connectDropTarget: e.dropTarget(),
              isOver: n.isOver(),
              canDrop: n.canDrop(),
            });
          return (0, b.G)(n, t, r)((0, a.jsx)(w, { element: e.element }));
        };
      k.prototype = {
        drop: v().func.isRequired,
        hover: v().func,
        canDrag: v().func,
      };
    },
    15677: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        });
      t(57663);
      var r = t(60404),
        a = t(67294),
        o = t(43786),
        i = t(9669),
        s = t.n(i),
        c = t(94184),
        l = t.n(c),
        d = t(41093),
        g = t.n(d),
        u = t(85893);
      class p extends a.Component {
        constructor(e) {
          super(e),
            (this.state = { i: 0, data: '' }),
            (this.getDataDelay = this.getDataDelay.bind(this)),
            (this.getDataLoop = this.getDataLoop.bind(this));
        }
        componentWillMount() {
          this.complicatedRenderPage();
        }
        complicatedRenderPage() {
          for (var e = 0; e < 100; e++) this.setState({ i: e });
        }
        getDataDelay() {
          s()
            .get('/api/delay')
            .then((e) => {
              this.setState({ data: e.data });
            });
        }
        getDataLoop() {
          s()
            .get('/api/loop')
            .then((e) => {});
        }
        onClick() {
          for (var e = 0; e < 10; e++) this.getDataDelay();
        }
        render() {
          var e = l()(g()['content-download']);
          return (0, u.jsxs)('div', {
            children: [
              (0, u.jsx)('h1', {
                children:
                  '\u70b9\u51fb\u3010\u6d4b\u8bd5content download\u3011\u53d1\u51fa\u8bf7\u6c42\uff0c\u518d\u70b9\u51fb\u3010\u8ba9\u670d\u52a1\u53d8\u5361\u3011\u89c2\u5bdf\u8bf7\u6c42content download',
              }),
              (0, u.jsxs)('div', {
                className: e,
                children: [
                  (0, u.jsx)(r.Z, {
                    type: 'primary',
                    onClick: this.onClick.bind(this),
                    children: '\u6d4b\u8bd5content download',
                  }),
                  (0, u.jsx)(r.Z, {
                    type: 'primary',
                    onClick: () => {
                      this.getDataLoop();
                    },
                    children: '\u8ba9\u670d\u52a1\u53d8\u5361',
                  }),
                  (0, u.jsx)(r.Z, {
                    type: 'primary',
                    onClick: () => {
                      s()
                        .get('/api/menus')
                        .then((e) => {
                          this.setState({ menuData: e });
                        });
                    },
                    children: '\u6d4b\u8bd5mock',
                  }),
                ],
              }),
              (0, u.jsx)('br', {}),
              this.state.menuData
                ? '\u8fd9\u91cc\u662faxios\u8bf7\u6c42\u7684\u672c\u5730mock\u6a21\u62df\u6570\u636e\uff0c\u5c4c\u4e0d\u5c4c\uff1f'
                : '',
              this.state.i
                ? '\u5148\u6765\u4ed6'.concat(
                    this.state.i,
                    '\u6b21\u6e32\u67d3',
                  )
                : null,
              (0, u.jsx)('br', {}),
              (0, u.jsx)('br', {}),
              (0, u.jsx)(o.he, { json: this.state.menuData }),
              (0, u.jsx)(o.he, { json: this.state.data }),
              (0, u.jsx)(o.gb, { tip: '\u62fc\u547d\u52a0\u8f7d\u4e2d...' }),
            ],
          });
        }
      }
    },
  },
]);
