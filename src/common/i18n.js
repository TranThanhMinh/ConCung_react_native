import i18n from "i18next";

import { useTranslation, initReactI18next } from "react-i18next";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          'account.discount.code': 'Discount code',
          'home': 'Home',
          'category': 'Category',
          'promotion': 'Promotion',
          'shops': 'Shop Recently',
          'account': 'Account',
        }
      },
      vi: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          'account.discount.code': 'Mã giảm giá',
          'home': 'Trang chủ',
          'category': 'Danh mục',
          'promotion': 'Khuyến mãi',
          'shops': 'Shop gần đây',
          'account': 'Tài khoản',
        }
      }
    },
    lng: global.multilanguge, // if you're using a language detector, do not define the lng option
    fallbackLng: global.multilanguge,

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
export default i18n;
