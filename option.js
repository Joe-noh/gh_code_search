function save_default_lang(lang) {
    localStorage.defaultLang = lang;
}

document.getElementById("save-button").onclick = function (e) {
    var lang = document.getElementById("default-lang-input").value;

    save_default_lang(lang);
    e.preventDefault();
}
