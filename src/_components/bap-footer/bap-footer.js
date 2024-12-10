/**
 * CUSTOM COMPONENT
 * Name: bap-footer
 *
 * Footer pages
 */
import { CONSTANT, ENV_URL } from "../../_main/constants.js";
import { getI18nContent } from "../../_main/i18n.js";
import { createCustomComponent } from "../customComponentsRegistration.js";

const i18n = getI18nContent("component", "bapFooter");

function preRender(html) {
  return html
    .replace("{ENV_URL}", ENV_URL)
    .replace("{APP_VERSION}", CONSTANT.APP_VERSION)
    .replace("{APP_NAME}", CONSTANT.APP_NAME)
    .replace("{subtitle}", i18n.subtitle)
    .replaceAll("{tc.title}", i18n.tc.title)
    .replace("{tc.summary}", i18n.tc.summary)
}

function postRender(element) {
  
}

export class BapFooter extends HTMLElement {
  constructor() {
    super();
    createCustomComponent(this, {
      cssPath: ENV_URL + "/_components/bap-footer/bap-footer.css",
      htmlPath: ENV_URL + "/_components/bap-footer/bap-footer.html",
      preRender,
      postRender,
    });
  }
}
