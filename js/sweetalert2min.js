!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define(e)
    : (t.Sweetalert2 = e());
})(this, function () {
  function r(t) {
    return (r =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol === 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          })(t);
  }
  function o(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function i(t, e) {
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
  }
  function a(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function s() {
    return (s =
      Object.assign ||
      function (t) {
        for (let e = 1; e < arguments.length; e++) {
          const n = arguments[e];
          for (const o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }).apply(this, arguments);
  }
  function u(t) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function c(t, e) {
    return (c =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function l(t, e, n) {
    return (l = (function () {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if (typeof Proxy === 'function') return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (t, e, n) {
          const o = [null];
          o.push.apply(o, e);
          const i = new (Function.bind.apply(t, o))();
          return n && c(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function d(t, e) {
    return !e || (typeof e !== 'object' && typeof e !== 'function')
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function p(t, e, n) {
    return (p =
      typeof Reflect !== 'undefined' && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            const o = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                (t = u(t)) !== null;

              );
              return t;
            })(t, e);
            if (o) {
              const i = Object.getOwnPropertyDescriptor(o, e);
              return i.get ? i.get.call(n) : i.value;
            }
          })(t, e, n || t);
  }
  function f(e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }
  function m(t) {
    return Array.prototype.slice.call(t);
  }
  function g(t) {
    console.error(''.concat(e, ' ').concat(t));
  }
  function h(t, e) {
    !(function (t) {
      n.indexOf(t) === -1 && (n.push(t), w(t));
    })(
      '"'
        .concat(
          t,
          '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(e, '" instead.')
    );
  }
  function v(t) {
    return t && Promise.resolve(t) === t;
  }
  function t(t) {
    const e = {};
    for (const n in t) e[t[n]] = `swal2-${t[n]}`;
    return e;
  }
  function b(t, e) {
    return t.classList.contains(e);
  }
  function y(t, e, n) {
    if (
      ((function (e) {
        m(e.classList).forEach(function (t) {
          f(x).indexOf(t) === -1 &&
            f(S).indexOf(t) === -1 &&
            e.classList.remove(t);
        });
      })(t),
      e && e[n])
    ) {
      if (typeof e[n] !== 'string' && !e[n].forEach)
        return w(
          'Invalid type of customClass.'
            .concat(n, '! Expected string or iterable object, got "')
            .concat(r(e[n]), '"')
        );
      rt(t, e[n]);
    }
  }
  var e = 'SweetAlert2:';
  var w = function (t) {
    console.warn(''.concat(e, ' ').concat(t));
  };
  var n = [];
  const C = function (t) {
    return typeof t === 'function' ? t() : t;
  };
  const k = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer',
  });
  var x = t([
    'container',
    'shown',
    'height-auto',
    'iosfix',
    'popup',
    'modal',
    'no-backdrop',
    'toast',
    'toast-shown',
    'toast-column',
    'show',
    'hide',
    'noanimation',
    'close',
    'title',
    'header',
    'content',
    'actions',
    'confirm',
    'cancel',
    'footer',
    'icon',
    'image',
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'label',
    'textarea',
    'inputerror',
    'validation-message',
    'progress-steps',
    'active-progress-step',
    'progress-step',
    'progress-step-line',
    'loading',
    'styled',
    'top',
    'top-start',
    'top-end',
    'top-left',
    'top-right',
    'center',
    'center-start',
    'center-end',
    'center-left',
    'center-right',
    'bottom',
    'bottom-start',
    'bottom-end',
    'bottom-left',
    'bottom-right',
    'grow-row',
    'grow-column',
    'grow-fullscreen',
    'rtl',
  ]);
  var S = t(['success', 'warning', 'info', 'question', 'error']);
  const P = { previousBodyPadding: null };
  function B(t, e) {
    if (!e) return null;
    switch (e) {
      case 'select':
      case 'textarea':
      case 'file':
        return st(t, x[e]);
      case 'checkbox':
        return t.querySelector('.'.concat(x.checkbox, ' input'));
      case 'radio':
        return (
          t.querySelector('.'.concat(x.radio, ' input:checked')) ||
          t.querySelector('.'.concat(x.radio, ' input:first-child'))
        );
      case 'range':
        return t.querySelector('.'.concat(x.range, ' input'));
      default:
        return st(t, x.input);
    }
  }
  function A(t) {
    if ((t.focus(), t.type !== 'file')) {
      const e = t.value;
      (t.value = ''), (t.value = e);
    }
  }
  function E(t, e, n) {
    t &&
      e &&
      (typeof e === 'string' && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach(function (e) {
        t.forEach
          ? t.forEach(function (t) {
              n ? t.classList.add(e) : t.classList.remove(e);
            })
          : n
          ? t.classList.add(e)
          : t.classList.remove(e);
      }));
  }
  function T(t, e, n) {
    n || parseInt(n) === 0
      ? (t.style[e] = typeof n === 'number' ? `${n}px` : n)
      : t.style.removeProperty(e);
  }
  function L(t, e) {
    const n = arguments.length > 1 && void 0 !== e ? e : 'flex';
    (t.style.opacity = ''), (t.style.display = n);
  }
  function O(t) {
    (t.style.opacity = ''), (t.style.display = 'none');
  }
  function M(t, e, n) {
    e ? L(t, n) : O(t);
  }
  function V(t) {
    return !(
      !t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    );
  }
  function j(t) {
    const e = window.getComputedStyle(t);
    const n = parseFloat(e.getPropertyValue('animation-duration') || '0');
    const o = parseFloat(e.getPropertyValue('transition-duration') || '0');
    return n > 0 || o > 0;
  }
  function H() {
    return document.body.querySelector(`.${x.container}`);
  }
  function I(t) {
    const e = H();
    return e ? e.querySelector(t) : null;
  }
  function q(t) {
    return I(`.${t}`);
  }
  function R() {
    return q(x.popup);
  }
  function D() {
    const t = R();
    return m(t.querySelectorAll(`.${x.icon}`));
  }
  function N() {
    const t = D().filter(function (t) {
      return V(t);
    });
    return t.length ? t[0] : null;
  }
  function U() {
    return q(x.title);
  }
  function F() {
    return q(x.content);
  }
  function _() {
    return q(x.image);
  }
  function z() {
    return q(x['progress-steps']);
  }
  function W() {
    return q(x['validation-message']);
  }
  function K() {
    return I(`.${x.actions} .${x.confirm}`);
  }
  function Y() {
    return I(`.${x.actions} .${x.cancel}`);
  }
  function Z() {
    return q(x.actions);
  }
  function Q() {
    return q(x.header);
  }
  function $() {
    return q(x.footer);
  }
  function J() {
    return q(x.close);
  }
  function X() {
    const t = m(
      R().querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      )
    ).sort(function (t, e) {
      return (
        (t = parseInt(t.getAttribute('tabindex'))),
        (e = parseInt(e.getAttribute('tabindex'))) < t ? 1 : t < e ? -1 : 0
      );
    });
    const e = m(
      R().querySelectorAll(
        '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
      )
    ).filter(function (t) {
      return t.getAttribute('tabindex') !== '-1';
    });
    return (function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        e.indexOf(t[n]) === -1 && e.push(t[n]);
      return e;
    })(t.concat(e)).filter(function (t) {
      return V(t);
    });
  }
  function G() {
    return !ut() && !document.body.classList.contains(x['no-backdrop']);
  }
  function tt() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  }
  function et(t) {
    Fe.isVisible() && it !== t.target.value && Fe.resetValidationMessage(),
      (it = t.target.value);
  }
  function nt(t, e) {
    t instanceof HTMLElement
      ? e.appendChild(t)
      : r(t) === 'object'
      ? dt(e, t)
      : t && (e.innerHTML = t);
  }
  function ot(t, e) {
    const n = Z();
    const o = K();
    const i = Y();
    e.showConfirmButton || e.showCancelButton || O(n),
      y(n, e.customClass, 'actions'),
      ft(o, 'confirm', e),
      ft(i, 'cancel', e),
      e.buttonsStyling
        ? (function (t, e, n) {
            rt([t, e], x.styled),
              n.confirmButtonColor &&
                (t.style.backgroundColor = n.confirmButtonColor);
            n.cancelButtonColor &&
              (e.style.backgroundColor = n.cancelButtonColor);
            const o = window
              .getComputedStyle(t)
              .getPropertyValue('background-color');
            (t.style.borderLeftColor = o), (t.style.borderRightColor = o);
          })(o, i, e)
        : (at([o, i], x.styled),
          (o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor =
            ''),
          (i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor =
            '')),
      e.reverseButtons && o.parentNode.insertBefore(i, o);
  }
  let it;
  var rt = function (t, e) {
    E(t, e, !0);
  };
  var at = function (t, e) {
    E(t, e, !1);
  };
  var st = function (t, e) {
    for (let n = 0; n < t.childNodes.length; n++)
      if (b(t.childNodes[n], e)) return t.childNodes[n];
  };
  var ut = function () {
    return document.body.classList.contains(x['toast-shown']);
  };
  const ct = '\n <div aria-labelledby="'
    .concat(x.title, '" aria-describedby="')
    .concat(x.content, '" class="')
    .concat(x.popup, '" tabindex="-1">\n   <div class="')
    .concat(x.header, '">\n     <ul class="')
    .concat(x['progress-steps'], '"></ul>\n     <div class="')
    .concat(x.icon, ' ')
    .concat(
      S.error,
      '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'
    )
    .concat(x.icon, ' ')
    .concat(S.question, '"></div>\n     <div class="')
    .concat(x.icon, ' ')
    .concat(S.warning, '"></div>\n     <div class="')
    .concat(x.icon, ' ')
    .concat(S.info, '"></div>\n     <div class="')
    .concat(x.icon, ' ')
    .concat(
      S.success,
      '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'
    )
    .concat(x.image, '" />\n     <h2 class="')
    .concat(x.title, '" id="')
    .concat(x.title, '"></h2>\n     <button type="button" class="')
    .concat(x.close, '"></button>\n   </div>\n   <div class="')
    .concat(x.content, '">\n     <div id="')
    .concat(x.content, '"></div>\n     <input class="')
    .concat(x.input, '" />\n     <input type="file" class="')
    .concat(x.file, '" />\n     <div class="')
    .concat(
      x.range,
      '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
    )
    .concat(x.select, '"></select>\n     <div class="')
    .concat(x.radio, '"></div>\n     <label for="')
    .concat(x.checkbox, '" class="')
    .concat(
      x.checkbox,
      '">\n       <input type="checkbox" />\n       <span class="'
    )
    .concat(x.label, '"></span>\n     </label>\n     <textarea class="')
    .concat(x.textarea, '"></textarea>\n     <div class="')
    .concat(x['validation-message'], '" id="')
    .concat(x['validation-message'], '"></div>\n   </div>\n   <div class="')
    .concat(x.actions, '">\n     <button type="button" class="')
    .concat(x.confirm, '">OK</button>\n     <button type="button" class="')
    .concat(x.cancel, '">Cancel</button>\n   </div>\n   <div class="')
    .concat(x.footer, '">\n   </div>\n </div>\n')
    .replace(/(^|\n)\s*/g, '');
  const lt = function (t) {
    if (
      ((function () {
        const t = H();
        t &&
          (t.parentNode.removeChild(t),
          at(
            [document.documentElement, document.body],
            [x['no-backdrop'], x['toast-shown'], x['has-column']]
          ));
      })(),
      tt())
    )
      g('SweetAlert2 requires document to initialize');
    else {
      const e = document.createElement('div');
      (e.className = x.container), (e.innerHTML = ct);
      const n = (function (t) {
        return typeof t === 'string' ? document.querySelector(t) : t;
      })(t.target);
      n.appendChild(e),
        (function (t) {
          const e = R();
          e.setAttribute('role', t.toast ? 'alert' : 'dialog'),
            e.setAttribute('aria-live', t.toast ? 'polite' : 'assertive'),
            t.toast || e.setAttribute('aria-modal', 'true');
        })(t),
        (function (t) {
          window.getComputedStyle(t).direction === 'rtl' && rt(H(), x.rtl);
        })(n),
        (function () {
          const t = F();
          const e = st(t, x.input);
          const n = st(t, x.file);
          const o = t.querySelector('.'.concat(x.range, ' input'));
          const i = t.querySelector('.'.concat(x.range, ' output'));
          const r = st(t, x.select);
          const a = t.querySelector('.'.concat(x.checkbox, ' input'));
          const s = st(t, x.textarea);
          (e.oninput = et),
            (n.onchange = et),
            (r.onchange = et),
            (a.onchange = et),
            (s.oninput = et),
            (o.oninput = function (t) {
              et(t), (i.value = o.value);
            }),
            (o.onchange = function (t) {
              et(t), (o.nextSibling.value = o.value);
            });
        })();
    }
  };
  var dt = function (t, e) {
    if (((t.innerHTML = ''), 0 in e))
      for (let n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
    else t.appendChild(e.cloneNode(!0));
  };
  const pt = (function () {
    if (tt()) return !1;
    const t = document.createElement('div');
    const e = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend',
    };
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n])
        return e[n];
    return !1;
  })();
  function ft(t, e, n) {
    M(t, n[`showC${e.substring(1)}Button`], 'inline-block'),
      (t.innerHTML = n[`${e}ButtonText`]),
      t.setAttribute('aria-label', n[`${e}ButtonAriaLabel`]),
      (t.className = x[e]),
      y(t, n.customClass, `${e}Button`),
      rt(t, n[`${e}ButtonClass`]);
  }
  function mt(t, e) {
    const n = H();
    n &&
      ((function (t, e) {
        typeof e === 'string'
          ? (t.style.background = e)
          : e ||
            rt([document.documentElement, document.body], x['no-backdrop']);
      })(n, e.backdrop),
      !e.backdrop &&
        e.allowOutsideClick &&
        w(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
      (function (t, e) {
        e in x
          ? rt(t, x[e])
          : (w('The "position" parameter is not valid, defaulting to "center"'),
            rt(t, x.center));
      })(n, e.position),
      (function (t, e) {
        if (e && typeof e === 'string') {
          const n = `grow-${e}`;
          n in x && rt(t, x[n]);
        }
      })(n, e.grow),
      y(n, e.customClass, 'container'),
      e.customContainerClass && rt(n, e.customContainerClass));
  }
  function gt(t, e) {
    (t.placeholder && !e.inputPlaceholder) ||
      (t.placeholder = e.inputPlaceholder);
  }
  const ht = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
  };
  const vt = [
    'input',
    'file',
    'range',
    'select',
    'radio',
    'checkbox',
    'textarea',
  ];
  const bt = function (t) {
    if (!kt[t.input])
      return g(
        'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
          t.input,
          '"'
        )
      );
    const e = Ct(t.input);
    const n = kt[t.input](e, t);
    L(n),
      setTimeout(function () {
        A(n);
      });
  };
  const yt = function (t, e) {
    const n = B(F(), t);
    if (n)
      for (const o in ((function (t) {
        for (let e = 0; e < t.attributes.length; e++) {
          const n = t.attributes[e].name;
          ['type', 'value', 'style'].indexOf(n) === -1 && t.removeAttribute(n);
        }
      })(n),
      e))
        (t === 'range' && o === 'placeholder') || n.setAttribute(o, e[o]);
  };
  const wt = function (t) {
    const e = Ct(t.input);
    t.inputClass && rt(e, t.inputClass),
      t.customClass && rt(e, t.customClass.input);
  };
  var Ct = function (t) {
    const e = x[t] ? x[t] : x.input;
    return st(F(), e);
  };
  var kt = {};
  (kt.text = kt.email = kt.password = kt.number = kt.tel = kt.url = function (
    t,
    e
  ) {
    return (
      typeof e.inputValue === 'string' || typeof e.inputValue === 'number'
        ? (t.value = e.inputValue)
        : v(e.inputValue) ||
          w(
            'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
              r(e.inputValue),
              '"'
            )
          ),
      gt(t, e),
      (t.type = e.input),
      t
    );
  }),
    (kt.file = function (t, e) {
      return gt(t, e), t;
    }),
    (kt.range = function (t, e) {
      const n = t.querySelector('input');
      const o = t.querySelector('output');
      return (
        (n.value = e.inputValue),
        (n.type = e.input),
        (o.value = e.inputValue),
        t
      );
    }),
    (kt.select = function (t, e) {
      if (((t.innerHTML = ''), e.inputPlaceholder)) {
        const n = document.createElement('option');
        (n.innerHTML = e.inputPlaceholder),
          (n.value = ''),
          (n.disabled = !0),
          (n.selected = !0),
          t.appendChild(n);
      }
      return t;
    }),
    (kt.radio = function (t) {
      return (t.innerHTML = ''), t;
    }),
    (kt.checkbox = function (t, e) {
      const n = B(F(), 'checkbox');
      return (
        (n.value = 1),
        (n.id = x.checkbox),
        (n.checked = Boolean(e.inputValue)),
        (t.querySelector('span').innerHTML = e.inputPlaceholder),
        t
      );
    }),
    (kt.textarea = function (e, t) {
      if (((e.value = t.inputValue), gt(e, t), 'MutationObserver' in window)) {
        const n = parseInt(window.getComputedStyle(R()).width);
        const o =
          parseInt(window.getComputedStyle(R()).paddingLeft) +
          parseInt(window.getComputedStyle(R()).paddingRight);
        new MutationObserver(function () {
          const t = e.offsetWidth + o;
          R().style.width = n < t ? `${t}px` : null;
        }).observe(e, { attributes: !0, attributeFilter: ['style'] });
      }
      return e;
    });
  function xt(t, e) {
    const n = F().querySelector(`#${x.content}`);
    e.html
      ? (nt(e.html, n), L(n, 'block'))
      : e.text
      ? ((n.textContent = e.text), L(n, 'block'))
      : O(n),
      (function (t, o) {
        const i = F();
        const e = ht.innerParams.get(t);
        const r = !e || o.input !== e.input;
        vt.forEach(function (t) {
          const e = x[t];
          const n = st(i, e);
          yt(t, o.inputAttributes), (n.className = e), r && O(n);
        }),
          o.input && (r && bt(o), wt(o));
      })(t, e),
      y(F(), e.customClass, 'content');
  }
  function St(t, i) {
    const r = z();
    if (!i.progressSteps || i.progressSteps.length === 0) return O(r);
    L(r), (r.innerHTML = '');
    const a = parseInt(
      i.currentProgressStep === null ? Fe.getQueueStep() : i.currentProgressStep
    );
    a >= i.progressSteps.length &&
      w(
        'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
      ),
      i.progressSteps.forEach(function (t, e) {
        const n = (function (t) {
          const e = document.createElement('li');
          return rt(e, x['progress-step']), (e.innerHTML = t), e;
        })(t);
        if (
          (r.appendChild(n),
          e === a && rt(n, x['active-progress-step']),
          e !== i.progressSteps.length - 1)
        ) {
          const o = (function (t) {
            const e = document.createElement('li');
            return (
              rt(e, x['progress-step-line']),
              t.progressStepsDistance &&
                (e.style.width = t.progressStepsDistance),
              e
            );
          })(t);
          r.appendChild(o);
        }
      });
  }
  function Pt(t, e) {
    const n = Q();
    y(n, e.customClass, 'header'),
      St(0, e),
      (function (t, e) {
        const n = ht.innerParams.get(t);
        if (n && e.type === n.type && N()) y(N(), e.customClass, 'icon');
        else if ((Et(), e.type))
          if ((Tt(), Object.keys(S).indexOf(e.type) !== -1)) {
            const o = I('.'.concat(x.icon, '.').concat(S[e.type]));
            L(o),
              y(o, e.customClass, 'icon'),
              E(o, 'swal2-animate-'.concat(e.type, '-icon'), e.animation);
          } else
            g(
              'Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                e.type,
                '"'
              )
            );
      })(t, e),
      (function (t, e) {
        const n = _();
        if (!e.imageUrl) return O(n);
        L(n),
          n.setAttribute('src', e.imageUrl),
          n.setAttribute('alt', e.imageAlt),
          T(n, 'width', e.imageWidth),
          T(n, 'height', e.imageHeight),
          (n.className = x.image),
          y(n, e.customClass, 'image'),
          e.imageClass && rt(n, e.imageClass);
      })(0, e),
      (function (t, e) {
        const n = U();
        M(n, e.title || e.titleText),
          e.title && nt(e.title, n),
          e.titleText && (n.innerText = e.titleText),
          y(n, e.customClass, 'title');
      })(0, e),
      (function (t, e) {
        const n = J();
        (n.innerHTML = e.closeButtonHtml),
          y(n, e.customClass, 'closeButton'),
          M(n, e.showCloseButton),
          n.setAttribute('aria-label', e.closeButtonAriaLabel);
      })(0, e);
  }
  function Bt(t, e) {
    !(function (t, e) {
      const n = R();
      T(n, 'width', e.width),
        T(n, 'padding', e.padding),
        e.background && (n.style.background = e.background),
        (n.className = x.popup),
        e.toast
          ? (rt([document.documentElement, document.body], x['toast-shown']),
            rt(n, x.toast))
          : rt(n, x.modal),
        y(n, e.customClass, 'popup'),
        typeof e.customClass === 'string' && rt(n, e.customClass),
        E(n, x.noanimation, !e.animation);
    })(0, e),
      mt(0, e),
      Pt(t, e),
      xt(t, e),
      ot(0, e),
      (function (t, e) {
        const n = $();
        M(n, e.footer),
          e.footer && nt(e.footer, n),
          y(n, e.customClass, 'footer');
      })(0, e),
      typeof e.onRender === 'function' && e.onRender(R());
  }
  function At() {
    return K() && K().click();
  }
  var Et = function () {
    for (let t = D(), e = 0; e < t.length; e++) O(t[e]);
  };
  var Tt = function () {
    for (
      let t = R(),
        e = window.getComputedStyle(t).getPropertyValue('background-color'),
        n = t.querySelectorAll(
          '[class^=swal2-success-circular-line], .swal2-success-fix'
        ),
        o = 0;
      o < n.length;
      o++
    )
      n[o].style.backgroundColor = e;
  };
  function Lt() {
    let t = R();
    t || Fe.fire(''), (t = R());
    const e = Z();
    const n = K();
    const o = Y();
    L(e),
      L(n),
      rt([t, e], x.loading),
      (n.disabled = !0),
      (o.disabled = !0),
      t.setAttribute('data-loading', !0),
      t.setAttribute('aria-busy', !0),
      t.focus();
  }
  function Ot() {
    return new Promise(function (t) {
      const e = window.scrollX;
      const n = window.scrollY;
      (Ht.restoreFocusTimeout = setTimeout(function () {
        Ht.previousActiveElement && Ht.previousActiveElement.focus
          ? (Ht.previousActiveElement.focus(),
            (Ht.previousActiveElement = null))
          : document.body && document.body.focus(),
          t();
      }, 100)),
        void 0 !== e && void 0 !== n && window.scrollTo(e, n);
    });
  }
  function Mt(t) {
    return Object.prototype.hasOwnProperty.call(It, t);
  }
  function Vt(t) {
    return Rt[t];
  }
  let jt = [];
  var Ht = {};
  var It = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    type: null,
    toast: !1,
    customClass: '',
    customContainerClass: '',
    target: 'body',
    backdrop: !0,
    animation: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: null,
    confirmButtonClass: '',
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: null,
    cancelButtonClass: '',
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusCancel: !1,
    showCloseButton: !1,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: !1,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: '',
    timer: null,
    width: null,
    padding: null,
    background: null,
    input: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: !0,
    inputClass: '',
    inputAttributes: {},
    inputValidator: null,
    validationMessage: null,
    grow: !1,
    position: 'center',
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: null,
    onBeforeOpen: null,
    onOpen: null,
    onRender: null,
    onClose: null,
    onAfterClose: null,
    scrollbarPadding: !0,
  };
  const qt = [
    'title',
    'titleText',
    'text',
    'html',
    'type',
    'customClass',
    'showConfirmButton',
    'showCancelButton',
    'confirmButtonText',
    'confirmButtonAriaLabel',
    'confirmButtonColor',
    'confirmButtonClass',
    'cancelButtonText',
    'cancelButtonAriaLabel',
    'cancelButtonColor',
    'cancelButtonClass',
    'buttonsStyling',
    'reverseButtons',
    'imageUrl',
    'imageWidth',
    'imageHeigth',
    'imageAlt',
    'imageClass',
    'progressSteps',
    'currentProgressStep',
  ];
  var Rt = {
    customContainerClass: 'customClass',
    confirmButtonClass: 'customClass',
    cancelButtonClass: 'customClass',
    imageClass: 'customClass',
    inputClass: 'customClass',
  };
  const Dt = [
    'allowOutsideClick',
    'allowEnterKey',
    'backdrop',
    'focusConfirm',
    'focusCancel',
    'heightAuto',
    'keydownListenerCapture',
  ];
  const Nt = Object.freeze({
    isValidParameter: Mt,
    isUpdatableParameter(t) {
      return qt.indexOf(t) !== -1;
    },
    isDeprecatedParameter: Vt,
    argsToParams(n) {
      const o = {};
      switch (r(n[0])) {
        case 'object':
          s(o, n[0]);
          break;
        default:
          ['title', 'html', 'type'].forEach(function (t, e) {
            switch (r(n[e])) {
              case 'string':
                o[t] = n[e];
                break;
              case 'undefined':
                break;
              default:
                g(
                  'Unexpected type of '
                    .concat(t, '! Expected "string", got ')
                    .concat(r(n[e]))
                );
            }
          });
      }
      return o;
    },
    isVisible() {
      return V(R());
    },
    clickConfirm: At,
    clickCancel() {
      return Y() && Y().click();
    },
    getContainer: H,
    getPopup: R,
    getTitle: U,
    getContent: F,
    getImage: _,
    getIcon: N,
    getIcons: D,
    getCloseButton: J,
    getActions: Z,
    getConfirmButton: K,
    getCancelButton: Y,
    getHeader: Q,
    getFooter: $,
    getFocusableElements: X,
    getValidationMessage: W,
    isLoading() {
      return R().hasAttribute('data-loading');
    },
    fire() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return l(this, e);
    },
    mixin(n) {
      return (function (t) {
        function e() {
          return o(this, e), d(this, u(e).apply(this, arguments));
        }
        return (
          (function (t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && c(t, e);
          })(e, t),
          a(e, [
            {
              key: '_main',
              value(t) {
                return p(u(e.prototype), '_main', this).call(this, {
                  ...n,
                  ...t,
                });
              },
            },
          ]),
          e
        );
      })(this);
    },
    queue(t) {
      const r = this;
      jt = t;
      function a(t, e) {
        (jt = []), document.body.removeAttribute('data-swal2-queue-step'), t(e);
      }
      const s = [];
      return new Promise(function (i) {
        !(function e(n, o) {
          n < jt.length
            ? (document.body.setAttribute('data-swal2-queue-step', n),
              r.fire(jt[n]).then(function (t) {
                void 0 !== t.value
                  ? (s.push(t.value), e(n + 1, o))
                  : a(i, { dismiss: t.dismiss });
              }))
            : a(i, { value: s });
        })(0);
      });
    },
    getQueueStep() {
      return document.body.getAttribute('data-swal2-queue-step');
    },
    insertQueueStep(t, e) {
      return e && e < jt.length ? jt.splice(e, 0, t) : jt.push(t);
    },
    deleteQueueStep(t) {
      void 0 !== jt[t] && jt.splice(t, 1);
    },
    showLoading: Lt,
    enableLoading: Lt,
    getTimerLeft() {
      return Ht.timeout && Ht.timeout.getTimerLeft();
    },
    stopTimer() {
      return Ht.timeout && Ht.timeout.stop();
    },
    resumeTimer() {
      return Ht.timeout && Ht.timeout.start();
    },
    toggleTimer() {
      const t = Ht.timeout;
      return t && (t.running ? t.stop() : t.start());
    },
    increaseTimer(t) {
      return Ht.timeout && Ht.timeout.increase(t);
    },
    isTimerRunning() {
      return Ht.timeout && Ht.timeout.isRunning();
    },
  });
  function Ut() {
    const t = ht.innerParams.get(this);
    const e = ht.domCache.get(this);
    t.showConfirmButton ||
      (O(e.confirmButton), t.showCancelButton || O(e.actions)),
      at([e.popup, e.actions], x.loading),
      e.popup.removeAttribute('aria-busy'),
      e.popup.removeAttribute('data-loading'),
      (e.confirmButton.disabled = !1),
      (e.cancelButton.disabled = !1);
  }
  function Ft() {
    P.previousBodyPadding === null &&
      document.body.scrollHeight > window.innerHeight &&
      ((P.previousBodyPadding = parseInt(
        window.getComputedStyle(document.body).getPropertyValue('padding-right')
      )),
      (document.body.style.paddingRight = `${
        P.previousBodyPadding +
        (function () {
          if ('ontouchstart' in window || navigator.msMaxTouchPoints) return 0;
          const t = document.createElement('div');
          (t.style.width = '50px'),
            (t.style.height = '50px'),
            (t.style.overflow = 'scroll'),
            document.body.appendChild(t);
          const e = t.offsetWidth - t.clientWidth;
          return document.body.removeChild(t), e;
        })()
      }px`));
  }
  function _t() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }
  function zt() {
    const t = H();
    const e = R();
    t.style.removeProperty('align-items'),
      e.offsetTop < 0 && (t.style.alignItems = 'flex-start');
  }
  const Wt = function () {
    let e;
    const n = H();
    (n.ontouchstart = function (t) {
      e =
        t.target === n ||
        (!(function (t) {
          return !!(t.scrollHeight > t.clientHeight);
        })(n) &&
          t.target.tagName !== 'INPUT');
    }),
      (n.ontouchmove = function (t) {
        e && (t.preventDefault(), t.stopPropagation());
      });
  };
  const Kt = { swalPromiseResolve: new WeakMap() };
  function Yt(t, e, n, o) {
    n
      ? Jt(t, o)
      : (Ot().then(function () {
          return Jt(t, o);
        }),
        Ht.keydownTarget.removeEventListener('keydown', Ht.keydownHandler, {
          capture: Ht.keydownListenerCapture,
        }),
        (Ht.keydownHandlerAdded = !1)),
      e.parentNode && e.parentNode.removeChild(e),
      G() &&
        (P.previousBodyPadding !== null &&
          ((document.body.style.paddingRight = `${P.previousBodyPadding}px`),
          (P.previousBodyPadding = null)),
        (function () {
          if (b(document.body, x.iosfix)) {
            const t = parseInt(document.body.style.top, 10);
            at(document.body, x.iosfix),
              (document.body.style.top = ''),
              (document.body.scrollTop = -1 * t);
          }
        })(),
        typeof window !== 'undefined' &&
          _t() &&
          window.removeEventListener('resize', zt),
        m(document.body.children).forEach(function (t) {
          t.hasAttribute('data-previous-aria-hidden')
            ? (t.setAttribute(
                'aria-hidden',
                t.getAttribute('data-previous-aria-hidden')
              ),
              t.removeAttribute('data-previous-aria-hidden'))
            : t.removeAttribute('aria-hidden');
        })),
      at(
        [document.documentElement, document.body],
        [
          x.shown,
          x['height-auto'],
          x['no-backdrop'],
          x['toast-shown'],
          x['toast-column'],
        ]
      );
  }
  function Zt(t) {
    const e = R();
    if (e && !b(e, x.hide)) {
      const n = ht.innerParams.get(this);
      if (n) {
        const o = Kt.swalPromiseResolve.get(this);
        at(e, x.show),
          rt(e, x.hide),
          (function (t, e, n) {
            const o = H();
            const i = pt && j(e);
            const r = n.onClose;
            const a = n.onAfterClose;
            if (r !== null && typeof r === 'function') {
              r(e);
            }
            if (i) {
              $t(t, e, o, a);
            } else {
              Yt(t, o, ut(), a);
            }
          })(this, e, n),
          o(t || {});
      }
    }
  }
  function Qt(t) {
    for (const e in t) t[e] = new WeakMap();
  }
  var $t = function (t, e, n, o) {
    (Ht.swalCloseEventFinishedCallback = Yt.bind(null, t, n, ut(), o)),
      e.addEventListener(pt, function (t) {
        t.target === e &&
          (Ht.swalCloseEventFinishedCallback(),
          delete Ht.swalCloseEventFinishedCallback);
      });
  };
  var Jt = function (t, e) {
    setTimeout(function () {
      e !== null && typeof e === 'function' && e(),
        R() ||
          (function (t) {
            delete t.params,
              delete Ht.keydownHandler,
              delete Ht.keydownTarget,
              Qt(ht),
              Qt(Kt);
          })(t);
    });
  };
  function Xt(t, e, n) {
    const o = ht.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }
  function Gt(t, e) {
    if (!t) return !1;
    if (t.type === 'radio')
      for (
        let n = t.parentNode.parentNode.querySelectorAll('input'), o = 0;
        o < n.length;
        o++
      )
        n[o].disabled = e;
    else t.disabled = e;
  }
  const te = (function () {
    function n(t, e) {
      o(this, n),
        (this.callback = t),
        (this.remaining = e),
        (this.running = !1),
        this.start();
    }
    return (
      a(n, [
        {
          key: 'start',
          value() {
            return (
              this.running ||
                ((this.running = !0),
                (this.started = new Date()),
                (this.id = setTimeout(this.callback, this.remaining))),
              this.remaining
            );
          },
        },
        {
          key: 'stop',
          value() {
            return (
              this.running &&
                ((this.running = !1),
                clearTimeout(this.id),
                (this.remaining -= new Date() - this.started)),
              this.remaining
            );
          },
        },
        {
          key: 'increase',
          value(t) {
            const e = this.running;
            return (
              e && this.stop(),
              (this.remaining += t),
              e && this.start(),
              this.remaining
            );
          },
        },
        {
          key: 'getTimerLeft',
          value() {
            return this.running && (this.stop(), this.start()), this.remaining;
          },
        },
        {
          key: 'isRunning',
          value() {
            return this.running;
          },
        },
      ]),
      n
    );
  })();
  const ee = {
    email(t, e) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
        ? Promise.resolve()
        : Promise.resolve(e || 'Invalid email address');
    },
    url(t, e) {
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        t
      )
        ? Promise.resolve()
        : Promise.resolve(e || 'Invalid URL');
    },
  };
  function ne(t) {
    !(function (e) {
      e.inputValidator ||
        Object.keys(ee).forEach(function (t) {
          e.input === t && (e.inputValidator = ee[t]);
        });
    })(t),
      t.showLoaderOnConfirm &&
        !t.preConfirm &&
        w(
          'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
        ),
      (t.animation = C(t.animation)),
      (function (t) {
        (t.target &&
          (typeof t.target !== 'string' || document.querySelector(t.target)) &&
          (typeof t.target === 'string' || t.target.appendChild)) ||
          (w('Target parameter is not valid, defaulting to "body"'),
          (t.target = 'body'));
      })(t),
      typeof t.title === 'string' &&
        (t.title = t.title.split('\n').join('<br />')),
      lt(t);
  }
  function oe(t, e) {
    t.removeEventListener(pt, oe), (e.style.overflowY = 'auto');
  }
  function ie(t) {
    const e = H();
    const n = R();
    typeof t.onBeforeOpen === 'function' && t.onBeforeOpen(n),
      me(e, n, t),
      pe(e, n),
      G() && fe(e, t.scrollbarPadding),
      ut() ||
        Ht.previousActiveElement ||
        (Ht.previousActiveElement = document.activeElement),
      typeof t.onOpen === 'function' &&
        setTimeout(function () {
          return t.onOpen(n);
        });
  }
  function re(t, e) {
    e.input === 'select' || e.input === 'radio'
      ? be(t, e)
      : ['text', 'email', 'number', 'tel', 'textarea'].indexOf(e.input) !==
          -1 &&
        v(e.inputValue) &&
        ye(t, e);
  }
  function ae(t, e) {
    t.disableButtons(), e.input ? ke(t, e) : xe(t, e, !0);
  }
  function se(t, e) {
    t.disableButtons(), e(k.cancel);
  }
  function ue(t, e) {
    t.closePopup({ value: e });
  }
  function ce(e, t, n, o) {
    t.keydownTarget &&
      t.keydownHandlerAdded &&
      (t.keydownTarget.removeEventListener('keydown', t.keydownHandler, {
        capture: t.keydownListenerCapture,
      }),
      (t.keydownHandlerAdded = !1)),
      n.toast ||
        ((t.keydownHandler = function (t) {
          return Be(e, t, n, o);
        }),
        (t.keydownTarget = n.keydownListenerCapture ? window : R()),
        (t.keydownListenerCapture = n.keydownListenerCapture),
        t.keydownTarget.addEventListener('keydown', t.keydownHandler, {
          capture: t.keydownListenerCapture,
        }),
        (t.keydownHandlerAdded = !0));
  }
  function le(t, e, n) {
    for (let o = X(), i = 0; i < o.length; i++)
      return (
        (e += n) === o.length ? (e = 0) : e === -1 && (e = o.length - 1),
        o[e].focus()
      );
    R().focus();
  }
  function de(t, e, n) {
    e.toast ? Oe(t, e, n) : (Ve(t), je(t), He(t, e, n));
  }
  var pe = function (t, e) {
    pt && j(e)
      ? ((t.style.overflowY = 'hidden'),
        e.addEventListener(pt, oe.bind(null, e, t)))
      : (t.style.overflowY = 'auto');
  };
  var fe = function (t, e) {
    !(function () {
      if (
        ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
          (navigator.platform === 'MacIntel' &&
            navigator.maxTouchPoints > 1)) &&
        !b(document.body, x.iosfix)
      ) {
        const t = document.body.scrollTop;
        (document.body.style.top = `${-1 * t}px`),
          rt(document.body, x.iosfix),
          Wt();
      }
    })(),
      typeof window !== 'undefined' &&
        _t() &&
        (zt(), window.addEventListener('resize', zt)),
      m(document.body.children).forEach(function (t) {
        t === H() ||
          (function (t, e) {
            if (typeof t.contains === 'function') return t.contains(e);
          })(t, H()) ||
          (t.hasAttribute('aria-hidden') &&
            t.setAttribute(
              'data-previous-aria-hidden',
              t.getAttribute('aria-hidden')
            ),
          t.setAttribute('aria-hidden', 'true'));
      }),
      e && Ft(),
      setTimeout(function () {
        t.scrollTop = 0;
      });
  };
  var me = function (t, e, n) {
    n.animation && rt(e, x.show),
      L(e),
      rt([document.documentElement, document.body, t], x.shown),
      n.heightAuto &&
        n.backdrop &&
        !n.toast &&
        rt([document.documentElement, document.body], x['height-auto']);
  };
  const ge = function (t) {
    return t.checked ? 1 : 0;
  };
  const he = function (t) {
    return t.checked ? t.value : null;
  };
  const ve = function (t) {
    return t.files.length
      ? t.getAttribute('multiple') !== null
        ? t.files
        : t.files[0]
      : null;
  };
  var be = function (e, n) {
    function o(t) {
      return we[n.input](i, Ce(t), n);
    }
    var i = F();
    v(n.inputOptions)
      ? (Lt(),
        n.inputOptions.then(function (t) {
          e.hideLoading(), o(t);
        }))
      : r(n.inputOptions) === 'object'
      ? o(n.inputOptions)
      : g(
          'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
            r(n.inputOptions)
          )
        );
  };
  var ye = function (e, n) {
    const o = e.getInput();
    O(o),
      n.inputValue
        .then(function (t) {
          (o.value = n.input === 'number' ? parseFloat(t) || 0 : `${t}`),
            L(o),
            o.focus(),
            e.hideLoading();
        })
        .catch(function (t) {
          g(`Error in inputValue promise: ${t}`),
            (o.value = ''),
            L(o),
            o.focus(),
            e.hideLoading();
        });
  };
  var we = {
    select(t, e, i) {
      const r = st(t, x.select);
      e.forEach(function (t) {
        const e = t[0];
        const n = t[1];
        const o = document.createElement('option');
        (o.value = e),
          (o.innerHTML = n),
          i.inputValue.toString() === e.toString() && (o.selected = !0),
          r.appendChild(o);
      }),
        r.focus();
    },
    radio(t, e, a) {
      const s = st(t, x.radio);
      e.forEach(function (t) {
        const e = t[0];
        const n = t[1];
        const o = document.createElement('input');
        const i = document.createElement('label');
        (o.type = 'radio'),
          (o.name = x.radio),
          (o.value = e),
          a.inputValue.toString() === e.toString() && (o.checked = !0);
        const r = document.createElement('span');
        (r.innerHTML = n),
          (r.className = x.label),
          i.appendChild(o),
          i.appendChild(r),
          s.appendChild(i);
      });
      const n = s.querySelectorAll('input');
      n.length && n[0].focus();
    },
  };
  var Ce = function (e) {
    const n = [];
    return (
      typeof Map !== 'undefined' && e instanceof Map
        ? e.forEach(function (t, e) {
            n.push([e, t]);
          })
        : Object.keys(e).forEach(function (t) {
            n.push([t, e[t]]);
          }),
      n
    );
  };
  var ke = function (e, n) {
    const o = (function (t, e) {
      const n = t.getInput();
      if (!n) return null;
      switch (e.input) {
        case 'checkbox':
          return ge(n);
        case 'radio':
          return he(n);
        case 'file':
          return ve(n);
        default:
          return e.inputAutoTrim ? n.value.trim() : n.value;
      }
    })(e, n);
    n.inputValidator
      ? (e.disableInput(),
        Promise.resolve()
          .then(function () {
            return n.inputValidator(o, n.validationMessage);
          })
          .then(function (t) {
            e.enableButtons(),
              e.enableInput(),
              t ? e.showValidationMessage(t) : xe(e, n, o);
          }))
      : e.getInput().checkValidity()
      ? xe(e, n, o)
      : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
  };
  var xe = function (e, t, n) {
    (t.showLoaderOnConfirm && Lt(), t.preConfirm)
      ? (e.resetValidationMessage(),
        Promise.resolve()
          .then(function () {
            return t.preConfirm(n, t.validationMessage);
          })
          .then(function (t) {
            V(W()) || !1 === t ? e.hideLoading() : ue(e, void 0 === t ? n : t);
          }))
      : ue(e, n);
  };
  const Se = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Left',
    'Right',
    'Up',
    'Down',
  ];
  const Pe = ['Escape', 'Esc'];
  var Be = function (t, e, n, o) {
    n.stopKeydownPropagation && e.stopPropagation(),
      e.key === 'Enter'
        ? Ae(t, e, n)
        : e.key === 'Tab'
        ? Ee(e, n)
        : Se.indexOf(e.key) !== -1
        ? Te()
        : Pe.indexOf(e.key) !== -1 && Le(e, n, o);
  };
  var Ae = function (t, e, n) {
    if (
      !e.isComposing &&
      e.target &&
      t.getInput() &&
      e.target.outerHTML === t.getInput().outerHTML
    ) {
      if (['textarea', 'file'].indexOf(n.input) !== -1) return;
      At(), e.preventDefault();
    }
  };
  var Ee = function (t, e) {
    for (var n = t.target, o = X(), i = -1, r = 0; r < o.length; r++)
      if (n === o[r]) {
        i = r;
        break;
      }
    t.shiftKey ? le(0, i, -1) : le(0, i, 1),
      t.stopPropagation(),
      t.preventDefault();
  };
  var Te = function () {
    const t = K();
    const e = Y();
    document.activeElement === t && V(e)
      ? e.focus()
      : document.activeElement === e && V(t) && t.focus();
  };
  var Le = function (t, e, n) {
    C(e.allowEscapeKey) && (t.preventDefault(), n(k.esc));
  };
  var Oe = function (t, e, n) {
    t.popup.onclick = function () {
      e.showConfirmButton ||
        e.showCancelButton ||
        e.showCloseButton ||
        e.input ||
        n(k.close);
    };
  };
  let Me = !1;
  var Ve = function (e) {
    e.popup.onmousedown = function () {
      e.container.onmouseup = function (t) {
        (e.container.onmouseup = void 0), t.target === e.container && (Me = !0);
      };
    };
  };
  var je = function (e) {
    e.container.onmousedown = function () {
      e.popup.onmouseup = function (t) {
        (e.popup.onmouseup = void 0),
          (t.target !== e.popup && !e.popup.contains(t.target)) || (Me = !0);
      };
    };
  };
  var He = function (e, n, o) {
    e.container.onclick = function (t) {
      Me
        ? (Me = !1)
        : t.target === e.container && C(n.allowOutsideClick) && o(k.backdrop);
    };
  };
  const Ie = function (t, e, n) {
    e.timer &&
      (t.timeout = new te(function () {
        n('timer'), delete t.timeout;
      }, e.timer));
  };
  const qe = function (t, e) {
    if (!e.toast)
      return C(e.allowEnterKey)
        ? e.focusCancel && V(t.cancelButton)
          ? t.cancelButton.focus()
          : e.focusConfirm && V(t.confirmButton)
          ? t.confirmButton.focus()
          : void le(0, -1, 1)
        : Re();
  };
  var Re = function () {
    document.activeElement &&
      typeof document.activeElement.blur === 'function' &&
      document.activeElement.blur();
  };
  let De;
  const Ne = Object.freeze({
    hideLoading: Ut,
    disableLoading: Ut,
    getInput(t) {
      const e = ht.innerParams.get(t || this);
      const n = ht.domCache.get(t || this);
      return n ? B(n.content, e.input) : null;
    },
    close: Zt,
    closePopup: Zt,
    closeModal: Zt,
    closeToast: Zt,
    enableButtons() {
      Xt(this, ['confirmButton', 'cancelButton'], !1);
    },
    disableButtons() {
      Xt(this, ['confirmButton', 'cancelButton'], !0);
    },
    enableConfirmButton() {
      h(
        'Swal.enableConfirmButton()',
        "Swal.getConfirmButton().removeAttribute('disabled')"
      ),
        Xt(this, ['confirmButton'], !1);
    },
    disableConfirmButton() {
      h(
        'Swal.disableConfirmButton()',
        "Swal.getConfirmButton().setAttribute('disabled', '')"
      ),
        Xt(this, ['confirmButton'], !0);
    },
    enableInput() {
      return Gt(this.getInput(), !1);
    },
    disableInput() {
      return Gt(this.getInput(), !0);
    },
    showValidationMessage(t) {
      const e = ht.domCache.get(this);
      e.validationMessage.innerHTML = t;
      const n = window.getComputedStyle(e.popup);
      (e.validationMessage.style.marginLeft = '-'.concat(
        n.getPropertyValue('padding-left')
      )),
        (e.validationMessage.style.marginRight = '-'.concat(
          n.getPropertyValue('padding-right')
        )),
        L(e.validationMessage);
      const o = this.getInput();
      o &&
        (o.setAttribute('aria-invalid', !0),
        o.setAttribute('aria-describedBy', x['validation-message']),
        A(o),
        rt(o, x.inputerror));
    },
    resetValidationMessage() {
      const t = ht.domCache.get(this);
      t.validationMessage && O(t.validationMessage);
      const e = this.getInput();
      e &&
        (e.removeAttribute('aria-invalid'),
        e.removeAttribute('aria-describedBy'),
        at(e, x.inputerror));
    },
    getProgressSteps() {
      return (
        h(
          'Swal.getProgressSteps()',
          "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"
        ),
        ht.innerParams.get(this).progressSteps
      );
    },
    setProgressSteps(t) {
      h('Swal.setProgressSteps()', 'Swal.update()');
      const e = { ...ht.innerParams.get(this), progressSteps: t };
      St(0, e), ht.innerParams.set(this, e);
    },
    showProgressSteps() {
      const t = ht.domCache.get(this);
      L(t.progressSteps);
    },
    hideProgressSteps() {
      const t = ht.domCache.get(this);
      O(t.progressSteps);
    },
    _main(t) {
      !(function (t) {
        for (const e in t)
          Mt((i = e)) || w('Unknown parameter "'.concat(i, '"')),
            t.toast &&
              ((o = e),
              Dt.indexOf(o) !== -1 &&
                w(
                  'The parameter "'.concat(o, '" is incompatible with toasts')
                )),
            Vt((n = void 0)) && h(n, Vt(n));
        let n;
        let o;
        let i;
      })(t),
        R() &&
          Ht.swalCloseEventFinishedCallback &&
          (Ht.swalCloseEventFinishedCallback(),
          delete Ht.swalCloseEventFinishedCallback),
        Ht.deferDisposalTimer &&
          (clearTimeout(Ht.deferDisposalTimer), delete Ht.deferDisposalTimer);
      const e = { ...It, ...t };
      ne(e),
        Object.freeze(e),
        Ht.timeout && (Ht.timeout.stop(), delete Ht.timeout),
        clearTimeout(Ht.restoreFocusTimeout);
      const n = (function (t) {
        const e = {
          popup: R(),
          container: H(),
          content: F(),
          actions: Z(),
          confirmButton: K(),
          cancelButton: Y(),
          closeButton: J(),
          validationMessage: W(),
          progressSteps: z(),
        };
        return ht.domCache.set(t, e), e;
      })(this);
      return (
        Bt(this, e),
        ht.innerParams.set(this, e),
        (function (n, o, i) {
          return new Promise(function (t) {
            const e = function t(e) {
              n.closePopup({ dismiss: e });
            };
            Kt.swalPromiseResolve.set(n, t);
            Ie(Ht, i, e);
            o.confirmButton.onclick = function () {
              return ae(n, i);
            };
            o.cancelButton.onclick = function () {
              return se(n, e);
            };
            o.closeButton.onclick = function () {
              return e(k.close);
            };
            de(o, i, e);
            ce(n, Ht, i, e);
            if (i.toast && (i.input || i.footer || i.showCloseButton)) {
              rt(document.body, x['toast-column']);
            } else {
              at(document.body, x['toast-column']);
            }
            re(n, i);
            ie(i);
            qe(o, i);
            o.container.scrollTop = 0;
          });
        })(this, n, e)
      );
    },
    update(e) {
      const t = R();
      if (!t || b(t, x.hide))
        return w(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
      const n = {};
      Object.keys(e).forEach(function (t) {
        Fe.isUpdatableParameter(t)
          ? (n[t] = e[t])
          : w(
              'Invalid parameter to update: "'.concat(
                t,
                '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
              )
            );
      });
      const o = { ...ht.innerParams.get(this), ...n };
      Bt(this, o),
        ht.innerParams.set(this, o),
        Object.defineProperties(this, {
          params: {
            value: { ...this.params, ...e },
            writable: !1,
            enumerable: !0,
          },
        });
    },
  });
  function Ue() {
    if (typeof window !== 'undefined') {
      typeof Promise === 'undefined' &&
        g(
          'This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)'
        ),
        (De = this);
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      const o = Object.freeze(this.constructor.argsToParams(e));
      Object.defineProperties(this, {
        params: { value: o, writable: !1, enumerable: !0, configurable: !0 },
      });
      const i = this._main(this.params);
      ht.promise.set(this, i);
    }
  }
  (Ue.prototype.then = function (t) {
    return ht.promise.get(this).then(t);
  }),
    (Ue.prototype.finally = function (t) {
      return ht.promise.get(this).finally(t);
    }),
    s(Ue.prototype, Ne),
    s(Ue, Nt),
    Object.keys(Ne).forEach(function (e) {
      Ue[e] = function () {
        let t;
        if (De) return (t = De)[e].apply(t, arguments);
      };
    }),
    (Ue.DismissReason = k),
    (Ue.version = '8.19.0');
  var Fe = Ue;
  return (Fe.default = Fe);
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
typeof document !== 'undefined' &&
  (function (e, t) {
    const n = e.createElement('style');
    if ((e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
  })(
    document,
    '@charset "UTF-8";.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"؟"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
  );
