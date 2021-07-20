(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [866],
  {
    40759: function (n) {
      n.exports = { index: 'index___28nWn' };
    },
    5928: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, {
          default: function () {
            return c;
          },
        });
      t(57663);
      var r = t(18222),
        a = (t(3317), t(49451)),
        i = t(40759),
        d = t.n(i),
        s = t(67294),
        o = (t(96486), t(15978)),
        p = t(85893);
      a.Z.Option;
      class c extends s.Component {
        constructor(n) {
          super(n);
        }
        renderBtns(n) {
          var e = n.path,
            t = n.name;
          return null !== e
            ? (0, p.jsx)(r.Z, {
                type: 'primary',
                onClick: () => {
                  o.m8.push(e);
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
          return (0, p.jsxs)('div', {
            className: d().index,
            children: [this.props.name, n.map(this.renderBtns)],
          });
        }
      }
    },
  },
]);
