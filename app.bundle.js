webpackJsonp([1], {
    0: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(4),
            c = i(l),
            f = n(12),
            d = i(f),
            p = n(7),
            h = i(p),
            m = n(72),
            y = i(m),
            v = n(5),
            g = i(v),
            b = n(71),
            w = i(b),
            k = n(207),
            _ = i(k),
            S = n(203),
            O = i(S),
            E = n(195),
            P = i(E),
            T = n(198),
            I = i(T),
            L = n(205),
            A = i(L),
            C = n(105),
            M = i(C),
            j = n(106),
            D = i(j),
            x = n(202),
            N = i(x);
        n(60), n(110), n(109), window.performance.mark("navigationLoaded"), window.addEventListener("load", function() {
            window.performance.mark("fullyLoaded"), document.body.classList.add("loaded"), setTimeout(function() {
                document.body.classList.remove("loaded")
            }, 3e3)
        });
        var R = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "App", n.panels = {}, n.state = {
                    grid: N.default.grid
                }, window.app = n, window.Service = g.default, window.performance.mark("navigationInteractive"), n
            }
            return r(t, e), u(t, [{
                key: "componentWillMount",
                value: function() {
                    window.performance.mark("contentInteractive")
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.element = d.default.findDOMNode(this), window.performance.mark("visuallyLoaded"), this.focusWhenReady(), this._handle_largetextenabledchanged(), window.addEventListener("largetextenabledchanged", this), window.addEventListener("visibilitychange", this), g.default.register("openSheet", this), g.default.register("closeSheet", this), g.default.registerState("lastSheet", this), g.default.registerState("panelAnimationRunning", this), this.element.style.setProperty("--grid-row", this.state.grid.row), this.element.style.setProperty("--grid-col", this.state.grid.col)
                }
            }, {
                key: "_handle_largetextenabledchanged",
                value: function() {
                    document.body.classList.toggle("large-text", navigator.largeTextEnabled)
                }
            }, {
                key: "_handle_visibilitychange",
                value: function() {
                    if (!document.hidden) {
                        if (this.hasPopupDom()) return;
                        switch (this.lastSheet) {
                            case "MainView":
                                this.panels.mainView.focus();
                                break;
                            case "appList":
                                this.panels.appList.focus()
                        }
                    }
                }
            }, {
                key: "hasPopupDom",
                value: function() {
                    var e = document.querySelector("#dialog-root .dialog-container"),
                        t = document.querySelector("#menu-root .option-menu-container"),
                        n = document.querySelector("#sim-chooser .option-menu-container");
                    return e && "none" !== window.getComputedStyle(e).display ? (e.querySelector("input") ? e.querySelector("input").focus() : e.focus(), !0) : n && "none" !== window.getComputedStyle(n).display ? (n.focus(), !0) : !(!t || "none" === window.getComputedStyle(t).display) && (t.focus(), !0)
                }
            }, {
                key: "focusWhenReady",
                value: function() {
                    var e = this;
                    if (!this.focusMainView()) {
                        var t = function t() {
                            e.focusMainView(), document.removeEventListener("visibilitychange", t)
                        };
                        document.addEventListener("visibilitychange", t)
                    }
                }
            }, {
                key: "focusMainView",
                value: function() {
                    return g.default.query("Tutorial.hasViewed") ? this.panels.mainView.focus() : g.default.request("Tutorial:focus"), !document.hidden
                }
            }, {
                key: "openSheet",
                value: function(e) {
                    this.lastSheet = e, this.panels[e].open && this.panels[e].open(), "sidemenu" === e && g.default.request("Sidemenu:focus"), this.element.classList.add("panel-" + e + "--opened")
                }
            }, {
                key: "closeSheet",
                value: function(e) {
                    this.panels[e].isClosed && this.panels[e].isClosed() || (this.panels[e].close && this.panels[e].close(), this.element.classList.remove("panel-" + e + "--opened"), "dialer" !== e || this.panels.appList.isClosed() ? (this.panels.mainView.focus(), this.lastSheet = "MainView") : (this.panels.appList.focus(), this.lastSheet = "appList"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return c.default.createElement("div", {
                        className: "app-workspace"
                    }, c.default.createElement("div", {
                        className: "app-content"
                    }, c.default.createElement(O.default, {
                        ref: function(t) {
                            e.panels.mainView = t
                        }
                    }), c.default.createElement(P.default, s({
                        ref: function(t) {
                            e.panels.appList = t
                        }
                    }, this.state.grid)), c.default.createElement(I.default, {
                        ref: function(t) {
                            e.panels.dialer = t
                        }
                    })), c.default.createElement(_.default, {
                        ref: function(t) {
                            e.panels.tutorial = t
                        }
                    }), c.default.createElement(A.default, {
                        ref: function(t) {
                            e.panels.sidemenu = t
                        }
                    }), c.default.createElement(D.default, null), c.default.createElement("div", {
                        id: "sim-chooser"
                    }, c.default.createElement(w.default, null)), c.default.createElement(M.default, null), c.default.createElement(y.default, {
                        ref: function(t) {
                            e.panels.softKey = t
                        }
                    }))
                }
            }]), t
        }(h.default);
        d.default.render(c.default.createElement(R, null), document.getElementById("root"))
    },
    59: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            c = n(22),
            f = o(c),
            d = n(5),
            p = o(d),
            h = n(25),
            m = o(h),
            y = n(204),
            v = o(y),
            g = n(14),
            b = i(g),
            w = ["Communications", "Contact", "KaiOS-Store", "Messages", "Google Search", "Camera", "Browser", "Gallery", "Clock", "Music", "FM Radio", "Twitter", "Calendar", "Calculator", "Video", "Settings", "FileManager", "E-Mail", "Note", "Recorder", "Unit Converter", "stk"],
            k = {
                app: {
                    56: "./style/images/default_app_56.png",
                    112: "./style/images/default_app_112.png"
                },
                web_shortcut: {
                    56: "./style/images/web_shortcut_56.png",
                    112: "./style/images/web_shortcut_112.png"
                },
                favicon: {
                    48: "./style/images/default_favicon_48.png"
                }
            },
            _ = function(e) {
                function t() {
                    a(this, t);
                    var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.apps = [], e.stkEnabled = !1, window.AppStore = e, e
                }
                return s(t, e), l(t, [{
                    key: "start",
                    value: function() {
                        var e = this,
                            t = navigator.mozApps.mgmt;
                        t && (window.addEventListener("localized", function() {
                            e.updateAllItems()
                        }), t.addEventListener("update", function(t) {
                            var n = t.application;
                            e.addMozAppItem(n), e.emit("change")
                        }), t.addEventListener("install", function(t) {
                            var n = t.application;
                            n.toBeTracked = !0, "installed" === n.installState && (e.addMozAppItem(n), e.emit("change"), e.addItemInAppsOrder(n.manifest.name)), n.ondownloadapplied = function(t) {
                                var n = t.application;
                                e.addMozAppItem(n), e.emit("change"), e.addItemInAppsOrder(n.manifest.name)
                            }, n.ondownloaderror = function() {}
                        }), t.addEventListener("uninstall", function(t) {
                            var n = t.application;
                            e.removeMozAppItem(n).toBeTracked = !0, e.emit("change"), e.removeItemFromAppsOrder(n.manifest.name)
                        }), t.addEventListener("enabledstatechange", function() {
                            e.apps = [], e.updateAllItems()
                        }), BookmarksDatabase.addEventListener("added", function(t) {
                            var n = t.target;
                            e.addBookmarkItem(n).toBeTracked = !0, e.emit("change")
                        }), BookmarksDatabase.addEventListener("updated", function() {
                            e.updateAllItems()
                        }), BookmarksDatabase.addEventListener("removed", function(t) {
                            var n = t.target.id;
                            e.removeBookmarkItem(n).toBeTracked = !0, e.emit("change"), e.removeItemFromAppsOrder(n)
                        }), m.default.addObserver("icc.applications", this))
                    }
                }, {
                    key: "_observe_icc.applications",
                    value: function(e) {
                        e = JSON.parse(e), this.stkEnabled = e && "object" === ("undefined" == typeof e ? "undefined" : u(e)) && Object.keys(e).length > 0, this.emit("change")
                    }
                }, {
                    key: "queryApp",
                    value: function(e, t) {
                        var n = void 0;
                        return this.apps.some(function(i) {
                            return b.getDeepProp(i, e) === t && (n = i, !0)
                        }), n
                    }
                }, {
                    key: "getAppIconUrl",
                    value: function(e, t, n) {
                        if (t = t || e.manifest.icons, !t) return null;
                        var i = this.pickUpAppIconInProperSize(t, n);
                        return /^(http|data)/.test(i) || (i = e.origin + i), i
                    }
                }, {
                    key: "pickUpAppIconInProperSize",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 56;
                        return e[Object.keys(e).sort(function(e, n) {
                            return (e - n) * (e >= t ? 1 : -1)
                        })[0]]
                    }
                }, {
                    key: "updateAppIcon",
                    value: function(e) {
                        var t = this;
                        return new Promise(function(n, i) {
                            var o = t.apps.findIndex(function(t) {
                                return t.manifestURL === e.manifestURL
                            });
                            o < 0 && n();
                            var a = t.apps[o],
                                r = t.pickUpAppIconInProperSize(a.manifest.icons);
                            navigator.mozApps.mgmt.getIcon(e, r).then(function(e) {
                                a.icon_url = URL.createObjectURL(e), n()
                            }).catch(function(e) {
                                i(e)
                            })
                        })
                    }
                }, {
                    key: "checkImage",
                    value: function(e, t, n) {
                        var i = this,
                            o = new Image;
                        o.src = e[t], o.onerror = function() {
                            e[t] = n, i.emit("change")
                        }
                    }
                }, {
                    key: "getAppUid",
                    value: function(e) {
                        var t = e.manifestURL;
                        return e.entry && (t = t + "+" + e.entry), t
                    }
                }, {
                    key: "getAppsOrder",
                    value: function() {
                        var e = this;
                        return new Promise(function(t) {
                            b.asyncLocalStorage.getItem("app-order").then(function(n) {
                                e.isStorageExistAppsOrder = !!n, e.appsOrder = JSON.parse(n) || w, t()
                            })
                        })
                    }
                }, {
                    key: "setAppsOrder",
                    value: function(e) {
                        this.appsOrder = e, b.asyncLocalStorage.setItem("app-order", JSON.stringify(e)), this.resort(), this.emit("change")
                    }
                }, {
                    key: "resort",
                    value: function() {
                        var e = this,
                            t = this.apps.length;
                        this.apps.forEach(function(n, i) {
                            var o = n.manifest.name,
                                a = e.appsOrder.indexOf(o);
                            n.order = -1 === a ? t + i : a
                        })
                    }
                }, {
                    key: "updateAllItems",
                    value: function() {
                        var e = this;
                        this.getAppsOrder().then(function() {
                            return e.updateMozAppItems()
                        }).then(function() {
                            return e.updateBookmarkItems()
                        }).then(function() {
                            return e.initAppsOrderLocalStorage()
                        }).then(function() {
                            e.emit("change")
                        })
                    }
                }, {
                    key: "addItem",
                    value: function(e, t) {
                        var n = this,
                            i = e.manifest.icons;
                        switch (e.type) {
                            default:
                            case "mozapp":
                                e.mozApp = t, i && (e.icon_url = this.getAppIconUrl(e, i), e.icon_url_hq = this.getAppIconUrl(e, i, 112), (/^http/.test(e.icon_url) || /^http/.test(e.icon_url_hq)) && (this.checkImage(e, "icon_url", k.app[56]), this.checkImage(e, "icon_url_hq", k.app[112])));
                                break;
                            case "bookmark":
                                e.icon_url = k.web_shortcut[56], e.icon_url_hq = k.web_shortcut[112], e.favicon_url = e.favicon, /^http/.test(e.favicon_url) && this.checkImage(e, "favicon_url", k.favicon[48])
                        }
                        e.uid = this.getAppUid(e), e.launch = function() {
                            window.performance.mark("appLaunch@" + e.origin), "bookmark" === e.type ? new MozActivity({
                                name: "view",
                                data: {
                                    type: "url",
                                    url: e.url
                                }
                            }) : t.launch(e.entry)
                        }, e.shouldHide = function() {
                            return !e.enabled || "dialer" === e.entry || "stk" === e.manifest.name && !n.stkEnabled || ["system", "input", "theme", "homescreen", "invisible"].includes(e.manifest.role)
                        };
                        var o = this.appsOrder.indexOf(e.manifest.name);
                        e.order = o !== -1 ? o : 99, e.theme = e.manifest.theme_color || null;
                        var a = void 0;
                        this.apps.some(function(t, n) {
                            var i = t.manifestURL === e.manifestURL;
                            return i && (a = n), i
                        }), a >= 0 ? this.apps[a] = e : this.apps.push(e)
                    }
                }, {
                    key: "addMozAppItem",
                    value: function(e) {
                        var t = e.manifest || e.updateManifest;
                        delete t.description;
                        var n = t,
                            i = n.locales;
                        if (i)
                            for (var o in i)({}).hasOwnProperty.call(i, o) && delete i[o].description;
                        var a = t.entry_points;
                        if (a) {
                            var r = "";
                            t = JSON.parse(JSON.stringify(t));
                            for (var s in a) {
                                var u = {},
                                    l = a[s];
                                r = new v.default(l).name;
                                for (var c in l) "locale" !== c && "name" !== c && (t[c] = l[c]);
                                for (var f in e) u[f] = e[f];
                                u.type = "mozapp", u.manifest = t, u.displayName = r, u.entry = s, this.addItem(u, e)
                            }
                        } else {
                            var d = {};
                            for (var p in e) d[p] = e[p];
                            d.manifest || (d.manifest = d.updateManifest), d.type = "mozapp", d.displayName = new v.default(d.manifest).name, this.addItem(d, e)
                        }
                    }
                }, {
                    key: "removeMozAppItem",
                    value: function(e) {
                        var t = this.getAppUid(e),
                            n = this.apps.findIndex(function(e) {
                                return e.uid === t
                            });
                        return n >= 0 ? this.apps.splice(n, 1).shift() : null
                    }
                }, {
                    key: "addItemInAppsOrder",
                    value: function(e) {
                        -1 === this.appsOrder.indexOf(e) && (this.appsOrder.push(e), this.setAppsOrder(this.appsOrder))
                    }
                }, {
                    key: "removeItemFromAppsOrder",
                    value: function(e) {
                        var t = this.appsOrder.indexOf(e); - 1 !== t && (this.appsOrder.splice(t, 1), this.setAppsOrder(this.appsOrder))
                    }
                }, {
                    key: "updateMozAppItems",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            var i = navigator.mozApps.mgmt.getAll();
                            i.onsuccess = function(n) {
                                n.target.result.forEach(function(t) {
                                    return e.addMozAppItem(t)
                                }), t()
                            }, i.onerror = function() {
                                n()
                            }
                        })
                    }
                }, {
                    key: "initAppsOrderLocalStorage",
                    value: function() {
                        var e = this;
                        return new Promise(function(t) {
                            if (!e.isStorageExistAppsOrder) {
                                var n = e.apps.filter(function(e) {
                                    return !e.shouldHide()
                                }).sort(function(e, t) {
                                    return e.order - t.order
                                }).map(function(e) {
                                    return e.manifest.name
                                });
                                e.appsOrder = n, b.asyncLocalStorage.setItem("app-order", JSON.stringify(n))
                            }
                            t()
                        })
                    }
                }, {
                    key: "uninstallMozApp",
                    value: function(e) {
                        p.default.request("showDialog", {
                            type: "confirm",
                            ok: "uninstall",
                            header: b.toL10n("confirmation"),
                            content: b.toL10n("confirm-to-uninstall-app", {
                                appName: e.manifest.name
                            }),
                            translated: !0,
                            onOk: function() {
                                navigator.mozApps.mgmt.uninstall(e)
                            }
                        })
                    }
                }, {
                    key: "addBookmarkItem",
                    value: function(e) {
                        if (e.url) {
                            var t = this.transformBookmarkIntoApp(e);
                            return this.addItem(t), t
                        }
                    }
                }, {
                    key: "removeBookmarkItem",
                    value: function(e) {
                        var t = this.apps.findIndex(function(t) {
                            return t.url === e
                        });
                        return t >= 0 ? this.apps.splice(t, 1).shift() : null
                    }
                }, {
                    key: "updateBookmarkItems",
                    value: function() {
                        var e = this;
                        return new Promise(function(t) {
                            BookmarksDatabase.getAll().then(function(n) {
                                Object.keys(n).map(function(e) {
                                    return n[e]
                                }).forEach(function(t) {
                                    return e.addBookmarkItem(t)
                                }), t()
                            })
                        })
                    }
                }, {
                    key: "transformBookmarkIntoApp",
                    value: function(e) {
                        return {
                            type: "bookmark",
                            displayName: e.name,
                            enabled: !0,
                            removable: !0,
                            manifestURL: e.url,
                            url: e.url,
                            favicon: e.icon,
                            manifest: {
                                name: e.url,
                                theme_color: "#20AFCC"
                            }
                        }
                    }
                }, {
                    key: "unpinBookmark",
                    value: function(e) {
                        p.default.request("showDialog", {
                            type: "confirm",
                            ok: "unpin",
                            header: b.toL10n("confirmation"),
                            content: b.toL10n("confirm-to-unpin-bookmark"),
                            translated: !0,
                            onOk: function() {
                                BookmarksDatabase.remove(e.url)
                            }
                        })
                    }
                }, {
                    key: "renameBookmark",
                    value: function(e) {
                        var t = e.displayName.slice(0, 255);
                        p.default.request("showDialog", {
                            type: "prompt",
                            content: "rename",
                            ok: "ok",
                            initialValue: t,
                            maxLength: 255,
                            onOk: function(t) {
                                e.displayName !== t && BookmarksDatabase.get(e.url).then(function(e) {
                                    e.name = t, BookmarksDatabase.put(e)
                                })
                            }
                        })
                    }
                }]), t
            }(f.default),
            S = new _;
        S.start(), t.default = S
    },
    60: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(22),
            c = o(l),
            f = n(206),
            d = o(f),
            p = n(5),
            h = o(p),
            m = n(61),
            y = o(m),
            v = n(108),
            g = o(v),
            b = n(14),
            w = i(b),
            k = function(e) {
                function t() {
                    var e, n, i, o;
                    a(this, t);
                    for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                    return n = i = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.name = "SpeedDialHelper", o = n, r(i, o)
                }
                return s(t, e), u(t, [{
                    key: "speedDial",
                    value: function(e) {
                        var t = e - 1;
                        if (!(t < 0)) {
                            if (0 === t) return void this.dialVoicemail();
                            var n = d.default.contacts[t].tel;
                            n ? y.default.dial(n) : this.assignSpeedDial(e)
                        }
                    }
                }, {
                    key: "dialVoicemail",
                    value: function() {
                        var e = this;
                        h.default.request("chooseSim", "call").then(function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                n = d.default["ril.iccInfo.mbdn"],
                                i = (Array.isArray(n) ? n[t] : n) || navigator.mozVoicemail && navigator.mozVoicemail.getNumber(t);
                            i ? y.default.dial(i, !1, t) : e.assignSpeedDial(1)
                        })
                    }
                }, {
                    key: "assignSpeedDial",
                    value: function(e) {
                        e = Number(e), e && (1 === e ? h.default.request("showDialog", {
                            type: "alert",
                            header: "confirmation",
                            content: "assign-voicemail"
                        }) : h.default.request("showDialog", {
                            ok: "assign",
                            type: "confirm",
                            header: w.toL10n("confirmation"),
                            content: w.toL10n("assign-speed-dial", {
                                n: e
                            }),
                            translated: !0,
                            onOk: function() {
                                w.pickContact(function(t) {
                                    var n = t.target.result,
                                        i = n.id;
                                    if (n && i) return n.tel || n.tel[0] || n.tel[0].value ? void d.default.set(e, n.tel[0].value, i) : void window.alert(w.toL10n("alert-for-contacts-without-number"))
                                })
                            }
                        }))
                    }
                }, {
                    key: "removeSpeedDial",
                    value: function(e) {
                        var t = e.number,
                            n = e.name,
                            i = e.cb,
                            o = function() {
                                "function" == typeof i && i()
                            };
                        h.default.request("showDialog", {
                            ok: "remove",
                            type: "confirm",
                            header: w.toL10n("confirmation"),
                            content: w.toL10n("remove-speed-dial", {
                                name: n
                            }),
                            translated: !0,
                            onOk: function() {
                                d.default.remove(t)
                            },
                            onCancel: o,
                            onBack: o
                        })
                    }
                }, {
                    key: "replaceSpeedDial",
                    value: function(e) {
                        var t = e.number,
                            n = e.name,
                            i = e.contactId,
                            o = d.default.contacts[t - 1].tel;
                        w.pickContact(function(e) {
                            var a = e.target.result,
                                r = a.id;
                            if (a && r) {
                                var s = a.tel[0].value,
                                    u = a.name[0] || s;
                                i + "-" + n + "-" + o == r + "-" + u + "-" + s ? d.default.set(t, s, r) : h.default.request("showDialog", {
                                    ok: "replace",
                                    type: "confirm",
                                    header: w.toL10n("confirmation"),
                                    content: w.toL10n("replace-speed-dial", {
                                        name: n,
                                        subName: u
                                    }),
                                    translated: !0,
                                    onOk: function() {
                                        d.default.set(t, s, r)
                                    }
                                })
                            }
                        })
                    }
                }, {
                    key: "register",
                    value: function(e) {
                        e.addEventListener("keydown", this), e.addEventListener("keyup", this)
                    }
                }, {
                    key: "_handle_keyup",
                    value: function(e) {
                        if (this.pressingTimer && !h.default.query("LaunchStore.isLaunching") && h.default.query("Dialer.ready")) {
                            var t = g.default.translate(e.key);
                            switch (t) {
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                case "*":
                                case "#":
                                case "+":
                                    window.clearTimeout(this.pressingTimer), this.pressingTimer = null, h.default.query("App.panelAnimationRunning") || h.default.request("Dialer:show", t)
                            }
                        }
                    }
                }, {
                    key: "_handle_keydown",
                    value: function(e) {
                        var t = this;
                        if (!h.default.query("LaunchStore.isLaunching") && h.default.query("Dialer.ready")) {
                            var n = g.default.translate(e.key);
                            switch (this.pressingTimer && (window.clearTimeout(this.pressingTimer), this.pressingTimer = null), n) {
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                    this.pressingTimer = window.setTimeout(function() {
                                        t.speedDial(parseInt(n, 10)), t.pressingTimer = null
                                    }, 1500);
                                    break;
                                case "*":
                                case "#":
                                case "+":
                                    this.pressingTimer = window.setTimeout(function() {
                                        t.pressingTimer = null
                                    }, 500)
                            }
                        }
                    }
                }]), t
            }(c.default),
            _ = new k;
        t.default = _
    },
    62: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(22),
            l = i(u),
            c = n(5),
            f = i(c),
            d = n(59),
            p = i(d),
            h = function(e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "LaunchStore", n.resetLaunchingMarker = function() {
                        n.isLaunching = !1
                    }, n.ports = {}, window.addEventListener("visibilitychange", n.resetLaunchingMarker), window.addEventListener("blur", n.resetLaunchingMarker), f.default.registerState("isLaunching", n), n
                }
                return r(t, e), s(t, [{
                    key: "launch",
                    value: function(e, t, n) {
                        e && t && ("iac" === e ? this.launchForIAC(t, n) : this.launchApp(e, t), this.resetTimer && (clearTimeout(this.resetTimer), this.resetTimer = null), this.resetTimer = setTimeout(this.resetLaunchingMarker, 3e3))
                    }
                }, {
                    key: "launchApp",
                    value: function(e, t) {
                        if (!this.isLaunching) {
                            this.isLaunching = !0;
                            var n = p.default.queryApp(e, t);
                            n && n.launch()
                        }
                    }
                }, {
                    key: "launchForIAC",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isLaunching) {
                            if (!this.ports[e]) return void(navigator.mozApps.getSelf().onsuccess = function(i) {
                                i.target.result.connect(e).then(function(i) {
                                    t.ports[e] = i, t.launchForIAC(e, n)
                                }, function(e) {})
                            });
                            this.isLaunching = !0, this.ports[e].forEach(function(e) {
                                e.postMessage(n)
                            })
                        }
                    }
                }]), t
            }(l.default);
        t.default = new h
    },
    64: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(4),
            c = i(l),
            f = n(12),
            d = i(f),
            p = n(128),
            h = i(p),
            m = n(7),
            y = i(m),
            v = n(5),
            g = i(v),
            b = n(111),
            w = i(b);
        n(210);
        var k = function(e, t, n) {
            return function(i) {
                function l(e) {
                    o(this, l);
                    var t = a(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e));
                    return t.state = {
                        popup: null
                    }, t
                }
                return r(l, i), u(l, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.refs.composed.open = this.refs.composing.open.bind(this.refs.composing), this.refs.composed.close = this.refs.composing.close.bind(this.refs.composing), g.default.register("open", this.refs.composed), g.default.register("close", this.refs.composed), this.refs.composed.isActive = this.refs.composing.isActive.bind(this.refs.composing), this.refs.composing.on("closed", function() {
                            e.refs.composed.emit("closed"), e.emit("closed")
                        }), this.refs.composing.on("opened", function() {
                            e.refs.composed.emit("opened"), e.emit("opened")
                        })
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        this.refs.composing.open(e)
                    }
                }, {
                    key: "focus",
                    value: function() {
                        var e = d.default.findDOMNode(this.refs.composed);
                        e.activeElement ? (e.activeElement.focus(), document.activeElement === document.body && e.focus()) : e.focus()
                    }
                }, {
                    key: "close",
                    value: function(e) {
                        this.refs.composing.close(e)
                    }
                }, {
                    key: "isClosed",
                    value: function() {
                        return "closed" === this.refs.composing.state.transition
                    }
                }, {
                    key: "isTransitioning",
                    value: function() {
                        return this.refs.composing.isTransitioning()
                    }
                }, {
                    key: "getTopMost",
                    value: function() {
                        return this.refs.popup.refs.popup ? this.refs.popup.refs.popup.getTopMost() : this
                    }
                }, {
                    key: "openPopup",
                    value: function(e) {
                        this.refs.popup.setState({
                            popup: e
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.refs.popup && this.refs.popup.open()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return c.default.createElement(h.default, {
                            ref: "composing",
                            openAnimation: t,
                            closeAnimation: n
                        }, c.default.createElement(e, s({
                            ref: "composed"
                        }, this.props)), c.default.createElement(w.default, {
                            ref: "popup"
                        }))
                    }
                }]), l
            }(y.default)
        };
        t.default = k
    },
    104: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t, n) {
            var i = {};
            e: for (var o = 0, a = t.terms.length; o < a; o++)
                for (var r = t.terms[o], s = 0, u = t.fields.length; s < u; s++) {
                    var l = t.fields[s];
                    if (e[l])
                        for (var c = 0, f = e[l].length; c < f; c++) {
                            var d = e[l][c];
                            if ("undefined" != typeof d.value && (d = d.value), i[r] = n(d.trim(), r)) continue e
                        }
                }
            return Object.keys(i).every(function(e) {
                return i[e]
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            c = n(22),
            f = o(c),
            d = n(14),
            p = i(d),
            h = {
                contains: function(e, t) {
                    return e = e.toLowerCase(), t = t.toLowerCase(), e.contains(t)
                },
                equality: function(e, t) {
                    return e = e.toLowerCase(), t = t.toLowerCase(), e === t
                }
            },
            m = /\s+/,
            y = function(e) {
                function t() {
                    return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, e), l(t, [{
                    key: "start",
                    value: function() {
                        this.contactStore = new Map, this.API = window.mozContacts || navigator.mozContacts, this.API.addEventListener("contactchange", this), this.initObserver()
                    }
                }, {
                    key: "getContactChildren",
                    value: function(e) {
                        return e ? e.querySelectorAll("*[data-contact-number]") : []
                    }
                }, {
                    key: "updateFragment",
                    value: function(e) {
                        "function" == typeof e.hasAttribute && e.hasAttribute("data-contact-number") && this.updateContact(e);
                        for (var t = this.getContactChildren(e), n = 0; n < t.length; n++) this.updateContact(t[n])
                    }
                }, {
                    key: "initObserver",
                    value: function() {
                        var e = this,
                            t = {
                                attributes: !0,
                                characterData: !1,
                                childList: !0,
                                subtree: !0,
                                attributeFilter: ["data-contact-number"]
                            };
                        new MutationObserver(function(n, i) {
                            i.disconnect(), e.updateContacts(n), i.observe(document, t)
                        }).observe(document, t)
                    }
                }, {
                    key: "updateContacts",
                    value: function(e) {
                        for (var t = this, n = void 0, i = new Set, o = 0; o < e.length; o++) {
                            if (n = e[o], "childList" === n.type)
                                for (var a = void 0, r = 0; r < n.addedNodes.length; r++) a = n.addedNodes[r], a.nodeType === Node.ELEMENT_NODE && i.add(a);
                            "attributes" === n.type && i.add(n.target)
                        }
                        i.forEach(function(e) {
                            e.childElementCount ? t.updateFragment(e) : e.dataset.contactNumber && t.updateContact(e)
                        }, this)
                    }
                }, {
                    key: "updateContact",
                    value: function(e) {
                        var t = this,
                            n = e.dataset.contactNumber,
                            i = "name" === e.dataset.contactColumn ? e : e.querySelector("[data-contact-column=name]"),
                            o = "photo" === e.dataset.contactColumn ? e : e.querySelector("[data-contact-column=photo]");
                        this.findByAddress(n, function(a) {
                            var r = p.getContactDetails(n, a, {
                                photoURL: !0
                            });
                            i ? r.name ? i.textContent !== r.name && (t.debug("updating name", r, e), i.textContent = r.name) : i.textContent && (t.debug("cleaning name", r, e), i.textContent = "") : t.debug("no contact name DOM"), o ? (t.debug("updating photo", r, e), o.style.backgroundImage = r.photoURL ? "url(" + r.photoURL + ")" : null) : t.debug("no photo DOM")
                        })
                    }
                }, {
                    key: "_handle_contactchange",
                    value: function() {
                        this.updateFragment(document.body), this.emit("contact-changed")
                    }
                }, {
                    key: "findBy",
                    value: function(e, t) {
                        var n, i, o = [],
                            a = (e.filterValue || "").trim(),
                            r = this;
                        return navigator.mozContacts && a.length ? (n = a.split(m), e.filterValue = 1 === n.length ? n[0] : n.reduce(function(e, t) {
                            return o.push(t.toLowerCase()), t.length > e.length ? t : e
                        }, ""), e.filterValue.length < 3 && (e.filterLimit = 10), o.splice(o.indexOf(e.filterValue.toLowerCase()), 1), o.push.apply(o, n), i = r.API.find(e), i.onsuccess = function() {
                            var e, i = this.result.slice(),
                                a = ["tel", "givenName", "familyName"],
                                r = {
                                    fields: a,
                                    terms: o
                                },
                                s = [];
                            if (n.length > 1)
                                for (; e = i.pop();) u(e, r, h.contains) && s.push(e);
                            else s = i;
                            t(s, {
                                terms: n
                            })
                        }, void(i.onerror = function() {
                            this.onsuccess = null, this.onerror = null, t(null)
                        })) : void setTimeout(function() {
                            t("undefined" == typeof e.filterValue ? null : [], {})
                        })
                    }
                }, {
                    key: "findContactByString",
                    value: function(e, t) {
                        var n = ["tel", "givenName", "familyName"];
                        return this.findBy({
                            filterBy: n,
                            filterOp: "contains",
                            filterValue: e
                        }, t)
                    }
                }, {
                    key: "findExact",
                    value: function(e, t) {
                        return this.findBy({
                            filterBy: ["givenName", "familyName"],
                            filterOp: "contains",
                            filterValue: e
                        }, function(n) {
                            var i = n && n.length ? n[0] : null,
                                o = {
                                    fields: ["name"],
                                    terms: [e]
                                },
                                a = !1;
                            i && (a = u(i, o, h.equality)), t(a ? [i] : [])
                        })
                    }
                }, {
                    key: "findByPhoneNumber",
                    value: function(e, t) {
                        return this.findBy({
                            filterBy: ["tel"],
                            filterOp: "match",
                            filterValue: e.replace(/\s+/g, "")
                        }, function(e) {
                            return e && e.length ? void t(e) : void t([])
                        })
                    }
                }, {
                    key: "findByAddress",
                    value: function(e, t) {
                        this.findByPhoneNumber(e, t)
                    }
                }, {
                    key: "findExactByEmail",
                    value: function(e, t) {
                        return this.findBy({
                            filterBy: ["email"],
                            filterOp: "equals",
                            filterValue: e
                        }, t)
                    }
                }, {
                    key: "findById",
                    value: function(e, t) {
                        return this.findBy({
                            filterBy: ["id"],
                            filterOp: "equals",
                            filterValue: e
                        }, function(e) {
                            var n = [];
                            e && e.length && (n = e[0]), t(n)
                        })
                    }
                }]), t
            }(f.default),
            v = new y;
        v.start(), t.default = v
    },
    107: function(e, t) {
        "use strict";

        function n(e) {
            return e.replace(i, function(e, t) {
                return "x" === t.charAt(0).toLowerCase() ? String.fromCharCode(parseInt(t.substring(1), 16)) : String.fromCharCode(parseInt(t.substring(0), 10))
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.unescapeNumericHTMLEntities = n;
        var i = t.numericEntityRegExp = /&#([a-z0-9]+);/gi
    },
    108: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            w: "1",
            e: "2",
            r: "3",
            s: "4",
            d: "5",
            f: "6",
            z: "7",
            x: "8",
            c: "9",
            ",": "0",
            o: "+",
            a: "*",
            q: "#"
        };
        t.default = {
            translate: function(e) {
                return n[e] || e
            }
        }
    },
    111: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(4),
            l = i(u),
            c = n(12),
            f = i(c),
            d = n(7),
            p = i(d),
            h = function(e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        popup: null
                    }, n
                }
                return r(t, e), s(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "focus",
                    value: function() {
                        f.default.findDOMNode(this.refs.composed).focus()
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        this.refs.popup && this.refs.popup.open(e)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this;
                        this.refs.popup && (this.refs.popup.open("bottom-to-up"), this.refs.popup.refs.composed.close = this.close.bind(this), this.refs.popup.refs.composing.on("closing", function() {
                            e.setState({
                                popup: null
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.popup ? l.default.cloneElement(this.state.popup, {
                            ref: "popup"
                        }) : null;
                        return l.default.createElement("div", {
                            className: "popup"
                        }, e)
                    }
                }]), t
            }(p.default);
        t.default = h
    },
    126: function(e, t, n) {
        var i;
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(o) {
            i = function(e, t, n) {
                "use strict";

                function i(e, t) {
                    var n = o(t),
                        i = n.measureText(e).width;
                    return r("got text width", i), i
                }

                function o(e) {
                    r("get canvas context", e);
                    var t = s[e];
                    if (t) return t;
                    var n = document.createElement("canvas");
                    n.setAttribute("moz-opaque", "true"), n.setAttribute("width", "1px"), n.setAttribute("height", "1px"), r("created canvas", n);
                    var i = n.getContext("2d", {
                        willReadFrequently: !0
                    });
                    return i.font = e, s[e] = i
                }

                function a(e) {
                    return e.replace(/\s+/g, " ").trim()
                }
                var r = function() {},
                    s = {};
                n.exports = function(e) {
                    r("font fit", e);
                    var t, n, o = e.space - .03 * e.space,
                        s = e.min || 16,
                        u = e.max || 24,
                        l = a(e.text),
                        c = u;
                    do n = e.font.replace(/\d+px/, c + "px"), t = i(l, n); while (t > o && c !== s && c--);
                    return {
                        textWidth: t,
                        fontSize: c,
                        overflowing: t > o
                    }
                }
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
        }(n(227))
    },
    128: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(4),
            l = i(u),
            c = n(12),
            f = i(c),
            d = n(7),
            p = i(d),
            h = n(129),
            m = i(h);
        n(211);
        var y = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    transition: "closed",
                    animation: "immediate"
                }, n
            }
            return r(t, e), s(t, [{
                key: "isHidden",
                value: function() {
                    return "opened" !== this.state.transition
                }
            }]), s(t, [{
                key: "isActive",
                value: function() {
                    return "opened" === this.state.transition || "opening" === this.state.transition
                }
            }, {
                key: "isTransitioning",
                value: function() {
                    return "opening" === this.state.transition || "closing" === this.state.transition
                }
            }, {
                key: "onAnimationEnd",
                value: function(e) {
                    if (e.target === f.default.findDOMNode(this)) switch (this.state.transition) {
                        case "opening":
                            this.setState({
                                transition: "opened",
                                animation: ""
                            });
                            break;
                        case "closing":
                            this.setState({
                                transition: "closed",
                                animation: ""
                            })
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    f.default.findDOMNode(this).addEventListener("animationend", this.onAnimationEnd.bind(this), !1)
                }
            }, {
                key: "getActivatedState",
                value: function() {
                    switch (this.state.transition) {
                        case "opening":
                            return "-activating";
                        case "closing":
                            return "-deactivating";
                        case "opened":
                            return "-activated";
                        case "closed":
                            return "-deactivated"
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.emit(this.state.transition), this.publish(this.getActivatedState());
                    var e = (l.default.Children.toArray(this.props.children)[0], f.default.findDOMNode(this.refs.shadow).firstChild);
                    if (!e) return void this.debug("no content");
                    if ("opened" === this.state.transition) {
                        if (this.debug("focusing inner content"), this.props.noFocus) return;
                        e.activeElement ? e.activeElement.focus() : e.focus()
                    } else "closing" === this.state.transition && e.blur()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return t.transition !== this.state.transition || t.animation !== this.state.animation
                }
            }, {
                key: "open",
                value: function(e) {
                    switch (e = e || this.props.openAnimation, this.state.transition) {
                        case "opened":
                            break;
                        case "opening":
                        case "closing":
                        case "closed":
                            "immediate" !== e && e ? this.setState({
                                transition: "opening",
                                animation: e
                            }) : this.setState({
                                transition: "opened",
                                animation: ""
                            })
                    }
                }
            }, {
                key: "focus",
                value: function() {
                    var e = f.default.findDOMNode(this.refs.shadow).firstChild;
                    e && e.focus()
                }
            }, {
                key: "close",
                value: function(e) {
                    switch (e = e || this.props.closeAnimation, this.state.transition) {
                        case "closed":
                            break;
                        case "opening":
                        case "closing":
                        case "opened":
                            "immediate" !== e && e ? this.setState({
                                transition: "closing",
                                animation: e
                            }) : this.setState({
                                transition: "closed",
                                animation: ""
                            })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        tabIndex: "-1",
                        className: "x-window " + this.state.animation,
                        "aria-hidden": "opened" === this.state.transition ? "false" : "true",
                        "data-transition-state": this.state.transition
                    }, l.default.createElement(m.default, {
                        ref: "shadow",
                        transition: this.state.transition,
                        animation: this.state.animation
                    }, this.props.children))
                }
            }]), t
        }(p.default);
        y.defaultProps = {
            openAnimation: "immediate",
            closeAnimation: "immediate",
            noFocus: !1
        }, y.propTypes = {
            openAnimation: l.default.PropTypes.string,
            closeAnimation: l.default.PropTypes.string,
            noFocus: l.default.PropTypes.bool
        }, t.default = y
    },
    129: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(4),
            l = i(u),
            c = n(12),
            f = (i(c), function(e) {
                function t() {
                    return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return r(t, e), s(t, [{
                    key: "isOpening",
                    value: function(e) {
                        var t = e || this.props;
                        return "opening" === t.transition || "opened" === t.transition && "immediate" === t.animation
                    }
                }, {
                    key: "isClosed",
                    value: function(e) {
                        return "closed" === (e || this.props).transition
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return !!this.isOpening(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return l.default.createElement("div", {
                            className: "shadow-window"
                        }, this.props.children)
                    }
                }]), t
            }(l.default.Component));
        f.defaultProps = {
            transition: "",
            animation: ""
        }, f.propTypes = {
            transition: l.default.PropTypes.string.isRequired,
            animation: l.default.PropTypes.string.isRequired
        }, t.default = f
    },
    195: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e) {
            return p.default.createElement("div", {
                className: "app-tile",
                style: f({}, e.renderProps.orderStyle)
            }, p.default.createElement("div", {
                tabIndex: "-1",
                role: "menuitem",
                className: "app",
                key: e.uid,
                onClick: e.launch
            }, p.default.createElement("div", {
                className: "app__icon",
                style: e.renderProps.iconStyle
            }, p.default.createElement("div", {
                className: "app__icon--hq",
                style: {
                    backgroundImage: "url('" + e.icon_url_hq + "')"
                }
            }), e.favicon_url && p.default.createElement("div", {
                className: "app__icon--favicon",
                style: {
                    backgroundImage: "url('" + e.favicon_url + "')"
                }
            })), p.default.createElement("div", {
                className: "app__name"
            }, (0, I.unescapeNumericHTMLEntities)(e.displayName))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            d = n(4),
            p = o(d),
            h = n(7),
            m = o(h),
            y = n(64),
            v = o(y),
            g = n(59),
            b = o(g),
            w = n(17),
            k = o(w),
            _ = n(5),
            S = o(_),
            O = n(60),
            E = o(O),
            P = n(14),
            T = i(P),
            I = n(107),
            L = n(62),
            A = o(L),
            C = n(201);
        n(217);
        var M = function(e) {
            function t(e) {
                r(this, t);
                var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "AppList", n.navItemThrottleTime = 60, n.ready = !1, n.menuOptions = [{
                    id: "rename",
                    callback: function() {
                        n.element.focus(), n.focusIfPossible(), b.default.renameBookmark(n.state.apps[n.focusIndex])
                    }
                }, {
                    id: "move",
                    tags: ["grid", "list"],
                    callback: n.enterReorderMode.bind(n)
                }, {
                    id: "unpin",
                    callback: function() {
                        n.element.focus(), n.focusIfPossible(), b.default.unpinBookmark(n.state.apps[n.focusIndex])
                    }
                }, {
                    id: "grid-view",
                    tags: ["list", "single"],
                    callback: n.switchViewMode.bind(n, "grid")
                }, {
                    id: "list-view",
                    tags: ["grid", "single"],
                    callback: n.switchViewMode.bind(n, "list")
                }, {
                    id: "single-view",
                    tags: ["grid", "list"],
                    callback: n.switchViewMode.bind(n, "single")
                }, {
                    id: "uninstall",
                    callback: function() {
                        n.element.focus(), n.focusIfPossible(), b.default.uninstallMozApp(n.state.apps[n.focusIndex].mozApp)
                    }
                }], n.initFocus = [0, 0], n.state = {
                    col: n.props.col,
                    apps: [],
                    viewMode: n.props.viewMode,
                    focus: n.initFocus
                }, n.gridsPerPage = n.props.col * n.props.row, n.onKeyDown = n.onKeyDown.bind(n), n.onFocus = n.onFocus.bind(n), n.updateApps = n.updateApps.bind(n), n.currentPage = 0, window.addEventListener("visibilitychange", function() {
                    var e = document.activeElement;
                    document.hidden && n.appElements && [].concat(a(n.appElements)).includes(e) && (n.isStickyApp = !0, e && e.classList.add("is-focus-app"))
                }), T.asyncLocalStorage.getItem("app-view-mode").then(function(e) {
                    n.switchViewMode(e || n.state.viewMode)
                }), n
            }
            return u(t, e), c(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    b.default.on("change", this.updateApps), S.default.register("show", this), S.default.register("hide", this), S.default.registerState("ready", this), E.default.register(this.element), this.element.addEventListener("animationstart", function() {
                        e.isAnimationEnd = !1
                    }), this.element.addEventListener("animationend", function() {
                        e.isAnimationEnd = !0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.focusIfPossible(), this.updateSoftKeys(), this.scrollIntoViewIfPossible(), this.ready || (this.ready = this.state.apps.length > 0);
                    var n = t.apps,
                        i = this.state.apps,
                        o = i.length - n.length;
                    if (o > 0) {
                        i.filter(function(e) {
                            return !n.includes(e)
                        }).filter(function(e) {
                            return e.toBeTracked || e.mozApp && e.mozApp.toBeTracked
                        }).forEach(function(e) {
                            C.eventLogger.log({
                                type: C.EVENT_TYPES.APP_POSITION,
                                starting_position: -1,
                                end_position: i.indexOf(e),
                                app_id: e.manifestURL,
                                app_version: e.manifest.version
                            })
                        })
                    } else if (o < 0) {
                        var a = n.filter(function(e) {
                                return !i.includes(e)
                            }),
                            r = a.filter(function(e) {
                                return e.toBeTracked || e.mozApp && e.mozApp.toBeTracked
                            });
                        r.forEach(function(e) {
                            C.eventLogger.log({
                                type: C.EVENT_TYPES.APP_POSITION,
                                starting_position: n.indexOf(e),
                                end_position: -1,
                                app_id: e.manifestURL,
                                app_version: e.manifest.version
                            })
                        })
                    }
                }
            }, {
                key: "scrollIntoViewIfPossible",
                value: function() {
                    switch (this.state.viewMode) {
                        case "grid":
                            this.goPage(this.getPage(this.state.reorderMode ? this.reorder.focus[0] : this.state.focus[0]));
                            break;
                        case "list":
                            this.scrollIntoViewForListView();
                            break;
                        case "single":
                            document.activeElement.scrollIntoView()
                    }
                }
            }, {
                key: "scrollIntoViewForListView",
                value: function() {
                    if (!this.wrapperBondary) {
                        var e = this.appElements && this.appElements[0].offsetParent;
                        if (!e) return;
                        var t = e.getBoundingClientRect();
                        this.wrapperBondary = {
                            top: t.top,
                            bottom: window.innerHeight - t.bottom
                        }
                    }
                    var n = document.activeElement,
                        i = n.getBoundingClientRect();
                    i.top < this.wrapperBondary.top ? n.scrollIntoView(!0) : i.bottom > window.innerHeight - this.wrapperBondary.bottom && n.scrollIntoView(!1)
                }
            }, {
                key: "getPage",
                value: function(e) {
                    return Math.floor(e / this.props.row)
                }
            }, {
                key: "goPage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentPage;
                    !this.appElements || this.state.pageLength < 2 || this.currentPage !== e && (void 0 === this.pageOffsetY && (this.pageOffsetY = this.appElements[this.gridsPerPage].offsetTop - this.appElements[0].offsetTop), this._container.scrollTop = this.pageOffsetY * e, this.currentPage = e)
                }
            }, {
                key: "updateApps",
                value: function() {
                    var e = this,
                        t = this.element.contains(document.activeElement),
                        n = this.appHandler(b.default.apps);
                    this.setState(function(t) {
                        return t.apps = n, t.pageLength = Math.ceil(t.apps.length / e.gridsPerPage), t
                    }, function() {
                        t && (e.focus(), e.focusIfPossible())
                    })
                }
            }, {
                key: "updateSoftKeys",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        center: "select",
                        right: "options"
                    };
                    this.state.reorderMode && (e = {
                        center: "set",
                        right: "",
                        left: "cancel"
                    }), k.default.register(e, this.element)
                }
            }, {
                key: "onFocus",
                value: function() {
                    return this.isStickyApp && (this.isStickyApp = !1, document.querySelector(".is-focus-app").classList.remove("is-focus-app")), this.element === document.activeElement ? (this.focusIfPossible(), this.scrollIntoViewIfPossible(), void this.updateSoftKeys()) : (this.element.contains(document.activeElement) || this.element.focus(), void this.updateSoftKeys())
                }
            }, {
                key: "focusIfPossible",
                value: function() {
                    if (this.element.contains(document.activeElement)) {
                        var e = this.getFocusGridElement();
                        return e ? void e.focus() : void this.setState({
                            focus: this.initFocus
                        })
                    }
                }
            }, {
                key: "getFocusGridElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.rowColToIndex(this.state.focus, this.state.col),
                        t = this.state.apps.length - 1;
                    return e > t && (e = t, this.state.focus = T.indexToRowCol(e, this.state.col)), this.focusIndex = e, this.appElements || (this.appElements = this.element.getElementsByClassName("app")), this.appElements[e]
                }
            }, {
                key: "enterReorderMode",
                value: function() {
                    this.setState({
                        reorderMode: !0
                    }), this.reorder = {
                        target: this.element.querySelectorAll(".app-tile")[this.focusIndex],
                        focus: this.state.focus,
                        app: this.state.apps[this.focusIndex],
                        indexFrom: this.focusIndex,
                        indexTo: this.focusIndex
                    }
                }
            }, {
                key: "exitReorderMode",
                value: function(e) {
                    var t = this;
                    this.setState(function(n) {
                        if (n.reorderMode = !1, e) n.focus = [].concat(a(t.reorder.focus));
                        else {
                            var i = t.focusIndex;
                            n.apps[i].renderProps.orderStyle.order = t.calcOrder(i)
                        }
                        return n
                    }, function() {
                        t.reorder = {}
                    })
                }
            }, {
                key: "saveOrderAndExit",
                value: function() {
                    b.default.setAppsOrder([].concat(a(this.state.apps)).sort(function(e, t) {
                        return e.renderProps.orderStyle.order - t.renderProps.orderStyle.order
                    }).map(function(e) {
                        return e.manifest.name
                    })), C.eventLogger.log({
                        type: C.EVENT_TYPES.APP_POSITION,
                        starting_position: this.reorder.indexFrom,
                        end_position: this.reorder.indexTo,
                        app_id: this.reorder.app.manifestURL,
                        app_version: this.reorder.app.manifest.version
                    }), this.exitReorderMode(!0)
                }
            }, {
                key: "handleMoveGrid",
                value: function(e) {
                    var t = this,
                        n = T.rowColToIndex(e, this.state.col),
                        i = this.focusIndex > n ? -1 : 1;
                    this.reorder.focus = e, this.reorder.indexTo = n, this.setState(function(e) {
                        return e.apps[t.focusIndex].renderProps.orderStyle.order = t.calcOrder(n, i), e
                    })
                }
            }, {
                key: "switchViewMode",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "grid",
                        t = "grid" === e ? this.props.col : 1,
                        n = T.rowColToIndex(this.state.focus, this.state.col);
                    this.currentPage = null, this.setState({
                        focus: T.indexToRowCol(n, t),
                        col: t,
                        viewMode: e
                    }), T.asyncLocalStorage.setItem("app-view-mode", e)
                }
            }, {
                key: "navItem",
                value: function(e) {
                    var t = this;
                    this.navItemTimer || (this.navItemTimer = setTimeout(function() {
                        window.clearTimeout(t.navItemTimer), t.navItemTimer = null
                    }, this.navItemThrottleTime), this.state.reorderMode ? this.handleMoveGrid(e) : this.setState({
                        focus: e
                    }))
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = this,
                        n = this.state.reorderMode,
                        i = void 0,
                        o = e.key;
                    switch (o) {
                        case "ArrowLeft":
                        case "ArrowRight":
                            if ("grid" !== this.state.viewMode) return;
                        case "ArrowUp":
                        case "ArrowDown":
                            if (!this.isAnimationEnd) return void e.preventDefault();
                            var a = n ? this.reorder.focus || this.state.focus : this.state.focus;
                            i = T.navGrid({
                                currentRowCol: a,
                                dir: o,
                                col: this.state.col,
                                total: this.state.apps.length
                            }), this.navItem(i);
                            break;
                        case "Call":
                            A.default.launch("manifestURL", "app://communications.gaiamobile.org/manifest.webapp");
                            break;
                        case "SoftRight":
                            if (!n) {
                                var r = this.state.apps[this.focusIndex],
                                    s = this.menuOptions.filter(function(e) {
                                        switch (e.id) {
                                            case "uninstall":
                                                return "mozapp" === r.type && r.mozApp.removable;
                                            case "unpin":
                                            case "rename":
                                                return "bookmark" === r.type;
                                            default:
                                                return !!e.tags && e.tags.includes(t.state.viewMode)
                                        }
                                    });
                                S.default.request("showOptionMenu", {
                                    options: s
                                })
                            }
                            break;
                        case "SoftLeft":
                            n && this.exitReorderMode();
                            break;
                        case "Enter":
                            n ? this.saveOrderAndExit() : e.target.click();
                            break;
                        case "EndCall":
                        case "BrowserBack":
                        case "Backspace":
                            n ? this.exitReorderMode() : (this.setState({
                                focus: this.initFocus
                            }), S.default.request("closeSheet", "appList"))
                    }
                    i && (e.stopPropagation(), e.preventDefault())
                }
            }, {
                key: "appHandler",
                value: function(e) {
                    var t = this;
                    return e.filter(function(e) {
                        return !e.shouldHide()
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }).map(function(e, n) {
                        return e.renderProps = {
                            orderStyle: {
                                order: t.calcOrder(n)
                            },
                            iconStyle: {
                                color: e.theme,
                                backgroundImage: "url('" + e.icon_url + "')"
                            }
                        }, e
                    })
                }
            }, {
                key: "renderPagination",
                value: function() {
                    var e = void 0,
                        t = this.getPage(this.state.reorderMode ? this.reorder.focus[0] : this.state.focus[0]);
                    if (this.state.pageLength > 1) {
                        var n = Array(this.state.pageLength).fill().map(function(e, n) {
                            var i = n === t ? "page-indicator active" : "page-indicator";
                            return p.default.createElement("div", {
                                key: "page-indicator--" + n,
                                className: i
                            })
                        });
                        e = p.default.createElement("div", {
                            className: "pagination"
                        }, n)
                    }
                    return e
                }
            }, {
                key: "calcOrder",
                value: function(e) {
                    return 1e3 * (e + 1 + .5 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = "grid" === this.state.viewMode ? this.renderPagination() : null,
                        n = this.state.apps.map(function(e) {
                            return p.default.createElement(l, f({
                                key: e.manifestURL
                            }, e))
                        }),
                        i = ["appList", this.state.reorderMode ? "is-reordering" : ""].filter(Boolean).join(" ");
                    return p.default.createElement("div", {
                        className: i,
                        "data-view-mode": this.state.viewMode,
                        tabIndex: "-1",
                        onKeyDown: this.onKeyDown,
                        onFocus: this.onFocus,
                        ref: function(t) {
                            e.element = t
                        }
                    }, t, p.default.createElement("h1", {
                        className: "readout-only",
                        id: "all-apps",
                        "data-l10n-id": "all-apps"
                    }), p.default.createElement("div", {
                        className: "appList__container",
                        role: "heading",
                        "aria-labelledby": "all-apps",
                        ref: function(t) {
                            return e._container = t
                        }
                    }, p.default.createElement("div", {
                        className: "app-wall"
                    }, n)))
                }
            }]), t
        }(m.default);
        M.defaultProps = {
            viewMode: "grid",
            col: 3,
            row: 3
        }, M.propTypes = {
            viewMode: p.default.PropTypes.string,
            col: p.default.PropTypes.number,
            row: p.default.PropTypes.number
        }, t.default = (0, v.default)(M, "immediate", "immediate")
    },
    196: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                    } catch (l) {
                        a = !0, o = l
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            f = n(4),
            d = i(f),
            p = n(7),
            h = i(p),
            m = n(5),
            g = i(m),
            v = n(25),
            y = i(v);
        n(219), n(220);
        var b = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "Clock", n.initState = {
                    datetime: "",
                    timeForReadout: "",
                    date: "",
                    h1: "0",
                    h2: "0",
                    m1: "0",
                    m2: "0",
                    ampm: "",
                    visible: "true" === localStorage.getItem("home.clock.visible")
                }, n.state = u({}, n.initState), navigator.mozL10n.ready(function() {
                    null === navigator.mozHour12 && (navigator.mozHour12 = "true" === localStorage.getItem("locale.hour12")), n.refresh()
                }), n.digiKey = 0, n.digiIcons = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bold",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return n.digiKey += 1, [].concat(a(Array(t))).map(function(t, i) {
                        return d.default.createElement("i", {
                            key: "key_" + i + "_" + e + "_" + n.digiKey,
                            "data-icon": "numeric_" + i + "_" + e,
                            "aria-hidden": "true"
                        })
                    })
                }, n.iconsHtml = {
                    bold: n.digiIcons(),
                    light: n.digiIcons("light")
                }, n
            }
            return s(t, e), c(t, [{
                key: "focus",
                value: function() {}
            }, {
                key: "componentWillMount",
                value: function() {
                    y.default.addObserver("home.clock.visible", this), y.default.addObserver("locale.hour12", this)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    g.default.register("start", this), g.default.register("stop", this)
                }
            }, {
                key: "_handle_moztimechange",
                value: function() {
                    this.stop(), this.start()
                }
            }, {
                key: "_handle_timeformatchange",
                value: function() {
                    this.refresh()
                }
            }, {
                key: "_handle_visibilitychange",
                value: function() {
                    "visible" === document.visibilityState ? this.start() : this.stop()
                }
            }, {
                key: "start",
                value: function() {
                    var e = this,
                        t = new Date;
                    this.refresh(), this.timer = setTimeout(function() {
                        e.start()
                    }, 1e3 * (60 - t.getSeconds()))
                }
            }, {
                key: "refresh",
                value: function() {
                    var e = this;
                    this.state.visible && navigator.mozL10n.ready(function() {
                        var t = new Date,
                            n = navigator.mozHour12 ? "%I" : "%H",
                            i = new navigator.mozL10n.DateTimeFormat,
                            a = i.localeFormat(t, "%a, %e %b | %p | " + n + " | %M"),
                            o = a.split(" | "),
                            r = l(o, 4),
                            s = r[0],
                            u = r[1],
                            c = r[2],
                            f = r[3];
                        c = ("00" + c).slice(-2).split(""), f = f.split(""), e.setState({
                            datetime: i.localeFormat(t, "%Y-%m-%dT%T"),
                            timeForReadout: i.localeFormat(t, "homescreen %I:%M " + (navigator.mozHour12 ? "%p" : "") + ", %A %B %e"),
                            date: s,
                            h1: c[0],
                            h2: c[1],
                            m1: f[0],
                            m2: f[1],
                            ampm: u
                        })
                    })
                }
            }, {
                key: "_observe_locale.hour12",
                value: function(e) {
                    localStorage.setItem("locale.hour12", e)
                }
            }, {
                key: "_observe_home.clock.visible",
                value: function(e) {
                    localStorage.setItem("home.clock.visible", e), this.setState({
                        visible: e
                    }), this.stop(), e ? (this.start(), window.addEventListener("moztimechange", this), window.addEventListener("timeformatchange", this), window.addEventListener("visibilitychange", this)) : (window.removeEventListener("moztimechange", this), window.removeEventListener("timeformatchange", this), window.removeEventListener("visibilitychange", this))
                }
            }, {
                key: "stop",
                value: function() {
                    clearInterval(this.timer), this.timer = null
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.visible ? d.default.createElement("time", {
                        className: "ClockComponent",
                        dateTime: this.state.datetime,
                        role: "menuitem",
                        "aria-label": this.state.timeForReadout
                    }, d.default.createElement("div", {
                        className: "clock-upper"
                    }, d.default.createElement("bdi", {
                        className: "clockDigi-container"
                    }, d.default.createElement("span", {
                        className: "hour clockDigi-box"
                    }, d.default.createElement("span", {
                        className: "clockDigi clockDigi--time",
                        "data-now": this.state.h1
                    }, this.iconsHtml.bold), d.default.createElement("span", {
                        className: "clockDigi clockDigi--time",
                        "data-now": this.state.h2
                    }, this.iconsHtml.bold)), d.default.createElement("div", {
                        className: "clock-colon"
                    }), d.default.createElement("span", {
                        className: "minute clockDigi-box"
                    }, d.default.createElement("span", {
                        className: "clockDigi clockDigi--time",
                        "data-now": this.state.m1
                    }, this.iconsHtml.bold), d.default.createElement("span", {
                        className: "clockDigi clockDigi--time",
                        "data-now": this.state.m2
                    }, this.iconsHtml.bold))), d.default.createElement("div", {
                        className: "clock-ampm primary",
                        "data-hour-24": !navigator.mozHour12
                    }, this.state.ampm)), d.default.createElement("hr", {
                        className: "clock-divider"
                    }), d.default.createElement("div", {
                        className: "date primary"
                    }, this.state.date)) : null
                }
            }]), t
        }(h.default);
        t.default = b
    },
    198: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(4),
            c = o(l),
            f = n(5),
            d = o(f),
            p = n(7),
            h = o(p),
            m = n(64),
            y = o(m),
            v = n(199),
            g = o(v),
            b = n(200),
            w = o(b),
            k = n(14),
            _ = i(k),
            S = n(61),
            O = o(S),
            E = n(104),
            P = o(E);
        n(220), n(223);
        var T = function(e) {
            function t(e) {
                a(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "Dialer", n.ready = !1, n.toggleStayEffect = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    n.parentBox.classList.toggle("with-dialer-stay-effect", e)
                }, n.initState = {
                    dialerState: null,
                    matchedContact: null,
                    telNum: "",
                    suggestions: []
                }, n.state = Object.assign({}, n.initState), O.default.on("mmiloading", n.showLoading.bind(n)), O.default.on("mmiloaded", n.showAlert.bind(n)), O.default.on("ussd-received", n.onUssdReceived.bind(n)), n.children = {}, ["onKeyDown", "call", "hide", "updateTelNum", "focusInput"].forEach(function(e) {
                    n[e] = n[e].bind(n)
                }), d.default.register("show", n), d.default.register("hide", n), d.default.register("toggleStayEffect", n), d.default.register("resetCallingMarker", n), d.default.registerState("ready", n), d.default.registerState("isShown", n), d.default.registerState("isCalling", n), n
            }
            return s(t, e), u(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    P.default.on("contact-changed", function() {
                        e.isShown && e.getSuggestions(e.state.telNum)
                    }), this.updateTelTypes(), this.parentBox = this.element.parentElement.parentElement, this.parentBox.addEventListener("animationend", function() {
                        e.toggleStayEffect()
                    }), this.ready = !0
                }
            }, {
                key: "onUssdReceived",
                value: function(e) {
                    O.default.mmiloading && d.default.request("hideDialog");
                    var t = navigator.mozMobileConnections[e.serviceId || 0].voice.network,
                        n = t ? t.shortName || t.longName : "";
                    d.default.request("showDialog", {
                        type: "alert",
                        header: n,
                        content: e.message ? e.message.replace(/\\r\\n|\\r|\\n/g, "\n") : _.toL10n("GetEmptyUssdPrompt"),
                        translated: !0,
                        noClose: !1
                    })
                }
            }, {
                key: "show",
                value: function(e) {
                    this.isShown || this.isHidden() && (this.updateTelTypes(), d.default.request("openSheet", "dialer"), this.isShown = !0, this.element.focus(), e && (this.focusInput(), this.children.dialerInput.sendFirstChar(e)))
                }
            }, {
                key: "hide",
                value: function() {
                    this.isHidden() || d.default.request("closeSheet", "dialer"), this.isShown = !1, this.children.dialerInput.element.style.fontSize = "", this.setState(this.initState), this.children.dialerInput.setState({
                        telNum: ""
                    })
                }
            }, {
                key: "updateTelTypes",
                value: function() {
                    var e = this;
                    navigator.mozL10n.ready(function() {
                        e.telTypes = ["personal", "mobile", "home", "work", "fax-home", "fax-office", "fax-other"].reduce(function(e, t) {
                            return e[t] = _.toL10n(t), e
                        }, {})
                    })
                }
            }, {
                key: "isHidden",
                value: function() {
                    for (var e = this.element; e !== document.body && !e.classList.contains("hidden") && "closed" !== e.dataset.transitionState;) e = e.parentElement;
                    return e.classList.contains("hidden") || "closed" === e.dataset.transitionState
                }
            }, {
                key: "updateTelNum",
                value: function(e) {
                    var t = this,
                        n = {
                            telNum: e
                        };
                    e.length < 2 && (n.matchedContact = this.initState.matchedContact, n.suggestions = this.initState.suggestions), this.setState(n, function() {
                        0 === e.length ? t.hide() : O.default.instantDialIfNecessary(e) && (t.children.dialerInput.exitDialer(), O.default.dial(e)), e.length >= 2 && t.getSuggestions(e)
                    })
                }
            }, {
                key: "focusInput",
                value: function() {
                    this.stopRenderSteply(), this.children.dialerInput.element.focus()
                }
            }, {
                key: "focusSuggestions",
                value: function() {
                    var e = this;
                    this.state.suggestions.length && (this.children.dialerSuggestions.initFocus(), this.allSuggestions.keyword || setTimeout(function() {
                        e.renderSteply()
                    }, 0))
                }
            }, {
                key: "renderSteply",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        n = this.state.suggestions.length;
                    if (this.allSuggestions.length <= n) return void this.stopRenderSteply();
                    var i = this.allSuggestions.slice(0, n + e);
                    i.keyword = this.state.telNum, this.setState({
                        suggestions: i
                    }), this.suggestionRenderTimer = setTimeout(this.renderSteply.bind(this), t)
                }
            }, {
                key: "stopRenderSteply",
                value: function() {
                    this.suggestionRenderTimer && (window.clearTimeout(this.suggestionRenderTimer), this.suggestionRenderTimer = null)
                }
            }, {
                key: "call",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.number,
                        i = void 0 === n ? this.state.telNum : n,
                        o = t.isVideo,
                        a = void 0 !== o && o;
                    return this.isCalling ? void d.default.request("showDialog", {
                        ok: "skip",
                        cancel: "cancel",
                        type: "confirm",
                        content: "otherConnectionInUseMessage",
                        onOk: function() {
                            d.default.request("Dialer:resetCallingMarker")
                        }
                    }) : (this.isCalling = !0, this.stopRenderSteply(), void O.default.dial(i, a).then(function() {
                        e.isCalling = !1, d.default.request("Dialer:hide"), d.default.request("hideDialog")
                    }).catch(function() {
                        e.isCalling = !1
                    }))
                }
            }, {
                key: "getSuggestions",
                value: function(e) {
                    O.default.isValid(e) && _.contactNumFilter({
                        telNum: e
                    }).then(this.filterSuggestions.bind(this, e))
                }
            }, {
                key: "filterSuggestions",
                value: function(e, t) {
                    var n = this,
                        i = void 0,
                        o = t.reduce(function(t, o) {
                            return t.concat(o.tel.map(function(t) {
                                var a = {
                                    id: o.id,
                                    name: o.name && o.name[0],
                                    type: n.getL10nFromTelTypes(t.type[0] || "mobile"),
                                    number: t.value
                                };
                                return i || t.value !== e || (i = a), a
                            }))
                        }, []).filter(function(e) {
                            return -1 !== e.number.indexOf(n.state.telNum)
                        });
                    this.allSuggestions = o, this.renderSuggestions(o.slice(0, 5), i, e)
                }
            }, {
                key: "renderSuggestions",
                value: function(e, t, n) {
                    var i = this;
                    n === this.state.telNum && (e.keyword = n, this.setState({
                        matchedContact: t,
                        suggestions: e
                    }, function() {
                        i.children.dialerSuggestions.element.scrollTo(0, 0)
                    }))
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = e.key;
                    switch (e.stopPropagation(), t) {
                        case "EndCall":
                            this.hide();
                            break;
                        case "ArrowDown":
                            this.focusSuggestions()
                    }
                }
            }, {
                key: "getMatchedContactInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.matchedContact,
                        t = void 0;
                    return e && (t = [e.name, e.type].filter(Boolean).join(", ")), t
                }
            }, {
                key: "showAlert",
                value: function(e, t) {
                    this.resetCallingMarker(), d.default.request("Dialer:hide"), (e || t) && d.default.request("showDialog", {
                        type: "alert",
                        header: e,
                        content: _.toL10n(t),
                        translated: !0,
                        noClose: !1
                    })
                }
            }, {
                key: "resetCallingMarker",
                value: function() {
                    this.isCalling = !1
                }
            }, {
                key: "showLoading",
                value: function() {
                    d.default.request("Dialer:hide").then(function() {
                        d.default.request("showDialog", {
                            type: "alert",
                            content: "sending",
                            otherClass: "is-loading",
                            noClose: !1
                        })
                    })
                }
            }, {
                key: "getL10nFromTelTypes",
                value: function(e) {
                    return this.telTypes[e] || e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return c.default.createElement("div", {
                        className: "dialerBox",
                        tabIndex: "-1",
                        onKeyDown: this.onKeyDown,
                        ref: function(t) {
                            e.element = t
                        }
                    }, c.default.createElement("div", {
                        className: "dialer-header"
                    }, c.default.createElement("div", {
                        className: "dialer-state text-thi"
                    }, this.state.dialerState), c.default.createElement(g.default, {
                        ref: function(t) {
                            e.children.dialerInput = t
                        },
                        dial: this.call,
                        exitDialer: this.hide,
                        updateTelNum: this.updateTelNum
                    }), c.default.createElement("div", {
                        className: "dialer-info text-thi"
                    }, this.getMatchedContactInfo())), c.default.createElement(w.default, {
                        ref: function(t) {
                            e.children.dialerSuggestions = t
                        },
                        suggestions: this.state.suggestions,
                        exitSuggestions: this.focusInput,
                        dial: this.call
                    }))
                }
            }]), t
        }(h.default);
        t.default = (0, y.default)(T, "immediate", "immediate")
    },
    199: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(4),
            c = o(l),
            f = n(7),
            d = o(f),
            p = n(5),
            h = o(p),
            m = n(17),
            y = o(m),
            v = n(25),
            g = o(v),
            b = n(126),
            w = o(b),
            k = n(14),
            _ = i(k),
            S = n(108),
            O = o(S),
            E = n(63),
            P = o(E),
            T = n(62),
            I = o(T),
            L = function(e) {
                function t(e) {
                    a(this, t);
                    var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "DialerInput", n.SPECIAL_CHARS = ["*", "+", ","], n.telNum = "", n.fontStyles = "", n.isVTSupported = !1, LazyLoader.load(["shared/js/dialer/tone_player.js"], function() {
                        TonePlayer.init("notification"), TonePlayer.gTonesFrequencies = {
                            1: [697, 1209],
                            2: [697, 1336],
                            3: [697, 1477],
                            A: [697, 1633],
                            4: [770, 1209],
                            5: [770, 1336],
                            6: [770, 1477],
                            B: [770, 1633],
                            7: [852, 1209],
                            8: [852, 1336],
                            9: [852, 1477],
                            C: [852, 1633],
                            "*": [941, 1209],
                            0: [941, 1336],
                            "#": [941, 1477],
                            D: [941, 1633],
                            ",": [941, 1209],
                            "+": [941, 1336]
                        }
                    }), n.specialCharsCount = n.SPECIAL_CHARS.length, n.onKeyPress = n.onKeyPress.bind(n), n.onKeyDown = n.onKeyDown.bind(n), n.onKeyUp = n.onKeyUp.bind(n), n.onInput = n.onInput.bind(n), n
                }
                return s(t, e), u(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.element.setAttribute("x-inputmode", "native"), g.default.addObserver("phone.ring.keypad", this), this.updateSoftKeys(), this.getFontStyles(), this.getVTSupportability()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateSoftKeys()
                    }
                }, {
                    key: "updateSoftKeys",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            left: "contacts",
                            center: "call",
                            right: "options"
                        };
                        if (navigator.mozMobileConnections && navigator.mozMobileConnections.length > 1 && !P.default.isAlwaysAsk()) {
                            e.center = {
                                text: "call",
                                icon: ""
                            };
                            var t = SIMSlotManager.isMultiSIM() && !SIMSlotManager.hasOnlyOneSIMCardDetected(),
                                n = void 0 !== P.default.cardIndex;
                            t && n && (e.center.icon = "sim-" + (P.default.cardIndex + 1))
                        }
                        y.default.register(e, this.element)
                    }
                }, {
                    key: "onInput",
                    value: function() {
                        var e = this.element.value;
                        this.props.updateTelNum(e), this.telNum = e, this.updateFontSize(e), "" === e && this.exitDialer()
                    }
                }, {
                    key: "onKeyPress",
                    value: function(e) {
                        e.preventDefault()
                    }
                }, {
                    key: "onKeyUp",
                    value: function(e) {
                        var t = O.default.translate(e.key);
                        "Backspace" === t && this.clearLongpressDeleteTimer(), "0" === t && (window.clearTimeout(this.longpressSpecialChar), this.longpressSpecialChar = null)
                    }
                }, {
                    key: "onKeyDown",
                    value: function(e) {
                        var t = this,
                            n = O.default.translate(e.key);
                        if (!this.longpressDeleteTimer && (!h.default.query("Dialer.isCalling") || "Call" === n && "Enter" === n)) switch (n) {
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                            case "0":
                            case "#":
                            case "+":
                            case "*":
                                if (e.stopPropagation && e.stopPropagation(), "0" === n && void 0 !== e.target && _.isLandscape && (window.clearTimeout(this.longpressSpecialChar), this.longpressSpecialChar = setTimeout(function() {
                                        var e = t.SPECIAL_CHARS[2],
                                            n = t.element.selectionStart,
                                            i = t.element.value;
                                        t.replaceLeftChar(e, n, i), t.playKeyTone(e)
                                    }, 1e3)), !_.isLandscape && "*" === n && -1 !== this.SPECIAL_CHARS.indexOf(this.lastKeyinChar) && this.getNowTime() - this.lastInputTime < 1e3) {
                                    var i = this.element,
                                        o = i.selectionStart,
                                        a = i.value,
                                        r = a[o - 1],
                                        s = this.SPECIAL_CHARS.indexOf(r);
                                    this.element.value = a.slice(0, o - 1) + a.slice(o), this.element.setSelectionRange(o - 1, o - 1), n = this.SPECIAL_CHARS[(s + 1) % this.specialCharsCount]
                                }
                                e.preventDefault && e.preventDefault(), this.insertKeyAtCaret(n), this.playKeyTone(n), this.lastKeyinChar = n, this.lastInputTime = this.getNowTime(), this.onInput();
                                break;
                            case "Backspace":
                                e.stopPropagation(), this.longpressDeleteTimer = setTimeout(this.longpressDelete.bind(this), 1e3);
                                break;
                            case "EndCall":
                                e.stopPropagation(), this.deleteAllText();
                                break;
                            case "SoftLeft":
                                e.stopPropagation(), I.default.launch("manifestURL", "app://contact.gaiamobile.org/manifest.webapp");
                                break;
                            case "SoftRight":
                                e.stopPropagation(), this.handleTelNumber();
                                break;
                            case "Enter":
                            case "Call":
                                e.preventDefault(), e.stopPropagation(), this.props.dial({
                                    number: this.telNum
                                });
                                break;
                            case "ArrowDown":
                            case "ArrowUp":
                                e.preventDefault();
                                break;
                            case "ArrowLeft":
                            case "ArrowRight":
                                this.lastKeyinChar = null;
                                break;
                            default:
                                e.stopPropagation(), e.preventDefault()
                        }
                    }
                }, {
                    key: "_observe_phone.ring.keypad",
                    value: function(e) {
                        this._keypadSoundIsEnabled = e
                    }
                }, {
                    key: "insertKeyAtCaret",
                    value: function(e) {
                        var t = this.element.selectionEnd,
                            n = this.element.value;
                        this.element.value = n.substr(0, t) + e + n.substr(t), this.element.selectionEnd = t + 1
                    }
                }, {
                    key: "sendFirstChar",
                    value: function(e) {
                        this.element.value = "", this.onKeyDown({
                            key: e
                        }), this.getFontStyles()
                    }
                }, {
                    key: "getNowTime",
                    value: function() {
                        return +new Date
                    }
                }, {
                    key: "replaceLeftChar",
                    value: function(e, t, n) {
                        var i = t - 1;
                        this.element.value = n.substr(0, i) + e + n.substr(i + e.length), this.element.setSelectionRange(t, t)
                    }
                }, {
                    key: "clearLongpressDeleteTimer",
                    value: function() {
                        window.clearTimeout(this.longpressDeleteTimer), this.longpressDeleteTimer = null
                    }
                }, {
                    key: "longpressDelete",
                    value: function() {
                        this.clearLongpressDeleteTimer(), this.deleteAllText()
                    }
                }, {
                    key: "deleteAllText",
                    value: function() {
                        this.element.value = "", this.onInput()
                    }
                }, {
                    key: "playKeyTone",
                    value: function(e) {
                        this._keypadSoundIsEnabled && TonePlayer.start(TonePlayer.gTonesFrequencies[e], !0)
                    }
                }, {
                    key: "handleTelNumber",
                    value: function() {
                        var e = this,
                            t = [{
                                id: "add-to-existing-contact",
                                callback: function() {
                                    _.sendNumberToContact({
                                        name: "update",
                                        telNum: e.telNum
                                    })
                                }
                            }, {
                                id: "create-new-contact",
                                callback: function() {
                                    _.sendNumberToContact({
                                        name: "new",
                                        telNum: e.telNum
                                    })
                                }
                            }];
                        this.isVTSupported && t.unshift({
                            id: "video-call",
                            callback: function() {
                                e.element.focus(), e.props.dial({
                                    number: e.telNum,
                                    isVideo: !0
                                })
                            }
                        }), h.default.request("showOptionMenu", {
                            options: t,
                            onCancel: function() {
                                return e.element.focus()
                            }
                        })
                    }
                }, {
                    key: "getFontStyles",
                    value: function() {
                        var e = this;
                        this.fontStyles = function() {
                            var t = window.getComputedStyle(e.element);
                            return t ? ["font-style", "font-weight", "font-size", "font-family"].map(function(e) {
                                return t[e]
                            }).join(" ") : ""
                        }()
                    }
                }, {
                    key: "updateFontSize",
                    value: function(e) {
                        this.offsetWidth || (this.offsetWidth = this.element.offsetWidth);
                        var t = this.element.style.fontSize,
                            n = (0, w.default)({
                                text: e,
                                font: this.fontStyles,
                                space: this.offsetWidth,
                                min: 22,
                                max: 30
                            }).fontSize + "px";
                        t !== n && (this.element.style.fontSize = n)
                    }
                }, {
                    key: "getVTSupportability",
                    value: function() {
                        var e = this;
                        navigator.hasFeature && navigator.hasFeature("device.capability.vilte").then(function(t) {
                            e.isVTSupported = t
                        })
                    }
                }, {
                    key: "exitDialer",
                    value: function() {
                        this.clearLongpressDeleteTimer(), this.props.exitDialer()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return c.default.createElement("input", {
                            tabIndex: "-1",
                            className: "dialer-input",
                            onKeyPress: this.onKeyPress,
                            onKeyDown: this.onKeyDown,
                            onKeyUp: this.onKeyUp,
                            onInput: this.onInput,
                            ref: function(t) {
                                e.element = t
                            }
                        })
                    }
                }]), t
            }(d.default);
        L.defaultProps = {
            dial: null,
            exitDialer: null,
            updateTelNum: null
        }, L.propTypes = {
            dial: c.default.PropTypes.func,
            exitDialer: c.default.PropTypes.func,
            updateTelNum: c.default.PropTypes.func
        }, t.default = L
    },
    200: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(4),
            l = i(u),
            c = n(7),
            f = i(c),
            d = n(5),
            p = i(d),
            h = n(17),
            m = i(h),
            y = n(103),
            v = i(y),
            g = n(63),
            b = i(g),
            w = function(e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "DialerSuggestions", n.onKeyDown = n.onKeyDown.bind(n), n
                }
                return r(t, e), s(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.suggestionNavigator = new v.default(".dialer-focusable", this.element), this.updateSoftKeys(), this.getVTSupportability()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateSoftKeys()
                    }
                }, {
                    key: "updateSoftKeys",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            left: "",
                            center: "call",
                            right: this.isVTSupported ? "options" : ""
                        };
                        if (navigator.mozMobileConnections && navigator.mozMobileConnections.length > 1 && !b.default.isAlwaysAsk()) {
                            e.center = {
                                text: "call",
                                icon: ""
                            };
                            var t = SIMSlotManager.isMultiSIM() && !SIMSlotManager.hasOnlyOneSIMCardDetected(),
                                n = void 0 !== b.default.cardIndex;
                            t && n && (e.center.icon = "sim-" + (b.default.cardIndex + 1))
                        }
                        m.default.register(e, this.element)
                    }
                }, {
                    key: "getVTSupportability",
                    value: function() {
                        var e = this;
                        navigator.hasFeature && navigator.hasFeature("device.capability.vilte").then(function(t) {
                            e.isVTSupported = t
                        })
                    }
                }, {
                    key: "handleOption",
                    value: function() {
                        var e = this;
                        if (this.isVTSupported) {
                            var t = document.activeElement,
                                n = [{
                                    id: "video-call",
                                    callback: function() {
                                        t.focus(), e.props.dial({
                                            number: e.getFocusedSuggestion().number,
                                            isVideo: !0
                                        })
                                    }
                                }];
                            p.default.request("showOptionMenu", {
                                options: n,
                                onCancel: function() {
                                    return e.element.focus()
                                }
                            })
                        }
                    }
                }, {
                    key: "onKeyDown",
                    value: function(e) {
                        if (!p.default.query("Dialer.isCalling")) switch (e.key) {
                            case "SoftRight":
                                e.stopPropagation(), this.handleOption();
                                break;
                            case "Backspace":
                                e.stopPropagation(), e.preventDefault(), this.props.exitSuggestions();
                                break;
                            case "Enter":
                            case "Call":
                                e.stopPropagation(), this.props.dial({
                                    number: this.getFocusedSuggestion().number
                                })
                        }
                    }
                }, {
                    key: "getFocusedSuggestion",
                    value: function() {
                        var e = this.suggestionNavigator,
                            t = e._candidates.indexOf(e._currentFocus);
                        return this.props.suggestions[t]
                    }
                }, {
                    key: "initFocus",
                    value: function() {
                        var e = this;
                        setTimeout(function() {
                            var t = e.element.querySelector(".dialer-focusable");
                            t.focus(), e.suggestionNavigator.setFocus(t)
                        }, 0)
                    }
                }, {
                    key: "formatMatchedNum",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.suggestions.keyword,
                            n = e.indexOf(t);
                        if (-1 !== n) {
                            var i = e.slice(0, n),
                                o = e.slice(n + t.length);
                            return l.default.createElement("span", {
                                dir: "ltr",
                                className: "dialerSuggestion__telNum",
                                dangerouslySetInnerHTML: {
                                    __html: i + "<mark>" + t + "</mark>" + o
                                }
                            })
                        }
                    }
                }, {
                    key: "suggestionsHtml",
                    value: function e() {
                        var t = this;
                        return this.props.suggestions.map(function(e, n) {
                            return l.default.createElement("li", {
                                key: "suggestions-" + n,
                                className: "dialer-focusable",
                                tabIndex: "-1"
                            }, l.default.createElement("div", {
                                className: "dialerSuggestion"
                            }, l.default.createElement("div", {
                                className: "dialerSuggestion__header text-pri"
                            }, e.name), l.default.createElement("div", {
                                className: "dialerSuggestion__detail text-sec"
                            }, e.type, " ", t.formatMatchedNum(e.number))))
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return l.default.createElement("ul", {
                            className: "dialerSuggestions",
                            onKeyDown: this.onKeyDown,
                            ref: function(t) {
                                e.element = t
                            }
                        }, this.suggestionsHtml())
                    }
                }]), t
            }(f.default);
        w.defaultProps = {
            dial: null,
            exitSuggestions: null,
            suggestions: null
        }, w.propTypes = {
            dial: l.default.PropTypes.func,
            exitSuggestions: l.default.PropTypes.func,
            suggestions: l.default.PropTypes.arrayOf(l.default.PropTypes.object)
        }, t.default = w
    },
    201: function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = t.EVENT_TYPES = {
                APP_POSITION: "app_position"
            },
            a = "eventlogger_event",
            r = function() {
                function e() {
                    n(this, e), this.dataStore = null
                }
                return i(e, [{
                    key: "log",
                    value: function(e) {
                        if (e && e.type) switch (e.type) {
                            case o.APP_POSITION:
                                this.write({
                                    event_type: o.APP_POSITION,
                                    starting_position: e.starting_position,
                                    end_position: e.end_position,
                                    app_id: e.app_id,
                                    app_version: e.app_version
                                })
                        }
                    }
                }, {
                    key: "write",
                    value: function(e) {
                        return this.getStore().then(function(t) {
                            return t.add(e)
                        })
                    }
                }, {
                    key: "getStore",
                    value: function() {
                        var e = this;
                        return this.dataStore ? Promise.resolve(this.dataStore) : new Promise(function(t, n) {
                            return navigator.getDataStores ? void navigator.getDataStores(a).then(function(i) {
                                return i.length < 1 ? void n("EventLogger: Cannot get access to the DataStore:", a) : (e.dataStore = i[0], void t(e.dataStore))
                            }, n) : void n("EventLogger: DataStore API is not available.")
                        })
                    }
                }]), e
            }();
        t.eventLogger = new r
    },
    202: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(29),
            l = o(u),
            c = n(14),
            f = i(c),
            d = function(e) {
                function t(e) {
                    a(this, t);
                    var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "GridHelper", f.isLandscape ? n.grid = {
                        row: 2,
                        col: 4
                    } : n.grid = {
                        row: 3,
                        col: 3
                    }, n.emit("change", n.grid), n
                }
                return s(t, e), t
            }(l.default);
        t.default = new d
    },
    203: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(4),
            l = i(u),
            c = n(7),
            f = i(c),
            d = n(17),
            p = i(d),
            h = n(196),
            m = i(h),
            y = n(5),
            v = i(y),
            g = n(60),
            b = i(g),
            w = n(208),
            k = i(w),
            _ = n(62),
            S = i(_);
        n(222);
        var O = function(e) {
            function t(e) {
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "MainView", n.onKeyDown = function(e) {
                    if (!v.default.query("LaunchStore.isLaunching") && v.default.query("AppList.ready")) {
                        var t = e.key;
                        if (!n._longPressTimer) {
                            switch (n.keydownRecords.set(t, Date.now()), t) {
                                case "Call":
                                    S.default.launch("manifestURL", "app://communications.gaiamobile.org/manifest.webapp");
                                    break;
                                case "SoftLeft":
                                    S.default.launch("iac", "notice");
                                    break;
                                case "SoftRight":
                                    S.default.launch("manifestURL", "app://contact.gaiamobile.org/manifest.webapp");
                                    break;
								case "ArrowRight":
								    S.default.launch("origin", "app://search.gaiamobile.org");
                                    break;
								case "ArrowDown":
								    S.default.launch("origin", "app://video.gaiamobile.org");
                                    break;
                                case "ArrowLeft":
                                    v.default.request("openSheet", "sidemenu")
                            }
                            n._shortLongPressTimer = setTimeout(function() {
                                switch (n.clearShortLongPressTimer(), n._shortLongPressActionTriggered = !0, t) {
                                    case "EndCall":
                                    case "BrowserBack":
                                    case "Backspace":
                                        if ("Backspace" === t && n.hasEndCallKey || !document.hasFocus()) return;
                                        S.default.launch("iac", "launcher-panel", {
                                            target: "sleep-menu"
                                        });
                                        break;
                                    default:
                                        n._shortLongPressActionTriggered = !1
                                }
                            }, n.shortPressDuration), n._longPressTimer = setTimeout(function() {
                                switch (n.clearLongPressTimer(), n._longPressActionTriggered = !0, t) {
                                    case "ArrowUp":
                                        k.default.toggle();
                                        break;
                                    case "ArrowDown":
                                        localStorage.removeItem("tutorial-has-viewed"), location.reload();
                                        break;
                                    case "Enter":
                                        new MozActivity({
                                            name: "voice-assistant",
                                            data: {
                                                from: "Homescreen"
                                            }
                                        });
                                        break;
                                    default:
                                        n._longPressActionTriggered = !1
                                }
                            }, n.longPressDuration)
                        }
                    }
                }, n.onKeyUp = function(e) {
                    var t = e.key;
                    if (n._longPressTimer && n._shortLongPressTimer && !v.default.query("LaunchStore.isLaunching") && v.default.query("AppList.ready")) {
                        if (n.clearShortLongPressTimer(), n.clearLongPressTimer(), n._shortLongPressActionTriggered) return void(n._shortLongPressActionTriggered = !1);
                        if (n._longPressActionTriggered) return void(n._longPressActionTriggered = !1);
                        switch (t) {
                            case "Enter":
                                if (!n.isValidKeyUp("Enter")) return;
                                v.default.request("openSheet", "appList");
                                break;
                            case "ArrowUp":
                                if (!n.isValidKeyUp("ArrowUp")) return;
                                S.default.launch("iac", "launcher-panel", {
                                    target: "instant-settings"
                                });
                                break;
                            case "Backspace":
                                S.default.isLaunching && (S.default.isLaunching = !1)
                        }
                    }
                }, n.isValidKeyUp = function(e) {
                    if (n.keydownRecords.get(e)) {
                        return Date.now() - n.keydownRecords.get(e) < n.longPressDuration
                    }
                    return !1
                }, n.setRef = function(e) {
                    n.element = e
                }, n.onBlur = function() {
                    n.element.classList.remove("is-focus"), n.element.classList.remove("to-force-display")
                }, n.onFocus = function() {
                    n.element.classList.add("is-focus")
                }, n.keydownRecords = new Map, n.shortPressDuration = 500, n.longPressDuration = 1500, window.addEventListener("visibilitychange", function() {
                    document.hidden && (n._shortLongPressActionTriggered = !1, n._longPressActionTriggered = !1)
                }), navigator.hasFeature("device.capability.endcall-key").then(function(e) {
                    n.hasEndCallKey = !!e
                }), n
            }
            return r(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    v.default.register("show", this), v.default.register("hide", this), v.default.register("forcedRefresh", this), p.default.register({
                        left: "notifications",
                        center: "icon=all-apps",
                        right: "contacts"
                    }, this.element), b.default.register(this.element)
                }
            }, {
                key: "clearShortLongPressTimer",
                value: function() {
                    this._shortLongPressTimer && (clearTimeout(this._shortLongPressTimer), this._shortLongPressTimer = null)
                }
            }, {
                key: "clearLongPressTimer",
                value: function() {
                    this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null)
                }
            }, {
                key: "show",
                value: function() {
                    this.element.classList.remove("hidden"), this.focus()
                }
            }, {
                key: "hide",
                value: function() {
                    this.element.classList.add("hidden")
                }
            }, {
                key: "forcedRefresh",
                value: function() {
                    this.element.classList.add("to-force-display"), p.default.register({
                        left: "notifications",
                        center: "icon=all-apps",
                        right: "contacts"
                    }, this.element)
                }
            }, {
                key: "focus",
                value: function() {
                    this.element.focus()
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        id: "main-view",
                        tabIndex: "-1",
                        onKeyDown: this.onKeyDown,
                        onKeyUp: this.onKeyUp,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        ref: this.setRef
                    }, l.default.createElement(m.default, null))
                }
            }]), t
        }(f.default);
        O.defaultProps = {
            open: null,
            close: null
        }, O.propTypes = {
            open: l.default.PropTypes.func,
            close: l.default.PropTypes.func
        }, t.default = O
    },
    204: function(e, t) {
        "use strict";

        function n(e) {
            var t = this,
                n = t[e],
                a = navigator.mozL10n.language.code || "",
                r = t.default_locale || "";
            return a in navigator.mozL10n.qps && ("name" === e || "description" === e || "short_name" === e) ? n = navigator.mozL10n.qps[navigator.language].translate(n) : t.locales && [a, a.substr(0, a.indexOf("-")), r, r.substr(0, a.indexOf("-"))].some(function(t) {
                return !(!this[t] || !this[t][e]) && (n = this[t][e], !0)
            }, t.locales), "object" !== ("undefined" == typeof n ? "undefined" : o(n)) || n instanceof Array || (n = new i(n)), n
        }

        function i(e) {
            for (var t in e) Object.defineProperty(this, t, {
                get: n.bind(e, t),
                enumerable: !0
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(i.prototype, "displayName", {
            get: function() {
                return this.short_name || this.name
            }
        }), t.default = i
    },
    205: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e) {
            return d.default.createElement("div", {
                tabIndex: "-1",
                role: "menuitem",
                className: "sidemenuItem",
                "data-index": e.index,
                onClick: e.launch
            }, d.default.createElement("div", {
                className: "sidemenuItem__icon",
                style: {
                    backgroundImage: "url('" + e.icon_url + "')"
                }
            }), d.default.createElement("div", {
                className: "sidemenuItem__name"
            }, (0, k.unescapeNumericHTMLEntities)(e.displayName)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            f = n(4),
            d = i(f),
            p = n(7),
            h = i(p),
            m = n(17),
            y = i(m),
            v = n(5),
            g = i(v),
            b = n(59),
            w = i(b),
            k = n(107);
        n(215);
        var _ = function(e) {
            function t(e) {
                a(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.name = "Sidemenu", n.ready = !1, n.isActive = !1, n.items = [
                    ["origin", "app://kaios-plus.kaiostech.com"],
                    ["manifestURL", "https://api.kai.jiophone.net/v2.0/apps/manifest/kgWYOwr3NFoduxfdnwmi"],
                    ["manifestURL", "https://api.kai.jiophone.net/v2.0/apps/manifest/ahLsl7Qj6mqlNCaEdKXv"],
					["origin", "app://jiotv.jio.com"],
					["manifestURL", "app://camera.gaiamobile.org/manifest.webapp"],
					["origin", "app://settings.gaiamobile.org"],
					["manifestURL", "app://jiohots.jio.com/manifest.webapp"],
                    ["origin", "app://omnisd.831337.xyz"],
				    ["origin", "app://jiovideocall.jio.com"],
                    ["origin", "app://jioxpressnews.jio.com"],
                    ["origin", "app://myjio.jio.com"],
                    ["origin", "app://m.facebook.com"],
                    ["origin", "app://filemanager.gaiamobile.org"],
					["origin", "app://launcher.gaiamobile.org"],
					["manifestURL", "app://NewCustomLauncher123/manifest.webapp"],
                    ["manifestURL", "app://jiotool.indian/manifest.webapp"],
					["origin", "app://bluetooth.gaiamobile.org"],
                    ["origin", "app://calendar.gaiamobile.org"],
                    ["origin", "app://callscreen.gaiamobile.org"],
                    ["origin", "app://clock.gaiamobile.org"],
                    ["origin", "app://communications.gaiamobile.org"],
                    ["origin", "app://contact.gaiamobile.org"],
                    ["origin", "app://download.gaiamobile.org"],
                    ["origin", "app://emergency-call.gaiamobile.org"],
                    ["origin", "app://fm.gaiamobile.org"],
                    ["origin", "app://gallery.gaiamobile.org"],
                    ["origin", "app://keyboard.gaiamobile.org"],
                    ["origin", "app://music.gaiamobile.org"],
                    ["origin", "app://network-alerts.gaiamobile.org"],
                    ["origin", "app://ringtones.gaiamobile.org"],
                    ["origin", "app://search.gaiamobile.org"],
                    ["origin", "app://sms.gaiamobile.org"],
                    ["origin", "app://video.gaiamobile.org"],
                    ["origin", "app://calculator.gaiamobile.org"],
                    ["origin", "app://mmitest.gaiamobile.org"],
                    ["origin", "app://engmode.gaiamobile.org"],
                    ["origin", "app://logmanager.gaiamobile.org"],
                    ["origin", "app://unitconverter.gaiamobile.org"],
                    ["origin", "app://notes.gaiamobile.org"],
                    ["origin", "app://jiomessaging.jio.com"],
                    ["origin", "app://jiocinema.jio.com"],
                    ["origin", "app://diagnostics.jio.com"],
                    ["origin", "app://jiogames.jio.com"],
                    ["origin", "app://assistant.google.com"],
                    ["origin", "app://jiomusic.jio.com"],
                    ["origin", "app://jiopay.jio.com"],
                    ["origin", "app://jioservice.jio.com"],
                    ["origin", "app://jiomessages.rjil.com"],
                    ["origin", "app://{7457231a-6735-42b1-993b-c3990178c2a8}"],
                    ["origin", "app://{0a6d744e-4e89-4dd3-8af7-ceaa981ab141}"],
                    ["origin", "app://{0ea9a7ce-bfd9-4b90-baad-7055fc05d9c1}"]
                ], n.generateItems = function() {
                    var e = n.items.map(function(e) {
                        return w.default.queryApp.apply(w.default, o(e))
                    }).filter(Boolean);
                    n.setState({
                        items: e
                    }), n.iniFocusIndex = ~~(e.length / 2), n.maxIndex = e.length - 1, n.sidemenuItems = n.element.querySelectorAll(".sidemenuItem"), n.ready = !0
                }, n.onKeyDown = function(e) {
                    if (n.ready) {
                        switch (e.key) {
                            case "Enter":
                                document.activeElement.click(), requestAnimationFrame(function() {
                                    n.exit(), g.default.request("MainView:forcedRefresh")
                                });
                                break;
                            case "ArrowDown":
                                n.focusItem(Math.min(n.maxIndex, n.state.currentIndex + 1));
                                break;
                            case "ArrowUp":
                                n.focusItem(Math.max(0, n.state.currentIndex - 1));
                                break;
                            case "ArrowRight":
                            case "Backspace":
                            case "EndCall":
                                n.exit()
                        }
                    }
                }, n.setRef = function(e) {
                    n.element = e
                }, window.Sidemenu = n, n.state = {
                    items: [],
                    currentIndex: 0
                }, w.default.on("change", n.generateItems), n
            }
            return s(t, e), c(t, [{
                key: "componentDidMount",
                value: function() {
                    g.default.register("focus", this), y.default.register({
                        left: "",
                        center: "select",
                        right: ""
                    }, this.element)
                }
            }, {
                key: "focusItem",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.iniFocusIndex;
                    this.setState({
                        currentIndex: e
                    }), this.sidemenuItems[e] && this.sidemenuItems[e].focus()
                }
            }, {
                key: "focus",
                value: function() {
                    this.sidemenuItems ? this.focusItem() : this.element.focus(), this.isActive = !0
                }
            }, {
                key: "exit",
                value: function() {
                    this.isActive = !1, g.default.request("closeSheet", "sidemenu")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return d.default.createElement("div", {
                        id: "Sidemenu",
                        className: "Sidemenu",
                        tabIndex: "-1",
                        onKeyDown: this.onKeyDown,
                        ref: this.setRef
                    }, this.state.items.map(function(t, n) {
                        return d.default.createElement(u, l({
                            key: t.uid,
                            index: n - e.state.currentIndex
                        }, t))
                    }))
                }
            }]), t
        }(h.default);
        t.default = _
    },
    206: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(7),
            l = i(u),
            c = n(104),
            f = i(c),
            d = n(25),
            p = i(d),
            h = function(e) {
                function t() {
                    var e, n, i, r;
                    o(this, t);
                    for (var s = arguments.length, u = Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                    return n = i = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.SIZE = 9, i.contacts = [], i.voicemailNumber = null, r = n, a(i, r)
                }
                return r(t, e), s(t, [{
                    key: "start",
                    value: function() {
                        this.fetch(), this.getCustomSpeedDials(), p.default.addObserver("ril.iccInfo.mbdn", this), navigator.mozContacts.addEventListener("speeddialchange", this.fetch.bind(this)), navigator.mozContacts.addEventListener("contactchange", this.fetch.bind(this))
                    }
                }, {
                    key: "_observe_ril.iccInfo.mbdn",
                    value: function(e) {
                        this["ril.iccInfo.mbdn"] = e, e = (Array.isArray(e) ? e[0] : e) || navigator.mozVoicemail && navigator.mozVoicemail.getNumber(0), this.voicemailNumber = e, this.contacts[0].tel = e, this.emit("changed")
                    }
                }, {
                    key: "getCustomSpeedDials",
                    value: function() {
                        var e = this;
                        p.default.get("custom.speeddials").then(function(t) {
                            t && (e.customSpeedDials = t, e.fillCustomSpeedDials(t), e.emit("changed"))
                        })
                    }
                }, {
                    key: "fillCustomSpeedDials",
                    value: function() {
                        var e = this;
                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(t) {
                            var n = parseInt(t.key, 10);
                            e.contacts[n - 1] = {
                                dial: n,
                                editable: !1,
                                tel: t.tel,
                                name: t.name,
                                id: "customsd"
                            }
                        })
                    }
                }, {
                    key: "fetch",
                    value: function() {
                        var e = this;
                        this.initData(), this.fillCustomSpeedDials(this.customSpeedDials), navigator.mozContacts.getSpeedDials().then(function(t) {
                            e.parse(t)
                        })
                    }
                }, {
                    key: "set",
                    value: function(e, t, n) {
                        navigator.mozContacts.setSpeedDial(e, t, n).onerror = function(e) {}
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        navigator.mozContacts.removeSpeedDial(e).onerror = function(e) {}
                    }
                }, {
                    key: "initData",
                    value: function() {
                        this.contacts = Array(this.SIZE).fill(null).map(function(e, t) {
                            return {
                                dial: t + 1,
                                editable: !0
                            }
                        }), Object.assign(this.contacts[0], {
                            tel: this.voicemailNumber,
                            editable: !1,
                            voicemail: !0,
                            name: "voicemail",
                            id: "voicemail"
                        })
                    }
                }, {
                    key: "parse",
                    value: function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return new Promise(function(n) {
                                    f.default.findById(e.contactId, function(i) {
                                        if (!(i instanceof window.mozContact)) return void n();
                                        var o = void 0;
                                        i.photo && i.photo.length && (o = window.URL.createObjectURL(i.photo[0]));
                                        var a = parseInt(e.speedDial, 10);
                                        Object.assign(t.contacts[a - 1], {
                                            id: e.contactId,
                                            name: i.name && i.name[0],
                                            photo: o,
                                            dial: a,
                                            tel: e.tel
                                        }), n()
                                    })
                                })
                            }, this);
                        Promise.all(n).then(function() {
                            t.emit("changed")
                        })
                    }
                }]), t
            }(l.default),
            m = new h;
        m.start(), t.default = m
    },
    207: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t, n) {
            return e ? e.includes(t) ? c.default.createElement("div", null, (0, v.insertBetween)(e.split(t), n)) : e : ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(4),
            c = i(l),
            f = n(7),
            d = i(f),
            p = n(17),
            h = i(p),
            m = n(5),
            y = i(m),
            v = n(14);
        n(216);
        var g = "tutorial-has-viewed",
            b = [{
                enabled: !0
            }, {
                enabled: !0
            }, {
                enabled: !1
            }, {
                enabled: !0
            }, {
                enabled: !0
            }],
            w = function(e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "Tutorial", n.onKeyDown = function(e) {
                        switch (e.key) {
                            case "SoftRight":
                                n.state.step < b.length && n.next();
                                break;
                            case "SoftLeft":
                                n.state.step < b.length && n.exit();
                                break;
                            case "Enter":
                                n.state.step === b.length && n.exit()
                        }
                    }, n.state = {
                        l10n: {},
                        hasViewed: "1" === localStorage.getItem(g),
                        step: 0
                    }, y.default.register("focus", n), y.default.registerState("hasViewed", n), navigator.mozL10n.ready(function() {
                        n.setState({
                            l10n: {
                                step1: (0, v.toL10n)("tutorial-for-side-menu-1"),
                                step2: (0, v.toL10n)("tutorial-for-instant-settings-1"),
                                step3: (0, v.toL10n)("tutorial-for-notices"),
                                step4: (0, v.toL10n)("tutorial-for-google-assistant-1"),
                                step5: (0, v.toL10n)("tutorial-for-voice-input-1")
                            }
                        })
                    }), n
                }
                return r(t, e), u(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.updateSoftKeys()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateSoftKeys()
                    }
                }, {
                    key: "updateSoftKeys",
                    value: function() {
                        var e = null;
                        e = this.state.step >= b.length ? {
                            left: "",
                            center: "ok",
                            right: ""
                        } : {
                            left: "skip",
                            center: "",
                            right: "next"
                        }, h.default.register(e, this.element)
                    }
                }, {
                    key: "focus",
                    value: function() {
                        this.element.focus(), this.setState({
                            step: 1
                        })
                    }
                }, {
                    key: "exit",
                    value: function() {
                        y.default.request("closeSheet", "tutorial"), this.setState({
                            hasViewed: !0,
                            step: 0
                        }), localStorage.setItem(g, "1"), y.default.unregister("focus", this), y.default.unregisterState("hasViewed", this)
                    }
                }, {
                    key: "next",
                    value: function() {
                        this.setState(function(e) {
                            return {
                                step: b.findIndex(function(t, n) {
                                    return n + 1 > e.step && t.enabled
                                }) + 1
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return c.default.createElement("div", {
                            id: "Tutorial",
                            className: "Tutorial",
                            tabIndex: "-1",
                            "data-has-viewed": this.state.hasViewed,
                            "data-step": this.state.step,
                            onKeyDown: this.onKeyDown,
                            ref: function(t) {
                                e.element = t
                            }
                        }, c.default.createElement("div", {
                            className: "Tutorial__step Tutorial__step--1"
                        }, c.default.createElement("div", {
                            className: "Tutorial__fingertip"
                        }), c.default.createElement("div", {
                            className: "Tutorial__text"
                        }, this.state.l10n.step1)), c.default.createElement("div", {
                            className: "Tutorial__step Tutorial__step--2"
                        }, c.default.createElement("div", {
                            className: "Tutorial__fingertip"
                        }), c.default.createElement("div", {
                            className: "Tutorial__text"
                        }, this.state.l10n.step2)), c.default.createElement("div", {
                            className: "Tutorial__step Tutorial__step--3"
                        }, c.default.createElement("div", {
                            className: "Tutorial__fingertip"
                        }), c.default.createElement("div", {
                            className: "Tutorial__text"
                        }, this.state.l10n.step3)), c.default.createElement("div", {
                            className: "Tutorial__step Tutorial__step--4"
                        }, c.default.createElement("div", {
                            className: "Tutorial__fingertip"
                        }), c.default.createElement("div", {
                            className: "Tutorial__text"
                        }, s(this.state.l10n.step4, "{{ microphone }}", c.default.createElement("i", {
                            "data-icon": "google-voice"
                        })))), c.default.createElement("div", {
                            className: "Tutorial__step Tutorial__step--5"
                        }, c.default.createElement("div", {
                            className: "Tutorial__fingertip"
                        }), c.default.createElement("div", {
                            className: "Tutorial__text"
                        }, s(this.state.l10n.step5, "{{ microphone }}", c.default.createElement("i", {
                            "data-icon": "google-voice"
                        })))))
                    }
                }, {
                    key: "hasViewed",
                    get: function() {
                        return this.state.hasViewed
                    }
                }]), t
            }(d.default);
        t.default = w
    },
    208: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            u = n(22),
            l = i(u),
            c = function(e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = "FlashlightHelper", n.init = function(e) {
                        e.addEventListener("flashlightchange", n), n.flashlightManager = e, n.emit("ready", e.flashlightEnabled)
                    }, navigator.getFlashlightManager && navigator.hasFeature && navigator.hasFeature("device.capability.torch").then(function(e) {
                        n.capability = e, navigator.getFlashlightManager().then(n.init)
                    }), n
                }
                return r(t, e), s(t, [{
                    key: "_handle_flashlightchange",
                    value: function() {
                        this.emit("change", this.flashlightManager.flashlightEnabled)
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.flashlightManager.flashlightEnabled = !this.flashlightManager.flashlightEnabled
                    }
                }]), t
            }(l.default);
        t.default = new c
    },
    210: 109,
    211: 109,
    215: 109,
    216: 109,
    217: 109,
    218: 109,
    219: 109,
    220: 109,
    222: 109,
    223: 109,
    227: function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }
});
//# sourceMappingURL=app.bundle.js.map