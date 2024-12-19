import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to our website",
            description: "This is an English description.",
        },
    },
    az: {
        translation: {
            welcome: "Veb saytımıza xoş gəlmisiniz",
            description: "Bu, Azərbaycan dilində bir təsvir.",
        },
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, 
    },
});

export default i18n;
