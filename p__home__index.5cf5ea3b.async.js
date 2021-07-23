(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    '4EvU': function (t, e, s) {
      'use strict';
      s.r(e),
        s.d(e, 'default', function () {
          return m;
        });
      s('+L6B');
      var c,
        o,
        n,
        r,
        i,
        a = s('2/Rp'),
        l = (s('U0+B'), s('q1tI')),
        b = s.n(l),
        j = s('TyAF'),
        d = s('aoTL'),
        u = s('aFzQ'),
        p = Object(u['m'])({
          count: 1,
          setCount() {
            (this.count += 1), console.log('count == ', this.count);
          },
        }),
        h = p,
        O = s('2OET'),
        x = s('nKUr'),
        m =
          ((c = Object(j['b'])('global')),
          (o = Object(j['b'])('intls')),
          (n = Reflect.metadata('design:type', Function)),
          (r = Reflect.metadata('design:paramtypes', [void 0])),
          c(
            (i =
              o(
                (i =
                  Object(O['c'])(
                    (i =
                      n(
                        (i =
                          r(
                            (i = class extends b.a.Component {
                              constructor(t) {
                                super(t), (this.state = {});
                              }
                              render() {
                                console.log('this.props == ', this.props);
                                var t = this.props.intls,
                                  e = t.FormattedMessage,
                                  s = t.FormattedNumber;
                                return (
                                  console.log(
                                    '\u663e\u793a\u6211\u5c31\u8bf4\u660e\u6574\u7406\u9875\u9762\u90fd\u5237\u65b0\u4e86',
                                  ),
                                  Object(x['jsxs'])('div', {
                                    children: [
                                      Object(x['jsx'])(d['a'], {
                                        children: () =>
                                          Object(x['jsxs'])('div', {
                                            children: [
                                              '\u8bf7\u5173\u95ed@observe\u6d4b\u8bd5\u6211\u7684\u6548\u679c\uff0c\u6ce8\u610f\u5fc5\u987b\u662f\u51fd\u6570\u7ec4\u4ef6\uff0c\u524d\u9762\u6709\u7bad\u5934\u51fd\u6570 ',
                                              Object(x['jsx'])('b', {
                                                style: { color: 'red' },
                                                children: h.count,
                                              }),
                                            ],
                                          }),
                                      }),
                                      Object(x['jsx'])(a['a'], {
                                        onClick: () => {
                                          h.setCount();
                                        },
                                        children:
                                          '\u6d4b\u8bd5store\u662f\u5426\u5237\u65b0',
                                      }),
                                      Object(x['jsx'])('div', {
                                        children: this.props.global.name,
                                      }),
                                      Object(x['jsx'])(e, { id: 'author' }),
                                      Object(x['jsx'])('br', {}),
                                      'formatNumber:',
                                      Object(x['jsx'])('br', {}),
                                      Object(x['jsx'])(s, {
                                        value: 19,
                                        style: 'currency',
                                        currency: 'RMB',
                                      }),
                                    ],
                                  })
                                );
                              }
                            }),
                          ) || i),
                      ) || i),
                  ) || i),
              ) || i),
          ) || i);
    },
    'U0+B': function (t, e, s) {
      t.exports = { title: 'title___3IJjE' };
    },
  },
]);
