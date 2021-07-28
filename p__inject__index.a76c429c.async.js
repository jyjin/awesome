(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [641],
  {
    29814: function (e, t, r) {
      'use strict';
      function s(e) {
        return e;
      }
      r.d(t, {
        vU: function () {
          return s;
        },
      });
    },
    83201: function (e) {
      e.exports = { me: 'me___2ilDn', api: 'api___2fDbA' };
    },
    98532: function (e, t, r) {
      'use strict';
      r.r(t);
      var s = r(83201),
        i = r.n(s),
        a = (r(67294), r(29323)),
        n = r(74806),
        l = r(29814),
        o = r(85893),
        c = (e) =>
          (0, o.jsxs)('div', {
            className: i().api,
            children: [(0, o.jsx)('h2', { children: e.title }), e.children],
          }),
        m = (e) => {
          console.log('props == ', e), console.log('props.intl == ', e.intl);
          var t = (0, l.vU)({
            'who.save.world': {
              id: 'test.define',
              defaultMessage:
                'zh' === e.locale
                  ? '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}'
                  : '{who}~ come to save the world ! {encourage}',
            },
          });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)('h1', {
                children: ['\xa0\xa0me - ', e.global.author],
              }),
              (0, o.jsxs)('div', {
                className: i().me,
                children: [
                  (0, o.jsx)('br', {}),
                  (0, o.jsxs)(c, {
                    title: 'formatMessage',
                    children: [
                      'normal:',
                      (0, o.jsx)('br', {}),
                      e.intl.formatMessage({ id: 'why' }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatMessage({
                        id: 'author',
                        description: 'test desc',
                      }),
                      (0, o.jsx)('br', {}),
                      'variables:',
                      (0, o.jsx)('br', {}),
                      e.intl.formatMessage(
                        { id: 'who.save.world' },
                        {
                          who:
                            'zh' === e.intl.locale ? '\u5efa\u4e1a' : 'jianye',
                          encourage: (0, o.jsx)('b', {
                            children: '\u592a\u68d2\u4e86',
                          }),
                        },
                      ),
                      (0, o.jsx)('br', {}),
                      e.intl.formatMessage(t['who.save.world'], {
                        who: 'zh' === e.intl.locale ? '\u5efa\u4e1a' : 'jianye',
                        encourage: (0, o.jsx)('b', {
                          children: '\u592a\u68d2\u4e86',
                        }),
                      }),
                      (0, o.jsx)('br', {}),
                      'not exist:',
                      (0, o.jsx)('br', {}),
                      e.intl.formatMessage({
                        id: 'welcome.message',
                        defaultMessage: 'test default message',
                        description: 'test desc',
                      }),
                    ],
                  }),
                  (0, o.jsx)(c, {
                    title: 'formatDate',
                    children: e.intl.formatDate(Date.now(), {
                      year: 'numeric',
                      month: 'numeric',
                    }),
                  }),
                  (0, o.jsx)(c, {
                    title: 'formatTime',
                    children: e.intl.formatTime(Date.now(), {
                      hour: 'numeric',
                      minute: 'numeric',
                    }),
                  }),
                  (0, o.jsxs)(c, {
                    title: 'formatRelativeTime',
                    children: [
                      e.intl.formatRelativeTime(30),
                      (0, o.jsx)('br', {}),
                      e.intl.formatRelativeTime(-24, 'minute', {
                        style: 'narrow',
                      }),
                      (0, o.jsx)('br', {}),
                    ],
                  }),
                  (0, o.jsxs)(c, {
                    title: 'formatNumber',
                    children: [
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'USD',
                      }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'CNY',
                      }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'RMB',
                      }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatNumber(1024, {
                        style: 'unit',
                        unit: 'kilobyte',
                        unitDisplay: 'narrow',
                      }),
                      (0, o.jsx)('br', {}),
                    ],
                  }),
                  (0, o.jsx)(c, {
                    title: 'formatList',
                    children: e.intl.formatList(['Me', 'myself', 'I'], {
                      type: 'conjunction',
                    }),
                  }),
                  (0, o.jsxs)(c, {
                    title: 'formatDisplayName',
                    children: [
                      e.intl.formatDisplayName('zh-Hans-SG', {
                        type: 'language',
                      }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatDisplayName('Deva', { type: 'script' }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatDisplayName('CNY', { type: 'currency' }),
                      (0, o.jsx)('br', {}),
                      e.intl.formatDisplayName('UN', { type: 'region' }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      t['default'] = (0, a.f3)('global', 'intls')((0, n.ZP)(m));
    },
  },
]);
