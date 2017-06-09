!
function(lib_name, crystal_args, namespace, ua) {
	function testCssPositionFixed() {
		return 6 !== ua.ie
	}
	function testCssMozPrefix() {
		return "MozBinding" in OBJ_CSS_TESTER_EL.style
	}
	function testCssRgba() {
		var testColor = "rgba(0,0,0,0.5)",
		originalColor = OBJ_CSS_TESTER_EL.style.color;
		try {
			return OBJ_CSS_TESTER_EL.style.color = testColor,
			OBJ_CSS_TESTER_EL.style.color === originalColor ? !1 : !0
		} catch(e) {
			return ! 1
		}
	}
	function sns_pingurl(opt, act) {
		var actid = 0,
		subactid = 0,
		m_options = mix({},
		opt);
		switch (act) {
		case "follow_success":
			actid = 80001;
			break;
		case "sns_plus_success":
			actid = 85001;
			break;
		case "share_success":
			actid = 80002;
			break;
		case "banner_click":
			actid = 80005;
			break;
		case "relation_click":
			actid = 80007;
			break;
		case "relation_click_weibo":
			actid = 70007;
			break;
		case "banner_close":
			actid = 85004;
			break;
		case "act_join_success":
			actid = 80006;
			break;
		case "weibo_join_success":
			actid = 80009;
			break;
		case "follow_click":
			actid = 80008
		}
		return m_options.actid = actid,
		m_options.subactid = subactid,
		m_options.aver = m_options.aver ? m_options.aver: "",
		m_options.token = m_options.token ? "&snstoken=" + m_options.token: "",
		m_options.uin = m_options.uin ? "&snsuin=" + m_options.uin: "",
		format(namespace.getProtocol("//m.l.qq.com?t=s&mid={oid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}{token}{uin}"), m_options)
	}
	var pageStartTime;
	window.QosSS && QosSS.t ? pageStartTime = QosSS.t[0] : window.QosSS && QosSS.tQueue ? pageStartTime = QosSS.tQueue[0] : window.QosS && QosS.G ? pageStartTime = QosS.G.startTime || QosS.G.st: window.QosS && QosS.Global ? pageStartTime = QosS.Global.startTime: window.d0 && window.d0.getTime && (pageStartTime = window.d0.getTime());
	var DURATION_LOAD_JS = pageStartTime && window.TIME_BEFORE_LOAD_CRYSTAL ? window.TIME_BEFORE_LOAD_CRYSTAL - pageStartTime: -1;
	Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
		if (void 0 === this || null === this) throw new TypeError('"this" is null or not defined');
		var length = this.length >>> 0;
		for (fromIndex = +fromIndex || 0, 1 / 0 === Math.abs(fromIndex) && (fromIndex = 0), 0 > fromIndex && (fromIndex += length, 0 > fromIndex && (fromIndex = 0)); length > fromIndex; fromIndex++) if (this[fromIndex] === searchElement) return fromIndex;
		return - 1
	}),
	Array.prototype.forEach || (Array.prototype.forEach = function(callback, thisArg) {
		thisArg || (thisArg = null);
		var i, len = this.length;
		for (i = 0; len > i; i++) callback.call(thisArg, this[i], i, this)
	}),
	Date.now || (Date.now = function() {
		return (new Date).getTime()
	});
	var Uuids = {
		get: function() {
			for (var s = [], hexDigits = "0123456789abcdef", i = 0; 36 > i; i++) s[i] = hexDigits.substr(Math.floor(16 * Math.random()), 1);
			return s[14] = "4",
			s[19] = hexDigits.substr(3 & s[19] | 8, 1),
			s[8] = s[13] = s[18] = s[23] = "-",
			s.join("")
		},
		getReqId: function() {
			return this.get().replace(/[-]/g, "")
		},
		getCurrentPageReqId: function() {
			return this.cprid ? this.cprid: this.cprid = this.getReqId()
		}
	};
	namespace.Uuids = Uuids;
	var OBJ_CSS_TESTER_EL = document.createElement("div"),
	FeatureDetector = namespace.FeatureDetector = {
		cssPositionFixed: testCssPositionFixed(),
		cssMozPrefix: testCssMozPrefix(),
		cssRgba: testCssRgba()
	},
	CrystalPageSpeed = {
		tagMap: {},
		time: function(tag, time) {
			var t = time || Date.now();
			this.tagMap[tag] ? {}: this.tagMap[tag] = {};
			var tagRecord = this.tagMap[tag]; - 1 === tagRecord.start || -1 === tagRecord.end || tagRecord.duration || (!tagRecord.start || tagRecord.end) && (tagRecord.start = t, tagRecord.end = void 0)
		},
		timeEnd: function(tag) {
			var endTime = Date.now(),
			tag = this.tagMap[tag];
			return tag ? ( - 1 === tag.start || -1 === tag.end || tag.duration || tag.end || (tag.end = endTime, tag.duration = -1 === tag.start ? -1 : endTime - tag.start), tag.duration) : void 0
		},
		setDuration: function(tag, duration) {
			this.tagMap[tag] = {
				start: -1,
				end: -1,
				duration: duration
			}
		},
		flush: function(pingSender) {
			if (!this.isDirtyData() && crystal_args.jsProfileOpen) {
				var k, params = {},
				envInfo = this.getEnvInfo();
				for (k in envInfo) params[k] = envInfo[k];
				for (k in this.tagMap) this.tagMap[k].duration + "" && ("lview-l.qq.com" === k ? params.lview = this.tagMap[k].duration: params[k] = this.tagMap[k].duration);
				0 === params.err && ("undefined" == typeof params.ping && (params.err = 6001), "undefined" == typeof params.cdn && (params.err = 5001), "undefined" == typeof params.lview && (params.err = 4001), "undefined" == typeof params.dr && (params.err = 3001), -1 === params.loadjs && (params.err = 1001)),
				params.all = (new Date).getTime() - this.tagMap.js.start,
				params.all < 1e3 * crystal_args.lview_time_out && 4002 === params.err && (delete params.lview, params.err = 4004),
				pingSender = pingSender || sendPing,
				pingSender(crystal_args.mo_page_url + "?" + serializeQuery(params))
			}
			this.flush = function() {}
		},
		getEnvInfo: function() {
			if (!this.envInfo) {
				var d = this.getBrowserDimension(),
				dmMatch = location.href.match(/\/\/([^\?\/]*)\/?\??/),
				dm = dmMatch && dmMatch[1] ? dmMatch[1] : -1,
				ishttps = location.protocol.indexOf("https") > -1 ? 1 : 0;
				this.envInfo = {
					err: 0,
					dm: crystal_args.domain || dm,
					ua: browsersniffer(navigator.userAgent),
					cv: namespace.version,
					fv: namespace.getFlashVersion(),
					bw: d.width,
					bh: d.height,
					sw: window.screen.width,
					sh: window.screen.height,
					reqid: namespace.Uuids.getCurrentPageReqId(),
					ishttps: ishttps
				}
			}
			return this.envInfo
		},
		getBrowserDimension: function() {
			var r = {
				width: -1,
				height: -1
			},
			myHeight = (document.documentElement, document.body, -1),
			myWidth = -1;
			return "number" == typeof window.innerWidth ? (myWidth = window.innerWidth, myHeight = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (myWidth = document.documentElement.clientWidth, myHeight = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (myWidth = document.body.clientWidth, myHeight = document.body.clientHeight),
			r.width = myWidth,
			r.height = myHeight,
			r
		},
		setEnvInfoProperty: function(propName, propValue) {
			this.getEnvInfo()[propName] = propValue
		},
		isDirtyData: function() {
			var i, testTags = ["loadjs", "js", "dr"];
			for (i = 0; i < testTags.length; i++) {
				var t = this.tagMap[testTags[i]];
				if (t && t.duration && t.duration < -1) return ! 0
			}
			return ! 1
		},
		on: function(el, type, handler) {
			return document.addEventListener ? (el.addEventListener(type, handler, !1), handler) : (el.attachEvent("on" + type, handler), handler)
		},
		isElementInViewport: function(el, adWidth, adHeight) {
			try {
				if (!el.getBoundingClientRect) throw new Error("Method getBoundingClientRect is not supported to detect advertisement click.");
				var rect = el.getBoundingClientRect()
			} catch(e) {
				return ! 1
			}
			var visibleArea, adArea = parseInt(adWidth) * parseInt(adHeight),
			top = rect.top,
			left = rect.left,
			bottom = rect.bottom,
			right = rect.right,
			winHeight = window.innerHeight || document.documentElement.clientHeight,
			winWidth = window.innerWidth || document.documentElement.clientWidth,
			visibleHeight = 0 > top ? adHeight + top: bottom > winHeight ? adHeight - bottom + winHeight: adHeight,
			visibleWidth = 0 > left ? adWidth + left: right > winWidth ? adWidth - right + winWidth: adWidth;
			return visibleArea = visibleHeight * visibleWidth,
			visibleArea >= adArea / 2
		},
		adClickMap: {},
		registerClick: function(adEl, clickableEl, adData) {
			if (crystal_args.jsProfileOpen) {
				var loc = adData.loc,
				oid = adData.oid;
				if (!this.adClickMap[loc]) {
					this.adClickMap[loc] = {
						loc: loc,
						adEl: adEl,
						adData: adData,
						visibleStartTime: adData.fodder[0] && this.isElementInViewport(adEl, adData.fodder[0].width, adData.fodder[0].height) ? Date.now() : null
					};
					var self = this;
					this.on(clickableEl, "click",
					function() {
						var now = Date.now(),
						visibleStartTime = self.adClickMap[loc].visibleStartTime;
						sendPing(crystal_args.mo_ad_click_url + "?" + serializeQuery({
							loc: loc,
							oid: oid,
							reqid: namespace.Uuids.getCurrentPageReqId(),
							stay: pageStartTime ? now - pageStartTime: -1,
							click: visibleStartTime ? now - visibleStartTime: -1
						}))
					})
				}
			}
		},
		initVisibleAdDetectorEvent: function() {
			function handler() {
				var k, v;
				for (k in self.adClickMap) v = self.adClickMap[k],
				v.adData.fodder[0] && self.isElementInViewport(v.adEl, v.adData.fodder[0].width, v.adData.fodder[0].height) && (v.visibleStartTime = Date.now())
			}
			var self = this;
			this.on(window, "DOMContentLoaded", handler),
			this.on(window, "load", handler),
			this.on(window, "scroll", handler),
			this.on(window, "resize", handler)
		}
	},
	Cps = namespace.cps = CrystalPageSpeed,
	PrivacyTag = {
		privateOriganalIcon: function(dsp_name, private_link, css) {
			var privacyTag = this,
			privateIcon = crystal.dom.createElement({
				position: "absolute",
				width: "18px",
				height: "18px",
				right: "0px",
				bottom: "0px",
				cursor: "pointer",
				"z-index": 20,
				background: "url(" + namespace.resource("privacy/white_icon.png") + ") no-repeat"
			},
			{
				"class": "absolute"
			},
			"div");
			return css && crystal.dom.setStyle(privateIcon, css),
			crystal.evt.on(privateIcon, "mouseover",
			function() {
				var privateName = privacyTag.addPrivateTag(dsp_name, private_link, css);
				privateIcon.parentNode.appendChild(privateName),
				privateIcon.parentNode.removeChild(privateIcon)
			}),
			crystal.evt.on(privateIcon, "click",
			function() {
				window.open(private_link)
			}),
			privateIcon
		},
		privateMouseOverIcon: function(css) {
			var privateIcon = crystal.dom.createElement({
				position: "absolute",
				width: "18px",
				height: "18px",
				right: "0px",
				bottom: "0px",
				cursor: "pointer",
				"z-index": 20,
				background: "url(" + namespace.resource("privacy/blue_icon.png") + ") no-repeat"
			},
			{
				"class": "absolute"
			},
			"div");
			return css && crystal.dom.setStyle(privateIcon, css),
			privateIcon
		},
		privateDspName: function(dsp_name, private_link, css) {
			var dspName = "  " + dsp_name + " ",
			privateName = crystal.dom.createElement({
				position: "absolute",
				width: "auto",
				"font-size": "12px",
				"line-height": "18px",
				height: "18px",
				right: "18px",
				bottom: "0px",
				color: "#FFF",
				cursor: "pointer",
				"z-index": 20,
				"white-space": "pre",
				background: "url(" + namespace.resource("privacy/black_bg.png") + ") no-repeat"
			},
			{
				"class": "absolute"
			},
			"div", dspName);
			if (css) {
				var dspNameCss = JSON.parse(JSON.stringify(css));
				dspNameCss.width = "auto",
				dspNameCss.right = parseInt(css.right.split("px")[0]) + 18 + "px",
				crystal.dom.setStyle(privateName, dspNameCss)
			}
			return privateName
		},
		addPrivateTag: function(dsp_name, private_link, css) {
			var privacyTag = this,
			privateTag = crystal.dom.createElement({},
			{},
			"div"),
			privateName = privacyTag.privateDspName(dsp_name, private_link, css),
			privateIcon = privacyTag.privateMouseOverIcon(css);
			return privateTag.appendChild(privateName),
			privateTag.appendChild(privateIcon),
			crystal.evt.on(privateTag, "mouseout",
			function(e) {
				var e = e || window.event,
				obj = e.relatedTarget || e.toElement;
				obj !== privateName && (privateTag.parentNode.appendChild(privacyTag.privateOriganalIcon(dsp_name, private_link, css)), privateTag.parentNode.removeChild(privateTag))
			}),
			crystal.evt.on(privateTag, "click",
			function() {
				window.open(private_link)
			}),
			privateTag
		},
		reportIcon: function(el, oid) {
			var report_link = namespace.getProtocol("//ra.gtimg.com/web/jsproxy/reportfakead.html"),
			reportIcon = crystal.dom.createElement({
				position: "absolute",
				width: "24px",
				height: "16px",
				left: "26px",
				bottom: "0px",
				cursor: "pointer",
				display: "none",
				"z-index": 20,
				background: "url(" + namespace.resource("res/icon/report_default_new.png") + ") no-repeat top"
			},
			{
				"class": "absolute"
			},
			"div");
			return crystal.evt.on(reportIcon, "click",
			function() {
				var timestamp = (new Date).getTime();
				window.open(report_link + "?oid=" + oid + "&timestamp=" + timestamp)
			}),
			crystal.evt.on(reportIcon, "mouseover",
			function() {
				crystal.dom.setStyle(reportIcon, {
					background: "url(" + namespace.resource("res/icon/report_hover_new.png") + ") no-repeat top"
				})
			}),
			crystal.evt.on(reportIcon, "mouseout",
			function() {
				crystal.dom.setStyle(reportIcon, {
					background: "url(" + namespace.resource("res/icon/report_default_new.png") + ") no-repeat top"
				})
			}),
			crystal.evt.on(el, "mouseover",
			function() {
				crystal.dom.setStyle(reportIcon, {
					display: "block"
				})
			}),
			crystal.evt.on(el, "mouseout",
			function(e) {
				var e = e || window.event,
				obj = e.relatedTarget || e.toElement;
				obj !== reportIcon && crystal.dom.setStyle(reportIcon, {
					display: "none"
				})
			}),
			reportIcon
		}
	},
	Pt = namespace.pt = PrivacyTag;
	if (Cps.initVisibleAdDetectorEvent(), Cps.setDuration("loadjs", DURATION_LOAD_JS), Cps.time("js", window.TIME_BEFORE_LOAD_CRYSTAL ? window.TIME_BEFORE_LOAD_CRYSTAL: -1), Cps.timeEnd("js"), Cps.time("dr"), "undefined" == typeof window[lib_name]) {
		window[lib_name] = window.crystal2 = window.AD2 = namespace;
		var cpm_prefix_process = function() {
			var crystal_toberemove = ["Finance_Width1", "Finance_Width2", "Finance_Rectangle", "Finance_Width3", "Finance_Width4", "Finance_Width5", "Finance_2nd_Width1", "Finance_2nd_Rectangle1", "Finance_2nd_bottom_Width", "stock_Width1", "stock_Rectangle", "stock_Width2", "stock_Width3", "F_Width1_N", "F_UpRight1", "F_D_Width1", "health_width1", "health_width2", "health_Rectangle1", "health_Rectangle2", "Edu_Width1", "Edu_Width2", "Edu_Width3", "Edu_Width4", "Edu_HP_Rectangle", "Edu_2nd_Width1", "Edu_KY_Width1", "Tech_Width1", "Tech_bottom_Width", "Tech_2nd_Width1", "Tech_2nd_Width2", "Tech_Rectangle1", "Tech_Rectangle2", "Auto_Width1", "Auto_Width2", "Auto_Width3", "Auto_Width4", "Auto_Width5", "Auto_Width6", "Auto_Button1", "auto_button2", "Auto_Button3", "Auto_Button4", "Auto_Button5", "Auto_2nd_Width1", "Auto_2nd_Width2", "Fashion_Width1", "Fashion_Width2", "Fashion_Width3", "Fashion_Width4", "Fashion_Width5", "Fashion_Button1", "Fashion_button2", "Fashion_button3", "Fashion_pic_Width2", "Fashion_2nd_Width1", "Fashion_2nd_Width2", "Digital_Width1", "Digital_Width2", "Digital_Width5", "Digital_Rectangle1", "Digital_Rectangle2", "Digi_2nd_Width1", "Digi_2nd_Width2", "Sports_Width1A", "News_Width1", "News_Rectangle", "News_Rectangle2", "News_Rectangle3", "News_Width2", "News_Width3", "News_skyscraper", "News_Width4", "News_Pic_Width2", "News_2nd_Width1", "News_2nd_Width2", "Gamezone_Width1", "Gamezone_Width2", "Gamezone_Width3", "Gamezone_Width4", "Game_bottom_Width", "Game_2nd_Width1", "Game_2nd_Width2", "Ent_Button1", "Ent_Rectangle1", "Ent_Rectangle2", "Ent_Width1", "Ent_Width2", "Ent_Width3", "Ent_Width4", "Ent_Pic_Width2", "Ent_2nd_Width1", "Ent_2nd_Width2", "Ent_2nd_Rectangle1", "Music_Upright", "ent_ZL_Rectangle", "ent_ZL_Width1", "ent_ZL_Width2", "Baby_Width2", "Baby_Width3", "Baby_Width4", "Baby_Rectangle", "stock_2nd_Width1", "stock_2nd_Width2", "Music_Width1", "Music_Width2"];
			return function() {
				for (var i = 0,
				l = crystal_toberemove.length; l > i; i++) {
					var node = document.getElementById(crystal_toberemove[i]);
					node && node.parentNode && node.parentNode.removeChild(node)
				}
			}
		} ();
		namespace.httpProtocolList = {
			"ra.gtimg.com": !1,
			"lb.l.qq.com": !1,
			"p3.l.qq.com": !1,
			"bs.l.qq.com": !1,
			"t.l.qq.com": !1,
			"img1.gtimg.com": !1,
			"m.l.qq.com": !1,
			"mat1.gtimg.com": !1,
			"sac.l.qq.com": !1,
			"wa.gtimg.com": !1,
			"dp3.qq.com": !1,
			"adsrich.qq.com": !1,
			"connect.l.qq.com": !1,
			"imgcache.qq.com": !1,
			"share.v.t.qq.com": !1,
			"t.qq.com": !1,
			"sports.qq.com": !1,
			"c.l.qq.com": !1,
			"w.l.qq.com": !1,
			"p.l.qq.com": !1,
			"x.l.qq.com": !1,
			"l.qq.com": !1,
			"user.qzone.qq.com": !1,
			"bizapp.qq.com": !1
		},
		namespace.getProtocol = function(url) {
			if (!url) return "";
			0 === url.indexOf("http:") && (url = url.split("http:")[1]),
			0 === url.indexOf("https:") && (url = url.split("https:")[1]);
			var domain = url.indexOf("/", 2) > -1 ? url.substring(2, url.indexOf("/", 2)) : url.substring(2, 1e3);
			return "undefined" != typeof namespace.httpProtocolList[domain] && namespace.httpProtocolList[domain] === !0 && (url = "http:" + url),
			url
		},
		crystal_args.file_path = namespace.getProtocol(crystal_args.file_path),
		crystal_args.ext_path = namespace.getProtocol(crystal_args.ext_path),
		crystal_args.lview_template = namespace.getProtocol(crystal_args.lview_template),
		crystal_args.ping_template = namespace.getProtocol(crystal_args.ping_template),
		crystal_args.mo_page_url = namespace.getProtocol(crystal_args.mo_page_url),
		crystal_args.mo_ad_click_url = namespace.getProtocol(crystal_args.mo_ad_click_url),
		crystal_args.share_dialogue_url = namespace.getProtocol(crystal_args.share_dialogue_url),
		crystal_args.privacyImg = namespace.getProtocol(crystal_args.privacyImg),
		crystal_args.sac_req_url = namespace.getProtocol(crystal_args.sac_req_url),
		namespace.cpm_prefix_process = cpm_prefix_process,
		namespace.version = "qq_v2.8Beta07",
		namespace.resourceInvalid = null,
		namespace.display_orders = [],
		eval(namespace.output(lib_name)),
		namespace.crystal_args = crystal_args;
		var refs = namespace.__images = [],
		sendPing = function(url, norandom) {
			var img = new Image(1, 1);
			if (!norandom) {
				var constr = "?"; - 1 != url.indexOf("?") && (constr = "&"),
				url = url + constr + Math.random()
			}
			return url.indexOf("[timestamp]") > -1 && (url = url.replace("[timestamp]", Math.round((new Date).getTime() / 1e3))),
			img.src = url,
			refs.push(img),
			this
		},
		report_ua = function() {
			for (var i in ua) if (0 != ua[i]) return i + ua[i]
		} (),
		importScript = namespace.importScript = function(url, callback, charset, errorCallback) {
			var script = document.createElement("script");
			script.src = url,
			charset && (script.charset = charset),
			callback && (ua.ie ? script.onreadystatechange = function() {
				var rs = this.readyState; ("loaded" === rs || "complete" === rs) && callback()
			}: script.onload = callback),
			errorCallback && "onerror" in script && (script.onerror = errorCallback),
			document.getElementsByTagName("head")[0].appendChild(script)
		},
		channel;
		try {
			var url_search = location.search,
			channel_match = location.href.match(/([\w\.]+)\.qq\.com/),
			channel_mapping = {
				cp: "sports",
				sport: "sports",
				fcbarcelona: "sports",
				college: "edu",
				zhiyun: "sports",
				"kbs.sports": "sports",
				"data.auto": "auto",
				thr: "ent",
				space: "tech",
				"view.news": "coral",
				"video.coral": "coral",
				mil: "news",
				space: "tech"
			};
			if (channel = namespace.channel = (channel_match && channel_match[1]).toLowerCase(), location.href.indexOf(namespace.getProtocol("//sports.qq.com/nba")) > -1 && (channel = namespace.channel = "nba"), window.ARTICLE_INFO && window.ARTICLE_INFO.tpl && window.ARTICLE_INFO.tpl.dev && "nba" === window.ARTICLE_INFO.tpl.dev && (channel = window.ARTICLE_INFO.tpl.dev), channel_mapping[channel] && (channel = channel_mapping[channel]), "v" === channel) {
				var v_chl_mapping = {
					1 : "movie",
					2 : "tv",
					3 : "cartoon",
					4 : "sports",
					5 : "ent",
					6 : "games",
					8 : "news",
					9 : "doco",
					10 : "variety",
					11 : "variety",
					12 : "news",
					13 : "variety",
					15 : "sports",
					17 : "sports",
					18 : "news",
					19 : "variety",
					21 : "sports",
					22 : "music",
					23 : "news",
					24 : "finance",
					25 : "fashion",
					26 : "travel",
					27 : "education",
					28 : "tech",
					29 : "auto",
					31 : "life",
					34 : "sports",
					35 : "sports",
					37 : "class",
					38 : "music",
					43 : "fun",
					46 : "movie",
					49 : "education",
					97 : "sports",
					98 : "movie",
					99 : "variety",
					100 : "education",
					101 : "sports",
					102 : "sports",
					103 : "videoplus",
					104 : "news",
					105 : "paike",
					200 : "music"
				};
				channel = window.COVER_INFO && window.COVER_INFO.typeid ? v_chl_mapping[COVER_INFO.typeid] ? "v_" + v_chl_mapping[COVER_INFO.typeid] : "v_unknown": location.pathname.length > 1 ? "v_unknown": "v_v"
			}
		} catch(e) {}
		var IPingBase = {
			append: doNothing,
			flush: doNothing,
			touch: sendPing
		};
		namespace.contains = document.documentElement.contains ?
		function(a, b) {
			return a !== b && (a.contains ? a.contains(b) : !0)
		}: document.documentElement.compareDocumentPosition ?
		function(a, b) {
			return !! (16 & a.compareDocumentPosition(b))
		}: function() {
			return ! 1
		},
		namespace.sns_pingurl = sns_pingurl;
		var fp11input = null,
		pageinfo = namespace.pageinfo = {
			info: null,
			order: []
		},
		limitchar = function(str, maxchar) {
			for (var cl = str.length,
			ret = "",
			olen = 0,
			i = 0; cl > i; i++) {
				var t = encodeURIComponent(str.substr(i, 1));
				olen += t.length,
				maxchar > olen && (ret += t)
			}
			return ret
		},
		encodeURIComLimit = function(str, maxchar) {
			var encodeStr = encodeURIComponent(str);
			if (encodeStr.length > maxchar) for (var isOver = !1; ! isOver;) {
				encodeStr = encodeStr.substr(0, maxchar);
				try {
					decodeURIComponent(encodeStr),
					isOver = !0
				} catch(e) {
					maxchar--
				}
			}
			return encodeStr
		},
		isFromDiscuz = function(fromStr) {
			return fromStr ? fromStr.indexOf("/f/discuz") > -1 || fromStr.indexOf("search.php?") > -1 : !1
		},
		collectInfo = function(mode) {
			var info = null;
			if (null != namespace.pageinfo.info) info = namespace.pageinfo.info;
			else {
				var keywords = "",
				title = "",
				refer = "",
				soso = "";
				each(document.getElementsByTagName("meta"),
				function(o) {
					"keywords" == o.getAttribute("name") && (keywords = o.getAttribute("content") || "")
				});
				try {
					title = document.getElementsByTagName("title")[0].innerHTML,
					refer = document.referrer;
					var regex = new RegExp("(?:yahoo.+?[?|&]p=|openfind.+?query=|google.+?q=|lycos.+?query=|onseek.+?keyword=|search.tom.+?word=|search.qq.com.+?word=|zhongsou.com.+?word=|search.msn.com.+?q=|yisou.com.+?p=|sina.+?word=|sina.+?query=|sina.+?_searchkey=|sohu.+?word=|sohu.+?key_word=|sohu.+?query=|163.+?q=|baidu.+?wd=|baidu.+?kw=|baidu.+?word=|3721.com.+?p=|Alltheweb.+?q=|soso.+?w=|115.+?q=|youdao.+?q=|sogou.+?query=|bing.+?q=|114.+?kw=|/f/discuz.+q=|/.+/search.php.+?kw=)([^&]*)"),
					result = refer.match(regex);
					if (result) {
						var from = result[0];
						if (0 === result[1].indexOf("%25") && (result[1] = decodeURIComponent(result[1])), isFromDiscuz(from)) refer = "discuz%7C" + result[1];
						else try {
							refer = result[0].substr(0, result[0].indexOf(".")) + "%7C" + result[1]
						} catch(e) {
							refer = result[0].substr(0, result[0].indexOf(".")) + "%7C" + result[1]
						}
					} else refer = ""
				} catch(e) {}
				keywords = limitchar(keywords, 360),
				title = limitchar(title, 180),
				refer = refer.substr(0, 90),
				soso = limitchar(soso, 90),
				info = {
					k: keywords,
					t: title,
					r: refer,
					s: soso
				},
				namespace.pageinfo.info = info
			}
			return 1 == mode ? "&k=" + info.k + "&t=" + info.t + "&r=" + info.r + "&s=" + info.s: info
		};
		window[lib_name].ActionPing = {
			actionCodeDictionary: {
				RICH_COUPLET_MOUSEOVER: 40006,
				RICH_COUPLET_MOUSEOUT: 40005,
				RICH_COUPLET_CLOSE: 40001,
				RICH_COUPLET_SWITCH: 40009,
				RICH_COUPLET_SHOW: 40008,
				EXTEND_TURNER_EXTEND: 60003,
				EXTEND_TURNER_REDUCE: 60004
			},
			urlTemplate: namespace.getProtocol("//m.l.qq.com?t=s&mid={mid}&actid={actid}&subactid={subactid}&aver={aver}&oid={oid}&locid={loc}"),
			_requestByImg: function(url, norandom) {
				var img = new Image(1, 1);
				if (!norandom) {
					var constr = "?"; - 1 != url.indexOf("?") && (constr = "&"),
					url = url + constr + Math.random()
				}
				return img.src = url,
				refs.push(img),
				this
			},
			send: function(parameter) {
				var actionId = this.actionCodeDictionary[parameter.actionCode] || parameter.actionId;
				parameter.actid = actionId,
				parameter.mid = parameter.mid || parameter.oid,
				parameter.subactid = parameter.subactid || 0;
				var currentUrl = format(this.urlTemplate, parameter);
				this._requestByImg(currentUrl)
			}
		};
		var DataStorage = window[lib_name].DataStorage = function() {
			function generateExpireDate(expireTime) {
				return expireTime ? new Date((new Date).getTime() + 6e4 * expireTime).toUTCString() : void 0
			}
			var userDataDomElement, mod = "DataStorage",
			tests = {};
			return tests.localstorage = function() {
				try {
					return localStorage.setItem(mod, mod),
					localStorage.removeItem(mod),
					!0
				} catch(e) {
					return ! 1
				}
			},
			tests.userdata = function() {
				try {
					return userDataDomElement = document.createElement("input"),
					userDataDomElement.type = "hidden",
					"undefined" == typeof userDataDomElement.addBehavior ? !1 : (userDataDomElement.addBehavior("#default#userData"), document.body.insertBefore(userDataDomElement, document.body.firstChild), userDataDomElement.load(mod), userDataDomElement.setAttribute(mod, mod), userDataDomElement.save(mod), userDataDomElement.load(mod), userDataDomElement.expires = new Date(315532799e3).toUTCString(), !0)
				} catch(e) {
					return ! 1
				}
			},
			tests.localstorage() ? {
				setItem: function(key, value) {
					localStorage.setItem(key, value)
				},
				getItem: function(key) {
					return localStorage.getItem(key)
				},
				removeItem: function(key) {
					localStorage.removeItem(key)
				}
			}: tests.userdata() && ua.ie < 9 ? {
				defExps: 525600,
				valueKeyStr: "savedValue",
				setItem: function(key, value, expireTime) {
					try {
						userDataDomElement.load(key),
						userDataDomElement.setAttribute(this.valueKeyStr, value),
						expireTime = expireTime ? expireTime: this.defExps,
						userDataDomElement.expires = generateExpireDate(expireTime),
						userDataDomElement.save(key)
					} catch(ex) {}
				},
				getItem: function(key) {
					try {
						return userDataDomElement.load(key),
						userDataDomElement.getAttribute(this.valueKeyStr)
					} catch(ex) {
						return null
					}
				},
				removeItem: function(key) {
					this.setItem(key, !1, -this.defExps)
				}
			}: {
				deserializeString: function(assign_token, pair_separator, need_last, need_decode) {
					var decode = need_decode ? decodeURIComponent: function(k) {
						return k
					};
					return function(s) {
						var ret = {};
						need_last && (s = s.replace(new RegExp(pair_separator + "$"), ""));
						for (var pairArray = s.split(pair_separator), i = 0; i < pairArray.length; i++) {
							var pair = pairArray[i],
							key_value = pair.split(assign_token);
							ret[decode(key_value[0])] = decode(key_value[1])
						}
						return ret
					}
				},
				setItem: function(key, value, expireTime) {
					var text = key + "=" + value;
					expireTime && (text += "; expires=" + generateExpireDate(expireTime)),
					text += "; path=/",
					document.cookie = text
				},
				getItem: function(key) {
					if (key) {
						var o = this.deserializeString("=", "; ", !1, !1)(document.cookie);
						return o[key]
					}
				},
				removeItem: function(key) {
					this.setItem(key, "", -1)
				}
			}
		} (),
		PageType = function() {
			var home = ["http://www.qq.com", "http://finance.qq.com", "http://health.qq.com", "http://edu.qq.com", "http://tech.qq.com", "http://auto.qq.com", "http://fashion.qq.com", "http://digi.tech.qq.com", "http://sports.qq.com", "http://cul.qq.com", "http://news.qq.com", "http://games.qq.com", "http://ent.qq.com", "http://baby.qq.com", "http://astro.fashion.qq.com", "http://college.qq.com", "http://sport.qq.com", "http://stock.qq.com", "http://sports.qq.com/nba"];
			return function(url) {
				if (url.match(/http:\/\/[^\/]*.qq.com\/+a\/+\d{8}/) || url.match(/http:\/\/(video\.)?coral.qq.com\/?/)) return 2;
				var pos = -1,
				pos1 = url.indexOf("#"),
				pos2 = url.indexOf("?");
				return (pos1 > -1 || pos2 > -1) && (pos = pos2, -1 === pos && (pos = pos1), url = url.substr(0, pos)),
				"/" === url.substr(url.length - 1) && (url = url.substr(0, url.length - 1)),
				home.indexOf(url) > -1 ? 1 : 3
			}
		} (),
		VISITOR_PING_WITH_HOST_DEFAULT_HOST = "p.l.qq.com",
		VisitorPingWithHost = function() {
			"use strict";
			var maxurl = 2048,
			maxRurl = 100,
			rurl = encodeURIComLimit(document.referrer, maxRurl),
			pingTemplate = namespace.getProtocol("//{host}/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}&pri={pri}&exp={exp}&pv_type={pv_type}&tango={tango}&dtype={dtype}&targetid={targetid}&btoid={btoid}&pctr={pctr}&btpri={btpri}&extstr={extstr}&index={index}&ping_data={ping_data}&chl={chl}&rurl=" + rurl + "&page_type=" + PageType(location.href)),
			defaultHost = VISITOR_PING_WITH_HOST_DEFAULT_HOST,
			cache = {},
			unique_cache = [],
			createCacheData = function(host) {
				return {
					host: host,
					oid: [],
					cid: [],
					loc: [],
					aver: [],
					soid: [],
					pri: [],
					exp: [],
					pv_type: [],
					tango: [],
					dtype: [],
					targetid: [],
					btoid: [],
					pctr: [],
					btpri: [],
					extstr: [],
					index: [],
					ping_data: [],
					chl: []
				}
			},
			clearCache = function() {
				cache = {},
				unique_cache = []
			},
			spliceData = function(flushData, len) {
				var cacheDataCopy = {};
				return 0 > len && (len = flushData.oid.length + len),
				each(flushData,
				function(v, k) {
					cacheDataCopy[k] = "host" === k ? v: v.splice(0, len)
				}),
				cacheDataCopy
			},
			filterFlushData = function(flushData) {
				if (flushData.oid.length) {
					{
						flushData.oid.length
					}
					flushData.pri.toString().replace(/\,/g, "").length === flushData.pri.length && (flushData.pri = []),
					flushData.tango.toString().indexOf("1") < 0 && (flushData.tango = []);
					for (var filters = ["pctr", "targetid", "btoid", "dtype", "btpri", "extstr", "chl"], i = 0, flen = filters.length; flen > i; i++) / [1 - 9] / .test(flushData[filters[i]].toString()) || (flushData[filters[i]] = [])
				}
				return flushData
			},
			flush = function(flushData) {
				flushData.oid.length && (flushData = filterFlushData(flushData), sendPing(format(pingTemplate, flushData) + collectInfo(1), 0), namespace.pingSent || (Cps.timeEnd("ping"), (namespace.cdnTest || namespace.resourceInvalid) && Cps.flush(), namespace.pingSent = !0))
			},
			flushAll = function() {
				each(cache,
				function(v) {
					flush(v)
				}),
				clearCache()
			},
			dataExists = function(cache, data) {
				for (var i = 0; i < cache.length; i++) {
					var ok = [],
					nk = [];
					for (var p in cache[i]) ok.push(p);
					for (var p in data) nk.push(p);
					if (ok.length !== nk.length);
					else {
						var allsame = !0;
						for (var p in cache[i]) cache[i][p] !== data[p] && (allsame = !1);
						if (allsame) return ! 0
					}
				}
				return ! 1
			},
			bufferFlush = buffer(flushAll, 2e3);
			return clearCache(),
			mix(instance(IPingBase), {
				append: function(data) {
					var host = data.ping || defaultHost;
					cache[host] || (cache[host] = createCacheData(host));
					var flag = !1;
					dataExists(unique_cache, data) ? flag = !0 : unique_cache.push(data),
					data.loc.indexOf(":") > -1 && (data.loc = data.loc.substr(0, data.loc.indexOf(":"))),
					each(cache[host],
					function(v, k) {
						flag || "host" === k || v.push(data[k] ? data[k] : 0)
					});
					var cacheData = cache[host],
					clen = collectInfo(1).length,
					purl = format(pingTemplate, cacheData),
					ncacheData = [];
					purl.length + clen >= maxurl ? (ncacheData = spliceData(cacheData, -1), flush(ncacheData)) : bufferFlush()
				},
				flush: flushAll
			})
		} (),
		VisitorPing = namespace.ping = function() {
			"use strict";
			return mix(instance(IPingBase), {
				append: function(data) {
					VisitorPingWithHost.append(data)
				},
				flush: function() {
					VisitorPingWithHost.flush()
				}
			})
		} (),
		getFlashVersion = namespace.getFlashVersion = function() {
			try {
				if (navigator.plugins && navigator.plugins.length > 0) return parseInt(navigator.plugins["Shockwave Flash"].description.split(" ")[2], 10);
				if ("undefined" != typeof window.ActiveXObject) {
					var flash;
					try {
						flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
					} catch(e) {
						for (var i = 15; i > 5; i--) try {
							flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
							break
						} catch(e) {}
					}
					return flash ? parseInt(flash.GetVariable("$version").split(" ")[1].split(",")[0], 10) : 0
				}
				return 0
			} catch(e) {
				return 0
			}
		},
		browsersniffer = function(uastr) {
			if (!uastr) return "unknown";
			var uastr = uastr.toLowerCase(),
			pos = -1,
			ret = uastr.match(/(?:metasr.\d*|qqbrowser.\d*|maxthon.\d*|theworld|lbbrowser|firefox.\d*|opera.\d*|bidubrowser.\d*)/);
			if (null !== ret) return ret[0].replace(" ", "").replace("/", "");
			if ((pos = uastr.indexOf("chrome")) > -1) return "chrome" + parseInt(uastr.substr(pos + 7, 4));
			if ((pos = uastr.indexOf("safari")) > -1) return "safari";
			var mpos = uastr.indexOf("msie");
			if (mpos > -1) return "ie" + parseInt(uastr.substr(mpos + 5, 2));
			var tpos = uastr.indexOf("trident");
			if (tpos > -1) {
				var rvpos = uastr.indexOf("rv:");
				if (rvpos > -1) return "ie" + parseInt(uastr.substr(rvpos + 3, 2))
			}
			return uastr
		}; +
		function() {
			var action_map = {
				expand: 1,
				shrink: 2
			},
			PING_TEMPLATE = namespace.getProtocol("//dp3.qq.com/richmedia/?action={ACTION}&oid={OID}&loc={LOC}&site={CHANNEL}&ua={UA}&reqid={CID}");
			namespace.rmreport = function(option) {
				var actionNum = action_map[option.action],
				oid = option.oid || "",
				loc = option.loc || "";
				if (!actionNum) throw new Error('[ function:rmreport ] : Invalid value of parameter "action" - ' + option.action);
				sendPing(format(PING_TEMPLATE, {
					ACTION: actionNum,
					OID: encodeURIComponent(oid),
					LOC: encodeURIComponent(loc),
					CHANNEL: encodeURIComponent(channel),
					UA: encodeURIComponent(navigator.userAgent),
					CID: namespace.Uuids.getReqId()
				}))
			}
		} ();
		var getFlashObject = namespace.getFlashObject = function(flashId) {
			try {
				return window.document[flashId] ? window.document[flashId] : document.getElementById(flashId)
			} catch(e) {
				return 0
			}
		}; !
		function(dom, evt, cookie) {
			function request_force(loc) {
				rot = "&rot=1&ri=" + loc.substr( - 5);
				var loc_id = loc;
				delete display_buffer[loc_id],
				delete rendered_area[loc_id],
				crystal.request(loc_id)
			}
			function getAntiCSRFToken() {
				function _getCookie(c_name) {
					var i, x, y, ARRcookies = document.cookie.split(";");
					for (i = 0; i < ARRcookies.length; i++) if (x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("=")), y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1), x = x.replace(/^\s+|\s+$/g, ""), x == c_name) return unescape(y)
				}
				function _getHash(key, hash, type) {
					if (void 0 === key || null === key || 0 === key.length) return "";
					for (var i = 0,
					len = key.length; len > i; ++i) hash += (hash << 5) + key.charAt(i).charCodeAt();
					return hash = 2147483647 & hash,
					hash = hash.toString(16),
					type + (new Array(8 - hash.length + 1).join("0") + hash).toUpperCase()
				}
				var skeyHash = _getHash(_getCookie("skey"), 73231, "1"),
				lskeyHash = _getHash(_getCookie("lskey"), 48995, "2"),
				version = "A";
				return version + skeyHash + lskeyHash
			}
			function apiTokenEncode(oid, locat) {
				function apitoken_num2chr(len) {
					var code;
					if (len >= 0 && 9 >= len) code = "0".charCodeAt(0) + len;
					else if (len >= 10 && 35 >= len) code = len - 10 + "a".charCodeAt(0);
					else {
						if (! (len >= 36 && 61 >= len)) return - 1;
						code = len - 36 + "A".charCodeAt(0)
					}
					return String.fromCharCode(code)
				}
				function apitoken_numlen(num) {
					var dec_num = 0;
					do dec_num++,
					num /= 10;
					while (parseInt(num));
					return dec_num
				}
				var version = "1",
				oidToken = "1" + apitoken_num2chr(apitoken_numlen(oid)) + oid,
				locarToken = "2" + apitoken_num2chr(locat.length) + locat,
				ac = getAntiCSRFToken(),
				acToken = "3" + apitoken_num2chr(ac.length) + ac;
				return version + oidToken + locarToken + acToken
			}
			if (mix(namespace, {
				dom: dom,
				evt: evt,
				ua: ua,
				cookie: cookie
			}), setTimeout(function() {
				crystal_args.mo_ping_script && Math.random() < crystal_args.mo_ping_ratio && importScript(crystal_args.mo_ping_script)
			},
			1e3 * crystal_args.mo_ping_time_out), ua.gecko) {
				var xhr = new XMLHttpRequest;
				window.onbeforeunload = function() {
					Cps.flush(function(url) {
						xhr.open("GET", url, !1),
						xhr.send(null)
					})
				}
			} else evt.on(window, "beforeunload",
			function() {
				Cps.flush()
			});
			evt.ready(function() {
				if (getFlashVersion() >= 11) {
					var flashplayerid = generateId();
					fp11input = dom.createElement({
						position: "absolute",
						left: "-1000px",
						top: "50px",
						width: "10px",
						"z-index": -1,
						cursor: "none"
					},
					{
						type: "text",
						id: flashplayerid,
						value: ""
					},
					"input");
					var body = document.body || document.documentElement;
					body.appendChild(fp11input)
				}
			}),
			evt.on(window, "unload",
			function() {
				VisitorPing.flush()
			}),
			namespace.resource = function(file) {
				return crystal_args.file_path + file
			},
			namespace.resource_swf = function(file) {
				return crystal_args.ext_path + file
			};
			var getExtension = namespace.getExtension = function(uri) {
				try {
					return /\.(\w+)(?:$|\?|\#)/.exec(uri)[1].toLowerCase()
				} catch(e) {
					return "jpg"
				}
			},
			htmlEncode = function() {
				var el = document.createElement("pre");
				return function(str) {
					return el.innerHTML = "",
					el.appendChild(document.createTextNode(str)),
					el.innerHTML
				}
			} ();
			namespace.getPlayIndex = function() {
				return parseInt(cookie.get("ad_play_index")) || Math.floor(100 * Math.random())
			};
			var display_index = namespace.getPlayIndex();
			cookie.set("ad_play_index", display_index + 1, {
				expires: 1,
				path: "/"
			});
			var queue = function(precondition) {
				var preconditioned = !1,
				precondition_is_running = !1,
				fns = [];
				return function(fn) {
					preconditioned ? fn() : (fns.push(fn), precondition_is_running || (precondition(function() {
						each(fns,
						function(f) {
							f()
						}),
						preconditioned = !0
					}), precondition_is_running = !0))
				}
			},
			afterImportExtension = queue(function(callback) {
				crystal_args.is_debug && (crystal_args.extension_js_src += "?_=" + (new Date).getTime()),
				importScript(crystal_args.extension_js_src, callback)
			}),
			NONE = namespace.NONE = 1,
			IMMEDIATELY = namespace.IMMEDIATELY = 2,
			LAZY = namespace.LAZY = 3,
			SELF_PING = namespace.SELF_PING = 4,
			default_fodder_count = 3,
			default_index = Math.floor(10 * Math.random()) % default_fodder_count,
			getDefaultFodderUrl = function() {
				var scales = [{
					scale: 10,
					size: "1000x90"
				},
				{
					scale: 6.5,
					size: "700x75"
				},
				{
					scale: 2.4,
					size: "409x114"
				},
				{
					scale: 1,
					size: "300x250"
				},
				{
					scale: .5,
					size: "300x600"
				},
				{
					scale: 0,
					size: "300x250"
				}],
				getScale = function(width, height) {
					0 == height && (height = 1);
					for (var s = width / height,
					i = 0; i < scales.length; i++) if (s >= scales[i].scale) return scales[i].size
				};
				return function(width, height) {
					var directory, directory = "default_fodders";
					return format(namespace.resource("{directory}/{scale}_{index}.swf?v=20130124"), {
						directory: directory,
						scale: getScale(width, height),
						index: default_index++%default_fodder_count
					})
				}
			} (),
			getDefaultFodder = function(el) {
				if (dom.hasClass(el, "has_qq_live_default_ad")) return getQqLiveDefaultFodder(el);
				var sw = parseInt(el.style.width),
				sh = parseInt(el.style.height),
				ow = el.offsetWidth,
				oh = el.offsetHeight,
				w = 0 !== ow || isNaN(sw) ? ow: sw,
				h = 0 !== oh || isNaN(sh) ? oh: sh;
				return {
					resource_url: getDefaultFodderUrl(w, h),
					width: w,
					height: h,
					cover: !1,
					params: {
						scale: "exactfit"
					}
				}
			},
			getQqLiveDefaultFodder = function(el) {
				return {
					resource_url: namespace.getProtocol("//ra.gtimg.com/web/default_fodders/qqliveDefault.jpg"),
					width: el.offsetWidth,
					height: el.offsetHeight,
					cover: !0,
					link_to: "http://itunes.apple.com/cn/app/id458318329?mt=8"
				}
			},
			getMulticlickurl = function(display_config, el) {
				var initvars = {};
				if (0 != display_config.click_prefix && 0 != display_config.click_content) for (var click_arr = display_config.click_content.split(","), i = 0, len = click_arr.length; len > i; i++) {
					var tmp = click_arr[i].split("|");
					initvars[tmp[0]] = display_config.click_prefix + "seq=" + tmp[1] + "&loc=" + (el.id || "")
				}
				return initvars
			},
			getFodderCover = namespace.getFodderCover = function(el) {
				var childNodes = el.childNodes;
				if (childNodes && 0 != childNodes.length) for (var len = childNodes.length,
				i = 0; len > i; i++) {
					var currrentChild = childNodes[i];
					if (dom.hasClass(currrentChild, "a_cover") && currrentChild.getAttribute("rel")) return currrentChild;
					var rt = arguments.callee(currrentChild);
					if (rt) return rt
				}
			},
			hasFilterInParent = function(el) {
				try {
					var parent = el.parentNode;
					return parent ? parent.style.filter ? !0 : hasFilterInParent(parent) : !1
				} catch(e) {
					return ! 1
				}
			},
			thirdPartyScriptRenderedOrder = {},
			dic_display = {
				third_party_script_plus: {
					ping: LAZY,
					render: function(config, el) {
						if (config.fodder && config.fodder[0]) {
							var ru = config.fodder[0].resource_url,
							fileName = /.+\/(\w+\.\w+)(?:\?.+)?/g.exec(ru)[1],
							fileNameArray = fileName.split("."),
							newFileName = fileNameArray[0] + "_" + config.oid + "_" + config.cid + "." + fileNameArray[1];
							config.fodder[0].resource_url = ru.replace(fileName, newFileName),
							renderFodder(config.fodder[0], el)
						}
					}
				},
				third_party_script: {
					ping: LAZY,
					render: function(config, el) {
						"undefined" != typeof config.display_config.noadicon && "1" == config.display_config.noadicon ? renderFodder(config.fodder[0], el) : renderFodder(config.fodder[0], el, null, null, !0)
					}
				},
				banner: {
					ping: LAZY,
					render: function(config, el) {
						var resetbanner = function(el) {
							for (; el.firstChild;) el.removeChild(el.firstChild)
						},
						preprocessFodder = function(config, el, fodder) {
							config.display_config && config.display_config.click_prefix && config.display_config.click_content && (fodder.initvars = namespace.mix(fodder.initvars, getMulticlickurl(config.display_config, el))),
							config.display_config && 1 == config.display_config.support_api && (fodder.initvars = namespace.mix(fodder.initvars, {
								token: namespace.getApitoken(config.oid, config.loc)
							}))
						};
						config.dsp_id && config.dsp_name && (config.fodder[0].private_link = config.private_link, config.fodder[0].dsp_name = config.dsp_name.length > 8 ? config.dsp_name.substr(0, 8) : config.dsp_name, config.fodder[0].privateTag = !0, config.fodder[0].oid = config.oid);
						var sufprocessBanner = function(config, el, fodder) {
							config.display_config && "center" === config.display_config.loc_pos && (el.style.width = fodder.width + "px", el.style.marginLeft = "auto", el.style.marginRight = "auto"),
							config.display_config && 1 == config.display_config.private_setting && evt.on(el, "mouseover",
							function() {
								var icon = dom.$("private_setting_" + config.oid);
								if (!icon) {
									icon = createIcon("private_setting", config.display_config.icon_location || "rt", "20px", "20px", {
										title: "\u9690\u79c1\u8bbe\u7f6e",
										link_to: "http://setting.snswin.qq.com"
									}),
									icon.id = "private_setting_" + config.oid,
									el.appendChild(icon);
									var hideIcon = function() {
										return setTimeout(function() {
											el.removeChild(icon)
										},
										3e3)
									},
									timer1 = hideIcon();
									evt.on(icon, "mouseover",
									function() {
										clearTimeout(timer1)
									}),
									evt.on(icon, "mouseout",
									function() {
										timer1 = hideIcon()
									})
								}
							});
							var displayConfig = config.display_config,
							isCover = fodder ? fodder.cover: !1,
							coverElement = getFodderCover(el);
							coverElement && Cps.registerClick(el, coverElement, config),
							displayConfig && 1 == displayConfig.support_api && isCover && coverElement && evt.on(coverElement, "click",
							function() {
								sendPing(namespace.sns_pingurl(config, "banner_click"))
							}),
							displayConfig && "_self" === displayConfig.target && coverElement && (coverElement.target = ""),
							displayConfig && displayConfig.pLink && coverElement && (coverElement.href = "", coverElement.target = "", evt.on(coverElement, "click",
							function(event) {
								event.preventDefault ? event.preventDefault() : event.returnValue = !1;
								try {
									{
										new ActiveXObject("QQGAMEDETECT.QQGameDetectCtrl.1")
									}
									window.location = displayConfig.pLink
								} catch(e) {
									window.open(fodder.link_to, "_blank")
								}
							})),
							dom.hasClass(el, "check_double_filter") && isCover && coverElement && hasFilterInParent(coverElement) && (coverElement.style.backgroundColor = "", coverElement.style.filter = "", coverElement.style.opacity = "")
						};
						config.fodder[0] && (config.fodder[0].display = "banner");
						var banner_flag = {
							index_above: !1,
							index_below: !1
						},
						render = function(config) {
							var base_width = namespace.dom.getViewportWidth();
							if (base_width >= config.display_config.critical) {
								var index = config.display_config.index_above;
								if (banner_flag.index_above) return;
								banner_flag = {
									index_above: !0,
									index_below: !1
								}
							} else {
								var index = config.display_config.index_below;
								if (banner_flag.index_below) return;
								banner_flag = {
									index_above: !1,
									index_below: !0
								}
							}
							resetbanner(el),
							preprocessFodder(config, el, config.fodder[index]),
							renderFodder(config.fodder[index], el, null, null, !0),
							sufprocessBanner(config, el, config.fodder[index])
						};
						if (config.display_config && config.display_config.critical) render(config),
						evt.on(window, "resize",
						function() {
							"undefined" != typeof namespace.banner_timer && clearTimeout(namespace.banner_timer),
							namespace.banner_timer = setTimeout(function() {
								render(config)
							},
							300)
						});
						else {
							var keepOldStyleChls = ["js"]; ! (config.fodder[0].width <= 145 && config.fodder[0].width >= 132 && config.fodder[0].height <= 120 && config.fodder[0].height >= 100) || keepOldStyleChls.indexOf(channel) > -1 ? (preprocessFodder(config, el, config.fodder[0]), renderFodder(config.fodder[0], el, config.icon, "rb", !0), sufprocessBanner(config, el, config.fodder[0])) : (preprocessFodder(config, el, config.fodder[0]), renderFodder(config.fodder[0], el), sufprocessBanner(config, el, config.fodder[0]))
						}
					}
				},
				adaptive_banner: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						var banner_double_flag = 0,
						render = function() {
							for (var base_width = parseInt(namespace.dom.getStyle(el.parentNode, "width"), "10"), first_width = base_width, i = 0; i < config.fodder.length; i++) first_width === config.fodder[i].width && banner_double_flag !== first_width && (banner_double_flag = first_width, renderFodder(config.fodder[i], el, null, null, !0))
						};
						render(),
						evt.on(window, "resize",
						function() {
							render()
						})
					}
				},
				banner_double: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						var banner_double_flag = 0,
						render = function() {
							for (var base_width = parseInt(namespace.dom.getStyle(el.parentNode, "width"), "10"), first_width = base_width, i = 0; i < config.fodder.length; i++) first_width === config.fodder[i].width && banner_double_flag !== first_width && (banner_double_flag = first_width, renderFodder(config.fodder[i], el, null, null, !0));
							setTimeout(function() {
								render()
							},
							800)
						};
						render(),
						evt.on(window, "resize",
						function() {
							"undefined" != typeof namespace.banner_double_timer && clearTimeout(namespace.banner_double_timer),
							namespace.banner_double_timer = setTimeout(function() {
								render()
							},
							800)
						})
					}
				},
				auto: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						el.style.overflow = "hidden",
						renderFodder(getDefaultFodder(el), el)
					}
				},
				"default": {
					ping: NONE,
					render: function(config, el) {
						el.style.overflow = "hidden",
						renderFodder(getDefaultFodder(el), el)
					}
				},
				"null": {
					ping: IMMEDIATELY,
					render: function() {}
				},
				banner_script_src: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						renderFodder(config.fodder[0], el),
						importScript(config.fodder[1].resource_url)
					}
				},
				banner_import_monitor_url: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						renderFodder(config.fodder[0], el),
						importScript(config.monitor_url)
					}
				},
				h_banner: {
					ping: SELF_PING,
					render: function() {
						function contains(p, c) {
							return p.contains ? p != c && p.contains(c) : !!(16 & p.compareDocumentPosition(c))
						}
						function fixedMouse(e, target) {
							var related, type = e.type.toLowerCase();
							if ("mouseover" == type) related = e.relatedTarget || e.fromElement;
							else {
								if ("mouseout" != type) return ! 0;
								related = e.relatedTarget || e.toElement
							}
							return related && "xul" != related.prefix && !contains(target, related) && related !== target
						}
						function HBanner(adData, sendPv) {
							this.adData = adData,
							this.sendPv = sendPv
						}
						var IeWindowResizeHook = {
							originalHeight: window.innerHeight || document.documentElement.clientHeight,
							originalWidth: window.innerWidth || document.documentElement.clientWidth,
							isResize: function() {
								var h = window.innerHeight || document.documentElement.clientHeight,
								w = window.innerWidth || document.documentElement.clientWidth;
								return this.originalHeight != h || this.originalWidth != w ? (this.originalHeight = h, this.originalWidth = w, !0) : !1
							}
						},
						CurrentPageAdMap = {};
						window[lib_name].adRequesterCallback = function(adDataArray) {
							var adData = adDataArray[0][0],
							elId = adData.loc,
							currentHBanner = CurrentPageAdMap[elId],
							sendPv = function(adData) {
								var ping_data = {
									loc: adData.loc,
									cid: adData.cid || 0,
									oid: adData.oid || 0,
									aver: adData.aver || 0,
									soid: adData.soid || 0,
									ping: adData.ping,
									pri: adData.pri || 0,
									tango: adData.tango || 0,
									dtype: adData.dtype || 0,
									targetid: adData.targetid || 0,
									pctr: adData.pctr || 0,
									btoid: adData.btoid || 0,
									btpri: adData.btpri || 0,
									extstr: adData.extstr || "",
									index: adData.index || 1,
									ping_data: adData.ping_data || "",
									chl: adData.chl || 0
								};
								ping_data.dtype >= 1 && (ping_data.keywordIds = "" !== adData.keywordIds ? adData.keywordIds: "", ping_data.whiteListId = "" !== adData.whiteListId ? adData.whiteListId: "", ping_data.ArticleId = "" !== adData.ArticleId ? adData.ArticleId: ""),
								VisitorPing.append(ping_data);
								var monitor_pv_delay = 1e3;
								adData.monitor_url && setTimeout(function() {
									VisitorPing.touch(adData.monitor_url, !0)
								},
								monitor_pv_delay),
								adData.ext_monitor_url && setTimeout(function() {
									var ping_list = adData.ext_monitor_url.split(" ");
									ping_list = ping_list.slice(0, 3);
									for (var i = 0,
									len = ping_list.length; len > i; i++) ping_list[i].indexOf("http://") > -1 && VisitorPing.touch(ping_list[i], !0)
								},
								monitor_pv_delay)
							};
							currentHBanner ? (currentHBanner.destroy(), CurrentPageAdMap[elId] = new HBanner(adData, sendPv), CurrentPageAdMap[elId].init()) : (CurrentPageAdMap[elId] = new HBanner(adData, sendPv), CurrentPageAdMap[elId].init())
						};
						var AdRequester = {
							request: function(elId) {
								var lviewUrl = format(crystal_args.lview_template, {
									loc: elId
								}),
								rotParam = "&rot=1&ri=hb_" + elId;
								importScript(lviewUrl + "&callback=" + lib_name + ".adRequesterCallback" + rotParam + collectInfo(1),
								function() {},
								crystal_args.charset)
							}
						};
						return HBanner.prototype.init = function() {
							var adData = this.adData;
							this.adLocationEl = document.getElementById(adData.loc),
							this.pvCounter = 0;
							var self = this;
							if (!this.isNullOrder()) {
								var adContent = document.createElement("div"),
								picTop = parseInt(dom.getStyle(document.getElementById("picWrap"), "top")),
								picTop = isNaN(picTop) ? 9 : picTop,
								closeButton = this.closeButton = dom.createElement({
									position: "absolute",
									top: 0,
									right: 0,
									margin: picTop + 2 + "px 2px 0 0",
									"z-index": 100
								},
								{
									src: namespace.resource("takeover_close.gif")
								},
								"img");
								renderFodder(adData.fodder[0], adContent),
								dom.setStyle(this.adLocationEl, {
									display: "none",
									zIndex: 100
								}),
								this.adLocationEl.appendChild(adContent),
								this.adLocationEl.appendChild(closeButton),
								this.adLocationEl.appendChild(namespace.createAdIcon()),
								this.addCover(),
								evt.on(this.adLocationEl, "mouseover",
								function(e) {
									fixedMouse(e, self.adLocationEl) && self.removeCover()
								}),
								evt.on(this.adLocationEl, "mouseout",
								function(e) {
									fixedMouse(e, self.adLocationEl) && self.addCover()
								}),
								evt.on(closeButton, "click",
								function() {
									self.close()
								})
							}
							this.resizeFunction = function() {
								self.resize()
							},
							evt.on(window, "resize", this.resizeFunction),
							setTimeout(function() {
								var i = hdPic.fn._getUrl() + "";
								"1" !== i && "0" !== i && self.show()
							},
							1e3),
							namespace.setArea(this.adData.loc, {
								show: function() {
									self.show()
								},
								hide: function() {
									self.hide()
								}
							})
						},
						HBanner.prototype.destroy = function() {
							this.resizeFunction && evt.un(window, "resize", this.resizeFunction),
							this.adLocationEl && (namespace.clearArea(this.adData.loc), dom.setStyle(this.adLocationEl, {
								display: "none"
							}), this.adLocationEl.innerHTML = "")
						},
						HBanner.prototype.addCover = function() {
							var cover = document.getElementById("mengban_" + this.adData.loc);
							cover || (cover = document.createElement("div"), dom.setStyle(cover, {
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								opacity: "0.5",
								filter: "alpha(opacity=50)",
								backgroundColor: "white"
							}), cover.id = "mengban_" + this.adData.loc, this.adLocationEl.appendChild(cover))
						},
						HBanner.prototype.removeCover = function() {
							var cover = document.getElementById("mengban_" + this.adData.loc);
							cover && this.adLocationEl.removeChild(cover)
						},
						HBanner.prototype.isNullOrder = function() {
							return this.adData.oid + "" == "1" ? !0 : !1
						},
						HBanner.prototype.show = function() {
							if (this.is1stOrLast = !1, this.canBeShowed()) {
								if (0 === this.pvCounter) this.sendPv && this.sendPv(this.adData);
								else if (10 === this.pvCounter) return void AdRequester.request(this.adData.loc);
								this.pvCounter++;
								var self = this;
								setTimeout(function() {
									if (!self.isNullOrder()) {
										var picTop = parseInt(dom.getStyle(self.sizeReferenceEl, "top")),
										picTop = isNaN(picTop) ? 9 : picTop,
										picHeight = dom.getStyle(self.sizeReferenceEl, "height");
										dom.setStyle(self.adLocationEl, {
											display: "block",
											height: picHeight,
											paddingTop: picTop + "px"
										}),
										self.closeButton && dom.setStyle(self.closeButton, {
											margin: picTop + 2 + "px 2px 0 0"
										})
									}
									self.resizeLock = !1
								},
								300)
							}
						},
						HBanner.prototype.close = function() {
							dom.setStyle(this.adLocationEl, {
								display: "none"
							}),
							this.closeTimeCookieName || (this.closeTimeName = "hbanner" + this.adData.loc),
							DataStorage.setItem(this.closeTimeCookieName, (new Date).getTime(), 1440)
						},
						HBanner.prototype.isClosedWithinTime = function() {
							this.closeTimeCookieName || (this.closeTimeName = "hbanner" + this.adData.loc);
							var closeTime = parseInt(DataStorage.getItem(this.closeTimeCookieName) || 0),
							intervalTime = (new Date).getTime() - closeTime,
							minIntervalTime = 72e5;
							return intervalTime > minIntervalTime ? !1 : !0
						},
						HBanner.prototype.isSizeQualified = function() {
							this.sizeReferenceEl || (this.sizeReferenceEl = document.getElementById("picWrap"));
							var size = parseInt(dom.getStyle(this.sizeReferenceEl, "height"));
							return isNaN(size) || 500 > size ? !1 : !0
						},
						HBanner.prototype.getIs1stOrLast = function() {
							return this.is1stOrLast
						},
						HBanner.prototype.hide = function() {
							dom.setStyle(this.adLocationEl, {
								display: "none"
							}),
							this.is1stOrLast = !0
						},
						HBanner.prototype.canBeShowed = function() {
							return ! this.isClosedWithinTime() && this.isSizeQualified()
						},
						HBanner.prototype.resize = function() {
							if (!ua.ie || IeWindowResizeHook.isResize()) {
								var self = this;
								setTimeout(function() {
									if (self.isSizeQualified()) {
										if (self.canBeShowed() && !self.getIs1stOrLast() && !self.resizeLock) if (self.resizeLock = !0, self.resizeHidePage === hdPic.fn._pageNow) {
											var picTop = parseInt(dom.getStyle(self.sizeReferenceEl, "top")),
											picTop = isNaN(picTop) ? 9 : picTop,
											picHeight = dom.getStyle(self.sizeReferenceEl, "height");
											dom.setStyle(self.adLocationEl, {
												display: "block",
												height: picHeight,
												paddingTop: picTop + "px"
											}),
											self.closeButton && dom.setStyle(self.closeButton, {
												margin: picTop + 2 + "px 2px 0 0"
											}),
											self.resizeLock = !1
										} else self.show()
									} else dom.setStyle(self.adLocationEl, {
										display: "none"
									}),
									self.resizeHidePage = hdPic.fn._pageNow
								},
								1e3)
							}
						},
						namespace.shutongRequest = function(loc) {
							AdRequester.request(loc)
						},
						function() {}
					} ()
				},
				text: {
					ping: NONE,
					render: function(config, el, area_id, ping) {
						if (config.need_ping && ping(), 59 === config.oid) {
							var html = "<a class='w-l-qq-com'" + config.olink + ">" + config.fodder[0] + "</a>";
							el.id = "",
							el.innerHTML = html,
							evt.on(el.childNodes[0], "click",
							function() {
								var url = namespace.getProtocol("//c.l.qq.com/lclick?loc=" + config.loc + "&oid=59&index=" + config.index + "&pv_type=1&exp=1&page_type=" + PageType(location.href) + "&chl=" + channel);
								namespace.ping.touch(url)
							})
						} else {
							var fodders = config.fodder,
							html = fodders[0],
							url = fodders[1],
							color = fodders[2],
							prefix = fodders[3] || "",
							style = fodders[4] || "",
							a = document.createElement("a");
							a.className = el.className,
							a.target = "_blank",
							a.href = url,
							a.style.cssText = style,
							color && (a.style.color = color),
							a.innerHTML = prefix + html,
							el.parentNode.replaceChild(a, el)
						}
						dom.$(area_id) && arguments.callee(config, dom.$(area_id), area_id, ping)
					}
				},
				richtext: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						var fodders = config.fodder,
						html = fodders[0],
						url = fodders[1],
						color = fodders[2],
						a = document.createElement("a");
						a.target = "_blank",
						a.href = url,
						color && (a.style.color = color),
						a.innerHTML = html,
						el.parentNode.replaceChild(a, el),
						dom.setStyle(el, {
							height: "12px"
						})
					}
				},
				banner_text: {
					ping: IMMEDIATELY,
					render: function(config, el) {
						var picFodder = config.fodder[0],
						textFodder = config.fodder[1],
						textLinkUrl = picFodder.link_to;
						textLinkUrl.indexOf("?") > -1 ? textLinkUrl.lastIndexOf("&") === textLinkUrl.length - 1 ? (picFodder.link_to = picFodder.link_to + "clicktype=1", textLinkUrl += "clicktype=2") : (picFodder.link_to = picFodder.link_to + "&clicktype=1", textLinkUrl += "&clicktype=2") : (picFodder.link_to = picFodder.link_to + "?clicktype=1", textLinkUrl += "?clicktype=2"),
						renderFodder(picFodder, el);
						var textWrapper = document.createElement("div"),
						textLink = document.createElement("a"),
						text = textFodder.text_content;
						textLink.href = textLinkUrl + collectInfo(1),
						textLink.target = "_blank",
						textLink.innerHTML = text;
						var displayConfig = config.display_config,
						text_position = displayConfig.text_position,
						textStyle = textFodder.style;
						if (textStyle) {
							for (var textStyleAry = textStyle.split(";"), slen = textStyleAry.length, textStyleObj = {},
							i = 0; slen > i; i++) {
								var currentStyleStr = textStyleAry[i],
								currentStylePair = currentStyleStr.split(":");
								textStyleObj[currentStylePair[0]] = currentStylePair[1]
							}
							dom.setStyle(textLink, textStyleObj)
						} else dom.setStyle(textLink, {
							paddingBottom: "3px",
							lineHeight: "1.5",
							textDecoration: "none",
							textSize: "16px",
							background: "url(" + namespace.getProtocol("//img1.gtimg.com/fashion/pics/hv1/252/73/1392/90533667.png) repeat-x left bottom")
						});
						switch (text_position) {
						case "belowBanner":
						default:
							dom.setStyle(textWrapper, {
								position: "absolute",
								left: "0px",
								width: "100%",
								bottom: "-27px",
								textAlign: "center"
							})
						}
						textWrapper.appendChild(textLink),
						el.appendChild(textWrapper)
					}
				},
				script_src: {
					ping: NONE,
					render: function(config, el, area_id, ping) {
						importScript(config.fodder[0].resource_url),
						ping()
					}
				},
				adbox: {
					ping: NONE,
					render: function(config, el, el_id, ping) {
						var v = config.fodder[0].version;
						namespace.importScript(config.fodder[0].resource_url + "?v=" + v,
						function() {
							var fn = namespace["adbox_" + config.oid],
							fn1 = namespace.adbox_ADBOXCALLBACK,
							fn2 = namespace["adbox_" + config.oid + "_" + config.cid];
							fn2 ? fn2(config, el, el_id, ping) : fn1 ? fn1(config, el, el_id, ping) : fn && fn(config, el, el_id, ping)
						},
						"utf8")
					}
				},
				custom_script: {
					ping: IMMEDIATELY,
					render: function(config) {
						var fodder1 = config.fodder[0],
						scriptUrl = fodder1.resource_url,
						splitScriptUrl = scriptUrl.split(".");
						splitScriptUrl.length > 0 && "js" !== splitScriptUrl[splitScriptUrl.length - 1] && (scriptUrl += ".js"),
						document.write('<script id="' + config.cid + '">window.CLICKURL="' + fodder1.link_to + '";</script>'),
						document.write('<script src="' + scriptUrl + '"></script>')
					}
				}
			},
			display_buffer = {},
			NO_AD = {},
			lazyRender; !
			function() {
				var event_attached = !1,
				areas = {},
				ping_effect_height = crystal_args.ping_effect_height,
				pre_load_offset = crystal_args.pre_load_offset,
				max_used_height = 0,
				_checkRender = function(force_recalculate) {
					var used_height = dom.getDocumentScrollTop() + dom.getViewportHeight();
					if (force_recalculate || !(max_used_height >= used_height)) {
						max_used_height = used_height;
						var rendered_ids = [];
						each(areas,
						function(o, id) {
							if (force_recalculate || !o.y) {
								var xy = dom.getXY(o.el);
								o.y = xy[1]
							}
							o.y <= used_height + pre_load_offset && (o.rendered || (o.render(), o.rendered = !0)),
							o.y <= used_height - ping_effect_height && (o.pinged || (o.ping(), o.pinged = !0)),
							o.pinged && o.rendered && rendered_ids.push(id)
						}),
						each(rendered_ids,
						function(id) {
							delete areas[id]
						});
						var no_area = !0;
						each(areas,
						function() {
							no_area = !1
						}),
						no_area && (evt.un(window, "resize", checkRender), evt.un(window, "scroll", checkRender), event_attached = !1)
					}
				},
				checkRender = function() {
					_checkRender(!1)
				};
				namespace.forceCheckRender = function() {
					_checkRender(!0)
				};
				var bufferCheckRender = buffer(function() {
					event_attached || (checkRender(), evt.on(window, "resize", checkRender), evt.on(window, "scroll", checkRender), event_attached = !0)
				},
				100);
				namespace.renderAll = function() {
					each(areas,
					function(o) {
						o.rendered || (o.render(), o.rendered = !0)
					}),
					areas = {},
					evt.un(window, "resize", checkRender),
					evt.un(window, "scroll", checkRender),
					event_attached = !1
				},
				lazyRender = function(id, render, ping) {
					areas[id] = {
						el: dom.$(id),
						render: render,
						rendered: !1,
						ping: ping,
						pinged: !1
					},
					bufferCheckRender()
				}
			} ();
			var rendered_area = {},
			in_reqeusting_ids = {},
			renderArea = function(creativity_config, area_id, not_retry) {
				var area = dom.$(area_id);
				if (!area) return void(not_retry || evt.ready(function() {
					renderArea(creativity_config, area_id, !0)
				}));
				var render_type = 0;
				area.setAttribute("oid", creativity_config.oid),
				area.setAttribute("display", creativity_config.display),
				area.getAttribute("immediately") && (render_type = IMMEDIATELY);
				var display_handler = namespace.getDisplayHandler(creativity_config.display),
				pingArea = function(pv_type) {
					var posconvert = area_id.indexOf("SLOT");
					posconvert > -1 && (area_id = area_id.substr(0, posconvert));
					var blackping = [],
					ping_data = {
						loc: area_id,
						cid: creativity_config.cid || 0,
						oid: creativity_config.oid || 0,
						aver: creativity_config.aver || 0,
						soid: creativity_config.soid || 0,
						ping: creativity_config.ping,
						pri: creativity_config.pri || 0,
						exp: "0" === pv_type ? 0 : 1,
						pv_type: creativity_config.pv_type || 1,
						tango: creativity_config.tango || 0,
						dtype: creativity_config.dtype || 0,
						targetid: creativity_config.targetid || 0,
						pctr: creativity_config.pctr || 0,
						btoid: creativity_config.btoid || 0,
						btpri: creativity_config.btpri || 0,
						extstr: creativity_config.extstr || "",
						index: creativity_config.index || 1,
						ping_data: creativity_config.ping_data || "",
						chl: creativity_config.chl || 0
					}; - 1 == indexOf(blackping, creativity_config.display) && VisitorPing.append(ping_data);
					var monitor_pv_delay = 1e3; ("1" === creativity_config.pv_type || "0" === pv_type) && (creativity_config.third_send || (creativity_config.monitor_url && setTimeout(function() {
						VisitorPing.touch(creativity_config.monitor_url, !0)
					},
					monitor_pv_delay), creativity_config.ext_monitor_url && setTimeout(function() {
						var ping_list = creativity_config.ext_monitor_url.split(" ");
						ping_list = ping_list.slice(0, 3);
						for (var i = 0,
						len = ping_list.length; len > i; i++) ping_list[i].indexOf("http://") > -1 && VisitorPing.touch(ping_list[i], !0)
					},
					monitor_pv_delay), creativity_config.third_send = !0))
				},
				render = function() {
					display_handler.render(creativity_config, area, area_id, pingArea),
					creativity_config.plugins && afterImportExtension(function() {
						namespace.addPlugins(creativity_config.plugins, creativity_config, area, area_id)
					})
				},
				render_type = render_type || display_handler.ping;
				switch (crystal_args.lazy_render || render_type != LAZY || (render_type = IMMEDIATELY), render_type) {
				case IMMEDIATELY:
					render(),
					pingArea();
					break;
				case LAZY:
					lazyRender(area_id, render, pingArea);
					break;
				case SELF_PING:
					render();
					break;
				case NONE:
					render()
				} (area_id.indexOf(":") > -1 || "F_Rectangle_N" === area_id) && (crystal_args.hasViewed[area_id] || viewer.addLoc(creativity_config, area_id, {
					50 : -1
				},
				function() {
					pingArea("0")
				}))
			},
			buildDefaultCreativityConfig = function(area_id) {
				var el = dom.$(area_id);
				return el && "none" != dom.getStyle(el, "display") ? {
					display: "auto",
					oid: 89,
					cid: 0
				}: NO_AD
			},
			clearAd = function(creativity_config, area_id) {
				var e = document.getElementById(area_id);
				e && (e.innerHTML = "")
			},
			renderBuffer = function() {
				each(arguments,
				function(area_id) {
					rendered_area[area_id] || display_buffer[area_id] || (display_buffer[area_id] = buildDefaultCreativityConfig(area_id))
				}),
				each(display_buffer,
				function(creativity_config, area_id) {
					if (!rendered_area[area_id] && ("weibo" != crystal_args.runat && (dom.$(area_id) && "1" == dom.$(area_id).getAttribute("rerender") ? !1 : rendered_area[area_id] = !0), creativity_config !== NO_AD)) {
						var display = creativity_config.display;
						dic_display[display] ? renderAdapter(creativity_config, area_id) : afterImportExtension(function() {
							renderAdapter(creativity_config, area_id)
						}),
						dom.$(area_id) && "1" == dom.$(area_id).getAttribute("rerender") || delete display_buffer[area_id]
					}
				})
			},
			orderFunc = buffer(function() {
				namespace.display_orders.sort(function(a, b) {
					var orders = ["fullscreen", "adptive_fullscreen", "fuceng", "adptive_fullscreen_60px", "fixed_video2"],
					a_i = orders.indexOf(a.adName),
					b_i = orders.indexOf(b.adName);
					return a_i > b_i
				}),
				namespace.orderProcess()
			},
			500),
			renderAdapter = function(config, id) {
				var orders = ["fullscreen", "fuceng", "fixed_video2", "adptive_fullscreen"];
				if (orders.indexOf(config.display) > -1) {
					var adName = config.display;
					adName.indexOf("adptive_fullscreen") > -1 && (adName = "undefined" != typeof config.display_config.type && "narrow" == config.display_config.type ? "adptive_fullscreen_60px": "adptive_fullscreen"),
					namespace.display_orders.push({
						config: config,
						id: id,
						adName: adName
					}),
					orderFunc()
				} else renderArea(config, id)
			},
			isNewArea = function(area_id) {
				return area_id.indexOf(":") > -1 ? !1 : rendered_area[area_id] || display_buffer[area_id] || in_reqeusting_ids[area_id] ? void 0 : (in_reqeusting_ids[area_id] = !0, !0)
			},
			findAreas = namespace.findAreas = function() {
				var areas = map(dom.getElementsByClassName(crystal_args.area_class, crystal_args.element_tags),
				function(el) {
					return el.id || (el.id = generateId())
				});
				return areas
			},
			NOPrefixer = function() {
				var divstyle = document.documentElement.style,
				add = function(rulesArray) {
					var s = document.createElement("style");
					document.getElementsByTagName("head")[0].appendChild(s);
					var sheet = s.sheet || s.styleSheet;
					sheet.insertRule && !isIE10() ? each(rulesArray,
					function(v, index) {
						v.rules = v.rules.replace(/\s[a-z\-]*:/gi,
						function(all) {
							return cssAddPropertyPrefix(all.substring(1, all.length - 1)) + ":"
						}),
						v.rules = v.rules.replace(/:[a-z\-]*\(/gi,
						function(all) {
							return ":" + cssAddValuePrefix(all.substring(1, all.length - 1)) + "("
						}),
						v.selector.indexOf("keyframes") > -1 ? (v.selector = v.selector.replace("keyframes ", ""), CSSRule.WEBKIT_KEYFRAMES_RULE ? sheet.insertRule("@-webkit-keyframes " + v.selector + "{" + v.rules + "}", v.index || index) : CSSRule.MOZ_KEYFRAMES_RULE ? sheet.insertRule("@-moz-keyframes " + v.selector + "{" + v.rules + "}", v.index || index) : CSSRule.O_KEYFRAMES_RULE ? sheet.insertRule("@-o-keyframes " + v.selector + "{" + v.rules + "}", v.index || index) : CSSRule.MS_KEYFRAMES_RULE ? sheet.insertRule("@-ms-keyframes " + v.selector + "{" + v.rules + "}", v.index || index) : CSSRule.KEYFRAMES_RULE && sheet.insertRule("@keyframes " + v.selector + "{" + v.rules + "}", v.index || index)) : sheet.insertRule(v.selector + "{" + v.rules + "}", v.index || index)
					}) : each(rulesArray,
					function(v, index) { - 1 === v.selector.indexOf("keyframes") && sheet.addRule(v.selector, v.rules, v.index || index)
					})
				},
				camelCase = function(name) {
					return (name + "").replace(/^-ms-/, "ms-").replace(/-([a-z])/gi,
					function(all, letter) {
						return (letter + "").toUpperCase()
					})
				},
				cssPrefix = function() {
					for (var prefixArr = ["-webkit-", "-moz-", "-o-", "-ms-"], prefixArrLength = prefixArr.length, i = 0; prefixArrLength > i; i++) if (camelCase(prefixArr[i] + "animation") in divstyle) return prefixArr[i];
					return ""
				} (),
				cssAddPropertyPrefix = function(name) {
					var prop = camelCase(name),
					_prop = camelCase(cssPrefix + prop);
					return prop in divstyle && name || _prop in divstyle && cssPrefix + name || name
				},
				cssAddValuePrefix = function(name) {
					var especialValueArr = ["linear-gradient", "radial-gradient"];
					if (in_array(name, especialValueArr)) {
						var element = document.getElementsByTagName("script")[0],
						oldstyle = element.style.background;
						try {
							element.style.background = cssPrefix + name + "(top, black, white)"
						} catch(e) {}
						var supports = element.style.background.indexOf(cssPrefix + name) > -1;
						element.style.background = oldstyle,
						supports && (name = cssPrefix + name)
					}
					return name
				},
				each = function(o, fn, context) {
					if ("number" == typeof o.length) for (var i = 0,
					len = o.length; len > i; i++) fn.call(context, o[i], i);
					else if ("number" == typeof o) for (var i = 0; o > i; i++) fn.call(context, i, i);
					else for (var i in o) o.hasOwnProperty(i) && fn.call(context, o[i], i)
				},
				in_array = function(item, array) {
					if ("string" == typeof item || "number" == typeof item) {
						for (var len = array.length,
						i = 0; len > i; i++) if (item === array[i]) return ! 0;
						return ! 1
					}
				},
				isIE10 = function() {
					return 10 == ua.ie || 9 == ua.ie ? !0 : void 0
				};
				return {
					add: add
				}
			} ();
			crystal.NOPrefixer = {
				add: function(cssArray) {
					NOPrefixer.add(cssArray)
				}
			};
			var videoInterface = {
				couplet: function() {
					var oid, sOid, top_edge, timeKeeper, hasShownTime, startTime, orders = {},
					videoWidth = 0,
					coupletWidth = 0,
					gap = 2,
					erweima = document.getElementById("mod_float_box"),
					CSS_RESOURCE_ARRAY = [{
						selector: "keyframes leftAnimation",
						rules: "0% { transform:translateX(100%);opacity:0;} 100% {transform:translateX(0%);opacity:1;}"
					},
					{
						selector: "keyframes rightAnimation",
						rules: "0% { transform:translateX(-100%);opacity:0;} 100% {transform:translateX(0%);opacity:1;}"
					},
					{
						selector: "#leftCouplet",
						rules: " animation:leftAnimation 1.8s 0s;"
					},
					{
						selector: "#rightCouplet",
						rules: " animation:rightAnimation 1.8s 0s;"
					}],
					init = function(object) {
						if (oid = object.oid, !orders[oid]) {
							var video = crystal.dom.getElementsByClassName("mod_player_section", ["div"])[0];
							videoWidth = video.style.width || video.clientWidth || video.offsetWidth || video.scrollWidth;
							var videoHeight = video.style.height || video.clientHeight || video.offsetHeight || video.scrollHeight;
							videoHeight && 0 !== parseInt(videoHeight) && (object.width = Math.round(object.width * (videoHeight / object.height)), object.height = videoHeight, coupletWidth = object.width),
							top_edge = "undefined" != typeof object.top_edge ? object.top_edge: getElementTop(video) + "px",
							gap = crystal.dom.getElementsByClassName("mark_exclusive", ["div"]).length > 0 ? 28 : 2;
							var duration = object.duration ? object.duration: 15,
							leftFodder = {
								resource_url: object.leftContent,
								link_to: object.leftLink,
								width: object.width,
								height: object.height,
								cover: object.cover,
								initvars: {
									leftClick: namespace.getProtocol("//t.l.qq.com/?t=s&mid=" + oid + "&oid=" + oid + "&actid=10004&locid=&aver=")
								}
							},
							rightFodder = {
								resource_url: object.rightContent,
								link_to: object.rightLink,
								width: object.width,
								height: object.height,
								cover: object.cover,
								initvars: {
									rightClick: namespace.getProtocol("//t.l.qq.com/?t=s&mid=" + oid + "&oid=" + oid + "&actid=10006&locid=&aver=")
								}
							},
							leftCouplet = createLeftCouplet(oid, leftFodder),
							rightCouplet = createRightCouplet(oid, rightFodder),
							els = [];
							els[0] = leftCouplet,
							els[1] = rightCouplet,
							namespace.dom.addCss(CSS_RESOURCE_ARRAY),
							evt.on(window, "resize",
							function() {
								resize(oid)
							}),
							orders[oid] = {
								els: els,
								duration: duration
							}
						}
					},
					resize = function(oid) {
						enoughForShown() ? erweimaShow(erweima) : show(oid, !1)
					},
					createLeftCouplet = function(oid, fodder) {
						var leftEl = crystal.dom.createElement({
							position: "absolute",
							top: top_edge,
							overflow: "hidden",
							"z-index": 98,
							left: "50%",
							"margin-left": -(parseInt(videoWidth / 2) + gap + parseInt(fodder.width)) + "px",
							"z-index": 3e3
						},
						{
							id: "leftCouplet"
						},
						"div");
						return createCouplet(leftEl, "left", fodder)
					},
					createRightCouplet = function(oid, fodder) {
						var rightEl = crystal.dom.createElement({
							position: "absolute",
							top: top_edge,
							overflow: "hidden",
							"z-index": 98,
							right: "50%",
							"margin-right": -(parseInt(videoWidth / 2) + gap + parseInt(fodder.width)) + "px",
							"z-index": 3e3
						},
						{
							id: "rightCouplet"
						},
						"div");
						return createCouplet(rightEl, "right", fodder)
					},
					createCouplet = function(el, align, fodder) {
						if (document.body.insertBefore(el, document.body.firstChild), renderFodder(fodder, el), "" == fodder.resource_url) return el;
						if (dom.setStyle(el, {
							display: "none",
							width: fodder.width,
							height: fodder.height
						}), dom.setStyle(el.firstChild, {
							"vertical-align": "middle"
						}), fodder.cover && ("left" === align ? evt.on(el, "click",
						function() {
							sendAction(oid, 10004)
						}) : evt.on(el, "click",
						function() {
							sendAction(oid, 10006)
						})), 0 === ua.ie && 0 === ua.gecko) {
							var ifr = document.createElement("iframe");
							ifr.style.width = "100%",
							ifr.style.height = "100%",
							ifr.style.position = "absolute",
							ifr.style.left = 0,
							ifr.style.top = 0,
							el.appendChild(ifr)
						}
						return el
					},
					enoughForShown = function() {
						var browserWidth = dom.getViewportWidth(),
						minWidth = parseInt(videoWidth) + 4 + 2 * parseInt(coupletWidth);
						return browserWidth > minWidth ? !0 : !1
					},
					show = function(oid, visible) {
						var els = orders[oid].els,
						duration = orders[oid].duration;
						visible && enoughForShown() && (startTime = Date.now(), each(els,
						function(el) {
							dom.setStyle(el, {
								display: "block"
							})
						}), timeKeeper = setTimeout(function() {
							each(els,
							function(el) {
								dom.setStyle(el, {
									display: "none"
								})
							}),
							erweimaShow(erweima)
						},
						1e3 * duration), erweima && erweimaHide(erweima), sOid = oid),
						visible || (remove(sOid), erweimaShow(erweima))
					},
					erweimaHide = function(el) {
						dom.setStyle(el, {
							visibility: "hidden"
						})
					},
					erweimaShow = function(el) {
						dom.setStyle(el, {
							visibility: "visible"
						})
					},
					sendAction = function(oid, actid) {
						var mind_url = namespace.getProtocol("//t.l.qq.com/?t=s&mid=" + oid + "&oid=" + oid + "&actid=" + actid + "&locid=&aver=");
						crystal.ping.touch(mind_url)
					},
					remove = function(sOid) {
						var els = orders[sOid].els;
						null != els && (els[0].parentNode.removeChild(els[0]), els[1].parentNode.removeChild(els[1]), orders[sOid] = null)
					},
					pause = function(oid) {
						var duration = orders[oid].duration;
						endTime = Date.now(),
						hasShownTime = parseInt((endTime - startTime) / 1e3),
						duration > hasShownTime && clearTimeout(timeKeeper)
					},
					resume = function(oid) {
						var duration = orders[oid].duration;
						timeKeeper = setTimeout(function() {
							each(els,
							function(el) {
								dom.setStyle(el, {
									display: "none"
								})
							}),
							erweimaShow(erweima)
						},
						1e3 * (duration - hasShownTime))
					},
					getElementTop = function(element) {
						for (var actualTop = element.offsetTop,
						current = element.offsetParent; null !== current;) actualTop += current.offsetTop,
						current = current.offsetParent;
						return actualTop
					};
					return {
						init: init,
						show: show,
						remove: remove,
						pause: pause,
						resume: resume
					}
				} ()
			};
			crystal.videointerface = {
				init: function(object) {
					return videoInterface.couplet.init(object),
					1
				},
				show: function(oid) {
					videoInterface.couplet.show(oid, !0);
					var mind_url = namespace.getProtocol("//t.l.qq.com/?t=s&mid=" + oid + "&oid=" + oid + "&actid=10241&locid=&aver=");
					crystal.ping.touch(mind_url)
				},
				destroy: function(oid) {
					videoInterface.couplet.remove(oid)
				},
				pause: function(oid) {
					videoInterface.couplet.pause(oid)
				},
				resume: function(oid) {
					videoInterface.couplet.resume(oid)
				}
			};
			var rot = "&rot=1",
			rot_flag = {},
			indexAdDataToParamStr_flag = !1,
			indexAdDataToParamStr = function(dataArray) {
				if (indexAdDataToParamStr_flag) return null;
				var tmpMap = {};
				dataArray.forEach(function(v) {
					if (tmpMap[v.loc]) {
						var inx = parseInt(v.index);
						tmpMap[v.loc] < inx && (tmpMap[v.loc] = inx)
					} else tmpMap[v.loc] = parseInt(v.index)
				});
				var k, v, locStr, adCntStr;
				for (k in tmpMap) tmpMap.hasOwnProperty(k) && (locStr ? locStr += "," + k: locStr = k, v = tmpMap[k], adCntStr ? adCntStr += "," + v: adCntStr = v);
				return indexAdDataToParamStr_flag = !0,
				{
					locParamStr: locStr,
					adCntParamStr: adCntStr
				}
			},
			request = namespace.request = function(area0) {
				"norot" == namespace.rot && (rot = "");
				var no_data_area_ids;
				if (no_data_area_ids = area0 === !0 ? findAreas() : filter("string" == typeof arguments[0] ? arguments: findAreas(),
				function() {
					return ! 0
				}), "string" == typeof arguments[0]) for (var lview_data = {
					"l.qq.com": {
						charset: crystal_args.charset,
						lview_template: crystal_args.lview_template,
						data: [],
						index_data: []
					}
				},
				i = 0, len = no_data_area_ids.length; len > i; i++)"undefined" != typeof no_data_area_ids[i] && (no_data_area_ids[i].indexOf(":") ? lview_data["l.qq.com"].index_data.push(namespace.location.parseIndexLoc(document.getElementById(no_data_area_ids[i]))) : lview_data["l.qq.com"].data.push(no_data_area_ids[i]));
				else var lview_data = namespace.location.getLview();
				namespace.each(lview_data,
				function(val, key) {
					val.data = filter(val.data, isNewArea);
					var indexData = val.index_data;
					0 !== indexData.length && namespace.cpm_prefix_process();
					var indexDataParamStr = indexData.length > 0 ? indexAdDataToParamStr(indexData) : void 0;
					if (val.data.length > 0 || indexData.length > 0) {
						if (val.data.join(",").indexOf("QQ_takeover") >= 0) var callback = function() {
							namespace.lviewTimeout || Cps.timeEnd("lview-" + key),
							Cps.time("ping");
							var hasTakeover = [];
							clearTimeout(timeout_handle);
							var toConfig = display_buffer.QQ_takeover;
							"undefined" != typeof toConfig && "1" !== toConfig.oid && "100" != toConfig.oid && hasTakeover.push("takeover"),
							renderBuffer.apply(window, val.data),
							each(val.data,
							function(area_id) {
								delete in_reqeusting_ids[area_id]
							}),
							window.QQindexAd && "function" == typeof window.QQindexAd && QQindexAd({
								displayCode: hasTakeover
							})
						};
						else var callback = function() {
							namespace.lviewTimeout || Cps.timeEnd("lview-" + key),
							Cps.time("ping"),
							clearTimeout(timeout_handle),
							renderBuffer.apply(window, val.data),
							each(val.data,
							function(area_id) {
								delete in_reqeusting_ids[area_id]
							})
						};
						var ri, lview_url = crystal_args.lview_template.replace("l.qq.com", key);
						if (ri = "&ri=" + key.substr(0, 2), rot_flag[key] && -1 === rot.indexOf("ri")) var rot_string = ri;
						else {
							var rot_string = rot.indexOf("ri") > -1 ? rot: rot + ri;
							rot_flag[key] = !0
						}
						Cps.time("lview-" + key);
						var paramLoc = indexDataParamStr ? indexDataParamStr.locParamStr: "",
						normalData = val.data.join(",");
						paramLoc += paramLoc && normalData ? "," + normalData: normalData,
						importScript(format(lview_url, {
							loc: paramLoc,
							oid: crystal_args.oid,
							cid: crystal_args.cid
						}) + (indexDataParamStr ? "&ad_cnt=" + indexDataParamStr.adCntParamStr: "") + "&callback=" + lib_name + ".callbackarea" + rot_string + "&chl=" + channel + "&page_type=" + PageType(location.href) + collectInfo(1), callback, val.charset,
						function() {
							Cps.setEnvInfoProperty("adb", 2),
							Cps.setEnvInfoProperty("err", 4003),
							Cps.flush()
						});
						var timeout_handle = setTimeout(function() {
							Cps.setDuration("lview", -1),
							Cps.setEnvInfoProperty("err", 4002),
							namespace.lviewTimeout = !0,
							Cps.flush(),
							callback()
						},
						1e3 * crystal_args.lview_time_out)
					}
				}),
				renderBuffer()
			},
			requestSwitch = namespace.requestSwitch = function(adLoc) {
				rendered_area[adLoc] && (rendered_area[adLoc] = !1, indexAdDataToParamStr_flag = !1),
				ri = adLoc.replace(/:/g, "_"),
				rot = "&rot=1&ri=" + ri,
				crystal.request(adLoc)
			}; !
			function() {
				{
					var timer, oldTabName, timePoint = 0,
					windowActiveFlag = !0,
					switchLimit = 15,
					startTimer = function() {
						timer ? checkTimeUp() : timer = setInterval(function() {
							timePoint += 1,
							checkTimeUp()
						},
						1e3)
					},
					pauseTimer = function() {
						timer && (clearInterval(timer), timer = null, timePoint = 0)
					},
					checkTimeUp = function() {
						timePoint >= switchLimit && (request_adswitch(oldTabName), timePoint = 0)
					},
					request_adswitch = function(oldTabName) {
						for (var tab = document.getElementById(oldTabName), tags = ["div"], ads = dom.getElementsByClassName("l_qq_com", tags), adLocs = [], i = 0; i < ads.length; i++) namespace.contains(tab, ads[i]) && adLocs.push(ads[i].getAttribute("id"));
						request_force_aio(adLocs)
					},
					request_force_aio = function(adLocs) {
						rot = "&rot=1&ri=AIO" + adLocs[0].substr( - 5);
						for (var adLocsLength = adLocs.length,
						i = 0; adLocsLength > i; i++) {
							var loc_id = adLocs[i];
							delete display_buffer[loc_id],
							delete rendered_area[loc_id]
						}
						"tab_house" === oldTabName ? crystal.request(adLocs[0]) : "tab_dfz" === oldTabName ? crystal.request(adLocs[1], adLocs[2]) : "all_side" === oldTabName && crystal.request(adLocs[0], adLocs[1])
					},
					checkActive = function(windowActiveFlag) {
						windowActiveFlag ? "block" === getAdState("all_side") ? checkAdChange("all_side") : "block" === getAdState("tab_house") ? checkAdChange("tab_house") : "block" === getAdState("tab_dfz") ? checkAdChange("tab_dfz") : (pauseTimer(), oldTabName = null) : pauseTimer()
					},
					getAdState = function(tabName) {
						var tab = document.getElementById(tabName);
						if (tab) var adState = tab.style.display;
						else var adState = null;
						return adState
					},
					checkAdChange = function(tabName) {
						oldTabName && oldTabName == tabName || (pauseTimer(), oldTabName = tabName),
						startTimer()
					};
					namespace.windowActive = function(flag) {
						windowActiveFlag = flag,
						checkActive(windowActiveFlag)
					},
					namespace.tabActive = function() {
						checkActive(windowActiveFlag)
					}
				}
			} (),
			+
			function() {
				var domain = "dp3.qq.com",
				mapping_server = namespace.getProtocol("//" + domain + "/dynamic?get_type=cm&ch=" + encodeURIComponent(channel) + "&callback=" + lib_name + ".cookieMapping");
				namespace.cookieMapping = function(mapping_urls) {
					if (mapping_urls && mapping_urls.length > 0) for (var i = 0; i < mapping_urls.length; i++) sendPing(mapping_urls[i].url)
				},
				importScript(mapping_server)
			} ();
			var isArray = function(o) {
				return !! o && "object" == typeof o && "number" == typeof o.length
			},
			urlAppendQuery = function(sUrl, dictData, isEncode) {
				return sUrl + (dictData ? ( - 1 == sUrl.indexOf("?") ? "?": "&") + serializeDictionary("=", "&", !1, isEncode)(dictData) : "")
			},
			jsonp = function(sUrl, dictData, callback) {
				var methodName = generateId();
				window[methodName] = function() {
					callback.apply(null, arguments),
					setTimeout(function() {
						try {
							delete window[methodName]
						} catch(e) {
							window[methodName] = void 0
						}
					},
					1)
				},
				crystal_args.collect && ("qq" == crystal_args.runat || (dictData = mix(dictData, collectInfo()))),
				importScript(urlAppendQuery(sUrl, mix({
					callback: methodName
				},
				dictData), !1), null, crystal_args.charset)
			},
			getLocData = function(url, locIds, callback) {
				jsonp(url, {
					loc: locIds.join(",")
				},
				callback)
			},
			getLocIds = function(className, tags, callback) {
				callback(map(filter(dom.getElementsByClassName(className, tags),
				function(el) {
					return !! el.id
				}),
				function(el) {
					return el.id
				}))
			},
			gdt10SpanLocs = [],
			gdt11SpanLocs = [],
			transferSpanAd = function(gdtSpanLocs, posId) {
				var gdtReq = {
					posId: posId,
					count: gdtSpanLocs.length,
					container: null,
					onComplete: function(data) {
						if (data.ret === !0) {
							for (var rdataLen = data.data.length,
							i = 0; rdataLen > i; i++) {
								var mergedOrder = gdtSpanLocs[i];
								mergedOrder.fodder[0] = data.data[i].txt,
								mergedOrder.need_ping = !0,
								mergedOrder.oid = 59,
								mergedOrder.olink = data.data[i].olink,
								mergedOrder.pid = data.cfg.id,
								renderArea(mergedOrder, mergedOrder.loc)
							}
							if (GDT.viewpos(posId), gdtSpanLocs.length - rdataLen > 0) for (var i = rdataLen; i < gdtSpanLocs.length; i++) {
								var order = gdtSpanLocs[i];
								renderArea(order, order.loc)
							}
						} else each(gdtSpanLocs,
						function(order) {
							renderArea(order, order.loc)
						})
					}
				};
				GDT.load(gdtReq)
			},
			textAdSwitch = !0,
			requestText = namespace.requestText = function() {
				getLocIds("w-l-qq-com", ["span"],
				function(arrIds) {
					var arrIds = unique(arrIds);
					if (0 != arrIds.length) {
						for (var splitIds = []; arrIds.length > 24;) splitIds.push(arrIds.splice(0, 24));
						splitIds.push(arrIds.splice(0, arrIds.length));
						for (var reqNum = 0,
						i = 0,
						len = splitIds.length; len > i; i++) !
						function() {
							var originalUrl = (splitIds[i], namespace.getProtocol("//w.l.qq.com/lview?type=text")),
							url = originalUrl + (textAdSwitch ? "&rot=1&ri=_textAd": "&ri=_textAd");
							textAdSwitch = !1,
							getLocData(url, splitIds[i],
							function(oLoc) {
								var arrLoc;
								isArray(oLoc) ? arrLoc = oLoc: (arrLoc = [], each(oLoc,
								function(config) {
									arrLoc.push(config)
								})),
								each(arrLoc,
								function(locOrders) {
									each(locOrders,
									function(order) {
										"1" == order.gdt_replace ? order.loc.indexOf("News_F_Right_text") > -1 ? gdt11SpanLocs.push(order) : gdt10SpanLocs.push(order) : renderArea(order, order.loc)
									})
								}),
								reqNum++,
								reqNum == splitIds.length && (gdt10SpanLocs.length > 0 && transferSpanAd(gdt10SpanLocs, 6020707534139875), gdt11SpanLocs.length > 0 && transferSpanAd(gdt11SpanLocs, 5020400524138893))
							})
						} ()
					}
				})
			},
			hidden,
			visibilityChange,
			viewer = {
				viewLocs: ["Fashion_Width1", "Fashion_Width2", "Fashion_Width3", "Fashion_Width4", "Fashion_Width5", "Fashion_Button1", "Fashion_button2", "Fashion_button3", "F_D_Width1", "F_Rectangle_N", "F_UpRight1", "F_Width1_N", "F_Width2", "F_ZQ_1", "F_ZQ_2", "F_Z_Width1", "QQlive_SP_DSJ_banner1", "QQlive_SP_DSJ_banner2", "QQlive_SP_DSJ_banner3"],
				locs: {},
				viewTime: 1e3,
				state: "NO_INIT",
				minds: {
					50 : 10220,
					100 : 10221
				},
				viewPing: function(id, percent, ping) {
					ping()
				},
				displayFix: function(id, display) {
					if ("block" == display) {
						if ("none" == this.locs[id].display) {
							var adStyle = {
								display: display
							};
							this.locs[id].height || (adStyle.height = "1px"),
							dom.setStyle(dom.$(id), adStyle)
						}
						this.locs[id].diffX = dom.$(id).offsetWidth,
						this.locs[id].diffY = dom.$(id).offsetHeight,
						this.locs[id].area = this.locs[id].diffX * this.locs[id].diffY,
						this.locs[id].point = dom.getXY(dom.$(id))
					}
					"none" == display && "none" == this.locs[id].display && dom.setStyle(dom.$(id), {
						display: display,
						height: this.locs[id].height
					})
				},
				addLoc: function(order, id, team, callback) {
					this.locs[id] || (this.locs[id] = {
						order: order,
						display: dom.getStyle(dom.$(id), "display"),
						width: dom.$(id).style.width,
						height: dom.$(id).style.height,
						viewList: team,
						callback: callback
					},
					this.displayFix(id, "block"), this.viewCheck(), "NO_INIT" == this.state && this.start())
				},
				viewCheck: function(isReCall) {
					if ("STOP" != this.state) {
						var pageTop = dom.getDocumentScrollTop(),
						pageBottom = pageTop + dom.getViewportHeight(),
						pageLeft = dom.getDocumentScrollLeft(),
						pageRight = pageLeft + dom.getViewportWidth(),
						checkOver = !0;
						return each(viewer.locs,
						function(o, id) {
							o.point = dom.getXY(dom.$(id));
							var lenX = lenY = 0;
							if (o.point[0] + o.diffX < pageLeft || o.point[0] > pageRight || o.point[1] + o.diffY < pageTop || o.point[1] > pageBottom) return checkOver = !1,
							void(isLocCheckOver = !1);
							lenX = o.point[0] < pageLeft ? o.point[0] + o.diffX - pageLeft: o.point[0] < pageRight - o.diffX ? o.diffX: pageRight - o.point[0],
							lenY = o.point[1] < pageTop ? o.point[1] + o.diffY - pageTop: o.point[1] < pageBottom - o.diffY ? o.diffY: pageBottom - o.point[1];
							var isLocCheckOver = !0;
							each(o.viewList,
							function(time, percent) {
								return lenX * lenY < o.area * percent / 100 ? (o.viewList[percent] = -1, checkOver = !1, void(isLocCheckOver = !1)) : -1 == time ? (o.viewList[percent] = (new Date).getTime(), checkOver = !1, void(isLocCheckOver = !1)) : void((new Date).getTime() - time >= viewer.viewTime - 100 ? (viewer.viewPing(id, percent, o.callback), delete o.viewList[percent]) : (checkOver = !1, isLocCheckOver = !1))
							}),
							isLocCheckOver && (viewer.displayFix(id, "none"), delete viewer.locs[id])
						}),
						checkOver ? (evt.un(window, "resize", viewer.viewCheck), evt.un(window, "scroll", viewer.viewCheck), this.state = "STOP", void(viewTimer && clearTimeout(viewTimer))) : void(isReCall !== !0 && (viewTimer = setTimeout(function() {
							viewer.viewCheck(!0)
						},
						viewer.viewTime)))
					}
				},
				start: function() {
					this.state = "RUN",
					evt.on(window, "resize", this.viewCheck),
					evt.on(window, "scroll", this.viewCheck),
					"undefined" != typeof document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (hidden = "mozHidden", visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"),
					evt.on(document, visibilityChange, this.handleVisibilityChange)
				},
				handleVisibilityChange: function() {
					document[hidden] ? (viewer.state = "STOP", each(viewer.locs,
					function(o) {
						o.viewList = {
							50 : -1
						}
					})) : (viewer.state = "RUN", viewer.viewCheck())
				}
			};
			crystal_args.execute_on_ready && evt.ready(function() {
				Cps.timeEnd("dr"),
				request(),
				setInterval(function() {
					dom.$("QQlive_SP_HP_minibanner1") && request_force("QQlive_SP_HP_minibanner1"),
					dom.$("QQlive_N_SP_HP_minibanner1") && request_force("QQlive_N_SP_HP_minibanner1")
				},
				36e4)
			}),
			evt.ready(requestText),
			namespace.switchVideo = function(locs) {
				if (locs.length) for (var i = 0,
				len = locs.length; len > i; i++) request_force(locs[i])
			};
			var DISCUZ_MAX_SLOT_COUNT = crystal_args.MAX_SLOT_COUNT,
			renderedSlotsCount = 0,
			renderedSlots = {},
			createPlaceHolder = function(slotId, width, height, type) {
				var scripts = document.getElementsByTagName("script"),
				script = scripts[scripts.length - 1],
				container = dom.createElement({
					width: width + "px",
					height: height + "px",
					overflow: "hidden"
				});
				return container.id = type || "discuz" != crystal_args.runat ? slotId: slotId + "SLOT" + generateId(),
				script.parentNode.replaceChild(container, script),
				container
			},
			addStaticSlot = function(options) {
				var slotType = options.type || "";
				if (slotType || !(++renderedSlotsCount > DISCUZ_MAX_SLOT_COUNT)) {
					var slotId = options.id,
					slotWidth = options.width || 0,
					slotHeight = options.height || 0,
					slotContainer = createPlaceHolder(slotId, slotWidth, slotHeight, slotType),
					real_location_id = slotContainer.id;
					options.data || (getLocData(crystal_args.lview_template.replace("loc={loc}", ""), [slotId],
					function(arrLoc) {
						if (arrLoc && arrLoc.length) {
							var display = arrLoc[0].display; - 1 != indexOf(["turner", "focusimage"], display) ? (arrLoc = {
								display: display,
								data: arrLoc
							},
							renderedSlots[real_location_id] = !0, afterImportExtension(function() {
								renderArea(arrLoc, real_location_id)
							})) : each(arrLoc,
							function(locOrders) {
								isArray(locOrders) || (locOrders = [locOrders]),
								each(locOrders,
								function(orderConfig) {
									orderConfig = spec_oid(orderConfig),
									orderConfig.loc = real_location_id,
									renderedSlots[real_location_id] = !0;
									var display = orderConfig.display;
									dic_display[display] ? renderArea(orderConfig, orderConfig.loc) : afterImportExtension(function() {
										renderArea(orderConfig, orderConfig.loc)
									})
								})
							})
						}
					}), setTimeout(function() {
						renderedSlots[real_location_id] || renderArea(buildDefaultCreativityConfig(slotId), slotId)
					},
					6e3))
				}
			};
			namespace.addStaticSlot = addStaticSlot,
			namespace.analyze = function(src) {
				afterImportExtension(function() {
					importScript(src)
				})
			},
			namespace.AdDetectingLoader = {
				parseParam: function() {
					var result = {},
					hashParams = /^\#(.*)/.exec(window.location.hash);
					hashParams = hashParams ? hashParams[1] : "",
					hashParams = hashParams.split("&");
					var i, param, len = hashParams.length;
					for (i = 0; len > i; i++) param = hashParams[i].split("="),
					result[param[0]] = param[1];
					return result
				},
				load: function(params) {
					var adDetectingJsUrl = params.url || namespace.resource("res/ad_detecting.js"),
					delay = params.delay || 0;
					afterImportExtension(function() {
						setTimeout(function() {
							importScript(adDetectingJsUrl)
						},
						1e3 * delay)
					})
				},
				init: function(option) {
					if (option.autoLoad === !0) {
						var params = this.parseParam();
						"1" === params.crystal_mode && this.load(params)
					}
				}
			},
			namespace.AdDetectingLoader.init({
				autoLoad: !0
			});
			var render_param_couplet = {
				renderclick: 1,
				maxclick_num: 5,
				repeatTimer: null,
				preindex: null,
				name: "couplet",
				flag: 0
			},
			render_param_central = {
				renderclick: 1,
				maxclick_num: 10,
				repeatTimer: null,
				preindex: null,
				name: "central",
				flag: 0,
				loc_id: ""
			};
			namespace.render = function(opt) {
				function renderPicAd(config, predo) {
					"show_" + config.name;
					if (1 == config.flag) doShow(config.name);
					else if (2 == config.flag);
					else if (0 == config.flag) if (null !== config.repeatTimer);
					else {
						predo && setTimeout(function() {
							predo()
						},
						10);
						var maxrepeat_count = 20,
						repeat_count = 0;
						config.repeatTimer = setInterval(function() {
							repeat_count++,
							repeat_count > maxrepeat_count && clearInterval(config.repeatTimer),
							0 != config.flag ? clearInterval(config.repeatTimer) : doShow(config.name)
						},
						500)
					}
				}
				function doShow(display_name) {
					"central" == display_name ? show_central("", index, total) : "couplet" == display_name && show_couplet(loc_id, index, total)
				}
				var loc_id = opt.loc || "",
				index = parseInt(opt.curr, 10),
				total = parseInt(opt.total, 10);
				index = isNaN(index) ? 0 : index,
				total = isNaN(total) ? 0 : total;
				var initRender = function(loc_id) {
					rot = "&rot=1&ri=0",
					request(loc_id)
				},
				show_couplet = function(loc_id, index, total) {
					var locClass = namespace.getArea(loc_id);
					render_param_couplet.flag = 1;
					var show_abled = !1;
					if (0 != index && index != total - 1 ? (show_abled = !0, locClass.invoke("show")) : locClass.invoke("hide"), render_param_couplet.renderclick < render_param_couplet.maxclick_num) {
						if (render_param_couplet.preindex != index) return null !== render_param_couplet.preindex && show_abled && (render_param_couplet.renderclick = render_param_couplet.renderclick + 1),
						void(render_param_couplet.preindex = index)
					} else show_abled && (render_param_couplet.renderclick = 1, render_param_couplet.preindex = index, render_param_couplet.flag = 0, render_param_couplet.repeatTimer = null, delete display_buffer[loc_id], delete rendered_area[loc_id], locClass.invoke("remove"), namespace.clearArea(loc_id), renderPicAd(render_param_couplet,
					function() {
						initRender(loc_id)
					}))
				},
				is_central_showable = function(index, total) {
					return total - 10 > index && 0 != index ? !0 : !1
				},
				show_central = function(loc_id, index, total) {
					if (render_param_central.loc_id) var loc_id = render_param_central.loc_id;
					else {
						var nodes = namespace.dom.getElementsByClassName("central_center", ["div"]);
						if (! (nodes.length > 0)) return;
						var loc_id = nodes[0].id;
						render_param_central.loc_id = loc_id,
						render_param_central.flag = 1
					}
					var locClass = namespace.getArea(loc_id),
					show_abled = !1;
					if (locClass.invoke("close"), is_central_showable(index, total) && (show_abled = !0), render_param_central.renderclick < render_param_central.maxclick_num) {
						if (render_param_central.preindex != index) return null !== render_param_central.preindex && show_abled && (render_param_central.renderclick = render_param_central.renderclick + 1),
						void(render_param_central.preindex = index)
					} else show_abled && (render_param_central.renderclick = 1, locClass.invoke("open")),
					render_param_central.preindex = index
				};
				renderPicAd(render_param_couplet,
				function() {
					initRender(loc_id)
				}),
				renderPicAd(render_param_central)
			};
			var spec_oid = function(cc) {
				return 1 == cc.oid ? cc.display = "null": 100 == cc.oid && (cc.display = "auto"),
				cc
			},
			ResourceSpeed = {
				test: function(resourceUrl, callback) {
					if (crystal_args.jsProfileOpen) {
						var fls = this.detectFlash(),
						swfDivId = "rsDetector",
						swfDiv = document.getElementById(swfDivId);
						fls.f ? (namespace.resourceInvalid = !1, swfDiv || (swfDiv = document.createElement("div"), swfDiv.id = swfDivId, document.body.appendChild(swfDiv),
						function(cb) {
							namespace.resourceSpeedCallback = function(data) {
								"success" === data.message ? ( - 2 === data.timer ? Cps.setEnvInfoProperty("err", 5004) : Cps.setDuration("cdn", data.timer), Cps.setEnvInfoProperty("cdnsize", data.size), Cps.setEnvInfoProperty("cdnsp", data.speed)) : "timeout" === data.message ? (Cps.setDuration("cdn", -1), Cps.setEnvInfoProperty("err", 5002)) : "error" === data.message && (Cps.setEnvInfoProperty("err", 5003), Cps.setEnvInfoProperty("adb", 3)),
								namespace.cdnTest = !0,
								cb && cb()
							}
						} (callback), namespace.renderFodder({
							resource_url: namespace.resource_swf("res/loadTimer.swf"),
							width: 1,
							height: 1,
							initvars: {
								res: resourceUrl,
								callb: "crystal.resourceSpeedCallback",
								timeout: 1e3 * crystal_args.lview_time_out
							}
						},
						swfDiv), swfDiv.style.fontSize = "0")) : (namespace.resourceInvalid = !1, Cps.setEnvInfoProperty("err", 5005), namespace.cdnTest = !0)
					}
				},
				detectFlash: function() {
					var fv = namespace.getFlashVersion();
					return {
						f: 0 === fv ? !1 : !0,
						v: fv
					}
				},
				isValidResource: function(resource) {
					var ext = resource && resource.indexOf(".") > -1 ? namespace.getExtension(resource) : "";
					return ["jpg", "jpeg", "png", "swf"].indexOf(ext.toLowerCase()) > -1
				}
			},
			IndexAdHelper = {
				map: function(adDataArray) {
					var i, len = adDataArray.length;
					this.lviewdata = namespace.location.getCpmLoc();
					for (var i = 0; len > i; i++) {
						var currentDataArray = adDataArray[i];
						this.arrayElToArray(currentDataArray, adDataArray)
					}
					return adDataArray
				},
				arrayElToArray: function(arr, repo) {
					if (arr && arr.length >= 1) {
						for (; arr.length > 1;) {
							var adData = arr.pop();
							adData.index && (adData.loc = this.formatIndexAdId(adData)),
							repo.push([adData])
						}
						for (var firstEl = arr[0], flag = !1, loc = firstEl.loc, i = 0; i < this.lviewdata.length; i++) this.lviewdata[i] === firstEl.loc && (flag = !0, loc = this.lviewdata[i]);
						firstEl.loc = flag ? this.formatIndexAdId(firstEl) : loc
					}
				},
				formatIndexAdId: function(adData) {
					var loc = adData.loc,
					index = adData.index;
					return loc && index ? loc + ":" + index: void 0
				}
			};
			namespace.area = function(area_config) {
				if (area_config) {
					var area_id = area_config.id;
					return display_buffer[area_id] = NO_AD,
					function() {
						if (0 != arguments.length) {
							var creativity_config = arguments[display_index % arguments.length];
							namespace.pageinfo.order.push(creativity_config);
							var r = creativity_config.fodder && creativity_config.fodder[0] ? creativity_config.fodder[0].resource_url: ""; ! namespace.lviewTimeout && ResourceSpeed.isValidResource(r) ? ResourceSpeed.test(r,
							function() {
								namespace.pingSent && Cps.flush()
							}) : null == namespace.resourceInvalid && (namespace.resourceInvalid = !0),
							1 == creativity_config.oid && (creativity_config.display = "null"),
							100 == creativity_config.oid && (creativity_config.display = "auto");
							var display = creativity_config.display;
							if ( - 1 != indexOf(["turner", "focusimage"], display) && (creativity_config = {
								display: display,
								data: arguments
							}), display_buffer[area_id] = creativity_config, "QQcom_all_Width1:1" === area_id && "undefined" != typeof checkTopAd) {
								var adObj;
								adObj = parseInt(creativity_config.oid) > 1e4 ? {
									hasAd: !0,
									height: creativity_config.fodder[0].height
								}: null,
								checkTopAd(adObj)
							}
						}
					}
				}
			};
			var setGdtReq = function(locInfo, gdtLocIds) {
				var loc = locInfo[0].loc,
				index = locInfo[0].index,
				cpmLoc = loc.split(":")[0],
				cnt = document.getElementById(loc);
				if (gdtLocIds.length > 0) var gdtReq = {
					posId: gdtLocIds.shift(),
					count: 1,
					container: cnt,
					onComplete: function(data) {
						if (data.ret === !0) {
							var url = namespace.getProtocol("//p.l.qq.com/p?loc=" + cpmLoc + "&oid=59&index=" + index + "&pv_type=0&exp=1&page_type=" + PageType(location.href) + "&chl=" + channel);
							if (namespace.ping.touch(url), loc.indexOf("QQcom_all_Width1") > -1 && (cnt.style.height = "90px", "QQcom_all_Width1:1" === loc && "undefined" != typeof checkTopAd)) {
								var adObj = {
									hasAd: !0,
									height: 90
								};
								checkTopAd(adObj)
							}
							loc.indexOf("QQcom_all_Rectangle") > -1 && (cnt.style.height = "250px"),
							loc.indexOf("F_Rectangle_N") > -1 && (cnt.style.height = "600px"),
							viewer.addLoc(null, loc, {
								50 : -1
							},
							function() {
								var url = namespace.getProtocol("//p.l.qq.com/p?loc=" + cpmLoc + "&oid=59&index=" + index + "&pv_type=0&exp=0&page_type=" + PageType(location.href) + "&chl=" + channel);
								namespace.ping.touch(url);
								var pid = data.cfg.pid;
								GDT.viewpos(pid)
							}),
							crystal_args.hasViewed[loc] = !0
						} else if (loc) {
							rendered_area[loc] = !1;
							var func = namespace.area({
								id: loc
							});
							func.apply(null, locInfo),
							renderBuffer()
						}
					},
					onClick: function() {
						var url = namespace.getProtocol("//c.l.qq.com/lclick?loc=" + cpmLoc + "&oid=59&index=" + index + "&pv_type=0&exp=0&page_type=" + PageType(location.href) + "&chl=" + channel);
						namespace.ping.touch(url)
					}
				};
				return gdtReq
			},
			transferDivAd = function(gdtDivLocs) {
				for (var gdtReq, gdt_tonglans = ["1040707514135770", "1010800524338721", "3030804534536712", "4010800554535793", "2010705564430784", "3020006584834785"], gdt_qtz = ["1010606534335861"], gdt_jxdts = ["4030100564331738", "8020900594832729", "2040104554636830", "2010902529471334", "1000709519679315"], gdtReqs = [], i = 0, len = gdtDivLocs.length; len > i; i++) {
					var loc = gdtDivLocs[i][0].loc;
					loc.indexOf("QQcom_all_Width1") > -1 ? gdtReq = setGdtReq(gdtDivLocs[i], gdt_tonglans) : loc.indexOf("QQcom_all_Rectangle") > -1 ? gdtReq = setGdtReq(gdtDivLocs[i], gdt_jxdts) : loc.indexOf("F_Rectangle_N") > -1 && (gdtReq = setGdtReq(gdtDivLocs[i], gdt_qtz)),
					gdtReqs.push(gdtReq)
				}
				return gdtReqs
			},
			chkGDTAdLoc = function(loc) {
				return loc.indexOf("QQcom_all_Width1") > -1 || loc.indexOf("QQcom_all_Rectangle") > -1 || loc.indexOf("F_Rectangle_N") > -1 ? !0 : !1
			},
			domain = [],
			chromeblock = function() {
				var chromever = browsersniffer(navigator.userAgent);
				if (0 === chromever.indexOf("chrome") && parseInt(chromever.substr(6)) >= 45) for (var i = 0; i < fodder_url_data.length; i++) {
					{
						var reg;
						"https:" == document.location.protocol ? "https": "http"
					}
					reg = new RegExp(fodder_url_data[i].indexOf("http") > -1 ? "http://([^/]*)/": "//([^/]*)/");
					var ret = fodder_url_data[i].match(reg);
					ret && -1 === domain.indexOf(ret[1]) && !
					function() {
						var swfHtml = '<div style="position:fixed;bottom:0;left:-500px;"><object data="' + fodder_url_data[i] + '" style="visibility:hidden;width:500px;height:300px;"><param name="wmode" value="opaque"></object></div>',
						div = document.createElement("div");
						div.innerHTML = swfHtml,
						document.body.appendChild(div),
						domain.push(ret[1]),
						setTimeout(function() {
							div.parentNode.removeChild(div)
						},
						5e3)
					} ()
				}
			};
			namespace.callbackarea = function(arrLoc) {
				isArray(arrLoc[0]) && (arrLoc = IndexAdHelper.map(arrLoc));
				for (var gdtDivLocs = [], i = 0, len = arrLoc.length; len > i; i++) if (isArray(arrLoc[i]) && arrLoc[i].length > 0) {
					var func;
					if ("1" == arrLoc[i][0].gdt_replace && chkGDTAdLoc(arrLoc[i][0].loc)) {
						gdtDivLocs.push(arrLoc[i]);
						var loc = arrLoc[i][0].loc;
						rendered_area[loc] = !0
					} else if (arrLoc[i][0].loc) {
						var func = namespace.area({
							id: arrLoc[i][0].loc
						});
						func.apply(null, arrLoc[i])
					}
				} else if (arrLoc[i].loc) {
					var func = namespace.area({
						id: arrLoc[i].loc
					});
					func.apply(null, [arrLoc[i]])
				}
				if (gdtDivLocs.length > 0) {
					var gdtReqs = transferDivAd(gdtDivLocs);
					GDT.load(gdtReqs)
				}
				setTimeout(function() {
					chromeblock()
				},
				500)
			},
			namespace.getDisplayHandler = function(id) {
				return dic_display[id]
			},
			namespace.setDisplayHandler = function(o) {
				mix(dic_display, o)
			},
			namespace.orderProcess = function() {
				if ("undefined" != typeof namespace.display_orders) {
					var order = namespace.display_orders.shift();
					order && renderArea(order.config, order.id)
				}
			};
			var ime = namespace.ime = {
				_isAbleInput: !0,
				_isChangeCursor: !0,
				_target: "",
				_swf: [],
				_element: fp11input,
				_setTxt: function(v) {
					this._element.value = v
				},
				setFocus: function(b, swfid, target, txt, index, index1) {
					this._isAbleInput = b,
					this._target = target;
					var pos = dom.getXY(dom.$(swfid));
					dom.setStyle(this._element, {
						left: pos[0] + "px",
						top: pos[1] + "px",
						cursor: "none"
					}),
					this._element.setAttribute("swfid", swfid),
					this._element.focus(),
					this._element.blur(),
					this._element.select(),
					b ? (this._isChangeCursor = !1, this._setTxt(txt), this._isChangeCursor = !0, this.setCaretPosition(this._element, index, index1)) : this._setTxt("")
				},
				immediately: function(swfid) {
					var element = this._element = fp11input,
					lib = this;
					ua.ie ? evt.on(element, "propertychange",
					function(evt) {
						"value" == evt.propertyName && lib.webChange(lib, swfid)
					}) : evt.on(element, "input",
					function() {
						lib.webChange(lib, swfid)
					},
					!0),
					this.listenKey(lib, swfid)
				},
				webChange: function(lib, swfid) {
					lib._isAbleInput && lib._isChangeCursor && lib.outPut(lib, swfid)
				},
				outPut: function(lib, swfid) {
					var targetswf = namespace.getFlashObject(swfid),
					activeId = lib._element.getAttribute("swfid");
					lib._target && swfid == activeId && targetswf.getInput && setTimeout(function() {
						targetswf.getInput(lib._element.value, lib._target, lib.getCursortPosition(lib._element))
					},
					100)
				},
				getCursortPosition: function(ctrl) {
					var CaretPos = 0,
					startPos = 0;
					if (document.selection) {
						ctrl.focus();
						var Sel = document.selection.createRange(),
						selLen = Sel.text.length;
						Sel.moveStart("character", -ctrl.value.length),
						CaretPos = Sel.text.length,
						startPos = CaretPos - selLen
					} else(ctrl.selectionStart || "0" == ctrl.selectionStart) && (startPos = ctrl.selectionStart, CaretPos = ctrl.selectionEnd);
					return [startPos, CaretPos]
				},
				setCaretPosition: function(ctrl, pos, pos1) {
					if (ctrl.setSelectionRange) ctrl.focus(),
					ctrl.setSelectionRange(pos, pos1);
					else if (ctrl.createTextRange) {
						var range = ctrl.createTextRange();
						range.collapse(!0),
						range.moveEnd("character", pos1),
						range.moveStart("character", pos),
						range.select()
					}
				},
				listenKey: function(lib, swfid) {
					document.addEventListener ? document.addEventListener("keydown",
					function(event) {
						lib.getKey(event, lib, swfid)
					},
					!0) : document.attachEvent ? document.attachEvent("onkeydown",
					function(event) {
						lib.getKey(event, lib, swfid)
					}) : document.onkeydown = function(event) {
						lib.getKey(event, lib, swfid)
					}
				},
				getKey: function(e, lib, swfid) {
					e = e || window.event;
					var keycode = e.which ? e.which: e.keyCode; (35 == keycode || 36 == keycode || 37 == keycode || 39 == keycode || 8 == keycode || 46 == keycode) && lib.outPut(lib, swfid)
				}
			};
			namespace.getAntiCSRFToken = getAntiCSRFToken,
			namespace.getApitoken = apiTokenEncode;
			var DelayClass = Class.create({
				init: function() {
					this.invokes = []
				},
				invoke: function() {
					this.invokes.push(arguments)
				},
				set: function(o) {
					this.invoke = function(method, args) {
						return o[method] ? o[method].apply(o, args || []) : void 0
					},
					each(this.invokes,
					function(args) {
						this.invoke(args[0], args[1])
					},
					this)
				}
			});
			"object" != typeof namespace.json && (namespace.json = {}),
			function() {
				"use strict";
				function f(n) {
					return 10 > n ? "0" + n: n
				}
				function quote(string) {
					return escapable.lastIndex = 0,
					escapable.test(string) ? '"' + string.replace(escapable,
					function(a) {
						var c = meta[a];
						return "string" == typeof c ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
					}) + '"': '"' + string + '"'
				}
				function str(key, holder) {
					var i, k, v, length, partial, mind = gap,
					value = holder[key];
					switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), "function" == typeof rep && (value = rep.call(holder, key, value)), typeof value) {
					case "string":
						return quote(value);
					case "number":
						return isFinite(value) ? String(value) : "null";
					case "boolean":
					case "null":
						return String(value);
					case "object":
						if (!value) return "null";
						if (gap += indent, partial = [], "[object Array]" === Object.prototype.toString.apply(value)) {
							for (length = value.length, i = 0; length > i; i += 1) partial[i] = str(i, value) || "null";
							return v = 0 === partial.length ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]",
							gap = mind,
							v
						}
						if (rep && "object" == typeof rep) for (length = rep.length, i = 0; length > i; i += 1)"string" == typeof rep[i] && (k = rep[i], v = str(k, value), v && partial.push(quote(k) + (gap ? ": ": ":") + v));
						else for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": ": ":") + v));
						return v = 0 === partial.length ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}",
						gap = mind,
						v
					}
				}
				"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
					return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
				},
				"function" != typeof String.prototype.toJSON && (String.prototype.toJSON = function() {
					return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
				}), "function" != typeof Number.prototype.toJSON && (Number.prototype.toJSON = function() {
					return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
				}), "function" != typeof Boolean.prototype.toJSON && (Boolean.prototype.toJSON = function() {
					return "function" == typeof this.valueOf ? this.valueOf() : this.toString()
				}));
				var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
				escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
				gap, indent, meta = {
					"\b": "\\b",
					"	": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"\\": "\\\\"
				},
				rep;
				"function" != typeof namespace.json.stringify && (namespace.json.stringify = function(value, replacer, space) {
					var i;
					if (gap = "", indent = "", "number" == typeof space) for (i = 0; space > i; i += 1) indent += " ";
					else "string" == typeof space && (indent = space);
					if (rep = replacer, replacer && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length)) throw new Error("namespace.json.stringify");
					return str("", {
						"": value
					})
				}),
				"function" != typeof namespace.json.parse && (namespace.json.parse = function(text, reviver) {
					function walk(holder, key) {
						var k, v, value = holder[key];
						if (value && "object" == typeof value) for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v: delete value[k]);
						return reviver.call(holder, key, value)
					}
					var j;
					if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
					function(a) {
						return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
					})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
					"function" == typeof reviver ? walk({
						"": j
					},
					"") : j;
					throw new SyntaxError("namespace.json.parse")
				})
			} ();
			var LocationClass = Class.create({
				init: function() {
					this.default_setting = {
						lview: "l.qq.com",
						charset: namespace.crystal_args.charset,
						lview_template: namespace.crystal_args.lview_template
					},
					this.lview = {},
					this.cpmloc = []
				},
				getLview: function() {
					var locs = this.findLoc(namespace.crystal_args.area_class);
					return this.parseConfig(locs)
				},
				getCpmLoc: function() {
					for (var ret = [], i = 0, l = this.cpmloc.length; l > i; i++) ret.indexOf(this.cpmloc[i]) > -1 || ret.push(this.cpmloc[i]);
					return ret
				},
				findLoc: function(classes) {
					var locs = dom.getElementsByClassName(classes, ["div", "span"]);
					return locs
				},
				getLviewByLoc: function(loc) {
					var el = dom.$(loc);
					return el.getAttribute("adconfig_lview")
				},
				createLviewCache: function() {
					return {}
				},
				parseConfig: function(els) {
					var lviewCache = this.createLviewCache(),
					tmpIndexedLocRep = {},
					self = this;
					return namespace.each(els,
					function(el, i) {
						var config = el.getAttribute("adconfig") || "{}";
						config = eval("(" + config + ")");
						var loc = el.id;
						config = namespace.mix({},
						this.default_setting, config);
						for (var p in config) el.setAttribute("adconfig_" + p, config[p]);
						var indexAdData, isIndexAd = (indexAdData = self.parseIndexLoc(el)) ? !0 : !1;
						"undefined" != typeof lviewCache[config.lview] ? (isIndexAd && (lviewCache[config.lview].index_data.push(indexAdData), loc = self.parseIndexLoc(el, 1), self.cpmloc.push(loc.substr(0, loc.indexOf(":")))), namespace.indexOf(lviewCache[config.lview].data, loc) > -1 || lviewCache[config.lview].data.push(loc)) : (isIndexAd && self.cpmloc.push(indexAdData.loc), lviewCache[config.lview] = {
							lview_template: config.lview_template,
							charset: config.charset,
							data: isIndexAd ? [] : [loc],
							index_data: isIndexAd ? [indexAdData] : []
						})
					},
					this),
					lviewCache
				},
				parseIndexLoc: function(el, flag) {
					var i = dom.getDatasetAttr(el, "index"),
					l = dom.getDatasetAttr(el, "loc");
					return flag ? i && l ? l + ":" + i: void 0 : i && l ? {
						index: i,
						loc: l
					}: void 0
				},
				isIndex: function() {},
				getPageType: function() {}
			});
			namespace.location = new LocationClass,
			function() {
				var areas = {};
				namespace.clearArea = function(id) {
					areas[id] = null
				},
				namespace.getArea = function(id) {
					return areas[id] || (areas[id] = new DelayClass)
				},
				namespace.setArea = function(id, o) {
					namespace.getArea(id).set(o)
				}
			} ();
			var fodder_url_data = [],
			isWhiteLoc = function(loc) {
				return loc && "undefined" != typeof crystal_args.whiteloc && crystal_args.whiteloc.indexOf(loc) > -1 ? !0 : !1
			},
			isBlackLoc = function(loc) {
				return loc ? "undefined" != typeof crystal_args.blackloc && crystal_args.blackloc.indexOf(loc) > -1 ? !0 : !1 : !0
			},
			beforeRender = function(fodder, el) {
				return "undefined" != typeof el.id && ("swf" !== getExtension(fodder.resource_url) || !isWhiteLoc(el.id) && isBlackLoc(el.id) || fodder_url_data.push(fodder.resource_url)),
				fodder
			},
			afterRender = function(fodder, el) {
				return "undefined" != typeof el.id && ("swf" !== getExtension(fodder.resource_url) || !isWhiteLoc(el.id) && isBlackLoc(el.id) || (el.style.visibility = "hidden", setTimeout(function() {
					el.style.visibility = "",
					el.firstChild.style.width = fodder.r_width + "px",
					el.firstChild.style.height = fodder.r_height + "px"
				},
				80), fodder.width = fodder.r_width, fodder.height = fodder.r_height)),
				fodder
			},
			renderFodder = namespace.renderFodder = function(fodder, el, icon, iconpos, adicon) {
				if (el) {
					fodder.width && dom.setStyle(el, {
						display: "block",
						width: fodder.width,
						height: fodder.height
					});
					var fodder = beforeRender(fodder, el);
					fodder.resource_url = namespace.getProtocol(fodder.resource_url),
					renderer[getExtension(fodder.resource_url)](fodder, el);
					var elPosition = dom.getStyle(el, "position");
					if (("static" == elPosition || "" == elPosition) && (el.style.position = "relative"), fodder.cover) {
						var linkTo = fodder.link_to.indexOf("?") > -1 ? fodder.link_to + collectInfo(1) : fodder.link_to + "?" + collectInfo(1);
						el.appendChild(createCover(fodder.width, fodder.height, linkTo))
					}
					icon && iconpos && el.appendChild(createIcon(icon, iconpos, fodder.width, fodder.height)),
					fodder.privateTag && (el.appendChild(Pt.privateOriganalIcon(fodder.dsp_name, fodder.private_link)), el.appendChild(Pt.reportIcon(el, fodder.oid))),
					adicon && el.appendChild(createAdIcon(adicon))
				}
			},
			createAdIcon = namespace.createAdIcon = function(pos) {
				var adui = document.createElement("div");
				return adui.style.position = "absolute",
				adui.style.left = 0,
				"lt" === pos ? adui.style.top = 0 : adui.style.bottom = 0,
				adui.style.width = "26px",
				adui.style.height = "16px",
				adui.style.zIndex = 12,
				adui.style.background = "url(" + namespace.resource("res/icon/leftbottom_new.png") + ") no-repeat top right",
				adui
			},
			createIcon = namespace.createIcon = function(icon, pos, width, height, opt) {
				var opt = mix({},
				opt),
				m = {},
				resurl = link_to = "",
				title = opt.title || "",
				link_to = opt.link_to || "";
				"rb" == pos ? m = {
					right: 0,
					bottom: 0
				}: "lb" == pos ? m = {
					left: 0,
					bottom: 0
				}: "rt" == pos ? m = {
					right: 0,
					top: 0
				}: "lt" == pos && (m = {
					left: 0,
					top: 0
				}),
				"adwin" == icon ? (resurl = namespace.resource_swf("adwin_" + pos + ".png"), m = mix(m, {
					width: "55px",
					height: "20px"
				}), link_to = "http://union.discuz.qq.com") : "soso" == icon ? m = mix(m, {
					width: 0,
					height: 0
				}) : (resurl = namespace.resource_swf("icon_" + icon + ".png"), m = mix(m, {
					width: width,
					height: height
				})),
				6 == ua.ie ? m.filter = format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", {
					uri: resurl
				}) : m["background-image"] = format("url({uri})", {
					uri: resurl
				});
				var style = mix({
					position: "absolute",
					"z-index": 11,
					cursor: "pointer"
				},
				m),
				icon = dom.createElement(style, {
					"class": "absolute a_cover",
					href: htmlEncode(link_to),
					target: "_blank",
					title: title
				},
				"a");
				return icon
			},
			createCover = namespace.createCover = function(width, height, link_to, left, top) {
				var cover = dom.createElement({
					position: "absolute",
					width: width + "px",
					height: height + "px",
					left: left || "0px",
					top: top || "0px",
					cursor: "pointer",
					"z-index": 10,
					"background-color": "#fff",
					filter: "alpha(opacity=0)",
					opacity: 0
				},
				{
					"class": "absolute a_cover",
					href: htmlEncode(link_to),
					target: "_blank",
					rel: "nofollow"
				},
				"a");
				return cover
			},
			renderer = function() {
				var param_template = '<param name="{name}" value="{value}"></param>',
				buildParams = function(o) {
					return map(o,
					function(v, k) {
						return format(param_template, {
							name: k,
							value: v
						})
					}).join("")
				},
				removeFlash = function(flash) {
					if (flash && flash.parentNode) {
						if (ua.ie) for (var i in flash)"function" == typeof flash[i] && (flash[i] = null);
						flash.parentNode.removeChild(flash)
					}
				},
				buildHTML = dom.buildHTML,
				_renderImage = function(styles, link, el) {
					return el.innerHTML = buildHTML(styles, {
						href: htmlEncode(link),
						target: "_blank"
					},
					"a"),
					el.firstChild
				},
				renderImage = function(config, el, isgif) {
					var styles = {
						display: "block",
						cursor: "pointer",
						width: config.width + "px",
						height: config.height + "px",
						"background-image": format("url({uri})", {
							uri: config.resource_url
						}),
						"background-size": config.width + "px " + config.height + "px"
					};
					return isgif || (styles = mix(styles, {
						filter: format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}',sizingMethod='scale')", {
							uri: config.resource_url
						})
					})),
					_renderImage(styles, config.link_to, el)
				},
				renderGif = function(config, el) { ({
						display: "block",
						cursor: "pointer",
						width: config.width + "px",
						height: config.height + "px",
						"background-image": format("url({uri})", {
							uri: config.resource_url
						}),
						"background-size": config.width + "px " + config.height + "px"
					});
					return renderImage(config, el, !0)
				},
				renderIEPNG = function(config, el) {
					var styles = {
						display: "block",
						cursor: "pointer",
						width: config.width + "px",
						height: config.height + "px",
						filter: format("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='{uri}')", {
							uri: config.resource_url
						})
					};
					return _renderImage(styles, config.link_to, el)
				},
				renderFlash = function(config, el) {
					var params = {
						allowscriptaccess: "always",
						wmode: "opaque",
						quality: "high"
					};
					config.params && mix(params, config.params);
					var initvars = config.initvars || {};
					config.link_to && (initvars.adlink = config.link_to),
					getFlashVersion() >= 11 && (initvars.ime = !0),
					initvars.ime && (initvars.setFocus = lib_name + ".ime.setFocus");
					var attrs = {
						id: generateId()
					};
					if (initvars.swfid = attrs.id, params.flashvars = serializeQuery(initvars), ua.ie ? (attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", params.movie = config.resource_url) : (params.type = "application/x-shockwave-flash", attrs.data = config.resource_url), getFlashVersion() > 0) el.innerHTML = buildHTML({
						outline: "none",
						width: config.width + "px",
						height: config.height + "px"
					},
					attrs, "object", buildParams(params));
					else if (config.display && "banner" == config.display) {
						var getHost = function(url) {
							var host = ""; ("undefined" == typeof url || null == url) && (url = window.location.href);
							var regex = /.*\:\/\/([^\/]*).*/,
							match = url.match(regex);
							return "undefined" != typeof match && null != match && (host = match[1]),
							host
						},
						domain = namespace.getProtocol(getHost(config.resource_url) ? "//" + getHost(config.resource_url) : "//wa.gtimg.com");
						attrs.src = domain + "/web/res/shumway/iframe/view.html?swf=" + config.resource_url,
						el.innerHTML = buildHTML({
							border: "none",
							width: config.width + "px",
							height: config.height + "px"
						},
						attrs, "iframe", buildParams(params))
					}
					var flash = el.firstChild;
					return evt.on(window, "unload",
					function() {
						removeFlash(flash)
					}),
					flash
				},
				renderHTML = function(config, el) {
					var ifr_src = config.resource_url;
					if (config.link_to) {
						var hs_ques = ifr_src.indexOf("?") > -1 ? !0 : !1;
						ifr_src += hs_ques ? "&tclick=": "?tclick=",
						ifr_src += encodeURIComponent(config.link_to)
					}
					dom.$(el).innerHTML = '<iframe frameborder="0" src="' + ifr_src + '" scrolling="no" marginwidth="0" marginheight="0" style="width:' + config.width + "px;height:" + config.height + 'px;"></iframe>'
				},
				renderSl = function(config, el) {
					var params = mix({
						source: config.resource_url,
						windowless: !0
					},
					config.params),
					initvars = mix({
						adlink: config.link_to
					},
					config.initvars);
					return params.initParams = serializeQuery(initvars),
					el.innerHTML = buildHTML({
						width: config.width + "px",
						height: config.height + "px"
					},
					{
						type: "application/x-silverlight",
						data: "data:application/x-silverlight,"
					},
					"object", buildParams(params)),
					el.firstChild
				};
				return {
					jpg: renderImage,
					jpeg: renderImage,
					png: 6 == ua.ie ? renderIEPNG: renderImage,
					gif: renderGif,
					swf: renderFlash,
					xap: renderSl,
					html: renderHTML
				}
			} ()
		} (function() {
			var getDatasetAttr, setDatasetAttr, el_template = '<{tag} {attrs}style="{styles}">{inner}</{tag}>',
			propertyCache = {},
			patterns = {
				HYPHEN: /(-[a-z])/i,
				ROOT_TAG: /^body|html$/i
			},
			toCamel = function(property) {
				if (!patterns.HYPHEN.test(property)) return property;
				if (propertyCache[property]) return propertyCache[property];
				for (var converted = property; patterns.HYPHEN.exec(converted);) converted = converted.replace(RegExp.$1, RegExp.$1.substr(1).toUpperCase());
				return propertyCache[property] = converted,
				converted
			},
			setStyle = function() {
				var px = /left|top|right|bottom|width|height/,
				transVal = function(k, v) {
					return px.test(k) && "number" == typeof v && (v += "px"),
					v
				};
				return ua.ie ?
				function(el, property, val) {
					switch (property = toCamel(property)) {
					case "opacity":
						el.style.filter = "alpha(opacity=" + 100 * val + ")",
						el.style[property] = transVal(property, val),
						el.currentStyle && el.currentStyle.hasLayout || (el.style.zoom = 1);
						break;
					case "float":
						property = "styleFloat";
					default:
						el.style[property] = transVal(property, val)
					}
				}: function(el, property, val) {
					property = toCamel(property),
					"float" == property && (property = "cssFloat"),
					el.style[property] = transVal(property, val)
				}
			} (),
			buildHTML = function(styles, attrs, tag, inner) {
				return format(el_template, {
					tag: tag || "div",
					attrs: serializeAttrs(attrs || {}),
					styles: serializeStyles(styles),
					inner: inner || ""
				})
			},
			getStyle = function() {
				return document.defaultView && document.defaultView.getComputedStyle ?
				function(el, property) {
					var value = null;
					"float" == property && (property = "cssFloat");
					var computed = document.defaultView.getComputedStyle(el, "");
					return computed && (value = computed[toCamel(property)]),
					el.style[property] || value
				}: document.documentElement.currentStyle && ua.ie ?
				function(el, property) {
					switch (property = toCamel(property)) {
					case "opacity":
						var val = 100;
						try {
							val = el.filters["DXImageTransform.Microsoft.Alpha"].opacity
						} catch(e) {
							try {
								val = el.filters("alpha").opacity
							} catch(e) {}
						}
						return val / 100;
					case "float":
						property = "styleFloat";
					default:
						var value = el.currentStyle ? el.currentStyle[property] : null;
						return el.style[property] || value
					}
				}: function(el, property) {
					return el.style[property]
				}
			} (),
			hasClass = function(elem, className) {
				return elem && indexOf((elem.className || elem).toString().split(/\s+/), className) > -1
			},
			addClass = function(elem, className) {
				elem && !this.hasClass(elem, className) && className && (elem.className = elem.className + " " + className)
			};
			return FeatureDetector.htmlData ? (getDatasetAttr = function(el, name) {
				return el ? el.dataset[name] : void 0
			},
			setDatasetAttr = function(el, name, value) {
				return el ? el.dataset[name] = value: void 0
			}) : (getDatasetAttr = function(el, name) {
				return el ? el.getAttribute("data-" + name) : void 0
			},
			setDatasetAttr = function(el, name, value) {
				return el ? el.setAttribute("data-" + name, value) : void 0
			}),
			{
				hasClass: hasClass,
				addClass: addClass,
				$: function(id) {
					return "string" == typeof id ? document.getElementById(id) : id
				},
				getStyle: getStyle,
				getDatasetAttr: getDatasetAttr,
				setDatasetAttr: setDatasetAttr,
				setStyle: function(el, k, v) {
					el = el,
					"object" == typeof k ? each(k,
					function(_v, _k) {
						setStyle(el, _k, _v)
					}) : setStyle(el, k, v)
				},
				setBackgroundImage: function(el, url) {
					6 == ua.ie && /png$/.test(url) ? el.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url + "')": el.style.backgroundImage = "url(" + url + ")"
				},
				buildHTML: buildHTML,
				createElement: function(html) {
					"string" != typeof html && (html = buildHTML.apply(window, arguments));
					var el = document.createElement("div");
					return el.innerHTML = html,
					el.firstChild
				},
				getElementsByClassName: function(cls, tags) {
					if (document.getElementsByClassName) return document.getElementsByClassName(cls);
					var els = [];
					return each(tags,
					function(tag) {
						els = filter(document.getElementsByTagName(tag),
						function(div) {
							return hasClass(div, cls)
						}).concat(els)
					}),
					els
				},
				getXY: function(el) {
					var pos = [el.offsetLeft, el.offsetTop],
					parentNode = el.offsetParent,
					accountForBody = ua.webkit && "absolute" == getStyle(el, "position") && el.offsetParent == el.ownerDocument.body;
					if (parentNode != el) for (; parentNode;) pos[0] += parentNode.offsetLeft,
					pos[1] += parentNode.offsetTop,
					!accountForBody && ua.webkit && "absolute" == getStyle(parentNode, "position") && (accountForBody = !0),
					parentNode = parentNode.offsetParent;
					for (accountForBody && (pos[0] -= el.ownerDocument.body.offsetLeft, pos[1] -= el.ownerDocument.body.offsetTop), parentNode = el.parentNode; parentNode.tagName && !patterns.ROOT_TAG.test(parentNode.tagName);) getStyle(parentNode, "display").search(/^inline|table-row.*$/i) && (pos[0] -= parentNode.scrollLeft, pos[1] -= parentNode.scrollTop),
					parentNode = parentNode.parentNode;
					return pos
				},
				getDocumentScrollLeft: function(doc) {
					return doc = doc || document,
					Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft)
				},
				getDocumentScrollTop: function(doc) {
					return doc = doc || document,
					Math.max(doc.documentElement.scrollTop, doc.body.scrollTop)
				},
				getDocumentHeight: function() {
					var scrollHeight = "CSS1Compat" != document.compatMode ? document.body.scrollHeight: document.documentElement.scrollHeight,
					h = Math.max(scrollHeight, this.getViewportHeight());
					return h
				},
				getDocumentWidth: function() {
					var scrollWidth = "CSS1Compat" != document.compatMode ? document.body.scrollWidth: document.documentElement.scrollWidth,
					w = Math.max(scrollWidth, this.getViewportWidth());
					return w
				},
				getViewportHeight: function() {
					var height = self.innerHeight,
					mode = document.compatMode;
					return ! mode && !ua.ie || ua.opera || (height = "CSS1Compat" == mode ? document.documentElement.clientHeight: document.body.clientHeight),
					height
				},
				getViewportWidth: function() {
					var width = self.innerWidth,
					mode = document.compatMode;
					return (mode || ua.ie) && (width = "CSS1Compat" == mode ? document.documentElement.clientWidth: document.body.clientWidth),
					width
				},
				addCss: function(rulesArray) {
					crystal.NOPrefixer.add(rulesArray)
				}
			}
		} (),
		function() {
			var doc = document.documentElement,
			body = document.body,
			evt = {
				getPageX: function(e) {
					return "pageX" in e ? e.pageX: e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0)
				},
				getPageY: function(e) {
					return "pageY" in e ? e.pageY: e.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
				}
			};
			return document.addEventListener ? (evt.on = function(el, type, handler) {
				return el.addEventListener(type, handler, !1),
				handler
			},
			evt.on2 = evt.on, evt.un = function(el, type, handler) {
				el.removeEventListener(type, handler, !1)
			},
			evt.stopPropagation = function(e) {
				e.stopPropagation()
			},
			evt.preventDefault = function(e) {
				e.preventDefault()
			},
			evt.getTarget = function(e) {
				return e.target
			},
			evt.getRelTarget = function(e) {
				return e.relatedTarget
			}) : (evt.on = function(el, type, handler) {
				el.attachEvent("on" + type, handler)
			},
			evt.on2 = function(el, type, handler) {
				var actualHandler = function() {
					handler.call(el, window.event)
				};
				return el.attachEvent("on" + type, actualHandler),
				actualHandler
			},
			evt.un = function(el, type, handler) {
				el.detachEvent("on" + type, handler)
			},
			evt.stopPropagation = function(e) {
				e.cancelBubble = !0
			},
			evt.preventDefault = function(e) {
				e.returnValue = !1
			},
			evt.getTarget = function(e) {
				return e.srcElement
			},
			evt.getRelTarget = function(e) {
				return e.fromElement === e.srcElement ? e.toElement: e.fromElement
			}),
			evt.stop = function(e) {
				evt.stopPropagation(e),
				evt.preventDefault(e)
			},
			function() {
				var fns = [],
				is_ready = !1;
				evt.ready = function(f) {
					fns.push(f)
				};
				var _ready = function() {
					is_ready || (is_ready = !0, evt.ready = function(f) {
						f()
					},
					each(fns,
					function(f) {
						f()
					}))
				};
				if (ua.ie) {
					var timer = setInterval(function() {
						try {
							document.documentElement.doScroll("left"),
							clearInterval(timer),
							timer = null,
							_ready()
						} catch(ex) {}
					},
					64);
					evt.on(document, "readystatechange",
					function() {
						"complete" === document.readyState && (evt.un(document, "readystatechange", arguments.callee), _ready())
					})
				} else evt.on(document, "DOMContentLoaded", _ready);
				evt.on(window, "load", _ready)
			} (),
			evt
		} (), {
			set: function(key, value, options) {
				var text = key + "=" + value;
				options && (options.expires && (text += "; expires=" + new Date((new Date).getTime() + 864e5 * options.expires).toGMTString()), options.path && (text += "; path=" + options.path), options.domain && (text += "; domain=" + options.domain), options.secure === !0 && (text += "; secure")),
				document.cookie = text
			},
			get: function(key) {
				var o = deserializeString("=", "; ", !1, !1)(document.cookie);
				return key ? o[key] : o
			},
			remove: function(k, options) {
				options = options || {},
				options.expires = -1,
				this.set(k, "", options)
			}
		})
	}
} ("crystal",
function() {
	var crystal_args = {
		area_class: "l_qq_com",
		element_tags: ["div"],
		execute_on_ready: !0,
		file_path: "http://ra.gtimg.com/web/",
		ext_path: "http://ra.gtimg.com/web/",
		is_debug: !1,
		lazy_render: !1,
		lview_template: "http://l.qq.com/lview?c=www&loc={loc}",
		lview_time_out: 6,
		ping_template: "http://p.l.qq.com/p?oid={oid}&cid={cid}&loc={loc}&aver={aver}&soid={soid}",
		charset: "gbk",
		ping_effect_height: -99999,
		pre_load_offset: 100,
		runat: "qq",
		collect: !0,
		mo_page_ratio: 0,
		mo_page_url: "http://dp3.qq.com/qqcom/",
		mo_ad_click_url: "http://dp3.qq.com/click/",
		mo_ping_ratio: 0,
		mo_ping_script: "",
		mo_ping_time_out: 10,
		share_dialogue_url: "http://adsrich.qq.com/web/res/weibo/relay.html",
		qqLiveContentId: 1001,
		preloadAdResource: !1,
		adInTurn: !0,
		adInTurnTime: {},
		jsProfileOpen: !0,
		privacyUrl: "https://tango.qq.com/index/privacy",
		privacyImg: "http://ra.gtimg.com/web/res/privacy.png",
		viewPingLoc: ["Fashion_Width1", "Fashion_Width2", "Fashion_Width3", "Fashion_Width4", "Fashion_Width5", "Fashion_Button1", "Fashion_Button2", "Fashion_Button3", "F_D_Width1", "F_Rectangle_N", "F_UpRight1", "F_Width1_N", "F_Width2", "F_ZQ_1", "F_ZQ_2", "F_Z_Width1"],
		hasViewed: []
	};
	crystal_args.extension_js_src = crystal_args.file_path + "crystal/lastest/crystal_ext-min.js",
	crystal_args.sac_req_url = "http://bs.l.qq.com/sns";
	var script = document.getElementById("l_qq_com");
	try {
		var input_args = eval("(" + script.getAttribute("arguments") + ")");
		for (var i in input_args) crystal_args[i] = input_args[i]
	} catch(e) {}
	return crystal_args
} (),
function() {
	var slice = Array.slice ||
	function() {
		var _slice = Array.prototype.slice;
		return function(arr) {
			return _slice.apply(arr, _slice.call(arguments, 1))
		}
	} (),
	mix = function(r) {
		r || (r = {});
		for (var i = 1; i < arguments.length; i++) {
			var s = arguments[i];
			if (s) for (var j in s) r[j] = s[j]
		}
		return r
	},
	each = function(o, fn, context) {
		if ("number" == typeof o.length) for (var i = 0,
		len = o.length; len > i; i++) fn.call(context, o[i], i);
		else if ("number" == typeof o) for (var i = 0; o > i; i++) fn.call(context, i, i);
		else for (var i in o) o.hasOwnProperty(i) && fn.call(context, o[i], i)
	},
	serializeDictionary = function(assign_token, pair_separator, need_last, need_encode) {
		var encode = need_encode ? encodeURIComponent: function(k) {
			return k
		};
		return function(o) {
			var ret = [];
			return each(o,
			function(v, k) {
				null != k && void 0 != v && ret.push(encode(k) + assign_token + encode(v))
			}),
			ret.join(pair_separator) + (need_last ? pair_separator: "")
		}
	},
	deserializeString = function(assign_token, pair_separator, need_last, need_decode) {
		var decode = need_decode ? decodeURIComponent: function(k) {
			return k
		};
		return function(s) {
			var ret = {};
			return need_last && (s = s.replace(new RegExp(pair_separator + "$"), "")),
			each(s.split(pair_separator),
			function(pair) {
				var key_value = pair.split(assign_token);
				ret[decode(key_value[0])] = decode(key_value[1])
			}),
			ret
		}
	},
	Class = {
		create: function(proto, sp) {
			var ctor = function() {
				this.init && this.init.apply(this, arguments)
			},
			mixins_begin_index = 1;
			if (sp && "function" == typeof sp) {
				var F = function() {};
				ctor.superclass = F.prototype = sp.prototype,
				ctor.prototype = new F,
				mixins_begin_index = 2
			}
			var mixins = slice(arguments, mixins_begin_index);
			return mixins.unshift(proto),
			mix(ctor.prototype, mix.apply(window, mixins)),
			ctor
		}
	};
	return {
		slice: slice,
		generateId: function() {
			var id = 1;
			return function() {
				return "auto_gen_" + id++
			}
		} (),
		each: each,
		map: function(o, fn) {
			var ret = [];
			return each(o,
			function(v, k) {
				ret.push(fn(v, k))
			}),
			ret
		},
		unique: function(arr) {
			var o = (arr.length, {}),
			ret = [];
			each(arr,
			function(v) {
				o[v] = v
			});
			for (var p in o) p == o[p] && ret.push(p);
			return ret
		},
		filter: function(o, fn) {
			var ret = [];
			return each(o,
			function(v, k) {
				fn(v, k) === !0 && ret.push(v)
			}),
			ret
		},
		indexOf: function(arr, o) {
			if (arr.indexOf) return arr.indexOf(o);
			for (var i = 0; i < arr.length; i++) if (arr[i] === o) return i;
			return - 1
		},
		lenFor: function(str) {
			var byteLen = 0,
			len = str.length,
			l = arguments[1];
			if (str) {
				for (var i = 0; len > i; i++) if (str.charCodeAt(i) > 255 ? byteLen += 2 : byteLen++, byteLen > l) return str.substr(0, i);
				return l ? str: byteLen
			}
			return 0
		},
		mix: mix,
		serializeDictionary: serializeDictionary,
		deserializeString: deserializeString,
		serializeStyles: serializeDictionary(":", ";", !0, !1),
		serializeAttrs: function() {
			var fn = serializeDictionary("=", " ", !0, !1);
			return function(o) {
				return each(o,
				function(v, k) {
					o[k] = '"' + v + '"'
				}),
				fn(o)
			}
		} (),
		serializeQuery: serializeDictionary("=", "&", !1, !0),
		buffer: function(runner, delay) {
			var timer;
			return function() {
				timer && clearTimeout(timer);
				var args = arguments;
				timer = setTimeout(function() {
					runner.apply(window, args)
				},
				delay || 100)
			}
		},
		format: function(s, config, reserve) {
			return s.replace(/\{([^}]*)\}/g, "object" == typeof config ?
			function(m, i) {
				var ret = config[i];
				return null == ret && reserve ? m: ret
			}: config)
		},
		instance: function(o) {
			var ctor = function() {};
			return ctor.prototype = o,
			new ctor
		},
		doNothing: function() {},
		output: function(lib_name, lib) {
			var eval_arr = [];
			lib_name = lib_name || "crystal";
			for (var p in lib || this) eval_arr.push("var "),
			eval_arr.push(p),
			eval_arr.push("="),
			eval_arr.push(lib_name),
			eval_arr.push("."),
			eval_arr.push(p),
			eval_arr.push(";");
			return eval_arr.join("")
		},
		Class: Class
	}
} (),
function() {
	var m, o = {
		ie: 0,
		opera: 0,
		gecko: 0,
		webkit: 0,
		mobile: null
	},
	ua = navigator.userAgent;
	return /KHTML/.test(ua) && (o.webkit = 1),
	m = ua.match(/AppleWebKit\/([^\s]*)/),
	m && m[1] && (o.webkit = parseFloat(m[1]), / Mobile\//.test(ua) ? o.mobile = "Apple": (m = ua.match(/NokiaN[^\/]*/), m && (o.mobile = m[0]))),
	o.webkit || (m = ua.match(/Opera[\s\/]([^\s]*)/), m && m[1] ? (o.opera = parseFloat(m[1]), m = ua.match(/Opera Mini[^;]*/), m && (o.mobile = m[0])) : (m = ua.match(/MSIE\s([^;]*)/i), m && m[1] ? o.ie = parseFloat(m[1]) : (m = ua.match(/Gecko\/([^\s]*)/), m && (o.gecko = 1)), m = ua.match(/rv:([^\s\)]*)/), m && m[1] && (o.gecko = 1 === o.gecko ? parseFloat(m[1]) : 0, o.ie = 0), "undefined" == typeof document.attachEvent && (o.ie = 0))),
	o
} ());
var mutex_lock, mutex_unlock; !
function(namespace) {
	var locked = !1;
	namespace.mutex_lock = function() {
		return locked ? -1 : (locked = !0, 0)
	},
	namespace.mutex_unlock = function() {
		return locked = !1,
		0
	}
} (window);
/*2016-08-18 10:54:18*/
