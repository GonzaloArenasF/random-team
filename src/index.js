import { setCustomComponents } from "./_components/customComponentsRegistration.js";
import { analytic } from "./_main/analytics.js";
import { CONSTANT } from "./_main/constants.js";
import { getI18nContent, applyI18n } from "./_main/i18n.js";
import { sessionStartedControl, routes } from "./_main/router.js";

sessionStartedControl(routes[0].pathname, false);

setCustomComponents();

applyI18n(() => {
  const landingI18n = getI18nContent('page', 'landing');

  document.head.innerHTML = document.head.innerHTML
    .replaceAll("{APP_VERSION}", CONSTANT.APP_VERSION)
    .replaceAll("{head-meta-description}", landingI18n.head.meta.description)
    .replaceAll("{head-meta-title}", landingI18n.head.meta.title)
    .replaceAll("{head-meta-keywords}", landingI18n.head.meta.keywords)
    .replaceAll("{head-title}", landingI18n.head.title);

  document.body.innerHTML = document.body.innerHTML
});


window.addEventListener("load", () => {
  analytic.logEvent.enterLandingPage();
});

