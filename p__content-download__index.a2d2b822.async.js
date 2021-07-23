(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '4spG': function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return u;
        });
      n('+L6B');
      var a = n('2/Rp'),
        i = n('q1tI'),
        o = n.n(i),
        s = n('Kvkj'),
        r = n('vDqi'),
        c = n.n(r),
        l = n('TSYQ'),
        d = n.n(l),
        j = n('e+fe'),
        p = n.n(j),
        h = n('nKUr');
      class u extends o.a.Component {
        constructor(t) {
          super(t),
            (this.state = { i: 0, data: '' }),
            (this.getDataDelay = this.getDataDelay.bind(this)),
            (this.getDataLoop = this.getDataLoop.bind(this));
        }
        componentWillMount() {
          this.complicatedRenderPage();
        }
        complicatedRenderPage() {
          for (var t = 0; t < 100; t++) this.setState({ i: t });
        }
        getDataDelay() {
          c.a.get('/api/delay').then((t) => {
            this.setState({ data: t.data });
          });
        }
        getDataLoop() {
          c.a.get('/api/loop').then((t) => {});
        }
        onClick() {
          for (var t = 0; t < 10; t++) this.getDataDelay();
        }
        render() {
          var t = d()(p.a['content-download']);
          return Object(h['jsxs'])('div', {
            children: [
              Object(h['jsx'])('h1', {
                children:
                  '\u70b9\u51fb\u3010\u6d4b\u8bd5content download\u3011\u53d1\u51fa\u8bf7\u6c42\uff0c\u518d\u70b9\u51fb\u3010\u8ba9\u670d\u52a1\u53d8\u5361\u3011\u89c2\u5bdf\u8bf7\u6c42content download',
              }),
              Object(h['jsxs'])('div', {
                className: t,
                children: [
                  Object(h['jsx'])(a['a'], {
                    type: 'primary',
                    onClick: this.onClick.bind(this),
                    children: '\u6d4b\u8bd5content download',
                  }),
                  Object(h['jsx'])(a['a'], {
                    type: 'primary',
                    onClick: () => {
                      this.getDataLoop();
                    },
                    children: '\u8ba9\u670d\u52a1\u53d8\u5361',
                  }),
                  Object(h['jsx'])(a['a'], {
                    type: 'primary',
                    onClick: () => {
                      c.a.get('/api/menus').then((t) => {
                        this.setState({ menuData: t });
                      });
                    },
                    children: '\u6d4b\u8bd5mock',
                  }),
                ],
              }),
              Object(h['jsx'])('br', {}),
              this.state.menuData
                ? '\u8fd9\u91cc\u662faxios\u8bf7\u6c42\u7684\u672c\u5730mock\u6a21\u62df\u6570\u636e\uff0c\u5c4c\u4e0d\u5c4c\uff1f'
                : '',
              this.state.i
                ? '\u5148\u6765\u4ed6'.concat(
                    this.state.i,
                    '\u6b21\u6e32\u67d3',
                  )
                : null,
              Object(h['jsx'])('br', {}),
              Object(h['jsx'])('br', {}),
              Object(h['jsx'])(s['b'], { json: this.state.menuData }),
              Object(h['jsx'])(s['b'], { json: this.state.data }),
              Object(h['jsx'])(s['c'], {
                tip: '\u62fc\u547d\u52a0\u8f7d\u4e2d...',
              }),
            ],
          });
        }
      }
    },
    A6bi: function (t, e, n) {
      t.exports = {
        flex: 'flex___18rEB',
        'json-viewer': 'json-viewer___67rUi',
      };
    },
    Kvkj: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      }),
        n.d(e, 'c', function () {
          return c['a'];
        }),
        n.d(e, 'b', function () {
          return u;
        });
      var a = n('R+Pm'),
        i = n('nKUr'),
        o = Object(a['a'])({
          scriptUrl: '//at.alicdn.com/t/font_2677882_utwoxi0h459.js',
        }),
        s = (t) => {
          var e = {};
          return (
            t.size && (e.fontSize = t.size),
            t.color && (e.color = t.color),
            Object(i['jsx'])(o, { type: 'icon-'.concat(t.type), style: e })
          );
        },
        r = s,
        c = n('Ir2J'),
        l = n('TSYQ'),
        d = n.n(l),
        j = n('A6bi'),
        p = n.n(j),
        h = (t) => {
          var e = t.json;
          if (!e)
            return (
              console.warn("[ JSON Viewer ] == 'json' shouldn't be null"), null
            );
          var n = d()(p.a['json-viewer'], 'jyjin');
          return Object(i['jsx'])('pre', {
            className: n,
            children: JSON.stringify(e, null, 2),
          });
        },
        u = h;
    },
    'e+fe': function (t, e, n) {
      t.exports = {
        flex: 'flex___2dm7d',
        'content-download': 'content-download___syE_n',
        api: 'api___2k62r',
      };
    },
  },
]);
