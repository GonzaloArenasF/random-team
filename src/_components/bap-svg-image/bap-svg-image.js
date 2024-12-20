import { isMobile } from '../../_main/util.js';

/**
 * CUSTOM COMPONENT
 * Name: bap-svg-image
 *
 * SVG images
 */
const images = {
  chevronLeft: `<path d="M4.07895 7.46963L10.1522 1.39641C10.4451 1.1035 10.92 1.1035 11.2129 1.39641L11.9212 2.10475C12.2136 2.39716 12.2142 2.87106 11.9224 3.16416L7.10929 7.99997L11.9224 12.8358C12.2142 13.1288 12.2136 13.6028 11.9212 13.8952L11.2129 14.6035C10.9199 14.8964 10.4451 14.8964 10.1522 14.6035L4.07898 8.53028C3.78607 8.23741 3.78607 7.76253 4.07895 7.46963Z" fill="black"/>`,
  menu: `<path d="M48.0647 39.8607C48.0647 38.9232 47.2879 38.1464 46.3504 38.1464H8.63616C7.69866 38.1464 6.92188 38.9232 6.92188 39.8607V43.2893C6.92188 44.2268 7.69866 45.0035 8.63616 45.0035H46.3504C47.2879 45.0035 48.0647 44.2268 48.0647 43.2893V39.8607ZM48.0647 26.1464C48.0647 25.2089 47.2879 24.4321 46.3504 24.4321H8.63616C7.69866 24.4321 6.92188 25.2089 6.92188 26.1464V29.575C6.92188 30.5125 7.69866 31.2893 8.63616 31.2893H46.3504C47.2879 31.2893 48.0647 30.5125 48.0647 29.575V26.1464ZM48.0647 12.4321C48.0647 11.4946 47.2879 10.7178 46.3504 10.7178H8.63616C7.69866 10.7178 6.92188 11.4946 6.92188 12.4321V15.8607C6.92188 16.7982 7.69866 17.575 8.63616 17.575H46.3504C47.2879 17.575 48.0647 16.7982 48.0647 15.8607V12.4321Z" fill="#333333"/>`,
  lock: `<path d="M16.875 8.75H15.9375V5.9375C15.9375 2.66406 13.2734 0 10 0C6.72656 0 4.0625 2.66406 4.0625 5.9375V8.75H3.125C2.08984 8.75 1.25 9.58984 1.25 10.625V18.125C1.25 19.1602 2.08984 20 3.125 20H16.875C17.9102 20 18.75 19.1602 18.75 18.125V10.625C18.75 9.58984 17.9102 8.75 16.875 8.75ZM12.8125 8.75H7.1875V5.9375C7.1875 4.38672 8.44922 3.125 10 3.125C11.5508 3.125 12.8125 4.38672 12.8125 5.9375V8.75Z" fill="black"/>`,
};

const sizes = {
  x1: {
    px: 16,
    scale: 1,
  },
  x2: {
    px: 24,
    scale: 1.5, // x2.px / x1.px
  },
  x3: {
    px: 32,
    scale: 2, // x3.px / x1.px
  },
  x4: {
    px: 48,
    scale: 3, // x4.px / x1.px
  },
  x5: {
    px: 64,
    scale: 4, // x5.px / x1.px
  },
};

export class BapSvgImage extends HTMLElement {
  constructor() {
    super();

    try {
      const name = this.getAttribute("name");
      const mobileSize = this.getAttribute("mobile-size");
      const size = isMobile() && mobileSize ? mobileSize : this.getAttribute("size");

      if (!name || !size) {
        const missedParameter = !name ? "name" : "size";
        throw new Error(`${missedParameter} propertie is missed.`);
      }

      if (!Object.keys(images).includes(name)) {
        throw new Error("Requested image does not exist.");
      }

      this.outerHTML = `<figure style="width:${sizes[size].px}px; height:${sizes[size].px}px; display: flex; justify-content: center; align-items: center;">
                          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(${sizes[size].scale})">
                            ${images[name]}
                          </svg>
                        </figure>`;
    } catch (error) {
      console.error("SVG image import:", error);
    }
  }
}
