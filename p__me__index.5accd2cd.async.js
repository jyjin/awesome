(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [929],
  {
    29814: function (e, t, s) {
      'use strict';
      function r(e) {
        return e;
      }
      s.d(t, {
        vU: function () {
          return r;
        },
      });
    },
    25044: function (e) {
      e.exports = { me: 'me___3XEIw', api: 'api___3sE-_' };
    },
    27300: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var r,
        i,
        n,
        o,
        a = s(25044),
        l = s.n(a),
        p = s(67294),
        c = s(29323),
        m = s(74806),
        h = s(29814),
        u = s(85893),
        d = (e) =>
          (0, u.jsxs)('div', {
            className: l().api,
            children: [(0, u.jsx)('h2', { children: e.title }), e.children],
          }),
        f =
          ((r = (0, c.f3)('global')),
          (i = Reflect.metadata('design:type', Function)),
          (n = Reflect.metadata('design:paramtypes', [void 0])),
          r(
            (o =
              (0, m.ZP)(
                (o =
                  i(
                    (o =
                      n(
                        (o = class extends p.Component {
                          constructor(e) {
                            super(e), (this.state = {});
                          }
                          render() {
                            console.log('this.props == ', this.props),
                              console.log(
                                'this.props.intl == ',
                                this.props.intl,
                              );
                            var e = (0, h.vU)({
                              'who.save.world': {
                                id: 'test.define',
                                defaultMessage:
                                  'zh' === this.props.locale
                                    ? '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}'
                                    : '{who}~ come to save the world ! {encourage}',
                              },
                            });
                            return (0, u.jsxs)(u.Fragment, {
                              children: [
                                (0, u.jsx)('h1', { children: '\xa0\xa0me' }),
                                (0, u.jsxs)('div', {
                                  className: l().me,
                                  children: [
                                    (0, u.jsx)('br', {}),
                                    (0, u.jsxs)(d, {
                                      title: 'formatMessage',
                                      children: [
                                        'normal:',
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'why',
                                        }),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'author',
                                          description: 'test desc',
                                        }),
                                        (0, u.jsx)('br', {}),
                                        'variables:',
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatMessage(
                                          { id: 'who.save.world' },
                                          {
                                            who:
                                              'zh' === this.props.intl.locale
                                                ? '\u5efa\u4e1a'
                                                : 'jianye',
                                            encourage: (0, u.jsx)('b', {
                                              children: '\u592a\u68d2\u4e86',
                                            }),
                                          },
                                        ),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatMessage(
                                          e['who.save.world'],
                                          {
                                            who:
                                              'zh' === this.props.intl.locale
                                                ? '\u5efa\u4e1a'
                                                : 'jianye',
                                            encourage: (0, u.jsx)('b', {
                                              children: '\u592a\u68d2\u4e86',
                                            }),
                                          },
                                        ),
                                        (0, u.jsx)('br', {}),
                                        'not exist:',
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatMessage({
                                          id: 'welcome.message',
                                          defaultMessage:
                                            'test default message',
                                          description: 'test desc',
                                        }),
                                      ],
                                    }),
                                    (0, u.jsx)(d, {
                                      title: 'formatDate',
                                      children: this.props.intl.formatDate(
                                        Date.now(),
                                        { year: 'numeric', month: 'numeric' },
                                      ),
                                    }),
                                    (0, u.jsx)(d, {
                                      title: 'formatTime',
                                      children: this.props.intl.formatTime(
                                        Date.now(),
                                        { hour: 'numeric', minute: 'numeric' },
                                      ),
                                    }),
                                    (0, u.jsxs)(d, {
                                      title: 'formatRelativeTime',
                                      children: [
                                        this.props.intl.formatRelativeTime(30),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatRelativeTime(
                                          -24,
                                          'minute',
                                          { style: 'narrow' },
                                        ),
                                        (0, u.jsx)('br', {}),
                                      ],
                                    }),
                                    (0, u.jsxs)(d, {
                                      title: 'formatNumber',
                                      children: [
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'USD',
                                        }),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'CNY',
                                        }),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatNumber(199.99, {
                                          style: 'currency',
                                          currency: 'RMB',
                                        }),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatNumber(1024, {
                                          style: 'unit',
                                          unit: 'kilobyte',
                                          unitDisplay: 'narrow',
                                        }),
                                        (0, u.jsx)('br', {}),
                                      ],
                                    }),
                                    (0, u.jsx)(d, {
                                      title: 'formatList',
                                      children: this.props.intl.formatList(
                                        ['Me', 'myself', 'I'],
                                        { type: 'conjunction' },
                                      ),
                                    }),
                                    (0, u.jsxs)(d, {
                                      title: 'formatDisplayName',
                                      children: [
                                        this.props.intl.formatDisplayName(
                                          'zh-Hans-SG',
                                          { type: 'language' },
                                        ),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatDisplayName(
                                          'Deva',
                                          { type: 'script' },
                                        ),
                                        (0, u.jsx)('br', {}),
                                        this.props.intl.formatDisplayName(
                                          'CNY',
                                          { type: 'currency' },
                                        ),
                                        (0, u.jsx)('br', {}),
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
                      ) || o),
                  ) || o),
              ) || o),
          ) || o);
    },
  },
]);
