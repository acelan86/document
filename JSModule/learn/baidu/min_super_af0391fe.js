F.module("common/result_page",
function(c, b, a) {
	b.createResulPageLink = function(d) {
		if (!d || !d.wd) {
			return ""
		}
		if (!d.tn) {
			d.tn = "baidutop10"
		}
		return "//www.baidu.com/s?wd=" + encodeURIComponent(d.wd) + "&ie=utf-8&tn=" + d.tn + "&rsv_idx=2"
	}
});
F.module("superman:common/image_lazy_load",
function(c, f, m) {
	var e = m.base;
	var l = 0;
	var k = 0;
	var h = [];
	var d = false;
	f.isVisible = function(r, t) {
		if (!j(r)) {
			return false
		}
		var E = t ? 0 : 60;
		var w = t ? 0 : 60;
		var B = {};
		try {
			B = $(r).offset()
		} catch(C) {
			B = {
				left: 0,
				top: 0
			}
		}
		var p = $(document).scrollTop();
		var y = $(document).scrollLeft();
		var x = $(window).width();
		var v = $(window).height();
		var A = B.left - E,
		q = B.top - w,
		z = B.left + r.offsetWidth + E,
		o = B.top + r.offsetHeight + w,
		s = y,
		D = p,
		n = y + x,
		u = p + v;
		return A <= n && q <= u && z >= s && o >= D
	};
	var b = function(n) {
		if ($(n).attr("data-loaded") == "1") {
			return true
		}
		return false
	};
	var a = function(o) {
		var n = function() {
			if (h.length === 0) {
				window.clearInterval(l);
				d = false;
				return
			}
			for (var p = 0; p < h.length; p++) {
				var r = h[p];
				if (!b(r) && f.isVisible(r)) {
					if ($(r).attr("data-loadfunc") != "1") {
						$(r).attr("data-loadfunc", "1");
						$(r).bind("load",
						function(t) {
							var v = this;
							$(this).attr("data-loaded", 1);
							for (var s = 0; s < h.length; s++) {
								var u = h[s];
								if (v === u) {
									h.splice(s, 1)
								}
							}
						})
					}
					var q = $(r).attr("data-src") + "";
					if (q.indexOf("http") > -1 || q.indexOf("https") > -1) {
						$(r).attr("src", q);
						r.removeAttribute("data-src")
					}
				}
			}
		};
		if (o) {
			n();
			return
		}
		if (!d) {
			d = true;
			l = window.setInterval(function() {
				n()
			},
			300)
		}
	};
	f.scanAndDoRender = function(o, q) {
		var n = false;
		if (!o) {
			o = document.body;
			n = true
		}
		var p = [];
		$.each(o.getElementsByTagName("img"),
		function(r, s) {
			if ($(s).attr("data-src") && !b(s)) {
				p.push(s)
			}
		});
		if (n) {
			h = p
		} else {
			h = h.concat(p)
		}
		a(q)
	};
	var g = function() {
		$.each(["resize", "scroll", "load", "cardrender"],
		function(n, o) {
			$(window).bind(o,
			function(p) {
				if (s_session.index_off == true) {
					return
				}
				if (k) {
					window.clearTimeout(k)
				}
				k = window.setTimeout(function() {
					k = 0;
					f.scanAndDoRender()
				},
				20);
				p.stopPropagation()
			})
		})
	};
	function j(n) {
		var o = n.getBoundingClientRect();
		return !! (o.bottom - o.top)
	}
	f.init = function() {
		f.scanAndDoRender(null, true);
		g()
	}
});
F.addLog("superman:skeleton", {});
F.addLog("mancard:skeleton", {
	modShow: "1100000000",
	modClick: "1100000001",
	loadMoreClick: "1100000005",
	categoryClick: "1200100001",
	gotoTopClick: "1100000006",
	qrcodehover: "1100000007"
});
F.addLog("superman:guide", {
	xguideShow: "1000000000",
	xguide: "1000000001",
	xmanGuideShow: "1100100000",
	xmanGuideClick: "1100200001",
	tripEntranceClick: "1100300001",
	tutorialClick: "1100400001",
	zeroOpacityClick: "1100500001",
	wenjuanClick: "1100700002"
});
F.addLog("mancard:setting", {
	modOperate: "0900100001",
	webOperate: "0900200001",
	modConfirmOperate: "0900300001"
});
F.addLog("superman:weather", {
	weatherShow: "5000000000",
	settingShow: "5000100000",
	settingClick: "5000100001",
	settingOperate: "5000100002",
	layerOperate: "5000000002"
});
F.addLog("superman:mt", {
	msgShow: "0400000000",
	msgItemClick: "0400100001",
	msgItemDelClick: "0400400001",
	msgBtnClick: "0400500001",
	msgHide: "0400600002",
	msgItemShow: "0400700000"
});
F.addLog("superman:ps", {
	categoryClick: "1200100001",
	queryChange: "1200200001",
	searchBtnClick: "1200200001",
	psLogoClick: "1200300001",
	psWorkLnkClick: "1200400001",
	stayLog: "1200400002"
});
F.addLog("superman:mngr", {
	userQuitClick: "1200100002",
	treasureClick: "1300000000"
});
F.addLog("superman:skin", {
	skinShow: "5100000000",
	skinClick: "5100000001",
	skinHover: "5100000002",
	skinOperate: "5100000003",
	skinInfo: "5100000004"
});
F.addLog("superman:skeleton", {
	tabTimeClick: "7000000000",
	tabTimeClickInBucket: "7000100000"
});
F.addLog("superui:component", {
	skinClick: "5100000001"
});
F.addLog("superman:lib/xpath_log", ["xpathLog"]);
F.module("superman:lib/xpath_log",
function(b, c, j) {
	var a = ["s_ctner_contents"];
	var d = function(n, l, o) {
		o = o || [];
		l = l || document;
		if (n === l) {
			o.push(undefined);
			return o
		}
		if (n.getAttribute("data-logactid")) {
			o.push(n.getAttribute("data-logactid"));
			return o
		}
		if (n.parentNode !== l) {
			o = d(n.parentNode, l, o)
		} else {
			o.push(undefined)
		}
		if (n.previousSibling) {
			var m = 1;
			var k = n.previousSibling;
			do {
				if (k.nodeType == 1 && k.nodeName == n.nodeName) {
					m++
				}
				k = k.previousSibling
			} while ( k )
		}
		if (n.nodeType == 1) {
			o.push(n.nodeName.toLowerCase() + (m > 1 ? m: ""))
		}
		return o
	};
	var h = function(k) {
		return k.replace(/a(\d*)-(.+)$/g, "a$1")
	};
	var e = {};
	var f = function(l, m, k, n) {
		e[k] && clearTimeout(e[k]);
		e[k] = setTimeout(function() {
			if (m[0] == undefined) {
				return
			}
			var t = {
				logactid: m.shift(0).replace(/_/g, "-"),
				xlogtype: k,
				xnodename: l.nodeName.toLowerCase(),
				xpath: h(m.join("-")),
				xpaths: h(m.join("-").replace(/\d/g, "")),
				strategyHit: s_session.strategy_hit,
				xx: n.xx,
				xy: n.xy
			};
			var q = $(l).data("log"),
			r = [];
			if (q) {
				r = q.split(";")
			}
			for (var p = 0; p < r.length - 1; p++) {
				var o = r[p].split(":");
				t["xcust" + o[0]] = o[1]
			}
			for (var p = 0; p < m.length; p++) {
				t["xindex" + p] = m[p].replace(/[A-Za-z]/g, ""); (t["xindex" + p] == "") && (t["xindex" + p] = "1")
			}
			var s = 3,
			v = l;
			while (s > 0 && v && v.nodeName && v.nodeName.toLowerCase() != "a" && v.nodeType == 1) {
				v = v.parentNode;
				s--
			}
			if (v && v.nodeName && v.nodeName.toLowerCase() == "a") {
				t.title = $.trim($(v).text()) || $.trim($(v).attr("title"));
				var u = $.trim($(v).attr("href"));
				if (!u.indexOf("#") == 0 && !u.indexOf("javascript") == 0) {
					t.url = u
				}
			}
			j.fire("xpathLog", t)
		},
		300)
	};
	var g = function(k) {
		$("#" + k).on("mousedown",
		function(n) {
			if (s_session.curmod != "21") {
				return
			}
			var m = n.target,
			l = (d(m, $("#" + k)[0]));
			f(m, l, "click", {
				xx: n.pageX - $(this).offset().left,
				xy: n.pageY - $(this).offset().top
			})
		})
	};
	c.init = function() {
		$.each(a,
		function(k, l) {
			g(l)
		})
	}
});
F.addLog("superman:lib/carditem_log", ["cardItemLog"]);
F.module("superman:lib/carditem_log",
function(c, e, k) {
	var h = window.Thunder.get();
	var f = "page-card-tpl-item";
	var a = ["s_ctner_contents"];
	var g = {};
	var d = function(m, l, n) {
		g[l] && clearTimeout(g[l]);
		g[l] = setTimeout(function() {
			if (m.rid != undefined) {
				k.fire("cardItemLog", m);
				if (n && m.func !== "dustbin" && +s_session.curmod === 2) {
					h.send(n)
				}
			}
		},
		300)
	};
	var b = function(w) {
		var y = $(w),
		A = false,
		u = "",
		l = "",
		p = "",
		C = "",
		o = "",
		m = false;
		extra = "";
		while (y.attr("data-rid") == undefined && y.attr("id") != "s_ctner_contents") {
			if (y.attr("data-click") != undefined) {
				m = true;
				u = y.attr("data-click").toLowerCase();
				l = w.nodeName.toLowerCase();
				if (u == "log_link") {
					if (y[0] && y[0].nodeName && y[0].nodeName.toLowerCase() == "a") {
						C = $.trim(y.attr("data-title")) || $.trim(y.attr("title")) || $.trim(y.text());
						var r = $.trim(y.attr("href"));
						if (!r.indexOf("#") == 0 && !r.indexOf("javascript") == 0) {
							o = r
						}
					}
					if (l != "img") {
						l = "a"
					}
					u = "outlink"
				} else {
					if (u.indexOf("log_btn") != 1) {
						p = u.replace("log_btn_", "");
						u = "btn";
						o = "";
						C = $.trim(y.attr("data-title")) || $.trim(y.attr("title")) || $.trim(y.text())
					}
				}
			}
			y = y.parent();
			if (y.attr("data-extra")) {
				extra = y.attr("data-extra")
			}
		}
		var t = {
			logactid: f,
			logtype: "click",
			clicktype: u,
			nodename: l,
			func: p,
			title: C,
			url: o,
			strategyHit: s_session.strategy_hit,
			xx: $(w).offset().left,
			xy: $(w).offset().top,
			extra: extra
		};
		t.rid = m ? y.attr("data-rid") : undefined;
		var n = {
			cst: 2,
			tid: 30,
			logExtra: {
				rid: m ? y.attr("data-rid") : undefined,
				url: m ? y.attr("data-url") : undefined,
				clicktype: u,
				title: C,
				flow: 2,
				extra: extra
			}
		};
		var x = y.attr("data-log"),
		q = [];
		if (x) {
			x = x.replace(/\;$/g, "");
			q = x.split(";");
			var s = [];
			var B = "";
			var v = "";
			for (var z = 0; z < q.length; z++) {
				s = q[z].split(":");
				B = s[0];
				v = s[1];
				n.logExtra[B] = v;
				if (!/-1$/g.test(B)) {
					if (/-0$/g.test(B)) {
						B = B.replace(/-0$/g, "")
					}
					t[B] = v
				}
			}
		}
		n.logExtra = $.stringify(n.logExtra);
		d(t, "click", n)
	};
	var j = function(l) {
		$("#" + l).on("mousedown",
		function(n) {
			var m = n.target;
			b(m)
		})
	};
	e.init = function() {
		$.each(a,
		function(l, m) {
			j(m)
		})
	}
});
F.module("ps/log",
function(b, e, j) {
	var d = j.base;
	var f = {
		"旧版": "tjold",
		"搜索设置": "tjsetting",
		"使用百度前必读": "tjread",
		"帐号设置": "tjuser",
		"我的相册": "tjxiangce",
		"首页设置": "tjmsgsetting",
		"个人中心": "tjsupper",
		"登录": "tjlogin",
		"退出": "tjlogout",
		"新闻": "tjnews",
		"贴吧": "tjtieba",
		"知道": "tjzhidao",
		"音乐": "tjmp3",
		"图片": "tjimg",
		"视频": "tjvideo",
		"文库": "tjwenku",
		"地图": "tjmap",
		"空间": "tjhi",
		"百科": "tjbaike",
		hao123: "tjhao123",
		"更多>>": "tjmore",
		"我的主页": "tjgongzhu",
		"我的成就": "tjchengjiu",
		"加入百度推广": "tjadjoin",
		"搜索风云榜": "tjadtop",
		"关于百度": "tjadaboutch",
		AboutBaidu: "tjadabouten",
		"加入开放首页": "tjadopen",
		"个人中心": "tjucent",
		"我的收藏": "tjucentcol",
		"我的日历": "tjucentcal",
		"搜索记录": "tjucenthis",
		"完整版": "tjtoxman",
		"极简版": "tjtolite",
		"设为首页": "setpage"
	};
	var g = function(o) {
		var n = o.srcElement ? o.srcElement: o.target;
		var m = n.tagName;
		if (n.tagName == "A") {
			var k = a(n);
			var l = n.href;
			if (k in f) {
				j.fire("categoryClick", {
					category: f[k],
					url: l
				})
			} else {
				if (k == s_session.username) {
					j.fire("categoryClick", {
						category: "username"
					})
				}
			}
		}
		return false
	};
	var a = function(k) {
		return $(k).text().replace(/[\s\t\xa0\u3000]/g, "")
	};
	function c(k) {
		$("#" + k).bind("mousedown", g)
	}
	function h(l, k) {
		var m = {
			category: l
		};
		if (k) {
			$.extend(m, k)
		}
		j.fire("categoryClick", m)
	}
	e.bindBox = c;
	e.fireLog = h;
	e.keyMap = f
});
F.addLog("superman:ps/sindex", {
	hwInput: "1100000900"
});
F.module("superman:ps/sindex",
function(f, d, b) {
	var g = b.base;
	d.init = function() {
		var x = window,
		v = document,
		m = navigator,
		r = $("#kw"),
		o = m.userAgent.indexOf("MSIE") != -1 && !window.opera;
		s_session.searchLogSend = 0;
		$("#su").on("mouseout",
		function() {
			$(this).removeClass("btn_h")
		}).on("mousedown",
		function() {
			$(this).addClass("btn_h")
		});
		var u = document.getElementById("kw");
		$(u.parentNode).addClass("bg s_ipt_wr iptfocus");
		$(window).on("swap_end",
		function() {
			if (s_session.searchLogSend == 0) {
				s_session.searchLogSend = 1;
				b.fire("searchBtnClick", {
					opType: "click",
					openMode: "current",
					wd: encodeURIComponent($("#kw").val())
				})
			}
		});
		$(window).on("s-skinon",
		function() {
			$('<style id="s_skin_bdpfmenu">.bdpfmenu{border:0 none !important;}.bdpfmenu a{line-height:24px !important;border:1px solid #fff !important;}</style>').appendTo($("head"))
		}).on("s-skinoff",
		function() {
			$("#s_skin_bdpfmenu").remove()
		});
		function z(k) {
			return v.getElementById(k)
		}
		if (typeof window._sp_async == "undefined") {
			$(window).bind("load",
			function() {
				if (m.cookieEnabled && /\bbdime=[12]/.test(v.cookie)) {
					s(b.domain.staticUrl + "static/superman/js/ps/openime_57a320a5.js", "utf-8")
				}
			})
		}
		var p = c(r);
		if (x.s_session.userIsNewSkined == "off") {
			p(r)
		}
		b.listen("superman:skin/skin_rewrite", "skin_change",
		function(k) {
			p(r, true)
		});
		try {
			if (typeof window._sp_async == "undefined") {
				z("kw") && z("kw").focus()
			} else {
				if (pageState == 0) {
					z("kw") && z("kw").focus()
				}
			}
		} catch(t) {}
		$("#s_username_top").bind("mouseover",
		function() {
			F.use("ps/log",
			function(k) {
				k.fireLog("tj_ucent_mouseover")
			})
		});
		var A = [false, false];
		var y = false;
		function l(D, H, C, E, n) {
			var w = $("#" + D),
			k = $("#" + C),
			B = $("#" + H);
			w.bind("mouseenter",
			function(J) {
				A[n] = true;
				B.show();
				var I = E == "right" ? ($(document.body).width() - B[0].offsetWidth / 2 - k.offset().left - k.width() / 2) : ($(document.body).width() - B[0].offsetWidth / 2 - k.offset().left - k.width() / 2);
				B.css({
					right: I
				})
			}).bind("mouseleave",
			function(I) {
				A[n] = false;
				x.setTimeout(function() {
					if (!A[n]) {
						B.hide();
						b.fire("userMenuHide")
					}
				},
				200)
			})
		}
		l("s_username_top", "s_user_name_menu", "s_username_top", "left", 1);
		l("s_user_name_menu", "s_user_name_menu", "s_username_top", "left", 1);
		if (!window._sp_async) {
			l("s_usersetting_top", "s_user_setting_menu", "s_usersetting_top", "right", 2);
			l("s_user_setting_menu", "s_user_setting_menu", "s_usersetting_top", "right", 2)
		}
		function s(k, w) {
			if (k) {
				var n = v.createElement("script");
				n.charset = w ? w: "gbk";
				n.src = k;
				v.getElementsByTagName("head")[0].appendChild(n)
			}
		}
		addEV(x, "load",
		function() {
			try {
				z("kw").focus()
			} catch(k) {}
		});
		x.onunload = function() {};
		var j = z("s_mp");
		var h;
		if (j) {
			h = j.getElementsByTagName("area")[0]
		}
		var q = z("lm") && z("lm").getElementsByTagName("a")[0];
		h && $(h).bind("click",
		function(k) {
			b.fire("psLogoClick", {
				isFesBg: (s_session.userTips.skinLogoHasSkined ? "true": "false")
			})
		});
		q && $(q).bind("click",
		function(k) {
			b.fire("psWorkLnkClick")
		})
	};
	d.fire = function() {
		b.fire("hwInput", {
			clickType: "handWriteInput"
		})
	};
	function e() {
		var j = 0;
		var h = setInterval(function() {
			if (window.s_session.index_off) {
				clearInterval(h);
				return
			}
			b.fire("stayLog", {
				times: 10
			})
		},
		10000)
	}
	var a = function() {
		$("#s_pss_guide").css("width", (document.body.clientWidth <= 958) ? "958px": "100%")
	};
	function c(l) {
		function h() {
			$(this).addClass("nobg_s_fm_focus")
		}
		function k() {
			$(this).removeClass("nobg_s_fm_focus")
		}
		function m() {
			$(this).addClass("nobg_s_fm_hover")
		}
		function o() {
			$(this).removeClass("nobg_s_fm_hover")
		}
		function n() {
			$(this).parent().addClass("s_btn_wr_h")
		}
		function j() {
			$(this).parent().removeClass("s_btn_wr_h")
		}
		return function(p, q) {
			if (!q) {
				p.on("focus", h).on("blur", k).on("mouseover", m).on("mouseout", o);
				$("#su").on("mousedown", n).on("mouseout", j)
			} else {
				p.unbind("focus", h).unbind("blur", k).unbind("mouseover", m).unbind("mouseout", o);
				$("#su").unbind("mousedown", n).unbind("mouseout", j)
			}
		}
	}
});
var isIE = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
function G(a) {
	return document.getElementById(a)
}
function addEV(c, b, a) {
	if (window.attachEvent) {
		c.attachEvent("on" + b, a)
	} else {
		if (window.addEventListener) {
			c.addEventListener(b, a, false)
		}
	}
}
var bds = bds || {};
bds.se = bds.se || {};
bds.se.store = (function() {
	var r = {},
	v = window,
	s = v.document,
	z = "localStorage",
	e = "globalStorage",
	y = "__storejs__",
	w;
	r.disabled = false;
	r.set = function(b, a) {};
	r.get = function(a) {};
	r.remove = function(a) {};
	r.clear = function() {};
	r.transact = function(d, a, c) {
		var b = r.get(d);
		if (c == null) {
			c = a;
			a = null
		}
		if (typeof b == "undefined") {
			b = a || {}
		}
		c(b);
		r.set(d, b)
	};
	r.getAll = function() {};
	r.serialize = function(a) {
		return String(a)
	};
	r.deserialize = function(a) {
		if (typeof a != "string") {
			return undefined
		}
		return a
	};
	function A() {
		try {
			return (z in v && v[z])
		} catch(a) {
			return false
		}
	}
	function p() {
		try {
			return (e in v && v[e] && v[e][v.location.hostname])
		} catch(a) {
			return false
		}
	}
	if (A()) {
		w = v[z];
		r.set = function(b, a) {
			if (a === undefined) {
				return r.remove(b)
			}
			w.setItem(b, r.serialize(a))
		};
		r.get = function(a) {
			return r.deserialize(w.getItem(a))
		};
		r.remove = function(a) {
			w.removeItem(a)
		};
		r.clear = function() {
			w.clear()
		};
		r.getAll = function() {
			var c = {};
			for (var a = 0; a < w.length; ++a) {
				var b = w.key(a);
				c[b] = r.get(b)
			}
			return c
		}
	} else {
		if (p()) {
			w = v[e][v.location.hostname];
			r.set = function(b, a) {
				if (a === undefined) {
					return r.remove(b)
				}
				w[b] = r.serialize(a)
			};
			r.get = function(a) {
				return r.deserialize(w[a] && w[a].value)
			};
			r.remove = function(a) {
				delete w[a]
			};
			r.clear = function() {
				for (var a in w) {
					delete w[a]
				}
			};
			r.getAll = function() {
				var c = {};
				for (var a = 0; a < w.length; ++a) {
					var b = w.key(a);
					c[b] = r.get(b)
				}
				return c
			}
		} else {
			if (s.documentElement.addBehavior) {
				var t, x;
				try {
					x = new ActiveXObject("htmlfile");
					x.open();
					x.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');
					x.close();
					t = x.w.frames[0].document;
					w = t.createElement("div")
				} catch(u) {
					w = s.createElement("div");
					t = s.body
				}
				function B(a) {
					return function() {
						var b = Array.prototype.slice.call(arguments, 0);
						b.unshift(w);
						t.appendChild(w);
						w.addBehavior("#default#userData");
						w.load(z);
						var c = a.apply(r, b);
						t.removeChild(w);
						return c
					}
				}
				function q(a) {
					return "_" + a
				}
				r.set = B(function(a, c, b) {
					c = q(c);
					if (b === undefined) {
						return r.remove(c)
					}
					a.setAttribute(c, r.serialize(b));
					a.save(z)
				});
				r.get = B(function(b, a) {
					a = q(a);
					return r.deserialize(b.getAttribute(a))
				});
				r.remove = B(function(b, a) {
					a = q(a);
					b.removeAttribute(a);
					b.save(z)
				});
				r.clear = B(function(a) {
					var d = a.XMLDocument.documentElement.attributes;
					a.load(z);
					for (var b = 0,
					c; c = d[b]; b++) {
						a.removeAttribute(c.name)
					}
					a.save(z)
				});
				r.getAll = B(function(a) {
					var f = a.XMLDocument.documentElement.attributes;
					a.load(z);
					var c = {};
					for (var b = 0,
					d; d = f[b]; ++b) {
						c[d] = r.get(d)
					}
					return c
				})
			}
		}
	}
	try {
		r.set(y, y);
		if (r.get(y) != y) {
			r.disabled = true
		}
		r.remove(y)
	} catch(u) {
		r.disabled = true
	}
	return r
})();
bds.se.sugStorage = (function() {
	var g, a, c, o = "BDSUGSTORED",
	n = "__OPTIONS__";
	var b = (function() {
		var w = /['"\\\/\<\>\n\r]/g,
		v = {
			"'": "\\x27",
			'"': "\\x22",
			"\\": "\\\\",
			"/": "\\/",
			"\n": "\\\\n",
			"\r": "\\\\r",
			"<": "&lt;",
			">": "&gt;"
		};
		var u = function(x) {
			return v[x] || x
		};
		return function(x) {
			return x.replace(w, u)
		}
	})();
	var r = function() {
		return '{"q": "' + this.q + '", "p": "' + (this.p ? this.p: "") + '"}'
	};
	var h = function(w) {
		var u = [];
		for (var v in w) {
			u.push('"' + v + '": "' + w[v] + '"')
		}
		return "{" + u.join(",") + "}"
	};
	var f = function(u, v) {
		if (v !== undefined) {
			c[u] = v;
			bds.se.store.set(n, h(c));
			return v
		}
		return c[u] || ""
	};
	var t = function() {
		return bds.se.store && !bds.se.store.disabled
	};
	var e = function(v) {
		if (v && v.q && v.p) {
			v.toString = r;
			if (! (a[v.q] && a[v.p])) {
				g.push(v)
			} else {
				for (var x = 0,
				y = 0; x < g.length; x++) {
					if (v.q == g[x].q && v.p == g[x].p) {
						y = 1;
						break
					}
				}
				if (y === 0) {
					g.push(v)
				}
			}
			if (a[v.q] == undefined) {
				a[v.q] = [v]
			} else {
				for (var w = 0,
				y = 0,
				u = a[v.q].length; w < u; w++) {
					if (a[v.q][w].p == v.p || a[v.q][w].q == v.q) {
						y = 1;
						break
					}
				}
				if (y === 0) {
					a[v.q].push(v)
				}
			}
			if (a[v.p] == undefined) {
				a[v.p] = [v]
			} else {
				for (var w = 0,
				y = 0,
				u = a[v.p].length; w < u; w++) {
					if (a[v.p][w].q == v.q) {
						y = 1;
						break
					}
				}
				if (y === 0) {
					a[v.p].push(v)
				}
			}
			bds.se.store.set(o, "[" + g.join(",") + "]");
			return g.length
		}
		return false
	};
	var p = function(w) {
		var u = [];
		for (var v in a) {
			if (new RegExp("^" + w, "img").test(v)) {
				u = u.concat(a[v])
			}
		}
		return u
	};
	var j = function(u) {
		return g
	};
	var q = function() {
		g = [];
		a = {};
		bds.se.store.set(o, "");
		return g.length
	};
	var m = function() {
		return g.length
	};
	var s = function(u) {
		if (!u || !u.q || !u.p) {
			return false
		}
		var v;
		for (i = 0; i < g.length; i++) {
			if (u.q == g[i].q && u.p == g[i].p) {
				v = g[i];
				g.splice(i, 1);
				break
			}
		}
		if (v === undefined) {
			return false
		} else {
			bds.se.store.set(o, "[" + g.join(",") + "]");
			l();
			return v
		}
	};
	var k = function(u) {
		if (s(u)) {
			return e({
				q: u.q,
				p: u.p
			})
		}
		return false
	};
	var d = function() {
		var u = g[0];
		if (u) {
			return s({
				q: u.q,
				p: u.p
			})
		}
		return false
	};
	var l = function() {
		a = {};
		var B = bds.se.store.get(n);
		if (B) {
			c = (new Function("return (" + B + ")"))()
		} else {
			c = {}
		}
		var w = bds.se.store.get(o);
		if (!w) {
			g = []
		} else {
			g = (new Function("return (" + w + ")"))();
			for (var z = 0,
			v = g.length; z < v; z++) {
				var x = g[z];
				x.toString = r;
				if (a[x.q] == undefined) {
					a[x.q] = [x]
				} else {
					for (var y = 0,
					A = 0,
					u = a[x.q].length; y < u; y++) {
						if (a[x.q][y].p == x.p || a[x.q][y].q == x.q) {
							A = 1;
							break
						}
					}
					if (A === 0) {
						a[x.q].push(x)
					}
				}
				if (a[x.p] == undefined) {
					a[x.p] = [x]
				} else {
					for (var y = 0,
					A = 0,
					u = a[x.p].length; y < u; y++) {
						if (a[x.p][y].q == x.q) {
							A = 1;
							break
						}
					}
					if (A === 0) {
						a[x.p].push(x)
					}
				}
			}
		}
	};
	l();
	return {
		escapeData: b,
		isSupport: t,
		reset: q,
		getCount: m,
		set: e,
		get: p,
		getAll: j,
		edit: k,
		remove: s,
		pop: d,
		option: f
	}
})();
bds.se.sugsync = function() {
	var q;
	var m = 0,
	k = 0,
	j = 0,
	x = 0,
	d = false,
	b = null;
	var r = (/msie (\d+)/i.test(navigator.userAgent) && !window.opera) ? parseInt(RegExp.$1) : 0;
	var B = (document.compatMode == "BackCompat");
	function l(C) {
		return document.getElementById(C)
	}
	function o(C) {
		return document.createElement(C)
	}
	function y(C) {
		return String(C).replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g"), "")
	}
	function A(C) {
		return String(C).replace(new RegExp("[\\s\\t\\xa0\\u3000]", "g"), "")
	}
	function u(H, E, C) {
		if (r) {
			H.attachEvent("on" + E, (function(I) {
				return function() {
					C.call(I)
				}
			})(H))
		} else {
			H.addEventListener(E, C, false)
		}
	}
	function s(C) {
		if (r) {
			C.returnValue = false
		} else {
			C.preventDefault()
		}
	}
	function w(E) {
		if (r) {
			var H = document.createStyleSheet();
			H.cssText = E
		} else {
			var C = document.createElement("style");
			C.type = "text/css";
			C.appendChild(document.createTextNode(E));
			document.getElementsByTagName("HEAD")[0].appendChild(C)
		}
	}
	function h(I) {
		var H = document.forms[0];
		for (var E in I) {
			if (I[E] == undefined) {
				if (l("bdsug_ipt_" + E)) {
					H.removeChild(l("bdsug_ipt_" + E))
				}
			} else {
				if (!t(E)) {
					H.appendChild(C(E, I[E]))
				} else {
					t(E).value = I[E]
				}
			}
		}
		function C(L, J) {
			var K = o("INPUT");
			K.type = "hidden";
			K.name = L;
			K.id = "bdsug_ipt_" + L;
			K.value = J;
			return K
		}
	}
	function t(H) {
		var I = document.forms[0];
		var J = false;
		var C = I.getElementsByTagName("INPUT");
		for (var E = 0; E < C.length; E++) {
			if (H == C[E].getAttribute("name")) {
				J = C[E];
				return J
			} else {
				J = false
			}
		}
	}
	function p(H) {
		var E = document.forms[0];
		for (var C in H) {
			if (C == "f") {
				if (t("f")) {
					if (t("f").id == "bdsug_ipt_f") {
						E.removeChild(l("bdsug_ipt_f"))
					} else {
						t("f").value = "8"
					}
				}
			} else {
				if (l("bdsug_ipt_" + C)) {
					E.removeChild(l("bdsug_ipt_" + C))
				}
			}
		}
	}
	var a = 0;
	if (typeof window.bdsug != "object" || window.bdsug == null) {
		window.bdsug = {}
	}
	bdsug.sug = {};
	bdsug.sugkeywatcher = {};
	var n = (function() {
		function C(H) {
			var J = this.__MSG_QS__;
			if (!J[H]) {
				J[H] = []
			}
			for (var I = 1,
			L = arguments.length,
			K; I < L; I++) {
				J[H].push(arguments[I])
			}
		}
		function E(J) {
			var I = this.__MSG_QS__[J.type];
			if (I == null) {
				return
			}
			for (var H = 0,
			K = I.length; H < K; H++) {
				I[H].rm(J)
			}
		}
		return {
			ini: function(H) {
				H.__MSG_QS__ = {};
				H.on = C;
				H.dm = E;
				return H
			}
		}
	})();
	var g = (function() {
		var X = l("kw");
		var O;
		var L = 0;
		var Z = 0;
		var Q = "";
		var W = "";
		var R;
		var I = false;
		var T = true;
		var M;
		var J = l("su");
		u(J, "mousedown", V);
		u(J, "keydown", V);
		u(l("kw"), "paste",
		function() {
			h({
				rsv_n: 2
			});
			if (a == 0) {
				a = new Date().getTime()
			}
		});
		function V() {
			h({
				inputT: a > 0 ? (new Date().getTime() - a) : 0
			})
		}
		function U() {
			if (T) {
				g.dm({
					type: "start"
				});
				T = false
			}
		}
		function P(aa) {
			if (a == 0) {
				a = new Date().getTime()
			}
			if (T) {
				g.dm({
					type: "start"
				});
				T = false
			}
			aa = aa || window.event;
			if (aa.keyCode == 9 || aa.keyCode == 27) {
				g.dm({
					type: "hide_div"
				})
			}
			if (aa.keyCode == 13 && window.opera) {
				s(aa);
				g.dm({
					type: "key_enter"
				})
			}
			if (aa.keyCode == 86 && aa.ctrlKey) {
				h({
					rsv_n: 2
				})
			}
			if (O.style.display != "none") {
				if (aa.keyCode == 38) {
					s(aa);
					g.dm({
						type: "key_up"
					})
				}
				if (aa.keyCode == 40) {
					g.dm({
						type: "key_down"
					})
				}
			} else {
				if (aa.keyCode == 38 || aa.keyCode == 40) {
					g.dm({
						type: "need_data",
						wd: X.value
					})
				}
			}
		}
		function H() {
			var aa = X.value;
			if (aa == Q && aa != "" && aa != W && aa != R) {
				if (Z == 0) {
					Z = setTimeout(function() {
						g.dm({
							type: "need_data",
							wd: aa
						})
					},
					100)
				}
			} else {
				clearTimeout(Z);
				Z = 0;
				Q = aa;
				if (aa == "") {
					g.dm({
						type: "hide_div"
					})
				}
				if (W != X.value) {
					W = ""
				}
			}
		}
		function E() {
			if (!L) {
				L = setInterval(H, 30)
			}
		}
		function N() {
			clearInterval(L);
			L = 0
		}
		function K() {
			if (I) {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
				I = false
			}
		}
		function S(aa) {
			X.blur();
			X.setAttribute("autocomplete", aa);
			X.focus()
		}
		function Y(aa) {
			var aa = aa || window.event;
			if (aa.keyCode == 13) {
				s(aa)
			}
		}
		X.setAttribute("autocomplete", "off");
		var C = false;
		bdsug.sugkeywatcher.on = function() {
			if (!C) {
				if (r) {
					X.attachEvent("onkeydown", P)
				} else {
					X.addEventListener("keydown", P, false)
				}
				C = true
			}
		};
		bdsug.sugkeywatcher.off = function() {
			if (C) {
				if (r) {
					X.detachEvent("onkeydown", P)
				} else {
					X.removeEventListener("keydown", P, false)
				}
				C = false
			}
		};
		bdsug.sugkeywatcher.on();
		u(X, "blur", N);
		u(X, "focus", E);
		u(X, "mousedown", U);
		u(X, "beforedeactivate", K);
		if (window.opera) {
			u(X, "keypress", Y)
		}
		return n.ini({
			rm: function(aa) {
				switch (aa.type) {
				case "div_ready":
					O = aa.sdiv;
					W = X.value;
					E();
					break;
				case "clk_submit":
					X.blur();
					X.value = aa.wd;
					break;
				case "ent_submit":
					N();
					X.blur();
					break;
				case "key_select":
					R = aa.selected;
					break;
				case "close":
					N();
					S("on");
					break;
				case "mousedown_tr":
					if (navigator.userAgent.toLowerCase().indexOf("webkit") != -1) {
						N();
						setTimeout(E, 2000)
					}
					I = true;
					break
				}
			}
		})
	})();
	var D = (function() {
		var P;
		var X = l("kw");
		var K;
		var T = -1;
		var ac;
		var W;
		var J;
		var E;
		function H() {
			var ad = K.rows;
			for (var ae = 0; ae < ad.length; ae++) {
				ad[ae].className = "ml"
			}
		}
		function S() {
			if (typeof(K) != "undefined" && K != null && P.style.display != "none") {
				var ad = K.rows;
				for (var ae = 0; ae < ad.length; ae++) {
					if (ad[ae].className == "mo") {
						return [ae, ad[ae].cells[0].innerHTML]
					}
				}
			}
			return [ - 1, ""]
		}
		function O() {
			if (r && r <= 6) {
				E && (E.style.display = "none")
			}
			P && (P.style.display = "none")
		}
		function ab() {
			H();
			this.className = "mo"
		}
		function V(ad) {
			D.dm({
				type: "mousedown_tr"
			});
			if (!r) {
				ad.stopPropagation();
				ad.preventDefault();
				return false
			}
		}
		function U(ae) {
			var ad = ae;
			return function() {
				var af = ac[ad].value;
				O();
				var ag = 0;
				if (typeof ac[ad].ala != "undefined") {
					ag = W[ac[ad].ala].id
				}
				D.dm({
					type: "clk_submit",
					oq: l("kw").value,
					wd: af,
					rsp: ad,
					rsv_sug5: ag
				})
			}
		}
		function R(ad) {
			ad = ad || window.event;
			s(ad);
			D.dm({
				type: "close"
			});
			O(); (new Image()).src = $.url.escapeSSL("http://sclick.baidu.com/w.gif?fm=suggestion&title=%B9%D8%B1%D5&t=") + new Date().getTime()
		}
		function aa() {
			var ad = [X.offsetWidth, X.offsetHeight];
			P.style.width = ((r && B) ? ad[0] : ad[0] - 2) + "px";
			P.style.top = ((r && B) ? ad[1] : ad[1] - 1) + "px";
			P.style.display = "block";
			if (r && r <= 6) {
				E.style.top = ((r && B) ? ad[1] : ad[1] - 1) + "px";
				E.style.width = ((r && B) ? ad[0] : ad[0] - 2) + "px"
			}
		}
		function Z(ae, af) {
			if (ae && af) {
				var ad = y(ae);
				if (af.indexOf(ad) == 0) {
					af = C(af, ad)
				} else {
					if (af.indexOf(A(ae)) == 0) {
						ad = A(ae);
						af = C(af, ad)
					} else {
						af = af.replace(/&/g, "&amp;");
						af = af.replace(/</g, "&lt;");
						af = af.replace(/>/g, "&gt;")
					}
				}
			}
			return af
		}
		function C(ah, af) {
			ah = ah.replace(/&/g, "&amp;");
			ah = ah.replace(/</g, "&lt;");
			ah = ah.replace(/>/g, "&gt;");
			af = af.replace(/&/g, "&amp;");
			af = af.replace(/</g, "&lt;");
			af = af.replace(/>/g, "&gt;");
			var ae = "<span>" + af + "</span>";
			var ad = af.length;
			var ag = "<b>" + ah.substring(ad) + "</b>";
			return (ae + ag)
		}
		function N(ah) {
			var ae = l("kw").value,
			af = /[^\x00-\xff]/g,
			al = [],
			ak = [];
			q = 0;
			for (var ai = 0; ai < ah.length; ai++) {
				var am = {};
				am.value = ah[ai];
				am.from = 0;
				al.push(am)
			}
			if (!bds.se.sugStorage.isSupport() || !navigator.cookieEnabled || ( !! /\bsugstore=(\d)/.exec(document.cookie) && /\bsugstore=(\d)/.exec(document.cookie)[1] == 0)) {
				return al
			} else {
				if (ae.replace(af, "mm").length <= 3) {
					return al
				} else {
					for (var ai = 0; ai < ah.length; ai++) {
						var am = {};
						am.value = ah[ai];
						am.from = 0;
						al.push(am)
					}
					var aj = bds.se.sugStorage.get(encodeURIComponent(ae));
					aj.sort(function(ao, an) {
						if (typeof ao.date == "undefined" || typeof an.date == "undefined") {
							return true
						} else {
							return ao.date - an.date
						}
					});
					for (ai = 0; ai < aj.length; ai++) {
						for (var ag = ai + 1; ag < aj.length; ag++) {
							if (aj[ai].q == aj[ag].q) {
								aj.splice(ag, 1);
								ag--
							}
						}
					}
					for (ai = aj.length - 1; ai >= 0; ai--) {
						var am = {};
						am.value = decodeURIComponent(aj[ai].q);
						am.from = 1;
						am.p = aj[ai].p;
						ak.push(am);
						q++;
						if (ai == aj.length - 2) {
							break
						}
					}
					ah = ak.concat(al);
					for (ai = 0; ai < ah.length; ai++) {
						for (ag = ai + 1; ag < ah.length; ag++) {
							if (ah[ai].value == ah[ag].value) {
								ah.splice(ag, 1);
								ag--
							}
						}
					}
					var ad = [];
					for (var ai = 0; ai < W.length; ai++) {
						for (var ag = 0; ag < ah.length; ag++) {
							if (W[ai].key == ah[ag].value) {
								if (ah[ag].from == 1) {
									q--
								}
								ah.splice(ag, 1)
							}
						}
						var am = {};
						am.value = W[ai].key;
						am.from = 0;
						am.ala = ai;
						ad.unshift(am)
					}
					ah = ad.concat(ah);
					while (ah.length > 10) {
						ah.pop()
					}
					return ah
				}
			}
		}
		function M() {
			function ad(al) {
				if (!al || !al.title) {
					return
				}
				setTimeout(function() {
					al.title = ""
				},
				2000)
			}
			ac = N(ac);
			if (ac.length <= 0) {
				O();
				return
			}
			K = o("TABLE");
			K.id = "st";
			K.cellSpacing = 0;
			K.cellPadding = 2;
			var ah = o("tbody");
			K.appendChild(ah);
			for (var ag = 0,
			ae = ac.length; ag < ae; ag++) {
				var ai = ah.insertRow( - 1);
				u(ai, "mouseover", ab);
				u(ai, "mouseout", H);
				u(ai, "mousedown", V);
				u(ai, "click", U(ag));
				var ak = ai.insertCell( - 1);
				var aj = Z(J, ac[ag].value);
				if (ac[ag].from == 1) {
					aj = '<u class="sug_del" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>' + aj;
					ak.className = "sug_storage"
				}
				if (typeof ac[ag].ala != "undefined") {
					ak.innerHTML = I(aj, ac[ag].ala);
					ak.className = "sug_ala"
				} else {
					ak.innerHTML = aj
				}
			}
			P.innerHTML = "";
			P.appendChild(K);
			aa();
			if (r && r <= 6) {
				E.style.display = "block";
				E.style.left = 0 + "px";
				E.style.top = X.offsetHeight + "px";
				E.style.width = X.offsetWidth + "px";
				E.style.height = P.offsetHeight - 1 + "px"
			}
			var af = P.getElementsByTagName("u");
			for (var ag = 0; ag < af.length; ag++) {
				af[ag].onclick = function(ao) {
					var am = S()[0];
					var ao = ao || window.event;
					var an = ao.target || ao.srcElement;
					an.parentNode.parentNode.parentNode.removeChild(an.parentNode.parentNode);
					if (r && r <= 6) {
						E.style.height = P.offsetHeight - 1 + "px"
					}
					var al = window["BD_PS_C" + (new Date()).getTime()] = new Image();
					al.src = $.url.escapeSSL("http://sclick.baidu.com/w.gif?q=") + encodeURIComponent(ac[am].value) + "&fm=beha&rsv_sug=del&rsv_sid=11&t=" + new Date().getTime() + "&path=http://www.baidu.com";
					bds.se.sugStorage.remove({
						q: encodeURIComponent(ac[am].value),
						p: ac[am].p
					});
					ac.splice(am, 1);
					D.dm({
						type: "update_data",
						word: l("kw").value,
						data: ac
					});
					if (q > 0) {
						q--
					}
					if (q <= 0 && ac.length == 0) {
						O();
						P.innerHTML = ""
					}
					if (window.event) {
						ao.cancelBubble = true
					} else {
						ao.stopPropagation()
					}
				}
			}
			h({
				rsv_sug: q
			})
		}
		function I(ae, af) {
			var ad = [];
			switch (W[af].type) {
			case "1":
				ad.push("<h3>" + W[af].key + "</h3>");
				ad.push("<p>" + W[af].word);
				if (W[af].word_add) {
					ad.push(" <span>（" + W[af].word_add + "）</span>")
				}
				ad.push("</p>");
				break;
			case "2":
				ad.push("<h3>" + W[af].key + " - 百度安全认证</h3>");
				ad.push("<p>" + W[af].word);
				if (W[af].word_add) {
					ad.push(" <span>（" + W[af].word_add + "）</span>")
				}
				ad.push("</p>");
				break;
			default:
				ad.push(ae)
			}
			return ad.join("")
		}
		function Y() {
			T = S()[0];
			if (T == -1) {
				D.dm({
					type: "submit"
				})
			} else {
				D.dm({
					type: "ent_submit",
					oq: J,
					wd: S()[1],
					rsp: T
				})
			}
		}
		function L() {
			T = S()[0];
			H();
			if (T == 0) {
				D.dm({
					type: "key_select",
					selected: ""
				});
				l("kw").value = J;
				T--;
				p({
					oq: J,
					sug: ac[T],
					rsv_n: 1,
					rsp: T,
					f: 3,
					rsv_sug: rsv_sug,
					rsv_sug5: 0
				})
			} else {
				if (T == -1) {
					T = ac.length
				}
				T--;
				var ad = K.rows[T];
				ad.className = "mo";
				D.dm({
					type: "key_select",
					selected: ac[T].value
				});
				l("kw").value = ac[T].value;
				var ae = 0;
				if (typeof ac[T].ala != "undefined") {
					ae = W[ac[T].ala].id
				}
				h({
					oq: J,
					sug: ac[T].value,
					rsv_n: 1,
					rsp: T,
					f: 3,
					rsv_sug: rsv_sug
				})
			}
		}
		function Q() {
			T = S()[0];
			H();
			if (T == ac.length - 1) {
				D.dm({
					type: "key_select",
					selected: ""
				});
				l("kw").value = J;
				T = -1;
				p({
					oq: J,
					sug: ac[T],
					rsv_n: 1,
					rsp: T,
					f: 3,
					rsv_sug: rsv_sug,
					rsv_sug5: 0
				})
			} else {
				T++;
				var ad = K.rows[T];
				ad.className = "mo";
				D.dm({
					type: "key_select",
					selected: ac[T].value
				});
				l("kw").value = ac[T].value;
				var ae = 0;
				if (typeof ac[T].ala != "undefined") {
					ae = W[ac[T].ala].id
				}
				h({
					oq: J,
					sug: ac[T].value,
					rsv_n: 1,
					rsp: T,
					f: 3,
					rsv_sug: rsv_sug,
					rsv_sug5: ae
				})
			}
		}
		return n.ini({
			rm: function(ad) {
				switch (ad.type) {
				case "div_ready":
					P = ad.sdiv;
					E = ad.frm;
					break;
				case "give_data":
					J = ad.data.q;
					ac = ad.data.s;
					var ae = ad.data.z || [];
					W = [];
					for (var af = 0; af < ae.length; af++) {
						var ag = ae[af];
						if (ag.type == 1 || ag.type == 2) {
							W.push(ae[af])
						}
					}
					rsv_sug = ad.data.t;
					if (P) {
						M()
					}
					break;
				case "key_enter":
					Y();
					break;
				case "key_up":
					L();
					break;
				case "key_down":
					Q();
					break;
				case "hide_div":
					O();
					break;
				case "mousedown_other":
					O();
					break;
				case "window_blur":
					O();
					break;
				case "need_resize":
					aa();
					break
				}
			}
		})
	})();
	var z = (function() {
		var C = document.forms[0];
		function I() {
			if (l("bdsug_ipt_sug")) {
				if (l("bdsug_ipt_sug").value == y(l("kw").value)) {
					p({
						rsv_n: 1,
						sug: 1
					})
				} else {
					p({
						f: 1
					})
				}
			}
		}
		u(C, "submit", I);
		function H() {
			I();
			h({
				inputT: a > 0 ? (new Date().getTime() - a) : 0
			});
			C.onsubmit();
			C.submit()
		}
		function E(J) {
			h(J);
			h({
				inputT: a > 0 ? (new Date().getTime() - a) : 0
			});
			p({
				sug: 1,
				rsv_n: 1
			});
			C.onsubmit();
			C.submit()
		}
		return n.ini({
			rm: function(J) {
				switch (J.type) {
				case "clk_submit":
					E({
						oq:
						J.oq,
						rsp: J.rsp,
						f: 3,
						rsv_sug: q,
						rsv_sug2: 1,
						rsv_sug5: J.rsv_sug5
					});
					break;
				case "ent_submit":
					E({
						oq:
						J.oq,
						rsp: J.rsp,
						f: 3,
						rsv_sug: q,
						rsv_sug2: 0
					});
					break;
				case "submit":
					H();
					break
				}
			}
		})
	})();
	var c = (function() {
		var C = {};
		function I(J) {
			if (typeof C[J] == "undefined") {
				c.dm({
					type: "request_data",
					wd: J
				})
			} else {
				c.dm({
					type: "give_data",
					data: C[J]
				})
			}
		}
		function H(J) {
			C[J.q] = J;
			c.dm({
				type: "give_data",
				data: C[J.q]
			})
		}
		function E(M, L) {
			if (typeof C[M] != "undefined") {
				if (L.length > 0) {
					var J = [];
					for (var K = 0; K < L.length; K++) {
						J.push(L[K].value)
					}
					C[M].s = J;
					c.dm({
						type: "give_data",
						data: C[M]
					})
				}
			}
		}
		return n.ini({
			rm: function(J) {
				switch (J.type) {
				case "response_data":
					H(J.data);
					break;
				case "need_data":
					I(J.wd);
					break;
				case "update_data":
					E(J.word, J.data);
					break
				}
			}
		})
	})();
	var v = (function() {
		var C;
		var E;
		function H(J) {
			var I = $.url.escapeSSL("http://suggestion.baidu.com/su");
			v.dm({
				type: "need_cookie"
			});
			if (C) {
				document.body.removeChild(C)
			}
			C = o("SCRIPT");
			C.src = I + "?wd=" + encodeURIComponent(J) + "&p=" + E + "&cb=window.bdsug.sug&from=superpage&t=" + (new Date()).getTime();
			C.charset = "gb2312";
			document.body.appendChild(C);
			h({
				rsv_sug3: ++k
			});
			x = new Date().getTime();
			d = false;
			b = setTimeout(function() {
				h({
					rsv_sug4: j += 5000
				});
				d = true
			},
			5000);
			if (!window._LogSearchBoxChanged) {
				F.use("ps/sug",
				function(K) {
					K.searchLog()
				});
				window._LogSearchBoxChanged = true
			}
		}
		return n.ini({
			rm: function(J) {
				switch (J.type) {
				case "request_data":
					H(J.wd);
					break;
				case "give_cookie":
					var I = J.sug;
					if (I > 0) {
						I = 3
					}
					E = I;
					break
				}
			}
		})
	})();
	bdsug.sug = function(C) {
		bdsug.dm({
			type: "response_data",
			data: C
		});
		if (!d) {
			var E = l("kw");
			if (E.value.toLowerCase() == C.q) {
				h({
					rsv_sug1: ++m
				})
			}
			clearTimeout(b);
			h({
				rsv_sug4: j += (new Date().getTime() - x)
			})
		}
	};
	bdsug.initSug = function() {
		bdsug.dm({
			type: "init"
		})
	};
	n.ini(bdsug);
	var f = (function() {
		function C() {
			if (navigator.cookieEnabled) {
				document.cookie = "su=0; domain=www.baidu.com"
			}
		}
		function E() {
			var H = (navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1: 3);
			f.dm({
				type: "give_cookie",
				sug: H
			})
		}
		return n.ini({
			rm: function(H) {
				switch (H.type) {
				case "close":
					C();
					break;
				case "need_cookie":
					E();
					break
				}
			}
		})
	})();
	var e = (function() {
		var M = l("kw");
		var H;
		var J = document.forms[0];
		var N;
		function L() {
			if (H.offsetWidth != 0 && M.offsetWidth != H.offsetWidth) {
				e.dm({
					type: "need_resize"
				})
			}
		}
		function I() {
			H = o("DIV");
			H.id = "sd_" + new Date().getTime();
			H.className = "s-ps-sug";
			H.style.display = "none";
			J.appendChild(H);
			if (r && r <= 6) {
				N = o("IFRAME");
				N.style.display = "none";
				N.style.position = "absolute";
				H.parentNode.insertBefore(N, H)
			}
		}
		function K(O) {
			O = O || window.event;
			var P = O.target || O.srcElement;
			if (P == M) {
				return
			}
			while (P = P.parentNode) {
				if (P == H) {
					return
				}
			}
			e.dm({
				type: "mousedown_other"
			})
		}
		function C() {
			e.dm({
				type: "window_blur"
			})
		}
		function E() {
			var P = "#" + H.id;
			var O = [];
			e.dm({
				type: "div_ready",
				sdiv: H,
				frm: N
			});
			setInterval(L, 100);
			u(document, "mousedown", K);
			u(window, "blur", C);
			O.push(P + "{border:1px solid #817F82;position:absolute;top:32px;left:0}");
			O.push(P + " table{width:100%;background:#fff;cursor:default}");
			O.push(P + " td{color:#000;font:14px arial;height:25px;line-height:25px;padding:0 8px}");
			O.push(P + " td b{color:#000}");
			O.push(P + " .mo{background:#ebebeb}");
			O.push(P + " .ml{background:#fff}");
			O.push(P + " td.sug_storage{color:#7A77C8}");
			O.push(P + " td.sug_storage b{color:#7A77C8}");
			O.push(P + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
			O.push(P + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
			O.push(P + " .mo .sug_del{display:block}");
			O.push(P + " .sug_ala{border-bottom:1px solid #e6e6e6}");
			O.push(P + " td h3{line-height:14px;margin:6px 0 4px 0;font-size:12px;font-weight:normal;color:#7B7B7B;padding-left:20px;background:url(img/sug_bd.png) no-repeat left center}");
			O.push(P + " td p{font-size:14px;font-weight:bold;padding-left:20px}");
			O.push(P + " td p span{font-size:12px;font-weight:normal;color:#7B7B7B}");
			w(O.join(""))
		}
		bdsug.sug.initial = E;
		return n.ini({
			rm: function(O) {
				switch (O.type) {
				case "start":
					E();
					break;
				case "init":
					I();
					break
				}
			}
		})
	})();
	g.on("need_data", c);
	g.on("close_div", D);
	g.on("key_enter", D);
	g.on("key_up", D);
	g.on("key_down", D);
	g.on("hide_div", D);
	g.on("start", e);
	c.on("request_data", v);
	c.on("give_data", D);
	bdsug.on("response_data", c);
	bdsug.on("init", e);
	D.on("update_data", c);
	D.on("clk_submit", g, z);
	D.on("ent_submit", g, z);
	D.on("submit", z);
	D.on("key_select", g);
	D.on("close", g, f);
	D.on("mousedown_tr", g);
	e.on("mousedown_other", D);
	e.on("need_resize", D);
	e.on("div_ready", g, D);
	e.on("window_blur", D);
	v.on("need_cookie", f);
	f.on("give_cookie", v)
};
F.module("ps/sug",
function(c, b, a) {
	b.init = function() {
		bds.se.sugsync();
		window.bdsug.initSug()
	};
	b.pssubmit = function() {
		var e = a.base;
		var d = s_session.userTips.isNewTabSearch;
		if (!d) {
			var f = window.baidu && baidu.packPlayer;
			if (f && s_session.yuce && s_session.yuce != "1") {
				if (f.getState() == "play") {
					d = true;
					$("#form")[0].target = "_blank"
				} else {
					d = false;
					$("#form")[0].target = "_self"
				}
			}
		}
		if (d && $("#kw")[0] && (s_session.searchLogSend == 0 || $("#form").attr("target") == "_blank")) {
			setTimeout(function() {
				if (s_session.sid.indexOf("12783") > -1) {
					$("#kw").attr("data-bfocus", 1).val("")
				} else {
					$("#kw").triggerHandler("focus");
					$("#kw").select()
				}
			},
			1);
			if (s_session.sid.indexOf("12783") > -1) {} else {
				if ($.browser.firefox) {
					$("#kw").select()
				}
			}
			setTimeout(function() {
				a.use("page/info",
				function(g) {
					var h = g.getInfo(),
					j = "focus";
					if (h && h.isFocus) {
						j = "blur"
					}
					s_session.searchLogSend = 1;
					a.fire("searchBtnClick", {
						opType: "click",
						openMode: "new" + j,
						wd: encodeURIComponent($("#kw").val())
					})
				})
			},
			100)
		} else {
			if (s_session.searchLogSend == 0 || $("#form").attr("target") == "_blank") {
				s_session.searchLogSend = 1;
				a.fire("searchBtnClick", {
					opType: "click",
					openMode: "current",
					wd: encodeURIComponent($("#kw").val())
				})
			}
		}
		$("#bd_fm_search_tip").hide()
	};
	b.searchLog = function() {
		a.fire("queryChange", {
			opType: "querychange",
			wd: encodeURIComponent($("#kw").val())
		})
	}
});
$(window).on("load",
function() {
	if ($.browser.chrome >= 39) {
		return
	}
	var d = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div>';
	$("body").append(d);
	var k = "//www.baidu.com/cache/fpid/o.swf";
	var g = "//www.baidu.com/cache/fpid/lib_1_0.js";
	var h = "//www.baidu.com/cache/fpid/ielib_1_1.js";
	var b = "//www.baidu.com/cache/fpid/chromelib_1_1.js";
	var f = document.title;
	var e = {
		flashDomId: "_FP_userDataDiv",
		flashUrl: k,
		comDomId: "_FP_comDiv",
		IEStoreDomId: "_FP_userDataDiv"
	};
	var a = navigator.userAgent.toLowerCase();
	var c = false;
	if (a.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(a)) {
		c = true
	}
	var j = function(n) {
		if (c) {
			window.setTimeout(function() {
				document.title = f
			},
			0)
		}
		window._FPID_CACHE = n;
		$("#_FP_userDataDiv").remove();
		$("#_FP_comDiv").remove();
		var r = s_session.seqId;
		var q = "_WWW_BR_API_" + (new Date()).getTime();
		var m = window[q] = new Image();
		m.onload = function() {
			window[q] = null
		};
		var l = $.cookie.get("BAIDUID");
		var p = $.url.escapeSSL("http://eclick.baidu.com/ps_fp.htm?");
		var o = p + "pid=superman&fp=" + n.data.fp + "&im=" + n.data.im + "&wf=" + n.data.wf + "&br=" + n.data.br + "&qid=" + r + "&bi=" + l;
		m.src = o
	};
	if (c) {
		$.getScript(g,
		function() {
			fpLib.getFp(j, e)
		})
	} else {
		$.getScript(b,
		function() {
			fpLib.getFp(j, e)
		})
	}
});
F.module("superman:page/analyse",
function(d, c, a) {
	c.runCssDetect = function() {
		$(window).bind("load",
		function() {
			setTimeout(function() {
				b(1);
				setTimeout(function() {
					b(2,
					function() {
						setTimeout(function() {
							b(3)
						},
						3000)
					})
				},
				2000)
			},
			1000)
		})
	};
	var b = function(e, f) {
		if ($("s_main").css("display") == "none") {
			if (e == 1) {
				$.loadCss($("#s_superpage_css_lnk").href + "?v=9527")
			}
			a.fire("cssLoadFailed", {
				counter: e
			});
			f && f()
		}
	}
});
$(document).ready(function() {
	window._load_status = "dom_ready"; (function() {
		if (Math.random() * 100 < 1 && $.browser.edge) {
			window.testedge = function(g) {
				if (/testedge=1/i.test(g.toString())) {
					try {
						window.localStorage.setItem("_super_edgehealth", "good")
					} catch(j) {}
					var h = "1"
				} else {
					var h = "0"
				}
				var f = function(l) {
					var o = "imglog__" + (new Date()).getTime(),
					m = window[o] = new Image();
					m.onload = (m.onerror = function() {
						window[o] = null
					});
					m.src = l;
					m = null
				};
				var k = "http://dj0.baidu.com/v.gif?pid=315&type=2011&portrait=" + s_session.portrait + "&logactid=9000500000&health=" + h + "&t=" + +new Date();
				f($.url.escapeSSL(k))
			};
			$.loadJs($.url.escapeSSL("http://ss.bdimg.com/cdn/testedge.js"))
		}
	})();
	if ($.browser.chrome && $.browser.chrome === 37) {
		if (window.navigator.appVersion.indexOf("Windows NT 6.1") > -1) {
			$("#kw").css({
				"font-family": "Microsoft Yahei,STHeiti"
			})
		}
	}
	window.alog && alog("speed.set", "drt", +new Date);
	F.use("superman:ps/sindex",
	function(g) {
		g.init();
		var f = {};
		f.baseParams = {
			ct: 2,
			logFrom: "feed_index",
			logInfo: "item",
			qid: s_session.seqId,
			sid: s_session.sid,
			ssid: s_session.portrait,
			logid: s_session.logId || "0",
			_r: Math.random()
		};
		window.Thunder.get(f)
	});
	if (typeof window._sp_async == "undefined") {
		F.use("superman:ps/sug",
		function(f) {
			f.init()
		})
	}
	F.use("superman:ps/log",
	function(f) {
		f.bindBox("nv");
		f.bindBox("u_sp");
		f.bindBox("s_user_name_menu");
		f.bindBox("bottom_container");
		$("#s_pss_exit")[0] && f.bindBox("s_pss_exit")
	});
	if ($("#toipad")[0]) {
		F.use("superman:page/toipad",
		function(f) {
			f.init()
		})
	}
	F.call("superman:common/image_lazy_load", "init");
	F.call("superman:lib/carditem_log", "init");
	if (_manCard.asynJs.length > 0) {
		$.each(_manCard.asynJs,
		function(f, g) {
			setTimeout(function() {
				$.loadJs($("#" + g).attr("data-src"))
			},
			1)
		})
	}
	_manCard.asynLoad = function(f) {
		$.loadJs($("#" + f).attr("data-src"))
	};
	$(window).bind("load",
	function() {
		window._load_status = "window_load";
		if (s_session.index_off) {
			return
		}
		F.call("superman:mt/mt_show", "init");
		F.call("superman:page/scroll", "init");
		F.call("superman:page/page_exp", "init");
		window._load_status = "fully_load";
		e();
		b();
		c();
		a();
		setTimeout(function() {
			var f = $("script[data-onload],#tipsplus-js");
			f.each(function() {
				var g = $(this),
				h = g.attr("data-src");
				if (h) {
					g.attr("src", h)
				}
			})
		},
		1)
	});
	function b() {
		F.call("superman:start/skin_start", "init", false)
	}
	function c() {
		F.call("superman:mngr/top_menu", "init");
		F.call("superman:mngr/top_menunav", "init")
	}
	function e() {
		var f = $("#s_mod_weather");
		f.one("mouseenter",
		function() {
			var g = $(".city-wather .show-city-name").attr("data-key");
			$.ajaxget(s_domain.baseuri + "/other/data/weatherInfo?city=" + encodeURI(g),
			function(h) {
				if (h.errNo == 0 && h.data) {
					if (h.data.weather) {
						F.use("superman:weather/weather_tpl",
						function(j) {
							j.init(h.data.weather)
						});
						F.use("weather/weather_ctrl",
						function(j) {
							j.bindEvents(h.data.weather)
						})
					}
				}
			})
		})
	}
	if ($.isIE6) {
		$(window).bind("resize load",
		function(f) {
			$("#bottom_container").toggleClass("xxx4ielw");
			$(document.body).toggleClass("rs4ie")
		})
	}
	if ($.browser.opera) {
		$(document.body).css("minHeight", "100px")
	}
	if ($.browser.ie == 6 || $.browser.ie == 7) {
		$("#head_wrapper").css("z-index", 2);
		$("span[data-tid=7999]").remove()
	}
	F.fire("superman:page", "runCssDetect");
	if (location.href.indexOf("frm=resultPage") > -1 && location.href.indexOf("showType=showSkin") > -1) {
		window.location.hash = "#";
		F.use("skin/skin_init",
		function(f) {
			f.init()
		})
	}
	function a() {
		$("#s_menu_mine").on("click",
		function() {
			$("#s_xmancard_nav .s-nav-wrapper .nav-tips").remove();
			F.use("superman:common/user_attr",
			function(f) {
				f.setAttr("supermanNavGuide", "off")
			})
		})
	}
	if (s_session.isFesLogo) {
		$("#s_mp area").on("mousedown",
		function(f) {
			ns_c({
				fm: "tab",
				tab: "felogo",
				rsv_platform: "newhome",
				rsv_skin: $("#head").hasClass("s-skin-hasbg") ? "1": "0"
			})
		})
	}
	if (s_session.isHaveWrodLink) {
		$("#lm a").on("mousedown",
		function(g) {
			var f = $(this);
			ns_c && ns_c({
				fm: "behs",
				tab: "bdlink",
				p1: f.index() + 1,
				title: f.text(),
				url: f.attr("href"),
				rsv_platform: "newhome",
				rsv_skin: $("#head").hasClass("s-skin-hasbg") ? "1": "0"
			})
		})
	} (function d() {
		var f = document.getElementById("mCon");
		f.onclick = function() {
			var h = f.firstChild;
			if (h.innerHTML === "手写") {
				setTimeout(function() {
					var j = document.getElementById("hwr_div");
					if (j && parseInt(j.style.left) > 0) {
						F.call("superman:ps/sindex", "fire")
					}
				},
				500)
			}
		};
		var g = document.getElementById("mMenu");
		g.onclick = function() {
			setTimeout(function() {
				var h = document.getElementById("hwr_div");
				if (h && parseInt(h.style.left) > 0) {
					F.call("superman:ps/sindex", "fire")
				}
			},
			500)
		}
	})()
});
F.module("page/info",
function(c, b, a) {
	var d = a.base,
	e = {
		isFocus: true
	};
	$(window).on("focus",
	function() {
		e.isFocus = true
	});
	$(window).on("blur",
	function() {
		e.isFocus = false
	});
	b.getInfo = function() {
		return e
	}
});
F.module("superman:page/scroll",
function(b, f, p) {
	var h = $("#bottom_container").clone();
	var a = $("#head");
	var e = $("#s_top_wrap");
	var j = $("#head_wrapper");
	var o = $("#s_kw_wrap");
	var r = $("#s_lm_wrap");
	var k = $("#s_wrap");
	var l = $("#u_sp");
	var g = document.getElementById("s_fm");
	var c = $.isIE === 7 ? true: false;
	var d = $.isIE === 6 ? true: false;
	function n() {
		m();
		bds.comm.ubsurl = $.url.escapeSSL("http://sclick.baidu.com/w.gif");
		if ($.isIE == 6) {
			document.execCommand("BackgroundImageCache", false, true)
		}
	}
	var q = {
		overBound: false,
		topFy: function(u, t) {
			if (d) {
				return
			}
			var s = this;
			if (!s.overBound) {
				s.overBound = true;
				k.css({
					"padding-top": j.height()
				});
				e.addClass("s-down");
				k.addClass("s-down");
				j.addClass("s-down");
				p.fire("outMenu", {
					out: true
				});
				if (c) {
					g.style.zoom = 0
				}
				$(window).bind("resize", s.follow)
			}
			if (u >= 0) {
				e.css({
					left: -1 * u
				})
			}
			s.follow(true)
		},
		unTopFy: function(u, t) {
			if (d) {
				return
			}
			var s = this;
			if (s.overBound) {
				s.overBound = false;
				e.removeClass("s-down");
				k.removeClass("s-down");
				j.removeClass("s-down");
				k.css({
					"padding-top": 0
				});
				p.fire("outMenu", {
					out: false
				});
				if (c) {
					setTimeout(function() {
						g.style.zoom = 1
					},
					30)
				}
				s.follow();
				$(window).unbind("resize", s.follow)
			}
			e.css({
				left: 0
			})
		},
		ieFix: function(t) {
			var s = $("#s_skin_layer");
			if (parseInt(s.css("top"), 10) >= 0) {
				s.css({
					top: t
				})
			}
		},
		follow: function(s) {
			if (s) {
				j.css({
					left: e.width() / 2 - $(window).scrollLeft()
				})
			} else {
				j.css({
					left: ""
				})
			}
		},
		upMenuFollow: function() {
			l.css({
				position: "fixed",
				right: $(window).width() - e.width() + $(window).scrollLeft()
			})
		},
		miniFy: function(t) {
			var s = 1280;
			if ($(window).width() > s || t === true) {
				$(g).removeClass("minisize")
			} else {
				$(g).addClass("minisize")
			}
		},
		initAdjust: function() {
			var s = $("#head_wrapper");
			$(window).on("beforeunload",
			function() {
				q.unTopFy(0, 0);
				window.scrollTo(0, 0)
			})
		}
	};
	function m() {
		var s = o.offset().top;
		q.initAdjust();
		$(window).on("scroll",
		function(v) {
			var u = $(this).scrollTop();
			var t = $(this).scrollLeft();
			if (j.hasClass("s-ps-islite")) {
				return
			}
			if (u >= s - 18) {
				q.topFy(t, u)
			} else {
				q.unTopFy(t, u)
			}
			if (c) {
				if (u == 0) {
					setTimeout(function() {
						l[0].style.zoom = 1
					},
					200)
				} else {
					l[0].style.zoom = 0
				}
			}
		});
		if ($.isIE !== 6) {
			$(window).on("resize",
			function() {
				e.css({
					left: -1 * $(window).scrollLeft()
				})
			})
		}
	}
	f.init = n
});
F.module("superman:guide/superman_guide",
function(d, f, k) {
	F.addLog("superman:guide/superman_guide", {
		guideShow: "11007800000",
		guideClick: "11007800001"
	});
	var b = 1;
	var a = $("#s_wrap").find(".s-index-guide-content");
	var h = "";
	var l = ["s-lite", "s-user-name-top"];
	f.init = function() {
		F.use("superman:common/user_attr",
		function(n) {
			if (n.getAttr && n.getAttr("supermanGuide")) {
				n.setAttr("supermanGuide", "off")
			}
		});
		if ($.isIE6) {
			$("#index_guide_mask").css("height", $("#head").height())
		}
		h = a.hasClass("water") ? "water": "card";
		g();
		a.on("click", ".button",
		function(n) {
			e()
		}).on("click", ".close",
		function(n) {
			m();
			n.stopPropagation()
		});
		$(window).on("scroll", m);
		$(document).on("mousewheel", m);
		function m() {
			j();
			k.fire("guideClick", {
				clickType: "close",
				cardType: h
			})
		}
		$(window).on("resize",
		function(n) {
			g()
		});
		k.fire("guideShow", {
			cardType: h
		})
	};
	function g() {
		a.hide();
		var o = $("#s_main").offset();
		if ($.isIE6) {
			var q = $("#s_wrap").offset().left
		}
		var m = $("#head_wrapper").height();
		var n = $(document).width() / 2 - $("#s_main").width() / 2;
		switch (b) {
		case 1:
			var r = $("#s_menu_mine").offset();
			if ($("#s_menu_mine").length == 0) {
				j();
				return
			}
			var p = $.isIE6 ? n - 50 - q: n - 50;
			a.css({
				top: m - o.top + 57,
				left: p
			});
			break;
		case 2:
			var r = $("#s_menu_set").offset();
			var n = $(document).width() / 2 + $("#s_main").width() / 2 - $("#s_menu_set").outerWidth();
			if ($("#s_menu_set").length == 0) {
				j();
				return
			}
			var p = $.isIE6 ? n - 110 - q: n - 110;
			a.css({
				top: m - o.top + 57,
				left: p
			});
			break;
		case 3:
			var r = $("#s_mancard_newmusic").offset();
			if ($("#s_mancard_newmusic").length == 0) {
				e()
			} else {
				if (r.top == 0) {
					e()
				} else {
					var p = $.isIE6 ? r.left + 65 - q: r.left + 65;
					a.css({
						top: r.top - o.top + 20,
						left: p
					})
				}
			}
			break;
		case 4:
			var r = $(".s-more-bar").offset();
			if ($(".s-more-bar").length == 0) {
				j();
				return
			}
			var p = $.isIE6 ? r.left + 100 - q: r.left + 100;
			a.css({
				top: r.top - o.top - 70,
				left: p
			});
			break
		}
		a.show()
	}
	function e() {
		if ( !! window.s_session.userTips.manhGuide) {
			return
		}
		if ((h == "water" && b == "3") || (h == "card" && b == "4")) {
			j();
			k.fire("guideClick", {
				clickType: "nextStep",
				step: "finish",
				cardType: h
			});
			return
		}
		a.removeClass("guide-" + h + "-step-" + b);
		b++;
		a.hide();
		g();
		a.addClass("guide-" + h + "-step-" + b);
		a.show();
		k.fire("guideClick", {
			clickType: "nextStep",
			step: b,
			cardType: h
		});
		F.use("superman:common/user_attr",
		function(m) {
			m.setAttr("supermanNavGuide", "off")
		})
	}
	function c(m) {
		e();
		if (!window.s_session.userTips.manhGuide) {
			m.preventDefault()
		}
		m.stopPropagation()
	}
	function j() {
		F.use("superman:common/user_attr",
		function(m) {
			if (m.getAttr && m.getAttr("supermanGuide")) {
				m.setAttr("supermanGuide", "off")
			}
		});
		a.remove();
		$("#index_guide_mask").remove();
		s_session.index_guide = false;
		$.localstorage.remove("indexGuide");
		$(window).off("scroll", c);
		$(document).off("mousewheel", c)
	}
});