const env = {
    // Clone Firebase --------------------------------------------------------------->
    apiKey: "AIzaSyAZ_iL-1pKXUdRBHN0FCEUs6gyF_sXf6Lg",
    authDomain: "phisalerts.firebaseapp.com",
    projectId: "phisalerts",
    storageBucket: "phisalerts.appspot.com",
    messagingSenderId: "140449946242",
    appId: "1:140449946242:web:4cce32ce5c0f413350f29b",
    // Personal Firebase --------------------------------------------------------->
    // apiKey: "AIzaSyDvlKc4xdzaAHuyCH2amsCPMx6w-Fwy9ek",
    // authDomain: "web-armour.firebaseapp.com",
    // projectId: "web-armour",
    // storageBucket: "web-armour.appspot.com",
    // messagingSenderId: "913995731463",
    // appId: "1:913995731463:web:cca03f8987dce03277d0a2",
    parent_collection: "production",
    suppressed_url_expiry_hours: 4
};
const PHISHING_CONFIG = {
    CHECK_FORM: true,   
    WARN_TYPE: {
        PUNNY_URL: 1,
        PHISY_CONTENT: 2,
        BLACKLISTED_URL: 3
    },
    // duration for hiding the verification (or the verified badge) is set to 5 seconds.
    HIDE_VERIFICATION_DURATION: 5e3      
};
const firebaseConfig = {
        apiKey: env.apiKey,
        authDomain: env.authDomain,
        projectId: env.projectId,
        storageBucket: env.storageBucket,
        messagingSenderId: env.messagingSenderId,
        appId: env.appId
    },
    // Responsible for managing data-related operations, particularly interacting with Firebase.
    DataService = {
        app: null,
        events: [],
        onVersionBumpedCounter: 0,
        init: async function () {
            this.app = firebase.initializeApp(firebaseConfig), this.addEvents(), await this.getStaticData();
        },
        addEvents: function () {
            this.onVersionBumped();
        },
        on: function (t, e, a) {
            this.events.push({
                eventName: t,
                callback: e,
                scope: a
            });
        },
        // Saving suppressed URLs to the local storage using the Chrome Storage API - (key set if not present)
        saveSuppressedUrls: async function (t) {
            console.log("Save Supp Urls called");
            const e = await chrome.storage.local.get("static_data");
            void 0 !== e.static_data && (e.static_data.suppressedUrls = t), chrome.storage.local.set({
                static_data: e.static_data
            });
        },
        getSuppressedUrls: async function () {
            var t = await chrome.storage.local.get("static_data");
            return void 0 !== t.static_data ? t.static_data.suppressedUrls : [];
        },

        // Responsible for retrieving static data from Chrome's local storage.
        getStaticData: async function (n = false) {
            var i = this;
            return new Promise((a, t) => {
                chrome.storage.local.get("static_data", async function (t) {
                    let e = t.static_data;
                    void 0 !== e && true !== n || (i.whitelistedUrls = await i._fetchWhitelistedUrls(), i.bankUrls = await i._fetchBankUrls(), i.config = await i._fetchConfig(), e = {
                        bankUrls: i.bankUrls,
                        whitelistedUrls: i.whitelistedUrls,
                        config: i.config
                    }, chrome.storage.local.set({
                        static_data: e
                    })), a(e), console.log("Get Static Data Called"), console.table(e);
                });
            });
        },
        onVersionBumped: async function () {
            let t = null,
                n = this;
            (t = this.app.firestore()).collection(env.parent_collection).doc("version").onSnapshot(async t => {
                const e = n.events.find(t => "version_bumped" == t.eventName);
                var a;
                0 == this.onVersionBumpedCounter ? this.onVersionBumpedCounter = 1 : (a = await this.getStaticData(true), e && e.callback && e.scope && e.callback.apply(e.scope, [a]));
            });
        },
        getWhitelistedUrls: function () {
            return this.whitelistedUrls;
        },
        getBankUrls: function () {
            return this.bankUrls;
        },
        _fetchWhitelistedUrls: async function () {
            let t = null,
                e = (t = this.app.firestore(), []);
            return await t.collection(env.parent_collection).doc("whitelisted_urls").get().then(t => {
                e = t.data().data;
            }), e;
        },
        _fetchBankUrls: async function () {
            let t = null,
                e = (t = this.app.firestore(), []);
            return await t.collection(env.parent_collection).doc("bank_urls").get().then(t => {
                e = t.data().data;
            }), e;
        },
        _fetchConfig: async function () {
            let t = null,
                e = (t = this.app.firestore(), null);
            return await t.collection(env.parent_collection).doc("config").get().then(t => {
                e = t.data();
            }), e;
        },
        isBlackListed: async function (t) {
            let e = null,
                a = (e = this.app.firestore(), false);
            const n = await e.collection(env.parent_collection).doc("blacklisted_urls").collection("collection").where("url", "in", t);
            await n.get().then(t => {
                t.empty || (a = true);
            });
            return a;
        },
        logPhisyWarn: async function (t) {
            let e = null;
            await (e = this.app.firestore()).collection(env.parent_collection).doc("sites_logged").collection("collection").add(t).then(() => {
                console.log("Document successfully written!");
            }).catch(t => {
                console.error("Error writing document: ", t);
            });
        }
    };

    //Function Checks - Final Score 
    
const Util = {

    // Create a unique identifier string that can be used to uniquely identify objects or entities in a system.
    getGuid: function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + "-" + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + "-" + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + "-" + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + "-" + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) + Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    },

    // like chrome settings
    isSystemUrl: function (t) {
        for (var e = [/^chrome-extension:/, /^chrome:/], n = 0; n < e.length; n++)
            if (e[n].test(t)) return true;
        return false;
    },

    // domain like .in , .com
    getTopDomain: function () {
        for (var t, e = "weird_get_top_level_domain=cookie", n = document.location.hostname.split("."), r = n.length - 1; 0 <= r; r--)
            if (t = n.slice(r).join("."), document.cookie = e + ";domain=." + t + ";", -1 < document.cookie.indexOf(e)) return document.cookie = e.split("=")[0] + "=;domain=." + t + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;", t;
    },

    // \https://google.com - It will extract google
    extractHostname: function (t) {
        t = -1 < t.indexOf("://") ? t.split("/")[2] : t.split("/")[0];
        return t = (t = t.split(":")[0]).split("?")[0];
    },

    // extract like www. 
    extractDomain: function (t) {
        t = -1 < t.indexOf("://") ? t.split("/")[2] : t.split("/")[0];
        return t = (t = (t = -1 < t.indexOf("www.") ? t.split("www.")[1] : t).split(":")[0]).split("?")[0];
    },

    // URl is valid or not
    validUrl: function (t) {
        var e = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i"),
            n = this.isSystemUrl(t);
        return !!e.test(t) && !n;
    },


    isDomainIDN: function (t) {
        return t.startsWith("xn--") || t.startsWith("www.xn--") || isUnicode(t);
    },
    isPrivateIp: function (t) {
        return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^localhost$/.test(t) || /^$/.test(t) || /^about:blank$/.test(t);
    },
    isPageBlockedUrl: function (t) {
        for (var e = [/^chrome-extension:.*page_blocked.html#?$/, /^moz-extension:.*page_blocked.html#?$/], n = 0; n < e.length; n++)
            if (e[n].test(t)) return true;
        return false;
    },

    // ex emoji 

    isUnicode: function (t) {
        for (var e = 0, n = t.length; e < n; e++)
            if (255 < t.charCodeAt(e)) return true;
        return false;
    },

    // length check 
    getCleanUrl: function (t) {
        return t && 0 < t.length ? this.extractDomain(t) : t;
    },

    // 
    isUrlPunny: function (t) {
        if (!this.validUrl(t)) return false;
        if (t.includes("xn--", 0)) return true;
        for (var e = t.length, n = 0, r = 0; r < t.length; r++) "/" == t.charAt(r) && (n += 1), 3 == n && (e = r, r = t.length);
        var r = 0;
        for (r = 0; r < e; r++)
            if (127 < t.charCodeAt(r)) return true;
        for (r = 0; r < e; r++)
            if ("%" == t.charAt(r) && (48 <= t.charCodeAt(r + 1) && t.charCodeAt(r + 1) <= 57 || 65 <= t.charCodeAt(r + 1) && t.charCodeAt(r + 1) <= 70) && (48 <= t.charCodeAt(r + 1) && t.charCodeAt(r + 1) <= 57 || 65 <= t.charCodeAt(r + 1) && t.charCodeAt(r + 1) <= 70)) {
                var i = t.charAt(r + 1) + t.charAt(r + 2),
                    i = parseInt(i, 16);
                if (127 < i) return String.fromCharCode(i), true;
            }
        return false;
    }
};
const Notice = {
    noticeHtml: null,
    init: async function (e) {
        this.noticeHtml = await fetch(chrome.runtime.getURL("html/notice.html")).then(e => e.text()), this.verifiedHtml = await fetch(chrome.runtime.getURL("html/verified.html")).then(e => e.text()), await fetch(chrome.runtime.getURL("images/phishing_illustration.png")), await fetch(chrome.runtime.getURL("images/verified.png")), this.DataService = e;
    },
    onCloseClick: function (e) {
        this.hideMessage();
    },
    showVerified: function () {
        document.body.insertAdjacentHTML("beforeend", this.verifiedHtml);
        let e = document.getElementById("js-verified-illustration");
        e.src = chrome.runtime.getURL("images/verified.png"), setTimeout(function () {
            document.getElementById("verified-tpl").classList.add("animate"), setTimeout(function () {
                document.getElementById("verified-tpl").classList.remove("animate"), setTimeout(function () {
                    document.body.removeChild(document.getElementById("verified-tpl"));
                }, 800);
            }, PHISHING_CONFIG.HIDE_VERIFICATION_DURATION);
        }, 100);
    },
    showMessage: function (e) {
        if (this.hideMessage(), e) {
            document.body.insertAdjacentHTML("beforeend", this.noticeHtml);
            let e = document.getElementById("js-phishing-illustration");
            e.src = chrome.runtime.getURL("images/phishing_illustration.png");
            document.getElementById("js-phishdetector-close").addEventListener("click", this.onCloseClick.bind(this));
        }
    },
    hideMessage: function () {
        document.getElementById("notice-tpl") && (document.getElementById("js-phishdetector-close").removeEventListener("click", this.onCloseClick.bind(this)), document.body.removeChild(document.getElementById("notice-tpl")));
    },
    warnUser: function (e = PHISHING_CONFIG.WARN_TYPE.BLACKLISTED_URL) {
        switch (e) {
            case PHISHING_CONFIG.WARN_TYPE.PUNNY_URL:
                this.showMessage(true);
                break;
            case PHISHING_CONFIG.WARN_TYPE.PHISY_CONTENT:
            case PHISHING_CONFIG.WARN_TYPE.BLACKLISTED_URL:
                this.showMessage(true);
        }
        this.DataService.logPhisyWarn({
            currentDate: (new Date).toISOString(),
            url: location.href,
            type: e
        });
    }
};
const PhishDetector = {
    url: null,
    config: {
        suppressed_url_expiry_hours: env.suppressed_url_expiry_hours
    },
    init: async function () {
        await DataService.init(), await Notice.init(DataService), this.addEvents(), this.detect();
    },
    detect: async function () {
        if (this.setDefaults(), void 0 !== this.url) try {
            var e = await DataService.getStaticData(),
                t = (WhiteListUrls = e.whitelistedUrls, BanksList = e.bankUrls, this.config = e.config, await DataService.isBlackListed([location.href, location.origin])),
                i = this.isWhiteListed(this.url);
            if (t) return void Notice.warnUser();
            if (i) return void(await this.isUrlSuppressed(this.url) || (Notice.showVerified(), this.suppressFutureNotice(this.url)));
            var n = this.checkContentPhishy();
            n && Notice.warnUser(n.type);
        } catch (e) {
            console.log("Error in handing if the website is phisy or not");
        }
    },
    addEvents: function () {
        DataService.on("version_bumped", this.onVersionBumped, this);
    },
    onVersionBumped: function (e) {
        this.detect();
    },
    isUrlSuppressed: async function (t) {
        let i = await DataService.getSuppressedUrls(),
            n = void(i = i || []),
            s = 0;
        for (let e = 0; e < i.length; e++)
            if ((n = i[e]).url == t)
                if ((Date.now() - n.dt) / 1e3 / 60 / 60 > this.config.suppressed_url_expiry_hours) i.splice(e, 1), s = 1, e--;
                else if (!s) return await DataService.saveSuppressedUrls(i), true;
        return await DataService.saveSuppressedUrls(i), false;
    },
    suppressFutureNotice: async function (e) {
        let t = await DataService.getSuppressedUrls();
        (t = t || []).push({
            url: e,
            dt: Date.now()
        }), DataService.saveSuppressedUrls(t);
    },
    setDefaults: function () {
        this.url = this.readUrl(), this.pageContent = this.getPageContent();
    },
    checkContentPhishy: function (e) {
        void 0 === e && (e = this.url);
        let t = false,
            i = null;
        return !this.isWhiteListed(e) && (Util.isUrlPunny(e) && (console.log("Punny url"), i = PHISHING_CONFIG.WARN_TYPE.PUNNY_URL), this.arrMatchedBanks = this.getMatchingBanksByPageContent(this.pageContent, BanksList), 0 < this.arrMatchedBanks.length && (this.hasMatchingBankUrl(this.arrMatchedBanks, e) || (console.log("Phishy Content"), i = PHISHING_CONFIG.WARN_TYPE.PHISY_CONTENT)), null !== i && PHISHING_CONFIG.CHECK_FORM ? t = this.pageHasLoginForm() ? {
            type: i
        } : null : null !== i && (t = {
            type: i
        }), t);
    },
    pageHasLoginForm: function () {
        var e = document.querySelectorAll("input[type='password']"),
            t = document.querySelectorAll("input[name='password']");
        return 0 < e.length || 0 < t.length;
    },
    isWhiteListed(t) {
        var e = WhiteListUrls.find(e => -1 !== e.toLowerCase().search(t)),
            i = BanksList.find(e => -1 !== e.sites.toLowerCase().search(t));
        return void 0 !== e || void 0 !== i;
    },
    readUrl: function () {
        window.location.hostname;
        return Util.getTopDomain();
    },
    getPageContent: function () {
        return document.body.innerText.toLowerCase();
    },
    getMatchingBanksByPageContent: function (i, n) {
        let s = false,
            r = [];
        for (let t = 0; t < n.length; t++)
            if (n[t].keywords)
                if ("string" == typeof n[t].keywords)(s = this.searchContentByKeyword(i, n[t].keywords)) && (r.push({
                    bankIndex: t,
                    keywordIndex: 0,
                    bankData: n[t]
                }), s = false);
                else
                    for (let e = 0; e < n[t].keywords.length; e++)(s = this.searchContentByKeyword(i, n[t].keywords[e])) && (r.push({
                        bankIndex: t,
                        keywordIndex: e,
                        bankData: n[t]
                    }), s = false);
        return r;
    },
    searchContentByKeyword: function (e, t) {
        return !!(e && 0 < e.length) && -1 !== e.search(t.toLowerCase());
    },
    hasMatchingBankUrl: function (t, i) {
        var n;
        let s = null;
        for (let e = 0; e < t.length; e++)
            if (n = t[e].bankData, (s = n.sites) && 0 < s.length)
                if ("string" == typeof s) {
                    if (-1 !== s.search(i)) return true;
                } else
                    for (let e = 0; e < s.length; e++)
                        if (s[e] && -1 !== s[e].search(i)) return true;
        return false;
    }
};
if (window.navigator.onLine) try {
    PhishDetector.init();
} catch (e) {
    console.log("Error in PhishDetector");
}
