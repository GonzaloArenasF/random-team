import { setCustomComponents } from "./_components/customComponentsRegistration.js";
import { analytic } from "./_main/analytics.js";
import { CONSTANT } from "./_main/constants.js";
import { getI18nContent, applyI18n } from "./_main/i18n.js";
import { sessionStartedControl, routes } from "./_main/router.js";

sessionStartedControl(routes[0].pathname, false);

setCustomComponents();

applyI18n(() => {
  const i18n = getI18nContent("page", "landing");

  document.head.innerHTML = document.head.innerHTML
    .replaceAll("{APP_VERSION}", CONSTANT.APP_VERSION)
    .replaceAll("{head-meta-description}", i18n.head.meta.description)
    .replaceAll("{head-meta-title}", i18n.head.meta.title)
    .replaceAll("{head-meta-keywords}", i18n.head.meta.keywords)
    .replaceAll("{head-title}", i18n.head.title);

  document.body.innerHTML = document.body.innerHTML
    .replace("{features.title}", i18n.body.features.title)
    .replace("{features.checkAssistance.title}", i18n.body.features.checkAssistance.title)
    .replace("{features.checkAssistance.buttonLabel}", i18n.body.features.checkAssistance.buttonLabel)
    .replace("{features.checkAssistance.option.training}", i18n.body.features.checkAssistance.option.training)
    .replace("{features.checkAssistance.option.friendlyMatch}", i18n.body.features.checkAssistance.option.friendlyMatch)
    .replace("{features.checkAssistance.option.officialMatch}", i18n.body.features.checkAssistance.option.officialMatch)
    .replace("{features.teamsAdmin.title}", i18n.body.features.teamsAdmin.title)
    .replace("{features.teamsAdmin.buttonLabel}", i18n.body.features.teamsAdmin.buttonLabel)
    .replace("{features.teamsAdmin.option.random}", i18n.body.features.teamsAdmin.option.random)
    .replace("{features.teamsAdmin.option.official}", i18n.body.features.teamsAdmin.option.official)
    .replace("{features.statistics.title}", i18n.body.features.statistics.title)
    .replace("{features.statistics.buttonLabel}", i18n.body.features.statistics.buttonLabel)
    .replace("{features.statistics.option.byMatch}", i18n.body.features.statistics.option.byMatch)
    .replace("{features.statistics.option.team}", i18n.body.features.statistics.option.team)
    .replace("{features.playersAdmin.title}", i18n.body.features.playersAdmin.title)
    .replace("{features.playersAdmin.buttonLabel}", i18n.body.features.playersAdmin.buttonLabel)
    .replace("{features.playersAdmin.option.personalData}", i18n.body.features.playersAdmin.option.personalData)
    .replace("{features.playersAdmin.option.statistics}", i18n.body.features.playersAdmin.option.statistics)
    .replace("{features.playersAdmin.option.fees}", i18n.body.features.playersAdmin.option.fees)
    .replace("{features.agenda.title}", i18n.body.features.agenda.title)
    .replace("{features.agenda.buttonLabel}", i18n.body.features.agenda.buttonLabel)
    .replace("{features.agenda.option.tournaments}", i18n.body.features.agenda.option.tournaments)
    .replace("{features.agenda.option.trainings}", i18n.body.features.agenda.option.trainings)
    .replace("{features.agenda.option.others}", i18n.body.features.agenda.option.others)
    .replace("{features.match.title}", i18n.body.features.match.title)
    .replace("{features.match.buttonLabel}", i18n.body.features.match.buttonLabel)
    .replace("{features.match.option.quick}", i18n.body.features.match.option.quick)
    .replace("{features.match.option.official}", i18n.body.features.match.option.official)
    .replace("{features.match.option.statistics}", i18n.body.features.match.option.statistics)
    .replace("{schedule.title}", i18n.body.schedule.title);
});

window.addEventListener("load", () => {
  analytic.logEvent.enterLandingPage();
});
