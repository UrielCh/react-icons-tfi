import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Upload icon from Themify Icons
 * @module
 */
export function TfiUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{}},{tag:"path",attr:{d:"M17 16v1h-17v-1h17zM7.999 1.708v11.292h1v-11.294l3.647 3.647 0.707-0.707-4.853-4.853-4.854 4.853 0.707 0.707 3.646-3.645z"},child:[]}]})(props);
}
export default TfiUpload;
