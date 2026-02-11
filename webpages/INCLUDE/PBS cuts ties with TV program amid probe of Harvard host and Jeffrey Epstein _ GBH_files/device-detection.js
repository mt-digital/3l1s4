/**
 * Client-side Device Detection Module
 * Replicates the server-side GeoDevice detection logic
 */

class DeviceDetection {
    constructor(config) {
        this.apiUrl = config.geoDeviceUrl;
        this.timeout = config.timeout || 5000; // 5 second timeout
    }

    // Decodes compact DeviceAtlas payload from 'da' into a JSON string using the same method from the other solution
    expandDeviceAtlasServerPropsFromModulus(inval) {
        try {
            if (inval === '' || !inval) {
                return '';
            }

            const DEVICE_ATLAS_SERVER_PROPS_MAP = this.getDeviceAtlasServerPropsMap();
            const DEVICE_ATLAS_SERVER_PROPS_ARR = this.getDeviceAtlasServerPropsArr();

            let outval = '{"' + inval.split('zzzz').join('"') + '"}';

            outval = outval.split('~').join('|#');
            outval = outval.split('*').join('|@');

            outval = outval.split('|').join('":"');
            outval = outval.split('$').join('":');
            outval = outval.split('@').join('_","');
            outval = outval.split('#').join('-","');
            outval = outval.split('%').join('","');
            outval = outval.split('^').join(',"');

            outval = outval.split('aaaa').join('~');
            outval = outval.split('bbbb').join('*');
            outval = outval.split('cccc').join('|');
            outval = outval.split('dddd').join('$');
            outval = outval.split('eeee').join('@');
            outval = outval.split('ffff').join('#');
            outval = outval.split('gggg').join('%');
            outval = outval.split('hhhh').join('^');

            outval = outval.split(':"-"').join(':false');
            outval = outval.split(':"_"').join(':true');

            for (let i = 0; i < DEVICE_ATLAS_SERVER_PROPS_ARR.length; i++) {
                const prop = DEVICE_ATLAS_SERVER_PROPS_ARR[i];
                if (Object.prototype.hasOwnProperty.call(DEVICE_ATLAS_SERVER_PROPS_MAP, prop)) {
                    if (outval.indexOf(',"' + prop + '":') >= 0) {
                        outval = outval.replace(',"' + prop + '":', ',"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":');
                    } else if (outval.indexOf('{"' + prop + '":') >= 0) {
                        outval = outval.replace('{"' + prop + '":', '{"' + DEVICE_ATLAS_SERVER_PROPS_MAP[prop] + '":');
                    }
                }
            }

            const invalidNumericAtEndRegex = /:(\d+)"\}$/;
            if (invalidNumericAtEndRegex.test(outval)) {
                outval = outval.replace(invalidNumericAtEndRegex, ':$1}');
            }
            return outval;
        } catch (err) {
            return inval;
        }
    }

    // Map of obfuscated keys to readable keys (ported from upstream solution)
    getDeviceAtlasServerPropsMap() {
        const x = {};

        x.ea = 'bjs.webGl';
        x.eb = 'bjs.geoLocation';
        x.ec = 'bjs.webSqlDatabase';
        x.ed = 'bjs.indexedDB';
        x.ef = 'bjs.webSockets';
        x.eg = 'bjs.localStorage';
        x.eh = 'bjs.sessionStorage';
        x.ei = 'bjs.webWorkers';
        x.ej = 'bjs.applicationCache';
        x.ek = 'bjs.supportBasicJavaScript';
        x.el = 'bjs.modifyDom';
        x.em = 'bjs.modifyCss';
        x.en = 'bjs.supportEvents';
        x.eo = 'bjs.touchEvents';
        x.ep = 'bjs.supportEventListener';
        x.eq = 'bjs.xhr';
        x.er = 'bjs.supportConsoleLog';
        x.es = 'bjs.json';
        x.et = 'bjs.deviceOrientation';
        x.eu = 'bjs.deviceMotion';
        x.ev = 'bjs.querySelector';
        x.ew = 'bjs.battery';
        x.ex = 'bjs.accessDom';

        x.fa = 'bhtml.canvas';
        x.fb = 'bhtml.video';
        x.fc = 'bhtml.audio';
        x.fd = 'bhtml.svg';
        x.fe = 'bhtml.inlinesvg';

        x.ga = 'bcss.animations';
        x.gb = 'bcss.columns';
        x.gc = 'bcss.transforms';
        x.ge = 'bcss.transitions';

        x.ba = 'js.webSockets';
        x.bb = 'js.deviceMotion';
        x.bd = 'js.applicationCache';
        x.bg = 'js.xhr';
        x.bi = 'js.deviceOrientation';
        x.bl = 'js.webWorkers';
        x.bm = 'js.querySelector';
        x.bp = 'js.json';
        x.bs = 'js.supportEventListener';
        x.bz = 'js.localStorage';
        x.cd = 'js.supportEvents';
        x.cl = 'js.touchEvents';
        x.ci = 'js.geoLocation';
        x.cr = 'js.webGl';
        x.cx = 'js.indexedDB';
        x.db = 'js.modifyCss';
        x.dc = 'js.webSqlDatabase';
        x.dg = 'js.sessionStorage';
        x.dh = 'js.supportConsoleLog';
        x.dq = 'js.modifyDom';
        x.ds = 'js.supportBasicJavaScript';
        x.dt = 'js.battery';
        x.du = 'js.accessDom';

        x.ck = 'html.svg';
        x.cn = 'html.inlinesvg';
        x.ch = 'html.video';
        x.bt = 'html.audio';
        x.df = 'html.canvas';

        x.dd = 'css.transforms';
        x.de = 'css.columns';
        x.bc = 'css.animations';
        x.bq = 'css.transitions';

        x.bu = 'image.Jpg';
        x.cc = 'image.Gif87';
        x.ce = 'image.Png';
        x.cu = 'image.Gif89a';
        x.ca = 'markup.xhtmlMp10';
        x.bw = 'markup.wml1';
        x.cm = 'markup.xhtmlBasic10';
        x.cy = 'markup.xhtmlMp12';
        x.cz = 'markup.xhtmlMp11';

        x.ha = 'iorientation';
        x.hb = 'idisplayColorDepth';
        x.hc = 'idevicePixelRatio';

        x.ia = 'bcookieSupport';
        x.ib = 'bflashCapable';
        x.ic = 'baccessDom';
        x.ie = 'buserMedia';

        x.ja = 'sdeviceAspectRatio';
        x.jb = 'sdevicePixelRatio';

        x.aa = 'touchScreen';
        x.ab = 'isBrowser';
        x.ac = 'isMobilePhone';
        x.ad = 'primaryHardwareType';
        x.ae = 'isFilter';
        x.af = 'mobileDevice';
        x.ag = 'isSpam';
        x.ah = 'isGamesConsole';
        x.ai = 'isMasqueradingAsDesktop';
        x.aj = 'botName';
        x.ak = 'marketingName';
        x.al = 'manufacturer';
        x.am = 'yearReleased';
        x.an = 'displayWidth';
        x.ao = 'displayHeight';
        x.ap = 'diagonalScreenSize';
        x.aq = 'displayPpi';
        x.ar = 'devicePixelRatio';
        x.as = 'displayColorDepth';
        x.at = 'nfc';
        x.au = 'camera';
        x.av = 'osProprietary';
        x.aw = 'developerPlatform';
        x.ax = 'developerPlatformVersion';
        x.ay = 'language';
        x.az = 'languageLocale';
        x.be = 'jsr139';
        x.bf = 'jqm';
        x.bh = 'uriSchemeSms';
        x.bj = 'id';
        x.bk = 'https';
        x.bn = 'umts';
        x.bo = 'usableDisplayWidth';
        x.br = 'supportsClientSide';
        x.bv = 'isSpam';
        x.bx = 'jsr118';
        x.by = 'hspaEvolved';
        x.cb = 'uriSchemeTel';
        x.cf = 'jsr37';
        x.cg = 'jsr30';
        x.cj = 'flashCapable';
        x.co = 'hsdpa';
        x.cp = 'memoryLimitMarkup';
        x.cq = 'memoryLimitDownload';
        x.cs = 'edge';
        x.ct = 'vCardDownload';
        x.cv = 'drmOmaCombinedDelivery';
        x.cw = 'usableDisplayHeight';
        x.da = 'drmOmaSeparateDelivery';
        x.di = 'gprs';
        x.dj = 'lteAdvanced';
        x.dk = 'lte';
        x.dl = 'memoryLimitEmbeddedMedia';
        x.dm = 'hscsd';
        x.dn = 'cookieSupport';
        x.do = 'uriSchemeSmsTo';
        x.dp = 'csd';
        x.dr = 'drmOmaForwardLock';
        x.dv = 'accessDom';
        x.dw = 'userMedia';
        x.dx = 'orientation';

        x.a = 'isRobot';
        x.b = 'osRim';
        x.c = 'isDownloader';
        x.d = 'osWindowsRt';
        x.e = 'isEReader';
        x.f = 'osWindowsMobile';
        x.g = 'isTablet';
        x.h = 'osVersion';
        x.i = 'osWindowsPhone';
        x.j = 'isFeedReader';
        x.k = 'vendor';
        x.l = 'osSymbian';
        x.m = 'browserVersion';
        x.n = 'browserName';
        x.o = 'model';
        x.p = 'isChecker';
        x.q = 'osiOs';
        x.r = 'osBada';
        x.s = 'isTV';
        x.t = 'osWebOs';
        x.u = 'isMediaPlayer';
        x.v = 'osAndroid';
        x.w = 'isSetTopBox';
        x.x = 'isApp';
        x.y = 'osName';
        x.z = 'browserRenderingEngine';

        return x;
    }

    // Static list of all short keys (ported)
    getDeviceAtlasServerPropsArr() {
        return ['ea','eb','ec','ed','ef','eg','eh','ei','ej','ek','el','em','en','eo','ep','eq','er','es','et','eu','ev','ew','ex','fa','fb','fc','fd','fe','ga','gb','gc','ge','ba','bb','bd','bg','bi','bl','bm','bp','bs','bz','cd','cl','ci','cr','cx','db','dc','dg','dh','dq','ds','dt','du','ck','cn','ch','bt','df','dd','de','bc','bq','bu','cc','ce','cu','ca','bw','cm','cy','cz','ha','hb','hc','ia','ib','ic','ie','ja','jb','aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az','be','bf','bh','bj','bk','bn','bo','br','bv','bx','by','cb','cf','cg','cj','co','cp','cq','cs','ct','cv','cw','da','di','dj','dk','dl','dm','dn','do','dp','dr','dv','dw','dx','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }

    /**
     * Get device information using external API with fallback to user agent detection
     */
    async getDeviceInfo() {
        try {
            // Try external API first
            const geoDeviceData = await this.callGeoDeviceAPI();
            if (geoDeviceData && !geoDeviceData.error) {
                return this.parseGeoDeviceResponse(geoDeviceData);
            }
        } catch (error) {
            console.warn('GeoDevice API failed, falling back to user agent detection:', error);
        }

        // Fallback to user agent detection
        return this.getUserAgentDeviceType();
    }

    /**
     * Call the external GeoDevice API
     */
    async callGeoDeviceAPI() {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const headers = this.getNormalizedHeaders();
            const clientIP = await this.getClientIP();

            const formData = new FormData();

            const actualUA = navigator.userAgent || '';
            let uaForApi = actualUA;
            try {
                const qs = (typeof window !== 'undefined' && window.location && window.location.search) ? window.location.search : '';
                const params = new URLSearchParams(qs);
                const isUaTest = params.get('ua_simulator_test') === '1';
                if (isUaTest) {
                    uaForApi = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1';
                }
            } catch (e) { }
            formData.append('UserAgent', uaForApi);
            formData.append('IPAddress', clientIP);
            formData.append('ClientHeaders', JSON.stringify(headers));

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                body: formData,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`API responded with status: ${response.status}`);
            }

            const responseText = await response.text();
            if (!responseText.startsWith('{')) {
                throw new Error('Invalid JSON response from API');
            }

            return JSON.parse(responseText);
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    /**
     * Parse the GeoDevice API response similar to server-side logic
     */
    parseGeoDeviceResponse(geoDevice) {
        const result = {
            deviceType: 'desktop',
            isMobilePhone: false,
            isTablet: false,
            geo: geoDevice.geo || {},
            device: geoDevice.da || {},
            source: 'geoapi'
        };

        try {
            // Parse from compact 'da' string (new payload)
            if (typeof geoDevice.da === 'string' && geoDevice.da.length > 0) {
                const raw = this.expandDeviceAtlasServerPropsFromModulus(geoDevice.da);
                let expandedObj = {};
                try { expandedObj = JSON.parse(raw); } catch (e) { expandedObj = {}; }

                const primaryHardwareType = expandedObj.primaryHardwareType;
                const isTablet = expandedObj.isTablet === true;
                const isMobilePhone = expandedObj.isMobilePhone === true;

                if (isMobilePhone || primaryHardwareType === 'Mobile Phone') {
                    result.deviceType = 'mobile';
                    result.isMobilePhone = true;
                } else if (isTablet || primaryHardwareType === 'Tablet') {
                    // match legacy behavior: keep desktop but flag tablet
                    result.deviceType = 'desktop';
                    result.isTablet = true;
                } else {
                    result.deviceType = 'desktop';
                }
            }
        } catch (error) {
            console.error('Error parsing geo device response:', error);
        }

        return result;
    }

    /**
     * Fallback user agent detection - replicates server-side GetDeviceTypeByUserAgent
     */
    getUserAgentDeviceType() {
        const ua = navigator.userAgent;
        
        if (!ua) {
            return {
                deviceType: 'desktop',
                isMobilePhone: false,
                isTablet: false,
                source: 'useragent_fallback'
            };
        }

        let deviceType = 'desktop';
        let isTablet = false;

        try {
            // Check if user agent is a Tablet
            if (/(iP(a|ro)d)/i.test(ua) || 
                (/tablet/i.test(ua) && !/RX-34/i.test(ua)) || 
                /FOLIO/i.test(ua)) {
                deviceType = 'tablet';
                isTablet = true;
            }
            // Check if user agent is an Android Tablet
            else if (/Linux/i.test(ua) && /Android/i.test(ua) && 
                     !/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i.test(ua)) {
                deviceType = 'tablet';
                isTablet = true;
            }
            // Check if user agent is a Kindle or Kindle Fire
            else if (/Kindle/i.test(ua) || (/Mac.OS/i.test(ua) && /Silk/i.test(ua))) {
                deviceType = 'tablet';
                isTablet = true;
            }
            // Check if user agent is a pre Android 3.0 Tablet
            else if (/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i.test(ua) || 
                     (/MB511/i.test(ua) && /RUTEM/i.test(ua))) {
                deviceType = 'tablet';
                isTablet = true;
            }
            // Check if user agent is unique Mobile User Agent
            else if (/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i.test(ua)) {
                deviceType = 'mobile';
            }
            // Check if user agent is an odd Opera User Agent
            else if (/Opera/i.test(ua) && /Windows.NT.5/i.test(ua) && 
                     /HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i.test(ua)) {
                deviceType = 'mobile';
            }
            // Check if user agent is Windows Desktop
            else if (/Windows.(NT|XP|ME|9)/.test(ua) && !/Phone/i.test(ua) || /Win(9|.9|NT)/i.test(ua)) {
                deviceType = 'desktop';
            }
            // Check if agent is Mac Desktop
            else if (/Macintosh|PowerPC/i.test(ua) && !/Silk/i.test(ua)) {
                deviceType = 'desktop';
            }
            else {
                // Final fallback - use detectmobilebrowsers.com regex
                const mobileRegex1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
                const mobileRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

                if (mobileRegex1.test(ua) || (ua.length >= 4 && mobileRegex2.test(ua.substr(0, 4)))) {
                    deviceType = 'mobile';
                }
            }
        } catch (error) {
            console.error('Error in user agent detection:', error);
            deviceType = 'desktop';
        }

        return {
            deviceType: deviceType,
            isMobilePhone: deviceType === 'mobile',
            isTablet: isTablet,
            source: 'useragent'
        };
    }

    /**
     * Get normalized headers similar to server-side DeviceAtlas
     */
    getNormalizedHeaders() {
        const headers = {};
        
        // Add available headers
        if (navigator.userAgent) {
            headers['user-agent'] = navigator.userAgent;
        }
        
        // Add other available browser info
        if (navigator.language) {
            headers['accept-language'] = navigator.language;
        }
        
        if (screen) {
            headers['screen-width'] = screen.width?.toString();
            headers['screen-height'] = screen.height?.toString();
        }

        return headers;
    }

    /**
     * Get client IP address (best effort)
     */
    async getClientIP() {
        try {
            // Try to get IP from various services
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            // Fallback - return empty string, server can handle it
            return '';
        }
    }

    /**
     * Set device detection results to DOM/ViewBag equivalent
     */
    setDeviceInfo(deviceInfo) {
        // Set CSS classes for styling
        document.body.classList.remove('device-mobile', 'device-desktop', 'device-tablet');
        document.body.classList.add(`device-${deviceInfo.deviceType}`);
        
        if (deviceInfo.isMobilePhone) {
            document.body.classList.add('device-mobile-phone');
        }
        
        if (deviceInfo.isTablet) {
            document.body.classList.add('device-tablet');
        }

        // Set data attributes for easy access
        document.body.setAttribute('data-device-type', deviceInfo.deviceType);
        document.body.setAttribute('data-is-mobile-phone', deviceInfo.isMobilePhone.toString());
        document.body.setAttribute('data-is-tablet', deviceInfo.isTablet.toString());
        document.body.setAttribute('data-device-source', deviceInfo.source);

        // Store in global object for other scripts to access
        window.DeviceInfo = deviceInfo;    
    }
}

// Export for use
window.DeviceDetection = DeviceDetection;
