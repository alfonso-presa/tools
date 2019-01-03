/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-inky-focus-behavior.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

declare module 'goog:polymer.paperBehaviors.paperInkyFocusBehavior' {

  import {IronButtonState} from 'goog:polymer.ironBehaviors.ironButtonState'; // from //third_party/javascript/polymer/v2/iron-behaviors

  import {IronControlState} from 'goog:polymer.ironBehaviors.ironControlState'; // from //third_party/javascript/polymer/v2/iron-behaviors

  import {PaperRippleBehavior} from 'goog:polymer.paperBehaviors.paperRippleBehavior'; // from //third_party/javascript/polymer/v2/paper-behaviors

  /**
   * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
   * focus.
   */
  interface PaperInkyFocusBehavior extends IronButtonState, IronControlState, PaperRippleBehavior {
    _createRipple(): any;
    _focusedChanged(receivedFocusFromKeyboard: any): void;
  }

  const PaperInkyFocusBehavior: object;

  export {PaperInkyFocusBehavior};
}
