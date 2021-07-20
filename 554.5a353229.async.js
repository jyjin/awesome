(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [554],
  {
    25687: function (e, t, n) {
      'use strict';
      n.d(t, {
        kG: function () {
          return r;
        },
      });
      function r(e, t, n) {
        if ((void 0 === n && (n = Error), !e)) throw new n(t);
      }
    },
    95957: function (e, t, n) {
      'use strict';
      function r(e, t) {
        var n = t && t.cache ? t.cache : p,
          r = t && t.serializer ? t.serializer : f,
          i = t && t.strategy ? t.strategy : u;
        return i(e, { cache: n, serializer: r });
      }
      function i(e) {
        return null == e || 'number' === typeof e || 'boolean' === typeof e;
      }
      function o(e, t, n, r) {
        var o = i(r) ? r : n(r),
          a = t.get(o);
        return (
          'undefined' === typeof a && ((a = e.call(this, r)), t.set(o, a)), a
        );
      }
      function a(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          i = n(r),
          o = t.get(i);
        return (
          'undefined' === typeof o && ((o = e.apply(this, r)), t.set(i, o)), o
        );
      }
      function s(e, t, n, r, i) {
        return n.bind(t, e, r, i);
      }
      function u(e, t) {
        var n = 1 === e.length ? o : a;
        return s(e, this, n, t.cache.create(), t.serializer);
      }
      function c(e, t) {
        return s(e, this, a, t.cache.create(), t.serializer);
      }
      function l(e, t) {
        return s(e, this, o, t.cache.create(), t.serializer);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
        A: function () {
          return v;
        },
      });
      var f = function () {
        return JSON.stringify(arguments);
      };
      function h() {
        this.cache = Object.create(null);
      }
      (h.prototype.has = function (e) {
        return e in this.cache;
      }),
        (h.prototype.get = function (e) {
          return this.cache[e];
        }),
        (h.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var p = {
          create: function () {
            return new h();
          },
        },
        v = { variadic: c, monadic: l };
    },
    83695: function (e, t, n) {
      'use strict';
      n.d(t, {
        wD: function () {
          return i;
        },
        VG: function () {
          return u;
        },
        rp: function () {
          return l;
        },
        Ii: function () {
          return m;
        },
        O4: function () {
          return s;
        },
        uf: function () {
          return c;
        },
        Wh: function () {
          return _;
        },
        Jo: function () {
          return p;
        },
        yx: function () {
          return v;
        },
        Wi: function () {
          return h;
        },
        HI: function () {
          return d;
        },
        pe: function () {
          return f;
        },
        Qc: function () {
          return ce;
        },
      });
      var r,
        i,
        o,
        a = n(70655);
      function s(e) {
        return e.type === i.literal;
      }
      function u(e) {
        return e.type === i.argument;
      }
      function c(e) {
        return e.type === i.number;
      }
      function l(e) {
        return e.type === i.date;
      }
      function f(e) {
        return e.type === i.time;
      }
      function h(e) {
        return e.type === i.select;
      }
      function p(e) {
        return e.type === i.plural;
      }
      function v(e) {
        return e.type === i.pound;
      }
      function d(e) {
        return e.type === i.tag;
      }
      function _(e) {
        return !(!e || 'object' !== typeof e || e.type !== o.number);
      }
      function m(e) {
        return !(!e || 'object' !== typeof e || e.type !== o.dateTime);
      }
      (function (e) {
        (e[(e['EXPECT_ARGUMENT_CLOSING_BRACE'] = 1)] =
          'EXPECT_ARGUMENT_CLOSING_BRACE'),
          (e[(e['EMPTY_ARGUMENT'] = 2)] = 'EMPTY_ARGUMENT'),
          (e[(e['MALFORMED_ARGUMENT'] = 3)] = 'MALFORMED_ARGUMENT'),
          (e[(e['EXPECT_ARGUMENT_TYPE'] = 4)] = 'EXPECT_ARGUMENT_TYPE'),
          (e[(e['INVALID_ARGUMENT_TYPE'] = 5)] = 'INVALID_ARGUMENT_TYPE'),
          (e[(e['EXPECT_ARGUMENT_STYLE'] = 6)] = 'EXPECT_ARGUMENT_STYLE'),
          (e[(e['INVALID_NUMBER_SKELETON'] = 7)] = 'INVALID_NUMBER_SKELETON'),
          (e[(e['INVALID_DATE_TIME_SKELETON'] = 8)] =
            'INVALID_DATE_TIME_SKELETON'),
          (e[(e['EXPECT_NUMBER_SKELETON'] = 9)] = 'EXPECT_NUMBER_SKELETON'),
          (e[(e['EXPECT_DATE_TIME_SKELETON'] = 10)] =
            'EXPECT_DATE_TIME_SKELETON'),
          (e[(e['UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'] = 11)] =
            'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
          (e[(e['EXPECT_SELECT_ARGUMENT_OPTIONS'] = 12)] =
            'EXPECT_SELECT_ARGUMENT_OPTIONS'),
          (e[(e['EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'] = 13)] =
            'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (e[(e['INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'] = 14)] =
            'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
          (e[(e['EXPECT_SELECT_ARGUMENT_SELECTOR'] = 15)] =
            'EXPECT_SELECT_ARGUMENT_SELECTOR'),
          (e[(e['EXPECT_PLURAL_ARGUMENT_SELECTOR'] = 16)] =
            'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e['EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'] = 17)] =
            'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
          (e[(e['EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'] = 18)] =
            'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
          (e[(e['INVALID_PLURAL_ARGUMENT_SELECTOR'] = 19)] =
            'INVALID_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e['DUPLICATE_PLURAL_ARGUMENT_SELECTOR'] = 20)] =
            'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
          (e[(e['DUPLICATE_SELECT_ARGUMENT_SELECTOR'] = 21)] =
            'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
          (e[(e['MISSING_OTHER_CLAUSE'] = 22)] = 'MISSING_OTHER_CLAUSE'),
          (e[(e['INVALID_TAG'] = 23)] = 'INVALID_TAG'),
          (e[(e['INVALID_TAG_NAME'] = 25)] = 'INVALID_TAG_NAME'),
          (e[(e['UNMATCHED_CLOSING_TAG'] = 26)] = 'UNMATCHED_CLOSING_TAG'),
          (e[(e['UNCLOSED_TAG'] = 27)] = 'UNCLOSED_TAG');
      })(r || (r = {})),
        (function (e) {
          (e[(e['literal'] = 0)] = 'literal'),
            (e[(e['argument'] = 1)] = 'argument'),
            (e[(e['number'] = 2)] = 'number'),
            (e[(e['date'] = 3)] = 'date'),
            (e[(e['time'] = 4)] = 'time'),
            (e[(e['select'] = 5)] = 'select'),
            (e[(e['plural'] = 6)] = 'plural'),
            (e[(e['pound'] = 7)] = 'pound'),
            (e[(e['tag'] = 8)] = 'tag');
        })(i || (i = {})),
        (function (e) {
          (e[(e['number'] = 0)] = 'number'),
            (e[(e['dateTime'] = 1)] = 'dateTime');
        })(o || (o = {}));
      var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        g = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function b(e) {
        var t = {};
        return (
          e.replace(g, function (e) {
            var n = e.length;
            switch (e[0]) {
              case 'G':
                t.era = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
                break;
              case 'y':
                t.year = 2 === n ? '2-digit' : 'numeric';
                break;
              case 'Y':
              case 'u':
              case 'U':
              case 'r':
                throw new RangeError(
                  '`Y/u/U/r` (year) patterns are not supported, use `y` instead',
                );
              case 'q':
              case 'Q':
                throw new RangeError(
                  '`q/Q` (quarter) patterns are not supported',
                );
              case 'M':
              case 'L':
                t.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][
                  n - 1
                ];
                break;
              case 'w':
              case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
              case 'd':
                t.day = ['numeric', '2-digit'][n - 1];
                break;
              case 'D':
              case 'F':
              case 'g':
                throw new RangeError(
                  '`D/F/g` (day) patterns are not supported, use `d` instead',
                );
              case 'E':
                t.weekday = 4 === n ? 'short' : 5 === n ? 'narrow' : 'short';
                break;
              case 'e':
                if (n < 4)
                  throw new RangeError(
                    '`e..eee` (weekday) patterns are not supported',
                  );
                t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                break;
              case 'c':
                if (n < 4)
                  throw new RangeError(
                    '`c..ccc` (weekday) patterns are not supported',
                  );
                t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                break;
              case 'a':
                t.hour12 = !0;
                break;
              case 'b':
              case 'B':
                throw new RangeError(
                  '`b/B` (period) patterns are not supported, use `a` instead',
                );
              case 'h':
                (t.hourCycle = 'h12'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'H':
                (t.hourCycle = 'h23'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'K':
                (t.hourCycle = 'h11'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'k':
                (t.hourCycle = 'h24'), (t.hour = ['numeric', '2-digit'][n - 1]);
                break;
              case 'j':
              case 'J':
              case 'C':
                throw new RangeError(
                  '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead',
                );
              case 'm':
                t.minute = ['numeric', '2-digit'][n - 1];
                break;
              case 's':
                t.second = ['numeric', '2-digit'][n - 1];
                break;
              case 'S':
              case 'A':
                throw new RangeError(
                  '`S/A` (second) patterns are not supported, use `s` instead',
                );
              case 'z':
                t.timeZoneName = n < 4 ? 'short' : 'long';
                break;
              case 'Z':
              case 'O':
              case 'v':
              case 'V':
              case 'X':
              case 'x':
                throw new RangeError(
                  '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead',
                );
            }
            return '';
          }),
          t
        );
      }
      var E = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      function O(e) {
        if (0 === e.length) throw new Error('Number skeleton cannot be empty');
        for (
          var t = e.split(E).filter(function (e) {
              return e.length > 0;
            }),
            n = [],
            r = 0,
            i = t;
          r < i.length;
          r++
        ) {
          var o = i[r],
            a = o.split('/');
          if (0 === a.length) throw new Error('Invalid number skeleton');
          for (var s = a[0], u = a.slice(1), c = 0, l = u; c < l.length; c++) {
            var f = l[c];
            if (0 === f.length) throw new Error('Invalid number skeleton');
          }
          n.push({ stem: s, options: u });
        }
        return n;
      }
      function A(e) {
        return e.replace(/^(.*?)-/, '');
      }
      var T,
        w = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        S = /^(@+)?(\+|#+)?$/g,
        P = /(\*)(0+)|(#+)(0+)|(0+)/g,
        R = /^(0+)$/;
      function N(e) {
        var t = {};
        return (
          e.replace(S, function (e, n, r) {
            return (
              'string' !== typeof r
                ? ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits = n.length))
                : '+' === r
                ? (t.minimumSignificantDigits = n.length)
                : '#' === n[0]
                ? (t.maximumSignificantDigits = n.length)
                : ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits =
                    n.length + ('string' === typeof r ? r.length : 0))),
              ''
            );
          }),
          t
        );
      }
      function C(e) {
        switch (e) {
          case 'sign-auto':
            return { signDisplay: 'auto' };
          case 'sign-accounting':
          case '()':
            return { currencySign: 'accounting' };
          case 'sign-always':
          case '+!':
            return { signDisplay: 'always' };
          case 'sign-accounting-always':
          case '()!':
            return { signDisplay: 'always', currencySign: 'accounting' };
          case 'sign-except-zero':
          case '+?':
            return { signDisplay: 'exceptZero' };
          case 'sign-accounting-except-zero':
          case '()?':
            return { signDisplay: 'exceptZero', currencySign: 'accounting' };
          case 'sign-never':
          case '+_':
            return { signDisplay: 'never' };
        }
      }
      function L(e) {
        var t;
        if (
          ('E' === e[0] && 'E' === e[1]
            ? ((t = { notation: 'engineering' }), (e = e.slice(2)))
            : 'E' === e[0] &&
              ((t = { notation: 'scientific' }), (e = e.slice(1))),
          t)
        ) {
          var n = e.slice(0, 2);
          if (
            ('+!' === n
              ? ((t.signDisplay = 'always'), (e = e.slice(2)))
              : '+?' === n &&
                ((t.signDisplay = 'exceptZero'), (e = e.slice(2))),
            !R.test(e))
          )
            throw new Error('Malformed concise eng/scientific notation');
          t.minimumIntegerDigits = e.length;
        }
        return t;
      }
      function I(e) {
        var t = {},
          n = C(e);
        return n || t;
      }
      function k(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          switch (i.stem) {
            case 'percent':
            case '%':
              t.style = 'percent';
              continue;
            case '%x100':
              (t.style = 'percent'), (t.scale = 100);
              continue;
            case 'currency':
              (t.style = 'currency'), (t.currency = i.options[0]);
              continue;
            case 'group-off':
            case ',_':
              t.useGrouping = !1;
              continue;
            case 'precision-integer':
            case '.':
              t.maximumFractionDigits = 0;
              continue;
            case 'measure-unit':
            case 'unit':
              (t.style = 'unit'), (t.unit = A(i.options[0]));
              continue;
            case 'compact-short':
            case 'K':
              (t.notation = 'compact'), (t.compactDisplay = 'short');
              continue;
            case 'compact-long':
            case 'KK':
              (t.notation = 'compact'), (t.compactDisplay = 'long');
              continue;
            case 'scientific':
              t = (0, a.pi)(
                (0, a.pi)((0, a.pi)({}, t), { notation: 'scientific' }),
                i.options.reduce(function (e, t) {
                  return (0, a.pi)((0, a.pi)({}, e), I(t));
                }, {}),
              );
              continue;
            case 'engineering':
              t = (0, a.pi)(
                (0, a.pi)((0, a.pi)({}, t), { notation: 'engineering' }),
                i.options.reduce(function (e, t) {
                  return (0, a.pi)((0, a.pi)({}, e), I(t));
                }, {}),
              );
              continue;
            case 'notation-simple':
              t.notation = 'standard';
              continue;
            case 'unit-width-narrow':
              (t.currencyDisplay = 'narrowSymbol'), (t.unitDisplay = 'narrow');
              continue;
            case 'unit-width-short':
              (t.currencyDisplay = 'code'), (t.unitDisplay = 'short');
              continue;
            case 'unit-width-full-name':
              (t.currencyDisplay = 'name'), (t.unitDisplay = 'long');
              continue;
            case 'unit-width-iso-code':
              t.currencyDisplay = 'symbol';
              continue;
            case 'scale':
              t.scale = parseFloat(i.options[0]);
              continue;
            case 'integer-width':
              if (i.options.length > 1)
                throw new RangeError(
                  'integer-width stems only accept a single optional option',
                );
              i.options[0].replace(P, function (e, n, r, i, o, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (i && o)
                    throw new Error(
                      'We currently do not support maximum integer digits',
                    );
                  if (a)
                    throw new Error(
                      'We currently do not support exact integer digits',
                    );
                }
                return '';
              });
              continue;
          }
          if (R.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
          else if (w.test(i.stem)) {
            if (i.options.length > 1)
              throw new RangeError(
                'Fraction-precision stems only accept a single optional option',
              );
            i.stem.replace(w, function (e, n, r, i, o, a) {
              return (
                '*' === r
                  ? (t.minimumFractionDigits = n.length)
                  : i && '#' === i[0]
                  ? (t.maximumFractionDigits = i.length)
                  : o && a
                  ? ((t.minimumFractionDigits = o.length),
                    (t.maximumFractionDigits = o.length + a.length))
                  : ((t.minimumFractionDigits = n.length),
                    (t.maximumFractionDigits = n.length)),
                ''
              );
            }),
              i.options.length &&
                (t = (0, a.pi)((0, a.pi)({}, t), N(i.options[0])));
          } else if (S.test(i.stem)) t = (0, a.pi)((0, a.pi)({}, t), N(i.stem));
          else {
            var o = C(i.stem);
            o && (t = (0, a.pi)((0, a.pi)({}, t), o));
            var s = L(i.stem);
            s && (t = (0, a.pi)((0, a.pi)({}, t), s));
          }
        }
        return t;
      }
      var x = new RegExp('^' + y.source + '*'),
        M = new RegExp(y.source + '*$');
      function j(e, t) {
        return { start: e, end: t };
      }
      var D = !!String.prototype.startsWith,
        U = !!String.fromCodePoint,
        G = !!Object.fromEntries,
        V = !!String.prototype.codePointAt,
        F = !!String.prototype.trimStart,
        B = !!String.prototype.trimEnd,
        K = !!Number.isSafeInteger,
        X = K
          ? Number.isSafeInteger
          : function (e) {
              return (
                'number' === typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                Math.abs(e) <= 9007199254740991
              );
            },
        q = !0;
      try {
        var z = ee('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
        q =
          'a' === (null === (T = z.exec('a')) || void 0 === T ? void 0 : T[0]);
      } catch (le) {
        q = !1;
      }
      var Z,
        H = D
          ? function (e, t, n) {
              return e.startsWith(t, n);
            }
          : function (e, t, n) {
              return e.slice(n, n + t.length) === t;
            },
        W = U
          ? String.fromCodePoint
          : function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n,
                r = '',
                i = e.length,
                o = 0;
              while (i > o) {
                if (((n = e[o++]), n > 1114111))
                  throw RangeError(n + ' is not a valid code point');
                r +=
                  n < 65536
                    ? String.fromCharCode(n)
                    : String.fromCharCode(
                        55296 + ((n -= 65536) >> 10),
                        (n % 1024) + 56320,
                      );
              }
              return r;
            },
        Y = G
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  a = i[1];
                t[o] = a;
              }
              return t;
            },
        $ = V
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var n = e.length;
              if (!(t < 0 || t >= n)) {
                var r,
                  i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : r - 56320 + ((i - 55296) << 10) + 65536;
              }
            },
        J = F
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(x, '');
            },
        Q = B
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(M, '');
            };
      function ee(e, t) {
        return new RegExp(e, t);
      }
      if (q) {
        var te = ee('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
        Z = function (e, t) {
          var n;
          te.lastIndex = t;
          var r = te.exec(e);
          return null !== (n = r[1]) && void 0 !== n ? n : '';
        };
      } else
        Z = function (e, t) {
          var n = [];
          while (1) {
            var r = $(e, t);
            if (void 0 === r || ae(r) || se(r)) break;
            n.push(r), (t += r >= 65536 ? 2 : 1);
          }
          return W.apply(void 0, n);
        };
      var ne = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error('parser can only be used once');
            return this.parseMessage(0, '', !1);
          }),
          (e.prototype.parseMessage = function (e, t, n) {
            var o = [];
            while (!this.isEOF()) {
              var a = this.char();
              if (123 === a) {
                var s = this.parseArgument(e, n);
                if (s.err) return s;
                o.push(s.val);
              } else {
                if (125 === a && e > 0) break;
                if (35 !== a || ('plural' !== t && 'selectordinal' !== t)) {
                  if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                    if (n) break;
                    return this.error(
                      r.UNMATCHED_CLOSING_TAG,
                      j(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  if (60 === a && !this.ignoreTag && re(this.peek() || 0)) {
                    s = this.parseTag(e, t);
                    if (s.err) return s;
                    o.push(s.val);
                  } else {
                    s = this.parseLiteral(e, t);
                    if (s.err) return s;
                    o.push(s.val);
                  }
                } else {
                  var u = this.clonePosition();
                  this.bump(),
                    o.push({
                      type: i.pound,
                      location: j(u, this.clonePosition()),
                    });
                }
              }
            }
            return { val: o, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var o = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf('/>')))
              return {
                val: {
                  type: i.literal,
                  value: '<' + o + '/>',
                  location: j(n, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf('>')) {
              var a = this.parseMessage(e + 1, t, !0);
              if (a.err) return a;
              var s = a.val,
                u = this.clonePosition();
              if (this.bumpIf('</')) {
                if (this.isEOF() || !re(this.char()))
                  return this.error(r.INVALID_TAG, j(u, this.clonePosition()));
                var c = this.clonePosition(),
                  l = this.parseTagName();
                return o !== l
                  ? this.error(
                      r.UNMATCHED_CLOSING_TAG,
                      j(c, this.clonePosition()),
                    )
                  : (this.bumpSpace(),
                    this.bumpIf('>')
                      ? {
                          val: {
                            type: i.tag,
                            value: o,
                            children: s,
                            location: j(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(r.INVALID_TAG, j(u, this.clonePosition())));
              }
              return this.error(r.UNCLOSED_TAG, j(n, this.clonePosition()));
            }
            return this.error(r.INVALID_TAG, j(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            this.bump();
            while (!this.isEOF() && oe(this.char())) this.bump();
            return this.message.slice(e, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            var n = this.clonePosition(),
              r = '';
            while (1) {
              var o = this.tryParseQuote(t);
              if (o) r += o;
              else {
                var a = this.tryParseUnquoted(e, t);
                if (a) r += a;
                else {
                  var s = this.tryParseLeftAngleBracket();
                  if (!s) break;
                  r += s;
                }
              }
            }
            var u = j(n, this.clonePosition());
            return {
              val: { type: i.literal, value: r, location: u },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && ie(this.peek() || 0))
              ? null
              : (this.bump(), '<');
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ('plural' === e || 'selectordinal' === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            this.bump();
            while (!this.isEOF()) {
              var n = this.char();
              if (39 === n) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                t.push(39), this.bump();
              } else t.push(n);
              this.bump();
            }
            return W.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ('plural' === t || 'selectordinal' === t)) ||
              (125 === n && e > 0)
              ? null
              : (this.bump(), W(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                r.EXPECT_ARGUMENT_CLOSING_BRACE,
                j(n, this.clonePosition()),
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(r.EMPTY_ARGUMENT, j(n, this.clonePosition()))
              );
            var o = this.parseIdentifierIfPossible().value;
            if (!o)
              return this.error(
                r.MALFORMED_ARGUMENT,
                j(n, this.clonePosition()),
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                r.EXPECT_ARGUMENT_CLOSING_BRACE,
                j(n, this.clonePosition()),
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: i.argument,
                      value: o,
                      location: j(n, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(
                        r.EXPECT_ARGUMENT_CLOSING_BRACE,
                        j(n, this.clonePosition()),
                      )
                    : this.parseArgumentOptions(e, t, o, n)
                );
              default:
                return this.error(
                  r.MALFORMED_ARGUMENT,
                  j(n, this.clonePosition()),
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = Z(this.message, t),
              r = t + n.length;
            this.bumpTo(r);
            var i = this.clonePosition(),
              o = j(e, i);
            return { value: n, location: o };
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, s) {
            var u,
              c = this.clonePosition(),
              l = this.parseIdentifierIfPossible().value,
              f = this.clonePosition();
            switch (l) {
              case '':
                return this.error(r.EXPECT_ARGUMENT_TYPE, j(c, f));
              case 'number':
              case 'date':
              case 'time':
                this.bumpSpace();
                var h = null;
                if (this.bumpIf(',')) {
                  this.bumpSpace();
                  var p = this.clonePosition(),
                    v = this.parseSimpleArgStyleIfPossible();
                  if (v.err) return v;
                  var d = Q(v.val);
                  if (0 === d.length)
                    return this.error(
                      r.EXPECT_ARGUMENT_STYLE,
                      j(this.clonePosition(), this.clonePosition()),
                    );
                  var _ = j(p, this.clonePosition());
                  h = { style: d, styleLocation: _ };
                }
                var m = this.tryParseArgumentClose(s);
                if (m.err) return m;
                var y = j(s, this.clonePosition());
                if (
                  h &&
                  H(null === h || void 0 === h ? void 0 : h.style, '::', 0)
                ) {
                  var g = J(h.style.slice(2));
                  if ('number' === l) {
                    v = this.parseNumberSkeletonFromString(g, h.styleLocation);
                    return v.err
                      ? v
                      : {
                          val: {
                            type: i.number,
                            value: n,
                            location: y,
                            style: v.val,
                          },
                          err: null,
                        };
                  }
                  if (0 === g.length)
                    return this.error(r.EXPECT_DATE_TIME_SKELETON, y);
                  d = {
                    type: o.dateTime,
                    pattern: g,
                    location: h.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? b(g) : {},
                  };
                  var E = 'date' === l ? i.date : i.time;
                  return {
                    val: { type: E, value: n, location: y, style: d },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      'number' === l
                        ? i.number
                        : 'date' === l
                        ? i.date
                        : i.time,
                    value: n,
                    location: y,
                    style:
                      null !==
                        (u = null === h || void 0 === h ? void 0 : h.style) &&
                      void 0 !== u
                        ? u
                        : null,
                  },
                  err: null,
                };
              case 'plural':
              case 'selectordinal':
              case 'select':
                var O = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(',')))
                  return this.error(
                    r.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    j(O, (0, a.pi)({}, O)),
                  );
                this.bumpSpace();
                var A = this.parseIdentifierIfPossible(),
                  T = 0;
                if ('select' !== l && 'offset' === A.value) {
                  if (!this.bumpIf(':'))
                    return this.error(
                      r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      j(this.clonePosition(), this.clonePosition()),
                    );
                  this.bumpSpace();
                  v = this.tryParseDecimalInteger(
                    r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                  );
                  if (v.err) return v;
                  this.bumpSpace(),
                    (A = this.parseIdentifierIfPossible()),
                    (T = v.val);
                }
                var w = this.tryParsePluralOrSelectOptions(e, l, t, A);
                if (w.err) return w;
                m = this.tryParseArgumentClose(s);
                if (m.err) return m;
                var S = j(s, this.clonePosition());
                return 'select' === l
                  ? {
                      val: {
                        type: i.select,
                        value: n,
                        options: Y(w.val),
                        location: S,
                      },
                      err: null,
                    }
                  : {
                      val: {
                        type: i.plural,
                        value: n,
                        options: Y(w.val),
                        offset: T,
                        pluralType: 'plural' === l ? 'cardinal' : 'ordinal',
                        location: S,
                      },
                      err: null,
                    };
              default:
                return this.error(r.INVALID_ARGUMENT_TYPE, j(c, f));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  r.EXPECT_ARGUMENT_CLOSING_BRACE,
                  j(e, this.clonePosition()),
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            var e = 0,
              t = this.clonePosition();
            while (!this.isEOF()) {
              var n = this.char();
              switch (n) {
                case 39:
                  this.bump();
                  var i = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      j(i, this.clonePosition()),
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
                  break;
              }
            }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = O(e);
            } catch (i) {
              return this.error(r.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: o.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? k(n) : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, i) {
            var o,
              a = !1,
              s = [],
              u = new Set(),
              c = i.value,
              l = i.location;
            while (1) {
              if (0 === c.length) {
                var f = this.clonePosition();
                if ('select' === t || !this.bumpIf('=')) break;
                var h = this.tryParseDecimalInteger(
                  r.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  r.INVALID_PLURAL_ARGUMENT_SELECTOR,
                );
                if (h.err) return h;
                (l = j(f, this.clonePosition())),
                  (c = this.message.slice(f.offset, this.offset()));
              }
              if (u.has(c))
                return this.error(
                  'select' === t
                    ? r.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              'other' === c && (a = !0), this.bumpSpace();
              var p = this.clonePosition();
              if (!this.bumpIf('{'))
                return this.error(
                  'select' === t
                    ? r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  j(this.clonePosition(), this.clonePosition()),
                );
              var v = this.parseMessage(e + 1, t, n);
              if (v.err) return v;
              var d = this.tryParseArgumentClose(p);
              if (d.err) return d;
              s.push([
                c,
                { value: v.val, location: j(p, this.clonePosition()) },
              ]),
                u.add(c),
                this.bumpSpace(),
                (o = this.parseIdentifierIfPossible()),
                (c = o.value),
                (l = o.location);
            }
            return 0 === s.length
              ? this.error(
                  'select' === t
                    ? r.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : r.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  j(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !a
              ? this.error(
                  r.MISSING_OTHER_CLAUSE,
                  j(this.clonePosition(), this.clonePosition()),
                )
              : { val: s, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf('+') || (this.bumpIf('-') && (n = -1));
            var i = !1,
              o = 0;
            while (!this.isEOF()) {
              var a = this.char();
              if (!(a >= 48 && a <= 57)) break;
              (i = !0), (o = 10 * o + (a - 48)), this.bump();
            }
            var s = j(r, this.clonePosition());
            return i
              ? ((o *= n), X(o) ? { val: o, err: null } : this.error(t, s))
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error('out of bound');
            var t = $(this.message, e);
            if (void 0 === t)
              throw Error(
                'Offset ' + e + ' is at invalid UTF-16 code unit boundary',
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (H(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              n = this.message.indexOf(e, t);
            return n >= 0
              ? (this.bumpTo(n), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                'targetOffset ' +
                  e +
                  ' must be greater than or equal to the current offset ' +
                  this.offset(),
              );
            e = Math.min(e, this.message.length);
            while (1) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  'targetOffset ' +
                    e +
                    ' is at invalid UTF-16 code unit boundary',
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            while (!this.isEOF() && ae(this.char())) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null !== n && void 0 !== n ? n : null;
          }),
          e
        );
      })();
      function re(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function ie(e) {
        return re(e) || 47 === e;
      }
      function oe(e) {
        return (
          45 === e ||
          46 === e ||
          (e >= 48 && e <= 57) ||
          95 === e ||
          (e >= 97 && e <= 122) ||
          (e >= 65 && e <= 90) ||
          183 == e ||
          (e >= 192 && e <= 214) ||
          (e >= 216 && e <= 246) ||
          (e >= 248 && e <= 893) ||
          (e >= 895 && e <= 8191) ||
          (e >= 8204 && e <= 8205) ||
          (e >= 8255 && e <= 8256) ||
          (e >= 8304 && e <= 8591) ||
          (e >= 11264 && e <= 12271) ||
          (e >= 12289 && e <= 55295) ||
          (e >= 63744 && e <= 64975) ||
          (e >= 65008 && e <= 65533) ||
          (e >= 65536 && e <= 983039)
        );
      }
      function ae(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function se(e) {
        return (
          (e >= 33 && e <= 35) ||
          36 === e ||
          (e >= 37 && e <= 39) ||
          40 === e ||
          41 === e ||
          42 === e ||
          43 === e ||
          44 === e ||
          45 === e ||
          (e >= 46 && e <= 47) ||
          (e >= 58 && e <= 59) ||
          (e >= 60 && e <= 62) ||
          (e >= 63 && e <= 64) ||
          91 === e ||
          92 === e ||
          93 === e ||
          94 === e ||
          96 === e ||
          123 === e ||
          124 === e ||
          125 === e ||
          126 === e ||
          161 === e ||
          (e >= 162 && e <= 165) ||
          166 === e ||
          167 === e ||
          169 === e ||
          171 === e ||
          172 === e ||
          174 === e ||
          176 === e ||
          177 === e ||
          182 === e ||
          187 === e ||
          191 === e ||
          215 === e ||
          247 === e ||
          (e >= 8208 && e <= 8213) ||
          (e >= 8214 && e <= 8215) ||
          8216 === e ||
          8217 === e ||
          8218 === e ||
          (e >= 8219 && e <= 8220) ||
          8221 === e ||
          8222 === e ||
          8223 === e ||
          (e >= 8224 && e <= 8231) ||
          (e >= 8240 && e <= 8248) ||
          8249 === e ||
          8250 === e ||
          (e >= 8251 && e <= 8254) ||
          (e >= 8257 && e <= 8259) ||
          8260 === e ||
          8261 === e ||
          8262 === e ||
          (e >= 8263 && e <= 8273) ||
          8274 === e ||
          8275 === e ||
          (e >= 8277 && e <= 8286) ||
          (e >= 8592 && e <= 8596) ||
          (e >= 8597 && e <= 8601) ||
          (e >= 8602 && e <= 8603) ||
          (e >= 8604 && e <= 8607) ||
          8608 === e ||
          (e >= 8609 && e <= 8610) ||
          8611 === e ||
          (e >= 8612 && e <= 8613) ||
          8614 === e ||
          (e >= 8615 && e <= 8621) ||
          8622 === e ||
          (e >= 8623 && e <= 8653) ||
          (e >= 8654 && e <= 8655) ||
          (e >= 8656 && e <= 8657) ||
          8658 === e ||
          8659 === e ||
          8660 === e ||
          (e >= 8661 && e <= 8691) ||
          (e >= 8692 && e <= 8959) ||
          (e >= 8960 && e <= 8967) ||
          8968 === e ||
          8969 === e ||
          8970 === e ||
          8971 === e ||
          (e >= 8972 && e <= 8991) ||
          (e >= 8992 && e <= 8993) ||
          (e >= 8994 && e <= 9e3) ||
          9001 === e ||
          9002 === e ||
          (e >= 9003 && e <= 9083) ||
          9084 === e ||
          (e >= 9085 && e <= 9114) ||
          (e >= 9115 && e <= 9139) ||
          (e >= 9140 && e <= 9179) ||
          (e >= 9180 && e <= 9185) ||
          (e >= 9186 && e <= 9254) ||
          (e >= 9255 && e <= 9279) ||
          (e >= 9280 && e <= 9290) ||
          (e >= 9291 && e <= 9311) ||
          (e >= 9472 && e <= 9654) ||
          9655 === e ||
          (e >= 9656 && e <= 9664) ||
          9665 === e ||
          (e >= 9666 && e <= 9719) ||
          (e >= 9720 && e <= 9727) ||
          (e >= 9728 && e <= 9838) ||
          9839 === e ||
          (e >= 9840 && e <= 10087) ||
          10088 === e ||
          10089 === e ||
          10090 === e ||
          10091 === e ||
          10092 === e ||
          10093 === e ||
          10094 === e ||
          10095 === e ||
          10096 === e ||
          10097 === e ||
          10098 === e ||
          10099 === e ||
          10100 === e ||
          10101 === e ||
          (e >= 10132 && e <= 10175) ||
          (e >= 10176 && e <= 10180) ||
          10181 === e ||
          10182 === e ||
          (e >= 10183 && e <= 10213) ||
          10214 === e ||
          10215 === e ||
          10216 === e ||
          10217 === e ||
          10218 === e ||
          10219 === e ||
          10220 === e ||
          10221 === e ||
          10222 === e ||
          10223 === e ||
          (e >= 10224 && e <= 10239) ||
          (e >= 10240 && e <= 10495) ||
          (e >= 10496 && e <= 10626) ||
          10627 === e ||
          10628 === e ||
          10629 === e ||
          10630 === e ||
          10631 === e ||
          10632 === e ||
          10633 === e ||
          10634 === e ||
          10635 === e ||
          10636 === e ||
          10637 === e ||
          10638 === e ||
          10639 === e ||
          10640 === e ||
          10641 === e ||
          10642 === e ||
          10643 === e ||
          10644 === e ||
          10645 === e ||
          10646 === e ||
          10647 === e ||
          10648 === e ||
          (e >= 10649 && e <= 10711) ||
          10712 === e ||
          10713 === e ||
          10714 === e ||
          10715 === e ||
          (e >= 10716 && e <= 10747) ||
          10748 === e ||
          10749 === e ||
          (e >= 10750 && e <= 11007) ||
          (e >= 11008 && e <= 11055) ||
          (e >= 11056 && e <= 11076) ||
          (e >= 11077 && e <= 11078) ||
          (e >= 11079 && e <= 11084) ||
          (e >= 11085 && e <= 11123) ||
          (e >= 11124 && e <= 11125) ||
          (e >= 11126 && e <= 11157) ||
          11158 === e ||
          (e >= 11159 && e <= 11263) ||
          (e >= 11776 && e <= 11777) ||
          11778 === e ||
          11779 === e ||
          11780 === e ||
          11781 === e ||
          (e >= 11782 && e <= 11784) ||
          11785 === e ||
          11786 === e ||
          11787 === e ||
          11788 === e ||
          11789 === e ||
          (e >= 11790 && e <= 11798) ||
          11799 === e ||
          (e >= 11800 && e <= 11801) ||
          11802 === e ||
          11803 === e ||
          11804 === e ||
          11805 === e ||
          (e >= 11806 && e <= 11807) ||
          11808 === e ||
          11809 === e ||
          11810 === e ||
          11811 === e ||
          11812 === e ||
          11813 === e ||
          11814 === e ||
          11815 === e ||
          11816 === e ||
          11817 === e ||
          (e >= 11818 && e <= 11822) ||
          11823 === e ||
          (e >= 11824 && e <= 11833) ||
          (e >= 11834 && e <= 11835) ||
          (e >= 11836 && e <= 11839) ||
          11840 === e ||
          11841 === e ||
          11842 === e ||
          (e >= 11843 && e <= 11855) ||
          (e >= 11856 && e <= 11857) ||
          11858 === e ||
          (e >= 11859 && e <= 11903) ||
          (e >= 12289 && e <= 12291) ||
          12296 === e ||
          12297 === e ||
          12298 === e ||
          12299 === e ||
          12300 === e ||
          12301 === e ||
          12302 === e ||
          12303 === e ||
          12304 === e ||
          12305 === e ||
          (e >= 12306 && e <= 12307) ||
          12308 === e ||
          12309 === e ||
          12310 === e ||
          12311 === e ||
          12312 === e ||
          12313 === e ||
          12314 === e ||
          12315 === e ||
          12316 === e ||
          12317 === e ||
          (e >= 12318 && e <= 12319) ||
          12320 === e ||
          12336 === e ||
          64830 === e ||
          64831 === e ||
          (e >= 65093 && e <= 65094)
        );
      }
      function ue(e) {
        e.forEach(function (e) {
          if ((delete e.location, h(e) || p(e)))
            for (var t in e.options)
              delete e.options[t].location, ue(e.options[t].value);
          else
            (c(e) && _(e.style)) || ((l(e) || f(e)) && m(e.style))
              ? delete e.style.location
              : d(e) && ue(e.children);
        });
      }
      function ce(e, t) {
        void 0 === t && (t = {}),
          (t = (0, a.pi)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t,
          ));
        var n = new ne(e, t).parse();
        if (n.err) {
          var i = SyntaxError(r[n.err.kind]);
          throw (
            ((i.location = n.err.location),
            (i.originalMessage = n.err.message),
            i)
          );
        }
        return (
          (null === t || void 0 === t ? void 0 : t.captureLocation) ||
            ue(n.val),
          n.val
        );
      }
    },
    88222: function (e, t, n) {
      'use strict';
      n.d(t, {
        bc: function () {
          return r;
        },
        Rw: function () {
          return o;
        },
        wI: function () {
          return a;
        },
        OV: function () {
          return s;
        },
        gb: function () {
          return u;
        },
        X9: function () {
          return c;
        },
        $6: function () {
          return l;
        },
      });
      var r,
        i = n(70655);
      (function (e) {
        (e['FORMAT_ERROR'] = 'FORMAT_ERROR'),
          (e['UNSUPPORTED_FORMATTER'] = 'UNSUPPORTED_FORMATTER'),
          (e['INVALID_CONFIG'] = 'INVALID_CONFIG'),
          (e['MISSING_DATA'] = 'MISSING_DATA'),
          (e['MISSING_TRANSLATION'] = 'MISSING_TRANSLATION');
      })(r || (r = {}));
      var o = (function (e) {
          function t(n, r, i) {
            var o =
              e.call(
                this,
                '[@formatjs/intl Error ' +
                  n +
                  '] ' +
                  r +
                  ' \n' +
                  (i ? '\n' + i.message + '\n' + i.stack : ''),
              ) || this;
            return (
              (o.code = n),
              'function' === typeof Error.captureStackTrace &&
                Error.captureStackTrace(o, t),
              o
            );
          }
          return (0, i.ZT)(t, e), t;
        })(Error),
        a = (function (e) {
          function t(t, n) {
            return e.call(this, r.UNSUPPORTED_FORMATTER, t, n) || this;
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        s = (function (e) {
          function t(t, n) {
            return e.call(this, r.INVALID_CONFIG, t, n) || this;
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        u = (function (e) {
          function t(t, n) {
            return e.call(this, r.MISSING_DATA, t, n) || this;
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        c = (function (e) {
          function t(t, n, i, o) {
            var a =
              e.call(
                this,
                r.FORMAT_ERROR,
                t +
                  ' \nLocale: ' +
                  n +
                  '\nMessageID: ' +
                  (null === i || void 0 === i ? void 0 : i.id) +
                  '\nDefault Message: ' +
                  (null === i || void 0 === i ? void 0 : i.defaultMessage) +
                  '\nDescription: ' +
                  (null === i || void 0 === i ? void 0 : i.description) +
                  ' \n',
                o,
              ) || this;
            return (a.descriptor = i), a;
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        l = (function (e) {
          function t(t, n) {
            var i =
              e.call(
                this,
                r.MISSING_TRANSLATION,
                'Missing message: "' +
                  t.id +
                  '" for locale "' +
                  n +
                  '", using ' +
                  (t.defaultMessage ? 'default message' : 'id') +
                  ' as fallback.',
              ) || this;
            return (i.descriptor = t), i;
          }
          return (0, i.ZT)(t, e), t;
        })(o);
    },
    82644: function (e, t, n) {
      'use strict';
      n.d(t, {
        L6: function () {
          return s;
        },
        Z0: function () {
          return c;
        },
        Sn: function () {
          return l;
        },
        ax: function () {
          return h;
        },
        TB: function () {
          return p;
        },
      });
      var r = n(70655),
        i = n(16284),
        o = n(95957),
        a = n(88222);
      function s(e, t, n) {
        return (
          void 0 === n && (n = {}),
          t.reduce(function (t, r) {
            return r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t;
          }, {})
        );
      }
      var u = function (e) {
          0;
        },
        c = {
          formats: {},
          messages: {},
          timeZone: void 0,
          defaultLocale: 'en',
          defaultFormats: {},
          onError: u,
        };
      function l() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }
      function f(e) {
        return {
          create: function () {
            return {
              has: function (t) {
                return t in e;
              },
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      function h(e) {
        void 0 === e && (e = l());
        var t = Intl.RelativeTimeFormat,
          n = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, o.Z)(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.DateTimeFormat).bind.apply(
                e,
                (0, r.ev)([void 0], t),
              ))();
            },
            { cache: f(e.dateTime), strategy: o.A.variadic },
          ),
          u = (0, o.Z)(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.NumberFormat).bind.apply(
                e,
                (0, r.ev)([void 0], t),
              ))();
            },
            { cache: f(e.number), strategy: o.A.variadic },
          ),
          c = (0, o.Z)(
            function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return new ((e = Intl.PluralRules).bind.apply(
                e,
                (0, r.ev)([void 0], t),
              ))();
            },
            { cache: f(e.pluralRules), strategy: o.A.variadic },
          );
        return {
          getDateTimeFormat: s,
          getNumberFormat: u,
          getMessageFormat: (0, o.Z)(
            function (e, t, n, o) {
              return new i.C(
                e,
                t,
                n,
                (0, r.pi)(
                  {
                    formatters: {
                      getNumberFormat: u,
                      getDateTimeFormat: s,
                      getPluralRules: c,
                    },
                  },
                  o || {},
                ),
              );
            },
            { cache: f(e.message), strategy: o.A.variadic },
          ),
          getRelativeTimeFormat: (0, o.Z)(
            function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return new (t.bind.apply(t, (0, r.ev)([void 0], e)))();
            },
            { cache: f(e.relativeTime), strategy: o.A.variadic },
          ),
          getPluralRules: c,
          getListFormat: (0, o.Z)(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (n.bind.apply(n, (0, r.ev)([void 0], e)))();
            },
            { cache: f(e.list), strategy: o.A.variadic },
          ),
          getDisplayNames: (0, o.Z)(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (a.bind.apply(a, (0, r.ev)([void 0], e)))();
            },
            { cache: f(e.displayNames), strategy: o.A.variadic },
          ),
        };
      }
      function p(e, t, n, r) {
        var i,
          o = e && e[t];
        if ((o && (i = o[n]), i)) return i;
        r(new a.wI('No ' + t + ' format named: ' + n));
      }
    },
    16284: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return f;
        },
      });
      var r = n(70655),
        i = n(83695),
        o = n(95957),
        a = n(61092);
      function s(e, t) {
        return t
          ? (0, r.pi)(
              (0, r.pi)((0, r.pi)({}, e || {}), t || {}),
              Object.keys(e).reduce(function (n, i) {
                return (n[i] = (0, r.pi)((0, r.pi)({}, e[i]), t[i] || {})), n;
              }, {}),
            )
          : e;
      }
      function u(e, t) {
        return t
          ? Object.keys(e).reduce(function (n, r) {
              return (n[r] = s(e[r], t[r])), n;
            }, (0, r.pi)({}, e))
          : e;
      }
      function c(e) {
        return {
          create: function () {
            return {
              has: function (t) {
                return t in e;
              },
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      function l(e) {
        return (
          void 0 === e && (e = { number: {}, dateTime: {}, pluralRules: {} }),
          {
            getNumberFormat: (0, o.Z)(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.NumberFormat).bind.apply(
                  e,
                  (0, r.ev)([void 0], t),
                ))();
              },
              { cache: c(e.number), strategy: o.A.variadic },
            ),
            getDateTimeFormat: (0, o.Z)(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.DateTimeFormat).bind.apply(
                  e,
                  (0, r.ev)([void 0], t),
                ))();
              },
              { cache: c(e.dateTime), strategy: o.A.variadic },
            ),
            getPluralRules: (0, o.Z)(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.PluralRules).bind.apply(
                  e,
                  (0, r.ev)([void 0], t),
                ))();
              },
              { cache: c(e.pluralRules), strategy: o.A.variadic },
            ),
          }
        );
      }
      var f = (function () {
        function e(t, n, r, i) {
          var o = this;
          if (
            (void 0 === n && (n = e.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (e) {
              var t = o.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce(function (e, t) {
                return (
                  e.length &&
                  t.type === a.du.literal &&
                  'string' === typeof e[e.length - 1]
                    ? (e[e.length - 1] += t.value)
                    : e.push(t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || '' : n;
            }),
            (this.formatToParts = function (e) {
              return (0, a.FK)(
                o.ast,
                o.locales,
                o.formatters,
                o.formats,
                e,
                void 0,
                o.message,
              );
            }),
            (this.resolvedOptions = function () {
              return {
                locale: Intl.NumberFormat.supportedLocalesOf(o.locales)[0],
              };
            }),
            (this.getAst = function () {
              return o.ast;
            }),
            'string' === typeof t)
          ) {
            if (((this.message = t), !e.__parse))
              throw new TypeError(
                'IntlMessageFormat.__parse must be set to process `message` of type `string`',
              );
            this.ast = e.__parse(t, {
              ignoreTag: null === i || void 0 === i ? void 0 : i.ignoreTag,
            });
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw new TypeError(
              'A message must be provided as a String or AST.',
            );
          (this.formats = u(e.formats, r)),
            (this.locales = n),
            (this.formatters = (i && i.formatters) || l(this.formatterCache));
        }
        return (
          Object.defineProperty(e, 'defaultLocale', {
            get: function () {
              return (
                e.memoizedDefaultLocale ||
                  (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                e.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.memoizedDefaultLocale = null),
          (e.__parse = i.Qc),
          (e.formats = {
            number: {
              integer: { maximumFractionDigits: 0 },
              currency: { style: 'currency' },
              percent: { style: 'percent' },
            },
            date: {
              short: { month: 'numeric', day: 'numeric', year: '2-digit' },
              medium: { month: 'short', day: 'numeric', year: 'numeric' },
              long: { month: 'long', day: 'numeric', year: 'numeric' },
              full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              },
            },
            time: {
              short: { hour: 'numeric', minute: 'numeric' },
              medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
              long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
              },
              full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
              },
            },
          }),
          e
        );
      })();
    },
    11050: function (e, t, n) {
      'use strict';
      n.d(t, {
        jK: function () {
          return r;
        },
        u_: function () {
          return o;
        },
        C8: function () {
          return a;
        },
        YR: function () {
          return s;
        },
        HR: function () {
          return u;
        },
      });
      var r,
        i = n(70655);
      (function (e) {
        (e['MISSING_VALUE'] = 'MISSING_VALUE'),
          (e['INVALID_VALUE'] = 'INVALID_VALUE'),
          (e['MISSING_INTL_API'] = 'MISSING_INTL_API');
      })(r || (r = {}));
      var o = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t) || this;
            return (i.code = n), (i.originalMessage = r), i;
          }
          return (
            (0, i.ZT)(t, e),
            (t.prototype.toString = function () {
              return '[formatjs Error: ' + this.code + '] ' + this.message;
            }),
            t
          );
        })(Error),
        a = (function (e) {
          function t(t, n, i, o) {
            return (
              e.call(
                this,
                'Invalid values for "' +
                  t +
                  '": "' +
                  n +
                  '". Options are "' +
                  Object.keys(i).join('", "') +
                  '"',
                r.INVALID_VALUE,
                o,
              ) || this
            );
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        s = (function (e) {
          function t(t, n, i) {
            return (
              e.call(
                this,
                'Value for "' + t + '" must be of type ' + n,
                r.INVALID_VALUE,
                i,
              ) || this
            );
          }
          return (0, i.ZT)(t, e), t;
        })(o),
        u = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                'The intl string context variable "' +
                  t +
                  '" was not provided to the string "' +
                  n +
                  '"',
                r.MISSING_VALUE,
                n,
              ) || this
            );
          }
          return (0, i.ZT)(t, e), t;
        })(o);
    },
    61092: function (e, t, n) {
      'use strict';
      n.d(t, {
        du: function () {
          return r;
        },
        Gt: function () {
          return s;
        },
        FK: function () {
          return u;
        },
      });
      var r,
        i = n(83695),
        o = n(11050);
      function a(e) {
        return e.length < 2
          ? e
          : e.reduce(function (e, t) {
              var n = e[e.length - 1];
              return (
                n && n.type === r.literal && t.type === r.literal
                  ? (n.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function s(e) {
        return 'function' === typeof e;
      }
      function u(e, t, n, c, l, f, h) {
        if (1 === e.length && (0, i.O4)(e[0]))
          return [{ type: r.literal, value: e[0].value }];
        for (var p = [], v = 0, d = e; v < d.length; v++) {
          var _ = d[v];
          if ((0, i.O4)(_)) p.push({ type: r.literal, value: _.value });
          else if ((0, i.yx)(_))
            'number' === typeof f &&
              p.push({
                type: r.literal,
                value: n.getNumberFormat(t).format(f),
              });
          else {
            var m = _.value;
            if (!l || !(m in l)) throw new o.HR(m, h);
            var y = l[m];
            if ((0, i.VG)(_))
              (y && 'string' !== typeof y && 'number' !== typeof y) ||
                (y =
                  'string' === typeof y || 'number' === typeof y
                    ? String(y)
                    : ''),
                p.push({
                  type: 'string' === typeof y ? r.literal : r.object,
                  value: y,
                });
            else if ((0, i.rp)(_)) {
              var g =
                'string' === typeof _.style
                  ? c.date[_.style]
                  : (0, i.Ii)(_.style)
                  ? _.style.parsedOptions
                  : void 0;
              p.push({
                type: r.literal,
                value: n.getDateTimeFormat(t, g).format(y),
              });
            } else if ((0, i.pe)(_)) {
              g =
                'string' === typeof _.style
                  ? c.time[_.style]
                  : (0, i.Ii)(_.style)
                  ? _.style.parsedOptions
                  : void 0;
              p.push({
                type: r.literal,
                value: n.getDateTimeFormat(t, g).format(y),
              });
            } else if ((0, i.uf)(_)) {
              g =
                'string' === typeof _.style
                  ? c.number[_.style]
                  : (0, i.Wh)(_.style)
                  ? _.style.parsedOptions
                  : void 0;
              g && g.scale && (y *= g.scale || 1),
                p.push({
                  type: r.literal,
                  value: n.getNumberFormat(t, g).format(y),
                });
            } else {
              if ((0, i.HI)(_)) {
                var b = _.children,
                  E = _.value,
                  O = l[E];
                if (!s(O)) throw new o.YR(E, 'function', h);
                var A = u(b, t, n, c, l, f),
                  T = O(
                    A.map(function (e) {
                      return e.value;
                    }),
                  );
                Array.isArray(T) || (T = [T]),
                  p.push.apply(
                    p,
                    T.map(function (e) {
                      return {
                        type: 'string' === typeof e ? r.literal : r.object,
                        value: e,
                      };
                    }),
                  );
              }
              if ((0, i.Wi)(_)) {
                var w = _.options[y] || _.options.other;
                if (!w) throw new o.C8(_.value, y, Object.keys(_.options), h);
                p.push.apply(p, u(w.value, t, n, c, l));
              } else if ((0, i.Jo)(_)) {
                w = _.options['=' + y];
                if (!w) {
                  if (!Intl.PluralRules)
                    throw new o.u_(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      o.jK.MISSING_INTL_API,
                      h,
                    );
                  var S = n
                    .getPluralRules(t, { type: _.pluralType })
                    .select(y - (_.offset || 0));
                  w = _.options[S] || _.options.other;
                }
                if (!w) throw new o.C8(_.value, y, Object.keys(_.options), h);
                p.push.apply(p, u(w.value, t, n, c, l, y - (_.offset || 0)));
              } else;
            }
          }
        }
        return a(p);
      }
      (function (e) {
        (e[(e['literal'] = 0)] = 'literal'), (e[(e['object'] = 1)] = 'object');
      })(r || (r = {}));
    },
    12938: function (e, t, n) {
      'use strict';
      n.d(t, {
        Qj: function () {
          return I;
        },
        FY: function () {
          return A;
        },
        Pi: function () {
          return N;
        },
      });
      var r = n(68949),
        i = n(67294);
      if (!i.useState)
        throw new Error('mobx-react-lite requires React with Hooks support');
      if (!r.rC)
        throw new Error(
          'mobx-react-lite@3 requires mobx at least version 6 to be available',
        );
      var o = n(73935);
      function a(e) {
        e();
      }
      function s(e) {
        e || (e = a), (0, r.jQ)({ reactionScheduler: e });
      }
      var u = function (e, t) {
          var n = 'function' === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            while ((void 0 === t || t-- > 0) && !(r = o.next()).done)
              a.push(r.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              r && !r.done && (n = o['return']) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        c = [];
      function l() {
        var e = u((0, i.useState)(0), 2),
          t = e[1],
          n = (0, i.useCallback)(function () {
            t(function (e) {
              return e + 1;
            });
          }, c);
        return n;
      }
      function f(e) {
        return (0, r.Gf)(e);
      }
      var h =
        'undefined' === typeof FinalizationRegistry
          ? void 0
          : FinalizationRegistry;
      function p(e) {
        var t = {
          reaction: e,
          mounted: !1,
          changedBeforeMount: !1,
          cleanAt: Date.now() + v,
        };
        return t;
      }
      var v = 1e4,
        d = 1e4;
      function _(e) {
        var t = new Map(),
          n = 1,
          r = new e(function (e) {
            var n = t.get(e);
            n && (n.reaction.dispose(), t.delete(e));
          });
        return {
          addReactionToTrack: function (e, i, o) {
            var a = n++;
            return (
              r.register(o, a, e),
              (e.current = p(i)),
              (e.current.finalizationRegistryCleanupToken = a),
              t.set(a, e.current),
              e.current
            );
          },
          recordReactionAsCommitted: function (e) {
            r.unregister(e),
              e.current &&
                e.current.finalizationRegistryCleanupToken &&
                t.delete(e.current.finalizationRegistryCleanupToken);
          },
          forceCleanupTimerToRunNowForTests: function () {},
          resetCleanupScheduleForTests: function () {},
        };
      }
      var m = function (e) {
        var t = 'function' === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      };
      function y() {
        var e,
          t = new Set();
        function n() {
          e && (clearTimeout(e), s());
        }
        function r() {
          var n, r;
          if (t.size > 0) {
            try {
              for (var i = m(t), o = i.next(); !o.done; o = i.next()) {
                var a = o.value,
                  s = a.current;
                s && (s.reaction.dispose(), (a.current = null));
              }
            } catch (u) {
              n = { error: u };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            t.clear();
          }
          e && (clearTimeout(e), (e = void 0));
        }
        function i() {
          void 0 === e && (e = setTimeout(s, d));
        }
        function o(e) {
          t.add(e), i();
        }
        function a(e) {
          t.delete(e);
        }
        function s() {
          e = void 0;
          var n = Date.now();
          t.forEach(function (e) {
            var r = e.current;
            r &&
              n >= r.cleanAt &&
              (r.reaction.dispose(), (e.current = null), t.delete(e));
          }),
            t.size > 0 && i();
        }
        return {
          addReactionToTrack: function (e, t, n) {
            return (e.current = p(t)), o(e), e.current;
          },
          recordReactionAsCommitted: a,
          forceCleanupTimerToRunNowForTests: n,
          resetCleanupScheduleForTests: r,
        };
      }
      var g = h ? _(h) : y(),
        b = g.addReactionToTrack,
        E = g.recordReactionAsCommitted,
        O =
          (g.resetCleanupScheduleForTests,
          g.forceCleanupTimerToRunNowForTests,
          !1);
      function A() {
        return O;
      }
      var T = function (e, t) {
        var n = 'function' === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          while ((void 0 === t || t-- > 0) && !(r = o.next()).done)
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o['return']) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      };
      function w(e) {
        return 'observer' + e;
      }
      var S = (function () {
        function e() {}
        return e;
      })();
      function P(e, t) {
        if ((void 0 === t && (t = 'observed'), A())) return e();
        var n = T(i.useState(new S()), 1),
          o = n[0],
          a = l(),
          s = i.useRef(null);
        if (!s.current)
          var u = new r.le(w(t), function () {
              c.mounted ? a() : (c.changedBeforeMount = !0);
            }),
            c = b(s, u, o);
        var h,
          p,
          v = s.current.reaction;
        if (
          (i.useDebugValue(v, f),
          i.useEffect(function () {
            return (
              E(s),
              s.current
                ? ((s.current.mounted = !0),
                  s.current.changedBeforeMount &&
                    ((s.current.changedBeforeMount = !1), a()))
                : ((s.current = {
                    reaction: new r.le(w(t), function () {
                      a();
                    }),
                    mounted: !0,
                    changedBeforeMount: !1,
                    cleanAt: 1 / 0,
                  }),
                  a()),
              function () {
                s.current.reaction.dispose(), (s.current = null);
              }
            );
          }, []),
          v.track(function () {
            try {
              h = e();
            } catch (t) {
              p = t;
            }
          }),
          p)
        )
          throw p;
        return h;
      }
      var R = function () {
        return (
          (R =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          R.apply(this, arguments)
        );
      };
      function N(e, t) {
        if (A()) return e;
        var n,
          r = R({ forwardRef: !1 }, t),
          o = e.displayName || e.name,
          a = function (t, n) {
            return P(function () {
              return e(t, n);
            }, o);
          };
        return (
          (a.displayName = o),
          (n = r.forwardRef
            ? (0, i.memo)((0, i.forwardRef)(a))
            : (0, i.memo)(a)),
          L(e, n),
          (n.displayName = o),
          n
        );
      }
      var C = { $$typeof: !0, render: !0, compare: !0, type: !0 };
      function L(e, t) {
        Object.keys(e).forEach(function (n) {
          C[n] ||
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      }
      function I(e) {
        var t = e.children,
          n = e.render,
          r = t || n;
        return 'function' !== typeof r ? null : P(r);
      }
      I.displayName = 'Observer';
      s(o.unstable_batchedUpdates);
    },
    29323: function (e, t, n) {
      'use strict';
      n.d(t, {
        zt: function () {
          return G;
        },
        f3: function () {
          return K;
        },
      });
      var r = n(68949),
        i = n(67294),
        o = n(12938),
        a = 0;
      function s(e) {
        if ('function' === typeof Symbol) return Symbol(e);
        var t = '__$mobx-react ' + e + ' (' + a + ')';
        return a++, t;
      }
      var u = {};
      function c(e) {
        return u[e] || (u[e] = s(e)), u[e];
      }
      function l(e, t) {
        if (f(e, t)) return !0;
        if (
          'object' !== typeof e ||
          null === e ||
          'object' !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
          if (!Object.hasOwnProperty.call(t, n[i]) || !f(e[n[i]], t[n[i]]))
            return !1;
        return !0;
      }
      function f(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t;
      }
      var h = {
        $$typeof: 1,
        render: 1,
        compare: 1,
        type: 1,
        childContextTypes: 1,
        contextType: 1,
        contextTypes: 1,
        defaultProps: 1,
        getDefaultProps: 1,
        getDerivedStateFromError: 1,
        getDerivedStateFromProps: 1,
        mixins: 1,
        displayName: 1,
        propTypes: 1,
      };
      function p(e, t) {
        var n = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
        Object.getOwnPropertyNames(e).forEach(function (r) {
          h[r] ||
            -1 !== n.indexOf(r) ||
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        });
      }
      function v(e, t, n) {
        Object.hasOwnProperty.call(e, t)
          ? (e[t] = n)
          : Object.defineProperty(e, t, {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: n,
            });
      }
      var d = c('patchMixins'),
        _ = c('patchedDefinition');
      function m(e, t) {
        var n = (e[d] = e[d] || {}),
          r = (n[t] = n[t] || {});
        return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
      }
      function y(e, t) {
        for (
          var n = this,
            r = arguments.length,
            i = new Array(r > 2 ? r - 2 : 0),
            o = 2;
          o < r;
          o++
        )
          i[o - 2] = arguments[o];
        t.locks++;
        try {
          var a;
          return void 0 !== e && null !== e && (a = e.apply(this, i)), a;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(n, i);
              });
        }
      }
      function g(e, t) {
        var n = function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          y.call.apply(y, [this, e, t].concat(r));
        };
        return n;
      }
      function b(e, t, n) {
        var r = m(e, t);
        r.methods.indexOf(n) < 0 && r.methods.push(n);
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (!i || !i[_]) {
          var o = e[t],
            a = E(e, t, i ? i.enumerable : void 0, r, o);
          Object.defineProperty(e, t, a);
        }
      }
      function E(e, t, n, r, i) {
        var o,
          a = g(i, r);
        return (
          (o = {}),
          (o[_] = !0),
          (o.get = function () {
            return a;
          }),
          (o.set = function (i) {
            if (this === e) a = g(i, r);
            else {
              var o = E(this, t, n, r, i);
              Object.defineProperty(this, t, o);
            }
          }),
          (o.configurable = !0),
          (o.enumerable = n),
          o
        );
      }
      var O = r.so || '$mobx',
        A = c('isMobXReactObserver'),
        T = c('isUnmounted'),
        w = c('skipRender'),
        S = c('isForcingUpdate');
      function P(e) {
        var t = e.prototype;
        if (e[A]) {
          var n = R(t);
          console.warn(
            'The provided component class (' +
              n +
              ') \n                has already been declared as an observer component.',
          );
        } else e[A] = !0;
        if (t.componentWillReact)
          throw new Error(
            'The componentWillReact life-cycle event is no longer supported',
          );
        if (e['__proto__'] !== i.PureComponent)
          if (t.shouldComponentUpdate) {
            if (t.shouldComponentUpdate !== C)
              throw new Error(
                'It is not allowed to use shouldComponentUpdate in observer based components.',
              );
          } else t.shouldComponentUpdate = C;
        L(t, 'props'), L(t, 'state');
        var r = t.render;
        return (
          (t.render = function () {
            return N.call(this, r);
          }),
          b(t, 'componentWillUnmount', function () {
            var e;
            if (
              !0 !== (0, o.FY)() &&
              (null == (e = this.render[O]) || e.dispose(),
              (this[T] = !0),
              !this.render[O])
            ) {
              var t = R(this);
              console.warn(
                'The reactive render of an observer class component (' +
                  t +
                  ') \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.',
              );
            }
          }),
          e
        );
      }
      function R(e) {
        return (
          e.displayName ||
          e.name ||
          (e.constructor &&
            (e.constructor.displayName || e.constructor.name)) ||
          '<component>'
        );
      }
      function N(e) {
        var t = this;
        if (!0 === (0, o.FY)()) return e.call(this);
        v(this, w, !1), v(this, S, !1);
        var n = R(this),
          a = e.bind(this),
          s = !1,
          u = new r.le(n + '.render()', function () {
            if (!s && ((s = !0), !0 !== t[T])) {
              var e = !0;
              try {
                v(t, S, !0),
                  t[w] || i.Component.prototype.forceUpdate.call(t),
                  (e = !1);
              } finally {
                v(t, S, !1), e && u.dispose();
              }
            }
          });
        function c() {
          s = !1;
          var e = void 0,
            t = void 0;
          if (
            (u.track(function () {
              try {
                t = (0, r.$$)(!1, a);
              } catch (n) {
                e = n;
              }
            }),
            e)
          )
            throw e;
          return t;
        }
        return (
          (u['reactComponent'] = this),
          (c[O] = u),
          (this.render = c),
          c.call(this)
        );
      }
      function C(e, t) {
        return (
          (0, o.FY)() &&
            console.warn(
              '[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.',
            ),
          this.state !== t || !l(this.props, e)
        );
      }
      function L(e, t) {
        var n = c('reactProp_' + t + '_valueHolder'),
          i = c('reactProp_' + t + '_atomHolder');
        function o() {
          return this[i] || v(this, i, (0, r.cp)('reactive ' + t)), this[i];
        }
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var e = !1;
            return (
              r.wM && r.mJ && (e = (0, r.wM)(!0)),
              o.call(this).reportObserved(),
              r.wM && r.mJ && (0, r.mJ)(e),
              this[n]
            );
          },
          set: function (e) {
            this[S] || l(this[n], e)
              ? v(this, n, e)
              : (v(this, n, e),
                v(this, w, !0),
                o.call(this).reportChanged(),
                v(this, w, !1));
          },
        });
      }
      var I = 'function' === typeof Symbol && Symbol['for'],
        k = I
          ? Symbol['for']('react.forward_ref')
          : 'function' === typeof i.forwardRef &&
            (0, i.forwardRef)(function (e) {
              return null;
            })['$$typeof'],
        x = I
          ? Symbol['for']('react.memo')
          : 'function' === typeof i.memo &&
            (0, i.memo)(function (e) {
              return null;
            })['$$typeof'];
      function M(e) {
        if (
          (!0 === e['isMobxInjector'] &&
            console.warn(
              "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'",
            ),
          x && e['$$typeof'] === x)
        )
          throw new Error(
            "Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.",
          );
        if (k && e['$$typeof'] === k) {
          var t = e['render'];
          if ('function' !== typeof t)
            throw new Error('render property of ForwardRef was not a function');
          return (0, i.forwardRef)(function () {
            var e = arguments;
            return (0, i.createElement)(o.Qj, null, function () {
              return t.apply(void 0, e);
            });
          });
        }
        return 'function' !== typeof e ||
          (e.prototype && e.prototype.render) ||
          e['isReactClass'] ||
          Object.prototype.isPrototypeOf.call(i.Component, e)
          ? P(e)
          : (0, o.Pi)(e);
      }
      function j() {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          j.apply(this, arguments)
        );
      }
      function D(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var U = i.createContext({});
      function G(e) {
        var t = e.children,
          n = D(e, ['children']),
          r = i.useContext(U),
          o = i.useRef(j({}, r, n)),
          a = o.current;
        return i.createElement(U.Provider, { value: a }, t);
      }
      function V(e, t, n, r) {
        var o = i.forwardRef(function (n, r) {
          var o = j({}, n),
            a = i.useContext(U);
          return (
            Object.assign(o, e(a || {}, o) || {}),
            r && (o.ref = r),
            i.createElement(t, o)
          );
        });
        return (
          r && (o = M(o)),
          (o['isMobxInjector'] = !0),
          p(t, o),
          (o['wrappedComponent'] = t),
          (o.displayName = F(t, n)),
          o
        );
      }
      function F(e, t) {
        var n,
          r =
            e.displayName ||
            e.name ||
            (e.constructor && e.constructor.name) ||
            'Component';
        return (
          (n = t ? 'inject-with-' + t + '(' + r + ')' : 'inject(' + r + ')'), n
        );
      }
      function B(e) {
        return function (t, n) {
          return (
            e.forEach(function (e) {
              if (!(e in n)) {
                if (!(e in t))
                  throw new Error(
                    "MobX injector: Store '" +
                      e +
                      "' is not available! Make sure it is provided by some Provider",
                  );
                n[e] = t[e];
              }
            }),
            n
          );
        };
      }
      function K() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if ('function' === typeof arguments[0]) {
          var r = arguments[0];
          return function (e) {
            return V(r, e, r.name, !0);
          };
        }
        return function (e) {
          return V(B(t), e, t.join('-'), !1);
        };
      }
      G.displayName = 'MobXProvider';
      if (!i.Component)
        throw new Error('mobx-react requires React to be available');
      if (!r.LO) throw new Error('mobx-react requires mobx to be available');
    },
    68949: function (e, t, n) {
      'use strict';
      n.d(t, {
        so: function () {
          return z;
        },
        le: function () {
          return Kt;
        },
        $$: function () {
          return ot;
        },
        mJ: function () {
          return Pt;
        },
        wM: function () {
          return St;
        },
        jQ: function () {
          return An;
        },
        cp: function () {
          return W;
        },
        Gf: function () {
          return wn;
        },
        Ei: function () {
          return lr;
        },
        LJ: function () {
          return mr;
        },
        Pb: function () {
          return Rr;
        },
        rC: function () {
          return Wn;
        },
        LO: function () {
          return Xe;
        },
        rg: function () {
          return At;
        },
      });
      function r(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          'number' === typeof e
            ? '[MobX] minified error nr: ' +
              e +
              (n.length ? ' ' + n.map(String).join(',') : '') +
              '. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts'
            : '[MobX] ' + e,
        );
      }
      var i = {};
      function o() {
        return 'undefined' !== typeof globalThis
          ? globalThis
          : 'undefined' !== typeof window
          ? window
          : 'undefined' !== typeof n.g
          ? n.g
          : 'undefined' !== typeof self
          ? self
          : i;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        u = Object.defineProperty,
        c = Object.prototype,
        l = [];
      Object.freeze(l);
      var f = {};
      Object.freeze(f);
      var h = 'undefined' !== typeof Proxy,
        p = Object.toString();
      function v() {
        h || r('Proxy not available');
      }
      function d(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var _ = function () {};
      function m(e) {
        return 'function' === typeof e;
      }
      function y(e) {
        var t = typeof e;
        switch (t) {
          case 'string':
          case 'symbol':
          case 'number':
            return !0;
        }
        return !1;
      }
      function g(e) {
        return null !== e && 'object' === typeof e;
      }
      function b(e) {
        var t;
        if (!g(e)) return !1;
        var n = Object.getPrototypeOf(e);
        return (
          null == n ||
          (null == (t = n.constructor) ? void 0 : t.toString()) === p
        );
      }
      function E(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ('GeneratorFunction' === t.name ||
            'GeneratorFunction' === t.displayName)
        );
      }
      function O(e, t, n) {
        u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function A(e, t, n) {
        u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function T(e, t) {
        var n = 'isMobX' + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return g(e) && !0 === e[n];
          }
        );
      }
      function w(e) {
        return e instanceof Map;
      }
      function S(e) {
        return e instanceof Set;
      }
      var P = 'undefined' !== typeof Object.getOwnPropertySymbols;
      function R(e) {
        var t = Object.keys(e);
        if (!P) return t;
        var n = Object.getOwnPropertySymbols(e);
        return n.length
          ? [].concat(
              t,
              n.filter(function (t) {
                return c.propertyIsEnumerable.call(e, t);
              }),
            )
          : t;
      }
      var N =
        'undefined' !== typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : P
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e),
              );
            }
          : Object.getOwnPropertyNames;
      function C(e) {
        return null === e ? null : 'object' === typeof e ? '' + e : e;
      }
      function L(e, t) {
        return c.hasOwnProperty.call(e, t);
      }
      var I =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            N(e).forEach(function (n) {
              t[n] = s(e, n);
            }),
            t
          );
        };
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function x(e, t, n) {
        return t && k(e.prototype, t), n && k(e, n), e;
      }
      function M() {
        return (
          (M =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          M.apply(this, arguments)
        );
      }
      function j(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function U(e, t) {
        if (e) {
          if ('string' === typeof e) return G(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? G(e, t)
              : void 0
          );
        }
      }
      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = U(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        return (n = e[Symbol.iterator]()), n.next.bind(n);
      }
      var F = Symbol('mobx-stored-annotations');
      function B(e) {
        function t(t, n) {
          K(t, n, e);
        }
        return Object.assign(t, e);
      }
      function K(e, t, n) {
        L(e, F) || O(e, F, M({}, e[F])), X(e, n, t), ae(n) || (e[F][t] = n);
      }
      function X(e, t, n) {}
      function q(e) {
        return L(e, F) || O(e, F, M({}, e[F])), e[F];
      }
      var z = Symbol('mobx administration'),
        Z = (function () {
          function e(e) {
            void 0 === e && (e = 'Atom'),
              (this.name_ = void 0),
              (this.isPendingUnobservation_ = !1),
              (this.isBeingObserved_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = lt.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return Gt(this);
            }),
            (t.reportChanged = function () {
              Dt(), Vt(this), Ut();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        H = T('Atom', Z);
      function W(e, t, n) {
        void 0 === t && (t = _), void 0 === n && (n = _);
        var r = new Z(e);
        return t !== _ && mn(r, t), n !== _ && yn(r, n), r;
      }
      function Y(e, t) {
        return e === t;
      }
      function $(e, t) {
        return Kr(e, t);
      }
      function J(e, t) {
        return Kr(e, t, 1);
      }
      function Q(e, t) {
        return Object.is(e, t);
      }
      var ee = { identity: Y, structural: $, default: Q, shallow: J };
      function te(e, t, n) {
        return jn(e)
          ? e
          : Array.isArray(e)
          ? Xe.array(e, { name: n })
          : b(e)
          ? Xe.object(e, void 0, { name: n })
          : w(e)
          ? Xe.map(e, { name: n })
          : S(e)
          ? Xe.set(e, { name: n })
          : 'function' !== typeof e || fn(e) || xn(e)
          ? e
          : E(e)
          ? In(e)
          : ln(n, e);
      }
      function ne(e, t, n) {
        return void 0 === e || null === e || Rr(e) || lr(e) || mr(e) || Er(e)
          ? e
          : Array.isArray(e)
          ? Xe.array(e, { name: n, deep: !1 })
          : b(e)
          ? Xe.object(e, void 0, { name: n, deep: !1 })
          : w(e)
          ? Xe.map(e, { name: n, deep: !1 })
          : S(e)
          ? Xe.set(e, { name: n, deep: !1 })
          : void 0;
      }
      function re(e) {
        return e;
      }
      function ie(e, t) {
        return Kr(e, t) ? t : e;
      }
      var oe = 'override';
      function ae(e) {
        return e.annotationType_ === oe;
      }
      function se(e, t) {
        return { annotationType_: e, options_: t, make_: ue, extend_: ce };
      }
      function ue(e, t, n, r) {
        var i;
        if (null == (i = this.options_) ? void 0 : i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (fn(n.value)) return 1;
        var o = fe(e, this, t, n, !1);
        return u(r, t, o), 2;
      }
      function ce(e, t, n, r) {
        var i = fe(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function le(e, t, n, r) {
        t.annotationType_, r.value;
      }
      function fe(e, t, n, r, i) {
        var o, a, s, u, c;
        void 0 === i && (i = It.safeDescriptors), le(e, t, n, r);
        var l,
          f = r.value;
        (null == (o = t.options_) ? void 0 : o.bound) &&
          (f = f.bind(null != (l = e.proxy_) ? l : e.target_));
        return {
          value: tt(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : n.toString(),
            f,
            null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
          ),
          configurable: !i || e.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function he(e, t) {
        return { annotationType_: e, options_: t, make_: pe, extend_: ve };
      }
      function pe(e, t, n, r) {
        var i;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          (null == (i = this.options_) ? void 0 : i.bound) &&
          !xn(e.target_[t]) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (xn(n.value)) return 1;
        var o = _e(e, this, t, n, !1, !1);
        return u(r, t, o), 2;
      }
      function ve(e, t, n, r) {
        var i,
          o = _e(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function de(e, t, n, r) {
        t.annotationType_, r.value;
      }
      function _e(e, t, n, r, i, o) {
        void 0 === o && (o = It.safeDescriptors), de(e, t, n, r);
        var a,
          s = r.value;
        i && (s = s.bind(null != (a = e.proxy_) ? a : e.target_));
        return {
          value: In(s),
          configurable: !o || e.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function me(e, t) {
        return { annotationType_: e, options_: t, make_: ye, extend_: ge };
      }
      function ye(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ge(e, t, n, r) {
        return (
          be(e, this, t, n),
          e.defineComputedProperty_(
            t,
            M({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function be(e, t, n, r) {
        t.annotationType_, r.get;
      }
      function Ee(e, t) {
        return { annotationType_: e, options_: t, make_: Oe, extend_: Ae };
      }
      function Oe(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function Ae(e, t, n, r) {
        var i, o;
        return (
          Te(e, this, t, n),
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : te,
            r,
          )
        );
      }
      function Te(e, t, n, r) {
        t.annotationType_;
      }
      var we = 'true',
        Se = Pe();
      function Pe(e) {
        return { annotationType_: we, options_: e, make_: Re, extend_: Ne };
      }
      function Re(e, t, n, r) {
        var i, o;
        if (n.get) return We.make_(e, t, n, r);
        if (n.set) {
          var a = tt(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !It.safeDescriptors || e.isPlainObject_,
                set: a,
              })
              ? 0
              : 2
            : (u(r, t, { configurable: !0, set: a }), 2);
        }
        if (r !== e.target_ && 'function' === typeof n.value) {
          var s;
          if (E(n.value)) {
            var c,
              l = (null == (c = this.options_) ? void 0 : c.autoBind)
                ? In.bound
                : In;
            return l.make_(e, t, n, r);
          }
          var f = (null == (s = this.options_) ? void 0 : s.autoBind)
            ? ln.bound
            : ln;
          return f.make_(e, t, n, r);
        }
        var h,
          p =
            !1 === (null == (i = this.options_) ? void 0 : i.deep)
              ? Xe.ref
              : Xe;
        'function' === typeof n.value &&
          (null == (o = this.options_) ? void 0 : o.autoBind) &&
          (n.value = n.value.bind(null != (h = e.proxy_) ? h : e.target_));
        return p.make_(e, t, n, r);
      }
      function Ne(e, t, n, r) {
        var i, o, a;
        if (n.get) return We.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !It.safeDescriptors || e.isPlainObject_,
              set: tt(t.toString(), n.set),
            },
            r,
          );
        'function' === typeof n.value &&
          (null == (i = this.options_) ? void 0 : i.autoBind) &&
          (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        var s =
          !1 === (null == (o = this.options_) ? void 0 : o.deep) ? Xe.ref : Xe;
        return s.extend_(e, t, n, r);
      }
      var Ce = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function Le(e) {
        return e || Ce;
      }
      Object.freeze(Ce);
      var Ie = Ee('observable'),
        ke = Ee('observable.ref', { enhancer: re }),
        xe = Ee('observable.shallow', { enhancer: ne }),
        Me = Ee('observable.struct', { enhancer: ie }),
        je = B(Ie);
      function De(e) {
        return !0 === e.deep ? te : !1 === e.deep ? re : Ge(e.defaultDecorator);
      }
      function Ue(e) {
        var t;
        return e ? (null != (t = e.defaultDecorator) ? t : Pe(e)) : void 0;
      }
      function Ge(e) {
        var t, n;
        return e && null != (t = null == (n = e.options_) ? void 0 : n.enhancer)
          ? t
          : te;
      }
      function Ve(e, t, n) {
        if (!y(t))
          return jn(e)
            ? e
            : b(e)
            ? Xe.object(e, t, n)
            : Array.isArray(e)
            ? Xe.array(e, t)
            : w(e)
            ? Xe.map(e, t)
            : S(e)
            ? Xe.set(e, t)
            : 'object' === typeof e && null !== e
            ? e
            : Xe.box(e, t);
        K(e, t, Ie);
      }
      Object.assign(Ve, je);
      var Fe,
        Be,
        Ke = {
          box: function (e, t) {
            var n = Le(t);
            return new ct(e, De(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = Le(t);
            return (!1 === It.useProxies || !1 === n.proxy ? Ur : tr)(
              e,
              De(n),
              n.name,
            );
          },
          map: function (e, t) {
            var n = Le(t);
            return new _r(e, De(n), n.name);
          },
          set: function (e, t) {
            var n = Le(t);
            return new br(e, De(n), n.name);
          },
          object: function (e, t, n) {
            return Tn(
              !1 === It.useProxies || !1 === (null == n ? void 0 : n.proxy)
                ? wr({}, n)
                : Bn({}, n),
              e,
              t,
            );
          },
          ref: B(ke),
          shallow: B(xe),
          deep: je,
          struct: B(Me),
        },
        Xe = a(Ve, Ke),
        qe = 'computed',
        ze = 'computed.struct',
        Ze = me(qe),
        He = me(ze, { equals: ee.structural }),
        We = function (e, t) {
          if (y(t)) return K(e, t, Ze);
          if (b(e)) return B(me(qe, e));
          var n = b(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ''), new ht(n);
        };
      Object.assign(We, Ze), (We.struct = B(He));
      var Ye,
        $e = 0,
        Je = 1,
        Qe =
          null !=
            (Fe =
              null == (Be = s(function () {}, 'name'))
                ? void 0
                : Be.configurable) && Fe,
        et = {
          value: 'action',
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function tt(e, t, n, r) {
        function i() {
          return nt(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          Qe && ((et.value = e), Object.defineProperty(i, 'name', et)),
          i
        );
      }
      function nt(e, t, n, r, i) {
        var o = rt(e, t, r, i);
        try {
          return n.apply(r, i);
        } catch (a) {
          throw ((o.error_ = a), a);
        } finally {
          it(o);
        }
      }
      function rt(e, t, n, r) {
        var i = !1,
          o = 0,
          a = It.trackingDerivation,
          s = !t || !a;
        Dt();
        var u = It.allowStateChanges;
        s && (Tt(), (u = at(!0)));
        var c = St(!0),
          l = {
            runAsAction_: s,
            prevDerivation_: a,
            prevAllowStateChanges_: u,
            prevAllowStateReads_: c,
            notifySpy_: i,
            startTime_: o,
            actionId_: Je++,
            parentActionId_: $e,
          };
        return ($e = l.actionId_), l;
      }
      function it(e) {
        $e !== e.actionId_ && r(30),
          ($e = e.parentActionId_),
          void 0 !== e.error_ && (It.suppressReactionErrors = !0),
          st(e.prevAllowStateChanges_),
          Pt(e.prevAllowStateReads_),
          Ut(),
          e.runAsAction_ && wt(e.prevDerivation_),
          (It.suppressReactionErrors = !1);
      }
      function ot(e, t) {
        var n = at(e);
        try {
          return t();
        } finally {
          st(n);
        }
      }
      function at(e) {
        var t = It.allowStateChanges;
        return (It.allowStateChanges = e), t;
      }
      function st(e) {
        It.allowStateChanges = e;
      }
      Ye = Symbol.toPrimitive;
      var ut,
        ct = (function (e) {
          function t(t, n, r, i, o) {
            var a;
            return (
              void 0 === r && (r = 'ObservableValue'),
              void 0 === i && (i = !0),
              void 0 === o && (o = ee['default']),
              (a = e.call(this, r) || this),
              (a.enhancer = void 0),
              (a.name_ = void 0),
              (a.equals = void 0),
              (a.hasUnreportedChange_ = !1),
              (a.interceptors_ = void 0),
              (a.changeListeners_ = void 0),
              (a.value_ = void 0),
              (a.dehancer = void 0),
              (a.enhancer = n),
              (a.name_ = r),
              (a.equals = o),
              (a.value_ = n(t, void 0, r)),
              a
            );
          }
          j(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_;
              if (((e = this.prepareNewValue_(e)), e !== It.UNCHANGED)) {
                Yt();
                0, this.setNewValue_(e);
              }
            }),
            (n.prepareNewValue_ = function (e) {
              if ((mt(this), Kn(this))) {
                var t = qn(this, { object: this, type: $n, newValue: e });
                if (!t) return It.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? It.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                zn(this) &&
                  Hn(this, {
                    type: $n,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return Xn(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: 'value',
                    debugObjectName: this.name_,
                    object: this,
                    type: $n,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                Zn(this, e)
              );
            }),
            (n.raw = function () {
              return this.value_;
            }),
            (n.toJSON = function () {
              return this.get();
            }),
            (n.toString = function () {
              return this.name_ + '[' + this.value_ + ']';
            }),
            (n.valueOf = function () {
              return C(this.get());
            }),
            (n[Ye] = function () {
              return this.valueOf();
            }),
            t
          );
        })(Z);
      ut = Symbol.toPrimitive;
      var lt,
        ft,
        ht = (function () {
          function e(e) {
            (this.dependenciesState_ = lt.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.isBeingObserved_ = !1),
              (this.isPendingUnobservation_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = lt.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new vt(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.isComputing_ = !1),
              (this.isRunningSetter_ = !1),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = ft.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || r(31),
              (this.derivation = e.get),
              (this.name_ = e.name || 'ComputedValue'),
              e.set && (this.setter_ = tt('ComputedValue-setter', e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct
                  ? ee.structural
                  : ee['default'])),
              (this.scope_ = e.context),
              (this.requiresReaction_ = !!e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              Bt(this);
            }),
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.get = function () {
              if (
                (this.isComputing_ && r(32, this.name_, this.derivation),
                0 !== It.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((Gt(this), _t(this))) {
                  var e = It.trackingContext;
                  this.keepAlive_ && !e && (It.trackingContext = this),
                    this.trackAndCompute() && Ft(this),
                    (It.trackingContext = e);
                }
              } else
                _t(this) &&
                  (this.warnAboutUntrackedRead_(),
                  Dt(),
                  (this.value_ = this.computeValue_(!1)),
                  Ut());
              var t = this.value_;
              if (dt(t)) throw t.cause;
              return t;
            }),
            (t.set = function (e) {
              if (this.setter_) {
                this.isRunningSetter_ && r(33, this.name_),
                  (this.isRunningSetter_ = !0);
                try {
                  this.setter_.call(this.scope_, e);
                } finally {
                  this.isRunningSetter_ = !1;
                }
              } else r(34, this.name_);
            }),
            (t.trackAndCompute = function () {
              var e = this.value_,
                t = this.dependenciesState_ === lt.NOT_TRACKING_,
                n = this.computeValue_(!0);
              var r = t || dt(e) || dt(n) || !this.equals_(e, n);
              return r && (this.value_ = n), r;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing_ = !0;
              var t,
                n = at(!1);
              if (e) t = gt(this, this.derivation, this.scope_);
              else if (!0 === It.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (r) {
                  t = new vt(r);
                }
              return st(n), (this.isComputing_ = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (Ot(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var n = this,
                r = !0,
                i = void 0;
              return hn(function () {
                var o = n.get();
                if (!r || t) {
                  var a = Tt();
                  e({
                    observableKind: 'computed',
                    debugObjectName: n.name_,
                    type: $n,
                    object: n,
                    newValue: o,
                    oldValue: i,
                  }),
                    wt(a);
                }
                (r = !1), (i = o);
              });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
              return this.name_ + '[' + this.derivation.toString() + ']';
            }),
            (t.valueOf = function () {
              return C(this.get());
            }),
            (t[ut] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        pt = T('ComputedValue', ht);
      (function (e) {
        (e[(e['NOT_TRACKING_'] = -1)] = 'NOT_TRACKING_'),
          (e[(e['UP_TO_DATE_'] = 0)] = 'UP_TO_DATE_'),
          (e[(e['POSSIBLY_STALE_'] = 1)] = 'POSSIBLY_STALE_'),
          (e[(e['STALE_'] = 2)] = 'STALE_');
      })(lt || (lt = {})),
        (function (e) {
          (e[(e['NONE'] = 0)] = 'NONE'),
            (e[(e['LOG'] = 1)] = 'LOG'),
            (e[(e['BREAK'] = 2)] = 'BREAK');
        })(ft || (ft = {}));
      var vt = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function dt(e) {
        return e instanceof vt;
      }
      function _t(e) {
        switch (e.dependenciesState_) {
          case lt.UP_TO_DATE_:
            return !1;
          case lt.NOT_TRACKING_:
          case lt.STALE_:
            return !0;
          case lt.POSSIBLY_STALE_:
            for (
              var t = St(!0), n = Tt(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (pt(a)) {
                if (It.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (s) {
                    return wt(n), Pt(t), !0;
                  }
                if (e.dependenciesState_ === lt.STALE_) return wt(n), Pt(t), !0;
              }
            }
            return Rt(e), wt(n), Pt(t), !1;
        }
      }
      function mt(e) {}
      function yt(e) {
        0;
      }
      function gt(e, t, n) {
        var r = St(!0);
        Rt(e),
          (e.newObserving_ = new Array(e.observing_.length + 100)),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++It.runId);
        var i,
          o = It.trackingDerivation;
        if (
          ((It.trackingDerivation = e),
          It.inBatch++,
          !0 === It.disableErrorBoundaries)
        )
          i = t.call(n);
        else
          try {
            i = t.call(n);
          } catch (a) {
            i = new vt(a);
          }
        return (
          It.inBatch--, (It.trackingDerivation = o), Et(e), bt(e), Pt(r), i
        );
      }
      function bt(e) {}
      function Et(e) {
        for (
          var t = e.observing_,
            n = (e.observing_ = e.newObserving_),
            r = lt.UP_TO_DATE_,
            i = 0,
            o = e.unboundDepsCount_,
            a = 0;
          a < o;
          a++
        ) {
          var s = n[a];
          0 === s.diffValue_ &&
            ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
            s.dependenciesState_ > r && (r = s.dependenciesState_);
        }
        (n.length = i), (e.newObserving_ = null), (o = t.length);
        while (o--) {
          var u = t[o];
          0 === u.diffValue_ && Mt(u, e), (u.diffValue_ = 0);
        }
        while (i--) {
          var c = n[i];
          1 === c.diffValue_ && ((c.diffValue_ = 0), xt(c, e));
        }
        r !== lt.UP_TO_DATE_ &&
          ((e.dependenciesState_ = r), e.onBecomeStale_());
      }
      function Ot(e) {
        var t = e.observing_;
        e.observing_ = [];
        var n = t.length;
        while (n--) Mt(t[n], e);
        e.dependenciesState_ = lt.NOT_TRACKING_;
      }
      function At(e) {
        var t = Tt();
        try {
          return e();
        } finally {
          wt(t);
        }
      }
      function Tt() {
        var e = It.trackingDerivation;
        return (It.trackingDerivation = null), e;
      }
      function wt(e) {
        It.trackingDerivation = e;
      }
      function St(e) {
        var t = It.allowStateReads;
        return (It.allowStateReads = e), t;
      }
      function Pt(e) {
        It.allowStateReads = e;
      }
      function Rt(e) {
        if (e.dependenciesState_ !== lt.UP_TO_DATE_) {
          e.dependenciesState_ = lt.UP_TO_DATE_;
          var t = e.observing_,
            n = t.length;
          while (n--) t[n].lowestObserverState_ = lt.UP_TO_DATE_;
        }
      }
      var Nt = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        Ct = !0,
        Lt = !1,
        It = (function () {
          var e = o();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ct = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new Nt().version &&
              (Ct = !1),
            Ct
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Nt()))
              : (setTimeout(function () {
                  Lt || r(35);
                }, 1),
                new Nt())
          );
        })();
      function kt() {
        if (
          ((It.pendingReactions.length ||
            It.inBatch ||
            It.isRunningReactions) &&
            r(36),
          (Lt = !0),
          Ct)
        ) {
          var e = o();
          0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
            (It = new Nt());
        }
      }
      function xt(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function Mt(e, t) {
        e.observers_['delete'](t), 0 === e.observers_.size && jt(e);
      }
      function jt(e) {
        !1 === e.isPendingUnobservation_ &&
          ((e.isPendingUnobservation_ = !0), It.pendingUnobservations.push(e));
      }
      function Dt() {
        It.inBatch++;
      }
      function Ut() {
        if (0 === --It.inBatch) {
          zt();
          for (var e = It.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                n instanceof ht && n.suspend_());
          }
          It.pendingUnobservations = [];
        }
      }
      function Gt(e) {
        yt(e);
        var t = It.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ &&
                It.trackingContext &&
                ((e.isBeingObserved_ = !0), e.onBO())),
            !0)
          : (0 === e.observers_.size && It.inBatch > 0 && jt(e), !1);
      }
      function Vt(e) {
        e.lowestObserverState_ !== lt.STALE_ &&
          ((e.lowestObserverState_ = lt.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === lt.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = lt.STALE_);
          }));
      }
      function Ft(e) {
        e.lowestObserverState_ !== lt.STALE_ &&
          ((e.lowestObserverState_ = lt.STALE_),
          e.observers_.forEach(function (t) {
            t.dependenciesState_ === lt.POSSIBLY_STALE_
              ? (t.dependenciesState_ = lt.STALE_)
              : t.dependenciesState_ === lt.UP_TO_DATE_ &&
                (e.lowestObserverState_ = lt.UP_TO_DATE_);
          }));
      }
      function Bt(e) {
        e.lowestObserverState_ === lt.UP_TO_DATE_ &&
          ((e.lowestObserverState_ = lt.POSSIBLY_STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === lt.UP_TO_DATE_ &&
              ((e.dependenciesState_ = lt.POSSIBLY_STALE_), e.onBecomeStale_());
          }));
      }
      var Kt = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = 'Reaction'),
            void 0 === r && (r = !1),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = lt.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = ft.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = n),
            (this.requiresObservable_ = r);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), It.pendingReactions.push(this), zt());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              Dt(), (this.isScheduled_ = !1);
              var e = It.trackingContext;
              if (((It.trackingContext = this), _t(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (t) {
                  this.reportExceptionInDerivation_(t);
                }
              }
              (It.trackingContext = e), Ut();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              Dt();
              Yt();
              0, (this.isRunning_ = !0);
              var t = It.trackingContext;
              It.trackingContext = this;
              var n = gt(this, e, void 0);
              (It.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && Ot(this),
                dt(n) && this.reportExceptionInDerivation_(n.cause),
                Ut();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (It.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              It.suppressReactionErrors || console.error(n, e),
                It.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (Dt(), Ot(this), Ut()));
          }),
          (t.getDisposer_ = function () {
            var e = this.dispose.bind(this);
            return (e[z] = this), e;
          }),
          (t.toString = function () {
            return 'Reaction[' + this.name_ + ']';
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1), Dn(this, e);
          }),
          e
        );
      })();
      var Xt = 100,
        qt = function (e) {
          return e();
        };
      function zt() {
        It.inBatch > 0 || It.isRunningReactions || qt(Zt);
      }
      function Zt() {
        It.isRunningReactions = !0;
        var e = It.pendingReactions,
          t = 0;
        while (e.length > 0) {
          ++t === Xt &&
            (console.error('[mobx] cycle in reaction: ' + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        It.isRunningReactions = !1;
      }
      var Ht = T('Reaction', Kt);
      function Wt(e) {
        var t = qt;
        qt = function (n) {
          return e(function () {
            return t(n);
          });
        };
      }
      function Yt() {
        return !1;
      }
      function $t(e) {
        return (
          console.warn('[mobx.spy] Is a no-op in production builds'),
          function () {}
        );
      }
      var Jt = 'action',
        Qt = 'action.bound',
        en = 'autoAction',
        tn = 'autoAction.bound',
        nn = '<unnamed action>',
        rn = se(Jt),
        on = se(Qt, { bound: !0 }),
        an = se(en, { autoAction: !0 }),
        sn = se(tn, { autoAction: !0, bound: !0 });
      function un(e) {
        var t = function (t, n) {
          return m(t)
            ? tt(t.name || nn, t, e)
            : m(n)
            ? tt(t, n, e)
            : y(n)
            ? K(t, n, e ? an : rn)
            : y(t)
            ? B(se(e ? en : Jt, { name: t, autoAction: e }))
            : void 0;
        };
        return t;
      }
      var cn = un(!1);
      Object.assign(cn, rn);
      var ln = un(!0);
      function fn(e) {
        return m(e) && !0 === e.isMobxAction;
      }
      function hn(e, t) {
        var n, r;
        void 0 === t && (t = f);
        var i,
          o = null != (n = null == (r = t) ? void 0 : r.name) ? n : 'Autorun',
          a = !t.scheduler && !t.delay;
        if (a)
          i = new Kt(
            o,
            function () {
              this.track(c);
            },
            t.onError,
            t.requiresObservable,
          );
        else {
          var s = vn(t),
            u = !1;
          i = new Kt(
            o,
            function () {
              u ||
                ((u = !0),
                s(function () {
                  (u = !1), i.isDisposed_ || i.track(c);
                }));
            },
            t.onError,
            t.requiresObservable,
          );
        }
        function c() {
          e(i);
        }
        return i.schedule_(), i.getDisposer_();
      }
      Object.assign(ln, an), (cn.bound = B(on)), (ln.bound = B(sn));
      var pn = function (e) {
        return e();
      };
      function vn(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
          ? function (t) {
              return setTimeout(t, e.delay);
            }
          : pn;
      }
      var dn = 'onBO',
        _n = 'onBUO';
      function mn(e, t, n) {
        return gn(dn, e, t, n);
      }
      function yn(e, t, n) {
        return gn(_n, e, t, n);
      }
      function gn(e, t, n, r) {
        var i = 'function' === typeof r ? Gr(t, n) : Gr(t),
          o = m(r) ? r : n,
          a = e + 'L';
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e['delete'](o), 0 === e.size && delete i[a]);
          }
        );
      }
      var bn = 'never',
        En = 'always',
        On = 'observed';
      function An(e) {
        !0 === e.isolateGlobalState && kt();
        var t = e.useProxies,
          n = e.enforceActions;
        if (
          (void 0 !== t &&
            (It.useProxies =
              t === En || (t !== bn && 'undefined' !== typeof Proxy)),
          'ifavailable' === t && (It.verifyProxies = !0),
          void 0 !== n)
        ) {
          var r = n === En ? En : n === On;
          (It.enforceActions = r),
            (It.allowStateChanges = !0 !== r && r !== En);
        }
        [
          'computedRequiresReaction',
          'reactionRequiresObservable',
          'observableRequiresReaction',
          'disableErrorBoundaries',
          'safeDescriptors',
        ].forEach(function (t) {
          t in e && (It[t] = !!e[t]);
        }),
          (It.allowStateReads = !It.observableRequiresReaction),
          e.reactionScheduler && Wt(e.reactionScheduler);
      }
      function Tn(e, t, n, r) {
        var i = I(t),
          o = wr(e, r)[z];
        Dt();
        try {
          N(i).forEach(function (e) {
            o.extend_(e, i[e], !n || !(e in n) || n[e]);
          });
        } finally {
          Ut();
        }
        return e;
      }
      function wn(e, t) {
        return Sn(Gr(e, t));
      }
      function Sn(e) {
        var t = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (t.dependencies = Pn(e.observing_).map(Sn)),
          t
        );
      }
      function Pn(e) {
        return Array.from(new Set(e));
      }
      var Rn = 0;
      function Nn() {
        this.message = 'FLOW_CANCELLED';
      }
      Nn.prototype = Object.create(Error.prototype);
      var Cn = he('flow'),
        Ln = he('flow.bound', { bound: !0 }),
        In = Object.assign(function (e, t) {
          if (y(t)) return K(e, t, Cn);
          var n = e,
            r = n.name || '<unnamed flow>',
            i = function () {
              var e,
                t = this,
                i = arguments,
                o = ++Rn,
                a = cn(r + ' - runid: ' + o + ' - init', n).apply(t, i),
                s = void 0,
                u = new Promise(function (t, n) {
                  var i = 0;
                  function u(e) {
                    var t;
                    s = void 0;
                    try {
                      t = cn(
                        r + ' - runid: ' + o + ' - yield ' + i++,
                        a.next,
                      ).call(a, e);
                    } catch (u) {
                      return n(u);
                    }
                    l(t);
                  }
                  function c(e) {
                    var t;
                    s = void 0;
                    try {
                      t = cn(
                        r + ' - runid: ' + o + ' - yield ' + i++,
                        a['throw'],
                      ).call(a, e);
                    } catch (u) {
                      return n(u);
                    }
                    l(t);
                  }
                  function l(e) {
                    if (!m(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : ((s = Promise.resolve(e.value)), s.then(u, c));
                    e.then(l, n);
                  }
                  (e = n), u(void 0);
                });
              return (
                (u.cancel = cn(r + ' - runid: ' + o + ' - cancel', function () {
                  try {
                    s && kn(s);
                    var t = a['return'](void 0),
                      n = Promise.resolve(t.value);
                    n.then(_, _), kn(n), e(new Nn());
                  } catch (r) {
                    e(r);
                  }
                })),
                u
              );
            };
          return (i.isMobXFlow = !0), i;
        }, Cn);
      function kn(e) {
        m(e.cancel) && e.cancel();
      }
      function xn(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function Mn(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!Rr(e) && e[z].values_.has(t)
            : Rr(e) || !!e[z] || H(e) || Ht(e) || pt(e))
        );
      }
      function jn(e) {
        return Mn(e);
      }
      function Dn() {
        r('trace() is not available in production builds');
        for (
          var e = !1, t = arguments.length, n = new Array(t), i = 0;
          i < t;
          i++
        )
          n[i] = arguments[i];
        'boolean' === typeof n[n.length - 1] && (e = n.pop());
        var o = Un(n);
        if (!o)
          return r(
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
          );
        o.isTracing_ === ft.NONE &&
          console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"),
          (o.isTracing_ = e ? ft.BREAK : ft.LOG);
      }
      function Un(e) {
        switch (e.length) {
          case 0:
            return It.trackingDerivation;
          case 1:
            return Gr(e[0]);
          case 2:
            return Gr(e[0], e[1]);
        }
      }
      function Gn(e, t) {
        void 0 === t && (t = void 0), Dt();
        try {
          return e.apply(t);
        } finally {
          Ut();
        }
      }
      function Vn(e) {
        return e[z];
      }
      In.bound = B(Ln);
      var Fn = {
        has: function (e, t) {
          return Vn(e).has_(t);
        },
        get: function (e, t) {
          return Vn(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!y(t) && (null == (r = Vn(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!y(t) && (null == (n = Vn(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = Vn(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return Vn(e).ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function Bn(e, t) {
        var n, r;
        return (
          v(),
          (e = wr(e, t)),
          null != (r = (n = e[z]).proxy_) ? r : (n.proxy_ = new Proxy(e, Fn))
        );
      }
      function Kn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function Xn(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function qn(e, t) {
        var n = Tt();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a;
            o++
          )
            if (((t = i[o](t)), t && !t.type && r(14), !t)) break;
          return t;
        } finally {
          wt(n);
        }
      }
      function zn(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function Zn(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function Hn(e, t) {
        var n = Tt(),
          r = e.changeListeners_;
        if (r) {
          r = r.slice();
          for (var i = 0, o = r.length; i < o; i++) r[i](t);
          wt(n);
        }
      }
      function Wn(e, t, n) {
        var r = wr(e, n)[z];
        Dt();
        try {
          null != t || (t = q(e)),
            N(t).forEach(function (e) {
              return r.make_(e, t[e]);
            });
        } finally {
          Ut();
        }
        return e;
      }
      var Yn = 'splice',
        $n = 'update',
        Jn = 1e4,
        Qn = {
          get: function (e, t) {
            var n = e[z];
            return t === z
              ? n
              : 'length' === t
              ? n.getArrayLength_()
              : 'string' !== typeof t || isNaN(t)
              ? L(nr, t)
                ? nr[t]
                : e[t]
              : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[z];
            return (
              'length' === t && r.setArrayLength_(n),
              'symbol' === typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            r(15);
          },
        },
        er = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = 'ObservableArray'),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new Z(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, 'ObservableArray[..]');
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return Xn(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: 'array',
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: 'splice',
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                Zn(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ('number' !== typeof e || e < 0) && r('Out of range: ' + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && Dr(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              mt(this.atom_);
              var i = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                  ? (e = i)
                  : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : void 0 === t || null === t
                    ? 0
                    : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = l),
                Kn(this))
              ) {
                var o = qn(this, {
                  object: this.proxy_,
                  type: Yn,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return l;
                (t = o.removedCount), (n = o.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = n.length - t;
                this.updateArrayLength_(i, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              var r;
              if (n.length < Jn)
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length = e + n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && Yt(),
                i = zn(this),
                o =
                  i || r
                    ? {
                        observableKind: 'array',
                        object: this.proxy_,
                        type: $n,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && Hn(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && Yt(),
                i = zn(this),
                o =
                  i || r
                    ? {
                        observableKind: 'array',
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: Yn,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && Hn(this, o);
            }),
            (t.get_ = function (e) {
              if (e < this.values_.length)
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn(
                '[mobx.array] Attempt to read an array index (' +
                  e +
                  ') that is out of bounds (' +
                  this.values_.length +
                  '). Please check length first. Out of bound indices will not be tracked by MobX',
              );
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (e < n.length) {
                mt(this.atom_);
                var i = n[e];
                if (Kn(this)) {
                  var o = qn(this, {
                    type: $n,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                t = this.enhancer_(t, i);
                var a = t !== i;
                a && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else
                e === n.length
                  ? this.spliceWithArray_(e, 0, [t])
                  : r(17, e, n.length);
            }),
            e
          );
        })();
      function tr(e, t, n, r) {
        void 0 === n && (n = 'ObservableArray'), void 0 === r && (r = !1), v();
        var i = new er(n, t, r, !1);
        A(i.values_, z, i);
        var o = new Proxy(i.values_, Qn);
        if (((i.proxy_ = o), e && e.length)) {
          var a = at(!0);
          i.spliceWithArray_(0, 0, e), st(a);
        }
        return o;
      }
      var nr = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[z];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            r[i - 2] = arguments[i];
          var o = this[z];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray_(e);
            case 2:
              return o.spliceWithArray_(e, t);
          }
          return o.spliceWithArray_(e, t, r);
        },
        spliceWithArray: function (e, t, n) {
          return this[z].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[z], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[z].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[z], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            It.trackingDerivation && r(37, 'reverse'),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          It.trackingDerivation && r(37, 'sort');
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[z],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function rr(e, t) {
        'function' === typeof Array.prototype[e] && (nr[e] = t(e));
      }
      function ir(e) {
        return function () {
          var t = this[z];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function or(e) {
        return function (t, n) {
          var r = this,
            i = this[z];
          i.atom_.reportObserved();
          var o = i.dehanceValues_(i.values_);
          return o[e](function (e, i) {
            return t.call(n, e, i, r);
          });
        };
      }
      function ar(e) {
        return function () {
          var t = this,
            n = this[z];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            i = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      rr('concat', ir),
        rr('flat', ir),
        rr('includes', ir),
        rr('indexOf', ir),
        rr('join', ir),
        rr('lastIndexOf', ir),
        rr('slice', ir),
        rr('toString', ir),
        rr('toLocaleString', ir),
        rr('every', or),
        rr('filter', or),
        rr('find', or),
        rr('findIndex', or),
        rr('flatMap', or),
        rr('forEach', or),
        rr('map', or),
        rr('some', or),
        rr('reduce', ar),
        rr('reduceRight', ar);
      var sr,
        ur,
        cr = T('ObservableArrayAdministration', er);
      function lr(e) {
        return g(e) && cr(e[z]);
      }
      var fr = {},
        hr = 'add',
        pr = 'delete';
      (sr = Symbol.iterator), (ur = Symbol.toStringTag);
      var vr,
        dr,
        _r = (function () {
          function e(e, t, n) {
            void 0 === t && (t = te),
              void 0 === n && (n = 'ObservableMap'),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[z] = fr),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              m(Map) || r(18),
              (this.keysAtom_ = W('ObservableMap.keys()')),
              (this.data_ = new Map()),
              (this.hasMap_ = new Map()),
              this.merge(e);
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!It.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new ct(
                  this.has_(e),
                  re,
                  'ObservableMap.key?',
                  !1,
                ));
                this.hasMap_.set(e, r),
                  yn(r, function () {
                    return t.hasMap_['delete'](e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (Kn(this)) {
                var r = qn(this, {
                  type: n ? $n : hr,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t['delete'] = function (e) {
              var t = this;
              if ((mt(this.keysAtom_), Kn(this))) {
                var n = qn(this, { type: pr, object: this, name: e });
                if (!n) return !1;
              }
              if (this.has_(e)) {
                var r = Yt(),
                  i = zn(this),
                  o =
                    i || r
                      ? {
                          observableKind: 'map',
                          debugObjectName: this.name_,
                          type: pr,
                          object: this,
                          oldValue: this.data_.get(e).value_,
                          name: e,
                        }
                      : null;
                return (
                  Gn(function () {
                    t.keysAtom_.reportChanged(), t.updateHasMapEntry_(e, !1);
                    var n = t.data_.get(e);
                    n.setNewValue_(void 0), t.data_['delete'](e);
                  }),
                  i && Hn(this, o),
                  !0
                );
              }
              return !1;
            }),
            (t.updateHasMapEntry_ = function (e, t) {
              var n = this.hasMap_.get(e);
              n && n.setNewValue_(t);
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if (((t = n.prepareNewValue_(t)), t !== It.UNCHANGED)) {
                var r = Yt(),
                  i = zn(this),
                  o =
                    i || r
                      ? {
                          observableKind: 'map',
                          debugObjectName: this.name_,
                          type: $n,
                          object: this,
                          oldValue: n.value_,
                          name: e,
                          newValue: t,
                        }
                      : null;
                0, n.setNewValue_(t), i && Hn(this, o);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              mt(this.keysAtom_),
                Gn(function () {
                  var r = new ct(t, n.enhancer_, 'ObservableMap.key', !1);
                  n.data_.set(e, r),
                    (t = r.value_),
                    n.updateHasMapEntry_(e, !0),
                    n.keysAtom_.reportChanged();
                });
              var r = Yt(),
                i = zn(this),
                o =
                  i || r
                    ? {
                        observableKind: 'map',
                        debugObjectName: this.name_,
                        type: hr,
                        object: this,
                        name: e,
                        newValue: t,
                      }
                    : null;
              i && Hn(this, o);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return zr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return zr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[sr] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = V(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                mr(e) && (e = new Map(e)),
                Gn(function () {
                  b(e)
                    ? R(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                        var n = e[0],
                          r = e[1];
                        return t.set(n, r);
                      })
                    : w(e)
                    ? (e.constructor !== Map && r(19, e),
                      e.forEach(function (e, n) {
                        return t.set(n, e);
                      }))
                    : null !== e && void 0 !== e && r(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              Gn(function () {
                At(function () {
                  for (var t, n = V(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e['delete'](r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Gn(function () {
                  for (
                    var n,
                      r = yr(e),
                      i = new Map(),
                      o = !1,
                      a = V(t.data_.keys());
                    !(n = a()).done;

                  ) {
                    var s = n.value;
                    if (!r.has(s)) {
                      var u = t['delete'](s);
                      if (u) o = !0;
                      else {
                        var c = t.data_.get(s);
                        i.set(s, c);
                      }
                    }
                  }
                  for (var l, f = V(r.entries()); !(l = f()).done; ) {
                    var h = l.value,
                      p = h[0],
                      v = h[1],
                      d = t.data_.has(p);
                    if ((t.set(p, v), t.data_.has(p))) {
                      var _ = t.data_.get(p);
                      i.set(p, _), d || (o = !0);
                    }
                  }
                  if (!o)
                    if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                    else {
                      var m = t.data_.keys(),
                        y = i.keys(),
                        g = m.next(),
                        b = y.next();
                      while (!g.done) {
                        if (g.value !== b.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (g = m.next()), (b = y.next());
                      }
                    }
                  t.data_ = i;
                }),
                this
              );
            }),
            (t.toString = function () {
              return '[object ObservableMap]';
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return Zn(this, e);
            }),
            (t.intercept_ = function (e) {
              return Xn(this, e);
            }),
            x(e, [
              {
                key: 'size',
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: ur,
                get: function () {
                  return 'Map';
                },
              },
            ]),
            e
          );
        })(),
        mr = T('ObservableMap', _r);
      function yr(e) {
        if (w(e) || mr(e)) return e;
        if (Array.isArray(e)) return new Map(e);
        if (b(e)) {
          var t = new Map();
          for (var n in e) t.set(n, e[n]);
          return t;
        }
        return r(21, e);
      }
      var gr = {};
      (vr = Symbol.iterator), (dr = Symbol.toStringTag);
      var br = (function () {
          function e(e, t, n) {
            void 0 === t && (t = te),
              void 0 === n && (n = 'ObservableSet'),
              (this.name_ = void 0),
              (this[z] = gr),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              m(Set) || r(22),
              (this.atom_ = W(this.name_)),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              e && this.replace(e);
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              Gn(function () {
                At(function () {
                  for (var t, n = V(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e['delete'](r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = V(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if ((mt(this.atom_), Kn(this))) {
                var n = qn(this, { type: hr, object: this, newValue: e });
                if (!n) return this;
              }
              if (!this.has(e)) {
                Gn(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var r = !1,
                  i = zn(this),
                  o =
                    i || r
                      ? {
                          observableKind: 'set',
                          debugObjectName: this.name_,
                          type: hr,
                          object: this,
                          newValue: e,
                        }
                      : null;
                0, i && Hn(this, o);
              }
              return this;
            }),
            (t['delete'] = function (e) {
              var t = this;
              if (Kn(this)) {
                var n = qn(this, { type: pr, object: this, oldValue: e });
                if (!n) return !1;
              }
              if (this.has(e)) {
                var r = !1,
                  i = zn(this),
                  o =
                    i || r
                      ? {
                          observableKind: 'set',
                          debugObjectName: this.name_,
                          type: pr,
                          object: this,
                          oldValue: e,
                        }
                      : null;
                return (
                  Gn(function () {
                    t.atom_.reportChanged(), t.data_['delete'](e);
                  }),
                  i && Hn(this, o),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return zr({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return zr({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Er(e) && (e = new Set(e)),
                Gn(function () {
                  Array.isArray(e) || S(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null !== e &&
                      void 0 !== e &&
                      r('Cannot initialize set from ' + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return Zn(this, e);
            }),
            (t.intercept_ = function (e) {
              return Xn(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return '[object ObservableSet]';
            }),
            (t[vr] = function () {
              return this.values();
            }),
            x(e, [
              {
                key: 'size',
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: dr,
                get: function () {
                  return 'Set';
                },
              },
            ]),
            e
          );
        })(),
        Er = T('ObservableSet', br),
        Or = Object.create(null),
        Ar = 'remove',
        Tr = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = Se),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new Z('ObservableObject.keys')),
              (this.isPlainObject_ = b(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof ht) return n.set(t), !0;
              if (Kn(this)) {
                var r = qn(this, {
                  type: $n,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if (((t = n.prepareNewValue_(t)), t !== It.UNCHANGED)) {
                var i = zn(this),
                  o = !1,
                  a =
                    i || o
                      ? {
                          type: $n,
                          observableKind: 'object',
                          debugObjectName: this.name_,
                          object: this.proxy_ || this.target_,
                          oldValue: n.value_,
                          name: e,
                          newValue: t,
                        }
                      : null;
                0, n.setNewValue_(t), i && Hn(this, a);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                It.trackingDerivation && !L(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (
                void 0 === n && (n = !1),
                L(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : n
                    ? Reflect.set(this.target_, e, t)
                    : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      n,
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!It.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new ct(
                    e in this.target_,
                    re,
                    'ObservableObject.key?',
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((Cr(this, t, e), !(e in this.target_))) {
                  var n;
                  if (null == (n = this.target_[F]) ? void 0 : n[e]) return;
                  r(1, t.annotationType_, this.name_ + '.' + e.toString());
                }
                var i = this.target_;
                while (i && i !== c) {
                  var o = s(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                Nr(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              Cr(this, n, e);
              var i = n.extend_(this, e, t, r);
              return i && Nr(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                Dt();
                var r = this.delete_(e);
                if (!r) return r;
                if (Kn(this)) {
                  var i = qn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: hr,
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = M({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else u(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                Ut();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1);
              try {
                Dt();
                var i = this.delete_(e);
                if (!i) return i;
                if (Kn(this)) {
                  var o = qn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: hr,
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = Pr(e),
                  s = {
                    configurable: !It.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else u(this.target_, e, s);
                var c = new ct(t, n, 'ObservableObject.key', !1);
                this.values_.set(e, c),
                  this.notifyPropertyAddition_(e, c.value_);
              } finally {
                Ut();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                Dt();
                var r = this.delete_(e);
                if (!r) return r;
                if (Kn(this)) {
                  var i = qn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: hr,
                    newValue: void 0,
                  });
                  if (!i) return null;
                }
                t.name || (t.name = 'ObservableObject.key'),
                  (t.context = this.proxy_ || this.target_);
                var o = Pr(e),
                  a = {
                    configurable: !It.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: o.get,
                    set: o.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, a)) return !1;
                } else u(this.target_, e, a);
                this.values_.set(e, new ht(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                Ut();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if ((void 0 === t && (t = !1), !L(this.target_, e))) return !0;
              if (Kn(this)) {
                var n = qn(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Ar,
                });
                if (!n) return null;
              }
              try {
                var r, i;
                Dt();
                var o,
                  a = zn(this),
                  u = !1,
                  c = this.values_.get(e),
                  l = void 0;
                if (!c && (a || u))
                  l = null == (o = s(this.target_, e)) ? void 0 : o.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (c &&
                    (this.values_['delete'](e),
                    c instanceof ct && (l = c.value_),
                    Vt(c)),
                  this.keysAtom_.reportChanged(),
                  null == (r = this.pendingKeys_) ||
                    null == (i = r.get(e)) ||
                    i.set(e in this.target_),
                  a || u)
                ) {
                  var f = {
                    type: Ar,
                    observableKind: 'object',
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: l,
                    name: e,
                  };
                  0, a && Hn(this, f);
                }
              } finally {
                Ut();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return Zn(this, e);
            }),
            (t.intercept_ = function (e) {
              return Xn(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r,
                i = zn(this),
                o = !1;
              if (i || o) {
                var a =
                  i || o
                    ? {
                        type: hr,
                        observableKind: 'object',
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, i && Hn(this, a);
              }
              null == (n = this.pendingKeys_) ||
                null == (r = n.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), N(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function wr(e, t) {
        var n;
        if (L(e, z)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : 'ObservableObject',
          i = new Tr(e, new Map(), String(r), Ue(t));
        return O(e, z, i), e;
      }
      var Sr = T('ObservableObjectAdministration', Tr);
      function Pr(e) {
        return (
          Or[e] ||
          (Or[e] = {
            get: function () {
              return this[z].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[z].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function Rr(e) {
        return !!g(e) && Sr(e[z]);
      }
      function Nr(e, t, n) {
        var r;
        null == (r = e.target_[F]) || delete r[n];
      }
      function Cr(e, t, n) {}
      var Lr = 0,
        Ir = function () {};
      function kr(e, t) {
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e.prototype, t)
          : void 0 !== e.prototype.__proto__
          ? (e.prototype.__proto__ = t)
          : (e.prototype = t);
      }
      kr(Ir, Array.prototype);
      var xr = (function (e) {
        function t(t, n, r, i) {
          var o;
          void 0 === r && (r = 'ObservableArray'),
            void 0 === i && (i = !1),
            (o = e.call(this) || this);
          var a = new er(r, n, i, !0);
          if (((a.proxy_ = D(o)), A(D(o), z, a), t && t.length)) {
            var s = at(!0);
            o.spliceWithArray(0, 0, t), st(s);
          }
          return o;
        }
        j(t, e);
        var n = t.prototype;
        return (
          (n.concat = function () {
            this[z].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return lr(e) ? e.slice() : e;
              }),
            );
          }),
          (n[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return zr({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          x(t, [
            {
              key: 'length',
              get: function () {
                return this[z].getArrayLength_();
              },
              set: function (e) {
                this[z].setArrayLength_(e);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return 'Array';
              },
            },
          ]),
          t
        );
      })(Ir);
      function Mr(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[z].get_(e);
          },
          set: function (t) {
            this[z].set_(e, t);
          },
        };
      }
      function jr(e) {
        u(xr.prototype, '' + e, Mr(e));
      }
      function Dr(e) {
        if (e > Lr) {
          for (var t = Lr; t < e + 100; t++) jr(t);
          Lr = e;
        }
      }
      function Ur(e, t, n) {
        return new xr(e, t, n);
      }
      function Gr(e, t) {
        if ('object' === typeof e && null !== e) {
          if (lr(e)) return void 0 !== t && r(23), e[z].atom_;
          if (Er(e)) return e[z];
          if (mr(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, Fr(e)), n;
          }
          if (Rr(e)) {
            if (!t) return r(26);
            var i = e[z].values_.get(t);
            return i || r(27, t, Fr(e)), i;
          }
          if (H(e) || pt(e) || Ht(e)) return e;
        } else if (m(e) && Ht(e[z])) return e[z];
        r(28);
      }
      function Vr(e, t) {
        return (
          e || r(29),
          void 0 !== t
            ? Vr(Gr(e, t))
            : H(e) || pt(e) || Ht(e) || mr(e) || Er(e)
            ? e
            : e[z]
            ? e[z]
            : void r(24, e)
        );
      }
      function Fr(e, t) {
        var n;
        if (void 0 !== t) n = Gr(e, t);
        else {
          if (fn(e)) return e.name;
          n = Rr(e) || mr(e) || Er(e) ? Vr(e) : Gr(e);
        }
        return n.name_;
      }
      Object.entries(nr).forEach(function (e) {
        var t = e[0],
          n = e[1];
        'concat' !== t && O(xr.prototype, t, n);
      }),
        Dr(1e3);
      var Br = c.toString;
      function Kr(e, t, n) {
        return void 0 === n && (n = -1), Xr(e, t, n);
      }
      function Xr(e, t, n, r, i) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return !1;
        if (e !== e) return t !== t;
        var o = typeof e;
        if (!m(o) && 'object' !== o && 'object' != typeof t) return !1;
        var a = Br.call(e);
        if (a !== Br.call(t)) return !1;
        switch (a) {
          case '[object RegExp]':
          case '[object String]':
            return '' + e === '' + t;
          case '[object Number]':
            return +e !== +e
              ? +t !== +t
              : 0 === +e
              ? 1 / +e === 1 / t
              : +e === +t;
          case '[object Date]':
          case '[object Boolean]':
            return +e === +t;
          case '[object Symbol]':
            return (
              'undefined' !== typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case '[object Map]':
          case '[object Set]':
            n >= 0 && n++;
            break;
        }
        (e = qr(e)), (t = qr(t));
        var s = '[object Array]' === a;
        if (!s) {
          if ('object' != typeof e || 'object' != typeof t) return !1;
          var u = e.constructor,
            c = t.constructor;
          if (
            u !== c &&
            !(m(u) && u instanceof u && m(c) && c instanceof c) &&
            'constructor' in e &&
            'constructor' in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (r = r || []), (i = i || []);
        var l = r.length;
        while (l--) if (r[l] === e) return i[l] === t;
        if ((r.push(e), i.push(t), s)) {
          if (((l = e.length), l !== t.length)) return !1;
          while (l--) if (!Xr(e[l], t[l], n - 1, r, i)) return !1;
        } else {
          var f,
            h = Object.keys(e);
          if (((l = h.length), Object.keys(t).length !== l)) return !1;
          while (l--)
            if (((f = h[l]), !L(t, f) || !Xr(e[f], t[f], n - 1, r, i)))
              return !1;
        }
        return r.pop(), i.pop(), !0;
      }
      function qr(e) {
        return lr(e)
          ? e.slice()
          : w(e) || mr(e) || S(e) || Er(e)
          ? Array.from(e.entries())
          : e;
      }
      function zr(e) {
        return (e[Symbol.iterator] = Zr), e;
      }
      function Zr() {
        return this;
      }
      ['Symbol', 'Map', 'Set', 'Symbol'].forEach(function (e) {
        var t = o();
        'undefined' === typeof t[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        'object' === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: $t,
            extras: { getDebugName: Fr },
            $mobx: z,
          });
    },
    74806: function (e, t, n) {
      'use strict';
      n.d(t, {
        zt: function () {
          return h;
        },
        _y: function () {
          return p;
        },
        ZP: function () {
          return v;
        },
      });
      var r = n(70655),
        i = n(67294),
        o = n(8679),
        a = n.n(o),
        s = n(680);
      function u(e) {
        return e.displayName || e.name || 'Component';
      }
      var c = i.createContext(null),
        l = c.Consumer,
        f = c.Provider,
        h = f,
        p = c;
      function v(e, t) {
        var n = t || {},
          o = n.intlPropName,
          c = void 0 === o ? 'intl' : o,
          f = n.forwardRef,
          h = void 0 !== f && f,
          p = n.enforceContext,
          v = void 0 === p || p,
          d = function (t) {
            return i.createElement(l, null, function (n) {
              var o;
              v && (0, s.lq)(n);
              var a = ((o = {}), (o[c] = n), o);
              return i.createElement(
                e,
                (0, r.pi)({}, t, a, { ref: h ? t.forwardedRef : null }),
              );
            });
          };
        return (
          (d.displayName = 'injectIntl(' + u(e) + ')'),
          (d.WrappedComponent = e),
          h
            ? a()(
                i.forwardRef(function (e, t) {
                  return i.createElement(
                    d,
                    (0, r.pi)({}, e, { forwardedRef: t }),
                  );
                }),
                e,
              )
            : a()(d, e)
        );
      }
    },
    680: function (e, t, n) {
      'use strict';
      n.d(t, {
        lq: function () {
          return s;
        },
        Z0: function () {
          return u;
        },
        dt: function () {
          return c;
        },
        wU: function () {
          return l;
        },
      });
      var r = n(70655),
        i = n(67294),
        o = n(25687),
        a = n(82644);
      function s(e) {
        (0, o.kG)(
          e,
          '[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.',
        );
      }
      var u = (0, r.pi)((0, r.pi)({}, a.Z0), { textComponent: i.Fragment });
      function c(e) {
        return function (t) {
          return e(i.Children.toArray(t));
        };
      }
      function l(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t),
          i = n.length;
        if (r.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var a = n[o];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
            return !1;
        }
        return !0;
      }
    },
    70655: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZT: function () {
          return i;
        },
        pi: function () {
          return o;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return s;
        },
      });
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Class extends value ' +
              String(t) +
              ' is not a constructor or null',
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      Object.create;
      function s(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || t);
      }
      Object.create;
    },
  },
]);
