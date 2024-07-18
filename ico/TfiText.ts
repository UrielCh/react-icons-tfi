import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Text icon from Themify Icons
 * @module
 */
export function TfiText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M14 2v3h-1v-2h-4v12h1.643v1h-4.286v-1h1.643v-12h-4v2h-1v-3h11z"},child:[]}]})(props);
}
export default TfiText;
