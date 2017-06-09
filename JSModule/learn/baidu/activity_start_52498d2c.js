F.module("activity:skin/lottery",
function(g, f, e) {
	var d = g("superui:component/share"),
	c = g("superui:component/dialog"),
	a = g("superui:util/tool");
	StyleTMP = ".activity-skin-lottery .sui-dialog-tipstext strong{color:#009944;padding:0 5px;}.activity-skin-lottery .sui-dialog-subcontent{padding-left:0px;padding-right:0px;text-justify:inter-ideograph;text-align:center}.activity-skin-lottery .sui-dialog-subcontent a{text-decoration: underline;}",
	URI = "/home/skin/submit/activitylottery";
	var b = {
		init: function() {
			if (s_session.userTips.isReqSkinLottery) {
				this.lotreq()
			}
			a.addStyle(StyleTMP);
			this.initSkin()
		},
		lotreq: function() {
			$.ajaxpost(URI, {},
			function(h) {
				if (h.bsLottery && h.bsLottery != "-1") {
					b.showLottery(h)
				}
			})
		},
		showLottery: function(k) {
			var i = this,
			m, j, h = k.bsShare;
			m = c.alert({
				width: 350,
				identity: "skinLottery",
				type: k.bsLottery == "1" ? "success": "warning",
				dialogClassName: "activity-skin-lottery",
				content: $.decodeHTML(k.bsTitle),
				subcontent: '<div class="sui-dialog-subcontent"' + (k.bsLottery ? 'style="text-align:center"': "") + ">" + $.decodeHTML(k.bsText) + "</DIV>",
				buttons: [{
					type: "ok",
					title: "绔嬪嵆鍒嗕韩",
					listener: function() {
						return false
					}
				}]
			});
			var l = new d({
				identity: "activityskin",
				target: j = m.footer.find(".sui-dialog-buttonok"),
				text: h.text,
				url: h.url,
				pic: h.img,
				arrowLeft: 30,
				width: 200,
				trigger: "mouseenter"
			});
			j.on("mousedown",
			function() {
				return false
			})
		},
		initSkin: function() {
			e.listen("superplus:skin/skin_control", "skinhide",
			function() {
				if (b.isStar()) {
					b.lotreq()
				}
			})
		},
		isStar: function() {
			var i = false,
			h = $(".s-skin-layer"),
			k = h.find(".choose-nav");
			var j = h.find(".choose-li");
			if (j.hasClass("nav-1009")) {
				if (j.parent().find(".no-img").length < 11) {
					i = true
				}
			}
			return i
		}
	};
	f.init = function() {
		b.init()
	}
});
F.module("activity:activity/superplus",
function(b, a) {
	a.init = function() {
		F.call("activity:skin/lottery", "init")
	}
});
F.call("activity:activity/superplus", "init");