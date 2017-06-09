F._setMod("newmusic");
F._fileMap({
	"/js/newmusic_min_eb785396.js": ["config", "log", "index"],
	"/js/newmusic_player_1f5d059e.js": ["page/api", "mod/slider", "mod/lrc", "muplayer", "mod/scroll", "player"],
	"/css/newmusic_min_0048b8c6.css": ["music.css"]
});
F._useConfig = true;
F._firstScreenJS = F._firstScreenJS || [];
F.addLog("newmusic:player", {
	musicClick: "7000000001"
});
F.addLog("newmusic:player", {
	musicDisplay: "7000000000"
});
F.addLog("newmusic:index", {
	musicDisplay: "7000000000"
});
F.addLog("newmusic:player", {
	listen60s: "7000000002"
});
F.module("newmusic:index",
function(b, c, m) {
	var i = $("#s_mancard_newmusic");
	var f = i.find("#lyc_panel");
	var l = false;
	var k = $("#s_ctner_contents").offset().top;
	var e = $.isIE < 7 ? 0 : 36;
	var j = false;
	var h = $("#s_main").offset().left;
	var d;
	var g;
	i.css("left", h);
	c.init = function() {
		j = true;
		if (i.find(".p-panel").height() === 0 || i.find(".p-panel").width() === 0) {
			i.find(".bg").hide()
		}
		if ($.browser.ie < 8) {
			document.execCommand("BackgroundImageCache", false, true)
		}
		if ($.browser.ie == "10" || $.browser.ie == "11") {
			i.find(".bg-ie").show()
		} else {
			i.find(".bg-ie").hide()
		}
		setTimeout(function() {
			a()
		},
		50);
		if (l) {
			return false
		}
		$(window).on("scroll",
		function(n) {
			setTimeout(function() {
				a("scroll")
			},
			200)
		}).on("resize",
		function(n) {
			setTimeout(function() {
				k = $("#s_ctner_contents").offset().top;
				a("resize", true)
			},
			200)
		});
		i.on("mouseover",
		function() {
			if (!l) {
				F.call("newmusic:player", "init");
				l = true
			}
		});
		setTimeout(function() {
			i.find(".p-sidebar .s-card-plus-tip").fadeOut(300)
		},
		5000);
		m.listen("mancard:skeleton/presenter", ["cardloaded"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME)
			},
			200)
		});
		m.listen("mancard:skeleton/presenter", ["switchCard"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME, true)
			},
			200)
		});
		m.listen("mancard:skeleton/card", ["cardloaded"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME)
			},
			200)
		});
		m.listen("mancard:skeleton/card", ["cardLoadDone"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME)
			},
			200)
		});
		m.listen("mancard:skeleton/card", ["cardinitloaded"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME)
			},
			200)
		});
		m.listen("superman:page/scroll", ["bottomshow", "bottomhide"],
		function(n) {
			if (n._EVENT_NAME == "bottomshow") {
				e = 0;
				if ($("#f_bottom_container").css("display") == "none") {
					a(n._EVENT_NAME)
				}
			} else {
				e = 0;
				if ($("#f_bottom_container").css("display") != "none") {
					a(n._EVENT_NAME)
				}
			}
		});
		m.listen("mancard:setting/card_setting", ["hideMain"],
		function(n) {
			F.call("newmusic:index", "stop")
		});
		m.listen("mantpl:mine/amine", ["cardresize"],
		function(n) {
			setTimeout(function() {
				a(n._EVENT_NAME)
			},
			100)
		});
		i.find(".js-player-open").one("click",
		function(n) {
			F.call("newmusic:player", "setFirstClick")
		})
	};
	c.stop = function() {
		i.hide();
		F.call("newmusic:player", "playerStop");
		j = false
	};
	function a(s, o) {
		if (!j) {
			return false
		}
		var u = $("#s_main").offset().left;
		var t = $("#s_ctner_contents").outerHeight();
		if (u != h) {
			i.css({
				left: u
			});
			h = u
		}
		g = $(window).height() - 50;
		var p = $("#s_content_" + s_session.curmod).find(".s-loading");
		if (!o && t > g && p.find(".load-done").length === 0 && parseFloat(i.css("top")) === g) {
			return false
		}
		var q = t + k - $(window).scrollTop() - 50;
		d = Math.min(q, g);
		var v = parseFloat(i.css("top"));
		var n = parseFloat(f.css("top"));
		if ($.browser.ie < 7) {
			var r;
			r = d + $(window).scrollTop();
			i.css({
				top: r
			});
			if (!s_session.index_off) {
				i.show()
			} else {
				i.hide()
			}
		} else {
			if (d < 300) {
				return
			}
			f.stop().animate({
				top: n - (d - v)
			},
			190);
			i.stop().animate({
				top: d
			},
			190,
			function() {
				if (i.css("display") === "none") {
					if (!s_session.index_off) {
						i.show();
						m.fire("musicDisplay", {
							displaytype: "bar"
						})
					} else {
						i.hide()
					}
				}
			})
		}
	}
});
if ($(".s-menu-music").length > 0) {
	F.call("newmusic:index", "init")
};