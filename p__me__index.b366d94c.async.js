(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    QmrJ: function (e, t, s) {
      e.exports = { me: 'me___3XEIw', api: 'api___3sE-_' };
    },
    jYCa: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return d;
        });
      var r,
        i,
        o,
        a,
        n = s('QmrJ'),
        c = s.n(n),
        l = s('q1tI'),
        p = s.n(l),
        j = s('TyAF'),
        m = s('2OET'),
        b = s('o8vM'),
        h = s('nKUr'),
        u = (e) =>
          Object(h['jsxs'])('div', {
            className: c.a['api'],
            children: [
              Object(h['jsx'])('h2', { children: e.title }),
              e.children,
            ],
          }),
        d =
          ((r = Object(j['b'])('global')),
          (i = Reflect.metadata('design:type', Function)),
          (o = Reflect.metadata('design:paramtypes', [void 0])),
          r(
            (a =
              Object(m['c'])(
                (a =
                  i(
                    (a =
                      o(
                        (a = class extends p.a.Component {
                          constructor(e) {
                            super(e), (this.state = {});
                          }
                          render() {
                            console.log('this.props == ', this.props),
                              console.log(
                                'this.props.intl == ',
                                this.props.intl,
                              );
                            var e = Object(b['a'])({
                              'who.save.world': {
                                id: 'test.define',
                                defaultMessage:
                                  'zh' === this.props.locale
                                    ? '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}'
                                    : '{who}~ come to save the world ! {encourage}',
                              },
                            });
                            return Object(h['jsxs'])(h['Fragment'], {
                              children: [
                                Object(h['jsx'])('h1', {
                                  children: '\xa0\xa0me',
                                }),
                                Object(h['jsxs'])('div', {
                                  className: c.a['me'],
                                  children: [
                                    Object(h['jsx'])('br', {}),
                                    Object(h['jsxs'])(u, {
                                      title: 'formatMessage',
                                      children: [
                                        'normal:',
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'why',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'author',
                                          description: 'test desc',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                        'variables:',
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatMessage(
                                          { id: 'who.save.world' },
                                          {
                                            who:
                                              'zh' === this.props.intl.locale
                                                ? '\u5efa\u4e1a'
                                                : 'jianye',
                                            encourage: Object(h['jsx'])('b', {
                                              children: '\u592a\u68d2\u4e86',
                                            }),
                                          },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatMessage(
                                          e['who.save.world'],
                                          {
                                            who:
                                              'zh' === this.props.intl.locale
                                                ? '\u5efa\u4e1a'
                                                : 'jianye',
                                            encourage: Object(h['jsx'])('b', {
                                              children: '\u592a\u68d2\u4e86',
                                            }),
                                          },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                        'not exist:',
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'welcome.message',
                                          defaultMessage:
                                            'test default message',
                                          description: 'test desc',
                                        }),
                                      ],
                                    }),
                                    Object(h['jsx'])(u, {
                                      title: 'formatDate',
                                      children: this.props.intl.formatDate(
                                        Date.now(),
                                        { year: 'numeric', month: 'numeric' },
                                      ),
                                    }),
                                    Object(h['jsx'])(u, {
                                      title: 'formatTime',
                                      children: this.props.intl.formatTime(
                                        Date.now(),
                                        { hour: 'numeric', minute: 'numeric' },
                                      ),
                                    }),
                                    Object(h['jsxs'])(u, {
                                      title: 'formatRelativeTime',
                                      children: [
                                        this.props.intl.formatRelativeTime(30),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatRelativeTime(
                                          -24,
                                          'minute',
                                          { style: 'narrow' },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                      ],
                                    }),
                                    Object(h['jsxs'])(u, {
                                      title: 'formatNumber',
                                      children: [
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'USD',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'CNY',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'RMB',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatNumber(1024, {
                                          style: 'unit',
                                          unit: 'kilobyte',
                                          unitDisplay: 'narrow',
                                        }),
                                        Object(h['jsx'])('br', {}),
                                      ],
                                    }),
                                    Object(h['jsx'])(u, {
                                      title: 'formatList',
                                      children: this.props.intl.formatList(
                                        ['Me', 'myself', 'I'],
                                        { type: 'conjunction' },
                                      ),
                                    }),
                                    Object(h['jsxs'])(u, {
                                      title: 'formatDisplayName',
                                      children: [
                                        this.props.intl.formatDisplayName(
                                          'zh-Hans-SG',
                                          { type: 'language' },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatDisplayName(
                                          'Deva',
                                          { type: 'script' },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatDisplayName(
                                          'CNY',
                                          { type: 'currency' },
                                        ),
                                        Object(h['jsx'])('br', {}),
                                        this.props.intl.formatDisplayName(
                                          'UN',
                                          { type: 'region' },
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            });
                          }
                        }),
                      ) || a),
                  ) || a),
              ) || a),
          ) || a);
    },
    o8vM: function (e, t, s) {
      'use strict';
      function r(e) {
        return e;
      }
      s.d(t, 'a', function () {
        return r;
      });
    },
  },
]);
