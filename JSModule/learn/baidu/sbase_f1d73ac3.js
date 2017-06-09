$.extend({
	browser: {
		chrome: /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["\x241"] : undefined,
		firefox: /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["\x241"] : undefined,
		ie: /msie (\d+\.\d+)|Trident/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"]) : undefined,
		isGecko: /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
		isWebkit: /webkit/i.test(navigator.userAgent),
		opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["\x246"] || RegExp["\x242"]) : undefined,
		safari: /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? +(RegExp["\x241"] || RegExp["\x242"]) : undefined,
		isSogouIE: ((navigator.userAgent.toLowerCase()).indexOf("msie") > 0) && ((navigator.userAgent.toLowerCase()).indexOf("se") > 0) && ((navigator.userAgent.toLowerCase()).indexOf("360se") == -1),
		isBaidu: /BIDUBrowser/i.test(navigator.userAgent),
		edge: /edge\/(\d+)/i.test(navigator.userAgent) ? +RegExp["\x241"] : undefined
	}
});
$.extend({
	isIE: $.browser.ie,
	isIE6: $.browser.ie == 6,
	isBaidu: $.browser.isBaidu
});
$.extend({
	Strpx: (function(c) {
		var b = 0,
		a = "涓�",
		e = "visibility:hidden;position:absolute;bottom:0;left:0;",
		d = "s_strpx_span";
		return function(n) {
			b++;
			var k = 0,
			m = {},
			j = '<span id="' + d + b + '" style="' + e + (n || "") + '"></span>',
			l = $(j)[0];
			document.getElementsByTagName("body")[0].appendChild(l);
			l.innerHTML = a;
			k = l.offsetWidth;
			var g = function(t) {
				var s = 0;
				for (var r = 0,
				p = t.length; r < p; r++) {
					var q = t.charCodeAt(r);
					s += q > 255 ? k: o.call(this, t.charAt(r))
				}
				return s
			};
			var o = function(q) {
				if (m[q]) {
					return m[q]
				} else {
					l.innerHTML = (q == " " ? "&nbsp;": q);
					var p = l.offsetWidth;
					m[q] = p;
					return p
				}
			};
			var f = function(v, s, w) {
				if (!v) {
					return v
				}
				if (v.length * k < s) {
					return v
				}
				if (g(v) <= s) {
					return v
				}
				if (w) {
					s = s - g(w)
				}
				if (s < 0) {
					s = 0
				}
				var u = 0;
				for (var r = 0,
				p = v.length; r < p; r++) {
					var q = v.charCodeAt(r),
					t = q > 255 ? k: o.call(this, v.charAt(r));
					if (u <= s && u + t > s) {
						return v.substring(0, r) + (w || "")
					} else {
						u += t
					}
				}
				return v
			};
			return {
				substringByPx: f,
				getLengthPx: g
			}
		}
	})()
});
$.extend({
	url: {
		escapeReg: function(a) {
			return String(a).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])", "g"), "\\\x241")
		},
		escapeSSL: function(b) {
			if (s_domain.protocol === "http:" || b.indexOf("https:") == 0) {
				return b
			}
			var e = s_domain.ssllist || {},
			c = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
			d = b.match(c);
			var a = e.hasOwnProperty(d[2]) && (e[d[2]] + d[3]);
			if (!a) {
				new Image().src = "/home/page/data/pageserver?errno=7008&errurl=" + encodeURIComponent(b) + "&_t=" + new Date() * 1;
				if ($.browser.chrome) {
					return b
				}
				return b.replace(/http:/, "https:")
			}
			return "https://" + a
		},
		getQueryValue: function(b, c) {
			var d = new RegExp("(^|&|\\?|#)" + $.url.escapeReg(c) + "=([^&#]*)(&|\x24|#)", "");
			var a = b.match(d);
			if (a) {
				return a[2]
			}
			return null
		},
		escapeSymbol: function(a) {
			return String(a).replace(/[#%&+=\/\\\ \銆€\f\r\n\t]/g,
			function(b) {
				return "%" + (256 + b.charCodeAt()).toString(16).substring(1).toUpperCase()
			})
		},
		jsonToQuery: function(c, e) {
			var a = [],
			d,
			b = e ||
			function(f) {
				return $.url.escapeSymbol(f)
			};
			$.each(c,
			function(f, g) {
				if ($.isArray(g)) {
					d = g.length;
					while (d--) {
						a.push(f + "=" + encodeURIComponent(g[d]))
					}
				} else {
					a.push(f + "=" + encodeURIComponent(g))
				}
			});
			return a.join("&")
		},
		queryToJson: function(a) {
			var f = a.substr(a.lastIndexOf("?") + 1),
			c = f.split("&"),
			e = c.length,
			l = {},
			d = 0,
			j,
			g,
			k,
			b;
			for (; d < e; d++) {
				if (!c[d]) {
					continue
				}
				b = c[d].split("=");
				j = b[0];
				g = b[1];
				k = l[j];
				if ("undefined" == typeof k) {
					l[j] = g
				} else {
					if ($.isArray(k)) {
						k.push(g)
					} else {
						l[j] = [k, g]
					}
				}
			}
			return l
		}
	}
});
$.extend({
	ajaxget: function(a, e, b) {
		var d = {};
		d.indextype = "manht";
		if (!$.url.getQueryValue(a, "_req_seqid")) {
			d._req_seqid = s_session.seqId
		}
		if (s_session.debug) {
			d.debug = "on"
		}
		if (!$.url.getQueryValue(a, "asyn") || $.url.getQueryValue(a, "asyn") != 1) {
			d.asyn = 1
		}
		if (!$.url.getQueryValue(a, "t") && !$.url.getQueryValue(a, "r")) {
			d.t = (new Date()).valueOf()
		}
		if (!$.url.getQueryValue(a, "sid") && !$.url.getQueryValue(a, "sid")) {
			d.sid = s_session.sid
		}
		if (!$.url.getQueryValue(a, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
			d.super_frm = $.url.getQueryValue(location.href, "super_frm")
		}
		if (!$.url.getQueryValue(a, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
			d.from_login = $.url.getQueryValue(location.href, "from_login")
		}
		if (!$.url.getQueryValue(a, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
			d.from_reg = $.url.getQueryValue(location.href, "from_reg")
		}
		if (a && a.indexOf("?") > 0) {
			a += "&" + $.url.jsonToQuery(d)
		} else {
			a += "?" + $.url.jsonToQuery(d)
		}
		var c = function(f) {
			return (new Function("return (" + f + ")"))()
		};
		return $.ajax({
			url: a,
			type: "GET",
			dataType: "text",
			success: function(g, k) {
				if (g) {
					var j = {};
					try {
						j = c(g)
					} catch(f) {
						new Image().src = s_domain.baseuri + "/page/data/pageserver?errno=2013&url=" + encodeURIComponent(a) + "&ldq=" + encodeURIComponent(g.slice(0, 200));
						if (g.indexOf("script") >= 0) {
							$.ajax({
								type: "POST",
								url: "/home/page/data/pageserver",
								data: {
									errno: 7006,
									isData: encodeURIComponent(g)
								}
							})
						}
					}
					if (j.errNo === undefined) {
						e && e({
							errNo: -1000
						});
						window._xman_exception && _xman_exception.api("get", a, "-1000", a.split("?")[1])
					}
					if (j.errNo && j.errNo != 0) {
						e && e({
							errNo: j.errNo
						});
						window._xman_exception && _xman_exception.api("get", a, date.errno, a.split("?")[1])
					}
					if (j.errNo && (j.errNo == "403")) {
						new Image().src = s_domain.baseuri + "/page/data/pageserver?errno=403&url=" + encodeURIComponent(a)
					} else {
						if (!b || (b && j.errNo == 0)) {
							e && e(j)
						}
					}
				}
			}
		})
	},
	ajaxpost: function(a, c, e) {
		if (typeof c != "string") {
			c.indextype = "manht";
			c.bsToken = $("#bsToken") && $("#bsToken").val() || "";
			c._req_seqid = s_session.seqId;
			c.sid = s_session.sid;
			if (!$.url.getQueryValue(a, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
				c.super_frm = $.url.getQueryValue(location.href, "super_frm")
			}
			if (!$.url.getQueryValue(a, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
				c.from_login = $.url.getQueryValue(location.href, "from_login")
			}
			if (!$.url.getQueryValue(a, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
				c.from_reg = $.url.getQueryValue(location.href, "from_reg")
			}
			if (s_session.debug) {
				c.debug = "on"
			}
			c = $.url.jsonToQuery(c)
		} else {
			c += "&_req_seqid=" + s_session.seqId + "&bsToken=" + ($("#bsToken") && $("$bsToken").val() || "") + "&sid=" + s_session.sid;
			if (s_session.debug) {
				c += "&debug=on"
			}
		}
		var b = function(f) {
			return (new Function("return (" + f + ")"))()
		};
		var d = c;
		return $.ajax({
			url: a,
			type: "POST",
			data: c,
			dataType: "text",
			success: function(f, j) {
				if (f) {
					if (typeof d != "string") {
						d = $.url.jsonToQuery(d)
					}
					var g = {};
					g = b(f);
					if (g.errNo === undefined) {
						window._xman_exception && _xman_exception.api("post", a, "-1000", d)
					}
					if (g.errNo && g.errNo != 0) {
						window._xman_exception && _xman_exception.api("post", a, g.errNo, d)
					}
					if (g.errNo == "7007") {
						d += ("&retryno=" + g.errNo);
						if (a && a.indexOf("?") > 0) {
							a += "&" + d
						} else {
							a += "?" + d
						}
						$.ajax({
							url: a,
							type: "get",
							dataType: "text",
							success: function(k, m) {
								if (k) {
									var l = b(k);
									e && e(l)
								}
							}
						})
					} else {
						e && e(g)
					}
				}
			}
		})
	}
});
$.extend({
	ajaxsyncget: function(a, d) {
		if (s_session.issync && s_session.isdev != "1") {
			s_session.issync = null;
			var b = {};
			try {
				b = (new Function("return (" + $.trim($("#s_sync_data").html()) + ")"))()
			} catch(c) {
				b.errNo = 9999
			}
			d && d(b)
		} else {
			return $.ajaxget(a, d, true)
		}
	}
});
$.extend({
	stringify: function stringify(b) {
		if ("JSON" in window) {
			return JSON.stringify(b)
		}
		var k = typeof(b);
		if (k != "object" || b === null) {
			if (k == "string") {
				b = '"' + b + '"'
			}
			return String(b)
		} else {
			var c = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			};
			function f(m) {
				if (/["\\\x00-\x1f]/.test(m)) {
					m = m.replace(/["\\\x00-\x1f]/g,
					function(n) {
						var o = c[n];
						if (o) {
							return o
						}
						o = n.charCodeAt();
						return "\\u00" + Math.floor(o / 16).toString(16) + (o % 16).toString(16)
					})
				}
				return '"' + m + '"'
			}
			function a(r) {
				var n = ["["],
				o = r.length,
				m,
				p,
				q;
				for (p = 0; p < o; p++) {
					q = r[p];
					switch (typeof q) {
					case "undefined":
					case "function":
					case "unknown":
						break;
					default:
						if (m) {
							n.push(",")
						}
						n.push($.stringify(q));
						m = 1
					}
				}
				n.push("]");
				return n.join("")
			}
			switch (typeof b) {
			case "undefined":
				return "undefined";
			case "number":
				return isFinite(b) ? String(b) : "null";
			case "string":
				return f(b);
			case "boolean":
				return String(b);
			default:
				if (b === null) {
					return "null"
				} else {
					if (b instanceof Array) {
						return a(b)
					} else {
						var l = ["{"],
						e = $.stringify,
						d,
						j;
						for (var g in b) {
							if (Object.prototype.hasOwnProperty.call(b, g)) {
								j = b[g];
								switch (typeof j) {
								case "undefined":
								case "unknown":
								case "function":
									break;
								default:
									if (d) {
										l.push(",")
									}
									d = 1;
									l.push(e(g) + ":" + e(j))
								}
							}
						}
						l.push("}");
						return l.join("")
					}
				}
			}
		}
	}
});
$.extend({
	loadCss: function(b) {
		var a = document.createElement("link");
		a.setAttribute("rel", "stylesheet");
		a.setAttribute("type", "text/css");
		a.setAttribute("href", b);
		document.getElementsByTagName("head")[0].appendChild(a)
	},
	loadJs: function(c, b) {
		var a = document.createElement("script");
		a.setAttribute("type", "text/javascript");
		a.setAttribute("src", c);
		a.setAttribute("defer", "defer");
		document.getElementsByTagName("head")[0].appendChild(a)
	}
});
$.extend({
	formatString: function(c, a) {
		c = String(c);
		var b = Array.prototype.slice.call(arguments, 1),
		d = Object.prototype.toString;
		if (b.length) {
			b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a: b) : b;
			return c.replace(/#\{(.+?)\}/g,
			function(e, g) {
				var f = b[g];
				if ("[object Function]" == d.call(f)) {
					f = f(g)
				}
				return ("undefined" == typeof f ? "": f)
			})
		}
		return c
	},
	encodeHTML: function(a) {
		return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	},
	decodeHTML: function(a) {
		var b = String(a).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
		return b.replace(/&#([\d]+);/g,
		function(d, c) {
			return String.fromCharCode(parseInt(c, 10))
		})
	},
	isString: function(a) {
		return "[object String]" == Object.prototype.toString.call(a)
	},
	trimAll: function(a) {
		return a.replace(/\s+/g, "")
	}
});
$.extend({
	localstorage: (function() {
		var f = function(l) {
			return {}.toString.call(l) === "[object Date]" && l.toString() !== "Invalid Date" && !isNaN(l)
		};
		var c = "SUPER_LS_PLUGIN_1",
		g = {
			SUCCESS: 0,
			FAILURE: 1,
			OVERFLOW: 2
		};
		function j(l) {
			return "_super_" + l.replace(/[_\s]/g,
			function(m) {
				return m == "_" ? "__": "_s"
			})
		}
		function b() {
			return document.getElementById(c + "-storage")
		}
		function a() {
			var l;
			if (window.ActiveXObject && $.browser.ie < 9) {
				l = k()
			} else {
				if (window.localStorage) {
					l = e()
				} else {
					l = d()
				}
			}
			return l
		}
		function k() {
			$(document.body).append($.formatString('<div id="#{id}" style="display:none;"></div>', {
				id: c + "-storage"
			}));
			b().addBehavior("#default#userData");
			return {
				set: function(q, p, r, t) {
					var m = g.SUCCESS,
					s = b(),
					o = j(q),
					l = t && t.expires ? t.expires: new Date().getTime() + 365 * 24 * 60 * 60 * 1000;
					if (f(l)) {
						l = l.getTime()
					} else {
						l = new Date().getTime() + (l - 0)
					}
					s.expires = new Date(l).toUTCString();
					try {
						s.setAttribute(o, p);
						s.save(o)
					} catch(n) {
						m = g.OVERFLOW
					}
					s = null;
					r && r.call(this, m, p)
				},
				get: function(m) {
					var l = g.SUCCESS,
					n = b(),
					q = j(m),
					p = null;
					try {
						n.load(q);
						p = n.getAttribute(q)
					} catch(o) {
						return {
							status: g.FAILURE,
							value: null
						}
					}
					return {
						status: l,
						value: p
					}
				},
				del: function(m, r) {
					var l = g.SUCCESS,
					n = b(),
					q = j(m),
					p;
					try {
						n.load(q);
						p = n.getAttribute(q);
						if (p) {
							n.removeAttribute(q);
							n.expires = new Date(315532799000).toUTCString();
							n.save(q)
						} else {
							l = g.FAILURE
						}
					} catch(o) {
						l = g.FAILURE
					}
					r && r.call(this, l, p)
				}
			}
		}
		function e() {
			return {
				set: function(r, q, s, t) {
					var m = g.SUCCESS,
					n = window.localStorage,
					p = j(r),
					l = t && t.expires ? t.expires: 0;
					if (f(l)) {
						l = l.getTime()
					} else {
						if (l > 0) {
							l = new Date().getTime() + (l - 0)
						}
					}
					try {
						n.setItem(p, l + "|" + q)
					} catch(o) {
						m = g.OVERFLOW
					}
					s && s.call(this, m, q)
				},
				get: function(n) {
					var l = g.SUCCESS,
					s = window.localStorage,
					r = j(n),
					q = null,
					m,
					p;
					try {
						q = s.getItem(r)
					} catch(o) {
						return {
							status: g.FAILURE,
							value: null
						}
					}
					if (q) {
						m = q.indexOf("|");
						p = parseInt(q.substring(0, m), 10);
						if (new Date(p).getTime() > new Date().getTime() || p == 0) {
							q = q.substring(m + 1, q.length)
						} else {
							q = null;
							l = g.FAILURE;
							this.del(n)
						}
					} else {
						l = g.FAILURE
					}
					return {
						status: l,
						value: q
					}
				},
				del: function(m, r) {
					var l = g.SUCCESS,
					q = window.localStorage,
					p = j(m),
					o = null;
					try {
						o = q.getItem(p)
					} catch(n) {
						l = g.FAILURE
					}
					if (o) {
						o = o.substring(o.indexOf("|") + 1, o.length);
						l = g[o ? "SUCCESS": "FAILURE"];
						o && q.removeItem(p)
					} else {
						l = g.FAILURE
					}
					r && r.call(this, l, o)
				}
			}
		}
		function d() {
			return {
				set: function(m, n, o, l) {
					S.cookie.set(j(m), n, l);
					o && o.call(me, g.SUCCESS, n)
				},
				get: function(l) {
					var m = S.cookie.get(j(l));
					return {
						status: g[m ? "SUCCESS": "FAILURE"],
						value: m
					}
				},
				del: function(l, o) {
					var n = j(l),
					m = S.cookie.get(n);
					S.cookie.remove(n);
					o && o.call(me, g[m ? "SUCCESS": "FAILURE"], m)
				}
			}
		}
		return {
			set: function(m, o, p, l) {
				var n = this; ! n._storage && (n._storage = a());
				n._storage.set.apply(n._storage, arguments)
			},
			get: function(l) {
				var m = this; ! m._storage && (m._storage = a());
				return m._storage.get(l)
			},
			remove: function(l, n) {
				var m = this; ! m._storage && (m._storage = a());
				m._storage.del.apply(m._storage, arguments)
			}
		}
	})()
});
$.extend({
	ls: $.localstorage
});
$.extend({
	Bind: function(a, b) {
		var c = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
		return function() {
			var e = $.isString(b) ? a[b] : b,
			d = (c) ? c.concat([].slice.call(arguments, 0)) : arguments;
			return e.apply(a || e, d)
		}
	}
});
$.easing.jswing = $.easing.swing;
$.extend($.easing, {
	def: "easeOutQuad",
	swing: function(e, f, a, j, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, j, g)
	},
	easeInQuad: function(e, f, a, j, g) {
		return j * (f /= g) * f + a
	},
	easeOutQuad: function(e, f, a, j, g) {
		return - j * (f /= g) * (f - 2) + a
	},
	easeInOutQuad: function(e, f, a, j, g) {
		if ((f /= g / 2) < 1) {
			return j / 2 * f * f + a
		}
		return - j / 2 * ((--f) * (f - 2) - 1) + a
	},
	easeInCubic: function(e, f, a, j, g) {
		return j * (f /= g) * f * f + a
	},
	easeOutCubic: function(e, f, a, j, g) {
		return j * ((f = f / g - 1) * f * f + 1) + a
	},
	easeInOutCubic: function(e, f, a, j, g) {
		if ((f /= g / 2) < 1) {
			return j / 2 * f * f * f + a
		}
		return j / 2 * ((f -= 2) * f * f + 2) + a
	},
	easeInQuart: function(e, f, a, j, g) {
		return j * (f /= g) * f * f * f + a
	},
	easeOutQuart: function(e, f, a, j, g) {
		return - j * ((f = f / g - 1) * f * f * f - 1) + a
	},
	easeInOutQuart: function(e, f, a, j, g) {
		if ((f /= g / 2) < 1) {
			return j / 2 * f * f * f * f + a
		}
		return - j / 2 * ((f -= 2) * f * f * f - 2) + a
	},
	easeInQuint: function(e, f, a, j, g) {
		return j * (f /= g) * f * f * f * f + a
	},
	easeOutQuint: function(e, f, a, j, g) {
		return j * ((f = f / g - 1) * f * f * f * f + 1) + a
	},
	easeInOutQuint: function(e, f, a, j, g) {
		if ((f /= g / 2) < 1) {
			return j / 2 * f * f * f * f * f + a
		}
		return j / 2 * ((f -= 2) * f * f * f * f + 2) + a
	},
	easeInSine: function(e, f, a, j, g) {
		return - j * Math.cos(f / g * (Math.PI / 2)) + j + a
	},
	easeOutSine: function(e, f, a, j, g) {
		return j * Math.sin(f / g * (Math.PI / 2)) + a
	},
	easeInOutSine: function(e, f, a, j, g) {
		return - j / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	},
	easeInExpo: function(e, f, a, j, g) {
		return (f == 0) ? a: j * Math.pow(2, 10 * (f / g - 1)) + a
	},
	easeOutExpo: function(e, f, a, j, g) {
		return (f == g) ? a + j: j * ( - Math.pow(2, -10 * f / g) + 1) + a
	},
	easeInOutExpo: function(e, f, a, j, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + j
		}
		if ((f /= g / 2) < 1) {
			return j / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return j / 2 * ( - Math.pow(2, -10 * --f) + 2) + a
	},
	easeInCirc: function(e, f, a, j, g) {
		return - j * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	},
	easeOutCirc: function(e, f, a, j, g) {
		return j * Math.sqrt(1 - (f = f / g - 1) * f) + a
	},
	easeInOutCirc: function(e, f, a, j, g) {
		if ((f /= g / 2) < 1) {
			return - j / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return j / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	},
	easeInElastic: function(f, j, e, n, m) {
		var k = 1.70158;
		var l = 0;
		var g = n;
		if (j == 0) {
			return e
		}
		if ((j /= m) == 1) {
			return e + n
		}
		if (!l) {
			l = m * 0.3
		}
		if (g < Math.abs(n)) {
			g = n;
			var k = l / 4
		} else {
			var k = l / (2 * Math.PI) * Math.asin(n / g)
		}
		return - (g * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * m - k) * (2 * Math.PI) / l)) + e
	},
	easeOutElastic: function(f, j, e, n, m) {
		var k = 1.70158;
		var l = 0;
		var g = n;
		if (j == 0) {
			return e
		}
		if ((j /= m) == 1) {
			return e + n
		}
		if (!l) {
			l = m * 0.3
		}
		if (g < Math.abs(n)) {
			g = n;
			var k = l / 4
		} else {
			var k = l / (2 * Math.PI) * Math.asin(n / g)
		}
		return g * Math.pow(2, -10 * j) * Math.sin((j * m - k) * (2 * Math.PI) / l) + n + e
	},
	easeInOutElastic: function(f, j, e, n, m) {
		var k = 1.70158;
		var l = 0;
		var g = n;
		if (j == 0) {
			return e
		}
		if ((j /= m / 2) == 2) {
			return e + n
		}
		if (!l) {
			l = m * (0.3 * 1.5)
		}
		if (g < Math.abs(n)) {
			g = n;
			var k = l / 4
		} else {
			var k = l / (2 * Math.PI) * Math.asin(n / g)
		}
		if (j < 1) {
			return - 0.5 * (g * Math.pow(2, 10 * (j -= 1)) * Math.sin((j * m - k) * (2 * Math.PI) / l)) + e
		}
		return g * Math.pow(2, -10 * (j -= 1)) * Math.sin((j * m - k) * (2 * Math.PI) / l) * 0.5 + n + e
	},
	easeInBack: function(e, f, a, k, j, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return k * (f /= j) * f * ((g + 1) * f - g) + a
	},
	easeOutBack: function(e, f, a, k, j, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return k * ((f = f / j - 1) * f * ((g + 1) * f + g) + 1) + a
	},
	easeInOutBack: function(e, f, a, k, j, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= j / 2) < 1) {
			return k / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return k / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	},
	easeInBounce: function(e, f, a, j, g) {
		return j - jQuery.easing.easeOutBounce(e, g - f, 0, j, g) + a
	},
	easeOutBounce: function(e, f, a, j, g) {
		if ((f /= g) < (1 / 2.75)) {
			return j * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return j * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return j * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return j * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function(e, f, a, j, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, j, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, j, g) * 0.5 + j * 0.5 + a
	}
}); (function() {
	var c = ["mousewheel", "DOMMouseScroll"],
	k = ["mousewheel", "DOMMouseScroll"],
	g = Array.prototype.slice,
	j,
	b;
	if ($.event.fixHooks) {
		for (var d = c.length; d;) {
			$.event.fixHooks[c[--d]] = $.event.mouseHooks
		}
	}
	var e = $.event.special.mousewheel = {
		version: "3.1.9",
		setup: function() {
			if (this.addEventListener) {
				for (var m = k.length; m;) {
					this.addEventListener(k[--m], l, false)
				}
			} else {
				this.onmousewheel = l
			}
			$.data(this, "mousewheel-line-height", e.getLineHeight(this));
			$.data(this, "mousewheel-page-height", e.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener) {
				for (var m = k.length; m;) {
					this.removeEventListener(k[--m], l, false)
				}
			} else {
				this.onmousewheel = null
			}
		},
		getLineHeight: function(m) {
			return parseInt($(m)["offsetParent" in $.fn ? "offsetParent": "parent"]().css("fontSize"), 10)
		},
		getPageHeight: function(m) {
			return $(m).height()
		},
		settings: {
			adjustOldDeltas: true
		}
	};
	$.fn.extend({
		mousewheel: function(m) {
			return m ? this.bind("mousewheel", m) : this.trigger("mousewheel")
		},
		unmousewheel: function(m) {
			return this.unbind("mousewheel", m)
		}
	});
	function l(m) {
		var o = m || window.event,
		s = g.call(arguments, 1),
		u = 0,
		q = 0,
		p = 0,
		r = 0;
		m = $.event.fix(o);
		m.type = "mousewheel";
		if ("detail" in o) {
			p = o.detail * -1
		}
		if ("wheelDelta" in o) {
			p = o.wheelDelta
		}
		if ("wheelDeltaY" in o) {
			p = o.wheelDeltaY
		}
		if ("wheelDeltaX" in o) {
			q = o.wheelDeltaX * -1
		}
		if ("axis" in o && o.axis === o.HORIZONTAL_AXIS) {
			q = p * -1;
			p = 0
		}
		u = p === 0 ? q: p;
		if ("deltaY" in o) {
			p = o.deltaY * -1;
			u = p
		}
		if ("deltaX" in o) {
			q = o.deltaX;
			if (p === 0) {
				u = q * -1
			}
		}
		if (p === 0 && q === 0) {
			return
		}
		if (o.deltaMode === 1) {
			var t = $.data(this, "mousewheel-line-height");
			u *= t;
			p *= t;
			q *= t
		} else {
			if (o.deltaMode === 2) {
				var n = $.data(this, "mousewheel-page-height");
				u *= n;
				p *= n;
				q *= n
			}
		}
		r = Math.max(Math.abs(p), Math.abs(q));
		if (!b || r < b) {
			b = r;
			if (a(o, r)) {
				b /= 40
			}
		}
		if (a(o, r)) {
			u /= 40;
			q /= 40;
			p /= 40
		}
		u = Math[u >= 1 ? "floor": "ceil"](u / b);
		q = Math[q >= 1 ? "floor": "ceil"](q / b);
		p = Math[p >= 1 ? "floor": "ceil"](p / b);
		m.deltaX = q;
		m.deltaY = p;
		m.deltaFactor = b;
		m.deltaMode = 0;
		s.unshift(m, u, q, p);
		if (j) {
			clearTimeout(j)
		}
		j = setTimeout(f, 200);
		return ($.event.dispatch || $.event.handle).apply(this, s)
	}
	function f() {
		b = null
	}
	function a(n, m) {
		return e.settings.adjustOldDeltas && n.type === "mousewheel" && m % 120 === 0
	}
})();
$.extend({
	cookie: {
		_isValidKey: function(a) {
			return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a)
		},
		getRaw: function(b) {
			if (this._isValidKey(b)) {
				var c = new RegExp("(^| )" + b + "=([^;]*)(;|\x24)"),
				a = c.exec(document.cookie);
				if (a) {
					return a[2] || null
				}
			}
			return null
		},
		get: function(a) {
			var b = this.getRaw(a);
			if ("string" == typeof b) {
				b = decodeURIComponent(b);
				return b
			}
			return null
		},
		setRaw: function(c, d, b) {
			if (!this._isValidKey(c)) {
				return
			}
			b = b || {};
			var a = b.expires;
			if ("number" == typeof b.expires) {
				a = new Date();
				a.setTime(a.getTime() + b.expires)
			}
			document.cookie = c + "=" + d + (b.path ? "; path=" + b.path: "") + (a ? "; expires=" + a.toGMTString() : "") + (b.domain ? "; domain=" + b.domain: "") + (b.secure ? "; secure": "")
		},
		remove: function(b, a) {
			a = a || {};
			a.expires = new Date(0);
			this.setRaw(b, "", a)
		},
		set: function(b, c, a) {
			this.setRaw(b, encodeURIComponent(c), a)
		}
	}
}); (function(m, e) {
	function c(s, r) {
		if (s instanceof Array) {
			for (var q = 0,
			p = s.length; q < p; q++) {
				if (r.call(s[q], s[q], q) === false) {
					return
				}
			}
		} else {
			for (var q in s) {
				if (s.hasOwnProperty(q)) {
					if (r.call(s[q], s[q], q) === false) {
						return
					}
				}
			}
		}
	}
	m.each = c;
	function b(q, p) {
		this.svnMod = "";
		this.name = null;
		this.path = q;
		this.fn = null;
		this.exports = {};
		this._loaded = false;
		this._requiredStack = [];
		this._readyStack = [];
		b.cache[this.path] = this;
		if (p) {
			if (p.charAt(0) !== ".") {
				var o = p.split(":");
				if (o.length > 1) {
					this.svnMod = o[0];
					this.name = o[1]
				} else {
					this.name = p
				}
			}
		}
		if (!this.svnMod) {
			this.svnMod = this.path.split("/js/")[0].substr(1)
		}
		this.type = "js";
		this.getKey = function() {
			return this.svnMod + ":" + this.name
		};
		this._info = {}
	}
	b.currentPath = "";
	b.loadedPaths = {};
	b.loadingPaths = {};
	b.cache = {};
	b.paths = {};
	b.handlers = [];
	b.moduleFileMap = {};
	b.requiredPaths = {};
	b.lazyLoadPaths = {};
	b.services = {};
	b.isPathsLoaded = function(p) {
		var o = true;
		c(p,
		function(q) {
			if (! (q in b.loadedPaths)) {
				return o = false
			}
		});
		return o
	};
	b.require = function(r, q) {
		if (r.search(":") < 0) {
			if (!q) {
				q = "superman";
				if (b.currentPath) {
					q = b.currentPath.split("/js/")[0].substr(1)
				}
			}
			r = q + ":" + r
		}
		var s = b.get(r, b.currentPath);
		if (s.type == "css") {
			return
		}
		if (s) {
			if (!s._inited) {
				s._inited = true;
				var p, o = s.svnMod;
				if (p = s.fn.call(null,
				function(t) {
					return b.require(t, o)
				},
				s.exports, new j(s.name, o))) {
					s.exports = p
				}
			}
			return s.exports
		} else {
			throw new Error('Module "' + r + '" not found!')
		}
	};
	b.baseUrl = e ? (e[e.length - 1] == "/" ? e: (e + "/")) : "/";
	b.getBasePath = function(o) {
		var q, p;
		if ((p = o.indexOf("/")) !== -1) {
			q = o.slice(0, p)
		}
		if (q && (q in b.paths)) {
			return b.paths[q]
		}
		return b.baseUrl
	};
	b.getJsPath = function(o, y) {
		if (o.charAt(0) === ".") {
			y = y.replace(/\/[^\/]+\/[^\/]+$/, "");
			if (o.search("./") === 0) {
				o = o.substr(2)
			}
			var t = 0;
			o = o.replace(/^(\.\.\/)+/g,
			function(A) {
				t = A.length / 3;
				return ""
			});
			while (t > 0) {
				y = y.substr(0, y.lastIndexOf("/"));
				t--
			}
			return y + "/" + o + "/" + o.substr(o.lastIndexOf("/") + 1) + ".js"
		} else {
			var p, v, r, q, s, z;
			if (o.search(":") >= 0) {
				var u = o.split(":");
				p = u[0];
				o = u[1]
			} else {
				if (y) {
					p = y.split("/")[1]
				}
			}
			p = p || "superman";
			var x = /\.css(?:\?|$)/i.test(o);
			if (x) {
				if (b.moduleFileMap[p][o]) {
					m._useConfig && (o = b.moduleFileMap[p][o])
				} else { ! m._useConfig && alert(o + "娌℃湁閰嶇疆鍦╟onfig.js涓�")
				}
			}
			var o = s = o;
			var w = b.getBasePath(o);
			if ((r = o.indexOf("/")) !== -1) {
				v = o.slice(0, r);
				q = o.lastIndexOf("/");
				s = o.slice(q + 1)
			}
			if (v && (v in b.paths)) {
				o = o.slice(r + 1)
			}
			z = w + p + "/js/" + o + ".js";
			return z
		}
	};
	b.get = function(o, q) {
		var p = b.getJsPath(o, q);
		if (b.cache[p]) {
			return b.cache[p]
		}
		return new b(p, o)
	};
	b.prototype = {
		load: function() {
			b.loadingPaths[this.path] = true;
			var p = this.svnMod || "superman",
			r = s_domain.staticUrl + "static/" + p + "/";
			var t = this;
			var o = /\.css(?:\?|$)/i.test(this.name);
			this.type = o ? "css": "js";
			var s = "/" + this.type + "/" + b.moduleFileMap[p][this.name];
			if (m._useConfig && b.moduleFileMap[p][this.name]) {
				r += this.type + "/" + b.moduleFileMap[p][this.name]
			} else {
				r += this.type + "/" + this.name + (o ? "": ".js")
			}
			if (($.inArray(s, m._firstScreenCSS) >= 0) || (m._useConfig && $.inArray(s, m._firstScreenJS) >= 0)) {
				if (o) {
					setTimeout(function() {
						t._loaded = true;
						t.ready()
					},
					1)
				} else {
					t._loaded = true;
					t.ready()
				}
			} else {
				var q = new Date().getTime();
				n.create({
					src: r,
					type: this.type,
					loaded: function() {
						t._info.loadedTime = new Date().getTime() - q;
						if (t.type == "css") {
							t._loaded = true;
							t.ready()
						}
					}
				})
			}
		},
		lazyLoad: function() {
			var o = this.name;
			if (b.lazyLoadPaths[this.getKey()]) {
				this.define();
				delete b.lazyLoadPaths[this.getKey()]
			} else {
				if (this.exist()) {
					return
				}
				b.requiredPaths[this.getKey()] = true;
				this.load()
			}
		},
		ready: function(r, s) {
			var q = s ? this._requiredStack: this._readyStack;
			if (r) {
				if (this._loaded) {
					r()
				} else {
					q.push(r)
				}
			} else {
				b.loadedPaths[this.path] = true;
				delete b.loadingPaths[this.path];
				this._loaded = true;
				b.currentPath = this.path;
				if (this._readyStack && this._readyStack.length > 0) {
					this._inited = true;
					var p, o = this.svnMod;
					if (p = this.fn.call(null,
					function(t) {
						return b.require(t, o)
					},
					this.exports, new j(this.name, o))) {
						this.exports = p
					}
					c(this._readyStack,
					function(t) {
						t()
					});
					delete this._readyStack
				}
				if (this._requiredStack && this._requiredStack.length > 0) {
					c(this._requiredStack,
					function(t) {
						t()
					});
					delete this._requiredStack
				}
			}
		},
		define: function() {
			var r = this,
			p = this.deps,
			o = this.path,
			q = [];
			if (!p) {
				p = this.getDependents()
			}
			if (p.length) {
				c(p,
				function(s) {
					q.push(b.getJsPath(s, r.path))
				});
				c(p,
				function(t) {
					var s = b.get(t, r.path);
					s.ready(function() {
						if (b.isPathsLoaded(q)) {
							r.ready()
						}
					},
					true);
					s.lazyLoad()
				})
			} else {
				this.ready()
			}
		},
		exist: function() {
			var o = this.path;
			return (o in b.loadedPaths || o in b.loadingPaths)
		},
		getDependents: function() {
			var t = this;
			var s = this.fn.toString();
			var p = s.match(/function\s*\(([^,]*),/i);
			var o = new RegExp("[^.]\\b" + p[1] + "\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)", "g");
			var r = s.match(o);
			var q = [];
			if (r) {
				c(r,
				function(v, u) {
					q[u] = v.substr(p[1].length + 3).slice(0, -2)
				})
			}
			return q
		}
	};
	var n = {
		create: function(o) {
			var p = o.src;
			if (p in this._paths) {
				return
			}
			this._paths[p] = true;
			c(this._rules,
			function(q) {
				p = q.call(null, p)
			});
			l(p, o.type, o.loaded)
		},
		_paths: {},
		_rules: [],
		addPathRule: function(o) {
			this._rules.push(o)
		}
	};
	function k(r, p) {
		var o = (p == "css");
		var q = document.createElement(o ? "link": "script");
		return q
	}
	function l(t, q, v, s) {
		var r = k(t, q);
		if (r.nodeName === "SCRIPT") {
			d(r, o)
		} else {
			g(r, o)
		}
		var u = setTimeout(function() {
			throw new Error("load " + q + " timeout : " + t); ! s && l(t + "?v=" + (new Date()).valueOf(), q, o, true)
		},
		m._loadScriptTimeout || 10000);
		function o() {
			if (!o.isCalled) {
				o.isCalled = true;
				clearTimeout(u);
				v && v()
			}
		}
		var p = document.getElementsByTagName("head")[0];
		if (q == "css") {
			r.rel = "stylesheet";
			r.href = t;
			p.appendChild(r)
		} else {
			r.type = "text/javascript";
			r.charset = "utf-8";
			r.src = t;
			p.insertBefore(r, p.firstChild)
		}
	}
	function d(o, p) {
		o.onload = o.onerror = o.onreadystatechange = function() {
			if (/loaded|complete|undefined/.test(o.readyState)) {
				o.onload = o.onerror = o.onreadystatechange = null;
				if (o.parentNode) {
					o.parentNode.removeChild(o);
					try {
						if (o.clearAttributes) {
							o.clearAttributes()
						} else {
							for (var r in o) {
								delete o[r]
							}
						}
					} catch(q) {}
				}
				o = undefined;
				p && p()
			}
		}
	}
	function g(o, p) {
		if (o.attachEvent) {
			o.attachEvent("onload", p)
		} else {
			setTimeout(function() {
				f(o, p)
			},
			0)
		}
	}
	function f(s, u) {
		if (u && u.isCalled) {
			return
		}
		var o;
		var r = navigator.userAgent;
		var t = ~r.indexOf("AppleWebKit");
		var p = ~r.indexOf("Opera");
		if (t || p) {
			if (s.sheet) {
				o = true
			}
		} else {
			if (s.sheet) {
				try {
					if (s.sheet.cssRules) {
						o = true
					}
				} catch(q) {
					if (q.name === "SecurityError" || q.name === "NS_ERROR_DOM_SECURITY_ERR") {
						o = true
					}
				}
			}
		}
		setTimeout(function() {
			if (o) {
				u && u()
			} else {
				f(s, u)
			}
		},
		1)
	}
	m.version = "1.0";
	m.use = function(r, q) {
		if (typeof r === "string") {
			r = [r]
		}
		var p = [];
		var o = [];
		c(r,
		function(s, t) {
			o[t] = false
		});
		c(r,
		function(t, v) {
			var u = b.get(t),
			s = u._loaded;
			u.ready(function() {
				var x = u.exports || {};
				x._INFO = u._info;
				if (x._INFO) {
					x._INFO.isNew = !s
				}
				p[v] = x;
				o[v] = true;
				var w = true;
				c(o,
				function(y) {
					if (y === false) {
						return w = false
					}
				});
				if (q && w) {
					q.apply(null, p)
				}
			});
			u.lazyLoad()
		})
	};
	m.module = function(o, q, r) {
		var p = b.get(o);
		p.fn = q;
		p.deps = r;
		if (b.requiredPaths[p.getKey()]) {
			p.define()
		} else {
			b.lazyLoadPaths[p.getKey()] = true
		}
	};
	m.pathRule = function(o) {
		n.addPathRule(o)
	};
	m._addPath = function(o, p) {
		if (p.slice( - 1) !== "/") {
			p += "/"
		}
		if (o in b.paths) {
			throw new Error(o + " has already in Module.paths")
		} else {
			b.paths[o] = p
		}
	};
	var a = "superman";
	m._setMod = function(o) {
		a = o || "superman"
	};
	m._fileMap = function(q, p) {
		if (typeof q === "object") {
			c(q,
			function(s, t) {
				m._fileMap(t, s)
			})
		} else {
			var o = a;
			if (typeof p === "string") {
				p = [p]
			}
			q = q.indexOf("js/") == 1 ? q.substr(4) : q;
			q = q.indexOf("css/") == 1 ? q.substr(5) : q;
			var r = b.moduleFileMap[o];
			if (!r) {
				r = {}
			}
			c(p,
			function(s) {
				if (!r[s]) {
					r[s] = q
				}
			});
			b.moduleFileMap[o] = r
		}
	};
	m._eventMap = {};
	m.call = function(r, s, t) {
		var p = [];
		for (var q = 2,
		o = arguments.length; q < o; q++) {
			p.push(arguments[q])
		}
		m.use(r,
		function(u) {
			var x = s.split(".");
			for (var w = 0,
			v = x.length; w < v; w++) {
				u = u[x[w]]
			}
			if (u) {
				u.apply(this, p)
			}
		})
	};
	m._setContext = function(o) {
		if (typeof o === "object") {
			c(o,
			function(q, p) {
				j.prototype[p] = b.require(q)
			})
		}
	};
	m._setContextMethod = function(o, p) {
		j.prototype[o] = p
	};
	var j = function(p, o) {
		this.modName = p;
		this.svnMod = o
	};
	j.prototype = {
		domain: s_domain,
		session: s_session,
		use: function(q, p) {
			if (typeof q === "string") {
				q = [q]
			}
			for (var o = q.length - 1; o >= 0; o--) {
				q[o] = this.svnMod + ":" + q[o]
			}
			m.use(q, p)
		}
	};
	m._Context = j;
	m.addLog = function(p, o) {
		m.use("superman:lib/log",
		function(q) {
			q.defaultLog(p, o)
		})
	};
	m.fire = function(o, q, p) {
		m.use("superman:lib/mod_evt",
		function(r) {
			r.fire(o, q, p)
		})
	};
	m._defService = function(p, o) {
		if (p) {
			var q = b.services[p];
			q = q || {};
			c(o,
			function(s, r) {
				q[r] = s
			});
			b.services[p] = q
		}
	};
	m.getService = function(o, r, p) {
		var s = b.services[o];
		if (s) {
			var q = s[r];
			if (q) {
				m.use(o + ":" + q, p)
			} else {
				throw new Error(o + " mod didn't provide service " + r)
			}
		} else {
			throw new Error(o + " mod didn't define any services")
		}
	}
})((function() {
	return window.F = {}
})());
F.module("superman:lib/sbase",
function(c, b, a) {
	var d = b
});
F.use("superman:lib/sbase",
function(b) {
	b.BaseClass = function() {
		var c = this,
		d = {};
		c.on = function(f, g) {
			var e = d[f];
			if (!e) {
				e = d[f] = []
			}
			e.push(g)
		};
		c.un = function(f, g) {
			if (!f) {
				d = {};
				return
			}
			var e = d[f];
			if (e) {
				if (g) {
					$.each(e,
					function(j, k) {
						if (k == g) {
							e.splice(j, 1);
							return false
						}
					})
				} else {
					d[f] = []
				}
			}
		};
		c.fire = function(f, g) {
			var e = d[f];
			if (e) {
				g = g || {};
				$.each(e,
				function(j, k) {
					g._result = k.call(c, $.extend({
						_ctx: {
							src: c
						}
					},
					g))
				})
			}
		}
	};
	var a = {};
	a.create = function(c, e) {
		e = e || b.BaseClass;
		return function d() {
			e.apply(this, arguments);
			var f = $.extend({},
			this);
			c.apply(this, arguments);
			this._super = f
		}
	};
	b.Class = a
});
F.module("lib/mod_evt",
function(f, e, b) {
	var d = {};
	var g = function(y, s, l) {
		var p = y.split("/"),
		v = p[0],
		n = p[1],
		x = v + "-" + s,
		m = {
			handlerCount: 0,
			returnValue: true
		};
		if (d[x]) {
			l = l || {};
			var w = d[x];
			for (var q = 0,
			u = w.length; q < u; q++) {
				var r = w[q];
				if (n && r.submod && n != r.submod) {
					continue
				}
				var z = {
					_MOD: v,
					_EVENT_NAME: s,
					_SUBMOD: n || ""
				};
				for (var o in l) {
					z[o] = l[o]
				}
				var t = r.hnd(z);
				if (t === false) {
					m.returnValue = false
				}
			}
			m.handlerCount = w.length
		}
		return m
	};
	var j = function(q, m, p) {
		var l = q.split("/"),
		o = l[0],
		k = l[1],
		n = o + "-" + m;
		h = {
			hnd: p,
			mod: o,
			submod: k
		};
		if (d[n]) {
			d[n].push(h)
		} else {
			d[n] = [h]
		}
	};
	var a = function(p, q, n) {
		var o = Object.prototype.toString.call(p);
		if (o == "[object String]") {
			var l = Object.prototype.toString.call(q);
			if (l == "[object String]") {
				j(p, q, n)
			} else {
				if (l == "[object Array]") {
					for (var m = 0,
					k = q.length; m < k; m++) {
						j(p, q[m], n)
					}
				}
			}
		} else {
			if (o == "[object Array]") {
				for (var m = 0,
				k = p.length; m < k; m++) {
					a(p[m], q, n)
				}
			}
		}
	};
	var c = function(u, o, v) {
		var l = u.split("/"),
		q = l[0],
		k = l[1],
		s = q + "-" + o;
		if (d[s]) {
			var r = d[s],
			t = [];
			for (var m = 0,
			p = r.length; m < p; m++) {
				var n = r[m];
				if (n.hnd != v) {
					t.push(n)
				}
			}
			d[s] = t
		}
	};
	e.fire = g;
	e.on = a;
	e.un = c;
	e.handlers = d
});
F.module("lib/log",
function(m, w, r) {
	var j = r.base;
	var g = {
		m: 1,
		mod: 1,
		submod: 1,
		evttype: 1,
		mouse: 1,
		initiator: 1,
		portrait: 1,
		glogid: 1,
		slogid: 1,
		type: 1,
		pid: 1,
		logactid: 1
	},
	a = {
		sys: 1,
		base: 1,
		page: 2,
		feed: 2,
		nav: 2,
		hot: 2,
		app: 2,
		msg: 2,
		res: 2
	},
	o = s_session.usertype,
	q = "supernewplus",
	n = s_session.portrait,
	e = s_session.logId || "0",
	l = 0,
	p = {};
	var s = function(z, y) {
		var x = {
			mod: z,
			submod: y || "",
			utype: o,
			superver: q,
			portrait: n,
			glogid: e,
			type: 2011,
			pid: 315,
			version: "PCHome",
			terminal: "PC",
			qid: s_session.seqId,
			sid: s_session.sid,
			super_frm: $.url.getQueryValue(location.href, "super_frm") || "",
			from_login: $.url.getQueryValue(location.href, "from_login") || "",
			from_reg: $.url.getQueryValue(location.href, "from_reg") || "",
			query: $("#kw").val(),
			curcard: s_session.curmod,
			curcardtab: $("#s_content_" + s_session.curmod + " .s-xmancard").attr("data-curtab") || "",
			_r: Math.random()
		};
		return x
	};
	var v = function() {
		return $.url.escapeSSL("http://dj" + (++l % 3) + ".baidu.com/v.gif?")
	};
	var d = function(x) {
		var z = "imglog__" + (new Date()).getTime();
		var y = window[z] = new Image();
		y.onload = (y.onerror = function() {
			window[z] = null
		});
		y.src = x;
		y = null
	};
	var f = function(y) {
		var D = s(y._MOD, y._SUBMOD);
		var x = y._MOD + "_" + y._EVENT_NAME;
		D.m = x;
		if (p[x]) {
			D.logactid = p[x]
		}
		for (var z in y) {
			if (z.indexOf("_") === 0) {
				continue
			}
			if (D[z]) {
				r.warn("logParamConflicted", z + " is conflicted in " + D.m);
				continue
			}
			var B = y[z];
			var A = typeof B;
			if (A === "string" || A === "number" || A === "boolean") {
				D[z] = B
			}
		}
		var C = v() + $.url.jsonToQuery(D);
		if (D.logactid === "0200100000" || (D.logactid === "0200100001" && D.clickType === "wordTopic")) {
			d("//www.baidu.com/home/hit/v.gif?" + $.url.jsonToQuery(D))
		}
		r.use("lib/mod_evt",
		function(E) {
			var G = E.fire("lib/log", "beforeSendLog", {
				modEvt: E,
				logParams: D
			});
			if (G.returnValue) {
				d(C)
			}
		})
	};
	var c = function(z, y) {
		var B = Object.prototype.toString.call(y);
		switch (B) {
		case "[object Array]":
			r.listen(z, y, f);
			break;
		case "[object Object]":
			var x = z.split("/")[0];
			for (var A in y) {
				if (y.hasOwnProperty(A)) {
					r.listen(z, A, f);
					p[x + "_" + A] = y[A]
				}
			}
			break
		}
	};
	var k = /home\/\w+\/(data|submit)\/\w+/;
	r.listen("lib/sbase", "ajaxSuccess",
	function(y) {
		if (!y.logId) {
			return
		}
		var z = y.url && y.url.match(k);
		var x = z && z[0] || "";
		var B = x.split("/");
		var A = B && B[1]
	});
	var t = function() {
		var A = s("superman:lib", "index");
		var y = {
			logactid: "1234567890",
			showTab: "10000",
			opType: "showpv"
		};
		var x = $.extend({},
		y, A);
		var z = v() + $.url.jsonToQuery(x);
		d(z)
	};
	var b = function() {
		var y = "imglogtc__" + (new Date()).getTime();
		var x = window[y] = new Image();
		x.onload = (x.onerror = function() {
			window[y] = null
		});
		x.src = "//m.baidu.com/tc?tcreq4log=1&ssid=" + window.s_session.portrait + "&from=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601&qid=" + window.s_session.logId + "pc&ct=10&cst=1&clk_from=exception&clk_info=pclog";
		x = null
	};
	function u(x) {
		return !! (Math.random() * 100 < x)
	}
	if ( !! window.s_session.sid.match("20277")) {
		t();
		b()
	}
	w.log = f;
	w.defaultLog = c
});
F.module("superman:common/user_attr",
function(b, d, m) {
	var j = {
		SUBMIT_STATUS: ["/page/submit/userattr", "/pcweb/submit/manusertips"]
	};
	var l = [(s_session.userProp || 0), (s_session.userTips || 0)],
	c = {};
	var g = function(n) {
		var o = l[0][n],
		p = l[1][n];
		if (o != undefined) {
			c.name = 0;
			return o
		} else {
			if (p != undefined) {
				c.name = 1;
				return p
			} else {
				return
			}
		}
	};
	var a = function(o, p) {
		var n = g(o);
		if (typeof n != "undefined" && (n != p)) {
			$.ajaxpost(s_domain.baseuri + j.SUBMIT_STATUS[c.name], {
				prop: o,
				value: f(p)
			},
			function(q) {
				if (q.errNo == 0) {
					l[c.name][o] = p;
					m.fire("setUserAttr", {
						attr: o,
						state: "setSucc"
					})
				} else {
					m.fire("setUserAttr", {
						attr: o,
						state: "setFail"
					})
				}
			})
		}
	};
	var e = function(u, o) {
		var n = u.length,
		q = [],
		s = [];
		for (var r = 0; r < n; r++) {
			var p = g(u[r]);
			if (typeof p != "undefined" && (p != o[r])) {
				q.push(u[r]);
				s.push(f(o[r]))
			}
		}
		var t = q.length;
		if (t > 0) {
			if (k) {
				$.ajaxpost(s_domain.baseuri + j.SUBMIT_STATUS[c.name], {
					prop: q.join(","),
					value: s.join(",")
				},
				function(x) {
					if (x.errNo == 0) {
						for (var w = 0; w < t; w++) {
							l[c.name][q[w]] = (s[w] == "on" ? true: false);
							m.fire("setUserAttr", {
								attr: q[w],
								state: "setSucc"
							})
						}
					} else {
						for (var v = 0; v < t; v++) {
							l[c.name][q[v]] = s[v];
							m.fire("setUserAttr", {
								attr: q[v],
								state: "setFail"
							})
						}
					}
				})
			} else {}
		}
	};
	var f = function(n) {
		if (n === true) {
			return "on"
		} else {
			if (n === false) {
				return "off"
			} else {
				return n
			}
		}
	};
	var k = function(o) {
		if (o && o.length > 0) {
			var q = o.length,
			p = c[_names[0]];
			for (var n = q - 1; n >= 0; n--) {
				if (c[_names[0]] != p) {
					return false
				}
			}
			return true
		}
	};
	d.getAttr = g;
	d.setAttr = a;
	d.setMultiAttr = e
});
F.module("superman:common/select",
function(c, b, a) {
	c("select.css");
	var d = a.base;
	var e = d.Class.create(function(m) {
		var A = this,
		o = new Date().getTime();
		A.value = null;
		A.words = null;
		A.selectId = "s_select_" + o;
		A.inputId = "s_select_input_" + o;
		A.inputMaskId = "s_select_input_mask_" + o;
		A.arrowId = "s_select_arrow_" + o;
		A.hiddenId = "s_select_hidden_" + o;
		A.layerId = "s_select_layer_" + o;
		A.selected = 0;
		A.isshow = false;
		A.maxCount = m.showCount || 10;
		A.optHeight = 20;
		A.mouseoverOpt = null;
		A.mouseoverIdx = null;
		A.timer = null;
		A.scroll = false;
		A.scrollTimer = null;
		var l = function(D, E, C, G) {
			if (G != undefined) {
				var B = A.layer.find(".s-select-layer-option")[G];
				if (B) {
					$(B).val(D).html(E);
					if (C) {
						B.className = "s-select-layer-option current";
						f(D, E, G)
					} else {
						B.className = "s-select-layer-option"
					}
				}
			}
		};
		var g = function(E, G, D, H) {
			if (H != undefined) {
				var B = A.layer.find(".s-select-layer-option"),
				C = B[H];
				if (C) {
					$(C).before('<div value="' + E + '" class="s-select-layer-option' + (D ? " current": "") + '">' + G + "</div>")
				} else {
					if (B.length) {
						$(B.last()).after('<div value="' + E + '" class="s-select-layer-option' + (D ? " current": "") + '">' + G + "</div>")
					} else {
						A.layer.prepend('<div value="' + E + '" class="s-select-layer-option' + (D ? " current": "") + '">' + G + "</div>")
					}
				}
			} else {
				A.layer.append('<div value="' + E + '" class="s-select-layer-option' + (D ? " current": "") + '">' + G + "</div>")
			}
			if (D) {
				f(E, G, H);
				q()
			}
			r()
		};
		var q = function() {
			j(function(C, B) {
				if (B == A.selected) {
					$(C).addClass("current")
				} else {
					$(C).removeClass("current")
				}
			})
		};
		var f = function(C, D, B) {
			A.hidden.val(C);
			A.input.val(D);
			A.inputMask.html(D);
			A.selected = B;
			A.mouseoverIdx = B;
			A.fire("valueChange")
		};
		var y = function() {
			return A.hidden.val()
		};
		var k = function() {
			A.inputMask.bind("mousedown",
			function(B) {
				A.fire("clickSelect");
				A.input.focus();
				if (A.isshow) {
					w()
				} else {
					s()
				}
				B.preventDefault();
				B.stopPropagation()
			});
			A.inputMask.bind("click",
			function(B) {
				B.preventDefault();
				B.stopPropagation()
			});
			A.arrow.bind("mousedown",
			function(B) {
				A.fire("clickSelect");
				A.input.focus();
				if (A.isshow) {
					w()
				} else {
					s()
				}
				B.preventDefault();
				B.stopPropagation()
			});
			A.arrow.bind("click",
			function(B) {
				B.preventDefault();
				B.stopPropagation()
			})
		};
		var x = function() {
			var D = A.select.offset(),
			C = 0,
			B = 26;
			if ($.isIE == 8) {
				C = -1;
				B = 25
			} else {
				if ($.isIE == 7) {
					C = -1
				} else {
					if ($.isIE6) {
						C = -1;
						B = 25
					}
				}
			}
			A.layer.css({
				left: (D.left + C) + "px",
				top: (D.top + B) + "px"
			})
		};
		var s = function() {
			A.input.focus();
			if (A.isshow) {
				return
			}
			x();
			A.layer.addClass("show");
			r();
			q();
			A.isshow = true;
			p();
			t();
			A.fire("layerShow")
		};
		var r = function() {
			var B = A.layer.find(".s-select-layer-option");
			if (B.length > A.maxCount) {
				A.layer.css("height", A.optHeight * A.maxCount + "px")
			}
		};
		var w = function() {
			if (!A.isshow) {
				return
			}
			A.layer.removeClass("show");
			A.isshow = false;
			n();
			A.mouseoverOpt = null;
			A.fire("layerHide")
		};
		var t = function() {
			A.timer = setInterval(function() {
				x()
			},
			300);
			A.input.bind("keydown",
			function(C) {
				if (C.keyCode && A.isshow) {
					switch (C.keyCode) {
					case 38:
						u();
						C.preventDefault();
						C.stopPropagation();
						break;
					case 40:
						v();
						C.preventDefault();
						C.stopPropagation();
						break;
					case 13:
						z();
						w();
						C.preventDefault();
						C.stopPropagation();
						break
					}
				}
			});
			$(document.body).bind("click", w);
			var B = A.layer.find(".s-select-layer-option");
			A.layer.bind("mouseenter",
			function(C) {
				$(B[A.selected]).removeClass("current");
				C.preventDefault();
				C.stopPropagation()
			});
			A.layer.bind("mouseleave",
			function(C) {
				A.mouseoverOpt && A.mouseoverOpt[0] && A.mouseoverOpt.remove("current");
				C.preventDefault();
				C.stopPropagation()
			});
			$.each(B,
			function(C, E) {
				var D = $(E);
				D.bind("mousedown",
				function(G) {
					f(D.attr("value"), D.html(), C);
					w();
					G.preventDefault();
					G.stopPropagation()
				});
				D.bind("mouseover",
				function(G) {
					if (A.scroll) {
						return
					}
					j(function(H) {
						$(H).removeClass("current")
					});
					D.addClass("current");
					A.mouseoverOpt = D;
					A.mouseoverIdx = C;
					G.preventDefault();
					G.stopPropagation()
				});
				D.bind("mouseout",
				function(G) {
					if (A.scroll) {
						return
					}
					D.removeClass("current");
					A.mouseoverIdx = C;
					G.preventDefault();
					G.stopPropagation()
				})
			})
		};
		var z = function() {
			var B = A.layer.find(".s-select-layer-option");
			for (i = 0, len = B.length; i < len; i++) {
				if ($(B[i]).hasClass("current")) {
					f($(B[i]).attr("value"), $(B[i]).html(), i);
					break
				}
			}
		};
		var j = function(C) {
			var B = A.layer.find(".s-select-layer-option");
			$.each(B,
			function(D, E) {
				C && C($(E), D)
			})
		};
		var n = function() {
			A.timer && clearInterval(A.timer);
			A.timer = null;
			A.input.unbind("keydown");
			A.input.unbind("blur");
			j(function(B) {
				$(B).unbind("mousedown");
				$(B).unbind("mouseover");
				$(B).unbind("mouseout")
			});
			A.layer.unbind("mouseenter");
			A.layer.unbind("mouseleave")
		};
		var u = function() {
			var B = A.mouseoverIdx || A.selected;
			if (B && B > 0) {
				var C = A.layer.find(".s-select-layer-option");
				$(C[B]).removeClass("current");
				$(C[B - 1]).addClass("current");
				f($(C[B - 1]).attr("value"), $(C[B - 1]).html(), B - 1);
				p()
			}
		};
		var v = function() {
			var C = A.layer.find(".s-select-layer-option");
			var B = A.mouseoverIdx || A.selected;
			if (B < C.length - 1) {
				$(C[B]).removeClass("current");
				$(C[B + 1]).addClass("current");
				f($(C[B + 1]).attr("value"), $(C[B + 1]).html(), B + 1);
				p()
			}
		};
		var p = function() {
			A.scroll = true;
			var B = A.selected + 1 - A.maxCount;
			if (B > 0) {
				A.layer.scrollTop(B * A.optHeight)
			} else {
				A.layer.scrollTop(0)
			}
			if (A.scrollTimer) {
				clearTimeout(A.scrollTimer);
				A.scrollTimer = null;
				A.scrollTimer = setTimeout(function() {
					A.scroll = false
				},
				500)
			} else {
				A.scrollTimer = setTimeout(function() {
					A.scroll = false
				},
				500)
			}
		};
		A.getResult = function() {
			return {
				value: A.hidden.val(),
				words: A.inputMask.html()
			}
		};
		A.hide = function() {
			A.select.hide();
			w()
		};
		A.show = function() {
			A.select.css("display", "inline-block")
		};
		A.addOption = g;
		A.setOption = l;
		A.getLayer = function() {
			return $("#" + A.layerId)
		};
		A.hideLayer = w; (function() {
			var B = ['<span id="' + A.selectId + '" class="s-select ' + m.customClass + '">', '<div id="' + A.inputMaskId + '" class="s-select-input-mask s-opacity-blank1 ' + m.customClass + '"></div><input type="input" class="s-select-input ' + m.customClass + '" value="' + A.words + '" id="' + A.inputId + '">', '<a class="s-select-arrow s-opacity-border3-left ' + m.customClass + '" id="' + A.arrowId + '" href="#" onclick="return false;" hidefocus></a></span>', '<input type="hidden" value="' + A.value + '" id="' + A.hiddenId + '">'].join("");
			$(m.dom)[m.type](B);
			$("#head").append('<div id="' + A.layerId + '" class="s-select-layer  s-isindex-wrap ' + m.customClass + '"></div>');
			A.select = $("#" + A.selectId);
			A.input = $("#" + A.inputId);
			A.inputMask = $("#" + A.inputMaskId);
			A.arrow = $("#" + A.arrowId);
			A.hidden = $("#" + A.hiddenId);
			A.layer = $("#" + A.layerId);
			$.each(m.options,
			function(C, D) {
				g(D.value, D.words, D.selected, C)
			});
			k()
		})()
	});
	b.Select = e
}); (function(f) {
	var e = {
		PROTOTYPE: "prototype",
		INSTANCE: "instance",
		SINGLETON: "singleton",
		STATICTYPE: "static"
	};
	var d = {};
	function g(k) {
		var j = this;
		j.opt = k || {};
		j.baseParams = j.opt.baseParams || {};
		j.config(k, true);
		if (k.autoBind) {
			j.bindLogHook()
		}
		b(j, d)
	}
	g.prototype = {
		config: function(k) {
			var j = this;
			b(j.opt, k);
			j.baseURL = j.opt.baseURL || "//hpd.baidu.com/v.gif";
			j.domHook = j.opt.domHook || "data-stats";
			j.mainDom = j.opt.mainDom;
			j.skipPrevent = !!j.opt.skipPrevent;
			j.logRegx = j.opt.logRegx || "(.*?):(.*?);";
			j.baseParams = b(j.baseParams, k.baseParams);
			return j
		},
		send: function(m, r, j) {
			var s = this;
			s.__sendPreHook && s.__sendPreHook(m);
			var k = "l" + Date.now();
			var p = window[k] = new Image();
			var n = "";
			var l = null;
			j = j || s.baseURL;
			p.onload = p.onerror = p.onabort = function() {
				window[k] = null;
				if (l) {
					clearTimeout(l);
					l = null;
					r && r();
					s.__sendAfrHook && s.__sendAfrHook(m, false)
				}
			};
			m = m || {};
			m.r = k;
			m._r = Math.random();
			var q = s.baseParams;
			m = b(b({},
			q), m);
			for (var o in m) {
				if (m.hasOwnProperty(o)) {
					n += "&" + o + "=" + encodeURIComponent(m[o])
				}
			}
			p.src = j + "?" + n.slice(1);
			if (typeof r === "function") {
				l = setTimeout(function() {
					l = null;
					r()
				},
				500)
			}
			s.__sendAfrHook && s.__sendAfrHook(m, true);
			return s
		},
		bindLogHook: function(j, l) {
			var k = this;
			j = j ? $(j) : $(k.mainDom);
			j && j.on("click", l || "[" + (k.domHook) + "]",
			function(m) {
				k.hookClick.call(k, this, m)
			})
		},
		hookClick: function(n, q) {
			var s = this;
			var m = n.getAttribute(s.domHook);
			var o = n.getAttribute("data-stopskip");
			var p = n.getAttribute("href");
			var r = null;
			var j = {};
			var k = new RegExp(s.logRegx, "g");
			var l = null;
			while ((l = k.exec(m))) {
				j[l[1]] = l[2]
			}
			if (n.tagName.toLowerCase() === "a" && p && o) {
				q.preventDefault();
				r = function() {
					f.location.href = p
				}
			}
			s.send(j, r)
		}
	};
	function b(l, k) {
		if (!k || !l) {
			return l
		}
		for (var j in k) {
			if (k.hasOwnProperty(j)) {
				l[j] = k[j]
			}
		}
		return l
	}
	var a = null;
	var c = {
		create: function(k, j) {
			return new g(k)
		},
		extend: function(k, j) {
			switch (j) {
			case e.PROTOTYPE:
				b(g.prototype, k);
				break;
			case e.STATICTYPE:
				b(g, k);
				break;
			case e.INSTANCE:
			case e.SINGLETON:
			default:
				b(d, k)
			}
		},
		get: function(j) {
			return a || (a = this.create(j))
		}
	};
	f.Thunder = c
})(this);