(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [610],
  {
    4553: function (e) {
      e.exports = { graph: 'graph___2NCFA' };
    },
    49253: function (e, i, a) {
      'use strict';
      a.r(i);
      var l = a(67294),
        n = a(98822),
        s = a(4553),
        r = a.n(s),
        d = a(85893),
        t = {
          roots: [
            {
              id: '0',
              label: 'jyjin',
              collapsed: !1,
              children: [
                { id: '1', side: 'left', label: 'Main Topic 1' },
                { id: '2', side: 'right', label: 'Main Topic 2' },
                { id: '3', side: 'right', label: 'Main Topic 3' },
              ],
            },
          ],
        };
      class c extends l.Component {
        render() {
          return (0, d.jsx)(n.ZP, {
            children: (0, d.jsx)(n.CH, { className: r().graph, data: t }),
          });
        }
      }
      i['default'] = c;
    },
  },
]);
