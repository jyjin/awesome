(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [29],
  {
    51270: function (s) {
      s.exports = {
        flex: 'flex___2QZNw',
        'sortable-ghost': 'sortable-ghost___2NXDM',
        'sortable-chosen': 'sortable-chosen___TUKtO',
        'sortable-drag': 'sortable-drag___1pEco',
      };
    },
    43667: function (s, e, t) {
      'use strict';
      t.r(e);
      var a = t(13887),
        r = t(67294),
        o = t(16941),
        n = t(51270),
        l = t.n(n),
        h = t(85893);
      e['default'] = () => {
        var s = [
            {
              id: 1,
              name: '\u4eba\u6700\u5b9d\u8d35\u7684\u751f\u547d',
              chosen: !1,
            },
            {
              id: 2,
              name: '\u4eba\u7684\u751f\u547d\u53ea\u6709\u4e00\u6b21',
              selected: !1,
            },
            {
              id: 3,
              name:
                '\u4eba\u7684\u4e00\u751f\u5e94\u5f53\u8fd9\u6837\u5ea6\u8fc7',
            },
          ],
          e = (0, r.useState)(s),
          t = (0, a.Z)(e, 2),
          n = t[0],
          i = t[1];
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)('h1', {
              children: 'React-sortablejs\u62d6\u62fd\u6f14\u793a',
            }),
            (0, h.jsxs)('h4', {
              children: [
                '\u4eae\u70b9\uff1a\u53ef\u4ee5\u5b9a\u5236\u62d6\u62fd\u7684\u865a\u7ebf\u6837\u5f0f,',
                ' ',
                (0, h.jsx)('a', {
                  href: 'https://hub.fastgit.org/SortableJS/Sortable#options',
                  target: '_blank',
                  children: '\u6233\u6211API',
                }),
              ],
            }),
            (0, h.jsx)(o._O, {
              animation: 200,
              list: n,
              setList: i,
              ghostClass: l()['sortable-ghost'],
              chosenClass: l()['sortable-chosen'],
              dragClass: l()['sortable-drag'],
              children: n.map((s) =>
                (0, h.jsx)(
                  'div',
                  {
                    style: {
                      padding: 10,
                      marginBottom: 14,
                      background: '#fff',
                    },
                    children: s.name,
                  },
                  s.id,
                ),
              ),
            }),
          ],
        });
      };
    },
  },
]);
