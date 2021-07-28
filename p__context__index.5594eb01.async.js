(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [530],
  {
    22677: function () {},
    98085: function (e) {
      e.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    43786: function (e, r, n) {
      'use strict';
      n.d(r, {
        JO: function () {
          return i;
        },
        he: function () {
          return v;
        },
        gb: function () {
          return s.Z;
        },
      });
      var o = n(45976),
        t = n(85893),
        c = (0, o.Z)({
          scriptUrl: '//at.alicdn.com/t/font_2677882_5rpv8e0z9w5.js',
        }),
        a = (e) => {
          var r = {};
          return (
            e.size && (r.fontSize = e.size),
            e.color && (r.color = e.color),
            (0, t.jsx)(c, { type: 'icon-'.concat(e.type), style: r })
          );
        },
        i = a,
        s = n(57136),
        l = n(94184),
        u = n.n(l),
        g = n(98085),
        d = n.n(g),
        p = (e) => {
          var r = e.json;
          if (!r)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = u()(d()['json-viewer'], 'jyjin');
          return (0, t.jsx)('pre', {
            className: n,
            children: JSON.stringify(r, null, 2),
          });
        },
        v = p,
        f = n(66934),
        D = n(45697),
        j = n.n(D),
        x = n(22677),
        h = n.n(x),
        m = () => {},
        y = (e) => {
          e.name;
          var r = e.key,
            n = e.isDragging,
            o = e.connectDragSource,
            c = (e.element, n ? 0.4 : 1),
            a = u()(h().tag);
          return o(
            (0, t.jsx)(
              'div',
              { className: a, style: { opacity: c }, children: e.children },
              r,
            ),
          );
        },
        b = (e) => {
          var r = 'box',
            n = {
              beginDrag: e.begin,
              endDrag: e.end || m,
              canDrag: e.canDrag || m,
              isDragging: e.isDragging || m,
            },
            o = (e, r) => ({
              connectDragSource: e.dragSource(),
              isDragging: r.isDragging(),
            });
          return (0, f.E)(r, n, o)(y);
        };
      b.prototype = {
        begin: j().func.isRequired,
        end: j().func,
        canDrag: j().func,
        isDragging: j().func,
        element: j().element,
      };
      var w = n(71810),
        _ = (e) => {
          e.canDrop;
          var r = e.isOver,
            n = (e.allowedDropEffect, e.connectDropTarget),
            o = e.element;
          console.log('isOVer == ', r);
          var c = u()({ [h()['drag-to']]: r });
          return n((0, t.jsx)('div', { className: c, children: o }));
        },
        O = (e) => {
          var r = 'box',
            n = { drop: e.drop, hover: e.hover, canDrop: e.canDrop },
            o = (e, r) => ({
              connectDropTarget: e.dropTarget(),
              isOver: r.isOver(),
              canDrop: r.canDrop(),
            });
          return (0, w.G)(r, n, o)((0, t.jsx)(_, { element: e.element }));
        };
      O.prototype = {
        drop: j().func.isRequired,
        hover: j().func,
        canDrag: j().func,
      };
    },
    3948: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return g;
          },
        });
      var o = n(67294),
        t = n(85893),
        c = o.createContext(),
        a = c,
        i = c.Provider,
        s = (e) => {
          var r = { name: 'jyjin' };
          return (
            console.log('context store == ', e),
            (0, t.jsx)(i, { value: r, test: '123', children: e.children })
          );
        },
        l = n(43786),
        u = (e) => {
          var r = o.useContext(a);
          return (
            console.log('context == ', e, r),
            (0, t.jsxs)('div', {
              children: ['I am a app;', (0, t.jsx)(l.he, { json: r })],
            })
          );
        },
        g = () => (0, t.jsx)(s, { children: (0, t.jsx)(u, {}) });
    },
  },
]);
