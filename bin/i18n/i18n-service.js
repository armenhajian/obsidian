const geoip = require('geoip-lite');


const MESSAGE_MAP = {
    am : require('./bundles/am.site'),
    ru: require('./bundles/ru.site'),
    en: require('./bundles/en.site')
};

function I18nService () {
    return {
        createTranslator: createTranslator,
        languageCodeToPostfix: languageCodeToPostfix,
        isLanguageCode: isLanguageCode,
        getDefaultLanguageCode: getDefaultLanguageCode,
        getLetters: getLetters,
        getLanguageFromLetter: getLanguageFromLetter,
    };

    function createTranslator (locale) {
        const messages = MESSAGE_MAP[locale] || {};

        const fn = (messageKey, values) => {
            var message = messages[messageKey] || messageKey;
            if (!message.includes('%s')) {
                return message;
            } else {
                let i = 0;
                return message.replace(/%s/g, _ => values[i++]);
            }
        };
        fn.locale = locale;
        fn.fullLocale = locale === 'am' ? 'hy-AM': locale === 'ru' ? 'RU' : 'en-US';
        fn.lang = locale === 'am' ? 'ARM' : locale === 'ru' ? 'RUS' : 'ENG';
        return fn;
    }

    function languageCodeToPostfix(code) {
        const codeToPrefix = {
            am: '_ARM',
            ru: '_RUS',
            en: '_ENG'
        };
        return codeToPrefix[code] ? codeToPrefix[code] : '';
    }

    function isLanguageCode(code) {
        return ['am', 'ru', 'en'].includes(code);
    }

    function getDefaultLanguageCode(req) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (!ip) {
            return 'en';
        }
        const geo = geoip.lookup(ip);
        if (!geo || !geo.country) {
            return 'en';
        }
        if (geo.country === 'AM') {
            return 'am';
        }
        if (geo.country === 'RU') {
            return 'ru';
        }
        return 'en';

    }

    function getLetters() {
        return {
            en: ["[0-9]","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            ru: ["[0-9]","А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч", "Ш", "Щ", "Э", "Ю", "Я"],
            am: ["[0-9]","Ա","Բ","Գ","Դ","Ե","Զ","Է","Ը","Թ","Ժ","Ի","Լ","Խ","Ծ","Կ","Հ","Ձ","Ղ","Ճ","Մ","Յ","Ն","Շ","Ո","Չ","Պ","Ջ","Ռ","Ս","Վ","Տ","Ր","Ց","ՈՒ","Փ","Ք","Օ","Ֆ"],
        }
    }

    function getLanguageFromLetter(letter) {
        if (!letter) {
            return null;
        }
        const letters = getLetters();
        return Object.keys(letters).reduce((res, langCod) => {
            if (res) {
                return res;
            }
            if (letters[langCod].indexOf(letter) !== -1) {
                return languageCodeToPostfix(langCod).substr(1);
            }
            return null;
        }, null)
    }
}

module.exports = I18nService();
