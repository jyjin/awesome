(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [203],
  {
    41093: function (e) {
      e.exports = { me: 'me___3hrCx', api: 'api___2k62r' };
    },
    15677: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      n(57663);
      var r = n(18222),
        o = (n(41093), n(67294)),
        s = n(85893),
        i = n(9669),
        a = 'http://127.0.0.1',
        u = '8080',
        c = a + ':' + u;
      class f extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { i: 0, data: '' }),
            (this.getData = this.getData.bind(this)),
            (this.getDataDelay = this.getDataDelay.bind(this));
        }
        componentWillMount() {
          this.getData();
        }
        complicatedRenderPage() {
          for (var e = 0; e < 5e3; e++) this.setState({ i: e });
        }
        getData() {
          i.get(''.concat(c, '/test')).then((e) => {
            this.setState({ data: e.data });
          });
        }
        getDataDelay() {
          i.get(''.concat(c, '/tes')).then((e) => {});
        }
        onClick() {
          this.getData();
        }
        render() {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('br', {}),
              (0, s.jsx)(r.Z, {
                type: 'primary',
                onClick: this.onClick.bind(this),
                children: '\u6d4b\u8bd5content download',
              }),
              (0, s.jsx)('br', {}),
              (0, s.jsx)('br', {}),
              (0, s.jsx)(r.Z, {
                type: 'primary',
                onClick: () => {
                  this.getDataDelay();
                },
                children: '\u8ba9\u670d\u52a1\u53d8\u5361',
              }),
              (0, s.jsx)('br', {}),
              this.state.i
                ? '\u5148\u6765\u4ed6'.concat(
                    this.state.i,
                    '\u6b21\u6e32\u67d3',
                  )
                : null,
              (0, s.jsx)('br', {}),
              (0, s.jsx)('code', {
                children: this.state.data
                  ? JSON.stringify(this.state.data, null, 2)
                  : null,
              }),
            ],
          });
        }
      }
    },
    9669: function (e, t, n) {
      e.exports = n(51609);
    },
    55448: function (e, t, n) {
      'use strict';
      var r = n(64867),
        o = n(36026),
        s = n(4372),
        i = n(15327),
        a = n(94097),
        u = n(84109),
        c = n(67985),
        f = n(92916);
      e.exports = function (e) {
        return new Promise(function (t, n) {
          var p = e.data,
            d = e.headers;
          r.isFormData(p) && delete d['Content-Type'];
          var l = new XMLHttpRequest();
          if (e.auth) {
            var h = e.auth.username || '',
              m = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : '';
            d.Authorization = 'Basic ' + btoa(h + ':' + m);
          }
          var g = a(e.baseURL, e.url);
          if (
            (l.open(
              e.method.toUpperCase(),
              i(g, e.params, e.paramsSerializer),
              !0,
            ),
            (l.timeout = e.timeout),
            (l.onreadystatechange = function () {
              if (
                l &&
                4 === l.readyState &&
                (0 !== l.status ||
                  (l.responseURL && 0 === l.responseURL.indexOf('file:')))
              ) {
                var r =
                    'getAllResponseHeaders' in l
                      ? u(l.getAllResponseHeaders())
                      : null,
                  s =
                    e.responseType && 'text' !== e.responseType
                      ? l.response
                      : l.responseText,
                  i = {
                    data: s,
                    status: l.status,
                    statusText: l.statusText,
                    headers: r,
                    config: e,
                    request: l,
                  };
                o(t, n, i), (l = null);
              }
            }),
            (l.onabort = function () {
              l && (n(f('Request aborted', e, 'ECONNABORTED', l)), (l = null));
            }),
            (l.onerror = function () {
              n(f('Network Error', e, null, l)), (l = null);
            }),
            (l.ontimeout = function () {
              var t = 'timeout of ' + e.timeout + 'ms exceeded';
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(f(t, e, 'ECONNABORTED', l)),
                (l = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var y =
              (e.withCredentials || c(g)) && e.xsrfCookieName
                ? s.read(e.xsrfCookieName)
                : void 0;
            y && (d[e.xsrfHeaderName] = y);
          }
          if (
            ('setRequestHeader' in l &&
              r.forEach(d, function (e, t) {
                'undefined' === typeof p && 'content-type' === t.toLowerCase()
                  ? delete d[t]
                  : l.setRequestHeader(t, e);
              }),
            r.isUndefined(e.withCredentials) ||
              (l.withCredentials = !!e.withCredentials),
            e.responseType)
          )
            try {
              l.responseType = e.responseType;
            } catch (v) {
              if ('json' !== e.responseType) throw v;
            }
          'function' === typeof e.onDownloadProgress &&
            l.addEventListener('progress', e.onDownloadProgress),
            'function' === typeof e.onUploadProgress &&
              l.upload &&
              l.upload.addEventListener('progress', e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                l && (l.abort(), n(e), (l = null));
              }),
            p || (p = null),
            l.send(p);
        });
      };
    },
    51609: function (e, t, n) {
      'use strict';
      var r = n(64867),
        o = n(91849),
        s = n(30321),
        i = n(47185),
        a = n(45655);
      function u(e) {
        var t = new s(e),
          n = o(s.prototype.request, t);
        return r.extend(n, s.prototype, t), r.extend(n, t), n;
      }
      var c = u(a);
      (c.Axios = s),
        (c.create = function (e) {
          return u(i(c.defaults, e));
        }),
        (c.Cancel = n(65263)),
        (c.CancelToken = n(14972)),
        (c.isCancel = n(26502)),
        (c.all = function (e) {
          return Promise.all(e);
        }),
        (c.spread = n(8713)),
        (c.isAxiosError = n(16268)),
        (e.exports = c),
        (e.exports.default = c);
    },
    65263: function (e) {
      'use strict';
      function t(e) {
        this.message = e;
      }
      (t.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      }),
        (t.prototype.__CANCEL__ = !0),
        (e.exports = t);
    },
    14972: function (e, t, n) {
      'use strict';
      var r = n(65263);
      function o(e) {
        if ('function' !== typeof e)
          throw new TypeError('executor must be a function.');
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new r(e)), t(n.reason));
        });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.source = function () {
          var e,
            t = new o(function (t) {
              e = t;
            });
          return { token: t, cancel: e };
        }),
        (e.exports = o);
    },
    26502: function (e) {
      'use strict';
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    30321: function (e, t, n) {
      'use strict';
      var r = n(64867),
        o = n(15327),
        s = n(80782),
        i = n(13572),
        a = n(47185);
      function u(e) {
        (this.defaults = e),
          (this.interceptors = { request: new s(), response: new s() });
      }
      (u.prototype.request = function (e) {
        'string' === typeof e
          ? ((e = arguments[1] || {}), (e.url = arguments[0]))
          : (e = e || {}),
          (e = a(this.defaults, e)),
          e.method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get');
        var t = [i, void 0],
          n = Promise.resolve(e);
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        while (t.length) n = n.then(t.shift(), t.shift());
        return n;
      }),
        (u.prototype.getUri = function (e) {
          return (
            (e = a(this.defaults, e)),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
          );
        }),
        r.forEach(['delete', 'get', 'head', 'options'], function (e) {
          u.prototype[e] = function (t, n) {
            return this.request(
              a(n || {}, { method: e, url: t, data: (n || {}).data }),
            );
          };
        }),
        r.forEach(['post', 'put', 'patch'], function (e) {
          u.prototype[e] = function (t, n, r) {
            return this.request(a(r || {}, { method: e, url: t, data: n }));
          };
        }),
        (e.exports = u);
    },
    80782: function (e, t, n) {
      'use strict';
      var r = n(64867);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          r.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    94097: function (e, t, n) {
      'use strict';
      var r = n(91793),
        o = n(7303);
      e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t;
      };
    },
    92916: function (e, t, n) {
      'use strict';
      var r = n(80481);
      e.exports = function (e, t, n, o, s) {
        var i = new Error(e);
        return r(i, t, n, o, s);
      };
    },
    13572: function (e, t, n) {
      'use strict';
      var r = n(64867),
        o = n(18527),
        s = n(26502),
        i = n(45655);
      function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      e.exports = function (e) {
        a(e),
          (e.headers = e.headers || {}),
          (e.data = o(e.data, e.headers, e.transformRequest)),
          (e.headers = r.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          r.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            function (t) {
              delete e.headers[t];
            },
          );
        var t = e.adapter || i.adapter;
        return t(e).then(
          function (t) {
            return (
              a(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              s(t) ||
                (a(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        );
      };
    },
    80481: function (e) {
      'use strict';
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    47185: function (e, t, n) {
      'use strict';
      var r = n(64867);
      e.exports = function (e, t) {
        t = t || {};
        var n = {},
          o = ['url', 'method', 'data'],
          s = ['headers', 'auth', 'proxy', 'params'],
          i = [
            'baseURL',
            'transformRequest',
            'transformResponse',
            'paramsSerializer',
            'timeout',
            'timeoutMessage',
            'withCredentials',
            'adapter',
            'responseType',
            'xsrfCookieName',
            'xsrfHeaderName',
            'onUploadProgress',
            'onDownloadProgress',
            'decompress',
            'maxContentLength',
            'maxBodyLength',
            'maxRedirects',
            'transport',
            'httpAgent',
            'httpsAgent',
            'cancelToken',
            'socketPath',
            'responseEncoding',
          ],
          a = ['validateStatus'];
        function u(e, t) {
          return r.isPlainObject(e) && r.isPlainObject(t)
            ? r.merge(e, t)
            : r.isPlainObject(t)
            ? r.merge({}, t)
            : r.isArray(t)
            ? t.slice()
            : t;
        }
        function c(o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o]))
            : (n[o] = u(e[o], t[o]));
        }
        r.forEach(o, function (e) {
          r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]));
        }),
          r.forEach(s, c),
          r.forEach(i, function (o) {
            r.isUndefined(t[o])
              ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o]))
              : (n[o] = u(void 0, t[o]));
          }),
          r.forEach(a, function (r) {
            r in t
              ? (n[r] = u(e[r], t[r]))
              : r in e && (n[r] = u(void 0, e[r]));
          });
        var f = o.concat(s).concat(i).concat(a),
          p = Object.keys(e)
            .concat(Object.keys(t))
            .filter(function (e) {
              return -1 === f.indexOf(e);
            });
        return r.forEach(p, c), n;
      };
    },
    36026: function (e, t, n) {
      'use strict';
      var r = n(92916);
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status)
          ? t(
              r(
                'Request failed with status code ' + n.status,
                n.config,
                null,
                n.request,
                n,
              ),
            )
          : e(n);
      };
    },
    18527: function (e, t, n) {
      'use strict';
      var r = n(64867);
      e.exports = function (e, t, n) {
        return (
          r.forEach(n, function (n) {
            e = n(e, t);
          }),
          e
        );
      };
    },
    45655: function (e, t, n) {
      'use strict';
      var r = n(34155),
        o = n(64867),
        s = n(16016),
        i = { 'Content-Type': 'application/x-www-form-urlencoded' };
      function a(e, t) {
        !o.isUndefined(e) &&
          o.isUndefined(e['Content-Type']) &&
          (e['Content-Type'] = t);
      }
      function u() {
        var e;
        return (
          ('undefined' !== typeof XMLHttpRequest ||
            ('undefined' !== typeof r &&
              '[object process]' === Object.prototype.toString.call(r))) &&
            (e = n(55448)),
          e
        );
      }
      var c = {
        adapter: u(),
        transformRequest: [
          function (e, t) {
            return (
              s(t, 'Accept'),
              s(t, 'Content-Type'),
              o.isFormData(e) ||
              o.isArrayBuffer(e) ||
              o.isBuffer(e) ||
              o.isStream(e) ||
              o.isFile(e) ||
              o.isBlob(e)
                ? e
                : o.isArrayBufferView(e)
                ? e.buffer
                : o.isURLSearchParams(e)
                ? (a(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                  e.toString())
                : o.isObject(e)
                ? (a(t, 'application/json;charset=utf-8'), JSON.stringify(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            if ('string' === typeof e)
              try {
                e = JSON.parse(e);
              } catch (t) {}
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } },
      };
      o.forEach(['delete', 'get', 'head'], function (e) {
        c.headers[e] = {};
      }),
        o.forEach(['post', 'put', 'patch'], function (e) {
          c.headers[e] = o.merge(i);
        }),
        (e.exports = c);
    },
    91849: function (e) {
      'use strict';
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
            n[r] = arguments[r];
          return e.apply(t, n);
        };
      };
    },
    15327: function (e, t, n) {
      'use strict';
      var r = n(64867);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      e.exports = function (e, t, n) {
        if (!t) return e;
        var s;
        if (n) s = n(t);
        else if (r.isURLSearchParams(t)) s = t.toString();
        else {
          var i = [];
          r.forEach(t, function (e, t) {
            null !== e &&
              'undefined' !== typeof e &&
              (r.isArray(e) ? (t += '[]') : (e = [e]),
              r.forEach(e, function (e) {
                r.isDate(e)
                  ? (e = e.toISOString())
                  : r.isObject(e) && (e = JSON.stringify(e)),
                  i.push(o(t) + '=' + o(e));
              }));
          }),
            (s = i.join('&'));
        }
        if (s) {
          var a = e.indexOf('#');
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf('?') ? '?' : '&') + s);
        }
        return e;
      };
    },
    7303: function (e) {
      'use strict';
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
      };
    },
    4372: function (e, t, n) {
      'use strict';
      var r = n(64867);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (e, t, n, o, s, i) {
                var a = [];
                a.push(e + '=' + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    a.push('expires=' + new Date(n).toGMTString()),
                  r.isString(o) && a.push('path=' + o),
                  r.isString(s) && a.push('domain=' + s),
                  !0 === i && a.push('secure'),
                  (document.cookie = a.join('; '));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    91793: function (e) {
      'use strict';
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    16268: function (e) {
      'use strict';
      e.exports = function (e) {
        return 'object' === typeof e && !0 === e.isAxiosError;
      };
    },
    67985: function (e, t, n) {
      'use strict';
      var r = n(64867);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
            function o(e) {
              var r = e;
              return (
                t && (n.setAttribute('href', r), (r = n.href)),
                n.setAttribute('href', r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, '') : '',
                  hash: n.hash ? n.hash.replace(/^#/, '') : '',
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    '/' === n.pathname.charAt(0)
                      ? n.pathname
                      : '/' + n.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    16016: function (e, t, n) {
      'use strict';
      var r = n(64867);
      e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
          r !== t &&
            r.toUpperCase() === t.toUpperCase() &&
            ((e[t] = n), delete e[r]);
        });
      };
    },
    84109: function (e, t, n) {
      'use strict';
      var r = n(64867),
        o = [
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ];
      e.exports = function (e) {
        var t,
          n,
          s,
          i = {};
        return e
          ? (r.forEach(e.split('\n'), function (e) {
              if (
                ((s = e.indexOf(':')),
                (t = r.trim(e.substr(0, s)).toLowerCase()),
                (n = r.trim(e.substr(s + 1))),
                t)
              ) {
                if (i[t] && o.indexOf(t) >= 0) return;
                i[t] =
                  'set-cookie' === t
                    ? (i[t] ? i[t] : []).concat([n])
                    : i[t]
                    ? i[t] + ', ' + n
                    : n;
              }
            }),
            i)
          : i;
      };
    },
    8713: function (e) {
      'use strict';
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    64867: function (e, t, n) {
      'use strict';
      var r = n(91849),
        o = Object.prototype.toString;
      function s(e) {
        return '[object Array]' === o.call(e);
      }
      function i(e) {
        return 'undefined' === typeof e;
      }
      function a(e) {
        return (
          null !== e &&
          !i(e) &&
          null !== e.constructor &&
          !i(e.constructor) &&
          'function' === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      function u(e) {
        return '[object ArrayBuffer]' === o.call(e);
      }
      function c(e) {
        return 'undefined' !== typeof FormData && e instanceof FormData;
      }
      function f(e) {
        var t;
        return (
          (t =
            'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer),
          t
        );
      }
      function p(e) {
        return 'string' === typeof e;
      }
      function d(e) {
        return 'number' === typeof e;
      }
      function l(e) {
        return null !== e && 'object' === typeof e;
      }
      function h(e) {
        if ('[object Object]' !== o.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function m(e) {
        return '[object Date]' === o.call(e);
      }
      function g(e) {
        return '[object File]' === o.call(e);
      }
      function y(e) {
        return '[object Blob]' === o.call(e);
      }
      function v(e) {
        return '[object Function]' === o.call(e);
      }
      function x(e) {
        return l(e) && v(e.pipe);
      }
      function b(e) {
        return (
          'undefined' !== typeof URLSearchParams && e instanceof URLSearchParams
        );
      }
      function w(e) {
        return e.replace(/^\s*/, '').replace(/\s*$/, '');
      }
      function C() {
        return (
          ('undefined' === typeof navigator ||
            ('ReactNative' !== navigator.product &&
              'NativeScript' !== navigator.product &&
              'NS' !== navigator.product)) &&
          'undefined' !== typeof window &&
          'undefined' !== typeof document
        );
      }
      function E(e, t) {
        if (null !== e && 'undefined' !== typeof e)
          if (('object' !== typeof e && (e = [e]), s(e)))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      function j() {
        var e = {};
        function t(t, n) {
          h(e[n]) && h(t)
            ? (e[n] = j(e[n], t))
            : h(t)
            ? (e[n] = j({}, t))
            : s(t)
            ? (e[n] = t.slice())
            : (e[n] = t);
        }
        for (var n = 0, r = arguments.length; n < r; n++) E(arguments[n], t);
        return e;
      }
      function S(e, t, n) {
        return (
          E(t, function (t, o) {
            e[o] = n && 'function' === typeof t ? r(t, n) : t;
          }),
          e
        );
      }
      function R(e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      }
      e.exports = {
        isArray: s,
        isArrayBuffer: u,
        isBuffer: a,
        isFormData: c,
        isArrayBufferView: f,
        isString: p,
        isNumber: d,
        isObject: l,
        isPlainObject: h,
        isUndefined: i,
        isDate: m,
        isFile: g,
        isBlob: y,
        isFunction: v,
        isStream: x,
        isURLSearchParams: b,
        isStandardBrowserEnv: C,
        forEach: E,
        merge: j,
        extend: S,
        trim: w,
        stripBOM: R,
      };
    },
  },
]);
