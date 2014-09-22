(function () {
    function create_tab(url) {
        chrome.tabs.create({
            "url": url
        });
    }

    function build_url(lang, query) {
        var q = query.split(/\s+/).map(encodeURIComponent).join("+");
        var l = encodeURIComponent(lang);

        return "https://github.com/search?type=Code&utf8=%E2%9C%93&l="+l+"&q="+q;
    }

    window.addEventListener("load", function (e) {
        document.getElementById("submit-button").onclick = function () {
            var lang  = document.getElementById("lang-input").value;
            var query = document.getElementById("query-input").value;

            create_tab(build_url(lang, query));
        }

        var defaultLang = localStorage.defaultLang;

        if (defaultLang) {
            document.getElementById("lang-input").value = defaultLang;
        }
    });
})();

