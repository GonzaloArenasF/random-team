/**
 * CUSTOM COMPONENT
 * Name: bap-header
 *
 * Header pages
 */
import { analytic } from "../../_main/analytics.js";
import { userSession, userSignOut } from "../../_main/auth.js";
import { ENV_URL, CONSTANT } from "../../_main/constants.js";
import { getI18nContent } from "../../_main/i18n.js";
import { createCustomComponent } from "../customComponentsRegistration.js";

const i18N = getI18nContent("component", "bapHeader");

function preRender(html, props) {
  return html
    .replaceAll("{ENV_URL}", ENV_URL)
    .replaceAll("{APP-NAME}", CONSTANT.APP_NAME)
    .replaceAll("{subtitle}", i18N.subtitle);
}

function openloginDialog() {
  document.getElementById("bapAuthDialog").classList.toggle("show");
  document.body.style.overflow = "hidden";
  analytic.logEvent.openLoginDialog();
}

function doLogout() {
  userSignOut({
    callbackOnSuccess: () => {
      analytic.logEvent.doLogout();
      document.querySelector(".bap-header .actions").classList.remove("login");
      document.querySelector("main").classList.remove('ready');
    },
  });
}

function postRender(header, props) {
  document.getElementById("openLoginBtn")?.addEventListener("click", () => openloginDialog());
  document.getElementById("logoutBtn")?.addEventListener("click", () => doLogout());

  userSession.onAuthStateChanged(() => {
    if (userSession.currentUser) {
      document.querySelector(".bap-header .actions")?.classList.add("login");
    }
  });
}

export class BapHeader extends HTMLElement {
  constructor() {
    super();

    const props = {
      hideActions: typeof this.getAttribute("hide-actions") == "string",
      showAdminActions: typeof this.getAttribute("show-admin-actions") == "string",
      isAdminUser: typeof this.getAttribute("is-admin-user") == "string",
    };

    createCustomComponent(this, {
      cssPath: ENV_URL + "/_components/bap-header/bap-header.css",
      htmlPath: ENV_URL + "/_components/bap-header/bap-header.html",
      preRender,
      postRender,
      props,
    });
  }
}
