F.addLog("mantpl:news", {
	newsShow: "0200100000",
	recomWordShow: "1100000000",
	newsClick: "0200100001",
	hotsugClick: "0200200001",
	dustbinClick: "page-card-tpl-item",
	recomWordClick: "page-card-tpl-item",
	newsBanner: "0200300001",
	adsNewsFourTimes: "0200300002",
	adsEngShow: "0200300003",
	adsEngClick: "0200300004",
	topNewsImageClick: "0200100002",
	topNewsTextClick: "0200100003"
});
F.addLog("mantpl:news/index", ["cardItemLog"]);
F.module("mantpl:news/index_view",
function(e, g, h) {
	var c = e("superui:util/dot");
	function a(j) {
		var k = this;
		k.perCount = 16;
		k.passNum = 16;
		k.curRound = 1;
		k.topDom = j;
		k.ranDom = $(".s-news-rank-content", k.topDom);
		k.curImgNum = 0;
		k.hotWrap = $(".new-image-pool");
		k.hotCtrlNum = $(".carousel-ctrl-item", k.topDom).length;
		k.hotCtrlWid = $(".new-image-pool .img-item", k.topDom).width();
		k.ctrlWrap = $(".carousel-ctrl")
	}
	a.prototype = {
		renderHot: function(r, t, o) {
			var p = "";
			var l = 0;
			var j = "";
			var k = this;
			k.curRound = t;
			$(".news-meta-item").removeClass("news-viewed");
			for (var l = 0; l < k.perCount; l++) {
				var n = r[(l + k.passNum) % r.length];
				var s = n.title;
				var q = decodeURIComponent(n.url);
				var o = n.count;
				var m = k.ranDom.find('[data-index="' + l + '"]');
				m.removeClass("news-artist").find(".news-title .title-link .title-content").html(s).attr("href", q).end().find(".news-count").html(o).attr("title", "鎼滅储鎸囨暟" + o);
				k.ranDom.find(".v-detail").remove();
				if (n.isViewed == 1) {
					m.addClass("news-viewed")
				}
				if (n.isNew == 1) {
					m.addClass("news-artist")
				}
			}
			k.passNum += k.perCount
		},
		longHot: function(j) {
			var k = this;
			k.perCount = 12;
			k.passNum -= 8;
			$(".s-news-rank-content", k.topDom).addClass("s-news-rank-long");
			k.renderHot(j, k.curRound)
		},
		flashImg: function(k, l) {
			var j = this;
			if (!j.imgRef) {
				j.imgRef = $(".s-news-img", j.topDom).eq(0);
				j.imgHeight = j.imgRef.height();
				j.imgWidth = j.imgRef.width()
			}
			if (l === "mouseenter") {
				$(".s-news-img:animated").stop().css({
					"margin-top": "0",
					"margin-left": "0",
					width: j.imgWidth,
					height: j.imgHeight
				});
				k.animate({
					"margin-top": "-10px",
					"margin-left": "-10px",
					width: j.imgWidth + 20,
					height: j.imgHeight + 20
				})
			} else {
				k.animate({
					"margin-top": "0",
					"margin-left": "0",
					width: j.imgWidth,
					height: j.imgHeight
				})
			}
		},
		switchHotImg: function(n, m, l) {
			var k = this;
			if (k.stopSwitch && !l) {
				return
			}
			if ( !! m) {
				var j = parseInt(k.curImgNum, 10) + n;
				j = j < 0 ? (j + k.hotCtrlNum) : j;
				k.curImgNum = j % k.hotCtrlNum
			} else {
				if (n) {
					k.curImgNum = n
				} else {
					k.curImgNum = (parseInt(k.curImgNum, 10) + 1) % k.hotCtrlNum
				}
			}
			clearTimeout(k.cTimmer);
			k.ctrlWrap.find(".carousel-ctrl-cur").removeClass("carousel-ctrl-cur").end().find('[data-index="' + k.curImgNum + '"]').addClass("carousel-ctrl-cur");
			k.hotWrap.stop().animate({
				left: ( - 1 * k.curImgNum * k.hotCtrlWid) + "px"
			},
			function() {
				k.carousel()
			})
		},
		carousel: function() {
			var j = this;
			j.cTimmer = setInterval(function() {
				j.switchHotImg(1, true)
			},
			5000)
		},
		createRecom: function(j, k) {
			_ctx = this;
			$.ajaxpost(s_domain.baseuri + "/news/data/newrelatewords", {
				title: $.trim($(j).find("h2 .s-yahei").text()),
				rid: $(j).attr("data-rid")
			},
			function(n) {
				var l = n.errNo,
				q = n.data;
				if (l == "0") {
					var p = _ctx.topDom.find(".c-recommend");
					if (p) {
						p.remove()
					}
					var r = "";
					for (var o = 0; o < q.length; o++) {
						r = r + '<a href="' + decodeURIComponent(q[o].recomHref) + '" target="_blank" class="recom-link">' + q[o].recomTitle + "</a>"
					}
					var m = '<div class="c-recommend"><i class="c-icon"></i><span class="c-gray">涓烘偍鎺ㄨ崘锛�</span>' + r + "</div>";
					$(j).find(".from").after(m);
					k && k(j)
				} else {
					if (l == "501") {}
				}
			})
		},
		getRecomWords: function(k) {
			var m = [],
			l = $(k).find(".c-recommend a");
			for (var j = 0; j < l.length; j++) {
				m.push('"' + $.trim($(l[j]).text()) + '"')
			}
			return m
		},
		getEngWords: function(k) {
			var m = [],
			l = $(k).find(".s-news-content-imgs a");
			for (var j = 0; j < 3; j++) {
				m.push($.trim($(l[j]).attr("data-itemId")))
			}
			return m
		},
		getHotWords: function() {
			var l = [],
			k = this.ranDom.find(".title-content");
			for (var j = 0; j < k.length; j++) {
				l.push('"' + $.trim($(k[j]).text()) + '"')
			}
			return l
		},
		waitView: function(l, j, m) {
			var k = this;
			if (l.type === "mouseenter") {
				k.ranDom.find(".v-detail").hide();
				clearTimeout(k.onTimer);
				clearTimeout(k.offTimer);
				k.onTimer = setTimeout(function() {
					j.parents(".news-meta-item");
					d()
				},
				500)
			} else {
				if (l.type === "mouseleave") {
					clearTimeout(k.onTimer);
					k.hideDetail(j)
				}
			}
		},
		viewDetail: function(j, o) {
			var m = $.trim($(".title-content", j).html()),
			k = this;
			for (var l in o) {
				if (o[l].title === m) {
					o[l].isNew = 0;
					o[l].isViewed = 1;
					break
				}
			}
			var n = $(".s-news-rank-list .one-item", k.topDom).length;
			$.ajaxget("/home/news/data/mannewssug?word=" + m,
			function(p) {
				if (p.data.length < 1) {
					return
				}
				var t = j.offset().top - $(".s-news-rank-content", k.topDom).offset().top + 20;
				var r = parseInt(j.closest("[data-index]").attr("data-index"));
				if (r > 7) {
					t -= 130
				}
				if ($.browser.firefox) {
					t += 10
				} else {
					if ($.isIE == 6) {
						t -= 3
					}
				}
				var q = f(p.data, t, (r > 7), +r % 2);
				if ( !! q) {
					var s = $(q);
					j.append(s);
					if ($.isIE === 6) {
						setTimeout(function() {
							s.css({
								zoom: 1
							})
						},
						200)
					}
				}
			})
		},
		showDetail: function(k, l) {
			var j = k.find(".v-detail");
			k.parents(".s-news-rank-content").find(".v-detail").hide();
			if (j[0]) {
				j.show()
			} else {
				this.viewDetail(k, l)
			}
			return true
		},
		hideDetail: function(j) {
			j.find(".v-detail").hide()
		}
	};
	function f(m, n, o, l) {
		var k = '<div class="v-detail#{down}#{right}" style="top:#{top}px;"><div class="detail-content">#{content}<div class="v-arrow"><em></em></div></div></div>';
		if (!m || !m.length) {
			return false
		}
		var j = b(m[0]) + i(m[0]) + b(m[1]);
		return $.formatString(k, {
			content: j,
			top: n,
			down: o ? " v-down": "",
			right: l ? " v-right": " v-left"
		})
	}
	function b(k) {
		if (!k) {
			return ""
		}
		k.url = decodeURIComponent(k.url);
		var j = '<div class="hot-words-item"><span class="dot"></span><a class="word-title" href="#{url}" target="_blank" title="#{realtitle}">#{title}</a></div>';
		return $.decodeHTML($.formatString(j, k))
	}
	function i(k) {
		var j = '<div class="hot-words-summary">#{summary}</div>';
		return $.decodeHTML($.formatString(j, k))
	}
	function d() {
		h.fire("hotsugClick", {
			clickType: "layerShow",
			newsType: "words"
		})
	}
	return a
});
F.module("mantpl:news/index",
function(c, g, p) {
	var a = c("superui:util/dot");
	var m = $.parseJSON($("#news_hot_data").html());
	var j = window.Thunder.get();
	var q = $.parseJSON($("#news_banner_data").html());
	var e = c("mantpl:news/index_view");
	var i = $("#s_xmancard_news");
	var f = $(".s-news-banner-wrap");
	var h = new e(i);
	var l = 2;
	var o = c("superui:component/tips");
	var d = new o({
		target: $("#head"),
		identity: "ExceedTipsNews",
		content: "浠婂ぉ鍙敜鎴戝お澶氭鍟︼紝</br>鏄庡ぉ鍐嶆潵璋冩暀灏忓害鍚э紒`(*鈭鈭�*)鈥�",
		timing: 2000,
		autoShow: false,
		theme: "exceedtipnews"
	});
	var k = 0;
	var n = [];
	function b() {
		this.onTimer = null;
		this.offTimer = null;
		this.hotRound = 1
	}
	b.prototype = {
		constructor: b,
		init: function() {
			this.blockName = "news";
			this.addEvent();
			this.fix();
			this.saveFistRids();
			var r = this.stringify(h.getHotWords());
			p.fire("newsShow", {
				showType: "hotword",
				words: r,
				pagenum: "0"
			});
			$(".s-news-rank-wrapper .s-rank-title").addClass("s-opacity-border1-bottom");
			this.itemNum = $(".s-news-item").length
		},
		stringify: function(r) {
			return "[" + r.join(",") + "]"
		},
		setTopDom: function(r) {
			i = r
		},
		fix: function() {
			i.find(".s-news-item:eq(0)").addClass("first")
		},
		saveFistRids: function() {
			i.find(".s-news-list-wrapper:first .s-news-item").each(function() {
				if ($(this).attr("data-rid")) {
					n.push($(this).attr("data-rid"))
				} else {
					n.push("0")
				}
			})
		},
		getNotNewsPos: function(s) {
			var r = 0;
			i.find(".s-news-item").each(function(t) {
				if ($(this).hasClass(s)) {
					r = t;
					return false
				}
			});
			return r
		},
		showLayer: function(t, s) {
			var u, r = this;
			if ($.isIE6) {
				u = $(window).height() / 2 + $(window).scrollTop()
			} else {
				u = "50%"
			}
			F.use("superui:component/dialog",
			function(v) {
				r.DelPannel = new v({
					identity: "newsDel",
					content: '<div class="pannel-content">纭畾涓嶆劅鍏磋叮鍚楋紵</br>浠ュ悗杩欑被淇℃伅浼氬皯鍑虹幇鍝掞紒(=锟Ｏ夛浚=)鉁�</div>',
					hasClose: true,
					theme: r.blockName + "-pannel",
					autoShow: true,
					width: 400,
					top: u,
					dus: s,
					buttons: [function(w) {
						r.sendTip(w);
						if ($(s).hasClass("extends-dustbin")) {
							r.delExtends(s, 1)
						} else {
							r.delNew(s)
						}
						p.fire("dustbinClick", {
							nodename: "ok"
						})
					},
					function() {
						p.fire("dustbinClick", {
							nodename: "cancel"
						})
					}]
				});
				if ($.isIE === 6) {
					$("#sui-dialog-mask").height($(document.body).height())
				}
			});
			$(".sui-dialog-footer").prepend('<a href="javascript:;" onclick="return false;" class="noremind"><i class="checkbox"></i>涓嶅啀鎻愮ず</a>');
			if (t == "1" || t == "2") {
				$(".checkbox").addClass("checkboxbk")
			}
			$(".sui-dialog-news-pannel").delegate(".noremind", "click",
			function(v) {
				$(".checkbox").toggleClass("checkboxbk");
				p.fire("dustbinClick", {
					nodename: "noremind"
				});
				v.stopPropagation()
			})
		},
		sendTip: function(s) {
			var r = s.target.prev().find(".checkbox");
			if (r.hasClass("checkboxbk")) {
				F.use("superman:common/user_attr",
				function(t) {
					t.setAttr("delrecLayer", "1")
				})
			} else {
				F.use("superman:common/user_attr",
				function(t) {
					t.setAttr("delrecLayer", "0")
				})
			}
		},
		delNew: function(r) {
			_ctx = this;
			$.ajaxpost(s_domain.baseuri + "/news/submit/mannewsoperation", {
				cmd: "remove",
				id: $(r).parents(".s-news-item").attr("data-rid")
			},
			function(t) {
				var s = t.errNo;
				if (s == "0") {
					var u = $(r).parents(".s-news-item");
					var v = u.parents(".s-news-list-wrapper");
					_ctx.sendThunderDislike(u);
					u.remove();
					if (v.children().length == 0) {
						v.remove()
					}
					$(".s-news-list-wrapper .s-news-item:first").addClass("first");
					_ctx.itemNum--;
					if (_ctx.itemNum < 7) {
						F.call("mancard:skeleton/presenter", "judgeFire")
					}
				} else {
					if (s == "501") {
						d.show();
						if ($.isIE6) {
							d.tips.css({
								top: $(window).height() / 2 + $(window).scrollTop()
							})
						} else {
							d.tips.css({
								top: "50%"
							})
						}
					}
				}
			})
		},
		sendThunderDislike: function(t) {
			var v = $(t),
			A = false,
			x = "",
			B = "",
			u = "",
			C = "",
			r = "",
			y = false;
			extra = "";
			while (v.attr("data-rid") == undefined && v.attr("id") != "s_ctner_contents") {
				if (v.attr("data-click") != undefined) {
					y = true;
					x = v.attr("data-click").toLowerCase();
					B = t.nodeName.toLowerCase();
					if (x == "log_link") {
						if (v[0] && v[0].nodeName && v[0].nodeName.toLowerCase() == "a") {
							C = $.trim(v.attr("data-title")) || $.trim(v.attr("title")) || $.trim(v.text());
							var I = $.trim(v.attr("href"));
							if (!I.indexOf("#") == 0 && !I.indexOf("javascript") == 0) {
								r = I
							}
						}
						if (B != "img") {
							B = "a"
						}
						x = "outlink"
					} else {
						if (x.indexOf("log_btn") != 1) {
							u = x.replace("log_btn_", "");
							x = "btn";
							r = "";
							C = $.trim(v.attr("data-title")) || $.trim(v.attr("title")) || $.trim(v.text())
						}
					}
				}
				v = v.parent();
				if (v.attr("data-extra")) {
					extra = v.attr("data-extra")
				}
			}
			var G = {
				cst: 2,
				tid: 52,
				logExtra: {
					rid: v.attr("data-rid"),
					url: v.attr("data-url"),
					clicktype: x,
					title: C,
					flow: 2,
					extra: extra,
					source: [],
					tag: [],
					content: []
				}
			};
			var E = v.attr("data-log"),
			s = [];
			if (E) {
				E = E.replace(/\;$/g, "");
				s = E.split(";");
				var z = [];
				var H = "";
				var D = "";
				for (var w = 0; w < s.length; w++) {
					z = s[w].split(":");
					H = z[0];
					D = z[1];
					G.logExtra[H] = D
				}
			}
			G.logExtra = $.stringify(G.logExtra);
			G.logInfo = "l4";
			j.send(G)
		},
		delExtends: function(r, s) {
			_ctx = this;
			$.ajaxpost(s_domain.baseuri + "/other/submit/setadstatus", {
				sortname: "adsNewsFour",
				aid: $(r).attr("data-aid")
			},
			function(u) {
				var t = u.errNo;
				$.localstorage.remove("adsNewsFourTimes");
				if (t == "0" && s) {
					var v = $(r).parents(".s-news-item");
					var w = v.parents(".s-news-list-wrapper");
					_ctx.sendThunderDislike(v);
					v.remove();
					if (w.children().length == 0) {
						w.remove()
					}
					$(".s-news-list-wrapper .s-news-item:first").addClass("first");
					_ctx.itemNum--;
					if (_ctx.itemNum < 7) {
						F.call("mancard:skeleton/presenter", "judgeFire")
					}
					p.fire("adsNewsFourTimes", {
						clickType: "close"
					})
				} else {
					if (t == "501") {
						d.show();
						if ($.isIE6) {
							d.tips.css({
								top: $(window).height() / 2 + $(window).scrollTop()
							})
						} else {
							d.tips.css({
								top: "50%"
							})
						}
					}
				}
			})
		},
		decreaseExtends: function() {
			var r = this;
			var s = i.find(".extends-dustbin");
			var t = s.closest(".s-news-item");
			if (s.length) {
				p.fire("adsNewsFourTimes", {
					clickType: "show"
				});
				var u = s.attr("data-aid");
				if ($.localstorage.get("adsNewsFourAid").value != u) {
					$.localstorage.remove("adsNewsFourTimes");
					$.localstorage.set("adsNewsFourAid", u)
				}
				if ($.localstorage.get("adsNewsFourTimes").value == "NaN") {
					$.localstorage.set("adsNewsFourTimes", s.attr("data-times"))
				} else {
					if ($.localstorage.get("adsNewsFourTimes").value) {
						$.localstorage.set("adsNewsFourTimes", parseInt($.localstorage.get("adsNewsFourTimes").value) - 1)
					} else {
						$.localstorage.set("adsNewsFourTimes", s.attr("data-times"))
					}
				}
				if ($.localstorage.get("adsNewsFourTimes").value <= "1") {
					r.delExtends(s);
					return
				}
			}
		},
		addEvent: function() {
			var r = this;
			var v = $(".s-news-list-wrapper", i);
			var u;
			i.delegate(".s-news-item", "mouseenter",
			function(w) {
				if ($.isIE === 6) {
					$(".dustbin", this).css("display", "block")
				}
				w.stopPropagation()
			}).delegate(".s-news-item", "mouseleave",
			function(w) {
				if ($.isIE === 6) {
					$(".dustbin", this).css("display", "none")
				}
				w.stopPropagation()
			}).delegate(".dustbin", "click",
			function(w) {
				_ctxdus = this;
				$.ajaxget(s_domain.baseuri + "/other/data/mancardlayer?tabid=" + window.s_session.curmod,
				function(y) {
					var x = y;
					if (x.showFloat == "0") {
						if ($(_ctxdus).hasClass("extends-dustbin")) {
							r.delExtends(_ctxdus, 1)
						} else {
							r.delNew(_ctxdus)
						}
					} else {
						r.showLayer(x.noremind, _ctxdus)
					}
				});
				u && u.close();
				w.stopPropagation()
			}).delegate(".dustbin", "mouseenter",
			function(w) {
				_ctxdus = $(this);
				u = new o({
					target: _ctxdus,
					identity: "noInterestTipsNews",
					content: "涓嶆劅鍏磋叮",
					autoShow: true,
					arrowUp: false,
					arrowLeft: "center",
					align: "center",
					theme: "nointeresttipnews"
				});
				$(".sui-tips-nointeresttipnews").css({
					top: "+=2"
				});
				w.stopPropagation()
			}).delegate(".dustbin", "mouseleave",
			function(w) {
				u && u.close();
				w.stopPropagation()
			}).delegate(".s-news-item a[href]", "click",
			function(x) {
				if (!$(this).attr("data-src")) {
					var w = $(this).parents(".s-news-item");
					w.addClass("news-viewed");
					if (s_session.sid.indexOf("18836") > -1 && w.attr("data-relatewords") && $(this).find(".from")) {
						h.createRecom(w,
						function(z) {
							var y = r.stringify(h.getRecomWords(z));
							p.fire("recomWordShow", {
								opType: "recomshow",
								rid: z.attr("data-rid"),
								words: y
							})
						});
						r.sendRecomLog(w)
					}
					r.handleCRids($(this).parents(".s-news-item").attr("data-rid"))
				}
				x.stopPropagation()
			}).delegate(".s-news-item a[href]", "mousedown",
			function(y) {
				var x = $(this).parents(".s-news-item");
				if (!$(this).attr("data-src")) {
					if (!/pos-0/g.test(x.attr("data-log"))) {
						x.attr("data-log", x.attr("data-log") + "pos-0:" + n.indexOf(x.attr("data-rid")) + ";")
					}
					if (x.find(".dustbin").hasClass("extends-dustbin")) {
						var w = x.find(".s-text-content h2 a");
						p.fire("adsNewsFourTimes", {
							clickType: "click",
							url: w.attr("href")
						})
					}
					if (x.hasClass("eng-hot-word")) {
						p.fire("adsEngClick", {
							clickType: "click",
							itemId: $(this).attr("data-itemId") || x.attr("data-itemId"),
							url: $(this).attr("href"),
							pos: r.getNotNewsPos("eng-hot-word"),
							subpos: $(this).attr("data-pos"),
							title: $.trim($(this).find(".s-news-text").text()) || $(this).attr("title")
						})
					}
				} else {
					if (x.hasClass("eng-hot-word")) {
						p.fire("adsEngClick", {
							clickType: "srcClick",
							url: $(this).attr("href"),
							pos: r.getNotNewsPos("eng-hot-word"),
							title: $.trim($(this).text()),
							itemId: x.attr("data-itemId")
						})
					}
				}
			}).delegate(".s-news-rank-wrapper .hot-refresh", "click",
			function(x) {
				h.renderHot(m.banner, r.hotRound++);
				p.fire("newsClick", {
					clickType: "wordsChange"
				});
				k++;
				var w = r.stringify(h.getHotWords());
				p.fire("newsShow", {
					showType: "hotword",
					words: w,
					pagenum: k
				})
			}).delegate(".news-title .title-link", "mouseenter mouseleave",
			function(w) {
				h.waitView(w, $(this), m.banner);
				w.stopPropagation()
			}).delegate(".news-title .title-link a", "click",
			function(y) {
				$(this).parents(".news-meta-item").removeClass("news-viewed").removeClass("news-artist").addClass("news-viewed");
				var x = $.trim($(this).html());
				$.ajaxpost("/home/news/submit/mannewsview", {
					title: x
				});
				for (var w in m.banner) {
					if (m.banner[w].title == $.decodeHTML($.trim($(this).html()))) {
						m.banner[w].isViewed = 1;
						m.banner[w].isNew = "0"
					}
				}
			}).delegate(".title-content", "click",
			function(x) {
				var w = $(this);
				p.fire("newsClick", {
					clickType: "wordTopic",
					newsType: "words",
					url: $(this).attr("href"),
					title: $(this).text(),
					pagenum: k,
					newsindex: $(this).closest(".news-meta-item").attr("data-index")
				});
				x.stopPropagation()
			}).delegate(".word-title", "click",
			function(x) {
				var w = $(this);
				p.fire("hotsugClick", {
					clickType: "wordTopic",
					newsType: "words",
					url: $(this).attr("href")
				});
				x.stopPropagation()
			}).delegate(".title-text a", "click",
			function(w) {
				p.fire("hotsugClick", {
					clickType: "wordTopic",
					newsType: "topLink",
					url: $(this).attr("href")
				})
			}).delegate("s_news_banner", "click",
			function(w) {
				p.fire("hotbannerClick", {
					clickType: "",
					newsType: "topLink",
					url: $(this).attr("href")
				})
			}).delegate(".s-news-banner-wrap", "click",
			function() {
				p.fire("newsBanner", {
					clickType: "click",
					url: q.url,
					title: q.title,
					bannerId: q.bannerId
				})
			}).delegate(".s-text-banner [data-click]", "click",
			function(w) {
				p.fire("topNewsTextClick", {
					clickType: $(this).attr("data-click"),
					url: $(this).attr("href") || $(this).parent().attr("href")
				});
				w.stopPropagation()
			}).delegate(".s-image-banner [data-click]", "click",
			function(w) {
				p.fire("topNewsImageClick", {
					clickType: $(this).attr("data-click"),
					url: $(this).attr("href") || $(this).parent().attr("href")
				});
				w.stopPropagation()
			});
			if ($.isIE !== 6) {
				r.browserFollow()
			} else {
				r.ieFollow()
			}
			var s = false;
			var t = false;
			p.listen("mancard:skeleton/card", "cardloaded",
			function(z) {
				if (z.loadData.rids) {
					for (var A = 0; A < z.loadData.rids.length; A++) {
						n.push(z.loadData.rids[A])
					}
				}
				if ( + z.cardId === +l) {
					i.removeClass("s-news-split")
				}
				if (z.cardId == l && (!t)) {
					t = true;
					r.decreaseExtends();
					if (i.find(".s-news-item.eng-hot-word").length) {
						var D = true;
						var w = i.find(".s-news-item.eng-hot-word");
						$(window).on("scroll",
						function() {
							if (($(window).height() + $(document).scrollTop()) >= (w.offset().top + w.height() / 2) && D) {
								setTimeout(function() {
									var I = r.stringify(h.getEngWords(w));
									if ($(w).hasClass("eng-word")) {
										p.fire("adsEngShow", {
											showType: "show",
											pos: r.getNotNewsPos("eng-hot-word"),
											itemId: I
										})
									} else {
										p.fire("adsEngShow", {
											showType: "show",
											pos: r.getNotNewsPos("eng-hot-word"),
											itemId: $(w).attr("data-itemId")
										})
									}
									D = false
								},
								100);
								D = false
							}
						})
					}
				}
				if (z.cardId == l && h.perCount != 12 && z.loadData.isEnd == "0") {
					r.itemNum += 5;
					if (!s) {
						s = true;
						if (q && !!( + q.isViewed)) {
							var E = $.url.escapeSSL(decodeURIComponent(q.img));
							f.css("background", "url(" + E + ") no-repeat");
							f.removeClass("news-banner-hidden");
							p.fire("newsBanner", {
								clickType: "show",
								title: q.title,
								bannerId: q.bannerId
							})
						}
					} else {
						h.renderHot(m.banner, r.hotRound++);
						var H = r.stringify(h.getHotWords());
						k++;
						p.fire("newsShow", {
							showType: "hotword",
							words: H,
							pagenum: k
						})
					}
					var G = i.attr("data-waterpara").split(";");
					var B = 0;
					for (var A in G) {
						var x = G[A].split("=");
						var y = x[0];
						var C = x[1];
						if (y == "pos") {
							B = parseInt(C)
						}
					}
					i.attr("data-waterpara", "version=" + z.loadData.version + ";pos=" + (B + $(z.loadData.html).children().length) + ";" + z.loadData.waterpara)
				}
			});
			p.listen("superui:component/dialog", "dialogHide",
			function(y) {
				var x = y.obj.options("dus");
				if ($.isIE === 6) {
					var w = $(x).parents(".item-wrapper");
					$(x).css("display", "none");
					$(".subscribe", w).css("display", "none");
					$(".img-click", w).css("display", "block")
				}
			})
		},
		roller: function(s, r, v, x) {
			if (!this.nWrap) {
				this.nWrap = $(".s-news-wrapper", i);
				this.nOffset = this.nWrap.offset()
			}
			var z = this.nWrap;
			var w = s.offset();
			var y = s.height();
			var u = i.width();
			var t = this.nOffset;
			if (z.offset().top - (w.top + y) < x && v && i.is(":visible")) {
				r.css({
					position: "fixed",
					top: Math.min(y + x, z.height() + t.top - $(window).scrollTop() - r.outerHeight(true)),
					right: ($(window).width() - (t.left + u) - 20 + $(window).scrollLeft())
				})
			} else {
				r.css({
					position: "absolute",
					top: 0,
					right: "5px"
				})
			}
		},
		browserFollow: function() {
			var v = $(".s-news-rank-wrapper", i);
			var u = $("#s_top_wrap");
			var s = this;
			var t = false;
			function r(w) {
				if (!u.find("#s_menu_gurd")[0]) {
					s.roller(u, v, t, 15)
				} else {
					s.roller(u, v, t, 30)
				}
			}
			p.listen("superman:page/scroll", "outMenu",
			function(w) {
				if (w.out === true) {
					t = true;
					$(window).bind("scroll", r);
					$(window).bind("resize", r)
				} else {
					t = false;
					$(window).unbind("scroll", r);
					$(window).unbind("resize", r);
					v.removeAttr("style")
				}
			});
			$(window).bind("resize",
			function() {
				if (!s.nWrap) {
					s.nWrap = $(".s-news-wrapper", i)
				}
				s.nOffset = s.nWrap.offset()
			});
			p.listen("mancard:skeleton/presenter", "switchCard",
			function(w) {
				if ( + w.toCard === l) {
					if (!s.nWrap) {
						s.nWrap = $(".s-news-wrapper", i)
					}
					s.nOffset = s.nWrap.offset()
				}
			})
		},
		ieFollow: function() {
			var v = $(".s-news-rank-wrapper", i);
			var s = $("#s_ctner_contents");
			var r = 0;
			var t = v.height();
			function u() {
				if ($(this).scrollTop() > r) {
					_top = Math.min(Math.max($(this).scrollTop() - 322, 0), Math.abs(s.height() - t - 100))
				} else {
					_top = Math.min(Math.max($(this).scrollTop() - 290, 0), Math.abs(s.height() - t - 100))
				}
				v.stop().animate({
					top: _top
				});
				r = $(this).scrollTop()
			}
			$(window).bind("scroll", u)
		},
		sendRecomLog: function(s) {
			var r = this;
			var t;
			s.delegate(".recom-link", "click",
			function(v) {
				$(this).css("color", "#666");
				var u = r.stringify(h.getRecomWords(s));
				p.fire("recomWordClick", {
					nodename: "recomLink",
					url: $(this).attr("href") || "",
					title: $.trim($(this).text()) || "",
					rid: s.attr("data-rid"),
					words: u
				});
				v.stopPropagation()
			}).delegate(".recom-link", "mouseenter",
			function(v) {
				var u = this;
				t = setTimeout(function() {
					var w = r.stringify(h.getRecomWords(s));
					p.fire("recomWordShow", {
						onType: "hover",
						url: $(u).attr("href") || "",
						title: $.trim($(u).text()) || "",
						rid: s.attr("data-rid"),
						words: w
					})
				},
				500);
				v.stopPropagation()
			}).delegate(".recom-link", "mouseleave",
			function(u) {
				clearTimeout(t)
			})
		},
		handleCRids: function(t) {
			var u = window.s_session.crids || (window.s_session.crids = "");
			if ( !! t) {
				var s = []; !! u && (s = u.split(","));
				s.indexOf(t) === -1 || (s.splice(s.indexOf(t), 1));
				s.unshift(t);
				s.length > 10 && (s.length = 10);
				var r = s.join();
				window.s_session.crids = r
			}
		}
	};
	return new b()
});
F.use("mantpl:news/index",
function(a) {
	a.init()
});