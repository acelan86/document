F._setMod("tipsplus");
F._fileMap({
	"/js/min_tips_1890933e.js": ["config", "log/log", "start/tips_start"],
	"/js/tips_mods_7c671139.js": ["mods/new_card", "mods/top_menu", "mods/tutorial", "mods/weather", "mods/cardsub", "mods/card_AD", "mods/skin", "mods/new_music"],
	"/css/min_tips_fff005c3.css": ["tips.css"]
});
F._firstScreenCSS = F._firstScreenCSS || [];
F._firstScreenCSS.push("/css/min_tips_fff005c3.css");
F._firstScreenJS = F._firstScreenJS || [];
F._firstScreenJS.push("/js/min_tips_1890933e.js");
F.addLog("tipsplus:start", {
	show: "1400000000",
	click: "1400000001"
});
F.module("tipsplus:start/tips_start",
function(d, c, b) {
	function e() {}
	e.prototype = {
		constructor: e,
		init: function() {
			this.initView()
		},
		initView: function() {
			var g = this,
			f = {};
			$.ajaxget(s_domain.baseuri + "/xman/data/tipspluslist",
			function(h) {
				if (h.errNo == 0) {
					data = h.data;
					if (!g.hasData(data)) {
						return
					} else {
						f = data
					}
					if (window.s_session) {
						s_session.tipsData = f
					}
					g.loadTipsCss();
					g.render(data);
					g.addEvent()
				} else {}
			})
		},
		hasData: function(f) {
			var h, g;
			for (h in f) {
				g = f[h];
				if (g.length) {
					return true
				}
			}
			return false
		},
		loadTipsCss: function() {
			$.loadCss(s_domain.staticUrl + "static/tipsplus/css/min_tips_fff005c3.css")
		},
		render: function(f) {
			$("#head").addClass("s-tips");
			this.redDot(f.redDot);
			this.newWord(f.newWord);
			this.layer(f.layer)
		},
		addEvent: function() {
			var f = this;
			this.switchTab(function(i) {
				var h = $('#s_ctner_menus [data-id="' + i.to + '"]'),
				j = h.data("data-tid"),
				g = h.data("data-v");
				if (j) {
					$(".marked", h).remove();
					f.update(j, g)
				}
			});
			$("#u_sp, #s_user_name_menu, #s_upfunc_menus").on("click", "[data-tid]",
			function() {
				var h = $(this),
				i = h.data("data-tid"),
				g = h.data("data-v");
				if (i) {
					$(".marked", h).remove();
					f.update(i, g)
				}
			});
			$(".s-tips").on("mousedown", ".s-tips-entity [data-log]",
			function() {
				var k, g, i, h, j;
				k = $(this).attr("data-log") || "";
				g = k.split(",");
				i = g[0] || "";
				h = g[1] || "";
				j = g[2] || "";
				b.fire("click", {
					cmd: h,
					clickType: h,
					url: "",
					title: j,
					cardId: i
				})
			});
			b.listen(["tipsplus:mods/cardsub", "tipsplus:mods/new_music"], "clickLog",
			function(g) {
				b.fire("click", {
					clickType: g.tid,
					url: "",
					title: "",
					cardId: g.url
				})
			});
			b.listen(["tipsplus:mods/top_menu", "tipsplus:mods/skin", "tipsplus:mods/new_card", "tipsplus:mods/cardsub", "tipsplus:mods/weather", "tipsplus:mods/tutorial", "tipsplus:mods/card_AD", "tipsplus:mods/new_music"], "showLog",
			function(g) {
				b.fire("show", {
					showType: g.tid,
					url: "",
					title: "",
					cardId: g.cardId
				})
			})
		},
		redDot: function(g) {
			var f = this;
			$.each(g,
			function(u, t) {
				var j = t.id,
				r = t.locId,
				n = t.dir,
				m, p, v, q;
				if (t.extend && t.extend.tplname) {
					p = $("#s_xmancard_" + t.extend.tplname);
					v = p.find(t.extend.tab);
					p.addClass("red-dot");
					if (v.length) {
						var h = p.offset(),
						s = v.offset(),
						o = parseInt(v.css("margin-left"), 10),
						l = parseInt(v.css("padding-left"), 10),
						k = s.left - h.left + o + l + v.width(),
						w = s.top - h.top;
						q = $('<span class="marked ' + n + '" style="left: ' + k + "px; top: " + w + 'px"><i>&#8226</i></span>');
						p.append(q);
						v.on("click",
						function() {
							q.remove();
							f.update(j, 1)
						})
					}
				}
				m = $('[data-tid="' + r + '"]');
				m.addClass("red-dot");
				m.append('<span class="marked ' + n + '"><i>&#8226</i></span>');
				m.data("data-tid", j);
				m.data("data-v", 0)
			})
		},
		newWord: function(g) {
			var f = this;
			$.each(g,
			function(u, t) {
				var j = t.id,
				r = t.locId,
				n = t.dir,
				m, p, v, q;
				if (t.extend && t.extend.tplname) {
					p = $("#s_xmancard_" + t.extend.tplname);
					v = p.find(t.extend.tab);
					p.addClass("new-word");
					if (v.length) {
						var h = p.offset(),
						s = v.offset(),
						o = parseInt(v.css("margin-left"), 10),
						l = parseInt(v.css("padding-left"), 10),
						k = s.left - h.left - 2,
						w = (v.height() - 16) / 2;
						q = $('<span class="marked ' + n + '" style="left: ' + k + "px; top: " + w + 'px"></span>');
						p.append(q);
						v.on("click",
						function() {
							q.remove();
							f.update(j, 1)
						})
					}
				}
				m = $('[data-tid="' + r + '"]');
				m.addClass("new-word");
				m.append('<span class="marked ' + n + '"></span>');
				m.data("data-tid", j);
				m.data("data-v", 0)
			})
		},
		layer: function(g) {
			var f = this;
			$.each(g,
			function(h, j) { (function(n) {
					var o = n.id,
					m = n.locId,
					k = n.type,
					i = "",
					l;
					if (m === "head") {
						l = $("#head");
						i = " s-isindex-wrap"
					} else {
						l = $('[data-tid="' + m + '"]')
					}
					if (l.length) {
						b.use("mods/" + k,
						function(p) {
							var q = new p();
							q.init({
								tid: m,
								elem: l,
								text: n.text,
								link: n.link,
								pic: n.pic,
								btnText: n.btnText,
								iSHook: i,
								extend: n.extend
							});
							q.done(function() {
								f.update(o, 1)
							});
							if ($.isFunction(q.show)) {
								q.show()
							}
						})
					}
				})(j)
			})
		},
		switchTab: function(f) {
			b.listen("superplus:skeleton/skeleton_ext", "viewChange",
			function(g) {
				f(g)
			})
		},
		update: function(g, f) {
			$.ajaxpost(s_domain.baseuri + "/xman/submit/tipsplusupdate", {
				id: g,
				type: f
			},
			function(h) {})
		}
	};
	var a = new e();
	c.init = function() {
		a.init()
	}
});
F.call("tipsplus:start/tips_start", "init");