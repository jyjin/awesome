(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [512],
  {
    843: function (e) {
      e.exports = { title: 'title___3IJjE' };
    },
    69086: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        });
      s(57663);
      var n,
        o,
        r,
        c,
        l,
        i = s(60404),
        u = (s(843), s(67294)),
        a = s(29323),
        d = s(12938),
        h = s(68949),
        p = (0, h.LO)({
          count: 1,
          setCount() {
            (this.count += 1), console.log('count == ', this.count);
          },
        }),
        j = p,
        x = s(74806),
        f = s(85893),
        b =
          ((n = (0, a.f3)('global')),
          (o = (0, a.f3)('intls')),
          (r = Reflect.metadata('design:type', Function)),
          (c = Reflect.metadata('design:paramtypes', [void 0])),
          n(
            (l =
              o(
                (l =
                  (0, x.ZP)(
                    (l =
                      r(
                        (l =
                          c(
                            (l = class extends u.Component {
                              constructor(e) {
                                super(e), (this.state = {});
                              }
                              render() {
                                console.log('this.props == ', this.props);
                                var e = this.props.intls,
                                  t = e.FormattedMessage,
                                  s = e.FormattedNumber;
                                return (
                                  console.log(
                                    '\u663e\u793a\u6211\u5c31\u8bf4\u660e\u6574\u7406\u9875\u9762\u90fd\u5237\u65b0\u4e86',
                                  ),
                                  (0, f.jsxs)('div', {
                                    children: [
                                      (0, f.jsx)(d.Qj, {
                                        children: () =>
                                          (0, f.jsxs)('div', {
                                            children: [
                                              '\u8bf7\u5173\u95ed@observe\u6d4b\u8bd5\u6211\u7684\u6548\u679c\uff0c\u6ce8\u610f\u5fc5\u987b\u662f\u51fd\u6570\u7ec4\u4ef6\uff0c\u524d\u9762\u6709\u7bad\u5934\u51fd\u6570 ',
                                              (0, f.jsx)('b', {
                                                style: { color: 'red' },
                                                children: j.count,
                                              }),
                                            ],
                                          }),
                                      }),
                                      (0, f.jsx)(i.Z, {
                                        onClick: () => {
                                          j.setCount();
                                        },
                                        children:
                                          '\u6d4b\u8bd5store\u662f\u5426\u5237\u65b0',
                                      }),
                                      (0, f.jsx)('div', {
                                        children: this.props.global.name,
                                      }),
                                      (0, f.jsx)(t, { id: 'author' }),
                                      (0, f.jsx)('br', {}),
                                      'formatNumber:',
                                      (0, f.jsx)('br', {}),
                                      (0, f.jsx)(s, {
                                        value: 19,
                                        style: 'currency',
                                        currency: 'RMB',
                                      }),
                                    ],
                                  })
                                );
                              }
                            }),
                          ) || l),
                      ) || l),
                  ) || l),
              ) || l),
          ) || l);
    },
  },
]);
