(() => {
	var e = {
			617: () => {
				console.log('field: exports["."]');
			},
			507: () => {
				console.log('field: exports["."]');
			},
			933: () => {
				console.log('field: browser');
			},
		},
		o = {};
	function r(t) {
		var l = o[t];
		if (void 0 !== l) return l.exports;
		var s = (o[t] = {exports: {}});
		return e[t](s, s.exports, r), s.exports;
	}
	(r.n = e => {
		var o = e && e.__esModule ? () => e.default : () => e;
		return r.d(o, {a: o}), o;
	}),
		(r.d = (e, o) => {
			for (var t in o)
				r.o(o, t) &&
					!r.o(e, t) &&
					Object.defineProperty(e, t, {enumerable: !0, get: o[t]});
		}),
		(r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
		(() => {
			'use strict';
			r(933), r(507), r(617);
		})();
})();
