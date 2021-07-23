(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    Fti1: function (e, t, r) {
      e.exports = { me: 'me___2ilDn', api: 'api___2fDbA' };
    },
    kuOM: function (e, t, r) {
      'use strict';
      r.r(t);
      var i = r('Fti1'),
        s = r.n(i),
        a = (r('q1tI'), r('TyAF')),
        n = r('2OET'),
        c = r('o8vM'),
        l = r('nKUr'),
        o = (e) =>
          Object(l['jsxs'])('div', {
            className: s.a['api'],
            children: [
              Object(l['jsx'])('h2', { children: e.title }),
              e.children,
            ],
          }),
        j = (e) => {
          console.log('props == ', e), console.log('props.intl == ', e.intl);
          var t = Object(c['a'])({
            'who.save.world': {
              id: 'test.define',
              defaultMessage:
                'zh' === e.locale
                  ? '{who}~ \u5feb\u6765\u62ef\u6551\u4e16\u754c\uff01{encourage}'
                  : '{who}~ come to save the world ! {encourage}',
            },
          });
          return Object(l['jsxs'])(l['Fragment'], {
            children: [
              Object(l['jsxs'])('h1', {
                children: ['\xa0\xa0me - ', e.global.author],
              }),
              Object(l['jsxs'])('div', {
                className: s.a['me'],
                children: [
                  Object(l['jsx'])('br', {}),
                  Object(l['jsxs'])(o, {
                    title: 'formatMessage',
                    children: [
                      'normal:',
                      Object(l['jsx'])('br', {}),
                      e.intl.formatMessage({ id: 'why' }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatMessage({
                        id: 'author',
                        description: 'test desc',
                      }),
                      Object(l['jsx'])('br', {}),
                      'variables:',
                      Object(l['jsx'])('br', {}),
                      e.intl.formatMessage(
                        { id: 'who.save.world' },
                        {
                          who:
                            'zh' === e.intl.locale ? '\u5efa\u4e1a' : 'jianye',
                          encourage: Object(l['jsx'])('b', {
                            children: '\u592a\u68d2\u4e86',
                          }),
                        },
                      ),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatMessage(t['who.save.world'], {
                        who: 'zh' === e.intl.locale ? '\u5efa\u4e1a' : 'jianye',
                        encourage: Object(l['jsx'])('b', {
                          children: '\u592a\u68d2\u4e86',
                        }),
                      }),
                      Object(l['jsx'])('br', {}),
                      'not exist:',
                      Object(l['jsx'])('br', {}),
                      e.intl.formatMessage({
                        id: 'welcome.message',
                        defaultMessage: 'test default message',
                        description: 'test desc',
                      }),
                    ],
                  }),
                  Object(l['jsx'])(o, {
                    title: 'formatDate',
                    children: e.intl.formatDate(Date.now(), {
                      year: 'numeric',
                      month: 'numeric',
                    }),
                  }),
                  Object(l['jsx'])(o, {
                    title: 'formatTime',
                    children: e.intl.formatTime(Date.now(), {
                      hour: 'numeric',
                      minute: 'numeric',
                    }),
                  }),
                  Object(l['jsxs'])(o, {
                    title: 'formatRelativeTime',
                    children: [
                      e.intl.formatRelativeTime(30),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatRelativeTime(-24, 'minute', {
                        style: 'narrow',
                      }),
                      Object(l['jsx'])('br', {}),
                    ],
                  }),
                  Object(l['jsxs'])(o, {
                    title: 'formatNumber',
                    children: [
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'USD',
                      }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'CNY',
                      }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatNumber(199.99, {
                        style: 'currency',
                        currency: 'RMB',
                      }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatNumber(1024, {
                        style: 'unit',
                        unit: 'kilobyte',
                        unitDisplay: 'narrow',
                      }),
                      Object(l['jsx'])('br', {}),
                    ],
                  }),
                  Object(l['jsx'])(o, {
                    title: 'formatList',
                    children: e.intl.formatList(['Me', 'myself', 'I'], {
                      type: 'conjunction',
                    }),
                  }),
                  Object(l['jsxs'])(o, {
                    title: 'formatDisplayName',
                    children: [
                      e.intl.formatDisplayName('zh-Hans-SG', {
                        type: 'language',
                      }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatDisplayName('Deva', { type: 'script' }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatDisplayName('CNY', { type: 'currency' }),
                      Object(l['jsx'])('br', {}),
                      e.intl.formatDisplayName('UN', { type: 'region' }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      t['default'] = Object(a['b'])('global', 'intls')(Object(n['c'])(j));
    },
    o8vM: function (e, t, r) {
      'use strict';
      function i(e) {
        return e;
      }
      r.d(t, 'a', function () {
        return i;
      });
    },
  },
]);
