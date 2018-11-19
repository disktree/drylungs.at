// Generated by Haxe 4.0.0-preview.5
(function () { "use strict";
var drylungs_App = function() { };
drylungs_App.hideNav = function() {
	drylungs_App.btn.classList.remove("is-active");
	drylungs_App.nav.classList.add("hidden");
	drylungs_App.main_.classList.remove("blur");
};
drylungs_App.toggleNav = function() {
	drylungs_App.btn.classList.toggle("is-active");
	drylungs_App.nav.classList.toggle("hidden");
	drylungs_App.main_.classList.toggle("blur");
};
drylungs_App.handleWindowScroll = function(e) {
	drylungs_App.hideNav();
};
drylungs_App.main = function() {
	window.console.info("%c⛧ DRYLUNGS ⛧","color:#101111");
	window.document.addEventListener("readystatechange",function(e) {
		switch(window.document.readyState) {
		case "complete":
			var body = window.document.body;
			var page = window.document.body.getAttribute("data-id");
			drylungs_App.header = window.document.body.querySelector("header");
			drylungs_App.btn = drylungs_App.header.querySelector("button");
			drylungs_App.nav = window.document.body.querySelector("nav");
			drylungs_App.main_ = window.document.body.querySelector("main");
			drylungs_App.header.onclick = function() {
				drylungs_App.toggleNav();
			};
			drylungs_App.nav.classList.add("hidden");
			window.addEventListener("scroll",drylungs_App.handleWindowScroll,false);
			switch(page) {
			case "record":
				window.onkeydown = function(e1) {
					switch(e1.keyCode) {
					case 37:
						var link = drylungs_App.main_.querySelector(".nav a.prev").getAttribute("href");
						window.location.href = link;
						break;
					case 39:
						var link1 = drylungs_App.main_.querySelector(".nav a.next").getAttribute("href");
						window.location.href = link1;
						break;
					}
				};
				break;
			case "start":
				break;
			}
			break;
		case "interactive":
			break;
		}
	});
};
drylungs_App.main();
})();

//# sourceMappingURL=app.js.map