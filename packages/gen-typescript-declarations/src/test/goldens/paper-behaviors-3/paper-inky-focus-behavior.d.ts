/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-inky-focus-behavior.js
 */

import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';

import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';

import {PaperRippleBehavior} from './paper-ripple-behavior.js';

/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 */
interface PaperInkyFocusBehavior extends IronButtonState, IronControlState, PaperRippleBehavior {
  _createRipple(): any;
  _focusedChanged(receivedFocusFromKeyboard: any): void;
}

declare const PaperInkyFocusBehavior: object;

export {PaperInkyFocusBehavior};
