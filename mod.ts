// Copyright 2014-2024 the Themify Icons authors. All rights reserved. MIT (https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE).
/**
 * # Themify Icons icons for preact
 * 
 * [![JSR](https://jsr.io/badges/@preact-icons/tfi)](https://jsr.io/@preact-icons/tfi)
 * 
 * **License** [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)
 * 
 * **Project** [https://github.com/lykmapipo/themify-icons](https://github.com/lykmapipo/themify-icons)
 * 
 * [See available icons here](https://react-icons.deno.dev/tfi)
 * 
 * ## import_map.json
 * 
 * For a transparent usage:
 * 
 * ```json
 * {
 *   "imports": {
 *     "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
 *     "preact": "npm:preact@10.22.1",
 *     "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 *     "preact/hooks": "npm:preact@10.22.1/hooks",
 *     "react-icons/tfi": "jsr:@preact-icons/tfi@^1.0.11/mod.ts",
 *     "react-icons/tfi/": "jsr:@preact-icons/tfi@^1.0.11/ico/",
 *   }
 * }
 * ```
 * 
 * ## Import an icon without import_map by and afer loading all icons from the lib tfi
 * 
 * ```ts
 * import { TfiAgenda } from "jsr:preact-icons/tfi@1.0.11/mod.ts"
 * ```
 * 
 * ## import_map import an icon from all icons
 * 
 * ```ts
 * import { TfiAgenda } from "react-icons/tfi"
 * ```
 * 
 * ## import a single icon, downloading just one icon
 * 
 * ```ts
 * import { TfiAgenda } from "react-icons/tfi/TfiAgenda.ts"
 * ```
 * 
 * or using default export
 * 
 * ```ts
 * import TfiAgenda from "react-icons/tfi/TfiAgenda.ts"
 * ```
 * 
 * @module
 */

import { GenIcon } from "./deps.ts";
import type { IconBaseProps, JSX, VNode } from "./deps.ts";

/**
 * Agenda icon from Themify Icons
 */
export function TfiAgenda(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 2v-2h-13v17h13v-2h2v-13h-2zM2 16v-15h2v15h-2zM13 16h-8v-15h8v15zM15 14h-1v-3h1v3zM15 10h-1v-3h1v3zM14 6v-3h1v3h-1zM6 4h5v1h-5v-1zM6 6h4v1h-4v-1z"},child:[]}]})(props);
}
/**
 * AlarmClock icon from Themify Icons
 */
export function TfiAlarmClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.714 6.791c0.504-0.512 0.786-1.181 0.786-1.903 0-1.503-1.223-2.726-2.725-2.726-0.886 0-1.695 0.434-2.207 1.15-0.501-0.155-1.026-0.249-1.568-0.287v-1.025h1v-1h-3v1h1v1.025c-0.542 0.038-1.067 0.132-1.568 0.287-0.512-0.717-1.32-1.15-2.207-1.15-1.502 0-2.725 1.223-2.725 2.726 0 0.723 0.282 1.392 0.786 1.903-0.499 0.962-0.786 2.052-0.786 3.209 0 1.707 0.616 3.271 1.635 4.487l-1.285 1.713 0.8 0.6 1.192-1.59c1.239 1.109 2.868 1.79 4.658 1.79s3.419-0.681 4.658-1.79l1.192 1.59 0.8-0.6-1.285-1.713c1.019-1.216 1.635-2.78 1.635-4.487 0-1.157-0.287-2.247-0.786-3.209zM12.775 3.162c0.951 0 1.725 0.774 1.725 1.726 0 0.373-0.12 0.724-0.335 1.017-0.678-0.936-1.581-1.694-2.63-2.202 0.322-0.339 0.762-0.541 1.24-0.541zM2.5 4.888c0-0.951 0.774-1.726 1.725-1.726 0.478 0 0.918 0.202 1.24 0.54-1.049 0.508-1.951 1.267-2.63 2.202-0.215-0.293-0.335-0.643-0.335-1.016zM8.5 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM9 10h4v1h-5v-4h1v3z"},child:[]}]})(props);
}
/**
 * Alert icon from Themify Icons
 */
export function TfiAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.454 1.492l-8.242 14.508h16.581l-8.339-14.508zM8.459 3.508l6.605 11.492h-13.134l6.529-11.492zM9 10.938h-1v-3.938h1v3.938zM9.5 13.031c0 0.552-0.447 1-1 1s-1-0.448-1-1 0.447-1 1-1 1 0.448 1 1z"},child:[]}]})(props);
}
/**
 * AlignCenter icon from Themify Icons
 */
export function TfiAlignCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2v1h-17v-1h17zM1.5 6v1h14v-1h-14zM0 11h17v-1h-17v1zM3.5 15h10v-1h-10v1z"},child:[]}]})(props);
}
/**
 * AlignJustify icon from Themify Icons
 */
export function TfiAlignJustify(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2v1h-17v-1h17zM0 7h17v-1h-17v1zM0 11h17v-1h-17v1zM0 15h17v-1h-17v1z"},child:[]}]})(props);
}
/**
 * AlignLeft icon from Themify Icons
 */
export function TfiAlignLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2v1h-17v-1h17zM14 6h-14v1h14v-1zM0 11h17v-1h-17v1zM0 15h10v-1h-10v1z"},child:[]}]})(props);
}
/**
 * AlignRight icon from Themify Icons
 */
export function TfiAlignRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2v1h-17v-1h17zM3 7h14v-1h-14v1zM0 11h17v-1h-17v1zM7 15h10v-1h-10v1z"},child:[]}]})(props);
}
/**
 * Anchor icon from Themify Icons
 */
export function TfiAnchor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.291 12.592l-1.57-3.127-3.127 1.568 0.448 0.895 1.871-0.939c-0.373 1.907-1.956 3.365-3.913 3.585v-7.574h1.5v-1h-1.5v-1.051c1.14-0.232 2-1.241 2-2.449 0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5c0 1.208 0.86 2.217 2 2.449v1.051h-1.5v1h1.5v7.574c-1.955-0.22-3.538-1.676-3.912-3.58l1.86 0.934 0.448-0.895-3.127-1.568-1.57 3.127 0.894 0.449 0.651-1.298c0.693 2.245 2.787 3.882 5.256 3.882 2.464 0 4.556-1.63 5.252-3.867l0.645 1.283 0.894-0.449zM7 2.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5-1.5-0.673-1.5-1.5z"},child:[]}]})(props);
}
/**
 * Android icon from Themify Icons
 */
export function TfiAndroid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3.809 5.696h9.383v6.807c0 0.623-0.502 1.125-1.113 1.125h-0.769v2.32c0 0.583-0.469 1.052-1.051 1.052-0.583 0-1.055-0.47-1.055-1.052v-2.32h-1.408v2.32c0 0.582-0.472 1.052-1.055 1.052-0.571 0-1.042-0.47-1.042-1.052l-0.009-2.32h-0.757c-0.622 0-1.124-0.501-1.124-1.125v-6.807zM2.357 5.502c-0.582 0-1.053 0.471-1.053 1.042v4.396c0 0.583 0.471 1.052 1.053 1.052s1.042-0.47 1.042-1.052v-4.396c0-0.571-0.468-1.042-1.042-1.042zM13.222 5.328h-9.454c0-1.625 0.972-3.036 2.413-3.771l-0.727-1.338c-0.041-0.072-0.021-0.164 0.051-0.205 0.071-0.031 0.164-0.011 0.205 0.062l0.735 1.349c0.625-0.277 1.32-0.43 2.055-0.43s1.43 0.153 2.055 0.429l0.735-1.349c0.041-0.072 0.134-0.092 0.205-0.062 0.072 0.041 0.092 0.133 0.051 0.205l-0.727 1.338c1.432 0.736 2.403 2.147 2.403 3.772zM6.741 3.223c0-0.215-0.173-0.399-0.397-0.399-0.216 0-0.389 0.184-0.389 0.399 0 0.214 0.173 0.398 0.389 0.398 0.224 0.001 0.397-0.183 0.397-0.398zM11.045 3.223c0-0.215-0.173-0.399-0.389-0.399-0.225 0-0.397 0.184-0.397 0.399 0 0.214 0.173 0.398 0.397 0.398 0.216 0.001 0.389-0.183 0.389-0.398zM14.643 5.502c-0.573 0-1.042 0.46-1.042 1.042v4.396c0 0.583 0.469 1.052 1.042 1.052 0.582 0 1.053-0.47 1.053-1.052v-4.396c-0.001-0.582-0.471-1.042-1.053-1.042z"},child:[]}]})(props);
}
/**
 * AngleDoubleDown icon from Themify Icons
 */
export function TfiAngleDoubleDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 10.644l-6.854-6.854 0.707-0.707 6.147 6.146 6.146-6.146 0.707 0.707-6.853 6.854zM8.5 14.074l-6.146-6.147-0.708 0.707 6.854 6.854 6.854-6.854-0.707-0.707-6.147 6.147z"},child:[]}]})(props);
}
/**
 * AngleDoubleLeft icon from Themify Icons
 */
export function TfiAngleDoubleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7.987 8.5l6.146 6.146-0.707 0.707-6.853-6.853 6.854-6.854 0.707 0.707-6.147 6.147zM9.29 2.353l-0.707-0.707-6.854 6.854 6.854 6.854 0.707-0.707-6.146-6.147 6.146-6.147z"},child:[]}]})(props);
}
/**
 * AngleDoubleRight icon from Themify Icons
 */
export function TfiAngleDoubleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.644 8.5l-6.854 6.854-0.707-0.707 6.146-6.147-6.146-6.146 0.707-0.708 6.854 6.854zM7.634 1.646l-0.707 0.708 6.146 6.146-6.146 6.146 0.707 0.707 6.853-6.853-6.853-6.854z"},child:[]}]})(props);
}
/**
 * AngleDoubleUp icon from Themify Icons
 */
export function TfiAngleDoubleUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 6.073l6.854 6.854-0.707 0.707-6.147-6.147-6.146 6.146-0.707-0.707 6.853-6.853zM8.5 2.644l6.146 6.146 0.707-0.707-6.853-6.854-6.854 6.854 0.708 0.707 6.146-6.146z"},child:[]}]})(props);
}
/**
 * AngleDown icon from Themify Icons
 */
export function TfiAngleDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z"},child:[]}]})(props);
}
/**
 * AngleLeft icon from Themify Icons
 */
export function TfiAngleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"},child:[]}]})(props);
}
/**
 * AngleRight icon from Themify Icons
 */
export function TfiAngleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"},child:[]}]})(props);
}
/**
 * AngleUp icon from Themify Icons
 */
export function TfiAngleUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.354 11.896l-0.707 0.707-7.147-7.146-7.146 7.146-0.707-0.707 7.853-7.853 7.854 7.853z"},child:[]}]})(props);
}
/**
 * Announcement icon from Themify Icons
 */
export function TfiAnnouncement(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.469 2.222h-1.927c-0.292 0-0.531 0.234-0.531 0.521v0.667l-10.995 4.030v-0.27c0-0.43-0.358-0.781-0.797-0.781h-1.422c-0.439 0-0.797 0.351-0.797 0.781v4.688c0 0.429 0.358 0.781 0.797 0.781h1.422c0.438 0 0.797-0.352 0.797-0.781v-0.331l1.034 0.189c-0.023 0.163-0.038 0.326-0.038 0.491 0 1.897 1.561 3.441 3.479 3.441 1.657 0 3.030-1.128 3.38-2.682l3.14 0.576v0.659c0 0.287 0.239 0.521 0.531 0.521h1.927c0.292 0 0.531-0.234 0.531-0.521v-11.458c0-0.287-0.239-0.521-0.531-0.521zM7.491 14.648c-1.367 0-2.479-1.095-2.479-2.441 0-0.104 0.027-0.205 0.040-0.308l4.84 0.888c-0.264 1.082-1.235 1.861-2.401 1.861zM16 13.722h-0.989v-1.013l-12.995-2.383v1.312h-1.016v-4.25h1.016v1.484l12.995-4.763v-0.887h0.989v10.5z"},child:[]}]})(props);
}
/**
 * Apple icon from Themify Icons
 */
export function TfiApple(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.001 11.125c-0.469-0.674-0.704-1.44-0.704-2.278 0-0.776 0.225-1.482 0.664-2.115 0.245-0.357 0.633-0.756 1.165-1.205-0.347-0.43-0.706-0.777-1.063-1.022-0.634-0.439-1.358-0.664-2.176-0.664-0.501 0-1.093 0.123-1.767 0.347-0.675 0.235-1.165 0.348-1.461 0.348-0.236 0-0.706-0.102-1.411-0.307-0.715-0.204-1.308-0.306-1.808-0.306-1.176 0-2.136 0.491-2.901 1.471-0.766 0.991-1.154 2.258-1.154 3.821 0 1.675 0.511 3.381 1.501 5.139 1.011 1.757 2.023 2.646 3.075 2.646 0.337 0 0.787-0.112 1.349-0.348 0.553-0.224 1.042-0.337 1.451-0.337 0.419 0 0.939 0.102 1.542 0.327 0.614 0.214 1.083 0.327 1.431 0.327 0.868 0 1.747-0.665 2.626-2.003 0.592-0.889 1.001-1.747 1.256-2.554-0.602-0.183-1.144-0.612-1.615-1.287zM13.523 14.418c-0.657 1-1.293 1.552-1.79 1.552-0.147 0-0.459-0.047-1.081-0.264-0.693-0.259-1.33-0.39-1.892-0.39-0.541 0-1.155 0.138-1.838 0.415-0.58 0.243-0.865 0.269-0.961 0.269-0.628 0-1.412-0.762-2.204-2.137-0.923-1.639-1.372-3.159-1.372-4.648 0-1.336 0.31-2.387 0.942-3.206 0.579-0.741 1.251-1.086 2.113-1.086 0.401 0 0.902 0.088 1.529 0.267 1.051 0.305 1.444 0.346 1.689 0.346 0.425 0 1.010-0.132 1.777-0.399 0.589-0.196 1.077-0.296 1.45-0.296 0.609 0 1.135 0.159 1.61 0.489 0.066 0.046 0.135 0.098 0.204 0.155-0.228 0.236-0.414 0.461-0.562 0.677-0.56 0.806-0.843 1.709-0.843 2.686 0 1.048 0.297 2.006 0.884 2.85 0.354 0.505 0.748 0.908 1.182 1.206-0.217 0.499-0.498 1.006-0.837 1.514zM9.424 3.964c-0.235 0.072-0.582 0.133-1.062 0.174 0.021-1.011 0.286-1.89 0.797-2.625 0.511-0.737 1.368-1.237 2.555-1.513 0.020 0.092 0.040 0.164 0.050 0.225 0 0.071 0.011 0.132 0.011 0.204 0 0.419-0.102 0.889-0.296 1.39-0.204 0.511-0.521 0.981-0.951 1.41-0.368 0.367-0.736 0.612-1.104 0.735z"},child:[]}]})(props);
}
/**
 * Archive icon from Themify Icons
 */
export function TfiArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2h-17v4h1v11h15v-11h1v-4zM15 16h-13v-10h13v10zM16 5h-15v-2h15v2zM6 11h5.016c1.103 0 2-0.897 2-2s-0.897-2-2-2h-5.016c-1.103 0-2 0.897-2 2s0.897 2 2 2zM6 8h5.016c0.552 0 1 0.448 1 1s-0.448 1-1 1h-5.016c-0.552 0-1-0.448-1-1s0.448-1 1-1z"},child:[]}]})(props);
}
/**
 * Arrow icon from Themify Icons
 */
export function TfiArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.603 11.349l-0.706-0.708 1.644-1.641h-5.541v5.541l1.641-1.644 0.708 0.706-2.849 2.855-2.849-2.855 0.708-0.706 1.641 1.644v-5.541h-5.541l1.644 1.641-0.706 0.708-2.855-2.849 2.855-2.849 0.706 0.708-1.644 1.641h5.541v-5.541l-1.641 1.644-0.708-0.706 2.849-2.855 2.849 2.855-0.708 0.706-1.641-1.644v5.541h5.541l-1.644-1.641 0.706-0.708 2.855 2.849-2.855 2.849z"},child:[]}]})(props);
}
/**
 * ArrowCircleDown icon from Themify Icons
 */
export function TfiArrowCircleDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.146 6.146l0.707 0.707-4.353 4.354-4.354-4.353 0.707-0.707 3.647 3.646 3.646-3.647zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"},child:[]}]})(props);
}
/**
 * ArrowCircleLeft icon from Themify Icons
 */
export function TfiArrowCircleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.854 4.854l-3.647 3.646 3.646 3.646-0.707 0.707-4.353-4.353 4.354-4.354 0.707 0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"},child:[]}]})(props);
}
/**
 * ArrowCircleRight icon from Themify Icons
 */
export function TfiArrowCircleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"},child:[]}]})(props);
}
/**
 * ArrowCircleUp icon from Themify Icons
 */
export function TfiArrowCircleUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 5.793l4.354 4.354-0.707 0.707-3.647-3.647-3.646 3.646-0.707-0.707 4.353-4.353zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"},child:[]}]})(props);
}
/**
 * ArrowDown icon from Themify Icons
 */
export function TfiArrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.854 8.854l-7.354 7.353-7.354-7.353 0.707-0.707 6.147 6.146v-13.293h1v13.293l6.146-6.146 0.708 0.707z"},child:[]}]})(props);
}
/**
 * ArrowLeft icon from Themify Icons
 */
export function TfiArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z"},child:[]}]})(props);
}
/**
 * ArrowRight icon from Themify Icons
 */
export function TfiArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"},child:[]}]})(props);
}
/**
 * ArrowTopLeft icon from Themify Icons
 */
export function TfiArrowTopLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.292 13l-10.317-10.297v7.297h-1v-9.003h9.025v1h-7.316l10.315 10.295-0.707 0.708z"},child:[]}]})(props);
}
/**
 * ArrowTopRight icon from Themify Icons
 */
export function TfiArrowTopRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 0.997v9.003h-1v-7.297l-10.317 10.297-0.707-0.708 10.315-10.295h-7.316v-1h9.025z"},child:[]}]})(props);
}
/**
 * ArrowUp icon from Themify Icons
 */
export function TfiArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.146 8.854l-6.146-6.147v13.293h-1v-13.293l-6.146 6.147-0.708-0.708 7.354-7.353 7.354 7.354-0.708 0.707z"},child:[]}]})(props);
}
/**
 * ArrowsCorner icon from Themify Icons
 */
export function TfiArrowsCorner(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 9.5v5.5h-5.5v-1h3.803l-10.303-10.303v3.803h-1v-5.5h5.5v1h-3.783l10.283 10.283v-3.783h1z"},child:[]}]})(props);
}
/**
 * ArrowsHorizontal icon from Themify Icons
 */
export function TfiArrowsHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.716 8.5l-3.954 3.858-0.698-0.716 2.707-2.642h-12.542l2.708 2.642-0.698 0.716-3.955-3.858 3.954-3.858 0.698 0.716-2.707 2.642h12.543l-2.708-2.642 0.698-0.716 3.954 3.858z"},child:[]}]})(props);
}
/**
 * ArrowsVertical icon from Themify Icons
 */
export function TfiArrowsVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.642 12.063l0.716 0.698-3.858 3.955-3.858-3.954 0.716-0.698 2.642 2.707v-12.542l-2.642 2.708-0.716-0.699 3.858-3.954 3.858 3.954-0.716 0.698-2.642-2.707v12.543l2.642-2.709z"},child:[]}]})(props);
}
/**
 * BackLeft icon from Themify Icons
 */
export function TfiBackLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 7.5c0 3.033-2.467 5.5-5.5 5.5h-2.912l2.646 2.646-0.707 0.707-3.853-3.853 3.854-3.854 0.707 0.707-2.647 2.647h2.912c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5h-7.083v-1h7.083c3.033 0 5.5 2.467 5.5 5.5z"},child:[]}]})(props);
}
/**
 * BackRight icon from Themify Icons
 */
export function TfiBackRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.583 15v1h-7.083c-3.032 0-5.5-2.467-5.5-5.5s2.468-5.5 5.5-5.5h2.912l-2.646-2.646 0.707-0.707 3.853 3.853-3.853 3.854-0.707-0.708 2.646-2.646h-2.912c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h7.083z"},child:[]}]})(props);
}
/**
 * Bag icon from Themify Icons
 */
export function TfiBag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 4v-2.394c0-0.885-0.737-1.606-1.643-1.606h-5.699c-0.905 0-1.642 0.721-1.642 1.606v2.394h-3.016v13h15v-13h-3zM5.016 1.606c0-0.334 0.288-0.606 0.642-0.606h5.699c0.355 0 0.643 0.272 0.643 0.606v2.394h-6.984v-2.394zM15 16h-13v-8h13v8zM15 7h-13v-2h2.016v0.643h1v-0.643h6.984v0.643h1v-0.643h2v2z"},child:[]}]})(props);
}
/**
 * BarChart icon from Themify Icons
 */
export function TfiBarChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM2 10h2v5h1v-6h-4v6h1v-5zM7 7h2v8h1v-9h-4v9h1v-8zM12 3h2v12h1v-13h-4v13h1v-12z"},child:[]}]})(props);
}
/**
 * BarChartAlt icon from Themify Icons
 */
export function TfiBarChartAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM12 10h2v5h1v-6h-4v6h1v-5zM7 7h2v8h1v-9h-4v9h1v-8zM2 3h2v12h1v-13h-4v13h1v-12z"},child:[]}]})(props);
}
/**
 * Basketball icon from Themify Icons
 */
export function TfiBasketball(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM12.989 8c0.098-1.46 0.615-2.855 1.497-4.020 0.86 1.133 1.404 2.515 1.504 4.020h-3.001zM15.99 9c-0.1 1.505-0.644 2.888-1.505 4.021-0.881-1.166-1.398-2.561-1.495-4.021h3zM13.826 3.209c-1.094 1.371-1.733 3.040-1.837 4.791h-2.989v-6.976c1.879 0.122 3.574 0.929 4.826 2.185zM8 1.026v6.974h-2.96c-0.102-1.752-0.741-3.42-1.834-4.791 1.244-1.249 2.927-2.055 4.794-2.183zM1.041 8c0.1-1.505 0.644-2.888 1.505-4.021 0.881 1.165 1.397 2.56 1.495 4.021h-3zM4.040 9c-0.097 1.462-0.612 2.856-1.494 4.021-0.861-1.133-1.405-2.516-1.505-4.021h2.999zM3.205 13.791c1.095-1.371 1.733-3.039 1.835-4.791h2.96v6.974c-1.867-0.128-3.55-0.934-4.795-2.183zM9 15.976v-6.976h2.99c0.103 1.751 0.742 3.42 1.835 4.792-1.252 1.255-2.946 2.062-4.825 2.184z"},child:[]}]})(props);
}
/**
 * Bell icon from Themify Icons
 */
export function TfiBell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.312 14.125c-0.014-0.013-1.312-1.294-1.312-3.21v-3.292c0-3.101-2.468-5.623-5.5-5.623s-5.5 2.522-5.5 5.623v3.292c0 1.861-1.306 3.203-1.318 3.216l-0.843 0.853h15.357l-0.884-0.859zM3.052 13.984c0.444-0.692 0.948-1.764 0.948-3.069v-3.292c0-2.549 2.019-4.623 4.5-4.623s4.5 2.074 4.5 4.623v3.292c0 1.32 0.495 2.383 0.938 3.069h-10.886zM9 2h-1v-1h1v1zM9 15h1c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5h1c0 0.276 0.225 0.5 0.5 0.5s0.5-0.224 0.5-0.5z"},child:[]}]})(props);
}
/**
 * Blackboard icon from Themify Icons
 */
export function TfiBlackboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 2v-2h-1v2h-7v10h15v-10h-7zM15 11h-13v-8h13v8zM3.5 13h10v1h-2.584l1.504 2.326-0.84 0.543-1.855-2.869h-0.725v3h-1v-3h-0.712l-1.869 2.87-0.838-0.545 1.514-2.325h-2.595v-1z"},child:[]}]})(props);
}
/**
 * Bolt icon from Themify Icons
 */
export function TfiBolt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.313 2.012h-7.152l-2.331 7.014h1.666l-2.010 6.052 9.483-8.051h-2.904l3.248-5.015zM11.247 8.027l-4.687 3.979 1.322-3.979h-1.665l1.665-5.015h4.592l-3.248 5.015h2.021z"},child:[]}]})(props);
}
/**
 * BoltAlt icon from Themify Icons
 */
export function TfiBoltAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.83 8l-3.826 7.233-0.884-0.467 3.050-5.766h-5.109l4.9-7.279 0.829 0.559-3.851 5.72h4.891z"},child:[]}]})(props);
}
/**
 * Book icon from Themify Icons
 */
export function TfiBook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.592 1.152c-0.053-0.010-1.321-0.244-2.981-0.244-2.105 0-3.828 0.366-5.125 1.088-1.518-0.765-3.264-1.152-5.196-1.152-1.681 0-2.866 0.302-2.915 0.315l-0.375 0.098 0.001 13.906 0.624-0.161c0.011-0.002 1.12-0.283 2.665-0.283 1.447 0 2.771 0.24 3.96 0.703v0.828h2.5v-0.856c1.281-0.488 2.747-0.611 3.86-0.611 1.562 0 2.786 0.225 2.798 0.227l0.592 0.11v-13.891l-0.408-0.077zM1 13.907v-11.858c0.451-0.084 1.277-0.205 2.29-0.205 1.761 0 3.339 0.36 4.71 1.044v11.776c-1.403-0.617-2.977-0.945-4.71-0.945-0.969 0-1.773 0.101-2.29 0.188zM16 13.938c-0.536-0.070-1.393-0.154-2.39-0.154-1.848 0-3.381 0.298-4.61 0.855v-11.773c1.422-0.78 3.271-0.958 4.61-0.958 1.023 0 1.902 0.097 2.39 0.164v11.866z"},child:[]}]})(props);
}
/**
 * Bookmark icon from Themify Icons
 */
export function TfiBookmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3.562 1v15.459l4.686-3.27 4.752 3.26v-15.449h-9.438zM12 14.551l-3.756-2.578-3.681 2.568v-12.541h7.437v12.551z"},child:[]}]})(props);
}
/**
 * BookmarkAlt icon from Themify Icons
 */
export function TfiBookmarkAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.027 10.074v-10.074h-6.054v10.077l3.021-2.053 3.033 2.050zM4.973 8.188v-7.188h4.055v7.191l-2.037-1.376-2.018 1.373zM16 1.007v14.993h-15v-14.993h1.974v1h-0.974v12.993h13v-12.993h-4.005v-1h5.005z"},child:[]}]})(props);
}
/**
 * Briefcase icon from Themify Icons
 */
export function TfiBriefcase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7 13v-1.5h1v0.5h1v-0.5h1v1.5h-3zM17 11h-1v6h-15v-6h-1v-8h3.616c0.938-1.83 2.805-3 4.884-3s3.947 1.171 4.884 3h3.616v8zM4.769 3h7.464c-0.825-1.233-2.21-2-3.732-2s-2.907 0.768-3.732 2zM15 11h-13v5h13v-5zM16 4h-15v6h15v-6z"},child:[]}]})(props);
}
/**
 * Brush icon from Themify Icons
 */
export function TfiBrush(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.913 1.782l-6.5 9.5-0.825-0.564 6.5-9.5 0.825 0.564zM9 13.992c0 1.103-0.897 2-2 2-0.203 0-0.538 0.015-0.541 0.015h-5.454l4.553-3.431c0.15-0.104 0.859-0.584 1.442-0.584 1.103 0 2 0.897 2 2zM8 13.992c0-0.551-0.449-1-1-1-0.175 0-0.582 0.203-0.853 0.393l-2.153 1.623h2.433c0.063-0.003 0.376-0.016 0.573-0.016 0.551 0 1-0.449 1-1z"},child:[]}]})(props);
}
/**
 * BrushAlt icon from Themify Icons
 */
export function TfiBrushAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 7.531c0-0.827-0.673-1.5-1.5-1.5h-4.808l0.285-0.914 0.023-3.617c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v3.452l0.31 1.080h-4.81c-0.827 0-1.5 0.673-1.5 1.5v3.486h0.932l-0.766 5.982h16.668l-0.766-5.982h0.932v-3.487zM15.698 16h-1.698v-2h-1v2h-1v-3h-1v3h-1v-4h-1v4h-5v-2h-1v2h-1.698l0.638-4.982h13.12l0.638 4.982zM1.060 10.018h-0.060v-2.487c0-0.276 0.224-0.5 0.5-0.5h6.165l-0.665-2.155v-3.376c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v3.393l-0.667 2.138h6.167c0.276 0 0.5 0.224 0.5 0.5v2.486h-14.94zM8 2h1v1h-1v-1z"},child:[]}]})(props);
}
/**
 * Calendar icon from Themify Icons
 */
export function TfiCalendar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 2v-1h-3v1h-5v-1h-3v1h-3v15h17v-15h-3zM12 2h1v2h-1v-2zM4 2h1v2h-1v-2zM16 16h-15v-8.921h15v8.921zM1 6.079v-3.079h2v2h3v-2h5v2h3v-2h2v3.079h-15z"},child:[]}]})(props);
}
/**
 * Camera icon from Themify Icons
 */
export function TfiCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.958 3v-1h-2.916v1h-3.042v12h17v-12h-11.042zM16 14h-15v-7h6.557c-0.345 0.591-0.557 1.269-0.557 2 0 2.206 1.794 4 4 4s4-1.794 4-4c0-0.731-0.212-1.409-0.557-2h1.557v7zM14 9c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zM13.618 6c-0.704-0.614-1.612-1-2.618-1s-1.914 0.386-2.618 1h-7.382v-2h15v2h-2.382z"},child:[]}]})(props);
}
/**
 * Car icon from Themify Icons
 */
export function TfiCar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 9.984l-1.958 0.002-2.051-3.986h-7.949l-2.968 3.999-2.074 0.001v4.977h2.002c0 0.008-0.002 0.015-0.002 0.023 0 1.103 0.897 2 2 2s2-0.897 2-2c0-0.008-0.002-0.015-0.002-0.023h5.005c-0.001 0.008-0.003 0.015-0.003 0.023 0 1.103 0.897 2 2 2s2-0.897 2-2c0-0.008-0.002-0.015-0.002-0.023h2.002v-4.993zM13.918 9.987l-3.897 0.004v-2.991h2.36l1.537 2.987zM5.544 7h3.477v2.992l-5.701 0.005 2.224-2.997zM4 16c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM13 16c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM16 13.977h-1.291c-0.35-0.582-0.981-0.977-1.709-0.977s-1.359 0.395-1.709 0.977h-5.582c-0.35-0.582-0.981-0.977-1.709-0.977s-1.359 0.395-1.709 0.977h-1.291v-2.977l15-0.015v2.992z"},child:[]}]})(props);
}
/**
 * Check icon from Themify Icons
 */
export function TfiCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"},child:[]}]})(props);
}
/**
 * CheckBox icon from Themify Icons
 */
export function TfiCheckBox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 5.761h1v10.239h-14v-14h8.393v1h-7.393v12h12v-9.239zM4.854 8.146l-0.708 0.708 3.434 3.434 7.587-11.512-0.835-0.551-6.912 10.488-2.566-2.567z"},child:[]}]})(props);
}
/**
 * Clip icon from Themify Icons
 */
export function TfiClip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.021 4.234v8.498h-1v-8.498c0-1.091-0.799-2.266-2.554-2.266-1.941 0-2.459 1.424-2.459 2.266v8.121h0.007v1.457c0 0.62 0.693 1.206 1.426 1.206 0.844 0 1.567-0.683 1.567-1.241v-0.27h-0.003l0.008-7.617c0-0.874-0.247-0.874-0.466-0.874-0.369 0-0.547 0.035-0.547 0.823v5.146h-1v-5.146c0-0.451 0-1.823 1.547-1.823 0.669 0 1.466 0.325 1.466 1.875l-0.007 6.43h0.002v1.457c0 1.173-1.224 2.241-2.567 2.241-1.292 0-2.426-1.031-2.426-2.206v-0.074h-0.007v-9.505c0-1.573 1.082-3.266 3.459-3.266 2.333 0.001 3.554 1.643 3.554 3.266z"},child:[]}]})(props);
}
/**
 * Clipboard icon from Themify Icons
 */
export function TfiClipboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 2v15h-15v-15h2.244v1h-1.244v13h13v-13h-1.278v-1h2.278zM13 5h-9v-4h3.085c0.207-0.582 0.763-1 1.415-1s1.208 0.418 1.415 1h3.085v4zM12 2h-3v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-3v2h7v-2z"},child:[]}]})(props);
}
/**
 * Close icon from Themify Icons
 */
export function TfiClose(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"},child:[]}]})(props);
}
/**
 * Cloud icon from Themify Icons
 */
export function TfiCloud(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.75 4.5c-0.578 0-1.146 0.123-1.691 0.367-0.889-0.873-2.075-1.367-3.309-1.367-1.966 0-3.684 1.19-4.397 3.002-1.803-0.074-3.353 1.421-3.353 3.248 0 1.792 1.458 3.25 3.25 3.25h9.5c2.343 0 4.25-1.907 4.25-4.25s-1.907-4.25-4.25-4.25zM12.75 12h-9.5c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25c0.125 0 0.244 0.019 0.363 0.038l0.435 0.072 0.126-0.422c0.478-1.608 1.915-2.688 3.576-2.688 1.073 0 2.102 0.477 2.821 1.307l0.265 0.306 0.354-0.195c0.503-0.277 1.027-0.418 1.56-0.418 1.792 0 3.25 1.458 3.25 3.25s-1.458 3.25-3.25 3.25z"},child:[]}]})(props);
}
/**
 * CloudDown icon from Themify Icons
 */
export function TfiCloudDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 6.75c0 2.343-1.906 4.25-4.25 4.25h-2.757v-1h2.757c1.792 0 3.25-1.458 3.25-3.25s-1.458-3.25-3.25-3.25c-0.532 0-1.057 0.141-1.56 0.417l-0.354 0.195-0.265-0.306c-0.719-0.829-1.748-1.306-2.821-1.306-1.661 0-3.099 1.080-3.576 2.688l-0.126 0.422-0.435-0.072c-0.119-0.019-0.238-0.038-0.363-0.038-1.24 0-2.25 1.009-2.25 2.25s1.010 2.25 2.25 2.25h3.699v1h-3.699c-1.792 0-3.25-1.458-3.25-3.25 0-1.826 1.511-3.335 3.353-3.248 0.713-1.812 2.431-3.002 4.397-3.002 1.234 0 2.42 0.494 3.309 1.367 0.546-0.244 1.113-0.367 1.691-0.367 2.344 0 4.25 1.907 4.25 4.25zM9 13.73v-7.73h-1v7.73l-1.646-1.646-0.707 0.707 2.853 2.853 2.854-2.854-0.707-0.707-1.647 1.647z"},child:[]}]})(props);
}
/**
 * CloudUp icon from Themify Icons
 */
export function TfiCloudUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 6.75c0 2.343-1.906 4.25-4.25 4.25h-2.757v-1h2.757c1.792 0 3.25-1.458 3.25-3.25s-1.458-3.25-3.25-3.25c-0.532 0-1.057 0.141-1.56 0.417l-0.354 0.195-0.265-0.306c-0.719-0.829-1.748-1.306-2.821-1.306-1.661 0-3.099 1.080-3.576 2.688l-0.126 0.422-0.435-0.072c-0.119-0.019-0.238-0.038-0.363-0.038-1.24 0-2.25 1.009-2.25 2.25s1.010 2.25 2.25 2.25h3.699v1h-3.699c-1.792 0-3.25-1.458-3.25-3.25 0-1.826 1.529-3.335 3.353-3.248 0.713-1.812 2.431-3.002 4.397-3.002 1.234 0 2.42 0.494 3.309 1.367 0.546-0.244 1.113-0.367 1.691-0.367 2.344 0 4.25 1.907 4.25 4.25zM10.646 8.854l0.707-0.707-2.853-2.854-2.854 2.853 0.707 0.707 1.647-1.646v7.793h1v-7.793l1.646 1.647z"},child:[]}]})(props);
}
/**
 * Comment icon from Themify Icons
 */
export function TfiComment(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.5 0h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h0.5v4.102l4.688-4.102h8.812c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 11.5c0 0.275-0.224 0.5-0.5 0.5h-9.188l-3.312 2.898v-2.898h-1.5c-0.276 0-0.5-0.225-0.5-0.5v-10c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v10z"},child:[]}]})(props);
}
/**
 * CommentAlt icon from Themify Icons
 */
export function TfiCommentAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.5 0h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h0.5v4.102l4.688-4.102h8.812c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 11.5c0 0.275-0.224 0.5-0.5 0.5h-9.188l-3.312 2.898v-2.898h-1.5c-0.276 0-0.5-0.225-0.5-0.5v-10c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v10zM3 3h11v1h-11v-1zM3 5h11v1h-11v-1zM3 7h6v1h-6v-1z"},child:[]}]})(props);
}
/**
 * Comments icon from Themify Icons
 */
export function TfiComments(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 1.5v7.969c0 0.827-0.673 1.5-1.5 1.5h-0.508v-1h0.508c0.276 0 0.5-0.225 0.5-0.5v-7.969c0-0.275-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.225-0.5 0.5v7.969c0 0.275 0.224 0.5 0.5 0.5h1.5v2.892l1.779-1.569 0.661 0.75-3.44 3.035v-4.108h-0.5c-0.827 0-1.5-0.673-1.5-1.5v-7.969c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5zM14.020 9.54v3.043c0 0.827-0.673 1.5-1.5 1.5h-0.5v3.064l-3.667-3.064h-0.853c-0.827 0-1.5-0.673-1.5-1.5v-3.043c0-0.827 0.673-1.5 1.5-1.5h5.020c0.827 0 1.5 0.673 1.5 1.5zM13.020 9.54c0-0.275-0.224-0.5-0.5-0.5h-5.020c-0.276 0-0.5 0.225-0.5 0.5v3.043c0 0.275 0.224 0.5 0.5 0.5h1.217l2.303 1.926v-1.926h1.5c0.276 0 0.5-0.225 0.5-0.5v-3.043z"},child:[]}]})(props);
}
/**
 * CommentsSmiley icon from Themify Icons
 */
export function TfiCommentsSmiley(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 8h1c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5h1c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5zM7.5 6.5c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM11.5 6.5c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM17 7.5c0 4.136-3.364 7.5-7.5 7.5-1.34 0-2.648-0.359-3.803-1.041l-5.5 2.843 2.843-5.499c-0.681-1.155-1.040-2.463-1.040-3.803 0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5zM16 7.5c0-3.584-2.916-6.5-6.5-6.5s-6.5 2.916-6.5 6.5c0 1.244 0.358 2.459 1.036 3.511l0.157 0.243-1.664 3.218 3.217-1.664 0.243 0.157c1.053 0.677 2.266 1.035 3.511 1.035 3.584 0 6.5-2.916 6.5-6.5z"},child:[]}]})(props);
}
/**
 * ControlBackward icon from Themify Icons
 */
export function TfiControlBackward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.719 8.474l7.281 6.097v-12.135l-7.281 6.038zM13 12.429l-4.719-3.951 4.719-3.914v7.865zM3.281 8.478l5.54 4.639-0.643 0.768-6.46-5.41 6.462-5.358 0.639 0.77-5.538 4.591z"},child:[]}]})(props);
}
/**
 * ControlEject icon from Themify Icons
 */
export function TfiControlEject(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.474 2.719l-6.038 7.281h12.135l-6.097-7.281zM8.478 4.281l3.951 4.719h-7.865l3.914-4.719zM15 13v1h-13v-1h13z"},child:[]}]})(props);
}
/**
 * ControlForward icon from Themify Icons
 */
export function TfiControlForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 2.436v12.136l7.281-6.098-7.281-6.038zM4 4.564l4.719 3.913-4.719 3.952v-7.865zM15.281 8.474l-6.46 5.41-0.643-0.768 5.54-4.639-5.537-4.592 0.639-0.77 6.461 5.359z"},child:[]}]})(props);
}
/**
 * ControlPause icon from Themify Icons
 */
export function TfiControlPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 15h4v-13h-4v13zM4 3h2v11h-2v-11zM10 2v13h4v-13h-4zM13 14h-2v-11h2v11z"},child:[]}]})(props);
}
/**
 * ControlPlay icon from Themify Icons
 */
export function TfiControlPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 2.692v11.618l11.618-5.837-11.618-5.781zM4 4.308l8.382 4.17-8.382 4.211v-8.381z"},child:[]}]})(props);
}
/**
 * ControlRecord icon from Themify Icons
 */
export function TfiControlRecord(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 2.5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zM8.5 13.5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"},child:[]}]})(props);
}
/**
 * ControlShuffle icon from Themify Icons
 */
export function TfiControlShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.94 6.871l1.081-1.34-0.004-0.003c0.855-0.971 2.087-1.528 3.378-1.528h1.898l-1.646-1.646 0.707-0.707 2.853 2.853-2.854 2.854-0.707-0.707 1.647-1.647h-1.898c-0.989 0-1.931 0.425-2.595 1.159l-1.080 1.339-0.78-0.627zM5.851 10.696l-0.011-0.008c-0.667 0.833-1.663 1.312-2.733 1.312h-3.107v1h3.107c1.369 0 2.645-0.611 3.503-1.676l0.011 0.009 0.941-1.166-0.777-0.629-0.934 1.158zM13.646 10.354l1.647 1.646h-1.898c-1.052 0-2.031-0.469-2.7-1.281l-4.269-5.265-0.010 0.008c-0.85-0.926-2.048-1.462-3.309-1.462h-3.107v1h3.107c0.998 0 1.948 0.428 2.611 1.17l4.161 5.132-0.005 0.004c0.86 1.076 2.143 1.694 3.52 1.694h1.898l-1.646 1.646 0.707 0.707 2.854-2.854-2.854-2.854-0.707 0.709z"},child:[]}]})(props);
}
/**
 * ControlSkipBackward icon from Themify Icons
 */
export function TfiControlSkipBackward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.719 8.526l7.281 6.038v-12.135l-7.281 6.097zM13 12.436l-4.719-3.914 4.719-3.951v7.865zM3 2h1v13h-1v-13z"},child:[]}]})(props);
}
/**
 * ControlSkipForward icon from Themify Icons
 */
export function TfiControlSkipForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 14.571l7.281-6.097-7.281-6.038v12.135zM4 4.564l4.719 3.914-4.719 3.951v-7.865zM14 2v13h-1v-13h1z"},child:[]}]})(props);
}
/**
 * ControlStop icon from Themify Icons
 */
export function TfiControlStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 3v11h11v-11h-11zM13 13h-9v-9h9v9z"},child:[]}]})(props);
}
/**
 * CreditCard icon from Themify Icons
 */
export function TfiCreditCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.5 2h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 13.5c0 0.275-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.225-0.5-0.5v-5.5h15v5.5zM1 5v-1.5c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v1.5h-15z"},child:[]}]})(props);
}
/**
 * Crown icon from Themify Icons
 */
export function TfiCrown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.626 6.743l-4.083-6.673-4.211 6.675-4.499-3.833 1.739 13.088h13.855l1.738-13.075-4.539 3.818zM2.447 15l-0.133-1h12.371l-0.133 1h-12.105zM14.818 13h-12.636l-1.015-7.637 3.396 2.892 3.967-6.29 3.851 6.292 3.454-2.906-1.017 7.649z"},child:[]}]})(props);
}
/**
 * Css3 icon from Themify Icons
 */
export function TfiCss3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 1.26l-2.407 12.064-7.277 2.416-6.316-2.416 0.643-3.223h2.688l-0.263 1.33 3.818 1.457 4.398-1.457 0.614-3.068h-10.929l0.524-2.686h10.94l0.345-1.73h-10.931l0.533-2.687h13.62z"},child:[]}]})(props);
}
/**
 * Cup icon from Themify Icons
 */
export function TfiCup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.999 1h-2.257c0.001-0.168 0.008-0.328 0.008-0.5v-0.5h-12.5v0.5c0 0.16 0.004 0.333 0.005 0.5h-2.254l-0.001 0.499c-0.003 1.086 0.062 2.199 0.195 3.31 0.352 2.937 1.271 6.341 2.795 7.087 0.194 0.096 0.395 0.144 0.596 0.144 0.238 0 0.479-0.068 0.707-0.206l0.209-0.14c0.833 1.277 1.97 2.139 3.498 2.298v2.008h-2.953v1h7v-1h-3.047v-1.997c1.415-0.149 2.585-0.935 3.493-2.312l0.234 0.155c0.216 0.13 0.447 0.194 0.681 0.194 0.201 0 0.404-0.048 0.602-0.145 1.524-0.746 2.443-4.15 2.795-7.087 0.133-1.11 0.198-2.224 0.195-3.31l-0.001-0.498zM3.988 10.834l-0.229 0.154c-0.112 0.066-0.204 0.070-0.328 0.010-0.785-0.385-1.808-2.675-2.243-6.309-0.108-0.9-0.169-1.802-0.184-2.689h1.273c0.097 2.924 0.513 6.468 1.792 8.956l-0.081-0.122zM8.5 13.041c-4.54 0-5.199-8.050-5.247-12.041h10.494c-0.049 4.721-0.838 12.041-5.247 12.041zM15.812 4.689c-0.436 3.634-1.458 5.924-2.243 6.309-0.123 0.061-0.216 0.058-0.308 0.003l-0.25-0.167-0.116 0.174c1.079-2.038 1.707-5.066 1.831-9.008h1.271c-0.016 0.887-0.077 1.789-0.185 2.689z"},child:[]}]})(props);
}
/**
 * Cut icon from Themify Icons
 */
export function TfiCut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 11c-0.545 0-1.049 0.157-1.49 0.412l-2.322-2.454 6.26-6.614-0.727-0.688-6.221 6.574-6.223-6.574-0.726 0.688 6.26 6.614-2.322 2.453c-0.44-0.254-0.945-0.411-1.489-0.411-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-0.747-0.285-1.424-0.738-1.949l2.238-2.365 2.238 2.365c-0.454 0.526-0.738 1.202-0.738 1.949 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3zM4 16c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM13 16c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z"},child:[]}]})(props);
}
/**
 * Dashboard icon from Themify Icons
 */
export function TfiDashboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 11.5v0.5h-6.168v-1h5.152c-0.112-1.692-0.789-3.231-1.842-4.434l-0.806 0.806-0.707-0.707 0.802-0.802c-1.202-1.053-2.74-1.726-4.431-1.839v2.976h-1v-2.976c-1.691 0.113-3.229 0.786-4.43 1.839l0.796 0.796-0.707 0.707-0.8-0.8c-1.053 1.203-1.731 2.742-1.842 4.434h5.171v1h-6.188v-0.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5zM10.5 11.5c0 1.103-0.897 2-2 2s-2-0.897-2-2c0-0.644 0.311-1.21 0.784-1.577l-2.082-3.63 0.867-0.497 2.141 3.733c0.095-0.014 0.19-0.029 0.29-0.029 1.103 0 2 0.897 2 2zM9.5 11.5c0-0.551-0.449-1-1-1s-1 0.449-1 1 0.449 1 1 1 1-0.449 1-1z"},child:[]}]})(props);
}
/**
 * Desktop icon from Themify Icons
 */
export function TfiDesktop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 11h13v-8h-13v8zM3 4h11v6h-11v-6zM15.5 1h-14c-0.827 0-1.5 0.638-1.5 1.423v10.154c0 0.785 0.673 1.423 1.5 1.423h14c0.827 0 1.5-0.638 1.5-1.423v-10.154c0-0.785-0.673-1.423-1.5-1.423zM16 12.577c0 0.234-0.225 0.423-0.5 0.423h-14c-0.275 0-0.5-0.189-0.5-0.423v-10.154c0-0.234 0.225-0.423 0.5-0.423h14c0.275 0 0.5 0.189 0.5 0.423v10.154zM5 15h7v1h-7v-1z"},child:[]}]})(props);
}
/**
 * Direction icon from Themify Icons
 */
export function TfiDirection(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.641 5.409l-2.811-3.409h-4.83v-2h-1v2h-7v7h7v8h1v-8h4.838l2.803-3.591zM9 8h-7v-5h11.358l2.001 2.426-2.009 2.574h-4.35z"},child:[]}]})(props);
}
/**
 * DirectionAlt icon from Themify Icons
 */
export function TfiDirectionAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 6h4.695l1.938-2.563-1.946-2.437h-4.687v-1h-1v1h-6v5h6v2h-4.687l-1.946 2.437 1.938 2.563h4.695v4h1v-4h6v-5h-6v-2zM3 2h10.206l1.161 1.454-1.169 1.546h-10.198v-3zM14 12h-10.198l-1.169-1.546 1.161-1.454h10.206v3z"},child:[]}]})(props);
}
/**
 * Download icon from Themify Icons
 */
export function TfiDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM13.354 8.854l-0.707-0.707-3.646 3.646v-11.793h-1v11.794l-3.647-3.648-0.708 0.708 4.854 4.853 4.854-4.853z"},child:[]}]})(props);
}
/**
 * Dribbble icon from Themify Icons
 */
export function TfiDribbble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zM15.994 8.621c-2.075-0.456-3.896-0.423-5.469-0.092-0.251-0.627-0.536-1.273-0.849-1.93 1.681-0.648 3.292-1.586 4.548-2.934 1.106 1.308 1.776 2.994 1.776 4.835 0 0.041-0.006 0.080-0.006 0.121zM13.523 2.947c-1.16 1.257-2.688 2.135-4.297 2.74-0.76-1.468-1.69-2.96-2.814-4.385 0.664-0.193 1.363-0.302 2.088-0.302 1.934 0 3.692 0.742 5.023 1.947zM5.43 1.665c1.133 1.397 2.062 2.884 2.828 4.353-2.974 0.92-5.966 1.028-7.114 1.030 0.474-2.407 2.104-4.4 4.286-5.383zM1 8.5c0-0.151 0.014-0.3 0.022-0.449 0.065 0.001 0.134 0.001 0.212 0.001 1.306 0 4.402-0.125 7.482-1.114 0.3 0.625 0.578 1.245 0.82 1.844-3.605 1.101-5.736 3.705-6.513 4.826-1.251-1.34-2.023-3.133-2.023-5.108zM3.758 14.304c0.596-0.901 2.601-3.518 6.145-4.57 0.961 2.598 1.405 4.744 1.566 5.651-0.911 0.394-1.914 0.615-2.969 0.615-1.798 0-3.449-0.637-4.742-1.696zM12.4 14.894c-0.198-1.063-0.636-3.042-1.503-5.405 1.444-0.28 3.109-0.288 5.008 0.145-0.341 2.226-1.658 4.129-3.505 5.26z"},child:[]}]})(props);
}
/**
 * Dropbox icon from Themify Icons
 */
export function TfiDropbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.853 4.371l-5.296-3.454-3.057 2.538-3.046-2.538-5.307 3.454 3.1 2.476-3.099 2.482 3.444 2.243v1.533l4.917 2.939 4.926-2.938v-1.548l3.417-2.23-3.098-2.481 3.099-2.476zM11.627 2.157l3.52 2.296-2.232 1.782-3.56-2.19 2.272-1.888zM12 6.847l-3.5 2.159-3.5-2.159 3.5-2.154 3.5 2.154zM1.853 4.453l3.527-2.296 2.265 1.887-3.561 2.191-2.231-1.782zM1.852 9.245l2.232-1.789 3.562 2.198-2.266 1.89-3.528-2.299zM12.435 12.538l-3.925 2.343-3.917-2.342v-0.315l0.862 0.561 3.047-2.54 3.056 2.54 0.878-0.573v0.326zM15.148 9.246l-3.521 2.298-2.273-1.89 3.561-2.198 2.233 1.79z"},child:[]}]})(props);
}
/**
 * DropboxAlt icon from Themify Icons
 */
export function TfiDropboxAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.5 9.344l4.707 3.070 3.293-2.746-4.745-2.93z"},child:[]},{tag:"path",attr:{d:"M5.207 1.062l-4.707 3.071 3.255 2.605 4.745-2.927z"},child:[]},{tag:"path",attr:{d:"M16.5 4.133l-4.706-3.071-3.294 2.749 4.746 2.927z"},child:[]},{tag:"path",attr:{d:"M8.5 9.668l3.294 2.746 4.706-3.070-3.254-2.606z"},child:[]},{tag:"path",attr:{d:"M8.51 10.259l-3.303 2.739-1.413-0.924v1.035l4.716 2.829 4.717-2.829v-1.035l-1.414 0.924z"},child:[]}]})(props);
}
/**
 * Drupal icon from Themify Icons
 */
export function TfiDrupal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.563 16.5c-3.718 0-7.062-2.926-7.062-6.906 0-3.974 3.098-5.813 3.672-6.114 0.684-0.364 1.176-0.556 1.95-1.175 0.383-0.301 0.702-0.739 0.803-1.805 0.555 0.665 1.221 1.439 1.694 1.759 0.775 0.51 1.55 0.711 2.36 1.221 0.492 0.301 3.518 2.15 3.518 6.241 0 4.082-3.226 6.779-6.935 6.779zM14.030 9.903c-0.729 0-2.205 1.513-2.979 1.522-0.901 0.018-2.149-1.787-3.954-1.77-1.422 0.010-2.542 1.14-2.561 2.343-0.009 0.675 0.21 1.176 0.675 1.494 0.31 0.209 0.592 0.337 1.512 0.337 1.531 0 3.472-1.896 4.365-1.867 0.71 0.026 1.812 1.768 2.369 1.804 0.437 0.036 0.665-0.164 1.038-0.701 0.364-0.547 0.52-1.404 0.52-1.887 0-0.473-0.21-1.275-0.985-1.275zM11.917 14.741c-0.31 0.228-1.003 0.511-1.987 0.511s-1.448-0.21-1.758-0.447c-0.045-0.036-0.027-0.036-0.119-0.036-0.1 0-0.154 0.046-0.236 0.109-0.073 0.064-0.109 0.219 0 0.328 0.674 0.619 1.804 0.565 2.633 0.491 0.839-0.082 1.55-0.573 1.622-0.646 0.109-0.108 0.082-0.2 0.063-0.264-0.018-0.064-0.073-0.154-0.218-0.046zM11.424 13.184c-0.182-0.118-0.445-0.137-0.691-0.137-0.247 0-0.383-0.018-0.646 0.091-0.266 0.109-0.539 0.355-0.711 0.511-0.174 0.154-0.201 0.273-0.11 0.401 0.092 0.117 0.192 0.044 0.447-0.174 0.264-0.21 0.438-0.401 0.975-0.401s0.629 0.201 0.737 0.401c0.11 0.2 0.119 0.228 0.228 0.174 0.128-0.064 0.192-0.156 0.128-0.312-0.065-0.154-0.174-0.427-0.357-0.554z"},child:[]}]})(props);
}
/**
 * Email icon from Themify Icons
 */
export function TfiEmail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"},child:[]}]})(props);
}
/**
 * Envelope icon from Themify Icons
 */
export function TfiEnvelope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 0v17h13v-17h-13zM4.695 4l-1.408-3h10.426l-1.41 3h-7.608zM4.061 5h3.939v9h-4.002l-0.998 1.155v-12.414l1.061 2.259zM4.455 15h8.092l0.862 1h-9.816l0.862-1zM13.006 14h-4.006v-9h3.938l1.062-2.261v12.415l-0.994-1.154z"},child:[]}]})(props);
}
/**
 * Eraser icon from Themify Icons
 */
export function TfiEraser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.446 4.201l-5.196-3.001c-0.69-0.397-1.65-0.141-2.048 0.55l-6 10.393c-0.414 0.716-0.167 1.635 0.55 2.050l3.179 1.824 4.357-0.018 5.708-9.749c0.413-0.716 0.167-1.635-0.55-2.049zM7.713 15.001l-3.518 0.014-2.945-1.689c-0.239-0.139-0.321-0.444-0.183-0.684l2.75-4.764 6.027 3.48-2.131 3.643zM13.13 5.747l-2.781 4.75-6.032-3.483 2.75-4.764c0.089-0.154 0.256-0.25 0.434-0.25 0.088 0 0.172 0.022 0.249 0.066l5.196 3c0.239 0.139 0.321 0.445 0.184 0.681zM17 15v1h-7v-1h7z"},child:[]}]})(props);
}
/**
 * ExchangeVertical icon from Themify Icons
 */
export function TfiExchangeVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6 15.043v-7.043h-1v7.043l-3.646-3.646-0.707 0.707 4.853 4.853 4.854-4.854-0.707-0.707-3.647 3.647zM5.488 15.531h0.023l-0.011 0.012-0.012-0.012zM15.646 5.604l-3.646-3.647v7.096h-1v-7.096l-3.646 3.647-0.708-0.708 4.854-4.853 4.854 4.854-0.708 0.707z"},child:[]}]})(props);
}
/**
 * Export icon from Themify Icons
 */
export function TfiExport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M4.359 5.956l-0.718-0.697 4.859-5.005 4.859 5.005-0.718 0.696-3.641-3.75v10.767h-1v-10.767l-3.641 3.751zM16 9.030v6.47c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-6.475h-1v6.475c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-6.47h-1z"},child:[]}]})(props);
}
/**
 * Eye icon from Themify Icons
 */
export function TfiEye(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.965 8.817c-1.284-3.267-4.687-5.463-8.465-5.463s-7.181 2.196-8.465 5.463c-0.046 0.117-0.046 0.248 0 0.365 1.285 3.268 4.687 5.464 8.465 5.464s7.18-2.195 8.465-5.463c0.047-0.118 0.047-0.248 0-0.366zM8.5 13.646c-3.298 0-6.269-1.859-7.459-4.646 1.189-2.787 4.16-4.646 7.459-4.646s6.27 1.859 7.459 4.646c-1.19 2.786-4.161 4.646-7.459 4.646zM8.5 5.357c-2.009 0-3.643 1.634-3.643 3.643s1.634 3.643 3.644 3.643c2.008 0 3.643-1.634 3.643-3.643s-1.635-3.643-3.644-3.643zM8.5 11.643c-1.458 0-2.644-1.186-2.644-2.643s1.187-2.643 2.644-2.643c1.457 0 2.643 1.186 2.643 2.643s-1.185 2.643-2.643 2.643zM8.5 7.643c-0.748 0-1.357 0.609-1.357 1.357s0.609 1.357 1.357 1.357 1.357-0.609 1.357-1.357-0.609-1.357-1.357-1.357zM8.5 9.357c-0.197 0-0.357-0.16-0.357-0.357s0.16-0.357 0.357-0.357 0.357 0.16 0.357 0.357-0.16 0.357-0.357 0.357z"},child:[]}]})(props);
}
/**
 * FaceSad icon from Themify Icons
 */
export function TfiFaceSad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM13 13c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5zM4.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM10.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1z"},child:[]}]})(props);
}
/**
 * FaceSmile icon from Themify Icons
 */
export function TfiFaceSmile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM13 9c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5zM4.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM10.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1z"},child:[]}]})(props);
}
/**
 * Facebook icon from Themify Icons
 */
export function TfiFacebook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"},child:[]}]})(props);
}
/**
 * File icon from Themify Icons
 */
export function TfiFile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h6v5h5v10h-11z"},child:[]}]})(props);
}
/**
 * Files icon from Themify Icons
 */
export function TfiFiles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.497 0h-6.497v2.010h1v-1.010h5v4h4v8h-4.017v1h5.017v-9.818l-4.503-4.182zM13 1.832l2.335 2.168h-2.335v-2.168zM0 3v14h11v-9.818l-4.503-4.182h-6.497zM7 4.832l2.335 2.168h-2.335v-2.168zM1 16v-12h5v4h4v8h-9z"},child:[]}]})(props);
}
/**
 * Filter icon from Themify Icons
 */
export function TfiFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.54 0l6.46 9.229v7.771h3v-7.771l6.46-9.229h-15.92zM9 8.914v7.086h-1v-7.086l-5.54-7.914h12.080l-5.54 7.914z"},child:[]}]})(props);
}
/**
 * Flag icon from Themify Icons
 */
export function TfiFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 10.008v-9.238l-11.879 4.619 11.879 4.619zM12 8.547l-8.121-3.158 8.121-3.159v6.317zM15 0v17h-1v-17h1z"},child:[]}]})(props);
}
/**
 * FlagAlt icon from Themify Icons
 */
export function TfiFlagAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 0v17h-1v-17h1zM1.527 0.976h11.473v8h-11.49l2.911-3.952-2.894-4.048zM12 1.976h-8.528l2.185 3.056-2.168 2.944h8.511v-6z"},child:[]}]})(props);
}
/**
 * FlagAlt2 icon from Themify Icons
 */
export function TfiFlagAlt2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 0v17h-1v-17h1zM4.984 1h8v8h-4.984v2h-7v-8h3.984v-2zM7 9h-2v-5h-3v6h5v-1zM5.984 2v1h0.016v5h5.984v-6h-6z"},child:[]}]})(props);
}
/**
 * Flickr icon from Themify Icons
 */
export function TfiFlickr(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7.295 8.5c0 2.014-1.634 3.647-3.646 3.647-2.015 0-3.649-1.633-3.649-3.647s1.634-3.647 3.649-3.647c2.012 0 3.646 1.633 3.646 3.647zM17 8.5c0 2.014-1.634 3.647-3.649 3.647-2.012 0-3.646-1.634-3.646-3.647s1.634-3.647 3.646-3.647c2.015 0 3.649 1.633 3.649 3.647zM16 8.5c0-1.46-1.188-2.647-2.649-2.647-1.459 0-2.646 1.188-2.646 2.647s1.187 2.647 2.646 2.647c1.461 0 2.649-1.187 2.649-2.647z"},child:[]}]})(props);
}
/**
 * FlickrAlt icon from Themify Icons
 */
export function TfiFlickrAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0.5c-4.418 0-8 3.583-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.417-3.582-8-8-8zM5.433 10.979c-1.391 0-2.519-1.126-2.519-2.518 0-1.391 1.128-2.518 2.519-2.518s2.517 1.127 2.517 2.518c0 1.392-1.127 2.518-2.517 2.518zM11.75 10.979c-1.391 0-2.518-1.126-2.518-2.518 0-1.391 1.127-2.518 2.518-2.518s2.518 1.127 2.518 2.518c0 1.392-1.127 2.518-2.518 2.518z"},child:[]}]})(props);
}
/**
 * Folder icon from Themify Icons
 */
export function TfiFolder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8 4l-1.958-2h-6.042v15h17v-13h-9zM5.622 3l1.958 2h8.42v2.027l-15-0.026v-4.001h4.622zM1 16v-7.999l15 0.026v7.973h-15z"},child:[]}]})(props);
}
/**
 * Fullscreen icon from Themify Icons
 */
export function TfiFullscreen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z"},child:[]}]})(props);
}
/**
 * Gallery icon from Themify Icons
 */
export function TfiGallery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 10v-10h-13v13h13v-3zM1 1h11v8h-0.755l-2.564-3.319-1.159 1.214-2.248-3.881-3.576 5.986h-0.698v-8zM9.982 9h-7.119l2.398-4.014 2.064 3.564 1.275-1.337 1.382 1.787zM1 12v-2h11v2h-11zM17 3v13h-13v-1.984h1v0.984h11v-11h-2v-1h3z"},child:[]}]})(props);
}
/**
 * Game icon from Themify Icons
 */
export function TfiGame(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 3.988v-2.988h-1v2.988c-3.564 0.105-8 1.282-8 2.487v7.041c0 0.827 0.673 1.5 1.5 1.5h1.79l1.996-3.931c0.567 0.104 1.713 0.274 3.173 0.274 1.479 0 2.694-0.174 3.288-0.277l1.908 3.934h1.845c0.827 0 1.5-0.673 1.5-1.5v-7.041c0-1.205-4.437-2.383-8-2.487zM16 13.516c0 0.275-0.225 0.5-0.5 0.5h-1.218l-1.976-4.070-0.386 0.085c-0.015 0.003-1.515 0.329-3.462 0.329-1.941 0-3.315-0.323-3.329-0.327l-0.384-0.093-2.068 4.075h-1.177c-0.275 0-0.5-0.225-0.5-0.5v-6.915c0.502-0.437 3.38-1.518 7-1.611v0.011h1v-0.013c3.619 0.094 6.498 1.175 7 1.612v6.917zM5 7.020h0.998v1h-0.998v1.020h-1v-1.020h-1v-1h1v-1.020h1v1.020zM12.5 9.020c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.673 1.5 1.5 1.5zM12.5 7.020c0.275 0 0.5 0.225 0.5 0.5s-0.225 0.5-0.5 0.5-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5z"},child:[]}]})(props);
}
/**
 * Gift icon from Themify Icons
 */
export function TfiGift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7.839 5.611l-0.034 0.198 0.673-0.086c0.004 0 0.021-0.003 0.031-0.004l0.637 0.081-0.031-0.181c1.090-0.202 3.308-0.725 4.575-1.81 0.494-0.422 0.766-0.99 0.766-1.6s-0.272-1.178-0.766-1.601c-0.942-0.808-2.561-0.807-3.503 0-0.814 0.697-1.359 1.726-1.711 2.628-0.352-0.9-0.897-1.926-1.711-2.621-0.941-0.806-2.558-0.805-3.499 0-0.494 0.422-0.766 0.989-0.766 1.597 0 0.608 0.272 1.174 0.766 1.595 1.267 1.082 3.485 1.603 4.573 1.804zM10.837 1.368c0.291-0.249 0.681-0.386 1.101-0.386 0.419 0 0.811 0.137 1.101 0.386 0.269 0.229 0.416 0.528 0.416 0.841 0 0.312-0.147 0.61-0.416 0.84-1.032 0.883-2.929 1.355-3.966 1.558 0.245-0.888 0.783-2.399 1.764-3.239zM3.915 1.375c0.291-0.248 0.681-0.385 1.101-0.385 0.419 0 0.81 0.137 1.1 0.385 0.976 0.833 1.514 2.337 1.76 3.223-1.036-0.201-2.928-0.67-3.961-1.552-0.268-0.228-0.415-0.524-0.415-0.834 0-0.311 0.147-0.608 0.415-0.837zM17 6h-17v4h1v7h15v-7h1v-4zM6.976 7h3.006l1.066 5.843-1.648-0.685-1.301 1.205-1.123-6.363zM1 7h4.96l0.353 2h-5.313v-2zM15 16h-13v-6h4.49l0.942 5.343 2.176-2.015 2.752 1.145-0.815-4.473h3.455v6zM16 9h-4.638l-0.365-2h5.003v2z"},child:[]}]})(props);
}
/**
 * Github icon from Themify Icons
 */
export function TfiGithub(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.077 11.115c0 0.746-0.389 1.962-1.308 1.962-0.92 0-1.309-1.216-1.309-1.962 0-0.745 0.389-1.962 1.309-1.962 0.919 0 1.308 1.217 1.308 1.962zM5.231 9.153c-0.919 0-1.308 1.217-1.308 1.962 0 0.746 0.389 1.962 1.308 1.962 0.919 0 1.308-1.216 1.308-1.962 0-0.745-0.389-1.962-1.308-1.962zM17 9.317c0 1.135-0.112 2.34-0.623 3.382-1.349 2.728-5.057 2.993-7.713 2.993-2.697 0-6.63-0.234-8.030-2.993-0.522-1.032-0.634-2.247-0.634-3.382 0-1.492 0.409-2.901 1.39-4.045-0.184-0.562-0.276-1.155-0.276-1.738 0-0.766 0.173-1.531 0.521-2.227 1.614 0 2.646 0.705 3.872 1.665 1.032-0.245 2.094-0.357 3.157-0.357 0.96 0 1.931 0.103 2.861 0.327 1.216-0.95 2.247-1.635 3.841-1.635 0.348 0.695 0.521 1.461 0.521 2.227 0 0.583-0.092 1.165-0.276 1.717 0.981 1.154 1.389 2.574 1.389 4.066zM14.711 11.115c0-1.563-0.949-2.942-2.615-2.942-0.674 0-1.317 0.123-1.992 0.215-0.531 0.082-1.062 0.112-1.604 0.112s-1.073-0.030-1.604-0.112c-0.664-0.092-1.318-0.215-1.992-0.215-1.665 0-2.615 1.379-2.615 2.942 0 3.126 2.86 3.606 5.353 3.606h1.717c2.493 0.001 5.352-0.48 5.352-3.606z"},child:[]}]})(props);
}
/**
 * Google icon from Themify Icons
 */
export function TfiGoogle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 2.615v1.308h-2.615v2.616h-1.308v-2.616h-2.615v-1.308h2.615v-2.615h1.308v2.615h2.615zM10.39 12.78c0 1.175-0.561 2.125-1.43 2.881-1.175 1.012-2.779 1.339-4.291 1.339-1.91 0-4.669-0.817-4.669-3.187 0-0.48 0.164-0.951 0.379-1.38 0.908-1.838 3.748-2.309 5.577-2.36-0.336-0.439-0.653-0.949-0.653-1.522 0-0.337 0.121-0.562 0.225-0.878-0.246 0.030-0.48 0.051-0.715 0.051-1.982 0-3.698-1.461-3.698-3.515 0-1.941 1.501-3.596 3.36-4.004 0.624-0.134 1.266-0.205 1.91-0.205h4.466l-1.379 0.807h-1.381c1.013 0.633 1.523 1.87 1.523 3.014 0 2.707-2.289 2.911-2.289 4.26 0 1.318 3.065 1.839 3.065 4.699zM7.725 4.853c0-1.553-0.839-4.117-2.729-4.117-1.337 0-1.991 1.185-1.991 2.391 0 1.552 1.021 3.984 2.84 3.984 1.398-0.001 1.88-1.012 1.88-2.258zM8.95 13.659c0-1.43-1.34-2.227-2.381-2.953-0.174-0.020-0.338-0.020-0.512-0.020-1.674 0-4.168 0.531-4.168 2.656 0 1.961 2.207 2.718 3.842 2.718 1.522 0 3.219-0.613 3.219-2.401z"},child:[]}]})(props);
}
/**
 * HandDrag icon from Themify Icons
 */
export function TfiHandDrag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.963 5.6v5.844c0 0.777-0.383 1.241-0.663 1.579-0.234 0.284-0.356 0.443-0.356 0.694v1.783c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1.783c0-0.623 0.325-1.016 0.586-1.331 0.242-0.293 0.434-0.524 0.434-0.941v-5.845c0-0.312-0.268-0.606-0.551-0.606-0.329 0-0.399 0.051-0.402 0.053-0.066 0.089-0.064 0.569-0.063 0.956 0.001 0.189 0.002 0.4-0.002 0.632-0.004 0.274-0.213 0.478-0.504 0.493-0.274-0.002-0.496-0.225-0.496-0.5v-2.12c0-0.307-0.222-0.538-0.516-0.538-0.27 0-0.468 0.201-0.492 0.488v2.003c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0-2.011c0-0.003-0.002-0.006-0.002-0.010v-0.773c0-0.066-0.014-0.642-0.474-0.642-0.45 0-0.518 0.402-0.518 0.642v0.703c0 0.028-0.011 0.054-0.016 0.081v2.594c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0-2.684c-0.048-0.194-0.188-0.39-0.466-0.39-0.286 0-0.527 0.261-0.527 0.57v3.35c0 0.007-0.006 0.013-0.006 0.020v1.101c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.834c-0.176-0.064-0.431-0.116-0.577-0.083-0.118 0.023-0.237 0.127-0.311 0.271-0.059 0.113-0.138 0.347-0.009 0.637l1.698 3.717c0.016 0.035 0.027 0.071 0.035 0.108 0.056 0.275 0.312 0.456 0.588 0.431 0.139-0.018 0.281 0.030 0.387 0.125 0.105 0.095 0.166 0.23 0.166 0.372v1.744c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1.286c-0.536-0.139-0.969-0.561-1.107-1.125l-1.679-3.675c-0.22-0.496-0.207-1.043 0.032-1.507 0.214-0.413 0.588-0.709 1.001-0.793 0.21-0.043 0.494-0.031 0.775 0.026v-0.72c0-0.010 0.005-0.019 0.006-0.029v-1.85c0-0.866 0.686-1.57 1.527-1.57 0.2 0 0.392 0.040 0.566 0.112 0.199-0.644 0.733-1.057 1.433-1.057 0.668 0 1.192 0.422 1.389 1.061 0.178-0.075 0.373-0.116 0.579-0.116 0.689 0 1.258 0.444 1.447 1.072 0.183-0.040 0.369-0.049 0.536-0.049 0.842 0 1.552 0.735 1.552 1.606z"},child:[]}]})(props);
}
/**
 * HandOpen icon from Themify Icons
 */
export function TfiHandOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.242 5.42l-1.188 8.064c-0.118 0.612-0.389 0.88-0.586 1.076-0.191 0.19-0.318 0.316-0.318 0.933v1.007c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1.007c0-0.955 0.278-1.309 0.614-1.642 0.155-0.154 0.248-0.247 0.304-0.534l1.185-8.039c0.018-0.123 0.051-0.54-0.273-0.585-0.112-0.016-0.203 0.002-0.275 0.057-0.096 0.071-0.164 0.209-0.188 0.378l-0.497 3.316c-0.025 0.171-0.138 0.316-0.296 0.385s-0.341 0.050-0.484-0.049c-0.050 0.008-0.134-0.023-0.218-0.078-0.152-0.097-0.239-0.268-0.229-0.448l0.285-5.286c0.023-0.278-0.17-0.509-0.432-0.532-0.127-0.012-0.249 0.028-0.346 0.109-0.098 0.082-0.156 0.196-0.167 0.321l-0.463 4.782c-0.026 0.269-0.239 0.464-0.531 0.451-0.081-0.005-0.163-0.010-0.246-0.011-0.269-0.006-0.485-0.223-0.49-0.491l-0.115-6.119c0-0.268-0.21-0.478-0.468-0.478-0.258 0-0.468 0.21-0.468 0.468l-0.118 6.586c-0.004 0.19-0.114 0.362-0.286 0.443-0.062 0.030-0.122 0.060-0.179 0.092-0.147 0.084-0.326 0.087-0.476 0.008-0.15-0.078-0.251-0.227-0.268-0.395l-0.515-5.329c-0.011-0.131-0.070-0.245-0.166-0.326-0.097-0.081-0.228-0.118-0.345-0.109-0.126 0.011-0.239 0.070-0.32 0.167-0.080 0.096-0.119 0.218-0.108 0.343l0.503 7.097c0.016 0.218-0.113 0.422-0.317 0.501-0.206 0.080-0.438 0.017-0.573-0.155l-1.551-1.953c-0.203-0.34-0.562-0.435-0.84-0.274-0.136 0.079-0.233 0.205-0.273 0.356-0.040 0.15-0.020 0.308 0.060 0.443l3.529 6.087c0.080 0.139 0.211 0.236 0.367 0.274 0.224 0.054 0.382 0.255 0.382 0.486v0.69c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.35c-0.254-0.137-0.465-0.341-0.614-0.598l-3.53-6.087c-0.213-0.366-0.27-0.793-0.16-1.202 0.108-0.41 0.371-0.752 0.739-0.965 0.758-0.437 1.728-0.177 2.164 0.579l0.506 0.634-0.389-5.483c-0.034-0.382 0.086-0.764 0.338-1.066 0.252-0.3 0.608-0.485 0.999-0.52 0.397-0.036 0.775 0.087 1.077 0.34 0.146 0.123 0.263 0.269 0.35 0.431l0.014-0.753c0-0.802 0.659-1.46 1.468-1.46s1.468 0.659 1.468 1.469l0.014 0.746c0.088-0.163 0.206-0.31 0.353-0.434 0.303-0.254 0.688-0.376 1.078-0.34 0.811 0.071 1.412 0.788 1.341 1.598l-0.053 0.978c0.026-0.023 0.054-0.045 0.081-0.066 0.288-0.216 0.637-0.3 1.018-0.248 0.785 0.109 1.248 0.816 1.122 1.717z"},child:[]}]})(props);
}
/**
 * HandPointDown icon from Themify Icons
 */
export function TfiHandPointDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.753 11.303c-0.956 0.577-1.702-0.173-1.982-0.454l-0.26-0.282v4.898c0 0.847-0.675 1.535-1.505 1.535s-1.505-0.688-1.505-1.535v-2.325c-0.162 0.059-0.336 0.091-0.517 0.091-0.79 0-1.44-0.629-1.496-1.424-0.158 0.059-0.328 0.090-0.505 0.090-0.83 0-1.505-0.689-1.505-1.537v-0.136c-0.145 0.049-0.3 0.075-0.463 0.075-0.835 0-1.515-0.689-1.515-1.535v-3.186c0-0.67 0.322-1.555 0.606-2.335 0.185-0.507 0.394-1.082 0.394-1.309v-0.856c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.855c0 0.404-0.2 0.955-0.454 1.652-0.256 0.703-0.546 1.499-0.546 1.993v3.186c0 0.29 0.236 0.535 0.516 0.535 0.292 0 0.454-0.262 0.463-0.52 0.010-0.27 0.231-0.482 0.5-0.482 0.003 0 0.006 0 0.009 0 0.272 0.005 0.491 0.228 0.491 0.5v1.562c0 0.296 0.227 0.537 0.505 0.537 0.264 0 0.484-0.22 0.502-0.5 0.016-0.269 0.235-0.47 0.514-0.468 0.27 0.009 0.484 0.23 0.484 0.5v1.268c0 0.295 0.225 0.535 0.5 0.535 0.259 0 0.487-0.202 0.521-0.461 0.034-0.261 0.267-0.464 0.528-0.435 0.263 0.017 0.468 0.235 0.468 0.499v3.631c0 0.295 0.227 0.535 0.505 0.535s0.505-0.24 0.505-0.535v-6.18c0-0.206 0.126-0.391 0.318-0.466 0.189-0.075 0.409-0.024 0.55 0.127l1.114 1.211c0.459 0.462 0.607 0.373 0.748 0.287 0.246-0.146 0.331-0.484 0.188-0.74l-3.288-7.098c-0.053-0.091-0.164-0.178-0.297-0.211-0.222-0.056-0.378-0.255-0.378-0.485v-0.832c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.499c0.233 0.134 0.428 0.33 0.564 0.574l3.288 7.098c0.393 0.694 0.148 1.631-0.565 2.054z"},child:[]}]})(props);
}
/**
 * HandPointLeft icon from Themify Icons
 */
export function TfiHandPointLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.422 13.5c0 0.276-0.224 0.5-0.5 0.5h-0.855c-0.227 0-0.802 0.209-1.309 0.394-0.781 0.284-1.666 0.606-2.336 0.606h-3.185c-0.847 0-1.536-0.68-1.536-1.516 0-0.163 0.026-0.318 0.075-0.463h-0.135c-0.847 0-1.536-0.676-1.536-1.506 0-0.177 0.031-0.346 0.089-0.504-0.795-0.055-1.424-0.704-1.424-1.495 0-0.181 0.032-0.355 0.091-0.518h-2.326c-0.847 0-1.535-0.675-1.535-1.504 0-0.83 0.688-1.506 1.535-1.506h4.897l-0.266-0.245c-0.296-0.295-1.043-1.040-0.468-1.998 0.423-0.71 1.36-0.955 2.088-0.547l7.028 3.252c0.268 0.149 0.471 0.348 0.607 0.583h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.831c-0.229 0-0.429-0.155-0.485-0.378-0.034-0.133-0.121-0.245-0.245-0.315l-7.028-3.251c-0.294-0.164-0.627-0.080-0.775 0.169-0.086 0.144-0.174 0.29 0.3 0.764l1.196 1.098c0.152 0.14 0.202 0.357 0.127 0.55s-0.26 0.318-0.466 0.318h-6.18c-0.294 0-0.534 0.227-0.534 0.506 0 0.278 0.24 0.504 0.535 0.504h3.631c0.264 0 0.482 0.204 0.499 0.468 0.017 0.263-0.173 0.494-0.434 0.528-0.259 0.033-0.461 0.263-0.461 0.522 0 0.275 0.24 0.5 0.535 0.5h1.268c0.27 0 0.492 0.215 0.5 0.484 0.008 0.271-0.2 0.498-0.469 0.515-0.28 0.018-0.499 0.237-0.499 0.501 0 0.279 0.241 0.506 0.536 0.506h1.562c0.273 0 0.495 0.219 0.5 0.491s-0.21 0.499-0.482 0.509c-0.258 0.009-0.52 0.171-0.52 0.463 0 0.279 0.246 0.515 0.536 0.515h3.185c0.494 0 1.291-0.29 1.994-0.546 0.696-0.254 1.247-0.454 1.65-0.454h0.855c0.277 0 0.501 0.224 0.501 0.5z"},child:[]}]})(props);
}
/**
 * HandPointRight icon from Themify Icons
 */
export function TfiHandPointRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.922 7.494c0 0.829-0.688 1.504-1.535 1.504h-2.325c0.059 0.162 0.091 0.337 0.091 0.518 0 0.791-0.629 1.44-1.424 1.496 0.058 0.158 0.089 0.327 0.089 0.504 0 0.83-0.689 1.506-1.536 1.506h-0.136c0.049 0.145 0.075 0.3 0.075 0.463 0 0.835-0.69 1.515-1.536 1.515h-3.185c-0.67 0-1.555-0.322-2.336-0.606-0.507-0.185-1.081-0.394-1.309-0.394h-0.855c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.855c0.403 0 0.954 0.2 1.65 0.454 0.704 0.256 1.501 0.546 1.995 0.546h3.185c0.291 0 0.536-0.236 0.536-0.516 0-0.292-0.262-0.454-0.52-0.463-0.272-0.010-0.487-0.236-0.482-0.509s0.228-0.491 0.5-0.491h1.562c0.296 0 0.536-0.227 0.536-0.506 0-0.264-0.219-0.483-0.498-0.501-0.271-0.017-0.478-0.244-0.47-0.515 0.009-0.27 0.229-0.484 0.5-0.484h1.268c0.295 0 0.535-0.225 0.535-0.5 0-0.259-0.203-0.488-0.462-0.521-0.261-0.034-0.451-0.266-0.434-0.528 0.018-0.264 0.235-0.468 0.499-0.468h3.631c0.295 0 0.535-0.226 0.535-0.504 0-0.279-0.24-0.506-0.535-0.506h-6.18c-0.206 0-0.391-0.126-0.466-0.318s-0.023-0.41 0.128-0.55l1.211-1.113c0.46-0.459 0.372-0.605 0.287-0.748-0.148-0.249-0.48-0.335-0.742-0.188l-7.097 3.287c-0.089 0.052-0.176 0.164-0.211 0.297-0.055 0.223-0.254 0.378-0.484 0.378h-0.832c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.499c0.134-0.233 0.329-0.428 0.573-0.564l7.098-3.288c0.693-0.39 1.632-0.146 2.055 0.565 0.574 0.957-0.173 1.702-0.453 1.982l-0.282 0.26h4.897c0.846 0 1.535 0.676 1.535 1.506z"},child:[]}]})(props);
}
/**
 * HandPointUp icon from Themify Icons
 */
export function TfiHandPointUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.5 8.236v3.186c0 0.67-0.322 1.555-0.606 2.335-0.185 0.507-0.394 1.082-0.394 1.31v0.855c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.855c0-0.404 0.201-0.955 0.454-1.652 0.256-0.702 0.546-1.498 0.546-1.992v-3.187c0-0.29-0.236-0.535-0.516-0.535-0.292 0-0.454 0.262-0.463 0.52-0.009 0.272-0.209 0.507-0.508 0.482-0.272-0.005-0.491-0.228-0.491-0.5v-1.562c0-0.296-0.227-0.537-0.505-0.537-0.264 0-0.484 0.22-0.502 0.5-0.017 0.27-0.228 0.485-0.515 0.468-0.27-0.009-0.484-0.23-0.484-0.5v-1.267c0-0.295-0.224-0.535-0.5-0.535-0.259 0-0.487 0.202-0.521 0.461-0.034 0.26-0.262 0.461-0.528 0.434-0.263-0.017-0.468-0.235-0.468-0.499v-3.631c0-0.295-0.227-0.535-0.505-0.535s-0.505 0.24-0.505 0.535v6.18c0 0.206-0.126 0.391-0.318 0.466-0.191 0.075-0.41 0.024-0.55-0.127l-1.114-1.211c-0.459-0.462-0.607-0.374-0.748-0.287-0.246 0.146-0.331 0.484-0.188 0.74l3.288 7.098c0.053 0.091 0.165 0.178 0.297 0.211 0.223 0.057 0.378 0.256 0.378 0.485v0.832c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.499c-0.233-0.134-0.427-0.33-0.565-0.574l-3.287-7.098c-0.393-0.694-0.147-1.631 0.565-2.054 0.96-0.575 1.703 0.173 1.982 0.454l0.26 0.282v-4.898c0-0.847 0.676-1.535 1.505-1.535s1.505 0.688 1.505 1.535v2.325c0.162-0.058 0.336-0.090 0.517-0.090 0.791 0 1.44 0.629 1.496 1.424 0.158-0.059 0.328-0.090 0.505-0.090 0.83 0 1.505 0.689 1.505 1.537v0.136c0.145-0.049 0.3-0.075 0.463-0.075 0.835-0.001 1.515 0.688 1.515 1.534z"},child:[]}]})(props);
}
/**
 * HandStop icon from Themify Icons
 */
export function TfiHandStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 4.403v7.258c0 0.856-0.337 1.867-0.635 2.758-0.179 0.538-0.365 1.093-0.365 1.331v0.75c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.75c0-0.4 0.184-0.95 0.417-1.647 0.259-0.78 0.583-1.749 0.583-2.442v-7.258c0-0.275-0.206-0.483-0.478-0.483-0.278 0-0.512 0.21-0.521 0.468 0 0.003-0.002 0.006-0.002 0.009l0.001 3.86c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5l-0.001-4.086c0-0.005 0.003-0.009 0.003-0.015v-1.406c0-0.232-0.14-0.483-0.446-0.483-0.274 0-0.528 0.21-0.544 0.45-0.001 0.013-0.010 0.025-0.012 0.039v4.48c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.223-0.5-0.5v-4.896c0-0.022 0.010-0.042 0.013-0.063v-0.795c0-0.261-0.241-0.482-0.525-0.482-0.279 0-0.497 0.211-0.497 0.482v0.866c0.002 0.015 0.009 0.028 0.009 0.044v0 4.896c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0-4.592c0-0.004-0.003-0.007-0.004-0.011-0.033-0.238-0.248-0.418-0.5-0.418-0.279 0-0.505 0.217-0.505 0.483v5.705c0 0.208-0.128 0.394-0.322 0.467-0.191 0.073-0.413 0.020-0.551-0.135l-1.117-1.254c-0.393-0.459-0.656-0.311-0.753-0.255-0.116 0.065-0.199 0.171-0.232 0.297-0.032 0.121-0.014 0.248 0.050 0.357l3.292 7.009c0.046 0.073 0.158 0.155 0.294 0.188 0.225 0.054 0.382 0.255 0.382 0.486v0.885c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.546c-0.231-0.128-0.423-0.314-0.56-0.545l-3.291-7.010c-0.18-0.299-0.235-0.698-0.134-1.081 0.103-0.387 0.354-0.71 0.706-0.91 0.676-0.381 1.422-0.206 2 0.468l0.237 0.266v-4.392c0-0.818 0.675-1.483 1.505-1.483 0.174 0 0.343 0.030 0.5 0.085 0.067-0.757 0.71-1.352 1.491-1.352 0.801 0 1.459 0.604 1.521 1.367 0.171-0.064 0.356-0.1 0.548-0.1 0.811 0 1.446 0.651 1.446 1.483v0.262c0.163-0.059 0.338-0.091 0.52-0.091 0.828-0.001 1.477 0.65 1.477 1.482z"},child:[]}]})(props);
}
/**
 * Harddrive icon from Themify Icons
 */
export function TfiHarddrive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.134 2.996h-11.266l-2.868 4.374v6.634h17v-6.569l-2.866-4.439zM3.409 3.996h10.18l1.942 3.008h-14.094l1.972-3.008zM1 13.004v-5h15v5h-15zM13.5 9.004c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5zM13.5 11.004c-0.275 0-0.5-0.225-0.5-0.5s0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5-0.225 0.5-0.5 0.5z"},child:[]}]})(props);
}
/**
 * Harddrives icon from Themify Icons
 */
export function TfiHarddrives(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.5 12.5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5zM13.5 14.5c-0.275 0-0.5-0.225-0.5-0.5s0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5-0.225 0.5-0.5 0.5zM17 3.15l-2.923-3.15h-11.151l-2.926 3.087v6.433h0.936l-0.936 1.172v6.308h17v-6.26l-1.046-1.22h1.046v-6.37zM3.355 1h10.286l1.854 2h-14.035l1.895-2zM1 16v-4h15v4h-15zM15.906 11h-14.873l1.181-1.48h12.424l1.268 1.48zM1 8.52v-4.52h15v4.52h-15zM13.5 5c-0.827 0-1.5 0.673-1.5 1.5 0 0.826 0.673 1.499 1.5 1.499s1.5-0.673 1.5-1.499c0-0.827-0.673-1.5-1.5-1.5zM13.5 6.999c-0.275 0-0.5-0.224-0.5-0.499s0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5-0.225 0.499-0.5 0.499z"},child:[]}]})(props);
}
/**
 * Headphone icon from Themify Icons
 */
export function TfiHeadphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.981 8.085c-0.192-4.493-3.469-8.085-7.481-8.085s-7.289 3.592-7.481 8.085c-0.59 0.201-1.019 0.756-1.019 1.415v4c0 0.827 0.67 1.5 1.494 1.5h1.506v-1h1v-5h-1v-1h-0.978c0.225-3.902 3.040-7 6.478-7s6.253 3.098 6.478 7h-0.978v1h-1v5h1v1h1.506c0.824 0 1.494-0.673 1.494-1.5v-4c0-0.659-0.429-1.214-1.019-1.415zM2 14h-0.506c-0.272 0-0.494-0.225-0.494-0.5v-4c0-0.275 0.222-0.5 0.494-0.5h0.506v5zM16 13.5c0 0.275-0.222 0.5-0.494 0.5h-0.506v-5h0.506c0.272 0 0.494 0.225 0.494 0.5v4z"},child:[]}]})(props);
}
/**
 * HeadphoneAlt icon from Themify Icons
 */
export function TfiHeadphoneAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.668 6.017c-0.957-3.557-3.863-6.017-7.168-6.017-3.295 0-6.212 2.464-7.168 6.017-0.747 0.082-1.332 0.712-1.332 1.483v4c0 0.625 0.382 1.16 0.924 1.385 0.194 1.747 1.663 3.115 3.461 3.115h2.707c0.207 0.581 0.757 1 1.408 1h3c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-3c-0.651 0-1.201 0.419-1.408 1h-2.707c-1.208 0-2.217-0.86-2.449-2h1.064v-1h1v-5h-1v-1h-0.606c0.913-2.961 3.352-5 6.106-5 2.762 0 5.193 2.037 6.106 5h-0.606v1h-1v5h1v1h1.506c0.824 0 1.494-0.673 1.494-1.5v-4c0-0.771-0.585-1.401-1.332-1.483zM8.5 15h3c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-3c-0.275 0-0.5-0.224-0.5-0.5s0.225-0.5 0.5-0.5zM2 12h-0.506c-0.272 0-0.494-0.224-0.494-0.5v-4c0-0.276 0.222-0.5 0.494-0.5h0.506v5zM16 11.5c0 0.276-0.222 0.5-0.494 0.5h-0.506v-5h0.506c0.272 0 0.494 0.224 0.494 0.5v4z"},child:[]}]})(props);
}
/**
 * Heart icon from Themify Icons
 */
export function TfiHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.5 0.658c-1.739 0-3.251 0.992-4 2.439-0.749-1.447-2.261-2.439-4-2.439-2.481 0-4.5 2.019-4.5 4.5 0 0.343 0.048 0.699 0.154 1.118l0.109 0.351c1.432 4.354 7.659 9.393 7.924 9.604l0.313 0.252 0.313-0.252c0.282-0.227 6.926-5.598 7.927-9.614l0.112-0.368c0.101-0.402 0.148-0.749 0.148-1.091 0-2.481-2.019-4.5-4.5-4.5zM15.889 5.98l-0.113 0.37c-0.809 3.246-5.946 7.727-7.276 8.843-1.282-1.083-6.122-5.337-7.285-8.872l-0.1-0.316c-0.077-0.311-0.115-0.588-0.115-0.847 0-1.93 1.57-3.5 3.5-3.5s3.5 1.571 3.5 3.5v0.252h1v-0.252c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 0.258-0.038 0.527-0.111 0.822z"},child:[]}]})(props);
}
/**
 * HeartBroken icon from Themify Icons
 */
export function TfiHeartBroken(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.153 6.276c-0.105-0.419-0.153-0.775-0.153-1.118 0-2.481 2.019-4.5 4.5-4.5 1.739 0 3.251 0.992 4 2.439 0.749-1.447 2.261-2.439 4-2.439 2.481 0 4.5 2.019 4.5 4.5 0 0.342-0.047 0.688-0.147 1.091l-0.113 0.368c-0.081 0.331-0.228 0.721-0.453 1.199l-0.904-0.426c0.196-0.418 0.322-0.749 0.395-1.041l0.112-0.369c0.073-0.295 0.11-0.564 0.11-0.822 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.571-3.5 3.5h-1c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.571-3.5 3.5c0 0.259 0.038 0.536 0.116 0.847l0.1 0.316c0.094 0.287 0.235 0.618 0.441 1.033l-0.896 0.446c-0.228-0.46-0.386-0.833-0.498-1.173l-0.11-0.351zM8.499 15.211c-0.806-0.633-3.102-2.533-4.976-5.013l-0.797 0.604c2.394 3.167 5.354 5.352 5.478 5.443l0.298 0.218 0.296-0.22c0.129-0.095 3.187-2.374 5.536-5.438l-0.793-0.609c-1.848 2.409-4.219 4.366-5.042 5.015zM14.172 7.415l-2.832 2-2.832-2-2.833 2-2.837-1.999-3.126 2.202 0.576 0.818 2.55-1.798 2.837 2.001 2.833-2 2.832 2 2.832-2 2.539 1.796 0.578-0.816-3.117-2.204z"},child:[]}]})(props);
}
/**
 * Help icon from Themify Icons
 */
export function TfiHelp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.311 14.831c0 0.898-0.73 1.628-1.629 1.628-0.902 0-1.631-0.73-1.631-1.628 0-0.9 0.729-1.63 1.631-1.63 0.898 0 1.629 0.73 1.629 1.63zM11.668 2.373c-0.512-0.645-1.444-1.414-2.983-1.414-4.098 0-4.245 3.758-4.246 3.796l1 0.026c0.003-0.115 0.11-2.822 3.246-2.822 1.14 0 1.825 0.563 2.199 1.035 0.555 0.7 0.7 1.508 0.624 1.833-0.291 1.229-1.011 1.877-1.773 2.563-0.935 0.841-1.9 1.71-1.9 3.558h1c0-1.402 0.692-2.026 1.569-2.815 0.804-0.724 1.715-1.544 2.077-3.078 0.149-0.634-0.083-1.76-0.813-2.682z"},child:[]}]})(props);
}
/**
 * HelpAlt icon from Themify Icons
 */
export function TfiHelpAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM9.658 12.219c0 0.568-0.462 1.031-1.031 1.031-0.571 0-1.033-0.463-1.033-1.031 0-0.57 0.462-1.032 1.033-1.032 0.569 0 1.031 0.461 1.031 1.032zM10.662 4.215c0.448 0.565 0.674 1.328 0.55 1.855-0.243 1.027-0.842 1.567-1.371 2.043-0.543 0.489-0.934 0.84-0.934 1.647h-1c0-1.251 0.671-1.856 1.264-2.39 0.461-0.415 0.896-0.807 1.066-1.529 0.034-0.143-0.039-0.6-0.36-1.005-0.307-0.389-0.728-0.586-1.248-0.586-1.779 0-1.869 1.444-1.873 1.609l-1-0.027c0.024-0.893 0.655-2.582 2.873-2.582 0.818 0 1.539 0.343 2.033 0.965z"},child:[]}]})(props);
}
/**
 * Home icon from Themify Icons
 */
export function TfiHome(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 16h-3v-6h-5v6h-3v-9h-1v10h13v-10h-1v9zM7 16v-5h3v5h-3zM16.796 6.473l-0.592 0.807-7.704-5.66-7.704 5.658-0.592-0.806 8.296-6.092 8.296 6.093z"},child:[]}]})(props);
}
/**
 * Html5 icon from Themify Icons
 */
export function TfiHtml5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.54 0.5l-1.28 14.379-5.78 1.621-5.74-1.621-1.28-14.379h14.080zM12.92 3.439h-8.84l0.47 5.34h6.121l-0.222 2.279-1.969 0.532-1.96-0.531-0.13-1.399h-1.749l0.22 2.779 3.62 1h0.039v-0.010l3.591-0.99 0.5-5.44h-6.441l-0.15-1.81h6.74l0.16-1.75z"},child:[]}]})(props);
}
/**
 * Hummer icon from Themify Icons
 */
export function TfiHummer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 4h5.625l-3.609-4h-7.016v4h4v3.723h-1.125v9.277h3.25v-9.277h-1.125v-3.723zM5 1h5.571l1.805 2h-7.376v-2zM9.125 16h-1.25v-7.277h1.25v7.277z"},child:[]}]})(props);
}
/**
 * IdBadge icon from Themify Icons
 */
export function TfiIdBadge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 3v12h17v-12h-17zM16 14h-15v-10h15v10zM2.562 13.511l-1-0.022c0.033-1.43 1.398-2.652 3.309-3.017v-0.326c-0.248-0.259-0.425-0.61-0.545-0.923-0.162-0.116-0.302-0.294-0.399-0.516-0.185-0.41-0.153-0.821 0.063-1.068-0.004-0.074-0.006-0.147-0.006-0.217l-0.002-0.184c-0.006-0.537-0.016-1.42 0.929-1.584 0.194-0.339 0.483-0.627 1.179-0.651 1.123-0.035 1.916 0.378 2.185 1.151 0.091 0.265 0.006 0.485-0.056 0.645-0.059 0.152-0.115 0.295-0.082 0.564 0.013 0.107 0.011 0.212 0.003 0.312 0.175 0.237 0.211 0.597 0.082 0.975-0.095 0.273-0.249 0.484-0.434 0.608-0.111 0.287-0.27 0.604-0.487 0.845v0.377c1.909 0.375 3.228 1.571 3.261 3.008l-1 0.023c-0.023-1.021-1.21-1.908-2.823-2.109l-0.438-0.055v-1.709l0.2-0.15c0.106-0.080 0.271-0.321 0.415-0.761l0.135-0.344 0.074-0.631c0.014-0.106 0.027-0.207 0.019-0.268-0.062-0.52 0.066-0.85 0.142-1.046 0.005-0.014 0.009-0.023 0.012-0.031-0.21-0.396-0.879-0.413-1.171-0.406-0.277 0.011-0.297 0.050-0.351 0.153-0.068 0.132-0.229 0.442-0.637 0.478-0.092 0.008-0.121 0.027-0.121 0.027-0.041 0.064-0.038 0.367-0.036 0.568l0.001 0.195c0 0.141 0.010 0.292 0.029 0.446l0.070 0.573 0.12 0.021 0.003 0.248c0.154 0.466 0.339 0.721 0.451 0.798l0.215 0.149v1.687l-0.442 0.052c-1.612 0.189-2.844 1.098-2.867 2.115zM15 8h-5v-1h5v1zM14 10h-4v-1h4v1z"},child:[]}]})(props);
}
/**
 * Image icon from Themify Icons
 */
export function TfiImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 1v15h15v-15h-15zM15 15h-13v-2h13v2zM2 12v-10h13v10h-13zM14.203 10.165l-0.697 0.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-0.826-0.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"},child:[]}]})(props);
}
/**
 * Import icon from Themify Icons
 */
export function TfiImport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 13.677l-4.853-4.83 0.705-0.709 3.648 3.631v-10.797h1v10.797l3.647-3.63 0.705 0.709-4.852 4.829zM16 9.030v6.47c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-6.475h-1v6.475c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-6.47h-1z"},child:[]}]})(props);
}
/**
 * Infinite icon from Themify Icons
 */
export function TfiInfinite(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 8c0 2.206-1.794 4-4 4-1.197 0-2.31-0.532-3.074-1.452l-0.002 0.001-0.014-0.018c-0.011-0.014-0.026-0.023-0.038-0.038l0.004-0.003-3.634-4.482c-0.569-0.64-1.386-1.008-2.242-1.008-1.654 0-3 1.346-3 3 0 1.654 1.346 3 3 3 0.915 0 1.769-0.41 2.342-1.125l0.009 0.007 0.817-1.012 0.778 0.628-0.823 1.019-0.010-0.008c-0.763 0.947-1.897 1.491-3.113 1.491-2.206 0-4-1.794-4-4 0-2.206 1.794-4 4-4 1.12 0 2.186 0.477 2.943 1.301l0.008-0.006 0.042 0.052 3.698 4.56c0.573 0.693 1.409 1.093 2.309 1.093 1.654 0 3-1.346 3-3 0-1.654-1.346-3-3-3-0.846 0-1.65 0.362-2.22 0.989l-0.948 1.175-0.778-0.628 0.948-1.175-0.004-0.003c0.76-0.863 1.855-1.358 3.002-1.358 2.206 0 4 1.794 4 4z"},child:[]}]})(props);
}
/**
 * Info icon from Themify Icons
 */
export function TfiInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.8 14.276v1h-4.6v-1h1.8v-7.431h-1.75v-1h2.75v8.431h1.8zM7.988 4.045c0.848 0 1.532-0.686 1.532-1.532 0-0.847-0.685-1.534-1.532-1.534-0.849 0-1.534 0.687-1.534 1.534 0 0.846 0.686 1.532 1.534 1.532z"},child:[]}]})(props);
}
/**
 * InfoAlt icon from Themify Icons
 */
export function TfiInfoAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM9 12.369h0.979v1h-2.958v-1h0.979v-4.42h-0.946v-1h1.946v5.42zM7.185 4.986c0-0.545 0.441-0.986 0.986-0.986s0.985 0.441 0.985 0.986c0 0.543-0.44 0.984-0.985 0.984s-0.986-0.441-0.986-0.984z"},child:[]}]})(props);
}
/**
 * InkPen icon from Themify Icons
 */
export function TfiInkPen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 0v6.499l5.466 9.499 5.534-9.498v-6.5h-11zM8.471 14h0.002l-0.001 0.002-0.001-0.002zM8.5 6c-0.552 0-1-0.449-1-1s0.448-1 1-1 1 0.449 1 1-0.448 1-1 1zM13 6.23l-4 6.866v-6.167c0.86-0.223 1.5-1 1.5-1.929 0-1.103-0.897-2-2-2s-2 0.897-2 2c0 0.929 0.64 1.706 1.5 1.929v6.254l-4-6.952v-5.231h9v5.23z"},child:[]}]})(props);
}
/**
 * Instagram icon from Themify Icons
 */
export function TfiInstagram(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z"},child:[]}]})(props);
}
/**
 * Italic icon from Themify Icons
 */
export function TfiItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.895 2.014l-5.691 12.986h0.796v1h-3v-1h1.111l5.691-12.986h-0.802v-1h3v1h-1.105z"},child:[]}]})(props);
}
/**
 * Joomla icon from Themify Icons
 */
export function TfiJoomla(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.979 12.011l-1.573 1.583-0.312 0.312c-0.917 0.906-2.198 1.219-3.364 0.927-0.22 0.959-1.074 1.667-2.094 1.667-1.177 0-2.136-0.959-2.136-2.146 0-1.009 0.698-1.864 1.646-2.082-0.302-1.178 0.010-2.47 0.927-3.386l0.125-0.125 1.573 1.584-0.114 0.114c-0.521 0.51-0.51 1.343 0 1.863 0.51 0.511 1.344 0.511 1.854 0l0.313-0.312 1.573-1.584 1.677-1.666 1.573 1.584-1.668 1.667zM8.219 3.365l-1.583 1.582-0.126-0.125c-0.51-0.51-1.344-0.51-1.854 0-0.51 0.511-0.51 1.355 0 1.865l3.552 3.552-1.572 1.583-1.677-1.667-1.573-1.582-0.313-0.312c-0.959-0.948-1.25-2.313-0.886-3.532-0.958-0.208-1.666-1.062-1.666-2.083 0-1.188 0.959-2.146 2.136-2.146 1.073 0 1.948 0.781 2.114 1.792 1.156-0.271 2.417 0.053 3.323 0.947l0.125 0.126zM14.625 4.771c0.344 1.197 0.041 2.541-0.906 3.489l-0.125 0.125-1.573-1.584 0.125-0.124c0.51-0.511 0.51-1.345 0-1.855-0.51-0.51-1.344-0.51-1.854 0l-3.563 3.564-1.583-1.584 1.677-1.667 1.583-1.582 0.302-0.313c0.948-0.947 2.302-1.25 3.511-0.895 0.145-1.043 1.041-1.845 2.125-1.845 1.177 0 2.136 0.959 2.136 2.146-0.001 1.083-0.813 1.979-1.855 2.125zM14.364 16.5c-1.041 0-1.906-0.739-2.104-1.719-1.208 0.374-2.594 0.084-3.552-0.875l-0.114-0.125 1.573-1.583 0.125 0.124c0.51 0.511 1.344 0.511 1.854 0 0.51-0.51 0.51-1.343 0-1.854l-0.312-0.313-3.251-3.249 1.583-1.584 3.25 3.251 0.303 0.312c0.906 0.906 1.229 2.188 0.937 3.354 1.042 0.146 1.844 1.032 1.844 2.114 0 1.188-0.958 2.147-2.136 2.147z"},child:[]}]})(props);
}
/**
 * Jsfiddle icon from Themify Icons
 */
export function TfiJsfiddle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 10.867c0 1.711-1.414 3.102-3.148 3.102-0.062 0-0.117-0.008-0.172-0.008h-9.508c-1.75-0.102-3.172-1.438-3.172-3.172 0-1.164 0.633-2.18 1.578-2.734-0.062-0.203-0.094-0.414-0.094-0.641 0-1.195 0.977-2.164 2.195-2.164 0.5 0 0.969 0.172 1.344 0.453 0.766-1.578 2.391-2.672 4.289-2.672 2.633 0 4.758 2.102 4.758 4.688 0 0.094-0.008 0.188-0.008 0.281 1.133 0.469 1.938 1.578 1.938 2.867zM6.438 12.141c0.766 0 1.32-0.242 1.875-0.773-0.227-0.281-0.477-0.555-0.711-0.836-0.32 0.312-0.672 0.508-1.125 0.508-0.555 0-1.031-0.367-1.031-0.945 0-0.57 0.477-0.945 1.016-0.945 1.719 0 2.086 3 4.586 3 1.219 0 2.25-0.766 2.25-2.047 0-1.297-1.039-2.055-2.273-2.055-0.766 0-1.336 0.219-1.883 0.758 0.25 0.273 0.484 0.562 0.727 0.844 0.312-0.305 0.664-0.5 1.109-0.5 0.516 0 1.031 0.367 1.031 0.914 0 0.602-0.438 0.984-1.023 0.984-1.664 0-2.109-3-4.547-3-1.211 0-2.281 0.742-2.281 2.031-0.002 1.319 1.037 2.062 2.28 2.062z"},child:[]}]})(props);
}
/**
 * Key icon from Themify Icons
 */
export function TfiKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.811 6.299l0.707-0.707-1.733-1.733 0.757-0.753-0.705-0.709-8.146 8.107c-0.484-0.336-1.070-0.535-1.703-0.535-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-0.661-0.222-1.268-0.585-1.764l5.264-5.238 1.738 1.738 0.707-0.707-1.737-1.736 0.701-0.698 1.735 1.735zM3.987 14.969c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z"},child:[]}]})(props);
}
/**
 * Layers icon from Themify Icons
 */
export function TfiLayers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13 1h-13v11h13v-11zM12 11h-11v-9h11v9zM17 5v11h-13v-3.031h1v2.031h11v-9h-2.016v-1h3.016z"},child:[]}]})(props);
}
/**
 * LayersAlt icon from Themify Icons
 */
export function TfiLayersAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11 1h-11v9h11v-9zM10 9h-9v-7h9v7zM14 13h-11v-1.981h1v0.981h9v-7h-0.994v-1h1.994v9zM17 7v9h-11v-1.981h1v0.981h9v-7h-0.994v-1h1.994z"},child:[]}]})(props);
}
/**
 * Layout icon from Themify Icons
 */
export function TfiLayout(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v17h17v-17h-17zM1 6h9v10h-9v-10zM16 16h-5v-10h5v10zM1 5v-4h15v4h-15z"},child:[]}]})(props);
}
/**
 * LayoutAccordionList icon from Themify Icons
 */
export function TfiLayoutAccordionList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M4 0v9h13v-9h-13zM16 8h-11v-7h11v7zM0 3h3v-3h-3v3zM1 1h1v1h-1v-1zM4 13h13v-3h-13v3zM5 11h11v1h-11v-1zM0 13h3v-3h-3v3zM1 11h1v1h-1v-1zM4 17h13v-3h-13v3zM5 15h11v1h-11v-1zM0 17h3v-3h-3v3zM1 15h1v1h-1v-1z"},child:[]}]})(props);
}
/**
 * LayoutAccordionMerged icon from Themify Icons
 */
export function TfiLayoutAccordionMerged(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z"},child:[]}]})(props);
}
/**
 * LayoutAccordionSeparated icon from Themify Icons
 */
export function TfiLayoutAccordionSeparated(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v3h17v-3h-17zM16 2h-15v-1h15v1zM0 13h17v-9h-17v9zM1 5h15v7h-15v-7zM0 17h17v-3h-17v3zM1 15h15v1h-15v-1z"},child:[]}]})(props);
}
/**
 * LayoutColumn2 icon from Themify Icons
 */
export function TfiLayoutColumn2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 17h8v-17h-8v17zM1 1h6v15h-6v-15zM9 0v17h8v-17h-8zM16 16h-6v-15h6v15z"},child:[]}]})(props);
}
/**
 * LayoutColumn2Alt icon from Themify Icons
 */
export function TfiLayoutColumn2Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0h8v17h-8v-17zM9 0v17h8v-17h-8z"},child:[]}]})(props);
}
/**
 * LayoutColumn3 icon from Themify Icons
 */
export function TfiLayoutColumn3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 17h5v-17h-5v17zM1 1h3v15h-3v-15zM6 17h5v-17h-5v17zM7 1h3v15h-3v-15zM12 0v17h5v-17h-5zM16 16h-3v-15h3v15z"},child:[]}]})(props);
}
/**
 * LayoutColumn3Alt icon from Themify Icons
 */
export function TfiLayoutColumn3Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0h5v17h-5v-17zM6 17h5v-17h-5v17zM12 0v17h5v-17h-5z"},child:[]}]})(props);
}
/**
 * LayoutColumn4 icon from Themify Icons
 */
export function TfiLayoutColumn4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 17h3v-17h-3v17zM2 1h1v15h-1v-15zM5 17h3v-17h-3v17zM6 1h1v15h-1v-15zM9 17h3v-17h-3v17zM10 1h1v15h-1v-15zM13 0v17h3v-17h-3zM15 16h-1v-15h1v15z"},child:[]}]})(props);
}
/**
 * LayoutColumn4Alt icon from Themify Icons
 */
export function TfiLayoutColumn4Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z"},child:[]}]})(props);
}
/**
 * LayoutCtaBtnLeft icon from Themify Icons
 */
export function TfiLayoutCtaBtnLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 7h-7v-1h7v1zM8.007 9h5v-1h-5v1zM17 3v10h-17v-10h17zM16 4h-15v8h15v-8zM7 6h-5v2h5v-2z"},child:[]}]})(props);
}
/**
 * LayoutCtaBtnRight icon from Themify Icons
 */
export function TfiLayoutCtaBtnRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 7h-7v-1h7v1zM3.993 9h5v-1h-5v1zM17 3v10h-17v-10h17zM16 4h-15v8h15v-8zM15 6h-5v2h5v-2z"},child:[]}]})(props);
}
/**
 * LayoutCtaCenter icon from Themify Icons
 */
export function TfiLayoutCtaCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 8h-11v-1h11v1zM17 3v11h-17v-11h17zM16 4h-15v9h15v-9zM6.357 11h4.286v-2h-4.286v2z"},child:[]}]})(props);
}
/**
 * LayoutCtaLeft icon from Themify Icons
 */
export function TfiLayoutCtaLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 3v11h17v-11h-17zM16 13h-15v-9h15v9zM13 8h-10v-1h10v1zM8 11h-5v-2h5v2z"},child:[]}]})(props);
}
/**
 * LayoutCtaRight icon from Themify Icons
 */
export function TfiLayoutCtaRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 3v11h17v-11h-17zM16 13h-15v-9h15v9zM14 8h-10v-1h10v1zM9 9h5v2h-5v-2z"},child:[]}]})(props);
}
/**
 * LayoutGrid2 icon from Themify Icons
 */
export function TfiLayoutGrid2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"},child:[]},{tag:"path",attr:{d:"M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"},child:[]},{tag:"path",attr:{d:"M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"},child:[]},{tag:"path",attr:{d:"M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"},child:[]}]})(props);
}
/**
 * LayoutGrid2Alt icon from Themify Icons
 */
export function TfiLayoutGrid2Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0h7v7h-7v-7zM9 0v7h7v-7h-7zM0 16h7v-7h-7v7zM9 16h7v-7h-7v7z"},child:[]}]})(props);
}
/**
 * LayoutGrid2Thumb icon from Themify Icons
 */
export function TfiLayoutGrid2Thumb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 2h3v3h-3v-3zM9 5h3v-3h-3v3zM0 13h3v-3h-3v3zM9 13h3v-3h-3v3zM4 3h4v-1h-4v1zM4 5h4v-1h-4v1zM13 2v1h4v-1h-4zM13 5h4v-1h-4v1zM7 5.999h-3v1h3v-1zM16 5.999h-3v1h3v-1zM4 11h4v-1h-4v1zM4 13h4v-1h-4v1zM13 11h4v-1h-4v1zM13 13h4v-1h-4v1zM4 14.999h3v-1h-3v1zM13 14.999h3v-1h-3v1z"},child:[]}]})(props);
}
/**
 * LayoutGrid3 icon from Themify Icons
 */
export function TfiLayoutGrid3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 5h5v-5h-5v5zM1 1h3v3h-3v-3zM6 5h5v-5h-5v5zM7 1h3v3h-3v-3zM12 0v5h5v-5h-5zM16 4h-3v-3h3v3zM0 11h5v-5h-5v5zM1 7h3v3h-3v-3zM6 11h5v-5h-5v5zM7 7h3v3h-3v-3zM12 11h5v-5h-5v5zM13 7h3v3h-3v-3zM0 17h5v-5h-5v5zM1 13h3v3h-3v-3zM6 17h5v-5h-5v5zM7 13h3v3h-3v-3zM12 17h5v-5h-5v5zM13 13h3v3h-3v-3z"},child:[]}]})(props);
}
/**
 * LayoutGrid3Alt icon from Themify Icons
 */
export function TfiLayoutGrid3Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0h5v5h-5v-5zM6 5h5v-5h-5v5zM12 0v5h5v-5h-5zM0 11h5v-5h-5v5zM6 11h5v-5h-5v5zM12 11h5v-5h-5v5zM0 17h5v-5h-5v5zM6 17h5v-5h-5v5zM12 17h5v-5h-5v5z"},child:[]}]})(props);
}
/**
 * LayoutGrid4 icon from Themify Icons
 */
export function TfiLayoutGrid4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 4h3v-3h-3v3zM2 2h1v1h-1v-1zM5 4h3v-3h-3v3zM6 2h1v1h-1v-1zM9 4h3v-3h-3v3zM10 2h1v1h-1v-1zM13 1v3h3v-3h-3zM15 3h-1v-1h1v1zM1 8h3v-3h-3v3zM2 6h1v1h-1v-1zM5 8h3v-3h-3v3zM6 6h1v1h-1v-1zM9 8h3v-3h-3v3zM10 6h1v1h-1v-1zM13 8h3v-3h-3v3zM14 6h1v1h-1v-1zM1 12h3v-3h-3v3zM2 10h1v1h-1v-1zM5 12h3v-3h-3v3zM6 10h1v1h-1v-1zM9 12h3v-3h-3v3zM10 10h1v1h-1v-1zM13 12h3v-3h-3v3zM14 10h1v1h-1v-1zM1 16h3v-3h-3v3zM2 14h1v1h-1v-1zM5 16h3v-3h-3v3zM6 14h1v1h-1v-1zM9 16h3v-3h-3v3zM10 14h1v1h-1v-1zM13 16h3v-3h-3v3zM14 14h1v1h-1v-1z"},child:[]}]})(props);
}
/**
 * LayoutGrid4Alt icon from Themify Icons
 */
export function TfiLayoutGrid4Alt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 1h3v3h-3v-3zM5 4h3v-3h-3v3zM9 4h3v-3h-3v3zM13 1v3h3v-3h-3zM1 8h3v-3h-3v3zM5 8h3v-3h-3v3zM9 8h3v-3h-3v3zM13 8h3v-3h-3v3zM1 12h3v-3h-3v3zM5 12h3v-3h-3v3zM9 12h3v-3h-3v3zM13 12h3v-3h-3v3zM1 16h3v-3h-3v3zM5 16h3v-3h-3v3zM9 16h3v-3h-3v3zM13 16h3v-3h-3v3z"},child:[]}]})(props);
}
/**
 * LayoutLineSolid icon from Themify Icons
 */
export function TfiLayoutLineSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 8v1h-17v-1h17z"},child:[]}]})(props);
}
/**
 * LayoutListLargeImage icon from Themify Icons
 */
export function TfiLayoutListLargeImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.497 5h-2.497v-1h2.497v1zM15.499 7.996h-1.499v1h1.499v-1zM14.004 5.998v1h2.996v-1h-2.996zM14 10.993h2.996v-1h-2.996v1zM14 13h2.497v-1h-2.497v1zM0 4h13v9h-13v-9zM1 12h11v-7h-11v7z"},child:[]}]})(props);
}
/**
 * LayoutListPost icon from Themify Icons
 */
export function TfiLayoutListPost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 5h-14v-2h14v2zM0 6v1h17v-1h-17zM14 10h-14v2h14v-2zM0 14h17v-1h-17v1z"},child:[]}]})(props);
}
/**
 * LayoutListThumb icon from Themify Icons
 */
export function TfiLayoutListThumb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 4h-9v-1h9v1zM6 5v1h11v-1h-11zM0 2h5v5h-5v-5zM1 6h3v-3h-3v3zM15 10h-9v1h9v-1zM6 13h11v-1h-11v1zM0 9h5v5h-5v-5zM1 13h3v-3h-3v3z"},child:[]}]})(props);
}
/**
 * LayoutListThumbAlt icon from Themify Icons
 */
export function TfiLayoutListThumbAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 5h-9v-1h9v1zM6 6v1h11v-1h-11zM0 8h5v-5h-5v5zM15 11h-9v1h9v-1zM6 14h11v-1h-11v1zM0 15h5v-5h-5v5z"},child:[]}]})(props);
}
/**
 * LayoutMediaCenter icon from Themify Icons
 */
export function TfiLayoutMediaCenter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 4v6h15v-6h-15zM15 9h-13v-4h13v4zM14 11v1h-11v-1h11zM2 13h13v1h-13v-1z"},child:[]}]})(props);
}
/**
 * LayoutMediaCenterAlt icon from Themify Icons
 */
export function TfiLayoutMediaCenterAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 13h15v1h-15v-1zM4 15.993h9v-1h-9v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"},child:[]}]})(props);
}
/**
 * LayoutMediaLeft icon from Themify Icons
 */
export function TfiLayoutMediaLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10 4h5.826v1h-5.826v-1z"},child:[]},{tag:"path",attr:{d:"M10 7.996h3.497v1h-3.497v-1z"},child:[]},{tag:"path",attr:{d:"M10.009 5.998h6.991v1h-6.991v-1z"},child:[]},{tag:"path",attr:{d:"M10 9.993h6.991v1h-6.991v-1z"},child:[]},{tag:"path",attr:{d:"M10 12h5.826v1h-5.826v-1z"},child:[]},{tag:"path",attr:{d:"M0 13h9v-9h-9v9zM1 5h7v7h-7v-7z"},child:[]}]})(props);
}
/**
 * LayoutMediaLeftAlt icon from Themify Icons
 */
export function TfiLayoutMediaLeftAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"},child:[]}]})(props);
}
/**
 * LayoutMediaOverlay icon from Themify Icons
 */
export function TfiLayoutMediaOverlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 12h-13v-1h13v1zM12 12.993h-10v1h10v-1zM17 1v15h-17v-15h17zM16 2h-15v13h15v-13z"},child:[]}]})(props);
}
/**
 * LayoutMediaOverlayAlt icon from Themify Icons
 */
export function TfiLayoutMediaOverlayAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 2v12h17v-12h-17zM1 10.010v-7.010h15v7.010h-15z"},child:[]}]})(props);
}
/**
 * LayoutMediaOverlayAlt2 icon from Themify Icons
 */
export function TfiLayoutMediaOverlayAlt2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12 9h-10v-1h10v1zM12 10h-10v1h10v-1zM17 1v15h-17v-15h17zM16 2h-15v13h15v-13z"},child:[]}]})(props);
}
/**
 * LayoutMediaRight icon from Themify Icons
 */
export function TfiLayoutMediaRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8 4v9h9v-9h-9zM16 12h-7v-7h7v7zM1.174 4h5.826v1h-5.826v-1zM3.503 7.996h3.497v1h-3.497v-1zM6.991 6.998h-6.991v-1h6.991v1zM0.009 9.993h6.991v1h-6.991v-1zM1.174 12h5.826v1h-5.826v-1z"},child:[]}]})(props);
}
/**
 * LayoutMediaRightAlt icon from Themify Icons
 */
export function TfiLayoutMediaRightAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 13h15v1h-15v-1zM7 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"},child:[]}]})(props);
}
/**
 * LayoutMenu icon from Themify Icons
 */
export function TfiLayoutMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 7v3h13v-3h-13zM8 8v1h-3v-1h3zM1 8h3v1h-3v-1zM12 9h-3v-1h3v1z"},child:[]}]})(props);
}
/**
 * LayoutMenuFull icon from Themify Icons
 */
export function TfiLayoutMenuFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 7v3h17v-3h-17zM9 8h3v1h-3v-1zM8 9h-3v-1h3v1zM1 8h3v1h-3v-1zM16 9h-3v-1h3v1z"},child:[]}]})(props);
}
/**
 * LayoutMenuSeparated icon from Themify Icons
 */
export function TfiLayoutMenuSeparated(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 10h5v-3h-5v3zM1 8h3v1h-3v-1zM6 10h5v-3h-5v3zM7 8h3v1h-3v-1zM12 7v3h5v-3h-5zM16 9h-3v-1h3v1z"},child:[]}]})(props);
}
/**
 * LayoutMenuV icon from Themify Icons
 */
export function TfiLayoutMenuV(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 1v3h11v-3h-11zM13 3h-9v-1h9v1zM3 8h11v-3h-11v3zM4 6h9v1h-9v-1zM3 11.997h11v-3h-11v3zM4 9.997h9v1h-9v-1zM3 15.997h11v-3h-11v3zM4 13.997h9v1h-9v-1z"},child:[]}]})(props);
}
/**
 * LayoutPlaceholder icon from Themify Icons
 */
export function TfiLayoutPlaceholder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.021 1.012v15h17v-15h-17zM8.137 8.509l-7.116 6.197v-12.412l7.116 6.215zM1.459 2.012h14.138l-7.079 6.165-7.059-6.165zM8.517 8.841l7.066 6.171h-14.152l7.086-6.171zM8.898 8.509l7.123-6.204v12.425l-7.123-6.221z"},child:[]}]})(props);
}
/**
 * LayoutSidebar2 icon from Themify Icons
 */
export function TfiLayoutSidebar2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 0v17h-4v-17h4zM0 17h3v-17h-3v17zM11 17h1v-1h-1v1zM7.571 17h0.857v-1h-0.857v1zM9.286 17h0.857v-1h-0.857v1zM5.857 17h0.857v-1h-0.857v1zM4 17h1v-1h-1v1zM4 3h1v-1h-1v1zM4 13h1v-1h-1v1zM4 15h1v-1h-1v1zM4 11h1v-1h-1v1zM4 7h1v-1h-1v1zM4 5h1v-1h-1v1zM4 9h1v-1h-1v1zM4 1h1v-1h-1v1zM5.857 1h0.857v-1h-0.857v1zM9.286 1h0.857v-1h-0.857v1zM7.571 1h0.857v-1h-0.857v1zM11 1h1v-1h-1v1zM11 5h1v-1h-1v1zM11 3h1v-1h-1v1zM11 7h1v-1h-1v1zM11 9h1v-1h-1v1zM11 15h1v-1h-1v1zM11 13h1v-1h-1v1zM11 11h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * LayoutSidebarLeft icon from Themify Icons
 */
export function TfiLayoutSidebarLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0h5v17h-5v-17zM7 17h1v-1h-1v1zM14.222 17h0.889v-1h-0.889v1zM12.444 17h0.889v-1h-0.889v1zM8.889 17h0.889v-1h-0.889v1zM10.667 17h0.889v-1h-0.889v1zM16 17h1v-1h-1v1zM16 3h1v-1h-1v1zM16 15h1v-1h-1v1zM16 7h1v-1h-1v1zM16 5h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 0v1h1v-1h-1zM14.223 1h0.889v-1h-0.889v1zM12.445 1h0.889v-1h-0.889v1zM10.667 1h0.889v-1h-0.889v1zM8.889 1h0.889v-1h-0.889v1zM7 1h1v-1h-1v1zM7 15h1v-1h-1v1zM7 13h1v-1h-1v1zM7 7h1v-1h-1v1zM7 11h1v-1h-1v1zM7 5h1v-1h-1v1zM7 3h1v-1h-1v1zM7 9h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * LayoutSidebarNone icon from Themify Icons
 */
export function TfiLayoutSidebarNone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 16h1v1h-1v-1zM14 17h1v-1h-1v1zM12 17h1v-1h-1v1zM10 17h1v-1h-1v1zM8 17h1v-1h-1v1zM6 17h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM16 17h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 5h1v-1h-1v1zM16 9h1v-1h-1v1zM16 7h1v-1h-1v1zM16 3h1v-1h-1v1zM16 15h1v-1h-1v1zM16 0v1h1v-1h-1zM4 1h1v-1h-1v1zM2 1h1v-1h-1v1zM12 1h1v-1h-1v1zM10 1h1v-1h-1v1zM6 1h1v-1h-1v1zM14 1h1v-1h-1v1zM8 1h1v-1h-1v1zM0 1h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 11h1v-1h-1v1zM0 5h1v-1h-1v1zM0 9h1v-1h-1v1zM0 3h1v-1h-1v1zM0 7h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * LayoutSidebarRight icon from Themify Icons
 */
export function TfiLayoutSidebarRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 0v17h-5v-17h5zM9 17h1v-1h-1v1zM7.223 17h0.889v-1h-0.889v1zM1.889 17h0.889v-1h-0.889v1zM3.667 17h0.889v-1h-0.889v1zM5.445 17h0.889v-1h-0.889v1zM0 17h1v-1h-1v1zM0 9h1v-1h-1v1zM0 3h1v-1h-1v1zM0 11h1v-1h-1v1zM0 7h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 5h1v-1h-1v1zM0 1h1v-1h-1v1zM8.111 0h-0.889v1h0.889v-1zM6.333 0h-0.889v1h0.889v-1zM2.777 0h-0.888v1h0.889v-1zM4.555 0h-0.888v1h0.889v-1zM9 1h1v-1h-1v1zM9 15h1v-1h-1v1zM9 13h1v-1h-1v1zM9 9h1v-1h-1v1zM9 11h1v-1h-1v1zM9 5h1v-1h-1v1zM9 7h1v-1h-1v1zM9 3h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * LayoutSlider icon from Themify Icons
 */
export function TfiLayoutSlider(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 1v14h17v-14h-17zM16 14h-15v-12h15v12zM4.646 10.354l-2.353-2.354 2.354-2.354 0.707 0.707-1.647 1.647 1.646 1.646-0.707 0.708zM11.646 9.646l1.647-1.646-1.646-1.646 0.707-0.707 2.353 2.353-2.354 2.354-0.707-0.708z"},child:[]}]})(props);
}
/**
 * LayoutSliderAlt icon from Themify Icons
 */
export function TfiLayoutSliderAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 14h13v-11h-13v11zM3 4h11v9h-11v-9z"},child:[]},{tag:"path",attr:{d:"M16 4.531h1v7.938h-1v-7.938z"},child:[]},{tag:"path",attr:{d:"M0 4.531h1v7.938h-1v-7.938z"},child:[]}]})(props);
}
/**
 * LayoutTab icon from Themify Icons
 */
export function TfiLayoutTab(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7 3v-1h-7v14h17v-13h-10zM11 4v1h-4v-1h4zM16 15h-15v-12h5v3h10v9zM12 5v-1h4v1h-4z"},child:[]}]})(props);
}
/**
 * LayoutTabMin icon from Themify Icons
 */
export function TfiLayoutTabMin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7 2v-1h-7v3.997h1v-2.997h5v3h11v-3h-10zM7 3h4v1h-4v-1zM12 4v-1h4v1h-4z"},child:[]}]})(props);
}
/**
 * LayoutTabV icon from Themify Icons
 */
export function TfiLayoutTabV(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6 1v1h-6v4h1v4h5v6.018h11v-15.018h-11zM2 6h4v1h-4v-1zM2 9v-1h4v1h-4zM16 15.018h-9v-10.018h-6v-2h6v-1h9v13.018z"},child:[]}]})(props);
}
/**
 * LayoutTabWindow icon from Themify Icons
 */
export function TfiLayoutTabWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12 2h-12v14h17v-14h-5zM16 3v2h-4v-2h4zM11 3v2h-5v-2h5zM1 3h4v2h-4v-2zM16 15h-15v-9h15v9z"},child:[]}]})(props);
}
/**
 * LayoutWidthDefault icon from Themify Icons
 */
export function TfiLayoutWidthDefault(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v17h17v-17h-17zM16 16h-15v-15h15v15zM3 8h1v1h-1v-1zM3 4h1v1h-1v-1zM3 10h1v1h-1v-1zM3 6h1v1h-1v-1zM3 2h1v1h-1v-1zM3 14h1v1h-1v-1zM3 12h1v1h-1v-1zM13 2h1v1h-1v-1zM13 6h1v1h-1v-1zM13 4h1v1h-1v-1zM13 8h1v1h-1v-1zM13 10h1v1h-1v-1zM13 12h1v1h-1v-1zM13 14h1v1h-1v-1z"},child:[]}]})(props);
}
/**
 * LayoutWidthDefaultAlt icon from Themify Icons
 */
export function TfiLayoutWidthDefaultAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 16h1v1h-1v-1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM14 17h1v-1h-1v1zM14 3h1v-1h-1v1zM14 5h1v-1h-1v1zM14 13h1v-1h-1v1zM14 7h1v-1h-1v1zM14 9h1v-1h-1v1zM14 15h1v-1h-1v1zM14 11h1v-1h-1v1zM14 0v1h1v-1h-1zM12 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM4 1h1v-1h-1v1zM2 1h1v-1h-1v1zM2 13h1v-1h-1v1zM2 15h1v-1h-1v1zM2 11h1v-1h-1v1zM2 3h1v-1h-1v1zM2 5h1v-1h-1v1zM2 7h1v-1h-1v1zM2 9h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * LayoutWidthFull icon from Themify Icons
 */
export function TfiLayoutWidthFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v17h17v-17h-17zM16 16h-15v-15h15v15z"},child:[]}]})(props);
}
/**
 * LightBulb icon from Themify Icons
 */
export function TfiLightBulb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-3.032 0-5.5 2.617-5.5 5.833 0 2.354 0.964 3.67 1.814 4.831 0.637 0.868 1.186 1.618 1.186 2.673v2.096c0 0.864 0.673 1.567 1.5 1.567h2c0.827 0 1.5-0.703 1.5-1.567v-2.126c0-1.045 0.517-1.735 1.17-2.609 0.815-1.091 1.83-2.447 1.83-4.865 0-3.216-2.468-5.833-5.5-5.833zM9.5 16h-2c-0.275 0-0.5-0.254-0.5-0.567v-1.633h3v1.633c0 0.313-0.225 0.567-0.5 0.567zM11.369 10.099c-0.587 0.785-1.19 1.593-1.336 2.701h-3.072c-0.152-1.102-0.754-1.927-1.34-2.727-0.797-1.088-1.621-2.213-1.621-4.24 0-2.665 2.019-4.833 4.5-4.833s4.5 2.168 4.5 4.833c0 2.085-0.829 3.194-1.631 4.266z"},child:[]}]})(props);
}
/**
 * LineDashed icon from Themify Icons
 */
export function TfiLineDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 8h4v1h-4v-1zM6.5 9h4v-1h-4v1zM13 8v1h4v-1h-4z"},child:[]}]})(props);
}
/**
 * LineDotted icon from Themify Icons
 */
export function TfiLineDotted(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 7.998h0.5v1h-0.5v-1zM2.383 8.999h0.941v-1h-0.941v1zM5.206 8.999h0.941v-1h-0.941v1zM10.854 9h0.941v-1h-0.941v1zM8.030 8.999h0.94v-0.999h-0.94v0.999zM13.677 9h0.941v-1h-0.941v1zM16.5 8v1h0.5v-1h-0.5z"},child:[]}]})(props);
}
/**
 * LineDouble icon from Themify Icons
 */
export function TfiLineDouble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 6v1h-17v-1h17zM0 10h17v-1h-17v1z"},child:[]}]})(props);
}
/**
 * Link icon from Themify Icons
 */
export function TfiLink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.983 6.94l-0.938 0.938-0.707-0.707 0.938-0.938c0.975-0.975 0.975-2.561 0-3.535s-2.561-0.975-3.535 0l-2.987 2.988c-0.975 0.975-0.975 2.561 0 3.535s2.561 0.975 3.535 0l0.707 0.707c-0.683 0.683-1.578 1.023-2.475 1.023s-1.792-0.341-2.474-1.023c-1.364-1.364-1.364-3.585 0-4.949l2.987-2.987c1.365-1.365 3.584-1.365 4.949 0 1.365 1.363 1.365 3.584 0 4.948zM6.042 8.034l-0.13 0.129 0.705 0.709 0.131-0.13c0.975-0.975 2.561-0.975 3.535 0s0.975 2.561 0 3.535l-3.023 3.025c-0.975 0.975-2.561 0.975-3.535 0s-0.975-2.561 0-3.535l1.058-1.059-0.707-0.707-1.058 1.059c-1.364 1.364-1.364 3.585 0 4.949 0.683 0.683 1.578 1.023 2.475 1.023s1.792-0.341 2.475-1.023l3.023-3.024c1.364-1.364 1.364-3.585 0-4.949-1.366-1.367-3.586-1.364-4.949-0.002z"},child:[]}]})(props);
}
/**
 * Linkedin icon from Themify Icons
 */
export function TfiLinkedin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"},child:[]}]})(props);
}
/**
 * Linux icon from Themify Icons
 */
export function TfiLinux(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.849 15.25c-0.509 0.26-1.188 0.832-1.438 1.072-0.188 0.179-0.964 0.269-1.402 0.045-0.509-0.26-0.241-0.671-1.027-0.696-0.393-0.010-0.777-0.010-1.161-0.010-0.339 0.010-0.678 0.027-1.027 0.035-1.178 0.027-1.294 0.787-2.054 0.76-0.518-0.018-1.169-0.429-2.295-0.66-0.786-0.162-1.544-0.205-1.706-0.554-0.16-0.349 0.197-0.741 0.223-1.080 0.027-0.456-0.339-1.072-0.071-1.305 0.232-0.205 0.723-0.054 1.044-0.231 0.339-0.196 0.482-0.349 0.482-0.768 0.125 0.427-0.009 0.775-0.286 0.945-0.17 0.107-0.482 0.161-0.742 0.135-0.205-0.019-0.33 0.008-0.384 0.089-0.080 0.098-0.054 0.277 0.045 0.509 0.098 0.232 0.214 0.384 0.196 0.669-0.009 0.286-0.33 0.626-0.276 0.867 0.018 0.090 0.107 0.17 0.33 0.232 0.357 0.098 1.009 0.196 1.643 0.349 0.706 0.178 1.438 0.499 1.894 0.437 1.357-0.188 0.58-1.643 0.366-1.99-1.152-1.805-1.911-2.983-2.518-2.519-0.152 0.125-0.161-0.304-0.152-0.474 0.027-0.59 0.322-0.803 0.5-1.259 0.339-0.867 0.598-1.857 1.116-2.366 0.387-0.501 0.994-1.313 1.111-1.741-0.099-0.929-0.126-1.911-0.143-2.767-0.018-0.92 0.125-1.725 1.161-2.286 0.249-0.135 0.579-0.188 0.928-0.188 0.616-0.010 1.303 0.17 1.741 0.491 0.697 0.518 1.134 1.616 1.081 2.401-0.036 0.616 0.071 1.25 0.268 1.911 0.232 0.777 0.599 1.321 1.188 1.946 0.706 0.75 1.259 2.223 1.42 3.16 0.143 0.877-0.054 1.421-0.241 1.448-0.286 0.043-0.464 0.945-1.357 0.91-0.571-0.027-0.625-0.366-0.786-0.661-0.259-0.455-0.518-0.312-0.616 0.17-0.054 0.241-0.019 0.599 0.062 0.865 0.161 0.563 0.107 1.090 0.009 1.742-0.188 1.232 0.866 1.464 1.572 0.874 0.696-0.579 0.848-0.669 1.723-0.973 1.33-0.456 0.884-0.857 0.169-1.098-0.643-0.215-0.669-1.296-0.438-1.501 0.054 1.161 0.661 1.331 0.911 1.491 1.098 0.681-0.411 1.244-1.063 1.574zM12.349 10.938c0.241-0.805 0.134-1.125-0.026-1.885-0.125-0.571-0.652-1.349-1.063-1.589 0.107 0.089 0.304 0.348 0.509 0.74 0.357 0.671 0.714 1.661 0.482 2.483-0.089 0.32-0.303 0.365-0.446 0.374-0.625 0.072-0.259-0.75-0.518-1.865-0.295-1.251-0.598-1.34-0.669-1.438-0.368-1.624-0.769-1.463-0.886-2.070-0.098-0.545 0.474-0.991-0.303-1.143-0.241-0.045-0.58-0.286-0.714-0.304-0.134-0.017-0.206-0.902 0.294-0.929 0.491-0.036 0.581 0.554 0.491 0.787-0.142 0.231 0.009 0.321 0.251 0.24 0.196-0.062 0.071-0.58 0.116-0.651-0.125-0.75-0.438-0.857-0.759-0.92-1.233 0.098-0.679 1.456-0.804 1.331-0.179-0.188-0.696-0.018-0.696-0.135 0.009-0.696-0.224-1.098-0.545-1.107-0.357-0.009-0.5 0.491-0.518 0.776-0.027 0.268 0.152 0.832 0.286 0.787 0.089-0.027 0.241-0.206 0.080-0.196-0.080 0-0.205-0.197-0.223-0.429-0.009-0.233 0.081-0.465 0.384-0.456 0.348 0.009 0.348 0.705 0.312 0.732-0.115 0.080-0.259 0.233-0.277 0.259-0.115 0.188-0.338 0.24-0.428 0.322-0.152 0.16-0.187 0.339-0.071 0.401 0.41 0.232 0.276 0.499 0.848 0.519 0.375 0.018 0.651-0.054 0.911-0.134 0.196-0.062 0.831-0.196 0.964-0.429 0.062-0.098 0.134-0.098 0.178-0.071 0.089 0.044 0.107 0.214-0.116 0.268-0.312 0.090-0.625 0.26-0.91 0.367-0.277 0.115-0.366 0.16-0.625 0.204-0.589 0.107-1.026-0.214-0.634 0.17 0.134 0.125 0.259 0.205 0.598 0.197 0.75-0.027 1.581-0.93 1.661-0.528 0.017 0.089-0.233 0.196-0.429 0.295-0.696 0.339-1.187 1.018-1.634 0.785-0.402-0.214-0.803-1.206-0.795-0.758 0.009 0.687-0.902 1.294-0.482 2.080-0.277 0.070-0.893 1.384-0.982 2.062-0.054 0.393 0.036 0.875-0.063 1.143-0.134 0.393-0.741-0.375-0.544-1.312 0.035-0.16 0-0.197-0.045-0.115-0.241 0.437-0.107 1.053 0.089 1.481 0.081 0.188 0.286 0.268 0.438 0.429 0.312 0.356 1.544 1.268 1.759 1.491 0.277 0.259 0.197 0.865-0.375 0.928 0.295 0.554 0.58 0.608 0.572 1.509 0.339-0.178 0.206-0.571 0.062-0.82-0.099-0.18-0.223-0.26-0.197-0.304 0.018-0.027 0.197-0.18 0.295-0.062 0.303 0.339 0.875 0.401 1.482 0.321 0.616-0.072 1.277-0.286 1.58-0.777 0.143-0.232 0.241-0.312 0.304-0.268 0.071 0.035 0.099 0.196 0.089 0.464-0.009 0.286-0.125 0.581-0.205 0.822-0.081 0.277-0.107 0.464 0.161 0.474 0.071-0.501 0.214-0.992 0.25-1.492 0.045-0.571-0.366-1.624 0.081-2.152 0.116-0.143 0.258-0.16 0.455-0.16 0.026-0.715 1.125-0.66 1.491-0.366 0-0.162-0.348-0.313-0.491-0.376zM5.063 8.367c-0.063 0.115-0.223 0.204-0.099 0.223 0.045 0.009 0.17-0.1 0.224-0.223 0.044-0.152 0.089-0.233 0.018-0.26-0.081-0.026-0.063 0.134-0.143 0.26zM7.107 3.527c-0.107-0.027-0.089 0.133-0.035 0.116 0.036 0 0.081 0.054 0.062 0.134-0.018 0.107-0.009 0.18 0.072 0.18 0.009 0 0.026 0 0.026-0.027 0.037-0.225-0.071-0.385-0.125-0.403zM7.349 4.348c-0.089 0.009-0.072-0.197 0.214-0.179-0.179 0.018-0.116 0.179-0.214 0.179zM8.081 4.196c0.259-0.115 0.348 0.063 0.259 0.099-0.090 0.026-0.099-0.144-0.259-0.099zM9.161 3.473c-0.116 0.010-0.080 0.062-0.026 0.080 0.071 0.020 0.143 0.144 0.161 0.277 0 0.018 0.089-0.018 0.089-0.045 0.008-0.213-0.179-0.32-0.224-0.312zM9.679 1.545c-0.071-0.072-0.143-0.135-0.214-0.135-0.179 0.018-0.090 0.205-0.116 0.295-0.036 0.098-0.169 0.179-0.080 0.25 0.081 0.062 0.134-0.098 0.304-0.16 0.044-0.019 0.25 0.008 0.294-0.090 0.008-0.045-0.107-0.098-0.188-0.16zM10.67 5.49c-0.169-0.106-0.205-0.285-0.267-0.223-0.188 0.205 0.232 0.634 0.41 0.671 0.107 0.018 0.188-0.126 0.161-0.251-0.036-0.169-0.161-0.107-0.304-0.197z"},child:[]}]})(props);
}
/**
 * List icon from Themify Icons
 */
export function TfiList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 4v1h-12v-1h12zM3 4.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 4.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5zM5 9h12v-1h-12v1zM3 8.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 8.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5zM5 13h12v-1h-12v1zM3 12.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 12.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5z"},child:[]}]})(props);
}
/**
 * ListOl icon from Themify Icons
 */
export function TfiListOl(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 4v1h-12v-1h12zM5 9h12v-1h-12v1zM5 13h12v-1h-12v1zM2.083 3.48h0.009v2.383h0.356v-2.727h-0.314l-0.596 0.319 0.071 0.281 0.474-0.256zM1.639 9.572l0.219-0.201c0.574-0.554 0.939-0.961 0.939-1.465 0-0.39-0.248-0.793-0.836-0.793-0.314 0-0.582 0.117-0.771 0.277l0.117 0.26c0.127-0.105 0.332-0.231 0.58-0.231 0.406 0 0.541 0.256 0.541 0.533-0.004 0.411-0.32 0.764-1.016 1.427l-0.289 0.281v0.227h1.74v-0.307h-1.224v-0.008zM2.236 12.391v-0.009c0.336-0.121 0.504-0.36 0.504-0.642 0-0.331-0.243-0.65-0.78-0.65-0.294 0-0.571 0.104-0.714 0.21l0.097 0.269c0.117-0.084 0.327-0.181 0.546-0.181 0.34 0 0.478 0.193 0.478 0.411 0 0.323-0.34 0.462-0.608 0.462h-0.206v0.276h0.205c0.357 0 0.701 0.164 0.705 0.546 0.005 0.227-0.143 0.528-0.616 0.528-0.257 0-0.5-0.104-0.604-0.172l-0.101 0.285c0.134 0.089 0.402 0.186 0.709 0.186 0.654 0 0.994-0.382 0.994-0.818 0-0.382-0.273-0.634-0.609-0.701z"},child:[]}]})(props);
}
/**
 * LocationArrow icon from Themify Icons
 */
export function TfiLocationArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1.971 1.966l5.288 14.101 1.212-7.601 7.601-1.212-14.101-5.288zM7.598 7.592l-0.731 4.582-3.187-8.499 8.499 3.187-4.581 0.73z"},child:[]}]})(props);
}
/**
 * LocationPin icon from Themify Icons
 */
export function TfiLocationPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z"},child:[]}]})(props);
}
/**
 * Lock icon from Themify Icons
 */
export function TfiLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.5 10.972c0 0.366-0.207 0.672-0.5 0.846v2.154h-1v-2.153c-0.294-0.174-0.5-0.48-0.5-0.847 0-0.552 0.447-1 1-1 0.551 0 1 0.447 1 1zM14.965 8.46v7.080c0 0.827-0.673 1.5-1.5 1.5h-9.989c-0.827 0-1.5-0.673-1.5-1.5v-7.080c0-0.827 0.673-1.5 1.5-1.5h0.024v-1.988c0-2.757 2.243-5 5-5s5 2.243 5 5v1.992c0.811 0.018 1.465 0.681 1.465 1.496zM4.5 6.96h8v-1.988c0-2.206-1.794-4-4-4s-4 1.794-4 4v1.988zM13.965 8.46c0-0.264-0.207-0.474-0.465-0.493v0.004h-10v-0.011h-0.024c-0.275 0-0.5 0.224-0.5 0.5v7.080c0 0.276 0.225 0.5 0.5 0.5h9.989c0.275 0 0.5-0.224 0.5-0.5v-7.080z"},child:[]}]})(props);
}
/**
 * Loop icon from Themify Icons
 */
export function TfiLoop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 9c0 2.206 1.711 4 3.813 4v1c-2.654 0-4.813-2.243-4.813-5s2.159-5 4.813-5h4.229l-1.646-1.646 0.707-0.707 2.854 2.853-2.853 2.854-0.708-0.708 1.647-1.646h-4.23c-2.102 0-3.813 1.794-3.813 4zM12.187 4v1c2.102 0 3.813 1.794 3.813 4s-1.711 4-3.813 4h-4.23l1.646-1.646-0.707-0.707-2.853 2.853 2.854 2.854 0.707-0.707-1.647-1.647h4.229c2.655 0 4.814-2.243 4.814-5s-2.159-5-4.813-5z"},child:[]}]})(props);
}
/**
 * Magnet icon from Themify Icons
 */
export function TfiMagnet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11 0v10.122c0 1.329-1.122 2.409-2.5 2.409s-2.5-1.080-2.5-2.409v-10.122h-5v10.432c0 4.266 3.864 6.568 7.5 6.568s7.5-2.302 7.5-6.568v-10.432h-5zM15 1v3h-3v-3h3zM5 1v3h-3v-3h3zM8.5 16c-2.613 0-6.5-1.483-6.5-5.568v-5.432h3v5.122c0 1.88 1.57 3.409 3.5 3.409s3.5-1.529 3.5-3.409v-5.122h3v5.432c0 4.085-3.887 5.568-6.5 5.568z"},child:[]}]})(props);
}
/**
 * Map icon from Themify Icons
 */
export function TfiMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.499 4.438l-4.902-1.418-5.597-0.020v11h5.348l5.196 1.479 5.456-1.605v-11.041l-5.501 1.605zM6 4.177l4 1.157v8.95l-4-1.139v-8.968zM1 4h4v9.017l-4-0.017v-9zM15 13.126l-4 1.177v-8.969l4-1.167v8.959z"},child:[]}]})(props);
}
/**
 * MapAlt icon from Themify Icons
 */
export function TfiMapAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 4v0.069l-0.013-0.058-1.015 0.221c-0.139-1.803-1.634-3.232-3.472-3.232-1.841 0-3.339 1.435-3.474 3.242l-1.026-0.223v-0.019h-6v11h5.348l5.196 1.479 5.456-1.605v-10.874h-1zM10.5 2c1.379 0 2.5 1.122 2.5 2.5 0 1.806-1.719 4.209-2.5 5.207-0.781-0.998-2.5-3.401-2.5-5.207 0-1.378 1.121-2.5 2.5-2.5zM6 5.042l1.081 0.235c0.412 2.269 2.406 4.788 2.919 5.406v4.602l-4-1.139v-9.104zM1 5h4v9.017l-4-0.017v-9zM11 15.303v-4.621c0.514-0.619 2.513-3.145 2.921-5.416l1.079-0.234v9.094l-4 1.177zM11.858 4.583c0-0.749-0.609-1.358-1.358-1.358s-1.358 0.609-1.358 1.358 0.609 1.359 1.358 1.359 1.358-0.609 1.358-1.359zM10.142 4.583c0-0.198 0.161-0.358 0.358-0.358s0.358 0.161 0.358 0.358-0.161 0.359-0.358 0.359-0.358-0.161-0.358-0.359z"},child:[]}]})(props);
}
/**
 * Marker icon from Themify Icons
 */
export function TfiMarker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.646 1h-0.768c-0.232-0.588-0.769-1-1.393-1h-2.467c-0.292 0-0.53 0.090-0.706 0.268-0.316 0.317-0.314 0.771-0.312 1.253v11.779l1.851 2.325h0.149v1.375l1-0.688v-0.688h0.147l1.853-2.325v-11.299h0.646c0.337 0 0.354 0.54 0.354 0.648v4.266h1v-4.266c0.001-0.97-0.556-1.648-1.354-1.648zM6.018 1h2.467c0.285 0 0.516 0.291 0.516 0.648v3.352h-3.001v-3.484c0-0.194-0.002-0.487 0.018-0.516zM7.667 14.625h-0.333l-1.333-1.675-0.001-6.95h3v6.95l-1.333 1.675z"},child:[]}]})(props);
}
/**
 * MarkerAlt icon from Themify Icons
 */
export function TfiMarkerAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.664 5.684l-0.544-0.544c0.078-0.179 0.127-0.368 0.139-0.562 0.026-0.435-0.121-0.835-0.416-1.13l-1.745-1.745c-0.206-0.206-0.437-0.31-0.687-0.31-0.449 0-0.769 0.323-1.108 0.666l-9.036 9.036-0.335 2.955 0.105 0.104-0.972 0.972 1.193 0.222 0.487-0.486 0.104 0.104 2.954-0.333 8.697-8.698 0.456 0.456c0.072 0.072 0.094 0.144 0.076 0.245-0.026 0.141-0.129 0.31-0.283 0.464l-3.016 3.017 0.707 0.707 3.016-3.017c0.303-0.302 0.497-0.645 0.56-0.99 0.078-0.426-0.047-0.829-0.352-1.133zM5.343 13.677l-2.128 0.241-0.235-0.235 0.242-2.126 5.622-5.622 2.121 2.121-5.622 5.621zM11.672 7.349l-2.121-2.121 2.464-2.464c0.136-0.139 0.342-0.347 0.376-0.354l1.745 1.745c0.12 0.12 0.129 0.278 0.125 0.361-0.010 0.168-0.088 0.331-0.218 0.462l-2.371 2.371z"},child:[]}]})(props);
}
/**
 * Medall icon from Themify Icons
 */
export function TfiMedall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-2.757 0-5 2.243-5 5 0 1.375 0.555 2.659 1.562 3.616 0.085 0.082 0.18 0.154 0.276 0.226l0.103 0.078c0.179 0.141 0.369 0.257 0.559 0.371v7.209l2.479-1.901 2.521 1.901v-7.209c0.19-0.114 0.381-0.231 0.56-0.372l0.103-0.077c0.096-0.072 0.19-0.144 0.276-0.226 1.006-0.957 1.561-2.241 1.561-3.616 0-2.757-2.243-5-5-5zM10 14.493l-1.526-1.151-1.474 1.131v-4.225c0.482 0.167 0.986 0.252 1.5 0.252s1.018-0.085 1.5-0.252v4.245zM11.249 7.892c-0.057 0.055-0.121 0.101-0.185 0.147l-0.123 0.094c-1.445 1.135-3.438 1.134-4.881 0.001l-0.124-0.095c-0.064-0.047-0.128-0.093-0.185-0.147-0.807-0.767-1.251-1.793-1.251-2.892 0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.099-0.444 2.125-1.251 2.892zM10.95 3.514l0.184 0.982-1.823 0.341 1.146 1.937-0.861 0.51-1.087-1.836-1.090 1.835-0.859-0.51 1.152-1.94-1.776-0.337 0.186-0.982 1.878 0.355v-1.869h1v1.878l1.95-0.364z"},child:[]}]})(props);
}
/**
 * MedallAlt icon from Themify Icons
 */
export function TfiMedallAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-2.757 0-5 2.243-5 5 0 1.375 0.555 2.659 1.562 3.616 0.085 0.082 0.18 0.154 0.276 0.226l0.103 0.078c0.179 0.141 0.369 0.257 0.559 0.371v7.209l2.479-1.901 2.521 1.901v-7.209c0.19-0.114 0.381-0.231 0.56-0.372l0.103-0.077c0.096-0.072 0.19-0.144 0.276-0.226 1.006-0.957 1.561-2.241 1.561-3.616 0-2.757-2.243-5-5-5zM10 14.493l-1.526-1.151-1.474 1.131v-4.225c0.482 0.167 0.986 0.252 1.5 0.252s1.018-0.085 1.5-0.252v4.245zM11.249 7.892c-0.057 0.055-0.121 0.101-0.185 0.147l-0.123 0.094c-1.445 1.135-3.438 1.134-4.881 0.001l-0.124-0.095c-0.064-0.047-0.128-0.093-0.185-0.147-0.807-0.767-1.251-1.793-1.251-2.892 0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.099-0.444 2.125-1.251 2.892zM10.25 5c0 0.966-0.784 1.75-1.75 1.75s-1.75-0.784-1.75-1.75 0.784-1.75 1.75-1.75 1.75 0.784 1.75 1.75z"},child:[]}]})(props);
}
/**
 * Menu icon from Themify Icons
 */
export function TfiMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z"},child:[]}]})(props);
}
/**
 * MenuAlt icon from Themify Icons
 */
export function TfiMenuAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 2v2h-11v-2h11zM5 9h11v-2h-11v2zM5 14h11v-2h-11v2zM2 2c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 7c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1zM2 12c-0.552 0-1 0.447-1 1s0.448 1 1 1 1-0.447 1-1-0.448-1-1-1z"},child:[]}]})(props);
}
/**
 * Microphone icon from Themify Icons
 */
export function TfiMicrophone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 12c2.481 0 4.5-2.019 4.5-4.5v-3c0-2.311-1.756-4.197-4-4.449v-0.051h-1v0.051c-2.244 0.252-4 2.138-4 4.449v3c0 2.481 2.019 4.5 4.5 4.5zM6 2.059v1.941h1v-2.648c0.312-0.149 0.646-0.25 1-0.301v2.949h1v-2.949c0.354 0.051 0.688 0.151 1 0.301v2.648h1v-1.941c0.617 0.631 1 1.491 1 2.441v0.5h-7v-0.5c0-0.95 0.383-1.811 1-2.441zM5 6h7v1.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5v-1.5zM15 7v3.25c0 2.067-2.019 3.75-4.5 3.75h-1.5v3h-1v-3h-1.5c-2.481 0-4.5-1.683-4.5-3.75v-3.25h1v3.25c0 1.517 1.57 2.75 3.5 2.75h4c1.93 0 3.5-1.233 3.5-2.75v-3.25h1z"},child:[]}]})(props);
}
/**
 * MicrophoneAlt icon from Themify Icons
 */
export function TfiMicrophoneAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.614 7.021c0.688-0.754 1.12-1.747 1.12-2.847 0-2.335-1.899-4.234-4.234-4.234s-4.234 1.899-4.234 4.234c0 1.1 0.432 2.093 1.12 2.847l1.137 7.979h1.477v1.984h1v-1.984h1.477l1.137-7.979zM6 2.147v1.853h1v-2.674c0.309-0.164 0.643-0.28 1-0.336v4.010h1v-4.010c0.357 0.056 0.691 0.172 1 0.336v2.674h1v-1.853c0.452 0.557 0.734 1.256 0.734 2.026 0 1.784-1.451 3.235-3.234 3.235s-3.234-1.45-3.234-3.234c0-0.771 0.282-1.47 0.734-2.027zM7.391 14l-0.87-6.104c0.593 0.316 1.26 0.513 1.979 0.513s1.386-0.197 1.979-0.514l-0.87 6.105h-2.218z"},child:[]}]})(props);
}
/**
 * Microsoft icon from Themify Icons
 */
export function TfiMicrosoft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7.734 15.723l9.266 1.277v-8.030h-9.266v6.753zM8.734 9.97h7.266v5.883l-7.266-1.002v-4.881zM0 14.661l6.967 0.959v-6.65h-6.967v5.691zM1 9.97h4.967v4.503l-4.967-0.684v-3.819zM0 8.112h6.967v-6.732l-6.967 0.959v5.773zM1 3.21l4.967-0.684v4.585h-4.967v-3.901zM7.734 1.277v6.835h9.266v-8.112l-9.266 1.277zM16 7.112h-7.266v-4.963l7.266-1.002v5.965z"},child:[]}]})(props);
}
/**
 * MicrosoftAlt icon from Themify Icons
 */
export function TfiMicrosoftAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 2.339l6.967-0.959v6.732h-6.967v-5.773zM0 14.661l6.967 0.959v-6.65h-6.967v5.691zM7.734 1.277v6.835h9.266v-8.112l-9.266 1.277zM7.734 15.723l9.266 1.277v-8.030h-9.266v6.753z"},child:[]}]})(props);
}
/**
 * Minus icon from Themify Icons
 */
export function TfiMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 8v1h-13v-1h13z"},child:[]}]})(props);
}
/**
 * Mobile icon from Themify Icons
 */
export function TfiMobile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.5 0h-8c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h8c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM4.5 1h8c0.276 0 0.5 0.224 0.5 0.5v1.5h-9v-1.5c0-0.276 0.224-0.5 0.5-0.5zM13 4v8h-9v-8h9zM12.5 16h-8c-0.276 0-0.5-0.224-0.5-0.5v-2.5h9v2.5c0 0.276-0.224 0.5-0.5 0.5zM9 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z"},child:[]}]})(props);
}
/**
 * Money icon from Themify Icons
 */
export function TfiMoney(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.719 9.577v0l-0.010-0.010c-0.013-0.011-0.022-0.024-0.036-0.034l-0.003 0.004-1.67-1.282v-5.707c1.14 0.218 2 1.164 2 2.296l0.499 0.060 0.501-0.060c0-1.68-1.309-3.062-3-3.296v-1.548h-1v1.548c-1.691 0.234-3 1.616-3 3.296 0 0.942 0.421 1.838 1.151 2.473l-0.005 0.005 0.040 0.031c0 0 0 0 0 0v0l1.814 1.394v5.705c-1.14-0.218-2-1.164-2-2.296h-1c0 1.68 1.309 3.062 3 3.296v1.549h1v-1.549c1.691-0.234 3-1.616 3-3.296 0-1.006-0.469-1.939-1.281-2.579zM6.822 6.581c-0.522-0.446-0.822-1.077-0.822-1.737 0-1.132 0.86-2.078 2-2.296v4.938l-1.178-0.905zM9 14.452v-4.936l1.104 0.849c0.567 0.447 0.896 1.096 0.896 1.791 0 1.132-0.86 2.078-2 2.296z"},child:[]}]})(props);
}
/**
 * More icon from Themify Icons
 */
export function TfiMore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM2 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM8.5 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z"},child:[]}]})(props);
}
/**
 * MoreAlt icon from Themify Icons
 */
export function TfiMoreAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M4 8c0 1.104-0.896 2-2 2s-2-0.896-2-2 0.896-2 2-2 2 0.896 2 2zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2z"},child:[]}]})(props);
}
/**
 * Mouse icon from Themify Icons
 */
export function TfiMouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-3.033 0-5.5 2.467-5.5 5.5v6c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5zM13 11.5c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5v-6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v6zM8.5 3.5c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM9 7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2z"},child:[]}]})(props);
}
/**
 * MouseAlt icon from Themify Icons
 */
export function TfiMouseAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0c-3.033 0-5.5 2.467-5.5 5.5v6c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-6c0-3.033-2.467-5.5-5.5-5.5zM13 5.5v0.5h-4v-4.949c2.244 0.252 4 2.139 4 4.449zM8 1.051v4.949h-4v-0.5c0-2.31 1.756-4.197 4-4.449zM8.5 16c-2.481 0-4.5-2.019-4.5-4.5v-4.5h9v4.5c0 2.481-2.019 4.5-4.5 4.5z"},child:[]}]})(props);
}
/**
 * Music icon from Themify Icons
 */
export function TfiMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.765 4.459l0.421-0.906-7.186-3.336v9.878c-0.511-0.444-1.17-0.722-1.898-0.722-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914 2.914-1.308 2.914-2.914c0-0.053-0.013-0.103-0.016-0.154v-10.35l5.765 2.676zM6.102 14.201c-1.056 0-1.914-0.858-1.914-1.914s0.858-1.914 1.914-1.914 1.914 0.858 1.914 1.914-0.859 1.914-1.914 1.914z"},child:[]}]})(props);
}
/**
 * MusicAlt icon from Themify Icons
 */
export function TfiMusicAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6 0.265v9.222c-0.512-0.446-1.173-0.726-1.904-0.726-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914c1.57 0 2.845-1.251 2.903-2.807v0-0.006c0.001-0.034 0.010-0.066 0.010-0.102s-0.008-0.067-0.009-0.101v-6.094l9 1.761v4.666c-0.513-0.451-1.178-0.734-1.914-0.734-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914c1.585 0 2.872-1.273 2.907-2.849l0.007 0.002v-11.736l-11-2.152zM4.096 13.589c-1.056 0-1.914-0.858-1.914-1.914s0.858-1.914 1.914-1.914c1.021 0 1.85 0.805 1.904 1.812v0.203c-0.054 1.008-0.883 1.813-1.904 1.813zM7 4.461v-2.982l9 1.762v2.98l-9-1.76zM14.086 16c-1.056 0-1.914-0.858-1.914-1.914s0.858-1.914 1.914-1.914 1.914 0.858 1.914 1.914-0.858 1.914-1.914 1.914z"},child:[]}]})(props);
}
/**
 * Na icon from Themify Icons
 */
export function TfiNa(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8.5 1.5c1.75 0 3.348 0.65 4.577 1.716l-9.86 9.861c-1.067-1.228-1.717-2.827-1.717-4.577 0-3.859 3.14-7 7-7zM8.5 15.5c-1.75 0-3.348-0.65-4.577-1.716l9.86-9.861c1.067 1.228 1.717 2.827 1.717 4.577 0 3.859-3.14 7-7 7z"},child:[]}]})(props);
}
/**
 * NewWindow icon from Themify Icons
 */
export function TfiNewWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 2v7.5h-1v-5.668l-9.334 9.334-0.707-0.707 9.459-9.459h-5.918v-1h7.5zM11 16h-10v-10h6.574v-1h-7.574v12h12v-7.714h-1v6.714z"},child:[]}]})(props);
}
/**
 * Notepad icon from Themify Icons
 */
export function TfiNotepad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1 0v17h15v-17h-15zM15 16h-13v-15h2v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h2v15zM5 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM9 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM13 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5z"},child:[]}]})(props);
}
/**
 * Package icon from Themify Icons
 */
export function TfiPackage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.517-0.035l-8.517 3.221v10.693l8.5 3.188 8.5-3.188v-10.692l-8.483-3.222zM15.084 3.528l-2.586 0.97-6.557-2.489 2.575-0.974 6.568 2.493zM8.5 5.997l-6.581-2.468 2.609-0.986 6.551 2.487-2.579 0.967zM1 4.253l7 2.625v8.932l-7-2.625v-8.932zM9 15.81v-8.932l7-2.625v8.932l-7 2.625z"},child:[]}]})(props);
}
/**
 * PaintBucket icon from Themify Icons
 */
export function TfiPaintBucket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.701 9.818l-8.868-8.924-0.134 0.133c-0.668-0.661-1.552-1.026-2.493-1.027 0 0 0 0-0.001 0-0.948 0-1.841 0.37-2.512 1.041-0.672 0.671-1.042 1.563-1.042 2.514 0 0.941 0.366 1.825 1.027 2.493l-2.208 2.209c-0.303 0.304-0.47 0.706-0.47 1.133 0 0.429 0.166 0.83 0.467 1.13l4.811 4.859c0.302 0.302 0.704 0.469 1.131 0.469 0.429 0 0.831-0.168 1.133-0.471l5.558-5.558 3.601-0.001zM2.651 3.554c0-0.682 0.266-1.323 0.749-1.806 0.483-0.482 1.123-0.748 1.805-0.748 0.001 0 0.001 0 0.001 0 0.674 0 1.306 0.262 1.786 0.734l-3.606 3.607c-0.473-0.481-0.735-1.113-0.735-1.787zM6.833 14.671c-0.113 0.113-0.265 0.177-0.425 0.177s-0.311-0.062-0.422-0.174l-3.636-3.674h8.154l-3.671 3.671zM11.504 10h-10.145l-0.183-0.186c-0.114-0.113-0.176-0.263-0.176-0.423 0-0.161 0.063-0.312 0.177-0.427l6.654-6.654 6.468 6.509-1.614 0.001-1.181 1.18zM15.688 11.959l-0.407-0.604-0.418 0.598c-0.319 0.457-1.363 2.011-1.363 2.798 0 0.965 0.785 1.75 1.75 1.75s1.75-0.786 1.75-1.751c0-0.782-1.004-2.334-1.312-2.791zM15.25 15.5c-0.413 0-0.75-0.337-0.75-0.75 0-0.24 0.349-0.92 0.766-1.591 0.4 0.67 0.734 1.349 0.734 1.591 0 0.413-0.337 0.75-0.75 0.75z"},child:[]}]})(props);
}
/**
 * PaintRoller icon from Themify Icons
 */
export function TfiPaintRoller(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 2v-2h-13v2h-0.516c-0.818 0-1.484 0.675-1.484 1.505v2.99c0 0.83 0.666 1.505 1.484 1.505h6.024c0.275 0 0.5 0.225 0.5 0.5v1.5h-1.008v7h3v-7h-0.992v-1.5c0-0.827-0.673-1.5-1.5-1.5h-6.024c-0.266 0-0.484-0.227-0.484-0.505v-2.99c0-0.278 0.218-0.505 0.484-0.505h0.516v3h13v-3h1v-1h-1zM9 16h-1v-5h1v5zM14 5h-11v-4h11v4z"},child:[]}]})(props);
}
/**
 * Palette icon from Themify Icons
 */
export function TfiPalette(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0.5c-4.411 0-8 3.589-8 8 0 4.281 3.352 7.787 7.631 7.982l1.288 0.059-2.723-2.723c-0.283-0.283-0.439-0.66-0.439-1.061s0.156-0.777 0.439-1.061c0.566-0.566 1.555-0.566 2.121 0l3.719 3.719 0.34-0.223c2.27-1.486 3.624-3.988 3.624-6.692 0-4.411-3.589-8-8-8zM12.66 14.125l-3.135-3.135c-0.943-0.944-2.592-0.944-3.535 0-0.472 0.472-0.732 1.1-0.732 1.768s0.26 1.296 0.732 1.768l0.741 0.741c-3.026-0.783-5.231-3.52-5.231-6.767 0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.23-1.054 4.305-2.84 5.625zM11.5 6.5c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2zM11.5 9.5c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM8.5 6c-0.828 0-1.5-0.671-1.5-1.5s0.672-1.5 1.5-1.5c0.829 0 1.5 0.671 1.5 1.5s-0.671 1.5-1.5 1.5zM5.75 5.891c0 0.552-0.448 1-1 1s-1-0.448-1-1 0.448-1 1-1 1 0.447 1 1z"},child:[]}]})(props);
}
/**
 * Panel icon from Themify Icons
 */
export function TfiPanel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v17h17v-17h-17zM16 16h-15v-15h15v15zM4 10.232v2.768h1v-2.768c0.738-0.218 1.281-0.894 1.281-1.701s-0.543-1.483-1.281-1.701v-2.83h-1v2.83c-0.738 0.218-1.281 0.894-1.281 1.701s0.543 1.484 1.281 1.701zM4.5 7.75c0.431 0 0.781 0.351 0.781 0.781s-0.35 0.781-0.781 0.781-0.781-0.35-0.781-0.781 0.35-0.781 0.781-0.781zM8 8.107v4.893h1v-4.893c0.738-0.218 1.281-0.894 1.281-1.701s-0.543-1.483-1.281-1.701v-0.705h-1v0.705c-0.738 0.218-1.281 0.894-1.281 1.701s0.543 1.484 1.281 1.701zM8.5 5.625c0.431 0 0.781 0.351 0.781 0.781s-0.35 0.782-0.781 0.782-0.781-0.351-0.781-0.782 0.35-0.781 0.781-0.781zM12.5 13.417c0.982 0 1.781-0.799 1.781-1.781 0-0.808-0.543-1.483-1.281-1.701v-5.935h-1v5.935c-0.738 0.218-1.281 0.894-1.281 1.701 0 0.982 0.799 1.781 1.781 1.781zM12.5 10.854c0.431 0 0.781 0.351 0.781 0.781s-0.351 0.781-0.781 0.781-0.781-0.351-0.781-0.781 0.35-0.781 0.781-0.781z"},child:[]}]})(props);
}
/**
 * Paragraph icon from Themify Icons
 */
export function TfiParagraph(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 1.026h-11.008c-2.181 0-3.955 1.774-3.955 3.955s1.774 3.954 3.955 3.954h3.008v7.065h1v-13.974h2.015v13.974h1v-13.974h3.985v-1zM8 7.936h-3.008c-1.63 0-2.955-1.325-2.955-2.954 0-1.63 1.325-2.955 2.955-2.955h3.008v5.909z"},child:[]}]})(props);
}
/**
 * Pencil icon from Themify Icons
 */
export function TfiPencil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.529 2.857l-1.403-1.404c-0.565-0.566-1.555-0.566-2.122 0l-9.057 9.058-1.722 5.288 5.248-1.765 9.055-9.056c0.586-0.584 0.586-1.536 0.001-2.121zM3.094 13.294l0.645-1.979 1.934 1.935-1.963 0.66-0.616-0.616zM4.355 10.518l5.493-5.493 2.111 2.11-5.494 5.494-2.11-2.111zM10.555 4.317l0.729-0.729 2.111 2.11-0.729 0.729-2.111-2.11zM14.822 4.271l-0.72 0.72-2.111-2.11 0.72-0.721c0.189-0.189 0.518-0.189 0.707 0l1.403 1.404c0.196 0.196 0.196 0.512 0.001 0.707z"},child:[]}]})(props);
}
/**
 * PencilAlt icon from Themify Icons
 */
export function TfiPencilAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.499 1.843l-1.403-1.403c-0.566-0.566-1.555-0.566-2.122 0l-7.536 7.536-1.722 5.287 5.249-1.765 7.534-7.534c0.283-0.283 0.439-0.66 0.439-1.061s-0.156-0.777-0.439-1.060zM5.584 10.758l0.638-1.957 1.92 1.919-1.942 0.653-0.616-0.615zM6.832 7.996l3.986-3.986 2.11 2.11-3.986 3.986-2.11-2.11zM11.525 3.303l0.729-0.729 2.11 2.11-0.729 0.729-2.11-2.11zM15.792 3.257l-0.72 0.721-2.11-2.11 0.72-0.721c0.19-0.189 0.519-0.189 0.707 0l1.403 1.403c0.094 0.095 0.146 0.22 0.146 0.354s-0.052 0.258-0.146 0.353zM15 7.5h1v9.5h-16v-15h7.5v1h-6.5v13h14v-8.5z"},child:[]}]})(props);
}
/**
 * PencilAlt2 icon from Themify Icons
 */
export function TfiPencilAlt2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.492 0h-1.984c-0.827 0-1.5 0.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959v-10.654c-0.001-0.827-0.674-1.5-1.501-1.5zM7.508 1h1.984c0.275 0 0.5 0.225 0.5 0.5v1.019h-2.984v-1.019c0-0.275 0.224-0.5 0.5-0.5zM8.078 14.021l-0.934-1.835h2.715l-0.911 1.835h-0.87zM7.008 11.187v-5.637h2.984v5.637h-2.984zM7.008 4.55v-1.031h2.984v1.031h-2.984z"},child:[]}]})(props);
}
/**
 * PieChart icon from Themify Icons
 */
export function TfiPieChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.985 8.943l0.998 0.067c-0.263 3.92-3.55 6.99-7.483 6.99-4.136 0-7.5-3.364-7.5-7.5 0-3.905 3.047-7.19 6.938-7.479l0.074 0.997c-3.371 0.25-6.012 3.097-6.012 6.482 0 3.584 2.916 6.5 6.5 6.5 3.409 0 6.257-2.66 6.485-6.057zM17 7.499v0.5l-0.501 0.017h-7.482v-8.017l0.501 0.001c4.126 0.009 7.482 3.374 7.482 7.499zM15.986 7.016c-0.223-3.17-2.776-5.743-5.969-5.995v5.995h5.969z"},child:[]}]})(props);
}
/**
 * Pin icon from Themify Icons
 */
export function TfiPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12 4.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.745 1.288 3.185 2.962 3.445v8.055h1v-8.047c1.71-0.228 3.038-1.682 3.038-3.453zM8.5 7c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5zM10 5h-1c0-0.552-0.448-1-1-1v-1c1.103 0 2 0.897 2 2z"},child:[]}]})(props);
}
/**
 * Pin2 icon from Themify Icons
 */
export function TfiPin2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8 11.5h1v5.5h-1v-5.5zM14 8.8v2.2h-11v-2.2l1.094-0.487 1.106-6.313-0.429-0.779-0.671-1.221h8.8l-0.672 1.221-0.428 0.779 1.106 6.312 1.094 0.488zM13 9.449l-0.986-0.44-0.092-0.524-1.168-6.659 0.17-0.309 0.285-0.517h-5.418l0.455 0.827-0.060 0.346-1.2 6.836-0.986 0.44v0.551h9v-0.551z"},child:[]}]})(props);
}
/**
 * PinAlt icon from Themify Icons
 */
export function TfiPinAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.404 10.889l0.707 0.707-5.258 5.257-0.707-0.707 5.258-5.257zM17 6.222l-2.192 0.637-3.682 5.246 0.429 1.118-1.555 1.555-7.778-7.778 1.556-1.556 1.118 0.429 5.245-3.682 0.248-0.854 0.388-1.337 6.223 6.222zM15.098 5.734l-3.832-3.831-0.164 0.567-0.098 0.338-5.97 4.19-1.009-0.387-0.389 0.389 6.364 6.364 0.389-0.39-0.195-0.512-0.191-0.497 0.307-0.436 3.883-5.534 0.338-0.098 0.567-0.163z"},child:[]}]})(props);
}
/**
 * Pinterest icon from Themify Icons
 */
export function TfiPinterest(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.025 6.225c0 3.819-2.123 6.662-5.246 6.662-1.049 0-2.035-0.568-2.365-1.213-0.568 2.238-0.682 2.667-0.682 2.667-0.203 0.746-0.619 1.493-0.985 2.074-1.043 0.737-1.14-0.404-1.14-0.404-0.024-0.684-0.012-1.505 0.166-2.237 0 0 0.189-0.785 1.25-5.285-0.315-0.62-0.315-1.543-0.315-1.543 0-1.441 0.835-2.516 1.872-2.516 0.885 0 1.314 0.67 1.314 1.467 0 0.885-0.57 2.213-0.859 3.439-0.24 1.037 0.518 1.871 1.529 1.871 1.847 0 3.084-2.363 3.084-5.158 0-2.137-1.44-3.729-4.045-3.729-2.945 0-4.778 2.2-4.778 4.652 0 0.848 0.252 1.442 0.644 1.91 0.178 0.215 0.203 0.29 0.139 0.543-0.049 0.177-0.15 0.607-0.201 0.771-0.063 0.253-0.266 0.341-0.48 0.253-1.353-0.558-1.986-2.049-1.986-3.718 0-2.756 2.325-6.068 6.928-6.068 3.717 0 6.156 2.692 6.156 5.562z"},child:[]}]})(props);
}
/**
 * PinterestAlt icon from Themify Icons
 */
export function TfiPinterestAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 0.5c-4.418 0-8 3.581-8 8 0 3.275 1.97 6.090 4.789 7.327-0.022-0.559-0.005-1.229 0.139-1.837 0.153-0.649 1.029-4.359 1.029-4.359s-0.256-0.511-0.256-1.266c0-1.186 0.688-2.070 1.544-2.070 0.728 0 1.079 0.546 1.079 1.2 0 0.731-0.467 1.826-0.707 2.839-0.2 0.849 0.426 1.541 1.263 1.541 1.516 0 2.537-1.946 2.537-4.253 0-1.753-1.182-3.066-3.329-3.066-2.427 0-3.938 1.811-3.938 3.831 0 0.698 0.205 1.189 0.527 1.569 0.147 0.175 0.168 0.246 0.115 0.446-0.038 0.147-0.127 0.502-0.163 0.642-0.054 0.203-0.218 0.275-0.4 0.201-1.119-0.457-1.639-1.681-1.639-3.057 0-2.272 1.916-4.998 5.718-4.998 3.054 0 5.064 2.211 5.064 4.583 0 3.139-1.745 5.483-4.316 5.483-0.864 0-1.677-0.468-1.955-0.998 0 0-0.464 1.844-0.562 2.199-0.17 0.617-0.502 1.233-0.806 1.714 0.719 0.214 1.479 0.329 2.267 0.329 4.418 0 8-3.581 8-8s-3.582-8-8-8z"},child:[]}]})(props);
}
/**
 * Plug icon from Themify Icons
 */
export function TfiPlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3 4v5.014c0 2.749 2.468 4.986 5.5 4.986s5.5-2.237 5.5-4.986v-5.014h-11zM13 9.014c0 2.198-2.019 3.986-4.5 3.986s-4.5-1.788-4.5-3.986v-4.014h9v4.014zM7.016 3h-1v-3h1v3zM10.984 3h-1v-3h1v3zM8 14h1v3h-1v-3zM11 8h-5v-1h5v1zM11 10h-5v-1h5v1z"},child:[]}]})(props);
}
/**
 * Plus icon from Themify Icons
 */
export function TfiPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z"},child:[]}]})(props);
}
/**
 * PowerOff icon from Themify Icons
 */
export function TfiPowerOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16 9.5c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5c0-3.498 2.476-6.579 5.888-7.326l0.214 0.977c-2.956 0.647-5.102 3.317-5.102 6.349 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-3.028-2.143-5.698-5.096-6.348l0.215-0.977c3.408 0.751 5.881 3.831 5.881 7.325zM9 0h-1v10h1v-10z"},child:[]}]})(props);
}
/**
 * Printer icon from Themify Icons
 */
export function TfiPrinter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 6h-3.008v-1.818l-4.503-4.182h-6.497v6h-2.992v8h3v3.1h11v-3.1h3v-8zM9.992 1.832l2.335 2.168h-2.335v-2.168zM3.992 1h5v4h4v1h-9v-5zM13 16.1h-9v-5h9v5zM16 13h-2v-2.9h-11v2.9h-2v-6h15v6zM11.006 13h-6.006v-1h6.006v1zM9 15h-4v-1h4v1zM3 9h-1v-1h1v1zM5 9h-1v-1h1v1z"},child:[]}]})(props);
}
/**
 * Pulse icon from Themify Icons
 */
export function TfiPulse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.33 8l-1.876-4.377-3.438 9.783-4.015-13.11-2.37 7.704h-2.631v1h3.369l1.63-5.296 3.95 12.903 3.597-10.23 1.124 2.623h3.33v-1z"},child:[]}]})(props);
}
/**
 * QuoteLeft icon from Themify Icons
 */
export function TfiQuoteLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z"},child:[]}]})(props);
}
/**
 * QuoteRight icon from Themify Icons
 */
export function TfiQuoteRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7.307 6.862c0-1.946-1.583-3.529-3.529-3.529-1.945 0-3.528 1.583-3.528 3.529 0 1.945 1.583 3.528 3.528 3.528 0.734 0 1.416-0.227 1.981-0.611-1.231 3.47-3.99 3.877-4.133 3.896l0.123 0.992c0.051-0.006 5.125-0.703 5.563-7.724l-0.013-0.001c0.001-0.027 0.008-0.052 0.008-0.080zM3.778 9.391c-1.394 0-2.528-1.134-2.528-2.528s1.134-2.529 2.528-2.529c1.395 0 2.529 1.135 2.529 2.529s-1.134 2.528-2.529 2.528zM16.734 6.942c0.001-0.027 0.008-0.053 0.008-0.080 0-1.946-1.583-3.529-3.528-3.529s-3.528 1.583-3.528 3.529c0 1.945 1.583 3.528 3.528 3.528 0.734 0 1.416-0.227 1.981-0.611-1.23 3.47-3.99 3.877-4.133 3.896l0.123 0.992c0.051-0.006 5.125-0.703 5.563-7.724l-0.014-0.001zM13.214 9.391c-1.394 0-2.528-1.134-2.528-2.528s1.134-2.529 2.528-2.529 2.528 1.135 2.528 2.529-1.134 2.528-2.528 2.528z"},child:[]}]})(props);
}
/**
 * Receipt icon from Themify Icons
 */
export function TfiReceipt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 0v16.902l2.028-2.481 1.503 1.88 1.501-1.875 1.499 1.875 1.5-1.875 1.5 1.875 1.499-1.875 1.97 2.46v-16.886h-13zM14 14.036l-0.97-1.211-1.499 1.875-1.5-1.875-1.5 1.875-1.499-1.875-1.501 1.875-1.495-1.87-1.036 1.268v-13.098h11v13.036zM10.997 4h-6v-1h6v1zM8.997 8h-4v-1h4v1zM11.978 6h-7v-1h7v1zM5 10h7v1h-7v-1z"},child:[]}]})(props);
}
/**
 * Reddit icon from Themify Icons
 */
export function TfiReddit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.581 9.936c0.024 0.161 0.040 0.33 0.040 0.491 0 1.308-0.766 2.517-2.145 3.42-1.347 0.879-3.121 1.363-5.008 1.363s-3.669-0.484-5.008-1.363c-1.388-0.903-2.145-2.112-2.145-3.42 0-0.177 0.016-0.354 0.040-0.532-0.508-0.322-0.855-0.895-0.855-1.541 0-1.007 0.815-1.822 1.822-1.822 0.452 0 0.872 0.17 1.194 0.444 1.291-0.823 2.976-1.291 4.774-1.324l1.081-3.41c0.048-0.153 0.21-0.242 0.371-0.21l2.799 0.661c0.233-0.532 0.766-0.903 1.379-0.903 0.831 0 1.5 0.678 1.5 1.501 0 0.83-0.669 1.508-1.5 1.508-0.823 0-1.492-0.67-1.5-1.492l-2.541-0.597-0.935 2.951c1.701 0.072 3.29 0.541 4.516 1.339 0.322-0.29 0.75-0.468 1.218-0.468 1.007 0 1.822 0.815 1.822 1.822 0 0.678-0.371 1.267-0.919 1.582zM1.532 9.25c0.258-0.693 0.75-1.339 1.451-1.896-0.184-0.128-0.419-0.201-0.661-0.201-0.661 0-1.201 0.54-1.201 1.201 0 0.356 0.161 0.678 0.411 0.896zM15 10.427c0-1.080-0.662-2.112-1.863-2.896-1.242-0.806-2.903-1.257-4.669-1.257s-3.428 0.452-4.67 1.257c-1.202 0.783-1.863 1.815-1.863 2.896 0 1.089 0.661 2.121 1.863 2.904 1.242 0.806 2.903 1.258 4.669 1.258s3.428-0.452 4.669-1.258c1.202-0.783 1.864-1.815 1.864-2.904zM6.097 10.661c-0.605 0-1.121-0.492-1.121-1.097 0-0.612 0.516-1.121 1.121-1.121s1.105 0.509 1.105 1.121c0 0.605-0.5 1.097-1.105 1.097zM11.081 12.267c0.121 0.12 0.121 0.322 0 0.443-0.54 0.54-1.379 0.798-2.573 0.798h-0.016c-1.194 0-2.033-0.258-2.573-0.798-0.121-0.121-0.121-0.323 0-0.443 0.121-0.122 0.314-0.122 0.436 0 0.419 0.419 1.113 0.62 2.137 0.62h0.016c1.017 0 1.718-0.201 2.137-0.62 0.121-0.122 0.314-0.122 0.436 0zM12.024 9.564c0 0.604-0.5 1.097-1.105 1.097s-1.121-0.492-1.121-1.097c0-0.612 0.516-1.121 1.121-1.121s1.105 0.509 1.105 1.121zM13.040 3.291c0 0.482 0.395 0.878 0.879 0.878s0.879-0.396 0.879-0.878c0-0.484-0.396-0.88-0.879-0.88-0.484 0-0.879 0.396-0.879 0.88zM15.879 8.354c0-0.661-0.54-1.201-1.201-1.201-0.258 0-0.5 0.081-0.694 0.226 0.694 0.557 1.185 1.21 1.436 1.92 0.282-0.227 0.459-0.566 0.459-0.945z"},child:[]}]})(props);
}
/**
 * Reload icon from Themify Icons
 */
export function TfiReload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"},child:[]}]})(props);
}
/**
 * Rocket icon from Themify Icons
 */
export function TfiRocket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12 11c0-1 0-5 0-6 0-5-3-5-3-5s-3 0-3 5 0 2 0 6c0 0-2 0-2 6 0 0 2.379-2.375 4.312-2.895 0.004 0.582 0.31 1.051 0.688 1.051s0.684-0.47 0.688-1.051c1.933 0.52 4.312 2.895 4.312 2.895 0-6-2-6-2-6zM9 1.001c0.26 0.021 1.667 0.27 1.947 2.999h-3.894c0.28-2.729 1.687-2.978 1.947-2.999zM9 13c-1.271 0-2.742 0.868-3.877 1.717 0.263-2.121 0.859-2.629 0.993-2.717h0.884v-7h4v7h0.884c0.134 0.088 0.73 0.596 0.993 2.717-1.135-0.849-2.606-1.717-3.877-1.717z"},child:[]}]})(props);
}
/**
 * Rss icon from Themify Icons
 */
export function TfiRss(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.969 14h-1c0-3.233-2.678-5.863-5.969-5.863v-1c3.843 0 6.969 3.079 6.969 6.863zM3 3.5v1c5.327 0 9.5 4.173 9.5 9.5h1c0-5.888-4.612-10.5-10.5-10.5zM6 12.501c0-0.827-0.671-1.501-1.497-1.501-0.829 0-1.503 0.674-1.503 1.501s0.674 1.5 1.503 1.5c0.826 0 1.497-0.673 1.497-1.5zM5 12.501c0 0.275-0.223 0.5-0.497 0.5-0.277 0-0.503-0.225-0.503-0.5 0-0.276 0.226-0.501 0.503-0.501 0.274 0 0.497 0.225 0.497 0.501zM17 15.5v-14c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5zM15.5 1c0.276 0 0.5 0.225 0.5 0.5v14c0 0.275-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.225-0.5-0.5v-14c0-0.275 0.224-0.5 0.5-0.5h14z"},child:[]}]})(props);
}
/**
 * RssAlt icon from Themify Icons
 */
export function TfiRssAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.173 17h-1c0-5.514-4.564-10-10.173-10v-1c6.161 0 11.173 4.935 11.173 11zM0 0v1c8.972 0 16 7.028 16 16h1c0-9.532-7.468-17-17-17zM4 15.001c0-1.104-0.896-2.001-1.996-2.001-1.105 0-2.004 0.897-2.004 2.001 0 1.103 0.899 1.999 2.004 1.999 1.1 0 1.996-0.896 1.996-1.999zM3 15.001c0 0.551-0.447 0.999-0.996 0.999-0.554 0-1.004-0.448-1.004-0.999 0-0.552 0.45-1.001 1.004-1.001 0.549 0 0.996 0.449 0.996 1.001z"},child:[]}]})(props);
}
/**
 * Ruler icon from Themify Icons
 */
export function TfiRuler(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5 0v17h7v-17h-7zM11 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z"},child:[]}]})(props);
}
/**
 * RulerAlt icon from Themify Icons
 */
export function TfiRulerAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.036 0.015l-12.021 12.021 4.95 4.949 12.020-12.020-4.949-4.95zM1.429 12.036l0.696-0.696 1.414 1.414 0.707-0.707-1.414-1.414 0.719-0.719 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.414 1.414 0.707-0.707-1.414-1.414 0.696-0.696 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.414 1.414 0.707-0.707-1.414-1.414 0.718-0.718 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.415 1.414 0.707-0.707-1.415-1.414 0.708-0.708 3.535 3.536-10.606 10.606-3.536-3.535z"},child:[]}]})(props);
}
/**
 * RulerAlt2 icon from Themify Icons
 */
export function TfiRulerAlt2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0.293v16.707h16.707l-16.707-16.707zM1 2.707l2.957 2.957-0.655 0.655 0.707 0.707 0.655-0.655 0.709 0.709-0.655 0.656 0.707 0.707 0.655-0.655 0.71 0.709-0.655 0.655 0.707 0.707 0.655-0.655 0.71 0.71-0.655 0.655 0.707 0.707 0.655-0.655 0.709 0.709-0.655 0.655 0.707 0.707 0.655-0.655 0.71 0.71-0.655 0.655 0.707 0.707 0.655-0.655 2.546 2.546h-13.293v-13.293zM2 15h7.707l-7.707-7.707v7.707zM3 9.707l4.293 4.293h-4.293v-4.293z"},child:[]}]})(props);
}
/**
 * RulerPencil icon from Themify Icons
 */
export function TfiRulerPencil(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M4.492 0h-1.984c-0.827 0-1.5 0.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959v-10.654c-0.001-0.827-0.674-1.5-1.501-1.5zM2.508 1h1.984c0.275 0 0.5 0.225 0.5 0.5v1.019h-2.984v-1.019c0-0.275 0.224-0.5 0.5-0.5zM2.008 4.55v-1.031h2.984v1.031h-2.984zM3.948 14.021h-0.87l-1.070-2.104v-6.367h1v6.481h1v-6.481h0.984v6.37l-1.044 2.101zM8 0v17h7v-17h-7zM14 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z"},child:[]}]})(props);
}
/**
 * Save icon from Themify Icons
 */
export function TfiSave(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.164 0h-12.664c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-12.724l-2.836-2.776zM8 1v4h3v-4h1v5h-8v-5h4zM3 16v-6h11v6h-11zM16 15.5c0 0.275-0.225 0.5-0.5 0.5h-0.5v-7h-13v7h-0.5c-0.276 0-0.5-0.225-0.5-0.5v-14c0-0.275 0.224-0.5 0.5-0.5h1.5v6h10v-6h0.756l2.244 2.196v12.304z"},child:[]}]})(props);
}
/**
 * SaveAlt icon from Themify Icons
 */
export function TfiSaveAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.5 0h-12.664l-2.836 2.776v12.724c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM13 1v2h-8v-2h8zM3 16v-1h11v1h-11zM16 15.5c0 0.275-0.224 0.5-0.5 0.5h-0.5v-2h-13v2h-0.5c-0.276 0-0.5-0.225-0.5-0.5v-12.304l2.244-2.196h0.756v3h10v-3h1.5c0.276 0 0.5 0.225 0.5 0.5v14zM8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5z"},child:[]}]})(props);
}
/**
 * Search icon from Themify Icons
 */
export function TfiSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"},child:[]}]})(props);
}
/**
 * Server icon from Themify Icons
 */
export function TfiServer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 3.5c0-2.273-4.38-3.5-8.5-3.5s-8.5 1.227-8.5 3.5c0 0.149 0.024 0.318 0.080 0.5h-0.080v9.5c0 2.273 4.38 3.5 8.5 3.5s8.5-1.227 8.5-3.5v-9.5h-0.080c0.056-0.182 0.080-0.351 0.080-0.5zM8.5 1c4.293 0 7.5 1.32 7.5 2.5 0 0.398-0.388 0.835-1.093 1.229-1.419 0.796-3.814 1.271-6.407 1.271s-4.988-0.475-6.407-1.271c-0.705-0.394-1.093-0.831-1.093-1.229 0-1.18 3.207-2.5 7.5-2.5zM8.5 16c-4.293 0-7.5-1.32-7.5-2.5v-1.633c0.175 0.135 0.367 0.271 0.604 0.403 1.562 0.874 4.14 1.396 6.896 1.396 0.345 0 0.687-0.008 1.023-0.024 2.361-0.111 4.505-0.607 5.872-1.372v0c0-0.001 0.001-0.001 0.001-0.001 0.236-0.133 0.43-0.268 0.604-0.403v1.634c0 1.18-3.207 2.5-7.5 2.5zM14.907 11.397c-1.42 0.795-3.814 1.27-6.407 1.27-0.324 0-0.646-0.008-0.962-0.022-2.214-0.102-4.203-0.552-5.445-1.247v0c-0.704-0.396-1.093-0.833-1.093-1.231v-1.634c0.175 0.135 0.368 0.271 0.605 0.403 1.561 0.874 4.139 1.396 6.895 1.396s5.334-0.522 6.895-1.396c0.237-0.132 0.43-0.268 0.605-0.403v1.634c0 0.398-0.389 0.835-1.093 1.23zM14.906 8.063c-1.419 0.795-3.813 1.27-6.406 1.27s-4.987-0.475-6.406-1.27c-0.705-0.394-1.094-0.832-1.094-1.23v-1.634c0.175 0.136 0.367 0.271 0.604 0.404 1.562 0.875 4.139 1.397 6.896 1.397s5.334-0.522 6.896-1.397c0.237-0.133 0.429-0.268 0.604-0.404v1.634c0 0.398-0.389 0.836-1.094 1.23z"},child:[]}]})(props);
}
/**
 * Settings icon from Themify Icons
 */
export function TfiSettings(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z"},child:[]}]})(props);
}
/**
 * Share icon from Themify Icons
 */
export function TfiShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.795 13.396c-1.11-1.037-1.747-2.502-1.747-4.021 0-3.033 2.468-5.5 5.5-5.5h2.912l-2.646-2.646 0.707-0.707 3.854 3.854-3.854 3.854-0.707-0.707 2.646-2.646h-2.912c-2.481 0-4.5 2.019-4.5 4.5 0 1.261 0.508 2.429 1.429 3.29l-0.682 0.729zM16.048 9.030v6.47c0 0.275-0.225 0.5-0.5 0.5h-14c-0.275 0-0.5-0.225-0.5-0.5v-6.475h-1v6.475c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-6.47h-1z"},child:[]}]})(props);
}
/**
 * ShareAlt icon from Themify Icons
 */
export function TfiShareAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.527 8.229l-3.853-3.854 3.854-3.854 0.707 0.707-2.647 2.647h2.912c3.032 0 5.5 2.467 5.5 5.5 0 1.519-0.637 2.983-1.747 4.021l-0.682-0.73c0.921-0.862 1.429-2.030 1.429-3.291 0-2.481-2.019-4.5-4.5-4.5h-2.912l2.646 2.646-0.707 0.708zM16 9.025v6.475c0 0.275-0.225 0.5-0.5 0.5h-14c-0.275 0-0.5-0.225-0.5-0.5v-6.47h-1v6.47c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-6.475h-1z"},child:[]}]})(props);
}
/**
 * Sharethis icon from Themify Icons
 */
export function TfiSharethis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 13.168c0 1.843-1.49 3.332-3.333 3.332-1.844 0-3.333-1.489-3.333-3.332 0-0.116 0.010-0.24 0.020-0.354l-3.75-1.876c-0.593 0.552-1.396 0.896-2.271 0.896-1.844 0-3.333-1.489-3.333-3.334 0-1.843 1.489-3.332 3.333-3.332 0.875 0 1.677 0.343 2.271 0.895l3.75-1.874c-0.010-0.116-0.020-0.24-0.020-0.354 0-1.845 1.489-3.334 3.333-3.334 1.843 0 3.333 1.489 3.333 3.334 0 1.844-1.49 3.333-3.333 3.333-0.875 0-1.677-0.344-2.271-0.896l-3.75 1.875c0.010 0.115 0.021 0.24 0.021 0.354 0 0.115-0.011 0.24-0.021 0.354l3.75 1.877c0.594-0.553 1.397-0.897 2.271-0.897 1.843-0.002 3.333 1.487 3.333 3.333z"},child:[]}]})(props);
}
/**
 * SharethisAlt icon from Themify Icons
 */
export function TfiSharethisAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 13.5c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-10c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3v10zM11.614 9.386c-0.583 0-1.114 0.229-1.51 0.604l-2.51-1.25c0.010-0.084 0.020-0.156 0.020-0.24s-0.010-0.156-0.021-0.24l2.51-1.249c0.396 0.375 0.927 0.604 1.51 0.604 1.219 0 2.219-0.999 2.219-2.229 0-1.219-1-2.219-2.219-2.219-1.229 0-2.229 1-2.229 2.219 0 0.083 0.010 0.156 0.021 0.239l-2.51 1.25c-0.395-0.365-0.926-0.594-1.509-0.594-1.219 0-2.219 0.989-2.219 2.219s1 2.219 2.219 2.219c0.583 0 1.114-0.229 1.51-0.594l2.51 1.25c-0.011 0.083-0.021 0.156-0.021 0.239 0 1.219 1 2.219 2.229 2.219 1.219 0 2.219-1 2.219-2.219 0-1.229-1-2.228-2.219-2.228z"},child:[]}]})(props);
}
/**
 * Shield icon from Themify Icons
 */
export function TfiShield(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 1.016c0 1.654-1.346 3-3 3s-3-1.346-3-3h-1c0 1.654-1.346 3-3 3s-3-1.346-3-3h-1v6.847c0 5.405 7.002 8 7.301 8.107l0.166 0.061 0.167-0.058c0.3-0.103 7.366-2.587 7.366-8.138v-6.819h-1zM2 7.862v-4.204c0.733 0.832 1.807 1.358 3 1.358 1.196 0 2.266-0.533 3-1.369v11.114c-1.659-0.747-6-3.067-6-6.899zM15 7.835c0 3.895-4.293 6.163-6 6.912v-11.101c0.734 0.836 1.804 1.369 3 1.369 1.193 0 2.267-0.525 3-1.357v4.177z"},child:[]}]})(props);
}
/**
 * ShiftLeft icon from Themify Icons
 */
export function TfiShiftLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 9.001h-11.292l3.646 3.646-0.707 0.707-4.854-4.854 4.854-4.854 0.707 0.707-3.648 3.648h11.294v1zM0 17h1v-17h-1v17z"},child:[]}]})(props);
}
/**
 * ShiftLeftAlt icon from Themify Icons
 */
export function TfiShiftLeftAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.854 5.854l-2.647 2.646 2.646 2.646-0.707 0.707-3.353-3.353 3.354-3.354 0.707 0.708zM9 0v17h1v-17h-1z"},child:[]}]})(props);
}
/**
 * ShiftRight icon from Themify Icons
 */
export function TfiShiftRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.354 3.646l4.853 4.854-4.854 4.854-0.707-0.707 3.647-3.647h-11.293v-1h11.292l-3.646-3.646 0.708-0.708zM16 0v17h1v-17h-1z"},child:[]}]})(props);
}
/**
 * ShiftRightAlt icon from Themify Icons
 */
export function TfiShiftRightAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.207 8.5l-3.354 3.354-0.707-0.707 2.647-2.647-2.646-2.646 0.707-0.707 3.353 3.353zM7 17h1v-17h-1v17z"},child:[]}]})(props);
}
/**
 * Shine icon from Themify Icons
 */
export function TfiShine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9 4h-1v-3h1v3zM8 13h1v3h-1v-3zM16 8v1h-3v-1h3zM4 9h-3v-1h3v1zM12.036 5.671l-0.707-0.707 2.121-2.121 0.707 0.707-2.121 2.121zM4.964 11.329l0.707 0.707-2.121 2.121-0.707-0.707 2.121-2.121zM12.036 11.329l2.121 2.121-0.707 0.707-2.121-2.121 0.707-0.707zM4.964 5.671l-2.121-2.121 0.707-0.707 2.121 2.121-0.707 0.707z"},child:[]}]})(props);
}
/**
 * ShoppingCart icon from Themify Icons
 */
export function TfiShoppingCart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2.75 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM2.75 15c-0.414 0-0.75-0.337-0.75-0.75s0.336-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.336 0.75-0.75 0.75zM11.25 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM11.25 15c-0.414 0-0.75-0.337-0.75-0.75s0.336-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.336 0.75-0.75 0.75zM13.371 2l-0.302 2h-13.143l1.118 8.036h11.913l1.038-7.463 0.236-1.573h2.769v-1h-3.629zM12.926 5l-0.139 1h-11.574l-0.139-1h11.852zM1.914 11.036l-0.561-4.036h11.295l-0.561 4.036h-10.173z"},child:[]}]})(props);
}
/**
 * ShoppingCartFull icon from Themify Icons
 */
export function TfiShoppingCartFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2.75 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM2.75 15c-0.413 0-0.75-0.337-0.75-0.75s0.337-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.337 0.75-0.75 0.75zM11.25 12.5c-0.965 0-1.75 0.785-1.75 1.75s0.785 1.75 1.75 1.75 1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75zM11.25 15c-0.413 0-0.75-0.337-0.75-0.75s0.337-0.75 0.75-0.75 0.75 0.337 0.75 0.75-0.337 0.75-0.75 0.75zM13.37 2l-0.301 2h-13.143l1.117 8.036h11.914l1.043-7.5 0.231-1.536h2.769v-1h-3.63zM12.086 11.036h-10.172l-0.84-6.036h11.852l-0.84 6.036zM11 10h-8v-3.969h1v2.969h6v-2.97h1v3.97zM4 2.969h-1v-1.969h8v1.906h-1v-0.906h-6v0.969z"},child:[]}]})(props);
}
/**
 * Shortcode icon from Themify Icons
 */
export function TfiShortcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.026 1h3v1h-2v13h2v1h-3v-15zM14.026 1v1h2v13h-2v1h3v-15h-3zM8.91 7.967c-1.115-0.433-1.607-0.804-1.607-1.56 0-0.552 0.42-1.211 1.523-1.211 0.731 0 1.271 0.239 1.535 0.384l0.288-0.852c-0.359-0.204-0.96-0.396-1.787-0.396-1.571 0-2.614 0.936-2.614 2.195 0 1.14 0.815 1.823 2.135 2.291 1.091 0.419 1.523 0.851 1.523 1.606 0 0.815-0.624 1.38-1.691 1.38-0.72 0-1.403-0.24-1.871-0.528l-0.264 0.876c0.432 0.287 1.283 0.516 2.062 0.516 1.907 0 2.831-1.079 2.831-2.327 0.001-1.188-0.696-1.847-2.063-2.374z"},child:[]}]})(props);
}
/**
 * Signal icon from Themify Icons
 */
export function TfiSignal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.5 4c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.483 1.084 2.71 2.5 2.949v8.051h-2v1h5v-1h-2v-8.051c1.416-0.239 2.5-1.466 2.5-2.949zM6.5 4c0-1.103 0.897-2 2-2s2 0.897 2 2-0.897 2-2 2-2-0.897-2-2zM4.504 2.192c-0.378 0.46-0.577 1.004-0.577 1.574s0.199 1.114 0.577 1.574l-0.774 0.636c-0.525-0.641-0.803-1.405-0.803-2.209s0.278-1.569 0.803-2.209l0.774 0.634zM2 3.767c0 1.079 0.387 2.096 1.119 2.938l-0.754 0.656c-0.881-1.012-1.365-2.29-1.365-3.594s0.484-2.582 1.365-3.595l0.754 0.656c-0.732 0.843-1.119 1.86-1.119 2.939zM14.073 3.767c0 0.805-0.278 1.568-0.804 2.209l-0.773-0.635c0.378-0.46 0.577-1.004 0.577-1.574s-0.199-1.114-0.577-1.574l0.773-0.635c0.526 0.64 0.804 1.404 0.804 2.209zM16 3.767c0 1.305-0.484 2.582-1.365 3.595l-0.754-0.656c0.732-0.844 1.119-1.86 1.119-2.939s-0.387-2.096-1.119-2.938l0.754-0.656c0.881 1.012 1.365 2.289 1.365 3.594z"},child:[]}]})(props);
}
/**
 * Skype icon from Themify Icons
 */
export function TfiSkype(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.199 9.943c0.089-0.49 0.134-0.975 0.134-1.443 0-4.788-4.269-8.608-9.277-7.699-0.756-0.525-1.635-0.801-2.556-0.801-2.481 0-4.5 2.019-4.5 4.5 0 0.921 0.276 1.8 0.801 2.557-0.089 0.49-0.134 0.974-0.134 1.443 0 4.788 4.27 8.608 9.277 7.699 0.756 0.525 1.635 0.801 2.556 0.801 2.481 0 4.5-2.019 4.5-4.5 0-0.921-0.276-1.8-0.801-2.557zM12.5 16c-0.775 0-1.512-0.252-2.133-0.729l-0.182-0.14-0.225 0.047c-0.499 0.103-0.99 0.155-1.461 0.155-3.768 0-6.833-3.065-6.833-6.833 0-0.471 0.052-0.962 0.156-1.461l0.046-0.225-0.14-0.182c-0.476-0.619-0.728-1.358-0.728-2.132 0-1.93 1.57-3.5 3.5-3.5 0.775 0 1.512 0.252 2.133 0.729l0.182 0.14 0.225-0.047c0.498-0.102 0.989-0.155 1.46-0.155 3.768 0 6.833 3.065 6.833 6.833 0 0.471-0.052 0.962-0.156 1.461l-0.046 0.225 0.14 0.182c0.477 0.619 0.729 1.358 0.729 2.132 0 1.93-1.57 3.5-3.5 3.5zM12.719 10.239c0 2.115-2.042 3.094-4 3.094-2.344 0-4.303-1.042-4.303-2.323 0-0.572 0.323-1.093 1.053-1.093 1.115 0 1.219 1.604 3.146 1.604 0.916 0 1.51-0.405 1.51-0.937 0-0.667-0.573-0.771-1.5-1l-1.521-0.375c-1.52-0.365-2.688-0.99-2.688-2.74 0-2.114 2.094-2.896 3.896-2.896 1.969 0 3.958 0.781 3.958 1.979 0 0.604-0.406 1.136-1.083 1.136-1.011 0-1.042-1.197-2.678-1.197-0.916 0-1.5 0.249-1.5 0.801 0 0.605 0.594 0.74 1.387 0.928l1.082 0.25c1.48 0.333 3.241 0.957 3.241 2.769z"},child:[]}]})(props);
}
/**
 * Slice icon from Themify Icons
 */
export function TfiSlice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.561 3.844l-1.403-1.404c-0.563-0.565-1.554-0.567-2.121 0l-12.588 12.592 5.434-0.003 2.183-2.168 0.824 0.775 7.671-7.672c0.283-0.282 0.439-0.659 0.439-1.060s-0.156-0.777-0.439-1.060zM6.776 10.116l0.824-0.824 2.109 2.109-0.823 0.825-2.11-2.11zM5.471 14.029l-2.608 0.001 3.206-3.207 1.311 1.311-1.909 1.895zM15.854 5.258l-5.437 5.437-2.11-2.11 5.437-5.438c0.094-0.095 0.219-0.147 0.353-0.147s0.259 0.052 0.354 0.146l1.403 1.404c0.195 0.196 0.195 0.512 0 0.708z"},child:[]}]})(props);
}
/**
 * Smallcap icon from Themify Icons
 */
export function TfiSmallcap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6 5.925h1v2h-1v-1h-2v8h1v1h-3v-1h1v-8h-2v1h-1v-2h6zM16 2h-10v2.577h1v-1.577h4v12h-1v1h3v-1h-1v-12h4v1.577h1v-2.577h-1z"},child:[]}]})(props);
}
/**
 * Soundcloud icon from Themify Icons
 */
export function TfiSoundcloud(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0.882 10.132l-0.139 0.875c-0.007 0.035-0.027 0.062-0.062 0.062s-0.056-0.027-0.062-0.062l-0.119-0.875 0.118-0.889c0.007-0.035 0.028-0.062 0.062-0.062s0.055 0.027 0.062 0.062l0.14 0.889zM1.521 10.132l-0.18 1.409c-0.007 0.035-0.035 0.062-0.069 0.062-0.035 0-0.062-0.027-0.062-0.068l-0.16-1.403c0.16-1.438 0.16-1.438 0.16-1.438 0-0.034 0.027-0.062 0.062-0.062 0.034 0 0.062 0.028 0.069 0.062l0.18 1.438zM2.153 10.132l-0.173 1.646c0 0.041-0.035 0.076-0.077 0.076s-0.076-0.035-0.083-0.076l-0.146-1.646 0.146-1.701c0.007-0.049 0.042-0.083 0.083-0.083 0.042 0 0.077 0.034 0.077 0.083l0.173 1.701zM2.792 10.132l-0.16 1.694c-0.007 0.056-0.048 0.091-0.097 0.091-0.048 0-0.090-0.035-0.090-0.091l-0.146-1.694 0.146-1.75c0-0.056 0.042-0.090 0.090-0.090 0.049 0 0.090 0.034 0.097 0.090l0.16 1.75zM3.431 10.132l-0.146 1.709c-0.007 0.062-0.056 0.111-0.111 0.111s-0.104-0.049-0.104-0.111l-0.139-1.709 0.139-1.624c0-0.057 0.049-0.105 0.104-0.105 0.056 0 0.104 0.049 0.111 0.105l0.146 1.624zM4.083 10.132l-0.146 1.709c0 0.068-0.056 0.125-0.118 0.125-0.069 0-0.118-0.057-0.125-0.125l-0.125-1.709c0.125-2.64 0.125-2.64 0.125-2.64 0.008-0.068 0.056-0.124 0.125-0.124 0.062 0 0.118 0.056 0.118 0.124l0.146 2.64zM4.722 10.146l-0.132 1.695c0 0.076-0.063 0.131-0.132 0.131-0.076 0-0.131-0.055-0.139-0.131l-0.111-1.695c0.111-3.25 0.111-3.25 0.111-3.25 0.007-0.076 0.062-0.132 0.139-0.132 0.069 0 0.132 0.056 0.132 0.132l0.132 3.25zM5.396 10.132l-0.125 1.681c-0.007 0.083-0.069 0.146-0.153 0.146-0.076 0-0.139-0.062-0.146-0.146l-0.111-1.681 0.111-3.514c0-0.083 0.070-0.153 0.146-0.153 0.083 0 0.146 0.070 0.153 0.153l0.125 3.514zM6.056 10.132l-0.112-3.632c-0.006-0.090-0.076-0.167-0.166-0.167-0.083 0-0.16 0.077-0.16 0.167l-0.098 3.632 0.098 1.674c0.007 0.090 0.077 0.16 0.16 0.16 0.090 0 0.16-0.070 0.167-0.16l0.111-1.674zM6.722 10.132l-0.104 1.66c0 0.097-0.076 0.174-0.174 0.174-0.097 0-0.167-0.077-0.173-0.174l-0.098-1.66 0.098-3.542c0-0.098 0.076-0.174 0.173-0.174 0.098 0 0.174 0.076 0.174 0.174l0.104 3.542zM7.403 10.139l-0.098 1.64c0 0.104-0.083 0.188-0.187 0.188s-0.188-0.084-0.194-0.188l-0.083-1.64 0.083-3.416c0.007-0.111 0.090-0.195 0.194-0.195 0.104 0 0.18 0.084 0.187 0.195l0.098 3.416zM8.076 10.139l-0.083-4.070c0-0.069-0.035-0.132-0.090-0.166-0.035-0.021-0.070-0.035-0.111-0.035-0.042 0-0.076 0.014-0.111 0.035-0.056 0.035-0.091 0.097-0.091 0.166l-0.007 0.041-0.070 4.021c0 0 0 0.007 0.077 1.639 0 0 0 0 0 0.008 0 0.041 0.014 0.083 0.042 0.117 0.042 0.049 0.097 0.076 0.16 0.076 0.056 0 0.104-0.027 0.139-0.062 0.042-0.034 0.062-0.083 0.062-0.139l0.007-0.166 0.076-1.465zM8.681 11.743c0 0.118-0.097 0.215-0.215 0.215s-0.215-0.097-0.223-0.215l-0.041-0.791-0.042-0.813 0.083-4.416v-0.022c0.007-0.062 0.035-0.125 0.084-0.166 0.034-0.027 0.083-0.049 0.138-0.049 0.035 0 0.077 0.014 0.104 0.035 0.062 0.034 0.104 0.104 0.111 0.18l0.097 4.438-0.096 1.604zM14.535 11.966c-5.452 0-5.458 0-5.458 0-0.118-0.014-0.215-0.104-0.215-0.229v-6.245c0-0.117 0.042-0.173 0.195-0.229 0.382-0.152 0.812-0.235 1.257-0.235 1.812 0 3.299 1.388 3.458 3.159 0.236-0.097 0.493-0.153 0.764-0.153 1.083 0 1.965 0.883 1.965 1.973-0.001 1.084-0.883 1.959-1.966 1.959z"},child:[]}]})(props);
}
/**
 * SplitH icon from Themify Icons
 */
export function TfiSplitH(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2.207 8h3.772v1h-3.772l1.646 1.646-0.707 0.707-2.853-2.853 2.854-2.854 0.707 0.707-1.647 1.647zM13.854 5.646l-0.707 0.707 1.646 1.647h-3.772v1h3.772l-1.646 1.646 0.707 0.707 2.853-2.853-2.853-2.854zM8 17h1v-17h-1v17z"},child:[]}]})(props);
}
/**
 * SplitV icon from Themify Icons
 */
export function TfiSplitV(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.646 13.146l0.707 0.707-2.853 2.854-2.854-2.854 0.707-0.707 1.647 1.647v-3.772h1v3.772l1.646-1.647zM8 2.207v3.772h1v-3.772l1.646 1.646 0.707-0.707-2.853-2.853-2.854 2.853 0.707 0.707 1.647-1.646zM0 8v1h17v-1h-17z"},child:[]}]})(props);
}
/**
 * SplitVAlt icon from Themify Icons
 */
export function TfiSplitVAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.354 5.854l-2.647 2.646 2.646 2.646-0.707 0.707-3.353-3.353 3.354-3.354 0.707 0.708zM12.354 5.146l-0.707 0.707 2.646 2.647-2.646 2.646 0.707 0.707 3.353-3.353-3.353-3.354zM8 17h1v-17h-1v17z"},child:[]}]})(props);
}
/**
 * Spray icon from Themify Icons
 */
export function TfiSpray(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.5 3c-1.426 0-2.742 0.778-3.453 2h-1.047v10.5c0 0.827 0.673 1.5 1.5 1.5h6c0.827 0 1.5-0.673 1.5-1.5v-10.5h-1.047c-0.711-1.221-2.029-2-3.453-2zM6.5 4c0.859 0 1.672 0.376 2.234 1h-4.467c0.561-0.624 1.373-1 2.233-1zM10 15.5c0 0.275-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5-0.225-0.5-0.5v-9.5h7v9.5zM8 0h-3v3h3v-3zM7 2h-1v-1h1v1zM11.945 1.511l3.136 0.518-0.163 0.986-6-0.99 0.085-0.514-0.085-0.514 6-0.99 0.163 0.986-3.136 0.518z"},child:[]}]})(props);
}
/**
 * StackOverflow icon from Themify Icons
 */
export function TfiStackOverflow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.66 16.179c0 0.312-0.009 0.312-0.009 0.312v0.009h-10.106c-0.313 0-0.313-0.009-0.313-0.009h-0.009v-6.572h1.081v5.519h8.286v-5.519h1.070v6.26zM10.509 14.356l-6.312 0.009v-1.348l6.312-0.009v1.348zM10.661 11.286l-0.116 1.339-6.295-0.58 0.125-1.339 6.286 0.58zM11.081 9.518l-0.349 1.305-6.098-1.635 0.348-1.304 6.099 1.634zM11.875 7.982l-0.688 1.16-5.437-3.213 0.687-1.161 5.438 3.214zM13.205 7.036l-1.106 0.759-3.564-5.214 1.116-0.769 3.554 5.224zM14.777 6.724l-1.331 0.232-1.080-6.224 1.33-0.232 1.081 6.224z"},child:[]}]})(props);
}
/**
 * Stamp icon from Themify Icons
 */
export function TfiStamp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 11.918c0-1.046-0.852-1.898-1.897-1.898h-4.396l1.26-4.517 0.019-3.52c-0.002-1.075-0.915-1.983-1.996-1.983h-2.991c-1.083 0-1.997 0.908-1.997 1.983v3.361l1.278 4.676h-4.383c-1.045 0-1.897 0.852-1.897 1.898v4.082h1v1h15v-1h1v-4.082zM16 15h-15v-3.082c0-0.495 0.402-0.898 0.897-0.898h5.697l-1.592-5.744v-3.293c0-0.524 0.466-0.983 0.997-0.983h2.991c0.529 0 0.994 0.459 0.994 0.983v3.317l-1.594 5.72h5.713c0.495 0 0.897 0.403 0.897 0.898v3.082z"},child:[]}]})(props);
}
/**
 * Star icon from Themify Icons
 */
export function TfiStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"},child:[]}]})(props);
}
/**
 * StatsDown icon from Themify Icons
 */
export function TfiStatsDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5.166 8.803l-4.371-3.956 0.67-0.741 3.773 3.413 4.204-3.026 5.593 6.25v-2.285h1v4.036h-4.036v-1h2.366l-5.069-5.665-4.13 2.974zM0 16v1h17v-1h-17z"},child:[]}]})(props);
}
/**
 * StatsUp icon from Themify Icons
 */
export function TfiStatsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM5.203 7.976l4.204 3.026 5.593-6.251v2.284h1v-4.035h-4.036v1h2.366l-5.070 5.665-4.129-2.974-4.372 3.956 0.671 0.741 3.773-3.412z"},child:[]}]})(props);
}
/**
 * Support icon from Themify Icons
 */
export function TfiSupport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.384 3c-0.937-1.829-2.805-3-4.884-3s-3.946 1.17-4.884 3h-3.616v13h17v-13h-3.616zM8.5 1c1.522 0 2.907 0.767 3.732 2h-7.464c0.826-1.232 2.21-2 3.732-2zM16 15h-15v-11h15v11zM8 10h-2v-1h2v-2h1v2h2v1h-2v2h-1v-2z"},child:[]}]})(props);
}
/**
 * Tablet icon from Themify Icons
 */
export function TfiTablet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.25 14.5c0 0.415-0.335 0.75-0.75 0.75s-0.75-0.335-0.75-0.75 0.335-0.75 0.75-0.75 0.75 0.335 0.75 0.75zM16 1.5v14c0 0.827-0.625 1.5-1.392 1.5h-12.216c-0.767 0-1.392-0.673-1.392-1.5v-14c0-0.827 0.625-1.5 1.392-1.5h12.217c0.766 0 1.391 0.673 1.391 1.5zM15 1.5c0-0.271-0.179-0.5-0.392-0.5h-12.216c-0.213 0-0.392 0.229-0.392 0.5v14c0 0.271 0.179 0.5 0.392 0.5h12.217c0.212 0 0.391-0.229 0.391-0.5v-14zM3 2h11v11h-11v-11zM4 12h9v-9h-9v9z"},child:[]}]})(props);
}
/**
 * Tag icon from Themify Icons
 */
export function TfiTag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.953 1.008l-3.967 2.882v12.14l3.986-2.794 4.041 2.785v-12.135l-4.060-2.878zM12.014 14.117l-3.045-2.1-2.982 2.091v-9.709l2.975-2.161 3.053 2.165v9.714zM7.254 6.001c0 0.965 0.785 1.75 1.75 1.75s1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75-1.75 0.785-1.75 1.75zM9.004 5.251c0.413 0 0.75 0.337 0.75 0.75s-0.337 0.75-0.75 0.75-0.75-0.337-0.75-0.75 0.337-0.75 0.75-0.75z"},child:[]}]})(props);
}
/**
 * Target icon from Themify Icons
 */
export function TfiTarget(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17.020 8h-2.045c-0.245-3.194-2.806-5.745-6.004-5.977v-2.062h-1v2.065c-3.172 0.258-5.702 2.799-5.946 5.974h-2.045v1h2.045c0.244 3.175 2.774 5.716 5.945 5.974v2.026h1v-2.023c3.198-0.231 5.759-2.782 6.004-5.977h2.045v-1zM8.971 13.977v-1.977h-1v1.974c-2.621-0.252-4.708-2.35-4.946-4.974h1.955v-1h-1.955c0.238-2.624 2.325-4.722 4.946-4.974v1.935h1v-1.938c2.647 0.227 4.764 2.333 5.004 4.977h-1.955v1h1.955c-0.24 2.644-2.357 4.75-5.004 4.977z"},child:[]}]})(props);
}
/**
 * Text icon from Themify Icons
 */
export function TfiText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 2v3h-1v-2h-4v12h1.643v1h-4.286v-1h1.643v-12h-4v2h-1v-3h11z"},child:[]}]})(props);
}
/**
 * ThemifyFavicon icon from Themify Icons
 */
export function TfiThemifyFavicon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.401 1.304c-0.996 0-2.097 0.169-3.305 0.546-9.587 2.996-5.316 9.618-4.060 10.272 2.131 1.105-1.151 3.574-1.151 3.574s2.817-0.824 6.404-1.192c4.312-0.44 9.155-1.068 9.592-3.467 0.684-3.761-1.559-9.733-7.48-9.733zM15.897 10.858c-0.327 1.795-5.989 2.373-8.71 2.65-1.353 0.139-2.593 0.34-3.624 0.538 0.141-0.351 0.216-0.719 0.185-1.093-0.035-0.418-0.244-1.196-1.244-1.716-0.372-0.222-1.708-1.95-1.479-3.878 0.294-2.469 3.082-3.84 5.369-4.555 1.064-0.332 2.076-0.5 3.007-0.5 1.971 0 3.581 0.732 4.787 2.177 1.627 1.95 2.031 4.608 1.709 6.377zM4 6.5c0-0.551 0.448-1 1-1s1 0.449 1 1-0.448 1-1 1-1-0.449-1-1zM9 6c0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1 0 0.551-0.448 1-1 1-0.553 0-1-0.449-1-1zM13.3 8.5c-5.542 6.142-9.6 0.95-9.6 0.95 3.2 2.864 9.6-0.95 9.6-0.95z"},child:[]}]})(props);
}
/**
 * ThemifyFaviconAlt icon from Themify Icons
 */
export function TfiThemifyFaviconAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M6.096 1.85c-9.586 2.996-5.316 9.618-4.059 10.272 2.131 1.105-1.152 3.574-1.152 3.574s2.817-0.824 6.404-1.192c4.312-0.44 9.156-1.068 9.592-3.467 0.799-4.393-2.397-11.807-10.785-9.187zM10 5c0.552 0 1 0.447 1 1 0 0.551-0.448 1-1 1-0.553 0-1-0.449-1-1 0-0.553 0.447-1 1-1zM5 5.5c0.552 0 1 0.449 1 1s-0.448 1-1 1-1-0.449-1-1 0.448-1 1-1zM3.7 9.45c3.2 2.864 9.6-0.95 9.6-0.95-5.542 6.142-9.6 0.95-9.6 0.95z"},child:[]}]})(props);
}
/**
 * ThemifyLogo icon from Themify Icons
 */
export function TfiThemifyLogo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2.628 6.814c-0.092 0-0.219 0.003-0.299 0.017l-0.024 0.004-0.012 0.021c-0.408 0.748-1.22 2.934-1.349 3.256-0.28-0.020-0.653-0.019-0.653-0.374 0-0.258 0.904-2.37 1.029-2.717l0.024-0.066h-0.070c-0.084 0-0.166 0.005-0.246 0.011-0.075 0.005-0.146 0.010-0.215 0.010-0.182 0-0.741 0.022-0.808-0.427-0.027-0.186 0.050-0.389 0.139-0.488 0.017 0.244 0.397 0.233 0.5 0.233 0.227 0 0.707-0.095 1.011-0.134 0.353-0.045 0.749-0.148 1.113-0.148 0.365 0 0.63 0.222 0.63 0.526 0 0.106-0.034 0.223-0.099 0.337-0.193-0.044-0.477-0.061-0.671-0.061zM6.524 9.588c-0.207 0.049-0.467 0.026-0.467-0.4 0.002-0.52 0.573-1.123 0.858-1.123 0.051 0 0.201 0.037 0.168 0.203-0.175 0.883-0.98 0.746-0.919 0.847 0.29 0.482 1.711-0.234 1.573-1.248-0.046-0.346-0.255-0.579-0.654-0.579-0.74 0-1.587 1.099-1.737 1.908-0.303 0.308-0.647 0.286-0.673 0.283-0.021-0.029-0.022-0.087 0.013-0.203 0.062-0.204 0.205-0.515 0.369-0.79 0.154-0.257 0.315-0.525 0.315-0.723 0-0.239-0.141-0.36-0.417-0.36-0.361 0-1.025 0.442-1.025 0.442 0.026-0.211 0.697-1.568 0.697-1.751 0-0.214-0.097-0.361-0.363-0.361-0.069 0-0.271 0.069-0.387 0.111-0.111 0.854-0.553 1.559-0.728 1.95-0.327 0.729-0.689 1.492-0.689 1.81 0 0.3 0.289 0.587 0.601 0.6 0.28-1.058 0.964-2.206 1.433-2.206 0 0-0.541 1.127-0.541 1.643 0 0.254 0.054 0.515 0.453 0.515 0.002 0 0.004 0 0.006 0 0.361 0.037 0.752-0.451 0.915-0.682 0.022 0.549 0.501 0.61 0.71 0.61 0.609 0 1.148-0.371 1.557-1.029-0.227 0.188-0.785 0.466-1.068 0.533zM10.711 9.251c0.021-0.082 0.080-0.245 0.222-0.52 0.178-0.346 0.421-0.818 0.421-1.104 0-0.167-0.079-0.241-0.258-0.241-0.229 0-0.557 0.209-0.857 0.545l-0.084 0.093v-0.127c0-0.332-0.098-0.5-0.288-0.5-0.244 0-0.643 0.276-1.014 0.704 0 0 0.076-0.382 0.076-0.505 0-0.26-0.228-0.298-0.363-0.298-0.072 0-0.147 0.009-0.225 0.026-0.025 0.291-0.3 0.929-0.543 1.495-0.157 0.367-0.319 0.744-0.319 0.827 0 0.266 0.181 0.438 0.459 0.438 0.014 0 0.028 0 0.043-0.001 0.205-0.689 0.754-1.7 1.143-1.7h0.067l-0.023 0.065c-0.055 0.167-0.142 0.331-0.227 0.49-0.143 0.268-0.276 0.521-0.276 0.791 0 0.22 0.205 0.339 0.398 0.339 0.049 0 0.089-0.005 0.124-0.015 0.141-0.639 0.877-1.713 1.182-1.713h0.090l-0.050 0.077c-0.090 0.142-0.454 0.817-0.454 1.296 0 0.298 0.146 0.442 0.444 0.442 0.414 0 0.71-0.382 0.826-0.797-0.135 0.093-0.253 0.112-0.379 0.112-0.101 0.001-0.185-0.020-0.135-0.219zM12.534 9.571c-0.221 0.183-0.522 0.018-0.527-0.15-0.004-0.184 0.158-0.511 0.359-0.903 0.158-0.311 0.363-0.523 0.344-0.68-0.026-0.222-0.331-0.396-0.521-0.396-0.017 0-0.033 0.001-0.050 0.003-0.009 0-0.016 0.001-0.023 0.001-0.104 0.268-0.238 0.558-0.368 0.84-0.232 0.503-0.452 0.979-0.452 1.228 0 0.312 0.211 0.65 0.552 0.65 0.356-0.018 0.542-0.173 0.686-0.593zM12.637 7.101c0.092 0 0.202-0.010 0.323-0.028 0.157-0.191 0.236-0.352 0.236-0.477 0-0.129-0.202-0.2-0.784-0.205-0.184 0.186-0.174 0.32-0.174 0.469 0.001 0.161 0.132 0.241 0.399 0.241zM16.389 7.199l-0.030 0.001-0.004 0.028c-0.063 0.48-1.049 2.104-1.232 1.643-0.041-0.104 0.076-0.382 0.175-0.613 0.113-0.264 0.24-0.563 0.227-0.731-0.003-0.038-0.016-0.070-0.035-0.098-0.011-0.024-0.032-0.051-0.070-0.075-0.031-0.020-0.072-0.035-0.123-0.048-0.117-0.034-0.26-0.040-0.376-0.036-0.132-0.002-0.277 0.003-0.425 0.012l0.009-0.027c0.141-0.46 0.516-0.889 0.622-0.954 0.261-0.161 0.61-0.2 0.688 0.156 0.066-0.15 0.085-0.193 0.066-0.306-0.056-0.345-0.312-0.532-0.715-0.554-0.732-0.038-1.255 1.033-1.506 1.646l-0.006 0.014-0.012 0.009c-0.071 0.050-0.203 0.083-0.282 0.104-0.017 0.004-0.030 0.008-0.039 0.011-0.153 0.055-0.185 0.204-0.188 0.271-0.004 0.111 0.129 0.193 0.188 0.294 0 0-0.258 0.641-0.445 1.030-0.293 0.607-0.759 1.635-0.767 1.864-0.011 0.279 0.396 0.537 0.618 0.566 0.068-0.466 1.383-3.436 1.383-3.436 0.047-0.072 0.127-0.172 0.253-0.248 0.118-0.048 0.208-0.064 0.277-0.062 0.017 0.004 0.030 0.009 0.042 0.016 0.036 0.020 0.059 0.051 0.072 0.082-0.045 0.16-0.104 0.329-0.163 0.495-0.128 0.362-0.296 0.92-0.274 1.181 0.014 0.167 0.029 0.246 0.118 0.338 0.267 0.274 0.936-0.196 1.135-0.464l0.033 0.014c-0.238 0.678-0.604 1.137-0.995 1.149-0.521 0.018-0.738-0.319-0.738-0.319s-0.088 0.324 0.263 0.683c0.157 0.16 0.39 0.226 0.628 0.208 0.016-0.001 0.032-0.003 0.048-0.004 0.96-0.104 1.378-1.193 1.715-2.217 0.047-0.144 0.209-0.525 0.257-0.662 0.027-0.074 0.061-0.154 0.093-0.231l0.004-0.009c0.076-0.185 0.126-0.31 0.122-0.373-0.021-0.237-0.323-0.355-0.611-0.348z"},child:[]}]})(props);
}
/**
 * Thought icon from Themify Icons
 */
export function TfiThought(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.5 10.116c3.033 0 5.5-2.269 5.5-5.058s-2.467-5.058-5.5-5.058c-1.912 0-3.693 0.938-4.684 2.431-0.705-0.399-1.496-0.608-2.316-0.608-2.481 0-4.5 1.86-4.5 4.147 0 2.286 2.019 4.146 4.5 4.146 0.186 0 0.375-0.013 0.573-0.037 0.652 0.588 1.522 0.921 2.427 0.921 1.002 0 1.929-0.387 2.592-1.070 0.488 0.125 0.951 0.186 1.408 0.186zM9.745 8.785l-0.212 0.268c-0.471 0.593-1.231 0.947-2.033 0.947-0.724 0-1.414-0.29-1.895-0.797l-0.184-0.193-0.264 0.046c-0.214 0.037-0.431 0.060-0.657 0.060-1.93 0-3.5-1.411-3.5-3.145 0-1.735 1.57-3.147 3.5-3.147 0.792 0 1.549 0.246 2.189 0.713l0.472 0.343 0.267-0.52c0.738-1.433 2.336-2.36 4.072-2.36 2.481 0 4.5 1.82 4.5 4.059 0 2.237-2.019 4.058-4.5 4.058-0.453 0-0.921-0.075-1.429-0.231l-0.326-0.101zM11.5 10.5c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2zM11.5 13.5c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15.25 14c-0.689 0-1.25 0.561-1.25 1.25s0.561 1.25 1.25 1.25 1.25-0.561 1.25-1.25-0.561-1.25-1.25-1.25zM15 15.25c0-0.138 0.112-0.25 0.25-0.25s0.25 0.112 0.25 0.25c0 0.275-0.5 0.275-0.5 0z"},child:[]}]})(props);
}
/**
 * ThumbDown icon from Themify Icons
 */
export function TfiThumbDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.568 9.501c0 0.276-0.224 0.5-0.5 0.5h-2.291l-3.088 4.99c-0.477 0.8-1.095 0.921-1.42 0.921 0 0-0.001 0-0.001 0-0.485 0-0.955-0.264-1.199-0.671-0.364-0.61-0.238-1.446-0.087-2.106l0.403-2.124h-3.849c-0.847 0-1.535-0.675-1.535-1.505 0-0.548 0.3-1.029 0.748-1.292-0.153-0.209-0.25-0.455-0.25-0.729 0-0.526 0.24-0.971 0.621-1.233-0.138-0.235-0.204-0.502-0.204-0.769 0-0.575 0.328-1.062 0.817-1.305-0.133-0.256-0.162-0.516-0.162-0.69 0-0.932 0.581-1.488 1.553-1.488h5.625c0.754 0 1.274 0.404 1.653 0.7 0.219 0.17 0.426 0.332 0.569 0.332h2.103c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.103c-0.487 0-0.857-0.288-1.184-0.542-0.322-0.253-0.627-0.49-1.038-0.49h-5.625c-0.467 0-0.553 0.165-0.553 0.488 0 0.158 0 0.527 1.027 0.527h0.105c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.258c-0.307 0-0.529 0.197-0.529 0.468 0 0.45 0.449 0.517 0.717 0.517h0.75c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.436c-0.33 0-0.448 0.25-0.448 0.484 0 0.168 0.366 0.457 0.705 0.513h0.966c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.983c-0.007 0-0.013 0.004-0.020 0.004h-0.631c-0.295 0-0.535 0.227-0.535 0.505s0.24 0.505 0.535 0.505h4.453c0.149 0 0.29 0.066 0.385 0.181 0.095 0.115 0.134 0.266 0.106 0.412l-0.52 2.734c-0.062 0.273-0.238 1.046-0.033 1.39 0.053 0.088 0.182 0.184 0.34 0.184 0.196 0 0.397-0.157 0.566-0.44l3.239-5.234c0.091-0.147 0.252-0.237 0.425-0.237h2.569c0.279 0 0.502 0.224 0.502 0.5z"},child:[]}]})(props);
}
/**
 * ThumbUp icon from Themify Icons
 */
export function TfiThumbUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.368 9.725c0.083 0.203 0.132 0.466 0.132 0.807 0 0.526-0.24 0.971-0.621 1.233 0.138 0.234 0.204 0.501 0.204 0.768 0 0.562-0.313 1.041-0.785 1.288 0.080 0.188 0.127 0.42 0.129 0.705 0.002 0.449-0.129 0.81-0.391 1.073-0.276 0.277-0.667 0.418-1.161 0.418h-5.625c-0.754 0-1.273-0.404-1.653-0.7-0.219-0.17-0.426-0.332-0.57-0.332h-2.102c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.102c0.487 0 0.857 0.288 1.184 0.542 0.323 0.251 0.628 0.489 1.039 0.489h5.625c0.212 0 0.373-0.043 0.452-0.123 0.068-0.068 0.102-0.19 0.101-0.362-0.003-0.437-0.092-0.531-1.027-0.531h-0.106c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.258c0.307 0 0.53-0.197 0.53-0.468 0-0.45-0.449-0.517-0.717-0.517h-0.75c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.437c0.331 0 0.448-0.25 0.448-0.484 0-0.492 0-0.492-0.439-0.505-0.051-0.001-0.104-0.005-0.156-0.007h-1.076c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.982c0.007 0 0.013-0.004 0.020-0.004h0.631c0.295 0 0.536-0.227 0.536-0.505s-0.24-0.505-0.536-0.505h-4.453c-0.149 0-0.29-0.066-0.385-0.181-0.095-0.115-0.134-0.266-0.106-0.412l0.52-2.734c0.062-0.273 0.238-1.047 0.033-1.39-0.053-0.089-0.182-0.184-0.34-0.184 0 0 0 0 0 0-0.196 0-0.397 0.157-0.566 0.44l-3.241 5.234c-0.091 0.147-0.252 0.237-0.425 0.237h-2.569c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.291l3.088-4.99c0.476-0.8 1.095-0.921 1.42-0.921 0 0 0 0 0.001 0 0.485 0 0.955 0.264 1.198 0.671 0.364 0.609 0.238 1.445 0.087 2.106l-0.403 2.124h3.849c0.847 0 1.536 0.675 1.536 1.505 0.001 0.498-0.248 0.941-0.63 1.215z"},child:[]}]})(props);
}
/**
 * Ticket icon from Themify Icons
 */
export function TfiTicket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.5 1v0.5c0 0.552-0.449 1-1 1s-1-0.448-1-1v-0.5h-3.5v15h3.5v-0.5c0-0.552 0.449-1 1-1s1 0.448 1 1v0.5h3.5v-15h-3.5zM6.563 2c0.223 0.861 1.007 1.5 1.937 1.5s1.714-0.639 1.937-1.5h1.563v6h-7v-6h1.563zM10.437 15c-0.222-0.861-1.006-1.5-1.937-1.5s-1.714 0.639-1.937 1.5h-1.563v-6h7v6h-1.563z"},child:[]}]})(props);
}
/**
 * Time icon from Themify Icons
 */
export function TfiTime(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.666 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5c0-4.687-3.813-8.5-8.5-8.5zM8.666 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM14 9v1h-6v-5h1v4h5z"},child:[]}]})(props);
}
/**
 * Timer icon from Themify Icons
 */
export function TfiTimer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9 2.025v-1.025h1.5v-1h-4v1h1.5v1.025c-3.902 0.26-7 3.508-7 7.475 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-3.967-3.098-7.215-7-7.475zM8.5 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zM9 9h4v1h-5v-4h1v3z"},child:[]}]})(props);
}
/**
 * Trash icon from Themify Icons
 */
export function TfiTrash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z"},child:[]}]})(props);
}
/**
 * Trello icon from Themify Icons
 */
export function TfiTrello(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 15.833c0 0.365-0.302 0.667-0.667 0.667h-14.666c-0.364 0-0.667-0.302-0.667-0.667v-14.666c0-0.365 0.302-0.667 0.667-0.667h14.667c0.364 0 0.667 0.302 0.667 0.667v14.666zM7.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v10.667c0 0.187 0.146 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-10.667zM14.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v6.667c0 0.187 0.145 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-6.667z"},child:[]}]})(props);
}
/**
 * Truck icon from Themify Icons
 */
export function TfiTruck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 3h-11v3h-2.873l-1.19 4h-1.937v4.977h2.002c0 0.008-0.002 0.015-0.002 0.023 0 1.103 0.897 2 2 2s2-0.897 2-2c0-0.008-0.002-0.015-0.002-0.023h5.005c-0.001 0.008-0.003 0.015-0.003 0.023 0 1.103 0.897 2 2 2s2-0.897 2-2c0-0.008-0.002-0.015-0.002-0.023h2.002v-11.977zM3.873 7h2.127v3h-3.020l0.893-3zM4 16c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM13 16c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM16 13.977h-1.291c-0.35-0.582-0.981-0.977-1.709-0.977s-1.359 0.395-1.709 0.977h-5.582c-0.35-0.582-0.981-0.977-1.709-0.977s-1.359 0.395-1.709 0.977h-1.291v-2.977h6v-7h9v9.977z"},child:[]}]})(props);
}
/**
 * Tumblr icon from Themify Icons
 */
export function TfiTumblr(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M13.15 12.687c-0.72 0.478-1.42 0.71-2.141 0.71-0.371 0-0.684-0.082-0.96-0.251-0.17-0.103-0.277-0.223-0.333-0.377-0.052-0.134-0.113-0.522-0.113-1.612v-3.605h3.793v-3.51h-3.792v-4.042h-3.221l-0.056 0.438c-0.096 0.758-0.27 1.391-0.512 1.878-0.245 0.481-0.557 0.88-0.948 1.217-0.398 0.332-0.887 0.596-1.451 0.783l-0.343 0.114v3.122h1.771v5.115c0 0.812 0.087 1.423 0.262 1.854 0.171 0.453 0.495 0.889 0.969 1.299 0.464 0.392 1.005 0.687 1.601 0.874 0.611 0.202 1.316 0.306 2.095 0.306 0.699 0 1.346-0.071 1.914-0.21 0.574-0.131 1.214-0.364 1.955-0.713l0.287-0.135v-3.771l-0.777 0.516zM12.927 15.304c-0.553 0.245-1.035 0.413-1.472 0.514-1.037 0.253-2.476 0.256-3.473-0.075-0.476-0.15-0.901-0.381-1.259-0.683-0.341-0.296-0.571-0.596-0.687-0.903-0.129-0.316-0.193-0.817-0.193-1.489v-6.116h-1.77v-1.411c0.543-0.216 1.025-0.498 1.44-0.845 0.49-0.422 0.892-0.936 1.194-1.53 0.249-0.498 0.43-1.078 0.547-1.766h1.35v4.042h3.793v1.51h-3.793v4.604c0 1.068 0.052 1.64 0.176 1.961 0.131 0.363 0.384 0.66 0.75 0.882 0.929 0.571 2.225 0.502 3.397-0.042v1.347z"},child:[]}]})(props);
}
/**
 * TumblrAlt icon from Themify Icons
 */
export function TfiTumblrAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.104 0.5v4.042h3.793v2.51h-3.793v4.104c0 0.927 0.042 1.521 0.146 1.792 0.094 0.261 0.281 0.468 0.541 0.625 0.354 0.218 0.761 0.323 1.219 0.323 0.813 0 1.615-0.261 2.417-0.793v2.521c-0.688 0.323-1.302 0.552-1.854 0.678-0.553 0.135-1.156 0.197-1.803 0.197-0.729 0-1.374-0.094-1.938-0.281-0.562-0.177-1.042-0.448-1.437-0.781-0.395-0.343-0.676-0.708-0.822-1.093-0.156-0.386-0.229-0.947-0.229-1.677v-5.615h-1.771v-2.261c0.624-0.207 1.166-0.5 1.614-0.874 0.449-0.386 0.803-0.844 1.074-1.375 0.27-0.542 0.458-1.219 0.562-2.042h2.281z"},child:[]}]})(props);
}
/**
 * Twitter icon from Themify Icons
 */
export function TfiTwitter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 3.236c-0.626 0.27-1.305 0.464-2.007 0.539 0.723-0.431 1.273-1.11 1.532-1.919-0.669 0.399-1.424 0.69-2.211 0.841-0.636-0.68-1.542-1.1-2.545-1.1-1.931 0-3.484 1.564-3.484 3.483 0 0.27 0.033 0.54 0.086 0.799-2.891-0.15-5.469-1.531-7.184-3.646-0.302 0.517-0.475 1.111-0.475 1.759 0 1.208 0.615 2.275 1.553 2.901-0.571-0.022-1.111-0.184-1.575-0.442 0 0.010 0 0.032 0 0.043 0 1.692 1.197 3.095 2.794 3.419-0.291 0.075-0.604 0.118-0.917 0.118-0.226 0-0.442-0.021-0.657-0.054 0.442 1.381 1.726 2.384 3.257 2.417-1.198 0.938-2.697 1.488-4.326 1.488-0.291 0-0.561-0.010-0.841-0.042 1.543 0.992 3.376 1.564 5.351 1.564 6.407 0 9.913-5.307 9.913-9.912 0-0.152 0-0.302-0.010-0.454 0.678-0.496 1.271-1.112 1.746-1.802zM14.263 5.491c0 3.701-2.765 8.912-8.913 8.912-0.492 0-0.979-0.040-1.458-0.118 0.67-0.276 1.305-0.646 1.891-1.104 0.333-0.26 0.466-0.702 0.332-1.103-0.134-0.401-0.505-0.675-0.928-0.684-0.545-0.011-1.055-0.197-1.467-0.509 0.004-0.001 0.008-0.002 0.012-0.003 0.452-0.116 0.763-0.528 0.751-0.994-0.011-0.467-0.343-0.862-0.8-0.955-0.652-0.132-1.203-0.516-1.559-1.046 0.035 0.002 0.069 0.004 0.104 0.005 0.013 0 0.025 0 0.038 0 0.432 0 0.817-0.278 0.951-0.692 0.138-0.426-0.024-0.891-0.397-1.14-0.63-0.42-1.030-1.096-1.098-1.841 1.824 1.582 4.146 2.531 6.597 2.658 0.017 0.001 0.035 0.001 0.052 0.001 0.291 0 0.568-0.127 0.759-0.349 0.202-0.235 0.283-0.551 0.22-0.854-0.044-0.209-0.066-0.41-0.066-0.595 0-1.369 1.114-2.483 2.484-2.483 0.698 0 1.342 0.278 1.815 0.784 0.116 0.124 0.261 0.215 0.417 0.266-0.019 0.146-0.006 0.297 0.043 0.444 0.063 0.191 0.18 0.352 0.33 0.47-0.089 0.164-0.132 0.353-0.119 0.544 0.010 0.129 0.009 0.257 0.009 0.386z"},child:[]}]})(props);
}
/**
 * TwitterAlt icon from Themify Icons
 */
export function TfiTwitterAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.253 5.038c0.011 0.151 0.011 0.302 0.011 0.454 0 4.605-3.506 9.912-9.913 9.912-1.974 0-3.808-0.572-5.351-1.564 0.281 0.032 0.551 0.042 0.842 0.042 1.629 0 3.127-0.55 4.325-1.488-1.532-0.032-2.815-1.036-3.257-2.417 0.215 0.032 0.431 0.054 0.656 0.054 0.314 0 0.627-0.043 0.918-0.118-1.596-0.324-2.794-1.726-2.794-3.419 0-0.011 0-0.033 0-0.043 0.464 0.258 1.003 0.42 1.575 0.442-0.938-0.626-1.553-1.694-1.553-2.901 0-0.647 0.173-1.241 0.475-1.759 1.715 2.115 4.293 3.496 7.184 3.646-0.055-0.259-0.087-0.529-0.087-0.799 0-1.919 1.554-3.483 3.484-3.483 1.003 0 1.909 0.42 2.546 1.1 0.787-0.151 1.541-0.442 2.211-0.841-0.259 0.809-0.809 1.489-1.532 1.919 0.702-0.075 1.381-0.269 2.007-0.539-0.475 0.69-1.068 1.306-1.747 1.802z"},child:[]}]})(props);
}
/**
 * Underline icon from Themify Icons
 */
export function TfiUnderline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15 1v1h-1v6.459c0 3.032-2.467 5.5-5.5 5.5s-5.5-2.468-5.5-5.5v-6.459h-1v-1h3v1h-1v6.459c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5v-6.459h-1v-1h3zM2 16h13v-1h-13v1z"},child:[]}]})(props);
}
/**
 * Unlink icon from Themify Icons
 */
export function TfiUnlink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2.134 5.139l1.402-2.587c1.086-1.648 3.262-2.095 4.871-1.029l-0.551 0.833c-1.149-0.759-2.703-0.44-3.464 0.709l-1.402 2.587c-0.781 1.188-0.464 2.742 0.687 3.501 1.143 0.752 2.41 0.547 3.313-0.538l0.768 0.641c-0.742 0.892-1.694 1.352-2.678 1.352-0.655 0-1.323-0.204-1.954-0.62-1.61-1.064-2.056-3.239-0.992-4.849zM4.041 8.034l-0.13 0.129 0.705 0.709 0.131-0.13c0.975-0.975 2.561-0.975 3.535 0s0.975 2.561 0 3.535l-3.023 3.024c-0.975 0.975-2.561 0.975-3.535 0s-0.975-2.561 0-3.535l1.058-1.059-0.707-0.707-1.058 1.060c-1.364 1.364-1.364 3.585 0 4.949 0.683 0.683 1.578 1.023 2.475 1.023s1.792-0.341 2.475-1.023l3.023-3.024c1.364-1.364 1.364-3.585 0-4.949-1.367-1.367-3.587-1.364-4.949-0.002zM10.963 7h4.074v-1h-4.074v1zM10.495 8.347l1.951 1.127 0.5-0.865-1.951-1.127-0.5 0.865zM10.75 1.156l-1.58 2.737 0.865 0.5 1.58-2.736-0.865-0.501zM15.867 2.725l-0.5-0.865-4.992 2.882 0.5 0.865 4.992-2.882z"},child:[]}]})(props);
}
/**
 * Unlock icon from Themify Icons
 */
export function TfiUnlock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.5 10.972c0 0.366-0.207 0.672-0.5 0.846v2.154h-1v-2.153c-0.294-0.174-0.5-0.48-0.5-0.847 0-0.552 0.447-1 1-1 0.551 0 1 0.447 1 1zM14.994 8.46v7.080c0 0.827-0.673 1.5-1.5 1.5h-9.988c-0.827 0-1.5-0.673-1.5-1.5v-7.080c0-0.827 0.673-1.5 1.5-1.5h8.994v-1.988c0-2.206-1.794-4-4-4s-4 1.794-4 4h-1c0-2.757 2.243-5 5-5s5 2.243 5 5v1.988c0.824 0.004 1.494 0.675 1.494 1.5zM13.994 8.46c0-0.276-0.225-0.5-0.5-0.5h-9.988c-0.275 0-0.5 0.224-0.5 0.5v7.080c0 0.276 0.225 0.5 0.5 0.5h9.988c0.275 0 0.5-0.224 0.5-0.5v-7.080z"},child:[]}]})(props);
}
/**
 * Upload icon from Themify Icons
 */
export function TfiUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM7.999 1.708v11.292h1v-11.294l3.647 3.647 0.707-0.707-4.853-4.853-4.854 4.853 0.707 0.707 3.646-3.645z"},child:[]}]})(props);
}
/**
 * Uppercase icon from Themify Icons
 */
export function TfiUppercase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M7 4h1v2h-1v-1h-2v8h1v1h-3v-1h1v-8h-2v1h-1v-2h6zM15 4h-6v2h1v-1h2v8h-1v1h3v-1h-1v-8h2v1h1v-2h-1z"},child:[]}]})(props);
}
/**
 * User icon from Themify Icons
 */
export function TfiUser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16.488c-0.063-2.687-2.778-4.999-6.521-5.609v-1.374c0.492-0.473 0.842-1.207 1.071-1.833 0.332-0.166 0.624-0.536 0.794-1.033 0.238-0.688 0.146-1.323-0.206-1.629 0.028-0.238 0.046-0.481 0.015-0.723-0.079-0.663 0.065-1.038 0.194-1.368 0.106-0.277 0.229-0.591 0.106-0.945-0.442-1.273-1.727-1.974-3.618-1.974l-0.264 0.005c-1.313 0.047-1.707 0.6-1.971 1.115-0.033 0.062-0.077 0.146-0.077 0.151-1.712 0.153-1.697 1.569-1.684 2.707l0.003 0.369c0 0.205 0.009 0.419 0.026 0.639-0.425 0.3-0.504 1.005-0.179 1.737 0.185 0.415 0.452 0.729 0.749 0.892 0.243 0.674 0.625 1.47 1.179 1.965v1.283c-3.798 0.589-6.554 2.907-6.617 5.625l-0.012 0.512h17.023l-0.011-0.512zM1.054 16c0.392-2.094 2.859-3.821 6.122-4.204l0.441-0.052v-2.666l-0.216-0.15c-0.393-0.272-0.791-0.947-1.090-1.851l-0.083-0.281-0.294-0.051c-0.053-0.019-0.208-0.153-0.33-0.428-0.075-0.168-0.104-0.312-0.112-0.415l0.51 0.143-0.096-0.749c-0.042-0.33-0.064-0.651-0.064-0.95l-0.003-0.38c-0.015-1.341 0.051-1.634 0.773-1.699 0.545-0.048 0.752-0.449 0.876-0.689 0.15-0.292 0.28-0.543 1.12-0.574l0.227-0.004c0.829 0 2.279 0.169 2.669 1.282 0 0.043-0.052 0.177-0.090 0.275-0.145 0.374-0.364 0.939-0.254 1.853 0.024 0.188-0.007 0.424-0.040 0.675l-0.089 0.805 0.441-0.048c0.008 0.104-0.004 0.269-0.075 0.472-0.097 0.289-0.242 0.438-0.237 0.454h-0.36l-0.114 0.342c-0.283 0.853-0.65 1.497-1.009 1.768l-0.198 0.15v2.726l0.438 0.055c3.211 0.401 5.641 2.123 6.030 4.192h-14.893z"},child:[]}]})(props);
}
/**
 * Vector icon from Themify Icons
 */
export function TfiVector(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14.94 6c-1.032-0.647-2.214-1-3.44-1-0.778 0-1.529 0.144-2.239 0.404l2.569-2.569c0.203 0.102 0.428 0.165 0.67 0.165 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5-1.5 0.673-1.5 1.5c0 0.22 0.050 0.428 0.136 0.616l-3.91 3.909c-0.081-0.014-0.164-0.025-0.25-0.025-0.827 0-1.5 0.673-1.5 1.5 0 0.085 0.011 0.168 0.025 0.25l-3.386 3.386c-0.188-0.086-0.395-0.136-0.615-0.136-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.242-0.063-0.467-0.165-0.669l2.57-2.57c-0.262 0.715-0.405 1.473-0.405 2.239 0 1.469 0.612 2.735 1 3.391v2.109h3v-3h-2.336c-0.418-0.826-0.664-1.713-0.664-2.5 0-0.887 0.22-1.764 0.628-2.545 0.113 0.027 0.228 0.045 0.348 0.045 0.827 0 1.5-0.673 1.5-1.5 0-0.18-0.037-0.35-0.095-0.51 1.644-1.131 3.847-1.268 5.619-0.373v2.383h3v-3h-2.060zM12.5 1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM1.5 13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM7 15h1v1h-1v-1zM6.976 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM16 8h-1v-1h1v1z"},child:[]}]})(props);
}
/**
 * VideoCamera icon from Themify Icons
 */
export function TfiVideoCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M12.991 6.75v-2.25c0-0.827-0.678-1.5-1.512-1.5h-7.479v-0.5c0-0.276 0.225-0.5 0.5-0.5h5.541v-1h-5.541c-0.827 0-1.5 0.673-1.5 1.5v0.5h-1.488c-0.834 0-1.512 0.673-1.512 1.5v2.001c0 0.827 0.678 1.5 1.512 1.5h0.504v5.499c0 0.827 0.673 1.5 1.5 1.5h7.964c0.834 0 1.512-0.673 1.512-1.5v-2.251l4.008 2.783v-10.065l-4.009 2.783zM16 12.121l-4.009-2.783v4.162c0 0.276-0.229 0.5-0.512 0.5h-7.963c-0.275 0-0.5-0.224-0.5-0.5v-6.499h-1.504c-0.283 0-0.512-0.224-0.512-0.5v-2.001c0-0.276 0.229-0.5 0.512-0.5h9.968c0.282 0 0.512 0.224 0.512 0.5v4.163l4.008-2.784v6.242z"},child:[]}]})(props);
}
/**
 * VideoClapper icon from Themify Icons
 */
export function TfiVideoClapper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 1v15h17v-15h-17zM16 4h-0.268l-2.356-2h2.624v2zM8.743 7l2.357-2h2.919l-2.357 2h-2.919zM6.803 4l-2.357-2h2.918l2.357 2h-2.918zM9.554 5l-2.357 2h-2.919l2.356-2h2.92zM11.268 4l-2.357-2h2.918l2.357 2h-2.918zM1 2h1.9l2.357 2h-4.257v-2zM1 5h4.089l-2.357 2h-1.732v-2zM16 15h-15v-7h15v7zM16 7h-2.792l2.356-2h0.436v2z"},child:[]}]})(props);
}
/**
 * ViewGrid icon from Themify Icons
 */
export function TfiViewGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 7h7v-7h-7v7zM1 1h5v5h-5v-5zM10 0v7h7v-7h-7zM16 6h-5v-5h5v5zM0 17h7v-7h-7v7zM1 11h5v5h-5v-5zM10 17h7v-7h-7v7zM11 11h5v5h-5v-5z"},child:[]}]})(props);
}
/**
 * ViewList icon from Themify Icons
 */
export function TfiViewList(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 0v4h17v-4h-17zM16 3h-15v-2h15v2zM0 10h17v-4h-17v4zM1 7h15v2h-15v-2zM0 16h17v-4h-17v4zM1 13h15v2h-15v-2z"},child:[]}]})(props);
}
/**
 * ViewListAlt icon from Themify Icons
 */
export function TfiViewListAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M5 0v4h12v-4h-12zM16 3h-10v-2h10v2zM5 10h12v-4h-12v4zM6 7h10v2h-10v-2zM5 16h12v-4h-12v4zM6 13h10v2h-10v-2zM0 4h4v-4h-4v4zM1 1h2v2h-2v-2zM0 10h4v-4h-4v4zM1 7h2v2h-2v-2zM0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"},child:[]}]})(props);
}
/**
 * Vimeo icon from Themify Icons
 */
export function TfiVimeo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M15.664 2.69c-0.416-0.528-1.13-0.808-2.063-0.808-0.264 0-0.521 0.023-0.758 0.059-0.869 0.146-3.019 1.232-3.746 3.518-0.051 0.158-0.019 0.332 0.085 0.463 0.104 0.13 0.269 0.201 0.433 0.187 0.562-0.045 0.982-0.012 1.112 0.133 0.104 0.113 0.142 0.386 0.106 0.768-0.046 0.51-0.333 1.099-0.634 1.675-0.145 0.264-0.588 1.075-0.862 1.075-0.065 0-0.169-0.069-0.276-0.184-0.514-0.555-0.62-1.613-0.711-2.548-0.032-0.308-0.061-0.602-0.104-0.88l-0.069-0.391c-0.095-0.55-0.203-1.173-0.374-1.729-0.206-0.644-0.699-1.474-1.421-1.698-0.156-0.044-0.326-0.066-0.503-0.066-0.688 0-1.306 0.329-1.481 0.431-0.733 0.435-1.326 0.968-1.9 1.484-0.433 0.388-0.88 0.791-1.386 1.148-0.132 0.094-0.211 0.335-0.211 0.497 0 0.189 0.106 0.362 0.276 0.447 0.056 0.029 0.064 0.042 0.109 0.13 0.072 0.14 0.221 0.429 0.64 0.496 0.371 0.055 0.719-0.054 1.008-0.145 0.157-0.050 0.306-0.096 0.403-0.096 0.035 0 0.076 0 0.159 0.139 0.173 0.289 0.268 0.619 0.368 0.969 0.052 0.178 0.103 0.356 0.166 0.54 0.222 0.611 0.392 1.278 0.571 1.984l0.157 0.627c0.358 1.475 0.849 3.493 2.219 4.068 0.207 0.088 0.443 0.133 0.703 0.133 0.669 0 1.377-0.294 1.77-0.54 1.166-0.687 2.241-1.702 3.284-3.104 1.911-2.558 3.088-5.64 3.293-6.722 0.163-0.866 0.045-1.54-0.363-2.060zM15.045 4.564c-0.146 0.768-1.153 3.688-3.112 6.309-0.963 1.295-1.94 2.224-3.001 2.849-0.394 0.246-1.187 0.501-1.564 0.341-0.907-0.381-1.329-2.116-1.637-3.384l-0.161-0.639c-0.185-0.729-0.361-1.419-0.596-2.070-0.056-0.16-0.102-0.322-0.149-0.482-0.113-0.395-0.231-0.804-0.471-1.204-0.246-0.416-0.588-0.627-1.017-0.627-0.251 0-0.48 0.072-0.702 0.142-0.159 0.050-0.31 0.097-0.479 0.107-0.013-0.023-0.027-0.050-0.044-0.078 0.378-0.298 0.72-0.605 1.054-0.906 0.562-0.506 1.093-0.983 1.738-1.365 0.232-0.135 0.626-0.293 0.975-0.293 0.086 0 0.164 0.010 0.22 0.025 0.256 0.079 0.593 0.547 0.75 1.038 0.151 0.49 0.253 1.080 0.342 1.601l0.069 0.387c0.039 0.247 0.065 0.523 0.095 0.812 0.107 1.092 0.23 2.328 0.975 3.131 0.312 0.333 0.651 0.502 1.008 0.502 0.868 0 1.393-0.962 1.784-1.68 0.311-0.597 0.646-1.291 0.708-1.98 0.064-0.704-0.051-1.19-0.363-1.533-0.314-0.345-0.761-0.444-1.138-0.471 0.808-1.539 2.363-2.115 2.671-2.167 0.184-0.027 0.39-0.046 0.602-0.046 0.353 0 0.986 0.056 1.277 0.426 0.218 0.279 0.272 0.689 0.166 1.255z"},child:[]}]})(props);
}
/**
 * VimeoAlt icon from Themify Icons
 */
export function TfiVimeoAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.132 2.301c-0.58-0.736-1.796-0.764-2.645-0.637-0.68 0.113-2.998 1.131-3.777 3.579 1.387-0.113 2.12 0.101 1.98 1.627-0.058 0.65-0.383 1.344-0.736 2.024-0.426 0.776-1.201 2.305-2.235 1.201-0.919-0.99-0.863-2.885-1.060-4.144-0.129-0.708-0.255-1.585-0.482-2.32-0.199-0.623-0.666-1.371-1.216-1.542-0.608-0.171-1.359 0.099-1.797 0.353-1.389 0.822-2.306 1.982-3.664 2.943v0.1c0.452 0.227 0.312 0.594 0.665 0.651 0.835 0.112 1.625-0.78 2.179 0.154 0.339 0.565 0.438 1.188 0.649 1.798 0.296 0.819 0.511 1.711 0.75 2.645 0.396 1.6 0.878 3.975 2.263 4.557 0.695 0.297 1.756-0.1 2.279-0.426 1.441-0.85 2.59-2.080 3.536-3.352 2.221-2.973 3.424-6.367 3.608-7.343 0.127-0.666 0.113-1.345-0.297-1.868z"},child:[]}]})(props);
}
/**
 * Volume icon from Themify Icons
 */
export function TfiVolume(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M3.587 5.933c-0.956 0-1.55 0.5-1.55 1.306v2.161c0 0.415 0.161 0.804 0.453 1.098 0.292 0.293 0.682 0.455 1.097 0.455h1.743l5.686 5.688v-16.429l-5.63 5.721h-1.799zM10.016 2.654v11.572l-4.272-4.273h-2.158c-0.303 0-0.549-0.248-0.549-0.553v-2.161c0-0.091 0-0.306 0.55-0.306h2.217l4.212-4.279zM12.005 10.987v-1c0.556 0 1.008-0.452 1.008-1.008s-0.452-1.008-1.008-1.008v-1c1.107 0 2.008 0.901 2.008 2.008s-0.901 2.008-2.008 2.008zM16.029 8.987c0 2.206-1.794 4-4 4v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3v-1c2.205 0 4 1.795 4 4z"},child:[]}]})(props);
}
/**
 * Wallet icon from Themify Icons
 */
export function TfiWallet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M1.564 2c-0.854 0-1.55 0.69-1.55 1.538h-0.014v10.939c0 0.848 0.695 1.538 1.55 1.538h13.492v-1.655h1.958v-12.36h-15.436zM1.55 15.014c-0.303 0-0.55-0.241-0.55-0.538v-9.583c0.024 0.007 0.054 0.005 0.078 0.012 0.143 0.042 0.293 0.068 0.453 0.071 0.007 0 0.012 0.003 0.019 0.003h12.493v3.035h-2.859c-0.862 0-1.563 0.673-1.563 1.5v1c0 0.827 0.701 1.5 1.563 1.5h2.859v3h-12.493zM11.183 11.014c-0.311 0-0.563-0.224-0.563-0.5v-1c0-0.276 0.253-0.5 0.563-0.5h4.817v2h-4.817zM16 13.359h-0.958v-1.345h0.958v1.345zM15.042 8.014v-4.035h-13.478c-0.273 0-0.55-0.137-0.55-0.441 0.001-0.297 0.248-0.538 0.55-0.538h14.436v5.014h-0.958z"},child:[]}]})(props);
}
/**
 * Wand icon from Themify Icons
 */
export function TfiWand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 5h-3.293l2.328 2.328-0.707 0.707-2.328-2.328v3.293h-1v-3.286l-10.646 10.665-0.707-0.707 10.653-10.672h-3.3v-1h3.293l-2.328-2.328 0.707-0.707 2.328 2.328v-3.293h1v3.297l2.287-2.291 0.707 0.707-2.283 2.287h3.289v1z"},child:[]}]})(props);
}
/**
 * Wheelchair icon from Themify Icons
 */
export function TfiWheelchair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M10.901 12.85l0.977 0.213c-0.505 2.318-2.511 3.937-4.878 3.937-2.757 0-5-2.243-5-5 0-2.27 1.531-4.259 3.725-4.836l0.254 0.967c-1.754 0.462-2.979 2.053-2.979 3.869 0 2.206 1.794 4 4 4 1.893 0 3.497-1.295 3.901-3.15zM16 15.121v1h-1.868l-0.955-4.118h-6.158l-0.544-8.082c-0.847-0.233-1.475-1.001-1.475-1.921 0-1.103 0.897-2 2-2s2 0.897 2 2c0 0.938-0.65 1.72-1.521 1.936l0.27 4.011 3.632-0.901 0.24 0.971-3.805 0.943 0.138 2.042h6.018l0.955 4.118h1.073zM7 3c0.552 0 1-0.449 1-1s-0.448-1-1-1-1 0.449-1 1 0.448 1 1 1z"},child:[]}]})(props);
}
/**
 * Widget icon from Themify Icons
 */
export function TfiWidget(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 0h1v1h-1v-1zM5 0h-1v1h1v-1zM7 0h-1v1h1v-1zM9 0h-1v1h1v-1zM11 0h-1v1h1v-1zM13 0h-1v1h1v-1zM14 1h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM14 17h1v-1h-1v1zM16 0v1h1v-1h-1zM16 3h1v-1h-1v1zM16 5h1v-1h-1v1zM16 7h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 15h1v-1h-1v1zM16 17h1v-1h-1v1zM0 1h1v-1h-1v1zM0 3h1v-1h-1v1zM0 5h1v-1h-1v1zM0 7h1v-1h-1v1zM0 9h1v-1h-1v1zM0 11h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 17h1v-1h-1v1zM13.465 7.929c0.021 0.187 0.035 0.377 0.035 0.571s-0.014 0.384-0.035 0.571l-0.037 0.328-1.439 0.432c-0.025 0.065-0.051 0.129-0.080 0.193l0.711 1.322-0.205 0.258c-0.238 0.299-0.511 0.572-0.811 0.811l-0.258 0.206-1.322-0.712c-0.063 0.028-0.128 0.055-0.193 0.080l-0.431 1.438-0.327 0.038c-0.188 0.022-0.379 0.035-0.573 0.035s-0.385-0.013-0.573-0.035l-0.327-0.038-0.432-1.438c-0.065-0.025-0.129-0.051-0.193-0.080l-1.323 0.711-0.258-0.205c-0.299-0.238-0.572-0.511-0.81-0.811l-0.204-0.257 0.711-1.322c-0.029-0.065-0.055-0.129-0.080-0.194l-1.439-0.432-0.037-0.328c-0.021-0.187-0.035-0.377-0.035-0.571s0.014-0.384 0.035-0.571l0.037-0.328 1.439-0.432c0.025-0.065 0.051-0.129 0.080-0.193l-0.711-1.322 0.204-0.258c0.237-0.298 0.51-0.571 0.811-0.811l0.258-0.206 1.322 0.712c0.063-0.029 0.128-0.055 0.193-0.080l0.432-1.438 0.327-0.038c0.376-0.044 0.77-0.044 1.146 0l0.327 0.038 0.432 1.438c0.065 0.024 0.129 0.051 0.193 0.080l1.322-0.712 0.258 0.206c0.299 0.238 0.572 0.511 0.81 0.81l0.205 0.258-0.711 1.323c0.028 0.063 0.055 0.128 0.080 0.192l1.439 0.433 0.037 0.328zM12.5 8.5c0-0.045-0.001-0.090-0.003-0.135l-1.303-0.391-0.076-0.26c-0.052-0.175-0.123-0.348-0.211-0.512l-0.127-0.237 0.642-1.193c-0.062-0.066-0.126-0.131-0.193-0.193l-1.192 0.642-0.239-0.128c-0.164-0.088-0.337-0.16-0.513-0.212l-0.26-0.077-0.39-1.301c-0.089-0.004-0.181-0.004-0.27 0l-0.39 1.302-0.26 0.077c-0.178 0.053-0.35 0.124-0.512 0.211l-0.237 0.129-1.194-0.643c-0.067 0.063-0.131 0.127-0.193 0.193l0.642 1.193-0.128 0.237c-0.088 0.164-0.16 0.336-0.212 0.514l-0.077 0.259-1.301 0.39c-0.002 0.045-0.003 0.090-0.003 0.135s0.001 0.090 0.003 0.134l1.302 0.391 0.077 0.26c0.052 0.177 0.124 0.35 0.212 0.514l0.127 0.237-0.642 1.193c0.062 0.066 0.126 0.131 0.193 0.193l1.193-0.642 0.237 0.127c0.164 0.088 0.337 0.16 0.513 0.212l0.26 0.077 0.391 1.302c0.089 0.004 0.181 0.004 0.27 0l0.391-1.301 0.259-0.077c0.177-0.052 0.35-0.124 0.514-0.212l0.237-0.127 1.192 0.642c0.067-0.062 0.131-0.127 0.193-0.193l-0.642-1.193 0.127-0.237c0.088-0.164 0.16-0.336 0.212-0.514l0.077-0.259 1.301-0.391c0.002-0.046 0.003-0.091 0.003-0.136z"},child:[]}]})(props);
}
/**
 * WidgetAlt icon from Themify Icons
 */
export function TfiWidgetAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 0h1v1h-1v-1zM5 0h-1v1h1v-1zM7 0h-1v1h1v-1zM9 0h-1v1h1v-1zM11 0h-1v1h1v-1zM13 0h-1v1h1v-1zM14 1h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM14 17h1v-1h-1v1zM16 0v1h1v-1h-1zM16 3h1v-1h-1v1zM16 5h1v-1h-1v1zM16 7h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 15h1v-1h-1v1zM16 17h1v-1h-1v1zM0 1h1v-1h-1v1zM0 3h1v-1h-1v1zM0 5h1v-1h-1v1zM0 7h1v-1h-1v1zM0 9h1v-1h-1v1zM0 11h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 17h1v-1h-1v1zM8.498 10.043l-4.144-4.147-0.708 0.708 4.852 4.854 4.855-4.854-0.707-0.707-4.148 4.146z"},child:[]}]})(props);
}
/**
 * Widgetized icon from Themify Icons
 */
export function TfiWidgetized(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M2 0h1v1h-1v-1zM4 1h1v-1h-1v1zM6 1h1v-1h-1v1zM8 1h1v-1h-1v1zM10 1h1v-1h-1v1zM12 1h1v-1h-1v1zM14 1h1v-1h-1v1zM2 9h1v-1h-1v1zM4 9h1v-1h-1v1zM6 9h1v-1h-1v1zM10 9h1v-1h-1v1zM12 9h1v-1h-1v1zM14 9h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM14 17h1v-1h-1v1zM16 0v1h1v-1h-1zM16 3h1v-1h-1v1zM16 5h1v-1h-1v1zM16 7h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 15h1v-1h-1v1zM8 3h1v-1h-1v1zM8 5h1v-1h-1v1zM8 7h1v-1h-1v1zM8 9h1v-1h-1v1zM8 11h1v-1h-1v1zM8 13h1v-1h-1v1zM8 15h1v-1h-1v1zM16 17h1v-1h-1v1zM0 1h1v-1h-1v1zM0 3h1v-1h-1v1zM0 5h1v-1h-1v1zM0 7h1v-1h-1v1zM0 9h1v-1h-1v1zM0 11h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 17h1v-1h-1v1z"},child:[]}]})(props);
}
/**
 * Window icon from Themify Icons
 */
export function TfiWindow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M0 1v15h17v-15h-17zM16 2v3h-15v-3h15zM1 15v-9h15v9h-15zM7 4h-1v-1h1v1zM5 4h-1v-1h1v1zM3 4h-1v-1h1v1z"},child:[]}]})(props);
}
/**
 * Wordpress icon from Themify Icons
 */
export function TfiWordpress(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.5 8.5c0 4.41-3.589 8-8 8s-8-3.59-8-8 3.589-8 8-8 8 3.59 8 8zM16.134 8.5c0-4.205-3.428-7.634-7.634-7.634s-7.634 3.429-7.634 7.634 3.428 7.634 7.634 7.634 7.634-3.429 7.634-7.634zM2.232 5.705l3.277 8.974c-2.295-1.117-3.875-3.465-3.875-6.179 0-0.99 0.215-1.938 0.598-2.795zM12.607 10.375l-0.679 2.286-2.482-7.374c0 0 0.411-0.027 0.786-0.072 0.366-0.045 0.322-0.59-0.044-0.562-1.116 0.080-1.831 0.089-1.831 0.089s-0.669-0.010-1.803-0.090c-0.375-0.027-0.42 0.535-0.045 0.562 0.348 0.036 0.714 0.073 0.714 0.073l1.071 2.928-1.5 4.5-2.5-7.428c0 0 0.411-0.027 0.786-0.072 0.366-0.045 0.322-0.59-0.044-0.562-1.108 0.080-1.831 0.089-1.831 0.089-0.125 0-0.276-0.009-0.437-0.009 1.223-1.867 3.33-3.099 5.732-3.099 1.786 0 3.411 0.688 4.634 1.804-0.027 0-0.062 0-0.089 0-0.67 0-1.152 0.581-1.152 1.215 0 0.562 0.33 1.036 0.678 1.606 0.269 0.456 0.562 1.045 0.562 1.894 0.001 0.587-0.239 1.267-0.526 2.222zM10.731 14.876c0.009 0.035 0.027 0.070 0.045 0.098-0.714 0.25-1.473 0.393-2.277 0.393-0.669 0-1.321-0.1-1.938-0.286l2.054-5.981 2.116 5.776zM15.366 8.5c0 2.535-1.375 4.741-3.42 5.929l2.098-6.054c0.348-1.001 0.527-1.767 0.527-2.465 0-0.249-0.018-0.482-0.054-0.705 0.537 0.982 0.849 2.099 0.849 3.295z"},child:[]}]})(props);
}
/**
 * World icon from Themify Icons
 */
export function TfiWorld(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"},child:[]}]})(props);
}
/**
 * Write icon from Themify Icons
 */
export function TfiWrite(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"},child:[]}]})(props);
}
/**
 * Yahoo icon from Themify Icons
 */
export function TfiYahoo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.5 16.5c-0.327-0.058-0.664-0.105-1.010-0.105-0.336 0-0.673 0.048-1.009 0.105l0.125-6.799c-1.789-3.086-3.472-6.229-5.442-9.201 0.336 0.087 0.682 0.144 1.038 0.144s0.721-0.068 1.067-0.144c1.346 2.386 2.808 4.702 4.221 7.048 1.423-2.327 2.933-4.644 4.222-7.048 0.336 0.087 0.683 0.135 1.028 0.135 0.366 0 0.741-0.048 1.096-0.135-0.77 1.058-1.404 2.211-2.067 3.336-1.145 1.952-2.27 3.905-3.395 5.865l0.126 6.799z"},child:[]}]})(props);
}
/**
 * Youtube icon from Themify Icons
 */
export function TfiYoutube(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M8.301 6.422c0.437 0 0.769-0.161 1.006-0.484 0.181-0.237 0.265-0.617 0.265-1.12v-1.66c0-0.503-0.084-0.873-0.265-1.11-0.238-0.321-0.57-0.483-1.006-0.483-0.428 0-0.76 0.161-0.995 0.483-0.181 0.238-0.266 0.608-0.266 1.111v1.66c0 0.503 0.085 0.873 0.266 1.12 0.235 0.322 0.567 0.483 0.995 0.483zM7.893 2.988c0-0.436 0.133-0.654 0.408-0.654 0.285 0 0.408 0.218 0.408 0.654v1.992c0 0.437-0.123 0.664-0.408 0.664-0.275 0-0.408-0.228-0.408-0.664v-1.992zM10.35 6.071c-0.048-0.143-0.075-0.37-0.075-0.711v-3.738h0.863v3.481c0 0.2 0 0.313 0.010 0.333 0.019 0.133 0.085 0.208 0.199 0.208 0.17 0 0.35-0.133 0.54-0.408v-3.614h0.863v4.734h-0.863v-0.522c-0.341 0.398-0.663 0.588-0.978 0.588-0.275 0-0.474-0.113-0.559-0.351zM13.633 11.811v0.436h-0.854v-0.436c0-0.427 0.143-0.646 0.427-0.646 0.284 0.001 0.427 0.219 0.427 0.646zM4.354 1.774c-0.208-0.588-0.416-1.186-0.617-1.774h1.007l0.673 2.495 0.645-2.495h0.968l-1.148 3.785v2.571h-0.948v-2.571c-0.086-0.465-0.276-1.129-0.58-2.011zM15.283 8.785c-0.171-0.75-0.788-1.3-1.518-1.385-1.746-0.19-3.511-0.19-5.266-0.19s-3.52 0-5.256 0.19c-0.738 0.085-1.346 0.635-1.526 1.385-0.237 1.062-0.247 2.22-0.247 3.32 0 1.091 0 2.257 0.247 3.32 0.171 0.75 0.788 1.3 1.518 1.376 1.745 0.199 3.51 0.199 5.265 0.199s3.52 0 5.266-0.199c0.729-0.076 1.337-0.626 1.518-1.376 0.237-1.062 0.247-2.229 0.247-3.32-0.001-1.1-0.001-2.258-0.248-3.32zM5.483 9.743h-1.014v5.398h-0.949v-5.398h-0.997v-0.892h2.96v0.892zM8.045 15.141h-0.845v-0.512c-0.342 0.389-0.664 0.579-0.968 0.579-0.274 0-0.474-0.114-0.55-0.351-0.048-0.142-0.076-0.361-0.076-0.692v-3.709h0.845v3.453c0 0.2 0 0.304 0.009 0.333 0.020 0.132 0.086 0.199 0.199 0.199 0.172 0 0.352-0.132 0.541-0.398v-3.586h0.845v4.684zM11.271 13.737c0 0.437-0.020 0.749-0.086 0.948-0.104 0.342-0.342 0.522-0.674 0.522-0.303 0-0.598-0.171-0.883-0.522v0.456h-0.843v-6.29h0.843v2.059c0.275-0.342 0.57-0.512 0.883-0.512 0.332 0 0.57 0.18 0.674 0.531 0.066 0.19 0.086 0.502 0.086 0.939v1.869zM14.477 12.959h-1.698v0.825c0 0.437 0.143 0.654 0.437 0.654 0.209 0 0.332-0.113 0.38-0.341 0.009-0.047 0.019-0.237 0.019-0.579h0.863v0.124c0 0.275 0 0.465-0.019 0.55-0.020 0.189-0.096 0.36-0.199 0.512-0.229 0.332-0.579 0.503-1.024 0.503-0.446 0-0.779-0.161-1.025-0.484-0.18-0.228-0.275-0.598-0.275-1.101v-1.641c0-0.503 0.086-0.863 0.266-1.101 0.247-0.323 0.579-0.484 1.016-0.484 0.428 0 0.759 0.161 1.005 0.484 0.172 0.237 0.257 0.597 0.257 1.101v0.978zM10.426 11.801v2.002c0 0.427-0.124 0.635-0.37 0.635-0.143 0-0.285-0.066-0.428-0.208v-2.855c0.143-0.143 0.285-0.209 0.428-0.209 0.246 0 0.37 0.218 0.37 0.635z"},child:[]}]})(props);
}
/**
 * Zip icon from Themify Icons
 */
export function TfiZip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h3v1h1v-1h2v5h5v10h-11zM5 8h1v1h-1v-1zM6 8v-1h1v1h-1zM6 6v-1h1v1h-1zM5 6h1v1h-1v-1zM5 4h1v1h-1v-1zM6 4v-1h1v1h-1zM5 2h1v1h-1v-1zM6 9.389c-1.103 0-2 0.897-2 2s0.897 2 2 2c0.062 0 0.121-0.007 0.219-0.020 0.646-0.071 1.218-0.455 1.531-1.026 0.166-0.303 0.25-0.624 0.25-0.954 0-1.103-0.897-2-2-2zM6.873 11.864c-0.156 0.285-0.441 0.477-0.762 0.512l-0.112 0.014c-0.551 0-0.999-0.449-0.999-1s0.449-1 1-1 1 0.449 1 1c0 0.159-0.043 0.319-0.127 0.474z"},child:[]}]})(props);
}
/**
 * ZoomIn icon from Themify Icons
 */
export function TfiZoomIn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.604 15.896l-5.173-5.173c0.975-1.137 1.569-2.61 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.737 0-3.369 0.676-4.597 1.904-1.228 1.227-1.903 2.86-1.903 4.596 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.086-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 12c-3.033 0-5.5-2.467-5.5-5.5 0-1.47 0.571-2.851 1.61-3.89 1.039-1.038 2.42-1.61 3.89-1.61 3.033 0 5.5 2.467 5.5 5.5 0 3.033-2.467 5.5-5.5 5.5zM7 6h2v1h-2v2h-1v-2h-2v-1h2v-2h1v2z"},child:[]}]})(props);
}
/**
 * ZoomOut icon from Themify Icons
 */
export function TfiZoomOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5zM4 5.972h5v1h-5v-1z"},child:[]}]})(props);
}
