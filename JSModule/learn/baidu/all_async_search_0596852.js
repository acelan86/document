function addEV(t, e, n) {
	window.attachEvent ? t.attachEvent("on" + e, n) : window.addEventListener && t.addEventListener(e, n, !1)
}
function _aMC(t) {
	for (var e = t,
	n = -1; e = e.parentNode;) if (n = parseInt(e.getAttribute("id")), n > 0) return n
}
function al_c(t) {
	for (;
	"TABLE" != t.tagName;) t = t.parentNode;
	return t.getAttribute("id")
}
function al_c2(t, e) {
	for (; e--;) for (;
	"TABLE" != (t = t.parentNode).tagName;);
	return t.getAttribute("id")
}
function c(t) {
	var e = t.p1;
	if (! ("alop" != t.fm || "rsv_xpath" in t || e && "6677" == G(e).getAttribute("srcid"))) return ! 0; ! e || "p5" in t || (t.p5 = e);
	var n = window.document.location.href,
	o = "",
	i = "",
	s = "",
	r = window["BD_PS_C" + (new Date).getTime()] = new Image;
	for (v in t) {
		switch (v) {
		case "title":
			i = t[v].replace(/<[^<>]+>/g, ""),
			i && i.length > 100 && (i = i.substring(0, 100)),
			i = encodeURIComponent(i);
			break;
		case "mu":
		case "url":
			i = escape(t[v]);
			break;
		default:
			i = t[v]
		}
		o += "&" + v + "=" + i
	}
	if (! ("mu" in t)) try {
		"p2" in t && G(t.p1).getAttribute("mu") && "pl" != t.fm && (s = "&mu=" + escape(G(t.p1).getAttribute("mu")))
	} catch(a) {}
	if (window.bds && bds.comm) {
		var c = bds.comm.ubsurl + "?q=" + bds.comm.queryEnc + o + s + "&rsv_sid=" + bds.comm.sid + "&cid=" + bds.comm.cid + "&qid=" + bds.comm.queryId + "&t=" + (new Date).getTime();
		if (bds.comm.inter && (c = c + "&rsv_inter=" + bds.comm.inter), bds.comm.seinfo && bds.comm.seinfo.rsv_pstg && (c = c + "&rsv_pstg=" + bds.comm.seinfo.rsv_pstg), bds.comm.cftime && 0 != bds.comm.cftime && (c = c + "&rsv_cftime=" + bds.comm.cftime), c += bds.comm.resultPage ? "&rsv_iorr=1": "&rsv_iorr=0", bds.comm.tn && (c = c + "&rsv_tn=" + bds.comm.tn), bds.comm.indexSid && (c += "&rsv_isid=" + bds.comm.indexSid), bds.comm.lastVoiceQuery && (c += "&rsv_lavo=" + encodeURIComponent(bds.comm.lastVoiceQuery)), Cookie.get("ispeed") && (c += "&rsv_ispeed=" + Cookie.get("ispeed")), /ssl_sample/.test(location.href)) {
			var d = location.href.match(/ssl_sample=[^=&]+/i);
			c += "&rsv_" + d[0]
		}
		if (/ssl_s=/.test(location.href)) {
			var d = location.href.match(/ssl_s=[^=&]+/i);
			c += "&rsv_" + d[0]
		}
		c += "&rsv_ssl=" + ("https:" === location.protocol ? 1 : 0),
		c += "&path=" + encodeURIComponent(n),
		c += "&rsv_did=" + (bds.comm.did ? bds.comm.did: ""),
		r.src = c
	}
	return ! 0
}
function TagQ(t, e) {
	return e.getElementsByTagName(t)
}
function h(t) {
	t.style.behavior = "url(#default#homepage)",
	t.setHomePage(bds.comm.domain);
	var e = window["BD_PS_C" + (new Date).getTime()] = new Image;
	e.src = bds.comm.ubsurl + "?fm=hp&tn=" + bds.comm.tn + "&t=" + (new Date).getTime()
}
function setHeadUrl(t) {
	var e = G("kw").value;
	e = encodeURIComponent(e);
	var n = t.href;
	n = n.replace(new RegExp("(" + t.getAttribute("wdfield") + "=)[^&]*"), "$1" + e),
	t.href = n
}
function G(t) {
	return document.getElementById(t)
}
function ns_c_pj(t, e) {
	var n = encodeURIComponent(window.document.location.href),
	o = "",
	i = "",
	s = "",
	r = bds && bds.comm && bds.comm.did ? bds.comm.did: "";
	wd = bds.comm.queryEnc,
	nsclickDomain = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com",
	img = window["BD_PS_C" + (new Date).getTime()] = new Image,
	src = "";
	for (v in t) {
		switch (v) {
		case "title":
			i = encodeURIComponent(t[v].replace(/<[^<>]+>/g, ""));
			break;
		case "url":
			i = encodeURIComponent(t[v]);
			break;
		default:
			i = t[v]
		}
		o += v + "=" + i + "&"
	}
	if (s = "&mu=" + n, src = nsclickDomain + "/v.gif?pid=201&" + (e || "") + o + "path=" + n + "&wd=" + wd + "&rsv_sid=" + (bds.comm.ishome && bds.comm.indexSid ? bds.comm.indexSid: bds.comm.sid) + "&rsv_did=" + r + "&t=" + (new Date).getTime(), "undefined" != typeof Cookie && "undefined" != typeof Cookie.get) Cookie.get("H_PS_SKIN") && "0" != Cookie.get("H_PS_SKIN") && (src += "&rsv_skin=1");
	else {
		var a = "";
		try {
			a = parseInt(document.cookie.match(new RegExp("(^| )H_PS_SKIN=([^;]*)(;|$)"))[2])
		} catch(c) {}
		a && "0" != a && (src += "&rsv_skin=1")
	}
	return img.src = src,
	!0
}
function ns_c(t, e) {
	return e === !0 ? ns_c_pj(t, "pj=www&rsv_sample=1&") : ns_c_pj(t, "pj=www&")
}
function escapeHTML(t) {
	return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/"/g, "&#34;").replace(/'/g, "&#39;")
}
function initPreload(t) {
	function e() {
		Cookie.set("ISSW", "1", null, null, new Date((new Date).getTime() + 3e5))
	}
	function n(t, e) {
		e = e || 3,
		Cookie.set("ISWR", t, null, null, new Date((new Date).getTime() + 1e3 * e))
	}
	function o(t) {
		t && "string" == typeof t && (t = $.parseJSON(t)),
		t && t.length && $.each(t,
		function(t, e) {
			if (0 === e.indexOf(ne.protocol)) {
				var n = new Image;
				n.src = e
			}
		})
	}
	function i(t) {
		return $.trim(t).replace(/\s+/g, " ")
	}
	function s(t) {
		if ("string" == typeof t) {
			var e, n = 0;
			for (e = 0; e < t.length; e++) n += t.charCodeAt(e);
			return n
		}
		return 0
	}
	function r(t) {
		var e, n, o, i, s = {};
		t.indexOf("?") > -1 ? (o = t.split("?"), i = o[1]) : i = t,
		e = i.indexOf("&") > -1 ? i.split("&") : new Array(i);
		for (var r = 0; r < e.length; r++) try {
			e[r] = e[r].indexOf("=") > -1 ? e[r] : e[r] + "=",
			n = e[r].split("="),
			s[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " "))
		} catch(a) {}
		return s
	}
	function a(t) {
		function e(t) {
			if (document.all) $("style[data-for='result']").get(0).styleSheet.cssText += t;
			else {
				var e = document.createElement("style");
				e.type = "text/css",
				e.appendChild(document.createTextNode(t)),
				e.setAttribute("data-for", "result"),
				document.getElementsByTagName("HEAD")[0].appendChild(e)
			}
		}
		function n() {
			B.css({
				filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)",
				opacity: .95
			}),
			F || (e(".slowmsg{z-index:301;background-color:#fff;border:1px solid #f0f0f0;position:fixed;_position:absolute;top:144px;left:212px;height:95px;width:360px;box-shadow:0 0 5px rgba(0,0,0,0.05)}.slowmsg .ball{width:40px;margin:41px auto 0;position:relative;}.slowmsg .b{left:20px;position:absolute;width:10px;height:10px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;}"), F = $('<div class="slowmsg"><div class="ball"><div class="b"/><div class="b"/><div class="b"/></div></div>'), F.find(".b").each(function(t, e) {
				var n = [[0, 40], [20, 20], [40, 0]][t],
				o = ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"],
				i = 0;
				$(e).css({
					"background-color": o[t]
				}),
				function s() {
					return H ? ($(e).animate({
						left: n[i % 2]
					},
					{
						duration: 800,
						easing: "swing",
						progress: function(n, s) {
							s >= .5 && $(e).css({
								"background-color": o[(i + t) % 3]
							})
						},
						complete: function() {
							s()
						}
					}), void i++) : void setTimeout(s, 400)
				} ()
			})),
			F.appendTo(Ye),
			ns_c({
				pj_name: "loading_msg"
			})
		}
		function o() {
			var t, e = (new Date).getTime();
			Cookie.set("rsv_jmp_slow", e),
			Cookie.set("WWW_ST", e, null, null, new Date(e + 3e4)),
			t = ne.href + (ne.href.indexOf("?") > 0 ? "&": "?") + "rsv_jmp=slow",
			ne.replace(t)
		}
		if (!V) {
			var t = $.extend({
				top: 93,
				"z-index": 300
			},
			t),
			i = $(window).height();
			B || (B = $("<div id='_mask'/>")),
			B.css({
				filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
				opacity: .3,
				position: "absolute",
				background: "#fff",
				"z-index": t["z-index"],
				top: t.top + "px",
				left: "0"
			}),
			V = !0,
			B.width(Ye.width()),
			B.height(Math.max(i, Ye.height()) - t.top),
			B.appendTo(Ye),
			$(window).scrollTop(),
			H = setTimeout(n, 3e3),
			G = setTimeout(o, 7e3),
			Q = function() {
				H && (clearTimeout(H), H = setTimeout(n, 3e3)),
				G && (clearTimeout(G), G = setTimeout(o, 7e3))
			}
		}
	}
	function d() {
		B && V && (V = !1, B.remove(), F && F.remove(), H && (clearTimeout(H), H = !1), W && W.remove(), G && (clearTimeout(G), G = !1))
	}
	function l(t, e, n) {
		n || (n = 0);
		var o = t.length;
		for (0 > n && (n = o + n); o > n; n++) if (t[n] === e) return n;
		return - 1
	}
	function u(t, e, n) {
		var o = e.find("script:not([src])"),
		i = 0,
		s = $.globalEval;
		$.globalEval = function(t) {
			window.currentScriptElem = o[i],
			i++;
			try {
				s.apply($, arguments)
			} catch(e) {
				window.console && console.debug && (console.debug(t), console.debug(e))
			}
		},
		"insertBefore" == n ? e.insertBefore(t) : t.append(e),
		window.currentScriptElem = void 0,
		$.globalEval = s
	}
	function m(t) {
		try {
			t()
		} catch(e) {
			window.console && console.debug && console.debug(e),
			X(e.toString())
		}
	}
	function p(t, e) {
		function n(t) {
			if ("object" == typeof t) {
				var e = {};
				for (a in t) t.hasOwnProperty(a) && (e[a] = t[a])
			} else e = t;
			return e
		}
		if (!p.__init) {
			p.__init = !0;
			var o = ["wd", "pn", "nojc", "cl", "cq", "srcid", "gpc", "tfflag", "si", "sl_lang", "rsv_srlang", "rqlang"],
			i = ["wd", "cl", "ct", "tn", "rn", "ie", "f", "lm", "si", "gpc", "tfflag", "usm", "z", "ch", "sts", "vit", "dsp", "trh", "trb", "tre", "la", "lo", "st", "nojc", "haobd", "rtt", "bsst", "gvideo", "__eis", "__eist", "oq", "fenlei", "sid", "rsv_idx", "rsv_stat", "rsv_bp", "rqlang"],
			s = ["w", "word"];
			p.prototype.clone = function(t) {
				var e = new p(n(this.params));
				if ("object" == typeof t) for (var o in t) t.hasOwnProperty(o) && l(i, o) >= 0 && e.p(o, t[o]);
				return e
			},
			p.prototype.h = function(t) {
				this.header_params = this.header_params || {};
				for (var e in t) this.header_params[e] = t[e];
				return this
			},
			p.prototype.buildHeaders = function(t) {
				t && this.setHeader(t);
				var e = {};
				for (var n in this.header_params) if ("object" == typeof this.header_params[n]) {
					var o = [];
					for (var i in this.header_params[n]) {
						var s = this.header_params[n][i];
						s instanceof Array && (s = s.join("|")),
						o.push(i + "=" + s)
					}
					e[n] = o.join("&")
				} else e[n] = this.header_params[n];
				return e
			},
			p.prototype.buildSearchUrl = function(t) {
				return ne.protocol + "//" + ne.host + ne.pathname + ne.search + "#" + this.buildQueryString(t)
			},
			p.prototype.buildSyncSearchUrl = function(t) {
				return ne.protocol + "//" + ne.host + "/s?" + this.buildQueryString(t)
			},
			p.prototype.buildQueryString = function(t) {
				var e = n(this.params);
				if ("object" == typeof t) for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
				var i = "";
				e.wd = $.limitWd(e.wd);
				for (param in e) param && e.hasOwnProperty(param) && "" !== e[param] && (i += param + "=" + encodeURIComponent(e[param]).replace(/'/g, "%27") + "&");
				return i.substr(0, i.length - 1)
			},
			p.prototype.equals = function(t) {
				if (!t || !t.p) return ! 1;
				for (var e = 0; e < o.length; e++) {
					var n = o[e];
					if ("pn" == n) {
						var i = this.p(n) ? this.p(n) : "0",
						s = t.p(n) ? t.p(n) : "0";
						if (i != s) return ! 1
					} else if (this.p(n) != t.p(n)) return ! 1
				}
				return ! 0
			},
			p.prototype.p = function(t, e) {
				return l(s, t) >= 0 && (t = "wd"),
				void 0 === e ? this.params[t] : (this.params[t] = e, this)
			},
			p.prototype.hashCode = function() {
				var t = [];
				if (!this.p("wd")) return "";
				for (var e = 0; e < o.length; e++) {
					var n = o[e];
					t.push("pn" != n || this.p(n) ? this.p(n) : "0")
				}
				return t.join("	")
			},
			p.prototype.filterOtherParams = function() {
				for (var t in this.params) this.params.hasOwnProperty(t) && l(i, t) < 0 && delete this.params[t]
			},
			p.prototype.wdSameName = function() {
				var t;
				for (t = 0; t < s.length; t++) this.params && this.params[s[t]] && (this.params.wd = this.params[s[t]], delete this.params[s[t]])
			}
		}
		if (this.params = {},
		!e) {
			je = we.serializeArray();
			for (var r = 0; r < je.length; r++) this.p(je[r].name) || this.p(je[r].name, je[r].value)
		}
		if ("object" == typeof t) for (var a in t) t.hasOwnProperty(a) && this.p(a, t[a]);
		this.wdSameName()
	}
	function f(t) {
		function e(t) {
			"string" == typeof t && (_[t] = Date.now ? Date.now() : +new Date)
		}
		function n(t, e) {
			"string" == typeof t && (w[t] = e)
		}
		function o() {
			w.cus_net = _.net > _.st && _.net - _.st - w.cus_srv > 0 ? _.net - _.st - w.cus_srv: 1,
			w.cus_tti2 = _.dom > _.st ? _.dom - _.st: 1,
			w.cus_frdom = _.dom - _.pt,
			w.cus_fs = _.fs > _.st ? _.fs - _.st: w.cus_tti2,
			w.cus_frext = w.cus_fs - w.cus_tti2
		}
		function i(t) {
			var e = "";
			for (var n in t) n && t.hasOwnProperty(n) && "" !== t[n] && (e += "&" + n + "=" + encodeURIComponent(t[n]));
			return e
		}
		function s(t) {
			var t = [];
			for (var e in T) t.push(T[e]);
			var n = k = $.when.apply($, t);
			k.always(function() {
				n === k && m()
			})
		}
		function r() {
			var t = Array.apply(null, arguments);
			if (! (!t.length > 0)) for (var e = 0; e < t.length; e++) T[t[e]] = $.Deferred()
		}
		function a() {
			n("qid", t.qid),
			n("cus_q", t.real_wd || t.env.p("wd")),
			n("sid", bds.comm.sid),
			n("cus_newindex", bds.comm.newindex),
			n("supportis", bds.comm.supportis)
		}
		function c() {
			t = null,
			C = null
		}
		function d(t) {
			T[t].resolve(),
			"swap_end" == t && setTimeout(function() {
				d("swap_end_5s")
			},
			5e3)
		}
		function l() {
			r("swap_end", "swap_end_5s"),
			r("confirm"),
			s()
		}
		function u() {
			l(),
			_.st = 0,
			_.fs = 0,
			_.dom = 0
		}
		function m() {
			var t = Math.random(),
			e = /21870|21871|21662|21663|21213|21215|21216|21517|21518|21307|21306|21340|21339/,
			s = t > .51 && .52 > t;
			if (t > .51 && .52 > t || e.test(bds.comm.sid) && t > 0 && .2 > t || bds.comm.intrSid) {
				e.test(bds.comm.sid) && (s ? n("issam", 2) : n("issam", 1)),
				o(),
				h(C),
				g(C),
				n("srvInfo", f()),
				n("sysv", navigator.appMinorVersion),
				a(),
				x.fire();
				var r = "//www.baidu.com/nocache/fesplg/s.gif?log_type=sp",
				c = "";
				c += i(v) + i(w);
				var d = r + c,
				l = new Image,
				u = "_LOG_" + (new Date).getTime();
				l.onload = function() {
					delete window[u]
				},
				window[u] = l,
				l.src = d
			}
		}
		function p(t) {
			C = t,
			t.find("img").one("load",
			function() {
				var t = $(this).offset(),
				o = t.top,
				i = t.left,
				s = "";
				if (S > o && o > 0) {
					e("fs");
					var r = _.fs - _.dom;
					y.push(o + "_" + i + "_" + r),
					s = $(this).attr("data-src") || /^http/.test($(this).attr("src")) ? $(this).attr("data-src") || $(this).attr("src") : "base64",
					n("ic_lis", s)
				}
			})
		}
		function f() {
			var t, e, n = $.parseJSON(bds.comm.speedInfo),
			o = [];
			for (var i in n) {
				if (t = n[i], e = t.ModuleId + "_" + t.TimeCost + "_" + t.TimeSelf + "_" + t.Idc, t.hasOwnProperty("SubProcess")) for (var s in t.SubProcess) e += "," + t.SubProcess[s].ProcessId + "_" + t.SubProcess[s].TimeCost + "_" + t.SubProcess[s].isHitCache + "_" + t.SubProcess[s].Idc;
				o.push(e)
			}
			return encodeURIComponent(o.join("|"))
		}
		function h(t) {
			for (var e = 0,
			o = t.find("img"), i = t.find("#content_left").find("img"), s = 0, r = 0, a = 0; a < o.length; a++) r = o.eq(a).offset().top,
			S > r && r > 0 && e++;
			n("cus_ic", o.length),
			n("cus_extic", e),
			n("cus_extlic", s),
			n("cus_icl", i.length),
			n("cus_icr", t.find("#content_right").find("img").length),
			n("img_info", y.join(",")),
			n("psize", t.html().length)
		}
		function g(t) {
			var e = {},
			o = [],
			i = t.find("#content_left,#con-ar").children("*[tpl]"),
			s = "";
			if (i.length > 0) for (var r = 0; r < i.length; r++) s = i.eq(r).attr("tpl"),
			e.hasOwnProperty(s) || (e[s] = 1, o.push(s));
			o.length > 0 && n("tplp", o.join("|"))
		}
		function b(t) {
			x.add(t)
		}
		var v = {
			product_id: 45,
			page_id: 317,
			page_type: 0
		},
		w = {},
		_ = {
			st: 0,
			pt: 0,
			net: 0,
			dom: 0,
			fs: 0
		},
		y = [],
		x = $.Callbacks(),
		T = {},
		k = null,
		C = null,
		S = 600;
		return l(),
		{
			trigger: d,
			mark: e,
			setParam: n,
			onSendlog: b,
			bindImgLoad: p,
			destroy: c,
			init: u
		}
	}
	function h(t, e) {
		t && (e = $.extend(t.log, e))
	}
	function g() {
		if (bds.comm.seinfo) {
			bds.comm.seinfo.rsv_pre = encodeURIComponent(b()),
			bds.comm.seinfo.rsv_reh = reh_rec(),
			bds.comm.seinfo.rsv_scr = scr_rec();
			var t = null;
			if (bds && bds.comm && bds.comm.personalData) try {
				"string" == typeof bds.comm.personalData && (bds.comm.personalData = $.parseJSON(bds.comm.personalData)),
				t = bds.comm.personalData ? bds.comm.personalData.fullSkinName && bds.comm.personalData.fullSkinName.value: null
			} catch(e) {
				t = null
			}
			if (t && (bds.comm.seinfo.rsv_skin = t), bds.comm.seinfo.rsv_psid = $.getCookie("BIDUPSID"), bds.comm.seinfo.rsv_pstm = $.getCookie("PSTM"), bds.comm.seinfo.rsv_idc = function() {
				var t = bds.comm.speedInfo || [];
				try {
					t = $.parseJSON(t)
				} catch(e) {
					t = []
				}
				for (var n = 0,
				o = t.length; o > n; n++) if (9540 == t[n].ModuleId) return t[n].Idc || "";
				return ""
			} (), c(bds.comm.seinfo), "ON" === bds.comm._se_click_track_flag) {
				var n = new Image,
				o = "//www.baidu.com/s?wd=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&lts=91";
				n.src = o
			}
		}
		if (bds.comm.cgif) {
			var i = bds.comm.cgifimg = new Image;
			i.src = bds.comm.cgif
		} !
		function() {
			var t = Math.random(),
			e = function() {
				function t() {
					var t = [],
					o = [],
					i = {};
					for (var s in n) !
					function(e) {
						var s = "_SSL_LOG_" + e + "_" + +new Date,
						r = new Image,
						a = new Date;
						i[e] = $.Deferred(),
						o.push(i[e]),
						r.onload = function() {
							t.push(e + "_success=" + (new Date - a)),
							i[e].resolve(),
							delete window[s]
						},
						r.onerror = function() {
							t.push(e + "_error=" + (new Date - a)),
							i[e].resolve(),
							delete window[s]
						},
						r.src = n[e]
					} (s);
					var r = $.when.apply($, o);
					r.always(function() {
						var n = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=ssl&",
						o = t.join("&"),
						i = new Image,
						s = "_HM_LOG_" + (new Date).getTime();
						i.onload = function() {
							delete window[s]
						},
						window[s] = i,
						i.src = n + o + "&_tt=" + e
					})
				}
				var e = +new Date,
				n = {
					gt1: "https://gt1.baidu.com/nocache/imgdata/sp613.gif?t=" + e,
					gt2: "https://gt2.baidu.com/nocache/imgdata/sp613.gif?t=" + e
				};
				setTimeout(t, 1e3)
			};
			t > .1 && .11 > t && e()
		} ()
	}
	function b() {
		return Le.length
	}
	function v(t) {
		$(document).delegate("a", "mousedown",
		function() {
			return function() {
				var e = $(this);
				w(e, t)
			}
		} ())
	}
	function w(t, e) {
		var n, o = e.prefix,
		i = t.attr("href");
		if (o && i && 0 == i.indexOf(o) && (i = i.substring(o.length)), !o && i) {
			var s = i.match(/^http:\/\/[^\/]+/);
			if (!s) return;
			o = s[0],
			i = i.replace(/^http:\/\/[^\/]+/, "")
		}
		if (i && (n = i.match(/^\/*(link|baidu.php)\?(.*)$/), n = i.match(e.regex)), !(n && n[2] && n[2].match(/&(wd|word)=/))) {
			if (i && n) {
				e.convertTable && e.convertTable[n[1]] && (n[1] = e.convertTable[n[1]]);
				var r = ie.getLinkParams(i);
				r && ("https:" === ne.protocol && /Chrome|Safari/.test(navigator.userAgent) && (o = o.replace(/^http:\/\/www\.baidu\.com/, "https://www.baidu.com")), i = o + "/" + n[1] + "?" + n[2] + "&" + r, t.attr("href", o + "/" + n[1] + "?" + n[2] + "&" + r), t.click(function() {
					window.PDC_ASYNC.setLinkData("click_t", (new Date).getTime()),
					window.PDC_ASYNC.setLinkData("linkpreload", $(this).attr("linkpreload"))
				}))
			}
			return i
		}
	}
	function _(t) {
		if (!window.__disable_is2 || $.trim(t) != $.trim($e.val())) {
			if (Ze || !bds.comm.supportis) return void(Te && Te.html(""));
			if (0 != pageState && !window.__disable_kw_tip) if (Te || (Te = $('<div id="kw_tip" style="width:initial" unselectable="on" onselectstart="return false;" class="s_ipt_tip"/>').insertBefore($e), Te.parent().click(function(t) {
				var e = $e.get(0);
				if (t.target === e) return ! 0;
				e.focus();
				var n = e.value.length;
				if (document.selection) {
					var o = e.createTextRange();
					o.moveStart("character", n),
					o.collapse(),
					o.select()
				} else "number" == typeof e.selectionStart && "number" == typeof e.selectionEnd && (e.selectionStart = e.selectionEnd = n);
				return ! 1
			}), Te.get(0).onselectstart = function() {
				return ! 1
			}), Te.text(t), "" != t) {
				var e = $e.textWidth();
				Te.css({
					"margin-left": e + 10 + "px",
					"max-width": Te.parent().width() - e - 14 + "px"
				}).text(t),
				window.__disable_is2 && Te.css("z-index", 1),
				Te.show()
			} else Te.hide()
		}
	}
	function y() {
		Ze = !1
	}
	function x() {
		Ze = !0,
		ze && ze.real_wd && $.trim($e.val()) ? (_(ze.real_wd), T(ze)) : (_(""), T())
	}
	function T(t) {
		var e = i($e.val());
		t && e == t.real_wd && $("#super_se_tip").remove()
	}
	function k(t, e) {
		var n = (new Date).getTime();
		if (e.force || h(e, {
			utime: (new Date).getTime() - qe
		}), !e || !e.loaded) return ! 1;
		"string" == typeof e.html && (e.html = $(e.html)),
		$(e).trigger("swap_begin"),
		m(function() {
			e.pdc.mark("pt"),
			$(window).trigger("swap_begin", [e, t]);
			var n = Ge && Ge.getData();
			n && (setTimeout(function() {
				e.pdc.setParam("ispeed", Ge.monitor(n))
			},
			3e3), e.pdc.setParam("upm", n.join(",")))
		}),
		m(function() {
			e.base64.restart();
			try {
				if (!e.base64_loaded) {
					var t = $.parseJSON(e.html.find("#img_list").text());
					e.base64.loadImg(t.right, t.left)
				}
			} catch(n) {}
			e.base64.end()
		});
		var o = [$(window).scrollLeft(), $(window).scrollTop()];
		Ae.hide(),
		oldEnv = Pe,
		Pe = t,
		Fe = ze,
		ze = e,
		bds.comm.cur_disp_query = t.p("wd"),
		S(),
		bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []),
		0 == pageState && N(t),
		m(function() {
			he()
		}),
		bds.clearReady(),
		Ae.empty();
		var i = e.html;
		if (J.use_cache_repeatedly && (i = i.clone()), m(function() {
			i.find("#head_style").children().removeAttr("data-for").appendTo("head")
		}), m(function() {
			$.globalEval(i.find("#head_script").html())
		}), bds.comm && bds.comm.jsversion && "006" != bds.comm.jsversion) {
			var s = Pe.buildSyncSearchUrl({
				jmp: "jsver",
				_vr: Math.random()
			});
			return void ne.replace(s)
		}
		m(function() {
			i.find("#content_script script").each(function(t, e) {
				$.globalEval($(e).html())
			})
		}),
		m(function() {
			var t = i.find("#s_tab");
			if (t.size()) {
				var e = $("#s_tab");
				e.size() ? e.replaceWith(t) : t.insertBefore(Ae)
			}
		});
		var r = !1; !
		function() {
			var t = i.find("#con-at"),
			n = $("#con-at"),
			o = n.children().children();
			if (o.size()) if (t.children().size()) {
				var s = t.children().children();
				o.attr("cq") != s.attr("cq") || o.attr("srcid") != s.attr("srcid") || e.force && oldEnv && oldEnv.equals(Pe) || !Pe.p("cq") || !Pe.p("srcid") || 1 == Pe.p("_trf") ? (n.remove(), $(window).trigger("top_result_removed"), u(Ae, t, "insertBefore")) : r = !0
			} else n.remove(),
			$(window).trigger("top_result_removed");
			else t.children().size() && u(Ae, t, "insertBefore")
		} ();
		var a = i.find("#container");
		if (e.pdc.bindImgLoad(a), u(Ae, a), !$("#footer").size()) {
			var c = i.find("#footer").children();
			u(Ae, c)
		}
		m(function() {
			var t = (new Date).getTime();
			i && $.globalEval(i.find("#jsMerge").html()),
			h(e, {
				jsmergetime: (new Date).getTime() - t
			})
		}),
		bds && bds.comm && bds.comm.templateName == bds.comm.resTemplateName ? bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 0) : bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 1),
		0 != pageState && bds && bds.util && bds.util.setContainerWidth && bds.util.setContainerWidth(),
		document.title = t.p("wd") + "_鐧惧害鎼滅储",
		Ae.show(),
		d(),
		h(e, {
			domtime: (new Date).getTime() - n
		}),
		h(e, {
			waittime: (new Date).getTime() - ke
		}),
		e.pdc.mark("dom"),
		$(window).trigger("swap_dom_ready", [e, t]),
		window.__lazy_foot_js ? setTimeout(function() {
			C(t, e, n)
		},
		0) : C(t, e, n),
		r ? window.scrollTo(o[0], o[1]) : window.scrollTo(0, 0),
		$(window).trigger("scroll"),
		swap_wait = !1
	}
	function C(t, e, n) {
		var o;
		n || (n = 0),
		e && (o = e.html),
		m(function() {
			_e.get(0).f.value = 8
		}),
		m(function() {
			var t = (new Date).getTime();
			e && e.base64 && (e.base64.setDomLoad("left"), e.base64.setDomLoad("right")),
			h(e, {
				base64time: (new Date).getTime() - t
			})
		}),
		$("#search").find("form").submit(function() {
			var t = $e;
			$e = $(this).find("[name='wd']");
			var e = R.call(this);
			return $e = t,
			e
		}),
		m(function() {
			var t = (new Date).getTime();
			bds.doReady(),
			h(e, {
				bdstime: (new Date).getTime() - t
			})
		}),
		m(function() {
			var t = (new Date).getTime();
			o && $.globalEval(o.find("#ecomScript").html()),
			h(e, {
				ecomtime: (new Date).getTime() - t
			})
		}),
		m(function() {
			var t = (new Date).getTime();
			bds.se.tools && (Ie && clearTimeout(Ie), Ie = setTimeout(function() {
				bds.se.tools()
			},
			600)),
			bds && bds.se && bds.se.certification && bds.se.certification.build && (Se && clearTimeout(Se), Se = setTimeout(function() {
				$(".certification").size() > 0 && bds.se.certification.build.init()
			},
			1e3)),
			bds && bds.se && bds.se.safeTip && (Ce && clearTimeout(Ce), Ce = setTimeout(function() {
				$(".unsafe_ico_new").size() > 0 && bds.se.safeTip.init()
			},
			1200)),
			h(e, {
				tiptime: (new Date).getTime() - t
			})
		}),
		m(function() {
			var t = (new Date).getTime();
			window.initResultClickLog(),
			h(e, {
				clicktime: (new Date).getTime() - t
			})
		}),
		m(function() {
			h(e, {
				rtime: (new Date).getTime() - n,
				used: 1
			}),
			bds.comm.seinfo && e && (bds.comm.seinfo.rsv_pstg = e.type)
		}),
		m(function() {
			$(window).trigger("swap_end", [e, t]),
			E(),
			qe = (new Date).getTime(),
			e && e.pdc && (e.pdc.mark("js"), e.pdc.trigger("swap_end"))
		})
	}
	function S() {
		m(function() {
			$.each(bds.comm.tips,
			function(t, e) {
				e && e.destroy && e.destroy()
			}),
			$("#c-tips-container").empty(),
			bds.comm.tips = []
		}),
		m(function() {
			window.app && window.app.dispose && window.app.dispose()
		}),
		m(function() {
			bds.comm.resolveUnloadHandler()
		}),
		bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []),
		bds && bds.se && bds.se.userAction && bds.se.userAction.destroy()
	}
	function I() {
		De && Re && (clearTimeout(De), De = setTimeout(Re, Z))
	}
	function D(t, e, n) {
		return function(e) {
			var o = $.extend({},
			e);
			if (t && !t.confirm) {
				bds.comm.cur_query = t.real_wd,
				!bds.comm.supportis && t && (n = t.pstg || 0),
				t.confirm = !0,
				De = !1,
				Re = null;
				var i = {};
				i.is_referer = oe,
				i.is_xhr = "1";
				var s = new p(r(ie.getQueryString()), !0);
				t.env.equals(s) || t.env.clone({
					wd: t.prw
				}).equals(s) || ie.setUrl(t.env),
				oe = ne.protocol + "//" + ne.host + ne.pathname + ne.search,
				t.seq ? t.seq++:t.seq = 1,
				t.pdc && (20 != n && bds.comm.supportis && t.pdc.mark("st"), t.pdc && t.pdc.setParam && t.pdc.setParam("cus_pstg", n), t.force && t.pdc.setParam("f4s", 1), t.pdc.trigger("confirm"), window.PRE_CONN.startTimer()),
				m(function() {
					$(window).trigger("confirm", [t, n])
				});
				var a = "/s?ie=utf-8&csq=" + t.seq + "&pstg=" + n + (o.tipConfirm ? "&_cktip=1": "") + "&mod=2" + (bds.comm.supportis ? "&isbd=1": "") + "&cqid=" + t.qid + "&istc=" + ((new Date).getTime() - t.startTime) + "&ver=" + bds.comm.baiduis_verify + "&chk=" + t.chk + "&isid=" + ve + "&" + t.env.buildQueryString() + (t.force ? "&f4s=1": "") + ("function" == typeof Ke ? "&_ck=" + Ke(t.env.p("wd")) : "");
				if (bds.comm.indexSid && (/9998_/.test(bds.comm.indexSid) && "https:" === ne.protocol && (bds.comm.indexSid = bds.comm.indexSid.replace("9998", "8499")), a += "&rsv_isid=" + bds.comm.indexSid), t.no_predict && (a += "&isnop=" + (1 >= fe ? 0 : 1)), fe = 0, Ue && Ue.getRsvStatus) try {
					a += "&rsv_stat=" + Ue.getRsvStatus(t.env.p("wd"))
				} catch(c) {}
				if (He.done(function() {
					Ue.getStat("rsv_sug6") && (a += "&rsv_sug6=" + Ue.getStat("rsv_sug6"), bds.comm.seinfo && (bds.comm.seinfo.rsv_sug6 = Ue.getStat("rsv_sug6"))),
					Ue.getStat("rsv_sug7") && (a += "&rsv_sug7=" + Ue.getStat("rsv_sug7")),
					Ue.getStat("rsv_sug9") && (a += "&rsv_sug9=" + Ue.getStat("rsv_sug9")),
					Ue.getStat("rsv_bp") && (a += "&rsv_bp=" + Ue.getStat("rsv_bp"))
				}), $.ajax({
					headers: i,
					url: a
				}).done(function(t) {
					$('#form input[name="rqlang"]').val(bds.comm.search_tool.actualResultLang || "cn"),
					$('#form input[name="rsv_bp"]').val(1),
					$(t)
				}).fail(function() {}), bds.comm.seinfo) {
					bds.comm.seinfo.rsv_prw = encodeURIComponent($e.val()),
					bds.comm.seinfo.rsv_pstg = n,
					bds.comm.seinfo.rsv_svoice = window.__supportvoice ? "1": "0",
					t.cftime += 1,
					bds.comm.cftime = t.cftime + "";
					var d = t.env.p("rsv_bak");
					d && (bds.comm.seinfo.rsv_bak = d)
				}
				bds.comm.confirmQuery = bds.comm.query,
				bds.comm.confirmQid = bds.comm.qid,
				g(),
				ve = t.qid,
				He.done(function() {
					20 == n ? Ue.updateInitData() : 22 == n || bds.comm.supportis || n >= 0 && 5 >= n && Ue.updateInitData(),
					Ue.clearStat()
				}),
				window.cfpromise.resolve()
			}
		}
	}
	function R(t) {
		if (!ie.support()) return ! 0;
		if (nn) return ! 1;
		if (nn = !0, $e.blur(), _(""), $(this).attr("target")) return ! 0;
		en = !0,
		tn = setTimeout(function() {
			en = !1
		},
		1e3);
		try {
			if (!$.trim($e.val())) return ne.href = "/",
			!1;
			var e, n = new p,
			o = $(this).serializeArray();
			for (e = 0; e < o.length; e++) n.p(o[e].name, o[e].value);
			if (n.p("wd", $e.val()), n.p("nojc") && n.p("nojc", ""), ze) {
				if (n.equals(ze.env.clone({
					wd: ze.real_wd
				})) && !ze.force) return D(ze, Fe, 22)(),
				ze.force = !0,
				_(""),
				T(ze),
				!1;
				ze.env.p("rsv_spt") && n.p("rsv_spt", ze.env.p("rsv_spt"))
			}
			ie.submit(n, !!t)
		} catch(i) {}
		return ! 1
	}
	function A(t) {
		var e = {
			force: !1,
			no_predict: !1,
			use_cache: !1,
			shouldShow: !0,
			pstg: -1
		};
		t && $.extend(e, t);
		var n, o = e.env,
		i = e.force,
		s = e.no_predict,
		r = e.shouldShow,
		c = e.use_cache;
		if (o && o.p("wd") && o.hashCode() && (!se && 1 != Cookie.get("ISSW") || i || !s) && (!ae && 1 != Cookie.get("ISSW") || i || s)) {
			if (c && (n = ee.hasCache(o, {
				loaded: !0
			}))) return void(r && (ze && n.env.clone({
				wd: n.real_wd
			}).equals(ze.env.clone({
				wd: ze.real_wd
			})) || (n.force = e.force, n.no_predict = e.no_predict, n.pdc.init(), n.force && (n.pdc.mark("st"), window.bds && bds.comm && !bds.comm.supportis && (n.pdc.mark("net"), n.pdc.setParam("cus_hitpreload", 1))), k(o, n)), _(e.no_predict && 6 != e.pstg ? "": n.real_wd), T(n)));
			i && r && s && a(),
			n = {
				env: o,
				cftime: 0,
				no_predict: s,
				shouldShow: r,
				loaded: !1,
				force: i,
				startTime: (new Date).getTime(),
				log: {
					ctime: (new Date).getTime() - qe,
					wd: o.p("wd"),
					ntime: 0,
					stat: 0,
					used: 0,
					rtime: 0,
					utime: i ? (new Date).getTime() - qe: 0,
					res: 0
				}
			},
			n.pdc = f(n),
			e.pstg > 0 && (n.pstg = e.pstg),
			n.force && n.pdc.mark("st"),
			n.base64 = isbase64(n.pdc),
			Le.push(n.log),
			pe++,
			fe++,
			U(n)
		}
	}
	function L() {
		var t = [];
		return Ne && (t = $.map(Ne.slice(0, 2),
		function(t) {
			return t.value
		})),
		t.join("	")
	}
	function j(t) {
		e(),
		ne.replace(t.buildSyncSearchUrl())
	}
	function q(t, e) {
		e ? (ae = !0, sn && (clearTimeout(sn), sn = !1), sn = setTimeout(function() {
			ae = ce
		},
		t)) : (se = !0, on && (clearTimeout(on), on = !1), on = setTimeout(function() {
			se = re
		},
		t))
	}
	function U(t) {
		var e, r, a = t.env,
		c = {};
		c.is_referer = ze && ze.env ? ze.env.buildSyncSearchUrl() : Be.replace(/\#.*$/, ""),
		$.extend(c, a.buildHeaders()),
		c.is_xhr = "1",
		window.bds && bds.comm && bds.comm.cur_query ? a.p("bs", bds.comm.cur_query) : a.p("bs", ""),
		window.bds && bds.comm && bds.comm.cur_disp_query && (c.is_pbs = encodeURIComponent(bds.comm.cur_disp_query));
		var d = "ie=utf-8" + (bds.comm.newindex ? "&newi=1": "") + (ge.sid ? "&sid=" + encodeURIComponent(ge.sid) : "") + (ge.tnp ? "&tnp=" + encodeURIComponent(ge.tnp) : "") + "&mod=" + (t.no_predict || !bds.comm.supportis ? "1": "11") + (bds.comm.supportis ? "&isbd=1": "") + "&isid=" + ve + "&" + a.buildQueryString() + "&rsv_sid=" + bds.comm.indexSid + "&_ss=1&clist=" + encodeURIComponent(ee.getCacheList()) + "&hsug=" + encodeURIComponent(L()) + (t.force ? "&f4s=1": "") + "&csor=" + getCursortPosition($e.get(0));
		t.pstg && (d += "&pstg=" + t.pstg);
		var l = "/s?" + d;
		if (l += "&_cr1=" + s(l), !t.no_predict) for (r = ee.find(function(t) {
			return t.loaded || t.no_predict ? void 0 : !0
		}), e = 0; e < r.length; e++) ee.deleteCache(r[e]);
		if (! (t.no_predict && !t.force && (r = ee.find(function(t) {
			return t.force && a.equals(t.env) ? !0 : void 0
		}), r.length > 0))) {
			if (t.force && t.shouldShow) {
				var u = !1,
				m = (new Date).getTime();
				if (r = ee.find(function(e) {
					var n = a.equals(e.env);
					return e.loaded || e.no_predict || !n || e === t || (e.shouldShow = !1),
					!e.loaded && e.no_predict && e.force && n && e !== t && (e.shouldShow = e.shouldShow || t.shouldShow, e.startTime && m - e.startTime < 2e3 && (u = !0), window.__sam_backup_request || (u = !0)),
					e.loaded || n ? void e.pdc.mark("st") : !0
				}), u) return;
				for (e = 0; e < r.length; e++) ee.deleteCache(r[e])
			}
			var p, f = function(e, n, o) {
				if (0 == n) g(e, o),
				t.pdc && (t.pdc.setParam("cus_srv", bds.se.mon.srvt), t.pdc.setParam("bsi", Cookie.get("__bsi")));
				else if (1 == n) try {
					var i = 1 * new Date;
					t.b64ildata = $.parseJSON(e),
					t.base64.ilparseTime = 1 * new Date - i,
					t === ze && (t.base64.inline(t.b64ildata), t.base64.ilrenderTime = 1 * new Date - i),
					$(t).one("swap_begin",
					function() {
						this.base64.inline(this.b64ildata, this.html.get(0))
					})
				} catch(s) {} else 2 == n && t.base64 && (t.base64.ilsum = e)
			},
			g = function(e, s) {
				if (s && "302" == s.status || e && $.trim(e).indexOf("<div>") > 10) return void(t.force ? (n(11), j(a)) : ee.deleteCache(t));
				h(t, {
					ntime: (new Date).getTime() - t.startTime,
					res: 1
				});
				var r, c = "<!--data-->",
				d = e.indexOf(c);
				if ( - 1 != d) {
					r = $(e.substr(0, d)),
					t.html = e.substr(d + c.length),
					window.__dom_pre_parse && "1" == r.find("#__need_parse_dom").html() && (t.html = $(t.html));
					try {
						var l = $.parseJSON(r.find("#img_list").text());
						t.base64.loadImg(l.right, l.left),
						t.base64_loaded = !0
					} catch(u) {}
					try {
						o(r.find("#limg_list").text())
					} catch(u) {}
				} else r = t.html = $(e);
				var m = parseInt(r.find("#__status").eq(0).html()),
				p = parseInt(r.find("#__switchtime").eq(0).html()),
				f = parseInt(r.find("#__redirect").eq(0).html()),
				g = {};
				try {
					g = $.parseJSON(r.find("#__sugPreInfo:eq(0)").html() || "{}") || {}
				} catch(u) {}
				t.real_wd = r.find("#__real_wd").eq(0).text(),
				t.real_wd_org = r.find("#__real_wd_org").eq(0).text(),
				t.real_wd_nosynx = r.find("#__real_wd_nosynx").eq(0).text(),
				t.env && t.env.p("nojc") && t.real_wd_nosynx && (t.real_wd = t.real_wd_nosynx);
				var b = !1; (a.p("wd") == i($e.val()) || t.force) && t.shouldShow && (b = !0),
				t.real_wd && (t.prw = a.p("wd"), a.p("wd", t.real_wd));
				var v = r.find("#__queryId").html(),
				w = r.find("#__querySign").html();
				t.querySign = w,
				h(t, {
					stat: m ? m: 0
				}),
				bds.comm.isDebug && $("#isDebugInfo").html(r.find("#__isDebugInfo").html()),
				v && (t.qid = v);
				var C = r.find("#__chk").html();
				if (t.chk = C ? C: 0, !e || !v && !p && !f && !m || !w && t.force) return t.force ? (a.p("__eis", 1), a.p("__eist", e ? e.length: 0), a.p("real_wd", t.real_wd), n(13), void j(a)) : void ee.deleteCache(t);
				if (p > 0 && q(1e3 * p, !t.no_predict), -11 == m) {
					var S = ee.getCacheBySign(w);
					if (!S) return A({
						env: t.env.clone({
							wd: t.real_wd
						}),
						force: t.force,
						use_cache: !1,
						no_predict: !0
					}),
					void ee.deleteCache(t);
					S.force = t.force,
					y(),
					_(S.real_wd),
					T(S),
					ee.deleteCache(t),
					t = S,
					ze && t.real_wd == ze.real_wd || (b = !0)
				} else {
					if (0 > m) {
						if (1 == f && t.force) return h(t, {
							redirect: 1
						}),
						n(14),
						void j(a);
						if (x(), -12 == m && g && g.wait_time > 0) {
							var I = t.env.clone();
							Qe = setTimeout(function() {
								A({
									env: I,
									force: !1,
									use_cache: !0,
									no_predict: !0,
									shouldShow: !1,
									pstg: 6
								})
							},
							g.wait_time)
						}
						return void ee.deleteCache(t)
					}
					if (m > 0) return void ee.deleteCache(t)
				}
				for (var D = ee.find(function(e) {
					return ! e.loaded && e !== t && e.no_predict && a.equals(e.env) ? (e.shouldShow && (b = !0), e.force && (t.force = !0, t.no_predict = !0), !0) : void 0
				}), R = 0; R < D.length; R++) ee.deleteCache(D[R]);
				return t.backup_request_timeout && clearTimeout(t.backup_request_timeout),
				t.loaded = !0,
				bds.comm.supportis || b ? void((b && t !== ze || t.force) && (y(), t.shouldShow = !1, -11 == m ? t.pdc.init() : t.pdc.mark("net"), k(a, t))) : !0
			};
			p = $.ajax({
				dataType: "parts",
				url: l,
				headers: c,
				delimiter: "</*3*/>"
			}),
			p.parts(function(t, e) {
				f(t, e, p)
			}),
			p.fail(function(e, o) {
				t.force && t.shouldShow && "abort" != o && t.env && (n(12), ne.replace(t.env.buildSyncSearchUrl() + "&rsv_jmp=fail")),
				ee.deleteCache(t)
			}),
			t.xhr = p,
			ee.addCache(t)
		}
	}
	function E() {
		Le = [],
		pe = 0,
		en = !1,
		clearTimeout(tn)
	}
	function O() {
		window.index_off && window.index_off(),
		xe[0] !== ye[0] && xe.val(""),
		$e = ye,
		pageState = 1,
		bds.comm.ishome = 0,
		bds.comm.cur_query = bds.comm.query,
		Pe = new p,
		ze = {
			env: Pe,
			real_wd: bds.comm.query,
			force: !0,
			confirm: !0
		},
		He.done(function() {
			return function() {
				Oe.start()
			}
		} ()),
		$(window).trigger("index_off"),
		bds.util.setContainerWidth(),
		m(function() {
			$(window).trigger("swap_dom_ready")
		}),
		window.__lazy_foot_js ? setTimeout(function() {
			C()
		},
		0) : C()
	}
	function N(t) {
		window.index_off && window.index_off(),
		xe.get(0) !== ye.get(0) && (xe.val(""), ye.val(t.p("wd"))),
		$e = ye,
		pageState = 1,
		bds.comm.ishome = 0,
		He.done(function() {
			Ee !== Oe && (Ee.stop(), Oe.hide(), Oe.setKey(t.p("wd")), Oe.start())
		}),
		bds.util.setContainerWidth(),
		$(window).trigger("index_off", t)
	}
	function M() {
		an = !1,
		cn = !1,
		ln = [],
		clearTimeout(un),
		un = !1
	}
	function P(t) {
		an || (an = {
			x: t.pageX,
			y: t.pageY
		}),
		dn = {
			x: t.pageX,
			y: t.pageY
		},
		cn || an.x == t.pageX || an.y == t.pageY || (cn = !0, ln = [an], z())
	}
	function z() {
		ln.push(dn);
		var t = ln.length;
		if (Math.pow(dn.x - an.x, 2) + Math.pow(dn.y - an.y, 2) >= Math.pow(me, 2) || t * ue >= le) {
			var e = Ue,
			n = bds.comm.supportis ? 1 : 2;
			if (n && e && e.data() && e.data()[0] && e.visible()) {
				var o = (new p).clone({
					wd: e.data()[0].value
				});
				A({
					env: o,
					force: !1,
					no_predict: !0,
					use_cache: !0,
					shouldShow: !1,
					pstg: 1
				}),
				n--
			}
			if (n && e && e.data() && e.data()[1] && e.visible()) {
				var o = (new p).clone({
					wd: e.data()[1].value
				});
				A({
					env: o,
					force: !1,
					no_predict: !0,
					use_cache: !0,
					shouldShow: !1,
					pstg: 1
				}),
				n--
			}
			if (!bds.comm.supportis && n && $.trim($e.val()) && (!ze || ze.env.p("wd") != $.trim($e.val()))) {
				var o = (new p).clone({
					wd: $.trim($e.val())
				});
				A({
					env: o,
					force: !1,
					no_predict: !0,
					use_cache: !0,
					shouldShow: !1,
					pstg: 1
				}),
				n--
			}
		} else un = setTimeout(function() {
			z()
		},
		ue)
	}
	document.write = document.writeln = function() {},
	bds && bds.comm && "clearissw" == bds.comm.query && Cookie.clear("ISSW"),
	function() {
		var t = $.Deferred();
		bds.comm.registerUnloadHandler = function(e) {
			t.done(e)
		},
		bds.comm.resolveUnloadHandler = function() {
			t.resolve(),
			t = $.Deferred()
		}
	} (),
	window.b_rec = function(t) {
		var e;
		if (t) e = navigator.userAgent;
		else try {
			e = window.external && window.external.twGetRunPath ? window.external.twGetRunPath() : ""
		} catch(n) {
			e = ""
		}
		return e = e.replace(/:/, "~").replace(/\t/, "`")
	},
	window.scr_rec = function() {
		var t = "";
		try {
			t += [document.body.clientWidth, document.body.clientHeight, window.screenTop, window.screenLeft, window.screen.height, window.screen.width].join("_")
		} catch(e) {}
		return t
	},
	window.reh_rec = function() {
		var t = [],
		e = [];
		try {
			$("#content_left").children(".result,.result-op").each(function(e, n) {
				t.push($(n).height())
			})
		} catch(n) {}
		try {
			$("#con-ar").children(".result,.result-op").each(function(t, n) {
				e.push($(n).height())
			})
		} catch(n) {}
		return t.join("_") + "|" + e.join("_")
	},
	window.onerror = function() {
		window.console && console.debug && console.debug(arguments),
		bds.comm.jserror = Array.prototype.slice.call(arguments).join("	"),
		X(bds.comm.jserror)
	},
	window.hash = function(t, e) {
		return t ? t && !e && Pe ? Pe.p(t) : void(t && e && Pe && (Pe.p(t, e), ne.href = Pe.buildSearchUrl())) : void 0
	};
	var B, F, H, W, G, Q, V = !1; !
	function() {
		var t = $.globalEval;
		$.globalEval = function() {
			var e = (new Date).getTime();
			try {
				t.apply($, arguments)
			} catch(n) {} (new Date).getTime() - e > 500
		}
	} (),
	bds.comm.isDebug && ($('<style data-for="debug">#debug{display:none!important;}</style>').appendTo("head"), $('<div id="debug" style="display:block;position:absolute;top:30px;right:30px;border:1px solid;padding:5px 10px;z-index:10000"></div>').appendTo("#wrapper"), $(window).on("swap_end",
	function(t, e) {
		if (e) {
			var n = $("#isDebugInfo");
			n.size() || (n = $('<div id="isDebugInfo"></div>').appendTo("#debug")),
			n.html(e.html.find("#__isDebugInfo").html());
			var o = "<table>";
			for (var i in e.log) e.log.hasOwnProperty(i) && (o += "<tr><td>" + i + "</td><td>" + encodeURIComponent(e.log[i]) + "</td></tr>");
			o += "</table>",
			$("#debug").html(o)
		}
	}));
	var X = function() {
		var t;
		return function(e) {
			bds.comm.isDebug && alert(e),
			bds && bds.comm && bds.comm.js_error_monitor && (t = new Image, t.src = bds.comm.js_error_monitor + "?" + $.param({
				url: ne.href,
				time: bds.comm.serverTime,
				explore: navigator.userAgent,
				info: e,
				info_type: 1
			}))
		}
	} ();
	window.setSugKey = function(t) {
		$e && t && (Oe && Oe.setKey ? Oe.setKey(t) : $e.val(t))
	},
	window.getCursortPosition = function(t) {
		var e = 0;
		try {
			if (document.selection) {
				var n = document.selection.createRange();
				n.moveStart("character", -t.value.length),
				e = n.text.length
			} else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart)
		} catch(o) {
			e = t.value.length
		}
		return e
	},
	bds.comm.flagTranslateResult && ($("#wrapper_wrapper").delegate(".result", "mouseenter",
	function() {
		$(".c-fanyi", $(this)).show()
	}), $("#wrapper_wrapper").delegate(".result", "mouseleave",
	function() {
		$(".c-fanyi", $(this)).hide()
	}), $("#wrapper_wrapper").delegate(".result .c-fanyi", "click",
	function() {
		var t = $(this).closest(".result"),
		e = $("h3 a:first", t),
		n = $(".c-abstract:first", t),
		o = $(".c-fanyi-abstract", t).val(0).html(),
		i = $(".c-fanyi-title", t).val(0).html();
		$(".c-fanyi-abstract", t).val(0).html(n.html()),
		$(".c-fanyi-title", t).val(0).html(e.html()),
		e.html(i),
		n.html(o)
	}));
	var J = {
		use_cache_repeatedly: !0,
		index_form: "#form",
		kw: "#kw",
		result_form: "#form"
	};
	t && $.extend(J, t);
	var K = 15,
	Y = 6e4,
	Z = window.__confirm_timeout ? window.__confirm_timeout: 1e4,
	te = bds.comm.supportis ? 4 : 10,
	ee = function() {
		function t(t) {
			"object" == typeof t && null != t && (t.xhr && t.xhr.abort && t.xhr.abort(), t.base64 && t.base64.destroy(), t.pdc && t.pdc.destroy(), t.backspace_preload_timeout_id && clearTimeout(t.backspace_preload_timeout_id), delete t.xhr, delete t.html)
		}
		var e = [];
		return {
			find: function(t) {
				return $.grep(e, t)
			},
			getCacheList: function() {
				var t = $.map(e,
				function(t) {
					return t && (new Date).getTime() - t.startTime > Y ? !1 : t.querySign
				});
				return t = $.grep(t,
				function(t) {
					return !! t
				}),
				t.join("	")
			},
			hasCache: function(t, n) {
				function o(t) {
					var o, i;
					return (i = t.p("wd")) ? ($.grep(e,
					function(e) {
						return n.loaded && !e.loaded ? !1 : void(t.equals(e.real_wd ? e.env.clone({
							wd: e.real_wd
						}) : e.env) && (o = e))
					}), o ? o: null) : !1
				}
				n || (n = {});
				var i = o(t);
				return i && (new Date).getTime() - i.startTime > Y && (this.deleteCache(i), i = null),
				i
			},
			shouldShow: function(t) {
				if (t.force) return ! 0;
				if (!t.shouldShow && !t.force && t.no_predict) return ! 1;
				var e = i($e.val());
				return ! e || ze && t.env.equals(ze.env) ? !1 : 0 == t.env.p("wd").indexOf(e) ? !0 : 0 == t.real_wd.indexOf(e) ? !0 : !1
			},
			getCacheBySign: function(t) {
				var n = !1;
				return $.each(e,
				function(e, o) {
					n || !o.loaded || o.querySign != t || o.env.p("pn") && 0 != o.env.p("pn") || (n = o)
				}),
				n
			},
			addCache: function(n) {
				if ( - 1 == l(e, n) && !n.env.p("srcid") && !n.env.p("cq")) for (e.unshift(n); e.length > K;) t(e.pop())
			},
			deleteCache: function(n) {
				t(n),
				e = $.grep(e,
				function(t) {
					return t !== n
				})
			},
			deleteCacheByEnv: function() {
				e = $.grep(e,
				function(e) {
					var n = e.env.equals(e.env);
					return n && t(e),
					!n
				})
			},
			clearCache: function() {
				e = $.grep(e,
				function(e, n) {
					return n !== ze ? (t(n), !1) : !0
				}),
				e = []
			}
		}
	} (),
	ne = document.location,
	oe = ne.protocol + "//" + ne.host + ne.pathname + ne.search,
	ie = {
		onurlchange: function() {}
	}; !
	function() {
		function t() {
			var t = ne.href.match(/#+(.*)$/);
			return t ? t[1].replace(/\+/g, "%2B") : ""
		}
		function n() {
			var t = ne.href.match(/\?([^#]+)/);
			return t ? t[1].replace(/\?/g, "&") : ""
		}
		function o(t, e) {
			var n = "";
			if ("1" === window._thirdLinkSpeed && (n = "&qid=" + bds.comm.queryId), window._bdlksmp > 0 && (n = "&bdlksmp=" + window._bdlksmp), "1" === window._eclipse && /^\/link\?/.test(e)) return "wd=&eqid=" + bds.comm.eqid + i(["pn", "rn", "ie"], t) + n;
			var o = new p(r(t));
			return o.p("wd") ? o.buildQueryString().replace(/&rsv[^=]*=[^&]*/g, "").replace(/[^a-zA-Z0-9]url=/g, "") + n: void 0
		}
		function i(t, e) {
			var n = "",
			o = r(e);
			for (var i in t) o.hasOwnProperty(i) && (n += "&" + encodeURIComponent(o[i]));
			return n
		}
		function s(t) {
			var e = new p(r(ie.getQueryString()), !0);
			e.hashCode() ? 0 == pageState && N(e) : 0 != pageState ? ne.replace(ne.pathname + ne.search.replace(/([?&])isidx=[^&*]&?/, "$1")) : ne.search != ne.search.replace(/([?&])isidx=[^&*]&?/, "$1") && ne.replace(ne.pathname + ne.search.replace(/([?&])isidx=[^&*]&?/, "$1")),
			ie.onurlchange(e, t)
		}
		var a = "onhashchange" in window,
		c = "onpopstate" in window;
		window.__disable_popstate && (c = !1);
		var l = ne.pathname.length > 1 ? ne.pathname: "/s"; (navigator.userAgent.match(/MSIE (6|7)/) || document.documentMode < 8) && (a = !1, c = !1),
		J.disable_popstate && (c = !1),
		a || c || e();
		var u = function() {
			var e = "";
			return function(n, o) {
				o && (e = o.buildQueryString(), ne.hash = e),
				(n || e != t()) && (s(n), e = t())
			}
		} ();
		ie.setUrl = function(t) {
			c ? m(!1, t) : a && u(!1, t)
		};
		var m = function() {
			var t = n();
			return function(e, o) {
				o && (t = o.buildQueryString(), window.history.pushState(o, "", o.buildSyncSearchUrl())),
				e || t != n() ? (s(e), t = n()) : d()
			}
		} ();
		ie.getQueryString = function() {
			return c ? n() : /wd=/.test(t()) ? t() : n()
		},
		ie.init = function() {
			c ? !
			function() {
				var e = ne.href,
				n = !1;
				$(window).on("swap_begin",
				function() {
					n = !0
				}),
				$(window).bind("popstate",
				function() { (n || !e || e != ne.href) && m(),
					e = null
				}),
				$(window).bind("hashchange",
				function() {
					var e = t();
					/wd=/.test(e) && ne.replace(l + "?" + e)
				})
			} () : a && ($(window).bind("hashchange",
			function() {
				u()
			}), $(function() {
				u()
			}));
			var e = t();
			/wd=/.test(e) && (c ? (window.history.replaceState(null, "", l + "?" + e), m()) : a ? u() : ne.replace(l + "?" + e))
		},
		ie.support = function() {
			return (c || a) && 1 != Cookie.get("ISSW") && !window.__disable_preload
		},
		ie.getLinkParams = function(e) {
			if (!c) {
				var i = t();
				return "" == i && (i = n()),
				o(i, e)
			}
			if ("https:" === ne.protocol || "1" === window._eclipse) {
				var s = n();
				return s || (s = t()),
				o(s, e)
			}
			return ! 1
		},
		ie.clickResultLink = function(t, e, n) {
			return c ? (window.history.pushState(null, "", new p(n, !0).buildSyncSearchUrl()), m(), !1) : void t.attr("href", e.buildSearchUrl(n)).attr("target", "_self")
		},
		ie.submit = function(t, e) {
			setTimeout(function() {
				c ? (window.history.pushState(t, "", t.buildSyncSearchUrl()), m(e)) : a ? (ne.href = t.buildSearchUrl(), u(e)) : ne.href = t.buildSyncSearchUrl()
			},
			0)
		},
		window.changeUrl = function(t) {
			var e = new p(r(t));
			ie.submit(e, !0)
		}
	} (),
	ie.onurlchange = function(t, e) {
		He.done(function() {
			Ue.setKey(t.p("wd")),
			Ue.hide()
		}),
		ke = (new Date).getTime(),
		$e.val(t.p("wd")),
		_("");
		var n = !0;
		e && ze && ze.env && ze.env.equals(t) && (n = !1),
		A({
			env: t,
			force: !0,
			use_cache: n,
			no_predict: !0
		})
	};
	var se = J.disable ? J.disable: !1;
	window.__disable_preload && (se = !0);
	var re = se,
	ae = !1;
	window.__disable_predict && (ae = !0);
	var ce = ae,
	de = bds.comm.switchAddMask ? bds.comm.switchAddMask: !1;
	de || (de = window.__switch_add_mask ? window.__switch_add_mask: !1),
	de = !0;
	var le = (bds.comm.preloadMouseMoveDistance ? bds.comm.preloadMouseMoveDistance: 5, 300),
	ue = 50,
	me = 80,
	pe = 0,
	fe = 0,
	he = function() {},
	ge = r(ne.search);
	ie.support() || (!
	function() {
		function t() {
			ne.hash && ne.hash.match(/[^a-zA-Z0-9](wd|word)=/) && ne.replace("//www.baidu.com/s?" + ne.href.match(/#(.*)$/)[1])
		}
		ne.hash.match(/[^a-zA-Z0-9](wd|word)=/) ? (ne.replace("//www.baidu.com/s?" + ne.href.match(/#(.*)$/)[1]),
		function() {
			throw new Error("redirect to sync")
		} ()) : (document.getElementById("wrapper").style.display = "block", "onhashchange" in window ? window.onhashchange = t: setInterval(t, 200))
	} (), re = se = !0);
	for (var be = Cookie.get("BAIDUID", "nobdid").split(":")[0], ve = be.substr(0, 6) + be.substr(be.length - 5, 5) + parseInt(99999 * Math.random()); ve.length < 16;) ve += "0";
	ve = encodeURIComponent(ve);
	var we, _e, ye, xe, $e, Te;
	ye = xe = $e = $(J.kw);
	var ke, Ce, Se, Ie, De, Re, Ae = $("#wrapper_wrapper"),
	Le = [];
	window.__async_strategy,
	we = $(J.index_form),
	"_blank" == we.attr("target") && (window.__disable_index_predict = !0, re = se = !0);
	var je = we.serializeArray();
	_e = $(J.result_form);
	var qe = (new Date).getTime();
	window.pageState = 0;
	var Ue, Ee, Oe, Ne, Me, Pe = null,
	ze = null,
	Be = document.location.href,
	Fe = !1,
	He = $.ajax({
		dataType: "script",
		cache: !0,
		url: 1 === bds.comm.logFlagSug ? "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_sam_sug_a97d823.js": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_97a395d.js"
	}),
	We = "focus"; !
	function() {
		window.PDC_ASYNC = {
			setParam: function(t, e) {
				ze && ze.pdc && ze.pdc.setParam(t, e)
			},
			setLinkData: function(e, n) {
				t[e] = n
			},
			sendLinkLog: function() {
				var e = "//www.baidu.com/nocache/fesplg/s.gif?log_type=linksp",
				n = "";
				n += "&link_t=" + ((new Date).getTime() - t.click_t) + "&query=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&linkpreload=" + t.linkpreload;
				var o = Math.random();
				if (.01 > o) {
					var i = new Image,
					s = "LINK_IMG_" + new Date;
					window[s] = i,
					i.onload = function() {
						delete window[s]
					},
					i.src = e + n
				}
			}
		};
		var t = (window.PDC_ASYNC.log = {},
		{});
		window.bds && (bds.pdc = window.PDC_ASYNC)
	} ();
	var Ge = function(t) {
		function e() {
			if (c = 1, n(), 1 == c) {
				var e = new Date,
				i = !1,
				s = function() {
					var n = new Date,
					l = n - e - t,
					u = o();
					0 > l && (l = 0),
					u || i || (r[a] = l, a = (a + 1) % 20),
					i = u,
					1 == c && (e = n, d = setTimeout(s, t))
				};
				d = setTimeout(s, t)
			}
		}
		function n() {
			window.clearTimeout(d)
		}
		function o() {
			var t = ["webkit", "moz", "ms", "o"];
			if ("hidden" in document) return document.hidden;
			for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return document[t[e] + "Hidden"];
			return ! 1
		}
		function i(t) {
			try {
				var e = 0,
				n = Math.max.apply(null, t),
				o = 10,
				i = 60,
				s = 4,
				r = 40,
				a = Cookie.get("ispeed_lsm"),
				c = 0,
				d = new Date,
				l = 0;
				d.setTime(d.getTime() + 2592e6);
				for (var u = 0; u < t.length; u++) {
					var m = t[u];
					e += m
				}
				return e = Math.round(e / t.length),
				n > 1e3 || e > 150 ? (c = a ? parseInt(a) : 0, c >= r - o && r > c && (l = 1, Cookie.set("ispeed", 2, document.domain, "/", d)), i > c && (c = c + o > i ? i: c + o, Cookie.set("ispeed_lsm", c, document.domain, "/", d))) : (a && parseInt(a) > r && (s = 5), a && parseInt(a) >= s && (parseInt(a) <= r + s && parseInt(a) > r && (l = 2, Cookie.set("ispeed", 1, document.domain, "/", d)), c = parseInt(a) - s, Cookie.set("ispeed_lsm", c, document.domain, "/", d))),
				l
			} catch(p) {}
			return 0
		}
		function s() {
			return Cookie.get("ispeed") && 1 == UPS.get("isSwitch") && 2 == parseInt(Cookie.get("ispeed")) ? !0 : !1
		}
		var r = [],
		a = 0,
		c = 0,
		d = !1,
		t = t || 250;
		return {
			start: e,
			stop: function() {
				window.clearTimeout(d),
				c = 0
			},
			getData: function() {
				return r.slice(a).concat(r.slice(0, a))
			},
			isSlow: s,
			monitor: i
		}
	} ();
	bds.comm.supportis && 1 == UPS.get("isSwitch") && Ge.start();
	var Qe;
	He.done(function() {
		Ue = Ee = Oe = bds.se.sug({
			maxNum: 10,
			withoutRich: bds.comm.supportis,
			withoutZhixin: !0,
			form: _e[0],
			ipt: $e[0],
			cbname: "bdsugresultcb",
			submission: R
		}),
		$e.keydown(function(t) {
			var e = getCursortPosition(this); (9 == t.keyCode || 39 == t.keyCode && e == this.value.length) && bds.comm.supportis && ze && Te.text() && (t.preventDefault(), ze.real_wd != this.value && ($e.val(ze.real_wd), Ue.check()), Ue.show(), _(""), D(ze, Fe, 22)({
				tipConfirm: !0
			}))
		}),
		Ue.on("start",
		function() {
			We = "focus"
		}),
		$(window).on("blur",
		function() {
			Ue.hide()
		}),
		$(document).on("click",
		function(t) {
			return 2 == t.isTrigger || 3 == t.isTrigger ? !1 : void Ue.hide()
		});
		var t, e;
		Ue.on("inputChange",
		function(n, o) {
			if (! (window.__sam_his_nopredict && window.bds && bds.comm && 0 == bds.comm.supportis)) {
				if (t || (t = $e.val()), _(""), M(), clearTimeout(Qe), clearTimeout(rn), 0 == pageState && window.__disable_index_predict || se || ae || Ge.isSlow()) return void Ue.setMaxNum(10);
				Ue.setMaxNum(te);
				var i = new p({
					pn: "",
					wd: o.value
				});
				if (bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "ipt_change"), 0 == pageState && bds.comm.supportis && $.trim($e.val())) {
					N(i);
					var s = $("<div id='ent_sug'>璇锋寜鈥滃洖杞︹€濋敭鍙戣捣妫€绱�</div>").insertBefore("#head");
					$(window).one("swap_begin",
					function() {
						s.remove()
					})
				}
				if (Me) return void(Me = !1);
				if (window.__restart_confirm_timeout && I(), We = "input", ke = (new Date).getTime(), e && (clearTimeout(e), e = !1), "" == $.trim(o.value)) return void x();
				if (Ne = o.checkStore(), !/^[a-zA-Z0-9~!@#$%^&*()_+=-]$/.test(o.value)) {
					var r = $e.val(),
					a = o.imt.getLog();
					a.length > 0 && a[a.length - 1].type.indexOf("link") > -1 && i.p("_sglink", "1");
					var c = o.imt.diffLog();
					c && c.length > 1 && (c = c.slice( - 15).join("."), i.h({
						is_params: {
							imes: encodeURIComponent(c)
						}
					})),
					!window.__disable_is2 && t.length > r.length && 0 === t.indexOf(r) ? e = setTimeout(function() {
						A({
							env: i,
							use_cache: !0,
							force: !1,
							pstg: 5,
							shouldShow: bds.comm.supportis
						}),
						e = !1
					},
					250) : A({
						env: i,
						use_cache: !0,
						force: !1,
						pstg: 5,
						shouldShow: bds.comm.supportis
					})
				}
				t = r
			}
		}),
		Ue.on("selectSug",
		function(t, e, n, o) {
			if (_(""), clearTimeout(Qe), !(0 == pageState && window.__disable_index_predict || se || ae || Ge.isSlow())) if ( - 1 == n) {
				ze && Ue.setVisibleSug(ze.real_wd);
				var i = new p({
					pn: "",
					wd: e.value
				});
				bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "sug_select"),
				A({
					env: i,
					use_cache: !0,
					force: !1,
					shouldShow: bds.comm.supportis,
					pstg: 3
				})
			} else {
				Ue.setVisibleSug(),
				_("");
				var i = new p({
					pn: "",
					wd: o
				});
				bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "sug_select");
				var s = e.stopRefresh ? !1 : bds.comm.supportis;
				A({
					env: i,
					force: !1,
					use_cache: !0,
					no_predict: !0,
					shouldShow: s,
					pstg: 3
				})
			}
		}),
		Ue.on("render",
		function() {
			ze && Ue.setVisibleSug(ze.real_wd)
		}),
		Ue.on("dataReady",
		function(t, e) {
			var n = e && e.queryValue && e.dataCached && e.dataCached[e.queryValue];
			if (n && n.gl) for (var o in n.gl) if (1 * n.gl[o] > 0) {
				var i = new p({
					pn: "",
					wd: n.s[o]
				});
				A({
					env: i,
					force: !1,
					use_cache: !0,
					no_predict: !0,
					shouldShow: !1,
					pstg: 7
				})
			}
		}),
		0 == pageState && Ue.start()
	});
	var Ve, Xe, Je, Ke; !
	function() {
		var t, e = -1,
		n = 0,
		o = -1,
		i = -1,
		r = -1,
		a = -1,
		c = 0;
		Ve = function(e) {
			if (e) {
				r = e.pageX,
				a = e.pageY,
				t = e.target;
				var s = $(e.target);
				"submit" == s.attr("type") && (c = 1);
				var d = s.offset();
				o = r - d.left,
				i = a - d.top,
				n = (new Date).getTime()
			}
		},
		Xe = function(o) {
			o && o.target == t && (e = (new Date).getTime() - n)
		},
		Ke = function(t) {
			bds && bds.comm && bds.comm.query && (t = bds.comm.query);
			var n = c + "." + e + "." + o + "." + i + "." + r + "." + a;
			return n = s(n + t) + "." + n
		},
		Je = function() {
			e = -1,
			n = 0,
			o = -1,
			i = -1,
			r = -1,
			a = -1,
			c = 0
		},
		$(window).on("confirm",
		function() {
			setTimeout(Je, 0)
		})
	} (),
	$(function() {
		$("#head").delegate(".index_tab_top>a,.index_tab_bottom>a,#u1>a,#u>a", "mousedown",
		function() {
			return $(this).attr("name") ? ns_c({
				fm: "behs",
				tab: $(this).attr("name"),
				query: "",
				un: encodeURIComponent(bds.comm.user || "")
			}) : void 0
		})
	}),
	$(document).delegate("a", "mousedown",
	function() {
		D(ze, Fe, 22)()
	}),
	v({
		prefix: "http://www.baidu.com",
		regex: /^\/*(link)\?(.*)$/
	}),
	v({
		prefix: "//www.baidu.com",
		regex: /^\/*(link)\?(.*)$/
	}),
	v({
		prefix: "http://www.baidu.com",
		convertTable: {
			"baidu.php": "baidu.php",
			"aladdin.php": "aladdin.php",
			"siva.php": "siva.php",
			"adrc.php": "adrc.php",
			"zhixin.php": "zhixin.php"
		},
		regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
	}),
	"www.baidu.com" != ne.host && v({
		prefix: "",
		convertTable: {
			"baidu.php": "baidu.php",
			"aladdin.php": "aladdin.php",
			"siva.php": "siva.php",
			"adrc.php": "adrc.php",
			"zhixin.php": "zhixin.php"
		},
		regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
	}),
	v({
		prefix: "http://bzclk.baidu.com",
		regex: /^\/*(adrc\.php)\?(.*)$/
	}),
	v({
		prefix: "https://sp0.baidu.com/9q9JcDHa2gU2pMbgoY3K",
		regex: /^\/*(adrc\.php)\?(.*)$/
	}),
	"https:" == ne.protocol && bds.comm.ishome && !/Chrome/.test(navigator.userAgent) && $(document).delegate("a", "mousedown",
	function() {
		var t = $(this),
		e = t.attr("href"),
		n = {
			"http://v.baidu.com": "/?fr=bd"
		};
		n && n.hasOwnProperty(e) && t.attr("href", e + n[e])
	}),
	$(document).delegate("a", "mousedown",
	function() {
		var t = $(this),
		e = t.attr("href"),
		n = new Image,
		o = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm",
		i = Math.random();
		if (.01 > i && !/www\.baidu\.com\//.test(e) && /^http/.test(e)) {
			var s = o + "&c_url=" + encodeURIComponent(e),
			n = new Image,
			r = "_LOG_" + (new Date).getTime();
			n.onload = function() {
				delete window[r]
			},
			window[r] = n,
			n.src = s
		}
	}),
	ie.support() && $(document).delegate("a", "click",
	function() {
		var t = ne.protocol + "//" + ne.host;
		return function() {
			var e = $(this);
			if (!e.attr("target") || "_self" == e.attr("target")) {
				var n = $.trim(e.attr("href"));
				if (n && 0 == n.indexOf(t) && (n = n.substring(t.length)), n && (matched = n.match(/^\/*s\?(.*)/)), n && matched) {
					var o = r(matched[0]);
					if (o.pn || (o.pn = ""), l(["baidurt", "baiduwb", "baidufir", "SE_baiduxueshu_c1gjeupa"], o.tn) < 0) {
						var i = e.parents("#con-at");
						i.size() > 0 && a({
							top: i.offset().top + i.height()
						});
						var s = ie.clickResultLink(e, Pe, o)
					}
					return s
				}
			}
		}
	} ()),
	$(document).delegate("a", "mousedown",
	function(t) {
		Ve(t)
	}),
	$(document).delegate("a", "mouseup",
	function(t) {
		Xe(t)
	}),
	$(document).delegate("#su,#su1", "mouseup",
	function(t) {
		Xe(t)
	}),
	$(document).delegate("#su,#su1", "mousedown",
	function(t) {
		Ve(t)
	}),
	!
	function() {
		var t;
		window._bdlkc >= 1 && ($(document).delegate(".c-container", "mouseenter",
		function() {
			return function() {
				var e = $(this),
				n = 300;
				2 == window._bdlkc && (n = 100),
				t = setTimeout(function() {
					var t = e.find(".t>a"),
					n = w(t, {
						prefix: "http://www.baidu.com",
						regex: /^\/*(link)\?(.*)$/
					}),
					o = e.attr("mu") || e.find(".f13 .g").text(),
					i = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
					s = o.match(i);
					n && n.match(ne.protocol) && /www\.baidu\.com\/link/.test(n) && !/bdlkc=1/.test(n) && (s[2] && (o = "http://" + s[2], e.append('<link rel="dns-prefetch" href="' + o + '" />')), $.ajax({
						url: n + "&bdlkc=1",
						type: "GET",
						contentType: "text/html",
						success: function() {
							t.attr("linkpreload", "1")
						}
					}), t.attr("href", n + "&bdlkc=1"))
				},
				300)
			}
		} ()), $(document).delegate(".c-container", "mouseleave",
		function() {
			return function() {
				clearTimeout(t)
			}
		} ()))
	} ();
	var Ye = $("body");
	document.title,
	!
	function(t) {
		var e;
		t.fn.textWidth = function() {
			e || (e = t('<div data-for="result" style="clear:both;display:block;visibility:hidden;position:absolute;top:0;"><span style="width;inherit;margin:0;font:16px/22px arial;"></span></div>').appendTo("body").find("span")),
			e.html(escapeHTML(t(this).val()));
			var n = e.width();
			return n
		}
	} (jQuery);
	var Ze = !1;
	$(window).on("swap_dom_ready",
	function(t, e) {
		var n = ""; ! e || !e.real_wd || e.no_predict && 6 != e.pstg || (n = e.real_wd),
		_(n),
		T(e)
	}),
	$(window).on("swap_end",
	function(t, e) {
		e && (window.cfpromise = new $.Deferred, De && (clearTimeout(De), De = !1, Re = null), e.confirm = !1, e.force ? D(e, Fe, 20)() : (Re = D(e, Fe, 21), De = setTimeout(Re, Z)))
	}),
	$(window).on("indexOff",
	function(t, e) {
		He.done(function() {
			_(e.p("wd"))
		})
	}),
	ie.support() && "_blank" != we.attr("target") && He.done(function() {
		Ue.setMaxNum(te)
	});
	var tn, en = !1,
	nn = !1;
	_e.mousedown(function() {
		nn = !1
	}).delegate("a,input", "focus",
	function() {
		nn = !1
	});
	var on, sn, rn;
	$(window).on("swap_end",
	function(t, e) {
		e || (bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, g()),
		rn = setTimeout(function() {
			0 == $("#content_left,.result,.content_none").length && n(15, 86400)
		},
		1e4)
	}),
	ie.init(),
	$(function() {
		var t = $("script").last(),
		e = $("head");
		he = function() {
			t.nextAll().not("[data-for]").not("#passport-login-pop").remove(),
			e.find("*").not("[data-for]").not("meta").not("title").not("script[async]").not('link[href*="passport"]').remove()
		}
	}),
	bds.comm.resultPage && O(),
	Ye.delegate("#s_tab a", "mousedown",
	function() {
		setHeadUrl(this)
	}).delegate("#s_tab a", "focusin",
	function() {
		setHeadUrl(this)
	}),
	Ae.delegate("#page strong+a,#page a.n", "mouseover",
	function() {
		A({
			env: new p(r($(this).attr("href"))),
			force: !1,
			use_cache: !0,
			no_predict: !0,
			shouldShow: !1,
			pstg: 4
		})
	});
	var an, cn, dn, ln, un;
	He.done(function() {
		$(document).mousemove(P)
	}),
	$("#u .back_org").click(function() {
		var t = new Date;
		t.setTime((new Date).getTime() + 110376e7),
		Cookie.set("ORIGIN", 2, document.domain, "/", t),
		Pe ? ne.replace(Pe.buildSyncSearchUrl({
			_r: Math.random()
		})) : ne.href = "/"
	}),
	$(window).scroll(function() {
		var t, e = $("#head"),
		n = $(window),
		o = 40,
		i = e.offset().top,
		s = function() {
			t && (clearTimeout(t), t = !1),
			t = setTimeout(function() {
				var s = n.scrollTop();
				s > o + i ? t = setTimeout(function() {
					e.addClass("s_down"),
					He.done(function() {
						Oe.hide()
					})
				},
				0) : o + i >= s && (t = setTimeout(function() {
					e.removeClass("s_down")
				},
				0))
			},
			50)
		};
		return s(),
		s
	} ()),
	$e.bind("paste",
	function() {
		if (! (window.__disable_index_predict && 0 == pageState || se || ae)) {
			var t = this,
			e = this.value;
			Me = !0,
			setTimeout(function() {
				t.value && t.value != e && A({
					env: (new p).clone({
						wd: $.trim(t.value)
					}),
					force: !1,
					use_cache: !0,
					no_predict: !0,
					shouldShow: bds.comm.supportis,
					pstg: 2
				})
			},
			0)
		}
	})
}
function addEV(t, e, n) {
	window.attachEvent ? t.attachEvent("on" + e, n) : window.addEventListener && t.addEventListener(e, n, !1)
}
function user_c(t) {
	var e = "",
	n = "",
	o = "",
	i = "",
	s = encodeURIComponent(window.document.location.href),
	r = window["BD_PS_C" + (new Date).getTime()] = new Image,
	a = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
	for (v in t) {
		switch (v) {
		case "title":
			o = encodeURIComponent(t[v].replace(/<[^<>]+>/g, ""));
			break;
		case "url":
			o = encodeURIComponent(t[v]);
			break;
		default:
			o = t[v]
		}
		e += v + "=" + o + "&"
	}
	return i = "&mu=" + s,
	r.src = a + "/v.gif?pid=201&pj=psuser&" + e + "path=" + s + "&wd=" + n + "&t=" + (new Date).getTime(),
	!0
}
function initPassV3() {
	var t = bds.comm.passnew ? 3 : 2;
	bds.se.passv3 = passport.pop.init({
		apiOpt: {
			loginType: 1,
			product: "mn",
			u: window.document.location.href,
			safeFlag: 0,
			qrcode: t,
			staticPage: location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html"
		},
		cache: !1,
		tangram: !0,
		authsite: ["qzone", "tsina"],
		authsiteCfg: {
			act: "implicit",
			display: "popup",
			jumpUrl: location.protocol + "//www.baidu.com/cache/user/html/xd.html",
			onBindSuccess: function(t, e) {
				var n = decodeURIComponent(e.passport_uname || e.displayname);
				return bds.se.login.success(n),
				!1
			}
		},
		onLoginSuccess: function(t) {
			t.returnValue = !1;
			var e = t.rsp.data.userName || t.rsp.data.mail || t.rsp.data.phoneNumber;
			bds.se.login.success(e)
		},
		onSubmitStart: function() {},
		onSubmitedErr: function() {},
		onSystemErr: function() {},
		onShow: function() {},
		onHide: function() {
			bds.se.login.setSubpro(""),
			bds.se.login.setMakeText("")
		},
		onDestroy: function() {}
	})
}
function isp_hijack(t) {
	var e, n, o, i = document.getElementById("wrapper"),
	s = !1;
	bds.comm.query || (s = !0),
	1 == t.stat && (e = document.createElement("div"), e.innerHTML = '<div style="zoom:1;_margin-left:1024px;"><div style="position:relative;_float:left;_margin-left:-1024px;"><div style="width:100%;min-width:1024px;"><div style="border:2px solid #fd9162;zoom:1;overflow:hidden;padding:0 0 6px 12px;"><div style="position:relative;width:100%;*overflow:auto;padding-top:10px;"><div style="height:18px;margin-bottom:6px;"><i class="c-icon" style="width:18px;height:18px;background-position:-168px -72px;"></i><strong style="display:inline-block;margin-left:8px;font-size:14px;color:#666;">鐧惧害鎻愮ず鎮細</strong></div><span style="display:block;color:#333;text-indent:26px;font-size:13px;">鎴戜滑鍙戠幇褰撳墠鎮ㄥ彲鑳藉彈鍒板紓甯稿箍鍛婂脊绐楃殑褰卞搷锛岄€氬父杩欐槸鍙楃涓夋柟鎭舵剰鍔寔瀵艰嚧銆備娇鐢� <a href="http://shadu.baidu.com/landingpage/competing.html?from=10064" target="_blank" style="color:#0000D0;text-decoration:underline">闃叉伓鎰忓箍鍛婁笓鐗堟潃姣掕蒋浠�</a>锛屽彲鏈夋晥鏀瑰杽鎮ㄧ殑涓婄綉浣撻獙锛屽厤鍙楁伓鎰忓箍鍛婄殑鍥版壈銆�</span><a id="isp-close-btn" style="display:inline-block;width:9px;height:9px;position:absolute;top:6px;right:6px;background:url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/wsCloseBtn2_0047ae2.png) no-repeat;" href="javascript:void(0);"></a></div></div></div></div></div>', s ? i.insertBefore(e, i.children[0]) : (i.style.position = "relative", document.getElementById("u").style.top = 0, e.style.margin = "-6px 0 8px 0", document.body.insertBefore(e, i)), n = document.getElementById("isp-close-btn"), o = n.parentNode.getElementsByTagName("a")[0], n.onclick = function() {
		s ? i.removeChild(e) : (document.body.removeChild(e), i.style.position = "", document.getElementById("u").style.top = "4px")
	},
	n.onmousedown = function() {
		ns_c({
			fm: "behs",
			tab: "tj_notice",
			cont: "jcbro",
			action: "close",
			area: "topbar"
		})
	},
	o.onmousedown = function() {
		ns_c({
			fm: "behs",
			tab: "tj_notice",
			cont: "jcbro",
			action: "click",
			area: "topbar"
		})
	},
	ns_c({
		fm: "behs",
		tab: "tj_notice",
		cont: "jcbro",
		action: "show",
		area: "topbar"
	}))
}
function isbase64(t) {
	function e() {
		p = {
			left: $.Deferred(),
			right: $.Deferred()
		}
	}
	function n(t, e) {
		g++;
		var t = t || [],
		e = e || [];
		if (t = $.grep(t,
		function(t) {
			return f.right.hasOwnProperty(t) ? !1 : (f.right[t] = !1, !0)
		}), e = $.grep(e,
		function(t) {
			return f.left.hasOwnProperty(t) ? !1 : (f.left[t] = !1, !0)
		}), 2 == c.b64Exp && e.length > 0 && (h = !0, s(e, "left", "reql")), t.length > 0) if (t.length > 12) {
			var n = Math.round(t.length / 2),
			o = [],
			i = [];
			$.each(t,
			function(t, e) {
				n > t ? o.push(e) : i.push(e)
			}),
			s(o, "right", "reqr2"),
			s(i, "right", "reqr1")
		} else s(t, "right", "reqr")
	}
	function o(t) {
		for (var e = t,
		n = 0; __callback_names.hasOwnProperty(t) || window[t];) t = e + "_" + n,
		n++;
		return __callback_names[t] = 1,
		t
	}
	function i(t) {
		if ("string" == typeof t) {
			var e, n = 0,
			o = 0;
			for (e = 0; e < t.length; e++) o = e % 20 + 1,
			n += t.charCodeAt(e) << o;
			return Math.abs(n)
		}
		return 0
	}
	function s(t, e, n) {
		var s = l + "image?imglist=" + t.join(","),
		r = i(t.join(""));
		r = "cb_" + (r + "").substr(Math.max(0, r.length - 8), 8) + "_" + v.length,
		r = o(r),
		s += "&cb=" + r;
		var a = 1 * new Date,
		c = $.ajax({
			url: s,
			cache: !0,
			dataType: "jsonp",
			jsonp: !1,
			timeout: 1500,
			jsonpCallback: r,
			success: function(t) {
				u[n] = 1 * new Date - a,
				"right" == e ? S(t) : "left" == e && I(t)
			}
		});
		c.always(function() {
			delete __callback_names[r]
		}),
		v.push(c)
	}
	function r() {
		var t = v.concat(p.left, p.right),
		e = b = $.when.apply($, t);
		b.always(function() { + new Date,
			e === b && (2 == c.b64Exp && _("left"), _("right"))
		})
	}
	function a(t, e) {
		try {
			t.onerror = function() {
				C(this)
			},
			m.push({
				obj: t,
				loaded: !1
			}),
			t.onload = function() {
				for (var t = 0; t < m.length; t++) {
					var e = m[t];
					e.obj == this && (e.loaded = !0)
				}
			},
			t.src = "data:image/jpeg;base64," + e
		} catch(n) {
			C(t)
		}
	}
	var c;
	bds && bds._base64 ? c = bds._base64: (c = {
		domain: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://b1.bdstatic.com/") : "http://b1.bdstatic.com/",
		b64Exp: -1,
		pdc: !1,
		sep: 16
	},
	bds._base64 = c);
	var d = {
		left: "content_left",
		right: "container"
	},
	l = c.domain,
	u = {},
	m = [],
	p = {
		left: $.Deferred(),
		right: $.Deferred()
	},
	f = {
		left: {},
		right: {}
	},
	h = !1,
	g = 0,
	b = null;
	c.inline = !1;
	var v = [];
	t.onSendlog(function() {
		var e = [];
		u && $.each(u,
		function(t, n) {
			e.push(t + "_" + n)
		}),
		t.setParam("cus_cusval", e.join("|")),
		L.isinline() && (t.setParam("cus_b64il", L.ilsum), L.ilparseTime && t.setParam("cus_b64ilpt", L.ilparseTime), L.ilrenderTime && t.setParam("cus_b64ilrt", L.ilrenderTime))
	});
	var w = function(t, e, n, o) {
		if (o = o ? $(o).find("#" + d[e])[0] : document.getElementById(d[e])) for (var i = o.getElementsByTagName("IMG"), s = 0; s < i.length; s++) {
			var r = i[s].getAttribute(n);
			r && (t.hasOwnProperty(r) && t[r] ? a(i[s], t[r]) : C(i[s]))
		}
	},
	_ = function(t) {
		w(f[t], t, "data-b64-id")
	},
	y = !1,
	x = !1,
	T = function(t, e) {
		y || w(t, "right", "data-b64il-id", e),
		e && (y = !0),
		x = !0
	},
	k = 0,
	C = function(e) { (e.getAttribute("data-b64-id") || e.getAttribute("data-b64il-id")) && null != e.getAttribute("data-src") && (e.src = e.getAttribute("data-src"), t.setParam("cus_b64fails", ++k))
	},
	S = function(t) {
		D(t, "right")
	},
	I = function(t) {
		D(t, "left")
	},
	D = function(t, e) {
		for (var n in t) t.hasOwnProperty(n) && (f[e][n] = t[n])
	},
	R = function(t) {
		p[t].resolve()
	},
	A = function() {
		f = null,
		m = null,
		p = null,
		$.each(v,
		function() {
			this.abort()
		})
	},
	L = {
		loadImg: n,
		setDomLoad: R,
		end: r,
		isinline: function() {
			return x
		},
		restart: e,
		destroy: A,
		reqT: u,
		inline: T
	};
	return L
}
function formatDate(t, e) {
	var n = function(t) {
		return t > 9 ? t: "0" + t
	};
	return ("number" == typeof t || "string" == typeof t) && (t = new Date(t)),
	[t.getFullYear(), n(t.getMonth() + 1), n(t.getDate())].join(e || "")
}
function baseChangeUrl(t) {
	bds.comm.search_tool.st && bds.comm.search_tool.et && bds.comm.search_tool.stftype && t.indexOf("&gpc=") < 0 && (t += "&gpc=" + encodeURIComponent("stf=" + bds.comm.search_tool.st + "," + bds.comm.search_tool.et + "|stftype=" + bds.comm.search_tool.stftype)),
	bds.comm.search_tool.si && t.indexOf("&si=") < 0 && (t += "&si=" + encodeURIComponent(bds.comm.search_tool.si) + "&ct=2097152"),
	bds.comm.search_tool.sl_lang && t.indexOf("&sl_lang=") < 0 && (t += "&rsv_srlang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), t += "&sl_lang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), t += "&rsv_rq=" + encodeURIComponent(bds.comm.search_tool.sl_lang)),
	changeUrl(t)
}
function langChangeUrl(t, e, n) {
	ns_c({
		fm: "advTool",
		qid: bds.comm.qid,
		title: encodeURI(n),
		rsv_advTool_lang: e
	}),
	baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + t + "=" + encodeURIComponent(e) + "&rsv_srlang=" + encodeURIComponent(e) + "&rsv_rq=" + encodeURIComponent(e))
}
function advChangeUrl(t, e, n, o) {
	if ( - 1 != e.indexOf("=")) var i = 1;
	else var i = 0;
	ns_c({
		fm: "advTool",
		qid: bds.comm.qid,
		title: encodeURI(n),
		rsv_advTool_time: o,
		rsv_advTool_stet: e.substr(4).replace(",", "_")
	}),
	baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + t + "=" + encodeURIComponent(e) + "&tfflag=" + i)
}
function fileChangeUrl(t, e, n) {
	ns_c({
		fm: "advTool",
		qid: bds.comm.qid,
		title: encodeURI(e),
		rsv_advTool_ft: n
	}),
	baseChangeUrl("wd=" + encodeURIComponent(queryReplace("filetype", t)))
}
function queryReplace(t, e) {
	if (!t || "filetype" != t && "site" != t) return o;
	var n = new RegExp("(" + t + "):[^\\s]*[ ]?"),
	o = $("#kw").val();
	return " " == e || null == e ? o.replace(n, "") : o.match(n) ? o.replace(n, "$1:" + e + " ") : t + ":" + e + " " + o
}
function extChangeUrl(t) {
	t ? (ns_c({
		fm: "advTool",
		qid: bds.comm.qid,
		title: encodeURI("绮剧‘鍖归厤"),
		rsv_advTool_ext: 1
	}), baseChangeUrl('wd="' + encodeURIComponent($("#kw").val()) + '"')) : (ns_c({
		fm: "advTool",
		qid: bds.comm.qid,
		title: encodeURI("鏅鸿兘鍖归厤"),
		rsv_advTool_ext: 0
	}), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/^\"(.*)\"$/, "$1"))))
}
var define, require, esl; !
function(t) {
	function e(t) {
		m(t, P) || (z[t] = 1)
	}
	function n(t, e) {
		function n(t) {
			0 === t.indexOf(".") && i.push(t)
		}
		var i = [];
		if ("string" == typeof t ? n(t) : A(t,
		function(t) {
			n(t)
		}), i.length > 0) throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + i.join(", "));
		var s = H.waitSeconds;
		return s && t instanceof Array && (U && clearTimeout(U), U = setTimeout(o, 1e3 * s)),
		F(t, e)
	}
	function o() {
		function t(r, a) {
			if (!s[r] && !m(r, P)) {
				s[r] = 1;
				var c = E[r];
				c ? (a || !m(r, M) || c.hang) && (o[r] || (o[r] = 1, e.push(r)), A(c.depMs,
				function(e) {
					t(e.absId, e.hard)
				})) : i[r] || (i[r] = 1, n.push(r))
			}
		}
		var e = [],
		n = [],
		o = {},
		i = {},
		s = {};
		for (var r in z) t(r, 1);
		if (e.length || n.length) throw new Error("[MODULE_TIMEOUT]Hang(" + (e.join(", ") || "none") + ") Miss(" + (n.join(", ") || "none") + ")")
	}
	function i(t) {
		A(W,
		function(e) {
			a(t, e.deps, e.factory)
		}),
		W.length = 0
	}
	function s(t, e, n) {
		if (null == n && (null == e ? (n = t, t = null) : (n = e, e = null, t instanceof Array && (e = t, t = null))), null != n) {
			var o = window.opera;
			if (!t && document.attachEvent && (!o || "[object Opera]" !== o.toString())) {
				var i = j();
				t = i && i.getAttribute("data-require-id")
			}
			t ? a(t, e, n) : W[0] = {
				deps: e,
				factory: n
			}
		}
	}
	function r() {
		var t = H.config[this.id];
		return t && "object" == typeof t ? t: {}
	}
	function a(t, e, n) {
		E[t] || (E[t] = {
			id: t,
			depsDec: e,
			deps: e || ["require", "exports", "module"],
			factoryDeps: [],
			factory: n,
			exports: {},
			config: r,
			state: O,
			require: T(t),
			depMs: [],
			depMkv: {},
			depRs: [],
			hang: 0
		})
	}
	function c(t) {
		var e = E[t];
		if (e && !m(t, N)) {
			var n = e.deps,
			o = e.factory,
			i = 0;
			"function" == typeof o && (i = Math.min(o.length, n.length), !e.depsDec && o.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,
			function(t, e, o) {
				n.push(o)
			}));
			var s = [],
			r = [];
			A(n,
			function(n, o) {
				var a, c, d = I(n),
				l = k(d.mod, t);
				l && !B[l] ? (d.res && (c = {
					id: n,
					mod: l,
					res: d.res
				},
				r.push(n), e.depRs.push(c)), a = e.depMkv[l], a || (a = {
					id: d.mod,
					absId: l,
					hard: i > o
				},
				e.depMs.push(a), e.depMkv[l] = a, s.push(l))) : a = {
					absId: l
				},
				i > o && e.factoryDeps.push(c || a)
			}),
			e.state = N,
			u(t),
			b(s),
			r.length && e.require(r,
			function() {
				A(e.depRs,
				function(e) {
					e.absId || (e.absId = k(e.id, t))
				}),
				d()
			})
		}
	}
	function d() {
		for (var t in z) c(t),
		l(t),
		p(t)
	}
	function l(t) {
		function e(t) {
			if (c(t), !m(t, N)) return ! 1;
			if (m(t, M) || n[t]) return ! 0;
			n[t] = 1;
			var o = E[t],
			i = !0;
			return A(o.depMs,
			function(t) {
				i = e(t.absId) && i
			}),
			i && A(o.depRs,
			function(t) {
				return i = !!t.absId
			}),
			i && !m(t, M) && (o.state = M),
			n[t] = 0,
			i
		}
		var n = {};
		e(t)
	}
	function u(e) {
		function n() {
			if (!o && i.state === M) {
				o = 1;
				var n = 1;
				if (A(i.factoryDeps,
				function(t) {
					var e = t.absId;
					return B[e] ? void 0 : (p(e), n = m(e, P))
				}), n) {
					try {
						var s = i.factory,
						r = "function" == typeof s ? s.apply(t, f(i.factoryDeps, {
							require: i.require,
							exports: i.exports,
							module: i
						})) : s;
						null != r && (i.exports = r),
						i.invokeFactory = null
					} catch(a) {
						throw i.hang = 1,
						a
					}
					g(e)
				}
			}
		}
		var o, i = E[e];
		i.invokeFactory = n
	}
	function m(t, e) {
		return E[t] && E[t].state >= e
	}
	function p(t) {
		var e = E[t];
		e && e.invokeFactory && e.invokeFactory()
	}
	function f(t, e) {
		var n = [];
		return A(t,
		function(t, o) {
			"object" == typeof t && (t = t.absId),
			n[o] = e[t] || E[t].exports
		}),
		n
	}
	function h(t, e) {
		if (m(t, P)) return void e();
		var n = G[t];
		n || (n = G[t] = []),
		n.push(e)
	}
	function g(t) {
		var e = E[t];
		e.state = P,
		delete z[t];
		for (var n = G[t] || [], o = n.length; o--;) n[o]();
		n.length = 0,
		G[t] = null
	}
	function b(e, n, o) {
		function i() {
			if ("function" == typeof n && !s) {
				var o = 1;
				A(e,
				function(t) {
					return B[t] ? void 0 : o = !!m(t, P)
				}),
				o && (s = 1, n.apply(t, f(e, B)))
			}
		}
		var s = 0;
		A(e,
		function(t) {
			B[t] || m(t, P) || (h(t, i), (t.indexOf("!") > 0 ? w: v)(t, o))
		}),
		i()
	}
	function v(e) {
		function n() {
			var t = K[e];
			q(t || e, o)
		}
		function o() {
			if (r) {
				var n;
				"function" == typeof r.init && (n = r.init.apply(t, f(a, B))),
				null == n && r.exports && (n = t, A(r.exports.split("."),
				function(t) {
					return n = n[t],
					!!n
				})),
				s(e, a,
				function() {
					return n || {}
				})
			} else i(e);
			d()
		}
		if (!Q[e] && !E[e]) {
			Q[e] = 1;
			var r = H.shim[e];
			r instanceof Array && (H.shim[e] = r = {
				deps: r
			});
			var a = r && (r.deps || []);
			a ? (A(a,
			function(t) {
				H.shim[t] || (H.shim[t] = {})
			}), F(a, n)) : n()
		}
	}
	function w(t, e) {
		function n(e) {
			c.exports = e || !0,
			g(t)
		}
		function o(o) {
			var i = e ? E[e].require: F;
			o.load(a.res, i, n, r.call({
				id: t
			}))
		}
		if (!E[t]) {
			var s = K[t];
			if (s) return void v(s);
			var a = I(t),
			c = {
				id: t,
				state: N
			};
			E[t] = c,
			n.fromText = function(t, e) {
				new Function(e)(),
				i(t)
			},
			o(F(a.mod))
		}
	}
	function _(t, e) {
		var n = D(t, 1, e);
		return n.sort(L),
		n
	}
	function y() {
		function t(t) {
			K[C(t)] = n
		}
		H.baseUrl = H.baseUrl.replace(/\/$/, "") + "/",
		V = _(H.paths),
		J = _(H.map, 1),
		A(J,
		function(t) {
			t.v = _(t.v)
		});
		var e = J[J.length - 1];
		e && "*" === e.k && A(J,
		function(t) {
			t != e && (t.v = t.v.concat(e.v))
		}),
		X = [],
		A(H.packages,
		function(t) {
			var e = t;
			"string" == typeof t && (e = {
				name: t.split("/")[0],
				location: t,
				main: "main"
			}),
			e.location = e.location || e.name,
			e.main = (e.main || "main").replace(/\.js$/i, ""),
			e.reg = R(e.name),
			X.push(e)
		}),
		X.sort(L),
		Y = _(H.urlArgs, 1),
		K = {};
		for (var n in H.bundles) A(H.bundles[n], t)
	}
	function x(t, e, n) {
		A(e,
		function(e) {
			return e.reg.test(t) ? (n(e.v, e.k, e), !1) : void 0
		})
	}
	function $(t, e) {
		var n = /(\.[a-z0-9]+)$/i,
		o = /(\?[^#]*)$/,
		i = "",
		s = t,
		r = "";
		o.test(t) && (r = RegExp.$1, t = t.replace(o, "")),
		n.test(t) && (i = RegExp.$1, s = t.replace(n, "")),
		null != e && (s = k(s, e));
		var a, c = s;
		return x(s, V,
		function(t, e) {
			c = c.replace(e, t),
			a = 1
		}),
		a || x(s, X,
		function(t, e, n) {
			c = c.replace(n.name, n.location)
		}),
		/^([a-z]{2,10}:\/)?\//i.test(c) || (c = H.baseUrl + c),
		c += i + r,
		x(s, Y,
		function(t) {
			c += (c.indexOf("?") > 0 ? "&": "?") + t
		}),
		c
	}
	function T(t) {
		function n(n, i) {
			if ("string" == typeof n) {
				if (!o[n]) {
					var s = k(n, t);
					if (p(s), !m(s, P)) throw new Error('[MODULE_MISS]"' + s + '" is not exists!');
					o[n] = E[s].exports
				}
				return o[n]
			}
			if (n instanceof Array) {
				var r = [],
				a = [];
				A(n,
				function(n, o) {
					var i = I(n),
					s = k(i.mod, t),
					c = i.res,
					d = s;
					if (c) {
						var l = s + "!" + c;
						0 !== c.indexOf(".") && K[l] ? s = d = l: d = null
					}
					a[o] = d,
					e(s),
					r.push(s)
				}),
				b(r,
				function() {
					A(a,
					function(o, i) {
						null == o && (o = a[i] = k(n[i], t), e(o))
					}),
					b(a, i, t),
					d()
				},
				t),
				d()
			}
		}
		var o = {};
		return n.toUrl = function(e) {
			return $(e, t || "")
		},
		n
	}
	function k(t, e) {
		if (!t) return "";
		e = e || "";
		var n = I(t);
		if (!n) return t;
		var o = n.res,
		i = S(n.mod, e);
		if (x(e, J,
		function(t) {
			x(i, t,
			function(t, e) {
				i = i.replace(e, t)
			})
		}), i = C(i), o) {
			var s = m(i, P) && F(i);
			o = s && s.normalize ? s.normalize(o,
			function(t) {
				return k(t, e)
			}) : k(o, e),
			i += "!" + o
		}
		return i
	}
	function C(t) {
		return A(X,
		function(e) {
			var n = e.name;
			return n === t ? (t = n + "/" + e.main, !1) : void 0
		}),
		t
	}
	function S(t, e) {
		if (0 !== t.indexOf(".")) return t;
		for (var n = e.split("/").slice(0, -1).concat(t.split("/")), o = [], i = 0; i < n.length; i++) {
			var s = n[i];
			switch (s) {
			case ".":
				break;
			case "..":
				o.length && ".." !== o[o.length - 1] ? o.pop() : o.push(s);
				break;
			default:
				s && o.push(s)
			}
		}
		return o.join("/")
	}
	function I(t) {
		var e = t.split("!");
		return e[0] ? {
			mod: e[0],
			res: e[1]
		}: void 0
	}
	function D(t, e, n) {
		var o = [];
		for (var i in t) if (t.hasOwnProperty(i)) {
			var s = {
				k: i,
				v: t[i]
			};
			o.push(s),
			e && (s.reg = "*" === i && n ? /^/: R(i))
		}
		return o
	}
	function R(t) {
		return new RegExp("^" + t + "(/|$)")
	}
	function A(t, e) {
		if (t instanceof Array) for (var n = 0,
		o = t.length; o > n && e(t[n], n) !== !1; n++);
	}
	function L(t, e) {
		var n = t.k || t.name,
		o = e.k || e.name;
		return "*" === o ? -1 : "*" === n ? 1 : o.length - n.length
	}
	function j() {
		if (Z) return Z;
		if (te && "interactive" === te.readyState) return te;
		for (var t = document.getElementsByTagName("script"), e = t.length; e--;) {
			var n = t[e];
			if ("interactive" === n.readyState) return te = n,
			n
		}
	}
	function q(t, e) {
		function n() {
			var t = o.readyState; ("undefined" == typeof t || /^(loaded|complete)$/.test(t)) && (o.onload = o.onreadystatechange = null, o = null, e())
		}
		var o = document.createElement("script");
		o.setAttribute("data-require-id", t),
		o.src = $(t + ".js"),
		o.async = !0,
		o.readyState ? o.onreadystatechange = n: o.onload = n,
		Z = o,
		ne ? ee.insertBefore(o, ne) : ee.appendChild(o),
		Z = null
	}
	var U, E = {},
	O = 1,
	N = 2,
	M = 3,
	P = 4,
	z = {},
	B = {
		require: n,
		exports: 1,
		module: 1
	},
	F = T(),
	H = {
		baseUrl: "./",
		paths: {},
		config: {},
		map: {},
		packages: [],
		shim: {},
		waitSeconds: 0,
		bundles: {},
		urlArgs: {}
	};
	n.version = "2.1.4",
	n.loader = "esl",
	n.toUrl = F.toUrl;
	var W = [];
	s.amd = {};
	var G = {},
	Q = {};
	n.config = function(t) {
		if (t) {
			for (var e in H) {
				var n = t[e],
				o = H[e];
				if (n) if ("urlArgs" === e && "string" == typeof n) H.urlArgs["*"] = n;
				else if (o instanceof Array) o.push.apply(o, n);
				else if ("object" == typeof o) for (var i in n) o[i] = n[i];
				else H[e] = n
			}
			y()
		}
	},
	y();
	var V, X, J, K, Y, Z, te, ee = document.getElementsByTagName("head")[0],
	ne = document.getElementsByTagName("base")[0];
	ne && (ee = ne.parentNode),
	define || (define = s, require || (require = n), esl = n);
	var oe; !
	function() {
		for (var t = document.getElementsByTagName("script"), e = t.length; e--;) {
			var n = t[e];
			if (oe = n.getAttribute("data-main")) break
		}
	} (),
	oe && setTimeout(function() {
		n([oe])
	},
	4)
} (this);
var bds = window.bds || {};
bds.amd = {
	keys: {},
	addPaths: function(t) {
		"object" == typeof t && (require.config({
			paths: t
		}), $.extend(bds.amd.keys, t))
	},
	exist: function(t) {
		return t && "undefined" != typeof bds.amd.keys[t] ? !0 : !1
	}
},
function() {
	var t = bds.util && bds.util.domain ? bds.util.domain.get("http://s1.bdstatic.com") : "http://s1.bdstatic.com",
	e = bds.util && bds.util.domain ? bds.util.domain.get("http://ecmb.bdimg.com") : "http://ecmb.bdimg.com";
	require.config({
		baseUrl: t + "/r/www/cache/biz",
		packages: [{
			name: "ecma",
			location: e + "/public01"
		},
		{
			name: "ecmb",
			location: e + "/public01"
		}],
		paths: {
			aladdin: t + "/r/www/aladdin",
			ui: t + "/r/www/cache/amd/ui",
			"ui/config": t + "/r/www/cache/amd/ui/Control",
			"ui/lib": t + "/r/www/cache/amd/ui/Control",
			"ui/Control": t + "/r/www/cache/amd/ui/Control"
		},
		urlArgs: {
			"ui/ImgZoomHover": "20141104",
			"ui/ImgZoomHover1": "20141104",
			"ui/ImgZoomHover2": "20141104",
			"ui/ImgZoomHover3": "20141104"
		}
	})
} (),
bds.amd.addPaths({
	"voice/js/voice": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_1e62c0f",
	"plugins/swfobject": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/swfobject_0178953",
	"soutu/js/tu": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/js/tu_329aca4"
}),
bds && bds.comm && (bds.comm.did = function() {
	for (var t = "",
	e = 0; 32 > e; e++) t += Math.floor(16 * Math.random()).toString(16);
	return t
} (), bds.comm.isAsync = function() {
	var t = "onhashchange" in window,
	e = "onpopstate" in window;
	return (e || t) && 1 != Cookie.get("ISSW") && !window.__disable_preload
} ());
try {
	window.MutationObserver = window.WebKitMutationObserver = window.MozMutationObserver = null
} catch(e) {}
jQuery && jQuery.extend({
	stringify: function(t) {
		function e(t) {
			return /["\\\x00-\x1f]/.test(t) && (t = t.replace(/["\\\x00-\x1f]/g,
			function(t) {
				var e = i[t];
				return e ? e: (e = t.charCodeAt(), "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16))
			})),
			'"' + t + '"'
		}
		function n(t) {
			var e, n, o, i = ["["],
			s = t.length;
			for (n = 0; s > n; n++) switch (o = t[n], typeof o) {
			case "undefined":
			case "function":
			case "unknown":
				break;
			default:
				e && i.push(","),
				i.push($.stringify(o)),
				e = 1
			}
			return i.push("]"),
			i.join("")
		}
		if ("JSON" in window) return JSON.stringify(t);
		var o = typeof t;
		if ("object" != o || null === t) return "string" == o && (t = '"' + t + '"'),
		String(t);
		var i = {
			"\b": "\\b",
			"	": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};
		switch (typeof t) {
		case "undefined":
			return "undefined";
		case "number":
			return isFinite(t) ? String(t) : "null";
		case "string":
			return e(t);
		case "boolean":
			return String(t);
		default:
			if (null === t) return "null";
			if ("[object Array]" === Object.prototype.toString.call(t)) return n(t);
			var s, r, a = ["{"],
			c = $.stringify;
			for (var d in t) if (Object.prototype.hasOwnProperty.call(t, d)) switch (r = t[d], typeof r) {
			case "undefined":
			case "unknown":
			case "function":
				break;
			default:
				s && a.push(","),
				s = 1,
				a.push(c(d) + ":" + c(r))
			}
			return a.push("}"),
			a.join("")
		}
	},
	format: function(t, e) {
		t = String(t);
		var n = Array.prototype.slice.call(arguments, 1),
		o = Object.prototype.toString;
		return n.length ? (n = 1 == n.length && null !== e && /\[object Array\]|\[object Object\]/.test(o.call(e)) ? e: n, t.replace(/#\{(.+?)\}/g,
		function(t, e) {
			var i = n[e];
			return "[object Function]" == o.call(i) && (i = i(e)),
			"undefined" == typeof i ? "": i
		})) : t
	},
	subByte: function(t, e, n) {
		var o = [],
		i = t.split("");
		n = n || "鈥�";
		for (var s = 0,
		r = i.length; r > s; s++) i[s].charCodeAt(0) > 255 && o.push("*"),
		o.push(i[s]);
		return e && e > 0 && o.length > e ? i = o.join("").substring(0, e - 1).replace(/\*/g, "") + n: t
	},
	getByteLength: function(t) {
		for (var e = [], n = t.split(""), o = 0, i = n.length; i > o; o++) n[o].charCodeAt(0) > 255 && e.push("*"),
		e.push(n[o]);
		return e.length
	},
	_isValidKey: function(t) {
		return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)
	},
	setCookie: function(t, e, n) {
		if (e = encodeURIComponent(e), jQuery._isValidKey(t)) {
			n = n || {};
			var o = n.expires;
			"number" == typeof n.expires && (o = new Date, o.setTime(o.getTime() + n.expires)),
			document.cookie = t + "=" + e + (n.path ? "; path=" + n.path: "") + (o ? "; expires=" + o.toGMTString() : "") + (n.domain ? "; domain=" + n.domain: "") + (n.secure ? "; secure": "")
		}
	},
	getCookie: function(t) {
		var e = "";
		if (jQuery._isValidKey(t)) {
			var n = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
			o = n.exec(document.cookie);
			if (o && (e = o[2] || null, "string" == typeof e)) return e = decodeURIComponent(e)
		}
		return null
	},
	removeCookie: function(t, e) {
		e = e || {},
		e.expires = new Date(0),
		jQuery.setCookie(t, "", e)
	},
	limitWd: function(t, e) {
		if ("" === t) return "";
		t += "";
		var n = t.split(""),
		o = n.length,
		i = 0,
		s = e || 255;
		if (o <= parseInt(s / 2)) return t;
		for (var r = 0; o > r; r++) {
			if (i += n[r].charCodeAt(0) > 255 ? 2 : 1, i === s) return n = t.substring(0, r + 1);
			if (i > s) return n = t.substring(0, r)
		}
		return t
	}
}),
$(window).on("resize",
function() {
	"pageState" in window && 0 != pageState && (bds.util.setContainerWidth(), bds.event.trigger("se.window_resize"))
}),
bds.util.addStyle = function(t) {
	if (isIE) {
		var e = document.createStyleSheet();
		e.cssText = t
	} else {
		var n = document.createElement("style");
		n.type = "text/css",
		n.appendChild(document.createTextNode(t)),
		document.getElementsByTagName("HEAD")[0].appendChild(n)
	}
},
bds.util.getContentRightHeight = function() {
	return $("#content_right").get(0) ? $("#content_right").get(0).offsetHeight: 0
},
bds.util.getContentLeftHeight = function() {
	return $("#content_left").get(0) ? $("#content_left").get(0).offsetHeight: 0
},
window.A || (window.bds = window.bds || {},
bds.util = bds.util || {},
bds.util.getWinWidth = function() {
	return window.document.documentElement.clientWidth
},
bds.util.setContainerWidth = function() {
	var t = G("container"),
	e = G("wrapper"),
	n = function(t, e) {
		e.className = e.className.replace(t, "")
	},
	o = function(t, e) {
		e.className = (e.className + " " + t).replace(/^\s+/g, "")
	},
	i = function(t, e) {
		return t.test(e.className)
	};
	bds.util.getWinWidth() < 1207 ? (t && (n(/\bcontainer_l\b/g, t), i(/\bcontainer_s\b/, t) || o("container_s", t)), e && (n(/\bwrapper_l\b/g, e), i(/\bwrapper_s\b/, e) || o("wrapper_s", e)), bds.comm.containerSize = "s") : (t && (n(/\bcontainer_s\b/g, t), i(/\bcontainer_l\b/, t) || o("container_l", t)), e && (n(/\bwrapper_s\b/g, e), i(/\bwrapper_l\b/, e) || o("wrapper_l", e)), bds.comm.containerSize = "l")
},
function() {
	var t = [],
	e = !1,
	n = function(t, e) {
		try {
			t.call(e)
		} catch(n) {}
	},
	o = function() {
		this.ids = [],
		this.has = !0,
		this.list = [],
		this.logs = [],
		this.loadTimes = [],
		this.groupData = [],
		this.mergeFns = [],
		this._currentContainer = null
	};
	window.A = bds.aladdin = {},
	n(o, window.A),
	bds.ready = function(o) {
		"function" == typeof o && (e ? n(o) : t.push(o))
	},
	bds.doReady = function() {
		for (e = !0; t.length;) n(t.shift())
	},
	bds.clearReady = function() {
		e = !1,
		t = []
	},
	A.__reset = o;
	var i = function() {
		var t = document.getElementsByTagName("script");
		return function() {
			var e = t[t.length - 1];
			window.currentScriptElem && (e = window.currentScriptElem);
			for (var n = e; n;) {
				if (n.className && /(?:^|\s)result(?:-op)?(?:$|\s)/.test(n.className) && (tplname = n.getAttribute("tpl"))) return n;
				n = n.parentNode
			}
		}
	} (),
	s = function(t, e, n) {
		var o;
		if (t.initIndex ? o = A.groupData[t.initIndex - 1] : (o = {
			container: t,
			data: {},
			handlers: []
		},
		t.initIndex = A.groupData.length + 1, A.groupData.push(o)), "function" == typeof e) o.handlers.push(e);
		else if ("object" == typeof e) for (var i in e) e.hasOwnProperty(i) && (o.data[i] = e[i]);
		else o.data[e] = n
	};
	A.init = A.setup = function(t, e) {
		if (void 0 !== t && null !== t) {
			var n = A._currentContainer || i();
			n && s(n, t, e)
		}
	},
	A.merge = function(t, e) {
		A.mergeFns.push({
			tplName: t,
			fn: e
		})
	}
} ()),
A.uiPrefix = "//www.baidu.com/cache/aladdin/ui/",
function() {
	var t = window.bds.aladdin,
	e = [],
	n = {},
	o = 0,
	i = function(t, e) {
		try {
			t.call(e)
		} catch(n) {}
	},
	s = function(t) {
		t.ajaxId = ++o,
		n[t.ajaxId] = t
	},
	r = function(t) {
		delete n[t.ajaxId]
	},
	a = function(t) {
		return t.ajaxId ? n.hasOwnProperty(t.ajaxId) : !1
	},
	c = function(t) {
		var e = {};
		if (t) try {
			var n = new Function("return " + t)();
			n && (e = n)
		} catch(o) {}
		return e
	},
	d = function() {
		for (var t, e, n = $(".result-op").get().concat($(".result").get()), o = {},
		i = 0; e = n[i]; i++)(t = e.getAttribute("tpl")) && (o[t] ? o[t].push(e) : o[t] = [e]);
		return o
	},
	l = [],
	u = [];
	t.addDisposeHandler = function(t) {
		u.push(t)
	},
	t.dispose = function() {
		for (; l.length;) {
			var t = l.shift();
			i(t.fn, t.obj)
		}
		for (var e = u,
		n = 0; n < e.length; n++) {
			var t = e[n];
			i(t.fn, t.obj)
		}
	},
	t.__clearDispose = function() {
		l = [],
		u = []
	},
	t.addDisposeHandler({
		obj: n,
		fn: function() {
			for (var t in n) n.hasOwnProperty(t) && delete n[t]
		}
	}),
	t._Aladdin = function() {
		this.p1 = 0,
		this.mu = null
	},
	$.extend(t._Aladdin.prototype, {
		_init: function() {
			var t, e = this;
			t = e.container;
			var n = c(e.container.getAttribute("data-click"));
			e.p1 = n.p1 || t.id,
			e.mu = n.mu || t.getAttribute("mu"),
			e.srcid = n.rsv_srcid || t.getAttribute("srcid")
		},
		q: function(t, e) {
			return e = e || "",
			$(this.container).find(e + "." + t).get()
		},
		qq: function(t, e) {
			return this.q(t, e)[0]
		},
		find: function(t) {
			return window.jQuery(t, this.container)
		},
		ready: function() {
			$(document).ready.apply(this, arguments)
		},
		ajax: function(e, n, o) {
			var i = t.AJAX,
			c = +new Date,
			d = o.params || {},
			l = {
				query: e,
				co: o.co || "",
				resource_id: n,
				t: c
			};
			$.extend(l, i.PARAMS),
			$.extend(l, d);
			var e = $.param(l),
			u = i.API_URL + "?" + e,
			m = function() {
				var e = new Image;
				e.src = $.format(i.ERR_URL, {
					url: u
				}),
				t.logs.push(e)
			},
			p = (new Date).getTime(),
			f = function(t) {
				var e = (new Date).getTime() - p,
				o = {
					fm: "opendataajax",
					srcid: n,
					time: e,
					status: t
				};
				ns_c(o)
			},
			h = function(t) {
				a(h) && (b(), 0 == t.status ? o.success(t.data) : (o.error && o.error(t.status), m()), f(0))
			},
			g = function() {
				a(g) && (b(), o.timeout && o.timeout(), m(), f(1))
			},
			b = function() {
				r(h),
				r(g)
			};
			s(h),
			s(g),
			$.ajax({
				url: u,
				scriptCharset: i.PARAMS.oe,
				timeout: i.TIMEOUT,
				dataType: "jsonp",
				jsonp: "cb",
				success: h,
				error: g
			})
		}
	}),
	t.AJAX = {
		API_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://opendata.baidu.com/api.php") : "http://opendata.baidu.com/api.php",
		ERR_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}") : "http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}",
		PARAMS: {
			ie: "utf8",
			oe: "gbk",
			cb: "op_aladdin_callback",
			format: "json",
			tn: "baidu"
		},
		TIMEOUT: 6e3
	},
	e.push(function(t) {
		var e = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1: void 0;
		if (e) {
			var n = document.charset;
			$.each(t.container.getElementsByTagName("form"),
			function(t, e) {
				var o = function() {
					var t = e.acceptCharset;
					t && "UNKNOWN" != t.toString().toUpperCase() && t != document.charset && (document.charset = t, setTimeout(function() {
						document.charset = n
					},
					1e3))
				};
				$(e).on("submit", o);
				var i = e.submit;
				e.submit = function() {
					o();
					try {
						i.call(e)
					} catch(t) {
						i()
					}
				}
			})
		}
	}),
	t.__runAla = function() {
		var n = d();
		$.each(t.mergeFns,
		function(e, o) {
			var i = n[o.tplName];
			i && $.each(i,
			function(e, n) {
				t._currentContainer = n,
				o.fn(),
				t._currentContainer = null
			})
		}),
		$.each(t.groupData,
		function(n, o) {
			var s, r, a, c = new t._Aladdin;
			c.container = o.container,
			c.data = o.data,
			c._init(),
			t.list.push(c);
			var d = o.handlers;
			for (s = new Date; d.length;) i(d.shift(), c);
			"function" == typeof c.dispose && (l.push({
				obj: c,
				fn: c.dispose
			}), c.dispose = null),
			r = new Date,
			a = {
				srcid: c.srcid
			},
			a.tpl = c.container.getAttribute("tpl"),
			a.time = r - s,
			t.loadTimes.push(a),
			$.each(e,
			function(t, e) {
				e.call(c, c)
			})
		})
	}
} (),
function() {
	function t(s, r) {
		var a = "string" == typeof s ? s.split(/\s*,\s*/) : s;
		if (a.length > 1) if (r) t(a.shift(),
		function() {
			a.length > 0 && t(a, r)
		});
		else for (; a.length;) t(a.shift());
		else {
			if (s = a[0], "jquery" === s && window.jQuery) return ! i.ui.jquery && (i.ui.jquery = window.jQuery),
			void(r && r());
			var c = s.replace(/\./g, "/"),
			d = s.replace(/^[\s\S]*\./, ""),
			l = i.uiPrefix + c + "/" + d;
			0 == c.search("style/") ? e(l + ".css", r) : (l += ".js", m.hasOwnProperty(s) ? "function" == typeof m[s] ? l = m[s](s, l) : "string" == typeof m[s] && (l = m[s]) : m.hasOwnProperty("*") && (l = m["*"](s, l)), r ? o(l, r) : n(l))
		}
	}
	function e(t, e) {
		if (e = e || u, t in s) return void e();
		var n = c.createElement("link");
		n.rel = "stylesheet",
		n.type = "text/css",
		n.href = t,
		n.setAttribute("data-for", "A.ui"),
		d.appendChild(n),
		s[t] = 1,
		e()
	}
	function n(t) {
		return l ? void o(t, u) : void(t in s || (c.write('<script charset="gb2312" type="text/javascript" src="' + t + '"></script>'), s[t] = 1))
	}
	function o(t, e) {
		if (e = e || u, t in s) return void e();
		if (t in r) return void a[t].push(e);
		r[t] = 1;
		var n = a[t] = [e],
		o = c.createElement("script");
		o.type = "text/javascript",
		o.charset = "gb2312",
		o.onload = o.onreadystatechange = function() {
			if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
				for (; n.length;) n.shift()();
				delete r[t],
				s[t] = 1,
				o.onload = o.onreadystatechange = null
			}
		},
		o.src = t,
		o.setAttribute("data-for", "A.ui"),
		d.insertBefore(o, d.firstChild)
	}
	var i = window.A,
	s = {},
	r = {},
	a = {},
	c = document,
	d = c.getElementsByTagName("head")[0],
	l = !1,
	u = (i.baidu,
	function() {}),
	m = {
		"*": function(t, e) {
			return e + "?v=20170208"
		},
		scrollbarv: function(t, e) {
			return e + "?v=20170208"
		},
		likeshare4: function(t, e) {
			return e + "?v=20170208"
		},
		mboxsingleton: function(t, e) {
			return e + "?v=20170208"
		},
		sms: function(t, e) {
			return e + "?v=20170208"
		},
		tab: function(t, e) {
			return e + "?v=20170208"
		},
		tabs: function(t, e) {
			return e + "?v=20170208"
		},
		musicplayer: function(t, e) {
			return e + "?v=20170208"
		},
		slider: function(t, e) {
			return e + "?v=20170208"
		},
		suggestion: function(t, e) {
			return e + "?v=20170208"
		},
		tabs5: function(t, e) {
			return e + "?v=20170208"
		},
		tabx: function(t, e) {
			return e + "?v=20170208"
		},
		dropdown1: function(t, e) {
			return e + "?v=20170208"
		},
		dropdown21: function(t, e) {
			return e + "?v=20170208"
		},
		advert: function(t, e) {
			return e + "?v=20170208"
		},
		advert2: function(t, e) {
			return e + "?v=20170208"
		},
		honourCard: function(t, e) {
			return e + "?v=20170208"
		},
		honourCard3: function(t, e) {
			return e + "?v=20170208"
		},
		honourCard4: function(t, e) {
			return e + "?v=20170208"
		},
		share: function(t, e) {
			return e + "?v=20170208"
		},
		qHotCity: function(t, e) {
			return e + "?v=20170208"
		},
		mapapi: function(t, e) {
			return e + "?v=20170208"
		},
		qunarfilters: function(t, e) {
			return e + "?v=20170208"
		},
		renderIframe3: function(t, e) {
			return e + "?v=20170208"
		},
		share2: function(t, e) {
			return e + "?v=20170208"
		},
		ALD_feedback: function(t, e) {
			return e + "?v=20170208"
		},
		addtohome: function(t, e) {
			return e + "?v=20170208"
		},
		addtohome2: function(t, e) {
			return e + "?v=20170208"
		},
		gpsApi: function(t, e) {
			return e + "?v=20170208"
		},
		simGps: function(t, e) {
			return e + "?v=20170208"
		}
	};
	$(document).ready(function() {
		l = !0
	}),
	i.addDisposeHandler({
		obj: i,
		fn: function() {
			for (var t in a) if (a.hasOwnProperty(t)) for (var e = a[t]; e.length;) e.pop()
		}
	}),
	t.cache = s,
	i.uicss = function(t) {
		e(i.uiPrefix + t)
	},
	i.uijs = function(t, e) {
		o(i.uiPrefix + t, e)
	},
	i.uijsPathMap = function(t) {
		$.extend(m, t)
	},
	i.use = t,
	i.ui = i.ui || {},
	i.addCssText = function(t) {
		var e = "opui-style-tag-id",
		n = "data-for",
		o = "A.ui",
		i = document.getElementById(e);
		i || (i = document.createElement("style"), i.setAttribute("type", "text/css"), i.setAttribute(n, o), i.id = e, document.getElementsByTagName("head")[0].appendChild(i));
		try {
			var s = document.createTextNode(t);
			i.appendChild(s)
		} catch(r) {
			i.styleSheet && (i.styleSheet.cssText += t)
		}
	},
	$(window).on("swap_end",
	function() {
		var t = /MSIE\s?6/.test(window.navigator.userAgent),
		e = function(t, e, n) {
			$(t).each(function(t, o) {
				var i = $(o),
				s = new Image,
				r = i.attr("src");
				s.onload = function() {
					var t = e,
					o = n,
					r = this.width,
					a = this.height,
					c = r / a / (t / o);
					c > 1 ? (r = r > t ? t: "auto", a = "auto") : (a = a > o ? o: "auto", r = "auto"),
					i.css({
						height: a,
						width: r
					}),
					s.onload = null,
					s = null
				},
				s.src = r
			})
		};
		t && e("img.result-left-img", 98, 121),
		$(".c-feedback").bind("click",
		function() {
			var t = this;
			i.use("ALD_feedback",
			function() {
				var e, n, o = "right",
				s = $(t);
				s.parents("#content_left").length ? (o = "left", n = s.parents(".result-op"), e = n.attr("srcid")) : s.parents("#content_right").length && (n = s.parents("#con-ar"));
				var r = {
					query: bds.comm.query,
					srcid: e,
					target: n,
					username: bds.comm.username,
					flag: o
				},
				a = i.ui.ALD_feedback(r);
				i.addDisposeHandler({
					obj: a,
					fn: a.dispose
				})
			})
		})
	})
} (),
$(window).on("swap_begin",
function() {
	A.dispose(),
	A.__reset(),
	A.__clearDispose()
}),
$(window).on("swap_dom_ready",
function() {
	bds.ready(A.__runAla),
	bds.doReady()
}),
bds.event = new
function() {
	function t(t, e) {
		if ("function" == typeof e || e instanceof Function) {
			var n = i(t);
			s[n.name] = s[n.name] || [],
			s[n.name].push({
				prod: n.prod,
				callback: e
			})
		}
	}
	function e(t, e) {
		for (var n = i(t), r = s[n.name] || [], a = 0; a < r.length;) {
			var c = r[a];
			e === c.callback && o(n.prod, c.prod) ? r.splice(a, 1) : a++
		}
	}
	function n(t, e) {
		for (var n = i(t), r = s[n.name] || [], a = {
			data: e,
			eventId: t
		},
		c = 0, d = r.length; d > c; c++) {
			var l = r[c];
			try {
				o(l.prod, n.prod) && l.callback.call(this, a)
			} catch(u) {}
		}
	}
	function o(t, e) {
		return new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(e)
	}
	function i(t) {
		var e = t.match(/(.+)\.(.+)/);
		return e && e[2] ? {
			prod: e[1],
			name: e[2]
		}: {}
	}
	var s = {};
	this.on = t,
	this.off = e,
	this.trigger = n,
	this.events = s
},
bds.se.link = function() {
	function t(t, e) {
		var n = "/s?",
		o = {
			tn: bds.comm.tn
		},
		i = "wd=" + encodeURIComponent(t);
		e && (o = $.extend(o, e));
		for (var s in o) o.hasOwnProperty(s) && (i += "&" + s + "=" + encodeURIComponent(o[s]));
		return n + i
	}
	return {
		getSearchUrl: t
	}
} (),
!
function(A) {
	function clickDebug() {}
	function bindP5() {
		var item, index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1,
		leftItems = contentLeft && contentLeft.children || [],
		rightItems = contentRight && contentRight.children || [],
		topItems = contentTop && contentTop.children || [],
		isResult = function(t) {
			return 1 == t.nodeType && t.className && /\bresult(\-op)?\b/.test(t.className)
		},
		isFrame = function(t) {
			return 1 == t.nodeType && t.className && /\bc\-frame\b/.test(t.className)
		},
		setClickData = function(wrap, data) {
			var sData = wrap.getAttribute("data-click") || "{}";
			try {
				var oData = eval("(" + sData + ")");
				sData = $.stringify($.extend(oData, data)),
				wrap.setAttribute("data-click", sData)
			} catch(e) {
				clickDebug(e)
			}
		},
		bindP5ClickData = function(t) {
			for (var e = 0,
			n = t.length; n > e; e++) if (item = t[e], isResult(item)) setClickData(item, {
				p5: index++
			});
			else if (isFrame(item)) try {
				for (var o = item.children[0].children, i = 0, s = o.length; s > i; i++) {
					var r = o[i];
					isResult(r) && setClickData(r, {
						p5: index++
					})
				}
			} catch(a) {
				clickDebug(a)
			}
			index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1
		};
		bindP5ClickData(leftItems),
		bindP5ClickData(rightItems),
		bindP5ClickData(topItems)
	}
	function getXPath(t, e, n) {
		if (n = n || [], e = e || document, t === e) return n;
		if (t.parentNode !== e && (n = getXPath(t.parentNode, e, n)), t.previousSibling) {
			var o = 1,
			i = t.previousSibling;
			do 1 == i.nodeType && i.nodeName == t.nodeName && o++,
			i = i.previousSibling;
			while (i)
		}
		return 1 == t.nodeType && n.push(t.nodeName.toLowerCase() + (o > 1 ? o: "")),
		n
	}
	function bindLogEvent() {
		$body = $("body"),
		$body.on("mousedown",
		function(t) {
			var t = window.event || t,
			e = t.srcElement || t.target,
			n = $(e);
			try {
				for (var o, i, s = n; s.length && !(s.hasClass("result") || s.hasClass("result-op") || s.hasClass("xpath-log"));) s = s.parent();
				if (!s.length) return;
				s.hasClass("result-op") ? o = "alop": s.hasClass("result") && (o = "as"),
				i = s.get(0);
				var r = getXPath(e, i);
				check(r, e, i) && log(r, e, i, o)
			} catch(t) {
				clickDebug(t)
			}
		})
	}
	function getType(t, e, n) {
		for (var o = e,
		i = LOG_CLASS,
		s = i.length,
		r = C_LOG_CLASS,
		a = r.length,
		c = t.join(" "), d = 0; o !== n;) {
			for (d = 0; s > d; d++) if ($(o).hasClass("OP_LOG_" + i[d])) return i[d].toLowerCase();
			for (d = 0; a > d; d++) if ($(o).hasClass("c-" + r[d])) return r[d];
			o = o.parentNode
		}
		return /\bh3\d*\b/.test(c) ? "title": /\ba\d*\b/.test(c) ? /\bimg\d*\b/.test(c) ? "img": "link": /\b(input|select|button|textarea|datalist)\d*\b/.test(c) ? "input": /\blabel\d*\b/.test(c) && e.getElementsByTagName("input").length > 0 ? "input": ""
	}
	function check(t, e, n) {
		return A.LOGTOOL ? (A.LOGTOOL.call(e, t, e, n), !1) : !0
	}
	function log(t, e, n, o) {
		if (null == e.getAttribute("data-nolog")) {
			var i = getType(t, e, n);
			if (!i) return ! 1;
			if ("title" == i && !/\ba\d*\b/.test(t)) return ! 1;
			var s = "http://nourl.ubs.baidu.com",
			r = n.getAttribute("mu") || s;
			if (r == s) {
				var a = n.getElementsByTagName("h3");
				if (a && a[0]) {
					var c = a[0].getElementsByTagName("a");
					r = c && c[0] ? c[0].href: r
				}
			}
			var d, l = t.length,
			u = e,
			m = n.getAttribute("srcid"),
			p = "",
			f = 1 == e.nodeType ? e.tagName.toLowerCase() : "";
			if ("input" == i) if (/input|textarea/.test(f)) p = e.value,
			e.type && "password" == e.type.toLowerCase() && (p = "");
			else if (/select|datalist/.test(f)) {
				if (e.children.length > 0) {
					var h = e.selectedIndex || 0;
					p = e.children[h > -1 ? h: 0].innerHTML
				}
			} else p = e.innerHTML || e.value || "";
			else if ("img" == f && (p = e.title), !p) for (; l > 0;) {
				if (l--, /^a\d*\b/.test(t[l])) {
					if (d = u.href, p = u.innerHTML, null != u.getAttribute("data-nolog")) return;
					break
				}
				if (u.className && /OP_LOG_/.test(u.className)) {
					p = u.innerHTML;
					break
				}
				u = u.parentNode
			}
			p = $.trim(p),
			d && "#" !== d.slice( - 1) && /^http/.test(d) || (d = r);
			var g = {
				rsv_xpath: t.join("-") + "(" + i + ")",
				title: p,
				url: d,
				rsv_height: n.offsetHeight,
				rsv_width: n.offsetWidth,
				rsv_tpl: n.getAttribute("tpl")
			},
			b = {
				url: 1,
				title: 1
			};
			n.id && n.id.match(/^\d+$/) && (g.p1 = n.id),
			m && (g.rsv_srcid = m);
			var v, w, _;
			u = e;
			do {
				if (null != u.getAttribute("data-nolog")) return;
				if (v = u.getAttribute("data-click")) try {
					v = new Function("return " + v)();
					for (w in v)"fm" == w && null === v.fm && (_ = !0),
					v.hasOwnProperty(w) && ("undefined" == typeof g[w] || b[w]) && (g[w] = v[w])
				} catch(y) {
					clickDebug(y)
				}
				u = u.parentNode
			} while ( u && u !== n . parentNode );
			for (var x in g) null === g[x] && delete g[x];
			if ("title" == i ? "mu" in g && delete g.mu: g.mu || (g.mu = r), _)"fm" in g && delete g.fm;
			else if ("input" == i && (g.fm = "beha", g.url = s), g.fm || (g.fm = o), !g.fm) return;
			window.c(g)
		}
	}
	var baidu = window.baidu,
	LOG_CLASS = ["TITLE", "LINK", "IMG", "BTN", "INPUT", "OTHERS"],
	C_LOG_CLASS = ["btn"],
	contentLeft,
	contentRight,
	contentTop;
	window.initResultClickLog = function() {
		if (contentLeft = $("#content_left").get(0), contentRight = $("#con-ar").get(0), contentTop = $("#con-at").get(0), A.has) {
			var t, e = $(".result-op").get();
			$.each(e,
			function(e, n) { (t = n.getAttribute("srcid")) && A.ids.push([n.id, t])
			})
		}
		bindP5()
	},
	$(document).ready(function() {
		bindLogEvent()
	})
} (window.bds.aladdin);
for (ai in al_arr) al_arr[ai]();
$(document).ready(function() {
	var t;
	$(document).on("click", ".t>a,.op-se-listen-recommend",
	function(e) {
		e = window.event || e;
		var n = $("#wrapper_wrapper"),
		o = $(this).closest(".c-container"),
		i = o.length ? o.find(".c-recommend").eq(0) : [],
		s = o.length ? o.find(".wnor-fanli-wrap") : []; ! e.ctrlKey && (i.length && "none" === i.css("display") || s.length && "none" === s.css("display")) && (t = setTimeout(function() {
			n.find(".c-recommend").hide(),
			i.show(),
			n.find(".wnor-fanli-wrap").hide(),
			s.show()
		},
		150))
	}),
	$(window).on("swap_begin",
	function() {
		this.clearTimeout(t)
	})
}),
window.onunload = function() {},
bds.se.openime = function(t) {
	window.bdime ? openIme.set("py", !0) : $.ajax({
		cache: !0,
		dataType: "script",
		url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/ime_c5abb66.js",
		success: function() {
			t && openIme.set("py", !0)
		}
	})
},
function() { / \bbdime = [12] / .test(document.cookie) || $(window).one("swap_end",
	function() {})
} (),
bds && bds.comm && !bds.comm.containerSize && (bds.comm.containerSize = "s"),
bds.util.setContainerWidth = function() {
	var t = $("#container"),
	e = $("#wrapper"),
	n = bds.util.getWinWidth(),
	o = bds.comm.containerSize;
	if (1217 > n) t.removeClass("container_l container_xl").addClass("container_s"),
	e.removeClass("wrapper_l").addClass("wrapper_s"),
	bds.comm.containerSize = "s";
	else {
		if (! (n >= 1217)) return;
		t.removeClass("container_s container_xl").addClass("container_l"),
		e.removeClass("wrapper_s").addClass("wrapper_l"),
		bds.comm.containerSize = "l"
	}
	o != bds.comm.containerSize && $(window).trigger("container_resize", bds.comm.containerSize)
},
bds.util.setFootStyle = function() {
	this.init(),
	this.bindEvent()
},
$.extend(bds.util.setFootStyle.prototype, {
	ie6: bds.comm.upn && "msie" === bds.comm.upn.browser && 6 == bds.comm.upn.ie,
	init: function() {
		var t = $("#foot");
		if (t.addClass("foot_fixed_bottom"), this.ie6) {
			var e = $(window).height() + $(window).scrollTop() - t.outerHeight(!0);
			t.css("top", e + "px")
		}
	},
	setFixedIe6: function() {
		var t = $("#foot"),
		e = $(window).height() + $(window).scrollTop() - t.outerHeight(!0);
		t.css("top", e + "px")
	},
	bindEvent: function() {
		var t = this;
		t.ie6 && $(window).on("resize.setFootStyle, scroll.setFootStyle",
		function() {
			t.setFixedIe6()
		})
	}
});
var bds = bds || {};
bds.se = bds.se || {},
bds.se.tip = bds.se.tip || {},
bds.comm.tipZIndex = 220,
bds.comm.tips = [],
bds.se.tip = function(t) {
	this.init = function() {
		this.op = {
			target: t.target || {},
			mode: t.mode || "over",
			title: t.title || null,
			content: t.content || null,
			uncontrolled: t.uncontrolled ? !0 : !1,
			arrow: {
				has: 1,
				offset: 10,
				r: !1,
				c: !1
			},
			close: t.close || 0,
			align: t.align || "left",
			offset: {
				x: 10,
				y: 20
			},
			arrowSize: 16
		},
		t.arrow && (this.op.arrow.has = 0 == t.arrow.has ? 0 : 1, this.op.arrow.offset = t.arrow.offset >= 0 ? t.arrow.offset: 10, this.op.arrow.r = t.arrow.r, this.op.arrow.c = t.arrow.c),
		t.offset && (this.op.offset.x = t.offset.x || 0 == t.offset.x ? t.offset.x: 10, this.op.offset.y = t.offset.y || 0 == t.offset.y ? t.offset.y: 20),
		this.ext = t.ext || {},
		this.dom = $("<div>", {
			"class": "c-tip-con"
		}),
		this.visible = !1,
		this.rendered = !1,
		this.isAuto = "auto" === this.op.align ? !0 : !1,
		this.bindEvent()
	},
	this.render = function() {
		this.op.close && this.enableCloseIcon(),
		this.op.title && this.setTitle(this.op.title),
		this.op.content && this.setContent(this.op.content),
		this.op.arrow.has && this.enableArrow(),
		$("#c-tips-container").append(this.dom)
	},
	this.bindEvent = function() {
		if (this.delay = {
			overIcon: null,
			outIcon: null,
			overDom: null,
			outDom: null
		},
		"over" == this.op.mode) {
			var t = this;
			$(t.op.target).on("mouseenter",
			function() {
				window.clearTimeout(t.delay.outIcon),
				window.clearTimeout(t.delay.outDom),
				t.delay.overIcon = setTimeout(function() {
					t.show()
				},
				200)
			}),
			t.dom.on("mouseenter",
			function() {
				window.clearTimeout(t.delay.outIcon),
				window.clearTimeout(t.delay.outDom),
				t.delay.overDom = setTimeout(function() {
					t.show()
				},
				200)
			}),
			$(t.op.target).on("mouseleave",
			function() {
				window.clearTimeout(t.delay.overIcon),
				window.clearTimeout(t.delay.overDom),
				t.delay.outIcon = setTimeout(function() {
					t.hide()
				},
				200)
			}),
			t.dom.on("mouseleave",
			function() {
				window.clearTimeout(t.delay.overIcon),
				window.clearTimeout(t.delay.overDom),
				t.delay.outIcon = setTimeout(function() {
					t.hide()
				},
				200)
			})
		} else if ("none" == this.op.mode) {
			var t = this;
			t.show()
		}
	},
	this.enableArrow = function() {
		if (this.op.arrow.r) var t = $("<div>", {
			"class": "c-tip-arrow"
		}).html("<em></em><ins class='c-tip-arrow-r'></ins>").appendTo(this.dom);
		else if (this.op.arrow.c) var t = $("<div>", {
			"class": "c-tip-arrow"
		}).html("<em></em><ins class='c-tip-arrow-c'></ins>").appendTo(this.dom);
		else var t = $("<div>", {
			"class": "c-tip-arrow"
		}).html("<em></em><ins></ins>").appendTo(this.dom);
		this.arrow = t
	},
	this.enableCloseIcon = function() {
		var t = this,
		e = $("<div>", {
			"class": "c-tip-close"
		}).html("<i class='c-icon c-icon-close'></i>").appendTo(this.dom).click(function() {
			t.hide()
		});
		this.close = e
	},
	this.setTitle = function(t) {
		if (t.nodeType) var e = $("<h3>", {
			"class": "c-tip-title"
		}).append(t).appendTo(this.dom);
		else var e = $("<h3>", {
			"class": "c-tip-title"
		}).html(t).appendTo(this.dom);
		this.title = e
	},
	this.setContent = function(t) {
		var e = $("<div>").html(t).appendTo(this.dom);
		this.content = e
	},
	this.setArrow = function(t) {
		if (t && t.offset >= 0 && (this.op.arrow.offset = t.offset), this.op.arrow.has && this.arrow) switch (this.op.align) {
		case "left":
			this.arrow.css({
				left:
				this.op.arrow.offset + "px"
			});
			break;
		case "right":
			this.arrow.css({
				right:
				this.op.arrow.offset + 16 + "px"
			})
		}
	},
	this.setOffset = function(t) {
		switch (t && (this.op.offset.x = t.x || 0 == t.x ? t.x: this.op.offset.x, this.op.offset.y = t.y || 0 == t.y ? t.y: this.op.offset.y), this.op.align) {
		case "left":
			var e = $(this.getTarget()).offset();
			this.getDom().css({
				top: e.top + this.op.offset.y + "px",
				left: e.left - this.op.offset.x + "px"
			});
			break;
		case "right":
			var e = $(this.getTarget()).offset();
			this.getDom().css({
				top: e.top + this.op.offset.y + "px",
				left: e.left + this.op.offset.x + $(this.getTarget()).width() - this.getDom().width() + "px"
			})
		}
	},
	this.autoOffset = function() {
		var t, e = {
			w: this.dom.outerWidth(),
			h: this.dom.outerHeight()
		},
		n = $(this.getTarget()),
		o = n.offset(),
		i = {
			w: n.outerWidth(),
			h: n.outerHeight()
		},
		s = $(window),
		r = s.scrollTop(),
		a = {
			w: s.width(),
			h: s.height()
		},
		c = {
			left: 0,
			top: 0
		},
		d = {};
		a.h + r - i.h - o.top > e.h ? (c.top = i.h + o.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")) : o.top - r > e.h ? (c.top = o.top - e.h - this.op.arrowSize / 2, this.arrow && this.arrow.addClass("c-tip-arrow-down")) : (c.top = i.h + o.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")),
		t = o.left + i.w / 2 - this.op.arrow.offset - this.op.arrowSize / 2,
		c.left = t,
		c.left > 0 && c.left + e.w > a.w ? (c.left = o.left + i.w / 2 - e.w + this.op.arrow.offset + this.op.arrowSize / 2, d.right = this.op.arrow.offset + this.op.arrowSize, d.left = "auto", c.left < 0 && (c.left = t, d.left = this.op.arrow.offset, d.right = "auto")) : (d.left = this.op.arrow.offset, d.right = "auto"),
		this.dom.css(c),
		this.arrow && this.arrow.css(d)
	},
	this.enable = function() {},
	this.disable = function() {},
	this.destroy = function() {},
	this.show = function() {
		this.visible || (this.onShow(), this.rendered || (bds.comm.tips.push(this), this.render(), this.rendered = !0), this.isAuto ? this.autoOffset() : (this.setOffset(), this.setArrow()), this.dom.css({
			"z-index": bds.comm.tipZIndex
		}), bds.comm.tipZIndex++, this.dom.css({
			display: "block"
		}), this.visible = !0)
	},
	this.hide = function() {
		this.visible && (this.dom.css({
			display: "none"
		}), this.onHide(), this.visible = !1)
	},
	this.onShow = t.onShow ||
	function() {},
	this.onHide = t.onHide ||
	function() {},
	this.getTarget = function() {
		return this.op.target
	},
	this.getDom = function() {
		return this.dom
	},
	this.init()
},
bds.event.trigger("se.api_tip_ready"),
$(document).mousedown(function(t) {
	t = t || window.event;
	for (var e = t.target || t.srcElement; e && e.tagName && e != document.body && "html" != e.tagName.toLowerCase() && "c-tip-con" != e.className;) e = e.parentNode;
	e && "c-tip-con" != e.className && $(bds.comm.tips).each(function() {
		this.op.uncontrolled || this.op.close && this.hide()
	})
});
var sethfPos = sethfPos || 0; !
function() {
	function t(t) {
		if (t) {
			var e = t.parentNode;
			e && (e.style.marginBottom = "20px", e.style.marginTop = "2px")
		}
	}
	var e = "//www.baidu.com/",
	n = -1 != navigator.userAgent.indexOf("MSIE") && !window.opera,
	o = (100 * Math.random(), "鐧惧害涓€涓嬶紝浣犲氨鐭ラ亾"),
	i = "";
	if (window.fa = function(t) {
		try {
			window.sidebar ? window.sidebar.addPanel(o, e, "") : window.opera && window.print ? (t.setAttribute("rel", "sidebar"), t.setAttribute("href", e), t.setAttribute("title", o), t.click()) : window.external.AddFavorite(e, o)
		} catch(n) {}
	},
	n) try {
		var s = /se /gi.test(navigator.userAgent),
		r = /AppleWebKit/gi.test(navigator.userAgent) && /theworld/gi.test(navigator.userAgent),
		a = /theworld/gi.test(navigator.userAgent),
		c = /360se/gi.test(navigator.userAgent),
		d = /360chrome/gi.test(navigator.userAgent),
		l = /greenbrowser/gi.test(navigator.userAgent),
		u = /qqbrowser/gi.test(navigator.userAgent),
		m = /tencenttraveler/gi.test(navigator.userAgent),
		p = /maxthon/gi.test(navigator.userAgent),
		f = /krbrowser/gi.test(navigator.userAgent),
		h = !1;
		try {
			h = +external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013
		} catch(g) {}
		if (s || h || r || a || c || d || l || u || m || p || f) {
			var b = document.getElementById(sethfPos ? "set_f": "setf");
			b && sethfPos && (t(b), i = "favorites")
		} else {
			var v = document.getElementById(sethfPos ? "set_f": "setf");
			v && sethfPos && (t(v), i = "home"),
			v.setAttribute("onClick", "h(this)"),
			v.setAttribute("onmousedown", "return ns_c({'fm':'behs','tab':'homepage','pos':0})"),
			v.href = "/",
			v.target = "_self",
			v.id = "seth"
		}
	} catch(g) {} else {
		var b = document.getElementById(sethfPos ? "set_f": "setf");
		sethfPos && (t(b), i = "favorites")
	}
	i && sethfPos && ns_c({
		fm: "sethf_show",
		tab: i
	})
} (),
bds.se.loginCallbackFunc = null,
bds.se.login = function() {
	var t = "",
	e = !1,
	n = "",
	o = function(t) {
		var e = t || bds.comm.user;
		e && $("#lb").replaceWith('<a href="http://i.baidu.com" class="username">' + escapeHTML(bds.comm.username) + '<i class="c-icon"></i></a>')
	},
	i = function(o) {
		e ? (bds.se.passv3.setSubpro(t), bds.se.passv3.setMakeText(n), bds.se.loginCallbackFunc = o ||
		function() {
			window.document.location.reload(!0)
		},
		bds.se.passv3.show()) : $.getScript(location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(),
		function() {
			initPassV3(),
			e = !0,
			bds.se.passv3.setSubpro(t),
			bds.se.passv3.setMakeText(n),
			bds.se.loginCallbackFunc = o ||
			function() {
				window.document.location.reload(!0)
			},
			bds.se.passv3.show()
		})
	},
	s = function(t) {
		if (bds.comm) {
			bds.comm.user = t,
			bds.comm.username = t,
			window.bdUser = t,
			bds.se.passv3.hide(),
			bds.se.loginCallbackFunc.call(window, 1, t);
			for (var e = 0; e < bds.comm.loginAction.length; e++) bds.comm.loginAction[e].call(window, 1, t)
		}
	},
	r = function(e) {
		t = e
	},
	a = function(t) {
		n = t
	};
	return {
		setUserInfo: o,
		open: i,
		success: s,
		setSubpro: r,
		setMakeText: a
	}
} (),
window._invoke_login = function(t, e) {
	bds.se.login.open(t, e)
},
!
function() {
	function t() {
		var t, e = "http://isphijack.baidu.com/index.php?cb=isp_hijack",
		n = [];
		if (top.location != self.location) {
			try {
				for (var o = top.document.getElementsByTagName("frame"), i = top.document.getElementsByTagName("iframe"), s = 0; s < o.length; s++) n.push(o[s].getAttribute("src"));
				for (var s = 0; s < i.length; s++) n.push(i[s].getAttribute("src"))
			} catch(r) {}
			ns_c({
				fm: "frm",
				top: encodeURIComponent(top.location.href),
				furls: encodeURIComponent(n.join("|"))
			}),
			n && (t = document.createElement("script"), t.src = e + "&urls=" + encodeURIComponent(n.join("|")) + "&t=" + +new Date, document.body.appendChild(t))
		}
	}
	$(t)
} ();
try {
	window.console && window.console.log && (console.log("涓€寮犵綉椤碉紝瑕佺粡鍘嗘€庢牱鐨勮繃绋嬶紝鎵嶈兘鎶佃揪鐢ㄦ埛闈㈠墠锛焅n涓€浣嶆柊浜猴紝瑕佺粡鍘嗘€庢牱鐨勬垚闀匡紝鎵嶈兘绔欏湪鎶€鏈箣宸咃紵\n鎺㈠杩欓噷鐨勭瀵嗭紱\n浣撻獙杩欓噷鐨勬寫鎴橈紱\n鎴愪负杩欓噷鐨勪富浜猴紱\n鍔犲叆鐧惧害锛屽姞鍏ョ綉椤垫悳绱紝浣狅紝鍙互褰卞搷涓栫晫銆俓n"), console.log("璇峰皢绠€鍘嗗彂閫佽嚦 %c ps_recruiter@baidu.com锛� 閭欢鏍囬璇蜂互鈥滃鍚�-搴旇仒XX鑱屼綅-鏉ヨ嚜console鈥濆懡鍚嶏級", "color:red"), console.log("鑱屼綅浠嬬粛锛歨ttp://dwz.cn/hr2013"))
} catch(e) {}
var bds = bds || {};
bds.se = bds.se || {},
bds.se.tool = bds.se.tool || {},
bds.comm.host = {
	bfe: "//www.baidu.com/tools",
	favo: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://i.baidu.com") : "http://i.baidu.com",
	share: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js") : "http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js",
	report: "http://jubao.baidu.com",
	koubei: "http://koubei.baidu.com"
},
bds.se.tool = function(item) {
	this.init = function() {
		this.render()
	},
	this.render = function() {
		var ops = eval("(" + item.getAttribute("data-tools") + ")"),
		toolsDom = $("<div>", {
			"class": "c-tip-menu"
		}),
		toolsList = $("<ul>"),
		toolsFavo = $("<li>"),
		toolsFavoLink = $("<a>").html("鏀惰棌");
		toolsFavoLink.on("mousedown",
		function() {
			bds.se.tool.favo(ops, item.getAttribute("id")),
			ns_c({
				fm: "tools",
				tab: "favo"
			})
		}),
		toolsFavoLink.on("mouseover",
		function() {
			$(this).css("background-color", "#ebebeb")
		}),
		toolsFavoLink.on("mouseout",
		function() {
			$(this).css("background-color", "#fff")
		}),
		toolsFavo.append(toolsFavoLink),
		toolsList.append(toolsFavo);
		var toolsShare = $("<li>"),
		toolsShareLink = $("<a>").html("鍒嗕韩");
		toolsShareLink.on("mousedown",
		function() {
			bds.se.tool.share(ops, item),
			ns_c({
				fm: "tools",
				tab: "share"
			})
		}),
		toolsShareLink.on("mouseover",
		function() {
			$(this).css("background-color", "#ebebeb")
		}),
		toolsShareLink.on("mouseout",
		function() {
			$(this).css("background-color", "#fff")
		}),
		toolsShare.append(toolsShareLink),
		toolsList.append(toolsShare);
		var fromType;
		fromType = $(item).parent().find(".c-pingjia a").attr("data-from") ? $(item).parent().find(".c-pingjia a").attr("data-from") : "ps_pc";
		var toolsKoubei = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'koubei'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.koubei + "/p/sentry?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&from=" + encodeURIComponent(fromType)) + '&key=surl">璇勪环</a>');
		toolsList.append(toolsKoubei);
		var officalLogo = $($(item).closest(".c-container").find("h3.t").children()[1]),
		vLogo = $(item).parent().find(".vstar"),
		isOffical = 0,
		vLevel = 0;
		officalLogo && "瀹樼綉" == officalLogo.html() && (isOffical = 1),
		vLogo && vLogo.attr("hint-data") && (vLevel = $.parseJSON(vLogo.attr("hint-data")).hint[0].vlevel);
		var toolsReport = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'report'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.report + "/jubao/accu/?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&has_gw=" + isOffical + "&has_v=" + vLevel) + '&key=surl">涓炬姤</a>');
		toolsList.append(toolsReport),
		toolsDom.append(toolsList);
		var tTip = new bds.se.tip({
			target: $(".c-icon", item)[0],
			mode: "none",
			align: "left",
			offset: {
				x: 33
			},
			arrow: {
				has: 1,
				offset: 30
			},
			content: toolsDom,
			ext: {
				category: "tools"
			}
		});
		tTip.onShow = function() {
			ns_c({
				fm: "tools",
				tab: "show"
			})
		}
	},
	this.init()
},
bds.se.tool.share = function(t, e) {
	this.op = t || {},
	this.init = function(t, e) {
		$.getScript(bds.comm.host.share,
		function() {
			$(bds.comm.tips).each(function() {
				this.op.uncontrolled || this.hide()
			});
			var n = new bds.se.tip({
				target: $(".c-icon", e)[0],
				mode: "none",
				offset: {
					x: 33
				},
				arrow: {
					has: 0
				},
				close: 1,
				content: '<div class="c-tools-share" style="width:200px;"></div>'
			}),
			o = $(".c-tools-share", n.dom.get(0))[0];
			__bdshare.render({
				boxEle: o,
				url: t.url,
				txt: t.title + " -- 鍒嗕韩鑷櫨搴︽悳绱�"
			})
		})
	} (this.op, e)
},
bds.se.tool.favo = function(t, e) {
	if (this.op = t || {},
	this.init = function(t, e) {
		if (t) {
			var n = document.createElement("script"),
			o = bds.comm.host.bfe,
			i = bds.comm.host.favo;
			n.src = o + "?url=" + encodeURIComponent(t.url) + "&jump=" + encodeURIComponent(i + "/myfavorite/set?irt=1&t=" + encodeURIComponent(t.title) + "&id=" + encodeURIComponent(e) + "&c=bds.se.tool.favo.succ") + "&key=url",
			document.body.appendChild(n)
		}
	},
	bds.comm.user) this.init(this.op, e);
	else if (bds.se.login && bds.se.login.open) {
		var n = this;
		bds.se.login.open(function(t) {
			1 == t && n.init(n.op, e)
		})
	}
},
bds.se.tool.favo.succ = function(json) {
	if (json.suc) {
		if (json.status) switch (json.status) {
		case 302:
			bds.se.login && bds.se.login.open && bds.se.login.open(function(stat, user) {
				1 == stat && bds.se.tool.favo(eval("(" + $("#" + json.id)[0].getAttribute("data-tools") + ")"), json.id)
			});
			break;
		case 5:
			var succContent = '<div class="c-tip-notice">';
			succContent += '<h3 class="c-tip-notice-fail">鏀惰棌澶辫触锛岃绋嶅悗鍐嶈瘯</h3>',
			succContent += "</div>"
		}
	} else if (json.status) {
		var succContent = '<div class="c-tip-notice">';
		switch (succContent += '<h3 class="c-tip-notice-succ">宸叉敹钘忚嚦锛�</h3>', succContent += "<ul>", json.status) {
		case 2:
			succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>涓汉涓績鈥�<a href="http://i.baidu.com/my/collect" target="_blank">鎴戠殑鏀惰棌</a>鈥�</li>',
			succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>鐧惧害棣栭〉鈥�<a href="http://www.baidu.com" target="_blank">鎴戠殑瀵艰埅</a>鈥�</li>';
			break;
		case 3:
			succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>涓汉涓績鈥�<a href="http://i.baidu.com/my/collect" target="_blank">鎴戠殑鏀惰棌</a>鈥�</li>',
			succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>鐧惧害棣栭〉鈥�<a href="http://www.baidu.com" target="_blank">鎴戠殑瀵艰埅</a>鈥�</li>';
			break;
		case 4:
			succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>涓汉涓績鈥�<a href="http://i.baidu.com/my/collect" target="_blank">鎴戠殑鏀惰棌</a>鈥�</li>',
			succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>鐧惧害棣栭〉鈥�<a href="http://www.baidu.com" target="_blank">鎴戠殑瀵艰埅</a>鈥�</li>'
		}
		succContent += "</ul>",
		succContent += "</div>"
	}
	$(bds.comm.tips).each(function() {
		this.op.uncontrolled || this.hide()
	}),
	succContent && new bds.se.tip({
		target: $(".c-icon", document.getElementById(json.id))[0],
		offset: {
			x: 33
		},
		arrow: {
			has: 0
		},
		mode: "none",
		arrow: {
			has: 0
		},
		close: 1,
		content: succContent
	})
};
var bds = bds || {};
bds.se = bds.se || {},
bds.se.tools = bds.se.tools || {},
bds.se.tools = function() {
	var t = delayHideOnIcon = delayShowOnTip = delayHideOnTip = {};
	$("#container").delegate(".c-tools", "mouseover",
	function() {
		var e = this;
		window.clearTimeout(delayHideOnIcon),
		window.clearTimeout(delayHideOnTip),
		t = setTimeout(function() {
			var t = 1;
			$(bds.comm.tips).each(function() {
				return this.getTarget() == $(".c-icon", e)[0] ? (t = 0, this.show(), !1) : void 0
			}),
			t && (tools = new bds.se.tool(e))
		},
		200)
	}).delegate(".c-tools", "mouseout",
	function() {
		window.clearTimeout(t),
		window.clearTimeout(delayShowOnTip);
		var e = this;
		delayHideOnIcon = setTimeout(function() {
			$(bds.comm.tips).each(function() {
				return this.getTarget() == $(".c-icon", e)[0] ? (this.hide(), !1) : void 0
			})
		},
		200)
	}),
	$("#c-tips-container").delegate(".c-tip-con", "mouseover",
	function() {
		var t = this;
		window.clearTimeout(delayHideOnIcon),
		window.clearTimeout(delayHideOnTip),
		delayShowOnTip = setTimeout(function() {
			$(bds.comm.tips).each(function() {
				return this.getDom().get(0) == t && this.ext.category && "tools" == this.ext.category ? (this.show(), !1) : void 0
			})
		},
		200)
	}).delegate(".c-tip-con", "mouseout",
	function() {
		window.clearTimeout(t),
		window.clearTimeout(delayShowOnTip);
		var e = this;
		delayHideOnTip = setTimeout(function() {
			$(bds.comm.tips).each(function() {
				return this.getDom().get(0) == e && this.ext.category && "tools" == this.ext.category ? (this.hide(), !1) : void 0
			})
		},
		200)
	})
};
var bds = bds || {};
bds.se = bds.se || {},
bds.se.slide = function(t) {
	var e, n, o, i, s, r = this,
	a = {},
	d = [],
	l = 0,
	u = null;
	this._default = {
		target: $("#lg"),
		src: "",
		width: 270,
		height: 129,
		offsetLeft: 0,
		isPad: !1,
		isRetina: !1,
		frames: 103,
		animations: [{
			isAutoPlay: !0,
			frame_start: 1,
			frame_end: 30,
			delay: 0,
			duration: 100,
			repeats: 0,
			process_before: function() {},
			event_loop: 0,
			process_after: function() {}
		},
		{
			trigger_type: "click",
			trigger_duration: 100,
			trigger_frame: 31,
			trigger_fn: function() {},
			frame_start: 32,
			frame_end: 103,
			process_before: function() {},
			process_after: function() {},
			delay: 0,
			duration: 100,
			repeats: 1,
			event_loop: 0
		}]
	},
	this.timer = [],
	this.otherTimer = [],
	this.op = $.extend({},
	r._default, t),
	this.init = function() {
		return r.op.src ? (r.createDom(), void(bds.comm.ishome && r.op.target.length && r.initAnimate())) : void r.createPlayer()
	},
	this.createPlayer = function() {
		var t = r.op.target.find("map"),
		e = t.length ? t.find("area").eq(0) : "",
		o = r.op.play;
		o && (n = $('<img class="logo_player" src="' + o.src + '" style="width:' + o.width + "px; height:" + o.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + o.width / 2 + "px; margin-top: -" + o.height / 2 + "px; cursor:pointer;\" onmousedown=\"return c({'tab':'logo_button_click'})\" />").appendTo(r.op.target), e.length ? (n.wrap('<a style="position:absolute;top:0;left:50%;width:' + r.op.width + "px;height:" + r.op.height + "px;margin-left:-" + r.op.width / 2 + 'px;" href="' + e.attr("href") + '" target="' + e.attr("target") + '"></a>'), e.attr("title") && n.attr("title", e.attr("title"))) : n.wrap('<div style="position:absolute;top:0;left:50%;width:' + r.op.width + "px;height:" + r.op.height + "px;margin-left:-" + r.op.width / 2 + 'px;"></div>'), n.on(o.trigger_type,
		function() {
			return o.trigger_duration ? r.timer.push(window.setTimeout(function() {
				o.trigger_fn.call(r.op)
			},
			o.trigger_duration)) : o.trigger_fn.call(r.op),
			!1
		}))
	},
	this.createDom = function() {
		var t = '<div style="position:absolute;top:0;left:50%;background:url(#{0}) no-repeat #{1};cursor:#{2};width:#{3}px;height:#{4}px;margin-left:-#{5}px;display:none;"></div>',
		l = r.op.offsetLeft + "px 0",
		u = r.op.target.find("map"),
		m = u.length ? u.find("area").eq(0) : "",
		p = m ? "pointer": p,
		f = r.op.animations instanceof Array ? r.op.animations: [r.op.animations],
		h = r.op.width,
		g = r.op.height;
		d = f,
		i = h,
		s = g,
		t = $.format(t, r.op.src, l, p, r.op.width, r.op.height, r.op.width / 2),
		"static" === r.op.target.css("position") && r.op.target.css({
			position: "relative",
			width: "100%"
		}),
		r.op.target.append(t),
		e = o = r.op.target.find("div").eq(0),
		r.op.play && (n = $('<img src="' + r.op.play.src + '" style="width:' + r.op.play.width + "px; height:" + r.op.play.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + r.op.play.width / 2 + "px; margin-top: -" + r.op.play.height / 2 + "px; \" onmousedown=\"return c({'tab':'logo_button_click'})\" />").insertAfter(e), o = n),
		r.op.isPad && e.css("background-size", r.op.width * r.op.frames / 2 + "px " + r.op.height + "px"),
		window.devicePixelRatio && window.devicePixelRatio > 1 && r.op.isRetina && e.css("background-size", r.op.width * r.op.frames + "px " + r.op.height + "px"),
		m.length ? (e.wrap('<a href="' + m.attr("href") + '" target="' + m.attr("target") + '"></a>'), m.attr("title") && e.attr("title", m.attr("title"))) : e.on("mousedown",
		function() {
			c({
				tab: "logo_button_click"
			})
		});
		for (var b = 0,
		v = d.length; v > b; b++) {
			var w = d[b],
			_ = w.frame_start;
			l = -((_ - 1) * h) + "px 0",
			a[b] = {
				"background-position": l,
				cursor: p
			}
		}
	},
	this.initAnimate = function() {
		function t() {
			e.show(),
			r.play()
		}
		if (! (l >= d.length)) {
			var n = d[l],
			i = n.isAutoPlay,
			s = n.trigger_type,
			a = n.trigger_fn,
			c = n.trigger_duration,
			m = n.trigger_frame,
			p = $("#lg area");
			p.length && p.attr("onmousedown") && e.on("mousedown",
			function() {
				return new Function(p.attr("onmousedown"))()
			}),
			u = new Image,
			u.src = r.op.src,
			e.bind("first_animate",
			function() {
				u.complete ? t() : u.onload = t
			}),
			i ? e.trigger("first_animate") : s && (r.enablePointer(), o.show().on(s,
			function() {
				a && (m && r.toPos(m), a.call(r.op), c ? r.timer.push(setTimeout(function() {
					e.trigger("first_animate")
				},
				c)) : e.trigger("first_animate"))
			}))
		}
	},
	this.enablePointer = function() {
		bds.comm.upn && "msie" === bds.comm.upn.browser && "6" === bds.comm.upn.ie ? alert("pointer") : e.css("cursor", "pointer")
	},
	this.disablePointer = function() {
		e.css("cursor", "default")
	},
	this.play = function() {
		if (l >= d.length) return void r.dispose();
		var t = d[l],
		e = t.process_before;
		r.dispose(),
		e && e.call(r),
		r.animation()
	},
	this.toPos = function(t) {
		var n = -((t - 1) * i) + "px 0";
		e.css("background-position", n)
	},
	this.animation = function() {
		var t, n = d[l],
		s = n.duration,
		a = n.frame_start,
		c = n.frame_end,
		u = n.delay,
		m = n.repeats,
		p = n.process_after,
		f = n.trigger_type,
		h = a - 1 > 0 ? a - 1 : 0,
		g = n.event_loop || 0,
		b = 0;
		if (t = g ? d[l] : l + 1 >= d.length ? d[l] : d[l + 1]) {
			var v = t.trigger_type,
			w = t.trigger_fn,
			_ = t.trigger_duration,
			y = t.trigger_frame;
			v && (f && o.off(f), l < d.length - 1 || g ? (r.enablePointer(), o.on(v,
			function() {
				g || l++,
				p && p.call(r),
				w && w.call(r),
				y && r.toPos(y),
				_ ? (r.dispose(), r.timer.push(setTimeout(function() {
					r.play()
				},
				_))) : r.play()
			})) : r.disablePointer())
		} !
		function() {
			arguments.callee,
			r.timer.push(setTimeout(function() {
				e.css("background-position", -(i * h) + "px 0"),
				h++,
				h >= c ? (r.dispose(), b++, 0 !== m && b >= m ? (h = null, b = null, p && p.call(r), l++, l < d.length && r.play(), g && l--) : (h = a - 1 > 0 ? a - 1 : 0, r.timer.push(setTimeout(arguments.callee, s)))) : r.timer.push(setTimeout(arguments.callee, s))
			},
			u))
		} ()
	},
	this.dispose = function(t) {
		t = t || r.timer;
		for (var e = 0,
		n = t.length; n > e; e++) window.clearTimeout(t[e]);
		t.length = 0
	},
	this.disposeOther = function(t) {
		t = t || r.otherTimer;
		for (var e = 0,
		n = t.length; n > e; e++) window.clearTimeout(t[e]);
		t.length = 0
	},
	this.clear = function() {
		r.dispose(),
		r.disposeOther(),
		o.off("click").off("hover")
	},
	this.reset = function(t) {
		t = t || 0,
		e.css(a[t])
	},
	this.init()
};
var bds = bds || {};
bds.se = bds.se || {},
bds.se.banner = function(t, e, n) {
	this.init = function() {
		n = n || {},
		this.$dom_panel = $(t),
		this.hintText = e,
		this.hintIcon = n.iconClass || "",
		this.downUrl = n.downUrl || "",
		this.hintCookie = n.cookie || "",
		this.showNum = this.hintCookie && $.getCookie(this.hintCookie) ? Number($.getCookie(this.hintCookie)) : 0,
		this.nscTab = n.nscTab || "",
		this.ishome = bds.comm && 1 == bds.comm.ishome ? 1 : 0,
		this.bannerType = n.bannerType || "",
		t && e && this.showNum < 5 && !$(".baiduapp_banner")[0] && !$(".res_top_banner")[0] && !$(".res_top_banner_for_win")[0] && this.show()
	},
	this.show = function() {
		this.render(),
		this.showNum += 1,
		$.setCookie(this.hintCookie, this.showNum, {
			expires: 2592e6
		}),
		this.$dom_panel.prepend(this.bannerHtml),
		1 != this.ishome && this.headFloat(),
		this.bindEvent(),
		ns_c({
			fm: "behs",
			tab: (1 == this.ishome ? "tj_": "") + "baidu_" + (this.nscTab ? this.nscTab: "topbanner") + "show"
		})
	},
	this.render = function() {
		var t = [];
		t = t.concat("WIN" !== this.bannerType ? ['<div class="res_top_banner">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon: "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">绔嬪嵆浣撻獙</a>': "", '<i class="c-icon res_top_banner_close"></i>', "</div>"] : ['<div class="res_top_banner_for_win">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon: "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">绔嬪嵆浣撻獙</a>': "", '<i class="c-icon res_top_banner_close"></i>', "</div>"]),
		this.bannerHtml = t.join("")
	},
	this.headFloat = function() {
		var t = $("#head"),
		e = $(window),
		n = $(".res_top_banner");
		t.css("position"),
		$(window).scroll(function() {
			var o = n.height() || 0,
			i = e.scrollTop();
			o >= i ? t.attr("style", "position:absolute;") : t.attr("style", "top:0px;_top:" + o + "px;")
		})
	},
	this.bindEvent = function() {
		if ("WIN" !== this.bannerType) {
			var t = $(".res_top_banner"),
			e = this;
			$(".res_top_banner_download", t).on("mousedown",
			function() {
				e.hintCookie && $.setCookie(e.hintCookie, 5, {
					expires: 2592e6
				}),
				ns_c({
					fm: "behs",
					tab: (1 == e.ishome ? "tj_": "") + "baidu_" + (e.nscTab ? e.nscTab: "topbanner") + "down"
				})
			}),
			$(".res_top_banner_close", t).on("mousedown",
			function() {
				t.detach(),
				e.hintCookie && $.setCookie(e.hintCookie, 5, {
					expires: 2592e6
				}),
				ns_c({
					fm: "behs",
					tab: (1 == e.ishome ? "tj_": "") + "baidu_" + (e.nscTab ? e.nscTab: "topbanner") + "close"
				})
			}),
			$(window).on("swap_begin",
			function() {
				t.detach()
			})
		} else {
			var t = $(".res_top_banner_for_win"),
			e = this;
			$(".res_top_banner_download", t).on("mousedown",
			function() {
				e.hintCookie && $.setCookie(e.hintCookie, 5, {
					expires: 2592e6
				}),
				ns_c({
					fm: "behs",
					tab: (1 == e.ishome ? "tj_": "") + "baidu_" + (e.nscTab ? e.nscTab: "topbanner") + "down"
				})
			}),
			$(".res_top_banner_close", t).on("mousedown",
			function() {
				t.detach(),
				e.hintCookie && $.setCookie(e.hintCookie, 5, {
					expires: 2592e6
				}),
				ns_c({
					fm: "behs",
					tab: (1 == e.ishome ? "tj_": "") + "baidu_" + (e.nscTab ? e.nscTab: "topbanner") + "close"
				})
			}),
			$(window).on("swap_begin",
			function() {
				t.detach()
			})
		}
	},
	this.init()
},
function() {
	$(window).on("swap_end",
	function() {
		var t = ["union", "union2baidu", "union_cpro", "union_nosearch", "redbull", "hao123"],
		e = bds.comm.upn,
		n = navigator.userAgent.toLowerCase().search(/msie [6-7]/);
		if (winFilter = /NT 6.1|NT 6.2|NT 6.3/i.test(navigator.userAgent), bds.comm.topHijack) for (var o = 0; o < bds.comm.topHijack.length; o++) if ("hint_topHijack" == bds.comm.topHijack[o].templateName) {
			var i = bds.comm.topHijack[o].hintData.hintText;
			bds.se.banner($("body")[0], i)
		}
		if (bds.comm.tng && -1 == $.inArray(bds.comm.tng, t) && e && e.browser && "msie" == e.browser && e.ie && ("6" == e.ie || "7" == e.ie) && n > 0) {
			var i = "6" == e.ie ? "鎮ㄧ殑娴忚鍣ㄩ噰鐢ㄧ殑IE6鍐呮牳宸插仠姝㈢淮鎶わ紝鎺ㄨ崘鍗囩骇鍒版洿蹇洿瀹夊叏鐨勭櫨搴︽祻瑙堝櫒锛�": "鎮ㄧ殑IE娴忚鍣ㄧ増鏈緝浣庯紝鍗冲皢鍋滄鏇存柊缁存姢锛屽缓璁崌绾у埌鏇村揩銆佹洿瀹夊叏鐨勭櫨搴︽祻瑙堝櫒銆�";
			bds.se.banner($("body")[0], i, {
				downUrl: "http://j.br.baidu.com/v1/t/ui/p/browser/tn/10105001/ch_dl_url",
				cookie: "H_PS_BBANNER",
				nscTab: "browser"
			})
		}
	})
} (),
bds.se.safeTip = function() {
	function t() {
		var t = 0,
		e = ["bd"],
		n = "",
		o = [];
		$(".unsafe_ico_new").each(function(e, i) {
			o.push(i.getAttribute("data-id")),
			n = i.getAttribute("data-tpl");
			var s = $(i).attr("data-href"),
			r = $(i).attr("href"),
			a = s ? s: r;
			$("h3 a", $(i).parents(".result")).attr("href", a),
			t++
		}),
		t > 0 && ns_c({
			tab: "safetip",
			num_unsafe: t,
			prd: e.join("|"),
			hintId: o,
			hintTpl: n
		})
	}
	return {
		init: t
	}
} ();
var bds = bds || {};
bds.se = bds.se || {},
bds.se.trust = bds.se.trust || {},
bds.se.trust = function() {
	function t() {
		d = [],
		l = [],
		$(".c-trust").each(function() {
			var t = $(this),
			e = this.getAttribute("data_key");
			0 == t.parent(".c-icons-inner").length && t.wrap("<span class='c-icons-outer'><span class='c-icons-inner'></span></span>"),
			-1 == $.inArray(e, d) && d.push(this.getAttribute("data_key")),
			-1 == $.inArray(this, l) && l.push(this)
		}),
		$(".c-trust-as").each(function() {
			p = $.parseJSON($(this).attr("hint-data")),
			p && !$(this).attr("render") && (m = $(this), r(p, $(this).attr("hint-type")), $(this).attr("render", "render"))
		}),
		d.length < 1 || (f && g < d.length && (f = !1, h && h.abort()), e(), g = d.length)
	}
	function e() {
		f || (h = $.getJSON(u + "/?urls=" + d.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + c + "&callback=?", n), f = !0)
	}
	function n(t) {
		f = !1,
		0 == t.code && $(l).each(function() {
			var e = this.getAttribute("data_key");
			p = t.data[e],
			p && (m = $(this), m.html(""), p.vstar && p.vstar.hint && p.vstar.hint.length > 0 && o(p.vstar.hint[0].vlevel, p.vstar.url), p.medical && i(), p.aviation && s())
		})
	}
	function o(t, e) {
		var n = $("<span>", {
			"class": "c-vline"
		}),
		o = $("<a>", {
			"class": "c-icon c-icon-v" + t,
			target: "_blank",
			onclick: "return false",
			href: "#"
		});
		e && o.attr({
			href: e,
			onclick: ""
		}),
		m.append(n),
		m.append(o),
		r(p.vstar, "vstar")
	}
	function i() {
		var t = $("<span>", {
			"class": "c-vline"
		}),
		e = $("<a>", {
			"class": "c-icon c-icon-med",
			target: "_blank",
			onclick: "return false",
			href: "#"
		});
		m.append(t),
		m.append(e),
		r(p.medical, "medical")
	}
	function s() {
		var t = $("<span>", {
			"class": "c-vline"
		}),
		e = $("<a>", {
			"class": "c-icon c-icon-air",
			target: "_blank",
			onclick: "return false",
			href: "#"
		});
		m.append(t),
		m.append(e),
		r(p.aviation, "aviation")
	}
	function r(t, e) {
		var n = t.hint,
		o = "over",
		i = t.url,
		s = t.webIMUrl;
		if (t && n) {
			if ("vstar" == e || "baozhang" == e || "baozhang-v" == e || "chengqi" == e || "baozhang-v-auth" == e) var r = "<div class='c-tip-cer hitcon'><ul>";
			else var r = "<div class='c-tip-info hitcon'><ul>";
			for (var c = 0; c < n.length; c++)"" != n[c] ? (r += "<li ", r += n[c].icon ? "class='c-tip-item-i'><img src='" + n[c].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />": ">", r += a(n[c].txt), r += "</li>") : o = "none";
			r += "</ul></div>";
			var d = !1,
			l = !1;
			"baozhang-v" == e || "baozhang-v-auth" == e ? d = !0 : "chengqi" == e && (l = !0);
			var u = new bds.se.tip({
				target: m,
				mode: o,
				align: "auto",
				content: r,
				arrow: {
					has: 1,
					offset: 35,
					r: d,
					c: l
				},
				offset: {
					x: 0,
					y: 25
				}
			});
			u.onShow = function() {
				A.use("honourCard4",
				function() {});
				var o = n[0].vlevel,
				a = n[0].unfixedInfo;
				ns_c({
					hintUrl: m.attr("data_key"),
					hintTpl: e,
					hintId: o
				}),
				-1 != r.indexOf("ecard") && setTimeout(function() {
					A.use("honourCard4",
					function() {
						var r = $(u.getDom()).find(".c-trust-ecard4"),
						c = 0;
						"baozhang" == e && (c = n[0].bzAppliCounts);
						var d = {
							compName: t.label,
							vLevel: o,
							centerPageUrl: i
						};
						a && (d.unfixedInfo = a),
						s && (d.webIMUrl = s),
						e && (d.type = e),
						c && (d.bzAppliCounts = c),
						t.brandName && (d.brandName = t.brandName),
						t.brandLogo && (d.brandLogo = t.brandLogo),
						t.brandScope && (d.brandScope = t.brandScope),
						t.brandRelation && (d.brandRelation = t.brandRelation),
						t.authBrandName && (d.authBrandName = t.authBrandName),
						t.authBizScope && (d.authBizScope = t.authBizScope),
						t.authBizType && (d.authBizType = t.authBizType),
						A.ui.honourCard4(r, d)
					})
				},
				0),
				$("li", this.dom).each(function() {
					$("a", this).each(function(t) {
						this.onmousedown = function() {
							ns_c({
								hintUrl: i,
								hintTpl: e,
								title: this.innerHTML,
								pos: t
							})
						}
					})
				})
			}
		}
	}
	function a(t) {
		var e = t;
		return e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;"),
		e = e.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>"),
		e = e.replace(/\[img ([^\s]*)\]/, "<img src='$1' />"),
		e = e.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='c-trust-ecard4' value='$1'></div>")
	}
	var c = 4,
	d = [],
	l = [];
	if (bds.util && bds.util.domain && bds.util.domain.get) var u = bds.util.domain.get("http://tag.baidu.com");
	else var u = "http://tag.baidu.com";
	var m = null,
	p = null,
	f = !1,
	h = null,
	g = 0;
	return t(),
	{
		init: t,
		render: n
	}
} ();
var __callback_names = {};
$(function() {
	bds.comm.user && "" != bds.comm.user && setTimeout(function() {
		$.ajax({
			dataType: "script",
			cache: !0,
			url: (bds.su && bds.su.urStatic ? bds.su.urStatic: "http://ss.bdimg.com") + "/static/message/js/mt_show_1.8.js",
			success: function() {
				function t() {
					$("#imsg")[0] && $("#u")[0] && $("#user")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
						button: $("#imsg"),
						refer: $("#u")
					}), $("#user").on("mouseover",
					function() {
						$("#s_mod_msg").hide()
					})),
					$("#imsg1")[0] && $("#u1")[0] && $("#user1")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
						button: $("#imsg1"),
						refer: $("#u1")
					}), $("#user1").on("mouseover",
					function() {
						$("#s_mod_msg").hide()
					}))
				}
				function e() {
					bds.se.message && bds.se.message.addStyle && bds.se.message.addStyle()
				}
				bds.comm.loginAction.push(function(n) {
					1 == n && (t(), e())
				}),
				bds.comm.newindex ? $(window).on("index_off",
				function() {
					setTimeout(function() {
						t(),
						e()
					},
					0)
				}) : (t(), e()),
				$(window).on("swap_end", e)
			}
		})
	},
	0)
}),
$(window).on("swap_end",
function() {
	var t = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div>',
	e = "//www.baidu.com/cache/fpid/o_0108.swf",
	n = "//www.baidu.com/cache/fpid/ielib_0108.js",
	o = "//www.baidu.com/cache/fpid/chromelib_0108.js",
	i = document.title,
	s = {
		flashDomId: "_FP_userDataDiv",
		flashUrl: e,
		comDomId: "_FP_comDiv",
		IEStoreDomId: "_FP_userDataDiv"
	},
	r = navigator.userAgent.toLowerCase(),
	a = !1; (r.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(r)) && (a = !0);
	var c, d = !1,
	l = new RegExp("chrome/(\\d+)"),
	u = r.match(l);
	if (u && (d = !0, c = u[1]), !(d && c >= 39)) {
		$("body").append(t);
		var m = function(t) {
			a && window.setTimeout(function() {
				document.title = i
			},
			0),
			window._FPID_CACHE = t,
			$("#_FP_userDataDiv").remove(),
			$("#_FP_comDiv").remove();
			var e = bds.comm.qid,
			n = "_WWW_BR_API_" + (new Date).getTime(),
			o = window[n] = new Image;
			o.onload = function() {
				window[n] = null
			};
			var s = $.getCookie("BAIDUID"),
			r = $.getCookie("BIDUPSID"),
			c = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://eclick.baidu.com/ps_fp.htm?") : "http://eclick.baidu.com/ps_fp.htm?",
			d = c + "pid=ps&fp=" + t.data.fp + "&im=" + t.data.im + "&wf=" + t.data.wf + "&br=" + t.data.br + "&qid=" + e + "&bi=" + s + "&psid=" + r;
			o.src = d
		};
		return window._FPID_CACHE ? void(window._FPIDTimer = window.setTimeout(function() {
			m(window._FPID_CACHE)
		},
		2500)) : void(window._FPIDTimer = window.setTimeout(function() {
			var t = "";
			t = a ? n: o,
			$.ajax({
				url: t,
				cache: !0,
				dataType: "script",
				success: function() {
					fpLib.getFp(m, s)
				}
			})
		},
		2500))
	}
}),
$(window).on("swap_begin",
function() {
	window._FPIDTimer && (window.clearTimeout(window._FPIDTimer), $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove())
});
var bds = bds || {};
bds.se = bds.se || {},
bds.se.upn = {
	regexp: /BD_UPN=([\w|\d]*)/,
	cookieset: [],
	write: function(t) {
		document.cookie = "BD_UPN=" + t + "; expires=" + new Date((new Date).getTime() + 864e6).toGMTString()
	},
	set: function(t) {
		var e = this;
		try {
			$.isArray(t) && (e.cookieset = e.cookieset.concat(t))
		} catch(n) {}
	},
	run: function() {
		var t = this;
		try {
			for (var e = "",
			n = 0; n < t.cookieset.length; n++) if (t.cookieset[n] && t.cookieset[n].k && t.cookieset[n].v) {
				var o = t.cookieset[n].k + "",
				i = t.cookieset[n].v + "";
				if (o.length == i.length == 1) {
					var s = {};
					s[o] = i,
					e = e + o + i
				}
			}
			t.write(e)
		} catch(r) {}
	}
},
bds.se.upn.set(function() {
	function t() {
		return o.indexOf("lbbrowser") > 0 ? o.match(/lbbrowser/gi) : o.indexOf("maxthon") > 0 ? o.match(/maxthon\/[\d.]+/gi) : o.indexOf("bidubrowser") > 0 ? o.match(/bidubrowser/gi) : o.indexOf("baiduclient") > 0 ? o.match(/baiduclient/gi) : o.indexOf("metasr") > 0 ? o.match(/metasr/gi) : o.indexOf("qqbrowser") > 0 ? o.match(/qqbrowser/gi) : !
		function() {
			if (navigator.mimeTypes.length > 0) {
				var t;
				for (t in navigator.mimeTypes) if ("application/vnd.chromium.remoting-viewer" == navigator.mimeTypes[t].type) return ! 0
			}
			return ! 1
		} () && "track" in document.createElement("track") && !("scoped" in document.createElement("style")) && !("v8Locale" in window) && /Gecko\)\s+Chrome/.test(navigator.appVersion) && "track" in document.createElement("track") && "scoped" in document.createElement("style") && "v8Locale" in window ? "qihu": o.indexOf("msie") > 0 ? o.match(/msie [\d.]+;/gi) : window.document.documentMode ? "msie": o.indexOf("edge") > 0 ? o.match(/edge\/[\d.]+/gi) : o.indexOf("firefox") > 0 ? o.match(/firefox\/[\d.]+/gi) : o.indexOf("opr") > 0 ? o.match(/opr\/[\d.]+/gi) : o.indexOf("chrome") > 0 ? o.match(/chrome\/[\d.]+/gi) : o.indexOf("safari") > 0 && o.indexOf("chrome") < 0 ? o.match(/safari\/[\d.]+/gi) : ""
	}
	function e() {
		var t = "Win32" == navigator.platform || "Windows" == navigator.platform,
		e = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
		if (e) return "mac";
		var n = "X11" == navigator.platform && !t && !e;
		if (n) return "unix";
		var o = String(navigator.platform).indexOf("Linux") > -1;
		return o ? "linux": t ? "windows": "other"
	}
	var n = navigator.userAgent,
	o = n.toLowerCase();
	browser = (t() + "").replace(/[0-9.\/|;|\s]/gi, ""),
	browserversion = function() {
		return "msie" == browser ? n.search(/MSIE [2-5]/) > 0 ? "ie5": n.indexOf("MSIE 6") > 0 ? "ie6": n.indexOf("MSIE 7") > 0 ? "ie7": n.indexOf("MSIE 8") > 0 ? "ie8": n.indexOf("MSIE 9") > 0 ? "ie9": n.indexOf("MSIE 10") > 0 ? "ie10": "11" == window.document.documentMode ? "ie11": "other": ""
	} (),
	browsertype = function() {
		return o.indexOf("msie") > 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(o) ? "ie": o.indexOf("firefox") > 0 ? "firefox": o.indexOf("chrome") > 0 ? "chrome": o.indexOf("safari") > 0 && o.indexOf("chrome") < 0 ? "safari": "other"
	} (),
	os = e(),
	osversion = function() {
		return "windows" == os ? n.indexOf("Windows NT 5.1") > -1 || n.indexOf("Windows XP") > -1 ? "xp": (isWinVista = n.indexOf("Windows NT 6.0") > -1 || n.indexOf("Windows Vista") > -1) ? "vista": n.indexOf("Windows NT 6.1") > -1 || n.indexOf("Windows 7") > -1 ? "win7": n.indexOf("Windows NT 6.2") > -1 || n.indexOf("Windows 8") > -1 ? "win8": n.indexOf("Windows NT 6.3") > -1 || n.indexOf("Windows 8.1") > -1 ? "win8.1": n.indexOf("Windows NT 10") > -1 ? "win10": "other": void 0
	} ();
	var i = function(t) {
		var e = 0;
		switch (t) {
		case "msie":
			e = 1;
			break;
		case "chrome":
			e = 2;
			break;
		case "firefox":
			e = 3;
			break;
		case "safari":
			e = 4;
			break;
		case "opr":
			e = 5;
			break;
		case "lbbrowser":
			e = 6;
			break;
		case "maxthon":
			e = 7;
			break;
		case "bidubrowser":
			e = 8;
			break;
		case "metasr":
			e = 9;
			break;
		case "qqbrowser":
			e = "a";
			break;
		case "qihu":
			e = "b";
			break;
		case "baiduclient":
			e = "c";
			break;
		case "edge":
			e = "d"
		}
		return e
	} (browser),
	s = function(t) {
		var e = 0;
		switch (t) {
		case "ie6":
			e = 1;
			break;
		case "ie7":
			e = 2;
			break;
		case "ie8":
			e = 3;
			break;
		case "ie9":
			e = 4;
			break;
		case "ie10":
			e = 5;
			break;
		case "ie11":
			e = 6;
			break;
		case "other":
			e = 7;
			break;
		case "ie5":
			e = 8
		}
		return e
	} (browserversion),
	r = function(t) {
		var e = 0;
		switch (t) {
		case "windows":
			e = 1;
			break;
		case "mac":
			e = 2;
			break;
		case "linux":
			e = 3;
			break;
		case "unix":
			e = 4
		}
		return e
	} (os),
	a = function(t) {
		var e = 0;
		switch (t) {
		case "xp":
			e = 1;
			break;
		case "vista":
			e = 2;
			break;
		case "win7":
			e = 3;
			break;
		case "win8":
			e = 4;
			break;
		case "win8.1":
			e = 5;
			break;
		case "other":
			e = 6;
			break;
		case "win10":
			e = 7
		}
		return e
	} (osversion),
	c = function(t) {
		var e = 0;
		switch (t) {
		case "ie":
			e = 1;
			break;
		case "firefox":
			e = 2;
			break;
		case "chrome":
			e = 3;
			break;
		case "safari":
			e = 4
		}
		return e
	} (browsertype);
	return [{
		k: 1,
		v: i
	},
	{
		k: 2,
		v: s
	},
	{
		k: 3,
		v: r
	},
	{
		k: 4,
		v: a
	},
	{
		k: 5,
		v: c
	}]
} ()),
bds.se.upn.run(),
bds.se.heightControl = {
	check: function() {
		return $("#content_right").height() > $("#content_left").height()
	},
	cleanEC: function() {
		var t = $(".ec_bdtg"),
		e = $("#ec_im_container").children("div"),
		n = e.length,
		o = n - 1;
		for (bds.se.heightControl.check() && t && t.length && t.css("display", "none"); bds.se.heightControl.check() && o >= 0;) {
			var i = e[o];
			$(i).css("display", "none"),
			o--
		}
	},
	cleanRes: function() {
		var t = $("#content_right").find(".result-op"),
		e = t.length,
		n = e - 1;
		if (0 == n) {
			var o = $(t[0]).parent();
			$("#content_right").height() + t.height() < $("#content_left").height() && o.css({
				position: "static"
			})
		} else for (; bds.se.heightControl.check() && n > 0;) {
			var i = t[n];
			$(i).css("display", "none"),
			n--
		}
	},
	init: function() {
		bds.se.heightControl.cleanEC(),
		bds.se.heightControl.cleanRes()
	}
},
!
function() {
	function t() {
		this.start = null,
		this.mouse = [],
		this.mouseTime = null,
		this.mouseSpeed = 500,
		this.key = [],
		this.scroll = [],
		this.scrollTime = null,
		this.scrollSpeed = 500,
		this.debug = !1,
		this.dataStore = {},
		this.t = null,
		this.cycle = null,
		this.MIN_SPEED = 2e3,
		this.MAX_SPEED = 1e4,
		this.curSpeed = 5e3,
		this.stayTime = 0,
		this.heartTime = [],
		this.heartT = null,
		this.MAX_LEN = 2e3,
		this.storeLen = -1,
		this.MAX_SEND = 100,
		this.hostEnum = {
			SCLICK: 0,
			NSCLICK: 1,
			SESTAT: 2
		},
		this.keyMap = {
			new_input: 2,
			new_disp: 2,
			new_view: 2,
			new_user: 2,
			new_heart: 2,
			flow_monitor: 2
		},
		this.hostAddr = [bds && bds.comm && bds.comm.ubsurl ? bds.comm.ubsurl + "?": "", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com") + "/v.gif?", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sestat.baidu.com") : "http://sestat.baidu.com") + "/wb.gif?"],
		this.commLog = {},
		this.isFirst = !0,
		this.sendNum = {},
		this.init()
	}
	t.prototype = {
		setCommLog: function(t, e, n) {
			if (!bds || !bds.comm) return ! 1;
			if (! (t in this.commLog)) {
				var o = {};
				e && n ? (o.log = e, o.len = n) : (o.log = "&q=" + bds.comm.queryEnc + "&qid=" + bds.comm.qid + "&rsv_did=" + bds.comm.did + "&rsv_tn=" + bds.comm.tn + "&rsv_sid=" + bds.comm.sid, o.len = (o.log + "&t=" + (new Date).getTime()).length),
				this.commLog[t] = o
			}
			return ! 0
		},
		fb: function() {
			var t, e = this.heartTime.length;
			return t = 0 === e || 1 === e ? 3e3: this.heartTime[e - 1] + this.heartTime[e - 2],
			this.heartTime.push(t),
			t
		},
		sendHeart: function(t) {
			var e = 0 === t ? this.stayTime: (new Date).getTime() - this.start,
			n = bds && bds.comm && bds.comm.qid;
			if (n && n in this.commLog && n in this.sendNum) {
				var o = [{
					stay_time: e,
					send_num: this.sendNum[n]
				}];
				this.send({
					type: t,
					fm: "new_heart",
					data: o
				},
				this.keyMap.new_heart)
			}
		},
		startHeart: function() {
			var t = this,
			e = t.fb();
			t.stayTime += e,
			t.heartT = setTimeout(function() {
				t.sendHeart(0),
				t.startHeart()
			},
			e)
		},
		preInit: function() {
			this.start = (new Date).getTime(),
			this.mouse = [],
			null !== this.mouseTime && clearTimeout(this.mouseTime),
			this.mouseTime = null,
			this.key = [],
			this.scroll = [],
			null !== this.scrollTime && clearTimeout(this.scrollTime),
			this.scrollTime = null,
			this.cycle = null,
			null !== this.t && clearTimeout(this.t),
			this.t = null,
			this.storeLen = -1;
			var t = bds && bds.comm && bds.comm.qid ? bds.comm.qid: "";
			t && (this.setCommLog(t), this.sendNum[t] = 0),
			bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && 0 === bds.comm.ishome && (null !== this.heartT && clearTimeout(this.heartT), this.heartT = null, this.stayTime = 0, this.heartTime = [], this.startHeart())
		},
		collectPoint: function(t, e) {
			function n(t, e) {
				var n = [];
				if ("mouse" === t) n[0] = e.pageX,
				n[1] = e.pageY;
				else if ("scroll" === t) {
					var o = $(window);
					n[0] = o.scrollLeft(),
					n[1] = o.scrollTop()
				}
				return n
			}
			var o = t + "Time",
			i = this[t + "Speed"],
			s = this;
			if (0 === s[t].length) {
				var r = n(t, e);
				if (r.length < 2) return;
				return void s[t].push([(new Date).getTime() - s.start, r[0], r[1]])
			}
			null === s[o] && (s[o] = setTimeout(function() {
				var i = n(t, e);
				return i.length < 2 ? void(s[o] = null) : (s[t].push([(new Date).getTime() - s.start, i[0], i[1]]), void(s[o] = null))
			},
			i))
		},
		singleInit: function() {
			var t = this;
			$("body").on("mousemove",
			function(e) {
				t.collectPoint("mouse", e)
			}).on("keydown",
			function(e) {
				t.key.push([(new Date).getTime() - t.start, e.keyCode])
			}),
			$(window).on("scroll",
			function(e) {
				t.collectPoint("scroll", e)
			}),
			t.singleInit = function() {}
		},
		flushData: function(t) {
			null !== this.t && (clearTimeout(this.t), this.t = null),
			this.startSend(this.fetchData(t, !0), !0),
			this.startSend(this.fetchData(t, !0)),
			bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && (null !== this.heartT && (clearTimeout(this.heartT), this.heartT = null), this.sendHeart(t))
		},
		init: function() {
			var t = this;
			t.preInit(),
			$(window).on("swap_begin",
			function() {
				null !== t.t && (clearTimeout(t.t), t.t = null),
				bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlag || 1 === bds.comm.globalLogFlag) && t.isFirst === !1 && t.sendHeart(1)
			}).on("unload",
			function() {
				bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && t.flushData(2)
			}).on("swap_end",
			function() {
				t.preInit(),
				t.isFirst === !0 && (t.isFirst = !1),
				!t.hostAddr[0] && bds && bds.comm && bds.comm.ubsurl && (t.hostAddr[0] = bds.comm.ubsurl + "?")
			})
		},
		getData: function(t, e, n) {
			if (null === this.start || 0 === t.length) return {
				startTime: this.start,
				record: []
			};
			var o = {
				startTime: this.start,
				record: []
			},
			i = e,
			s = n;
			void 0 === i ? (i = 0, s = t[t.length - 1][0]) : void 0 !== i && "number" == typeof i && void 0 === s ? (i -= this.start, s = t[t.length - 1][0]) : void 0 !== i && "number" == typeof i && void 0 !== s && "number" == typeof s ? (i -= this.start, s -= this.start) : (i = 0, s = 0);
			for (var r in t) if (! (t[r][0] < i) && (t[r][0] < s && o.record.push(t[r]), t[r][0] >= s)) break;
			return o
		},
		send: function(t, e, n) {
			if (!t) return ! 1;
			if (this.debug, 0 === e && !this.hostAddr[0]) {
				if (! (bds && bds.comm && bds.comm.ubsurl)) return ! 1;
				this.hostAddr[0] = bds.comm.ubsurl + "?"
			}
			var o = "",
			i = "",
			s = "";
			if ("object" == typeof t) {
				for (var r in t) o = t[r],
				"object" == typeof o && (o = $.stringify(o)),
				i += r + "=" + encodeURIComponent(o) + "&";
				i = i.substring(0, i.length - 1)
			} else "string" == typeof t && (i = t);
			if (!n && bds && bds.comm && bds.comm.qid && (n = bds.comm.qid), !(n && n in this.commLog)) return ! 1;
			if (i += this.commLog[n].log, i += "&t=" + (new Date).getTime(), ("number" != typeof e || 0 > e || e >= this.hostAddr.length) && (e = 0), s = this.hostAddr[e] + i, s.length > this.MAX_LEN) return ! 1;
			var a = window["BD_PS_C" + (new Date).getTime()] = new Image;
			return a.src = this.hostAddr[e] + i,
			!0
		},
		sendNow: function(t, e, n) {
			if (t && "string" == typeof t && t in this.keyMap && e) {
				var o = "type=3&fm=" + t + "&data=" + encodeURIComponent($.stringify([e]));
				n && n.qid && n.log && n.len ? (this.setCommLog(n.qid, n.log, n), this.send(o, this.keyMap[t], n.qid)) : send(o, this.keyMap[t])
			}
		},
		pushData: function(t, e, n) {
			var o = bds && bds.comm && bds.comm.qid ? bds.comm.qid: "";
			if (!o) return ! 1;
			n && n.qid && n.log && n.len ? (this.setCommLog(n.qid, n.log, n.len), o = n.qid) : this.setCommLog(o),
			o in this.dataStore || (this.dataStore[o] = {});
			var i = this.dataStore[o];
			t in i || (i[t] = [[], []]),
			n && n.level === !0 ? i[t][0].push(encodeURIComponent($.stringify(e))) : i[t][1].push(encodeURIComponent($.stringify(e)))
		},
		fetchData: function(t, e) {
			function n() {
				for (var e, n = 0,
				o = [], s = !1, d = this.commLog[l].len, m = this.hostAddr[a].length, p = m + ("type=" + t + "&fm=" + u + "&data=").length + d, f = p + 6, h = f; 0 !== i.length && n < this.MAX_SEND;) c === !1 && 0 === t && n++,
				e = i.shift(),
				o.push(e),
				h = f + e.length + 3,
				(f >= this.MAX_LEN || h >= this.MAX_LEN) && (o.length >= 2 && (o.pop(), s = !0), r.push({
					qid: l,
					key: u,
					type: t,
					data: "%5B" + o.join("%2C") + "%5D",
					host: a
				}), o = [], s && (o[0] = e, s = !1), h = o.length > 0 ? p + 3 + e.length + 3 : p + 6),
				f = h;
				o.length > 0 && r.push({
					qid: l,
					key: u,
					type: t,
					data: "%5B" + o.join("%2C") + "%5D",
					host: a
				})
			}
			var o, i, s = this.dataStore,
			r = [],
			a = 0,
			c = !1,
			d = bds && bds.comm && bds.comm.qid ? bds.comm.qid: "";
			if (!d) return [];
			for (var l in s) {
				c = l !== d ? !0 : !1,
				o = s[l];
				for (var u in o) u in this.keyMap && (a = this.keyMap[u], "number" == typeof a && void 0 !== this.hostAddr[a] && (i = o[u][0].length > 0 ? o[u][0] : o[u][1], n.call(this), (c === !0 || e !== !0) && 0 === i.length && o[u][1].length > 0 && (i = o[u][1], n.call(this)), c === !0 && delete this.dataStore[l]))
			}
			return r
		},
		startSend: function(t, e) {
			var n, o, i = this,
			s = e === !0 ? 0 : 100,
			r = setInterval(function() {
				return t.length <= 0 ? void clearInterval(r) : (n = t.shift(), void(n && n.qid && n.qid in i.commLog && (o = "type=" + n.type + "&fm=" + n.key + "&data=" + n.data, i.send(o, n.host, n.qid), n.qid in i.sendNum && (i.sendNum[n.qid] += 1))))
			},
			s)
		},
		startCycle: function() {
			var t = this;
			null === t.cycle && (t.cycle = 1),
			t.t = setTimeout(function() {
				var e = t.fetchData(0),
				n = e.length; - 1 === t.storeLen && (t.storeLen = n),
				0 !== t.storeLen && n / t.storeLen >= 2 && t.curSpeed > t.MIN_SPEED && (t.curSpeed -= 1e3),
				(0 === n || t.storeLen / n >= 2) && t.curSpeed < t.MAX_SPEED && (t.curSpeed += 1e3),
				t.startSend(e, 0),
				t.startCycle()
			},
			t.curSpeed)
		},
		outInterface: function() {
			var t = this;
			return {
				hostEnum: t.hostEnum,
				api: {
					getMouseLocus: function(e, n) {
						return t.getData(t.mouse, e, n)
					},
					getKeyRecord: function(e, n) {
						return t.getData(t.key, e, n)
					},
					getScrollRecord: function(e, n) {
						return t.getData(t.scroll, e, n)
					},
					startAPI: function() {
						t.singleInit()
					}
				},
				send: {
					debug: function() {
						t.debug = !0
					},
					send: function(e, n) {
						return t.send(e, n)
					},
					sendNow: function(e, n, o) {
						return t.sendNow(e, n, o)
					},
					sendPack: function(e, n, o) {
						e && "string" == typeof e && e in t.keyMap && n && (t.pushData(e, n, o), null === t.cycle && t.startCycle())
					}
				}
			}
		}
	},
	bds.log = (new t).outInterface()
} (),
$(window).on("swap_end",
function() {
	function t() {
		return !! window.ActiveXObject && (!document.documentMode || document.documentMode <= 7)
	}
	bds.comm.encTn && $.setCookie("H_PS_645EC", bds.comm.encTn, {
		expires: 2592e3
	}),
	bds.se.trust && bds.se.trust.init(),
	bds.se.heightControl.init(),
	bds.util.setContainerWidth(),
	$(".content_none").length > 0 && new bds.util.setFootStyle,
	bds.comm.feedback = 0,
	bds.comm.feedback ? t() ? $(document).delegate(".feedback", "click",
	function() {
		var t = this;
		$.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js",
		function() {
			var e = t.getAttribute("data-feedbackid") || 1,
			n = {
				product_id: 18,
				entrance_id: e
			},
			o = {
				username: bds.comm.username,
				query: bds.comm.query,
				fb_qid: bds.comm.qid
			};
			bds.qa.ShortCut.initRightBar(n, o)
		})
	}) : $(".feedback").on("click",
	function() {
		bds.se.ShortCut.initRightBar()
	}) : $(document).delegate(".feedback", "click",
	function() {
		var t = this;
		$.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js",
		function() {
			var e = t.getAttribute("data-feedbackid") || 1,
			n = {
				product_id: 18,
				entrance_id: e
			},
			o = {
				username: bds.comm.username,
				query: bds.comm.query,
				fb_qid: bds.comm.qid
			};
			bds.qa.ShortCut.initRightBar(n, o)
		})
	});
	var e = $("#form").find('input[type="hidden"][name=rsv_t]');
	e.length ? $(e).val(bds.comm.encTn) : $("#form").append('<input type="hidden" name="rsv_t" value="' + bds.comm.encTn + '"/>'),
	bds.comm.did = function() {
		for (var t = "",
		e = 0; 32 > e; e++) t += Math.floor(16 * Math.random()).toString(16);
		return t
	} ()
}),
!
function() {
	$(window).one("swap_end",
	function() {
		$("body").on("mousedown", ".se_common_hint a",
		function() {
			var t = $(this),
			e = t.parents(".se_common_hint"),
			n = e.attr("data-id") || "",
			o = e.attr("data-tpl") || "",
			i = e.find("a").index(t);
			ns_c_pj({
				hintId: n,
				hintTpl: o,
				title: t.html(),
				pos: i,
				qid: bds.comm.qid || ""
			},
			"pj=hint&")
		})
	})
} (),
$(function() {
	$("#u,#u1").delegate(".lb", "click",
	function() {
		var t = $(this).attr("data-subpro");
		t && bds.se.login.setSubpro(t);
		try {
			bds.se.login.open()
		} catch(e) {}
	})
}),
$.ajax({
	dataType: "script",
	cache: !0,
	url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/js/nu_instant_search_08089ad.js"
}),
window.PRE_CONN = function() {
	var t, e = function(t, e) {
		var n = 1 * new Date;
		t = bds.util.domain && bds.util.domain.get ? bds.util.domain.get(t) : t;
		var i = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
		s = t.match(i);
		if (s[2] && !o[s[2]]) {
			o.push(s[2]);
			var r = new Image;
			r.src = t + "?_t=" + (e ? e: n),
			r.onload = r.onerror = function() {
				r = null
			}
		}
	},
	n = 0,
	o = [],
	i = function() {
		try {
			window.pageState && 0 != window.pageState && 1 != n || ($("#kw1,#kw").one("keydown",
			function() {
				"https:" === location.protocol ? (e("https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss1.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss2.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss3.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif")) : (e("http://b1.bdstatic.com/img/pc.gif", parseInt(1e3 * Math.random())), e("http://ecmb.bdimg.com/public03/pc.gif"), $.each(["i7", "i8", "i9", "t10", "t11", "t12"],
				function(t, n) {
					e("http://" + n + ".baidu.com/ps_default.gif")
				}))
			}), 1 == n && $("#kw1,#kw").one("focus",
			function() {
				"https:" === location.protocol && e("https://www.baidu.com/con?from=self")
			}))
		} catch(t) {}
	},
	s = function() {
		n = 1,
		i(),
		a()
	},
	r = function() {
		a(),
		t = setTimeout(s, 55e3)
	},
	a = function() {
		clearTimeout(t),
		n = 0
	};
	return i(),
	{
		init: i,
		startTimer: r
	}
} (),
!
function() {
	$.ajaxPrefilter("parts",
	function(t, e, n) {
		t.__partsCallback = [],
		t.__partsIndex = 0,
		n.parts = function(e) {
			t.__partsCallback.push(e)
		},
		t.parts && n.parts(t.parts),
		t.converters["* parts"] = function(t) {
			return t
		}
	}),
	$.ajaxTransport("parts",
	function(t) {
		if (!t.crossDomain || support.cors) {
			var e;
			return {
				send: function(n, o) {
					var i, s = t.xhr();
					if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (i in t.xhrFields) s[i] = t.xhrFields[i];
					t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
					t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
					s.send(t.hasContent && t.data || null),
					e = function(n, i) {
						var r, a, c;
						if (3 !== s.readyState && 4 !== s.readyState || i || !
						function() {
							var e = t.delimiter,
							n = "";
							try {
								n = s.responseText
							} catch(o) {}
							if ("" != n) {
								var i, r, a = -1,
								c = 0;
								if (e) for (;;) {
									for (; c <= t.__partsIndex && (i = -1 == a ? 0 : a + e.length, a = n.indexOf(e, i), -1 != a); c++);
									if ( - 1 == a && 4 !== s.readyState) return;
									for (r = 0; r < t.__partsCallback.length; r++) t.__partsCallback[r].call(s, n.substring(i, -1 == a ? n.length: a), t.__partsIndex, n);
									if (t.__partsIndex++, -1 == a) return
								} else for (c = 0; c < t.__partsCallback.length; c++) t.__partsCallback[c].call(s, n)
							}
						} (), e && (i || 4 === s.readyState)) if (e = void 0, s.onreadystatechange = jQuery.noop, i) 4 !== s.readyState && s.abort();
						else {
							c = {},
							r = s.status,
							"string" == typeof s.responseText && (c.text = s.responseText);
							try {
								a = s.statusText
							} catch(d) {
								a = ""
							}
							r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
						}
						c && o(r, a, c, s.getAllResponseHeaders())
					},
					t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = e: e()
				},
				abort: function() {
					e && e(void 0, !0)
				}
			}
		}
	})
} (),
!
function() {
	function save(t) {
		var e = [];
		for (tmpName in options) options.hasOwnProperty(tmpName) && "duRobotState" !== tmpName && e.push('"' + tmpName + '":"' + options[tmpName] + '"');
		var n = "{" + e.join(",") + "}";
		bds.comm.personalData ? $.ajax({
			url: "//www.baidu.com/ups/submit/addtips/?product=ps&tips=" + encodeURIComponent(n) + "&_r=" + (new Date).getTime(),
			success: function() {
				writeCookie(),
				"function" == typeof t && t()
			}
		}) : (writeCookie(), "function" == typeof t && setTimeout(t, 0))
	}
	function set(t, e) {
		options[t] = e
	}
	function get(t) {
		return options[t]
	}
	function writeCookie() {
		if (options.hasOwnProperty("sugSet")) {
			var t = "0" == options.sugSet ? "0": "3";
			clearCookie("sug"),
			Cookie.set("sug", t, document.domain, "/", expire30y)
		}
		if (options.hasOwnProperty("sugStoreSet")) {
			var t = 0 == options.sugStoreSet ? "0": "1";
			clearCookie("sugstore"),
			Cookie.set("sugstore", t, document.domain, "/", expire30y)
		}
		if (options.hasOwnProperty("isSwitch")) {
			var e = {
				0 : "2",
				1 : "0",
				2 : "1"
			},
			t = e[options.isSwitch];
			clearCookie("ORIGIN"),
			Cookie.set("ORIGIN", t, document.domain, "/", expire30y)
		}
		if (options.hasOwnProperty("imeSwitch")) {
			var t = options.imeSwitch;
			clearCookie("bdime"),
			Cookie.set("bdime", t, document.domain, "/", expire30y)
		}
	}
	function writeBAIDUID() {
		var t, e, n, o = Cookie.get("BAIDUID");
		/FG=(\d+)/.test(o) && (e = RegExp.$1),
		/SL=(\d+)/.test(o) && (n = RegExp.$1),
		/NR=(\d+)/.test(o) && (t = RegExp.$1),
		options.hasOwnProperty("resultNum") && (t = options.resultNum),
		options.hasOwnProperty("resultLang") && (n = options.resultLang),
		Cookie.set("BAIDUID", o.replace(/:.*$/, "") + ("undefined" != typeof n ? ":SL=" + n: "") + ("undefined" != typeof t ? ":NR=" + t: "") + ("undefined" != typeof e ? ":FG=" + e: ""), ".baidu.com", "/", expire30y, !0)
	}
	function clearCookie(t) {
		Cookie.clear(t, "/"),
		Cookie.clear(t, "/", document.domain),
		Cookie.clear(t, "/", "." + document.domain),
		Cookie.clear(t, "/", ".baidu.com")
	}
	function reset(t) {
		options = defaultOptions,
		save(t)
	}
	var defaultOptions = {
		sugSet: 1,
		sugStoreSet: 1,
		isSwitch: 1,
		isJumpHttps: 1,
		imeSwitch: 0,
		resultNum: 10,
		skinOpen: 1,
		resultLang: 0,
		duRobotState: "000"
	},
	options = {},
	tmpName,
	expire30y = new Date;
	expire30y.setTime(expire30y.getTime() + 94608e7);
	try {
		if (bds && bds.comm && bds.comm.personalData) {
			if ("string" == typeof bds.comm.personalData && (bds.comm.personalData = eval("(" + bds.comm.personalData + ")")), !bds.comm.personalData) return;
			for (tmpName in bds.comm.personalData) defaultOptions.hasOwnProperty(tmpName) && bds.comm.personalData.hasOwnProperty(tmpName) && "SUCCESS" == bds.comm.personalData[tmpName].ErrMsg && (options[tmpName] = bds.comm.personalData[tmpName].value)
		}
		try {
			parseInt(options.resultNum) || delete options.resultNum,
			parseInt(options.resultLang) || "0" == options.resultLang || delete options.resultLang
		} catch(e) {}
		writeCookie(),
		"sugSet" in options || (options.sugSet = 3 != Cookie.get("sug", 3) ? 0 : 1),
		"sugStoreSet" in options || (options.sugStoreSet = Cookie.get("sugstore", 0));
		var BAIDUID = Cookie.get("BAIDUID");
		"resultNum" in options || (options.resultNum = /NR=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 10),
		"resultLang" in options || (options.resultLang = /SL=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 0),
		"isSwitch" in options || (options.isSwitch = 2 == Cookie.get("ORIGIN", 0) ? 0 : 1 == Cookie.get("ORIGIN", 0) ? 2 : 1),
		"imeSwitch" in options || (options.imeSwitch = Cookie.get("bdime", 0))
	} catch(e) {}
	window.UPS = {
		writeBAIDUID: writeBAIDUID,
		reset: reset,
		get: get,
		set: set,
		save: save
	}
} ();
var ie = navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/),
ie6 = ie && 6 == ie[1];
if (window._is_skin_sam && !ie6) {
	var url = "";
	"1" == window._is_skin_sam ? url = "../../skin/js/skin_1.js": "2" == window._is_skin_sam ? url = "../../skin/js/skin_2.js": "3" == window._is_skin_sam && (url = "../../skin/js/skin_3.js");
	var skinDefer = null;
	if (url) var skinDefer = $.ajax({
		dataType: "script",
		cache: !0,
		url: url
	});
	skinDefer && skinDefer.done(function() {
		$(window).on("swap_end",
		function() {
			bds.se.skin && new bds.se.skin
		}),
		$(window).on("swap_begin",
		function() {
			bds.se.skin && bds.se.skin.prototype.dispose()
		})
	})
} !
function() {
	var t = {},
	e = function(t) {
		var e = o(t);
		i(e)
	},
	n = function(n, o) {
		var i = Math.random();
		i > .2 && .201 > i && "http:" == location.protocol && (t.url = n, t.headers = o, $.ajax({
			url: n,
			headers: o,
			success: e
		}))
	},
	o = function(e) {
		if ("string" == typeof e && "object" == typeof t.headers) {
			if (t.headers.hasOwnProperty("content_syni") && 12495 !== e.length) return e;
			if (t.headers.hasOwnProperty("content_syns") && 19295 !== e.length) return e
		}
		return "normal"
	},
	i = function(t) {
		$.ajax({
			url: "//www.baidu.com/r/plog",
			type: "post",
			data: {
				page_html: t
			}
		})
	};
	window.ctwin = {
		sendRequest: n
	}
} ();
var bds = bds || {};
bds.se = bds.se || {},
bds.se.speedTester = function() {
	function t() {}
	function e(t, e, i) {
		i = i || 19558,
		n(t,
		function(t) {
			return function(e, n, i) {
				o(t, n, i)
			}
		} (e),
		function(t) {
			return function() {
				o(t)
			}
		} (e), i)
	}
	function n(e, n, o, i) {
		n = n || t,
		o = o || t;
		var s = new Image;
		s.onload = function() {
			this.onload = this.onerror = null,
			i = this.fileSize || i;
			var t = new Date,
			e = t - r,
			o = i / e;
			n(this, e, o)
		},
		s.onerror = function() {
			this.onload = this.onerror = null,
			o(this)
		};
		var r = new Date;
		s.src = e
	}
	function o(t, e, n) {
		var o = new Image;
		o.onload = o.onerror = function() {
			this.onload = this.onerror = null
		},
		o.src = t + (e ? "&t=" + e + "&v=" + n: "&t=-1&v=-1") + "&r=" + Math.random()
	}
	return {
		start: e
	}
} (),
bds.se.speedMonitor = function(t) {
	function e() {
		var t = d.pop();
		t && n(t),
		a && (c = window.setTimeout(e, r))
	}
	function n(t) {
		var e = t.url,
		n = t.size || -1,
		o = [];
		o.push("id=" + encodeURIComponent(t.id)),
		o.push("name=" + encodeURIComponent(t.name)),
		o.push("url=" + encodeURIComponent(t.url)),
		o.push("size=" + encodeURIComponent(t.id));
		for (key in t.logData) o.push(key + "=" + encodeURIComponent(t.logData[key]));
		bds.se.speedTester.start(e, l + "&" + o.join("&"), n)
	}
	function o() {
		return ! 0
	}
	var i = t.logPath || "",
	s = t.flag || "default",
	r = t.sleep || "1000",
	a = !1,
	c = null,
	d = [],
	l = i + "?flag=" + s;
	this.start = function() {
		this.stop(),
		a = !0,
		e()
	},
	this.stop = function() {
		a = !1,
		window.clearInterval(c)
	},
	this.addTask = function(t) {
		o(t) && d.push(t)
	},
	this.clear = function() {
		d = []
	}
},
setTimeout(function() {
	var t = Math.random(),
	e = "http://velocity.baidu.com/sp";
	if ("https:" == location.protocol && (e = "https://sp0.baidu.com/6r1_czmhAB63otqbppnN2DJv/sp"), .01 > t) {
		var n = document.createElement("script");
		n.src = e,
		document.body.appendChild(n)
	}
},
1e3),
!
function(t) {
	var t = t || {};
	t.se = t.se || {},
	t.se.QuickDelete = function(t, e) {
		this.form = t,
		this.options = e,
		this._init()
	},
	t.se.QuickDelete.prototype = {
		constructor: t.se.QuickDelete,
		_init: function() {
			this._create_elem(),
			this._bind_event()
		},
		_create_elem: function() {
			var t = this.form,
			e = this.options,
			n = e.top || 0,
			o = e.right || 0,
			i = $.trim(t.val()) ? "block": "none",
			s = "quickdelete",
			r = t.parent(),
			a = $('<a href="javascript:;"></a>').attr("id", s).attr("title", "娓呯┖").addClass("quickdelete");
			r.addClass("quickdelete-wrap").append(a),
			a.css({
				top: n + "px",
				right: o + "px",
				display: i
			}),
			e.wrapElem = r,
			e.elem = a
		},
		_show: function() {
			0 === t.comm.ishome && this.options.elem.show()
		},
		_hide: function() {
			this.options.elem.hide()
		},
		_bind_event: function() {
			var e = this.form,
			n = this.options.elem,
			o = this;
			e.on("focus",
			function() {
				$.trim(e.val()) ? o._show() : o._hide()
			}).on("keyup input propertychange",
			function() {
				$.trim(e.val()) ? o._show() : o._hide()
			}),
			n.on("click",
			function() {
				var n = t.comm.supportis ? 2 : 0;
				return ns_c({
					input_clear: t.comm.ishome + n,
					delete_query: encodeURIComponent(e.val())
				}),
				e.val("").focus(),
				o._hide(),
				!1
			}),
			$(window).on("swap_end index_off",
			function() {
				$.trim(e.val()) ? o._show() : o._hide()
			})
		}
	},
	new t.se.QuickDelete($("#kw"), {
		top: 0,
		right: 0
	})
} (bds),
window.bds && bds.comm && bds.comm.ishome && $(window).on("load",
function() {
	if (window.ctwin && window.ctwin.sendRequest("//www.baidu.com/?tn=baidu", {
		content_syni: 1
	}), window.performance && performance.timing) {
		var t = function() {
			var t = n("navigation"),
			e = n("domainLookup"),
			o = n("connect"),
			i = n("secureConnection"),
			s = (n("redirect"), n("request")),
			r = n("response"),
			a = {
				start: performance.timing.domLoading,
				end: performance.timing.domComplete
			},
			c = n("loadEvent");
			return {
				navigation: o.start - t.start,
				dns: e.value,
				tcp: o.value,
				ssl: i.start > 0 ? o.end - i.start: 0,
				request: r.start - s.start,
				response: r.value,
				dom: a.end - a.start,
				loadEvent: c.end - t.start
			}
		},
		e = Cookie.get("__bsi"),
		n = function(t) {
			var e = performance.timing,
			n = e[t + "Start"] ? e[t + "Start"] : 0,
			o = e[t + "End"] ? e[t + "End"] : 0;
			return {
				start: n,
				end: o,
				value: o - n > 0 ? o - n: 0
			}
		},
		o = function() {
			var n = [],
			o = t();
			for (var i in o) n.push(i + "=" + o[i]);
			n.push("protocol=" + encodeURIComponent(location.protocol));
			var s = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=timing&",
			r = "";
			r += n.join("&"),
			r += "&newindex=" + (window.bds && bds.comm ? bds.comm.newindex: -1),
			e && (r += "&bsi=" + e);
			var a = s + r,
			c = new Image,
			d = "_LOG_" + (new Date).getTime();
			c.onload = function() {
				delete window[d]
			},
			window[d] = c,
			c.src = a
		},
		i = Math.random();
		/8498/.test(bds.comm.indexSid) && .01 > i && setTimeout(o, 500)
	}
}),
$(window).on("swap_end",
function() {
	bds.comm.search_tool && (bds.comm.search_tool.init = !1)
}),
$(window).on("swap_begin",
function() {
	$(document).off("click.searchTool")
});
var langfilterTip, timefilterTip, fileTypeTip, insideSearchTip;
$(document).delegate(".head_nums_cont_outer", "mousedown",
function() {
	if ("undefined" != typeof bds.comm.search_tool) {
		if (bds.comm.search_tool.init) return;
		bds.comm.search_tool.init = !0;
		var t = $(this),
		e = t.find(".search_tool").eq(0),
		n = t.find(".search_tool_close").eq(0),
		o = t.find(".head_nums_cont_inner").eq(0);
		e.on("click",
		function() {
			o.animate({
				top: 0
			},
			250),
			ns_c({
				fm: "advTool",
				qid: bds.comm.qid,
				title: encodeURI("鎼滅储宸ュ叿"),
				rsv_advTool: 0
			})
		}),
		n.on("click",
		function() {
			o.animate({
				top: -42
			},
			250,
			function() {
				"en" == bds.comm.search_tool.sl_lang || bds.comm.search_tool.st || bds.comm.search_tool.et || bds.comm.search_tool.si || bds.comm.search_tool.ft || bds.comm.search_tool.exact ? (ns_c({
					fm: "advTool",
					qid: bds.comm.qid,
					title: encodeURI("娓呴櫎"),
					rsv_advTool: 2
				}), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/(filetype:[^\s]* )|(site:[^\s]*)/g, "").replace(/^\"+(.+)\"+$/, "$1")) + "&sl_lang=cn&rsv_srlang=cn&rsv_rq=cn&ct=0&si=&tfflag=0&gpc=" + encodeURIComponent("stf=")), $("input[name='gpc'],input[name='si'],input[name='ct']", "form").val("")) : ns_c({
					fm: "advTool",
					qid: bds.comm.qid,
					title: encodeURI("鏀惰捣宸ュ叿"),
					rsv_advTool: 1
				})
			})
		});
		var i = t.find(".search_tool_la").eq(0);
		if (i.length > 0) {
			var s = "<div class='c-tip-menu c-tip-langfilter'><ul>";
			"en" == bds.comm.search_tool.sl_lang ? (s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"cn\",this.innerHTML)'>鎵€鏈夌綉椤�</a></li>", s += "<li><span>鑻辨枃缃戦〉</span></li>") : "cn" == bds.comm.search_tool.sl_lang && (s += "<li><span>鎵€鏈夌綉椤�</span></li>", s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"en\",this.innerHTML)'>鑻辨枃缃戦〉</a></li>"),
			s += "</li></ul></div>",
			langfilterTip = new bds.se.tip({
				target: i,
				mode: "none",
				content: $(s),
				arrow: {
					has: 0,
					offset: 0
				},
				offset: {
					x: 15,
					y: 21
				}
			}),
			langfilterTip.hide()
		}
		var r = t.find(".search_tool_tf").eq(0);
		if (r.length > 0) {
			var a = "<div class='c-tip-menu c-tip-timerfilter'><ul>";
			a += bds.comm.search_tool.st || bds.comm.search_tool.et ? " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf\",this.innerHTML,0)'>鏃堕棿涓嶉檺</a></li>": " <li><span>鏃堕棿涓嶉檺</span></li>",
			a += bds.comm.search_tool.st >= bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>涓€澶╁唴</span></li>": " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneDay + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,1)'>涓€澶╁唴</a></li>",
			a += bds.comm.search_tool.st >= bds.comm.search_tool.thisWeek && bds.comm.search_tool.st < bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>涓€鍛ㄥ唴</span></li>": " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneWeek + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,2)'>涓€鍛ㄥ唴</a></li>",
			a += bds.comm.search_tool.st >= bds.comm.search_tool.thisMonth && bds.comm.search_tool.st < bds.comm.search_tool.thisWeek && "1" == bds.comm.search_tool.stftype ? " <li><span>涓€鏈堝唴</span></li>": " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneMonth + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,3)'>涓€鏈堝唴</a></li>",
			a += bds.comm.search_tool.st >= bds.comm.search_tool.thisYear && bds.comm.search_tool.st < bds.comm.search_tool.thisMonth && "1" == bds.comm.search_tool.stftype ? " <li><span>涓€骞村唴</span></li>": " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneYear + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,4)'>涓€骞村唴</a></li>",
			a += " <li class='c-tip-custom'>",
			a += " <hr />鑷畾涔�",
			a += " <p class='c-tip-custom-st'>浠�<input name='st' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ",
			a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.st, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.st + "' class='c-tip-custom-input'/></p>": "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>",
			a += "  <p class='c-tip-custom-et'>鑷�<input name='et' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ",
			a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.et, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.et + "' class='c-tip-custom-input'/></p>": "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>",
			a += "<div class='c-tip-timerfilter-custom-error'>鑷畾涔夋椂闂撮敊璇紒</div>",
			a += "<a href='javascript:;' class='c-tip-custom-submit'>纭</a>",
			a += "</li></ul></div>",
			timefilterTip = new bds.se.tip({
				target: r,
				mode: "none",
				content: $(a),
				arrow: {
					has: 0,
					offset: 0
				},
				offset: {
					x: 15,
					y: 21
				},
				onShow: function() {
					$(this.getTarget()).width() > 95 && $("ul", this.getDom()).width($(this.getTarget()).width() + 20),
					$(".c-tip-custom-input").on("click",
					function(t) {
						var e = this,
						n = null,
						o = new Date,
						i = $(e).parents(".c-tip-custom"),
						s = i.find("input[name='st']"),
						r = i.find("input[name='et']");
						$(e).attr("data-value") && o.setTime($(e).attr("data-value")),
						$(e).parents(".c-tip-custom").find(".c-tip-custom-input").removeClass("c-tip-custom-input-focus"),
						$(e).addClass("c-tip-custom-input-focus"),
						0 == $("#c-tip-custom-calenderCont").length && $(e).parents(".c-tip-custom").append("<div id='c-tip-custom-calenderCont'></div>"),
						$("#c-tip-custom-calenderCont").html("");
						var a = {
							element: "c-tip-custom-calenderCont",
							date: formatDate(o),
							between: [$(e).attr("date-min") - 0, $(e).attr("date-max") - 0],
							onSelectDay: function(t) {
								if (t += "", "st" == e.name) {
									var n = new Date(t.substr(0, 4), t.substr(4, 2) - 1, t.substr(6, 2), 0, 0, 0);
									r.attr("date-min", t)
								} else {
									var n = new Date(t.substr(0, 4), t.substr(4, 2) - 1, t.substr(6, 2), 23, 59, 59);
									s.attr("date-max", t)
								}
								$(e).val(formatDate(n, "-")),
								$(e).attr("data-value", n.getTime()),
								$("#c-tip-custom-calenderCont").hide(),
								$(e).removeClass("c-tip-custom-input-focus").removeClass("c-tip-custom-input-init")
							}
						};
						"undefined" == typeof WCal ? $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/new_wcal_3426010.js",
						function() {
							n = new WCal(a),
							o && n.setDay(formatDate(o),
							function(t) {
								t.className += " op_mon_day_selected"
							})
						}) : (n = new WCal(a), o && n.setDay(formatDate(o),
						function(t) {
							t.className += " op_mon_day_selected"
						})),
						$("#c-tip-custom-calenderCont").css({
							top: $(this).position().top - 2,
							left: $(this).position().left + $(this).width() + 15,
							display: "block"
						}),
						t.stopPropagation()
					}),
					$(".c-tip-custom-input").on("focus",
					function() {
						$(this).removeClass("c-tip-custom-input-init")
					}),
					$(".c-tip-custom-input").on("blur",
					function() {
						function t(t) {
							var e, n = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
							o = new Date(0 / 0),
							i = n.exec(t);
							return i && (e = +i[2], o.setFullYear(i[1], e - 1, i[3]), e != o.getMonth() + 1 && o.setTime(0 / 0)),
							o
						}
						var e = this,
						n = t($(e).val());
						n instanceof Date && n.getTime() ? ($(e).attr("data-value", n.getTime()), $(".c-tip-timerfilter-custom-error").hide()) : "" == $(e).val() ? ($(e).attr("data-value", "0"), $(".c-tip-timerfilter-custom-error").hide()) : ($(e).attr("data-value", ""), $(".c-tip-timerfilter-custom-error").show())
					});
					try {
						$(".c-tip-custom-submit").off("click.searchTool").on("click.searchTool",
						function(t) {
							var e = this,
							n = $(e).parents(".c-tip-custom"),
							o = parseInt($(".c-tip-custom-input", n)[0].getAttribute("data-value") / 1e3),
							i = parseInt($(".c-tip-custom-input", n)[1].getAttribute("data-value") / 1e3);
							return $("#c-tip-custom-calenderCont").hide(),
							"" != o && o || (o = 0),
							"" != i && i || !o || "" == o || (i = parseInt((new Date).setHours(23, 59, 58) / 1e3)),
							i > bds.comm.serverTime && (0 >= o ? (o = "", i = "") : i = parseInt((new Date).setHours(23, 59, 58) / 1e3)),
							o > i || o > bds.comm.serverTime ? ($(".c-tip-timerfilter-custom-error").show(), void t.stopPropagation()) : (0 == o && 0 == i && (o = "", i = ""), $(".c-tip-timerfilter-custom-error").hide(), void advChangeUrl("gpc", "stf=" + o + "," + i + "|stftype=2", "鑷畾涔夋椂闂�:" + o + "|" + i, 5))
						})
					} catch(t) {}
				}
			}),
			timefilterTip.hide()
		}
		var c = t.find(".search_tool_ft").eq(0);
		if (c.length > 0) {
			var d = "<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-ft'><ul>";
			d += bds.comm.search_tool.ft ? " <li><a href='javascript:;' onClick='fileChangeUrl(null,this.innerHTML,0)'>鎵€鏈夌綉椤靛拰鏂囦欢(涓嶉檺鏍煎紡)</a></li>": " <li><span>鎵€鏈夌綉椤靛拰鏂囦欢(涓嶉檺鏍煎紡)</span></li>",
			d += "pdf" == bds.comm.search_tool.ft ? " <li><span>Adobe Acrobat PDF(.pdf)</span></li>": " <li><a href='javascript:;' onClick='fileChangeUrl(\"pdf\",this.innerHTML,1)'>Adobe Acrobat PDF(.pdf)</a></li>",
			d += "doc" == bds.comm.search_tool.ft ? " <li><span>寰蒋 Word(.doc)</span></li>": " <li><a href='javascript:;' onClick='fileChangeUrl(\"doc\",this.innerHTML,2)'>寰蒋 Word(.doc)</a></li>",
			d += "xls" == bds.comm.search_tool.ft ? " <li><span>寰蒋 Excel(.xls)</span></li>": " <li><a href='javascript:;' onClick='fileChangeUrl(\"xls\",this.innerHTML,3)'>寰蒋 Excel(.xls)</a></li>",
			d += "ppt" == bds.comm.search_tool.ft ? " <li><span>寰蒋 PowerPoint(.ppt)</span></li>": " <li><a href='javascript:;' onClick='fileChangeUrl(\"ppt\",this.innerHTML,4)'>寰蒋 PowerPoint(.ppt)</a></li>",
			d += "rtf" == bds.comm.search_tool.ft ? " <li><span>RTF 鏂囦欢(.rtf)</span></li>": " <li><a href='javascript:;' onClick='fileChangeUrl(\"rtf\",this.innerHTML,5)'>RTF 鏂囦欢(.rtf)</a></li>",
			d += "</ul></div>";
			var l = new bds.se.tip({
				target: c,
				mode: "none",
				content: $(d),
				arrow: {
					has: 0,
					offset: 0
				},
				offset: {
					x: 15,
					y: 21
				}
			});
			l.hide()
		}
		var u = t.find(".search_tool_si").eq(0);
		u.length > 0 && (insideSearchTip = new bds.se.tip({
			target: u,
			mode: "none",
			content: $("<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-si'><ul> <li><input name='si' type='txt' class='c-tip-si-input c-gap-bottom-small c-gap-right-small' autocomplete='off' value='" + bds.comm.search_tool.si + "' placeholder='渚嬪:baidu.com' /><a href='javascript:;' class='c-tip-timerfilter-si-submit'>纭</a></li> <li><p class='c-tip-timerfilter-si-error'>鏃犳硶璇嗗埆锛屾纭牸寮忥細baidu.com</p></li></ul></div>"),
			arrow: {
				has: 0,
				offset: 0
			},
			offset: {
				x: 15,
				y: 21
			},
			onShow: function() {
				$(".c-tip-si-input").on("focus",
				function() {
					$(this).addClass("c-tip-si-input-focus")
				}),
				$(".c-tip-si-input").on("blur",
				function() {
					$(this).removeClass("c-tip-si-input-focus")
				});
				try {
					$(".c-tip-timerfilter-si-submit").off("click.searchTool").on("click.searchTool",
					function(t) {
						var e = this,
						n = $(e).parents(".c-tip-timerfilter-si"),
						o = $("input", n).val(),
						i = queryReplace("site");
						if ("" == o) ns_c({
							fm: "advTool",
							qid: bds.comm.qid,
							title: encodeURI("绔欏唴妫€绱�:" + o),
							rsv_advTool_si: encodeURI(o)
						}),
						baseChangeUrl("wd=" + encodeURIComponent(i) + "&si=&ct=0");
						else {
							if (!o.match(/^[\w\-_]+(\.[\w\-_]+)+$/)) return $(".c-tip-timerfilter-si-error").show(),
							t.stopPropagation(),
							t.preventDefault(),
							!1;
							$(".c-tip-timerfilter-si-error").hide(),
							ns_c({
								fm: "advTool",
								qid: bds.comm.qid,
								title: encodeURI("绔欏唴妫€绱�:" + o),
								rsv_advTool_si: encodeURI(o)
							}),
							baseChangeUrl("wd=" + encodeURIComponent(i) + "&si=" + encodeURIComponent(o) + "&ct=2097152")
						}
					})
				} catch(t) {}
			}
		}), insideSearchTip.hide());
		var m = !0;
		i.on("click",
		function(t) {
			m ? (langfilterTip && langfilterTip.show(), m = !1, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
				fm: "advTool",
				qid: bds.comm.qid,
				title: encodeURI("璇█绛涢€夋诞灞傚睍鐜�"),
				rsv_advTool_tip: 1
			}), $(document).on("click.searchTool",
			function(t) {
				0 == $(t.target).parents(".c-tip-langfilter").length && langfilterTip && (langfilterTip.hide(), m = !0, $(document).off("click.searchTool"))
			})) : (langfilterTip && langfilterTip.hide(), m = !0, $(document).off("click.searchTool")),
			t.stopPropagation()
		});
		var p = !0;
		r.on("click",
		function(t) {
			p ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.show(), p = !1, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
				fm: "advTool",
				qid: bds.comm.qid,
				title: encodeURI("鏃堕棿绛涢€夋诞灞傚睍鐜�"),
				rsv_advTool_tip: 0
			}), $(document).on("click.searchTool",
			function(t) {
				0 == $(t.target).parents(".c-tips-container,#c-tip-custom-calenderCont").length && timefilterTip && (timefilterTip.hide(), $("#c-tip-custom-calenderCont").hide(), timefilterTip.getDom().find(".c-tip-custom-input-focus").removeClass("c-tip-custom-input-focus"), p = !0, $(document).off("click.searchTool"))
			})) : (timefilterTip && timefilterTip.hide(), p = !0, $(document).off("click.searchTool")),
			t.stopPropagation()
		});
		var f = !0;
		c.on("click",
		function(t) {
			f ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.show(), f = !1, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
				fm: "advTool",
				qid: bds.comm.qid,
				title: encodeURI("缃戦〉鏍煎紡娴眰灞曠幇"),
				rsv_advTool_tip: 2
			}), $(document).on("click.searchTool",
			function(t) {
				0 == $(t.target).parents(".c-tip-timerfilter-ft").length && l && (l.hide(), f = !0, $(document).off("click.searchTool"))
			})) : (l && l.hide(), f = !0, $(document).off("click.searchTool")),
			t.stopPropagation()
		});
		var h = !0;
		u.on("click",
		function(t) {
			h ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.show(), h = !1, ns_c({
				fm: "advTool",
				qid: bds.comm.qid,
				title: encodeURI("绔欏唴鎼滅储娴眰灞曠幇"),
				rsv_advTool_tip: 3
			}), $(document).on("click.searchTool",
			function(t) {
				0 == $(t.target).parents(".c-tip-timerfilter-si").length && insideSearchTip && (insideSearchTip.hide(), h = !0, $(document).off("click.searchTool"))
			})) : (insideSearchTip && insideSearchTip.hide(), h = !0, $(document).off("click.searchTool")),
			t.stopPropagation()
		})
	}
}),
!
function() {
	function t() {
		function t(t, e) {
			var n = {
				top: e.offset().top,
				left: e.offset().left
			},
			o = {
				width: e.width(),
				height: e.height()
			},
			i = function() {
				var t = e.attr("data-click");
				if (t) try {
					return $.parseJSON(t)
				} catch(n) {}
			} () || {},
			s = t + (i.p5 || "");
			return {
				id: s,
				pos: n,
				size: o,
				dataClick: i,
				dom: e
			}
		}
		var e = {},
		n = {},
		o = $("#wrapper");
		return e.topResult = o.find("#con-at").find(".result-op"),
		e.rightResult = o.find("#con-ar").find(".result-op"),
		e.leftResult = o.find("#content_left").find(".result, .result-op"),
		e.topResult.length && (n.T = [], e.topResult.each(function() {
			n.T.push(t("T", $(this)))
		})),
		e.rightResult.length && (n.R = [], e.rightResult.each(function() {
			n.R.push(t("R", $(this)))
		})),
		e.leftResult.length && (n.L = [], e.leftResult.each(function() {
			n.L.push(t("L", $(this)))
		})),
		n
	}
	bds.se.skeleton = function() {
		var e;
		return function() {
			return e || (e = t(), $(window).one("swap_begin",
			function() {
				e = null
			})),
			e
		}
	} ()
} (),
!
function() {
	$(window).on("swap_end",
	function() {
		var t = function() {
			var t = [],
			e = bds.se.skeleton(),
			n = e.L;
			return n ? ($.each(n,
			function(e, n) {
				var o = {};
				o.dom = n.dom,
				o.id = n.id,
				o.itime = 0,
				o.time = 0,
				t.push(o)
			}), t) : null
		};
		bds.comm.orderplay = t()
	})
} (),
!
function() {
	function t() {
		var t = this;
		t.display = {},
		t.expand = {},
		t.dom = {},
		t.init()
	}
	bds.se.display = function() {
		new t
	},
	t.prototype = {
		init: function() {
			var t = this;
			t.dom = bds.se.skeleton();
			var e = $("#wrapper");
			t.dom.rsResult = e.find("#rs a"),
			t.dom.hintResult = e.find(".se_common_hint"),
			t.rs = t.dom.rsResult.length || 0,
			t.hint = t.dom.hintResult.length || 0,
			t.display.base = t.getBase(),
			t.dom.L && t.getResult(t.dom.L),
			t.dom.R && t.getResult(t.dom.R),
			t.dom.T && t.getResult(t.dom.T),
			t.rs && (t.display.rs = t.getRS()),
			t.hint && (t.display.hint = t.getHint()),
			t.send()
		},
		send: function() {
			var t = this;
			for (var e in t.display) {
				var n = {};
				n[e] = t.display[e],
				bds.log.send.sendPack("new_disp", n)
			}
			for (var o in t.expand) if (o && t.expand[o]) for (var i in t.expand[o]) if (i && t.expand[o][i] && t.expand[o][i].length) for (var s = t.expand[o][i], r = 0; r < s.length; r++) {
				var a = {};
				a[o] = {
					expand: {}
				},
				a[o].expand[i] = {},
				a[o].expand[i][r] = s[r],
				bds.log.send.sendPack("new_disp", a)
			}
		},
		getBase: function() {
			var t = this,
			e = {};
			return e.qid = bds.comm.qid || "",
			e.tpl = bds.comm.resTemplateName || "",
			e.async = bds.comm.supportis ? 1 : 0,
			e.page = bds.comm.pageNum || 1,
			e.upn = $.getCookie("BD_UPN") || "",
			t.dom.L && (e.left = t.dom.L.length),
			t.dom.R && (e.right = t.dom.R.length),
			t.dom.T && (e.top = t.dom.T.length),
			e.size = {},
			e.size.doc = {
				w: $(document).width(),
				h: $(document).height()
			},
			e.size.wind = {
				w: $(window).width(),
				h: $(window).height()
			},
			e.size.scr = {
				w: screen.width,
				h: screen.height
			},
			e
		},
		getRS: function() {
			var t = this,
			e = {};
			return e.num = t.rs,
			e.query = [],
			t.dom.rsResult.each(function() {
				var t = this.textContent || this.innerText;
				e.query.push(t)
			}),
			e
		},
		getHint: function() {
			var t = this,
			e = {};
			return e.result = [],
			t.dom.hintResult.each(function() {
				var t = {};
				t.id = this.getAttribute("data-id") || 0,
				t.tpl = this.getAttribute("data-tpl") || "",
				e.result.push(t)
			}),
			e
		},
		getResult: function(t) {
			for (var e = this,
			n = t,
			o = 0,
			i = Math.min(n.length, 10); i > o; o++) {
				var s = n[o].id,
				r = e.getResultDisplay(n[o]);
				e.expand[s] = r.expand,
				delete r.expand,
				e.display[s] = r
			}
		},
		getResultDisplay: function(t) {
			function e() {
				var e = t.size;
				return {
					w: e.width || 0,
					h: e.height || 0
				}
			}
			function n() {
				var e = t.pos;
				return {
					t: e.top || 0,
					l: e.left || 0
				}
			}
			function o() {
				return d.rsv_bdr && 0 != d.rsv_bdr ? d.rsv_bdr: c.hasClass(".c-border") || c.find(".c-border").length ? 5 : 0
			}
			function i() {
				function t(t) {
					var e;
					return t && (e = c.find(t)),
					e && e.length ? !0 : !1
				}
				var e = {};
				return t(".favurl") && (e.fi = 1),
				t(".c-text-public.c-text-mult") && (e.gwi = 1),
				t(".icon-unsafe-icon") && (e.fxi = 1),
				t(".c-icon-v") && (e.vi = 1),
				t(".c-icon-med") && (e.yjji = 1),
				t(".c-icon-air") && (e.hxi = 1),
				t(".c-recommend") && (e.cr = 1),
				e
			}
			function s() {
				var t = c.find("a").not(":hidden").not("h3 a, .m"),
				e = [],
				n = /^((https?:)?\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*(:\d+)*(\/.*)*/,
				o = /^(\/s\?)/;
				return t.each(function() {
					var t = this.getAttribute("href");
					if (t && n.test(t)) {
						var i = t && t.match(/.*\/link\?url=([^&]*).*/);
						e.push(i && i.length && i.length > 0 && i[1] ? i[1] : t)
					} else t && o.test(t) && e.push(t)
				}),
				e.length ? e: !1
			}
			function r() {
				var t = [],
				e = c.find("img").not(":hidden").not("[data-nolog]");
				return e.length ? (e.each(function() {
					var e = {
						w: this.width,
						h: this.height
					};
					t.push({
						size: e
					})
				}), t) : !1
			}
			function a() {
				var t = [],
				e = c.find("object, video, audio");
				return e.length ? (e.each(function() {
					var e = $(this),
					n = {};
					n.type = e.is("object") && e.attr("type") && e.attr("type").indexOf("flash") >= 0 ? 1 : e.is("video") ? 2 : e.is("audio") ? 3 : 0,
					n.size = {
						w: e.width(),
						h: e.height()
					},
					t.push(n)
				}), t) : !1
			}
			var c = t.dom,
			d = t.dataClick,
			l = {};
			if (l.id = d.p5 || "", l.srcid = d.rsv_srcid || c.attr("srcid") || 0, l.tpl = c.attr("tpl") || "", l.mu = d.mu || c.attr("mu") || "", l.fm = d.fm || "as", c.is(":hidden") && (l.show = 0), 0 == l.show) return l;
			l.size = e(),
			l.pos = n(),
			o() && (l.bdr = o()),
			l.com = i();
			var u = s(),
			m = r(),
			p = a();
			return (u || m || p) && (l.expand = {},
			u && (l.link = u.length, l.expand.links = u), m && (l.img = m.length, l.expand.imgs = m), p && (l.app = p.length, l.expand.apps = p)),
			l
		}
	}
} (),
!
function() {
	function t() {
		this.pageElementsList = [],
		this.scrollTime = null,
		this.scrollChange = !1,
		this.resizeTime = null,
		this.resizeChange = !1,
		this.scrollTop = $(document).scrollTop(),
		this.scrollLeft = $(document).scrollLeft(),
		this.windowHeight = $(window).height(),
		this.windowWidth = $(window).width()
	}
	t.prototype = {
		init: function() {
			var t = bds.se.skeleton(),
			e = this;
			$.each(["L", "R", "T"],
			function(n, o) {
				t[o] && ($.merge(e.pageElementsList, e.getDom(t[o])), e.bindEvent(t[o]))
			})
		},
		getDom: function(t) {
			var e = [];
			return $.each(t,
			function(t, n) {
				var o = {};
				o.top = n.pos.top,
				o.height = n.size.height,
				o.id = n.id,
				o.visible = 0,
				e.push(o)
			}),
			e
		},
		sendLog: function(t, e) {
			bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && bds.log.send.sendPack(t, e)
		},
		bindEvent: function(t) {
			var e = this;
			$.each(t,
			function(t, n) {
				var o = 200,
				i = !1,
				s = null;
				n.dom.bind("mouseenter.useraction",
				function() {
					null !== s && clearTimeout(s),
					s = setTimeout(function() {
						e.sendLog("new_view", {
							type: "mouseIn",
							id: n.id,
							t: (new Date).getTime()
						}),
						i = !0,
						s = null
					},
					o)
				}).bind("mouseleave.useraction",
				function() {
					null !== s && (clearTimeout(s), s = null),
					i && (e.sendLog("new_view", {
						type: "mouseOut",
						id: n.id,
						t: (new Date).getTime()
					}), i = !1)
				})
			})
		},
		destroy: function() {
			$(window).unbind(".useraction"),
			this.pageElementsList.splice(0, this.pageElementsList.length)
		},
		sight: function() {
			var t = this;
			$.each(this.pageElementsList,
			function(e, n) {
				var o = t.scrollTop < n.top + n.height && t.scrollTop + t.windowHeight > n.top;
				if (1 !== n.visible || o) {
					if (0 === n.visible && o) {
						if (t.sendLog("new_view", {
							type: "sight",
							resid: n.id,
							action: "in",
							t: (new Date).getTime()
						}), bds.comm.orderplay && bds.comm.orderplay.length && "L" == n.id.substr(0, 1) && bds.comm.pageSize) {
							var i = (parseInt(n.id.substr(1)) - 1) % bds.comm.pageSize,
							s = bds.comm.orderplay[i];
							s && !s.itime && (s.itime = (new Date).getTime())
						}
						n.visible = 1
					}
				} else {
					if (t.sendLog("new_view", {
						type: "sight",
						resid: n.id,
						action: "out",
						t: (new Date).getTime()
					}), bds.comm.orderplay && bds.comm.orderplay.length && "L" == n.id.substr(0, 1) && bds.comm.pageSize) {
						var i = (parseInt(n.id.substr(1)) - 1) % bds.comm.pageSize,
						s = bds.comm.orderplay[i];
						s && (s.time += (new Date).getTime() - s.itime, s.itime = (new Date).getTime())
					}
					n.visible = 0
				}
			})
		},
		collectPoint: function(t) {
			function e() {
				s[o] = setTimeout(function() {
					s.sendLog("new_view", n(t)),
					s[i] = !1,
					s.sight(),
					s[i] ? e() : s[o] = null
				},
				1e3)
			}
			function n(t) {
				if ("resize" === t) {
					var e = $(window);
					return s.windowHeight = e.height(),
					s.windowWidth = e.width(),
					{
						type: "resize",
						t: (new Date).getTime(),
						height: s.windowHeight,
						width: s.windowWidth
					}
				}
				if ("scroll" === t) {
					var n = $(document);
					return s.scrollTop = n.scrollTop(),
					s.scrollLeft = n.scrollLeft(),
					{
						type: "scroll",
						t: (new Date).getTime(),
						offsetX: s.scrollTop,
						offsetY: s.scrollLeft
					}
				}
			}
			var o = t + "Time",
			i = t + "Change",
			s = this;
			null === s[o] && e()
		},
		collect: function() {
			this.init();
			var t = this;
			null !== this.resizeTime && clearTimeout(this.resizeTime),
			this.resizeTime = null,
			null !== this.scrollTime && clearTimeout(this.scrollTime),
			this.scrollTime = null,
			$(window).bind("focus.useraction",
			function() {
				t.sendLog("new_view", {
					type: "focus",
					t: (new Date).getTime()
				})
			}).bind("blur.useraction",
			function() {
				t.sendLog("new_view", {
					type: "blur",
					t: (new Date).getTime()
				})
			}).bind("resize.useraction",
			function(e) {
				t.resizeChange = !0,
				t.collectPoint("resize", e)
			}).bind("scroll.useraction",
			function(e) {
				t.scrollChange = !0,
				t.collectPoint("scroll", e)
			}),
			this.sight()
		},
		outInterface: function() {
			var t = this;
			return {
				collect: function() {
					t.collect()
				},
				destroy: function() {
					t.destroy()
				}
			}
		}
	},
	bds.se.userAction = (new t).outInterface()
} (),
bds.comm.recommends = {},
bds.comm.recommends.recommWidth = 0,
bds.se.recommend = function(t) {
	var e = this;
	e.op = $.extend({},
	e._default, t),
	e.id = e.op.target.attr("id"),
	e.init()
},
bds.se.recommend.prototype = {
	constructor: bds.se.recommend,
	__init__: !1,
	currInstance: null,
	recommDom: null,
	arrowDom: null,
	cssDom: null,
	loadDom: null,
	global: {},
	_default: {
		target: "",
		arrowOffset_s: -54,
		arrowOffset_l: -151,
		container_s: 276,
		container_l: 368,
		startOpacity: .3,
		endOpacity: 1
	},
	init: function() {
		var t = this;
		t.currInstance && t.currInstance.id == t.id || (t.delay = {
			overIcon: null,
			loader: null,
			overArrow: null
		},
		t.doWhat(function() {
			t.__init__ || (bds.se.recommend.prototype.__init__ = !0, t.createRecommDom()),
			t.createArrowDom(),
			t.delay.overArrow = setTimeout(function() {
				var e = t.op.arrowDom.find(".rrecom-btn");
				"none" == e.css("display") && e.show(),
				t.moveArrow(function() {
					e.addClass("rrecom-btn-hover"),
					t.showRecommDom()
				})
			},
			100)
		}))
	},
	dispose: function() {
		bds.se.recommend.prototype.currInstance = null,
		bds.se.recommend.prototype.recommDom && bds.se.recommend.prototype.recommDom.remove(),
		bds.se.recommend.prototype.cssDom && bds.se.recommend.prototype.cssDom.remove(),
		bds.comm.recommends = {},
		bds.se.recommend.prototype.__init__ = !1,
		$(window).off("resize.recommend container_resize.recommend scroll.recommend")
	},
	createArrowDom: function() {
		var t = this,
		e = t.op.target.find(".rrecom-btn-parent");
		if (e.length) t.op.arrowDom = e;
		else {
			var n = ['<span class="rrecom-btn-parent rrecom-btn-s">', '<span class="rrecom-btn">', "<span></span>", "</span>", "</span>"].join("");
			t.op.arrowDom = $(n),
			t.op.arrowDom.on("click", ".rrecom-btn",
			function() {
				t.hideRecommDom()
			}),
			t.op.target.css({
				position: "relative"
			}).append(t.op.arrowDom)
		}
	},
	resetArrow: function() {
		var t = this;
		t.op.arrowDom.css({
			right: t.op.arrowOffset_s
		}).removeClass("rrecom-btn-click rrecom-btn-moving").find(".rrecom-btn").stop().hide().removeClass("rrecom-btn-hover")
	},
	setArrowPos: function() {
		var t = this;
		t.currInstance && ("l" === bds.comm.containerSize ? t.currInstance.op.arrowDom.css("right", t.op.arrowOffset_l) : t.currInstance.op.arrowDom.css("right", t.op.arrowOffset_s))
	},
	moveArrow: function(t) {
		var e = this,
		n = {
			opacity: e.op.endOpacity
		};
		n.right = "l" === bds.comm.containerSize ? e.op.arrowOffset_l: e.op.arrowOffset_s,
		e.op.arrowDom.stop().addClass("rrecom-btn-moving rrecom-btn-click").animate(n, 0,
		function() {
			e.currInstance && e.currInstance !== e && e.currInstance.resetArrow(),
			t()
		})
	},
	log: function(t) {
		var e = {},
		n = this.op.target.attr("data-click"),
		o = this.op.target.attr("srcid"),
		i = this.op.target.attr("tpl"),
		s = this.op.target.attr("mu");
		if (o && (e.rsv_srcid = o), i && (e.rsv_tpl = i), s && (e.mu = s), n && $.extend(e, $.parseJSON(n)), e.p1 && !e.p5 && (e.p5 = e.p1), e.p5 && !e.p1 && (e.p1 = e.p5), !e.p1 && !e.p5) for (var r = $("#content_left").get(0), a = r.children, d = 1, l = 0, u = a.length; u > l; l++) if (1 == a[l].nodeType && a[l].className && /\bresult(\-op)?\b/.test(a[l].className)) {
			if (a[l] === this.op.target.get(0)) {
				e.p1 = d,
				e.p5 = d;
				break
			}
			d++
		}
		e.fm = "beha";
		var m = this.op.target.find(".t>a").eq(0);
		return e.rsv_re_fcurl = m.length ? m.attr("href") : s,
		e.rsv_re_fcurl = e.rsv_re_fcurl || "",
		e.rsv_re_fcurl = encodeURIComponent(e.rsv_re_fcurl),
		c($.extend(e, t))
	},
	getLeftP: function() {
		var t = this.op.target.attr("data-click");
		return t = $.parseJSON(t) || {},
		t.p1 && !t.p5 && (t.p5 = t.p1),
		t.p5 && !t.p1 && (t.p1 = t.p5),
		t.p5 || t.p1 || (t.p1 = 1, t.p5 = 1),
		{
			p1: t.p1,
			p5: t.p5
		}
	},
	s_log: function() {
		this.log({
			rsv_re_fc: 2
		})
	},
	setCacheData: function(t) {
		bds.comm.recommends[this.id] = t
	},
	getCacheData: function() {
		return bds.comm.recommends[this.id]
	},
	doWhat: function(t) {
		var e = this.getCacheData();
		"[NO DATA]" !== e && (e ? t() : this.getRemoteData(t))
	},
	getJsonp: function(t) {
		var e = this.op.target.find(".t>a").eq(0),
		n = (e.length ? e.attr("href") : this.op.target.attr("mu")) || "",
		o = n && n.match(/.*url=([^&]*).*/),
		i = bds.comm.query;
		if (o && o.length && o.length > 0 && o[1]) {
			n = o[1];
			var s = "http://lcr.open.baidu.com/link?url=" + encodeURIComponent(n) + "&query=" + encodeURIComponent(i),
			r = window.bds && bds.util && bds.util.domain && bds.util.domain.get(s);
			return $.ajax({
				url: r,
				dataType: "jsonp",
				jsonp: "cb",
				data: {
					data_name: t,
					ie: "utf-8",
					oe: "utf-8",
					format: "json",
					t: Date.parse(new Date)
				}
			})
		}
	},
	getRemoteData: function(t) {
		var e = this,
		n = "recommend_common_merger_online";
		$.when(this.getJsonp(n)).then(function(n) {
			n && n.data && n.data.length && n.data[0] ? (n.data[0].hintData && e.asynClkRcmd(n.data[0].hintData), (n.data[0].extData || n.data[0].tplData) && (e.setCacheData(n.data), t())) : e.setCacheData("[NO DATA]")
		},
		function() {})
	},
	asynClkRcmd: function(t) {
		var e = this,
		t = t[0] || {},
		n = $("#wrapper_wrapper");
		if (t && t.linkInfo) {
			var o = e.op.target.find(".c-recommend"),
			i = o.find("a"),
			s = t.tip || "涓烘偍鎺ㄨ崘锛�";
			if (t.defaultHide, i && i.length && (i.remove(), o.append(e.buildRcmdDom(t))), !o || !o.length) {
				var r = $('<div class="c-gap-top c-recommend"><i class="c-icon c-icon-bear-circle c-gap-right-small"></i><span class="c-gray">' + s + "</span></div>");
				n.find(".c-recommend").hide(),
				r.append(e.buildRcmdDom(t)),
				e.op.target.append(r)
			}
		}
	},
	buildRcmdDom: function(t) {
		for (var e = this,
		n = "",
		o = t.linkInfo,
		i = 0,
		s = o.length; s > i; i++) {
			var r = o[i].txt,
			a = o[i].wd,
			c = o[i].sa,
			d = "c-gap-left-large";
			0 == i && (d = "");
			var l = "wd=" + a + "&rsv_crq=" + c + "&bs=" + bds.comm.query,
			u = e.buildURL(l);
			n += "<a class='" + d + "' href='" + u + "' title='" + r + "' target='_blank'>" + r + "</a>"
		}
		return n
	},
	buildURL: function(t) {
		var e = "/s?",
		n = {
			tn: bds.comm.tn
		},
		o = $("#form"),
		i = o.find("input[name=rsv_idx]"),
		s = "";
		n.rsv_idx = i.length ? i.val() : "";
		for (var r in n) n.hasOwnProperty(r) && n[r] && (s += r + "=" + encodeURIComponent(n[r]) + "&");
		return e + s + t
	},
	renderTpl: function(t, e) {
		var n = this;
		if (t && e) {
			var o = {};
			return o.right_recommends_merge = function(t) {
				function o(e, o) {
					var i, s = '<div class="cr-content" data-click=\'#{2}\'><div class="cr-title c-clearfix"><span title="#{0}">#{1}</span></div>',
					r = '<div class="c-row c-gap-top">',
					a = '<div class="c-span4#{5} rrecom-item" data-click=\'#{6}\'><div class="rrecom-p"><a target="_blank" href="#{0}"><img class="c-img c-img4 rrecom-img" src="#{1}"></a></div><div class="c-gap-top-small"><a target="_blank" title="#{2}" href="#{3}">#{4}</a></div>',
					c = "</div>",
					d = "",
					l = (e.showrow, e.shownums),
					u = {
						rsv_srcid: t.StdStg || 0
					};
					e.list && !e.list.length && (e.list = [e.list]),
					d += $.format(s, e.subtitle, e.subtitle, $.stringify(u)),
					d += '<div class="rrecom-panel">';
					for (var m = n.op.target.find(".t>a").eq(0), p = m.length ? m.attr("href") : n.op.target.attr("mu"), f = 0, h = e.list.length; h > f; f++) {
						i = e.list[f];
						var g = {
							rsv_re_ename: i.name,
							rsv_re_uri: i.uri,
							rsv_re_fcpoi: o + "-" + (f + 1),
							rsv_clk_url: p
						},
						b = n.buildURL(i.params + "&euri=" + (i.uri || ""));
						if (f == l) break;
						f % 4 === 0 && (d += r),
						bds.util && bds.util.domain && bds.util.domain.get && (i.img = bds.util.domain.get(i.img)),
						d += $.format(a, b, i.img, i.name, b, $.subByte(i.name, 20), (f + 1) % 4 === 0 ? " c-span-last rrecom-item-rowLast": (f + 1) % 4 === 3 ? " rrecom-item-s": "", $.stringify(g), i.attrpic),
						d += c,
						((f + 1) % 4 === 0 || f == h - 1) && (d += c)
					}
					return d += c,
					d += c
				}
				var t = t || e,
				i = "",
				s = 12,
				r = 0;
				t.card && !t.card.length && (t.card = [t.card]);
				for (var a = 0,
				c = t.card.length; c > a; a++) {
					var d = t.card[a];
					if (r += parseInt(d.shownums || 0), r > s) break;
					i += o(d, a + 1)
				}
				return i
			},
			o[t] ? o[t]() : void 0
		}
	},
	render: function(t) {
		for (var e = "",
		n = 0; n < t.length; n++) e += this.renderTpl(t[n].extData.tplt, t[n].tplData);
		var o = this.getLeftP();
		o.fm = "alxr",
		this.recommDom.attr("data-click", $.stringify(o)).find(".rrecom-content").eq(0).empty().append(e),
		this.setRecommPosition()
	},
	createRecommDom: function() {
		var t = ['<div style="position:fixed;left:-1px;background:#fff;border:1px solid #eee;z-index:103" class="result-op xpath-log" data-click=\'{"fm":"alxr","p1":1,"p5":1}\'>', '<div class="rrecom-ajax-loading c-loading"></div>', '<div class="rrecom-container">', '<a href="javascript:;" class="rrecom-btn-close" data-click=\'{"rsv_re_fc":4,"fm":"beha"}\'></a>', '<div class="rrecom-content"></div>', "</div>", "</div>"].join(""),
		e = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/rrecom_icon_e34d796.png",
		n = ["<style>", ".rrecom-btn-close,.rrecom-btn span{background:url(" + e + ") no-repeat;}", ".rrecom-btn-close{display:inline-block;width:13px;height:13px;position:absolute;top:26px;right:10px;background-position:0 -20px;}", ".rrecom-btn-parent{z-index:104;position:absolute;right:-37px;top:50%;margin-top:-50px;height:59px;width:40px;cursor:default;padding:20px 0px;}", ".rrecom-btn{display:none;background-color:#fff;padding:20px 5px;position:absolute;right:10px;width:20px;height:19px;border:1px solid transparent;}", ".rrecom-btn-hover{right:-1px;border:1px solid #eee;border-right:1px solid #fff;z-index:104;box-shadow:0px 2px 0px rgba(0,0,0,0.072);-webkit-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-moz-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-o-box-shadow:0px 2px 0px rgba(0,0,0,0.072);}", ".rrecom-btn span{cursor:pointer;background-position:0 0;width:20px;height:19px;position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px;}", ".rrecom-container{width:368px;padding-top:43px;overflow:hidden;background-color:#fff;}", ".rrecom-ajax-loading{position:absolute;left:50%;margin-left:-25px;top:50px;display:none;}", ".rrecom-content{margin-left:17px;}", ".rrecom-content .cr-content{width:100%;margin-bottom:28px;}", ".rrecom_content_s{padding-left:0px;width:276px;}", ".rrecom_content_s .rrecom-item-rowLast{display:none}", ".rrecom_content_s .rrecom-item-s{margin-right:0;}", ".rrecom-panel{text-align:center;}", "</style>"].join("");
		bds.se.recommend.prototype.recommDom = $(t),
		bds.se.recommend.prototype.cssDom = $(n),
		bds.se.recommend.prototype.loadDom = this.recommDom.find(".rrecom-ajax-loading"),
		this.setRecommSize(),
		$("body").append(this.cssDom).append(this.recommDom.hide()),
		this.bindRecommEvent(),
		$(window).trigger("container_resize.recommend", bds.comm.containerSize);
		var o = $("#foot");
		"static" === o.css("position") && o.css({
			position: "relative",
			"z-index": 104
		})
	},
	setRecommSize: function() {
		var t = $("#content_right"),
		e = $("#wrapper_wrapper"),
		n = $("body"),
		o = $(window),
		i = t.offset(),
		s = {
			w: n.width()
		},
		r = {
			h: o.height()
		},
		a = o.scrollTop();
		e.prevAll().each(function() {
			var t;
			return "div" === this.nodeName.toLowerCase() ? (t = parseInt($(this).css("margin-bottom")), bds.se.recommend.prototype.global.topGap = isNaN(t) ? 0 : t, !1) : void 0
		}),
		bds.se.recommend.prototype.global.topDom = e,
		bds.se.recommend.prototype.global.headDom = $("#head");
		var c = {
			top: this.global.topDom.offset().top - this.global.topGap
		},
		d = this.global.headDom.offset().top - a + 56;
		this.recommDom.height(r.h),
		bds.comm.recommends.recommWidth = s.w - i.left - 2,
		this.recommDom.css({
			width: s.w - i.left - 2,
			top: a <= c.top - d ? c.top: d,
			position: a <= c.top - d ? "absolute": "fixed",
			left: i.left
		})
	},
	setRecommPosition: function() {
		this.setRecommTop(),
		this.setRecommLeft()
	},
	setRecommTop: function() {
		var t = $(window).scrollTop(),
		e = {
			top: this.global.topDom.offset().top - this.global.topGap
		},
		n = this.global.headDom.offset().top - t + 56;
		this.recommDom.css({
			top: t <= e.top - n ? e.top: n,
			position: t <= e.top - n ? "absolute": "fixed"
		}).find(".rrecom-container").css({
			"margin-top": "0px"
		}),
		bds.se.recommend.prototype.global.originalTop = t < e.top - n ? e.top - n: t
	},
	setRecommLeft: function() {
		var t, e;
		"fixed" === this.recommDom.css("position") && (t = $("#content_right").offset().left, e = $(window).scrollLeft(), this.recommDom.css("left", parseInt(t) - e))
	},
	bindRecommEvent: function() {
		var t = this;
		this.recommDom.find(".rrecom-btn-close").eq(0).on("click",
		function() {
			t.hideRecommDom()
		}),
		$(window).on("scroll.recommend",
		function() {
			var e, n, o, i = {
				top: t.global.topDom.offset().top - t.global.topGap
			},
			s = t.global.headDom.offset().top + t.global.headDom.outerHeight(),
			r = $(this);
			if (t.recommDom && "none" !== t.recommDom.css("display")) {
				e = r.scrollTop(),
				n = r.scrollLeft(),
				s -= e,
				e <= i.top - s ? "fixed" === t.recommDom.css("position") && (t.recommDom.css("position", "absolute"), t.recommDom.css("top", i.top)) : "absolute" === t.recommDom.css("position") && (t.recommDom.css("position", "fixed"), t.recommDom.css("top", s));
				var a = t.recommDom.find(".rrecom-container");
				t.global.originalTop < e ? (maxMargin = Math.min(t.recommDom.height() - a.height() - 82 - 75, 0), a.css({
					"margin-top": Math.max(t.global.originalTop - e, maxMargin)
				})) : a.css({
					"margin-top": "0px"
				}),
				n && (o = $("#content_right").offset().left, "fixed" === t.recommDom.css("position") ? t.recommDom.css("left", parseInt(o) - n) : t.recommDom.css("left", parseInt(o)))
			}
		}).on("resize.recommend",
		function() {
			t.setRecommSize(),
			t.setArrowPos()
		}).on("container_resize.recommend",
		function(e, n) {
			var o = t.recommDom.find(".rrecom-container");
			"s" !== n || o.hasClass("rrecom_content_s") ? "l" === n && (o.removeClass("rrecom_content_s"), o.find(".rrecom-content").css("width", t.op.container_l - 17 + "px")) : (o.addClass("rrecom_content_s"), o.find(".rrecom-content").css("width", t.op.container_s - 17 + "px"))
		})
	},
	hideRecommDom: function() {
		var t = this;
		t.recommDom.find(".rrecom-container").animate({
			width: "0px"
		},
		200,
		function() {
			t.recommDom.hide()
		}),
		t.currInstance && window.clearTimeout(t.currInstance.delay.overArrow),
		t.currInstance && t.currInstance.resetArrow(),
		bds.se.recommend.prototype.currInstance = null
	},
	showRecommDom: function() {
		var t = this;
		if (t.currInstance !== t, "none" === t.recommDom.css("display")) {
			t.recommDom.css({
				opacity: .3
			}).show().animate({
				opacity: 1
			},
			100);
			var e = t.recommDom.find(".rrecom-container"),
			n = bds.comm.recommends.recommWidth;
			e.css({
				width: 0
			}).animate({
				width: n + "px"
			},
			200)
		}
		t.recommDom.find(".rrecom_content_s").length > 0 ? t.recommDom.find(".rrecom-content").css("width", t.op.container_s - 17 + "px") : t.recommDom.find(".rrecom-content").css("width", t.op.container_l - 17 + "px"),
		bds.se.recommend.prototype.currInstance = t,
		t.render(t.getCacheData())
	},
	showLoading: function() {
		this.loadDom.show()
	},
	hideLoading: function() {
		this.loadDom.hide()
	}
},
$(window).one("swap_end",
function() {
	bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("click", "#content_left .result .t>a, #content_left .result-op .t>a, .op-se-listen-recommend",
	function(t) {
		if (!t.ctrlKey && "0" == bds.comm.urlRecFlag) {
			var e = $(this).closest(".result, .result-op");
			new bds.se.recommend({
				target: e
			})
		}
	})
}),
$(window).on("swap_begin",
function() {
	bds.se.recommend.prototype.currInstance && bds.se.recommend.prototype.hideRecommDom(),
	bds.se.recommend.prototype.currInstance = null,
	bds.se.recommend.prototype.__init__ = !1,
	bds.comm.recommends = {}
}),
bds.se.asynAds = function(t) {
	var e = t.dom || "",
	n = t.id || "",
	o = t.tnp || "",
	i = t.wd || "",
	s = t.cb && "function" == typeof t.cb ? t.cb: null;
	if (e && o && i && n) {
		c({
			fm: "inlo",
			rsv_ad: "ad_asyn_start"
		});
		for (var r = ["wd", "tnp", "tn", "pn", "bs", "fenlei", "adext"], a = "ie=utf-8&oe=utf-8&dsp=pc", d = 0; d < r.length; d++) {
			var l = r[d];
			t[l] && (a += "&" + l + "=" + t[l])
		}
		var u = bds.comm.orderplay,
		m = "",
		p = function(t) {
			if (bds && bds.comm && bds.comm.upn && bds.comm.upn.browser && "firefox" == bds.comm.upn.browser) var e = t.textContent;
			else var e = t.innerText;
			var n = e.indexOf("\n"),
			o = e.substr(0, n);
			return encodeURIComponent(o)
		},
		f = function(t) {
			var e = $(".c-showurl", t).text().split(/\s+/)[0];
			return e = e.replace(/(\.\.\.$)/g, "")
		};
		$.each(u,
		function(t, e) {
			e.t = p(e.dom[0]) || "",
			e.u = f(e.dom[0]) || "",
			e.u && !new RegExp("baidu.com").test(e.u) && (m += e.u + ":"),
			e.itime && (e.time = (new Date).getTime() - e.itime)
		}),
		u.sort(function(t, e) {
			return t.time > e.time ? -1 : t.time < e.time ? 1 : (t.time = e.time) && t.id < e.id ? -1 : 0
		});
		var h = u[0],
		g = u[1],
		b = "";
		h.time && (b += h.t + "@" + h.time, g.time && (b += "," + g.t + "@" + g.time)),
		b && (a += "&rlist=" + encodeURIComponent(b)),
		m && (a += "&furl=" + encodeURIComponent(m.substring(0, m.length - 1))),
		$.ajax({
			url: "/s",
			dataType: "json",
			data: a,
			success: function(t) {
				var o = $(e);
				if (t && t.results && t.results.length && o.length) {
					var i = "";
					$.each(t.results,
					function(t, e) {
						if (e.id == n) {
							var o = e;
							i += "<style>" + o.css + "</style>",
							i += o.html,
							i += "<script>" + o.js + "</script>"
						}
					}),
					o.html(i),
					$(document).scrollTop() < o.position().top + o.height() && $(document).scrollTop() + $(window).height() > o.position().top && c({
						fm: "inlo",
						rsv_ad: "ad_asyn_shake"
					}),
					s && s()
				} else c({
					fm: "inlo",
					rsv_ad: "ad_asyn_net_error"
				})
			},
			error: function() {
				c({
					fm: "inlo",
					rsv_ad: "ad_asyn_net_error"
				})
			}
		})
	} else c({
		fm: "inlo",
		rsv_ad: "ad_asyn_param_error"
	})
},
!
function() {
	function t() {
		c = Math.random()
	}
	function e() {
		c >= .005 && .0051 > c && (o(), i(), s(), r())
	}
	function n() {
		var t = Math.round(1e3 * Math.random()) % l.length;
		if (0 != t || "https:" != location.protocol) {
			var e = new Image,
			n = new Image,
			o = l[t];
			e.onload = function() {
				n.src = "//www.baidu.com/nocache/fesplg/s.gif?url=" + encodeURIComponent(o) + "&time=" + ((new Date).getTime() - i) + "&suc=1&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
			},
			e.onerror = function() {
				n.src = "//www.baidu.com/nocache/fesplg/s.gif?url=" + encodeURIComponent(o) + "&time=&suc=0&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
			};
			var i = (new Date).getTime();
			e.src = o + "?ran=" + (new Date).getTime()
		}
	}
	function o() {
		var t = new Image;
		t.onload = function() {
			a("cndtestsuc")
		},
		t.onerror = function() {
			a("cndtesterr")
		},
		t.src = "//ss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
	}
	function i() {
		var t = new Image;
		t.onload = function() {
			a("cndgsstestsuc")
		},
		t.onerror = function() {
			a("cndgsstesterr")
		},
		t.src = "//gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
	}
	function s() {
		var t = new Image;
		t.onload = function() {
			a("cndidctestsuc")
		},
		t.onerror = function() {
			a("cndidctesterr")
		},
		t.src = "//m.baidu.com/logo.gif"
	}
	function r() {
		var t = new Image;
		t.onload = function() {
			a("cndss0bdtestsuc")
		},
		t.onerror = function() {
			a("cndss0bdtesterr")
		},
		t.src = "//ss0.baidu.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
	}
	function a(t, e) {
		if (t) {
			e = e || {},
			e.st = t,
			e.fm = "inlo";
			var n = "&terminal=pc";
			for (var o in e) n += "&" + o + "=" + e[o];
			var i = new Image;
			i.src = bds.util.domain.get(d + n)
		}
	}
	var c, d = "http://sestat.baidu.com/cm.gif?type=cdnmonitor",
	l = ["//103.235.47.121/s.gif", "//sptidchk.baidu.com/s.gif", "//sptidcsfo.baidu.com/s.gif", "//sptidcjp.baidu.com/s.gif", "//sptidcsin.baidu.com/s.gif", "//sptcdnhkg.baidu.com/nocache/s.gif", "//sptcdnhkg.baidu.com/cache/s.gif", "//sptcdnsfo.baidu.com/nocache/s.gif", "//sptcdnsfo.baidu.com/cache/s.gif", "//sptcdnsin.baidu.com/nocache/s.gif", "//sptcdnsin.baidu.com/cache/s.gif", "//sptcdnhome.baidu.com/r/www/nocache/imgdata/sp613.gif", "//sptcdnhome.baidu.com/r/www/cache/sp/az.gif"];
	location.protocol.indexOf("https") > -1 && $(window).on("swap_dom_ready",
	function() {
		t()
	}).on("swap_end",
	function() {
		e()
	}),
	"70" == bds.comm.bfe_sample && $(window).on("swap_end",
	function() {
		n()
	})
} (),
!
function() {
	var t, e, n = bds && bds.util && bds.util.domain && bds.util.domain.get("http://sensearch.baidu.com/sensearch/selecttext");
	$(window).one("swap_end",
	function() {
		bds.comm.upn && bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("mousedown",
		function(n) {
			t && 0 == $(n.target).closest(t.getDom()).length && (t.getDom().hide(), e && e.abort())
		}).on("mouseup",
		function(o) {
			var i, s, r, a, c;
			if (!t || !$(o.target).closest(t.getDom()).length) try {
				setTimeout(function() {
					if (window.getSelection) {
						if (i = window.getSelection(), 0 == i.rangeCount) return;
						s = i.getRangeAt(0),
						r = s.getBoundingClientRect(),
						a = $.trim(i.toString()),
						c = $("#text" == s.commonAncestorContainer.nodeName ? s.commonAncestorContainer.parentNode: s.commonAncestorContainer)
					} else document.selection && (i = document.selection.createRange(), s = i, r = s.getBoundingClientRect(), a = $.trim(i.text.toString()), c = $(s.parentElement()));
					if (a && a.length > 1 && c.closest("#content_left .result .c-abstract,#content_left .result .t").length) {
						e && e.abort();
						var o = /[^(\u4E00-\u9FA5)]+/i;
						if (!o.test(a)) return;
						e = $.ajax({
							url: n,
							dataType: "jsonp",
							jsonp: "cb",
							timeout: 5e3,
							data: {
								q: a
							},
							success: function(e) {
								var n = "";
								if (e && e.data && e.data.type && e.data.to && "zh" == e.data.to && e.data.result && e.data.result.length && e.data.result != a) if (1 == e.data.type) for (var o = e.data.result,
								i = 0,
								s = Math.min(o.length, 2); s > i; i++) n += (0 == i ? "": "<br/>") + (o[i].pre ? o[i].pre + "&nbsp;": ""),
								n += o[i].cont ? $.subByte(o[i].cont, 46 * (1 == s ? 2 : 1) + 1) : "";
								else 2 == e.data.type && (n = '<span style="color:#999">璇戯細</span>' + e.data.result);
								if (n) {
									t = t || new bds.se.tip({
										target: $("body"),
										mode: "none",
										content: '<div class="translateContent"></div>',
										align: "left",
										arrow: {
											has: 1,
											offset: 10
										}
									});
									var c = t.getDom();
									c.find(".translateContent").html('<p style="margin:0 8px">' + n + "</p>"),
									c.css({
										top: r.bottom + $(window).scrollTop() + 8,
										left: (r.left + r.right) / 2 + $(window).scrollLeft() - 20
									}).show(),
									ns_c({
										rsv_trans_type: "showresult",
										rsv_trans_st: encodeURIComponent(a),
										rsv_qid: bds.comm.qid || ""
									})
								}
							}
						})
					}
				},
				0)
			} catch(o) {}
		})
	}),
	$(window).on("swap_begin",
	function() {
		t = null,
		e && e.abort()
	})
} (),
!
function() {
	function t(t) {
		return t = i(t),
		t.attr("id") || t.attr("data-click") && $.parseJSON(t.attr("data-click")).rsv_srcid || t.attr("class") || "-1"
	}
	function e(t) {
		var e = i(t),
		n = e.clone();
		n.unbind(),
		n.children(".fb-list-container").remove(),
		n.children(".fb-list-container-first").remove(),
		n.children(".fb-hint-tip").remove(),
		n.removeAttr("style"),
		n.css("margin", "0"),
		t.append(n),
		t.append("<div class='fb-mask-light' data-html2canvas-ignore='true'></div>"),
		t.addClass("fb-list-container-hover")
	}
	function n(t) {
		t.empty(),
		t.removeClass("fb-list-container-hover")
	}
	function o() {
		$(".fb-hint-tip").remove(),
		$(".fb-list-container-first").remove(),
		bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(),
		bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.destory(),
		bds.se.ShortCut.ldialog = 0,
		bds.se.ShortCut.rdialog = 0,
		$(".fb-mask").remove(),
		$(".fb-list-container").remove()
	}
	function i(t) {
		return t.closest(t.closest("#rs").length ? "#rs": t.closest("#con-ar").length ? ".result-op": "#content_left > div")
	}
	function s() {
		var t = $("#content_left > div");
		t.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"),
		$("#content_left > div").css("overflow", "visible"),
		$(".leftBlock .fb-list-container").remove(),
		$(".hit_top_new .fb-list-container").remove(),
		t.each(function() {
			$(this).find(".fb-list-container").css("width", $(this).width() + 20),
			$(this).find(".fb-list-container").css("height", $(this).height() + 10)
		}),
		$(".c-container").first().append("<div class='fb-list-container-first' data-html2canvas-ignore='true'></div>"),
		$(".c-container").first().find(".fb-list-container-first").css("width", $(".c-container").first().width() + 20),
		$(".c-container").first().find(".fb-list-container-first").css("height", $(".c-container").first().height() + 10),
		$(".c-container").first().append('<div class="fb-hint-tip" data-html2canvas-ignore="true"><span>榧犳爣鐐瑰嚮锛屽彲瀵瑰崟鏉＄粨鏋滆繘琛屽弽棣�</span></div>');
		var e = $("#rs");
		e.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"),
		e.find(".fb-list-container").css("width", e.width() + 20),
		e.find(".fb-list-container").css("height", e.height() + 10);
		var n = $("#con-ar .result-op");
		n.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"),
		n.each(function() {
			$(this).find(".fb-list-container").css("width", $(this).width() + 20),
			$(this).find(".fb-list-container").css("height", $(this).height() + 10)
		})
	}
	function r(t, e) {
		this.init = function() {
			var n = new Date;
			return this.title = t,
			this.query = decodeURIComponent(bds.comm.query),
			this.srcid = e && e.attr("srcid") || "-1",
			this.tpl = e && e.attr("tpl") || "",
			this.url = window.location.href || "",
			this.time = n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds(),
			this.username = bds.comm.username || "",
			this.order = e && e.attr("id") || "",
			this.entry = "1",
			this.build(),
			this.bindEvent(),
			this.render(),
			this
		},
		this.build = function() {
			var t = "",
			e = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type">' + "<option value='25338'>鐢宠鍒犻櫎鎻愮ず璇�</option><option value='25351'>鐢宠鍒犻櫎鎴栨洿鏂伴〉闈俊鎭�</option><option value='25333'>鍐呭鎴栧浘鐗囬檲鏃�</option><option value='25056'>鍙樺舰銆侀敊涔便€佷贡鐮佺瓑闂</option><option value='25337'>椤甸潰缁撴灉涓庢悳绱㈣瘝鏃犲叧</option><option value='25340'>鍏朵粬闂鍙婂缓璁�</option></select></div></div>",
			n = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="璇疯缁嗚鏄庯紝浠ヤ究浜庢垜浠畾浣嶅拰瑙ｅ喅闂锛屽锛氬唴瀹规湁璇�/瀹氫綅鍦扮偣涓嶅噯纭瓑锛堝瓧鏁伴檺鍒跺湪300瀛椾互鍐咃級"></textarea></div>',
			o = "",
			i = "";
			bds.se.ShortCut.uploadImg && (o = '<div class="fb-block fb-cut-block" ><div class="fb-cut-input c-icon c-icon-success"  ></div><span class="fb-shangchuan">鍖呭惈灞忓箷鎴浘</span></div>', i = '<div class="fb-block fb-canvas-block"><img src=""/><input type="hidden" name="img_base64" class="fb-img"></div>');
			var s = '<div class="fb-block fb-email-block"><input type="text" class="fb-email"  name="email" maxlength="100" placeholder="鑱旂郴閭锛堢暀涓嬭仈绯婚偖绠憋紝浠ヤ究鎴戜滑蹇€熷弽棣堬級"></div>';
			t = '<div class="fb-modal "><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">脳</a><h3  class="fb-header-tips">鎼滅储缁撴灉鍙嶉</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" onsubmit = "return false;">' + e + n + o + i + s + '</form> </div><div class="fb-hint"><span>璇峰～鍐欐弿杩板弽棣�</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_right_post_save">鎻愪氦鍙嶉</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/history?type=commonqa#/commonqa" target="_blank">甯歌瑙ｅ喅鍔炴硶</a></span><span><a style="text-decoration:underline;float:right" href="http://ufo.baidu.com/listen/history?type=history#/history" target="_blank">鎴戠殑鍙嶉</a></span></div></div></div><div class="fb-mask" style="display:none"  data-html2canvas-ignore="true"></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">脳</a><h3  class="fb-header-tips">闈炲父鎰熻阿</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>鎻愪氦鎴愬姛</div><div class="fb-success-text">鎰熻阿鎮ㄧ殑瀹濊吹鎰忚</div></div></div>';
			var r = document.createElement("div");
			r.id = "fb_baidu_right_dialog",
			r.className = "fb-feedback-right-dialog",
			r.className = "fb-feedback-right-dialog",
			r.setAttribute("data-html2canvas-ignore", "true"),
			r.innerHTML = t,
			this.dom = r
		},
		this.bindEvent = function() {
			var t = this;
			$(this.dom).find(".fb-close").on("click",
			function() {
				o()
			}),
			$(this.dom).find("#fb_right_post_save").on("click",
			function() {
				$(t.dom).find(".fb-textarea textarea").val() ? t.post() : ($(t.dom).find(".fb-hint").css("display", "block"), setTimeout(function() {
					$(t.dom).find(".fb-hint").css("opacity", "1"),
					setTimeout(function() {
						$(t.dom).find(".fb-hint").removeAttr("style")
					},
					1500)
				},
				50))
			}),
			$(this.dom).find(".fb-cut-input").on("click",
			function() {
				$(t.dom).find(".fb-cut-input").hasClass("c-icon") ? ($(t.dom).find(".fb-cut-input").removeClass("c-icon"), $(t.dom).find(".fb-cut-input").removeClass("c-icon-success"), $(t.dom).find(".fb-canvas-block").css("display", "none")) : ($(t.dom).find(".fb-cut-input").addClass("c-icon"), $(t.dom).find(".fb-cut-input").addClass("c-icon-success"), $(t.dom).find(".fb-canvas-block").css("display", "block"))
			})
		},
		this.render = function() {
			$("body").append(this.dom)
		},
		this.grayed = function(t) {
			t ? $(this.dom).css("visibility", "hidden") : $(this.dom).removeAttr("style")
		},
		this.destory = function() {
			$(this.dom).remove(),
			$(document).off("scroll.feedback")
		},
		this.post = function() {
			this.content = $(this.dom).find(".fb-des-content").val(),
			this.type = $(this.dom).find(".fb-type").val(),
			this.email = $(this.dom).find(".fb-email").val(),
			data = {
				content: this.content,
				type: this.type,
				img_base64: bds.se.ShortCut.img_base64,
				email: this.email,
				query: this.query,
				srcid: this.srcid,
				tpl: this.tpl,
				url: this.url,
				time: this.time,
				username: this.username,
				order: this.order,
				entry: this.entry,
				platform: "pc"
			},
			bds.se.ShortCut.uploadImg ? $.post(bds.se.ShortCut.domain, data).success(function(t) {
				"Success" == jQuery.parseJSON(t).status || alert(decodeURIComponent(jQuery.parseJSON(t).errors))
			}).error(function() {
				alert("fail")
			}) : $.ajax({
				url: bds.se.ShortCut.domain,
				dataType: "jsonp",
				data: data,
				jsonp: "cb1"
			}).success(function(t) {
				"Success" == t.status || alert(decodeURIComponent(jQuery.parseJSON(t).errors))
			}).error(function() {
				alert("fail")
			}),
			$(this.dom).find(".fb-modal ").remove(),
			$(this.dom).find(".fb-mask").remove(),
			$(this.dom).find(".fb-success").css("display", "block"),
			setTimeout(function() {
				o()
			},
			1e3)
		},
		this.init()
	}
	function a(t, e) {
		this.init = function() {
			var e = new Date;
			return this.query = decodeURIComponent(bds.comm.query),
			this.srcid = t && t.attr("srcid") || "-1",
			this.tpl = t && t.attr("tpl") || "",
			this.url = window.location.href || "",
			this.time = e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds(),
			this.username = bds.comm.username || "",
			t && (t.closest("#con-ar").length ? (this.order = "con-ar", this.content_tips_div = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type"> ' + "<option value='25338'>鐢宠鍒犻櫎鎻愮ず璇�</option><option value='25333'>鍐呭鎴栧浘鐗囬檲鏃�</option><option value='25056'>鍙樺舰銆侀敊涔便€佷贡鐮佺瓑闂</option><option value='25337'>鎺ㄨ崘缁撴灉涓庢悳绱㈣瘝鏃犲叧</option><option value='25340'>鍏朵粬闂鍙婂缓璁�</option></select></div></div>") : t.attr("id") && "rs" == t.attr("id") ? (this.order = "rs", this.content_tips_div = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type"> <option value=\'25338\'>鐢宠鍒犻櫎鎻愮ず璇�</option></select></div></div>') : t.attr("tpl") && "se_com_default" != t.attr("tpl") ? (this.order = t.attr("id") || "-1", this.content_tips_div = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type"> ' + "<option value='25333'>鍐呭鎴栧浘鐗囬檲鏃�</option><option value='25056'>鍙樺舰銆侀敊涔便€佷贡鐮佺瓑闂</option><option value='25336'>杩欐潯缁撴灉涓庢悳绱㈣瘝鏃犲叧</option><option value='25340'>鍏朵粬闂鍙婂缓璁�</option></select></div></div>") : t.attr("tpl") ? (this.order = t.attr("id") || "-1", this.content_tips_div = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type"> ' + "<option value='25332'>鐢宠鍒犻櫎鎴栨洿鏂拌繖鏉′俊鎭�</option><option value='25333'>鍐呭鎴栧浘鐗囬檲鏃�</option><option value='25056'>鍙樺舰銆侀敊涔便€佷贡鐮佺瓑闂</option><option value='25336'>杩欐潯缁撴灉涓庢悳绱㈣瘝鏃犲叧</option><option value='25340'>鍏朵粬闂鍙婂缓璁�</option></select></div></div>") : (this.order = "ec", this.content_tips_div = '<div class="fb-select"><div class="fb-select-shorter"><select class="fb-type" name="type"> ' + "<option value='25064'>鎺ㄥ箍淇℃伅渚垫潈</option><option value='25065'>鎺ㄥ箍淇℃伅璐ㄩ噺宸�</option><option value='25339'>鎺ㄥ箍淇℃伅涓庢悳绱㈣瘝鏃犲叧</option><option value='25058'>鍏朵粬闂鍙婁骇鍝佸缓璁�</option></select></div></div>")),
			this.entry = "2",
			this.top = t.offset().top - 4,
			this.left = t.closest("#content_right").length ? t.offset().left - 390 - 23 : t.offset().left + t.width() + 30,
			this.build(),
			this.bindEvent(),
			this.render(),
			this
		},
		this.build = function() {
			var t = "",
			e = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="璇疯缁嗚鏄庯紝浠ヤ究浜庢垜浠畾浣嶅拰瑙ｅ喅闂锛屽锛氬唴瀹规湁璇�/瀹氫綅鍦扮偣涓嶅噯纭瓑锛堝瓧鏁伴檺鍒跺湪300瀛椾互鍐咃級"></textarea></div>',
			n = '<div class="fb-block fb-email-block"><input type="text" class="fb-email" maxlength="100" name="email" placeholder="鑱旂郴閭锛堢暀涓嬭仈绯婚偖绠憋紝浠ヤ究鎴戜滑蹇€熷弽棣堬級"></div>';
			t = '<div class="fb-modal" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">脳</a><h3  class="fb-header-tips">鍗曟潯缁撴灉鍙嶉</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" method="post" onsubmit = "return false;">' + this.content_tips_div + e + n + '</form> </div><div class="fb-hint"><span>璇峰～鍐欐弿杩板弽棣�</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_list_post_save">鎻愪氦鍙嶉</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/history?type=commonqa#/commonqa" target="_blank">甯歌瑙ｅ喅鍔炴硶</a></span><span><a style="text-decoration:underline;float:right" href="http://ufo.baidu.com/listen/history?type=history#/history" target="_blank">鎴戠殑鍙嶉</a></span></div></div></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">脳</a><h3  class="fb-header-tips">闈炲父鎰熻阿</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>鎻愪氦鎴愬姛</div><div class="fb-success-text">鎰熻阿鎮ㄧ殑瀹濊吹鎰忚</div></div></div>';
			var o = document.createElement("div");
			o.id = "fb_baidu_list_dialog",
			o.className = "fb-feedback-list-dialog",
			o.setAttribute("data-html2canvas-ignore", "true"),
			o.innerHTML = t,
			this.dom = o,
			$(this.dom).css("top", this.top),
			$(this.dom).css("left", this.left),
			"con-ar" == this.order && $(this.dom).attr("class", "fb-feedback-list-dialog-left")
		},
		this.bindEvent = function() {
			var t = this;
			$(this.dom).find(".fb-close").on("click",
			function() {
				t.destory(),
				n($(".fb-list-container")),
				bds.se.ShortCut.key = 0,
				bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0),
				bds.se.ShortCut.rdialog || o()
			}),
			$(this.dom).find("#fb_list_post_save").on("click",
			function() {
				$(t.dom).find(".fb-textarea textarea").val() ? t.post() : ($(t.dom).find(".fb-hint").css("display", "block"), setTimeout(function() {
					$(t.dom).find(".fb-hint").css("opacity", "1"),
					setTimeout(function() {
						$(t.dom).find(".fb-hint").removeAttr("style")
					},
					1500)
				},
				50))
			})
		},
		this.render = function() {
			$("body").append(this.dom)
		},
		this.destory = function() {
			$(this.dom).remove()
		},
		this.post = function() {
			var t = this;
			this.content = $(this.dom).find(".fb-des-content").val(),
			this.type = $(this.dom).find(".fb-type").val(),
			this.email = $(this.dom).find(".fb-email").val(),
			bds.se.ShortCut.get_Snapshot_list( - bds.se.ShortCut.curListDom.offset().left, -bds.se.ShortCut.curListDom.offset().top, bds.se.ShortCut.curListDom.width() + 20, bds.se.ShortCut.curListDom.height() + 12,
			function() {
				data = {
					content: t.content,
					type: t.type,
					img_base64: bds.se.ShortCut.img_base64_list,
					email: t.email,
					query: t.query,
					srcid: t.srcid,
					tpl: t.tpl,
					url: t.url,
					time: t.time,
					username: t.username,
					order: t.order,
					entry: t.entry,
					platform: "pc"
				},
				e && (data.ala = 1),
				bds.se.ShortCut.uploadImg ? $.post(bds.se.ShortCut.domain, data).success(function(t) {
					"Success" == jQuery.parseJSON(t).status || alert(decodeURIComponent(jQuery.parseJSON(t).errors))
				}).error(function() {
					alert("fail")
				}) : $.ajax({
					url: bds.se.ShortCut.domain,
					dataType: "jsonp",
					data: data,
					jsonp: "cb1"
				}).success(function(t) {
					"Success" == t.status || alert(decodeURIComponent(t.errors))
				}).error(function() {
					alert("fail")
				})
			}),
			$(this.dom).find(".fb-modal ").remove(),
			$(this.dom).find(".fb-mask").remove(),
			$(this.dom).find(".fb-success").css("display", "block"),
			setTimeout(function() {
				o()
			},
			1e3)
		},
		this.init()
	}
	bds && bds.se && (bds.se.ShortCut = {
		base_url_path: "http://f3.baidu.com",
		up_file: !1,
		is_feedbacking: !1,
		product_id: 0,
		entrance_id: 0,
		send_img: !1,
		img_data: "",
		onlyUpFile: !1,
		pro_data: "",
		scrollTop: 0,
		ldiaInf: {},
		rdiaInf: {},
		canvas_block_height: 0,
		key: 0,
		domain: bds.util.domain.get("api.open.baidu.com") + "/pae/common/api/feedback",
		img_base64: "",
		img_base64_list: "",
		initRightBar: function() {
			this.html2canvas(),
			this._getCss(),
			this._identifyCanvas() && this._identifyCors() ? (bds.se.ShortCut.uploadImg = !0, this.get_Snapshot()) : bds.se.ShortCut.uploadImg = !1
		},
		_getCss: function() {
			bds.util.addStyle("#content_left > div,#rs,#con-ar .result-op{position: relative;}")
		},
		_identifyCanvas: function() {
			try {
				var t = document.createElement("canvas").getContext("2d");
				return t = null,
				!0
			} catch(e) {
				return ! 1
			}
		},
		_identifyCors: function() {
			var t = new XMLHttpRequest;
			return "withCredentials" in t
		},
		init_ala: function(t) {
			this.html2canvas(),
			bds.se.ShortCut.uploadImg = this._identifyCanvas() && this._identifyCors() ? !0 : !1,
			$("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"),
			t.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"),
			t.find(".fb-list-container").css("width", t.width() + 20),
			t.find(".fb-list-container").css("height", t.height() + 10),
			e(t.find(".fb-list-container")),
			bds.se.ShortCut.ldialog = new a(t, 1),
			bds.se.ShortCut.curListDom = t.find(".fb-list-container"),
			$(".fb-mask").on("click",
			function() {
				o(),
				bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory()
			})
		},
		init_shade: function() {
			$("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"),
			s(),
			$(".fb-list-container").hover(function(t) {
				i($(t.currentTarget)),
				$(t.currentTarget).children().length || e($(t.currentTarget))
			},
			function(e) {
				t($(e.currentTarget)) != bds.se.ShortCut.key && n($(e.currentTarget))
			}),
			$(".fb-list-container").on("click",
			function(o) {
				$(".c-container").first().children(".fb-hint-tip").remove(),
				$(".c-container").first().children(".fb-list-container-first").remove(),
				bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(),
				n($(".fb-list-container")),
				t($(o.currentTarget)) == bds.se.ShortCut.key ? (bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0)) : (bds.se.ShortCut.key = t($(o.currentTarget)), bds.se.ShortCut.curListDom = $(o.currentTarget), bds.se.ShortCut.ldialog = new a(i($(o.currentTarget))), bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(1), e($(o.currentTarget)))
			}),
			$(".fb-mask").on("click",
			function() {
				bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(),
				bds.se.ShortCut.key = 0,
				bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0),
				n($(".fb-list-container"))
			})
		},
		get_Snapshot: function() {
			$(window).scrollTop(0);
			var t = this;
			bds.se.ShortCut.rdialog = new r,
			t.init_shade(),
			$(".fb-canvas-block").addClass("c-loading"),
			html2canvas(document.body, {
				proxy: bds.util.domain.get("f3.baidu.com") + "/getProxyImage.php",
				onrendered: function(e) {
					$(".fb-canvas-block").removeClass("c-loading");
					var n = document.createElement("canvas");
					n.width = e.width,
					n.height = $("body").height();
					var o = n.getContext("2d");
					o.drawImage(e, 0, 0),
					bds.se.ShortCut.img_base64 = n.toDataURL("image/png"),
					$(".fb-canvas-block img").attr("src", n.toDataURL("image/png")),
					setTimeout(function() {
						t.canvas_block_height = $(".fb-canvas-block img").height()
					},
					50),
					$(document).on("scroll.feedback",
					function() {
						var e = $(window).scrollTop(),
						n = $(document).height(),
						o = $(window).height();
						scrollPercent = e / (n - o),
						$(".fb-canvas-block img").css("top", -(t.canvas_block_height - 172) * scrollPercent)
					})
				}
			})
		},
		get_Snapshot_list: function(t, e, n, o, i) {
			html2canvas(document.body, {
				proxy: bds.util.domain.get("f3.baidu.com") + "/getProxyImage.php",
				onrendered: function(s) {
					var r = document.createElement("canvas");
					r.width = n,
					r.height = o;
					var a = r.getContext("2d");
					a.drawImage(s, t, e),
					bds.se.ShortCut.img_base64_list = r.toDataURL("image/png"),
					i()
				}
			})
		},
		html2canvas: function() { !
			function(t, e, n) {
				"use strict";
				function o(e) {
					d.logging && t.console && t.console.log && t.console.log(e)
				}
				function i(t, e, n, o, i, s) {
					var r, a, c, l, u = d.Util.getCSS(e, t, i);
					if (1 === u.length && (l = u[0], u = [], u[0] = l, u[1] = l), -1 !== u[0].toString().indexOf("%")) c = parseFloat(u[0]) / 100,
					a = n.width * c,
					"backgroundSize" !== t && (a -= (s || o).width * c);
					else if ("backgroundSize" === t) if ("auto" === u[0]) a = o.width;
					else if (u[0].match(/contain|cover/)) {
						var m = d.Util.resizeBounds(o.width, o.height, n.width, n.height, u[0]);
						a = m.width,
						r = m.height
					} else a = parseInt(u[0], 10);
					else a = parseInt(u[0], 10);
					return "auto" === u[1] ? r = a / o.width * o.height: -1 !== u[1].toString().indexOf("%") ? (c = parseFloat(u[1]) / 100, r = n.height * c, "backgroundSize" !== t && (r -= (s || o).height * c)) : r = parseInt(u[1], 10),
					[a, r]
				}
				function s(t, e) {
					var n = [];
					return {
						storage: n,
						width: t,
						height: e,
						clip: function() {
							n.push({
								type: "function",
								name: "clip",
								arguments: arguments
							})
						},
						translate: function() {
							n.push({
								type: "function",
								name: "translate",
								arguments: arguments
							})
						},
						fill: function() {
							n.push({
								type: "function",
								name: "fill",
								arguments: arguments
							})
						},
						save: function() {
							n.push({
								type: "function",
								name: "save",
								arguments: arguments
							})
						},
						restore: function() {
							n.push({
								type: "function",
								name: "restore",
								arguments: arguments
							})
						},
						fillRect: function() {
							n.push({
								type: "function",
								name: "fillRect",
								arguments: arguments
							})
						},
						createPattern: function() {
							n.push({
								type: "function",
								name: "createPattern",
								arguments: arguments
							})
						},
						drawShape: function() {
							var t = [];
							return n.push({
								type: "function",
								name: "drawShape",
								arguments: t
							}),
							{
								moveTo: function() {
									t.push({
										name: "moveTo",
										arguments: arguments
									})
								},
								lineTo: function() {
									t.push({
										name: "lineTo",
										arguments: arguments
									})
								},
								arcTo: function() {
									t.push({
										name: "arcTo",
										arguments: arguments
									})
								},
								bezierCurveTo: function() {
									t.push({
										name: "bezierCurveTo",
										arguments: arguments
									})
								},
								quadraticCurveTo: function() {
									t.push({
										name: "quadraticCurveTo",
										arguments: arguments
									})
								}
							}
						},
						drawImage: function() {
							n.push({
								type: "function",
								name: "drawImage",
								arguments: arguments
							})
						},
						fillText: function() {
							n.push({
								type: "function",
								name: "fillText",
								arguments: arguments
							})
						},
						setVariable: function(t, e) {
							n.push({
								type: "variable",
								name: t,
								arguments: e
							})
						}
					}
				}
				function r(t) {
					return {
						zindex: t,
						children: []
					}
				}
				var a, c, d = {};
				d.Util = {},
				d.Util.trimText = function(t) {
					return function(e) {
						return t ? t.apply(e) : ((e || "") + "").replace(/^\s+|\s+$/g, "")
					}
				} (String.prototype.trim),
				d.Util.parseBackgroundImage = function(t) {
					var e, n, o, i, s, r, a, c, d = " \r\n	",
					l = [],
					u = 0,
					m = 0,
					p = function() {
						e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)), n && c.push(n), "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && (o = e.substr(0, i), e = e.substr(i)), l.push({
							prefix: o,
							method: e.toLowerCase(),
							value: s,
							args: c
						})),
						c = [],
						e = o = n = s = ""
					};
					p();
					for (var f = 0,
					h = t.length; h > f; f++) if (r = t[f], !(0 === u && d.indexOf(r) > -1)) {
						switch (r) {
						case '"':
							a ? a === r && (a = null) : a = r;
							break;
						case "(":
							if (a) break;
							if (0 === u) {
								u = 1,
								s += r;
								continue
							}
							m++;
							break;
						case ")":
							if (a) break;
							if (1 === u) {
								if (0 === m) {
									u = 0,
									s += r,
									p();
									continue
								}
								m--
							}
							break;
						case ",":
							if (a) break;
							if (0 === u) {
								p();
								continue
							}
							if (1 === u && 0 === m && !e.match(/^url$/i)) {
								c.push(n),
								n = "",
								s += r;
								continue
							}
						}
						s += r,
						0 === u ? e += r: n += r
					}
					return p(),
					l
				},
				d.Util.Bounds = function(t) {
					var e, n = {};
					return t.getBoundingClientRect ? (e = t.getBoundingClientRect(), n.top = e.top, n.bottom = e.bottom || e.top + e.height, n.left = e.left, n.width = e.width || e.right - e.left, n.height = e.height || e.bottom - e.top, n) : void 0
				},
				d.Util.getCSS = function(t, o, i) {
					function s(e, n) {
						var o, i = t.runtimeStyle && t.runtimeStyle[e],
						s = t.style;
						return ! /^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(n) && /^-?\d/.test(n) && (o = s.left, i && (t.runtimeStyle.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em": n || 0, n = s.pixelLeft + "px", s.left = o, i && (t.runtimeStyle.left = i)),
						/^(thin|medium|thick)$/i.test(n) ? n: Math.round(parseFloat(n)) + "px"
					}
					var r, l = o.match(/^background(Size|Position)$/);
					if (a !== t && (c = e.defaultView.getComputedStyle(t, null)), r = c[o], l) {
						if (r = (r || "").split(","), r = r[i || 0] || r[0] || "auto", r = d.Util.trimText(r).split(" "), "backgroundSize" !== o || r[0] && !r[0].match(/cover|contain|auto/)) {
							if (r[0] = -1 === r[0].indexOf("%") ? s(o + "X", r[0]) : r[0], r[1] === n) {
								if ("backgroundSize" === o) return r[1] = "auto",
								r;
								r[1] = r[0]
							}
							r[1] = -1 === r[1].indexOf("%") ? s(o + "Y", r[1]) : r[1]
						}
					} else if (/border(Top|Bottom)(Left|Right)Radius/.test(o)) {
						var u = r.split(" ");
						u.length <= 1 && (u[1] = u[0]),
						u[0] = parseInt(u[0], 10),
						u[1] = parseInt(u[1], 10),
						r = u
					}
					return r
				},
				d.Util.resizeBounds = function(t, e, n, o, i) {
					var s, r, a = n / o,
					c = t / e;
					return i && "auto" !== i ? c > a ^ "contain" === i ? (r = o, s = o * c) : (s = n, r = n / c) : (s = n, r = o),
					{
						width: s,
						height: r
					}
				},
				d.Util.BackgroundPosition = function(t, e, n, o, s) {
					var r = i("backgroundPosition", t, e, n, o, s);
					return {
						left: r[0],
						top: r[1]
					}
				},
				d.Util.BackgroundSize = function(t, e, n, o) {
					var s = i("backgroundSize", t, e, n, o);
					return {
						width: s[0],
						height: s[1]
					}
				},
				d.Util.Extend = function(t, e) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e
				},
				d.Util.Children = function(t) {
					var e;
					try {
						e = t.nodeName && "IFRAME" === t.nodeName.toUpperCase() ? t.contentDocument || t.contentWindow.document: function(t) {
							var e = [];
							return null !== t && !
							function(t, e) {
								var o = t.length,
								i = 0;
								if ("number" == typeof e.length) for (var s = e.length; s > i; i++) t[o++] = e[i];
								else for (; e[i] !== n;) t[o++] = e[i++];
								return t.length = o,
								t
							} (e, t),
							e
						} (t.childNodes)
					} catch(i) {
						o("html2canvas.Util.Children failed with exception: " + i.message),
						e = []
					}
					return e
				},
				d.Util.Font = function() {
					var t = {};
					return function(e, o, i) {
						if (t[e + "-" + o] !== n) return t[e + "-" + o];
						var s, r, a, c = i.createElement("div"),
						d = i.createElement("img"),
						l = i.createElement("span"),
						u = "Hidden Text";
						return c.style.visibility = "hidden",
						c.style.fontFamily = e,
						c.style.fontSize = o,
						c.style.margin = 0,
						c.style.padding = 0,
						i.body.appendChild(c),
						d.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=",
						d.width = 1,
						d.height = 1,
						d.style.margin = 0,
						d.style.padding = 0,
						d.style.verticalAlign = "baseline",
						l.style.fontFamily = e,
						l.style.fontSize = o,
						l.style.margin = 0,
						l.style.padding = 0,
						l.appendChild(i.createTextNode(u)),
						c.appendChild(l),
						c.appendChild(d),
						s = d.offsetTop - l.offsetTop + 1,
						c.removeChild(l),
						c.appendChild(i.createTextNode(u)),
						c.style.lineHeight = "normal",
						d.style.verticalAlign = "super",
						r = d.offsetTop - c.offsetTop + 1,
						a = {
							baseline: s,
							lineWidth: 1,
							middle: r
						},
						t[e + "-" + o] = a,
						i.body.removeChild(c),
						a
					}
				} (),
				function() {
					d.Generate = {};
					var t = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
					d.Generate.parseGradient = function(e, n) {
						var o, i, s, r, a, c, d, l, u, m, p, f, h = t.length;
						for (i = 0; h > i && !(s = e.match(t[i])); i += 1);
						if (s) switch (s[1]) {
						case "-webkit-linear-gradient":
						case "-o-linear-gradient":
							if (o = {
								type: "linear",
								x0: null,
								y0: null,
								x1: null,
								y1: null,
								colorStops: []
							},
							a = s[2].match(/\w+/g)) for (c = a.length, i = 0; c > i; i += 1) switch (a[i]) {
							case "top":
								o.y0 = 0,
								o.y1 = n.height;
								break;
							case "right":
								o.x0 = n.width,
								o.x1 = 0;
								break;
							case "bottom":
								o.y0 = n.height,
								o.y1 = 0;
								break;
							case "left":
								o.x0 = 0,
								o.x1 = n.width
							}
							if (null === o.x0 && null === o.x1 && (o.x0 = o.x1 = n.width / 2), null === o.y0 && null === o.y1 && (o.y0 = o.y1 = n.height / 2), a = s[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (c = a.length, d = 1 / Math.max(c - 1, 1), i = 0; c > i; i += 1) l = a[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),
							l[2] ? (r = parseFloat(l[2]), r /= "%" === l[3] ? 100 : n.width) : r = i * d,
							o.colorStops.push({
								color: l[1],
								stop: r
							});
							break;
						case "-webkit-gradient":
							if (o = {
								type: "radial" === s[2] ? "circle": s[2],
								x0: 0,
								y0: 0,
								x1: 0,
								y1: 0,
								colorStops: []
							},
							a = s[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/), a && (o.x0 = a[1] * n.width / 100, o.y0 = a[2] * n.height / 100, o.x1 = a[3] * n.width / 100, o.y1 = a[4] * n.height / 100), a = s[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)) for (c = a.length, i = 0; c > i; i += 1) l = a[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/),
							r = parseFloat(l[2]),
							"from" === l[1] && (r = 0),
							"to" === l[1] && (r = 1),
							o.colorStops.push({
								color: l[3],
								stop: r
							});
							break;
						case "-moz-linear-gradient":
							if (o = {
								type: "linear",
								x0: 0,
								y0: 0,
								x1: 0,
								y1: 0,
								colorStops: []
							},
							a = s[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), a && (o.x0 = a[1] * n.width / 100, o.y0 = a[2] * n.height / 100, o.x1 = n.width - o.x0, o.y1 = n.height - o.y0), a = s[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)) for (c = a.length, d = 1 / Math.max(c - 1, 1), i = 0; c > i; i += 1) l = a[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/),
							l[2] ? (r = parseFloat(l[2]), l[3] && (r /= 100)) : r = i * d,
							o.colorStops.push({
								color: l[1],
								stop: r
							});
							break;
						case "-webkit-radial-gradient":
						case "-moz-radial-gradient":
						case "-o-radial-gradient":
							if (o = {
								type: "circle",
								x0: 0,
								y0: 0,
								x1: n.width,
								y1: n.height,
								cx: 0,
								cy: 0,
								rx: 0,
								ry: 0,
								colorStops: []
							},
							a = s[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), a && (o.cx = a[1] * n.width / 100, o.cy = a[2] * n.height / 100), a = s[3].match(/\w+/), l = s[4].match(/[a-z\-]*/), a && l) switch (l[0]) {
							case "farthest-corner":
							case "cover":
							case "":
								u = Math.sqrt(Math.pow(o.cx, 2) + Math.pow(o.cy, 2)),
								m = Math.sqrt(Math.pow(o.cx, 2) + Math.pow(o.y1 - o.cy, 2)),
								p = Math.sqrt(Math.pow(o.x1 - o.cx, 2) + Math.pow(o.y1 - o.cy, 2)),
								f = Math.sqrt(Math.pow(o.x1 - o.cx, 2) + Math.pow(o.cy, 2)),
								o.rx = o.ry = Math.max(u, m, p, f);
								break;
							case "closest-corner":
								u = Math.sqrt(Math.pow(o.cx, 2) + Math.pow(o.cy, 2)),
								m = Math.sqrt(Math.pow(o.cx, 2) + Math.pow(o.y1 - o.cy, 2)),
								p = Math.sqrt(Math.pow(o.x1 - o.cx, 2) + Math.pow(o.y1 - o.cy, 2)),
								f = Math.sqrt(Math.pow(o.x1 - o.cx, 2) + Math.pow(o.cy, 2)),
								o.rx = o.ry = Math.min(u, m, p, f);
								break;
							case "farthest-side":
								"circle" === a[0] ? o.rx = o.ry = Math.max(o.cx, o.cy, o.x1 - o.cx, o.y1 - o.cy) : (o.type = a[0], o.rx = Math.max(o.cx, o.x1 - o.cx), o.ry = Math.max(o.cy, o.y1 - o.cy));
								break;
							case "closest-side":
							case "contain":
								"circle" === a[0] ? o.rx = o.ry = Math.min(o.cx, o.cy, o.x1 - o.cx, o.y1 - o.cy) : (o.type = a[0], o.rx = Math.min(o.cx, o.x1 - o.cx), o.ry = Math.min(o.cy, o.y1 - o.cy))
							}
							if (a = s[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (c = a.length, d = 1 / Math.max(c - 1, 1), i = 0; c > i; i += 1) l = a[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/),
							l[2] ? (r = parseFloat(l[2]), r /= "%" === l[3] ? 100 : n.width) : r = i * d,
							o.colorStops.push({
								color: l[1],
								stop: r
							})
						}
						return o
					},
					d.Generate.Gradient = function(t, n) {
						if (0 !== n.width && 0 !== n.height) {
							var i, s, r, a, c = e.createElement("canvas"),
							l = c.getContext("2d");
							if (c.width = n.width, c.height = n.height, i = d.Generate.parseGradient(t, n)) if ("linear" === i.type) {
								for (s = l.createLinearGradient(i.x0, i.y0, i.x1, i.y1), r = 0, a = i.colorStops.length; a > r; r += 1) try {
									s.addColorStop(i.colorStops[r].stop, i.colorStops[r].color)
								} catch(u) {
									o(["failed to add color stop: ", u, "; tried to add: ", i.colorStops[r], "; stop: ", r, "; in: ", t])
								}
								l.fillStyle = s,
								l.fillRect(0, 0, n.width, n.height)
							} else if ("circle" === i.type) {
								for (s = l.createRadialGradient(i.cx, i.cy, 0, i.cx, i.cy, i.rx), r = 0, a = i.colorStops.length; a > r; r += 1) try {
									s.addColorStop(i.colorStops[r].stop, i.colorStops[r].color)
								} catch(u) {
									o(["failed to add color stop: ", u, "; tried to add: ", i.colorStops[r], "; stop: ", r, "; in: ", t])
								}
								l.fillStyle = s,
								l.fillRect(0, 0, n.width, n.height)
							} else if ("ellipse" === i.type) {
								var m = e.createElement("canvas"),
								p = m.getContext("2d"),
								f = Math.max(i.rx, i.ry),
								h = 2 * f;
								for (m.width = m.height = h, s = p.createRadialGradient(i.rx, i.ry, 0, i.rx, i.ry, f), r = 0, a = i.colorStops.length; a > r; r += 1) try {
									s.addColorStop(i.colorStops[r].stop, i.colorStops[r].color)
								} catch(u) {
									o(["failed to add color stop: ", u, "; tried to add: ", i.colorStops[r], "; stop: ", r, "; in: ", t])
								}
								p.fillStyle = s,
								p.fillRect(0, 0, h, h),
								l.fillStyle = i.colorStops[r - 1].color,
								l.fillRect(0, 0, c.width, c.height),
								l.drawImage(m, i.cx - i.rx, i.cy - i.ry, 2 * i.rx, 2 * i.ry)
							}
							return c
						}
					},
					d.Generate.ListAlpha = function(t) {
						var e, n = "";
						do e = t % 26,
						n = String.fromCharCode(e + 64) + n,
						t /= 26;
						while (26 * t > 26);
						return n
					},
					d.Generate.ListRoman = function(t) {
						var e, n = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
						o = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
						i = "",
						s = n.length;
						if (0 >= t || t >= 4e3) return t;
						for (e = 0; s > e; e += 1) for (; t >= o[e];) t -= o[e],
						i += n[e];
						return i
					}
				} (),
				d.Parse = function(i, a) {
					function c() {
						return Math.max(Math.max(ae.body.scrollWidth, ae.documentElement.scrollWidth), Math.max(ae.body.offsetWidth, ae.documentElement.offsetWidth), Math.max(ae.body.clientWidth, ae.documentElement.clientWidth))
					}
					function l() {
						return Math.max(Math.max(ae.body.scrollHeight, ae.documentElement.scrollHeight), Math.max(ae.body.offsetHeight, ae.documentElement.offsetHeight), Math.max(ae.body.clientHeight, ae.documentElement.clientHeight))
					}
					function u(t, e) {
						var n = parseInt(ue(t, e), 10);
						return isNaN(n) ? 0 : n
					}
					function m(t, e, n, o, i, s) {
						"transparent" !== s && (t.setVariable("fillStyle", s), t.fillRect(e, n, o, i), re += 1)
					}
					function p(t, e) {
						switch (e) {
						case "lowercase":
							return t.toLowerCase();
						case "capitalize":
							return t.replace(/(^|\s|:|-|\(|\))([a-z])/g,
							function(t, e, n) {
								return t.length > 0 ? e + n.toUpperCase() : void 0
							});
						case "uppercase":
							return t.toUpperCase();
						default:
							return t
						}
					}
					function f(t) {
						return /^(normal|none|0px)$/.test(t)
					}
					function h(t, e, n, o) {
						null !== t && d.Util.trimText(t).length > 0 && (o.fillText(t, e, n), re += 1)
					}
					function g(t, e, n, o) {
						var i = !1,
						s = ue(e, "fontWeight"),
						r = ue(e, "fontFamily"),
						a = ue(e, "fontSize");
						switch (parseInt(s, 10)) {
						case 401:
							s = "bold";
							break;
						case 400:
							s = "normal"
						}
						return t.setVariable("fillStyle", o),
						t.setVariable("font", [ue(e, "fontStyle"), ue(e, "fontVariant"), s, a, r].join(" ")),
						t.setVariable("textAlign", i ? "right": "left"),
						"none" !== n ? d.Util.Font(r, a, ae) : void 0
					}
					function b(t, e, n, o, i) {
						switch (e) {
						case "underline":
							m(t, n.left, Math.round(n.top + o.baseline + o.lineWidth), n.width, 1, i);
							break;
						case "overline":
							m(t, n.left, Math.round(n.top), n.width, 1, i);
							break;
						case "line-through":
							m(t, n.left, Math.ceil(n.top + o.middle + o.lineWidth), n.width, 1, i)
						}
					}
					function v(t, e, n, o) {
						var i;
						if (ce.rangeBounds)("none" !== n || 0 !== d.Util.trimText(e).length) && (i = w(e, t.node, t.textOffset)),
						t.textOffset += e.length;
						else if (t.node && "string" == typeof t.node.nodeValue) {
							var s = o ? t.node.splitText(e.length) : null;
							i = _(t.node),
							t.node = s
						}
						return i
					}
					function w(t, e, n) {
						var o = ae.createRange();
						return o.setStart(e, n),
						o.setEnd(e, n + t.length),
						o.getBoundingClientRect()
					}
					function _(t) {
						var e = t.parentNode,
						n = ae.createElement("wrapper"),
						o = t.cloneNode(!0);
						n.appendChild(t.cloneNode(!0)),
						e.replaceChild(n, t);
						var i = d.Util.Bounds(n);
						return e.replaceChild(o, n),
						i
					}
					function y(t, e, n) {
						var o, i, s = n.ctx,
						r = ue(t, "color"),
						c = ue(t, "textDecoration"),
						l = ue(t, "textAlign"),
						u = {
							node: e,
							textOffset: 0
						};
						d.Util.trimText(e.nodeValue).length > 0 && (e.nodeValue = p(e.nodeValue, ue(t, "textTransform")), l = l.replace(["-webkit-auto"], ["auto"]), i = e.nodeValue.split(!a.letterRendering && /^(left|right|justify|auto)$/.test(l) && f(ue(t, "letterSpacing")) ? /(\b| )/: ""), o = g(s, t, c, r), a.chinese && i.forEach(function(t, e) { / . * [\u4E00 - \u9FA5]. * $ / .test(t) && (t = t.split(""), t.unshift(e, 1), i.splice.apply(i, t))
						}), i.forEach(function(t, e) {
							var n = v(u, t, c, e < i.length - 1);
							n && (h(t, n.left, n.bottom, s), b(s, c, n, o, r))
						}))
					}
					function x(t, e) {
						var n, o, i = ae.createElement("boundelement");
						return i.style.display = "inline",
						n = t.style.listStyleType,
						t.style.listStyleType = "none",
						i.appendChild(ae.createTextNode(e)),
						t.insertBefore(i, t.firstChild),
						o = d.Util.Bounds(i),
						t.removeChild(i),
						t.style.listStyleType = n,
						o
					}
					function $(t) {
						var e = -1,
						n = 1,
						o = t.parentNode.childNodes;
						if (t.parentNode) {
							for (; o[++e] !== t;) 1 === o[e].nodeType && n++;
							return n
						}
						return - 1
					}
					function T(t, e) {
						var n, o = $(t);
						switch (e) {
						case "decimal":
							n = o;
							break;
						case "decimal-leading-zero":
							n = 1 === o.toString().length ? o = "0" + o.toString() : o.toString();
							break;
						case "upper-roman":
							n = d.Generate.ListRoman(o);
							break;
						case "lower-roman":
							n = d.Generate.ListRoman(o).toLowerCase();
							break;
						case "lower-alpha":
							n = d.Generate.ListAlpha(o).toLowerCase();
							break;
						case "upper-alpha":
							n = d.Generate.ListAlpha(o)
						}
						return n += ". "
					}
					function k(t, e, n) {
						var o, i, s, r = e.ctx,
						a = ue(t, "listStyleType");
						if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(a)) {
							if (i = T(t, a), s = x(t, i), g(r, t, "none", ue(t, "color")), "inside" !== ue(t, "listStylePosition")) return;
							r.setVariable("textAlign", "left"),
							o = n.left,
							h(i, o, s.bottom, r)
						}
					}
					function C(t) {
						var e = i[t];
						return e && e.succeeded === !0 ? e.img: !1
					}
					function S(t, e) {
						var n = Math.max(t.left, e.left),
						o = Math.max(t.top, e.top),
						i = Math.min(t.left + t.width, e.left + e.width),
						s = Math.min(t.top + t.height, e.top + e.height);
						return {
							left: n,
							top: o,
							width: i - n,
							height: s - o
						}
					}
					function I(t, e) {
						var n;
						return e ? "auto" !== t ? (n = r(t), e.children.push(n), n) : e: n = r(0)
					}
					function D(t, e, n, o, i) {
						var s = u(e, "paddingLeft"),
						r = u(e, "paddingTop"),
						a = u(e, "paddingRight"),
						c = u(e, "paddingBottom");
						z(t, n, 0, 0, n.width, n.height, o.left + s + i[3].width, o.top + r + i[0].width, o.width - (i[1].width + i[3].width + s + a), o.height - (i[0].width + i[2].width + r + c))
					}
					function R(t) {
						return ["Top", "Right", "Bottom", "Left"].map(function(e) {
							return {
								width: u(t, "border" + e + "Width"),
								color: ue(t, "border" + e + "Color")
							}
						})
					}
					function A(t) {
						return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
							return ue(t, "border" + e + "Radius")
						})
					}
					function L(t, e, n, o) {
						var i = function(t, e, n) {
							return {
								x: t.x + (e.x - t.x) * n,
								y: t.y + (e.y - t.y) * n
							}
						};
						return {
							start: t,
							startControl: e,
							endControl: n,
							end: o,
							subdivide: function(s) {
								var r = i(t, e, s),
								a = i(e, n, s),
								c = i(n, o, s),
								d = i(r, a, s),
								l = i(a, c, s),
								u = i(d, l, s);
								return [L(t, r, d, u), L(u, l, c, o)]
							},
							curveTo: function(t) {
								t.push(["bezierCurve", e.x, e.y, n.x, n.y, o.x, o.y])
							},
							curveToReversed: function(o) {
								o.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
							}
						}
					}
					function j(t, e, n, o, i, s, r) {
						e[0] > 0 || e[1] > 0 ? (t.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(t), o[1].curveTo(t)) : t.push(["line", s, r]),
						(n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y])
					}
					function q(t, e, n, o, i, s, r) {
						var a = [];
						return e[0] > 0 || e[1] > 0 ? (a.push(["line", o[1].start.x, o[1].start.y]), o[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]),
						n[0] > 0 || n[1] > 0 ? (a.push(["line", s[0].start.x, s[0].start.y]), s[0].curveTo(a), a.push(["line", r[0].end.x, r[0].end.y]), r[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]), a.push(["line", t.c3[0], t.c3[1]])),
						e[0] > 0 || e[1] > 0 ? (a.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]),
						a
					}
					function U(t, e, n) {
						var o = t.left,
						i = t.top,
						s = t.width,
						r = t.height,
						a = e[0][0],
						c = e[0][1],
						d = e[1][0],
						l = e[1][1],
						u = e[2][0],
						m = e[2][1],
						p = e[3][0],
						f = e[3][1],
						h = s - d,
						g = r - u,
						b = s - m,
						v = r - f;
						return {
							topLeftOuter: fe(o, i, a, c).topLeft.subdivide(.5),
							topLeftInner: fe(o + n[3].width, i + n[0].width, Math.max(0, a - n[3].width), Math.max(0, c - n[0].width)).topLeft.subdivide(.5),
							topRightOuter: fe(o + h, i, d, l).topRight.subdivide(.5),
							topRightInner: fe(o + Math.min(h, s + n[3].width), i + n[0].width, h > s + n[3].width ? 0 : d - n[3].width, l - n[0].width).topRight.subdivide(.5),
							bottomRightOuter: fe(o + b, i + g, m, u).bottomRight.subdivide(.5),
							bottomRightInner: fe(o + Math.min(b, s + n[3].width), i + Math.min(g, r + n[0].width), Math.max(0, m - n[1].width), Math.max(0, u - n[2].width)).bottomRight.subdivide(.5),
							bottomLeftOuter: fe(o, i + v, p, f).bottomLeft.subdivide(.5),
							bottomLeftInner: fe(o + n[3].width, i + v, Math.max(0, p - n[3].width), Math.max(0, f - n[2].width)).bottomLeft.subdivide(.5)
						}
					}
					function E(t, e, n, o, i) {
						var s = ue(t, "backgroundClip"),
						r = [];
						switch (s) {
						case "content-box":
						case "padding-box":
							j(r, o[0], o[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width),
							j(r, o[1], o[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width),
							j(r, o[2], o[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width),
							j(r, o[3], o[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
							break;
						default:
							j(r, o[0], o[1], e.topLeftOuter, e.topRightOuter, i.left, i.top),
							j(r, o[1], o[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top),
							j(r, o[2], o[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height),
							j(r, o[3], o[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height)
						}
						return r
					}
					function O(t, e, n) {
						var o, i, s, r, a, c, d = e.left,
						l = e.top,
						u = e.width,
						m = e.height,
						p = A(t),
						f = U(e, p, n),
						h = {
							clip: E(t, f, n, p, e),
							borders: []
						};
						for (o = 0; 4 > o; o++) if (n[o].width > 0) {
							switch (i = d, s = l, r = u, a = m - n[2].width, o) {
							case 0:
								a = n[0].width,
								c = q({
									c1: [i, s],
									c2: [i + r, s],
									c3: [i + r - n[1].width, s + a],
									c4: [i + n[3].width, s + a]
								},
								p[0], p[1], f.topLeftOuter, f.topLeftInner, f.topRightOuter, f.topRightInner);
								break;
							case 1:
								i = d + u - n[1].width,
								r = n[1].width,
								c = q({
									c1: [i + r, s],
									c2: [i + r, s + a + n[2].width],
									c3: [i, s + a],
									c4: [i, s + n[0].width]
								},
								p[1], p[2], f.topRightOuter, f.topRightInner, f.bottomRightOuter, f.bottomRightInner);
								break;
							case 2:
								s = s + m - n[2].width,
								a = n[2].width,
								c = q({
									c1: [i + r, s + a],
									c2: [i, s + a],
									c3: [i + n[3].width, s],
									c4: [i + r - n[2].width, s]
								},
								p[2], p[3], f.bottomRightOuter, f.bottomRightInner, f.bottomLeftOuter, f.bottomLeftInner);
								break;
							case 3:
								r = n[3].width,
								c = q({
									c1: [i, s + a + n[2].width],
									c2: [i, s],
									c3: [i + r, s + n[0].width],
									c4: [i + r, s + a]
								},
								p[3], p[0], f.bottomLeftOuter, f.bottomLeftInner, f.topLeftOuter, f.topLeftInner)
							}
							h.borders.push({
								args: c,
								color: n[o].color
							})
						}
						return h
					}
					function N(t, e) {
						var n = t.drawShape();
						return e.forEach(function(t, e) {
							n[0 === e ? "moveTo": t[0] + "To"].apply(null, t.slice(1))
						}),
						n
					}
					function M(t, e, n) {
						"transparent" !== n && (t.setVariable("fillStyle", n), N(t, e), t.fill(), re += 1)
					}
					function P(t, e, n) {
						var i, s, r = ae.createElement("valuewrap"),
						a = ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"];
						a.forEach(function(e) {
							try {
								r.style[e] = ue(t, e)
							} catch(n) {
								o("html2canvas: Parse: Exception caught in renderFormValue: " + n.message)
							}
						}),
						r.style.borderColor = "black",
						r.style.borderStyle = "solid",
						r.style.display = "block",
						r.style.position = "absolute",
						(/^(submit|reset|button|text|password)$/.test(t.type) || "SELECT" === t.nodeName) && (r.style.lineHeight = ue(t, "height")),
						r.style.top = e.top + "px",
						r.style.left = e.left + "px",
						i = "SELECT" === t.nodeName ? (t.options[t.selectedIndex] || 0).text: t.value,
						i || (i = t.placeholder),
						s = ae.createTextNode(i),
						r.appendChild(s),
						le.appendChild(r),
						y(t, s, n),
						le.removeChild(r)
					}
					function z(t) {
						t.drawImage.apply(t, Array.prototype.slice.call(arguments, 1)),
						re += 1
					}
					function B(n, i) {
						var s = t.getComputedStyle(n, i);
						if (s && s.content && "none" !== s.content && "-moz-alt-content" !== s.content) {
							var r = s.content + "",
							a = r.substr(0, 1);
							a === r.substr(r.length - 1) && a.match(/'|"/) && (r = r.substr(1, r.length - 2));
							var c = "url" === r.substr(0, 3),
							l = e.createElement(c ? "img": "span");
							return l.className = me + "-before " + me + "-after",
							Object.keys(s).filter(F).forEach(function(t) {
								try {
									l.style[t] = s[t]
								} catch(e) {
									o(["Tried to assign readonly property ", t, "Error:", e])
								}
							}),
							c ? l.src = d.Util.parseBackgroundImage(r)[0].args[0] : l.innerHTML = r,
							l
						}
					}
					function F(e) {
						return isNaN(t.parseInt(e, 10))
					}
					function H(t, e) {
						var n = B(t, ":before"),
						o = B(t, ":after"); (n || o) && (n && (t.className += " " + me + "-before", t.parentNode.insertBefore(n, t), ne(n, e, !0), t.parentNode.removeChild(n), t.className = t.className.replace(me + "-before", "").trim()), o && (t.className += " " + me + "-after", t.appendChild(o), ne(o, e, !0), t.removeChild(o), t.className = t.className.replace(me + "-after", "").trim()))
					}
					function W(t, e, n, o) {
						var i = Math.round(o.left + n.left),
						s = Math.round(o.top + n.top);
						t.createPattern(e),
						t.translate(i, s),
						t.fill(),
						t.translate( - i, -s)
					}
					function G(t, e, n, o, i, s, r, a) {
						var c = [];
						c.push(["line", Math.round(i), Math.round(s)]),
						c.push(["line", Math.round(i + r), Math.round(s)]),
						c.push(["line", Math.round(i + r), Math.round(a + s)]),
						c.push(["line", Math.round(i), Math.round(a + s)]),
						N(t, c),
						t.save(),
						t.clip(),
						W(t, e, n, o),
						t.restore()
					}
					function Q(t, e, n) {
						m(t, e.left, e.top, e.width, e.height, n)
					}
					function V(t, e, n, o, i) {
						var s = d.Util.BackgroundSize(t, e, o, i),
						r = d.Util.BackgroundPosition(t, e, o, i, s),
						a = ue(t, "backgroundRepeat").split(",").map(function(t) {
							return t.trim()
						});
						switch (o = J(o, s), a = a[i] || a[0]) {
						case "repeat-x":
							G(n, o, r, e, e.left, e.top + r.top, 99999, o.height);
							break;
						case "repeat-y":
							G(n, o, r, e, e.left + r.left, e.top, o.width, 99999);
							break;
						case "no-repeat":
							G(n, o, r, e, e.left + r.left, e.top + r.top, o.width, o.height);
							break;
						default:
							W(n, o, r, {
								top: e.top,
								left: e.left,
								width: o.width,
								height: o.height
							})
						}
					}
					function X(t, e, n) {
						for (var i, s = ue(t, "backgroundImage"), r = d.Util.parseBackgroundImage(s), a = r.length; a--;) if (s = r[a], s.args && 0 !== s.args.length) {
							var c = "url" === s.method ? s.args[0] : s.value;
							i = C(c),
							i ? V(t, e, n, i, a) : o("html2canvas: Error loading background:", s)
						}
					}
					function J(t, e) {
						if (t.width === e.width && t.height === e.height) return t;
						var n, o = ae.createElement("canvas");
						return o.width = e.width,
						o.height = e.height,
						n = o.getContext("2d"),
						z(n, t, 0, 0, t.width, t.height, 0, 0, e.width, e.height),
						o
					}
					function K(t, e, n) {
						var o = ue(e, "opacity") * (n ? n.opacity: 1);
						return t.setVariable("globalAlpha", o),
						o
					}
					function Y(t, e, n) {
						var o = s(e ? n.width: c(), e ? n.height: l()),
						i = {
							ctx: o,
							zIndex: I(ue(t, "zIndex"), e ? e.zIndex: null),
							opacity: K(o, t, e),
							cssPosition: ue(t, "position"),
							borders: R(t),
							clip: e && e.clip ? d.Util.Extend({},
							e.clip) : null
						};
						return a.useOverflow === !0 && /(hidden|scroll|auto)/.test(ue(t, "overflow")) === !0 && /(BODY)/i.test(t.nodeName) === !1 && (i.clip = i.clip ? S(i.clip, n) : n),
						i.zIndex.children.push(i),
						i
					}
					function Z(t, e, n) {
						var o = {
							left: e.left + t[3].width,
							top: e.top + t[0].width,
							width: e.width - (t[1].width + t[3].width),
							height: e.height - (t[0].width + t[2].width)
						};
						return n && (o = S(o, n)),
						o
					}
					function te(t, e, n) {
						var i, s = d.Util.Bounds(t),
						r = de.test(t.nodeName) ? "#efefef": ue(t, "backgroundColor"),
						a = Y(t, e, s),
						c = a.borders,
						l = a.ctx,
						u = Z(c, s, a.clip),
						m = O(t, s, c);
						switch (N(l, m.clip), l.save(), l.clip(), u.height > 0 && u.width > 0 && (Q(l, s, r), X(t, u, l)), l.restore(), m.borders.forEach(function(t) {
							M(l, t.args, t.color)
						}), n || H(t, a), t.nodeName) {
						case "IMG":
							(i = C(t.getAttribute("src"))) ? D(l, t, i, s, c) : o("html2canvas: Error loading <img>:" + t.getAttribute("src"));
							break;
						case "INPUT":
							/^(text|url|email|submit|button|reset)$/.test(t.type) && (t.value || t.placeholder).length > 0 && P(t, s, a);
							break;
						case "TEXTAREA":
							(t.value || t.placeholder || "").length > 0 && P(t, s, a);
							break;
						case "SELECT":
							(t.options || t.placeholder || "").length > 0 && P(t, s, a);
							break;
						case "LI":
							k(t, a, u);
							break;
						case "CANVAS":
							D(l, t, t, s, c)
						}
						return a
					}
					function ee(t) {
						return "none" !== ue(t, "display") && "hidden" !== ue(t, "visibility") && !t.hasAttribute("data-html2canvas-ignore")
					}
					function ne(t, e, n) {
						ee(t) && (e = te(t, e, n) || e, de.test(t.nodeName) || d.Util.Children(t).forEach(function(o) {
							1 === o.nodeType ? ne(o, e, n) : 3 === o.nodeType && y(t, o, e)
						}))
					}
					function oe(t, e) {
						function n(t) {
							var e, o, i, s, a, c = d.Util.Children(t),
							l = c.length;
							for (a = 0; l > a; a += 1) if (s = c[a], 3 === s.nodeType) r += s.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
							else if (1 === s.nodeType && !/^(script|meta|title)$/.test(s.nodeName.toLowerCase())) {
								if (r += "<" + s.nodeName.toLowerCase(), s.hasAttributes()) for (e = s.attributes, i = e.length, o = 0; i > o; o += 1) r += " " + e[o].name + '="' + e[o].value + '"';
								r += ">",
								n(s),
								r += "</" + s.nodeName.toLowerCase() + ">"
							}
						}
						var o = new Image,
						i = c(),
						s = l(),
						r = "";
						n(t),
						o.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + i + "' height='" + s + "'>", "<foreignObject width='" + i + "' height='" + s + "'>", "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>", r.replace(/\#/g, "%23"), "</html>", "</foreignObject>", "</svg>"].join(""),
						o.onload = function() {
							e.svgRender = o
						}
					}
					function ie() {
						var t = te(se, null);
						return ce.svgRendering && oe(e.documentElement, t),
						Array.prototype.slice.call(se.children, 0).forEach(function(e) {
							ne(e, t)
						}),
						t.backgroundColor = ue(e.documentElement, "backgroundColor"),
						le.removeChild(pe),
						t
					}
					bds.se.ShortCut.scrollTop = t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop,
					t.scroll(0, 0);
					var se = a.elements === n ? e.body: a.elements[0],
					re = 0,
					ae = se.ownerDocument,
					ce = d.Util.Support(a, ae),
					de = new RegExp("(" + a.ignoreElements + ")"),
					le = ae.body,
					ue = d.Util.getCSS,
					me = "___html2canvas___pseudoelement",
					pe = ae.createElement("style");
					pe.innerHTML = "." + me + '-before:before { content: "" !important; display: none !important; }.' + me + '-after:after { content: "" !important; display: none !important; }',
					le.appendChild(pe),
					i = i || {};
					var fe = function(t) {
						return function(e, n, o, i) {
							var s = o * t,
							r = i * t,
							a = e + o,
							c = n + i;
							return {
								topLeft: L({
									x: e,
									y: c
								},
								{
									x: e,
									y: c - r
								},
								{
									x: a - s,
									y: n
								},
								{
									x: a,
									y: n
								}),
								topRight: L({
									x: e,
									y: n
								},
								{
									x: e + s,
									y: n
								},
								{
									x: a,
									y: c - r
								},
								{
									x: a,
									y: c
								}),
								bottomRight: L({
									x: a,
									y: n
								},
								{
									x: a,
									y: n + r
								},
								{
									x: e + s,
									y: c
								},
								{
									x: e,
									y: c
								}),
								bottomLeft: L({
									x: a,
									y: c
								},
								{
									x: a - s,
									y: c
								},
								{
									x: e,
									y: n + r
								},
								{
									x: e,
									y: n
								})
							}
						}
					} (4 * ((Math.sqrt(2) - 1) / 3));
					return ie()
				},
				d.Preload = function(i) {
					function s(t) {
						C.href = t,
						C.href = C.href;
						var e = C.protocol + C.host;
						return e === g
					}
					function r() {
						o("html2canvas: start: images: " + _.numLoaded + " / " + _.numTotal + " (failed: " + _.numFailed + ")"),
						!_.firstRun && _.numLoaded >= _.numTotal && (o("Finished loading images: # " + _.numTotal + " (failed: " + _.numFailed + ")"), "function" == typeof i.complete && i.complete(_))
					}
					function a(e, o, s) {
						var a, c, d = i.proxy;
						C.href = e,
						e = C.href,
						a = "html2canvas_" + y++,
						s.callbackname = a,
						d += d.indexOf("?") > -1 ? "&": "?",
						d += "url=" + encodeURIComponent(e) + "&callback=" + a,
						c = $.createElement("script"),
						t[a] = function(e) {
							"error:" === e.substring(0, 6) ? (s.succeeded = !1, _.numLoaded++, _.numFailed++, r()) : (h(o, s), o.src = e),
							t[a] = n;
							try {
								delete t[a]
							} catch(i) {}
							c.parentNode.removeChild(c),
							c = null,
							delete s.script,
							delete s.callbackname
						},
						c.setAttribute("type", "text/javascript"),
						c.setAttribute("src", d),
						s.script = c,
						t.document.body.appendChild(c)
					}
					function c(e, n) {
						var o = t.getComputedStyle(e, n),
						i = o.content;
						"url" === i.substr(0, 3) && b.loadImage(d.Util.parseBackgroundImage(i)[0].args[0]),
						p(o.backgroundImage, e)
					}
					function l(t) {
						c(t, ":before"),
						c(t, ":after")
					}
					function u(t, e) {
						var o = d.Generate.Gradient(t, e);
						o !== n && (_[t] = {
							img: o,
							succeeded: !0
						},
						_.numTotal++, _.numLoaded++, r())
					}
					function m(t) {
						return t && t.method && t.args && t.args.length > 0
					}
					function p(t, e) {
						var o;
						d.Util.parseBackgroundImage(t).filter(m).forEach(function(t) {
							"url" === t.method ? b.loadImage(t.args[0]) : t.method.match(/\-?gradient$/) && (o === n && (o = d.Util.Bounds(e)), u(t.value, o))
						})
					}
					function f(t) {
						var e = !1;
						try {
							d.Util.Children(t).forEach(function(t) {
								f(t)
							})
						} catch(i) {}
						try {
							e = t.nodeType
						} catch(s) {
							e = !1,
							o("html2canvas: failed to access some element's nodeType - Exception: " + s.message)
						}
						if (1 === e || e === n) {
							l(t);
							try {
								p(d.Util.getCSS(t, "backgroundImage"), t)
							} catch(i) {
								o("html2canvas: failed to get background-image - Exception: " + i.message)
							}
							p(t)
						}
					}
					function h(e, o) {
						e.onload = function() {
							o.timer !== n && t.clearTimeout(o.timer),
							_.numLoaded++,
							o.succeeded = !0,
							e.onerror = e.onload = null,
							r()
						},
						e.onerror = function() {
							if ("anonymous" === e.crossOrigin && (t.clearTimeout(o.timer), i.proxy)) {
								var n = e.src;
								return e = new Image,
								o.img = e,
								e.src = n,
								void a(e.src, e, o)
							}
							_.numLoaded++,
							_.numFailed++,
							o.succeeded = !1,
							e.onerror = e.onload = null,
							r()
						}
					}
					var g, b, v, w, _ = {
						numLoaded: 0,
						numFailed: 0,
						numTotal: 0,
						cleanupDone: !1
					},
					y = 0,
					x = i.elements[0] || e.body,
					$ = x.ownerDocument,
					T = $.images,
					k = T.length,
					C = $.createElement("a"),
					S = function(t) {
						return t.crossOrigin !== n
					} (new Image);
					for (C.href = t.location.href, g = C.protocol + C.host, b = {
						loadImage: function(e) {
							var o, r;
							e && _[e] === n && (o = new Image, e.match(/data:image\/.*;base64,/i) ? (o.src = e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), r = _[e] = {
								img: o
							},
							_.numTotal++, h(o, r)) : s(e) || i.allowTaint === !0 ? (r = _[e] = {
								img: o
							},
							_.numTotal++, h(o, r), o.src = e) : S && !i.allowTaint && i.useCORS ? (o.crossOrigin = "anonymous", r = _[e] = {
								img: o
							},
							_.numTotal++, h(o, r), o.src = e, o.customComplete = function() {
								this.img.complete ? this.img.onerror() : this.timer = t.setTimeout(this.img.customComplete, 100)
							}.bind(r), o.customComplete()) : i.proxy && (r = _[e] = {
								img: o
							},
							_.numTotal++, a(e, o, r)))
						},
						cleanupDOM: function(s) {
							var a, c;
							if (!_.cleanupDone) {
								o(s && "string" == typeof s ? "html2canvas: Cleanup because: " + s: "html2canvas: Cleanup after timeout: " + i.timeout + " ms.");
								for (c in _) if (_.hasOwnProperty(c) && (a = _[c], "object" == typeof a && a.callbackname && a.succeeded === n)) {
									t[a.callbackname] = n;
									try {
										delete t[a.callbackname]
									} catch(d) {}
									a.script && a.script.parentNode && (a.script.setAttribute("src", "about:blank"), a.script.parentNode.removeChild(a.script)),
									_.numLoaded++,
									_.numFailed++,
									o("html2canvas: Cleaned up failed img: '" + c + "' Steps: " + _.numLoaded + " / " + _.numTotal)
								}
								t.stop !== n ? t.stop() : e.execCommand !== n && e.execCommand("Stop", !1),
								e.close !== n && e.close(),
								_.cleanupDone = !0,
								s && "string" == typeof s || r()
							}
						},
						renderingDone: function() {
							w && t.clearTimeout(w)
						}
					},
					i.timeout > 0 && (w = t.setTimeout(b.cleanupDOM, i.timeout)), o("html2canvas: Preload starts: finding background-images"), _.firstRun = !0, f(x), o("html2canvas: Preload: Finding images"), v = 0; k > v; v += 1) b.loadImage(T[v].getAttribute("src"));
					return _.firstRun = !1,
					o("html2canvas: Preload: Done."),
					_.numTotal === _.numLoaded && r(),
					b
				},
				d.Renderer = function(t, o) {
					function i(t) {
						var e = [],
						n = function(t) {
							var o = [],
							i = [];
							t.children.forEach(function(t) {
								t.children && t.children.length > 0 ? (o.push(t), i.push(t.zindex)) : e.push(t)
							}),
							i.sort(function(t, e) {
								return t - e
							}),
							i.forEach(function(t) {
								var e;
								o.some(function(n, o) {
									return e = o,
									n.zindex === t
								}),
								n(o.splice(e, 1)[0])
							})
						};
						return t && t.zIndex && n(t.zIndex),
						e
					}
					function s(t) {
						var e;
						if ("string" == typeof o.renderer && d.Renderer[t] !== n) e = d.Renderer[t](o);
						else {
							if ("function" != typeof t) throw new Error("Unknown renderer");
							e = t(o)
						}
						if ("function" != typeof e) throw new Error("Invalid renderer defined");
						return e
					}
					return s(o.renderer)(t, o, e, i(t), d)
				},
				d.Util.Support = function(t, e) {
					function i() {
						var t = new Image,
						i = e.createElement("canvas"),
						s = i.getContext === n ? !1 : i.getContext("2d");
						if (s === !1) return ! 1;
						i.width = i.height = 10,
						t.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
						try {
							s.drawImage(t, 0, 0),
							i.toDataURL()
						} catch(r) {
							return ! 1
						}
						return o("html2canvas: Parse: SVG powered rendering available"),
						!0
					}
					function s() {
						var t, n, o, i, s = !1;
						return e.createRange && (t = e.createRange(), t.getBoundingClientRect && (n = e.createElement("boundtest"), n.style.height = "123px", n.style.display = "block", e.body.appendChild(n), t.selectNode(n), o = t.getBoundingClientRect(), i = o.height, 123 === i && (s = !0), e.body.removeChild(n))),
						s
					}
					return {
						rangeBounds: s(),
						svgRendering: t.svgRendering && i()
					}
				},
				t.html2canvas = function(e, n) {
					e = e.length ? e: [e];
					var i, s, r = {
						logging: !1,
						elements: e,
						background: "#fff",
						proxy: null,
						timeout: 0,
						useCORS: !1,
						allowTaint: !1,
						svgRendering: !1,
						ignoreElements: "IFRAME|OBJECT|PARAM",
						useOverflow: !0,
						letterRendering: !1,
						chinese: !1,
						width: null,
						height: null,
						taintTest: !0,
						renderer: "Canvas"
					};
					return r = d.Util.Extend(n, r),
					d.logging = r.logging,
					r.complete = function(t) { ("function" != typeof r.onpreloaded || r.onpreloaded(t) !== !1) && (i = d.Parse(t, r), ("function" != typeof r.onparsed || r.onparsed(i) !== !1) && (s = d.Renderer(i, r), "function" == typeof r.onrendered && r.onrendered(s)))
					},
					t.setTimeout(function() {
						d.Preload(r)
					},
					0),
					{
						render: function(t, e) {
							return d.Renderer(t, d.Util.Extend(e, r))
						},
						parse: function(t, e) {
							return d.Parse(t, d.Util.Extend(e, r))
						},
						preload: function(t) {
							return d.Preload(d.Util.Extend(t, r))
						},
						log: o
					}
				},
				t.html2canvas.log = o,
				t.html2canvas.Renderer = {
					Canvas: n
				},
				d.Renderer.Canvas = function(t) {
					function i(t, e) {
						t.beginPath(),
						e.forEach(function(e) {
							t[e.name].apply(t, e.arguments)
						}),
						t.closePath()
					}
					function s(t) {
						if ( - 1 === d.indexOf(t.arguments[0].src)) {
							u.drawImage(t.arguments[0], 0, 0);
							try {
								u.getImageData(0, 0, 1, 1)
							} catch(e) {
								return l = c.createElement("canvas"),
								u = l.getContext("2d"),
								!1
							}
							d.push(t.arguments[0].src)
						}
						return ! 0
					}
					function r(t) {
						return "transparent" === t || "rgba(0, 0, 0, 0)" === t
					}
					function a(e, n) {
						switch (n.type) {
						case "variable":
							e[n.name] = n.arguments;
							break;
						case "function":
							if ("createPattern" === n.name) {
								if (n.arguments[0].width > 0 && n.arguments[0].height > 0) try {
									e.fillStyle = e.createPattern(n.arguments[0], "repeat")
								} catch(r) {
									o("html2canvas: Renderer: Error creating pattern", r.message)
								}
							} else "drawShape" === n.name ? i(e, n.arguments) : "drawImage" === n.name ? n.arguments[8] > 0 && n.arguments[7] > 0 && (!t.taintTest || t.taintTest && s(n)) && e.drawImage.apply(e, n.arguments) : e[n.name].apply(e, n.arguments)
						}
					}
					t = t || {};
					var c = e,
					d = [],
					l = e.createElement("canvas"),
					u = l.getContext("2d"),
					m = t.canvas || c.createElement("canvas");
					return function(t, e, i, s, c) {
						var d, l, u, p, f, h, g = m.getContext("2d");
						if (m.width = m.style.width = e.width || t.ctx.width, m.height = m.style.height = e.height || t.ctx.height, h = g.fillStyle, g.fillStyle = r(t.backgroundColor) && e.background !== n ? e.background: t.backgroundColor, g.fillRect(0, 0, m.width, m.height), g.fillStyle = h, e.svgRendering && t.svgRender !== n) g.drawImage(t.svgRender, 0, 0);
						else for (l = 0, u = s.length; u > l; l += 1) d = s.splice(0, 1)[0],
						d.canvasPosition = d.canvasPosition || {},
						g.textBaseline = "bottom",
						d.clip && (g.save(), g.beginPath(), g.rect(d.clip.left, d.clip.top, d.clip.width, d.clip.height), g.clip()),
						d.ctx.storage && d.ctx.storage.forEach(a.bind(null, g)),
						d.clip && g.restore();
						return o("html2canvas: Renderer: Canvas renderer done - returning canvas obj"),
						u = e.elements.length,
						1 === u && "object" == typeof e.elements[0] && "BODY" !== e.elements[0].nodeName ? (f = c.Util.Bounds(e.elements[0]), p = i.createElement("canvas"), p.width = f.width, p.height = f.height, g = p.getContext("2d"), g.drawImage(m, f.left, f.top, f.width, f.height, 0, 0, f.width, f.height), m = null, p) : m
					}
				}
			} (window, document)
		}
	})
} (),
$(window).on("swap_begin",
function() {
	bds && bds.se && void 0 !== bds.se.displayTime && null !== bds.se.displayTime && (clearTimeout(bds.se.displayTime), bds.se.displayTime = null)
}).on("confirm",
function() {
	bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
		bds && bds.se && bds.se.display(),
		bds.se.displayTime = null
	},
	5e3))),
	bds && bds.se.userAction.collect()
}).on("swap_end",
function(t, e) { ! e && bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
		bds && bds.se && bds.se.display(),
		bds.se.displayTime = null
	},
	5e3))),
	!e && bds && bds.se.userAction.collect(),
	bds.log.send.sendNow("flow_monitor", {},
	{
		qid: bds.comm.qid,
		log: {},
		len: 1
	})
}),
$(window).on("swap_end",
function() {
	bds.comm.__rdNum && bds.comm.__rdNum > 9e3 && setTimeout(function() {
		$.ajax({
			dataType: "script",
			cache: !0,
			url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/clean_7973b0f.js",
			success: function() {
				bds.se.cleanCookie.init()
			}
		})
	},
	0)
}),
!
function() {
	var t = navigator.userAgent,
	e = t.match(/MSIE\s*(\d+)/),
	n = e && e[1] && +e[1] <= 9;
	n || require(["plugins/swfobject", "soutu/js/tu"],
	function(t, e) {
		if (/^\/imgsearch/.test(location.pathname)) {
			var n = $("#content_left").find(".result-op"),
			o = [];
			n.each(function() {
				var t = $(this),
				e = t.attr("tpl");
				"tu_relate_site" === e && (e += "@" + t.find(".op-tu-relate-site-result").length),
				o.push(e)
			}),
			e.log({
				rsv_imageshow: o.join(":")
			}),
			$("#page").hide(),
			$("#wrapper").outerHeight() < $(document).outerHeight() && $("#foot").addClass("foot_fixed_bottom")
		}
	})
} (),
!
function() {
	function t(t) {
		var e = ["voice_beha=1"],
		n = window.bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
		for (var o in t) t.hasOwnProperty(o) && e.push(o + "=" + t[o]);
		var i = window["nsIMG" + +new Date] = new Image;
		return i.src = n + "/v.gif?pid=201&" + e.join("&"),
		!0
	} (location.href.match(/voice=1/) || navigator.userAgent.match(/mac os x/i)) && require(["plugins/swfobject", "voice/js/voice"],
	function(e, n) {
		if (n.log = t, n && n.support()) {
			n.addStyle(),
			window.__supportvoice = !0;
			var o = $("#form .ipt_rec");
			o.css("display", "block"),
			o.click(function() {
				var t = n.init({
					url: bds.util.domain.get("http://vse.baidu.com") + "/echo.fcgi"
				});
				t.done(function(t) {
					t.openUI(),
					t.onfinish(function(t) {
						var e = t.content.item[0],
						n = t && t.result ? t.result.corpus_no: "";
						changeUrl("wd=" + encodeURIComponent(e) + "&rsv_voice=1&hsug_mtype=2&rsv_vcorpus=" + encodeURIComponent(n)),
						bds.comm.lastVoiceQuery = e
					}),
					n.log({
						q: "resolve"
					})
				}).fail(function() {
					n.log({
						q: "reject"
					}),
					alert("涓嶈兘鑾峰緱楹﹀厠椋庣殑鏉冮檺")
				}),
				n.log({
					q: "start"
				})
			})
		}
	})
} ();