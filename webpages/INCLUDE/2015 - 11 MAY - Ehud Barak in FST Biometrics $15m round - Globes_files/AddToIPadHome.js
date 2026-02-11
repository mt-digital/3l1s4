function LoadJsCssFile(filename, filetype, sizes) {
    if (filetype == "js") {
        //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    } else if (filetype == "css") {
        //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    } else if (filetype == "apple") {
        //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "apple-touch-icon")
        if (sizes != "") {
            fileref.setAttribute("sizes", sizes)
        }
        fileref.setAttribute("href", filename)
    }

    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function AddMeta(name, content) {
    var meta = document.createElement('meta')

    meta.setAttribute("name", name);
    meta.setAttribute("content", content);

    document.getElementsByTagName("head")[0].appendChild(meta);
}

if (navigator.userAgent.match(/iPad/i) != null) {
    LoadJsCssFile("apple", "/news/add2home/images/giphone.png", "");
    LoadJsCssFile("apple", "/news/add2home/images/gipad.png", "72x72");
    LoadJsCssFile("apple", "/news/add2home/images/giphone4.png", "114x114");

    AddMeta("apple-mobile-web-app-capable", "yes");
    AddMeta("apple-mobile-web-app-status-bar-style", "black");

    var addToHomeConfig = {
        animationIn: 'bubble',
        animationOut: 'drop',
        autostart: true,
        touchIcon: true,
        lifespan: 30000
    };

    document.write("<link rel=\"stylesheet\" href=\"/news/add2home/add2home.css\" />");
    document.write("<script type=\"application/javascript\" src=\"/news/add2home/add2home.js\" charset=\"utf-8\"><" + "/script>");
}