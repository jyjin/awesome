(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    RKie: function (n, e, t) {
      n.exports = { index: 'index___28nWn' };
    },
    RXBc: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'default', function () {
          return l;
        });
      t('+L6B');
      var a = t('2/Rp'),
        r = (t('OaEy'), t('2fM7')),
        i = t('RKie'),
        d = t.n(i),
        o = t('q1tI'),
        s = t.n(o),
        p = (t('LvDl'), t('9kvl')),
        c = t('nKUr');
      r['a'].Option;
      class l extends s.a.Component {
        constructor(n) {
          super(n);
        }
        renderBtns(n) {
          var e = n.path,
            t = n.name;
          return null !== e
            ? Object(c['jsx'])(a['a'], {
                type: 'primary',
                onClick: () => {
                  p['a'].push(e);
                },
                children: t,
              })
            : null;
        }
        render() {
          var n = [
            {
              id: 1,
              path: '/me',
              name: 'react-intl \u63a8\u8350\u7528\u6cd5-JS\u7528\u6cd5',
            },
            {
              id: 2,
              path: '/home',
              name: 'react-intl \u7528\u6cd5-\u6807\u7b7e\u7528\u6cd5',
            },
            {
              id: 3,
              path: '/content-download',
              name: '\u6d4b\u8bd5content download',
            },
            { id: 4, path: '/ggeditor', name: '\u6d4b\u8bd5ggeditor' },
          ];
          return Object(c['jsxs'])('div', {
            className: d.a['index'],
            children: [this.props.name, n.map(this.renderBtns)],
          });
        }
      }
    },
  },
]);
