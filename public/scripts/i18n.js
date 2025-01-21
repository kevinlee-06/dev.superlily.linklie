const translations = {
    en: {
        "title": "Linklie - URL Shortener",
        "main-title": "Linklie - A URL Shortener",
        "create-title": "Create Short URL",
        "url-label": "URL:",
        "short-id-label": "Short ID:",
        "password-label": "Password:",
        "create-button": "Create Short URL",
        "delete-title": "Delete Short URL",
        "delete-id-label": "Short ID:",
        "delete-password-label": "Password:",
        "delete-button": "Delete Short URL",
        "response-title": "Response:",
        "response-tips": "[tips]",
        "theme-label": "Choose a theme:",
        "theme-orange": "Orange",
        "theme-green": "Green",
        "theme-blue": "Blue",
        "theme-pink": "Pink",
        "theme-dark": "Dark",
        "theme-black": "Black",
        "theme-tailwind": "Tailwind",
        "language-label": "語言：",
    },
    "zh-TW": {
        "title": "Linklie - 短網址",
        "main-title": "Linklie - 一個短網址工具",
        "create-title": "建立短網址",
        "url-label": "長網址：",
        "short-id-label": "自訂識別碼：",
        "password-label": "密碼：",
        "create-button": "建立短網址",
        "delete-title": "刪除短網址",
        "delete-id-label": "識別碼：",
        "delete-password-label": "密碼：",
        "delete-button": "刪除短網址",
        "response-title": "回應：",
        "response-tips": "[提示]",
        "theme-label": "選擇主題：",
        "theme-orange": "橙色",
        "theme-green": "綠色",
        "theme-blue": "藍色",
        "theme-pink": "粉色",
        "theme-dark": "深藍色",
        "theme-black": "黑色",
        "theme-tailwind": "Tailwind",
        "language-label": "Language:",
    }
};

const languageSelector = document.getElementById('language');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

function translatePage(lang) {
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});