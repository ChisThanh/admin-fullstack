import i18n from "@/i18n";
import { nextTick } from "vue";
import axios from "axios";
const Trans = {
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");
    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },
  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
    await axios.get(`/greeting/${newLocale}`);
  },
  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }
    return nextTick();
  },

  async routeMiddleware(to, _from, next) {
    const locale =
      Trans.getPersistedLocale() ?? import.meta.env.VITE_DEFAULT_LOCALE;
    if (locale && locale !== i18n.global.locale.value) {
      await Trans.switchLanguage(locale);
    }
    next();
  },
};
export default Trans;
