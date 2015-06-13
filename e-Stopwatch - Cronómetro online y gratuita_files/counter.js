var sc_width = screen.width;
var sc_height = screen.height;
var sc_referer = "" + document.referrer;
try {
    sc_referer = "" + parent.document.referrer
} catch (ex) {
    sc_referer = "" + document.referrer
}
var sc_unique = 0;
var sc_returning = 0;
var sc_returns = 0;
var sc_error = 0;
var sc_remove = 0;
var sc_cls = -1;
var sc_inv = 0;
var sc_os = "";
var sc_title = "";
var sc_url = "";
var sc_base_dir = "";
var sc_click_dir = "";
var sc_link_back_start = "";
var sc_link_back_end = "";
var sc_security_code = "";
var sc_http_url = "http";
var sc_host = "statcounter.com";
var sc_dc = "c";
var sc_alt_text = "StatCounter - Free Web Tracker and Counter";
var sc_counter_size = "";
var sc_prerendering = 0;
if (window.sc_invisible) {
    if (window.sc_invisible == 1) {
        sc_inv = 1
    }
}
if (window.sc_click_stat) {
    sc_cls = window.sc_click_stat
}
sc_doc_loc = '' + document.location;
myRE = new RegExp("^https", "i");
if (sc_doc_loc.match(myRE)) {
    sc_http_url = "https"
}
if (window.sc_local) {
    sc_base_dir = sc_local
} else {
    if (sc_cls == -1) {
        sc_cls = 1
    }
    sc_base_dir = sc_http_url + "://" + sc_dc + "." + sc_host + "/"
}
sc_click_dir = sc_base_dir;
if (window.sc_text) {
    sc_base_dir += "text.php?"
} else {
    sc_base_dir += "t.php?"
} if (window.sc_project) {
    if (sc_project == "4135125" || sc_project == "6169619" || sc_project == "6222332" || sc_project == "5106510" || sc_project == "6311399" || sc_project == "6320092" || sc_project == "5291656" || sc_project == "7324465" || sc_project == "6640020" || sc_project == "4629288" || sc_project == "1480088" || sc_project == "2447031") {
        if (Math.floor(Math.random() * 6) != 1) {
            sc_remove = 1
        }
    }
    sc_base_dir += "sc_project=" + sc_project
} else if (window.usr) {
    sc_base_dir += "usr=" + usr
} else {
    sc_error = 1
} if (window.sc_remove_link) {
    sc_link_back_start = "";
    sc_link_back_end = ""
} else {
    sc_link_back_start = "<a class=\"statcounter\" href=\"http://www." + sc_host + "\" target=\"_blank\">";
    sc_link_back_end = "<\/a>"
}
sc_date = new Date();
sc_time = sc_date.getTime();
sc_time_difference = 3600000;
sc_title = "" + document.title;
sc_url = "" + document.location;
sc_referer = sc_referer.substring(0, 600);
sc_title = sc_title.substring(0, 300);
sc_url = sc_url.substring(0, 300);
sc_referer = escape(sc_referer);
if (encodeURIComponent) {
    sc_title = encodeURIComponent(sc_title)
} else {
    sc_title = escape(sc_title)
}
sc_url = escape(sc_url);
if (window.sc_security) {
    sc_security_code = sc_security
}
if (sc_remove != 1) {
    if (document.webkitVisibilityState != "prerender") {
        sc_prerendering = 0
    } else {
        sc_prerendering = 1;
        document.addEventListener("webkitvisibilitychange", handleVisibilityChange, false)
    }
}
if (sc_script_num) {
    sc_script_num++
} else {
    var sc_script_num = 1
}
var sc_tracking_url = sc_base_dir + "&resolution=" + sc_width + "&h=" + sc_height + "&camefrom=" + sc_referer + "&u=" + sc_url + "&t=" + sc_title + "&java=1&security=" + sc_security_code + "&sc_random=" + Math.random() + "&sc_snum=" + sc_script_num;
var sc_clstr = "<span class=\"statcounter\">";
if (window.sc_counter_width && window.sc_counter_height) {
    sc_counter_size = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
}
if (window.sc_remove_alt) {
    sc_alt_text = ""
}
var sc_cltext = "\" alt=\"" + sc_alt_text + "\" border=\"0\"" + sc_counter_size + ">";
var sc_strout = sc_clstr + sc_link_back_start + "<img src=\"" + sc_tracking_url + "&p=" + sc_prerendering + sc_cltext + sc_link_back_end + "</span>";
if (sc_error == 1) {
    document.writeln("Code corrupted. Insert fresh copy.")
} else if (sc_remove == 1) {} else {
    sc_write_data()
}
function handleVisibilityChange(evt) {
    if (sc_prerendering == 1) {
        sc_prerendering = 2;
        sc_write_data()
    } else {
        return
    }
}
function sc_write_data() {
    if (sc_inv == 1 || sc_prerendering == 2) {
        if (window.sc_call) {
            sc_call++
        } else {
            sc_call = 1
        }
        eval("var sc_img" + sc_call + " = new Image();sc_img" + sc_call + ".src = \"" + sc_tracking_url + "&p=" + sc_prerendering + "&invisible=1\"")
    } else if (window.sc_text) {
        document.writeln('<scr' + 'ipt language="JavaScript"' + ' src=' + sc_tracking_url + "&p=" + sc_prerendering + "&text=" + sc_text + '></scr' + 'ipt>')
    } else {
        document.writeln(sc_strout)
    }
}
if (sc_cls > 0) {
    if (clickstat_done != 1) {
        var clickstat_done = 1;
        var clickstat_project = window.sc_project;
        var clickstat_security = window.sc_security_code;
        var dlext = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
        if (typeof (window.sc_download_type) == 'string') {
            dlext = window.sc_download_type
        }
        var ltype = "https?|ftp|telnet|ssh|ssl|mailto";
        var second = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
        var dl = new RegExp("\\.(" + dlext + ")$", "i");
        var lnk = new RegExp("^(" + ltype + "):", "i");
        var domsec = new RegExp("\^(" + second + ")$", "i");
        var host_name = location.host.replace(/^www\./i, "");
        var host_splitted = host_name.split(".");
        var domain = host_splitted.pop();
        var host_split = host_splitted.pop();
        if (domsec.test(host_split)) {
            domain = host_split + "." + domain;
            host_split = host_splitted.pop()
        }
        domain = host_split + "." + domain;
        var lnklocal_mask = "^https?:\/\/(.*)(" + domain + "|webcache.googleusercontent.com)";
        var lnklocal = new RegExp(lnklocal_mask, "i");
        if (document.getElementsByTagName) {
            var anchors = document.getElementsByTagName('a');
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                if (anchor.onmousedown) {
                    var original_click = anchor.onmousedown;
                    var s = original_click.toString().split("\n").join(" ");
                    var bs = s.indexOf('{');
                    var head = s.substr(0, bs);
                    var ps = head.indexOf('(');
                    var pe = head.indexOf(')');
                    var params = head.substring(ps + 1, pe);
                    var plist = params.split(",");
                    var body = s.substr(bs + 1, s.length - bs - 2);
                    var insert = "sc_clickstat_call(this,'" + sc_click_dir + "');";
                    var final_body = insert + body;
                    var ev_head = "new Function (";
                    var ev_params = "";
                    var ev_sep = "";
                    for (var sc_i = 0; sc_i < plist.length; sc_i++) {
                        ev_params = ev_sep + "'" + plist[sc_i] + "'";
                        ev_sep = ","
                    }
                    if (ev_sep == ",") {
                        ev_params += ","
                    }
                    var ev_foot = "final_body);";
                    var ev_final = ev_head + ev_params + ev_foot;
                    anchor.onmousedown = eval(ev_final)
                } else {
                    anchor.onmousedown = new Function("event", "sc_clickstat_call(this,'" + sc_click_dir + "');return true;")
                }
            }
        }
        function sc_none() {
            return
        }
        function sc_delay() {
            if (window.sc_click_stat) {
                var d = window.sc_click_stat
            } else {
                var d = 0
            }
            var n = new Date();
            var t = n.getTime() + d;
            while (n.getTime() < t) {
                var n = new Date()
            }
        }
        function sc_clickstat_call(adata, sc_click_dir) {
            if (adata) {
                var clickmode = 0;
                if (lnk.test(adata)) {
                    if ((lnklocal.test(adata))) {
                        if (dl.test(adata)) {
                            clickmode = 1
                        } else if (window.sc_exit_link_detect && new RegExp(sc_exit_link_detect, "i").test(adata)) {
                            clickmode = 2
                        } else if (sc_cls == 2) {
                            clickmode = 2
                        }
                    } else {
                        clickmode = 2
                    }
                }
                if (clickmode != 0) {
                    var sc_link = escape(adata);
                    if (sc_link.length > 0) {
                        var sc_req = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + sc_link + "&m=" + clickmode + "&u=" + sc_url + "&t=" + sc_title + "&rand=" + Math.random();
                        var sc_req_image = new Image();
                        sc_req_image.onload = sc_none;
                        sc_req_image.src = sc_req;
                        sc_delay()
                    }
                }
            }
        }
        var sc_gsyn_pattern = 'googlesyndication\.com|ypn-js\.overture\.com|ypn-js\.ysm\.yahoo\.com|googleads\.g\.doubleclick\.net';
        var sc_gsyn_pattern2 = '^aswift_[0-9]+$';
        var sc_px;
        var sc_py;

        function sc_adsense_click(sc_data) {
            if (sc_data.src.match(sc_gsyn_pattern)) {
                var sc_link = escape(sc_data.src)
            } else {
                var sc_link = escape("Google Adsense " + sc_data.width + "x" + sc_data.height)
            }
            var i = new Image();
            var sc_req = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + sc_link + "&m=2&u=" + sc_url + "&t=" + sc_title + "&rand=" + Math.random();
            i.src = sc_req;
            sc_delay()
        }
        function sc_adsense_init() {
            if (document.all && typeof window.opera == "undefined") {
                var el = document.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++) {
                    if (el[i].src.match(sc_gsyn_pattern) || el[i].id.match(sc_gsyn_pattern2)) {
                        el[i].onfocus = function () {
                            sc_adsense_click(this)
                        }
                    }
                }
            } else {
                if (typeof window.addEventListener != "undefined") {
                    window.addEventListener("unload", sc_exitpage, false);
                    window.addEventListener("mousemove", sc_getmouse, true)
                }
            }
        }
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('load', sc_adsense_init, false)
        } else {
            if (typeof document.addEventListener != 'undefined') {
                document.addEventListener('load', sc_adsense_init, false)
            } else {
                if (typeof window.attachEvent != 'undefined') {
                    window.attachEvent('onload', sc_adsense_init)
                } else {
                    if (typeof window.onload == 'function') {
                        var sc_existing = onload;
                        window.onload = function () {
                            sc_existing();
                            sc_adsense_init()
                        }
                    } else {
                        window.onload = sc_adsense_init
                    }
                }
            }
        }
        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                sc_px = e.pageX;
                sc_py = e.pageY
            } else {
                if (typeof e.clientX == "number") {
                    sc_px = e.clientX;
                    sc_py = e.clientY;
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        sc_px += document.body.scrollLeft;
                        sc_py += document.body.scrollTop
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            sc_px += document.documentElement.scrollLeft;
                            sc_py += document.documentElement.scrollTop
                        }
                    }
                }
            }
        }
        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return (y)
        }
        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return (x)
        }
        function sc_exitpage(e) {
            ad = document.getElementsByTagName("iframe");
            if (typeof sc_px == "undefined") {
                return
            }
            for (var i = 0; i < ad.length; i++) {
                var adLeft = sc_findx(ad[i]);
                var adTop = sc_findy(ad[i]);
                var adW = parseInt(adLeft) + parseInt(ad[i].width) + 15;
                var adH = parseInt(adTop) + parseInt(ad[i].height) + 10;
                var inFrameX = (sc_px > (adLeft - 10) && sc_px < adW);
                var inFrameY = (sc_py > (adTop - 10) && sc_py < adH);
                if (inFrameY && inFrameX) {
                    if (ad[i].src.match(sc_gsyn_pattern) || ad[i].id.match(sc_gsyn_pattern2)) {
                        sc_adsense_click(ad[i])
                    }
                }
            }
        }
    }
}